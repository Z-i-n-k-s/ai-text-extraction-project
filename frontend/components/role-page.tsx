"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { roleHome, useAuth, useLogout } from "@/components/auth-provider";
import type { UserRole } from "@/lib/api";

export default function RolePage({
  allowedRoles,
  title,
  children,
}: {
  allowedRoles: UserRole[];
  title: string;
  children?: ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const logout = useLogout();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      router.replace(roleHome(user.role));
    }
  }, [user, loading, allowedRoles, router]);

  if (loading || !user || !allowedRoles.includes(user.role)) {
    return <main className="p-8">Checking authentication...</main>;
  }

  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>

      <p>
        Logged in as: <strong>{user.fullName}</strong>
      </p>
      <p>
        Email: {user.email}
      </p>
      <p>
        Role: <strong>{user.role}</strong>
      </p>

      <div className="my-6">{children}</div>

      <button
        onClick={() => void logout()}
        className="rounded border px-4 py-2 hover:bg-gray-100"
      >
        Logout
      </button>
    </main>
  );
}