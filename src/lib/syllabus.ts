import {
  FINANCIAL_EXAMS,
  getDefaultLevelId,
  getExamById,
  getExamLevel,
} from "./exams";
import { getCourseware } from "./courseware";
import type { SyllabusCurrency } from "./courseware/types";

export interface SyllabusModule {
  id: string;
  title: string;
  weight: number;
  hours: number;
  summary: string;
  /** True when detailed courseware is available for this module. */
  hasCourseware: boolean;
  lessonCount: number;
  syllabusCurrency?: SyllabusCurrency;
}

export interface ExamSyllabus {
  examId: string;
  levelId: string;
  levelName: string;
  versionLabel: string;
  overview: string;
  journey: string[];
  modules: SyllabusModule[];
}

const BASE_JOURNEY = [
  "Orient: understand exam structure, weights, and pass strategy",
  "Foundation: build core concepts in high-weight topics first",
  "Application: drills, vignettes, and practice questions",
  "Integration: mixed mocks under timed conditions",
  "Polish: weak-area remediation + ethics/formula refresh",
  "Exam week: light review, sleep, and confidence routine",
];

function modulesFromTopics(
  examId: string,
  levelId: string,
  topics: string[],
  weights: number[]
): SyllabusModule[] {
  return topics.map((title, i) => {
    const id = `${examId}-${levelId}-m${i + 1}`;
    const cw = getCourseware(id);
    const weight = weights[i] ?? 5;
    return {
      id,
      title,
      weight,
      hours: cw?.estimatedStudyHours
        ? Math.max(6, Math.round(cw.estimatedStudyHours))
        : Math.max(6, Math.round(weight * 3.5)),
      summary: cw?.overview
        ? cw.overview
        : `Master ${title} with concept notes, examples, and targeted practice.`,
      hasCourseware: Boolean(cw),
      lessonCount: cw?.lessons.length ?? 0,
      syllabusCurrency: cw?.syllabusCurrency,
    };
  });
}

/** Relative topic weights keyed by examId:levelId — padded/truncated to topic count at runtime */
const WEIGHTS: Record<string, number[]> = {
  "cfa:l1": [9, 8, 7, 9, 7, 8, 8, 6, 6, 7],
  "cfa:l2": [9, 6, 6, 9, 7, 9, 8, 7, 6, 8],
  "cfa:l3": [9, 7, 7, 9, 8, 8, 7, 7, 9, 8, 7],
  "frm:p1": [8, 8, 8, 9, 8, 8, 7, 9, 8, 8, 7, 8, 8, 7, 8, 8],
  "frm:p2": [9, 8, 8, 9, 8, 8, 8, 8, 7, 8, 8, 7, 7, 8, 7, 7, 6, 6],
  "cpa:aud": [8, 9, 9, 8, 8, 8, 7, 8],
  "cpa:far": [9, 9, 8, 8, 8, 8, 7, 7],
  "cpa:reg": [8, 7, 8, 8, 9, 8, 8, 7],
  "cpa:discipline": [8, 8, 8, 8, 8, 8, 7, 7, 8],
  "acca:all": [7, 7, 8, 7, 8, 8, 9, 8, 8, 9, 9, 8, 8, 8, 8, 8],
  "acca:applied-knowledge": [8, 8, 8, 8, 7, 8, 9, 8, 8, 8, 9, 8],
  "acca:applied-skills": [
    7, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  ],
  "acca:strategic-professional": [9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7],
  "caia:l1": [8, 8, 7, 8, 7, 9, 6, 7, 7, 7],
  "caia:l2": [8, 7, 8, 9, 7, 9, 8, 8, 7, 8],
  "cfp:full": [8, 8, 8, 9, 8, 9, 8, 7, 7, 8],
  "sie:full": [8, 8, 9, 8, 9, 8, 8, 8, 8, 8],
  "cima:certificate": [8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8],
  "cima:operational": [8, 8, 9, 8, 8, 8, 8, 9],
  "cima:management": [8, 8, 9, 8, 8, 8, 8, 9],
  "cima:strategic": [9, 8, 8, 8, 8, 8, 8, 9],
  "cmt:l1": [8, 9, 8, 9, 8, 8, 7, 7, 6],
  "cmt:l2": [8, 8, 8, 8, 9, 8, 8, 7],
  "cmt:l3": [9, 9, 8, 8, 7, 8, 9],
  "cfa-esg:full": [8, 7, 9, 8, 8, 8, 9, 8, 7],
};

function weightsFor(examId: string, levelId: string, topicCount: number): number[] {
  const raw = WEIGHTS[`${examId}:${levelId}`] || [];
  if (raw.length >= topicCount) return raw.slice(0, topicCount);
  const out = [...raw];
  while (out.length < topicCount) out.push(6);
  return out;
}

export function getSyllabus(examId: string, levelId?: string): ExamSyllabus | undefined {
  const exam = getExamById(examId);
  if (!exam) return undefined;
  const resolvedLevelId = levelId || getDefaultLevelId(examId);
  const level = getExamLevel(examId, resolvedLevelId) || exam.levels[0];
  if (!level) return undefined;

  const weights = weightsFor(examId, level.id, level.topics.length);
  const modules = modulesFromTopics(examId, level.id, level.topics, weights);
  const currency = modules.find((module) => module.syllabusCurrency)?.syllabusCurrency;

  return {
    examId,
    levelId: level.id,
    levelName: level.name,
    versionLabel: currency
      ? `${currency.syllabusVersion} · refreshed ${currency.reviewedAt}`
      : `${exam.name} ${level.name} · curriculum outline`,
    overview: currency
      ? `${exam.fullName} — ${level.name}. ${currency.relevanceNote}`
      : `${exam.fullName} — ${level.name} preparation roadmap based on common official topic areas. Confirm final weights with the awarding body's current syllabus.`,
    journey: BASE_JOURNEY,
    modules,
  };
}

export const EXAM_SYLLABI: ExamSyllabus[] = FINANCIAL_EXAMS.flatMap((exam) =>
  exam.levels
    .map((level) => getSyllabus(exam.id, level.id))
    .filter((s): s is ExamSyllabus => Boolean(s))
);

export interface StudyPlanInput {
  examId: string;
  levelId?: string;
  hoursPerDay: number;
  daysUntilExam: number;
}

export interface StudyPlanRecommendation {
  totalHoursNeeded: number;
  availableHours: number;
  intensity: "light" | "steady" | "intensive" | "sprint";
  feasible: boolean;
  strategyTitle: string;
  strategySummary: string;
  weeklyFocus: string[];
  orderedModules: {
    moduleId: string;
    title: string;
    weight: number;
    suggestedHours: number;
    priority: number;
  }[];
  tips: string[];
  levelId: string;
  levelName: string;
}

export function buildStudyPlan(input: StudyPlanInput): StudyPlanRecommendation {
  const levelId = input.levelId || getDefaultLevelId(input.examId);
  const syllabus = getSyllabus(input.examId, levelId);
  if (!syllabus) {
    throw new Error("Unknown exam or level.");
  }

  const hoursPerDay = Math.max(0.5, Math.min(12, input.hoursPerDay));
  const daysUntilExam = Math.max(1, Math.min(730, Math.floor(input.daysUntilExam)));
  const availableHours = Math.round(hoursPerDay * daysUntilExam * 10) / 10;
  const totalHoursNeeded = syllabus.modules.reduce((sum, m) => sum + m.hours, 0) || 1;

  const ratio = availableHours / totalHoursNeeded;
  let intensity: StudyPlanRecommendation["intensity"] = "steady";
  if (ratio >= 1.2) intensity = "light";
  else if (ratio >= 0.85) intensity = "steady";
  else if (ratio >= 0.55) intensity = "intensive";
  else intensity = "sprint";

  const ordered = [...syllabus.modules]
    .sort((a, b) => b.weight - a.weight || a.title.localeCompare(b.title))
    .map((m, idx) => {
      const share = m.hours / totalHoursNeeded;
      const suggested = Math.max(2, Math.round(availableHours * share));
      return {
        moduleId: m.id,
        title: m.title,
        weight: m.weight,
        suggestedHours: suggested,
        priority: idx + 1,
      };
    });

  const strategyMap = {
    light: {
      title: "Depth-first mastery",
      summary:
        "You have comfortable runway. Cover every module thoroughly, then bank extra mocks for score stability.",
    },
    steady: {
      title: "Balanced score-maximizer",
      summary:
        "Match curriculum hours to your calendar. Prioritize high-weight topics early, then protect mock-exam weeks.",
    },
    intensive: {
      title: "High-weight first",
      summary:
        "Time is tighter. Front-load the heaviest-scoring modules, compress low-weight reading, and increase daily drills.",
    },
    sprint: {
      title: "Pass-critical sprint",
      summary:
        "Capacity is below ideal hours. Focus only on highest-weight modules + ethics/core formulas, then daily mixed questions.",
    },
  } as const;

  const tips = [
    `Stay scoped to ${syllabus.levelName} — avoid drifting into other stages until this sitting is locked.`,
    "Study highest-weight modules when your energy is best each day.",
    "Keep a fixed weekly mock slot in the final third of your plan.",
    "Track weak subtopics after every practice set and re-queue them within 48 hours.",
    "Protect sleep in the final 7 days — recall drops sharply when exhausted.",
  ];

  if (intensity === "sprint") {
    tips.unshift("Cut optional readings; prioritize tested applications and past-style questions.");
  }

  return {
    totalHoursNeeded,
    availableHours,
    intensity,
    feasible: ratio >= 0.45,
    strategyTitle: strategyMap[intensity].title,
    strategySummary: strategyMap[intensity].summary,
    weeklyFocus: syllabus.journey,
    orderedModules: ordered,
    tips,
    levelId: syllabus.levelId,
    levelName: syllabus.levelName,
  };
}
