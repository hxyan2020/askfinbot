import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA (US Uniform CPA Examination) exam-calibrated depth content, keyed by
 * moduleId to merge onto CPA_COURSEWARE.
 *
 * CPA Evolution model: three Core sections (AUD, FAR, REG) plus one Discipline
 * (BAR, ISC or TCP). Each section is a four-hour AICPA Blueprint test built from
 * MCQ testlets and task-based simulations (TBSs); some simulations include a
 * research (authoritative-literature) tab. Scaled score 0–99, 75 to pass.
 *
 * Calibration notes used throughout:
 *  - Core content is deliberately tested at Application/Analysis; Discipline
 *    sections push the same topics to higher Analysis/Evaluation and greater
 *    scenario complexity — the depth notes flag where a Core topic is re-tested
 *    at Discipline rigor.
 *  - GAAP (FASB ASC), GASB (state & local government), federal tax (IRC/Treasury
 *    regs) and audit/attestation (SAS/PCAOB/SSARS/SSAE) are treated as distinct
 *    authority sets; do not cross-apply rules between them.
 *  - Tax figures that Congress or the IRS index annually (standard deduction,
 *    brackets, AMT exemption, QBI thresholds, §179/bonus limits, annual gift
 *    exclusion, estate/GST exemption, retirement-plan and SS wage-base limits)
 *    are flagged as "confirm the current-year amount for your testing window"
 *    rather than hard-coded, because stale thresholds lose marks and mislead.
 */
export const CPA_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // AUD — Auditing & Attestation (Core)
  // ===================================================================
  "cpa-aud-m1": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Threats-and-safeguards conceptual framework",
        priority: "critical",
        examinerFocus:
          "Whether you can name the specific threat category in a fact pattern and decide whether a safeguard reduces it to an acceptable level or whether the engagement must be declined. The examiner rarely asks 'is this ethical?'—it gives a relationship and tests classification plus the mitigation decision.",
        typicalQuestionForms: [
          "MCQ: match a scenario (auditor also bookkeeps, spouse holds shares, contingent fee offered) to self-review / self-interest / advocacy / familiarity / undue-influence / management-participation threat.",
          "TBS: a document-review simulation listing several relationships where you flag each as impaired/not impaired and cite the safeguard.",
          "Research tab: locate the AICPA Code section that governs a nonattest-service scenario.",
        ],
        mustKnow: [
          "Six threat categories: self-review, self-interest, advocacy, familiarity, undue influence, management participation.",
          "The three-step framework: identify threat → evaluate significance → apply safeguard; if no safeguard reduces it to an acceptable level, decline or withdraw.",
          "Management-participation threat arises when the CPA performs management responsibilities (authorizing transactions, having custody of assets); it generally cannot be safeguarded for an attest client.",
        ],
        scoringActions: [
          "State the threat category explicitly before choosing a safeguard—graders and MCQ distractors hinge on the correct label.",
          "Confirm whether the client is an attest client before concluding a nonattest service is permitted.",
          "Reject 'client review of the work' as a sufficient safeguard when the CPA effectively made management decisions.",
        ],
      },
      {
        id: "tp2",
        title: "Independence: covered members, financial and family interests",
        priority: "critical",
        examinerFocus:
          "Distinguishing a DIRECT financial interest (impairs regardless of materiality) from an INDIRECT interest (impairs only if material), and identifying who is a covered member versus a partner in another office.",
        typicalQuestionForms: [
          "MCQ: does a described interest impair independence (mutual fund holding, spouse's 401(k), immediate family employment in a key position)?",
          "TBS: classify a firm-wide roster of interests as impairing or not.",
        ],
        mustKnow: [
          "Direct financial interest = ownership held directly or through an intermediary the member controls; impairs regardless of materiality.",
          "Indirect financial interest (e.g., small holding inside a diversified mutual fund the member does not control) impairs only if material to the member.",
          "Immediate family (spouse/dependents) interests are attributed to the covered member; a close relative in a key position at the client can impair.",
        ],
        scoringActions: [
          "Ask 'direct or indirect?' first, then 'material?' only for indirect interests.",
          "Trace whether the individual is a covered member (engagement team, chain of command, office) before attributing interests.",
        ],
      },
      {
        id: "tp3",
        title: "AICPA vs SEC/PCAOB independence for issuers",
        priority: "high",
        examinerFocus:
          "Recognizing that public-company (issuer) audits are governed by stricter SEC/PCAOB rules—prohibited non-audit services, partner rotation, cooling-off, audit-committee pre-approval—not the AICPA Code.",
        typicalQuestionForms: [
          "MCQ: is a non-audit service (bookkeeping, internal audit outsourcing, valuation feeding the financials, certain tax services) permitted for an issuer?",
          "TBS: determine which rule set applies given issuer vs nonissuer facts.",
        ],
        mustKnow: [
          "SEC prohibits nine categories of non-audit services for issuer audit clients (e.g., bookkeeping, financial-system design/implementation, appraisal/valuation, internal audit outsourcing, management functions).",
          "Lead and concurring partners rotate off after five years with a five-year cooling-off period; audit committee must pre-approve all services.",
          "PCAOB standards, not AICPA, set independence and reporting rules for issuers.",
        ],
        scoringActions: [
          "Screen for the word 'issuer' / 'public' / 'SEC registrant' and switch rule sets immediately.",
          "Confirm audit-committee pre-approval for any permitted service to an issuer.",
        ],
      },
      {
        id: "tp4",
        title: "Government (GAGAS/Yellow Book) and ERISA/DOL responsibilities",
        priority: "medium",
        examinerFocus:
          "What GAGAS adds on top of AICPA rules (extra independence documentation for nonaudit services, CPE, reporting on internal control and compliance) and the DOL's stricter independence rule for employee benefit plan audits.",
        typicalQuestionForms: [
          "MCQ: which added requirement applies under the Yellow Book / to a DOL benefit-plan audit?",
        ],
        mustKnow: [
          "GAGAS requires evaluating and documenting threats when performing nonaudit services for an audited entity, plus specific CPE (including hours in government subject matter).",
          "GAGAS single audit reporting adds reports on internal control over compliance and on compliance with major-program requirements.",
          "The DOL independence rule for ERISA plan audits can be stricter than the AICPA rule regarding accounting/bookkeeping for the plan.",
        ],
        scoringActions: [
          "Layer GAGAS on top of AICPA rules rather than replacing them.",
          "Flag benefit-plan audits as DOL-governed for independence.",
        ],
      },
      {
        id: "tp5",
        title: "Quality management, due care and professional skepticism",
        priority: "medium",
        examinerFocus:
          "Firm-level system of quality management (risk-based) versus engagement-level responsibilities, and applying due care/skepticism as a questioning mindset that presumes neither honesty nor dishonesty.",
        typicalQuestionForms: [
          "MCQ: identify a component of a system of quality management or the correct definition of professional skepticism.",
          "TBS: evaluate whether a firm's monitoring/remediation response is adequate.",
        ],
        mustKnow: [
          "A system of quality management is risk-based: establish quality objectives, identify and assess quality risks, design responses (SQMS 1).",
          "Professional skepticism = a questioning mind alert to conditions indicating possible misstatement and critical assessment of evidence.",
          "Due care requires competence, diligence and compliance with technical/ethical standards.",
        ],
        scoringActions: [
          "Separate firm-level QM elements from engagement-level performance when the question mixes them.",
          "Treat skepticism as neither assuming dishonesty nor assuming honesty.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim to bank ethics/independence MCQs as near-automatic points—this is high-yield, rule-driven material that appears across the whole section.",
      timeBudget:
        "~1.25 min per MCQ; on an independence TBS spend the first 3–4 minutes classifying each relationship before writing conclusions.",
      answerSequence: [
        "Identify client type (issuer vs nonissuer vs governmental vs ERISA plan) to lock the rule set.",
        "Name the threat category or interest type.",
        "Apply the materiality/direct-indirect test where relevant.",
        "State the safeguard or conclude impairment/decline.",
      ],
      qualityChecks: [
        "Did I apply SEC/PCAOB (not AICPA) rules to an issuer?",
        "Did I treat direct financial interests as impairing regardless of materiality?",
        "Did I reject client self-review as a safeguard for management-function services?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The conceptual framework as a decision engine",
        testPointIds: ["tp1", "tp5"],
        explanation: [
          "The AICPA Code is built on a threats-and-safeguards conceptual framework rather than a closed list of prohibitions. When a rule does not explicitly address a situation, the member must apply the framework: identify threats to compliance with the rules, evaluate their significance, and apply safeguards to eliminate or reduce them to an acceptable level. An acceptable level is one at which a reasonable and informed third party would conclude compliance is not compromised.",
          "The examiner exploits the fact that candidates memorize threat names but cannot map them. Self-review arises when the member evaluates their own prior work (e.g., auditing figures they bookkept). Advocacy arises when the member promotes a client's position (e.g., representing the client in litigation). Familiarity comes from long or close relationships; undue influence from pressure or gifts; self-interest from a financial or other stake; management participation from taking on client management roles.",
          "The management-participation threat is the trap: for an attest client, performing a management responsibility (authorizing transactions, signing checks, having custody of assets, hiring/firing) generally cannot be safeguarded, so the correct answer is usually 'decline' rather than 'apply a safeguard'. To keep a nonattest service permissible, the client must designate a suitable individual to oversee it, accept responsibility, and make all management decisions.",
        ],
        keyRules: [
          "No safeguard exists that can reduce a threat when the member has effectively performed management functions for an attest client.",
          "The 'reasonable and informed third party' test defines 'acceptable level'.",
          "Nonattest services require client to accept responsibility and designate a competent individual to oversee.",
        ],
        workedProblem: {
          scenario:
            "A firm audits Client X (a nonissuer). The same firm also (a) posts month-end journal entries the client's controller reviews and approves, (b) prepares the client's tax return, and (c) has been asked to select and implement a new ERP system, configuring the chart of accounts and approving vendor setups. Which services impair independence?",
          steps: [
            "Service (a) bookkeeping: permitted for a nonissuer only if the client accepts responsibility, a competent individual oversees, and the CPA does not authorize/approve transactions. The controller reviews and approves entries → self-review threat exists but is safeguarded → not impaired if all conditions met.",
            "Service (b) tax return preparation: a routine nonattest service permitted with the same management-responsibility safeguards; ordinarily not impairing for a nonissuer.",
            "Service (c) ERP selection and implementation with configuration and vendor approval: designing/implementing a financial information system and approving vendor setups are management functions/self-review of controls the firm will later audit. Approving vendor setups is an authorization = management participation that cannot be safeguarded.",
            "Compare with issuer rules: if Client X were an issuer, both bookkeeping (a) and financial-system design/implementation (c) would be outright prohibited regardless of safeguards.",
          ],
          conclusion:
            "For nonissuer Client X, (a) and (b) are permissible with proper safeguards; (c) impairs independence because the firm would authorize transactions and design the very system it audits. For an issuer, (a) and (c) would be flatly prohibited.",
          markingNotes: [
            "Award marks for identifying the threat category per service.",
            "Award marks for applying the nonissuer safeguard conditions to (a) and (b).",
            "Full marks require noting the issuer rules differ and that authorization of transactions cannot be safeguarded.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Direct vs indirect interests and covered members",
        testPointIds: ["tp2"],
        explanation: [
          "Independence in fact and appearance turns on financial and relationship ties. The single most-tested distinction is direct versus indirect financial interest. A direct interest—shares owned outright, or through a vehicle the member controls—impairs independence regardless of how small. An indirect interest, such as a stake held inside a diversified fund the member does not control, impairs only if it is material to the member.",
          "The rule attaches to covered members: individuals on the engagement team, those in the chain of command, partners and managers who provide more than ten hours of nonattest services, partners in the office where the lead engagement partner practices, and the firm itself. Interests of a covered member's immediate family (spouse and dependents) are attributed to the member. A close relative (parent, sibling, nondependent child) creates impairment mainly if they hold a key position at the client or a material financial interest known to the member.",
        ],
        keyRules: [
          "Direct interest → impairs regardless of materiality.",
          "Indirect interest → impairs only if material.",
          "Immediate family interests are attributed to the covered member; close-relative rules are narrower (key position / material interest).",
        ],
      },
      {
        id: "sn3",
        title: "Issuer independence: SEC/PCAOB overlay",
        testPointIds: ["tp3"],
        explanation: [
          "For issuer audits the AICPA Code yields to SEC rules and PCAOB standards, which are stricter. The SEC lists non-audit services that are incompatible with the auditor role because they create self-review or management-participation threats that cannot be cured: bookkeeping, financial information systems design and implementation, appraisal or valuation services feeding the financials, actuarial services, internal audit outsourcing, management or human-resource functions, broker-dealer/investment services, legal services, and certain expert services.",
          "Structural safeguards reinforce independence: the lead and concurring (engagement quality reviewer) partners must rotate off after five consecutive years and observe a five-year cooling-off period; other partners rotate on a seven-year/two-year basis. The audit committee must pre-approve all audit and permitted non-audit services, and a one-year cooling-off period applies before a former audit team member can take a key financial-reporting oversight role at the client.",
        ],
        keyRules: [
          "Nine SEC-prohibited non-audit service categories for issuer audit clients.",
          "Lead/concurring partner five-year rotation with five-year cooling-off.",
          "Audit-committee pre-approval of all services; one-year employment cooling-off for key positions.",
        ],
      },
      {
        id: "sn4",
        title: "GAGAS and ERISA independence overlays",
        testPointIds: ["tp4"],
        explanation: [
          "Government Auditing Standards (the Yellow Book, GAGAS) apply the same conceptual framework but add teeth. Before performing any nonaudit service for an audited entity, the auditor must determine that management has the skills, knowledge and experience to oversee it, and must document the threats and safeguards. GAGAS also imposes CPE requirements (a minimum every two years, including hours directly related to government auditing) and, in single audits, adds reporting on internal control over compliance and on compliance for major federal programs.",
          "Employee benefit plan audits under ERISA are subject to the Department of Labor's independence rule, which in some respects is stricter than the AICPA's—particularly regarding maintaining the plan's accounting records. Candidates should flag ERISA plan facts as DOL-governed and government engagements as GAGAS-governed, layering these on top of, not instead of, AICPA baseline rules.",
        ],
        keyRules: [
          "GAGAS: document threats/safeguards and confirm management oversight ability for nonaudit services.",
          "GAGAS CPE and single-audit compliance reporting requirements.",
          "ERISA plan audits follow the DOL independence rule.",
        ],
      },
      {
        id: "sn5",
        title: "Systems of quality management (SQMS 1/2)",
        testPointIds: ["tp5"],
        explanation: [
          "Firm responsibility now operates through a risk-based system of quality management. Under SQMS No. 1 the firm establishes quality objectives across eight components (governance and leadership, the firm's risk assessment process, relevant ethical requirements, acceptance and continuance, engagement performance, resources, information and communication, and monitoring and remediation), identifies quality risks that threaten those objectives, and designs responses. SQMS No. 2 addresses engagement quality reviews.",
          "This differs from engagement-level performance: the engagement partner is responsible for the specific audit's direction, supervision and review, while the QM system is a firm-wide, continuously monitored process with an annual evaluation of its effectiveness. Exam items test whether a candidate can separate these levels and identify monitoring/remediation as the feedback loop that corrects deficiencies.",
        ],
        keyRules: [
          "SQMS 1 uses a risk-based approach across eight components with an annual system evaluation.",
          "Monitoring and remediation is the corrective feedback loop.",
          "Engagement-level review is distinct from the firm-level QM system.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp3"],
        style: "Task-based simulation (relationship classification)",
        question:
          "Firm F audits Company C, an SEC issuer. Consider: (1) The engagement partner's spouse owns 50 shares of C directly. (2) F was engaged to design and implement C's new consolidation software. (3) F prepares routine corporate tax returns for C, pre-approved by the audit committee. (4) The lead partner has served six consecutive years. For each item, state whether independence is impaired and why.",
        answerPlan: [
          "Confirm C is an issuer → SEC/PCAOB rules govern.",
          "Item 1: direct interest of immediate family attributed to covered member.",
          "Item 2: financial-system design/implementation is SEC-prohibited.",
          "Item 3: some tax services permitted if audit-committee pre-approved.",
          "Item 4: five-year rotation breached at year six.",
        ],
        modelAnswer:
          "Because Company C is an SEC issuer, SEC independence rules and PCAOB standards govern, not the AICPA Code baseline. (1) Impaired: the engagement partner is a covered member, and a spouse's directly owned shares are an immediate-family direct financial interest attributed to the partner—impairing regardless of the 50-share size. (2) Impaired: designing and implementing a financial information system is one of the SEC's expressly prohibited non-audit services for an issuer audit client; no safeguard cures it. (3) Not necessarily impaired: routine tax-return preparation is generally a permitted non-audit service for an issuer provided the audit committee pre-approves it and it does not stray into prohibited advocacy or management functions—these facts state pre-approval, so it is permissible. (4) Impaired: the lead partner must rotate off after five consecutive years; a sixth year violates the SEC partner-rotation rule and impairs independence.",
        markingGuide: [
          "1 mark: recognizing issuer status triggers SEC/PCAOB rules.",
          "1 mark each: correct impaired/not-impaired conclusion for items 1–4.",
          "1 mark: citing the specific reason (direct family interest, prohibited service, pre-approval, five-year rotation).",
          "Deduct if AICPA materiality reasoning is applied to the direct family interest.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1", "tp2"],
        style: "MCQ set rationale",
        question:
          "A CPA who audits a nonissuer is offered a contingent fee to help the client secure financing, and separately holds units in a broad mutual fund that owns a 0.1% position in the audit client. Explain the independence outcome of each.",
        answerPlan: [
          "Contingent fee for attest-related work → prohibited / self-interest & advocacy.",
          "Mutual fund position → indirect interest → materiality test.",
        ],
        modelAnswer:
          "The contingent-fee arrangement is impermissible: contingent fees are prohibited for a client for whom the firm performs attest services, and helping secure financing on a contingent basis creates self-interest and advocacy threats with no adequate safeguard. The mutual-fund holding is an indirect financial interest because the CPA does not control the fund's investment decisions; it impairs independence only if the underlying interest is material to the CPA. A 0.1% look-through position in a diversified fund is ordinarily immaterial, so independence is not impaired on that ground—unless the CPA's proportionate share is in fact material.",
        markingGuide: [
          "1 mark: contingent fee prohibited for attest clients.",
          "1 mark: naming self-interest/advocacy threat.",
          "1 mark: classifying the fund holding as indirect.",
          "1 mark: applying the materiality test to the indirect interest.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp4", "tp5"],
        style: "Short constructed response",
        question:
          "Explain two ways Government Auditing Standards (GAGAS) heighten requirements beyond the AICPA Code, and describe how a firm's system of quality management corrects a recurring engagement deficiency.",
        answerPlan: [
          "GAGAS nonaudit-service documentation + CPE / compliance reporting.",
          "QM monitoring and remediation loop.",
        ],
        modelAnswer:
          "GAGAS heightens requirements first by demanding that, before performing any nonaudit service for an audited entity, the auditor confirm and document that management can oversee the service and evaluate the resulting threats and safeguards—documentation the AICPA framework does not always require. Second, GAGAS adds continuing-education requirements (including hours specific to government auditing) and, in single audits, additional reports on internal control over compliance and on compliance with major-program requirements. A system of quality management corrects recurring deficiencies through its monitoring and remediation component: the firm's ongoing monitoring detects the deficiency, performs root-cause analysis, designs a remedial response (training, revised methodology, additional review), and re-evaluates whether the response worked in the annual evaluation of the system's effectiveness.",
        markingGuide: [
          "1 mark each for two valid GAGAS heightened requirements.",
          "1 mark: identifying monitoring and remediation as the corrective component.",
          "1 mark: describing root-cause analysis and re-evaluation.",
        ],
      },
    ],
  }),
  "cpa-aud-m2": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Preconditions, predecessor communications and the engagement letter",
        priority: "high",
        examinerFocus:
          "Whether the auditor may accept/continue: management's use of an acceptable financial reporting framework, agreement on responsibilities, and the REQUIRED attempt to communicate with the predecessor auditor (which requires client permission).",
        typicalQuestionForms: [
          "MCQ: what must occur before accepting an engagement; who initiates predecessor contact.",
          "TBS: draft/identify required elements of an engagement letter.",
        ],
        mustKnow: [
          "Preconditions: acceptable reporting framework plus management's agreement to its responsibilities (F/S, internal control, providing access).",
          "The SUCCESSOR must initiate predecessor communication, but only after obtaining the client's permission to respond; refusal is a red flag.",
          "The engagement letter documents objective/scope, responsibilities, framework and reporting; it reduces misunderstanding but does not limit auditor responsibility.",
        ],
        scoringActions: [
          "Confirm client permission before predecessor inquiry.",
          "Reject acceptance when management refuses to acknowledge its responsibilities.",
        ],
      },
      {
        id: "tp2",
        title: "Overall audit strategy vs the detailed audit plan",
        priority: "high",
        examinerFocus:
          "Distinguishing the high-level STRATEGY (scope, timing, direction, resource deployment) from the PLAN (nature, timing and extent of specific procedures), and how risk assessment drives both.",
        typicalQuestionForms: [
          "MCQ: classify a decision as strategy-level or plan-level.",
          "TBS: order planning steps or select procedures responsive to identified risks.",
        ],
        mustKnow: [
          "Strategy sets scope, reporting objectives, timing and resource allocation; the plan details risk-assessment procedures and further audit procedures.",
          "Planning is continuous and iterative, not a one-time phase.",
          "The engagement partner and key members must be involved in planning and must apply professional skepticism.",
        ],
        scoringActions: [
          "Map each planning decision to strategy vs plan when the question mixes them.",
          "Tie procedures back to assessed risks at the assertion level.",
        ],
      },
      {
        id: "tp3",
        title: "Understanding the entity and planning analytical procedures",
        priority: "critical",
        examinerFocus:
          "Using preliminary analytical procedures to identify areas of higher risk (unexpected relationships), and understanding the entity, its environment and its internal control as the foundation of risk assessment.",
        typicalQuestionForms: [
          "MCQ: purpose of analytical procedures at the planning stage (required) vs substantive vs final review (required).",
          "TBS: compute ratios/trends, identify anomalies, and state the risk they signal.",
        ],
        mustKnow: [
          "Analytical procedures are REQUIRED in planning (risk assessment) and in the final review; optional as substantive procedures.",
          "Planning analytics develop expectations and flag unusual relationships warranting further work.",
          "Understanding covers industry/regulatory factors, the entity's operations, ownership, accounting policies, objectives/strategies and internal control.",
        ],
        scoringActions: [
          "State the expectation before comparing to actual—an analytic without an expectation earns nothing.",
          "Translate each anomaly into a specific assertion-level risk.",
        ],
      },
      {
        id: "tp4",
        title: "Using the work of specialists, internal audit and group audits",
        priority: "medium",
        examinerFocus:
          "The auditor's responsibility remains SOLE even when using an auditor's specialist, the internal audit function, or component auditors—and the evaluation/direction required in each case.",
        typicalQuestionForms: [
          "MCQ: extent to which internal audit work can be used; group vs component auditor responsibility.",
          "TBS: evaluate whether reliance is appropriate given competence/objectivity.",
        ],
        mustKnow: [
          "Using an auditor's specialist does not reduce the auditor's responsibility for the opinion.",
          "Internal audit work may be used based on the function's competence, objectivity and systematic approach; direct assistance is separately governed and cannot cover high-judgment/high-risk areas.",
          "The group engagement team is responsible for the group opinion and directs/evaluates component-auditor work.",
        ],
        scoringActions: [
          "Assess competence AND objectivity before relying on internal audit.",
          "Confirm the group team retains responsibility for the group opinion.",
        ],
      },
      {
        id: "tp5",
        title: "Audit documentation standards",
        priority: "medium",
        examinerFocus:
          "The 'experienced auditor' standard for documentation sufficiency, the report-release and retention/assembly rules, and what must be documented (who performed/reviewed, when).",
        typicalQuestionForms: [
          "MCQ: documentation completion (assembly) and retention periods; issuer vs nonissuer.",
        ],
        mustKnow: [
          "Documentation must let an experienced auditor with no prior connection understand the work, evidence and conclusions.",
          "Nonissuer: assemble the final file within 60 days of the report release date; retain at least 5 years. Issuer (PCAOB): assemble within 45 days; retain 7 years.",
          "Document who performed and reviewed the work and the dates.",
        ],
        scoringActions: [
          "Match the assembly/retention period to issuer (45 days/7 yrs) vs nonissuer (60 days/5 yrs).",
          "Apply the experienced-auditor test to judge documentation sufficiency.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Planning items are conceptual and rule-heavy—target near-full MCQ marks and don't lose the easy documentation/period facts.",
      timeBudget:
        "~1.25 min per MCQ; on a planning-analytics TBS, budget time to actually compute the ratios rather than eyeballing.",
      answerSequence: [
        "Confirm acceptance preconditions and predecessor communication.",
        "Separate strategy-level from plan-level decisions.",
        "Perform planning analytics: expectation → comparison → flagged risk.",
        "Decide reliance on others and document appropriately.",
      ],
      qualityChecks: [
        "Did the successor obtain client permission before predecessor inquiry?",
        "Did I form an explicit expectation for each analytic?",
        "Did I use issuer vs nonissuer documentation periods correctly?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Acceptance and continuance gatekeeping",
        testPointIds: ["tp1"],
        explanation: [
          "Before accepting or continuing, the auditor confirms the preconditions for an audit: that the financial reporting framework to be applied is acceptable, and that management acknowledges and understands its responsibilities for the financial statements, for internal control relevant to their preparation, and for providing the auditor with access to information and personnel. If management will not accept these responsibilities, the auditor should not accept the engagement.",
          "For new engagements, the successor auditor must attempt to communicate with the predecessor, but only after obtaining the prospective client's permission (because the predecessor is bound by confidentiality). Inquiries cover management integrity, disagreements over accounting or auditing matters, communications about fraud/noncompliance, and the reason for the change. A client's refusal to permit contact—or a predecessor's guarded response—is a significant risk indicator that may warrant declining.",
        ],
        keyRules: [
          "Do not accept if management refuses its responsibilities or the framework is unacceptable.",
          "Successor initiates predecessor contact; client permission is required.",
          "Client refusal to allow predecessor contact is a red flag.",
        ],
        workedProblem: {
          scenario:
            "A prospective nonissuer client asks Firm G to audit its current-year statements. Management declines to let G contact the prior auditor, states it changed auditors because of 'fee disputes and disagreements over revenue timing,' and will sign an engagement letter but wants to exclude any statement about its responsibility for internal control. Walk through G's acceptance analysis.",
          steps: [
            "Precondition check: management must acknowledge responsibility for internal control relevant to F/S preparation. Excluding that acknowledgment fails a precondition.",
            "Predecessor communication: G must attempt contact and needs client permission; refusal blocks a required procedure and signals concealment.",
            "Risk signals: revenue-timing disagreements suggest heightened fraud/misstatement risk in a significant account; combined with the refusal, integrity is in question.",
            "Conclusion synthesis: multiple gatekeeping failures compound—one might be manageable, but together they undermine acceptance.",
          ],
          conclusion:
            "G should not accept the engagement as offered: a precondition (management's acknowledgment of internal-control responsibility) is unmet, and refusal to permit predecessor communication—paired with disagreements over revenue timing—raises integrity and fraud-risk concerns. G could reconsider only if management accepts full responsibilities and permits predecessor contact.",
          markingNotes: [
            "Mark for identifying the unmet precondition.",
            "Mark for requiring client permission for predecessor contact and treating refusal as a red flag.",
            "Mark for linking revenue-timing disagreement to fraud/misstatement risk.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Strategy, plan and the iterative nature of planning",
        testPointIds: ["tp2"],
        explanation: [
          "The overall audit strategy sets the scope (framework, industry, locations), reporting objectives and timing (deadlines, interim vs year-end work), and the direction of the engagement (materiality, high-risk areas, resource deployment and staffing). The audit plan is more detailed: it specifies the nature, timing and extent of risk-assessment procedures and of further audit procedures (tests of controls and substantive procedures) at the assertion level.",
          "Planning is not a discrete front-end phase; it is continuous and iterative because new information (e.g., an anomaly found during fieldwork) feeds back and revises the assessed risks and the planned procedures. The engagement partner and other key members must be involved so that experience and skepticism shape the plan.",
        ],
        keyRules: [
          "Strategy = scope/timing/direction/resources; plan = specific procedures at the assertion level.",
          "Planning is continuous and revised as evidence emerges.",
          "Engagement partner involvement in planning is required.",
        ],
      },
      {
        id: "sn3",
        title: "Analytical procedures across the audit",
        testPointIds: ["tp3"],
        explanation: [
          "Analytical procedures evaluate financial information by studying plausible relationships among financial and nonfinancial data. They are REQUIRED at two points: during risk assessment/planning (to identify unusual relationships and areas of higher risk) and during the final review (to corroborate conclusions and assess whether the statements are consistent with the auditor's understanding). They are OPTIONAL as substantive procedures, where their effectiveness depends on the plausibility and predictability of the relationship, the reliability of the data, and the precision of the expectation.",
          "The disciplined structure is: develop an expectation, define a threshold for investigation, compare the expectation to recorded amounts, and investigate significant differences. A candidate who compares actual to prior year without articulating an expectation is not performing an analytical procedure the examiner will credit.",
        ],
        keyRules: [
          "Required in planning and final review; optional as substantive.",
          "Substantive analytics need a precise, reliable expectation.",
          "Investigate differences exceeding the defined threshold.",
        ],
      },
      {
        id: "sn4",
        title: "Relying on specialists, internal audit and component auditors",
        testPointIds: ["tp4"],
        explanation: [
          "When the auditor uses an auditor's specialist (e.g., a valuation or actuarial expert), the auditor evaluates the specialist's competence, capabilities and objectivity, obtains an understanding of the specialist's field, agrees on the scope, and evaluates the adequacy of the work—yet retains sole responsibility for the opinion. Using the internal audit function's work requires assessing the function's objectivity, competence and disciplined, systematic approach; direct assistance from internal auditors is more constrained and cannot be used for matters involving significant judgment or high assessed risk.",
          "In a group audit, the group engagement team is responsible for the group opinion. It determines component significance, decides the type of work on each component's information, and directs and evaluates the work of component auditors—remaining responsible even when it does not reference the component auditor in the report.",
        ],
        keyRules: [
          "Using a specialist does not reduce auditor responsibility.",
          "Internal audit reliance depends on objectivity, competence and systematic approach.",
          "Group team owns the group opinion and directs component auditors.",
        ],
      },
      {
        id: "sn5",
        title: "Documentation: sufficiency, assembly and retention",
        testPointIds: ["tp5"],
        explanation: [
          "Audit documentation must be sufficient for an experienced auditor with no previous connection to the engagement to understand the nature, timing and extent of procedures, the results and evidence obtained, and the significant conclusions reached. It records who performed the work and the date, and who reviewed it and when.",
          "Completion deadlines differ by regime. For nonissuers, the final audit file is assembled within 60 days after the report release date and retained for at least five years. For issuers under PCAOB rules, the file is assembled within 45 days and retained for seven years. After the assembly (documentation completion) date, existing documentation must not be deleted; additions must be documented with the reason, date and person.",
        ],
        keyRules: [
          "Experienced-auditor sufficiency standard.",
          "Nonissuer: 60-day assembly, 5-year retention.",
          "Issuer: 45-day assembly, 7-year retention.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp3"],
        style: "Task-based simulation (planning analytics)",
        question:
          "In planning the audit of a retailer, prior-year gross margin was 40% on sales of $10,000,000. Current-year sales are $12,000,000 and recorded cost of goods sold is $8,400,000. Perform a planning analytical procedure and identify the risk it signals.",
        answerPlan: [
          "Develop expectation using prior-year margin.",
          "Compute current-year actual margin.",
          "Compare and quantify the difference.",
          "State the assertion-level risk.",
        ],
        modelAnswer:
          "Expectation: applying the prior-year 40% gross margin to current sales of $12,000,000 gives an expected gross profit of $4,800,000 and expected COGS of $7,200,000. Actual COGS is $8,400,000, so the actual gross margin is ($12,000,000 − $8,400,000)/$12,000,000 = 30%, a 10-percentage-point deterioration versus the 40% expectation—about $1,200,000 more COGS than expected. This unexpected margin decline signals risk in the existence/valuation of inventory and the completeness/cutoff of cost of goods sold (e.g., overstated purchases or COGS, understated ending inventory, or unrecorded markdowns). The auditor would raise the assessed risk of material misstatement for inventory and COGS and design substantive procedures (inventory observation, price testing, purchase cutoff) accordingly. Absent a business explanation (price competition, input-cost inflation), this warrants further investigation.",
        markingGuide: [
          "1 mark: explicit expectation built from prior-year margin.",
          "1 mark: correct current-year margin (30%).",
          "1 mark: quantified difference (~$1.2m / 10 points).",
          "1 mark: linking to inventory/COGS assertion-level risk.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1", "tp4"],
        style: "Short constructed response",
        question:
          "A successor auditor plans to rely partly on the client's internal audit function and must communicate with the predecessor. Describe the conditions for each.",
        answerPlan: [
          "Predecessor: client permission + inquiry topics.",
          "Internal audit: objectivity, competence, systematic approach; limits on high-judgment areas.",
        ],
        modelAnswer:
          "To communicate with the predecessor, the successor must first obtain the client's permission (the predecessor is bound by confidentiality); inquiries then address management integrity, any disagreements about accounting or auditing matters, communications regarding fraud or noncompliance, and the reasons for the change. To use the internal audit function's work, the auditor evaluates the function's objectivity (organizational status and policies protecting it from bias), its competence (training and expertise), and whether it applies a systematic, disciplined approach including quality control. Even when reliance is appropriate, the external auditor performs more of the work itself as assessed risk and judgment increase, and cannot delegate matters involving significant judgments or high risk. The external auditor remains solely responsible for the opinion.",
        markingGuide: [
          "1 mark: client permission for predecessor contact.",
          "1 mark: two valid inquiry topics.",
          "1 mark: objectivity + competence + systematic approach for internal audit.",
          "1 mark: retention of sole responsibility / limits in high-judgment areas.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp2", "tp5"],
        style: "MCQ rationale",
        question:
          "Classify each as strategy-level or plan-level, and state the nonissuer documentation assembly and retention periods: (a) deciding to perform interim testing at three of eight locations; (b) selecting specific confirmation procedures for receivables; (c) setting overall materiality.",
        answerPlan: [
          "(a) strategy; (b) plan; (c) strategy input.",
          "Nonissuer: 60 days / 5 years.",
        ],
        modelAnswer:
          "(a) Deciding which locations to test at interim is a scope/timing/resource decision—strategy level. (b) Selecting the specific receivables confirmation procedures is a nature/extent decision at the assertion level—plan level. (c) Setting overall materiality is a direction-setting judgment made as part of the strategy that then drives the plan. For a nonissuer, the final audit documentation file must be assembled within 60 days after the report release date and retained for at least five years (issuers under PCAOB rules: 45 days and seven years).",
        markingGuide: [
          "1 mark each: correct classification of (a), (b), (c).",
          "1 mark: correct nonissuer periods (60 days / 5 years).",
        ],
      },
    ],
  }),
  "cpa-aud-m3": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "COSO framework: five components and seventeen principles",
        priority: "critical",
        examinerFocus:
          "Whether you can place a control or a deficiency within the correct COSO component (control environment, risk assessment, control activities, information & communication, monitoring) and recognize the entity-level 'tone at the top' controls.",
        typicalQuestionForms: [
          "MCQ: map a described control to a COSO component/principle.",
          "TBS: classify controls in a narrative as entity-level vs process-level.",
        ],
        mustKnow: [
          "Five components: Control environment, Risk assessment, Control activities, Information & communication, Monitoring (mnemonic CRIME).",
          "Seventeen principles must be present and functioning, and the components must operate together, for effective internal control.",
          "The control environment (governance, integrity, tone at the top) is the foundation; entity-level controls pervade the system.",
        ],
        scoringActions: [
          "Name the component before evaluating the control's effect.",
          "Separate entity-level from process/transaction-level controls.",
        ],
      },
      {
        id: "tp2",
        title: "IT general controls vs application controls",
        priority: "critical",
        examinerFocus:
          "Distinguishing ITGCs (access, program change, program development, computer operations) that underpin the reliability of automated application controls, and recognizing that weak ITGCs undermine reliance on application controls.",
        typicalQuestionForms: [
          "MCQ: classify a control as ITGC vs application control; identify effect of an ITGC weakness.",
          "TBS: match controls to IT risks in a systems narrative.",
        ],
        mustKnow: [
          "ITGC domains: access to programs and data, program changes, program development, computer operations.",
          "Application controls address the completeness/accuracy/validity of transactions (input edits, validation, reconciliations).",
          "If ITGCs are ineffective, automated application controls and IT-generated reports cannot be relied upon without additional work.",
        ],
        scoringActions: [
          "Trace an application-control conclusion back to the supporting ITGCs.",
          "Flag that a change-management weakness contaminates reliance on automated controls.",
        ],
      },
      {
        id: "tp3",
        title: "Deficiency evaluation: deficiency, significant deficiency, material weakness",
        priority: "critical",
        examinerFocus:
          "Applying the severity framework—likelihood and magnitude of potential misstatement—to classify a control deficiency, and knowing the communication obligations for each.",
        typicalQuestionForms: [
          "MCQ: classify a deficiency by severity; who must be told and how.",
          "TBS: evaluate whether a combination of deficiencies aggregates to a material weakness.",
        ],
        mustKnow: [
          "A deficiency exists when a control does not prevent/detect misstatements timely; severity depends on likelihood and potential magnitude, not whether a misstatement actually occurred.",
          "Material weakness = reasonable possibility of a material misstatement not being prevented/detected timely; significant deficiency = less severe but important enough to merit attention by governance.",
          "Significant deficiencies and material weaknesses must be communicated in writing to management and those charged with governance.",
        ],
        scoringActions: [
          "Judge severity by potential (likelihood × magnitude), not by whether an error was found.",
          "Aggregate related deficiencies before concluding on severity.",
        ],
      },
      {
        id: "tp4",
        title: "Integrated audit and reporting on ICFR (issuers)",
        priority: "high",
        examinerFocus:
          "For issuers, the auditor's separate opinion on internal control over financial reporting under PCAOB AS 2201, the top-down risk-based approach, and how a material weakness forces an adverse ICFR opinion.",
        typicalQuestionForms: [
          "MCQ: effect of an identified material weakness on the ICFR opinion; top-down approach steps.",
        ],
        mustKnow: [
          "Issuer integrated audits (PCAOB AS 2201) produce an opinion on ICFR using a top-down, risk-based approach starting at the entity level and focusing on significant accounts/assertions.",
          "One or more material weaknesses → adverse opinion on ICFR (regardless of whether the F/S opinion is unmodified).",
          "The auditor tests controls as of the balance-sheet date and cannot rely solely on management's assessment.",
        ],
        scoringActions: [
          "Give an adverse ICFR opinion when a material weakness exists at year-end.",
          "Recognize the F/S opinion can be unmodified even when ICFR is adverse.",
        ],
      },
      {
        id: "tp5",
        title: "Understanding controls vs testing operating effectiveness",
        priority: "medium",
        examinerFocus:
          "The difference between obtaining an understanding of controls and evaluating their design/implementation (required in every audit) versus testing operating effectiveness (only when planning to rely or when substantive procedures alone are insufficient).",
        typicalQuestionForms: [
          "MCQ: when tests of controls are required; walkthrough purpose.",
        ],
        mustKnow: [
          "The auditor must understand internal control relevant to the audit and evaluate design and implementation—usually via walkthroughs—regardless of reliance intent.",
          "Tests of operating effectiveness are required only when the auditor plans to rely on controls or when substantive procedures alone cannot provide sufficient evidence.",
          "A walkthrough evaluates design and implementation, not operating effectiveness over a period.",
        ],
        scoringActions: [
          "Separate design/implementation evaluation from operating-effectiveness testing.",
          "Require tests of controls when relying on them or when needed for hard-to-audit assertions.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "COSO/ITGC and deficiency severity are heavily tested—aim to lock these MCQs and handle the controls-classification TBS methodically.",
      timeBudget:
        "~1.25 min per MCQ; on a controls TBS, tag each item to a component/ITGC domain before writing conclusions.",
      answerSequence: [
        "Place the control in a COSO component or ITGC domain.",
        "Judge design/implementation vs operating effectiveness.",
        "Evaluate deficiency severity by likelihood × magnitude.",
        "Determine communication and, for issuers, the ICFR opinion effect.",
      ],
      qualityChecks: [
        "Did I evaluate severity by potential rather than by actual misstatement?",
        "Did I let an ITGC weakness override reliance on automated controls?",
        "Did a material weakness drive an adverse ICFR opinion?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "COSO as a classification grid",
        testPointIds: ["tp1"],
        explanation: [
          "The 2013 COSO Internal Control—Integrated Framework organizes internal control into five components supported by seventeen principles. The control environment sets the tone: integrity and ethical values, board oversight, structure and authority, competence, and accountability. Risk assessment involves specifying objectives and identifying, analyzing and responding to risks, including fraud risk and change. Control activities are the policies and procedures (including technology controls) that mitigate risk. Information and communication ensure relevant, quality information flows internally and externally. Monitoring evaluates whether components are present and functioning through ongoing and separate evaluations.",
          "For effectiveness, all five components and the relevant principles must be present and functioning, and the components must operate together in an integrated manner. Exam items typically hand you a control and ask which component it belongs to, or ask you to distinguish entity-level controls (which pervade the organization, like the control environment and monitoring) from process-level controls tied to specific transaction cycles.",
        ],
        keyRules: [
          "Five components (CRIME); seventeen principles must be present and functioning.",
          "Effectiveness requires components to operate together.",
          "Entity-level controls pervade; process-level controls are cycle-specific.",
        ],
      },
      {
        id: "sn2",
        title: "IT general controls underpin application controls",
        testPointIds: ["tp2"],
        explanation: [
          "Automated application controls (input validation, edit checks, three-way match, automated reconciliations) only produce reliable results if the underlying IT general controls are effective. ITGCs fall into domains: logical access (who can access programs and data), program change management (changes are authorized, tested and approved), program development (new systems are properly developed and implemented), and computer operations (jobs, backups, incident handling). If access or change controls are weak, an automated control could be altered or bypassed without detection—so its consistent operation cannot be assumed.",
          "The practical exam consequence: when ITGCs are deficient, the auditor cannot rely on automated application controls or on system-generated reports/information used as audit evidence without additional procedures to validate their reliability. Candidates must trace a reliance conclusion on an application control back to the supporting ITGCs.",
        ],
        keyRules: [
          "ITGC domains: access, change management, development, operations.",
          "Application controls address transaction completeness/accuracy/validity.",
          "Weak ITGCs undermine reliance on automated controls and system reports.",
        ],
      },
      {
        id: "sn3",
        title: "Severity: likelihood and magnitude",
        testPointIds: ["tp3"],
        explanation: [
          "A control deficiency exists when the design or operation of a control does not allow management or employees, in the normal course, to prevent or detect and correct misstatements on a timely basis. Severity does not depend on whether a misstatement actually occurred; it depends on (1) the likelihood that a misstatement could occur and (2) the magnitude of the potential misstatement. A material weakness is a deficiency, or combination of deficiencies, such that there is a reasonable possibility that a material misstatement will not be prevented or detected on a timely basis. A significant deficiency is less severe than a material weakness but important enough to merit the attention of those charged with governance.",
          "Deficiencies are evaluated individually and in combination—several small deficiencies affecting the same account or assertion can aggregate into a material weakness. Significant deficiencies and material weaknesses must be communicated in writing to management and those charged with governance; the auditor cannot communicate that no significant deficiencies were identified.",
        ],
        keyRules: [
          "Severity = likelihood × potential magnitude, not actual misstatement.",
          "Material weakness = reasonable possibility of an uncorrected material misstatement.",
          "Written communication of significant deficiencies and material weaknesses to governance.",
        ],
        workedProblem: {
          scenario:
            "During the audit of an issuer, you find: (i) the accounts-payable clerk can both create vendors and approve payments (no segregation); (ii) IT lacks a formal change-management process, so program changes go live untested; and (iii) the quarterly bank reconciliation is prepared but never reviewed. No actual misstatement has been detected. Evaluate severity and the ICFR reporting effect.",
          steps: [
            "Deficiency (i): lack of segregation over vendor setup and payment creates a reasonable possibility of fraudulent or erroneous disbursements that could be material—high likelihood and potentially high magnitude.",
            "Deficiency (ii): absent change management, unauthorized/untested changes could corrupt financial data across the system; this ITGC weakness also undermines reliance on automated controls—pervasive potential magnitude.",
            "Deficiency (iii): unreviewed reconciliations reduce the chance of timely detection; on its own perhaps a significant deficiency, but it compounds (i) and (ii).",
            "Aggregate: taken together, these deficiencies create a reasonable possibility that a material misstatement would not be prevented or detected timely → material weakness.",
            "Reporting: for an issuer, a material weakness existing at year-end requires an adverse opinion on ICFR, even if substantive testing supports an unmodified opinion on the financial statements themselves.",
          ],
          conclusion:
            "The combination constitutes a material weakness (reasonable possibility of an undetected material misstatement), driven substantially by the segregation and change-management failures. The auditor issues an adverse opinion on ICFR; the financial-statement opinion can still be unmodified if substantive evidence supports the numbers. All three must be communicated in writing to governance.",
          markingNotes: [
            "Mark for evaluating severity on potential, not actual, misstatement.",
            "Mark for aggregating deficiencies.",
            "Mark for adverse ICFR opinion with a possibly unmodified F/S opinion.",
          ],
        },
      },
      {
        id: "sn4",
        title: "The integrated audit and top-down approach",
        testPointIds: ["tp4"],
        explanation: [
          "For issuers, PCAOB AS 2201 requires an integrated audit producing a separate opinion on internal control over financial reporting as of the balance-sheet date. The auditor uses a top-down, risk-based approach: begin at the financial-statement/entity level (understand entity-level controls and overall risks), identify significant accounts and disclosures and their relevant assertions, understand the likely sources of misstatement, and then select controls to test that address those risks.",
          "The auditor forms an independent view and cannot merely rely on management's assessment. If one or more material weaknesses exist at year-end, the ICFR opinion is adverse. Importantly, an adverse ICFR opinion does not automatically modify the financial-statement opinion—substantive procedures may still support fairly stated numbers—so the two opinions can diverge.",
        ],
        keyRules: [
          "AS 2201 integrated audit: opinion on ICFR as of year-end, top-down risk-based.",
          "Material weakness at year-end → adverse ICFR opinion.",
          "ICFR and F/S opinions can differ.",
        ],
      },
      {
        id: "sn5",
        title: "Understanding vs testing controls; the walkthrough",
        testPointIds: ["tp5"],
        explanation: [
          "In every audit the auditor must obtain an understanding of internal control relevant to the audit and evaluate the design of controls and determine whether they have been implemented—commonly by performing walkthroughs that trace a transaction from initiation through recording. This is not a test of operating effectiveness; it confirms the control exists and is designed to work.",
          "Testing operating effectiveness (whether a control operated consistently over the relevant period) is required only when the auditor intends to rely on controls to reduce substantive testing, or when substantive procedures alone cannot provide sufficient appropriate evidence for a particular assertion (e.g., highly automated, high-volume processing). Confusing 'understanding/walkthrough' with 'testing operating effectiveness' is a classic MCQ trap.",
        ],
        keyRules: [
          "Understanding + design/implementation evaluation: required in every audit.",
          "Operating-effectiveness tests: only when relying or when substantive alone is insufficient.",
          "Walkthroughs assess design/implementation, not period effectiveness.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "TBS (controls classification)",
        question:
          "Classify each and note any reliance implication: (a) the CFO reviews and signs off on the monthly close package; (b) the system rejects invoices without a matching purchase order; (c) only authorized developers can migrate code to production after QA approval; (d) new-hire background checks and a written code of conduct.",
        answerPlan: [
          "(a) monitoring / entity-level control activity.",
          "(b) application control.",
          "(c) ITGC (change management/access).",
          "(d) control environment.",
        ],
        modelAnswer:
          "(a) The CFO's review of the close package is a monitoring/review control operating at a fairly high (entity) level—effective review can detect misstatements across accounts. (b) Rejecting invoices lacking a matching PO is an automated application control addressing the validity/accuracy of payables transactions. (c) Restricting code migration to authorized developers after QA approval is an IT general control spanning access and change management; its effectiveness is a precondition for relying on automated application controls like (b). (d) Background checks and a code of conduct are elements of the control environment (integrity, competence)—entity-level controls that pervade the system. Reliance implication: if (c) is weak, the auditor cannot assume (b) operated consistently and must perform additional procedures.",
        markingGuide: [
          "1 mark each: correct classification of (a)–(d).",
          "1 mark: noting that weak ITGC (c) undermines reliance on application control (b).",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3", "tp4"],
        style: "Short constructed response",
        question:
          "Define material weakness and significant deficiency, and state the reporting effect of a year-end material weakness in an issuer's integrated audit.",
        answerPlan: [
          "Definitions keyed to likelihood/magnitude.",
          "Adverse ICFR opinion; possible unmodified F/S opinion.",
          "Written communication to governance.",
        ],
        modelAnswer:
          "A material weakness is a deficiency, or combination of deficiencies, in internal control such that there is a reasonable possibility that a material misstatement of the financial statements will not be prevented or detected and corrected on a timely basis. A significant deficiency is less severe than a material weakness yet important enough to merit the attention of those charged with governance. In an issuer's integrated audit under PCAOB AS 2201, one or more material weaknesses existing as of the balance-sheet date require an adverse opinion on internal control over financial reporting; the opinion on the financial statements may nonetheless be unmodified if substantive evidence supports the reported amounts. Both material weaknesses and significant deficiencies must be communicated in writing to management and those charged with governance.",
        markingGuide: [
          "1 mark each: correct definition of material weakness and significant deficiency.",
          "1 mark: adverse ICFR opinion for a year-end material weakness.",
          "1 mark: recognizing the F/S opinion can still be unmodified + written communication.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5"],
        style: "MCQ rationale",
        question:
          "An auditor of a nonissuer does not plan to rely on controls and believes substantive procedures alone are sufficient. Must the auditor (a) understand internal control and (b) test operating effectiveness? Explain.",
        answerPlan: [
          "Understanding required regardless.",
          "Operating-effectiveness testing not required here.",
        ],
        modelAnswer:
          "(a) Yes—understanding internal control relevant to the audit and evaluating the design and implementation of relevant controls is required in every audit, typically via walkthroughs, because it informs risk assessment and the design of further procedures. (b) No—testing operating effectiveness is required only when the auditor plans to rely on controls or when substantive procedures alone cannot provide sufficient appropriate evidence. Here the auditor neither plans to rely nor faces an assertion that substantive procedures cannot address, so tests of operating effectiveness are not required, though the understanding still must be obtained.",
        markingGuide: [
          "1 mark: understanding/design-implementation always required.",
          "1 mark: operating-effectiveness testing not required absent reliance or insufficiency.",
          "1 mark: distinguishing walkthrough (design) from operating-effectiveness testing.",
        ],
      },
    ],
  }),
  "cpa-aud-m4": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "The audit risk model (AR = IR × CR × DR)",
        priority: "critical",
        examinerFocus:
          "Manipulating the model: given target audit risk and assessed inherent/control risk, whether you set detection risk INVERSELY and adjust the nature/timing/extent of substantive procedures accordingly.",
        typicalQuestionForms: [
          "MCQ: if RMM (IR × CR) rises, what happens to acceptable detection risk and to substantive testing?",
          "TBS: select procedures responsive to a given assessed risk profile.",
        ],
        mustKnow: [
          "Audit risk = inherent risk × control risk × detection risk; RMM = IR × CR is assessed, DR is controlled by the auditor.",
          "Detection risk varies inversely with RMM: higher assessed RMM → lower acceptable DR → more/earlier/more-effective substantive procedures.",
          "The auditor cannot change IR or CR (they exist in the entity); the auditor manages only DR.",
        ],
        scoringActions: [
          "Move DR opposite to RMM, then translate to nature/timing/extent.",
          "Never claim the auditor 'reduces inherent risk'—the auditor assesses it.",
        ],
      },
      {
        id: "tp2",
        title: "Assertion-level risk and significant risks",
        priority: "critical",
        examinerFocus:
          "Identifying relevant assertions per account and singling out significant risks (those requiring special audit consideration), which mandate substantive procedures specifically responsive to them and preclude relying solely on prior-period control testing.",
        typicalQuestionForms: [
          "MCQ: which assertion is at risk for a given account; what a significant risk requires.",
          "TBS: match risks to assertions and design responses.",
        ],
        mustKnow: [
          "Assertions: existence/occurrence, completeness, rights & obligations, valuation/allocation, cutoff, classification, presentation & disclosure.",
          "Significant risks (often fraud, complex/judgmental estimates, related-party or non-routine transactions) require substantive procedures specifically responsive to them.",
          "For significant risks, if relying on controls, the auditor must test those controls in the current period.",
        ],
        scoringActions: [
          "Pair each identified risk with the specific assertion(s) affected.",
          "Design a targeted substantive response for every significant risk.",
        ],
      },
      {
        id: "tp3",
        title: "Materiality: overall, performance and clearly trivial",
        priority: "critical",
        examinerFocus:
          "Computing performance materiality below overall materiality to allow for aggregation risk, choosing appropriate benchmarks, and applying qualitative factors—the examiner tests judgment, not a single formula.",
        typicalQuestionForms: [
          "MCQ: relationship among overall, performance and clearly trivial thresholds; benchmark selection.",
          "TBS: set materiality from provided financials and justify the benchmark.",
        ],
        mustKnow: [
          "Overall materiality is based on a benchmark (e.g., pre-tax income, revenue, total assets) appropriate to the entity; performance materiality is set below it to reduce the risk that aggregated uncorrected + undetected misstatements exceed overall materiality.",
          "The clearly-trivial threshold is well below performance materiality; misstatements below it need not be accumulated.",
          "Qualitative factors (fraud, covenant effects, changing a loss to a profit, management compensation) can make a quantitatively small misstatement material.",
        ],
        scoringActions: [
          "Set performance materiality strictly below overall materiality.",
          "Apply qualitative factors even when the dollar amount seems immaterial.",
        ],
      },
      {
        id: "tp4",
        title: "Fraud risk: the fraud triangle and required responses",
        priority: "high",
        examinerFocus:
          "Recognizing the fraud triangle (incentive/pressure, opportunity, rationalization), the presumed fraud risks (improper revenue recognition and management override), and the required responses including unpredictable procedures and testing journal entries.",
        typicalQuestionForms: [
          "MCQ: identify the fraud-triangle element; required response to management-override risk.",
          "TBS: evaluate fraud risk factors in a narrative and propose responses.",
        ],
        mustKnow: [
          "Fraud triangle: incentive/pressure, opportunity, rationalization/attitude.",
          "There is a presumption of fraud risk in revenue recognition, and management override of controls is always a significant risk.",
          "Required responses to override risk: test journal entries, review estimates for bias, and evaluate the business rationale of significant unusual transactions.",
        ],
        scoringActions: [
          "Always address management override regardless of other risks.",
          "Include unpredictable procedures and journal-entry testing in fraud responses.",
        ],
      },
      {
        id: "tp5",
        title: "Auditing accounting estimates and related-party transactions",
        priority: "medium",
        examinerFocus:
          "Estimates as high-inherent-risk areas subject to management bias, and heightened scrutiny of related-party relationships and transactions outside the normal course of business.",
        typicalQuestionForms: [
          "MCQ: procedures for auditing an estimate; risks of related-party transactions.",
        ],
        mustKnow: [
          "Estimates involve estimation uncertainty and potential management bias; the auditor may test the process, develop an independent estimate, or review subsequent events.",
          "Related-party transactions may not be at arm's length; the auditor evaluates identification, authorization and disclosure.",
          "Significant unusual/non-routine transactions warrant evaluation of business rationale (possible fraud/override).",
        ],
        scoringActions: [
          "Probe estimates for management bias, not just arithmetic accuracy.",
          "Scrutinize related-party and non-routine transactions for rationale and disclosure.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "The risk model, materiality and fraud responses are foundational and recur across AUD—target strong MCQ accuracy and a structured materiality TBS.",
      timeBudget:
        "~1.25 min per MCQ; on a materiality/risk TBS, show the benchmark and the inverse DR logic explicitly.",
      answerSequence: [
        "Assess RMM (IR × CR) at the assertion level.",
        "Set acceptable detection risk inversely.",
        "Set overall then performance materiality with a justified benchmark.",
        "Design responses, always covering management override.",
      ],
      qualityChecks: [
        "Did DR move opposite to RMM?",
        "Is performance materiality below overall materiality?",
        "Did I address management-override risk and journal-entry testing?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The risk model as a lever",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "Audit risk is the risk of expressing an inappropriate opinion when the statements are materially misstated. It is modeled as the product of inherent risk (susceptibility of an assertion to misstatement before controls), control risk (risk that controls fail to prevent/detect it) and detection risk (risk that the auditor's procedures fail to detect it). The auditor sets a low, acceptable audit risk and assesses the risk of material misstatement (RMM = IR × CR) as it exists in the entity; the auditor cannot lower IR or CR—only assess them.",
          "Detection risk is the lever the auditor controls. Because AR is fixed at the target and RMM is assessed, DR must move inversely to RMM. Higher assessed RMM demands lower detection risk, achieved by changing the nature (more effective procedures, e.g., external confirmation over inquiry), timing (year-end rather than interim) and extent (larger samples) of substantive procedures.",
          "Relevant assertions must be identified per significant account and disclosure, and risks assessed at that assertion level so responses are targeted. A significant risk—one requiring special audit consideration, such as fraud or a complex estimate—demands substantive procedures specifically responsive to it, and current-period testing of any controls the auditor intends to rely on.",
        ],
        keyRules: [
          "AR = IR × CR × DR; RMM = IR × CR is assessed, DR is controlled.",
          "DR varies inversely with RMM; translate to nature/timing/extent.",
          "Significant risks require specifically responsive substantive procedures.",
        ],
        workedProblem: {
          scenario:
            "For the revenue assertion 'occurrence,' the auditor assesses inherent risk as high (aggressive targets, complex bundled contracts) and control risk as high (weak billing controls, no reliance planned). Target audit risk is low. Explain the effect on detection risk and specify a responsive procedure set.",
          steps: [
            "Compute the direction: with IR high and CR high, RMM (IR × CR) is high.",
            "Because AR is held low and RMM is high, acceptable detection risk must be set low.",
            "Low DR requires more effective procedures (nature): confirm terms directly with customers, inspect signed contracts and shipping evidence, and test for side agreements.",
            "Low DR requires timing at/after year-end rather than interim, and greater extent (larger sample, cutoff testing around period-end).",
            "Because improper revenue recognition is a presumed fraud/significant risk, add procedures specifically responsive to it and test related journal entries for override.",
          ],
          conclusion:
            "High RMM forces detection risk low, so the auditor performs more effective, year-end, larger-scale substantive procedures over revenue occurrence—direct confirmation, contract/shipping inspection, cutoff and side-agreement testing—plus journal-entry testing responsive to the presumed fraud risk in revenue.",
          markingNotes: [
            "Mark for concluding RMM high → DR low.",
            "Mark for translating DR into nature, timing and extent.",
            "Mark for treating revenue as a presumed fraud/significant risk with a specific response.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Materiality architecture",
        testPointIds: ["tp3"],
        explanation: [
          "Overall (financial-statement) materiality is the amount above which misstatements could reasonably be expected to influence users' economic decisions. It is derived from an appropriate benchmark—pre-tax income for a stable profitable entity, revenue or total assets for a break-even or asset-heavy entity, or net assets for a not-for-profit—applied with judgment, not a fixed percentage.",
          "Performance materiality is set below overall materiality to reduce the probability that the aggregate of uncorrected and undetected misstatements exceeds overall materiality (aggregation/estimation risk). The clearly-trivial threshold sits well below performance materiality; misstatements below it need not be accumulated. Qualitative factors override arithmetic: a small misstatement that turns a loss into a profit, breaches a debt covenant, affects management compensation, masks a trend, or involves fraud can be material despite a trivial dollar amount.",
        ],
        keyRules: [
          "Overall materiality uses a judgment-based benchmark.",
          "Performance materiality < overall materiality to absorb aggregation risk.",
          "Qualitative factors can make small misstatements material.",
        ],
      },
      {
        id: "sn3",
        title: "Fraud risk assessment and mandatory responses",
        testPointIds: ["tp4"],
        explanation: [
          "The fraud triangle explains why fraud occurs: incentive or pressure (targets, personal financial need), opportunity (weak controls, override ability) and rationalization/attitude. The audit team holds a required brainstorming discussion about fraud susceptibility with an attitude of professional skepticism, presuming neither honesty nor dishonesty.",
          "Two responses are effectively mandatory. First, there is a rebuttable presumption that improper revenue recognition is a fraud risk. Second, management override of controls is always treated as a significant risk regardless of the auditor's control-effectiveness view, so the auditor must (a) test the appropriateness of journal entries and other adjustments, (b) review estimates for bias and reperform a retrospective review, and (c) evaluate the business rationale of significant unusual transactions. Unpredictable procedures are incorporated so management cannot anticipate the audit approach.",
        ],
        keyRules: [
          "Fraud triangle: incentive/pressure, opportunity, rationalization.",
          "Presumed fraud risk in revenue recognition (rebuttable).",
          "Management override is always a significant risk → JE testing, estimate bias review, business-rationale evaluation.",
        ],
      },
      {
        id: "sn4",
        title: "Auditing estimates for bias",
        testPointIds: ["tp5"],
        explanation: [
          "Accounting estimates (allowances, warranty reserves, fair values, impairment) carry estimation uncertainty and are vulnerable to management bias. The auditor may respond by testing how management made the estimate and the data/assumptions used, developing an independent point estimate or range for comparison, or reviewing subsequent events and transactions that provide evidence about the estimate.",
          "The key exam theme is skepticism about bias: the auditor performs a retrospective review of prior estimates to detect a pattern of optimism or conservatism, evaluates whether assumptions are reasonable and internally consistent, and considers whether the estimate falls at a favorable end of a plausible range. Arithmetic accuracy alone is insufficient.",
        ],
        keyRules: [
          "Three approaches: test the process, develop an independent estimate, review subsequent events.",
          "Retrospective review detects management bias.",
          "Evaluate reasonableness of assumptions, not just math.",
        ],
      },
      {
        id: "sn5",
        title: "Related parties and significant unusual transactions",
        testPointIds: ["tp5", "tp2"],
        explanation: [
          "Related-party relationships and transactions may not be conducted at arm's length and can be used to perpetrate or conceal fraud. The auditor obtains an understanding of the entity's related parties and controls over them, remains alert for undisclosed relationships, and evaluates whether identified transactions are properly authorized, accounted for and disclosed.",
          "Significant unusual (non-routine) transactions—especially near period-end or with related parties—warrant evaluation of their business rationale; a lack of apparent business purpose suggests possible fraudulent financial reporting or asset misappropriation and links directly to management-override risk.",
        ],
        keyRules: [
          "Related-party transactions may lack arm's-length pricing; test authorization and disclosure.",
          "Evaluate business rationale of significant unusual transactions.",
          "Absence of business purpose is a fraud indicator.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp3"],
        style: "TBS (risk and materiality)",
        question:
          "An entity has pre-tax income of $4,000,000, revenue of $60,000,000, and total assets of $30,000,000; income is stable and the entity is profitable. The auditor assesses RMM as high for inventory. Explain benchmark/materiality choices and the effect on detection risk and substantive procedures for inventory.",
        answerPlan: [
          "Choose benchmark (pre-tax income for stable profitable entity).",
          "Set overall then performance materiality below it.",
          "High RMM → low DR → more/earlier/larger substantive procedures.",
        ],
        modelAnswer:
          "Because the entity is stable and profitable, pre-tax income is an appropriate benchmark for overall materiality (a common range is a modest percentage of pre-tax income; the exact rate is a judgment). Overall materiality is set from that benchmark, and performance materiality is set below overall materiality to allow for the aggregation of uncorrected and undetected misstatements; a clearly-trivial threshold well below performance materiality is also set. For inventory, the high assessed RMM (IR × CR) requires a low acceptable detection risk. The auditor therefore strengthens the nature (physical observation of counts, price and net-realizable-value testing, cutoff testing), timing (perform or roll forward to year-end rather than relying on interim counts) and extent (larger sample sizes) of substantive procedures. The auditor cannot lower inherent or control risk—only detection risk—so the response is entirely in the substantive procedures.",
        markingGuide: [
          "1 mark: pre-tax income benchmark justified by stability/profitability.",
          "1 mark: performance materiality set below overall.",
          "1 mark: high RMM → low DR.",
          "1 mark: translated to nature/timing/extent for inventory.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp4"],
        style: "Short constructed response",
        question:
          "Management override of controls is always a significant risk. State the three specific responses the auditor must perform and why.",
        answerPlan: [
          "Test journal entries.",
          "Review estimates for bias (retrospective).",
          "Evaluate business rationale of significant unusual transactions.",
        ],
        modelAnswer:
          "Because even effective controls can be overridden by management, the auditor must perform three responses regardless of the assessed control environment. First, test the appropriateness of journal entries recorded in the general ledger and other adjustments, focusing on unusual or late entries, because fictitious or improper entries are a common override mechanism. Second, review accounting estimates for bias, including a retrospective review of prior-period estimates, because management can manipulate judgmental reserves. Third, evaluate the business rationale of significant transactions outside the normal course of business, because transactions lacking apparent purpose may be engineered to misstate results or misappropriate assets. Incorporating an element of unpredictability further reduces the chance that management can circumvent procedures.",
        markingGuide: [
          "1 mark each: the three required responses.",
          "1 mark: linking each response to how override is perpetrated.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp1", "tp2"],
        style: "MCQ rationale",
        question:
          "If the auditor lowers the assessed control risk after successful tests of controls, what happens to acceptable detection risk and the extent of substantive procedures?",
        answerPlan: [
          "Lower CR → lower RMM → higher acceptable DR.",
          "Higher DR → less substantive work.",
        ],
        modelAnswer:
          "Lowering assessed control risk reduces the risk of material misstatement (RMM = IR × CR). With target audit risk unchanged, a lower RMM permits a higher acceptable detection risk. A higher acceptable detection risk means the auditor can reduce the extent of substantive procedures and may rely more on interim testing and less effective (but still appropriate) procedures. This is precisely why auditors test controls: successful tests support a lower control-risk assessment and a more efficient substantive plan. The relationship between RMM and detection risk is inverse.",
        markingGuide: [
          "1 mark: lower CR → lower RMM → higher acceptable DR.",
          "1 mark: higher DR → reduced substantive extent.",
          "1 mark: stating the inverse RMM–DR relationship.",
        ],
      },
    ],
  }),
  "cpa-aud-m5": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Sufficiency and appropriateness of audit evidence",
        priority: "critical",
        examinerFocus:
          "Distinguishing sufficiency (quantity) from appropriateness (quality = relevance + reliability) and applying the reliability hierarchy to rank evidence sources.",
        typicalQuestionForms: [
          "MCQ: rank evidence by reliability; identify which assertion a procedure addresses.",
          "TBS: match procedures to assertions and judge whether evidence is sufficient.",
        ],
        mustKnow: [
          "Sufficiency = quantity (affected by risk and quality); appropriateness = quality = relevance (to the assertion) + reliability (source).",
          "Reliability hierarchy: auditor-obtained/direct evidence > external independent > internal with effective controls > internal; original documents > copies; written > oral.",
          "More/higher-quality evidence is needed as assessed RMM rises.",
        ],
        scoringActions: [
          "Split sufficiency from appropriateness in every evaluation.",
          "Match each procedure to the specific assertion it supports.",
        ],
      },
      {
        id: "tp2",
        title: "Types of audit procedures and assertion linkage",
        priority: "high",
        examinerFocus:
          "Selecting the right procedure (inspection, observation, confirmation, recalculation, reperformance, analytical, inquiry) for a given assertion, and knowing inquiry alone is never sufficient.",
        typicalQuestionForms: [
          "MCQ: best procedure for an assertion (e.g., confirmation for existence of receivables).",
          "TBS: build a procedure set for an account cycle.",
        ],
        mustKnow: [
          "Confirmation is strong for existence/rights (receivables, bank, debt); observation for physical existence (inventory count); recalculation for accuracy.",
          "Completeness is often tested by tracing from source documents to the records; existence by vouching from records to support.",
          "Inquiry corroborated by other evidence—inquiry alone is insufficient.",
        ],
        scoringActions: [
          "Pick the procedure whose direction matches the assertion (trace vs vouch).",
          "Never rely on inquiry as the sole evidence.",
        ],
      },
      {
        id: "tp3",
        title: "Attribute sampling for tests of controls",
        priority: "critical",
        examinerFocus:
          "Computing/interpreting the sample deviation rate, the upper deviation rate, and the allowance for sampling risk versus the tolerable rate to reach the reliance decision.",
        typicalQuestionForms: [
          "MCQ: effect of changing tolerable/expected deviation rate or confidence on sample size; reliance conclusion.",
          "TBS: evaluate control-test results and conclude on reliance.",
        ],
        mustKnow: [
          "Sample size increases as the tolerable deviation rate decreases, the expected deviation rate increases, or the desired confidence increases.",
          "Upper deviation rate = sample deviation rate + allowance for sampling risk; rely only if UDR ≤ tolerable deviation rate.",
          "Attribute sampling addresses controls (yes/no), not dollar amounts.",
        ],
        scoringActions: [
          "Compare the UPPER deviation rate (not the sample rate) to the tolerable rate.",
          "Adjust sample size correctly for changes in tolerable/expected rates.",
        ],
      },
      {
        id: "tp4",
        title: "Variables/MUS sampling for substantive tests",
        priority: "high",
        examinerFocus:
          "Projecting misstatement to the population and comparing total projected misstatement plus allowance to tolerable misstatement; understanding monetary-unit sampling's bias toward larger items.",
        typicalQuestionForms: [
          "MCQ: project misstatement; MUS characteristics; effect on sample size.",
          "TBS: evaluate substantive sample results and conclude.",
        ],
        mustKnow: [
          "Projected misstatement is extrapolated to the population; compare (projected + allowance for sampling risk) to tolerable misstatement.",
          "Monetary-unit sampling (PPS) selects items in proportion to dollar size, emphasizing larger balances; efficient when few misstatements expected and no zero/negative balances dominate.",
          "If projected misstatement approaches tolerable misstatement, the account may be materially misstated—extend procedures or propose adjustment.",
        ],
        scoringActions: [
          "Project the sample misstatement to the whole population before concluding.",
          "Compare projected + allowance to tolerable misstatement, not the raw sample error.",
        ],
      },
      {
        id: "tp5",
        title: "Sampling risk vs nonsampling risk",
        priority: "medium",
        examinerFocus:
          "Distinguishing sampling risk (the sample is not representative) from nonsampling risk (auditor error), and the two directions of sampling risk for controls and for substantive tests.",
        typicalQuestionForms: [
          "MCQ: identify risk of incorrect acceptance vs rejection / assessing control risk too low vs too high, and their effects.",
        ],
        mustKnow: [
          "Sampling risk: for controls, assessing control risk too low (efficiency vs effectiveness) vs too high; for substantives, incorrect acceptance (effectiveness) vs incorrect rejection (efficiency).",
          "Risk of assessing control risk too low and risk of incorrect acceptance are the dangerous (effectiveness) errors.",
          "Nonsampling risk comes from human error—wrong procedure, misinterpretation—reduced by planning, supervision and review.",
        ],
        scoringActions: [
          "Identify which sampling-risk direction threatens effectiveness (audit quality).",
          "Attribute human/judgment errors to nonsampling risk.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Sampling is formula-and-logic heavy; done carefully these are reliable points. Target strong accuracy on deviation-rate and projected-misstatement TBSs.",
      timeBudget:
        "~1.25 min per MCQ; a sampling TBS deserves scratch work—write the UDR/projection comparison explicitly.",
      answerSequence: [
        "Confirm the objective: controls (attribute) or amounts (variables/MUS).",
        "Compute the sample result (deviation rate or misstatement).",
        "Add the allowance for sampling risk to get the upper limit.",
        "Compare to tolerable rate/misstatement and conclude.",
      ],
      qualityChecks: [
        "Did I compare the UPPER limit (not the sample result) to tolerable?",
        "Did I project substantive misstatement to the population?",
        "Did I match the sample-size drivers to the right direction?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Sufficiency, appropriateness and the reliability hierarchy",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "Audit evidence must be sufficient (enough quantity) and appropriate (right quality). Appropriateness has two dimensions: relevance (does the evidence bear on the specific assertion?) and reliability (how trustworthy is the source?). Quantity and quality interact—higher assessed risk demands more evidence, and lower-quality evidence must be compensated for by obtaining more of it.",
          "Reliability follows a general hierarchy: evidence obtained directly by the auditor (e.g., reperformance, physical inspection) is more reliable than evidence from others; external evidence from independent sources is more reliable than internal; internal evidence is more reliable when related controls are effective; original documents beat photocopies; and written evidence beats oral. Relevance also depends on direction: to test completeness, trace from source documents into the records; to test existence/occurrence, vouch from the records back to supporting documents.",
        ],
        keyRules: [
          "Sufficiency = quantity; appropriateness = relevance + reliability.",
          "Reliability hierarchy: auditor-direct > external > internal-with-controls > internal; original > copy; written > oral.",
          "Trace for completeness; vouch for existence.",
        ],
      },
      {
        id: "sn2",
        title: "Attribute sampling and the reliance decision",
        testPointIds: ["tp3", "tp5"],
        explanation: [
          "Attribute sampling tests a control's operating effectiveness by estimating the rate at which the control fails (a deviation). Sample size grows when the tolerable deviation rate falls, when the expected population deviation rate rises, or when the desired confidence level increases; population size has little effect on sample size for large populations.",
          "After testing, the auditor computes the sample deviation rate and adds an allowance for sampling risk to obtain the upper deviation rate (UDR). The reliance rule compares the UDR to the tolerable deviation rate: if UDR ≤ tolerable rate, the control can be relied upon at the planned level; if UDR > tolerable rate, the auditor cannot rely as planned and must lower control-risk reliance, increasing substantive testing. The dangerous sampling error here is assessing control risk too low (concluding a control works when it does not), which impairs effectiveness.",
        ],
        keyRules: [
          "Sample size ↑ as tolerable rate ↓, expected rate ↑, or confidence ↑.",
          "Rely only if upper deviation rate ≤ tolerable deviation rate.",
          "Assessing control risk too low is the effectiveness-threatening error.",
        ],
        workedProblem: {
          scenario:
            "The auditor tests a purchase-approval control with a sample of 60 items, tolerable deviation rate 7%, expected deviation rate 2%, at 95% confidence. Two deviations are found, and the sampling tables give an allowance for sampling risk such that the upper deviation rate is 8.2%. State the sample deviation rate, evaluate reliance, and explain the consequence.",
          steps: [
            "Sample deviation rate = deviations / sample size = 2 / 60 = 3.33%.",
            "Upper deviation rate (given) = 8.2%, which already includes the allowance for sampling risk.",
            "Reliance rule: compare UDR (8.2%) to tolerable deviation rate (7%).",
            "8.2% > 7%, so the true deviation rate could exceed the tolerable rate at the desired confidence.",
            "Consequence: the auditor cannot rely on the control at the planned level and must reduce reliance (raise assessed control risk), which lowers acceptable detection risk and increases substantive testing.",
          ],
          conclusion:
            "Although the sample deviation rate (3.33%) is below the 7% tolerable rate, the upper deviation rate (8.2%) exceeds it, so reliance is not supported. The auditor increases the assessed control risk and expands substantive procedures accordingly. Comparing the raw 3.33% to 7% and wrongly concluding reliance would be the classic error.",
          markingNotes: [
            "Mark for correct sample deviation rate (3.33%).",
            "Mark for comparing the UDR (not the sample rate) to the tolerable rate.",
            "Mark for the correct no-reliance conclusion and its substantive-testing consequence.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Variables and monetary-unit sampling",
        testPointIds: ["tp4"],
        explanation: [
          "Substantive sampling estimates the dollar misstatement in an account. Classical variables sampling (mean-per-unit, ratio, difference) estimates a population amount or misstatement using averages or ratios and works well when misstatements are expected and balances are relatively homogeneous. Monetary-unit sampling (probability-proportional-to-size) treats each dollar as a sampling unit, so larger balances are more likely to be selected; it is efficient when few misstatements are expected and automatically emphasizes larger, higher-risk items, but it handles zero/negative balances and understatements poorly.",
          "Evaluation projects the misstatement found in the sample to the whole population. The auditor compares the total projected misstatement plus an allowance for sampling risk to tolerable misstatement. If that upper limit is below tolerable misstatement, the account is accepted; if it approaches or exceeds tolerable misstatement, the auditor extends procedures or proposes an adjustment. The effectiveness-threatening error is incorrect acceptance (accepting a materially misstated balance).",
        ],
        keyRules: [
          "Project sample misstatement to the population before concluding.",
          "MUS selects proportional to dollar size; weak for understatement/zero balances.",
          "Incorrect acceptance is the effectiveness-threatening substantive error.",
        ],
      },
      {
        id: "sn4",
        title: "Procedures matched to assertions",
        testPointIds: ["tp2", "tp1"],
        explanation: [
          "Seven procedure types recur: inspection of records/documents, inspection of tangible assets, observation, external confirmation, recalculation, reperformance, and analytical procedures—plus inquiry, which supports but never stands alone. The examiner rewards matching the procedure to the assertion: confirmations from banks and customers address existence and rights; observation of an inventory count addresses existence/condition; recalculation addresses valuation/accuracy; reperformance tests control operation; tracing tests completeness while vouching tests existence.",
          "Confirmations deserve special attention: positive confirmations request a response whether or not the balance agrees (used when risk is higher), while negative confirmations request a response only if the recipient disagrees (used only when risk is low, controls are effective, many small homogeneous balances exist, and a low exception rate is expected). Non-responses to positive confirmations require alternative procedures (subsequent cash receipts, shipping documents).",
        ],
        keyRules: [
          "Inquiry alone is never sufficient.",
          "Positive confirmations for higher risk; negatives only in low-risk, homogeneous populations.",
          "Perform alternative procedures for positive-confirmation non-responses.",
        ],
      },
      {
        id: "sn5",
        title: "Sampling risk vs nonsampling risk",
        testPointIds: ["tp5"],
        explanation: [
          "Sampling risk is the risk that the sample is not representative of the population, so a conclusion drawn from the sample differs from the conclusion that testing the whole population would give. For tests of controls it splits into the risk of assessing control risk too low (an effectiveness problem—wrongly relying) and too high (an efficiency problem—doing unnecessary substantive work). For substantive tests it splits into the risk of incorrect acceptance (effectiveness—accepting a misstated balance) and incorrect rejection (efficiency).",
          "Nonsampling risk arises from factors unrelated to sample representativeness: using an inappropriate procedure, misinterpreting evidence, or failing to recognize a deviation. It is controlled through adequate planning, proper procedure selection, supervision and engagement quality review. The exam frequently asks candidates to categorize an error and to identify which sampling-risk direction jeopardizes audit effectiveness.",
        ],
        keyRules: [
          "Sampling risk directions: control risk too low/high; incorrect acceptance/rejection.",
          "Effectiveness-threatening: control risk too low; incorrect acceptance.",
          "Nonsampling risk = human/judgment error, mitigated by supervision and review.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp3"],
        style: "TBS (attribute sampling)",
        question:
          "An auditor tests a control with tolerable deviation rate 5%. From a sample of 50, one deviation is found; the tables yield an upper deviation rate of 6.4%. Compute the sample deviation rate and state the reliance conclusion.",
        answerPlan: [
          "Sample deviation rate = 1/50.",
          "Compare UDR to tolerable rate.",
          "Conclude on reliance.",
        ],
        modelAnswer:
          "The sample deviation rate is 1/50 = 2%. However, the reliance decision uses the upper deviation rate, which incorporates the allowance for sampling risk: here 6.4%. Because the upper deviation rate of 6.4% exceeds the tolerable deviation rate of 5%, the auditor cannot conclude, at the desired confidence, that the true deviation rate is within tolerance. Reliance on the control is not supported; the auditor should increase the assessed control risk and expand substantive procedures. Concluding reliance by comparing the 2% sample rate to the 5% tolerable rate would ignore sampling risk and is incorrect.",
        markingGuide: [
          "1 mark: sample deviation rate 2%.",
          "1 mark: using the upper deviation rate for the decision.",
          "1 mark: no-reliance conclusion because 6.4% > 5%.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp4"],
        style: "TBS (substantive projection)",
        question:
          "In a MUS sample of an accounts-receivable population of $2,000,000, the auditor sampled 100 monetary units and found net overstatement misstatements that project to $45,000. The allowance for sampling risk is $20,000 and tolerable misstatement is $80,000. Should the balance be accepted?",
        answerPlan: [
          "Add projected misstatement + allowance.",
          "Compare to tolerable misstatement.",
          "Conclude.",
        ],
        modelAnswer:
          "The evaluation compares the upper misstatement limit—projected misstatement plus the allowance for sampling risk—to tolerable misstatement. Here that is $45,000 + $20,000 = $65,000. Because $65,000 is below the $80,000 tolerable misstatement, the auditor has sufficient evidence to accept that the receivables balance is not materially misstated, at the planned level of assurance. Had the upper limit approached or exceeded $80,000, the auditor would extend procedures, propose an adjustment, or reconsider the sampling approach. Comparing only the $45,000 projection to tolerable without adding the allowance would understate sampling risk.",
        markingGuide: [
          "1 mark: upper limit = projected + allowance = $65,000.",
          "1 mark: compare to tolerable ($80,000).",
          "1 mark: accept conclusion with the correct reasoning.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp1", "tp2"],
        style: "Short constructed response",
        question:
          "Rank the reliability of: (a) a bank confirmation received directly by the auditor; (b) a photocopy of a vendor invoice from the client; (c) management's oral representation; and state which assertion a receivables confirmation best supports.",
        answerPlan: [
          "Rank by hierarchy.",
          "Confirmation → existence/rights.",
        ],
        modelAnswer:
          "Ranking from most to least reliable: (a) the bank confirmation is the strongest because it is external evidence obtained directly by the auditor from an independent source in written form; (b) a photocopy of a vendor invoice is internal, a copy rather than an original, and only as reliable as the client's controls; (c) management's oral representation is the weakest because it is internal, oral and self-interested, and inquiry alone is never sufficient. A confirmation of accounts receivable best supports the existence assertion (and, to a degree, rights)—it provides evidence the recorded receivable actually exists as of the date. It is weaker for valuation, since a customer may confirm a balance it does not intend or is unable to pay.",
        markingGuide: [
          "1 mark: correct ranking a > b > c.",
          "1 mark: reasons tied to the reliability hierarchy.",
          "1 mark: confirmation supports existence (not valuation).",
        ],
      },
    ],
  }),
  // __END__
};
