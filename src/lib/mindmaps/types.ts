export type MindmapNodeKind =
  | "exam"
  | "module"
  | "area"
  | "topic"
  | "test-group"
  | "test-point";

export type MindmapNode = {
  id: string;
  label: string;
  kind: MindmapNodeKind;
  emoji?: string;
  priority?: "critical" | "high" | "medium";
  weightHint?: string;
  children?: MindmapNode[];
};

export type MindmapMeta = {
  examId: string;
  examName: string;
  levelId: string;
  levelName: string;
  levelLabel: string;
  refreshedAt: string;
  syllabusVersion: string;
  upcomingExamWindows: string[];
  relevance: "current" | "current-check-variables" | "verify-before-booking";
  relevanceNote: string;
  officialSourceUrl?: string;
  moduleCount: number;
  topicCount: number;
  testPointCount: number;
};

export type MindmapPayload = {
  meta: MindmapMeta;
  root: MindmapNode;
};
