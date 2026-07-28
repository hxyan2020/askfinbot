import type { ModuleCourseware } from "./types";
import { area, courseware, lesson } from "./helpers";

/* -------------------------------------------------------------------------- */
/* Applied Knowledge                                                          */
/* -------------------------------------------------------------------------- */

const BT: ModuleCourseware = courseware({
  moduleId: "acca-all-m1",
  examId: "acca",
  levelId: "all",
  title: "BT — Business & Technology",
  paperCode: "BT",
  examFormat: "On-demand CBE, 2 hours",
  estimatedStudyHours: 50,
  overview:
    "Business & Technology introduces how organisations operate within their wider business, economic and regulatory environment, and how effective management, governance and technology enable them to achieve their objectives. It sets the vocabulary and conceptual foundations that recur throughout the ACCA qualification. The paper blends business theory with the practical role of accounting, internal control and professional ethics.",
  whyItMatters:
    "BT is the conceptual gateway to the whole qualification: it frames how accountants add value inside real organisations and how governance, risk and ethics shape decisions. A strong grasp here makes later papers on audit, law, performance and strategy far easier to absorb.",
  learningOutcomes: [
    "Explain the purpose, types and structures of business organisations and their stakeholders.",
    "Analyse the external macro and micro environment using established frameworks.",
    "Describe how the accounting function and information systems support the business.",
    "Explain the principles of corporate governance and internal control.",
    "Identify fraud, risks and controls relevant to financial systems.",
    "Describe effective leadership, management and team behaviour.",
    "Explain recruitment, motivation, training and appraisal of people.",
    "Apply professional ethics and the ACCA code to workplace scenarios.",
  ],
  syllabusAreas: [
    area(
      "The business organisation, stakeholders and structure",
      [
        "Purpose and types of organisation (profit, not-for-profit, public sector)",
        "Stakeholders and stakeholder mapping (Mendelow)",
        "Organisational structure, departmentation and span of control",
        "Centralisation vs decentralisation",
        "The informal organisation and organisational culture",
      ],
      "10–15%"
    ),
    area(
      "The external business environment",
      [
        "Macro-environment analysis using PESTEL",
        "Micro-environment and competition using Porter's Five Forces",
        "Economic environment: demand, supply and market structures",
        "Government policy, regulation and social responsibility",
        "Committees and their role (audit, remuneration, nomination)",
      ],
      "15–20%"
    ),
    area(
      "Accounting, reporting systems, controls and compliance",
      [
        "The role of the accounting and finance functions",
        "Financial vs management accounting and information needs",
        "Internal control systems and the control environment",
        "Fraud, error and their prevention and detection",
        "Information technology and information systems in business",
        "Data security, cyber risk and system controls",
      ],
      "20–25%"
    ),
    area(
      "Leading and managing individuals and teams",
      [
        "Leadership and management theory (Fayol, Mintzberg, Blake & Mouton)",
        "Individual, group and team behaviour (Tuckman, Belbin)",
        "Motivation theory (Maslow, Herzberg, Vroom)",
        "Learning, training and development",
        "Recruitment, selection and diversity",
        "Performance appraisal",
      ],
      "20–25%"
    ),
    area(
      "Personal effectiveness and professional ethics",
      [
        "Personal effectiveness, time management and communication",
        "Competence frameworks and continuing professional development",
        "Fundamental ethical principles and threats/safeguards",
        "Corporate codes of ethics and social responsibility",
        "Governance and the role of the accountant",
      ],
      "15–20%"
    ),
  ],
  lessons: [
    lesson(
      "bt-l1",
      "Organisations, stakeholders and structure",
      60,
      [
        "Distinguish organisation types and their objectives",
        "Map stakeholders by power and interest",
        "Describe common organisational structures",
      ],
      [
        "Organisations exist to achieve objectives more effectively than individuals acting alone.",
        "Stakeholders are internal, connected or external and have differing claims.",
        "Mendelow's matrix maps stakeholders by power and level of interest.",
        "Structures include functional, divisional, matrix and network forms.",
        "Span of control and scalar chain affect communication and control.",
        "Culture (Handy: power, role, task, person) shapes behaviour.",
      ],
      [
        "Name three stakeholder groups for a listed retailer and their key interests.",
        "When would a matrix structure be preferred over a functional one?",
        "How does Mendelow's matrix guide management action?",
      ],
      "A supermarket plans to close a loss-making store. Using Mendelow, employees (high interest, low power) should be 'kept informed', the local council (variable) 'kept satisfied', and major institutional shareholders (high power, high interest) treated as 'key players' to be managed closely."
    ),
    lesson(
      "bt-l2",
      "Analysing the external environment",
      75,
      [
        "Apply PESTEL to a business scenario",
        "Use Porter's Five Forces to assess industry attractiveness",
        "Explain basic market structures",
      ],
      [
        "PESTEL covers Political, Economic, Social, Technological, Environmental and Legal factors.",
        "Porter's Five Forces: rivalry, new entrants, substitutes, buyer and supplier power.",
        "Market structures range from perfect competition to monopoly.",
        "Demand and supply shifts change equilibrium price and quantity.",
        "Regulation and fiscal/monetary policy affect the operating environment.",
        "Frameworks are tools to structure analysis, not ends in themselves.",
      ],
      [
        "Give one PESTEL factor in each category for an airline.",
        "Which force is strongest for a new online food-delivery entrant?",
        "What happens to equilibrium when a subsidy is introduced?",
      ],
      "For a low-cost airline, high buyer power (price-sensitive customers with comparison sites) and intense rivalry compress margins, while the threat of substitutes (rail on short routes) further limits pricing freedom — signalling a structurally unattractive industry."
    ),
    lesson(
      "bt-l3",
      "The accounting function and information systems",
      60,
      [
        "Describe the role of finance and accounting functions",
        "Distinguish financial and management accounting",
        "Explain how IT/IS support decision-making",
      ],
      [
        "Financial accounting reports to external users; management accounting informs internal decisions.",
        "The finance function includes recording, reporting, treasury and management accounting.",
        "Transaction processing, MIS, DSS and executive information systems serve different levels.",
        "Good information is ACCURATE (accurate, complete, cost-effective, understandable, relevant, adaptable, timely, easy to use).",
        "Data security and cyber risk require both technical and procedural controls.",
        "Cloud, big data and automation are reshaping the finance function.",
      ],
      [
        "State two differences between financial and management accounting.",
        "What are the ACCURATE qualities of good information?",
        "Give two controls that reduce cyber risk.",
      ],
      "A finance team replacing spreadsheets with an ERP gains real-time management information (supporting DSS-style what-if analysis) but must add access controls, audit trails and backups to protect the integrity and security of the data."
    ),
    lesson(
      "bt-l4",
      "Internal control, fraud and risk",
      60,
      [
        "Explain the components of an internal control system",
        "Identify types of fraud and their prerequisites",
        "Recommend controls to mitigate risk",
      ],
      [
        "Internal control comprises the control environment and control procedures.",
        "Controls are classified as SPAMSOAP (segregation, physical, authorisation, management, supervision, organisation, arithmetic, personnel).",
        "The fraud triangle: dishonesty, motive and opportunity.",
        "Segregation of duties prevents one person controlling a whole transaction.",
        "Preventive, detective and corrective controls work together.",
        "Risk management follows identify, assess, respond and monitor.",
      ],
      [
        "List four SPAMSOAP control categories with an example each.",
        "What three conditions make fraud more likely?",
        "How does segregation of duties reduce fraud risk?",
      ],
      "In a purchases cycle, the person who raises orders should not also approve invoices or sign cheques; splitting these roles removes the opportunity for a single employee to set up and pay a fictitious supplier."
    ),
    lesson(
      "bt-l5",
      "Leadership, management and teams",
      75,
      [
        "Contrast leadership and management theories",
        "Explain team formation and effective roles",
        "Apply motivation theory to the workplace",
      ],
      [
        "Fayol's functions: plan, organise, command, coordinate, control.",
        "Mintzberg's managerial roles: interpersonal, informational, decisional.",
        "Blake & Mouton grid balances concern for people and production.",
        "Tuckman: forming, storming, norming, performing (and adjourning).",
        "Belbin identifies complementary team roles.",
        "Maslow, Herzberg and Vroom explain what drives effort.",
      ],
      [
        "What are Mintzberg's three role categories?",
        "Which Tuckman stage involves conflict, and how is it resolved?",
        "How do Herzberg's hygiene factors differ from motivators?",
      ],
      "A newly formed project team argues over priorities (storming); the manager clarifies roles and ground rules to reach shared norms, then focuses on Herzberg motivators (achievement, recognition) rather than just pay to sustain high performance."
    ),
    lesson(
      "bt-l6",
      "Managing people: recruitment, appraisal and development",
      45,
      [
        "Describe the recruitment and selection process",
        "Explain the purpose and pitfalls of appraisal",
        "Outline training and development methods",
      ],
      [
        "Recruitment attracts candidates; selection chooses among them.",
        "Job analysis produces job descriptions and person specifications.",
        "Appraisal supports reward, development and feedback.",
        "Appraisal barriers include halo effect, leniency and recency bias.",
        "Training may be on-the-job or off-the-job; development is longer term.",
        "Diversity and equal-opportunity policies reduce bias and widen talent.",
      ],
      [
        "Distinguish recruitment from selection.",
        "Name two appraisal biases and how to reduce them.",
        "Give one advantage of on-the-job training.",
      ],
      undefined
    ),
    lesson(
      "bt-l7",
      "Personal effectiveness and communication",
      45,
      [
        "Apply time-management and effectiveness techniques",
        "Explain the communication process and barriers",
        "Describe competence and CPD",
      ],
      [
        "Effectiveness combines planning, prioritisation and delegation.",
        "The communication process: sender, message, medium, receiver, feedback, noise.",
        "Barriers include distortion, overload and physical/psychological noise.",
        "Different media suit different messages (richness).",
        "CPD keeps competence current throughout a career.",
        "Coaching, mentoring and counselling support development.",
      ],
      [
        "Identify two barriers to effective communication.",
        "Why is feedback essential in the communication model?",
        "What is the purpose of CPD?",
      ],
      undefined
    ),
    lesson(
      "bt-l8",
      "Professional ethics and governance",
      60,
      [
        "State the fundamental ethical principles",
        "Identify ethical threats and safeguards",
        "Explain the accountant's role in governance",
      ],
      [
        "Fundamental principles: integrity, objectivity, professional competence & due care, confidentiality, professional behaviour.",
        "Threats: self-interest, self-review, advocacy, familiarity, intimidation.",
        "Safeguards may be created by the profession, legislation or the workplace.",
        "Corporate governance directs and controls organisations in stakeholders' interests.",
        "Codes of ethics can be rules-based or principles-based.",
        "Accountants have a public-interest responsibility beyond the employer.",
      ],
      [
        "List the five fundamental ethical principles.",
        "Give an example of a familiarity threat and a safeguard.",
        "Why is a principles-based code often preferred?",
      ],
      "An accountant asked by a manager to delay recognising an expense to hit a bonus target faces a self-interest/intimidation threat to objectivity; the safeguard is to escalate through governance channels and refuse to misstate the accounts."
    ),
  ],
  frameworksAndFormulas: [
    "PESTEL — Political, Economic, Social, Technological, Environmental, Legal",
    "Porter's Five Forces — rivalry, entrants, substitutes, buyer power, supplier power",
    "Mendelow's matrix — power vs interest stakeholder mapping",
    "Fraud triangle — dishonesty, motive, opportunity",
    "SPAMSOAP — internal control categories",
    "ACCURATE — qualities of good information",
    "Tuckman — forming, storming, norming, performing, adjourning",
    "Maslow's hierarchy of needs / Herzberg two-factor theory",
    "Handy's cultural types — power, role, task, person",
    "Fundamental ethical principles + threats & safeguards",
  ],
  commonTraps: [
    "Listing framework letters without applying them to the scenario.",
    "Confusing financial with management accounting roles.",
    "Treating all stakeholders as equally important instead of mapping them.",
    "Describing controls generically rather than matching them to a specific risk.",
    "Mixing up threats and safeguards in ethics questions.",
    "Forgetting that BT is largely knowledge-based and testing definitions precisely.",
  ],
  examTechnique: [
    "Answer all objective-test questions — there is no negative marking.",
    "Read multiple-response questions carefully for the number of answers required.",
    "For scenario MCQs, identify the trigger words before selecting.",
    "Manage time to roughly one minute per two-mark item.",
    "Eliminate obviously wrong distractors first.",
    "Flag and return to uncertain questions rather than stalling.",
  ],
  practicePlan: [
    "Read the syllabus and study text chapter summaries for each area.",
    "Complete topic-by-topic objective-test question banks.",
    "Drill the named frameworks until you can reproduce them from memory.",
    "Practise scenario MCQs on governance, ethics and controls.",
    "Sit a timed full-length CBE mock under exam conditions.",
    "Review every incorrect answer and log the underlying gap.",
    "Re-test weak areas until consistently above the pass mark.",
  ],
  furtherReading: [
    "ACCA Study Hub — Business & Technology (BT) resources",
    "ACCA BT syllabus and study guide (current exam year)",
    "ACCA technical article: 'Corporate governance and internal control'",
    "ACCA technical article: 'Fundamental ethical principles in practice'",
  ],
});

const MA: ModuleCourseware = courseware({
  moduleId: "acca-all-m2",
  examId: "acca",
  levelId: "all",
  title: "MA — Management Accounting",
  paperCode: "MA",
  examFormat: "On-demand CBE, 2 hours",
  estimatedStudyHours: 55,
  overview:
    "Management Accounting develops the knowledge and ability to apply techniques used to support management in planning, decision-making, performance measurement and control. It covers cost behaviour and classification, costing methods, budgeting, standard costing and variances, and short-term decision techniques. The emphasis is on numerical accuracy and interpreting results for management.",
  whyItMatters:
    "MA equips accountants to turn cost and operational data into decisions on pricing, output and control. Its techniques underpin the Applied Skills paper PM and the strategic paper APM, so mastering the fundamentals pays dividends throughout the qualification.",
  learningOutcomes: [
    "Explain the nature, source and purpose of management information.",
    "Classify costs by behaviour, function and traceability.",
    "Apply cost accounting techniques including absorption and marginal costing.",
    "Prepare and use budgets and forecasts.",
    "Calculate and interpret standard costing variances.",
    "Apply short-term decision-making techniques.",
    "Explain and calculate basic performance measures.",
    "Use spreadsheets and data analysis for management accounting.",
  ],
  syllabusAreas: [
    area(
      "The nature and purpose of management accounting",
      [
        "Management vs financial accounting",
        "Sources and categories of data and information",
        "Cost classification: behaviour, function, traceability",
        "Cost units, cost centres and responsibility centres",
      ],
      "10%"
    ),
    area(
      "Cost accounting techniques",
      [
        "Material, labour and overhead costs",
        "Overhead absorption, under/over absorption",
        "Absorption vs marginal costing and profit reconciliation",
        "Job, batch, process and service costing",
        "Accounting for losses, scrap and by-products",
      ],
      "30%"
    ),
    area(
      "Budgeting and forecasting",
      [
        "Purposes of budgeting and the budget process",
        "Forecasting: high-low, regression, time series",
        "Fixed, flexible and functional budgets",
        "Cash budgets and working capital",
        "Behavioural aspects of budgeting",
      ],
      "20%"
    ),
    area(
      "Standard costing and variances",
      [
        "Setting standards and the standard cost card",
        "Material, labour and variable overhead variances",
        "Sales and fixed overhead variances",
        "Operating statements and variance reconciliation",
        "Interpreting and investigating variances",
      ],
      "20%"
    ),
    area(
      "Short-term decision-making and performance",
      [
        "Cost-volume-profit (CVP) analysis and breakeven",
        "Limiting factor analysis",
        "Relevant costing and make-or-buy",
        "Basic performance indicators and their interpretation",
      ],
      "20%"
    ),
  ],
  lessons: [
    lesson(
      "ma-l1",
      "Cost classification and behaviour",
      60,
      [
        "Classify costs by behaviour and function",
        "Separate fixed and variable elements",
        "Use the high-low method",
      ],
      [
        "Costs are fixed, variable, semi-variable or stepped by behaviour.",
        "Direct costs are traceable; indirect (overhead) costs are not.",
        "Cost units, centres and responsibility centres focus accountability.",
        "High-low uses highest and lowest activity to split semi-variable costs.",
        "The linear cost equation is y = a + bx.",
        "Understanding behaviour underpins forecasting and decision-making.",
      ],
      [
        "Give an example of a stepped fixed cost.",
        "How does high-low estimate variable cost per unit?",
        "Why classify costs before making a decision?",
      ],
      "At 1,000 units total cost is £8,000 and at 2,000 units £12,000. Variable cost = (12,000 − 8,000) / (2,000 − 1,000) = £4/unit; fixed cost = 8,000 − (4 × 1,000) = £4,000."
    ),
    lesson(
      "ma-l2",
      "Materials, labour and overheads",
      75,
      [
        "Value inventory using FIFO/AVCO",
        "Account for labour cost and efficiency",
        "Absorb overheads and treat over/under absorption",
      ],
      [
        "Inventory valuation methods (FIFO, AVCO) affect cost of sales and profit.",
        "Labour costs include idle time and overtime premium treatment.",
        "Overhead absorption rate (OAR) = budgeted overhead / budgeted activity.",
        "Under/over absorption arises when actual differs from budget.",
        "Allocation, apportionment and reapportionment assign overheads to cost centres.",
        "Predetermined rates allow timely product costing.",
      ],
      [
        "How is the OAR calculated?",
        "What causes over-absorption of overheads?",
        "How is overtime premium normally treated?",
      ],
      "Budgeted overhead £100,000 and budgeted labour hours 20,000 give an OAR of £5/hour. If actual overhead is £96,000 and actual hours 20,000 (absorbing £100,000), overheads are over-absorbed by £4,000, credited to the income statement."
    ),
    lesson(
      "ma-l3",
      "Absorption vs marginal costing",
      60,
      [
        "Prepare profit statements under both methods",
        "Reconcile the profit difference",
        "Explain the effect of inventory changes",
      ],
      [
        "Marginal costing charges only variable production cost to units.",
        "Absorption costing includes fixed production overhead in unit cost.",
        "Profit differs only when inventory levels change.",
        "Difference = change in inventory units × fixed overhead per unit.",
        "Marginal costing suits decision-making; absorption for external reporting.",
        "Rising inventory gives higher absorption profit.",
      ],
      [
        "When do the two methods give the same profit?",
        "Which method values inventory higher and why?",
        "How do you reconcile the profit difference?",
      ],
      "Fixed overhead is £10/unit. Closing inventory rises by 500 units, so absorption profit exceeds marginal profit by 500 × £10 = £5,000, because that fixed cost is carried forward in inventory."
    ),
    lesson(
      "ma-l4",
      "Job, batch and process costing",
      60,
      [
        "Select the appropriate costing method",
        "Account for process losses and gains",
        "Value work-in-progress with equivalent units",
      ],
      [
        "Job/batch costing suits distinct outputs; process costing suits continuous output.",
        "Normal loss is expected; abnormal loss/gain is not.",
        "Normal loss with scrap value reduces the cost of good output.",
        "Equivalent units convert partly complete WIP to whole-unit equivalents.",
        "Weighted-average and FIFO methods handle opening WIP differently.",
        "By-products and joint products need cost-apportionment methods.",
      ],
      [
        "How is normal loss treated in cost per unit?",
        "What is an equivalent unit?",
        "Distinguish abnormal loss from abnormal gain.",
      ],
      "Input 1,000 kg costing £5,000 with 10% normal loss (nil scrap) gives 900 good kg; cost per good kg = £5,000 / 900 = £5.56, spreading the normal loss over good output."
    ),
    lesson(
      "ma-l5",
      "Budgeting and forecasting",
      60,
      [
        "Explain the budget-setting process",
        "Forecast using regression and time series",
        "Prepare functional and cash budgets",
      ],
      [
        "Budgets plan, coordinate, communicate, motivate and control.",
        "The principal budget factor (often sales) drives the process.",
        "Least-squares regression fits y = a + bx to data.",
        "Time series separates trend and seasonal variation.",
        "Cash budgets time receipts and payments, not accruals.",
        "Flexible budgets flex allowances to actual activity.",
      ],
      [
        "What is the principal budget factor?",
        "How does a cash budget differ from a profit budget?",
        "What does the gradient b represent in regression?",
      ],
      "With trend units of 500 and a seasonal index of 1.2 (additive would differ), the multiplicative forecast is 500 × 1.2 = 600 units, adjusting the underlying trend for the busy quarter."
    ),
    lesson(
      "ma-l6",
      "Standard costing and variances",
      90,
      [
        "Calculate cost and sales variances",
        "Prepare an operating statement",
        "Interpret and investigate variances",
      ],
      [
        "Standards are set for price/rate and quantity/efficiency.",
        "Material variances: price and usage; labour: rate and efficiency.",
        "Variable overhead: expenditure and efficiency; fixed: expenditure and volume.",
        "Sales variances: price and volume (contribution or profit basis).",
        "An operating statement reconciles budget to actual profit.",
        "Variances may be interdependent (e.g. cheaper material → adverse usage).",
      ],
      [
        "Split the material variance into its two components.",
        "How is the fixed overhead volume variance calculated?",
        "Give an example of interdependent variances.",
      ],
      "Standard material 2 kg at £3 = £6/unit. Actual: 2,100 kg at £3.10 for 1,000 units. Price variance = 2,100 × (3.00 − 3.10) = £210 A; usage variance = (2,000 − 2,100) × £3 = £300 A."
    ),
    lesson(
      "ma-l7",
      "CVP and breakeven analysis",
      60,
      [
        "Calculate breakeven and margin of safety",
        "Apply target profit analysis",
        "Interpret a breakeven and P/V chart",
      ],
      [
        "Contribution = selling price − variable cost per unit.",
        "Breakeven units = fixed costs / contribution per unit.",
        "C/S (P/V) ratio = contribution / sales.",
        "Margin of safety shows how far sales can fall before loss.",
        "Target profit units = (fixed costs + target profit) / contribution.",
        "CVP assumes linearity and a constant sales mix.",
      ],
      [
        "State the breakeven formula in units and revenue.",
        "What does the margin of safety measure?",
        "List two assumptions of CVP analysis.",
      ],
      "Fixed costs £40,000, price £20, variable cost £12 give contribution £8/unit; breakeven = 40,000 / 8 = 5,000 units, or £100,000 revenue at a C/S ratio of 40%."
    ),
    lesson(
      "ma-l8",
      "Relevant costing and limiting factors",
      60,
      [
        "Identify relevant costs and revenues",
        "Solve single-limiting-factor problems",
        "Evaluate make-or-buy decisions",
      ],
      [
        "Relevant costs are future, incremental and cash; ignore sunk/committed costs.",
        "Opportunity cost is the value of the next best alternative forgone.",
        "Rank products by contribution per unit of limiting factor.",
        "Make-or-buy compares relevant in-house cost with the buy-in price.",
        "Qualitative factors (quality, reliability) also matter.",
        "Fixed costs are usually irrelevant unless they change with the decision.",
      ],
      [
        "Why are sunk costs irrelevant?",
        "How do you rank products under one scarce resource?",
        "Name a qualitative factor in make-or-buy.",
      ],
      "With labour scarce, Product A earns £12 contribution using 2 hours (£6/hour) and B earns £15 using 3 hours (£5/hour); A is made first because it yields more contribution per scarce labour hour."
    ),
  ],
  frameworksAndFormulas: [
    "High-low method: variable cost = (cost high − cost low) / (units high − units low)",
    "Cost equation: y = a + bx",
    "Overhead absorption rate = budgeted overhead / budgeted activity level",
    "Marginal vs absorption profit difference = Δinventory units × fixed OAR",
    "Contribution = sales − variable costs; C/S ratio = contribution / sales",
    "Breakeven units = fixed costs / contribution per unit",
    "Margin of safety = (budgeted − breakeven sales) / budgeted sales",
    "Material/labour variances (price/rate and usage/efficiency)",
    "Fixed overhead variances: expenditure and volume",
    "EOQ = √(2CoD / Ch) for inventory ordering",
  ],
  commonTraps: [
    "Treating sunk or committed costs as relevant.",
    "Confusing marginal and absorption profit when inventory changes.",
    "Mislabelling variances as favourable/adverse.",
    "Forgetting scrap value when calculating cost per good unit.",
    "Applying the seasonal index the wrong way (add vs multiply).",
    "Rounding too early and losing marks on numerical accuracy.",
  ],
  examTechnique: [
    "Show workings mentally but check each numeric input carefully.",
    "Use the on-screen calculator and scratchpad efficiently.",
    "Watch units — per unit vs total, hours vs £.",
    "Answer every objective test item; there is no negative marking.",
    "For multi-task questions, complete easy marks before complex calculations.",
    "Re-read the requirement to confirm favourable/adverse and per-unit vs total.",
  ],
  practicePlan: [
    "Master cost classification and behaviour first.",
    "Drill overhead absorption and marginal/absorption reconciliations.",
    "Work large sets of variance questions until fluent.",
    "Practise CVP and limiting-factor decision questions.",
    "Complete a full timed CBE mock.",
    "Analyse errors, focusing on units and sign conventions.",
    "Re-test standard costing and relevant costing before the exam.",
  ],
  furtherReading: [
    "ACCA Study Hub — Management Accounting (MA) resources",
    "ACCA MA syllabus and study guide (current exam year)",
    "ACCA technical article: 'Variance analysis explained'",
    "ACCA technical article: 'Marginal and absorption costing'",
  ],
});

const FA: ModuleCourseware = courseware({
  moduleId: "acca-all-m3",
  examId: "acca",
  levelId: "all",
  title: "FA — Financial Accounting",
  paperCode: "FA",
  examFormat: "On-demand CBE, 2 hours",
  estimatedStudyHours: 60,
  overview:
    "Financial Accounting develops the knowledge and skills to record transactions using double-entry bookkeeping and to prepare basic financial statements for sole traders, partnerships and simple companies, including a straightforward consolidation. It covers the regulatory framework, control accounts, adjustments and the interpretation of financial statements. Accuracy and understanding of the accounting equation are central.",
  whyItMatters:
    "FA is the technical bedrock for all reporting papers: FR, SBR and audit all assume fluency in double-entry, accruals and statement preparation. Getting the mechanics right early makes advanced consolidation and interpretation far more approachable.",
  learningOutcomes: [
    "Explain the context and purpose of financial reporting.",
    "Apply the qualitative characteristics of useful information.",
    "Record transactions using double-entry bookkeeping.",
    "Prepare and reconcile control accounts and the trial balance.",
    "Account for adjustments: accruals, prepayments, depreciation, provisions and irrecoverable debts.",
    "Prepare financial statements for sole traders and companies.",
    "Prepare simple consolidated financial statements.",
    "Interpret financial statements using basic ratios.",
  ],
  syllabusAreas: [
    area(
      "The context and purpose of financial reporting",
      [
        "Users and their information needs",
        "The regulatory framework and IFRS Foundation",
        "The IASB Conceptual Framework and qualitative characteristics",
        "Governance and the duties of directors",
      ],
      "5–10%"
    ),
    area(
      "Recording transactions and events",
      [
        "The accounting equation and double-entry",
        "Books of prime entry and ledgers",
        "Sales tax, discounts and inventory",
        "Non-current assets, depreciation and disposals",
        "Accruals, prepayments, provisions and irrecoverable debts",
      ],
      "30%"
    ),
    area(
      "Trial balance, control accounts and reconciliations",
      [
        "Preparing the trial balance",
        "Receivables and payables control accounts",
        "Bank reconciliations",
        "Correction of errors and suspense accounts",
      ],
      "20%"
    ),
    area(
      "Preparing financial statements",
      [
        "Statement of profit or loss and financial position",
        "Statement of cash flows (single entity)",
        "Sole trader, partnership and company statements",
        "Events after the reporting period",
      ],
      "25%"
    ),
    area(
      "Consolidations and interpretation",
      [
        "Group accounts: goodwill, NCI and reserves",
        "Simple consolidated statement of financial position and profit or loss",
        "Ratio analysis: profitability, liquidity, gearing, efficiency",
        "Limitations of financial statements and ratios",
      ],
      "15–20%"
    ),
  ],
  lessons: [
    lesson(
      "fa-l1",
      "The accounting equation and double-entry",
      60,
      [
        "State and apply the accounting equation",
        "Record transactions with debits and credits",
        "Explain the dual effect of transactions",
      ],
      [
        "Assets = Capital + Liabilities (the accounting equation).",
        "Every transaction has a dual effect keeping the equation in balance.",
        "Debit increases assets/expenses; credit increases liabilities/income/capital.",
        "Transactions flow from prime entry to ledgers to trial balance.",
        "The trial balance checks arithmetic, not completeness or correctness.",
        "Capital represents the owner's residual interest.",
      ],
      [
        "State the accounting equation.",
        "Which side records an increase in a liability?",
        "What errors does a trial balance not detect?",
      ],
      "A business buys inventory for £2,000 cash: debit inventory (asset up) £2,000 and credit cash (asset down) £2,000, leaving the accounting equation in balance."
    ),
    lesson(
      "fa-l2",
      "The regulatory and conceptual framework",
      45,
      [
        "Describe the IFRS regulatory framework",
        "Explain the qualitative characteristics",
        "Apply the elements of the financial statements",
      ],
      [
        "The IFRS Foundation oversees the IASB which issues IFRS Standards.",
        "Fundamental characteristics: relevance and faithful representation.",
        "Enhancing characteristics: comparability, verifiability, timeliness, understandability.",
        "Elements: assets, liabilities, equity, income, expenses.",
        "Recognition depends on meeting definitions and providing useful information.",
        "Accruals and going concern are underlying assumptions.",
      ],
      [
        "Name the two fundamental qualitative characteristics.",
        "List the five elements of the financial statements.",
        "What is the going concern assumption?",
      ],
      undefined
    ),
    lesson(
      "fa-l3",
      "Non-current assets and depreciation",
      75,
      [
        "Account for acquisition and depreciation",
        "Record disposals and profit/loss on sale",
        "Explain revaluation basics",
      ],
      [
        "Capital expenditure is capitalised; revenue expenditure is expensed.",
        "Depreciation spreads cost over useful life (straight-line or reducing balance).",
        "Carrying amount = cost − accumulated depreciation.",
        "Disposal profit/loss = proceeds − carrying amount.",
        "Revaluation gains go to a revaluation surplus via other comprehensive income.",
        "A non-current asset register supports control.",
      ],
      [
        "Compare straight-line and reducing-balance depreciation.",
        "How is a profit on disposal calculated?",
        "Where does a revaluation gain go?",
      ],
      "An asset costing £10,000 depreciated straight-line over 5 years (nil residual) has a carrying amount of £6,000 after 2 years; sold for £7,000 it yields a £1,000 profit on disposal."
    ),
    lesson(
      "fa-l4",
      "Accruals, prepayments and provisions",
      60,
      [
        "Apply the accruals concept",
        "Adjust for accruals and prepayments",
        "Account for provisions and irrecoverable debts",
      ],
      [
        "Accruals match income and expense to the period earned/incurred.",
        "Accrued expenses are liabilities; prepayments are assets.",
        "Irrecoverable debts are written off to expense.",
        "An allowance for receivables reflects doubtful amounts.",
        "Provisions require a present obligation, probable outflow and reliable estimate.",
        "Adjustments update the trial balance before statements.",
      ],
      [
        "Is a prepayment an asset or liability?",
        "When can a provision be recognised?",
        "How is an increase in the receivables allowance recorded?",
      ],
      "Rent of £12,000 covers the year but £3,000 relates to next year; the prepayment reduces this year's expense to £9,000 and creates a £3,000 current asset."
    ),
    lesson(
      "fa-l5",
      "Control accounts, reconciliations and errors",
      60,
      [
        "Prepare receivables/payables control accounts",
        "Perform a bank reconciliation",
        "Correct errors using suspense accounts",
      ],
      [
        "Control accounts summarise the personal ledgers for control.",
        "Reconciling the control account to the ledger list detects errors.",
        "Bank reconciliations explain differences (unpresented cheques, lodgements).",
        "Some errors do not affect the trial balance (omission, commission).",
        "A suspense account holds a difference until errors are found.",
        "Journal entries correct errors and clear the suspense account.",
      ],
      [
        "Name two errors that do not disturb the trial balance.",
        "What is an unpresented cheque?",
        "Why reconcile the control account to the ledger?",
      ],
      "A cash receipt of £450 posted as £540 overstates the bank ledger by £90; the correcting journal reduces bank and clears the suspense balance created by the difference."
    ),
    lesson(
      "fa-l6",
      "Preparing company financial statements",
      75,
      [
        "Prepare the statement of profit or loss",
        "Prepare the statement of financial position",
        "Account for share issues and dividends",
      ],
      [
        "Companies present SPL, SOFP, statement of changes in equity and cash flows.",
        "Share capital, share premium and retained earnings form equity.",
        "Dividends are appropriations, not expenses.",
        "Income tax is estimated and charged in the SPL.",
        "Formats follow IAS 1 presentation requirements.",
        "Bonus and rights issues affect share capital and premium differently.",
      ],
      [
        "Where are dividends shown in the statements?",
        "Distinguish share premium from share capital.",
        "What statements make up a full set under IAS 1?",
      ],
      "A company issues 100,000 £1 shares at £1.50: share capital increases by £100,000 and share premium by £50,000, with cash rising by the £150,000 received."
    ),
    lesson(
      "fa-l7",
      "The statement of cash flows",
      60,
      [
        "Classify cash flows into three activities",
        "Prepare operating cash flow (indirect method)",
        "Explain why profit differs from cash",
      ],
      [
        "Cash flows are operating, investing and financing (IAS 7).",
        "The indirect method adjusts profit for non-cash items and working capital.",
        "Add back depreciation and losses; deduct gains.",
        "Working-capital movements adjust for accruals in profit.",
        "Investing covers asset purchases/sales; financing covers shares and loans.",
        "Cash flow reveals liquidity that profit alone can hide.",
      ],
      [
        "Why add back depreciation to profit?",
        "In which activity is a dividend paid usually shown?",
        "How does an increase in receivables affect operating cash flow?",
      ],
      "Profit £50,000 plus depreciation £10,000 less a £4,000 rise in receivables gives operating cash flow of £56,000 before interest and tax, reconciling profit to cash generated."
    ),
    lesson(
      "fa-l8",
      "Simple consolidation and interpretation",
      75,
      [
        "Calculate goodwill and non-controlling interest",
        "Prepare a simple consolidated SOFP",
        "Interpret statements with key ratios",
      ],
      [
        "Control (usually >50%) requires consolidation of the subsidiary.",
        "Goodwill = consideration + NCI − fair value of net assets acquired.",
        "NCI shows the outside shareholders' share of equity.",
        "Intra-group balances and unrealised profit are eliminated.",
        "Ratios cover profitability, liquidity, efficiency and gearing.",
        "Interpretation needs context, trends and comparatives.",
      ],
      [
        "How is goodwill calculated on acquisition?",
        "Why eliminate intra-group balances?",
        "Give one profitability and one liquidity ratio.",
      ],
      "Parent pays £80,000 for 80% of a subsidiary with net assets of £90,000; with NCI at fair value £18,000, goodwill = 80,000 + 18,000 − 90,000 = £8,000."
    ),
  ],
  frameworksAndFormulas: [
    "Accounting equation: Assets = Capital + Liabilities",
    "Carrying amount = cost − accumulated depreciation",
    "Straight-line depreciation = (cost − residual) / useful life",
    "Reducing-balance depreciation = rate × carrying amount",
    "Goodwill = consideration + NCI − fair value of net assets acquired",
    "Gross/operating/net profit margins",
    "Current ratio = current assets / current liabilities",
    "Gearing = debt / (debt + equity)",
    "Receivables days = (receivables / credit sales) × 365",
    "Indirect operating cash flow = profit ± non-cash items ± working capital",
  ],
  commonTraps: [
    "Reversing debits and credits under time pressure.",
    "Forgetting to adjust profit for accruals/prepayments before statements.",
    "Treating dividends as an expense rather than an appropriation.",
    "Omitting NCI or mis-timing acquisition in consolidations.",
    "Netting off unpresented cheques the wrong way in bank reconciliations.",
    "Interpreting ratios without comparatives or context.",
  ],
  examTechnique: [
    "Balance the accounting equation mentally as a check.",
    "Lay out T-accounts on the scratchpad for complex adjustments.",
    "Read whether figures are for the sole entity or the group.",
    "Attempt every objective-test item.",
    "For multi-task questions, secure the easy proforma marks first.",
    "Recheck sign and direction of working-capital adjustments.",
  ],
  practicePlan: [
    "Drill double-entry until debits/credits are automatic.",
    "Practise adjustments (depreciation, accruals, bad debts) repeatedly.",
    "Complete control account and bank reconciliation questions.",
    "Prepare full sets of company statements to time.",
    "Work several simple consolidation questions.",
    "Sit a full timed CBE mock and review errors.",
    "Re-test consolidation and cash flow before the exam.",
  ],
  furtherReading: [
    "ACCA Study Hub — Financial Accounting (FA) resources",
    "ACCA FA syllabus and study guide (current exam year)",
    "IASB Conceptual Framework for Financial Reporting (summary)",
    "ACCA technical article: 'Preparing simple consolidated financial statements'",
  ],
});

/* -------------------------------------------------------------------------- */
/* Applied Skills                                                             */
/* -------------------------------------------------------------------------- */

const LW: ModuleCourseware = courseware({
  moduleId: "acca-all-m4",
  examId: "acca",
  levelId: "all",
  title: "LW — Corporate & Business Law",
  paperCode: "LW",
  examFormat: "On-demand CBE, 2 hours",
  estimatedStudyHours: 80,
  overview:
    "Corporate & Business Law develops knowledge and understanding of the general legal framework within which business operates, and of the specific legal areas relating to business, recognising when to seek further specialist legal advice. It covers the legal system, obligations (contract and tort), employment, company formation and administration, capital and financing, management and insolvency, and fraudulent behaviour. The English variant is the most common, with jurisdiction-specific streams available.",
  whyItMatters:
    "Accountants routinely encounter contracts, company procedures, directors' duties and insolvency. LW gives the legal literacy to spot issues, apply rules to scenarios and know when specialist advice is needed — knowledge reinforced in governance topics of SBL.",
  learningOutcomes: [
    "Describe the sources and structure of the legal system.",
    "Explain the essential elements of a valid contract and remedies for breach.",
    "Explain the law of tort, particularly negligence and professional liability.",
    "Describe employment law rights and dismissal.",
    "Explain the formation and constitution of companies.",
    "Describe company financing through shares and loan capital.",
    "Explain directors' duties, meetings and administration.",
    "Describe insolvency, administration and fraudulent/criminal behaviour.",
  ],
  syllabusAreas: [
    area(
      "Essential elements of the legal system",
      [
        "Court structure and sources of law",
        "Case law, precedent and statute",
        "Human rights and delegated legislation",
        "Alternative dispute resolution",
      ],
      "10%"
    ),
    area(
      "The law of obligations",
      [
        "Formation of contract: offer, acceptance, consideration, intention",
        "Contract terms, exclusion clauses and breach",
        "Remedies for breach of contract",
        "The tort of negligence and duty of care",
        "Professional negligence and economic loss",
      ],
      "20%"
    ),
    area(
      "Employment law",
      [
        "Contract of employment and implied terms",
        "Employee vs self-employed status",
        "Dismissal: wrongful and unfair",
        "Redundancy and continuity of employment",
      ],
      "15%"
    ),
    area(
      "The formation and constitution of business organisations",
      [
        "Agency and partnership law",
        "Corporate personality and the veil of incorporation",
        "Company types and formation procedures",
        "Constitution: articles and shareholder agreements",
      ],
      "15%"
    ),
    area(
      "Capital and the financing of companies",
      [
        "Share capital, classes and variation of rights",
        "Loan capital, charges and registration",
        "Capital maintenance and dividends",
      ],
      "15%"
    ),
    area(
      "Management, administration, insolvency and legal implications",
      [
        "Directors' appointment, duties and removal",
        "Company meetings and resolutions",
        "Insolvency, liquidation and administration",
        "Fraudulent and wrongful trading; money laundering; bribery",
      ],
      "25%"
    ),
  ],
  lessons: [
    lesson(
      "lw-l1",
      "The legal system and sources of law",
      60,
      [
        "Describe the court hierarchy",
        "Explain precedent and statutory interpretation",
        "Distinguish criminal and civil law",
      ],
      [
        "Common law develops through binding judicial precedent.",
        "Ratio decidendi binds; obiter dicta persuades.",
        "Courts are arranged in a hierarchy affecting precedent.",
        "Statute is the highest domestic source of law.",
        "Criminal law punishes; civil law compensates.",
        "Standards of proof differ (beyond reasonable doubt vs balance of probabilities).",
      ],
      [
        "Distinguish ratio decidendi from obiter dicta.",
        "What is the civil standard of proof?",
        "Which source of law prevails over case law?",
      ],
      undefined
    ),
    lesson(
      "lw-l2",
      "Formation and terms of contract",
      75,
      [
        "Identify offer, acceptance and consideration",
        "Distinguish terms from representations",
        "Assess the validity of exclusion clauses",
      ],
      [
        "A valid contract needs offer, acceptance, consideration and intention.",
        "An invitation to treat is not an offer (e.g. goods on display).",
        "Acceptance must be communicated; the postal rule is an exception.",
        "Consideration must be sufficient but need not be adequate.",
        "Conditions are fundamental; warranties are minor terms.",
        "Exclusion clauses must be incorporated and pass reasonableness tests.",
      ],
      [
        "Is a price ticket an offer or an invitation to treat?",
        "When does the postal rule apply?",
        "Distinguish a condition from a warranty.",
      ],
      "A shop displays a jacket priced at £50; this is an invitation to treat, so the customer makes the offer at the till, which the shop may accept or decline — no contract exists merely from the display."
    ),
    lesson(
      "lw-l3",
      "Breach of contract and remedies",
      60,
      [
        "Explain types of breach",
        "Calculate damages for breach",
        "Describe equitable remedies",
      ],
      [
        "Breach may be actual or anticipatory.",
        "Damages aim to put the claimant in the position had the contract been performed.",
        "Losses must not be too remote (Hadley v Baxendale).",
        "The claimant must mitigate loss.",
        "Liquidated damages are enforceable; penalties are not.",
        "Equitable remedies include specific performance and injunctions.",
      ],
      [
        "State the remoteness rule for damages.",
        "What is the duty to mitigate?",
        "When is a liquidated damages clause unenforceable?",
      ],
      "A supplier fails to deliver; the buyer sources elsewhere at £2,000 extra. Damages of £2,000 are recoverable as the natural consequence, provided the buyer acted reasonably to mitigate."
    ),
    lesson(
      "lw-l4",
      "Negligence and professional liability",
      60,
      [
        "Establish the elements of negligence",
        "Explain duty of care for economic loss",
        "Apply professional-advice liability principles",
      ],
      [
        "Negligence needs duty, breach and causation of foreseeable damage.",
        "Duty of care depends on proximity and reasonableness.",
        "Pure economic loss from advice requires a special relationship.",
        "Professional advisers may be liable to known third parties who rely.",
        "Contributory negligence can reduce damages.",
        "Disclaimers may limit but not always exclude liability.",
      ],
      [
        "List the three elements of negligence.",
        "When is a duty owed for negligent misstatement?",
        "How does contributory negligence affect damages?",
      ],
      "An accountant negligently prepares accounts knowing a specific bank will rely on them to lend; a special relationship exists, so the bank's foreseeable economic loss may be recoverable."
    ),
    lesson(
      "lw-l5",
      "Employment law",
      60,
      [
        "Distinguish employees from the self-employed",
        "Explain wrongful and unfair dismissal",
        "Describe redundancy rights",
      ],
      [
        "Employment status affects rights, tax and liability.",
        "Tests include control, integration and economic reality.",
        "Wrongful dismissal is a contractual claim (notice); unfair is statutory.",
        "Fair reasons include conduct, capability and redundancy.",
        "A fair procedure is required even with a fair reason.",
        "Redundancy requires a genuine reduction in the need for work.",
      ],
      [
        "Name two tests of employment status.",
        "Contrast wrongful and unfair dismissal.",
        "Give two potentially fair reasons for dismissal.",
      ],
      undefined
    ),
    lesson(
      "lw-l6",
      "Company formation and constitution",
      60,
      [
        "Explain corporate personality and the veil",
        "Compare company types",
        "Describe the constitution and formation process",
      ],
      [
        "A company is a separate legal person (Salomon).",
        "The veil of incorporation is lifted only exceptionally.",
        "Private and public companies differ in capital and share offers.",
        "The articles form the company's constitution.",
        "Promoters and pre-incorporation contracts raise liability issues.",
        "Registration produces a certificate of incorporation.",
      ],
      [
        "What did Salomon v Salomon establish?",
        "Give one situation where the veil is lifted.",
        "How does a public company differ from a private one?",
      ],
      "In Salomon, the company's debts were its own, not the sole owner's, confirming separate legal personality — creditors could not pursue Mr Salomon personally for the company's liabilities."
    ),
    lesson(
      "lw-l7",
      "Company financing and capital maintenance",
      60,
      [
        "Compare share and loan capital",
        "Explain charges and their registration",
        "Apply capital maintenance rules",
      ],
      [
        "Ordinary and preference shares carry different rights.",
        "Debentures and loans create creditor relationships.",
        "Fixed and floating charges secure lending; registration affects priority.",
        "Capital maintenance protects creditors by restricting returns.",
        "Dividends are payable only from distributable profits.",
        "A floating charge crystallises on default or insolvency.",
      ],
      [
        "Distinguish a fixed from a floating charge.",
        "Why must charges be registered?",
        "From what may dividends be paid?",
      ],
      undefined
    ),
    lesson(
      "lw-l8",
      "Directors, insolvency and unlawful behaviour",
      75,
      [
        "Explain directors' duties and removal",
        "Describe liquidation and administration",
        "Identify fraudulent and wrongful trading",
      ],
      [
        "Directors owe statutory duties (e.g. to promote success, avoid conflicts).",
        "Directors can be removed by ordinary resolution with special notice.",
        "Liquidation may be voluntary or compulsory.",
        "Administration seeks rescue as a going concern.",
        "Wrongful trading imposes liability for continuing to trade insolvently.",
        "Money laundering and bribery legislation impose personal criminal risk.",
      ],
      [
        "Name three statutory directors' duties.",
        "Distinguish fraudulent from wrongful trading.",
        "What is the aim of administration?",
      ],
      "A director who keeps trading and taking supplier credit when insolvent liquidation is unavoidable may be personally liable for wrongful trading, contributing to the deficiency suffered by creditors."
    ),
  ],
  frameworksAndFormulas: [
    "Contract formation: offer + acceptance + consideration + intention",
    "Hadley v Baxendale remoteness of damage rule",
    "Negligence: duty + breach + causation + foreseeable loss",
    "Caparo three-stage test for duty of care",
    "Salomon principle — separate corporate personality",
    "Employment status tests: control, integration, economic reality",
    "Fixed vs floating charge priority rules",
    "Capital maintenance — dividends from distributable profits only",
    "Resolutions: ordinary (>50%) vs special (75%)",
    "Wrongful vs fraudulent trading tests (Insolvency Act)",
  ],
  commonTraps: [
    "Confusing an invitation to treat with an offer.",
    "Mixing wrongful and unfair dismissal.",
    "Failing to apply case law to the specific scenario facts.",
    "Confusing fixed and floating charges and their priority.",
    "Muddling ordinary and special resolution thresholds.",
    "Confusing fraudulent (dishonest) with wrongful (negligent) trading.",
  ],
  examTechnique: [
    "Use IRAC-style thinking (issue, rule, application, conclusion) for scenario MCQs.",
    "Identify the precise legal issue before selecting an answer.",
    "Beware distractors that state real law irrelevant to the facts.",
    "Attempt every objective-test item.",
    "Watch resolution percentages and notice periods carefully.",
    "For multi-response items, count how many answers are required.",
  ],
  practicePlan: [
    "Learn the court structure and sources of law first.",
    "Drill contract formation and remedies scenarios.",
    "Practise negligence and employment status questions.",
    "Work through company formation, capital and directors topics.",
    "Complete insolvency and fraudulent-behaviour questions.",
    "Sit a full timed CBE mock.",
    "Re-test weak legal areas using scenario MCQs.",
  ],
  furtherReading: [
    "ACCA Study Hub — Corporate & Business Law (LW) resources",
    "ACCA LW (English) syllabus and study guide (current exam year)",
    "ACCA technical article: 'Directors' duties under the Companies Act'",
    "ACCA technical article: 'The tort of negligence for accountants'",
  ],
});

const PM: ModuleCourseware = courseware({
  moduleId: "acca-all-m5",
  examId: "acca",
  levelId: "all",
  title: "PM — Performance Management",
  paperCode: "PM",
  examFormat: "Session CBE, 3 hours",
  estimatedStudyHours: 100,
  overview:
    "Performance Management applies management accounting techniques to quantitative and qualitative information for planning, decision-making, performance evaluation and control. It builds on MA, extending into specialist costing, advanced decision-making under risk, budgeting systems, detailed variance analysis and divisional performance measurement. Interpretation and communication of results to management are heavily examined.",
  whyItMatters:
    "PM bridges technical costing and strategic performance, teaching accountants to evaluate decisions and appraise performance in real business contexts. It is the direct foundation for the strategic option paper APM.",
  learningOutcomes: [
    "Apply specialist cost and management accounting techniques (ABC, target, lifecycle, throughput).",
    "Analyse and apply decision-making techniques under risk and uncertainty.",
    "Evaluate budgeting systems and prepare/interpret budgets.",
    "Calculate and interpret advanced variances including mix and yield.",
    "Assess divisional performance using ROI, RI and transfer pricing.",
    "Apply financial and non-financial performance indicators.",
    "Interpret results and recommend actions to management.",
    "Discuss performance management in not-for-profit contexts.",
  ],
  syllabusAreas: [
    area(
      "Specialist cost and management accounting techniques",
      [
        "Activity-based costing (ABC)",
        "Target costing",
        "Lifecycle costing",
        "Throughput accounting",
        "Environmental accounting",
      ],
      "10–15%"
    ),
    area(
      "Decision-making techniques",
      [
        "Relevant costing and CVP",
        "Limiting factors and linear programming",
        "Pricing decisions and price elasticity",
        "Make-or-buy, shutdown and further processing",
        "Risk and uncertainty (expected values, decision trees, maximin/minimax)",
      ],
      "20–25%"
    ),
    area(
      "Budgeting and control",
      [
        "Budgetary systems: incremental, ZBB, activity-based, rolling",
        "Quantitative analysis and learning curves",
        "Standard costing and behavioural aspects",
        "Forecasting techniques",
      ],
      "20%"
    ),
    area(
      "Standard costing and variance analysis",
      [
        "Advanced material mix and yield variances",
        "Sales mix and quantity variances",
        "Planning and operational variances",
        "Reconciling budgeted and actual profit",
      ],
      "20%"
    ),
    area(
      "Performance measurement and control",
      [
        "Financial and non-financial performance indicators",
        "Divisional performance: ROI, RI, EVA",
        "Transfer pricing",
        "Performance in not-for-profit and public sectors",
        "The balanced scorecard and building block models",
      ],
      "20–25%"
    ),
  ],
  lessons: [
    lesson(
      "pm-l1",
      "Specialist costing techniques",
      75,
      [
        "Apply activity-based costing",
        "Explain target and lifecycle costing",
        "Apply throughput accounting",
      ],
      [
        "ABC assigns overheads via cost drivers rather than volume.",
        "Target cost = target price − required margin; close gaps by cost reduction.",
        "Lifecycle costing captures all costs from design to withdrawal.",
        "Throughput accounting maximises throughput contribution per bottleneck hour.",
        "TA ratio = throughput per hour / factory cost per hour.",
        "Each technique suits different competitive contexts.",
      ],
      [
        "What is a cost driver in ABC?",
        "How is a target cost gap addressed?",
        "State the throughput accounting ratio.",
      ],
      "A product sells for £50 with a required 30% margin, so target cost = £35; if current cost is £40, a £5 target cost gap must be closed through value engineering or supplier negotiation."
    ),
    lesson(
      "pm-l2",
      "Decision-making under certainty",
      75,
      [
        "Apply relevant costing to decisions",
        "Solve multi-limiting-factor problems with linear programming",
        "Evaluate pricing decisions",
      ],
      [
        "Relevant costs are future, incremental and cash.",
        "Linear programming handles two or more scarce resources.",
        "The optimal solution lies at a vertex of the feasible region.",
        "Shadow price is the extra contribution from one more unit of a scarce resource.",
        "Pricing uses elasticity and the P = a − bQ demand relationship.",
        "Profit is maximised where marginal revenue equals marginal cost.",
      ],
      [
        "What is a shadow price?",
        "Where is the optimal LP solution found?",
        "How is a demand function used in pricing?",
      ],
      "Solving MR = MC where P = 100 − 2Q gives MR = 100 − 4Q; setting equal to MC of 20 gives Q = 20 and P = £60, the profit-maximising price and output."
    ),
    lesson(
      "pm-l3",
      "Risk and uncertainty",
      60,
      [
        "Apply expected values and decision trees",
        "Use maximin, maximax and minimax regret",
        "Interpret the value of information",
      ],
      [
        "Expected value weights outcomes by probability.",
        "Decision trees structure sequential decisions and chance events.",
        "Maximin is risk-averse; maximax is risk-seeking.",
        "Minimax regret minimises the maximum opportunity loss.",
        "Perfect information value = EV with information − EV without.",
        "Attitude to risk affects which criterion is chosen.",
      ],
      [
        "Define expected value.",
        "What does a risk-averse decision maker use?",
        "How is the value of perfect information calculated?",
      ],
      "With payoffs of £100 (p=0.6) and £20 (p=0.4), EV = 0.6×100 + 0.4×20 = £68; a maximin decision maker would instead choose the option with the best worst-case outcome regardless of probability."
    ),
    lesson(
      "pm-l4",
      "Budgetary systems and quantitative analysis",
      60,
      [
        "Compare budgeting systems",
        "Apply the learning curve",
        "Explain behavioural effects of budgets",
      ],
      [
        "Incremental budgets adjust last year; ZBB justifies from zero.",
        "Activity-based and rolling budgets improve relevance.",
        "The learning curve: cumulative average time falls by a constant % as output doubles.",
        "y = axᵇ where b = log(learning rate)/log 2.",
        "Participation can improve motivation but risk budgetary slack.",
        "Feedback and feedforward control support performance.",
      ],
      [
        "Contrast ZBB with incremental budgeting.",
        "State the learning curve formula.",
        "What is budgetary slack?",
      ],
      "At an 80% learning rate, doubling output from 1 to 2 units cuts the cumulative average time from 100 to 80 hours per unit, so total time for 2 units is 160 hours, not 200."
    ),
    lesson(
      "pm-l5",
      "Advanced variance analysis",
      90,
      [
        "Calculate mix and yield variances",
        "Split sales variances into mix and quantity",
        "Apply planning and operational variances",
      ],
      [
        "Material mix variance measures the effect of changing input proportions.",
        "Yield variance measures output efficiency from the standard mix.",
        "Sales mix and quantity variances decompose the sales volume variance.",
        "Planning variances reflect revised standards; operational reflect performance.",
        "Splitting isolates controllable from uncontrollable causes.",
        "Interpretation for management is as important as calculation.",
      ],
      [
        "Distinguish mix from yield variance.",
        "Why split into planning and operational variances?",
        "What does the sales quantity variance measure?",
      ],
      "If cheaper material is substituted into a mix, a favourable mix variance may be offset by an adverse yield variance because lower-quality inputs reduce output — the net effect must be interpreted together."
    ),
    lesson(
      "pm-l6",
      "Divisional performance and transfer pricing",
      75,
      [
        "Calculate ROI and residual income",
        "Evaluate divisional performance",
        "Set appropriate transfer prices",
      ],
      [
        "ROI = divisional profit / divisional investment.",
        "Residual income = profit − (imputed interest × investment).",
        "ROI can cause dysfunctional decisions; RI aligns better with NPV.",
        "Transfer prices affect divisional profit and motivation.",
        "The ideal transfer price is marginal cost plus opportunity cost.",
        "Market-based prices suit divisions with external markets.",
      ],
      [
        "How can ROI cause dysfunctional decisions?",
        "State the residual income formula.",
        "What is the general rule for a transfer price?",
      ],
      "A division with ROI of 20% may reject a project returning 15% even though group cost of capital is 10%; residual income, charging capital at 10%, would correctly show the project adds value."
    ),
    lesson(
      "pm-l7",
      "Performance indicators and the balanced scorecard",
      60,
      [
        "Select financial and non-financial KPIs",
        "Apply the balanced scorecard",
        "Assess performance in not-for-profit settings",
      ],
      [
        "Financial measures can be short-termist; NFPIs add balance.",
        "The balanced scorecard covers financial, customer, internal, learning perspectives.",
        "The building block model links standards, rewards and dimensions.",
        "Not-for-profit performance uses value for money (3 Es).",
        "Targets should be relevant, measurable and controllable.",
        "Poorly chosen measures cause dysfunctional behaviour.",
      ],
      [
        "Name the four balanced scorecard perspectives.",
        "What are the three Es of value for money?",
        "Give a risk of relying only on financial KPIs.",
      ],
      undefined
    ),
    lesson(
      "pm-l8",
      "Interpretation and communication to management",
      45,
      [
        "Interpret performance results in context",
        "Recommend actions from analysis",
        "Communicate findings clearly",
      ],
      [
        "Numbers require interpretation against objectives and context.",
        "Link variances and KPIs to underlying business causes.",
        "Recommendations must be practical and prioritised.",
        "Consider both financial and qualitative implications.",
        "Communication should suit the management audience.",
        "Marks in PM often reward interpretation over calculation.",
      ],
      [
        "Why is context essential to interpreting a variance?",
        "What makes a recommendation useful to management?",
        "Why do interpretation marks matter in PM?",
      ],
      undefined
    ),
  ],
  frameworksAndFormulas: [
    "ABC — overhead / cost driver volume = cost driver rate",
    "Target cost = target selling price − required profit margin",
    "Throughput accounting ratio = throughput per hour / factory cost per hour",
    "Learning curve: y = axᵇ, b = log(rate)/log 2",
    "Expected value = Σ(probability × outcome)",
    "Value of perfect information = EV with − EV without",
    "ROI = divisional profit / divisional investment",
    "Residual income = profit − (cost of capital × investment)",
    "Transfer price = marginal cost + opportunity cost",
    "Material mix and yield; sales mix and quantity variances",
  ],
  commonTraps: [
    "Calculating variances but failing to interpret them for marks.",
    "Ignoring interdependence between mix and yield variances.",
    "Treating fixed costs as relevant in decision questions.",
    "Confusing planning with operational variances.",
    "Using ROI advice that conflicts with NPV/RI logic.",
    "Overlooking qualitative and behavioural factors.",
  ],
  examTechnique: [
    "Plan time across the objective and constructed-response sections.",
    "Present numerical answers clearly with labelled workings.",
    "Always add interpretation and a recommendation where asked.",
    "Use the requirement verbs to gauge depth needed.",
    "Attempt every part — partial marks are available.",
    "Reserve time to review calculations and units.",
  ],
  practicePlan: [
    "Revisit MA fundamentals (costing, variances, CVP).",
    "Drill specialist costing and decision-making techniques.",
    "Practise risk/uncertainty and budgeting questions.",
    "Work advanced variance and divisional performance questions.",
    "Practise interpretation-heavy constructed-response questions.",
    "Sit a full three-hour mock under exam conditions.",
    "Review and re-test interpretation and mix/yield variances.",
  ],
  furtherReading: [
    "ACCA Study Hub — Performance Management (PM) resources",
    "ACCA PM syllabus and study guide (current exam year)",
    "ACCA technical article: 'Throughput accounting and the theory of constraints'",
    "ACCA technical article: 'Divisional performance and transfer pricing'",
  ],
});

const TX: ModuleCourseware = courseware({
  moduleId: "acca-all-m6",
  examId: "acca",
  levelId: "all",
  title: "TX — Taxation",
  paperCode: "TX",
  examFormat: "Session CBE, 3 hours",
  estimatedStudyHours: 110,
  overview:
    "Taxation develops knowledge and skills relating to the tax system as applicable to individuals, single companies and groups of companies. The most common variant (UK) covers income tax, national insurance, corporation tax, chargeable gains, inheritance tax, VAT and the administration of the system. Accurate computation and awareness of key rules and deadlines are essential.",
  whyItMatters:
    "Tax computation and planning are core to practice and advisory work. TX establishes the technical foundation for the strategic option paper ATX and gives accountants the ability to compute liabilities and advise on compliance obligations.",
  learningOutcomes: [
    "Explain the operation and scope of the tax system and obligations.",
    "Compute income tax liabilities for individuals.",
    "Compute national insurance contributions.",
    "Compute chargeable gains for individuals and companies.",
    "Compute inheritance tax liabilities.",
    "Compute corporation tax liabilities for companies and groups.",
    "Explain and compute VAT liabilities.",
    "Describe self-assessment, payment dates and penalties.",
  ],
  syllabusAreas: [
    area(
      "The UK tax system and administration",
      [
        "Overall function and structure of taxation",
        "Self-assessment for individuals and companies",
        "Payment dates, penalties and interest",
        "Tax avoidance, evasion and ethics",
      ],
      "10%"
    ),
    area(
      "Income tax and NIC",
      [
        "Employment income and benefits",
        "Trading income and adjustment of profits",
        "Property and investment income",
        "Personal allowances, reliefs and the income tax computation",
        "National insurance contributions",
      ],
      "30%"
    ),
    area(
      "Chargeable gains",
      [
        "Computation of gains and losses",
        "Reliefs: business asset disposal, rollover, gift",
        "Shares and securities (matching rules)",
        "Chargeable gains for companies",
      ],
      "15%"
    ),
    area(
      "Corporation tax",
      [
        "Taxable total profits and the computation",
        "Capital allowances",
        "Losses and group relief",
        "Associated companies and payment",
      ],
      "25%"
    ),
    area(
      "Inheritance tax and VAT",
      [
        "IHT on lifetime transfers and death estate",
        "Exemptions, reliefs and the nil-rate band",
        "VAT registration, output and input tax",
        "VAT schemes, invoices and returns",
      ],
      "20%"
    ),
  ],
  lessons: [
    lesson(
      "tx-l1",
      "The tax system and administration",
      45,
      [
        "Describe the structure of UK taxation",
        "Explain self-assessment obligations",
        "State key payment dates and penalties",
      ],
      [
        "Direct taxes fall on income/gains; indirect taxes on consumption.",
        "Individuals file under self-assessment with fixed deadlines.",
        "Payments on account and balancing payments apply to income tax.",
        "Penalties escalate for late filing and payment.",
        "Tax evasion is illegal; avoidance is legal but may be challenged.",
        "Accountants must act ethically and report money laundering.",
      ],
      [
        "State the online self-assessment filing deadline.",
        "Distinguish tax evasion from avoidance.",
        "When are payments on account due?",
      ],
      undefined
    ),
    lesson(
      "tx-l2",
      "Income tax computation",
      90,
      [
        "Build the income tax computation",
        "Apply the personal allowance and bands",
        "Tax savings and dividend income correctly",
      ],
      [
        "Total income is split into non-savings, savings and dividend income.",
        "The personal allowance is restricted for high incomes.",
        "Basic, higher and additional rate bands apply progressively.",
        "Savings and dividends have their own rates and allowances.",
        "Gift aid and pension contributions extend the basic rate band.",
        "Tax reducers (e.g. marriage allowance) reduce the final liability.",
      ],
      [
        "How does income above £100,000 affect the personal allowance?",
        "In what order is income taxed?",
        "How do pension contributions affect the bands?",
      ],
      "A taxpayer with £60,000 employment income deducts the personal allowance, taxes the first band at 20% and the balance at 40%; a £4,000 net personal pension contribution grosses to £5,000, extending the basic-rate band and saving higher-rate tax."
    ),
    lesson(
      "tx-l3",
      "Employment income and benefits",
      60,
      [
        "Distinguish employment from self-employment",
        "Compute taxable benefits",
        "Apply allowable deductions",
      ],
      [
        "Employment status affects tax and NIC treatment.",
        "Benefits (car, fuel, accommodation, loans) are valued by set rules.",
        "The company car benefit uses CO₂-based percentages of list price.",
        "Some deductions (subscriptions, mileage) are allowable.",
        "PAYE collects tax at source.",
        "Exempt benefits reduce the taxable amount.",
      ],
      [
        "How is a company car benefit calculated?",
        "Name two exempt benefits.",
        "Why does employment status matter for tax?",
      ],
      "A £30,000 list-price car with a 25% CO₂ percentage gives a taxable benefit of £7,500 per year, added to the employee's employment income and subject to income tax at their marginal rate."
    ),
    lesson(
      "tx-l4",
      "Trading income and capital allowances",
      75,
      [
        "Adjust accounting profit for tax",
        "Compute capital allowances",
        "Apply basis periods and loss relief",
      ],
      [
        "Adjust profit by adding back disallowable expenses and deducting non-trading income.",
        "Capital allowances replace depreciation for tax.",
        "The annual investment allowance gives 100% relief up to a limit.",
        "Writing-down allowances apply to the main and special pools.",
        "Trading losses can be carried forward or set against other income.",
        "Basis periods determine which profits are taxed when.",
      ],
      [
        "Why add back depreciation in the tax adjustment?",
        "What is the annual investment allowance?",
        "State one way to relieve a trading loss.",
      ],
      "Accounting profit of £80,000 with £6,000 depreciation and £2,000 client entertaining added back, less £1,000 bank interest received, gives adjusted trading profit of £87,000 before capital allowances."
    ),
    lesson(
      "tx-l5",
      "Corporation tax",
      75,
      [
        "Compute taxable total profits",
        "Apply capital allowances and losses",
        "Explain group relief and associated companies",
      ],
      [
        "Taxable total profits combine trading profit, other income and gains.",
        "Corporation tax applies for a chargeable accounting period.",
        "Losses can be carried back, forward or surrendered as group relief.",
        "Group relief allows losses to move between 75% group companies.",
        "Associated companies can affect thresholds and payment.",
        "Large companies pay by quarterly instalments.",
      ],
      [
        "What is included in taxable total profits?",
        "When can group relief be claimed?",
        "How do large companies pay corporation tax?",
      ],
      "A company with a £100,000 trading loss can surrender it to a 90%-owned group member with taxable profits, saving corporation tax at that member's rate rather than carrying the loss forward."
    ),
    lesson(
      "tx-l6",
      "Chargeable gains",
      60,
      [
        "Compute gains and losses on disposals",
        "Apply reliefs for individuals and companies",
        "Apply share matching rules",
      ],
      [
        "Gain = proceeds − cost − allowable enhancement expenditure.",
        "The annual exempt amount reduces individuals' gains.",
        "Business asset disposal relief gives a reduced rate on qualifying disposals.",
        "Rollover relief defers gains on replacement business assets.",
        "Companies apply the indexation-frozen rules and no annual exemption.",
        "Share disposals follow specific matching rules.",
      ],
      [
        "What is business asset disposal relief?",
        "How does rollover relief work?",
        "Do companies get an annual exempt amount?",
      ],
      "An individual sells shares for £50,000 (cost £20,000), realising a £30,000 gain; after the annual exempt amount the remainder is taxed at the appropriate capital gains rate for their income level."
    ),
    lesson(
      "tx-l7",
      "Inheritance tax",
      60,
      [
        "Compute IHT on lifetime transfers",
        "Compute IHT on the death estate",
        "Apply exemptions and the nil-rate band",
      ],
      [
        "Lifetime transfers may be PETs or chargeable lifetime transfers.",
        "The nil-rate band is available before tax applies.",
        "The seven-year rule and taper relief affect lifetime gifts.",
        "Exemptions include annual, small gifts and spouse transfers.",
        "The death estate is valued and taxed after reliefs.",
        "Business and agricultural property reliefs reduce the value transferred.",
      ],
      [
        "What is a potentially exempt transfer?",
        "How does taper relief work?",
        "Name two IHT exemptions.",
      ],
      undefined
    ),
    lesson(
      "tx-l8",
      "Value added tax",
      60,
      [
        "Explain registration requirements",
        "Compute output and input VAT",
        "Describe VAT schemes and returns",
      ],
      [
        "Registration is required once turnover exceeds the threshold.",
        "Output VAT is charged on sales; input VAT is recovered on purchases.",
        "Some supplies are standard-rated, reduced, zero-rated or exempt.",
        "The tax point determines when VAT is due.",
        "Schemes (cash, annual, flat-rate) ease compliance for small businesses.",
        "Returns are filed and paid on set dates with penalties for default.",
      ],
      [
        "When must a business register for VAT?",
        "Distinguish zero-rated from exempt supplies.",
        "What is the tax point?",
      ],
      "A business with £30,000 output VAT and £11,000 recoverable input VAT pays £19,000 to HMRC for the period, submitting the return by the due date to avoid default surcharge."
    ),
  ],
  frameworksAndFormulas: [
    "Income tax computation: non-savings, then savings, then dividend income",
    "Personal allowance taper above £100,000 (£1 lost per £2)",
    "Company car benefit = list price × CO₂ percentage",
    "Adjusted trading profit = accounting profit ± tax adjustments",
    "Capital allowances: AIA, main pool WDA, special rate pool",
    "Chargeable gain = proceeds − cost − enhancement expenditure",
    "IHT: nil-rate band, seven-year rule and taper relief",
    "VAT payable = output VAT − recoverable input VAT",
    "Corporation tax on taxable total profits",
    "Group relief for 75% groups",
  ],
  commonTraps: [
    "Taxing income in the wrong order (savings/dividends).",
    "Forgetting the personal allowance restriction for high earners.",
    "Adding back allowable expenses or missing disallowables.",
    "Confusing zero-rated with exempt VAT supplies.",
    "Misapplying the seven-year rule and taper relief in IHT.",
    "Using out-of-date rates — always use the exam's tax tables.",
  ],
  examTechnique: [
    "Use the provided tax rates and allowances tables consistently.",
    "Lay out computations in a clear standard proforma.",
    "Label figures and show relief claims explicitly.",
    "Attempt every part; computations earn method marks.",
    "Watch tax years and cut-off dates in the scenario.",
    "Reserve time to check the final liability and rounding.",
  ],
  practicePlan: [
    "Learn the income tax and corporation tax proformas by heart.",
    "Drill employment benefits and adjustment of profits.",
    "Practise capital allowances and loss relief.",
    "Work chargeable gains and IHT questions.",
    "Complete VAT and administration questions.",
    "Sit a full three-hour mock to time.",
    "Review errors and re-test weak computations.",
  ],
  furtherReading: [
    "ACCA Study Hub — Taxation (TX-UK) resources",
    "ACCA TX syllabus, study guide and tax tables (current exam year)",
    "ACCA technical article: 'Adjustment of profit'",
    "ACCA technical article: 'Chargeable gains for individuals'",
  ],
});

const FR: ModuleCourseware = courseware({
  moduleId: "acca-all-m7",
  examId: "acca",
  levelId: "all",
  title: "FR — Financial Reporting",
  paperCode: "FR",
  examFormat: "Session CBE, 3 hours",
  estimatedStudyHours: 110,
  overview:
    "Financial Reporting develops knowledge and skills in understanding and applying accounting standards and the theoretical framework in the preparation of financial statements of entities, including groups, and how to analyse and interpret those statements. It builds directly on FA, adding a wide range of IFRS Standards and more complex consolidations. Both preparation and interpretation are heavily examined.",
  whyItMatters:
    "FR is the core reporting paper: it develops the IFRS technical skills and interpretation ability that Strategic Business Reporting extends. Employers value the ability to prepare and critically analyse single and group financial statements.",
  learningOutcomes: [
    "Discuss and apply the conceptual and regulatory framework.",
    "Account for transactions in accordance with IFRS Standards.",
    "Prepare single-entity financial statements.",
    "Prepare consolidated financial statements including associates.",
    "Account for revenue, leases, financial instruments and provisions.",
    "Account for property, plant, equipment, intangibles and impairment.",
    "Analyse and interpret financial statements.",
    "Prepare and interpret statements of cash flows.",
  ],
  syllabusAreas: [
    area(
      "The conceptual and regulatory framework",
      [
        "The Conceptual Framework and its purpose",
        "Qualitative characteristics and the elements",
        "The regulatory framework and standard setting",
        "Ethical and professional considerations",
      ],
      "10%"
    ),
    area(
      "Accounting for transactions (IFRS)",
      [
        "Revenue from contracts with customers (IFRS 15)",
        "Property, plant and equipment (IAS 16) and borrowing costs",
        "Intangibles (IAS 38) and impairment (IAS 36)",
        "Leases (IFRS 16)",
        "Provisions, contingencies and events after reporting (IAS 37/10)",
        "Financial instruments (IFRS 9) and inventories (IAS 2)",
        "Income taxes (IAS 12)",
      ],
      "30%"
    ),
    area(
      "Single-entity financial statements",
      [
        "Statement of profit or loss and other comprehensive income",
        "Statement of financial position",
        "Statement of changes in equity",
        "Statement of cash flows (IAS 7)",
      ],
      "15%"
    ),
    area(
      "Consolidated financial statements",
      [
        "Consolidated statement of financial position",
        "Consolidated statement of profit or loss",
        "Goodwill, NCI and fair value adjustments",
        "Associates and equity accounting (IAS 28)",
        "Intra-group trading and unrealised profit",
      ],
      "20–25%"
    ),
    area(
      "Analysing and interpreting financial statements",
      [
        "Ratio analysis and performance appraisal",
        "Interpretation for different user needs",
        "Limitations of ratios and financial statements",
        "Not-for-profit and specialised entities",
      ],
      "20%"
    ),
  ],
  lessons: [
    lesson(
      "fr-l1",
      "Conceptual and regulatory framework",
      60,
      [
        "Explain the purpose of the Conceptual Framework",
        "Apply qualitative characteristics",
        "Discuss standard-setting and ethics",
      ],
      [
        "The Framework guides standard-setting and resolves gaps.",
        "Relevance and faithful representation are fundamental.",
        "Recognition and measurement bases (cost, fair value) are defined.",
        "The regulatory system involves the IASB and due process.",
        "Substance over form drives faithful representation.",
        "Ethics underpins the neutrality of financial reporting.",
      ],
      [
        "Why is substance over form important?",
        "Name the fundamental qualitative characteristics.",
        "What is the role of the Conceptual Framework?",
      ],
      undefined
    ),
    lesson(
      "fr-l2",
      "Revenue and provisions",
      75,
      [
        "Apply the five-step revenue model",
        "Recognise revenue over time vs at a point",
        "Account for provisions and contingencies",
      ],
      [
        "IFRS 15 uses a five-step model to recognise revenue.",
        "Performance obligations are identified and priced separately.",
        "Revenue is recognised as control transfers.",
        "IAS 37 requires a present obligation, probable outflow and reliable estimate.",
        "Contingent liabilities are disclosed, not recognised.",
        "Onerous contracts require a provision.",
      ],
      [
        "List the five steps of IFRS 15.",
        "When is revenue recognised over time?",
        "How is a contingent liability treated?",
      ],
      "A contract bundles a machine (£90,000) and two years of servicing (£30,000). The £120,000 price is allocated to each performance obligation; machine revenue is recognised on delivery and service revenue spread over two years."
    ),
    lesson(
      "fr-l3",
      "Non-current assets and impairment",
      75,
      [
        "Account for PPE and revaluation",
        "Account for intangibles and borrowing costs",
        "Apply the impairment model",
      ],
      [
        "PPE is measured at cost or revaluation (IAS 16).",
        "Depreciation reflects the pattern of economic benefit.",
        "Borrowing costs on qualifying assets are capitalised (IAS 23).",
        "Development costs may be capitalised if IAS 38 criteria are met.",
        "Impairment writes assets down to recoverable amount (IAS 36).",
        "Recoverable amount = higher of value in use and fair value less costs of disposal.",
      ],
      [
        "Define recoverable amount.",
        "When are development costs capitalised?",
        "How is a revaluation gain accounted for?",
      ],
      "An asset with carrying amount £100,000 has value in use £70,000 and fair value less costs £75,000; recoverable amount is £75,000, so a £25,000 impairment loss is recognised in profit or loss."
    ),
    lesson(
      "fr-l4",
      "Leases and financial instruments",
      75,
      [
        "Account for leases under IFRS 16",
        "Classify and measure financial instruments",
        "Explain amortised cost and fair value",
      ],
      [
        "IFRS 16 recognises a right-of-use asset and a lease liability.",
        "Lease payments split into interest and principal.",
        "Short-term and low-value leases have an exemption.",
        "Financial assets are measured at amortised cost or fair value.",
        "Amortised cost uses the effective interest rate.",
        "Equity vs liability classification depends on the instrument's substance.",
      ],
      [
        "What does a lessee recognise under IFRS 16?",
        "When is a financial asset held at amortised cost?",
        "How is the effective interest rate used?",
      ],
      "A lease liability of £50,000 at 8% incurs £4,000 interest in year one; a £12,000 payment reduces the liability to £42,000, and the right-of-use asset is depreciated over the lease term."
    ),
    lesson(
      "fr-l5",
      "Single-entity financial statements",
      75,
      [
        "Prepare the statement of profit or loss and OCI",
        "Prepare the statement of financial position",
        "Prepare the statement of changes in equity",
      ],
      [
        "IAS 1 governs presentation and structure.",
        "OCI includes items such as revaluation gains.",
        "Tax, finance costs and discontinued operations are presented separately.",
        "The SOCE reconciles opening to closing equity.",
        "Adjustments from notes (depreciation, accruals, tax) feed the statements.",
        "Comparatives and disclosures are required.",
      ],
      [
        "What items appear in OCI?",
        "What does the statement of changes in equity show?",
        "Where are discontinued operations presented?",
      ],
      "After incorporating draft profit, a revaluation gain of £20,000 is shown in OCI and added to the revaluation surplus in the statement of changes in equity, not in profit for the year."
    ),
    lesson(
      "fr-l6",
      "Consolidated statement of financial position",
      90,
      [
        "Calculate goodwill and NCI",
        "Adjust for fair values and intra-group items",
        "Prepare a consolidated SOFP",
      ],
      [
        "Consolidate the parent and subsidiary line by line.",
        "Goodwill = consideration + NCI − fair value of net assets acquired.",
        "NCI may be at fair value or proportionate share.",
        "Eliminate intra-group balances and unrealised profit in inventory.",
        "Fair value adjustments update the subsidiary's net assets.",
        "Post-acquisition reserves are added to group retained earnings.",
      ],
      [
        "How is goodwill calculated?",
        "Why eliminate unrealised profit in inventory?",
        "How are post-acquisition reserves treated?",
      ],
      "Parent pays £200,000 for 80% of a subsidiary with fair-valued net assets of £220,000; with NCI at fair value £48,000, goodwill = 200,000 + 48,000 − 220,000 = £28,000."
    ),
    lesson(
      "fr-l7",
      "Consolidated profit or loss and associates",
      75,
      [
        "Prepare a consolidated statement of profit or loss",
        "Apply equity accounting for associates",
        "Adjust for mid-year acquisitions",
      ],
      [
        "Add income and expenses in full for subsidiaries.",
        "Remove intra-group trading and unrealised profit.",
        "Time-apportion results for mid-year acquisitions.",
        "Associates are equity accounted (share of profit shown one line).",
        "NCI share of subsidiary profit is presented separately.",
        "Consistency of accounting policies is required.",
      ],
      [
        "How is an associate's result shown?",
        "How are mid-year acquisitions handled?",
        "Why remove intra-group sales?",
      ],
      "A subsidiary acquired on 1 July with £120,000 annual profit contributes £60,000 (six months) to the consolidated profit or loss, with NCI's share presented separately at the foot of the statement."
    ),
    lesson(
      "fr-l8",
      "Interpretation and cash flows",
      75,
      [
        "Prepare a statement of cash flows",
        "Calculate and interpret key ratios",
        "Draw conclusions for users",
      ],
      [
        "IAS 7 classifies cash flows into operating, investing and financing.",
        "Ratios span profitability, liquidity, efficiency and gearing.",
        "Interpretation links ratios to business events and strategy.",
        "Cash flow reveals quality of earnings.",
        "Limitations include comparability and accounting policy choices.",
        "Conclusions should address the specific user's needs.",
      ],
      [
        "Why can profit differ from operating cash flow?",
        "Name one profitability and one gearing ratio.",
        "Give two limitations of ratio analysis.",
      ],
      "Rising revenue with falling operating cash flow and lengthening receivables days may signal aggressive revenue recognition or collection problems, prompting a closer look at the quality of reported profit."
    ),
  ],
  frameworksAndFormulas: [
    "IFRS 15 five-step revenue model",
    "Recoverable amount = higher of value in use and fair value less costs of disposal",
    "Goodwill = consideration + NCI − fair value of net assets acquired",
    "Right-of-use asset and lease liability (IFRS 16)",
    "Effective interest rate method for amortised cost",
    "Gross/operating/net margin; ROCE = operating profit / capital employed",
    "Current and quick ratios; inventory/receivables/payables days",
    "Gearing = debt / (debt + equity); interest cover",
    "Equity method: investment + share of post-acquisition profit",
    "Unrealised profit adjustment on intra-group inventory",
  ],
  commonTraps: [
    "Recognising revenue at the wrong point under IFRS 15.",
    "Forgetting fair value adjustments in consolidation.",
    "Miscalculating NCI (fair value vs proportionate).",
    "Omitting the unrealised profit adjustment.",
    "Putting revaluation gains in profit rather than OCI.",
    "Interpreting ratios without linking to the scenario.",
  ],
  examTechnique: [
    "Set up consolidation workings (goodwill, NCI, reserves) before the statement.",
    "Allocate time between OT, single-entity and group questions.",
    "Show clear workings for method marks.",
    "Read whether figures are for the group or the parent.",
    "For interpretation, calculate then explain and conclude.",
    "Leave time to review adjustments and cast the statements.",
  ],
  practicePlan: [
    "Revise FA double-entry and single-entity preparation.",
    "Drill each key IFRS standard with focused questions.",
    "Practise single-entity statement preparation to time.",
    "Master consolidation workings (SOFP then SPL, then associates).",
    "Work interpretation and cash flow questions.",
    "Sit a full three-hour mock.",
    "Review and re-test consolidation and IFRS 15/16.",
  ],
  furtherReading: [
    "ACCA Study Hub — Financial Reporting (FR) resources",
    "ACCA FR syllabus and study guide (current exam year)",
    "ACCA technical article: 'IFRS 15 revenue recognition'",
    "ACCA technical article: 'Consolidated financial statements'",
  ],
});

const AA: ModuleCourseware = courseware({
  moduleId: "acca-all-m8",
  examId: "acca",
  levelId: "all",
  title: "AA — Audit & Assurance",
  paperCode: "AA",
  examFormat: "Session CBE, 3 hours",
  estimatedStudyHours: 100,
  overview:
    "Audit & Assurance develops knowledge and understanding of the process of carrying out the assurance engagement and its application in the context of the professional regulatory framework. It covers the audit framework and regulation, planning and risk assessment, internal control, audit evidence and procedures, and review and reporting. The paper emphasises applying auditing standards (ISAs) to scenarios.",
  whyItMatters:
    "Audit is central to the credibility of financial reporting. AA gives accountants the ability to plan and perform assurance work, assess risk and design procedures — skills extended in the strategic option Advanced Audit & Assurance and valued across assurance careers.",
  learningOutcomes: [
    "Explain the concept and purpose of assurance engagements.",
    "Describe the regulatory environment and professional ethics.",
    "Explain corporate governance and its impact on audit.",
    "Plan an audit and assess the risk of material misstatement.",
    "Evaluate internal control and identify deficiencies.",
    "Design and describe audit procedures to obtain evidence.",
    "Explain audit review, going concern and subsequent events.",
    "Describe the auditor's report and its modifications.",
  ],
  syllabusAreas: [
    area(
      "Audit framework and regulation",
      [
        "Assurance engagements and levels of assurance",
        "Statutory audit and regulation",
        "Corporate governance and audit committees",
        "Professional ethics and the ACCA code",
      ],
      "20%"
    ),
    area(
      "Planning and risk assessment",
      [
        "Understanding the entity and its environment",
        "Materiality and audit risk (inherent, control, detection)",
        "Analytical procedures at planning",
        "Fraud, laws and regulations, and audit planning documentation",
      ],
      "20%"
    ),
    area(
      "Internal control",
      [
        "Internal control systems and components",
        "Tests of control and deficiencies",
        "Communicating deficiencies to management",
        "Controls in specific transaction cycles",
      ],
      "15%"
    ),
    area(
      "Audit evidence",
      [
        "Financial statement assertions",
        "Sufficient appropriate evidence and procedures",
        "Substantive procedures for key balances",
        "Audit sampling and using the work of others",
      ],
      "30%"
    ),
    area(
      "Review and reporting",
      [
        "Going concern and subsequent events",
        "Written representations and overall review",
        "The auditor's report and opinions",
        "Modifications and emphasis of matter",
      ],
      "15%"
    ),
  ],
  lessons: [
    lesson(
      "aa-l1",
      "Assurance, regulation and governance",
      60,
      [
        "Explain assurance engagements and levels",
        "Describe audit regulation",
        "Explain governance and audit committees",
      ],
      [
        "Assurance enhances the confidence of intended users.",
        "Reasonable assurance (audit) is high but not absolute.",
        "The five elements: relationship, subject matter, criteria, evidence, report.",
        "Statutory audit is governed by law and auditing standards.",
        "Audit committees strengthen independence and oversight.",
        "Governance codes promote accountability and control.",
      ],
      [
        "What are the five elements of an assurance engagement?",
        "Why is audit assurance not absolute?",
        "What is the role of an audit committee?",
      ],
      undefined
    ),
    lesson(
      "aa-l2",
      "Professional ethics and independence",
      60,
      [
        "Apply the fundamental ethical principles",
        "Identify threats to independence",
        "Recommend appropriate safeguards",
      ],
      [
        "The auditor must be objective and independent.",
        "Threats: self-interest, self-review, advocacy, familiarity, intimidation.",
        "Safeguards include rotation, review and declining services.",
        "Non-audit services can impair independence.",
        "Fee dependence and gifts create self-interest threats.",
        "Confidentiality has limited exceptions (e.g. legal duty).",
      ],
      [
        "Name the five threats to independence.",
        "Give a safeguard for a familiarity threat.",
        "Why can non-audit services impair independence?",
      ],
      "A long-serving audit partner develops close ties with the finance director (familiarity threat); the safeguard is partner rotation and an independent engagement quality review to protect objectivity."
    ),
    lesson(
      "aa-l3",
      "Planning, risk and materiality",
      75,
      [
        "Assess the risk of material misstatement",
        "Set materiality",
        "Apply analytical procedures at planning",
      ],
      [
        "Audit risk = inherent × control × detection risk.",
        "Understanding the entity informs risk assessment.",
        "Materiality is set by benchmark (e.g. % of profit, revenue, assets).",
        "Analytical procedures identify unusual relationships.",
        "Risk assessment drives the audit strategy and plan.",
        "Significant risks require special audit consideration.",
      ],
      [
        "State the audit risk model.",
        "Give two benchmarks for materiality.",
        "How do analytical procedures help at planning?",
      ],
      "Revenue rose 30% while receivables doubled; this unusual analytical relationship signals a heightened risk of overstated revenue, so the auditor plans additional cut-off and existence procedures."
    ),
    lesson(
      "aa-l4",
      "Internal control and deficiencies",
      60,
      [
        "Document and evaluate internal control",
        "Identify control deficiencies",
        "Recommend improvements",
      ],
      [
        "Controls are documented via narrative notes, flowcharts or questionnaires.",
        "Tests of control assess whether controls operate effectively.",
        "A deficiency exists when controls fail to prevent/detect misstatement.",
        "Deficiencies are reported with implication and recommendation.",
        "Key cycles: sales, purchases, payroll, inventory, cash.",
        "Strong controls may reduce substantive testing.",
      ],
      [
        "How is a control deficiency defined?",
        "Give the three parts of a deficiency point.",
        "How do strong controls affect substantive work?",
      ],
      "If purchase orders are not authorised, the deficiency risks unauthorised or excessive buying; the recommendation is that a responsible official approves all orders above a set limit before processing."
    ),
    lesson(
      "aa-l5",
      "Audit evidence and assertions",
      75,
      [
        "Explain financial statement assertions",
        "Describe types of audit procedure",
        "Evaluate sufficiency and appropriateness",
      ],
      [
        "Assertions cover existence, completeness, valuation, rights, cut-off, presentation.",
        "Procedures: inspection, observation, enquiry, confirmation, recalculation, reperformance, analytical.",
        "Evidence must be sufficient (quantity) and appropriate (quality).",
        "External, written and auditor-generated evidence is more reliable.",
        "Assertions drive the choice of procedure.",
        "Documentation supports the audit conclusion.",
      ],
      [
        "Name four financial statement assertions.",
        "Which evidence sources are most reliable?",
        "What does sufficient appropriate evidence mean?",
      ],
      "To test the existence assertion for receivables, the auditor sends external confirmations directly to customers, because independent third-party evidence is more reliable than the client's own ledger."
    ),
    lesson(
      "aa-l6",
      "Substantive procedures for key balances",
      75,
      [
        "Design procedures for receivables and inventory",
        "Design procedures for payables and cash",
        "Link procedures to assertions",
      ],
      [
        "Receivables: confirmations, after-date cash, cut-off tests.",
        "Inventory: attend count, test valuation at lower of cost and NRV.",
        "Payables: supplier statement reconciliations, search for unrecorded liabilities.",
        "Cash: bank confirmation and reconciliation review.",
        "Each procedure addresses a specific assertion.",
        "Completeness of liabilities is a common risk area.",
      ],
      [
        "What procedure tests the valuation of inventory?",
        "How is completeness of payables tested?",
        "Why attend the inventory count?",
      ],
      "To confirm inventory valuation, the auditor compares cost with post-year-end selling prices; where net realisable value is below cost, a write-down is required to comply with the lower-of-cost-and-NRV rule."
    ),
    lesson(
      "aa-l7",
      "Going concern, subsequent events and representations",
      60,
      [
        "Assess going concern",
        "Audit subsequent events",
        "Obtain written representations",
      ],
      [
        "Going concern assumes the entity continues for the foreseeable future.",
        "Indicators include net losses, negative cash flow and loan defaults.",
        "Adjusting events provide evidence of conditions at year end.",
        "Non-adjusting events are disclosed if material.",
        "Written representations support other evidence but are not sufficient alone.",
        "Material uncertainty over going concern affects the report.",
      ],
      [
        "Give two going concern indicators.",
        "Distinguish adjusting from non-adjusting events.",
        "Why are representations not sufficient evidence alone?",
      ],
      undefined
    ),
    lesson(
      "aa-l8",
      "The auditor's report",
      60,
      [
        "Describe the unmodified report",
        "Explain modified opinions",
        "Apply emphasis and other matter paragraphs",
      ],
      [
        "An unmodified opinion states the statements give a true and fair view.",
        "Qualified ('except for') opinions arise from material misstatement or scope limitation.",
        "Adverse opinions arise from pervasive misstatement.",
        "Disclaimers arise from pervasive inability to obtain evidence.",
        "Emphasis of matter highlights a properly disclosed matter.",
        "Key audit matters are reported for listed entities.",
      ],
      [
        "When is a qualified opinion appropriate?",
        "Distinguish adverse from disclaimer of opinion.",
        "What is an emphasis of matter paragraph?",
      ],
      "If a material but not pervasive inventory misstatement is uncorrected, the auditor issues a qualified 'except for' opinion; had the effect been pervasive, an adverse opinion would be required."
    ),
  ],
  frameworksAndFormulas: [
    "Assurance elements: relationship, subject matter, criteria, evidence, report",
    "Audit risk = inherent risk × control risk × detection risk",
    "Materiality benchmarks: % of profit before tax, revenue or total assets",
    "Financial statement assertions (existence, completeness, valuation, etc.)",
    "Procedures: AEIOU / inspection, observation, enquiry, confirmation, recalculation, reperformance, analytical",
    "Threats and safeguards to independence",
    "Deficiency point: deficiency, implication, recommendation",
    "Report opinions: unmodified, qualified, adverse, disclaimer",
    "Adjusting vs non-adjusting subsequent events",
    "Going concern indicators and assessment",
  ],
  commonTraps: [
    "Describing procedures too vaguely ('check the invoice').",
    "Confusing tests of control with substantive procedures.",
    "Mixing up the types of modified opinion.",
    "Listing risks without the audit response.",
    "Giving generic ethics answers not linked to the scenario.",
    "Forgetting to state the assertion a procedure addresses.",
  ],
  examTechnique: [
    "Write procedures precisely: action + source + purpose.",
    "For risks, always pair the risk with the auditor's response.",
    "Use the scenario facts, not textbook generalities.",
    "Allocate time by marks across the constructed-response questions.",
    "Structure ethics answers as threat → why → safeguard.",
    "Reserve time to check the reporting question logic.",
  ],
  practicePlan: [
    "Learn the assurance framework and ethics thoroughly.",
    "Drill audit risk and response questions.",
    "Practise internal control deficiency questions.",
    "Write substantive procedures for each key balance.",
    "Practise going concern and auditor's report scenarios.",
    "Sit a full three-hour mock.",
    "Review and re-test procedure-writing and report opinions.",
  ],
  furtherReading: [
    "ACCA Study Hub — Audit & Assurance (AA) resources",
    "ACCA AA syllabus and study guide (current exam year)",
    "ACCA technical article: 'Answering audit risk questions'",
    "ACCA technical article: 'The auditor's report'",
  ],
});

const FM: ModuleCourseware = courseware({
  moduleId: "acca-all-m9",
  examId: "acca",
  levelId: "all",
  title: "FM — Financial Management",
  paperCode: "FM",
  examFormat: "Session CBE, 3 hours",
  estimatedStudyHours: 105,
  overview:
    "Financial Management develops the knowledge and skills expected of a finance manager in relation to investment, financing and dividend decisions. It covers the financial management function, working capital management, investment appraisal, business finance, the cost of capital, business valuations and risk management including foreign exchange and interest rate risk. Both calculation and discussion are examined.",
  whyItMatters:
    "FM builds the corporate finance toolkit — appraising investments, financing them and managing risk — that underpins the strategic option Advanced Financial Management. These are core skills for finance manager and treasury roles.",
  learningOutcomes: [
    "Explain the financial management function and objectives.",
    "Manage working capital including cash, inventory and receivables.",
    "Appraise investments using NPV, IRR and payback.",
    "Evaluate sources of business finance.",
    "Calculate the cost of capital and WACC.",
    "Value shares, businesses and debt.",
    "Explain and manage foreign exchange risk.",
    "Explain and manage interest rate risk.",
  ],
  syllabusAreas: [
    area(
      "Financial management function and environment",
      [
        "Objectives and stakeholders",
        "Financial and other objectives; agency theory",
        "The economic and regulatory environment",
        "Financial markets and the role of institutions",
      ],
      "10%"
    ),
    area(
      "Working capital management",
      [
        "The working capital cycle and policies",
        "Managing inventory (EOQ), receivables and payables",
        "Cash management models (Baumol, Miller-Orr)",
        "Short-term financing of working capital",
      ],
      "20%"
    ),
    area(
      "Investment appraisal",
      [
        "Relevant cash flows and payback/ARR",
        "NPV and IRR",
        "Inflation and taxation in appraisal",
        "Risk and uncertainty; capital rationing",
        "Asset replacement decisions",
      ],
      "25%"
    ),
    area(
      "Business finance and cost of capital",
      [
        "Sources of equity and debt finance",
        "Cost of equity, debt and preference capital",
        "Weighted average cost of capital (WACC)",
        "Capital structure theories and gearing",
        "Dividend policy",
      ],
      "25%"
    ),
    area(
      "Valuations and risk management",
      [
        "Share and business valuation models",
        "Market efficiency",
        "Foreign exchange risk and hedging",
        "Interest rate risk and hedging",
      ],
      "20%"
    ),
  ],
  lessons: [
    lesson(
      "fm-l1",
      "The financial management function",
      45,
      [
        "Explain financial management objectives",
        "Discuss agency and stakeholder issues",
        "Describe the financial environment",
      ],
      [
        "The primary objective is usually to maximise shareholder wealth.",
        "Not-for-profit entities pursue value for money.",
        "Agency theory addresses conflicts between managers and owners.",
        "Financial intermediaries channel funds between savers and borrowers.",
        "Fiscal and monetary policy shape the environment.",
        "Corporate objectives cascade into financial targets.",
      ],
      [
        "What is the usual primary financial objective?",
        "What is the agency problem?",
        "How do not-for-profit objectives differ?",
      ],
      undefined
    ),
    lesson(
      "fm-l2",
      "Working capital management",
      75,
      [
        "Calculate the working capital cycle",
        "Apply EOQ and cash models",
        "Evaluate receivables and payables policies",
      ],
      [
        "The cash operating cycle = inventory + receivables − payables days.",
        "EOQ minimises ordering and holding costs.",
        "Baumol and Miller-Orr models optimise cash balances.",
        "Early settlement discounts have a comparable annual cost.",
        "Overtrading strains liquidity despite rising sales.",
        "Policies balance profitability and liquidity risk.",
      ],
      [
        "State the cash operating cycle formula.",
        "What does EOQ minimise?",
        "What is overtrading?",
      ],
      "Inventory days 60 + receivables days 45 − payables days 30 gives a 75-day operating cycle; shortening it (e.g. faster collections) reduces the working capital that must be financed."
    ),
    lesson(
      "fm-l3",
      "Investment appraisal: NPV and IRR",
      90,
      [
        "Identify relevant cash flows",
        "Calculate NPV and IRR",
        "Compare appraisal methods",
      ],
      [
        "NPV discounts relevant cash flows at the cost of capital.",
        "A positive NPV increases shareholder wealth.",
        "IRR is the discount rate giving zero NPV.",
        "Payback and ARR are simpler but flawed measures.",
        "Only relevant, incremental, after-tax cash flows are included.",
        "NPV is theoretically superior for accept/reject decisions.",
      ],
      [
        "Why is NPV preferred to IRR?",
        "What cash flows are relevant?",
        "What does a positive NPV indicate?",
      ],
      "A project costs £100,000 and returns £40,000 a year for three years; discounted at 10%, the present value of inflows (£99,474) gives an NPV of roughly −£526, so the project should be rejected."
    ),
    lesson(
      "fm-l4",
      "Inflation, tax and risk in appraisal",
      75,
      [
        "Handle inflation consistently",
        "Incorporate tax and capital allowances",
        "Apply risk techniques and capital rationing",
      ],
      [
        "Match money cash flows with money rates, real with real (Fisher).",
        "Tax is charged on operating flows and delayed if relevant.",
        "Capital allowances create tax savings (tax shields).",
        "Sensitivity analysis finds the critical variable.",
        "Capital rationing ranks projects by profitability index.",
        "Equivalent annual cost aids asset replacement decisions.",
      ],
      [
        "State the Fisher relationship.",
        "How do capital allowances affect NPV?",
        "How is the profitability index used?",
      ],
      "With a real rate of 8% and inflation of 3%, the money discount rate ≈ (1.08 × 1.03) − 1 = 11.24%; money cash flows must then be discounted at 11.24% to keep the appraisal consistent."
    ),
    lesson(
      "fm-l5",
      "Sources of finance and dividend policy",
      60,
      [
        "Compare equity and debt finance",
        "Explain gearing and its effects",
        "Discuss dividend policy",
      ],
      [
        "Equity includes retained earnings, rights issues and new shares.",
        "Debt includes bank loans, bonds and leasing.",
        "Higher gearing raises financial risk and can raise returns.",
        "A rights issue price and theoretical ex-rights price can be calculated.",
        "Dividend policy balances signalling, clientele and reinvestment needs.",
        "Modigliani-Miller provides a theoretical dividend irrelevance baseline.",
      ],
      [
        "Calculate a theoretical ex-rights price given a rights issue.",
        "How does gearing affect financial risk?",
        "What factors influence dividend policy?",
      ],
      "A 1-for-4 rights issue at £2 when shares trade at £3 gives a TERP of ((4×3)+(1×2))/5 = £2.80, the expected price after the new shares are issued."
    ),
    lesson(
      "fm-l6",
      "Cost of capital and WACC",
      90,
      [
        "Calculate the cost of equity and debt",
        "Compute the WACC",
        "Apply CAPM and dividend growth",
      ],
      [
        "Cost of equity via the dividend growth model or CAPM.",
        "CAPM: Ke = Rf + β(Rm − Rf).",
        "Cost of debt is the after-tax yield to the company.",
        "WACC weights each source by market value.",
        "Ungearing and regearing beta adjusts for different capital structures.",
        "WACC is the discount rate for average-risk projects.",
      ],
      [
        "State the CAPM formula.",
        "Why use market values in WACC?",
        "How is the after-tax cost of debt found?",
      ],
      "With Rf 4%, Rm 10% and β 1.2, CAPM gives Ke = 4% + 1.2 × (10% − 4%) = 11.2%, the required return on equity for that level of systematic risk."
    ),
    lesson(
      "fm-l7",
      "Business valuations",
      60,
      [
        "Apply asset and income-based valuations",
        "Use dividend valuation and P/E models",
        "Discuss market efficiency",
      ],
      [
        "Asset-based valuation uses net asset values.",
        "The dividend valuation model: P₀ = D₁ / (Ke − g).",
        "Earnings-based valuation applies a P/E multiple.",
        "Free cash flow valuation discounts future cash flows.",
        "Market efficiency (weak, semi-strong, strong) affects price behaviour.",
        "Different methods suit different purposes and buyers.",
      ],
      [
        "State the dividend valuation model.",
        "When is an asset-based valuation appropriate?",
        "What is semi-strong market efficiency?",
      ],
      "With a next dividend of £0.20, growth 4% and cost of equity 10%, the share value = 0.20 / (0.10 − 0.04) = £3.33 under the dividend growth model."
    ),
    lesson(
      "fm-l8",
      "Foreign exchange and interest rate risk",
      75,
      [
        "Explain FX and interest rate exposures",
        "Apply forward and money-market hedges",
        "Describe derivatives for hedging",
      ],
      [
        "Transaction, translation and economic exposures differ.",
        "Interest rate parity and purchasing power parity predict rates.",
        "Forward contracts fix a future exchange rate.",
        "Money-market hedges use borrowing/deposits to lock in value.",
        "Futures, options and swaps hedge FX and interest rate risk.",
        "Options provide protection with upside but at a premium.",
      ],
      [
        "Distinguish transaction from translation exposure.",
        "How does a money-market hedge work?",
        "Why might a company prefer an option to a forward?",
      ],
      "A UK firm owed $220,000 in three months can hedge with a forward: locking a rate of, say, $1.10/£ fixes the sterling cost at about £200,000, removing uncertainty from adverse currency movements."
    ),
  ],
  frameworksAndFormulas: [
    "Cash operating cycle = inventory days + receivables days − payables days",
    "EOQ = √(2CoD / Ch)",
    "NPV = Σ cash flow / (1 + r)ⁿ − initial outlay",
    "Fisher: (1 + money) = (1 + real)(1 + inflation)",
    "CAPM: Ke = Rf + β(Rm − Rf)",
    "Dividend growth model: P₀ = D₁ / (Ke − g); Ke = D₁/P₀ + g",
    "WACC = (E/(E+D))Ke + (D/(E+D))Kd(1−t)",
    "Theoretical ex-rights price (TERP)",
    "Profitability index = PV of inflows / initial investment",
    "Interest rate parity and purchasing power parity",
  ],
  commonTraps: [
    "Mixing money and real cash flows/rates.",
    "Including sunk or non-incremental costs in NPV.",
    "Using book instead of market values in WACC.",
    "Timing tax and capital allowances incorrectly.",
    "Forgetting the tax shield on debt in cost of capital.",
    "Choosing the wrong hedge direction (buy vs sell currency).",
  ],
  examTechnique: [
    "Lay out NPV in a clear time-line table.",
    "State assumptions for inflation, tax timing and discount rate.",
    "Allocate time by marks across OT and CR sections.",
    "Combine calculation with required discussion for full marks.",
    "Check the direction of currency and interest hedges.",
    "Review discount factors and rounding before finalising.",
  ],
  practicePlan: [
    "Master working capital and the operating cycle.",
    "Drill NPV including inflation and tax.",
    "Practise cost of capital and WACC computations.",
    "Work valuation and dividend policy questions.",
    "Practise FX and interest rate hedging questions.",
    "Sit a full three-hour mock.",
    "Review and re-test NPV with tax and WACC.",
  ],
  furtherReading: [
    "ACCA Study Hub — Financial Management (FM) resources",
    "ACCA FM syllabus and study guide (current exam year)",
    "ACCA technical article: 'Investment appraisal with tax and inflation'",
    "ACCA technical article: 'The cost of capital and WACC'",
  ],
});

/* -------------------------------------------------------------------------- */
/* Strategic Professional — Essentials                                        */
/* -------------------------------------------------------------------------- */

const SBL: ModuleCourseware = courseware({
  moduleId: "acca-all-m10",
  examId: "acca",
  levelId: "all",
  title: "SBL — Strategic Business Leader",
  paperCode: "SBL",
  examFormat: "Session CBE, 4 hours",
  estimatedStudyHours: 150,
  overview:
    "Strategic Business Leader is a case-study exam that integrates technical, ethical and professional skills into the role of a senior business leader. Set around a single organisation, it examines governance, leadership, strategy, risk, control, technology, finance and stakeholder management, with professional skills marks awarded throughout. There are no separate options — the whole exam is one integrated scenario.",
  whyItMatters:
    "SBL simulates real leadership decisions, requiring candidates to think across disciplines and communicate as trusted advisers. The professional skills (communication, commercial acumen, analysis, scepticism, evaluation) mirror what employers most value in senior finance roles.",
  learningOutcomes: [
    "Apply leadership and governance principles to an organisation.",
    "Analyse the strategic position, choices and implementation.",
    "Evaluate risk and recommend internal control responses.",
    "Advise on technology, data and information management.",
    "Apply financial analysis to strategic decisions.",
    "Demonstrate professional and ethical judgement.",
    "Manage and communicate with stakeholders.",
    "Deploy professional skills (communication, analysis, scepticism, evaluation, commercial acumen).",
  ],
  syllabusAreas: [
    area(
      "Leadership and governance",
      [
        "Concepts of leadership and its role",
        "Corporate governance and agency",
        "The board and its committees",
        "Stakeholder analysis and management",
        "Integrated reporting and organisational purpose",
      ],
      "Integrated"
    ),
    area(
      "Strategy",
      [
        "Strategic position: environment, capability, expectations",
        "Strategic choices: business and corporate level",
        "Strategic action and implementation",
        "Innovation, change and the business case",
      ],
      "Integrated"
    ),
    area(
      "Risk and control",
      [
        "Risk identification, assessment and response",
        "Internal control and the control environment",
        "Risk management frameworks (e.g. COSO)",
        "Assurance and monitoring",
      ],
      "Integrated"
    ),
    area(
      "Technology and data analytics",
      [
        "Information systems and strategy",
        "Data analytics and big data",
        "Cyber security and resilience",
        "Automation, cloud and disruptive technology",
      ],
      "Integrated"
    ),
    area(
      "Finance and professional skills",
      [
        "Financial analysis for decision-making",
        "Project appraisal and value",
        "Ethics and professionalism",
        "Professional skills: communication, commercial acumen, analysis, scepticism, evaluation",
      ],
      "Integrated"
    ),
  ],
  lessons: [
    lesson(
      "sbl-l1",
      "Leadership and organisational purpose",
      75,
      [
        "Explain leadership concepts and styles",
        "Relate leadership to organisational purpose",
        "Assess integrated thinking",
      ],
      [
        "Leadership sets direction and inspires performance.",
        "Purpose and values shape culture and behaviour.",
        "Integrated reporting links strategy, governance and value creation.",
        "The six capitals frame value creation over time.",
        "Leaders balance short-term results with long-term sustainability.",
        "Tone at the top drives ethical culture.",
      ],
      [
        "How does leadership differ from management here?",
        "What are the six capitals in integrated reporting?",
        "Why does tone at the top matter?",
      ],
      undefined
    ),
    lesson(
      "sbl-l2",
      "Corporate governance and the board",
      75,
      [
        "Explain governance principles",
        "Describe board structures and committees",
        "Evaluate agency and accountability",
      ],
      [
        "Governance directs and controls in stakeholders' interests.",
        "Unitary and two-tier boards differ in structure.",
        "Committees (audit, remuneration, nomination, risk) support the board.",
        "Non-executive directors provide independent challenge.",
        "Agency conflicts are mitigated by governance mechanisms.",
        "Codes may be comply-or-explain or rules-based.",
      ],
      [
        "What is the role of non-executive directors?",
        "Name three board committees and their remit.",
        "Explain comply-or-explain governance.",
      ],
      "When a CEO also chairs the board, independent challenge weakens; SBL answers would recommend separating the roles and strengthening NED representation to improve accountability."
    ),
    lesson(
      "sbl-l3",
      "Strategic position analysis",
      90,
      [
        "Analyse the macro and industry environment",
        "Assess strategic capability",
        "Evaluate stakeholder expectations",
      ],
      [
        "PESTEL and Porter's Five Forces analyse the external environment.",
        "Resources and competences build capability (VRIO).",
        "SWOT summarises internal and external factors.",
        "Stakeholder mapping (Mendelow) prioritises influence.",
        "Competitive advantage arises from valuable, rare, inimitable resources.",
        "Analysis must lead to insight, not just description.",
      ],
      [
        "What does VRIO assess?",
        "How does Mendelow's matrix inform strategy?",
        "Why must analysis lead to insight?",
      ],
      "A retailer's loyal customer data (valuable, rare, hard to imitate, organised to exploit) passes the VRIO test, indicating a source of sustainable competitive advantage worth investing in."
    ),
    lesson(
      "sbl-l4",
      "Strategic choice and implementation",
      75,
      [
        "Evaluate business and corporate strategy",
        "Assess strategic options",
        "Plan implementation and change",
      ],
      [
        "Porter's generic strategies: cost leadership, differentiation, focus.",
        "Ansoff's matrix frames product/market growth options.",
        "Options are tested for suitability, acceptability and feasibility.",
        "Implementation needs structure, systems and change management.",
        "Kotter and Lewin frame effective change.",
        "A business case links strategy to value and risk.",
      ],
      [
        "Name Porter's generic strategies.",
        "What three tests evaluate a strategic option?",
        "Give one change management model.",
      ],
      "Expanding into a new country (market development on Ansoff) is suitable for growth but must be tested for acceptability (risk/return to stakeholders) and feasibility (funding and capability) before approval."
    ),
    lesson(
      "sbl-l5",
      "Risk and internal control",
      75,
      [
        "Identify and assess business risk",
        "Recommend control responses",
        "Apply a risk framework",
      ],
      [
        "Risks are identified, assessed by likelihood/impact and responded to.",
        "Responses: transfer, avoid, reduce, accept (TARA).",
        "Internal control comprises environment and procedures (COSO).",
        "Risk appetite guides acceptable exposure.",
        "The three lines model separates ownership, oversight and assurance.",
        "Controls must be proportionate to the risk.",
      ],
      [
        "What are the TARA risk responses?",
        "What is risk appetite?",
        "Describe the three lines model.",
      ],
      "A cyber-attack risk (high impact, moderate likelihood) exceeding appetite would be reduced through controls (firewalls, training) and partly transferred via insurance, rather than simply accepted."
    ),
    lesson(
      "sbl-l6",
      "Technology, data and cyber",
      60,
      [
        "Assess information systems strategy",
        "Explain data analytics and big data",
        "Evaluate cyber security responses",
      ],
      [
        "IS/IT strategy must align with business strategy.",
        "Big data has volume, velocity, variety and veracity.",
        "Analytics turns data into decision-relevant insight.",
        "Cyber threats require prevention, detection and response.",
        "Cloud and automation reshape operations and risk.",
        "Data governance protects integrity and privacy.",
      ],
      [
        "State the characteristics of big data.",
        "Why must IS strategy align with business strategy?",
        "Give two cyber security controls.",
      ],
      undefined
    ),
    lesson(
      "sbl-l7",
      "Finance for strategic decisions",
      75,
      [
        "Apply financial analysis to strategy",
        "Appraise projects for value",
        "Interpret performance for the board",
      ],
      [
        "Ratio and trend analysis support strategic judgement.",
        "NPV and payback appraise strategic investments.",
        "Value drivers link decisions to shareholder value.",
        "Non-financial performance informs balanced judgement.",
        "Financial analysis must be interpreted commercially.",
        "Communicate findings clearly for decision-makers.",
      ],
      [
        "How does NPV support strategic decisions?",
        "Why include non-financial measures?",
        "What is a value driver?",
      ],
      "A proposed acquisition with a positive NPV but weakening margins and integration risk should be recommended cautiously, pairing the financial case with commercial and risk considerations for the board."
    ),
    lesson(
      "sbl-l8",
      "Ethics, professionalism and professional skills",
      75,
      [
        "Apply ethical frameworks to dilemmas",
        "Demonstrate professional scepticism",
        "Communicate as a trusted adviser",
      ],
      [
        "Fundamental principles and threats/safeguards apply to leaders.",
        "Professional skills are explicitly marked in SBL.",
        "Communication tailors tone and format to the audience.",
        "Commercial acumen shows business awareness.",
        "Analysis and evaluation weigh evidence and options.",
        "Scepticism questions assumptions and evidence.",
      ],
      [
        "Name the SBL professional skills.",
        "How is scepticism demonstrated in an answer?",
        "Why tailor communication to the audience?",
      ],
      "Asked to draft a board briefing, strong SBL answers use the requested format (memo, headings), give balanced analysis and a clear recommendation — earning professional communication and evaluation marks alongside technical marks."
    ),
  ],
  frameworksAndFormulas: [
    "PESTEL and Porter's Five Forces (environmental analysis)",
    "VRIO / resource-based view of capability",
    "SWOT and Mendelow's stakeholder matrix",
    "Porter's generic strategies; Ansoff's growth matrix",
    "Suitability, Acceptability, Feasibility (SAF) test",
    "TARA risk responses; COSO internal control framework",
    "Three lines model of governance and assurance",
    "Integrated reporting and the six capitals",
    "Kotter's eight steps / Lewin's change model",
    "Professional skills: communication, commercial acumen, analysis, scepticism, evaluation",
  ],
  commonTraps: [
    "Writing generic theory instead of applying to the case.",
    "Ignoring professional skills marks and answer format.",
    "Poor time management across the four-hour exam.",
    "Describing frameworks without reaching a recommendation.",
    "Neglecting the specific requirement verb and role.",
    "Failing to use the exhibits/case material provided.",
  ],
  examTechnique: [
    "Read the requirement and the role/format demanded first.",
    "Plan time by marks and use the exhibits actively.",
    "Answer in the requested format (report, memo, slides).",
    "Weave professional skills into technical answers.",
    "Make clear, justified recommendations.",
    "Leave time to review structure and professional presentation.",
  ],
  practicePlan: [
    "Learn the strategy, governance and risk frameworks.",
    "Practise applying frameworks to varied case scenarios.",
    "Drill professional skills through past case questions.",
    "Practise answering in report/memo formats to time.",
    "Attempt full four-hour case-study mocks.",
    "Debrief against the examiner's answers and marking guide.",
    "Re-test weak professional skills and time management.",
  ],
  furtherReading: [
    "ACCA Study Hub — Strategic Business Leader (SBL) resources",
    "ACCA SBL syllabus and study guide (current exam year)",
    "ACCA technical article: 'The professional skills in SBL'",
    "ACCA technical article: 'Approaching the SBL case study'",
  ],
});

const SBR: ModuleCourseware = courseware({
  moduleId: "acca-all-m11",
  examId: "acca",
  levelId: "all",
  title: "SBR — Strategic Business Reporting",
  paperCode: "SBR",
  examFormat: "Session CBE, 3 hours 15 minutes",
  estimatedStudyHours: 150,
  overview:
    "Strategic Business Reporting requires candidates to apply professional judgement in the reporting of the financial performance of a range of entities to a variety of stakeholders. It extends FR into complex group accounting, the critical application and evaluation of IFRS Standards, current issues and the ethical and professional responsibilities of the reporting accountant. Discursive application and judgement are heavily rewarded.",
  whyItMatters:
    "SBR develops the judgement to apply and critique IFRS in complex, real-world situations and to communicate the implications to stakeholders — the hallmark of a senior reporting professional and a core Strategic Professional essential.",
  learningOutcomes: [
    "Apply the professional and ethical framework to reporting.",
    "Evaluate and apply the Conceptual Framework.",
    "Report the financial performance of entities using IFRS.",
    "Prepare and interpret complex group financial statements.",
    "Account for changes in group structures.",
    "Discuss and apply IFRS to specific transactions.",
    "Interpret financial statements for stakeholders.",
    "Evaluate current developments and their impact.",
  ],
  syllabusAreas: [
    area(
      "The financial reporting framework",
      [
        "The Conceptual Framework and its application",
        "Ethical and professional issues in reporting",
        "The reporting of financial performance",
        "Revenue, provisions and events after reporting",
      ],
      "Integrated"
    ),
    area(
      "Reporting performance of entities",
      [
        "Non-current assets, impairment and leases",
        "Financial instruments (IFRS 9)",
        "Employee benefits (IAS 19) and share-based payment (IFRS 2)",
        "Income taxes and deferred tax (IAS 12)",
      ],
      "Integrated"
    ),
    area(
      "Group financial statements",
      [
        "Complex consolidations and step acquisitions",
        "Disposals and changes in group structure",
        "Foreign subsidiaries and translation",
        "Associates, joint arrangements and NCI",
      ],
      "Integrated"
    ),
    area(
      "Interpretation for stakeholders",
      [
        "Analysis and interpretation for different users",
        "Integrated reporting and non-financial reporting",
        "Segment and related-party disclosures",
      ],
      "Integrated"
    ),
    area(
      "Current developments",
      [
        "Current issues and new/revised standards",
        "Sustainability and management commentary",
        "Debates on measurement and disclosure",
      ],
      "Integrated"
    ),
  ],
  lessons: [
    lesson(
      "sbr-l1",
      "Framework, ethics and professional judgement",
      75,
      [
        "Apply the Conceptual Framework to novel issues",
        "Resolve ethical reporting dilemmas",
        "Exercise professional judgement",
      ],
      [
        "The Framework guides treatment where no specific standard applies.",
        "Faithful representation demands substance over form.",
        "Ethical threats arise from earnings management and pressure.",
        "Professional judgement weighs standards, context and users.",
        "Reporting choices have economic consequences.",
        "Integrity underpins credible reporting.",
      ],
      [
        "How is the Framework used when no standard applies?",
        "Give an example of an ethical reporting dilemma.",
        "Why does substance over form matter?",
      ],
      "Management wishing to classify a clearly financing arrangement as an operating item to improve ratios faces a substance-over-form and ethics issue; the reporting accountant should insist on faithful representation."
    ),
    lesson(
      "sbr-l2",
      "Reporting financial performance",
      75,
      [
        "Apply revenue and provisions standards",
        "Account for events after reporting",
        "Present performance faithfully",
      ],
      [
        "IFRS 15 governs revenue with judgement on obligations and timing.",
        "IAS 37 provisions require judgement on obligations and estimates.",
        "Adjusting/non-adjusting events affect the statements or disclosure.",
        "Performance reporting balances relevance and reliability.",
        "Disclosure supports users' understanding.",
        "Judgement is central where estimates are involved.",
      ],
      [
        "When is a provision recognised?",
        "How is variable consideration treated under IFRS 15?",
        "Distinguish adjusting from non-adjusting events.",
      ],
      undefined
    ),
    lesson(
      "sbr-l3",
      "Non-current assets, leases and impairment",
      75,
      [
        "Apply IAS 16/38/36 with judgement",
        "Account for leases (IFRS 16)",
        "Assess impairment of cash-generating units",
      ],
      [
        "Recognition and measurement require judgement on useful life and value.",
        "Impairment tests compare carrying amount with recoverable amount.",
        "CGUs allocate goodwill for impairment testing.",
        "IFRS 16 affects both lessee and lessor accounting.",
        "Revaluation and fair value introduce estimation.",
        "Disclosure explains significant judgements.",
      ],
      [
        "How is goodwill tested for impairment?",
        "What is a cash-generating unit?",
        "How does IFRS 16 affect the lessee?",
      ],
      "Goodwill is allocated to a CGU and tested annually; if the unit's recoverable amount falls below carrying amount, the impairment first reduces goodwill, then other assets pro rata."
    ),
    lesson(
      "sbr-l4",
      "Financial instruments and complex standards",
      75,
      [
        "Classify and measure financial instruments",
        "Apply hedge accounting basics",
        "Account for share-based payment and pensions",
      ],
      [
        "IFRS 9 classifies assets by business model and cash flow characteristics.",
        "Expected credit losses drive impairment of financial assets.",
        "Hedge accounting aligns timing of gains and losses.",
        "IFRS 2 measures share-based payments at fair value.",
        "IAS 19 accounts for defined benefit obligations and remeasurement.",
        "Deferred tax (IAS 12) arises from temporary differences.",
      ],
      [
        "What drives financial asset classification under IFRS 9?",
        "How are defined benefit remeasurements reported?",
        "How are equity-settled share-based payments measured?",
      ],
      "An equity-settled share option is measured at grant-date fair value and expensed over the vesting period, with a corresponding increase in equity, irrespective of later share price movements."
    ),
    lesson(
      "sbr-l5",
      "Complex group accounting",
      90,
      [
        "Consolidate with step acquisitions",
        "Account for disposals and control changes",
        "Handle foreign subsidiaries",
      ],
      [
        "Step acquisitions remeasure the previously held interest.",
        "Loss of control triggers a gain/loss and deconsolidation.",
        "Partial disposals may retain control (equity transaction) or lose it.",
        "Foreign subsidiaries are translated using IAS 21.",
        "Exchange differences go to other comprehensive income.",
        "Judgement determines control, significant influence or joint control.",
      ],
      [
        "What happens to the previously held interest in a step acquisition?",
        "How is a partial disposal that retains control treated?",
        "Where do translation differences go?",
      ],
      "When control is achieved in stages, the previously held 30% stake is remeasured to fair value at the acquisition date, with any gain or loss recognised in profit or loss before consolidating the new subsidiary."
    ),
    lesson(
      "sbr-l6",
      "Changes in group structure and joint arrangements",
      75,
      [
        "Account for changes in ownership",
        "Distinguish joint ventures and operations",
        "Apply equity accounting for associates",
      ],
      [
        "Transactions with NCI that retain control are equity transactions.",
        "Joint operations recognise assets, liabilities, income and expenses.",
        "Joint ventures are equity accounted.",
        "Associates use the equity method (IAS 28).",
        "Deemed disposals arise when a group's interest is diluted.",
        "Classification depends on rights and control, not just percentages.",
      ],
      [
        "Distinguish a joint operation from a joint venture.",
        "How is a sale of a stake that retains control treated?",
        "What method applies to associates?",
      ],
      undefined
    ),
    lesson(
      "sbr-l7",
      "Interpretation and stakeholder reporting",
      75,
      [
        "Interpret statements for varied users",
        "Evaluate integrated and non-financial reporting",
        "Assess disclosure quality",
      ],
      [
        "Interpretation must address specific stakeholder needs.",
        "Integrated reporting connects strategy, governance and value.",
        "Non-financial and sustainability reporting is increasingly required.",
        "Segment and related-party disclosures aid analysis.",
        "Quality of disclosure affects usefulness.",
        "Judgement links numbers to business narrative.",
      ],
      [
        "Why tailor interpretation to the user?",
        "What does integrated reporting connect?",
        "Why do related-party disclosures matter?",
      ],
      "An investor and a lender need different emphases: the lender focuses on cash flow, gearing and covenants, while the investor weighs growth and returns — SBR answers must address the specific user."
    ),
    lesson(
      "sbr-l8",
      "Current developments and debates",
      60,
      [
        "Discuss current reporting issues",
        "Evaluate new or revised standards",
        "Debate measurement and disclosure",
      ],
      [
        "Standard-setters respond to emerging transactions and criticism.",
        "Debates cover measurement bases and disclosure overload.",
        "Sustainability reporting is a fast-developing area.",
        "Management commentary complements the statements.",
        "Candidates must form and justify a view.",
        "Awareness of current issues is examined.",
      ],
      [
        "Give one current issue in financial reporting.",
        "Why is disclosure overload debated?",
        "What is the role of management commentary?",
      ],
      undefined
    ),
  ],
  frameworksAndFormulas: [
    "Conceptual Framework — recognition, measurement, faithful representation",
    "Goodwill = consideration + NCI + previously held interest − net assets acquired",
    "Impairment: recoverable amount vs carrying amount for CGUs",
    "IFRS 9 classification: business model + cash flow characteristics; ECL model",
    "IFRS 2 fair value at grant date over vesting period",
    "IAS 19 defined benefit: service cost, net interest, remeasurement",
    "IAS 12 deferred tax on temporary differences",
    "IAS 21 translation of foreign operations",
    "Step acquisition and loss-of-control accounting",
    "Equity method for associates and joint ventures",
  ],
  commonTraps: [
    "Reproducing FR mechanics without professional judgement.",
    "Ignoring ethics/substance-over-form implications.",
    "Mishandling step acquisitions and disposals.",
    "Failing to tailor interpretation to the stakeholder.",
    "Overlooking deferred tax and remeasurement items.",
    "Weak on current issues and discussion marks.",
  ],
  examTechnique: [
    "Explain the principle before doing the numbers.",
    "Justify judgements with reference to the Framework/standard.",
    "Address ethics whenever a scenario hints at pressure.",
    "Tailor interpretation to the named user.",
    "Manage time across all questions including discussion.",
    "Leave time to review complex group workings.",
  ],
  practicePlan: [
    "Revise FR consolidation and single-entity standards.",
    "Drill complex group questions (step, disposal, foreign).",
    "Practise applying individual IFRS with judgement.",
    "Work interpretation and ethics questions.",
    "Read and summarise current issues articles.",
    "Sit a full mock to time.",
    "Re-test complex groups and discussion questions.",
  ],
  furtherReading: [
    "ACCA Study Hub — Strategic Business Reporting (SBR) resources",
    "ACCA SBR syllabus and study guide (current exam year)",
    "ACCA technical article: 'Business combinations achieved in stages'",
    "ACCA technical article: 'Ethics and professional judgement in reporting'",
  ],
});

/* -------------------------------------------------------------------------- */
/* Strategic Professional — Options                                           */
/* -------------------------------------------------------------------------- */

const AFM: ModuleCourseware = courseware({
  moduleId: "acca-all-m12",
  examId: "acca",
  levelId: "all",
  title: "AFM — Advanced Financial Management",
  paperCode: "AFM",
  examFormat: "Session CBE, 3 hours 15 minutes",
  estimatedStudyHours: 140,
  overview:
    "Advanced Financial Management applies relevant knowledge, skills and exercise of professional judgement expected of a senior financial adviser in taking or recommending decisions relating to the financial management of an organisation in private and public sectors. It covers advanced investment appraisal, acquisitions and mergers, corporate reconstruction, treasury and advanced risk management. Scenarios are complex and require judgement and clear advice.",
  whyItMatters:
    "AFM extends FM into the strategic finance decisions of senior advisers — valuing and structuring acquisitions, managing complex risk and advising the board. It suits those targeting treasury, corporate finance and CFO career paths.",
  learningOutcomes: [
    "Evaluate the role and responsibility of senior financial executives.",
    "Advise on advanced investment appraisal and cost of capital.",
    "Evaluate acquisitions, mergers and corporate reconstruction.",
    "Value companies and their securities.",
    "Advise on treasury and working capital strategy.",
    "Apply advanced hedging of currency and interest rate risk.",
    "Evaluate real options in decisions.",
    "Communicate reasoned financial advice.",
  ],
  syllabusAreas: [
    area(
      "Role and environment of financial management",
      [
        "Role of senior financial adviser",
        "Financial strategy and stakeholder objectives",
        "Ethics and governance in financial management",
        "Economic environment and regulation",
      ],
      "Integrated"
    ),
    area(
      "Advanced investment appraisal",
      [
        "Free cash flow and adjusted present value (APV)",
        "Impact of financing and cost of capital",
        "Real options (Black-Scholes application)",
        "International investment and risk",
      ],
      "Integrated"
    ),
    area(
      "Acquisitions and mergers",
      [
        "Business valuation methods",
        "Synergy, premiums and financing a bid",
        "Regulation and defensive tactics",
        "Post-acquisition value",
      ],
      "Integrated"
    ),
    area(
      "Corporate reconstruction and reorganisation",
      [
        "Financial reconstruction and distress",
        "Divestment, demergers and spin-offs",
        "Restructuring to create value",
      ],
      "Integrated"
    ),
    area(
      "Treasury and advanced risk management",
      [
        "Hedging currency risk (forwards, futures, options, swaps)",
        "Hedging interest rate risk",
        "Option pricing and the Greeks (introductory)",
        "Dividend and treasury policy",
      ],
      "Integrated"
    ),
  ],
  lessons: [
    lesson(
      "afm-l1",
      "Role, strategy and ethics of senior finance",
      60,
      [
        "Explain the senior adviser's role",
        "Relate financial strategy to objectives",
        "Apply ethics in financial decisions",
      ],
      [
        "Senior advisers align financial and corporate strategy.",
        "Objectives balance shareholders and wider stakeholders.",
        "Ethics and governance constrain financial decisions.",
        "Financial strategy covers investment, financing and dividends.",
        "Advice must be reasoned and communicated clearly.",
        "Judgement is central under uncertainty.",
      ],
      [
        "How does financial strategy support corporate strategy?",
        "Why do ethics constrain financial decisions?",
        "What three areas does financial strategy cover?",
      ],
      undefined
    ),
    lesson(
      "afm-l2",
      "Advanced investment appraisal and APV",
      90,
      [
        "Apply free cash flow valuation",
        "Compute adjusted present value",
        "Assess the financing side effects",
      ],
      [
        "Free cash flow to firm discounts at WACC; to equity at Ke.",
        "APV separates the base-case NPV from financing effects.",
        "The tax shield adds value from debt financing.",
        "Issue costs and subsidised loans adjust APV.",
        "Ungearing/regearing beta handles changing capital structure.",
        "APV suits projects with changing gearing.",
      ],
      [
        "What does APV separate?",
        "How does the tax shield add value?",
        "When is APV preferred to NPV at WACC?",
      ],
      "A project's base-case NPV (all-equity) is £2m; adding the £0.5m present value of the debt tax shield and deducting £0.1m issue costs gives an APV of £2.4m, showing the value added by financing."
    ),
    lesson(
      "afm-l3",
      "Real options",
      75,
      [
        "Identify real options in projects",
        "Apply the Black-Scholes model",
        "Interpret option value in decisions",
      ],
      [
        "Real options include options to delay, expand, abandon or redeploy.",
        "Flexibility has value ignored by simple NPV.",
        "Black-Scholes values options using five inputs.",
        "Volatility increases option value.",
        "Options can turn a negative-NPV project positive.",
        "Judgement is needed to map projects to option types.",
      ],
      [
        "Name three types of real option.",
        "How does volatility affect option value?",
        "Why can a real option change an accept/reject decision?",
      ],
      "A project with a slightly negative NPV but a valuable option to expand later may still be accepted, because the Black-Scholes value of the expansion flexibility exceeds the shortfall."
    ),
    lesson(
      "afm-l4",
      "Business valuation",
      90,
      [
        "Apply asset, income and market valuations",
        "Value using free cash flow",
        "Assess synergy and premiums",
      ],
      [
        "Valuation methods: asset, earnings (P/E), dividend and free cash flow.",
        "Free cash flow valuation discounts forecast flows at WACC.",
        "Synergy adds value beyond the standalone businesses.",
        "The bid premium reflects control and synergy.",
        "Different bases give a valuation range.",
        "Judgement selects the most relevant method.",
      ],
      [
        "How does free cash flow valuation work?",
        "What is synergy in an acquisition?",
        "Why does valuation give a range?",
      ],
      "If a target's standalone value is £50m and expected synergies are worth £10m, a bidder can justify paying up to £60m; anything less than that shares the synergy value with its own shareholders."
    ),
    lesson(
      "afm-l5",
      "Acquisitions, mergers and financing",
      75,
      [
        "Evaluate a bid and financing choice",
        "Assess regulation and defences",
        "Advise on post-acquisition value",
      ],
      [
        "Bids may be cash, share exchange or a combination.",
        "Financing affects control, gearing and reported EPS.",
        "Regulators oversee takeovers to protect shareholders.",
        "Defensive tactics resist hostile bids.",
        "Post-acquisition integration determines realised value.",
        "Advice weighs financial and strategic factors.",
      ],
      [
        "Compare cash and share-exchange bids.",
        "Why does financing choice matter to the bidder?",
        "Give one takeover defence tactic.",
      ],
      undefined
    ),
    lesson(
      "afm-l6",
      "Corporate reconstruction",
      60,
      [
        "Evaluate financial reconstruction",
        "Assess divestment and demergers",
        "Advise on restructuring for value",
      ],
      [
        "Financial reconstruction addresses distress and capital structure.",
        "Schemes rebalance debt and equity to survive.",
        "Divestment and demergers can unlock value.",
        "Spin-offs create focused, separately valued entities.",
        "Restructuring must consider all stakeholders.",
        "The test is whether value is created versus liquidation.",
      ],
      [
        "When is financial reconstruction considered?",
        "How can a demerger create value?",
        "What is the benchmark for restructuring?",
      ],
      undefined
    ),
    lesson(
      "afm-l7",
      "Hedging currency risk",
      90,
      [
        "Apply forwards, futures and options to FX",
        "Use currency swaps",
        "Compare hedge outcomes",
      ],
      [
        "Forwards fix a rate; futures are standardised and marked to market.",
        "Currency options give protection with upside at a premium.",
        "Money-market hedges use borrowing and deposits.",
        "Swaps exchange currency obligations over time.",
        "Basis risk and contract size affect futures hedges.",
        "The best hedge depends on cost, flexibility and risk appetite.",
      ],
      [
        "Contrast a forward with a currency option.",
        "How does a money-market hedge work?",
        "What is basis risk in futures?",
      ],
      "Facing a $5m receipt in three months, a firm can lock in with a forward or buy put options on dollars; the option costs a premium but lets the firm benefit if the dollar strengthens."
    ),
    lesson(
      "afm-l8",
      "Hedging interest rate risk and treasury policy",
      75,
      [
        "Apply FRAs, futures and options to rates",
        "Use interest rate swaps",
        "Advise on treasury and dividend policy",
      ],
      [
        "FRAs fix a future interest rate on a notional amount.",
        "Interest rate futures and options hedge rate movements.",
        "Swaps exchange fixed for floating interest.",
        "Swaps can reduce financing cost via comparative advantage.",
        "Treasury policy centralises risk and liquidity management.",
        "Dividend policy signals and affects funding.",
      ],
      [
        "What does an FRA fix?",
        "How can a swap reduce borrowing cost?",
        "Why centralise treasury?",
      ],
      "Two firms with different fixed/floating borrowing advantages can swap: each borrows where it is relatively cheaper and swaps, sharing the comparative-advantage gain to lower both firms' effective interest cost."
    ),
  ],
  frameworksAndFormulas: [
    "Free cash flow valuation discounted at WACC (or Ke for equity)",
    "APV = base-case NPV + PV of financing side effects",
    "Modigliani-Miller with tax; ungearing/regearing beta",
    "Black-Scholes option pricing (five inputs) and put-call parity",
    "Business valuation: asset, P/E, dividend growth, free cash flow",
    "Synergy value and maximum justifiable bid price",
    "Forward, futures, option and money-market FX hedges",
    "FRAs, interest rate futures/options and swaps",
    "Interest rate and purchasing power parity",
    "Comparative advantage in swaps",
  ],
  commonTraps: [
    "Discounting free cash flow to firm at Ke instead of WACC.",
    "Omitting financing side effects in APV.",
    "Ignoring the option premium/time value in hedging comparisons.",
    "Choosing the wrong hedge direction.",
    "Overstating synergy without justification.",
    "Producing numbers without clear advice.",
  ],
  examTechnique: [
    "Set out assumptions and structure long calculations clearly.",
    "Always translate numbers into reasoned advice.",
    "Manage time across the compulsory and optional questions.",
    "Show hedge alternatives and recommend one with reasons.",
    "Address ethics and stakeholders where relevant.",
    "Review the direction and sign of hedges and cash flows.",
  ],
  practicePlan: [
    "Revise FM cost of capital and NPV foundations.",
    "Drill APV and free cash flow valuation.",
    "Practise acquisition valuation and financing questions.",
    "Work FX and interest rate hedging problems.",
    "Practise real options and reconstruction questions.",
    "Sit a full mock to time.",
    "Re-test hedging and valuation with advice write-ups.",
  ],
  furtherReading: [
    "ACCA Study Hub — Advanced Financial Management (AFM) resources",
    "ACCA AFM syllabus and study guide (current exam year)",
    "ACCA technical article: 'Adjusted present value'",
    "ACCA technical article: 'Hedging foreign exchange risk'",
  ],
});

const APM: ModuleCourseware = courseware({
  moduleId: "acca-all-m13",
  examId: "acca",
  levelId: "all",
  title: "APM — Advanced Performance Management",
  paperCode: "APM",
  examFormat: "Session CBE, 3 hours 15 minutes",
  estimatedStudyHours: 140,
  overview:
    "Advanced Performance Management applies relevant knowledge, skills and exercise of professional judgement in selecting and applying strategic management accounting techniques in different business contexts to contribute to the evaluation of the performance of an organisation and its strategic development. It covers the strategic planning and control environment, performance management systems, strategic performance measurement and performance evaluation. Critical evaluation of techniques is central.",
  whyItMatters:
    "APM turns performance management into a strategic, board-level discipline — designing systems, choosing measures and critiquing their fit. It suits those aiming for management accounting, business partnering and strategy roles.",
  learningOutcomes: [
    "Assess the strategic planning and control environment.",
    "Evaluate the design of performance management systems.",
    "Apply strategic performance measurement frameworks.",
    "Critically evaluate performance measures for fitness of purpose.",
    "Assess performance in divisional and complex structures.",
    "Evaluate performance in not-for-profit and public sectors.",
    "Analyse the impact of external factors on performance.",
    "Advise on performance improvement and reward.",
  ],
  syllabusAreas: [
    area(
      "Strategic planning and control",
      [
        "Environmental and organisational factors",
        "Budgeting and control systems at strategic level",
        "Changes in business structure and management accounting",
        "Effect of IT and analytics on performance management",
      ],
      "Integrated"
    ),
    area(
      "Performance management systems and design",
      [
        "Performance hierarchy and information needs",
        "Sources of management information",
        "Recording and processing methods; big data",
        "Management reports for decision-making",
      ],
      "Integrated"
    ),
    area(
      "Strategic performance measurement",
      [
        "Financial performance measures and value-based management",
        "Non-financial measures and the balanced scorecard",
        "Performance pyramids and building block model",
        "Benchmarking",
      ],
      "Integrated"
    ),
    area(
      "Performance evaluation and corporate failure",
      [
        "Divisional performance and transfer pricing",
        "Alternative views of performance measurement",
        "Predicting and preventing corporate failure",
        "Reward, behaviour and performance",
      ],
      "Integrated"
    ),
  ],
  lessons: [
    lesson(
      "apm-l1",
      "Strategic planning and control environment",
      75,
      [
        "Assess environmental influences on performance",
        "Link strategy to control systems",
        "Evaluate management accounting change",
      ],
      [
        "Environmental turbulence affects planning and control.",
        "Control systems must fit strategy and structure.",
        "Anthony's hierarchy: strategic, tactical, operational control.",
        "Lean and modern structures change information needs.",
        "IT and analytics reshape performance management.",
        "Fit between strategy, structure and systems drives success.",
      ],
      [
        "What is Anthony's control hierarchy?",
        "Why must control systems fit strategy?",
        "How does analytics change performance management?",
      ],
      undefined
    ),
    lesson(
      "apm-l2",
      "Designing performance management systems",
      75,
      [
        "Evaluate information for performance",
        "Assess reporting for decision-making",
        "Apply big data and analytics",
      ],
      [
        "Good information supports the right decisions at the right level.",
        "Reports must be relevant, timely and actionable.",
        "Big data offers new performance insight.",
        "Information overload harms decision-making.",
        "Systems should link to strategic objectives.",
        "Design must consider behavioural effects.",
      ],
      [
        "What makes a performance report useful?",
        "Give a risk of information overload.",
        "How can big data aid performance management?",
      ],
      undefined
    ),
    lesson(
      "apm-l3",
      "Financial performance and value-based management",
      75,
      [
        "Apply value-based measures (EVA)",
        "Assess shareholder value drivers",
        "Critique financial measures",
      ],
      [
        "EVA measures economic profit after a capital charge.",
        "Value-based management focuses on value drivers.",
        "Traditional measures can be short-termist.",
        "EVA adjustments correct accounting distortions.",
        "Financial measures need non-financial balance.",
        "Measures shape behaviour, for good or ill.",
      ],
      [
        "How is EVA calculated?",
        "Why can accounting profit mislead?",
        "What is a value driver?",
      ],
      "EVA = net operating profit after tax − (capital × WACC); a division with £5m NOPAT using £30m capital at 12% WACC has EVA of £5m − £3.6m = £1.4m, showing value truly created."
    ),
    lesson(
      "apm-l4",
      "Strategic performance frameworks",
      75,
      [
        "Apply the balanced scorecard",
        "Use the performance pyramid and building blocks",
        "Apply benchmarking",
      ],
      [
        "The balanced scorecard links four perspectives to strategy.",
        "The performance pyramid connects vision to operations.",
        "Fitzgerald & Moon building blocks: dimensions, standards, rewards.",
        "Benchmarking compares against best practice.",
        "Frameworks must be tailored, not applied mechanically.",
        "Measures should cascade from strategy.",
      ],
      [
        "Name the balanced scorecard perspectives.",
        "What are the building block dimensions?",
        "Why tailor a framework to the organisation?",
      ],
      "For an airline, a balanced scorecard might pair on-time performance (internal), customer satisfaction (customer), load factor and yield (financial) and crew training (learning) so no single measure dominates."
    ),
    lesson(
      "apm-l5",
      "Divisional performance and transfer pricing",
      75,
      [
        "Evaluate divisional measures",
        "Design transfer prices",
        "Assess behavioural effects",
      ],
      [
        "ROI, RI and EVA assess divisional performance differently.",
        "Controllability should shape divisional measures.",
        "Transfer prices affect divisional profit and motivation.",
        "The general rule: marginal cost plus opportunity cost.",
        "Dysfunctional behaviour arises from poor measures.",
        "Autonomy and goal congruence must be balanced.",
      ],
      [
        "Contrast ROI and RI for divisional evaluation.",
        "State the general transfer pricing rule.",
        "How can measures cause dysfunctional behaviour?",
      ],
      "If a supplying division has spare capacity, a transfer price at marginal cost keeps the buying division buying internally and maximises group profit, even though the seller shows little divisional profit."
    ),
    lesson(
      "apm-l6",
      "Performance in not-for-profit and public sectors",
      60,
      [
        "Apply value for money",
        "Set measures without a profit motive",
        "Assess stakeholder-driven objectives",
      ],
      [
        "Value for money uses the three Es: economy, efficiency, effectiveness.",
        "Objectives are multiple and often non-financial.",
        "Outputs and outcomes must be measured carefully.",
        "Stakeholders shape public sector goals.",
        "Comparability and targets can distort behaviour.",
        "Judgement is needed to set balanced measures.",
      ],
      [
        "State the three Es of value for money.",
        "Why is public sector performance hard to measure?",
        "Distinguish an output from an outcome.",
      ],
      undefined
    ),
    lesson(
      "apm-l7",
      "Corporate failure and performance improvement",
      60,
      [
        "Predict corporate failure",
        "Interpret failure models",
        "Advise on improvement",
      ],
      [
        "Quantitative models (e.g. Altman Z-score) predict failure.",
        "Qualitative models (e.g. Argenti) add management factors.",
        "Failure often combines financial and strategic weakness.",
        "Early warning enables corrective action.",
        "Models have limitations and need judgement.",
        "Improvement links measurement to action.",
      ],
      [
        "What does the Altman Z-score predict?",
        "What does Argenti's model add?",
        "Why treat failure models with caution?",
      ],
      undefined
    ),
    lesson(
      "apm-l8",
      "Reward, behaviour and evaluation of systems",
      60,
      [
        "Link reward to performance",
        "Assess behavioural consequences",
        "Critically evaluate a performance system",
      ],
      [
        "Reward systems must align with objectives.",
        "Poorly designed rewards cause gaming and short-termism.",
        "Performance systems should be evaluated for fitness of purpose.",
        "Measures influence what people focus on.",
        "Balance financial and non-financial rewards.",
        "APM rewards critical evaluation over description.",
      ],
      [
        "How can reward schemes cause gaming?",
        "What does 'fitness for purpose' mean here?",
        "Why balance financial and non-financial rewards?",
      ],
      "A sales bonus based purely on volume may drive discounting that erodes margin; APM answers would recommend adding margin and customer-retention measures so rewards support overall strategy."
    ),
  ],
  frameworksAndFormulas: [
    "Anthony's hierarchy: strategic, tactical, operational control",
    "EVA = NOPAT − (capital employed × WACC)",
    "Balanced scorecard: financial, customer, internal, learning perspectives",
    "Fitzgerald & Moon building blocks: dimensions, standards, rewards",
    "Performance pyramid (Lynch & Cross)",
    "Value for money — economy, efficiency, effectiveness",
    "ROI, residual income and transfer pricing rules",
    "Altman Z-score for failure prediction",
    "Argenti A-score (qualitative failure model)",
    "Benchmarking types (internal, competitive, functional)",
  ],
  commonTraps: [
    "Describing frameworks without evaluating their fit.",
    "Applying the balanced scorecard mechanically.",
    "Ignoring behavioural and dysfunctional effects.",
    "Confusing outputs with outcomes in the public sector.",
    "Failing to link measures to the specific strategy.",
    "Calculating EVA without explaining its meaning.",
  ],
  examTechnique: [
    "Focus on evaluation and application, not description.",
    "Use the scenario's strategy to justify measures.",
    "Always assess behavioural implications.",
    "Structure answers around the requirement verbs.",
    "Manage time across compulsory and optional questions.",
    "Recommend improvements, not just critique.",
  ],
  practicePlan: [
    "Revise PM divisional performance and variances.",
    "Study each performance framework and its critique.",
    "Practise EVA and value-based questions.",
    "Work not-for-profit and failure-model questions.",
    "Practise evaluating whole performance systems.",
    "Sit a full mock to time.",
    "Re-test evaluation-style questions and frameworks.",
  ],
  furtherReading: [
    "ACCA Study Hub — Advanced Performance Management (APM) resources",
    "ACCA APM syllabus and study guide (current exam year)",
    "ACCA technical article: 'The balanced scorecard'",
    "ACCA technical article: 'Economic value added (EVA)'",
  ],
});

const ATX: ModuleCourseware = courseware({
  moduleId: "acca-all-m14",
  examId: "acca",
  levelId: "all",
  title: "ATX — Advanced Taxation",
  paperCode: "ATX",
  examFormat: "Session CBE, 3 hours 15 minutes",
  estimatedStudyHours: 140,
  overview:
    "Advanced Taxation applies relevant knowledge and skills and exercises professional judgement in providing relevant information and advice to individuals and businesses on the impact of the major taxes on financial decisions and situations. Building on TX, it covers advanced income tax, corporation tax, capital gains, inheritance tax, VAT, stamp taxes and their interactions, with an emphasis on planning and giving reasoned advice. The most common variant is UK.",
  whyItMatters:
    "ATX develops the advisory and planning skills of a tax professional — combining multiple taxes, timing and reliefs to advise clients. It is essential for careers in tax advisory and practice.",
  learningOutcomes: [
    "Apply knowledge of the UK tax system to advisory situations.",
    "Advise on income tax and NIC planning.",
    "Advise on corporation tax including groups and international aspects.",
    "Advise on capital gains and inheritance tax planning.",
    "Advise on VAT and stamp taxes in transactions.",
    "Evaluate the interaction of taxes in decisions.",
    "Communicate tax advice clearly and ethically.",
    "Identify tax-efficient structures within the law.",
  ],
  syllabusAreas: [
    area(
      "Income tax and NIC planning",
      [
        "Employment vs self-employment and remuneration planning",
        "Pensions and investment planning",
        "Overseas aspects of income tax and residence",
        "Personal financial planning and tax efficiency",
      ],
      "Integrated"
    ),
    area(
      "Corporation tax and groups",
      [
        "Group relief, gains groups and reorganisations",
        "Close and investment companies",
        "International tax: double taxation and transfer pricing",
        "Financing and tax-efficient structuring",
      ],
      "Integrated"
    ),
    area(
      "Capital gains and inheritance tax",
      [
        "CGT reliefs and planning on disposals",
        "IHT lifetime and death planning",
        "Trusts and estate planning",
        "Interaction of CGT and IHT",
      ],
      "Integrated"
    ),
    area(
      "Indirect taxes and administration",
      [
        "VAT in complex and international transactions",
        "Stamp taxes on shares and property",
        "Tax administration, penalties and ethics",
        "Anti-avoidance and disclosure",
      ],
      "Integrated"
    ),
  ],
  lessons: [
    lesson(
      "atx-l1",
      "Income tax and remuneration planning",
      75,
      [
        "Advise on employment vs self-employment",
        "Plan tax-efficient remuneration",
        "Incorporate pensions and investments",
      ],
      [
        "Structure of remuneration affects tax and NIC.",
        "Salary, dividends and benefits have different burdens.",
        "Pension contributions give tax relief within limits.",
        "Tax-efficient investments reduce liabilities.",
        "Timing income can manage marginal rates.",
        "Advice must be within the law and ethical.",
      ],
      [
        "How can dividend vs salary affect total tax?",
        "How do pensions reduce tax?",
        "Why does timing of income matter?",
      ],
      "An owner-manager taking part of their reward as dividends rather than salary can reduce NIC, but the corporation tax and dividend tax interaction must be evaluated to find the truly efficient mix."
    ),
    lesson(
      "atx-l2",
      "Overseas aspects and residence",
      60,
      [
        "Determine residence and domicile",
        "Advise on overseas income and gains",
        "Apply double taxation relief",
      ],
      [
        "Residence and domicile determine the scope of UK tax.",
        "The statutory residence test applies set criteria.",
        "Overseas income may be taxed on arising or remittance basis.",
        "Double taxation relief prevents taxing the same income twice.",
        "Planning considers the individual's global position.",
        "Rules are complex and require careful application.",
      ],
      [
        "What does residence determine for UK tax?",
        "What is double taxation relief?",
        "When is the remittance basis relevant?",
      ],
      undefined
    ),
    lesson(
      "atx-l3",
      "Corporation tax and groups",
      75,
      [
        "Advise on group relief and gains groups",
        "Plan reorganisations",
        "Assess close/investment companies",
      ],
      [
        "Group relief moves losses within a 75% group.",
        "Gains groups allow assets to move without a charge.",
        "Reorganisations can defer or trigger tax.",
        "Close companies have special rules (loans to participators).",
        "Structuring affects the overall group tax burden.",
        "Advice must consider commercial as well as tax factors.",
      ],
      [
        "What is a gains group?",
        "How does group relief work?",
        "Give one special rule for close companies.",
      ],
      "Transferring an asset within a gains group before an external sale can allocate the gain to a company with capital losses, reducing the group's overall corporation tax on the disposal."
    ),
    lesson(
      "atx-l4",
      "International corporate tax",
      60,
      [
        "Explain double taxation and treaties",
        "Describe transfer pricing rules",
        "Assess overseas expansion structures",
      ],
      [
        "Companies operating abroad face double taxation risk.",
        "Treaties allocate taxing rights between countries.",
        "Transfer pricing requires arm's length prices.",
        "Branch vs subsidiary has different tax effects.",
        "Controlled foreign company rules counter diversion.",
        "Structure affects tax, control and risk.",
      ],
      [
        "What is the arm's length principle?",
        "Contrast a branch with a subsidiary for tax.",
        "What do tax treaties do?",
      ],
      undefined
    ),
    lesson(
      "atx-l5",
      "Capital gains tax planning",
      75,
      [
        "Apply CGT reliefs strategically",
        "Time disposals efficiently",
        "Advise on business asset disposals",
      ],
      [
        "Reliefs include business asset disposal, rollover and gift relief.",
        "Timing disposals uses annual exemptions and rates.",
        "Spouse transfers can use both partners' exemptions.",
        "Incorporation relief defers gains on transferring a business.",
        "Planning must respect anti-avoidance rules.",
        "Interaction with IHT must be considered.",
      ],
      [
        "How does gift relief defer a gain?",
        "Why transfer assets between spouses before sale?",
        "What is incorporation relief?",
      ],
      "Transferring an asset to a spouse before sale lets a couple use two annual exempt amounts and, if one is a basic-rate taxpayer, tax part of the gain at a lower rate."
    ),
    lesson(
      "atx-l6",
      "Inheritance tax and estate planning",
      75,
      [
        "Plan lifetime gifts",
        "Apply business and agricultural reliefs",
        "Advise using trusts",
      ],
      [
        "Lifetime gifting uses exemptions and the seven-year rule.",
        "Business/agricultural property relief can remove value from charge.",
        "Trusts can control and protect assets.",
        "The residence nil-rate band adds relief for a home.",
        "CGT and IHT interact on lifetime gifts.",
        "Advice balances tax with family objectives.",
      ],
      [
        "How does business property relief help IHT?",
        "Why use the seven-year rule in planning?",
        "How do CGT and IHT interact on a gift?",
      ],
      "Giving business assets qualifying for 100% business property relief removes them from the IHT estate, but the potential CGT on the gift must be weighed, possibly using gift relief to defer it."
    ),
    lesson(
      "atx-l7",
      "VAT and stamp taxes in transactions",
      60,
      [
        "Advise on VAT in complex transactions",
        "Apply VAT to property and international trade",
        "Explain stamp taxes",
      ],
      [
        "VAT groups and partial exemption affect recovery.",
        "Property transactions have special VAT rules (option to tax).",
        "International supplies use place-of-supply rules.",
        "Stamp duty applies to shares; SDLT to land.",
        "Transactions must be planned for indirect tax.",
        "Getting VAT wrong is costly and common.",
      ],
      [
        "What is the option to tax?",
        "How is VAT recovery affected by partial exemption?",
        "Distinguish stamp duty from SDLT.",
      ],
      undefined
    ),
    lesson(
      "atx-l8",
      "Tax administration, ethics and anti-avoidance",
      60,
      [
        "Explain compliance and penalties",
        "Apply professional ethics in tax",
        "Distinguish avoidance from evasion",
      ],
      [
        "Filing, payment and record-keeping obligations carry penalties.",
        "Ethics require honesty and confidentiality with limits.",
        "Avoidance is legal; evasion is criminal.",
        "The GAAR and disclosure rules counter aggressive avoidance.",
        "Advisers must manage conflicts and money laundering risk.",
        "Reasoned, documented advice protects client and adviser.",
      ],
      [
        "Distinguish avoidance from evasion.",
        "What is the GAAR?",
        "What ethical duties apply to a tax adviser?",
      ],
      "Advising a client to use a contrived scheme with no commercial purpose risks challenge under the GAAR and breaches professional ethics; the adviser should recommend legitimate planning instead."
    ),
  ],
  frameworksAndFormulas: [
    "Income tax computation and remuneration planning (salary vs dividend)",
    "Statutory residence test and remittance basis",
    "Group relief and gains group rules (75% / 75%)",
    "Double taxation relief and the arm's length principle",
    "CGT reliefs: business asset disposal, rollover, gift, incorporation",
    "IHT: seven-year rule, taper, BPR/APR, residence nil-rate band",
    "VAT: partial exemption, option to tax, place of supply",
    "Stamp duty (shares) and SDLT (land)",
    "GAAR and disclosure of tax avoidance schemes",
    "Interaction of CGT and IHT on lifetime gifts",
  ],
  commonTraps: [
    "Computing tax without giving the required advice.",
    "Ignoring the interaction between different taxes.",
    "Missing reliefs or applying them incorrectly.",
    "Overlooking ethics and anti-avoidance boundaries.",
    "Using out-of-date rates instead of the exam tax tables.",
    "Failing to consider timing and the client's objectives.",
  ],
  examTechnique: [
    "Read the client's objectives before computing.",
    "Structure answers as advice with clear recommendations.",
    "Show tax savings from each planning option.",
    "Consider all relevant taxes and their interaction.",
    "Flag ethical and anti-avoidance issues.",
    "Manage time across compulsory and optional questions.",
  ],
  practicePlan: [
    "Revise TX computations and reliefs.",
    "Drill remuneration and CGT planning questions.",
    "Practise group and international corporation tax.",
    "Work IHT and estate planning questions.",
    "Practise multi-tax advisory scenarios.",
    "Sit a full mock to time.",
    "Re-test planning questions and tax interactions.",
  ],
  furtherReading: [
    "ACCA Study Hub — Advanced Taxation (ATX-UK) resources",
    "ACCA ATX syllabus, study guide and tax tables (current exam year)",
    "ACCA technical article: 'Groups of companies for ATX'",
    "ACCA technical article: 'Inheritance tax planning'",
  ],
});

const AAA: ModuleCourseware = courseware({
  moduleId: "acca-all-m15",
  examId: "acca",
  levelId: "all",
  title: "AAA — Advanced Audit & Assurance",
  paperCode: "AAA",
  examFormat: "Session CBE, 3 hours 15 minutes",
  estimatedStudyHours: 140,
  overview:
    "Advanced Audit & Assurance analyses, evaluates and concludes on the assurance engagement and other audit and assurance issues in the context of best practice and current developments. Building on AA, it covers regulatory and ethical frameworks, quality management, planning and completing audits of complex entities and groups, reporting, and current issues. The exam demands application, evaluation and professional judgement.",
  whyItMatters:
    "AAA develops the judgement of an audit manager or partner — planning complex engagements, evaluating evidence and reporting appropriately. It is the capstone for those pursuing audit and assurance careers.",
  learningOutcomes: [
    "Evaluate the regulatory, ethical and professional framework.",
    "Assess quality management for firms and engagements.",
    "Plan and perform the audit of complex entities and groups.",
    "Evaluate audit evidence and form conclusions.",
    "Address completion, review and reporting issues.",
    "Advise on other assurance and non-audit engagements.",
    "Evaluate current issues and developments in assurance.",
    "Exercise professional scepticism and judgement.",
  ],
  syllabusAreas: [
    area(
      "Regulatory environment and professional ethics",
      [
        "Legal and regulatory framework",
        "Money laundering and laws and regulations",
        "Code of ethics, conflicts and independence",
        "Professional and ethical considerations in engagements",
      ],
      "Integrated"
    ),
    area(
      "Quality management and practice",
      [
        "Quality management at firm and engagement level",
        "Acceptance and continuance of engagements",
        "Advertising, tendering and fees",
        "Practice management issues",
      ],
      "Integrated"
    ),
    area(
      "Planning and performing the audit",
      [
        "Risk assessment for complex and group entities",
        "Audit of specific and complex financial statement items",
        "Group audit and using the work of component auditors and experts",
        "Audit of performance information and forecasts",
      ],
      "Integrated"
    ),
    area(
      "Completion, review and reporting",
      [
        "Going concern and subsequent events",
        "Evaluating misstatements and forming opinions",
        "The auditor's report and communication",
        "Reporting to those charged with governance",
      ],
      "Integrated"
    ),
    area(
      "Other assignments and current issues",
      [
        "Assurance and review engagements",
        "Prospective financial information and due diligence",
        "Forensic and social/environmental assurance",
        "Current developments in audit and assurance",
      ],
      "Integrated"
    ),
  ],
  lessons: [
    lesson(
      "aaa-l1",
      "Regulatory framework and ethics",
      75,
      [
        "Evaluate the regulatory framework",
        "Apply the code of ethics to complex situations",
        "Manage conflicts and independence",
      ],
      [
        "Auditors operate within law, standards and regulation.",
        "Money laundering and NOCLAR create reporting duties.",
        "Independence threats intensify for complex clients.",
        "Conflicts of interest require management and safeguards.",
        "Fee and non-audit service limits protect objectivity.",
        "Ethics underpins the whole engagement.",
      ],
      [
        "What is NOCLAR and why does it matter?",
        "How are conflicts of interest managed?",
        "Why limit non-audit services for listed clients?",
      ],
      "A firm asked to provide both the audit and valuation of a key asset faces a self-review threat; for a listed client this non-audit service should generally be declined to protect independence."
    ),
    lesson(
      "aaa-l2",
      "Quality management and practice",
      60,
      [
        "Apply quality management standards",
        "Evaluate engagement acceptance",
        "Address practice management issues",
      ],
      [
        "Quality management operates at firm and engagement level.",
        "Acceptance considers risk, ethics and competence.",
        "Engagement quality reviews add oversight.",
        "Tendering and fees raise ethical considerations.",
        "Lowballing threatens quality and independence.",
        "Documentation evidences quality.",
      ],
      [
        "What factors affect engagement acceptance?",
        "What is an engagement quality review?",
        "Why is lowballing a concern?",
      ],
      undefined
    ),
    lesson(
      "aaa-l3",
      "Planning and risk for complex entities",
      90,
      [
        "Assess risk for complex/group entities",
        "Set materiality across a group",
        "Design a responsive audit strategy",
      ],
      [
        "Complex entities heighten inherent and control risk.",
        "Group audits require component materiality and instructions.",
        "Significant risks demand tailored procedures.",
        "Analytical review informs planning.",
        "Reliance on component auditors and experts must be assessed.",
        "Scepticism is essential in risk assessment.",
      ],
      [
        "How is materiality handled in a group audit?",
        "What is a significant risk?",
        "How is reliance on a component auditor assessed?",
      ],
      "For a group with a material overseas subsidiary, the group auditor sets component materiality below group materiality and issues instructions, then evaluates the component auditor's competence and work before relying on it."
    ),
    lesson(
      "aaa-l4",
      "Auditing complex financial statement items",
      75,
      [
        "Design procedures for complex balances",
        "Audit estimates and fair values",
        "Evaluate management judgements",
      ],
      [
        "Estimates and fair values carry estimation uncertainty.",
        "Procedures test assumptions, methods and data.",
        "Complex items include financial instruments and pensions.",
        "Using an auditor's expert may be necessary.",
        "Management bias must be challenged.",
        "Scepticism guides evaluation of judgements.",
      ],
      [
        "How is an accounting estimate audited?",
        "When is an auditor's expert used?",
        "Why challenge management's assumptions?",
      ],
      "Auditing a defined benefit pension obligation, the auditor engages an actuarial expert to assess the discount rate and mortality assumptions, remaining sceptical of assumptions that conveniently reduce the liability."
    ),
    lesson(
      "aaa-l5",
      "Group audits and using others' work",
      75,
      [
        "Plan a group audit",
        "Direct and review component auditors",
        "Consolidate audit conclusions",
      ],
      [
        "The group engagement team is responsible for the group opinion.",
        "Components are scoped by significance.",
        "Group instructions communicate requirements.",
        "The consolidation process itself is audited.",
        "Communication with component auditors is essential.",
        "Sufficient appropriate evidence must cover the whole group.",
      ],
      [
        "Who is responsible for the group audit opinion?",
        "How are components scoped?",
        "Why audit the consolidation process?",
      ],
      undefined
    ),
    lesson(
      "aaa-l6",
      "Completion, going concern and reporting",
      75,
      [
        "Evaluate misstatements and going concern",
        "Form the audit opinion",
        "Draft appropriate report elements",
      ],
      [
        "Uncorrected misstatements are evaluated against materiality.",
        "Going concern assessment may require additional work.",
        "Opinions: unmodified, qualified, adverse, disclaimer.",
        "Material uncertainty over going concern affects the report.",
        "Key audit matters are reported for listed entities.",
        "Reporting to governance communicates significant findings.",
      ],
      [
        "When is a disclaimer of opinion appropriate?",
        "How is a material uncertainty on going concern reported?",
        "What are key audit matters?",
      ],
      "If management refuses adequate going concern disclosure despite significant doubt, the auditor concludes the statements are materially misstated and issues a qualified or adverse opinion accordingly."
    ),
    lesson(
      "aaa-l7",
      "Other assurance and non-audit engagements",
      60,
      [
        "Distinguish assurance engagement types",
        "Assess prospective financial information",
        "Describe due diligence and forensic work",
      ],
      [
        "Review engagements give limited (negative) assurance.",
        "Prospective information is examined for reasonableness.",
        "Due diligence supports transactions.",
        "Forensic engagements investigate fraud and disputes.",
        "Social and environmental assurance is growing.",
        "Each engagement has its own standards and reporting.",
      ],
      [
        "Contrast reasonable and limited assurance.",
        "How is prospective financial information assured?",
        "What is a forensic engagement?",
      ],
      undefined
    ),
    lesson(
      "aaa-l8",
      "Current issues in audit and assurance",
      60,
      [
        "Discuss current developments",
        "Evaluate the impact of technology",
        "Assess the future of assurance",
      ],
      [
        "Regulation and public expectation of audit are evolving.",
        "Technology (data analytics, AI) changes audit approach.",
        "The audit expectation gap persists.",
        "Sustainability assurance is expanding.",
        "Auditors must adapt while maintaining scepticism.",
        "Candidates should form reasoned views on issues.",
      ],
      [
        "What is the audit expectation gap?",
        "How does data analytics affect the audit?",
        "Give one current issue in assurance.",
      ],
      undefined
    ),
  ],
  frameworksAndFormulas: [
    "Assurance levels: reasonable (positive) vs limited (negative)",
    "Audit risk model applied to complex entities",
    "Group audit: component scoping and component materiality",
    "Threats and safeguards; NOCLAR and money laundering duties",
    "Quality management (firm and engagement level)",
    "Auditing estimates: assumptions, methods, data",
    "Opinion types: unmodified, qualified, adverse, disclaimer",
    "Key audit matters and material uncertainty on going concern",
    "Using the work of experts and component auditors",
    "Due diligence and prospective financial information review",
  ],
  commonTraps: [
    "Repeating AA basics without advanced application.",
    "Vague audit procedures lacking specificity.",
    "Weak or generic ethics answers.",
    "Confusing modified opinion types.",
    "Failing to demonstrate professional scepticism.",
    "Neglecting current issues and discussion marks.",
  ],
  examTechnique: [
    "Apply knowledge to the specific complex scenario.",
    "Write precise, purpose-driven audit procedures.",
    "Structure ethics as threat → why → safeguard.",
    "Justify the reporting conclusion with materiality reasoning.",
    "Demonstrate scepticism throughout.",
    "Manage time across compulsory and optional questions.",
  ],
  practicePlan: [
    "Revise AA framework, ethics and procedures.",
    "Drill risk and planning for complex/group entities.",
    "Practise auditing estimates and complex items.",
    "Work completion and reporting scenarios.",
    "Read and summarise current issues articles.",
    "Sit a full mock to time.",
    "Re-test reporting judgements and ethics.",
  ],
  furtherReading: [
    "ACCA Study Hub — Advanced Audit & Assurance (AAA) resources",
    "ACCA AAA syllabus and study guide (current exam year)",
    "ACCA technical article: 'Group audits'",
    "ACCA technical article: 'Audit of accounting estimates'",
  ],
});

/* -------------------------------------------------------------------------- */
/* Ethics & Professional Skills Module                                        */
/* -------------------------------------------------------------------------- */

const EPSM: ModuleCourseware = courseware({
  moduleId: "acca-all-m16",
  examId: "acca",
  levelId: "all",
  title: "EPSM — Ethics & Professional Skills Module",
  paperCode: "EPSM",
  examFormat: "Online self-paced module (~20 hours), assessment required",
  estimatedStudyHours: 25,
  overview:
    "The Ethics and Professional Skills Module is an interactive, online, self-paced learning experience that develops the complete range of skills demanded by employers in a digital and professional workplace. Through realistic scenarios it builds ethical decision-making, communication, commercial awareness, analysis, scepticism, innovation and leadership. Candidates should complete it before or alongside the Strategic Professional exams (ideally before SBL).",
  whyItMatters:
    "EPSM operationalises the ethics and professional skills examined throughout Strategic Professional, especially SBL. Employers increasingly demand these behaviours, and completing the module strengthens performance across the qualification and in practice.",
  learningOutcomes: [
    "Apply the ACCA code and ethical decision-making models to scenarios.",
    "Recognise and respond to ethical threats and dilemmas.",
    "Communicate effectively and persuasively in professional contexts.",
    "Demonstrate commercial awareness in decision-making.",
    "Apply analytical and evaluative skills to business problems.",
    "Exercise professional scepticism and challenge appropriately.",
    "Show innovation and adaptability in problem-solving.",
    "Demonstrate leadership and teamworking behaviours.",
  ],
  syllabusAreas: [
    area(
      "Ethics and professionalism",
      [
        "The ACCA Code of Ethics and Conduct",
        "Fundamental principles and the conceptual framework",
        "Threats, safeguards and ethical decision-making",
        "Acting in the public interest",
      ],
      "Core"
    ),
    area(
      "Personal effectiveness and communication",
      [
        "Professional communication and influence",
        "Self-awareness and personal development",
        "Emotional intelligence in the workplace",
        "Presenting and reporting effectively",
      ],
      "Core"
    ),
    area(
      "Commercial and analytical skills",
      [
        "Commercial awareness and value creation",
        "Data analysis and interpretation",
        "Problem-solving and decision-making",
        "Professional scepticism and evaluation",
      ],
      "Core"
    ),
    area(
      "Innovation, leadership and teamworking",
      [
        "Innovation and continuous improvement",
        "Leadership styles and influence",
        "Working effectively in teams",
        "Adaptability in a changing environment",
      ],
      "Core"
    ),
  ],
  lessons: [
    lesson(
      "epsm-l1",
      "Ethics and the ACCA code",
      60,
      [
        "State the fundamental principles",
        "Apply the conceptual framework",
        "Use an ethical decision-making model",
      ],
      [
        "Fundamental principles: integrity, objectivity, competence, confidentiality, professional behaviour.",
        "Threats: self-interest, self-review, advocacy, familiarity, intimidation.",
        "Safeguards reduce threats to an acceptable level.",
        "Ethical models structure decision-making (e.g. Tucker, AAA).",
        "Acting in the public interest defines the profession.",
        "Ethics applies to real workplace pressures.",
      ],
      [
        "List the five fundamental principles.",
        "Name the five ethical threats.",
        "What is the role of an ethical decision model?",
      ],
      "Pressured to overlook a related-party transaction, an accountant applies an ethical model: identify the threat (intimidation), consider principles (integrity, objectivity), evaluate options and escalate rather than comply."
    ),
    lesson(
      "epsm-l2",
      "Ethical dilemmas in practice",
      45,
      [
        "Recognise ethical dilemmas",
        "Evaluate options and consequences",
        "Decide and justify a course of action",
      ],
      [
        "Dilemmas often involve conflicting duties.",
        "Consider stakeholders and consequences.",
        "Document reasoning and seek advice where needed.",
        "Escalation and whistleblowing may be required.",
        "Confidentiality has limits (e.g. legal duty).",
        "Reasoned judgement protects the profession.",
      ],
      [
        "How do you evaluate an ethical dilemma?",
        "When might whistleblowing be appropriate?",
        "What are the limits of confidentiality?",
      ],
      undefined
    ),
    lesson(
      "epsm-l3",
      "Professional communication",
      45,
      [
        "Communicate clearly and persuasively",
        "Adapt tone and format to the audience",
        "Present and report effectively",
      ],
      [
        "Effective communication is clear, concise and audience-appropriate.",
        "Format (email, report, presentation) suits the purpose.",
        "Persuasion balances logic, credibility and empathy.",
        "Active listening improves understanding.",
        "Feedback confirms the message landed.",
        "Communication skills are marked in SBL.",
      ],
      [
        "Why adapt communication to the audience?",
        "What makes a message persuasive?",
        "How does active listening help?",
      ],
      undefined
    ),
    lesson(
      "epsm-l4",
      "Commercial awareness and analysis",
      45,
      [
        "Demonstrate commercial awareness",
        "Analyse and interpret data",
        "Solve business problems",
      ],
      [
        "Commercial awareness links decisions to business value.",
        "Data analysis turns information into insight.",
        "Problem-solving follows structured steps.",
        "Context shapes the right recommendation.",
        "Analysis must lead to action.",
        "These skills are assessed across Strategic Professional.",
      ],
      [
        "What is commercial awareness?",
        "Why must analysis lead to action?",
        "How does context affect recommendations?",
      ],
      undefined
    ),
    lesson(
      "epsm-l5",
      "Professional scepticism and evaluation",
      45,
      [
        "Apply professional scepticism",
        "Challenge assumptions and evidence",
        "Evaluate options objectively",
      ],
      [
        "Scepticism questions rather than accepts at face value.",
        "Bias and pressure can distort judgement.",
        "Evaluation weighs strengths, weaknesses and evidence.",
        "Corroborating evidence supports conclusions.",
        "Scepticism is central to audit and reporting.",
        "It is explicitly rewarded in Strategic Professional.",
      ],
      [
        "What does professional scepticism involve?",
        "How does bias threaten judgement?",
        "Why corroborate evidence?",
      ],
      "Presented with an unusually optimistic forecast, a sceptical accountant asks for the underlying assumptions and independent evidence rather than accepting the numbers, protecting the quality of the decision."
    ),
    lesson(
      "epsm-l6",
      "Innovation, leadership and teamworking",
      45,
      [
        "Demonstrate innovation and adaptability",
        "Apply leadership behaviours",
        "Work effectively in teams",
      ],
      [
        "Innovation improves processes and outcomes.",
        "Adaptability handles change and uncertainty.",
        "Leadership influences and motivates others.",
        "Effective teams combine complementary strengths.",
        "Collaboration and trust drive performance.",
        "These behaviours complete the professional skill set.",
      ],
      [
        "Why is adaptability important professionally?",
        "What makes a team effective?",
        "How does leadership differ from authority?",
      ],
      undefined
    ),
  ],
  frameworksAndFormulas: [
    "ACCA Code of Ethics and Conduct — fundamental principles",
    "Conceptual framework: threats and safeguards",
    "Ethical decision-making models (e.g. Tucker's 5 questions, AAA model)",
    "The professional skills: ethics, communication, commercial acumen, analysis, scepticism, leadership",
    "Acting in the public interest",
    "Whistleblowing and escalation routes",
    "Emotional intelligence framework",
    "Structured problem-solving approach",
  ],
  commonTraps: [
    "Treating the module as a tick-box rather than skill-building.",
    "Applying ethics rules without a decision framework.",
    "Ignoring stakeholders and consequences in dilemmas.",
    "Neglecting communication format and audience.",
    "Confusing scepticism with cynicism.",
    "Leaving EPSM until after the Strategic Professional exams.",
  ],
  examTechnique: [
    "Engage fully with each interactive scenario.",
    "Apply an ethical decision model consistently.",
    "Practise the professional skills that SBL later marks.",
    "Reflect on feedback within the module.",
    "Complete the final assessment carefully.",
    "Complete EPSM before sitting SBL for maximum benefit.",
  ],
  practicePlan: [
    "Complete each interactive unit in sequence.",
    "Take notes on the ethical framework and skills.",
    "Reflect on decisions and the feedback given.",
    "Relate scenarios to the SBL professional skills.",
    "Complete the end-of-module assessment.",
    "Revisit ethics content before SBL.",
    "Apply the skills in exam practice for Strategic Professional.",
  ],
  furtherReading: [
    "ACCA Ethics and Professional Skills Module (official platform)",
    "ACCA Code of Ethics and Conduct",
    "ACCA technical article: 'The importance of ethics and professional skills'",
    "ACCA Study Hub — professional skills resources",
  ],
});

/* -------------------------------------------------------------------------- */
/* Paper-level courseware (level: "all")                                      */
/* -------------------------------------------------------------------------- */

export const ACCA_COURSEWARE: ModuleCourseware[] = [
  BT,
  MA,
  FA,
  LW,
  PM,
  TX,
  FR,
  AA,
  FM,
  SBL,
  SBR,
  AFM,
  APM,
  ATX,
  AAA,
  EPSM,
];

/* -------------------------------------------------------------------------- */
/* Stage-level courseware                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Build a stage-level granular module from a paper-level base module.
 * Each result is a complete ModuleCourseware object with the correct
 * moduleId, levelId and a topic-focused title/overview, reusing the rich
 * lessons, syllabus areas, formulas and technique from the paper module.
 */
function stageModule(
  base: ModuleCourseware,
  moduleId: string,
  levelId: string,
  title: string,
  overview: string,
  whyItMatters: string
): ModuleCourseware {
  return courseware({
    ...base,
    moduleId,
    levelId,
    title,
    overview,
    whyItMatters,
  });
}

/* ---- Applied Knowledge (acca-applied-knowledge-m1..m12) ------------------ */

const AK_LEVEL = "applied-knowledge";

const APPLIED_KNOWLEDGE: ModuleCourseware[] = [
  stageModule(
    BT,
    "acca-applied-knowledge-m1",
    AK_LEVEL,
    "BT — Business organisation structure, governance & management",
    "This module focuses on how organisations are structured and governed, and how management and stakeholders interact to achieve objectives. It develops the vocabulary of organisational design, span of control, culture and corporate governance drawn from the BT syllabus. Mastery here frames later work on control, audit and strategy.",
    "Understanding structure and governance underpins how accountants add value inside organisations and is foundational for later audit, law and strategic papers."
  ),
  stageModule(
    BT,
    "acca-applied-knowledge-m2",
    AK_LEVEL,
    "BT — Environmental influences, markets & competitive factors",
    "This module examines the macro and micro environment in which organisations operate, using PESTEL, Porter's Five Forces and basic economics. It develops the ability to analyse market structures, competition and the effect of government policy. These tools recur in strategy and performance papers.",
    "Analysing the external environment is a core business skill that supports strategic decision-making and reappears throughout the qualification."
  ),
  stageModule(
    BT,
    "acca-applied-knowledge-m3",
    AK_LEVEL,
    "BT — Accounting & reporting systems, controls & compliance",
    "This module covers the role of the accounting and finance function, information systems, internal control and the prevention of fraud. It develops understanding of how systems and controls keep organisations reliable and compliant. It provides the control foundation for audit and assurance.",
    "The accounting function, systems and controls are central to reliable reporting and directly underpin the audit and assurance papers."
  ),
  stageModule(
    BT,
    "acca-applied-knowledge-m4",
    AK_LEVEL,
    "BT — Personal effectiveness, communication & ethics",
    "This module develops personal effectiveness, professional communication and the fundamental ethical principles expected of accountants. It covers leadership, motivation, teamworking and the ACCA code applied to the workplace. These professional skills are examined more deeply at Strategic Professional.",
    "Personal effectiveness, communication and ethics are professional behaviours valued by employers and examined throughout the qualification, especially in SBL."
  ),
  stageModule(
    MA,
    "acca-applied-knowledge-m5",
    AK_LEVEL,
    "MA — Cost accounting techniques & cost classification",
    "This module develops cost classification by behaviour and function, and the core costing techniques including materials, labour, overheads and absorption versus marginal costing. It builds the numerical fluency needed for all later performance work. Accuracy and clear layout are emphasised.",
    "Cost classification and costing techniques are the numerical bedrock of management accounting and the direct foundation for the PM and APM papers."
  ),
  stageModule(
    MA,
    "acca-applied-knowledge-m6",
    AK_LEVEL,
    "MA — Budgeting, forecasting & standard costing",
    "This module covers the purposes and preparation of budgets, forecasting techniques and the setting and use of standard costs. It develops the ability to plan, flex budgets and calculate variances. These skills extend directly into Performance Management.",
    "Budgeting, forecasting and standard costing are essential planning and control tools that carry directly into the PM and APM papers."
  ),
  stageModule(
    MA,
    "acca-applied-knowledge-m7",
    AK_LEVEL,
    "MA — Performance measurement & monitoring",
    "This module develops the calculation and interpretation of performance measures, including financial ratios and productivity indicators. It links cost information to the monitoring of performance against targets. Interpretation for management is emphasised.",
    "Performance measurement links cost data to management action and is a stepping stone to the strategic performance focus of APM."
  ),
  stageModule(
    MA,
    "acca-applied-knowledge-m8",
    AK_LEVEL,
    "MA — Short-term decision-making techniques",
    "This module covers cost-volume-profit analysis, relevant costing and limiting-factor decisions. It develops the ability to identify relevant information and recommend short-term decisions. These techniques are extended under risk in Performance Management.",
    "Short-term decision-making techniques teach accountants to support pricing and output decisions, a skill deepened in PM's decision-making under risk."
  ),
  stageModule(
    FA,
    "acca-applied-knowledge-m9",
    AK_LEVEL,
    "FA — Double-entry bookkeeping & accounting equation",
    "This module develops the accounting equation and double-entry bookkeeping, from prime entry through to the ledgers. It builds the mechanical fluency on which all reporting papers depend. Precision with debits and credits is emphasised.",
    "Double-entry is the technical bedrock of all financial reporting; fluency here makes FR, SBR and audit far more approachable."
  ),
  stageModule(
    FA,
    "acca-applied-knowledge-m10",
    AK_LEVEL,
    "FA — Trial balance, adjustments & errors",
    "This module covers the trial balance, control accounts, bank reconciliations, correction of errors and period-end adjustments such as accruals, prepayments and depreciation. It develops accuracy in preparing figures for the financial statements. These adjustments recur in FR.",
    "Adjustments and reconciliations ensure the figures feeding the financial statements are accurate, a discipline essential for FR and beyond."
  ),
  stageModule(
    FA,
    "acca-applied-knowledge-m11",
    AK_LEVEL,
    "FA — Preparing financial statements for sole traders & companies",
    "This module develops the preparation of financial statements for sole traders and companies, including the statement of profit or loss, financial position and cash flows. It applies IAS 1 presentation and basic company accounting. It leads directly into single-entity reporting in FR.",
    "Preparing financial statements is the core output of the accounting process and the immediate foundation for the FR and SBR papers."
  ),
  stageModule(
    FA,
    "acca-applied-knowledge-m12",
    AK_LEVEL,
    "FA — Interpretation of financial statements",
    "This module covers ratio analysis and the interpretation of financial statements, including a simple consolidation. It develops the ability to draw conclusions about performance and position. Interpretation is a major theme in FR and SBR.",
    "Interpreting financial statements turns numbers into insight for users and is a heavily examined skill in FR and SBR."
  ),
];

/* ---- Applied Skills (acca-applied-skills-m1..m22) ------------------------ */

const AS_LEVEL = "applied-skills";

const APPLIED_SKILLS: ModuleCourseware[] = [
  stageModule(
    LW,
    "acca-applied-skills-m1",
    AS_LEVEL,
    "LW — Essential elements of legal systems & business organisations",
    "This module covers the structure and sources of the legal system, the court hierarchy, precedent and the formation of business organisations including agency and partnership. It develops the legal literacy accountants need to identify issues. It sets the framework for company and insolvency law.",
    "A grasp of the legal system and business organisation forms is essential legal literacy for accountants and underpins governance topics in SBL."
  ),
  stageModule(
    LW,
    "acca-applied-skills-m2",
    AS_LEVEL,
    "LW — Contract, employment & tort law",
    "This module develops the law of obligations: formation and breach of contract, remedies, the tort of negligence and employment law. It focuses on applying rules to scenarios and recognising professional liability. These areas are practically important for advisers.",
    "Contract, employment and tort law arise constantly in business and expose accountants to professional liability, making them practically vital."
  ),
  stageModule(
    LW,
    "acca-applied-skills-m3",
    AS_LEVEL,
    "LW — Company law — formation, capital, directors & insolvency",
    "This module covers company formation and constitution, share and loan capital, directors' duties, company administration and insolvency. It develops understanding of corporate personality and the legal duties of those running companies. It connects to governance in Strategic Professional.",
    "Company law governs how companies are formed, financed and run, and directors' duties link directly to corporate governance in SBL."
  ),
  stageModule(
    PM,
    "acca-applied-skills-m4",
    AS_LEVEL,
    "PM — Specialist cost & management accounting techniques",
    "This module develops specialist costing techniques including activity-based, target, lifecycle and throughput accounting. It focuses on selecting and applying the right technique to a business context. These methods feed strategic performance analysis in APM.",
    "Specialist costing techniques let accountants cost and manage products strategically, a capability extended in the APM paper."
  ),
  stageModule(
    PM,
    "acca-applied-skills-m5",
    AS_LEVEL,
    "PM — Decision-making techniques & risk/uncertainty",
    "This module covers relevant costing, limiting factors, linear programming, pricing and decision-making under risk and uncertainty. It develops the ability to evaluate options and recommend action where outcomes are uncertain. Judgement and interpretation are emphasised.",
    "Decision-making under risk equips accountants to advise management when outcomes are uncertain, a core commercial skill built on in APM."
  ),
  stageModule(
    PM,
    "acca-applied-skills-m6",
    AS_LEVEL,
    "PM — Budgeting, standard costing & variance analysis",
    "This module develops budgeting systems, quantitative analysis including learning curves, and advanced variance analysis such as mix and yield. It focuses on calculating and, crucially, interpreting variances for management. Interpretation carries the most marks.",
    "Budgeting and advanced variance analysis turn plans into control information, and interpreting them for management is a key APM theme."
  ),
  stageModule(
    PM,
    "acca-applied-skills-m7",
    AS_LEVEL,
    "PM — Performance analysis & divisional performance",
    "This module covers financial and non-financial performance indicators, divisional performance measures such as ROI and residual income, transfer pricing and performance in not-for-profit contexts. It develops the ability to appraise performance and recommend action. It leads into APM.",
    "Performance and divisional analysis teach accountants to appraise and improve organisational performance, the central focus of the APM paper."
  ),
  stageModule(
    TX,
    "acca-applied-skills-m8",
    AS_LEVEL,
    "TX — UK tax system, income tax & NIC",
    "This module develops the operation of the UK tax system, the income tax computation and national insurance contributions, including employment and trading income. It focuses on accurate computation and the standard proforma. It is the foundation for advanced personal tax planning in ATX.",
    "Income tax and NIC computation is a core practical skill and the foundation for personal tax planning in the ATX paper."
  ),
  stageModule(
    TX,
    "acca-applied-skills-m9",
    AS_LEVEL,
    "TX — Corporation tax & chargeable gains",
    "This module covers the corporation tax computation, capital allowances, losses, groups and chargeable gains for individuals and companies. It develops accurate computation and awareness of reliefs. It leads into group and corporate tax planning in ATX.",
    "Corporation tax and gains computations are central to business tax and lead directly into corporate tax planning in ATX."
  ),
  stageModule(
    TX,
    "acca-applied-skills-m10",
    AS_LEVEL,
    "TX — Inheritance tax, VAT & tax administration",
    "This module develops inheritance tax on lifetime transfers and the death estate, value added tax, and the administration of the tax system including deadlines and penalties. It focuses on applying rules and reliefs accurately. It underpins estate planning and indirect tax in ATX.",
    "IHT, VAT and administration complete the core tax knowledge and provide the basis for estate and indirect tax planning in ATX."
  ),
  stageModule(
    FR,
    "acca-applied-skills-m11",
    AS_LEVEL,
    "FR — Conceptual framework & regulatory framework",
    "This module covers the IASB Conceptual Framework, qualitative characteristics, the regulatory environment and ethical considerations in reporting. It develops the principles that guide the application of accounting standards. It is deepened into judgement in SBR.",
    "The conceptual and regulatory framework guides all standard application and is developed into professional judgement in the SBR paper."
  ),
  stageModule(
    FR,
    "acca-applied-skills-m12",
    AS_LEVEL,
    "FR — Single-entity financial statements (IFRS)",
    "This module develops the preparation of single-entity financial statements applying a range of IFRS Standards, including revenue, leases, assets, provisions and taxation. It focuses on accurate application and presentation. It is the technical core extended in SBR.",
    "Preparing single-entity statements under IFRS is the technical heart of financial reporting and is extended with judgement in SBR."
  ),
  stageModule(
    FR,
    "acca-applied-skills-m13",
    AS_LEVEL,
    "FR — Business combinations & consolidated financial statements",
    "This module covers consolidation: goodwill, non-controlling interests, fair value adjustments, intra-group items and associates. It develops the ability to prepare consolidated statements of financial position and profit or loss. Complex groups are examined in SBR.",
    "Consolidation is a major examinable skill and the direct foundation for the complex group accounting tested in SBR."
  ),
  stageModule(
    FR,
    "acca-applied-skills-m14",
    AS_LEVEL,
    "FR — Interpretation & analysis of financial statements",
    "This module develops ratio analysis, the statement of cash flows and the interpretation of financial statements for different users. It focuses on drawing reasoned conclusions and recognising limitations. Stakeholder-focused interpretation is extended in SBR.",
    "Interpretation and analysis turn financial statements into insight for users and are extended to stakeholder reporting in SBR."
  ),
  stageModule(
    AA,
    "acca-applied-skills-m15",
    AS_LEVEL,
    "AA — Audit framework, ethics & regulation",
    "This module covers assurance engagements, the regulatory environment, corporate governance and professional ethics. It develops understanding of independence, threats and safeguards. It is the foundation for advanced ethics and regulation in AAA.",
    "The audit framework and ethics establish the professional foundation of assurance work, extended into complex situations in AAA."
  ),
  stageModule(
    AA,
    "acca-applied-skills-m16",
    AS_LEVEL,
    "AA — Planning, risk assessment & internal control",
    "This module develops audit planning, the assessment of the risk of material misstatement, materiality and the evaluation of internal control. It focuses on linking risks to audit responses. Complex and group planning is examined in AAA.",
    "Planning and risk assessment drive the whole audit and are developed for complex and group entities in the AAA paper."
  ),
  stageModule(
    AA,
    "acca-applied-skills-m17",
    AS_LEVEL,
    "AA — Audit evidence, procedures & sampling",
    "This module covers financial statement assertions, audit procedures, sampling and substantive testing of key balances. It develops the ability to design specific, purpose-driven procedures. This is deepened for complex items in AAA.",
    "Designing audit evidence and procedures is the practical core of the audit and is extended to complex balances in AAA."
  ),
  stageModule(
    AA,
    "acca-applied-skills-m18",
    AS_LEVEL,
    "AA — Review, reports & assurance engagements",
    "This module develops going concern, subsequent events, written representations, the auditor's report and other assurance engagements. It focuses on forming and expressing the audit opinion. Reporting judgement is extended in AAA.",
    "Review and reporting produce the audit's conclusion, and the reporting judgement involved is developed further in AAA."
  ),
  stageModule(
    FM,
    "acca-applied-skills-m19",
    AS_LEVEL,
    "FM — Financial management function & environment",
    "This module covers the objectives of financial management, agency theory, the economic and regulatory environment and financial markets. It develops understanding of the finance manager's role and objectives. It frames the advanced strategy of AFM.",
    "Understanding the financial management function and environment frames every corporate finance decision and leads into the AFM paper."
  ),
  stageModule(
    FM,
    "acca-applied-skills-m20",
    AS_LEVEL,
    "FM — Working capital management",
    "This module develops the working capital cycle, inventory (EOQ), receivables and payables management and cash models. It focuses on balancing liquidity and profitability. Treasury strategy is extended in AFM.",
    "Working capital management protects liquidity and value, and its treasury dimension is extended in the AFM paper."
  ),
  stageModule(
    FM,
    "acca-applied-skills-m21",
    AS_LEVEL,
    "FM — Investment appraisal & business finance",
    "This module covers relevant cash flows, NPV and IRR, the treatment of inflation and tax, sources of finance and the cost of capital. It develops the ability to appraise investments and evaluate financing. It is deepened into APV and real options in AFM.",
    "Investment appraisal and business finance are core corporate finance skills, extended into advanced appraisal and financing in AFM."
  ),
  stageModule(
    FM,
    "acca-applied-skills-m22",
    AS_LEVEL,
    "FM — Business valuations, risk management & FX/interest risk",
    "This module develops business and share valuation, market efficiency, and the management of foreign exchange and interest rate risk. It focuses on selecting appropriate valuation methods and hedges. These are extended into advanced treasury in AFM.",
    "Valuation and risk management are essential for financing and treasury decisions, and are developed into advanced hedging in AFM."
  ),
];

/* ---- Strategic Professional (acca-strategic-professional-m1..m15) -------- */

const SP_LEVEL = "strategic-professional";

const STRATEGIC_PROFESSIONAL: ModuleCourseware[] = [
  stageModule(
    SBL,
    "acca-strategic-professional-m1",
    SP_LEVEL,
    "SBL — Leadership, governance & stakeholder management (Essential)",
    "This module develops leadership, corporate governance, board structures and stakeholder management within the integrated SBL case study. It focuses on applying governance and stakeholder frameworks to a realistic organisation. Professional skills are marked throughout.",
    "Leadership, governance and stakeholder management are central to the senior leader role that SBL simulates and that employers value."
  ),
  stageModule(
    SBL,
    "acca-strategic-professional-m2",
    SP_LEVEL,
    "SBL — Strategy, innovation, data & technology (Essential)",
    "This module covers strategic analysis and choice, innovation, change management and the role of data and technology in the SBL case. It develops the ability to analyse strategic position and recommend action. Professional skills are integrated throughout.",
    "Strategy, innovation and technology drive organisational success and are core to the integrated leadership judgement examined in SBL."
  ),
  stageModule(
    SBL,
    "acca-strategic-professional-m3",
    SP_LEVEL,
    "SBL — Risk, control, finance & professional skills (Essential)",
    "This module develops risk assessment, internal control, financial analysis and the professional skills explicitly marked in SBL. It focuses on integrating technical and professional judgement in the case study. Communication and evaluation are emphasised.",
    "Risk, control, finance and professional skills complete the integrated leadership toolkit and are the skills most rewarded in SBL."
  ),
  stageModule(
    SBR,
    "acca-strategic-professional-m4",
    SP_LEVEL,
    "SBR — Financial reporting framework & reporting performance (Essential)",
    "This module covers the Conceptual Framework, ethics and the reporting of financial performance applying IFRS with professional judgement. It focuses on principle-led application to complex transactions. Judgement and discussion are heavily rewarded.",
    "Applying the framework and reporting performance with judgement is the essence of senior reporting and the core of the SBR paper."
  ),
  stageModule(
    SBR,
    "acca-strategic-professional-m5",
    SP_LEVEL,
    "SBR — Group reporting & changes in group structure (Essential)",
    "This module develops complex consolidations, step acquisitions, disposals, foreign subsidiaries and joint arrangements. It focuses on applying group accounting with judgement to changing structures. It is a major examinable area of SBR.",
    "Complex group reporting is a defining skill of SBR and a hallmark of senior financial reporting expertise."
  ),
  stageModule(
    SBR,
    "acca-strategic-professional-m6",
    SP_LEVEL,
    "SBR — Current issues & ethical/professional issues (Essential)",
    "This module covers current developments in reporting, sustainability and non-financial reporting, and the ethical and professional issues facing the reporting accountant. It develops the ability to form and justify reasoned views. Discussion marks are significant.",
    "Awareness of current issues and ethics distinguishes a professional reporter and is explicitly examined in SBR."
  ),
  stageModule(
    AFM,
    "acca-strategic-professional-m7",
    SP_LEVEL,
    "AFM — Advanced investment appraisal & cost of capital (Option)",
    "This module develops free cash flow valuation, adjusted present value, real options and advanced cost of capital. It focuses on appraising complex investments and giving reasoned advice. It is a core area of the AFM option.",
    "Advanced investment appraisal and cost of capital are central to senior financial advice and a key part of the AFM option."
  ),
  stageModule(
    AFM,
    "acca-strategic-professional-m8",
    SP_LEVEL,
    "AFM — Acquisitions, reconstructions & treasury/FX risk (Option)",
    "This module covers business valuation, acquisitions and mergers, corporate reconstruction and advanced hedging of currency and interest rate risk. It develops the ability to structure and advise on major transactions. It completes the AFM syllabus.",
    "Acquisitions, reconstructions and treasury risk management are the strategic finance decisions that define the senior adviser role in AFM."
  ),
  stageModule(
    APM,
    "acca-strategic-professional-m9",
    SP_LEVEL,
    "APM — Strategic performance management systems (Option)",
    "This module develops the strategic planning and control environment and the design of performance management systems, including information needs and analytics. It focuses on evaluating whether systems fit strategy. It is a core area of the APM option.",
    "Designing performance management systems that fit strategy is a strategic, board-level skill examined in the APM option."
  ),
  stageModule(
    APM,
    "acca-strategic-professional-m10",
    SP_LEVEL,
    "APM — Performance evaluation, change & HR issues (Option)",
    "This module covers strategic performance measurement frameworks, divisional performance, corporate failure prediction, reward and behavioural issues. It focuses on critically evaluating measures and their consequences. It completes the APM syllabus.",
    "Evaluating performance, reward and behaviour ensures measurement drives the right actions, the critical-evaluation focus of APM."
  ),
  stageModule(
    ATX,
    "acca-strategic-professional-m11",
    SP_LEVEL,
    "ATX — Advanced corporation/personal tax planning (Option)",
    "This module develops advanced income tax, corporation tax, capital gains and inheritance tax planning, combining taxes to give reasoned advice. It focuses on tax-efficient planning within the law. It is a core area of the ATX option.",
    "Advanced personal and corporate tax planning is the advisory skill at the heart of the ATX option and of tax practice."
  ),
  stageModule(
    ATX,
    "acca-strategic-professional-m12",
    SP_LEVEL,
    "ATX — International tax & tax of business combinations (Option)",
    "This module covers overseas aspects of tax, residence and domicile, double taxation relief, transfer pricing and the tax of groups and business combinations. It develops advice on cross-border and transactional tax. It completes the ATX syllabus.",
    "International and transactional tax planning is increasingly important for advisers and is a key element of the ATX option."
  ),
  stageModule(
    AAA,
    "acca-strategic-professional-m13",
    SP_LEVEL,
    "AAA — Advanced audit planning, evidence & reporting (Option)",
    "This module develops risk assessment, planning, evidence and reporting for complex entities and groups, including auditing estimates and using experts. It focuses on applying professional judgement and scepticism. It is a core area of the AAA option.",
    "Advanced planning, evidence and reporting for complex audits is the judgement of an audit manager or partner, examined in AAA."
  ),
  stageModule(
    AAA,
    "acca-strategic-professional-m14",
    SP_LEVEL,
    "AAA — Other assignments, current issues & ethics (Option)",
    "This module covers other assurance and non-audit engagements, prospective financial information, forensic and sustainability assurance, ethics and current developments. It develops advice across a range of engagements. It completes the AAA syllabus.",
    "Other assignments, ethics and current issues broaden the assurance professional's expertise and are examined in the AAA option."
  ),
  stageModule(
    EPSM,
    "acca-strategic-professional-m15",
    SP_LEVEL,
    "EPSM — Ethics & Professional Skills Module (required)",
    "This module develops ethical decision-making and the professional skills of communication, commercial acumen, analysis, scepticism, innovation and leadership through interactive scenarios. It should be completed before or alongside the Strategic Professional exams, ideally before SBL. It operationalises the skills examined at this level.",
    "The Ethics and Professional Skills Module builds the behaviours examined across Strategic Professional and demanded by employers, and best supports performance in SBL."
  ),
];

export const ACCA_STAGE_COURSEWARE: ModuleCourseware[] = [
  ...APPLIED_KNOWLEDGE,
  ...APPLIED_SKILLS,
  ...STRATEGIC_PROFESSIONAL,
];
