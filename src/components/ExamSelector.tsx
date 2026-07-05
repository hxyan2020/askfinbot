"use client";

import { FINANCIAL_EXAMS, type FinancialExam } from "@/lib/exams";

interface ExamSelectorProps {
  selectedExamId: string | null;
  onSelect: (exam: FinancialExam) => void;
}

export function ExamSelector({ selectedExamId, onSelect }: ExamSelectorProps) {
  return (
    <section className="glow-card p-5 sm:p-6">
      <h2 className="font-display mb-1 text-lg font-semibold text-gold glow-text-sm">
        Choose Your Exam
      </h2>
      <p className="mb-5 text-sm text-gold/60">
        Select a financial qualification to begin your study session.
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
              <span className="block text-base font-semibold">{exam.name}</span>
              <span className="mt-0.5 block text-[10px] leading-tight text-gold/50 line-clamp-2">
                {exam.fullName}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
