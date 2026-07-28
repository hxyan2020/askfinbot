"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Status = "pending" | "matched" | "closed";
type Message = {
  id: string;
  role: "user" | "assistant" | "mentor";
  content: string;
  createdAt: string;
};
type Conversation = {
  id: string;
  userName: string;
  userEmail: string;
  examId: string;
  examName: string;
  status: Status;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
  matchedAt?: string;
  closedAt?: string;
  telegramAlert: "sent" | "not-configured" | "failed";
};

function time(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function MentorInboxPage() {
  const [items, setItems] = useState<Conversation[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [reply, setReply] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const response = await fetch("/api/admin/mentor/conversations");
    if (response.status === 401) {
      window.location.href = "/admin";
      return;
    }
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Unable to load mentor requests.");
    setItems(data.conversations || []);
    setSelectedId((current) => {
      if (current) return current;
      const requested = new URLSearchParams(window.location.search).get("conversation");
      return requested || data.conversations?.[0]?.id || null;
    });
  }, []);

  useEffect(() => {
    const initialLoad = window.setTimeout(() => {
      load().catch((caught) =>
        setError(caught instanceof Error ? caught.message : "Unable to load mentor requests.")
      );
    }, 0);
    const timer = window.setInterval(() => {
      load().catch(() => undefined);
    }, 10_000);
    return () => {
      window.clearTimeout(initialLoad);
      window.clearInterval(timer);
    };
  }, [load]);

  const selected = items.find((item) => item.id === selectedId) || null;
  const filtered = useMemo(
    () => items.filter((item) => filter === "all" || item.status === filter),
    [filter, items]
  );

  async function action(actionName: "start" | "close") {
    if (!selected) return;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/admin/mentor/conversations/${encodeURIComponent(selected.id)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: actionName }),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to update conversation.");
      setItems((current) =>
        current.map((item) => (item.id === data.conversation.id ? data.conversation : item))
      );
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to update conversation.");
    } finally {
      setBusy(false);
    }
  }

  async function sendReply(event: React.FormEvent) {
    event.preventDefault();
    if (!selected || !reply.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/admin/mentor/conversations/${encodeURIComponent(selected.id)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: reply }),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send mentor reply.");
      setItems((current) =>
        current.map((item) => (item.id === data.conversation.id ? data.conversation : item))
      );
      setReply("");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to send mentor reply.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-shell admin-shell-wide">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Human support</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">Mentor inbox</h1>
          <p className="mt-1 text-sm text-slate-500">Review the AI transcript before answering.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="admin-btn-secondary" onClick={() => void load()}>
            Refresh
          </button>
          <Link href="/admin/dashboard" className="admin-btn-secondary">Dashboard</Link>
        </div>
      </header>

      {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <div className="mb-4 flex flex-wrap gap-2">
        {(["all", "pending", "matched", "closed"] as const).map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setFilter(status)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize ${
              filter === status ? "bg-slate-900 text-white" : "bg-white text-slate-600"
            }`}
          >
            {status} ({status === "all" ? items.length : items.filter((item) => item.status === status).length})
          </button>
        ))}
      </div>

      <div className="grid min-h-[650px] overflow-hidden rounded-xl border border-slate-200 bg-white lg:grid-cols-[320px_1fr]">
        <aside className="max-h-[650px] overflow-y-auto border-b border-slate-200 lg:border-b-0 lg:border-r">
          {filtered.length === 0 && <p className="p-5 text-sm text-slate-500">No conversations in this view.</p>}
          {filtered.map((item) => {
            const latest = item.messages[item.messages.length - 1];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`block w-full border-b border-slate-100 p-4 text-left ${
                  item.id === selectedId ? "bg-amber-50" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <strong className="truncate text-sm text-slate-900">{item.userName}</strong>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                    item.status === "pending"
                      ? "bg-amber-100 text-amber-800"
                      : item.status === "matched"
                        ? "bg-green-100 text-green-800"
                        : "bg-slate-100 text-slate-600"
                  }`}>{item.status}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-600">{item.examName}</p>
                <p className="mt-1 line-clamp-2 text-xs text-slate-500">{latest?.content}</p>
                <p className="mt-2 text-[10px] text-slate-400">{time(item.updatedAt)}</p>
              </button>
            );
          })}
        </aside>

        <main className="flex min-h-[540px] flex-col">
          {!selected ? (
            <div className="m-auto p-8 text-center text-sm text-slate-500">Select a conversation.</div>
          ) : (
            <>
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 p-4">
                <div>
                  <h2 className="font-semibold text-slate-900">{selected.userName} · {selected.examName}</h2>
                  <p className="text-xs text-slate-500">{selected.userEmail}</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Request {selected.id} · Telegram {selected.telegramAlert}
                  </p>
                </div>
                <div className="flex gap-2">
                  {selected.status === "pending" && (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void action("start")}
                      className="rounded-lg bg-green-700 px-3 py-2 text-xs font-semibold text-white disabled:opacity-50"
                    >
                      Start conversation
                    </button>
                  )}
                  {selected.status !== "closed" && (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void action("close")}
                      className="admin-btn-secondary"
                    >
                      Close
                    </button>
                  )}
                </div>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
                {selected.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`max-w-[88%] rounded-xl border p-3 ${
                      message.role === "user"
                        ? "ml-auto border-blue-200 bg-blue-50"
                        : message.role === "mentor"
                          ? "border-green-200 bg-green-50"
                          : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="mb-1 flex justify-between gap-3 text-[10px] font-semibold uppercase text-slate-500">
                      <span>{message.role === "assistant" ? "AskFinBots" : message.role}</span>
                      <span>{time(message.createdAt)}</span>
                    </div>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">{message.content}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={sendReply} className="border-t border-slate-200 p-4">
                {selected.status === "pending" ? (
                  <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
                    Click <strong>Start conversation</strong> before replying. The user will immediately see that a mentor has been matched.
                  </p>
                ) : selected.status === "closed" ? (
                  <p className="text-sm text-slate-500">This conversation is closed and retained for future reference.</p>
                ) : (
                  <div className="flex gap-2">
                    <textarea
                      value={reply}
                      onChange={(event) => setReply(event.target.value)}
                      rows={3}
                      maxLength={8_000}
                      placeholder="Write the mentor response…"
                      className="min-w-0 flex-1 rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-slate-600"
                    />
                    <button
                      type="submit"
                      disabled={busy || !reply.trim()}
                      className="self-end rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
                    >
                      Push to user
                    </button>
                  </div>
                )}
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
