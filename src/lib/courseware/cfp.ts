import type { CoursewareBundle } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * CFP (Certified Financial Planner) courseware for the single certification exam.
 * Module ids follow `cfp-full-m${i+1}` and mirror exams.ts topic order for the
 * "full" level (the CFP Certification Exam).
 */
export const CFP_COURSEWARE: CoursewareBundle[] = [
  {
    examId: "cfp",
    levelId: "full",
    modules: [
      courseware({
        moduleId: "cfp-full-m1",
        examId: "cfp",
        levelId: "full",
        title: "Professional Conduct & Regulation / CFP Board Code & Standards",
        examFormat:
          "CFP® exam: ~170 multiple-choice questions across two 3-hour sessions, including stand-alone items and case-based sets. Ethics and the fiduciary standard are heavily and repeatedly tested.",
        estimatedStudyHours: 26,
        overview:
          "This module covers the CFP Board's Code of Ethics and Standards of Conduct, the fiduciary duty that applies at all times when providing financial advice, the practice standards for the financial planning process, and the regulatory environment for financial planners.",
        whyItMatters:
          "The fiduciary standard is the defining feature of the CFP® designation and a dominant exam theme. Conduct and disclosure questions appear throughout the exam and often decide close outcomes; they also govern real client relationships.",
        learningOutcomes: [
          "State the CFP Board's Code of Ethics and the fiduciary duty's three components.",
          "Apply the duties of loyalty, care, and following client instructions.",
          "Identify when the practice standards for the financial planning process apply.",
          "Explain disclosure and documentation requirements for material conflicts.",
          "Describe the regulatory framework governing investment advisers and planners.",
          "Recognise prohibited conduct and the consequences of violations.",
          "Evaluate a scenario for compliance with the Standards of Conduct.",
        ],
        syllabusAreas: [
          area(
            "Code of Ethics & fiduciary duty",
            [
              "Six principles of the Code of Ethics",
              "Fiduciary duty: loyalty, care, follow client instructions",
              "Duties owed to clients at all times",
            ],
            "35–40%"
          ),
          area(
            "Standards of Conduct & practice standards",
            [
              "Duties when providing financial advice vs financial planning",
              "Practice standards for the financial planning process",
              "Disclosure, conflicts, and documentation",
            ],
            "35–40%"
          ),
          area(
            "Regulatory environment",
            [
              "Investment Advisers Act and fiduciary regulation",
              "Registration, licensing, and oversight bodies",
              "Prohibited conduct and discipline",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m1-l1",
            "The Code of Ethics and its six principles",
            45,
            ["Recall the six ethics principles", "Relate principles to conduct"],
            [
              "The Code requires integrity, competence, diligence, confidentiality, professionalism, and putting the client first.",
              "Principles are broad commitments operationalised by the Standards of Conduct.",
              "Acting with honesty and in the client's best interest underpins every principle.",
              "Competence includes knowing one's limits and referring when appropriate.",
            ],
            [
              "Which principle requires acting within one's competence?",
              "How do the principles relate to the Standards of Conduct?",
            ]
          ),
          lesson(
            "cfp-full-m1-l2",
            "The fiduciary duty",
            55,
            ["Explain the three fiduciary components", "Apply loyalty and care"],
            [
              "CFP® professionals owe a fiduciary duty at all times when providing financial advice.",
              "Duty of Loyalty: place the client's interests first; avoid or manage and disclose conflicts.",
              "Duty of Care: act with the care, skill, prudence, and diligence a prudent professional would.",
              "Duty to Follow Client Instructions: comply with lawful, reasonable directions.",
            ],
            [
              "Name the three components of the CFP fiduciary duty.",
              "When does the fiduciary duty apply?",
            ],
            "A planner recommends a proprietary fund paying higher commissions than a comparable lower-cost fund. Without demonstrating it is in the client's best interest and disclosing the conflict, this breaches the Duty of Loyalty."
          ),
          lesson(
            "cfp-full-m1-l3",
            "Financial advice vs financial planning",
            50,
            ["Distinguish advice from planning", "Trigger the practice standards"],
            [
              "Providing 'financial advice' triggers the fiduciary duty and disclosure obligations.",
              "When the engagement constitutes 'financial planning', the full practice standards apply.",
              "Integration factors determine whether an engagement rises to financial planning.",
              "Scope, compensation, and conflicts must be disclosed before or at engagement.",
            ],
            [
              "What triggers the full financial planning practice standards?",
              "How does financial advice differ from financial planning?",
            ]
          ),
          lesson(
            "cfp-full-m1-l4",
            "Disclosure, conflicts, and documentation",
            45,
            ["Disclose conflicts adequately", "Document appropriately"],
            [
              "Material conflicts must be disclosed clearly enough for the client to give informed consent.",
              "Disclosure alone does not satisfy loyalty if the recommendation is not in the client's interest.",
              "Compensation methods (fee-only, fee-based, commission) must be described accurately.",
              "Documentation supports accountability and defensibility.",
            ],
            [
              "Does disclosing a conflict cure a recommendation that harms the client?",
              "What must conflict disclosure enable the client to do?",
            ]
          ),
          lesson(
            "cfp-full-m1-l5",
            "Regulatory environment and prohibited conduct",
            50,
            ["Describe the regulatory framework", "Recognise prohibited conduct"],
            [
              "Investment advisers are regulated under the Investment Advisers Act (SEC or state).",
              "Prohibited conduct includes fraud, misrepresentation, and commingling client funds.",
              "CFP Board can discipline members for violations, up to revocation.",
              "Planners must follow applicable law and the stricter CFP standards.",
            ],
            [
              "Who regulates investment advisers?",
              "Give two examples of prohibited conduct.",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Fiduciary triad: Loyalty + Care + Follow Client Instructions.",
          "Conflict handling: avoid → manage → fully disclose for informed consent.",
          "Advice vs planning: does the engagement meet the integration/scope factors?",
          "Stricter-rule principle: follow the more demanding of law or CFP standards.",
        ],
        commonTraps: [
          "Believing disclosure alone satisfies the duty of loyalty.",
          "Confusing 'financial advice' with full 'financial planning' obligations.",
          "Assuming the fiduciary duty applies only for planning engagements.",
          "Mislabeling compensation (e.g. calling fee-based 'fee-only').",
        ],
        examTechnique: [
          "Ask first whether the fiduciary duty applies, then which duty is at issue.",
          "For conflict questions, check both disclosure and whether the advice serves the client.",
          "Distinguish advice vs planning to know which standards apply.",
        ],
        practicePlan: [
          "Week 1: memorise the Code principles and fiduciary components.",
          "Week 2: work conduct vignettes and disclosure scenarios.",
          "Week 3: regulatory-framework MCQs and mixed case sets.",
        ],
        furtherReading: [
          "CFP Board — Code of Ethics and Standards of Conduct.",
          "CFP Board — Practice Standards for the Financial Planning Process.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m2",
        examId: "cfp",
        levelId: "full",
        title: "Financial planning process & client engagement",
        examFormat:
          "MCQs and case items on the seven-step planning process, data gathering, and recommendations.",
        estimatedStudyHours: 24,
        overview:
          "This module teaches the CFP Board's seven-step financial planning process, from understanding the client's circumstances to implementing and monitoring recommendations. It emphasises goal setting, data gathering, analysis, and communication.",
        whyItMatters:
          "The planning process is the backbone that integrates every other topic. Case questions require applying the correct step and producing suitable, goal-aligned recommendations.",
        learningOutcomes: [
          "List and apply the seven steps of the financial planning process.",
          "Gather and analyse qualitative and quantitative client data.",
          "Identify and prioritise client goals and constraints.",
          "Develop and evaluate alternative recommendations.",
          "Communicate, implement, and monitor a plan.",
          "Integrate multiple planning areas into a coherent strategy.",
        ],
        syllabusAreas: [
          area(
            "Engagement and data gathering",
            [
              "Understanding the client's circumstances",
              "Qualitative and quantitative data",
              "Identifying and selecting goals",
            ],
            "30–35%"
          ),
          area(
            "Analysis and recommendations",
            [
              "Analysing the current course of action",
              "Developing and presenting recommendations",
              "Alternatives and trade-offs",
            ],
            "35–40%"
          ),
          area(
            "Implementation and monitoring",
            [
              "Implementation responsibilities",
              "Monitoring and updating",
              "Integration across planning areas",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m2-l1",
            "The seven-step process",
            50,
            ["Recall the seven steps", "Match a task to its step"],
            [
              "Steps: understand circumstances; identify/select goals; analyse current course; develop recommendations; present; implement; monitor and update.",
              "Each step has defined planner responsibilities.",
              "The process is iterative — new information can reopen earlier steps.",
              "Exam cases ask which step a described action belongs to.",
            ],
            [
              "What is the first step of the financial planning process?",
              "Which step involves presenting recommendations?",
            ]
          ),
          lesson(
            "cfp-full-m2-l2",
            "Data gathering and goal setting",
            50,
            ["Gather client data", "Prioritise goals"],
            [
              "Collect quantitative (income, assets, liabilities) and qualitative (values, risk tolerance) data.",
              "Clarify, quantify, and prioritise goals with the client.",
              "Assumptions (inflation, returns, longevity) must be reasonable and documented.",
              "Incomplete data limits the reliability of recommendations.",
            ],
            [
              "Why gather qualitative as well as quantitative data?",
              "How should conflicting client goals be handled?",
            ]
          ),
          lesson(
            "cfp-full-m2-l3",
            "Analysing the current course of action",
            45,
            ["Analyse current position", "Identify gaps"],
            [
              "Assess whether current strategies can meet stated goals.",
              "Identify strengths, weaknesses, and gaps across planning areas.",
              "Use financial statements and ratios to quantify the position.",
              "Frame the analysis around the client's prioritised goals.",
            ],
            [
              "What is the purpose of analysing the current course of action?",
              "How do ratios support the analysis step?",
            ]
          ),
          lesson(
            "cfp-full-m2-l4",
            "Developing and presenting recommendations",
            50,
            ["Develop alternatives", "Present clearly"],
            [
              "Generate alternatives and evaluate trade-offs against goals and constraints.",
              "Recommendations must be suitable, specific, and prioritised.",
              "Present in plain language with rationale and expected impact.",
              "Disclose assumptions, conflicts, and limitations.",
            ],
            [
              "What makes a recommendation suitable and actionable?",
              "Why present alternatives and trade-offs?",
            ]
          ),
          lesson(
            "cfp-full-m2-l5",
            "Implementation and monitoring",
            45,
            ["Assign implementation roles", "Design monitoring"],
            [
              "Clarify who is responsible for each implementation action and by when.",
              "Monitor progress and update the plan as circumstances change.",
              "Life events (job change, birth, inheritance) trigger reviews.",
              "Ongoing monitoring is part of the fiduciary relationship.",
            ],
            [
              "What should implementation responsibilities specify?",
              "What events should trigger a plan review?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Seven steps: understand → identify goals → analyse → develop → present → implement → monitor.",
          "SMART-style goals: specific, measurable, time-bound, prioritised.",
          "Financial position ratios: liquidity, savings, debt, and solvency ratios.",
          "Assumption discipline: reasonable, documented, and disclosed.",
        ],
        commonTraps: [
          "Jumping to recommendations before understanding circumstances and goals.",
          "Using unreasonable or undisclosed assumptions.",
          "Presenting a single option without trade-offs.",
          "Treating the plan as static rather than monitored.",
        ],
        examTechnique: [
          "For process questions, name the exact step before answering.",
          "Check that recommendations align with prioritised goals.",
          "Watch for cases where earlier steps must be revisited.",
        ],
        practicePlan: [
          "Week 1: master the seven steps and their responsibilities.",
          "Week 2: data-gathering and analysis case items.",
          "Week 3: recommendation and monitoring case sets.",
        ],
        furtherReading: [
          "CFP Board — Practice Standards for the Financial Planning Process.",
          "CFP principal knowledge topics — General Principles.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m3",
        examId: "cfp",
        levelId: "full",
        title: "Cash flow, education funding & debt management",
        examFormat:
          "MCQs and case items with time-value-of-money computations for budgeting, funding, and debt.",
        estimatedStudyHours: 24,
        overview:
          "This module covers cash-flow and budgeting analysis, emergency-fund and debt-management strategies, and education funding, with heavy use of time-value-of-money (TVM) computations.",
        whyItMatters:
          "Cash-flow management is the foundation of every plan, and TVM computations appear across the entire exam. Education funding is a classic, testable case scenario.",
        learningOutcomes: [
          "Prepare and interpret personal cash-flow and net-worth statements.",
          "Apply financial ratios to assess financial health.",
          "Perform time-value-of-money calculations for goals and loans.",
          "Design emergency-fund and debt-repayment strategies.",
          "Evaluate education funding vehicles and compute funding needs.",
          "Advise on debt management, refinancing, and credit.",
        ],
        syllabusAreas: [
          area(
            "Cash flow and net worth",
            [
              "Cash-flow and net-worth statements",
              "Financial ratios and benchmarks",
              "Budgeting and emergency funds",
            ],
            "30–35%"
          ),
          area(
            "Time value of money",
            [
              "PV/FV, annuities, and serial payments",
              "Loan amortisation and effective rates",
              "Goal funding calculations",
            ],
            "35–40%"
          ),
          area(
            "Education funding and debt",
            [
              "529 plans, Coverdell, UTMA/UGMA",
              "Financial aid basics",
              "Debt-repayment and refinancing strategy",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m3-l1",
            "Cash-flow, net worth, and ratios",
            50,
            ["Build financial statements", "Apply ratios"],
            [
              "The cash-flow statement tracks inflows and outflows; net worth = assets − liabilities.",
              "Key ratios: emergency-fund (months of expenses), savings rate, and debt-to-income.",
              "Ratios benchmark financial health and flag priorities.",
              "Positive net cash flow funds goals and debt reduction.",
            ],
            [
              "How is net worth calculated?",
              "What does the debt-to-income ratio indicate?",
            ]
          ),
          lesson(
            "cfp-full-m3-l2",
            "Time value of money essentials",
            55,
            ["Compute PV/FV", "Handle annuities"],
            [
              "Master PV, FV, PMT, N, and I/Y on a financial calculator.",
              "Distinguish ordinary annuities from annuities due (timing of payments).",
              "Serial (inflation-adjusted) payments use an inflation-adjusted rate.",
              "Set the calculator to the correct compounding periods.",
            ],
            [
              "How does an annuity due differ from an ordinary annuity?",
              "When do you use an inflation-adjusted discount rate?",
            ],
            "To fund $200,000 in 10 years at 6%, the required lump sum today is PV = 200,000 ÷ 1.06^10 ≈ $111,679; a level annual deposit uses the sinking-fund (FV annuity) formula instead."
          ),
          lesson(
            "cfp-full-m3-l3",
            "Loan amortisation and debt strategy",
            50,
            ["Amortise loans", "Compare repayment strategies"],
            [
              "Amortising loans split each payment between interest and principal.",
              "Effective annual rate exceeds the nominal rate with intra-year compounding.",
              "Avalanche (highest-rate first) minimises interest; snowball (smallest balance) aids motivation.",
              "Refinancing is worthwhile when rate savings exceed costs over the horizon.",
            ],
            [
              "Why does the principal portion of a payment grow over time?",
              "When is refinancing financially justified?",
            ]
          ),
          lesson(
            "cfp-full-m3-l4",
            "Education funding vehicles",
            50,
            ["Compare education accounts", "Compute funding needs"],
            [
              "529 plans grow tax-free for qualified education expenses; high contribution capacity.",
              "Coverdell ESAs have lower limits but broader K–12 flexibility (rules vary).",
              "UTMA/UGMA custodial accounts transfer to the child at majority and are the child's asset.",
              "Funding need = future cost of education discounted/accumulated via TVM.",
            ],
            [
              "What is the main tax benefit of a 529 plan?",
              "How does account ownership affect financial aid?",
            ]
          ),
          lesson(
            "cfp-full-m3-l5",
            "Emergency funds and credit management",
            40,
            ["Size emergency funds", "Manage credit"],
            [
              "Emergency funds typically cover 3–6 months of essential expenses (more if income is volatile).",
              "Credit scores affect borrowing cost; on-time payment and low utilisation help.",
              "High-cost revolving debt should be prioritised for repayment.",
              "Liquidity buffers prevent forced selling of investments.",
            ],
            [
              "How large should an emergency fund be, and why does it vary?",
              "Which debts should generally be repaid first?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Net worth = assets − liabilities; savings rate = savings ÷ gross income.",
          "FV = PV × (1 + r)^n; PV = FV ÷ (1 + r)^n.",
          "Annuity due = ordinary annuity × (1 + r).",
          "EAR = (1 + nominal/m)^m − 1.",
        ],
        commonTraps: [
          "Forgetting to switch the calculator between ordinary annuity and annuity due.",
          "Using nominal instead of effective rates.",
          "Ignoring how account ownership affects financial aid.",
          "Mismatching compounding periods and payment frequency.",
        ],
        examTechnique: [
          "Write out known TVM variables before computing.",
          "Confirm payment timing (BGN/END) for annuities.",
          "For funding cases, separate accumulation from distribution phases.",
        ],
        practicePlan: [
          "Week 1: statements, ratios, and calculator fluency.",
          "Week 2: TVM drills including serial payments and amortisation.",
          "Week 3: education-funding and debt case sets.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — General Principles and Education Planning.",
          "IRS Publication 970 — Tax Benefits for Education.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m4",
        examId: "cfp",
        levelId: "full",
        title: "Risk management & insurance planning",
        examFormat:
          "MCQs and case items on risk identification, insurance products, needs analysis, and policy features.",
        estimatedStudyHours: 24,
        overview:
          "This module covers risk management principles and the major insurance lines — life, health, disability, long-term care, property/casualty, and liability — including needs analysis and policy selection.",
        whyItMatters:
          "Protecting the plan against catastrophic risk is a core planner responsibility. Insurance needs analysis and product features are consistently tested and central to client outcomes.",
        learningOutcomes: [
          "Apply the risk-management process: identify, evaluate, treat, monitor.",
          "Choose among risk-handling techniques (avoid, reduce, retain, transfer).",
          "Perform a life-insurance needs analysis.",
          "Compare life, disability, health, and long-term-care products.",
          "Evaluate property, casualty, and liability coverage.",
          "Interpret key policy provisions and riders.",
        ],
        syllabusAreas: [
          area(
            "Risk management principles",
            [
              "Risk identification and measurement",
              "Avoid/reduce/retain/transfer",
              "Insurance as risk transfer",
            ],
            "25–30%"
          ),
          area(
            "Life, disability, health, and LTC",
            [
              "Life insurance types and needs analysis",
              "Disability income and long-term care",
              "Health insurance and Medicare basics",
            ],
            "40–45%"
          ),
          area(
            "Property, casualty, and liability",
            [
              "Homeowners and auto coverage",
              "Umbrella/liability protection",
              "Policy provisions and riders",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m4-l1",
            "Risk-management principles",
            45,
            ["Apply the process", "Select handling techniques"],
            [
              "Process: identify exposures, evaluate frequency/severity, select technique, monitor.",
              "High-severity/low-frequency risks are best transferred via insurance.",
              "Low-severity risks can be retained (e.g. via deductibles).",
              "Avoidance and reduction lower exposure before transfer.",
            ],
            [
              "Which risks are best transferred to an insurer?",
              "When is risk retention appropriate?",
            ]
          ),
          lesson(
            "cfp-full-m4-l2",
            "Life insurance and needs analysis",
            55,
            ["Compare life products", "Compute needs"],
            [
              "Term is pure protection; whole/universal add cash value and permanence.",
              "Needs analysis: capital needed = income replacement + debts + goals − existing resources.",
              "Human-life-value and needs-based approaches estimate coverage differently.",
              "Cash-value policies involve costs, loans, and tax nuances.",
            ],
            [
              "How does term differ from permanent life insurance?",
              "What components drive a needs-based coverage estimate?",
            ],
            "A client needs to replace $60,000/year for 20 years, cover $300,000 of debt, and fund $200,000 of goals, with $250,000 of existing assets. Capitalising and netting resources gives the target coverage under the needs approach."
          ),
          lesson(
            "cfp-full-m4-l3",
            "Disability and long-term care",
            50,
            ["Evaluate DI policies", "Assess LTC needs"],
            [
              "Disability income replaces a portion of earnings; definition of disability (own vs any occupation) is critical.",
              "Elimination periods and benefit periods shape cost and protection.",
              "Long-term care covers custodial needs not paid by health insurance/Medicare.",
              "Benefit triggers (ADLs, cognitive impairment) determine LTC payouts.",
            ],
            [
              "Why does the definition of disability matter so much?",
              "What triggers long-term-care benefits?",
            ]
          ),
          lesson(
            "cfp-full-m4-l4",
            "Health insurance and Medicare basics",
            45,
            ["Compare health plans", "Outline Medicare parts"],
            [
              "Plan types (HMO, PPO, HDHP) trade network flexibility for cost.",
              "HDHPs pair with HSAs offering triple tax advantages.",
              "Medicare Parts A/B/C/D cover hospital, medical, advantage, and drug needs.",
              "Coordination of benefits avoids duplicate coverage.",
            ],
            [
              "What is the tax advantage of an HSA with an HDHP?",
              "What does each Medicare part cover?",
            ]
          ),
          lesson(
            "cfp-full-m4-l5",
            "Property, casualty, and liability",
            45,
            ["Evaluate P&C coverage", "Interpret provisions"],
            [
              "Homeowners policies cover dwelling, property, and liability with named or open perils.",
              "Auto coverage includes liability, collision, comprehensive, and uninsured motorist.",
              "Umbrella policies extend liability limits cost-effectively.",
              "Provisions: deductibles, coinsurance, exclusions, and coverage limits.",
            ],
            [
              "Why recommend an umbrella liability policy?",
              "How does coinsurance affect a property claim?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Risk map: severity × frequency → avoid/reduce/retain/transfer.",
          "Life needs = income replacement + debts + goals − existing resources.",
          "Coinsurance recovery = (carried ÷ required) × loss (property).",
          "HSA: triple tax advantage (deductible in, tax-free growth, tax-free qualified out).",
        ],
        commonTraps: [
          "Recommending permanent insurance when term meets the need at lower cost.",
          "Overlooking the own-occupation vs any-occupation DI distinction.",
          "Confusing Medicare parts and coverage.",
          "Ignoring coinsurance penalties for underinsured property.",
        ],
        examTechnique: [
          "For coverage questions, run the needs analysis before choosing a product.",
          "Read policy-definition clauses carefully — they drive answers.",
          "Match the risk-handling technique to frequency and severity.",
        ],
        practicePlan: [
          "Week 1: risk principles and life-insurance needs analysis.",
          "Week 2: disability, LTC, and health/Medicare.",
          "Week 3: property/casualty and mixed case items.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — Risk Management and Insurance Planning.",
          "Insurance policy sample contracts and Medicare.gov basics.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m5",
        examId: "cfp",
        levelId: "full",
        title: "Investment products, portfolio theory & asset allocation",
        examFormat:
          "MCQs and case items on securities, portfolio theory, risk/return, and allocation.",
        estimatedStudyHours: 26,
        overview:
          "This module covers investment vehicles, modern portfolio theory, risk and return measures, asset allocation, and portfolio management concepts applied to individual clients.",
        whyItMatters:
          "Investment planning is a large, quantitative exam domain and central to client wealth. Mastery of risk/return, diversification, and allocation is essential.",
        learningOutcomes: [
          "Describe major investment vehicles and their risk/return features.",
          "Apply modern portfolio theory, the efficient frontier, and CAPM.",
          "Compute and interpret risk and return measures.",
          "Design asset allocation aligned to goals and risk tolerance.",
          "Evaluate active vs passive and diversification strategies.",
          "Assess taxation and costs' impact on investment returns.",
        ],
        syllabusAreas: [
          area(
            "Investment vehicles",
            [
              "Equities, fixed income, funds, and alternatives",
              "Product features, risks, and costs",
              "Bond pricing and duration basics",
            ],
            "30–35%"
          ),
          area(
            "Portfolio theory and risk/return",
            [
              "Diversification and the efficient frontier",
              "CAPM, beta, and required return",
              "Risk-adjusted measures",
            ],
            "35–40%"
          ),
          area(
            "Asset allocation and management",
            [
              "Strategic vs tactical allocation",
              "Rebalancing and lifecycle investing",
              "After-tax, after-cost returns",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m5-l1",
            "Investment vehicles and their features",
            50,
            ["Compare vehicles", "Assess costs and risks"],
            [
              "Equities offer growth with higher volatility; bonds provide income and rate sensitivity.",
              "Mutual funds and ETFs give diversification; ETFs are typically lower-cost and tax-efficient.",
              "Bond prices move inversely with rates; duration measures sensitivity.",
              "Costs and turnover erode net returns.",
            ],
            [
              "Why do bond prices fall when interest rates rise?",
              "What advantages do ETFs offer over mutual funds?",
            ]
          ),
          lesson(
            "cfp-full-m5-l2",
            "Portfolio theory and diversification",
            55,
            ["Explain the efficient frontier", "Apply diversification"],
            [
              "Diversification reduces unsystematic risk; systematic risk remains.",
              "The efficient frontier shows the best return per unit of risk.",
              "Correlation below 1 drives diversification benefits.",
              "The optimal portfolio combines the risky tangency portfolio with the risk-free asset.",
            ],
            [
              "Which type of risk does diversification reduce?",
              "Why does correlation drive diversification benefits?",
            ]
          ),
          lesson(
            "cfp-full-m5-l3",
            "CAPM and risk-adjusted measures",
            50,
            ["Apply CAPM", "Compute risk-adjusted returns"],
            [
              "CAPM: required return = risk-free + beta × (market return − risk-free).",
              "Beta measures systematic risk relative to the market.",
              "Sharpe (total risk), Treynor (systematic risk), and alpha assess performance.",
              "Standard deviation and beta capture different risk dimensions.",
            ],
            [
              "What does beta measure in CAPM?",
              "When is Treynor more appropriate than Sharpe?",
            ],
            "With risk-free 3%, market return 9%, and beta 1.2, CAPM required return = 3% + 1.2 × (9% − 3%) = 10.2%. A realised 12% return implies positive alpha of about 1.8%."
          ),
          lesson(
            "cfp-full-m5-l4",
            "Asset allocation and rebalancing",
            50,
            ["Design allocation", "Plan rebalancing"],
            [
              "Strategic allocation reflects long-term goals and risk tolerance; tactical tilts are short-term.",
              "Lifecycle investing reduces risk as the horizon shortens.",
              "Rebalancing restores target weights and enforces buy-low/sell-high discipline.",
              "Risk tolerance combines ability and willingness to take risk.",
            ],
            [
              "How does strategic differ from tactical allocation?",
              "What discipline does rebalancing enforce?",
            ]
          ),
          lesson(
            "cfp-full-m5-l5",
            "Taxes, costs, and net returns",
            45,
            ["Compute after-tax returns", "Locate assets tax-efficiently"],
            [
              "After-tax return = pre-tax return × (1 − tax rate) on taxable income/gains.",
              "Asset location places tax-inefficient assets in tax-advantaged accounts.",
              "Tax-loss harvesting can offset gains.",
              "Costs and taxes compound, materially reducing long-run wealth.",
            ],
            [
              "What is asset location and why does it matter?",
              "How does tax-loss harvesting help?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "CAPM: E(R) = Rf + β(E(Rm) − Rf).",
          "Sharpe = (Rp − Rf) ÷ σ; Treynor = (Rp − Rf) ÷ β.",
          "After-tax return = pre-tax × (1 − tax rate).",
          "Duration ≈ % price change for a 1% rate move.",
        ],
        commonTraps: [
          "Using standard deviation when systematic risk (beta) is relevant, or vice versa.",
          "Ignoring taxes and costs in return comparisons.",
          "Confusing strategic and tactical allocation.",
          "Assuming diversification removes systematic risk.",
        ],
        examTechnique: [
          "Match the risk measure (Sharpe vs Treynor) to the portfolio's diversification.",
          "Always convert to after-tax, after-cost terms when the case requires.",
          "Anchor allocation answers to the client's risk tolerance and horizon.",
        ],
        practicePlan: [
          "Week 1: vehicles, bond pricing, and duration.",
          "Week 2: portfolio theory, CAPM, and risk measures.",
          "Week 3: allocation, taxes, and case sets.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — Investment Planning.",
          "Bodie, Kane & Marcus — Investments (reference).",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m6",
        examId: "cfp",
        levelId: "full",
        title: "Tax planning for individuals & investments",
        examFormat:
          "MCQs and case items on income tax computation, planning strategies, and investment taxation.",
        estimatedStudyHours: 26,
        overview:
          "This module covers the federal income tax framework for individuals, tax planning strategies, and the taxation of investments, business income, and property transactions relevant to financial planning.",
        whyItMatters:
          "Taxes affect nearly every planning decision. Understanding brackets, deductions, capital gains, and planning techniques is essential to maximising after-tax client outcomes.",
        learningOutcomes: [
          "Compute individual taxable income and tax liability.",
          "Distinguish above-the-line, itemized, and standard deductions.",
          "Apply capital-gains and dividend taxation rules.",
          "Use tax-advantaged accounts and timing strategies.",
          "Analyse the taxation of property transactions and pass-through income.",
          "Identify the AMT and other special tax situations.",
        ],
        syllabusAreas: [
          area(
            "Income tax framework",
            [
              "Filing status, gross income, adjustments",
              "Deductions, exemptions, and credits",
              "Marginal vs effective rates",
            ],
            "35–40%"
          ),
          area(
            "Investment and property taxation",
            [
              "Capital gains, dividends, and basis",
              "Wash sales and tax-loss harvesting",
              "Property transactions and depreciation",
            ],
            "30–35%"
          ),
          area(
            "Planning strategies",
            [
              "Tax-advantaged accounts and location",
              "Income timing and bracket management",
              "AMT and special situations",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m6-l1",
            "The income tax framework",
            55,
            ["Compute taxable income", "Distinguish deductions"],
            [
              "Taxable income = gross income − adjustments − (standard or itemized deductions).",
              "Credits reduce tax dollar-for-dollar; deductions reduce taxable income.",
              "Marginal rate applies to the next dollar; effective rate is average tax.",
              "Filing status affects brackets and thresholds.",
            ],
            [
              "How do credits differ from deductions?",
              "What is the difference between marginal and effective rates?",
            ]
          ),
          lesson(
            "cfp-full-m6-l2",
            "Capital gains, dividends, and basis",
            50,
            ["Apply gain rules", "Track basis"],
            [
              "Long-term gains and qualified dividends receive preferential rates; short-term is ordinary.",
              "Basis determines gain; adjust for reinvested dividends and improvements.",
              "Holding period (over one year) defines long-term treatment.",
              "The net investment income tax may apply above income thresholds.",
            ],
            [
              "What distinguishes a long-term from a short-term gain?",
              "Why is tracking basis important?",
            ],
            "Shares bought for $10,000 (with $1,000 of reinvested dividends already taxed) have a $11,000 basis; selling for $15,000 yields a $4,000 long-term gain, not $5,000."
          ),
          lesson(
            "cfp-full-m6-l3",
            "Tax-loss harvesting and wash sales",
            45,
            ["Harvest losses", "Avoid wash sales"],
            [
              "Losses offset gains and up to a limited amount of ordinary income annually.",
              "The wash-sale rule disallows a loss if a substantially identical security is bought within 30 days before/after.",
              "Disallowed losses adjust the replacement security's basis.",
              "Harvesting must respect the client's overall strategy.",
            ],
            [
              "What triggers the wash-sale rule?",
              "What happens to a disallowed wash-sale loss?",
            ]
          ),
          lesson(
            "cfp-full-m6-l4",
            "Tax-advantaged accounts and timing",
            50,
            ["Use tax-advantaged accounts", "Manage brackets"],
            [
              "Pre-tax accounts defer tax; Roth accounts offer tax-free qualified withdrawals.",
              "Asset location and Roth conversions manage lifetime taxes.",
              "Income timing (deferring income, accelerating deductions) manages brackets.",
              "Bunching deductions can exceed the standard deduction in alternating years.",
            ],
            [
              "When is a Roth conversion advantageous?",
              "How does bunching deductions help?",
            ]
          ),
          lesson(
            "cfp-full-m6-l5",
            "Property transactions, pass-throughs, and AMT",
            45,
            ["Tax property transactions", "Recognise AMT"],
            [
              "Property transactions involve basis, depreciation recapture, and possible like-kind exchange (1031) for real property.",
              "Pass-through income (partnerships, S-corps) flows to individual returns.",
              "The qualified business income deduction may apply to pass-through income.",
              "AMT recalculates tax with fewer preferences for certain taxpayers.",
            ],
            [
              "What is depreciation recapture?",
              "Who is most likely to be affected by the AMT?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Taxable income = gross income − adjustments − deductions.",
          "Tax liability = tax on taxable income − credits.",
          "Gain = amount realised − adjusted basis.",
          "Effective rate = total tax ÷ taxable (or total) income.",
        ],
        commonTraps: [
          "Confusing credits with deductions.",
          "Ignoring the wash-sale rule when harvesting losses.",
          "Forgetting basis adjustments for reinvested dividends.",
          "Applying ordinary rates to qualified dividends/long-term gains.",
        ],
        examTechnique: [
          "Build the tax computation in order: income → adjustments → deductions → tax → credits.",
          "Check holding periods before applying gain rates.",
          "For planning questions, consider lifetime, not just current-year, taxes.",
        ],
        practicePlan: [
          "Week 1: tax framework and computations.",
          "Week 2: investment and property taxation.",
          "Week 3: planning-strategy and AMT case items.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — Tax Planning.",
          "IRS Form 1040 instructions and relevant publications.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m7",
        examId: "cfp",
        levelId: "full",
        title: "Retirement savings vehicles & income strategies",
        examFormat:
          "MCQs and case items on retirement plans, contribution/distribution rules, and income planning.",
        estimatedStudyHours: 26,
        overview:
          "This module covers qualified and non-qualified retirement plans, IRAs, contribution and distribution rules, required minimum distributions, and strategies for generating sustainable retirement income.",
        whyItMatters:
          "Retirement planning is one of the largest exam domains and a primary client goal. Plan rules and income strategies are heavily tested and highly technical.",
        learningOutcomes: [
          "Distinguish qualified plans, IRAs, and non-qualified arrangements.",
          "Apply contribution limits, eligibility, and vesting rules.",
          "Explain distribution rules, penalties, and required minimum distributions.",
          "Compute retirement needs and sustainable withdrawal rates.",
          "Design tax-efficient retirement income sequencing.",
          "Evaluate rollovers, conversions, and plan selection for businesses.",
        ],
        syllabusAreas: [
          area(
            "Plan types and rules",
            [
              "Defined benefit vs defined contribution",
              "401(k), 403(b), IRAs (traditional/Roth), SEP/SIMPLE",
              "Contribution limits, eligibility, vesting",
            ],
            "35–40%"
          ),
          area(
            "Distributions and RMDs",
            [
              "Early-withdrawal penalties and exceptions",
              "Required minimum distributions",
              "Rollovers and conversions",
            ],
            "30–35%"
          ),
          area(
            "Retirement income planning",
            [
              "Needs analysis and withdrawal rates",
              "Income sequencing and tax efficiency",
              "Longevity and sequence-of-returns risk",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m7-l1",
            "Retirement plan types",
            55,
            ["Compare plan types", "Match plans to clients"],
            [
              "Defined benefit promises a formula-based pension; the employer bears investment risk.",
              "Defined contribution (401(k), 403(b)) shifts risk to the employee.",
              "Traditional IRAs defer tax; Roth IRAs offer tax-free qualified withdrawals.",
              "SEP and SIMPLE plans suit small businesses and the self-employed.",
            ],
            [
              "Who bears investment risk in a defined benefit plan?",
              "When is a SEP or SIMPLE appropriate?",
            ]
          ),
          lesson(
            "cfp-full-m7-l2",
            "Contributions, eligibility, and vesting",
            50,
            ["Apply contribution rules", "Explain vesting"],
            [
              "Contribution limits and catch-up contributions apply by plan and age.",
              "Traditional IRA deductibility phases out with income when covered by a workplace plan.",
              "Roth IRA eligibility phases out at higher incomes (backdoor Roth is an alternative).",
              "Vesting schedules determine ownership of employer contributions.",
            ],
            [
              "What limits traditional IRA deductibility?",
              "What does a vesting schedule govern?",
            ]
          ),
          lesson(
            "cfp-full-m7-l3",
            "Distributions, penalties, and RMDs",
            55,
            ["Apply distribution rules", "Compute RMDs"],
            [
              "Early withdrawals before 59½ generally incur a 10% penalty, with exceptions.",
              "Required minimum distributions begin at the applicable RMD age for most accounts.",
              "Roth IRAs have no lifetime RMDs for the original owner.",
              "RMD = prior year-end balance ÷ life-expectancy factor.",
            ],
            [
              "Which accounts have no lifetime RMDs for the owner?",
              "How is an RMD calculated?",
            ],
            "With a $500,000 prior year-end IRA balance and a life-expectancy factor of 25, the RMD is $500,000 ÷ 25 = $20,000 for the year."
          ),
          lesson(
            "cfp-full-m7-l4",
            "Retirement needs and withdrawal rates",
            50,
            ["Compute needs", "Assess withdrawal sustainability"],
            [
              "Estimate the retirement income gap after Social Security and pensions.",
              "Sustainable withdrawal rules (e.g. ~4% guidelines) balance longevity and spending.",
              "Sequence-of-returns risk hits portfolios with early-retirement losses.",
              "Inflation erodes real spending power over a long retirement.",
            ],
            [
              "What is sequence-of-returns risk?",
              "Why does inflation matter in withdrawal planning?",
            ]
          ),
          lesson(
            "cfp-full-m7-l5",
            "Income sequencing, rollovers, and conversions",
            45,
            ["Sequence withdrawals", "Evaluate conversions"],
            [
              "Tax-efficient sequencing typically draws taxable, then tax-deferred, then Roth (client-specific).",
              "Direct rollovers avoid withholding and preserve tax deferral.",
              "Roth conversions accelerate tax to gain future tax-free growth.",
              "Coordinate withdrawals with brackets, RMDs, and Social Security taxation.",
            ],
            [
              "Why prefer a direct over an indirect rollover?",
              "When can a Roth conversion be beneficial?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "RMD = prior year-end balance ÷ life-expectancy factor.",
          "Income gap = spending need − Social Security − pensions − other income.",
          "Safe withdrawal guideline ≈ 4% of initial portfolio (adjusted for inflation).",
          "Tax-efficient sequencing: taxable → tax-deferred → Roth (client-dependent).",
        ],
        commonTraps: [
          "Applying RMD rules to Roth IRAs during the owner's life.",
          "Missing early-withdrawal penalty exceptions.",
          "Ignoring sequence-of-returns and inflation risk.",
          "Triggering withholding via indirect rollovers.",
        ],
        examTechnique: [
          "Identify the plan type first — rules differ sharply by plan.",
          "For distributions, check age, penalty exceptions, and RMD status.",
          "In income cases, coordinate taxes across all income sources.",
        ],
        practicePlan: [
          "Week 1: plan types and contribution rules.",
          "Week 2: distributions, penalties, and RMD computations.",
          "Week 3: income-planning and conversion case sets.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — Retirement Savings and Income Planning.",
          "IRS Publications 590-A/590-B — IRAs.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m8",
        examId: "cfp",
        levelId: "full",
        title: "Social Security / pensions & longevity planning",
        examFormat:
          "MCQs and case items on Social Security claiming, pension options, and longevity risk.",
        estimatedStudyHours: 22,
        overview:
          "This module covers Social Security benefits and claiming strategies, employer pension options, annuitisation, and managing longevity risk in retirement income planning.",
        whyItMatters:
          "Social Security is the foundation of most retirement plans, and claiming decisions are irreversible and high-stakes. Longevity risk shapes the entire income strategy.",
        learningOutcomes: [
          "Explain how Social Security benefits are calculated and claimed.",
          "Evaluate claiming-age trade-offs and spousal/survivor benefits.",
          "Analyse pension payout options and annuitisation.",
          "Assess longevity risk and pooling solutions.",
          "Coordinate Social Security taxation with other income.",
          "Integrate guaranteed and portfolio income sources.",
        ],
        syllabusAreas: [
          area(
            "Social Security",
            [
              "Benefit calculation and full retirement age",
              "Early vs delayed claiming",
              "Spousal, survivor, and taxation rules",
            ],
            "40–45%"
          ),
          area(
            "Pensions and annuities",
            [
              "Single vs joint-and-survivor options",
              "Lump sum vs annuity decisions",
              "Annuity types and features",
            ],
            "30–35%"
          ),
          area(
            "Longevity planning",
            [
              "Longevity and mortality risk",
              "Risk pooling and guaranteed income",
              "Integrating income sources",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m8-l1",
            "Social Security benefit basics",
            50,
            ["Explain benefit calculation", "Define full retirement age"],
            [
              "Benefits derive from the highest 35 years of indexed earnings (AIME → PIA).",
              "Full retirement age (FRA) varies by birth year.",
              "Claiming before FRA reduces benefits; claiming after FRA (to 70) increases them.",
              "Earnings tests can temporarily reduce benefits before FRA.",
            ],
            [
              "How many years of earnings determine the benefit?",
              "What happens to benefits if claimed before FRA?",
            ]
          ),
          lesson(
            "cfp-full-m8-l2",
            "Claiming strategies",
            55,
            ["Evaluate claiming age", "Apply spousal/survivor rules"],
            [
              "Delaying to 70 earns delayed retirement credits, raising lifetime benefits for long-lived retirees.",
              "Early claiming provides income sooner but permanently lower benefits.",
              "Spousal benefits can be up to 50% of the worker's PIA at FRA.",
              "Survivor benefits can equal the deceased worker's benefit, informing higher earner's claiming.",
            ],
            [
              "Why might the higher earner delay claiming?",
              "How large can a spousal benefit be at FRA?",
            ],
            "For a couple, having the higher earner delay to 70 maximises the survivor benefit, since the survivor keeps the larger of the two benefits — often the decisive planning point."
          ),
          lesson(
            "cfp-full-m8-l3",
            "Social Security taxation and coordination",
            45,
            ["Compute taxable benefits", "Coordinate income"],
            [
              "Up to 85% of benefits may be taxable depending on provisional income.",
              "Managing other income can reduce the taxable portion of benefits.",
              "Roth withdrawals do not add to provisional income.",
              "Coordinate claiming with RMDs and portfolio withdrawals.",
            ],
            [
              "What determines how much of a benefit is taxable?",
              "Why can Roth income help manage benefit taxation?",
            ]
          ),
          lesson(
            "cfp-full-m8-l4",
            "Pension options and annuitisation",
            50,
            ["Compare payout options", "Decide lump sum vs annuity"],
            [
              "Single-life pays more but ends at death; joint-and-survivor protects a spouse at a lower payout.",
              "Lump sum offers control and legacy; annuity offers guaranteed lifetime income.",
              "Annuity types: immediate, deferred, fixed, variable, and indexed.",
              "Consider health, other income, and legacy goals in the decision.",
            ],
            [
              "What is the trade-off between single-life and joint-and-survivor pensions?",
              "When might a lump sum be preferable to an annuity?",
            ]
          ),
          lesson(
            "cfp-full-m8-l5",
            "Longevity risk and guaranteed income",
            40,
            ["Assess longevity risk", "Use risk pooling"],
            [
              "Longevity risk is the danger of outliving assets; it grows with life expectancy.",
              "Annuities and Social Security pool mortality risk, providing lifetime income.",
              "A guaranteed-income floor covers essentials; the portfolio funds discretionary spending.",
              "Deferred income annuities (e.g. QLACs) hedge late-life longevity.",
            ],
            [
              "How do annuities address longevity risk?",
              "What is a guaranteed-income floor strategy?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Benefit basis: highest 35 indexed years → AIME → PIA.",
          "Claiming trade-off: earlier income vs higher lifetime/survivor benefits.",
          "Provisional income determines taxable share of Social Security (up to 85%).",
          "Income floor = guaranteed sources cover essential spending.",
        ],
        commonTraps: [
          "Advising early claiming without considering survivor benefits.",
          "Ignoring the taxation of Social Security benefits.",
          "Choosing single-life pension without protecting a dependent spouse.",
          "Underestimating longevity and inflation over a long retirement.",
        ],
        examTechnique: [
          "For couples, evaluate claiming through the survivor-benefit lens.",
          "Coordinate claiming, RMDs, and withdrawals for tax efficiency.",
          "Weigh health and legacy goals in annuitisation decisions.",
        ],
        practicePlan: [
          "Week 1: benefit calculation and claiming strategies.",
          "Week 2: pension options and annuitisation.",
          "Week 3: longevity and integrated income case sets.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — Retirement Income Planning.",
          "Social Security Administration — benefit and claiming resources.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m9",
        examId: "cfp",
        levelId: "full",
        title: "Estate planning documents, trusts & wealth transfer",
        examFormat:
          "MCQs and case items on estate documents, trusts, gift/estate tax, and transfer strategies.",
        estimatedStudyHours: 24,
        overview:
          "This module covers estate planning fundamentals: wills, powers of attorney, trusts, probate, and the federal gift and estate tax system, along with strategies to transfer wealth efficiently.",
        whyItMatters:
          "Estate planning protects clients' legacies and minimises transfer taxes and probate costs. It is a technical, well-tested domain that integrates tax, insurance, and family goals.",
        learningOutcomes: [
          "Describe core estate documents and their functions.",
          "Explain probate and how to avoid or minimise it.",
          "Distinguish trust types and their planning uses.",
          "Apply gift and estate tax rules, exclusions, and the unified credit.",
          "Evaluate wealth-transfer strategies and charitable giving.",
          "Coordinate beneficiary designations and titling with the plan.",
        ],
        syllabusAreas: [
          area(
            "Documents and probate",
            [
              "Wills, powers of attorney, health directives",
              "Probate process and avoidance",
              "Property titling and beneficiary designations",
            ],
            "30–35%"
          ),
          area(
            "Trusts",
            [
              "Revocable vs irrevocable trusts",
              "Marital, bypass, and special-purpose trusts",
              "Trust taxation basics",
            ],
            "30–35%"
          ),
          area(
            "Transfer taxation and strategies",
            [
              "Gift and estate tax, exclusions, and unified credit",
              "Gifting, valuation discounts, and GST",
              "Charitable transfer strategies",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m9-l1",
            "Estate documents and probate",
            50,
            ["Describe key documents", "Explain probate avoidance"],
            [
              "A will directs asset distribution and names guardians/executors.",
              "Durable powers of attorney and health directives handle incapacity.",
              "Probate is the court process to validate a will and settle the estate.",
              "Titling (JTWROS) and beneficiary designations pass assets outside probate.",
            ],
            [
              "How do beneficiary designations bypass probate?",
              "What documents address incapacity?",
            ]
          ),
          lesson(
            "cfp-full-m9-l2",
            "Property titling and its consequences",
            45,
            ["Compare ownership forms", "Link titling to transfer"],
            [
              "Joint tenancy with right of survivorship passes to the survivor automatically.",
              "Tenancy in common allows a divisible, devisable share.",
              "Community property rules vary by state and affect basis.",
              "Titling can override will provisions, so it must align with the plan.",
            ],
            [
              "How does JTWROS differ from tenancy in common?",
              "Why must titling align with the estate plan?",
            ]
          ),
          lesson(
            "cfp-full-m9-l3",
            "Trusts and their uses",
            55,
            ["Distinguish trust types", "Match trusts to goals"],
            [
              "Revocable living trusts avoid probate and manage incapacity, but offer no estate-tax shield.",
              "Irrevocable trusts can remove assets from the taxable estate.",
              "Marital (A) and bypass (B) trusts manage spousal transfers and exemptions.",
              "Special-purpose trusts address minors, special needs, and asset protection.",
            ],
            [
              "Does a revocable trust reduce estate tax?",
              "What is the role of a bypass trust?",
            ]
          ),
          lesson(
            "cfp-full-m9-l4",
            "Gift and estate taxation",
            55,
            ["Apply transfer-tax rules", "Use exclusions and credit"],
            [
              "Annual gift exclusion allows tax-free gifts up to a per-donee limit each year.",
              "The unified credit shelters a lifetime exemption from gift and estate tax.",
              "The unlimited marital deduction defers tax on transfers to a spouse.",
              "Step-up in basis at death resets appreciated-asset basis to fair value.",
            ],
            [
              "What does the unlimited marital deduction accomplish?",
              "How does step-up in basis benefit heirs?",
            ],
            "Gifting appreciated stock during life transfers the carryover basis, while holding it until death gives heirs a stepped-up basis — a key trade-off between gift and estate strategies."
          ),
          lesson(
            "cfp-full-m9-l5",
            "Wealth-transfer and charitable strategies",
            45,
            ["Design transfer strategies", "Apply charitable vehicles"],
            [
              "Systematic gifting uses annual exclusions to shrink the taxable estate.",
              "Valuation discounts and GST planning benefit larger estates.",
              "Charitable remainder/lead trusts and donor-advised funds combine giving with tax benefits.",
              "Life insurance in an ILIT can provide liquidity outside the estate.",
            ],
            [
              "How does annual gifting reduce estate tax over time?",
              "Why hold life insurance in an ILIT?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Probate avoidance: trusts + titling + beneficiary designations.",
          "Transfer tax shelters: annual exclusion + unified credit + marital deduction.",
          "Gift vs bequest: carryover basis (gift) vs step-up (death).",
          "Estate liquidity: cash, marketable assets, and life insurance (ILIT).",
        ],
        commonTraps: [
          "Assuming a revocable trust reduces estate taxes.",
          "Letting titling or beneficiary designations contradict the will.",
          "Overlooking the step-up-in-basis vs gifting trade-off.",
          "Ignoring estate liquidity needs for taxes and expenses.",
        ],
        examTechnique: [
          "Ask whether a strategy targets probate, taxes, or control.",
          "Check whether an asset passes by will, titling, or beneficiary.",
          "Weigh basis consequences in gift-versus-bequest questions.",
        ],
        practicePlan: [
          "Week 1: documents, probate, and titling.",
          "Week 2: trust types and taxation.",
          "Week 3: transfer-tax and charitable case sets.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — Estate Planning.",
          "IRS estate and gift tax resources.",
        ],
      }),
      courseware({
        moduleId: "cfp-full-m10",
        examId: "cfp",
        levelId: "full",
        title: "Behavioral finance & psychology of financial planning",
        examFormat:
          "MCQs and case items on client psychology, biases, communication, and behaviour change.",
        estimatedStudyHours: 20,
        overview:
          "This module covers the psychology of financial planning: behavioural biases, client communication, counseling, cultural sensitivity, and helping clients make and sustain good financial decisions.",
        whyItMatters:
          "Even a technically perfect plan fails if clients cannot follow it. Understanding biases and communication is now a distinct CFP domain and vital to real-world effectiveness.",
        learningOutcomes: [
          "Identify common cognitive and emotional biases affecting clients.",
          "Apply behavioural insights to plan design and framing.",
          "Use effective communication and counseling techniques.",
          "Adapt to client values, culture, and money scripts.",
          "Facilitate behaviour change and follow-through.",
          "Recognise the planner's own biases and manage them.",
        ],
        syllabusAreas: [
          area(
            "Behavioural biases",
            [
              "Cognitive biases (anchoring, overconfidence, recency)",
              "Emotional biases (loss aversion, status quo)",
              "Framing and mental accounting",
            ],
            "35–40%"
          ),
          area(
            "Communication and counseling",
            [
              "Active listening and questioning",
              "Building trust and rapport",
              "Motivational and change techniques",
            ],
            "35–40%"
          ),
          area(
            "Client psychology and diversity",
            [
              "Money scripts and financial attitudes",
              "Cultural and life-transition sensitivity",
              "Managing planner bias",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfp-full-m10-l1",
            "Cognitive and emotional biases",
            50,
            ["Identify biases", "Distinguish cognitive from emotional"],
            [
              "Cognitive biases (anchoring, overconfidence, recency) stem from flawed reasoning and can be corrected with information.",
              "Emotional biases (loss aversion, status quo, regret) are harder to change and require accommodation.",
              "Loss aversion makes clients feel losses more than equivalent gains.",
              "Recency bias overweights recent market experience.",
            ],
            [
              "How do cognitive and emotional biases differ in treatment?",
              "What is loss aversion?",
            ]
          ),
          lesson(
            "cfp-full-m10-l2",
            "Framing, mental accounting, and nudges",
            45,
            ["Apply framing", "Design helpful defaults"],
            [
              "Framing the same choice differently changes decisions (gain vs loss framing).",
              "Mental accounting leads clients to treat money differently by 'bucket'.",
              "Defaults and automation (e.g. auto-escalation) improve savings behaviour.",
              "Goal-based framing can increase commitment.",
            ],
            [
              "How can framing improve client decisions?",
              "Why are defaults powerful in savings behaviour?",
            ]
          ),
          lesson(
            "cfp-full-m10-l3",
            "Communication and counseling",
            50,
            ["Use active listening", "Build trust"],
            [
              "Active listening and open-ended questions surface true goals and concerns.",
              "Empathy and transparency build the trust needed for follow-through.",
              "Clear, jargon-free explanations improve understanding and buy-in.",
              "Counseling skills help clients process financial stress.",
            ],
            [
              "Why are open-ended questions valuable in client meetings?",
              "How does trust affect plan implementation?",
            ]
          ),
          lesson(
            "cfp-full-m10-l4",
            "Money scripts, culture, and transitions",
            40,
            ["Recognise money scripts", "Adapt to diversity"],
            [
              "Money scripts are ingrained beliefs about money shaped by upbringing.",
              "Cultural background influences financial priorities and communication style.",
              "Life transitions (divorce, death, job loss) require sensitivity and adjusted plans.",
              "Understanding attitudes improves recommendation acceptance.",
            ],
            [
              "What are money scripts and why do they matter?",
              "How should planners handle major life transitions?",
            ]
          ),
          lesson(
            "cfp-full-m10-l5",
            "Behaviour change and managing planner bias",
            40,
            ["Facilitate change", "Manage own bias"],
            [
              "Behaviour change techniques (small steps, accountability, commitment devices) improve follow-through.",
              "Planners have biases too — self-awareness prevents projecting them onto clients.",
              "Documenting decisions supports objective, client-centered advice.",
              "Revisit and reinforce behaviours through monitoring.",
            ],
            [
              "Name a technique to help clients sustain behaviour change.",
              "Why must planners manage their own biases?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Bias treatment rule: correct cognitive biases, accommodate emotional biases.",
          "Nudge toolkit: defaults, automation, framing, commitment devices.",
          "Communication cycle: listen → clarify → educate → confirm → follow up.",
          "Money-script lens: beliefs → behaviours → outcomes.",
        ],
        commonTraps: [
          "Treating emotional biases as if simple information will fix them.",
          "Using jargon that reduces client understanding and trust.",
          "Ignoring cultural context and money scripts.",
          "Projecting the planner's own risk preferences onto the client.",
        ],
        examTechnique: [
          "Classify the bias as cognitive or emotional before choosing a remedy.",
          "For communication items, favour listening and client-centered answers.",
          "Match interventions (nudges, framing) to the described behaviour.",
        ],
        practicePlan: [
          "Week 1: identify and classify biases.",
          "Week 2: framing, nudges, and communication scenarios.",
          "Week 3: money scripts, transitions, and integrated case items.",
        ],
        furtherReading: [
          "CFP principal knowledge topics — Psychology of Financial Planning.",
          "Kahneman — Thinking, Fast and Slow (reference).",
        ],
      }),
    ],
  },
];
