import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA Discipline depth content (batch A, part 3), keyed by moduleId to merge
 * onto CPA_COURSEWARE. This file supplies depth for exactly one module.
 *
 * Discipline scope (CPA Evolution: BAR / ISC / TCP are three separate
 * four-hour AICPA Blueprint Discipline exams; a candidate sits only one):
 *  - cpa-discipline-m5 → ISC (Information Systems and Controls): business
 *    processes, data management and controls. This is ISC Area I
 *    (Information Systems and Data Management) territory — transaction-cycle
 *    and business-process controls, the control taxonomy (automated / manual /
 *    IT-dependent manual and preventive / detective / corrective), data
 *    governance and data quality, the system development life cycle (SDLC) and
 *    change management, plus the design and testing of IT-dependent controls
 *    and process-level data analytics. It leans on Application/Analysis skill
 *    levels: fact patterns ask you to classify a control, decide whether it
 *    can be relied on, and design a test — not merely define a term.
 *
 * Calibration notes:
 *  - ISC is not AUD. The same COSO/control vocabulary appears, but ISC rewards
 *    precise control classification and clean reliance logic tied to IT
 *    general controls (ITGCs). Notes flag where a concept is an AUD Core
 *    carry-over re-tested at Discipline rigor.
 *  - "IPE" (information produced by the entity) — the completeness and accuracy
 *    of system-generated reports — is the recurring hinge for IT-dependent
 *    controls and is treated as a first-class test point here.
 *  - Framework authority sets are distinct: COSO Internal Control–Integrated
 *    Framework (control components), COBIT (IT governance/ITGCs), and the
 *    trust-services / SOC literature (assurance reporting). Do not cross-apply
 *    a SOC-reporting rule to an internal control-design question.
 */
export const CPA_DISCIPLINE_A3_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // cpa-discipline-m5 — ISC: Business processes, data & controls
  // ===================================================================
  "cpa-discipline-m5": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Transaction-cycle controls and segregation of duties (SoD)",
        priority: "critical",
        examinerFocus:
          "Whether you can map characteristic risks and controls to a specific transaction cycle (revenue, expenditure, inventory/conversion, payroll, treasury) and detect an incompatible-duties combination. The examiner rarely asks 'define segregation of duties'; it gives an org chart or a process narrative where one person or role spans two of the four incompatible functions and asks you to identify the risk, the missing control, or a compensating control.",
        typicalQuestionForms: [
          "MCQ: given a role assignment, identify the segregation-of-duties conflict and the fraud/error it enables.",
          "TBS: read a process narrative or flowchart and list control weaknesses and recommended controls by cycle.",
          "MCQ: classify a control as preventive, detective, or corrective and match it to the assertion/risk it addresses.",
        ],
        mustKnow: [
          "The four incompatible functions are Authorization, Recording (bookkeeping), Custody of assets, and Reconciliation/review (A-R-C plus independent reconciliation). No one person or role should perform two of these for the same transaction class.",
          "Revenue-cycle risks: fictitious sales, unauthorized shipments, unrecorded sales, and misappropriated cash receipts; core controls include separating order approval, credit approval, shipping, billing, and cash handling, plus a lockbox and independent bank reconciliation.",
          "Expenditure-cycle risks: unauthorized/duplicate purchases, payment for goods not received, and disbursement fraud; core controls include the three-way match (PO, receiving report, invoice), separation of purchasing from receiving and from AP, and voided/cancelled supporting documents after payment.",
          "When true segregation is impossible (small entity), compensating controls — active owner review, mandatory vacations/job rotation, and detailed management oversight of exception reports — are required and must be as precise as the risk they cover.",
        ],
        scoringActions: [
          "Test every suspect role against the A-R-C framework and name the specific fraud/error the conflict enables, not just 'lack of SoD'.",
          "For each identified weakness, pair it with a named control (preventive first) and the assertion it protects.",
          "In small-entity fact patterns, recommend precise compensating controls rather than concluding the deficiency is uncorrectable.",
        ],
      },
      {
        id: "tp2",
        title: "Control taxonomy and the ITGC reliance chain",
        priority: "critical",
        examinerFocus:
          "Whether you can classify a control as automated, manual, or IT-dependent manual (and as preventive/detective/corrective) and then reason about reliance: an automated or IT-dependent control is only as reliable as the ITGCs (access, change, operations) around it. The trap is treating an automated control as reliable because it 'tested clean at a point in time' while an ITGC (usually change management or logical access) is weak.",
        typicalQuestionForms: [
          "MCQ: classify a described control (e.g., a system three-way match vs a clerk who reviews a system exception report) as automated, manual, or IT-dependent manual.",
          "MCQ: given a weak ITGC, decide whether a related automated application control can still be relied upon.",
          "TBS: for a set of controls, state the control type, the ITGC it depends on, and the testing implication.",
        ],
        mustKnow: [
          "Automated controls execute entirely within the system (edit checks, validation, matching, automated calculations, interface controls); they are consistent but wholly dependent on ITGCs to stay configured as designed.",
          "IT-dependent manual controls are performed by a person but rely on system-generated information (a manager who investigates a system-produced exception or aging report); their reliability depends on BOTH the human step AND the completeness/accuracy of the underlying IPE.",
          "The four ITGC domains — logical/physical access security, program change management, program development (SDLC), and computer operations (jobs, backup, incident handling) — support all automated and IT-dependent controls; weak access or change management is the most damaging.",
          "If ITGCs are ineffective, a point-in-time test of the automated control does not evidence effective operation for the period (an uncontrolled change could have altered the logic between tests), so reliance fails for the whole period.",
        ],
        scoringActions: [
          "Classify the control AND identify the ITGC(s) it depends on before concluding on reliance.",
          "Test ITGCs first; conclude on automated/IT-dependent control reliance only after ITGCs are shown effective for the period.",
          "Distinguish a design deficiency (control cannot prevent/detect) from an operating deficiency (control exists but did not function) when describing the weakness.",
        ],
      },
      {
        id: "tp3",
        title: "Data governance, master data, and data-quality dimensions",
        priority: "high",
        examinerFocus:
          "Whether you understand data governance as the assignment of ownership, standards, and accountability over data, and can evaluate data quality against defined dimensions. The exam tests the difference between master/reference data and transaction data, and asks how poor data quality upstream defeats otherwise well-designed downstream controls.",
        typicalQuestionForms: [
          "MCQ: identify the data-quality dimension a described defect violates (e.g., two customer records for one customer → uniqueness).",
          "TBS: recommend data-governance roles and controls to remediate a master-data or data-quality problem.",
          "MCQ: distinguish master data from transaction data, or identify a data-lifecycle control (retention, disposal).",
        ],
        mustKnow: [
          "Data governance assigns roles — data owners (accountable for a data domain), data stewards (day-to-day quality/standards), and data custodians (IT operational storage/security) — and defines policies, standards, and a data dictionary.",
          "Core data-quality dimensions: accuracy, completeness, consistency, timeliness/currency, validity (conforms to format/rules), and uniqueness (no unintended duplicates).",
          "Master data (customers, vendors, items, chart of accounts) is relatively static reference data reused across transactions; master-data management enforces single-source-of-truth, controlled add/change/delete, and periodic cleansing so transaction controls operate on reliable references.",
          "The data lifecycle (create → store/maintain → use → archive → dispose) needs controls at each stage: input validation on creation, access/change control in maintenance, and retention/secure-disposal policies at end of life.",
        ],
        scoringActions: [
          "Name the specific data-quality dimension violated rather than saying 'bad data'.",
          "Assign remediation to the correct governance role (owner sets policy, steward enforces quality, custodian secures storage).",
          "Trace poor master data to the downstream transaction control it defeats (e.g., a duplicate vendor master enabling duplicate payment).",
        ],
      },
      {
        id: "tp4",
        title: "System development life cycle (SDLC) and change management controls",
        priority: "high",
        examinerFocus:
          "Whether you can identify the controls that keep system changes authorized, tested, approved, and segregated from development — and recognize that a change-management failure is an ITGC weakness that invalidates the automated controls it touches. The exam favors emergency-change and 'developer migrates own code' fact patterns.",
        typicalQuestionForms: [
          "MCQ: identify the missing change-management control in a described change (e.g., no independent approval, no test sign-off, developer has production access).",
          "TBS: evaluate a change process against the authorize-test-approve-migrate-segregate model and conclude on ITGC effectiveness.",
          "MCQ: match an SDLC phase (requirements, design, development, testing, implementation, maintenance) to its control objective.",
        ],
        mustKnow: [
          "Change management requires: a formal request/authorization, testing in a separate (non-production) environment, user/independent approval, and migration to production by someone OTHER than the developer, with version control and an audit trail.",
          "Separation of development, test, and production environments is essential; developers should not have standing write access to production, and program libraries must be access-controlled.",
          "Emergency changes are permitted but must follow an expedited-but-documented path with after-the-fact authorization, review, and testing — 'fix now, document later, review never' is a deficiency.",
          "SDLC controls span the whole build: user requirements and design sign-off, structured development standards, comprehensive testing (unit, integration, user acceptance), controlled conversion (parallel, phased, pilot, or big-bang — with data-conversion validation), and post-implementation review.",
        ],
        scoringActions: [
          "Test each change against authorize → test → approve → migrate-by-a-different-person, and name the specific missing step.",
          "Treat a change-management failure as invalidating every automated control the change could have touched for the whole period, not just at a test date.",
          "For conversions, require data-conversion validation (record counts, control totals, reconciliation) before sign-off.",
        ],
      },
      {
        id: "tp5",
        title: "Testing IT-dependent controls: IPE reliability, design vs operating effectiveness",
        priority: "high",
        examinerFocus:
          "Whether you can design a test for a control that relies on system-generated information, establish the completeness and accuracy of that IPE before relying on the control, and separate design effectiveness from operating effectiveness. Candidates lose marks by testing the human review step while ignoring whether the report it relies on is complete and accurate.",
        typicalQuestionForms: [
          "TBS: design procedures to test an IT-dependent manual control (e.g., a credit manager's review of a system aging report), including IPE reliability procedures.",
          "MCQ: identify what the auditor must do before relying on a system-generated report used in a control.",
          "MCQ: distinguish a test of design (walkthrough/inquiry-observation) from a test of operating effectiveness (reperformance/inspection over a period).",
        ],
        mustKnow: [
          "Before relying on a control that uses IPE, establish the completeness and accuracy of that information: verify the report parameters/logic and reconcile the report to the source system (e.g., agree an aging report's total to the AR subledger and GL).",
          "Design effectiveness (can the control, if operating, prevent/detect a material misstatement?) is assessed first — typically via walkthrough, inquiry, and observation — and must be established before testing operating effectiveness.",
          "Operating effectiveness (did the control actually function over the period?) is tested by inspection of evidence and reperformance across a sample sized for the control's frequency; a point-in-time result is insufficient for a period conclusion when ITGCs are weak.",
          "Nature, timing, and extent of testing follow control type: automated controls can often be tested with a single instance PLUS effective ITGCs (change management supports reliance across the period); manual/IT-dependent controls require larger samples scaled to frequency.",
        ],
        scoringActions: [
          "State the IPE completeness/accuracy procedures explicitly (verify report logic and reconcile to source) before addressing the review step.",
          "Sequence the test: design first, then operating effectiveness; do not jump to reperformance before establishing design.",
          "Size the sample to the control's frequency and rely on ITGCs (not repeated re-testing) to extend a single automated-control test across the period.",
        ],
      },
      {
        id: "tp6",
        title: "Process data analytics and continuous monitoring",
        priority: "medium",
        examinerFocus:
          "Whether you treat analytic output over a business process as a lead requiring corroboration rather than a conclusion, understand continuous monitoring (management) vs continuous auditing (assurance), and know that data reliability is a precondition. Tests the shift from periodic sampling to full-population screening plus targeted follow-up.",
        typicalQuestionForms: [
          "MCQ: how should a process owner or auditor respond to an analytic exception (duplicate payment, weekend posting, round-dollar cluster, out-of-sequence document)?",
          "TBS: recommend continuous-monitoring rules/KPIs for a transaction cycle and specify follow-up procedures.",
          "MCQ: distinguish continuous monitoring (a management control) from continuous auditing (an assurance activity).",
        ],
        mustKnow: [
          "Analytics can screen 100% of a population, but flagged items are exceptions to investigate, not proven misstatements; the process/control owner must corroborate each with underlying evidence.",
          "Data reliability is a precondition — completeness and accuracy of the source data must be established (reconciled, extracted without filtering) before any conclusion (garbage in, garbage out).",
          "Continuous monitoring is a management activity embedded in the process (automated exception rules, dashboards, KPIs) that provides ongoing control; continuous auditing is an independent assurance activity performed more frequently than a periodic audit.",
          "Common process analytics: duplicate-payment detection, three-way-match exception analysis, segregation-of-duties conflict mining in access data, journal-entry testing (post-dates, unusual users, round amounts), and gap/sequence checks on documents.",
        ],
        scoringActions: [
          "Confirm data completeness/accuracy before relying on any analytic output.",
          "Treat each exception as a risk indicator triggering follow-up, and document the disposition of every flagged item.",
          "Label the activity correctly: monitoring (management control) vs auditing (assurance) drives who acts on the exception.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "ISC business-process items reward precise control classification and clean reliance logic. Bank the SoD/control-taxonomy and change-management MCQs as near-automatic points, then earn TBS marks by walking each control through classify → identify dependency → conclude on reliance/test.",
      timeBudget:
        "~1.25 min per MCQ. On a controls TBS, spend the first 3–4 minutes classifying each control (which A-R-C function it sits in, and automated vs manual vs IT-dependent) and identifying the ITGC/IPE it depends on before writing any conclusion.",
      answerSequence: [
        "Classify each control: A-R-C function (authorization / recording / custody / reconciliation) and type (automated / manual / IT-dependent; preventive / detective / corrective).",
        "Identify the dependency: which ITGC (access / change / operations) or which IPE (system-generated report) the control relies on.",
        "Test ITGCs / establish IPE completeness and accuracy first; then conclude on the control's reliability for the period.",
        "For each weakness, name the specific fraud/error enabled, the missing control, and (for design vs operating) the correct test.",
      ],
      qualityChecks: [
        "Did I name the specific incompatible-duties combination and the fraud it enables, not just 'weak SoD'?",
        "Did I rely on an automated/IT-dependent control despite a weak ITGC (change management or access)?",
        "Did I establish IPE completeness and accuracy before relying on a control that uses a system report?",
        "Did I test design before operating effectiveness, and size the sample to the control's frequency?",
        "Did I treat an analytics exception as a lead to corroborate rather than a conclusion of misstatement?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Transaction cycles and segregation of duties",
        testPointIds: ["tp1"],
        explanation: [
          "Every transaction cycle has a characteristic set of risks and a matching set of controls, and the single most examined control is segregation of duties. The framework to memorize is A-R-C plus independent reconciliation: Authorization (approving a transaction), Recording (entering it in the books), Custody (holding the related asset), and an independent Reconciliation/review that a fourth party performs. When one person or role controls two of these functions for the same class of transaction, they can both perpetrate and conceal an error or fraud. A cashier who both receives cash (custody) and posts the cash receipts (recording) can lap receivables; a buyer who both approves purchases (authorization) and receives goods (custody) can approve fictitious deliveries.",
          "In the revenue cycle, the flow runs order → credit approval → shipping → billing → cash receipt → recording, and the controls separate each step: sales order approval independent of credit approval, shipping independent of billing, and cash handling (ideally via a lockbox) independent of the recording of receipts, with an independent bank reconciliation. Characteristic risks are fictitious sales, shipments without approved orders, unrecorded sales, and skimmed or lapped cash. In the expenditure cycle the anchor control is the three-way match — purchase order, receiving report, and vendor invoice must agree before payment — supported by separating purchasing from receiving and from accounts payable, and by cancelling (stamping 'paid') supporting documents so they cannot be resubmitted.",
          "When an entity is too small for full segregation, the answer is never 'the deficiency cannot be fixed'. Compensating controls — an owner who opens the bank statement and reviews it before the bookkeeper, mandatory vacations and job rotation that expose concealment, and detailed owner review of exception reports and reconciliations — can reduce the risk, but only if they are precise enough to detect the specific misstatement the missing segregation would allow. A generic 'the owner reviews everything' is worth little; 'the owner reviews the bank reconciliation and the vendor master change log monthly' is a real control.",
        ],
        keyRules: [
          "Incompatible functions: Authorization, Recording, Custody, plus independent Reconciliation (A-R-C). No role should hold two for the same transaction class.",
          "Revenue cycle: separate order/credit/shipping/billing/cash; expenditure cycle: three-way match plus purchasing ≠ receiving ≠ AP.",
          "Compensating controls (owner review, mandatory vacation, job rotation) must be as precise as the risk the missing segregation creates.",
        ],
        workedProblem: {
          scenario:
            "At a mid-size distributor, one employee, R. Vance, performs the following in the revenue cycle: approves new customer credit limits, enters sales orders, prints and mails customer invoices, and posts cash receipts to the AR subledger. The bank reconciliation is performed by the controller. Identify the segregation-of-duties conflicts, the specific fraud/error each enables, and recommend controls.",
          steps: [
            "Map Vance's duties to A-R-C: approving credit limits = Authorization; entering sales orders and posting cash receipts = Recording; printing/mailing invoices is a recording/processing step; there is no custody of cash stated, but posting receipts (recording) combined with authorization is the core conflict.",
            "Conflict 1 — Authorization + Recording of receivables: Vance can raise a customer's credit limit and enter unsupported sales orders, creating fictitious or unauthorized sales the customer may dispute or that will never be collected.",
            "Conflict 2 — Recording of both sales and cash receipts without independent custody/reconciliation of the detail: Vance can lap receivables (apply a later customer's payment to an earlier customer's account to hide a missing receipt) because the same person records the sale and the receipt.",
            "Assess the existing control: the controller performs the bank reconciliation, which is a useful independent reconciliation of total cash but does NOT reconcile the AR subledger detail to customer remittances, so lapping within AR can persist.",
            "Recommend controls: separate credit approval from order entry; have cash receipts posted from a lockbox/remittance list prepared by someone independent of AR recording; require independent reconciliation of the AR subledger to the GL and periodic customer statements mailed by someone other than the person who posts receipts.",
          ],
          conclusion:
            "Vance holds both authorization (credit approval) and recording (sales and cash-receipt posting) for the same receivables, enabling unauthorized/fictitious sales and receivables lapping. The controller's bank reconciliation controls total cash but not the AR detail, so it is not a sufficient compensating control. Segregate credit approval from order entry, post receipts from an independently prepared remittance list, and add independent AR subledger-to-GL reconciliation plus independently mailed customer statements.",
          markingNotes: [
            "Award marks for mapping duties to A-R-C and naming the authorization+recording conflict.",
            "Award marks for identifying lapping as the specific fraud enabled by combining sales and cash-receipt recording.",
            "Award marks for recognizing the bank reconciliation does not cover AR detail, and for recommending independent remittance/reconciliation controls.",
          ],
        },
      },
      {
        id: "sn2",
        title: "The control taxonomy and the ITGC reliance chain",
        testPointIds: ["tp2"],
        explanation: [
          "Two classification axes decide how a control is tested and whether it can be relied upon. The first axis is who executes it: an automated control runs entirely in software (a three-way match that blocks payment, an input edit that rejects a negative quantity, an interface control that reconciles record counts between systems); a manual control is performed by a person without reliance on system output (a supervisor physically counts cash); and an IT-dependent manual control is performed by a person but relies on information the system produces (a credit manager who investigates every account on a system-generated over-limit report). The second axis is timing relative to the error: preventive controls stop an error before it occurs, detective controls find it after, and corrective controls fix it once found.",
          "The crucial insight is the reliance chain. An automated control executes identically every time — its strength — but that consistency only guarantees correctness if the program stays as designed and the data it reads is trustworthy. That is why automated and IT-dependent controls sit on top of IT general controls: logical/physical access security (who can reach and change systems and data), program change management (changes are authorized, tested, approved, and migrated by someone other than the developer), program development/SDLC, and computer operations (jobs, backup, incident handling). Weakness in access or change management is the most damaging because a single such weakness can invalidate every automated control it touches.",
          "The examiner's favorite trap: an automated control that 'tested clean' when checked on one date, while change management was weak all year. Because an uncontrolled change could have altered the control's logic between the start of the period and the test date, point-in-time evidence does not establish effective operation for the period. Reliance on the automated control fails; the auditor must either test the control's operation across the whole period with corroborating evidence or revert to substantive procedures. For an IT-dependent manual control, the same logic applies twice over — the human step may be fine, but if the underlying report is incomplete or inaccurate the control still fails.",
        ],
        keyRules: [
          "Classify on both axes: automated / manual / IT-dependent AND preventive / detective / corrective.",
          "Automated and IT-dependent controls depend on ITGCs (access, change, operations); test ITGCs before relying on them.",
          "Weak change management or access can invalidate an automated control for the ENTIRE period, not just at the test date.",
          "Design deficiency = control cannot prevent/detect; operating deficiency = control exists but did not function.",
        ],
      },
      {
        id: "sn3",
        title: "Data governance, master data, and data-quality dimensions",
        testPointIds: ["tp3"],
        explanation: [
          "Data governance is the organizational structure that makes data trustworthy: it assigns accountability and sets standards so that the information business-process controls depend on is fit for use. The roles the exam expects you to distinguish are the data owner (a business executive accountable for a data domain and its policies), the data steward (day-to-day enforcement of standards and quality within that domain), and the data custodian (the IT function that stores, secures, and backs up the data). Governance also produces artifacts — data policies, a data dictionary defining each element, and standards for how data is created, classified, and retained.",
          "Data quality is measured against defined dimensions, and the exam tests whether you can name the dimension a defect violates. Accuracy means the value reflects reality; completeness means no required values are missing; consistency means the same fact agrees across systems; timeliness/currency means the data is available and up to date when needed; validity means it conforms to the defined format and business rules; and uniqueness means there are no unintended duplicates. A single customer entered twice violates uniqueness; a shipment recorded with no date violates completeness; a state code of 'ZZ' violates validity.",
          "Master data — customers, vendors, items, and the chart of accounts — is the relatively static reference data reused across many transactions, as opposed to transaction data that records individual events. Master-data management enforces a single source of truth with controlled add/change/delete, approval of master-data changes segregated from transaction processing, and periodic cleansing to remove duplicates and stale records. This matters because master-data defects propagate: a duplicate vendor master record enables duplicate payments no matter how good the three-way match is, and a mis-mapped item-to-GL-account link misstates every transaction that uses it. Finally, the data lifecycle (create → store/maintain → use → archive → dispose) needs controls at each stage, ending in retention and secure-disposal policies that satisfy legal and privacy requirements.",
        ],
        keyRules: [
          "Governance roles: owner (accountable, sets policy) → steward (enforces quality/standards) → custodian (secures/stores).",
          "Data-quality dimensions: accuracy, completeness, consistency, timeliness, validity, uniqueness.",
          "Master data is controlled reference data; a master-data defect defeats downstream transaction controls (e.g., duplicate vendor → duplicate payment).",
          "Control the full lifecycle: create → store/maintain → use → archive → dispose (with retention and secure disposal).",
        ],
        formulas: [
          "Completeness rate = records with all required fields populated ÷ total records expected.",
          "Accuracy rate = records matching an authoritative source ÷ records tested.",
          "Uniqueness (duplication) = distinct valid entities ÷ total records (a ratio below 1 signals duplicate master records).",
        ],
      },
      {
        id: "sn4",
        title: "SDLC and change management",
        testPointIds: ["tp4"],
        explanation: [
          "The system development life cycle governs how systems are built, and change management governs how they are altered once live; both are IT general controls, so a failure here undermines the automated and IT-dependent controls that run on the system. Across the SDLC — requirements, design, development, testing, implementation, and maintenance — the control objectives are user requirements and design sign-off, development to defined standards, comprehensive testing (unit, then integration, then user acceptance), a controlled conversion, and a post-implementation review. Conversions carry their own risk: whether parallel, phased, pilot, or big-bang, data conversion must be validated with record counts, control totals, and reconciliation before the old system is retired.",
          "Change management is the higher-frequency, higher-risk control and the one the exam probes most. Every change should follow the same spine: a formal request and authorization, testing in an environment separate from production, independent or user approval, and migration to production performed by someone OTHER than the developer, all tracked with version control and an audit trail. The structural control behind this is separation of the development, test, and production environments, with developers denied standing write access to production and program libraries access-controlled. When a developer can migrate their own code to production without independent approval, there is no assurance that what runs matches what was authorized and tested.",
          "Emergency changes are the classic trap. They are legitimate — production sometimes must be fixed immediately — but they still require a documented, expedited path: temporary access granted and logged, after-the-fact authorization and review, and retrospective testing. 'Fix now, document later, review never,' or emergency access that is never revoked, is a deficiency. Because a change-management weakness means the program logic could have been altered at any time during the period, the auditor must treat every automated control the change could have touched as unreliable for the whole period, not merely at a test date — the same reliance logic as in the ITGC chain.",
        ],
        keyRules: [
          "Change spine: authorize → test (separate environment) → approve → migrate by someone other than the developer, with version control.",
          "Separate development, test, and production; developers get no standing production write access.",
          "Emergency changes need an expedited-but-documented path with after-the-fact authorization, review, and testing.",
          "A change-management failure invalidates affected automated controls for the whole period; validate data conversions with counts/control totals.",
        ],
        workedProblem: {
          scenario:
            "A company's ERP enforces an automated control that blocks a vendor payment unless the invoice matches an approved PO and receiving report. Change-management review finds that (a) two developers hold standing write access to the production environment and routinely migrate their own patches, (b) there is no separate test environment — changes are tested in production, and (c) an 'emergency change' in March modified the matching-tolerance logic and was never independently reviewed. Evaluate whether the automated three-way match can be relied on for the year and classify the deficiencies.",
          steps: [
            "Classify the three-way match as an automated preventive application control over the validity/valuation of disbursements and accounts payable.",
            "Classify (a) and (b) as change-management and access ITGC deficiencies: no segregation between development and migration, no separate test environment, so any change goes live without independent control.",
            "Classify (c) as an unmanaged emergency change directly to the control's logic, with no independent review — the very control being relied upon may have been altered mid-period.",
            "Apply the reliance chain: because the matching logic could have been changed at any point during the year without authorization, testing, or approval, a point-in-time test of the control does not evidence effective operation for the period.",
            "Conclude on reliance and severity: the auditor cannot rely on the automated three-way match; the deficiencies affect a control central to AP existence/valuation and touch all automated controls in that module, so there is a reasonable possibility of material misstatement — at least a significant deficiency, evaluated as a potential material weakness after considering magnitude and compensating controls. Response: revert to substantive AP procedures (or test operation across the full period with corroboration) and communicate the deficiency in writing to governance.",
          ],
          conclusion:
            "No. Standing developer production access, the absence of a separate test environment, and an unreviewed emergency change to the matching logic are change-management/access ITGC deficiencies that invalidate reliance on the automated three-way match for the period. Reclassify testing to substantive AP procedures (or full-period control testing) and communicate at least a significant deficiency — assessed for material-weakness potential — to those charged with governance.",
          markingNotes: [
            "Award marks for classifying the three-way match as an automated application control and (a)/(b)/(c) as change/access ITGC deficiencies.",
            "Award marks for applying the reliance chain: uncontrolled year-round changes defeat point-in-time evidence.",
            "Full marks require the no-reliance conclusion, severity classification, and the substantive-response-plus-communication step.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Testing IT-dependent controls and the reliability of IPE",
        testPointIds: ["tp5"],
        explanation: [
          "IT-dependent controls fail candidates who test only the visible human step. When a control relies on information produced by the entity — a system-generated aging report, an exception listing, a reconciliation the system prepares — the reliability of that IPE is a precondition to relying on the control. Before you can conclude that 'the credit manager reviews the over-limit report and follows up,' you must establish that the report is complete (captures every account it should) and accurate (the balances and aging are right). Standard procedures: verify the report's parameters and logic (the query/date cutoffs used) and reconcile the report to the source — for an aging report, agree its total to the AR subledger and the general ledger, and test the aging buckets against underlying invoice dates.",
          "Testing then proceeds in a fixed sequence: design before operating effectiveness. Design effectiveness asks whether the control, if it operates as intended, is capable of preventing or detecting a material misstatement; you assess it through a walkthrough, inquiry, and observation. Only once design is established do you test operating effectiveness — whether the control actually functioned throughout the period — through inspection of evidence and reperformance. A control that is well designed but not operating, or operating but poorly designed, both fail; do not collapse the two.",
          "Nature, timing, and extent follow the control type. For an automated control, a single well-designed test can support reliance across the period PROVIDED the ITGCs (especially change management) are effective, because the control cannot 'try harder' or get tired — it either works or it does not, and change management assures it stayed the same. For manual and IT-dependent controls, the sample must scale to the control's frequency (a daily control needs a larger sample than a quarterly one) because human performance varies. In every case, if ITGCs are weak, a single point-in-time result is insufficient and the extent of testing must increase or the strategy must move to substantive procedures.",
        ],
        keyRules: [
          "Establish IPE completeness and accuracy (verify report logic; reconcile to subledger/GL) BEFORE relying on a control that uses it.",
          "Test design first (walkthrough/inquiry/observation), then operating effectiveness (inspection/reperformance over the period).",
          "Automated control: one test + effective ITGCs can support period reliance; manual/IT-dependent: sample scales to frequency.",
          "Weak ITGCs make point-in-time evidence insufficient — extend testing or go substantive.",
        ],
        workedProblem: {
          scenario:
            "A control states: 'Each month the credit manager reviews a system-generated report of customers over their credit limit and places a hold on further shipments until resolved.' You are designing procedures to test this IT-dependent manual control's operating effectiveness for the year. Set out the procedures, in order.",
          steps: [
            "Establish IPE reliability first: obtain the over-limit report logic (the query comparing balance to the credit-limit master field) and confirm it captures all customers; reconcile the report's total receivables to the AR subledger and GL, and test a sample of listed balances and credit limits back to the subledger and the approved credit-limit master.",
            "Test design: walk through one instance end to end — observe the credit manager receiving the report, selecting over-limit accounts, placing shipment holds in the system, and documenting resolution — to confirm the control, as designed, would prevent shipments to over-limit customers.",
            "Confirm the completeness of the population of control operations: obtain evidence that a report was produced and reviewed for each of the 12 months (e.g., signed/annotated reports or system hold logs), so the sample is drawn from a complete set of monthly occurrences.",
            "Test operating effectiveness: for a sample of months (sized to the monthly frequency), inspect the annotated report and reperform — verify each over-limit account either had a shipment hold applied or a documented, authorized resolution, and that no over-limit account was shipped without action.",
            "Consider ITGCs and exceptions: confirm change management and access controls over the credit-limit master and the report logic are effective (otherwise the report/limits could be manipulated); investigate any exception as a potential deficiency and evaluate its severity.",
          ],
          conclusion:
            "The test must begin by proving the over-limit report is complete and accurate (reconcile to subledger/GL and validate the credit-limit master), then establish design via walkthrough, confirm a complete population of monthly reviews, and finally test operating effectiveness by inspecting and reperforming a frequency-scaled sample of monthly reviews — all supported by effective ITGCs over the report logic and credit-limit master. Testing only the manager's review without validating the IPE would not support reliance.",
          markingNotes: [
            "Award marks for putting IPE completeness/accuracy procedures (report logic + reconciliation to subledger/GL) first.",
            "Award marks for testing design before operating effectiveness and for confirming a complete population of monthly occurrences.",
            "Full marks require a frequency-scaled operating-effectiveness sample (inspection + reperformance) and reliance on ITGCs over the report and credit-limit master.",
          ],
        },
      },
      {
        id: "sn6",
        title: "Process analytics, continuous monitoring, and continuous auditing",
        testPointIds: ["tp6"],
        explanation: [
          "Applying analytics to a business process changes the paradigm from sampling to full-population screening, but it does not remove judgment. A routine that flags 60 duplicate-payment candidates has produced 60 leads, not 60 confirmed overpayments; each must be corroborated against the underlying invoices, receiving evidence, and payment records before any conclusion. The precondition is data reliability: unless the population is complete and accurate — reconciled to the general ledger and extracted without filtering that could drop items — the output is untrustworthy regardless of how sophisticated the technique is.",
          "The exam expects you to distinguish continuous monitoring from continuous auditing. Continuous monitoring is a management control embedded in the process: automated exception rules, dashboards, and KPIs that management uses to keep the process under control in near-real time (for example, an automated alert whenever a payment is made to a vendor added in the last 24 hours). Continuous auditing is an independent assurance activity performed by internal or external auditors more frequently than a traditional periodic audit, often using the same analytic techniques but for assurance rather than operation. Who owns the response differs: management acts on monitoring exceptions, auditors evaluate and report on continuous-audit findings.",
          "Typical process analytics map directly to cycle risks: duplicate-payment detection (same vendor/amount/date or invoice number) and three-way-match exception analysis in the expenditure cycle; segregation-of-duties conflict mining in access/role data to find users who can both create and approve a vendor or payment; journal-entry testing for post-dates, unusual users, round amounts, or unusual account pairings; and document gap/sequence checks for missing or out-of-order shipping or check numbers. In every case, the disposition of each flagged item — investigated, explained, or escalated — must be documented, and recurring exceptions should feed back into strengthening the preventive controls upstream.",
        ],
        keyRules: [
          "Analytic exceptions are leads to corroborate, not conclusions; establish data completeness/accuracy before relying on output.",
          "Continuous monitoring = a management control embedded in the process; continuous auditing = independent assurance run more frequently than a periodic audit.",
          "Match the analytic to the cycle risk (duplicate payments, SoD conflict mining, journal-entry tests, gap/sequence checks) and document the disposition of each exception.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (process narrative)",
        question:
          "A small company's purchasing process: the office manager creates new vendor records, enters purchase orders, records the receipt of goods in the system, matches invoices, and releases payments in the ERP. The ERP performs an automated three-way match, but the office manager can override a failed match with a comment. The owner reviews the monthly financial statements. Identify the segregation-of-duties conflicts, classify the three-way match and the override, and recommend controls including one realistic compensating control given the company's size.",
        answerPlan: [
          "Map the office manager's duties to A-R-C and identify incompatible combinations.",
          "Classify the automated three-way match and the manual override; note the override defeats the automated control.",
          "State the specific fraud/error enabled (fictitious vendor / duplicate or unsupported payment).",
          "Recommend segregation plus a precise, size-appropriate compensating control (owner review of specifics).",
        ],
        modelAnswer:
          "The office manager spans authorization (approving vendors and POs), custody-adjacent recording (recording receipt of goods), recording (invoice matching), and effectively disbursement (releasing payment) — a near-complete concentration of the expenditure cycle in one person. This enables the classic expenditure frauds: creating a fictitious or duplicate vendor and paying it, or paying for goods never received, because the same person creates the vendor, records the receipt, and releases payment. The ERP three-way match is an automated preventive application control, but the office manager's ability to override a failed match with only a comment is a manual override that defeats the automated control entirely — an automated control with an uncontrolled manual override provides little assurance. The owner's review of monthly financial statements is too high-level to detect an individual improper payment, so it is not a sufficient compensating control as described. Recommended controls: separate vendor master maintenance from transaction processing (a different person, with approval, adds/changes vendors); separate the recording of goods receipt from invoice matching and payment release; and require independent approval for any match override, with an exception report of all overrides. Given the small size, a realistic compensating control is for the owner (not the office manager) to open the bank statement and review it before it is recorded, and to review a monthly report of new/changed vendors and all match overrides against supporting documents — precise enough to detect the specific fraud the missing segregation would allow.",
        markingGuide: [
          "1 mark: mapping duties to A-R-C and identifying the concentration of authorization/recording/disbursement in one person.",
          "1 mark: naming the specific fraud (fictitious/duplicate vendor or payment for goods not received).",
          "1 mark: classifying the three-way match as automated and recognizing the manual override defeats it.",
          "1 mark: noting the owner's statement review is too high-level to be a sufficient compensating control.",
          "1 mark: recommending vendor-master and payment segregation plus a precise, size-appropriate compensating control (bank statement + override/vendor-change review).",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp4", "tp2"],
        style: "Short constructed response (change management)",
        question:
          "Evaluate this change process against sound change-management controls and conclude on the effect for the audit of related automated controls: 'Developers write and test code on their own workstations, then migrate it directly to production when the business user says it is urgent. A change ticket is created afterward. There is no separate test environment. Access to production is shared among the three developers using a common admin login.' Identify the deficiencies and their audit implication.",
        answerPlan: [
          "Test the process against authorize → test (separate env) → approve → migrate by a different person.",
          "Identify each missing control (no separate test env, developer self-migration, after-the-fact ticket, shared admin login).",
          "Classify as change-management and logical-access ITGC deficiencies.",
          "State the reliance implication for automated controls over the period.",
        ],
        modelAnswer:
          "Measured against sound change management, this process fails at nearly every step. There is no independent authorization before the change (the ticket is created afterward), no testing in an environment separate from production (developers test on their own workstations and there is no test environment), no independent approval, and no segregation between developing and migrating — developers migrate their own code straight to production. These are program change-management ITGC deficiencies. Separately, the shared common admin login for production is a logical-access ITGC deficiency: it destroys individual accountability, so it is impossible to attribute or control who changed what. The audit implication follows the reliance chain: because any automated control's logic could have been altered at any time during the period without authorization, testing, or independent approval, point-in-time tests of those automated controls do not evidence effective operation for the period. The auditor cannot rely on the affected automated controls; the strategy must shift to substantive procedures (or full-period control testing with corroboration), and the deficiencies — being pervasive to all automated controls on the system — should be evaluated as at least a significant deficiency and potentially a material weakness, then communicated in writing to those charged with governance.",
        markingGuide: [
          "1 mark: identifying missing authorization, missing separate test environment, and after-the-fact ticketing.",
          "1 mark: identifying developer self-migration (no segregation) and the shared admin login as an access deficiency.",
          "1 mark: classifying these as change-management and logical-access ITGC deficiencies.",
          "1 mark: concluding automated controls cannot be relied on for the period and stating the substantive/communication response.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5", "tp3"],
        style: "Task-based simulation (control testing)",
        question:
          "An IT-dependent manual control: 'Weekly, the inventory manager reviews a system-generated report of items with negative on-hand quantities and investigates each.' The report is produced from the perpetual inventory system, which draws item records from the item master. Design the procedures to conclude whether this control can be relied upon for the period, and identify the data-quality/master-data risk that could undermine it.",
        answerPlan: [
          "Establish IPE completeness and accuracy (report logic; reconcile to perpetual system).",
          "Identify the master-data/data-quality risk in the item master.",
          "Test design, then operating effectiveness over the period.",
          "Tie the conclusion to ITGCs and the reliability of the item master.",
        ],
        modelAnswer:
          "Begin with the reliability of the information produced by the entity, because the control relies on a system report. Obtain and evaluate the report's logic (the query selecting items with on-hand quantity below zero) and confirm it captures every relevant item; reconcile the perpetual inventory population underlying the report to the inventory subledger and general ledger, and trace a sample of on-hand quantities back to source movements. The key master-data risk is the item master: if items are duplicated, mis-mapped, or have incorrect unit-of-measure or location attributes (violations of uniqueness, validity, and consistency), the negative-quantity report will be incomplete or misleading — an item split across two duplicate records might never show negative even when it physically is — so the completeness of the report depends on item-master data quality and controlled maintenance. Next test design: walk through one weekly cycle to confirm that the review, if performed, would detect and resolve negative balances (observe the manager receiving the report, investigating items, and correcting or explaining each). Then confirm a complete population of the 52 weekly occurrences and test operating effectiveness on a frequency-scaled sample of weeks by inspecting the annotated reports and reperforming the follow-up — verifying each negative item was investigated and resolved. Finally, relate the conclusion to ITGCs: change and access controls over the report logic and the item master must be effective, or the report and master data could be manipulated. Reliance is supported only if the IPE is complete and accurate, the item master is controlled, design is sound, and operating effectiveness holds across the period.",
        markingGuide: [
          "1 mark: establishing IPE completeness/accuracy (report logic + reconciliation to subledger/GL) before testing the review.",
          "1 mark: identifying the item-master data-quality risk (duplicates/mis-mapping → incomplete report) and naming the dimensions (uniqueness/validity/consistency).",
          "1 mark: testing design before operating effectiveness and confirming a complete population of weekly occurrences.",
          "1 mark: frequency-scaled operating-effectiveness sample plus reliance on ITGCs over the report and item master.",
        ],
      },
      {
        id: "ep4",
        testPointIds: ["tp6", "tp3"],
        style: "MCQ set rationale (analytics & governance)",
        question:
          "For each objective, recommend the analytic/technique and one required safeguard: (1) find vendors who could both create a vendor record and approve its payments; (2) detect potential duplicate payments across the full disbursements file; (3) monitor, in near-real time, payments to vendors added within the last 24 hours; (4) decide who should own remediation when analytics reveal that 4% of customer master records are duplicates.",
        answerPlan: [
          "Objective 1 → SoD conflict mining in access/role data.",
          "Objective 2 → full-population duplicate-payment analytics with data-reliability safeguard.",
          "Objective 3 → continuous monitoring (management control).",
          "Objective 4 → data-governance ownership (data owner/steward).",
        ],
        modelAnswer:
          "(1) Segregation-of-duties conflict mining: analyze user access/role data to identify any user (or role) that can both create/modify a vendor master record and approve or release that vendor's payments; the required safeguard is to corroborate access rights against actual transactions before concluding, since holding conflicting access is a risk indicator, not proof of an improper payment. (2) Duplicate-payment detection using generalized audit software / analytics across the entire disbursements file, matching on combinations such as same vendor + amount + date and same invoice number; the required safeguard is to first establish the data is complete and accurate (reconciled to the GL, extracted without filtering), because incomplete data would miss duplicates — then treat each hit as a lead to corroborate against invoices and receiving evidence. (3) Continuous monitoring: an embedded automated rule/dashboard that alerts management whenever a payment is made to a vendor added within the prior 24 hours; this is a management control (continuous monitoring), and the safeguard is a defined response protocol so a human investigates each alert promptly. (4) The data owner (the business executive accountable for the customer data domain) owns the remediation decision and policy, with the data steward enforcing the de-duplication standards and the data custodian executing the technical cleanup; the safeguard is controlled, approved master-data changes segregated from transaction processing so the cleanup itself does not introduce errors. Marks turn on selecting the right technique for each objective, distinguishing continuous monitoring (management) from an audit test, and treating analytic hits as corroboration-required leads.",
        markingGuide: [
          "1 mark each: correct technique for objectives 1–4 (SoD conflict mining; duplicate-payment analytics; continuous monitoring; data-owner-led governance).",
          "1 mark: data-reliability safeguard for objective 2 and 'lead not conclusion' treatment of exceptions.",
          "1 mark: identifying continuous monitoring in (3) as a management control (vs a continuous audit) and the correct governance roles in (4).",
        ],
      },
    ],
  }),
};
