import type { ModuleCourseware, SyllabusCurrency } from "./types";

const REVIEWED_AT = "2026-07-18";

function currency(
  syllabusVersion: string,
  upcomingExamWindows: string[],
  relevance: SyllabusCurrency["relevance"],
  relevanceNote: string,
  officialSourceUrl: string
): SyllabusCurrency {
  return {
    reviewedAt: REVIEWED_AT,
    syllabusVersion,
    upcomingExamWindows,
    relevance,
    relevanceNote,
    officialSourceUrl,
  };
}

const ACCA_SUPPORT = "https://www.accaglobal.com/gb/en/student/exam-support-resources";

/** Prefer paper-level syllabus pages that show content (not marketing gates). */
function accaOfficialSyllabusUrl(paperCode?: string): string {
  const code = (paperCode ?? "").toUpperCase().replace(/[^A-Z]/g, "");
  const byPaper: Record<string, string> = {
    BT: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f1/syllabus-study-guide.html`,
    MA: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f2/syllabus-study-guide.html`,
    FA: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f3/syllabus-study-guide.html`,
    LW: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f4.html`,
    PM: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f5/syllabus-study-guide.html`,
    TX: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f6/syllabus-study-guide.html`,
    FR: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f7/syllabus-study-guide.html`,
    AA: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f8/syllabus-study-guide.html`,
    FM: `${ACCA_SUPPORT}/fundamentals-exams-study-resources/f9/syllabus-study-guide.html`,
    SBL: `${ACCA_SUPPORT}/professional-exams-study-resources/strategic-business-leader/syllabus-study-guide.html`,
    SBR: `${ACCA_SUPPORT}/professional-exams-study-resources/strategic-business-reporting.html`,
    AFM: `${ACCA_SUPPORT}/professional-exams-study-resources/p4/syllabus-study-guide.html`,
    APM: `${ACCA_SUPPORT}/professional-exams-study-resources/p5/syllabus-study-guide.html`,
    ATX: `${ACCA_SUPPORT}/professional-exams-study-resources/p6/syllabus-study-guide.html`,
    AAA: `${ACCA_SUPPORT}/professional-exams-study-resources/p7/syllabus-study-guide.html`,
  };
  return byPaper[code] ?? `${ACCA_SUPPORT}.html`;
}

/** Awarding-body currency metadata shown on every courseware module. */
export function getSyllabusCurrency(module: ModuleCourseware): SyllabusCurrency {
  switch (module.examId) {
    case "acca":
      return currency(
        "ACCA 2026/27 syllabus and study guides",
        ["September 2026", "December 2026", "March 2027", "June 2027"],
        "current-check-variables",
        "Relevant from September 2026 to June 2027. On-demand CBE papers may use a transition date; tax, law and advanced tax candidates must also confirm their variant and the official examinable-documents list.",
        accaOfficialSyllabusUrl(module.paperCode)
      );
    case "cfa": {
      const windows =
        module.levelId === "l3"
          ? ["August 2026"]
          : module.levelId === "l2"
            ? ["August 2026", "November 2026"]
            : ["August 2026", "November 2026"];
      return currency(
        "CFA Program 2026 curriculum",
        windows,
        "current",
        "Relevant to the remaining 2026 window(s) offered for this level. Candidates should use the curriculum assigned in the CFA Institute Learning Ecosystem for their registered sitting.",
        "https://www.cfainstitute.org/programs/cfa-program/curriculum"
      );
    }
    case "frm":
      return currency(
        "2026 FRM Learning Objectives and Study Guide (published 1 Dec 2025)",
        module.levelId === "p2"
          ? ["August 7–8, 2026", "November 21–25, 2026"]
          : ["August 7–8, 2026", "November 14–20, 2026"],
        "current",
        "Relevant to the 2026 FRM curriculum. GARP revises the curriculum annually, so this label must be refreshed for 2027 sittings. GARP gates the LO PDF behind a form — use the syllabus areas below for the examinable topic map, then open GARP study materials for the official documents.",
        "https://www.garp.org/frm/study-materials"
      );
    case "cpa": {
      const discipline = /BAR|ISC|TCP/i.test(`${module.paperCode ?? ""} ${module.title}`);
      return currency(
        "Uniform CPA Examination Blueprints effective 1 January 2026",
        discipline
          ? ["July 1–31, 2026", "October 1–31, 2026"]
          : ["Continuous Core testing during 2026"],
        "current-check-variables",
        discipline
          ? "Relevant to the 2026 Discipline windows. Confirm newly testable tax, accounting and auditing pronouncements under the AICPA policy before sitting."
          : "Relevant to 2026 Core testing. Confirm newly testable tax, accounting and auditing pronouncements under the AICPA policy before sitting.",
        "https://assets.ctfassets.net/rb9cdnjh59cm/71s84dkfo3KEsoLlz4vv6G/f4314469ec5368b5b4dd0d0184f00a71/CPA_Exam_Blueprints_2026.pdf"
      );
    }
    case "caia":
      return currency(
        "CAIA 2026 curriculum",
        module.levelId === "l2"
          ? ["September 14–25, 2026"]
          : ["August 31–September 11, 2026"],
        "current",
        "Relevant only to the 2026 CAIA exam cycle. CAIA states that curriculum editions are valid for their calendar year.",
        "https://caia.org/2026-caia-exam-curriculum"
      );
    case "cfp":
      return currency(
        "CFP Board Principal Knowledge Domains based on the 2021 Practice Analysis",
        ["October 29–November 5, 2026", "March 16–23, 2027"],
        "current-check-variables",
        "Relevant to the upcoming CFP Board windows. Tax limits, contribution limits and legislation are date-sensitive and must be checked against the candidate materials for the booked window.",
        "https://www.cfp.net/-/media/files/cfp-board/cfp-certification/2021-practice-analysis/2021-principal-knowledge-topics.pdf"
      );
    case "sie":
      return currency(
        "FINRA SIE Content Outline published October 2025",
        ["Continuous scheduling in 2026"],
        "current-check-variables",
        "Relevant to current SIE testing. Rule-based figures and filing deadlines can change, so verify them against the latest FINRA outline and rulebook.",
        "https://www.finra.org/sites/default/files/SIE_Content_Outline.pdf"
      );
    case "cima":
      return currency(
        "2026/27 CGMA Professional Qualification syllabus and blueprints",
        ["August 2026 case study", "November 2026 case study", "On-demand objective tests"],
        "current",
        "Relevant to objective tests in 2026 and Case Study examinations from May 2026, including the upgraded blueprint. Pre-May 2026 case materials are not interchangeable.",
        "https://www.aicpa-cima.com/resources/download/cgma-professional-qualification-syllabus"
      );
    case "cmt":
      return currency(
        "2026 CMT Official Curriculum and Program Guide (current 5 March 2026)",
        module.levelId === "l3"
          ? ["December 3, 2026"]
          : ["December 1–16, 2026"],
        "current",
        "Relevant to the December 2026 CMT examination. The Association states that exams are based solely on the most current Official Curriculum.",
        "https://cmtassociation.org/wp-content/uploads/2026/03/2026-CMT-Program-Guide%5Fv2026.3.5.pdf"
      );
    case "cfa-esg":
      return currency(
        "2026 Sustainable Investing Certificate syllabus",
        ["Self-scheduled within six months of registration"],
        "verify-before-booking",
        "Relevance depends on registration date: CFA Institute examines the syllabus version assigned when the candidate registered, and rare mid-year updates are possible.",
        "https://www.cfainstitute.org/programs/sustainable-investing-certificate/curriculum"
      );
    default:
      return currency(
        "Version not yet confirmed",
        ["Check the awarding body's current calendar"],
        "verify-before-booking",
        "Confirm the current syllabus and booked exam window with the awarding body before relying on this courseware.",
        "#"
      );
  }
}
