"use client";

import { useMemo, useState } from "react";

export interface ConceptChartPoint {
  x: number | string;
  y: number;
  label?: string;
}

export interface ConceptChartSeries {
  name: string;
  points: ConceptChartPoint[];
}

export interface ConceptChartConfig {
  type: "line" | "bar" | "scatter";
  title: string;
  xLabel?: string;
  yLabel?: string;
  series: ConceptChartSeries[];
}

const COLORS = ["#0b1f3a", "#c9a227", "#2563eb", "#059669", "#dc2626"];
const CHART_WIDTH = 680;
const CHART_HEIGHT = 340;
const CHART_PADDING = { left: 60, right: 22, top: 35, bottom: 58 } as const;

/** Pull a chart config out of fenced or raw model output. */
export function parseConceptChart(value: string): ConceptChartConfig | null {
  const candidates = chartJsonCandidates(value);
  for (const candidate of candidates) {
    const parsed = parseConceptChartObject(candidate);
    if (parsed) return parsed;
  }
  return null;
}

function chartJsonCandidates(value: string): string[] {
  const trimmed = value.trim();
  if (!trimmed) return [];
  const out: string[] = [trimmed];
  // Models sometimes wrap JSON in prose or emit a larger object; grab the first {...} blob.
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start >= 0 && end > start) {
    const slice = trimmed.slice(start, end + 1);
    if (slice !== trimmed) out.push(slice);
  }
  return out;
}

function normalizeChartPoint(point: unknown): ConceptChartPoint | null {
  if (Array.isArray(point) && point.length >= 2) {
    const x = point[0];
    const y = Number(point[1]);
    if (
      (typeof x === "string" || typeof x === "number") &&
      Number.isFinite(y)
    ) {
      return { x, y };
    }
    return null;
  }
  if (!point || typeof point !== "object") return null;
  const p = point as { x?: unknown; y?: unknown; label?: unknown };
  if (
    (typeof p.x === "string" || typeof p.x === "number") &&
    Number.isFinite(Number(p.y))
  ) {
    return {
      x: p.x,
      y: Number(p.y),
      label: typeof p.label === "string" ? p.label.slice(0, 120) : undefined,
    };
  }
  return null;
}

function parseConceptChartObject(value: string): ConceptChartConfig | null {
  try {
    const input = JSON.parse(value) as Partial<ConceptChartConfig>;
    if (
      !["line", "bar", "scatter"].includes(String(input.type)) ||
      typeof input.title !== "string" ||
      !Array.isArray(input.series) ||
      input.series.length === 0
    ) {
      return null;
    }
    const series = input.series
      .filter((item) => item && typeof item.name === "string" && Array.isArray(item.points))
      .map((item) => ({
        name: item.name.slice(0, 80),
        points: item.points
          .map((point) => normalizeChartPoint(point))
          .filter((point): point is ConceptChartPoint => point !== null)
          .slice(0, 20),
      }))
      .filter((item) => item.points.length > 0)
      .slice(0, 5);
    if (series.length === 0) return null;
    return {
      type: input.type as ConceptChartConfig["type"],
      title: input.title.slice(0, 120),
      xLabel: typeof input.xLabel === "string" ? input.xLabel.slice(0, 60) : undefined,
      yLabel: typeof input.yLabel === "string" ? input.yLabel.slice(0, 60) : undefined,
      series,
    };
  } catch {
    return null;
  }
}

export function InteractiveConceptChart({ config }: { config: ConceptChartConfig }) {
  const [hidden, setHidden] = useState<Set<number>>(new Set());
  const [tip, setTip] = useState<{
    left: number;
    top: number;
    series: string;
    x: string;
    y: number;
    label?: string;
  } | null>(null);

  const width = CHART_WIDTH;
  const height = CHART_HEIGHT;
  const pad = CHART_PADDING;
  const plotWidth = width - pad.left - pad.right;
  const plotHeight = height - pad.top - pad.bottom;

  const chart = useMemo(() => {
    const visible = config.series
      .map((series, index) => ({ ...series, index }))
      .filter((series) => !hidden.has(series.index));
    const source = visible.length ? visible : config.series.map((series, index) => ({ ...series, index }));
    const rawX = source.flatMap((series) => series.points.map((point) => point.x));
    const allNumeric = rawX.every(
      (value) => typeof value === "number" || (typeof value === "string" && value.trim() !== "" && Number.isFinite(Number(value)))
    );
    const numericXs = allNumeric ? rawX.map((value) => Number(value)) : [];
    const xValues = Array.from(new Set(rawX.map((value) => String(value))));
    if (allNumeric) xValues.sort((a, b) => Number(a) - Number(b));
    const yValues = source.flatMap((series) => series.points.map((point) => point.y));
    let yMin = Math.min(0, ...yValues);
    let yMax = Math.max(0, ...yValues);
    if (yMin === yMax) yMax = yMin + 1;
    const yPadding = (yMax - yMin) * 0.08;
    yMin -= yPadding;
    yMax += yPadding;

    let xMin = 0;
    let xMax = 1;
    if (allNumeric && numericXs.length) {
      xMin = Math.min(...numericXs);
      xMax = Math.max(...numericXs);
      if (xMin === xMax) {
        xMin -= 1;
        xMax += 1;
      } else {
        const xPad = (xMax - xMin) * 0.04;
        xMin -= xPad;
        xMax += xPad;
      }
    }

    const xAt = (value: number | string) => {
      if (allNumeric) {
        const n = Number(value);
        return (
          CHART_PADDING.left +
          ((n - xMin) / (xMax - xMin)) * plotWidth
        );
      }
      const index = Math.max(0, xValues.indexOf(String(value)));
      return (
        CHART_PADDING.left +
        (xValues.length === 1 ? plotWidth / 2 : (index / (xValues.length - 1)) * plotWidth)
      );
    };
    const yAt = (value: number) =>
      CHART_PADDING.top + ((yMax - value) / (yMax - yMin)) * plotHeight;
    return { visible, xValues, yMin, yMax, xAt, yAt, allNumeric };
  }, [config.series, hidden, plotHeight, plotWidth]);

  function toggleSeries(index: number) {
    setHidden((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
    setTip(null);
  }

  const showTip = (
    event: React.MouseEvent<SVGElement>,
    series: ConceptChartSeries,
    point: ConceptChartPoint
  ) => {
    const svg = event.currentTarget.ownerSVGElement;
    if (!svg) return;
    const box = svg.getBoundingClientRect();
    setTip({
      left: ((chart.xAt(point.x) / width) * box.width),
      top: ((chart.yAt(point.y) / height) * box.height),
      series: series.name,
      x: String(point.x),
      y: point.y,
      label: point.label,
    });
  };

  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-line bg-white shadow-sm">
      <figcaption className="border-b border-line px-4 py-3">
        <p className="font-semibold text-navy">{config.title}</p>
        <p className="mt-0.5 text-[11px] text-muted">Hover or tap data points · select legend items to compare</p>
      </figcaption>
      <div className="relative px-2 pt-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={config.title}>
          {[0, 1, 2, 3, 4].map((step) => {
            const value = chart.yMin + ((chart.yMax - chart.yMin) * step) / 4;
            const y = chart.yAt(value);
            return (
              <g key={step}>
                <line x1={pad.left} x2={width - pad.right} y1={y} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                <text x={pad.left - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#64748b">
                  {Math.abs(value) >= 100 ? value.toFixed(0) : value.toFixed(1)}
                </text>
              </g>
            );
          })}

          {chart.xValues.map((value, index) => {
            const show = chart.xValues.length <= 8 || index % Math.ceil(chart.xValues.length / 8) === 0;
            if (!show) return null;
            return (
              <text
                key={value}
                x={chart.xAt(value)}
                y={height - pad.bottom + 21}
                textAnchor="middle"
                fontSize="11"
                fill="#64748b"
              >
                {value.length > 12 ? `${value.slice(0, 11)}…` : value}
              </text>
            );
          })}

          {config.yLabel && (
            <text
              x={16}
              y={height / 2}
              textAnchor="middle"
              fontSize="11"
              fill="#64748b"
              transform={`rotate(-90 16 ${height / 2})`}
            >
              {config.yLabel}
            </text>
          )}
          {config.xLabel && (
            <text x={pad.left + plotWidth / 2} y={height - 8} textAnchor="middle" fontSize="11" fill="#64748b">
              {config.xLabel}
            </text>
          )}

          {chart.visible.map((series) => {
            const color = COLORS[series.index % COLORS.length];
            if (config.type === "bar") {
              const groupWidth = Math.min(54, plotWidth / Math.max(1, chart.xValues.length) * 0.72);
              const barWidth = groupWidth / Math.max(1, chart.visible.length);
              return (
                <g key={series.index}>
                  {series.points.map((point, pointIndex) => {
                    const x =
                      chart.xAt(point.x) - groupWidth / 2 +
                      chart.visible.findIndex((item) => item.index === series.index) * barWidth;
                    const zero = chart.yAt(0);
                    const y = chart.yAt(point.y);
                    return (
                      <rect
                        key={pointIndex}
                        x={x}
                        y={Math.min(y, zero)}
                        width={Math.max(3, barWidth - 2)}
                        height={Math.max(2, Math.abs(zero - y))}
                        rx="2"
                        fill={color}
                        opacity="0.88"
                        className="cursor-pointer transition-opacity hover:opacity-100"
                        onMouseEnter={(event) => showTip(event, series, point)}
                        onMouseLeave={() => setTip(null)}
                        onClick={(event) => showTip(event, series, point)}
                      />
                    );
                  })}
                </g>
              );
            }

            const ordered = [...series.points].sort(
              (a, b) => chart.xValues.indexOf(String(a.x)) - chart.xValues.indexOf(String(b.x))
            );
            const path = ordered.map((point) => `${chart.xAt(point.x)},${chart.yAt(point.y)}`).join(" ");
            return (
              <g key={series.index}>
                {config.type === "line" && (
                  <polyline points={path} fill="none" stroke={color} strokeWidth="3" strokeLinejoin="round" />
                )}
                {ordered.map((point, pointIndex) => (
                  <circle
                    key={pointIndex}
                    cx={chart.xAt(point.x)}
                    cy={chart.yAt(point.y)}
                    r={config.type === "scatter" ? 5 : 4}
                    fill="#fff"
                    stroke={color}
                    strokeWidth="3"
                    className="cursor-pointer"
                    onMouseEnter={(event) => showTip(event, series, point)}
                    onMouseLeave={() => setTip(null)}
                    onClick={(event) => showTip(event, series, point)}
                  />
                ))}
              </g>
            );
          })}
        </svg>
        {tip && (
          <div
            className="pointer-events-none absolute z-10 max-w-52 -translate-x-1/2 -translate-y-full rounded-lg bg-navy px-3 py-2 text-xs text-white shadow-lg"
            style={{ left: tip.left + 8, top: tip.top }}
          >
            <p className="font-semibold">{tip.series}</p>
            <p className="mt-0.5 text-white/75">
              {tip.x}: {tip.y}
            </p>
            {tip.label && <p className="mt-1 text-white/80">{tip.label}</p>}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
        {config.series.map((series, index) => (
          <button
            key={`${series.name}-${index}`}
            type="button"
            aria-pressed={!hidden.has(index)}
            onClick={() => toggleSeries(index)}
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
              hidden.has(index) ? "border-line text-muted opacity-50" : "border-line bg-slate-50 text-navy"
            }`}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: COLORS[index % COLORS.length] }} />
            {series.name}
          </button>
        ))}
      </div>
    </figure>
  );
}
