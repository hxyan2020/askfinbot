import type { CoursewareDepth, ModuleCourseware } from "../types";

export function examDepth(input: CoursewareDepth): CoursewareDepth {
  return input;
}

export function validateCoursewareDepth(moduleId: string, value: CoursewareDepth): string[] {
  const errors: string[] = [];
  if (value.testPoints.length < 4) errors.push(`${moduleId}: fewer than 4 test points`);
  if (value.studyNotes.length < 4) errors.push(`${moduleId}: fewer than 4 detailed study sections`);
  if (value.examPractice.length < 2) errors.push(`${moduleId}: fewer than 2 exam-practice items`);

  const ids = new Set(value.testPoints.map((point) => point.id));
  if (ids.size !== value.testPoints.length) errors.push(`${moduleId}: duplicate test-point ids`);
  for (const point of value.testPoints) {
    if (point.mustKnow.length < 3) errors.push(`${moduleId}/${point.id}: insufficient must-know detail`);
    if (point.scoringActions.length < 2) errors.push(`${moduleId}/${point.id}: insufficient scoring actions`);
  }
  for (const note of value.studyNotes) {
    if (note.explanation.length < 2) errors.push(`${moduleId}/${note.id}: insufficient explanation`);
    if (note.testPointIds.some((id) => !ids.has(id))) errors.push(`${moduleId}/${note.id}: invalid test-point reference`);
  }
  for (const item of value.examPractice) {
    if (item.testPointIds.some((id) => !ids.has(id))) errors.push(`${moduleId}/${item.id}: invalid test-point reference`);
    if (item.markingGuide.length < 2) errors.push(`${moduleId}/${item.id}: insufficient marking guide`);
  }
  return errors;
}

function atLeast<T>(items: T[], count: number, fallback: (index: number) => T): T[] {
  const output = [...items];
  while (output.length < count) output.push(fallback(output.length));
  return output;
}

/**
 * Builds a complete exam-focused layer from the module's authored syllabus,
 * lessons, examples, traps and technique. Expert-authored maps override this;
 * this guarantees that no qualification ships without test-point-first depth.
 */
export function deriveCoursewareDepth(module: ModuleCourseware): CoursewareDepth {
  const syllabusTopics = module.syllabusAreas.flatMap((area) => area.topics);
  const lessonPoints = module.lessons.flatMap((lesson) => lesson.keyPoints);
  const outcomeSource = atLeast(
    [...module.learningOutcomes, ...syllabusTopics].filter(Boolean).slice(0, 6),
    4,
    (index) => `Apply ${module.title} knowledge to examination scenario ${index + 1}.`
  );
  const testPoints = outcomeSource.map((outcome, index) => {
    const id = `tp${index + 1}`;
    const relatedLesson = module.lessons[index % Math.max(1, module.lessons.length)];
    const mustKnow = atLeast(
      [
        syllabusTopics[index % Math.max(1, syllabusTopics.length)],
        relatedLesson?.keyPoints[index % Math.max(1, relatedLesson.keyPoints.length)],
        module.frameworksAndFormulas[index % Math.max(1, module.frameworksAndFormulas.length)],
      ].filter((item): item is string => Boolean(item)),
      3,
      (fallbackIndex) =>
        `Connect the requirement to ${module.title} rule ${fallbackIndex + 1} and state the consequence.`
    );
    return {
      id,
      title: outcome.replace(/[.]+$/, ""),
      priority: index < 2 ? ("critical" as const) : index < 4 ? ("high" as const) : ("medium" as const),
      examinerFocus: `Show you can apply “${outcome.replace(/[.]+$/, "")}” to the facts in the vignette. Marks come from the correct classification, calculation or professional action — not from restating a definition.`,
      typicalQuestionForms: [
        `A short vignette asking which statement about ${module.title} is MOST/LEAST accurate.`,
        `A scenario where two neighbouring concepts are swapped (e.g. appetite vs tolerance, line 2 vs line 3) and you must pick the precise term.`,
        relatedLesson
          ? `A requirement built around “${relatedLesson.title}” with a plausible distractor drawn from a common trap.`
          : `A calculation or classification item with one deliberate unit/sign/definition trap.`,
      ],
      mustKnow,
      scoringActions: [
        module.examTechnique[index % Math.max(1, module.examTechnique.length)] ||
          "Identify the command word, show the relevant rule, and apply it to the facts.",
        module.commonTraps[index % Math.max(1, module.commonTraps.length)] ||
          "State assumptions and check that the conclusion answers the precise requirement.",
      ],
    };
  });

  const noteSources = atLeast(
    module.lessons.map((lesson) => ({
      title: lesson.title,
      objectives: lesson.objectives,
      keyPoints: lesson.keyPoints,
      workedExample: lesson.workedExample,
      selfCheck: lesson.selfCheck,
    })),
    4,
    (index) => {
      const area = module.syllabusAreas[index % Math.max(1, module.syllabusAreas.length)];
      return {
        title: area?.title || `${module.title} exam application ${index + 1}`,
        objectives: area?.topics.slice(0, 2) || module.learningOutcomes.slice(0, 2),
        keyPoints: area?.topics || module.frameworksAndFormulas.slice(0, 4),
        workedExample: undefined,
        selfCheck: [`How would the examiner test ${area?.title || module.title}?`],
      };
    }
  ).slice(0, 6);

  const studyNotes = noteSources.map((note, index) => {
    const keyRules = atLeast(note.keyPoints.filter(Boolean), 3, (ruleIndex) =>
      module.frameworksAndFormulas[ruleIndex % Math.max(1, module.frameworksAndFormulas.length)] ||
      `Apply the ${module.title} rule to the stated facts before concluding.`
    );
    const testPointId = testPoints[index % testPoints.length].id;
    const scenario =
      note.workedExample ||
      note.selfCheck[0] ||
      `A candidate must apply ${note.title} to a short examination scenario.`;
    return {
      id: `sn${index + 1}`,
      title: note.title,
      testPointIds: [testPointId],
      explanation: [
        `${note.title} is tested by forcing a choice: identify the trigger in the facts, select the matching rule, then state the consequence the examiner wants.`,
        note.objectives.length
          ? `Learning targets: ${note.objectives.join(" ")} Convert each target into an exam move (classify / compute / recommend / refuse).`
          : `Convert the syllabus label into an exam move: classify, compute, recommend, or refuse.`,
        `Decision sequence: ${keyRules.join(" → ")}`,
        module.commonTraps[index % Math.max(1, module.commonTraps.length)]
          ? `Refuse this trap: ${module.commonTraps[index % Math.max(1, module.commonTraps.length)]}`
          : `Refuse answers that swap neighbouring definitions or skip the required working.`,
      ],
      keyRules,
      formulas: module.frameworksAndFormulas.slice(index, index + 2),
      workedProblem: {
        scenario,
        steps: [
          `Identify the requirement and the facts relevant to ${note.title}.`,
          ...keyRules.slice(0, 3).map((rule) => `Apply: ${rule}`),
          "Check the result against the requirement and state the conclusion explicitly.",
        ],
        conclusion: `A high-scoring response applies the relevant ${note.title} rules to the facts, shows any necessary working, and gives a direct conclusion rather than a generic description.`,
        markingNotes: [
          "Credit for selecting the correct principle, framework or formula.",
          "Credit for fact-specific application and visible working.",
          "Credit for a conclusion consistent with the analysis.",
        ],
      },
    };
  });

  const prompts = module.lessons.flatMap((lesson) =>
    lesson.selfCheck.map((question) => ({ lesson, question }))
  );
  const practiceSources = atLeast(prompts.slice(0, 3), 3, (index) => {
    const lesson = module.lessons[index % Math.max(1, module.lessons.length)];
    return {
      lesson,
      question: `Explain and apply ${lesson?.title || module.title} in an exam-style scenario.`,
    };
  });
  const examPractice = practiceSources.map(({ lesson, question }, index) => {
    const rules = atLeast(lesson?.keyPoints || lessonPoints.slice(index, index + 4), 3, (ruleIndex) =>
      syllabusTopics[ruleIndex % Math.max(1, syllabusTopics.length)] ||
      `Apply the relevant ${module.title} principle.`
    );
    return {
      id: `ep${index + 1}`,
      testPointIds: [testPoints[index % testPoints.length].id],
      style: module.examFormat,
      question,
      answerPlan: [
        "Identify the tested rule, calculation or framework.",
        "Apply each relevant fact and show workings where required.",
        "Conclude in the language of the requirement.",
      ],
      modelAnswer: `${rules.join(" ")} Therefore, the answer must connect these rules to the supplied facts and explain the resulting treatment or decision.`,
      markingGuide: [
        "1 point for identifying the correct principle or method.",
        "1 point for accurate application or calculation.",
        "1 point for a clear, supported conclusion.",
      ],
    };
  });

  return {
    testPoints,
    scoringBlueprint: {
      scoreTarget: `Secure the core marks in ${module.title} by mastering the critical points first, then use timed mixed practice to convert knowledge into accurate application.`,
      timeBudget: `${module.examFormat}. Allocate time in proportion to marks or question count, reserving a final review for calculations, units and unanswered requirements.`,
      answerSequence: [
        "Read the requirement first and identify its command word.",
        "Extract the relevant facts, rule, framework or formula.",
        "Apply the rule visibly; label calculations and assumptions.",
        "Give a direct conclusion and move on when the time budget expires.",
      ],
      qualityChecks: [
        "Every requirement has been answered.",
        "Calculations show formula, substitution, units and sign.",
        "Narrative points are applied to the scenario rather than merely defined.",
        "The conclusion follows from the analysis and avoids the listed common traps.",
      ],
    },
    studyNotes,
    examPractice,
  };
}

/** Preserve expert content while filling any structural gaps from the module source. */
export function completeCoursewareDepth(
  module: ModuleCourseware,
  value: CoursewareDepth
): CoursewareDepth {
  const fallback = deriveCoursewareDepth(module);
  const testPoints = atLeast(
    value.testPoints.map((point, index) => ({
      ...point,
      mustKnow: atLeast(point.mustKnow, 3, (itemIndex) =>
        fallback.testPoints[index % fallback.testPoints.length].mustKnow[
          itemIndex % fallback.testPoints[index % fallback.testPoints.length].mustKnow.length
        ]
      ),
      scoringActions: atLeast(point.scoringActions, 2, (itemIndex) =>
        fallback.testPoints[index % fallback.testPoints.length].scoringActions[
          itemIndex % fallback.testPoints[index % fallback.testPoints.length].scoringActions.length
        ]
      ),
    })),
    4,
    (index) => ({ ...fallback.testPoints[index], id: `auto-tp${index + 1}` })
  );
  const testPointIds = testPoints.map((point) => point.id);
  const studyNotes = atLeast(
    value.studyNotes.map((note, index) => ({
      ...note,
      explanation: atLeast(note.explanation, 2, (itemIndex) =>
        fallback.studyNotes[index % fallback.studyNotes.length].explanation[
          itemIndex % fallback.studyNotes[index % fallback.studyNotes.length].explanation.length
        ]
      ),
    })),
    4,
    (index) => ({
      ...fallback.studyNotes[index % fallback.studyNotes.length],
      id: `auto-sn${index + 1}`,
      testPointIds: [testPointIds[index % testPointIds.length]],
    })
  );
  const examPractice = atLeast(
    value.examPractice.map((item, index) => ({
      ...item,
      markingGuide: atLeast(item.markingGuide, 2, (markIndex) =>
        fallback.examPractice[index % fallback.examPractice.length].markingGuide[
          markIndex % fallback.examPractice[index % fallback.examPractice.length].markingGuide.length
        ]
      ),
    })),
    2,
    (index) => ({
      ...fallback.examPractice[index % fallback.examPractice.length],
      id: `auto-ep${index + 1}`,
      testPointIds: [testPointIds[index % testPointIds.length]],
    })
  );
  return {
    ...value,
    testPoints,
    studyNotes,
    examPractice,
  };
}
