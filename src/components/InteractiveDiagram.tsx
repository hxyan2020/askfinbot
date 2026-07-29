"use client";

import { useMemo, useState } from "react";
import type {
  CoursewareDiagramNode,
  CoursewareDiagramSpec,
} from "@/lib/courseware/types";

const TONE: Record<NonNullable<CoursewareDiagramNode["tone"]>, { fill: string; stroke: string; text: string }> = {
  navy: { fill: "#0b1f3a", stroke: "#0b1f3a", text: "#ffffff" },
  gold: { fill: "#f8f1d8", stroke: "#c9a227", text: "#0b1f3a" },
  slate: { fill: "#f1f5f9", stroke: "#94a3b8", text: "#0b1f3a" },
  green: { fill: "#ecfdf5", stroke: "#059669", text: "#065f46" },
  red: { fill: "#fef2f2", stroke: "#dc2626", text: "#7f1d1d" },
};

function toneOf(node: CoursewareDiagramNode) {
  return TONE[node.tone ?? "slate"];
}

function FlowchartView({ spec }: { spec: CoursewareDiagramSpec }) {
  const nodes = spec.nodes;
  const width = 680;
  const rowH = 78;
  const height = Math.max(180, nodes.length * rowH + 40);
  const boxW = 420;
  const boxH = 52;
  const x = (width - boxW) / 2;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={spec.title}>
      {nodes.map((node, index) => {
        const y = 24 + index * rowH;
        const t = toneOf(node);
        const next = nodes[index + 1];
        return (
          <g key={node.id}>
            <rect x={x} y={y} width={boxW} height={boxH} rx="10" fill={t.fill} stroke={t.stroke} strokeWidth="1.5" />
            <text x={width / 2} y={y + 22} textAnchor="middle" fontSize="13" fontWeight="700" fill={t.text}>
              {node.label}
            </text>
            {node.detail && (
              <text x={width / 2} y={y + 40} textAnchor="middle" fontSize="11" fill={t.text === "#ffffff" ? "#cbd5e1" : "#64748b"}>
                {node.detail.length > 62 ? `${node.detail.slice(0, 61)}…` : node.detail}
              </text>
            )}
            {next && (
              <>
                <line
                  x1={width / 2}
                  y1={y + boxH}
                  x2={width / 2}
                  y2={y + rowH - 4}
                  stroke="#94a3b8"
                  strokeWidth="2"
                  markerEnd="url(#cw-arrow)"
                />
                {spec.edges?.find((e) => e.from === node.id && e.to === next.id)?.label && (
                  <text x={width / 2 + 10} y={y + boxH + 16} fontSize="10" fill="#64748b">
                    {spec.edges.find((e) => e.from === node.id && e.to === next.id)?.label}
                  </text>
                )}
              </>
            )}
          </g>
        );
      })}
      <defs>
        <marker id="cw-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
    </svg>
  );
}

function StepsView({ spec }: { spec: CoursewareDiagramSpec }) {
  const nodes = spec.nodes;
  const width = 680;
  const gap = 16;
  const boxW = Math.min(140, (width - gap * (nodes.length + 1)) / Math.max(1, nodes.length));
  const height = 150;
  const startX = (width - (nodes.length * boxW + (nodes.length - 1) * gap)) / 2;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={spec.title}>
      {nodes.map((node, index) => {
        const x = startX + index * (boxW + gap);
        const t = toneOf(node);
        return (
          <g key={node.id}>
            <rect x={x} y={36} width={boxW} height={72} rx="10" fill={t.fill} stroke={t.stroke} strokeWidth="1.5" />
            <circle cx={x + boxW / 2} cy={28} r="12" fill="#0b1f3a" />
            <text x={x + boxW / 2} y={32} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
              {index + 1}
            </text>
            <text x={x + boxW / 2} y={68} textAnchor="middle" fontSize="11" fontWeight="700" fill={t.text}>
              {node.label.length > 16 ? `${node.label.slice(0, 15)}…` : node.label}
            </text>
            {node.detail && (
              <text x={x + boxW / 2} y={88} textAnchor="middle" fontSize="9" fill="#64748b">
                {node.detail.length > 18 ? `${node.detail.slice(0, 17)}…` : node.detail}
              </text>
            )}
            {index < nodes.length - 1 && (
              <line
                x1={x + boxW}
                y1={72}
                x2={x + boxW + gap}
                y2={72}
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="url(#cw-arrow-h)"
              />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="cw-arrow-h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>
    </svg>
  );
}

function CycleView({ spec }: { spec: CoursewareDiagramSpec }) {
  const nodes = spec.nodes;
  const width = 680;
  const height = 340;
  const cx = width / 2;
  const cy = height / 2;
  const r = 110;
  const [active, setActive] = useState<string | null>(nodes[0]?.id ?? null);

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={spec.title}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e2e8f0" strokeWidth="18" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#c9a227" strokeWidth="3" strokeDasharray="8 10" />
        {nodes.map((node, index) => {
          const angle = (-Math.PI / 2) + (index / nodes.length) * Math.PI * 2;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          const selected = active === node.id;
          const t = toneOf(node);
          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onClick={() => setActive(node.id)}
              onMouseEnter={() => setActive(node.id)}
            >
              <circle
                cx={x}
                cy={y}
                r={selected ? 28 : 24}
                fill={selected ? "#0b1f3a" : t.fill}
                stroke={selected ? "#c9a227" : t.stroke}
                strokeWidth="2"
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill={selected ? "#fff" : t.text}
              >
                {index + 1}
              </text>
              <text
                x={cx + Math.cos(angle) * (r + 48)}
                y={cy + Math.sin(angle) * (r + 48)}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#0b1f3a"
              >
                {node.label.length > 18 ? `${node.label.slice(0, 17)}…` : node.label}
              </text>
            </g>
          );
        })}
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#0b1f3a">
          Cycle
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="10" fill="#64748b">
          tap a stage
        </text>
      </svg>
      {active && (
        <p className="border-t border-line px-4 py-3 text-xs text-slate-600">
          <span className="font-semibold text-navy">
            {nodes.find((n) => n.id === active)?.label}
          </span>
          {nodes.find((n) => n.id === active)?.detail
            ? ` — ${nodes.find((n) => n.id === active)?.detail}`
            : ""}
        </p>
      )}
    </div>
  );
}

function TreeView({ spec }: { spec: CoursewareDiagramSpec }) {
  const root = spec.nodes[0];
  const children = spec.nodes.slice(1);
  const width = 680;
  const height = 260;
  const childW = Math.min(150, (width - 40) / Math.max(1, children.length));
  const startX = (width - children.length * childW) / 2;

  if (!root) return null;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={spec.title}>
      <rect x={(width - 220) / 2} y={24} width={220} height={48} rx="10" fill="#0b1f3a" />
      <text x={width / 2} y={52} textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
        {root.label}
      </text>
      {children.map((node, index) => {
        const x = startX + index * childW + 8;
        const t = toneOf(node);
        const mid = x + (childW - 16) / 2;
        return (
          <g key={node.id}>
            <line x1={width / 2} y1={72} x2={mid} y2={120} stroke="#94a3b8" strokeWidth="1.5" />
            <rect x={x} y={120} width={childW - 16} height={70} rx="10" fill={t.fill} stroke={t.stroke} strokeWidth="1.5" />
            <text x={mid} y={148} textAnchor="middle" fontSize="11" fontWeight="700" fill={t.text}>
              {node.label.length > 14 ? `${node.label.slice(0, 13)}…` : node.label}
            </text>
            {node.detail && (
              <text x={mid} y={168} textAnchor="middle" fontSize="9" fill="#64748b">
                {node.detail.length > 16 ? `${node.detail.slice(0, 15)}…` : node.detail}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function WaterfallView({ spec }: { spec: CoursewareDiagramSpec }) {
  const nodes = spec.nodes;
  const weights = spec.weights?.length === nodes.length
    ? spec.weights
    : nodes.map((_, i) => Math.max(1, nodes.length - i));
  const total = weights.reduce((a, b) => a + b, 0) || 1;
  const width = 680;
  const height = 280;
  const maxH = 200;
  const gap = 18;
  const barW = Math.min(120, (width - 60 - gap * (nodes.length - 1)) / Math.max(1, nodes.length));
  const startX = (width - (nodes.length * barW + (nodes.length - 1) * gap)) / 2;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={spec.title}>
      <text x={24} y={28} fontSize="11" fill="#64748b">
        Loss absorption ↑ (equity first) · Cash flow priority ↓ (senior first)
      </text>
      {nodes.map((node, index) => {
        const h = (weights[index] / total) * maxH;
        const x = startX + index * (barW + gap);
        const y = 50 + (maxH - h);
            const t = toneOf(node);
            const labelY = y + h / 2;
            return (
          <g key={node.id}>
            <rect x={x} y={y} width={barW} height={Math.max(28, h)} rx="8" fill={t.fill} stroke={t.stroke} strokeWidth="1.5" />
            <text x={x + barW / 2} y={labelY} textAnchor="middle" fontSize="11" fontWeight="700" fill={t.text}>
              {node.label}
            </text>
            {node.detail && (
              <text x={x + barW / 2} y={labelY + 16} textAnchor="middle" fontSize="9" fill="#64748b">
                {node.detail}
              </text>
            )}
            <text x={x + barW / 2} y={50 + maxH + 22} textAnchor="middle" fontSize="10" fill="#64748b">
              {Math.round((weights[index] / total) * 100)}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function InteractiveDiagram({ spec }: { spec: CoursewareDiagramSpec }) {
  const body = useMemo(() => {
    switch (spec.type) {
      case "cycle":
        return <CycleView spec={spec} />;
      case "tree":
        return <TreeView spec={spec} />;
      case "waterfall":
        return <WaterfallView spec={spec} />;
      case "steps":
        return <StepsView spec={spec} />;
      case "flowchart":
      default:
        return <FlowchartView spec={spec} />;
    }
  }, [spec]);

  return (
    <figure className="my-3 overflow-hidden rounded-xl border border-line bg-white shadow-sm">
      <figcaption className="border-b border-line px-4 py-3">
        <p className="font-semibold text-navy">{spec.title}</p>
        <p className="mt-0.5 text-[11px] text-muted">
          Interactive study diagram · follow the flow, then check the caption
        </p>
      </figcaption>
      <div className="px-2 pt-2">{body}</div>
      {spec.footnote && (
        <p className="border-t border-line px-4 py-2 text-[11px] text-muted">{spec.footnote}</p>
      )}
    </figure>
  );
}
