"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type {
  CoursewareDepth,
  CoursewareVisual,
  SyllabusCurrency,
} from "@/lib/courseware/types";
import { SelectionFlashcardToolbar } from "./SelectionFlashcardToolbar";
import { CoursewareAskBotDock } from "./CoursewareAskBotDock";
import { CoursewareVisuals } from "./CoursewareVisuals";

export interface CoursewareLessonView {
  id: string;
  title: string;
  durationMinutes: number;
  objectives: string[];
  keyPoints: string[];
  body?: string[];
  formulas?: string[];
  workedExample?: string;
  selfCheck: string[];
  visuals?: CoursewareVisual[];
}

export interface CoursewareView {
  moduleId: string;
  examId: string;
  levelId: string;
  title: string;
  paperCode?: string;
  examFormat: string;
  estimatedStudyHours: number;
  overview: string;
  whyItMatters: string;
  learningOutcomes: string[];
  syllabusAreas: { title: string; weightHint?: string; topics: string[] }[];
  lessons: CoursewareLessonView[];
  frameworksAndFormulas: string[];
  commonTraps: string[];
  examTechnique: string[];
  practicePlan: string[];
  furtherReading: string[];
  depth?: CoursewareDepth;
  syllabusCurrency?: SyllabusCurrency;
}

type FoldId =
  | "syllabus"
  | "lessons"
  | "exam-focus"
  | "study-notes"
  | "practice"
  | "toolkit"
  | "brief";

function Fold({
  id,
  title,
  subtitle,
  badge,
  index,
  open,
  onToggle,
  children,
}: {
  id: FoldId;
  title: string;
  subtitle?: string;
  badge?: string | number;
  index?: number;
  open: boolean;
  onToggle: (id: FoldId) => void;
  children: ReactNode;
}) {
  const panelId = useId();
  return (
    <section className={`cw-fold ${open ? "open" : ""}`}>
      <button
        type="button"
        className="cw-fold-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onToggle(id)}
      >
        <span className="cw-fold-chevron" aria-hidden="true">
          {open ? "▾" : "▸"}
        </span>
        {index !== undefined && (
          <span className="cw-fold-index" aria-hidden="true">
            {index}
          </span>
        )}
        <span className="cw-fold-copy">
          <span className="cw-fold-title">{title}</span>
          {subtitle && <span className="cw-fold-sub">{subtitle}</span>}
        </span>
        {badge !== undefined && <span className="cw-fold-badge">{badge}</span>}
      </button>
      {open && (
        <div id={panelId} className="cw-fold-body">
          {children}
        </div>
      )}
    </section>
  );
}

function InnerFold({
  title,
  meta,
  index,
  open,
  onToggle,
  children,
}: {
  title: string;
  meta?: string;
  index?: number;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className={`cw-lesson ${open ? "open" : ""}`}>
      <button type="button" className="cw-lesson-head" onClick={onToggle}>
        <span className="cw-fold-chevron cw-fold-chevron-sm" aria-hidden="true">
          {open ? "▾" : "▸"}
        </span>
        {index !== undefined && (
          <span className="cw-item-index" aria-hidden="true">
            {index}
          </span>
        )}
        <span className="cw-lesson-title">{title}</span>
        {meta && <span className="cw-lesson-time">{meta}</span>}
      </button>
      {open && <div className="cw-lesson-body">{children}</div>}
    </div>
  );
}

export function CoursewareModal({
  moduleId,
  examId,
  levelId,
  title,
  onClose,
  onAskTutor: _onAskTutor,
}: {
  moduleId: string;
  examId: string;
  levelId: string;
  title: string;
  onClose: () => void;
  onAskTutor?: (topic: string) => void;
}) {
  const [data, setData] = useState<CoursewareView | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFolds, setOpenFolds] = useState<Set<FoldId>>(
    () => new Set<FoldId>(["syllabus", "lessons"])
  );
  const [openLesson, setOpenLesson] = useState<string | null>(null);
  const [openStudyNote, setOpenStudyNote] = useState<string | null>(null);
  const [openTestPoint, setOpenTestPoint] = useState<string | null>(null);
  const [askBotQuestion, setAskBotQuestion] = useState<string | null>(null);
  const syllabusRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  function toggleFold(id: FoldId) {
    setOpenFolds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function showOfficialSyllabus() {
    setOpenFolds((prev) => new Set(prev).add("syllabus"));
    requestAnimationFrame(() => {
      syllabusRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function openAskBot(topic: string) {
    setAskBotQuestion(topic);
  }

  useEffect(() => {
    let active = true;
    const params = new URLSearchParams({ moduleId, examId, levelId, title });
    fetch(`/api/courseware?${params.toString()}`)
      .then((r) => r.json().then((j) => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!active) return;
        if (!ok) throw new Error(j.error || "Courseware unavailable.");
        setData(j.courseware);
        setOpenLesson(j.courseware.lessons?.[0]?.id ?? null);
        setOpenStudyNote(j.courseware.depth?.studyNotes?.[0]?.id ?? null);
        setOpenTestPoint(j.courseware.depth?.testPoints?.[0]?.id ?? null);
      })
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [moduleId, examId, levelId, title]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (askBotQuestion !== null) {
        setAskBotQuestion(null);
        return;
      }
      onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, askBotQuestion]);

  const isOpen = (id: FoldId) => openFolds.has(id);

  return (
    <div className="cw-overlay" onClick={onClose}>
      <div
        className="cw-panel"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="cw-header">
          <div>
            {data?.paperCode && <span className="cw-code">{data.paperCode}</span>}
            <h2 className="cw-title">{data?.title || title}</h2>
            {data && (
              <p className="cw-meta">
                {data.examFormat} · ~{data.estimatedStudyHours}h · {data.lessons.length} lessons
              </p>
            )}
          </div>
          <button type="button" className="cw-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <div className="cw-body relative" ref={bodyRef}>
          <SelectionFlashcardToolbar
            examId={examId}
            containerRef={bodyRef}
            onAskBot={openAskBot}
          />
          <p className="cw-select-tip">
            Tip: select any paragraph, then choose <strong>Add to flashcard</strong> or{" "}
            <strong>Ask bot</strong>. Expand a section below to study.
          </p>
          {loading && <p className="cw-loading">Loading courseware…</p>}
          {error && <p className="cw-error">{error}</p>}

          {data && (
            <div className="cw-folds">
              {data.syllabusCurrency && (
                <aside className={`cw-currency cw-currency-${data.syllabusCurrency.relevance}`}>
                  <div className="cw-currency-head">
                    <div>
                      <span className="cw-currency-kicker">Syllabus currency</span>
                      <strong>{data.syllabusCurrency.syllabusVersion}</strong>
                    </div>
                    <span className="cw-currency-status">
                      {data.syllabusCurrency.relevance === "current"
                        ? "Current for upcoming window"
                        : data.syllabusCurrency.relevance === "current-check-variables"
                          ? "Current · check variable rules"
                          : "Verify against registration"}
                    </span>
                  </div>
                  <p>
                    <b>Refreshed:</b> {data.syllabusCurrency.reviewedAt} ·{" "}
                    <b>Upcoming:</b> {data.syllabusCurrency.upcomingExamWindows.join("; ")}
                  </p>
                  <p>{data.syllabusCurrency.relevanceNote}</p>
                  <div className="cw-currency-actions">
                    <button type="button" className="cw-currency-link" onClick={showOfficialSyllabus}>
                      Check official syllabus
                    </button>
                    {data.syllabusCurrency.officialSourceUrl &&
                      data.syllabusCurrency.officialSourceUrl !== "#" && (
                        <a
                          href={data.syllabusCurrency.officialSourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Awarding-body source ↗
                        </a>
                      )}
                  </div>
                </aside>
              )}

              <Fold
                id="syllabus"
                index={1}
                title="Syllabus map"
                subtitle="Official topic areas and weightings for this module"
                badge={data.syllabusAreas.length}
                open={isOpen("syllabus")}
                onToggle={toggleFold}
              >
                <div ref={syllabusRef} id="cw-official-syllabus">
                  <p className="cw-p cw-test-intro">
                    Examinable topic map aligned to the awarding-body syllabus version above.
                    Use it as your checklist; open the awarding-body source for the publisher
                    document when needed.
                  </p>
                  <div className="cw-areas">
                    {data.syllabusAreas.map((a) => (
                      <div key={a.title} className="cw-area">
                        <div className="cw-area-head">
                          <strong>{a.title}</strong>
                          {a.weightHint && <span className="cw-badge">{a.weightHint}</span>}
                        </div>
                        <ul className="cw-ul">
                          {a.topics.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Fold>

              <Fold
                id="lessons"
                index={2}
                title="Lessons"
                subtitle="Concrete study notes, key points, formulas and self-checks"
                badge={data.lessons.length}
                open={isOpen("lessons")}
                onToggle={toggleFold}
              >
                <div className="cw-lessons">
                  {data.lessons.map((ls, i) => (
                    <InnerFold
                      key={ls.id}
                      index={i + 1}
                      title={ls.title}
                      meta={`${ls.durationMinutes}m`}
                      open={openLesson === ls.id}
                      onToggle={() => setOpenLesson(openLesson === ls.id ? null : ls.id)}
                    >
                      {ls.body && ls.body.length > 0 && (
                        <>
                          <p className="cw-label">Study notes</p>
                          {ls.body.map((paragraph) => (
                            <p key={paragraph.slice(0, 64)} className="cw-p">
                              {paragraph}
                            </p>
                          ))}
                        </>
                      )}
                      <CoursewareVisuals visuals={ls.visuals} placement="after-body" />
                      <p className="cw-label">Objectives</p>
                      <ul className="cw-ul">
                        {ls.objectives.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                      <p className="cw-label">Key points</p>
                      <ul className="cw-ul">
                        {ls.keyPoints.map((k) => (
                          <li key={k}>{k}</li>
                        ))}
                      </ul>
                      <CoursewareVisuals visuals={ls.visuals} placement="after-key-points" />
                      {ls.formulas && ls.formulas.length > 0 && (
                        <>
                          <p className="cw-label">Formulas & frameworks</p>
                          <ul className="cw-ul">
                            {ls.formulas.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      <CoursewareVisuals visuals={ls.visuals} placement="after-formulas" />
                      {ls.workedExample && (
                        <>
                          <p className="cw-label">Worked example</p>
                          <p className="cw-example">{ls.workedExample}</p>
                        </>
                      )}
                      <CoursewareVisuals visuals={ls.visuals} placement="before-self-check" />
                      <p className="cw-label">Self-check</p>
                      <ul className="cw-ul cw-check">
                        {ls.selfCheck.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className="btn-secondary cw-ask"
                        onClick={() =>
                          openAskBot(
                            `${data.title}: ${ls.title}\n\nExplain this lesson for the exam with a worked vignette and common traps.`
                          )
                        }
                      >
                        Ask AskFinBots about this lesson
                      </button>
                    </InnerFold>
                  ))}
                </div>
              </Fold>

              {data.depth && (
                <Fold
                  id="exam-focus"
                  index={3}
                  title="What the exam tests"
                  subtitle="Critical test points and the scoring blueprint"
                  badge={data.depth.testPoints.length}
                  open={isOpen("exam-focus")}
                  onToggle={toggleFold}
                >
                  <p className="cw-p cw-test-intro">
                    Start here for marks: each point is what the examiner is actually testing —
                    not just the syllabus label.
                  </p>
                  <div className="cw-lessons">
                    {data.depth.testPoints.map((point, index) => (
                      <InnerFold
                        key={point.id}
                        index={index + 1}
                        title={point.title}
                        meta={`${point.priority} priority`}
                        open={openTestPoint === point.id}
                        onToggle={() =>
                          setOpenTestPoint(openTestPoint === point.id ? null : point.id)
                        }
                      >
                        <p className="cw-p">{point.examinerFocus}</p>
                        <p className="cw-label">How it is tested</p>
                        <ul className="cw-ul">
                          {point.typicalQuestionForms.map((form) => (
                            <li key={form}>{form}</li>
                          ))}
                        </ul>
                        <p className="cw-label">Must know</p>
                        <ul className="cw-ul">
                          {point.mustKnow.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <p className="cw-label">Actions that earn marks</p>
                        <ul className="cw-ul cw-score-actions">
                          {point.scoringActions.map((action) => (
                            <li key={action}>{action}</li>
                          ))}
                        </ul>
                      </InnerFold>
                    ))}
                  </div>

                  <div className="cw-fold-divider">
                    <p className="cw-label">Scoring blueprint</p>
                    <div className="cw-blueprint">
                      <div>
                        <span>Target</span>
                        <strong>{data.depth.scoringBlueprint.scoreTarget}</strong>
                      </div>
                      <div>
                        <span>Time budget</span>
                        <strong>{data.depth.scoringBlueprint.timeBudget}</strong>
                      </div>
                    </div>
                    <p className="cw-label">Answer sequence</p>
                    <ol className="cw-ol">
                      {data.depth.scoringBlueprint.answerSequence.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                    <p className="cw-label">Final quality checks</p>
                    <ul className="cw-ul cw-check">
                      {data.depth.scoringBlueprint.qualityChecks.map((check) => (
                        <li key={check}>{check}</li>
                      ))}
                    </ul>
                  </div>
                </Fold>
              )}

              {data.depth && (
                <Fold
                  id="study-notes"
                  index={4}
                  title="Deep study notes"
                  subtitle="Exam-calibrated explanations, rules and worked problems"
                  badge={data.depth.studyNotes.length}
                  open={isOpen("study-notes")}
                  onToggle={toggleFold}
                >
                  <div className="cw-lessons">
                    {data.depth.studyNotes.map((note, index) => (
                      <InnerFold
                        key={note.id}
                        index={index + 1}
                        title={note.title}
                        meta={note.testPointIds.join(" · ")}
                        open={openStudyNote === note.id}
                        onToggle={() =>
                          setOpenStudyNote(openStudyNote === note.id ? null : note.id)
                        }
                      >
                        {note.explanation.map((paragraph) => (
                          <p key={paragraph.slice(0, 64)} className="cw-p">
                            {paragraph}
                          </p>
                        ))}
                        <CoursewareVisuals visuals={note.visuals} placement="after-body" />
                        <p className="cw-label">Rules that score</p>
                        <ul className="cw-ul">
                          {note.keyRules.map((rule) => (
                            <li key={rule}>{rule}</li>
                          ))}
                        </ul>
                        {note.formulas && note.formulas.length > 0 && (
                          <>
                            <p className="cw-label">Formulas</p>
                            <div className="cw-formulas">
                              {note.formulas.map((formula) => (
                                <code key={formula}>{formula}</code>
                              ))}
                            </div>
                          </>
                        )}
                        <CoursewareVisuals visuals={note.visuals} placement="after-formulas" />
                        {note.workedProblem && (
                          <div className="cw-worked">
                            <p className="cw-label">Worked exam problem</p>
                            <p className="cw-p">{note.workedProblem.scenario}</p>
                            <ol className="cw-ol">
                              {note.workedProblem.steps.map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ol>
                            <p className="cw-worked-answer">{note.workedProblem.conclusion}</p>
                            <p className="cw-label">Where the marks come from</p>
                            <ul className="cw-ul cw-score-actions">
                              {note.workedProblem.markingNotes.map((mark) => (
                                <li key={mark}>{mark}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </InnerFold>
                    ))}
                  </div>
                </Fold>
              )}

              {data.depth && (
                <Fold
                  id="practice"
                  index={5}
                  title="Exam practice"
                  subtitle="Full questions with answer plans, model answers and marking"
                  badge={data.depth.examPractice.length}
                  open={isOpen("practice")}
                  onToggle={toggleFold}
                >
                  <div className="cw-practice-set">
                    {data.depth.examPractice.map((item, index) => (
                      <details key={item.id} className="cw-practice">
                        <summary>
                          <span>Question {index + 1}</span>
                          <strong>{item.style}</strong>
                        </summary>
                        <div className="cw-practice-body">
                          <p className="cw-p">{item.question}</p>
                          <p className="cw-label">Answer plan</p>
                          <ol className="cw-ol">
                            {item.answerPlan.map((step) => (
                              <li key={step}>{step}</li>
                            ))}
                          </ol>
                          <p className="cw-label">Model answer</p>
                          <p className="cw-example">{item.modelAnswer}</p>
                          <p className="cw-label">Marking guide</p>
                          <ul className="cw-ul cw-score-actions">
                            {item.markingGuide.map((mark) => (
                              <li key={mark}>{mark}</li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    ))}
                  </div>
                </Fold>
              )}

              <Fold
                id="toolkit"
                index={6}
                title="Exam toolkit"
                subtitle="Formulas, traps, technique and a practice plan"
                open={isOpen("toolkit")}
                onToggle={toggleFold}
              >
                <div className="cw-grid">
                  <div>
                    <p className="cw-label">Frameworks & formulas</p>
                    <ul className="cw-ul">
                      {data.frameworksAndFormulas.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="cw-label">Common traps</p>
                    <ul className="cw-ul">
                      {data.commonTraps.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="cw-label">Exam technique</p>
                    <ul className="cw-ul">
                      {data.examTechnique.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="cw-label">Practice plan</p>
                    <ol className="cw-ol">
                      {data.practicePlan.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Fold>

              <Fold
                id="brief"
                index={7}
                title="Module brief & further reading"
                subtitle="Overview, learning outcomes and references"
                open={isOpen("brief")}
                onToggle={toggleFold}
              >
                <p className="cw-label">Overview</p>
                <p className="cw-p">{data.overview}</p>
                <p className="cw-p cw-muted">{data.whyItMatters}</p>
                <p className="cw-label">Learning outcomes</p>
                <ul className="cw-ul">
                  {data.learningOutcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <p className="cw-label">Further reading</p>
                <ul className="cw-ul">
                  {data.furtherReading.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </Fold>
            </div>
          )}
        </div>
      </div>
      {askBotQuestion !== null && (
        <div onClick={(e) => e.stopPropagation()}>
          <CoursewareAskBotDock
            key={askBotQuestion.slice(0, 80)}
            examId={examId}
            initialQuestion={askBotQuestion}
            onClose={() => setAskBotQuestion(null)}
          />
        </div>
      )}
    </div>
  );
}
