"use client";

import React from "react";
import { MathFormula } from "./MathFormula";
import {
  InteractiveConceptChart,
  parseConceptChart,
} from "./InteractiveConceptChart";

const FENCE_PLACEHOLDER = (i: number) => `\u0000FENCE${i}\u0000`;

type FencedBlock = { language: string; body: string };

/** Normalize common LLM LaTeX delimiter variants before parsing. */
function normalizeMathDelimiters(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    // Some models emit doubled backslashes in JSON-ish payloads
    .replace(/\\\\([\[\]()])/g, "\\$1")
    .replace(/\\\(\s+/g, "\\(")
    .replace(/\s+\\\)/g, "\\)")
    .replace(/\\\[\s+/g, "\\[")
    .replace(/\s+\\\]/g, "\\]");
}

function stripOuterMathDelimiters(formula: string): string {
  let f = formula.trim();
  if (
    (f.startsWith("\\[") && f.endsWith("\\]")) ||
    (f.startsWith("\\(") && f.endsWith("\\)"))
  ) {
    f = f.slice(2, -2).trim();
  } else if (f.startsWith("$$") && f.endsWith("$$") && f.length > 4) {
    f = f.slice(2, -2).trim();
  } else if (f.startsWith("$") && f.endsWith("$") && f.length > 2) {
    f = f.slice(1, -1).trim();
  }
  return f;
}

/**
 * Extract ```fenced``` blocks before math parsing so `$` inside chart JSON
 * (e.g. "$ million") cannot be mistaken for TeX delimiters.
 */
function extractFencedBlocks(text: string): { text: string; fences: FencedBlock[] } {
  const fences: FencedBlock[] = [];
  const textOut = text.replace(
    /```([^\n`]*)\n?([\s\S]*?)```/g,
    (_full, lang: string, body: string) => {
      const index = fences.length;
      fences.push({
        language: String(lang || "").trim().toLowerCase(),
        body: body.replace(/\n$/, ""),
      });
      return FENCE_PLACEHOLDER(index);
    }
  );
  return { text: textOut, fences };
}

/**
 * Recover chart JSON the model emitted without a ```chart fence.
 */
function extractBareChartBlocks(
  text: string,
  fences: FencedBlock[]
): string {
  const pattern =
    /(^|\n)(\{[ \t]*\n[ \t]*"(?:type|title|series)"[\s\S]*?\n[ \t]*\}|\{[^\n]*"type"\s*:\s*"(?:line|bar|scatter)"[^\n]*\})(?=\n|$)/g;

  return text.replace(pattern, (full, lead: string, json: string) => {
    if (full.includes("\u0000FENCE")) return full;
    if (!parseConceptChart(json)) return full;
    const index = fences.length;
    fences.push({ language: "chart", body: json });
    return `${lead}${FENCE_PLACEHOLDER(index)}`;
  });
}

/**
 * Split a string into text / inline-math / display-math segments.
 * Skips currency-like `$120` / `$ million` (no proper `$...$` pair).
 */
function splitMathSegments(
  text: string
): { type: "text" | "inline" | "display"; value: string }[] {
  const segments: { type: "text" | "inline" | "display"; value: string }[] = [];
  // Single-$ requires non-space after open and before close so
  // "$ million" / "$120.75M" are left alone.
  const pattern =
    /(\\\[[\s\S]+?\\\]|\$\$[\s\S]+?\$\$|\\\([\s\S]+?\\\)|\$([^\s$](?:[^$\n]*[^\s$])?)\$)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      segments.push({ type: "text", value: text.slice(last, match.index) });
    }
    const token = match[0];
    if (token.startsWith("\\[") || token.startsWith("$$")) {
      segments.push({ type: "display", value: stripOuterMathDelimiters(token) });
    } else {
      segments.push({ type: "inline", value: stripOuterMathDelimiters(token) });
    }
    last = match.index + token.length;
  }

  if (last < text.length) {
    segments.push({ type: "text", value: text.slice(last) });
  }
  return segments;
}

function renderInlineMarkdown(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern =
    /(\[[^\]]+?\]\(https?:\/\/[^)\s]+?\)|\*\*[^*]+?\*\*|\*[^*]+?\*|`[^`]+?`)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith("[") && token.includes("](")) {
      const link = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
      if (link) {
        nodes.push(
          <a
            key={`${keyPrefix}-a-${i}`}
            href={link[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy underline underline-offset-2"
          >
            {link[1]}
          </a>
        );
      } else {
        nodes.push(token);
      }
    } else if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      nodes.push(
        <em key={`${keyPrefix}-i-${i}`} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      const inner = token.slice(1, -1).trim();
      if (
        /^(\\\[|\\\(|\$\$|\$)/.test(inner) ||
        /\\(frac|text|mathbb|inf|sum|int|alpha|beta)/.test(inner)
      ) {
        const formula = stripOuterMathDelimiters(inner);
        const display = inner.startsWith("\\[") || inner.startsWith("$$");
        nodes.push(
          <MathFormula
            key={`${keyPrefix}-m-${i}`}
            formula={formula}
            display={display}
          />
        );
      } else {
        nodes.push(
          <code
            key={`${keyPrefix}-c-${i}`}
            className="rounded bg-black/5 px-1 py-0.5 text-[0.85em]"
          >
            {inner}
          </code>
        );
      }
    }
    last = match.index + token.length;
    i += 1;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const segments = splitMathSegments(text);
  segments.forEach((seg, i) => {
    if (seg.type === "display") {
      nodes.push(
        <MathFormula key={`${keyPrefix}-d-${i}`} formula={seg.value} display />
      );
    } else if (seg.type === "inline") {
      nodes.push(
        <MathFormula key={`${keyPrefix}-i-${i}`} formula={seg.value} />
      );
    } else if (seg.value) {
      nodes.push(...renderInlineMarkdown(seg.value, `${keyPrefix}-t-${i}`));
    }
  });
  return nodes;
}

function renderFencedBlock(fence: FencedBlock, key: string): React.ReactNode {
  // Prefer chart whenever the body is valid chart JSON, regardless of fence label.
  const chart = parseConceptChart(fence.body);
  if (chart) {
    return <InteractiveConceptChart key={key} config={chart} />;
  }

  if (
    fence.language === "latex" ||
    fence.language === "tex" ||
    fence.language === "math" ||
    /\\(frac|text|mathbb|sum|int|inf)/.test(fence.body)
  ) {
    return (
      <MathFormula
        key={key}
        formula={stripOuterMathDelimiters(fence.body)}
        display
      />
    );
  }

  return (
    <pre
      key={key}
      className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-black/5 p-3 font-mono text-xs"
    >
      {fence.body}
    </pre>
  );
}

function appendTextBlocks(
  text: string,
  fences: FencedBlock[],
  blocks: React.ReactNode[],
  nextKey: () => number
) {
  const pieces: Array<{ kind: "text" | "fence"; value: string; fenceIndex?: number }> =
    [];
  let cursor = 0;
  const re = /\u0000FENCE(\d+)\u0000/g;
  let ph: RegExpExecArray | null;
  while ((ph = re.exec(text)) !== null) {
    if (ph.index > cursor) {
      pieces.push({ kind: "text", value: text.slice(cursor, ph.index) });
    }
    pieces.push({ kind: "fence", value: "", fenceIndex: Number(ph[1]) });
    cursor = ph.index + ph[0].length;
  }
  if (cursor < text.length) pieces.push({ kind: "text", value: text.slice(cursor) });

  for (const piece of pieces) {
    if (piece.kind === "fence" && piece.fenceIndex !== undefined) {
      const fence = fences[piece.fenceIndex];
      if (fence) blocks.push(renderFencedBlock(fence, `fence-${nextKey()}`));
      continue;
    }

    const topSegments = splitMathSegments(piece.value);
    for (const seg of topSegments) {
      if (seg.type === "display") {
        blocks.push(
          <MathFormula key={`math-${nextKey()}`} formula={seg.value} display />
        );
        continue;
      }
      if (seg.type === "inline") {
        blocks.push(
          <p key={`p-${nextKey()}`} className="whitespace-pre-wrap">
            <MathFormula formula={seg.value} />
          </p>
        );
        continue;
      }

      const lines = seg.value.split("\n");
      for (let idx = 0; idx < lines.length; idx += 1) {
        const line = lines[idx];
        const trimmed = line.trim();

        if (!trimmed) {
          blocks.push(<div key={`sp-${nextKey()}`} className="h-1" />);
          continue;
        }

        const heading = trimmed.match(/^(#{1,6})\s*(.+)$/);
        if (heading) {
          const level = heading[1].length;
          const className =
            level <= 2
              ? "mt-3 text-base font-bold text-navy"
              : "mt-3 text-sm font-bold text-navy";
          const k = nextKey();
          blocks.push(
            <div
              key={`h-${k}`}
              role="heading"
              aria-level={level}
              className={className}
            >
              {renderInline(heading[2], `h-${k}`)}
            </div>
          );
          continue;
        }

        const quote = trimmed.match(/^>\s*(.*)$/);
        if (quote) {
          const k = nextKey();
          blocks.push(
            <blockquote
              key={`q-${k}`}
              className="border-l-2 border-navy/30 pl-3 italic text-slate-600"
            >
              {renderInline(quote[1], `q-${k}`)}
            </blockquote>
          );
          continue;
        }

        if (/^[-*+]\s+/.test(trimmed)) {
          const items: { text: string; index: number }[] = [];
          while (idx < lines.length) {
            const item = lines[idx].trim().match(/^[-*+]\s+(.+)$/);
            if (!item) break;
            items.push({ text: item[1], index: idx });
            idx += 1;
          }
          idx -= 1;
          blocks.push(
            <ul key={`ul-${nextKey()}`} className="list-disc space-y-1 pl-5">
              {items.map((item) => (
                <li key={`uli-${item.index}`}>
                  {renderInline(item.text, `uli-${item.index}`)}
                </li>
              ))}
            </ul>
          );
          continue;
        }

        if (/^\d+[.)]\s+/.test(trimmed)) {
          const items: { text: string; index: number }[] = [];
          while (idx < lines.length) {
            const item = lines[idx].trim().match(/^\d+[.)]\s+(.+)$/);
            if (!item) break;
            items.push({ text: item[1], index: idx });
            idx += 1;
          }
          idx -= 1;
          blocks.push(
            <ol key={`ol-${nextKey()}`} className="list-decimal space-y-1 pl-5">
              {items.map((item) => (
                <li key={`oli-${item.index}`}>
                  {renderInline(item.text, `oli-${item.index}`)}
                </li>
              ))}
            </ol>
          );
          continue;
        }

        if (/^([-*_])\1{2,}$/.test(trimmed)) {
          blocks.push(<hr key={`hr-${nextKey()}`} className="my-3 border-black/10" />);
          continue;
        }

        const k = nextKey();
        blocks.push(
          <p key={`ln-${k}`} className="whitespace-pre-wrap">
            {renderInline(line, `ln-${k}`)}
          </p>
        );
      }
    }
  }
}

export function MessageContent({ content }: { content: string }) {
  const normalized = normalizeMathDelimiters(content);
  const { text: afterFences, fences } = extractFencedBlocks(normalized);
  const text = extractBareChartBlocks(afterFences, fences);

  const blocks: React.ReactNode[] = [];
  let blockKey = 0;
  appendTextBlocks(text, fences, blocks, () => blockKey++);

  return <div className="space-y-2 text-sm leading-relaxed">{blocks}</div>;
}
