"use client";

import {
  InteractiveConceptChart,
  type ConceptChartConfig,
} from "./InteractiveConceptChart";
import { InteractiveDiagram } from "./InteractiveDiagram";
import { MathFormula } from "./MathFormula";
import type { CoursewareVisual, CoursewareVisualPlacement } from "@/lib/courseware/types";
import { resolveCoursewareVisuals } from "@/lib/courseware/visuals";

function VisualBlock({ visual }: { visual: CoursewareVisual }) {
  if (visual.kind === "concept-chart") {
    return (
      <div className="cw-visual">
        <InteractiveConceptChart config={visual.chart as ConceptChartConfig} />
        {visual.caption && <p className="cw-visual-caption">{visual.caption}</p>}
      </div>
    );
  }
  if (visual.kind === "diagram") {
    return (
      <div className="cw-visual">
        <InteractiveDiagram spec={visual.diagram} />
        {visual.caption && <p className="cw-visual-caption">{visual.caption}</p>}
      </div>
    );
  }
  if (visual.kind === "formula-tex") {
    return (
      <div className="cw-visual cw-visual-formula">
        <MathFormula formula={visual.latex} display={visual.display !== false} />
        {visual.caption && <p className="cw-visual-caption">{visual.caption}</p>}
      </div>
    );
  }
  return null;
}

export function CoursewareVisuals({
  visuals,
  placement,
}: {
  visuals?: CoursewareVisual[];
  placement: CoursewareVisualPlacement;
}) {
  const resolved = resolveCoursewareVisuals(visuals).filter(
    (visual) => (visual.placement ?? "after-body") === placement
  );
  if (!resolved.length) return null;
  return (
    <div className="cw-visuals">
      {resolved.map((visual) => (
        <VisualBlock key={visual.id} visual={visual} />
      ))}
    </div>
  );
}
