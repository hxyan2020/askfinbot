import { FINANCIAL_EXAMS, getDefaultLevelId, getExamById } from "@/lib/exams";
import { ALL_COURSEWARE } from "@/lib/courseware";
import { emojiForExam, emojiForLabel } from "./emojis";
import { expandModuleAreaTopics } from "./expand";
import type { MindmapMeta, MindmapNode, MindmapPayload } from "./types";

function modulesFor(examId: string, levelId: string) {
  return ALL_COURSEWARE.filter(
    (module) => module.examId === examId && module.levelId === levelId
  ).sort((a, b) => a.moduleId.localeCompare(b.moduleId, undefined, { numeric: true }));
}

function uniqueWindows(windows: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const window of windows) {
    const key = window.trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(key);
  }
  return out;
}

export function listMindmapLevels(examId: string): { id: string; name: string }[] {
  const exam = getExamById(examId);
  if (!exam) return [];
  return exam.levels.map((level) => ({ id: level.id, name: level.name }));
}

export function buildMindmap(examId: string, levelId?: string): MindmapPayload | null {
  const exam = getExamById(examId);
  if (!exam) return null;
  const resolvedLevelId = levelId || getDefaultLevelId(examId);
  const level = exam.levels.find((item) => item.id === resolvedLevelId) || exam.levels[0];
  if (!level) return null;

  const modules = modulesFor(examId, level.id);
  // ACCA "all" may have few modules; fall back to every ACCA paper module if empty
  const source =
    modules.length > 0
      ? modules
      : ALL_COURSEWARE.filter((module) => module.examId === examId).sort((a, b) =>
          a.moduleId.localeCompare(b.moduleId, undefined, { numeric: true })
        );

  let topicCount = 0;
  const windows: string[] = [];
  let refreshedAt = "";
  let syllabusVersion = "";
  let relevance: MindmapMeta["relevance"] = "current";
  let relevanceNote = "";
  let officialSourceUrl: string | undefined;

  const moduleNodes: MindmapNode[] = source.map((module) => {
    const currency = module.syllabusCurrency;
    if (currency) {
      windows.push(...currency.upcomingExamWindows);
      if (!refreshedAt || currency.reviewedAt > refreshedAt) refreshedAt = currency.reviewedAt;
      syllabusVersion = syllabusVersion || currency.syllabusVersion;
      relevance = currency.relevance;
      relevanceNote = currency.relevanceNote;
      officialSourceUrl = officialSourceUrl || currency.officialSourceUrl;
    }

    const expandedTopics = expandModuleAreaTopics(module);
    const areaNodes: MindmapNode[] = (module.syllabusAreas || []).map((area, areaIndex) => {
      const topics = expandedTopics[areaIndex] || area.topics;
      const topicNodes: MindmapNode[] = topics.map((topic, topicIndex) => {
        topicCount += 1;
        return {
          id: `${module.moduleId}-area-${areaIndex}-t-${topicIndex}`,
          label: topic,
          kind: "topic" as const,
        };
      });
      return {
        id: `${module.moduleId}-area-${areaIndex}`,
        label: area.title,
        kind: "area" as const,
        emoji: emojiForLabel(area.title, "area"),
        weightHint: area.weightHint,
        children: topicNodes,
      };
    });

    // If a module has no syllabus areas yet, surface learning outcomes / lesson titles
    if (!areaNodes.length) {
      const fallbackTopics = [
        ...module.learningOutcomes.slice(0, 6),
        ...module.lessons.map((lesson) => lesson.title),
      ].slice(0, 10);
      topicCount += fallbackTopics.length;
      areaNodes.push({
        id: `${module.moduleId}-overview`,
        label: "Core coverage",
        kind: "area",
        emoji: emojiForLabel(module.title, "area"),
        children: fallbackTopics.map((label, index) => ({
          id: `${module.moduleId}-fb-${index}`,
          label,
          kind: "topic" as const,
        })),
      });
    }

    return {
      id: module.moduleId,
      label: module.paperCode ? `${module.paperCode} · ${module.title}` : module.title,
      kind: "module" as const,
      emoji: emojiForLabel(module.title, "module"),
      children: areaNodes,
    };
  });

  const root: MindmapNode = {
    id: `${examId}-${level.id}`,
    label: `${exam.name} · ${level.name}`,
    kind: "exam",
    emoji: emojiForExam(examId),
    children: moduleNodes,
  };

  const meta: MindmapMeta = {
    examId,
    examName: exam.name,
    levelId: level.id,
    levelName: level.name,
    levelLabel: exam.levelLabel,
    refreshedAt: refreshedAt || "2026-07-18",
    syllabusVersion: syllabusVersion || `${exam.name} syllabus map`,
    upcomingExamWindows: uniqueWindows(windows),
    relevance,
    relevanceNote:
      relevanceNote ||
      "Mind map derived from AskFinBots courseware syllabus areas, lessons, and learning outcomes.",
    officialSourceUrl,
    moduleCount: moduleNodes.length,
    topicCount,
    testPointCount: 0,
  };

  return { meta, root };
}

export function listMindmapExams() {
  return FINANCIAL_EXAMS.map((exam) => ({
    id: exam.id,
    name: exam.name,
    fullName: exam.fullName,
    logo: exam.logo,
    levelLabel: exam.levelLabel,
    levels: exam.levels.map((level) => ({ id: level.id, name: level.name })),
  }));
}
