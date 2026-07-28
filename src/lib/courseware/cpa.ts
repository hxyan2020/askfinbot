import type { ModuleCourseware } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * CPA (US Uniform CPA Examination) courseware under the CPA Evolution model.
 *
 * Titles mirror the CPA section topic lists in `src/lib/exams.ts` exactly.
 * Candidates sit three Core sections (AUD, FAR, REG) plus one Discipline
 * (BAR, ISC or TCP).
 *
 * Exam format notes (AICPA Blueprint style):
 *  - Each section is a four-hour, computer-based test built from the AICPA
 *    Blueprints, mixing multiple-choice questions (MCQs) with task-based
 *    simulations (TBSs). Core sections are scored 0–99 with a passing score of
 *    75; skills range from Remembering/Understanding through Analysis (and
 *    Evaluation in AUD).
 */

const CPA_CORE_FORMAT =
  "CPA Core section — AICPA Blueprint-aligned, four-hour computer-based test combining multiple-choice questions (MCQs) and task-based simulations (TBSs). Weighted 50% MCQ / 50% TBS (AUD, FAR, REG). Scaled score 0–99; 75 to pass. Skills span Remembering/Understanding, Application, Analysis (and Evaluation for AUD).";
const CPA_DISCIPLINE_FORMAT =
  "CPA Discipline section (BAR / ISC / TCP) — AICPA Blueprint-aligned, four-hour computer-based test combining multiple-choice questions (MCQs) and task-based simulations (TBSs). Candidates choose one discipline to complement the three Core sections. Scaled score 0–99; 75 to pass.";

export const CPA_COURSEWARE: ModuleCourseware[] = [
  // ===================================================================
  // AUD — Auditing & Attestation
  // ===================================================================
  courseware({
    moduleId: "cpa-aud-m1",
    examId: "cpa",
    levelId: "aud",
    title: "Ethics, independence & professional responsibilities",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers the AICPA Code of Professional Conduct, independence rules, the conceptual framework for threats and safeguards, and the responsibilities of auditors under professional and regulatory standards (SEC, PCAOB, GAO, DOL).",
    whyItMatters:
      "Independence and ethics are the bedrock of the auditor's value—assurance is only credible if the auditor is objective. This area is tested throughout AUD and underlies every engagement decision.",
    learningOutcomes: [
      "Apply the AICPA Code of Professional Conduct to practice situations.",
      "Evaluate independence using the conceptual framework of threats and safeguards.",
      "Distinguish covered members and prohibited relationships.",
      "Compare AICPA, SEC and PCAOB independence requirements.",
      "Identify responsibilities under GAO Government Auditing Standards and DOL rules.",
      "Recommend safeguards that reduce threats to an acceptable level.",
    ],
    syllabusAreas: [
      area("AICPA Code of Conduct", [
        "Principles and rules",
        "Conceptual framework: threats and safeguards",
        "Integrity, objectivity and due care",
      ], "AUD Area I 15–25%"),
      area("Independence", [
        "Covered members and financial interests",
        "Prohibited services and relationships",
        "SEC/PCAOB independence rules",
      ]),
      area("Regulatory responsibilities", [
        "GAO Government Auditing Standards (Yellow Book)",
        "DOL rules for employee benefit plans",
        "Quality management standards",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m1-l1",
        "The AICPA Code and the conceptual framework",
        45,
        [
          "Apply the principles and rules of the AICPA Code.",
          "Use the threats-and-safeguards framework.",
        ],
        [
          "Threats include self-interest, self-review, advocacy, familiarity and undue influence.",
          "Safeguards reduce threats to an acceptable level.",
          "When no safeguard suffices, the engagement must be declined.",
        ],
        [
          "What are the categories of threats to independence?",
          "When must an engagement be declined despite safeguards?",
        ],
        "An auditor who prepared the client's source documents faces a self-review threat; if no safeguard reduces it to an acceptable level, the firm cannot also audit those statements."
      ),
      lesson(
        "cpa-aud-m1-l2",
        "Independence: covered members and interests",
        50,
        [
          "Identify covered members.",
          "Evaluate financial and employment relationships.",
        ],
        [
          "Direct financial interests impair independence regardless of materiality.",
          "Indirect interests impair only if material.",
          "Immediate family and close relatives can create impairments.",
        ],
        [
          "How do direct and indirect financial interests differ?",
          "Who is a covered member?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m1-l3",
        "SEC and PCAOB independence rules",
        45,
        [
          "Compare AICPA with SEC/PCAOB independence rules.",
          "Identify prohibited non-audit services for issuers.",
        ],
        [
          "SEC/PCAOB rules are stricter for public-company audits.",
          "Certain non-audit services are prohibited for audit clients.",
          "Partner rotation and cooling-off periods apply.",
        ],
        [
          "Why are SEC/PCAOB rules stricter than AICPA rules?",
          "What non-audit services are prohibited for issuers?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m1-l4",
        "Government and ERISA responsibilities",
        40,
        [
          "Apply GAO Yellow Book independence rules.",
          "Describe DOL requirements for benefit-plan audits.",
        ],
        [
          "The Yellow Book adds independence and CPE requirements.",
          "DOL audits of employee benefit plans have specific rules.",
          "Nonaudit-service documentation is required under GAGAS.",
        ],
        [
          "What does the Yellow Book add beyond AICPA rules?",
          "What is unique about DOL benefit-plan audits?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m1-l5",
        "Professional responsibilities and quality management",
        40,
        [
          "Describe firm quality-management standards.",
          "Apply due care and professional skepticism.",
        ],
        [
          "Quality management requires a risk-based system of controls.",
          "Professional skepticism is a questioning mindset.",
          "Due care requires competence and diligence.",
        ],
        [
          "What is professional skepticism?",
          "What does a system of quality management require?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Threats: self-interest, self-review, advocacy, familiarity, undue influence, management participation.",
      "Independence decision: identify threat → evaluate significance → apply safeguard → conclude.",
      "Direct financial interest impairs regardless of materiality; indirect only if material.",
    ],
    commonTraps: [
      "Assuming a small direct financial interest is acceptable.",
      "Applying AICPA rules to an issuer audit where SEC/PCAOB rules govern.",
      "Confusing the self-review with the self-interest threat.",
    ],
    examTechnique: [
      "Identify the specific threat before selecting a safeguard.",
      "Check whether the client is an issuer (SEC/PCAOB) or nonissuer (AICPA).",
      "Recognise when independence is impaired regardless of materiality.",
    ],
    practicePlan: [
      "Work 25 independence MCQs and log the threat category.",
      "Compare AICPA vs SEC/PCAOB rules in a table.",
      "Practise a threats-and-safeguards TBS.",
    ],
    furtherReading: [
      "AICPA Code of Professional Conduct.",
      "PCAOB and SEC independence rules; GAO Yellow Book.",
    ],
  }),
  courseware({
    moduleId: "cpa-aud-m2",
    examId: "cpa",
    levelId: "aud",
    title: "Terms of engagement & planning an audit",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers engagement acceptance and continuance, engagement letters, audit strategy and planning, the auditor's understanding of the entity, and the development of an overall audit plan.",
    whyItMatters:
      "Sound planning drives an effective, efficient audit. Acceptance decisions and the audit strategy set the scope and focus for everything that follows.",
    learningOutcomes: [
      "Evaluate client acceptance and continuance decisions.",
      "Prepare the key elements of an engagement letter.",
      "Develop an audit strategy and plan.",
      "Obtain an understanding of the entity and its environment.",
      "Apply analytical procedures in planning.",
      "Coordinate specialists, internal audit and component auditors.",
    ],
    syllabusAreas: [
      area("Engagement acceptance", [
        "Preconditions for an audit",
        "Predecessor-successor communications",
        "Engagement letters",
      ], "AUD Area II 25–35%"),
      area("Audit strategy & planning", [
        "Overall audit strategy",
        "Understanding the entity",
        "Planning analytical procedures",
      ]),
      area("Using the work of others", [
        "Auditor's specialists",
        "Internal audit function",
        "Group audits and component auditors",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m2-l1",
        "Engagement acceptance and continuance",
        45,
        [
          "Evaluate acceptance and continuance decisions.",
          "Perform predecessor-auditor communications.",
        ],
        [
          "Acceptance considers integrity, competence and independence.",
          "Successor must request client permission to contact the predecessor.",
          "Preconditions include an acceptable financial-reporting framework.",
        ],
        [
          "What must a successor auditor do before accepting?",
          "What are the preconditions for an audit?",
        ],
        "Before accepting, the successor asks the client to authorise inquiries of the predecessor about integrity, disagreements and reasons for the change."
      ),
      lesson(
        "cpa-aud-m2-l2",
        "Engagement letters",
        40,
        [
          "Prepare the elements of an engagement letter.",
          "Explain its purpose in managing expectations.",
        ],
        [
          "The letter documents scope, responsibilities and limitations.",
          "It reduces misunderstandings about the audit's objectives.",
          "Management's responsibilities are explicitly stated.",
        ],
        [
          "What are the required elements of an engagement letter?",
          "Why document management's responsibilities?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m2-l3",
        "Audit strategy and planning",
        50,
        [
          "Develop an overall audit strategy.",
          "Translate strategy into a detailed plan.",
        ],
        [
          "The strategy sets scope, timing and direction.",
          "The plan details the nature, timing and extent of procedures.",
          "Planning is iterative and updated as the audit progresses.",
        ],
        [
          "How does the audit strategy differ from the audit plan?",
          "Why is planning iterative?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m2-l4",
        "Understanding the entity and analytical procedures",
        45,
        [
          "Obtain an understanding of the entity and environment.",
          "Apply planning analytical procedures.",
        ],
        [
          "Understanding the entity informs risk assessment.",
          "Planning analytics identify unusual relationships.",
          "Industry and regulatory factors shape risk.",
        ],
        [
          "Why perform analytical procedures during planning?",
          "How does understanding the entity inform risk assessment?",
        ],
        "A planning analytic showing gross margin jumping from 30% to 45% without a business reason flags a potential misstatement to investigate."
      ),
      lesson(
        "cpa-aud-m2-l5",
        "Using the work of others",
        40,
        [
          "Coordinate specialists and internal audit.",
          "Plan a group audit with component auditors.",
        ],
        [
          "The auditor evaluates the competence and objectivity of others' work.",
          "Internal audit can assist but cannot replace the auditor's judgement.",
          "Group auditors direct and supervise component auditors.",
        ],
        [
          "How does the auditor use internal audit's work?",
          "What are the group auditor's responsibilities?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Preconditions: acceptable framework + management acknowledges responsibilities.",
      "Audit strategy → audit plan (nature, timing, extent of procedures).",
      "Using others: assess competence, objectivity and the work performed.",
    ],
    commonTraps: [
      "Assuming the successor may contact the predecessor without client consent.",
      "Confusing the audit strategy (high level) with the plan (detailed).",
      "Believing internal audit can replace auditor judgement.",
    ],
    examTechnique: [
      "Sequence acceptance steps correctly in TBSs.",
      "Distinguish strategy-level from plan-level decisions.",
      "Evaluate competence and objectivity when using others' work.",
    ],
    practicePlan: [
      "Draft an engagement-letter TBS.",
      "Work planning-analytics questions.",
      "Outline the steps of a group audit.",
    ],
    furtherReading: [
      "AICPA AU-C 210, 300, 315; PCAOB planning standards.",
      "AICPA Audit Guide — Planning.",
    ],
  }),
  courseware({
    moduleId: "cpa-aud-m3",
    examId: "cpa",
    levelId: "aud",
    title: "Internal control & COSO / IT general controls",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers the COSO internal-control framework, the auditor's understanding and evaluation of internal control, IT general and application controls, and control deficiencies and their communication.",
    whyItMatters:
      "Internal control is central to risk assessment; understanding controls lets the auditor plan efficient testing and identify where misstatements are likely to occur.",
    learningOutcomes: [
      "Describe the five components of the COSO framework.",
      "Evaluate the design and implementation of controls.",
      "Distinguish IT general controls from application controls.",
      "Identify and classify control deficiencies.",
      "Communicate significant deficiencies and material weaknesses.",
      "Relate controls to the risk-assessment process.",
    ],
    syllabusAreas: [
      area("COSO framework", [
        "Five components and seventeen principles",
        "Control environment and monitoring",
        "Entity-level vs process-level controls",
      ], "AUD Area II"),
      area("IT controls", [
        "IT general controls (access, change, operations)",
        "Application controls",
        "IT risks and the audit",
      ]),
      area("Deficiencies", [
        "Deficiency, significant deficiency, material weakness",
        "Evaluation and aggregation",
        "Communication to governance",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m3-l1",
        "The COSO framework",
        50,
        [
          "Describe the five COSO components.",
          "Relate principles to the components.",
        ],
        [
          "Components: control environment, risk assessment, control activities, information & communication, monitoring.",
          "The control environment sets the tone.",
          "All components must be present and functioning.",
        ],
        [
          "What are the five COSO components?",
          "Why is the control environment foundational?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m3-l2",
        "Understanding and evaluating controls",
        50,
        [
          "Evaluate the design and implementation of controls.",
          "Document the understanding of controls.",
        ],
        [
          "The auditor must understand controls relevant to the audit.",
          "Design evaluation asks whether a control could prevent/detect misstatement.",
          "Implementation asks whether the control exists and is in use.",
        ],
        [
          "What is the difference between design and implementation?",
          "Which controls must the auditor understand?",
        ],
        "Walking a sales transaction through the system tests whether the designed credit-approval control is actually implemented before shipment."
      ),
      lesson(
        "cpa-aud-m3-l3",
        "IT general controls",
        45,
        [
          "Describe IT general controls.",
          "Explain their effect on application controls.",
        ],
        [
          "ITGCs cover access, change management and operations.",
          "Weak ITGCs undermine reliance on application controls.",
          "Segregation of duties is a key ITGC concern.",
        ],
        [
          "How do weak ITGCs affect application-control reliance?",
          "What are the main ITGC categories?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m3-l4",
        "Application controls",
        40,
        [
          "Describe input, processing and output controls.",
          "Distinguish preventive and detective controls.",
        ],
        [
          "Application controls ensure complete, accurate processing.",
          "Edit checks and validation are input controls.",
          "Reconciliations are detective controls.",
        ],
        [
          "What is an example of an input control?",
          "How do preventive and detective controls differ?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m3-l5",
        "Control deficiencies and communication",
        45,
        [
          "Classify deficiencies by severity.",
          "Communicate to those charged with governance.",
        ],
        [
          "A material weakness has a reasonable possibility of material misstatement.",
          "Significant deficiencies are less severe but merit attention.",
          "Material weaknesses and significant deficiencies must be communicated in writing.",
        ],
        [
          "How is a material weakness distinguished from a significant deficiency?",
          "What must be communicated to governance?",
        ],
        "A missing reconciliation that could allow a material misstatement to go undetected is evaluated as a material weakness and reported in writing to those charged with governance."
      ),
    ],
    frameworksAndFormulas: [
      "COSO: Control environment, Risk assessment, Control activities, Information & communication, Monitoring.",
      "Deficiency severity: deficiency < significant deficiency < material weakness.",
      "ITGC categories: access, change management, operations.",
    ],
    commonTraps: [
      "Confusing design deficiencies with operating deficiencies.",
      "Assuming strong application controls compensate for weak ITGCs.",
      "Misclassifying deficiency severity.",
    ],
    examTechnique: [
      "Map controls to the relevant COSO component.",
      "Evaluate design before operating effectiveness.",
      "Classify deficiency severity precisely.",
    ],
    practicePlan: [
      "Match controls to COSO components in a TBS.",
      "Classify a set of deficiencies by severity.",
      "Trace a walkthrough of a transaction cycle.",
    ],
    furtherReading: [
      "COSO Internal Control — Integrated Framework.",
      "AICPA AU-C 315, 265.",
    ],
  }),
  courseware({
    moduleId: "cpa-aud-m4",
    examId: "cpa",
    levelId: "aud",
    title: "Risk assessment & materiality",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers the audit risk model, assessment of risks of material misstatement, materiality determination, fraud risk, and the linkage of assessed risks to the design of further audit procedures.",
    whyItMatters:
      "Risk assessment focuses audit effort where misstatement is most likely. Materiality sets the threshold for what matters, making these concepts central to an effective audit.",
    learningOutcomes: [
      "Apply the audit risk model.",
      "Assess inherent and control risk at the assertion level.",
      "Determine overall and performance materiality.",
      "Identify and respond to fraud risks.",
      "Link assessed risks to further audit procedures.",
      "Document the risk assessment.",
    ],
    syllabusAreas: [
      area("Audit risk model", [
        "Audit risk = IR × CR × DR",
        "Assertion-level risk assessment",
        "Significant risks",
      ], "AUD Area II"),
      area("Materiality", [
        "Overall and performance materiality",
        "Benchmarks and qualitative factors",
        "Clearly trivial threshold",
      ]),
      area("Fraud risk", [
        "Fraud triangle",
        "Fraud risk factors and responses",
        "Management override of controls",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m4-l1",
        "The audit risk model",
        50,
        [
          "Apply the audit risk model.",
          "Explain the relationship among its components.",
        ],
        [
          "Audit risk = inherent risk × control risk × detection risk.",
          "The auditor sets detection risk to achieve acceptable audit risk.",
          "Higher assessed RMM requires lower detection risk (more testing).",
        ],
        [
          "How does the auditor control detection risk?",
          "What happens to testing when RMM is high?",
        ],
        "If inherent and control risk are high, the auditor lowers detection risk by increasing substantive testing to keep overall audit risk acceptably low."
      ),
      lesson(
        "cpa-aud-m4-l2",
        "Risk of material misstatement",
        45,
        [
          "Assess RMM at the assertion level.",
          "Identify significant risks.",
        ],
        [
          "RMM combines inherent and control risk.",
          "Significant risks require special audit consideration.",
          "Assessment is made by assertion and account.",
        ],
        [
          "What is a significant risk?",
          "Why assess risk at the assertion level?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m4-l3",
        "Materiality",
        50,
        [
          "Determine overall and performance materiality.",
          "Apply qualitative materiality factors.",
        ],
        [
          "Materiality is based on a benchmark and professional judgement.",
          "Performance materiality is set below overall materiality.",
          "Qualitative factors can make small amounts material.",
        ],
        [
          "Why is performance materiality set below overall materiality?",
          "How can a small misstatement be material?",
        ],
        "An error that turns a reported profit into a loss, or that affects covenant compliance, can be material even if numerically small—a qualitative factor."
      ),
      lesson(
        "cpa-aud-m4-l4",
        "Fraud risk",
        45,
        [
          "Apply the fraud triangle.",
          "Design responses to fraud risks.",
        ],
        [
          "The fraud triangle: incentive/pressure, opportunity, rationalisation.",
          "Revenue recognition is presumed a fraud risk.",
          "Management override of controls is always a risk.",
        ],
        [
          "What are the three elements of the fraud triangle?",
          "Why is revenue recognition presumed a fraud risk?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m4-l5",
        "Linking risk to procedures",
        40,
        [
          "Link assessed risks to further procedures.",
          "Document the risk assessment.",
        ],
        [
          "Higher risk drives more persuasive evidence.",
          "The nature, timing and extent of procedures respond to risk.",
          "Documentation supports the assessment and response.",
        ],
        [
          "How do assessed risks affect the nature of procedures?",
          "Why document the risk assessment?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Audit risk = inherent risk × control risk × detection risk.",
      "Detection risk = audit risk / (IR × CR).",
      "Performance materiality < overall materiality.",
      "Fraud triangle: incentive, opportunity, rationalisation.",
    ],
    commonTraps: [
      "Treating materiality as purely quantitative.",
      "Forgetting the presumed revenue fraud risk.",
      "Confusing performance with overall materiality.",
    ],
    examTechnique: [
      "Rearrange the audit risk model to solve for detection risk.",
      "Consider qualitative materiality factors.",
      "Tie every response back to an assessed risk.",
    ],
    practicePlan: [
      "Solve audit-risk-model computations.",
      "Set materiality from benchmarks in a TBS.",
      "Map fraud risk factors to responses.",
    ],
    furtherReading: [
      "AICPA AU-C 315, 320, 240.",
      "PCAOB risk-assessment standards.",
    ],
  }),
  courseware({
    moduleId: "cpa-aud-m5",
    examId: "cpa",
    levelId: "aud",
    title: "Obtaining audit evidence & sampling",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers the nature and sufficiency of audit evidence, audit procedures, audit sampling for tests of controls and substantive tests, and the evaluation of sample results.",
    whyItMatters:
      "Audit conclusions rest on sufficient appropriate evidence. Sampling lets auditors draw conclusions about populations efficiently while controlling sampling risk.",
    learningOutcomes: [
      "Explain the sufficiency and appropriateness of evidence.",
      "Select appropriate audit procedures.",
      "Design attribute and variables sampling plans.",
      "Evaluate sample results and projected misstatement.",
      "Distinguish statistical from nonstatistical sampling.",
      "Explain sampling and nonsampling risk.",
    ],
    syllabusAreas: [
      area("Audit evidence", [
        "Sufficiency and appropriateness",
        "Reliability hierarchy of evidence",
        "Types of audit procedures",
      ], "AUD Area III 30–40%"),
      area("Attribute sampling", [
        "Tests of controls",
        "Sample size factors",
        "Tolerable and expected deviation rates",
      ]),
      area("Variables sampling", [
        "Substantive tests of details",
        "Projected misstatement",
        "Evaluating results",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m5-l1",
        "The nature of audit evidence",
        45,
        [
          "Explain sufficiency and appropriateness.",
          "Rank evidence by reliability.",
        ],
        [
          "Sufficiency is quantity; appropriateness is relevance and reliability.",
          "External evidence is generally more reliable than internal.",
          "Auditor-obtained evidence is more reliable than entity-provided.",
        ],
        [
          "How do sufficiency and appropriateness differ?",
          "Why is external confirmation highly reliable?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m5-l2",
        "Audit procedures",
        45,
        [
          "Select appropriate procedures for assertions.",
          "Match procedures to audit objectives.",
        ],
        [
          "Procedures include inspection, observation, confirmation, recalculation, reperformance, inquiry and analytics.",
          "Inquiry alone is insufficient.",
          "Each assertion drives specific procedures.",
        ],
        [
          "Why is inquiry alone insufficient evidence?",
          "Which procedure best tests existence of receivables?",
        ],
        "To test existence of receivables, the auditor confirms balances directly with customers—external evidence addressing the existence assertion."
      ),
      lesson(
        "cpa-aud-m5-l3",
        "Attribute sampling for controls",
        50,
        [
          "Design an attribute sampling plan.",
          "Evaluate the sample deviation rate.",
        ],
        [
          "Attribute sampling tests the rate of control deviations.",
          "Sample size rises with lower tolerable rate and higher expected rate.",
          "If the upper deviation rate exceeds tolerable, reliance is reduced.",
        ],
        [
          "What factors increase attribute sample size?",
          "How is the sample deviation rate evaluated?",
        ],
        "If the tolerable deviation rate is 5% but the sample's upper deviation rate is 8%, the auditor cannot rely on the control as planned and increases substantive testing."
      ),
      lesson(
        "cpa-aud-m5-l4",
        "Variables sampling for substantive tests",
        50,
        [
          "Design a variables sampling plan.",
          "Project misstatement to the population.",
        ],
        [
          "Variables sampling estimates a monetary amount.",
          "Projected misstatement is compared to tolerable misstatement.",
          "PPS sampling weights selection by dollar amount.",
        ],
        [
          "How is projected misstatement computed?",
          "When is PPS sampling advantageous?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m5-l5",
        "Sampling and nonsampling risk",
        40,
        [
          "Distinguish sampling from nonsampling risk.",
          "Explain the risks of incorrect acceptance/rejection.",
        ],
        [
          "Sampling risk is the risk the sample misrepresents the population.",
          "Risk of incorrect acceptance affects effectiveness.",
          "Nonsampling risk comes from auditor error.",
        ],
        [
          "Which sampling risk relates to audit effectiveness?",
          "What causes nonsampling risk?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Evidence quality = sufficiency (quantity) × appropriateness (relevance + reliability).",
      "Attribute sample size ↑ as tolerable rate ↓ and expected rate ↑.",
      "Upper deviation rate = sample rate + allowance for sampling risk.",
      "Projected misstatement compared to tolerable misstatement.",
    ],
    commonTraps: [
      "Relying on inquiry alone.",
      "Confusing risk of incorrect acceptance (effectiveness) with rejection (efficiency).",
      "Ignoring the allowance for sampling risk when evaluating results.",
    ],
    examTechnique: [
      "Match procedures to assertions.",
      "Determine sample-size direction from the driving factors.",
      "Compare upper deviation/projected misstatement to tolerable limits.",
    ],
    practicePlan: [
      "Work attribute- and variables-sampling TBSs.",
      "Rank evidence reliability in a set of scenarios.",
      "Match audit procedures to assertions.",
    ],
    furtherReading: [
      "AICPA AU-C 500, 530.",
      "AICPA Audit Sampling Guide.",
    ],
  }),
  courseware({
    moduleId: "cpa-aud-m6",
    examId: "cpa",
    levelId: "aud",
    title: "Tests of controls & substantive procedures",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers the performance of tests of controls, substantive analytical procedures and tests of details across major transaction cycles, and the evaluation of misstatements.",
    whyItMatters:
      "This is where the audit is executed. Effective testing across cycles provides the evidence to support the opinion and detect material misstatement.",
    learningOutcomes: [
      "Perform tests of controls and assess operating effectiveness.",
      "Design substantive analytical procedures.",
      "Perform tests of details by transaction cycle.",
      "Audit accounting estimates and fair values.",
      "Evaluate identified misstatements.",
      "Test cycle-specific assertions (revenue, inventory, etc.).",
    ],
    syllabusAreas: [
      area("Tests of controls", [
        "Operating effectiveness",
        "Reperformance and inspection",
        "Reliance decisions",
      ], "AUD Area III"),
      area("Substantive procedures", [
        "Substantive analytics",
        "Tests of details by cycle",
        "Auditing estimates and fair value",
      ]),
      area("Evaluation", [
        "Aggregating misstatements",
        "Evaluating uncorrected misstatements",
        "Cycle-specific assertions",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m6-l1",
        "Tests of controls",
        45,
        [
          "Perform tests of operating effectiveness.",
          "Decide the extent of reliance.",
        ],
        [
          "Tests of controls assess whether controls operated effectively.",
          "Reperformance provides strong evidence of effectiveness.",
          "Reliance reduces (but does not eliminate) substantive testing.",
        ],
        [
          "What evidence supports control operating effectiveness?",
          "How does reliance affect substantive testing?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m6-l2",
        "Substantive analytical procedures",
        45,
        [
          "Design substantive analytics.",
          "Develop and test expectations.",
        ],
        [
          "Analytics compare recorded amounts to expectations.",
          "The precision of the expectation drives its usefulness.",
          "Significant differences must be investigated.",
        ],
        [
          "What makes a substantive analytic effective?",
          "How are unexpected differences handled?",
        ],
        "Estimating interest expense as average debt × average rate provides an independent expectation; a large deviation from recorded expense prompts investigation."
      ),
      lesson(
        "cpa-aud-m6-l3",
        "Tests of details by cycle",
        50,
        [
          "Perform tests of details across cycles.",
          "Target cycle-specific assertions.",
        ],
        [
          "Revenue: existence and cutoff are key.",
          "Inventory: existence and valuation are key.",
          "Payables: completeness is key (search for unrecorded liabilities).",
        ],
        [
          "Which assertion is most at risk for payables?",
          "Why is cutoff critical for revenue?",
        ],
        "A search for unrecorded liabilities examines cash disbursements after year-end to test the completeness assertion for accounts payable."
      ),
      lesson(
        "cpa-aud-m6-l4",
        "Auditing estimates and fair value",
        45,
        [
          "Audit accounting estimates.",
          "Evaluate management's assumptions.",
        ],
        [
          "Estimates involve measurement uncertainty and bias risk.",
          "The auditor tests the method, data and assumptions.",
          "Fair-value estimates require evaluating inputs and models.",
        ],
        [
          "How does the auditor address estimation uncertainty?",
          "What are the risks in auditing fair value?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m6-l5",
        "Evaluating misstatements",
        40,
        [
          "Aggregate identified misstatements.",
          "Evaluate uncorrected misstatements.",
        ],
        [
          "Misstatements are accumulated and compared to materiality.",
          "Uncorrected misstatements are evaluated individually and in aggregate.",
          "Qualitative factors affect the evaluation.",
        ],
        [
          "How are uncorrected misstatements evaluated?",
          "Why aggregate misstatements before concluding?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Cycle assertions: revenue → cutoff/existence; payables → completeness; inventory → existence/valuation.",
      "Reliance on controls reduces (not eliminates) substantive testing.",
      "Auditing estimates: test method, data and assumptions.",
      "Aggregate misstatements vs materiality to conclude.",
    ],
    commonTraps: [
      "Testing the wrong assertion for a cycle (e.g., existence for payables).",
      "Using imprecise expectations in substantive analytics.",
      "Failing to aggregate misstatements before evaluating.",
    ],
    examTechnique: [
      "Identify the key assertion for each cycle.",
      "Design analytics with a precise expectation.",
      "Accumulate misstatements and compare to materiality.",
    ],
    practicePlan: [
      "Match procedures to assertions by cycle.",
      "Build a substantive analytic with an expectation.",
      "Work a misstatement-evaluation TBS.",
    ],
    furtherReading: [
      "AICPA AU-C 330, 520, 540, 450.",
      "AICPA Audit Guides by cycle.",
    ],
  }),
  courseware({
    moduleId: "cpa-aud-m7",
    examId: "cpa",
    levelId: "aud",
    title: "Audit conclusions, subsequent events & reports",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers completing the audit—subsequent events, going concern, written representations, and the wording and modification of the auditor's report for issuers and nonissuers.",
    whyItMatters:
      "The report is the auditor's product. Correctly concluding on evidence, going concern and subsequent events, and selecting the right report and modification, is the culmination of the audit.",
    learningOutcomes: [
      "Evaluate subsequent events and their treatment.",
      "Assess going concern and its reporting.",
      "Obtain written representations.",
      "Select the appropriate audit opinion.",
      "Modify the report for scope limitations and misstatements.",
      "Add emphasis-of-matter and other-matter paragraphs.",
    ],
    syllabusAreas: [
      area("Completing the audit", [
        "Subsequent events and subsequently discovered facts",
        "Going-concern evaluation",
        "Written representations",
      ], "AUD Area IV 10–20%"),
      area("The auditor's report", [
        "Unmodified report elements",
        "Issuer vs nonissuer reports",
        "Key/critical audit matters",
      ]),
      area("Modifications", [
        "Qualified, adverse, disclaimer",
        "Emphasis-of-matter and other-matter",
        "Reporting on comparatives",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m7-l1",
        "Subsequent events",
        45,
        [
          "Distinguish recognized and non-recognized subsequent events.",
          "Address subsequently discovered facts.",
        ],
        [
          "Type 1 events (conditions existing at year-end) are recognized.",
          "Type 2 events (arising after) are disclosed if material.",
          "Facts discovered after the report date require specific procedures.",
        ],
        [
          "How are Type 1 and Type 2 subsequent events treated?",
          "What if facts are discovered after issuance?",
        ],
        "A customer bankruptcy after year-end for a receivable that was doubtful at year-end is a Type 1 event requiring adjustment, not just disclosure."
      ),
      lesson(
        "cpa-aud-m7-l2",
        "Going concern",
        45,
        [
          "Evaluate substantial doubt about going concern.",
          "Determine the reporting consequences.",
        ],
        [
          "Substantial doubt exists when there is uncertainty about continuing operations.",
          "Management's plans may mitigate the doubt.",
          "Adequate disclosure with an emphasis paragraph, or modification if inadequate.",
        ],
        [
          "What triggers a going-concern emphasis paragraph?",
          "How do management's plans affect the conclusion?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m7-l3",
        "Written representations and wrap-up",
        40,
        [
          "Obtain written representations from management.",
          "Complete final wrap-up procedures.",
        ],
        [
          "Representations corroborate other evidence but do not replace it.",
          "Refusal to provide representations is a scope limitation.",
          "Final analytics support the overall conclusion.",
        ],
        [
          "What happens if management refuses to sign representations?",
          "Why are representations not sufficient evidence alone?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m7-l4",
        "Selecting the opinion",
        50,
        [
          "Select the appropriate opinion.",
          "Apply materiality and pervasiveness.",
        ],
        [
          "Unmodified when statements are fairly stated.",
          "Qualified for material but not pervasive issues.",
          "Adverse (misstatement) or disclaimer (scope) when pervasive.",
        ],
        [
          "How do materiality and pervasiveness drive the opinion?",
          "When is a disclaimer appropriate?",
        ],
        "A pervasive, unresolved scope limitation (e.g., unable to observe most inventory) leads to a disclaimer of opinion rather than a qualification."
      ),
      lesson(
        "cpa-aud-m7-l5",
        "Report modifications and paragraphs",
        45,
        [
          "Add emphasis-of-matter and other-matter paragraphs.",
          "Report on comparatives and issuer CAMs.",
        ],
        [
          "Emphasis-of-matter highlights a properly disclosed item.",
          "Issuer reports include critical audit matters (CAMs).",
          "Nonissuer reports may include key audit matters when engaged.",
        ],
        [
          "What is the purpose of an emphasis-of-matter paragraph?",
          "What are critical audit matters?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Opinion matrix: material-not-pervasive → qualified; pervasive → adverse (GAAP) / disclaimer (scope).",
      "Subsequent events: Type 1 recognize; Type 2 disclose.",
      "Emphasis-of-matter (properly disclosed) vs modification (misstatement/scope).",
      "Issuer reports include CAMs; nonissuer may include KAMs.",
    ],
    commonTraps: [
      "Confusing Type 1 (adjust) and Type 2 (disclose) events.",
      "Mixing adverse (GAAP) and disclaimer (scope) opinions.",
      "Treating an emphasis paragraph as a modification.",
    ],
    examTechnique: [
      "Use the materiality × pervasiveness matrix to pick the opinion.",
      "Distinguish GAAP problems (adverse) from scope problems (disclaimer).",
      "Identify issuer vs nonissuer reporting differences.",
    ],
    practicePlan: [
      "Work opinion-selection TBSs.",
      "Classify subsequent events.",
      "Draft report modifications for scope and GAAP issues.",
    ],
    furtherReading: [
      "AICPA AU-C 560, 570, 580, 700–706.",
      "PCAOB AS 3101 (CAMs).",
    ],
  }),
  courseware({
    moduleId: "cpa-aud-m8",
    examId: "cpa",
    levelId: "aud",
    title: "Other assurance & attestation engagements",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 18,
    overview:
      "Covers reviews and compilations, attestation engagements, SSARS engagements, agreed-upon procedures, and reporting on service organizations (SOC) and other subject matter.",
    whyItMatters:
      "CPAs perform many engagements beyond audits. Knowing the level of assurance and the applicable standards for each is essential to selecting the right report and procedures.",
    learningOutcomes: [
      "Distinguish levels of assurance across engagement types.",
      "Perform review and compilation engagements (SSARS).",
      "Apply the attestation standards (SSAE).",
      "Perform agreed-upon procedures engagements.",
      "Describe SOC 1, SOC 2 and SOC 3 reports.",
      "Select the appropriate report for each engagement.",
    ],
    syllabusAreas: [
      area("SSARS engagements", [
        "Compilations",
        "Reviews",
        "Preparation engagements",
      ], "AUD Area IV"),
      area("Attestation (SSAE)", [
        "Examination, review and AUP",
        "Assertion-based vs direct",
        "Subject-matter reporting",
      ]),
      area("Service organizations", [
        "SOC 1, SOC 2, SOC 3",
        "Type 1 vs Type 2",
        "User-auditor considerations",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-aud-m8-l1",
        "Levels of assurance",
        40,
        [
          "Distinguish reasonable, limited and no assurance.",
          "Match engagement types to assurance levels.",
        ],
        [
          "Audits provide reasonable assurance; reviews limited.",
          "Compilations and preparations provide no assurance.",
          "Assurance level drives procedures and report wording.",
        ],
        [
          "How does a review differ from an audit in assurance?",
          "What assurance does a compilation provide?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m8-l2",
        "Reviews and compilations (SSARS)",
        50,
        [
          "Perform review and compilation engagements.",
          "Apply SSARS reporting requirements.",
        ],
        [
          "Reviews use inquiry and analytics for limited assurance.",
          "Compilations present information without assurance.",
          "Independence is required for reviews, not compilations (with disclosure).",
        ],
        [
          "What procedures underlie a review engagement?",
          "Is independence required for a compilation?",
        ],
        "A review's report expresses limited assurance that no material modifications are needed, based on inquiry and analytical procedures rather than detailed testing."
      ),
      lesson(
        "cpa-aud-m8-l3",
        "Attestation engagements (SSAE)",
        45,
        [
          "Apply the attestation standards.",
          "Distinguish examination, review and AUP.",
        ],
        [
          "Attestation covers subject matter other than historical statements.",
          "Examinations give reasonable assurance; reviews limited.",
          "Agreed-upon procedures give no assurance—findings only.",
        ],
        [
          "How does an AUP engagement report?",
          "What subject matter can attestation cover?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m8-l4",
        "Agreed-upon procedures",
        35,
        [
          "Perform agreed-upon procedures.",
          "Report findings without assurance.",
        ],
        [
          "The engaging party agrees the procedures.",
          "The report lists procedures and findings.",
          "No opinion or conclusion is expressed.",
        ],
        [
          "Who determines the procedures in an AUP engagement?",
          "What does an AUP report contain?",
        ],
        undefined
      ),
      lesson(
        "cpa-aud-m8-l5",
        "Reporting on service organizations (SOC)",
        45,
        [
          "Distinguish SOC 1, SOC 2 and SOC 3.",
          "Compare Type 1 and Type 2 reports.",
        ],
        [
          "SOC 1 addresses controls over financial reporting.",
          "SOC 2 addresses trust-services criteria (security, etc.).",
          "Type 2 covers operating effectiveness over a period.",
        ],
        [
          "How do SOC 1 and SOC 2 differ in focus?",
          "What does a Type 2 report add over Type 1?",
        ],
        "A user auditor relies on a service organization's SOC 1 Type 2 report to gain evidence about controls over the client's payroll processing."
      ),
    ],
    frameworksAndFormulas: [
      "Assurance ladder: audit (reasonable) > review (limited) > compilation/AUP (none).",
      "SSARS: preparation, compilation, review.",
      "SOC 1 (financial reporting) vs SOC 2 (trust services); Type 1 (point in time) vs Type 2 (period).",
    ],
    commonTraps: [
      "Confusing review (limited) with audit (reasonable) assurance.",
      "Assuming compilations require independence.",
      "Mixing up SOC 1 and SOC 2 scope.",
    ],
    examTechnique: [
      "Identify the assurance level before choosing procedures/report.",
      "Match SSARS/SSAE standard to the engagement.",
      "Distinguish SOC report types.",
    ],
    practicePlan: [
      "Compare engagement types in an assurance table.",
      "Draft a review report.",
      "Match SOC report types to user needs.",
    ],
    furtherReading: [
      "AICPA SSARS (AR-C sections); SSAE (AT-C sections).",
      "AICPA SOC reporting guidance.",
    ],
  }),

  // ===================================================================
  // FAR — Financial Accounting & Reporting
  // ===================================================================
  courseware({
    moduleId: "cpa-far-m1",
    examId: "cpa",
    levelId: "far",
    title: "Conceptual framework & financial reporting standards",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers the FASB conceptual framework, the standard-setting environment, qualitative characteristics of useful information, elements of financial statements, and the general-purpose financial statements and notes.",
    whyItMatters:
      "The conceptual framework underpins every accounting standard. A firm grasp of the objectives and qualitative characteristics helps candidates reason through unfamiliar problems.",
    learningOutcomes: [
      "Describe the FASB conceptual framework and standard-setting process.",
      "Explain the objective and qualitative characteristics of financial reporting.",
      "Identify the elements of financial statements.",
      "Describe the general-purpose financial statements.",
      "Explain recognition and measurement concepts.",
      "Apply the notes and disclosure requirements.",
    ],
    syllabusAreas: [
      area("Framework", [
        "Objective of financial reporting",
        "Qualitative characteristics",
        "Elements and recognition",
      ], "FAR Area I 25–35%"),
      area("Standard setting", [
        "FASB and the Codification",
        "SEC role",
        "IFRS vs US GAAP overview",
      ]),
      area("Financial statements", [
        "Full set of statements",
        "Notes and disclosures",
        "Comprehensive income",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m1-l1",
        "The conceptual framework",
        45,
        [
          "Explain the objective of financial reporting.",
          "Describe the qualitative characteristics.",
        ],
        [
          "The objective is decision-useful information for capital providers.",
          "Relevance and faithful representation are fundamental.",
          "Comparability, verifiability, timeliness and understandability enhance usefulness.",
        ],
        [
          "What are the two fundamental qualitative characteristics?",
          "What is the objective of general-purpose financial reporting?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m1-l2",
        "Elements and recognition",
        45,
        [
          "Identify the elements of financial statements.",
          "Apply recognition and measurement concepts.",
        ],
        [
          "Elements include assets, liabilities, equity, revenues and expenses.",
          "Recognition requires meeting the definition and being measurable.",
          "Measurement bases include historical cost and fair value.",
        ],
        [
          "When is an item recognized in the statements?",
          "What measurement bases does GAAP use?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m1-l3",
        "The standard-setting environment",
        40,
        [
          "Describe FASB and the Codification.",
          "Explain the SEC's role.",
        ],
        [
          "The Codification is the single source of US GAAP.",
          "The SEC has legal authority but defers to FASB.",
          "Due process governs new standards.",
        ],
        [
          "What is the authoritative source of US GAAP?",
          "How do the SEC and FASB interact?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m1-l4",
        "The full set of financial statements",
        45,
        [
          "Describe the required financial statements.",
          "Explain comprehensive income.",
        ],
        [
          "The set includes balance sheet, income statement, comprehensive income, cash flows and equity.",
          "OCI captures items bypassing net income.",
          "Notes are an integral part of the statements.",
        ],
        [
          "What items appear in other comprehensive income?",
          "Why are notes integral to the statements?",
        ],
        "Unrealized gains on available-for-sale debt securities are reported in OCI, not net income, until realized."
      ),
      lesson(
        "cpa-far-m1-l5",
        "Notes and disclosures",
        40,
        [
          "Apply disclosure requirements.",
          "Explain the role of significant accounting policies.",
        ],
        [
          "Disclosures provide context and detail beyond the face statements.",
          "Significant accounting policies are disclosed first.",
          "Materiality governs disclosure decisions.",
        ],
        [
          "Why disclose significant accounting policies?",
          "How does materiality affect disclosure?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Fundamental characteristics: relevance + faithful representation.",
      "Enhancing: comparability, verifiability, timeliness, understandability.",
      "Elements: assets, liabilities, equity, revenues, expenses, gains, losses.",
      "Comprehensive income = net income + OCI.",
    ],
    commonTraps: [
      "Confusing fundamental and enhancing qualitative characteristics.",
      "Placing OCI items in net income.",
      "Treating the SEC as the day-to-day standard setter.",
    ],
    examTechnique: [
      "Reason from the framework when a standard is unfamiliar.",
      "Separate net income from OCI.",
      "Recall the Codification as the single GAAP source.",
    ],
    practicePlan: [
      "Memorise the qualitative characteristics hierarchy.",
      "Classify items as net income vs OCI.",
      "Review required-disclosure lists.",
    ],
    furtherReading: [
      "FASB Conceptual Framework (Concepts Statements).",
      "FASB Accounting Standards Codification.",
    ],
  }),
  courseware({
    moduleId: "cpa-far-m2",
    examId: "cpa",
    levelId: "far",
    title: "Income statement, balance sheet & cash flows",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers the preparation and analysis of the income statement, balance sheet and statement of cash flows, including classification, discontinued operations, and the direct and indirect methods.",
    whyItMatters:
      "These core statements are the output of the accounting process and the input to analysis. Mastering their preparation and interrelationships is fundamental to FAR.",
    learningOutcomes: [
      "Prepare a multi-step income statement.",
      "Classify items on the balance sheet.",
      "Prepare the statement of cash flows (direct and indirect).",
      "Account for discontinued operations.",
      "Reconcile net income to operating cash flow.",
      "Analyse the interrelationships among the statements.",
    ],
    syllabusAreas: [
      area("Income statement", [
        "Multi-step format",
        "Discontinued operations",
        "Comprehensive income",
      ], "FAR Area II"),
      area("Balance sheet", [
        "Classification and presentation",
        "Current vs noncurrent",
        "Disclosures",
      ]),
      area("Cash flows", [
        "Operating, investing, financing",
        "Direct vs indirect methods",
        "Noncash disclosures",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m2-l1",
        "The income statement",
        50,
        [
          "Prepare a multi-step income statement.",
          "Account for discontinued operations.",
        ],
        [
          "The multi-step format separates operating from non-operating items.",
          "Discontinued operations are reported net of tax, separately.",
          "Unusual or infrequent items are shown within continuing operations.",
        ],
        [
          "How are discontinued operations presented?",
          "What distinguishes operating from non-operating items?",
        ],
        "A component sold during the year that represents a strategic shift is reported as discontinued operations, net of tax, below income from continuing operations."
      ),
      lesson(
        "cpa-far-m2-l2",
        "The balance sheet",
        45,
        [
          "Classify assets and liabilities.",
          "Present current and noncurrent items.",
        ],
        [
          "Classification separates current from noncurrent.",
          "The balance sheet reflects the accounting equation.",
          "Disclosures explain measurement and restrictions.",
        ],
        [
          "How is the current/noncurrent split determined?",
          "What does the balance sheet reflect at a point in time?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m2-l3",
        "Cash flows — indirect method",
        50,
        [
          "Prepare operating cash flow using the indirect method.",
          "Adjust net income for non-cash and working-capital items.",
        ],
        [
          "Start with net income and add back non-cash charges.",
          "Adjust for changes in working capital.",
          "Gains/losses on asset sales are reclassified to investing.",
        ],
        [
          "How does an increase in inventory affect operating cash flow?",
          "Why remove a gain on sale from operating cash flow?",
        ],
        "Net income of $100 with $20 depreciation, a $15 increase in receivables and a $10 gain on equipment sale yields operating cash flow of 100 + 20 − 15 − 10 = $95."
      ),
      lesson(
        "cpa-far-m2-l4",
        "Cash flows — direct method and classification",
        45,
        [
          "Prepare operating cash flow using the direct method.",
          "Classify investing and financing activities.",
        ],
        [
          "The direct method lists cash receipts and payments.",
          "Investing covers long-term assets; financing covers capital and debt.",
          "Interest paid/received classification differs under IFRS.",
        ],
        [
          "How do the direct and indirect methods differ?",
          "How are dividends paid classified?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m2-l5",
        "Statement interrelationships",
        40,
        [
          "Explain how the statements link.",
          "Use articulation to check consistency.",
        ],
        [
          "Net income flows to retained earnings and to cash-flow reconciliation.",
          "Ending cash ties to the balance sheet.",
          "Articulation is a powerful error check.",
        ],
        [
          "How does net income link the statements?",
          "Why does articulation help detect errors?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "CFO (indirect) = NI + non-cash charges − gains + losses − ΔNWC.",
      "Assets = Liabilities + Equity.",
      "Ending RE = Beginning RE + NI − dividends.",
      "Discontinued operations shown net of tax, separately.",
    ],
    commonTraps: [
      "Leaving gains/losses on asset sales in operating cash flow.",
      "Misclassifying interest and dividends across sections.",
      "Reporting discontinued operations gross of tax.",
    ],
    examTechnique: [
      "Build the indirect cash flow methodically from net income.",
      "Classify each cash flow into the correct section.",
      "Use articulation to sanity-check TBS answers.",
    ],
    practicePlan: [
      "Prepare a full cash-flow statement from a trial balance.",
      "Classify a list of transactions by section.",
      "Reconcile net income to operating cash flow.",
    ],
    furtherReading: [
      "FASB ASC 205, 210, 225, 230.",
      "FAR review — financial statement preparation.",
    ],
  }),
  courseware({
    moduleId: "cpa-far-m3",
    examId: "cpa",
    levelId: "far",
    title: "Revenue recognition & leases",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers the five-step revenue-recognition model (ASC 606) and lease accounting for lessees and lessors (ASC 842), including recognition, measurement and disclosure.",
    whyItMatters:
      "Revenue and leases are high-frequency, high-judgement areas that were recently overhauled; they are heavily tested and central to financial statements.",
    learningOutcomes: [
      "Apply the five-step revenue-recognition model.",
      "Identify performance obligations and allocate the transaction price.",
      "Recognize revenue over time vs at a point in time.",
      "Classify and measure leases for lessees.",
      "Classify and account for leases for lessors.",
      "Apply the required revenue and lease disclosures.",
    ],
    syllabusAreas: [
      area("Revenue (ASC 606)", [
        "Five-step model",
        "Variable consideration and allocation",
        "Contract modifications",
      ], "FAR Area II"),
      area("Lessee accounting (ASC 842)", [
        "Finance vs operating lease",
        "Right-of-use asset and liability",
        "Subsequent measurement",
      ]),
      area("Lessor accounting", [
        "Sales-type, direct financing, operating",
        "Recognition and measurement",
        "Disclosures",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m3-l1",
        "The five-step revenue model",
        55,
        [
          "Apply the five-step model.",
          "Identify performance obligations.",
        ],
        [
          "Steps: identify contract, obligations, price, allocate, recognize.",
          "Distinct goods/services are separate performance obligations.",
          "Revenue is recognized as obligations are satisfied.",
        ],
        [
          "What are the five steps of ASC 606?",
          "When is a good or service a separate performance obligation?",
        ],
        "A contract bundling a machine and a year of servicing has two performance obligations; the transaction price is allocated between them by standalone selling price."
      ),
      lesson(
        "cpa-far-m3-l2",
        "Transaction price and allocation",
        50,
        [
          "Determine the transaction price.",
          "Allocate price across obligations.",
        ],
        [
          "Variable consideration is estimated and constrained.",
          "Price is allocated by relative standalone selling prices.",
          "Significant financing components are separated.",
        ],
        [
          "How is variable consideration constrained?",
          "How is the transaction price allocated?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m3-l3",
        "Timing of revenue recognition",
        45,
        [
          "Distinguish over-time and point-in-time recognition.",
          "Apply the over-time criteria.",
        ],
        [
          "Over-time recognition requires meeting specific criteria.",
          "Point-in-time is recognized when control transfers.",
          "Input/output methods measure progress over time.",
        ],
        [
          "What criteria allow over-time recognition?",
          "When does control transfer at a point in time?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m3-l4",
        "Lessee accounting",
        50,
        [
          "Classify finance vs operating leases.",
          "Measure the right-of-use asset and liability.",
        ],
        [
          "Lessees recognize a right-of-use asset and lease liability for most leases.",
          "Finance leases front-load expense; operating leases are straight-line.",
          "The liability is the present value of lease payments.",
        ],
        [
          "How does expense recognition differ between finance and operating leases?",
          "How is the lease liability measured initially?",
        ],
        "A five-year lease with $10,000 annual payments discounted at 6% records an initial lease liability equal to the present value of those payments, with a matching right-of-use asset."
      ),
      lesson(
        "cpa-far-m3-l5",
        "Lessor accounting",
        45,
        [
          "Classify lessor leases.",
          "Account for sales-type and operating leases.",
        ],
        [
          "Lessors classify as sales-type, direct financing or operating.",
          "Sales-type leases recognize selling profit at commencement.",
          "Operating leases keep the asset on the lessor's books.",
        ],
        [
          "How does a sales-type lease differ from an operating lease for the lessor?",
          "When does a lessor recognize selling profit?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "ASC 606 five steps: contract → obligations → price → allocate → recognize.",
      "Lease liability = PV of lease payments.",
      "Right-of-use asset = lease liability + initial direct costs + prepayments − incentives.",
      "Finance lease: front-loaded expense; operating: straight-line.",
    ],
    commonTraps: [
      "Failing to separate distinct performance obligations.",
      "Forgetting the constraint on variable consideration.",
      "Confusing lessee finance vs operating expense patterns.",
    ],
    examTechnique: [
      "Walk through all five revenue steps explicitly.",
      "Compute lease liability as a present value.",
      "Identify lease classification before measurement.",
    ],
    practicePlan: [
      "Work multi-obligation revenue TBSs.",
      "Prepare a lessee amortization schedule.",
      "Classify lessor leases in scenarios.",
    ],
    furtherReading: [
      "FASB ASC 606 (Revenue) and ASC 842 (Leases).",
      "FAR review — revenue and leases.",
    ],
  }),
  courseware({
    moduleId: "cpa-far-m4",
    examId: "cpa",
    levelId: "far",
    title: "Investments, business combinations & consolidations",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Covers accounting for debt and equity investments, the equity method, business combinations under the acquisition method, and the preparation of consolidated financial statements including non-controlling interests.",
    whyItMatters:
      "Investments and consolidations are complex, judgement-heavy and frequently tested; they determine how investees and subsidiaries are reflected in the reporting entity.",
    learningOutcomes: [
      "Classify and measure debt and equity investments.",
      "Apply the equity method for significant influence.",
      "Apply the acquisition method to business combinations.",
      "Measure goodwill and non-controlling interest.",
      "Prepare consolidated financial statements.",
      "Eliminate intercompany transactions.",
    ],
    syllabusAreas: [
      area("Investments", [
        "Debt: HTM, AFS, trading",
        "Equity securities and fair value",
        "Equity method",
      ], "FAR Area II"),
      area("Business combinations", [
        "Acquisition method",
        "Goodwill and bargain purchase",
        "Non-controlling interest",
      ]),
      area("Consolidations", [
        "Consolidation procedures",
        "Intercompany eliminations",
        "Variable interest entities",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m4-l1",
        "Debt and equity investments",
        50,
        [
          "Classify and measure debt investments.",
          "Account for equity securities.",
        ],
        [
          "Debt: HTM at amortized cost, AFS in OCI, trading in net income.",
          "Equity securities are generally measured at fair value through net income.",
          "Credit losses use the CECL model.",
        ],
        [
          "How are AFS unrealized gains reported?",
          "How are most equity securities measured?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m4-l2",
        "The equity method",
        50,
        [
          "Apply the equity method.",
          "Record the investor's share of investee results.",
        ],
        [
          "Significant influence (typically 20–50%) triggers the equity method.",
          "The investor records its share of investee income.",
          "Dividends reduce the investment carrying amount.",
        ],
        [
          "What ownership level suggests significant influence?",
          "How do dividends affect the investment account?",
        ],
        "A 30% investee earning $100,000 increases the investment by $30,000 (equity in earnings); a $10,000 dividend to the investor reduces it by $3,000 of that share."
      ),
      lesson(
        "cpa-far-m4-l3",
        "Business combinations",
        50,
        [
          "Apply the acquisition method.",
          "Measure goodwill and non-controlling interest.",
        ],
        [
          "Identifiable assets and liabilities are measured at fair value.",
          "Goodwill = consideration + NCI − fair value of net identifiable assets.",
          "A bargain purchase produces a gain.",
        ],
        [
          "How is goodwill computed?",
          "What happens in a bargain purchase?",
        ],
        "Paying $900,000 for 100% of a company with $800,000 fair value of net identifiable assets creates $100,000 of goodwill."
      ),
      lesson(
        "cpa-far-m4-l4",
        "Consolidation procedures",
        45,
        [
          "Prepare consolidated statements.",
          "Present non-controlling interest.",
        ],
        [
          "Consolidation combines parent and subsidiary line by line.",
          "NCI is presented within equity.",
          "The investment account is eliminated against subsidiary equity.",
        ],
        [
          "Where is non-controlling interest presented?",
          "What is eliminated in consolidation?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m4-l5",
        "Intercompany eliminations and VIEs",
        45,
        [
          "Eliminate intercompany transactions.",
          "Identify variable interest entities.",
        ],
        [
          "Intercompany sales, profits and balances are eliminated.",
          "Unrealized intercompany profit in ending inventory is deferred.",
          "The primary beneficiary consolidates a VIE.",
        ],
        [
          "Why eliminate unrealized intercompany profit?",
          "Who consolidates a variable interest entity?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Goodwill = consideration transferred + NCI fair value − FV of net identifiable assets.",
      "Equity method: investment ± share of income − dividends received.",
      "Debt classification: HTM (amortized cost), AFS (OCI), trading (net income).",
      "Consolidation eliminates the investment against subsidiary equity.",
    ],
    commonTraps: [
      "Recording AFS gains in net income instead of OCI.",
      "Forgetting to defer unrealized intercompany profit.",
      "Omitting non-controlling interest from equity.",
    ],
    examTechnique: [
      "Compute goodwill with the full formula including NCI.",
      "Track the equity-method carrying amount step by step.",
      "Perform eliminations before presenting consolidated totals.",
    ],
    practicePlan: [
      "Work an equity-method rollforward.",
      "Compute goodwill and NCI in a combination.",
      "Prepare a simple consolidation with eliminations.",
    ],
    furtherReading: [
      "FASB ASC 320, 321, 323, 805, 810.",
      "FAR review — investments and consolidations.",
    ],
  }),
  courseware({
    moduleId: "cpa-far-m5",
    examId: "cpa",
    levelId: "far",
    title: "Pensions, contingencies & fair value",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers defined-benefit pension accounting, other post-employment benefits, loss contingencies and provisions, and the fair-value measurement framework and hierarchy.",
    whyItMatters:
      "These areas involve significant estimates and judgement and appear regularly on the exam; understanding measurement and disclosure is essential for faithful reporting.",
    learningOutcomes: [
      "Compute pension expense components.",
      "Measure the funded status of a defined-benefit plan.",
      "Account for loss contingencies and provisions.",
      "Apply the fair-value measurement framework.",
      "Classify inputs within the fair-value hierarchy.",
      "Apply required disclosures for each area.",
    ],
    syllabusAreas: [
      area("Pensions & OPEB", [
        "Components of net periodic pension cost",
        "Funded status",
        "Actuarial gains/losses and OCI",
      ], "FAR Area II"),
      area("Contingencies", [
        "Probable, reasonably possible, remote",
        "Recognition vs disclosure",
        "Warranties and litigation",
      ]),
      area("Fair value", [
        "Definition and framework",
        "Level 1/2/3 hierarchy",
        "Valuation techniques",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m5-l1",
        "Pension expense and funded status",
        55,
        [
          "Compute net periodic pension cost.",
          "Measure funded status.",
        ],
        [
          "Cost components: service cost, interest cost, expected return, amortizations.",
          "Funded status = plan assets − projected benefit obligation.",
          "Actuarial gains/losses may be recognized in OCI.",
        ],
        [
          "What are the components of net periodic pension cost?",
          "How is funded status computed?",
        ],
        "With service cost $50, interest cost $30, expected return $25 and $5 amortization, net periodic pension cost = 50 + 30 − 25 + 5 = $60."
      ),
      lesson(
        "cpa-far-m5-l2",
        "Other post-employment benefits",
        40,
        [
          "Account for OPEB.",
          "Contrast OPEB with pension accounting.",
        ],
        [
          "OPEB uses a similar accrual framework.",
          "The obligation accrues over the service period.",
          "Disclosures parallel pension disclosures.",
        ],
        [
          "How does OPEB accounting resemble pensions?",
          "Over what period does the OPEB obligation accrue?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m5-l3",
        "Loss contingencies",
        50,
        [
          "Classify contingencies by likelihood.",
          "Determine recognition vs disclosure.",
        ],
        [
          "Accrue when probable and reasonably estimable.",
          "Disclose when reasonably possible.",
          "Remote contingencies generally need no action.",
        ],
        [
          "When must a loss contingency be accrued?",
          "How is a reasonably possible loss treated?",
        ],
        "A probable litigation loss estimated at $2 million is accrued as a liability and expense; a reasonably possible loss is disclosed but not accrued."
      ),
      lesson(
        "cpa-far-m5-l4",
        "Fair-value measurement",
        45,
        [
          "Apply the fair-value definition and framework.",
          "Select valuation techniques.",
        ],
        [
          "Fair value is an exit price in an orderly transaction.",
          "Techniques: market, income and cost approaches.",
          "The measurement assumes the principal (or most advantageous) market.",
        ],
        [
          "What is the definition of fair value?",
          "What are the three valuation approaches?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m5-l5",
        "The fair-value hierarchy",
        40,
        [
          "Classify inputs into Levels 1, 2 and 3.",
          "Explain the disclosure implications.",
        ],
        [
          "Level 1: quoted prices in active markets.",
          "Level 2: observable inputs other than Level 1.",
          "Level 3: unobservable inputs.",
        ],
        [
          "What distinguishes Level 2 from Level 3 inputs?",
          "Why do Level 3 measurements require more disclosure?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Net periodic pension cost = service + interest − expected return ± amortizations.",
      "Funded status = plan assets − PBO.",
      "Contingency: accrue if probable + estimable; disclose if reasonably possible.",
      "Fair-value hierarchy: Level 1 (quoted), Level 2 (observable), Level 3 (unobservable).",
    ],
    commonTraps: [
      "Netting expected return incorrectly in pension cost.",
      "Accruing a merely reasonably possible loss.",
      "Misclassifying fair-value inputs across levels.",
    ],
    examTechnique: [
      "List and sum pension cost components carefully.",
      "Apply the probable/estimable test to contingencies.",
      "Classify inputs by observability for the hierarchy.",
    ],
    practicePlan: [
      "Compute pension cost and funded status.",
      "Classify a set of contingencies.",
      "Assign fair-value inputs to hierarchy levels.",
    ],
    furtherReading: [
      "FASB ASC 715, 450, 820.",
      "FAR review — pensions, contingencies, fair value.",
    ],
  }),
  courseware({
    moduleId: "cpa-far-m6",
    examId: "cpa",
    levelId: "far",
    title: "Debt, equity & EPS",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers accounting for bonds and notes payable, debt issuance and extinguishment, stockholders' equity transactions, stock compensation, and basic and diluted earnings per share.",
    whyItMatters:
      "Financing transactions and EPS drive key metrics used by analysts and investors; correct measurement affects the income statement, balance sheet and per-share data.",
    learningOutcomes: [
      "Account for bonds issued at par, premium and discount.",
      "Apply the effective-interest method.",
      "Account for debt extinguishment and modifications.",
      "Record common and preferred stock transactions.",
      "Account for share-based compensation.",
      "Compute basic and diluted EPS.",
    ],
    syllabusAreas: [
      area("Debt", [
        "Bond issuance and amortization",
        "Effective-interest method",
        "Extinguishment and modification",
      ], "FAR Area II"),
      area("Equity", [
        "Common and preferred stock",
        "Treasury stock and dividends",
        "Share-based compensation",
      ]),
      area("EPS", [
        "Basic EPS",
        "Diluted EPS (if-converted, treasury stock)",
        "Antidilution",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m6-l1",
        "Bond issuance and amortization",
        50,
        [
          "Account for bonds at par, premium and discount.",
          "Apply the effective-interest method.",
        ],
        [
          "Discount arises when the coupon is below market yield.",
          "Interest expense = carrying value × market rate.",
          "Amortization moves carrying value toward par.",
        ],
        [
          "Why is interest expense above the coupon for a discount bond?",
          "How does amortization affect carrying value?",
        ],
        "A $100,000 bond issued at $96,000 records first-period interest expense of $96,000 × market rate, exceeding the cash coupon and amortizing the discount."
      ),
      lesson(
        "cpa-far-m6-l2",
        "Debt extinguishment and modification",
        45,
        [
          "Account for early extinguishment.",
          "Distinguish modification from extinguishment.",
        ],
        [
          "A gain/loss on extinguishment is the difference from carrying value.",
          "Substantial modifications are treated as extinguishments.",
          "The 10% cash-flow test guides the determination.",
        ],
        [
          "How is a gain/loss on extinguishment computed?",
          "When is a modification treated as an extinguishment?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m6-l3",
        "Stockholders' equity",
        45,
        [
          "Record stock issuance, treasury stock and dividends.",
          "Distinguish types of dividends.",
        ],
        [
          "Treasury stock reduces equity (cost or par method).",
          "Cash dividends reduce retained earnings on declaration.",
          "Stock dividends capitalize retained earnings.",
        ],
        [
          "How does a stock dividend differ from a cash dividend?",
          "How is treasury stock presented?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m6-l4",
        "Share-based compensation",
        45,
        [
          "Account for stock options and RSUs.",
          "Recognize compensation over the vesting period.",
        ],
        [
          "Fair value at grant date is recognized over vesting.",
          "Forfeitures are estimated or recognized as they occur.",
          "Equity-classified awards do not remeasure.",
        ],
        [
          "Over what period is stock compensation recognized?",
          "When is the grant-date fair value measured?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m6-l5",
        "Earnings per share",
        50,
        [
          "Compute basic EPS.",
          "Compute diluted EPS.",
        ],
        [
          "Basic EPS = (NI − preferred dividends)/weighted-average shares.",
          "Diluted EPS includes dilutive potential shares.",
          "Antidilutive securities are excluded.",
        ],
        [
          "How is the weighted-average share count computed?",
          "Why exclude antidilutive securities?",
        ],
        "With net income $500,000, preferred dividends $50,000 and 100,000 weighted-average shares, basic EPS = (500,000 − 50,000)/100,000 = $4.50."
      ),
    ],
    frameworksAndFormulas: [
      "Interest expense = carrying value × market (effective) rate.",
      "Basic EPS = (NI − preferred dividends)/weighted-average common shares.",
      "Diluted EPS uses if-converted and treasury-stock methods.",
      "Gain/loss on extinguishment = reacquisition price − carrying value.",
    ],
    commonTraps: [
      "Using the coupon rate instead of the market rate for interest expense.",
      "Including antidilutive securities in diluted EPS.",
      "Reducing retained earnings incorrectly for stock dividends.",
    ],
    examTechnique: [
      "Build a bond amortization schedule with the effective rate.",
      "Compute basic EPS before testing dilution.",
      "Apply the treasury-stock method for options.",
    ],
    practicePlan: [
      "Prepare a bond amortization schedule.",
      "Compute basic and diluted EPS with multiple securities.",
      "Record share-based compensation over vesting.",
    ],
    furtherReading: [
      "FASB ASC 470, 505, 718, 260.",
      "FAR review — debt, equity and EPS.",
    ],
  }),
  courseware({
    moduleId: "cpa-far-m7",
    examId: "cpa",
    levelId: "far",
    title: "Temporary differences & income taxes",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers accounting for income taxes under ASC 740: temporary and permanent differences, deferred tax assets and liabilities, valuation allowances, and the reconciliation of book and taxable income.",
    whyItMatters:
      "Income-tax accounting reconciles financial and tax reporting and involves significant judgement; it appears frequently and interacts with many other FAR topics.",
    learningOutcomes: [
      "Distinguish temporary and permanent differences.",
      "Compute deferred tax assets and liabilities.",
      "Apply the enacted-rate and valuation-allowance rules.",
      "Reconcile book income to taxable income.",
      "Account for uncertain tax positions.",
      "Present tax expense and deferred balances.",
    ],
    syllabusAreas: [
      area("Book-tax differences", [
        "Temporary vs permanent differences",
        "Deductible and taxable differences",
        "Reconciliation",
      ], "FAR Area II"),
      area("Deferred taxes", [
        "DTA and DTL measurement",
        "Enacted rates",
        "Valuation allowance",
      ]),
      area("Presentation & uncertainty", [
        "Total tax provision",
        "Uncertain tax positions",
        "Disclosures",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m7-l1",
        "Temporary and permanent differences",
        50,
        [
          "Distinguish temporary and permanent differences.",
          "Identify deductible vs taxable temporary differences.",
        ],
        [
          "Temporary differences reverse over time; permanent do not.",
          "Taxable temporary differences create deferred tax liabilities.",
          "Deductible temporary differences create deferred tax assets.",
        ],
        [
          "Which difference type creates a deferred tax liability?",
          "Why do permanent differences not create deferred taxes?",
        ],
        "Depreciation faster for tax than books creates a taxable temporary difference and a deferred tax liability that reverses in later years."
      ),
      lesson(
        "cpa-far-m7-l2",
        "Measuring deferred taxes",
        50,
        [
          "Compute DTAs and DTLs.",
          "Apply enacted tax rates.",
        ],
        [
          "Deferred taxes are measured at enacted future rates.",
          "DTA/DTL = temporary difference × enacted rate.",
          "Rate changes are recognized when enacted.",
        ],
        [
          "What rate is used to measure deferred taxes?",
          "How are enacted rate changes handled?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m7-l3",
        "Valuation allowance",
        40,
        [
          "Apply the valuation-allowance test.",
          "Assess the realizability of DTAs.",
        ],
        [
          "A valuation allowance reduces a DTA if realization is not more likely than not.",
          "Positive and negative evidence is weighed.",
          "The allowance is reassessed each period.",
        ],
        [
          "When is a valuation allowance recorded?",
          "What evidence is weighed for DTA realizability?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m7-l4",
        "The tax provision and reconciliation",
        45,
        [
          "Compute total income-tax expense.",
          "Reconcile book to taxable income.",
        ],
        [
          "Total tax expense = current + deferred.",
          "The effective tax rate differs from the statutory rate due to permanent items.",
          "The reconciliation explains the difference.",
        ],
        [
          "What are the components of total tax expense?",
          "Why does the effective rate differ from the statutory rate?",
        ],
        "Current tax on taxable income plus the change in deferred taxes equals total tax expense; permanent differences move the effective rate away from the statutory rate."
      ),
      lesson(
        "cpa-far-m7-l5",
        "Uncertain tax positions and presentation",
        40,
        [
          "Account for uncertain tax positions.",
          "Present deferred balances and disclosures.",
        ],
        [
          "A position is recognized if more likely than not to be sustained.",
          "The benefit is measured at the largest amount likely to be realized.",
          "Deferred tax balances are presented as noncurrent.",
        ],
        [
          "What recognition threshold applies to uncertain tax positions?",
          "How are deferred tax balances classified?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "DTL/DTA = temporary difference × enacted future tax rate.",
      "Total tax expense = current tax + Δ deferred taxes.",
      "Valuation allowance if DTA realization is not more likely than not.",
      "Uncertain positions: recognize if MLTN; measure at largest likely benefit.",
    ],
    commonTraps: [
      "Treating permanent differences as creating deferred taxes.",
      "Using the current rather than enacted future rate.",
      "Forgetting the valuation allowance for DTAs.",
    ],
    examTechnique: [
      "Classify each difference as temporary or permanent first.",
      "Apply the enacted future rate to temporary differences.",
      "Reconcile statutory to effective rate via permanent items.",
    ],
    practicePlan: [
      "Compute DTA/DTL from a schedule of differences.",
      "Build a book-to-tax reconciliation.",
      "Assess a valuation allowance scenario.",
    ],
    furtherReading: [
      "FASB ASC 740.",
      "FAR review — income taxes.",
    ],
  }),
  courseware({
    moduleId: "cpa-far-m8",
    examId: "cpa",
    levelId: "far",
    title: "State & local government accounting (GASB)",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers governmental accounting under GASB: fund accounting, the government-wide and fund financial statements, the measurement focuses and bases of accounting, and reconciliations between them.",
    whyItMatters:
      "Governmental accounting differs fundamentally from commercial GAAP and is a distinct, reliably tested FAR area; understanding fund structure and dual reporting is essential.",
    learningOutcomes: [
      "Describe the fund structure and fund categories.",
      "Contrast the measurement focus and basis of accounting.",
      "Prepare governmental fund financial statements.",
      "Prepare government-wide financial statements.",
      "Reconcile fund and government-wide statements.",
      "Account for typical governmental transactions.",
    ],
    syllabusAreas: [
      area("Fund accounting", [
        "Governmental, proprietary, fiduciary funds",
        "Fund categories and uses",
        "Budgetary accounting",
      ], "FAR Area III (state & local gov)"),
      area("Measurement & basis", [
        "Current financial resources vs economic resources",
        "Modified accrual vs accrual",
        "Revenue and expenditure recognition",
      ]),
      area("Financial statements", [
        "Fund statements",
        "Government-wide statements",
        "Reconciliations",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-far-m8-l1",
        "Fund structure",
        50,
        [
          "Describe the three fund categories.",
          "Identify the funds within each category.",
        ],
        [
          "Governmental funds include general, special revenue, capital projects, debt service, permanent.",
          "Proprietary funds include enterprise and internal service.",
          "Fiduciary funds hold resources for others.",
        ],
        [
          "What funds are in the governmental category?",
          "How do proprietary funds differ from governmental funds?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m8-l2",
        "Measurement focus and basis of accounting",
        50,
        [
          "Contrast the measurement focuses.",
          "Apply modified accrual and accrual bases.",
        ],
        [
          "Governmental funds use current financial resources and modified accrual.",
          "Government-wide and proprietary use economic resources and accrual.",
          "Modified accrual recognizes revenue when measurable and available.",
        ],
        [
          "What basis of accounting do governmental funds use?",
          "When is revenue recognized under modified accrual?",
        ],
        "Property taxes are recognized under modified accrual when measurable and available (collectible within the period or soon after), unlike full accrual which recognizes when levied."
      ),
      lesson(
        "cpa-far-m8-l3",
        "Governmental fund statements",
        45,
        [
          "Prepare governmental fund statements.",
          "Account for expenditures and encumbrances.",
        ],
        [
          "Fund statements report a balance sheet and a statement of revenues, expenditures and changes in fund balance.",
          "Encumbrances reserve budget for commitments.",
          "Capital outlays are expenditures, not assets, in fund statements.",
        ],
        [
          "Why are capital outlays expenditures in governmental funds?",
          "What is the purpose of encumbrance accounting?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m8-l4",
        "Government-wide statements",
        45,
        [
          "Prepare government-wide statements.",
          "Distinguish governmental and business-type activities.",
        ],
        [
          "Government-wide statements use full accrual.",
          "They report the statement of net position and activities.",
          "Capital assets and long-term debt appear here.",
        ],
        [
          "What statements comprise the government-wide reporting?",
          "Why do capital assets appear government-wide but not in governmental funds?",
        ],
        undefined
      ),
      lesson(
        "cpa-far-m8-l5",
        "Reconciliations",
        40,
        [
          "Reconcile fund to government-wide statements.",
          "Explain the reconciling items.",
        ],
        [
          "Reconciliations bridge different measurement focuses.",
          "Capital assets and long-term liabilities are key reconciling items.",
          "The reconciliation supports the dual reporting model.",
        ],
        [
          "What are common reconciling items between the statements?",
          "Why is a reconciliation necessary?",
        ],
        "Adding capital assets and subtracting long-term debt reconciles governmental fund balance to the government-wide net position of governmental activities."
      ),
    ],
    frameworksAndFormulas: [
      "Governmental funds: current financial resources + modified accrual.",
      "Government-wide/proprietary: economic resources + full accrual.",
      "Modified accrual revenue: measurable and available.",
      "Reconciliation adds capital assets, removes fund-only items, adds long-term debt.",
    ],
    commonTraps: [
      "Applying full accrual to governmental funds.",
      "Capitalizing assets in governmental fund statements.",
      "Confusing fund categories.",
    ],
    examTechnique: [
      "Identify the fund and its basis of accounting first.",
      "Recall 'measurable and available' for modified accrual revenue.",
      "Use reconciling items to bridge the two statement sets.",
    ],
    practicePlan: [
      "Classify funds and their bases of accounting.",
      "Prepare a governmental fund statement.",
      "Work a fund-to-government-wide reconciliation.",
    ],
    furtherReading: [
      "GASB Codification and Concepts Statements.",
      "FAR review — governmental accounting.",
    ],
  }),

  // ===================================================================
  // REG — Taxation & Regulation
  // ===================================================================
  courseware({
    moduleId: "cpa-reg-m1",
    examId: "cpa",
    levelId: "reg",
    title: "Ethics, tax procedures & taxpayer penalties",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 18,
    overview:
      "Covers professional responsibilities and ethics in tax practice (Circular 230, AICPA SSTS), tax return preparer responsibilities, taxpayer and preparer penalties, and IRS procedures and the appeals process.",
    whyItMatters:
      "Tax practitioners are bound by strict ethical and procedural rules; understanding penalties and procedures protects both the practitioner and the client and is reliably tested in REG.",
    learningOutcomes: [
      "Apply Circular 230 rules to tax practice.",
      "Apply the AICPA Statements on Standards for Tax Services.",
      "Identify preparer responsibilities and due-diligence rules.",
      "Compute and distinguish taxpayer and preparer penalties.",
      "Describe IRS audit, appeals and collection procedures.",
      "Explain the statute of limitations for assessment and refund.",
    ],
    syllabusAreas: [
      area("Ethics & responsibilities", [
        "Circular 230",
        "AICPA SSTS",
        "Preparer due diligence",
      ], "REG Area I 10–20%"),
      area("Penalties", [
        "Taxpayer penalties (accuracy, fraud)",
        "Preparer penalties",
        "Reasonable-cause defenses",
      ]),
      area("Procedures", [
        "Audit and appeals",
        "Statute of limitations",
        "Collection process",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m1-l1",
        "Circular 230 and tax ethics",
        45,
        [
          "Apply Circular 230 practice rules.",
          "Apply the AICPA SSTS.",
        ],
        [
          "Circular 230 governs practice before the IRS.",
          "The SSTS set standards for return positions and advice.",
          "A practitioner must not take a position lacking a realistic possibility of success without disclosure.",
        ],
        [
          "What does Circular 230 govern?",
          "What standard applies to undisclosed return positions?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m1-l2",
        "Preparer responsibilities and due diligence",
        40,
        [
          "Identify preparer responsibilities.",
          "Apply due-diligence requirements.",
        ],
        [
          "Preparers must sign and provide copies of returns.",
          "Due diligence applies to credits like the EITC.",
          "Preparers must not endorse or negotiate refund checks.",
        ],
        [
          "What due-diligence obligations apply to certain credits?",
          "What must a preparer provide to the client?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m1-l3",
        "Taxpayer penalties",
        45,
        [
          "Compute accuracy-related and fraud penalties.",
          "Apply reasonable-cause defenses.",
        ],
        [
          "The accuracy-related penalty is 20% of the underpayment.",
          "The civil fraud penalty is 75%.",
          "Reasonable cause and good faith can abate penalties.",
        ],
        [
          "What is the accuracy-related penalty rate?",
          "When can penalties be abated?",
        ],
        "A $10,000 underpayment due to negligence triggers a 20% accuracy-related penalty of $2,000, unless reasonable cause is shown."
      ),
      lesson(
        "cpa-reg-m1-l4",
        "Preparer penalties",
        40,
        [
          "Identify preparer penalties.",
          "Distinguish unreasonable positions from willful conduct.",
        ],
        [
          "Penalties apply for unreasonable positions and willful/reckless conduct.",
          "Higher penalties apply to willful understatement.",
          "Substantial-authority and disclosure standards matter.",
        ],
        [
          "What distinguishes an unreasonable position from willful conduct?",
          "How does disclosure affect preparer penalties?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m1-l5",
        "IRS procedures and statute of limitations",
        40,
        [
          "Describe audit, appeals and collection.",
          "Apply the statute of limitations.",
        ],
        [
          "The general assessment statute is three years.",
          "A substantial (25%) omission extends it to six years.",
          "No statute applies to fraud or unfiled returns.",
        ],
        [
          "What is the general statute of limitations for assessment?",
          "When does the six-year statute apply?",
        ],
        "A 25% or greater omission of gross income extends the assessment statute of limitations from three to six years."
      ),
    ],
    frameworksAndFormulas: [
      "Accuracy-related penalty = 20% of underpayment; civil fraud = 75%.",
      "Statute of limitations: 3 years general; 6 years for >25% omission; none for fraud/no return.",
      "Return-position standards: substantial authority, reasonable basis (with disclosure).",
    ],
    commonTraps: [
      "Confusing the 20% accuracy and 75% fraud penalties.",
      "Misremembering the statute-of-limitations periods.",
      "Overlooking disclosure's effect on penalty thresholds.",
    ],
    examTechnique: [
      "Match the penalty to the conduct described.",
      "Apply the correct statute-of-limitations period.",
      "Check whether a position was disclosed.",
    ],
    practicePlan: [
      "Work penalty-computation MCQs.",
      "Memorise statute-of-limitations periods.",
      "Review Circular 230 and SSTS standards.",
    ],
    furtherReading: [
      "Treasury Circular 230; AICPA SSTS.",
      "Internal Revenue Code penalty and procedure sections.",
    ],
  }),
  courseware({
    moduleId: "cpa-reg-m2",
    examId: "cpa",
    levelId: "reg",
    title: "Business law — contracts, agency & debtor-creditor",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 18,
    overview:
      "Covers the law of contracts (formation, performance, breach and remedies), agency relationships, and debtor-creditor relationships including suretyship, secured transactions and bankruptcy.",
    whyItMatters:
      "Business law affects nearly every commercial transaction a CPA encounters; understanding contract, agency and creditor rights supports sound advice and is reliably tested.",
    learningOutcomes: [
      "Explain contract formation, performance and breach.",
      "Apply remedies for breach of contract.",
      "Describe agency relationships and authority.",
      "Explain suretyship and creditor rights.",
      "Apply the rules of secured transactions (UCC Article 9).",
      "Compare bankruptcy chapters and priorities.",
    ],
    syllabusAreas: [
      area("Contracts", [
        "Offer, acceptance, consideration",
        "Statute of frauds and defenses",
        "Breach and remedies",
      ], "REG Area II 15–25%"),
      area("Agency", [
        "Formation and authority",
        "Duties of principal and agent",
        "Liability to third parties",
      ]),
      area("Debtor-creditor", [
        "Suretyship",
        "Secured transactions (UCC Article 9)",
        "Bankruptcy",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m2-l1",
        "Contract formation",
        45,
        [
          "Explain offer, acceptance and consideration.",
          "Apply the statute of frauds.",
        ],
        [
          "A valid contract needs offer, acceptance and consideration.",
          "The statute of frauds requires certain contracts in writing.",
          "Capacity and legality are also required.",
        ],
        [
          "What contracts must be in writing under the statute of frauds?",
          "What is consideration?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m2-l2",
        "Performance, breach and remedies",
        45,
        [
          "Distinguish types of breach.",
          "Apply contract remedies.",
        ],
        [
          "Material breach excuses the non-breaching party.",
          "Remedies include damages, specific performance and rescission.",
          "Damages aim to put the party in the position as if performed.",
        ],
        [
          "When is specific performance available?",
          "How are compensatory damages measured?",
        ],
        "If a seller breaches a contract to sell unique property, the buyer may seek specific performance because money damages are inadequate."
      ),
      lesson(
        "cpa-reg-m2-l3",
        "Agency",
        40,
        [
          "Describe agency formation and authority.",
          "Explain liability to third parties.",
        ],
        [
          "Authority may be actual (express/implied) or apparent.",
          "The principal is bound by the agent's authorized acts.",
          "Agents owe fiduciary duties to principals.",
        ],
        [
          "How does apparent authority bind a principal?",
          "What fiduciary duties does an agent owe?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m2-l4",
        "Suretyship and secured transactions",
        45,
        [
          "Explain suretyship rights.",
          "Apply UCC Article 9 attachment and perfection.",
        ],
        [
          "A surety guarantees another's obligation.",
          "Attachment creates an enforceable security interest.",
          "Perfection (often by filing) establishes priority.",
        ],
        [
          "What are the requirements for attachment?",
          "How is a security interest perfected?",
        ],
        "A lender perfects a security interest in inventory by filing a financing statement, gaining priority over later unperfected creditors."
      ),
      lesson(
        "cpa-reg-m2-l5",
        "Bankruptcy",
        40,
        [
          "Compare bankruptcy chapters.",
          "Apply the priority of claims.",
        ],
        [
          "Chapter 7 liquidates; Chapter 11 reorganizes; Chapter 13 is an individual plan.",
          "Secured claims are paid first from collateral.",
          "Priority unsecured claims precede general unsecured claims.",
        ],
        [
          "How do Chapter 7 and Chapter 11 differ?",
          "What is the priority of claims in bankruptcy?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Valid contract = offer + acceptance + consideration (+ capacity + legality).",
      "Secured transaction: attachment → perfection → priority.",
      "Bankruptcy order: secured → priority unsecured → general unsecured → equity.",
      "Statute of frauds: MYLEGS (marriage, year+, land, executor, goods $500+, suretyship).",
    ],
    commonTraps: [
      "Confusing actual and apparent authority.",
      "Missing statute-of-frauds writing requirements.",
      "Misordering bankruptcy claim priorities.",
    ],
    examTechnique: [
      "Check each contract element systematically.",
      "Trace security interests through attachment and perfection.",
      "Apply the claim-priority ladder in bankruptcy questions.",
    ],
    practicePlan: [
      "Work contract-formation MCQs.",
      "Practise secured-transaction priority problems.",
      "Compare bankruptcy chapters in a table.",
    ],
    furtherReading: [
      "Uniform Commercial Code Articles 2 and 9.",
      "REG review — business law.",
    ],
  }),
  courseware({
    moduleId: "cpa-reg-m3",
    examId: "cpa",
    levelId: "reg",
    title: "Business structure — partnerships, corporations & LLCs",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 18,
    overview:
      "Covers the legal characteristics of business entities—sole proprietorships, partnerships, LLCs and corporations—including formation, governance, liability, and dissolution from a legal (non-tax) perspective.",
    whyItMatters:
      "Entity choice affects liability, governance and continuity. Understanding the legal features complements the tax treatment tested elsewhere in REG.",
    learningOutcomes: [
      "Compare the legal features of business entities.",
      "Explain formation and governance requirements.",
      "Analyse owner liability across entity types.",
      "Describe partner rights and duties.",
      "Explain corporate governance and shareholder rights.",
      "Describe dissolution and winding up.",
    ],
    syllabusAreas: [
      area("Entity comparison", [
        "Sole proprietorship and general partnership",
        "Limited partnership and LLC",
        "Corporation (C and S legal form)",
      ], "REG Area II"),
      area("Governance & liability", [
        "Management and control",
        "Owner liability",
        "Fiduciary duties",
      ]),
      area("Formation & dissolution", [
        "Formation requirements",
        "Continuity of life",
        "Dissolution and winding up",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m3-l1",
        "Comparing entity types",
        45,
        [
          "Compare liability and continuity across entities.",
          "Match entity features to business needs.",
        ],
        [
          "Corporations and LLCs provide limited liability.",
          "General partners have unlimited liability.",
          "Corporations have perpetual existence.",
        ],
        [
          "Which entities provide limited liability?",
          "How does continuity differ across entities?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m3-l2",
        "Partnerships",
        45,
        [
          "Explain partner rights and duties.",
          "Analyse partnership liability.",
        ],
        [
          "Partners share management and profits by default equally.",
          "General partners are jointly and severally liable.",
          "Partners owe fiduciary duties to each other.",
        ],
        [
          "How are profits shared by default in a general partnership?",
          "What liability do general partners bear?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m3-l3",
        "Limited partnerships and LLCs",
        40,
        [
          "Describe LP and LLC structures.",
          "Explain limited-partner and member liability.",
        ],
        [
          "Limited partners have liability limited to their investment.",
          "LLC members enjoy limited liability with flexible management.",
          "Loss of limited status can occur if a limited partner manages.",
        ],
        [
          "How can a limited partner lose limited liability?",
          "What flexibility does an LLC offer?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m3-l4",
        "Corporations and governance",
        45,
        [
          "Explain corporate formation and governance.",
          "Describe shareholder rights.",
        ],
        [
          "Corporations are formed by filing articles of incorporation.",
          "The board governs; officers manage; shareholders elect the board.",
          "Shareholders have voting, inspection and derivative-suit rights.",
        ],
        [
          "What are the steps to form a corporation?",
          "What rights do shareholders have?",
        ],
        "Shareholders may bring a derivative suit on behalf of the corporation when directors fail to act against wrongdoing."
      ),
      lesson(
        "cpa-reg-m3-l5",
        "Dissolution and winding up",
        40,
        [
          "Describe dissolution triggers.",
          "Explain winding up and distribution.",
        ],
        [
          "Dissolution can be voluntary or involuntary.",
          "Winding up settles obligations before distribution.",
          "Creditors are paid before owners on dissolution.",
        ],
        [
          "What triggers involuntary dissolution?",
          "Who is paid first on dissolution?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Limited liability: corporations, LLCs, limited partners.",
      "Unlimited liability: sole proprietors, general partners.",
      "Corporate structure: shareholders → board → officers.",
      "Dissolution priority: creditors before owners.",
    ],
    commonTraps: [
      "Assuming limited partners can manage without losing protection.",
      "Confusing legal form with tax classification.",
      "Overlooking fiduciary duties among partners.",
    ],
    examTechnique: [
      "Separate legal-form questions from tax-classification questions.",
      "Match liability to entity type.",
      "Trace governance roles in corporate questions.",
    ],
    practicePlan: [
      "Build an entity-comparison table.",
      "Work partnership-liability MCQs.",
      "Review corporate governance rights.",
    ],
    furtherReading: [
      "Model Business Corporation Act; Uniform Partnership Act.",
      "REG review — business structures.",
    ],
  }),
  courseware({
    moduleId: "cpa-reg-m4",
    examId: "cpa",
    levelId: "reg",
    title: "Federal taxation of property transactions",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers the tax treatment of property transactions: basis, amount realized, gain/loss recognition, capital vs ordinary character, depreciation recapture, and nonrecognition transactions such as like-kind exchanges.",
    whyItMatters:
      "Property transactions produce gains and losses that drive tax liability and planning; the rules on basis, character and recapture recur across individual and entity taxation.",
    learningOutcomes: [
      "Compute basis and amount realized.",
      "Determine recognized gain or loss.",
      "Classify gains as capital or ordinary.",
      "Apply Section 1231, 1245 and 1250 rules.",
      "Apply depreciation recapture.",
      "Apply nonrecognition rules (like-kind, involuntary conversion).",
    ],
    syllabusAreas: [
      area("Basis & realization", [
        "Cost, gift and inherited basis",
        "Amount realized",
        "Adjusted basis",
      ], "REG Area IV"),
      area("Character & recapture", [
        "Capital vs ordinary",
        "Section 1231 netting",
        "Section 1245/1250 recapture",
      ]),
      area("Nonrecognition", [
        "Like-kind exchanges (real property)",
        "Involuntary conversions",
        "Installment sales",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m4-l1",
        "Basis and amount realized",
        50,
        [
          "Compute basis under different acquisition modes.",
          "Compute amount realized and gain/loss.",
        ],
        [
          "Cost basis includes acquisition costs.",
          "Gift basis carries over (with special loss rules).",
          "Inherited property gets a stepped-up basis to fair value.",
        ],
        [
          "How is the basis of inherited property determined?",
          "What is the dual basis rule for gifts?",
        ],
        "Property inherited at a $500,000 fair value takes a stepped-up basis of $500,000, eliminating the decedent's unrealized appreciation for the heir."
      ),
      lesson(
        "cpa-reg-m4-l2",
        "Gain/loss recognition and character",
        50,
        [
          "Determine recognized gain or loss.",
          "Classify gains as capital or ordinary.",
        ],
        [
          "Capital assets exclude inventory and depreciable business property.",
          "Holding period determines long- vs short-term.",
          "Capital losses offset capital gains with limited ordinary offset.",
        ],
        [
          "What assets are excluded from capital-asset status?",
          "How much net capital loss can offset ordinary income for individuals?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m4-l3",
        "Section 1231 and depreciation recapture",
        50,
        [
          "Apply Section 1231 netting.",
          "Apply Section 1245 and 1250 recapture.",
        ],
        [
          "Net 1231 gains are capital; net 1231 losses are ordinary.",
          "Section 1245 recaptures depreciation as ordinary income.",
          "Section 1250 recaptures excess depreciation on real property.",
        ],
        [
          "Why is Section 1231 favorable to taxpayers?",
          "How does Section 1245 recapture work?",
        ],
        "Selling equipment for $30,000 with adjusted basis $20,000 and $15,000 of prior depreciation recaptures up to $10,000 gain as ordinary income under Section 1245."
      ),
      lesson(
        "cpa-reg-m4-l4",
        "Like-kind exchanges",
        45,
        [
          "Apply like-kind exchange rules.",
          "Compute realized and recognized gain and basis.",
        ],
        [
          "Like-kind exchange treatment applies only to real property held for business/investment.",
          "Boot received triggers recognition up to realized gain.",
          "Deferred gain reduces the new property's basis.",
        ],
        [
          "What property qualifies for like-kind exchange treatment?",
          "How does boot affect recognized gain?",
        ],
        "Exchanging investment land plus receiving $20,000 boot recognizes gain equal to the lesser of boot or realized gain, deferring the remainder into the new property's basis."
      ),
      lesson(
        "cpa-reg-m4-l5",
        "Involuntary conversions and installment sales",
        40,
        [
          "Apply involuntary-conversion deferral.",
          "Apply the installment method.",
        ],
        [
          "Involuntary conversions can defer gain if proceeds are reinvested.",
          "The installment method spreads gain over collection.",
          "Recapture is generally recognized in the year of sale.",
        ],
        [
          "When can gain from an involuntary conversion be deferred?",
          "How does the installment method recognize gain?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Realized gain = amount realized − adjusted basis.",
      "Section 1231: net gain → capital; net loss → ordinary.",
      "Section 1245 recapture = lesser of gain or accumulated depreciation.",
      "Like-kind: recognized gain = lesser of boot or realized gain.",
    ],
    commonTraps: [
      "Applying like-kind treatment to personal property (no longer eligible).",
      "Misapplying the dual-basis rule for gifts.",
      "Forgetting depreciation recapture before capital treatment.",
    ],
    examTechnique: [
      "Compute realized gain before determining recognition/character.",
      "Apply recapture before Section 1231 netting.",
      "Track basis carryover in nonrecognition transactions.",
    ],
    practicePlan: [
      "Work basis and gain/loss MCQs.",
      "Practise Section 1245/1250 recapture.",
      "Compute like-kind exchange gain and basis.",
    ],
    furtherReading: [
      "Internal Revenue Code §§ 1001, 1012, 1014, 1015, 1031, 1231, 1245, 1250.",
      "REG review — property transactions.",
    ],
  }),
  courseware({
    moduleId: "cpa-reg-m5",
    examId: "cpa",
    levelId: "reg",
    title: "Individual taxation — gross income & deductions",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers the computation of individual gross income, exclusions, adjustments (above-the-line deductions), itemized vs standard deductions, and the determination of adjusted gross income and taxable income.",
    whyItMatters:
      "Individual taxation is a large REG area; understanding what is included, excluded and deductible is foundational to computing individual tax liability.",
    learningOutcomes: [
      "Identify items included in and excluded from gross income.",
      "Compute adjustments to arrive at AGI.",
      "Compare itemized and standard deductions.",
      "Apply limitations on itemized deductions.",
      "Compute taxable income.",
      "Apply the qualified business income deduction.",
    ],
    syllabusAreas: [
      area("Gross income & exclusions", [
        "Inclusions (wages, interest, dividends)",
        "Exclusions (gifts, some fringe benefits)",
        "Timing of income",
      ], "REG Area V 22–32%"),
      area("Adjustments & deductions", [
        "Above-the-line adjustments",
        "Standard vs itemized",
        "Itemized deduction limits",
      ]),
      area("Taxable income", [
        "AGI to taxable income",
        "QBI deduction",
        "Filing status effects",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m5-l1",
        "Gross income inclusions and exclusions",
        50,
        [
          "Identify includible income.",
          "Identify statutory exclusions.",
        ],
        [
          "Gross income is all income from whatever source unless excluded.",
          "Gifts, inheritances and certain fringe benefits are excluded.",
          "Some items (municipal bond interest) are permanently excluded.",
        ],
        [
          "What is the default rule for gross income?",
          "Which common items are excluded?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m5-l2",
        "Adjustments to income (AGI)",
        45,
        [
          "Compute above-the-line adjustments.",
          "Arrive at adjusted gross income.",
        ],
        [
          "Adjustments reduce gross income to AGI.",
          "Examples include IRA and HSA contributions and student-loan interest.",
          "AGI drives many phase-outs and limits.",
        ],
        [
          "Why is AGI an important intermediate figure?",
          "What are examples of above-the-line adjustments?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m5-l3",
        "Itemized vs standard deduction",
        50,
        [
          "Compare itemized and standard deductions.",
          "Apply itemized-deduction limitations.",
        ],
        [
          "Taxpayers take the greater of itemized or standard.",
          "Itemized include medical (above a floor), SALT (capped), mortgage interest, charity.",
          "The SALT deduction is capped.",
        ],
        [
          "How do you decide between itemized and standard?",
          "What limits apply to state and local taxes?",
        ],
        "Medical expenses are deductible only to the extent they exceed 7.5% of AGI, so a taxpayer with $10,000 of expenses and $100,000 AGI deducts $2,500."
      ),
      lesson(
        "cpa-reg-m5-l4",
        "Computing taxable income",
        45,
        [
          "Compute taxable income from AGI.",
          "Apply the QBI deduction.",
        ],
        [
          "Taxable income = AGI − deductions − QBI deduction.",
          "The QBI deduction is up to 20% of qualified business income.",
          "Phase-outs apply for specified service businesses.",
        ],
        [
          "How is the QBI deduction computed at a high level?",
          "What limits the QBI deduction for high earners?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m5-l5",
        "Timing and character of income",
        40,
        [
          "Apply cash vs accrual timing for individuals.",
          "Distinguish ordinary and capital income.",
        ],
        [
          "Most individuals use the cash method.",
          "Constructive receipt accelerates income.",
          "Capital gains receive preferential rates.",
        ],
        [
          "What is constructive receipt?",
          "Why does income character matter for individuals?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Gross income − adjustments = AGI.",
      "AGI − (greater of standard or itemized) − QBI = taxable income.",
      "Medical deduction floor = 7.5% of AGI.",
      "QBI deduction up to 20% of qualified business income (with limits).",
    ],
    commonTraps: [
      "Confusing above-the-line adjustments with itemized deductions.",
      "Ignoring AGI-based floors and phase-outs.",
      "Forgetting the SALT cap.",
    ],
    examTechnique: [
      "Build the individual tax formula line by line.",
      "Apply AGI-based limits after computing AGI.",
      "Separate exclusions from deductions.",
    ],
    practicePlan: [
      "Compute AGI and taxable income in a TBS.",
      "Classify income items as included or excluded.",
      "Practise itemized-deduction limitation problems.",
    ],
    furtherReading: [
      "Internal Revenue Code §§ 61, 62, 63, 199A, 213.",
      "REG review — individual taxation.",
    ],
  }),
  courseware({
    moduleId: "cpa-reg-m6",
    examId: "cpa",
    levelId: "reg",
    title: "Individual taxation — credits, AMT & filing",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers individual tax credits, the alternative minimum tax, filing status and requirements, estimated taxes, and the computation of the final tax liability and any refund or balance due.",
    whyItMatters:
      "Credits and the AMT can significantly change the final tax owed; understanding them and filing mechanics completes the individual-tax computation tested in REG.",
    learningOutcomes: [
      "Distinguish refundable and nonrefundable credits.",
      "Compute common individual credits.",
      "Compute the alternative minimum tax.",
      "Determine filing status and requirements.",
      "Apply estimated-tax and withholding rules.",
      "Compute the final tax liability.",
    ],
    syllabusAreas: [
      area("Credits", [
        "Child tax credit and dependent care",
        "Education credits",
        "Refundable vs nonrefundable",
      ], "REG Area V"),
      area("AMT", [
        "AMT preferences and adjustments",
        "AMT exemption",
        "AMT vs regular tax",
      ]),
      area("Filing & payments", [
        "Filing status",
        "Estimated taxes",
        "Final liability",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m6-l1",
        "Tax credits",
        50,
        [
          "Distinguish refundable and nonrefundable credits.",
          "Compute common credits.",
        ],
        [
          "Credits reduce tax dollar-for-dollar.",
          "Refundable credits can generate a refund beyond tax.",
          "Credits phase out at higher income.",
        ],
        [
          "How do credits differ from deductions?",
          "What is a refundable credit?",
        ],
        "A $2,000 nonrefundable credit reduces a $1,500 tax to zero with no refund; a refundable credit would produce a $500 refund."
      ),
      lesson(
        "cpa-reg-m6-l2",
        "The alternative minimum tax",
        50,
        [
          "Compute AMT.",
          "Identify AMT preferences and adjustments.",
        ],
        [
          "AMT recomputes income with fewer preferences.",
          "The AMT exemption phases out at higher income.",
          "Taxpayers pay the higher of regular tax or AMT.",
        ],
        [
          "What items are added back for AMT?",
          "How is AMT liability determined?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m6-l3",
        "Filing status and requirements",
        40,
        [
          "Determine filing status.",
          "Apply dependency rules.",
        ],
        [
          "Filing status affects rates and standard deduction.",
          "Head of household requires a qualifying person.",
          "Dependency tests determine who can be claimed.",
        ],
        [
          "What qualifies a taxpayer for head-of-household status?",
          "What are the dependency tests?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m6-l4",
        "Estimated taxes and withholding",
        40,
        [
          "Apply estimated-tax rules.",
          "Avoid underpayment penalties.",
        ],
        [
          "Estimated payments are required when withholding is insufficient.",
          "Safe harbors avoid underpayment penalties.",
          "Higher-income taxpayers have a higher safe-harbor threshold.",
        ],
        [
          "What safe harbors avoid the underpayment penalty?",
          "When are estimated payments required?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m6-l5",
        "Final tax liability",
        40,
        [
          "Compute the final liability.",
          "Determine refund or balance due.",
        ],
        [
          "Final liability = tax − credits + other taxes.",
          "Payments and withholding are subtracted.",
          "The result is a refund or balance due.",
        ],
        [
          "How is the final tax liability computed?",
          "What determines a refund vs balance due?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Tax − nonrefundable credits + other taxes − payments − refundable credits = refund/(due).",
      "Pay the higher of regular tax or tentative minimum tax (AMT).",
      "Estimated-tax safe harbor: 90% current or 100%/110% prior-year tax.",
    ],
    commonTraps: [
      "Treating nonrefundable credits as refundable.",
      "Forgetting to compare regular tax with AMT.",
      "Misapplying the estimated-tax safe harbors.",
    ],
    examTechnique: [
      "Apply nonrefundable credits before refundable ones.",
      "Compute AMT separately and compare.",
      "Track payments and withholding to the final result.",
    ],
    practicePlan: [
      "Work credit-computation MCQs.",
      "Practise a simplified AMT computation.",
      "Compute a full final-liability TBS.",
    ],
    furtherReading: [
      "Internal Revenue Code §§ 24, 55, 6654.",
      "REG review — credits and AMT.",
    ],
  }),
  courseware({
    moduleId: "cpa-reg-m7",
    examId: "cpa",
    levelId: "reg",
    title: "Entity taxation — C-corps, S-corps & partnerships",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers the federal income taxation of C corporations, S corporations and partnerships, including formation, income computation, distributions, basis, and the tax consequences to owners.",
    whyItMatters:
      "Entity taxation is a substantial REG area; understanding the differences among entities and the flow-through mechanics is essential for advising businesses and owners.",
    learningOutcomes: [
      "Compute C-corporation taxable income and tax.",
      "Apply the rules for corporate distributions and E&P.",
      "Apply S-corporation eligibility and pass-through rules.",
      "Compute partner and shareholder basis.",
      "Apply partnership formation and distribution rules.",
      "Compare the tax consequences across entity types.",
    ],
    syllabusAreas: [
      area("C corporations", [
        "Taxable income and special deductions",
        "Earnings & profits and distributions",
        "Formation (Section 351)",
      ], "REG Area IV/V"),
      area("S corporations", [
        "Eligibility and election",
        "Pass-through and basis",
        "Distributions and AAA",
      ]),
      area("Partnerships", [
        "Formation and basis",
        "Allocations and distributions",
        "Partner's outside basis",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m7-l1",
        "C-corporation income and formation",
        50,
        [
          "Compute C-corp taxable income.",
          "Apply Section 351 formation rules.",
        ],
        [
          "C corporations are taxed at the entity level (double taxation).",
          "Section 351 defers gain on contributions for control.",
          "Special deductions include the dividends-received deduction.",
        ],
        [
          "What is required for tax-free treatment under Section 351?",
          "What causes double taxation?",
        ],
        "Under Section 351, shareholders transferring property for stock and controlling 80%+ of the corporation defer gain, taking a carryover basis in their stock."
      ),
      lesson(
        "cpa-reg-m7-l2",
        "Corporate distributions and E&P",
        50,
        [
          "Classify distributions using E&P.",
          "Determine dividend, return of capital and gain.",
        ],
        [
          "Distributions are dividends to the extent of E&P.",
          "Excess reduces stock basis (return of capital).",
          "Beyond basis, the excess is capital gain.",
        ],
        [
          "How does E&P determine dividend treatment?",
          "What happens when distributions exceed basis?",
        ],
        "A $50,000 distribution with $30,000 E&P is a $30,000 dividend; the remaining $20,000 reduces basis and, if basis is exhausted, becomes capital gain."
      ),
      lesson(
        "cpa-reg-m7-l3",
        "S corporations",
        50,
        [
          "Apply S-corp eligibility and election.",
          "Compute pass-through income and basis.",
        ],
        [
          "S corporations pass income through to shareholders.",
          "Eligibility limits shareholders and stock classes.",
          "Basis adjusts for income, losses and distributions.",
        ],
        [
          "What are the eligibility requirements for an S election?",
          "How does S-corp income affect shareholder basis?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m7-l4",
        "Partnership taxation",
        50,
        [
          "Apply partnership formation and basis rules.",
          "Account for allocations and distributions.",
        ],
        [
          "Partnerships are flow-through entities.",
          "Outside basis includes the partner's share of liabilities.",
          "Distributions are generally nontaxable to the extent of basis.",
        ],
        [
          "Why do partnership liabilities affect outside basis?",
          "When is a partnership distribution taxable?",
        ],
        "A partner's outside basis increases by their share of partnership liabilities, allowing greater loss deduction and tax-free distributions up to that basis."
      ),
      lesson(
        "cpa-reg-m7-l5",
        "Comparing entity tax consequences",
        40,
        [
          "Compare taxation across entity types.",
          "Relate entity choice to owner outcomes.",
        ],
        [
          "C-corps face double taxation; pass-throughs are taxed once.",
          "Basis mechanics differ across entities.",
          "Liability allocation is unique to partnerships.",
        ],
        [
          "How does double taxation compare with pass-through taxation?",
          "How do basis rules differ across entities?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Distribution ordering: dividend (to E&P) → return of capital (basis) → capital gain.",
      "Section 351: no gain if property for stock and 80% control.",
      "Partner outside basis includes share of partnership liabilities.",
      "S-corp/partnership: income increases basis; losses/distributions decrease it.",
    ],
    commonTraps: [
      "Ignoring liabilities in partnership basis.",
      "Misordering corporate distribution treatment.",
      "Overlooking S-corp eligibility limits.",
    ],
    examTechnique: [
      "Apply the distribution ordering rules step by step.",
      "Track basis adjustments in order.",
      "Include liabilities in partner outside basis.",
    ],
    practicePlan: [
      "Work a corporate-distribution ordering TBS.",
      "Compute partner outside basis with liabilities.",
      "Compare entity outcomes for a sample business.",
    ],
    furtherReading: [
      "Internal Revenue Code §§ 351, 301, 316, 1361–1368, 701–755.",
      "REG review — entity taxation.",
    ],
  }),
  courseware({
    moduleId: "cpa-reg-m8",
    examId: "cpa",
    levelId: "reg",
    title: "Tax-exempt organizations & estate/gift tax basics",
    examFormat: CPA_CORE_FORMAT,
    estimatedStudyHours: 18,
    overview:
      "Covers the taxation of tax-exempt organizations (including unrelated business income) and the fundamentals of the federal estate and gift tax, including the unified credit and annual exclusion.",
    whyItMatters:
      "Exempt-organization and transfer-tax rules round out REG; they affect nonprofits and wealth-transfer planning that CPAs commonly advise on.",
    learningOutcomes: [
      "Describe requirements for tax-exempt status.",
      "Compute unrelated business income tax.",
      "Explain filing requirements for exempt organizations.",
      "Apply the federal gift tax and annual exclusion.",
      "Apply the federal estate tax and unified credit.",
      "Explain the generation-skipping transfer tax at a high level.",
    ],
    syllabusAreas: [
      area("Exempt organizations", [
        "Qualification and 501(c)(3)",
        "Unrelated business income (UBIT)",
        "Filing (Form 990)",
      ], "REG Area III"),
      area("Gift tax", [
        "Annual exclusion and gift splitting",
        "Taxable gifts",
        "Unified credit",
      ]),
      area("Estate & GST", [
        "Gross estate and deductions",
        "Unified credit and portability",
        "GST tax overview",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-reg-m8-l1",
        "Tax-exempt status",
        45,
        [
          "Describe qualification for exemption.",
          "Explain 501(c)(3) requirements.",
        ],
        [
          "Exempt organizations serve charitable, religious or similar purposes.",
          "No part of earnings may inure to private individuals.",
          "Political activity is restricted.",
        ],
        [
          "What is the private-inurement prohibition?",
          "What activities threaten 501(c)(3) status?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m8-l2",
        "Unrelated business income tax",
        45,
        [
          "Identify unrelated business income.",
          "Compute UBIT.",
        ],
        [
          "UBIT applies to income from a regularly carried-on unrelated trade or business.",
          "Certain passive income is excluded.",
          "UBIT prevents unfair competition with taxable businesses.",
        ],
        [
          "What three elements define unrelated business income?",
          "Why does UBIT exist?",
        ],
        "A charity's regularly operated gift shop selling unrelated merchandise generates UBIT, while its passive investment income is generally excluded."
      ),
      lesson(
        "cpa-reg-m8-l3",
        "Federal gift tax",
        45,
        [
          "Apply the annual exclusion and gift splitting.",
          "Compute taxable gifts.",
        ],
        [
          "The annual exclusion shelters gifts up to a set amount per donee.",
          "Spouses may split gifts to double the exclusion.",
          "Unlimited marital and charitable deductions apply.",
        ],
        [
          "How does the annual exclusion work?",
          "What is gift splitting?",
        ],
        "A married couple electing to split gifts can transfer twice the annual exclusion per donee free of gift tax."
      ),
      lesson(
        "cpa-reg-m8-l4",
        "Federal estate tax",
        45,
        [
          "Compute the gross estate and deductions.",
          "Apply the unified credit and portability.",
        ],
        [
          "The gross estate includes property owned at death.",
          "Marital and charitable deductions reduce the taxable estate.",
          "The unified credit shelters a lifetime exemption amount.",
        ],
        [
          "What is included in the gross estate?",
          "How does portability of the exemption work?",
        ],
        undefined
      ),
      lesson(
        "cpa-reg-m8-l5",
        "Generation-skipping transfer tax",
        30,
        [
          "Explain the GST tax purpose.",
          "Identify transfers subject to GST.",
        ],
        [
          "The GST tax prevents avoiding estate tax by skipping generations.",
          "It applies to transfers to skip persons.",
          "A GST exemption is available.",
        ],
        [
          "What does the GST tax prevent?",
          "Who is a skip person?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "UBIT elements: trade or business + regularly carried on + unrelated to exempt purpose.",
      "Taxable gift = gift − annual exclusion − marital/charitable deductions.",
      "Estate tax uses a unified credit against lifetime exemption.",
      "Unlimited marital and charitable deductions for gift and estate tax.",
    ],
    commonTraps: [
      "Forgetting passive-income exclusions from UBIT.",
      "Applying the annual exclusion to future-interest gifts (not allowed).",
      "Overlooking the unified nature of gift and estate tax.",
    ],
    examTechnique: [
      "Test all three UBIT elements before concluding.",
      "Apply the annual exclusion per donee.",
      "Use the unified credit against the combined transfer base.",
    ],
    practicePlan: [
      "Work UBIT-classification MCQs.",
      "Compute taxable gifts with the annual exclusion.",
      "Outline the estate-tax computation.",
    ],
    furtherReading: [
      "Internal Revenue Code §§ 501, 511–514, 2001–2704.",
      "REG review — exempt organizations and transfer tax.",
    ],
  }),

  // ===================================================================
  // DISCIPLINE (BAR / ISC / TCP)
  // ===================================================================
  courseware({
    moduleId: "cpa-discipline-m1",
    examId: "cpa",
    levelId: "discipline",
    title: "BAR — Business analysis & financial statement analysis",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Part of the Business Analysis and Reporting (BAR) discipline: covers financial-statement and ratio analysis, variance and profitability analysis, forecasting and projections, and the interpretation of financial and non-financial data for decision-making.",
    whyItMatters:
      "BAR candidates must analyse and interpret complex financial information at an advanced level; business analysis skills are central to controller, FP&A and reporting roles.",
    learningOutcomes: [
      "Perform advanced ratio and trend analysis.",
      "Analyse profitability, liquidity and solvency.",
      "Perform variance analysis.",
      "Build financial forecasts and projections.",
      "Interpret non-financial and operational data.",
      "Apply cost and managerial-accounting analysis.",
    ],
    syllabusAreas: [
      area("Financial analysis", [
        "Ratio and DuPont analysis",
        "Trend and common-size analysis",
        "Liquidity, solvency, profitability",
      ], "BAR Area I"),
      area("Managerial analysis", [
        "Cost behaviour and CVP",
        "Variance analysis",
        "Budgeting",
      ]),
      area("Forecasting", [
        "Financial projections",
        "Sensitivity analysis",
        "Non-financial metrics",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m1-l1",
        "Advanced ratio analysis",
        50,
        [
          "Compute and interpret a full ratio set.",
          "Apply the DuPont decomposition.",
        ],
        [
          "Ratios are interpreted against trends and peers.",
          "DuPont links margin, turnover and leverage to ROE.",
          "Ratios can be distorted by accounting choices.",
        ],
        [
          "How does DuPont decompose ROE?",
          "Why compare ratios to peers and trends?",
        ],
        "A firm with 6% net margin, 1.8 asset turnover and 2.5 leverage has ROE = 0.06 × 1.8 × 2.5 = 27%, revealing leverage as a major driver."
      ),
      lesson(
        "cpa-discipline-m1-l2",
        "Profitability, liquidity and solvency",
        45,
        [
          "Analyse profitability drivers.",
          "Assess liquidity and solvency.",
        ],
        [
          "Profitability analysis isolates margin and volume effects.",
          "Liquidity ratios assess short-term obligations.",
          "Solvency ratios assess long-term leverage and coverage.",
        ],
        [
          "How do liquidity and solvency analyses differ?",
          "What drives changes in profitability?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m1-l3",
        "Variance analysis",
        50,
        [
          "Compute price and quantity variances.",
          "Interpret variances for control.",
        ],
        [
          "Variances compare actual to standard or budget.",
          "Price and quantity variances decompose total variance.",
          "Variances direct management attention (management by exception).",
        ],
        [
          "How is a total variance decomposed?",
          "How do variances support control?",
        ],
        "A material cost variance splits into a price variance (rate difference × actual quantity) and a quantity variance (usage difference × standard price)."
      ),
      lesson(
        "cpa-discipline-m1-l4",
        "Forecasting and projections",
        50,
        [
          "Build financial projections.",
          "Apply sensitivity and scenario analysis.",
        ],
        [
          "Projections are driven by assumptions about growth and costs.",
          "Sensitivity analysis tests key assumptions.",
          "Scenarios frame a range of outcomes.",
        ],
        [
          "Why perform sensitivity analysis on a forecast?",
          "What assumptions drive a projection?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m1-l5",
        "Non-financial and operational analysis",
        40,
        [
          "Interpret non-financial metrics.",
          "Integrate operational data into analysis.",
        ],
        [
          "Non-financial metrics (e.g., customer churn) can lead financial results.",
          "Balanced analysis combines financial and operational data.",
          "Operational drivers explain financial outcomes.",
        ],
        [
          "Why integrate non-financial metrics into analysis?",
          "How can operational data lead financial results?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "ROE (DuPont) = net margin × asset turnover × leverage.",
      "Total variance = price variance + quantity variance.",
      "Current ratio = current assets / current liabilities.",
      "Times-interest-earned = EBIT / interest expense.",
    ],
    commonTraps: [
      "Interpreting ratios without a benchmark.",
      "Mixing up price and quantity variance formulas.",
      "Ignoring accounting-choice distortions in ratios.",
    ],
    examTechnique: [
      "Decompose ROE and variances into components.",
      "Interpret figures relative to trend and peers.",
      "Combine financial and non-financial evidence.",
    ],
    practicePlan: [
      "Compute a full ratio set and DuPont for one company.",
      "Work variance-analysis TBSs.",
      "Build a simple projection with sensitivity.",
    ],
    furtherReading: [
      "AICPA BAR Blueprint.",
      "BAR review — financial and business analysis.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m2",
    examId: "cpa",
    levelId: "discipline",
    title: "BAR — Technical accounting & reporting applications",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Covers advanced technical accounting tested in BAR: revenue and leases in depth, business combinations, derivatives and hedging, stock compensation, and other complex reporting applications.",
    whyItMatters:
      "BAR tests the most complex financial-reporting topics at an application and analysis level; mastery signals readiness for advanced technical accounting roles.",
    learningOutcomes: [
      "Apply advanced revenue and lease accounting.",
      "Account for business combinations and consolidations.",
      "Account for derivatives and hedging.",
      "Apply advanced stock-compensation rules.",
      "Account for complex financial instruments.",
      "Analyse the reporting impact of technical choices.",
    ],
    syllabusAreas: [
      area("Revenue & leases (advanced)", [
        "Complex contracts and modifications",
        "Lessee/lessor advanced issues",
        "Presentation and disclosure",
      ], "BAR Area II"),
      area("Combinations & instruments", [
        "Consolidations and NCI",
        "Derivatives and hedging",
        "Complex financial instruments",
      ]),
      area("Compensation & other", [
        "Advanced stock compensation",
        "R&D and software",
        "Reporting impact analysis",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m2-l1",
        "Advanced revenue and leases",
        55,
        [
          "Apply revenue rules to complex contracts.",
          "Address advanced lease issues.",
        ],
        [
          "Contract modifications may be new or cumulative.",
          "Variable lease payments and reassessments add complexity.",
          "Presentation and disclosure are heavily tested.",
        ],
        [
          "How is a contract modification accounted for?",
          "How do variable lease payments affect measurement?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m2-l2",
        "Business combinations and consolidations",
        50,
        [
          "Apply advanced combination accounting.",
          "Handle step acquisitions and NCI.",
        ],
        [
          "Step acquisitions remeasure prior interest to fair value.",
          "NCI is measured at fair value or proportionate share.",
          "Intercompany eliminations are required.",
        ],
        [
          "How is a step acquisition accounted for?",
          "How is NCI measured?",
        ],
        "In a step acquisition, the previously held equity interest is remeasured to fair value at the acquisition date, with the gain or loss in earnings."
      ),
      lesson(
        "cpa-discipline-m2-l3",
        "Derivatives and hedging",
        55,
        [
          "Account for derivatives.",
          "Apply hedge accounting.",
        ],
        [
          "Derivatives are measured at fair value.",
          "Fair-value hedges affect earnings; cash-flow hedges use OCI.",
          "Hedge effectiveness must be assessed.",
        ],
        [
          "How does a cash-flow hedge affect OCI?",
          "What is required to apply hedge accounting?",
        ],
        "In a cash-flow hedge, the effective portion of the derivative's gain/loss is deferred in OCI and reclassified to earnings when the hedged item affects income."
      ),
      lesson(
        "cpa-discipline-m2-l4",
        "Advanced stock compensation",
        45,
        [
          "Account for complex awards.",
          "Handle modifications and performance conditions.",
        ],
        [
          "Performance and market conditions affect recognition.",
          "Modifications may increase or accelerate expense.",
          "Graded vesting affects the expense pattern.",
        ],
        [
          "How do performance conditions affect expense recognition?",
          "What happens on a favorable award modification?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m2-l5",
        "Complex instruments and reporting impact",
        45,
        [
          "Account for complex financial instruments.",
          "Analyse the reporting impact of technical choices.",
        ],
        [
          "Convertible and hybrid instruments require careful classification.",
          "Classification affects EPS and leverage metrics.",
          "Technical choices ripple through the statements.",
        ],
        [
          "How does instrument classification affect key metrics?",
          "Why analyse the downstream reporting impact?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Cash-flow hedge: effective portion → OCI, reclassified to earnings.",
      "Step acquisition: remeasure prior interest to fair value (gain/loss to earnings).",
      "Fair-value hedge: hedged item and derivative both to earnings.",
      "Derivatives measured at fair value.",
    ],
    commonTraps: [
      "Routing fair-value-hedge effects through OCI (should be earnings).",
      "Forgetting to remeasure prior interest in step acquisitions.",
      "Mishandling performance conditions in stock compensation.",
    ],
    examTechnique: [
      "Identify the hedge type before choosing the accounting.",
      "Track fair-value remeasurement in combinations.",
      "Trace technical choices to affected metrics.",
    ],
    practicePlan: [
      "Work hedge-accounting TBSs.",
      "Practise a step-acquisition remeasurement.",
      "Analyse instrument classification effects on EPS.",
    ],
    furtherReading: [
      "FASB ASC 606, 842, 805, 815, 718.",
      "AICPA BAR Blueprint.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m3",
    examId: "cpa",
    levelId: "discipline",
    title: "BAR — State & local governments (advanced)",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers advanced governmental accounting in the BAR discipline: the reporting entity, complex fund and government-wide reporting, specific transactions, and the comprehensive annual financial report structure.",
    whyItMatters:
      "BAR includes advanced state and local government accounting; these specialized rules are essential for candidates targeting public-sector or governmental audit and reporting roles.",
    learningOutcomes: [
      "Define the governmental reporting entity.",
      "Prepare advanced fund and government-wide statements.",
      "Account for complex governmental transactions.",
      "Apply GASB standards for specific items.",
      "Explain the financial reporting model components.",
      "Prepare required reconciliations and disclosures.",
    ],
    syllabusAreas: [
      area("Reporting entity", [
        "Primary government and component units",
        "Blending vs discrete presentation",
        "Reporting model overview",
      ], "BAR Area III"),
      area("Advanced transactions", [
        "Capital assets and infrastructure",
        "Long-term liabilities and pensions (GASB)",
        "Interfund activity",
      ]),
      area("Reporting", [
        "Government-wide and fund statements",
        "Reconciliations",
        "Notes and RSI",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m3-l1",
        "The governmental reporting entity",
        45,
        [
          "Define the primary government and component units.",
          "Choose blending or discrete presentation.",
        ],
        [
          "Component units are legally separate but financially accountable to the primary government.",
          "Blending applies when the component is essentially part of the primary government.",
          "Otherwise, discrete presentation is used.",
        ],
        [
          "When is a component unit blended vs discretely presented?",
          "What is financial accountability?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m3-l2",
        "Capital assets and long-term liabilities",
        50,
        [
          "Account for governmental capital assets.",
          "Report long-term liabilities and GASB pensions.",
        ],
        [
          "Capital assets appear in government-wide statements.",
          "Infrastructure may use the modified approach.",
          "GASB pension standards recognize net pension liability.",
        ],
        [
          "Where do governmental capital assets appear?",
          "What is the modified approach for infrastructure?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m3-l3",
        "Interfund activity and transactions",
        45,
        [
          "Classify interfund activity.",
          "Account for transfers and reimbursements.",
        ],
        [
          "Interfund activity includes loans, transfers and reimbursements.",
          "Reciprocal vs nonreciprocal activity is distinguished.",
          "Interfund balances are reported and sometimes eliminated.",
        ],
        [
          "How is reciprocal interfund activity treated?",
          "What are interfund transfers?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m3-l4",
        "Government-wide and fund reporting",
        50,
        [
          "Prepare advanced statements.",
          "Reconcile fund and government-wide statements.",
        ],
        [
          "Government-wide statements use full accrual.",
          "Fund statements use their respective bases.",
          "Reconciliations bridge the two.",
        ],
        [
          "What reconciles fund balance to net position?",
          "Why maintain dual reporting?",
        ],
        "Reconciling governmental fund balance to government-wide net position adds capital assets and subtracts long-term liabilities not reported in the funds."
      ),
      lesson(
        "cpa-discipline-m3-l5",
        "Notes, RSI and the financial report",
        40,
        [
          "Prepare notes and required supplementary information.",
          "Describe the annual comprehensive financial report.",
        ],
        [
          "RSI includes MD&A and budgetary comparisons.",
          "The ACFR has introductory, financial and statistical sections.",
          "Disclosures explain measurement and policy.",
        ],
        [
          "What is included in required supplementary information?",
          "What are the sections of the ACFR?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Component unit: blend if essentially part of the primary government; else discrete.",
      "Government-wide: full accrual; funds: their respective bases.",
      "Reconciliation adds capital assets, removes fund-only items, adds long-term debt.",
      "ACFR sections: introductory, financial, statistical.",
    ],
    commonTraps: [
      "Misapplying blending vs discrete presentation.",
      "Omitting capital assets/long-term debt from government-wide statements.",
      "Confusing RSI with the basic financial statements.",
    ],
    examTechnique: [
      "Determine reporting-entity presentation first.",
      "Track items across fund and government-wide statements.",
      "Use reconciliations to bridge measurement differences.",
    ],
    practicePlan: [
      "Classify component units.",
      "Prepare a fund-to-government-wide reconciliation.",
      "Outline the ACFR structure.",
    ],
    furtherReading: [
      "GASB Codification.",
      "AICPA BAR Blueprint — state and local governments.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m4",
    examId: "cpa",
    levelId: "discipline",
    title: "ISC — IT governance, SOC reports & security",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Part of the Information Systems and Controls (ISC) discipline: covers IT governance frameworks, information security principles, the SOC reporting suite, and the CPA's role in system and organization controls engagements.",
    whyItMatters:
      "ISC targets candidates focused on IT risk, controls and assurance; understanding governance, security and SOC reporting is essential for technology-enabled assurance roles.",
    learningOutcomes: [
      "Describe IT governance frameworks (COBIT).",
      "Apply information-security principles (CIA triad).",
      "Distinguish SOC 1, SOC 2 and SOC 3 engagements.",
      "Explain trust-services criteria.",
      "Describe access and change-management controls.",
      "Explain the CPA's role in SOC engagements.",
    ],
    syllabusAreas: [
      area("IT governance", [
        "COBIT and governance frameworks",
        "IT strategy and risk",
        "Roles and responsibilities",
      ], "ISC Area I/II"),
      area("Security", [
        "Confidentiality, integrity, availability",
        "Access controls and encryption",
        "Security frameworks",
      ]),
      area("SOC reporting", [
        "SOC 1, SOC 2, SOC 3",
        "Trust-services criteria",
        "Type 1 vs Type 2",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m4-l1",
        "IT governance frameworks",
        45,
        [
          "Describe COBIT and IT governance.",
          "Relate IT strategy to business objectives.",
        ],
        [
          "IT governance aligns IT with business goals.",
          "COBIT provides a governance and management framework.",
          "Governance assigns accountability for IT risk.",
        ],
        [
          "What is the purpose of IT governance?",
          "What does COBIT provide?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m4-l2",
        "Information security principles",
        50,
        [
          "Apply the CIA triad.",
          "Describe security controls.",
        ],
        [
          "Confidentiality, integrity and availability define security objectives.",
          "Access controls, encryption and monitoring protect data.",
          "Defence-in-depth layers controls.",
        ],
        [
          "What does the CIA triad represent?",
          "How does defence-in-depth protect systems?",
        ],
        "A ransomware attack primarily threatens availability and integrity, while a data breach threatens confidentiality—mapping incidents to the CIA triad guides response."
      ),
      lesson(
        "cpa-discipline-m4-l3",
        "Access and change management",
        45,
        [
          "Describe access controls.",
          "Explain change-management controls.",
        ],
        [
          "Least privilege and segregation of duties limit access.",
          "Change management controls modifications to systems.",
          "Logging and review detect unauthorized changes.",
        ],
        [
          "What is the principle of least privilege?",
          "Why is change management a key control?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m4-l4",
        "The SOC reporting suite",
        50,
        [
          "Distinguish SOC 1, SOC 2 and SOC 3.",
          "Compare Type 1 and Type 2 reports.",
        ],
        [
          "SOC 1 addresses controls over financial reporting.",
          "SOC 2 addresses trust-services criteria.",
          "SOC 3 is a general-use summary report.",
        ],
        [
          "How do SOC 1 and SOC 2 differ in purpose?",
          "What does a Type 2 report add?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m4-l5",
        "Trust-services criteria and the CPA's role",
        45,
        [
          "Explain the trust-services criteria.",
          "Describe the CPA's role in SOC engagements.",
        ],
        [
          "Criteria: security, availability, processing integrity, confidentiality, privacy.",
          "Security is the common (baseline) criterion.",
          "The CPA examines and reports on controls.",
        ],
        [
          "What are the five trust-services criteria?",
          "Which criterion is always included?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "CIA triad: confidentiality, integrity, availability.",
      "Trust-services criteria: security (baseline), availability, processing integrity, confidentiality, privacy.",
      "SOC 1 (financial reporting), SOC 2 (trust services), SOC 3 (general use).",
      "Type 1 (point in time) vs Type 2 (period of operating effectiveness).",
    ],
    commonTraps: [
      "Confusing SOC 1 (financial) with SOC 2 (trust services).",
      "Forgetting that security is the baseline criterion.",
      "Mixing up Type 1 and Type 2 scope.",
    ],
    examTechnique: [
      "Map incidents to the CIA triad.",
      "Match the SOC report type to the user's need.",
      "Recall the five trust-services criteria.",
    ],
    practicePlan: [
      "Classify security incidents by CIA element.",
      "Match SOC report types to scenarios.",
      "Review COBIT governance objectives.",
    ],
    furtherReading: [
      "AICPA ISC Blueprint; SOC reporting guidance.",
      "COBIT framework; NIST security guidance.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m5",
    examId: "cpa",
    levelId: "discipline",
    title: "ISC — Business processes, data & controls",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers business-process controls across transaction cycles, data management and data governance, system development and change controls, and the design and testing of IT-dependent controls.",
    whyItMatters:
      "Effective controls over business processes and data underpin reliable reporting; ISC candidates must evaluate how automated and manual controls work together.",
    learningOutcomes: [
      "Map controls to business-process cycles.",
      "Distinguish automated and manual controls.",
      "Apply data-governance and data-quality concepts.",
      "Describe system development life-cycle controls.",
      "Test IT-dependent and IT-general controls.",
      "Evaluate control design and operating effectiveness.",
    ],
    syllabusAreas: [
      area("Process controls", [
        "Transaction-cycle controls",
        "Automated vs manual controls",
        "Segregation of duties",
      ], "ISC Area II"),
      area("Data management", [
        "Data governance and quality",
        "Master data and data lifecycle",
        "Data analytics",
      ]),
      area("Systems & testing", [
        "System development life cycle",
        "Change management",
        "Testing IT-dependent controls",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m5-l1",
        "Business-process controls",
        50,
        [
          "Map controls to transaction cycles.",
          "Apply segregation of duties.",
        ],
        [
          "Each cycle has characteristic risks and controls.",
          "Segregation of duties prevents a single person from controlling a transaction end-to-end.",
          "Controls are preventive, detective or corrective.",
        ],
        [
          "How does segregation of duties reduce risk?",
          "What risks are typical in the revenue cycle?",
        ],
        "Separating order approval, shipping and billing prevents one employee from creating and concealing fictitious sales."
      ),
      lesson(
        "cpa-discipline-m5-l2",
        "Automated vs manual controls",
        45,
        [
          "Distinguish automated and manual controls.",
          "Explain IT-dependent manual controls.",
        ],
        [
          "Automated controls are consistent but depend on ITGCs.",
          "IT-dependent manual controls rely on system-generated data.",
          "Control type affects the testing approach.",
        ],
        [
          "Why do automated controls depend on ITGCs?",
          "What is an IT-dependent manual control?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m5-l3",
        "Data governance and quality",
        45,
        [
          "Apply data-governance concepts.",
          "Assess data quality dimensions.",
        ],
        [
          "Data governance assigns ownership and standards.",
          "Quality dimensions include accuracy, completeness and timeliness.",
          "Master-data management maintains consistent reference data.",
        ],
        [
          "What dimensions define data quality?",
          "What is the purpose of data governance?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m5-l4",
        "System development and change management",
        45,
        [
          "Describe SDLC controls.",
          "Apply change-management controls.",
        ],
        [
          "The SDLC controls how systems are developed and deployed.",
          "Change management authorizes, tests and documents changes.",
          "Separation of development and production is essential.",
        ],
        [
          "Why separate development and production environments?",
          "What controls govern system changes?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m5-l5",
        "Testing IT-dependent controls",
        40,
        [
          "Test IT-dependent controls.",
          "Evaluate design and operating effectiveness.",
        ],
        [
          "Testing considers both the control and underlying data reliability.",
          "Design effectiveness precedes operating effectiveness.",
          "Reperformance and inspection provide evidence.",
        ],
        [
          "Why must data reliability be considered when testing IT-dependent controls?",
          "How does design testing differ from operating-effectiveness testing?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Control types: preventive, detective, corrective.",
      "Automated controls rely on ITGCs (access, change, operations).",
      "Data quality: accuracy, completeness, timeliness, consistency.",
      "Test design before operating effectiveness.",
    ],
    commonTraps: [
      "Testing an automated control without considering ITGCs.",
      "Overlooking data reliability for IT-dependent controls.",
      "Confusing design with operating-effectiveness testing.",
    ],
    examTechnique: [
      "Identify the control type before selecting a test.",
      "Consider underlying data for IT-dependent controls.",
      "Map controls to cycle-specific risks.",
    ],
    practicePlan: [
      "Map controls to transaction cycles.",
      "Classify controls as automated, manual or IT-dependent.",
      "Design a test for an IT-dependent control.",
    ],
    furtherReading: [
      "AICPA ISC Blueprint.",
      "COSO and COBIT control guidance.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m6",
    examId: "cpa",
    levelId: "discipline",
    title: "ISC — Information system audits",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers the planning and performance of information-system audits, IT audit procedures, computer-assisted audit techniques, evaluation of IT controls, and reporting on IT-related engagements.",
    whyItMatters:
      "ISC candidates must be able to audit information systems and use technology in the audit; these skills are increasingly central to modern assurance.",
    learningOutcomes: [
      "Plan an information-system audit.",
      "Perform IT audit procedures.",
      "Apply computer-assisted audit techniques (CAATs).",
      "Evaluate IT general and application controls.",
      "Use data analytics in the audit.",
      "Report on IT-related engagements.",
    ],
    syllabusAreas: [
      area("IT audit planning", [
        "Scoping and risk assessment",
        "IT audit standards",
        "Reliance on controls",
      ], "ISC Area III"),
      area("Procedures & CAATs", [
        "Computer-assisted audit techniques",
        "Data analytics",
        "Testing controls and data",
      ]),
      area("Evaluation & reporting", [
        "Evaluating IT controls",
        "Deficiency evaluation",
        "Reporting",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m6-l1",
        "Planning an IT audit",
        45,
        [
          "Scope and plan an IT audit.",
          "Assess IT risk.",
        ],
        [
          "IT audit planning identifies significant systems and risks.",
          "Reliance on ITGCs affects the audit approach.",
          "Standards guide the audit process.",
        ],
        [
          "How does IT risk affect audit scope?",
          "Why assess ITGCs during planning?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m6-l2",
        "Computer-assisted audit techniques",
        50,
        [
          "Apply CAATs.",
          "Select techniques for audit objectives.",
        ],
        [
          "CAATs test large data populations efficiently.",
          "Test data and parallel simulation test processing.",
          "Generalized audit software analyzes data.",
        ],
        [
          "How does test data test application controls?",
          "What is parallel simulation?",
        ],
        "Using test data, the auditor submits transactions with known errors to confirm the system's edit checks reject them as designed."
      ),
      lesson(
        "cpa-discipline-m6-l3",
        "Data analytics in the audit",
        45,
        [
          "Use data analytics for audit evidence.",
          "Interpret analytics results.",
        ],
        [
          "Analytics can test entire populations, not just samples.",
          "Anomalies flag items for follow-up.",
          "Analytics support risk assessment and substantive testing.",
        ],
        [
          "How do analytics change the sampling paradigm?",
          "How are analytic anomalies handled?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m6-l4",
        "Evaluating IT controls and deficiencies",
        45,
        [
          "Evaluate ITGC and application controls.",
          "Classify IT control deficiencies.",
        ],
        [
          "Weak ITGCs undermine application-control reliance.",
          "Deficiencies are evaluated for severity.",
          "IT deficiencies can be significant deficiencies or material weaknesses.",
        ],
        [
          "How do ITGC weaknesses affect application controls?",
          "How are IT deficiencies classified?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m6-l5",
        "Reporting on IT engagements",
        40,
        [
          "Report IT audit findings.",
          "Communicate deficiencies to stakeholders.",
        ],
        [
          "Findings are communicated to management and governance.",
          "SOC engagements produce formal reports.",
          "Reporting must be clear and actionable.",
        ],
        [
          "How are IT audit findings communicated?",
          "What report results from a SOC 2 engagement?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "CAATs: test data, parallel simulation, generalized audit software.",
      "Analytics can test 100% of a population vs sampling.",
      "Weak ITGCs → reduced application-control reliance.",
      "Deficiency severity: deficiency < significant deficiency < material weakness.",
    ],
    commonTraps: [
      "Relying on application controls despite weak ITGCs.",
      "Confusing test data with parallel simulation.",
      "Treating analytics anomalies as conclusions rather than leads.",
    ],
    examTechnique: [
      "Match the CAAT to the audit objective.",
      "Assess ITGCs before relying on application controls.",
      "Investigate, don't conclude from, analytic anomalies.",
    ],
    practicePlan: [
      "Match CAATs to objectives.",
      "Work an IT-control evaluation TBS.",
      "Interpret sample analytics output.",
    ],
    furtherReading: [
      "AICPA ISC Blueprint.",
      "ISACA IT audit guidance.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m7",
    examId: "cpa",
    levelId: "discipline",
    title: "TCP — Personal financial planning & tax compliance",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Part of the Tax Compliance and Planning (TCP) discipline: covers individual tax compliance and planning, personal financial planning, retirement and education planning, and gift and estate planning for individuals.",
    whyItMatters:
      "TCP targets candidates specializing in individual and entity tax planning; personal financial planning integrates tax with broader wealth objectives.",
    learningOutcomes: [
      "Apply advanced individual tax compliance rules.",
      "Develop individual tax-planning strategies.",
      "Apply retirement and education planning concepts.",
      "Integrate gift and estate planning.",
      "Analyse the timing and character of income.",
      "Evaluate tax-efficient investment decisions.",
    ],
    syllabusAreas: [
      area("Individual compliance", [
        "Advanced income and deductions",
        "Passive activity and at-risk rules",
        "Timing strategies",
      ], "TCP Area I"),
      area("Financial planning", [
        "Retirement accounts and distributions",
        "Education funding",
        "Insurance and risk",
      ]),
      area("Wealth transfer", [
        "Gift and estate planning",
        "Trusts",
        "Charitable strategies",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m7-l1",
        "Advanced individual compliance",
        50,
        [
          "Apply passive-activity and at-risk rules.",
          "Handle complex income and deductions.",
        ],
        [
          "Passive losses are limited to passive income.",
          "At-risk rules limit deductible losses to amounts at risk.",
          "Suspended losses carry forward.",
        ],
        [
          "How do passive-activity loss rules work?",
          "What happens to suspended passive losses?",
        ],
        "A taxpayer with $20,000 of passive losses but only $5,000 of passive income deducts $5,000 and suspends $15,000 to future years."
      ),
      lesson(
        "cpa-discipline-m7-l2",
        "Individual tax planning",
        50,
        [
          "Develop tax-planning strategies.",
          "Apply timing and character planning.",
        ],
        [
          "Deferring income and accelerating deductions can reduce present tax.",
          "Bracket management smooths taxable income.",
          "Capital-gain timing exploits preferential rates.",
        ],
        [
          "How does timing affect tax liability?",
          "Why manage tax brackets across years?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m7-l3",
        "Retirement and education planning",
        50,
        [
          "Apply retirement-account rules.",
          "Apply education-funding strategies.",
        ],
        [
          "Traditional and Roth accounts differ in tax timing.",
          "Required minimum distributions apply to certain accounts.",
          "529 plans provide tax-advantaged education funding.",
        ],
        [
          "How do traditional and Roth accounts differ in taxation?",
          "What is a required minimum distribution?",
        ],
        "A Roth IRA is funded with after-tax dollars and grows tax-free, whereas a traditional IRA defers tax until distribution—shaping the choice by expected future rates."
      ),
      lesson(
        "cpa-discipline-m7-l4",
        "Gift and estate planning",
        45,
        [
          "Integrate gift and estate planning.",
          "Apply trusts and charitable strategies.",
        ],
        [
          "Lifetime gifting uses the annual exclusion and reduces the estate.",
          "Trusts control the timing and conditions of transfers.",
          "Charitable strategies provide deductions and transfer benefits.",
        ],
        [
          "How does lifetime gifting reduce estate tax?",
          "What role do trusts play in planning?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m7-l5",
        "Tax-efficient investing",
        40,
        [
          "Evaluate tax-efficient investment decisions.",
          "Apply asset location and loss harvesting.",
        ],
        [
          "Asset location places tax-inefficient assets in sheltered accounts.",
          "Tax-loss harvesting offsets gains.",
          "Holding periods affect the applicable rate.",
        ],
        [
          "How does asset location improve after-tax returns?",
          "What is tax-loss harvesting?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Passive losses deductible only against passive income (excess suspended).",
      "At-risk loss limit = amount at risk.",
      "Roth (after-tax, tax-free growth) vs traditional (pre-tax, taxed on distribution).",
      "Lifetime gifting reduces the taxable estate.",
    ],
    commonTraps: [
      "Deducting passive losses against active income.",
      "Ignoring at-risk limits.",
      "Confusing Roth and traditional tax timing.",
    ],
    examTechnique: [
      "Apply passive/at-risk limits before allowing losses.",
      "Compare Roth vs traditional on expected future rates.",
      "Integrate tax with the broader planning objective.",
    ],
    practicePlan: [
      "Work passive-loss limitation TBSs.",
      "Compare retirement-account outcomes.",
      "Design a lifetime-gifting plan.",
    ],
    furtherReading: [
      "AICPA TCP Blueprint.",
      "Internal Revenue Code §§ 469, 465, 408A.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m8",
    examId: "cpa",
    levelId: "discipline",
    title: "TCP — Entity tax compliance & planning",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers advanced entity tax compliance and planning for C corporations, S corporations and partnerships, including formation, distributions, reorganizations, and multi-jurisdictional and consolidated considerations.",
    whyItMatters:
      "TCP tests advanced entity tax at a planning level; understanding how choices affect entity and owner taxation is central to tax-advisory roles.",
    learningOutcomes: [
      "Apply advanced C-corporation tax planning.",
      "Apply S-corporation planning and basis strategies.",
      "Apply partnership allocation and distribution planning.",
      "Analyse reorganizations and liquidations.",
      "Consider consolidated and multistate issues.",
      "Optimize entity choice for tax outcomes.",
    ],
    syllabusAreas: [
      area("Corporate planning", [
        "C-corp distributions and E&P planning",
        "Reorganizations and liquidations",
        "Consolidated returns",
      ], "TCP Area II/III"),
      area("Pass-through planning", [
        "S-corp basis and distributions",
        "Partnership special allocations",
        "Guaranteed payments",
      ]),
      area("Optimization", [
        "Entity choice",
        "Multistate considerations",
        "Loss utilization",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m8-l1",
        "Corporate distributions and reorganizations",
        50,
        [
          "Plan C-corp distributions with E&P.",
          "Analyse tax-free reorganizations.",
        ],
        [
          "Distribution treatment depends on E&P and basis.",
          "Qualifying reorganizations defer gain.",
          "Liquidations generally trigger gain recognition.",
        ],
        [
          "How does E&P planning affect distribution treatment?",
          "What qualifies as a tax-free reorganization?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m8-l2",
        "S-corporation planning",
        50,
        [
          "Plan S-corp distributions and basis.",
          "Manage the accumulated adjustments account.",
        ],
        [
          "S-corp distributions are tax-free to the extent of basis and AAA.",
          "Loss deduction is limited by basis (stock then debt).",
          "Built-in gains tax can apply to former C corporations.",
        ],
        [
          "How does the AAA affect S-corp distributions?",
          "What limits an S-corp shareholder's loss deduction?",
        ],
        "An S-corp shareholder can deduct losses only to the extent of stock basis plus direct debt basis; excess losses are suspended."
      ),
      lesson(
        "cpa-discipline-m8-l3",
        "Partnership planning",
        50,
        [
          "Apply special allocations and guaranteed payments.",
          "Plan partnership distributions.",
        ],
        [
          "Special allocations must have substantial economic effect.",
          "Guaranteed payments are deductible by the partnership.",
          "Distributions are generally tax-free to the extent of basis.",
        ],
        [
          "What is required for a special allocation to be respected?",
          "How are guaranteed payments treated?",
        ],
        "A special allocation of depreciation must have substantial economic effect—reflected in capital accounts and liquidation rights—to be respected by the IRS."
      ),
      lesson(
        "cpa-discipline-m8-l4",
        "Consolidated and multistate issues",
        45,
        [
          "Consider consolidated-return effects.",
          "Analyse multistate apportionment.",
        ],
        [
          "Consolidated returns allow intercompany loss offset.",
          "Nexus determines state taxing authority.",
          "Apportionment formulas allocate income across states.",
        ],
        [
          "What benefit does a consolidated return provide?",
          "How does apportionment allocate income among states?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m8-l5",
        "Entity choice optimization",
        40,
        [
          "Optimize entity choice for tax.",
          "Weigh flow-through vs corporate taxation.",
        ],
        [
          "Entity choice balances double taxation against flow-through benefits.",
          "The QBI deduction favors some pass-throughs.",
          "Owner circumstances affect the optimal choice.",
        ],
        [
          "How does the QBI deduction affect entity choice?",
          "When might a C corporation be preferable?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "S-corp loss limit = stock basis + direct debt basis (excess suspended).",
      "Distribution ordering (C-corp): dividend (E&P) → return of capital → gain.",
      "Special allocation requires substantial economic effect.",
      "State income = apportionment factor × apportionable income.",
    ],
    commonTraps: [
      "Allowing S-corp losses beyond basis.",
      "Ignoring substantial-economic-effect for special allocations.",
      "Overlooking multistate nexus and apportionment.",
    ],
    examTechnique: [
      "Track basis and AAA in pass-through planning.",
      "Apply distribution ordering for corporations.",
      "Test special allocations for economic effect.",
    ],
    practicePlan: [
      "Work S-corp basis and distribution TBSs.",
      "Analyse a partnership special allocation.",
      "Compare entity choices for a scenario.",
    ],
    furtherReading: [
      "AICPA TCP Blueprint.",
      "Internal Revenue Code §§ 301, 331, 368, 704, 1366–1368.",
    ],
  }),
  courseware({
    moduleId: "cpa-discipline-m9",
    examId: "cpa",
    levelId: "discipline",
    title: "TCP — Property transactions & advanced tax topics",
    examFormat: CPA_DISCIPLINE_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers advanced property-transaction taxation and specialized topics in the TCP discipline: complex basis and gain issues, nonrecognition transactions, depreciation and cost recovery, and advanced planning strategies.",
    whyItMatters:
      "Property transactions produce significant, plan-able tax consequences; TCP tests advanced application including nonrecognition, recapture and cost-recovery planning.",
    learningOutcomes: [
      "Apply advanced basis and gain/loss rules.",
      "Apply nonrecognition transactions in planning.",
      "Optimize depreciation and cost recovery.",
      "Apply depreciation recapture in planning.",
      "Analyse installment and related-party rules.",
      "Integrate property planning with entity and individual tax.",
    ],
    syllabusAreas: [
      area("Advanced basis & gains", [
        "Complex basis computations",
        "Character and recapture",
        "Related-party transactions",
      ], "TCP Area IV"),
      area("Nonrecognition", [
        "Like-kind exchanges",
        "Involuntary conversions",
        "Installment sales",
      ]),
      area("Cost recovery & planning", [
        "MACRS and bonus depreciation",
        "Section 179 expensing",
        "Planning strategies",
      ]),
    ],
    lessons: [
      lesson(
        "cpa-discipline-m9-l1",
        "Advanced basis and gain/loss",
        50,
        [
          "Compute complex basis.",
          "Apply related-party loss disallowance.",
        ],
        [
          "Related-party losses are disallowed and may be recovered on later sale.",
          "Basis adjustments track improvements and depreciation.",
          "Character depends on asset type and use.",
        ],
        [
          "How are related-party losses treated?",
          "How do improvements and depreciation affect basis?",
        ],
        "A loss on a sale to a related party is disallowed, but the related buyer may reduce a later gain by the previously disallowed loss."
      ),
      lesson(
        "cpa-discipline-m9-l2",
        "Nonrecognition transactions in planning",
        50,
        [
          "Plan like-kind exchanges and involuntary conversions.",
          "Compute deferred gain and basis.",
        ],
        [
          "Like-kind exchanges defer gain on qualifying real property.",
          "Boot triggers recognition up to realized gain.",
          "Deferred gain reduces replacement-property basis.",
        ],
        [
          "How does boot affect a like-kind exchange?",
          "How is replacement-property basis computed?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m9-l3",
        "Depreciation and cost recovery",
        50,
        [
          "Apply MACRS, Section 179 and bonus depreciation.",
          "Optimize cost-recovery timing.",
        ],
        [
          "MACRS assigns recovery periods and conventions.",
          "Section 179 expenses qualifying property up to a limit.",
          "Bonus depreciation accelerates deductions.",
        ],
        [
          "How does Section 179 interact with bonus depreciation?",
          "What conventions apply under MACRS?",
        ],
        "A business can expense qualifying equipment under Section 179 up to the annual limit and apply bonus depreciation to the remainder, accelerating deductions."
      ),
      lesson(
        "cpa-discipline-m9-l4",
        "Recapture and installment sales",
        45,
        [
          "Apply recapture in planning.",
          "Apply installment-sale rules.",
        ],
        [
          "Depreciation recapture is ordinary income.",
          "Recapture is generally recognized in the year of sale even under installment reporting.",
          "The installment method spreads remaining gain.",
        ],
        [
          "How does recapture interact with installment sales?",
          "Why plan around recapture?",
        ],
        undefined
      ),
      lesson(
        "cpa-discipline-m9-l5",
        "Integrated property planning",
        40,
        [
          "Integrate property planning across taxpayers.",
          "Coordinate with entity and individual strategies.",
        ],
        [
          "Property decisions affect entity and owner taxation.",
          "Timing and character coordinate with overall planning.",
          "Nonrecognition can defer tax across transactions.",
        ],
        [
          "How do property decisions interact with entity tax?",
          "Why coordinate timing across a plan?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Related-party loss disallowed; may offset related buyer's later gain.",
      "Like-kind recognized gain = lesser of boot or realized gain.",
      "Replacement basis = FV − deferred gain (like-kind).",
      "Recapture recognized in year of sale even under installment method.",
    ],
    commonTraps: [
      "Allowing related-party losses.",
      "Forgetting recapture is recognized upfront in installment sales.",
      "Applying like-kind treatment to ineligible property.",
    ],
    examTechnique: [
      "Determine recognition and character before planning.",
      "Track deferred gain into replacement-property basis.",
      "Apply recapture before installment spreading.",
    ],
    practicePlan: [
      "Work advanced basis and recapture TBSs.",
      "Compute like-kind exchange gain and basis.",
      "Optimize a cost-recovery plan.",
    ],
    furtherReading: [
      "AICPA TCP Blueprint.",
      "Internal Revenue Code §§ 168, 179, 267, 453, 1031, 1245, 1250.",
    ],
  }),
];
