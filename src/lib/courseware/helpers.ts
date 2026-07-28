import type { CoursewareLesson, ModuleCourseware, SyllabusArea } from "./types";

export function lesson(
  id: string,
  title: string,
  durationMinutes: number,
  objectives: string[],
  keyPoints: string[],
  selfCheck: string[],
  workedExample?: string,
  extras?: { body?: string[]; formulas?: string[] }
): CoursewareLesson {
  return {
    id,
    title,
    durationMinutes,
    objectives,
    keyPoints,
    selfCheck,
    workedExample,
    body: extras?.body,
    formulas: extras?.formulas,
  };
}

export function area(title: string, topics: string[], weightHint?: string): SyllabusArea {
  return { title, topics, weightHint };
}

export function courseware(input: ModuleCourseware): ModuleCourseware {
  return input;
}

/** Normalize titles for fuzzy matching (old portfolios → new courseware). */
export function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[—–-]/g, " ")
    .replace(/\(.*?\)/g, " ")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Extract paper code like AA, FR, SBL from titles. */
export function extractPaperCode(title: string): string | undefined {
  const m = title.match(/\b([A-Z]{2,4})\b/);
  return m?.[1];
}
