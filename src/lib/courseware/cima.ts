import type { CoursewareBundle } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * CIMA (Chartered Institute of Management Accountants) courseware.
 * Covers the Certificate in Business Accounting and the three CGMA levels
 * (Operational, Management, Strategic), each with a case study.
 * Module ids follow `cima-${levelId}-m${i+1}` and mirror exams.ts topic order.
 */
export const CIMA_COURSEWARE: CoursewareBundle[] = [
  {
    examId: "cima",
    levelId: "certificate",
    modules: [
      courseware({
        moduleId: "cima-certificate-m1",
        examId: "cima",
        levelId: "certificate",
        title: "BA1 — Macroeconomic & microeconomic environment",
        paperCode: "BA1",
        examFormat:
          "BA1 objective test: 60 computer-based questions in 2 hours, marked out of 150, pass mark 100. Available on demand.",
        estimatedStudyHours: 28,
        overview:
          "BA1 introduces the economic context businesses operate within: how markets set prices, how firms behave, and how macroeconomic forces and policy affect organisations. This module covers micro and macro fundamentals essential to management accounting decisions.",
        whyItMatters:
          "Management accountants advise on decisions shaped by demand, costs, competition, and the wider economy. Economic literacy underpins pricing, forecasting, and strategy throughout the CIMA qualification.",
        learningOutcomes: [
          "Explain how supply and demand determine market prices.",
          "Apply price, income, and cross elasticities to business decisions.",
          "Compare market structures and firm behaviour.",
          "Interpret key macroeconomic indicators and the business cycle.",
          "Explain monetary and fiscal policy effects on business.",
          "Discuss the impact of the global economy and trade on organisations.",
        ],
        syllabusAreas: [
          area(
            "Microeconomics",
            [
              "Supply, demand, and market equilibrium",
              "Elasticity (price, income, cross)",
              "Market structures and firm behaviour",
            ],
            "40–45%"
          ),
          area(
            "Macroeconomics",
            [
              "GDP, inflation, unemployment, the business cycle",
              "Monetary and fiscal policy",
              "Aggregate demand and supply",
            ],
            "35–40%"
          ),
          area(
            "The global economy",
            [
              "International trade and exchange rates",
              "Globalisation and competitiveness",
              "Economic development",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m1-l1",
            "Supply, demand, and equilibrium",
            50,
            ["Explain market equilibrium", "Analyse shifts"],
            [
              "Equilibrium occurs where quantity demanded equals quantity supplied.",
              "Demand and supply curves shift with income, tastes, costs, and expectations.",
              "Shortages and surpluses drive prices back toward equilibrium.",
              "Price mechanisms allocate resources in a market economy.",
            ],
            [
              "What happens to price when demand rises and supply is fixed?",
              "Name two factors that shift the supply curve.",
            ]
          ),
          lesson(
            "cima-certificate-m1-l2",
            "Elasticity",
            50,
            ["Compute elasticities", "Apply to pricing"],
            [
              "Price elasticity of demand = %ΔQ ÷ %ΔP.",
              "Elastic demand (|PED|>1) means revenue falls when price rises.",
              "Income and cross elasticities inform product and portfolio decisions.",
              "Elasticity guides pricing and forecasting.",
            ],
            [
              "How does PED affect the revenue impact of a price rise?",
              "What does a positive cross elasticity indicate?",
            ],
            "If PED is 2.0 and a firm raises price 10%, quantity falls about 20% and revenue declines — elastic demand means price rises reduce revenue."
          ),
          lesson(
            "cima-certificate-m1-l3",
            "Market structures",
            45,
            ["Compare market structures", "Explain firm behaviour"],
            [
              "Perfect competition, monopolistic competition, oligopoly, and monopoly differ in competition and pricing power.",
              "More competition lowers prices and profits toward normal levels.",
              "Barriers to entry sustain market power.",
              "Oligopolies exhibit interdependence and possible collusion.",
            ],
            [
              "How does a monopoly differ from perfect competition?",
              "Why do barriers to entry matter?",
            ]
          ),
          lesson(
            "cima-certificate-m1-l4",
            "Macroeconomic indicators and the cycle",
            45,
            ["Interpret indicators", "Identify cycle phases"],
            [
              "GDP measures output; inflation and unemployment gauge economic health.",
              "The business cycle moves through boom, downturn, recession, and recovery.",
              "Indicators guide business planning and risk.",
              "Aggregate demand and supply frame macro analysis.",
            ],
            [
              "What does GDP measure?",
              "What are the phases of the business cycle?",
            ]
          ),
          lesson(
            "cima-certificate-m1-l5",
            "Policy and the global economy",
            50,
            ["Explain policy tools", "Assess global impacts"],
            [
              "Monetary policy adjusts interest rates and money supply.",
              "Fiscal policy uses taxation and government spending.",
              "Exchange rates and trade affect competitiveness.",
              "Globalisation exposes firms to international opportunities and risks.",
            ],
            [
              "How does monetary policy differ from fiscal policy?",
              "How do exchange rates affect an exporter?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "PED = %ΔQ ÷ %ΔP; elastic (>1), inelastic (<1).",
          "Equilibrium: quantity demanded = quantity supplied.",
          "Revenue-elasticity rule: raise price if inelastic, cut if elastic (for revenue).",
          "AD = C + I + G + (X − M).",
        ],
        commonTraps: [
          "Confusing movements along a curve with shifts of the curve.",
          "Mixing up elastic and inelastic revenue effects.",
          "Reversing monetary and fiscal policy tools.",
          "Ignoring the sign/interpretation of cross and income elasticities.",
        ],
        examTechnique: [
          "For elasticity items, compute the ratio and then interpret the revenue effect.",
          "Identify the market structure before predicting firm behaviour.",
          "Link each policy tool to its intended macro effect.",
        ],
        practicePlan: [
          "Week 1: microeconomics and elasticity drills.",
          "Week 2: market structures and macro indicators.",
          "Week 3: policy, global economy, and objective-test practice.",
        ],
        furtherReading: [
          "CIMA BA1 official study text.",
          "Sloman — Economics (reference).",
        ],
      }),
      courseware({
        moduleId: "cima-certificate-m2",
        examId: "cima",
        levelId: "certificate",
        title: "BA1 — Financial markets & data analysis for business",
        paperCode: "BA1",
        examFormat:
          "Objective-test questions within BA1 covering financial markets, financial mathematics, and data analysis.",
        estimatedStudyHours: 26,
        overview:
          "This module covers the role of financial markets and institutions, financial mathematics (interest, discounting, annuities), and business data analysis including summarising data, index numbers, and forecasting.",
        whyItMatters:
          "Financial mathematics and data analysis are practical tools used throughout management accounting for investment appraisal, forecasting, and performance measurement.",
        learningOutcomes: [
          "Describe the role of financial markets and institutions.",
          "Apply simple and compound interest and discounting.",
          "Compute present values, annuities, and perpetuities.",
          "Summarise and present business data effectively.",
          "Use index numbers and time-series analysis.",
          "Apply basic forecasting techniques.",
        ],
        syllabusAreas: [
          area(
            "Financial markets and institutions",
            [
              "Money and capital markets",
              "Role of banks and financial intermediaries",
              "Sources of business finance (overview)",
            ],
            "25–30%"
          ),
          area(
            "Financial mathematics",
            [
              "Simple and compound interest",
              "Discounting and present value",
              "Annuities and perpetuities",
            ],
            "40–45%"
          ),
          area(
            "Data analysis",
            [
              "Summary statistics and presentation",
              "Index numbers",
              "Time series and forecasting",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m2-l1",
            "Financial markets and institutions",
            40,
            ["Describe markets", "Explain intermediation"],
            [
              "Money markets handle short-term funds; capital markets handle long-term finance.",
              "Banks and intermediaries channel savings to borrowers.",
              "Markets provide liquidity and price discovery.",
              "Businesses access finance across these markets.",
            ],
            [
              "How do money and capital markets differ?",
              "What is the role of a financial intermediary?",
            ]
          ),
          lesson(
            "cima-certificate-m2-l2",
            "Interest and discounting",
            55,
            ["Compute interest", "Discount cash flows"],
            [
              "Compound interest: FV = PV(1+r)^n.",
              "Discounting reverses compounding: PV = FV ÷ (1+r)^n.",
              "The time value of money underlies investment appraisal.",
              "Effective rates account for intra-year compounding.",
            ],
            [
              "What is the compound-interest formula?",
              "Why do we discount future cash flows?",
            ],
            "£1,000 invested at 8% for 3 years grows to 1,000 × 1.08^3 ≈ £1,259.71; conversely, £1,259.71 in 3 years is worth £1,000 today at 8%."
          ),
          lesson(
            "cima-certificate-m2-l3",
            "Annuities and perpetuities",
            50,
            ["Value annuities", "Value perpetuities"],
            [
              "An annuity pays a constant amount for a set period.",
              "Perpetuity value = cash flow ÷ r.",
              "Annuity factors simplify present-value calculations.",
              "These tools value regular cash flows in appraisal.",
            ],
            [
              "How is a perpetuity valued?",
              "What does an annuity factor represent?",
            ]
          ),
          lesson(
            "cima-certificate-m2-l4",
            "Summarising and presenting data",
            45,
            ["Compute summary statistics", "Present data"],
            [
              "Mean, median, mode, and standard deviation summarise data.",
              "Charts and tables communicate data clearly.",
              "Choose the measure appropriate to the data's distribution.",
              "Dispersion measures indicate variability and risk.",
            ],
            [
              "When is the median preferable to the mean?",
              "What does standard deviation measure?",
            ]
          ),
          lesson(
            "cima-certificate-m2-l5",
            "Index numbers and forecasting",
            45,
            ["Use index numbers", "Apply forecasting"],
            [
              "Index numbers track changes relative to a base period.",
              "Time-series analysis separates trend, seasonal, and residual components.",
              "Moving averages and regression support forecasting.",
              "Forecasts inform budgeting and planning.",
            ],
            [
              "What does an index number express?",
              "What components make up a time series?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "FV = PV(1+r)^n; PV = FV ÷ (1+r)^n.",
          "Perpetuity = cash flow ÷ r; growing perpetuity = CF ÷ (r − g).",
          "Index number = (current ÷ base) × 100.",
          "Time series: trend + seasonal + cyclical + random.",
        ],
        commonTraps: [
          "Mixing simple and compound interest.",
          "Forgetting to match rate and period frequency.",
          "Using the mean when data is skewed.",
          "Misreading the base period of an index.",
        ],
        examTechnique: [
          "List known variables before applying TVM formulas.",
          "Confirm compounding frequency for interest questions.",
          "Choose the statistic that fits the data's shape.",
        ],
        practicePlan: [
          "Week 1: financial markets and interest/discounting.",
          "Week 2: annuities, perpetuities, and data summary.",
          "Week 3: index numbers, forecasting, and OT practice.",
        ],
        furtherReading: [
          "CIMA BA1 official study text.",
          "Business mathematics and statistics references.",
        ],
      }),
      courseware({
        moduleId: "cima-certificate-m3",
        examId: "cima",
        levelId: "certificate",
        title: "BA2 — Costing, budgeting & decision making",
        paperCode: "BA2",
        examFormat:
          "BA2 objective test: 60 questions in 2 hours, marked out of 150, pass mark 100. On-demand.",
        estimatedStudyHours: 28,
        overview:
          "BA2 introduces fundamentals of management accounting: cost classification, costing methods (absorption and marginal), budgeting, and short-term decision making using cost-volume-profit and relevant costing.",
        whyItMatters:
          "These are the core techniques of the management accountant. Costing and decision-making skills recur across every later CIMA level and daily practice.",
        learningOutcomes: [
          "Classify costs by behaviour, function, and traceability.",
          "Apply absorption and marginal costing.",
          "Prepare and use budgets and variances.",
          "Perform cost-volume-profit (breakeven) analysis.",
          "Apply relevant costing to short-term decisions.",
          "Explain limiting-factor decision making.",
        ],
        syllabusAreas: [
          area(
            "Cost identification and behaviour",
            [
              "Cost classification and behaviour",
              "Absorption vs marginal costing",
              "Overhead absorption",
            ],
            "35–40%"
          ),
          area(
            "Budgeting",
            [
              "Budget preparation and functional budgets",
              "Flexed budgets and variances",
              "Standard costing basics",
            ],
            "25–30%"
          ),
          area(
            "Short-term decision making",
            [
              "Cost-volume-profit analysis",
              "Relevant costing",
              "Limiting factors",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m3-l1",
            "Cost classification and behaviour",
            50,
            ["Classify costs", "Explain behaviour"],
            [
              "Costs are classified by behaviour (fixed/variable), function, and traceability (direct/indirect).",
              "Variable costs change with output; fixed costs do not (within a range).",
              "Semi-variable costs have both elements (split via high-low).",
              "Correct classification underlies all costing.",
            ],
            [
              "How do fixed and variable costs behave with output?",
              "How does the high-low method split a semi-variable cost?",
            ]
          ),
          lesson(
            "cima-certificate-m3-l2",
            "Absorption and marginal costing",
            55,
            ["Apply both methods", "Reconcile profits"],
            [
              "Absorption costing includes fixed production overhead in unit cost.",
              "Marginal costing treats fixed overhead as a period cost.",
              "Profit differs between methods when inventory changes.",
              "Reconciliation adjusts for fixed overhead in inventory movements.",
            ],
            [
              "Why do absorption and marginal profits differ with inventory changes?",
              "How is fixed overhead treated under marginal costing?",
            ],
            "If production exceeds sales, absorption profit exceeds marginal profit because fixed overhead is carried forward in closing inventory rather than expensed."
          ),
          lesson(
            "cima-certificate-m3-l3",
            "Budgeting and variances",
            50,
            ["Prepare budgets", "Compute variances"],
            [
              "Functional budgets build into a master budget.",
              "Flexing a budget adjusts it to actual activity for fair comparison.",
              "Variances compare actual with standard/flexed budget.",
              "Variance analysis directs management attention.",
            ],
            [
              "Why flex a budget before computing variances?",
              "What does an adverse variance indicate?",
            ]
          ),
          lesson(
            "cima-certificate-m3-l4",
            "Cost-volume-profit analysis",
            50,
            ["Compute breakeven", "Apply CVP"],
            [
              "Breakeven units = fixed costs ÷ contribution per unit.",
              "Contribution = selling price − variable cost.",
              "Margin of safety shows how far sales can fall before a loss.",
              "CVP informs pricing and volume decisions.",
            ],
            [
              "How is the breakeven point calculated?",
              "What is the margin of safety?",
            ]
          ),
          lesson(
            "cima-certificate-m3-l5",
            "Relevant costing and limiting factors",
            45,
            ["Apply relevant costing", "Rank by limiting factor"],
            [
              "Relevant costs are future, incremental, and cash-based; ignore sunk and committed costs.",
              "Opportunity cost is relevant in decisions.",
              "With a limiting factor, rank products by contribution per unit of the scarce resource.",
              "Make-or-buy and special-order decisions use relevant costing.",
            ],
            [
              "What makes a cost 'relevant' to a decision?",
              "How do you prioritise products under a limiting factor?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Contribution = selling price − variable cost per unit.",
          "Breakeven units = fixed costs ÷ contribution per unit.",
          "Margin of safety = (budgeted − breakeven sales) ÷ budgeted sales.",
          "Limiting factor: rank by contribution per unit of scarce resource.",
        ],
        commonTraps: [
          "Including fixed overhead in marginal-costing unit cost.",
          "Comparing actual to an unflexed budget.",
          "Treating sunk costs as relevant.",
          "Ranking by total contribution instead of per limiting factor.",
        ],
        examTechnique: [
          "State whether the question uses absorption or marginal costing.",
          "Flex the budget before variance analysis.",
          "For decisions, list only relevant future cash flows.",
        ],
        practicePlan: [
          "Week 1: cost classification and costing methods.",
          "Week 2: budgeting, variances, and CVP.",
          "Week 3: relevant costing and limiting-factor practice.",
        ],
        furtherReading: [
          "CIMA BA2 official study text.",
          "Drury — Management and Cost Accounting (reference).",
        ],
      }),
      courseware({
        moduleId: "cima-certificate-m4",
        examId: "cima",
        levelId: "certificate",
        title: "BA2 — Short-term finance & working capital",
        paperCode: "BA2",
        examFormat:
          "Objective-test questions within BA2 on working capital, short-term finance, and cash management.",
        estimatedStudyHours: 24,
        overview:
          "This module covers managing short-term finances: working capital components, cash management, inventory, receivables and payables policies, and sources of short-term funding.",
        whyItMatters:
          "Working capital management protects liquidity and drives cash flow. Poor management causes business failure even when profitable, making this a practical, tested skill.",
        learningOutcomes: [
          "Explain the working capital cycle and its components.",
          "Manage inventory using EOQ and control levels.",
          "Manage receivables and payables policies.",
          "Apply cash-management and forecasting techniques.",
          "Compare sources of short-term finance.",
          "Assess the trade-off between liquidity and profitability.",
        ],
        syllabusAreas: [
          area(
            "Working capital",
            [
              "Working capital cycle",
              "Liquidity vs profitability trade-off",
              "Over-trading",
            ],
            "30–35%"
          ),
          area(
            "Managing components",
            [
              "Inventory (EOQ, control levels)",
              "Receivables and credit policy",
              "Payables management",
            ],
            "35–40%"
          ),
          area(
            "Cash and short-term finance",
            [
              "Cash forecasting and management",
              "Sources of short-term finance",
              "Cash operating cycle",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m4-l1",
            "The working capital cycle",
            45,
            ["Explain the cycle", "Compute the cash cycle"],
            [
              "Working capital = current assets − current liabilities.",
              "The cash operating cycle = inventory days + receivables days − payables days.",
              "Longer cycles tie up more cash.",
              "Over-trading occurs when growth outpaces working-capital funding.",
            ],
            [
              "How is the cash operating cycle calculated?",
              "What is over-trading?",
            ],
            "With inventory days 60, receivables days 45, and payables days 30, the cash operating cycle is 60 + 45 − 30 = 75 days of financing needed."
          ),
          lesson(
            "cima-certificate-m4-l2",
            "Inventory management",
            50,
            ["Apply EOQ", "Set control levels"],
            [
              "EOQ minimises total ordering and holding costs.",
              "EOQ = √(2 × demand × order cost ÷ holding cost).",
              "Reorder levels and safety stock prevent stockouts.",
              "Just-in-time reduces inventory but raises supply risk.",
            ],
            [
              "What costs does EOQ balance?",
              "What is the purpose of safety stock?",
            ]
          ),
          lesson(
            "cima-certificate-m4-l3",
            "Receivables and payables",
            45,
            ["Manage credit", "Optimise payables"],
            [
              "Credit policy balances sales growth against bad-debt and financing costs.",
              "Early-settlement discounts speed collection at a cost.",
              "Delaying payables improves cash but risks supplier relations.",
              "Evaluate discount offers against the cost of finance.",
            ],
            [
              "What trade-offs are involved in offering credit?",
              "How do you evaluate an early-settlement discount?",
            ]
          ),
          lesson(
            "cima-certificate-m4-l4",
            "Cash management and forecasting",
            45,
            ["Forecast cash", "Manage balances"],
            [
              "Cash budgets forecast inflows and outflows to avoid shortfalls.",
              "Surplus cash should be invested; deficits require financing.",
              "Models (e.g. Baumol, Miller-Orr) guide cash balances.",
              "Timing of flows is as important as amounts.",
            ],
            [
              "Why prepare a cash budget?",
              "What should a firm do with forecast surplus cash?",
            ]
          ),
          lesson(
            "cima-certificate-m4-l5",
            "Sources of short-term finance",
            35,
            ["Compare sources", "Match finance to need"],
            [
              "Overdrafts, short-term loans, and trade credit fund short-term needs.",
              "Invoice financing and factoring release cash from receivables.",
              "Match the finance term to the asset's life.",
              "Cost and flexibility differ across sources.",
            ],
            [
              "Why match finance term to asset life?",
              "How does factoring improve cash flow?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Cash operating cycle = inventory days + receivables days − payables days.",
          "EOQ = √(2 × D × Co ÷ Ch).",
          "Working capital = current assets − current liabilities.",
          "Discount evaluation: compare implied annual cost to cost of finance.",
        ],
        commonTraps: [
          "Confusing profit with cash flow.",
          "Ignoring holding costs when ordering inventory.",
          "Over-delaying payables and damaging supplier terms.",
          "Financing long-term assets with short-term finance.",
        ],
        examTechnique: [
          "Compute the cash cycle step by step.",
          "Apply EOQ carefully with consistent units.",
          "Convert discount terms to an annualised cost for comparison.",
        ],
        practicePlan: [
          "Week 1: working-capital cycle and inventory.",
          "Week 2: receivables, payables, and cash management.",
          "Week 3: short-term finance and OT practice.",
        ],
        furtherReading: [
          "CIMA BA2 official study text.",
          "Working capital management references.",
        ],
      }),
      courseware({
        moduleId: "cima-certificate-m5",
        examId: "cima",
        levelId: "certificate",
        title: "BA3 — Double entry, ledgers & trial balance",
        paperCode: "BA3",
        examFormat:
          "BA3 objective test: 60 questions in 2 hours, marked out of 150, pass mark 100. On-demand.",
        estimatedStudyHours: 28,
        overview:
          "BA3 builds financial accounting foundations: the accounting equation, double-entry bookkeeping, ledgers, the trial balance, and correcting errors. This module ensures fluent, accurate recording of transactions.",
        whyItMatters:
          "Double entry is the bedrock of all financial accounting. Accuracy here is essential before preparing and interpreting financial statements.",
        learningOutcomes: [
          "Apply the accounting equation to transactions.",
          "Record transactions using double entry.",
          "Maintain ledgers and the cash book.",
          "Prepare and balance a trial balance.",
          "Account for accruals, prepayments, and depreciation.",
          "Identify and correct errors, including suspense accounts.",
        ],
        syllabusAreas: [
          area(
            "Double entry fundamentals",
            [
              "Accounting equation",
              "Debits and credits",
              "Books of prime entry and ledgers",
            ],
            "40–45%"
          ),
          area(
            "Adjustments",
            [
              "Accruals and prepayments",
              "Depreciation methods",
              "Bad and doubtful debts",
            ],
            "30–35%"
          ),
          area(
            "Trial balance and errors",
            [
              "Preparing the trial balance",
              "Types of error",
              "Suspense accounts and corrections",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m5-l1",
            "The accounting equation and double entry",
            50,
            ["Apply the equation", "Record double entries"],
            [
              "Assets = liabilities + capital.",
              "Every transaction has equal debit and credit effects.",
              "Debits increase assets/expenses; credits increase liabilities/income/capital.",
              "The equation always stays in balance.",
            ],
            [
              "State the accounting equation.",
              "Which side increases an asset account?",
            ]
          ),
          lesson(
            "cima-certificate-m5-l2",
            "Ledgers and books of prime entry",
            45,
            ["Use prime-entry books", "Post to ledgers"],
            [
              "Books of prime entry (day books) record transactions first.",
              "Postings transfer totals to the general ledger.",
              "The cash book records cash and bank transactions.",
              "Control accounts reconcile subsidiary ledgers.",
            ],
            [
              "What is the purpose of a book of prime entry?",
              "What does a control account reconcile?",
            ]
          ),
          lesson(
            "cima-certificate-m5-l3",
            "Accruals, prepayments, and depreciation",
            55,
            ["Adjust for timing", "Compute depreciation"],
            [
              "Accruals recognise expenses incurred but not yet paid.",
              "Prepayments defer costs paid in advance.",
              "Straight-line and reducing-balance methods spread asset cost.",
              "Depreciation matches asset cost to periods benefited.",
            ],
            [
              "How does an accrual differ from a prepayment?",
              "How is reducing-balance depreciation calculated?",
            ],
            "An asset costing £10,000 depreciated 20% reducing balance charges £2,000 in year 1, then 20% of £8,000 = £1,600 in year 2, and so on."
          ),
          lesson(
            "cima-certificate-m5-l4",
            "Bad debts and the trial balance",
            45,
            ["Account for bad debts", "Prepare a trial balance"],
            [
              "Bad debts are written off; allowances provide for doubtful debts.",
              "The trial balance lists all ledger balances to check arithmetic.",
              "Total debits should equal total credits.",
              "A balanced trial balance does not guarantee no errors.",
            ],
            [
              "What is the difference between a bad debt and a doubtful-debt allowance?",
              "Does a balanced trial balance prove there are no errors?",
            ]
          ),
          lesson(
            "cima-certificate-m5-l5",
            "Errors and suspense accounts",
            45,
            ["Classify errors", "Correct with suspense accounts"],
            [
              "Some errors (omission, commission, principle, compensating) do not affect trial-balance agreement.",
              "Errors that unbalance the trial balance use a suspense account.",
              "Journals correct errors and clear the suspense account.",
              "Systematic checking finds and fixes errors.",
            ],
            [
              "Name two errors that do not affect trial-balance agreement.",
              "When is a suspense account used?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Assets = liabilities + capital.",
          "Debit/credit rules: DEAD CLIC (debits: expenses, assets, drawings; credits: liabilities, income, capital).",
          "Straight-line depreciation = (cost − residual) ÷ useful life.",
          "Reducing balance = rate × carrying amount.",
        ],
        commonTraps: [
          "Reversing debit and credit rules.",
          "Forgetting adjustments for accruals/prepayments.",
          "Assuming a balanced trial balance means no errors.",
          "Mishandling suspense-account corrections.",
        ],
        examTechnique: [
          "Write the double entry for each transaction explicitly.",
          "Apply DEAD CLIC when unsure of the side.",
          "For error questions, decide first whether the trial balance is affected.",
        ],
        practicePlan: [
          "Week 1: double entry and ledgers.",
          "Week 2: adjustments and depreciation.",
          "Week 3: trial balance, errors, and OT practice.",
        ],
        furtherReading: [
          "CIMA BA3 official study text.",
          "Financial accounting fundamentals references.",
        ],
      }),
      courseware({
        moduleId: "cima-certificate-m6",
        examId: "cima",
        levelId: "certificate",
        title: "BA3 — Financial statements preparation & interpretation",
        paperCode: "BA3",
        examFormat:
          "Objective-test questions within BA3 on preparing and interpreting financial statements.",
        estimatedStudyHours: 26,
        overview:
          "This module covers preparing the statement of profit or loss, statement of financial position, and cash flow statement, plus interpreting them using ratio analysis for profitability, liquidity, and efficiency.",
        whyItMatters:
          "Financial statements are the primary output of accounting and the basis for decisions. Preparation and interpretation skills are essential for every finance role.",
        learningOutcomes: [
          "Prepare a statement of profit or loss and financial position.",
          "Prepare a basic statement of cash flows.",
          "Explain the elements and structure of financial statements.",
          "Compute and interpret key financial ratios.",
          "Assess profitability, liquidity, and efficiency.",
          "Explain the limitations of ratio analysis.",
        ],
        syllabusAreas: [
          area(
            "Preparing statements",
            [
              "Statement of profit or loss",
              "Statement of financial position",
              "Statement of cash flows",
            ],
            "45–50%"
          ),
          area(
            "Ratio analysis",
            [
              "Profitability ratios",
              "Liquidity and efficiency ratios",
              "Gearing ratios",
            ],
            "30–35%"
          ),
          area(
            "Interpretation",
            [
              "Trend and comparative analysis",
              "Limitations of ratios",
              "Users of financial statements",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m6-l1",
            "The primary financial statements",
            50,
            ["Prepare core statements", "Explain their elements"],
            [
              "The statement of profit or loss reports income and expenses.",
              "The statement of financial position shows assets, liabilities, and equity.",
              "They articulate: profit increases equity; the balance sheet balances.",
              "Elements: assets, liabilities, equity, income, expenses.",
            ],
            [
              "What does the statement of financial position show?",
              "How does profit link the two main statements?",
            ]
          ),
          lesson(
            "cima-certificate-m6-l2",
            "Statement of cash flows",
            50,
            ["Prepare cash flow", "Classify activities"],
            [
              "Cash flows are classified into operating, investing, and financing.",
              "The indirect method reconciles profit to operating cash flow.",
              "Cash flow reveals liquidity that profit can hide.",
              "It complements the accruals-based profit statement.",
            ],
            [
              "What are the three categories of cash flows?",
              "Why can a profitable business run out of cash?",
            ]
          ),
          lesson(
            "cima-certificate-m6-l3",
            "Profitability ratios",
            45,
            ["Compute profitability", "Interpret margins"],
            [
              "Gross and operating margins measure profitability of sales.",
              "Return on capital employed (ROCE) assesses efficiency of capital use.",
              "Compare over time and against peers.",
              "Margins and returns tell different stories.",
            ],
            [
              "What does ROCE measure?",
              "How does gross margin differ from operating margin?",
            ],
            "ROCE = operating profit ÷ capital employed; a firm with £200k operating profit on £1m capital employed has 20% ROCE — a key efficiency benchmark."
          ),
          lesson(
            "cima-certificate-m6-l4",
            "Liquidity and efficiency ratios",
            45,
            ["Compute liquidity", "Assess efficiency"],
            [
              "Current and quick ratios assess short-term solvency.",
              "Inventory, receivables, and payables days measure working-capital efficiency.",
              "Asset turnover links sales to assets.",
              "Efficiency ratios connect to the cash cycle.",
            ],
            [
              "What is the difference between the current and quick ratios?",
              "What does receivables days indicate?",
            ]
          ),
          lesson(
            "cima-certificate-m6-l5",
            "Gearing and interpretation limits",
            40,
            ["Compute gearing", "Explain limitations"],
            [
              "Gearing measures the proportion of debt in the capital structure.",
              "High gearing increases financial risk and return sensitivity.",
              "Ratios are limited by accounting policies, one-offs, and comparability.",
              "Interpret ratios in context, not in isolation.",
            ],
            [
              "What does gearing measure?",
              "Name two limitations of ratio analysis.",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "ROCE = operating profit ÷ capital employed.",
          "Current ratio = current assets ÷ current liabilities.",
          "Gearing = debt ÷ (debt + equity) or debt ÷ equity.",
          "Cash flow categories: operating + investing + financing.",
        ],
        commonTraps: [
          "Confusing profit with cash flow.",
          "Misclassifying cash-flow activities.",
          "Comparing ratios without adjusting for policy differences.",
          "Interpreting a single ratio without context.",
        ],
        examTechnique: [
          "Lay out statements in standard format.",
          "State the ratio formula before computing.",
          "Interpret ratios with trend and peer context.",
        ],
        practicePlan: [
          "Week 1: preparing profit and position statements.",
          "Week 2: cash flow and profitability ratios.",
          "Week 3: liquidity, gearing, and interpretation practice.",
        ],
        furtherReading: [
          "CIMA BA3 official study text.",
          "IFRS conceptual framework (overview).",
        ],
      }),
      courseware({
        moduleId: "cima-certificate-m7",
        examId: "cima",
        levelId: "certificate",
        title: "BA4 — Ethics, corporate governance & CSR",
        paperCode: "BA4",
        examFormat:
          "BA4 objective test: 60 questions in 2 hours, marked out of 150, pass mark 100. On-demand.",
        estimatedStudyHours: 24,
        overview:
          "BA4 covers professional ethics, corporate governance, and corporate social responsibility. This module teaches the CIMA Code of Ethics, the fundamental principles, governance structures, and sustainability considerations.",
        whyItMatters:
          "Ethics and governance are central to the accountant's professional standing and to organisational trust. CIMA embeds ethics throughout the qualification and the case studies.",
        learningOutcomes: [
          "State the CIMA Code of Ethics and its fundamental principles.",
          "Apply the conceptual framework to ethical threats and safeguards.",
          "Explain corporate governance principles and structures.",
          "Describe the roles of boards, committees, and auditors.",
          "Explain corporate social responsibility and sustainability.",
          "Resolve ethical conflicts using a structured approach.",
        ],
        syllabusAreas: [
          area(
            "Professional ethics",
            [
              "Fundamental principles",
              "Threats and safeguards",
              "Ethical conflict resolution",
            ],
            "40–45%"
          ),
          area(
            "Corporate governance",
            [
              "Governance principles and codes",
              "Board structure and committees",
              "Internal control and audit",
            ],
            "30–35%"
          ),
          area(
            "CSR and sustainability",
            [
              "Stakeholders and CSR",
              "Sustainability and the triple bottom line",
              "Reporting frameworks (overview)",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m7-l1",
            "The Code of Ethics and fundamental principles",
            50,
            ["Recall the principles", "Apply them"],
            [
              "Five principles: integrity, objectivity, professional competence and due care, confidentiality, professional behaviour.",
              "The Code uses a principles-based, conceptual-framework approach.",
              "Principles apply to all professional situations.",
              "Compliance protects the public interest.",
            ],
            [
              "Name the five fundamental principles.",
              "Why is a principles-based approach used?",
            ]
          ),
          lesson(
            "cima-certificate-m7-l2",
            "Threats and safeguards",
            50,
            ["Identify threats", "Apply safeguards"],
            [
              "Threats: self-interest, self-review, advocacy, familiarity, intimidation.",
              "Safeguards reduce threats to an acceptable level.",
              "Evaluate threats using professional judgement.",
              "If threats cannot be reduced, decline or withdraw.",
            ],
            [
              "Name the five categories of ethical threat.",
              "What should you do if threats cannot be safeguarded?",
            ],
            "A finance manager asked to overstate results faces a self-interest and intimidation threat; if no safeguard suffices, they must refuse and, if necessary, escalate or resign."
          ),
          lesson(
            "cima-certificate-m7-l3",
            "Corporate governance",
            50,
            ["Explain governance", "Describe structures"],
            [
              "Governance is the system by which organisations are directed and controlled.",
              "Codes (e.g. UK Corporate Governance Code) set principles like board balance and accountability.",
              "Committees (audit, remuneration, nomination) support oversight.",
              "Separation of chair and CEO improves accountability.",
            ],
            [
              "What is corporate governance?",
              "Why separate the roles of chair and CEO?",
            ]
          ),
          lesson(
            "cima-certificate-m7-l4",
            "Internal control and audit",
            40,
            ["Explain internal control", "Describe audit roles"],
            [
              "Internal control safeguards assets and ensures reliable reporting.",
              "Internal audit provides independent assurance to the board.",
              "External audit gives an opinion on the financial statements.",
              "The audit committee oversees both.",
            ],
            [
              "What is the role of internal audit?",
              "What does external audit provide?",
            ]
          ),
          lesson(
            "cima-certificate-m7-l5",
            "CSR and sustainability",
            40,
            ["Explain CSR", "Apply the triple bottom line"],
            [
              "CSR considers the organisation's impact on stakeholders and society.",
              "The triple bottom line balances people, planet, and profit.",
              "Sustainability integrates long-term environmental and social factors.",
              "Reporting frameworks communicate non-financial performance.",
            ],
            [
              "What does the triple bottom line balance?",
              "Why is CSR relevant to management accountants?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Five principles: integrity, objectivity, competence/due care, confidentiality, professional behaviour.",
          "Five threats: self-interest, self-review, advocacy, familiarity, intimidation.",
          "Conceptual framework: identify threats → evaluate → apply safeguards.",
          "Triple bottom line: people, planet, profit.",
        ],
        commonTraps: [
          "Confusing the five principles with the five threats.",
          "Assuming disclosure resolves every ethical conflict.",
          "Overlooking governance committee roles.",
          "Treating CSR as purely a PR exercise.",
        ],
        examTechnique: [
          "For ethics items, name the threat and the safeguard.",
          "Apply the conceptual framework rather than rote rules.",
          "Link governance structures to accountability outcomes.",
        ],
        practicePlan: [
          "Week 1: Code, principles, threats, and safeguards.",
          "Week 2: corporate governance and control.",
          "Week 3: CSR, sustainability, and OT practice.",
        ],
        furtherReading: [
          "CIMA Code of Ethics.",
          "CIMA BA4 official study text.",
        ],
      }),
      courseware({
        moduleId: "cima-certificate-m8",
        examId: "cima",
        levelId: "certificate",
        title: "BA4 — Business law — contracts, employment & companies",
        paperCode: "BA4",
        examFormat:
          "Objective-test questions within BA4 on the legal environment of business.",
        estimatedStudyHours: 24,
        overview:
          "This module covers the legal framework businesses operate within: contract law, employment law, company law, and the resolution of disputes, at the level needed by a management accountant.",
        whyItMatters:
          "Accountants must recognise legal obligations and risks in commercial decisions. Understanding contracts, employment, and company law prevents costly errors and supports compliance.",
        learningOutcomes: [
          "Explain the essential elements of a valid contract.",
          "Describe breach of contract and remedies.",
          "Outline key employment-law rights and duties.",
          "Explain company formation, types, and constitution.",
          "Describe directors' duties and shareholder rights.",
          "Outline dispute-resolution methods.",
        ],
        syllabusAreas: [
          area(
            "Contract law",
            [
              "Offer, acceptance, consideration, intention",
              "Terms and their classification",
              "Breach and remedies",
            ],
            "35–40%"
          ),
          area(
            "Employment law",
            [
              "Employee vs contractor",
              "Rights, duties, and dismissal",
              "Discrimination basics",
            ],
            "25–30%"
          ),
          area(
            "Company law",
            [
              "Company types and formation",
              "Constitution and share capital",
              "Directors' duties and shareholders",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-certificate-m8-l1",
            "Formation of a contract",
            50,
            ["Identify contract elements", "Apply to scenarios"],
            [
              "A valid contract needs offer, acceptance, consideration, and intention to create legal relations.",
              "An invitation to treat is not an offer.",
              "Acceptance must be communicated and unqualified.",
              "Consideration must be sufficient but need not be adequate.",
            ],
            [
              "What are the essential elements of a valid contract?",
              "How does an invitation to treat differ from an offer?",
            ]
          ),
          lesson(
            "cima-certificate-m8-l2",
            "Terms, breach, and remedies",
            50,
            ["Classify terms", "Identify remedies"],
            [
              "Conditions are fundamental terms; warranties are minor; innominate terms depend on breach severity.",
              "Breach of condition allows termination and damages; breach of warranty allows damages only.",
              "Damages aim to put the innocent party in the position had the contract been performed.",
              "Other remedies include specific performance and injunctions.",
            ],
            [
              "What is the difference between a condition and a warranty?",
              "What is the aim of contract damages?",
            ],
            "If a supplier delivers goods a day late (a warranty breach) the buyer can claim damages but not reject; if the goods are fundamentally defective (condition breach), the buyer may terminate and claim damages."
          ),
          lesson(
            "cima-certificate-m8-l3",
            "Employment law",
            45,
            ["Distinguish employment status", "Explain rights"],
            [
              "Employees and independent contractors have different rights and tax treatment.",
              "Employees have rights to fair dismissal, minimum notice, and statutory protections.",
              "Unfair and wrongful dismissal are distinct concepts.",
              "Discrimination law protects specified characteristics.",
            ],
            [
              "Why does employment status matter?",
              "How do unfair and wrongful dismissal differ?",
            ]
          ),
          lesson(
            "cima-certificate-m8-l4",
            "Company formation and constitution",
            45,
            ["Compare company types", "Explain the constitution"],
            [
              "Companies can be private or public, limited by shares or guarantee.",
              "A company is a separate legal person from its owners.",
              "The articles of association form the company's constitution.",
              "Share capital represents ownership interests.",
            ],
            [
              "What does 'separate legal personality' mean?",
              "What is contained in the articles of association?",
            ]
          ),
          lesson(
            "cima-certificate-m8-l5",
            "Directors, shareholders, and disputes",
            40,
            ["Explain directors' duties", "Outline dispute resolution"],
            [
              "Directors owe duties to promote the company's success and avoid conflicts.",
              "Shareholders have rights to vote and receive information.",
              "Minority shareholders have protections against unfair prejudice.",
              "Disputes may be resolved by litigation, arbitration, or mediation.",
            ],
            [
              "Name a key duty owed by directors.",
              "What alternatives to litigation exist for disputes?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Contract formula: offer + acceptance + consideration + intention.",
          "Term hierarchy: condition (terminate) > innominate > warranty (damages).",
          "Employment status test affects rights and tax.",
          "Company = separate legal person; articles = constitution.",
        ],
        commonTraps: [
          "Treating an invitation to treat as an offer.",
          "Confusing conditions with warranties.",
          "Mixing unfair and wrongful dismissal.",
          "Forgetting a company's separate legal personality.",
        ],
        examTechnique: [
          "Break contract scenarios into the four elements.",
          "Classify the term to determine the available remedy.",
          "Match the legal concept precisely to the facts.",
        ],
        practicePlan: [
          "Week 1: contract formation, terms, and remedies.",
          "Week 2: employment law.",
          "Week 3: company law and OT practice.",
        ],
        furtherReading: [
          "CIMA BA4 official study text.",
          "Business law references (contract, employment, company).",
        ],
      }),
    ],
  },
  {
    examId: "cima",
    levelId: "operational",
    modules: [
      courseware({
        moduleId: "cima-operational-m1",
        examId: "cima",
        levelId: "operational",
        title: "E1 — Role of the finance function & digital world",
        paperCode: "E1",
        examFormat:
          "E1 objective test: 60 questions in 90 minutes, on-demand. Contributes to the Operational Level alongside the Case Study.",
        estimatedStudyHours: 26,
        overview:
          "E1 examines the role of the finance function in the digital organisation: how finance creates value, its structure and shared services, and how digital technologies are transforming finance and operations.",
        whyItMatters:
          "Modern management accountants must understand how finance adds value and how technology reshapes their role. E1 sets the enterprise context for the Operational Level.",
        learningOutcomes: [
          "Explain the role and activities of the finance function.",
          "Describe how finance creates and preserves value.",
          "Compare finance operating models (shared services, outsourcing, business partnering).",
          "Explain the impact of digital technologies on finance.",
          "Describe data, analytics, and their use in decisions.",
          "Discuss the changing skills required of finance professionals.",
        ],
        syllabusAreas: [
          area(
            "The finance function",
            [
              "Roles and activities of finance",
              "Value creation and preservation",
              "Finance operating models",
            ],
            "40–45%"
          ),
          area(
            "Digital technologies",
            [
              "Cloud, automation, AI, and blockchain (overview)",
              "Big data and analytics",
              "Cybersecurity awareness",
            ],
            "35–40%"
          ),
          area(
            "The changing finance professional",
            [
              "Business partnering",
              "Skills and competencies",
              "Ethics in a digital world",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-operational-m1-l1",
            "The role of the finance function",
            45,
            ["Describe finance activities", "Explain value creation"],
            [
              "Finance provides stewardship, reporting, control, and decision support.",
              "It creates value through insight and preserves value through control.",
              "The function supports strategy execution.",
              "Business partnering links finance to operational decisions.",
            ],
            [
              "How does finance both create and preserve value?",
              "What is business partnering?",
            ]
          ),
          lesson(
            "cima-operational-m1-l2",
            "Finance operating models",
            45,
            ["Compare operating models", "Assess trade-offs"],
            [
              "Shared service centres consolidate transactional processing for efficiency.",
              "Outsourcing transfers activities to third parties.",
              "Business partners are embedded with operations.",
              "Each model trades cost, control, and proximity.",
            ],
            [
              "What is the benefit of a shared service centre?",
              "What are the risks of outsourcing finance activities?",
            ]
          ),
          lesson(
            "cima-operational-m1-l3",
            "Digital technologies in finance",
            50,
            ["Describe key technologies", "Assess their impact"],
            [
              "Cloud computing enables scalable, accessible systems.",
              "Automation and RPA handle routine transactions.",
              "AI and analytics support forecasting and insight.",
              "Blockchain offers secure, distributed records.",
            ],
            [
              "How does RPA change transactional finance?",
              "What does cloud computing enable for finance?",
            ]
          ),
          lesson(
            "cima-operational-m1-l4",
            "Data and analytics",
            45,
            ["Use analytics", "Explain data quality"],
            [
              "Big data (volume, velocity, variety) offers decision insight.",
              "Descriptive, diagnostic, predictive, and prescriptive analytics differ in purpose.",
              "Data quality and governance underpin reliable analysis.",
              "Visualisation communicates insight to decision-makers.",
            ],
            [
              "What are the four types of analytics?",
              "Why is data quality critical?",
            ]
          ),
          lesson(
            "cima-operational-m1-l5",
            "The changing finance professional",
            40,
            ["Describe new skills", "Explain digital ethics"],
            [
              "Finance skills now include data, technology, and communication.",
              "Business partners influence decisions, not just report on them.",
              "Digital ethics addresses data privacy and responsible use.",
              "Continuous learning is essential in a changing environment.",
            ],
            [
              "What new skills do finance professionals need?",
              "Why does digital raise new ethical issues?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Finance value: create (insight) + preserve (control).",
          "Operating models: shared services / outsourcing / business partnering.",
          "Analytics ladder: descriptive → diagnostic → predictive → prescriptive.",
          "Big data 3Vs: volume, velocity, variety.",
        ],
        commonTraps: [
          "Seeing finance as only reporting, not decision support.",
          "Ignoring the risks of outsourcing.",
          "Confusing types of analytics.",
          "Overlooking data governance and ethics.",
        ],
        examTechnique: [
          "Link each technology to a concrete finance impact.",
          "Compare operating models on cost, control, and proximity.",
          "Match analytics type to the decision need.",
        ],
        practicePlan: [
          "Week 1: finance function and operating models.",
          "Week 2: digital technologies and analytics.",
          "Week 3: the changing professional and OT practice.",
        ],
        furtherReading: [
          "CIMA E1 official study text.",
          "CGMA reports on the future of finance.",
        ],
      }),
      courseware({
        moduleId: "cima-operational-m2",
        examId: "cima",
        levelId: "operational",
        title: "E1 — Technology, data & operations management",
        paperCode: "E1",
        examFormat:
          "Objective-test questions within E1 on information systems, operations, and marketing/HR context.",
        estimatedStudyHours: 24,
        overview:
          "This module covers managing operations and the supporting functions: information systems, operations management, quality, supply chain, marketing, and human resource management, and how they interact with finance.",
        whyItMatters:
          "Management accountants operate across functions. Understanding operations, systems, marketing, and HR helps finance partner effectively and measure the right things.",
        learningOutcomes: [
          "Explain the role of information systems in organisations.",
          "Describe operations management and process improvement.",
          "Explain quality management and lean concepts.",
          "Describe supply-chain and procurement management.",
          "Outline the marketing function and the marketing mix.",
          "Explain human resource management's role.",
        ],
        syllabusAreas: [
          area(
            "Information systems and operations",
            [
              "Information systems and ERP",
              "Operations management and process design",
              "Quality management and lean",
            ],
            "40–45%"
          ),
          area(
            "Supply chain and marketing",
            [
              "Supply chain and procurement",
              "Marketing and the marketing mix",
              "Customer relationship management",
            ],
            "30–35%"
          ),
          area(
            "Human resources",
            [
              "HR role and practices",
              "Motivation and performance",
              "Managing the workforce",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-operational-m2-l1",
            "Information systems and ERP",
            45,
            ["Describe IS types", "Explain ERP"],
            [
              "Information systems support operations, management, and strategy.",
              "ERP integrates processes and data across the organisation.",
              "Systems provide timely, consistent information.",
              "Implementation requires change management.",
            ],
            [
              "What does an ERP system integrate?",
              "Why is change management important in IS projects?",
            ]
          ),
          lesson(
            "cima-operational-m2-l2",
            "Operations management",
            50,
            ["Explain operations", "Improve processes"],
            [
              "Operations transform inputs into outputs efficiently.",
              "Process design balances cost, quality, speed, and flexibility.",
              "Capacity and layout decisions affect performance.",
              "Continuous improvement reduces waste.",
            ],
            [
              "What are the objectives of operations management?",
              "What does continuous improvement aim to reduce?",
            ]
          ),
          lesson(
            "cima-operational-m2-l3",
            "Quality and lean",
            45,
            ["Apply quality concepts", "Explain lean"],
            [
              "Total quality management builds quality into processes.",
              "Cost of quality includes prevention, appraisal, and failure costs.",
              "Lean eliminates waste (the seven wastes).",
              "Six Sigma reduces variation.",
            ],
            [
              "What are the categories in the cost of quality?",
              "What does lean seek to eliminate?",
            ],
            "Investing in prevention (training, better design) typically lowers total cost of quality by reducing far more expensive internal and external failure costs."
          ),
          lesson(
            "cima-operational-m2-l4",
            "Supply chain and procurement",
            40,
            ["Explain supply chain", "Manage procurement"],
            [
              "Supply-chain management coordinates flows from suppliers to customers.",
              "Procurement secures inputs at the right cost, quality, and time.",
              "Supplier relationships affect resilience and cost.",
              "Just-in-time reduces inventory but increases dependency.",
            ],
            [
              "What does supply-chain management coordinate?",
              "What is a risk of just-in-time supply?",
            ]
          ),
          lesson(
            "cima-operational-m2-l5",
            "Marketing and HR",
            40,
            ["Apply the marketing mix", "Explain HR's role"],
            [
              "The marketing mix (product, price, place, promotion) shapes customer value.",
              "CRM builds long-term customer relationships.",
              "HR recruits, develops, and retains people.",
              "Motivation theories inform performance management.",
            ],
            [
              "What are the four Ps of the marketing mix?",
              "How does HR contribute to organisational performance?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Operations objectives: cost, quality, speed, dependability, flexibility.",
          "Cost of quality: prevention + appraisal + internal failure + external failure.",
          "Seven wastes (lean): transport, inventory, motion, waiting, overproduction, over-processing, defects.",
          "Marketing mix: product, price, place, promotion.",
        ],
        commonTraps: [
          "Treating quality costs as only failure costs.",
          "Ignoring JIT's dependency risk.",
          "Overlooking change management in IS projects.",
          "Forgetting finance's cross-functional role.",
        ],
        examTechnique: [
          "Match each functional concept to its finance implication.",
          "Use the cost-of-quality categories in quality questions.",
          "Apply the four Ps structure for marketing items.",
        ],
        practicePlan: [
          "Week 1: information systems and operations.",
          "Week 2: quality, lean, and supply chain.",
          "Week 3: marketing, HR, and OT practice.",
        ],
        furtherReading: [
          "CIMA E1 official study text.",
          "Slack et al. — Operations Management (reference).",
        ],
      }),
      courseware({
        moduleId: "cima-operational-m3",
        examId: "cima",
        levelId: "operational",
        title: "P1 — Cost accounting & decision making",
        paperCode: "P1",
        examFormat:
          "P1 objective test: 60 questions in 90 minutes, on-demand.",
        estimatedStudyHours: 28,
        overview:
          "P1 develops cost accounting for planning and decisions: costing systems (absorption, marginal, activity-based), cost-volume-profit, relevant costing, and dealing with risk and uncertainty in short-term decisions.",
        whyItMatters:
          "P1 is the quantitative heart of the Operational Level, providing the costing and decision techniques used constantly in practice and assessed in the case study.",
        learningOutcomes: [
          "Apply absorption, marginal, and activity-based costing.",
          "Perform cost-volume-profit and breakeven analysis.",
          "Apply relevant costing to short-term decisions.",
          "Evaluate decisions under risk and uncertainty.",
          "Use linear programming for limiting-factor decisions.",
          "Explain the strengths and limits of each technique.",
        ],
        syllabusAreas: [
          area(
            "Costing systems",
            [
              "Absorption and marginal costing",
              "Activity-based costing",
              "Overhead allocation",
            ],
            "35–40%"
          ),
          area(
            "Decision making",
            [
              "Cost-volume-profit analysis",
              "Relevant costing and short-term decisions",
              "Limiting factors and linear programming",
            ],
            "35–40%"
          ),
          area(
            "Risk and uncertainty",
            [
              "Expected values and payoff tables",
              "Decision trees",
              "Maximax, maximin, minimax regret",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-operational-m3-l1",
            "Costing systems",
            50,
            ["Apply costing methods", "Compare approaches"],
            [
              "Absorption costing assigns fixed overhead to units; marginal treats it as period cost.",
              "Activity-based costing assigns overhead via cost drivers.",
              "ABC improves accuracy for diverse, overhead-heavy operations.",
              "Method choice affects reported product profitability.",
            ],
            [
              "How does ABC differ from traditional absorption costing?",
              "When is ABC most beneficial?",
            ]
          ),
          lesson(
            "cima-operational-m3-l2",
            "Cost-volume-profit analysis",
            50,
            ["Compute breakeven", "Analyse profit"],
            [
              "Breakeven units = fixed costs ÷ contribution per unit.",
              "Target profit adds required profit to fixed costs.",
              "The contribution/sales ratio supports multi-product CVP.",
              "Margin of safety measures risk buffer.",
            ],
            [
              "How do you compute units for a target profit?",
              "What does the C/S ratio measure?",
            ],
            "To earn £50,000 profit with £100,000 fixed costs and £5 contribution per unit, required sales = (100,000 + 50,000) ÷ 5 = 30,000 units."
          ),
          lesson(
            "cima-operational-m3-l3",
            "Relevant costing",
            45,
            ["Apply relevant costing", "Evaluate decisions"],
            [
              "Only future, incremental cash flows are relevant.",
              "Ignore sunk costs and unavoidable committed costs.",
              "Include opportunity costs.",
              "Apply to make-or-buy, special orders, and shutdown decisions.",
            ],
            [
              "Which costs are relevant to a decision?",
              "How do opportunity costs enter a decision?",
            ]
          ),
          lesson(
            "cima-operational-m3-l4",
            "Limiting factors and linear programming",
            50,
            ["Rank by scarce resource", "Use linear programming"],
            [
              "With one limiting factor, rank by contribution per unit of that resource.",
              "With multiple constraints, use linear programming.",
              "The optimal solution lies at a vertex of the feasible region.",
              "Shadow prices show the value of relaxing a constraint.",
            ],
            [
              "How do you prioritise with a single limiting factor?",
              "What does a shadow price represent?",
            ]
          ),
          lesson(
            "cima-operational-m3-l5",
            "Risk and uncertainty",
            45,
            ["Compute expected values", "Apply decision criteria"],
            [
              "Expected value = Σ(probability × outcome).",
              "Decision trees evaluate sequential decisions.",
              "Maximax (optimist), maximin (pessimist), minimax regret capture attitudes to risk.",
              "Expected value ignores the decision-maker's risk attitude.",
            ],
            [
              "How is expected value calculated?",
              "What does the maximin criterion assume?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Breakeven units = fixed costs ÷ contribution per unit.",
          "Target sales = (fixed costs + target profit) ÷ contribution per unit.",
          "Expected value = Σ(probability × outcome).",
          "Limiting factor: rank by contribution per unit of scarce resource.",
        ],
        commonTraps: [
          "Treating sunk costs as relevant.",
          "Ranking by total contribution instead of per limiting factor.",
          "Confusing maximax and maximin criteria.",
          "Misapplying ABC cost drivers.",
        ],
        examTechnique: [
          "For decisions, list only relevant future cash flows.",
          "Identify the limiting factor before ranking products.",
          "State the decision criterion (EV, maximin) being applied.",
        ],
        practicePlan: [
          "Week 1: costing systems and CVP.",
          "Week 2: relevant costing and limiting factors.",
          "Week 3: risk, uncertainty, and OT practice.",
        ],
        furtherReading: [
          "CIMA P1 official study text.",
          "Drury — Management and Cost Accounting (reference).",
        ],
      }),
      courseware({
        moduleId: "cima-operational-m4",
        examId: "cima",
        levelId: "operational",
        title: "P1 — Budgeting, forecasting & performance measures",
        paperCode: "P1",
        examFormat:
          "Objective-test questions within P1 on budgeting, standard costing, variances, and performance.",
        estimatedStudyHours: 26,
        overview:
          "This module covers budgeting approaches, forecasting techniques, standard costing and variance analysis, and short-term performance measurement.",
        whyItMatters:
          "Budgeting and variance analysis are core management-accounting activities for planning and control, assessed in P1 and applied in the case study.",
        learningOutcomes: [
          "Prepare budgets using different approaches.",
          "Apply forecasting techniques to budgets.",
          "Compute and interpret cost and sales variances.",
          "Reconcile budgeted and actual profit via variances.",
          "Explain behavioural aspects of budgeting.",
          "Assess short-term performance measures.",
        ],
        syllabusAreas: [
          area(
            "Budgeting and forecasting",
            [
              "Budget approaches (incremental, ZBB, rolling)",
              "Forecasting (time series, regression)",
              "Behavioural aspects of budgeting",
            ],
            "35–40%"
          ),
          area(
            "Standard costing and variances",
            [
              "Material, labour, overhead variances",
              "Sales variances",
              "Operating statements and reconciliation",
            ],
            "40–45%"
          ),
          area(
            "Performance measurement",
            [
              "Short-term performance measures",
              "Responsibility accounting",
              "Controllability",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-operational-m4-l1",
            "Budgeting approaches",
            45,
            ["Compare budget methods", "Select appropriately"],
            [
              "Incremental budgeting adjusts prior figures; ZBB justifies from zero.",
              "Rolling budgets update continuously.",
              "Flexible budgets adjust to activity levels.",
              "Approach choice affects effort and control.",
            ],
            [
              "How does zero-based budgeting differ from incremental?",
              "What is a rolling budget?",
            ]
          ),
          lesson(
            "cima-operational-m4-l2",
            "Forecasting",
            45,
            ["Apply forecasting", "Assess reliability"],
            [
              "Time-series analysis separates trend and seasonal components.",
              "Regression estimates relationships between variables.",
              "Forecasts feed budget preparation.",
              "All forecasts carry uncertainty.",
            ],
            [
              "What components does time-series analysis identify?",
              "How does regression support forecasting?",
            ]
          ),
          lesson(
            "cima-operational-m4-l3",
            "Cost variances",
            55,
            ["Compute cost variances", "Interpret causes"],
            [
              "Material variances split into price and usage.",
              "Labour variances split into rate and efficiency.",
              "Overhead variances cover expenditure and volume/efficiency.",
              "Variances direct investigation to causes.",
            ],
            [
              "What are the two components of the material variance?",
              "What does a labour efficiency variance measure?",
            ],
            "If standard is 2kg at £5/kg but 2.2kg at £4.80 was used, the usage variance is adverse (extra 0.2kg) while the price variance is favourable (£0.20/kg cheaper) — both must be reported."
          ),
          lesson(
            "cima-operational-m4-l4",
            "Sales variances and reconciliation",
            45,
            ["Compute sales variances", "Reconcile profit"],
            [
              "Sales variances split into price and volume.",
              "An operating statement reconciles budgeted to actual profit.",
              "Marginal and absorption reconciliations differ.",
              "Reconciliation explains performance to management.",
            ],
            [
              "What are the components of the sales variance?",
              "What does an operating statement reconcile?",
            ]
          ),
          lesson(
            "cima-operational-m4-l5",
            "Performance and behaviour",
            40,
            ["Assess performance", "Explain behavioural effects"],
            [
              "Responsibility accounting assigns performance to managers.",
              "Only controllable items should be judged.",
              "Budgets influence behaviour — targets can motivate or distort.",
              "Participation and realism improve budget effectiveness.",
            ],
            [
              "What is the controllability principle?",
              "How can budgets distort behaviour?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Material: price variance = (std − actual price) × actual qty; usage = (std − actual qty) × std price.",
          "Labour: rate = (std − actual rate) × actual hours; efficiency = (std − actual hours) × std rate.",
          "Sales: price and volume variances.",
          "Operating statement reconciles budget → actual profit.",
        ],
        commonTraps: [
          "Mixing price and usage/efficiency components.",
          "Using actual instead of standard prices in usage variances.",
          "Judging managers on uncontrollable items.",
          "Ignoring behavioural effects of budgets.",
        ],
        examTechnique: [
          "Lay out the variance formula and plug values carefully.",
          "State whether each variance is favourable or adverse.",
          "Build the operating statement in a clear reconciliation format.",
        ],
        practicePlan: [
          "Week 1: budgeting approaches and forecasting.",
          "Week 2: cost and sales variances.",
          "Week 3: reconciliation, performance, and OT practice.",
        ],
        furtherReading: [
          "CIMA P1 official study text.",
          "Standard costing and variance references.",
        ],
      }),
      courseware({
        moduleId: "cima-operational-m5",
        examId: "cima",
        levelId: "operational",
        title: "F1 — Financial reporting & taxation basics",
        paperCode: "F1",
        examFormat:
          "F1 objective test: 60 questions in 90 minutes, on-demand.",
        estimatedStudyHours: 28,
        overview:
          "F1 covers financial reporting under IFRS, the regulatory framework, principal financial statements, single-entity reporting, and the fundamentals of business taxation.",
        whyItMatters:
          "F1 provides the financial reporting and tax foundation that finance professionals apply constantly and that later levels build upon.",
        learningOutcomes: [
          "Explain the regulatory framework and the IFRS conceptual framework.",
          "Prepare single-entity financial statements under IFRS.",
          "Apply key IFRS standards (revenue, PPE, leases, inventories).",
          "Prepare a statement of cash flows.",
          "Explain the principles of business taxation.",
          "Compute basic corporate tax and understand tax types.",
        ],
        syllabusAreas: [
          area(
            "Regulatory and conceptual framework",
            [
              "IFRS and standard-setting",
              "Conceptual framework and qualitative characteristics",
              "Presentation of financial statements",
            ],
            "25–30%"
          ),
          area(
            "Financial statements and IFRS",
            [
              "Revenue, PPE, inventories, leases",
              "Single-entity statements",
              "Statement of cash flows",
            ],
            "40–45%"
          ),
          area(
            "Taxation",
            [
              "Principles and types of tax",
              "Corporate income tax computation",
              "Indirect taxes and administration",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-operational-m5-l1",
            "Regulatory and conceptual framework",
            45,
            ["Explain the framework", "Apply qualitative characteristics"],
            [
              "IFRS are set by the IASB and provide global reporting standards.",
              "The conceptual framework guides standard-setting and judgement.",
              "Qualitative characteristics: relevance and faithful representation (plus comparability, verifiability, timeliness, understandability).",
              "The framework underpins consistent reporting.",
            ],
            [
              "Who sets IFRS?",
              "What are the two fundamental qualitative characteristics?",
            ]
          ),
          lesson(
            "cima-operational-m5-l2",
            "Key IFRS standards",
            55,
            ["Apply core standards", "Recognise and measure"],
            [
              "IFRS 15 recognises revenue via the five-step model.",
              "IAS 16 measures property, plant and equipment (cost/revaluation, depreciation).",
              "IAS 2 measures inventory at the lower of cost and net realisable value.",
              "IFRS 16 brings most leases onto the balance sheet.",
            ],
            [
              "What is the core principle of IFRS 15 revenue recognition?",
              "How is inventory measured under IAS 2?",
            ],
            "Under IAS 2, inventory costing £100 that can now only be sold for £90 (less selling costs) is written down to net realisable value, recognising the loss immediately."
          ),
          lesson(
            "cima-operational-m5-l3",
            "Single-entity financial statements",
            50,
            ["Prepare statements", "Apply presentation rules"],
            [
              "Prepare the statement of profit or loss and financial position under IAS 1.",
              "Classify items correctly (current/non-current).",
              "Include required disclosures.",
              "Ensure the statements articulate consistently.",
            ],
            [
              "What does IAS 1 govern?",
              "How are assets classified in the balance sheet?",
            ]
          ),
          lesson(
            "cima-operational-m5-l4",
            "Statement of cash flows",
            45,
            ["Prepare cash flow", "Classify activities"],
            [
              "IAS 7 classifies flows into operating, investing, and financing.",
              "The indirect method adjusts profit for non-cash items and working capital.",
              "Cash flow assesses liquidity and quality of earnings.",
              "Reconcile opening to closing cash.",
            ],
            [
              "How does the indirect method derive operating cash flow?",
              "What does the statement of cash flows assess?",
            ]
          ),
          lesson(
            "cima-operational-m5-l5",
            "Taxation fundamentals",
            45,
            ["Explain tax principles", "Compute basic tax"],
            [
              "Taxes are direct (on income/profits) or indirect (on consumption).",
              "Corporate tax is computed on taxable profit after allowable adjustments.",
              "Capital allowances replace accounting depreciation for tax.",
              "Administration includes filing, payment, and compliance.",
            ],
            [
              "What is the difference between direct and indirect tax?",
              "Why are capital allowances used instead of depreciation for tax?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "IFRS 15 five-step model: contract → obligations → price → allocate → recognise.",
          "IAS 2: inventory at lower of cost and NRV.",
          "Cash flow: operating + investing + financing (IAS 7).",
          "Taxable profit = accounting profit ± tax adjustments (add back depreciation, deduct capital allowances).",
        ],
        commonTraps: [
          "Recognising revenue before performance obligations are satisfied.",
          "Valuing inventory above net realisable value.",
          "Using accounting depreciation in the tax computation.",
          "Misclassifying cash-flow activities.",
        ],
        examTechnique: [
          "Apply the IFRS 15 five steps in order.",
          "For tax, start from accounting profit and adjust systematically.",
          "Classify each cash flow into the correct category.",
        ],
        practicePlan: [
          "Week 1: frameworks and key IFRS standards.",
          "Week 2: financial statements and cash flow.",
          "Week 3: taxation and OT practice.",
        ],
        furtherReading: [
          "CIMA F1 official study text.",
          "IFRS standards (IAS 1, 2, 7, 16; IFRS 15, 16).",
        ],
      }),
      courseware({
        moduleId: "cima-operational-m6",
        examId: "cima",
        levelId: "operational",
        title: "F1 — Working capital & short-term finance",
        paperCode: "F1",
        examFormat:
          "Objective-test questions within F1 on working capital management and short-term financing decisions.",
        estimatedStudyHours: 24,
        overview:
          "This module applies working-capital management within the financial reporting context: managing cash, receivables, payables, and inventory, and financing short-term needs, with a focus on the finance function's decisions.",
        whyItMatters:
          "Working capital drives liquidity and cash flow. F1 links reporting to the practical financing decisions the finance function makes daily.",
        learningOutcomes: [
          "Analyse the working-capital cycle and its funding.",
          "Manage cash using budgets and models.",
          "Optimise receivables and payables policies.",
          "Apply inventory-management techniques.",
          "Evaluate short-term financing options.",
          "Assess the liquidity-profitability trade-off.",
        ],
        syllabusAreas: [
          area(
            "Working capital management",
            [
              "Working-capital cycle and funding",
              "Liquidity vs profitability",
              "Over-trading",
            ],
            "35–40%"
          ),
          area(
            "Cash and receivables/payables",
            [
              "Cash budgeting and models",
              "Credit and receivables management",
              "Payables and discounts",
            ],
            "35–40%"
          ),
          area(
            "Short-term finance",
            [
              "Sources of short-term finance",
              "Financing strategies (aggressive/conservative)",
              "Cost of finance",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-operational-m6-l1",
            "Working-capital cycle and funding",
            45,
            ["Analyse the cycle", "Choose funding strategy"],
            [
              "The cash operating cycle measures financing days needed.",
              "Aggressive strategies use more short-term finance; conservative use more long-term.",
              "Matching funds asset life to finance term reduces risk.",
              "Over-trading strains working capital during rapid growth.",
            ],
            [
              "What is the difference between aggressive and conservative funding?",
              "Why match asset life to finance term?",
            ]
          ),
          lesson(
            "cima-operational-m6-l2",
            "Cash management",
            50,
            ["Prepare cash budgets", "Apply cash models"],
            [
              "Cash budgets forecast surpluses and deficits.",
              "Baumol and Miller-Orr models guide optimal cash balances.",
              "Surpluses should earn return; deficits need financing.",
              "Timing of flows drives cash decisions.",
            ],
            [
              "What do Baumol and Miller-Orr models address?",
              "Why prepare a cash budget?",
            ]
          ),
          lesson(
            "cima-operational-m6-l3",
            "Receivables and payables",
            45,
            ["Manage credit", "Evaluate discounts"],
            [
              "Credit policy balances sales, bad debts, and financing cost.",
              "Factoring and invoice discounting release cash.",
              "Early-settlement discounts have an implied annual cost.",
              "Payables timing affects cash and supplier relations.",
            ],
            [
              "How do you evaluate an early-settlement discount?",
              "What is the benefit of factoring?",
            ],
            "A 2% discount for paying 20 days early (versus 40 days) implies an annualised cost of roughly 2/98 × 365/20 ≈ 37% — often cheaper to decline unless finance is very expensive."
          ),
          lesson(
            "cima-operational-m6-l4",
            "Inventory management",
            40,
            ["Apply EOQ", "Set control levels"],
            [
              "EOQ minimises ordering and holding costs.",
              "Reorder levels and safety stock avoid stockouts.",
              "JIT reduces holding costs but raises supply risk.",
              "Inventory ties up working capital.",
            ],
            [
              "What does EOQ minimise?",
              "What is the trade-off with just-in-time inventory?",
            ]
          ),
          lesson(
            "cima-operational-m6-l5",
            "Short-term finance sources",
            35,
            ["Compare sources", "Assess cost"],
            [
              "Overdrafts and short-term loans provide flexible funding.",
              "Trade credit is often 'free' but has an implicit cost if discounts are foregone.",
              "Choose sources by cost, flexibility, and risk.",
              "Match short-term finance to short-term needs.",
            ],
            [
              "Why is trade credit not truly free?",
              "How should short-term finance be matched to needs?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Cash operating cycle = inventory days + receivables days − payables days.",
          "EOQ = √(2 × D × Co ÷ Ch).",
          "Discount cost ≈ (d ÷ (1 − d)) × (365 ÷ days early).",
          "Funding: match asset life to finance term.",
        ],
        commonTraps: [
          "Confusing profit and cash.",
          "Ignoring the implicit cost of foregone discounts.",
          "Financing long-term assets short-term.",
          "Overlooking holding costs in inventory decisions.",
        ],
        examTechnique: [
          "Compute the cash cycle before assessing funding.",
          "Annualise discount terms for comparison.",
          "State assumptions in cash-budget questions.",
        ],
        practicePlan: [
          "Week 1: working-capital cycle and cash management.",
          "Week 2: receivables, payables, and inventory.",
          "Week 3: short-term finance and OT practice.",
        ],
        furtherReading: [
          "CIMA F1 official study text.",
          "Working capital management references.",
        ],
      }),
      courseware({
        moduleId: "cima-operational-m7",
        examId: "cima",
        levelId: "operational",
        title: "Operational Case Study — integrated application",
        examFormat:
          "Operational Case Study (OCS): a computer-based, role-simulation exam (~3 hours) integrating E1, P1, and F1 in a realistic business scenario. Assessed against core activities and skills.",
        estimatedStudyHours: 40,
        overview:
          "The Operational Case Study integrates the three operational pillars into a simulated finance-officer role. This module teaches how to apply E1, P1, and F1 knowledge to a pre-seen and unseen scenario, structure answers, and demonstrate the required competencies.",
        whyItMatters:
          "The case study is where knowledge becomes capability. Passing requires integrating technical skills with business awareness and clear communication under time pressure.",
        learningOutcomes: [
          "Integrate E1, P1, and F1 knowledge into scenario responses.",
          "Analyse a pre-seen case and prepare effectively.",
          "Apply costing, budgeting, and reporting to business situations.",
          "Communicate recommendations clearly and professionally.",
          "Manage time across multiple exam tasks.",
          "Demonstrate the operational-level core activities and skills.",
        ],
        syllabusAreas: [
          area(
            "Integration of pillars",
            [
              "Applying E1 (enterprise/digital)",
              "Applying P1 (costing/decisions)",
              "Applying F1 (reporting/tax/working capital)",
            ],
            "50–55%"
          ),
          area(
            "Case-study skills",
            [
              "Pre-seen analysis and preparation",
              "Answer structure and communication",
              "Time and task management",
            ],
            "30–35%"
          ),
          area(
            "Professional competencies",
            [
              "Core activities of the finance officer role",
              "Business and ethical judgement",
              "Data and technology awareness",
            ],
            "15–20%"
          ),
        ],
        lessons: [
          lesson(
            "cima-operational-m7-l1",
            "Understanding the case-study format",
            45,
            ["Explain the OCS format", "Map to competencies"],
            [
              "The OCS simulates a finance-officer role responding to tasks.",
              "It integrates E1, P1, and F1 rather than testing them separately.",
              "Marks reflect core activities and skills, not just technical answers.",
              "Business context and communication matter.",
            ],
            [
              "How does the case study differ from objective tests?",
              "What is assessed beyond technical knowledge?",
            ]
          ),
          lesson(
            "cima-operational-m7-l2",
            "Analysing the pre-seen material",
            50,
            ["Analyse the pre-seen", "Prepare notes"],
            [
              "Study the pre-seen organisation, its industry, and its finances.",
              "Identify likely issues and relevant techniques.",
              "Prepare structured notes and ratio analysis in advance.",
              "Anticipate how pillars might be tested.",
            ],
            [
              "Why analyse the pre-seen thoroughly?",
              "What should pre-seen preparation include?",
            ]
          ),
          lesson(
            "cima-operational-m7-l3",
            "Applying technical knowledge to tasks",
            55,
            ["Integrate the pillars", "Apply to scenarios"],
            [
              "Bring costing and decision techniques (P1) to business problems.",
              "Apply reporting, tax, and working-capital knowledge (F1).",
              "Use enterprise and digital context (E1) to frame recommendations.",
              "Tailor techniques to the specific scenario.",
            ],
            [
              "How do you integrate the three pillars in an answer?",
              "Why tailor techniques to the scenario?",
            ],
            "Asked to advise on a new product, a strong answer combines P1 relevant costing/CVP, F1 working-capital and reporting impacts, and E1 digital/operational context — integrated, not siloed."
          ),
          lesson(
            "cima-operational-m7-l4",
            "Structuring and communicating answers",
            50,
            ["Structure responses", "Communicate professionally"],
            [
              "Answer the specific requirement in the requested format (e.g. email, briefing).",
              "Use clear structure with justified recommendations.",
              "Write for the audience — concise, professional, jargon-appropriate.",
              "Support points with figures and reasoning.",
            ],
            [
              "Why answer in the requested format?",
              "What makes a recommendation persuasive?",
            ]
          ),
          lesson(
            "cima-operational-m7-l5",
            "Time management and exam technique",
            40,
            ["Manage time", "Prioritise tasks"],
            [
              "Allocate time to tasks by their mark weighting.",
              "Read requirements carefully to answer what is asked.",
              "Avoid over-running on one task at others' expense.",
              "Leave time to review answers.",
            ],
            [
              "How should time be allocated across tasks?",
              "Why read the requirement carefully first?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Integration lens: E1 (enterprise/digital) + P1 (costing/decisions) + F1 (reporting/tax/WC).",
          "Answer structure: requirement → analysis → recommendation → justification.",
          "Time allocation: proportional to task marks.",
          "Pre-seen prep: business + industry + financials + likely issues.",
        ],
        commonTraps: [
          "Treating the case as separate technical exams rather than integrated.",
          "Ignoring the requested answer format.",
          "Over-running on one task.",
          "Providing calculations without recommendations.",
        ],
        examTechnique: [
          "Read each requirement and answer exactly what is asked.",
          "Integrate pillars where the scenario allows.",
          "Manage time strictly by mark weighting.",
        ],
        practicePlan: [
          "Weeks 1–2: analyse the pre-seen and prepare notes.",
          "Weeks 3–4: practise full mock case studies under timed conditions.",
          "Week 5: refine structure, communication, and time management.",
        ],
        furtherReading: [
          "CIMA Operational Case Study pre-seen and past exams.",
          "CIMA case-study examiner reports and marking guidance.",
        ],
      }),
    ],
  },
  {
    examId: "cima",
    levelId: "management",
    modules: [
      courseware({
        moduleId: "cima-management-m1",
        examId: "cima",
        levelId: "management",
        title: "E2 — Business models, project & relationship management",
        paperCode: "E2",
        examFormat:
          "E2 objective test: 60 questions in 90 minutes, on-demand. Contributes to the Management Level with the Case Study.",
        estimatedStudyHours: 26,
        overview:
          "E2 covers managing performance through business models, project management, and relationship management. This module examines value creation, project delivery, and managing stakeholders and teams.",
        whyItMatters:
          "The Management Level shifts to managing performance across the organisation. E2 provides the models and project/relationship skills to translate strategy into delivery.",
        learningOutcomes: [
          "Explain business models and how they create value.",
          "Apply project-management methods and tools.",
          "Manage project constraints, risk, and stakeholders.",
          "Explain relationship and contract management.",
          "Apply negotiation and influencing skills.",
          "Manage teams and cross-functional working.",
        ],
        syllabusAreas: [
          area(
            "Business models and value",
            [
              "Business model components and value creation",
              "Ecosystems and disruption (overview)",
              "Value chain",
            ],
            "30–35%"
          ),
          area(
            "Project management",
            [
              "Project lifecycle and methods",
              "Scope, time, cost, quality, risk",
              "Tools (Gantt, network analysis)",
            ],
            "35–40%"
          ),
          area(
            "Relationship management",
            [
              "Stakeholder management",
              "Contract and supplier relationships",
              "Negotiation and influence",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cima-management-m1-l1",
            "Business models and value creation",
            45,
            ["Explain business models", "Analyse value"],
            [
              "A business model describes how an organisation creates, delivers, and captures value.",
              "The value chain identifies primary and support activities.",
              "Digital disruption reshapes traditional models.",
              "Understanding the model guides performance management.",
            ],
            [
              "What does a business model describe?",
              "What does the value chain identify?",
            ]
          ),
          lesson(
            "cima-management-m1-l2",
            "Project management fundamentals",
            50,
            ["Explain the lifecycle", "Manage constraints"],
            [
              "Projects move through initiation, planning, execution, and closure.",
              "The iron triangle balances scope, time, and cost with quality.",
              "A business case justifies the project.",
              "Clear objectives and governance drive success.",
            ],
            [
              "What are the phases of the project lifecycle?",
              "What does the iron triangle balance?",
            ]
          ),
          lesson(
            "cima-management-m1-l3",
            "Project tools and risk",
            50,
            ["Use project tools", "Manage project risk"],
            [
              "Gantt charts schedule tasks over time.",
              "Network analysis (critical path) identifies the longest dependent path.",
              "Slack/float shows scheduling flexibility.",
              "Risk registers track and mitigate project risks.",
            ],
            [
              "What does the critical path identify?",
              "What is float (slack) in network analysis?",
            ],
            "In a network with a critical path of 20 days, activities off the critical path have float; delaying them within their float does not delay the project, but delaying a critical activity does."
          ),
          lesson(
            "cima-management-m1-l4",
            "Stakeholder and relationship management",
            45,
            ["Map stakeholders", "Manage relationships"],
            [
              "Stakeholder mapping (power/interest) prioritises engagement.",
              "Relationship management sustains cooperation over time.",
              "Contract management ensures suppliers deliver.",
              "Trust and communication underpin relationships.",
            ],
            [
              "How does a power/interest grid guide engagement?",
              "Why is contract management important?",
            ]
          ),
          lesson(
            "cima-management-m1-l5",
            "Negotiation and teams",
            40,
            ["Apply negotiation", "Manage teams"],
            [
              "Negotiation seeks mutually acceptable outcomes (win-win where possible).",
              "Preparation and BATNA strengthen negotiating position.",
              "Teams progress through stages (forming to performing).",
              "Cross-functional teams require coordination.",
            ],
            [
              "What is a BATNA?",
              "What are the stages of team development?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Iron triangle: scope, time, cost (with quality at the centre).",
          "Critical path: longest dependent sequence = minimum project duration.",
          "Float = latest start − earliest start.",
          "Stakeholder grid: power × interest.",
        ],
        commonTraps: [
          "Confusing the critical path with the longest activity.",
          "Ignoring quality when balancing the iron triangle.",
          "Neglecting stakeholder engagement.",
          "Entering negotiation without a BATNA.",
        ],
        examTechnique: [
          "Compute the critical path methodically.",
          "Apply the power/interest grid to stakeholder questions.",
          "Link business-model concepts to performance implications.",
        ],
        practicePlan: [
          "Week 1: business models and value chain.",
          "Week 2: project lifecycle, tools, and risk.",
          "Week 3: relationship management and OT practice.",
        ],
        furtherReading: [
          "CIMA E2 official study text.",
          "Project management (PMBOK/PRINCE2 overviews).",
        ],
      }),
      courseware({
        moduleId: "cima-management-m2",
        examId: "cima",
        levelId: "management",
        title: "E2 — Managing people & organisational change",
        paperCode: "E2",
        examFormat:
          "Objective-test questions within E2 on leadership, managing people, and change.",
        estimatedStudyHours: 24,
        overview:
          "This module covers leadership, managing individuals and teams, motivation, performance management, and leading organisational change.",
        whyItMatters:
          "Managers deliver performance through people. Leadership, motivation, and change-management skills are essential to implementing strategy and are tested in E2 and the case study.",
        learningOutcomes: [
          "Compare leadership and management theories.",
          "Apply motivation theories to the workplace.",
          "Manage individual and team performance.",
          "Explain performance appraisal and development.",
          "Apply change-management models.",
          "Address resistance to change.",
        ],
        syllabusAreas: [
          area(
            "Leadership and management",
            [
              "Leadership styles and theories",
              "Management roles",
              "Emotional intelligence",
            ],
            "30–35%"
          ),
          area(
            "Managing people",
            [
              "Motivation theories",
              "Performance management and appraisal",
              "Coaching and development",
            ],
            "35–40%"
          ),
          area(
            "Organisational change",
            [
              "Change models (Lewin, Kotter)",
              "Drivers and types of change",
              "Managing resistance",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cima-management-m2-l1",
            "Leadership and management",
            50,
            ["Compare leadership theories", "Apply styles"],
            [
              "Trait, behavioural, and contingency theories explain leadership.",
              "Leadership style should fit the situation and followers.",
              "Management focuses on planning and control; leadership on vision and change.",
              "Emotional intelligence enhances leadership effectiveness.",
            ],
            [
              "How does leadership differ from management?",
              "What does contingency theory suggest about style?",
            ]
          ),
          lesson(
            "cima-management-m2-l2",
            "Motivation",
            50,
            ["Apply motivation theories", "Design incentives"],
            [
              "Content theories (Maslow, Herzberg) explain what motivates.",
              "Process theories (Vroom's expectancy) explain how motivation works.",
              "Hygiene factors prevent dissatisfaction; motivators drive satisfaction.",
              "Incentives should align with desired behaviour.",
            ],
            [
              "How do content and process theories differ?",
              "What is the difference between hygiene factors and motivators?",
            ],
            "Herzberg suggests improving pay or conditions (hygiene) removes dissatisfaction but does not motivate; genuine motivation comes from achievement, recognition, and responsibility."
          ),
          lesson(
            "cima-management-m2-l3",
            "Performance management",
            45,
            ["Manage performance", "Conduct appraisals"],
            [
              "Performance management aligns individual goals with organisational objectives.",
              "Appraisals review performance and set development goals.",
              "Feedback should be specific, timely, and constructive.",
              "Coaching supports continuous development.",
            ],
            [
              "What is the purpose of performance management?",
              "What makes feedback effective?",
            ]
          ),
          lesson(
            "cima-management-m2-l4",
            "Leading change",
            45,
            ["Apply change models", "Plan change"],
            [
              "Lewin's model: unfreeze, change, refreeze.",
              "Kotter's eight steps guide larger transformations.",
              "Change has drivers (external and internal) and types (incremental/transformational).",
              "Communication and involvement ease change.",
            ],
            [
              "What are the three stages of Lewin's model?",
              "Why is communication vital in change?",
            ]
          ),
          lesson(
            "cima-management-m2-l5",
            "Managing resistance to change",
            40,
            ["Diagnose resistance", "Overcome it"],
            [
              "Resistance stems from fear, misunderstanding, and self-interest.",
              "Involvement, communication, and support reduce resistance.",
              "Force-field analysis weighs drivers against restraints.",
              "Leaders must sustain change to prevent regression.",
            ],
            [
              "What causes resistance to change?",
              "What does force-field analysis assess?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Lewin: unfreeze → change → refreeze.",
          "Kotter: 8 steps for leading change.",
          "Herzberg: hygiene factors vs motivators.",
          "Force-field analysis: driving forces vs restraining forces.",
        ],
        commonTraps: [
          "Confusing content and process motivation theories.",
          "Treating hygiene improvements as motivators.",
          "Skipping the refreeze/sustain stage of change.",
          "Ignoring the sources of resistance.",
        ],
        examTechnique: [
          "Name the theory or model and apply it to the scenario.",
          "Match leadership style to the situation.",
          "Use force-field analysis for change questions.",
        ],
        practicePlan: [
          "Week 1: leadership and motivation.",
          "Week 2: performance management.",
          "Week 3: change management and OT practice.",
        ],
        furtherReading: [
          "CIMA E2 official study text.",
          "Organisational behaviour references.",
        ],
      }),
      courseware({
        moduleId: "cima-management-m3",
        examId: "cima",
        levelId: "management",
        title: "P2 — Advanced costing, pricing & risk",
        paperCode: "P2",
        examFormat:
          "P2 objective test: 60 questions in 90 minutes, on-demand.",
        estimatedStudyHours: 28,
        overview:
          "P2 advances management accounting to strategic cost management, advanced costing techniques, pricing strategies, and managing risk in longer-term decisions including capital investment.",
        whyItMatters:
          "P2 equips management accountants to support medium-term decisions with advanced costing, pricing, and risk techniques central to the Management Level and case study.",
        learningOutcomes: [
          "Apply advanced costing (ABC, activity-based management, lifecycle, target).",
          "Explain strategic cost management approaches.",
          "Apply pricing strategies and demand-based pricing.",
          "Evaluate capital-investment decisions.",
          "Incorporate risk and sensitivity into decisions.",
          "Apply cost management to value creation.",
        ],
        syllabusAreas: [
          area(
            "Advanced costing",
            [
              "ABC and activity-based management",
              "Lifecycle, target, and kaizen costing",
              "Environmental and quality costing",
            ],
            "35–40%"
          ),
          area(
            "Pricing and decisions",
            [
              "Pricing strategies",
              "Demand and price setting",
              "Cost-plus vs market pricing",
            ],
            "25–30%"
          ),
          area(
            "Investment and risk",
            [
              "Capital investment appraisal",
              "Sensitivity and scenario analysis",
              "Risk in decisions",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-management-m3-l1",
            "Advanced costing techniques",
            55,
            ["Apply advanced costing", "Support decisions"],
            [
              "Activity-based management uses ABC information to improve processes.",
              "Lifecycle costing captures costs across a product's whole life.",
              "Target costing sets cost from a market price and margin.",
              "Kaizen costing pursues continuous cost reduction.",
            ],
            [
              "How does target costing derive a cost target?",
              "What does lifecycle costing capture?",
            ],
            "If the market price is £100 and the required margin is 30%, target costing sets a cost ceiling of £70, driving design to meet it rather than pricing up from cost."
          ),
          lesson(
            "cima-management-m3-l2",
            "Strategic and environmental cost management",
            45,
            ["Apply strategic cost management", "Include quality/environment"],
            [
              "Strategic cost management links costs to competitive advantage.",
              "Quality costing distinguishes conformance and non-conformance costs.",
              "Environmental costing captures sustainability-related costs.",
              "Cost management supports value creation.",
            ],
            [
              "What is the aim of strategic cost management?",
              "Why capture environmental costs?",
            ]
          ),
          lesson(
            "cima-management-m3-l3",
            "Pricing strategies",
            45,
            ["Apply pricing strategies", "Set prices"],
            [
              "Pricing strategies include penetration, skimming, and premium.",
              "Demand-based pricing uses elasticity and willingness to pay.",
              "Cost-plus is simple but ignores demand.",
              "Prices should reflect strategy and market conditions.",
            ],
            [
              "When is penetration pricing appropriate?",
              "What is the weakness of cost-plus pricing?",
            ]
          ),
          lesson(
            "cima-management-m3-l4",
            "Capital investment appraisal",
            50,
            ["Appraise investments", "Interpret results"],
            [
              "NPV discounts cash flows at the cost of capital; positive NPV adds value.",
              "IRR is the rate where NPV is zero.",
              "Payback and ARR are simpler but flawed measures.",
              "NPV is generally the preferred criterion.",
            ],
            [
              "Why is NPV preferred over payback?",
              "What does a positive NPV indicate?",
            ]
          ),
          lesson(
            "cima-management-m3-l5",
            "Risk in decisions",
            45,
            ["Apply sensitivity analysis", "Handle risk"],
            [
              "Sensitivity analysis shows how changes in inputs affect outcomes.",
              "Scenario analysis evaluates combinations of changes.",
              "Expected values and simulation quantify risk.",
              "Risk-adjusted discount rates reflect project risk.",
            ],
            [
              "What does sensitivity analysis reveal?",
              "How can risk be reflected in the discount rate?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Target cost = market price − required profit margin.",
          "NPV = Σ [cash flow ÷ (1 + r)^t] − initial investment.",
          "IRR: rate where NPV = 0.",
          "Sensitivity = % change in variable that makes NPV zero.",
        ],
        commonTraps: [
          "Pricing up from cost when the market sets the price (use target costing).",
          "Preferring IRR over NPV for mutually exclusive projects.",
          "Ignoring risk in investment appraisal.",
          "Confusing conformance and non-conformance quality costs.",
        ],
        examTechnique: [
          "Use NPV as the primary investment criterion.",
          "Apply target costing when a market price is given.",
          "Quantify risk with sensitivity/expected values.",
        ],
        practicePlan: [
          "Week 1: advanced costing techniques.",
          "Week 2: pricing and investment appraisal.",
          "Week 3: risk analysis and OT practice.",
        ],
        furtherReading: [
          "CIMA P2 official study text.",
          "Strategic cost management references.",
        ],
      }),
      courseware({
        moduleId: "cima-management-m4",
        examId: "cima",
        levelId: "management",
        title: "P2 — Managing performance of organisational units",
        paperCode: "P2",
        examFormat:
          "Objective-test questions within P2 on divisional performance, transfer pricing, and performance measurement.",
        estimatedStudyHours: 26,
        overview:
          "This module covers measuring and managing the performance of organisational units: responsibility centres, divisional performance measures, transfer pricing, and integrated performance-management frameworks.",
        whyItMatters:
          "Large organisations manage through divisions. Getting performance measures and transfer prices right drives goal-congruent behaviour, a core P2 and case-study theme.",
        learningOutcomes: [
          "Explain responsibility centres and controllability.",
          "Compute and interpret divisional performance measures (ROI, RI, EVA).",
          "Apply transfer-pricing methods and evaluate their effects.",
          "Assess the behavioural impact of performance measures.",
          "Apply integrated performance frameworks (e.g. balanced scorecard).",
          "Recommend measures that promote goal congruence.",
        ],
        syllabusAreas: [
          area(
            "Responsibility and divisional performance",
            [
              "Cost, profit, investment centres",
              "ROI, residual income, EVA",
              "Controllability",
            ],
            "40–45%"
          ),
          area(
            "Transfer pricing",
            [
              "Cost-based, market-based, negotiated",
              "Goal congruence effects",
              "International transfer pricing (overview)",
            ],
            "30–35%"
          ),
          area(
            "Integrated performance",
            [
              "Balanced scorecard",
              "Financial and non-financial measures",
              "Behavioural effects",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-management-m4-l1",
            "Responsibility centres",
            45,
            ["Classify centres", "Apply controllability"],
            [
              "Cost, revenue, profit, and investment centres differ in managerial control.",
              "Managers should be judged only on controllable items.",
              "Responsibility accounting supports accountability.",
              "Centre type determines the appropriate measure.",
            ],
            [
              "How does a profit centre differ from an investment centre?",
              "Why apply the controllability principle?",
            ]
          ),
          lesson(
            "cima-management-m4-l2",
            "Divisional performance measures",
            55,
            ["Compute ROI and RI", "Interpret EVA"],
            [
              "ROI = divisional profit ÷ capital employed.",
              "Residual income = profit − (capital employed × cost of capital).",
              "EVA refines RI with accounting adjustments.",
              "ROI can discourage value-adding investment; RI/EVA address this.",
            ],
            [
              "How can ROI discourage a beneficial investment?",
              "How is residual income calculated?",
            ],
            "A division with 20% ROI may reject a project earning 15% (above the 10% cost of capital) to protect its average — residual income would correctly accept it because it adds value."
          ),
          lesson(
            "cima-management-m4-l3",
            "Transfer pricing",
            50,
            ["Apply transfer methods", "Assess goal congruence"],
            [
              "Transfer prices allocate value between divisions.",
              "Methods: market-based, cost-based, and negotiated.",
              "Market price promotes goal congruence when a market exists.",
              "Poor transfer prices distort divisional decisions.",
            ],
            [
              "Which transfer-pricing basis best promotes goal congruence?",
              "How can transfer prices distort decisions?",
            ]
          ),
          lesson(
            "cima-management-m4-l4",
            "Integrated performance frameworks",
            45,
            ["Apply the balanced scorecard", "Balance measures"],
            [
              "The balanced scorecard uses financial, customer, internal-process, and learning perspectives.",
              "Non-financial measures capture drivers of future performance.",
              "Multiple perspectives prevent short-termism.",
              "Measures should link to strategy.",
            ],
            [
              "What are the four perspectives of the balanced scorecard?",
              "Why include non-financial measures?",
            ]
          ),
          lesson(
            "cima-management-m4-l5",
            "Behavioural effects of measures",
            40,
            ["Assess behaviour", "Design for congruence"],
            [
              "Performance measures shape behaviour, sometimes perversely.",
              "Short-term financial targets can encourage dysfunctional decisions.",
              "Measures should align divisional and organisational goals.",
              "Balance and controllability improve behaviour.",
            ],
            [
              "How can a single financial target cause dysfunctional behaviour?",
              "What is goal congruence?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "ROI = divisional profit ÷ capital employed.",
          "Residual income = profit − (capital employed × cost of capital).",
          "Transfer price options: market / cost / negotiated.",
          "Balanced scorecard: financial, customer, process, learning.",
        ],
        commonTraps: [
          "Judging managers on uncontrollable items.",
          "Relying on ROI where it discourages value-adding investment.",
          "Using cost-based transfer prices where a market exists.",
          "Focusing only on financial measures.",
        ],
        examTechnique: [
          "Match the measure to the responsibility-centre type.",
          "Use RI/EVA to expose ROI's dysfunctional incentives.",
          "Assess the behavioural effect of any proposed measure.",
        ],
        practicePlan: [
          "Week 1: responsibility centres and divisional measures.",
          "Week 2: transfer pricing.",
          "Week 3: scorecards, behaviour, and OT practice.",
        ],
        furtherReading: [
          "CIMA P2 official study text.",
          "Kaplan & Norton — The Balanced Scorecard (reference).",
        ],
      }),
      courseware({
        moduleId: "cima-management-m5",
        examId: "cima",
        levelId: "management",
        title: "F2 — Group accounting & advanced financial reporting",
        paperCode: "F2",
        examFormat:
          "F2 objective test: 60 questions in 90 minutes, on-demand.",
        estimatedStudyHours: 30,
        overview:
          "F2 advances financial reporting to group accounts (consolidation), complex standards, and the analysis of consolidated statements. This module covers subsidiaries, associates, and advanced reporting issues.",
        whyItMatters:
          "Most significant entities are groups. Consolidation and advanced reporting are technically demanding, heavily tested, and essential for finance managers.",
        learningOutcomes: [
          "Prepare consolidated statements of financial position and profit or loss.",
          "Account for subsidiaries, associates, and joint arrangements.",
          "Apply goodwill, non-controlling interest, and fair-value adjustments.",
          "Apply advanced standards (financial instruments, provisions, revenue).",
          "Analyse consolidated financial statements.",
          "Explain the principles behind group accounting.",
        ],
        syllabusAreas: [
          area(
            "Group accounting",
            [
              "Consolidation principles",
              "Goodwill and non-controlling interest",
              "Associates and joint ventures (equity method)",
            ],
            "45–50%"
          ),
          area(
            "Advanced standards",
            [
              "Financial instruments (overview)",
              "Provisions and contingencies",
              "Revenue and leases (advanced)",
            ],
            "25–30%"
          ),
          area(
            "Analysis",
            [
              "Interpreting consolidated statements",
              "Group ratios",
              "Limitations",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-management-m5-l1",
            "Consolidation principles",
            55,
            ["Explain consolidation", "Identify control"],
            [
              "Control triggers consolidation of a subsidiary line by line.",
              "Intra-group balances and transactions are eliminated.",
              "The group is presented as a single economic entity.",
              "Control usually means more than 50% of voting rights.",
            ],
            [
              "What triggers consolidation of a subsidiary?",
              "Why eliminate intra-group transactions?",
            ]
          ),
          lesson(
            "cima-management-m5-l2",
            "Goodwill and non-controlling interest",
            55,
            ["Compute goodwill", "Measure NCI"],
            [
              "Goodwill = consideration + NCI − fair value of net assets acquired.",
              "NCI represents the share of a subsidiary not owned by the parent.",
              "Fair-value adjustments align acquired assets to fair value.",
              "Goodwill is tested for impairment, not amortised.",
            ],
            [
              "How is goodwill calculated on acquisition?",
              "What does non-controlling interest represent?",
            ],
            "If a parent pays £800 for 80% of a subsidiary with net assets of £900 and NCI is measured at £180, goodwill = 800 + 180 − 900 = £80."
          ),
          lesson(
            "cima-management-m5-l3",
            "Associates and joint arrangements",
            45,
            ["Apply the equity method", "Distinguish arrangements"],
            [
              "Associates (significant influence) use the equity method.",
              "The investment is carried at cost plus share of post-acquisition profits.",
              "Joint ventures also use the equity method; joint operations recognise the share directly.",
              "Significant influence typically means 20–50%.",
            ],
            [
              "How does the equity method work for an associate?",
              "What level of holding usually indicates significant influence?",
            ]
          ),
          lesson(
            "cima-management-m5-l4",
            "Advanced standards",
            45,
            ["Apply advanced standards", "Recognise and measure"],
            [
              "Financial instruments are classified and measured per IFRS 9.",
              "Provisions require a present obligation, probable outflow, and reliable estimate (IAS 37).",
              "Contingent liabilities are disclosed, not recognised.",
              "Advanced revenue and lease issues extend F1 knowledge.",
            ],
            [
              "What conditions must be met to recognise a provision?",
              "How is a contingent liability treated?",
            ]
          ),
          lesson(
            "cima-management-m5-l5",
            "Analysing consolidated statements",
            40,
            ["Interpret group accounts", "Compute group ratios"],
            [
              "Group ratios assess consolidated performance and position.",
              "NCI and goodwill affect interpretation.",
              "Acquisitions distort year-on-year comparisons.",
              "Segment information aids analysis.",
            ],
            [
              "How can acquisitions distort trend analysis?",
              "Why does NCI matter in interpreting group results?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Goodwill = consideration + NCI − fair value of net assets acquired.",
          "Consolidation: add subsidiary line-by-line; eliminate intra-group items.",
          "Equity method: cost + share of post-acquisition profit.",
          "Provision (IAS 37): present obligation + probable outflow + reliable estimate.",
        ],
        commonTraps: [
          "Forgetting to eliminate intra-group transactions.",
          "Mis-measuring NCI in the goodwill calculation.",
          "Consolidating associates instead of using the equity method.",
          "Recognising contingent liabilities that should only be disclosed.",
        ],
        examTechnique: [
          "Follow a standard consolidation workings layout.",
          "Compute goodwill with the full formula.",
          "Apply the correct method by level of influence/control.",
        ],
        practicePlan: [
          "Week 1: consolidation principles and goodwill.",
          "Week 2: associates and advanced standards.",
          "Week 3: analysis and OT practice.",
        ],
        furtherReading: [
          "CIMA F2 official study text.",
          "IFRS 3, 9, 10, 11; IAS 28, 37.",
        ],
      }),
      courseware({
        moduleId: "cima-management-m6",
        examId: "cima",
        levelId: "management",
        title: "F2 — Financing decisions & financial analysis",
        paperCode: "F2",
        examFormat:
          "Objective-test questions within F2 on sources of finance, cost of capital, and financial analysis.",
        estimatedStudyHours: 26,
        overview:
          "This module covers financing decisions: sources of long-term finance, cost of capital, capital structure, dividend policy, and advanced financial analysis to support these decisions.",
        whyItMatters:
          "Financing decisions determine the cost and structure of capital that funds the business. F2 links reporting to corporate-finance decisions vital at the Management Level.",
        learningOutcomes: [
          "Compare sources of long-term finance.",
          "Compute the cost of equity, debt, and WACC.",
          "Explain capital-structure theories.",
          "Analyse dividend policy considerations.",
          "Apply advanced ratio and financial analysis.",
          "Evaluate financing decisions in context.",
        ],
        syllabusAreas: [
          area(
            "Sources of finance",
            [
              "Equity and debt finance",
              "Retained earnings and hybrids",
              "Selecting sources",
            ],
            "30–35%"
          ),
          area(
            "Cost of capital and structure",
            [
              "Cost of equity (CAPM, dividend growth)",
              "Cost of debt and WACC",
              "Capital-structure theory",
            ],
            "40–45%"
          ),
          area(
            "Dividend policy and analysis",
            [
              "Dividend theories and practice",
              "Advanced financial analysis",
              "Financing decision evaluation",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cima-management-m6-l1",
            "Sources of long-term finance",
            45,
            ["Compare finance sources", "Select appropriately"],
            [
              "Equity finance carries no obligation but dilutes ownership.",
              "Debt is cheaper (tax-deductible interest) but adds financial risk.",
              "Retained earnings are a key internal source.",
              "Hybrid instruments (e.g. convertibles) blend features.",
            ],
            [
              "Why is debt generally cheaper than equity?",
              "What is a drawback of equity finance?",
            ]
          ),
          lesson(
            "cima-management-m6-l2",
            "Cost of equity",
            50,
            ["Compute cost of equity", "Apply CAPM and DGM"],
            [
              "CAPM: cost of equity = risk-free + beta × equity risk premium.",
              "Dividend growth model: cost of equity = (D1 ÷ P0) + g.",
              "Beta reflects systematic risk.",
              "Both approaches estimate required equity return.",
            ],
            [
              "How does CAPM estimate the cost of equity?",
              "What inputs does the dividend growth model use?",
            ],
            "With risk-free 4%, beta 1.1, and equity risk premium 5%, CAPM cost of equity = 4% + 1.1 × 5% = 9.5%."
          ),
          lesson(
            "cima-management-m6-l3",
            "Cost of debt and WACC",
            50,
            ["Compute cost of debt", "Calculate WACC"],
            [
              "Cost of debt is after-tax: Kd × (1 − tax rate).",
              "WACC weights each source's cost by its market value proportion.",
              "WACC is the discount rate for average-risk projects.",
              "Market values, not book values, should be used.",
            ],
            [
              "Why use the after-tax cost of debt?",
              "What weights are used in WACC?",
            ]
          ),
          lesson(
            "cima-management-m6-l4",
            "Capital structure",
            45,
            ["Explain structure theories", "Assess gearing"],
            [
              "Traditional view: an optimal gearing minimises WACC.",
              "Modigliani-Miller (no tax) says structure is irrelevant; with tax, debt adds value via the tax shield.",
              "Financial distress and agency costs offset the tax benefit.",
              "Gearing affects risk and returns to shareholders.",
            ],
            [
              "What does Modigliani-Miller with tax imply about debt?",
              "What offsets the tax benefit of debt?",
            ]
          ),
          lesson(
            "cima-management-m6-l5",
            "Dividend policy and analysis",
            40,
            ["Explain dividend policy", "Analyse decisions"],
            [
              "Dividend theories range from irrelevance to signalling and clientele effects.",
              "Practical policy balances growth, stability, and shareholder expectations.",
              "Financial analysis supports financing and dividend decisions.",
              "Consistency in dividends sends positive signals.",
            ],
            [
              "What is the signalling view of dividends?",
              "What factors influence practical dividend policy?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "CAPM: Ke = Rf + β(Rm − Rf).",
          "Dividend growth model: Ke = (D1 ÷ P0) + g.",
          "After-tax cost of debt = Kd × (1 − tax rate).",
          "WACC = (E/V)Ke + (D/V)Kd(1 − t).",
        ],
        commonTraps: [
          "Using pre-tax cost of debt in WACC.",
          "Using book instead of market values for weights.",
          "Ignoring distress costs in capital-structure analysis.",
          "Confusing CAPM and dividend-growth inputs.",
        ],
        examTechnique: [
          "Compute each cost of capital component before WACC.",
          "Use market values for weighting.",
          "State the capital-structure theory being applied.",
        ],
        practicePlan: [
          "Week 1: sources of finance and cost of equity.",
          "Week 2: cost of debt, WACC, and structure.",
          "Week 3: dividend policy, analysis, and OT practice.",
        ],
        furtherReading: [
          "CIMA F2 official study text.",
          "Corporate finance references (cost of capital, structure).",
        ],
      }),
      courseware({
        moduleId: "cima-management-m7",
        examId: "cima",
        levelId: "management",
        title: "Management Case Study — integrated application",
        examFormat:
          "Management Case Study (MCS): a ~3-hour role-simulation exam integrating E2, P2, and F2 as a finance manager. Assessed against core activities and skills.",
        estimatedStudyHours: 40,
        overview:
          "The Management Case Study integrates the management-level pillars into a finance-manager role. This module teaches integration of E2, P2, and F2, pre-seen analysis, answer structure, and demonstrating the required competencies.",
        whyItMatters:
          "The MCS proves you can apply management-level knowledge to realistic problems and communicate as a finance manager — the gateway to the Strategic Level.",
        learningOutcomes: [
          "Integrate E2, P2, and F2 knowledge into scenario responses.",
          "Analyse the pre-seen and prepare effectively.",
          "Apply performance, costing, and reporting/finance knowledge to decisions.",
          "Communicate recommendations at manager level.",
          "Manage time across exam tasks.",
          "Demonstrate the management-level core activities and skills.",
        ],
        syllabusAreas: [
          area(
            "Integration of pillars",
            [
              "Applying E2 (managing performance)",
              "Applying P2 (advanced costing/decisions)",
              "Applying F2 (group reporting/finance)",
            ],
            "50–55%"
          ),
          area(
            "Case-study skills",
            [
              "Pre-seen analysis",
              "Answer structure and communication",
              "Time management",
            ],
            "30–35%"
          ),
          area(
            "Professional competencies",
            [
              "Finance-manager core activities",
              "Business and ethical judgement",
              "Data and technology awareness",
            ],
            "15–20%"
          ),
        ],
        lessons: [
          lesson(
            "cima-management-m7-l1",
            "Case-study format and role",
            45,
            ["Explain the MCS", "Understand the role"],
            [
              "The MCS simulates a finance-manager responding to tasks.",
              "It integrates E2, P2, and F2.",
              "Marks reflect core activities and skills.",
              "Business judgement and communication are essential.",
            ],
            [
              "What role does the MCS simulate?",
              "What is assessed beyond technical knowledge?",
            ]
          ),
          lesson(
            "cima-management-m7-l2",
            "Pre-seen analysis",
            50,
            ["Analyse the pre-seen", "Prepare notes"],
            [
              "Understand the organisation, industry, and financials.",
              "Anticipate issues and relevant techniques.",
              "Prepare structured notes and analysis.",
              "Consider how pillars may be tested together.",
            ],
            [
              "Why analyse the pre-seen thoroughly?",
              "What should preparation notes include?",
            ]
          ),
          lesson(
            "cima-management-m7-l3",
            "Applying knowledge to tasks",
            55,
            ["Integrate pillars", "Apply to scenarios"],
            [
              "Bring performance management (E2) to organisational issues.",
              "Apply advanced costing and investment appraisal (P2).",
              "Use group reporting and financing knowledge (F2).",
              "Integrate rather than silo the disciplines.",
            ],
            [
              "How do you integrate the three pillars in a manager-level answer?",
              "Why avoid siloed responses?",
            ],
            "Advising on an acquisition, a strong MCS answer combines F2 group-accounting and financing impacts, P2 investment appraisal and risk, and E2 change/stakeholder management — one integrated recommendation."
          ),
          lesson(
            "cima-management-m7-l4",
            "Structuring and communicating",
            50,
            ["Structure answers", "Communicate as a manager"],
            [
              "Answer the requirement in the requested format.",
              "Provide justified, actionable recommendations.",
              "Write concisely and professionally for the audience.",
              "Support with figures and reasoning.",
            ],
            [
              "Why answer in the specified format?",
              "What distinguishes a manager-level recommendation?",
            ]
          ),
          lesson(
            "cima-management-m7-l5",
            "Time management",
            40,
            ["Manage time", "Prioritise tasks"],
            [
              "Allocate time by mark weighting.",
              "Read requirements precisely.",
              "Avoid over-running on any single task.",
              "Reserve time to review.",
            ],
            [
              "How should time be allocated?",
              "Why read requirements carefully?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Integration lens: E2 (performance) + P2 (costing/decisions) + F2 (group/finance).",
          "Answer structure: requirement → analysis → recommendation → justification.",
          "Time allocation proportional to marks.",
          "Pre-seen prep: business + industry + financials + likely issues.",
        ],
        commonTraps: [
          "Treating the case as separate technical exams.",
          "Ignoring the requested format.",
          "Over-running on one task.",
          "Calculations without recommendations.",
        ],
        examTechnique: [
          "Answer exactly what each requirement asks.",
          "Integrate pillars where the scenario allows.",
          "Manage time by mark weighting.",
        ],
        practicePlan: [
          "Weeks 1–2: analyse the pre-seen and prepare.",
          "Weeks 3–4: full timed mock case studies.",
          "Week 5: refine integration, communication, and timing.",
        ],
        furtherReading: [
          "CIMA Management Case Study pre-seen and past exams.",
          "CIMA examiner reports and marking guidance.",
        ],
      }),
    ],
  },
  {
    examId: "cima",
    levelId: "strategic",
    modules: [
      courseware({
        moduleId: "cima-strategic-m1",
        examId: "cima",
        levelId: "strategic",
        title: "E3 — Strategic analysis, choice & implementation",
        paperCode: "E3",
        examFormat:
          "E3 objective test: 60 questions in 90 minutes, on-demand. Contributes to the Strategic Level with the Case Study.",
        estimatedStudyHours: 28,
        overview:
          "E3 covers strategic management: analysing the environment, formulating and choosing strategy, and implementing it. This module builds the strategic thinking that senior finance professionals contribute to.",
        whyItMatters:
          "The Strategic Level positions finance as a strategic partner. E3 provides the frameworks to analyse, choose, and implement strategy — central to the CGMA role and the Strategic Case Study.",
        learningOutcomes: [
          "Apply environmental analysis tools (PESTEL, Porter's Five Forces).",
          "Analyse internal resources and capabilities.",
          "Formulate strategy using recognised frameworks.",
          "Evaluate strategic options for suitability, acceptability, feasibility.",
          "Explain strategy implementation and change.",
          "Assess the role of finance in strategy.",
        ],
        syllabusAreas: [
          area(
            "Strategic analysis",
            [
              "External environment (PESTEL, Five Forces)",
              "Internal analysis (resources, capabilities, value chain)",
              "SWOT and strategic position",
            ],
            "35–40%"
          ),
          area(
            "Strategic choice",
            [
              "Competitive and corporate strategy",
              "Directions and methods of growth",
              "Evaluation (SAF criteria)",
            ],
            "30–35%"
          ),
          area(
            "Implementation",
            [
              "Structure and strategic change",
              "Performance and control",
              "Role of finance",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cima-strategic-m1-l1",
            "External environmental analysis",
            50,
            ["Apply PESTEL and Five Forces", "Assess attractiveness"],
            [
              "PESTEL analyses political, economic, social, technological, environmental, legal factors.",
              "Porter's Five Forces assess industry attractiveness.",
              "The macro and industry environment shape opportunities and threats.",
              "Analysis informs strategic positioning.",
            ],
            [
              "What do Porter's Five Forces assess?",
              "What factors does PESTEL cover?",
            ]
          ),
          lesson(
            "cima-strategic-m1-l2",
            "Internal analysis",
            45,
            ["Analyse resources", "Identify capabilities"],
            [
              "Resources and capabilities underpin competitive advantage.",
              "The VRIO/VRIN test identifies sources of sustained advantage.",
              "The value chain locates where value is created.",
              "Core competences differentiate the organisation.",
            ],
            [
              "What does the VRIO framework test?",
              "What is a core competence?",
            ]
          ),
          lesson(
            "cima-strategic-m1-l3",
            "Strategy formulation",
            50,
            ["Formulate strategy", "Choose direction"],
            [
              "Porter's generic strategies: cost leadership, differentiation, focus.",
              "Ansoff's matrix maps product/market growth directions.",
              "Corporate strategy addresses scope and portfolio.",
              "Strategy links analysis to action.",
            ],
            [
              "What are Porter's generic strategies?",
              "What growth directions does Ansoff's matrix identify?",
            ],
            "Ansoff's matrix frames choices: market penetration (existing products/markets) is lowest risk; diversification (new products and markets) is highest risk."
          ),
          lesson(
            "cima-strategic-m1-l4",
            "Evaluating strategic options",
            45,
            ["Apply SAF criteria", "Select options"],
            [
              "Suitability: does it fit the strategic position?",
              "Acceptability: risk, return, and stakeholder reaction.",
              "Feasibility: can it be resourced and implemented?",
              "SAF provides a structured evaluation.",
            ],
            [
              "What do the SAF criteria assess?",
              "Why evaluate acceptability to stakeholders?",
            ]
          ),
          lesson(
            "cima-strategic-m1-l5",
            "Implementation and the role of finance",
            40,
            ["Explain implementation", "Position finance"],
            [
              "Structure, systems, and culture must support strategy.",
              "Strategic change requires leadership and communication.",
              "Performance measures align execution with strategy.",
              "Finance provides analysis, control, and insight throughout.",
            ],
            [
              "Why must structure support strategy?",
              "How does finance contribute to implementation?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "PESTEL: political, economic, social, technological, environmental, legal.",
          "Five Forces: rivalry, new entrants, substitutes, buyer/supplier power.",
          "Generic strategies: cost leadership, differentiation, focus.",
          "SAF: suitability, acceptability, feasibility.",
        ],
        commonTraps: [
          "Listing framework factors without analysis or implication.",
          "Confusing resources with capabilities.",
          "Skipping the acceptability or feasibility test.",
          "Ignoring implementation once a strategy is chosen.",
        ],
        examTechnique: [
          "Apply frameworks to the specific context, not generically.",
          "Use SAF to structure evaluation answers.",
          "Link analysis to a clear strategic recommendation.",
        ],
        practicePlan: [
          "Week 1: external and internal analysis.",
          "Week 2: formulation and evaluation.",
          "Week 3: implementation and OT practice.",
        ],
        furtherReading: [
          "CIMA E3 official study text.",
          "Johnson, Scholes & Whittington — Exploring Strategy (reference).",
        ],
      }),
      courseware({
        moduleId: "cima-strategic-m2",
        examId: "cima",
        levelId: "strategic",
        title: "E3 — Digital strategy & organisational ecosystems",
        paperCode: "E3",
        examFormat:
          "Objective-test questions within E3 on digital strategy, ecosystems, and disruption.",
        estimatedStudyHours: 24,
        overview:
          "This module covers digital strategy and the organisational ecosystem: digital transformation, disruptive technologies, platform business models, and managing in a connected, fast-changing environment.",
        whyItMatters:
          "Digital disruption reshapes competitive advantage. Strategic finance professionals must understand digital strategy and ecosystems to guide investment and transformation.",
        learningOutcomes: [
          "Explain digital transformation and its strategic drivers.",
          "Analyse disruptive technologies and their impact.",
          "Describe platform and ecosystem business models.",
          "Evaluate digital strategy options.",
          "Assess the risks of digital transformation.",
          "Explain the finance function's role in digital strategy.",
        ],
        syllabusAreas: [
          area(
            "Digital transformation",
            [
              "Drivers and strategy",
              "Disruptive technologies",
              "Digital maturity",
            ],
            "35–40%"
          ),
          area(
            "Ecosystems and platforms",
            [
              "Platform business models",
              "Ecosystems and network effects",
              "Collaboration and co-creation",
            ],
            "30–35%"
          ),
          area(
            "Digital risk and finance",
            [
              "Cybersecurity and data risk",
              "Digital investment evaluation",
              "Finance's role in transformation",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cima-strategic-m2-l1",
            "Digital transformation strategy",
            50,
            ["Explain transformation", "Assess drivers"],
            [
              "Digital transformation reshapes business models, processes, and value.",
              "Drivers include customer expectations, technology, and competition.",
              "Digital maturity varies across organisations.",
              "Transformation is strategic, not just technological.",
            ],
            [
              "What drives digital transformation?",
              "Why is transformation strategic rather than purely IT?",
            ]
          ),
          lesson(
            "cima-strategic-m2-l2",
            "Disruptive technologies",
            45,
            ["Analyse disruption", "Assess impact"],
            [
              "Technologies like AI, IoT, and blockchain disrupt industries.",
              "Disruptive innovation can displace incumbents.",
              "Organisations must scan and respond to technological change.",
              "Not all new technology is strategically relevant.",
            ],
            [
              "What is disruptive innovation?",
              "Why must incumbents monitor emerging technology?",
            ]
          ),
          lesson(
            "cima-strategic-m2-l3",
            "Platforms and ecosystems",
            50,
            ["Explain platforms", "Analyse network effects"],
            [
              "Platform models connect producers and consumers, capturing value from interactions.",
              "Network effects make platforms more valuable as they grow.",
              "Ecosystems involve collaboration among interdependent participants.",
              "Value creation shifts from pipelines to platforms.",
            ],
            [
              "What are network effects?",
              "How do platform models differ from pipeline models?",
            ],
            "A ride-hailing platform gains value as more drivers and riders join (network effects); each additional participant makes the platform more useful, creating a self-reinforcing advantage."
          ),
          lesson(
            "cima-strategic-m2-l4",
            "Digital risk",
            40,
            ["Assess digital risk", "Manage cybersecurity"],
            [
              "Cybersecurity and data-privacy risks grow with digital reliance.",
              "Digital transformation projects have high failure rates.",
              "Governance and controls must adapt to digital risk.",
              "Resilience is a strategic priority.",
            ],
            [
              "Why does digital reliance increase risk?",
              "What is a common risk in transformation projects?",
            ]
          ),
          lesson(
            "cima-strategic-m2-l5",
            "Finance's role in digital strategy",
            40,
            ["Position finance", "Evaluate digital investment"],
            [
              "Finance evaluates digital investments and their returns.",
              "Traditional appraisal must adapt to intangible and option-like benefits.",
              "Finance provides governance and performance measurement.",
              "Finance partners in transformation, not just funds it.",
            ],
            [
              "How should digital-investment appraisal adapt?",
              "What role does finance play in transformation?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Transformation drivers: customers + technology + competition.",
          "Network effects: value grows with participants.",
          "Platform vs pipeline value creation.",
          "Digital investment: adapt appraisal for intangibles and real options.",
        ],
        commonTraps: [
          "Treating digital as an IT project, not a strategy.",
          "Ignoring network effects in platform analysis.",
          "Applying only traditional appraisal to digital investment.",
          "Underestimating cyber and transformation risk.",
        ],
        examTechnique: [
          "Frame digital questions strategically.",
          "Identify network effects in platform scenarios.",
          "Link finance's role to governance and appraisal.",
        ],
        practicePlan: [
          "Week 1: digital transformation and disruption.",
          "Week 2: platforms and ecosystems.",
          "Week 3: digital risk, finance's role, and OT practice.",
        ],
        furtherReading: [
          "CIMA E3 official study text.",
          "Platform and digital-strategy references.",
        ],
      }),
      courseware({
        moduleId: "cima-strategic-m3",
        examId: "cima",
        levelId: "strategic",
        title: "P3 — Enterprise risk management & internal control",
        paperCode: "P3",
        examFormat:
          "P3 objective test: 60 questions in 90 minutes, on-demand.",
        estimatedStudyHours: 28,
        overview:
          "P3 covers risk management and internal control at the enterprise level: identifying, assessing, and managing strategic and operational risk, and designing control systems including for cyber and financial risks.",
        whyItMatters:
          "Risk management protects strategy execution and value. P3 equips finance leaders to embed risk and control across the enterprise — a core Strategic Level competency.",
        learningOutcomes: [
          "Explain enterprise risk management frameworks.",
          "Identify and assess strategic and operational risks.",
          "Apply risk-response strategies.",
          "Design internal control systems.",
          "Manage specific risks (financial, cyber, operational).",
          "Explain risk governance and reporting.",
        ],
        syllabusAreas: [
          area(
            "Enterprise risk management",
            [
              "ERM frameworks (e.g. COSO)",
              "Risk identification and assessment",
              "Risk appetite and response",
            ],
            "40–45%"
          ),
          area(
            "Internal control",
            [
              "Control systems design",
              "Control environment and activities",
              "Monitoring and assurance",
            ],
            "30–35%"
          ),
          area(
            "Specific risks",
            [
              "Financial risk (overview)",
              "Cyber and information risk",
              "Operational and compliance risk",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cima-strategic-m3-l1",
            "Enterprise risk management frameworks",
            50,
            ["Explain ERM", "Apply a framework"],
            [
              "ERM manages risk holistically across the organisation.",
              "COSO ERM links risk to strategy and performance.",
              "Risk appetite defines acceptable risk.",
              "ERM supports, not hinders, value creation.",
            ],
            [
              "What is the aim of enterprise risk management?",
              "What does risk appetite define?",
            ]
          ),
          lesson(
            "cima-strategic-m3-l2",
            "Risk identification and assessment",
            50,
            ["Identify risks", "Assess impact and likelihood"],
            [
              "Risks are identified across strategic, operational, financial, and compliance categories.",
              "Assessment plots likelihood against impact.",
              "Risk maps prioritise attention.",
              "Both upside and downside risk matter.",
            ],
            [
              "How are risks assessed?",
              "What does a risk map help prioritise?",
            ],
            "A risk scored high likelihood and high impact sits in the top-right of the risk map and demands immediate mitigation, whereas low/low risks may simply be accepted and monitored."
          ),
          lesson(
            "cima-strategic-m3-l3",
            "Risk responses",
            45,
            ["Apply risk responses", "Select strategies"],
            [
              "Responses: avoid, reduce (treat), transfer (share), accept (tolerate).",
              "The response should fit the risk's severity and appetite.",
              "Controls reduce likelihood or impact.",
              "Insurance and hedging transfer risk.",
            ],
            [
              "What are the four main risk responses?",
              "When is accepting a risk appropriate?",
            ]
          ),
          lesson(
            "cima-strategic-m3-l4",
            "Internal control systems",
            45,
            ["Design controls", "Explain the control environment"],
            [
              "Internal control comprises the control environment, activities, information, and monitoring.",
              "Preventive, detective, and corrective controls serve different purposes.",
              "The control environment (tone at the top) is foundational.",
              "Controls should be proportionate to risk.",
            ],
            [
              "What are the components of an internal control system?",
              "Why is the control environment foundational?",
            ]
          ),
          lesson(
            "cima-strategic-m3-l5",
            "Specific risks and governance",
            40,
            ["Manage specific risks", "Explain risk governance"],
            [
              "Financial, cyber, operational, and compliance risks need tailored controls.",
              "Cyber risk requires technical and organisational safeguards.",
              "Risk governance assigns roles (board, risk committee, management).",
              "Risk reporting informs decisions and oversight.",
            ],
            [
              "Why does cyber risk need both technical and organisational controls?",
              "What is the board's role in risk governance?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Risk responses: avoid, reduce, transfer, accept (the 4 Ts / TARA).",
          "Risk map: likelihood × impact.",
          "COSO control components: environment, risk assessment, activities, information, monitoring.",
          "Control types: preventive, detective, corrective.",
        ],
        commonTraps: [
          "Treating ERM as a compliance exercise rather than strategic.",
          "Ignoring risk appetite when choosing responses.",
          "Overlooking the control environment.",
          "Considering only downside, not upside, risk.",
        ],
        examTechnique: [
          "Assess likelihood and impact before recommending a response.",
          "Match the response to risk appetite.",
          "Structure control answers around the COSO components.",
        ],
        practicePlan: [
          "Week 1: ERM frameworks and assessment.",
          "Week 2: responses and internal control.",
          "Week 3: specific risks, governance, and OT practice.",
        ],
        furtherReading: [
          "CIMA P3 official study text.",
          "COSO ERM and internal control frameworks.",
        ],
      }),
      courseware({
        moduleId: "cima-strategic-m4",
        examId: "cima",
        levelId: "strategic",
        title: "P3 — Governance, ethics & strategic performance",
        paperCode: "P3",
        examFormat:
          "Objective-test questions within P3 on governance, ethics, and strategic performance management.",
        estimatedStudyHours: 26,
        overview:
          "This module covers corporate governance, ethics at the strategic level, and strategic performance management — aligning risk, control, and performance with strategy and stakeholder expectations.",
        whyItMatters:
          "Governance and ethics protect long-term value and reputation, while strategic performance management ensures strategy delivers. These are core to the CGMA's strategic-partner role.",
        learningOutcomes: [
          "Explain corporate-governance principles and structures.",
          "Apply ethics to strategic decisions.",
          "Explain integrated reporting and stakeholder accountability.",
          "Design strategic performance-measurement systems.",
          "Align performance measures with strategy and risk.",
          "Evaluate governance failures and their causes.",
        ],
        syllabusAreas: [
          area(
            "Corporate governance",
            [
              "Governance principles and codes",
              "Board effectiveness and committees",
              "Stakeholder accountability",
            ],
            "35–40%"
          ),
          area(
            "Strategic ethics",
            [
              "Ethics in strategy",
              "Sustainability and integrated reporting",
              "Corporate responsibility",
            ],
            "25–30%"
          ),
          area(
            "Strategic performance",
            [
              "Performance frameworks (scorecard, performance prism)",
              "Aligning measures with strategy",
              "Non-financial and integrated measures",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-strategic-m4-l1",
            "Corporate governance",
            50,
            ["Explain governance", "Assess board effectiveness"],
            [
              "Governance frameworks promote accountability, transparency, and fairness.",
              "Board balance, independence, and committees support effectiveness.",
              "Agency problems arise from the separation of ownership and control.",
              "Good governance protects stakeholders and value.",
            ],
            [
              "What is the agency problem?",
              "What features improve board effectiveness?",
            ]
          ),
          lesson(
            "cima-strategic-m4-l2",
            "Strategic ethics and responsibility",
            45,
            ["Apply strategic ethics", "Explain responsibility"],
            [
              "Ethics at the strategic level shapes reputation and licence to operate.",
              "Stakeholder theory broadens accountability beyond shareholders.",
              "Ethical lapses cause lasting reputational and financial damage.",
              "Leaders set the ethical tone.",
            ],
            [
              "How does stakeholder theory broaden accountability?",
              "Why do ethical lapses damage strategy?",
            ]
          ),
          lesson(
            "cima-strategic-m4-l3",
            "Integrated reporting and sustainability",
            45,
            ["Explain integrated reporting", "Apply sustainability"],
            [
              "Integrated reporting connects financial and non-financial value creation.",
              "The six capitals frame value (financial, manufactured, intellectual, human, social, natural).",
              "Sustainability considerations affect long-term value.",
              "Transparency builds stakeholder trust.",
            ],
            [
              "What does integrated reporting connect?",
              "Name some of the six capitals.",
            ]
          ),
          lesson(
            "cima-strategic-m4-l4",
            "Strategic performance measurement",
            50,
            ["Design performance systems", "Align with strategy"],
            [
              "Strategic frameworks (balanced scorecard, performance prism) link measures to strategy.",
              "Measures should be balanced, forward-looking, and strategy-aligned.",
              "Cascading measures connect strategy to operations.",
              "Poorly chosen measures drive the wrong behaviour.",
            ],
            [
              "How does the balanced scorecard link measures to strategy?",
              "Why cascade strategic measures?",
            ],
            "A balanced scorecard translates a growth strategy into customer, process, and learning measures that lead the financial results, giving early signals rather than only lagging profit."
          ),
          lesson(
            "cima-strategic-m4-l5",
            "Governance failures",
            40,
            ["Analyse failures", "Draw lessons"],
            [
              "Governance failures often stem from weak oversight, poor culture, and misaligned incentives.",
              "Case studies reveal recurring warning signs.",
              "Strong controls and ethics reduce failure risk.",
              "Learning from failures strengthens governance.",
            ],
            [
              "What are common causes of governance failures?",
              "How can incentives contribute to failure?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Governance principles: accountability, transparency, fairness, responsibility.",
          "Six capitals: financial, manufactured, intellectual, human, social, natural.",
          "Balanced scorecard: financial, customer, process, learning.",
          "Agency problem: owner-manager interest divergence.",
        ],
        commonTraps: [
          "Treating governance as box-ticking.",
          "Focusing only on shareholders, ignoring stakeholders.",
          "Choosing measures that encourage short-termism.",
          "Overlooking culture in governance.",
        ],
        examTechnique: [
          "Link governance and ethics to value and reputation.",
          "Use a performance framework to structure measurement answers.",
          "Diagnose the root cause in governance-failure scenarios.",
        ],
        practicePlan: [
          "Week 1: corporate governance.",
          "Week 2: ethics, responsibility, and integrated reporting.",
          "Week 3: strategic performance and OT practice.",
        ],
        furtherReading: [
          "CIMA P3 official study text.",
          "Corporate governance codes and integrated reporting framework.",
        ],
      }),
      courseware({
        moduleId: "cima-strategic-m5",
        examId: "cima",
        levelId: "strategic",
        title: "F3 — Financial strategy, valuation & M&A",
        paperCode: "F3",
        examFormat:
          "F3 objective test: 60 questions in 90 minutes, on-demand.",
        estimatedStudyHours: 30,
        overview:
          "F3 covers financial strategy: formulating financial objectives, business and equity valuation, mergers and acquisitions, and financing strategic decisions to maximise shareholder value.",
        whyItMatters:
          "Financial strategy determines how the organisation funds and creates value. Valuation and M&A are high-stakes, technical, and central to the Strategic Level and case study.",
        learningOutcomes: [
          "Formulate financial objectives and strategy.",
          "Apply business and equity valuation methods.",
          "Evaluate mergers and acquisitions.",
          "Analyse financing of strategic transactions.",
          "Assess the impact of financial strategy on value.",
          "Explain the interaction of investment, financing, and dividend decisions.",
        ],
        syllabusAreas: [
          area(
            "Financial strategy",
            [
              "Financial objectives and policy",
              "Investment, financing, dividend interactions",
              "Value-based management",
            ],
            "30–35%"
          ),
          area(
            "Valuation",
            [
              "Asset, income (DCF), and market-based methods",
              "Equity and enterprise value",
              "Valuing synergies",
            ],
            "35–40%"
          ),
          area(
            "M&A",
            [
              "Rationale and types of combinations",
              "Consideration and financing",
              "Post-acquisition value",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-strategic-m5-l1",
            "Financial strategy and objectives",
            50,
            ["Formulate financial strategy", "Link decisions"],
            [
              "Financial strategy sets objectives for investment, financing, and dividends.",
              "These three decisions interact and must be consistent.",
              "Value-based management focuses on shareholder value.",
              "Strategy must fit the business and its stage.",
            ],
            [
              "How do investment, financing, and dividend decisions interact?",
              "What is value-based management?",
            ]
          ),
          lesson(
            "cima-strategic-m5-l2",
            "Valuation methods",
            55,
            ["Apply valuation methods", "Choose appropriately"],
            [
              "Asset-based methods value net assets; useful as a floor.",
              "Income methods (DCF) discount future free cash flows.",
              "Market-based methods use multiples (P/E, EV/EBITDA).",
              "Method choice depends on context and data.",
            ],
            [
              "When is a DCF valuation most appropriate?",
              "What does an EV/EBITDA multiple value?",
            ],
            "A stable, cash-generative business is well suited to DCF: discounting projected free cash flows at WACC and adding a terminal value gives enterprise value, from which debt is deducted to reach equity value."
          ),
          lesson(
            "cima-strategic-m5-l3",
            "Valuing synergies and equity",
            45,
            ["Value synergies", "Derive equity value"],
            [
              "Synergies are the additional value from combining businesses.",
              "Only value synergies that are realistic and quantifiable.",
              "Enterprise value minus net debt gives equity value.",
              "Overpaying for synergies destroys acquirer value.",
            ],
            [
              "How do you move from enterprise value to equity value?",
              "Why is overestimating synergies dangerous?",
            ]
          ),
          lesson(
            "cima-strategic-m5-l4",
            "Mergers and acquisitions",
            50,
            ["Evaluate M&A", "Assess rationale"],
            [
              "M&A rationales include growth, synergies, and market power.",
              "Combinations can be horizontal, vertical, or conglomerate.",
              "Due diligence assesses value and risk.",
              "Many acquisitions fail to create value.",
            ],
            [
              "What are common rationales for M&A?",
              "Why do many acquisitions destroy value?",
            ]
          ),
          lesson(
            "cima-strategic-m5-l5",
            "Financing transactions",
            40,
            ["Structure consideration", "Finance deals"],
            [
              "Consideration can be cash, shares, or a mix.",
              "Cash offers certainty; share offers share risk with the target.",
              "Financing choice affects gearing, control, and EPS.",
              "The structure must fit strategy and capacity.",
            ],
            [
              "How does cash consideration differ from a share exchange?",
              "How does financing affect EPS and control?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "DCF: enterprise value = Σ free cash flow ÷ (1 + WACC)^t + terminal value.",
          "Equity value = enterprise value − net debt.",
          "Multiples: P/E (equity), EV/EBITDA (enterprise).",
          "Synergy value = combined value − (standalone values summed).",
        ],
        commonTraps: [
          "Confusing enterprise and equity value.",
          "Overestimating synergies.",
          "Using an inappropriate valuation method for the context.",
          "Ignoring financing effects on gearing and control.",
        ],
        examTechnique: [
          "State which value (enterprise vs equity) is required.",
          "Justify the valuation method for the context.",
          "Be conservative and explicit about synergies.",
        ],
        practicePlan: [
          "Week 1: financial strategy and valuation methods.",
          "Week 2: synergies, equity value, and M&A.",
          "Week 3: financing transactions and OT practice.",
        ],
        furtherReading: [
          "CIMA F3 official study text.",
          "Corporate finance and valuation references.",
        ],
      }),
      courseware({
        moduleId: "cima-strategic-m6",
        examId: "cima",
        levelId: "strategic",
        title: "F3 — Advanced treasury & risk financing",
        paperCode: "F3",
        examFormat:
          "Objective-test questions within F3 on treasury management, financial risk, and hedging.",
        estimatedStudyHours: 26,
        overview:
          "This module covers advanced treasury and financial-risk management: managing interest-rate, currency, and liquidity risk, and using derivatives and other instruments to hedge financial exposures.",
        whyItMatters:
          "Treasury protects the organisation from financial risk that can undermine strategy. Understanding hedging and treasury management is essential for strategic finance leaders.",
        learningOutcomes: [
          "Explain the treasury function and its objectives.",
          "Identify and measure financial risks (interest-rate, currency, liquidity).",
          "Apply hedging techniques using derivatives.",
          "Evaluate internal and external hedging methods.",
          "Manage liquidity and funding risk.",
          "Assess the costs and benefits of hedging.",
        ],
        syllabusAreas: [
          area(
            "Treasury management",
            [
              "Treasury role and objectives",
              "Liquidity and funding management",
              "Centralised vs decentralised treasury",
            ],
            "30–35%"
          ),
          area(
            "Financial risk",
            [
              "Interest-rate risk",
              "Currency risk (transaction, translation, economic)",
              "Measuring exposure",
            ],
            "35–40%"
          ),
          area(
            "Hedging",
            [
              "Forwards, futures, options, swaps",
              "Internal hedging techniques",
              "Cost-benefit of hedging",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cima-strategic-m6-l1",
            "The treasury function",
            45,
            ["Explain treasury", "Manage liquidity"],
            [
              "Treasury manages liquidity, funding, and financial risk.",
              "It can be centralised (efficiency) or decentralised (local responsiveness).",
              "Liquidity management ensures obligations are met.",
              "Treasury supports strategy by managing financial exposure.",
            ],
            [
              "What are treasury's main objectives?",
              "What is a benefit of centralised treasury?",
            ]
          ),
          lesson(
            "cima-strategic-m6-l2",
            "Interest-rate risk",
            45,
            ["Identify rate risk", "Hedge exposure"],
            [
              "Interest-rate risk affects borrowing and investment cash flows.",
              "Forward rate agreements and interest-rate swaps hedge exposure.",
              "Swaps exchange fixed for floating (or vice versa).",
              "Caps and collars limit rate movements.",
            ],
            [
              "How does an interest-rate swap hedge rate risk?",
              "What does an interest-rate cap provide?",
            ]
          ),
          lesson(
            "cima-strategic-m6-l3",
            "Currency risk",
            50,
            ["Classify currency risk", "Measure exposure"],
            [
              "Transaction risk affects known future foreign-currency cash flows.",
              "Translation risk affects reported group figures.",
              "Economic risk affects long-term competitiveness.",
              "Exposure must be identified before hedging.",
            ],
            [
              "What is the difference between transaction and translation risk?",
              "Why is economic risk hardest to hedge?",
            ],
            "An exporter expecting $1m in three months faces transaction risk: if the dollar weakens, the home-currency receipt falls — a forward contract can lock in today's rate to remove that uncertainty."
          ),
          lesson(
            "cima-strategic-m6-l4",
            "Hedging with derivatives",
            50,
            ["Apply derivative hedges", "Compare instruments"],
            [
              "Forwards lock in a rate; futures are standardised and exchange-traded.",
              "Options give the right, not the obligation, to transact.",
              "Swaps manage longer-term exposures.",
              "Each instrument trades flexibility, cost, and certainty.",
            ],
            [
              "How does an option differ from a forward as a hedge?",
              "When are futures preferred over forwards?",
            ]
          ),
          lesson(
            "cima-strategic-m6-l5",
            "Internal hedging and cost-benefit",
            40,
            ["Apply internal hedging", "Assess hedging value"],
            [
              "Internal methods include netting, matching, leading, and lagging.",
              "Internal hedging is often cheaper than external derivatives.",
              "Hedging has costs and does not eliminate all risk.",
              "Hedge to policy, not to speculate.",
            ],
            [
              "What are examples of internal hedging techniques?",
              "Why should hedging follow policy rather than a market view?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Currency risk types: transaction, translation, economic.",
          "Swap: exchange fixed for floating cash flows.",
          "Option hedge: right without obligation (premium cost).",
          "Internal hedging: netting, matching, leading, lagging.",
        ],
        commonTraps: [
          "Confusing transaction, translation, and economic risk.",
          "Treating options and forwards as identical hedges.",
          "Ignoring internal hedging before using derivatives.",
          "Using hedging to speculate rather than manage risk.",
        ],
        examTechnique: [
          "Classify the exposure type before selecting a hedge.",
          "Compare hedging instruments on cost and flexibility.",
          "Consider internal methods first.",
        ],
        practicePlan: [
          "Week 1: treasury and interest-rate risk.",
          "Week 2: currency risk and derivatives.",
          "Week 3: internal hedging, cost-benefit, and OT practice.",
        ],
        furtherReading: [
          "CIMA F3 official study text.",
          "Treasury and risk-management references.",
        ],
      }),
      courseware({
        moduleId: "cima-strategic-m7",
        examId: "cima",
        levelId: "strategic",
        title: "Strategic Case Study — integrated application",
        examFormat:
          "Strategic Case Study (SCS): a ~3-hour role-simulation exam integrating E3, P3, and F3 as a senior finance professional advising the board. Assessed against core activities and skills.",
        estimatedStudyHours: 45,
        overview:
          "The Strategic Case Study integrates the strategic-level pillars into a senior-finance role advising leadership. This module teaches integration of E3, P3, and F3, pre-seen analysis, board-level communication, and demonstrating the required competencies.",
        whyItMatters:
          "The SCS is the final gateway to CGMA membership. It proves you can think strategically, integrate risk and finance, and advise at board level under pressure.",
        learningOutcomes: [
          "Integrate E3, P3, and F3 knowledge into strategic responses.",
          "Analyse the pre-seen and prepare at a strategic level.",
          "Apply strategy, risk, and financial-strategy knowledge to board issues.",
          "Communicate as a senior finance professional to leadership.",
          "Manage time across strategic exam tasks.",
          "Demonstrate the strategic-level core activities and skills.",
        ],
        syllabusAreas: [
          area(
            "Integration of pillars",
            [
              "Applying E3 (strategy)",
              "Applying P3 (risk and control)",
              "Applying F3 (financial strategy)",
            ],
            "50–55%"
          ),
          area(
            "Case-study skills",
            [
              "Strategic pre-seen analysis",
              "Board-level communication",
              "Time and task management",
            ],
            "30–35%"
          ),
          area(
            "Professional competencies",
            [
              "Senior finance core activities",
              "Strategic and ethical judgement",
              "Leadership and influence",
            ],
            "15–20%"
          ),
        ],
        lessons: [
          lesson(
            "cima-strategic-m7-l1",
            "Strategic case-study format and role",
            45,
            ["Explain the SCS", "Understand the role"],
            [
              "The SCS simulates a senior finance professional advising the board.",
              "It integrates E3, P3, and F3.",
              "Marks reflect strategic core activities and skills.",
              "Strategic judgement and communication are decisive.",
            ],
            [
              "What role does the SCS simulate?",
              "What is assessed beyond technical knowledge?",
            ]
          ),
          lesson(
            "cima-strategic-m7-l2",
            "Strategic pre-seen analysis",
            55,
            ["Analyse the pre-seen", "Prepare strategically"],
            [
              "Understand the organisation's strategy, industry, and financial position.",
              "Apply strategic frameworks to the pre-seen.",
              "Prepare analysis of risks and financial options.",
              "Anticipate strategic issues likely to be tested.",
            ],
            [
              "Why apply strategic frameworks to the pre-seen?",
              "What should strategic preparation include?",
            ]
          ),
          lesson(
            "cima-strategic-m7-l3",
            "Applying strategic knowledge to tasks",
            55,
            ["Integrate pillars", "Advise the board"],
            [
              "Bring strategy (E3), risk (P3), and financial strategy (F3) together.",
              "Advise on strategic options with risk and financial implications.",
              "Consider stakeholders, ethics, and long-term value.",
              "Integrate the disciplines into coherent advice.",
            ],
            [
              "How do you integrate strategy, risk, and finance in board advice?",
              "Why consider ethics and stakeholders at the strategic level?",
            ],
            "Advising on a major expansion, a strong SCS answer combines E3 strategic fit, P3 risk assessment and controls, and F3 valuation and financing — a single, board-ready recommendation."
          ),
          lesson(
            "cima-strategic-m7-l4",
            "Board-level communication",
            50,
            ["Communicate strategically", "Structure advice"],
            [
              "Answer the requirement in the requested format (e.g. board briefing).",
              "Provide clear, justified, strategic recommendations.",
              "Write concisely and persuasively for senior leaders.",
              "Balance detail with strategic focus.",
            ],
            [
              "What characterises effective board-level communication?",
              "Why answer in the requested format?",
            ]
          ),
          lesson(
            "cima-strategic-m7-l5",
            "Time management and exam technique",
            40,
            ["Manage time", "Prioritise strategically"],
            [
              "Allocate time by mark weighting.",
              "Read requirements precisely and answer them.",
              "Avoid over-running on any single task.",
              "Reserve time to review and refine.",
            ],
            [
              "How should time be allocated in the SCS?",
              "Why is reviewing answers important?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Integration lens: E3 (strategy) + P3 (risk/control) + F3 (financial strategy).",
          "Answer structure: requirement → analysis → recommendation → justification.",
          "Time allocation proportional to marks.",
          "Pre-seen prep: strategy + industry + financials + risks + likely issues.",
        ],
        commonTraps: [
          "Treating the case as separate technical exams.",
          "Ignoring the requested format or audience.",
          "Over-running on one task.",
          "Analysis without board-ready recommendations.",
        ],
        examTechnique: [
          "Answer exactly what each requirement asks, at board level.",
          "Integrate the three pillars where the scenario allows.",
          "Manage time strictly by mark weighting.",
        ],
        practicePlan: [
          "Weeks 1–2: analyse the pre-seen and prepare strategically.",
          "Weeks 3–5: full timed mock case studies.",
          "Week 6: refine integration, board communication, and timing.",
        ],
        furtherReading: [
          "CIMA Strategic Case Study pre-seen and past exams.",
          "CIMA examiner reports and marking guidance.",
        ],
      }),
    ],
  },
];
