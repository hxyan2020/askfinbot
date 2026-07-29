import type { CoursewareLesson, CoursewareVisual, ModuleCourseware } from "../types";
import { VISUAL_LIBRARY, buildLibraryVisual } from "./library";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[—–-]/g, " ")
    .replace(/[^a-z0-9\s./]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function keywordHit(haystack: string, keyword: string): boolean {
  const k = normalize(keyword);
  if (!k) return false;
  if (k.includes(" ")) return haystack.includes(k);
  return new RegExp(`(?:^|\\s)${k}(?:s)?(?:\\s|$)`).test(haystack);
}

function scoreKeywords(haystack: string, keywords: string[]): number {
  let score = 0;
  for (const keyword of keywords) {
    if (keywordHit(haystack, keyword)) {
      score += keyword.includes(" ") ? 2.5 : 1.15;
    }
  }
  return score;
}

function lessonTitleText(lesson: CoursewareLesson): string {
  return normalize(lesson.title);
}

function lessonBodyText(lesson: CoursewareLesson): string {
  return normalize(
    [
      ...lesson.objectives,
      ...lesson.keyPoints,
      ...(lesson.body ?? []).slice(0, 2),
      ...(lesson.formulas ?? []),
      ...lesson.selfCheck,
    ].join(" ")
  );
}

function moduleContextText(module: ModuleCourseware): string {
  return normalize(
    [
      module.title,
      ...module.syllabusAreas.map((area) => area.title),
      ...module.frameworksAndFormulas.slice(0, 4),
    ].join(" ")
  );
}

function pickFromRanked(
  ranked: { entry: (typeof VISUAL_LIBRARY)[number]; score: number; lessonScore: number }[],
  idPrefix: string,
  limit: number
): CoursewareVisual[] {
  const picked: CoursewareVisual[] = [];
  const usedFamilies = new Set<string>();

  for (const row of ranked) {
    if (picked.length >= limit) break;

    const family = row.entry.id.split(".")[0] ?? row.entry.id;
    if (usedFamilies.has(family) && row.lessonScore < 5) continue;
    if (row.entry.id.startsWith("payoff.") && usedFamilies.has("payoff")) continue;

    const kindKey = row.entry.kind;
    if (kindKey === "formula-tex" && usedFamilies.has("formula") && picked.length > 0) {
      continue;
    }
    if (
      kindKey === "formula-tex" &&
      picked.length === 0 &&
      ranked.some((r) => r.entry.kind !== "formula-tex" && r.score >= row.score)
    ) {
      continue;
    }

    const visual = buildLibraryVisual(row.entry.id, {
      id: `${idPrefix}-${row.entry.id}`,
    });
    if (!visual) continue;
    picked.push(visual);
    usedFamilies.add(row.entry.id.startsWith("payoff.") ? "payoff" : family);
    if (kindKey === "formula-tex") usedFamilies.add("formula");
  }

  return picked;
}

/**
 * Match visuals with lesson title weighted highest, then lesson body.
 * Module context only gently boosts — it must not stamp one diagram on every lesson.
 */
export function matchVisualsForLesson(
  module: ModuleCourseware,
  lesson: CoursewareLesson,
  limit = 3
): CoursewareVisual[] {
  const title = lessonTitleText(lesson);
  const body = lessonBodyText(lesson);
  const context = moduleContextText(module);

  const ranked = VISUAL_LIBRARY.map((entry) => {
    const titleScore = scoreKeywords(title, entry.keywords);
    // If the lesson title is vague ("Context and confirmation"), allow the module title to help.
    const moduleTitleScore =
      titleScore === 0 ? scoreKeywords(normalize(module.title), entry.keywords) * 0.9 : 0;
    const effectiveTitle = titleScore + moduleTitleScore;
    const bodyScore = scoreKeywords(body, entry.keywords);
    const moduleScore = scoreKeywords(context, entry.keywords);
    const lessonScore = effectiveTitle * 1.7 + bodyScore;
    // A clean title/module-title keyword hit is enough — don't require two hits on short titles.
    const score =
      effectiveTitle >= 1.15 || lessonScore >= 2.0
        ? Math.max(lessonScore, effectiveTitle * 1.7) + Math.min(1.0, moduleScore * 0.2)
        : lessonScore >= 1.15
          ? lessonScore + Math.min(0.5, moduleScore * 0.1)
          : moduleScore >= 4.5
            ? moduleScore * 0.4
            : 0;
    return { entry, score, lessonScore: Math.max(lessonScore, effectiveTitle * 1.7) };
  })
    .filter((row) => row.score >= 1.95)
    .sort((a, b) => b.score - a.score || b.lessonScore - a.lessonScore);

  const strong = ranked.filter((row) => row.lessonScore >= 1.95);
  const pool = strong.length ? strong : ranked.slice(0, 1);
  return pickFromRanked(pool, lesson.id, strong.length ? limit : 1);
}

export function matchVisualsForText(
  title: string,
  extra: string[] = [],
  idPrefix = "note",
  limit = 2
): CoursewareVisual[] {
  const haystack = normalize([title, ...extra].join(" "));
  const ranked = VISUAL_LIBRARY.map((entry) => {
    const lessonScore = scoreKeywords(haystack, entry.keywords);
    return { entry, score: lessonScore, lessonScore };
  })
    .filter((row) => row.score >= 2.4)
    .sort((a, b) => b.score - a.score);

  return pickFromRanked(ranked, idPrefix, limit);
}
