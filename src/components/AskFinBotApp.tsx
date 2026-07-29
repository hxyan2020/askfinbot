"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FREE_TOKENS,
  EXAM_STORAGE_KEY,
  PROVIDER_STORAGE_KEY,
  PROVIDER_MANUAL_KEY,
  type LLMProvider,
} from "@/lib/constants";
import { type FinancialExam, getExamById } from "@/lib/exams";
import { isLikelyMainlandChina, preferredProviderForLocale } from "@/lib/provider-preference";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ExamSelector } from "./ExamSelector";
import { ExamLogo } from "./ExamLogo";
import { ChatPanel } from "./ChatPanel";
import { CombinedHowItWorksDemo } from "./CombinedHowItWorksDemo";

type AuthUser = {
  id: string;
  email: string;
  name: string;
  examId: string | null;
  tokens: number;
  unlimitedTokens?: boolean;
};

function getInitialProvider(): LLMProvider {
  if (typeof window === "undefined") return "gemini";
  const storedProvider = localStorage.getItem(PROVIDER_STORAGE_KEY);
  const stored =
    storedProvider === "deepseek" || storedProvider === "gemini" ? storedProvider : null;
  return preferredProviderForLocale(stored);
}

export function AskFinBotApp() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedExam, setSelectedExam] = useState<FinancialExam | null>(null);
  const [provider, setProvider] = useState<LLMProvider>(getInitialProvider);
  const [tokens, setTokens] = useState(0);
  const [unlimitedTokens, setUnlimitedTokens] = useState(false);
  const [showExamPicker, setShowExamPicker] = useState(true);
  const [examNotice, setExamNotice] = useState<string | null>(null);

  // Mainland China: default to DeepSeek unless the user already picked a provider manually.
  useEffect(() => {
    if (!isLikelyMainlandChina()) return;
    if (localStorage.getItem(PROVIDER_MANUAL_KEY) === "1") return;
    setProvider((current) => {
      if (current === "deepseek") return current;
      localStorage.setItem(PROVIDER_STORAGE_KEY, "deepseek");
      return "deepseek";
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (cancelled) return;
        if (data.user) {
          setUser(data.user);
          setTokens(data.user.tokens);
          setUnlimitedTokens(Boolean(data.user.unlimitedTokens));
          if (data.user.examId) {
            const exam = getExamById(data.user.examId);
            if (exam) {
              setSelectedExam(exam);
              setShowExamPicker(false);
            }
          }
        } else {
          setUser(null);
        }
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setAuthChecked(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSelectExam = useCallback((exam: FinancialExam) => {
    setSelectedExam(exam);
    localStorage.setItem(EXAM_STORAGE_KEY, exam.id);
    setShowExamPicker(false);
    setExamNotice(
      `${exam.name} selected. You can change your qualification track anytime under My Profile.`
    );
    void fetch("/api/auth/me", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ examId: exam.id }),
    }).catch(() => undefined);
  }, []);

  const handleProviderChange = useCallback((newProvider: LLMProvider, options?: { manual?: boolean }) => {
    setProvider(newProvider);
    localStorage.setItem(PROVIDER_STORAGE_KEY, newProvider);
    if (options?.manual !== false) {
      localStorage.setItem(PROVIDER_MANUAL_KEY, "1");
    }
  }, []);

  const handleProviderAutoSwitch = useCallback((newProvider: LLMProvider) => {
    setProvider(newProvider);
    localStorage.setItem(PROVIDER_STORAGE_KEY, newProvider);
  }, []);

  const goToPlans = useCallback(() => {
    router.push("/cart");
  }, [router]);

  const handleTokenUsed = useCallback((remaining?: number) => {
    if (unlimitedTokens) return;
    setTokens((prev) => {
      const next = typeof remaining === "number" ? remaining : Math.max(0, prev - 1);
      if (next <= 0) router.push("/cart");
      return next;
    });
  }, [router, unlimitedTokens]);

  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Image src="/logo.png" alt="AskFinBots" width={56} height={56} className="h-14 w-14 object-contain" />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
          <section className="mx-auto max-w-xl text-center">
            <p className="text-sm font-medium text-gold">Financial exam tutor</p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Log in to use AskFinBots
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Free trial tokens are tied to your account so they can&apos;t be refreshed by clearing
              the browser. Create an account to get {FREE_TOKENS} free tokens, then ask questions or
              open Study Path.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/profile" className="btn-rainbow">
                Login to start study!
              </Link>
            </div>
          </section>

          <section className="mx-auto mt-12 max-w-2xl" aria-label="How AskFinBots works">
            <CombinedHowItWorksDemo />
          </section>

          <section className="mt-12 grid gap-6 sm:grid-cols-3" aria-label="What you get">
            <div className="surface-card about-feature-card p-6">
              <span className="about-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 6.5h16M4 12h10M4 17.5h7" />
                  <path d="m17 15 1.2 2.4L21 18l-2 1.8.5 2.7-2.5-1.3-2.5 1.3.5-2.7L13 18l2.8-.6L17 15Z" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold text-navy">RAG-powered answers</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Replies are grounded in curated exam materials via retrieval-augmented generation —
                so explanations stay close to the syllabus you are sitting.
              </p>
            </div>
            <div className="surface-card about-feature-card p-6">
              <span className="about-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3 4.5 6.5v5c0 4.5 3.1 7.8 7.5 9.5 4.4-1.7 7.5-5 7.5-9.5v-5L12 3Z" />
                  <path d="m8.5 12 2.2 2.2 4.8-5" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold text-navy">Holder-verified guidance</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Content direction is reviewed against practice from professionals who have earned the
                qualifications — reducing confident-but-wrong answers.
              </p>
            </div>
            <div className="surface-card about-feature-card p-6">
              <span className="about-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 13v-2a7 7 0 0 1 14 0v2" />
                  <path d="M5 12H3.5A1.5 1.5 0 0 0 2 13.5v3A1.5 1.5 0 0 0 3.5 18H6v-6H5Zm14 0h1.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H18v-6h1Z" />
                  <path d="M18 18c0 1.7-1.3 3-3 3h-2" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold text-navy">Mentor support 24/7</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Study help any hour through the bot, plus human mentor escalation when you need
                coaching follow-up (included for 1 month with each paid token top-up). Study Path
                keeps your roadmap in one portfolio.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <section className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-gold">Welcome, {user.name}</p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Clear answers for the exams you&apos;re preparing for
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Choose a qualification, ask focused questions, or open{" "}
            <Link href="/study" className="font-medium text-navy underline">
              Study Path
            </Link>{" "}
            for a full syllabus roadmap. Tokens remaining:{" "}
            {unlimitedTokens ? "Unlimited" : tokens}.
          </p>
        </section>

        <div className="space-y-6">
          {showExamPicker ? (
            <ExamSelector selectedExamId={selectedExam?.id ?? null} onSelect={handleSelectExam} />
          ) : (
            selectedExam && (
              <div className="surface-card flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <div className="flex items-start gap-3">
                  <ExamLogo src={selectedExam.logo} alt={`${selectedExam.name} logo`} size={44} className="shrink-0" />
                  <div>
                  <p className="text-sm font-semibold text-navy">
                    Studying: {selectedExam.name}
                    <span className="ml-2 font-normal text-muted">· {selectedExam.fullName}</span>
                  </p>
                  {examNotice && <p className="mt-1 text-sm text-muted">{examNotice}</p>}
                  {!examNotice && (
                    <p className="mt-1 text-sm text-muted">
                      Change your track anytime in{" "}
                      <Link href="/profile" className="font-medium text-navy underline">
                        My Profile
                      </Link>
                      .
                    </p>
                  )}
                  </div>
                </div>
              </div>
            )
          )}

          <ChatPanel
            key={selectedExam?.id ?? "no-exam"}
            exam={selectedExam}
            provider={provider}
            onProviderChange={handleProviderChange}
            onProviderAutoSwitch={handleProviderAutoSwitch}
            tokens={tokens}
            unlimitedTokens={unlimitedTokens}
            onTokenUsed={handleTokenUsed}
            onTopUp={goToPlans}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
