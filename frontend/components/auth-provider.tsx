"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  apiRequest,
  clearTokens,
  saveTokens,
  type AuthUser,
  type UserRole,
} from "@/lib/api";

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthUser>;
  logout: () => Promise<void>;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function roleHome(role: UserRole): string {
  switch (role) {
    case "ADMIN":
      return "/admin";
    case "COMPANY_MD":
      return "/company";
    case "COMPANY_EMPLOYEE":
      return "/employee";
    default:
      return "/dashboard";
  }
}

function extractUser(data: unknown): AuthUser {
  const result = data as {
    user?: AuthUser;
    data?: AuthUser;
    id?: string;
    role?: UserRole;
  };

  const user = result.user ?? result.data ?? result;

  if (!user.id || !user.role || !user.email) {
    throw new Error("Could not retrieve your user profile.");
  }

  return user as AuthUser;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function restoreSession() {
      try {
        const accessToken = sessionStorage.getItem("accessToken");
        const refreshToken = sessionStorage.getItem("refreshToken");

        if (!accessToken && !refreshToken) return;

        const profile = await apiRequest<unknown>("/auth/me");

        if (active) {
          setUser(extractUser(profile));
        }
      } catch {
        clearTokens();

        if (active) {
          setUser(null);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void restoreSession();

    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<AuthUser> => {
      clearTokens();
      setUser(null);

      const tokens = await apiRequest<LoginResponse>(
        "/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
        },
        false,
      );

      if (!tokens.accessToken || !tokens.refreshToken) {
        throw new Error("The server did not return both authentication tokens.");
      }

      saveTokens(tokens);

      try {
        const profile = await apiRequest<unknown>("/auth/me");
        const authenticatedUser = extractUser(profile);

        setUser(authenticatedUser);
        return authenticatedUser;
      } catch (error) {
        clearTokens();
        throw error;
      }
    },
    [],
  );

  const logout = useCallback(async () => {
    try {
      if (sessionStorage.getItem("accessToken")) {
        await apiRequest("/auth/logout", { method: "POST" }, false);
      }
    } finally {
      clearTokens();
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}

export function useLogout() {
  const { logout } = useAuth();
  const router = useRouter();

  return async () => {
    await logout();
    router.replace("/login");
  };
}