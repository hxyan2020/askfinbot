"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MindmapNode, MindmapNodeKind } from "@/lib/mindmaps/types";

type LaidOut = {
  id: string;
  label: string;
  lines: string[];
  kind: MindmapNodeKind;
  emoji?: string;
  priority?: "critical" | "high" | "medium";
  weightHint?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  branchIndex: number;
  collapsed: boolean;
  hasChildren: boolean;
  parentId?: string;
};

const LINE_H = 15;
const PAD_Y = 10;
const PAD_X = 12;
const TOGGLE_W = 22;
const NODE_GAP_Y = 12;
const LEVEL_GAP_X = 36;
const PAD = 48;
const MAX_NODE_W = 340;
const MIN_NODE_W = 128;
const CHAR_W = 7.1;

function wrapLines(label: string, emoji: string | undefined, hasChildren: boolean): {
  lines: string[];
  width: number;
  height: number;
} {
  const prefix = emoji ? `${emoji} ` : "";
  const full = `${prefix}${label}`;
  const togglePad = hasChildren ? TOGGLE_W : 0;
  const contentBudget = MAX_NODE_W - PAD_X * 2 - togglePad;
  const maxChars = Math.max(18, Math.floor(contentBudget / CHAR_W));

  const words = full.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars) {
      current = next;
      continue;
    }
    if (current) lines.push(current);
    if (word.length <= maxChars) {
      current = word;
    } else {
      // Hard-break very long tokens so nothing is clipped with ellipsis
      let rest = word;
      while (rest.length > maxChars) {
        lines.push(rest.slice(0, maxChars));
        rest = rest.slice(maxChars);
      }
      current = rest;
    }
  }
  if (current) lines.push(current);
  if (!lines.length) lines.push(full);

  const longest = Math.max(...lines.map((line) => line.length), 12);
  const width = Math.min(
    MAX_NODE_W,
    Math.max(MIN_NODE_W, PAD_X * 2 + togglePad + longest * CHAR_W)
  );
  const height = Math.max(36, PAD_Y * 2 + lines.length * LINE_H);
  return { lines, width, height };
}

function collectVisible(
  node: MindmapNode,
  collapsed: Set<string>,
  depth = 0,
  parentId?: string,
  branchIndex = 0
): { node: MindmapNode; depth: number; parentId?: string; branchIndex: number }[] {
  const rows: { node: MindmapNode; depth: number; parentId?: string; branchIndex: number }[] = [
    { node, depth, parentId, branchIndex },
  ];
  const kids = node.children || [];
  if (!kids.length || collapsed.has(node.id)) return rows;
  kids.forEach((child, childIndex) => {
    const childBranch = depth === 0 ? childIndex : branchIndex;
    rows.push(...collectVisible(child, collapsed, depth + 1, node.id, childBranch));
  });
  return rows;
}

function layoutTree(root: MindmapNode, collapsed: Set<string>): {
  nodes: LaidOut[];
  width: number;
  height: number;
} {
  const sizeCache = new Map<string, { lines: string[]; width: number; height: number }>();

  function sizeOf(node: MindmapNode) {
    if (sizeCache.has(node.id)) return sizeCache.get(node.id)!;
    const sized = wrapLines(node.label, node.emoji, Boolean(node.children?.length));
    sizeCache.set(node.id, sized);
    return sized;
  }

  const visible = collectVisible(root, collapsed);
  const heights = new Map<string, number>();

  function subtreeHeight(node: MindmapNode): number {
    if (heights.has(node.id)) return heights.get(node.id)!;
    const selfH = sizeOf(node).height;
    const kids = node.children || [];
    if (!kids.length || collapsed.has(node.id)) {
      heights.set(node.id, selfH);
      return selfH;
    }
    const h =
      kids.reduce((sum, child) => sum + subtreeHeight(child), 0) +
      NODE_GAP_Y * Math.max(0, kids.length - 1);
    heights.set(node.id, Math.max(selfH, h));
    return heights.get(node.id)!;
  }
  subtreeHeight(root);

  const positions = new Map<string, { x: number; y: number }>();
  const depthWidth = new Map<number, number>();

  function place(node: MindmapNode, depth: number, top: number, x: number) {
    const sized = sizeOf(node);
    depthWidth.set(depth, Math.max(depthWidth.get(depth) || 0, sized.width));
    const h = subtreeHeight(node);
    const kids = node.children || [];
    if (!kids.length || collapsed.has(node.id)) {
      positions.set(node.id, { x, y: top + h / 2 - sized.height / 2 });
      return;
    }
    let cursor = top;
    for (const child of kids) {
      const ch = subtreeHeight(child);
      place(child, depth + 1, cursor, x + sized.width + LEVEL_GAP_X);
      cursor += ch + NODE_GAP_Y;
    }
    const first = positions.get(kids[0].id)!;
    const last = positions.get(kids[kids.length - 1].id)!;
    const firstSize = sizeOf(kids[0]);
    const lastSize = sizeOf(kids[kids.length - 1]);
    const midY = (first.y + firstSize.height / 2 + last.y + lastSize.height / 2) / 2;
    positions.set(node.id, { x, y: midY - sized.height / 2 });
  }

  place(root, 0, PAD, PAD);

  const nodes: LaidOut[] = visible.map(({ node, depth, parentId, branchIndex }) => {
    const pos = positions.get(node.id) || { x: PAD, y: PAD };
    const sized = sizeOf(node);
    return {
      id: node.id,
      label: node.label,
      lines: sized.lines,
      kind: node.kind,
      emoji: node.emoji,
      priority: node.priority,
      weightHint: node.weightHint,
      x: pos.x,
      y: pos.y,
      width: sized.width,
      height: sized.height,
      depth,
      branchIndex,
      collapsed: collapsed.has(node.id),
      hasChildren: Boolean(node.children?.length),
      parentId,
    };
  });

  const maxX = Math.max(...nodes.map((n) => n.x + n.width), 400);
  const maxY = Math.max(...nodes.map((n) => n.y + n.height), 300);
  return { nodes, width: maxX + PAD, height: maxY + PAD };
}

/** Soft washed branch palettes — cycles across modules on every mindmap. */
const BRANCH_PALETTES = [
  { fill: "#e8f1fb", stroke: "#9eb6d4", text: "#1e3a5f", edge: "#b7c9de", soft: "#f4f8fc" },
  { fill: "#eaf6ef", stroke: "#95c4a8", text: "#1e4d36", edge: "#b5d6c2", soft: "#f4faf6" },
  { fill: "#fef6e8", stroke: "#e0c08a", text: "#6b4a1a", edge: "#ead4a8", soft: "#fffaf0" },
  { fill: "#f3eaf8", stroke: "#c4a3d4", text: "#4a2d5c", edge: "#d4bce0", soft: "#f9f4fb" },
  { fill: "#fceef0", stroke: "#dca0a8", text: "#6b2d35", edge: "#e8b8be", soft: "#fdf5f6" },
  { fill: "#e8f5f6", stroke: "#8fc4c8", text: "#1e4a4d", edge: "#b0d6d9", soft: "#f3fafb" },
  { fill: "#f5efe6", stroke: "#c9b69a", text: "#4a4030", edge: "#d9cdb8", soft: "#faf7f2" },
  { fill: "#eef0f8", stroke: "#a8b0d0", text: "#2d3450", edge: "#c0c6dc", soft: "#f5f6fb" },
] as const;

function branchPalette(branchIndex: number) {
  return BRANCH_PALETTES[((branchIndex % BRANCH_PALETTES.length) + BRANCH_PALETTES.length) % BRANCH_PALETTES.length];
}

function fillFor(
  kind: MindmapNodeKind,
  branchIndex: number,
  priority?: string
): { fill: string; stroke: string; text: string; edge: string } {
  const palette = branchPalette(branchIndex);

  if (kind === "exam") {
    return { fill: "#e6eef8", stroke: "#7a96b8", text: "#0b1f3a", edge: "#c5d2e3" };
  }
  if (kind === "module") {
    return { fill: palette.fill, stroke: palette.stroke, text: palette.text, edge: palette.edge };
  }
  if (kind === "area") {
    return {
      fill: palette.soft,
      stroke: palette.stroke,
      text: palette.text,
      edge: palette.edge,
    };
  }
  if (kind === "test-group") {
    return { fill: "#fff4e6", stroke: "#e0b87a", text: "#6b4a1a", edge: "#ead4a8" };
  }
  if (kind === "test-point") {
    if (priority === "critical") {
      return { fill: "#fdeceb", stroke: "#e0a0a0", text: "#6b2d2d", edge: "#e8b8b8" };
    }
    if (priority === "high") {
      return { fill: "#fff1e6", stroke: "#e0b090", text: "#6b4020", edge: "#e8c8b0" };
    }
    return { fill: palette.soft, stroke: palette.stroke, text: palette.text, edge: palette.edge };
  }
  // topic / default — lightest wash of the branch
  return {
    fill: "#ffffff",
    stroke: palette.edge,
    text: palette.text,
    edge: palette.edge,
  };
}

/** Collapse topic areas (and deeper) so users can fold the fully expanded default. */
function collapseTopicsSet(root: MindmapNode): Set<string> {
  const set = new Set<string>();
  for (const module of root.children || []) {
    for (const area of module.children || []) {
      if (area.children?.length) set.add(area.id);
    }
  }
  return set;
}

export function MindMapViewer({ root }: { root: MindmapNode }) {
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const [scale, setScale] = useState(0.75);
  const [tx, setTx] = useState(20);
  const [ty, setTy] = useState(10);
  const [selected, setSelected] = useState<string | null>(root.id);
  const drag = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCollapsed(new Set());
    setSelected(root.id);
    setScale(0.75);
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
    setScale((s) => Math.min(2.4, Math.max(0.25, Number((s * factor).toFixed(3)))));
  }, []);

  const resetView = useCallback(() => {
    setScale(0.75);
    setTx(20);
    setTy(10);
  }, []);

  const expandAll = useCallback(() => {
    setCollapsed(new Set());
    setScale(0.75);
    setTx(20);
    setTy(10);
  }, []);

  const collapseTopics = useCallback(() => {
    setCollapsed(collapseTopicsSet(root));
    // Collapsing shrinks the map a lot — snap back so nodes stay in view.
    setScale(0.85);
    setTx(20);
    setTy(10);
    setSelected(root.id);
  }, [root]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        const direction = event.deltaY > 0 ? 0.9 : 1.1;
        setScale((s) => Math.min(2.4, Math.max(0.25, Number((s * direction).toFixed(3)))));
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
          Drag to pan · Ctrl/⌘ + scroll to zoom · Click nodes to fold
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
              const tone = fillFor(node.kind, node.branchIndex, node.priority);
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
                  stroke={tone.edge}
                  strokeWidth="1.5"
                />
              );
            })}

            {nodes.map((node) => {
              const tone = fillFor(node.kind, node.branchIndex, node.priority);
              const active = selected === node.id;
              const fontSize = node.kind === "exam" ? 13 : 12;
              const fontWeight = node.kind === "exam" || node.kind === "module" ? 700 : 500;
              const textStartY =
                node.y + (node.height - node.lines.length * LINE_H) / 2 + LINE_H - 3;
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
                  <title>{node.label}</title>
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
                    x={node.x + PAD_X}
                    y={textStartY}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    fill={tone.text}
                  >
                    {node.lines.map((line, index) => (
                      <tspan key={`${node.id}-l-${index}`} x={node.x + PAD_X} dy={index === 0 ? 0 : LINE_H}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                  {node.hasChildren && (
                    <text
                      x={node.x + node.width - 12}
                      y={node.y + node.height / 2 + 4}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="700"
                      fill={tone.stroke}
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
