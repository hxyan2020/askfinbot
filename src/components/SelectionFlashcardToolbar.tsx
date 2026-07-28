"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

interface SelectionToolbarProps {
  examId: string;
  containerRef: React.RefObject<HTMLElement | null>;
  /** When set, shows an Ask bot action that receives the selected text. */
  onAskBot?: (selectedText: string) => void;
  saveLabel?: string;
  askLabel?: string;
}

export function SelectionFlashcardToolbar({
  examId,
  containerRef,
  onAskBot,
  saveLabel = "Add to flashcard",
  askLabel = "Ask bot",
}: SelectionToolbarProps) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearToastSoon = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setToast(null), 2500);
  }, []);

  useEffect(() => {
    function onSelectionChange() {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) {
        setVisible(false);
        setText("");
        return;
      }

      const selected = sel.toString().replace(/\s+/g, " ").trim();
      if (selected.length < 8) {
        setVisible(false);
        setText("");
        return;
      }

      const range = sel.getRangeAt(0);
      const container = containerRef.current;
      if (!container || !container.contains(range.commonAncestorContainer)) {
        setVisible(false);
        return;
      }

      const rect =
        Array.from(range.getClientRects()).find(
          (candidate) => candidate.width > 0 && candidate.height > 0
        ) || range.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      const toolbarWidth = onAskBot ? 280 : 170;
      setText(selected);
      setPos({
        top: Math.max(
          container.scrollTop + 4,
          rect.top - parentRect.top + container.scrollTop - 44
        ),
        left: Math.min(
          Math.max(
            container.scrollLeft + 8,
            rect.left - parentRect.left + container.scrollLeft + rect.width / 2 - toolbarWidth / 2
          ),
          container.scrollLeft + container.clientWidth - toolbarWidth - 8
        ),
      });
      setVisible(true);
    }

    document.addEventListener("selectionchange", onSelectionChange);
    document.addEventListener("mouseup", onSelectionChange);
    document.addEventListener("touchend", onSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", onSelectionChange);
      document.removeEventListener("mouseup", onSelectionChange);
      document.removeEventListener("touchend", onSelectionChange);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [containerRef, onAskBot]);

  async function saveCard() {
    if (!text || busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/flashcards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examId, content: text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not save.");
      setToast(`Saved · ${data.card.subject}`);
      clearToastSoon();
      setVisible(false);
      window.getSelection()?.removeAllRanges();
    } catch (err) {
      setToast(err instanceof Error ? err.message : "Save failed.");
      clearToastSoon();
    } finally {
      setBusy(false);
    }
  }

  function askBot() {
    if (!text || !onAskBot) return;
    const selected = text;
    setVisible(false);
    window.getSelection()?.removeAllRanges();
    onAskBot(selected);
  }

  return (
    <>
      {visible && (
        <div
          className="absolute z-30 flex items-center gap-1 rounded-full border border-navy/20 bg-navy px-2 py-1 text-xs text-white shadow-lg"
          style={{ top: pos.top, left: pos.left }}
        >
          <button
            type="button"
            disabled={busy}
            onClick={() => void saveCard()}
            className="rounded-full px-2.5 py-1 font-medium hover:bg-white/10 disabled:opacity-60"
          >
            {busy ? "Saving…" : saveLabel}
          </button>
          {onAskBot && (
            <>
              <span className="h-3 w-px bg-white/25" aria-hidden="true" />
              <button
                type="button"
                onClick={askBot}
                className="rounded-full px-2.5 py-1 font-medium hover:bg-white/10"
              >
                {askLabel}
              </button>
            </>
          )}
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-navy"
          />
        </div>
      )}
      {toast && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs text-emerald-800 shadow">
          {toast}{" "}
          <Link href="/flashcards" className="pointer-events-auto underline">
            View
          </Link>
        </div>
      )}
    </>
  );
}
