"use client";

import { useCallback, useEffect, useState } from "react";
import {
  FREE_TOKENS,
  TOKEN_STORAGE_KEY,
  EXAM_STORAGE_KEY,
  PROVIDER_STORAGE_KEY,
  type LLMProvider,
} from "@/lib/constants";
import { type FinancialExam, getExamById } from "@/lib/exams";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ExamSelector } from "./ExamSelector";
import { ChatPanel } from "./ChatPanel";
import { TopUpModal } from "./TopUpModal";

export function AskFinBotApp() {
  const [selectedExam, setSelectedExam] = useState<FinancialExam | null>(null);
  const [provider, setProvider] = useState<LLMProvider>("gemini");
  const [tokens, setTokens] = useState(FREE_TOKENS);
  const [showTopUp, setShowTopUp] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedTokens = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storedTokens !== null) {
      const parsed = parseInt(storedTokens, 10);
      if (!isNaN(parsed) && parsed >= 0) {
        setTokens(parsed);
      }
    }

    const storedExam = localStorage.getItem(EXAM_STORAGE_KEY);
    if (storedExam) {
      const exam = getExamById(storedExam);
      if (exam) setSelectedExam(exam);
    }

    const storedProvider = localStorage.getItem(PROVIDER_STORAGE_KEY);
    if (storedProvider === "deepseek" || storedProvider === "gemini") {
      setProvider(storedProvider);
    }

    setHydrated(true);
  }, []);

  const handleSelectExam = useCallback((exam: FinancialExam) => {
    setSelectedExam(exam);
    localStorage.setItem(EXAM_STORAGE_KEY, exam.id);
  }, []);

  const handleProviderChange = useCallback((newProvider: LLMProvider) => {
    setProvider(newProvider);
    localStorage.setItem(PROVIDER_STORAGE_KEY, newProvider);
  }, []);

  const handleTokenUsed = useCallback(() => {
    setTokens((prev) => {
      const next = Math.max(0, prev - 1);
      localStorage.setItem(TOKEN_STORAGE_KEY, String(next));
      if (next <= 0) {
        setShowTopUp(true);
      }
      return next;
    });
  }, []);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="glow-logo flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-2xl text-gold">
          ✦
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <section className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-gold glow-text sm:text-4xl">
            Your AI Exam Tutor
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gold/60 sm:text-base">
            Master the world&apos;s top financial qualification exams with intelligent, exam-focused
            guidance. Start with {FREE_TOKENS} free tokens — no sign-up required.
          </p>
        </section>

        <div className="space-y-6">
          <ExamSelector
            selectedExamId={selectedExam?.id ?? null}
            onSelect={handleSelectExam}
          />
          <ChatPanel
            exam={selectedExam}
            provider={provider}
            onProviderChange={handleProviderChange}
            tokens={tokens}
            onTokenUsed={handleTokenUsed}
            onTopUp={() => setShowTopUp(true)}
          />
        </div>
      </main>
      <Footer />
      <TopUpModal open={showTopUp} onClose={() => setShowTopUp(false)} />
    </>
  );
}
