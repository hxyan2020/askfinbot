import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA Discipline depth content for exactly one module, keyed by moduleId to
 * merge onto CPA_COURSEWARE.
 *
 * Discipline scope (CPA Evolution: BAR / ISC / TCP are three separate
 * four-hour AICPA Blueprint Discipline exams; a candidate sits only one):
 *  - cpa-discipline-m4 → ISC (Information Systems and Controls): IT governance,
 *    information security, the SOC reporting suite, and trust-services criteria.
 *    This is ISC Area II (Information Security and Confidentiality/Privacy) and
 *    Area III (Considerations for System and Organization Controls — SOC —
 *    Engagements) territory. Fact patterns ask you to align IT to the business
 *    and place accountability (governance vs management), classify a security
 *    control and map an incident to the CIA triad, pick and reason about
 *    authentication and cryptographic mechanisms, select the correct SOC report
 *    for a stated user need, and read a SOC report (Type 1 vs Type 2,
 *    complementary user-entity controls, subservice organizations). ISC leans on
 *    Application/Analysis skill levels — classify, decide, recommend — not mere
 *    definition.
 *
 * Calibration notes:
 *  - Keep the framework authorities distinct: COBIT (IT governance and
 *    management), COSO Internal Control–Integrated Framework (entity internal
 *    control), NIST (cybersecurity/security controls), and the AICPA
 *    trust-services / SOC literature (assurance reporting). The exam punishes
 *    cross-applying one framework's vocabulary to another's question.
 *  - The SOC suite is the highest-yield ISC content and the most confused:
 *    SOC 1 is about a service organization's controls relevant to user
 *    entities' internal control over financial reporting (ICFR); SOC 2/SOC 3
 *    are about trust-services criteria. SOC 1 and SOC 2 are restricted-use;
 *    SOC 3 is general-use.
 *  - m4 (governance/security/SOC) is distinct from m5 (business-process and
 *    data controls) and m6 (information-system audits). Where a concept
 *    (change management, ITGCs) recurs, this file treats it from the
 *    security/governance angle: authorization, accountability, and reliance.
 */
export const CPA_DISCIPLINE_M4_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // cpa-discipline-m4 — ISC: IT governance, SOC reports & security
  // ===================================================================
  "cpa-discipline-m4": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "IT governance vs management and the COBIT framework",
        priority: "high",
        examinerFocus:
          "Whether you can separate IT governance (the board/those-charged-with-governance responsibility to evaluate, direct, and monitor IT so it serves enterprise objectives) from IT management (the executive responsibility to plan, build, run, and monitor IT day to day), place accountability correctly, and identify COBIT as the governance-and-management framework for information and technology. The recurring trap is treating IT governance as a task delegated entirely to the IT department, or cross-applying COSO (entity internal control), ITIL (service management), or NIST (security) where COBIT is the right authority.",
        typicalQuestionForms: [
          "MCQ: given a described responsibility (e.g., the board sets IT risk appetite vs the CIO executes the IT plan), classify it as governance or management.",
          "MCQ: identify which framework applies to a stated objective (IT governance = COBIT; entity internal control = COSO; cybersecurity = NIST; IT service delivery = ITIL).",
          "TBS: evaluate an IT organization chart or charter and identify where accountability for IT risk is missing or misplaced.",
        ],
        mustKnow: [
          "IT governance is a board/those-charged-with-governance responsibility to align IT with enterprise strategy, deliver value, manage IT risk, and hold management accountable; it is NOT the same as executing IT operations.",
          "COBIT is the framework for the governance and management of enterprise information and technology: its governance objectives follow an Evaluate-Direct-Monitor (EDM) pattern owned by the board, and its management objectives sit in four domains — Align/Plan/Organize (APO), Build/Acquire/Implement (BAI), Deliver/Service/Support (DSS), and Monitor/Evaluate/Assess (MEA).",
          "Keep framework authorities separate: COBIT (IT governance/management), COSO (entity-level internal control), NIST (cybersecurity), ITIL (IT service management). Using COSO's five components to answer a COBIT governance question loses marks.",
          "Governance assigns clear roles (a RACI-style responsibility model): the board directs and monitors; management is responsible and accountable for execution; risk appetite and IT strategy flow from governance down to management.",
        ],
        scoringActions: [
          "Label each described responsibility governance (evaluate/direct/monitor, board-level) or management (plan/build/run, executive-level) before recommending a fix.",
          "Name the correct framework for the stated objective rather than defaulting to whichever framework you know best.",
          "When accountability is missing, assign it to the correct level (board for oversight and risk appetite; management for execution) rather than saying 'improve governance'.",
        ],
      },
      {
        id: "tp2",
        title: "The CIA triad, defense-in-depth, and the security control taxonomy",
        priority: "critical",
        examinerFocus:
          "Whether you can map a security incident or requirement to the correct element of the CIA triad (confidentiality, integrity, availability), classify a control by function (preventive, detective, corrective) and by nature (administrative/managerial, technical/logical, physical), and recognize defense-in-depth as layered, overlapping controls so no single failure is catastrophic. The trap is a single control being asked to do two jobs, or a candidate naming a detective control when the fact pattern needs a preventive one.",
        typicalQuestionForms: [
          "MCQ: an incident is described (ransomware encrypting files, a leaked customer list, a tampered price file) — identify which CIA element is primarily threatened.",
          "MCQ: classify a control (a firewall, a log review, a backup restore, security-awareness training, a mantrap) by function and by nature.",
          "TBS: recommend layered controls (defense-in-depth) for a stated risk and justify each layer against the CIA element it protects.",
        ],
        mustKnow: [
          "CIA triad: Confidentiality (only authorized parties can read the data), Integrity (data/processing is accurate, complete, and not improperly altered), Availability (systems and data are usable when needed). Map every incident to the element(s) it attacks: a breach → confidentiality; unauthorized data change → integrity; ransomware/DoS → availability (and often integrity).",
          "Control function: preventive controls stop an event before it happens (access controls, encryption, edit checks), detective controls find it after (logging, monitoring, reconciliations, IDS), corrective controls restore after (backups/restore, incident response, patching).",
          "Control nature: administrative/managerial (policies, training, background checks, segregation of duties), technical/logical (firewalls, encryption, authentication, IDS/IPS), and physical (locks, guards, mantraps, environmental controls).",
          "Defense-in-depth layers multiple, overlapping controls of different types so a single control failure does not compromise the asset; no one control is expected to be perfect (a firewall AND MFA AND monitoring AND backups).",
        ],
        scoringActions: [
          "State the CIA element(s) at stake first, then choose controls that address that element specifically.",
          "Classify each control on both axes (function and nature) so you can show a balanced, layered set rather than three controls of the same type.",
          "When the risk needs prevention, lead with preventive controls and add detective/corrective as backstops — do not offer only monitoring for a preventable risk.",
        ],
      },
      {
        id: "tp3",
        title: "Identity and access management, authentication, and cryptography",
        priority: "critical",
        examinerFocus:
          "Whether you distinguish authentication (proving who you are) from authorization (what you may do), apply least privilege and segregation of duties to access, know the three authentication factors and why multi-factor authentication matters, and — the highest-yield ISC discriminator — match a cryptographic mechanism to the security objective it achieves. Candidates routinely confuse hashing with encryption, and confuse a digital signature (integrity/authentication/non-repudiation) with encryption for confidentiality.",
        typicalQuestionForms: [
          "MCQ: classify a login step as authentication or authorization; identify the authentication factor category of a described credential.",
          "MCQ: 'To achieve confidentiality when sending a message, whose key does the sender use?' or 'Which mechanism provides non-repudiation?'",
          "TBS: recommend access and cryptographic controls for a scenario (remote access to sensitive data, protecting data at rest and in transit) and justify each against its objective.",
        ],
        mustKnow: [
          "Authentication verifies identity; authorization grants permissions AFTER authentication; accountability (logging/audit trails) ties actions to an identity. The three authentication factors are knowledge (something you know — password/PIN), possession (something you have — token/phone), and inherence (something you are — biometric); multi-factor authentication combines two or more DIFFERENT categories.",
          "Access is governed by least privilege (only the access needed for the role), need-to-know, segregation of incompatible duties, and tight control of privileged/administrator accounts; access should follow a provision → review/recertify → deprovision lifecycle (revoke promptly on termination/transfer).",
          "Symmetric encryption uses one shared secret key (fast; e.g., AES) — the key-distribution problem is its weakness; asymmetric encryption uses a public/private key pair (e.g., RSA). For CONFIDENTIALITY, the sender encrypts with the RECIPIENT'S public key (only the recipient's private key can decrypt).",
          "A digital signature is created by encrypting a message hash with the SENDER'S private key; it provides integrity, authentication, and non-repudiation (not confidentiality). Hashing (e.g., SHA-256) is one-way and provides integrity only. A public-key infrastructure (PKI) with a certificate authority binds public keys to identities via digital certificates.",
        ],
        scoringActions: [
          "Separate authentication from authorization in your answer, and confirm MFA combines factors from different categories (two passwords is not MFA).",
          "For each cryptographic requirement, name the objective (confidentiality vs integrity vs non-repudiation) and the exact key/mechanism used to achieve it.",
          "Apply least privilege and prompt deprovisioning to access findings, and single out privileged-account controls as the highest-risk area.",
        ],
      },
      {
        id: "tp4",
        title: "Selecting the correct SOC engagement (SOC 1, SOC 2, SOC 3, and entity-wide SOC)",
        priority: "critical",
        examinerFocus:
          "Whether you can pick the right report for a stated user need: SOC 1 for a service organization's controls relevant to user entities' internal control over financial reporting (ICFR); SOC 2 for trust-services criteria with a detailed, restricted-use report; SOC 3 for a general-use, marketing-friendly trust-services report; and the entity-wide reports (SOC for Cybersecurity, SOC for Supply Chain) for their specific purposes. The classic trap is offering SOC 2 to a user auditor who needs assurance over controls affecting the user's financial statements (that is SOC 1), or handing a restricted-use SOC 2 to the general public (that needs SOC 3).",
        typicalQuestionForms: [
          "MCQ: a stated need is given (a user auditor relying on a payroll processor's controls over financial reporting; a prospective customer evaluating a cloud host's security; a public webpage seal) — select SOC 1, SOC 2, or SOC 3.",
          "MCQ: identify the professional standard and use restriction (SOC 1 and SOC 2 are restricted-use attestation reports under the SSAEs; SOC 3 is general-use).",
          "TBS: recommend the report type(s) a service organization should obtain given multiple stakeholder needs and justify each.",
        ],
        mustKnow: [
          "SOC 1 reports on a service organization's controls relevant to USER ENTITIES' internal control over financial reporting (ICFR); it is performed under the attestation standards (SSAE 18 / AT-C 320) and is RESTRICTED to management of the service organization, user entities, and their auditors.",
          "SOC 2 reports on controls relevant to the TRUST SERVICES CRITERIA (security, availability, processing integrity, confidentiality, and/or privacy); it is a detailed, RESTRICTED-use report for management and knowledgeable parties (customers, regulators) who understand the system.",
          "SOC 3 covers the SAME trust-services subject matter as SOC 2 but is a short, GENERAL-USE report (no detailed description of the auditor's tests and results) suitable for marketing and public distribution.",
          "Entity-wide reports differ in subject and audience: SOC for Cybersecurity reports on an entity's enterprise-wide cybersecurity risk-management program for a broad audience; SOC for Supply Chain addresses controls over production/manufacturing/distribution systems. Choose by (a) is the concern financial-reporting controls or trust-services criteria, and (b) who will use the report.",
        ],
        scoringActions: [
          "Anchor the choice on TWO questions: is the concern the user's ICFR (→ SOC 1) or trust-services criteria (→ SOC 2/SOC 3), and who is the audience (restricted knowledgeable users → SOC 1/SOC 2; general public → SOC 3)?",
          "State the use restriction explicitly and never route a restricted-use report (SOC 1/SOC 2) to the general public.",
          "When several stakeholders exist, recommend more than one report if warranted (e.g., SOC 1 for user auditors AND SOC 3 for prospects) rather than forcing a single answer.",
        ],
      },
      {
        id: "tp5",
        title: "Reading a SOC report: Type 1 vs Type 2, CUECs, and subservice organizations",
        priority: "high",
        examinerFocus:
          "Whether you can distinguish a Type 1 report (fairness of the description and suitability of DESIGN as of a point in time) from a Type 2 report (design AND OPERATING EFFECTIVENESS over a period, including the auditor's tests and results), identify the report's key sections, apply complementary user entity controls (CUECs) at the user entity, and handle subservice organizations under the carve-out vs inclusive method. The trap is relying on a Type 1 for operating effectiveness, ignoring CUECs the user must itself implement, or missing a carved-out subservice organization whose controls are excluded from the opinion.",
        typicalQuestionForms: [
          "MCQ: distinguish what a Type 1 vs a Type 2 report provides, and which is needed for reliance on operating effectiveness.",
          "MCQ/TBS: given a period gap between the SOC report period and the user's fiscal year, or a modified (qualified) opinion, state the user auditor's response.",
          "TBS: identify the complementary user entity controls a user must implement, and determine how a carve-out subservice organization affects reliance.",
        ],
        mustKnow: [
          "Type 1: the service auditor opines on whether the description is fairly presented and controls are suitably DESIGNED as of a specified DATE — it gives NO evidence of operating effectiveness. Type 2: the auditor also opines on OPERATING EFFECTIVENESS THROUGHOUT a specified PERIOD and includes the description of the auditor's tests of controls and results (the detailed test matrix).",
          "A SOC report contains the service auditor's opinion, management's assertion, the description of the system, and (Type 2 only) the description of tests of controls and results; a modified/qualified opinion or an inadequate description limits reliance.",
          "Complementary user entity controls (CUECs) are controls the service organization ASSUMES the USER ENTITY will implement for the overall control objectives/criteria to be met; the user (and its auditor) must confirm these are actually in place at the user entity — they are not covered by the service auditor's opinion.",
          "Subservice organizations can be presented by the CARVE-OUT method (their controls are excluded from management's description and the auditor's opinion — the user must obtain separate assurance) or the INCLUSIVE method (their controls are described and tested within the report). A user auditor must also address period coverage: a gap between the SOC report period and the user's fiscal year needs a bridge/gap letter or additional procedures.",
        ],
        scoringActions: [
          "Confirm you need a Type 2 (not Type 1) whenever reliance on OPERATING EFFECTIVENESS over the period is required.",
          "Extract and test the CUECs at the user entity — never assume the SOC report alone covers the user's own responsibilities.",
          "Check the method for subservice organizations (carve-out vs inclusive) and the report period vs the user's fiscal year, and obtain additional assurance/gap procedures where coverage is missing.",
        ],
      },
      {
        id: "tp6",
        title: "The five trust services categories and the common (security) criteria",
        priority: "high",
        examinerFocus:
          "Whether you can name the five trust services categories, recognize that SECURITY (the common criteria) is always included in a SOC 2/SOC 3 while the other four are optional and selected to fit the engagement, and correctly distinguish confidentiality from privacy. The exam tests category selection for a stated concern (uptime → availability; complete/accurate processing → processing integrity; protection of personal information → privacy) and the confidentiality-vs-privacy line.",
        typicalQuestionForms: [
          "MCQ: given a user concern, select the applicable trust services category.",
          "MCQ: identify which category is always included (security / the common criteria) and which are optional.",
          "MCQ/TBS: distinguish confidentiality (any sensitive information) from privacy (personal information collected, used, retained, disclosed, and disposed of per the entity's privacy notice and criteria).",
        ],
        mustKnow: [
          "The five trust services categories are Security, Availability, Processing Integrity, Confidentiality, and Privacy. Security — the COMMON CRITERIA — is the baseline and is ALWAYS included; the other four are added based on the system and user needs.",
          "Availability addresses whether the system is available for operation and use as committed (uptime, capacity, incident/DR handling); Processing Integrity addresses whether processing is complete, valid, accurate, timely, and authorized (the right transactions processed correctly).",
          "Confidentiality protects information designated as confidential (any sensitive business data — contracts, IP, pricing); Privacy specifically addresses PERSONAL information and whether it is collected, used, retained, disclosed, and disposed of in conformity with the entity's privacy notice and criteria.",
          "The categories are defined by criteria (with 'points of focus'); an engagement's scope is set by which categories are selected, and the auditor evaluates controls against the criteria for exactly those categories (security always among them).",
        ],
        scoringActions: [
          "Map the stated concern to the exact category and confirm security is included by default in any SOC 2/SOC 3.",
          "Draw the confidentiality/privacy distinction explicitly: privacy is the subset dealing with PERSONAL information governed by a privacy notice.",
          "Scope the engagement to the selected categories only, and evaluate controls against the criteria for those categories rather than a generic 'security' checklist.",
        ],
      },
      {
        id: "tp7",
        title: "Threats, incident response, and resilience (NIST CSF, IR lifecycle, BCP/DRP)",
        priority: "medium",
        examinerFocus:
          "Whether you can identify common threats (malware/ransomware, phishing and social engineering, denial of service, injection, insider threats, advanced persistent threats), place activities into the NIST Cybersecurity Framework functions and the incident-response lifecycle, and apply business-continuity/disaster-recovery concepts — especially RTO and RPO and recovery-site types. Quantitative risk items ask you to compute single-loss and annualized-loss expectancy.",
        typicalQuestionForms: [
          "MCQ: identify the threat described (a fraudulent email harvesting credentials → phishing/social engineering; traffic flooding a site → DoS).",
          "MCQ: place an activity in the correct NIST CSF function (Identify/Protect/Detect/Respond/Recover) or IR phase (containment vs eradication vs recovery).",
          "MCQ/TBS: given asset value, exposure factor, and annual rate of occurrence, compute SLE and ALE; or select a recovery strategy given an RTO/RPO.",
        ],
        mustKnow: [
          "Common threats: malware and ransomware (ransomware attacks availability and often integrity), phishing/social engineering (exploits people, not systems), denial-of-service (availability), SQL/code injection (integrity/confidentiality), insider threats, and advanced persistent threats (stealthy, long-dwell intrusions). Social engineering defeats technical controls by targeting users, so training is the key control.",
          "The NIST Cybersecurity Framework organizes activities into core functions — Identify, Protect, Detect, Respond, Recover (CSF 2.0 adds Govern) — a risk-based structure, not a maturity checklist.",
          "The incident-response lifecycle runs Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident (lessons learned). Containment (stop the spread) precedes eradication (remove the cause) which precedes recovery (restore operations); skipping containment worsens the damage.",
          "Business continuity/disaster recovery: RTO (Recovery Time Objective) is the maximum tolerable DOWNTIME; RPO (Recovery Point Objective) is the maximum tolerable DATA LOSS measured back in time (it drives backup frequency). Recovery sites range from hot (near-immediate) to warm to cold (cheapest, slowest); the tighter the RTO/RPO, the costlier the strategy.",
        ],
        scoringActions: [
          "Name the specific threat and, for social engineering/phishing, prescribe user-focused controls (training, verification) rather than only technical ones.",
          "Sequence incident response correctly — contain before eradicate before recover — and finish with a post-incident lessons-learned step.",
          "Tie the recovery strategy to the required RTO/RPO (RPO drives backup frequency, RTO drives site/hot-standby choice), and compute SLE = asset value × exposure factor and ALE = SLE × annual rate of occurrence when asked.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "ISC governance/security/SOC items reward crisp classification and correct report selection. Bank the CIA-triad, control-taxonomy, authentication-vs-authorization, and SOC-selection MCQs as near-automatic points, then earn TBS marks by walking each requirement through classify → map to objective/criterion → recommend the specific control or report. On the CPA exam the ISC Discipline is scored roughly 50% MCQ and 50% task-based simulations.",
      timeBudget:
        "Budget roughly 1.25 minutes per MCQ. On a SOC or security TBS, spend the first 3–4 minutes framing the problem — for security: which CIA element and which control type; for SOC: is the concern ICFR or trust-services criteria, who is the audience, and is operating effectiveness needed — before writing any recommendation.",
      answerSequence: [
        "Frame the objective: for security, name the CIA element(s) at stake; for governance, decide governance vs management; for SOC, decide ICFR (SOC 1) vs trust-services (SOC 2/3) and identify the audience.",
        "Classify precisely: control function (preventive/detective/corrective) and nature (administrative/technical/physical); cryptographic objective (confidentiality/integrity/non-repudiation); report type (Type 1 vs Type 2) and trust-services categories in scope.",
        "Check the reliance conditions: for SOC, Type 2 for operating effectiveness, CUECs implemented at the user, subservice-org method (carve-out vs inclusive), and period coverage; for security, least privilege and layered defense-in-depth.",
        "Recommend the specific control/report and justify it against the objective/criterion, naming the framework authority (COBIT/COSO/NIST/trust services) that applies.",
      ],
      qualityChecks: [
        "Did I map the incident to the correct CIA element before choosing controls, and offer layered (defense-in-depth) controls of different types?",
        "Did I keep authentication vs authorization straight and match each cryptographic mechanism to its exact objective (confidentiality vs integrity vs non-repudiation)?",
        "Did I select the SOC report on BOTH axes (ICFR vs trust-services subject, and restricted vs general-use audience) and state the use restriction?",
        "Did I require a Type 2 where operating effectiveness matters, test CUECs at the user entity, and address subservice organizations and period coverage?",
        "Did I name the correct framework authority (COBIT for governance, COSO for entity control, NIST for cybersecurity, trust services for SOC 2/3) instead of cross-applying?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "IT governance vs management and the COBIT framework",
        testPointIds: ["tp1"],
        explanation: [
          "The first distinction ISC tests is governance versus management, because candidates routinely collapse the two. IT governance is the responsibility of the board and those charged with governance: it evaluates stakeholder needs and conditions, sets direction through prioritization and decision-making (including the enterprise's IT risk appetite), and monitors performance and compliance against that direction. IT management is the executive layer that plans, builds, runs, and monitors IT activities in alignment with the direction set by governance. Put simply, governance decides what should be achieved and holds others accountable; management executes. A board that approves an IT strategy and risk appetite is governing; a CIO who staffs a project and configures a control is managing. Questions that describe a board or audit committee action are almost always governance; questions that describe execution are management.",
          "COBIT is the framework the exam associates with the governance and management of enterprise information and technology. Its governance objectives are owned by the board and follow an Evaluate–Direct–Monitor (EDM) pattern, while its management objectives fall into four domains: Align, Plan and Organize (APO); Build, Acquire and Implement (BAI); Deliver, Service and Support (DSS); and Monitor, Evaluate and Assess (MEA). The point is not to memorize every objective but to recognize that governance (EDM, board-level) sits above management (the four domains, executive-level), and that COBIT provides a structured way to place accountability, align IT with business goals, deliver value, and manage IT-related risk.",
          "The most damaging exam error is reaching for the wrong framework. Keep the authorities in separate boxes: COBIT governs and manages enterprise IT; COSO's Internal Control–Integrated Framework addresses entity-level internal control (control environment, risk assessment, control activities, information and communication, monitoring); NIST provides cybersecurity guidance; and ITIL addresses IT service management. A question about aligning IT investment with strategy is a COBIT question; a question about the components of internal control is a COSO question; a question about protecting systems from cyber threats is a NIST question. When accountability is missing in a fact pattern, assign it to the correct level — oversight, risk appetite, and 'direct and monitor' belong to the board; execution belongs to management — rather than writing a vague 'strengthen governance'.",
        ],
        keyRules: [
          "Governance = board evaluates, directs, monitors and sets risk appetite; management = executive plans, builds, runs, monitors. Governance holds management accountable.",
          "COBIT structure: governance objectives (Evaluate-Direct-Monitor, board-level) above management domains APO / BAI / DSS / MEA.",
          "Framework boxes: COBIT (IT governance/management), COSO (entity internal control), NIST (cybersecurity), ITIL (IT service management) — do not cross-apply.",
          "Assign missing accountability to the correct level (board for oversight/risk appetite; management for execution), not a generic 'improve governance'.",
        ],
      },
      {
        id: "sn2",
        title: "The CIA triad, defense-in-depth, and classifying security controls",
        testPointIds: ["tp2"],
        explanation: [
          "Information security is organized around three objectives — the CIA triad. Confidentiality means only authorized parties can read the data (attacked by breaches, eavesdropping, and improper access). Integrity means data and processing are accurate, complete, and not improperly altered (attacked by tampering, injection, and unauthorized changes). Availability means systems and data are usable when needed (attacked by ransomware, denial-of-service, and outages). The exam's first move on almost any security item is to map the incident or requirement to the element it concerns: a leaked customer list is a confidentiality failure; a silently altered price file is an integrity failure; a ransomware lockout is primarily availability (and often integrity). Naming the element first disciplines the rest of the answer, because the control you choose must protect that specific objective.",
          "Controls are then classified on two independent axes, and the exam expects both. By function, a control is preventive (stops an event before it happens — access controls, encryption, edit checks, firewalls), detective (finds an event after it happens — logging, monitoring, intrusion detection, reconciliations), or corrective (restores after an event — backups and restore, incident response, patching). By nature, a control is administrative/managerial (policies, security-awareness training, background checks, segregation of duties), technical/logical (firewalls, encryption, authentication systems, IDS/IPS), or physical (locks, guards, mantraps, environmental controls such as fire suppression). A firewall is preventive and technical; a security-guard is preventive and physical; a log review is detective and technical; a data-restore is corrective and technical.",
          "Defense-in-depth is the principle that ties this together: rather than relying on any single control, an organization layers multiple, overlapping controls of different types so that the failure of one does not compromise the asset. Sensitive data might be protected by network firewalls, multi-factor authentication, encryption at rest and in transit, continuous monitoring, and tested backups — each covering a gap the others leave. When a fact pattern asks for a recommendation, resist offering three controls of the same kind (three detective controls, say). Provide a balanced, layered set: at least one preventive control for the primary risk, a detective control to catch what prevention misses, and a corrective control to recover, spanning administrative, technical, and physical natures as the scenario warrants.",
        ],
        keyRules: [
          "CIA triad: Confidentiality (authorized read only), Integrity (accurate/unaltered), Availability (usable when needed). Map every incident to the element it attacks.",
          "Control function: preventive (before), detective (after — find), corrective (after — restore).",
          "Control nature: administrative (policy/training/SoD), technical/logical (firewall/encryption/IDS), physical (locks/guards/environmental).",
          "Defense-in-depth: layer overlapping controls of different types; recommend a balanced set (preventive + detective + corrective), not one type repeated.",
        ],
        workedProblem: {
          scenario:
            "A mid-size firm stores customer personal data on an internal file server. Recent events: (1) an employee emailed an unencrypted spreadsheet of customer records to a personal account; (2) a ransomware infection encrypted several shared folders, halting order processing for a day; and (3) an unauthorized change to a product price table went unnoticed for two weeks. For each event, identify the CIA element primarily threatened, and recommend a layered set of controls (defense-in-depth) classified by function and nature.",
          steps: [
            "Event (1) — unencrypted customer records emailed out: primarily a CONFIDENTIALITY failure (also a privacy concern because the data is personal). Controls: preventive/technical — data-loss-prevention (DLP) blocking of outbound personal data and encryption of sensitive files; preventive/administrative — acceptable-use policy and security-awareness training plus least-privilege access to the file share; detective/technical — email/DLP monitoring and alerts on outbound sensitive data.",
            "Event (2) — ransomware halting order processing: primarily an AVAILABILITY failure (integrity of encrypted files is also compromised). Controls: preventive/technical — endpoint protection, patching, and email filtering; preventive/administrative — phishing-awareness training (ransomware usually enters via phishing); detective/technical — intrusion detection and anomaly monitoring; corrective/technical — tested, isolated (offline/immutable) backups and an incident-response/restore plan to recover within the required RTO.",
            "Event (3) — undetected unauthorized price change: primarily an INTEGRITY failure. Controls: preventive/technical — restrict write access to the price table under least privilege and require authorized change control; detective/technical — logging and periodic review of changes to master data and exception/change reports; corrective — restore the correct values from a known-good version and investigate.",
            "Assemble defense-in-depth: note that no single control addresses each event; each recommendation pairs prevention with detection and, where recovery matters, correction, and spans administrative, technical, and physical natures as needed.",
            "Justify against the CIA element: each control is chosen because it protects the specific objective threatened (confidentiality, availability, or integrity), which is how the marker connects the recommendation to the risk.",
          ],
          conclusion:
            "Event (1) threatens confidentiality (and privacy) → DLP/encryption + policy/training + outbound monitoring. Event (2) threatens availability (and integrity) → endpoint protection/patching + phishing training + monitoring + tested offline backups and IR. Event (3) threatens integrity → least-privilege write access and change control + change logging/review + restore from a known-good version. Each answer maps the incident to a CIA element and layers preventive, detective, and corrective controls across administrative and technical natures.",
          markingNotes: [
            "Award marks for correctly mapping each event to its primary CIA element (confidentiality; availability; integrity).",
            "Award marks for recommending LAYERED controls (at least preventive + detective, plus corrective where recovery is needed) rather than a single control.",
            "Award marks for classifying controls by function and nature and tying each to the objective it protects; note ransomware entering via phishing justifies user-training controls.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Access management, authentication, and cryptography",
        testPointIds: ["tp3"],
        explanation: [
          "Access control rests on a sequence the exam wants you to keep distinct: identification (claiming an identity), authentication (proving it), authorization (granting the permissions that identity may exercise), and accountability (logging actions so they trace back to the identity). Authentication draws on three factor categories — knowledge (something you know, such as a password or PIN), possession (something you have, such as a hardware token or a code sent to a registered phone), and inherence (something you are, a biometric such as a fingerprint). Multi-factor authentication combines two or more factors from DIFFERENT categories; a password plus a security question is still single-factor because both are knowledge. Authorization then applies least privilege (grant only the access a role requires), need-to-know, and segregation of incompatible duties, with special rigor over privileged/administrator accounts. Access must follow a lifecycle — provision on hire/role, review and recertify periodically, and deprovision promptly on transfer or termination — because stale and orphaned accounts are a leading cause of breaches.",
          "Cryptography is the highest-yield ISC discriminator because it maps mechanisms to objectives, and candidates confuse them. Symmetric encryption uses a single shared secret key for both encryption and decryption; it is fast and suited to bulk data (e.g., AES), but its weakness is key distribution — both parties must share the secret securely. Asymmetric encryption uses a mathematically linked public/private key pair (e.g., RSA): the public key can be shared freely while the private key is kept secret. This solves key distribution and enables two different services depending on WHICH key is used. To achieve CONFIDENTIALITY, the sender encrypts with the RECIPIENT'S PUBLIC key, so that only the recipient's private key can decrypt — no one else can read it.",
          "Integrity and non-repudiation come from hashing and digital signatures, which are not encryption for confidentiality. A hash function (e.g., SHA-256) produces a fixed-length, one-way digest of a message; if the message changes, the hash changes, so a matching hash evidences integrity. A digital signature is created by hashing the message and then encrypting that hash with the SENDER'S PRIVATE key; the recipient decrypts it with the sender's public key and compares hashes. Because only the sender holds the private key, a valid signature provides authentication and non-repudiation (the sender cannot deny sending it) as well as integrity — but it does NOT provide confidentiality (the message itself is not hidden unless separately encrypted). Public-key infrastructure (PKI) makes all of this trustworthy by having a certificate authority issue digital certificates that bind a public key to a verified identity. In short: confidentiality → recipient's public key; authentication/non-repudiation → sender's private key (signature); integrity → hashing.",
        ],
        keyRules: [
          "Identify → authenticate (prove identity) → authorize (grant permissions) → account (log). MFA = two or more factors from DIFFERENT categories (know / have / are).",
          "Apply least privilege, need-to-know, SoD, and strict privileged-account control; provision → recertify → deprovision promptly.",
          "Symmetric = one shared key (fast; key-distribution problem). Asymmetric = public/private key pair.",
          "Confidentiality = encrypt with recipient's PUBLIC key; digital signature = encrypt hash with sender's PRIVATE key (authentication/non-repudiation/integrity); hashing = one-way integrity only.",
        ],
        formulas: [
          "Confidentiality (asymmetric): ciphertext = Encrypt(recipient_public_key, message); recovered by Decrypt(recipient_private_key, ciphertext).",
          "Digital signature: signature = Encrypt(sender_private_key, Hash(message)); verified by comparing Decrypt(sender_public_key, signature) with a freshly computed Hash(message).",
          "Integrity check: message is unaltered if Hash(received_message) == transmitted_hash.",
        ],
        workedProblem: {
          scenario:
            "A company sends monthly financial data files to an external partner over the internet. Management wants three assurances: (a) only the partner can read the file (confidentiality); (b) the partner can verify the file genuinely came from the company and was not altered (authentication and integrity); and (c) the company cannot later deny sending it (non-repudiation). For each requirement, state the cryptographic mechanism and exactly which key is used, and identify one access control that should also apply.",
          steps: [
            "Requirement (a) confidentiality: encrypt the file with the PARTNER'S PUBLIC key so that only the partner's private key can decrypt it. (In practice, encrypt the file with a symmetric session key for speed, then encrypt that session key with the partner's public key — a hybrid scheme — but the key that secures confidentiality is the recipient's public key.)",
            "Requirement (b) authentication + integrity: the company computes a hash of the file and encrypts the hash with the COMPANY'S OWN PRIVATE key to create a digital signature; the partner verifies it with the company's public key and by recomputing the hash. A matching hash proves the file was not altered (integrity) and that it came from the company (authentication).",
            "Requirement (c) non-repudiation: the same digital signature provides non-repudiation, because only the company holds its private key — it cannot credibly deny having signed the file.",
            "Establish trust in the keys: use PKI so a certificate authority's digital certificates bind each public key to a verified identity, preventing a public-key substitution attack.",
            "Add an access control: restrict who can initiate the transfer and hold the signing private key using least privilege, with the private key protected (e.g., in a secured key store / HSM) and access logged for accountability.",
          ],
          conclusion:
            "Confidentiality is achieved by encrypting with the PARTNER'S PUBLIC key; authentication, integrity, and non-repudiation are achieved by a digital signature — hashing the file and encrypting the hash with the COMPANY'S PRIVATE key, verified with the company's public key. PKI-issued certificates make the public keys trustworthy, and least-privilege control plus a protected, logged signing key secure the process. Note that a signature alone does not hide the file, so both mechanisms are needed together.",
          markingNotes: [
            "Award marks for using the RECIPIENT'S public key for confidentiality (not the sender's).",
            "Award marks for a digital signature (hash encrypted with the SENDER'S private key) delivering authentication, integrity, AND non-repudiation, and for noting a signature does not provide confidentiality.",
            "Award marks for PKI/certificate trust in the keys and a least-privilege/protected-key access control.",
          ],
        },
      },
      {
        id: "sn4",
        title: "The SOC reporting suite: selecting and reading the right report",
        testPointIds: ["tp4", "tp5"],
        explanation: [
          "System and Organization Controls (SOC) reports let a service organization give assurance to its customers (user entities) about its controls, and the exam's core skill is choosing the right one. Two questions settle almost every selection. First, what is the subject of concern? If it is a service organization's controls that are relevant to USER ENTITIES' internal control over financial reporting (ICFR) — a payroll processor, a claims administrator, a loan servicer — the answer is SOC 1, performed under the attestation standards (SSAE 18 / AT-C 320). If the concern is one or more of the trust services criteria (security, availability, processing integrity, confidentiality, privacy) — for example a cloud host's security and uptime — the answer is a SOC 2 (detailed) or SOC 3 (summary). Second, who is the audience? SOC 1 and SOC 2 are RESTRICTED-USE reports intended for knowledgeable parties (the service organization's management, user entities, and their auditors, and for SOC 2 also informed customers and regulators). SOC 3 covers the same trust-services subject matter as SOC 2 but is a short, GENERAL-USE report without the detailed description of the auditor's tests — designed for marketing and public distribution (a website seal). Two entity-wide reports round out the suite: SOC for Cybersecurity reports on an entity's enterprise-wide cybersecurity risk-management program to a broad audience, and SOC for Supply Chain addresses controls over production, manufacturing, or distribution systems.",
          "Once the report type is chosen, you must read it correctly, and the first distinction is Type 1 versus Type 2. A Type 1 report opines on whether management's description is fairly presented and whether the controls are suitably DESIGNED as of a specified DATE; it says nothing about whether the controls actually operated. A Type 2 report opines additionally on OPERATING EFFECTIVENESS THROUGHOUT a specified PERIOD and includes the description of the service auditor's tests of controls and the results — the detailed test matrix in section 4. Therefore, whenever a user or user auditor needs to RELY on operating effectiveness (as an auditor almost always does), a Type 2 is required; a Type 1 supports only an understanding of design. The report's other sections — the service auditor's opinion, management's assertion, and the description of the system — must also be read for a modified (qualified/adverse) opinion or an inadequate description, either of which limits reliance.",
          "Two features regularly decide TBS marks. Complementary user entity controls (CUECs) are controls the service organization ASSUMES the USER ENTITY will implement for the control objectives or criteria to be met; they are explicitly the user's responsibility and are NOT covered by the service auditor's opinion, so the user and its auditor must confirm those controls are actually in place at the user entity. Subservice organizations — parties the service organization itself relies on (e.g., the data center a SaaS provider uses) — are presented either by the CARVE-OUT method (their controls are excluded from the description and the opinion, so the user must obtain separate assurance about them) or the INCLUSIVE method (their controls are described and tested within the report). Finally, a user auditor must check period coverage: if the SOC 2/SOC 1 period does not fully overlap the user's fiscal year, a gap exists that must be bridged (a bridge/gap letter from management and/or additional procedures). Missing any of these — relying on a Type 1 for operating effectiveness, ignoring CUECs, or overlooking a carved-out subservice organization — is the classic way to lose reliance without realizing it.",
        ],
        keyRules: [
          "Select on two axes: subject (ICFR → SOC 1; trust-services criteria → SOC 2/SOC 3) and audience (restricted knowledgeable users → SOC 1/SOC 2; general public → SOC 3).",
          "SOC 1 and SOC 2 are restricted-use; SOC 3 is general-use (no detailed test descriptions). Entity-wide: SOC for Cybersecurity, SOC for Supply Chain.",
          "Type 1 = design at a point in time (no operating effectiveness); Type 2 = design + operating effectiveness over a period, with the tests-and-results matrix. Reliance on operating effectiveness needs a Type 2.",
          "Test CUECs at the user entity (not covered by the opinion); check subservice-org method (carve-out vs inclusive) and period coverage (bridge any gap).",
        ],
        workedProblem: {
          scenario:
            "A company outsources its payroll to a service organization and separately uses a cloud provider to host customer data. The company's external auditor plans to rely on the payroll processor's controls when auditing payroll expense and related liabilities, and the company's sales team wants to reassure prospective customers about the cloud provider's security and availability without sharing sensitive control detail. The payroll processor offers a Type 1 SOC 1 covering a date three months before year end, and its report lists complementary user entity controls and discloses that it carves out its own data-center subservice organization. Advise on report selection and identify what the user auditor must still address.",
          steps: [
            "Payroll processor and the external auditor's need: the concern is controls relevant to the user entity's internal control over FINANCIAL REPORTING (payroll expense/liabilities), so the correct report is a SOC 1 — SOC 2 would be the wrong subject.",
            "Type of SOC 1 needed: the auditor intends to RELY on the controls, i.e., on operating effectiveness, so a Type 2 SOC 1 covering (substantially) the audit period is required. The offered Type 1 opines only on DESIGN as of a single date and gives no evidence of operating effectiveness — it is insufficient for reliance.",
            "Period coverage: even a Type 2 dated three months before year end leaves a gap; the auditor must obtain a bridge/gap letter and/or perform additional procedures to cover the remaining period up to year end.",
            "Complementary user entity controls (CUECs): the SOC 1 assumes the company implements certain controls (e.g., reviewing payroll registers, authorizing changes). These are the user's responsibility and are NOT in the service auditor's opinion, so the user auditor must identify and test them at the company.",
            "Carved-out subservice organization: because the data center is carved out, its controls are excluded from the payroll processor's description and opinion; the auditor must obtain separate assurance over the data center (e.g., its own SOC report) if its controls are relevant.",
            "Cloud provider and the sales team's need: the concern is trust-services criteria (security, availability) for a GENERAL, non-technical audience without detailed control/test disclosure — that is a SOC 3 (general-use). A SOC 2 would be too detailed and is restricted-use.",
          ],
          conclusion:
            "For the auditor's reliance on payroll, the company needs a Type 2 SOC 1 (the offered Type 1 covers only design and cannot support operating-effectiveness reliance), and the auditor must bridge the period gap to year end, identify and test the CUECs at the company, and obtain separate assurance over the carved-out data-center subservice organization. For reassuring prospects about the cloud provider's security and availability without sharing detail, the right report is a general-use SOC 3 (not the restricted, detailed SOC 2).",
          markingNotes: [
            "Award marks for selecting SOC 1 for the ICFR-relevant payroll controls and SOC 3 (general-use) for the marketing/security-and-availability need.",
            "Award marks for requiring a Type 2 (not Type 1) for operating-effectiveness reliance and for bridging the period gap to year end.",
            "Award marks for identifying and testing CUECs at the user entity and for obtaining separate assurance over the carved-out subservice organization.",
          ],
        },
      },
      {
        id: "sn5",
        title: "The five trust services categories and the common criteria",
        testPointIds: ["tp6"],
        explanation: [
          "SOC 2 and SOC 3 engagements are built on the trust services criteria, organized into five categories, and the exam tests both the list and how scope is set. The five categories are Security, Availability, Processing Integrity, Confidentiality, and Privacy. Security is special: it is the COMMON CRITERIA (sometimes called the baseline) and is ALWAYS included in a SOC 2/SOC 3 engagement, addressing protection of information and systems against unauthorized access, disclosure, and damage. The other four categories are optional and are added to the scope only when relevant to the system and to user needs. This is why the security-versus-scope question recurs: an engagement can be 'security only,' or 'security plus availability,' or all five — but it can never omit security.",
          "The four optional categories address distinct concerns. Availability addresses whether the system is available for operation and use as committed or agreed — uptime commitments, capacity/performance management, and incident and disaster-recovery handling; a customer worried about service outages cares about availability. Processing Integrity addresses whether system processing is complete, valid, accurate, timely, and authorized — the right transactions processed correctly and completely; a customer worried that a service will miscalculate or drop transactions cares about processing integrity. These two are about the system's operation, not merely its protection.",
          "Confidentiality and Privacy are the pair candidates most often confuse. Confidentiality addresses information designated as confidential — any sensitive business information such as contracts, intellectual property, pricing, or business plans — and whether it is protected as committed. Privacy is narrower and specific: it addresses PERSONAL information (information about identifiable individuals) and whether it is collected, used, retained, disclosed, and disposed of in conformity with the entity's PRIVACY NOTICE and the applicable privacy criteria. The clean rule: privacy is the category that governs personal information under a privacy notice; confidentiality covers sensitive information generally. When scoping, the auditor evaluates controls against the criteria (and their 'points of focus') for exactly the categories selected — always including security — rather than applying a generic checklist.",
        ],
        keyRules: [
          "Five trust services categories: Security, Availability, Processing Integrity, Confidentiality, Privacy.",
          "Security is the common criteria and is ALWAYS included; the other four are optional, selected by system and user needs.",
          "Availability = usable as committed (uptime/DR); Processing Integrity = complete, valid, accurate, timely, authorized processing.",
          "Confidentiality = sensitive information generally; Privacy = PERSONAL information handled per the entity's privacy notice. Scope controls to the selected categories only.",
        ],
      },
      {
        id: "sn6",
        title: "Threats, incident response, and resilience",
        testPointIds: ["tp7"],
        explanation: [
          "ISC expects fluency with the common threat landscape and the recognition that different threats attack different objectives. Malware is malicious software broadly; ransomware is the variant that encrypts data and demands payment, attacking availability (and integrity). Phishing and other social engineering exploit PEOPLE rather than systems, tricking users into revealing credentials or clicking malicious links — which is why security-awareness training and verification procedures, not just technical controls, are the key defenses. Denial-of-service attacks flood a system to make it unavailable (availability). Injection attacks (e.g., SQL injection) exploit poorly validated input to read or alter data (confidentiality/integrity). Insider threats come from employees or contractors abusing legitimate access, and advanced persistent threats are stealthy, well-resourced intrusions that dwell undetected for long periods. Naming the specific threat, and choosing controls that fit how it operates, is what earns marks.",
          "Two structures organize the response. The NIST Cybersecurity Framework groups activities into core functions — Identify, Protect, Detect, Respond, and Recover (CSF 2.0 adds Govern) — providing a risk-based way to describe a program rather than a maturity score. The incident-response lifecycle runs Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident (lessons learned). The sequence matters: containment stops the spread (isolating affected systems), eradication removes the root cause (deleting malware, closing the exploited vulnerability), and recovery restores normal operations from clean backups — attempting recovery before containment and eradication simply reinfects the environment, and skipping the post-incident review forfeits the improvement the incident should buy.",
          "Resilience is governed by business-continuity and disaster-recovery planning, and two metrics drive design decisions. The Recovery Time Objective (RTO) is the maximum tolerable DOWNTIME — how quickly a process must be restored — and it drives the choice of recovery site and standby capacity. The Recovery Point Objective (RPO) is the maximum tolerable DATA LOSS expressed as a period of time — how much recent data the business can afford to lose — and it drives backup FREQUENCY (a one-hour RPO requires backups or replication at least hourly). Recovery sites trade cost against speed: a hot site is fully equipped and near-immediate, a warm site is partially ready, and a cold site is the cheapest but slowest to bring online; a mirrored/redundant site provides continuous failover. The tighter the RTO/RPO, the more expensive the solution, so the plan must match investment to the criticality of each process. Risk is often quantified to prioritize spending: single loss expectancy (SLE) equals asset value times exposure factor, and annualized loss expectancy (ALE) equals SLE times the annualized rate of occurrence, giving a dollar figure to compare against the cost of a control.",
        ],
        keyRules: [
          "Threats attack specific objectives: ransomware/DoS → availability; injection → integrity/confidentiality; phishing/social engineering → people (training is the key control); APT → stealthy long-dwell intrusion.",
          "NIST CSF core functions: Identify, Protect, Detect, Respond, Recover (CSF 2.0 adds Govern).",
          "Incident response order: Preparation → Detection & Analysis → Containment → Eradication → Recovery → Post-incident (lessons learned). Contain before eradicate before recover.",
          "RTO = max tolerable downtime (drives site choice); RPO = max tolerable data loss in time (drives backup frequency). Hot > warm > cold sites in speed and cost.",
        ],
        formulas: [
          "Single Loss Expectancy: SLE = Asset Value × Exposure Factor (the % of asset value lost in one event).",
          "Annualized Loss Expectancy: ALE = SLE × Annualized Rate of Occurrence (ARO). Compare ALE to the annual cost of a control to justify it.",
          "RPO drives backup frequency (backup interval ≤ RPO); RTO drives recovery-site/standby selection (shorter RTO → hotter site).",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (governance & security controls)",
        question:
          "A growing company has no IT steering oversight at the board level; the CIO sets IT strategy, approves the IT risk appetite, and also runs day-to-day operations. Separately, the company suffered two incidents: a phishing email led to a compromised administrator account, and a customer database was accessed by a former employee whose access was never removed. Identify the governance weakness and assign accountability correctly (naming the applicable framework), then map each incident to the CIA triad and recommend layered controls classified by function and nature.",
        answerPlan: [
          "Separate governance (board evaluate/direct/monitor, risk appetite) from management (CIO execution); identify the concentration and the missing board oversight.",
          "Name COBIT as the IT governance framework and assign accountability to the correct level.",
          "Map the phishing/admin compromise and the orphaned-access breach to CIA elements.",
          "Recommend layered controls (MFA, least privilege, deprovisioning, training, monitoring) classified by function and nature.",
        ],
        modelAnswer:
          "The governance weakness is that IT governance and management are collapsed into one role: the CIO both sets the IT strategy and risk appetite (governance activities that belong to the board/those charged with governance) and runs operations (management). Under COBIT, governance follows an Evaluate–Direct–Monitor pattern owned by the board — setting direction and risk appetite and monitoring performance — while management (the CIO) plans, builds, and runs IT in line with that direction. Accountability should be reassigned: the board (or an IT steering/oversight committee) approves IT strategy, sets and monitors IT risk appetite, and holds the CIO accountable; the CIO executes. COBIT is the correct authority here, not COSO (entity internal control) or NIST (cybersecurity). On the incidents: the phishing-compromised administrator account is primarily a confidentiality and integrity threat (and, via a privileged account, potentially availability), and the former employee's continued access to the customer database is a confidentiality breach (and a privacy concern because the data is personal). Layered controls for the phishing/admin risk: preventive/administrative security-awareness and phishing training (social engineering targets people); preventive/technical multi-factor authentication combining different factor categories, especially on privileged accounts, plus email filtering and least-privilege limits on administrator rights; detective/technical monitoring and alerting on privileged-account activity; corrective incident response to reset credentials and revoke sessions. Layered controls for the orphaned access: preventive/administrative a joiner–mover–leaver access lifecycle with prompt deprovisioning on termination; preventive/technical least-privilege and role-based access; detective/technical periodic access recertification and logging/review of access to sensitive data; corrective removal of the stale account and investigation of what was accessed. The recommendations are defense-in-depth because each risk is covered by prevention, detection, and correction across administrative and technical natures rather than a single control.",
        markingGuide: [
          "1 mark: identifying the collapse of governance and management and assigning board-level oversight/risk appetite vs CIO execution.",
          "1 mark: naming COBIT as the IT governance framework (not COSO/NIST) for the accountability fix.",
          "1 mark: mapping the phishing/admin compromise (confidentiality/integrity) and the orphaned access (confidentiality/privacy) to the CIA triad.",
          "1 mark: MFA + least privilege + phishing training + privileged-account monitoring for the first incident, classified by function/nature.",
          "1 mark: an access lifecycle with prompt deprovisioning, recertification, and logging/review for the second incident, as a layered set.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3"],
        style: "Short constructed response (access & cryptography)",
        question:
          "An analyst proposes: 'We will require users to enter a password and answer a security question, and we will protect confidential files by hashing them. To send a signed contract to a client so they know it came from us, we will encrypt the contract with our own public key.' Evaluate each element, correct the errors, and state the correct mechanism and key for (a) strong user authentication, (b) confidentiality of stored files, and (c) proving the contract came from the company and was unaltered.",
        answerPlan: [
          "Assess the proposed 'MFA' — password plus security question are both knowledge, so it is single-factor.",
          "Correct 'hashing for confidentiality' — hashing gives integrity, not confidentiality; use encryption.",
          "Correct the signature key error — signing uses the sender's private key; the stated 'own public key' is wrong.",
          "State the correct mechanism and key for authentication, confidentiality, and authentication/integrity/non-repudiation.",
        ],
        modelAnswer:
          "Each element contains a common error. (a) A password plus a security question is NOT multi-factor authentication, because both are knowledge factors (something you know); true multi-factor authentication combines two or more DIFFERENT categories — knowledge (password), possession (a hardware token or a code delivered to a registered device), or inherence (a biometric). The fix is to pair the password with a possession or inherence factor, and to enforce this especially on privileged accounts. (b) Hashing does not provide confidentiality; a hash is a one-way digest that evidences INTEGRITY (if the file changes, the hash changes) but does not conceal the contents. To protect confidential files at rest, ENCRYPT them (e.g., symmetric AES encryption with a securely managed key); apply least privilege so only authorized users can access them. (c) Encrypting the contract with the company's OWN PUBLIC key is wrong twice over: encrypting with a public key provides confidentiality for the holder of the matching private key, not proof of origin, and to prove origin you sign, not encrypt-for-confidentiality. To prove the contract came from the company and was not altered, create a DIGITAL SIGNATURE: hash the contract and encrypt the hash with the COMPANY'S PRIVATE key; the client verifies it with the company's public key and by recomputing the hash. This provides authentication, integrity, and non-repudiation (only the company holds its private key). If the contract's contents must also be kept confidential in transit, additionally encrypt it with the CLIENT'S public key. Public-key infrastructure (a certificate authority issuing digital certificates) should bind the public keys to verified identities so the client can trust the company's public key.",
        markingGuide: [
          "1 mark: identifying that password + security question is single-factor (both knowledge) and prescribing a factor from a different category.",
          "1 mark: correcting that hashing gives integrity, not confidentiality, and using encryption for confidential files.",
          "1 mark: correcting the signature to use the SENDER'S (company's) PRIVATE key and noting it delivers authentication/integrity/non-repudiation.",
          "1 mark: noting that confidentiality of the contract would require encrypting with the CLIENT'S public key, and that PKI/certificates establish trust in the keys.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp4", "tp5", "tp6"],
        style: "Task-based simulation (SOC report selection & use)",
        question:
          "A SaaS company processes its clients' billing transactions (affecting the clients' revenue and receivables) and hosts client data on a third-party cloud data center. Client A's external auditor wants to rely on the SaaS company's controls when auditing Client A's revenue; Client B's procurement team wants independent assurance over the SaaS company's security, availability, and how it handles personal data, in a detailed report they can review; and the SaaS company's marketing team wants a public assurance seal for its website. Recommend the report(s), specify Type and, where relevant, the trust services categories, and identify two things a user auditor must address when using the report for Client A.",
        answerPlan: [
          "Client A's auditor → SOC 1 (ICFR-relevant billing controls), Type 2 for reliance.",
          "Client B's detailed trust-services assurance including personal data → SOC 2 with security + availability + privacy categories.",
          "Marketing seal → SOC 3 (general-use).",
          "For Client A: address CUECs, subservice-org (carved-out data center), Type/period coverage.",
        ],
        modelAnswer:
          "Three needs map to three reports. For Client A's external auditor, the concern is the SaaS company's controls that are relevant to Client A's internal control over FINANCIAL REPORTING (billing affects revenue and receivables), so the correct report is a SOC 1. Because the auditor wants to RELY on the controls' operating effectiveness, it must be a Type 2 SOC 1 covering (substantially) the audit period, not a Type 1 (which addresses design only, at a point in time). For Client B's procurement team, the concern is trust services criteria in a detailed, restricted-use report for a knowledgeable party: a SOC 2, scoping in Security (always included as the common criteria), Availability (uptime), and Privacy (because personal data is handled — privacy governs personal information under the entity's privacy notice, as distinct from general confidentiality); a Type 2 would evidence operating effectiveness over the period. For the marketing team's public website seal, the correct report is a SOC 3 — the same trust-services subject matter as SOC 2 but a short, GENERAL-USE report without the detailed test descriptions, appropriate for public distribution (a restricted-use SOC 2 must not be posted publicly). When using the SOC 1 for Client A, the user auditor must, first, identify and test the complementary user entity controls (CUECs) — controls the SaaS company assumes Client A performs (e.g., reviewing billing output, authorizing rate changes), which are the user's responsibility and NOT covered by the service auditor's opinion; and second, address the carved-out third-party data center subservice organization by obtaining separate assurance over its relevant controls (they are excluded from the SaaS company's description and opinion), while also checking that the SOC 1 period covers the audit period and bridging any gap.",
        markingGuide: [
          "1 mark: SOC 1 (Type 2) for Client A's auditor because the concern is ICFR and reliance requires operating effectiveness.",
          "1 mark: SOC 2 for Client B with the correct categories — Security (baseline) + Availability + Privacy (personal data) — and distinguishing privacy from confidentiality.",
          "1 mark: SOC 3 (general-use) for the public marketing seal, not a restricted-use SOC 2.",
          "1 mark: identifying/testing CUECs at the user entity as the user's own responsibility.",
          "1 mark: addressing the carved-out subservice organization (separate assurance) and Type/period coverage for reliance.",
        ],
      },
      {
        id: "ep4",
        testPointIds: ["tp7", "tp2"],
        style: "Short constructed response (incident response, resilience & risk quantification)",
        question:
          "A company detects ransomware spreading across its file servers. Set out the correct incident-response sequence and identify which CIA element is primarily threatened. Then advise on resilience: the business can tolerate at most 4 hours of downtime and at most 1 hour of data loss for order processing — state which metric each represents and how it drives the recovery design. Finally, a proposed control costs $60,000 per year; the asset is valued at $500,000, a successful attack would destroy an estimated 40% of its value, and such attacks are expected about 0.5 times per year — compute the SLE and ALE and state whether the control is justified.",
        answerPlan: [
          "Sequence incident response: preparation already done → detection/analysis → containment → eradication → recovery → post-incident.",
          "Identify ransomware as primarily an availability (and integrity) threat.",
          "Map 4-hour downtime to RTO and 1-hour data loss to RPO; explain how each drives design.",
          "Compute SLE = 500,000 × 40% and ALE = SLE × 0.5; compare to $60,000.",
        ],
        modelAnswer:
          "Incident response must follow the sequence Detection & Analysis → Containment → Eradication → Recovery → Post-Incident (preparation precedes any incident). Concretely: analyze the alert to confirm and scope the ransomware; CONTAIN it by isolating affected servers from the network to stop the spread; ERADICATE by removing the malware and closing the exploited vulnerability (and rotating compromised credentials); RECOVER by restoring data from clean, offline/immutable backups and validating integrity before returning systems to service; and conduct a POST-INCIDENT lessons-learned review to strengthen controls. Attempting recovery before containment and eradication would simply reinfect restored systems. Ransomware primarily threatens AVAILABILITY (systems/data are locked and unusable) and also INTEGRITY (data is altered/encrypted). On resilience: the 4-hour maximum downtime is the Recovery Time Objective (RTO), which drives the recovery-site and standby choice — a 4-hour RTO points toward a warm-to-hot standby capability rather than a cold site; the 1-hour maximum data loss is the Recovery Point Objective (RPO), which drives backup/replication FREQUENCY — backups or replication must occur at least hourly to meet a 1-hour RPO. On the cost-benefit: Single Loss Expectancy (SLE) = asset value × exposure factor = $500,000 × 40% = $200,000; Annualized Loss Expectancy (ALE) = SLE × annualized rate of occurrence = $200,000 × 0.5 = $100,000 per year. Because the ALE of $100,000 exceeds the control's annual cost of $60,000, the control is economically justified (it reduces expected annual loss by more than it costs).",
        markingGuide: [
          "1 mark: correct incident-response order (detection/analysis → containment → eradication → recovery → post-incident) with containment before recovery.",
          "1 mark: identifying ransomware as primarily an availability (and integrity) threat.",
          "1 mark: mapping 4-hour downtime to RTO (drives site/standby) and 1-hour data loss to RPO (drives backup frequency).",
          "1 mark: computing SLE = $200,000 and ALE = $100,000.",
          "1 mark: concluding the control is justified because ALE ($100,000) exceeds its annual cost ($60,000).",
        ],
      },
    ],
  }),
};
