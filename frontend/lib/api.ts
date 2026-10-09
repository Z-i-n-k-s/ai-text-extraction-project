const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export type UserRole =
  | "ADMIN"
  | "COMPANY_MD"
  | "COMPANY_EMPLOYEE"
  | "USER";

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
}

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export function clearTokens(): void {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
}

export function saveTokens(tokens: TokenResponse): void {
  sessionStorage.setItem("accessToken", tokens.accessToken);
  sessionStorage.setItem("refreshToken", tokens.refreshToken);
}

async function readResponse(response: Response): Promise<unknown> {
  return response.json().catch(() => ({}));
}

function getErrorMessage(data: unknown): string {
  if (typeof data === "object" && data !== null && "message" in data) {
    const message = (data as { message: unknown }).message;

    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string") return message;
  }

  return "Request failed. Please try again.";
}

async function sendRequest(
  path: string,
  options: RequestInit,
  allowRefresh: boolean,
): Promise<unknown> {
  const headers = new Headers(options.headers);

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const accessToken = sessionStorage.getItem("accessToken");

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  let response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (
    response.status === 401 &&
    allowRefresh &&
    path !== "/auth/login" &&
    path !== "/auth/refresh" &&
    path !== "/auth/logout"
  ) {
    const refreshToken = sessionStorage.getItem("refreshToken");

    if (refreshToken) {
      const refreshResponse = await fetch(`${API_URL}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (refreshResponse.ok) {
        const tokens =
          (await readResponse(refreshResponse)) as TokenResponse;

        if (tokens.accessToken && tokens.refreshToken) {
          saveTokens(tokens);

          return sendRequest(path, options, false);
        }
      }
    }

    clearTokens();
  }

  const data = await readResponse(response);

  if (!response.ok) {
    throw new Error(getErrorMessage(data));
  }

  return data;
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  allowRefresh = true,
): Promise<T> {
  const data = await sendRequest(path, options, allowRefresh);
  return data as T;
}