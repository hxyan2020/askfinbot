import type {
  CoursewareLesson,
  DetailedStudySection,
  ModuleCourseware,
  WorkedProblem,
} from "./types";
import { matchVisualsForLesson, matchVisualsForText } from "./visuals";

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
  if (left.size === 0 || right.size === 0) return 0;
  let hits = 0;
  for (const word of left) if (right.has(word)) hits += 1;
  return hits / Math.max(left.size, right.size);
}

function formatWorkedProblem(problem: WorkedProblem): string {
  const steps = problem.steps.map((step, index) => `${index + 1}. ${step}`).join(" ");
  return `${problem.scenario} ${steps} Conclusion: ${problem.conclusion}`;
}

function pickStudyNote(
  lesson: CoursewareLesson,
  notes: DetailedStudySection[],
  index: number
): DetailedStudySection | undefined {
  if (!notes.length) return undefined;
  let best = notes[index % notes.length];
  let bestScore = titleScore(lesson.title, best.title);
  for (const note of notes) {
    const score = titleScore(lesson.title, note.title);
    if (score > bestScore) {
      best = note;
      bestScore = score;
    }
  }
  return bestScore >= 0.2 || notes[index] ? best : notes[index % notes.length];
}

function synthesizeBody(module: ModuleCourseware, lesson: CoursewareLesson): string[] {
  const areaTopics = module.syllabusAreas
    .flatMap((area) => area.topics)
    .filter((topic) => titleScore(lesson.title, topic) >= 0.15)
    .slice(0, 4);
  const formulas = module.frameworksAndFormulas.slice(0, 3);
  const traps = module.commonTraps.slice(0, 2);
  const technique = module.examTechnique.slice(0, 2);

  const body: string[] = [
    `${lesson.title} is examinable because candidates must move from definition to application. Start from the command word in the requirement, isolate the facts that matter, then apply the rule or formula that those facts trigger.`,
  ];

  if (lesson.objectives.length) {
    body.push(
      `After this lesson you should be able to: ${lesson.objectives.join(" ")} In the exam, that usually means classifying a vignette, computing a figure, or choosing the action a professional standard requires.`
    );
  }

  if (lesson.keyPoints.length) {
    body.push(
      `Concrete anchors: ${lesson.keyPoints.join(" ")} Treat each point as a decision rule — when the vignette matches the trigger, the conclusion should follow without inventing extra facts.`
    );
  }

  if (areaTopics.length) {
    body.push(`Syllabus coverage tied to this lesson includes: ${areaTopics.join("; ")}.`);
  }

  if (formulas.length) {
    body.push(`Keep these frameworks/formulas ready: ${formulas.join(" · ")}`);
  }

  if (traps.length) {
    body.push(`Common traps to refuse: ${traps.join(" ")}`);
  }

  if (technique.length) {
    body.push(`Exam technique for this topic: ${technique.join(" ")}`);
  }

  return body;
}

function synthesizeWorkedExample(
  module: ModuleCourseware,
  lesson: CoursewareLesson
): string | undefined {
  if (lesson.workedExample) return lesson.workedExample;
  const check = lesson.selfCheck[0];
  const point = lesson.keyPoints[0];
  const formula = module.frameworksAndFormulas[0];
  if (!check && !point) return undefined;
  return [
    `Exam-style vignette for ${lesson.title}:`,
    check ? `Requirement: ${check}` : `Requirement: apply ${lesson.title} to the supplied facts.`,
    point ? `Key rule: ${point}` : "",
    formula ? `Use: ${formula}` : "",
    "State the conclusion in the language of the requirement and refuse distractors that swap neighbouring concepts.",
  ]
    .filter(Boolean)
    .join(" ");
}

function conceptKey(visualId: string): string {
  const markers = [
    "payoff.",
    "parity.",
    "portfolio.",
    "fi.",
    "risk.",
    "greeks.",
    "mgmt.",
    "hf.",
    "fx.",
    "credit.",
    "esg.",
    "tech.",
    "tvm.",
    "macro.",
    "formula.",
    "diagram.",
  ];
  for (const marker of markers) {
    const idx = visualId.indexOf(marker);
    if (idx >= 0) return visualId.slice(idx);
  }
  return visualId;
}

function mergeVisuals(
  existing: CoursewareLesson["visuals"] | undefined,
  auto: CoursewareLesson["visuals"]
): CoursewareLesson["visuals"] {
  const merged = [...(existing ?? [])];
  const seen = new Set(merged.map((v) => conceptKey(v.id)));
  for (const visual of auto ?? []) {
    const key = conceptKey(visual.id);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(visual);
  }
  return merged.length ? merged : undefined;
}

/** Merge expert depth + module metadata into richer lesson bodies for the courseware UI. */
export function enrichModuleLessons(module: ModuleCourseware): ModuleCourseware {
  const notes = module.depth?.studyNotes ?? [];
  const lessons = module.lessons.map((lesson, index) => {
    const note = pickStudyNote(lesson, notes, index);
    const body =
      lesson.body && lesson.body.length >= 2
        ? lesson.body
        : note?.explanation?.length
          ? note.explanation
          : synthesizeBody(module, lesson);

    const keyPoints =
      lesson.keyPoints.length >= 5
        ? lesson.keyPoints
        : Array.from(
            new Set([
              ...lesson.keyPoints,
              ...(note?.keyRules ?? []),
              ...module.frameworksAndFormulas.slice(0, 2),
            ])
          ).slice(0, 8);

    const formulas =
      lesson.formulas?.length
        ? lesson.formulas
        : note?.formulas?.length
          ? note.formulas
          : module.frameworksAndFormulas
              .filter((item) => titleScore(lesson.title, item) >= 0.1)
              .slice(0, 3);

    const workedExample =
      lesson.workedExample ||
      (note?.workedProblem ? formatWorkedProblem(note.workedProblem) : undefined) ||
      synthesizeWorkedExample(module, lesson);

    const selfCheck =
      lesson.selfCheck.length >= 2
        ? lesson.selfCheck
        : Array.from(
            new Set([
              ...lesson.selfCheck,
              ...(note?.keyRules.slice(0, 2).map((rule) => `How would you apply: ${rule}?`) ?? []),
            ])
          ).slice(0, 4);

    const autoVisuals = matchVisualsForLesson(module, {
      ...lesson,
      body,
      formulas,
      keyPoints,
    });
    const visuals = mergeVisuals(lesson.visuals, autoVisuals);

    return {
      ...lesson,
      body,
      keyPoints,
      formulas: formulas.length ? formulas : undefined,
      workedExample,
      selfCheck,
      visuals,
    };
  });

  const studyNotes = notes.map((note) => {
    if (note.visuals?.length) return note;
    const auto = matchVisualsForText(
      note.title,
      [...note.keyRules, ...(note.formulas ?? [])],
      note.id,
      2
    );
    return auto.length ? { ...note, visuals: auto } : note;
  });

  return {
    ...module,
    lessons,
    depth: module.depth
      ? {
          ...module.depth,
          studyNotes,
        }
      : module.depth,
  };
}
