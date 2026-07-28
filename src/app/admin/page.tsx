"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-shell">
      <form onSubmit={onSubmit} className="admin-card admin-login-card">
        <div className="mb-6 flex flex-col items-center text-center">
          <Image src="/logo.png" alt="AskFinBots" width={64} height={64} className="h-16 w-16 object-contain" />
          <h1 className="mt-3 text-xl font-semibold text-slate-900">AskFinBots Admin</h1>
          <p className="mt-1 text-sm text-slate-500">Manage RAG materials by exam</p>
        </div>

        <label className="admin-label">
          Username
          <input
            className="admin-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>

        <label className="admin-label mt-3">
          Password
          <input
            className="admin-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button type="submit" className="admin-btn mt-5 w-full" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
