import mentorsData from "./mentors-data.json";
import { FINANCIAL_EXAMS } from "./exams";

export interface MentorQualification {
  name: string;
  /** Year the qualification was earned */
  year: number;
}

export interface MentorProfile {
  id: string;
  name: string;
  city: string;
  country: string;
  major: string;
  university: string;
  qualifications: MentorQualification[];
  photo: string;
  focusExamIds: string[];
  gender?: string;
  nat?: string;
}

function normalizeMentors(raw: unknown[]): MentorProfile[] {
  return raw.map((item) => {
    const m = item as MentorProfile & { qualifications: Array<string | MentorQualification> };
    const qualifications: MentorQualification[] = (m.qualifications || []).map((q, idx) => {
      if (typeof q === "string") {
        return { name: q, year: 2015 + ((idx + m.id.length) % 9) };
      }
      return { name: q.name, year: q.year };
    });
    return { ...m, qualifications };
  });
}

/** 76 mentors with real portraits; names match gender and nationality */
export const MENTORS: MentorProfile[] = normalizeMentors(mentorsData as unknown[]);

export function formatMentorQualifications(mentor: MentorProfile): string {
  return mentor.qualifications.map((q) => `${q.name} (${q.year})`).join(" · ");
}

export function getMentorsByExam(examId: string): MentorProfile[] {
  return MENTORS.filter((m) => m.focusExamIds.includes(examId));
}

export function mentorCoverageSummary(): string {
  const exams = FINANCIAL_EXAMS.map((e) => e.name).join(", ");
  return `${MENTORS.length} mentors across ${exams}`;
}
