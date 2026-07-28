import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA Discipline depth content (batch B), keyed by moduleId to merge onto
 * CPA_COURSEWARE. Covers cpa-discipline-m6 through cpa-discipline-m9.
 *
 * Discipline scope per module (CPA Evolution: BAR / ISC / TCP Discipline
 * sections are separate four-hour AICPA Blueprint exams):
 *  - cpa-discipline-m6 → ISC (Information Systems and Controls): information-
 *    system audits — IT audit planning, CAATs, data analytics, IT control and
 *    deficiency evaluation, and SOC / IT reporting. Content sits in ISC
 *    Area III (SOC engagements) with heavy Application/Analysis emphasis.
 *  - cpa-discipline-m7 → TCP (Tax Compliance and Planning): INDIVIDUAL
 *    compliance and personal financial planning — loss limitations, retirement
 *    and education planning, gift/estate transfer, tax-efficient investing.
 *  - cpa-discipline-m8 → TCP: ENTITY compliance and planning — C corporation,
 *    S corporation and partnership taxation, reorganizations/liquidations,
 *    entity choice and QBI, consolidated/multistate.
 *  - cpa-discipline-m9 → TCP: PROPERTY transactions and advanced topics —
 *    basis/gain and character, depreciation recapture, §1031/§1033
 *    nonrecognition, installment sales, related-party rules, cost recovery.
 *
 * Calibration notes:
 *  - Discipline sections push Core topics to higher Analysis/Evaluation with
 *    denser fact patterns and multi-step TBSs; notes flag where a topic is a
 *    Core carry-over re-tested at Discipline rigor.
 *  - TCP tax figures that Congress or the IRS index annually (standard
 *    deduction, brackets, §179/bonus limits, annual gift exclusion,
 *    estate/GST exemption, retirement-plan and NIIT/Additional-Medicare
 *    thresholds, §25A education phaseouts) are flagged "confirm the current-
 *    year amount for your testing window" rather than hard-coded.
 *  - GAAP (FASB ASC), audit/attestation (SSAE/SOC), and federal tax
 *    (IRC/Treasury regs) are distinct authority sets; do not cross-apply.
 */
export const CPA_DISCIPLINE_B_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // cpa-discipline-m6 — ISC: Information system audits
  // ===================================================================
  "cpa-discipline-m6": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "ITGC → application-control reliance chain",
        priority: "critical",
        examinerFocus:
          "Whether you understand that automated application controls are only as reliable as the IT general controls (ITGCs) surrounding them. The examiner rarely asks you to define an ITGC; it gives a fact pattern where an ITGC is weak (e.g., uncontrolled program changes, generic admin access) and tests whether the auditor may still rely on an automated control, and what the auditor must do instead.",
        typicalQuestionForms: [
          "MCQ: given a weakness in change management or logical access, can the auditor rely on a related automated application control?",
          "TBS: map each ITGC domain (access, change, operations) to the application controls it supports and conclude on reliance.",
          "MCQ: classify a control as an ITGC vs an application control vs a manual control.",
        ],
        mustKnow: [
          "Four ITGC domains: (1) logical/physical access security, (2) program change management, (3) program development/SDLC, and (4) computer operations (jobs, backup, incident management).",
          "Application controls are transaction-level (input edit checks, validation, matching, automated calculations, interface controls) and depend on effective ITGCs to remain configured as designed.",
          "If ITGCs are ineffective, the auditor cannot rely on the automated application control from the same period and must revert to substantive testing or test the control's operation across the whole period rather than at a point in time.",
        ],
        scoringActions: [
          "Test ITGCs FIRST; only conclude on application-control reliance after ITGCs are shown effective.",
          "When change management fails, treat every automated control touched by an uncontrolled change as unreliable for the full period.",
          "Distinguish a design deficiency (control cannot prevent/detect) from an operating deficiency (control exists but did not function).",
        ],
      },
      {
        id: "tp2",
        title: "Selecting the correct CAAT for the objective",
        priority: "high",
        examinerFocus:
          "Matching a computer-assisted audit technique to a specific objective: testing whether the CLIENT program processes correctly (test data / integrated test facility / parallel simulation) versus analyzing the CLIENT data itself (generalized audit software). Candidates lose marks by confusing test data with parallel simulation.",
        typicalQuestionForms: [
          "MCQ: which CAAT confirms that the client's program applies edit checks correctly?",
          "MCQ: which CAAT re-performs processing using the auditor's own program on client data?",
          "TBS: choose and justify a CAAT for each of several stated audit objectives.",
        ],
        mustKnow: [
          "Test data: the auditor submits fictitious transactions (valid and invalid) through the CLIENT's program to confirm programmed controls accept/reject as designed; tests processing, not the data population.",
          "Parallel simulation: the auditor processes REAL client data through the AUDITOR's independent program and compares output to the client's output.",
          "Integrated test facility (ITF): auditor test data is processed together with live data against a dummy entity, testing the system in normal operation; requires care to purge test entries.",
          "Generalized audit software (GAS): reads and analyzes the client's data files (recalculation, stratification, duplicate/gap detection, aging) — it tests data, not program logic.",
        ],
        scoringActions: [
          "Ask 'am I testing the program's logic or the data?' before naming a CAAT.",
          "Use parallel simulation when you need independent re-performance; use test data when you need to confirm the client program's edit/validation controls.",
          "Flag the ITF risk that test transactions contaminate live records unless reversed.",
        ],
      },
      {
        id: "tp3",
        title: "Data analytics: full-population testing and anomaly follow-up",
        priority: "high",
        examinerFocus:
          "Whether you treat analytic results as LEADS requiring corroboration rather than conclusions, and understand that analytics can test 100% of a population but does not by itself provide sufficient appropriate evidence. Tests the shift from sampling-based assurance to population screening plus targeted follow-up.",
        typicalQuestionForms: [
          "MCQ: how should the auditor respond to an analytic anomaly (outlier journal entry, weekend posting, round-dollar cluster)?",
          "TBS: interpret analytics output and identify which items require follow-up and what corroboration is needed.",
        ],
        mustKnow: [
          "Analytics can screen an entire population (e.g., all journal entries), but flagged items are exceptions to investigate, not misstatements — the auditor must corroborate with underlying evidence.",
          "Data reliability is a precondition: completeness and accuracy of the source data must be established before conclusions are drawn (garbage in, garbage out).",
          "Common analytics: journal-entry testing (post-dates, unusual users, round amounts, unusual account combinations), three-way match exceptions, duplicate payments, Benford's-law digit analysis, and trend/ratio anomaly detection.",
        ],
        scoringActions: [
          "Establish completeness/accuracy of the data set before relying on any analytic output.",
          "Treat an anomaly as a risk indicator triggering further procedures, never as a stand-alone conclusion of misstatement or fraud.",
          "Document the population, the criteria applied, and the disposition of each flagged exception.",
        ],
      },
      {
        id: "tp4",
        title: "Evaluating and classifying IT control deficiencies",
        priority: "high",
        examinerFocus:
          "Whether you can rank a deficiency's severity — deficiency < significant deficiency < material weakness — based on the likelihood and magnitude of potential misstatement, and recognize that an ITGC weakness can be severe because it undermines many downstream automated controls.",
        typicalQuestionForms: [
          "MCQ: classify an IT deficiency given likelihood and magnitude facts.",
          "TBS: evaluate whether combined deficiencies aggregate to a material weakness and determine required communication.",
        ],
        mustKnow: [
          "Severity depends on (a) whether a reasonable possibility of misstatement exists and (b) the magnitude of the potential misstatement — not on whether a misstatement actually occurred.",
          "A material weakness = a reasonable possibility that a material misstatement will not be prevented or detected timely; a significant deficiency is less severe but important enough to merit attention by those charged with governance.",
          "Deficiencies aggregate: several individually minor IT deficiencies affecting the same account/assertion can combine into a significant deficiency or material weakness.",
          "Significant deficiencies and material weaknesses must be communicated in writing to management and those charged with governance.",
        ],
        scoringActions: [
          "Evaluate likelihood AND magnitude; do not downgrade a deficiency merely because no error was found.",
          "Consider compensating controls before concluding on severity, and consider aggregation across related deficiencies.",
          "Match the classification to the required communication (written, to governance) for significant deficiencies and material weaknesses.",
        ],
      },
      {
        id: "tp5",
        title: "SOC report family: SOC 1 vs SOC 2 vs SOC 3, Type 1 vs Type 2",
        priority: "critical",
        examinerFocus:
          "Selecting the correct SOC engagement and report type for a stated user need, and understanding the roles of service organization, service auditor, user entity and user auditor — including complementary user entity controls (CUECs) and the carve-out vs inclusive method for subservice organizations.",
        typicalQuestionForms: [
          "MCQ: which SOC report meets a user auditor's need for evidence about controls over financial reporting at a payroll processor?",
          "MCQ: distinguish Type 1 (design at a point in time) from Type 2 (design + operating effectiveness over a period).",
          "TBS: identify CUECs a user entity must implement, or choose carve-out vs inclusive treatment of a subservice organization.",
        ],
        mustKnow: [
          "SOC 1 (SSAE 18, AT-C 320) reports on controls at a service organization relevant to USER ENTITIES' internal control over FINANCIAL REPORTING; its intended users are user entities and their auditors (restricted use).",
          "SOC 2 reports on controls relevant to the Trust Services Criteria — security (common criteria, always included), plus availability, processing integrity, confidentiality, and/or privacy as applicable; restricted use.",
          "SOC 3 covers the same Trust Services subject matter as SOC 2 but is a general-use report without the detailed description/tests.",
          "Type 1 = suitability of design at a specified DATE; Type 2 = design AND operating effectiveness over a PERIOD; only Type 2 supports a user auditor's reliance on operating effectiveness.",
          "Carve-out method excludes a subservice organization's controls from the description (user must obtain separate assurance); inclusive method includes them.",
        ],
        scoringActions: [
          "Map the user's need to the subject matter: financial-reporting controls → SOC 1; security/availability/privacy → SOC 2/3.",
          "Choose Type 2 whenever the user auditor needs evidence about operating effectiveness over the audit period.",
          "Identify CUECs — controls the report ASSUMES the user entity implements — and confirm the user entity actually has them.",
        ],
      },
      {
        id: "tp6",
        title: "IT audit planning, risk assessment and reliance decision",
        priority: "medium",
        examinerFocus:
          "Whether IT risk assessment drives scope: identifying significant systems and the controls to test, and deciding a controls-reliance versus fully-substantive strategy for automated processing.",
        typicalQuestionForms: [
          "MCQ: how does an increase in IT risk or a highly automated environment affect the audit approach?",
          "TBS: scope an IT audit — identify in-scope systems and the ITGCs/application controls to test.",
        ],
        mustKnow: [
          "Highly automated processing often forces at least some reliance on controls because substantive evidence about system-generated data cannot be obtained without testing the controls that produce it.",
          "Scoping identifies systems significant to financial reporting (or to the trust services scope) and traces the flow of transactions to relevant automated controls.",
          "Benchmarking: for a stable automated application control, prior-year testing can support current-year reliance if ITGCs (especially change management) remain effective.",
        ],
        scoringActions: [
          "Let identified IT risks and system significance drive which controls are tested — do not test controls indiscriminately.",
          "Confirm change-management effectiveness before benchmarking a prior-year automated control conclusion.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "ISC rewards precise vocabulary and clean control logic. Bank the SOC-report and ITGC/application-control MCQs as near-automatic points, then earn TBS marks by reasoning through reliance step by step.",
      timeBudget:
        "~1.25 min per MCQ. On a control-evaluation TBS, spend the first 3–4 minutes classifying each control (ITGC domain vs application control) before writing reliance conclusions.",
      answerSequence: [
        "Classify each control: ITGC domain (access / change / development / operations) vs application control vs manual.",
        "Test ITGCs first; determine whether they are effective for the whole period.",
        "Only then conclude on automated application-control reliance; otherwise pivot to substantive procedures.",
        "For reporting items, map the user need to the correct SOC report and Type, and note CUECs / subservice treatment.",
      ],
      qualityChecks: [
        "Did I rely on an automated control despite a weak ITGC (change management or access)?",
        "Did I confuse test data (client program) with parallel simulation (auditor program)?",
        "Did I treat an analytics anomaly as a conclusion instead of a lead requiring corroboration?",
        "Did I pick SOC 1 vs SOC 2 by subject matter, and Type 2 when operating effectiveness is needed?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The reliance chain: ITGCs support automated application controls",
        testPointIds: ["tp1", "tp6"],
        explanation: [
          "An automated application control (for example, a three-way match that blocks payment unless PO, receiver and invoice agree) executes exactly as programmed every time — which is its strength and its vulnerability. If someone can change the program without authorization, or obtain access to alter data or configuration, the control's consistency no longer guarantees correctness. That is why the audit of automated controls always begins with IT general controls.",
          "The four ITGC domains form the foundation. Logical and physical access security limits who can reach systems and data (segregation of duties, privileged-access review). Program change management ensures changes are authorized, tested, approved and migrated to production by someone other than the developer. Program development (SDLC) governs new systems. Computer operations covers job scheduling, backup/recovery and incident handling. Weakness in access or change management is the most damaging because it can invalidate every automated control it touches.",
          "The examiner's favorite trap: an application control 'operated effectively' when tested at a point in time, but change management was weak all year. Because an uncontrolled change could have altered the control between tests, the auditor cannot rely on point-in-time evidence — reliance on the automated control fails for the period, and the auditor either tests operation across the whole period or reverts to substantive procedures.",
        ],
        keyRules: [
          "Test ITGCs before relying on any automated application control.",
          "Weak change management or access security can invalidate automated controls for the entire period, not just at the test date.",
          "Design deficiency = control cannot prevent/detect; operating deficiency = control failed to function.",
        ],
        workedProblem: {
          scenario:
            "During an integrated audit, the auditor confirms the client's ERP enforces a three-way match that prevents payment when PO/receiver/invoice do not agree; a point-in-time test on 1 October showed it working. However, ITGC testing found that during the year three developers had standing access to migrate their own code changes to production without independent approval, and change tickets were incomplete. Can the auditor rely on the automated three-way match to reduce accounts-payable substantive testing?",
          steps: [
            "Classify the three-way match as an automated APPLICATION control over the completeness/accuracy/validity of AP disbursements.",
            "Classify the developer migration issue as a program CHANGE-MANAGEMENT ITGC deficiency (no segregation between development and migration; inadequate authorization/documentation).",
            "Assess impact: because developers could change the match logic during the period without independent approval, the control's configuration could have been altered between test dates — the point-in-time test on 1 October does not evidence effective operation for the whole period.",
            "Evaluate severity: the deficiency affects a control central to AP existence/valuation and touches all automated controls in that ERP module; there is a reasonable possibility of material misstatement, so it is at least a significant deficiency and potentially a material weakness depending on magnitude and compensating controls.",
            "Determine response: the auditor cannot benchmark or rely on the automated match; either test the control's operation throughout the period with additional evidence or perform substantive testing of AP (e.g., search for unrecorded liabilities, vouch disbursements) and communicate the deficiency in writing to governance.",
          ],
          conclusion:
            "No. The change-management ITGC deficiency undermines reliance on the automated three-way match for the period. The auditor must revert to substantive AP procedures (or test the control across the whole period) and communicate the deficiency; classification is at least a significant deficiency, evaluated for material-weakness potential after considering magnitude and compensating controls.",
          markingNotes: [
            "Award marks for correctly classifying the match as an application control and the migration issue as a change-management ITGC.",
            "Award marks for concluding point-in-time evidence is insufficient given uncontrolled year-round changes.",
            "Full marks require the reliance conclusion (no reliance / revert to substantive or full-period testing) plus the deficiency-severity and communication points.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Choosing among CAATs: program logic vs data",
        testPointIds: ["tp2"],
        explanation: [
          "The decisive question for any CAAT is whether the objective concerns the PROGRAM's processing or the DATA itself. Test data, integrated test facility and parallel simulation test processing; generalized audit software analyzes data.",
          "Test data feeds fictitious valid and invalid transactions through the client's own program to see whether programmed edit and validation controls behave as designed — for example, whether a negative quantity is rejected. It proves the control worked on those transactions at that time; it says nothing about the population. Parallel simulation flips the arrangement: the auditor runs REAL client data through an INDEPENDENT program the auditor controls and compares the output to the client's, which detects processing differences across actual transactions. Integrated test facility embeds a dummy entity in the live system so auditor test transactions process alongside real ones under production conditions — powerful, but the auditor must reverse or isolate the test entries so they do not corrupt real balances.",
          "Generalized audit software does not touch program logic; it reads client files to recompute totals, stratify balances, age receivables, and detect duplicates or missing sequence numbers. When the objective is 'is the data complete/accurate/reasonable?' the answer is GAS; when it is 'does the program apply the control correctly?' the answer is test data, ITF or parallel simulation.",
        ],
        keyRules: [
          "Test data = auditor's fake transactions through the CLIENT program (tests controls, not the population).",
          "Parallel simulation = REAL data through the AUDITOR's program, compared to client output.",
          "GAS = analysis of client data (recompute, stratify, age, find duplicates/gaps), not program logic.",
          "ITF processes test data with live data against a dummy entity — must purge test entries.",
        ],
      },
      {
        id: "sn3",
        title: "From sampling to full-population analytics",
        testPointIds: ["tp3"],
        explanation: [
          "Data analytics lets the auditor examine an entire population instead of a sample, but it changes the paradigm rather than removing the need for judgment. An analytic that flags 40 unusual journal entries has not found 40 misstatements — it has produced 40 leads. Each requires corroboration with underlying documentation before any conclusion.",
          "Reliability of the source data is a precondition. If the auditor cannot establish that the data set is complete and accurate (reconciled to the general ledger, extracted without filtering), the analytic output is unreliable regardless of technique. Only after completeness and accuracy are established do the criteria and results carry weight.",
          "Typical routines the exam references include journal-entry testing (entries posted after hours or on weekends, by unusual users, in round dollars, or hitting unusual account combinations such as revenue with a suspense account), duplicate-payment detection, three-way-match exception analysis, and digit-frequency (Benford) analysis. In every case, the disposition of each flagged item — investigated, explained, or escalated — must be documented.",
        ],
        keyRules: [
          "Analytic exceptions are leads requiring corroboration, not conclusions.",
          "Establish completeness and accuracy of the data before relying on any analytic result.",
          "Document population, criteria, and disposition of each flagged item.",
        ],
      },
      {
        id: "sn4",
        title: "Deficiency severity and aggregation",
        testPointIds: ["tp4"],
        explanation: [
          "Severity is a function of likelihood and magnitude, assessed prospectively. A control deficiency exists when the design or operation of a control does not allow management or employees to prevent or detect misstatements on a timely basis. A significant deficiency is important enough to merit governance attention; a material weakness is a deficiency (or combination) creating a reasonable possibility that a material misstatement will not be prevented or detected timely.",
          "Crucially, the auditor evaluates the POTENTIAL misstatement, not whether an error actually occurred — a control can be a material weakness even though no misstatement has yet arisen. IT deficiencies are dangerous because a single ITGC weakness (e.g., generic administrator accounts) can compromise many automated controls, and several small deficiencies affecting the same account or assertion can aggregate upward. Compensating controls may reduce severity if they are precise enough to detect the same misstatement. Significant deficiencies and material weaknesses must be communicated in writing to those charged with governance.",
        ],
        keyRules: [
          "Severity = likelihood × magnitude of POTENTIAL misstatement (actual error not required).",
          "One ITGC weakness can invalidate many downstream automated controls; small deficiencies can aggregate.",
          "Significant deficiencies and material weaknesses require written communication to governance.",
        ],
      },
      {
        id: "sn5",
        title: "The SOC report family and complementary user entity controls",
        testPointIds: ["tp5"],
        explanation: [
          "Service organizations (payroll processors, SaaS platforms, data centers) perform functions that become part of a user entity's control environment. The service auditor issues a SOC report so user entities and their auditors can obtain assurance without auditing the service organization directly. Choosing the report is a matter of subject matter and use. SOC 1 addresses controls relevant to user entities' internal control over financial reporting — the report a user auditor needs when the service processes financially significant transactions. SOC 2 addresses the Trust Services Criteria: security (the common criteria, always in scope) plus any of availability, processing integrity, confidentiality and privacy. SOC 3 covers the same trust-services subject matter as SOC 2 but is a short, general-use report suitable for marketing.",
          "The Type distinction governs what the report proves. A Type 1 report opines on the suitability of the DESIGN of controls at a point in time; a Type 2 report opines on design AND operating effectiveness over a period, and only a Type 2 supports a user auditor's reliance on operating effectiveness during the audit period. Two further mechanics recur on the exam: complementary user entity controls (CUECs) are controls the report ASSUMES the user entity itself implements for the service organization's controls to achieve their objectives — the user auditor must verify these exist at the user entity. When the service organization uses a subservice organization, the description either carves it out (excludes it, so the user must seek separate assurance) or includes it inclusively.",
        ],
        keyRules: [
          "SOC 1 → financial-reporting controls (restricted use); SOC 2 → Trust Services Criteria (restricted use); SOC 3 → same as SOC 2 but general use.",
          "Type 1 = design at a date; Type 2 = design + operating effectiveness over a period (needed for reliance on operating effectiveness).",
          "CUECs must be implemented by the user entity; subservice organizations are handled via carve-out or inclusive method.",
        ],
        workedProblem: {
          scenario:
            "A user auditor is auditing Company U, which outsources payroll (calculation, tax remittance, disbursement) to Processor P. The user auditor wants to rely on P's controls over payroll accuracy and completeness for the year under audit. P provides a SOC 2 Type 2 report on security and availability, and separately a SOC 1 Type 1 report. P uses a subservice cloud host, carved out of the description. What should the user auditor obtain and do?",
          steps: [
            "Identify the subject matter needed: payroll accuracy/completeness affects financial reporting, so the relevant report is SOC 1 (ICFR), not SOC 2 (security/availability).",
            "Assess the Type: the auditor needs operating-effectiveness evidence for the AUDIT PERIOD, so a SOC 1 Type 2 is required; the offered SOC 1 is only Type 1 (design at a date) and does not support reliance on operating effectiveness.",
            "Address CUECs: the SOC 1 report will list complementary user entity controls (e.g., U must review and approve payroll registers and reconcile disbursements); the auditor must confirm U actually performs them.",
            "Address the carved-out subservice cloud host: because it is excluded from P's description, the auditor must obtain separate assurance over the host's relevant controls (e.g., that host's own SOC report) or perform additional procedures.",
            "If a SOC 1 Type 2 covering the full period is unavailable, the auditor performs substantive payroll procedures at U or extends testing.",
          ],
          conclusion:
            "The user auditor needs a SOC 1 Type 2 report covering the audit period — the provided SOC 2 (wrong subject matter) and SOC 1 Type 1 (design only) are insufficient for reliance on operating effectiveness. The auditor must verify the CUECs are implemented at Company U and obtain separate assurance over the carved-out cloud subservice host, or otherwise perform substantive payroll procedures.",
          markingNotes: [
            "Award marks for selecting SOC 1 (ICFR) over SOC 2 based on subject matter.",
            "Award marks for requiring Type 2 (operating effectiveness over the period) rather than Type 1.",
            "Full marks require addressing CUEC verification at the user entity and the carved-out subservice organization.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp4"],
        style: "Task-based simulation (control reliance)",
        question:
          "An auditor tests an automated credit-limit control that blocks sales orders exceeding a customer's approved limit. Point-in-time testing shows it works. ITGC testing reveals that (a) five sales staff share a single generic login with the ability to modify credit limits, and (b) emergency program changes bypass the normal approval workflow and are 'documented later.' Evaluate whether the automated credit-limit control can be relied upon and classify the deficiencies.",
        answerPlan: [
          "Classify the credit-limit control (application) vs the two issues (access ITGC; change-management ITGC).",
          "Assess whether point-in-time evidence supports period reliance given the ITGC weaknesses.",
          "Evaluate severity by likelihood and magnitude, considering aggregation.",
          "State the response and required communication.",
        ],
        modelAnswer:
          "The credit-limit block is an automated application control over the validity/valuation of receivables and revenue. Issue (a) is a logical-access ITGC deficiency: a shared generic login destroys accountability and lets users alter the very limits the control enforces, so the control's data inputs cannot be trusted. Issue (b) is a change-management ITGC deficiency: emergency changes without prior approval mean the control's logic could have been altered during the period. Because both ITGCs are ineffective, point-in-time evidence that the control 'worked' does not establish effective operation for the period — the auditor cannot rely on the automated control. Severity: each deficiency creates a reasonable possibility of material misstatement in revenue/receivables and, in combination, affects a key control across the whole population; absent precise compensating controls this rises to at least a significant deficiency and should be evaluated as a potential material weakness based on magnitude. The auditor should perform substantive testing of revenue/receivables (or test the control's operation across the full period with corroborating evidence) and communicate the significant deficiency/material weakness in writing to those charged with governance.",
        markingGuide: [
          "1 mark: identifying the credit-limit control as an automated application control.",
          "1 mark each: classifying (a) as access ITGC and (b) as change-management ITGC.",
          "1 mark: concluding no reliance because ITGC weaknesses invalidate point-in-time evidence for the period.",
          "1 mark: severity classification with likelihood/magnitude and aggregation reasoning.",
          "1 mark: substantive-testing response plus written communication to governance.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp2", "tp3"],
        style: "MCQ set rationale",
        question:
          "For each objective, name the best CAAT/technique and justify it: (1) confirm the client's order-entry program rejects invalid product codes; (2) independently re-perform payroll gross-to-net for all employees and compare to the client's output; (3) identify duplicate vendor payments across the full disbursements file; (4) detect journal entries posted on weekends by IT administrators.",
        answerPlan: [
          "Objective 1 → tests program logic.",
          "Objective 2 → independent re-performance on real data.",
          "Objective 3 → data analysis.",
          "Objective 4 → journal-entry analytics with follow-up.",
        ],
        modelAnswer:
          "(1) Test data (or an integrated test facility): submit transactions with invalid and valid product codes through the client's program to confirm the edit check rejects invalid codes — the objective is the program's control logic. (2) Parallel simulation: process the real payroll data through the auditor's independent program and compare output to the client's, detecting any processing differences across actual transactions. (3) Generalized audit software: read the entire disbursements file to identify duplicate vendor/amount/date combinations — a data-analysis objective over the full population. (4) Data analytics on journal entries: filter the complete journal-entry population for weekend post-dates by administrator users, then treat each flagged entry as a lead to corroborate with supporting documentation, having first confirmed the data extract is complete and accurate. Marks turn on distinguishing program-logic tests (1) from independent re-performance (2) and from data analysis (3, 4), and on treating analytic exceptions in (4) as items to investigate rather than conclusions.",
        markingGuide: [
          "1 mark each: correct technique for objectives 1–4.",
          "1 mark: justification that (1) tests program logic while (2) is independent re-performance on real data.",
          "1 mark: noting (4) requires data-reliability confirmation and treats anomalies as leads, not conclusions.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5", "tp6"],
        style: "Short constructed response",
        question:
          "A prospective customer asks a SaaS provider for assurance about the security and availability of its platform for general marketing use, while the SaaS provider's largest enterprise client wants its external auditor to rely on the platform's controls over financial-transaction processing for the year. Recommend the SOC report(s) and type(s) for each need and explain one limitation the enterprise auditor must address.",
        answerPlan: [
          "General-use security/availability → SOC 3.",
          "Auditor reliance on financial-transaction controls over a period → SOC 1 Type 2.",
          "Limitation: CUECs / carved-out subservice organization.",
        ],
        modelAnswer:
          "For the prospective customer's general marketing need regarding security and availability, a SOC 3 report is appropriate: it covers the Trust Services Criteria (security is the common criteria; availability is added) and is a general-use report that can be distributed freely. For the enterprise client's external auditor, who needs to rely on controls over financial-transaction processing throughout the year, a SOC 1 Type 2 report is required: SOC 1 addresses controls relevant to user entities' internal control over financial reporting, and Type 2 provides evidence of operating effectiveness over the period (a Type 1 would show design only). The enterprise auditor must address the report's complementary user entity controls — controls the SOC 1 assumes the enterprise itself performs (such as reviewing exception reports and reconciling processed transactions) — by confirming those controls actually operate at the enterprise; the auditor must also determine whether any subservice organization is carved out, requiring separate assurance.",
        markingGuide: [
          "1 mark: SOC 3 for general-use security/availability assurance.",
          "1 mark: SOC 1 (ICFR) rather than SOC 2 for the auditor's financial-reporting reliance.",
          "1 mark: Type 2 for operating effectiveness over the period.",
          "1 mark: identifying CUEC verification (or carved-out subservice) as the limitation to address.",
        ],
      },
    ],
  }),

  // ===================================================================
  // cpa-discipline-m7 — TCP: Individual compliance & personal financial planning
  // ===================================================================
  "cpa-discipline-m7": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Loss-limitation ordering: basis → at-risk → passive → excess business loss",
        priority: "critical",
        examinerFocus:
          "Whether you apply the loss limitations in the correct SEQUENCE and stop at the first that bites. TCP pushes the Core §469/§465 rules to multi-limitation TBSs where a loss must survive basis, then at-risk, then passive, then the excess-business-loss limitation before it is deductible.",
        typicalQuestionForms: [
          "TBS: compute the currently deductible loss and the amount suspended, given basis, amount at risk, passive/active status, and other income.",
          "MCQ: which limitation applies first, or what happens to the disallowed portion.",
        ],
        mustKnow: [
          "Order: (1) basis limitation, (2) at-risk limitation (§465), (3) passive activity loss limitation (§469), (4) excess business loss limitation (§461(l)) — apply sequentially.",
          "Passive losses are deductible only against passive income; excess is SUSPENDED and carried forward, and is freed in full when the taxpayer disposes of the entire passive activity in a taxable transaction to an unrelated party.",
          "At-risk suspended losses carry forward until the amount at risk is restored (e.g., additional capital or recourse debt); nonrecourse financing generally does not increase at-risk amount except qualified real-property financing.",
          "The §461(l) excess business loss limit (indexed) applies after passive rules; disallowed amounts convert to an NOL carryforward — confirm the current-year threshold for your testing window.",
        ],
        scoringActions: [
          "Run the four limitations in order and stop the loss at the first limit reached, tracking each suspended layer separately.",
          "Free suspended passive losses only on a fully taxable disposition of the entire activity to an unrelated party.",
          "Treat nonrecourse debt as not at-risk (except qualified real property) when computing the at-risk limit.",
        ],
      },
      {
        id: "tp2",
        title: "Passive activity: material participation and the rental real-estate exceptions",
        priority: "high",
        examinerFocus:
          "Distinguishing active/material participation from passive status, and applying the §469(i) $25,000 active-participation rental allowance (with its AGI phaseout) and the real-estate-professional exception.",
        typicalQuestionForms: [
          "MCQ: is an activity passive given the participation facts?",
          "TBS: compute the deductible rental loss after the $25,000 allowance and phaseout.",
        ],
        mustKnow: [
          "Rental activities are passive by default regardless of participation, subject to exceptions.",
          "The §469(i) exception allows up to $25,000 of rental real-estate loss against nonpassive income for a taxpayer who ACTIVELY participates; it phases out $0.50 per $1 of MAGI between $100,000 and $150,000 (fully gone at $150,000).",
          "A real-estate professional (more than 750 hours and more than half of personal services in real property trades, with material participation) treats qualifying rental activities as nonpassive.",
          "Material participation is met via the seven regulatory tests (e.g., >500 hours; substantially all participation; >100 hours and not less than anyone else).",
        ],
        scoringActions: [
          "Apply the $25,000 allowance only for ACTIVE participation and phase it out over MAGI $100k–$150k.",
          "Check the real-estate-professional tests (750 hours + more-than-half) before treating rentals as nonpassive.",
          "Use a material-participation test rather than assuming activity level.",
        ],
      },
      {
        id: "tp3",
        title: "Retirement accounts: Roth vs traditional, conversions, and RMDs",
        priority: "high",
        examinerFocus:
          "Applying the tax timing of traditional vs Roth accounts, deductibility phaseouts, conversion mechanics and the pro-rata rule, and required minimum distribution rules — at a planning level that weighs current vs expected future rates.",
        typicalQuestionForms: [
          "MCQ: is a traditional IRA contribution deductible given active-plan participation and MAGI?",
          "TBS: compute the taxable portion of a Roth conversion under the pro-rata rule, or the after-tax outcome of Roth vs traditional.",
        ],
        mustKnow: [
          "Traditional IRA: pre-tax (if deductible) with tax-deferred growth, taxed on distribution; Roth IRA: after-tax contributions, qualified distributions tax-free; deductibility/contribution eligibility phase out over MAGI ranges (confirm current-year figures).",
          "Roth conversion pro-rata rule (§408(d)): the taxable portion is based on the ratio of pre-tax to total IRA balances across ALL traditional/SEP/SIMPLE IRAs — you cannot cherry-pick only after-tax basis.",
          "RMDs must begin by the required beginning date (age set by current law; confirm for the testing window); Roth IRAs have no RMDs during the owner's life; the penalty for a shortfall is an excise tax on the amount not distributed.",
          "The 10% early-distribution penalty applies before age 59½ absent an exception (first home up to a limit, higher education, qualified medical, disability, etc.).",
        ],
        scoringActions: [
          "Apply the pro-rata rule across ALL traditional IRAs when computing a conversion's taxable amount.",
          "Compare Roth vs traditional by expected FUTURE vs current marginal rate, not just current deduction.",
          "Check the RMD required beginning date and the no-lifetime-RMD rule for Roth IRAs.",
        ],
      },
      {
        id: "tp4",
        title: "Gift and estate transfer: exclusions, unified credit, portability and basis",
        priority: "critical",
        examinerFocus:
          "Coordinating the annual gift exclusion, gift-splitting, the unified credit/lifetime exemption, portability of the deceased spouse's unused exemption (DSUE), and — the highest-yield planning point — the BASIS consequence: carryover basis for lifetime gifts vs step-up to fair value at death.",
        typicalQuestionForms: [
          "TBS: compute the taxable gift after annual exclusions and splitting, and the recipient's basis.",
          "MCQ: contrast the income-tax basis outcome of gifting vs bequeathing appreciated property.",
        ],
        mustKnow: [
          "Annual exclusion (indexed) applies per donee per year; present-interest gifts qualify; married couples may elect gift-splitting to double the exclusion (confirm the current-year amount).",
          "Lifetime gifts use the unified credit against the combined gift/estate exemption; taxable gifts reduce the exemption available at death; unlimited marital and charitable deductions apply.",
          "Portability: a surviving spouse may use the deceased spouse's unused exemption (DSUE) only if a timely estate-tax return elects it.",
          "BASIS: a lifetime gift generally carries over the donor's basis (with a dual-basis rule for loss property); property acquired from a decedent takes a stepped-up (or down) basis to fair value at death — driving the gift-vs-bequest planning choice for appreciated assets.",
        ],
        scoringActions: [
          "Subtract the annual exclusion per donee (doubled if gift-splitting is elected) before computing the taxable gift.",
          "For appreciated property, favor holding until death for the step-up unless transfer-tax or other goals dominate.",
          "Apply the dual-basis rule when gifted property has declined below the donor's basis.",
        ],
      },
      {
        id: "tp5",
        title: "Education funding and coordinating §25A credits",
        priority: "medium",
        examinerFocus:
          "Choosing among 529 plans, the American Opportunity Tax Credit (AOTC) and the Lifetime Learning Credit (LLC), and avoiding double benefit — the same expenses cannot fund both a tax-free 529 distribution and an education credit.",
        typicalQuestionForms: [
          "MCQ: which education incentive fits given the facts, or how to allocate expenses.",
          "TBS: compute the education credit after coordinating with tax-free 529 distributions and scholarships.",
        ],
        mustKnow: [
          "529 plans grow tax-free and distributions are tax-free if used for qualified education expenses; nonqualified earnings are taxable plus a 10% penalty.",
          "AOTC: up to a per-student limit for the first four years, 40% refundable, requires at least half-time enrollment; LLC: nonrefundable, per-return, no year limit, broader eligibility. Both phase out over MAGI (confirm current-year amounts).",
          "No double dipping: expenses used to claim an education credit or excluded via a tax-free scholarship cannot also be covered by a tax-free 529 distribution.",
        ],
        scoringActions: [
          "Allocate qualified expenses to the highest-value incentive first (often the AOTC) before applying 529 distributions.",
          "Remove scholarship and credit-funded amounts from qualified expenses when computing tax-free 529 distributions.",
        ],
      },
      {
        id: "tp6",
        title: "Tax-efficient investing: character, NIIT, and loss harvesting",
        priority: "high",
        examinerFocus:
          "Applying holding-period character (short vs long-term), the capital-gain netting process, the 3.8% net investment income tax, and the wash-sale rule when harvesting losses.",
        typicalQuestionForms: [
          "TBS: net capital gains/losses and compute tax including NIIT.",
          "MCQ: is a loss deductible given a wash-sale repurchase, or how a straddle/holding period affects character.",
        ],
        mustKnow: [
          "Long-term (held >1 year) gains get preferential rates; short-term gains are ordinary; capital losses offset gains then up to $3,000 of ordinary income, with the excess carried forward.",
          "Net capital-gain netting: net within short-term and within long-term groups, then across groups; 28% collectibles and unrecaptured §1250 gain have special rates.",
          "The 3.8% NIIT applies to the lesser of net investment income or MAGI over a threshold (confirm current-year threshold); it stacks on top of income tax.",
          "Wash-sale rule (§1091): a loss is disallowed if substantially identical securities are bought within 30 days before or after the sale; the disallowed loss adds to the replacement shares' basis.",
        ],
        scoringActions: [
          "Complete the short/long netting before applying rates, and route unrecaptured §1250 and collectibles to their special rates.",
          "Add NIIT on the lesser of net investment income or the MAGI excess.",
          "Disallow harvested losses that trip the 61-day wash-sale window and roll the loss into replacement basis.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "TCP-individual rewards disciplined ordering and clean basis reasoning. Bank the loss-limitation and basis/gift MCQs, then earn TBS marks by showing each limitation layer and each netting step.",
      timeBudget:
        "~1.25 min per MCQ; on a multi-limitation or gift/estate TBS, budget 12–15 minutes and lay out a schedule (limitation-by-limitation or exclusion-by-exclusion) before writing conclusions.",
      answerSequence: [
        "Characterize the item (active/passive, ordinary/capital, gift vs bequest) before computing.",
        "Apply limitations in statutory order (basis → at-risk → passive → excess business loss).",
        "For transfers, subtract exclusions/deductions, then resolve basis (carryover vs step-up).",
        "Layer add-on taxes (NIIT, penalties) and confirm any indexed thresholds for the testing year.",
      ],
      qualityChecks: [
        "Did I apply the loss limitations in order and suspend each disallowed layer separately?",
        "Did I use carryover basis for a lifetime gift but step-up for property from a decedent?",
        "Did I apply the Roth conversion pro-rata rule across all traditional IRAs?",
        "Did I add NIIT and check the wash-sale window before allowing a harvested loss?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The loss-limitation gauntlet",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "A loss from a flow-through activity must survive four gates before it reduces taxable income, and they apply in a fixed order. First, the basis limitation: a partner or S-corp shareholder can deduct losses only up to basis. Second, the at-risk limitation (§465): losses are limited to the amount economically at risk — cash and property contributed plus recourse debt, but generally not nonrecourse debt (except qualified real-property financing). Third, the passive activity loss limitation (§469): if the taxpayer does not materially participate, losses offset only passive income. Fourth, the excess business loss limitation (§461(l)): aggregate business losses above an indexed threshold are disallowed and become an NOL carryforward.",
          "Each gate suspends its own layer with its own release condition. Basis-limited losses free up when basis is restored; at-risk losses free up when the amount at risk increases; passive losses free up against future passive income or, in full, when the taxpayer disposes of the ENTIRE activity in a taxable transaction to an unrelated party. The exam's trap is to stop at the wrong gate or to release passive losses on a partial disposition.",
          "Rental real estate has its own relief valve. Although rentals are passive by default, a taxpayer who actively participates may deduct up to $25,000 of rental losses against nonpassive income, phased out $0.50 per dollar of MAGI from $100,000 to $150,000. A qualifying real-estate professional (more than 750 hours and more than half of personal services in real property trades, materially participating) escapes the passive default entirely.",
        ],
        keyRules: [
          "Order: basis → at-risk → passive → excess business loss.",
          "Nonrecourse debt is generally not at-risk (except qualified real-property financing).",
          "Suspended passive losses are freed in full only on a fully taxable disposition of the entire activity to an unrelated party.",
          "§469(i): up to $25,000 active-participation rental loss, phased out over MAGI $100k–$150k.",
        ],
        workedProblem: {
          scenario:
            "In the current year, an investor has a $70,000 loss from a limited partnership in which she does not materially participate. Her basis is $60,000, her amount at risk is $45,000 (the remaining $15,000 of basis comes from nonrecourse, non-real-estate debt), and she has $10,000 of passive income from another activity. She has no other business losses. How much is currently deductible and how much is suspended, and under which limitation?",
          steps: [
            "Basis limitation: loss $70,000 vs basis $60,000 → $10,000 disallowed by basis and suspended until basis is restored; $60,000 proceeds to the next gate.",
            "At-risk limitation (§465): of the remaining $60,000, only $45,000 is at risk (nonrecourse non-real-estate debt is not at-risk) → $15,000 suspended under at-risk rules; $45,000 proceeds.",
            "Passive limitation (§469): the activity is passive (no material participation), so the $45,000 offsets only passive income. She has $10,000 passive income → $10,000 deductible now; $35,000 suspended as a passive loss carryforward.",
            "Excess business loss (§461(l)): only $10,000 of loss is being deducted, well below the indexed threshold, so no further limitation applies.",
            "Track the three suspended layers separately: $10,000 (basis), $15,000 (at-risk), $35,000 (passive), each with its own release condition.",
          ],
          conclusion:
            "Currently deductible: $10,000 (against passive income). Suspended: $10,000 under the basis limitation, $15,000 under the at-risk limitation, and $35,000 as a passive loss carryforward — released respectively when basis is restored, when the amount at risk increases, and against future passive income or upon a fully taxable disposition of the entire activity.",
          markingNotes: [
            "Award marks for applying the four limitations in order and stopping the loss at each gate.",
            "Award marks for excluding nonrecourse non-real-estate debt from the at-risk amount.",
            "Full marks require the $10,000 current deduction and the correctly labeled three suspended layers with release conditions.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Retirement account taxation and RMD mechanics",
        testPointIds: ["tp3"],
        explanation: [
          "The traditional-vs-Roth choice is a bet on marginal rates. A deductible traditional contribution saves tax now and defers growth, but every dollar (contribution and earnings) is ordinary income on distribution. A Roth contribution is after-tax, but qualified distributions — after the five-year period and a triggering event such as age 59½ — are entirely tax-free, including earnings. The planning rule: favor Roth when the expected future marginal rate exceeds the current rate, and traditional when the reverse holds. Deductibility of a traditional contribution phases out when the taxpayer (or spouse) is an active plan participant, and Roth eligibility phases out over MAGI ranges that must be confirmed for the testing year.",
          "Conversions are governed by the pro-rata rule of §408(d): when a taxpayer converts, the taxable fraction equals the pre-tax balance divided by the total of ALL traditional, SEP and SIMPLE IRA balances — a taxpayer with after-tax basis mixed among several IRAs cannot convert only the basis tax-free. This defeats the naive 'backdoor Roth' when other pre-tax IRA money exists.",
          "Required minimum distributions force taxation of deferred accounts. Traditional-account RMDs must begin by the required beginning date set by current law (confirm the age for your window); Roth IRAs require no distributions during the owner's lifetime, a key reason to prefer Roth for legacy planning. A shortfall triggers an excise tax on the amount that should have been distributed. Distributions before 59½ generally incur a 10% penalty unless an exception applies.",
        ],
        keyRules: [
          "Traditional = taxed on distribution; Roth qualified distributions = tax-free (5-year rule + triggering event).",
          "Conversion pro-rata rule aggregates ALL traditional/SEP/SIMPLE IRAs to determine the taxable portion.",
          "Roth IRAs have no lifetime RMDs; traditional-account RMDs begin at the statutory required beginning date.",
        ],
      },
      {
        id: "sn3",
        title: "Lifetime gifts vs bequests: transfer tax and the basis pivot",
        testPointIds: ["tp4"],
        explanation: [
          "Transfer planning coordinates two exclusions and a credit. The annual exclusion (indexed) shelters present-interest gifts per donee each year and can be doubled by a married couple's gift-splitting election. Gifts above the annual exclusion consume the lifetime unified exemption via the unified credit; unlimited marital and charitable deductions remove qualifying transfers entirely. At death, portability lets a surviving spouse add the deceased spouse's unused exemption (DSUE) — but only if the first estate files a timely return electing it.",
          "The highest-yield exam point is the income-tax BASIS consequence, which cuts against the transfer-tax instinct to give assets away early. A lifetime gift carries over the donor's basis to the donee (a dual-basis rule limits a loss when the property's value at gift is below the donor's basis). Property acquired from a decedent instead takes a basis equal to fair value at death — a step-up (or step-down). For appreciated property the family often saves more income tax by holding the asset until death, capturing the step-up and erasing the built-in gain, than by gifting it and passing along a low carryover basis.",
          "The examiner tests the interaction: gifting removes future appreciation from the estate (good for transfer tax) but forfeits the step-up (bad for income tax). The right answer depends on whether the estate is likely to be taxable and on the size of the built-in gain.",
        ],
        keyRules: [
          "Annual exclusion per donee (doubled with gift-splitting); taxable gifts consume the unified exemption.",
          "Portability (DSUE) requires a timely estate-tax return election by the first spouse's estate.",
          "Lifetime gift → carryover basis (dual-basis for loss property); property from a decedent → stepped-up basis to FV at death.",
        ],
        workedProblem: {
          scenario:
            "A widower owns stock with a fair value of $500,000 and a basis of $100,000. He is deciding whether to gift it now to his daughter or leave it to her at death. His estate is well below the exemption. If gifted, the daughter later sells for $520,000; if bequeathed, she sells for $520,000 shortly after his death. Compare the income-tax gain in each case and identify the transfer-tax consideration.",
          steps: [
            "Gift now: the daughter takes the donor's carryover basis of $100,000. On a later sale for $520,000 her gain is $520,000 − $100,000 = $420,000 (long-term, using the tacked holding period).",
            "Bequest: the daughter's basis steps up to the $500,000 fair value at death. On a sale for $520,000 her gain is $520,000 − $500,000 = $20,000.",
            "Compare: gifting produces $420,000 of taxable gain vs $20,000 if bequeathed — the step-up erases the $400,000 of built-in appreciation.",
            "Transfer-tax check: the estate is below the exemption, so removing the asset from the estate provides no transfer-tax benefit; there is no offsetting reason to sacrifice the step-up.",
            "For the gift, note the annual exclusion would reduce the taxable gift, but that does not change the income-tax basis outcome.",
          ],
          conclusion:
            "Because the estate is non-taxable, the widower should HOLD the stock and let it pass at death: the step-up to $500,000 cuts the daughter's taxable gain from $420,000 (carryover-basis gift) to $20,000. Gifting would only make sense if transfer-tax savings or non-tax goals outweighed the lost step-up, which is not the case here.",
          markingNotes: [
            "Award marks for carryover basis on the gift ($100,000) vs step-up on the bequest ($500,000).",
            "Award marks for the two gain computations ($420,000 vs $20,000).",
            "Full marks require the conclusion to hold until death given a non-taxable estate, tying basis to the transfer-tax context.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Coordinating education incentives",
        testPointIds: ["tp5"],
        explanation: [
          "Three incentives overlap: 529 plans, the American Opportunity Tax Credit, and the Lifetime Learning Credit. A 529 grows tax-free and distributions are tax-free to the extent of qualified education expenses; earnings on nonqualified distributions are taxable and carry a 10% penalty. The AOTC is the most valuable per dollar — up to a per-student cap for the first four years of postsecondary education, 40% refundable, requiring at least half-time enrollment — while the Lifetime Learning Credit is nonrefundable, computed per return, available for any year and for less-than-half-time study. Both credits phase out over MAGI ranges that must be confirmed for the testing year.",
          "The controlling rule is no double benefit. The same dollar of qualified expense cannot simultaneously support a tax-free 529 distribution and an education credit, nor can expenses paid by a tax-free scholarship. Efficient planning allocates expenses to the highest-value incentive first — usually the AOTC — then uses the 529 for the remaining qualified costs, and removes scholarship-funded amounts from the qualified-expense pool before computing the tax-free 529 portion.",
        ],
        keyRules: [
          "529 distributions tax-free for qualified expenses; nonqualified earnings taxable + 10% penalty.",
          "AOTC: first four years, partly refundable, half-time minimum; LLC: any year, nonrefundable, per return.",
          "Same expenses cannot fund both a credit and a tax-free 529 distribution (or be covered by a tax-free scholarship).",
        ],
      },
      {
        id: "sn5",
        title: "Character, netting, NIIT and the wash-sale rule",
        testPointIds: ["tp6"],
        explanation: [
          "Investment tax outcomes turn first on character. Assets held more than one year yield long-term capital gain taxed at preferential rates; one year or less yields short-term gain taxed as ordinary income. The netting process nets short-term gains and losses together and long-term gains and losses together, then nets the two results; if a net loss remains, up to $3,000 offsets ordinary income and the excess carries forward indefinitely. Two special long-term rates apply to collectibles (28%) and to unrecaptured §1250 gain (25% maximum).",
          "Two add-ons matter. The 3.8% net investment income tax applies to the lesser of net investment income or the excess of MAGI over a statutory threshold, stacking on top of the regular tax on the same income. Confirm the threshold for the testing window. When harvesting losses, the wash-sale rule (§1091) disallows a loss if substantially identical securities are acquired within 30 days before or after the sale — a 61-day window; the disallowed loss is added to the basis of the replacement shares, deferring rather than eliminating the benefit, and the holding period tacks.",
        ],
        keyRules: [
          "Long-term (>1 yr) preferential vs short-term ordinary; net within groups then across, $3,000 ordinary offset, excess carries forward.",
          "NIIT 3.8% on the lesser of net investment income or MAGI over the threshold.",
          "Wash sale: loss disallowed if substantially identical security bought within 30 days before/after; disallowed loss increases replacement basis.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (loss limitations)",
        question:
          "A taxpayer actively participates in a residential rental he owns directly, generating a $40,000 rental loss this year. His only other income is $130,000 of wages (MAGI $130,000). He has sufficient basis and is fully at risk. Compute the currently deductible rental loss and any suspended amount, and explain what would change if he were a qualifying real-estate professional.",
        answerPlan: [
          "Rental is passive by default; check the §469(i) active-participation exception.",
          "Apply the $25,000 allowance and the MAGI phaseout.",
          "State the suspended passive loss.",
          "Contrast the real-estate-professional outcome.",
        ],
        modelAnswer:
          "The rental is passive by default, but because the taxpayer actively participates he may use the §469(i) exception of up to $25,000 against nonpassive income. That $25,000 allowance phases out $0.50 per dollar of MAGI above $100,000. With MAGI of $130,000, the phaseout reduces the allowance by 0.50 × ($130,000 − $100,000) = $15,000, leaving an allowance of $10,000. He therefore deducts $10,000 of the $40,000 rental loss this year against his wages; the remaining $30,000 is suspended as a passive loss carried forward (basis and at-risk limits do not bind since he has basis and is fully at risk). If instead he qualified as a real-estate professional — more than 750 hours and more than half of his personal services in real property trades, materially participating — the rental would be nonpassive and the entire $40,000 loss would be deductible against his wages this year, with nothing suspended.",
        markingGuide: [
          "1 mark: recognizing the rental is passive but eligible for the §469(i) active-participation exception.",
          "1 mark: computing the phaseout ($15,000 reduction) to a $10,000 allowance.",
          "1 mark: $10,000 deductible now and $30,000 suspended.",
          "1 mark: real-estate-professional status makes the full $40,000 deductible (nonpassive).",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3", "tp6"],
        style: "MCQ set rationale",
        question:
          "Explain the tax outcome of each: (1) a taxpayer with $90,000 in a traditional IRA ($30,000 of which is nondeductible basis) converts $30,000 to a Roth; (2) the same taxpayer sells stock at a $5,000 loss on 10 March and buys the identical stock on 25 March.",
        answerPlan: [
          "Conversion → pro-rata rule across the whole IRA.",
          "Loss repurchase → wash-sale disallowance and basis adjustment.",
        ],
        modelAnswer:
          "(1) The Roth conversion is taxed under the §408(d) pro-rata rule: the nontaxable fraction equals total after-tax basis divided by the total IRA balance, i.e., $30,000 / $90,000 = one-third. Of the $30,000 converted, one-third ($10,000) is a tax-free return of basis and two-thirds ($20,000) is taxable ordinary income. The taxpayer cannot convert only the basis tax-free. (2) The March repurchase of identical stock within 30 days of the loss sale triggers the wash-sale rule: the $5,000 loss is disallowed for the current year and instead added to the basis of the newly purchased shares (with the holding period tacking), deferring the benefit until the replacement shares are ultimately sold outside a wash-sale window.",
        markingGuide: [
          "1 mark: applying the pro-rata rule across the entire IRA balance.",
          "1 mark: $10,000 tax-free / $20,000 taxable split.",
          "1 mark: identifying the 30-day wash sale and disallowing the $5,000 loss.",
          "1 mark: adding the disallowed loss to replacement-share basis.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp4", "tp5"],
        style: "Short constructed response",
        question:
          "A married couple wants to give $60,000 to each of their two children this year and fund a grandchild's college. Explain how gift-splitting and the annual exclusion apply to the children's gifts, and how they should coordinate a 529 distribution with the American Opportunity Tax Credit for the grandchild's qualified expenses.",
        answerPlan: [
          "Annual exclusion per donee, doubled by gift-splitting.",
          "Excess consumes the lifetime exemption.",
          "Coordinate AOTC first, then 529 for remaining expenses; no double benefit.",
        ],
        modelAnswer:
          "By electing gift-splitting, the married couple treats each gift as made one-half by each spouse, effectively doubling the annual exclusion per child. Each $60,000 gift is sheltered up to twice the current-year annual exclusion; only the portion above the combined exclusion is a taxable gift that reduces their lifetime unified exemption (no gift tax is due while exemption remains). For the grandchild, they should first allocate qualified tuition to the American Opportunity Tax Credit, which is the most valuable per dollar (partly refundable, first four years, half-time enrollment), because the same expenses cannot support both a credit and a tax-free 529 distribution. After reserving the expenses claimed for the AOTC (and removing any tax-free scholarship amounts), they use the 529 distribution to cover the remaining qualified expenses tax-free, avoiding the taxable-earnings-plus-penalty result of a nonqualified 529 distribution.",
        markingGuide: [
          "1 mark: gift-splitting doubles the annual exclusion per donee.",
          "1 mark: excess over the exclusion reduces the lifetime exemption (no current tax if exemption remains).",
          "1 mark: allocate expenses to the AOTC first.",
          "1 mark: no double benefit — reserve credit/scholarship expenses before the tax-free 529 distribution.",
        ],
      },
    ],
  }),

  // ===================================================================
  // cpa-discipline-m8 — TCP: Entity tax compliance & planning
  // ===================================================================
  "cpa-discipline-m8": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "C-corporation distributions: E&P and the dividend/ROC/gain ordering",
        priority: "critical",
        examinerFocus:
          "Applying the §301/§316 ordering to a corporate distribution: dividend to the extent of earnings and profits, then tax-free return of capital to the extent of stock basis, then capital gain. Tests the interaction of current vs accumulated E&P.",
        typicalQuestionForms: [
          "TBS: given current E&P, accumulated E&P and shareholder basis, split a distribution into dividend, return of capital and gain.",
          "MCQ: how a current-year deficit interacts with positive accumulated E&P.",
        ],
        mustKnow: [
          "Distribution ordering: (1) dividend up to E&P, (2) return of capital reducing stock basis (tax-free), (3) capital gain once basis is exhausted.",
          "Current E&P is measured at year-end and allocated pro rata to distributions; accumulated E&P is applied in chronological order — a current deficit is netted against accumulated E&P at the distribution date.",
          "A property distribution: the corporation recognizes gain (not loss) as if it sold the property at FV; the shareholder's dividend is the property's FV (reduced by liabilities assumed), and takes a FV basis.",
        ],
        scoringActions: [
          "Split the distribution dividend → return of capital → gain in that order using E&P then basis.",
          "Separate current from accumulated E&P and net a current deficit against accumulated E&P at the distribution date.",
          "Recognize corporate gain (never loss) on a property distribution and value the dividend at FV net of liabilities.",
        ],
      },
      {
        id: "tp2",
        title: "S-corporation: basis, AAA, distribution ordering and loss limits",
        priority: "critical",
        examinerFocus:
          "Tracking stock basis and the accumulated adjustments account (AAA) to characterize distributions and to limit loss deductions (stock basis then debt basis), including the built-in gains tax for former C corporations.",
        typicalQuestionForms: [
          "TBS: order basis adjustments, characterize a distribution using AAA/E&P, and compute the deductible loss.",
          "MCQ: the effect of debt basis on losses, or built-in gains tax exposure.",
        ],
        mustKnow: [
          "Stock-basis ordering: increase for income/contributions, decrease for distributions, THEN decrease for losses/deductions — distributions reduce basis before losses.",
          "Distributions from an S corp with NO C-corp E&P are tax-free to the extent of stock basis, then capital gain; with C-corp E&P, ordering is AAA (tax-free to basis) → dividend (E&P) → return of capital → gain.",
          "Losses are deductible only up to stock basis PLUS direct shareholder debt basis; excess is suspended and carried forward; distributions do not create debt basis.",
          "Built-in gains tax: a corporate-level tax can apply when a former C corporation sells appreciated assets within the recognition period after S election.",
        ],
        scoringActions: [
          "Adjust stock basis in order (income → distributions → losses) before characterizing anything.",
          "Use AAA (not E&P) first for an S corp with accumulated C-corp E&P.",
          "Cap losses at stock basis plus DIRECT debt basis and suspend the excess.",
        ],
      },
      {
        id: "tp3",
        title: "Partnership: basis, substantial-economic-effect allocations, guaranteed payments and distributions",
        priority: "high",
        examinerFocus:
          "Computing outside basis (including the share of partnership liabilities), testing special allocations for substantial economic effect, treating guaranteed payments, and applying §731 distribution rules.",
        typicalQuestionForms: [
          "TBS: compute a partner's outside basis and the gain/basis on a distribution.",
          "MCQ: whether a special allocation is respected, or the treatment of a guaranteed payment.",
        ],
        mustKnow: [
          "Outside basis includes the partner's share of partnership liabilities (recourse allocated by economic risk of loss; nonrecourse by profit-sharing/§752); changes in liability shares change basis.",
          "A special allocation is respected only if it has substantial economic effect — capital accounts must be properly maintained, liquidations follow positive capital balances, and a deficit-restoration or qualified-income-offset applies.",
          "Guaranteed payments (for services or capital, determined without regard to income) are ordinary income to the partner and deductible/capitalized by the partnership; they are not distributions.",
          "§731: a current distribution is tax-free to the extent of outside basis (money reduces basis first); gain arises only when money distributed exceeds outside basis; loss is recognized only on a liquidating distribution of money/hot assets in limited cases.",
        ],
        scoringActions: [
          "Include the partner's share of liabilities in outside basis and update it when liability shares shift.",
          "Test capital-account maintenance and liquidation-per-balances before respecting a special allocation.",
          "Treat guaranteed payments as ordinary income to the partner, not distributions, and apply §731 money-first ordering.",
        ],
      },
      {
        id: "tp4",
        title: "Reorganizations and liquidations",
        priority: "high",
        examinerFocus:
          "Identifying tax-free reorganization types and their requirements (continuity, business purpose), and distinguishing taxable liquidations (§331/§336) from the tax-free parent-subsidiary liquidation (§332/§337).",
        typicalQuestionForms: [
          "MCQ: classify a transaction as a Type A/B/C/D reorganization or determine whether it qualifies for nonrecognition.",
          "TBS: compute gain and basis in a liquidation for the corporation and shareholders.",
        ],
        mustKnow: [
          "Reorganization doctrines: continuity of interest, continuity of business enterprise, and a valid business purpose must be present; boot triggers gain recognition up to the boot received.",
          "Type A = statutory merger/consolidation; Type B = stock-for-stock (solely voting stock, control acquired); Type C = stock-for-substantially-all-assets; Type D = divisive/acquisitive using §355 for spin-offs.",
          "General liquidation (§331): shareholders treat the distribution as a sale of stock (capital gain/loss); the liquidating corporation recognizes gain AND loss on distributed property (§336).",
          "Parent-subsidiary liquidation of an 80%-owned subsidiary (§332/§337): generally tax-free to both parent and subsidiary, with carryover basis to the parent.",
        ],
        scoringActions: [
          "Test continuity of interest/business enterprise and business purpose before granting reorganization nonrecognition.",
          "Recognize boot-triggered gain up to boot received in an otherwise tax-free reorganization.",
          "Separate a taxable §331 liquidation (gain and loss) from a tax-free §332 parent-subsidiary liquidation.",
        ],
      },
      {
        id: "tp5",
        title: "Entity choice and the §199A QBI deduction",
        priority: "high",
        examinerFocus:
          "Weighing flow-through vs C-corporation taxation and applying the qualified business income deduction, including the wage/UBIA limitations and the specified-service (SSTB) phaseout.",
        typicalQuestionForms: [
          "TBS: compute the §199A deduction with the wage/UBIA limit and taxable-income thresholds.",
          "MCQ: when a C corporation is preferable, or whether an SSTB qualifies.",
        ],
        mustKnow: [
          "§199A: generally up to 20% of qualified business income from pass-throughs; above the taxable-income threshold the deduction is limited to the greater of 50% of W-2 wages or 25% of wages plus 2.5% of UBIA of qualified property (confirm current-year thresholds).",
          "Specified service trades or businesses (health, law, accounting, consulting, etc.) lose the QBI deduction entirely once taxable income exceeds the upper threshold, with a phase-in in between.",
          "Flow-through income is taxed once at the owner level (potentially reduced by §199A); C-corp income is taxed at the entity rate and again on dividends (double taxation), but a C corp may defer owner-level tax by retaining earnings.",
        ],
        scoringActions: [
          "Apply the wage/UBIA limitation only above the taxable-income threshold; below it, use the straight 20%.",
          "Deny QBI for an SSTB above the upper threshold and phase it in within the range.",
          "Compare single-level flow-through tax (net of QBI) against C-corp double taxation for the specific facts.",
        ],
      },
      {
        id: "tp6",
        title: "Consolidated returns and multistate apportionment",
        priority: "medium",
        examinerFocus:
          "The benefits and mechanics of filing a consolidated return (intercompany loss offset, deferral of intercompany gains) and the state-tax concepts of nexus and apportionment.",
        typicalQuestionForms: [
          "MCQ: a benefit of consolidation, or how nexus/apportionment determines state taxable income.",
          "TBS: apply an apportionment formula to allocate income among states.",
        ],
        mustKnow: [
          "Consolidated returns (affiliated group, generally 80% ownership) allow one member's losses to offset another's income and defer intercompany transaction gains until a triggering event.",
          "Nexus (economic or physical presence) establishes a state's authority to tax; Public Law 86-272 protects solicitation of tangible-goods sales from state income tax in limited cases.",
          "State taxable income = apportionable business income × apportionment factor (single-sales-factor or three-factor of sales/payroll/property), plus specifically allocated nonbusiness income.",
        ],
        scoringActions: [
          "Use consolidation to offset losses within the group and defer intercompany gains until triggered.",
          "Establish nexus before apportioning, and apply the state's specific apportionment formula.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "TCP-entity is basis- and ordering-driven. Bank the distribution-ordering and QBI MCQs, and earn TBS marks by presenting a clean basis/AAA/E&P schedule before characterizing anything.",
      timeBudget:
        "~1.25 min per MCQ; on an S-corp or partnership TBS, budget 12–15 minutes and build the basis schedule first, then characterize distributions and losses.",
      answerSequence: [
        "Identify entity type and the governing ordering rules (E&P for C, basis/AAA for S, outside basis for partnerships).",
        "Adjust basis/E&P/AAA in the correct sequence.",
        "Characterize distributions (dividend/ROC/gain or AAA/E&P) and cap losses at basis (+ debt basis for S corps).",
        "Layer planning overlays (QBI, entity choice, reorganization/liquidation treatment, consolidation/state).",
      ],
      qualityChecks: [
        "Did I reduce basis for distributions BEFORE losses (S corp) and use AAA before E&P?",
        "Did I include the partner's share of liabilities in outside basis?",
        "Did I recognize corporate gain (not loss) on a C-corp property distribution?",
        "Did I apply the §199A wage/UBIA limit only above the threshold and deny SSTB QBI above the ceiling?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "C-corporation distribution ordering and E&P",
        testPointIds: ["tp1"],
        explanation: [
          "A corporate distribution is characterized in a strict three-step order under §301 and §316. To the extent of earnings and profits it is a taxable dividend; once E&P is exhausted, it is a tax-free return of capital that reduces the shareholder's stock basis; once basis is gone, any remainder is capital gain. E&P is a tax concept distinct from retained earnings — it approximates the corporation's economic capacity to pay dividends.",
          "The interplay of current and accumulated E&P is the tested nuance. Current E&P is determined at year-end and allocated pro rata across all distributions during the year; accumulated E&P is applied on a first-come, first-served basis by distribution date. When current E&P is positive it generally makes distributions dividends even if accumulated E&P is negative. When current E&P is a deficit, it is netted against accumulated E&P as of each distribution date to determine how much dividend capacity remains.",
          "Property distributions add two wrinkles. The corporation recognizes gain — but never loss — as though it sold the property at fair value, which itself increases E&P. The shareholder's dividend equals the property's fair value reduced by any liabilities assumed, and the shareholder takes the property with a fair-value basis.",
        ],
        keyRules: [
          "Order: dividend (to E&P) → return of capital (to basis, tax-free) → capital gain.",
          "Current E&P allocated pro rata; accumulated E&P applied chronologically; net a current deficit against accumulated E&P at the distribution date.",
          "Property distribution: corporation recognizes gain not loss; shareholder dividend = FV less liabilities, FV basis.",
        ],
        workedProblem: {
          scenario:
            "A C corporation distributes $50,000 cash to its sole shareholder at year-end. Accumulated E&P at the start of the year was $12,000; current-year E&P is $18,000. The shareholder's stock basis before the distribution is $15,000. Characterize the distribution.",
          steps: [
            "Total E&P available = accumulated $12,000 + current $18,000 = $30,000; the distribution is a dividend to the extent of E&P.",
            "Dividend portion = $30,000 (taxable as a dividend).",
            "Remaining distribution = $50,000 − $30,000 = $20,000, applied next as a return of capital to the extent of stock basis of $15,000 → $15,000 tax-free, reducing basis to $0.",
            "Remaining $20,000 − $15,000 = $5,000 is capital gain (basis is exhausted).",
            "Result: $30,000 dividend, $15,000 tax-free return of capital, $5,000 capital gain; ending stock basis $0.",
          ],
          conclusion:
            "The $50,000 distribution is characterized as a $30,000 taxable dividend (to total E&P), a $15,000 tax-free return of capital (reducing basis to zero), and a $5,000 capital gain. Ending stock basis is $0.",
          markingNotes: [
            "Award marks for combining current and accumulated E&P to a $30,000 dividend.",
            "Award marks for the $15,000 return of capital reducing basis to zero.",
            "Full marks require the $5,000 capital gain once basis is exhausted.",
          ],
        },
      },
      {
        id: "sn2",
        title: "S-corporation basis, AAA and loss limits",
        testPointIds: ["tp2"],
        explanation: [
          "S-corp taxation runs through the shareholder's stock basis, adjusted in a required order each year: first increase for separately and non-separately stated income and additional contributions; then decrease for distributions; then decrease for nondeductible expenses and losses/deductions. Because distributions are subtracted before losses, a shareholder can receive a tax-free distribution and still have basis-limited losses suspended.",
          "Characterizing distributions depends on whether the S corporation has accumulated C-corp E&P. With no C-corp E&P, distributions are tax-free to the extent of stock basis and capital gain beyond it. With C-corp E&P, the ordering is: AAA (tax-free to the extent of stock basis), then dividend from accumulated E&P, then return of capital, then gain. The AAA tracks the cumulative undistributed S-corp income and is the mechanism that keeps already-taxed income from being taxed again.",
          "Losses are limited to stock basis PLUS the shareholder's direct debt basis (loans the shareholder personally made to the corporation) — guarantees of third-party debt do not create basis. Excess losses are suspended and carried forward until basis is restored. A separate hazard for former C corporations is the built-in gains tax, a corporate-level tax that can apply when appreciated assets held at conversion are sold within the recognition period.",
        ],
        keyRules: [
          "Stock-basis order: income → distributions → losses (distributions reduce basis before losses).",
          "With C-corp E&P: distributions ordered AAA → dividend (E&P) → return of capital → gain.",
          "Loss limit = stock basis + direct shareholder debt basis; guarantees do not create basis; excess suspended.",
        ],
        workedProblem: {
          scenario:
            "An S-corporation shareholder (no C-corp E&P) begins the year with $20,000 stock basis and a $10,000 direct loan to the corporation (debt basis $10,000). This year the corporation allocates her $8,000 of ordinary income, distributes $22,000 cash to her, and passes through a $25,000 ordinary loss. Determine the taxability of the distribution and the deductible loss.",
          steps: [
            "Increase stock basis for income: $20,000 + $8,000 = $28,000.",
            "Apply the distribution next: $22,000 distribution vs $28,000 basis → fully tax-free (no C-corp E&P), reducing stock basis to $6,000.",
            "Apply the loss last, limited to stock basis then debt basis: stock basis $6,000 absorbs $6,000 of loss (stock basis → $0); remaining $19,000 loss reduces debt basis of $10,000 → $10,000 deductible, debt basis → $0.",
            "Total loss deductible this year = $6,000 (stock) + $10,000 (debt) = $16,000; the remaining $9,000 loss is suspended and carried forward until basis is restored.",
            "Confirm the ordering: income first, then distribution, then loss — the distribution stays tax-free even though it contributes to suspending part of the loss.",
          ],
          conclusion:
            "The $22,000 distribution is entirely tax-free (reducing stock basis to $6,000). Of the $25,000 loss, $16,000 is deductible this year (using $6,000 stock basis and $10,000 debt basis) and $9,000 is suspended and carried forward. Ending stock and debt basis are both $0.",
          markingNotes: [
            "Award marks for adjusting basis in order: income, then distribution, then loss.",
            "Award marks for the tax-free distribution and the $16,000 deductible loss (stock then debt basis).",
            "Full marks require the $9,000 suspended loss carryforward and zero ending basis.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Partnership basis, allocations and distributions",
        testPointIds: ["tp3"],
        explanation: [
          "A partner's outside basis differs fundamentally from an S shareholder's because it includes the partner's share of partnership liabilities under §752. Recourse liabilities are allocated to the partner who bears the economic risk of loss; nonrecourse liabilities are generally shared by profit-sharing ratios. An increase in the partner's liability share is treated as a deemed cash contribution (raising basis); a decrease is a deemed distribution (lowering basis and possibly triggering gain).",
          "Special allocations that differ from the general profit/loss ratio are respected only if they have substantial economic effect: the partnership must maintain capital accounts under the regulations, liquidate according to positive capital-account balances, and require either a deficit-restoration obligation or a qualified income offset. Absent substantial economic effect, income is reallocated by the partners' interests.",
          "Payments and distributions are distinct. Guaranteed payments — for services or the use of capital, determined without regard to income — are ordinary income to the recipient partner and are deducted or capitalized by the partnership; they are not distributions and do not reduce basis directly. Under §731, a current distribution is tax-free to the extent of outside basis, with money applied first; gain results only when cash distributed exceeds outside basis, and losses are recognized only in limited liquidating situations.",
        ],
        keyRules: [
          "Outside basis includes the partner's share of liabilities; liability-share changes are deemed contributions/distributions.",
          "Special allocations need substantial economic effect (capital-account maintenance, liquidation per balances, DRO/QIO).",
          "Guaranteed payments = ordinary income, not distributions; §731 distributions tax-free to outside basis (money first).",
        ],
      },
      {
        id: "sn4",
        title: "Reorganizations and liquidations",
        testPointIds: ["tp4"],
        explanation: [
          "Tax-free reorganizations defer gain when a corporate restructuring meets both statutory form and judicial doctrines. Continuity of interest requires target shareholders to retain a meaningful equity stake in the acquirer; continuity of business enterprise requires the acquirer to continue the target's business or use its assets; and a valid non-tax business purpose must exist. Even in a qualifying reorganization, boot (cash or non-stock) received triggers recognition of gain up to the lesser of realized gain or boot. The main types: Type A statutory merger; Type B stock-for-stock using solely voting stock to acquire control; Type C substantially-all-assets for voting stock; and Type D divisive reorganizations paired with §355 spin-offs.",
          "Liquidations diverge sharply. In a general §331 liquidation, shareholders treat amounts received as full payment for their stock, recognizing capital gain or loss, and the liquidating corporation under §336 recognizes both gain AND loss on distributed property as if sold at fair value. By contrast, the liquidation of an 80%-owned subsidiary into its parent under §332/§337 is generally tax-free to both: the parent recognizes no gain on cancellation of its stock and takes the subsidiary's assets at carryover basis. The exam tests recognition of which regime applies from the ownership and structure facts.",
        ],
        keyRules: [
          "Reorganization requires continuity of interest, continuity of business enterprise, and business purpose; boot triggers gain up to boot.",
          "§331/§336 liquidation: shareholders capital gain/loss; corporation recognizes gain and loss.",
          "§332/§337 parent-subsidiary (80%) liquidation: tax-free to both, carryover basis to parent.",
        ],
      },
      {
        id: "sn5",
        title: "Entity choice and the §199A deduction",
        testPointIds: ["tp5", "tp6"],
        explanation: [
          "Entity choice weighs single-level flow-through taxation against C-corporation double taxation. Pass-through income is taxed once at the owner level and may be reduced by the §199A qualified business income deduction; C-corporation income is taxed at the entity rate and taxed again as dividends when distributed, though a C corp can defer the second layer by retaining earnings and may suit owners seeking reinvestment or fringe-benefit treatment.",
          "The §199A deduction is generally 20% of qualified business income, but two overlays dominate exam problems. Above the taxable-income threshold, the deduction for a non-service business is capped at the greater of 50% of W-2 wages or 25% of W-2 wages plus 2.5% of the unadjusted basis (UBIA) of qualified property — a limit that rewards businesses with payroll or capital assets. Specified service trades or businesses (health, law, accounting, consulting, financial services, etc.) lose the deduction entirely once taxable income exceeds the upper threshold, with a phase-in through the range. Below the lower threshold, the straight 20% applies with no wage/UBIA or SSTB limitation. Thresholds are indexed — confirm the current-year figures.",
          "Multistate and consolidated considerations round out entity planning: a consolidated group (80%+) can offset one member's losses against another's income and defer intercompany gains, while state taxation depends on establishing nexus and then apportioning business income by the state's formula.",
        ],
        keyRules: [
          "Flow-through: one level of tax (net of §199A); C corp: entity tax + dividend tax, with deferral by retention.",
          "§199A wage/UBIA limit applies only above the threshold; SSTBs lose QBI above the ceiling.",
          "Consolidation offsets intra-group losses/defers intercompany gains; state tax needs nexus then apportionment.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp2", "tp3"],
        style: "Task-based simulation (pass-through basis)",
        question:
          "Compare two owners. Owner A holds S-corp stock with $10,000 basis and made a $5,000 direct loan; the S corp (no C-corp E&P) passes through a $20,000 loss and makes no distribution. Owner B is a partner with $10,000 capital-account basis whose share of partnership recourse liabilities is $5,000; the partnership passes through a $20,000 loss. For each, compute the currently deductible loss.",
        answerPlan: [
          "Owner A: stock basis + direct debt basis.",
          "Owner B: outside basis includes share of liabilities.",
          "Compare deductible amounts and suspended losses.",
        ],
        modelAnswer:
          "Owner A (S corporation): losses are limited to stock basis plus DIRECT debt basis. Stock basis $10,000 + shareholder loan (debt basis) $5,000 = $15,000; therefore $15,000 of the $20,000 loss is deductible now and $5,000 is suspended until basis is restored. Owner B (partnership): outside basis includes the partner's share of partnership liabilities under §752, so basis is $10,000 capital + $5,000 liability share = $15,000 — the same $15,000, with $15,000 deductible and $5,000 suspended. The key conceptual difference is WHY: for the S-corp shareholder only a direct loan (not a guarantee or entity-level debt) adds basis, whereas the partner's basis automatically includes an allocable share of the partnership's liabilities. Had Owner A merely guaranteed a bank loan rather than lending directly, only $10,000 would be deductible.",
        markingGuide: [
          "1 mark: Owner A deductible loss $15,000 (stock + direct debt basis).",
          "1 mark: Owner B deductible loss $15,000 (outside basis includes liability share).",
          "1 mark: $5,000 suspended in each case.",
          "1 mark: explaining that only a direct loan (not a guarantee) creates S-corp debt basis, unlike a partner's automatic liability share.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1", "tp4"],
        style: "MCQ set rationale",
        question:
          "Explain the tax treatment of: (1) a solvent C corporation distributes appreciated land (FV $100,000, basis $60,000) to a shareholder; (2) a parent liquidates its 90%-owned subsidiary, receiving the subsidiary's assets.",
        answerPlan: [
          "Property distribution → corporate gain, shareholder dividend at FV.",
          "80%+ subsidiary liquidation → §332/§337 tax-free.",
        ],
        modelAnswer:
          "(1) On distributing appreciated land, the C corporation recognizes gain as if it sold the property at fair value: $100,000 − $60,000 = $40,000 of gain (a corporation recognizes gain, but not loss, on property distributions), which also increases E&P. The shareholder receives a dividend equal to the land's fair value of $100,000 (to the extent of E&P) and takes a $100,000 fair-value basis in the land. (2) The liquidation of a subsidiary that the parent owns at least 80% qualifies under §332/§337 and is generally tax-free to both corporations: the parent recognizes no gain or loss on the cancellation of its subsidiary stock and takes the subsidiary's assets at carryover basis, inheriting the subsidiary's tax attributes. The distinguishing facts are the appreciated-property distribution triggering corporate gain in (1) and the 80%+ ownership triggering nonrecognition in (2).",
        markingGuide: [
          "1 mark: corporation recognizes $40,000 gain on the property distribution (gain, not loss).",
          "1 mark: shareholder dividend at $100,000 FV with FV basis.",
          "1 mark: §332/§337 tax-free treatment for the 80%+ subsidiary liquidation.",
          "1 mark: carryover basis and attributes to the parent.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5"],
        style: "Short constructed response",
        question:
          "A single taxpayer owns a non-service manufacturing S corporation generating $400,000 of qualified business income; the business paid $80,000 of W-2 wages and holds $500,000 UBIA of qualified property. His taxable income is above the upper §199A threshold. Explain how to compute his QBI deduction and how the answer would differ if the business were a consulting (SSTB) firm.",
        answerPlan: [
          "Above threshold → apply wage/UBIA limit.",
          "Compute 20% of QBI vs the wage/UBIA cap.",
          "Contrast SSTB denial above the ceiling.",
        ],
        modelAnswer:
          "Because taxable income exceeds the upper threshold, the tentative 20% of QBI is subject to the wage/UBIA limitation. Tentative deduction = 20% × $400,000 = $80,000. The limitation is the greater of (a) 50% of W-2 wages = 50% × $80,000 = $40,000, or (b) 25% of wages + 2.5% of UBIA = (25% × $80,000) + (2.5% × $500,000) = $20,000 + $12,500 = $32,500. The greater is $40,000, which is below the tentative $80,000, so the deduction is limited to $40,000 (still also subject to the overall 20%-of-taxable-income ceiling). If instead the business were a consulting firm — a specified service trade or business — the taxpayer's taxable income above the upper threshold would disqualify the income entirely, producing a $0 QBI deduction. The contrast shows that above the threshold a non-service business is capped by wages/UBIA while an SSTB is fully phased out.",
        markingGuide: [
          "1 mark: recognizing the wage/UBIA limit applies above the threshold.",
          "1 mark: computing the two limit prongs ($40,000 and $32,500) and taking the greater.",
          "1 mark: deduction limited to $40,000.",
          "1 mark: SSTB above the ceiling yields a $0 deduction.",
        ],
      },
    ],
  }),

  // ===================================================================
  // cpa-discipline-m9 — TCP: Property transactions & advanced tax topics
  // ===================================================================
  "cpa-discipline-m9": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Amount realized, adjusted basis, character and §1231 netting",
        priority: "critical",
        examinerFocus:
          "Computing realized/recognized gain (amount realized less adjusted basis), classifying the asset (capital, ordinary, §1231), and running the §1231 netting that yields long-term capital gain on net gains but ordinary loss on net losses.",
        typicalQuestionForms: [
          "TBS: compute gain/loss and character on a mixed group of asset dispositions.",
          "MCQ: the §1231 result, or the five-year lookback recapture of prior ordinary §1231 losses.",
        ],
        mustKnow: [
          "Amount realized = money + FV of property received + liabilities assumed by the buyer; gain/loss = amount realized − adjusted basis.",
          "§1231 assets = depreciable property and land used in a trade or business held >1 year; a NET §1231 gain is long-term capital gain, a NET §1231 loss is ordinary.",
          "§1231 five-year lookback: a net §1231 gain is recharacterized as ordinary to the extent of nonrecaptured net §1231 losses deducted in the prior five years.",
          "Character depends on asset type and use (inventory/receivables are ordinary; investment assets are capital; business-use depreciable assets are §1231).",
        ],
        scoringActions: [
          "Include liabilities assumed by the buyer in the amount realized.",
          "Run §1231 netting to get LTCG on a net gain but ordinary loss on a net loss, then apply the five-year lookback.",
          "Classify each asset by type and use before assigning character.",
        ],
      },
      {
        id: "tp2",
        title: "Depreciation recapture: §1245, §1250 and unrecaptured §1250 gain",
        priority: "critical",
        examinerFocus:
          "Applying §1245 full recapture to personal property and §1250/unrecaptured-§1250 to real property — the highest-yield TCP property computation because it converts §1231 gain into ordinary income (or a 25% rate) up to prior depreciation.",
        typicalQuestionForms: [
          "TBS: split a gain on depreciable property into ordinary recapture and §1231 gain.",
          "MCQ: the recapture result for personal vs real property.",
        ],
        mustKnow: [
          "§1245 (personal property): recapture as ORDINARY income the lesser of the gain or ALL depreciation taken; only gain above original cost is §1231.",
          "§1250 (real property): recaptures only depreciation in EXCESS of straight-line as ordinary — with MACRS straight-line, true §1250 recapture is usually $0.",
          "Unrecaptured §1250 gain: the portion of §1231 gain on real property attributable to straight-line depreciation is taxed at a maximum 25% rate (not fully ordinary).",
          "Recapture is computed BEFORE §1231 netting and applies regardless of the installment method's timing.",
        ],
        scoringActions: [
          "For personal property, recapture ALL depreciation as ordinary up to the gain (§1245) before any §1231 treatment.",
          "For real property under MACRS, expect $0 §1250 recapture but route the straight-line portion to the 25% unrecaptured-§1250 rate.",
          "Compute recapture first, then send the residual gain to §1231 netting.",
        ],
      },
      {
        id: "tp3",
        title: "Like-kind exchanges (§1031): boot, gain and basis",
        priority: "critical",
        examinerFocus:
          "Applying §1031 to REAL property held for business/investment (post-TCJA personal property no longer qualifies): recognized gain equals the lesser of boot or realized gain, and computing the substituted basis in replacement property.",
        typicalQuestionForms: [
          "TBS: compute realized gain, recognized gain and replacement-property basis given boot and assumed debt.",
          "MCQ: whether property qualifies, or the effect of receiving boot / relief of debt.",
        ],
        mustKnow: [
          "Post-TCJA, §1031 applies only to real property held for productive use in a trade/business or for investment; like-kind for real property is broad (e.g., raw land for a building).",
          "Recognized gain = lesser of boot received or realized gain; boot includes cash, non-like-kind property, and NET debt relief (liabilities given up exceeding liabilities assumed).",
          "Basis of replacement property = basis of property given up + gain recognized + boot paid − boot received (equivalently FV of replacement − deferred gain).",
          "Losses are NOT recognized in a §1031 exchange; strict timing rules apply (45-day identification, 180-day completion).",
        ],
        scoringActions: [
          "Recognize gain equal to the LESSER of boot or realized gain — never more than realized gain.",
          "Treat net debt relief as boot received, and net it against boot paid/new debt assumed.",
          "Carry the deferred gain into a reduced replacement-property basis.",
        ],
      },
      {
        id: "tp4",
        title: "Involuntary conversions (§1033) and installment sales (§453)",
        priority: "high",
        examinerFocus:
          "Deferring gain on involuntary conversions when proceeds are reinvested in qualifying replacement property, and spreading gain under the installment method — including the rule that depreciation recapture is recognized entirely in the year of sale.",
        typicalQuestionForms: [
          "TBS: compute the installment-sale gross profit percentage and the gain recognized each year.",
          "MCQ: the §1033 replacement period, or the treatment of recapture under §453.",
        ],
        mustKnow: [
          "§1033: gain is deferred to the extent proceeds are reinvested in qualifying replacement property within the replacement period (generally 2 years, 3 years for real property, longer for federally declared disasters); gain is recognized to the extent proceeds are NOT reinvested.",
          "§453 installment method: gain recognized each year = payments received × gross profit percentage (gross profit ÷ contract price); interest is stated separately.",
          "Depreciation recapture (§1245/§1250) is recognized IN FULL in the year of sale even if payments are deferred, and increases basis for computing remaining installment gain.",
          "The installment method is unavailable for inventory, dealer sales and publicly traded securities.",
        ],
        scoringActions: [
          "Recognize §1033 gain only to the extent proceeds are NOT reinvested in qualifying property within the period.",
          "Compute the gross profit percentage and apply it to each year's principal payments.",
          "Pull all depreciation recapture into the year of sale before spreading the remaining gain.",
        ],
      },
      {
        id: "tp5",
        title: "Related-party rules: §267 loss disallowance and §1239",
        priority: "high",
        examinerFocus:
          "Disallowing losses on sales between related parties (§267) with the later-sale recovery mechanism, and converting gain to ordinary income on sales of depreciable property between related parties (§1239).",
        typicalQuestionForms: [
          "MCQ: the treatment of a related-party loss, or the character of a related-party gain on depreciable property.",
          "TBS: compute the related buyer's gain on a subsequent sale using the disallowed loss.",
        ],
        mustKnow: [
          "§267: a loss on a sale to a related party is DISALLOWED to the seller; when the related buyer later sells to an unrelated party, any gain is reduced by the previously disallowed loss (the loss is not lost, but usable only to offset the buyer's later gain).",
          "Related parties include family members (spouse, siblings, ancestors, lineal descendants) and entities with more than 50% common ownership.",
          "§1239: gain on the sale of depreciable property between related parties is ORDINARY income (not capital/§1231), preventing conversion of ordinary depreciation deductions into capital gain.",
        ],
        scoringActions: [
          "Disallow the related-party loss to the seller and track it for the buyer's later sale.",
          "Reduce the related buyer's subsequent gain (only) by the previously disallowed loss.",
          "Recharacterize §1239 related-party depreciable-property gain as ordinary.",
        ],
      },
      {
        id: "tp6",
        title: "Cost recovery: MACRS, §179 expensing and bonus depreciation",
        priority: "medium",
        examinerFocus:
          "Applying MACRS recovery periods and conventions, and coordinating §179 expensing (with its investment phaseout and taxable-income limit) with bonus depreciation for optimal timing.",
        typicalQuestionForms: [
          "TBS: compute first-year cost recovery combining §179 and bonus with MACRS on the remainder.",
          "MCQ: the applicable convention (half-year vs mid-quarter) or the §179 income limitation.",
        ],
        mustKnow: [
          "MACRS: 5-year (autos, computers) and 7-year (most equipment) use 200% declining balance with a half-year convention; the mid-quarter convention applies if >40% of personal property is placed in service in the last quarter; real property uses straight-line (27.5-year residential, 39-year nonresidential).",
          "§179: expenses qualifying property up to an annual limit, phased out dollar-for-dollar above an investment threshold and limited to business taxable income (excess §179 carries forward); confirm current-year limits.",
          "Bonus depreciation applies to qualifying property with no taxable-income limit; the percentage is phasing down under current law — confirm the rate for the testing year. Ordering: §179 first, then bonus, then MACRS on the remaining basis.",
        ],
        scoringActions: [
          "Test the mid-quarter convention when heavy Q4 purchases exceed 40% of the year's personal property.",
          "Apply §179 (subject to the income limit), then bonus, then regular MACRS on the residual basis.",
          "Confirm current-year §179 and bonus figures rather than assuming stale amounts.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "TCP-property is a computation section. Bank the recapture and §1031 boot/basis TBSs by following a fixed schedule; the recapture-before-netting sequence and the lesser-of-boot-or-gain rule are the recurring mark-earners.",
      timeBudget:
        "~1.25 min per MCQ; on a property TBS budget 10–14 minutes: compute realized gain, split off recapture, then run §1231 netting or the nonrecognition/basis mechanics.",
      answerSequence: [
        "Compute amount realized (include debt relief) and adjusted basis to get realized gain/loss.",
        "Split off depreciation recapture (§1245 fully; §1250/25% for real property) BEFORE §1231 netting.",
        "Apply nonrecognition (lesser of boot or gain for §1031; reinvestment shortfall for §1033) and compute substituted basis.",
        "Address related-party, installment and character overlays, then confirm indexed cost-recovery figures.",
      ],
      qualityChecks: [
        "Did I include liabilities/debt relief in the amount realized (and as boot in §1031)?",
        "Did I recapture depreciation BEFORE §1231 netting and cap §1245 recapture at the gain?",
        "Did I recognize only the LESSER of boot or realized gain in the §1031 exchange, and never a loss?",
        "Did I pull all recapture into the year of sale under the installment method?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Gain, character and §1231 netting",
        testPointIds: ["tp1"],
        explanation: [
          "Every property disposition starts with the same arithmetic: amount realized minus adjusted basis equals realized gain or loss. Amount realized captures everything received — cash, the fair value of other property, and any liabilities the buyer assumes or takes subject to. Adjusted basis is original cost plus capital improvements minus accumulated depreciation. Recognized gain equals realized gain unless a nonrecognition rule (§1031, §1033) applies.",
          "Character then determines the rate. Inventory and receivables produce ordinary income; investment assets produce capital gain or loss; and depreciable property and land used in a trade or business held more than a year are §1231 assets. The §1231 rule is deliberately taxpayer-favorable: net all §1231 gains and losses for the year, and if the net is a GAIN it is treated as long-term capital gain (preferential rates), but if the net is a LOSS it is fully ordinary (deductible against ordinary income). This 'best of both worlds' outcome is policed by a five-year lookback: a current net §1231 gain is recharacterized as ordinary to the extent the taxpayer deducted net §1231 losses in the prior five years, preventing whipsawing ordinary losses one year and capital gains the next.",
        ],
        keyRules: [
          "Amount realized includes liabilities assumed by the buyer; gain = amount realized − adjusted basis.",
          "Net §1231 gain → LTCG; net §1231 loss → ordinary.",
          "Five-year lookback recharacterizes §1231 gain as ordinary up to nonrecaptured prior §1231 losses.",
        ],
      },
      {
        id: "sn2",
        title: "Depreciation recapture mechanics",
        testPointIds: ["tp2", "tp1"],
        explanation: [
          "Recapture prevents taxpayers from deducting depreciation at ordinary rates and then taxing the resulting gain at capital rates. It is computed BEFORE §1231 netting. Under §1245, which governs depreciable personal property (equipment, machinery), gain is recaptured as ORDINARY income up to the lesser of the recognized gain or the total depreciation taken; only gain exceeding original cost escapes to §1231. Because most equipment sells for less than original cost, §1245 typically makes the entire gain ordinary.",
          "Real property follows §1250, which recaptures only depreciation taken in EXCESS of straight-line. Since MACRS depreciates real property on a straight-line basis, there is usually no §1250 recapture. Instead, the portion of a §1231 gain attributable to straight-line depreciation is 'unrecaptured §1250 gain,' taxed at a maximum 25% rate rather than the ordinary rate or the lower long-term rate — a middle tier the exam loves to test.",
        ],
        keyRules: [
          "§1245: ordinary recapture = lesser of gain or all depreciation taken; excess over cost is §1231.",
          "§1250: recaptures only above-straight-line depreciation → usually $0 under MACRS.",
          "Unrecaptured §1250 gain (straight-line portion) taxed at a maximum 25% rate.",
        ],
        workedProblem: {
          scenario:
            "A business sells a machine (§1245 property) for $70,000. It originally cost $80,000 and $50,000 of depreciation has been taken, giving an adjusted basis of $30,000. Separately it sells a building (§1250, MACRS straight-line) for $600,000 with an original cost of $500,000, $120,000 of straight-line depreciation taken, and an adjusted basis of $380,000. Determine the character of each gain.",
          steps: [
            "Machine: recognized gain = $70,000 − $30,000 adjusted basis = $40,000.",
            "Machine §1245 recapture = lesser of gain ($40,000) or depreciation taken ($50,000) = $40,000 ordinary; because the sale price ($70,000) is below original cost ($80,000), no gain reaches §1231. Entire $40,000 is ordinary.",
            "Building: recognized gain = $600,000 − $380,000 adjusted basis = $220,000.",
            "Building §1250 recapture = depreciation above straight-line = $0 (MACRS is straight-line). Of the $220,000 §1231 gain, the portion attributable to straight-line depreciation, $120,000, is unrecaptured §1250 gain taxed at a maximum 25% rate; the remaining $100,000 (appreciation above cost) is regular §1231 gain eligible for long-term capital-gain rates (subject to netting and lookback).",
            "Both gains proceed to §1231 netting only AFTER recapture is separated (the machine's gain is ordinary and does not enter §1231 netting).",
          ],
          conclusion:
            "The machine's entire $40,000 gain is ordinary income under §1245. The building's $220,000 gain has $0 §1250 recapture; $120,000 is unrecaptured §1250 gain (25% maximum rate) and $100,000 is §1231 gain eligible for long-term capital-gain treatment after netting.",
          markingNotes: [
            "Award marks for §1245 ordinary recapture of $40,000 (lesser of gain or depreciation) with no §1231 portion.",
            "Award marks for $0 §1250 recapture under MACRS straight-line.",
            "Full marks require identifying $120,000 unrecaptured §1250 gain (25%) and $100,000 §1231 gain.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Section 1031 like-kind exchanges",
        testPointIds: ["tp3"],
        explanation: [
          "Since the TCJA, §1031 defers gain only on exchanges of REAL property held for productive use in a trade or business or for investment; personal property and intangibles no longer qualify. Like-kind is interpreted broadly for real estate — improved for unimproved, land for a building — as long as both are U.S. real property held for the qualifying purpose.",
          "The core computation is the lesser-of rule. Realized gain is amount realized minus adjusted basis, but RECOGNIZED gain is limited to the lesser of realized gain or boot received. Boot is anything that is not like-kind property: cash, non-qualifying property, and net debt relief (the excess of liabilities given up over liabilities assumed). Debt relief and boot paid can offset: assuming a larger mortgage or adding cash reduces net boot received. Losses are never recognized in a §1031 exchange — a taxpayer with a built-in loss should sell outright instead.",
          "Basis in the replacement property preserves the deferred gain. The mechanical formula is: basis of property given up + gain recognized + boot paid − boot received. Equivalently, replacement basis equals the replacement property's fair value minus the deferred (unrecognized) gain, so the postponed gain is taxed later when the replacement property is sold. Strict timing applies: replacement property must be identified within 45 days and received within 180 days.",
        ],
        keyRules: [
          "Post-TCJA §1031 covers real property held for business/investment only.",
          "Recognized gain = lesser of boot received or realized gain; losses never recognized.",
          "Replacement basis = basis given up + gain recognized + boot paid − boot received (= FV − deferred gain).",
        ],
        workedProblem: {
          scenario:
            "An investor exchanges investment land (adjusted basis $200,000, subject to a $50,000 mortgage the other party assumes) for replacement real property worth $260,000, and also receives $40,000 cash. The investor assumes no debt on the replacement property. Compute realized gain, recognized gain, and the basis of the replacement property.",
          steps: [
            "Amount realized = FV of replacement property $260,000 + cash boot $40,000 + debt relief $50,000 = $350,000.",
            "Realized gain = $350,000 − $200,000 adjusted basis = $150,000.",
            "Boot received = cash $40,000 + net debt relief $50,000 = $90,000 (no offsetting debt assumed or boot paid).",
            "Recognized gain = lesser of boot received ($90,000) or realized gain ($150,000) = $90,000.",
            "Deferred gain = $150,000 − $90,000 = $60,000; replacement basis = FV $260,000 − deferred gain $60,000 = $200,000 (check: basis given up $200,000 + gain recognized $90,000 + boot paid $0 − boot received $90,000 = $200,000).",
          ],
          conclusion:
            "Realized gain is $150,000; recognized gain is $90,000 (the lesser of boot received of $90,000 or realized gain). The replacement property takes a $200,000 basis, preserving the $60,000 of deferred gain for later recognition.",
          markingNotes: [
            "Award marks for including cash AND net debt relief as boot ($90,000).",
            "Award marks for recognized gain = lesser of boot or realized gain ($90,000).",
            "Full marks require the $200,000 replacement basis reconciled by either formula.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Involuntary conversions and installment sales",
        testPointIds: ["tp4", "tp2"],
        explanation: [
          "Section 1033 lets a taxpayer defer gain when property is destroyed, stolen, condemned or otherwise involuntarily converted, provided the proceeds are reinvested in qualifying replacement property within the replacement period — generally two years (three for condemned real property; extended for federally declared disasters). Gain is recognized only to the extent the proceeds are NOT reinvested; the replacement property takes a basis equal to its cost reduced by the deferred gain. Unlike §1031, §1033 is elective and can apply to a broad range of property.",
          "The installment method (§453) spreads gain from a sale where at least one payment is received after the year of sale. Each year the taxpayer recognizes gain equal to principal payments received multiplied by the gross profit percentage (gross profit divided by total contract price); stated interest is reported separately as ordinary income. The critical trap: depreciation recapture under §1245/§1250 is recognized IN FULL in the year of sale regardless of when cash is collected, and that recaptured amount increases basis for computing the remaining installment gain. The method is unavailable for inventory, dealer sales and publicly traded securities.",
        ],
        keyRules: [
          "§1033: defer gain to the extent proceeds are reinvested within the replacement period; recognize the unreinvested shortfall.",
          "§453 gain per year = payments received × (gross profit ÷ contract price); interest reported separately.",
          "All §1245/§1250 recapture is recognized in the year of sale even under the installment method.",
        ],
      },
      {
        id: "sn5",
        title: "Related-party rules and cost-recovery planning",
        testPointIds: ["tp5", "tp6"],
        explanation: [
          "Related-party rules stop taxpayers from generating artificial tax benefits within a family or controlled group. Under §267, a loss on a sale to a related party (spouse, siblings, ancestors, lineal descendants, or an entity more than 50% owned) is disallowed to the seller. The loss is not permanently lost: when the related buyer later sells to an unrelated party, any gain is reduced by the previously disallowed loss — but only to offset that gain, never to create a loss. Section 1239 attacks a different abuse: gain on the sale of depreciable property between related parties is ordinary income, so a seller cannot take ordinary depreciation deductions and then convert the built-in gain into preferential capital gain by selling to a controlled entity.",
          "Cost-recovery planning coordinates three tools. MACRS assigns recovery periods and conventions — 5-year and 7-year classes use 200% declining balance with a half-year convention, unless more than 40% of personal property is placed in service in the fourth quarter, which triggers the mid-quarter convention; real property is straight-line over 27.5 or 39 years. Section 179 lets a business expense qualifying property up to an annual limit, phased out dollar-for-dollar above an investment threshold and capped at business taxable income (excess carries forward). Bonus depreciation has no income cap but its percentage is phasing down under current law. The optimal ordering is §179 first (targeting property that maximizes the benefit within the income limit), then bonus depreciation, then regular MACRS on the remaining basis. Because §179, bonus and the investment thresholds are indexed or scheduled to change, always confirm the current-year figures.",
        ],
        keyRules: [
          "§267 disallows related-party losses; the buyer may reduce (not below zero) a later gain by the disallowed loss.",
          "§1239 makes related-party gain on depreciable property ordinary.",
          "Cost recovery ordering: §179 (income-limited) → bonus → MACRS; mid-quarter convention if >40% of personalty is in Q4.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp2", "tp4"],
        style: "Task-based simulation (recapture + installment)",
        question:
          "A business sells equipment (§1245 property) on 1 December for $90,000, collecting $30,000 down and three annual installments of $20,000 plus interest. Original cost was $100,000 and $60,000 of depreciation was taken (adjusted basis $40,000). Compute the total gain, the amount recognized in the year of sale, and the character.",
        answerPlan: [
          "Compute total gain and separate §1245 recapture.",
          "Recognize all recapture in the year of sale.",
          "Apply the installment method to any remaining gain.",
        ],
        modelAnswer:
          "Total gain = $90,000 amount realized − $40,000 adjusted basis = $50,000. Because the equipment is §1245 property, depreciation recapture equals the lesser of the gain ($50,000) or depreciation taken ($60,000) = $50,000 — the entire gain is ordinary recapture. Under §453, all depreciation recapture is recognized IN FULL in the year of sale regardless of the installment collections, so the entire $50,000 is recognized as ordinary income in the year of sale, and the recaptured amount increases basis so that there is no remaining gain to spread. The installments in later years therefore carry only the stated interest as ordinary income; no additional capital or §1231 gain remains. (Had the sale price exceeded original cost, the excess would have been §1231 gain eligible for installment spreading, but here the price is below cost so the full gain is recapture recognized immediately.)",
        markingGuide: [
          "1 mark: total gain $50,000.",
          "1 mark: §1245 recapture = lesser of gain or depreciation = $50,000, all ordinary.",
          "1 mark: entire recapture recognized in the year of sale despite installment collections.",
          "1 mark: no remaining gain to spread; later payments carry only interest.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3", "tp1"],
        style: "MCQ set rationale",
        question:
          "An investor exchanges an office building (adjusted basis $300,000, no debt) for like-kind investment real estate worth $340,000 plus $20,000 cash. Separately, a taxpayer exchanges business machinery for other machinery. Explain the recognized gain and basis in the building exchange, and the treatment of the machinery exchange.",
        answerPlan: [
          "Building: §1031 qualifies (real property); lesser of boot or gain.",
          "Compute recognized gain and replacement basis.",
          "Machinery: personal property no longer qualifies post-TCJA.",
        ],
        modelAnswer:
          "Building exchange: because both properties are real property held for investment, §1031 applies. Amount realized = $340,000 + $20,000 cash = $360,000; realized gain = $360,000 − $300,000 = $60,000. Recognized gain = lesser of boot received ($20,000) or realized gain ($60,000) = $20,000. Deferred gain = $40,000, so the replacement property's basis = $340,000 FV − $40,000 deferred gain = $300,000 (equivalently $300,000 basis given up + $20,000 gain recognized − $20,000 boot received). Machinery exchange: after the TCJA, §1031 no longer applies to personal property, so the machinery-for-machinery swap is a fully taxable exchange — the taxpayer recognizes the entire realized gain or loss and takes a cost (fair-value) basis in the new machinery. The distinguishing point is that only real property qualifies for like-kind deferral now.",
        markingGuide: [
          "1 mark: recognized gain on the building = $20,000 (lesser of boot or realized gain).",
          "1 mark: replacement-property basis $300,000.",
          "1 mark: machinery exchange is fully taxable (personal property excluded post-TCJA).",
          "1 mark: new machinery takes a cost/fair-value basis.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5"],
        style: "Short constructed response",
        question:
          "A father sells investment land to his daughter for $60,000; his basis was $100,000. Two years later the daughter sells the land to an unrelated buyer for (case A) $110,000, and (case B) $70,000. Explain the father's treatment and the daughter's gain in each case under §267.",
        answerPlan: [
          "Father's loss is disallowed under §267.",
          "Daughter's later gain reduced by the disallowed loss (not below zero).",
          "Apply to both sale prices.",
        ],
        modelAnswer:
          "The father's realized loss of $40,000 ($60,000 amount realized − $100,000 basis) is DISALLOWED under §267 because the sale is to a related party; he deducts nothing. The daughter takes a $60,000 cost basis and may use the father's previously disallowed $40,000 loss only to reduce a gain on a later sale to an unrelated party (never to create or increase a loss). Case A: the daughter sells for $110,000, realizing a gain of $110,000 − $60,000 = $50,000; she reduces it by the $40,000 disallowed loss, recognizing only $10,000 of gain. Case B: she sells for $70,000, realizing a gain of $70,000 − $60,000 = $10,000; she reduces it by the disallowed loss, but only to zero — she uses $10,000 of the $40,000 and recognizes $0 gain; the remaining $30,000 of disallowed loss simply disappears (it cannot create a loss for her). In both cases the father never deducts his loss.",
        markingGuide: [
          "1 mark: father's $40,000 loss disallowed under §267.",
          "1 mark: Case A daughter recognizes $10,000 gain ($50,000 − $40,000).",
          "1 mark: Case B daughter recognizes $0 gain (disallowed loss used only to zero, remainder lost).",
          "1 mark: noting the disallowed loss can offset only the buyer's gain, never create a loss.",
        ],
      },
    ],
  }),
};
