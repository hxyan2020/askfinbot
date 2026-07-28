import { promises as fs } from "fs";
import path from "path";
import { buildStudyPlan, type StudyPlanRecommendation } from "./syllabus";

export interface PortfolioModuleProgress {
  moduleId: string;
  title: string;
  weight: number;
  suggestedHours: number;
  completedHours: number;
  done: boolean;
}

export interface StudyPortfolio {
  id: string;
  userId: string;
  examId: string;
  levelId: string;
  levelName: string;
  hoursPerDay: number;
  daysUntilExam: number;
  examDate: string;
  acknowledgedAt: string;
  createdAt: string;
  updatedAt: string;
  recommendation: StudyPlanRecommendation;
  modules: PortfolioModuleProgress[];
  percentComplete: number;
}

const ROOT = path.join(process.cwd(), "data", "portfolios");

async function ensureDir() {
  await fs.mkdir(ROOT, { recursive: true });
}

function fileFor(userId: string) {
  return path.join(ROOT, `${userId}.json`);
}

export async function getPortfolio(userId: string): Promise<StudyPortfolio | null> {
  try {
    const raw = await fs.readFile(fileFor(userId), "utf8");
    return JSON.parse(raw) as StudyPortfolio;
  } catch {
    return null;
  }
}

export async function createPortfolio(input: {
  userId: string;
  examId: string;
  levelId?: string;
  hoursPerDay: number;
  daysUntilExam: number;
  examDate: string;
}): Promise<StudyPortfolio> {
  await ensureDir();
  const recommendation = buildStudyPlan({
    examId: input.examId,
    levelId: input.levelId,
    hoursPerDay: input.hoursPerDay,
    daysUntilExam: input.daysUntilExam,
  });

  const now = new Date().toISOString();
  const portfolio: StudyPortfolio = {
    id: crypto.randomUUID(),
    userId: input.userId,
    examId: input.examId,
    levelId: recommendation.levelId,
    levelName: recommendation.levelName,
    hoursPerDay: input.hoursPerDay,
    daysUntilExam: input.daysUntilExam,
    examDate: input.examDate,
    acknowledgedAt: now,
    createdAt: now,
    updatedAt: now,
    recommendation,
    modules: recommendation.orderedModules.map((m) => ({
      moduleId: m.moduleId,
      title: m.title,
      weight: m.weight,
      suggestedHours: m.suggestedHours,
      completedHours: 0,
      done: false,
    })),
    percentComplete: 0,
  };

  await fs.writeFile(fileFor(input.userId), JSON.stringify(portfolio, null, 2), "utf8");
  return portfolio;
}

export async function updateModuleProgress(
  userId: string,
  moduleId: string,
  patch: { completedHours?: number; done?: boolean }
): Promise<StudyPortfolio | null> {
  const portfolio = await getPortfolio(userId);
  if (!portfolio) return null;

  portfolio.modules = portfolio.modules.map((m) => {
    if (m.moduleId !== moduleId) return m;
    const completedHours =
      typeof patch.completedHours === "number"
        ? Math.max(0, patch.completedHours)
        : m.completedHours;
    const done = typeof patch.done === "boolean" ? patch.done : completedHours >= m.suggestedHours;
    return { ...m, completedHours, done };
  });

  const total = portfolio.modules.reduce((s, m) => s + m.suggestedHours, 0) || 1;
  const doneHours = portfolio.modules.reduce(
    (s, m) => s + Math.min(m.completedHours, m.suggestedHours),
    0
  );
  portfolio.percentComplete = Math.round((doneHours / total) * 100);
  portfolio.updatedAt = new Date().toISOString();

  await fs.writeFile(fileFor(userId), JSON.stringify(portfolio, null, 2), "utf8");
  return portfolio;
}

export async function deletePortfolio(userId: string): Promise<boolean> {
  try {
    await fs.unlink(fileFor(userId));
    return true;
  } catch {
    return false;
  }
}
