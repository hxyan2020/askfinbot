"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ExamRow {
  id: string;
  name: string;
  fullName: string;
  description: string;
  documentCount: number;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [exams, setExams] = useState<ExamRow[]>([]);
  const [pendingMentors, setPendingMentors] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/exams")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/admin");
          return null;
        }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load exams");
        setExams(data.exams || []);
        return data;
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load"));
    fetch("/api/admin/mentor/conversations")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setPendingMentors(data?.pendingCount || 0))
      .catch(() => undefined);
  }, [router]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  return (
    <div className="admin-shell admin-shell-wide">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="AskFinBots" width={40} height={40} className="h-10 w-10 object-contain" />
          <div>
            <h1 className="text-xl font-semibold text-slate-900">RAG Admin</h1>
            <p className="text-sm text-slate-500">Upload textbooks & test banks per qualification</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/" className="admin-btn-secondary">
            View site
          </Link>
          <button type="button" onClick={logout} className="admin-btn-secondary">
            Log out
          </button>
        </div>
      </header>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <Link
        href="/admin/promos"
        className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-5 transition hover:border-emerald-400"
      >
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Promo codes</h2>
          <p className="mt-1 text-sm text-slate-600">
            Create and disable 20% checkout discounts or 100% unlimited grants.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white">
          Billing
        </span>
      </Link>

      <Link
        href="/admin/mentors"
        className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 transition hover:border-amber-400"
      >
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Mentor inbox</h2>
          <p className="mt-1 text-sm text-slate-600">
            Review full AI transcripts, match a mentor, and push human replies to users.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-amber-700 px-3 py-1.5 text-xs font-bold text-white">
          {pendingMentors} pending
        </span>
      </Link>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <Link key={exam.id} href={`/admin/exams/${exam.id}`} className="admin-card block transition hover:border-navy/30">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{exam.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{exam.fullName}</p>
              </div>
              <span className="rounded-full bg-navy/10 px-2.5 py-1 text-xs font-medium text-navy">
                {exam.documentCount} docs
              </span>
            </div>
            <p className="mt-3 line-clamp-2 text-sm text-slate-600">{exam.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
