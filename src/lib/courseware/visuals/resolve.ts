import type { CoursewareVisual } from "../types";
import { buildLibraryVisual } from "./library";

/** Resolve library refs into concrete chart/diagram/formula visuals for the UI. */
export function resolveCoursewareVisual(visual: CoursewareVisual): CoursewareVisual | null {
  if (visual.kind === "concept-chart-ref") {
    return buildLibraryVisual(visual.libraryId, {
      id: visual.id,
      caption: visual.caption,
      params: visual.params,
    });
  }
  if (visual.kind === "diagram-ref") {
    const built = buildLibraryVisual(visual.libraryId, {
      id: visual.id,
      caption: visual.caption,
      params: visual.params,
    });
    return built;
  }
  return visual;
}

export function resolveCoursewareVisuals(
  visuals: CoursewareVisual[] | undefined
): CoursewareVisual[] {
  if (!visuals?.length) return [];
  return visuals
    .map(resolveCoursewareVisual)
    .filter((v): v is CoursewareVisual => v !== null);
}
