"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ExamLogo } from "@/components/ExamLogo";
import { EXAM_STORAGE_KEY } from "@/lib/constants";
import { FINANCIAL_EXAMS, getExamById } from "@/lib/exams";

export function readStoredExamId(): string | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(EXAM_STORAGE_KEY)?.trim();
  if (stored && getExamById(stored)) return stored;
  return null;
}

export function resolvePreferredExamId(userExamId?: string | null): string {
  if (userExamId && getExamById(userExamId)) return userExamId;
  return readStoredExamId() || FINANCIAL_EXAMS[0]?.id || "cfa";
}

type SelectedQualificationBannerProps = {
  examId: string;
  /** Optional level / paper controls shown beside the locked qualification. */
  levelControls?: ReactNode;
  className?: string;
};

/** Compact locked-in qualification strip used on Study Path, Mindmap, and Flashcards. */
export function SelectedQualificationBanner({
  examId,
  levelControls,
  className = "",
}: SelectedQualificationBannerProps) {
  const exam = getExamById(examId) || FINANCIAL_EXAMS[0];
  if (!exam) return null;

  return (
    <div
      className={`mb-5 rounded-2xl border border-line bg-white p-4 shadow-sm ${className}`.trim()}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <ExamLogo src={exam.logo} alt={`${exam.name} logo`} size={40} className="!mx-0" />
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Your qualification
            </p>
            <p className="font-display text-lg font-semibold text-navy">{exam.name}</p>
            <p className="mt-0.5 truncate text-xs text-slate-600">{exam.fullName}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              You can change your qualification under{" "}
              <Link
                href="/profile?tab=exam"
                className="font-semibold text-navy underline underline-offset-2"
              >
                My Profile
              </Link>
              .
            </p>
          </div>
        </div>
        {levelControls ? <div className="min-w-[12rem] flex-1 sm:max-w-xs">{levelControls}</div> : null}
      </div>
    </div>
  );
}

type NoQualificationPromptProps = {
  className?: string;
};

export function NoQualificationPrompt({ className = "" }: NoQualificationPromptProps) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center ${className}`.trim()}
    >
      <p className="font-semibold text-navy">No qualification selected yet</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">
        Choose your exam on the Ask Bot page first. You can also set or change it anytime under My
        Profile.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="admin-btn">
          Choose on Ask Bot
        </Link>
        <Link href="/profile?tab=exam" className="btn-secondary">
          My Profile
        </Link>
      </div>
    </div>
  );
}
