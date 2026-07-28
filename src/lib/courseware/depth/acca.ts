import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * Exam-calibrated depth content for every ACCA module exported by
 * ACCA_COURSEWARE (paper-level, acca-all-m1..m16) and ACCA_STAGE_COURSEWARE
 * (granular, acca-applied-knowledge-*, acca-applied-skills-*,
 * acca-strategic-professional-*). Each entry is unique and targets the
 * specific title/scope of its module rather than copying the parent paper.
 *
 * General ACCA facts used throughout (official and stable):
 * - Pass mark is 50% on every exam.
 * - Applied Knowledge (BT/MA/FA) are 2-hour on-demand CBEs of objective test
 *   questions only.
 * - Applied Skills (LW/PM/TX/FR/AA/FM) are session CBEs: Section A/B objective
 *   and OT case questions, Section C constructed-response for the larger papers.
 * - Strategic Professional exams reward professional skills marks; SBL awards
 *   20 marks for professional skills; SBR and the Options papers award
 *   professional-skills marks within questions.
 * - TX, LW and ATX in this courseware follow the UK variant.
 */
export const ACCA_DEPTH: Record<string, CoursewareDepth> = {
  /* ===================================================================== */
  /* Paper-level modules (acca-all-m1..m16)                                 */
  /* ===================================================================== */

  "acca-all-m1": examDepth({
    testPoints: [
      {
        id: "bt-tp1",
        title: "Organisational structure, culture and governance",
        priority: "critical",
        examinerFocus:
          "Whether you can classify an organisation's structure, culture and governance features from a short scenario and link them to consequences, rather than just recall definitions.",
        typicalQuestionForms: [
          "MCQ giving a firm's characteristics and asking which structure (functional, divisional, matrix) or Handy/Mintzberg type it is",
          "Multiple-response item asking which features indicate strong corporate governance or a particular culture type",
        ],
        mustKnow: [
          "Mintzberg's building blocks (strategic apex, operating core, middle line, technostructure, support staff) and the structural types they produce",
          "Handy's four culture types (power, role, task, person) and Schein's levels of culture",
          "OECD/UK Corporate Governance Code principles: separation of chair and CEO, non-executive directors, audit committee, and the comply-or-explain approach",
        ],
        scoringActions: [
          "Read the stem for signal words (e.g. 'rules and procedures' = role culture) before scanning options",
          "Eliminate distractors that describe a different but related concept (culture vs structure)",
        ],
      },
      {
        id: "bt-tp2",
        title: "Business environment: PESTEL, Porter and stakeholders",
        priority: "high",
        examinerFocus:
          "Applying environmental and competitive frameworks to categorise a factor correctly and to place stakeholders on Mendelow's matrix.",
        typicalQuestionForms: [
          "Item asking which PESTEL category or Porter force a described factor belongs to",
          "Mendelow matrix item asking the appropriate management strategy for a stakeholder of given power/interest",
        ],
        mustKnow: [
          "The six PESTEL headings and typical examples of each",
          "Porter's five forces and what raises/lowers each force (e.g. low switching costs raise buyer power)",
          "Mendelow's matrix quadrants and their strategies: key players (manage closely), keep satisfied, keep informed, minimal effort",
        ],
        scoringActions: [
          "Match the factor to the single best framework heading, not a plausible second",
          "For Mendelow, fix power on one axis and interest on the other before choosing the strategy",
        ],
      },
      {
        id: "bt-tp3",
        title: "Accounting function, internal control and fraud",
        priority: "high",
        examinerFocus:
          "Understanding the roles within the finance function, the components and limitations of internal control, and the conditions that enable fraud.",
        typicalQuestionForms: [
          "Item identifying a control type (preventive, detective, corrective) or a control activity",
          "Item on the fraud triangle or on segregation-of-duties weaknesses",
        ],
        mustKnow: [
          "Roles of the finance function: recording, reporting, treasury, management accounting, internal audit",
          "The fraud triangle (opportunity, motive/pressure, rationalisation) and controls that remove opportunity",
          "Inherent limitations of internal control: collusion, management override, human error, cost-benefit",
        ],
        scoringActions: [
          "Classify each control by its purpose (before, during, after the event)",
          "Link a described weakness to the specific control that would remove it",
        ],
      },
      {
        id: "bt-tp4",
        title: "People, teams, leadership and professional ethics",
        priority: "medium",
        examinerFocus:
          "Recognising leadership/motivation theories and applying the ACCA fundamental ethical principles and threats to a workplace situation.",
        typicalQuestionForms: [
          "Item matching a described manager to a leadership model (Blake & Mouton, Adair, situational leadership)",
          "Item identifying which fundamental principle is threatened or which threat category applies",
        ],
        mustKnow: [
          "Motivation theories: Maslow, Herzberg (hygiene vs motivators), and expectancy theory",
          "The five ACCA fundamental principles: integrity, objectivity, professional competence and due care, confidentiality, professional behaviour",
          "Threat categories: self-interest, self-review, advocacy, familiarity, intimidation",
        ],
        scoringActions: [
          "Separate hygiene factors from motivators when a scenario lists both",
          "Name the specific principle at risk rather than a general 'ethics' answer",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 65%+ to build a safe margin over the 50% pass mark; BT is knowledge-heavy so accuracy on definitions and classifications is the fastest route to marks.",
      timeBudget:
        "2 hours for the full objective-test paper — roughly 1.2 minutes per mark; do not spend more than ~2 minutes on any single item.",
      answerSequence: [
        "Do a first pass answering every item you are confident on and flagging the rest",
        "Return to flagged items with time remaining, using elimination",
        "Never leave a blank — there is no negative marking, so guess flagged items",
      ],
      qualityChecks: [
        "Confirm you have chosen the exact number of options required in multiple-response items",
        "Re-read stems containing 'not', 'except' or 'least' before finalising",
      ],
    },
    studyNotes: [
      {
        id: "bt-sn1",
        title: "Reading structure and culture from a scenario",
        testPointIds: ["bt-tp1"],
        explanation: [
          "BT rewards fast, accurate classification. Organisational structure describes how work is divided and coordinated: a functional structure groups by specialism (finance, marketing), a divisional structure groups by product/region/customer, and a matrix overlays project or product lines onto functions so staff have two reporting lines. The scenario language gives the answer: 'grouped by region', 'dual reporting', or 'each department headed by a specialist' each point to a specific type.",
          "Culture is the deeper set of shared assumptions. Handy's model is the workhorse: power culture (a central figure, few rules, fast decisions — typical of small entrepreneurial firms), role culture (bureaucratic, rules and job descriptions dominate), task culture (project teams formed around problems, expertise-based), and person culture (the organisation exists to serve the individuals, e.g. a chambers of barristers). Schein reminds you that visible artefacts sit above espoused values, which sit above the hardest-to-change basic assumptions.",
          "Governance items test whether the safeguards that protect shareholders are present. Look for separation of the chair and chief executive, a majority of independent non-executive directors, an audit committee of NEDs, and the comply-or-explain philosophy of the UK Corporate Governance Code. A scenario where one dominant person is both chair and CEO with no NEDs is a governance red flag the examiner wants you to spot.",
        ],
        keyRules: [
          "Structure = how work is divided; culture = shared values and assumptions; governance = how the company is directed and controlled",
          "Comply-or-explain means a company either follows the Code or explains publicly why not",
          "An audit committee should be composed of independent non-executive directors",
        ],
        workedProblem: {
          scenario:
            "A fast-growing tech firm is run by its founder, who makes all major decisions personally, keeps few written procedures, and rewards loyalty. The board is the founder plus two friends; there are no independent directors.",
          steps: [
            "Identify the culture: central figure, few rules, decisions radiate from the centre → power culture (Handy)",
            "Identify structure implications: informal, entrepreneurial, likely simple structure (Mintzberg's strategic apex dominant)",
            "Assess governance: no separation of roles, no independent NEDs, no audit committee → weak governance",
          ],
          conclusion:
            "The firm exhibits a power culture with a simple structure and weak corporate governance; as it grows it will need role/task elements and independent NEDs.",
          markingNotes: [
            "Correct culture type identified — power culture",
            "Governance weaknesses correctly linked to absence of NEDs and combined roles",
          ],
        },
      },
      {
        id: "bt-sn2",
        title: "Environmental and competitive analysis frameworks",
        testPointIds: ["bt-tp2"],
        explanation: [
          "The macro-environment is captured by PESTEL: Political (government stability, trade policy), Economic (interest rates, inflation, growth), Social (demographics, tastes), Technological (automation, R&D), Environmental (climate, sustainability regulation) and Legal (employment, competition law). The examiner tests boundary cases — a carbon tax could be Political, Environmental or Legal, so read the emphasis of the stem.",
          "The micro-environment (industry competition) is Porter's five forces: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and competitive rivalry. Each force is raised or lowered by specific conditions — low capital requirements raise the threat of entry; a concentrated supplier base raises supplier power; low switching costs raise buyer power.",
          "Stakeholder analysis uses Mendelow's matrix, plotting power against interest. Key players (high power, high interest) must be managed closely; those with high power but low interest must be kept satisfied; high interest but low power kept informed; low-low need only minimal effort. The examiner often gives a stakeholder's attributes and asks for the correct strategy.",
        ],
        keyRules: [
          "Assign each factor to the single best PESTEL heading based on the stem's emphasis",
          "A force is 'high' when it squeezes industry profitability",
          "Mendelow strategy follows directly from the power/interest quadrant",
        ],
      },
      {
        id: "bt-sn3",
        title: "Control, fraud and the finance function",
        testPointIds: ["bt-tp3"],
        explanation: [
          "The finance function does more than record transactions: it reports to stakeholders, manages treasury and cash, produces management accounting for decisions, and (in larger entities) provides internal audit. BT expects you to place a described task in the right sub-function and to see how internal audit differs from external audit (internal serves management and is ongoing; external gives an independent opinion to shareholders).",
          "Internal controls are classified by timing and purpose: preventive controls stop errors (authorisation limits, segregation of duties), detective controls find them (reconciliations, exception reports), and corrective controls fix them (back-ups, follow-up procedures). Segregation of duties — separating authorisation, recording and custody — is the control most often tested because it removes the opportunity for one person to both commit and conceal fraud.",
          "Fraud requires three conditions (the fraud triangle): opportunity (weak controls), motive or pressure (financial need, targets), and rationalisation (the fraudster justifies it). Controls mainly attack opportunity. Remember internal control's inherent limits: collusion between staff, management override, human error, and the cost-benefit constraint mean no system gives absolute assurance.",
        ],
        keyRules: [
          "Segregation of duties separates authorisation, custody and recording",
          "Controls attack the 'opportunity' leg of the fraud triangle",
          "Internal control gives reasonable, not absolute, assurance",
        ],
        workedProblem: {
          scenario:
            "In a small sales office, one clerk raises purchase orders, receives goods, approves invoices and updates the ledger. Suppliers are occasionally paid twice.",
          steps: [
            "Identify the weakness: no segregation of duties — one person controls the whole cycle",
            "Link to fraud triangle: this creates opportunity for error and fraud",
            "Recommend controls: split ordering, receiving, approval and recording between staff; add supplier-statement reconciliations (detective)",
          ],
          conclusion:
            "The double payments stem from a lack of segregation of duties; splitting the cycle and adding reconciliations removes the opportunity and detects errors.",
          markingNotes: [
            "Segregation of duties identified as the missing preventive control",
            "A detective control (reconciliation) also proposed",
          ],
        },
      },
      {
        id: "bt-sn4",
        title: "People, motivation, leadership and ethics",
        testPointIds: ["bt-tp4"],
        explanation: [
          "Motivation theory splits into content theories (what motivates) and process theories (how). Maslow's hierarchy rises from physiological to self-actualisation; Herzberg separates hygiene factors (pay, conditions — their absence demotivates but their presence does not motivate) from motivators (achievement, recognition, responsibility). Vroom's expectancy theory (a process theory) says motivation depends on expectancy, instrumentality and valence.",
          "Leadership models to recognise include Blake and Mouton's managerial grid (concern for people vs task, with 9,9 the ideal team management), Adair's action-centred leadership (balancing task, team and individual needs), and situational leadership (adjusting style to follower readiness). The exam gives behaviours and asks you to place the manager on the model.",
          "Professional ethics is examined through the five fundamental principles and the threats to them. You must be able to name the threatened principle and the threat category. For example, preparing accounts and then auditing them is a self-review threat to objectivity; a long relationship with a client is a familiarity threat. Safeguards reduce threats to an acceptable level or the accountant must decline/withdraw.",
        ],
        keyRules: [
          "Hygiene factors prevent dissatisfaction; motivators create satisfaction",
          "Name both the fundamental principle and the threat category when asked",
          "If safeguards cannot reduce a threat to an acceptable level, decline the engagement",
        ],
      },
    ],
    examPractice: [
      {
        id: "bt-ep1",
        testPointIds: ["bt-tp1", "bt-tp2"],
        style: "Objective test (2-mark MCQ) with reasoning",
        question:
          "A manufacturer organises staff into permanent departments (production, sales, finance) each led by a specialist, and enforces detailed written procedures. Which structure and Handy culture best describe it? A) Divisional / task; B) Functional / role; C) Matrix / power; D) Functional / power.",
        answerPlan: [
          "Identify grouping basis: by specialism → functional",
          "Identify culture signal: detailed written procedures → role culture",
          "Match to option",
        ],
        modelAnswer:
          "The correct answer is B. Grouping staff by specialism (production, sales, finance) is a functional structure, not divisional (which groups by product/region) or matrix (dual reporting). The emphasis on detailed written procedures signals a role culture in Handy's model, where rules and job descriptions dominate — not a power culture (central figure, few rules) or task culture (project teams).",
        markingGuide: [
          "1 mark: structure correctly identified as functional",
          "1 mark: culture correctly identified as role (both required for the 2-mark item)",
        ],
      },
      {
        id: "bt-ep2",
        testPointIds: ["bt-tp3"],
        style: "Objective test — multiple response",
        question:
          "Which TWO of the following are detective controls? (i) Authorisation limits on purchase orders; (ii) Monthly bank reconciliations; (iii) Segregation of duties; (iv) Exception reports listing overdue balances.",
        answerPlan: [
          "Recall definition: detective controls find errors after they occur",
          "Classify each item by timing",
          "Select exactly two",
        ],
        modelAnswer:
          "The two detective controls are (ii) monthly bank reconciliations and (iv) exception reports. Both operate after transactions to find errors or anomalies. Authorisation limits (i) and segregation of duties (iii) are preventive controls that stop errors occurring in the first place.",
        markingGuide: [
          "1 mark: reconciliations selected",
          "1 mark: exception reports selected (no mark if a preventive control is also chosen where the item demands exactly two)",
        ],
      },
      {
        id: "bt-ep3",
        testPointIds: ["bt-tp4"],
        style: "Objective test applying ethics",
        question:
          "An ACCA member in practice is asked to audit financial statements that the same member prepared last month. Which threat to objectivity arises, and what is the primary safeguard?",
        answerPlan: [
          "Identify that preparing then auditing own work creates a specific threat",
          "Name the threat category",
          "State the safeguard",
        ],
        modelAnswer:
          "Preparing the statements and then auditing them creates a self-review threat to objectivity, because the member would be reviewing their own work and is unlikely to identify their own errors. The primary safeguard is to use different personnel for the preparation and the audit, or to decline one of the engagements; if no safeguard can reduce the threat to an acceptable level the member should not perform the audit.",
        markingGuide: [
          "1 mark: self-review threat correctly identified",
          "1 mark: appropriate safeguard (separate teams / decline) stated",
        ],
      },
    ],
  }),

  "acca-all-m2": examDepth({
    testPoints: [
      {
        id: "ma-tp1",
        title: "Cost classification and cost behaviour",
        priority: "critical",
        examinerFocus:
          "Whether you can classify costs by behaviour (fixed, variable, semi-variable, stepped) and split a semi-variable cost using high-low, then use the result in a computation.",
        typicalQuestionForms: [
          "High-low item giving activity levels and total costs, asking for variable cost per unit or total fixed cost",
          "Item classifying a described cost by behaviour or by function (direct/indirect, product/period)",
        ],
        mustKnow: [
          "High-low method: variable cost per unit = (cost at high − cost at low) / (units high − units low), then fixed = total − variable",
          "Stepped fixed costs stay fixed over a range then jump; handle by using costs at comparable activity levels",
          "Cost objects, cost units, direct vs indirect (prime cost = direct materials + direct labour + direct expenses)",
        ],
        scoringActions: [
          "Strip out any step change in fixed cost before applying high-low",
          "Label the answer with units (per unit vs total) to avoid choosing the wrong distractor",
        ],
      },
      {
        id: "ma-tp2",
        title: "Absorption versus marginal costing",
        priority: "critical",
        examinerFocus:
          "Computing profit under both methods and reconciling the difference caused by fixed overhead in inventory movements.",
        typicalQuestionForms: [
          "Item asking for the profit difference given a change in inventory units and the fixed overhead absorption rate (OAR)",
          "Item asking which method reports higher profit when inventory rises or falls",
        ],
        mustKnow: [
          "Profit difference = change in inventory units × fixed OAR per unit",
          "When inventory increases, absorption profit > marginal profit (fixed cost carried forward); when it falls, the reverse",
          "OAR = budgeted fixed overhead / budgeted activity; under/over-absorption arises when actuals differ from budget",
        ],
        scoringActions: [
          "Compute the inventory movement in units first, then multiply by the fixed OAR",
          "State the direction (which method is higher) explicitly to confirm the sign",
        ],
      },
      {
        id: "ma-tp3",
        title: "Overhead apportionment, absorption and variances",
        priority: "high",
        examinerFocus:
          "Allocating and apportioning overheads to cost centres, calculating the OAR, and computing under/over-absorption.",
        typicalQuestionForms: [
          "Item apportioning a general overhead across departments on a stated basis and reabsorbing service-centre costs",
          "Item computing under- or over-absorbed overhead from actual vs absorbed figures",
        ],
        mustKnow: [
          "Absorbed overhead = actual activity × predetermined OAR",
          "Over-absorption when absorbed > actual overhead (credit to profit); under-absorption when absorbed < actual",
          "Reciprocal service department costs handled by repeated distribution or the algebraic method",
        ],
        scoringActions: [
          "Use the predetermined (budgeted) OAR on actual activity, not an actual rate",
          "Check the sign: absorbed minus actual gives over-absorption when positive",
        ],
      },
      {
        id: "ma-tp4",
        title: "Basic variance analysis and budgeting",
        priority: "high",
        examinerFocus:
          "Calculating simple material, labour and overhead variances and flexing a budget to compare like with like.",
        typicalQuestionForms: [
          "Item computing a material price/usage or labour rate/efficiency variance",
          "Item flexing a budget to actual activity before comparing costs",
        ],
        mustKnow: [
          "Material price variance = (standard price − actual price) × actual quantity purchased/used; usage = (standard qty for output − actual qty) × standard price",
          "Labour rate = (standard rate − actual rate) × actual hours; efficiency = (standard hours for output − actual hours) × standard rate",
          "Flex the budget to actual output before computing cost variances",
        ],
        scoringActions: [
          "Flex first, then compare — never compare a fixed budget to actual volume",
          "Sign the variance F or A and check it makes sense against the scenario",
        ],
      },
      {
        id: "ma-tp5",
        title: "Short-term decisions: CVP and relevant cost",
        priority: "medium",
        examinerFocus:
          "Applying cost-volume-profit analysis (break-even, margin of safety, target profit) and identifying relevant costs for a decision.",
        typicalQuestionForms: [
          "Break-even units/revenue or target-profit item using contribution",
          "Item selecting relevant costs (future, incremental, cash) and rejecting sunk/committed costs",
        ],
        mustKnow: [
          "Break-even units = fixed costs / contribution per unit; C/S ratio = contribution / sales",
          "Margin of safety = (budgeted − break-even) sales; target-profit units = (fixed + target profit) / contribution per unit",
          "Relevant costs are future, incremental cash flows; ignore sunk costs and unavoidable committed costs",
        ],
        scoringActions: [
          "Compute contribution per unit before any break-even work",
          "Cross out sunk and committed costs on the scenario to isolate relevant amounts",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 70%+; MA is computational so accuracy on formulas earns marks quickly and reliably.",
      timeBudget:
        "2 hours across the objective-test items — about 1.2 minutes per mark; give multi-step calculations up to ~2 minutes and flag anything longer.",
      answerSequence: [
        "Answer all knowledge/definition items and quick calculations first",
        "Return to multi-step calculations (high-low, marginal reconciliations) with clear workings on the scratchpad",
        "Guess any remaining flagged items — no negative marking",
      ],
      qualityChecks: [
        "Confirm per-unit vs total and F vs A labels match what the item asks",
        "Sanity-check magnitudes (a variance should not exceed the relevant total cost)",
      ],
    },
    studyNotes: [
      {
        id: "ma-sn1",
        title: "Cost behaviour and the high-low method",
        testPointIds: ["ma-tp1"],
        explanation: [
          "Every MA calculation starts with understanding how a cost behaves. Fixed costs stay constant in total over the relevant range; variable costs change proportionately with activity; semi-variable costs have both elements; and stepped fixed costs are fixed over a band then jump. Getting the behaviour right determines which formula applies later.",
          "The high-low method separates the fixed and variable elements of a semi-variable cost using only the highest and lowest activity levels. The variable cost per unit is the change in total cost divided by the change in units; the fixed element is then whatever is left at either activity level. A common trap is a step in fixed costs between the two points — you must adjust for it before dividing, or the variable rate will be wrong.",
          "Cost classification by function matters too: prime cost is the sum of direct materials, direct labour and direct expenses; production overhead is indirect production cost; and period costs (e.g. selling and administration) are written off in the period rather than carried in inventory.",
        ],
        keyRules: [
          "Variable cost per unit = (high cost − low cost) / (high units − low units)",
          "Remove any step change in fixed cost before applying high-low",
          "Prime cost = direct materials + direct labour + direct expenses",
        ],
        workedProblem: {
          scenario:
            "Total cost is $19,000 at 4,000 units and $27,000 at 8,000 units. Fixed costs step up by $2,000 once output exceeds 6,000 units. Find the variable cost per unit and the fixed cost below 6,000 units.",
          steps: [
            "Adjust the high point for the step: remove $2,000 → $27,000 − $2,000 = $25,000 comparable to the low point's fixed base",
            "Variable per unit = ($25,000 − $19,000) / (8,000 − 4,000) = $6,000 / 4,000 = $1.50",
            "Fixed (below 6,000) = $19,000 − (4,000 × $1.50) = $19,000 − $6,000 = $13,000",
          ],
          conclusion:
            "Variable cost is $1.50 per unit and fixed cost is $13,000 below 6,000 units (rising to $15,000 above).",
          markingNotes: [
            "Step adjustment applied before high-low",
            "Correct variable rate and fixed cost derived",
          ],
        },
      },
      {
        id: "ma-sn2",
        title: "Marginal vs absorption costing and reconciliation",
        testPointIds: ["ma-tp2", "ma-tp3"],
        explanation: [
          "Marginal costing values inventory at variable production cost only and treats fixed production overhead as a period cost. Absorption costing includes a share of fixed production overhead in each unit via the overhead absorption rate (OAR). The two methods therefore report different profits whenever inventory levels change.",
          "The reconciling difference is precisely the fixed overhead held in the movement of inventory: difference in profit = change in inventory units × fixed OAR per unit. When inventory rises, absorption costing defers fixed overhead into closing inventory, so absorption profit exceeds marginal profit; when inventory falls, previously deferred fixed overhead is released and marginal profit is higher.",
          "Absorption costing also produces under/over-absorption. The OAR is set in advance from budget; if actual activity or actual overhead differs from budget, the overhead absorbed will not equal the overhead incurred. Over-absorption (absorbed > incurred) is credited back in the income statement, under-absorption is charged.",
        ],
        keyRules: [
          "Profit difference = change in inventory units × fixed OAR per unit",
          "Inventory up → absorption profit higher; inventory down → marginal profit higher",
          "Over/under-absorption = overhead absorbed − overhead incurred",
        ],
        workedProblem: {
          scenario:
            "A firm produces 10,000 units, sells 9,000, with fixed production overhead of $50,000 budgeted over 10,000 units. Reconcile marginal and absorption profit.",
          steps: [
            "Fixed OAR = $50,000 / 10,000 = $5 per unit",
            "Inventory increase = 10,000 − 9,000 = 1,000 units",
            "Profit difference = 1,000 × $5 = $5,000, with absorption higher",
          ],
          conclusion:
            "Absorption profit is $5,000 higher than marginal profit because $5,000 of fixed overhead is deferred in the 1,000-unit closing inventory increase.",
          markingNotes: [
            "OAR correctly calculated",
            "Direction (absorption higher) and $5,000 amount correct",
          ],
        },
      },
      {
        id: "ma-sn3",
        title: "Standard costing variances and flexed budgets",
        testPointIds: ["ma-tp4"],
        explanation: [
          "A variance compares actual results with a standard flexed to actual output. The golden rule is to flex first: comparing a fixed budget set for one volume with actual costs at a different volume mixes a volume effect with cost efficiency and gives a meaningless variance.",
          "Material variances split into price (difference between standard and actual price on the quantity bought or used) and usage (difference between standard quantity for actual output and actual quantity, at standard price). Labour variances mirror this: a rate variance on actual hours and an efficiency variance on hours saved or lost, valued at the standard rate.",
          "Always sign each variance as favourable (F) or adverse (A) and interpret it. An adverse usage variance combined with a favourable price variance, for example, may indicate cheaper, lower-quality material causing more waste — the examiner values this cause-and-effect reasoning even in objective items.",
        ],
        keyRules: [
          "Material usage = (std qty for output − actual qty) × standard price",
          "Labour efficiency = (std hours for output − actual hours) × standard rate",
          "Flex the budget to actual output before comparing",
        ],
      },
      {
        id: "ma-sn4",
        title: "CVP analysis and relevant costing for decisions",
        testPointIds: ["ma-tp5"],
        explanation: [
          "Cost-volume-profit analysis rests on contribution (sales less variable cost). Break-even in units is fixed costs divided by contribution per unit; in revenue it is fixed costs divided by the contribution-to-sales ratio. To hit a target profit, add it to fixed costs before dividing. The margin of safety measures how far sales can fall before a loss.",
          "Relevant costing supports one-off decisions such as accepting a special order or making versus buying. A relevant cost is a future, incremental cash flow that differs between the options. Sunk costs (already incurred), committed costs (unavoidable), and non-cash items such as depreciation are excluded. Opportunity cost — the contribution forgone from the best alternative use of a scarce resource — must be included.",
          "In multi-product settings, when a resource is scarce, rank products by contribution per unit of the limiting factor, not by contribution per unit alone, to maximise total contribution.",
        ],
        keyRules: [
          "Break-even units = fixed costs / contribution per unit",
          "Relevant cost = future, incremental, cash flow only",
          "Rank by contribution per unit of the limiting factor when a resource is scarce",
        ],
        workedProblem: {
          scenario:
            "A product sells for $20, variable cost $12, and fixed costs are $48,000. Find break-even units and the units needed for a $16,000 target profit.",
          steps: [
            "Contribution per unit = $20 − $12 = $8",
            "Break-even = $48,000 / $8 = 6,000 units",
            "Target-profit units = ($48,000 + $16,000) / $8 = 8,000 units",
          ],
          conclusion:
            "Break-even is 6,000 units; 8,000 units are needed to earn the $16,000 target profit.",
          markingNotes: [
            "Contribution per unit correct",
            "Both break-even and target-profit volumes correct",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ma-ep1",
        testPointIds: ["ma-tp2"],
        style: "Objective test — calculation",
        question:
          "Fixed production overhead is $80,000 budgeted over 20,000 units. Production was 20,000 units and sales 18,000 units. By how much does absorption profit differ from marginal profit, and which is higher?",
        answerPlan: [
          "Compute fixed OAR per unit",
          "Compute inventory movement in units",
          "Multiply and state direction",
        ],
        modelAnswer:
          "Fixed OAR = $80,000 / 20,000 = $4 per unit. Inventory rose by 20,000 − 18,000 = 2,000 units. Profit difference = 2,000 × $4 = $8,000. Because inventory increased, fixed overhead is deferred in closing inventory, so absorption profit is $8,000 higher than marginal profit.",
        markingGuide: [
          "1 mark: OAR of $4 and inventory increase of 2,000 units",
          "1 mark: $8,000 difference with absorption higher",
        ],
      },
      {
        id: "ma-ep2",
        testPointIds: ["ma-tp4"],
        style: "Objective test — variance",
        question:
          "Standard material cost is 3 kg at $5/kg per unit. To produce 1,000 units the firm used 3,200 kg costing $15,040. Calculate the material price and usage variances.",
        answerPlan: [
          "Compute actual price per kg",
          "Price variance on actual quantity",
          "Usage variance at standard price",
        ],
        modelAnswer:
          "Actual price = $15,040 / 3,200 = $4.70/kg. Price variance = ($5.00 − $4.70) × 3,200 = $960 F. Standard quantity for 1,000 units = 3,000 kg; usage variance = (3,000 − 3,200) × $5 = $1,000 A. The favourable price and adverse usage may indicate cheaper material causing more waste.",
        markingGuide: [
          "1 mark: price variance $960 F",
          "1 mark: usage variance $1,000 A",
        ],
      },
      {
        id: "ma-ep3",
        testPointIds: ["ma-tp5"],
        style: "Objective test — relevant cost",
        question:
          "A special order needs 100 kg of a material held in inventory. It originally cost $8/kg; it would cost $11/kg to replace and is in regular use. What is the relevant cost of the material for the order?",
        answerPlan: [
          "Determine if the material is in regular use",
          "Choose replacement cost vs historic cost",
          "Compute total",
        ],
        modelAnswer:
          "Because the material is in regular use, using it on the order means it must be replaced, so the relevant cost is the replacement cost, not the historic cost. Relevant cost = 100 kg × $11 = $1,100. The original $8/kg is a sunk cost and is ignored.",
        markingGuide: [
          "1 mark: replacement cost identified as relevant (regular use)",
          "1 mark: $1,100 with historic cost correctly ignored",
        ],
      },
    ],
  }),

  "acca-all-m3": examDepth({
    testPoints: [
      {
        id: "fa-tp1",
        title: "Double-entry, the accounting equation and books of prime entry",
        priority: "critical",
        examinerFocus:
          "Whether you can record transactions with correct debits and credits, maintain the accounting equation, and post from prime entry to the ledgers.",
        typicalQuestionForms: [
          "Item giving a transaction and asking for the correct double entry",
          "Item testing the effect of a transaction on the accounting equation (assets = liabilities + capital)",
        ],
        mustKnow: [
          "Debit increases assets and expenses; credit increases liabilities, capital and income",
          "Assets = Liabilities + Capital, and every transaction keeps it in balance",
          "Books of prime entry (sales/purchase day books, cash book, journal) feed the nominal ledger",
        ],
        scoringActions: [
          "Write the two-sided entry before choosing an option",
          "Confirm the equation still balances after the entry",
        ],
      },
      {
        id: "fa-tp2",
        title: "Period-end adjustments: accruals, prepayments, depreciation, irrecoverable debts",
        priority: "critical",
        examinerFocus:
          "Applying the accruals concept to adjust for amounts owed/paid in advance, depreciation methods, and receivables allowances.",
        typicalQuestionForms: [
          "Item computing the profit-or-loss charge after accrual/prepayment adjustment",
          "Item computing depreciation (straight-line or reducing-balance) or the movement in the allowance for receivables",
        ],
        mustKnow: [
          "Accrual = expense incurred not yet paid (liability); prepayment = paid in advance (asset)",
          "Straight-line depreciation = (cost − residual) / useful life; reducing balance = rate × carrying amount",
          "Irrecoverable debts written off to P/L; allowance adjusted, only the movement hits P/L",
        ],
        scoringActions: [
          "Time-apportion accruals and prepayments to the correct period",
          "For allowances, charge only the increase/decrease, not the full balance",
        ],
      },
      {
        id: "fa-tp3",
        title: "Control accounts, reconciliations and correction of errors",
        priority: "high",
        examinerFocus:
          "Reconciling receivables/payables control accounts and the bank, and correcting errors via the journal and suspense account.",
        typicalQuestionForms: [
          "Item reconciling a control account balance to the list of ledger balances",
          "Item clearing a suspense account by identifying the errors affecting the trial balance",
        ],
        mustKnow: [
          "Errors not revealed by the trial balance: omission, commission, principle, original entry, compensating, reversal",
          "Only one-sided or unequal errors create a suspense balance",
          "Bank reconciliation: adjust the cash book for bank charges/interest, then reconcile timing differences (unpresented cheques, outstanding lodgements)",
        ],
        scoringActions: [
          "Decide whether each error affects the trial balance before touching the suspense account",
          "Adjust the cash book first, then reconcile to the bank statement",
        ],
      },
      {
        id: "fa-tp4",
        title: "Preparing financial statements for sole traders and companies",
        priority: "high",
        examinerFocus:
          "Assembling the statement of profit or loss and statement of financial position, including company-specific items (share capital, reserves, tax).",
        typicalQuestionForms: [
          "Item computing a figure in the financial statements after adjustments",
          "Item on company items: share issues, rights/bonus issues, dividends, taxation",
        ],
        mustKnow: [
          "IAS 1 presentation split into current and non-current",
          "Share premium arises on issue above nominal value; bonus issues use reserves, rights issues raise cash",
          "Retained earnings = opening + profit − dividends; proposed dividends are disclosed, not accrued unless declared",
        ],
        scoringActions: [
          "Process all adjustments before slotting figures into the statements",
          "Keep equity components (share capital, share premium, retained earnings) separate",
        ],
      },
      {
        id: "fa-tp5",
        title: "Statement of cash flows, ratios and simple consolidation",
        priority: "medium",
        examinerFocus:
          "Preparing/interpreting a statement of cash flows, calculating key ratios, and performing a basic consolidation (goodwill, NCI).",
        typicalQuestionForms: [
          "Item deriving cash generated from operations (indirect method) or a specific cash flow line",
          "Item computing goodwill on acquisition or a group figure with a single subsidiary",
        ],
        mustKnow: [
          "Indirect method: profit before tax + depreciation ± working-capital changes − interest/tax paid",
          "Goodwill = consideration + NCI − fair value of net assets acquired",
          "Core ratios: gross/operating margin, current ratio, gearing, receivables/inventory days",
        ],
        scoringActions: [
          "Add back non-cash items and reverse the direction of working-capital movements",
          "Build the goodwill calculation line by line at the acquisition date",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 70%+; FA rewards clean, methodical double-entry and adjustment work where marks are highly predictable.",
      timeBudget:
        "2 hours of objective-test items — about 1.2 minutes per mark; give multi-step preparation items up to ~2.5 minutes.",
      answerSequence: [
        "Answer definition and single-entry items first",
        "Tackle adjustment and preparation calculations with quick T-account workings",
        "Return to any flagged consolidation/cash-flow items and never leave blanks",
      ],
      qualityChecks: [
        "Confirm the accounting equation still balances after each entry",
        "Check debits equal credits and that adjustments are time-apportioned correctly",
      ],
    },
    studyNotes: [
      {
        id: "fa-sn1",
        title: "The double-entry engine and the accounting equation",
        testPointIds: ["fa-tp1"],
        explanation: [
          "Financial accounting is built on the accounting equation: assets equal liabilities plus capital. Every transaction has two equal and opposite effects that keep the equation in balance. Debits increase assets and expenses; credits increase liabilities, capital and income. Fluency here is the single biggest predictor of success in FA and everything after it.",
          "Transactions first enter the books of prime entry — the sales and purchase day books, the cash book, the petty cash book and the journal — before being posted in total or individually to the nominal ledger. The receivables and payables ledgers are memorandum records; their totals are mirrored by the control accounts in the nominal ledger.",
          "When you meet a transaction in the exam, resolve it into its two sides before looking at the answer options. 'Bought goods on credit' is Dr purchases, Cr payables; 'owner introduces cash' is Dr cash, Cr capital. This discipline eliminates the reversed-entry distractors the examiner plants.",
        ],
        keyRules: [
          "Assets = Liabilities + Capital at all times",
          "Debit assets/expenses; credit liabilities/capital/income",
          "Prime entry books feed the nominal ledger; control accounts mirror the subsidiary ledgers",
        ],
        workedProblem: {
          scenario:
            "A business pays $1,200 cash for insurance covering 12 months, three of which fall after the year end. Show the entries and the year-end adjustment.",
          steps: [
            "Initial payment: Dr insurance expense $1,200, Cr cash $1,200",
            "Prepayment at year end = 3/12 × $1,200 = $300",
            "Adjustment: Dr prepayment (asset) $300, Cr insurance expense $300",
          ],
          conclusion:
            "Insurance expense in profit or loss is $900 and a prepayment asset of $300 is carried to next year.",
          markingNotes: [
            "Correct initial double entry",
            "Prepayment of $300 correctly time-apportioned and posted",
          ],
        },
      },
      {
        id: "fa-sn2",
        title: "Period-end adjustments",
        testPointIds: ["fa-tp2"],
        explanation: [
          "The accruals concept requires income and expenses to be recognised when earned or incurred, not when cash moves. Accruals add an expense (and a liability) for amounts owed but unpaid; prepayments remove an expense (creating an asset) for amounts paid in advance. Both must be time-apportioned to the reporting period.",
          "Depreciation spreads the cost of a non-current asset over its useful life. Straight-line charges (cost − residual value)/useful life each year; reducing-balance applies a fixed percentage to the carrying amount, giving higher charges early on. On disposal, compare sale proceeds with carrying amount to record a profit or loss on disposal.",
          "Receivables require judgement: specific irrecoverable debts are written off directly to profit or loss, while a general allowance reflects expected non-recovery. Only the movement in the allowance is charged (or credited) to profit or loss each year — a frequent exam trap is charging the whole closing allowance.",
        ],
        keyRules: [
          "Accrual = liability for expense incurred; prepayment = asset for expense paid early",
          "Straight-line depreciation = (cost − residual)/useful life",
          "Charge only the movement in the receivables allowance to profit or loss",
        ],
        workedProblem: {
          scenario:
            "Trade receivables are $50,000. A $2,000 balance is irrecoverable and is written off. A 4% allowance is required on the remainder; the opening allowance was $1,500.",
          steps: [
            "Write off: Dr irrecoverable debts $2,000, Cr receivables $2,000 → receivables now $48,000",
            "Required allowance = 4% × $48,000 = $1,920",
            "Movement = $1,920 − $1,500 = $420 increase, charged to P/L",
          ],
          conclusion:
            "Profit or loss is charged $2,000 (write-off) + $420 (allowance increase) = $2,420; the statement of financial position shows receivables of $48,000 less an allowance of $1,920.",
          markingNotes: [
            "Write-off processed before calculating the allowance",
            "Only the $420 movement charged, not the full $1,920",
          ],
        },
      },
      {
        id: "fa-sn3",
        title: "Control accounts, bank reconciliation and errors",
        testPointIds: ["fa-tp3"],
        explanation: [
          "Control accounts and reconciliations are the accountant's error-detection tools. The receivables control account total should equal the sum of individual customer balances; a difference points to a posting error in one or the other. The bank reconciliation compares the cash book with the bank statement, first correcting the cash book for items the business did not know about (charges, interest, direct debits) and then explaining timing differences such as unpresented cheques and outstanding lodgements.",
          "Not all errors disturb the trial balance. Errors of omission, commission, principle, original entry, compensating errors and complete reversals leave the trial balance balanced because both sides are equally affected. Only one-sided errors or unequal postings unbalance it and are cleared through a suspense account.",
          "The exam technique is to decide, for each error, whether the trial balance is affected before deciding whether the suspense account is involved. This prevents the common mistake of routing balanced errors through suspense.",
        ],
        keyRules: [
          "Six errors do not affect the trial balance; only one-sided/unequal errors create a suspense balance",
          "Adjust the cash book first, then reconcile timing differences to the bank statement",
          "Control account total should equal the list of subsidiary ledger balances",
        ],
      },
      {
        id: "fa-sn4",
        title: "Financial statements, cash flows and basic consolidation",
        testPointIds: ["fa-tp4", "fa-tp5"],
        explanation: [
          "IAS 1 requires a structured statement of profit or loss and a statement of financial position split into current and non-current items. For companies, equity is broken into share capital (at nominal value), share premium (proceeds above nominal), and retained earnings (accumulated profit less dividends). A bonus issue capitalises reserves and raises no cash; a rights issue raises cash at a discount to market price.",
          "The statement of cash flows (indirect method) reconciles profit to cash: start with profit before tax, add back non-cash items such as depreciation, adjust for working-capital movements (an increase in inventory or receivables reduces cash; an increase in payables increases cash), then deduct interest and tax paid. Investing and financing sections follow.",
          "A simple consolidation combines a parent and one subsidiary line by line. Goodwill equals the consideration transferred plus the non-controlling interest less the fair value of the subsidiary's net assets at acquisition. The group reserves add the parent's reserves to the group's share of the subsidiary's post-acquisition reserves.",
        ],
        keyRules: [
          "Retained earnings = opening + profit − dividends",
          "Cash from operations = PBT + depreciation ± working-capital changes − interest − tax paid",
          "Goodwill = consideration + NCI − fair value of net assets acquired",
        ],
        workedProblem: {
          scenario:
            "P buys 80% of S for $600,000. S's net assets at acquisition are $650,000 at fair value. NCI is measured at its proportionate share of net assets. Calculate goodwill.",
          steps: [
            "NCI at acquisition = 20% × $650,000 = $130,000",
            "Consideration + NCI = $600,000 + $130,000 = $730,000",
            "Goodwill = $730,000 − $650,000 = $80,000",
          ],
          conclusion:
            "Goodwill on acquisition is $80,000, recognised as a non-current asset and tested annually for impairment.",
          markingNotes: [
            "NCI correctly measured at proportionate share",
            "Goodwill of $80,000 correctly derived",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "fa-ep1",
        testPointIds: ["fa-tp2"],
        style: "Objective test — adjustment",
        question:
          "A machine costing $40,000 with a $4,000 residual value and an 8-year life is depreciated straight-line. After 3 full years it is sold for $28,000. Calculate the profit or loss on disposal.",
        answerPlan: [
          "Annual depreciation",
          "Accumulated depreciation after 3 years and carrying amount",
          "Compare proceeds to carrying amount",
        ],
        modelAnswer:
          "Annual depreciation = ($40,000 − $4,000)/8 = $4,500. After 3 years accumulated depreciation = $13,500, so carrying amount = $40,000 − $13,500 = $26,500. Proceeds of $28,000 exceed carrying amount by $1,500, giving a profit on disposal of $1,500.",
        markingGuide: [
          "1 mark: carrying amount of $26,500",
          "1 mark: profit on disposal of $1,500",
        ],
      },
      {
        id: "fa-ep2",
        testPointIds: ["fa-tp3"],
        style: "Objective test — errors/suspense",
        question:
          "The trial balance did not balance and a suspense account was opened. Which ONE of these errors would have caused a suspense balance? A) A sale omitted entirely; B) Purchases debited to the wrong supplier; C) Discount received of $90 debited to discount received; D) A payment posted as $500 debit and $50 credit.",
        answerPlan: [
          "Recall which errors leave the trial balance balanced",
          "Identify the one-sided/unequal error",
        ],
        modelAnswer:
          "The answer is D. A payment posted as a $500 debit and a $50 credit is an unequal entry that unbalances the trial balance and requires a suspense account. Omission (A), commission (B) and even a reversed/wrong-side posting that is equal (C would be a debit where a credit was needed but of equal amount on both sides only if double-sided) generally leave the trial balance balanced. Option D is the clear unequal-postings error.",
        markingGuide: [
          "1 mark: option D identified",
          "1 mark: reasoning that unequal postings unbalance the trial balance",
        ],
      },
      {
        id: "fa-ep3",
        testPointIds: ["fa-tp5"],
        style: "Objective test — cash flow",
        question:
          "Profit before tax is $120,000; depreciation $30,000; inventory rose $10,000; receivables fell $5,000; payables rose $8,000. Interest paid was $4,000 and tax paid $20,000. Calculate net cash from operating activities (indirect method).",
        answerPlan: [
          "Add back depreciation",
          "Adjust for working-capital movements",
          "Deduct interest and tax paid",
        ],
        modelAnswer:
          "Start with PBT $120,000 + depreciation $30,000 = $150,000. Working capital: inventory up $10,000 (−), receivables down $5,000 (+), payables up $8,000 (+), net +$3,000 → $153,000. Deduct interest paid $4,000 and tax paid $20,000 → net cash from operations = $129,000.",
        markingGuide: [
          "1 mark: correct working-capital adjustments (+$3,000 net)",
          "1 mark: $129,000 after interest and tax paid",
        ],
      },
    ],
  }),

  "acca-all-m4": examDepth({
    testPoints: [
      {
        id: "lw-tp1",
        title: "English legal system, sources of law and the law of obligations",
        priority: "high",
        examinerFocus:
          "Recall and application of the UK court hierarchy, doctrine of precedent, and the essentials of a valid contract and its terms.",
        typicalQuestionForms: [
          "Item on which court binds another or on the ratio/obiter distinction",
          "Item identifying whether a valid contract exists (offer, acceptance, consideration, intention)",
        ],
        mustKnow: [
          "Court hierarchy and binding precedent: higher courts bind lower; ratio decidendi binds, obiter persuades",
          "Essentials of a contract: offer, acceptance, consideration, intention to create legal relations, capacity",
          "Invitation to treat vs offer; postal rule vs instantaneous communication of acceptance",
        ],
        scoringActions: [
          "Test each contract essential against the facts before concluding a contract exists",
          "Distinguish an invitation to treat (display, advert) from a genuine offer",
        ],
      },
      {
        id: "lw-tp2",
        title: "Breach of contract, remedies and the tort of negligence",
        priority: "high",
        examinerFocus:
          "Applying rules on terms (conditions/warranties), remoteness and measure of damages, and the three-part negligence test.",
        typicalQuestionForms: [
          "Item on the remedy for breach of a condition versus a warranty",
          "Item applying duty, breach and causation (including remoteness) in negligence",
        ],
        mustKnow: [
          "Condition breach allows repudiation and damages; warranty breach only damages",
          "Negligence: duty of care (Caparo), breach (reasonable person), causation and remoteness of damage",
          "Damages aim to put the claimant in the position as if the contract had been performed; mitigation is required",
        ],
        scoringActions: [
          "Classify the term as a condition or warranty to fix the remedy",
          "Work through duty → breach → causation in order for negligence items",
        ],
      },
      {
        id: "lw-tp3",
        title: "Employment law and agency",
        priority: "medium",
        examinerFocus:
          "Distinguishing employees from independent contractors, identifying wrongful/unfair dismissal, and the creation and authority of agents.",
        typicalQuestionForms: [
          "Item applying the tests for employment status or the grounds for fair dismissal",
          "Item on an agent's actual, apparent or usual authority",
        ],
        mustKnow: [
          "Tests of employment status: control, integration, and the multiple/economic-reality test",
          "Unfair dismissal requires a fair reason and fair procedure; wrongful dismissal is breach of the contract's notice terms",
          "Agency authority: actual (express/implied), apparent (holding out), and ratification",
        ],
        scoringActions: [
          "Apply the status tests to the facts rather than relying on the label used",
          "Match the described authority to the correct agency category",
        ],
      },
      {
        id: "lw-tp4",
        title: "Company formation, capital and directors' duties",
        priority: "critical",
        examinerFocus:
          "Corporate personality (Salomon), formation and constitution, share vs loan capital, and the statutory duties of directors.",
        typicalQuestionForms: [
          "Item on the consequences of separate corporate personality or lifting the veil",
          "Item identifying which statutory directors' duty is breached",
        ],
        mustKnow: [
          "Separate legal personality and limited liability (Salomon v Salomon); limited circumstances for lifting the veil",
          "Directors' statutory duties (CA 2006 ss.171–177): act within powers, promote success, independent judgement, care/skill, avoid conflicts, no benefits from third parties, declare interests",
          "Difference between shares (ownership, dividends) and debentures (debt, interest, priority on insolvency)",
        ],
        scoringActions: [
          "Name the specific numbered duty rather than 'breach of duty' generally",
          "Keep the company distinct from its members when analysing liability",
        ],
      },
      {
        id: "lw-tp5",
        title: "Insolvency, administration and corporate fraud",
        priority: "medium",
        examinerFocus:
          "Distinguishing winding-up routes, the order of priority of creditors, and the offences of fraudulent and wrongful trading.",
        typicalQuestionForms: [
          "Item ranking creditors on a liquidation or distinguishing administration from liquidation",
          "Item distinguishing wrongful trading from fraudulent trading",
        ],
        mustKnow: [
          "Order of priority: fixed-charge holders, liquidation costs, preferential creditors, floating-charge (subject to prescribed part), unsecured, then shareholders",
          "Wrongful trading: continuing to trade with no reasonable prospect of avoiding insolvent liquidation (civil); fraudulent trading requires intent to defraud",
          "Administration aims to rescue the company or achieve a better result than winding up",
        ],
        scoringActions: [
          "Apply the statutory priority order precisely when ranking claims",
          "Use 'intent to defraud' to separate fraudulent from wrongful trading",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 60%+; LW is an objective-test paper where precise recall of rules and correct application to short scenarios wins marks.",
      timeBudget:
        "2 hours of objective-test items — about 1.2 minutes per mark; do not dwell beyond ~2 minutes on any scenario item.",
      answerSequence: [
        "Clear knowledge-recall items first (definitions, court hierarchy, duties)",
        "Apply rules to scenario items, flagging any that require re-reading",
        "Return to flagged items and answer everything — no negative marking",
      ],
      qualityChecks: [
        "Re-read scenario stems for the precise legal issue being tested",
        "Confirm you have selected the exact number of options in multiple-response items",
      ],
    },
    studyNotes: [
      {
        id: "lw-sn1",
        title: "Legal system and contract formation",
        testPointIds: ["lw-tp1"],
        explanation: [
          "The English legal system is hierarchical: the Supreme Court binds the Court of Appeal, which binds the High Court, and so on. Under the doctrine of precedent, the binding element of a decision is the ratio decidendi (the legal reason for the decision); obiter dicta (things said 'by the way') are only persuasive. LW tests whether you can say which court binds which and what part of a judgment binds.",
          "A valid contract needs offer, acceptance, consideration, intention to create legal relations and capacity. Distinguish an offer (capable of acceptance) from an invitation to treat (a display of goods or an advertisement, which merely invites offers). Acceptance must be communicated; the postal rule makes posted acceptance effective on posting, whereas instantaneous methods take effect on receipt.",
          "Consideration must be sufficient but need not be adequate — the courts do not police the fairness of the bargain, only that something of value moves between the parties. Past consideration is generally not good consideration. These distinctions are the raw material of LW's contract questions.",
        ],
        keyRules: [
          "Ratio decidendi binds; obiter dicta only persuade",
          "A display or advert is normally an invitation to treat, not an offer",
          "Consideration must be sufficient but need not be adequate",
        ],
        workedProblem: {
          scenario:
            "A shop displays a jacket priced at $50 in error (it should be $500). A customer takes it to the till and demands to buy it at $50.",
          steps: [
            "Classify the display: goods on display are an invitation to treat, not an offer",
            "The customer's presentation at the till is the offer",
            "The shop can accept or reject; there is no binding contract at $50",
          ],
          conclusion:
            "The shop is not bound to sell at $50 because the price display was an invitation to treat; the customer made the offer, which the shop may reject.",
          markingNotes: [
            "Invitation to treat correctly identified",
            "Correct conclusion that no contract exists at the displayed price",
          ],
        },
      },
      {
        id: "lw-sn2",
        title: "Breach, remedies and negligence",
        testPointIds: ["lw-tp2"],
        explanation: [
          "Contract terms are classified as conditions (fundamental terms) or warranties (minor terms). Breach of a condition allows the innocent party to repudiate (treat the contract as ended) and claim damages; breach of a warranty allows only damages. Innominate terms are judged by the seriousness of the consequences of the breach.",
          "Damages aim to place the claimant in the position they would have occupied had the contract been performed. Recoverable losses must not be too remote (Hadley v Baxendale: losses arising naturally or within the parties' contemplation) and the claimant must mitigate. Equitable remedies such as specific performance and injunctions are discretionary.",
          "Negligence requires three elements in sequence: a duty of care (established using the Caparo criteria of foreseeability, proximity and fairness), breach of that duty (falling below the standard of the reasonable person), and damage caused by the breach that is not too remote. All three must be present for liability.",
        ],
        keyRules: [
          "Condition breach → repudiation + damages; warranty breach → damages only",
          "Damages must not be too remote and must be mitigated",
          "Negligence needs duty, breach and causation (with remoteness)",
        ],
      },
      {
        id: "lw-sn3",
        title: "Employment and agency",
        testPointIds: ["lw-tp3"],
        explanation: [
          "Employment status matters because employees enjoy rights (unfair dismissal, redundancy) that independent contractors do not. The courts look beyond the label to the reality using the control test, the integration test and the multiple/economic-reality test (who bears financial risk, provides equipment, and can send a substitute).",
          "Dismissal splits into two claims. Wrongful dismissal is a breach of contract — dismissal without proper notice. Unfair dismissal is statutory: the employer must have a fair reason (conduct, capability, redundancy, illegality, or some other substantial reason) and follow a fair procedure. The two can overlap but are distinct.",
          "Agency lets one person (the agent) affect the legal position of another (the principal). Authority may be actual (expressly given or implied from the role), apparent (where the principal holds the agent out as having authority), or conferred later by ratification. The category of authority determines whether the principal is bound.",
        ],
        keyRules: [
          "Employment status turns on control, integration and economic reality, not the label",
          "Unfair dismissal needs a fair reason and a fair procedure",
          "Apparent authority binds the principal where they hold the agent out",
        ],
      },
      {
        id: "lw-sn4",
        title: "Company law: personality, capital, directors and insolvency",
        testPointIds: ["lw-tp4", "lw-tp5"],
        explanation: [
          "A registered company is a separate legal person from its members (Salomon v Salomon), giving shareholders limited liability and the company perpetual succession. The 'veil of incorporation' is lifted only in narrow circumstances — for example, statutory provisions on fraudulent/wrongful trading, or where the company is a sham. Keeping the company distinct from its members is essential to answering liability questions.",
          "Companies raise finance through share capital and loan capital. Shareholders own the company and receive dividends from distributable profits; debenture holders are creditors receiving interest and, if secured, priority on insolvency. Share premium (issue above nominal value) and the maintenance-of-capital rules protect creditors. Directors owe seven codified statutory duties (CA 2006 ss.171–177), and the exam expects you to name the specific duty breached.",
          "On insolvency, assets are distributed in a strict order: fixed-charge holders, the costs of winding up, preferential creditors, floating-charge holders (after the prescribed part is set aside for unsecured creditors), unsecured creditors, and finally shareholders. Directors who continue trading with no reasonable prospect of avoiding insolvent liquidation risk personal liability for wrongful trading; fraudulent trading additionally requires intent to defraud.",
        ],
        keyRules: [
          "A company is a separate legal person; the veil is lifted only exceptionally",
          "Name the specific CA 2006 duty (ss.171–177) when a director's breach is tested",
          "Follow the statutory priority order on liquidation",
        ],
        workedProblem: {
          scenario:
            "A director diverts a contract offered to the company to his own private business without disclosing it to the board.",
          steps: [
            "Identify the relevant duties: duty to avoid conflicts of interest (s.175) and duty to declare interests (s.177)",
            "Apply: the director exploited a corporate opportunity for personal gain",
            "State the consequence: breach; the director must account for the profit",
          ],
          conclusion:
            "The director has breached the statutory duty to avoid conflicts of interest (s.175) by diverting a corporate opportunity, and must account to the company for any profit made.",
          markingNotes: [
            "Correct statutory duty (s.175 conflict of interest) named",
            "Consequence — account for profit / breach — stated",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "lw-ep1",
        testPointIds: ["lw-tp1"],
        style: "Objective test — contract",
        question:
          "A advertises a reward of $100 to anyone who returns his lost dog. B, knowing of the advert, finds and returns the dog. Is A bound to pay, and why?",
        answerPlan: [
          "Classify the advert (unilateral offer vs invitation to treat)",
          "Identify acceptance by performance",
          "Conclude on enforceability",
        ],
        modelAnswer:
          "A is bound to pay. A reward advertisement is a unilateral offer to the world, accepted by performance of the requested act. B performed the act (returning the dog) with knowledge of the offer, providing acceptance and consideration. A contract is formed and A must pay the $100.",
        markingGuide: [
          "1 mark: reward advert identified as a unilateral offer",
          "1 mark: acceptance by performance and conclusion that A is bound",
        ],
      },
      {
        id: "lw-ep2",
        testPointIds: ["lw-tp4"],
        style: "Objective test — directors' duties",
        question:
          "Which statutory duty under the Companies Act 2006 requires a director to act in the way they consider, in good faith, would be most likely to promote the success of the company for the benefit of members as a whole?",
        answerPlan: [
          "Recall the seven codified duties",
          "Match the description to the correct section",
        ],
        modelAnswer:
          "This is the duty to promote the success of the company under section 172. It requires directors to act in good faith to promote the company's success for the benefit of members as a whole, having regard to factors such as long-term consequences, employees, suppliers, the community and the environment.",
        markingGuide: [
          "1 mark: duty to promote success identified",
          "1 mark: correctly attributed to s.172",
        ],
      },
      {
        id: "lw-ep3",
        testPointIds: ["lw-tp5"],
        style: "Objective test — insolvency",
        question:
          "Distinguish wrongful trading from fraudulent trading, and state one consequence for a director found liable of wrongful trading.",
        answerPlan: [
          "Define wrongful trading",
          "Define fraudulent trading and the key difference (intent)",
          "State a consequence",
        ],
        modelAnswer:
          "Wrongful trading occurs where a director continues to trade when they knew, or ought to have concluded, that there was no reasonable prospect of avoiding insolvent liquidation; it is civil and does not require dishonest intent. Fraudulent trading requires an intent to defraud creditors and can be criminal. A director liable for wrongful trading may be ordered to contribute personally to the company's assets and may be disqualified.",
        markingGuide: [
          "1 mark: key distinction (intent to defraud) correctly drawn",
          "1 mark: valid consequence (personal contribution/disqualification) stated",
        ],
      },
    ],
  }),

  "acca-all-m5": examDepth({
    testPoints: [
      {
        id: "pm-tp1",
        title: "Specialist costing: ABC, target, lifecycle and throughput",
        priority: "high",
        examinerFocus:
          "Selecting and applying the right specialist technique and, crucially, interpreting what it tells management rather than only computing it.",
        typicalQuestionForms: [
          "Constructed-response calculation of ABC cost per unit versus traditional absorption, with commentary",
          "Throughput accounting ratio (TPAR) calculation and interpretation, or target-cost gap analysis",
        ],
        mustKnow: [
          "ABC: pool overheads by activity, find cost-driver rates, absorb by driver usage",
          "Target cost = target selling price − required profit margin; the target cost gap must be closed",
          "Throughput accounting ratio = throughput per hour / factory cost per hour; TPAR > 1 is acceptable",
        ],
        scoringActions: [
          "Show driver rates and per-unit workings clearly for method marks",
          "Add one or two sentences interpreting the result for management",
        ],
      },
      {
        id: "pm-tp2",
        title: "Decision-making: relevant cost, limiting factors and pricing",
        priority: "critical",
        examinerFocus:
          "Identifying relevant costs, optimising when a resource is scarce (including linear programming), and applying pricing strategies.",
        typicalQuestionForms: [
          "Make-or-buy or special-order decision using relevant costs and opportunity cost",
          "Limiting-factor ranking or a two-product linear programme with a graphical/simultaneous solution",
        ],
        mustKnow: [
          "Relevant cost = future, incremental, cash flow; include opportunity cost; exclude sunk/committed costs and depreciation",
          "With one scarce resource, rank by contribution per unit of the limiting factor",
          "Linear programming: define variables, constraints and objective, then solve at the optimal vertex",
        ],
        scoringActions: [
          "Annotate the scenario to strip out non-relevant costs before calculating",
          "State the optimum production plan and the resulting contribution explicitly",
        ],
      },
      {
        id: "pm-tp3",
        title: "Decision-making under risk and uncertainty",
        priority: "high",
        examinerFocus:
          "Applying expected values, decision criteria (maximax, maximin, minimax regret), decision trees and the value of information.",
        typicalQuestionForms: [
          "Payoff-table item applying maximax/maximin/minimax regret or expected value",
          "Decision tree or expected value of perfect/imperfect information calculation",
        ],
        mustKnow: [
          "Expected value = Σ(probability × outcome); it ignores the decision-maker's risk attitude",
          "Maximax (optimist), maximin (pessimist), minimax regret (minimise the maximum regret)",
          "Value of perfect information = expected value with information − expected value without",
        ],
        scoringActions: [
          "Build the payoff/regret table before applying any criterion",
          "State the assumed risk attitude that each criterion represents",
        ],
      },
      {
        id: "pm-tp4",
        title: "Budgeting, learning curves and advanced variances",
        priority: "high",
        examinerFocus:
          "Preparing/analysing budgets, applying the learning curve, and calculating and interpreting mix, yield and planning/operational variances.",
        typicalQuestionForms: [
          "Learning-curve calculation of cumulative/incremental time and cost",
          "Materials mix and yield or sales mix and quantity variance with interpretation",
        ],
        mustKnow: [
          "Learning curve: y = ax^b where b = log r / log 2; used until a steady state is reached",
          "Mix variance holds total quantity constant; yield variance holds mix constant",
          "Planning variances reflect a revised (ex-post) standard; operational variances measure controllable performance",
        ],
        scoringActions: [
          "State the learning rate and use the correct index b",
          "Interpret whether variances reflect planning errors or operational performance",
        ],
      },
      {
        id: "pm-tp5",
        title: "Performance measurement: financial, non-financial and divisional",
        priority: "critical",
        examinerFocus:
          "Calculating and, above all, interpreting financial and non-financial indicators, divisional measures (ROI, RI) and transfer pricing.",
        typicalQuestionForms: [
          "Constructed-response performance appraisal using ratios and non-financial measures (e.g. balanced scorecard)",
          "ROI/RI calculation and a transfer-pricing recommendation",
        ],
        mustKnow: [
          "ROI = controllable profit / controllable investment; RI = controllable profit − (investment × cost of capital)",
          "ROI can cause dysfunctional rejection of good projects; RI aligns better with shareholder value",
          "Transfer price range: minimum = marginal cost (+ opportunity cost); maximum = market price",
        ],
        scoringActions: [
          "Lead with interpretation and link measures to the scenario's objectives",
          "Note the behavioural consequences of the measure chosen",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55–60%+; on the Section C constructed-response questions, interpretation and technique marks are decisive — do not stop at the calculation.",
      timeBudget:
        "3-hour session CBE, ~1.8 minutes per mark. Allocate roughly Section A/B (OT, 60 marks) 1.5 hours and Section C (two 20-mark questions) 1.2 hours, leaving review time.",
      answerSequence: [
        "Complete Section A/B objective items first, banking straightforward marks",
        "In Section C, do the calculation with a clear proforma, then write the interpretation/discussion",
        "Return to any flagged OT items before the end",
      ],
      qualityChecks: [
        "Confirm every Section C calculation is followed by narrative that earns interpretation marks",
        "Check units, F/A signs and that recommendations answer the requirement verb",
      ],
    },
    studyNotes: [
      {
        id: "pm-sn1",
        title: "Specialist costing techniques and their message",
        testPointIds: ["pm-tp1"],
        explanation: [
          "PM moves beyond MA's absorption costing to techniques that reflect modern, overhead-heavy, competitive environments. Activity-based costing traces overheads to activities and then to products using cost drivers, revealing that low-volume, complex products are often under-costed by traditional absorption. The exam usually asks you to compute both methods and explain why the answers differ and what management should do.",
          "Target costing works backwards from a competitive selling price and a required margin to a target cost; any gap between the target cost and the current estimated cost must be closed through value engineering, redesign or supplier negotiation. Lifecycle costing widens the lens to include all costs from R&D to decommissioning, exposing products that look profitable in production but not over their whole life.",
          "Throughput accounting, rooted in the theory of constraints, treats only material as truly variable and everything else as a fixed 'factory cost'. Products are ranked by throughput (sales less material cost) per bottleneck hour, and the throughput accounting ratio (throughput per hour divided by factory cost per hour) should exceed 1 for a product to be worthwhile.",
        ],
        keyRules: [
          "ABC absorbs overhead using cost drivers, not a single volume-based rate",
          "Target cost gap = estimated cost − target cost, and must be closed",
          "TPAR > 1 indicates the product covers its factory cost",
        ],
        workedProblem: {
          scenario:
            "A product earns throughput of $90 per unit and takes 30 minutes on the bottleneck. Factory costs are $120 per bottleneck hour. Calculate the TPAR and interpret it.",
          steps: [
            "Throughput per bottleneck hour = $90 / 0.5 hour = $180",
            "TPAR = throughput per hour / factory cost per hour = $180 / $120 = 1.5",
            "Interpret: TPAR of 1.5 (> 1) means the product generates more throughput than it costs in factory time",
          ],
          conclusion:
            "The TPAR is 1.5, so the product is worthwhile; management should prioritise products with higher TPARs on the bottleneck.",
          markingNotes: [
            "Throughput per bottleneck hour correctly annualised to the hour",
            "TPAR of 1.5 with correct interpretation",
          ],
        },
      },
      {
        id: "pm-sn2",
        title: "Relevant costing, limiting factors and pricing",
        testPointIds: ["pm-tp2"],
        explanation: [
          "Short-term decisions turn on relevant costs: future, incremental cash flows that differ between options. Sunk costs, committed costs and non-cash charges such as depreciation are excluded; opportunity cost — contribution forgone from the next best use of a scarce resource — must be included. Presenting a clean relevant-cost statement is the core skill.",
          "When one resource is scarce, contribution per unit is misleading; instead rank products by contribution per unit of the limiting factor. Where two or more constraints bind, linear programming is used: define the decision variables, express the constraints and the objective function, and solve either graphically (at the optimal vertex) or by simultaneous equations. Shadow prices reveal the value of an extra unit of a binding constraint.",
          "Pricing decisions combine cost information with market strategy. Price skimming charges a high initial price to exploit early demand; penetration pricing sets a low price to build market share; cost-plus is simple but ignores demand. The examiner rewards a recommendation tied to the product's lifecycle and market conditions.",
        ],
        keyRules: [
          "Relevant cost = future, incremental cash flow; include opportunity cost",
          "Rank by contribution per unit of the limiting factor when one resource is scarce",
          "Shadow price = extra contribution from one more unit of a binding constraint",
        ],
        workedProblem: {
          scenario:
            "Two products use the same scarce machine hours. X earns $30 contribution and uses 2 hours; Y earns $24 and uses 1 hour. Which should be prioritised?",
          steps: [
            "Contribution per machine hour X = $30 / 2 = $15",
            "Contribution per machine hour Y = $24 / 1 = $24",
            "Rank by contribution per limiting factor: Y ($24) beats X ($15)",
          ],
          conclusion:
            "Product Y should be prioritised because it earns $24 of contribution per scarce machine hour versus $15 for X, despite X's higher contribution per unit.",
          markingNotes: [
            "Contribution per limiting factor used, not per unit",
            "Correct ranking of Y ahead of X",
          ],
        },
      },
      {
        id: "pm-sn3",
        title: "Risk, uncertainty and the value of information",
        testPointIds: ["pm-tp3"],
        explanation: [
          "Risk exists where probabilities are known; uncertainty where they are not. Expected value multiplies each outcome by its probability and sums — useful for repeated decisions but blind to the decision-maker's risk attitude and to the spread of outcomes. It should be quoted alongside a comment on its limitations.",
          "Where probabilities are unknown, decision criteria capture different attitudes: maximax picks the option with the best possible outcome (optimist), maximin picks the option with the best worst-case (pessimist), and minimax regret minimises the maximum opportunity loss. Building the payoff table (and, for regret, the regret table) first is essential.",
          "Information has value because it can change a decision. The expected value of perfect information is the difference between the expected value when you can act on perfect foresight and the expected value of the best decision without it. Decision trees roll back expected values from right to left to choose the optimal sequence of decisions.",
        ],
        keyRules: [
          "Expected value = Σ(probability × outcome), ignores risk attitude",
          "Maximax = optimist; maximin = pessimist; minimax regret minimises maximum regret",
          "Value of perfect information = EV with information − EV without",
        ],
      },
      {
        id: "pm-sn4",
        title: "Divisional performance and transfer pricing",
        testPointIds: ["pm-tp4", "pm-tp5"],
        explanation: [
          "Advanced budgeting brings in the learning curve, where cumulative average time per unit falls by a constant percentage each time output doubles (y = ax^b, with b = log r / log 2). This matters for labour-intensive, novel production and feeds into budgets, standards and pricing until a steady state is reached. Planning and operational variances then separate uncontrollable forecasting errors (a revised standard) from controllable performance.",
          "Divisional performance is assessed with return on investment (controllable profit divided by controllable investment) and residual income (controllable profit less an imputed interest charge on the investment). ROI is a percentage that permits comparison but can lead managers to reject projects that earn above the cost of capital yet below the division's current ROI; residual income avoids this dysfunctional behaviour by rewarding any project earning above the cost of capital.",
          "Transfer pricing sets the internal price for goods moved between divisions. The transferring division wants at least its marginal cost plus any opportunity cost of lost external sales; the receiving division will pay at most the external market price. A price within this range preserves goal congruence; outside it, one division will make a decision that harms the group.",
        ],
        keyRules: [
          "Learning curve: b = log r / log 2, applied until steady state",
          "RI = controllable profit − (investment × cost of capital)",
          "Transfer price floor = marginal cost (+ opportunity cost); ceiling = market price",
        ],
        workedProblem: {
          scenario:
            "A division earns controllable profit of $180,000 on controllable investment of $1,000,000. The group cost of capital is 12%. Calculate ROI and residual income and comment on a new project earning 15%.",
          steps: [
            "ROI = $180,000 / $1,000,000 = 18%",
            "RI = $180,000 − (12% × $1,000,000) = $180,000 − $120,000 = $60,000",
            "New project earns 15% > 12% cost of capital but < 18% current ROI",
          ],
          conclusion:
            "ROI is 18% and RI is $60,000. The 15% project would be rejected under ROI (it lowers the average) but accepted under RI (it earns above the 12% cost of capital), showing RI's superior goal congruence.",
          markingNotes: [
            "Correct ROI (18%) and RI ($60,000)",
            "Correct explanation of the ROI/RI conflict on the 15% project",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pm-ep1",
        testPointIds: ["pm-tp1"],
        style: "Section C — ABC calculation and commentary",
        question:
          "A company currently absorbs overhead on labour hours. Overheads of $500,000 relate mainly to machine set-ups (250 set-ups) and quality inspections (500 inspections). A low-volume product needs 20 set-ups and 40 inspections for 1,000 units. Calculate the ABC overhead per unit for this product (assume set-ups take $300,000 and inspections $200,000) and comment.",
        answerPlan: [
          "Compute cost-driver rates",
          "Apply drivers to the product",
          "Convert to per unit and comment on ABC vs absorption",
        ],
        modelAnswer:
          "Set-up rate = $300,000 / 250 = $1,200 per set-up; inspection rate = $200,000 / 500 = $400 per inspection. Product overhead = (20 × $1,200) + (40 × $400) = $24,000 + $16,000 = $40,000, i.e. $40 per unit over 1,000 units. Traditional labour-based absorption would spread overhead by volume and would under-cost this low-volume, set-up-intensive product; ABC reveals its true cost, supporting better pricing and product-mix decisions.",
        markingGuide: [
          "1 mark: correct driver rates ($1,200 and $400)",
          "1 mark: $40 per unit correctly derived",
          "1 mark: valid commentary on ABC vs absorption for low-volume products",
        ],
      },
      {
        id: "pm-ep2",
        testPointIds: ["pm-tp3"],
        style: "Section B — decision criteria",
        question:
          "A payoff table shows profits: Option A ($80, $20), Option B ($60, $50) under states 'boom' and 'recession'. Apply the maximin and maximax criteria and state which option each selects.",
        answerPlan: [
          "Identify worst-case for maximin",
          "Identify best-case for maximax",
          "Select under each",
        ],
        modelAnswer:
          "Maximin (pessimist) looks at the worst outcomes: A's worst is $20, B's worst is $50; the best of these is $50, so maximin selects Option B. Maximax (optimist) looks at the best outcomes: A's best is $80, B's best is $60; the best of these is $80, so maximax selects Option A.",
        markingGuide: [
          "1 mark: maximin selects B",
          "1 mark: maximax selects A",
        ],
      },
      {
        id: "pm-ep3",
        testPointIds: ["pm-tp5"],
        style: "Section C — divisional performance",
        question:
          "Division M has controllable profit of $240,000 and controllable net assets of $1,500,000. The cost of capital is 10%. Calculate ROI and RI, and advise whether a project returning 12% and requiring $200,000 of assets should be accepted, explaining any conflict.",
        answerPlan: [
          "Calculate ROI and RI",
          "Assess the project against ROI and the cost of capital",
          "Recommend and explain conflict",
        ],
        modelAnswer:
          "ROI = $240,000 / $1,500,000 = 16%. RI = $240,000 − (10% × $1,500,000) = $240,000 − $150,000 = $90,000. The new project returns 12%, above the 10% cost of capital, so it adds residual income ($200,000 × (12% − 10%) = $4,000) and should be accepted on RI grounds. However, because 12% is below the division's current ROI of 16%, accepting it lowers the average ROI, so a manager rewarded on ROI might dysfunctionally reject it. RI gives the goal-congruent decision: accept.",
        markingGuide: [
          "1 mark: ROI of 16% and RI of $90,000",
          "1 mark: recognition the project is accepted on RI grounds",
          "1 mark: explanation of the ROI/RI conflict",
        ],
      },
    ],
  }),

  "acca-all-m6": examDepth({
    testPoints: [
      {
        id: "tx-tp1",
        title: "Income tax computation and NIC (UK variant)",
        priority: "critical",
        examinerFocus:
          "Building the income tax computation correctly — pooling income, applying the personal allowance (with abatement), and taxing in the right order at the right rates — plus NIC.",
        typicalQuestionForms: [
          "Section C computation of an individual's income tax liability with employment, property and savings income",
          "OT item on personal allowance abatement, savings/dividend nil-rate bands, or Class 1/2/4 NIC",
        ],
        mustKnow: [
          "Order of taxation: non-savings, then savings, then dividend income, using the applicable rate bands",
          "Personal allowance is abated by £1 for every £2 of adjusted net income above the £100,000 threshold",
          "Savings and dividend nil-rate bands, and the distinct NIC classes (Class 1 employees/employers, Class 2/4 self-employed)",
        ],
        scoringActions: [
          "Lay out the standard proforma columns (non-savings/savings/dividend) before entering figures",
          "Apply reliefs and the extended basic-rate band (for gift aid/pensions) in the correct sequence",
        ],
      },
      {
        id: "tx-tp2",
        title: "Employment vs trading income and adjustment of profits",
        priority: "high",
        examinerFocus:
          "Distinguishing employment from self-employment, calculating taxable trading profit by adjusting accounts profit, and applying capital allowances.",
        typicalQuestionForms: [
          "Adjustment-of-profit computation adding back disallowables and deducting non-taxable income",
          "Capital allowances computation using the main pool, special-rate pool, AIA and FYAs",
        ],
        mustKnow: [
          "Adjust accounting profit: add back non-deductible expenses (private/capital/entertaining), deduct non-trading income",
          "Capital allowances: Annual Investment Allowance, writing-down allowances (main 18%, special rate 6%), balancing adjustments",
          "Badges of trade and employment-status tests distinguish trading from employment",
        ],
        scoringActions: [
          "Start the adjustment from net profit and justify each add-back/deduction",
          "Show the capital allowances pool workings so method marks are earned even if a figure slips",
        ],
      },
      {
        id: "tx-tp3",
        title: "Corporation tax and chargeable gains",
        priority: "critical",
        examinerFocus:
          "Computing a company's taxable total profits and corporation tax, including capital allowances, loss relief and chargeable gains, and gains for individuals.",
        typicalQuestionForms: [
          "Section C corporation tax computation with trading profit, property income, interest and gains",
          "Chargeable gains item applying the annual exempt amount (individuals), reliefs and share matching rules",
        ],
        mustKnow: [
          "Taxable total profits aggregate income and gains; corporation tax applied at the prevailing rate(s)",
          "Chargeable gain = proceeds − cost − enhancement, with reliefs (e.g. business asset disposal relief, rollover, gift relief) where relevant",
          "Share matching rules and the indexation/pooling treatment as applicable to the variant syllabus",
        ],
        scoringActions: [
          "Keep income and gains in separate workings before aggregating",
          "Apply the annual exempt amount only to individuals, never to companies",
        ],
      },
      {
        id: "tx-tp4",
        title: "VAT",
        priority: "high",
        examinerFocus:
          "Applying VAT registration rules, output/input tax, the tax point, and special schemes to compute the VAT payable.",
        typicalQuestionForms: [
          "Computation of VAT payable including partial recovery and blocked input tax",
          "OT item on registration/deregistration thresholds, the tax point, or a special scheme",
        ],
        mustKnow: [
          "Registration when taxable supplies exceed the threshold (historic or future test); standard, reduced, zero-rated and exempt supplies differ",
          "Input tax on cars and business entertaining is generally blocked; the tax point determines the return period",
          "Special schemes: cash accounting, annual accounting, flat-rate scheme and their eligibility",
        ],
        scoringActions: [
          "Separate output tax from recoverable input tax before netting",
          "Check whether input tax is blocked before claiming it",
        ],
      },
      {
        id: "tx-tp5",
        title: "Inheritance tax and tax administration",
        priority: "medium",
        examinerFocus:
          "Calculating IHT on lifetime transfers and the death estate using the nil-rate band and reliefs, and knowing filing/payment deadlines and penalties.",
        typicalQuestionForms: [
          "IHT computation on a lifetime gift becoming chargeable on death, or on the death estate",
          "OT item on self-assessment deadlines, payments on account, or penalties and interest",
        ],
        mustKnow: [
          "Nil-rate band, taper relief on gifts made 3–7 years before death, and the seven-year cumulation",
          "Exemptions and reliefs: annual exemption, spouse exemption, business/agricultural property relief",
          "Self-assessment deadlines (filing and payment), payments on account, and penalty/interest regime",
        ],
        scoringActions: [
          "Apply the seven-year cumulation before using the nil-rate band on each transfer",
          "Use taper relief to reduce the tax, not the transfer value",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55–60%+; TX rewards clean proformas — method marks accumulate even when a single figure is wrong, so never abandon a computation.",
      timeBudget:
        "3-hour session CBE, ~1.8 minutes per mark. Give the two Section C computations (income tax and corporation tax typically) generous time and use the remainder on OT sections.",
      answerSequence: [
        "Complete Section A/B OT items on VAT, IHT and administration first",
        "Build the Section C computations using the standard proformas with visible workings",
        "Review that reliefs and allowances are applied in the correct order",
      ],
      qualityChecks: [
        "Confirm the personal allowance abatement and nil-rate bands are applied correctly",
        "Check dates: tax point, deadlines and the seven-year IHT window",
      ],
    },
    studyNotes: [
      {
        id: "tx-sn1",
        title: "Building the income tax computation",
        testPointIds: ["tx-tp1"],
        explanation: [
          "TX is a UK-variant paper and the income tax computation is its centrepiece. Income is pooled into three columns — non-savings, savings and dividend — because different rates and nil-rate bands apply to each. Taxable income is total income less reliefs and the personal allowance; the personal allowance is abated by £1 for every £2 by which adjusted net income exceeds £100,000, so high earners can lose it entirely.",
          "Tax is then charged in a strict order: non-savings income first, then savings, then dividends, each moving up through the rate bands. Gift aid donations and personal pension contributions extend the basic-rate band, pushing more income into lower rates — a frequent source of marks. The savings and dividend nil-rate bands are applied within the relevant bands, not as separate deductions from income.",
          "National insurance contributions run alongside. Employees and employers pay Class 1 on earnings; the self-employed pay Class 2 and Class 4 on profits. Candidates must use the rates and thresholds from the exam's tax tables (which ACCA provides) rather than memorised figures, and must apply the correct class to the correct type of income.",
        ],
        keyRules: [
          "Tax non-savings, then savings, then dividend income in that order",
          "Personal allowance abated £1 for every £2 of ANI over £100,000",
          "Gift aid and pension contributions extend the basic-rate band",
        ],
        workedProblem: {
          scenario:
            "An individual has employment income of £45,000 and bank interest of £2,000 for the year. Using the standard personal allowance and a basic-rate band, outline the computation approach and where the savings nil-rate band applies.",
          steps: [
            "Column the income: non-savings £45,000; savings £2,000",
            "Deduct the personal allowance from non-savings income first",
            "Tax non-savings at the applicable rate, then apply the savings nil-rate band to the interest before taxing any excess",
          ],
          conclusion:
            "Non-savings income is taxed first after the personal allowance; the bank interest then uses the savings nil-rate band, with only the excess taxed at the savings rate — illustrating why column order and band order matter.",
          markingNotes: [
            "Income correctly split into non-savings and savings columns",
            "Savings nil-rate band applied to interest, not as a deduction from income",
          ],
        },
      },
      {
        id: "tx-sn2",
        title: "Trading profit, capital allowances and employment status",
        testPointIds: ["tx-tp2"],
        explanation: [
          "Taxable trading profit is not the accounting profit. Starting from net profit, add back expenses that are not deductible for tax — private expenditure, capital items, most entertaining, depreciation and general provisions — and deduct income taxed elsewhere or non-taxable. The result is the tax-adjusted trading profit, which is then reduced by capital allowances.",
          "Capital allowances give tax relief for capital expenditure. The Annual Investment Allowance gives immediate relief up to a cap; expenditure above it enters the main pool (writing-down allowance) or special-rate pool. Balancing allowances or charges arise on disposal. Cars are allocated by emissions, and private-use adjustments apply for unincorporated businesses.",
          "Whether a worker is employed or self-employed determines the tax and NIC treatment. The badges of trade and status tests (control, financial risk, provision of equipment, right of substitution) decide the question; HMRC looks at substance, not the contract label. This distinction recurs because it changes both the computation and the NIC class.",
        ],
        keyRules: [
          "Adjust profit: add back disallowables (private, capital, depreciation, entertaining)",
          "AIA first, then WDA on the main (18%) and special-rate (6%) pools",
          "Employment status turns on substance, not the label",
        ],
      },
      {
        id: "tx-sn3",
        title: "Corporation tax and chargeable gains",
        testPointIds: ["tx-tp3"],
        explanation: [
          "A company's corporation tax is charged on its taxable total profits — trading income (after capital allowances), property income, non-trading interest, and chargeable gains — for its accounting period. Loss relief can be carried back, set against current-year total profits, or carried forward under the relevant rules, and the timing choice affects the tax saved and cash flow.",
          "Chargeable gains for companies use proceeds less allowable cost and enhancement expenditure, with indexation/pooling treatment as the syllabus specifies. Individuals additionally benefit from the annual exempt amount and reliefs such as business asset disposal relief, rollover relief and gift relief; companies do not get the annual exempt amount. Share disposals follow specific matching rules.",
          "The exam expects clean separation of the income and gains workings before they are aggregated, and correct application of the reliefs that only individuals (or only companies) can claim. Misapplying the annual exempt amount to a company, or forgetting loss-relief timing, are classic avoidable errors.",
        ],
        keyRules: [
          "Taxable total profits = income (after capital allowances) + gains",
          "The annual exempt amount applies to individuals only, not companies",
          "Loss-relief timing (carry back/forward/current) affects the tax saved",
        ],
        workedProblem: {
          scenario:
            "An individual sells shares for £30,000 that cost £8,000, having already used £6,000 of the annual exempt amount on another disposal (assume a £12,300 annual exempt amount and a 20% rate on the remaining gain).",
          steps: [
            "Gain = £30,000 − £8,000 = £22,000",
            "Remaining annual exempt amount = £12,300 − £6,000 = £6,300",
            "Taxable gain = £22,000 − £6,300 = £15,700; tax at 20% = £3,140",
          ],
          conclusion:
            "After using the remaining £6,300 annual exempt amount, the taxable gain is £15,700, giving capital gains tax of £3,140 at 20%.",
          markingNotes: [
            "Gain and remaining annual exempt amount correctly computed",
            "Correct taxable gain and tax figure",
          ],
        },
      },
      {
        id: "tx-sn4",
        title: "VAT, inheritance tax and administration",
        testPointIds: ["tx-tp4", "tx-tp5"],
        explanation: [
          "VAT is a transaction tax. A business must register once its taxable supplies breach the registration threshold on the historic or future test, then charge output tax on standard and reduced-rated supplies (zero-rated supplies are taxable at 0%; exempt supplies carry no output tax and block input recovery). VAT payable is output tax less recoverable input tax; input tax on cars and business entertaining is generally blocked. The tax point fixes which return a supply falls into, and schemes such as cash accounting, annual accounting and the flat-rate scheme ease compliance for smaller businesses.",
          "Inheritance tax applies to lifetime transfers and the death estate. Potentially exempt transfers become chargeable only if the donor dies within seven years; chargeable lifetime transfers are taxed at the time and again on death. The nil-rate band is applied after cumulating gifts in the previous seven years, taper relief reduces the tax (not the transfer) on gifts made three to seven years before death, and exemptions (spouse, annual, business/agricultural property relief) remove or reduce value.",
          "Tax administration underpins everything: self-assessment sets filing and payment deadlines, payments on account for income tax, and a penalty and interest regime for late filing, late payment and errors. Objective-test items reward precise recall of these dates and the behaviour-based penalty structure.",
        ],
        keyRules: [
          "VAT payable = output tax − recoverable input tax; input tax on cars/entertaining is blocked",
          "PETs become chargeable only on death within seven years; taper relief cuts the tax, not the value",
          "Cumulate the previous seven years' gifts before applying the nil-rate band",
        ],
      },
    ],
    examPractice: [
      {
        id: "tx-ep1",
        testPointIds: ["tx-tp2"],
        style: "Section C — adjustment of profit",
        question:
          "A sole trader's accounts show a net profit of £80,000 after charging: depreciation £6,000, owner's private motoring £2,000, client entertaining £1,500, and including bank interest received £500. Calculate the tax-adjusted trading profit before capital allowances.",
        answerPlan: [
          "Start from net profit",
          "Add back disallowable expenses",
          "Deduct non-trading income",
        ],
        modelAnswer:
          "Start with net profit £80,000. Add back depreciation £6,000, private motoring £2,000 and client entertaining £1,500 (all disallowable). Deduct bank interest of £500 (taxed as savings income, not trading). Tax-adjusted trading profit = £80,000 + £6,000 + £2,000 + £1,500 − £500 = £89,000 before capital allowances.",
        markingGuide: [
          "1 mark: correct add-backs (depreciation, private motoring, entertaining)",
          "1 mark: bank interest deducted and £89,000 result",
        ],
      },
      {
        id: "tx-ep2",
        testPointIds: ["tx-tp4"],
        style: "Section B — VAT",
        question:
          "In a quarter a business made standard-rated sales of £120,000 (excluding VAT), incurred VATable purchases of £50,000 (excluding VAT), and spent £2,000 (excluding VAT) on client entertaining. Using a 20% rate, calculate the VAT payable.",
        answerPlan: [
          "Output tax on sales",
          "Recoverable input tax (exclude blocked entertaining)",
          "Net",
        ],
        modelAnswer:
          "Output tax = £120,000 × 20% = £24,000. Recoverable input tax = £50,000 × 20% = £10,000; the £2,000 client entertaining input tax (£400) is blocked and not recoverable. VAT payable = £24,000 − £10,000 = £14,000.",
        markingGuide: [
          "1 mark: output tax £24,000 and input tax £10,000",
          "1 mark: entertaining input tax blocked and £14,000 payable",
        ],
      },
      {
        id: "tx-ep3",
        testPointIds: ["tx-tp1"],
        style: "Section C — income tax approach",
        question:
          "An individual has adjusted net income of £110,000. Explain, with the calculation, how much personal allowance they retain (standard personal allowance £12,570, abatement threshold £100,000).",
        answerPlan: [
          "Compute excess over threshold",
          "Apply £1 reduction per £2 excess",
          "Deduct from the standard allowance",
        ],
        modelAnswer:
          "Adjusted net income exceeds £100,000 by £10,000. The personal allowance is reduced by £1 for every £2 of excess, i.e. £10,000 / 2 = £5,000. Retained personal allowance = £12,570 − £5,000 = £7,570.",
        markingGuide: [
          "1 mark: abatement of £5,000 correctly computed",
          "1 mark: retained allowance of £7,570",
        ],
      },
    ],
  }),

  "acca-all-m7": examDepth({
    testPoints: [
      {
        id: "fr-tp1",
        title: "Conceptual framework, regulatory environment and ethics",
        priority: "high",
        examinerFocus:
          "Applying the Conceptual Framework's qualitative characteristics and recognition/measurement principles to justify an accounting treatment, plus ethics in reporting.",
        typicalQuestionForms: [
          "OT item on a qualitative characteristic, element definition or measurement basis",
          "Short constructed-response justifying a treatment by reference to the Framework",
        ],
        mustKnow: [
          "Fundamental characteristics (relevance, faithful representation) and enhancing ones (comparability, verifiability, timeliness, understandability)",
          "Definitions and recognition criteria for assets, liabilities, income and expenses",
          "Substance over form and the role of ethics/professional behaviour in reporting",
        ],
        scoringActions: [
          "Cite the specific characteristic or definition that supports the treatment",
          "Argue substance over form where the legal form differs from economic reality",
        ],
      },
      {
        id: "fr-tp2",
        title: "Single-entity IFRS: revenue, leases, assets, provisions, tax",
        priority: "critical",
        examinerFocus:
          "Correctly applying the key IFRS Standards to transactions in a single company's financial statements, with accurate double entry and disclosure.",
        typicalQuestionForms: [
          "Constructed-response preparing single-entity statements incorporating several IFRS adjustments",
          "OT items on a specific standard (IFRS 15 five-step, IFRS 16 lessee, IAS 16/36/37/12)",
        ],
        mustKnow: [
          "IFRS 15 five-step model; IFRS 16 lessee recognises a right-of-use asset and lease liability",
          "IAS 16 cost/revaluation, IAS 36 impairment (recoverable amount = higher of value in use and fair value less costs of disposal)",
          "IAS 37 provisions (present obligation, probable outflow, reliable estimate); IAS 12 deferred tax on temporary differences",
        ],
        scoringActions: [
          "State the standard and the trigger before making the entry",
          "Show the journal and its effect on both primary statements",
        ],
      },
      {
        id: "fr-tp3",
        title: "Consolidated statement of financial position",
        priority: "critical",
        examinerFocus:
          "Preparing a consolidated statement of financial position with goodwill, non-controlling interest, fair value adjustments and intra-group eliminations.",
        typicalQuestionForms: [
          "Full consolidated statement of financial position with one subsidiary and an associate",
          "OT item computing goodwill, NCI, or the elimination of unrealised profit",
        ],
        mustKnow: [
          "Goodwill = consideration + NCI − fair value of net assets acquired; impairment reduces goodwill/NCI",
          "NCI at acquisition (fair value or proportionate) plus its share of post-acquisition reserves",
          "Eliminate intra-group balances and unrealised profit in inventory (PURP)",
        ],
        scoringActions: [
          "Use the standard net-assets, goodwill, NCI and group-reserves workings",
          "Cancel intra-group balances and adjust PURP before finalising figures",
        ],
      },
      {
        id: "fr-tp4",
        title: "Consolidated statement of profit or loss",
        priority: "high",
        examinerFocus:
          "Preparing a consolidated statement of profit or loss, including mid-year acquisitions, intra-group trading and the associate's share.",
        typicalQuestionForms: [
          "Consolidated statement of profit or loss with a mid-year acquisition and intra-group sales",
          "OT item splitting profit between the parent and NCI",
        ],
        mustKnow: [
          "Add across income and expenses 100% for subsidiaries, time-apportioning mid-year acquisitions",
          "Eliminate intra-group revenue/cost of sales and adjust for unrealised profit",
          "Associates are equity accounted: one line for the group's share of the associate's profit",
        ],
        scoringActions: [
          "Time-apportion the subsidiary's results from the acquisition date",
          "Remove the full intra-group trading amount from both revenue and cost of sales",
        ],
      },
      {
        id: "fr-tp5",
        title: "Interpretation, ratios and the statement of cash flows",
        priority: "high",
        examinerFocus:
          "Calculating and interpreting ratios for different users, and preparing/analysing a statement of cash flows to explain performance and position.",
        typicalQuestionForms: [
          "Constructed-response interpretation using profitability, liquidity, efficiency and gearing ratios",
          "Statement of cash flows preparation (indirect) or explanation of a movement",
        ],
        mustKnow: [
          "Ratio groups: profitability (margins, ROCE), liquidity (current, quick), efficiency (working-capital days), gearing/interest cover",
          "Cash flow indirect method reconciliation of profit to operating cash",
          "Link ratio movements to the scenario's events; state limitations of ratio analysis",
        ],
        scoringActions: [
          "Interpret movements with reasons from the scenario, not generic statements",
          "Support conclusions with the calculated figures and note limitations",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55–60%+; Section C consolidation and interpretation questions carry big marks and reward layout discipline plus reasoned narrative.",
      timeBudget:
        "3-hour session CBE, ~1.8 minutes per mark. Reserve strong blocks of time for the two 20-mark Section C questions and use standard workings to move quickly.",
      answerSequence: [
        "Bank Section A/B OT marks on individual standards first",
        "In Section C, set up proformas and standard consolidation workings before entering numbers",
        "Write interpretation narrative that references calculated figures and the scenario",
      ],
      qualityChecks: [
        "Confirm goodwill, NCI and group-reserves workings reconcile",
        "Check every ratio comment is tied to a scenario cause, not a textbook truism",
      ],
    },
    studyNotes: [
      {
        id: "fr-sn1",
        title: "The Conceptual Framework as a decision tool",
        testPointIds: ["fr-tp1"],
        explanation: [
          "FR is principles-led, and the Conceptual Framework is the reasoning tool that justifies treatments where a specific rule is unclear. Information must be relevant (capable of making a difference to decisions) and a faithful representation (complete, neutral, free from error); the enhancing characteristics — comparability, verifiability, timeliness and understandability — improve useful information further.",
          "The Framework defines the elements: an asset is a present economic resource controlled as a result of past events; a liability is a present obligation to transfer an economic resource. Recognition follows when the item meets the definition and provides useful information. Measurement bases include historical cost and current value (fair value, value in use, current cost).",
          "Substance over form is central: the accounting should reflect economic reality, not merely legal form. A sale with a guaranteed repurchase, for example, may be a financing arrangement rather than a sale. Ethics reinforces this — the accountant must present a faithful picture even under pressure to flatter results.",
        ],
        keyRules: [
          "Fundamental characteristics: relevance and faithful representation",
          "Recognise an element when it meets the definition and gives useful information",
          "Apply substance over form to reflect economic reality",
        ],
      },
      {
        id: "fr-sn2",
        title: "Applying the key single-entity standards",
        testPointIds: ["fr-tp2"],
        explanation: [
          "Revenue under IFRS 15 follows five steps: identify the contract, identify the performance obligations, determine the transaction price, allocate it to the obligations, and recognise revenue as each obligation is satisfied (at a point in time or over time). Getting the number and timing of obligations right is what earns the marks.",
          "IFRS 16 requires a lessee to recognise a right-of-use asset and a lease liability for almost all leases, measured initially at the present value of lease payments. The asset is depreciated and the liability unwinds with an interest charge, replacing the old operating-lease rental. IAS 16 governs property, plant and equipment (cost or revaluation model, componentisation, depreciation), and IAS 36 impairs an asset when its carrying amount exceeds its recoverable amount (the higher of value in use and fair value less costs of disposal).",
          "IAS 37 recognises a provision only when there is a present obligation from a past event, a probable outflow, and a reliable estimate — contingent liabilities are disclosed, not provided. IAS 12 deferred tax arises on temporary differences between the carrying amount and tax base of assets and liabilities, most commonly from accelerated capital allowances and revaluations.",
        ],
        keyRules: [
          "IFRS 15: recognise revenue as each performance obligation is satisfied",
          "IFRS 16 lessee: right-of-use asset + lease liability at present value",
          "IAS 37 provision needs present obligation, probable outflow and reliable estimate",
        ],
        workedProblem: {
          scenario:
            "A company leases equipment for 4 years with annual payments of $10,000 in arrears; the interest rate implicit in the lease is 10%. Show the initial lease liability and the first year's interest and depreciation (straight-line, nil residual).",
          steps: [
            "Initial liability = present value of 4 payments of $10,000 at 10% ≈ $10,000 × 3.170 = $31,700",
            "Right-of-use asset = $31,700; year 1 depreciation = $31,700 / 4 = $7,925",
            "Year 1 interest = $31,700 × 10% = $3,170; liability at year end = $31,700 + $3,170 − $10,000 = $24,870",
          ],
          conclusion:
            "The lessee recognises a right-of-use asset and liability of about $31,700; year 1 shows $7,925 depreciation and $3,170 interest, with the liability reducing to $24,870.",
          markingNotes: [
            "Lease liability measured at present value of payments",
            "Correct split of the first payment into interest and capital",
          ],
        },
      },
      {
        id: "fr-sn3",
        title: "Consolidated statement of financial position",
        testPointIds: ["fr-tp3"],
        explanation: [
          "Consolidation presents the parent and its subsidiaries as a single economic entity. The engine is four standard workings: (1) group structure and dates, (2) net assets of the subsidiary at acquisition and reporting date, (3) goodwill, and (4) non-controlling interest, feeding (5) group retained earnings. Goodwill equals the consideration transferred plus the NCI at acquisition less the fair value of the subsidiary's identifiable net assets acquired.",
          "Fair value adjustments at acquisition (e.g. undervalued land, contingent liabilities) change the net assets and therefore goodwill and post-acquisition movements. The NCI is measured either at fair value (full goodwill method) or at its proportionate share of net assets; the choice affects goodwill and the NCI figure but not group retained earnings.",
          "Intra-group items must be cancelled: current-account balances between group companies are eliminated, and unrealised profit in inventory (PURP) sold between group companies is removed from both inventory and the selling company's reserves. Only then do the figures represent transactions with parties outside the group.",
        ],
        keyRules: [
          "Goodwill = consideration + NCI − fair value of net assets acquired",
          "NCI = acquisition value + NCI share of post-acquisition reserves",
          "Eliminate intra-group balances and unrealised profit in inventory",
        ],
        workedProblem: {
          scenario:
            "P acquired 75% of S. S sold goods to P for $40,000 at a 25% mark-up on cost; half remain in P's inventory at the year end. Calculate the PURP adjustment.",
          steps: [
            "Goods still in inventory = 50% × $40,000 = $20,000 (at selling price)",
            "Profit element = mark-up 25/125 × $20,000 = $4,000",
            "PURP adjustment: reduce group inventory and S's post-acquisition reserves by $4,000",
          ],
          conclusion:
            "Unrealised profit of $4,000 is eliminated, reducing consolidated inventory and, because S is the seller, S's post-acquisition reserves (affecting both group reserves and NCI).",
          markingNotes: [
            "Mark-up fraction (25/125) applied to the correct inventory value",
            "PURP charged against the selling company's reserves",
          ],
        },
      },
      {
        id: "fr-sn4",
        title: "Consolidated profit or loss and interpretation",
        testPointIds: ["fr-tp4", "fr-tp5"],
        explanation: [
          "The consolidated statement of profit or loss adds the parent's and subsidiaries' income and expenses in full, time-apportioning a subsidiary acquired mid-year from the acquisition date only. Intra-group trading is removed from both revenue and cost of sales, and any unrealised profit is adjusted. Profit is then split between the owners of the parent and the non-controlling interest. Associates are equity accounted — a single line for the group's share of the associate's profit after tax.",
          "Interpretation turns the numbers into insight. Ratios group into profitability (gross and operating margin, ROCE), liquidity (current and quick ratios), efficiency (inventory, receivables and payables days), and solvency (gearing, interest cover). The examiner rewards linking each movement to a cause in the scenario — a fall in margin explained by a specific price war or cost rise — not generic commentary.",
          "The statement of cash flows complements ratio analysis by showing whether profit is converting into cash. The indirect method reconciles profit before tax to operating cash by adding back non-cash items and adjusting for working-capital movements. Candidates should also state the limitations of ratio analysis: different accounting policies, price-level changes and the danger of ratios without context.",
        ],
        keyRules: [
          "Time-apportion a mid-year subsidiary's results from acquisition",
          "Equity account associates: one line for the group's share of profit",
          "Tie every ratio comment to a scenario-specific cause and note limitations",
        ],
      },
    ],
    examPractice: [
      {
        id: "fr-ep1",
        testPointIds: ["fr-tp2"],
        style: "Section B — IFRS 15",
        question:
          "A company sells a machine for $50,000 including one year of servicing worth $6,000 sold separately for $8,000. The machine's standalone price is $52,000. How much revenue is recognised on delivery of the machine?",
        answerPlan: [
          "Identify performance obligations",
          "Allocate the transaction price on relative standalone prices",
          "Recognise the machine element on delivery",
        ],
        modelAnswer:
          "There are two performance obligations: the machine (standalone $52,000) and the servicing (standalone $8,000), total $60,000. The $50,000 transaction price is allocated in proportion: machine = $50,000 × 52/60 = $43,333; servicing = $50,000 × 8/60 = $6,667. On delivery of the machine, $43,333 is recognised; the servicing revenue of $6,667 is recognised over the year of service.",
        markingGuide: [
          "1 mark: two performance obligations identified and standalone prices used",
          "1 mark: $43,333 recognised on delivery (servicing deferred)",
        ],
      },
      {
        id: "fr-ep2",
        testPointIds: ["fr-tp3"],
        style: "Section C — goodwill",
        question:
          "P acquired 80% of S for $700,000. S's net assets at acquisition were $750,000, including land undervalued by $50,000. NCI is measured at fair value of $170,000. Calculate goodwill.",
        answerPlan: [
          "Adjust net assets for the fair value uplift",
          "Add consideration and NCI",
          "Deduct fair-valued net assets",
        ],
        modelAnswer:
          "Fair-valued net assets at acquisition = $750,000 + $50,000 land uplift = $800,000. Consideration + NCI = $700,000 + $170,000 = $870,000. Goodwill = $870,000 − $800,000 = $70,000.",
        markingGuide: [
          "1 mark: net assets adjusted to $800,000 for the fair value uplift",
          "1 mark: goodwill of $70,000 using fair-value NCI",
        ],
      },
      {
        id: "fr-ep3",
        testPointIds: ["fr-tp5"],
        style: "Section C — interpretation",
        question:
          "A company's gross margin fell from 40% to 32% while revenue rose 20%. The scenario notes a new competitor and a switch to a cheaper supplier that caused returns. Explain the likely causes and one limitation of relying on this ratio.",
        answerPlan: [
          "Link margin fall to scenario events",
          "Distinguish price vs cost effects",
          "State a limitation",
        ],
        modelAnswer:
          "The gross margin fall from 40% to 32% despite rising revenue suggests the company cut selling prices to compete with the new entrant (a price effect) and/or that the cheaper supplier raised cost of sales through returns and rework (a cost effect). Revenue growth of 20% with lower margin implies volume was bought at the expense of profitability. A limitation is that gross margin alone ignores changes in sales mix and accounting policy, so the ratio should be read alongside the cash flows and other ratios before drawing firm conclusions.",
        markingGuide: [
          "1 mark: margin fall linked to price competition and/or supplier switch",
          "1 mark: a valid limitation of the ratio stated",
        ],
      },
    ],
  }),

  "acca-all-m8": examDepth({
    testPoints: [
      {
        id: "aa-tp1",
        title: "Audit framework, ethics, independence and governance",
        priority: "high",
        examinerFocus:
          "Applying the fundamental principles and identifying threats to independence with appropriate safeguards, plus corporate governance requirements.",
        typicalQuestionForms: [
          "Constructed-response identifying ethical threats in a scenario and recommending safeguards",
          "OT item on the components of an assurance engagement or a governance requirement",
        ],
        mustKnow: [
          "Five fundamental principles and the five threat categories (self-interest, self-review, advocacy, familiarity, intimidation)",
          "Elements of an assurance engagement: three-party relationship, subject matter, criteria, evidence, report",
          "Governance: audit committee of NEDs, auditor appointment and independence safeguards",
        ],
        scoringActions: [
          "Name the specific threat and a proportionate safeguard for each issue",
          "Distinguish reasonable assurance (audit) from limited assurance (review)",
        ],
      },
      {
        id: "aa-tp2",
        title: "Risk assessment, materiality and audit planning",
        priority: "critical",
        examinerFocus:
          "Identifying risks of material misstatement from a scenario, explaining the auditor's response, and applying materiality.",
        typicalQuestionForms: [
          "Constructed-response listing audit risks and the auditor's response to each",
          "OT item on the audit risk model, materiality, or analytical procedures at planning",
        ],
        mustKnow: [
          "Audit risk = inherent risk × control risk × detection risk; the auditor manages detection risk",
          "Risk of material misstatement identified at assertion level; materiality set by benchmark and revised as needed",
          "Understanding the entity and its controls drives the audit strategy and plan",
        ],
        scoringActions: [
          "Explain WHY each risk arises and the SPECIFIC response, not a generic 'do more work'",
          "Anchor materiality to a stated benchmark (e.g. % of profit/revenue/assets)",
        ],
      },
      {
        id: "aa-tp3",
        title: "Internal control systems and deficiencies",
        priority: "high",
        examinerFocus:
          "Evaluating the design and operation of internal controls, identifying deficiencies and recommending improvements with reasons.",
        typicalQuestionForms: [
          "Constructed-response identifying control deficiencies, their implications and recommendations",
          "OT item on tests of controls versus substantive procedures for a cycle",
        ],
        mustKnow: [
          "Deficiency = control missing or not operating effectively; report implication and recommendation",
          "Tests of controls confirm controls operate; substantive procedures test the figures directly",
          "Cycle controls: sales, purchases, payroll, inventory and cash",
        ],
        scoringActions: [
          "Structure answers as deficiency → implication → recommendation",
          "Make each recommendation specific and capable of removing the deficiency",
        ],
      },
      {
        id: "aa-tp4",
        title: "Audit evidence and substantive procedures",
        priority: "critical",
        examinerFocus:
          "Designing specific, assertion-driven substantive procedures for material balances and transactions, and applying sampling.",
        typicalQuestionForms: [
          "Constructed-response listing substantive procedures for a specific balance (e.g. inventory, receivables)",
          "OT item on assertions, the reliability of evidence, or sampling methods",
        ],
        mustKnow: [
          "Financial statement assertions (existence, completeness, valuation, rights & obligations, cut-off, classification)",
          "Evidence reliability hierarchy: external > auditor-generated > internal; written > oral",
          "Procedures: inspection, observation, enquiry, confirmation, recalculation, reperformance, analytical procedures",
        ],
        scoringActions: [
          "Write procedures that start with an action verb and target a specific assertion",
          "Avoid vague 'check' verbs — state what is inspected and to what",
        ],
      },
      {
        id: "aa-tp5",
        title: "Review, completion and the auditor's report",
        priority: "high",
        examinerFocus:
          "Applying going concern, subsequent events and written representations at completion, and forming the correct audit opinion and report.",
        typicalQuestionForms: [
          "Constructed-response on going concern indicators and procedures, or subsequent events",
          "OT item selecting the audit opinion (modified/unmodified) for a described misstatement or limitation",
        ],
        mustKnow: [
          "Modified opinions: qualified (material), adverse (material and pervasive misstatement), disclaimer (material and pervasive limitation)",
          "Going concern: management's assessment, indicators, and the auditor's procedures and reporting",
          "Subsequent events (adjusting vs non-adjusting), written representations and emphasis-of-matter/other-matter paragraphs",
        ],
        scoringActions: [
          "Map the issue to material vs pervasive to select the correct opinion",
          "Distinguish adjusting from non-adjusting subsequent events before concluding",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55–60%+; AA rewards specificity — well-targeted procedures and correctly reasoned opinions score far better than generic points.",
      timeBudget:
        "3-hour session CBE, ~1.8 minutes per mark. Split time across the OT case sections and the constructed-response questions, protecting time for the risk and evidence questions.",
      answerSequence: [
        "Answer OT case questions on framework and controls first",
        "For constructed response, use the deficiency→implication→recommendation and risk→response structures",
        "Finish with the completion/reporting question, mapping issues to opinion types",
      ],
      qualityChecks: [
        "Confirm each procedure names an action and a target assertion",
        "Check the opinion matches the material vs pervasive judgement",
      ],
    },
    studyNotes: [
      {
        id: "aa-sn1",
        title: "The assurance framework, ethics and independence",
        testPointIds: ["aa-tp1"],
        explanation: [
          "An assurance engagement enhances the confidence of intended users in a subject matter. It has five elements: a three-party relationship (practitioner, responsible party, users), an appropriate subject matter, suitable criteria, sufficient appropriate evidence, and a written report. An audit gives reasonable (high, not absolute) assurance and a positive opinion; a review gives limited assurance and a negative-form conclusion.",
          "Independence is protected by the same five fundamental principles as BT but examined more deeply. The auditor must identify threats — self-interest (fee dependence, owning shares), self-review (auditing own work), advocacy (promoting the client), familiarity (long or close relationships), and intimidation (pressure) — and apply safeguards such as rotation, separate teams, or declining the engagement where the threat cannot be reduced to an acceptable level.",
          "Corporate governance supports audit quality. An audit committee of independent non-executive directors oversees the relationship with the external auditor, recommends appointment and remuneration, and reviews independence — reducing the risk that management can pressure the auditor.",
        ],
        keyRules: [
          "Audit = reasonable assurance/positive opinion; review = limited assurance/negative conclusion",
          "Identify the specific threat and a proportionate safeguard",
          "An audit committee of NEDs safeguards auditor independence",
        ],
      },
      {
        id: "aa-sn2",
        title: "Risk assessment, materiality and planning",
        testPointIds: ["aa-tp2"],
        explanation: [
          "The audit is risk-driven. Audit risk is the risk of giving an inappropriate opinion and is modelled as inherent risk × control risk × detection risk. The auditor cannot change inherent or control risk (they exist in the client) but manages detection risk by adjusting the nature, timing and extent of procedures. Higher assessed risk demands more, or more effective, testing.",
          "Identifying risks of material misstatement is the highest-value AA skill. From the scenario, the auditor spots events (a new system, a rights issue, aggressive revenue recognition) that could cause misstatement, explains why they create risk at the assertion level, and states a specific response. The examiner penalises generic 'increased risk of fraud' answers that lack a cause and a tailored response.",
          "Materiality sets the threshold for what matters. It is usually anchored to a benchmark — a percentage of profit before tax, revenue or total assets — and is revised as the audit progresses. Performance materiality is set lower to reduce the risk that uncorrected misstatements aggregate above materiality.",
        ],
        keyRules: [
          "Audit risk = inherent × control × detection; the auditor manages detection risk",
          "Explain each risk's cause and a specific response",
          "Materiality is benchmark-based and revised during the audit",
        ],
        workedProblem: {
          scenario:
            "During planning, the auditor learns the client changed its revenue recognition to record sales on despatch rather than on customer acceptance, and that year-end bonuses depend on hitting a revenue target.",
          steps: [
            "Identify the risk: revenue may be overstated (cut-off/occurrence) due to the policy change and the bonus incentive",
            "Explain why: earlier recognition and management incentive create a risk of material misstatement in revenue",
            "State the response: extend cut-off testing around the year end and inspect despatch/acceptance evidence",
          ],
          conclusion:
            "There is a risk of overstated revenue from the earlier recognition point and the bonus incentive; the auditor responds with focused cut-off testing and inspection of despatch and acceptance documentation.",
          markingNotes: [
            "Risk identified at assertion level (cut-off/occurrence of revenue)",
            "Specific, relevant audit response given",
          ],
        },
      },
      {
        id: "aa-sn3",
        title: "Internal control and audit evidence",
        testPointIds: ["aa-tp3", "aa-tp4"],
        explanation: [
          "Evaluating internal control means judging whether controls are designed and operating to prevent or detect misstatement. A deficiency exists where a control is missing or ineffective. The exam wants the three-part structure: state the deficiency, explain its implication (what could go wrong), and recommend a specific control that removes it. Tests of controls confirm controls operate; substantive procedures test the figures directly, and a weak control environment pushes the auditor toward more substantive work.",
          "Audit evidence must be sufficient (enough) and appropriate (relevant and reliable). Reliability rises with independence from the client: externally generated evidence beats auditor-generated, which beats internally generated; written beats oral; originals beat copies. Evidence is gathered through inspection, observation, enquiry, external confirmation, recalculation, reperformance and analytical procedures.",
          "Substantive procedures must be assertion-driven and specific. Testing receivables for existence uses external confirmations; testing inventory for valuation reviews net realisable value against cost. The most common exam failing is vague procedures ('check the receivables') — a scoring answer says exactly what is done, to what document, and which assertion it addresses.",
        ],
        keyRules: [
          "Structure control points as deficiency → implication → recommendation",
          "Evidence reliability: external > auditor > internal; written > oral",
          "Every substantive procedure targets a specific assertion",
        ],
        workedProblem: {
          scenario:
            "Design two substantive procedures to test the EXISTENCE of trade receivables at the year end.",
          steps: [
            "Select the assertion: existence of receivables",
            "Procedure 1: circularise a sample of customers to confirm balances directly with the auditor",
            "Procedure 2: for non-replies or differences, inspect after-date cash receipts as alternative evidence of existence",
          ],
          conclusion:
            "External confirmation of a sample of balances, supplemented by inspection of after-date cash for non-responses, provides reliable evidence over the existence of receivables.",
          markingNotes: [
            "Procedures target the existence assertion specifically",
            "External confirmation used and an alternative for non-replies given",
          ],
        },
      },
      {
        id: "aa-sn4",
        title: "Completion, going concern and the auditor's report",
        testPointIds: ["aa-tp5"],
        explanation: [
          "At completion the auditor evaluates going concern, subsequent events and written representations. Going concern testing reviews management's assessment and looks for indicators (net liabilities, loss of a key customer, breached covenants); if a material uncertainty exists and is adequately disclosed, the opinion is unmodified with a 'material uncertainty related to going concern' section. Subsequent events are adjusting (conditions existed at the year end) or non-adjusting (arose after), each with different accounting and audit consequences.",
          "The auditor's report communicates the opinion. An unmodified opinion is given when the statements are fairly presented. Modifications arise from misstatements or an inability to obtain evidence: a qualified 'except for' opinion where the matter is material but not pervasive; an adverse opinion where a misstatement is material and pervasive; and a disclaimer where a limitation is material and pervasive.",
          "Emphasis-of-matter and other-matter paragraphs draw attention to disclosed items or matters relevant to users without modifying the opinion. Selecting the right report is the culmination of AA and depends on two judgements: is the matter a misstatement or a limitation, and is it material or material-and-pervasive?",
        ],
        keyRules: [
          "Qualified = material; adverse/disclaimer = material and pervasive",
          "Adjusting events reflect conditions at the year end; non-adjusting arose after",
          "Emphasis of matter does not modify the opinion",
        ],
      },
    ],
    examPractice: [
      {
        id: "aa-ep1",
        testPointIds: ["aa-tp1"],
        style: "Section B — ethics",
        question:
          "The audit firm has been offered a contingent fee based on the client's reported profit, and the engagement partner has led the audit for nine consecutive years. Identify the threats and recommend a safeguard for each.",
        answerPlan: [
          "Classify each situation as a threat",
          "Name the threat category",
          "Recommend a safeguard",
        ],
        modelAnswer:
          "The contingent fee creates a self-interest threat to objectivity because the firm benefits from a higher reported profit; contingent fees for audits are prohibited, so the firm should decline the fee arrangement and agree a fixed fee. The nine-year partner tenure creates a familiarity threat; the safeguard is to rotate the engagement partner in line with rotation requirements. If threats cannot be reduced to an acceptable level, the firm should not continue.",
        markingGuide: [
          "1 mark: self-interest threat and appropriate safeguard for the contingent fee",
          "1 mark: familiarity threat and partner rotation safeguard",
        ],
      },
      {
        id: "aa-ep2",
        testPointIds: ["aa-tp3"],
        style: "Section C — control deficiency",
        question:
          "In the purchases system, purchase orders are not sequentially numbered and goods received notes are not matched to invoices before payment. Identify one deficiency, its implication and a recommendation.",
        answerPlan: [
          "State a deficiency",
          "Explain the implication",
          "Recommend a control",
        ],
        modelAnswer:
          "Deficiency: goods received notes are not matched to invoices before payment. Implication: the company may pay for goods not received or pay incorrect amounts, leading to overstated purchases and loss of cash. Recommendation: implement a three-way match of purchase order, goods received note and invoice before any payment is authorised, with sequential numbering of orders to ensure completeness.",
        markingGuide: [
          "1 mark: valid deficiency and its implication",
          "1 mark: specific, effective recommendation (three-way match)",
        ],
      },
      {
        id: "aa-ep3",
        testPointIds: ["aa-tp5"],
        style: "Section B — audit opinion",
        question:
          "Inventory is materially overstated because the client refuses to write it down to net realisable value; the amount is material but not pervasive to the financial statements as a whole. What opinion should the auditor issue and why?",
        answerPlan: [
          "Classify as misstatement or limitation",
          "Assess material vs pervasive",
          "State the opinion",
        ],
        modelAnswer:
          "This is a misstatement (inventory not written down to NRV) that is material but not pervasive. The auditor should issue a qualified 'except for' opinion, stating that except for the effects of the overstated inventory, the financial statements give a true and fair view. An adverse opinion would only be appropriate if the misstatement were also pervasive.",
        markingGuide: [
          "1 mark: identified as a material but not pervasive misstatement",
          "1 mark: qualified 'except for' opinion correctly selected",
        ],
      },
    ],
  }),

  "acca-all-m9": examDepth({
    testPoints: [
      {
        id: "fm-tp1",
        title: "Financial management function, objectives and environment",
        priority: "medium",
        examinerFocus:
          "Understanding the objectives of financial management, agency theory, and the impact of the economic and financial-market environment.",
        typicalQuestionForms: [
          "OT item on financial objectives, the agency problem, or the role of financial markets",
          "Short discussion of how monetary/fiscal policy or market efficiency affects a decision",
        ],
        mustKnow: [
          "Primary objective is shareholder wealth maximisation; not-for-profit uses value-for-money (economy, efficiency, effectiveness)",
          "Agency problem between shareholders and managers; mechanisms to align interests (incentives, monitoring)",
          "Roles of money and capital markets, and the efficient market hypothesis (weak, semi-strong, strong forms)",
        ],
        scoringActions: [
          "State the objective relevant to the entity type (profit vs not-for-profit)",
          "Link market/policy factors directly to the decision in the scenario",
        ],
      },
      {
        id: "fm-tp2",
        title: "Working capital management",
        priority: "critical",
        examinerFocus:
          "Managing the working-capital cycle, applying EOQ and cash models, and evaluating credit and financing policies for liquidity.",
        typicalQuestionForms: [
          "Calculation of the cash operating cycle or the effect of a change in credit terms",
          "EOQ, receivables policy (early-settlement discount), or a working-capital financing policy question",
        ],
        mustKnow: [
          "Cash operating cycle = inventory days + receivables days − payables days",
          "EOQ = √(2CoD/Ch); evaluate bulk-order discounts against extra holding cost",
          "Assess a settlement discount by comparing its cost to the saving in financing/receivables",
        ],
        scoringActions: [
          "Compute the cycle in days before recommending changes",
          "Compare the annual cost and benefit of any policy change explicitly",
        ],
      },
      {
        id: "fm-tp3",
        title: "Investment appraisal (NPV, IRR, inflation and tax)",
        priority: "critical",
        examinerFocus:
          "Building a relevant-cash-flow NPV including tax (capital allowances), inflation (money vs real), and interpreting IRR and other methods.",
        typicalQuestionForms: [
          "Section C NPV with tax, capital allowances and inflation over several years",
          "OT item on IRR, payback, or the money vs real method",
        ],
        mustKnow: [
          "NPV discounts relevant, incremental after-tax cash flows; accept if NPV > 0",
          "Tax-allowable depreciation (capital allowances) creates tax savings; timing of tax matters",
          "Money method uses money cash flows and the money discount rate; do not mix real and money",
        ],
        scoringActions: [
          "Lay out a year-by-year cash-flow table with clear tax and inflation lines",
          "State the accept/reject decision and comment on assumptions",
        ],
      },
      {
        id: "fm-tp4",
        title: "Sources of finance and cost of capital (WACC)",
        priority: "high",
        examinerFocus:
          "Evaluating equity and debt finance, computing the cost of equity (CAPM/dividend growth) and debt, and calculating WACC.",
        typicalQuestionForms: [
          "Calculation of WACC from component costs and market-value weights",
          "OT item on the dividend growth model, CAPM, or the features of a source of finance",
        ],
        mustKnow: [
          "Cost of equity via CAPM (Rf + β(Rm − Rf)) or the dividend growth model (D1/P0 + g)",
          "Cost of debt is the after-tax cost; use market values, not book values, for weights",
          "WACC = weighted average of after-tax component costs using market-value weights",
        ],
        scoringActions: [
          "Use market values for weights and the after-tax cost of debt",
          "State which cost-of-equity model applies given the data provided",
        ],
      },
      {
        id: "fm-tp5",
        title: "Business valuation and risk management (FX and interest rate)",
        priority: "high",
        examinerFocus:
          "Valuing shares/businesses by different methods and selecting hedging techniques for currency and interest-rate risk.",
        typicalQuestionForms: [
          "Share/business valuation using asset, P/E, dividend valuation or discounted cash flow methods",
          "FX or interest-rate hedging item (forwards, money-market hedge, options, FRAs)",
        ],
        mustKnow: [
          "Valuation methods: net assets, P/E (earnings × multiple), dividend valuation model, discounted cash flow",
          "Money-market hedge steps for a payable/receivable; forward contracts lock in a rate",
          "Interest-rate hedges: forward rate agreements, futures, options, swaps",
        ],
        scoringActions: [
          "Choose the valuation method appropriate to the purpose and data",
          "Show the hedge mechanics step by step and compare outcomes where asked",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55–60%+; the Section C NPV and WACC questions are high-value and reward a clear cash-flow table plus a decision and comment.",
      timeBudget:
        "3-hour session CBE, ~1.8 minutes per mark. Protect time for the two 20-mark Section C questions (typically appraisal and working capital/valuation).",
      answerSequence: [
        "Bank Section A/B OT marks across the syllabus",
        "In Section C, build the NPV/WACC proforma with visible workings, then decide and comment",
        "Return to flagged OT items before the end",
      ],
      qualityChecks: [
        "Confirm tax timing and inflation treatment are consistent (money vs real)",
        "Check WACC uses market-value weights and the after-tax cost of debt",
      ],
    },
    studyNotes: [
      {
        id: "fm-sn1",
        title: "Objectives, agency and the financial environment",
        testPointIds: ["fm-tp1"],
        explanation: [
          "Financial management exists to maximise shareholder wealth, usually proxied by share price. In not-for-profit and public-sector entities the objective becomes value for money — economy, efficiency and effectiveness — because there are no shareholders. Recognising the entity type is the first step to answering an FM objectives question correctly.",
          "The agency problem arises because managers (agents) may pursue their own interests rather than those of shareholders (principals). Mechanisms to align them include performance-related pay, share options, monitoring by non-executive directors, and the discipline of the market for corporate control. The exam links these to real behaviours in a scenario.",
          "The financial environment shapes decisions: money markets provide short-term finance and capital markets long-term. The efficient market hypothesis describes how quickly prices reflect information — weak (past prices), semi-strong (all public information) and strong (all information). Interest rates, inflation and government policy feed directly into appraisal and financing choices.",
        ],
        keyRules: [
          "Objective: shareholder wealth (profit) or value for money (not-for-profit)",
          "Agency costs are reduced by incentives and monitoring",
          "EMH forms: weak, semi-strong, strong",
        ],
      },
      {
        id: "fm-sn2",
        title: "Working capital management",
        testPointIds: ["fm-tp2"],
        explanation: [
          "Working capital management balances liquidity against profitability. The cash operating cycle — inventory days plus receivables days minus payables days — measures how long cash is tied up. A longer cycle needs more financing; the aim is to shorten it without damaging sales or supplier relationships. Over-trading (rapid growth outstripping working capital) and over-capitalisation (idle working capital) are the two failure modes.",
          "Inventory is managed with the economic order quantity, which minimises the total of ordering and holding costs: EOQ = √(2 × order cost × annual demand / holding cost per unit). Bulk-order discounts are evaluated by comparing the discount saving against the extra holding cost of larger orders. Just-in-time reduces inventory but increases reliance on suppliers.",
          "Receivables policy trades the cost of financing debtors against the benefit of sales and prompt payment. An early-settlement discount is worthwhile only if its cost is less than the financing saved from faster collection. Payables are a free source of finance up to the point where lost discounts or supplier goodwill make them expensive.",
        ],
        keyRules: [
          "Cash operating cycle = inventory days + receivables days − payables days",
          "EOQ = √(2CoD/Ch)",
          "Accept a settlement discount only if its cost < the financing saved",
        ],
        workedProblem: {
          scenario:
            "A company has inventory days of 60, receivables days of 45 and payables days of 30. It offers a 2% discount for payment in 10 days instead of 45; the cost of finance is 15% a year. Calculate the cash operating cycle and assess the discount.",
          steps: [
            "Cash operating cycle = 60 + 45 − 30 = 75 days",
            "Discount cost annualised ≈ (2/98) × (365 / (45 − 10)) = 0.0204 × 10.43 ≈ 21.3%",
            "Compare: 21.3% cost of the discount exceeds the 15% cost of finance",
          ],
          conclusion:
            "The cash operating cycle is 75 days. The early-settlement discount effectively costs about 21.3% a year, which is higher than the 15% financing cost, so offering it is not worthwhile on these terms.",
          markingNotes: [
            "Cash operating cycle correctly computed as 75 days",
            "Discount cost compared to the cost of finance with the right conclusion",
          ],
        },
      },
      {
        id: "fm-sn3",
        title: "Investment appraisal with tax and inflation",
        testPointIds: ["fm-tp3"],
        explanation: [
          "Net present value discounts the relevant, incremental, after-tax cash flows of a project at the cost of capital and accepts the project if NPV is positive. Only future cash flows that change because of the decision are relevant; sunk costs and allocated overheads are excluded. NPV is preferred to IRR and payback because it measures absolute value added and handles non-conventional cash flows.",
          "Tax complicates the model in two ways. Operating cash flows are taxed (usually with a one-year lag depending on the assumption), and tax-allowable depreciation (capital allowances) generates tax savings that are cash flows in their own right. Laying out separate lines for the tax on operating flows and for the capital-allowance tax savings keeps the computation clean.",
          "Inflation must be handled consistently. The money (nominal) method inflates cash flows to their actual money amounts and discounts at the money cost of capital; the real method uses today's prices and the real rate. The Fisher equation links them: (1 + money) = (1 + real)(1 + inflation). Mixing money cash flows with a real rate — or vice versa — is a classic error.",
        ],
        keyRules: [
          "Accept if NPV > 0; use relevant, incremental, after-tax cash flows",
          "Capital allowances create tax-saving cash flows",
          "Do not mix money cash flows with the real rate (use the Fisher equation)",
        ],
        workedProblem: {
          scenario:
            "A project costs $100,000, generates $40,000 pre-tax net cash inflow a year for 3 years, tax is 20% (paid in the same year), and the money cost of capital is 10%. Ignore capital allowances. Calculate the NPV.",
          steps: [
            "After-tax annual inflow = $40,000 × (1 − 0.20) = $32,000",
            "Present value of inflows = $32,000 × 3-year annuity factor at 10% (2.487) = $79,584",
            "NPV = $79,584 − $100,000 = −$20,416",
          ],
          conclusion:
            "The NPV is about −$20,416, so on these figures the project should be rejected because it destroys value at the 10% cost of capital.",
          markingNotes: [
            "After-tax cash flows correctly computed",
            "Correct annuity discounting and reject decision",
          ],
        },
      },
      {
        id: "fm-sn4",
        title: "Cost of capital, valuation and risk management",
        testPointIds: ["fm-tp4", "fm-tp5"],
        explanation: [
          "The cost of capital blends the returns required by providers of finance. The cost of equity is found using the capital asset pricing model (risk-free rate plus beta times the market risk premium) or the dividend growth model (next dividend over price plus growth). The cost of debt is the after-tax return to lenders, because interest is tax-deductible. The weighted average cost of capital combines these using market-value weights, not book values, and is the discount rate for projects of average risk.",
          "Business valuation depends on the purpose. Asset-based methods value net assets (a floor value); the P/E method multiplies maintainable earnings by a suitable multiple; the dividend valuation model values a share as the present value of future dividends; and discounted cash flow values the business on its projected free cash flows. Each has strengths and limitations that the examiner expects you to weigh.",
          "Risk management addresses currency and interest-rate exposure. A forward contract locks in an exchange rate; a money-market hedge borrows/deposits now to fix the outcome; options give the right but not the obligation to transact, giving downside protection with upside. Interest-rate risk is hedged with forward rate agreements, futures, options and swaps. The exam rewards showing the mechanics and comparing outcomes.",
        ],
        keyRules: [
          "Cost of equity: CAPM or dividend growth model; cost of debt is after-tax",
          "WACC uses market-value weights",
          "Forwards lock in a rate; options protect the downside while keeping upside",
        ],
        workedProblem: {
          scenario:
            "A company is 60% equity (cost 12%) and 40% debt (pre-tax cost 8%) by market value, tax rate 25%. Calculate the WACC.",
          steps: [
            "After-tax cost of debt = 8% × (1 − 0.25) = 6%",
            "Weighted equity = 60% × 12% = 7.2%; weighted debt = 40% × 6% = 2.4%",
            "WACC = 7.2% + 2.4% = 9.6%",
          ],
          conclusion:
            "The WACC is 9.6%, the appropriate discount rate for a project of average business and financial risk.",
          markingNotes: [
            "After-tax cost of debt of 6% used",
            "Correct market-value weighting giving 9.6%",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "fm-ep1",
        testPointIds: ["fm-tp3"],
        style: "Section C — NPV",
        question:
          "A project costs $200,000 now and yields after-tax cash inflows of $80,000 per year for 4 years. The money cost of capital is 12% (4-year annuity factor 3.037). Calculate the NPV and advise.",
        answerPlan: [
          "Discount the annuity",
          "Deduct the initial outlay",
          "Advise on the decision",
        ],
        modelAnswer:
          "Present value of inflows = $80,000 × 3.037 = $242,960. NPV = $242,960 − $200,000 = $42,960. The NPV is positive, so the project adds value at the 12% cost of capital and should be accepted, subject to the reliability of the cash-flow estimates.",
        markingGuide: [
          "1 mark: PV of inflows of $242,960",
          "1 mark: NPV of $42,960 and accept decision",
        ],
      },
      {
        id: "fm-ep2",
        testPointIds: ["fm-tp2"],
        style: "Section B — working capital",
        question:
          "Annual demand for a component is 24,000 units, the order cost is $60 per order and the holding cost is $2 per unit per year. Calculate the economic order quantity.",
        answerPlan: [
          "Apply the EOQ formula",
          "Compute",
        ],
        modelAnswer:
          "EOQ = √(2 × order cost × demand / holding cost) = √(2 × 60 × 24,000 / 2) = √1,440,000 = 1,200 units. The company should order in batches of 1,200 units to minimise total ordering and holding costs.",
        markingGuide: [
          "1 mark: correct substitution into the EOQ formula",
          "1 mark: EOQ of 1,200 units",
        ],
      },
      {
        id: "fm-ep3",
        testPointIds: ["fm-tp4"],
        style: "Section C — cost of equity",
        question:
          "A share has a beta of 1.3, the risk-free rate is 4% and the equity market risk premium is 6%. Calculate the cost of equity using CAPM, and state when you would instead use the dividend growth model.",
        answerPlan: [
          "Apply CAPM",
          "State the alternative model's use case",
        ],
        modelAnswer:
          "Cost of equity = Rf + β(Rm − Rf) = 4% + 1.3 × 6% = 4% + 7.8% = 11.8%. The dividend growth model (D1/P0 + g) would be used instead where reliable data on the current share price, expected dividend and a stable growth rate are available but a beta is not, or as a cross-check on the CAPM result.",
        markingGuide: [
          "1 mark: cost of equity of 11.8% via CAPM",
          "1 mark: appropriate use case for the dividend growth model",
        ],
      },
    ],
  }),

  "acca-all-m10": examDepth({
    testPoints: [
      {
        id: "sbl-tp1",
        title: "Professional skills marks (the 20-mark differentiator)",
        priority: "critical",
        examinerFocus:
          "Whether you demonstrate the five professional skills — communication, commercial acumen, analysis, scepticism and evaluation — not just technical knowledge, because 20 marks are reserved for them.",
        typicalQuestionForms: [
          "A requirement that awards technical marks plus explicit professional-skills marks (e.g. 'analysis and evaluation')",
          "A task set in a specified format (report, briefing notes, email) to a named recipient",
        ],
        mustKnow: [
          "The five professional skills and the specific behaviours each rewards",
          "Professional skills marks (20 of 100) are earned by HOW you answer, not extra content",
          "The correct format and register for the stated audience earns communication marks",
        ],
        scoringActions: [
          "Adopt the exact format requested and address the named recipient",
          "Signpost analysis and evaluation (weigh both sides, reach a judgement) to trigger the skills marks",
        ],
      },
      {
        id: "sbl-tp2",
        title: "Governance, ethics and stakeholder management",
        priority: "critical",
        examinerFocus:
          "Applying governance principles, ethical frameworks and stakeholder analysis to the integrated case to recommend defensible action.",
        typicalQuestionForms: [
          "Evaluate governance weaknesses in the case and recommend improvements",
          "Analyse an ethical dilemma using a framework (e.g. Tucker/AAA) and advise",
        ],
        mustKnow: [
          "Governance: board balance, NEDs, committees (audit, remuneration, nomination), and agency issues",
          "Ethical frameworks and the distinction between compliance-based and integrity-based approaches",
          "Stakeholder analysis (Mendelow) and managing conflicting stakeholder claims",
        ],
        scoringActions: [
          "Ground every recommendation in a specific fact from the case",
          "Balance stakeholder interests explicitly before recommending",
        ],
      },
      {
        id: "sbl-tp3",
        title: "Strategy: analysis, choice and implementation",
        priority: "high",
        examinerFocus:
          "Analysing strategic position and evaluating strategic options for their suitability, acceptability and feasibility in the case context.",
        typicalQuestionForms: [
          "Evaluate a proposed strategy using SFA (suitability, acceptability, feasibility)",
          "Analyse the environment/position using a framework and recommend a direction",
        ],
        mustKnow: [
          "Position analysis: PESTEL, Porter's five forces, value chain, SWOT, resources and capabilities",
          "Strategic choice evaluated against suitability, acceptability and feasibility",
          "Ansoff's directions and methods of development (organic, acquisition, alliance)",
        ],
        scoringActions: [
          "Apply frameworks to the case data, not as generic lists",
          "Reach a reasoned recommendation, not just an analysis",
        ],
      },
      {
        id: "sbl-tp4",
        title: "Risk, internal control and finance in the case",
        priority: "high",
        examinerFocus:
          "Identifying and evaluating organisational risks, designing controls, and using financial analysis to support leadership decisions.",
        typicalQuestionForms: [
          "Identify and assess key risks and recommend controls or a risk response",
          "Interpret financial information to evaluate a decision or performance",
        ],
        mustKnow: [
          "Risk identification, assessment (likelihood/impact), and the TARA responses (transfer, avoid, reduce, accept)",
          "COSO-style internal control components and the role of internal audit",
          "Using ratios and financial data to inform strategic recommendations",
        ],
        scoringActions: [
          "Prioritise risks by likelihood and impact before responding",
          "Tie financial analysis to the leadership decision at hand",
        ],
      },
      {
        id: "sbl-tp5",
        title: "Innovation, technology, data and change management",
        priority: "medium",
        examinerFocus:
          "Evaluating the strategic use of technology and data, and managing organisational change and its people implications.",
        typicalQuestionForms: [
          "Evaluate a technology/data initiative (e.g. big data, cyber, automation) for the organisation",
          "Advise on managing change using a change-management model",
        ],
        mustKnow: [
          "Big data (volume, velocity, variety, veracity) and its value/risks; cyber-security threats and controls",
          "Business process change, disruptive technology and e-business models",
          "Change models (Lewin's unfreeze-change-refreeze, dealing with resistance)",
        ],
        scoringActions: [
          "Weigh benefits against risks/costs of the technology in the case",
          "Address the people/resistance dimension of any change",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; with 20 professional-skills marks available, disciplined format and reasoning can lift a technically average answer over the line.",
      timeBudget:
        "4-hour session CBE on one integrated case. Spend ~40 minutes reading and planning across the exhibits, then allocate time to each requirement in proportion to its marks, leaving 15 minutes to review.",
      answerSequence: [
        "Read all exhibits and the requirements first, noting the format and recipient for each task",
        "Plan each answer against the specific case facts before writing",
        "Write in the requested format, signposting analysis, evaluation and scepticism to bank professional-skills marks",
      ],
      qualityChecks: [
        "Confirm the format (report/email/briefing) and audience match the requirement",
        "Check each recommendation is justified from the case, not generic theory",
      ],
    },
    studyNotes: [
      {
        id: "sbl-sn1",
        title: "Earning the professional skills marks",
        testPointIds: ["sbl-tp1"],
        explanation: [
          "SBL is unique because 20 of the 100 marks are awarded for professional skills rather than technical content. The five skills are communication (clarity, format, tone for the audience), commercial acumen (practical, context-aware judgement), analysis (investigating and using the case data), scepticism (probing and challenging assumptions), and evaluation (weighing evidence to reach a balanced judgement). These marks are earned by how you answer, so a technically thin answer written with skill can still pass, and a technically strong answer written poorly can fail.",
          "Communication marks depend on delivering the exact format requested — a report has headings and a structure, an email has an appropriate salutation and tone, briefing notes are concise and structured. Always identify the recipient and pitch the register accordingly. Getting the format wrong throws away easy marks.",
          "Analysis and evaluation are demonstrated by working with the case data (not reciting theory), showing your reasoning, weighing options or arguments on both sides, and reaching a justified conclusion. Scepticism is shown by questioning the reliability of information or the motives behind a proposal. Consciously signpost these behaviours as you write.",
        ],
        keyRules: [
          "20 marks are for HOW you answer (the five professional skills)",
          "Use the exact requested format and address the named recipient",
          "Show analysis, evaluation and scepticism explicitly, using case data",
        ],
        workedProblem: {
          scenario:
            "A requirement asks for 'briefing notes evaluating the proposed acquisition' worth 12 technical marks and 4 professional-skills marks for evaluation.",
          steps: [
            "Set out briefing-notes format with a heading and structured points (communication)",
            "Analyse the acquisition using case financials and strategic fit (analysis)",
            "Weigh advantages against risks and reach a justified recommendation (evaluation)",
          ],
          conclusion:
            "By using the briefing-notes format, drawing on case data, and reaching a balanced, justified view, the candidate earns both the technical marks and the 4 evaluation skills marks.",
          markingNotes: [
            "Correct format and structure (communication)",
            "Balanced evaluation with a justified conclusion (evaluation skill)",
          ],
        },
      },
      {
        id: "sbl-sn2",
        title: "Governance, ethics and stakeholders",
        testPointIds: ["sbl-tp2"],
        explanation: [
          "SBL simulates the senior leadership role, and governance is central. A sound board has a balance of executive and independent non-executive directors, separation of the chair and CEO, and functioning audit, remuneration and nomination committees. The exam gives a flawed structure (a dominant CEO, no NEDs, related-party dealings) and asks you to evaluate the weaknesses and recommend improvements grounded in the case.",
          "Ethics is examined through dilemmas requiring a framework such as the American Accounting Association model or Tucker's five questions (is it profitable, legal, fair, right, sustainable?). The distinction between a compliance-based approach (following rules) and an integrity-based approach (embedding values) often features. The examiner rewards a reasoned recommendation that protects the public interest, not just rule citation.",
          "Stakeholder management applies Mendelow's power/interest matrix to identify key players and the strategy for each, then addresses conflicts between stakeholders — for example, shareholders wanting cost cuts versus employees and communities affected by them. A strong answer manages, rather than ignores, these tensions.",
        ],
        keyRules: [
          "Sound governance: board balance, split chair/CEO, audit/remuneration/nomination committees",
          "Use an ethical framework and protect the public interest",
          "Manage conflicting stakeholder claims using Mendelow",
        ],
      },
      {
        id: "sbl-sn3",
        title: "Strategic analysis, choice and implementation",
        testPointIds: ["sbl-tp3", "sbl-tp5"],
        explanation: [
          "Strategy in SBL follows the analysis–choice–implementation logic. Position analysis combines external tools (PESTEL, Porter's five forces) with internal ones (value chain, resources and capabilities, SWOT) to understand where the organisation stands. The key exam skill is applying these to the case data rather than listing generic factors.",
          "Strategic choice is evaluated against suitability (does it address the strategic position?), acceptability (return, risk and stakeholder reactions) and feasibility (do the resources and capabilities exist?). Ansoff's matrix frames the direction (market penetration, product development, market development, diversification) and the method (organic growth, acquisition, or alliance) must fit the organisation's situation.",
          "Implementation increasingly turns on technology, data and change. Big data and analytics, automation, e-business and cyber-security are evaluated for their strategic benefit against cost and risk. Change management — using models such as Lewin's unfreeze–change–refreeze and addressing resistance — determines whether a good strategy is actually delivered.",
        ],
        keyRules: [
          "Evaluate strategy against suitability, acceptability and feasibility",
          "Apply position frameworks to case data, then recommend",
          "Address technology benefits/risks and the people side of change",
        ],
      },
      {
        id: "sbl-sn4",
        title: "Risk, control and finance for leaders",
        testPointIds: ["sbl-tp4"],
        explanation: [
          "Senior leaders must manage risk, not just report it. SBL expects you to identify the organisation's key risks from the case, assess them by likelihood and impact, and select a response using the TARA framework — transfer (insure/outsource), avoid (exit the activity), reduce (controls), or accept (retain within appetite). Prioritising risks before responding is what turns a list into leadership.",
          "Internal control provides assurance that risks are managed. A COSO-style view covers the control environment, risk assessment, control activities, information and communication, and monitoring, supported by internal audit. The exam asks you to design or evaluate controls that address the specific risks in the case rather than reciting a generic control list.",
          "Finance underpins leadership decisions. You will interpret ratios, budgets or investment data to support a recommendation — for example, whether the organisation can afford an acquisition or whether a division is underperforming. The skill is connecting the numbers to the strategic decision, demonstrating commercial acumen.",
        ],
        keyRules: [
          "Assess risks by likelihood and impact, then apply TARA",
          "Design controls that address the specific case risks",
          "Link financial analysis to the leadership decision",
        ],
      },
    ],
    examPractice: [
      {
        id: "sbl-ep1",
        testPointIds: ["sbl-tp1", "sbl-tp2"],
        style: "Integrated case — report with professional-skills marks",
        question:
          "The CEO also chairs the board, there are no independent NEDs, and a major contract was awarded to a company owned by the CEO's spouse. Write a section of a report to the board (technical marks) evaluating the governance weaknesses and recommending improvements (professional-skills marks for evaluation and communication).",
        answerPlan: [
          "Use report format with a heading and structured points",
          "Identify each governance weakness from the case",
          "Recommend a specific improvement for each and reach a balanced conclusion",
        ],
        modelAnswer:
          "Report to the Board — Corporate Governance Review. Three weaknesses are evident. First, the CEO also chairs the board, concentrating power and removing the independent challenge the roles should provide; the roles should be separated. Second, the absence of independent non-executive directors means there is no objective oversight of management or of board committees; the board should appoint a suitable number of independent NEDs and establish audit, remuneration and nomination committees. Third, awarding a major contract to a company owned by the CEO's spouse is a related-party conflict of interest; such transactions should be disclosed, approved by independent directors, and subject to a competitive process. On balance, these weaknesses expose the company to reputational and financial risk and to a loss of investor confidence, so implementing the recommended separation, independent oversight and conflict-of-interest procedures should be treated as a priority.",
        markingGuide: [
          "Technical: each of the three weaknesses correctly identified with a valid recommendation",
          "Communication skill: appropriate report format and structure",
          "Evaluation skill: balanced conclusion prioritising the actions from the case facts",
        ],
      },
      {
        id: "sbl-ep2",
        testPointIds: ["sbl-tp3"],
        style: "Integrated case — strategy evaluation",
        question:
          "The board proposes diversifying into an unrelated overseas market. Evaluate this proposal using the suitability, acceptability and feasibility criteria based on the case facts.",
        answerPlan: [
          "Assess suitability against the strategic position",
          "Assess acceptability (risk, return, stakeholders)",
          "Assess feasibility (resources/capabilities) and conclude",
        ],
        modelAnswer:
          "Suitability: unrelated diversification does little to build on the company's existing strengths and may not address its core strategic position, making it questionable unless the current market is declining. Acceptability: overseas, unrelated expansion carries high risk (unfamiliar market, currency, culture) and uncertain return, and shareholders seeking stable returns may resist. Feasibility: the case suggests limited international experience and stretched finances, so the resources and capabilities to execute are doubtful. On balance the proposal scores poorly on all three criteria; a lower-risk related direction or an alliance/joint venture to acquire local knowledge would be preferable.",
        markingGuide: [
          "1 mark each for reasoned suitability, acceptability and feasibility using case facts",
          "Evaluation skill: a justified overall recommendation",
        ],
      },
      {
        id: "sbl-ep3",
        testPointIds: ["sbl-tp4"],
        style: "Integrated case — risk",
        question:
          "Identify two key risks facing the organisation from the case and recommend an appropriate response for each using the TARA framework.",
        answerPlan: [
          "Select two case-specific risks",
          "Assess impact/likelihood briefly",
          "Apply a TARA response to each",
        ],
        modelAnswer:
          "Risk 1: reliance on a single major customer for most revenue (high impact, moderate likelihood). Response: reduce by diversifying the customer base and negotiating longer contracts, and partially transfer through credit insurance. Risk 2: a cyber-security threat to customer data given weak IT controls (high impact, rising likelihood). Response: reduce through stronger access controls, encryption, staff training and penetration testing, with residual risk transferred via cyber insurance. In both cases the risks should be monitored against the board's risk appetite.",
        markingGuide: [
          "1 mark each: valid case-specific risk with a suitable TARA response",
          "Commercial acumen: responses are practical and proportionate",
        ],
      },
    ],
  }),

  "acca-all-m11": examDepth({
    testPoints: [
      {
        id: "sbr-tp1",
        title: "Framework, ethics and professional judgement",
        priority: "critical",
        examinerFocus:
          "Applying the Conceptual Framework and ethical principles to justify a reporting treatment with professional judgement, including the professional marks.",
        typicalQuestionForms: [
          "Discuss the correct treatment of a transaction, justified by the Framework, with an ethics angle",
          "Ethics scenario where management pressures for a favourable but misleading treatment",
        ],
        mustKnow: [
          "Framework: definitions, recognition, measurement, and the primacy of faithful representation",
          "Substance over form and the exercise of judgement where standards are unclear",
          "Ethical threats in reporting and the accountant's duty to the public interest",
        ],
        scoringActions: [
          "Justify the treatment by reference to the Framework and the relevant standard",
          "Address the ethical dimension and recommend the faithful treatment",
        ],
      },
      {
        id: "sbr-tp2",
        title: "Group reporting and changes in group structure",
        priority: "critical",
        examinerFocus:
          "Applying complex consolidation — step acquisitions, disposals, foreign subsidiaries, associates and joint arrangements — with judgement.",
        typicalQuestionForms: [
          "Prepare/explain the treatment of a step acquisition, a partial disposal, or a foreign subsidiary translation",
          "Discuss the accounting for a joint arrangement or an associate under equity accounting",
        ],
        mustKnow: [
          "Step acquisition: remeasure the previously held interest to fair value at the date control is obtained",
          "Disposals: full vs partial (loss of control triggers a gain/loss and remeasurement of any retained interest)",
          "Foreign subsidiary (IAS 21): translate at closing/average rates; exchange differences to OCI",
        ],
        scoringActions: [
          "Identify whether control is gained, retained or lost before choosing the method",
          "Route foreign-currency and revaluation differences correctly (OCI vs profit or loss)",
        ],
      },
      {
        id: "sbr-tp3",
        title: "Application of individual IFRS Standards with judgement",
        priority: "high",
        examinerFocus:
          "Applying and critiquing individual standards (financial instruments, revenue, leases, deferred tax, employee benefits, provisions) to complex scenarios.",
        typicalQuestionForms: [
          "Explain and journal a complex transaction under the relevant standard",
          "Discuss where a standard requires judgement or produces contentious outcomes",
        ],
        mustKnow: [
          "IFRS 9 classification/measurement of financial instruments and expected credit losses",
          "IFRS 15 (revenue), IFRS 16 (leases), IAS 19 (employee benefits), IAS 12 (deferred tax) key mechanics",
          "IAS 37 provisions and contingencies, and the judgement in estimates",
        ],
        scoringActions: [
          "State the standard, the principle, and then apply it to the specific facts",
          "Show the double entry and its effect on the primary statements",
        ],
      },
      {
        id: "sbr-tp4",
        title: "Reporting performance, current issues and non-financial reporting",
        priority: "high",
        examinerFocus:
          "Discussing the reporting of performance, current developments, sustainability/integrated reporting and their implications for users.",
        typicalQuestionForms: [
          "Discuss a current issue (e.g. sustainability reporting, a proposed standard change) and its effects",
          "Critique performance reporting or the usefulness of a measure to stakeholders",
        ],
        mustKnow: [
          "Integrated and sustainability reporting concepts and the limitations of financial statements",
          "Current developments and proposed/amended standards on the syllabus",
          "How management commentary and alternative performance measures can mislead",
        ],
        scoringActions: [
          "Discuss both benefits and limitations, reaching a reasoned view",
          "Relate the issue to the needs of specific user groups",
        ],
      },
      {
        id: "sbr-tp5",
        title: "Analysis and interpretation for stakeholders",
        priority: "high",
        examinerFocus:
          "Interpreting financial statements and the effect of accounting choices for the decision needs of a specified stakeholder.",
        typicalQuestionForms: [
          "Analyse performance/position for a stakeholder, considering the impact of accounting policies",
          "Explain how a particular treatment distorts comparability or a key ratio",
        ],
        mustKnow: [
          "How policy choices (e.g. revaluation, capitalisation, revenue timing) affect ratios and comparability",
          "Tailoring interpretation to the stakeholder's specific decision",
          "Limitations of the financial statements and the need for non-financial information",
        ],
        scoringActions: [
          "Frame the analysis around the stakeholder's actual decision",
          "Explain how accounting choices affect the numbers before concluding",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; SBR rewards discussion and judgement — journals alone rarely pass, and professional marks reward clear, reasoned communication.",
      timeBudget:
        "3 hours 15 minutes. Section A has two scenario questions (the group question and one on other reporting/ethics); Section B has two questions. Budget ~1.95 minutes per mark and plan before writing.",
      answerSequence: [
        "Plan the group/Section A questions carefully, noting the reporting issue in each exhibit",
        "Write treatments as principle → application → journal/effect, adding discussion",
        "In Section B, prioritise discussion and the professional/ethics marks",
      ],
      qualityChecks: [
        "Confirm each treatment cites the standard/Framework and is applied to the facts",
        "Check discussion reaches a reasoned conclusion, not just two-sided description",
      ],
    },
    studyNotes: [
      {
        id: "sbr-sn1",
        title: "Judgement, the Framework and ethics at SBR",
        testPointIds: ["sbr-tp1"],
        explanation: [
          "SBR is the judgement paper. Where FR asked you to apply a rule, SBR asks you to justify a treatment by reference to the Conceptual Framework and the relevant standard, especially where the standards are silent or conflict. Faithful representation and substance over form are your anchors: the accounts must depict economic reality, and you should argue from the definitions of assets, liabilities, income and expenses.",
          "Ethics is examined in the reporting context. Management often has incentives to flatter results — capitalising costs that should be expensed, recognising revenue early, or hiding liabilities. The candidate must identify the threat, explain why the proposed treatment is not a faithful representation, and recommend the correct treatment, remembering the accountant's overriding duty to the public interest.",
          "Professional marks in SBR reward clear, logical, well-communicated reasoning. Structure answers so that the principle is stated, applied to the specific facts, and concluded with a recommendation. Vague assertions or unsupported journals lose the judgement and professional marks that distinguish a pass.",
        ],
        keyRules: [
          "Justify treatments using the Framework and substance over form",
          "Identify reporting ethics threats and recommend the faithful treatment",
          "Structure as principle → application → conclusion for professional marks",
        ],
      },
      {
        id: "sbr-sn2",
        title: "Complex groups and changes in structure",
        testPointIds: ["sbr-tp2"],
        explanation: [
          "Group reporting is the defining SBR skill and goes well beyond FR's simple consolidation. The first question in any group scenario is whether control is being gained, retained or lost, because this determines the method. In a step acquisition that gains control, the previously held equity interest is remeasured to fair value at the date control is obtained, with the gain or loss in profit or loss, and goodwill is calculated at that date.",
          "Disposals split by whether control is lost. A full disposal or a partial disposal that loses control triggers a gain or loss on disposal and remeasurement of any retained interest to fair value; a partial disposal that retains control is treated as a transaction between owners (an equity movement), with no gain or loss in profit or loss. Getting this distinction right is worth significant marks.",
          "Foreign subsidiaries are translated under IAS 21: assets and liabilities at the closing rate, income and expenses at the average rate, with the resulting exchange differences recognised in other comprehensive income. Associates and joint ventures are equity accounted, while joint operations recognise the investor's share of assets, liabilities, income and expenses directly.",
        ],
        keyRules: [
          "Step acquisition gaining control: remeasure the prior interest to fair value",
          "Losing control triggers a gain/loss; retaining control is an equity transaction",
          "IAS 21: assets/liabilities at closing rate, income at average, differences to OCI",
        ],
        workedProblem: {
          scenario:
            "P held 30% of A (an associate) and buys a further 40% to reach 70% and control. The previously held 30% had a carrying amount of $120,000 but a fair value of $150,000 at the date control is obtained.",
          steps: [
            "Recognise this is a step acquisition that gains control",
            "Remeasure the 30% to fair value: gain = $150,000 − $120,000 = $30,000 to profit or loss",
            "Goodwill is calculated using the fair value of the previously held interest ($150,000) plus consideration for the 40% plus NCI, less fair value of net assets",
          ],
          conclusion:
            "A $30,000 remeasurement gain is recognised in profit or loss, and goodwill on obtaining control is measured using the fair value of the previously held 30% interest.",
          markingNotes: [
            "Previously held interest remeasured to fair value with a $30,000 gain",
            "Goodwill computed at the date control is obtained using that fair value",
          ],
        },
      },
      {
        id: "sbr-sn3",
        title: "Applying individual standards with judgement",
        testPointIds: ["sbr-tp3"],
        explanation: [
          "SBR tests the application of individual standards to complex, judgement-heavy situations. IFRS 9 requires financial assets to be classified by business model and cash-flow characteristics (amortised cost, fair value through OCI, or fair value through profit or loss) and imposes an expected-credit-loss impairment model. The candidate must classify, measure, and explain the profit-or-loss/OCI impact.",
          "Other frequently examined standards include IFRS 15 for complex revenue arrangements, IFRS 16 for leases (including sale-and-leaseback), IAS 19 for defined-benefit pension remeasurements (with service cost and net interest in profit or loss and remeasurements in OCI), and IAS 12 deferred tax on temporary differences. In each case, the marks come from stating the principle, applying it to the facts, and showing the double entry and statement effect.",
          "Estimates and provisions require judgement under IAS 37: a provision needs a present obligation, a probable outflow and a reliable estimate, while contingent items are disclosed. SBR often asks you to challenge management's estimate or to explain why a proposed provision does not meet the recognition criteria, demonstrating professional scepticism.",
        ],
        keyRules: [
          "IFRS 9: classify by business model and cash flows; apply expected credit losses",
          "IAS 19: service cost and net interest to profit or loss; remeasurements to OCI",
          "IAS 37: recognise a provision only with a present obligation, probable outflow, reliable estimate",
        ],
      },
      {
        id: "sbr-sn4",
        title: "Performance reporting, current issues and stakeholder analysis",
        testPointIds: ["sbr-tp4", "sbr-tp5"],
        explanation: [
          "SBR asks you to look beyond the numbers to how performance is reported and to current developments. Integrated and sustainability reporting respond to the limitation that traditional financial statements omit much of what drives value — human, intellectual, social and natural capital. You should be able to discuss the benefits (broader accountability, better decision-relevance) and the limitations (comparability, measurement, greenwashing risk) and reach a reasoned view.",
          "Current issues include proposed or amended standards and topical debates, and the misuse of alternative performance measures and management commentary to present a flattering picture. The examiner rewards awareness of developments and the ability to explain their implications for preparers and users, always relating them to specific user needs.",
          "Analysis for stakeholders ties it together: the interpretation must be framed around the actual decision of a specified stakeholder (a lender assessing solvency, an investor assessing returns) and must explain how accounting policy choices — revaluation, capitalisation, revenue timing — affect the ratios and comparability before any conclusion is drawn.",
        ],
        keyRules: [
          "Discuss both benefits and limitations of integrated/sustainability reporting",
          "Relate current issues to specific user needs",
          "Frame stakeholder analysis around the decision and the effect of policy choices",
        ],
      },
    ],
    examPractice: [
      {
        id: "sbr-ep1",
        testPointIds: ["sbr-tp2"],
        style: "Section A — group reporting",
        question:
          "P owns 80% of S. During the year P sold a further 20% of S for $200,000, retaining a 60% controlling interest; the carrying amount of the 20% NCI transferred was $150,000. Explain how this is accounted for and the effect on the group.",
        answerPlan: [
          "Determine whether control is lost",
          "Classify the transaction",
          "State the accounting effect",
        ],
        modelAnswer:
          "P retains 60% and therefore control, so this is a transaction between owners, not a disposal. No gain or loss is recognised in profit or loss. The NCI is increased by the $150,000 carrying amount of the interest transferred, and the difference between the $200,000 consideration received and the $150,000 increase in NCI — a $50,000 credit — is recognised directly in equity (attributable to the parent). Goodwill is unchanged.",
        markingGuide: [
          "1 mark: control retained, so treated as an equity transaction (no P/L gain)",
          "1 mark: $50,000 difference taken to equity and NCI adjusted",
        ],
      },
      {
        id: "sbr-ep2",
        testPointIds: ["sbr-tp1", "sbr-tp3"],
        style: "Section B — ethics and standards",
        question:
          "Management wishes to capitalise $2m of routine staff training costs as an intangible asset to improve reported profit. Advise on the correct treatment and the ethical issue.",
        answerPlan: [
          "State the recognition principle",
          "Apply it to training costs",
          "Address the ethical dimension",
        ],
        modelAnswer:
          "Under IAS 38, an intangible asset is recognised only if it is identifiable, controlled, and will generate probable future economic benefits whose cost can be measured reliably. Staff training does not give the entity control over the resulting knowledge (staff can leave), so it fails the recognition criteria and must be expensed. Capitalising it would overstate assets and profit, breaching faithful representation. Ethically, this is a self-interest/management-pressure threat to objectivity; the accountant must decline to capitalise the costs, explain the correct treatment to management, and, if pressure persists, escalate the matter, upholding the public interest.",
        markingGuide: [
          "1 mark: training costs must be expensed (control/recognition failure)",
          "1 mark: ethical threat identified and appropriate response given",
        ],
      },
      {
        id: "sbr-ep3",
        testPointIds: ["sbr-tp4"],
        style: "Section B — current issues",
        question:
          "A lender argues that the company's financial statements alone are insufficient to assess its long-term resilience. Discuss whether sustainability reporting would help, noting benefits and limitations.",
        answerPlan: [
          "Explain the limitation of financial statements",
          "Give benefits of sustainability reporting",
          "Give limitations and conclude",
        ],
        modelAnswer:
          "Financial statements are largely historical and omit environmental, social and governance factors that increasingly affect long-term resilience, so the lender's concern is valid. Sustainability reporting would help by disclosing climate risks, resource dependencies and social factors relevant to future cash flows and solvency, improving decision-usefulness and accountability. However, its limitations include weaker comparability (varied frameworks), measurement difficulty, and the risk of selective or 'greenwashed' disclosure. On balance, sustainability reporting is a useful complement — not a substitute — for the financial statements, and is most valuable when prepared under a recognised, assured framework.",
        markingGuide: [
          "1 mark: benefit of sustainability reporting for resilience assessment",
          "1 mark: a valid limitation and a reasoned conclusion",
        ],
      },
    ],
  }),

  "acca-all-m12": examDepth({
    testPoints: [
      {
        id: "afm-tp1",
        title: "Advanced investment appraisal (APV, real options, FCF valuation)",
        priority: "critical",
        examinerFocus:
          "Building complex NPV/APV models, valuing businesses on free cash flows, and applying real options to strategic investment decisions.",
        typicalQuestionForms: [
          "Section A appraisal using adjusted present value, separating base-case NPV from financing side-effects",
          "Real-option valuation (option to delay/expand/abandon) using a Black-Scholes or binomial approach",
        ],
        mustKnow: [
          "APV = base-case NPV (at ungeared cost of equity) + present value of financing side-effects (tax shield, issue costs)",
          "Free cash flow to firm valuation discounted at WACC; free cash flow to equity at the cost of equity",
          "Real options add value that NPV ignores; Black-Scholes inputs (Pa, Pe, r, t, volatility)",
        ],
        scoringActions: [
          "Separate the base-case NPV from the financing effects in an APV",
          "State assumptions and interpret the option value for the decision",
        ],
      },
      {
        id: "afm-tp2",
        title: "Business valuation, acquisitions and mergers",
        priority: "critical",
        examinerFocus:
          "Valuing target companies, quantifying synergies, and evaluating the financial impact and structure of an acquisition.",
        typicalQuestionForms: [
          "Value a target and the combined entity, quantifying synergies and the gain to each party",
          "Evaluate the form of consideration (cash, shares, debt) and its effect on control and gearing",
        ],
        mustKnow: [
          "Valuation methods: FCF/DCF, P/E, dividend valuation, asset-based; premium and synergy quantification",
          "Bootstrapping and the effect of a share-for-share exchange on EPS and control",
          "Post-acquisition value = combined stand-alone values + synergies − premium paid",
        ],
        scoringActions: [
          "Value target and acquirer consistently before assessing the deal",
          "Split the total gain between acquirer and target shareholders",
        ],
      },
      {
        id: "afm-tp3",
        title: "Corporate reconstruction and reorganisation",
        priority: "medium",
        examinerFocus:
          "Designing and evaluating financial reconstruction schemes for distressed companies and assessing the outcome for stakeholders.",
        typicalQuestionForms: [
          "Design a reconstruction (debt-for-equity, new finance, asset sales) and show its effect on the statement of financial position",
          "Assess whether stakeholders are better off under the scheme than under liquidation",
        ],
        mustKnow: [
          "Compare the reconstruction outcome with the liquidation (break-up) alternative for each class",
          "Debt-for-equity swaps and new capital raising rebalance gearing and restore viability",
          "Each affected party must be at least as well off as in liquidation to agree",
        ],
        scoringActions: [
          "Benchmark every class against their liquidation payout",
          "Show the reconstructed statement of financial position and revised gearing",
        ],
      },
      {
        id: "afm-tp4",
        title: "Advanced risk management: currency and interest-rate hedging",
        priority: "high",
        examinerFocus:
          "Selecting and computing hedges using forwards, money markets, futures, options and swaps, and evaluating the results.",
        typicalQuestionForms: [
          "Hedge a currency exposure via forward, money-market and options, then compare outcomes",
          "Interest-rate hedge using futures, options on futures, or an interest-rate/currency swap",
        ],
        mustKnow: [
          "Money-market hedge steps; forward locks a rate; currency options give asymmetric protection",
          "Futures hedging: number of contracts, basis risk, and closing out; options on futures",
          "Interest-rate and currency swaps and the gain shared between counterparties",
        ],
        scoringActions: [
          "Show each hedge's mechanics and net outcome for a like-for-like comparison",
          "Recommend the hedge that best fits the company's risk appetite",
        ],
      },
      {
        id: "afm-tp5",
        title: "Role of the treasury function and strategic financial issues",
        priority: "medium",
        examinerFocus:
          "Evaluating treasury policy, dividend and financing strategy, and international/ethical dimensions of financial management.",
        typicalQuestionForms: [
          "Discuss treasury/dividend/financing policy and its impact on shareholder value",
          "Evaluate international investment issues (political risk, transfer pricing) or an ethical dimension",
        ],
        mustKnow: [
          "Treasury as a cost or profit centre; centralisation benefits (netting, pooling)",
          "Dividend policy theories and signalling; financing and capital-structure implications",
          "International investment risks: political risk, exchange controls, and mitigation",
        ],
        scoringActions: [
          "Link policy choices to shareholder wealth and the scenario",
          "Address the ethical or governance angle where raised",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; AFM's Section A is a 50-mark case, so a structured model plus clear advice and discussion (including professional marks) is essential.",
      timeBudget:
        "3 hours 15 minutes: Section A one compulsory 50-mark question, Section B two 25-mark questions. Plan ~1.95 minutes per mark and read the Section A exhibits carefully first.",
      answerSequence: [
        "Plan the Section A case, mapping requirements to exhibits and the marks split",
        "Build models (APV, valuation, hedges) with clear proformas and assumptions",
        "Write the advisory report/discussion, earning professional marks for structure and judgement",
      ],
      qualityChecks: [
        "State assumptions and check discount rates match the cash flows (geared vs ungeared)",
        "Ensure every calculation ends in advice that answers the requirement",
      ],
    },
    studyNotes: [
      {
        id: "afm-sn1",
        title: "APV, free cash flow valuation and real options",
        testPointIds: ["afm-tp1"],
        explanation: [
          "AFM extends FM's appraisal to complex, strategic decisions. Adjusted present value separates the value of a project financed entirely by equity (the base-case NPV, discounted at the ungeared cost of equity) from the value created or lost by the way it is financed (the tax shield on debt, subsidised loans, and issue costs). APV is preferred to a single WACC when the financing mix changes over the project's life.",
          "Business and project valuation uses free cash flows. Free cash flow to the firm — operating cash flow after tax and reinvestment but before financing — is discounted at the WACC to give enterprise value; free cash flow to equity, after debt cash flows, is discounted at the cost of equity to give equity value directly. Consistency between the cash flow definition and the discount rate is essential.",
          "Real options capture the value of managerial flexibility that a static NPV ignores — the option to delay, expand, abandon or switch. These are valued using the Black-Scholes model (or a binomial tree), treating the underlying asset value, exercise price (investment cost), time, risk-free rate and volatility as the option inputs. A negative NPV project can be worth undertaking once the embedded option value is added.",
        ],
        keyRules: [
          "APV = base-case NPV (ungeared) + PV of financing side-effects",
          "FCF to firm → WACC (enterprise value); FCF to equity → cost of equity (equity value)",
          "Real options add value NPV omits; value with Black-Scholes/binomial",
        ],
        workedProblem: {
          scenario:
            "A project has a base-case NPV (all-equity) of −$500,000. It supports $4m of debt on which the annual tax shield is worth a present value of $800,000, and issue costs have a present value of $100,000. Calculate the APV.",
          steps: [
            "Start with the base-case NPV: −$500,000",
            "Add the present value of the debt tax shield: +$800,000",
            "Deduct issue costs: −$100,000",
          ],
          conclusion:
            "APV = −$500,000 + $800,000 − $100,000 = +$200,000; although the base-case NPV is negative, the financing side-effects make the project worthwhile.",
          markingNotes: [
            "Base case and financing effects correctly separated",
            "APV of +$200,000 with the right accept conclusion",
          ],
        },
      },
      {
        id: "afm-sn2",
        title: "Acquisitions, mergers and the gain to shareholders",
        testPointIds: ["afm-tp2"],
        explanation: [
          "Acquisition questions test whether a deal creates value and how the gain is split. First value the target and the acquirer on a consistent basis (usually free cash flow/DCF, supported by P/E or asset methods), then estimate synergies — revenue enhancements and cost savings that only arise from combining the businesses. The maximum an acquirer should pay is the target's stand-alone value plus the synergies; anything above transfers value to target shareholders.",
          "The form of consideration matters. A cash offer gives target shareholders certainty and crystallises their gain but uses acquirer cash or debt; a share-for-share exchange shares the future risk and reward but dilutes control and can affect earnings per share through 'bootstrapping', where a high-P/E acquirer boosts reported EPS by buying a low-P/E target. Debt consideration raises gearing and financial risk.",
          "The analysis must quantify the gain to each side: the total gain equals the combined value plus synergies less the two stand-alone values, and the premium paid determines how much of that gain the target shareholders capture versus the acquirer's shareholders. The examiner rewards a clear recommendation on price and structure.",
        ],
        keyRules: [
          "Max price = target stand-alone value + synergies",
          "Total gain = combined value + synergies − sum of stand-alone values",
          "Cash gives certainty; shares share risk and can dilute control/EPS",
        ],
      },
      {
        id: "afm-sn3",
        title: "Reconstruction and the liquidation benchmark",
        testPointIds: ["afm-tp3"],
        explanation: [
          "A financial reconstruction rescues a company that is viable in operations but insolvent in its capital structure. Typical schemes combine debt-for-equity swaps, the injection of new capital, the sale of non-core assets and the rescheduling of debt to reduce gearing and restore solvency. The candidate designs the scheme and prepares the reconstructed statement of financial position and revised gearing.",
          "The decisive test is the liquidation benchmark: every class of stakeholder — secured lenders, unsecured creditors, preference and ordinary shareholders — must be at least as well off under the reconstruction as they would be in a liquidation, or they will vote against it. This requires estimating the break-up (liquidation) value and comparing each class's payout.",
          "The examiner rewards a clear, quantified case that the reconstruction is preferable to liquidation for the parties whose agreement is needed, together with a sensible assessment of the company's post-reconstruction viability and any residual risks.",
        ],
        keyRules: [
          "Reconstruction must beat liquidation for every class whose consent is needed",
          "Common tools: debt-for-equity swaps, new capital, asset sales, rescheduling",
          "Show the reconstructed statement of financial position and revised gearing",
        ],
      },
      {
        id: "afm-sn4",
        title: "Advanced hedging and treasury strategy",
        testPointIds: ["afm-tp4", "afm-tp5"],
        explanation: [
          "AFM's risk management builds on FM to compare hedging instruments quantitatively. For currency risk, the forward market locks in a rate; the money-market hedge borrows or deposits now to fix the domestic outcome; and currency options give the right but not the obligation to transact, protecting the downside while retaining upside for a premium. The candidate computes the net outcome of each and recommends the best fit for the company's risk appetite.",
          "For interest-rate risk, futures and options on futures hedge against rate movements (with basis risk from the imperfect correlation between the hedge and the exposure), while forward rate agreements fix a rate for a future period. Interest-rate and currency swaps exchange cash-flow streams between counterparties, and the total benefit of a swap is shared between them — the examiner often asks you to compute and split that gain.",
          "Treasury strategy frames these decisions: whether treasury is run as a cost or profit centre, the benefits of centralisation (multilateral netting, cash pooling, economies of scale), and the interaction with dividend and financing policy. International investment adds political risk, exchange controls and transfer-pricing considerations, and ethical dimensions may arise where financial engineering conflicts with stakeholder interests.",
        ],
        keyRules: [
          "Compare forward, money-market and option hedges on a net-outcome basis",
          "Swaps: compute and split the total benefit between counterparties",
          "Centralised treasury enables netting, pooling and scale economies",
        ],
        workedProblem: {
          scenario:
            "A UK company will receive $1,100,000 in three months. The three-month forward rate is $1.10/£. Calculate the sterling receipt under a forward hedge.",
          steps: [
            "Identify the exposure: a dollar receipt to be converted to sterling",
            "Apply the forward rate: £ received = $1,100,000 / 1.10",
            "Compute: = £1,000,000",
          ],
          conclusion:
            "Under a forward hedge the company locks in £1,000,000, eliminating the uncertainty of the spot rate in three months' time.",
          markingNotes: [
            "Correct direction of the conversion (divide by $/£ rate)",
            "£1,000,000 locked-in receipt",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "afm-ep1",
        testPointIds: ["afm-tp2"],
        style: "Section A — acquisition valuation",
        question:
          "Target T has a stand-alone value of $400m. Acquirer A estimates synergies of $60m from the combination. A offers $440m in cash. Calculate the maximum A should pay, the gain to T's shareholders, and the gain retained by A.",
        answerPlan: [
          "Compute the maximum price",
          "Compute the premium and gain to T",
          "Compute A's retained gain",
        ],
        modelAnswer:
          "Maximum A should pay = stand-alone value + synergies = $400m + $60m = $460m. A offers $440m, a premium of $40m over the $400m stand-alone value, which is the gain to T's shareholders. A retains the remaining synergy: $60m total gain − $40m to T = $20m for A's shareholders. The offer is value-creating for A because $440m is below the $460m maximum.",
        markingGuide: [
          "1 mark: maximum price of $460m",
          "1 mark: gain to T of $40m and gain to A of $20m",
        ],
      },
      {
        id: "afm-ep2",
        testPointIds: ["afm-tp1"],
        style: "Section B — APV",
        question:
          "A project's all-equity (base-case) NPV is $1.2m. It allows the firm to raise a subsidised government loan whose benefit has a present value of $300,000, but issue costs have a present value of $150,000. Calculate the APV and advise.",
        answerPlan: [
          "State base-case NPV",
          "Add financing benefits, deduct costs",
          "Advise",
        ],
        modelAnswer:
          "APV = base-case NPV + financing side-effects = $1.2m + $0.3m − $0.15m = $1.35m. The APV is positive and higher than the base case once the subsidised loan benefit (net of issue costs) is included, so the project should be accepted; the financing arrangement adds $150,000 of net value.",
        markingGuide: [
          "1 mark: financing side-effects correctly netted (+$150,000)",
          "1 mark: APV of $1.35m and accept advice",
        ],
      },
      {
        id: "afm-ep3",
        testPointIds: ["afm-tp4"],
        style: "Section B — hedging choice",
        question:
          "A company must pay $500,000 in three months. Explain how a money-market hedge would work and one advantage of using a currency option instead.",
        answerPlan: [
          "Describe money-market hedge steps for a payable",
          "State one advantage of an option",
        ],
        modelAnswer:
          "For a dollar payable, the money-market hedge deposits enough dollars now (borrowing sterling to buy them at spot) so that, with interest, the deposit grows to $500,000 in three months, fixing the sterling cost today. An advantage of a currency option instead is that it caps the worst-case cost while allowing the company to benefit if the exchange rate moves favourably — it provides downside protection with upside potential, in exchange for paying a premium.",
        markingGuide: [
          "1 mark: correct money-market hedge mechanics for a payable",
          "1 mark: valid advantage of an option (asymmetric payoff)",
        ],
      },
    ],
  }),

  "acca-all-m13": examDepth({
    testPoints: [
      {
        id: "apm-tp1",
        title: "Strategic planning, control and performance management systems",
        priority: "critical",
        examinerFocus:
          "Evaluating whether performance management systems and information fit the organisation's strategy, environment and structure.",
        typicalQuestionForms: [
          "Evaluate the suitability of a performance management/reporting system for the organisation",
          "Discuss management information needs, big data or the impact of the external environment",
        ],
        mustKnow: [
          "Fit between strategy, structure and the performance management system",
          "Levers of control, planning vs feedback/feedforward control, and management styles (e.g. Hopwood/Simons)",
          "Big data, information quality, and the risks of poor performance information",
        ],
        scoringActions: [
          "Judge the system against the specific strategy and environment, not in the abstract",
          "Recommend improvements tied to the organisation's needs",
        ],
      },
      {
        id: "apm-tp2",
        title: "Performance measurement frameworks and models",
        priority: "critical",
        examinerFocus:
          "Applying and critically evaluating multi-dimensional models (balanced scorecard, performance pyramid, building block) for a scenario.",
        typicalQuestionForms: [
          "Apply the balanced scorecard (or building block/performance pyramid) to design measures for the organisation",
          "Critically evaluate an existing set of measures and their limitations",
        ],
        mustKnow: [
          "Balanced scorecard perspectives: financial, customer, internal process, learning and growth",
          "Fitzgerald & Moon building block model (dimensions, standards, rewards); performance pyramid",
          "Value-based management and economic value added (EVA) concepts",
        ],
        scoringActions: [
          "Design measures specific to the scenario, not generic examples",
          "Critique the balance and behavioural effects of the measures",
        ],
      },
      {
        id: "apm-tp3",
        title: "Divisional performance and transfer pricing",
        priority: "high",
        examinerFocus:
          "Calculating and evaluating ROI, RI and EVA for divisions, and setting transfer prices that promote goal congruence.",
        typicalQuestionForms: [
          "Calculate and critique divisional ROI/RI/EVA and the resulting manager behaviour",
          "Recommend a transfer price and assess its effect on divisional and group profit",
        ],
        mustKnow: [
          "ROI, RI and EVA definitions and the behavioural drawbacks of each",
          "EVA = NOPAT − (WACC × capital employed), with adjustments for accounting distortions",
          "Transfer-price range: minimum marginal cost (+ opportunity cost), maximum market price",
        ],
        scoringActions: [
          "Interpret the behavioural consequences, not just the figure",
          "Justify the transfer price for goal congruence",
        ],
      },
      {
        id: "apm-tp4",
        title: "Performance analysis: financial and non-financial",
        priority: "high",
        examinerFocus:
          "Analysing performance using appropriate financial and non-financial indicators, including in not-for-profit contexts, and predicting corporate failure.",
        typicalQuestionForms: [
          "Assess performance with a mix of financial and non-financial measures and reach a conclusion",
          "Apply value-for-money analysis in the public/not-for-profit sector or use a failure model",
        ],
        mustKnow: [
          "Not-for-profit value for money: economy, efficiency, effectiveness",
          "Limitations of purely financial measures; non-financial indicators of future performance",
          "Corporate failure prediction (e.g. Altman Z-score) and its limitations",
        ],
        scoringActions: [
          "Blend financial and non-financial evidence before concluding",
          "State the limitations of the measures and models used",
        ],
      },
      {
        id: "apm-tp5",
        title: "Reward, behaviour and the human aspects of performance",
        priority: "medium",
        examinerFocus:
          "Evaluating how targets, rewards and measurement affect behaviour, including gaming, short-termism and unintended consequences.",
        typicalQuestionForms: [
          "Discuss the behavioural consequences of a reward scheme or set of targets",
          "Recommend measures/rewards that reduce dysfunctional behaviour",
        ],
        mustKnow: [
          "Dysfunctional behaviour: gaming, tunnel vision, sub-optimisation, short-termism, measure fixation",
          "Goal congruence and the design of reward systems to align managers and owners",
          "The difference between controllable and uncontrollable performance",
        ],
        scoringActions: [
          "Identify the specific dysfunctional behaviour a measure could cause",
          "Recommend a design change that restores goal congruence",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; APM rewards critical evaluation over calculation — the marks lie in judging measures and their behavioural effects, plus professional marks.",
      timeBudget:
        "3 hours 15 minutes: Section A one compulsory 50-mark question, Section B two 25-mark questions. Budget ~1.95 minutes per mark; plan discussion carefully.",
      answerSequence: [
        "Plan the Section A case, identifying the performance issue and required outputs",
        "Do any calculations, then spend most of the time evaluating and recommending",
        "In Section B, prioritise critical evaluation and behavioural analysis",
      ],
      qualityChecks: [
        "Confirm every measure is judged for its behavioural effect, not just computed",
        "Check recommendations fit the specific organisation's strategy",
      ],
    },
    studyNotes: [
      {
        id: "apm-sn1",
        title: "Systems fit and the performance management context",
        testPointIds: ["apm-tp1"],
        explanation: [
          "APM is about designing and critiquing whole performance management systems, not individual calculations. The central idea is fit: a performance management system must suit the organisation's strategy, structure, size and external environment. A rigid, financially focused system may suit a stable, cost-leadership business but fail a fast-moving, differentiated one that needs non-financial and forward-looking measures.",
          "Control can be planning-based (feedforward, anticipating problems) or feedback-based (reacting to results), and management styles range from budget-constrained to profit-conscious to non-accounting (Hopwood), with Simons' levers of control balancing diagnostic and interactive systems. The examiner expects you to diagnose which style and control approach suit the scenario.",
          "Information quality underpins everything. Big data and analytics can sharpen performance information, but poor-quality, untimely or irrelevant information undermines decisions. A strong answer evaluates whether the organisation's information supports its strategy and recommends targeted improvements.",
        ],
        keyRules: [
          "A performance management system must fit strategy, structure and environment",
          "Distinguish feedforward (planning) from feedback control",
          "Poor information quality undermines performance management",
        ],
      },
      {
        id: "apm-sn2",
        title: "Multi-dimensional performance frameworks",
        testPointIds: ["apm-tp2"],
        explanation: [
          "Because financial measures alone are backward-looking and can be gamed, APM emphasises multi-dimensional frameworks. The balanced scorecard views performance through four perspectives — financial, customer, internal business process, and learning and growth — linked by cause-and-effect: investment in learning improves processes, which improve customer satisfaction, which improves financial results. The exam asks you to design measures for each perspective specific to the organisation.",
          "Alternative models include the Fitzgerald and Moon building block model (results dimensions of competitiveness and financial performance, and determinants such as quality, flexibility, resource utilisation and innovation, underpinned by fair standards and motivating rewards), and Lynch and Cross's performance pyramid linking corporate vision down to day-to-day operations. Each provides a lens the candidate must apply and critique.",
          "Value-based management and economic value added focus attention on creating shareholder value by charging for all capital used. The examiner rewards not just applying a framework but critically evaluating whether it is balanced, whether the measures drive the right behaviour, and where it might mislead.",
        ],
        keyRules: [
          "Balanced scorecard: financial, customer, internal process, learning and growth",
          "Building block model links dimensions, standards and rewards",
          "Design scenario-specific measures and critique their behavioural effects",
        ],
        workedProblem: {
          scenario:
            "An online retailer currently measures only monthly profit. Suggest one measure for each balanced-scorecard perspective and explain the cause-and-effect link.",
          steps: [
            "Financial: revenue growth / gross margin",
            "Customer: on-time delivery rate or customer satisfaction score",
            "Internal process: order-processing cycle time; Learning and growth: staff training hours / new-feature releases",
          ],
          conclusion:
            "Training and system development (learning and growth) improve order-processing time (internal process), which raises on-time delivery and satisfaction (customer), ultimately driving revenue and margin (financial) — a balanced, forward-looking set beats profit alone.",
          markingNotes: [
            "A relevant measure for each of the four perspectives",
            "Cause-and-effect linkage explained",
          ],
        },
      },
      {
        id: "apm-sn3",
        title: "Divisional performance, EVA and transfer pricing",
        testPointIds: ["apm-tp3"],
        explanation: [
          "APM revisits divisional performance with a critical eye. Return on investment and residual income (from PM) are joined by economic value added, which measures value created after charging for all capital: EVA equals net operating profit after tax, adjusted for accounting distortions, less a charge of WACC times capital employed. Positive EVA means the division earned more than the cost of the capital it used.",
          "Each measure drives behaviour. ROI can cause managers to reject value-adding projects that dilute their percentage; RI and EVA better align with shareholder value but depend on the imputed cost of capital and the asset base used. EVA's accounting adjustments (capitalising R&D, adding back non-cash provisions) aim to remove distortions but add complexity. The examiner wants the behavioural critique, not just the number.",
          "Transfer pricing sets the internal price between divisions and, done wrong, causes dysfunctional decisions. The floor is the transferring division's marginal cost plus any opportunity cost of lost external sales; the ceiling is the external market price. A price within this range preserves goal congruence so that decisions optimal for a division are also optimal for the group.",
        ],
        keyRules: [
          "EVA = adjusted NOPAT − (WACC × capital employed)",
          "ROI can cause underinvestment; RI/EVA align better with value",
          "Transfer-price range: marginal cost (+ opportunity cost) to market price",
        ],
        workedProblem: {
          scenario:
            "A division has adjusted NOPAT of $900,000, capital employed of $5m and a WACC of 12%. Calculate EVA and interpret it.",
          steps: [
            "Capital charge = 12% × $5,000,000 = $600,000",
            "EVA = $900,000 − $600,000 = $300,000",
            "Interpret: positive EVA means value was created above the cost of capital",
          ],
          conclusion:
            "EVA is $300,000, so the division created $300,000 of value above the return required on its capital, indicating genuine value creation rather than just accounting profit.",
          markingNotes: [
            "Capital charge of $600,000 correctly computed",
            "EVA of $300,000 with a value-creation interpretation",
          ],
        },
      },
      {
        id: "apm-sn4",
        title: "Performance analysis, failure prediction and behaviour",
        testPointIds: ["apm-tp4", "apm-tp5"],
        explanation: [
          "Comprehensive performance analysis blends financial and non-financial evidence. In the not-for-profit and public sectors, where profit is not the objective, value for money is assessed through economy (inputs at least cost), efficiency (output per input) and effectiveness (achieving objectives). Purely financial measures are backward-looking and can hide problems, so non-financial indicators — quality, customer loyalty, innovation — often better predict future performance.",
          "Corporate failure prediction models such as the Altman Z-score combine financial ratios into a single score indicating the risk of insolvency. They are useful early-warning tools but have limitations: they rely on historical accounting data, were derived from particular populations, and can be distorted by creative accounting, so they should support rather than replace judgement.",
          "The human dimension is decisive. Measurement and reward shape behaviour, and poorly designed systems cause gaming, tunnel vision (focusing only on what is measured), sub-optimisation, short-termism and measure fixation. The examiner rewards identifying the specific dysfunctional behaviour a measure or reward could cause and recommending a redesign — for example, adding non-financial and longer-term measures — to restore goal congruence.",
        ],
        keyRules: [
          "Not-for-profit value for money: economy, efficiency, effectiveness",
          "Failure models (Z-score) are early warnings with real limitations",
          "Poorly designed measures cause gaming, short-termism and tunnel vision",
        ],
      },
    ],
    examPractice: [
      {
        id: "apm-ep1",
        testPointIds: ["apm-tp2"],
        style: "Section A — balanced scorecard critique",
        question:
          "A manufacturer's bonus depends solely on quarterly operating profit. Evaluate two problems with this single financial measure and recommend how a balanced scorecard would improve performance management.",
        answerPlan: [
          "Identify problems with a single financial measure",
          "Explain behavioural effects",
          "Recommend balanced-scorecard perspectives",
        ],
        modelAnswer:
          "Two problems: first, a sole focus on quarterly profit encourages short-termism — managers may cut R&D, training or maintenance to hit the quarter, damaging long-term performance; second, it invites gaming and measure fixation, ignoring quality, customer satisfaction and innovation that drive future profit. A balanced scorecard would add customer measures (satisfaction, retention), internal process measures (defect rates, cycle time) and learning-and-growth measures (training, new products), linked by cause and effect to future financial performance, giving a forward-looking, harder-to-game picture and better aligning behaviour with strategy.",
        markingGuide: [
          "1 mark each: two valid problems with behavioural effects",
          "1 mark: balanced-scorecard recommendation with relevant perspectives",
        ],
      },
      {
        id: "apm-ep2",
        testPointIds: ["apm-tp3"],
        style: "Section B — divisional performance",
        question:
          "Division X has adjusted NOPAT of $1.4m, capital employed of $8m and a WACC of 10%. Calculate EVA and explain one advantage of EVA over ROI for evaluating the division.",
        answerPlan: [
          "Compute EVA",
          "State an advantage over ROI",
        ],
        modelAnswer:
          "Capital charge = 10% × $8m = $0.8m. EVA = $1.4m − $0.8m = $0.6m, so the division created $600,000 of value above its cost of capital. An advantage of EVA over ROI is that EVA is an absolute measure that encourages managers to accept any project earning more than the cost of capital, whereas ROI, as a percentage, can lead a high-ROI division to reject value-adding projects that would lower its average return (underinvestment).",
        markingGuide: [
          "1 mark: EVA of $0.6m",
          "1 mark: valid advantage of EVA over ROI (avoids underinvestment)",
        ],
      },
      {
        id: "apm-ep3",
        testPointIds: ["apm-tp5"],
        style: "Section B — behavioural consequences",
        question:
          "A call centre rewards staff solely on the number of calls handled per hour. Identify the dysfunctional behaviour this may cause and recommend a change.",
        answerPlan: [
          "Identify the dysfunctional behaviour",
          "Explain the consequence",
          "Recommend a change",
        ],
        modelAnswer:
          "Rewarding only call volume causes tunnel vision and gaming: staff rush or prematurely end calls to raise their count, damaging customer satisfaction and first-call resolution — the very outcomes the centre exists to deliver. The recommendation is to balance the volume measure with quality measures such as customer satisfaction scores, first-call resolution rates and call-quality monitoring, so rewards align with overall service objectives rather than a single, easily gamed metric.",
        markingGuide: [
          "1 mark: dysfunctional behaviour identified (tunnel vision/gaming) with its consequence",
          "1 mark: appropriate balancing measure recommended",
        ],
      },
    ],
  }),

  "acca-all-m14": examDepth({
    testPoints: [
      {
        id: "atx-tp1",
        title: "Advanced personal tax planning (income tax, CGT, IHT combined)",
        priority: "critical",
        examinerFocus:
          "Giving reasoned, tax-efficient advice that combines income tax, capital gains tax and inheritance tax across a person's affairs (UK variant).",
        typicalQuestionForms: [
          "Advise on the most tax-efficient way to extract funds, gift assets, or structure a disposal",
          "Compare alternative courses of action and quantify the tax saved",
        ],
        mustKnow: [
          "Interaction of income tax, CGT and IHT reliefs and the order of planning",
          "CGT reliefs: business asset disposal relief, gift relief, rollover relief and the annual exempt amount",
          "IHT lifetime planning: PETs, the nil-rate band, business/agricultural property relief, and the seven-year rule",
        ],
        scoringActions: [
          "Compare the alternatives numerically and state the tax saved",
          "Give a clear recommendation with any non-tax caveats",
        ],
      },
      {
        id: "atx-tp2",
        title: "Advanced corporation tax and group planning",
        priority: "critical",
        examinerFocus:
          "Advising companies and groups on tax-efficient structuring, loss relief, group relief and gains groups.",
        typicalQuestionForms: [
          "Advise on group structure, loss relief and the transfer of assets within a gains group",
          "Compute and optimise a company's corporation tax with reliefs and group planning",
        ],
        mustKnow: [
          "Group relief for losses (75% group) and no-gain/no-loss transfers within a 75% gains group",
          "Loss-relief options and their timing to maximise relief and cash flow",
          "Substantial shareholding exemption and degrouping charges where relevant",
        ],
        scoringActions: [
          "Identify the correct group threshold for each relief (loss vs gains group)",
          "Recommend the timing and route that maximises overall relief",
        ],
      },
      {
        id: "atx-tp3",
        title: "Overseas and international tax",
        priority: "high",
        examinerFocus:
          "Advising on residence, domicile, double taxation relief, and the taxation of overseas income and gains.",
        typicalQuestionForms: [
          "Determine residence/domicile status and its effect on the scope of UK tax",
          "Compute double taxation relief and advise on structuring overseas operations",
        ],
        mustKnow: [
          "Statutory residence test and the effect of domicile on the arising vs remittance basis",
          "Double taxation relief (the lower of UK and overseas tax on the same income)",
          "Overseas companies: permanent establishment vs subsidiary and transfer pricing",
        ],
        scoringActions: [
          "Establish residence/domicile before deciding what is taxable in the UK",
          "Apply double taxation relief as the lower of the two taxes on the income",
        ],
      },
      {
        id: "atx-tp4",
        title: "Tax of business combinations, incorporation and cessation",
        priority: "high",
        examinerFocus:
          "Advising on the tax consequences of acquisitions, incorporation of a business, and cessation, including VAT and stamp taxes.",
        typicalQuestionForms: [
          "Advise on the tax-efficient acquisition or disposal of a business (share vs asset deal)",
          "Advise on incorporating a sole trade or on the cessation of a business",
        ],
        mustKnow: [
          "Share sale vs trade-and-asset sale: differing CGT, corporation tax and VAT consequences",
          "Incorporation relief and gift relief on transferring a business to a company",
          "Cessation rules, terminal loss relief, and VAT transfer of a going concern",
        ],
        scoringActions: [
          "Contrast the buyer's and seller's tax positions on share vs asset deals",
          "Identify the relief that defers or reduces the charge (incorporation/gift relief)",
        ],
      },
      {
        id: "atx-tp5",
        title: "VAT planning, stamp taxes and tax administration/ethics",
        priority: "medium",
        examinerFocus:
          "Advising on advanced VAT (groups, partial exemption, land and buildings), stamp taxes, and the ethical boundary of planning vs avoidance/evasion.",
        typicalQuestionForms: [
          "Advise on VAT registration/groups, the capital goods scheme, or land and property options",
          "Discuss the distinction between acceptable planning, avoidance and evasion, and the adviser's duties",
        ],
        mustKnow: [
          "VAT groups, partial exemption, and the option to tax land and buildings",
          "Stamp duty/SDLT on share and property transactions",
          "Ethics: the line between planning, avoidance and evasion, and the duty to report/withdraw",
        ],
        scoringActions: [
          "Distinguish acceptable planning from evasion and act ethically",
          "Flag VAT and stamp-tax consequences that candidates often overlook",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; ATX rewards advice, not just computation — marks come from comparing options, recommending, and covering all relevant taxes, plus professional marks.",
      timeBudget:
        "3 hours 15 minutes: Section A two compulsory questions (one larger, ~35 marks), Section B two 20-mark questions. Budget ~1.95 minutes per mark; plan the advice before computing.",
      answerSequence: [
        "Read the requirement to identify which taxes and options are in play",
        "Compute each alternative cleanly, then compare and recommend",
        "Cover VAT/stamp/ethics points and earn the professional/communication marks",
      ],
      qualityChecks: [
        "Confirm all relevant taxes (IT, CGT, IHT, CT, VAT) have been considered",
        "Check the advice states the tax saved and any non-tax caveats",
      ],
    },
    studyNotes: [
      {
        id: "atx-sn1",
        title: "Integrated personal tax planning",
        testPointIds: ["atx-tp1"],
        explanation: [
          "ATX (UK variant) is the advisory tax paper: it takes TX's computational knowledge and asks 'what should the taxpayer do?'. The defining skill is combining income tax, capital gains tax and inheritance tax to give reasoned, tax-efficient advice, because a decision that saves one tax may cost another. The examiner rewards comparing alternatives numerically and reaching a clear recommendation.",
          "On capital gains, the key reliefs interact: business asset disposal relief reduces the rate on qualifying business disposals, gift relief defers a gain when a business asset is given away, and rollover relief defers a gain reinvested in qualifying assets, while the annual exempt amount shelters a slice each year. Choosing which relief to claim, and when, is where the marks lie.",
          "On inheritance tax, lifetime planning uses potentially exempt transfers (tax-free if the donor survives seven years), the nil-rate band, and business and agricultural property relief to pass assets on efficiently. The seven-year rule and cumulation mean timing matters. A strong answer weaves these together — for example, gifting a business asset may trigger gift relief for CGT while starting the seven-year IHT clock — and quantifies the outcome.",
        ],
        keyRules: [
          "Combine IT, CGT and IHT; a saving in one tax can cost another",
          "CGT reliefs: business asset disposal, gift, rollover, and the annual exempt amount",
          "IHT lifetime planning uses PETs, the nil-rate band and BPR/APR",
        ],
        workedProblem: {
          scenario:
            "A parent wants to give a business asset (a qualifying trading company shareholding) worth £400,000, cost £100,000, to a child now. Explain the CGT and IHT consequences and the relief available.",
          steps: [
            "CGT: the gift is a disposal at market value, giving a gain of £400,000 − £100,000 = £300,000",
            "Gift relief: because it is a qualifying business asset, the gain can be held over so the child takes the asset at £100,000 base cost, deferring the £300,000 gain",
            "IHT: the gift is a potentially exempt transfer, tax-free if the parent survives seven years; business property relief may also apply",
          ],
          conclusion:
            "Gift relief defers the £300,000 CGT gain onto the child, and the transfer is a PET for IHT (potentially with BPR), so with the reliefs the gift can be made with no immediate tax, subject to the seven-year survival rule.",
          markingNotes: [
            "CGT gain and availability of gift relief correctly explained",
            "IHT PET treatment and seven-year rule stated",
          ],
        },
      },
      {
        id: "atx-sn2",
        title: "Corporate and group tax planning",
        testPointIds: ["atx-tp2"],
        explanation: [
          "For companies, ATX focuses on structuring for tax efficiency. Losses can be relieved within a company (carry back, current year, carry forward) and, crucially, surrendered between members of a 75% loss group through group relief, so a loss-making company's losses shelter a profitable group member's profits. Choosing the timing and destination of loss relief to maximise the tax saved and improve cash flow is a core skill.",
          "A 75% gains group allows assets to be transferred between members on a no-gain/no-loss basis, and gains or losses can be reallocated within the group, enabling planning around the annual disposal of chargeable assets. Care is needed with degrouping charges when a company leaves a group holding an asset transferred to it within the previous six years.",
          "Wider reliefs include the substantial shareholding exemption, which can exempt gains on the disposal of qualifying trading-company shareholdings. The examiner expects you to identify the correct group threshold for each relief (loss groups and gains groups both use 75%, but the tests differ) and to recommend the structure that legitimately minimises the group's tax.",
        ],
        keyRules: [
          "Group relief and no-gain/no-loss transfers require a 75% group",
          "Optimise loss-relief timing for tax saved and cash flow",
          "Watch degrouping charges and consider the substantial shareholding exemption",
        ],
      },
      {
        id: "atx-sn3",
        title: "International tax and business transactions",
        testPointIds: ["atx-tp3", "atx-tp4"],
        explanation: [
          "International tax begins with status. The statutory residence test determines whether an individual is UK-resident and therefore taxable on worldwide income; domicile determines whether non-UK income and gains are taxed as they arise or only when remitted (the remittance basis). For companies, whether an overseas operation is run through a branch (permanent establishment) or a subsidiary changes the UK tax treatment, and transfer-pricing rules require intra-group transactions to be at arm's length.",
          "Double taxation relief prevents the same income being taxed twice: relief is generally the lower of the UK tax and the overseas tax suffered on that income. Advising on where to locate operations, and how to repatriate profits, turns on these rules.",
          "Business transactions raise their own planning issues. A share sale and a trade-and-asset sale have very different consequences for buyer and seller — a seller often prefers a share sale (potential business asset disposal relief or the substantial shareholding exemption), a buyer often prefers assets (a step-up in base cost and no inherited liabilities). Incorporating a sole trade can use incorporation or gift relief to defer gains, and cessation brings terminal loss relief and VAT transfer-of-a-going-concern considerations.",
        ],
        keyRules: [
          "Establish residence and domicile before scoping UK tax",
          "Double taxation relief = lower of UK and overseas tax on the income",
          "Share vs asset deals have opposite attractions for buyer and seller",
        ],
      },
      {
        id: "atx-sn4",
        title: "VAT planning, stamp taxes and ethics",
        testPointIds: ["atx-tp5"],
        explanation: [
          "Advanced VAT planning covers VAT groups (treating members as a single taxable person, so intra-group supplies are disregarded), partial exemption (where a business makes both taxable and exempt supplies and can only recover input tax attributable to taxable supplies), the capital goods scheme for large property and IT assets, and the option to tax land and buildings to enable input recovery. These are frequently the marks candidates leave on the table.",
          "Stamp taxes apply to transactions: stamp duty or stamp duty reserve tax on share transfers and stamp duty land tax on property. Advising on the acquisition structure must factor these in alongside the direct taxes.",
          "Ethics is examined at the boundary of planning. Tax planning (arranging affairs within the law) is legitimate; tax avoidance that abuses the rules may be challenged and can damage reputation; tax evasion (concealment or false statements) is illegal. The adviser has professional duties: to act with integrity, to advise the client of risks, to refuse to be associated with evasion, and to consider reporting obligations and, where necessary, to withdraw.",
        ],
        keyRules: [
          "VAT groups, partial exemption and the option to tax drive recovery",
          "Factor SDLT/stamp duty into transaction advice",
          "Planning is legal; evasion is not — the adviser must act ethically and may need to withdraw/report",
        ],
      },
    ],
    examPractice: [
      {
        id: "atx-ep1",
        testPointIds: ["atx-tp2"],
        style: "Section A — group loss relief",
        question:
          "In a 75% group, Company A has a trading loss of £300,000 and Company B has taxable profits of £500,000. Explain how group relief could be used and the corporation tax saved if the rate is 25%.",
        answerPlan: [
          "Confirm the 75% group condition",
          "Surrender the loss to B",
          "Compute the tax saved",
        ],
        modelAnswer:
          "Because A and B are in a 75% group, A can surrender its £300,000 trading loss to B as group relief. B's taxable profits are reduced from £500,000 to £200,000. The corporation tax saved is £300,000 × 25% = £75,000, achieved in the same period, which is more valuable than A carrying the loss forward against its own uncertain future profits.",
        markingGuide: [
          "1 mark: loss surrendered under group relief (75% group)",
          "1 mark: tax saved of £75,000 and the cash-flow/timing benefit",
        ],
      },
      {
        id: "atx-ep2",
        testPointIds: ["atx-tp1"],
        style: "Section B — CGT relief choice",
        question:
          "An individual is selling shares in their personal trading company on retirement, realising a large gain. Explain how business asset disposal relief helps and one condition that must be met.",
        answerPlan: [
          "Explain the effect of the relief",
          "State a qualifying condition",
        ],
        modelAnswer:
          "Business asset disposal relief reduces the capital gains tax rate on qualifying gains to a lower rate (subject to a lifetime limit), significantly cutting the tax on the disposal of the trading company shares. A key condition is that, for the qualifying period before disposal, the individual must have been an officer or employee of the company and have held at least the required minimum percentage of the ordinary shares and voting rights in a trading company (their personal company). Meeting the conditions and the lifetime limit determines how much of the gain benefits from the reduced rate.",
        markingGuide: [
          "1 mark: relief reduces the CGT rate on qualifying gains",
          "1 mark: a valid qualifying condition (personal company/officer/holding period)",
        ],
      },
      {
        id: "atx-ep3",
        testPointIds: ["atx-tp5"],
        style: "Section B — ethics",
        question:
          "A client asks you to omit some cash rental income from their tax return because 'HMRC will never find out'. Explain the ethical position and the action you should take.",
        answerPlan: [
          "Classify the request",
          "State the ethical breach",
          "State the required action",
        ],
        modelAnswer:
          "Deliberately omitting rental income is tax evasion — the concealment of taxable income — which is illegal, not legitimate tax planning. Complying would breach the fundamental principles of integrity and professional behaviour and could implicate the adviser. You must refuse to prepare a return you know to be incorrect, advise the client to disclose the income and correct any past omissions, and, if the client refuses, consider ceasing to act and your reporting obligations (including money-laundering reporting where applicable).",
        markingGuide: [
          "1 mark: identified as evasion and a breach of fundamental principles",
          "1 mark: correct action (refuse, advise disclosure, cease to act/report)",
        ],
      },
    ],
  }),

  "acca-all-m15": examDepth({
    testPoints: [
      {
        id: "aaa-tp1",
        title: "Practice management, ethics and professional issues",
        priority: "high",
        examinerFocus:
          "Evaluating ethical, professional and quality-management issues in accepting and conducting complex engagements, with professional scepticism.",
        typicalQuestionForms: [
          "Identify and evaluate ethical/professional issues on a prospective or continuing engagement and recommend action",
          "Discuss engagement acceptance, quality management or professional liability",
        ],
        mustKnow: [
          "Threats to independence in complex settings and the safeguards (or declining/withdrawing)",
          "Engagement acceptance/continuance and quality management (firm and engagement level)",
          "Professional liability, and the auditor's duty to the public interest",
        ],
        scoringActions: [
          "Name the specific threat and a proportionate safeguard or decision",
          "Apply scepticism — question management's motives and information",
        ],
      },
      {
        id: "aaa-tp2",
        title: "Planning and risk assessment for complex entities and groups",
        priority: "critical",
        examinerFocus:
          "Identifying business and audit risks (including risk of material misstatement and significant risks) for complex and group audits and planning the response.",
        typicalQuestionForms: [
          "Evaluate the audit risks in a complex/group scenario and design the audit strategy",
          "Discuss materiality, group audit considerations and reliance on component auditors",
        ],
        mustKnow: [
          "Business risk vs risk of material misstatement; significant risks needing special attention",
          "Group audit: component materiality, significant components, and using component auditors",
          "Analytical procedures at planning to identify unusual relationships",
        ],
        scoringActions: [
          "Explain each risk's cause and a specific, complex-entity response",
          "Address group-specific issues (components, consolidation) explicitly",
        ],
      },
      {
        id: "aaa-tp3",
        title: "Evidence and evaluation of complex matters",
        priority: "critical",
        examinerFocus:
          "Designing procedures and evaluating evidence for difficult areas — estimates, fair values, going concern, using experts and internal audit.",
        typicalQuestionForms: [
          "Design procedures for a complex balance (fair value, provision, group goodwill) or a going-concern review",
          "Evaluate whether sufficient appropriate evidence has been obtained on a contentious matter",
        ],
        mustKnow: [
          "Auditing accounting estimates and fair values, and using an auditor's/management's expert",
          "Going concern: management's assessment, indicators, procedures and the reporting consequences",
          "Assertion-driven procedures for complex, judgemental balances",
        ],
        scoringActions: [
          "Write specific procedures targeting the risky assertion, not generic checks",
          "Conclude on the sufficiency and appropriateness of the evidence",
        ],
      },
      {
        id: "aaa-tp4",
        title: "Completion, review and the auditor's report",
        priority: "high",
        examinerFocus:
          "Evaluating the impact of issues on the audit opinion and report for complex situations, including modifications and key audit matters.",
        typicalQuestionForms: [
          "Determine the effect of a described matter on the audit opinion and report",
          "Critique a draft auditor's report or discuss key audit matters and other reporting",
        ],
        mustKnow: [
          "Modifications (qualified, adverse, disclaimer) and the material vs pervasive judgement",
          "Key audit matters, emphasis-of-matter and material-uncertainty (going concern) reporting",
          "Reporting to those charged with governance and other information (e.g. the annual report)",
        ],
        scoringActions: [
          "Map each issue to material vs pervasive to reach the correct opinion",
          "Distinguish opinion modifications from communication paragraphs (KAM/EOM)",
        ],
      },
      {
        id: "aaa-tp5",
        title: "Other assignments, current issues and non-audit engagements",
        priority: "medium",
        examinerFocus:
          "Advising on assurance and non-audit engagements (PFI, due diligence, forensic, sustainability) and current developments in the profession.",
        typicalQuestionForms: [
          "Advise on a non-audit/assurance engagement's scope, procedures and level of assurance",
          "Discuss a current issue (e.g. sustainability assurance, technology, regulation) affecting the profession",
        ],
        mustKnow: [
          "Prospective financial information (limited assurance), due diligence, and forensic/investigation work",
          "Review vs audit vs agreed-upon procedures and the assurance each provides",
          "Current developments: sustainability/ESG assurance, data analytics, and regulatory change",
        ],
        scoringActions: [
          "Match the engagement type to the appropriate level of assurance and procedures",
          "Relate current issues to their practical impact on the auditor",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; AAA rewards judgement, scepticism and specific, complex-entity procedures — generic AA-level points do not score, and professional marks reward reasoned communication.",
      timeBudget:
        "3 hours 15 minutes: Section A one compulsory 50-mark case, Section B two 25-mark questions. Budget ~1.95 minutes per mark; read the Section A exhibits thoroughly.",
      answerSequence: [
        "Plan the Section A case, mapping risks/issues in each exhibit to the requirements",
        "Write risk→response and evidence points specific to the complex/group scenario",
        "In Section B, prioritise reporting judgement and current-issue discussion",
      ],
      qualityChecks: [
        "Confirm procedures are specific and assertion-driven, not generic",
        "Check the opinion/report conclusion follows the material vs pervasive analysis",
      ],
    },
    studyNotes: [
      {
        id: "aaa-sn1",
        title: "Ethics, acceptance and quality at the advanced level",
        testPointIds: ["aaa-tp1"],
        explanation: [
          "AAA is the audit judgement paper, examined from the perspective of an audit manager or partner. Ethical and professional issues arise in more complex forms than AA — combined services to a listed group, fee dependence, long associations, and pressure on contentious accounting. The candidate must identify the specific threat, evaluate its significance, and recommend a proportionate safeguard or, where the threat cannot be reduced to an acceptable level, decline or withdraw.",
          "Engagement acceptance and continuance decisions weigh the firm's competence, independence, the integrity of management, and the risk of the engagement. Quality management operates at both firm level (policies, monitoring) and engagement level (direction, supervision, review, and engagement quality reviews for listed clients), protecting audit quality.",
          "Professional scepticism runs throughout: the auditor must question management's assertions and the reliability of evidence, especially where there are incentives to misstate. The examiner rewards answers that demonstrate this questioning mindset and connect ethics to the overriding duty to the public interest.",
        ],
        keyRules: [
          "Identify the specific threat and a proportionate safeguard, or decline/withdraw",
          "Quality management operates at firm and engagement level (with EQR for listed clients)",
          "Apply professional scepticism to management and evidence",
        ],
      },
      {
        id: "aaa-sn2",
        title: "Planning and risk for complex and group audits",
        testPointIds: ["aaa-tp2"],
        explanation: [
          "AAA planning extends AA's risk assessment to complex entities and groups. Candidates distinguish business risk (threats to the entity's objectives) from the risk of material misstatement (that the financial statements are wrong), and identify significant risks — often around revenue recognition, estimates, related parties and going concern — that demand special audit attention. The highest-value skill is explaining why each risk arises from the scenario and designing a specific response.",
          "Group audits add layers: the group auditor sets group and component materiality, identifies significant components, and decides the extent of involvement with component auditors, evaluating their competence and independence and reviewing their work. Consolidation risks (goodwill, intra-group eliminations, foreign subsidiary translation, fair values on acquisition) must be planned for specifically.",
          "Analytical procedures at planning highlight unusual relationships that point to risk, and the audit strategy links the assessed risks to the nature, timing and extent of procedures. A generic AA-style risk list will not pass AAA — the response must be tailored to the complexity of the entity.",
        ],
        keyRules: [
          "Separate business risk from risk of material misstatement; flag significant risks",
          "Group audits: set component materiality and evaluate/use component auditors",
          "Tailor responses to the complex/group scenario, not generic points",
        ],
        workedProblem: {
          scenario:
            "A group acquired a foreign subsidiary mid-year and recognised significant goodwill. Identify one audit risk and the group auditor's response.",
          steps: [
            "Identify the risk: goodwill may be misstated (valuation) and the foreign subsidiary's results/translation may be incorrect",
            "Explain: acquisition fair values and IAS 21 translation involve judgement and are error-prone",
            "Response: evaluate the fair value exercise (using an auditor's expert if needed), test translation at correct rates, and assess goodwill impairment",
          ],
          conclusion:
            "There is a significant risk over the valuation of goodwill and translation of the foreign subsidiary; the group auditor responds by scrutinising the acquisition fair values, retranslation and impairment review, involving an expert where the valuation is complex.",
          markingNotes: [
            "Risk identified at assertion level with a clear cause",
            "Specific, complex-entity response given (fair value/translation/impairment)",
          ],
        },
      },
      {
        id: "aaa-sn3",
        title: "Evidence for complex, judgemental areas",
        testPointIds: ["aaa-tp3"],
        explanation: [
          "AAA evidence questions focus on the hardest areas: accounting estimates and fair values, provisions, group goodwill, financial instruments, and going concern. For estimates, the auditor evaluates the method, assumptions and data management used, considers management bias, and may develop an independent estimate or range. Where specialist knowledge is needed, an auditor's expert (or reliance on management's expert, suitably evaluated) is used.",
          "Going concern is a recurring AAA theme. The auditor reviews management's assessment (including its period and assumptions), looks for indicators such as net liabilities, breached covenants or lost customers, performs procedures on forecasts and finance availability, and considers the reporting consequences — an unmodified opinion with a material-uncertainty section where the uncertainty is disclosed, or a modification where disclosure is inadequate.",
          "Throughout, procedures must be specific and assertion-driven, and the auditor must conclude on whether sufficient appropriate evidence has been obtained. The examiner penalises vague 'obtain evidence' points and rewards procedures that state exactly what is examined, to what source, and for which assertion, followed by an evaluation of sufficiency.",
        ],
        keyRules: [
          "Evaluate estimates/fair values for method, assumptions, data and management bias",
          "Going concern: test the assessment and forecasts, then judge the reporting effect",
          "Write specific, assertion-driven procedures and conclude on sufficiency",
        ],
      },
      {
        id: "aaa-sn4",
        title: "Reporting judgement and other engagements",
        testPointIds: ["aaa-tp4", "aaa-tp5"],
        explanation: [
          "Reporting is the culmination of AAA. The auditor maps each unresolved issue to the two-way judgement — misstatement or inability to obtain evidence, and material or material-and-pervasive — to select an unmodified, qualified, adverse or disclaimer opinion. Beyond the opinion, the report communicates key audit matters (for listed entities), emphasis-of-matter and other-matter paragraphs, and material uncertainty related to going concern, none of which modify the opinion. The auditor also reports to those charged with governance and considers other information in the annual report for consistency.",
          "AAA also covers engagements beyond the statutory audit. Prospective financial information attracts only limited (negative) assurance because it concerns the future; due diligence supports acquisitions; forensic and investigation work addresses fraud and disputes; and agreed-upon procedures report factual findings with no assurance conclusion. Matching the engagement to the appropriate level of assurance and procedures is a common requirement.",
          "Current issues keep the paper contemporary: the growth of sustainability and ESG assurance, the use of data analytics in auditing, technology risks, and regulatory change all affect how audits are planned and performed. The examiner rewards linking these developments to their practical impact on the auditor's work and responsibilities.",
        ],
        keyRules: [
          "Opinion follows misstatement/limitation and material/pervasive judgement",
          "KAM, emphasis-of-matter and going-concern sections do not modify the opinion",
          "Match non-audit engagements to the appropriate assurance level",
        ],
      },
    ],
    examPractice: [
      {
        id: "aaa-ep1",
        testPointIds: ["aaa-tp2"],
        style: "Section A — audit risk (complex entity)",
        question:
          "A listed client capitalised significant development costs and recognised a large brand as an intangible asset acquired in a business combination. Identify two audit risks and the response to each.",
        answerPlan: [
          "Identify risks around development costs and the acquired brand",
          "Explain the cause of each",
          "State a specific response",
        ],
        modelAnswer:
          "Risk 1: development costs may not meet the IAS 38 capitalisation criteria (technical feasibility, intention and ability to complete, probable future benefits), so intangible assets and profit may be overstated. Response: obtain and evaluate evidence that each criterion is met for capitalised projects, and test the amounts capitalised. Risk 2: the acquired brand's fair value on acquisition is judgemental and may be misstated, affecting goodwill. Response: evaluate the valuation method and assumptions, using an auditor's expert if necessary, and assess the split between the brand and goodwill. Both are significant risks given the listed status and the judgement involved.",
        markingGuide: [
          "1 mark each: valid risk with a cause and a specific response (development costs; acquired brand)",
        ],
      },
      {
        id: "aaa-ep2",
        testPointIds: ["aaa-tp4"],
        style: "Section B — reporting",
        question:
          "Management refuses to disclose a material uncertainty over going concern that the auditor considers exists and is not otherwise apparent from the statements. What is the effect on the audit opinion?",
        answerPlan: [
          "Classify the issue (disclosure inadequacy)",
          "Assess material vs pervasive",
          "State the opinion",
        ],
        modelAnswer:
          "Where a material uncertainty over going concern exists but management refuses adequate disclosure, the financial statements are materially misstated by the omission. If the effect is material but not pervasive, the auditor issues a qualified 'except for' opinion; if the omission is so significant that the statements are misleading as a whole (pervasive), an adverse opinion is appropriate. This is a misstatement (inadequate disclosure), not an inability to obtain evidence, so a disclaimer would not apply.",
        markingGuide: [
          "1 mark: identified as a material misstatement from inadequate disclosure",
          "1 mark: qualified or adverse opinion depending on pervasiveness",
        ],
      },
      {
        id: "aaa-ep3",
        testPointIds: ["aaa-tp5"],
        style: "Section B — other engagements",
        question:
          "A client asks the firm to report on its five-year profit forecast for a bank. What level of assurance can be given and why, and name one procedure the firm would perform.",
        answerPlan: [
          "Identify the engagement type",
          "State the level of assurance and reason",
          "Give a procedure",
        ],
        modelAnswer:
          "Reporting on prospective financial information (a profit forecast) can only provide limited (negative) assurance, because the forecast concerns future events and assumptions that cannot be verified with the same certainty as historical information. The firm would conclude that nothing has come to its attention suggesting the assumptions are unreasonable or the forecast is not properly prepared. A relevant procedure is to assess whether the assumptions underlying the forecast are reasonable and consistent with the firm's knowledge of the business and the current environment.",
        markingGuide: [
          "1 mark: limited (negative) assurance with the correct reason (future-oriented)",
          "1 mark: a valid procedure (assess reasonableness of assumptions)",
        ],
      },
    ],
  }),

  "acca-all-m16": examDepth({
    testPoints: [
      {
        id: "epsm-tp1",
        title: "Applied ethics and ethical decision-making",
        priority: "critical",
        examinerFocus:
          "This is an online, interactive module, not a timed exam; the assessment tests whether you can apply ethical frameworks and the ACCA Code to realistic dilemmas and choose defensible actions.",
        typicalQuestionForms: [
          "Interactive scenario choices where you select the most appropriate ethical response and see consequences",
          "The final Complete Advisor case study requiring an ethically sound, professionally communicated deliverable",
        ],
        mustKnow: [
          "The five ACCA fundamental principles and the threats-and-safeguards approach applied in context",
          "An ethical decision-making model (identify the issue, consider principles/stakeholders, evaluate options, act)",
          "The duty to the public interest overriding client or employer pressure",
        ],
        scoringActions: [
          "Choose the action that upholds the fundamental principles, not the expedient one",
          "Justify the decision by reference to the principles and stakeholders affected",
        ],
      },
      {
        id: "epsm-tp2",
        title: "The professional skills examined across Strategic Professional",
        priority: "critical",
        examinerFocus:
          "Developing the five professional skills — communication, commercial acumen, analysis, scepticism/evaluation and innovation — that carry marks in SBL, SBR and the Options papers.",
        typicalQuestionForms: [
          "Unit exercises requiring you to demonstrate a named skill (e.g. analyse data, communicate to a stakeholder)",
          "Case tasks assessed for how well the skill is applied, mirroring the SBL professional-skills marks",
        ],
        mustKnow: [
          "Each professional skill and the observable behaviours that demonstrate it",
          "How the skills map to the professional-skills marks in the Strategic Professional exams (notably SBL's 20 marks)",
          "Matching format, tone and register to the audience for communication",
        ],
        scoringActions: [
          "Explicitly demonstrate the targeted skill, not just technical content",
          "Adopt the requested format and audience for communication tasks",
        ],
      },
      {
        id: "epsm-tp3",
        title: "Commercial awareness, analysis and professional scepticism",
        priority: "high",
        examinerFocus:
          "Applying commercial judgement, analysing information critically, and questioning assumptions and evidence in realistic business situations.",
        typicalQuestionForms: [
          "Scenario tasks requiring interpretation of business/financial information and a reasoned recommendation",
          "Exercises where you must challenge unreliable data or a self-interested proposal",
        ],
        mustKnow: [
          "Commercial acumen: understanding how organisations create value and the wider business context",
          "Analysis: investigating and interrogating data to draw supported conclusions",
          "Scepticism: a questioning mind, alert to bias, error and manipulation",
        ],
        scoringActions: [
          "Support conclusions with evidence rather than assertion",
          "Question the reliability and motive behind information before acting",
        ],
      },
      {
        id: "epsm-tp4",
        title: "The Complete Advisor case study and assessment completion",
        priority: "high",
        examinerFocus:
          "Integrating ethics and all professional skills into a single, realistic advisory deliverable to complete the module's required assessment.",
        typicalQuestionForms: [
          "The integrated final case where you role-play an adviser producing a professional output",
          "Completion of all units before the case, since the certificate requires the full module",
        ],
        mustKnow: [
          "The module must be completed (units plus the final assessment) to obtain the certificate; it is best done before SBL",
          "The case study integrates ethics, communication, analysis, scepticism and commercial acumen together",
          "A professional deliverable must be well-structured, evidence-based and ethically sound",
        ],
        scoringActions: [
          "Integrate ethics and every skill into one coherent deliverable",
          "Complete all preceding units so the final assessment can be attempted",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "There is no percentage exam mark to beat; the goal is to complete every unit and pass the final assessment to earn the certificate, ideally before sitting SBL so the skills transfer.",
      timeBudget:
        "The module is self-paced (around 20+ hours across the units). Work through the units steadily rather than rushing, then attempt the Complete Advisor case study when the earlier units are done.",
      answerSequence: [
        "Complete the units in order, engaging fully with each interactive scenario",
        "Consolidate the ethics and skills learning before the final case",
        "Attempt the Complete Advisor case study, producing a professional, ethical deliverable",
      ],
      qualityChecks: [
        "Confirm every unit is completed so the certificate can be issued",
        "Check the final deliverable demonstrates ethics and all professional skills together",
      ],
    },
    studyNotes: [
      {
        id: "epsm-sn1",
        title: "What EPSM is and why it matters",
        testPointIds: ["epsm-tp1", "epsm-tp4"],
        explanation: [
          "The Ethics and Professional Skills Module is not a traditional exam but an online, interactive learning module that ACCA requires students to complete. It is built around realistic workplace scenarios in which you make choices and see their consequences, culminating in a 'Complete Advisor' case study that pulls the learning together. Completion is a requirement for the qualification, and it is best done before attempting SBL because the skills it develops are directly examined there.",
          "Its purpose is to operationalise ethics and the professional skills that employers value and that the Strategic Professional exams reward. Where earlier papers taught the fundamental principles, EPSM makes you practise applying them under pressure — deciding what to do when a client or employer wants something that compromises integrity or objectivity.",
          "Because it is competency-based rather than a percentage exam, the objective is genuine engagement: working through each unit, reflecting on the decisions, and completing the final assessment to obtain the certificate. Treating it as a tick-box exercise wastes the preparation it offers for SBL, SBR and the Options papers.",
        ],
        keyRules: [
          "EPSM is an interactive online module, not a timed written exam",
          "Completion (units + final assessment) is required and best done before SBL",
          "It operationalises the ethics and skills rewarded at Strategic Professional",
        ],
        workedProblem: {
          scenario:
            "In a module scenario, your manager asks you to slightly overstate a project's forecast benefits to secure board approval, saying 'everyone rounds up'.",
          steps: [
            "Identify the issue: pressure to misrepresent information (integrity/objectivity threat)",
            "Consider principles and stakeholders: the board and investors rely on honest forecasts",
            "Choose the action: decline to overstate, explain the professional duty, and present a realistic forecast",
          ],
          conclusion:
            "The professional response is to refuse to overstate the forecast, uphold integrity and objectivity, and present honest information — protecting the public interest over short-term convenience.",
          markingNotes: [
            "Ethical threat correctly identified",
            "Action upholds the fundamental principles and the public interest",
          ],
        },
      },
      {
        id: "epsm-sn2",
        title: "Applying an ethical decision-making model",
        testPointIds: ["epsm-tp1"],
        explanation: [
          "EPSM trains you to move from knowing the fundamental principles to applying them systematically. A workable model is to identify the ethical issue and the principles at stake, consider the stakeholders affected and the threats involved, evaluate the available courses of action against the principles, decide and act, and be prepared to escalate or withdraw if the issue cannot be resolved.",
          "The five fundamental principles — integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour — provide the criteria. The threats framework (self-interest, self-review, advocacy, familiarity, intimidation) helps you diagnose why a situation is problematic, and safeguards or firm/employer procedures may reduce the threat to an acceptable level.",
          "Crucially, the accountant's duty is to the public interest, which can override the immediate wishes of a client or employer. The module's scenarios repeatedly test whether you will choose the principled action when it is inconvenient, and reflecting on the consequences shown builds the judgement examined in SBL.",
        ],
        keyRules: [
          "Use a model: identify issue → principles/stakeholders/threats → evaluate → act → escalate",
          "Diagnose the threat category to explain why a situation is problematic",
          "The public interest can override client/employer pressure",
        ],
      },
      {
        id: "epsm-sn3",
        title: "Developing the professional skills",
        testPointIds: ["epsm-tp2", "epsm-tp3"],
        explanation: [
          "EPSM develops the five professional skills that carry explicit marks at Strategic Professional. Communication is the ability to convey information clearly in the right format, tone and level of detail for the audience — a skill practised through drafting emails, reports and briefings in the module. Commercial acumen is showing awareness of the wider business context and making practical, value-aware recommendations.",
          "Analysis and evaluation are about interrogating information rather than accepting it — investigating data, drawing supported conclusions, and weighing options to reach a balanced judgement. Professional scepticism is the questioning mind that stays alert to bias, error and manipulation, particularly where someone has an incentive to mislead. Innovation and leadership complete the set, encouraging fresh thinking and the ability to guide others.",
          "The module makes these skills concrete by assessing how you perform tasks, not just what you know. This mirrors SBL, where 20 marks are reserved for professional skills, and SBR and the Options papers, which also award professional-skills marks. Practising the behaviours here — always answering in the requested format, always supporting conclusions with evidence, always questioning the reliability of information — pays off directly in those exams.",
        ],
        keyRules: [
          "The five skills: communication, commercial acumen, analysis, scepticism/evaluation, innovation/leadership",
          "Skills are assessed by how you perform, not only what you know",
          "Practising them in EPSM directly supports the professional-skills marks in SBL/SBR/Options",
        ],
      },
      {
        id: "epsm-sn4",
        title: "The Complete Advisor case study",
        testPointIds: ["epsm-tp4"],
        explanation: [
          "The module culminates in an integrated case study in which you take on an advisory role and produce a professional deliverable. Unlike the individual units, the case requires you to combine ethics with all the professional skills at once — analysing information, exercising scepticism, showing commercial awareness, and communicating a well-structured, ethically sound recommendation.",
          "Success depends on having worked through the earlier units so that the skills are ready to deploy together. The deliverable should be organised, evidence-based, and pitched appropriately to its audience, and it must handle any ethical dimension of the scenario with integrity rather than sidestepping it.",
          "Completing the case and the assessment earns the EPSM certificate, which is a requirement for the ACCA qualification. Beyond the tick, it is the best rehearsal available for the integrated, professional-skills-marked style of the Strategic Professional exams, so it is worth treating as genuine preparation rather than a formality.",
        ],
        keyRules: [
          "The case integrates ethics and all professional skills into one deliverable",
          "Complete the earlier units first so the skills can be applied together",
          "Passing earns the required certificate and rehearses the SP exam style",
        ],
      },
    ],
    examPractice: [
      {
        id: "epsm-ep1",
        testPointIds: ["epsm-tp1"],
        style: "Interactive scenario — ethics",
        question:
          "A long-standing client offers you a generous personal gift shortly before you finalise advice that could favour them. In the module scenario, what is the professional response and why?",
        answerPlan: [
          "Identify the threat",
          "Consider the principles",
          "Choose the action",
        ],
        modelAnswer:
          "Accepting a generous personal gift at this point creates a self-interest and familiarity threat to objectivity, because it could influence, or appear to influence, your advice. The professional response is to decline the gift (or, for a trivial and inconsequential gift, to consider firm policy), disclose the offer as appropriate, and ensure the advice is given objectively on its merits. Upholding objectivity and professional behaviour, and protecting the appearance of independence, outweighs the short-term goodwill of accepting.",
        markingGuide: [
          "Threat to objectivity (self-interest/familiarity) identified",
          "Appropriate action (decline/disclose, remain objective) chosen and justified",
        ],
      },
      {
        id: "epsm-ep2",
        testPointIds: ["epsm-tp2", "epsm-tp3"],
        style: "Unit exercise — communication and analysis",
        question:
          "You must brief a non-financial manager on why a proposed cost-cutting plan may harm long-term performance. Outline how you would demonstrate the communication and analysis skills.",
        answerPlan: [
          "Set the format and audience",
          "Show the analysis",
          "Reach a balanced recommendation",
        ],
        modelAnswer:
          "Communication: use a short, jargon-free briefing structured with a clear heading, the key message first, and plain explanations suited to a non-financial reader. Analysis: examine the plan's figures and identify that cutting training, maintenance or R&D may lift short-term profit but reduce quality, capability and future revenue, supporting the point with the available data. Then reach a balanced recommendation — for example, targeting genuinely wasteful costs while protecting value-creating spend — demonstrating evaluation as well as analysis.",
        markingGuide: [
          "Communication skill: appropriate format and audience-pitched explanation",
          "Analysis/evaluation skill: evidence-based reasoning and a balanced recommendation",
        ],
      },
      {
        id: "epsm-ep3",
        testPointIds: ["epsm-tp4"],
        style: "Complete Advisor — integrated case",
        question:
          "In the final case study you must advise on a decision that has both a strong commercial case and an ethical concern. How should you approach the deliverable?",
        answerPlan: [
          "Integrate ethics and skills",
          "Structure the deliverable",
          "Reach an ethical recommendation",
        ],
        modelAnswer:
          "Approach the deliverable by integrating all the skills: analyse the commercial case with evidence, apply scepticism to the underlying assumptions and any conflicting interests, and address the ethical concern head-on using the fundamental principles rather than ignoring it. Structure the output professionally for its audience, and reach a recommendation that captures the commercial benefit only in a way consistent with ethical obligations — for example, proceeding subject to safeguards, or declining the element that breaches the principles. This demonstrates ethics, analysis, scepticism, commercial acumen and communication together, which is exactly what the case assesses.",
        markingGuide: [
          "Ethics addressed using the fundamental principles, not sidestepped",
          "Integrated demonstration of analysis, scepticism, commercial acumen and communication",
        ],
      },
    ],
  }),

  /* ===================================================================== */
  /* Applied Knowledge stage modules                                        */
  /* ===================================================================== */

  "acca-applied-knowledge-m1": examDepth({
    testPoints: [
      {
        id: "akbt1-tp1",
        title: "Organisational structures and Mintzberg",
        priority: "critical",
        examinerFocus:
          "Classifying an organisation's structure from its features and identifying Mintzberg's building blocks — the narrow structure/design focus, not the whole BT syllabus.",
        typicalQuestionForms: [
          "MCQ matching described features to functional, divisional, matrix or simple structures",
          "Item identifying a Mintzberg building block (e.g. technostructure) from a description",
        ],
        mustKnow: [
          "Functional (by specialism), divisional (by product/region), matrix (dual reporting) structures and their pros/cons",
          "Mintzberg's five building blocks: strategic apex, operating core, middle line, technostructure, support staff",
          "Span of control, scalar chain, centralisation vs decentralisation and tall vs flat structures",
        ],
        scoringActions: [
          "Match on the grouping basis (specialism/product/region) to pick the structure",
          "Identify the described role's building block before choosing the option",
        ],
      },
      {
        id: "akbt1-tp2",
        title: "Corporate governance principles",
        priority: "critical",
        examinerFocus:
          "Recognising sound governance features and the agency relationship, focused on the governance sub-topic within BT.",
        typicalQuestionForms: [
          "Multiple-response item selecting features of good governance",
          "Item on the role of NEDs, board committees or the comply-or-explain approach",
        ],
        mustKnow: [
          "Separation of chair and CEO; role of independent non-executive directors",
          "Board committees: audit, remuneration and nomination and their composition",
          "The agency problem between shareholders and directors and mechanisms to reduce it",
        ],
        scoringActions: [
          "Spot combined chair/CEO or absent NEDs as governance weaknesses",
          "Attribute each committee its correct responsibility",
        ],
      },
      {
        id: "akbt1-tp3",
        title: "Organisational culture",
        priority: "high",
        examinerFocus:
          "Classifying culture using Handy and Schein within this structure-and-management module.",
        typicalQuestionForms: [
          "Item matching described behaviours to a Handy culture type",
          "Item on Schein's levels of culture (artefacts, values, assumptions)",
        ],
        mustKnow: [
          "Handy's power, role, task and person cultures and their typical settings",
          "Schein's three levels: artefacts, espoused values, basic assumptions",
          "How structure and culture interact (e.g. role culture with a bureaucratic structure)",
        ],
        scoringActions: [
          "Use the scenario's signal words (rules, central figure, projects) to pick the culture",
          "Distinguish visible artefacts from deeper assumptions in Schein items",
        ],
      },
      {
        id: "akbt1-tp4",
        title: "Management, stakeholders and roles",
        priority: "medium",
        examinerFocus:
          "Understanding managerial roles and stakeholder groups relevant to organisational structure and governance.",
        typicalQuestionForms: [
          "Item on Mintzberg's managerial roles or Fayol's functions of management",
          "Item classifying stakeholders (internal/connected/external) or on Mendelow",
        ],
        mustKnow: [
          "Fayol's functions (plan, organise, command, coordinate, control) and Mintzberg's managerial roles",
          "Stakeholder classification: internal, connected, external",
          "Mendelow's power/interest matrix and the strategy for each quadrant",
        ],
        scoringActions: [
          "Match the described activity to the right management function/role",
          "Place stakeholders correctly before choosing the management strategy",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 65%+ on this topic; structure, governance and culture items are definition-driven and quick to score once the frameworks are secure.",
      timeBudget:
        "Within the 2-hour BT CBE, spend about 1.2 minutes per mark on these items; do not exceed ~2 minutes on any single classification item.",
      answerSequence: [
        "Answer confident structure/governance definitions first",
        "Apply culture and management frameworks to scenario items, flagging doubtful ones",
        "Return to flagged items and guess any remaining — no negative marking",
      ],
      qualityChecks: [
        "Confirm the exact number of options in multiple-response governance items",
        "Re-read stems with 'not'/'except' before finalising",
      ],
    },
    studyNotes: [
      {
        id: "akbt1-sn1",
        title: "Reading and classifying organisational structure",
        testPointIds: ["akbt1-tp1"],
        explanation: [
          "This module narrows BT to how organisations are designed and governed. Structure describes how work is divided and coordinated. A functional structure groups people by specialism and suits stable, single-product firms; a divisional structure groups by product, region or customer and suits diversified firms; a matrix overlays project or product lines onto functions, giving flexibility at the cost of dual reporting and potential conflict.",
          "Mintzberg analyses organisations into five building blocks — the strategic apex (top management), the operating core (those doing the basic work), the middle line (managers linking the two), the technostructure (analysts who standardise work), and support staff. Different configurations emphasise different blocks; a simple structure is dominated by the strategic apex, a machine bureaucracy by the technostructure.",
          "Design choices such as span of control (how many report to a manager), the scalar chain, and the degree of centralisation determine whether a structure is tall or flat. The exam gives features and asks you to classify, so anchor on the grouping basis and the reporting relationships described.",
        ],
        keyRules: [
          "Classify by the grouping basis: specialism (functional), product/region (divisional), dual (matrix)",
          "Learn Mintzberg's five building blocks and which configuration emphasises each",
          "Wide spans of control tend to give flatter structures",
        ],
        workedProblem: {
          scenario:
            "An engineering firm assigns each employee to both a home department (e.g. design) and to specific customer project teams, so staff report to a department head and a project manager.",
          steps: [
            "Identify the reporting pattern: two bosses (department and project)",
            "Map to a structure type: dual authority indicates a matrix structure",
            "Note the trade-off: flexibility and expertise sharing vs conflict and divided loyalty",
          ],
          conclusion:
            "This is a matrix structure; it improves cross-functional coordination on projects but risks role conflict and confusion from dual reporting.",
          markingNotes: [
            "Matrix structure correctly identified from dual reporting",
            "A valid advantage and disadvantage noted",
          ],
        },
      },
      {
        id: "akbt1-sn2",
        title: "Corporate governance essentials",
        testPointIds: ["akbt1-tp2"],
        explanation: [
          "Governance is the system by which companies are directed and controlled. Its purpose is to protect shareholders and other stakeholders from the agency problem — the risk that directors (agents) pursue their own interests rather than the shareholders' (principals'). Good governance realigns these interests through structure and accountability.",
          "Key features tested here include separating the roles of chair and chief executive so that no one person dominates, appointing a sufficient number of independent non-executive directors to provide objective challenge, and operating board committees. The audit committee (independent NEDs) oversees financial reporting and the external auditor; the remuneration committee sets director pay; the nomination committee handles board appointments.",
          "Many codes operate on a comply-or-explain basis: a company either follows the code's provisions or explains publicly why it has not. The exam tests whether you can spot weaknesses — a combined chair/CEO, no NEDs, or a self-set remuneration — and identify the correct safeguard.",
        ],
        keyRules: [
          "Separate the chair and CEO roles",
          "Audit/remuneration/nomination committees should be staffed by independent NEDs",
          "Comply-or-explain: follow the code or justify departures",
        ],
      },
      {
        id: "akbt1-sn3",
        title: "Organisational culture: Handy and Schein",
        testPointIds: ["akbt1-tp3"],
        explanation: [
          "Culture is 'the way we do things around here' — the shared values and assumptions that shape behaviour. Handy's four types are the exam workhorse. A power culture radiates from a central figure with few rules (small entrepreneurial firms); a role culture is bureaucratic and rule-bound (large established organisations); a task culture forms expert project teams around problems; and a person culture exists to serve its individual members (professional partnerships).",
          "Schein deepens this by distinguishing three levels: visible artefacts (dress, office layout, logos), espoused values (stated beliefs and policies), and underlying basic assumptions (the taken-for-granted beliefs that really drive behaviour). Changing culture is hard because the deepest level is largely unconscious.",
          "Culture and structure interact: a role culture typically accompanies a bureaucratic, functional structure, while a task culture suits a flexible, matrix or project-based structure. Exam items give behavioural clues, so read for signals such as 'rules and procedures' (role) or 'the founder decides everything' (power).",
        ],
        keyRules: [
          "Handy: power (central figure), role (rules), task (teams), person (individuals)",
          "Schein: artefacts, espoused values, basic assumptions",
          "Culture and structure tend to reinforce each other",
        ],
      },
      {
        id: "akbt1-sn4",
        title: "Management functions, roles and stakeholders",
        testPointIds: ["akbt1-tp4"],
        explanation: [
          "Management is examined through classic frameworks. Fayol described the functions of management as planning, organising, commanding, coordinating and controlling. Mintzberg observed managers performing interpersonal roles (figurehead, leader, liaison), informational roles (monitor, disseminator, spokesperson) and decisional roles (entrepreneur, disturbance handler, resource allocator, negotiator).",
          "Stakeholders are groups with an interest in the organisation. They are classified as internal (employees, management), connected (shareholders, customers, suppliers, lenders) and external (government, community, pressure groups). Each has different claims that can conflict.",
          "Mendelow's power/interest matrix helps managers decide how to treat each stakeholder: key players (high power, high interest) must be managed closely; those with high power but low interest kept satisfied; high interest but low power kept informed; and low-low need only minimal effort. This links stakeholder analysis back to how the organisation is directed.",
        ],
        keyRules: [
          "Fayol: plan, organise, command, coordinate, control",
          "Stakeholders: internal, connected, external",
          "Mendelow strategy follows the power/interest quadrant",
        ],
      },
    ],
    examPractice: [
      {
        id: "akbt1-ep1",
        testPointIds: ["akbt1-tp1"],
        style: "Objective test — structure",
        question:
          "An organisation groups its activities into separate business units for North America, Europe and Asia, each with its own functions and profit responsibility. Which structure is this?",
        answerPlan: [
          "Identify the grouping basis",
          "Match to the structure type",
        ],
        modelAnswer:
          "The organisation is grouped by geographic region with each unit responsible for its own profit, which is a divisional structure (geographic divisions). It is not functional (grouped by specialism) or matrix (dual reporting).",
        markingGuide: [
          "1 mark: divisional structure identified",
          "1 mark: reasoning based on regional grouping/profit responsibility",
        ],
      },
      {
        id: "akbt1-ep2",
        testPointIds: ["akbt1-tp2"],
        style: "Objective test — governance",
        question:
          "Which TWO of the following indicate good corporate governance? (i) The CEO also chairs the board; (ii) A majority of independent NEDs on the audit committee; (iii) Directors set their own pay without review; (iv) Separation of the chair and CEO roles.",
        answerPlan: [
          "Recall good-governance features",
          "Select the two correct options",
        ],
        modelAnswer:
          "The two indicators of good governance are (ii) a majority of independent NEDs on the audit committee and (iv) separation of the chair and CEO roles. Items (i) and (iii) are governance weaknesses because they concentrate power and remove independent oversight.",
        markingGuide: [
          "1 mark: option (ii) selected",
          "1 mark: option (iv) selected (no mark if a weakness is also chosen)",
        ],
      },
      {
        id: "akbt1-ep3",
        testPointIds: ["akbt1-tp3"],
        style: "Objective test — culture",
        question:
          "A small advertising agency forms flexible teams of specialists around each client brief, valuing expertise and results over hierarchy. Which Handy culture is this?",
        answerPlan: [
          "Identify the signal (project teams, expertise)",
          "Match to the Handy type",
        ],
        modelAnswer:
          "Forming flexible expert teams around each project and valuing expertise and results is a task culture in Handy's model. It is not a role culture (rules/bureaucracy), a power culture (central figure) or a person culture (serving individuals).",
        markingGuide: [
          "1 mark: task culture identified",
          "1 mark: reasoning based on project teams/expertise",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m2": examDepth({
    testPoints: [
      {
        id: "akbt2-tp1",
        title: "PESTEL macro-environment analysis",
        priority: "critical",
        examinerFocus:
          "Correctly categorising external factors into PESTEL headings — the macro-environment focus of this module, distinct from internal structure.",
        typicalQuestionForms: [
          "Item asking which PESTEL heading a described factor belongs to",
          "Multiple-response item identifying environmental factors affecting an organisation",
        ],
        mustKnow: [
          "The six PESTEL headings: Political, Economic, Social, Technological, Environmental, Legal",
          "Typical examples of each and how borderline factors are judged by the stem's emphasis",
          "The macro-environment is uncontrollable; organisations respond rather than control it",
        ],
        scoringActions: [
          "Read the stem's emphasis to place borderline factors in the single best heading",
          "Avoid choosing a plausible second heading",
        ],
      },
      {
        id: "akbt2-tp2",
        title: "Porter's five forces and competition",
        priority: "critical",
        examinerFocus:
          "Applying the five forces to judge industry attractiveness and what raises or lowers each force.",
        typicalQuestionForms: [
          "Item asking which force a described condition affects and in which direction",
          "Item on the overall attractiveness of an industry given the forces",
        ],
        mustKnow: [
          "The five forces: new entrants, supplier power, buyer power, substitutes, competitive rivalry",
          "Conditions raising each force (e.g. low switching costs raise buyer power; low barriers raise entry threat)",
          "High forces reduce industry profitability/attractiveness",
        ],
        scoringActions: [
          "Identify which single force the condition affects, then its direction",
          "Link 'high force' to 'lower profitability'",
        ],
      },
      {
        id: "akbt2-tp3",
        title: "Market structures and basic economics",
        priority: "high",
        examinerFocus:
          "Recognising market structures and the effect of demand/supply and government policy on markets.",
        typicalQuestionForms: [
          "Item identifying a market structure (perfect competition, monopoly, oligopoly)",
          "Item on the effect of a demand/supply change or a government intervention",
        ],
        mustKnow: [
          "Market structures and their features (number of firms, barriers, price-setting power)",
          "Demand and supply shifts and the effect on equilibrium price and quantity",
          "Macroeconomic policy (fiscal, monetary) and its effect on business",
        ],
        scoringActions: [
          "Match the number of firms and barriers to the structure",
          "Trace a demand/supply shift to the new equilibrium",
        ],
      },
      {
        id: "akbt2-tp4",
        title: "Competitive advantage and stakeholders in the market",
        priority: "medium",
        examinerFocus:
          "Understanding sources of competitive advantage and how connected stakeholders (customers, suppliers) shape strategy.",
        typicalQuestionForms: [
          "Item on Porter's generic strategies (cost leadership, differentiation, focus)",
          "Item on the influence of customers or suppliers as connected stakeholders",
        ],
        mustKnow: [
          "Porter's generic strategies and the risk of being 'stuck in the middle'",
          "Sources of competitive advantage and the value chain concept at an introductory level",
          "Connected stakeholders' bargaining influence on the organisation",
        ],
        scoringActions: [
          "Match the described approach to the correct generic strategy",
          "Link stakeholder power to strategic choices",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 65%+; environmental-analysis items are framework-driven and quick once PESTEL and the five forces are secure.",
      timeBudget:
        "Within the 2-hour BT CBE, about 1.2 minutes per mark; avoid over-analysing borderline categorisation items.",
      answerSequence: [
        "Categorise clear PESTEL/five-forces items first",
        "Apply economics and strategy frameworks to scenario items, flagging doubtful ones",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm you chose the single best PESTEL heading",
        "Check the direction (raises/lowers) in five-forces items",
      ],
    },
    studyNotes: [
      {
        id: "akbt2-sn1",
        title: "PESTEL and the macro-environment",
        testPointIds: ["akbt2-tp1"],
        explanation: [
          "This module focuses on the environment outside the organisation. The macro-environment is analysed with PESTEL: Political (government stability, trade and tax policy), Economic (interest rates, inflation, growth, exchange rates), Social (demographics, lifestyles, attitudes), Technological (automation, innovation, R&D), Environmental (climate, sustainability, resource scarcity) and Legal (employment, competition, consumer and data law).",
          "The macro-environment is largely uncontrollable — organisations respond to it rather than shape it. The exam tests classification, often with borderline factors. A carbon tax could sit under Political, Environmental or Legal; the correct answer depends on the emphasis in the stem (is it the tax mechanism, the environmental driver, or the legal requirement?).",
          "PESTEL feeds strategy by highlighting opportunities and threats, and it connects to the internal SWOT analysis. Learning several concrete examples under each heading makes categorisation items fast and reliable.",
        ],
        keyRules: [
          "PESTEL: Political, Economic, Social, Technological, Environmental, Legal",
          "The macro-environment is responded to, not controlled",
          "Judge borderline factors by the stem's emphasis",
        ],
        workedProblem: {
          scenario:
            "A government raises interest rates to curb inflation, increasing a retailer's borrowing costs and dampening consumer spending. Classify the primary PESTEL factor.",
          steps: [
            "Identify the driver: interest rates and consumer spending",
            "Map to a heading: these are macroeconomic variables",
            "Conclude: Economic factor (though set via policy, the effect described is economic)",
          ],
          conclusion:
            "The primary PESTEL factor is Economic, because interest rates and consumer spending are macroeconomic variables affecting the retailer's costs and demand.",
          markingNotes: [
            "Economic heading correctly selected",
            "Reasoning based on interest rates/spending as economic variables",
          ],
        },
      },
      {
        id: "akbt2-sn2",
        title: "Porter's five forces",
        testPointIds: ["akbt2-tp2"],
        explanation: [
          "Where PESTEL scans the macro-environment, Porter's five forces analyse the immediate industry. The five forces are the threat of new entrants, the bargaining power of suppliers, the bargaining power of buyers, the threat of substitutes and the intensity of competitive rivalry. Together they determine how attractive (profitable) an industry is.",
          "Each force is raised or lowered by specific conditions. Low barriers to entry and low capital requirements raise the threat of new entrants; a concentrated supplier base or unique inputs raise supplier power; many buyers with low switching costs raise buyer power; cheap, effective alternatives raise the substitute threat; and many similar-sized competitors with slow growth intensify rivalry.",
          "The key insight is that high forces squeeze industry profitability. The exam typically describes a condition and asks which force it affects and in which direction, so identify the single force involved and whether the condition strengthens or weakens it.",
        ],
        keyRules: [
          "Five forces: entrants, suppliers, buyers, substitutes, rivalry",
          "Identify which single force a condition affects and its direction",
          "High forces reduce industry profitability",
        ],
      },
      {
        id: "akbt2-sn3",
        title: "Market structures and basic economics",
        testPointIds: ["akbt2-tp3"],
        explanation: [
          "BT includes introductory economics. Market structures range from perfect competition (many small firms, identical products, no price-setting power) through monopolistic competition and oligopoly (a few dominant firms, interdependent decisions) to monopoly (a single firm with significant price-setting power and high barriers). The number of firms, degree of product differentiation and barriers to entry determine the structure.",
          "Demand and supply analysis explains price. A rightward shift in demand (e.g. rising incomes) raises equilibrium price and quantity; a rightward shift in supply (e.g. lower input costs) lowers price and raises quantity. Price elasticity measures how responsive quantity is to price changes.",
          "Government macroeconomic policy also affects business: fiscal policy (taxation and spending) and monetary policy (interest rates and money supply) influence demand, costs and investment. The exam tests whether you can trace a change through to its effect on a firm.",
        ],
        keyRules: [
          "Market structure is set by number of firms, differentiation and barriers",
          "Demand/supply shifts move the equilibrium price and quantity",
          "Fiscal and monetary policy influence demand and costs",
        ],
      },
      {
        id: "akbt2-sn4",
        title: "Competitive advantage and connected stakeholders",
        testPointIds: ["akbt2-tp4"],
        explanation: [
          "Firms compete by building competitive advantage. Porter's generic strategies are cost leadership (being the lowest-cost producer), differentiation (offering something distinctive customers will pay more for), and focus (targeting a niche with either cost or differentiation). Porter warned that firms failing to commit risk being 'stuck in the middle' — neither cheapest nor distinctive.",
          "The value chain (introduced at a basic level in BT) breaks the firm into primary and support activities, helping identify where value and advantage are created. This links to the wider strategy studied later in SBL.",
          "Connected stakeholders — customers, suppliers, shareholders and lenders — exert bargaining influence that shapes strategy. Powerful customers can force price cuts or quality improvements; powerful suppliers can raise costs. Recognising this influence links the external analysis back to the organisation's choices.",
        ],
        keyRules: [
          "Generic strategies: cost leadership, differentiation, focus",
          "Avoid being 'stuck in the middle'",
          "Connected stakeholders' bargaining power shapes strategy",
        ],
      },
    ],
    examPractice: [
      {
        id: "akbt2-ep1",
        testPointIds: ["akbt2-tp1"],
        style: "Objective test — PESTEL",
        question:
          "New legislation requires all manufacturers to reduce packaging waste by 30%. Under which PESTEL heading does this factor most appropriately fall?",
        answerPlan: [
          "Identify the nature of the factor",
          "Choose the best heading",
        ],
        modelAnswer:
          "The factor is a legal requirement, so it falls primarily under Legal. It has an Environmental driver, but because the stem emphasises the legislative requirement, Legal is the most appropriate single heading.",
        markingGuide: [
          "1 mark: Legal (or Environmental with justified reasoning) selected",
          "1 mark: reasoning tied to the stem's emphasis on legislation",
        ],
      },
      {
        id: "akbt2-ep2",
        testPointIds: ["akbt2-tp2"],
        style: "Objective test — five forces",
        question:
          "In an industry, customers can easily switch between suppliers at no cost and there are many competing suppliers. Which force is strengthened and what is the effect on profitability?",
        answerPlan: [
          "Identify the force affected",
          "State the direction and profitability effect",
        ],
        modelAnswer:
          "Low switching costs and many suppliers strengthen the bargaining power of buyers. Higher buyer power squeezes prices and reduces industry profitability and attractiveness.",
        markingGuide: [
          "1 mark: buyer power identified as strengthened",
          "1 mark: reduced profitability noted",
        ],
      },
      {
        id: "akbt2-ep3",
        testPointIds: ["akbt2-tp4"],
        style: "Objective test — generic strategy",
        question:
          "A retailer positions itself as the cheapest in the market by minimising costs throughout its operations. Which of Porter's generic strategies is this?",
        answerPlan: [
          "Match the approach to a generic strategy",
        ],
        modelAnswer:
          "Competing by being the lowest-cost provider across the whole market is a cost leadership strategy. It is not differentiation (distinctiveness) or focus (a niche).",
        markingGuide: [
          "1 mark: cost leadership identified",
          "1 mark: reasoning based on minimising costs to be cheapest",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m3": examDepth({
    testPoints: [
      {
        id: "akbt3-tp1",
        title: "Role of the accounting and finance function",
        priority: "high",
        examinerFocus:
          "Identifying the sub-functions of finance and how they interact with other business functions — the systems-and-controls focus of this module.",
        typicalQuestionForms: [
          "Item placing a described task in the right finance sub-function",
          "Item on the relationship between finance and other functions or on internal vs external audit",
        ],
        mustKnow: [
          "Finance sub-functions: financial accounting, management accounting, treasury, internal audit",
          "Internal audit serves management and is ongoing; external audit gives an independent opinion to shareholders",
          "How finance supports other functions with information",
        ],
        scoringActions: [
          "Match the task to the correct sub-function",
          "Distinguish internal from external audit by purpose and reporting line",
        ],
      },
      {
        id: "akbt3-tp2",
        title: "Internal control systems and control activities",
        priority: "critical",
        examinerFocus:
          "Classifying controls and recognising the components and limitations of an internal control system.",
        typicalQuestionForms: [
          "Item classifying a control as preventive, detective or corrective",
          "Item on segregation of duties or on the limitations of internal control",
        ],
        mustKnow: [
          "Control types by timing/purpose: preventive, detective, corrective",
          "Segregation of duties separates authorisation, recording and custody",
          "Inherent limitations: collusion, management override, human error, cost-benefit",
        ],
        scoringActions: [
          "Classify each control by when it acts relative to the event",
          "Link a described weakness to the specific control that removes it",
        ],
      },
      {
        id: "akbt3-tp3",
        title: "Fraud, its prevention and the fraud triangle",
        priority: "high",
        examinerFocus:
          "Understanding the conditions for fraud and the controls that prevent and detect it.",
        typicalQuestionForms: [
          "Item on the fraud triangle (opportunity, motive, rationalisation)",
          "Item selecting controls that prevent or detect a described fraud",
        ],
        mustKnow: [
          "The fraud triangle: opportunity, motive/pressure, rationalisation",
          "Controls mainly remove opportunity (segregation, authorisation, reconciliations)",
          "Types of fraud: misappropriation of assets and fraudulent financial reporting",
        ],
        scoringActions: [
          "Identify which leg of the fraud triangle a control attacks",
          "Select preventive and detective controls appropriate to the fraud",
        ],
      },
      {
        id: "akbt3-tp4",
        title: "Information systems, security and compliance",
        priority: "medium",
        examinerFocus:
          "Recognising the role of information systems and the controls needed to keep data secure and reliable.",
        typicalQuestionForms: [
          "Item on general vs application controls in an IT system",
          "Item on data security threats or compliance/regulatory requirements",
        ],
        mustKnow: [
          "General IT controls (access, back-up, change management) vs application controls (input, processing, output)",
          "Data security threats (unauthorised access, malware) and safeguards (passwords, encryption, firewalls)",
          "The importance of compliance with laws such as data protection",
        ],
        scoringActions: [
          "Distinguish general from application controls",
          "Match a safeguard to the specific data-security threat",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 65%+; control classification and fraud items are definition-driven and reliably scored.",
      timeBudget:
        "Within the 2-hour BT CBE, about 1.2 minutes per mark; keep classification items brisk.",
      answerSequence: [
        "Answer finance-function and control-classification items first",
        "Apply the fraud triangle and IT-control frameworks to scenarios",
        "Return to flagged items and answer everything",
      ],
      qualityChecks: [
        "Confirm the control type (timing) matches the description",
        "Check multiple-response items have the exact number of selections",
      ],
    },
    studyNotes: [
      {
        id: "akbt3-sn1",
        title: "The finance function and audit",
        testPointIds: ["akbt3-tp1"],
        explanation: [
          "This module examines how organisations stay reliable and compliant through systems and controls. The finance function is more than bookkeeping: financial accounting records and reports to external users, management accounting produces information for internal decisions, treasury manages cash and financing, and internal audit provides ongoing assurance to management on controls and risk.",
          "A common exam point is the distinction between internal and external audit. Internal audit is an in-house (or outsourced) function reporting to management or the audit committee, reviewing controls and risk continuously. External audit is independent, appointed by shareholders, and gives an opinion on whether the financial statements are true and fair.",
          "The finance function supports every other part of the business with information — costings for production, budgets for departments, and analysis for strategy — so BT expects you to see finance as a service partner, not an isolated department.",
        ],
        keyRules: [
          "Finance sub-functions: financial accounting, management accounting, treasury, internal audit",
          "Internal audit serves management; external audit serves shareholders",
          "Finance provides information to support all other functions",
        ],
      },
      {
        id: "akbt3-sn2",
        title: "Internal control systems",
        testPointIds: ["akbt3-tp2"],
        explanation: [
          "Internal controls are the policies and procedures that help ensure reliable reporting, effective operations and compliance. They are classified by timing and purpose: preventive controls stop errors before they happen (authorisation limits, segregation of duties, physical access controls); detective controls find errors after they occur (reconciliations, exception reports, physical counts); and corrective controls put things right (back-ups, follow-up procedures).",
          "Segregation of duties is the most-tested control because it separates the incompatible tasks of authorising a transaction, recording it, and having custody of the related assets. When these are split between people, one individual cannot both perpetrate and conceal an error or fraud.",
          "No control system is perfect. Inherent limitations include collusion between staff (which can defeat segregation), management override, ordinary human error, and the cost-benefit constraint that means controls are only worthwhile up to a point. Internal control therefore gives reasonable, not absolute, assurance.",
        ],
        keyRules: [
          "Controls: preventive (before), detective (after), corrective (fix)",
          "Segregation separates authorisation, recording and custody",
          "Controls give reasonable, not absolute, assurance",
        ],
        workedProblem: {
          scenario:
            "A company wants to strengthen its cash-handling controls. It currently lets one cashier receive cash, record it and bank it. Recommend one preventive and one detective control.",
          steps: [
            "Diagnose the weakness: no segregation of duties over cash",
            "Preventive control: separate receiving, recording and banking between different staff",
            "Detective control: independent reconciliation of cash records to bank statements",
          ],
          conclusion:
            "Splitting the cash tasks (preventive) and adding an independent bank reconciliation (detective) reduces both the opportunity for and the concealment of error or theft.",
          markingNotes: [
            "A valid preventive control (segregation) proposed",
            "A valid detective control (reconciliation) proposed",
          ],
        },
      },
      {
        id: "akbt3-sn3",
        title: "Fraud and its prevention",
        testPointIds: ["akbt3-tp3"],
        explanation: [
          "Fraud is intentional deception for gain, and BT frames it with the fraud triangle: fraud is most likely when three conditions coincide — opportunity (weak controls allow it), motive or pressure (financial need, unrealistic targets), and rationalisation (the fraudster justifies the act to themselves). Removing any one leg makes fraud less likely.",
          "Controls attack primarily the opportunity leg. Segregation of duties, authorisation controls, physical security and regular reconciliations all reduce the opportunity to commit and hide fraud. Organisations also reduce motive (fair targets, ethical culture) and rationalisation (a strong tone at the top and codes of conduct).",
          "Two broad fraud types feature: misappropriation of assets (theft of cash or inventory) and fraudulent financial reporting (manipulating the accounts, often driven by targets or incentives). The exam asks you to match controls to the fraud and to identify which condition of the triangle a control addresses.",
        ],
        keyRules: [
          "Fraud triangle: opportunity, motive/pressure, rationalisation",
          "Controls mainly remove opportunity",
          "Two types: asset misappropriation and fraudulent financial reporting",
        ],
      },
      {
        id: "akbt3-sn4",
        title: "Information systems, security and compliance",
        testPointIds: ["akbt3-tp4"],
        explanation: [
          "Modern accounting depends on information systems, so controls extend to IT. General controls apply across the whole IT environment — access controls (passwords, user rights), back-up and recovery, and change-management over software. Application controls operate within specific applications — input controls (validation checks), processing controls, and output controls that ensure data is complete and accurate.",
          "Data security addresses threats such as unauthorised access, malware, and loss of data. Safeguards include strong passwords and access rights, encryption, firewalls, antivirus software and regular back-ups. A breach can cause financial loss, reputational damage and legal liability.",
          "Compliance ties this together: organisations must obey relevant laws, including data-protection legislation governing how personal data is collected, stored and used. BT expects awareness that good systems and controls are also about staying within the law, not just efficiency.",
        ],
        keyRules: [
          "General IT controls (access, back-up, change) vs application controls (input, processing, output)",
          "Security safeguards: passwords, encryption, firewalls, back-ups",
          "Compliance with data-protection and other law is essential",
        ],
      },
    ],
    examPractice: [
      {
        id: "akbt3-ep1",
        testPointIds: ["akbt3-tp2"],
        style: "Objective test — control type",
        question:
          "A supervisor reviews an exception report each week listing all invoices over $10,000 that were paid without a matching purchase order. What type of control is this?",
        answerPlan: [
          "Determine when the control acts",
          "Classify it",
        ],
        modelAnswer:
          "The exception report identifies problems after payments have been made, so it is a detective control. It finds errors or breaches rather than preventing them.",
        markingGuide: [
          "1 mark: detective control identified",
          "1 mark: reasoning that it acts after the event",
        ],
      },
      {
        id: "akbt3-ep2",
        testPointIds: ["akbt3-tp3"],
        style: "Objective test — fraud triangle",
        question:
          "Which element of the fraud triangle is most directly reduced by strong segregation of duties?",
        answerPlan: [
          "Recall the three elements",
          "Identify which controls address",
        ],
        modelAnswer:
          "Segregation of duties most directly reduces opportunity, because separating authorisation, recording and custody makes it far harder for one person to commit and conceal a fraud. Motive and rationalisation are addressed by other means such as ethical culture and fair targets.",
        markingGuide: [
          "1 mark: opportunity identified",
          "1 mark: reasoning linking segregation to removing opportunity",
        ],
      },
      {
        id: "akbt3-ep3",
        testPointIds: ["akbt3-tp4"],
        style: "Objective test — IT controls",
        question:
          "A system rejects any customer order where the quantity field contains letters instead of numbers. Is this a general control or an application control, and of what kind?",
        answerPlan: [
          "Classify general vs application",
          "Identify the specific type",
        ],
        modelAnswer:
          "This is an application control, specifically an input validation (data check) control that ensures only valid numeric data is entered. It is not a general control, which would apply across the whole IT environment (e.g. access or back-up controls).",
        markingGuide: [
          "1 mark: application control identified",
          "1 mark: input validation/data check specified",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m4": examDepth({
    testPoints: [
      {
        id: "akbt4-tp1",
        title: "Personal effectiveness and time management",
        priority: "medium",
        examinerFocus:
          "Recognising techniques for personal effectiveness, time management and continuing professional development within the BT people focus.",
        typicalQuestionForms: [
          "Item on time-management or prioritisation techniques",
          "Item on personal development plans and CPD",
        ],
        mustKnow: [
          "Time-management and prioritisation techniques (e.g. urgent/important)",
          "Personal development planning and continuing professional development",
          "The role of appraisal and feedback in improving effectiveness",
        ],
        scoringActions: [
          "Match the described situation to the appropriate technique",
          "Link development activities to improved competence",
        ],
      },
      {
        id: "akbt4-tp2",
        title: "Motivation and leadership theories",
        priority: "high",
        examinerFocus:
          "Identifying and applying motivation and leadership theories to workplace scenarios.",
        typicalQuestionForms: [
          "Item matching described conditions to Maslow, Herzberg or expectancy theory",
          "Item on a leadership model (Blake & Mouton, situational leadership, Adair)",
        ],
        mustKnow: [
          "Content theories (Maslow, Herzberg) vs process theories (expectancy)",
          "Herzberg's hygiene factors (prevent dissatisfaction) vs motivators (create satisfaction)",
          "Leadership models: managerial grid, action-centred leadership, situational leadership",
        ],
        scoringActions: [
          "Separate hygiene factors from motivators in Herzberg items",
          "Match described leader behaviour to the correct model",
        ],
      },
      {
        id: "akbt4-tp3",
        title: "Teams and communication",
        priority: "high",
        examinerFocus:
          "Understanding team development and roles, and effective communication in organisations.",
        typicalQuestionForms: [
          "Item on Tuckman's stages or Belbin's team roles",
          "Item on the communication process, barriers, or channels",
        ],
        mustKnow: [
          "Tuckman's stages: forming, storming, norming, performing (and adjourning)",
          "Belbin's team roles and the value of a balanced team",
          "The communication process, barriers to communication, and choosing the right channel",
        ],
        scoringActions: [
          "Match team behaviours to the Tuckman stage or Belbin role",
          "Identify the communication barrier and an appropriate remedy",
        ],
      },
      {
        id: "akbt4-tp4",
        title: "Professional ethics and the fundamental principles",
        priority: "critical",
        examinerFocus:
          "Applying the ACCA fundamental principles and threats to workplace ethical situations — the ethics core of this module.",
        typicalQuestionForms: [
          "Item identifying which fundamental principle is threatened",
          "Item classifying the threat (self-interest, self-review, advocacy, familiarity, intimidation)",
        ],
        mustKnow: [
          "The five fundamental principles: integrity, objectivity, professional competence and due care, confidentiality, professional behaviour",
          "The five threat categories and examples of each",
          "Safeguards, and the duty to act in the public interest",
        ],
        scoringActions: [
          "Name the specific principle at risk rather than 'ethics' generally",
          "Match the situation to the correct threat category",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 65%+; the ethics and motivation items are high-yield once the theories and principles are memorised.",
      timeBudget:
        "Within the 2-hour BT CBE, about 1.2 minutes per mark; keep theory-recall items quick.",
      answerSequence: [
        "Answer ethics and theory-recall items first",
        "Apply leadership/team frameworks to scenario items",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm the principle and threat category are precisely named",
        "Separate Herzberg's hygiene factors from motivators",
      ],
    },
    studyNotes: [
      {
        id: "akbt4-sn1",
        title: "Personal effectiveness and development",
        testPointIds: ["akbt4-tp1"],
        explanation: [
          "This module develops the individual professional. Personal effectiveness starts with managing time and priorities — distinguishing the urgent from the important, planning, and avoiding time-wasters. These techniques let an accountant deliver reliably under deadline pressure.",
          "Development is continuous. A personal development plan identifies gaps between current and required competence and sets objectives to close them, while continuing professional development keeps knowledge and skills current — a professional obligation for ACCA members.",
          "Appraisal and feedback support this. A well-run appraisal reviews performance against objectives, gives constructive feedback, and agrees development actions, turning day-to-day work into a cycle of improvement.",
        ],
        keyRules: [
          "Prioritise using urgency and importance",
          "Use personal development plans and CPD to close competence gaps",
          "Appraisal provides feedback and development objectives",
        ],
      },
      {
        id: "akbt4-sn2",
        title: "Motivation and leadership",
        testPointIds: ["akbt4-tp2"],
        explanation: [
          "Motivation theory divides into content theories (what motivates people) and process theories (how motivation works). Maslow's hierarchy of needs rises from physiological and safety needs through social and esteem to self-actualisation. Herzberg distinguishes hygiene factors — pay, conditions, supervision — whose absence causes dissatisfaction but whose presence does not motivate, from motivators — achievement, recognition, responsibility — which create genuine satisfaction. Vroom's expectancy theory, a process theory, says effort depends on expectancy, instrumentality and valence.",
          "Leadership models describe how managers lead. Blake and Mouton's managerial grid plots concern for people against concern for production, with 9,9 'team management' the ideal. Adair's action-centred leadership balances task, team and individual needs. Situational leadership argues the best style depends on the followers' readiness, moving from directing to coaching to supporting to delegating.",
          "The exam gives behaviours and asks you to place them within a theory or model, so learn the defining features of each and the key distinction (especially Herzberg's hygiene/motivator split, which is frequently tested).",
        ],
        keyRules: [
          "Content theories (Maslow, Herzberg) vs process (expectancy)",
          "Hygiene factors prevent dissatisfaction; motivators create satisfaction",
          "Leadership style may need to fit the situation and followers",
        ],
        workedProblem: {
          scenario:
            "Staff say their pay and office are fine but they feel unrecognised and see no chance to take on responsibility, and morale is low. Using Herzberg, explain the problem and a remedy.",
          steps: [
            "Classify the satisfied items: pay and conditions are hygiene factors — present, so no dissatisfaction from them",
            "Identify the gap: recognition and responsibility are motivators, which are absent",
            "Remedy: introduce recognition and greater responsibility to create genuine motivation",
          ],
          conclusion:
            "Under Herzberg, the hygiene factors are satisfactory but the motivators are missing; introducing recognition and responsibility should raise motivation and morale, whereas simply increasing pay would not.",
          markingNotes: [
            "Correct hygiene/motivator classification",
            "Remedy targets motivators, not hygiene factors",
          ],
        },
      },
      {
        id: "akbt4-sn3",
        title: "Teams and communication",
        testPointIds: ["akbt4-tp3"],
        explanation: [
          "Effective organisations depend on effective teams. Tuckman describes how groups develop through forming (coming together), storming (conflict as roles are contested), norming (agreeing ways of working) and performing (working effectively), with a final adjourning stage. Recognising the stage a team is in helps a manager support it appropriately.",
          "Belbin identified team roles — such as coordinator, shaper, plant (ideas), monitor-evaluator, implementer and completer-finisher — and argued that balanced teams containing a mix of roles perform best, because different roles contribute different strengths.",
          "Communication is the lifeblood of coordination. The communication process moves a message from sender to receiver through a channel, with feedback confirming understanding. Barriers — noise, jargon, distortion, information overload, poor channel choice — impede it, and the manager's task is to remove them and select the channel appropriate to the message.",
        ],
        keyRules: [
          "Tuckman: forming, storming, norming, performing (adjourning)",
          "Balanced Belbin team roles improve performance",
          "Identify and remove communication barriers; match channel to message",
        ],
      },
      {
        id: "akbt4-sn4",
        title: "Professional ethics in the workplace",
        testPointIds: ["akbt4-tp4"],
        explanation: [
          "Ethics is the most important part of this module and the foundation for the whole qualification. The ACCA code sets five fundamental principles: integrity (being honest and straightforward), objectivity (not allowing bias or undue influence), professional competence and due care (maintaining knowledge and working carefully), confidentiality (not disclosing information improperly), and professional behaviour (complying with laws and not discrediting the profession).",
          "Threats to these principles fall into five categories: self-interest (a financial or other interest), self-review (reviewing one's own work), advocacy (promoting a client's position), familiarity (a close relationship reducing objectivity), and intimidation (pressure). The exam gives a situation and asks which principle is threatened and which category the threat falls into.",
          "Where threats exist, safeguards may reduce them to an acceptable level; if not, the accountant must remove themselves from the situation. Overriding all of this is the duty to act in the public interest, which distinguishes a profession from a mere job.",
        ],
        keyRules: [
          "Five principles: integrity, objectivity, competence/due care, confidentiality, professional behaviour",
          "Five threats: self-interest, self-review, advocacy, familiarity, intimidation",
          "Apply safeguards or withdraw; act in the public interest",
        ],
      },
    ],
    examPractice: [
      {
        id: "akbt4-ep1",
        testPointIds: ["akbt4-tp4"],
        style: "Objective test — ethics",
        question:
          "An accountant is asked by a close friend, who is also the client's finance director, to overlook a small misstatement 'as a favour'. Which fundamental principle is most threatened and by which threat category?",
        answerPlan: [
          "Identify the principle at risk",
          "Classify the threat",
        ],
        modelAnswer:
          "The principle most threatened is objectivity (and integrity), because the close personal relationship could bias the accountant's judgement. The threat category is familiarity, arising from the close relationship with the finance director. The accountant should not overlook the misstatement.",
        markingGuide: [
          "1 mark: objectivity/integrity identified",
          "1 mark: familiarity threat identified",
        ],
      },
      {
        id: "akbt4-ep2",
        testPointIds: ["akbt4-tp2"],
        style: "Objective test — motivation",
        question:
          "According to Herzberg, which ONE of the following is a motivator rather than a hygiene factor? A) Salary; B) Working conditions; C) Recognition for achievement; D) Company policy.",
        answerPlan: [
          "Recall Herzberg's two-factor split",
          "Select the motivator",
        ],
        modelAnswer:
          "The motivator is C, recognition for achievement. Salary, working conditions and company policy are hygiene factors whose absence causes dissatisfaction but whose presence does not create genuine motivation.",
        markingGuide: [
          "1 mark: recognition (C) identified as the motivator",
          "1 mark: reasoning that the others are hygiene factors",
        ],
      },
      {
        id: "akbt4-ep3",
        testPointIds: ["akbt4-tp3"],
        style: "Objective test — teams",
        question:
          "A newly formed project team is experiencing conflict as members compete over roles and approaches. Which Tuckman stage is this, and what typically follows?",
        answerPlan: [
          "Identify the stage from the behaviour",
          "State the next stage",
        ],
        modelAnswer:
          "Conflict over roles and approaches characterises the storming stage. If the team works through it, storming is typically followed by norming, where members agree ways of working, and then performing.",
        markingGuide: [
          "1 mark: storming identified",
          "1 mark: norming stated as what follows",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m5": examDepth({
    testPoints: [
      {
        id: "akma5-tp1",
        title: "Cost classification by behaviour and function",
        priority: "critical",
        examinerFocus:
          "Classifying costs by behaviour (fixed/variable/semi-variable/stepped) and function (direct/indirect), the foundation of this costing-techniques module.",
        typicalQuestionForms: [
          "Item classifying a described cost by behaviour",
          "Item on prime cost, direct vs indirect, or product vs period cost",
        ],
        mustKnow: [
          "Fixed, variable, semi-variable and stepped cost behaviour over the relevant range",
          "Prime cost = direct materials + direct labour + direct expenses",
          "Direct vs indirect and product vs period costs",
        ],
        scoringActions: [
          "Test how the cost changes with activity to classify behaviour",
          "Separate prime cost from overhead correctly",
        ],
      },
      {
        id: "akma5-tp2",
        title: "High-low method",
        priority: "high",
        examinerFocus:
          "Splitting a semi-variable cost into fixed and variable elements using high-low, including step adjustments.",
        typicalQuestionForms: [
          "Item computing variable cost per unit or total fixed cost from two activity levels",
          "Item where fixed costs step between the high and low points",
        ],
        mustKnow: [
          "Variable per unit = (high cost − low cost) / (high units − low units)",
          "Fixed cost = total cost − variable cost at either level",
          "Remove a step change in fixed cost before applying high-low",
        ],
        scoringActions: [
          "Adjust for any step in fixed cost first",
          "Label per-unit vs total to avoid distractors",
        ],
      },
      {
        id: "akma5-tp3",
        title: "Material, labour and overhead costing",
        priority: "high",
        examinerFocus:
          "Costing materials (valuation methods), labour (including idle time and overtime), and overheads.",
        typicalQuestionForms: [
          "Item valuing inventory issues using FIFO or AVCO",
          "Item on labour cost, idle time, overtime premium or remuneration methods",
        ],
        mustKnow: [
          "Inventory valuation: FIFO and weighted average (AVCO)",
          "Labour cost includes basic pay; overtime premium and idle time are usually overhead",
          "Remuneration methods: time-based, piecework, and bonus schemes",
        ],
        scoringActions: [
          "Apply the correct valuation method consistently to issues",
          "Classify overtime premium/idle time as overhead unless specifically for a job",
        ],
      },
      {
        id: "akma5-tp4",
        title: "Absorption vs marginal costing (introductory)",
        priority: "critical",
        examinerFocus:
          "Computing overhead absorption rates and the profit difference between absorption and marginal costing.",
        typicalQuestionForms: [
          "Item computing an OAR and under/over-absorption",
          "Item on the profit difference from an inventory change",
        ],
        mustKnow: [
          "OAR = budgeted overhead / budgeted activity; absorbed = actual activity × OAR",
          "Over/under-absorption = absorbed − actual overhead",
          "Profit difference = change in inventory units × fixed OAR per unit",
        ],
        scoringActions: [
          "Use the predetermined OAR on actual activity",
          "State which method is higher based on the inventory movement",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 70%+; costing-technique items are formula-driven and reliably scored with careful workings.",
      timeBudget:
        "Within the 2-hour MA CBE, about 1.2 minutes per mark; give multi-step costing items up to ~2 minutes.",
      answerSequence: [
        "Answer classification and quick costing items first",
        "Work high-low and absorption calculations with scratchpad workings",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm per-unit vs total labels",
        "Check the OAR uses budgeted figures and actual activity",
      ],
    },
    studyNotes: [
      {
        id: "akma5-sn1",
        title: "Cost classification foundations",
        testPointIds: ["akma5-tp1"],
        explanation: [
          "This module builds the numerical bedrock of management accounting: classifying and costing. Costs are classified by behaviour — fixed costs stay constant in total over the relevant range, variable costs change in proportion to activity, semi-variable costs have both elements, and stepped fixed costs are fixed over a band then jump. The behaviour determines which technique applies later.",
          "Costs are also classified by function and traceability. Direct costs (materials, labour, expenses that can be traced to a cost unit) sum to prime cost; indirect costs are overheads. Product costs attach to the units and are held in inventory until sold, while period costs (selling, administration) are written off in the period.",
          "Getting classification right is essential because every later calculation — high-low, absorption, break-even — depends on knowing how a cost behaves and whether it is direct or indirect.",
        ],
        keyRules: [
          "Behaviour: fixed, variable, semi-variable, stepped",
          "Prime cost = direct materials + direct labour + direct expenses",
          "Product costs sit in inventory; period costs are expensed",
        ],
      },
      {
        id: "akma5-sn2",
        title: "The high-low method",
        testPointIds: ["akma5-tp2"],
        explanation: [
          "The high-low method separates a semi-variable cost into its fixed and variable parts using only the highest and lowest activity levels. The variable cost per unit equals the change in total cost divided by the change in units between those two points; the fixed element is then whatever remains at either activity level.",
          "The classic trap is a step in fixed costs between the high and low points. If fixed costs jump above a certain activity, you must remove the step before dividing, or the variable rate will be overstated. Always check the scenario for a stated step.",
          "High-low is simple but relies only on two data points, so it can be less accurate than regression. In MA, however, it is the required method, so practise it until the mechanics are automatic.",
        ],
        keyRules: [
          "Variable per unit = (high cost − low cost) / (high units − low units)",
          "Adjust for a step in fixed cost before dividing",
          "Fixed = total cost − variable cost at a chosen level",
        ],
        workedProblem: {
          scenario:
            "Total cost is $12,000 at 2,000 units and $18,000 at 5,000 units, with no step in fixed costs. Find the variable cost per unit and total fixed cost.",
          steps: [
            "Variable per unit = ($18,000 − $12,000) / (5,000 − 2,000) = $6,000 / 3,000 = $2.00",
            "Fixed = $12,000 − (2,000 × $2.00) = $12,000 − $4,000 = $8,000",
            "Check at high level: $8,000 + (5,000 × $2.00) = $18,000 ✓",
          ],
          conclusion:
            "Variable cost is $2.00 per unit and total fixed cost is $8,000, confirmed by reconciling to the high activity level.",
          markingNotes: [
            "Correct variable rate of $2.00",
            "Correct fixed cost of $8,000 with a reconciliation check",
          ],
        },
      },
      {
        id: "akma5-sn3",
        title: "Costing materials, labour and overheads",
        testPointIds: ["akma5-tp3"],
        explanation: [
          "Materials are valued as they are issued to production. FIFO assumes the oldest inventory is used first, so closing inventory is valued at recent prices; weighted average (AVCO) recalculates an average cost per unit after each purchase. In periods of rising prices, FIFO gives a higher closing inventory value and profit than AVCO.",
          "Labour cost comprises basic pay plus, in some cases, overtime and bonuses. Overtime premium (the extra above basic rate) and idle time are usually treated as overhead rather than direct cost, unless overtime is worked at a specific customer's request. Remuneration methods include time-based pay, piecework (pay per unit) and bonus schemes rewarding efficiency.",
          "Overheads are indirect costs that must be shared across cost units, which leads into overhead absorption. Understanding how each element of cost is measured ensures the totals feeding absorption and marginal costing are correct.",
        ],
        keyRules: [
          "FIFO uses oldest cost first; AVCO uses a rolling average",
          "Overtime premium and idle time are normally overhead",
          "Remuneration: time-based, piecework, bonus schemes",
        ],
      },
      {
        id: "akma5-sn4",
        title: "Overhead absorption and marginal costing",
        testPointIds: ["akma5-tp4"],
        explanation: [
          "Absorption costing shares fixed production overhead across units using an overhead absorption rate set in advance: OAR equals budgeted overhead divided by budgeted activity. Overhead absorbed equals actual activity times the OAR. Because the rate is predetermined, actual overhead rarely equals absorbed overhead, giving over-absorption (absorbed exceeds actual, credited to profit) or under-absorption (absorbed is less, charged to profit).",
          "Marginal costing values inventory at variable cost only and treats fixed overhead as a period cost. The two methods therefore give different profits whenever inventory changes: the difference equals the change in inventory units multiplied by the fixed overhead per unit. When inventory rises, absorption profit is higher because fixed overhead is deferred in inventory; when it falls, marginal profit is higher.",
          "This introductory treatment sets up the fuller marginal-versus-absorption reconciliation in PM, so the mechanics learned here must be secure.",
        ],
        keyRules: [
          "OAR = budgeted overhead / budgeted activity",
          "Over/under-absorption = absorbed − actual overhead",
          "Profit difference = change in inventory units × fixed OAR per unit",
        ],
      },
    ],
    examPractice: [
      {
        id: "akma5-ep1",
        testPointIds: ["akma5-tp4"],
        style: "Objective test — absorption",
        question:
          "Budgeted overhead is $60,000 over 12,000 budgeted labour hours. Actual overhead was $58,000 and actual hours were 11,000. Calculate the over- or under-absorption.",
        answerPlan: [
          "Compute the OAR",
          "Compute absorbed overhead",
          "Compare to actual",
        ],
        modelAnswer:
          "OAR = $60,000 / 12,000 = $5 per hour. Absorbed overhead = 11,000 × $5 = $55,000. Actual overhead was $58,000, so overhead is under-absorbed by $58,000 − $55,000 = $3,000, which is charged to profit.",
        markingGuide: [
          "1 mark: OAR of $5 and absorbed overhead of $55,000",
          "1 mark: $3,000 under-absorption",
        ],
      },
      {
        id: "akma5-ep2",
        testPointIds: ["akma5-tp2"],
        style: "Objective test — high-low",
        question:
          "Total cost is $9,000 at 1,000 units and $13,000 at 3,000 units (no step). What is the variable cost per unit?",
        answerPlan: [
          "Apply high-low",
        ],
        modelAnswer:
          "Variable cost per unit = ($13,000 − $9,000) / (3,000 − 1,000) = $4,000 / 2,000 = $2.00 per unit.",
        markingGuide: [
          "1 mark: correct differences used",
          "1 mark: $2.00 per unit",
        ],
      },
      {
        id: "akma5-ep3",
        testPointIds: ["akma5-tp3"],
        style: "Objective test — inventory valuation",
        question:
          "Opening inventory is nil. 100 units are bought at $10, then 100 at $12. 150 units are issued. Using FIFO, what is the cost of the 150 units issued?",
        answerPlan: [
          "Apply FIFO to the issue",
        ],
        modelAnswer:
          "Under FIFO the first 100 units are issued at $10 ($1,000) and the next 50 at $12 ($600). Total cost of the 150 units issued = $1,000 + $600 = $1,600.",
        markingGuide: [
          "1 mark: FIFO layers applied correctly",
          "1 mark: $1,600 issue cost",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m6": examDepth({
    testPoints: [
      {
        id: "akma6-tp1",
        title: "Purposes and preparation of budgets",
        priority: "high",
        examinerFocus:
          "Understanding why organisations budget and preparing functional budgets, the planning focus of this module.",
        typicalQuestionForms: [
          "Item on the purposes of budgeting or types of budget (fixed, flexible, rolling, ZBB)",
          "Item preparing a functional budget (sales, production, materials usage)",
        ],
        mustKnow: [
          "Purposes of budgeting: planning, coordination, control, motivation, authorisation",
          "Budget types: fixed, flexible, incremental, zero-based, rolling",
          "Production budget = sales + closing inventory − opening inventory",
        ],
        scoringActions: [
          "Adjust the sales budget for inventory changes to get production",
          "Match the described approach to the correct budget type",
        ],
      },
      {
        id: "akma6-tp2",
        title: "Forecasting techniques",
        priority: "medium",
        examinerFocus:
          "Applying simple forecasting: high-low, linear regression, time series and index numbers.",
        typicalQuestionForms: [
          "Item using a regression line (y = a + bx) to forecast",
          "Item on time-series components (trend, seasonal variation) or index numbers",
        ],
        mustKnow: [
          "Linear regression forecast: y = a + bx",
          "Time series: trend and seasonal variation (additive and multiplicative)",
          "Index numbers to adjust for price changes",
        ],
        scoringActions: [
          "Substitute the correct x into the regression equation",
          "Apply seasonal variation to the trend correctly (add or multiply)",
        ],
      },
      {
        id: "akma6-tp3",
        title: "Flexible budgets and budgetary control",
        priority: "high",
        examinerFocus:
          "Flexing a budget to actual activity and comparing it with actuals for control.",
        typicalQuestionForms: [
          "Item flexing a budget before comparing to actual results",
          "Item interpreting a flexed-budget variance",
        ],
        mustKnow: [
          "Flex the budget to the actual activity level before comparing",
          "A fixed-budget comparison mixes volume and efficiency effects",
          "Budgetary control uses variances to identify areas needing attention",
        ],
        scoringActions: [
          "Always flex first — never compare a fixed budget to a different volume",
          "Split any difference into volume and cost effects where required",
        ],
      },
      {
        id: "akma6-tp4",
        title: "Standard costing and basic variances",
        priority: "critical",
        examinerFocus:
          "Setting standards and computing material, labour and overhead variances, the control core of this module.",
        typicalQuestionForms: [
          "Item computing a material price/usage or labour rate/efficiency variance",
          "Item reconciling standard cost to actual via variances",
        ],
        mustKnow: [
          "Material price = (std price − actual price) × actual quantity; usage = (std qty − actual qty) × std price",
          "Labour rate = (std rate − actual rate) × actual hours; efficiency = (std hours − actual hours) × std rate",
          "Standards: ideal, attainable, current and basic",
        ],
        scoringActions: [
          "Use standard quantity for actual output in usage/efficiency variances",
          "Sign each variance F or A and sense-check it",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 70%+; budgeting and variance items are formula- and process-driven and reliably scored.",
      timeBudget:
        "Within the 2-hour MA CBE, about 1.2 minutes per mark; give variance and budget-flexing items up to ~2 minutes.",
      answerSequence: [
        "Answer budgeting-purpose and quick forecasting items first",
        "Work flexed-budget and variance calculations carefully",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm the budget was flexed before comparison",
        "Check variance signs (F/A) and that standard quantity is for actual output",
      ],
    },
    studyNotes: [
      {
        id: "akma6-sn1",
        title: "Budgeting purposes and preparation",
        testPointIds: ["akma6-tp1"],
        explanation: [
          "Budgets translate plans into numbers. Their purposes are often summarised as planning (forcing managers to look ahead), coordination (aligning departments), control (comparing actual to plan), motivation (setting targets) and authorisation (approving spending). A single budget serves several of these at once.",
          "Budgets are prepared in a logical sequence starting from the principal budget factor — usually sales. The production budget adjusts the sales budget for planned inventory changes: production equals sales plus closing inventory less opening inventory. Materials usage, purchases and labour budgets then follow from the production plan.",
          "Different approaches suit different situations: incremental budgeting adjusts last year's figures, zero-based budgeting justifies every item from scratch, rolling budgets are continuously updated, and fixed versus flexible budgets differ in whether they change with activity. The exam tests both the purposes and the mechanics of preparation.",
        ],
        keyRules: [
          "Purposes: planning, coordination, control, motivation, authorisation",
          "Production = sales + closing inventory − opening inventory",
          "Know incremental, zero-based, rolling, fixed and flexible budgets",
        ],
        workedProblem: {
          scenario:
            "Budgeted sales are 10,000 units. Opening inventory is 1,500 units and the company wants closing inventory of 2,000 units. Calculate the production budget in units.",
          steps: [
            "Start with sales: 10,000 units",
            "Add desired closing inventory: +2,000",
            "Deduct opening inventory: −1,500",
          ],
          conclusion:
            "Production budget = 10,000 + 2,000 − 1,500 = 10,500 units, ensuring both sales and the desired closing inventory are met.",
          markingNotes: [
            "Correct formula applied",
            "Production budget of 10,500 units",
          ],
        },
      },
      {
        id: "akma6-sn2",
        title: "Forecasting techniques",
        testPointIds: ["akma6-tp2"],
        explanation: [
          "Budgets rely on forecasts. Simple linear regression fits a line y = a + bx, where a is the intercept (fixed element) and b is the gradient (variable rate); given the equation and an x value, you can forecast y. This resembles high-low but uses all the data.",
          "Time-series analysis decomposes historical data into a trend and seasonal variations (and sometimes cyclical and random elements). Under the additive model the forecast is trend plus seasonal variation; under the multiplicative model it is trend times a seasonal index. Choosing the right model and applying the variation correctly is where marks are won or lost.",
          "Index numbers adjust figures for price changes over time, allowing comparison in real terms. Together these techniques let managers project sales, costs and prices as inputs to the budget.",
        ],
        keyRules: [
          "Regression forecast: y = a + bx",
          "Additive: trend + seasonal; multiplicative: trend × seasonal index",
          "Index numbers adjust for price changes",
        ],
      },
      {
        id: "akma6-sn3",
        title: "Flexible budgets and control",
        testPointIds: ["akma6-tp3"],
        explanation: [
          "Budgetary control compares actual results with the budget to identify areas needing management attention. The critical technique is flexing: the original (fixed) budget is set for a planned activity level, but actual activity usually differs, so the budget must be flexed to the actual volume before comparison. Comparing a fixed budget with a different actual volume mixes a volume effect with genuine efficiency differences and is meaningless.",
          "A flexed budget recalculates variable costs (and revenue) for the actual level of activity while keeping fixed costs unchanged. The difference between the flexed budget and the actual results then isolates cost and price efficiency.",
          "Control reports highlight significant variances for investigation (management by exception), focusing attention where it matters most rather than on every minor difference.",
        ],
        keyRules: [
          "Flex the budget to actual activity before comparing",
          "Fixed costs stay unchanged when flexing; variable costs are recalculated",
          "Use management by exception to focus on significant variances",
        ],
      },
      {
        id: "akma6-sn4",
        title: "Standard costing and variances",
        testPointIds: ["akma6-tp4"],
        explanation: [
          "A standard cost is a predetermined cost for one unit, built from standard quantities and prices. Standards can be ideal (perfect conditions), attainable (efficient but realistic), current, or basic (unchanged over time). Attainable standards are usually preferred because they motivate without demoralising.",
          "Variances compare the standard cost of actual output with actual costs. Material variances split into a price variance (difference between standard and actual price on the quantity used or bought) and a usage variance (difference between the standard quantity for actual output and the actual quantity, at standard price). Labour variances mirror this with a rate variance and an efficiency variance.",
          "Each variance is signed favourable (F) or adverse (A) and, ideally, interpreted. A favourable price variance with an adverse usage variance, for instance, might indicate cheaper but lower-quality material causing waste. This introductory treatment underpins the advanced variance analysis in PM.",
        ],
        keyRules: [
          "Usage variance uses the standard quantity for actual output",
          "Labour efficiency = (std hours for output − actual hours) × std rate",
          "Attainable standards motivate best",
        ],
      },
    ],
    examPractice: [
      {
        id: "akma6-ep1",
        testPointIds: ["akma6-tp4"],
        style: "Objective test — labour variance",
        question:
          "Standard labour is 2 hours at $10/hour per unit. To make 500 units the firm used 1,050 hours costing $10,500. Calculate the labour rate and efficiency variances.",
        answerPlan: [
          "Actual rate per hour",
          "Rate variance on actual hours",
          "Efficiency variance at standard rate",
        ],
        modelAnswer:
          "Actual rate = $10,500 / 1,050 = $10.00/hour, so the rate variance is nil. Standard hours for 500 units = 1,000 hours; efficiency variance = (1,000 − 1,050) × $10 = $500 A (adverse), because more hours were used than the standard allowed.",
        markingGuide: [
          "1 mark: rate variance nil",
          "1 mark: efficiency variance $500 A",
        ],
      },
      {
        id: "akma6-ep2",
        testPointIds: ["akma6-tp3"],
        style: "Objective test — flexing",
        question:
          "The fixed budget assumed 1,000 units with variable cost $5/unit and fixed cost $10,000. Actual output was 1,200 units. What is the flexed budget total cost?",
        answerPlan: [
          "Flex variable cost to actual units",
          "Add unchanged fixed cost",
        ],
        modelAnswer:
          "Flexed variable cost = 1,200 × $5 = $6,000. Fixed cost stays at $10,000. Flexed budget total cost = $6,000 + $10,000 = $16,000, which is the correct basis for comparison with actual cost at 1,200 units.",
        markingGuide: [
          "1 mark: variable cost flexed to $6,000",
          "1 mark: flexed total of $16,000 with fixed cost unchanged",
        ],
      },
      {
        id: "akma6-ep3",
        testPointIds: ["akma6-tp1"],
        style: "Objective test — budget type",
        question:
          "A company prepares each period's budget by justifying every cost from a zero base rather than adjusting last period's figures. What is this approach called?",
        answerPlan: [
          "Match the description to a budget type",
        ],
        modelAnswer:
          "This is zero-based budgeting, where every activity and cost must be justified from scratch each period, rather than incremental budgeting, which adjusts the prior period's figures.",
        markingGuide: [
          "1 mark: zero-based budgeting identified",
          "1 mark: contrast with incremental budgeting",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m7": examDepth({
    testPoints: [
      {
        id: "akma7-tp1",
        title: "Financial performance measures and ratios",
        priority: "critical",
        examinerFocus:
          "Calculating and interpreting financial performance ratios at an introductory level, the measurement focus of this module.",
        typicalQuestionForms: [
          "Item computing a profitability, liquidity or efficiency ratio",
          "Item interpreting what a ratio change means",
        ],
        mustKnow: [
          "Profitability: gross/operating/net margin and ROCE",
          "Liquidity: current ratio and quick (acid-test) ratio",
          "Efficiency: inventory, receivables and payables days; asset turnover",
        ],
        scoringActions: [
          "Use the correct numerator and denominator for each ratio",
          "Interpret the direction of a change, not just the number",
        ],
      },
      {
        id: "akma7-tp2",
        title: "Non-financial performance indicators",
        priority: "high",
        examinerFocus:
          "Recognising non-financial indicators and why they complement financial measures.",
        typicalQuestionForms: [
          "Item identifying a suitable non-financial indicator for an objective (e.g. quality, delivery)",
          "Item on the limitations of purely financial measures",
        ],
        mustKnow: [
          "Non-financial indicators: quality, customer satisfaction, delivery, productivity",
          "Financial measures are backward-looking and can be manipulated",
          "The balanced scorecard idea (introductory) of multiple perspectives",
        ],
        scoringActions: [
          "Match the indicator to the objective being measured",
          "Explain why financial measures alone are insufficient",
        ],
      },
      {
        id: "akma7-tp3",
        title: "Productivity, efficiency and capacity measures",
        priority: "high",
        examinerFocus:
          "Calculating productivity, efficiency, capacity and activity ratios that link resources to output.",
        typicalQuestionForms: [
          "Item computing an efficiency, capacity or activity ratio",
          "Item on labour productivity or utilisation",
        ],
        mustKnow: [
          "Efficiency ratio = standard hours for output / actual hours worked",
          "Capacity ratio = actual hours worked / budgeted hours",
          "Activity (production volume) ratio = standard hours for output / budgeted hours",
        ],
        scoringActions: [
          "Select the correct ratio for what is being measured",
          "Express ratios as percentages and interpret above/below 100%",
        ],
      },
      {
        id: "akma7-tp4",
        title: "Cost control and monitoring against targets",
        priority: "medium",
        examinerFocus:
          "Monitoring performance against targets and using variances/benchmarks to control costs.",
        typicalQuestionForms: [
          "Item on comparing actual performance to a target or benchmark",
          "Item interpreting a performance report for management",
        ],
        mustKnow: [
          "Benchmarking against internal or external standards",
          "Management by exception focuses on significant deviations",
          "Linking measures to the responsibility of managers (controllability)",
        ],
        scoringActions: [
          "Compare like with like (same basis) when monitoring",
          "Focus interpretation on controllable, significant items",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 68%+; ratio and productivity items are formula-driven, and interpretation items reward clear reasoning.",
      timeBudget:
        "Within the 2-hour MA CBE, about 1.2 minutes per mark; keep ratio calculations brisk and precise.",
      answerSequence: [
        "Answer ratio-calculation items first",
        "Tackle interpretation and non-financial items",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm each ratio uses the correct formula",
        "Check percentage ratios are interpreted relative to 100%",
      ],
    },
    studyNotes: [
      {
        id: "akma7-sn1",
        title: "Financial performance ratios",
        testPointIds: ["akma7-tp1"],
        explanation: [
          "This module turns cost information into performance measures. Financial ratios group into profitability, liquidity and efficiency. Profitability ratios — gross margin, operating margin, net margin and return on capital employed — show how well the organisation converts sales and capital into profit. Liquidity ratios — the current ratio and the quick (acid-test) ratio — show whether it can meet short-term obligations.",
          "Efficiency ratios measure how well resources are used: inventory days, receivables days and payables days measure the working-capital cycle, while asset turnover measures sales generated per unit of assets. Each ratio must use the correct numerator and denominator, so learn the formulas precisely.",
          "The real skill is interpretation: a rising receivables-days figure may signal slow collection or generous credit terms, while a falling current ratio may indicate liquidity pressure. Interpreting the direction and likely cause of a change is what the exam rewards.",
        ],
        keyRules: [
          "Profitability: margins and ROCE; Liquidity: current and quick ratios",
          "Efficiency: inventory/receivables/payables days, asset turnover",
          "Interpret the direction and cause of a change",
        ],
        workedProblem: {
          scenario:
            "A company has revenue of $800,000, cost of sales of $560,000, and operating profit of $120,000. Calculate the gross margin and operating margin.",
          steps: [
            "Gross profit = $800,000 − $560,000 = $240,000",
            "Gross margin = $240,000 / $800,000 = 30%",
            "Operating margin = $120,000 / $800,000 = 15%",
          ],
          conclusion:
            "Gross margin is 30% and operating margin is 15%; the 15-point gap reflects operating expenses consuming half the gross profit.",
          markingNotes: [
            "Gross margin of 30% correct",
            "Operating margin of 15% correct",
          ],
        },
      },
      {
        id: "akma7-sn2",
        title: "Non-financial performance indicators",
        testPointIds: ["akma7-tp2"],
        explanation: [
          "Financial measures alone are insufficient because they are backward-looking, can be manipulated, and ignore drivers of future success. Non-financial indicators fill the gap by measuring things such as product quality (defect rates), customer satisfaction and retention, on-time delivery, and employee productivity and morale.",
          "These indicators often predict future financial performance: falling customer satisfaction today foreshadows falling revenue tomorrow. The balanced scorecard idea — introduced more fully in APM — captures this by viewing performance through several perspectives rather than finance alone.",
          "The exam asks you to select an appropriate non-financial measure for a stated objective and to explain why relying only on financial measures is risky. Matching the indicator to the objective is the key skill.",
        ],
        keyRules: [
          "Non-financial indicators: quality, satisfaction, delivery, productivity",
          "They often predict future financial performance",
          "Match the indicator to the objective being measured",
        ],
      },
      {
        id: "akma7-sn3",
        title: "Productivity, efficiency and capacity ratios",
        testPointIds: ["akma7-tp3"],
        explanation: [
          "Control ratios link resources to output. The efficiency ratio compares the standard hours for the output achieved with the actual hours worked; above 100% means work was done faster than standard. The capacity ratio compares actual hours worked with budgeted hours, showing how much of the planned capacity was used. The activity (production volume) ratio compares standard hours for output with budgeted hours, showing output against plan.",
          "These three ratios are linked: the activity ratio equals the efficiency ratio multiplied by the capacity ratio. Understanding the relationship helps interpret why output differed from plan — because of how much capacity was used and how efficiently it was worked.",
          "Expressed as percentages, they are quick to compute and interpret, and the exam expects you to choose the right ratio for the question and read whether performance was above or below expectation.",
        ],
        keyRules: [
          "Efficiency = standard hours for output / actual hours",
          "Capacity = actual hours / budgeted hours",
          "Activity = efficiency × capacity",
        ],
      },
      {
        id: "akma7-sn4",
        title: "Cost control and monitoring",
        testPointIds: ["akma7-tp4"],
        explanation: [
          "Monitoring performance means comparing actual results with a relevant benchmark — a budget, a target, a prior period, or an external competitor (benchmarking). The comparison must be like-for-like; comparing figures on different bases (for example, before flexing a budget) gives misleading conclusions.",
          "Management by exception focuses attention on significant deviations from plan rather than every minor difference, making control efficient. Reports should highlight the variances that matter and prompt investigation and corrective action.",
          "Controllability matters: managers should be assessed on what they can influence. Charging a manager with uncontrollable costs demotivates and distorts the picture, so performance measures should reflect responsibility.",
        ],
        keyRules: [
          "Compare like with like against a relevant benchmark",
          "Use management by exception on significant deviations",
          "Assess managers on controllable items",
        ],
      },
    ],
    examPractice: [
      {
        id: "akma7-ep1",
        testPointIds: ["akma7-tp1"],
        style: "Objective test — ratio",
        question:
          "A company has current assets of $180,000 (including inventory of $60,000) and current liabilities of $100,000. Calculate the current ratio and the quick ratio.",
        answerPlan: [
          "Current ratio = current assets / current liabilities",
          "Quick ratio excludes inventory",
        ],
        modelAnswer:
          "Current ratio = $180,000 / $100,000 = 1.8:1. Quick ratio = ($180,000 − $60,000) / $100,000 = $120,000 / $100,000 = 1.2:1. Both exceed 1, suggesting short-term obligations are covered even excluding inventory.",
        markingGuide: [
          "1 mark: current ratio 1.8:1",
          "1 mark: quick ratio 1.2:1",
        ],
      },
      {
        id: "akma7-ep2",
        testPointIds: ["akma7-tp3"],
        style: "Objective test — control ratio",
        question:
          "Standard hours for actual output are 4,400; actual hours worked were 4,000. Calculate the efficiency ratio and interpret it.",
        answerPlan: [
          "Apply the efficiency ratio formula",
          "Interpret above/below 100%",
        ],
        modelAnswer:
          "Efficiency ratio = standard hours for output / actual hours = 4,400 / 4,000 = 110%. Being above 100% means the workforce produced more output than the hours worked would suggest at standard — they worked more efficiently than expected.",
        markingGuide: [
          "1 mark: 110% computed",
          "1 mark: correct interpretation (more efficient than standard)",
        ],
      },
      {
        id: "akma7-ep3",
        testPointIds: ["akma7-tp2"],
        style: "Objective test — non-financial",
        question:
          "A delivery company wants to measure service quality. Which ONE of the following is the most appropriate non-financial indicator? A) Net profit margin; B) On-time delivery percentage; C) Current ratio; D) Return on capital employed.",
        answerPlan: [
          "Identify which option is non-financial and relevant",
        ],
        modelAnswer:
          "The most appropriate indicator is B, on-time delivery percentage, which directly measures service quality. The other options are financial measures that do not capture delivery performance.",
        markingGuide: [
          "1 mark: on-time delivery percentage (B) selected",
          "1 mark: reasoning that it directly measures service quality",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m8": examDepth({
    testPoints: [
      {
        id: "akma8-tp1",
        title: "Cost-volume-profit (CVP) analysis",
        priority: "critical",
        examinerFocus:
          "Applying break-even, margin of safety and target-profit analysis using contribution, the decision core of this module.",
        typicalQuestionForms: [
          "Item computing break-even units/revenue or target-profit volume",
          "Item computing the margin of safety or the C/S ratio",
        ],
        mustKnow: [
          "Contribution per unit = selling price − variable cost per unit",
          "Break-even units = fixed costs / contribution per unit; break-even revenue = fixed costs / C/S ratio",
          "Margin of safety = budgeted − break-even; target-profit units = (fixed + target profit) / contribution per unit",
        ],
        scoringActions: [
          "Compute contribution per unit before any break-even work",
          "Distinguish units from revenue in the answer",
        ],
      },
      {
        id: "akma8-tp2",
        title: "Relevant costing for short-term decisions",
        priority: "critical",
        examinerFocus:
          "Identifying relevant costs and rejecting non-relevant costs for decisions such as special orders.",
        typicalQuestionForms: [
          "Item selecting relevant costs (future, incremental, cash) for a decision",
          "Special-order or make-or-buy item using relevant costs",
        ],
        mustKnow: [
          "Relevant cost = future, incremental cash flow; include opportunity cost",
          "Exclude sunk costs, committed costs and non-cash items (depreciation)",
          "Materials in regular use are valued at replacement cost",
        ],
        scoringActions: [
          "Cross out sunk and committed costs on the scenario",
          "Include opportunity cost of scarce resources",
        ],
      },
      {
        id: "akma8-tp3",
        title: "Limiting-factor analysis",
        priority: "high",
        examinerFocus:
          "Maximising contribution when one resource is scarce by ranking products.",
        typicalQuestionForms: [
          "Item ranking products by contribution per unit of the limiting factor",
          "Item determining the optimal production plan with one constraint",
        ],
        mustKnow: [
          "Rank by contribution per unit of the limiting factor, not per unit",
          "Allocate the scarce resource to the highest-ranked product first",
          "Identify the limiting factor from the scenario",
        ],
        scoringActions: [
          "Compute contribution per unit of the scarce resource for each product",
          "Allocate resource in rank order and state the plan",
        ],
      },
      {
        id: "akma8-tp4",
        title: "Make-or-buy and other short-term decisions",
        priority: "medium",
        examinerFocus:
          "Applying relevant costing to make-or-buy, discontinuation and acceptance decisions.",
        typicalQuestionForms: [
          "Make-or-buy item comparing internal relevant cost with the external price",
          "Item on whether to discontinue a product or accept an order",
        ],
        mustKnow: [
          "Make-or-buy compares the incremental cost of making with the buy-in price",
          "Discontinuation depends on lost contribution vs avoidable fixed costs",
          "Accept an order if incremental revenue exceeds incremental cost",
        ],
        scoringActions: [
          "Compare only the costs that change between the alternatives",
          "Keep unavoidable fixed costs out of the decision",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 70%+; decision-making items are formula- and logic-driven and highly scoreable with disciplined relevant-cost thinking.",
      timeBudget:
        "Within the 2-hour MA CBE, about 1.2 minutes per mark; give multi-step decision items up to ~2 minutes.",
      answerSequence: [
        "Answer CVP calculations first",
        "Work relevant-cost and limiting-factor items with annotated scenarios",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm only relevant (future, incremental, cash) costs are included",
        "Check ranking uses contribution per unit of the limiting factor",
      ],
    },
    studyNotes: [
      {
        id: "akma8-sn1",
        title: "Cost-volume-profit analysis",
        testPointIds: ["akma8-tp1"],
        explanation: [
          "CVP analysis examines how profit changes with volume, using contribution (selling price less variable cost). Break-even in units is fixed costs divided by contribution per unit — the point where total contribution exactly covers fixed costs. Break-even in revenue is fixed costs divided by the contribution-to-sales ratio.",
          "To reach a target profit, add the target to fixed costs before dividing by contribution per unit. The margin of safety measures how far budgeted sales can fall before reaching break-even, indicating risk. A breakeven chart or profit-volume chart illustrates these relationships graphically.",
          "CVP assumes costs and prices are constant and that everything produced is sold, which limits it to short-term analysis over the relevant range. Within those limits it is a powerful, frequently tested decision tool.",
        ],
        keyRules: [
          "Break-even units = fixed costs / contribution per unit",
          "Target-profit units = (fixed + target profit) / contribution per unit",
          "Margin of safety = budgeted sales − break-even sales",
        ],
        workedProblem: {
          scenario:
            "A product sells for $25 with variable cost $15 and fixed costs of $50,000. Budgeted sales are 7,000 units. Calculate break-even units and the margin of safety.",
          steps: [
            "Contribution per unit = $25 − $15 = $10",
            "Break-even = $50,000 / $10 = 5,000 units",
            "Margin of safety = 7,000 − 5,000 = 2,000 units",
          ],
          conclusion:
            "Break-even is 5,000 units and the margin of safety is 2,000 units (about 29% of budgeted sales), showing how far sales can fall before a loss.",
          markingNotes: [
            "Break-even of 5,000 units",
            "Margin of safety of 2,000 units",
          ],
        },
      },
      {
        id: "akma8-sn2",
        title: "Relevant costing",
        testPointIds: ["akma8-tp2"],
        explanation: [
          "Short-term decisions should be based only on relevant costs — future, incremental cash flows that differ between the options. Costs already incurred (sunk costs), unavoidable committed costs, and non-cash items such as depreciation are irrelevant and must be excluded. Including them is the most common error.",
          "Opportunity cost — the contribution forgone from the next best use of a scarce resource — is a relevant cost and must be included even though no cash changes hands for it. For materials, the relevant value depends on use: materials in regular use are valued at replacement cost (they must be replaced), while materials not otherwise needed are valued at their scrap or alternative-use value.",
          "The exam tests this by giving a scenario laden with irrelevant figures and asking for the relevant cost. Annotating the scenario to strike out sunk and committed costs makes the relevant amounts stand out.",
        ],
        keyRules: [
          "Relevant cost = future, incremental cash flow (include opportunity cost)",
          "Exclude sunk, committed and non-cash costs",
          "Materials in regular use are valued at replacement cost",
        ],
      },
      {
        id: "akma8-sn3",
        title: "Limiting-factor analysis",
        testPointIds: ["akma8-tp3"],
        explanation: [
          "When demand exceeds the capacity of one resource — labour hours, machine hours or material — that resource is the limiting factor, and the goal is to maximise total contribution from it. Ranking products by contribution per unit alone is wrong; you must rank by contribution per unit of the limiting factor, because that measures the value squeezed from each scarce unit.",
          "Having ranked the products, allocate the scarce resource to the highest-ranked product first until its demand is met, then the next, and so on until the resource is exhausted. This produces the optimal production plan and the maximum contribution.",
          "The technique assumes a single limiting factor; where two or more resources constrain output, linear programming (covered in PM) is needed. In MA, the single-constraint case is examined, and identifying the limiting factor correctly is the first step.",
        ],
        keyRules: [
          "Rank by contribution per unit of the limiting factor",
          "Allocate the scarce resource to the highest-ranked product first",
          "Single constraint only at this level",
        ],
      },
      {
        id: "akma8-sn4",
        title: "Make-or-buy and other decisions",
        testPointIds: ["akma8-tp4"],
        explanation: [
          "Relevant costing supports several classic decisions. In make-or-buy, compare the incremental cost of making a component in-house (the costs that would be saved by not making it) with the price of buying it from outside; buy if the external price is lower, considering any lost use of freed capacity.",
          "For discontinuation, a product should be kept if its contribution exceeds the fixed costs that would be avoided by dropping it; unavoidable (general) fixed costs are irrelevant because they continue either way. For a special order, accept it if the incremental revenue exceeds the incremental cost, provided it does not harm the regular business.",
          "In every case the principle is the same: compare only the cash flows that change between the alternatives, and ignore costs that are common to both. Keeping unavoidable fixed costs out of the decision is essential.",
        ],
        keyRules: [
          "Make-or-buy: compare incremental make cost with the buy-in price",
          "Discontinue only if lost contribution < avoidable fixed costs",
          "Accept an order if incremental revenue > incremental cost",
        ],
      },
    ],
    examPractice: [
      {
        id: "akma8-ep1",
        testPointIds: ["akma8-tp1"],
        style: "Objective test — break-even",
        question:
          "Fixed costs are $90,000, selling price is $30 and variable cost is $18. How many units must be sold to earn a target profit of $30,000?",
        answerPlan: [
          "Contribution per unit",
          "Target-profit units formula",
        ],
        modelAnswer:
          "Contribution per unit = $30 − $18 = $12. Target-profit units = (fixed costs + target profit) / contribution per unit = ($90,000 + $30,000) / $12 = $120,000 / $12 = 10,000 units.",
        markingGuide: [
          "1 mark: contribution per unit $12",
          "1 mark: 10,000 units",
        ],
      },
      {
        id: "akma8-ep2",
        testPointIds: ["akma8-tp3"],
        style: "Objective test — limiting factor",
        question:
          "Machine hours are scarce. Product P earns $40 contribution using 4 hours; product Q earns $27 using 3 hours. Which should be produced first and why?",
        answerPlan: [
          "Contribution per machine hour for each",
          "Rank",
        ],
        modelAnswer:
          "Contribution per machine hour: P = $40 / 4 = $10; Q = $27 / 3 = $9. P should be produced first because it earns $10 of contribution per scarce machine hour versus $9 for Q, even though the per-unit figures might suggest otherwise.",
        markingGuide: [
          "1 mark: contribution per hour computed for both",
          "1 mark: P ranked first",
        ],
      },
      {
        id: "akma8-ep3",
        testPointIds: ["akma8-tp2"],
        style: "Objective test — relevant cost",
        question:
          "A one-off job needs 200 hours of skilled labour. The workers are fully employed earning $12/hour on work generating $8/hour contribution. What is the relevant labour cost for the job?",
        answerPlan: [
          "Identify labour is scarce (fully employed)",
          "Add basic pay plus opportunity cost",
        ],
        modelAnswer:
          "Because the workers are fully employed, using them on the job means diverting them from work earning $8/hour contribution, so opportunity cost applies. Relevant cost per hour = $12 basic pay + $8 contribution forgone = $20. For 200 hours the relevant labour cost = 200 × $20 = $4,000.",
        markingGuide: [
          "1 mark: opportunity cost included (labour scarce)",
          "1 mark: $4,000 relevant cost",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m9": examDepth({
    testPoints: [
      {
        id: "akfa9-tp1",
        title: "The accounting equation and duality",
        priority: "critical",
        examinerFocus:
          "Applying the accounting equation and the dual effect of transactions, the foundation of this bookkeeping module.",
        typicalQuestionForms: [
          "Item on the effect of a transaction on assets, liabilities and capital",
          "Item testing that the equation remains in balance after a transaction",
        ],
        mustKnow: [
          "Assets = Liabilities + Capital",
          "Every transaction has a dual effect keeping the equation balanced",
          "Capital = opening capital + profit − drawings + new capital",
        ],
        scoringActions: [
          "Identify both sides of the transaction before answering",
          "Confirm the equation still balances",
        ],
      },
      {
        id: "akfa9-tp2",
        title: "Double-entry: debits and credits",
        priority: "critical",
        examinerFocus:
          "Recording transactions with correct debits and credits across the ledgers.",
        typicalQuestionForms: [
          "Item giving a transaction and asking for the correct double entry",
          "Item identifying the effect of a debit or credit on an account",
        ],
        mustKnow: [
          "Debit increases assets and expenses; credit increases liabilities, capital and income",
          "The mnemonic DEAD CLIC (Debits: Expenses, Assets, Drawings; Credits: Liabilities, Income, Capital)",
          "Each transaction is recorded with equal debits and credits",
        ],
        scoringActions: [
          "Write the two-sided entry before choosing an option",
          "Guard against reversed-entry distractors",
        ],
      },
      {
        id: "akfa9-tp3",
        title: "Books of prime entry and ledgers",
        priority: "high",
        examinerFocus:
          "Understanding the flow from source documents through books of prime entry to the ledgers.",
        typicalQuestionForms: [
          "Item identifying which book of prime entry records a transaction",
          "Item on the role of the sales/purchase ledgers and control accounts",
        ],
        mustKnow: [
          "Books of prime entry: sales/purchase day books, returns books, cash book, petty cash book, journal",
          "Nominal (general) ledger vs memorandum sales and purchase ledgers",
          "Control accounts mirror the totals of the subsidiary ledgers",
        ],
        scoringActions: [
          "Match the transaction to the correct book of prime entry",
          "Keep memorandum ledgers separate from the nominal ledger",
        ],
      },
      {
        id: "akfa9-tp4",
        title: "Cash book, discounts and sales tax entries",
        priority: "medium",
        examinerFocus:
          "Recording cash, discounts and sales tax (VAT) correctly in the double-entry system.",
        typicalQuestionForms: [
          "Item on the entries for cash received with a settlement discount",
          "Item on recording sales tax on a purchase or sale",
        ],
        mustKnow: [
          "Discounts allowed are an expense; discounts received are income",
          "Sales tax on sales is a liability (output); on purchases it is recoverable (input)",
          "The cash book is both a book of prime entry and part of the ledger",
        ],
        scoringActions: [
          "Separate the net, tax and gross amounts in tax entries",
          "Record discounts on the correct side (allowed vs received)",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 72%+; double-entry is mechanical and highly scoreable once debits and credits are automatic.",
      timeBudget:
        "Within the 2-hour FA CBE, about 1.2 minutes per mark; keep entry items quick and precise.",
      answerSequence: [
        "Answer double-entry and equation items first",
        "Work discount/tax and prime-entry items",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm each entry has equal debits and credits",
        "Check the equation still balances after each transaction",
      ],
    },
    studyNotes: [
      {
        id: "akfa9-sn1",
        title: "The accounting equation and dual effect",
        testPointIds: ["akfa9-tp1"],
        explanation: [
          "All financial accounting rests on the accounting equation: assets equal liabilities plus capital. Every transaction affects at least two items in a way that keeps the equation in balance — this is the dual effect. Buying inventory for cash swaps one asset for another; borrowing increases an asset and a liability equally.",
          "Capital links the equation to profit. Capital increases with profit and new investment by the owner and decreases with losses and drawings, so capital equals opening capital plus profit less drawings plus any new capital introduced. Understanding this lets you work back to missing figures.",
          "The exam frequently tests the effect of a transaction on the equation, so resolve each transaction into its two effects and confirm the equation stays balanced before selecting an answer.",
        ],
        keyRules: [
          "Assets = Liabilities + Capital",
          "Every transaction has a balancing dual effect",
          "Capital = opening + profit − drawings + new capital",
        ],
        workedProblem: {
          scenario:
            "A business starts with capital of $20,000 in cash. It buys inventory for $8,000 cash and takes a $5,000 bank loan. Show the effect on the accounting equation.",
          steps: [
            "Start: assets (cash $20,000) = capital $20,000",
            "Buy inventory: cash −$8,000, inventory +$8,000 (assets unchanged at $20,000)",
            "Take loan: cash +$5,000, liability +$5,000 → assets $25,000 = liabilities $5,000 + capital $20,000",
          ],
          conclusion:
            "After the transactions, assets of $25,000 equal liabilities of $5,000 plus capital of $20,000, demonstrating the equation stays balanced throughout.",
          markingNotes: [
            "Dual effect of each transaction shown",
            "Equation balances at $25,000 = $5,000 + $20,000",
          ],
        },
      },
      {
        id: "akfa9-sn2",
        title: "Debits and credits",
        testPointIds: ["akfa9-tp2"],
        explanation: [
          "Double-entry records each transaction with equal debits and credits. The rule: debit increases assets, expenses and drawings; credit increases liabilities, income and capital. The mnemonic DEAD CLIC (Debit: Expenses, Assets, Drawings; Credit: Liabilities, Income, Capital) helps recall which side increases each account.",
          "To record a transaction, identify the two accounts affected and the direction of each. 'Bought goods for cash' is debit purchases (expense up), credit cash (asset down); 'received cash from a credit customer' is debit cash (asset up), credit receivables (asset down).",
          "The examiner plants distractors with the entries reversed, so always determine the correct double entry yourself before scanning the options. Fluency here makes the whole of FA — and later reporting papers — far easier.",
        ],
        keyRules: [
          "Debit: expenses, assets, drawings; Credit: liabilities, income, capital",
          "Every entry has equal debits and credits",
          "Work out the entry before choosing an option",
        ],
      },
      {
        id: "akfa9-sn3",
        title: "Books of prime entry and ledgers",
        testPointIds: ["akfa9-tp3"],
        explanation: [
          "Transactions first enter the books of prime entry before being posted to the ledgers. The sales day book records credit sales, the purchase day book credit purchases, the returns books record returns, the cash book records receipts and payments, the petty cash book records small cash items, and the journal records adjustments and unusual items.",
          "From the prime entry books, totals (or individual items) are posted to the nominal (general) ledger, which contains all the accounts used in the financial statements. The sales and purchase ledgers are memorandum records of individual customer and supplier balances; they are not part of the double entry themselves.",
          "Control accounts in the nominal ledger — the receivables and payables control accounts — mirror the totals of the memorandum ledgers, providing a check that the detailed records agree with the nominal ledger. This structure keeps a large volume of transactions organised and controllable.",
        ],
        keyRules: [
          "Prime entry: day books, returns books, cash book, petty cash, journal",
          "Nominal ledger holds the double entry; sales/purchase ledgers are memorandum",
          "Control accounts mirror the subsidiary ledger totals",
        ],
      },
      {
        id: "akfa9-sn4",
        title: "Cash, discounts and sales tax",
        testPointIds: ["akfa9-tp4"],
        explanation: [
          "The cash book is unusual in being both a book of prime entry and part of the ledger (containing the cash and bank accounts). It records receipts and payments and often includes columns for discounts.",
          "Discounts are recorded on the correct side: a discount allowed to a customer for prompt payment is an expense to the business, while a discount received from a supplier is income. Trade discounts (deductions from list price) are not recorded separately — the net amount is used.",
          "Sales tax (VAT) is recorded by separating the net amount, the tax and the gross. On a credit sale, receivables (gross) are debited, sales (net) credited, and sales tax payable (a liability) credited; on a purchase, the recoverable input tax is debited to a sales tax account. Handling the net/tax/gross split correctly is a common exam requirement.",
        ],
        keyRules: [
          "Discounts allowed = expense; discounts received = income",
          "Sales tax: split net, tax and gross amounts",
          "The cash book is both prime entry and ledger",
        ],
      },
    ],
    examPractice: [
      {
        id: "akfa9-ep1",
        testPointIds: ["akfa9-tp2"],
        style: "Objective test — double entry",
        question:
          "A business buys office equipment for $3,000 on credit from a supplier. What is the correct double entry?",
        answerPlan: [
          "Identify the two accounts",
          "Determine debit and credit",
        ],
        modelAnswer:
          "The equipment is an asset acquired (debit) and the amount owed to the supplier is a liability created (credit). The double entry is: Debit non-current assets (equipment) $3,000; Credit payables $3,000.",
        markingGuide: [
          "1 mark: debit equipment $3,000",
          "1 mark: credit payables $3,000",
        ],
      },
      {
        id: "akfa9-ep2",
        testPointIds: ["akfa9-tp1"],
        style: "Objective test — accounting equation",
        question:
          "At the start of the year capital was $50,000. During the year profit was $18,000 and the owner withdrew $7,000. What is the closing capital?",
        answerPlan: [
          "Apply the capital formula",
        ],
        modelAnswer:
          "Closing capital = opening capital + profit − drawings = $50,000 + $18,000 − $7,000 = $61,000.",
        markingGuide: [
          "1 mark: correct formula applied",
          "1 mark: $61,000",
        ],
      },
      {
        id: "akfa9-ep3",
        testPointIds: ["akfa9-tp3"],
        style: "Objective test — prime entry",
        question:
          "In which book of prime entry would a credit sale to a customer first be recorded?",
        answerPlan: [
          "Match the transaction to the book",
        ],
        modelAnswer:
          "A credit sale is first recorded in the sales day book (sales journal), from which the total is posted to the sales account and the receivables control account, and the individual amount to the customer's account in the sales ledger.",
        markingGuide: [
          "1 mark: sales day book identified",
          "1 mark: reasoning about posting to the ledgers",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m10": examDepth({
    testPoints: [
      {
        id: "akfa10-tp1",
        title: "The trial balance",
        priority: "high",
        examinerFocus:
          "Preparing and using the trial balance and understanding what it does and does not prove.",
        typicalQuestionForms: [
          "Item on which balances are debits or credits in the trial balance",
          "Item on what a balanced trial balance does not guarantee",
        ],
        mustKnow: [
          "Assets, expenses and drawings are debit balances; liabilities, income and capital are credit balances",
          "A balanced trial balance does not prove the absence of all errors",
          "The trial balance is the starting point for the financial statements",
        ],
        scoringActions: [
          "Classify each balance as debit or credit correctly",
          "Recall the errors a trial balance cannot detect",
        ],
      },
      {
        id: "akfa10-tp2",
        title: "Period-end adjustments (accruals, prepayments, depreciation, allowances)",
        priority: "critical",
        examinerFocus:
          "Applying the accruals concept and computing depreciation and receivables allowances, the adjustment core of this module.",
        typicalQuestionForms: [
          "Item computing the profit-or-loss charge after an accrual/prepayment adjustment",
          "Item computing depreciation or the movement in the allowance for receivables",
        ],
        mustKnow: [
          "Accrual = expense incurred not yet paid (liability); prepayment = paid in advance (asset)",
          "Straight-line depreciation = (cost − residual)/useful life; reducing balance = rate × carrying amount",
          "Only the movement in the receivables allowance hits profit or loss",
        ],
        scoringActions: [
          "Time-apportion accruals and prepayments",
          "Charge only the increase/decrease in the allowance",
        ],
      },
      {
        id: "akfa10-tp3",
        title: "Control account and bank reconciliations",
        priority: "high",
        examinerFocus:
          "Reconciling receivables/payables control accounts to the ledgers and the cash book to the bank statement.",
        typicalQuestionForms: [
          "Item reconciling a control account to the list of balances",
          "Item preparing a bank reconciliation with timing differences",
        ],
        mustKnow: [
          "Control account total should equal the sum of subsidiary ledger balances",
          "Adjust the cash book for bank charges/interest before reconciling",
          "Timing differences: unpresented cheques and outstanding lodgements",
        ],
        scoringActions: [
          "Adjust the cash book first, then reconcile timing differences",
          "Identify whether an item belongs in the control account or the list",
        ],
      },
      {
        id: "akfa10-tp4",
        title: "Correction of errors and the suspense account",
        priority: "critical",
        examinerFocus:
          "Distinguishing errors that do and do not affect the trial balance and clearing the suspense account.",
        typicalQuestionForms: [
          "Item identifying which error caused a suspense balance",
          "Item on the journal entries to correct an error",
        ],
        mustKnow: [
          "Errors not shown by the trial balance: omission, commission, principle, original entry, compensating, reversal",
          "Only one-sided/unequal errors create a suspense balance",
          "Correct errors via the journal; clear the suspense account",
        ],
        scoringActions: [
          "Decide first whether the error affects the trial balance",
          "Only route trial-balance-affecting errors through suspense",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 70%+; adjustments and reconciliations are process-driven and reliably scored with careful workings.",
      timeBudget:
        "Within the 2-hour FA CBE, about 1.2 minutes per mark; give adjustment and reconciliation items up to ~2 minutes.",
      answerSequence: [
        "Answer trial-balance classification and quick adjustments first",
        "Work reconciliations and error corrections with T-account workings",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm adjustments are time-apportioned and only the allowance movement is charged",
        "Check whether each error affects the trial balance before using suspense",
      ],
    },
    studyNotes: [
      {
        id: "akfa10-sn1",
        title: "The trial balance and its limits",
        testPointIds: ["akfa10-tp1"],
        explanation: [
          "The trial balance lists all the ledger balances with debits in one column and credits in the other; if double entry has been performed correctly, the two columns should agree. Assets, expenses and drawings are debit balances; liabilities, income and capital are credit balances. It is the starting point for preparing the financial statements.",
          "Crucially, a balanced trial balance does not prove the books are error-free. Several types of error leave the trial balance balanced because both sides are affected equally — errors of omission, commission, principle, original entry, compensating errors and complete reversals. The trial balance only detects errors that make the two columns unequal.",
          "Understanding this limitation is regularly tested and leads directly into the correction-of-errors topic, where you decide whether an error affects the trial balance and therefore the suspense account.",
        ],
        keyRules: [
          "Debit balances: assets, expenses, drawings; credit balances: liabilities, income, capital",
          "A balanced trial balance does not prove the absence of all errors",
          "The trial balance is the basis for the financial statements",
        ],
      },
      {
        id: "akfa10-sn2",
        title: "Period-end adjustments",
        testPointIds: ["akfa10-tp2"],
        explanation: [
          "The accruals concept requires expenses and income to be recognised when incurred or earned, not when cash moves. Accruals add an expense and a liability for amounts owed but unpaid at the year end; prepayments remove an expense and create an asset for amounts paid in advance. Both must be time-apportioned to the reporting period.",
          "Depreciation spreads the cost of a non-current asset over its useful life. The straight-line method charges (cost less residual value) divided by useful life each year; the reducing-balance method applies a fixed percentage to the falling carrying amount, giving higher charges early on. On disposal, proceeds are compared with carrying amount to record a profit or loss.",
          "Receivables require an allowance for amounts unlikely to be collected. Specific irrecoverable debts are written off directly, and a general allowance is set on the remainder. Only the movement in the allowance from one year to the next is charged (or credited) to profit or loss — a frequent exam trap is charging the full closing allowance.",
        ],
        keyRules: [
          "Accrual = liability for expense incurred; prepayment = asset for expense paid early",
          "Straight-line depreciation = (cost − residual)/useful life",
          "Charge only the movement in the receivables allowance",
        ],
        workedProblem: {
          scenario:
            "Rent of $24,000 was paid on 1 October for the year to 30 September. The year end is 31 December. Calculate the rent expense and any prepayment/accrual.",
          steps: [
            "Rent relates to 12 months from 1 October; 3 months (Oct–Dec) fall in this year",
            "This year's rent expense = 3/12 × $24,000 = $6,000",
            "Prepayment at 31 December = 9/12 × $24,000 = $18,000 (an asset carried forward)",
          ],
          conclusion:
            "Rent expense for the year is $6,000 and a prepayment of $18,000 is carried forward, correctly matching the cost to the period it relates to.",
          markingNotes: [
            "Correct time apportionment of the rent",
            "Prepayment of $18,000 recognised",
          ],
        },
      },
      {
        id: "akfa10-sn3",
        title: "Control account and bank reconciliations",
        testPointIds: ["akfa10-tp3"],
        explanation: [
          "Reconciliations check the accuracy of the records. The receivables (or payables) control account total should equal the sum of the individual balances in the sales (or purchase) ledger; a difference points to an error in either the control account or the list of balances, which must be located and corrected.",
          "The bank reconciliation compares the cash book with the bank statement. First, adjust the cash book for items the business did not previously know about — bank charges, interest, direct debits and standing orders, and any dishonoured cheques. Then reconcile the remaining timing differences: unpresented cheques (written but not yet cleared) and outstanding lodgements (paid in but not yet credited).",
          "The order matters: adjust the cash book first to arrive at the corrected balance, then explain the difference to the bank statement using the timing differences. Deciding whether an item belongs in the cash-book adjustment or the timing reconciliation is the key skill.",
        ],
        keyRules: [
          "Control account total = sum of subsidiary ledger balances",
          "Adjust the cash book first, then reconcile timing differences",
          "Timing differences: unpresented cheques and outstanding lodgements",
        ],
      },
      {
        id: "akfa10-sn4",
        title: "Correction of errors and the suspense account",
        testPointIds: ["akfa10-tp4"],
        explanation: [
          "Errors are corrected through the journal. The first question is always whether the error affected the trial balance. Six types do not: omission (transaction left out entirely), commission (right type of account, wrong account), principle (wrong type of account), original entry (wrong amount entered on both sides), compensating (two errors cancelling), and complete reversal (debits and credits swapped). These leave the trial balance balanced.",
          "Only one-sided errors or unequal postings unbalance the trial balance, and the difference is placed in a suspense account until the error is found and corrected. When the correcting entry is made, the suspense account is cleared.",
          "The exam tests whether you can classify errors and decide which involve the suspense account. The discipline is: identify the error type, decide if it affected the trial balance, and only route trial-balance-affecting errors through suspense.",
        ],
        keyRules: [
          "Six error types leave the trial balance balanced",
          "Only one-sided/unequal errors create a suspense balance",
          "Correct via the journal and clear the suspense account",
        ],
      },
    ],
    examPractice: [
      {
        id: "akfa10-ep1",
        testPointIds: ["akfa10-tp2"],
        style: "Objective test — allowance",
        question:
          "Receivables are $80,000 before a $3,000 write-off. A 5% allowance is required on the remainder; the opening allowance was $2,500. What is the total charge to profit or loss?",
        answerPlan: [
          "Process the write-off",
          "Compute the required allowance",
          "Charge only the movement",
        ],
        modelAnswer:
          "After the $3,000 write-off, receivables are $77,000. Required allowance = 5% × $77,000 = $3,850. The movement is $3,850 − $2,500 = $1,350 increase. Total charge to profit or loss = $3,000 write-off + $1,350 allowance increase = $4,350.",
        markingGuide: [
          "1 mark: allowance movement of $1,350 (not the full $3,850)",
          "1 mark: total charge of $4,350",
        ],
      },
      {
        id: "akfa10-ep2",
        testPointIds: ["akfa10-tp4"],
        style: "Objective test — errors",
        question:
          "A purchase of machinery was recorded as a debit to repairs expense. Which type of error is this, and does it affect the trial balance?",
        answerPlan: [
          "Classify the error type",
          "State the trial-balance effect",
        ],
        modelAnswer:
          "Recording a capital item (machinery) as a revenue expense (repairs) is an error of principle. Because both a debit and a credit of the correct amount were still made, the trial balance still balances, so no suspense account is involved — but profit and assets are misstated.",
        markingGuide: [
          "1 mark: error of principle identified",
          "1 mark: does not affect the trial balance",
        ],
      },
      {
        id: "akfa10-ep3",
        testPointIds: ["akfa10-tp3"],
        style: "Objective test — bank reconciliation",
        question:
          "The cash book shows a balance of $4,200. Bank charges of $150 have not been entered, and cheques totalling $600 are unpresented. What is the corrected cash book balance and how are the unpresented cheques treated?",
        answerPlan: [
          "Adjust cash book for charges",
          "Treat unpresented cheques as a timing difference",
        ],
        modelAnswer:
          "Adjust the cash book for the $150 bank charges: corrected cash book balance = $4,200 − $150 = $4,050. The unpresented cheques of $600 are a timing difference and are not entered in the cash book; they are used to reconcile the corrected cash book balance to the bank statement balance.",
        markingGuide: [
          "1 mark: corrected cash book balance of $4,050",
          "1 mark: unpresented cheques treated as a timing difference (not a cash-book adjustment)",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m11": examDepth({
    testPoints: [
      {
        id: "akfa11-tp1",
        title: "Statement of profit or loss preparation",
        priority: "critical",
        examinerFocus:
          "Preparing the statement of profit or loss after adjustments, the core output of this module.",
        typicalQuestionForms: [
          "Item computing gross profit or profit for the year after adjustments",
          "Item on the treatment of cost of sales, including inventory movements",
        ],
        mustKnow: [
          "Cost of sales = opening inventory + purchases − closing inventory",
          "Gross profit = revenue − cost of sales; profit = gross profit + other income − expenses",
          "Adjustments (accruals, prepayments, depreciation, irrecoverable debts) feed the statement",
        ],
        scoringActions: [
          "Process all adjustments before completing the statement",
          "Compute cost of sales with the inventory formula",
        ],
      },
      {
        id: "akfa11-tp2",
        title: "Statement of financial position preparation",
        priority: "critical",
        examinerFocus:
          "Preparing the statement of financial position split into non-current/current items and equity.",
        typicalQuestionForms: [
          "Item computing net assets or a section of the statement of financial position",
          "Item on the presentation of assets, liabilities and capital/equity",
        ],
        mustKnow: [
          "Split into non-current and current assets and liabilities (IAS 1)",
          "Non-current assets shown at carrying amount (cost − accumulated depreciation)",
          "For a sole trader: capital = opening + profit − drawings",
        ],
        scoringActions: [
          "Carry adjustments through to the statement of financial position",
          "Present items in the correct current/non-current classification",
        ],
      },
      {
        id: "akfa11-tp3",
        title: "Company-specific items: share capital, reserves and tax",
        priority: "high",
        examinerFocus:
          "Accounting for company items — share issues, reserves, dividends and taxation — that differ from a sole trader.",
        typicalQuestionForms: [
          "Item on share premium, bonus/rights issues, or dividends",
          "Item on the retained earnings movement or the tax charge",
        ],
        mustKnow: [
          "Share premium arises on issue above nominal value; bonus issue uses reserves, rights issue raises cash",
          "Retained earnings = opening + profit − dividends",
          "Dividends are an appropriation, not an expense; tax is charged in profit or loss",
        ],
        scoringActions: [
          "Keep share capital, share premium and retained earnings separate",
          "Treat dividends as a reduction of retained earnings, not an expense",
        ],
      },
      {
        id: "akfa11-tp4",
        title: "Incomplete records and IAS 1 presentation",
        priority: "medium",
        examinerFocus:
          "Deriving missing figures from incomplete records and presenting statements per IAS 1.",
        typicalQuestionForms: [
          "Item deriving a missing figure using margins/mark-ups or the accounting equation",
          "Item on IAS 1 presentation requirements",
        ],
        mustKnow: [
          "Use gross margin/mark-up to derive missing sales, purchases or cost of sales",
          "Use control accounts to derive missing cash, sales or purchases",
          "IAS 1 requires a structured, classified presentation",
        ],
        scoringActions: [
          "Choose margin (on sales) vs mark-up (on cost) correctly",
          "Reconstruct T-accounts to find the missing figure",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 68%+; preparation items reward methodical processing of adjustments through both statements.",
      timeBudget:
        "Within the 2-hour FA CBE, about 1.2 minutes per mark; give preparation and incomplete-records items up to ~2.5 minutes.",
      answerSequence: [
        "Process adjustments, then build the profit or loss figures",
        "Carry figures through to the statement of financial position",
        "Return to flagged company/incomplete-records items and answer all",
      ],
      qualityChecks: [
        "Confirm cost of sales uses the inventory formula",
        "Check equity components are separated and dividends are not expensed",
      ],
    },
    studyNotes: [
      {
        id: "akfa11-sn1",
        title: "Preparing the statement of profit or loss",
        testPointIds: ["akfa11-tp1"],
        explanation: [
          "The statement of profit or loss is the culmination of the bookkeeping process. Revenue less cost of sales gives gross profit, and cost of sales is computed as opening inventory plus purchases less closing inventory. Other income is added and expenses (adjusted for accruals, prepayments, depreciation and irrecoverable debts) are deducted to arrive at profit for the year.",
          "Adjustments must be processed before the statement is finalised, because they change the expense figures. An accrual increases an expense, a prepayment reduces it, depreciation adds an expense, and the irrecoverable-debts and allowance charges reduce profit. Missing any adjustment gives the wrong profit.",
          "The exam commonly gives a trial balance plus a list of adjustments and asks for a figure such as gross profit or profit for the year, testing whether you can flow the adjustments through correctly.",
        ],
        keyRules: [
          "Cost of sales = opening inventory + purchases − closing inventory",
          "Gross profit = revenue − cost of sales",
          "Process all adjustments before finalising profit",
        ],
        workedProblem: {
          scenario:
            "Revenue is $500,000, opening inventory $40,000, purchases $300,000, closing inventory $50,000. Expenses are $90,000 before an accrual of $5,000. Calculate gross profit and profit for the year.",
          steps: [
            "Cost of sales = $40,000 + $300,000 − $50,000 = $290,000",
            "Gross profit = $500,000 − $290,000 = $210,000",
            "Expenses = $90,000 + $5,000 accrual = $95,000; profit = $210,000 − $95,000 = $115,000",
          ],
          conclusion:
            "Gross profit is $210,000 and profit for the year is $115,000 after adjusting expenses for the accrual.",
          markingNotes: [
            "Cost of sales and gross profit correct",
            "Accrual added to expenses giving $115,000 profit",
          ],
        },
      },
      {
        id: "akfa11-sn2",
        title: "Preparing the statement of financial position",
        testPointIds: ["akfa11-tp2"],
        explanation: [
          "The statement of financial position presents assets, liabilities and equity at the year end, classified under IAS 1 into non-current and current. Non-current assets appear at their carrying amount (cost less accumulated depreciation); current assets include inventory, receivables (net of allowance) and cash. Current liabilities include payables, accruals and short-term borrowings; non-current liabilities include long-term loans.",
          "For a sole trader, the capital section shows opening capital plus profit for the year less drawings. The statement must balance: total assets equal total liabilities plus capital, which is the accounting equation restated.",
          "Every adjustment made in the statement of profit or loss has a matching effect here — an accrual creates a current liability, a prepayment a current asset, depreciation reduces the asset's carrying amount, and the allowance reduces receivables. Carrying the adjustments through consistently is essential.",
        ],
        keyRules: [
          "Classify into non-current and current (IAS 1)",
          "Non-current assets at carrying amount (cost − accumulated depreciation)",
          "Sole-trader capital = opening + profit − drawings",
        ],
      },
      {
        id: "akfa11-sn3",
        title: "Company-specific items",
        testPointIds: ["akfa11-tp3"],
        explanation: [
          "Companies differ from sole traders in their equity and in taxation. Equity comprises share capital at nominal value, share premium (the excess of issue price over nominal value), and retained earnings. A bonus issue capitalises reserves and raises no cash, whereas a rights issue offers existing shareholders new shares (usually at a discount to market price) and does raise cash.",
          "Retained earnings equal opening retained earnings plus profit for the year less dividends. Dividends are an appropriation of profit, not an expense, so they reduce retained earnings rather than appearing in the statement of profit or loss. Only dividends declared/paid are recognised; proposed dividends are disclosed.",
          "Taxation is charged as an expense in the statement of profit or loss with the amount owed shown as a current liability. Recognising these company items correctly — and keeping the equity components separate — is the main way this topic differs from sole-trader accounting.",
        ],
        keyRules: [
          "Share premium = issue price − nominal value; bonus issue uses reserves; rights issue raises cash",
          "Retained earnings = opening + profit − dividends",
          "Dividends are an appropriation, not an expense",
        ],
      },
      {
        id: "akfa11-sn4",
        title: "Incomplete records and IAS 1",
        testPointIds: ["akfa11-tp4"],
        explanation: [
          "Sometimes records are incomplete and figures must be derived. Margins and mark-ups are key tools: a margin is a percentage of sales, a mark-up a percentage of cost. Given one figure and the margin or mark-up, you can derive the others — for example, if cost of sales is known and the mark-up is 25%, sales are cost of sales times 1.25.",
          "Control-account reconstruction derives missing cash, sales or purchases: building a receivables or payables T-account with the known opening balance, receipts/payments and closing balance lets you find the missing credit sales or purchases. The accounting equation similarly derives missing capital or profit.",
          "Presentation follows IAS 1, which requires a structured, classified format with comparatives. The exam tests both the derivation of missing figures and awareness of proper presentation, so practise reconstructing accounts and applying margins and mark-ups accurately.",
        ],
        keyRules: [
          "Margin is on sales; mark-up is on cost",
          "Reconstruct control accounts to find missing figures",
          "IAS 1 requires a classified, structured presentation",
        ],
      },
    ],
    examPractice: [
      {
        id: "akfa11-ep1",
        testPointIds: ["akfa11-tp3"],
        style: "Objective test — share issue",
        question:
          "A company issues 100,000 ordinary shares of $1 nominal value at $1.50 each for cash. Show the effect on share capital and share premium.",
        answerPlan: [
          "Split proceeds into nominal and premium",
          "State the entries",
        ],
        modelAnswer:
          "Total proceeds = 100,000 × $1.50 = $150,000. Share capital increases by the nominal value: 100,000 × $1 = $100,000. Share premium increases by the excess: 100,000 × $0.50 = $50,000. The double entry is Debit cash $150,000; Credit share capital $100,000 and share premium $50,000.",
        markingGuide: [
          "1 mark: share capital increase of $100,000",
          "1 mark: share premium of $50,000",
        ],
      },
      {
        id: "akfa11-ep2",
        testPointIds: ["akfa11-tp4"],
        style: "Objective test — mark-up",
        question:
          "A trader marks up all goods by 25% on cost. Cost of sales for the year was $240,000. What was revenue?",
        answerPlan: [
          "Apply the mark-up to cost",
        ],
        modelAnswer:
          "A 25% mark-up on cost means revenue = cost of sales × 1.25 = $240,000 × 1.25 = $300,000.",
        markingGuide: [
          "1 mark: mark-up applied to cost (not margin on sales)",
          "1 mark: revenue of $300,000",
        ],
      },
      {
        id: "akfa11-ep3",
        testPointIds: ["akfa11-tp1", "akfa11-tp2"],
        style: "Objective test — adjustment effect",
        question:
          "Depreciation of $12,000 for the year has not yet been recorded. State its effect on profit for the year and on the statement of financial position.",
        answerPlan: [
          "Effect on profit",
          "Effect on the statement of financial position",
        ],
        modelAnswer:
          "Recording the depreciation adds a $12,000 expense, reducing profit for the year by $12,000. In the statement of financial position, accumulated depreciation increases by $12,000, reducing the carrying amount of non-current assets by $12,000; equity (retained earnings) falls by the same $12,000, so the statement still balances.",
        markingGuide: [
          "1 mark: profit reduced by $12,000",
          "1 mark: carrying amount of assets and equity each reduced by $12,000",
        ],
      },
    ],
  }),

  "acca-applied-knowledge-m12": examDepth({
    testPoints: [
      {
        id: "akfa12-tp1",
        title: "Profitability ratios and interpretation",
        priority: "critical",
        examinerFocus:
          "Calculating and interpreting profitability ratios, the analytical core of this module.",
        typicalQuestionForms: [
          "Item computing gross/net margin or ROCE",
          "Item interpreting a change in a profitability ratio",
        ],
        mustKnow: [
          "Gross margin = gross profit / revenue; net margin = profit / revenue",
          "ROCE = operating profit / capital employed",
          "Interpret changes by linking to events (price, cost, volume changes)",
        ],
        scoringActions: [
          "Use the correct profit figure for each margin",
          "Explain the likely cause of a change",
        ],
      },
      {
        id: "akfa12-tp2",
        title: "Liquidity and efficiency (working capital) ratios",
        priority: "critical",
        examinerFocus:
          "Calculating liquidity and working-capital ratios and interpreting them for short-term financial health.",
        typicalQuestionForms: [
          "Item computing the current/quick ratio or working-capital days",
          "Item interpreting a liquidity or efficiency change",
        ],
        mustKnow: [
          "Current ratio = current assets / current liabilities; quick ratio excludes inventory",
          "Inventory days, receivables days and payables days",
          "The cash operating cycle = inventory + receivables − payables days",
        ],
        scoringActions: [
          "Select the right numerator/denominator for each ratio",
          "Interpret whether liquidity is improving or deteriorating",
        ],
      },
      {
        id: "akfa12-tp3",
        title: "Gearing and investor ratios",
        priority: "high",
        examinerFocus:
          "Calculating gearing and interest cover and basic investor ratios and interpreting risk.",
        typicalQuestionForms: [
          "Item computing gearing or interest cover",
          "Item on a basic investor ratio (e.g. EPS, dividend cover)",
        ],
        mustKnow: [
          "Gearing = debt / (debt + equity) or debt / equity; interest cover = operating profit / interest",
          "Higher gearing means higher financial risk",
          "Basic investor ratios: earnings per share and dividend cover",
        ],
        scoringActions: [
          "State the gearing basis used (net debt vs equity)",
          "Link higher gearing/lower interest cover to higher risk",
        ],
      },
      {
        id: "akfa12-tp4",
        title: "Limitations of ratio analysis and simple consolidation",
        priority: "medium",
        examinerFocus:
          "Recognising the limitations of ratio analysis and performing a basic consolidation as introduced in FA.",
        typicalQuestionForms: [
          "Item on the limitations of ratio analysis",
          "Item computing goodwill or a simple group figure",
        ],
        mustKnow: [
          "Limitations: different policies, historical data, price-level changes, need for context",
          "Goodwill = consideration + NCI − fair value of net assets acquired",
          "Group figures combine parent and subsidiary at an introductory level",
        ],
        scoringActions: [
          "State a relevant limitation when interpreting ratios",
          "Build the goodwill calculation line by line",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 68%+; ratio calculations are formula-driven, and interpretation items reward concise, cause-linked reasoning.",
      timeBudget:
        "Within the 2-hour FA CBE, about 1.2 minutes per mark; keep ratio calculations brisk.",
      answerSequence: [
        "Answer ratio-calculation items first",
        "Tackle interpretation, limitation and consolidation items",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm each ratio uses the correct formula",
        "Check interpretations are tied to plausible causes",
      ],
    },
    studyNotes: [
      {
        id: "akfa12-sn1",
        title: "Profitability analysis",
        testPointIds: ["akfa12-tp1"],
        explanation: [
          "Interpretation turns the financial statements into insight. Profitability ratios show how well the business converts sales and capital into profit. Gross margin (gross profit over revenue) reflects pricing and direct cost control; net (operating) margin reflects overall cost control; and return on capital employed (operating profit over capital employed) measures how efficiently capital generates profit.",
          "The value of a ratio lies in comparison — over time, against budget, or against competitors — and in interpretation. A falling gross margin might indicate price competition or rising input costs, while a rising ROCE suggests better use of capital. Numbers without interpretation earn few marks.",
          "This introductory analysis prepares students for the deeper interpretation required in FR and SBR, so the habit of linking every ratio change to a plausible cause should be built here.",
        ],
        keyRules: [
          "Gross margin = gross profit / revenue; net margin = profit / revenue",
          "ROCE = operating profit / capital employed",
          "Interpret by comparison and by linking to causes",
        ],
        workedProblem: {
          scenario:
            "A company reports operating profit of $90,000 and capital employed of $600,000 this year, versus $80,000 and $500,000 last year. Calculate ROCE for both years and comment.",
          steps: [
            "This year ROCE = $90,000 / $600,000 = 15%",
            "Last year ROCE = $80,000 / $500,000 = 16%",
            "Compare: ROCE fell from 16% to 15% despite higher profit, because capital grew faster than profit",
          ],
          conclusion:
            "ROCE fell from 16% to 15%; although profit rose, the larger capital base was not yet generating a proportionate return, suggesting recent investment has not yet paid off.",
          markingNotes: [
            "ROCE of 15% and 16% correct",
            "Interpretation linking the fall to faster capital growth",
          ],
        },
      },
      {
        id: "akfa12-sn2",
        title: "Liquidity and working-capital analysis",
        testPointIds: ["akfa12-tp2"],
        explanation: [
          "Liquidity ratios assess whether the business can meet short-term obligations. The current ratio (current assets over current liabilities) and the quick ratio (excluding inventory, which is less liquid) indicate short-term financial health. There is no universal ideal figure; the appropriate level depends on the industry.",
          "Efficiency ratios measure how well working capital is managed. Inventory days show how long stock is held, receivables days how long customers take to pay, and payables days how long the business takes to pay suppliers. Together they form the cash operating cycle — inventory days plus receivables days minus payables days — the time cash is tied up in operations.",
          "Interpretation focuses on trends: lengthening receivables days may signal collection problems, a falling current ratio may indicate liquidity strain, and a shortening cash cycle usually improves cash flow. Linking the ratio to the underlying operational cause is what the exam rewards.",
        ],
        keyRules: [
          "Current ratio = current assets / current liabilities; quick ratio excludes inventory",
          "Cash operating cycle = inventory + receivables − payables days",
          "Interpret trends, not absolute figures alone",
        ],
      },
      {
        id: "akfa12-sn3",
        title: "Gearing and investor ratios",
        testPointIds: ["akfa12-tp3"],
        explanation: [
          "Gearing measures financial risk — the proportion of the business financed by debt rather than equity. It can be expressed as debt over debt-plus-equity or as debt over equity, and interest cover (operating profit over interest) shows how comfortably profit covers interest payments. High gearing and low interest cover mean higher financial risk, because interest must be paid regardless of profit.",
          "Investor ratios interest shareholders. Earnings per share (profit attributable to ordinary shareholders divided by the number of shares) measures the return per share, and dividend cover (earnings divided by dividends) shows how many times the dividend could have been paid, indicating its sustainability.",
          "The exam expects you to compute these and interpret the risk and return picture — for example, that rising gearing increases returns to shareholders in good times but raises the risk of financial distress in bad times.",
        ],
        keyRules: [
          "Gearing = debt / (debt + equity) or debt / equity",
          "Interest cover = operating profit / interest",
          "Higher gearing and lower interest cover mean higher risk",
        ],
      },
      {
        id: "akfa12-sn4",
        title: "Limitations and simple consolidation",
        testPointIds: ["akfa12-tp4"],
        explanation: [
          "Ratio analysis has real limitations that candidates should state. Ratios rely on historical accounting figures that may be affected by different accounting policies, price-level changes and one-off items, and a single ratio without context (industry norms, trends, the size of the business) can mislead. Ratios raise questions rather than giving final answers.",
          "FA also introduces a basic consolidation. Goodwill on acquisition equals the consideration transferred plus the non-controlling interest less the fair value of the subsidiary's net assets acquired, and simple group figures combine the parent and subsidiary. This is developed fully in FR, but the mechanics start here.",
          "The exam may combine interpretation with awareness of limitations, or test a single goodwill or group figure, so both the analytical judgement and the introductory consolidation mechanics need to be secure.",
        ],
        keyRules: [
          "Limitations: different policies, historical data, price changes, need for context",
          "Goodwill = consideration + NCI − fair value of net assets acquired",
          "Simple group figures combine parent and subsidiary",
        ],
      },
    ],
    examPractice: [
      {
        id: "akfa12-ep1",
        testPointIds: ["akfa12-tp2"],
        style: "Objective test — working capital",
        question:
          "Inventory days are 50, receivables days 40 and payables days 35. Calculate the cash operating cycle and state what a shorter cycle would indicate.",
        answerPlan: [
          "Apply the cash operating cycle formula",
          "Interpret",
        ],
        modelAnswer:
          "Cash operating cycle = inventory days + receivables days − payables days = 50 + 40 − 35 = 55 days. A shorter cycle would indicate cash is tied up for less time in working capital, improving liquidity and cash flow.",
        markingGuide: [
          "1 mark: 55 days computed",
          "1 mark: correct interpretation of a shorter cycle",
        ],
      },
      {
        id: "akfa12-ep2",
        testPointIds: ["akfa12-tp3"],
        style: "Objective test — gearing",
        question:
          "A company has debt of $400,000 and equity of $600,000, with operating profit of $150,000 and interest of $30,000. Calculate gearing (debt/(debt+equity)) and interest cover.",
        answerPlan: [
          "Compute gearing",
          "Compute interest cover",
        ],
        modelAnswer:
          "Gearing = $400,000 / ($400,000 + $600,000) = 40%. Interest cover = operating profit / interest = $150,000 / $30,000 = 5 times. Gearing of 40% is moderate and interest cover of 5 times indicates profit comfortably covers interest.",
        markingGuide: [
          "1 mark: gearing of 40%",
          "1 mark: interest cover of 5 times",
        ],
      },
      {
        id: "akfa12-ep3",
        testPointIds: ["akfa12-tp4"],
        style: "Objective test — limitations",
        question:
          "State TWO limitations of relying on ratio analysis to compare two companies.",
        answerPlan: [
          "Give two valid limitations",
        ],
        modelAnswer:
          "First, the companies may use different accounting policies (for example, different depreciation methods or inventory valuation), making their ratios not directly comparable. Second, ratios are based on historical figures that may be distorted by price-level changes or one-off events and do not reflect qualitative factors, so they should be read alongside other information.",
        markingGuide: [
          "1 mark: different accounting policies limitation",
          "1 mark: historical/one-off/qualitative limitation",
        ],
      },
    ],
  }),

  /* ===================================================================== */
  /* Applied Skills stage modules                                           */
  /* ===================================================================== */

  "acca-applied-skills-m1": examDepth({
    testPoints: [
      {
        id: "aslw1-tp1",
        title: "Sources of law and the court system",
        priority: "high",
        examinerFocus:
          "Recall of the sources of English law and the court hierarchy, and how precedent operates — the legal-systems focus of this module.",
        typicalQuestionForms: [
          "Item on which court binds another or on the ratio/obiter distinction",
          "Item on the sources of law (legislation, case law, EU-derived, custom)",
        ],
        mustKnow: [
          "Court hierarchy and binding precedent; ratio decidendi binds, obiter persuades",
          "Sources of law: legislation (statute, delegated), case law/common law, and equity",
          "Criminal vs civil law: purpose, parties, standard of proof",
        ],
        scoringActions: [
          "Distinguish which court binds which before answering precedent items",
          "Separate criminal (beyond reasonable doubt) from civil (balance of probabilities)",
        ],
      },
      {
        id: "aslw1-tp2",
        title: "Formation of business organisations",
        priority: "high",
        examinerFocus:
          "Distinguishing sole traders, partnerships and companies and the consequences of each form.",
        typicalQuestionForms: [
          "Item comparing liability and formation of different business forms",
          "Item on the features of a partnership vs a limited company",
        ],
        mustKnow: [
          "Sole trader (unlimited liability), partnership, LLP, and limited company features",
          "Separate legal personality and limited liability of a company (Salomon)",
          "Formation requirements for each form",
        ],
        scoringActions: [
          "Match the described liability to the correct business form",
          "Keep the company distinct from its members",
        ],
      },
      {
        id: "aslw1-tp3",
        title: "Agency law",
        priority: "high",
        examinerFocus:
          "The creation of agency and the types of authority that bind a principal.",
        typicalQuestionForms: [
          "Item on an agent's actual, apparent or usual authority",
          "Item on the creation of agency (agreement, ratification, necessity)",
        ],
        mustKnow: [
          "Authority: actual (express/implied), apparent (holding out), usual, and ratification",
          "The principal is bound where the agent acts within authority",
          "Duties of agent and principal",
        ],
        scoringActions: [
          "Match the described authority to the correct category",
          "Determine whether the principal is bound",
        ],
      },
      {
        id: "aslw1-tp4",
        title: "Partnership law",
        priority: "medium",
        examinerFocus:
          "The rights, duties and liability of partners and the effect of partnership on third parties.",
        typicalQuestionForms: [
          "Item on a partner's authority to bind the firm",
          "Item on partners' liability for the firm's debts",
        ],
        mustKnow: [
          "Partners are agents of the firm and can bind it within the ordinary course of business",
          "Partners in an ordinary partnership have unlimited joint liability; LLP members have limited liability",
          "Formation and dissolution of partnerships",
        ],
        scoringActions: [
          "Assess whether a partner acted within the ordinary course of business",
          "Distinguish ordinary partnership from LLP liability",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 60%+; this is objective-test material where precise recall of the legal framework and business forms scores reliably.",
      timeBudget:
        "Within the 2-hour LW CBE, about 1.2 minutes per mark; do not dwell beyond ~2 minutes on any item.",
      answerSequence: [
        "Answer recall items on courts, sources and business forms first",
        "Apply agency and partnership rules to scenario items",
        "Return to flagged items and answer all — no negative marking",
      ],
      qualityChecks: [
        "Re-read stems for the precise legal issue",
        "Confirm the exact number of options in multiple-response items",
      ],
    },
    studyNotes: [
      {
        id: "aslw1-sn1",
        title: "The legal system and precedent",
        testPointIds: ["aslw1-tp1"],
        explanation: [
          "This module establishes the legal framework accountants operate within. English law comes from several sources: legislation (Acts of Parliament and delegated legislation), case law developed by judges (common law and equity), and, historically, custom. Understanding the source helps you know how a rule can be changed and how it applies.",
          "The courts are arranged in a hierarchy, and the doctrine of precedent means decisions of higher courts bind lower ones. The binding part of a decision is the ratio decidendi (the legal reasoning essential to the outcome); other observations (obiter dicta) are only persuasive. The exam frequently tests which court binds which and this ratio/obiter distinction.",
          "Law also divides into criminal (the state prosecuting wrongdoing, proof beyond reasonable doubt) and civil (disputes between parties, proof on the balance of probabilities). Recognising which applies, and the different parties and remedies, is basic legal literacy tested at this level.",
        ],
        keyRules: [
          "Ratio decidendi binds; obiter dicta persuade",
          "Sources: legislation, case law/common law, equity",
          "Criminal (beyond reasonable doubt) vs civil (balance of probabilities)",
        ],
      },
      {
        id: "aslw1-sn2",
        title: "Business forms and their consequences",
        testPointIds: ["aslw1-tp2"],
        explanation: [
          "Businesses can be structured in several ways, each with different legal consequences. A sole trader is the simplest form but has unlimited personal liability for business debts. A partnership shares this, with partners jointly liable, unless it is a limited liability partnership (LLP), which gives its members limited liability while retaining partnership flexibility.",
          "A limited company is a separate legal person from its owners (Salomon v Salomon), so shareholders enjoy limited liability — they risk only their investment — and the company has perpetual succession. This separation is fundamental and recurs throughout company law.",
          "Formation requirements rise with complexity: a sole trader needs little formality, a company must be registered with a constitution and comply with the Companies Act. The exam asks you to match a described situation (particularly the liability position) to the correct business form.",
        ],
        keyRules: [
          "Sole trader/ordinary partnership: unlimited liability; LLP/company: limited liability",
          "A company is a separate legal person (Salomon)",
          "Formality increases from sole trader to company",
        ],
        workedProblem: {
          scenario:
            "Two people run a business together, sharing profits, without forming a company or LLP. The business incurs a large debt it cannot pay. What is their liability?",
          steps: [
            "Identify the form: sharing profits without incorporation is an ordinary partnership",
            "Apply the liability rule: partners in an ordinary partnership have unlimited joint liability",
            "Conclude: their personal assets are at risk for the firm's debts",
          ],
          conclusion:
            "As ordinary partners they have unlimited joint liability, so their personal assets can be used to meet the firm's debt — unlike shareholders in a limited company or members of an LLP.",
          markingNotes: [
            "Ordinary partnership identified",
            "Unlimited joint liability correctly stated",
          ],
        },
      },
      {
        id: "aslw1-sn3",
        title: "Agency law",
        testPointIds: ["aslw1-tp3"],
        explanation: [
          "Agency allows one person (the agent) to affect the legal relations of another (the principal), most importantly by forming contracts on the principal's behalf. Agency arises by express or implied agreement, by ratification (the principal later approving an unauthorised act), or, rarely, by necessity.",
          "The key exam concept is authority. Actual authority is expressly given or implied from the agent's role; apparent (ostensible) authority arises where the principal holds the agent out as having authority, so a third party reasonably relies on it; and usual authority attaches to a particular position. Where the agent acts within any of these, the principal is bound.",
          "Agents owe duties to their principal (to act with care, avoid conflicts, and account), and principals owe duties to agents (payment, indemnity). The exam typically describes an agent's action and asks whether the principal is bound and on what basis.",
        ],
        keyRules: [
          "Authority: actual (express/implied), apparent (holding out), usual, ratification",
          "The principal is bound where the agent acts within authority",
          "Agents owe duties of care, no conflict and to account",
        ],
      },
      {
        id: "aslw1-sn4",
        title: "Partnership law",
        testPointIds: ["aslw1-tp4"],
        explanation: [
          "Partnership is the relationship between persons carrying on a business in common with a view to profit. Each partner is an agent of the firm and of the other partners, so a partner can bind the firm to contracts made in the ordinary course of the partnership's business — even without express authority — which protects third parties dealing with the firm.",
          "Liability depends on the type. In an ordinary partnership, partners have unlimited liability and are jointly liable for the firm's debts. In a limited liability partnership, the LLP is a separate legal person and members' liability is limited, offering protection similar to a company.",
          "Partnerships are formed by agreement (which need not be written) and can be dissolved by agreement, expiry, notice, or events such as death or bankruptcy of a partner. The exam tests a partner's authority to bind the firm and the extent of partners' liability.",
        ],
        keyRules: [
          "Partners are agents who bind the firm in the ordinary course of business",
          "Ordinary partners: unlimited joint liability; LLP members: limited",
          "Partnership can form without a written agreement",
        ],
      },
    ],
    examPractice: [
      {
        id: "aslw1-ep1",
        testPointIds: ["aslw1-tp1"],
        style: "Objective test — precedent",
        question:
          "Which part of a judicial decision forms the binding precedent for later cases?",
        answerPlan: [
          "Recall ratio vs obiter",
        ],
        modelAnswer:
          "The binding precedent is the ratio decidendi — the legal reasoning essential to the decision. Obiter dicta (remarks made 'by the way') are only persuasive, not binding.",
        markingGuide: [
          "1 mark: ratio decidendi identified as binding",
          "1 mark: obiter identified as only persuasive",
        ],
      },
      {
        id: "aslw1-ep2",
        testPointIds: ["aslw1-tp2"],
        style: "Objective test — business forms",
        question:
          "Which business form gives its owners limited liability while being a separate legal person from them?",
        answerPlan: [
          "Match the features to a form",
        ],
        modelAnswer:
          "A limited company is a separate legal person from its owners and gives shareholders limited liability, so they risk only their investment. (An LLP also gives limited liability and separate personality, but the classic answer for owners/shareholders is a limited company.)",
        markingGuide: [
          "1 mark: limited company (or LLP) identified",
          "1 mark: separate legal personality and limited liability noted",
        ],
      },
      {
        id: "aslw1-ep3",
        testPointIds: ["aslw1-tp3"],
        style: "Objective test — agency",
        question:
          "A company allows an employee to act as if they were its purchasing manager, and a supplier reasonably relies on this. The employee orders goods. On what basis is the company bound?",
        answerPlan: [
          "Identify the type of authority",
          "Conclude the principal is bound",
        ],
        modelAnswer:
          "The company is bound on the basis of apparent (ostensible) authority, because it held the employee out as having the authority of a purchasing manager and the supplier reasonably relied on that representation. The company is therefore liable on the contract.",
        markingGuide: [
          "1 mark: apparent authority identified",
          "1 mark: company bound because of holding out/reliance",
        ],
      },
    ],
  }),

  "acca-applied-skills-m2": examDepth({
    testPoints: [
      {
        id: "aslw2-tp1",
        title: "Formation of a valid contract",
        priority: "critical",
        examinerFocus:
          "Applying the essentials of a valid contract to a scenario — the contract-formation focus of this module.",
        typicalQuestionForms: [
          "Item testing whether offer, acceptance, consideration and intention are present",
          "Item on invitation to treat vs offer, or the rules on acceptance",
        ],
        mustKnow: [
          "Essentials: offer, acceptance, consideration, intention to create legal relations, capacity",
          "Invitation to treat (displays, adverts) vs offer; postal rule vs instantaneous acceptance",
          "Consideration must be sufficient but need not be adequate; past consideration is not good",
        ],
        scoringActions: [
          "Test each essential against the facts before concluding",
          "Distinguish an invitation to treat from an offer",
        ],
      },
      {
        id: "aslw2-tp2",
        title: "Contract terms and breach",
        priority: "high",
        examinerFocus:
          "Distinguishing conditions from warranties and identifying the remedies for breach.",
        typicalQuestionForms: [
          "Item on the remedy for breach of a condition vs a warranty",
          "Item on express/implied terms or exclusion clauses",
        ],
        mustKnow: [
          "Condition breach allows repudiation and damages; warranty breach only damages",
          "Terms may be express or implied (by statute, custom or the courts)",
          "Exclusion clauses must be incorporated and are controlled by legislation",
        ],
        scoringActions: [
          "Classify the term as condition or warranty to fix the remedy",
          "Check an exclusion clause was properly incorporated",
        ],
      },
      {
        id: "aslw2-tp3",
        title: "Remedies and the tort of negligence",
        priority: "critical",
        examinerFocus:
          "Measuring contract damages and applying the negligence test (duty, breach, causation, remoteness).",
        typicalQuestionForms: [
          "Item on the measure of damages, remoteness or mitigation",
          "Item applying duty of care, breach and causation in negligence",
        ],
        mustKnow: [
          "Damages put the claimant in the position as if the contract were performed; losses must not be too remote; mitigation required",
          "Negligence: duty of care (Caparo), breach (reasonable person), causation and remoteness",
          "Professional liability for negligent misstatement",
        ],
        scoringActions: [
          "Work through duty → breach → causation in order",
          "Apply the remoteness and mitigation rules to damages",
        ],
      },
      {
        id: "aslw2-tp4",
        title: "Employment law",
        priority: "high",
        examinerFocus:
          "Distinguishing employees from contractors and identifying wrongful and unfair dismissal.",
        typicalQuestionForms: [
          "Item applying the tests of employment status",
          "Item on the grounds for fair dismissal or the difference between wrongful and unfair dismissal",
        ],
        mustKnow: [
          "Status tests: control, integration, and economic reality (financial risk, equipment, substitution)",
          "Wrongful dismissal is breach of the contractual notice; unfair dismissal is statutory (fair reason + fair procedure)",
          "Fair reasons: conduct, capability, redundancy, illegality, some other substantial reason",
        ],
        scoringActions: [
          "Apply the status tests to the facts, not the label",
          "Distinguish wrongful (contract) from unfair (statutory) dismissal",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 60%+; contract and tort items reward precise recall of the rules and careful application to short scenarios.",
      timeBudget:
        "Within the 2-hour LW CBE, about 1.2 minutes per mark; avoid over-dwelling on scenario items.",
      answerSequence: [
        "Answer contract-formation and terms items first",
        "Apply negligence and employment rules to scenarios",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm all contract essentials were tested",
        "Check the negligence elements were applied in order",
      ],
    },
    studyNotes: [
      {
        id: "aslw2-sn1",
        title: "Contract formation",
        testPointIds: ["aslw2-tp1"],
        explanation: [
          "A valid contract requires offer, acceptance, consideration, intention to create legal relations and capacity. An offer is a definite promise capable of acceptance; it must be distinguished from an invitation to treat, such as goods on display or an advertisement, which merely invites offers. Acceptance must be a clear, unqualified agreement to the offer's terms and must be communicated.",
          "The rules on communication of acceptance are frequently tested. The postal rule makes a posted acceptance effective when posted (not when received), whereas instantaneous methods (phone, email) take effect on receipt. A counter-offer destroys the original offer.",
          "Consideration — something of value given by each party — must be sufficient (real) but need not be adequate (the courts do not judge the fairness of the bargain), and past consideration is generally not good consideration. Intention is presumed present in commercial agreements and absent in social/domestic ones.",
        ],
        keyRules: [
          "Essentials: offer, acceptance, consideration, intention, capacity",
          "Displays/adverts are invitations to treat, not offers",
          "Consideration must be sufficient but need not be adequate",
        ],
        workedProblem: {
          scenario:
            "A offers to sell a car to B for $5,000. B replies 'I'll give you $4,500.' A refuses. B then says 'OK, I'll pay $5,000.' Is there a contract?",
          steps: [
            "A's statement is an offer at $5,000",
            "B's reply of $4,500 is a counter-offer, which destroys the original offer",
            "B's later attempt to accept $5,000 is a new offer, which A is free to reject",
          ],
          conclusion:
            "There is no contract: B's counter-offer of $4,500 destroyed A's original offer, so B's later 'acceptance' at $5,000 is merely a new offer that A can decline.",
          markingNotes: [
            "Counter-offer identified as destroying the original offer",
            "Correct conclusion that no contract exists",
          ],
        },
      },
      {
        id: "aslw2-sn2",
        title: "Terms and breach of contract",
        testPointIds: ["aslw2-tp2"],
        explanation: [
          "Contract terms are classified by importance. Conditions are fundamental terms going to the root of the contract; breach allows the innocent party to repudiate (end the contract) and claim damages. Warranties are minor terms; breach allows only a claim for damages. Innominate terms are judged by how serious the consequences of the breach turn out to be.",
          "Terms may be express (stated by the parties) or implied — by statute (such as terms about quality in sale-of-goods legislation), by custom, or by the courts to give business efficacy. Distinguishing terms from mere representations affects the available remedy.",
          "Exclusion clauses attempt to limit or exclude liability. To be effective they must be incorporated into the contract (by signature, notice or a course of dealing) and are further controlled by legislation, which restricts or invalidates unreasonable clauses, especially against consumers.",
        ],
        keyRules: [
          "Condition breach → repudiation + damages; warranty breach → damages only",
          "Terms may be express or implied (statute, custom, courts)",
          "Exclusion clauses must be incorporated and are controlled by legislation",
        ],
      },
      {
        id: "aslw2-sn3",
        title: "Remedies and negligence",
        testPointIds: ["aslw2-tp3"],
        explanation: [
          "The usual remedy for breach of contract is damages, which aim to put the claimant in the position they would have been in had the contract been performed. Recoverable losses must not be too remote — under Hadley v Baxendale they must arise naturally or have been within the parties' reasonable contemplation — and the claimant must take reasonable steps to mitigate the loss. Equitable remedies such as specific performance and injunctions are discretionary.",
          "The tort of negligence requires three elements in sequence: a duty of care (established using the Caparo criteria of foreseeability, proximity and whether it is fair, just and reasonable), a breach of that duty (falling below the standard of the reasonable person), and damage caused by the breach that is not too remote. All three must be present.",
          "Professional advisers, including accountants, can be liable for negligent misstatement causing economic loss where a special relationship exists and reliance was reasonable. This makes negligence practically important for the profession, and the exam often frames it around advice given to a third party.",
        ],
        keyRules: [
          "Damages must not be too remote and must be mitigated",
          "Negligence needs duty, breach and causation (with remoteness)",
          "Accountants can be liable for negligent misstatement",
        ],
      },
      {
        id: "aslw2-sn4",
        title: "Employment law",
        testPointIds: ["aslw2-tp4"],
        explanation: [
          "Employment status determines legal rights, so the courts look beyond the contract label. The control test asks who directs the work; the integration test asks how central the person is to the organisation; and the economic-reality (multiple) test asks who bears financial risk, provides equipment and can send a substitute. Employees have rights that genuine independent contractors do not.",
          "Dismissal splits into two claims. Wrongful dismissal is a breach of the contract of employment — typically dismissal without the proper notice. Unfair dismissal is a statutory claim: the employer must have a potentially fair reason (conduct, capability, redundancy, illegality, or some other substantial reason) and must follow a fair procedure.",
          "The two can overlap but are conceptually distinct — one is contractual, the other statutory. The exam gives a dismissal scenario and asks you to identify which claim arises and whether it would succeed.",
        ],
        keyRules: [
          "Status turns on control, integration and economic reality, not the label",
          "Wrongful dismissal = breach of notice; unfair dismissal = statutory",
          "Unfair dismissal needs a fair reason and a fair procedure",
        ],
      },
    ],
    examPractice: [
      {
        id: "aslw2-ep1",
        testPointIds: ["aslw2-tp2"],
        style: "Objective test — terms",
        question:
          "A term in a contract is described as minor, so that its breach does not go to the root of the contract. What is such a term called, and what remedy does its breach give?",
        answerPlan: [
          "Classify the term",
          "State the remedy",
        ],
        modelAnswer:
          "A minor term is a warranty. Breach of a warranty entitles the innocent party to claim damages only; it does not allow the contract to be repudiated, unlike breach of a condition.",
        markingGuide: [
          "1 mark: warranty identified",
          "1 mark: damages only (no repudiation)",
        ],
      },
      {
        id: "aslw2-ep2",
        testPointIds: ["aslw2-tp3"],
        style: "Objective test — negligence",
        question:
          "List, in order, the three elements a claimant must prove to establish liability in the tort of negligence.",
        answerPlan: [
          "Recall the three elements in sequence",
        ],
        modelAnswer:
          "The three elements, in order, are: (1) the defendant owed the claimant a duty of care; (2) the defendant breached that duty by falling below the standard of the reasonable person; and (3) the breach caused the claimant's loss, which was not too remote.",
        markingGuide: [
          "1 mark: duty and breach identified",
          "1 mark: causation/remoteness identified",
        ],
      },
      {
        id: "aslw2-ep3",
        testPointIds: ["aslw2-tp4"],
        style: "Objective test — employment",
        question:
          "An employer dismisses an employee immediately without the contractual notice period. Which type of dismissal claim does this most directly give rise to?",
        answerPlan: [
          "Match the facts to the claim",
        ],
        modelAnswer:
          "Dismissal without the required contractual notice is a breach of the employment contract, giving rise most directly to a wrongful dismissal claim. (It may also be unfair if there is no fair reason or procedure, but the failure to give notice is specifically wrongful dismissal.)",
        markingGuide: [
          "1 mark: wrongful dismissal identified",
          "1 mark: reasoning based on breach of the contractual notice",
        ],
      },
    ],
  }),

  "acca-applied-skills-m3": examDepth({
    testPoints: [
      {
        id: "aslw3-tp1",
        title: "Company formation and constitution",
        priority: "high",
        examinerFocus:
          "The formation of a company, its constitution, and the effect of corporate personality — the company-law focus of this module.",
        typicalQuestionForms: [
          "Item on the documents/steps to form a company or the effect of the articles",
          "Item on separate corporate personality and lifting the veil",
        ],
        mustKnow: [
          "Formation documents: memorandum, articles of association, and registration",
          "Separate legal personality and limited liability (Salomon); limited grounds for lifting the veil",
          "The articles as the company's internal rulebook binding members and company",
        ],
        scoringActions: [
          "Keep the company distinct from its members",
          "Recall the narrow circumstances for lifting the veil",
        ],
      },
      {
        id: "aslw3-tp2",
        title: "Share and loan capital",
        priority: "high",
        examinerFocus:
          "Distinguishing shares from debentures and understanding capital maintenance.",
        typicalQuestionForms: [
          "Item comparing shares (ownership) with debentures (debt)",
          "Item on share premium, capital maintenance or types of shares",
        ],
        mustKnow: [
          "Shares = ownership, dividends, votes; debentures = debt, interest, priority on insolvency",
          "Ordinary vs preference shares; fixed vs floating charges",
          "Capital maintenance protects creditors (restrictions on returning capital)",
        ],
        scoringActions: [
          "Distinguish equity from debt by rights and priority",
          "Identify the charge type (fixed vs floating)",
        ],
      },
      {
        id: "aslw3-tp3",
        title: "Directors' duties and administration",
        priority: "critical",
        examinerFocus:
          "Identifying the statutory duties of directors and company administration requirements.",
        typicalQuestionForms: [
          "Item identifying which statutory duty (CA 2006 ss.171–177) is breached",
          "Item on director appointment/removal or company meetings and resolutions",
        ],
        mustKnow: [
          "The seven statutory duties (ss.171–177): within powers, promote success, independent judgement, care/skill, avoid conflicts, no third-party benefits, declare interests",
          "Appointment, removal (ordinary resolution) and disqualification of directors",
          "Meetings and resolutions: ordinary vs special resolutions",
        ],
        scoringActions: [
          "Name the specific numbered duty rather than 'breach' generally",
          "Match the decision to the correct resolution type",
        ],
      },
      {
        id: "aslw3-tp4",
        title: "Insolvency and administration",
        priority: "high",
        examinerFocus:
          "Distinguishing insolvency procedures, the order of priority of creditors, and fraudulent/wrongful trading.",
        typicalQuestionForms: [
          "Item ranking creditors on a liquidation or distinguishing administration from liquidation",
          "Item distinguishing wrongful trading from fraudulent trading",
        ],
        mustKnow: [
          "Priority: fixed charge, liquidation costs, preferential creditors, floating charge (after prescribed part), unsecured, shareholders",
          "Wrongful trading (civil, no reasonable prospect) vs fraudulent trading (intent to defraud)",
          "Administration aims to rescue the company or achieve a better result than winding up",
        ],
        scoringActions: [
          "Apply the statutory priority order precisely",
          "Use 'intent to defraud' to separate fraudulent from wrongful trading",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Aim for 60%+; company-law items reward precise recall of directors' duties, capital and insolvency rules.",
      timeBudget:
        "Within the 2-hour LW CBE, about 1.2 minutes per mark; keep recall items brisk.",
      answerSequence: [
        "Answer formation, capital and directors'-duties recall items first",
        "Apply insolvency rules to scenario items",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm the specific statutory duty is named",
        "Check the creditor priority order is correctly applied",
      ],
    },
    studyNotes: [
      {
        id: "aslw3-sn1",
        title: "Formation, constitution and personality",
        testPointIds: ["aslw3-tp1"],
        explanation: [
          "A company is formed by registration, submitting a memorandum of association (a short document confirming the subscribers' intention to form the company) and articles of association (the company's internal rulebook), along with other required particulars. On registration the company comes into existence as a separate legal person.",
          "Separate legal personality (Salomon v Salomon) means the company is distinct from its members: it owns its own property, makes its own contracts, and its members enjoy limited liability. The 'veil of incorporation' separating company from members is lifted only in narrow circumstances, such as specific statutory provisions (fraudulent/wrongful trading) or where the company is a mere sham or facade.",
          "The articles bind the company and its members as a contract, governing internal matters such as director powers, share rights and meetings. Model articles apply unless the company adopts its own. The exam tests both formation mechanics and the consequences of corporate personality.",
        ],
        keyRules: [
          "Formation: memorandum, articles, and registration",
          "A company is a separate legal person; the veil is lifted only exceptionally",
          "The articles are the internal rulebook binding company and members",
        ],
      },
      {
        id: "aslw3-sn2",
        title: "Share and loan capital",
        testPointIds: ["aslw3-tp2"],
        explanation: [
          "Companies raise finance through share (equity) capital and loan (debt) capital. Shareholders own the company, may receive dividends from distributable profits, and usually vote; debenture holders are creditors who receive interest and, if secured, rank ahead of shareholders on insolvency. Distinguishing the rights and priority of each is fundamental.",
          "Shares come in classes — ordinary shares carry the residual risk and reward, while preference shares typically have a fixed dividend and priority over ordinary shares. Debt may be secured by a fixed charge (over specific assets) or a floating charge (over a class of assets that changes, crystallising on default).",
          "Capital maintenance rules protect creditors by restricting the return of capital to shareholders — for example, limits on dividends (payable only from distributable profits) and on the reduction of capital. These rules recognise that creditors rely on the company's capital as a buffer.",
        ],
        keyRules: [
          "Shares = ownership/dividends/votes; debentures = debt/interest/priority",
          "Fixed charge (specific assets) vs floating charge (changing class)",
          "Capital maintenance restricts returning capital to protect creditors",
        ],
      },
      {
        id: "aslw3-sn3",
        title: "Directors' duties and administration",
        testPointIds: ["aslw3-tp3"],
        explanation: [
          "Directors manage the company and owe it seven codified statutory duties under the Companies Act 2006: to act within their powers (s.171), to promote the success of the company (s.172), to exercise independent judgement (s.173), to exercise reasonable care, skill and diligence (s.174), to avoid conflicts of interest (s.175), not to accept benefits from third parties (s.176), and to declare interests in proposed transactions (s.177). The exam expects you to name the specific duty breached.",
          "Directors are appointed and can be removed by ordinary resolution of the members, and may be disqualified for misconduct. They must act collectively as a board and are accountable to the members.",
          "Company decisions are made by resolution at meetings: ordinary resolutions (over 50%) for most matters, and special resolutions (75%) for fundamental changes such as altering the articles. Recognising which resolution is required for a given decision is a common objective-test point.",
        ],
        keyRules: [
          "Seven statutory duties in CA 2006 ss.171–177",
          "Directors removed by ordinary resolution; can be disqualified",
          "Ordinary resolution >50%; special resolution 75%",
        ],
        workedProblem: {
          scenario:
            "A director learns of a lucrative contract opportunity while acting for the company and takes it for their own private company without telling the board. Which statutory duty is breached and what is the consequence?",
          steps: [
            "Identify the duty: avoiding conflicts of interest and exploiting corporate opportunities (s.175)",
            "Apply: the director exploited an opportunity that came to them through their position",
            "Consequence: breach; the director must account to the company for the profit",
          ],
          conclusion:
            "The director breached the duty to avoid conflicts of interest (s.175) by taking a corporate opportunity, and must account to the company for any profit made.",
          markingNotes: [
            "Correct statutory duty (s.175) named",
            "Consequence (account for profit) stated",
          ],
        },
      },
      {
        id: "aslw3-sn4",
        title: "Insolvency and administration",
        testPointIds: ["aslw3-tp4"],
        explanation: [
          "When a company cannot pay its debts, insolvency procedures apply. Liquidation (winding up) ends the company and distributes its assets; administration seeks to rescue the company as a going concern or to achieve a better outcome for creditors than immediate winding up. Choosing the right description of each procedure is regularly tested.",
          "On liquidation, assets are distributed in a strict statutory order: fixed-charge holders first, then the costs of the liquidation, then preferential creditors, then floating-charge holders (after a prescribed part is set aside for unsecured creditors), then unsecured creditors, and finally shareholders. Applying this order precisely is essential.",
          "Directors face personal consequences for improper trading. Wrongful trading is a civil wrong where directors continued trading when they knew, or ought to have concluded, there was no reasonable prospect of avoiding insolvent liquidation; fraudulent trading additionally requires an intent to defraud creditors. Both can lead to personal liability and disqualification.",
        ],
        keyRules: [
          "Priority: fixed charge, liquidation costs, preferential, floating charge, unsecured, shareholders",
          "Wrongful trading is civil; fraudulent trading requires intent to defraud",
          "Administration aims to rescue or improve the outcome for creditors",
        ],
      },
    ],
    examPractice: [
      {
        id: "aslw3-ep1",
        testPointIds: ["aslw3-tp3"],
        style: "Objective test — resolution",
        question:
          "A company wishes to alter its articles of association. What type of resolution is required and what majority?",
        answerPlan: [
          "Match the decision to the resolution type",
        ],
        modelAnswer:
          "Altering the articles of association is a fundamental change requiring a special resolution, which needs a majority of at least 75% of the votes cast.",
        markingGuide: [
          "1 mark: special resolution identified",
          "1 mark: 75% majority",
        ],
      },
      {
        id: "aslw3-ep2",
        testPointIds: ["aslw3-tp4"],
        style: "Objective test — insolvency priority",
        question:
          "On a liquidation, which of the following ranks HIGHEST in priority? A) Unsecured creditors; B) Fixed-charge holders; C) Shareholders; D) Floating-charge holders.",
        answerPlan: [
          "Recall the priority order",
        ],
        modelAnswer:
          "Fixed-charge holders (B) rank highest, being paid from the proceeds of the specific assets charged. Floating-charge holders rank after liquidation costs and preferential creditors; unsecured creditors and then shareholders rank last.",
        markingGuide: [
          "1 mark: fixed-charge holders identified as highest",
          "1 mark: reasoning based on the statutory priority order",
        ],
      },
      {
        id: "aslw3-ep3",
        testPointIds: ["aslw3-tp2"],
        style: "Objective test — capital",
        question:
          "Distinguish an ordinary shareholder from a debenture holder in terms of their relationship with the company and priority on insolvency.",
        answerPlan: [
          "State the nature of each",
          "Compare priority",
        ],
        modelAnswer:
          "An ordinary shareholder is an owner (member) of the company who may receive dividends and votes but bears the residual risk. A debenture holder is a creditor who lent money and receives interest. On insolvency, secured debenture holders rank ahead of shareholders, who are paid last (if anything remains).",
        markingGuide: [
          "1 mark: shareholder = owner; debenture holder = creditor",
          "1 mark: debenture holder ranks ahead of shareholder on insolvency",
        ],
      },
    ],
  }),

  "acca-applied-skills-m4": examDepth({
    testPoints: [
      {
        id: "aspm4-tp1",
        title: "Activity-based costing (ABC)",
        priority: "critical",
        examinerFocus:
          "Computing and interpreting ABC versus traditional absorption costing — a core specialist technique in this module.",
        typicalQuestionForms: [
          "Section C/B calculation of ABC cost per unit with cost-driver rates and commentary",
          "Item explaining when ABC gives better information than absorption costing",
        ],
        mustKnow: [
          "ABC steps: pool overheads by activity, find cost-driver rates, absorb by driver usage",
          "ABC benefits low-volume, complex products that absorption under-costs",
          "Cost drivers should reflect what causes the cost",
        ],
        scoringActions: [
          "Show cost-driver rates and per-unit workings clearly",
          "Comment on ABC vs absorption for the product mix",
        ],
      },
      {
        id: "aspm4-tp2",
        title: "Target costing",
        priority: "high",
        examinerFocus:
          "Computing the target cost gap and explaining how to close it.",
        typicalQuestionForms: [
          "Item computing target cost from target price and required margin, and the gap",
          "Item on how to close a target cost gap",
        ],
        mustKnow: [
          "Target cost = target selling price − required profit margin",
          "Target cost gap = estimated cost − target cost",
          "Close the gap via value engineering, redesign and supplier negotiation",
        ],
        scoringActions: [
          "Derive the target cost before finding the gap",
          "Suggest specific, practical ways to close the gap",
        ],
      },
      {
        id: "aspm4-tp3",
        title: "Lifecycle costing",
        priority: "medium",
        examinerFocus:
          "Recognising all costs over a product's life and using lifecycle costing for pricing and profitability.",
        typicalQuestionForms: [
          "Item computing lifecycle cost per unit over all stages",
          "Item on the stages of the product lifecycle and their cost implications",
        ],
        mustKnow: [
          "Lifecycle costs include R&D, design, production, marketing and decommissioning",
          "Most costs are committed early (at the design stage)",
          "Lifecycle cost per unit spreads all costs over total lifetime output",
        ],
        scoringActions: [
          "Include all lifecycle costs, not just production",
          "Spread total costs over total lifetime volume",
        ],
      },
      {
        id: "aspm4-tp4",
        title: "Throughput accounting",
        priority: "high",
        examinerFocus:
          "Computing throughput, the throughput accounting ratio, and prioritising products through a bottleneck.",
        typicalQuestionForms: [
          "Item computing the throughput accounting ratio (TPAR) and interpreting it",
          "Item ranking products by throughput per bottleneck hour",
        ],
        mustKnow: [
          "Throughput = sales − material cost; only material is treated as variable",
          "TPAR = throughput per bottleneck hour / factory cost per bottleneck hour; > 1 acceptable",
          "Rank products by throughput per unit of the bottleneck resource",
        ],
        scoringActions: [
          "Compute throughput per bottleneck hour before the TPAR",
          "Interpret whether the TPAR exceeds 1",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; specialist-costing items reward clear workings and a short interpretation for the constructed-response marks.",
      timeBudget:
        "Within the 3-hour PM CBE, ~1.8 minutes per mark; give Section C calculations a proforma and add narrative.",
      answerSequence: [
        "Bank Section A/B objective items on the techniques first",
        "In Section C, calculate with a clear layout, then interpret",
        "Return to flagged items before the end",
      ],
      qualityChecks: [
        "Confirm cost-driver rates and per-unit figures are correct",
        "Check each calculation ends with a short interpretation",
      ],
    },
    studyNotes: [
      {
        id: "aspm4-sn1",
        title: "Activity-based costing",
        testPointIds: ["aspm4-tp1"],
        explanation: [
          "Traditional absorption costing spreads overhead using a single volume-based rate (often labour hours), which distorts product costs when overheads are driven by activities other than volume. Activity-based costing traces overheads to activities (set-ups, inspections, order handling), calculates a cost-driver rate for each, and then charges products according to how much of each driver they consume.",
          "The insight is that low-volume, complex products consume disproportionate amounts of support activities and are under-costed by absorption costing, while high-volume simple products are over-costed. ABC reveals the true cost, supporting better pricing and product-mix decisions.",
          "ABC is more accurate but more costly to operate, so it is most worthwhile where overheads are high and diverse and products vary in complexity. The exam typically asks you to compute ABC and absorption costs and comment on the difference.",
        ],
        keyRules: [
          "ABC: pool overheads by activity, find driver rates, absorb by driver usage",
          "ABC benefits low-volume, complex products",
          "Drivers should reflect what causes the cost",
        ],
        workedProblem: {
          scenario:
            "Set-up costs are $180,000 for 300 set-ups. A product requires 15 set-ups for a batch of 500 units. Calculate the set-up overhead per unit under ABC.",
          steps: [
            "Set-up driver rate = $180,000 / 300 = $600 per set-up",
            "Set-up cost for the product = 15 × $600 = $9,000",
            "Per unit = $9,000 / 500 = $18",
          ],
          conclusion:
            "The set-up overhead is $18 per unit under ABC; a low-volume product needing many set-ups would carry a far higher set-up cost than a volume-based absorption rate would suggest.",
          markingNotes: [
            "Driver rate of $600 per set-up",
            "$18 per unit correctly derived",
          ],
        },
      },
      {
        id: "aspm4-sn2",
        title: "Target costing",
        testPointIds: ["aspm4-tp2"],
        explanation: [
          "Target costing starts from the market, not the cost. The firm determines a competitive selling price and deducts the required profit margin to arrive at a target cost — the maximum the product may cost to deliver that margin at that price. This reverses the traditional cost-plus approach.",
          "If the current estimated cost exceeds the target cost, there is a target cost gap that must be closed before or during production. Techniques to close it include value engineering (redesigning to remove non-value-adding cost), using cheaper components or processes without harming quality, and negotiating with suppliers.",
          "Target costing is especially useful in competitive markets with price-sensitive customers and for new products, because most cost is committed at the design stage. The exam asks you to compute the gap and suggest realistic ways to close it.",
        ],
        keyRules: [
          "Target cost = target selling price − required margin",
          "Target cost gap = estimated cost − target cost",
          "Close the gap via value engineering, redesign, supplier negotiation",
        ],
      },
      {
        id: "aspm4-sn3",
        title: "Lifecycle costing",
        testPointIds: ["aspm4-tp3"],
        explanation: [
          "Lifecycle costing considers all the costs a product incurs from cradle to grave — research and development, design, production, marketing, distribution, customer service and decommissioning — rather than just production costs in one period. This gives a fuller picture of profitability.",
          "A key insight is that most costs are committed early, at the design and development stage, even though they are incurred later. Decisions made then largely determine the total lifecycle cost, which is why techniques like target costing focus on design.",
          "Lifecycle cost per unit divides total lifecycle costs by total expected output over the product's life. This helps set prices that recover all costs and identifies products that appear profitable in production but are not once development and end-of-life costs are included.",
        ],
        keyRules: [
          "Include R&D, design, production, marketing and decommissioning costs",
          "Most costs are committed at the design stage",
          "Lifecycle cost per unit spreads total costs over total lifetime output",
        ],
      },
      {
        id: "aspm4-sn4",
        title: "Throughput accounting",
        testPointIds: ["aspm4-tp4"],
        explanation: [
          "Throughput accounting derives from the theory of constraints and treats only direct material as a truly variable cost; all other costs (including labour) are treated as fixed 'factory costs' in the short term. Throughput is sales revenue less material cost, and the aim is to maximise throughput through the bottleneck resource that limits output.",
          "Products are ranked by throughput per unit of the bottleneck resource, and the throughput accounting ratio — throughput per bottleneck hour divided by factory cost per bottleneck hour — assesses whether a product is worthwhile. A TPAR above 1 means the product generates more throughput than it costs in bottleneck time.",
          "The approach focuses management on the constraint: elevating the bottleneck (through extra capacity or efficiency) increases total throughput. The exam asks you to compute throughput, the TPAR, and to prioritise products through the bottleneck.",
        ],
        keyRules: [
          "Throughput = sales − material cost; only material is variable",
          "TPAR = throughput per bottleneck hour / factory cost per bottleneck hour",
          "Rank products by throughput per bottleneck hour",
        ],
      },
    ],
    examPractice: [
      {
        id: "aspm4-ep1",
        testPointIds: ["aspm4-tp2"],
        style: "Section B — target costing",
        question:
          "A product will sell for $80 and the company requires a 25% margin on selling price. The current estimated cost is $68. Calculate the target cost and the target cost gap.",
        answerPlan: [
          "Compute required profit and target cost",
          "Compute the gap",
        ],
        modelAnswer:
          "Required profit = 25% × $80 = $20, so target cost = $80 − $20 = $60. The current estimated cost is $68, so the target cost gap = $68 − $60 = $8 per unit, which must be closed through value engineering, redesign or supplier negotiation.",
        markingGuide: [
          "1 mark: target cost of $60",
          "1 mark: target cost gap of $8",
        ],
      },
      {
        id: "aspm4-ep2",
        testPointIds: ["aspm4-tp4"],
        style: "Section B — throughput",
        question:
          "A product has a selling price of $50, material cost of $20, and takes 15 minutes on the bottleneck. Factory costs are $96 per bottleneck hour. Calculate the TPAR and interpret it.",
        answerPlan: [
          "Throughput per unit and per bottleneck hour",
          "TPAR and interpretation",
        ],
        modelAnswer:
          "Throughput per unit = $50 − $20 = $30. In 15 minutes (0.25 hour) throughput per bottleneck hour = $30 / 0.25 = $120. TPAR = $120 / $96 = 1.25. Because the TPAR exceeds 1, the product generates more throughput than it costs in bottleneck time and is worthwhile.",
        markingGuide: [
          "1 mark: throughput per bottleneck hour of $120",
          "1 mark: TPAR of 1.25 with interpretation",
        ],
      },
      {
        id: "aspm4-ep3",
        testPointIds: ["aspm4-tp1"],
        style: "Section C — ABC commentary",
        question:
          "Explain why a low-volume, complex product is often under-costed under traditional labour-based absorption costing but shown as more expensive under ABC.",
        answerPlan: [
          "Explain absorption's volume basis",
          "Explain ABC's driver basis",
          "Conclude on the effect",
        ],
        modelAnswer:
          "Traditional absorption costing spreads overhead using a volume-based rate such as labour hours, so a low-volume product absorbs little overhead simply because it uses few labour hours. However, complex, low-volume products often consume disproportionate support activities (set-ups, inspections, special handling). ABC traces those overheads to the product via cost drivers that reflect actual consumption, revealing a higher, more accurate cost. As a result, ABC typically shows low-volume, complex products as more expensive than absorption costing suggests, supporting better pricing and product-mix decisions.",
        markingGuide: [
          "1 mark: absorption's volume-based distortion explained",
          "1 mark: ABC's driver-based tracing explained",
          "1 mark: correct conclusion on the cost effect",
        ],
      },
    ],
  }),

  "acca-applied-skills-m5": examDepth({
    testPoints: [
      {
        id: "aspm5-tp1",
        title: "Relevant costing and limiting factors",
        priority: "critical",
        examinerFocus:
          "Identifying relevant costs and optimising with one scarce resource — the decision-making core of this module.",
        typicalQuestionForms: [
          "Make-or-buy or special-order decision using relevant costs and opportunity cost",
          "Limiting-factor ranking to maximise contribution",
        ],
        mustKnow: [
          "Relevant cost = future, incremental cash flow; include opportunity cost; exclude sunk/committed",
          "Rank by contribution per unit of the limiting factor with one constraint",
          "Materials in regular use valued at replacement cost",
        ],
        scoringActions: [
          "Annotate the scenario to strip out non-relevant costs",
          "State the optimum plan and contribution",
        ],
      },
      {
        id: "aspm5-tp2",
        title: "Linear programming",
        priority: "high",
        examinerFocus:
          "Formulating and solving a two-variable linear programme and interpreting shadow prices.",
        typicalQuestionForms: [
          "Item defining variables, constraints and the objective function",
          "Item solving graphically/simultaneously and interpreting a shadow price",
        ],
        mustKnow: [
          "Formulation: decision variables, constraints (≤ / ≥), and the objective function",
          "Optimal solution at a vertex of the feasible region",
          "Shadow price = extra contribution from one more unit of a binding constraint",
        ],
        scoringActions: [
          "Define variables and constraints precisely before solving",
          "Interpret the shadow price for decision-making",
        ],
      },
      {
        id: "aspm5-tp3",
        title: "Pricing decisions",
        priority: "medium",
        examinerFocus:
          "Applying pricing strategies and demand-based pricing to decisions.",
        typicalQuestionForms: [
          "Item on price skimming, penetration or cost-plus pricing",
          "Item computing the profit-maximising price using the demand equation (P = a − bQ)",
        ],
        mustKnow: [
          "Price skimming (high initial price) vs penetration pricing (low to gain share)",
          "Cost-plus pricing and its limitations (ignores demand)",
          "Profit maximised where marginal revenue = marginal cost",
        ],
        scoringActions: [
          "Match the strategy to the product's lifecycle and market",
          "Use MR = MC for profit-maximising price where data allow",
        ],
      },
      {
        id: "aspm5-tp4",
        title: "Decision-making under risk and uncertainty",
        priority: "critical",
        examinerFocus:
          "Applying expected values, decision criteria, decision trees and the value of information.",
        typicalQuestionForms: [
          "Payoff-table item applying maximax/maximin/minimax regret or expected value",
          "Decision tree or expected value of perfect information calculation",
        ],
        mustKnow: [
          "Expected value = Σ(probability × outcome); ignores risk attitude",
          "Maximax (optimist), maximin (pessimist), minimax regret (minimise maximum regret)",
          "Value of perfect information = EV with information − EV without",
        ],
        scoringActions: [
          "Build the payoff/regret table before applying a criterion",
          "State the risk attitude each criterion represents",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; decision-making rewards clean relevant-cost statements and correct application of the decision criteria.",
      timeBudget:
        "Within the 3-hour PM CBE, ~1.8 minutes per mark; give Section C decision questions a clear proforma and a recommendation.",
      answerSequence: [
        "Bank Section A/B objective items first",
        "In Section C, build the relevant-cost/LP/decision analysis, then recommend",
        "Return to flagged items before the end",
      ],
      qualityChecks: [
        "Confirm only relevant costs are included",
        "Check the decision criterion matches what the item asks",
      ],
    },
    studyNotes: [
      {
        id: "aspm5-sn1",
        title: "Relevant costing and limiting factors",
        testPointIds: ["aspm5-tp1"],
        explanation: [
          "Short-term decisions rest on relevant costs — future, incremental cash flows that differ between options. Sunk costs, committed costs and non-cash charges such as depreciation are excluded, while opportunity cost (contribution forgone from the next best use of a scarce resource) must be included. A clean relevant-cost statement is the core skill.",
          "When one resource is scarce, ranking by contribution per unit is misleading; rank instead by contribution per unit of the limiting factor, which measures the value extracted from each scarce unit. Allocate the resource to the highest-ranked product first until demand or the resource is exhausted.",
          "For materials, the relevant value depends on use: materials in regular use are valued at replacement cost, while materials not otherwise needed are valued at scrap or alternative-use value. Recognising these subtleties is what separates a scoring answer from a superficial one.",
        ],
        keyRules: [
          "Relevant cost = future, incremental cash flow; include opportunity cost",
          "Rank by contribution per unit of the limiting factor",
          "Materials in regular use are valued at replacement cost",
        ],
        workedProblem: {
          scenario:
            "A special order requires 50 hours of a machine that is fully utilised making a product earning $12 contribution per machine hour. Incremental cash costs of the order are $2,000. What is the relevant cost of the machine time and the total relevant cost?",
          steps: [
            "Machine is fully utilised, so using it means forgoing contribution: opportunity cost = 50 × $12 = $600",
            "Add incremental cash costs of $2,000",
            "Total relevant cost = $600 + $2,000 = $2,600",
          ],
          conclusion:
            "The relevant cost of the machine time is the $600 opportunity cost of lost contribution; with the $2,000 incremental cash costs, the total relevant cost of the order is $2,600.",
          markingNotes: [
            "Opportunity cost of scarce machine time included ($600)",
            "Total relevant cost of $2,600",
          ],
        },
      },
      {
        id: "aspm5-sn2",
        title: "Linear programming",
        testPointIds: ["aspm5-tp2"],
        explanation: [
          "When two or more resources constrain production, linear programming finds the mix that maximises contribution. Formulation is half the marks: define the decision variables (units of each product), express each constraint as an inequality (resource used ≤ resource available), and write the objective function (total contribution to maximise).",
          "With two variables, the feasible region is plotted and the optimal solution lies at one of its vertices; the vertex giving the highest contribution is found by evaluating the objective function at each corner or by sliding the iso-contribution line outward. Simultaneous equations solve the binding constraints at the optimum.",
          "The shadow price of a binding constraint is the extra contribution earned from one additional unit of that resource; it tells management the maximum premium worth paying to relax the constraint. Non-binding (slack) constraints have a zero shadow price.",
        ],
        keyRules: [
          "Formulate: decision variables, constraints, objective function",
          "The optimum lies at a vertex of the feasible region",
          "Shadow price = extra contribution from one more unit of a binding constraint",
        ],
      },
      {
        id: "aspm5-sn3",
        title: "Pricing decisions",
        testPointIds: ["aspm5-tp3"],
        explanation: [
          "Pricing combines cost information with market strategy. Price skimming sets a high initial price to exploit early, less price-sensitive demand (useful for innovative products), while penetration pricing sets a low price to build market share quickly and deter entrants. Cost-plus pricing adds a margin to cost — simple but it ignores demand and competitor prices.",
          "Where the demand relationship is known, the profit-maximising price can be found. Using a linear demand function (price = a − bQ), marginal revenue is derived and set equal to marginal cost, because profit is maximised where marginal revenue equals marginal cost.",
          "The best strategy depends on the product's position in its lifecycle, the elasticity of demand and the competitive situation. The exam rewards matching the strategy to the scenario and, where data allow, computing the optimal price.",
        ],
        keyRules: [
          "Skimming (high initial price) vs penetration (low to gain share)",
          "Cost-plus ignores demand",
          "Profit maximised where marginal revenue = marginal cost",
        ],
      },
      {
        id: "aspm5-sn4",
        title: "Risk and uncertainty",
        testPointIds: ["aspm5-tp4"],
        explanation: [
          "Risk exists where probabilities are known and uncertainty where they are not. Expected value multiplies each outcome by its probability and sums, giving a long-run average — useful for repeated decisions but blind to the decision-maker's risk attitude and the spread of outcomes, so its limitations should be noted.",
          "Where probabilities are unknown, decision criteria capture attitudes: maximax selects the option with the best possible outcome (optimist), maximin the option with the best worst-case (pessimist), and minimax regret minimises the maximum opportunity loss. Building the payoff table (and the regret table for minimax regret) first is essential.",
          "Information has value because it can change a decision. The expected value of perfect information equals the expected value achievable with perfect foresight minus the expected value of the best decision without it. Decision trees roll expected values back from right to left to identify the optimal sequence of decisions.",
        ],
        keyRules: [
          "Expected value = Σ(probability × outcome), ignores risk attitude",
          "Maximax optimist; maximin pessimist; minimax regret minimises max regret",
          "Value of perfect information = EV with − EV without",
        ],
      },
    ],
    examPractice: [
      {
        id: "aspm5-ep1",
        testPointIds: ["aspm5-tp4"],
        style: "Section B — expected value",
        question:
          "A project's profit is $100,000 with probability 0.6 and −$40,000 with probability 0.4. Calculate the expected value and state one limitation of using it.",
        answerPlan: [
          "Compute EV",
          "State a limitation",
        ],
        modelAnswer:
          "Expected value = (0.6 × $100,000) + (0.4 × −$40,000) = $60,000 − $16,000 = $44,000. A limitation is that the expected value ignores the decision-maker's risk attitude and the spread of outcomes — here there is a 40% chance of a loss — so it may not reflect the actual risk appetite, especially for a one-off decision.",
        markingGuide: [
          "1 mark: expected value of $44,000",
          "1 mark: valid limitation (ignores risk attitude/one-off nature)",
        ],
      },
      {
        id: "aspm5-ep2",
        testPointIds: ["aspm5-tp1"],
        style: "Section C — make or buy",
        question:
          "A component can be made in-house for a variable cost of $18 (materials $10, labour $8) or bought for $16. Labour is not otherwise employed and would be idle if the component is bought. Should the company make or buy?",
        answerPlan: [
          "Identify relevant make cost",
          "Consider whether labour is avoidable",
          "Compare and recommend",
        ],
        modelAnswer:
          "If the labour would be idle and paid anyway when buying, the labour cost is not saved by buying, so it is not relevant to the comparison. The relevant cost of making is then just the material cost of $10 (the labour is incurred either way). Buying costs $16. Since making saves the $16 buy-in price for only $10 of avoidable material cost, the company should make the component, saving $6 per unit.",
        markingGuide: [
          "1 mark: recognition that unavoidable labour cost is not relevant",
          "1 mark: correct recommendation to make (saving $6)",
        ],
      },
      {
        id: "aspm5-ep3",
        testPointIds: ["aspm5-tp2"],
        style: "Section B — linear programming",
        question:
          "Explain what a shadow price represents in a linear programming solution and how management would use it.",
        answerPlan: [
          "Define shadow price",
          "State the management use",
        ],
        modelAnswer:
          "A shadow price is the additional contribution that would be earned from having one more unit of a binding (scarce) resource, holding everything else constant. Management uses it to decide the maximum premium worth paying to obtain extra units of that resource — for example, the most it should pay for additional machine hours or material — because paying up to the shadow price still increases total contribution.",
        markingGuide: [
          "1 mark: shadow price defined as extra contribution from one more unit of a binding constraint",
          "1 mark: management use (maximum premium to relax the constraint)",
        ],
      },
    ],
  }),

  "acca-applied-skills-m6": examDepth({
    testPoints: [
      {
        id: "aspm6-tp1",
        title: "Budgeting systems and behaviour",
        priority: "high",
        examinerFocus:
          "Selecting and evaluating budgeting approaches and understanding their behavioural effects.",
        typicalQuestionForms: [
          "Item on incremental, zero-based, activity-based, rolling or beyond-budgeting approaches",
          "Item on participation, budgetary slack or dysfunctional budget behaviour",
        ],
        mustKnow: [
          "Budgeting approaches and when each is appropriate",
          "Participation (bottom-up) can improve buy-in but risks budgetary slack",
          "Fixed vs flexible budgets and the purpose of flexing",
        ],
        scoringActions: [
          "Match the approach to the organisation's needs",
          "Explain the behavioural effect of the chosen approach",
        ],
      },
      {
        id: "aspm6-tp2",
        title: "Quantitative analysis and the learning curve",
        priority: "high",
        examinerFocus:
          "Applying the learning curve to budgets and standards.",
        typicalQuestionForms: [
          "Item computing cumulative or incremental time/cost using the learning curve",
          "Item on when the learning curve applies and its effect on budgets",
        ],
        mustKnow: [
          "Learning curve: y = ax^b, where b = log r / log 2",
          "Cumulative average time falls by a constant % each time output doubles",
          "The learning effect ends at a steady state",
        ],
        scoringActions: [
          "Use the correct learning index b",
          "Compute incremental time as the difference between cumulative totals",
        ],
      },
      {
        id: "aspm6-tp3",
        title: "Standard costing and basic variances",
        priority: "critical",
        examinerFocus:
          "Computing and reconciling material, labour, overhead and sales variances.",
        typicalQuestionForms: [
          "Item computing a specific variance or an operating statement reconciliation",
          "Item on fixed overhead expenditure, volume, capacity and efficiency variances",
        ],
        mustKnow: [
          "Material/labour price/rate and usage/efficiency variances",
          "Fixed overhead: expenditure, volume, capacity and efficiency variances (absorption)",
          "Sales price and sales volume (contribution or profit) variances",
        ],
        scoringActions: [
          "Flex the budget and use standard quantity for actual output",
          "Sign each variance F or A and reconcile to actual",
        ],
      },
      {
        id: "aspm6-tp4",
        title: "Advanced variances: mix, yield and planning/operational",
        priority: "critical",
        examinerFocus:
          "Computing and interpreting mix and yield variances and separating planning from operational variances.",
        typicalQuestionForms: [
          "Item computing materials mix and yield or sales mix and quantity variances",
          "Item splitting a variance into planning and operational elements",
        ],
        mustKnow: [
          "Mix variance holds total quantity constant; yield holds mix constant",
          "Planning variances use a revised (ex-post) standard; operational variances measure controllable performance",
          "Interpretation of what the variances reveal for management",
        ],
        scoringActions: [
          "Compute mix and yield consistently (mix then yield)",
          "Interpret whether a variance is a planning error or operational",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; variance analysis rewards accurate calculation plus interpretation for the constructed-response marks.",
      timeBudget:
        "Within the 3-hour PM CBE, ~1.8 minutes per mark; give Section C variance reconciliations a clear operating-statement layout.",
      answerSequence: [
        "Bank Section A/B variance items first",
        "In Section C, compute variances and reconcile, then interpret",
        "Return to flagged items before the end",
      ],
      qualityChecks: [
        "Confirm variances are signed F/A and reconcile to actual",
        "Check mix and yield are computed consistently",
      ],
    },
    studyNotes: [
      {
        id: "aspm6-sn1",
        title: "Budgeting systems and behaviour",
        testPointIds: ["aspm6-tp1"],
        explanation: [
          "PM examines budgeting approaches critically. Incremental budgeting adjusts last year's figures and is simple but perpetuates inefficiency; zero-based budgeting justifies every item from scratch, improving resource allocation at higher cost; activity-based budgeting builds budgets from activities and cost drivers; and rolling budgets are continuously updated to stay relevant in volatile conditions.",
          "Behavioural effects matter. Participative (bottom-up) budgeting can improve motivation and the accuracy of estimates, but it risks budgetary slack — managers building in easy targets. Imposed (top-down) budgets are quicker but may demotivate. The style should fit the organisation and its people.",
          "Flexible budgeting remains essential for control: the budget must be flexed to actual activity before comparison, or a volume effect will contaminate the variances. The exam tests both the choice of approach and its consequences.",
        ],
        keyRules: [
          "Approaches: incremental, zero-based, activity-based, rolling",
          "Participation improves buy-in but risks budgetary slack",
          "Flex the budget to actual activity before comparing",
        ],
      },
      {
        id: "aspm6-sn2",
        title: "The learning curve",
        testPointIds: ["aspm6-tp2"],
        explanation: [
          "The learning curve models how the cumulative average time per unit falls by a constant percentage each time cumulative output doubles, because workers become more efficient with practice. It is expressed as y = ax^b, where y is the cumulative average time per unit, a is the time for the first unit, x is the cumulative number of units, and b is the learning index (b = log r / log 2, with r the learning rate).",
          "It matters most for labour-intensive, novel production, and it feeds directly into budgets, standard costs and pricing, since early units take much longer than later ones. Incremental time for a batch is found as the difference between cumulative total times.",
          "The learning effect does not continue indefinitely; once workers reach maximum efficiency, a steady state is reached and the time per unit stabilises. The exam tests both the calculation and the recognition of when the curve applies.",
        ],
        keyRules: [
          "y = ax^b, with b = log r / log 2",
          "Cumulative average time falls by a constant % as output doubles",
          "Incremental time = difference in cumulative totals; ends at steady state",
        ],
        workedProblem: {
          scenario:
            "The first unit takes 100 hours and an 80% learning curve applies. How long, on average, will the first 2 units take per unit, and what is the total time for 2 units?",
          steps: [
            "At an 80% curve, doubling output cuts the cumulative average to 80% of the previous",
            "Cumulative average for 2 units = 100 × 80% = 80 hours per unit",
            "Total for 2 units = 2 × 80 = 160 hours (so the second unit took 60 hours)",
          ],
          conclusion:
            "The cumulative average for the first 2 units is 80 hours each, a total of 160 hours; the second unit alone took only 60 hours, illustrating the learning effect.",
          markingNotes: [
            "80% applied to the cumulative average",
            "Total of 160 hours (and second unit 60 hours) derived",
          ],
        },
      },
      {
        id: "aspm6-sn3",
        title: "Standard costing and variance reconciliation",
        testPointIds: ["aspm6-tp3"],
        explanation: [
          "Variances compare the flexed standard cost of actual output with actual results. Material and labour variances split into price/rate (on the actual quantity/hours) and usage/efficiency (the standard quantity for actual output versus actual, at standard price/rate). Getting the 'standard quantity for actual output' right is critical.",
          "Fixed overhead variances differ under absorption costing: the expenditure variance compares budgeted with actual fixed overhead, and the volume variance (further split into capacity and efficiency) measures over- or under-absorption from producing more or fewer units than budgeted. Under marginal costing only the expenditure variance arises.",
          "Sales variances complete the picture: the sales price variance measures the effect of selling at a different price, and the sales volume variance measures the effect of selling a different quantity (valued at standard contribution or profit). An operating statement reconciles budgeted to actual profit through all the variances.",
        ],
        keyRules: [
          "Usage/efficiency use the standard quantity for actual output",
          "Fixed overhead (absorption): expenditure, volume, capacity, efficiency",
          "Sales price and sales volume variances reconcile budget to actual",
        ],
      },
      {
        id: "aspm6-sn4",
        title: "Advanced variances",
        testPointIds: ["aspm6-tp4"],
        explanation: [
          "Where inputs are substitutable, the materials usage variance can be split into a mix variance and a yield variance. The mix variance measures the effect of using inputs in different proportions than standard (holding total quantity constant), and the yield variance measures the effect of getting more or less output from the total input (holding the mix constant). Sales volume can similarly split into mix and quantity variances.",
          "Planning and operational variances separate uncontrollable forecasting errors from controllable performance. A planning variance arises because the original standard was wrong and is revised to an ex-post standard; the operational variance then measures performance against that realistic standard, which is what managers can actually control.",
          "Interpretation is where the constructed-response marks lie. A favourable mix variance with an adverse yield variance, for example, may show that a cheaper input mix reduced output quality — the examiner rewards explaining the story behind the numbers.",
        ],
        keyRules: [
          "Mix variance holds total quantity constant; yield holds mix constant",
          "Planning variance = revised standard; operational = controllable performance",
          "Interpret the cause-and-effect behind the variances",
        ],
      },
    ],
    examPractice: [
      {
        id: "aspm6-ep1",
        testPointIds: ["aspm6-tp3"],
        style: "Section C — fixed overhead variance",
        question:
          "Budgeted fixed overhead is $100,000 for 10,000 units. Actual fixed overhead was $105,000 and actual production was 11,000 units. Calculate the fixed overhead expenditure and volume variances (absorption costing).",
        answerPlan: [
          "Expenditure variance = budget − actual",
          "Volume variance from the OAR and volume difference",
        ],
        modelAnswer:
          "Fixed overhead absorption rate = $100,000 / 10,000 = $10 per unit. Expenditure variance = budgeted $100,000 − actual $105,000 = $5,000 A. Volume variance = (actual 11,000 − budgeted 10,000 units) × $10 = $10,000 F (more units absorbed more overhead than budgeted).",
        markingGuide: [
          "1 mark: expenditure variance $5,000 A",
          "1 mark: volume variance $10,000 F",
        ],
      },
      {
        id: "aspm6-ep2",
        testPointIds: ["aspm6-tp2"],
        style: "Section B — learning curve",
        question:
          "Under a 90% learning curve, the first unit takes 200 hours. What is the cumulative average time per unit for the first 2 units?",
        answerPlan: [
          "Apply the learning rate to doubling output",
        ],
        modelAnswer:
          "With a 90% learning curve, doubling cumulative output reduces the cumulative average time to 90% of the previous level. For the first 2 units, cumulative average = 200 × 90% = 180 hours per unit.",
        markingGuide: [
          "1 mark: 90% applied to the cumulative average",
          "1 mark: 180 hours per unit",
        ],
      },
      {
        id: "aspm6-ep3",
        testPointIds: ["aspm6-tp4"],
        style: "Section C — planning vs operational",
        question:
          "The original material standard was $5/kg, but the market price rose to $6/kg due to an unforeseen shortage; the firm actually paid $6.20/kg. Explain how the total price variance would be split into planning and operational elements.",
        answerPlan: [
          "Identify the revised (ex-post) standard",
          "Split into planning and operational",
        ],
        modelAnswer:
          "The revised (ex-post) standard is $6/kg, reflecting the unforeseen market shift. The planning variance is the difference between the original standard ($5) and the revised standard ($6) — an uncontrollable $1/kg adverse planning variance caused by the forecasting error. The operational variance is the difference between the revised standard ($6) and the actual price ($6.20) — a controllable $0.20/kg adverse operational variance measuring the buyer's performance against a realistic price.",
        markingGuide: [
          "1 mark: planning variance ($5 to $6) identified as uncontrollable",
          "1 mark: operational variance ($6 to $6.20) identified as controllable",
        ],
      },
    ],
  }),

  "acca-applied-skills-m7": examDepth({
    testPoints: [
      {
        id: "aspm7-tp1",
        title: "Financial and non-financial performance indicators",
        priority: "critical",
        examinerFocus:
          "Analysing performance with a mix of financial and non-financial measures and reaching a conclusion.",
        typicalQuestionForms: [
          "Section C performance appraisal using ratios and non-financial measures",
          "Item on the balanced scorecard or the limitations of financial measures",
        ],
        mustKnow: [
          "Financial ratios: profitability, liquidity, efficiency, gearing",
          "Non-financial indicators: quality, delivery, customer satisfaction, innovation",
          "Balanced scorecard: financial, customer, internal process, learning and growth",
        ],
        scoringActions: [
          "Lead with interpretation tied to the scenario's objectives",
          "Blend financial and non-financial evidence before concluding",
        ],
      },
      {
        id: "aspm7-tp2",
        title: "Divisional performance: ROI and residual income",
        priority: "critical",
        examinerFocus:
          "Calculating and evaluating ROI and residual income and their behavioural effects.",
        typicalQuestionForms: [
          "Item computing ROI/RI and assessing a project decision",
          "Item on the behavioural drawbacks of ROI",
        ],
        mustKnow: [
          "ROI = controllable profit / controllable investment; RI = controllable profit − (investment × cost of capital)",
          "ROI can cause dysfunctional rejection of good projects; RI aligns better with value",
          "Controllability principle in divisional assessment",
        ],
        scoringActions: [
          "Interpret the behavioural consequence, not just the figure",
          "Assess projects against the cost of capital, not the current ROI",
        ],
      },
      {
        id: "aspm7-tp3",
        title: "Transfer pricing",
        priority: "high",
        examinerFocus:
          "Setting transfer prices that promote goal congruence between divisions and the group.",
        typicalQuestionForms: [
          "Item recommending a transfer price and its effect on divisional/group profit",
          "Item on the minimum and maximum transfer price",
        ],
        mustKnow: [
          "Minimum transfer price = marginal cost (+ opportunity cost if capacity is constrained)",
          "Maximum transfer price = the lower of external market price and net marginal revenue",
          "A price in the range preserves goal congruence",
        ],
        scoringActions: [
          "Compute the acceptable transfer-price range",
          "Explain the goal-congruence effect",
        ],
      },
      {
        id: "aspm7-tp4",
        title: "Not-for-profit performance and corporate failure",
        priority: "medium",
        examinerFocus:
          "Applying value-for-money analysis in not-for-profit contexts and using failure-prediction models.",
        typicalQuestionForms: [
          "Item on economy, efficiency and effectiveness in a not-for-profit body",
          "Item on the difficulties of measuring not-for-profit performance",
        ],
        mustKnow: [
          "Value for money: economy (inputs at least cost), efficiency (output/input), effectiveness (objectives met)",
          "Not-for-profit objectives are non-financial and harder to measure",
          "Limitations of purely financial measures for such bodies",
        ],
        scoringActions: [
          "Structure not-for-profit analysis around the three Es",
          "Acknowledge measurement difficulties",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; performance questions reward interpretation and recommendations over raw calculation.",
      timeBudget:
        "Within the 3-hour PM CBE, ~1.8 minutes per mark; protect time to write interpretation in Section C.",
      answerSequence: [
        "Bank Section A/B objective items first",
        "In Section C, calculate then interpret and recommend",
        "Return to flagged items before the end",
      ],
      qualityChecks: [
        "Confirm every measure is interpreted, not just computed",
        "Check divisional decisions are judged against the cost of capital",
      ],
    },
    studyNotes: [
      {
        id: "aspm7-sn1",
        title: "Financial and non-financial performance",
        testPointIds: ["aspm7-tp1"],
        explanation: [
          "Performance appraisal in PM combines financial ratios with non-financial measures. Financial ratios (profitability, liquidity, efficiency and gearing) reveal the financial outcome, but they are backward-looking and can be manipulated. Non-financial indicators — quality, on-time delivery, customer satisfaction and innovation — capture the drivers of future performance and are harder to game.",
          "The balanced scorecard structures this by viewing performance through four perspectives: financial, customer, internal business process, and learning and growth, linked by cause and effect. The exam rewards designing measures relevant to the specific organisation and its objectives rather than reciting generic examples.",
          "The key skill is interpretation and judgement: relating each measure to the scenario, explaining what movements mean, and reaching a supported conclusion about performance. Calculations alone earn few of the available marks.",
        ],
        keyRules: [
          "Combine financial ratios with non-financial measures",
          "Balanced scorecard: financial, customer, internal process, learning and growth",
          "Lead with interpretation linked to the scenario",
        ],
      },
      {
        id: "aspm7-sn2",
        title: "Divisional performance: ROI and RI",
        testPointIds: ["aspm7-tp2"],
        explanation: [
          "Divisional performance is commonly measured by return on investment (controllable profit divided by controllable investment) and residual income (controllable profit less an imputed interest charge on the investment at the cost of capital). ROI is a percentage that permits comparison between divisions of different sizes.",
          "ROI has a serious behavioural flaw: a manager rewarded on ROI may reject a project that earns above the cost of capital but below the division's current ROI, because it would lower the average — a dysfunctional decision that harms the group. Residual income avoids this by rewarding any project that earns more than the cost of capital, so it is more goal-congruent.",
          "Assessment should follow the controllability principle: managers should be judged on profit and investment they can influence. The exam typically asks you to compute both measures and to explain the conflict they can produce over a marginal project.",
        ],
        keyRules: [
          "ROI = controllable profit / controllable investment",
          "RI = controllable profit − (investment × cost of capital)",
          "RI is more goal-congruent than ROI for project decisions",
        ],
        workedProblem: {
          scenario:
            "A division earns $300,000 controllable profit on $1.5m controllable investment; the cost of capital is 12%. Should it accept a project earning 14% on $500,000? Use ROI and RI to advise.",
          steps: [
            "Current ROI = $300,000 / $1,500,000 = 20%; project ROI 14% is below this",
            "RI test: project earns 14% > 12% cost of capital, adding $500,000 × (14% − 12%) = $10,000 RI",
            "ROI-focused manager rejects (lowers average to below 20%); RI-focused accepts",
          ],
          conclusion:
            "On RI the project should be accepted because it earns above the 12% cost of capital and adds $10,000 of residual income, but an ROI-based manager might reject it because 14% is below the current 20% ROI — illustrating RI's better goal congruence.",
          markingNotes: [
            "Correct identification of the ROI/RI conflict",
            "RI recommendation to accept, with the $10,000 benefit",
          ],
        },
      },
      {
        id: "aspm7-sn3",
        title: "Transfer pricing",
        testPointIds: ["aspm7-tp3"],
        explanation: [
          "Transfer pricing sets the internal price for goods or services moved between divisions. A poorly set price causes dysfunctional decisions where a division optimises its own profit at the group's expense. The goal is a price that makes divisional decisions align with the group's interest (goal congruence).",
          "The acceptable range has a floor and a ceiling. The minimum the supplying division should accept is its marginal cost plus any opportunity cost of lost external sales when capacity is constrained; if it has spare capacity, the floor is simply marginal cost. The maximum the receiving division will pay is the external market price (or its net marginal revenue if lower).",
          "A transfer price set within this range allows both divisions to benefit and keeps decisions aligned with the group. The exam asks you to compute the range and to recommend a price, explaining its effect on divisional and group profit.",
        ],
        keyRules: [
          "Minimum = marginal cost (+ opportunity cost if capacity is constrained)",
          "Maximum = external market price (or net marginal revenue if lower)",
          "A price within the range preserves goal congruence",
        ],
      },
      {
        id: "aspm7-sn4",
        title: "Not-for-profit performance and failure prediction",
        testPointIds: ["aspm7-tp4"],
        explanation: [
          "Not-for-profit and public-sector bodies have non-financial objectives, so profit-based measures do not apply directly. Performance is assessed through value for money — economy (obtaining inputs at least cost), efficiency (maximising output per unit of input) and effectiveness (achieving the intended objectives). The three Es structure the analysis.",
          "Measuring not-for-profit performance is genuinely difficult because objectives are often qualitative (better health, education or welfare), outputs are hard to quantify, and multiple stakeholders have conflicting expectations. The exam rewards recognising these difficulties as well as applying the three Es.",
          "Corporate failure prediction, using models that combine financial ratios into a single score, provides an early warning of insolvency risk, though it relies on historical data and has limitations. Together, these topics broaden performance analysis beyond the profit-seeking firm.",
        ],
        keyRules: [
          "Value for money: economy, efficiency, effectiveness",
          "Not-for-profit objectives are non-financial and hard to measure",
          "Failure models are early warnings with limitations",
        ],
      },
    ],
    examPractice: [
      {
        id: "aspm7-ep1",
        testPointIds: ["aspm7-tp3"],
        style: "Section C — transfer pricing",
        question:
          "Division A makes a component at a marginal cost of $30 and has spare capacity. Division B can buy the component externally for $45. What is the acceptable transfer-price range, and why does it promote goal congruence?",
        answerPlan: [
          "Determine the minimum and maximum",
          "Explain goal congruence",
        ],
        modelAnswer:
          "With spare capacity, Division A's minimum acceptable price is its marginal cost of $30 (no opportunity cost). Division B's maximum is the external price of $45. The acceptable range is therefore $30 to $45. Any price in this range benefits both divisions relative to buying/selling externally, so both will choose to trade internally — the decision that is also best for the group, since making internally at $30 marginal cost is cheaper than the group paying $45 outside.",
        markingGuide: [
          "1 mark: range of $30 to $45 correctly derived",
          "1 mark: goal-congruence explanation",
        ],
      },
      {
        id: "aspm7-ep2",
        testPointIds: ["aspm7-tp2"],
        style: "Section B — ROI",
        question:
          "A division has controllable profit of $150,000 and controllable investment of $1,000,000. Calculate its ROI and explain one reason a manager rewarded on ROI might reject a project earning 13% when the cost of capital is 10%.",
        answerPlan: [
          "Compute ROI",
          "Explain the dysfunctional behaviour",
        ],
        modelAnswer:
          "ROI = $150,000 / $1,000,000 = 15%. A manager rewarded on ROI might reject a project earning 13% because, although 13% exceeds the 10% cost of capital and would add value, it is below the division's current 15% ROI and would therefore reduce the division's average ROI — a dysfunctional decision that harms the group but protects the manager's measured performance.",
        markingGuide: [
          "1 mark: ROI of 15%",
          "1 mark: dysfunctional rejection explained",
        ],
      },
      {
        id: "aspm7-ep3",
        testPointIds: ["aspm7-tp4"],
        style: "Section B — not-for-profit",
        question:
          "Explain how the 'three Es' would be used to assess the performance of a public hospital, giving one example measure for each.",
        answerPlan: [
          "Define each E with a measure",
        ],
        modelAnswer:
          "Economy assesses whether inputs are obtained at least cost — for example, the cost per unit of medical supplies procured. Efficiency assesses output per input — for example, the number of patients treated per doctor or per bed. Effectiveness assesses whether objectives are met — for example, patient recovery rates or waiting-time targets. Together they capture value for money where profit is not the objective.",
        markingGuide: [
          "1 mark: economy and efficiency defined with example measures",
          "1 mark: effectiveness defined with an example measure",
        ],
      },
    ],
  }),

  "acca-applied-skills-m8": examDepth({
    testPoints: [
      {
        id: "astx8-tp1",
        title: "The UK tax system and income tax computation",
        priority: "critical",
        examinerFocus:
          "Building the income tax computation correctly (UK variant) — the core of this module — with the personal allowance and rate bands.",
        typicalQuestionForms: [
          "Section C income tax computation pooling non-savings, savings and dividend income",
          "OT item on the personal allowance, abatement, or the order of taxation",
        ],
        mustKnow: [
          "Order of taxation: non-savings, then savings, then dividend income",
          "Personal allowance abated £1 for every £2 of ANI over £100,000",
          "Savings and dividend nil-rate bands applied within the relevant bands",
        ],
        scoringActions: [
          "Lay out the proforma columns before entering figures",
          "Apply the extended basic-rate band for gift aid/pensions",
        ],
      },
      {
        id: "astx8-tp2",
        title: "Employment income and benefits",
        priority: "high",
        examinerFocus:
          "Computing employment income including taxable benefits and allowable deductions.",
        typicalQuestionForms: [
          "Item computing the taxable benefit of a company car, fuel, or accommodation",
          "Item on allowable employment deductions or the distinction from self-employment",
        ],
        mustKnow: [
          "Employment income is taxed on the receipts basis; benefits are added",
          "Company car benefit based on list price and CO2 emissions; fuel benefit separately",
          "Allowable deductions are limited (wholly, exclusively and necessarily)",
        ],
        scoringActions: [
          "Use the correct benefit rules from the tax tables",
          "Apply the strict deduction test for employment expenses",
        ],
      },
      {
        id: "astx8-tp3",
        title: "Trading income and basis of assessment",
        priority: "high",
        examinerFocus:
          "Adjusting profits for tax and applying the basis of assessment and capital allowances for the self-employed.",
        typicalQuestionForms: [
          "Item adjusting accounting profit (add-backs and deductions)",
          "Item on capital allowances (AIA, WDA) or the basis-period rules",
        ],
        mustKnow: [
          "Adjust profit: add back private/capital/depreciation/entertaining; deduct non-trading income",
          "Capital allowances: AIA, main pool (18%), special rate (6%), balancing adjustments",
          "Basis of assessment for the self-employed",
        ],
        scoringActions: [
          "Start from net profit and justify each adjustment",
          "Show the capital allowances pool workings",
        ],
      },
      {
        id: "astx8-tp4",
        title: "National insurance contributions",
        priority: "medium",
        examinerFocus:
          "Computing NIC for employees, employers and the self-employed.",
        typicalQuestionForms: [
          "Item computing Class 1 (employee/employer) NIC on earnings",
          "Item on Class 2 and Class 4 NIC for the self-employed",
        ],
        mustKnow: [
          "Class 1 primary (employee) and secondary (employer) on earnings above thresholds",
          "Class 1A on benefits paid by employers",
          "Class 2 (flat) and Class 4 (profit-based) for the self-employed",
        ],
        scoringActions: [
          "Use the correct class for the type of income",
          "Apply the thresholds and rates from the tax tables",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; TX rewards clean proformas — method marks accrue even with a single wrong figure, so never abandon a computation.",
      timeBudget:
        "Within the 3-hour TX CBE, ~1.8 minutes per mark; give the Section C income tax computation generous time.",
      answerSequence: [
        "Bank Section A/B OT items on benefits, NIC and adjustments first",
        "Build the Section C income tax computation with the standard proforma",
        "Review that reliefs and bands are applied in order",
      ],
      qualityChecks: [
        "Confirm the personal allowance abatement and nil-rate bands",
        "Check NIC uses the right class and thresholds",
      ],
    },
    studyNotes: [
      {
        id: "astx8-sn1",
        title: "The income tax computation",
        testPointIds: ["astx8-tp1"],
        explanation: [
          "TX (UK variant) centres on the income tax computation. Income is pooled into three columns — non-savings, savings and dividend — because different rates and nil-rate bands apply. Total income less reliefs and the personal allowance gives taxable income; the personal allowance is abated by £1 for every £2 by which adjusted net income exceeds £100,000, so it can be lost entirely at higher incomes.",
          "Tax is charged in a strict order — non-savings income first, then savings, then dividends — each moving up through the rate bands. Gift aid donations and personal pension contributions extend the basic-rate band, pushing income into lower rates, which is a frequent source of marks. The savings and dividend nil-rate bands are applied within the bands, not as deductions from income.",
          "Because ACCA provides tax tables in the exam, candidates use the given rates and thresholds rather than memorised figures, but they must know the structure and order cold. Laying out the standard proforma before entering numbers prevents errors and earns method marks.",
        ],
        keyRules: [
          "Tax non-savings, then savings, then dividend income",
          "Personal allowance abated £1 for every £2 of ANI over £100,000",
          "Gift aid/pensions extend the basic-rate band",
        ],
        workedProblem: {
          scenario:
            "An individual has trading income of £48,000 and dividends of £3,000. Outline how the computation is structured and where the dividend nil-rate band applies.",
          steps: [
            "Column the income: non-savings (trading) £48,000; dividend £3,000",
            "Deduct the personal allowance from non-savings income first",
            "Tax non-savings income, then apply the dividend nil-rate band to the dividends before taxing any excess at the dividend rate",
          ],
          conclusion:
            "Non-savings income is taxed first after the personal allowance; the dividends then use the dividend nil-rate band, with only the excess taxed at the dividend rate — showing why column and band order matter.",
          markingNotes: [
            "Income correctly split into non-savings and dividend columns",
            "Dividend nil-rate band applied, not deducted from income",
          ],
        },
      },
      {
        id: "astx8-sn2",
        title: "Employment income and benefits",
        testPointIds: ["astx8-tp2"],
        explanation: [
          "Employment income is taxed largely on a receipts basis and includes salary, bonuses and taxable benefits in kind. Benefits are valued by specific rules: the company car benefit is a percentage of the car's list price based on its CO2 emissions, with a separate fuel benefit if private fuel is provided; living accommodation and beneficial loans have their own valuation rules.",
          "Allowable deductions from employment income are strictly limited — expenses must generally be incurred wholly, exclusively and necessarily in performing the duties, a tougher test than for the self-employed. Pension contributions and approved mileage are among the reliefs available.",
          "The distinction between employment and self-employment matters because it changes both the tax basis and the NIC class. The badges of trade and status tests decide the question on substance rather than the contract label. The exam commonly requires computing a car or fuel benefit using the tax tables.",
        ],
        keyRules: [
          "Employment income taxed on receipts; benefits added",
          "Car benefit based on list price and CO2; fuel benefit separate",
          "Deductions must be wholly, exclusively and necessarily incurred",
        ],
      },
      {
        id: "astx8-sn3",
        title: "Trading income and capital allowances",
        testPointIds: ["astx8-tp3"],
        explanation: [
          "For the self-employed, taxable trading profit is derived by adjusting the accounting profit. Starting from net profit, add back expenses that are not deductible for tax — private expenditure, capital items, depreciation and most entertaining — and deduct income taxed elsewhere or non-taxable. The result is the tax-adjusted trading profit.",
          "Capital allowances then give tax relief for capital expenditure. The Annual Investment Allowance gives immediate relief up to a cap; expenditure above it enters the main pool (18% writing-down allowance) or the special-rate pool (6%). Balancing allowances or charges arise on disposal, and private-use adjustments apply for unincorporated businesses.",
          "The basis of assessment determines which profits are taxed in which tax year. Showing the adjustment and capital allowances workings clearly earns method marks even if a single figure is wrong, so a structured layout is essential.",
        ],
        keyRules: [
          "Adjust profit: add back private/capital/depreciation/entertaining",
          "Capital allowances: AIA, then WDA (main 18%, special rate 6%)",
          "Show pool workings for method marks",
        ],
      },
      {
        id: "astx8-sn4",
        title: "National insurance contributions",
        testPointIds: ["astx8-tp4"],
        explanation: [
          "National insurance runs alongside income tax. Employees pay Class 1 primary contributions on earnings above a threshold, and employers pay Class 1 secondary contributions on the same earnings; employers also pay Class 1A on most taxable benefits they provide.",
          "The self-employed pay Class 2 (a flat weekly amount, subject to a small-profits threshold) and Class 4 (a percentage of profits between thresholds). Using the correct class for the type of income is essential — employee earnings attract Class 1, self-employed profits attract Class 2 and 4.",
          "As with income tax, the rates and thresholds are provided in the exam tax tables, so candidates apply them rather than memorising the figures. The exam tests both computation and knowing which class applies to which income.",
        ],
        keyRules: [
          "Class 1 primary (employee) and secondary (employer) on earnings",
          "Class 1A on employer-provided benefits",
          "Self-employed pay Class 2 (flat) and Class 4 (profit-based)",
        ],
      },
    ],
    examPractice: [
      {
        id: "astx8-ep1",
        testPointIds: ["astx8-tp1"],
        style: "Section C — personal allowance",
        question:
          "An individual has adjusted net income of £120,000. Calculate how much of the £12,570 personal allowance they retain.",
        answerPlan: [
          "Excess over £100,000",
          "Reduce £1 per £2",
        ],
        modelAnswer:
          "Excess over £100,000 = £20,000. Personal allowance is reduced by £1 for every £2 of excess: £20,000 / 2 = £10,000. Retained personal allowance = £12,570 − £10,000 = £2,570.",
        markingGuide: [
          "1 mark: abatement of £10,000",
          "1 mark: retained allowance of £2,570",
        ],
      },
      {
        id: "astx8-ep2",
        testPointIds: ["astx8-tp3"],
        style: "Section C — adjustment of profit",
        question:
          "A trader's net profit is £70,000 after charging depreciation £5,000 and private use of goods £1,000, and after crediting bank interest £400. Calculate the tax-adjusted trading profit before capital allowances.",
        answerPlan: [
          "Add back disallowables",
          "Deduct non-trading income",
        ],
        modelAnswer:
          "Start with net profit £70,000. Add back depreciation £5,000 and private use of goods £1,000 (disallowable). Deduct bank interest £400 (taxed as savings income). Tax-adjusted trading profit = £70,000 + £5,000 + £1,000 − £400 = £75,600 before capital allowances.",
        markingGuide: [
          "1 mark: correct add-backs",
          "1 mark: interest deducted and £75,600 result",
        ],
      },
      {
        id: "astx8-ep3",
        testPointIds: ["astx8-tp4"],
        style: "Section B — NIC",
        question:
          "State which class of national insurance an employer pays on (a) an employee's salary and (b) a taxable benefit provided to that employee.",
        answerPlan: [
          "Match each to the correct class",
        ],
        modelAnswer:
          "On the employee's salary the employer pays Class 1 secondary national insurance contributions. On the taxable benefit provided to the employee, the employer pays Class 1A national insurance contributions.",
        markingGuide: [
          "1 mark: Class 1 secondary on salary",
          "1 mark: Class 1A on the benefit",
        ],
      },
    ],
  }),

  "acca-applied-skills-m9": examDepth({
    testPoints: [
      {
        id: "astx9-tp1",
        title: "Corporation tax computation",
        priority: "critical",
        examinerFocus:
          "Computing a company's taxable total profits and corporation tax (UK variant) — the core of this module.",
        typicalQuestionForms: [
          "Section C corporation tax computation with trading profit, property income, interest and gains",
          "OT item on the accounting period, augmented profits, or the corporation tax rate(s)",
        ],
        mustKnow: [
          "Taxable total profits = trading income (after capital allowances) + property + interest + gains",
          "Corporation tax charged for the accounting period at the prevailing rate(s)",
          "Adjust trading profit and claim capital allowances as for the self-employed but company rules",
        ],
        scoringActions: [
          "Keep income and gains in separate workings before aggregating",
          "Show capital allowances and adjustments clearly",
        ],
      },
      {
        id: "astx9-tp2",
        title: "Capital allowances for companies",
        priority: "high",
        examinerFocus:
          "Computing capital allowances (AIA, WDA, special rate, balancing adjustments) for a company.",
        typicalQuestionForms: [
          "Item computing the capital allowances claim for a period",
          "Item on a balancing allowance or charge on disposal",
        ],
        mustKnow: [
          "AIA on qualifying expenditure; main pool 18% WDA, special-rate pool 6% WDA",
          "Balancing allowance/charge when a pool ends or an asset is disposed",
          "Additions and disposals adjust the pool before the WDA",
        ],
        scoringActions: [
          "Add additions and remove disposals before the WDA",
          "Recognise when a balancing adjustment arises",
        ],
      },
      {
        id: "astx9-tp3",
        title: "Loss relief for companies",
        priority: "high",
        examinerFocus:
          "Applying and choosing between the loss-relief options for a company.",
        typicalQuestionForms: [
          "Item on carrying a trading loss back, against current-year profits, or forward",
          "Item on the timing choice to maximise relief or cash flow",
        ],
        mustKnow: [
          "Options: current-year set-off against total profits, carry back, carry forward",
          "The choice affects the tax saved and the timing of the saving",
          "Losses set against total profits before qualifying donations",
        ],
        scoringActions: [
          "Identify all available loss-relief routes",
          "Recommend the timing that maximises relief/cash flow",
        ],
      },
      {
        id: "astx9-tp4",
        title: "Chargeable gains (companies and individuals)",
        priority: "critical",
        examinerFocus:
          "Computing chargeable gains including reliefs and the annual exempt amount for individuals.",
        typicalQuestionForms: [
          "Item computing a gain with cost, enhancement and reliefs",
          "Item on share matching rules or the annual exempt amount (individuals only)",
        ],
        mustKnow: [
          "Gain = proceeds − cost − enhancement; reliefs where relevant",
          "The annual exempt amount applies to individuals, not companies",
          "Share matching rules and pooling as per the variant syllabus",
        ],
        scoringActions: [
          "Apply the annual exempt amount only to individuals",
          "Use the correct share matching order",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; corporation tax rewards a clean computation where method marks accrue from clear, ordered workings.",
      timeBudget:
        "Within the 3-hour TX CBE, ~1.8 minutes per mark; give the Section C corporation tax computation generous time.",
      answerSequence: [
        "Bank Section A/B OT items on capital allowances, losses and gains first",
        "Build the Section C corporation tax computation with a proforma",
        "Review that reliefs and allowances are correctly applied",
      ],
      qualityChecks: [
        "Confirm the annual exempt amount is not applied to a company",
        "Check capital allowance pools and balancing adjustments",
      ],
    },
    studyNotes: [
      {
        id: "astx9-sn1",
        title: "The corporation tax computation",
        testPointIds: ["astx9-tp1"],
        explanation: [
          "A company's corporation tax is charged on its taxable total profits for an accounting period. These aggregate the tax-adjusted trading income (after capital allowances), property income, non-trading interest income, and chargeable gains. The computation is built by preparing each source separately and then bringing them together.",
          "Trading profit is adjusted as for the self-employed — adding back disallowable expenses such as depreciation and deducting non-trading income — before capital allowances are claimed. Property income and interest are computed under their own rules, and chargeable gains are added.",
          "Corporation tax is then charged at the prevailing rate(s) for the period. Keeping income and gains in separate workings before aggregating, and showing all adjustments, ensures method marks are earned even if a single figure is wrong.",
        ],
        keyRules: [
          "Taxable total profits = trading + property + interest + gains",
          "Adjust trading profit and claim capital allowances first",
          "Charge corporation tax for the accounting period",
        ],
        workedProblem: {
          scenario:
            "A company has tax-adjusted trading profit of £200,000 (after capital allowances), property income of £30,000, and a chargeable gain of £20,000. Compute taxable total profits (ignore donations).",
          steps: [
            "Trading income = £200,000",
            "Add property income £30,000 and chargeable gain £20,000",
            "Taxable total profits = £200,000 + £30,000 + £20,000 = £250,000",
          ],
          conclusion:
            "Taxable total profits are £250,000, to which the corporation tax rate for the period is applied; each source was computed separately before aggregation.",
          markingNotes: [
            "Sources correctly aggregated",
            "Taxable total profits of £250,000",
          ],
        },
      },
      {
        id: "astx9-sn2",
        title: "Capital allowances for companies",
        testPointIds: ["astx9-tp2"],
        explanation: [
          "Capital allowances give companies tax relief for capital expenditure in place of non-deductible depreciation. The Annual Investment Allowance gives immediate 100% relief on qualifying plant and machinery up to a cap. Expenditure above the cap enters the main pool, which attracts an 18% writing-down allowance on the reducing balance, or the special-rate pool, which attracts 6%.",
          "Each period, additions are added and disposals removed (at the lower of cost and proceeds) before the writing-down allowance is calculated on the balance. A balancing allowance or charge arises when a pool closes or, for certain assets, on disposal, to true up the total relief given to the actual net cost.",
          "The exam requires clear pool workings showing additions, AIA, disposals and the WDA. A methodical layout secures marks and makes errors easy to spot and correct.",
        ],
        keyRules: [
          "AIA (immediate), then WDA: main pool 18%, special rate 6%",
          "Add additions, remove disposals before the WDA",
          "Balancing adjustments true up total relief on disposal/closure",
        ],
      },
      {
        id: "astx9-sn3",
        title: "Loss relief for companies",
        testPointIds: ["astx9-tp3"],
        explanation: [
          "When a company makes a trading loss, several relief routes are available and the choice affects the tax saved and its timing. The loss can be set against total profits of the current accounting period, carried back against total profits of the previous period, or carried forward against future profits under the relevant rules.",
          "The timing choice matters. Relieving a loss sooner improves cash flow, but relieving it against profits taxed at a higher rate, or preserving other reliefs, may save more tax overall. The examiner rewards identifying all the options and recommending the one that best meets the company's objective.",
          "Losses are generally set against total profits before qualifying charitable donations, which can mean donations are wasted if a loss is set off in the same period. Recognising these interactions is part of scoring well.",
        ],
        keyRules: [
          "Options: current-year set-off, carry back, carry forward",
          "Timing affects the tax saved and cash flow",
          "Losses set against total profits before qualifying donations",
        ],
      },
      {
        id: "astx9-sn4",
        title: "Chargeable gains",
        testPointIds: ["astx9-tp4"],
        explanation: [
          "A chargeable gain is proceeds less allowable cost and enhancement expenditure. For companies, gains are included in taxable total profits and charged at the corporation tax rate; for individuals, gains are subject to capital gains tax and benefit from the annual exempt amount and reliefs such as business asset disposal relief, which companies do not receive.",
          "Share disposals follow specific matching rules that determine which shares are treated as sold (for individuals, matching same-day and next-30-day acquisitions before the pool). Applying the correct matching order is essential to computing the gain accurately.",
          "A common error is applying the individual's annual exempt amount to a company; it applies only to individuals. The exam tests both the basic gain computation and the correct application of reliefs and matching rules to the taxpayer type.",
        ],
        keyRules: [
          "Gain = proceeds − cost − enhancement",
          "Annual exempt amount applies to individuals, not companies",
          "Apply the correct share matching order",
        ],
      },
    ],
    examPractice: [
      {
        id: "astx9-ep1",
        testPointIds: ["astx9-tp4"],
        style: "Section B — chargeable gain",
        question:
          "An individual sells an asset for £60,000 that cost £15,000, with £5,000 of enhancement expenditure. Assuming an annual exempt amount of £6,000 is fully available, calculate the taxable gain.",
        answerPlan: [
          "Compute the gain",
          "Deduct the annual exempt amount",
        ],
        modelAnswer:
          "Gain = proceeds £60,000 − cost £15,000 − enhancement £5,000 = £40,000. Deduct the annual exempt amount of £6,000 (available because the taxpayer is an individual): taxable gain = £40,000 − £6,000 = £34,000.",
        markingGuide: [
          "1 mark: gain of £40,000",
          "1 mark: annual exempt amount applied, taxable gain £34,000",
        ],
      },
      {
        id: "astx9-ep2",
        testPointIds: ["astx9-tp2"],
        style: "Section C — capital allowances",
        question:
          "A company's main pool has a tax written-down value brought forward of £50,000. It buys plant of £20,000 (assume no AIA remaining) and disposes of an asset for £8,000. Calculate the writing-down allowance at 18%.",
        answerPlan: [
          "Adjust the pool for additions and disposals",
          "Apply the 18% WDA",
        ],
        modelAnswer:
          "Pool = £50,000 brought forward + £20,000 additions − £8,000 disposal = £62,000. Writing-down allowance at 18% = £62,000 × 18% = £11,160. The pool carried forward = £62,000 − £11,160 = £50,840.",
        markingGuide: [
          "1 mark: pool balance of £62,000",
          "1 mark: WDA of £11,160",
        ],
      },
      {
        id: "astx9-ep3",
        testPointIds: ["astx9-tp3"],
        style: "Section B — loss relief",
        question:
          "State the three main ways a company can relieve a current-year trading loss, and one factor influencing the choice.",
        answerPlan: [
          "List the three routes",
          "Give a factor",
        ],
        modelAnswer:
          "A company can (1) set the loss against total profits of the current accounting period, (2) carry it back against total profits of the previous period, or (3) carry it forward against future profits. A key factor influencing the choice is timing/cash flow — relieving the loss sooner (current year or carry back) accelerates the tax saving, but carrying forward may be preferable if future profits will be taxed at a higher rate or to avoid wasting other reliefs.",
        markingGuide: [
          "1 mark: three loss-relief routes stated",
          "1 mark: a valid factor (timing/cash flow/rate)",
        ],
      },
    ],
  }),

  "acca-applied-skills-m10": examDepth({
    testPoints: [
      {
        id: "astx10-tp1",
        title: "Inheritance tax on lifetime transfers and the death estate",
        priority: "high",
        examinerFocus:
          "Computing IHT on lifetime gifts and the death estate using the nil-rate band and reliefs (UK variant).",
        typicalQuestionForms: [
          "Item computing IHT on a lifetime gift becoming chargeable on death",
          "Item computing IHT on the death estate",
        ],
        mustKnow: [
          "Nil-rate band, seven-year cumulation, and taper relief on gifts 3–7 years before death",
          "PETs (tax-free if the donor survives 7 years) vs chargeable lifetime transfers",
          "Exemptions/reliefs: annual, spouse, business/agricultural property relief",
        ],
        scoringActions: [
          "Cumulate the previous seven years' gifts before the nil-rate band",
          "Use taper relief to reduce the tax, not the transfer value",
        ],
      },
      {
        id: "astx10-tp2",
        title: "Value added tax",
        priority: "critical",
        examinerFocus:
          "Applying VAT registration, output/input tax and the tax point to compute VAT payable — a core area of this module.",
        typicalQuestionForms: [
          "Item computing VAT payable, including blocked input tax",
          "OT item on registration/deregistration, the tax point, or supply types",
        ],
        mustKnow: [
          "Registration when taxable supplies exceed the threshold (historic/future test)",
          "Standard, reduced, zero-rated and exempt supplies; input tax on cars/entertaining blocked",
          "The tax point determines the return period",
        ],
        scoringActions: [
          "Separate output tax from recoverable input tax",
          "Check whether input tax is blocked before claiming it",
        ],
      },
      {
        id: "astx10-tp3",
        title: "VAT special schemes and administration",
        priority: "medium",
        examinerFocus:
          "Recognising the VAT special schemes and the administrative rules for VAT.",
        typicalQuestionForms: [
          "Item on cash accounting, annual accounting or the flat-rate scheme",
          "Item on VAT return periods, deadlines or penalties",
        ],
        mustKnow: [
          "Cash accounting (VAT on cash flows), annual accounting, and the flat-rate scheme",
          "Eligibility conditions for each scheme",
          "VAT return and payment deadlines and the penalty regime",
        ],
        scoringActions: [
          "Match the scheme to the business's circumstances",
          "Recall the eligibility conditions and deadlines",
        ],
      },
      {
        id: "astx10-tp4",
        title: "Self-assessment and tax administration",
        priority: "high",
        examinerFocus:
          "Applying the self-assessment deadlines, payments on account, and the penalty and interest regime.",
        typicalQuestionForms: [
          "Item on filing and payment deadlines for income tax or corporation tax",
          "Item on payments on account, penalties for late filing/payment, or record keeping",
        ],
        mustKnow: [
          "Self-assessment filing and payment deadlines; payments on account for income tax",
          "Penalties for late filing, late payment, and errors (behaviour-based)",
          "Record-keeping requirements and HMRC compliance checks",
        ],
        scoringActions: [
          "Recall the precise deadlines and payment-on-account rules",
          "Match the penalty to the behaviour (careless vs deliberate)",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; VAT, IHT and administration items reward precise recall of rules, thresholds and deadlines.",
      timeBudget:
        "Within the 3-hour TX CBE, ~1.8 minutes per mark; these topics feature heavily in the OT sections.",
      answerSequence: [
        "Bank OT items on VAT, IHT and administration first",
        "Work any VAT or IHT computation carefully with workings",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm the seven-year cumulation for IHT and blocked input tax for VAT",
        "Check administrative deadlines are correct",
      ],
    },
    studyNotes: [
      {
        id: "astx10-sn1",
        title: "Inheritance tax",
        testPointIds: ["astx10-tp1"],
        explanation: [
          "Inheritance tax applies to lifetime transfers and the death estate. A potentially exempt transfer (a gift to an individual) becomes chargeable only if the donor dies within seven years; a chargeable lifetime transfer (e.g. into most trusts) is taxed at the time and again on death. The nil-rate band shelters transfers up to a threshold and is applied after cumulating gifts made in the previous seven years.",
          "Taper relief reduces the tax (not the value of the transfer) on gifts made between three and seven years before death, on a sliding scale. Several exemptions and reliefs remove or reduce value: the annual exemption, the spouse exemption (transfers between spouses are exempt), and business and agricultural property relief for qualifying assets.",
          "The exam requires cumulating earlier gifts before applying the nil-rate band, then computing tax on the excess, and applying taper relief and reliefs correctly. Keeping the seven-year window and the order of steps straight is the key to scoring.",
        ],
        keyRules: [
          "Cumulate the previous seven years' gifts before the nil-rate band",
          "PETs are tax-free if the donor survives seven years",
          "Taper relief cuts the tax, not the transfer value",
        ],
        workedProblem: {
          scenario:
            "An individual makes a gift of £400,000 to their child and dies 4 years later. Assume a £325,000 nil-rate band fully available and a death rate of 40%. Explain the IHT treatment (ignore taper for simplicity of the band, then note taper).",
          steps: [
            "The gift is a PET; because death occurs within 7 years it becomes chargeable",
            "Apply the nil-rate band: £400,000 − £325,000 = £75,000 taxable",
            "Tax at 40% = £30,000, then taper relief applies because the gift was 3–7 years before death, reducing the tax",
          ],
          conclusion:
            "The failed PET is chargeable; after the £325,000 nil-rate band, £75,000 is taxable at 40% (£30,000), which is then reduced by taper relief as the gift was made 4 years before death.",
          markingNotes: [
            "PET becoming chargeable on death within 7 years identified",
            "Nil-rate band applied and taper relief noted",
          ],
        },
      },
      {
        id: "astx10-sn2",
        title: "Value added tax",
        testPointIds: ["astx10-tp2"],
        explanation: [
          "VAT is a tax on consumption collected by businesses. A business must register once its taxable supplies exceed the registration threshold under the historic test (past 12 months) or the future test (next 30 days). Once registered, it charges output tax on its taxable supplies and recovers input tax on its purchases, paying the net to HMRC.",
          "Supplies are classified as standard-rated, reduced-rated, zero-rated (taxable at 0%, so input tax is still recoverable) or exempt (no output tax and input tax is not recoverable). Some input tax is blocked regardless — notably on cars for private use and on business entertaining — and cannot be reclaimed.",
          "The tax point (time of supply) determines which VAT return period a transaction falls into, generally the earlier of the invoice date, payment or delivery, subject to the 14-day invoice rule. VAT payable is output tax less recoverable input tax.",
        ],
        keyRules: [
          "Register when taxable supplies exceed the threshold (historic/future test)",
          "VAT payable = output tax − recoverable input tax; car/entertaining input blocked",
          "The tax point fixes the return period",
        ],
      },
      {
        id: "astx10-sn3",
        title: "VAT special schemes and administration",
        testPointIds: ["astx10-tp3"],
        explanation: [
          "Special schemes simplify VAT for smaller businesses. Cash accounting bases VAT on cash received and paid rather than invoice dates, helping cash flow and giving automatic bad-debt relief. Annual accounting requires a single annual return with instalment payments, reducing administration. The flat-rate scheme applies a fixed percentage to gross turnover instead of tracking input tax in detail.",
          "Each scheme has eligibility conditions, typically based on turnover limits, and businesses must weigh the administrative saving against any change in the VAT payable. The exam asks you to match a scheme to a business's circumstances and to recall the eligibility conditions.",
          "Administratively, VAT returns are usually filed quarterly with payment due shortly after the period end, and a penalty regime applies to late returns and payments. Knowing the periods, deadlines and penalties is examinable.",
        ],
        keyRules: [
          "Schemes: cash accounting, annual accounting, flat-rate",
          "Each has turnover-based eligibility conditions",
          "VAT returns are usually quarterly with a penalty regime for lateness",
        ],
      },
      {
        id: "astx10-sn4",
        title: "Self-assessment and administration",
        testPointIds: ["astx10-tp4"],
        explanation: [
          "Self-assessment places responsibility on the taxpayer to file returns and pay tax by set deadlines. For individuals, income tax is paid partly through payments on account (based on the prior year's liability) with a balancing payment later; for companies, corporation tax is due after the accounting period, with large companies paying by instalments.",
          "A behaviour-based penalty regime applies. Penalties for errors depend on whether the error was careless or deliberate and on whether disclosure was prompted or unprompted; penalties also apply for late filing and late payment, and interest runs on tax paid late. Understanding this structure is examinable.",
          "Taxpayers must keep records to support their returns, and HMRC can open compliance checks. The exam tests precise recall of deadlines, payments on account, and the penalty and interest rules, so these facts must be learned accurately.",
        ],
        keyRules: [
          "Self-assessment: filing/payment deadlines and payments on account",
          "Penalties are behaviour-based (careless vs deliberate; disclosure)",
          "Interest runs on late-paid tax; records must be kept",
        ],
      },
    ],
    examPractice: [
      {
        id: "astx10-ep1",
        testPointIds: ["astx10-tp2"],
        style: "Section B — VAT payable",
        question:
          "In a quarter a business made standard-rated sales of £200,000 (excluding VAT) and had recoverable VATable purchases of £70,000 (excluding VAT), plus £3,000 (excluding VAT) of business entertaining. Using a 20% rate, calculate the VAT payable.",
        answerPlan: [
          "Output tax",
          "Recoverable input tax (exclude entertaining)",
          "Net",
        ],
        modelAnswer:
          "Output tax = £200,000 × 20% = £40,000. Recoverable input tax = £70,000 × 20% = £14,000; the entertaining input tax (£600) is blocked. VAT payable = £40,000 − £14,000 = £26,000.",
        markingGuide: [
          "1 mark: output tax £40,000 and recoverable input tax £14,000",
          "1 mark: entertaining blocked and £26,000 payable",
        ],
      },
      {
        id: "astx10-ep2",
        testPointIds: ["astx10-tp1"],
        style: "Section B — IHT",
        question:
          "Explain the difference between a potentially exempt transfer and a chargeable lifetime transfer for inheritance tax.",
        answerPlan: [
          "Define PET",
          "Define CLT",
        ],
        modelAnswer:
          "A potentially exempt transfer (PET) is a lifetime gift to another individual; it is exempt from IHT if the donor survives seven years, becoming chargeable only if they die within that period. A chargeable lifetime transfer (CLT), such as a gift into most trusts, is chargeable to IHT at the time it is made (at the lifetime rate) and may be reassessed if the donor dies within seven years.",
        markingGuide: [
          "1 mark: PET exempt unless death within seven years",
          "1 mark: CLT chargeable when made",
        ],
      },
      {
        id: "astx10-ep3",
        testPointIds: ["astx10-tp3"],
        style: "Section B — VAT scheme",
        question:
          "A small business with fluctuating cash flow and several slow-paying customers wants to improve cash flow and get automatic bad-debt relief. Which VAT special scheme is most suitable and why?",
        answerPlan: [
          "Identify the scheme",
          "Explain the benefit",
        ],
        modelAnswer:
          "The cash accounting scheme is most suitable. Under it, VAT is accounted for on the basis of cash received and paid rather than invoice dates, so the business does not pay output VAT until its customers pay, improving cash flow, and it obtains automatic relief for bad debts because VAT is never paid on amounts not received.",
        markingGuide: [
          "1 mark: cash accounting scheme identified",
          "1 mark: cash-flow and automatic bad-debt-relief benefit explained",
        ],
      },
    ],
  }),

  "acca-applied-skills-m11": examDepth({
    testPoints: [
      {
        id: "asfr11-tp1",
        title: "The Conceptual Framework",
        priority: "critical",
        examinerFocus:
          "Applying the Conceptual Framework's qualitative characteristics and element definitions to justify treatments — the framework core of this module.",
        typicalQuestionForms: [
          "OT item on a qualitative characteristic, element definition or measurement basis",
          "Short item justifying recognition by reference to the Framework",
        ],
        mustKnow: [
          "Fundamental characteristics: relevance and faithful representation; enhancing: comparability, verifiability, timeliness, understandability",
          "Element definitions (asset, liability, income, expense) and recognition",
          "Measurement bases: historical cost and current value",
        ],
        scoringActions: [
          "Cite the specific characteristic/definition supporting the treatment",
          "Apply substance over form where form and reality differ",
        ],
      },
      {
        id: "asfr11-tp2",
        title: "The regulatory framework and standard-setting",
        priority: "high",
        examinerFocus:
          "Understanding the regulatory environment and the standard-setting process.",
        typicalQuestionForms: [
          "Item on the role of the IASB and the standard-setting process",
          "Item on the need for regulation and the benefits of a single set of standards",
        ],
        mustKnow: [
          "The IASB's role and the due process for developing IFRS Standards",
          "Principles-based vs rules-based approaches",
          "Benefits of global standards: comparability, credibility, access to capital",
        ],
        scoringActions: [
          "Explain the purpose of regulation in reporting",
          "Contrast principles-based and rules-based approaches",
        ],
      },
      {
        id: "asfr11-tp3",
        title: "Ethics and professional behaviour in reporting",
        priority: "high",
        examinerFocus:
          "Applying the fundamental principles to reporting situations and recognising threats to faithful representation.",
        typicalQuestionForms: [
          "Item on an ethical threat where management pressures a favourable treatment",
          "Item on the accountant's duty to present a faithful representation",
        ],
        mustKnow: [
          "The fundamental principles applied to financial reporting",
          "Threats to objectivity/integrity from earnings management pressure",
          "The duty to the public interest and to faithful representation",
        ],
        scoringActions: [
          "Identify the threat and recommend the faithful treatment",
          "Explain why a favourable but misleading treatment is unacceptable",
        ],
      },
      {
        id: "asfr11-tp4",
        title: "Elements, recognition and measurement in practice",
        priority: "medium",
        examinerFocus:
          "Applying the recognition and measurement principles to simple transactions.",
        typicalQuestionForms: [
          "Item on whether an item meets the definition of an asset/liability",
          "Item on the appropriate measurement basis for an item",
        ],
        mustKnow: [
          "Recognition when an item meets the definition and gives useful information",
          "Choice of measurement basis (historical cost vs current value) and its effects",
          "Going concern and accruals as underlying assumptions",
        ],
        scoringActions: [
          "Test the item against the element definition first",
          "Justify the measurement basis chosen",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; framework items are concept-driven and reliably scored once the characteristics and definitions are secure.",
      timeBudget:
        "Within the 3-hour FR CBE, ~1.8 minutes per mark; framework items feature in the OT sections and as short discussion.",
      answerSequence: [
        "Bank OT items on the framework and regulation first",
        "Answer any short discussion justifying a treatment",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm the specific characteristic/definition is cited",
        "Check ethics answers recommend the faithful treatment",
      ],
    },
    studyNotes: [
      {
        id: "asfr11-sn1",
        title: "The Conceptual Framework",
        testPointIds: ["asfr11-tp1"],
        explanation: [
          "The Conceptual Framework is the reasoning tool that underpins the application of accounting standards, especially where a specific rule is unclear. Useful financial information must be relevant (capable of making a difference to decisions) and a faithful representation (complete, neutral and free from error); these are the fundamental qualitative characteristics. The enhancing characteristics — comparability, verifiability, timeliness and understandability — make useful information even more useful.",
          "The Framework defines the elements of the financial statements: an asset is a present economic resource controlled as a result of past events; a liability is a present obligation to transfer an economic resource; income and expenses are changes in those. Recognition follows when an item meets a definition and providing the information is useful.",
          "Measurement bases include historical cost and current value (fair value, value in use, current cost). Underlying it all is substance over form — the accounts should reflect economic reality — which is the principle you invoke to justify treatments in the exam.",
        ],
        keyRules: [
          "Fundamental: relevance and faithful representation; enhancing: comparability, verifiability, timeliness, understandability",
          "Recognise an item when it meets the definition and gives useful information",
          "Apply substance over form",
        ],
        workedProblem: {
          scenario:
            "A company sells goods but agrees to buy them back in a year at a price that gives the buyer a lender's return. Should this be treated as a sale? Justify using the Framework.",
          steps: [
            "Consider the substance: the risks and rewards of ownership have not passed; it resembles a loan secured on the goods",
            "Apply substance over form: economic reality is a financing arrangement, not a sale",
            "Conclude: recognise a liability (financing), not revenue",
          ],
          conclusion:
            "Under substance over form, the arrangement is in substance a loan, so it should be recognised as a financing liability rather than as a sale — a faithful representation of the economic reality.",
          markingNotes: [
            "Substance over form applied",
            "Correct conclusion (financing, not revenue)",
          ],
        },
      },
      {
        id: "asfr11-sn2",
        title: "The regulatory framework",
        testPointIds: ["asfr11-tp2"],
        explanation: [
          "Financial reporting is regulated to protect users and maintain confidence. The International Accounting Standards Board (IASB) develops IFRS Standards through a rigorous due process involving research, exposure drafts, public consultation and post-implementation review, which gives the standards legitimacy.",
          "IFRS Standards are largely principles-based, relying on judgement guided by the Framework, in contrast to more rules-based systems that prescribe detailed requirements. Principles-based standards are more flexible and harder to circumvent, but require more judgement.",
          "A single, high-quality set of global standards brings benefits: comparability across companies and countries, greater credibility, lower costs for multinational groups, and easier access to international capital. The exam asks you to explain the need for regulation and these benefits.",
        ],
        keyRules: [
          "The IASB develops IFRS through a due process",
          "IFRS is principles-based, relying on judgement",
          "Global standards improve comparability and access to capital",
        ],
      },
      {
        id: "asfr11-sn3",
        title: "Ethics in reporting",
        testPointIds: ["asfr11-tp3"],
        explanation: [
          "Ethics is examined in the reporting context because preparers often face pressure to present results favourably. Management may wish to smooth earnings, capitalise costs that should be expensed, or delay recognising liabilities. Such earnings management threatens the objectivity and integrity of the accountant and the faithful representation of the statements.",
          "The accountant must identify the threat, explain why the proposed treatment fails to represent economic reality faithfully, and recommend the correct treatment. The overriding duty is to the public interest and to producing statements that users can rely on, even under pressure from those who prepare or benefit from them.",
          "This ethical dimension links directly to the Framework: faithful representation is both a qualitative characteristic and an ethical obligation, and the exam rewards connecting the two.",
        ],
        keyRules: [
          "Earnings-management pressure threatens objectivity and integrity",
          "Recommend the treatment that faithfully represents reality",
          "The duty to the public interest overrides preparer pressure",
        ],
      },
      {
        id: "asfr11-sn4",
        title: "Elements, recognition and measurement",
        testPointIds: ["asfr11-tp4"],
        explanation: [
          "Applying the Framework in practice means testing each item against the element definitions before deciding how to account for it. An item is recognised as an asset only if it is a present economic resource the entity controls from a past event and recognition provides useful information; the same discipline applies to liabilities.",
          "Measurement then requires choosing a basis. Historical cost is objective and verifiable but can become outdated; current value (such as fair value) is more relevant but can be less reliable and more volatile. The choice affects the reported figures and their usefulness.",
          "Two underlying assumptions frame the statements: going concern (the entity will continue in operation) and the accruals basis (recognising items when they occur, not when cash moves). The exam tests whether you can apply these principles to simple transactions and justify the treatment.",
        ],
        keyRules: [
          "Recognise an item only if it meets the definition and is useful",
          "Historical cost (reliable) vs current value (relevant)",
          "Going concern and accruals are the underlying assumptions",
        ],
      },
    ],
    examPractice: [
      {
        id: "asfr11-ep1",
        testPointIds: ["asfr11-tp1"],
        style: "Section B — qualitative characteristics",
        question:
          "Name the two fundamental qualitative characteristics of useful financial information and briefly explain each.",
        answerPlan: [
          "Name both",
          "Explain each",
        ],
        modelAnswer:
          "The two fundamental qualitative characteristics are relevance and faithful representation. Relevance means the information is capable of making a difference to users' decisions (it has predictive and/or confirmatory value and is material). Faithful representation means the information depicts the economic phenomena completely, neutrally and free from error.",
        markingGuide: [
          "1 mark: relevance named and explained",
          "1 mark: faithful representation named and explained",
        ],
      },
      {
        id: "asfr11-ep2",
        testPointIds: ["asfr11-tp3"],
        style: "Section B — ethics",
        question:
          "The finance director wants to capitalise routine advertising costs as an asset to boost profit. Advise on the correct treatment and the ethical issue.",
        answerPlan: [
          "State the recognition principle",
          "Apply to advertising",
          "Address ethics",
        ],
        modelAnswer:
          "Routine advertising costs do not create a resource the entity controls with probable future economic benefits that can be measured reliably, so under the Framework and IAS 38 they must be expensed, not capitalised. Capitalising them would overstate assets and profit, breaching faithful representation. Ethically, this is management pressure creating a threat to objectivity and integrity; the accountant should decline to capitalise the costs, explain the correct treatment, and uphold the public interest.",
        markingGuide: [
          "1 mark: advertising must be expensed (fails recognition)",
          "1 mark: ethical threat identified and correct response",
        ],
      },
      {
        id: "asfr11-ep3",
        testPointIds: ["asfr11-tp2"],
        style: "Section B — regulation",
        question:
          "State two benefits of having a single set of global accounting standards such as IFRS.",
        answerPlan: [
          "Give two benefits",
        ],
        modelAnswer:
          "First, comparability: users can more easily compare the financial statements of companies across different countries, aiding investment decisions. Second, access to capital and reduced cost: multinational groups can prepare one set of statements accepted internationally, lowering costs and improving access to global capital markets. (Greater credibility and transparency are further benefits.)",
        markingGuide: [
          "1 mark: comparability benefit",
          "1 mark: access to capital/cost-reduction benefit",
        ],
      },
    ],
  }),

  "acca-applied-skills-m12": examDepth({
    testPoints: [
      {
        id: "asfr12-tp1",
        title: "Revenue (IFRS 15)",
        priority: "critical",
        examinerFocus:
          "Applying the five-step revenue model to contracts in single-entity statements.",
        typicalQuestionForms: [
          "Item applying the five steps to a bundled or multi-element contract",
          "Item on the timing of revenue (point in time vs over time)",
        ],
        mustKnow: [
          "The five steps: identify contract, obligations, transaction price, allocate, recognise",
          "Allocate the price to obligations on relative standalone selling prices",
          "Recognise revenue as each obligation is satisfied",
        ],
        scoringActions: [
          "Identify the separate performance obligations first",
          "Allocate the price and recognise at the right time",
        ],
      },
      {
        id: "asfr12-tp2",
        title: "Leases (IFRS 16) and non-current assets (IAS 16/36/38)",
        priority: "critical",
        examinerFocus:
          "Accounting for leases as a lessee and for property, plant and equipment, impairment and intangibles.",
        typicalQuestionForms: [
          "Item on the lessee's right-of-use asset and lease liability",
          "Item on depreciation, revaluation, impairment or intangible recognition",
        ],
        mustKnow: [
          "IFRS 16 lessee: right-of-use asset and lease liability at present value",
          "IAS 16 cost/revaluation and depreciation; IAS 36 impairment (recoverable amount)",
          "IAS 38 intangibles: recognition criteria and amortisation",
        ],
        scoringActions: [
          "Split the lease payment into interest and capital",
          "Compute recoverable amount as the higher of value in use and fair value less costs of disposal",
        ],
      },
      {
        id: "asfr12-tp3",
        title: "Provisions, events after the reporting period and taxation",
        priority: "high",
        examinerFocus:
          "Applying IAS 37 provisions, IAS 10 events after the reporting period, and IAS 12 deferred tax.",
        typicalQuestionForms: [
          "Item on whether a provision should be recognised or a contingency disclosed",
          "Item on adjusting vs non-adjusting events, or a deferred tax calculation",
        ],
        mustKnow: [
          "IAS 37 provision: present obligation, probable outflow, reliable estimate",
          "IAS 10 adjusting (conditions existed) vs non-adjusting (arose after) events",
          "IAS 12 deferred tax on temporary differences (e.g. accelerated capital allowances)",
        ],
        scoringActions: [
          "Test the three provision criteria before recognising",
          "Classify events as adjusting or non-adjusting",
        ],
      },
      {
        id: "asfr12-tp4",
        title: "Financial instruments and presentation (IFRS 9, IAS 1)",
        priority: "high",
        examinerFocus:
          "Basic classification and measurement of financial instruments and IAS 1 presentation of single-entity statements.",
        typicalQuestionForms: [
          "Item on classifying a financial asset/liability and its measurement",
          "Item preparing or presenting a single-entity statement under IAS 1",
        ],
        mustKnow: [
          "IFRS 9: amortised cost vs fair value; basic equity vs debt distinction",
          "IAS 1 presentation split into current and non-current",
          "Statement of changes in equity and required disclosures",
        ],
        scoringActions: [
          "Classify instruments before measuring them",
          "Present items in the correct current/non-current classification",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; single-entity IFRS is the technical heart of FR — clear journals and correct standard application earn steady marks.",
      timeBudget:
        "Within the 3-hour FR CBE, ~1.8 minutes per mark; a Section C question may require preparing single-entity statements.",
      answerSequence: [
        "Bank Section A/B OT items on individual standards first",
        "In Section C, process adjustments and prepare the statements",
        "Return to flagged items and answer all",
      ],
      qualityChecks: [
        "Confirm each adjustment states the standard and the journal",
        "Check the effect flows through both primary statements",
      ],
    },
    studyNotes: [
      {
        id: "asfr12-sn1",
        title: "Revenue under IFRS 15",
        testPointIds: ["asfr12-tp1"],
        explanation: [
          "IFRS 15 recognises revenue using a five-step model: identify the contract, identify the separate performance obligations, determine the transaction price, allocate that price to the obligations, and recognise revenue as each obligation is satisfied. The judgement usually lies in identifying how many distinct performance obligations a contract contains.",
          "The transaction price is allocated to the obligations in proportion to their standalone selling prices, so a bundled sale (e.g. a product plus servicing) is split. Revenue is then recognised either at a point in time (typically when control passes, such as on delivery) or over time (as the customer receives the benefit, such as a service).",
          "Variable consideration, significant financing components and warranties add complexity, but the core skill tested at FR is applying the five steps to a straightforward multi-element contract and recognising revenue at the right time.",
        ],
        keyRules: [
          "Five steps: contract, obligations, price, allocate, recognise",
          "Allocate price on relative standalone selling prices",
          "Recognise at a point in time or over time as obligations are satisfied",
        ],
        workedProblem: {
          scenario:
            "A company sells equipment for $90,000 that includes two years of servicing. The equipment's standalone price is $85,000 and the servicing's is $15,000. How much revenue is recognised on delivery?",
          steps: [
            "Two performance obligations: equipment ($85,000) and servicing ($15,000), total $100,000",
            "Allocate the $90,000 price: equipment = $90,000 × 85/100 = $76,500",
            "Recognise the equipment portion on delivery; servicing over two years",
          ],
          conclusion:
            "$76,500 is recognised on delivery of the equipment; the remaining $13,500 (servicing) is recognised over the two-year service period.",
          markingNotes: [
            "Two obligations identified and price allocated on standalone prices",
            "$76,500 recognised on delivery",
          ],
        },
      },
      {
        id: "asfr12-sn2",
        title: "Leases and non-current assets",
        testPointIds: ["asfr12-tp2"],
        explanation: [
          "IFRS 16 requires a lessee to recognise almost all leases on the balance sheet: a right-of-use asset and a lease liability measured initially at the present value of the lease payments. The asset is depreciated over the lease term, and the liability unwinds with an interest charge, so each payment is split into interest and a capital repayment.",
          "IAS 16 governs property, plant and equipment: assets are held at cost or, if the revaluation model is chosen, at fair value, and are depreciated over their useful lives (with componentisation where parts have different lives). IAS 36 requires an impairment write-down when an asset's carrying amount exceeds its recoverable amount, which is the higher of its value in use and its fair value less costs of disposal.",
          "IAS 38 covers intangibles, which are recognised only if identifiable, controlled and expected to generate probable future benefits reliably measurable; internally generated goodwill and most research cannot be capitalised. These standards form the technical core of single-entity reporting.",
        ],
        keyRules: [
          "IFRS 16 lessee: right-of-use asset + lease liability at present value",
          "IAS 36 recoverable amount = higher of value in use and fair value less costs of disposal",
          "IAS 38 intangibles need identifiability, control and probable benefits",
        ],
      },
      {
        id: "asfr12-sn3",
        title: "Provisions, events and taxation",
        testPointIds: ["asfr12-tp3"],
        explanation: [
          "IAS 37 allows a provision only when there is a present obligation from a past event, a probable outflow of resources, and a reliable estimate of the amount. If any criterion fails, the item is a contingent liability, disclosed rather than provided (or, if remote, ignored). This prevents both understating and overstating liabilities.",
          "IAS 10 distinguishes events after the reporting period: adjusting events provide evidence of conditions that existed at the reporting date (e.g. a customer's bankruptcy confirming a bad debt) and require the statements to be adjusted; non-adjusting events arise after the reporting date (e.g. a fire) and are only disclosed if material.",
          "IAS 12 deferred tax arises from temporary differences between the carrying amount and tax base of assets and liabilities — most commonly from accelerated capital allowances and revaluations. Deferred tax ensures the tax consequences of transactions are matched to the periods in which the transactions are recognised.",
        ],
        keyRules: [
          "IAS 37 provision needs present obligation, probable outflow, reliable estimate",
          "Adjusting events reflect conditions at the reporting date; non-adjusting arose after",
          "IAS 12 deferred tax on temporary differences",
        ],
      },
      {
        id: "asfr12-sn4",
        title: "Financial instruments and presentation",
        testPointIds: ["asfr12-tp4"],
        explanation: [
          "IFRS 9 classifies financial assets by the business model and cash-flow characteristics into amortised cost, fair value through other comprehensive income, or fair value through profit or loss. Basic FR questions focus on distinguishing debt from equity instruments and measuring simple assets and liabilities at amortised cost (using the effective interest method) or fair value.",
          "The issuer must classify an instrument as a financial liability or equity according to its substance: an instrument with a contractual obligation to deliver cash (e.g. redeemable preference shares) is a liability, whereas ordinary shares are equity. This affects gearing and the statement of financial position.",
          "IAS 1 governs presentation: the statement of financial position is split into current and non-current, the statement of profit or loss and other comprehensive income shows performance, and the statement of changes in equity reconciles equity movements. Correct classification and presentation are examinable in their own right.",
        ],
        keyRules: [
          "IFRS 9: amortised cost vs fair value; classify by business model and cash flows",
          "Classify instruments as liability or equity by substance",
          "IAS 1: present split into current and non-current with a statement of changes in equity",
        ],
      },
    ],
    examPractice: [
      {
        id: "asfr12-ep1",
        testPointIds: ["asfr12-tp2"],
        style: "Section C — lease",
        question:
          "A lessee enters a 3-year lease with payments of $20,000 annually in arrears; the interest rate implicit in the lease is 8% (3-year annuity factor 2.577). Calculate the initial lease liability and the first year's interest.",
        answerPlan: [
          "Present value of payments",
          "First year's interest",
        ],
        modelAnswer:
          "Initial lease liability = $20,000 × 2.577 = $51,540, and the right-of-use asset is recognised at the same amount. First year's interest = $51,540 × 8% = $4,123. The liability at the end of year 1 = $51,540 + $4,123 − $20,000 = $35,663.",
        markingGuide: [
          "1 mark: lease liability of $51,540",
          "1 mark: first-year interest of $4,123",
        ],
      },
      {
        id: "asfr12-ep2",
        testPointIds: ["asfr12-tp3"],
        style: "Section B — provisions",
        question:
          "A company faces a legal claim; its lawyers say it is probable the company will lose and estimate the cost reliably at $200,000. How should this be treated, and how would the treatment differ if the loss were only possible?",
        answerPlan: [
          "Apply the IAS 37 criteria",
          "Contrast probable vs possible",
        ],
        modelAnswer:
          "Because there is a present obligation from a past event, a probable outflow, and a reliable estimate, the company must recognise a provision of $200,000 (a liability and an expense). If the loss were only possible rather than probable, the criteria for a provision would not be met and the company would instead disclose a contingent liability in the notes (unless the possibility were remote, in which case no disclosure is needed).",
        markingGuide: [
          "1 mark: provision recognised because the three criteria are met",
          "1 mark: contingent liability disclosure if only possible",
        ],
      },
      {
        id: "asfr12-ep3",
        testPointIds: ["asfr12-tp2"],
        style: "Section B — impairment",
        question:
          "An asset has a carrying amount of $500,000, a value in use of $420,000 and a fair value less costs of disposal of $450,000. Is it impaired, and by how much?",
        answerPlan: [
          "Compute recoverable amount",
          "Compare to carrying amount",
        ],
        modelAnswer:
          "Recoverable amount is the higher of value in use ($420,000) and fair value less costs of disposal ($450,000), i.e. $450,000. Because the carrying amount of $500,000 exceeds the recoverable amount of $450,000, the asset is impaired by $50,000, which is written off (to profit or loss unless reversing a revaluation surplus).",
        markingGuide: [
          "1 mark: recoverable amount of $450,000",
          "1 mark: impairment of $50,000",
        ],
      },
    ],
  }),

  "acca-applied-skills-m13": examDepth({
    testPoints: [
      {
        id: "asfr13-tp1",
        title: "Consolidated statement of financial position",
        priority: "critical",
        examinerFocus:
          "Preparing a consolidated statement of financial position including goodwill, non-controlling interest and reserves — the core FR consolidation skill.",
        typicalQuestionForms: [
          "Section C preparation of a consolidated statement of financial position",
          "OT item on goodwill, NCI or a fair value adjustment",
        ],
        mustKnow: [
          "Goodwill = consideration + NCI − fair value of net assets acquired",
          "NCI measured at fair value or proportionate share of net assets",
          "Cancel intra-group balances and eliminate unrealised profit in inventory",
        ],
        scoringActions: [
          "Prepare the net-assets and goodwill workings before the face of the statement",
          "Split post-acquisition reserves between parent and NCI",
        ],
      },
      {
        id: "asfr13-tp2",
        title: "Consolidated statement of profit or loss",
        priority: "critical",
        examinerFocus:
          "Preparing a consolidated statement of profit or loss with mid-year acquisitions and intra-group trading.",
        typicalQuestionForms: [
          "Section C consolidated statement of profit or loss",
          "OT item on the profit attributable to NCI or elimination of intra-group sales",
        ],
        mustKnow: [
          "Add parent and subsidiary results; time-apportion a mid-year acquisition",
          "Eliminate intra-group sales/purchases and unrealised profit",
          "Split profit for the year between parent owners and NCI",
        ],
        scoringActions: [
          "Time-apportion the subsidiary from the acquisition date",
          "Remove intra-group trading before consolidating",
        ],
      },
      {
        id: "asfr13-tp3",
        title: "Associates (equity method)",
        priority: "high",
        examinerFocus:
          "Accounting for an associate using the equity method in the consolidated statements.",
        typicalQuestionForms: [
          "Item computing the investment in associate and share of profit",
          "Item distinguishing an associate from a subsidiary",
        ],
        mustKnow: [
          "Significant influence (usually 20–50%) means equity accounting",
          "Investment = cost + share of post-acquisition retained profits/losses",
          "Include the group's share of the associate's profit in the consolidated P/L",
        ],
        scoringActions: [
          "Distinguish control (subsidiary) from significant influence (associate)",
          "Bring in only the group's share of the associate",
        ],
      },
      {
        id: "asfr13-tp4",
        title: "Fair value adjustments and intra-group eliminations",
        priority: "high",
        examinerFocus:
          "Applying fair value adjustments at acquisition and eliminating intra-group items correctly.",
        typicalQuestionForms: [
          "Item on a fair value adjustment and its depreciation effect",
          "Item on unrealised profit in inventory or non-current assets",
        ],
        mustKnow: [
          "Fair-value the subsidiary's net assets at acquisition (affects goodwill and depreciation)",
          "Eliminate unrealised profit on intra-group inventory still held",
          "Cancel intra-group receivables/payables and in-transit items",
        ],
        scoringActions: [
          "Carry fair value adjustments through post-acquisition depreciation",
          "Adjust closing inventory for the unrealised profit",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; consolidation is highly proceduralised — mastering the standard workings makes the Section C question a reliable scorer.",
      timeBudget:
        "Within the 3-hour FR CBE, a consolidation Section C carries ~20 marks; budget ~36 minutes and work the standard proformas.",
      answerSequence: [
        "Set up group structure, net assets, goodwill and NCI workings",
        "Post fair value and intra-group adjustments",
        "Transfer figures to the face of the statement",
      ],
      qualityChecks: [
        "Confirm goodwill and NCI workings are complete",
        "Check unrealised profit and intra-group balances are eliminated",
      ],
    },
    studyNotes: [
      {
        id: "asfr13-sn1",
        title: "Consolidated statement of financial position",
        testPointIds: ["asfr13-tp1", "asfr13-tp4"],
        explanation: [
          "A consolidated statement of financial position combines the parent and subsidiary line by line, then makes group adjustments. The disciplined approach uses standard workings: group structure, net assets of the subsidiary (at acquisition and at the reporting date), goodwill, non-controlling interest, and group retained earnings. Building these before touching the face of the statement is what secures the marks.",
          "Goodwill is the consideration transferred plus the non-controlling interest, less the fair value of the subsidiary's identifiable net assets at acquisition. The NCI can be measured either at fair value (full goodwill method) or at its proportionate share of net assets, and this choice affects goodwill and the NCI figure. Fair value adjustments at acquisition change the net assets and hence goodwill, and any resulting extra depreciation reduces post-acquisition profits.",
          "Intra-group balances (receivables/payables) are cancelled, and unrealised profit on inventory sold within the group and still held is eliminated. Post-acquisition reserves are split between the parent (into group retained earnings) and the NCI. A methodical layout makes each of these adjustments visible and markable.",
        ],
        keyRules: [
          "Goodwill = consideration + NCI − fair value of net assets acquired",
          "NCI at fair value or proportionate share of net assets",
          "Eliminate intra-group balances and unrealised profit",
        ],
        workedProblem: {
          scenario:
            "P acquires 80% of S for $500,000 when S's fair-valued net assets are $550,000. NCI is measured at its proportionate share. Compute goodwill.",
          steps: [
            "NCI at acquisition = 20% × $550,000 = $110,000",
            "Consideration + NCI = $500,000 + $110,000 = $610,000",
            "Goodwill = $610,000 − $550,000 = $60,000",
          ],
          conclusion:
            "Goodwill on acquisition is $60,000 under the proportionate NCI method; had NCI been measured at fair value, goodwill would be higher by the NCI's share of goodwill.",
          markingNotes: [
            "NCI at proportionate share ($110,000)",
            "Goodwill of $60,000",
          ],
        },
      },
      {
        id: "asfr13-sn2",
        title: "Consolidated statement of profit or loss",
        testPointIds: ["asfr13-tp2"],
        explanation: [
          "The consolidated statement of profit or loss adds the parent's and subsidiary's income and expenses line by line down to profit for the year, then splits that profit between the owners of the parent and the non-controlling interest. Where the subsidiary was acquired mid-year, its results are time-apportioned from the acquisition date so that only post-acquisition performance is consolidated.",
          "Intra-group trading must be removed: intra-group sales and the matching purchases are eliminated to avoid double counting, and any unrealised profit in closing inventory is stripped out (increasing cost of sales). Intra-group items such as dividends from the subsidiary and management charges are also cancelled.",
          "Finally, the profit for the year is attributed: the NCI's share is its percentage of the subsidiary's post-acquisition profit (after adjustments such as extra depreciation on fair value uplifts). The rest belongs to the parent's owners. Showing this split clearly is a specific marking point.",
        ],
        keyRules: [
          "Time-apportion a mid-year acquisition from the acquisition date",
          "Eliminate intra-group sales/purchases and unrealised profit",
          "Attribute profit between parent owners and NCI",
        ],
      },
      {
        id: "asfr13-sn3",
        title: "Associates",
        testPointIds: ["asfr13-tp3"],
        explanation: [
          "An associate is an entity over which the group has significant influence — the power to participate in financial and operating decisions without controlling them — usually indicated by a holding of 20% to 50% of the voting rights. Unlike a subsidiary, an associate is not consolidated line by line; instead it is equity accounted.",
          "Under the equity method, the investment in the associate is initially recorded at cost and then increased (or decreased) by the group's share of the associate's post-acquisition retained profits (or losses). In the consolidated statement of profit or loss, a single line brings in the group's share of the associate's profit for the year.",
          "The key exam skill is first distinguishing an associate (significant influence, equity method) from a subsidiary (control, full consolidation), then applying the correct one-line treatments in both primary statements.",
        ],
        keyRules: [
          "Significant influence (usually 20–50%) → equity method",
          "Investment = cost + share of post-acquisition retained profits",
          "One line in P/L for the share of the associate's profit",
        ],
      },
      {
        id: "asfr13-sn4",
        title: "Fair value adjustments and eliminations",
        testPointIds: ["asfr13-tp4"],
        explanation: [
          "At acquisition, the subsidiary's identifiable assets and liabilities must be measured at fair value, not book value. These fair value adjustments change the net assets used in the goodwill calculation and, where they relate to depreciable assets, create additional depreciation in the post-acquisition period that reduces consolidated profit and the subsidiary's post-acquisition reserves.",
          "Unrealised profit arises when one group company sells goods to another at a margin and some remain in inventory at the year end. Because the group has not sold these externally, the profit is not yet realised and must be eliminated, increasing cost of sales and reducing the inventory (and the selling company's reserves for the NCI split, if the subsidiary was the seller).",
          "Other intra-group items — receivables and payables, loans, and goods or cash in transit — are cancelled so the group statements reflect only transactions with parties outside the group. Handling these consistently is essential to a clean consolidation.",
        ],
        keyRules: [
          "Fair-value net assets at acquisition; carry extra depreciation post-acquisition",
          "Eliminate unrealised profit in intra-group inventory",
          "Cancel intra-group balances and in-transit items",
        ],
      },
    ],
    examPractice: [
      {
        id: "asfr13-ep1",
        testPointIds: ["asfr13-tp1"],
        style: "Section C — goodwill",
        question:
          "P acquires 75% of S for $800,000. S's identifiable net assets at fair value on acquisition are $900,000. NCI is measured at fair value of $250,000. Calculate goodwill.",
        answerPlan: [
          "Consideration + NCI",
          "Less net assets",
        ],
        modelAnswer:
          "Goodwill = consideration $800,000 + NCI at fair value $250,000 − fair value of net assets acquired $900,000 = $1,050,000 − $900,000 = $150,000.",
        markingGuide: [
          "1 mark: consideration plus NCI of $1,050,000",
          "1 mark: goodwill of $150,000",
        ],
      },
      {
        id: "asfr13-ep2",
        testPointIds: ["asfr13-tp4"],
        style: "Section B — unrealised profit",
        question:
          "During the year P sold goods to its subsidiary for $60,000 at a mark-up of 25% on cost. Half remain in the subsidiary's inventory at year end. Calculate the unrealised profit to eliminate.",
        answerPlan: [
          "Profit in the total sale",
          "Portion still held",
        ],
        modelAnswer:
          "Mark-up of 25% on cost means profit = 25/125 of selling price. Profit in the $60,000 sale = $60,000 × 25/125 = $12,000. Half the goods remain, so unrealised profit = $12,000 × 1/2 = $6,000, which is eliminated by increasing cost of sales and reducing closing inventory by $6,000.",
        markingGuide: [
          "1 mark: total profit of $12,000 using 25/125",
          "1 mark: unrealised profit of $6,000",
        ],
      },
      {
        id: "asfr13-ep3",
        testPointIds: ["asfr13-tp3"],
        style: "Section B — associate",
        question:
          "P owns 30% of A, acquired at cost of $200,000. Since acquisition A has made total retained profits of $80,000. Calculate the carrying amount of the investment in associate.",
        answerPlan: [
          "Cost",
          "Add share of post-acquisition profit",
        ],
        modelAnswer:
          "Under the equity method, investment in associate = cost $200,000 + group's share of post-acquisition retained profits (30% × $80,000 = $24,000) = $224,000.",
        markingGuide: [
          "1 mark: share of post-acquisition profit $24,000",
          "1 mark: carrying amount $224,000",
        ],
      },
    ],
  }),

  "acca-applied-skills-m14": examDepth({
    testPoints: [
      {
        id: "asfr14-tp1",
        title: "Ratio analysis and interpretation",
        priority: "critical",
        examinerFocus:
          "Calculating and, crucially, interpreting ratios to explain performance and position — the analytical core of this module.",
        typicalQuestionForms: [
          "Section C computing key ratios and interpreting the movement",
          "Item calculating a specific profitability, liquidity or gearing ratio",
        ],
        mustKnow: [
          "Profitability: ROCE, gross/operating margin; Liquidity: current, quick ratio",
          "Efficiency: inventory/receivables/payables days; Gearing and interest cover",
          "Interpretation must link ratios to causes, not just state the number",
        ],
        scoringActions: [
          "Explain why a ratio moved, referencing the scenario",
          "Link ratios together to tell a coherent story",
        ],
      },
      {
        id: "asfr14-tp2",
        title: "Limitations of ratio analysis and the financial statements",
        priority: "high",
        examinerFocus:
          "Recognising the limitations of ratios and financial statements for decision-making.",
        typicalQuestionForms: [
          "Item on the limitations of ratio analysis for comparison",
          "Item on what financial statements do not show",
        ],
        mustKnow: [
          "Ratios distorted by different policies, one-off items, and inflation",
          "Comparability issues between companies and over time",
          "Financial statements omit non-financial and forward-looking information",
        ],
        scoringActions: [
          "Give scenario-specific limitations, not generic lists",
          "Note the missing information a user would also need",
        ],
      },
      {
        id: "asfr14-tp3",
        title: "Statement of cash flows (IAS 7)",
        priority: "critical",
        examinerFocus:
          "Preparing and interpreting a statement of cash flows and reconciling profit to operating cash flow.",
        typicalQuestionForms: [
          "Item preparing part of a statement of cash flows",
          "Item interpreting the cash flows (quality of profit, investing/financing)",
        ],
        mustKnow: [
          "Three sections: operating, investing, financing",
          "Indirect method: adjust profit for non-cash items and working capital",
          "Cash flow reveals the quality of profit and liquidity",
        ],
        scoringActions: [
          "Reconcile profit to operating cash via non-cash and working capital adjustments",
          "Interpret what the cash flows reveal, not just the totals",
        ],
      },
      {
        id: "asfr14-tp4",
        title: "Interpretation for different user needs",
        priority: "medium",
        examinerFocus:
          "Tailoring the analysis to the needs of a specific user (investor, lender, supplier).",
        typicalQuestionForms: [
          "Item analysing from a potential lender's or investor's perspective",
          "Item recommending based on the user's decision",
        ],
        mustKnow: [
          "Lenders focus on gearing, interest cover and liquidity",
          "Investors focus on profitability, growth and returns",
          "Conclusions must address the specific user's question",
        ],
        scoringActions: [
          "Prioritise the ratios that matter to that user",
          "Give a clear, reasoned recommendation",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 58%+; interpretation questions reward analysis over calculation — most marks are for explaining, so write in reasoned points.",
      timeBudget:
        "Within the 3-hour FR CBE, a ~20-mark interpretation/cash flow Section C needs ~36 minutes; spend most of it interpreting.",
      answerSequence: [
        "Compute the required ratios or cash-flow figures quickly",
        "Interpret each, linking to the scenario and to each other",
        "Conclude to the specific user's question",
      ],
      qualityChecks: [
        "Confirm every ratio is interpreted, not just calculated",
        "Check the conclusion answers the user's actual question",
      ],
    },
    studyNotes: [
      {
        id: "asfr14-sn1",
        title: "Ratio analysis and interpretation",
        testPointIds: ["asfr14-tp1"],
        explanation: [
          "Ratio analysis converts the financial statements into comparable measures of profitability, liquidity, efficiency and gearing. Profitability is assessed with return on capital employed (operating profit ÷ capital employed) and margins; liquidity with the current and quick ratios; efficiency with inventory, receivables and payables days; and financial risk with gearing and interest cover.",
          "The marks, however, are overwhelmingly for interpretation, not calculation. A strong answer explains why each ratio moved by reference to the scenario — for example, a fall in ROCE driven by a margin squeeze from higher input costs, or a lengthening of receivables days indicating a collection problem — rather than simply restating the number.",
          "The best answers link ratios together into a coherent story: a rising current ratio may look positive but, combined with rising inventory days, might signal slow-moving stock rather than genuine strength. Connecting the ratios and grounding them in the scenario is what separates a pass from a strong mark.",
        ],
        keyRules: [
          "ROCE = operating profit ÷ capital employed",
          "Interpret movements, don't just state ratios",
          "Link ratios together and to the scenario",
        ],
        workedProblem: {
          scenario:
            "A company's ROCE fell from 20% to 15%. Operating margin fell from 10% to 9% and asset turnover fell from 2.0 to 1.67. Explain the fall in ROCE.",
          steps: [
            "ROCE = operating margin × asset turnover",
            "Check: 9% × 1.67 ≈ 15%; previously 10% × 2.0 = 20%",
            "Both drivers worsened: lower margin (cost/price pressure) and lower asset turnover (assets used less efficiently, e.g. recent capex not yet productive)",
          ],
          conclusion:
            "The fall in ROCE from 20% to 15% is due to both a lower operating margin (a profitability problem) and lower asset turnover (an efficiency problem), possibly from recent investment not yet generating revenue.",
          markingNotes: [
            "ROCE decomposed into margin × turnover",
            "Both drivers identified and explained",
          ],
        },
      },
      {
        id: "asfr14-sn2",
        title: "Limitations of ratio analysis",
        testPointIds: ["asfr14-tp2"],
        explanation: [
          "Ratios are useful but limited, and the exam rewards recognising this. Different accounting policies (e.g. depreciation methods, revaluation vs cost) distort comparisons between companies, and one-off items can make a single year unrepresentative. Historical cost figures ignore the effects of inflation, so trends over time can mislead.",
          "Comparability is a recurring problem: companies differ in size, activity and financing, so benchmarks must be used with care, and year-on-year comparison assumes consistency that may not hold. Ratios are also only as reliable as the underlying figures, which may have been managed.",
          "Finally, financial statements are backward-looking and omit much that matters — the quality of management, order books, brand strength, staff morale and market conditions. A good answer gives limitations specific to the scenario and notes the additional, often non-financial, information a user would need.",
        ],
        keyRules: [
          "Different policies and one-off items distort ratios",
          "Historical cost ignores inflation; comparability is limited",
          "Statements omit non-financial and forward-looking information",
        ],
      },
      {
        id: "asfr14-sn3",
        title: "Statement of cash flows",
        testPointIds: ["asfr14-tp3"],
        explanation: [
          "The statement of cash flows (IAS 7) reports cash generated and used, classified into operating, investing and financing activities. It is valuable because profit is an accounting construct affected by judgement and non-cash items, whereas cash is harder to manipulate — so cash flow reveals the quality of reported profit and the entity's liquidity.",
          "Under the indirect method, operating cash flow starts from profit before tax and adjusts for non-cash items (depreciation, profit/loss on disposal) and for movements in working capital (inventory, receivables and payables). Investing activities show capital expenditure and disposals; financing shows share issues, borrowings and dividends.",
          "Interpretation matters as much as preparation: strong operating cash flow relative to profit signals good-quality earnings, while heavy investing outflows funded by borrowing may raise gearing concerns. The exam asks you to explain what the pattern of cash flows tells users, not just to total them.",
        ],
        keyRules: [
          "Sections: operating, investing, financing",
          "Indirect method: profit ± non-cash items ± working capital changes",
          "Cash flow reveals profit quality and liquidity",
        ],
      },
      {
        id: "asfr14-sn4",
        title: "Interpretation for different users",
        testPointIds: ["asfr14-tp4"],
        explanation: [
          "Different users need different things from the same statements, and a high-scoring answer is tailored to the user in the scenario. A prospective lender is most concerned with the ability to service and repay debt, so gearing, interest cover and liquidity ratios and cash flow take priority.",
          "An equity investor is more interested in profitability, growth and returns — ROCE, margins, earnings and dividends — and in the sustainability of performance. A supplier extending credit focuses on short-term liquidity and payment history.",
          "The examiner rewards answers that select the ratios relevant to the specific user, weigh them appropriately, and reach a clear, reasoned recommendation that answers the user's actual decision (lend or not, invest or not) rather than a generic overview.",
        ],
        keyRules: [
          "Lenders: gearing, interest cover, liquidity, cash flow",
          "Investors: profitability, growth, returns",
          "Conclude to the specific user's decision",
        ],
      },
    ],
    examPractice: [
      {
        id: "asfr14-ep1",
        testPointIds: ["asfr14-tp1"],
        style: "Section C — ratio interpretation",
        question:
          "A company's gross margin rose from 30% to 35% but its operating margin fell from 12% to 9%. Suggest what may have happened.",
        answerPlan: [
          "Interpret the gross margin rise",
          "Interpret the operating margin fall",
          "Reconcile the two",
        ],
        modelAnswer:
          "The higher gross margin suggests better buying, higher selling prices, or a shift to higher-margin products — the trading position improved. However, operating margin fell, which means operating expenses (below gross profit) rose faster than the gross-profit improvement — for example, higher administrative or distribution costs, one-off charges, or increased marketing. So while the core trading became more profitable, overheads eroded and more than offset the gain, worsening overall operating performance.",
        markingGuide: [
          "1 mark: valid reasons for the gross margin rise",
          "1 mark: overheads/expenses explanation for the operating margin fall",
        ],
      },
      {
        id: "asfr14-ep2",
        testPointIds: ["asfr14-tp3"],
        style: "Section B — cash flow adjustment",
        question:
          "Profit before tax is $150,000, depreciation is $40,000, inventory rose by $20,000, receivables fell by $10,000 and payables rose by $15,000. Calculate cash generated from operations (indirect method).",
        answerPlan: [
          "Start with profit",
          "Add non-cash items",
          "Adjust for working capital",
        ],
        modelAnswer:
          "Cash generated from operations = profit before tax $150,000 + depreciation $40,000 − increase in inventory $20,000 + decrease in receivables $10,000 + increase in payables $15,000 = $195,000.",
        markingGuide: [
          "1 mark: depreciation added back correctly",
          "1 mark: working capital adjustments and $195,000 total",
        ],
      },
      {
        id: "asfr14-ep3",
        testPointIds: ["asfr14-tp2"],
        style: "Section B — limitations",
        question:
          "State two limitations of using ratio analysis to compare two companies in the same industry.",
        answerPlan: [
          "Give two limitations",
        ],
        modelAnswer:
          "First, the companies may use different accounting policies (for example different depreciation methods or the revaluation vs cost model), so their ratios are not directly comparable. Second, ratios are based on historical financial statements that ignore non-financial factors (such as management quality, order books or market position) and may be distorted by one-off items, so they do not tell the whole story about relative performance.",
        markingGuide: [
          "1 mark: differing accounting policies limit comparability",
          "1 mark: omission of non-financial/one-off factors",
        ],
      },
    ],
  }),

  "acca-applied-skills-m15": examDepth({
    testPoints: [
      {
        id: "asaa15-tp1",
        title: "Audit ethics and the fundamental principles",
        priority: "critical",
        examinerFocus:
          "Applying the fundamental principles and threats/safeguards framework to audit scenarios — a core, heavily tested AA area.",
        typicalQuestionForms: [
          "Constructed-response identifying ethical threats and safeguards in a scenario",
          "OT item on a fundamental principle or a specific threat",
        ],
        mustKnow: [
          "Fundamental principles: integrity, objectivity, professional competence and due care, confidentiality, professional behaviour",
          "Threats: self-interest, self-review, advocacy, familiarity, intimidation",
          "Safeguards reduce threats to an acceptable level; some threats require declining",
        ],
        scoringActions: [
          "Name the specific threat and explain why it arises here",
          "Give a practical, scenario-relevant safeguard",
        ],
      },
      {
        id: "asaa15-tp2",
        title: "The audit framework and objective of an audit",
        priority: "high",
        examinerFocus:
          "Explaining the purpose of an external audit and the concept of reasonable assurance.",
        typicalQuestionForms: [
          "Item on the objective of an audit and reasonable assurance",
          "Item on the expectation gap or the benefits/limits of assurance",
        ],
        mustKnow: [
          "The audit gives reasonable (not absolute) assurance the statements are free from material misstatement",
          "Inherent limitations: sampling, judgement, and inherent limitations of controls",
          "The expectation gap between what users expect and what an audit provides",
        ],
        scoringActions: [
          "State reasonable, not absolute, assurance",
          "Explain the inherent limitations of an audit",
        ],
      },
      {
        id: "asaa15-tp3",
        title: "Corporate governance and internal audit",
        priority: "high",
        examinerFocus:
          "Applying corporate governance principles and distinguishing internal from external audit.",
        typicalQuestionForms: [
          "Item on the role of the audit committee and non-executive directors",
          "Item comparing internal and external audit",
        ],
        mustKnow: [
          "Audit committee (non-executive directors) oversees reporting, controls and the external auditor",
          "Internal audit serves management/those charged with governance; external audit serves shareholders",
          "Good governance strengthens the control environment",
        ],
        scoringActions: [
          "Link governance mechanisms to auditor independence",
          "Contrast the purpose and reporting line of internal vs external audit",
        ],
      },
      {
        id: "asaa15-tp4",
        title: "Regulation, appointment and confidentiality",
        priority: "medium",
        examinerFocus:
          "Understanding the regulation of auditors, appointment/removal, and the duty of confidentiality.",
        typicalQuestionForms: [
          "Item on the appointment, removal or resignation of auditors",
          "Item on when confidential client information may be disclosed",
        ],
        mustKnow: [
          "Auditors are appointed by shareholders; rights on removal/resignation protect independence",
          "Confidentiality is a duty; disclosure only where authorised or legally required",
          "Money laundering reporting overrides confidentiality",
        ],
        scoringActions: [
          "Identify when disclosure is permitted or required",
          "Explain the safeguards on appointment and removal",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; ethics questions are predictable and reward the threat–explanation–safeguard structure applied to the scenario.",
      timeBudget:
        "Within the 3-hour AA CBE, ~1.8 minutes per mark; use the two-part structure (identify + respond) for ethics marks.",
      answerSequence: [
        "Bank Section A/B OT items on ethics and the framework first",
        "In Section B, identify each threat then give a safeguard",
        "Review that each point is scenario-specific",
      ],
      qualityChecks: [
        "Confirm each threat has a matched safeguard",
        "Check answers say reasonable (not absolute) assurance",
      ],
    },
    studyNotes: [
      {
        id: "asaa15-sn1",
        title: "Ethics: threats and safeguards",
        testPointIds: ["asaa15-tp1"],
        explanation: [
          "The AA exam repeatedly tests the ethical framework of fundamental principles and the threats-and-safeguards approach. The five fundamental principles are integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour. Compliance is threatened by five categories of threat: self-interest (e.g. a fee dependency or a financial interest in the client), self-review (auditing your own prior work), advocacy (promoting the client's position), familiarity (a close relationship), and intimidation (pressure from the client).",
          "For each threat identified in a scenario, the auditor must apply safeguards to reduce it to an acceptable level — for example rotating staff to counter familiarity, using separate teams to counter self-review, or reducing reliance on a single client to counter self-interest. Where no safeguard can reduce the threat sufficiently, the firm must decline or resign.",
          "Marks are earned by the two-part structure: name the specific threat and explain precisely why it arises in this scenario, then give a practical, relevant safeguard. Generic lists score poorly; scenario-specific application scores well.",
        ],
        keyRules: [
          "Principles: integrity, objectivity, competence/due care, confidentiality, professional behaviour",
          "Threats: self-interest, self-review, advocacy, familiarity, intimidation",
          "Apply a safeguard, or decline if the threat cannot be reduced",
        ],
        workedProblem: {
          scenario:
            "The audit firm's fees from one client represent 20% of total practice income, and the client has offered the audit partner a holiday. Identify the threats and safeguards.",
          steps: [
            "Fee dependency (20% of income) creates a self-interest and intimidation threat to objectivity",
            "The gift/holiday creates a self-interest and familiarity threat",
            "Safeguards: monitor fee levels and reduce dependency; politely decline the gift; independent review",
          ],
          conclusion:
            "Both the fee dependency and the offered holiday create self-interest threats (with intimidation/familiarity elements); the firm should monitor and reduce the fee proportion and decline the gift, applying independent review as a safeguard.",
          markingNotes: [
            "Threats correctly named and explained",
            "Relevant safeguards for each",
          ],
        },
      },
      {
        id: "asaa15-sn2",
        title: "The objective and limitations of an audit",
        testPointIds: ["asaa15-tp2"],
        explanation: [
          "The objective of an external audit is to enable the auditor to express an opinion on whether the financial statements give a true and fair view (or are fairly presented) and are prepared, in all material respects, in accordance with the applicable framework. This provides reasonable — not absolute — assurance to shareholders.",
          "Assurance is reasonable rather than absolute because of inherent limitations: auditors test samples rather than everything, much of accounting involves judgement and estimates, controls have inherent limitations (e.g. collusion or management override), and audit evidence is often persuasive rather than conclusive. These limitations mean some misstatements could remain undetected.",
          "The gap between what users sometimes expect (e.g. that an audit guarantees the accounts are correct or detects all fraud) and what an audit actually provides is the expectation gap. Explaining reasonable assurance and these limitations is a common exam requirement.",
        ],
        keyRules: [
          "Audit gives reasonable, not absolute, assurance on material misstatement",
          "Limitations: sampling, judgement, control limitations, persuasive evidence",
          "The expectation gap: user expectations vs the audit's actual scope",
        ],
      },
      {
        id: "asaa15-sn3",
        title: "Corporate governance and internal audit",
        testPointIds: ["asaa15-tp3"],
        explanation: [
          "Corporate governance is the system by which companies are directed and controlled. Key mechanisms include a balanced board with non-executive directors and an audit committee of independent non-executives that oversees financial reporting, the internal control system, and the relationship with the external auditor — strengthening the auditor's independence.",
          "Internal audit is a function within (or engaged by) the organisation that reports to management and those charged with governance, reviewing risk management, controls and operations. External audit is independent of the company and reports to the shareholders on the financial statements. They differ in objective, scope, reporting line and independence.",
          "The exam asks candidates to explain how governance mechanisms such as the audit committee support the external audit and to contrast internal and external audit clearly, avoiding the common error of treating them as interchangeable.",
        ],
        keyRules: [
          "Audit committee of NEDs oversees reporting, controls and the external auditor",
          "Internal audit reports to management/governance; external audit reports to shareholders",
          "Governance supports auditor independence",
        ],
      },
      {
        id: "asaa15-sn4",
        title: "Regulation, appointment and confidentiality",
        testPointIds: ["asaa15-tp4"],
        explanation: [
          "Auditors are regulated to protect the public interest, and their appointment and removal are structured to safeguard independence. The external auditor is appointed by the shareholders, and on removal or resignation has rights (such as to make representations) designed to prevent directors from silencing an auditor who resists them.",
          "Confidentiality is a fundamental principle: the auditor must not disclose client information acquired during the engagement without proper authority. Disclosure is permitted only where the client authorises it, or where there is a legal or professional duty or right to disclose.",
          "An important override is anti-money-laundering law: where the auditor suspects money laundering, they must report it, and this obligation overrides the duty of confidentiality. Understanding when disclosure is permitted, required, or prohibited is examinable.",
        ],
        keyRules: [
          "Shareholders appoint the auditor; removal/resignation rights protect independence",
          "Disclose confidential information only if authorised or legally required",
          "Money-laundering reporting overrides confidentiality",
        ],
      },
    ],
    examPractice: [
      {
        id: "asaa15-ep1",
        testPointIds: ["asaa15-tp1"],
        style: "Section B — ethics",
        question:
          "The audit senior owns a small number of shares in the client company. Identify the ethical threat and an appropriate safeguard.",
        answerPlan: [
          "Identify the threat",
          "Give a safeguard",
        ],
        modelAnswer:
          "Holding shares in the client creates a self-interest threat to objectivity, because the senior has a financial interest in the client's reported results and might not act impartially. The safeguard is to require the senior to dispose of the shareholding, or, if that is not done, to remove the senior from the audit team; a financial interest in an audit client is generally not permitted for members of the audit team.",
        markingGuide: [
          "1 mark: self-interest threat identified and explained",
          "1 mark: dispose of shares/remove from team safeguard",
        ],
      },
      {
        id: "asaa15-ep2",
        testPointIds: ["asaa15-tp2"],
        style: "Section B — assurance",
        question:
          "Explain why an external audit provides reasonable rather than absolute assurance.",
        answerPlan: [
          "Define reasonable assurance",
          "Give reasons",
        ],
        modelAnswer:
          "An audit provides reasonable — a high but not absolute — level of assurance because of the inherent limitations of an audit: the auditor tests samples rather than all transactions, financial statements involve judgement and estimates that cannot be verified with certainty, internal controls have inherent limitations such as management override and collusion, and audit evidence is generally persuasive rather than conclusive. As a result, some material misstatement could remain undetected, so absolute assurance is impossible.",
        markingGuide: [
          "1 mark: reasonable = high but not absolute",
          "1 mark: at least two valid inherent limitations",
        ],
      },
      {
        id: "asaa15-ep3",
        testPointIds: ["asaa15-tp3"],
        style: "Section B — internal vs external audit",
        question:
          "State two differences between internal audit and external audit.",
        answerPlan: [
          "Give two contrasts",
        ],
        modelAnswer:
          "First, objective and reporting line: internal audit reviews risk management and internal controls and reports to management and those charged with governance, whereas external audit forms an opinion on the financial statements and reports to the shareholders. Second, independence: the external auditor must be independent of the company, while internal auditors are usually employees of the organisation and are therefore less independent.",
        markingGuide: [
          "1 mark: difference in objective/reporting line",
          "1 mark: difference in independence",
        ],
      },
    ],
  }),

  "acca-applied-skills-m16": examDepth({
    testPoints: [
      {
        id: "asaa16-tp1",
        title: "Audit risk and its components",
        priority: "critical",
        examinerFocus:
          "Identifying and explaining audit risks (inherent, control, detection) from a scenario and the auditor's response — the most heavily tested AA area.",
        typicalQuestionForms: [
          "Constructed-response identifying audit risks and describing responses",
          "OT item on the audit risk model or a risk component",
        ],
        mustKnow: [
          "Audit risk = inherent risk × control risk × detection risk",
          "Identify a specific risk, explain why it is a risk, then give the auditor's response",
          "Materiality is set to focus the audit on significant items",
        ],
        scoringActions: [
          "Explain each risk (don't just state a balance) and give a matched response",
          "Link risks to specific figures/assertions in the scenario",
        ],
      },
      {
        id: "asaa16-tp2",
        title: "Planning and materiality",
        priority: "high",
        examinerFocus:
          "Applying the planning process, understanding the entity, and setting materiality.",
        typicalQuestionForms: [
          "Item on the contents/purpose of the audit strategy and plan",
          "Item on calculating or applying materiality",
        ],
        mustKnow: [
          "Understanding the entity and its environment to assess risk (ISA 315)",
          "Materiality and performance materiality guide the extent of testing",
          "The audit strategy sets scope, timing and direction; the plan is more detailed",
        ],
        scoringActions: [
          "Use benchmarks (e.g. % of profit/revenue/assets) for materiality",
          "Tie planning to the assessed risks",
        ],
      },
      {
        id: "asaa16-tp3",
        title: "Internal control systems and deficiencies",
        priority: "critical",
        examinerFocus:
          "Evaluating internal controls, identifying deficiencies, and recommending improvements (control recommendations).",
        typicalQuestionForms: [
          "Constructed-response identifying control deficiencies, implications and recommendations",
          "Item on tests of controls for a specific cycle",
        ],
        mustKnow: [
          "Components of internal control and the control environment",
          "Deficiency → implication (what could go wrong) → recommendation",
          "Tests of controls check whether controls operate effectively",
        ],
        scoringActions: [
          "Use the deficiency–implication–recommendation structure",
          "Make recommendations specific and practical",
        ],
      },
      {
        id: "asaa16-tp4",
        title: "Fraud, laws and regulations, and the auditor's responsibilities",
        priority: "medium",
        examinerFocus:
          "Understanding the auditor's responsibilities regarding fraud (ISA 240) and laws/regulations (ISA 250).",
        typicalQuestionForms: [
          "Item on the auditor's vs management's responsibility for fraud prevention",
          "Item on the auditor's response to suspected non-compliance",
        ],
        mustKnow: [
          "Management is responsible for preventing/detecting fraud; the auditor considers fraud risk",
          "Professional scepticism is required throughout the audit",
          "Response to non-compliance with laws and regulations (ISA 250)",
        ],
        scoringActions: [
          "Distinguish management's and the auditor's responsibilities",
          "Emphasise professional scepticism",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Target 55%+; risk and controls questions are the AA staples — the risk-and-response and deficiency-and-recommendation structures earn most marks.",
      timeBudget:
        "Within the 3-hour AA CBE, a ~30-mark Section B question on risk/controls needs ~54 minutes; use two-column structures.",
      answerSequence: [
        "For risks: identify → explain why → auditor's response, in a table",
        "For controls: deficiency → implication → recommendation",
        "Keep every point tied to the scenario",
      ],
      qualityChecks: [
        "Confirm each risk has a specific explanation and matched response",
        "Check each deficiency has an implication and a recommendation",
      ],
    },
    studyNotes: [
      {
        id: "asaa16-sn1",
        title: "Audit risk and responses",
        testPointIds: ["asaa16-tp1"],
        explanation: [
          "Audit risk is the risk the auditor expresses an inappropriate opinion when the statements are materially misstated. It is modelled as inherent risk (susceptibility to misstatement before controls) times control risk (that controls fail to prevent or detect it) times detection risk (that the auditor's procedures fail to catch it). The auditor cannot change inherent or control risk but manages detection risk through the nature, timing and extent of procedures.",
          "The exam's dominant requirement is to identify audit risks from a scenario. A complete answer names a specific risk (e.g. revenue may be overstated because of a bonus scheme linked to sales), explains why it is a risk by reference to the relevant assertion or figure, and then describes the auditor's response (e.g. increased substantive testing of cut-off around the year end).",
          "Materiality frames this work: it is set using benchmarks so that the audit focuses on items that could influence users' decisions. Weak answers merely list balances; strong answers explain the risk and give a matched, practical response.",
        ],
        keyRules: [
          "Audit risk = inherent × control × detection risk",
          "Identify → explain why → auditor's response",
          "Auditor controls detection risk via procedures",
        ],
        workedProblem: {
          scenario:
            "A company introduced a sales-based bonus for managers this year and recognises revenue on despatch. Identify the audit risk and the auditor's response.",
          steps: [
            "The bonus creates an incentive to overstate/accelerate revenue (risk of overstatement, cut-off)",
            "Assertion at risk: occurrence and cut-off of revenue",
            "Response: extend cut-off testing around the year end, agreeing despatch dates to sales records",
          ],
          conclusion:
            "There is a risk that revenue is overstated or recorded early because of the sales-based bonus; the auditor should respond with increased cut-off testing around the year end, tracing despatches to the correct period.",
          markingNotes: [
            "Risk identified and explained (incentive → overstatement)",
            "Specific, relevant auditor response",
          ],
        },
      },
      {
        id: "asaa16-sn2",
        title: "Planning and materiality",
        testPointIds: ["asaa16-tp2"],
        explanation: [
          "Audit planning ensures the engagement is performed effectively. It begins with obtaining an understanding of the entity and its environment (ISA 315) — its industry, operations, ownership, and internal control — in order to identify and assess the risks of material misstatement. This understanding drives where audit effort is directed.",
          "Materiality is the threshold above which misstatements could reasonably influence users' decisions. It is often set using benchmarks such as a percentage of profit before tax, revenue or total assets, with performance materiality set lower to reduce the risk that uncorrected and undetected misstatements together exceed materiality.",
          "The overall audit strategy sets the scope, timing and direction of the audit, and the more detailed audit plan specifies the nature, timing and extent of procedures. Planning is not a one-off: it is revisited as the audit progresses and new information emerges.",
        ],
        keyRules: [
          "Understand the entity to assess risk (ISA 315)",
          "Materiality via benchmarks; performance materiality set lower",
          "Strategy (scope/direction) then detailed plan",
        ],
      },
      {
        id: "asaa16-sn3",
        title: "Internal control deficiencies",
        testPointIds: ["asaa16-tp3"],
        explanation: [
          "The auditor evaluates internal control to assess control risk and, where relevant, to identify deficiencies to report to those charged with governance. Internal control comprises the control environment, the entity's risk assessment, control activities, information systems and monitoring; weaknesses in any of these increase the risk of misstatement.",
          "A central exam skill is the deficiency–implication–recommendation structure. For each control weakness identified in a scenario (e.g. no segregation between the person who records cash and the person who banks it), the answer states the implication (cash could be misappropriated and concealed) and a specific, practical recommendation (segregate the duties, with independent reconciliation).",
          "Where the auditor intends to rely on controls, tests of controls are performed to confirm they operated effectively throughout the period; if controls are weak or not relied upon, the auditor takes a substantive approach instead. Making recommendations specific and cost-effective is what earns the marks.",
        ],
        keyRules: [
          "Deficiency → implication → recommendation",
          "Internal control has five components including the control environment",
          "Test controls if relying on them; otherwise go substantive",
        ],
      },
      {
        id: "asaa16-sn4",
        title: "Fraud, law and professional scepticism",
        testPointIds: ["asaa16-tp4"],
        explanation: [
          "Under ISA 240, the primary responsibility for preventing and detecting fraud rests with management and those charged with governance, through a sound control environment. The auditor's responsibility is to obtain reasonable assurance that the statements are free from material misstatement whether caused by fraud or error, which means assessing fraud risk and responding to it.",
          "Professional scepticism — a questioning mind and a critical assessment of evidence — must be maintained throughout, recognising that fraud is deliberately concealed and that management can override controls. This attitude underpins the auditor's alertness to indicators of fraud.",
          "ISA 250 addresses laws and regulations: the auditor considers the risk of non-compliance that could materially affect the statements and responds appropriately to suspected non-compliance, including considering the need to report it. The exam tests the split of responsibilities and the role of scepticism.",
        ],
        keyRules: [
          "Management prevents/detects fraud; the auditor assesses and responds to fraud risk",
          "Maintain professional scepticism throughout",
          "ISA 250: respond to suspected non-compliance with laws/regulations",
        ],
      },
    ],
    examPractice: [
      {
        id: "asaa16-ep1",
        testPointIds: ["asaa16-tp1"],
        style: "Section B — audit risk",
        question:
          "A company changed its inventory valuation method during the year and has significant slow-moving lines. Identify one audit risk and the auditor's response.",
        answerPlan: [
          "Identify the risk",
          "Give the response",
        ],
        modelAnswer:
          "There is a risk that inventory is overstated: the change in valuation method may not comply with IAS 2 or may not be applied consistently, and slow-moving lines may not be written down to net realisable value. The auditor should respond by reviewing the basis and consistency of the valuation method, and by testing a sample of slow-moving items to their net realisable value (e.g. post-year-end selling prices) to confirm inventory is not overstated.",
        markingGuide: [
          "1 mark: valid risk explained (overstatement/NRV)",
          "1 mark: specific auditor response",
        ],
      },
      {
        id: "asaa16-ep2",
        testPointIds: ["asaa16-tp3"],
        style: "Section B — control deficiency",
        question:
          "In the purchases system, one clerk raises orders, receives goods and approves invoices for payment. Identify the deficiency, its implication and a recommendation.",
        answerPlan: [
          "Deficiency",
          "Implication",
          "Recommendation",
        ],
        modelAnswer:
          "Deficiency: there is no segregation of duties — one clerk controls ordering, receipt and invoice approval. Implication: this allows fraud or error to occur and be concealed, for example approving payment for goods not received or for fictitious suppliers, leading to loss. Recommendation: segregate these duties so that different individuals raise orders, record goods received, and approve invoices, with authorisation limits and independent review of the process.",
        markingGuide: [
          "1 mark: deficiency and implication",
          "1 mark: practical recommendation (segregation)",
        ],
      },
      {
        id: "asaa16-ep3",
        testPointIds: ["asaa16-tp4"],
        style: "Section B — fraud responsibility",
        question:
          "Explain the respective responsibilities of management and the auditor in relation to fraud.",
        answerPlan: [
          "Management's responsibility",
          "Auditor's responsibility",
        ],
        modelAnswer:
          "Management (with those charged with governance) has primary responsibility for preventing and detecting fraud by establishing and maintaining a sound system of internal control and an appropriate control environment. The auditor's responsibility is to obtain reasonable assurance that the financial statements as a whole are free from material misstatement, whether caused by fraud or error; the auditor assesses the risk of fraud, maintains professional scepticism, and designs procedures to respond to that risk, but is not responsible for preventing fraud.",
        markingGuide: [
          "1 mark: management's prevention/detection responsibility",
          "1 mark: auditor's reasonable-assurance/scepticism responsibility",
        ],
      },
    ],
  }),
};
