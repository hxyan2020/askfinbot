"use client";

import React from "react";
import { MathFormula } from "./MathFormula";
import {
  InteractiveConceptChart,
  parseConceptChart,
} from "./InteractiveConceptChart";

/** Normalize common LLM LaTeX delimiter variants before parsing. */
function normalizeMathDelimiters(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    // Some models emit doubled backslashes in JSON-ish payloads
    .replace(/\\\\([\[\]()])/g, "\\$1")
    // Convert \[...\] / \(...\) already handled; also accept \( \) with spaces
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
 * Split a string into text / inline-math / display-math segments.
 * Handles $...$, $$...$$, \(...\), \[...\] (including multi-line display).
 */
function splitMathSegments(
  text: string
): { type: "text" | "inline" | "display"; value: string }[] {
  const segments: { type: "text" | "inline" | "display"; value: string }[] = [];
  // Display first (greedy), then inline. Avoid matching empty $$ or lone $.
  // Order matters: $$ / \[ \] / \( \) before single $.
  const pattern =
    /(\\\[[\s\S]+?\\\]|\$\$[\s\S]+?\$\$|\\\([\s\S]+?\\\)|\$[^$\n]+?\$)/g;
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
      // If a "code" span is actually LaTeX, render it as math.
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

export function MessageContent({ content }: { content: string }) {
  const normalized = normalizeMathDelimiters(content);

  // Pull display-math blocks out first so they never get stuck inside list items.
  const topSegments = splitMathSegments(normalized);
  const blocks: React.ReactNode[] = [];
  let blockKey = 0;

  for (const seg of topSegments) {
    if (seg.type === "display") {
      blocks.push(
        <MathFormula key={`math-${blockKey++}`} formula={seg.value} display />
      );
      continue;
    }
    if (seg.type === "inline") {
      blocks.push(
        <p key={`p-${blockKey++}`} className="whitespace-pre-wrap">
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
        blocks.push(<div key={`sp-${blockKey++}`} className="h-1" />);
        continue;
      }

      const heading = trimmed.match(/^(#{1,6})\s*(.+)$/);
      if (heading) {
        const level = heading[1].length;
        const className =
          level <= 2
            ? "mt-3 text-base font-bold text-navy"
            : "mt-3 text-sm font-bold text-navy";
        blocks.push(
          <div
            key={`h-${blockKey++}`}
            role="heading"
            aria-level={level}
            className={className}
          >
            {renderInline(heading[2], `h-${blockKey}`)}
          </div>
        );
        continue;
      }

      if (/^```/.test(trimmed)) {
        const language = trimmed.slice(3).trim().toLowerCase();
        const code: string[] = [];
        while (idx + 1 < lines.length && !/^```/.test(lines[idx + 1].trim())) {
          code.push(lines[idx + 1]);
          idx += 1;
        }
        if (idx + 1 < lines.length) idx += 1;
        const joined = code.join("\n");
        const chart =
          language === "chart" ? parseConceptChart(joined) : null;
        if (chart) {
          blocks.push(
            <InteractiveConceptChart key={`chart-${blockKey++}`} config={chart} />
          );
        } else if (
          language === "latex" ||
          language === "tex" ||
          language === "math" ||
          /\\(frac|text|mathbb|sum|int|inf)/.test(joined)
        ) {
          blocks.push(
            <MathFormula
              key={`math-${blockKey++}`}
              formula={stripOuterMathDelimiters(joined)}
              display
            />
          );
        } else {
          blocks.push(
            <pre
              key={`code-${blockKey++}`}
              className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-black/5 p-3 font-mono text-xs"
            >
              {joined}
            </pre>
          );
        }
        continue;
      }

      const quote = trimmed.match(/^>\s*(.*)$/);
      if (quote) {
        blocks.push(
          <blockquote
            key={`q-${blockKey++}`}
            className="border-l-2 border-navy/30 pl-3 italic text-slate-600"
          >
            {renderInline(quote[1], `q-${blockKey}`)}
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
          <ul key={`ul-${blockKey++}`} className="list-disc space-y-1 pl-5">
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
          <ol key={`ol-${blockKey++}`} className="list-decimal space-y-1 pl-5">
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
        blocks.push(<hr key={`hr-${blockKey++}`} className="my-3 border-black/10" />);
        continue;
      }

      blocks.push(
        <p key={`ln-${blockKey++}`} className="whitespace-pre-wrap">
          {renderInline(line, `ln-${blockKey}`)}
        </p>
      );
    }
  }

  return <div className="space-y-2 text-sm leading-relaxed">{blocks}</div>;
}
