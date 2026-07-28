import type { ModuleCourseware } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * CFA Program courseware for Levels I, II and III.
 *
 * Titles mirror the CFA level topic lists in `src/lib/exams.ts` exactly so that
 * modules can be matched back to the syllabus selector.
 *
 * Exam format notes:
 *  - Level I  : computer-based test (CBT), 180 standalone multiple-choice
 *               questions split across two 135-minute sessions.
 *  - Level II : CBT, 88 multiple-choice questions delivered inside item-set
 *               vignettes across two sessions.
 *  - Level III: CBT, a mix of constructed-response (essay) questions and item
 *               sets across two sessions.
 */

const CFA_L1_FORMAT =
  "CFA Level I — computer-based test (CBT): 180 standalone multiple-choice questions across two 135-minute sessions (90 questions each). Three answer choices, no penalty for guessing, on-screen calculator plus approved financial calculator.";
const CFA_L2_FORMAT =
  "CFA Level II — computer-based test (CBT): 88 multiple-choice questions delivered as vignette-driven item sets (typically 4–6 questions per vignette) across two sessions. Answers must be supported by the shared case facts.";
const CFA_L3_FORMAT =
  "CFA Level III — computer-based test (CBT): two sessions blending constructed-response (essay) questions that are graded against command words with vignette-based item sets. Essays require concise, justified answers and shown calculations.";

export const CFA_COURSEWARE: ModuleCourseware[] = [
  // ===================================================================
  // LEVEL I
  // ===================================================================
  courseware({
    moduleId: "cfa-l1-m1",
    examId: "cfa",
    levelId: "l1",
    title: "Ethical & Professional Standards",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 40,
    overview:
      "Introduces the CFA Institute Code of Ethics and the seven Standards of Professional Conduct, together with the Global Investment Performance Standards (GIPS). At Level I the emphasis is on recognising which standard applies to a described situation and identifying the least/most compliant course of action.",
    whyItMatters:
      "Ethics is the single largest topic weight at Level I and is used as a tie-breaker when a candidate is on the borderline of passing. It also underpins the profession's reputation and is tested at every level, so mastering it early pays compounding dividends.",
    learningOutcomes: [
      "State the six components of the Code of Ethics and the seven Standards of Professional Conduct.",
      "Distinguish between conduct that complies with and violates each standard.",
      "Recommend practices and procedures that prevent violations.",
      "Apply the Standards to realistic workplace scenarios involving conflicts of interest, material nonpublic information and misrepresentation.",
      "Explain the purpose, key principles and required/recommended provisions of GIPS.",
      "Identify the objectives of the CFA Institute Professional Conduct Program and the disciplinary process.",
    ],
    syllabusAreas: [
      area("Code of Ethics & Standards", [
        "Six components of the Code of Ethics",
        "Standard I Professionalism",
        "Standard II Integrity of Capital Markets",
        "Standard III Duties to Clients",
      ], "15–20%"),
      area("Applying the Standards", [
        "Standard IV Duties to Employers",
        "Standard V Investment Analysis, Recommendations & Actions",
        "Standard VI Conflicts of Interest",
        "Standard VII Responsibilities as a Member/Candidate",
      ]),
      area("GIPS & Professional Conduct Program", [
        "Purpose and scope of GIPS",
        "Fundamentals of compliance and composites",
        "Professional Conduct Program and disciplinary sanctions",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m1-l1",
        "The Code of Ethics and the ethical decision-making framework",
        45,
        [
          "Recite the six components of the Code of Ethics.",
          "Apply a structured framework to evaluate an ethical dilemma.",
        ],
        [
          "The Code sets broad principles; the Standards operationalise them.",
          "A decision framework (identify, consider, decide, act, reflect) reduces bias.",
          "Ethical conduct protects clients, employers, markets and the profession.",
        ],
        [
          "What are the six components of the Code of Ethics?",
          "Why does CFA Institute promote a framework rather than case memorisation?",
        ],
        "An analyst is pressured by a portfolio manager to soften a negative research note. Using the framework, the analyst separates the client's interest (accurate research) from the employer relationship, concludes that Standard V requires a reasonable and adequate basis, and escalates rather than alters the note."
      ),
      lesson(
        "cfa-l1-m1-l2",
        "Standards I & II — Professionalism and market integrity",
        50,
        [
          "Differentiate knowledge of law, independence, misrepresentation and misconduct.",
          "Apply the material nonpublic information and market manipulation standards.",
        ],
        [
          "Follow the more strict of local law vs the Code and Standards.",
          "Independence and objectivity require refusing lavish gifts that could impair judgement.",
          "The mosaic theory allows combining public and nonmaterial nonpublic information.",
        ],
        [
          "When may an analyst act on nonpublic information under the mosaic theory?",
          "How should a member respond to a gift from a company they cover?",
        ],
        "A buy-side analyst overhears material nonpublic information in an elevator. Standard II(A) prohibits trading or causing others to trade until the information is public, regardless of how it was obtained."
      ),
      lesson(
        "cfa-l1-m1-l3",
        "Standards III & IV — Duties to clients and employers",
        50,
        [
          "Apply loyalty, prudence, fair dealing and suitability requirements.",
          "Explain obligations around confidentiality, additional compensation and loyalty to employers.",
        ],
        [
          "Client interests come before employer and personal interests.",
          "Fair dealing means disseminating recommendations to all clients fairly, not identically.",
          "Departing employees may not take confidential records or solicit clients while employed.",
        ],
        [
          "How does fair dealing differ from equal dealing?",
          "What may a departing employee take with them?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m1-l4",
        "Standards V, VI & VII — Research, conflicts and responsibilities",
        50,
        [
          "Apply diligence, reasonable basis and record-retention requirements.",
          "Identify and disclose conflicts of interest and priority-of-transactions rules.",
        ],
        [
          "Recommendations need a reasonable and adequate basis supported by research.",
          "Disclose all matters that could impair objectivity, in plain language.",
          "Client and employer trades take priority over personal (member) trades.",
        ],
        [
          "What must be disclosed under Standard VI(A)?",
          "How should referral fees be handled?",
        ],
        "A manager holds shares personally and also for clients. Standard VI(B) requires that client orders are filled before the manager's own order for the same security."
      ),
      lesson(
        "cfa-l1-m1-l5",
        "GIPS and the Professional Conduct Program",
        45,
        [
          "Explain the purpose and key features of GIPS.",
          "Describe the Professional Conduct Program and disciplinary process.",
        ],
        [
          "GIPS compliance is firm-wide and voluntary but must not be partial.",
          "Composites group portfolios by strategy to prevent cherry-picking.",
          "CFA Institute can impose sanctions ranging from private censure to revocation.",
        ],
        [
          "Why must a firm claim GIPS compliance on a firm-wide basis?",
          "What triggers a Professional Conduct inquiry?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Ethical decision-making framework: identify → consider → decide → act → reflect.",
      "Rule of strictness: apply the stricter of applicable law or the Code and Standards.",
      "Mosaic theory: public information + nonmaterial nonpublic information → permissible conclusion.",
    ],
    commonTraps: [
      "Choosing the 'harshest' answer instead of the response the Standards actually require.",
      "Confusing recommended procedures with required conduct.",
      "Assuming local law always overrides the Code when the Code is stricter.",
      "Treating fair dealing as identical (equal) dealing.",
    ],
    examTechnique: [
      "Identify the specific standard number before selecting an answer.",
      "Read for the 'least likely to violate' / 'most consistent with' phrasing.",
      "Eliminate answers that describe conduct rather than the compliant response.",
    ],
    practicePlan: [
      "Work 30 ethics questions per week and log the standard number missed.",
      "Re-read the actual Standards text once, then rely on question practice.",
      "Review the GIPS objectives and required disclosures the week before the exam.",
    ],
    furtherReading: [
      "CFA Institute — Standards of Practice Handbook (12th edition).",
      "CFA Institute — GIPS Standards for Firms.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m2",
    examId: "cfa",
    levelId: "l1",
    title: "Quantitative Methods",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 45,
    overview:
      "Covers the time value of money, statistical description of data, probability, sampling, hypothesis testing and an introduction to simple linear regression. These tools recur throughout every other topic area.",
    whyItMatters:
      "Quantitative methods are the mathematical toolkit for valuation, risk and portfolio construction. Weakness here compounds into fixed income, equity and derivatives, where the same discounting and statistics reappear.",
    learningOutcomes: [
      "Calculate present and future values for single sums, annuities and uneven cash flows.",
      "Interpret measures of central tendency, dispersion, skewness and kurtosis.",
      "Apply probability concepts including conditional probability and Bayes' formula.",
      "Describe common probability distributions and compute related probabilities.",
      "Construct confidence intervals and conduct hypothesis tests.",
      "Interpret the results of a simple linear regression.",
    ],
    syllabusAreas: [
      area("Time value of money & returns", [
        "PV/FV of single cash flows and annuities",
        "Money-weighted vs time-weighted returns",
        "Nominal, effective and continuously compounded rates",
      ], "10–15%"),
      area("Statistics & probability", [
        "Descriptive statistics and data distributions",
        "Probability rules, expected value and Bayes' formula",
        "Common distributions (normal, lognormal, binomial)",
      ]),
      area("Sampling & inference", [
        "Sampling distributions and the central limit theorem",
        "Confidence intervals and hypothesis testing",
        "Introduction to simple linear regression",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m2-l1",
        "Time value of money and rates of return",
        55,
        [
          "Compute PV and FV for single sums, annuities and uneven cash flows.",
          "Distinguish money-weighted from time-weighted returns.",
        ],
        [
          "Discounting and compounding are inverse operations on the same rate.",
          "Time-weighted return removes the effect of cash flow timing.",
          "Effective annual rate accounts for compounding frequency.",
        ],
        [
          "When is money-weighted return preferred over time-weighted?",
          "How does compounding frequency change the effective rate?",
        ],
        "Depositing $1,000 at 6% compounded monthly gives an EAR of (1 + 0.06/12)^12 − 1 = 6.17%, so FV after one year is $1,061.68 rather than $1,060."
      ),
      lesson(
        "cfa-l1-m2-l2",
        "Describing data: central tendency and dispersion",
        50,
        [
          "Compute and interpret mean, median, variance and standard deviation.",
          "Interpret skewness and kurtosis.",
        ],
        [
          "Standard deviation measures dispersion in the same units as the data.",
          "Positive skew has a long right tail; leptokurtic distributions have fat tails.",
          "Chebyshev's inequality bounds observations within k standard deviations.",
        ],
        [
          "What does a negative skew imply for downside risk?",
          "Why do investors care about excess kurtosis?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m2-l3",
        "Probability concepts and Bayes' formula",
        50,
        [
          "Apply addition and multiplication rules of probability.",
          "Update probabilities using Bayes' formula.",
        ],
        [
          "Conditional probability P(A|B) = P(AB)/P(B).",
          "Expected value is the probability-weighted average of outcomes.",
          "Bayes' formula reverses conditional probabilities using new evidence.",
        ],
        [
          "How does Bayes' formula update a prior probability?",
          "What is the covariance's role in a two-asset portfolio variance?",
        ],
        "Given a 70% prior that a firm beats earnings and an analyst signal that is 80% accurate, Bayes' formula combines them to produce a revised posterior probability of a beat."
      ),
      lesson(
        "cfa-l1-m2-l4",
        "Distributions and sampling",
        50,
        [
          "Describe the normal, lognormal and binomial distributions.",
          "Explain the central limit theorem and standard error.",
        ],
        [
          "The normal distribution is fully described by its mean and variance.",
          "Prices are often modelled as lognormal because they cannot be negative.",
          "The CLT makes the sampling distribution of the mean approximately normal.",
        ],
        [
          "Why model asset prices as lognormal rather than normal?",
          "How does sample size affect the standard error?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m2-l5",
        "Hypothesis testing and simple linear regression",
        55,
        [
          "Formulate null and alternative hypotheses and interpret p-values.",
          "Interpret slope, intercept and R-squared of a simple regression.",
        ],
        [
          "A Type I error rejects a true null; a Type II error fails to reject a false null.",
          "The p-value is the smallest significance level at which the null is rejected.",
          "R-squared is the fraction of variation explained by the independent variable.",
        ],
        [
          "What does failing to reject the null actually mean?",
          "How is the regression slope interpreted economically?",
        ],
        "Regressing a fund's returns on the market gives a slope (beta) of 1.2 and R-squared of 0.64, meaning 64% of the fund's return variation is explained by the market and it is 20% more volatile than the market."
      ),
    ],
    frameworksAndFormulas: [
      "FV = PV(1 + r)^n; PV of ordinary annuity = A × [1 − (1+r)^-n]/r.",
      "EAR = (1 + periodic rate)^m − 1.",
      "Portfolio variance (2 assets) = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2.",
      "Test statistic (z) = (sample mean − hypothesized mean) / (σ/√n).",
    ],
    commonTraps: [
      "Mismatching calculator periods per year (N, I/Y) with compounding frequency.",
      "Confusing money-weighted and time-weighted returns.",
      "Interpreting a high p-value as 'proving' the null hypothesis.",
      "Forgetting the covariance term in portfolio variance.",
    ],
    examTechnique: [
      "Clear the calculator's TVM registers between problems.",
      "Write down the hypotheses explicitly before choosing a test.",
      "Watch for one-tailed vs two-tailed critical values.",
    ],
    practicePlan: [
      "Drill 20 TVM problems until keystrokes are automatic.",
      "Memorise the decision rules for z-, t- and chi-square tests.",
      "Practise interpreting regression output tables.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Quantitative Methods readings.",
      "DeFusco et al., 'Quantitative Investment Analysis'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m3",
    examId: "cfa",
    levelId: "l1",
    title: "Economics",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 38,
    overview:
      "Reviews microeconomic demand and supply, market structures, macroeconomic aggregates, business cycles, monetary and fiscal policy, and international trade and exchange rates.",
    whyItMatters:
      "Economic conditions drive interest rates, currencies and corporate earnings. Understanding the policy transmission mechanism links macro news to the asset-class views tested across the curriculum.",
    learningOutcomes: [
      "Analyse demand, supply and elasticities in a competitive market.",
      "Compare the four market structures and their pricing behaviour.",
      "Explain GDP, aggregate demand/supply and the business cycle.",
      "Describe the goals and tools of monetary and fiscal policy.",
      "Explain exchange-rate regimes and the balance of payments.",
      "Calculate and interpret exchange-rate cross rates and forward premiums.",
    ],
    syllabusAreas: [
      area("Microeconomics", [
        "Demand, supply and elasticity",
        "Costs of production and firm behaviour",
        "Market structures: perfect competition to monopoly",
      ], "8–12%"),
      area("Macroeconomics", [
        "GDP and aggregate output measurement",
        "Aggregate demand/supply and the business cycle",
        "Inflation, unemployment and economic indicators",
      ]),
      area("Monetary, fiscal & international", [
        "Central banks and monetary policy tools",
        "Fiscal policy and automatic stabilisers",
        "Exchange rates, trade and the balance of payments",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m3-l1",
        "Demand, supply and elasticity",
        50,
        [
          "Compute price, income and cross elasticities of demand.",
          "Explain consumer and producer surplus.",
        ],
        [
          "Elasticity measures the responsiveness of quantity to a price change.",
          "Substitutes have positive cross elasticity; complements negative.",
          "Total surplus is maximised at the competitive equilibrium.",
        ],
        [
          "How does elasticity affect a firm's pricing strategy?",
          "What causes a deadweight loss?",
        ],
        "If a 10% price cut raises quantity demanded 25%, price elasticity is −2.5 (elastic), so total revenue rises when price falls."
      ),
      lesson(
        "cfa-l1-m3-l2",
        "Market structures and firm behaviour",
        50,
        [
          "Compare perfect competition, monopolistic competition, oligopoly and monopoly.",
          "Identify profit-maximising output where MR = MC.",
        ],
        [
          "Price equals marginal cost only under perfect competition.",
          "Oligopolies are interdependent; game theory describes strategic pricing.",
          "Monopolists face the full downward-sloping demand curve.",
        ],
        [
          "Why does a monopolist restrict output relative to competition?",
          "What distinguishes monopolistic competition from oligopoly?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m3-l3",
        "Aggregate output, business cycles and indicators",
        50,
        [
          "Explain GDP measurement and the AD/AS framework.",
          "Interpret leading, coincident and lagging indicators.",
        ],
        [
          "Real GDP strips out price changes to measure output.",
          "Business cycles move through expansion, peak, contraction and trough.",
          "Leading indicators anticipate turning points in activity.",
        ],
        [
          "How do supply shocks shift the AS curve?",
          "Which indicators are leading vs lagging?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m3-l4",
        "Monetary and fiscal policy",
        50,
        [
          "Describe central-bank tools and the neutral rate.",
          "Explain fiscal policy tools and the crowding-out effect.",
        ],
        [
          "Open-market operations change the money supply and short rates.",
          "Expansionary fiscal policy can crowd out private investment.",
          "Policy lags reduce the precision of countercyclical policy.",
        ],
        [
          "How does raising the policy rate transmit to the real economy?",
          "What is the difference between structural and cyclical deficits?",
        ],
        "A central bank facing 5% inflation raises its policy rate, increasing borrowing costs, cooling credit growth and appreciating the currency."
      ),
      lesson(
        "cfa-l1-m3-l5",
        "Exchange rates and international trade",
        50,
        [
          "Compute cross rates and forward premiums/discounts.",
          "Explain the balance of payments and exchange-rate regimes.",
        ],
        [
          "A currency trades at a forward premium when its interest rate is lower.",
          "Cross rates are derived by chaining two quoted rates.",
          "Current and capital accounts must offset in the balance of payments.",
        ],
        [
          "How is a forward premium related to interest-rate differentials?",
          "What causes a current-account deficit?",
        ],
        "With USD/EUR spot 1.10 and a 1-year forward of 1.12, the euro trades at a forward premium, consistent with lower euro interest rates via covered interest parity."
      ),
    ],
    frameworksAndFormulas: [
      "Price elasticity = %ΔQ / %ΔP.",
      "Profit maximisation: produce where MR = MC.",
      "Fisher relation: nominal rate ≈ real rate + expected inflation.",
      "Covered interest parity links forward premium to interest differentials.",
    ],
    commonTraps: [
      "Reversing the base/price currency in exchange-rate quotes.",
      "Confusing movement along a curve with a shift of the curve.",
      "Mixing up leading and lagging indicators.",
    ],
    examTechnique: [
      "Draw quick AD/AS or supply-demand sketches to anchor the answer.",
      "Track which currency is the price currency before computing forwards.",
      "Use elasticity sign conventions to check reasonableness.",
    ],
    practicePlan: [
      "Practise 15 exchange-rate and elasticity computations weekly.",
      "Summarise each market structure in a one-line comparison table.",
      "Link current headlines to the AD/AS framework for retention.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Economics readings.",
      "Mankiw, 'Principles of Economics'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m4",
    examId: "cfa",
    levelId: "l1",
    title: "Financial Statement Analysis",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 55,
    overview:
      "Teaches how to read and analyse the income statement, balance sheet and cash-flow statement, apply ratio analysis, and understand inventory, long-lived assets, income taxes and financing liabilities under IFRS and US GAAP.",
    whyItMatters:
      "Financial statements are the raw material for equity and credit analysis. The ability to normalise and compare statements is central to valuation and to detecting low-quality earnings.",
    learningOutcomes: [
      "Describe the roles of the key financial statements and notes.",
      "Construct and interpret common-size statements and financial ratios.",
      "Analyse revenue recognition and expense estimates for earnings quality.",
      "Evaluate inventory (FIFO/LIFO) and long-lived asset accounting choices.",
      "Explain deferred tax assets/liabilities and effective vs statutory tax rates.",
      "Account for leases and long-term debt and their statement effects.",
    ],
    syllabusAreas: [
      area("The core statements", [
        "Income statement and comprehensive income",
        "Balance sheet classification and measurement",
        "Cash-flow statement (direct vs indirect)",
      ], "10–12%"),
      area("Analysis tools", [
        "Common-size analysis and ratio categories",
        "DuPont decomposition of ROE",
        "Earnings quality and accruals",
      ]),
      area("Selected accounting topics", [
        "Inventories and cost-flow assumptions",
        "Long-lived assets and depreciation",
        "Income taxes, leases and long-term debt",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m4-l1",
        "The three statements and their linkages",
        55,
        [
          "Explain how the income statement, balance sheet and cash-flow statement connect.",
          "Reconcile net income to cash flow from operations.",
        ],
        [
          "Net income flows to retained earnings on the balance sheet.",
          "The indirect method adjusts net income for non-cash items and working capital.",
          "Comprehensive income captures items bypassing net income.",
        ],
        [
          "How does an increase in receivables affect operating cash flow?",
          "Where does other comprehensive income appear?",
        ],
        "A firm with $100 net income, $20 depreciation and a $15 rise in receivables reports operating cash flow of $100 + $20 − $15 = $105 under the indirect method."
      ),
      lesson(
        "cfa-l1-m4-l2",
        "Ratio analysis and DuPont decomposition",
        55,
        [
          "Compute liquidity, solvency, activity and profitability ratios.",
          "Decompose ROE using the DuPont framework.",
        ],
        [
          "DuPont splits ROE into net margin, asset turnover and leverage.",
          "Activity ratios link the balance sheet to the income statement.",
          "Ratios only inform when compared over time or against peers.",
        ],
        [
          "Which DuPont component drives a high-leverage bank's ROE?",
          "How can rising ROE mask deteriorating margins?",
        ],
        "A firm with 8% net margin, 1.5 asset turnover and 2.0 leverage has ROE = 0.08 × 1.5 × 2.0 = 24%, revealing that leverage contributes materially."
      ),
      lesson(
        "cfa-l1-m4-l3",
        "Inventories and long-lived assets",
        55,
        [
          "Contrast FIFO and LIFO effects on income and inventory.",
          "Explain capitalisation vs expensing and depreciation methods.",
        ],
        [
          "In rising prices, LIFO produces higher COGS and lower ending inventory.",
          "Capitalising costs shifts expense recognition to future periods.",
          "Impairments reduce carrying value and are generally not reversed under US GAAP.",
        ],
        [
          "How does LIFO affect reported earnings in inflationary periods?",
          "Why can capitalisation inflate near-term profitability?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m4-l4",
        "Income taxes and financing liabilities",
        50,
        [
          "Explain deferred tax assets and liabilities.",
          "Account for bonds issued at a premium or discount and for leases.",
        ],
        [
          "Temporary differences create deferred tax items that reverse over time.",
          "Bond carrying value moves toward par as premiums/discounts amortise.",
          "Leases add a right-of-use asset and lease liability to the balance sheet.",
        ],
        [
          "What creates a deferred tax liability?",
          "How does a lease affect leverage ratios?",
        ],
        "A bond issued at a discount records interest expense above the coupon because the effective-interest method amortises the discount into expense."
      ),
      lesson(
        "cfa-l1-m4-l5",
        "Earnings quality and financial statement integrity",
        50,
        [
          "Identify accruals and estimates that signal low earnings quality.",
          "Apply screening tools for manipulation risk.",
        ],
        [
          "High accruals relative to cash earnings can indicate aggressive accounting.",
          "Changes in estimates and one-time items distort trend analysis.",
          "Cash flow rarely lies as easily as accrual earnings.",
        ],
        [
          "Why do analysts compare net income to operating cash flow?",
          "What red flags suggest revenue-recognition manipulation?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "ROE = Net margin × Asset turnover × Financial leverage (DuPont).",
      "CFO (indirect) = NI + non-cash charges − ΔNWC.",
      "Ending inventory (FIFO) uses most recent costs; LIFO uses oldest.",
      "Effective interest expense = beginning carrying value × market yield.",
    ],
    commonTraps: [
      "Mixing IFRS and US GAAP treatment (e.g., LIFO is prohibited under IFRS).",
      "Ignoring the effect of accounting choices when comparing peers.",
      "Confusing the direct and indirect cash-flow presentations.",
    ],
    examTechnique: [
      "Note whether a question specifies IFRS or US GAAP.",
      "Build the DuPont chain rather than memorising a single ROE figure.",
      "Trace each ratio back to the statement line items it uses.",
    ],
    practicePlan: [
      "Reconstruct a cash-flow statement from an income statement and balance sheet.",
      "Compute a full ratio set for one company and interpret trends.",
      "Compare FIFO/LIFO outcomes numerically in a rising-price example.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Financial Statement Analysis readings.",
      "Robinson et al., 'International Financial Statement Analysis'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m5",
    examId: "cfa",
    levelId: "l1",
    title: "Corporate Issuers",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 32,
    overview:
      "Introduces corporate governance, stakeholder analysis, capital investment decisions, cost of capital, leverage, working-capital management and business models from the issuer's perspective.",
    whyItMatters:
      "Understanding how firms make financing and investment decisions clarifies the drivers of value that equity and credit analysts later assess. The cost of capital reappears in every valuation model.",
    learningOutcomes: [
      "Explain corporate governance and stakeholder management.",
      "Evaluate capital projects using NPV and IRR.",
      "Compute the weighted average cost of capital.",
      "Analyse operating and financial leverage.",
      "Describe working-capital management and liquidity.",
      "Compare features of debt and equity financing.",
    ],
    syllabusAreas: [
      area("Governance & structure", [
        "Stakeholder groups and conflicts",
        "Board structure and ESG considerations",
        "Business models and industry structure",
      ], "8–12%"),
      area("Investment & financing decisions", [
        "Capital budgeting: NPV, IRR, payback",
        "Cost of capital and WACC",
        "Capital structure and leverage",
      ]),
      area("Working capital", [
        "Cash conversion cycle",
        "Sources of short-term financing",
        "Liquidity management",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m5-l1",
        "Corporate governance and stakeholder management",
        45,
        [
          "Identify stakeholder groups and their conflicting interests.",
          "Explain governance mechanisms that protect shareholders.",
        ],
        [
          "Agency conflicts arise when managers' interests diverge from owners'.",
          "Independent boards and aligned compensation mitigate conflicts.",
          "ESG factors increasingly affect cost of capital and risk.",
        ],
        [
          "How does board independence reduce agency costs?",
          "Which stakeholders can constrain management the most?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m5-l2",
        "Capital budgeting: NPV and IRR",
        55,
        [
          "Compute NPV and IRR for a project.",
          "Explain why NPV is preferred when methods conflict.",
        ],
        [
          "NPV discounts incremental after-tax cash flows at the cost of capital.",
          "IRR is the discount rate that sets NPV to zero.",
          "NPV and IRR can rank mutually exclusive projects differently.",
        ],
        [
          "Why can IRR mislead for non-conventional cash flows?",
          "What cash flows are relevant to a capital project?",
        ],
        "A project costing $1,000 returning $600 for two years at a 10% cost of capital has NPV = −1,000 + 600/1.1 + 600/1.21 = $41.3, so it adds value."
      ),
      lesson(
        "cfa-l1-m5-l3",
        "Cost of capital and WACC",
        50,
        [
          "Compute component costs of debt, preferred and equity.",
          "Combine them into the WACC using market-value weights.",
        ],
        [
          "The after-tax cost of debt reflects the interest tax shield.",
          "CAPM estimates the cost of equity from beta and the market premium.",
          "Weights should use market values, not book values.",
        ],
        [
          "Why use after-tax cost of debt in WACC?",
          "How does higher beta change the cost of equity?",
        ],
        "With 40% debt at 6% (30% tax), 60% equity at 12%: WACC = 0.4 × 6% × (1 − 0.3) + 0.6 × 12% = 1.68% + 7.2% = 8.88%."
      ),
      lesson(
        "cfa-l1-m5-l4",
        "Leverage and capital structure",
        50,
        [
          "Compute degrees of operating, financial and total leverage.",
          "Explain the trade-off theory of capital structure.",
        ],
        [
          "Operating leverage magnifies EBIT changes from sales changes.",
          "Financial leverage magnifies EPS changes from EBIT changes.",
          "Optimal structure balances tax shields against distress costs.",
        ],
        [
          "How does high fixed cost raise operating leverage?",
          "What limits the tax-shield benefit of more debt?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m5-l5",
        "Working-capital and liquidity management",
        45,
        [
          "Compute the cash conversion cycle.",
          "Compare short-term financing sources.",
        ],
        [
          "The cash conversion cycle measures how long cash is tied up.",
          "Shorter cycles free up cash and reduce financing needs.",
          "Lines of credit and commercial paper fund short-term gaps.",
        ],
        [
          "How does stretching payables affect the cash conversion cycle?",
          "What are the trade-offs of aggressive working-capital policy?",
        ],
        "A firm with 50 days inventory, 40 days receivables and 30 days payables has a cash conversion cycle of 50 + 40 − 30 = 60 days."
      ),
    ],
    frameworksAndFormulas: [
      "NPV = Σ CFt / (1 + r)^t − initial outlay.",
      "WACC = wd·rd·(1 − t) + wp·rp + we·re.",
      "Cost of equity (CAPM) = rf + β(market premium).",
      "Cash conversion cycle = DIO + DSO − DPO.",
    ],
    commonTraps: [
      "Using book instead of market-value weights in WACC.",
      "Forgetting the tax shield on the cost of debt.",
      "Accepting IRR rankings for mutually exclusive projects.",
    ],
    examTechnique: [
      "Always default to NPV when NPV and IRR disagree.",
      "Set up leverage formulas from the definition (%Δ output / %Δ input).",
      "Check whether weights are given at market or book value.",
    ],
    practicePlan: [
      "Compute WACC for two firms with different tax rates.",
      "Build one full NPV/IRR project comparison.",
      "Practise cash-conversion-cycle problems weekly.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Corporate Issuers readings.",
      "Berk & DeMarzo, 'Corporate Finance'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m6",
    examId: "cfa",
    levelId: "l1",
    title: "Equity Investments",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 36,
    overview:
      "Covers market organisation, security indices, market efficiency, industry and company analysis, and introductory equity valuation using dividend discount and multiples approaches.",
    whyItMatters:
      "Equities are the core growth engine of most portfolios. Understanding how markets are organised and how shares are valued is foundational to security selection and portfolio construction.",
    learningOutcomes: [
      "Describe market structures, order types and margin transactions.",
      "Explain index construction and weighting methods.",
      "Distinguish the forms of market efficiency.",
      "Perform industry and competitive analysis.",
      "Value equities with dividend discount models.",
      "Apply price multiples and the Gordon growth model.",
    ],
    syllabusAreas: [
      area("Markets & indices", [
        "Market organisation and order types",
        "Index construction and weighting",
        "Forms of market efficiency",
      ], "10–12%"),
      area("Analysis", [
        "Industry and competitive analysis",
        "Company and business model analysis",
        "Behavioural anomalies",
      ]),
      area("Valuation", [
        "Dividend discount models",
        "Gordon growth and multistage models",
        "Price and enterprise multiples",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m6-l1",
        "Market organisation and mechanics",
        45,
        [
          "Describe order types and margin transactions.",
          "Explain the roles of market participants.",
        ],
        [
          "Margin amplifies gains and losses through leverage.",
          "Stop and limit orders manage execution price and risk.",
          "A maintenance-margin breach triggers a margin call.",
        ],
        [
          "How is the margin call price computed?",
          "When would a limit order fail to execute?",
        ],
        "Buying $10,000 of stock with 50% initial margin means $5,000 equity; if maintenance margin is 25%, the call price is where equity falls to 25% of value."
      ),
      lesson(
        "cfa-l1-m6-l2",
        "Security indices and market efficiency",
        50,
        [
          "Compare price-, value- and equal-weighted indices.",
          "Distinguish weak, semi-strong and strong-form efficiency.",
        ],
        [
          "Price-weighted indices overweight high-priced shares.",
          "Semi-strong efficiency implies public information is already priced.",
          "Anomalies challenge but do not disprove efficiency.",
        ],
        [
          "Why does equal weighting require periodic rebalancing?",
          "Which form of efficiency rules out fundamental analysis alpha?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m6-l3",
        "Industry and company analysis",
        50,
        [
          "Apply a framework such as Porter's five forces.",
          "Analyse a company's competitive position and business model.",
        ],
        [
          "Industry structure shapes long-run profitability.",
          "Competitive advantage can be cost- or differentiation-based.",
          "Life-cycle stage affects growth and margin expectations.",
        ],
        [
          "How does high barrier to entry support margins?",
          "What signals a durable competitive advantage?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m6-l4",
        "Dividend discount valuation",
        55,
        [
          "Apply the Gordon growth model.",
          "Value a stock with a multistage DDM.",
        ],
        [
          "The Gordon model assumes a constant perpetual growth rate.",
          "Value is highly sensitive to the required return and growth spread.",
          "Multistage models handle changing growth phases.",
        ],
        [
          "Why is the Gordon model unstable when g approaches r?",
          "When is a multistage model preferred?",
        ],
        "A stock paying a $2 dividend growing 4% forever with a 10% required return is worth $2(1.04)/(0.10 − 0.04) = $34.67."
      ),
      lesson(
        "cfa-l1-m6-l5",
        "Price multiples and relative valuation",
        50,
        [
          "Compute and interpret P/E, P/B, P/S and EV/EBITDA.",
          "Explain justified multiples from fundamentals.",
        ],
        [
          "Justified P/E links to payout, growth and required return.",
          "EV/EBITDA is capital-structure neutral.",
          "Multiples require comparable peers to be meaningful.",
        ],
        [
          "Why is EV/EBITDA useful for comparing leveraged firms?",
          "How does higher growth justify a higher P/E?",
        ],
        "A justified leading P/E equals payout ratio / (r − g); with 40% payout, 10% return and 4% growth, P/E = 0.40/0.06 = 6.7×."
      ),
    ],
    frameworksAndFormulas: [
      "Gordon growth: V0 = D1 / (r − g).",
      "Justified leading P/E = payout / (r − g).",
      "EV = market cap + debt − cash.",
      "Margin call price = P0 × (1 − initial margin) / (1 − maintenance margin).",
    ],
    commonTraps: [
      "Applying trailing payout to a leading P/E formula.",
      "Ignoring capital structure when comparing P/E across firms.",
      "Assuming anomalies guarantee exploitable profits.",
    ],
    examTechnique: [
      "Check whether a multiple is trailing or leading.",
      "Confirm g < r before using the Gordon model.",
      "Use EV multiples when leverage differs across comparables.",
    ],
    practicePlan: [
      "Value the same stock with DDM and multiples and reconcile.",
      "Practise margin-call computations.",
      "Classify five real firms by competitive advantage type.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Equity Investments readings.",
      "Damodaran, 'Investment Valuation'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m7",
    examId: "cfa",
    levelId: "l1",
    title: "Fixed Income",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 42,
    overview:
      "Introduces bond features, pricing, yield measures, the term structure, credit analysis, and securitised products, plus interest-rate risk measured through duration and convexity.",
    whyItMatters:
      "Bonds dominate global capital markets and anchor discount rates for all assets. Duration and credit fundamentals learned here recur in risk management and portfolio construction.",
    learningOutcomes: [
      "Describe bond features, cash-flow structures and embedded options.",
      "Price bonds and compute yield measures.",
      "Explain spot rates, forward rates and the yield curve.",
      "Measure interest-rate risk using duration and convexity.",
      "Analyse credit risk and rating factors.",
      "Describe asset-backed and mortgage-backed securities.",
    ],
    syllabusAreas: [
      area("Bond basics & pricing", [
        "Features, indentures and embedded options",
        "Pricing and yield measures",
        "Spot, forward and par curves",
      ], "10–12%"),
      area("Interest-rate risk", [
        "Macaulay, modified and effective duration",
        "Convexity and price-yield relationship",
        "Money duration and duration of a portfolio",
      ]),
      area("Credit & structured", [
        "Credit analysis and ratings",
        "Yield spreads and default risk",
        "Securitisation, ABS and MBS",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m7-l1",
        "Bond features and cash-flow structures",
        45,
        [
          "Describe coupon structures, embedded options and covenants.",
          "Explain how embedded options affect risk.",
        ],
        [
          "Callable bonds benefit the issuer; putable bonds benefit the holder.",
          "Covenants constrain issuer behaviour to protect lenders.",
          "Floating-rate notes reset coupons to a reference rate.",
        ],
        [
          "Why does a call feature raise yield relative to a straight bond?",
          "How do covenants reduce credit risk?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m7-l2",
        "Bond pricing and yield measures",
        55,
        [
          "Price a bond from its cash flows and required yield.",
          "Compute yield to maturity and current yield.",
        ],
        [
          "Price and yield move inversely.",
          "YTM assumes reinvestment at the YTM and holding to maturity.",
          "Bonds trade at premium, par or discount relative to the coupon vs yield.",
        ],
        [
          "Why does a discount bond's price rise toward par over time?",
          "What reinvestment assumption underlies YTM?",
        ],
        "A 3-year 5% annual-coupon bond priced to yield 6% is worth 5/1.06 + 5/1.06² + 105/1.06³ = $97.33, a discount because the coupon is below the yield."
      ),
      lesson(
        "cfa-l1-m7-l3",
        "The term structure: spot and forward rates",
        50,
        [
          "Derive forward rates from spot rates.",
          "Value a bond using spot rates.",
        ],
        [
          "Spot rates discount single future cash flows.",
          "Forward rates are implied by successive spot rates.",
          "Arbitrage links the par, spot and forward curves.",
        ],
        [
          "How is a one-year forward rate one year out computed?",
          "Why can pricing off YTM misvalue a bond?",
        ],
        "If the 1-year spot is 3% and the 2-year spot is 4%, the 1y1y forward ≈ (1.04²/1.03) − 1 = 5.01%."
      ),
      lesson(
        "cfa-l1-m7-l4",
        "Duration, convexity and interest-rate risk",
        55,
        [
          "Compute modified and effective duration.",
          "Estimate price change using duration and convexity.",
        ],
        [
          "Modified duration approximates the percentage price change per 1% yield move.",
          "Convexity corrects the linear duration estimate for large moves.",
          "Effective duration is used for bonds with embedded options.",
        ],
        [
          "Why is convexity beneficial to a bondholder?",
          "When must effective (not modified) duration be used?",
        ],
        "A bond with modified duration 7 and convexity 60 facing a +1% yield change falls approximately −7 × 0.01 + 0.5 × 60 × 0.01² = −6.7%."
      ),
      lesson(
        "cfa-l1-m7-l5",
        "Credit analysis and securitised products",
        50,
        [
          "Analyse the drivers of credit ratings and spreads.",
          "Describe the structure of ABS and MBS.",
        ],
        [
          "Credit spread compensates for default and liquidity risk.",
          "Securitisation pools assets and tranches cash flows by seniority.",
          "Prepayment risk is central to mortgage-backed securities.",
        ],
        [
          "How does subordination protect senior tranches?",
          "Why does prepayment hurt MBS investors when rates fall?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Bond price = Σ coupon/(1 + y)^t + par/(1 + y)^n.",
      "%ΔPrice ≈ −ModDur × Δy + 0.5 × Convexity × Δy².",
      "Forward rate: (1 + z2)² = (1 + z1)(1 + 1f1).",
      "Money duration = ModDur × full price.",
    ],
    commonTraps: [
      "Using modified duration for bonds with embedded options.",
      "Ignoring the convexity term for large yield moves.",
      "Confusing spot and forward rates when valuing cash flows.",
    ],
    examTechnique: [
      "Confirm compounding convention (annual vs semiannual) before pricing.",
      "Include the convexity adjustment when the yield change is large.",
      "Use effective duration/convexity whenever optionality is present.",
    ],
    practicePlan: [
      "Price bonds at a discount, par and premium to see the pull-to-par.",
      "Practise 10 duration/convexity price-change estimates.",
      "Bootstrap a spot curve and derive forward rates.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Fixed Income readings.",
      "Fabozzi, 'Bond Markets, Analysis, and Strategies'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m8",
    examId: "cfa",
    levelId: "l1",
    title: "Derivatives",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Introduces forwards, futures, swaps and options, their payoffs, pricing by no-arbitrage and the binomial model, plus the mechanics of derivative markets.",
    whyItMatters:
      "Derivatives are core tools for hedging and expressing views efficiently. The no-arbitrage logic learned here underpins valuation across asset classes.",
    learningOutcomes: [
      "Describe forwards, futures, swaps and options and their uses.",
      "Explain the no-arbitrage pricing of forwards and futures.",
      "Compute option payoffs and moneyness.",
      "Apply put-call parity.",
      "Value options with a one-period binomial model.",
      "Distinguish exchange-traded from OTC derivatives.",
    ],
    syllabusAreas: [
      area("Instruments & markets", [
        "Forwards, futures and swaps",
        "Option types and payoffs",
        "Exchange-traded vs OTC structures",
      ], "5–8%"),
      area("Pricing by no-arbitrage", [
        "Forward pricing and cost of carry",
        "Put-call parity",
        "Binomial option pricing",
      ]),
      area("Applications", [
        "Hedging with derivatives",
        "Synthetic positions",
        "Counterparty and margin considerations",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m8-l1",
        "Derivative instruments and markets",
        40,
        [
          "Distinguish forwards, futures, swaps and options.",
          "Compare exchange-traded and OTC features.",
        ],
        [
          "Futures are standardised and marked to market daily.",
          "Swaps exchange cash-flow streams over time.",
          "Options grant a right, not an obligation.",
        ],
        [
          "How does daily settlement reduce counterparty risk?",
          "What distinguishes a forward from a future?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m8-l2",
        "Forward and futures pricing",
        50,
        [
          "Price a forward using cost-of-carry.",
          "Explain the effect of carry costs and benefits.",
        ],
        [
          "Forward price = spot compounded at the risk-free rate, adjusted for carry.",
          "Income (dividends) lowers the forward price; storage costs raise it.",
          "No-arbitrage forces convergence at expiration.",
        ],
        [
          "How do dividends affect an equity forward price?",
          "What arbitrage restores a mispriced forward?",
        ],
        "A non-dividend stock at $100 with a 5% risk-free rate has a 1-year forward price of $100 × 1.05 = $105 by no-arbitrage."
      ),
      lesson(
        "cfa-l1-m8-l3",
        "Option payoffs and moneyness",
        45,
        [
          "Compute call and put payoffs and profits.",
          "Classify options by moneyness.",
        ],
        [
          "A call profits when the underlying exceeds the strike plus premium.",
          "Intrinsic value cannot be negative; time value decays to zero.",
          "Long options have limited loss and asymmetric payoff.",
        ],
        [
          "What is the maximum loss on a long put?",
          "How does time value behave near expiration?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m8-l4",
        "Put-call parity and synthetic positions",
        50,
        [
          "Apply put-call parity to price options and build synthetics.",
          "Construct a synthetic long stock or protective put.",
        ],
        [
          "Put-call parity: S + p = c + PV(X).",
          "Synthetic positions replicate payoffs from combinations.",
          "Violations of parity imply arbitrage.",
        ],
        [
          "How do you build a synthetic call?",
          "What arbitrage exploits a parity violation?",
        ],
        "With S = 50, X = 50, r = 5%, T = 1, c = 6, parity gives p = c + PV(X) − S = 6 + 47.62 − 50 = 3.62."
      ),
      lesson(
        "cfa-l1-m8-l5",
        "One-period binomial option valuation",
        50,
        [
          "Value an option with a one-period binomial tree.",
          "Explain risk-neutral probabilities.",
        ],
        [
          "Risk-neutral valuation discounts expected payoffs at the risk-free rate.",
          "The hedge ratio replicates the option with stock and borrowing.",
          "Real-world probabilities are not needed for pricing.",
        ],
        [
          "Why are risk-neutral probabilities used instead of real ones?",
          "How does the hedge ratio relate to delta?",
        ],
        "With up factor 1.2, down 0.8 and r = 5%, the risk-neutral probability is (1.05 − 0.8)/(1.2 − 0.8) = 0.625, used to value the option's expected payoff."
      ),
    ],
    frameworksAndFormulas: [
      "Forward price F0 = S0(1 + r)^T − FV(income) + FV(cost).",
      "Put-call parity: S0 + p0 = c0 + X/(1 + r)^T.",
      "Risk-neutral prob π = [(1 + r) − d] / (u − d).",
      "Call payoff = max(0, ST − X); put payoff = max(0, X − ST).",
    ],
    commonTraps: [
      "Forgetting to adjust the forward price for dividends or carry.",
      "Mixing up which side benefits from a call vs a put.",
      "Using real-world instead of risk-neutral probabilities in binomial pricing.",
    ],
    examTechnique: [
      "Draw the payoff diagram to reason about profit and loss.",
      "Rearrange put-call parity to isolate the unknown instrument.",
      "Compute the risk-neutral probability first in binomial questions.",
    ],
    practicePlan: [
      "Build 5 payoff diagrams for combined positions.",
      "Solve put-call parity for each of the four unknowns.",
      "Value 5 one-period binomial options.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Derivatives readings.",
      "Hull, 'Options, Futures, and Other Derivatives'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m9",
    examId: "cfa",
    levelId: "l1",
    title: "Alternative Investments",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Surveys hedge funds, private equity, real estate, commodities, infrastructure and digital assets, including their structures, fee models, risk-return characteristics and role in a portfolio.",
    whyItMatters:
      "Alternatives offer diversification and return sources uncorrelated with public markets, but carry illiquidity, complexity and fee drag that analysts must evaluate carefully.",
    learningOutcomes: [
      "Describe categories of alternative investments and their structures.",
      "Explain hedge fund and private equity fee models.",
      "Analyse the risk-return profile of alternatives.",
      "Describe valuation approaches for private and real assets.",
      "Explain the diversification role of alternatives.",
      "Discuss due-diligence and reporting considerations.",
    ],
    syllabusAreas: [
      area("Categories & structures", [
        "Hedge funds and strategies",
        "Private equity and venture capital",
        "Real estate, commodities and infrastructure",
      ], "5–8%"),
      area("Economics of alternatives", [
        "Management and incentive fees",
        "High-water marks and hurdle rates",
        "Fund life cycle and the J-curve",
      ]),
      area("Portfolio role", [
        "Diversification and correlation",
        "Illiquidity and valuation issues",
        "Due diligence and reporting",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m9-l1",
        "Categories of alternative investments",
        40,
        [
          "Distinguish the main alternative asset classes.",
          "Describe common fund structures.",
        ],
        [
          "Alternatives include hedge funds, PE, real assets and digital assets.",
          "Limited partnership structures separate GPs from LPs.",
          "Lock-ups and gates constrain investor liquidity.",
        ],
        [
          "Why do private funds use limited partnership structures?",
          "What is the purpose of a lock-up period?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m9-l2",
        "Fee structures and their impact",
        50,
        [
          "Compute management and incentive fees.",
          "Apply high-water marks and hurdle rates.",
        ],
        [
          "The classic model is '2 and 20' (2% management, 20% performance).",
          "High-water marks prevent double-charging on recovered losses.",
          "Fees materially reduce investor net returns.",
        ],
        [
          "How does a high-water mark protect investors?",
          "Why does a hurdle rate delay incentive fees?",
        ],
        "On a $100m fund earning 15% gross with 2 and 20 fees, management fee is $2m and incentive is 20% × (15m − 2m) = $2.6m, leaving investors ~10.4%."
      ),
      lesson(
        "cfa-l1-m9-l3",
        "Private equity and the J-curve",
        45,
        [
          "Describe the PE fund life cycle.",
          "Explain the J-curve and vintage-year effects.",
        ],
        [
          "Early fees and write-downs create negative early returns.",
          "Value is realised on exits later in the fund's life.",
          "Vintage year affects realised performance dispersion.",
        ],
        [
          "Why do PE returns follow a J-curve?",
          "How does capital being 'called' affect IRR timing?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m9-l4",
        "Real assets and commodities",
        45,
        [
          "Describe real estate and infrastructure investing.",
          "Explain commodity return sources and roll yield.",
        ],
        [
          "Real assets can hedge inflation.",
          "Commodity total return combines spot, roll and collateral yield.",
          "Contango erodes returns via negative roll yield.",
        ],
        [
          "How does contango affect a long commodity futures position?",
          "Why are real assets considered inflation hedges?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m9-l5",
        "Portfolio role, valuation and due diligence",
        45,
        [
          "Explain the diversification benefit of alternatives.",
          "Describe valuation challenges and due-diligence steps.",
        ],
        [
          "Low correlation can improve portfolio efficiency.",
          "Appraisal-based valuations understate true volatility.",
          "Operational due diligence is as important as investment due diligence.",
        ],
        [
          "Why can reported alternative volatility be understated?",
          "What operational risks should due diligence surface?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Net return ≈ gross return − management fee − incentive fee.",
      "Incentive fee = carry % × (profit above hurdle/high-water mark).",
      "Commodity total return = spot + roll + collateral yield.",
    ],
    commonTraps: [
      "Ignoring the impact of fees on net returns.",
      "Treating appraisal-based volatility as economically accurate.",
      "Confusing contango with backwardation.",
    ],
    examTechnique: [
      "Compute fees stepwise: management first, then incentive on the net.",
      "Check whether a high-water mark or hurdle applies before incentive fees.",
      "Link each alternative to its primary diversification rationale.",
    ],
    practicePlan: [
      "Work through 5 fee-calculation examples with and without hurdles.",
      "Summarise each alternative's risk-return-liquidity profile.",
      "Contrast contango and backwardation numerically.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Alternative Investments readings.",
      "CAIA Level I curriculum for deeper coverage.",
    ],
  }),
  courseware({
    moduleId: "cfa-l1-m10",
    examId: "cfa",
    levelId: "l1",
    title: "Portfolio Management",
    examFormat: CFA_L1_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Introduces the portfolio approach, risk and return, modern portfolio theory, the capital asset pricing model, and the portfolio management process including the investment policy statement.",
    whyItMatters:
      "Portfolio management ties every topic together, showing how individual securities combine into efficient portfolios aligned with client objectives and constraints.",
    learningOutcomes: [
      "Explain the portfolio approach and diversification benefits.",
      "Compute portfolio return and risk.",
      "Describe the efficient frontier and the capital market line.",
      "Apply the CAPM and interpret beta.",
      "Explain the steps of the portfolio management process.",
      "Construct the components of an investment policy statement.",
    ],
    syllabusAreas: [
      area("Risk & return", [
        "Portfolio return and variance",
        "Diversification and correlation",
        "Risk aversion and utility",
      ], "8–12%"),
      area("Theory", [
        "Efficient frontier and optimal portfolio",
        "Capital market line and CAPM",
        "Systematic vs unsystematic risk",
      ]),
      area("Process", [
        "Planning, execution and feedback",
        "Investment policy statement",
        "Risk management basics",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l1-m10-l1",
        "Portfolio risk, return and diversification",
        50,
        [
          "Compute expected return and variance of a portfolio.",
          "Explain how correlation drives diversification.",
        ],
        [
          "Portfolio risk falls as asset correlation decreases.",
          "Covariance is the key input beyond individual variances.",
          "Diversification cannot remove systematic risk.",
        ],
        [
          "Why does lower correlation improve diversification?",
          "What risk remains after full diversification?",
        ],
        "Two assets each with 20% volatility and 0.5 correlation, equally weighted, have portfolio σ = √(0.5²·0.04 + 0.5²·0.04 + 2·0.5·0.5·0.5·0.2·0.2) = 17.3%, below 20%."
      ),
      lesson(
        "cfa-l1-m10-l2",
        "The efficient frontier and optimal portfolio",
        50,
        [
          "Describe the efficient frontier and the capital allocation line.",
          "Explain how risk aversion selects the optimal portfolio.",
        ],
        [
          "The efficient frontier offers maximum return per unit of risk.",
          "Adding a risk-free asset creates the capital allocation line.",
          "The optimal portfolio maximises the investor's utility.",
        ],
        [
          "How does the risk-free asset change the opportunity set?",
          "Why do more risk-averse investors hold more of the risk-free asset?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m10-l3",
        "CAPM and the security market line",
        50,
        [
          "Apply the CAPM to estimate required return.",
          "Interpret beta and the security market line.",
        ],
        [
          "CAPM prices only systematic risk (beta).",
          "The SML plots required return against beta.",
          "Assets above the SML are undervalued.",
        ],
        [
          "Why does CAPM ignore unsystematic risk?",
          "What does a beta above 1 imply?",
        ],
        "A stock with beta 1.3, a 3% risk-free rate and a 5% market premium requires 3% + 1.3 × 5% = 9.5%."
      ),
      lesson(
        "cfa-l1-m10-l4",
        "The portfolio management process",
        45,
        [
          "Describe the planning, execution and feedback stages.",
          "Explain the role of rebalancing and monitoring.",
        ],
        [
          "Planning defines objectives and constraints.",
          "Execution builds the portfolio and manages costs.",
          "Feedback monitors, rebalances and evaluates performance.",
        ],
        [
          "Why is the IPS created before security selection?",
          "What triggers a rebalancing decision?",
        ],
        undefined
      ),
      lesson(
        "cfa-l1-m10-l5",
        "The investment policy statement",
        45,
        [
          "Identify return and risk objectives.",
          "Describe the five constraint categories.",
        ],
        [
          "Constraints: liquidity, time horizon, taxes, legal, unique circumstances.",
          "Objectives balance willingness and ability to take risk.",
          "The IPS is a dynamic governing document.",
        ],
        [
          "How do willingness and ability to bear risk interact?",
          "What are the standard IPS constraints?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "CAPM: E(Ri) = rf + βi[E(Rm) − rf].",
      "Portfolio variance (2 assets) = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2.",
      "Sharpe ratio = (Rp − rf) / σp.",
      "IPS mnemonic: Return, Risk + Liquidity, Time, Taxes, Legal, Unique (RR-LTTLU).",
    ],
    commonTraps: [
      "Confusing the CML (total risk) with the SML (systematic risk).",
      "Forgetting the covariance term in portfolio variance.",
      "Setting objectives that ignore ability to bear risk.",
    ],
    examTechnique: [
      "Distinguish CML vs SML by the x-axis (σ vs β).",
      "Take the lower of willingness/ability when they conflict.",
      "List all five constraints when asked about the IPS.",
    ],
    practicePlan: [
      "Compute portfolio risk for varying correlations.",
      "Draft an IPS for a sample individual investor.",
      "Practise CAPM and Sharpe-ratio calculations.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Portfolio Management readings.",
      "Bodie, Kane & Marcus, 'Investments'.",
    ],
  }),

  // ===================================================================
  // LEVEL II
  // ===================================================================
  courseware({
    moduleId: "cfa-l2-m1",
    examId: "cfa",
    levelId: "l2",
    title: "Ethical & Professional Standards",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Reinforces the Code and Standards in nuanced, vignette-based scenarios, adds the application of GIPS composites, and tests the ability to apply multiple standards to interlinked facts within a case.",
    whyItMatters:
      "At Level II ethics questions are embedded in detailed vignettes that require weighing competing facts. Ethics remains a large weight and a proven differentiator for borderline candidates.",
    learningOutcomes: [
      "Apply the Standards to complex, multi-issue vignettes.",
      "Resolve situations where several standards interact.",
      "Evaluate research objectivity and soft-dollar arrangements.",
      "Apply GIPS composite construction and disclosure rules.",
      "Assess compliance systems and supervisory responsibilities.",
      "Recommend corrective actions for identified violations.",
    ],
    syllabusAreas: [
      area("Applying the Standards in context", [
        "Multi-standard vignette analysis",
        "Research independence and soft dollars",
        "Supervisory responsibility",
      ], "10–15%"),
      area("Integrity of capital markets", [
        "Material nonpublic information nuances",
        "Market manipulation cases",
        "Priority of transactions",
      ]),
      area("GIPS in practice", [
        "Composite construction",
        "Required disclosures and presentation",
        "Verification",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m1-l1",
        "Vignette-based application of the Standards",
        50,
        [
          "Extract the relevant facts from a multi-paragraph vignette.",
          "Map each fact to a specific standard.",
        ],
        [
          "Level II tests application, not recall, of the Standards.",
          "Multiple standards can apply to a single vignette.",
          "The compliant action often differs from the intuitive one.",
        ],
        [
          "How do you separate relevant from distractor facts in a vignette?",
          "Which standard governs a research objectivity breach?",
        ],
        "In a vignette, an analyst accepts a company-paid trip and issues a buy rating. Standard I(B) independence and Standard V(A) reasonable basis both apply; disclosure alone does not cure impaired objectivity."
      ),
      lesson(
        "cfa-l2-m1-l2",
        "Research independence and soft dollars",
        45,
        [
          "Evaluate soft-dollar and directed-brokerage arrangements.",
          "Apply the independence and objectivity standard.",
        ],
        [
          "Soft dollars must benefit the client whose commissions generate them.",
          "Gifts from subject companies threaten independence.",
          "Modest gifts from clients may be acceptable with disclosure.",
        ],
        [
          "Whose interest must soft-dollar research serve?",
          "How are client gifts treated versus issuer gifts?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m1-l3",
        "Material nonpublic information and manipulation",
        50,
        [
          "Apply the MNPI standard in ambiguous fact patterns.",
          "Identify information- and transaction-based manipulation.",
        ],
        [
          "Selective disclosure creates MNPI obligations.",
          "The mosaic theory permits combining nonmaterial pieces.",
          "Manipulation can be intent-based even without false statements.",
        ],
        [
          "When does aggregated public data avoid MNPI issues?",
          "What distinguishes legitimate trading from manipulation?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m1-l4",
        "Supervision and compliance systems",
        45,
        [
          "Evaluate supervisory responsibility for subordinates.",
          "Recommend adequate compliance procedures.",
        ],
        [
          "Supervisors must establish and enforce reasonable procedures.",
          "Detecting a violation requires prompt investigation and response.",
          "Delegation does not remove supervisory responsibility.",
        ],
        [
          "What must a supervisor do upon suspecting a violation?",
          "Can responsibility be delegated away?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m1-l5",
        "GIPS composites and disclosures",
        50,
        [
          "Apply composite construction rules.",
          "Identify required GIPS disclosures.",
        ],
        [
          "Composites include all fee-paying discretionary portfolios of a strategy.",
          "Presentation must show a minimum period and benchmark.",
          "Verification is firm-wide, not composite-specific.",
        ],
        [
          "Why must all similar portfolios be included in a composite?",
          "What does GIPS verification cover?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Vignette method: read questions → scan facts → map to standard → select compliant action.",
      "Independence test: could a reasonable person view judgement as impaired?",
      "GIPS composite rule: all fee-paying discretionary portfolios of a strategy included.",
    ],
    commonTraps: [
      "Assuming disclosure cures every conflict.",
      "Applying only one standard when several interact.",
      "Overlooking supervisory responsibility in team scenarios.",
    ],
    examTechnique: [
      "Read the questions before the full vignette to target facts.",
      "Name the standard number in your reasoning.",
      "Ask whether the action is required, recommended or prohibited.",
    ],
    practicePlan: [
      "Complete 10 ethics item sets and review every standard missed.",
      "Re-read the soft-dollar and MNPI sections of the Handbook.",
      "Practise GIPS composite scenarios.",
    ],
    furtherReading: [
      "CFA Institute — Standards of Practice Handbook.",
      "CFA Institute — GIPS Standards.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m2",
    examId: "cfa",
    levelId: "l2",
    title: "Quantitative Methods",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 40,
    overview:
      "Advances to multiple regression, model specification and diagnostics, time-series analysis, and introduces machine-learning and big-data concepts applied to investment problems.",
    whyItMatters:
      "Level II shifts from single-variable statistics to multivariable modelling that underlies factor models, forecasting and modern data-driven investing.",
    learningOutcomes: [
      "Estimate and interpret a multiple regression model.",
      "Diagnose heteroskedasticity, serial correlation and multicollinearity.",
      "Evaluate model specification and functional form.",
      "Model and forecast time series (AR, trend, seasonality).",
      "Explain supervised and unsupervised machine-learning methods.",
      "Describe the big-data and model-building workflow.",
    ],
    syllabusAreas: [
      area("Multiple regression", [
        "Estimation, inference and goodness of fit",
        "Assumption violations and remedies",
        "Model specification errors",
      ], "8–12%"),
      area("Time series", [
        "Trend and autoregressive models",
        "Stationarity and unit roots",
        "Seasonality and cointegration",
      ]),
      area("Machine learning & big data", [
        "Supervised vs unsupervised learning",
        "Overfitting and validation",
        "Data-analysis project steps",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m2-l1",
        "Multiple regression estimation and inference",
        55,
        [
          "Interpret slope coefficients, t-stats and confidence intervals.",
          "Test joint significance with the F-test.",
        ],
        [
          "Each slope measures the effect holding other variables constant.",
          "Adjusted R-squared penalises added regressors.",
          "The F-test evaluates the overall model significance.",
        ],
        [
          "How is a partial slope coefficient interpreted?",
          "Why prefer adjusted R-squared for comparing models?",
        ],
        "In a regression of returns on value and size factors, a value coefficient of 0.4 (t = 3.1) implies a significant 0.4% return per unit of the value factor, holding size constant."
      ),
      lesson(
        "cfa-l2-m2-l2",
        "Regression diagnostics and remedies",
        55,
        [
          "Detect heteroskedasticity, serial correlation and multicollinearity.",
          "Apply appropriate corrections.",
        ],
        [
          "Heteroskedasticity biases standard errors, not coefficients.",
          "Serial correlation inflates t-statistics.",
          "Multicollinearity inflates coefficient standard errors.",
        ],
        [
          "What does the Durbin-Watson statistic detect?",
          "How is multicollinearity diagnosed?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m2-l3",
        "Model specification and functional form",
        45,
        [
          "Identify omitted-variable and functional-form errors.",
          "Use dummy variables and transformations appropriately.",
        ],
        [
          "Omitting a relevant variable biases remaining coefficients.",
          "Log transformations linearise multiplicative relationships.",
          "Dummy variables capture qualitative effects.",
        ],
        [
          "How does an omitted variable bias estimates?",
          "When is a log-linear form appropriate?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m2-l4",
        "Time-series analysis and forecasting",
        55,
        [
          "Estimate trend and autoregressive models.",
          "Test for stationarity and handle unit roots.",
        ],
        [
          "AR models require covariance stationarity.",
          "A unit root implies a random walk that must be differenced.",
          "Seasonality is modelled with lagged seasonal terms.",
        ],
        [
          "Why must a series be stationary before AR modelling?",
          "How is a random walk made stationary?",
        ],
        "An AR(1) model x_t = 0.6 x_{t−1} + ε has a mean-reverting level of 0/(1 − 0.6); a coefficient of 1 would indicate a nonstationary random walk."
      ),
      lesson(
        "cfa-l2-m2-l5",
        "Machine learning and big data",
        50,
        [
          "Distinguish supervised, unsupervised and deep-learning methods.",
          "Explain overfitting and cross-validation.",
        ],
        [
          "Supervised learning uses labelled data for prediction.",
          "Overfitting fits noise and fails out of sample.",
          "Validation and regularisation control overfitting.",
        ],
        [
          "How does cross-validation reduce overfitting risk?",
          "When is unsupervised learning appropriate?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Adjusted R² = 1 − [(1 − R²)(n − 1)/(n − k − 1)].",
      "F-statistic tests all slopes jointly equal zero.",
      "AR(1): x_t = b0 + b1·x_{t−1} + ε_t (needs |b1| < 1).",
      "Mean reversion level = b0 / (1 − b1).",
    ],
    commonTraps: [
      "Interpreting a slope without the 'holding others constant' caveat.",
      "Ignoring nonstationarity before fitting AR models.",
      "Confusing heteroskedasticity (SE bias) with omitted-variable (coefficient bias).",
    ],
    examTechnique: [
      "Read the regression output table headers carefully.",
      "Check the sign and significance together.",
      "For time series, always ask if the series is stationary first.",
    ],
    practicePlan: [
      "Interpret 10 multiple-regression output tables.",
      "Diagnose violations from residual-plot descriptions.",
      "Summarise the ML workflow in one page.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Quantitative Methods (Level II).",
      "Greene, 'Econometric Analysis' (selected chapters).",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m3",
    examId: "cfa",
    levelId: "l2",
    title: "Economics",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Focuses on currency exchange rates and parity conditions, economic growth determinants, and the economics of regulation, applied through vignettes.",
    whyItMatters:
      "Level II economics zeroes in on FX forecasting and growth theory that directly feed capital market expectations and global asset allocation decisions.",
    learningOutcomes: [
      "Apply covered and uncovered interest-rate parity.",
      "Forecast exchange rates using parity and balance-of-payments approaches.",
      "Explain purchasing power parity and the real exchange rate.",
      "Analyse determinants of long-run economic growth.",
      "Evaluate growth accounting and convergence hypotheses.",
      "Assess the economics and effects of regulation.",
    ],
    syllabusAreas: [
      area("Currency exchange rates", [
        "Covered and uncovered interest-rate parity",
        "Purchasing power parity",
        "FX forecasting approaches",
      ], "8–12%"),
      area("Economic growth", [
        "Growth accounting and production function",
        "Convergence hypotheses",
        "Sources of sustainable growth",
      ]),
      area("Regulation", [
        "Rationale for regulation",
        "Regulatory tools and effects",
        "Cost-benefit of regulation",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m3-l1",
        "Interest-rate parity and forward pricing",
        55,
        [
          "Apply covered interest-rate parity to price forwards.",
          "Explain uncovered parity and the carry trade.",
        ],
        [
          "Covered parity is an arbitrage condition and holds tightly.",
          "Uncovered parity is an expectation and often fails short-term.",
          "The carry trade exploits uncovered parity's empirical failure.",
        ],
        [
          "Why does covered parity hold more reliably than uncovered?",
          "What risk does a carry trade bear?",
        ],
        "If domestic rate is 5% and foreign 2%, the domestic currency trades at a forward discount of about 3% under covered interest-rate parity."
      ),
      lesson(
        "cfa-l2-m3-l2",
        "Purchasing power parity and the real exchange rate",
        45,
        [
          "Apply absolute and relative PPP.",
          "Interpret the real exchange rate.",
        ],
        [
          "Relative PPP links exchange-rate change to inflation differentials.",
          "PPP holds better over long horizons.",
          "Real exchange rate adjusts for relative price levels.",
        ],
        [
          "Why does PPP fail in the short run?",
          "How does higher relative inflation affect the currency?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m3-l3",
        "FX forecasting frameworks",
        50,
        [
          "Combine parity, balance-of-payments and asset-market approaches.",
          "Assess the reliability of forecasting methods.",
        ],
        [
          "No single approach forecasts FX reliably.",
          "Capital flows can dominate trade flows short term.",
          "Policy and risk sentiment drive safe-haven currencies.",
        ],
        [
          "How do capital flows affect exchange rates?",
          "Why are FX forecasts inherently uncertain?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m3-l4",
        "Determinants of economic growth",
        50,
        [
          "Apply growth accounting and the production function.",
          "Evaluate convergence hypotheses.",
        ],
        [
          "Growth comes from labour, capital and total factor productivity.",
          "Diminishing returns limit capital-only growth.",
          "Convergence predicts poorer economies grow faster.",
        ],
        [
          "Why is TFP crucial to sustainable growth?",
          "What conditions support convergence?",
        ],
        "In a Cobb-Douglas function, if capital's share is 0.3 and capital grows 6% while labour grows 1% and TFP 1%, output growth ≈ 1% + 0.3×6% + 0.7×1% = 3.5%."
      ),
      lesson(
        "cfa-l2-m3-l5",
        "The economics of regulation",
        40,
        [
          "Explain the rationale and tools of regulation.",
          "Assess the costs and benefits of regulation.",
        ],
        [
          "Regulation addresses externalities and information asymmetry.",
          "Regulatory capture undermines intended benefits.",
          "Costs include compliance and unintended distortions.",
        ],
        [
          "When does regulation improve market outcomes?",
          "What is regulatory capture?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Covered parity: F/S = (1 + r_domestic)/(1 + r_foreign).",
      "Relative PPP: %ΔS ≈ inflation_domestic − inflation_foreign.",
      "Growth accounting: %ΔY = %ΔTFP + α%ΔK + (1 − α)%ΔL.",
    ],
    commonTraps: [
      "Reversing the base/price currency in parity formulas.",
      "Expecting uncovered parity to hold precisely short-term.",
      "Ignoring TFP when explaining sustainable growth.",
    ],
    examTechnique: [
      "Track which currency is the price currency throughout.",
      "State whether a parity is arbitrage (covered) or expectation (uncovered).",
      "Use growth accounting shares that sum to one.",
    ],
    practicePlan: [
      "Solve 10 covered-parity forward problems.",
      "Practise growth-accounting decompositions.",
      "Summarise each FX forecasting approach's strengths.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Economics (Level II).",
      "Barro & Sala-i-Martin, 'Economic Growth'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m4",
    examId: "cfa",
    levelId: "l2",
    title: "Financial Statement Analysis",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 45,
    overview:
      "Deepens analysis of intercorporate investments, business combinations, employee benefits and pensions, multinational operations, and financial-reporting quality, applied in vignettes.",
    whyItMatters:
      "Level II tests the adjustments analysts must make to reported numbers—consolidations, pensions and currency translation—to derive comparable, decision-useful figures.",
    learningOutcomes: [
      "Account for intercorporate investments across classifications.",
      "Analyse business combinations and consolidation.",
      "Evaluate defined-benefit pension reporting.",
      "Translate foreign-currency financial statements.",
      "Assess financial-reporting quality and manipulation risk.",
      "Adjust statements for analytical comparability.",
    ],
    syllabusAreas: [
      area("Intercorporate investments", [
        "Financial assets, associates and joint ventures",
        "Equity method vs consolidation",
        "Business combinations and goodwill",
      ], "10–15%"),
      area("Pensions & multinational", [
        "Defined-benefit obligation and expense",
        "Currency translation (current-rate vs temporal)",
        "Hyperinflationary economies",
      ]),
      area("Reporting quality", [
        "Earnings quality spectrum",
        "Warning signs and screens",
        "Analytical adjustments",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m4-l1",
        "Intercorporate investments",
        55,
        [
          "Classify investments and apply the correct accounting.",
          "Contrast the equity method with consolidation.",
        ],
        [
          "Influence level determines the accounting method.",
          "The equity method reports a single line; consolidation grosses up.",
          "Fair-value vs equity choice affects reported earnings and ratios.",
        ],
        [
          "How does significant influence change accounting?",
          "Why does consolidation inflate revenue vs the equity method?",
        ],
        "A 30% stake accounted for under the equity method reports 30% of investee net income as one line, whereas consolidation would combine 100% of revenue with a non-controlling interest."
      ),
      lesson(
        "cfa-l2-m4-l2",
        "Business combinations and goodwill",
        55,
        [
          "Apply the acquisition method.",
          "Measure and test goodwill for impairment.",
        ],
        [
          "Goodwill equals purchase price above fair value of net identifiable assets.",
          "Goodwill is not amortised but tested for impairment.",
          "Non-controlling interest is measured at fair value or proportionate share.",
        ],
        [
          "How is goodwill computed in an acquisition?",
          "When is goodwill impaired?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m4-l3",
        "Pensions and post-employment benefits",
        55,
        [
          "Compute defined-benefit obligation and periodic cost.",
          "Analyse the effect of actuarial assumptions.",
        ],
        [
          "Funded status = plan assets − defined-benefit obligation.",
          "A higher discount rate lowers the obligation.",
          "Remeasurements flow through OCI under IFRS.",
        ],
        [
          "How does the discount rate affect the pension obligation?",
          "Where do actuarial gains/losses appear?",
        ],
        "Raising the discount rate from 4% to 5% reduces the present value of pension obligations, improving funded status without any change in the underlying promises."
      ),
      lesson(
        "cfa-l2-m4-l4",
        "Multinational operations and currency translation",
        55,
        [
          "Apply the current-rate and temporal methods.",
          "Analyse translation effects on ratios.",
        ],
        [
          "Functional currency selection drives the method.",
          "Current-rate method uses ending rates and CTA in equity.",
          "Temporal method remeasures monetary items and hits income.",
        ],
        [
          "How does the temporal method affect reported net income?",
          "Where does the translation adjustment appear under the current-rate method?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m4-l5",
        "Financial-reporting quality",
        50,
        [
          "Place reporting on the quality spectrum.",
          "Apply screens for manipulation risk.",
        ],
        [
          "Quality spans from high-quality decision-useful to fraudulent.",
          "Beneish M-score and accruals screens flag manipulation risk.",
          "Cash flow vs earnings divergence is a key warning sign.",
        ],
        [
          "What distinguishes earnings quality from reporting quality?",
          "Which screens detect manipulation risk?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Goodwill = purchase price − FV of net identifiable assets acquired.",
      "Funded status = plan assets − PBO/DBO.",
      "Current-rate method: assets/liabilities at ending rate, CTA in equity.",
      "Beneish M-score combines eight ratios to flag manipulation.",
    ],
    commonTraps: [
      "Mixing IFRS and US GAAP pension and impairment rules.",
      "Applying the wrong translation method for the functional currency.",
      "Comparing equity-method and consolidated firms without adjustment.",
    ],
    examTechnique: [
      "Identify the functional currency before choosing a translation method.",
      "State whether IFRS or US GAAP governs.",
      "Adjust reported figures before ratio comparisons.",
    ],
    practicePlan: [
      "Work through one consolidation and one equity-method example.",
      "Compute funded status under different discount rates.",
      "Translate a subsidiary under both methods.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Financial Statement Analysis (Level II).",
      "Robinson et al., 'International Financial Statement Analysis'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m5",
    examId: "cfa",
    levelId: "l2",
    title: "Corporate Issuers",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Extends corporate finance to capital structure theory, analysis of dividends and share repurchases, corporate restructurings, ESG considerations and business models in a vignette context.",
    whyItMatters:
      "These decisions—leverage, payout and restructuring—materially affect firm value and are frequently examined alongside equity valuation in Level II vignettes.",
    learningOutcomes: [
      "Apply Modigliani-Miller propositions to capital structure.",
      "Evaluate dividend policy and share-repurchase decisions.",
      "Analyse corporate restructurings and their value effects.",
      "Assess ESG factors in issuer analysis.",
      "Evaluate the impact of leverage on value and risk.",
      "Analyse business models and competitive dynamics.",
    ],
    syllabusAreas: [
      area("Capital structure", [
        "Modigliani-Miller with and without taxes",
        "Costs of financial distress",
        "Static trade-off and pecking order",
      ], "5–10%"),
      area("Payout policy", [
        "Dividends vs repurchases",
        "Signalling and clientele effects",
        "Payout sustainability",
      ]),
      area("Restructuring & ESG", [
        "M&A, divestitures and spin-offs",
        "Valuation effects of restructuring",
        "ESG integration in analysis",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m5-l1",
        "Capital structure theory",
        55,
        [
          "Apply MM propositions with and without taxes.",
          "Explain the static trade-off theory.",
        ],
        [
          "Without taxes, capital structure is irrelevant to value (MM I).",
          "Interest tax shields add value up to distress-cost limits.",
          "Pecking order ranks internal funds, debt, then equity.",
        ],
        [
          "How do taxes make debt value-enhancing?",
          "Why might firms prefer internal financing?",
        ],
        "Adding $100 of perpetual debt at a 25% tax rate creates a tax shield worth 0.25 × $100 = $25 of firm value under MM with taxes."
      ),
      lesson(
        "cfa-l2-m5-l2",
        "Dividends and share repurchases",
        50,
        [
          "Compare cash dividends and repurchases.",
          "Explain signalling and clientele effects.",
        ],
        [
          "Repurchases and dividends are equivalent under ideal conditions.",
          "Repurchases offer flexibility and tax efficiency.",
          "Dividend changes signal management's confidence.",
        ],
        [
          "Why can a repurchase be more tax-efficient than a dividend?",
          "What does a dividend cut signal?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m5-l3",
        "Corporate restructuring",
        45,
        [
          "Analyse M&A, divestitures and spin-offs.",
          "Evaluate value creation from restructuring.",
        ],
        [
          "Synergies must exceed the acquisition premium to add value.",
          "Spin-offs can unlock value by improving focus.",
          "Method of payment affects risk sharing.",
        ],
        [
          "When does an acquisition destroy value?",
          "How can a spin-off create value?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m5-l4",
        "ESG integration in issuer analysis",
        40,
        [
          "Identify material ESG factors for an issuer.",
          "Incorporate ESG into financial analysis.",
        ],
        [
          "Materiality varies by industry.",
          "ESG risks can affect cost of capital and cash flows.",
          "Governance quality is often the most financially material factor.",
        ],
        [
          "Why is ESG materiality industry-specific?",
          "How can weak governance raise the cost of capital?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m5-l5",
        "Leverage, distress and business models",
        45,
        [
          "Quantify the value effect of leverage.",
          "Relate business model to financing capacity.",
        ],
        [
          "Optimal leverage balances tax shields and distress costs.",
          "Stable cash flows support higher leverage.",
          "Business model determines sustainable payout and financing.",
        ],
        [
          "Why can utilities sustain higher leverage than tech firms?",
          "How does cash-flow volatility limit debt capacity?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "MM with taxes: VL = VU + t·D.",
      "After-tax cost of debt = rd(1 − t).",
      "Total payout = dividends + repurchases.",
      "Synergy value must exceed acquisition premium for value creation.",
    ],
    commonTraps: [
      "Applying no-tax MM conclusions to a taxed world.",
      "Treating dividends and repurchases as always different in value.",
      "Ignoring distress costs when advocating more debt.",
    ],
    examTechnique: [
      "State the MM assumptions the vignette relaxes.",
      "Compare payout methods on an after-tax basis.",
      "Link ESG factors to specific valuation inputs.",
    ],
    practicePlan: [
      "Compute levered value under MM with taxes.",
      "Analyse one repurchase vs dividend scenario.",
      "Evaluate a sample M&A for value creation.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Corporate Issuers (Level II).",
      "Berk & DeMarzo, 'Corporate Finance'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m6",
    examId: "cfa",
    levelId: "l2",
    title: "Equity Valuation",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 55,
    overview:
      "The core of Level II: applies discounted-dividend, free-cash-flow, residual-income and market-based valuation models, plus private-company valuation, within detailed vignettes.",
    whyItMatters:
      "Equity valuation carries a large weight and integrates accounting, economics and quantitative tools into defensible price estimates—central to the analyst role.",
    learningOutcomes: [
      "Apply multistage dividend discount models.",
      "Value equity using free cash flow to firm and to equity.",
      "Apply the residual-income model.",
      "Use price and enterprise multiples with justified fundamentals.",
      "Value private companies and account for discounts.",
      "Select the appropriate model for a given company.",
    ],
    syllabusAreas: [
      area("Present-value models", [
        "Multistage DDM and terminal value",
        "FCFF and FCFE valuation",
        "Sensitivity to growth and discount rates",
      ], "15–20%"),
      area("Residual income & multiples", [
        "Residual-income model and clean surplus",
        "Justified P/E, P/B, EV/EBITDA",
        "Comparables and regression-based multiples",
      ]),
      area("Private company valuation", [
        "Income, market and asset approaches",
        "Discounts for lack of control/marketability",
        "Normalisation of earnings",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m6-l1",
        "Multistage dividend discount models",
        55,
        [
          "Value equity with two- and three-stage DDMs.",
          "Estimate a defensible terminal value.",
        ],
        [
          "Terminal value often dominates the total valuation.",
          "The growth rate must be below the long-run economy growth.",
          "The H-model approximates a linearly declining growth phase.",
        ],
        [
          "Why does terminal value dominate DDM output?",
          "What constrains the terminal growth rate?",
        ],
        "A stock with a $3 dividend growing 12% for three years then 4% forever, discounted at 10%, is valued by discounting the high-growth dividends plus a terminal value using D4/(0.10 − 0.04)."
      ),
      lesson(
        "cfa-l2-m6-l2",
        "Free cash flow valuation (FCFF and FCFE)",
        55,
        [
          "Compute FCFF and FCFE from the financial statements.",
          "Value equity with each measure.",
        ],
        [
          "FCFF is discounted at WACC; FCFE at the cost of equity.",
          "FCFE = FCFF − interest(1 − t) + net borrowing.",
          "FCF models suit firms that pay no or unstable dividends.",
        ],
        [
          "When is FCFE preferred over DDM?",
          "Why is FCFF discounted at WACC?",
        ],
        "Starting from net income of $200, adding back $50 depreciation and non-cash items, subtracting $40 WC investment and $60 capex, and adjusting for after-tax interest yields FCFF for firm valuation."
      ),
      lesson(
        "cfa-l2-m6-l3",
        "Residual-income valuation",
        50,
        [
          "Apply the residual-income model.",
          "Reconcile it with DDM and FCF models.",
        ],
        [
          "Residual income is earnings above the equity charge.",
          "Value = book value + PV of future residual income.",
          "Clean-surplus violations distort the model.",
        ],
        [
          "How does residual income relate to economic profit?",
          "What accounting issue undermines the RI model?",
        ],
        "A firm with $10 book value earning $2 with a 12% equity charge has residual income of $2 − 0.12 × $10 = $0.80, added on a present-value basis to book value."
      ),
      lesson(
        "cfa-l2-m6-l4",
        "Market-based valuation with multiples",
        50,
        [
          "Derive justified multiples from fundamentals.",
          "Apply comparables and enterprise multiples.",
        ],
        [
          "Justified P/E links to payout, growth and required return.",
          "EV/EBITDA neutralises capital structure differences.",
          "Peer selection drives the reliability of comparables.",
        ],
        [
          "Why can EV/EBITDA compare firms with different leverage?",
          "How does growth justify a higher P/B?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m6-l5",
        "Private company valuation",
        50,
        [
          "Apply income, market and asset-based approaches.",
          "Adjust for control and marketability discounts.",
        ],
        [
          "Normalise earnings for owner-specific items.",
          "Discounts for lack of marketability/control reduce value.",
          "Required returns are higher due to illiquidity and risk.",
        ],
        [
          "Why apply a marketability discount to private firms?",
          "How are private-company earnings normalised?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Terminal value = D_(n+1) / (r − g).",
      "FCFE = FCFF − interest(1 − t) + net borrowing.",
      "Residual income = net income − (equity charge × beginning book value).",
      "Justified leading P/E = payout / (r − g).",
    ],
    commonTraps: [
      "Discounting FCFF at the cost of equity instead of WACC.",
      "Setting a terminal growth above the economy's long-run rate.",
      "Ignoring clean-surplus violations in residual income.",
    ],
    examTechnique: [
      "Match the discount rate to the cash-flow definition.",
      "Sanity-check the terminal growth assumption.",
      "Reconcile at least two models when the vignette provides inputs.",
    ],
    practicePlan: [
      "Value one company with DDM, FCFE and residual income and reconcile.",
      "Practise computing FCFF/FCFE from statements.",
      "Build a comparables table with justified multiples.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Equity Valuation (Level II).",
      "Pinto et al., 'Equity Asset Valuation'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m7",
    examId: "cfa",
    levelId: "l2",
    title: "Fixed Income",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 45,
    overview:
      "Advances to the arbitrage-free valuation framework, term-structure models, valuation of bonds with embedded options, credit analysis and credit default swaps within vignettes.",
    whyItMatters:
      "Level II fixed income introduces the models used to value complex, option-embedded and credit-sensitive instruments—the backbone of institutional bond management.",
    learningOutcomes: [
      "Value bonds within an arbitrage-free framework.",
      "Apply binomial interest-rate trees to option-embedded bonds.",
      "Compute option-adjusted spread.",
      "Explain term-structure theories and models.",
      "Analyse credit risk using structural and reduced-form models.",
      "Value and interpret credit default swaps.",
    ],
    syllabusAreas: [
      area("Term structure & valuation", [
        "Arbitrage-free valuation and spot rates",
        "Term-structure theories and models",
        "Binomial interest-rate trees",
      ], "10–15%"),
      area("Bonds with embedded options", [
        "Callable/putable bond valuation",
        "Option-adjusted spread (OAS)",
        "Effective duration and convexity",
      ]),
      area("Credit analysis", [
        "Structural and reduced-form models",
        "Credit spreads and risk",
        "Credit default swaps",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m7-l1",
        "Arbitrage-free valuation",
        55,
        [
          "Value a bond using spot rates in an arbitrage-free framework.",
          "Explain why pricing off a single YTM can misvalue bonds.",
        ],
        [
          "Each cash flow is discounted at its maturity-matched spot rate.",
          "Arbitrage opportunities arise when prices deviate from spot valuation.",
          "The framework underpins all later fixed-income models.",
        ],
        [
          "Why is spot-rate valuation arbitrage-free?",
          "How does stripping/reconstitution enforce no-arbitrage?",
        ],
        "A 2-year 5% bond valued with 1-year spot 3% and 2-year spot 4% gives 5/1.03 + 105/1.04² = $101.9, differing from a naive YTM price."
      ),
      lesson(
        "cfa-l2-m7-l2",
        "Term-structure theories and models",
        50,
        [
          "Compare expectations, liquidity and segmentation theories.",
          "Describe equilibrium and arbitrage-free term-structure models.",
        ],
        [
          "The expectations theory attributes the curve shape to rate forecasts.",
          "The liquidity premium theory adds a term premium.",
          "Arbitrage-free models (e.g., Ho-Lee) fit the observed curve.",
        ],
        [
          "What does a liquidity premium add to forward rates?",
          "How do equilibrium and arbitrage-free models differ?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m7-l3",
        "Valuing bonds with embedded options",
        55,
        [
          "Value callable and putable bonds on a binomial tree.",
          "Decompose value into straight bond and option.",
        ],
        [
          "Value of callable = straight bond − value of call.",
          "Backward induction values the bond at each node.",
          "Higher volatility raises option value.",
        ],
        [
          "Why does a call option reduce the bond's value to the investor?",
          "How does volatility affect embedded-option value?",
        ],
        "On a binomial tree, a callable bond's node values are capped at the call price, so the callable bond is worth less than the otherwise-identical straight bond."
      ),
      lesson(
        "cfa-l2-m7-l4",
        "Option-adjusted spread and effective risk measures",
        50,
        [
          "Compute and interpret OAS.",
          "Use effective duration and convexity for option-embedded bonds.",
        ],
        [
          "OAS removes the option cost from the nominal spread.",
          "Effective duration accounts for changing cash flows.",
          "Callable bonds exhibit negative convexity near the call.",
        ],
        [
          "Why is OAS comparable across option-embedded bonds?",
          "What causes negative convexity in callable bonds?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m7-l5",
        "Credit analysis and credit default swaps",
        50,
        [
          "Apply structural and reduced-form credit models.",
          "Value and interpret single-name CDS.",
        ],
        [
          "Structural models treat equity as a call on firm assets.",
          "Reduced-form models model default as a hazard process.",
          "CDS spread reflects the market price of credit protection.",
        ],
        [
          "How does the Merton model view equity?",
          "What does a widening CDS spread signal?",
        ],
        "If a bond yields 6% and the CDS spread is 2%, the approximate risk-free-equivalent yield is 4%, and buying the bond plus CDS creates a synthetic near-risk-free position."
      ),
    ],
    frameworksAndFormulas: [
      "Arbitrage-free price = Σ CFt / (1 + spot_t)^t.",
      "Callable bond = straight bond − call option value.",
      "Putable bond = straight bond + put option value.",
      "OAS = spread after removing embedded-option cost.",
    ],
    commonTraps: [
      "Using modified duration instead of effective duration for callable bonds.",
      "Forgetting that higher volatility raises option value.",
      "Confusing OAS with nominal spread.",
    ],
    examTechnique: [
      "Build the binomial tree carefully and apply caps/floors at nodes.",
      "Use effective measures whenever optionality is present.",
      "Interpret OAS as the option-removed compensation for risk.",
    ],
    practicePlan: [
      "Value one callable and one putable bond on a two-period tree.",
      "Compute arbitrage-free prices and compare with YTM prices.",
      "Practise CDS valuation and basis interpretation.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Fixed Income (Level II).",
      "Tuckman & Serrat, 'Fixed Income Securities'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m8",
    examId: "cfa",
    levelId: "l2",
    title: "Derivatives",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 32,
    overview:
      "Develops the valuation and pricing of forward commitments (forwards, futures, swaps) and contingent claims (options) using replication, carry arbitrage and the Black-Scholes-Merton model.",
    whyItMatters:
      "Level II derivatives formalise the pricing engines used for hedging and structured products, deepening the no-arbitrage reasoning introduced at Level I.",
    learningOutcomes: [
      "Price forwards and futures using the carry-arbitrage model.",
      "Value interest-rate, currency and equity swaps.",
      "Value options with the binomial and Black-Scholes-Merton models.",
      "Interpret and apply option Greeks.",
      "Explain dynamic delta hedging.",
      "Apply put-call parity and forward parity.",
    ],
    syllabusAreas: [
      area("Forward commitments", [
        "Carry-arbitrage pricing of forwards/futures",
        "Interest-rate, currency and equity swaps",
        "Valuation during the contract's life",
      ], "5–10%"),
      area("Contingent claims", [
        "Binomial option valuation",
        "Black-Scholes-Merton model",
        "Option Greeks and sensitivities",
      ]),
      area("Hedging applications", [
        "Delta and dynamic hedging",
        "Gamma and vega exposure",
        "Structured payoffs",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m8-l1",
        "Carry-arbitrage pricing of forwards and futures",
        50,
        [
          "Price forwards with carry costs and benefits.",
          "Value a forward during its life.",
        ],
        [
          "Forward price compounds spot at the risk-free rate net of carry.",
          "Mark-to-market value changes as spot and time change.",
          "Convenience yield reduces the forward price of commodities.",
        ],
        [
          "How does a dividend yield change an equity forward price?",
          "How is a forward's value computed mid-life?",
        ],
        "An equity index at 4,000 with a 3% risk-free rate and 2% dividend yield has a 1-year forward of 4,000 × (1 + 0.03 − 0.02) = 4,040."
      ),
      lesson(
        "cfa-l2-m8-l2",
        "Swap valuation",
        55,
        [
          "Value interest-rate swaps as bond portfolios.",
          "Price currency and equity swaps.",
        ],
        [
          "A payer swap equals long a floating bond and short a fixed bond.",
          "The swap fixed rate makes initial value zero.",
          "Swap value changes as rates and prices move.",
        ],
        [
          "How is the swap fixed rate determined at initiation?",
          "Why does a swap have zero value at inception?",
        ],
        "The fixed swap rate equals (1 − final discount factor) / (sum of discount factors), setting the present values of the fixed and floating legs equal at initiation."
      ),
      lesson(
        "cfa-l2-m8-l3",
        "Binomial option valuation (multi-period)",
        50,
        [
          "Value options on a two-period binomial tree.",
          "Apply risk-neutral valuation and early exercise.",
        ],
        [
          "Backward induction discounts risk-neutral expected payoffs.",
          "American options may be exercised early when optimal.",
          "The hedge ratio evolves at each node.",
        ],
        [
          "When is early exercise of an American option optimal?",
          "How does the hedge ratio change across nodes?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m8-l4",
        "Black-Scholes-Merton model",
        55,
        [
          "Apply the BSM model to European options.",
          "Explain the model's assumptions and inputs.",
        ],
        [
          "BSM assumes lognormal prices and constant volatility.",
          "Value rises with volatility, time and (for calls) the underlying.",
          "Dividends reduce call value and raise put value.",
        ],
        [
          "How does higher volatility affect option value?",
          "What are the key BSM assumptions?",
        ],
        "Holding other inputs constant, raising implied volatility from 20% to 30% increases both call and put BSM values because payoff dispersion widens."
      ),
      lesson(
        "cfa-l2-m8-l5",
        "Option Greeks and delta hedging",
        50,
        [
          "Interpret delta, gamma, vega, theta and rho.",
          "Explain dynamic delta hedging.",
        ],
        [
          "Delta approximates the option's price sensitivity to the underlying.",
          "Gamma measures how delta changes; it is largest at-the-money.",
          "Delta hedging must be rebalanced as the underlying moves.",
        ],
        [
          "Why must a delta hedge be rebalanced dynamically?",
          "Where is gamma largest?",
        ],
        "A call with delta 0.5 requires shorting 50 shares per 100 calls to be delta-neutral, but as the stock rises the delta grows, forcing additional hedging trades."
      ),
    ],
    frameworksAndFormulas: [
      "Equity forward: F0 = S0(1 + r − q)^T.",
      "Swap fixed rate = (1 − DF_n) / Σ DF_i.",
      "Put-call parity: c0 + PV(X) = p0 + S0.",
      "Delta (call) ≈ N(d1); gamma peaks at-the-money.",
    ],
    commonTraps: [
      "Omitting the dividend/convenience yield from forward pricing.",
      "Forgetting to check early exercise for American options.",
      "Assuming delta is constant when it changes with the underlying.",
    ],
    examTechnique: [
      "Decompose swaps into recognisable bond positions.",
      "Compute risk-neutral probabilities first for binomial trees.",
      "Reason about Greeks qualitatively when exact values aren't required.",
    ],
    practicePlan: [
      "Value one interest-rate swap from discount factors.",
      "Work through a two-period binomial American option.",
      "Practise Greek-sign reasoning for combined positions.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Derivatives (Level II).",
      "Hull, 'Options, Futures, and Other Derivatives'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m9",
    examId: "cfa",
    levelId: "l2",
    title: "Alternative Investments",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Deepens the analysis and valuation of real estate, private equity, commodities and hedge funds, including income and cost approaches, PE exit valuation and hedge-fund performance evaluation.",
    whyItMatters:
      "Level II requires actually valuing alternative assets and analysing their fee-adjusted, risk-adjusted performance—skills demanded in allocation and manager-selection roles.",
    learningOutcomes: [
      "Value income-producing real estate.",
      "Value private-equity portfolio companies and exits.",
      "Analyse commodity pricing and futures returns.",
      "Evaluate hedge-fund strategies and performance.",
      "Adjust performance metrics for fees and biases.",
      "Assess the role of alternatives in allocation.",
    ],
    syllabusAreas: [
      area("Real estate", [
        "Income approach (direct capitalisation, DCF)",
        "Cost and sales-comparison approaches",
        "REIT valuation",
      ], "5–10%"),
      area("Private equity & commodities", [
        "PE valuation and exit routes",
        "Commodity futures returns and roll yield",
        "Term structure of commodity prices",
      ]),
      area("Hedge funds", [
        "Strategy classification",
        "Performance appraisal and biases",
        "Fee-adjusted returns",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m9-l1",
        "Real estate valuation",
        50,
        [
          "Apply direct capitalisation and DCF to real estate.",
          "Value REITs using NAV and funds from operations.",
        ],
        [
          "Value = NOI / capitalisation rate under direct capitalisation.",
          "The cap rate reflects required return minus growth.",
          "FFO adjusts net income for real-estate depreciation.",
        ],
        [
          "How does the cap rate relate to required return and growth?",
          "Why use FFO instead of net income for REITs?",
        ],
        "A property with $1m NOI and an 8% cap rate is valued at $1m / 0.08 = $12.5m under direct capitalisation."
      ),
      lesson(
        "cfa-l2-m9-l2",
        "Private equity valuation",
        50,
        [
          "Value portfolio companies and model exits.",
          "Apply venture-capital and buyout valuation methods.",
        ],
        [
          "Exit value drives PE returns; entry and exit multiples matter.",
          "The VC method discounts exit value at a high target return.",
          "Leverage amplifies buyout equity returns.",
        ],
        [
          "How does exit multiple expansion affect PE returns?",
          "Why do VC required returns exceed public equity?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m9-l3",
        "Commodities and futures returns",
        45,
        [
          "Decompose commodity total return.",
          "Explain the term structure of futures prices.",
        ],
        [
          "Total return = spot + roll + collateral yield.",
          "Backwardation produces positive roll yield.",
          "Storage costs and convenience yield shape the curve.",
        ],
        [
          "How does backwardation benefit a long futures position?",
          "What drives the shape of the futures curve?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m9-l4",
        "Hedge-fund strategies and performance",
        45,
        [
          "Classify hedge-fund strategies.",
          "Adjust performance for biases and fees.",
        ],
        [
          "Survivorship and backfill biases inflate reported returns.",
          "Fees and lock-ups reduce net investor outcomes.",
          "Different strategies have distinct risk exposures.",
        ],
        [
          "How does survivorship bias distort index returns?",
          "Why can reported hedge-fund volatility understate risk?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m9-l5",
        "Alternatives in portfolio allocation",
        40,
        [
          "Assess diversification and risk contributions.",
          "Evaluate liquidity and valuation constraints.",
        ],
        [
          "Illiquidity premia can reward long-horizon investors.",
          "Smoothed valuations understate true correlations.",
          "Allocation must reflect true liquidity needs.",
        ],
        [
          "Why can smoothed returns overstate diversification benefits?",
          "How should illiquidity affect allocation size?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Direct capitalisation: Value = NOI / cap rate.",
      "Cap rate ≈ required return − growth.",
      "Commodity total return = spot + roll + collateral yield.",
      "FFO = net income + depreciation − gains on sales.",
    ],
    commonTraps: [
      "Confusing cap rate with discount rate.",
      "Ignoring survivorship/backfill bias in hedge-fund data.",
      "Treating smoothed valuations as true market volatility.",
    ],
    examTechnique: [
      "Match the valuation approach to the asset and data given.",
      "Adjust reported performance for known biases.",
      "Separate roll yield from spot return in commodity questions.",
    ],
    practicePlan: [
      "Value one property by direct capitalisation and DCF.",
      "Model a simple buyout return with leverage.",
      "Decompose a commodity return into its components.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Alternative Investments (Level II).",
      "CAIA curriculum for supplementary depth.",
    ],
  }),
  courseware({
    moduleId: "cfa-l2-m10",
    examId: "cfa",
    levelId: "l2",
    title: "Portfolio Management",
    examFormat: CFA_L2_FORMAT,
    estimatedStudyHours: 34,
    overview:
      "Extends portfolio theory to multifactor models (APT), the analysis of active portfolio management, measures of active return and risk, trading and execution, and an introduction to economics of the portfolio process.",
    whyItMatters:
      "Level II portfolio management formalises factor investing and active-management measurement—the analytical foundation for constructing and evaluating strategies.",
    learningOutcomes: [
      "Apply the arbitrage pricing theory and multifactor models.",
      "Compute active return, active risk and the information ratio.",
      "Apply the fundamental law of active management.",
      "Analyse factor exposures and attribution.",
      "Evaluate trading strategies and execution costs.",
      "Explain risk-management measures for portfolios.",
    ],
    syllabusAreas: [
      area("Factor models", [
        "APT and multifactor structure",
        "Macroeconomic vs fundamental factors",
        "Factor risk premia",
      ], "5–10%"),
      area("Active management", [
        "Active return and active risk",
        "Information ratio and the fundamental law",
        "Performance attribution",
      ]),
      area("Execution & risk", [
        "Trading costs and strategies",
        "Risk measurement (VaR concepts)",
        "Portfolio construction",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l2-m10-l1",
        "Arbitrage pricing theory and multifactor models",
        55,
        [
          "Apply the APT to estimate expected return.",
          "Distinguish macroeconomic and fundamental factor models.",
        ],
        [
          "APT prices multiple sources of systematic risk.",
          "Factor sensitivities (betas) multiply factor risk premia.",
          "Arbitrage enforces the linear factor relationship.",
        ],
        [
          "How does APT differ from CAPM?",
          "What enforces the APT pricing relationship?",
        ],
        "A stock with factor betas of 1.0 to inflation (premium 2%) and 0.5 to GDP (premium 4%) plus a 3% risk-free rate has expected return 3% + 1.0×2% + 0.5×4% = 7%."
      ),
      lesson(
        "cfa-l2-m10-l2",
        "Active return, active risk and the information ratio",
        50,
        [
          "Compute active return and active risk.",
          "Interpret the information ratio.",
        ],
        [
          "Active return is the portfolio return minus benchmark.",
          "Active risk (tracking error) is the standard deviation of active return.",
          "The information ratio measures active return per unit of active risk.",
        ],
        [
          "How is the information ratio interpreted?",
          "What distinguishes active risk from total risk?",
        ],
        "A manager beating the benchmark by 2% with 4% tracking error has an information ratio of 0.5."
      ),
      lesson(
        "cfa-l2-m10-l3",
        "The fundamental law of active management",
        50,
        [
          "Apply the fundamental law linking skill and breadth.",
          "Explain the transfer coefficient.",
        ],
        [
          "IR ≈ IC × √breadth.",
          "Breadth is the number of independent decisions per year.",
          "The transfer coefficient reflects constraints on implementation.",
        ],
        [
          "How does breadth improve the information ratio?",
          "What reduces the transfer coefficient?",
        ],
        "A manager with an information coefficient of 0.05 making 100 independent bets per year has an expected IR of 0.05 × √100 = 0.5."
      ),
      lesson(
        "cfa-l2-m10-l4",
        "Trading, execution and costs",
        45,
        [
          "Analyse implementation shortfall and trading costs.",
          "Compare execution strategies.",
        ],
        [
          "Implementation shortfall captures explicit and implicit costs.",
          "Market impact rises with order size and urgency.",
          "Execution strategy trades off impact against timing risk.",
        ],
        [
          "What components make up implementation shortfall?",
          "How does urgency affect market impact?",
        ],
        undefined
      ),
      lesson(
        "cfa-l2-m10-l5",
        "Portfolio risk measurement",
        45,
        [
          "Explain value at risk and its variants.",
          "Describe the limitations of VaR.",
        ],
        [
          "VaR estimates a loss threshold at a confidence level.",
          "Parametric, historical and Monte Carlo methods differ in assumptions.",
          "VaR says nothing about losses beyond the threshold.",
        ],
        [
          "What are the three main VaR estimation methods?",
          "Why is VaR alone an incomplete risk measure?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "APT: E(Ri) = rf + Σ βij·(factor risk premium j).",
      "Information ratio = active return / active risk.",
      "Fundamental law: IR ≈ IC × √breadth (× transfer coefficient).",
      "Implementation shortfall = paper return − actual return.",
    ],
    commonTraps: [
      "Confusing total risk with active (tracking) risk.",
      "Ignoring the transfer coefficient in the fundamental law.",
      "Treating VaR as a maximum possible loss.",
    ],
    examTechnique: [
      "Separate systematic factor exposures from residual risk.",
      "Set up the information ratio from its definition.",
      "State the assumptions behind each VaR method.",
    ],
    practicePlan: [
      "Compute expected returns with a two-factor APT model.",
      "Practise information-ratio and fundamental-law problems.",
      "Compare VaR under the three estimation methods.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Portfolio Management (Level II).",
      "Grinold & Kahn, 'Active Portfolio Management'.",
    ],
  }),

  // ===================================================================
  // LEVEL III
  // ===================================================================
  courseware({
    moduleId: "cfa-l3-m1",
    examId: "cfa",
    levelId: "l3",
    title: "Ethical & Professional Standards",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Applies the Code and Standards, the Asset Manager Code and GIPS to portfolio-management and advisory contexts, tested through both constructed-response and item-set questions.",
    whyItMatters:
      "At Level III ethics is examined alongside real portfolio decisions and can appear in essays, where clear justification against the Standards earns marks that decide pass/fail.",
    learningOutcomes: [
      "Apply the Standards to portfolio-management and advisory situations.",
      "Apply the Asset Manager Code of Professional Conduct.",
      "Evaluate GIPS compliance for asset managers.",
      "Resolve conflicts of interest in a fiduciary context.",
      "Justify a compliant course of action in essay form.",
      "Assess soft-dollar, allocation and fairness issues.",
    ],
    syllabusAreas: [
      area("Standards in portfolio context", [
        "Suitability and loyalty to clients",
        "Fair dealing in trade allocation",
        "Performance presentation",
      ], "10–15%"),
      area("Asset Manager Code", [
        "General principles of conduct",
        "Required disclosures and compliance",
        "Client-facing obligations",
      ]),
      area("GIPS for managers", [
        "Composite and pooled-fund provisions",
        "Advertising guidelines",
        "Verification",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m1-l1",
        "Standards in the portfolio-management context",
        50,
        [
          "Apply suitability and loyalty in managing client portfolios.",
          "Resolve trade-allocation fairness issues.",
        ],
        [
          "Suitability is judged against the client's IPS.",
          "Block trades must be allocated fairly across accounts.",
          "Client interests precede the firm's and manager's.",
        ],
        [
          "How is suitability assessed for a discretionary account?",
          "What is fair allocation of a partially filled block order?",
        ],
        "A partially filled block order is allocated pro rata across participating client accounts at the average execution price, preserving fair dealing under Standard III(B)."
      ),
      lesson(
        "cfa-l3-m1-l2",
        "The Asset Manager Code",
        45,
        [
          "Apply the six components of the Asset Manager Code.",
          "Identify required disclosures.",
        ],
        [
          "The Code covers loyalty, investment process, trading, risk, compliance and disclosure.",
          "Managers must place client interests first.",
          "Firm-level adoption differs from individual Standards.",
        ],
        [
          "How does the Asset Manager Code complement the Standards?",
          "What disclosures does the Code require?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m1-l3",
        "Performance presentation and GIPS for managers",
        45,
        [
          "Apply GIPS provisions to composites and pooled funds.",
          "Evaluate compliant advertising.",
        ],
        [
          "GIPS ensures fair, comparable performance presentation.",
          "Pooled-fund provisions extend GIPS coverage.",
          "Advertising guidelines govern abbreviated presentations.",
        ],
        [
          "Why does GIPS require composite-level presentation?",
          "What must a GIPS-compliant advertisement include?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m1-l4",
        "Conflicts of interest and fiduciary duty",
        45,
        [
          "Identify and manage conflicts in advisory roles.",
          "Apply priority-of-transactions and disclosure rules.",
        ],
        [
          "Fiduciary duty requires acting in the client's best interest.",
          "Conflicts must be disclosed in plain language.",
          "Personal trading is subordinate to client trading.",
        ],
        [
          "How should a manager handle a personal position that overlaps clients'?",
          "What conflicts require disclosure?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m1-l5",
        "Writing constructed-response ethics answers",
        50,
        [
          "Structure an essay answer that names the standard and justifies the action.",
          "Avoid common essay pitfalls.",
        ],
        [
          "Essays are graded against command words (identify, justify, determine).",
          "State the standard, the violation and the compliant action concisely.",
          "Bullet-point justifications maximise marks efficiently.",
        ],
        [
          "How should an ethics essay be structured?",
          "Why cite the specific standard in an essay?",
        ],
        "For 'determine whether the manager violated a Standard and justify', a strong answer states the conclusion, names Standard III(A) loyalty, and gives one concise supporting reason."
      ),
    ],
    frameworksAndFormulas: [
      "Command words: identify, describe, determine, justify, calculate.",
      "Fair allocation: pro rata at average price for partial fills.",
      "Asset Manager Code components: loyalty, process, trading, risk, compliance, disclosure.",
    ],
    commonTraps: [
      "Writing long prose instead of targeted, justified points in essays.",
      "Confusing the Asset Manager Code (firm) with the Standards (individual).",
      "Assuming disclosure alone resolves a conflict.",
    ],
    examTechnique: [
      "Answer exactly what the command word asks—no more.",
      "State the conclusion first, then justify.",
      "Cite the standard number to anchor the grader.",
    ],
    practicePlan: [
      "Write 10 timed ethics essay answers and self-mark against command words.",
      "Review the Asset Manager Code components.",
      "Practise trade-allocation fairness scenarios.",
    ],
    furtherReading: [
      "CFA Institute — Standards of Practice Handbook.",
      "CFA Institute — Asset Manager Code of Professional Conduct.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m2",
    examId: "cfa",
    levelId: "l3",
    title: "Behavioral Finance",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Examines behavioural biases of individuals and markets, their effect on portfolio construction and advisor-client relationships, and how to build portfolios that account for or mitigate biases.",
    whyItMatters:
      "Understanding client and market psychology improves advice, IPS construction and expectation-setting—directly relevant to the private-wealth and institutional readings that follow.",
    learningOutcomes: [
      "Contrast traditional and behavioural finance assumptions.",
      "Classify cognitive errors and emotional biases.",
      "Explain how biases affect financial decisions.",
      "Construct portfolios that accommodate or moderate biases.",
      "Classify investors by behavioural type.",
      "Explain behavioural explanations of market anomalies.",
    ],
    syllabusAreas: [
      area("Foundations", [
        "Traditional vs behavioural finance",
        "Utility theory and prospect theory",
        "Bounded rationality",
      ], "5–10%"),
      area("Individual biases", [
        "Cognitive errors (belief and processing)",
        "Emotional biases",
        "Behavioural investor types",
      ]),
      area("Market behaviour", [
        "Behavioural explanations of anomalies",
        "Bubbles and herding",
        "Advisor-client applications",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m2-l1",
        "Traditional vs behavioural finance",
        45,
        [
          "Contrast rational-agent and behavioural models.",
          "Explain prospect theory and loss aversion.",
        ],
        [
          "Traditional finance assumes rational, risk-averse agents.",
          "Prospect theory shows loss aversion and reference dependence.",
          "Bounded rationality limits information processing.",
        ],
        [
          "How does prospect theory differ from expected-utility theory?",
          "What is reference dependence?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m2-l2",
        "Cognitive errors",
        45,
        [
          "Identify belief-perseverance and information-processing biases.",
          "Recommend mitigation strategies.",
        ],
        [
          "Cognitive errors stem from faulty reasoning and can be corrected with education.",
          "Anchoring, availability and representativeness are common.",
          "Conservatism and confirmation biases resist new information.",
        ],
        [
          "How can cognitive errors be mitigated?",
          "What is the representativeness bias?",
        ],
        "An investor anchored to a stock's purchase price refuses to sell at a loss; recognising anchoring, the advisor reframes the decision around forward-looking prospects."
      ),
      lesson(
        "cfa-l3-m2-l3",
        "Emotional biases",
        45,
        [
          "Identify loss aversion, overconfidence and status-quo biases.",
          "Explain why emotional biases are harder to correct.",
        ],
        [
          "Emotional biases arise from feelings and are accommodated, not corrected.",
          "Overconfidence leads to excessive trading and concentration.",
          "Regret aversion causes inertia.",
        ],
        [
          "Why are emotional biases accommodated rather than corrected?",
          "How does overconfidence manifest in portfolios?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m2-l4",
        "Behavioural investor types and portfolio construction",
        50,
        [
          "Classify investors into behavioural types.",
          "Adapt portfolio advice to each type.",
        ],
        [
          "Investor types range from passive preserver to active accumulator.",
          "Advisors moderate cognitive errors and accommodate emotional biases.",
          "Goals-based approaches align portfolios with behavioural tendencies.",
        ],
        [
          "How should advice differ for an active accumulator vs a passive preserver?",
          "When should an advisor moderate rather than accommodate a bias?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m2-l5",
        "Behavioural finance and markets",
        45,
        [
          "Explain behavioural accounts of anomalies and bubbles.",
          "Describe herding and momentum effects.",
        ],
        [
          "Herding and overreaction can produce bubbles and crashes.",
          "Momentum may reflect underreaction to information.",
          "Limits to arbitrage allow mispricing to persist.",
        ],
        [
          "How does herding contribute to bubbles?",
          "Why can mispricings persist despite arbitrageurs?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Cognitive errors → educate/correct; emotional biases → accommodate.",
      "Prospect theory value function: concave in gains, convex in losses.",
      "Behavioural investor types spectrum: preserver → follower → independent → accumulator.",
    ],
    commonTraps: [
      "Trying to 'correct' emotional biases the same way as cognitive errors.",
      "Confusing anchoring with conservatism.",
      "Overlooking limits to arbitrage in explaining anomalies.",
    ],
    examTechnique: [
      "Classify a described bias as cognitive vs emotional first.",
      "State whether to moderate or accommodate in advice questions.",
      "Match investor types to portfolio recommendations.",
    ],
    practicePlan: [
      "Map each named bias to its category and mitigation.",
      "Practise classifying vignette investors by type.",
      "Link two market anomalies to behavioural causes.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Behavioral Finance (Level III).",
      "Pompian, 'Behavioral Finance and Wealth Management'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m3",
    examId: "cfa",
    levelId: "l3",
    title: "Capital Market Expectations",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Covers the formation of expected returns, risks and correlations for asset classes using economic analysis, valuation and quantitative tools, as inputs to asset allocation.",
    whyItMatters:
      "Capital market expectations are the numerical inputs to strategic asset allocation; errors here propagate through the entire portfolio-construction process.",
    learningOutcomes: [
      "Explain the framework for setting capital market expectations.",
      "Apply economic analysis to forecast returns.",
      "Estimate fixed-income, equity and real-estate returns.",
      "Adjust for forecasting biases and data problems.",
      "Use the Grinold-Kroner and building-block approaches.",
      "Incorporate business-cycle analysis into forecasts.",
    ],
    syllabusAreas: [
      area("Framework & pitfalls", [
        "The seven-step CME process",
        "Forecasting challenges and biases",
        "Data quality issues",
      ], "10–15%"),
      area("Economic analysis", [
        "Business cycles and monetary/fiscal policy",
        "Economic growth trends",
        "Inflation and the yield curve",
      ]),
      area("Asset-class forecasts", [
        "Fixed-income expected returns",
        "Equity returns (Grinold-Kroner)",
        "Real estate and currencies",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m3-l1",
        "The CME framework and forecasting pitfalls",
        50,
        [
          "Describe the CME process.",
          "Identify forecasting biases and data problems.",
        ],
        [
          "Good expectations are unbiased, consistent and evidence-based.",
          "Anchoring, status-quo and overconfidence biases distort forecasts.",
          "Data smoothing understates volatility and correlation.",
        ],
        [
          "How does smoothing bias affect estimated volatility?",
          "What makes a set of expectations internally consistent?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m3-l2",
        "Economic analysis and the business cycle",
        50,
        [
          "Relate business-cycle phases to asset returns.",
          "Analyse monetary and fiscal policy effects.",
        ],
        [
          "Different asset classes lead or lag the cycle.",
          "Policy mix shapes growth, inflation and the yield curve.",
          "Taylor rule links policy rates to output and inflation gaps.",
        ],
        [
          "How do equities and bonds behave across the cycle?",
          "What does the Taylor rule prescribe?",
        ],
        "The Taylor rule sets the policy rate = neutral rate + 0.5×(inflation gap) + 0.5×(output gap), giving a benchmark for expected short rates."
      ),
      lesson(
        "cfa-l3-m3-l3",
        "Fixed-income expected returns",
        45,
        [
          "Estimate bond returns using building blocks.",
          "Incorporate the risk-free rate, term and credit premia.",
        ],
        [
          "Expected bond return ≈ yield + roll − expected losses ± valuation change.",
          "Term and credit premia compensate for specific risks.",
          "The yield curve embeds expectations and premia.",
        ],
        [
          "What components build up an expected bond return?",
          "How does roll-down contribute to return?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m3-l4",
        "Equity expected returns: Grinold-Kroner",
        50,
        [
          "Apply the Grinold-Kroner model.",
          "Decompose equity return into its drivers.",
        ],
        [
          "Return = dividend yield − ΔShares + earnings growth + repricing.",
          "Repricing captures P/E expansion or contraction.",
          "The model separates income, growth and valuation effects.",
        ],
        [
          "What are the components of the Grinold-Kroner model?",
          "How does P/E change enter expected return?",
        ],
        "With 2% dividend yield, 1% net buybacks, 4% real earnings growth, 2% inflation and 0% repricing, expected equity return ≈ 2% + 1% + 6% + 0% = 9%."
      ),
      lesson(
        "cfa-l3-m3-l5",
        "Real estate, currencies and combining forecasts",
        45,
        [
          "Estimate real-estate and currency returns.",
          "Combine forecasts into consistent inputs.",
        ],
        [
          "Real-estate returns build from cap rate, growth and reversion.",
          "Currency forecasts draw on parity and capital flows.",
          "Covariances must be estimated consistently with returns.",
        ],
        [
          "How is a real-estate expected return constructed?",
          "Why must correlations be estimated consistently with returns?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Grinold-Kroner: E(R) = DY − ΔS + i + g + ΔP/E.",
      "Taylor rule: r = r* + 0.5(inflation gap) + 0.5(output gap).",
      "Fixed-income build-up: yield + roll − credit losses ± valuation.",
      "Sharpe/Singer-Terhaar for equilibrium risk premia.",
    ],
    commonTraps: [
      "Mixing nominal and real components in Grinold-Kroner.",
      "Ignoring smoothing bias in estimated risk/correlation.",
      "Producing internally inconsistent asset-class forecasts.",
    ],
    examTechnique: [
      "Lay out each building block explicitly before summing.",
      "Keep nominal/real and geometric/arithmetic conventions consistent.",
      "Sanity-check forecasts against equilibrium relationships.",
    ],
    practicePlan: [
      "Apply Grinold-Kroner to two equity markets.",
      "Build up an expected bond return step by step.",
      "Practise Taylor-rule policy-rate estimates.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Capital Market Expectations (Level III).",
      "Ilmanen, 'Expected Returns'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m4",
    examId: "cfa",
    levelId: "l3",
    title: "Asset Allocation & Related Decisions",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 40,
    overview:
      "Covers strategic and tactical asset allocation, the choice of approaches (mean-variance, risk-based, goals-based), the role of the economic balance sheet, liability-relative allocation and rebalancing.",
    whyItMatters:
      "Asset allocation is the dominant driver of long-run portfolio outcomes and is the most heavily weighted Level III topic; it integrates expectations, objectives and constraints.",
    learningOutcomes: [
      "Compare approaches to asset allocation.",
      "Apply mean-variance optimisation and its critiques.",
      "Implement goals-based and liability-relative allocation.",
      "Incorporate the economic balance sheet.",
      "Design rebalancing policies.",
      "Evaluate the effects of constraints and taxes on allocation.",
    ],
    syllabusAreas: [
      area("Frameworks", [
        "Strategic vs tactical allocation",
        "Asset-only, liability-relative and goals-based",
        "Economic balance sheet",
      ], "15–20%"),
      area("Optimisation", [
        "Mean-variance optimisation",
        "Resampling and Black-Litterman",
        "Risk budgeting",
      ]),
      area("Implementation", [
        "Rebalancing policy",
        "Taxes and constraints",
        "Currency and factor considerations",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m4-l1",
        "Approaches to asset allocation",
        50,
        [
          "Compare asset-only, liability-relative and goals-based approaches.",
          "Incorporate the economic balance sheet.",
        ],
        [
          "The economic balance sheet includes human capital and liabilities.",
          "Liability-relative allocation matches assets to obligations.",
          "Goals-based allocation assigns sub-portfolios to goals.",
        ],
        [
          "How does human capital affect optimal allocation?",
          "When is liability-relative allocation appropriate?",
        ],
        "A young investor with bond-like human capital can hold more equities in financial assets because total (economic) balance-sheet risk stays balanced."
      ),
      lesson(
        "cfa-l3-m4-l2",
        "Mean-variance optimisation and its limitations",
        55,
        [
          "Apply mean-variance optimisation.",
          "Critique input sensitivity and remedies.",
        ],
        [
          "MVO maximises return for a given risk using expected returns, variances and correlations.",
          "MVO is highly sensitive to input errors, concentrating weights.",
          "Resampling and Black-Litterman improve robustness.",
        ],
        [
          "Why is MVO sensitive to expected-return inputs?",
          "How does Black-Litterman improve MVO?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m4-l3",
        "Goals-based and liability-relative allocation",
        50,
        [
          "Construct goals-based sub-portfolios.",
          "Apply surplus optimisation for liabilities.",
        ],
        [
          "Each goal gets a required-probability-driven sub-portfolio.",
          "Surplus optimisation manages assets relative to liabilities.",
          "Hedging and return-seeking portfolios split the allocation.",
        ],
        [
          "How are sub-portfolios sized in goals-based investing?",
          "What is surplus at risk?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m4-l4",
        "Rebalancing policy",
        45,
        [
          "Compare calendar and percentage-range rebalancing.",
          "Analyse the cost-benefit of rebalancing.",
        ],
        [
          "Rebalancing controls risk drift back to targets.",
          "Wider corridors suit high transaction costs and low correlation.",
          "Rebalancing is a contrarian, volatility-harvesting strategy.",
        ],
        [
          "What factors widen the optimal rebalancing corridor?",
          "Why is rebalancing implicitly contrarian?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m4-l5",
        "Taxes, constraints and implementation",
        50,
        [
          "Adjust allocation for taxes and constraints.",
          "Incorporate currency and liquidity considerations.",
        ],
        [
          "After-tax return and risk differ from pre-tax.",
          "Asset location places tax-inefficient assets in sheltered accounts.",
          "Constraints (liquidity, regulatory) reshape the efficient set.",
        ],
        [
          "How does asset location add value?",
          "How do constraints alter the efficient frontier?",
        ],
        "Placing high-yield bonds in a tax-deferred account and equities in a taxable account (asset location) improves after-tax wealth without changing the overall allocation."
      ),
    ],
    frameworksAndFormulas: [
      "Utility: U = E(R) − 0.5·λ·σ² (risk-aversion adjusted).",
      "Surplus = assets − liabilities; manage surplus at risk.",
      "After-tax return = pre-tax return × (1 − tax rate) (approx.).",
      "Rebalancing corridor widens with cost and volatility, narrows with correlation.",
    ],
    commonTraps: [
      "Trusting concentrated MVO outputs without robustness checks.",
      "Ignoring liabilities when the mandate is liability-relative.",
      "Forgetting human capital in the economic balance sheet.",
    ],
    examTechnique: [
      "Identify which allocation approach the vignette requires.",
      "State MVO's input-sensitivity weakness when critiquing outputs.",
      "Compute surplus risk for liability-relative questions.",
    ],
    practicePlan: [
      "Build a simple two-asset MVO and stress the inputs.",
      "Design a rebalancing policy for a given cost/volatility profile.",
      "Practise asset-location tax problems.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Asset Allocation (Level III).",
      "Sharpe, 'Asset Allocation' readings.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m5",
    examId: "cfa",
    levelId: "l3",
    title: "Derivatives & Currency Management",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 34,
    overview:
      "Applies derivatives to manage portfolio risk—adjusting equity and fixed-income exposures, managing currency risk, and implementing overlays—within portfolio-management scenarios.",
    whyItMatters:
      "Derivatives overlays let managers efficiently adjust exposures and hedge currency risk without disrupting the underlying portfolio, a core institutional skill.",
    learningOutcomes: [
      "Adjust portfolio beta and duration with futures.",
      "Manage currency exposure with forwards and options.",
      "Implement equitising-cash and cash-equitisation strategies.",
      "Apply option strategies to shape payoffs.",
      "Evaluate the costs and risks of hedging.",
      "Construct currency hedging programmes.",
    ],
    syllabusAreas: [
      area("Exposure management", [
        "Adjusting equity beta with index futures",
        "Adjusting duration with bond futures",
        "Cash equitisation",
      ], "10–15%"),
      area("Currency management", [
        "Strategic hedging decisions",
        "Forward and option hedges",
        "Dynamic hedging and cross-hedging",
      ]),
      area("Option strategies", [
        "Covered calls and protective puts",
        "Collars and spreads",
        "Volatility strategies",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m5-l1",
        "Adjusting equity and fixed-income exposures",
        55,
        [
          "Compute the futures needed to change beta or duration.",
          "Explain the mechanics of the adjustment.",
        ],
        [
          "Number of contracts = (target − current) exposure / futures exposure.",
          "Index futures adjust equity beta cheaply.",
          "Bond futures adjust portfolio duration.",
        ],
        [
          "How many index futures change a portfolio's beta to target?",
          "How do bond futures alter duration?",
        ],
        "To raise a $10m portfolio's beta from 0.9 to 1.1 with an index future worth $250k and beta 1.0, buy (1.1 − 0.9) × 10m / (1.0 × 250k) = 8 contracts."
      ),
      lesson(
        "cfa-l3-m5-l2",
        "Currency risk management",
        55,
        [
          "Decide the strategic hedge ratio.",
          "Implement forward and option currency hedges.",
        ],
        [
          "Hedging decisions balance risk reduction against cost.",
          "Forwards fully hedge but lock in the forward rate.",
          "Options preserve upside at a premium cost.",
        ],
        [
          "When is a full currency hedge appropriate?",
          "Why choose options over forwards for currency hedging?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m5-l3",
        "Cash equitisation and overlays",
        45,
        [
          "Equitise cash to maintain market exposure.",
          "Implement overlay programmes.",
        ],
        [
          "Equitising cash keeps residual balances invested.",
          "Overlays adjust exposures without trading the underlying.",
          "Basis risk arises when the overlay imperfectly matches exposure.",
        ],
        [
          "Why equitise cash balances?",
          "What is basis risk in an overlay?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m5-l4",
        "Option strategies for portfolios",
        50,
        [
          "Construct covered calls, protective puts and collars.",
          "Analyse the payoff and breakeven of each.",
        ],
        [
          "A collar caps upside to fund downside protection.",
          "A protective put insures against losses at a premium.",
          "Covered calls generate income but cap gains.",
        ],
        [
          "What is the breakeven of a covered call?",
          "How does a zero-cost collar work?",
        ],
        "A zero-cost collar buys a protective put funded by selling a call at a strike chosen so the premiums offset, bounding the outcome at low net cost."
      ),
      lesson(
        "cfa-l3-m5-l5",
        "Volatility and advanced strategies",
        45,
        [
          "Apply straddles, strangles and spreads.",
          "Relate strategy choice to a volatility view.",
        ],
        [
          "Long straddles profit from large moves in either direction.",
          "Spreads limit both cost and payoff.",
          "Strategy selection follows the directional and volatility view.",
        ],
        [
          "When is a long straddle appropriate?",
          "How does a bull call spread limit risk and reward?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Contracts = [(target β − current β)/β_futures] × (portfolio value/futures value).",
      "Duration adjustment: N = [(target D − current D)/D_futures] × (portfolio/futures value).",
      "Collar = long put + short call around the holding.",
      "Hedge cost vs benefit drives the optimal hedge ratio.",
    ],
    commonTraps: [
      "Getting the sign of the futures adjustment wrong.",
      "Ignoring basis risk in overlays.",
      "Forgetting that options cost premium relative to forwards.",
    ],
    examTechnique: [
      "Write the contracts formula and plug in carefully.",
      "Draw payoff diagrams for option strategies.",
      "State the volatility/direction view a strategy expresses.",
    ],
    practicePlan: [
      "Compute beta and duration adjustments with futures.",
      "Build payoff diagrams for collars and spreads.",
      "Practise currency-hedge cost-benefit scenarios.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Derivatives & Currency Management (Level III).",
      "Hull, 'Options, Futures, and Other Derivatives'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m6",
    examId: "cfa",
    levelId: "l3",
    title: "Fixed-Income Portfolio Management",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 38,
    overview:
      "Covers liability-driven and index-based fixed-income strategies, yield-curve positioning, credit strategies and the management of interest-rate and credit risk in bond portfolios.",
    whyItMatters:
      "Fixed income anchors most institutional and retirement portfolios; managing duration, curve and credit risk against liabilities is a central portfolio-management competency.",
    learningOutcomes: [
      "Apply liability-driven investing and immunisation.",
      "Construct index-based and enhanced-indexing portfolios.",
      "Position along the yield curve for a rate view.",
      "Implement active credit strategies.",
      "Manage interest-rate and credit risk.",
      "Use derivatives in fixed-income portfolios.",
    ],
    syllabusAreas: [
      area("Liability-driven investing", [
        "Immunisation of single and multiple liabilities",
        "Duration and convexity matching",
        "Contingent immunisation",
      ], "10–15%"),
      area("Index & yield-curve strategies", [
        "Full replication vs enhanced indexing",
        "Curve strategies (bullet, barbell, ladder)",
        "Riding the yield curve",
      ]),
      area("Credit strategies", [
        "Bottom-up and top-down credit",
        "Spread and default management",
        "Derivatives (CDS, futures)",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m6-l1",
        "Liability-driven investing and immunisation",
        55,
        [
          "Immunise single and multiple liabilities.",
          "Explain the conditions for immunisation.",
        ],
        [
          "Immunisation matches asset and liability duration and present value.",
          "Convexity should be minimised subject to matching.",
          "Rebalancing maintains immunisation as time and rates change.",
        ],
        [
          "What three conditions immunise a single liability?",
          "Why minimise convexity dispersion in immunisation?",
        ],
        "To immunise a liability due in 7 years, build a bond portfolio with duration 7, present value equal to the liability, and minimal cash-flow dispersion."
      ),
      lesson(
        "cfa-l3-m6-l2",
        "Index-based and enhanced strategies",
        45,
        [
          "Compare replication approaches.",
          "Apply enhanced-indexing techniques.",
        ],
        [
          "Full replication is costly for large bond indices.",
          "Stratified sampling matches key risk factors.",
          "Enhanced indexing adds small controlled active bets.",
        ],
        [
          "Why is full replication impractical for bond indices?",
          "How does stratified sampling control tracking error?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m6-l3",
        "Yield-curve strategies",
        50,
        [
          "Position bullet, barbell and ladder portfolios.",
          "Exploit a yield-curve view via roll-down.",
        ],
        [
          "Barbells outperform bullets when the curve flattens with more curvature.",
          "Riding the curve captures roll-down in an upward-sloping curve.",
          "Key-rate durations locate exposure along the curve.",
        ],
        [
          "When does a barbell outperform a bullet?",
          "How does riding the yield curve generate return?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m6-l4",
        "Active credit strategies",
        45,
        [
          "Apply bottom-up and top-down credit approaches.",
          "Manage spread and default risk.",
        ],
        [
          "Spread duration measures sensitivity to credit-spread changes.",
          "Sector rotation reflects a top-down credit-cycle view.",
          "Diversification limits idiosyncratic default risk.",
        ],
        [
          "What does spread duration measure?",
          "How does the credit cycle inform positioning?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m6-l5",
        "Derivatives in fixed-income portfolios",
        45,
        [
          "Use futures and swaps to adjust duration.",
          "Apply CDS to manage credit exposure.",
        ],
        [
          "Interest-rate swaps adjust duration efficiently.",
          "CDS transfer credit risk without selling bonds.",
          "Derivatives introduce counterparty and basis risk.",
        ],
        [
          "How can a swap change portfolio duration?",
          "Why use CDS instead of selling a bond?",
        ],
        "Entering a receive-fixed swap adds positive duration to a portfolio, letting a manager lengthen duration without buying cash bonds."
      ),
    ],
    frameworksAndFormulas: [
      "Immunisation: match PV, match duration, minimise dispersion/convexity.",
      "Spread duration ≈ %price change per 1% spread change.",
      "Barbell vs bullet performance depends on curve reshaping.",
      "Receive-fixed swap adds duration; pay-fixed reduces it.",
    ],
    commonTraps: [
      "Matching duration but ignoring present-value matching in immunisation.",
      "Confusing effective duration with spread duration.",
      "Overlooking basis and counterparty risk in derivative overlays.",
    ],
    examTechnique: [
      "State all immunisation conditions, not just duration matching.",
      "Tie curve strategies to the specific reshaping expected.",
      "Identify whether a swap adds or removes duration.",
    ],
    practicePlan: [
      "Build an immunising portfolio for a single liability.",
      "Compare barbell and bullet outcomes under curve moves.",
      "Practise swap-based duration adjustments.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Fixed-Income Portfolio Management (Level III).",
      "Fabozzi, 'Fixed Income Analysis'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m7",
    examId: "cfa",
    levelId: "l3",
    title: "Equity Portfolio Management",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 34,
    overview:
      "Covers the role of equities in portfolios, passive and active equity strategies, factor and style investing, portfolio construction and the management of active risk and cost.",
    whyItMatters:
      "Equities drive long-run growth; choosing between passive, factor and active approaches and constructing portfolios efficiently is central to meeting return objectives.",
    learningOutcomes: [
      "Explain the role of equities in a portfolio.",
      "Compare passive, factor-based and active strategies.",
      "Construct equity portfolios and manage active risk.",
      "Analyse style and factor exposures.",
      "Evaluate the costs of active management.",
      "Apply approaches to portfolio construction.",
    ],
    syllabusAreas: [
      area("Roles & approaches", [
        "Role of equities and segmentation",
        "Passive equity investing",
        "Active equity strategies",
      ], "10–15%"),
      area("Factor & style investing", [
        "Factor-based strategies",
        "Style and smart-beta approaches",
        "Factor risk and return",
      ]),
      area("Construction", [
        "Building blocks and active risk budgeting",
        "Concentration vs diversification",
        "Cost and tax management",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m7-l1",
        "The role of equities and segmentation",
        45,
        [
          "Explain equities' role in meeting objectives.",
          "Segment the equity universe.",
        ],
        [
          "Equities provide growth and inflation protection over long horizons.",
          "Segmentation spans size, style, geography and sector.",
          "The equity allocation reflects risk tolerance and horizon.",
        ],
        [
          "Why do equities suit long-horizon investors?",
          "How is the equity universe segmented?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m7-l2",
        "Passive equity investing",
        45,
        [
          "Compare index-tracking approaches.",
          "Analyse tracking error sources.",
        ],
        [
          "Full replication minimises tracking error but costs more.",
          "Sampling reduces cost with some tracking error.",
          "Index selection drives passive outcomes.",
        ],
        [
          "What causes tracking error in a passive fund?",
          "When is sampling preferred to full replication?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m7-l3",
        "Active and factor-based strategies",
        50,
        [
          "Compare fundamental and quantitative active management.",
          "Apply factor and smart-beta strategies.",
        ],
        [
          "Value, momentum, quality, size and low-volatility are common factors.",
          "Smart beta systematically captures factor premia.",
          "Active managers seek alpha net of fees and costs.",
        ],
        [
          "What distinguishes smart beta from traditional active management?",
          "Which factors are most widely used?",
        ],
        "A multi-factor portfolio overweights cheap (value), rising (momentum) and profitable (quality) stocks to capture several premia while diversifying single-factor risk."
      ),
      lesson(
        "cfa-l3-m7-l4",
        "Portfolio construction and active risk",
        50,
        [
          "Budget active risk across positions.",
          "Balance concentration against diversification.",
        ],
        [
          "Active share and tracking error describe active positioning.",
          "Concentration raises expected alpha and idiosyncratic risk.",
          "Risk budgeting allocates the active-risk budget efficiently.",
        ],
        [
          "How do active share and tracking error differ?",
          "What is the trade-off in concentrating a portfolio?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m7-l5",
        "Costs, taxes and implementation",
        40,
        [
          "Analyse the costs of active management.",
          "Apply tax-aware equity strategies.",
        ],
        [
          "Explicit and implicit costs erode active returns.",
          "Tax-loss harvesting improves after-tax outcomes.",
          "Turnover drives both cost and tax drag.",
        ],
        [
          "How does turnover affect after-tax return?",
          "What is tax-loss harvesting?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Active share measures deviation from the benchmark holdings.",
      "Information ratio = active return / active risk.",
      "Common factors: value, momentum, size, quality, low volatility.",
      "After-tax return declines with turnover and short-term gains.",
    ],
    commonTraps: [
      "Equating high active share with high tracking error.",
      "Assuming factor premia are riskless or constant.",
      "Ignoring tax drag when evaluating active strategies.",
    ],
    examTechnique: [
      "Distinguish active share (holdings) from tracking error (returns).",
      "Match strategy to the stated return/risk/cost objective.",
      "Consider taxes for private-client equity questions.",
    ],
    practicePlan: [
      "Compare passive, factor and active approaches for a mandate.",
      "Analyse a multi-factor portfolio's exposures.",
      "Work a tax-loss-harvesting example.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Equity Portfolio Management (Level III).",
      "Ang, 'Asset Management: A Systematic Approach to Factor Investing'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m8",
    examId: "cfa",
    levelId: "l3",
    title: "Alternative Investment Portfolio Management",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Addresses integrating alternatives into portfolios: the investment case, risk-return characteristics, allocation approaches, monitoring, and the practical issues of illiquidity and manager selection.",
    whyItMatters:
      "Institutional and high-net-worth portfolios increasingly allocate to alternatives; managing their liquidity, valuation and diversification role is a growing part of the profession.",
    learningOutcomes: [
      "Make the investment case for alternatives in a portfolio.",
      "Analyse risk-return characteristics and correlations.",
      "Apply allocation approaches suited to alternatives.",
      "Address liquidity and valuation challenges.",
      "Monitor alternative allocations.",
      "Evaluate manager selection and fees.",
    ],
    syllabusAreas: [
      area("Investment case", [
        "Diversification and return sources",
        "Risk-return characteristics",
        "Correlation and non-normal returns",
      ], "5–10%"),
      area("Allocation", [
        "Approaches to sizing alternatives",
        "Liquidity-aware allocation",
        "Risk factor perspective",
      ]),
      area("Implementation & monitoring", [
        "Manager selection and fees",
        "Valuation and reporting",
        "Ongoing monitoring",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m8-l1",
        "The investment case for alternatives",
        45,
        [
          "Explain diversification and return rationales.",
          "Analyse non-normal return characteristics.",
        ],
        [
          "Alternatives can add uncorrelated return sources.",
          "Return distributions often exhibit skew and fat tails.",
          "Illiquidity premia may reward patient capital.",
        ],
        [
          "Why can alternatives improve portfolio efficiency?",
          "How do non-normal returns complicate risk measurement?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m8-l2",
        "Risk-return analysis of alternatives",
        45,
        [
          "Adjust reported returns for smoothing and biases.",
          "Analyse tail and liquidity risk.",
        ],
        [
          "Appraisal smoothing understates volatility and correlation.",
          "Downside and tail measures supplement standard deviation.",
          "Liquidity risk is a distinct dimension.",
        ],
        [
          "How does smoothing bias affect risk estimates?",
          "Why supplement volatility with tail measures?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m8-l3",
        "Allocation approaches for alternatives",
        50,
        [
          "Size alternative allocations under liquidity constraints.",
          "Apply a risk-factor lens to allocation.",
        ],
        [
          "Liquidity budgeting limits illiquid allocations.",
          "Risk-factor analysis reveals hidden common exposures.",
          "Monte Carlo helps model illiquid cash-flow paths.",
        ],
        [
          "How does a liquidity budget constrain allocation?",
          "What can a risk-factor view reveal about alternatives?",
        ],
        "A pension with 15% annual liquidity needs caps illiquid alternatives so that commitments and capital calls never breach the liquidity budget under stress."
      ),
      lesson(
        "cfa-l3-m8-l4",
        "Manager selection and fees",
        45,
        [
          "Evaluate managers via investment and operational due diligence.",
          "Analyse fee structures' impact.",
        ],
        [
          "Operational due diligence can be decisive in manager selection.",
          "Fee terms materially affect net returns.",
          "Persistence of skill is stronger in some alternatives than others.",
        ],
        [
          "Why is operational due diligence critical for alternatives?",
          "How do fees affect the manager-selection decision?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m8-l5",
        "Monitoring and reporting",
        40,
        [
          "Design a monitoring framework for alternatives.",
          "Interpret valuation and reporting limitations.",
        ],
        [
          "Monitoring covers performance, risk and operational health.",
          "Lagged and appraisal valuations complicate oversight.",
          "Style drift and key-person risk require ongoing attention.",
        ],
        [
          "What should an alternatives monitoring framework include?",
          "How do reporting lags affect oversight?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Liquidity budget limits illiquid exposure to tolerable levels.",
      "Unsmoothing adjusts appraisal returns for true volatility.",
      "Net return ≈ gross − management fee − incentive fee.",
      "Risk-factor decomposition reveals shared exposures.",
    ],
    commonTraps: [
      "Treating appraisal-based data as market-priced.",
      "Ignoring capital-call liquidity risk when sizing commitments.",
      "Underweighting operational due diligence.",
    ],
    examTechnique: [
      "Address liquidity explicitly in allocation answers.",
      "Adjust reported alternative statistics for bias.",
      "Separate investment from operational due diligence.",
    ],
    practicePlan: [
      "Design a liquidity budget for an illiquid allocation.",
      "Unsmooth a series of appraisal returns conceptually.",
      "List due-diligence questions for a hedge-fund manager.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Alternative Investment Portfolio Management (Level III).",
      "Swensen, 'Pioneering Portfolio Management'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m9",
    examId: "cfa",
    levelId: "l3",
    title: "Private Wealth Management",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 36,
    overview:
      "Covers advising individual investors: understanding the client, constructing the IPS, tax and estate planning, managing concentrated positions, and preparing behaviourally aware, goals-based plans.",
    whyItMatters:
      "Private wealth is a major career path and a heavily tested Level III area; it integrates behavioural finance, taxes and asset allocation into personalised advice, often via essays.",
    learningOutcomes: [
      "Analyse an individual client's objectives and constraints.",
      "Construct an individual investment policy statement.",
      "Apply tax-efficient investing and asset location.",
      "Manage concentrated single-asset positions.",
      "Incorporate estate-planning and wealth-transfer basics.",
      "Prepare goals-based, behaviourally aware plans.",
    ],
    syllabusAreas: [
      area("Client analysis & IPS", [
        "Return and risk objectives",
        "Constraints for individuals",
        "Human capital and lifecycle",
      ], "10–15%"),
      area("Tax & wealth transfer", [
        "Tax-efficient investing and asset location",
        "Estate planning and gifting",
        "Wealth-transfer techniques",
      ]),
      area("Concentrated positions & goals", [
        "Strategies for concentrated stock",
        "Goals-based wealth management",
        "Behavioural considerations",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m9-l1",
        "Understanding the individual client",
        50,
        [
          "Analyse an individual's objectives and constraints.",
          "Incorporate human capital and the lifecycle.",
        ],
        [
          "Return objectives combine spending needs and growth.",
          "Constraints: liquidity, horizon, taxes, legal, unique circumstances.",
          "Human capital shapes financial-asset risk capacity.",
        ],
        [
          "How does human capital affect an individual's risk capacity?",
          "What constraints are unique to individuals?",
        ],
        "A 40-year-old with stable salary (bond-like human capital) and a 25-year horizon can tolerate a higher equity allocation than a near-retiree with the same wealth."
      ),
      lesson(
        "cfa-l3-m9-l2",
        "Constructing the individual IPS",
        50,
        [
          "Draft return and risk objectives.",
          "Specify constraints for an individual.",
        ],
        [
          "Willingness and ability to take risk must be reconciled.",
          "Required return can be computed from cash-flow needs.",
          "The IPS governs and is revisited as circumstances change.",
        ],
        [
          "How do you reconcile conflicting willingness and ability?",
          "How is a required return derived from spending needs?",
        ],
        "A client needing $80k from a $2m portfolio requires a 4% real return before fees and inflation; the IPS return objective grosses this up accordingly."
      ),
      lesson(
        "cfa-l3-m9-l3",
        "Tax-efficient investing",
        50,
        [
          "Apply asset-location and tax-management techniques.",
          "Compare accumulation under different tax regimes.",
        ],
        [
          "Asset location places tax-inefficient assets in sheltered accounts.",
          "Tax-loss harvesting and deferral raise after-tax wealth.",
          "Tax regimes (accrual, deferred, exempt) change compounding.",
        ],
        [
          "How does asset location add after-tax value?",
          "Why does tax deferral help compounding?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m9-l4",
        "Concentrated positions and wealth transfer",
        50,
        [
          "Manage concentrated single-asset risk.",
          "Apply estate-planning and gifting basics.",
        ],
        [
          "Concentrated positions carry idiosyncratic and tax-lock-in risk.",
          "Hedging, monetisation and staged sales reduce concentration.",
          "Gifting and trusts transfer wealth tax-efficiently.",
        ],
        [
          "What strategies reduce concentrated-stock risk?",
          "How does gifting during life reduce estate tax?",
        ],
        "A founder with a large low-basis stock position uses a collar to hedge downside while deferring the taxable sale, then diversifies gradually."
      ),
      lesson(
        "cfa-l3-m9-l5",
        "Goals-based and behaviourally aware planning",
        45,
        [
          "Build goals-based sub-portfolios.",
          "Incorporate behavioural insights into advice.",
        ],
        [
          "Goals-based investing links portfolios to prioritised goals.",
          "Behavioural types shape communication and structure.",
          "Mental accounting can be harnessed constructively.",
        ],
        [
          "How does goals-based investing use mental accounting?",
          "How should advice adapt to a client's behavioural type?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Individual IPS constraints: liquidity, time horizon, taxes, legal, unique.",
      "Required return grosses up spending needs for taxes/inflation.",
      "After-tax future value depends on the tax regime (accrual/deferred/exempt).",
      "Concentration solutions: sell, hedge, monetise, or diversify over time.",
    ],
    commonTraps: [
      "Setting a return objective that ignores taxes and inflation.",
      "Overriding ability to bear risk with willingness (or vice versa) incorrectly.",
      "Recommending an immediate full sale of a low-basis concentrated position without tax analysis.",
    ],
    examTechnique: [
      "Compute required return from stated cash needs.",
      "Explicitly reconcile willingness and ability.",
      "Address tax consequences in concentrated-position answers.",
    ],
    practicePlan: [
      "Draft two individual IPSs from vignettes.",
      "Work asset-location and tax-regime problems.",
      "Design a concentrated-position solution.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Private Wealth Management (Level III).",
      "CFA Institute — Managing Individual Investor Portfolios readings.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m10",
    examId: "cfa",
    levelId: "l3",
    title: "Institutional Investors",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Covers the objectives, constraints and portfolio design for institutional investors—pension plans, endowments, foundations, insurers, banks and sovereign wealth funds.",
    whyItMatters:
      "Institutions manage the bulk of global assets; understanding their distinct liabilities, regulations and objectives is essential for constructing appropriate portfolios and is a heavily tested essay topic.",
    learningOutcomes: [
      "Analyse the objectives and constraints of each institutional type.",
      "Construct IPSs for pensions, endowments and foundations.",
      "Address the liability structure of insurers and banks.",
      "Apply the risk objectives specific to each institution.",
      "Evaluate spending policies and funding status.",
      "Design liability-aware asset allocations.",
    ],
    syllabusAreas: [
      area("Pensions", [
        "Defined-benefit vs defined-contribution",
        "Funded status and liability risk",
        "Pension IPS design",
      ], "10–15%"),
      area("Endowments & foundations", [
        "Spending policies",
        "Long-horizon investing",
        "Intergenerational equity",
      ]),
      area("Insurers, banks & SWFs", [
        "Liability structures and regulation",
        "Surplus and ALM",
        "Sovereign wealth objectives",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m10-l1",
        "Pension plans",
        55,
        [
          "Analyse DB and DC pension objectives and constraints.",
          "Relate funded status to allocation.",
        ],
        [
          "DB plans bear investment and longevity risk; DC shifts it to members.",
          "Funded status and liability duration guide allocation.",
          "Liability-relative and LDI approaches manage pension risk.",
        ],
        [
          "How does funded status affect risk-taking capacity?",
          "Why match asset and liability duration in a DB plan?",
        ],
        "An underfunded DB plan with a young workforce can take more investment risk than a frozen, mature plan whose liabilities are short and certain."
      ),
      lesson(
        "cfa-l3-m10-l2",
        "Endowments and foundations",
        50,
        [
          "Design spending policies.",
          "Balance current spending against intergenerational equity.",
        ],
        [
          "Endowments seek to preserve real value while funding spending.",
          "Smoothing rules stabilise spending across market cycles.",
          "Long horizons support higher illiquid allocations.",
        ],
        [
          "How does a spending-smoothing rule work?",
          "Why can endowments hold more illiquid assets?",
        ],
        "A 5% spending rule on a 3-year average asset value smooths distributions, reducing the impact of a single-year market drop on the operating budget."
      ),
      lesson(
        "cfa-l3-m10-l3",
        "Insurance companies",
        50,
        [
          "Analyse life and P&C insurer liabilities.",
          "Apply asset-liability management.",
        ],
        [
          "Life insurers have long, predictable liabilities; P&C shorter and lumpier.",
          "ALM matches asset cash flows to liability profiles.",
          "Regulatory and tax constraints shape allocation.",
        ],
        [
          "How do life and P&C liability profiles differ?",
          "Why is ALM central to insurer portfolios?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m10-l4",
        "Banks and sovereign wealth funds",
        45,
        [
          "Analyse bank balance-sheet risk management.",
          "Describe sovereign wealth fund objectives.",
        ],
        [
          "Banks manage interest-rate and liquidity risk on the balance sheet.",
          "SWFs vary from stabilisation to savings to development funds.",
          "Objectives and horizons differ widely across SWF types.",
        ],
        [
          "What risks dominate a bank's investment portfolio?",
          "How do SWF objectives differ by type?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m10-l5",
        "Comparing institutional investors",
        45,
        [
          "Contrast objectives and constraints across institutions.",
          "Match allocations to institutional characteristics.",
        ],
        [
          "Liability structure is the key differentiator.",
          "Time horizon and liquidity needs shape allocation.",
          "Regulation and taxes constrain some institutions heavily.",
        ],
        [
          "Which institution has the longest effective horizon?",
          "How does liability structure drive allocation differences?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Funded status = plan assets − PBO.",
      "Spending rule (smoothed) = rate × moving-average asset value.",
      "ALM matches asset and liability cash-flow/duration profiles.",
      "Surplus = assets − liabilities; manage surplus at risk.",
    ],
    commonTraps: [
      "Applying an individual-investor lens to institutional constraints.",
      "Ignoring regulation and taxes for insurers and banks.",
      "Overstating risk capacity for mature/frozen pension plans.",
    ],
    examTechnique: [
      "Identify the institution type and its dominant liability.",
      "Link funded status/liability profile to allocation.",
      "State the spending or regulatory constraint explicitly.",
    ],
    practicePlan: [
      "Draft IPSs for a pension and an endowment.",
      "Compare life vs P&C insurer allocations.",
      "Build a comparison table across institution types.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Institutional Investors (Level III).",
      "CFA Institute — Managing Institutional Investor Portfolios readings.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m11",
    examId: "cfa",
    levelId: "l3",
    title: "Trading, Performance Evaluation & Manager Selection",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Covers trade execution and cost measurement, performance measurement and attribution, appraisal against benchmarks, and the process of selecting and evaluating external managers.",
    whyItMatters:
      "Turning strategy into results depends on efficient execution, honest performance measurement and disciplined manager selection—the accountability layer of portfolio management.",
    learningOutcomes: [
      "Measure trading costs and implementation shortfall.",
      "Select appropriate execution strategies.",
      "Compute and interpret performance attribution.",
      "Appraise performance with risk-adjusted measures.",
      "Evaluate benchmark quality.",
      "Apply a manager-selection framework.",
    ],
    syllabusAreas: [
      area("Trade execution", [
        "Implementation shortfall and cost components",
        "Execution strategies and algorithms",
        "Market microstructure basics",
      ], "5–10%"),
      area("Performance evaluation", [
        "Return attribution (macro/micro)",
        "Risk-adjusted measures",
        "Benchmark selection and quality",
      ]),
      area("Manager selection", [
        "Qualitative and quantitative screening",
        "Type I/II error trade-offs",
        "Ongoing monitoring",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m11-l1",
        "Trade execution and cost measurement",
        50,
        [
          "Compute implementation shortfall.",
          "Select execution strategies for different objectives.",
        ],
        [
          "Implementation shortfall combines explicit, delay and market-impact costs.",
          "Urgency trades market impact against timing risk.",
          "Algorithmic strategies target VWAP, TWAP or implementation shortfall.",
        ],
        [
          "What are the components of implementation shortfall?",
          "How does trade urgency affect cost?",
        ],
        "An order intended at $50 that fills at $50.20 with $0.05 commissions has a market-impact cost of $0.20 plus explicit costs, summing to the implementation shortfall."
      ),
      lesson(
        "cfa-l3-m11-l2",
        "Performance measurement and attribution",
        55,
        [
          "Decompose returns into allocation and selection effects.",
          "Distinguish macro from micro attribution.",
        ],
        [
          "Attribution isolates the sources of active return.",
          "Allocation, selection and interaction effects sum to active return.",
          "Macro attribution evaluates the fund-sponsor decisions.",
        ],
        [
          "How are allocation and selection effects separated?",
          "What does the interaction effect capture?",
        ],
        "If a manager overweights a sector that outperforms, the positive allocation effect equals the overweight times the sector's excess return versus the benchmark."
      ),
      lesson(
        "cfa-l3-m11-l3",
        "Risk-adjusted performance appraisal",
        45,
        [
          "Compute Sharpe, Treynor, information ratio and M².",
          "Select the appropriate measure for a context.",
        ],
        [
          "Sharpe uses total risk; Treynor uses systematic risk.",
          "Information ratio measures active return per active risk.",
          "Measure choice depends on whether the portfolio is the whole or a part.",
        ],
        [
          "When is Treynor preferred over Sharpe?",
          "What does the information ratio evaluate?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m11-l4",
        "Benchmark selection and quality",
        45,
        [
          "Evaluate benchmark quality using the SAMURAI/valid-benchmark properties.",
          "Diagnose benchmark misfit.",
        ],
        [
          "A valid benchmark is specified, appropriate, measurable and owned.",
          "A poor benchmark distorts attribution and appraisal.",
          "Custom benchmarks may fit specialised mandates better.",
        ],
        [
          "What properties define a valid benchmark?",
          "How does a poor benchmark distort attribution?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m11-l5",
        "Manager selection",
        45,
        [
          "Apply a manager-selection framework.",
          "Balance Type I and Type II error risks.",
        ],
        [
          "Selection combines quantitative screens and qualitative due diligence.",
          "Type I error hires a poor manager; Type II rejects a good one.",
          "Ongoing monitoring guards against style drift.",
        ],
        [
          "What is the trade-off between Type I and Type II errors in selection?",
          "Why combine quantitative and qualitative screening?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Implementation shortfall = paper-portfolio return − actual-portfolio return.",
      "Sharpe = (Rp − rf)/σp; Treynor = (Rp − rf)/βp.",
      "Active return ≈ allocation + selection + interaction effects.",
      "Valid benchmark: specified, appropriate, measurable, unambiguous, reflective, accountable, investable.",
    ],
    commonTraps: [
      "Using Sharpe when only systematic risk is relevant (Treynor).",
      "Attributing return without a valid benchmark.",
      "Ignoring Type II error (missed good managers) in selection.",
    ],
    examTechnique: [
      "Break active return into its attribution components methodically.",
      "Match the risk-adjusted measure to whole vs partial portfolios.",
      "Check benchmark validity before appraising performance.",
    ],
    practicePlan: [
      "Compute implementation shortfall for a sample trade.",
      "Perform a two-sector return attribution.",
      "Compare Sharpe, Treynor and information ratio on one dataset.",
    ],
    furtherReading: [
      "CFA Program Curriculum — Trading, Performance Evaluation & Manager Selection (Level III).",
      "Bacon, 'Practical Portfolio Performance Measurement and Attribution'.",
    ],
  }),
  courseware({
    moduleId: "cfa-l3-m12",
    examId: "cfa",
    levelId: "l3",
    title: "Case Study / Constructed Response Practice",
    examFormat: CFA_L3_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Integrates all Level III topics through full case studies and constructed-response practice, developing the ability to plan, justify and present recommendations under exam conditions.",
    whyItMatters:
      "The Level III essay session is where many candidates lose marks; deliberate practice in structuring, justifying and timing answers is the highest-leverage preparation activity.",
    learningOutcomes: [
      "Interpret a full case and extract relevant facts.",
      "Answer constructed-response questions to command words.",
      "Integrate allocation, ethics and wealth topics in one case.",
      "Manage time across essay and item-set questions.",
      "Justify recommendations concisely with evidence.",
      "Self-assess answers against a marking guide.",
    ],
    syllabusAreas: [
      area("Case interpretation", [
        "Reading exhibits and client facts",
        "Identifying objectives and constraints",
        "Prioritising relevant information",
      ], "Integrative"),
      area("Constructed-response technique", [
        "Command words and answer structure",
        "Showing calculations",
        "Concise justification",
      ]),
      area("Integration & timing", [
        "Cross-topic case synthesis",
        "Time management",
        "Self-assessment against guides",
      ]),
    ],
    lessons: [
      lesson(
        "cfa-l3-m12-l1",
        "Reading and planning a case",
        45,
        [
          "Extract objectives, constraints and relevant facts from a case.",
          "Plan an answer before writing.",
        ],
        [
          "Skim the questions before reading exhibits in detail.",
          "Note the client's objectives and constraints upfront.",
          "Planning prevents omission and rambling.",
        ],
        [
          "Why read the questions before the full case?",
          "What should a pre-writing plan capture?",
        ],
        "Given a case with a retiring client, the plan lists the return requirement, liquidity need, tax status and behavioural type before any answer is drafted."
      ),
      lesson(
        "cfa-l3-m12-l2",
        "Answering to command words",
        50,
        [
          "Match answer form to command words.",
          "Show calculations clearly.",
        ],
        [
          "'Calculate' requires shown work; 'justify' requires reasons.",
          "'Determine' expects a decision plus support.",
          "Graders reward relevant points, not length.",
        ],
        [
          "How does 'justify' differ from 'describe'?",
          "Why show intermediate calculation steps?",
        ],
        "For 'calculate the after-tax required return and justify', the answer shows the arithmetic and then gives one or two concise reasons tied to the client's facts."
      ),
      lesson(
        "cfa-l3-m12-l3",
        "Integrating topics in one case",
        50,
        [
          "Combine allocation, ethics and wealth topics.",
          "Maintain internal consistency across answers.",
        ],
        [
          "Real cases span multiple readings.",
          "Recommendations must be consistent with the IPS.",
          "Ethics can appear within a portfolio case.",
        ],
        [
          "How do you keep multi-part answers internally consistent?",
          "Where might ethics arise inside an allocation case?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m12-l4",
        "Time management under exam conditions",
        45,
        [
          "Allocate time by marks available.",
          "Avoid over-investing in single questions.",
        ],
        [
          "Roughly 1.5 minutes per mark keeps pace.",
          "Partial answers still earn marks—attempt everything.",
          "Move on when a question stalls.",
        ],
        [
          "How should time be allocated across an essay session?",
          "Why attempt every question even if unsure?",
        ],
        undefined
      ),
      lesson(
        "cfa-l3-m12-l5",
        "Self-assessment and iteration",
        45,
        [
          "Mark answers against an official guide.",
          "Diagnose and correct recurring weaknesses.",
        ],
        [
          "Self-marking reveals where marks are lost.",
          "Track command-word and topic weaknesses.",
          "Iterate on structure and concision.",
        ],
        [
          "How do you self-mark a constructed-response answer?",
          "What patterns should you track across practice essays?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Answer method: read questions → plan → answer command word → check consistency.",
      "Time budget ≈ 1.5 minutes per available mark.",
      "Command words: calculate, determine, justify, describe, contrast, recommend.",
      "Consistency check: every recommendation traces back to the IPS.",
    ],
    commonTraps: [
      "Writing essays instead of targeted, marked points.",
      "Running out of time by over-investing in early questions.",
      "Producing recommendations inconsistent with the stated IPS.",
    ],
    examTechnique: [
      "Answer exactly what the command word requires.",
      "Show every calculation step for method marks.",
      "Budget time by marks and move on when stuck.",
    ],
    practicePlan: [
      "Complete two full past essay sets under timed conditions weekly.",
      "Self-mark against official guideline answers.",
      "Log and target recurring command-word errors.",
    ],
    furtherReading: [
      "CFA Institute — Level III past essay questions and guideline answers.",
      "CFA Program Curriculum — mock exams (Level III).",
    ],
  }),
];
