import type { CoursewareBundle, ModuleCourseware } from "./types";
import { normalizeTitle } from "./helpers";
import { getSyllabusCurrency } from "./currency";
import { EXPERT_COURSEWARE_DEPTH } from "./depth";
import {
  completeCoursewareDepth,
  deriveCoursewareDepth,
  validateCoursewareDepth,
} from "./depth/helpers";
import { enrichModuleLessons } from "./enrich-lessons";

import { ACCA_COURSEWARE, ACCA_STAGE_COURSEWARE } from "./acca";
import { CFA_COURSEWARE } from "./cfa";
import { FRM_COURSEWARE } from "./frm";
import { CPA_COURSEWARE } from "./cpa";
import { CAIA_COURSEWARE } from "./caia";
import { CFP_COURSEWARE } from "./cfp";
import { SIE_COURSEWARE } from "./sie";
import { CIMA_COURSEWARE } from "./cima";
import { CMT_COURSEWARE } from "./cmt";
import { CFA_ESG_COURSEWARE } from "./cfa-esg";

function fromBundles(bundles: CoursewareBundle[]): ModuleCourseware[] {
  return bundles.flatMap((b) => b.modules);
}

/** All courseware modules flattened, regardless of source export shape. */
const BASE_COURSEWARE: ModuleCourseware[] = [
  ...ACCA_COURSEWARE,
  ...ACCA_STAGE_COURSEWARE,
  ...CFA_COURSEWARE,
  ...FRM_COURSEWARE,
  ...CPA_COURSEWARE,
  ...fromBundles(CAIA_COURSEWARE),
  ...fromBundles(CFP_COURSEWARE),
  ...fromBundles(SIE_COURSEWARE),
  ...fromBundles(CIMA_COURSEWARE),
  ...fromBundles(CMT_COURSEWARE),
  ...fromBundles(CFA_ESG_COURSEWARE),
];

const SOURCE_IDS = new Set(BASE_COURSEWARE.map((module) => module.moduleId));
const orphanDepthIds = Object.keys(EXPERT_COURSEWARE_DEPTH).filter((id) => !SOURCE_IDS.has(id));
if (orphanDepthIds.length > 0) {
  throw new Error(`Courseware depth has unknown module ids: ${orphanDepthIds.join(", ")}`);
}

export const ALL_COURSEWARE: ModuleCourseware[] = BASE_COURSEWARE.map((module) => {
  const depth = completeCoursewareDepth(
    module,
    EXPERT_COURSEWARE_DEPTH[module.moduleId] ?? deriveCoursewareDepth(module)
  );
  const errors = validateCoursewareDepth(module.moduleId, depth);
  if (errors.length > 0) {
    throw new Error(`Invalid courseware depth:\n${errors.join("\n")}`);
  }
  return enrichModuleLessons({
    ...module,
    depth,
    syllabusCurrency: getSyllabusCurrency(module),
  });
});

const BY_ID = new Map<string, ModuleCourseware>();
const BY_EXAM_LEVEL_TITLE = new Map<string, ModuleCourseware>();

for (const m of ALL_COURSEWARE) {
  BY_ID.set(m.moduleId, m);
  BY_EXAM_LEVEL_TITLE.set(
    `${m.examId}:${m.levelId}:${normalizeTitle(m.title)}`,
    m
  );
}

/** Lightweight card for lists (no heavy lesson bodies). */
export interface CoursewareSummary {
  moduleId: string;
  title: string;
  paperCode?: string;
  examFormat: string;
  estimatedStudyHours: number;
  overview: string;
  lessonCount: number;
  learningOutcomeCount: number;
}

export function getCourseware(moduleId: string): ModuleCourseware | undefined {
  return BY_ID.get(moduleId);
}

/** Drop a leading paper/section code like "AA " or "BT " to compare core titles. */
function stripCode(norm: string): string {
  return norm.replace(/^[a-z]{2,4}\s+/, "").trim();
}

function titlesMatch(a: string, b: string): boolean {
  if (!a || !b) return false;
  if (a === b) return true;
  const sa = stripCode(a);
  const sb = stripCode(b);
  if (sa && sb && sa === sb) return true;
  // Contains match (handles "Audit & Assurance" vs "AA — Audit & Assurance (Applied Skills)").
  const longer = sa.length >= sb.length ? sa : sb;
  const shorter = sa.length >= sb.length ? sb : sa;
  return shorter.length >= 5 && longer.includes(shorter);
}

/**
 * Resolve courseware for a portfolio module. Tries exact id first, then a
 * fuzzy match on exam+level+title so older portfolios (with legacy module ids)
 * still surface the right content.
 */
export function resolveCourseware(
  examId: string,
  levelId: string,
  moduleId: string,
  title: string
): ModuleCourseware | undefined {
  const byId = BY_ID.get(moduleId);
  if (byId) return byId;

  const norm = normalizeTitle(title);
  const byTitle = BY_EXAM_LEVEL_TITLE.get(`${examId}:${levelId}:${norm}`);
  if (byTitle) return byTitle;

  // Same exam + level, fuzzy title.
  const sameLevel = ALL_COURSEWARE.filter(
    (m) => m.examId === examId && m.levelId === levelId
  );
  const levelHit = sameLevel.find((m) => titlesMatch(normalizeTitle(m.title), norm));
  if (levelHit) return levelHit;

  // Any level within the same exam, fuzzy title.
  return ALL_COURSEWARE.find(
    (m) => m.examId === examId && titlesMatch(normalizeTitle(m.title), norm)
  );
}

export function hasCourseware(moduleId: string): boolean {
  return BY_ID.has(moduleId);
}

export function toSummary(m: ModuleCourseware): CoursewareSummary {
  return {
    moduleId: m.moduleId,
    title: m.title,
    paperCode: m.paperCode,
    examFormat: m.examFormat,
    estimatedStudyHours: m.estimatedStudyHours,
    overview: m.overview,
    lessonCount: m.lessons.length,
    learningOutcomeCount: m.learningOutcomes.length,
  };
}

export type { ModuleCourseware, CoursewareLesson, SyllabusArea } from "./types";
