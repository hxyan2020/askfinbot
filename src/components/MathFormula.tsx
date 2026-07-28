"use client";

import katex from "katex";

function cleanFormula(raw: string): string {
  let f = raw.trim();
  // Drop leftover delimiters if a caller passed them through.
  if (
    (f.startsWith("\\[") && f.endsWith("\\]")) ||
    (f.startsWith("\\(") && f.endsWith("\\)"))
  ) {
    f = f.slice(2, -2).trim();
  } else if (f.startsWith("$$") && f.endsWith("$$") && f.length > 4) {
    f = f.slice(2, -2).trim();
  } else if (f.startsWith("$") && f.endsWith("$") && f.length > 2 && !f.startsWith("$$")) {
    f = f.slice(1, -1).trim();
  }
  return f;
}

export function MathFormula({
  formula,
  display = false,
}: {
  formula: string;
  display?: boolean;
}) {
  const html = katex.renderToString(cleanFormula(formula), {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    trust: false,
    output: "htmlAndMathml",
  });

  if (display) {
    return (
      <div
        className="my-3 overflow-x-auto rounded-lg border border-line bg-white px-4 py-3 text-center text-[1.05em] text-navy"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className="mx-0.5 inline-block max-w-full align-middle text-navy"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
