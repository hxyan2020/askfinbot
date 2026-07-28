export interface CoursewareLesson {
  id: string;
  title: string;
  /** Suggested focused study time for this lesson alone */
  durationMinutes: number;
  objectives: string[];
  keyPoints: string[];
  /** Multi-paragraph concrete teaching content shown in the lesson body */
  body?: string[];
  /** Named formulas / frameworks tied to this lesson */
  formulas?: string[];
  /** Short worked example or vignette */
  workedExample?: string;
  /** Questions the learner should be able to answer after the lesson */
  selfCheck: string[];
}

export interface SyllabusArea {
  title: string;
  /** Approximate share of exam emphasis, e.g. "15–25%" */
  weightHint?: string;
  topics: string[];
}

export interface ExamTestPoint {
  id: string;
  title: string;
  priority: "critical" | "high" | "medium";
  /** What the examiner is actually testing—not merely the syllabus label. */
  examinerFocus: string;
  typicalQuestionForms: string[];
  mustKnow: string[];
  scoringActions: string[];
}

export interface ScoringBlueprint {
  scoreTarget: string;
  timeBudget: string;
  answerSequence: string[];
  qualityChecks: string[];
}

export interface WorkedProblem {
  scenario: string;
  steps: string[];
  conclusion: string;
  markingNotes: string[];
}

export interface DetailedStudySection {
  id: string;
  title: string;
  /** IDs from testPoints showing why this content earns marks. */
  testPointIds: string[];
  explanation: string[];
  keyRules: string[];
  formulas?: string[];
  workedProblem?: WorkedProblem;
}

export interface ExamPracticeItem {
  id: string;
  testPointIds: string[];
  style: string;
  question: string;
  answerPlan: string[];
  modelAnswer: string;
  markingGuide: string[];
}

export interface CoursewareDepth {
  testPoints: ExamTestPoint[];
  scoringBlueprint: ScoringBlueprint;
  studyNotes: DetailedStudySection[];
  examPractice: ExamPracticeItem[];
}

export interface SyllabusCurrency {
  /** Date AskFinBots last checked the awarding body's published syllabus information. */
  reviewedAt: string;
  syllabusVersion: string;
  upcomingExamWindows: string[];
  relevance: "current" | "current-check-variables" | "verify-before-booking";
  relevanceNote: string;
  officialSourceUrl: string;
}

export interface ModuleCourseware {
  /** Matches SyllabusModule.id when available */
  moduleId: string;
  examId: string;
  levelId: string;
  title: string;
  paperCode?: string;
  examFormat: string;
  /** Typical candidate study hours for this paper/topic alone */
  estimatedStudyHours: number;
  overview: string;
  whyItMatters: string;
  learningOutcomes: string[];
  syllabusAreas: SyllabusArea[];
  lessons: CoursewareLesson[];
  frameworksAndFormulas: string[];
  commonTraps: string[];
  examTechnique: string[];
  practicePlan: string[];
  furtherReading: string[];
  /** Exam-calibrated deep content merged by module id. */
  depth?: CoursewareDepth;
  syllabusCurrency?: SyllabusCurrency;
}

export interface CoursewareBundle {
  examId: string;
  levelId: string;
  modules: ModuleCourseware[];
}
