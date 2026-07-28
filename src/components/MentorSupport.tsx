"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { FinancialExam } from "@/lib/exams";
import type { ChatMessage } from "./ChatPanel";

type MentorMessage = {
  id: string;
  role: "user" | "assistant" | "mentor";
  content: string;
  createdAt: string;
};
type MentorConversation = {
  id: string;
  examId: string;
  examName: string;
  status: "pending" | "matched" | "closed";
  messages: MentorMessage[];
  createdAt: string;
  updatedAt: string;
  matchedAt?: string;
};

export function MentorSupport({
  exam,
  transcript,
  onTopUp,
}: {
  exam: FinancialExam;
  transcript: ChatMessage[];
  onTopUp: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [premium, setPremium] = useState<boolean | null>(null);
  const [conversation, setConversation] = useState<MentorConversation | null>(null);
  const [followUp, setFollowUp] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAccount = useCallback(async () => {
    const response = await fetch("/api/mentor/conversations");
    if (!response.ok) return;
    const data = await response.json();
    setPremium(Boolean(data.premium));
    const matching =
      data.conversations?.find(
        (item: MentorConversation) => item.examId === exam.id && item.status !== "closed"
      ) || data.conversations?.find((item: MentorConversation) => item.examId === exam.id);
    setConversation(matching || null);
  }, [exam.id]);

  useEffect(() => {
    const timer = window.setTimeout(() => void loadAccount(), 0);
    return () => window.clearTimeout(timer);
  }, [loadAccount]);

  const conversationId = conversation?.id;
  const conversationStatus = conversation?.status;
  useEffect(() => {
    if (!conversationId || conversationStatus === "closed") return;
    const timer = window.setInterval(async () => {
      const response = await fetch(
        `/api/mentor/conversations/${encodeURIComponent(conversationId)}`
      );
      if (!response.ok) return;
      const data = await response.json();
      setConversation(data.conversation);
    }, 8_000);
    return () => window.clearInterval(timer);
  }, [conversationId, conversationStatus]);

  const liveMessages = useMemo(() => {
    if (!conversation?.matchedAt) return [];
    const matchedAt = new Date(conversation.matchedAt).getTime();
    return conversation.messages.filter(
      (message) =>
        message.role === "mentor" ||
        (message.role === "user" && new Date(message.createdAt).getTime() >= matchedAt)
    );
  }, [conversation]);

  async function requestMentor() {
    if (!transcript.some((message) => message.role === "user")) {
      setError("Ask AskFinBots a question first so the mentor can review the conversation.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/mentor/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId: exam.id,
          transcript: transcript.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await response.json();
      if (response.status === 402) {
        setPremium(false);
        throw new Error(data.error || "A paid top-up is required.");
      }
      if (!response.ok) throw new Error(data.error || "Unable to request a mentor.");
      setPremium(true);
      setConversation(data.conversation);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to request a mentor.");
    } finally {
      setBusy(false);
    }
  }

  async function sendFollowUp(event: React.FormEvent) {
    event.preventDefault();
    if (!conversation || !followUp.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/mentor/conversations/${encodeURIComponent(conversation.id)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: followUp }),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send your message.");
      setConversation(data.conversation);
      setFollowUp("");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to send your message.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
          conversation?.status === "matched"
            ? "border-green-300 bg-green-50 text-green-800"
            : "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100"
        }`}
      >
        {conversation?.status === "matched" ? "Mentor matched" : "Ask a human mentor"}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 p-0 sm:items-center sm:p-4">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="mentor-support-title"
            className="flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-line p-4 sm:p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Premium support</p>
                <h2 id="mentor-support-title" className="font-display mt-1 text-xl font-semibold text-navy">
                  Ask a qualified mentor
                </h2>
                <p className="mt-1 text-xs text-muted">{exam.name} · Human-reviewed guidance</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close mentor support"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy"
              >
                ✕
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
              {premium === false ? (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
                  <p className="font-semibold text-amber-950">Premium plan required</p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-900">
                    Complete a token top-up to unlock human mentor review. Each completed purchase
                    enables this premium feature for <strong>1 month</strong> from the payment date.
                  </p>
                  <Link href="/cart" className="btn-primary mt-4 inline-flex">
                    View token packages
                  </Link>
                </div>
              ) : !conversation ? (
                <div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-navy">What the mentor receives</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      <li>Your current {exam.name} conversation and all AskFinBots responses</li>
                      <li>Your latest question and relevant qualification context</li>
                      <li>A secure admin thread for the mentor&apos;s response</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    disabled={busy || premium === null}
                    onClick={() => void requestMentor()}
                    className="btn-primary mt-4 w-full disabled:opacity-50"
                  >
                    {busy ? "Sending request…" : "Send conversation to a mentor"}
                  </button>
                </div>
              ) : (
                <div>
                  <div className={`rounded-xl border p-4 ${
                    conversation.status === "pending"
                      ? "border-amber-200 bg-amber-50 text-amber-900"
                      : conversation.status === "matched"
                        ? "border-green-200 bg-green-50 text-green-900"
                        : "border-slate-200 bg-slate-50 text-slate-700"
                  }`}>
                    <p className="font-semibold">
                      {conversation.status === "pending"
                        ? "Mentor request received"
                        : conversation.status === "matched"
                          ? "You have been matched with a mentor"
                          : "Conversation closed"}
                    </p>
                    <p className="mt-1 text-sm">
                      {conversation.status === "pending"
                        ? "Your conversation has been sent for review. Please wait while a mentor evaluates your question."
                        : conversation.status === "matched"
                          ? "Please wait while the mentor evaluates your question. Their responses will appear below automatically."
                          : "This conversation remains saved for future reference."}
                    </p>
                  </div>

                  {liveMessages.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {liveMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`max-w-[90%] rounded-xl p-3 text-sm leading-relaxed ${
                            message.role === "mentor"
                              ? "border border-green-200 bg-green-50 text-green-950"
                              : "ml-auto bg-navy text-white"
                          }`}
                        >
                          <p className="mb-1 text-[10px] font-bold uppercase opacity-60">
                            {message.role === "mentor" ? "Qualified mentor" : "You"}
                          </p>
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {conversation.status === "matched" && (
                    <form onSubmit={sendFollowUp} className="mt-4 border-t border-line pt-4">
                      <textarea
                        value={followUp}
                        onChange={(event) => setFollowUp(event.target.value)}
                        maxLength={8_000}
                        rows={3}
                        placeholder="Reply to your mentor…"
                        className="chat-input w-full resize-none"
                      />
                      <button
                        type="submit"
                        disabled={busy || !followUp.trim()}
                        className="btn-primary mt-2 w-full disabled:opacity-50"
                      >
                        {busy ? "Sending…" : "Send to mentor"}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {error && (
                <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
