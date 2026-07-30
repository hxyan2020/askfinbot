import type { ModuleCourseware, SyllabusArea } from "@/lib/courseware/types";

/** Soft cap so maps stay readable while still varying with syllabus depth. */
const MAX_TOPICS_PER_AREA = 14;

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[—–-]/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleScore(a: string, b: string): number {
  const left = new Set(normalize(a).split(" ").filter((w) => w.length > 2));
  const right = new Set(normalize(b).split(" ").filter((w) => w.length > 2));
  if (!left.size || !right.size) return 0;
  let hits = 0;
  for (const word of left) if (right.has(word)) hits += 1;
  return hits / Math.max(left.size, right.size);
}

function areaCorpus(area: SyllabusArea): string {
  return [area.title, ...area.topics].join(" ");
}

function bestAreaIndex(text: string, areas: SyllabusArea[]): number {
  let best = 0;
  let bestScore = -1;
  areas.forEach((area, index) => {
    const score = titleScore(text, areaCorpus(area));
    if (score > bestScore) {
      bestScore = score;
      best = index;
    }
  });
  return best;
}

function cleanLabel(raw: string): string | null {
  let label = raw.replace(/\s+/g, " ").trim();
  if (label.length < 8) return null;
  if (label.toLowerCase().includes("key exam test point")) return null;
  if (label.length > 120) {
    const first = label.split(/(?<=[.!?])\s+/)[0]?.trim() || label;
    label = first.length >= 8 && first.length <= 120 ? first : label.slice(0, 117).trim();
  }
  return label;
}

function isNearDuplicate(norm: string, norms: Iterable<string>): boolean {
  for (const existing of norms) {
    if (existing === norm || existing.includes(norm) || norm.includes(existing)) return true;
  }
  return false;
}

/**
 * Expand every syllabus area for a module using real courseware content.
 * Authored area.topics stay first; lessons, learning outcomes, objectives,
 * key points and study-note titles fill remaining slots by fuzzy match.
 */
export function expandModuleAreaTopics(module: ModuleCourseware): string[][] {
  const areas = module.syllabusAreas || [];
  if (!areas.length) return [];

  const buckets: string[][] = areas.map((item) => [...item.topics]);
  const globalNorms = new Set<string>();

  const remember = (label: string) => {
    globalNorms.add(normalize(label));
  };
  for (const label of buckets.flat()) remember(label);

  const claim = (index: number, raw: string, ignoreCap = false) => {
    if (!ignoreCap && buckets[index].length >= MAX_TOPICS_PER_AREA) return;
    const label = cleanLabel(raw);
    if (!label) return;
    const norm = normalize(label);
    if (!norm || isNearDuplicate(norm, globalNorms)) return;
    buckets[index].push(label);
    remember(label);
  };

  const lessonArea = new Map<string, number>();

  module.lessons.forEach((lesson, lessonIndex) => {
    const scored = areas.map((item, index) => ({
      index,
      score: Math.max(
        titleScore(lesson.title, areaCorpus(item)),
        ...lesson.objectives.map((o) => titleScore(o, areaCorpus(item))),
        ...lesson.keyPoints.map((k) => titleScore(k, areaCorpus(item))),
        0
      ),
    }));
    scored.sort((a, b) => b.score - a.score);
    const target =
      scored[0].score >= 0.12 ? scored[0].index : lessonIndex % areas.length;
    lessonArea.set(lesson.id, target);
    claim(target, lesson.title);
  });

  module.learningOutcomes.forEach((outcome, outcomeIndex) => {
    const matched = bestAreaIndex(outcome, areas);
    const score = titleScore(outcome, areaCorpus(areas[matched]));
    const index = score >= 0.08 ? matched : outcomeIndex % areas.length;
    claim(index, outcome);
  });

  for (const lesson of module.lessons) {
    const target = lessonArea.get(lesson.id) ?? 0;
    for (const objective of lesson.objectives) claim(target, objective);
    for (const point of lesson.keyPoints) claim(target, point);
  }

  for (const note of module.depth?.studyNotes ?? []) {
    const index = bestAreaIndex(note.title, areas);
    claim(index, note.title);
    for (const rule of note.keyRules.slice(0, 2)) claim(index, rule);
  }

  return buckets;
}
