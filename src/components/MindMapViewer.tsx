"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MindmapNode, MindmapNodeKind } from "@/lib/mindmaps/types";

type LaidOut = {
  id: string;
  label: string;
  kind: MindmapNodeKind;
  emoji?: string;
  priority?: "critical" | "high" | "medium";
  weightHint?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  collapsed: boolean;
  hasChildren: boolean;
  parentId?: string;
};

const NODE_H = 36;
const NODE_GAP_Y = 14;
const LEVEL_GAP_X = 220;
const PAD = 48;

function estimateWidth(label: string, emoji?: string): number {
  const text = `${emoji ? `${emoji} ` : ""}${label}`;
  return Math.min(260, Math.max(120, 10 + text.length * 7.2));
}

function collectVisible(
  node: MindmapNode,
  collapsed: Set<string>,
  depth = 0,
  parentId?: string
): { node: MindmapNode; depth: number; parentId?: string }[] {
  const rows: { node: MindmapNode; depth: number; parentId?: string }[] = [
    { node, depth, parentId },
  ];
  const kids = node.children || [];
  if (!kids.length || collapsed.has(node.id)) return rows;
  for (const child of kids) {
    rows.push(...collectVisible(child, collapsed, depth + 1, node.id));
  }
  return rows;
}

function layoutTree(root: MindmapNode, collapsed: Set<string>): {
  nodes: LaidOut[];
  width: number;
  height: number;
} {
  const visible = collectVisible(root, collapsed);
  // Assign y by leaf-order stacking
  const heights = new Map<string, number>();

  function subtreeHeight(node: MindmapNode): number {
    if (heights.has(node.id)) return heights.get(node.id)!;
    const kids = node.children || [];
    if (!kids.length || collapsed.has(node.id)) {
      heights.set(node.id, NODE_H);
      return NODE_H;
    }
    const h =
      kids.reduce((sum, child) => sum + subtreeHeight(child), 0) +
      NODE_GAP_Y * Math.max(0, kids.length - 1);
    heights.set(node.id, Math.max(NODE_H, h));
    return heights.get(node.id)!;
  }
  subtreeHeight(root);

  const positions = new Map<string, { x: number; y: number }>();

  function place(node: MindmapNode, depth: number, top: number) {
    const h = subtreeHeight(node);
    const kids = node.children || [];
    const x = PAD + depth * LEVEL_GAP_X;
    if (!kids.length || collapsed.has(node.id)) {
      positions.set(node.id, { x, y: top + h / 2 - NODE_H / 2 });
      return;
    }
    let cursor = top;
    for (const child of kids) {
      const ch = subtreeHeight(child);
      place(child, depth + 1, cursor);
      cursor += ch + NODE_GAP_Y;
    }
    const first = positions.get(kids[0].id)!;
    const last = positions.get(kids[kids.length - 1].id)!;
    const midY = (first.y + last.y) / 2;
    positions.set(node.id, { x, y: midY });
  }

  place(root, 0, PAD);

  const nodes: LaidOut[] = visible.map(({ node, depth, parentId }) => {
    const pos = positions.get(node.id) || { x: PAD, y: PAD };
    const width = estimateWidth(node.label, node.emoji);
    return {
      id: node.id,
      label: node.label,
      kind: node.kind,
      emoji: node.emoji,
      priority: node.priority,
      weightHint: node.weightHint,
      x: pos.x,
      y: pos.y,
      width,
      height: NODE_H,
      depth,
      collapsed: collapsed.has(node.id),
      hasChildren: Boolean(node.children?.length),
      parentId,
    };
  });

  const maxX = Math.max(...nodes.map((n) => n.x + n.width), 400);
  const maxY = Math.max(...nodes.map((n) => n.y + n.height), 300);
  return { nodes, width: maxX + PAD, height: maxY + PAD };
}

function fillFor(kind: MindmapNodeKind, priority?: string): { fill: string; stroke: string; text: string } {
  if (kind === "exam") return { fill: "#0b1f3a", stroke: "#0b1f3a", text: "#ffffff" };
  if (kind === "module") return { fill: "#f8f1d8", stroke: "#c9a227", text: "#0b1f3a" };
  if (kind === "area") return { fill: "#ffffff", stroke: "#94a3b8", text: "#0b1f3a" };
  if (kind === "test-group") return { fill: "#fff7ed", stroke: "#f59e0b", text: "#0b1f3a" };
  if (kind === "test-point") {
    if (priority === "critical") return { fill: "#fef2f2", stroke: "#dc2626", text: "#7f1d1d" };
    if (priority === "high") return { fill: "#fff7ed", stroke: "#ea580c", text: "#9a3412" };
    return { fill: "#f8fafc", stroke: "#94a3b8", text: "#334155" };
  }
  return { fill: "#f8fafc", stroke: "#cbd5e1", text: "#475569" };
}

function defaultCollapsed(root: MindmapNode): Set<string> {
  const set = new Set<string>();
  // Start with modules expanded to areas, but areas collapsed (topics hidden) for readability
  for (const module of root.children || []) {
    for (const area of module.children || []) {
      if (area.children?.length) set.add(area.id);
    }
  }
  return set;
}

export function MindMapViewer({ root }: { root: MindmapNode }) {
  const [collapsed, setCollapsed] = useState<Set<string>>(() => defaultCollapsed(root));
  const [scale, setScale] = useState(0.85);
  const [tx, setTx] = useState(20);
  const [ty, setTy] = useState(10);
  const [selected, setSelected] = useState<string | null>(root.id);
  const drag = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCollapsed(defaultCollapsed(root));
    setSelected(root.id);
    setScale(0.85);
    setTx(20);
    setTy(10);
  }, [root]);

  const { nodes, width, height } = useMemo(
    () => layoutTree(root, collapsed),
    [root, collapsed]
  );

  const byId = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
  const selectedNode = selected ? byId.get(selected) : undefined;

  const toggle = useCallback((id: string, hasChildren: boolean) => {
    if (!hasChildren) {
      setSelected(id);
      return;
    }
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setSelected(id);
  }, []);

  const zoomBy = useCallback((factor: number) => {
    setScale((s) => Math.min(2.4, Math.max(0.35, Number((s * factor).toFixed(3)))));
  }, []);

  const resetView = useCallback(() => {
    setScale(0.85);
    setTx(20);
    setTy(10);
  }, []);

  const expandAll = useCallback(() => {
    setCollapsed(new Set());
  }, []);

  const collapseTopics = useCallback(() => {
    setCollapsed(defaultCollapsed(root));
  }, [root]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        const direction = event.deltaY > 0 ? 0.9 : 1.1;
        setScale((s) => Math.min(2.4, Math.max(0.35, Number((s * direction).toFixed(3)))));
      } else {
        setTx((v) => v - event.deltaX);
        setTy((v) => v - event.deltaY);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b border-line bg-slate-50 px-3 py-2">
        <button type="button" className="admin-btn-secondary" onClick={() => zoomBy(1.15)} aria-label="Zoom in">
          Zoom in
        </button>
        <button type="button" className="admin-btn-secondary" onClick={() => zoomBy(1 / 1.15)} aria-label="Zoom out">
          Zoom out
        </button>
        <button type="button" className="admin-btn-secondary" onClick={resetView}>
          Reset view
        </button>
        <button type="button" className="admin-btn-secondary" onClick={expandAll}>
          Expand all
        </button>
        <button type="button" className="admin-btn-secondary" onClick={collapseTopics}>
          Collapse topics
        </button>
        <span className="ml-auto text-xs text-muted">
          Drag to pan · Ctrl/⌘ + scroll to zoom · Click nodes to expand
        </span>
      </div>

      <div
        ref={viewportRef}
        className="relative h-[min(72vh,820px)] cursor-grab overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] [background-size:18px_18px] active:cursor-grabbing"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("[data-node]")) return;
          drag.current = { x: event.clientX, y: event.clientY, tx, ty };
          (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          setTx(drag.current.tx + (event.clientX - drag.current.x));
          setTy(drag.current.ty + (event.clientY - drag.current.y));
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <svg
          width="100%"
          height="100%"
          className="block h-full w-full"
          role="img"
          aria-label={root.label}
        >
          <g transform={`translate(${tx} ${ty}) scale(${scale})`}>
            {nodes.map((node) => {
              if (!node.parentId) return null;
              const parent = byId.get(node.parentId);
              if (!parent) return null;
              const x1 = parent.x + parent.width;
              const y1 = parent.y + parent.height / 2;
              const x2 = node.x;
              const y2 = node.y + node.height / 2;
              const mx = (x1 + x2) / 2;
              return (
                <path
                  key={`e-${node.id}`}
                  d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                />
              );
            })}

            {nodes.map((node) => {
              const tone = fillFor(node.kind, node.priority);
              const active = selected === node.id;
              return (
                <g
                  key={node.id}
                  data-node
                  className="cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggle(node.id, node.hasChildren);
                  }}
                >
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.width}
                    height={node.height}
                    rx="10"
                    fill={tone.fill}
                    stroke={active ? "#c9a227" : tone.stroke}
                    strokeWidth={active ? 2.5 : 1.4}
                  />
                  <text
                    x={node.x + 12}
                    y={node.y + node.height / 2 + 4}
                    fontSize={node.kind === "exam" ? 13 : 12}
                    fontWeight={node.kind === "exam" || node.kind === "module" ? 700 : 500}
                    fill={tone.text}
                  >
                    {node.emoji ? `${node.emoji} ` : ""}
                    {node.label.length > 34 ? `${node.label.slice(0, 33)}…` : node.label}
                  </text>
                  {node.hasChildren && (
                    <text
                      x={node.x + node.width - 14}
                      y={node.y + node.height / 2 + 4}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="700"
                      fill={tone.text === "#ffffff" ? "#f8fafc" : "#64748b"}
                    >
                      {node.collapsed ? "+" : "−"}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {selectedNode && (
        <div className="border-t border-line px-4 py-3 text-sm">
          <p className="font-semibold text-navy">
            {selectedNode.emoji ? `${selectedNode.emoji} ` : ""}
            {selectedNode.label}
          </p>
          <p className="mt-1 text-xs text-muted">
            {selectedNode.kind === "exam" && "Qualification overview"}
            {selectedNode.kind === "module" && "Syllabus module / paper"}
            {selectedNode.kind === "area" &&
              `Topic area${selectedNode.weightHint ? ` · ${selectedNode.weightHint}` : ""}`}
            {selectedNode.kind === "topic" && "Syllabus topic"}
            {selectedNode.kind === "test-group" && "Critical examiner focus cluster"}
            {selectedNode.kind === "test-point" &&
              `Exam test point${selectedNode.priority ? ` · ${selectedNode.priority} priority` : ""}`}
            {" · "}
            Map size {Math.round(width)}×{Math.round(height)} · zoom {Math.round(scale * 100)}%
          </p>
        </div>
      )}
    </div>
  );
}
