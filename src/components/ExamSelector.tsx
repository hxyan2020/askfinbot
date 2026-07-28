"use client";

import { FINANCIAL_EXAMS, type FinancialExam } from "@/lib/exams";
import { ExamLogo } from "./ExamLogo";

interface ExamSelectorProps {
  selectedExamId: string | null;
  onSelect: (exam: FinancialExam) => void;
}

export function ExamSelector({ selectedExamId, onSelect }: ExamSelectorProps) {
  return (
    <section className="surface-card p-5 sm:p-6">
      <h2 className="font-display text-lg font-semibold text-navy">1. Choose your exam</h2>
      <p className="mb-5 mt-1 text-sm text-muted">
        Pick one qualification. Your chat stays focused on that syllabus.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {FINANCIAL_EXAMS.map((exam) => {
          const isSelected = selectedExamId === exam.id;
          return (
            <button
              key={exam.id}
              type="button"
              onClick={() => onSelect(exam)}
              className={`exam-chip ${isSelected ? "exam-chip-selected" : ""}`}
              title={exam.fullName}
            >
              <ExamLogo src={exam.logo} alt={`${exam.name} logo`} size={40} />
              <span className="mt-2 block text-base font-semibold text-navy">{exam.name}</span>
              <span className="mt-0.5 block text-[10px] leading-tight text-muted line-clamp-2">
                {exam.fullName}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
