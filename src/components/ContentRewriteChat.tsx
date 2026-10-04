"use client";

import { FormEvent, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  createdAt: string;
};

const QUICK_ACTIONS = [
  { id: "human", label: "Make it sound like a human" },
  { id: "enrich", label: "Enrich with details" },
  { id: "check", label: "Double-check if the details are correct" },
] as const;

function stamp(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ContentRewriteChat({
  selected,
  onAccept,
  onClose,
}: {
  selected: string;
  onAccept: (replacement: string) => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ask(instruction: string) {
    const text = instruction.trim();
    if (!text || busy) return;
    setBusy(true);
    setError(null);
    const now = new Date().toISOString();
    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text, createdAt: now },
    ];
    setMessages(nextMessages);
    setDraft("");
    try {
      const res = await fetch("/api/admin/content-rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selected: suggestion ?? selected,
          instruction: text,
          messages: messages.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Rewrite failed.");
      const createdAt = data.createdAt || new Date().toISOString();
      setSuggestion(String(data.suggestion || ""));
      setNote(String(data.note || ""));
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: String(data.suggestion || ""),
          createdAt,
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Rewrite failed.");
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void ask(draft);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 p-3 sm:items-center">
      <div
        role="dialog"
        aria-label="Improve selected text"
        className="flex max-h-[min(40rem,90vh)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">Improve this passage</p>
            <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-slate-500">{selected}</p>
          </div>
          <button type="button" className="text-sm text-slate-500 hover:text-slate-800" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="flex flex-wrap gap-2 px-4 py-3">
          {QUICK_ACTIONS.map((action) => (
            <button
              key={action.id}
              type="button"
              className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              disabled={busy}
              onClick={() => void ask(action.label)}
            >
              {action.label}
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 pb-3">
          {messages.map((message, index) => (
            <article key={`${message.createdAt}-${index}`} className="rounded-xl bg-slate-50 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                {message.role === "assistant" ? "Suggested by AI" : "By human"} · {stamp(message.createdAt)}
              </p>
              <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-slate-800">{message.content}</p>
            </article>
          ))}
          {note && suggestion && <p className="text-xs text-slate-500">{note}</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        {suggestion && (
          <div className="flex flex-wrap gap-2 border-t border-slate-100 px-4 py-3">
            <button
              type="button"
              className="admin-btn"
              onClick={() => onAccept(suggestion)}
            >
              Accept
            </button>
            <button
              type="button"
              className="admin-btn-secondary"
              onClick={() => {
                setSuggestion(null);
                setNote("");
              }}
            >
              Discard
            </button>
            <span className="self-center text-xs text-slate-500">
              Accept updates the passage. Save changes on the page to keep it. Or keep chatting to refine it.
            </span>
          </div>
        )}

        <form onSubmit={onSubmit} className="flex gap-2 border-t border-slate-100 px-4 py-3">
          <input
            className="admin-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="What’s wrong, or how should this improve?"
            disabled={busy}
          />
          <button type="submit" className="admin-btn shrink-0" disabled={busy || !draft.trim()}>
            {busy ? "Thinking…" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
