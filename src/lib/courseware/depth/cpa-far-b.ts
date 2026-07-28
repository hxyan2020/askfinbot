import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA — FAR (Financial Accounting & Reporting) exam-calibrated depth content,
 * batch B, keyed by moduleId to merge onto CPA_COURSEWARE. Covers:
 *   cpa-far-m5  Pensions, contingencies & fair value        (ASC 715, 450, 820)
 *   cpa-far-m6  Debt, equity & EPS                          (ASC 470, 505, 718, 260)
 *   cpa-far-m7  Temporary differences & income taxes        (ASC 740)
 *   cpa-far-m8  State & local government accounting          (GASB 34, 33, 54)
 *
 * Calibration notes used throughout:
 *  - FAR is a four-hour AICPA Blueprint section (five testlets: two MCQ, three
 *    task-based simulations). These modules sit in Blueprint Area II (select
 *    financial statement accounts / transactions) and Area III (state & local
 *    government). Most content is tested at Application/Analysis; the TBS work
 *    below mirrors the numeric fill-in and journal-entry simulations candidates
 *    actually see.
 *  - US GAAP (FASB ASC) and GASB are distinct authority sets. Do NOT cross-apply
 *    a commercial-GAAP rule to a governmental fund, or a governmental-fund rule
 *    to a government-wide statement. Half of FAR-M8 marks are lost this way.
 *  - Tax figures Congress/IRS index annually are NOT hard-coded; the FAR income
 *    tax module uses a stated enacted rate in every computation, which is how the
 *    exam presents it (the rate is given in the fact pattern).
 */
export const CPA_FAR_B_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // FAR M5 — Pensions, contingencies & fair value (ASC 715 / 450 / 820)
  // ===================================================================
  "cpa-far-m5": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Net periodic pension cost — the six components",
        priority: "critical",
        examinerFocus:
          "Whether you can assemble net periodic pension cost from its signed components in the right direction, and (post ASU 2017-07) present only service cost within operating income while the remaining components sit below operating income. The examiner gives raw component amounts and tests both the arithmetic and the income-statement geography.",
        typicalQuestionForms: [
          "MCQ: compute net periodic pension cost given service cost, interest cost, expected return, and amortization amounts.",
          "TBS: fill a pension worksheet that separates the service-cost component (operating) from the other components (nonoperating).",
          "MCQ: identify which single component may be capitalized into inventory/self-constructed assets (only service cost).",
        ],
        mustKnow: [
          "Net periodic pension cost = Service cost + Interest cost − Expected return on plan assets + Amortization of prior service cost ± Amortization of net actuarial gain/loss (mnemonic S-I-R-A-G).",
          "Interest cost = beginning PBO × discount (settlement) rate; expected return = beginning plan assets (or market-related value) × expected long-term rate — the expected return REDUCES cost.",
          "Under ASU 2017-07 only the service-cost component is reported in operating income and is the only component eligible for capitalization; interest, expected return and amortizations are presented outside operating income.",
        ],
        scoringActions: [
          "Write each component with its correct sign before summing — expected return and net-gain amortization are the sign traps.",
          "Split the answer into service cost (operating) vs the aggregated other components (nonoperating) whenever the TBS asks for statement presentation.",
        ],
      },
      {
        id: "tp2",
        title: "Funded status, balance-sheet recognition & OCI corridor",
        priority: "critical",
        examinerFocus:
          "Measuring funded status (plan assets minus PBO), recognizing it as a net asset or net liability on the balance sheet, and running the corridor test to decide how much unrecognized net gain/loss is amortized from AOCI into pension cost.",
        typicalQuestionForms: [
          "MCQ: compute ending funded status and state whether it is a net pension asset or liability.",
          "TBS: roll forward PBO and plan assets, then apply the 10% corridor to determine amortization.",
        ],
        mustKnow: [
          "Funded status = fair value of plan assets − projected benefit obligation (PBO); a negative figure is a net pension liability, positive is a net pension asset.",
          "PBO uses future (projected) salary levels; the accumulated benefit obligation (ABO) uses current salaries — the balance sheet uses PBO-based funded status.",
          "Corridor: amortize the net gain/loss only to the extent it exceeds 10% of the greater of beginning PBO or beginning market-related value of plan assets; the excess is divided by the average remaining service period.",
        ],
        scoringActions: [
          "Roll forward PBO (add service + interest, subtract benefits paid, adjust for actuarial changes) and plan assets (add actual return + contributions, subtract benefits) separately before differencing.",
          "Compare the net gain/loss to 10% of the GREATER of PBO or plan-asset value — using the smaller balance is the classic error.",
        ],
      },
      {
        id: "tp3",
        title: "Loss contingencies & provisions (ASC 450)",
        priority: "high",
        examinerFocus:
          "Applying the probable / reasonably possible / remote framework, and the range rule: when a loss is probable and only a range is estimable, accrue the best estimate, or the minimum of the range when no amount in the range is better than another.",
        typicalQuestionForms: [
          "MCQ: decide accrue vs disclose vs ignore for a described contingency.",
          "TBS: given a range of probable loss, compute the accrual and the required disclosure.",
        ],
        mustKnow: [
          "Accrue a loss contingency only when it is BOTH probable AND reasonably estimable; disclose (do not accrue) when reasonably possible; generally ignore remote (except guarantees).",
          "If a probable loss is a range with no single best estimate, accrue the MINIMUM of the range under US GAAP (not the midpoint) and disclose the exposure to the additional amount.",
          "Gain contingencies are never accrued; they are disclosed only when highly probable, to avoid recognizing gains before realization.",
        ],
        scoringActions: [
          "State the likelihood tier (probable/reasonably possible/remote) explicitly, then apply the matching accrue/disclose action.",
          "For a probable range, accrue the low end when no point estimate is superior, and disclose the reasonably possible additional loss.",
        ],
      },
      {
        id: "tp4",
        title: "Fair value measurement & the hierarchy (ASC 820)",
        priority: "high",
        examinerFocus:
          "Fair value as an EXIT price in the principal (or most advantageous) market, the highest-and-best-use concept for nonfinancial assets, the three valuation approaches, and classifying inputs into Levels 1, 2 and 3.",
        typicalQuestionForms: [
          "MCQ: determine fair value given prices in a principal vs a more advantageous market.",
          "TBS: classify a set of inputs (quoted equity prices, matrix-priced bonds, discounted-cash-flow assumptions) into the three-level hierarchy.",
        ],
        mustKnow: [
          "Fair value is the price to SELL an asset or TRANSFER a liability in an orderly transaction between market participants at the measurement date — an exit price, not an entry price.",
          "Measure in the principal market (greatest volume/activity for the asset); if none, use the most advantageous market — but the principal market takes precedence even if another market shows a better net price.",
          "Level 1 = unadjusted quoted prices in active markets for identical assets; Level 2 = other observable inputs (quoted prices for similar assets, matrix pricing, observable rates); Level 3 = unobservable inputs (entity's own DCF assumptions).",
        ],
        scoringActions: [
          "Use the principal-market price even when a different market appears more advantageous — the hierarchy of markets is tested directly.",
          "Do not deduct transaction costs to arrive at fair value (they are considered only to identify the most advantageous market); do deduct them to test which market is most advantageous.",
        ],
      },
      {
        id: "tp5",
        title: "Warranties, ARO and OPEB accrual mechanics",
        priority: "medium",
        examinerFocus:
          "Applying the same probable-and-estimable accrual logic to assurance-type warranties, building and accreting an asset retirement obligation, and recognizing that OPEB uses a pension-style accrual over the attribution period.",
        typicalQuestionForms: [
          "MCQ: compute the year-end warranty liability from a roll-forward (beginning + accrual − claims paid).",
          "MCQ: measure an ARO at present value and compute first-year accretion.",
        ],
        mustKnow: [
          "Assurance-type warranties are accrued as a liability and expense when the related sales are recognized (matching); the liability rolls forward: beginning + estimated accrual − actual claims settled.",
          "An asset retirement obligation is recorded at the present value of expected retirement costs, capitalized into the asset, then accreted to expense using the credit-adjusted risk-free rate; accretion = beginning ARO × that rate.",
          "OPEB (retiree healthcare) uses a pension-style accrual: the expected postretirement benefit obligation is attributed over the service period to the full-eligibility date, not spread to expected retirement.",
        ],
        scoringActions: [
          "Roll the warranty liability rather than expensing claims directly — claims paid reduce the liability, they are not a separate expense.",
          "Separate ARO accretion (an operating/financing-style expense) from depreciation of the capitalized retirement cost.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Pension arithmetic and the contingency framework are high-yield, formula-driven points — target near-full marks on the numeric TBS and never miss the accrue/disclose decision on contingencies.",
      timeBudget:
        "~1.25 min per MCQ; on a pension or fair-value TBS budget 3–4 minutes to build the roll-forward/worksheet before entering any figure.",
      answerSequence: [
        "For pensions: list the six components with signs, sum to net periodic cost, then present service cost operating vs the rest nonoperating.",
        "Roll forward PBO and plan assets separately; difference them for funded status; apply the 10% corridor.",
        "For contingencies: classify likelihood, then accrue best estimate (or range minimum) and disclose the balance.",
        "For fair value: identify the principal market and input level before recording the measurement.",
      ],
      qualityChecks: [
        "Did I reduce pension cost by the EXPECTED (not actual) return on plan assets?",
        "Did I test the corridor against 10% of the GREATER of PBO or plan assets?",
        "Did I accrue the MINIMUM of a probable range (US GAAP) rather than the midpoint?",
        "Did I measure fair value at an exit price in the principal market?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Building net periodic pension cost and its statement geography",
        testPointIds: ["tp1"],
        explanation: [
          "Defined-benefit pension expense is assembled, not observed. The employer promises a future benefit, an actuary discounts that promise to a projected benefit obligation (PBO), and each year the cost of that promise is broken into components that move in different directions. Service cost is the present value of benefits earned by employees for the current year's service and always increases cost. Interest cost is the unwinding of the discount on the beginning PBO (beginning PBO × discount rate) and also increases cost. The expected return on plan assets (beginning plan assets or market-related value × the expected long-term rate) reduces cost, because investment earnings offset the employer's burden.",
          "The two amortization components smooth items that were parked in other comprehensive income. Prior service cost arises when a plan amendment grants credit for past service; it is capitalized in AOCI and amortized to expense over the remaining service period. Net actuarial gains and losses accumulate from changes in assumptions and from the gap between expected and actual asset returns; they are amortized only when they breach the corridor (see sn2). The mnemonic S-I-R-A-G (Service, Interest, Return, Amortization of prior service, amortization of Gain/loss) captures all six with Return carrying a minus sign.",
          "Presentation matters after ASU 2017-07. Only the service-cost component is reported alongside other compensation in operating income and is the only component that can be capitalized into inventory or a self-constructed asset. Interest cost, expected return and the amortizations are reported outside operating income (for example, in a 'other nonoperating' line). Exam items exploit this by asking which component belongs 'above the line' or which may be capitalized — the answer is always service cost alone.",
        ],
        keyRules: [
          "Net periodic pension cost = service cost + interest cost − expected return + amortization of prior service cost ± amortization of net gain/loss.",
          "Interest cost = beginning PBO × discount rate; expected return = beginning plan assets × expected rate.",
          "Only service cost is operating and capitalizable (ASU 2017-07); all other components are nonoperating.",
        ],
        formulas: [
          "Interest cost = beginning PBO × settlement (discount) rate",
          "Expected return = beginning market-related value of plan assets × expected long-term rate",
          "Net periodic pension cost = SC + IC − ER + PSC amort ± net (gain)/loss amort",
        ],
        workedProblem: {
          scenario:
            "At the start of Year 6, Delta Co.'s defined-benefit plan reports PBO $500,000 and plan assets (equal to market-related value) $450,000. Discount rate 6%; expected long-term return 8%. During Year 6: service cost $60,000; actual return on assets $40,000; employer contributions $55,000; benefits paid to retirees $25,000. The beginning unrecognized net loss in AOCI is $70,000; the average remaining service period is 10 years. There is no prior service cost. Compute (a) net periodic pension cost and (b) the ending funded status.",
          steps: [
            "Service cost = $60,000 (given).",
            "Interest cost = 6% × beginning PBO $500,000 = $30,000.",
            "Expected return = 8% × beginning plan assets $450,000 = $36,000 (reduces cost).",
            "Corridor = 10% × greater of PBO $500,000 or plan assets $450,000 = 10% × $500,000 = $50,000. Net loss $70,000 exceeds the corridor by $20,000; amortization = $20,000 ÷ 10 years = $2,000.",
            "Net periodic pension cost = 60,000 + 30,000 − 36,000 + 2,000 = $56,000.",
            "Ending PBO = 500,000 + 60,000 service + 30,000 interest − 25,000 benefits = $565,000.",
            "Ending plan assets = 450,000 + 40,000 actual return + 55,000 contributions − 25,000 benefits = $520,000.",
            "Ending funded status = plan assets $520,000 − PBO $565,000 = $(45,000).",
          ],
          conclusion:
            "Net periodic pension cost for Year 6 is $56,000 (of which $60,000 service cost is operating and the net $(4,000) of interest, return and amortization is nonoperating). The plan is underfunded by $45,000, reported as a net pension liability.",
          markingNotes: [
            "Award marks for each correctly signed component (service, interest, expected return, corridor amortization).",
            "Award a mark for testing the corridor against 10% of the greater balance ($50,000) and dividing the $20,000 excess by 10 years.",
            "Full marks require rolling PBO and plan assets separately and concluding a $45,000 net liability.",
            "Deduct if actual return ($40,000) is used in cost instead of expected return ($36,000).",
          ],
        },
      },
      {
        id: "sn2",
        title: "Funded status on the balance sheet and the 10% corridor",
        testPointIds: ["tp2"],
        explanation: [
          "The employer reports a single net amount on the balance sheet: the funded status, equal to the fair value of plan assets minus the PBO. When assets exceed the PBO the plan is overfunded and a net pension asset is recognized; when the PBO is larger the plan is underfunded and a net pension liability is recognized. The PBO — not the accumulated benefit obligation — drives this figure. The distinction matters because the PBO incorporates projected future salary increases while the ABO uses current salary levels; a final-pay plan therefore has a PBO well above its ABO.",
          "Actuarial gains and losses do not flow straight to net income. They accumulate in AOCI, where two sources collect: changes in actuarial assumptions (discount rate, mortality, salary growth) and the difference between the expected and actual return on plan assets. To prevent volatile swings from hitting expense immediately, GAAP permits corridor amortization. Only the portion of the beginning net gain or loss that exceeds 10% of the greater of the beginning PBO or the beginning market-related value of plan assets is amortized, and only that excess is divided by the average remaining service period of active employees.",
          "The corridor is a favorite TBS because two traps live inside it. First, candidates test the net loss against 10% of the smaller balance rather than the greater — always compare to the larger of PBO and plan assets. Second, candidates forget that if the net gain/loss stays inside the corridor, amortization is zero for the period even though a balance still sits in AOCI. Each year the roll-forward is redone with a fresh beginning balance, so a plan can move in and out of amortization.",
        ],
        keyRules: [
          "Balance-sheet pension amount = funded status = fair value of plan assets − PBO.",
          "PBO uses projected future salaries; ABO uses current salaries.",
          "Corridor amortization applies only to the excess of net gain/loss over 10% of the greater of PBO or plan-asset value, spread over average remaining service life.",
        ],
        formulas: [
          "Funded status = fair value of plan assets − PBO",
          "Corridor threshold = 10% × max(beginning PBO, beginning market-related value of assets)",
          "Gain/loss amortization = (net gain/loss − corridor threshold) ÷ average remaining service period (only if positive)",
        ],
      },
      {
        id: "sn3",
        title: "Contingencies: the probable/possible/remote decision and range rule",
        testPointIds: ["tp3"],
        explanation: [
          "ASC 450 sorts loss contingencies by likelihood into three tiers — probable, reasonably possible, and remote — and each tier maps to a distinct action. A loss is accrued (recognized as a liability and expense) only when it is probable that a liability has been incurred AND the amount is reasonably estimable. When the loss is only reasonably possible, or probable but not estimable, no accrual is made but the nature of the contingency and an estimate of the possible loss (or a statement that one cannot be made) must be disclosed. Remote contingencies generally require no action, with the notable exception of guarantees, which are disclosed regardless of remoteness.",
          "The range rule is heavily tested. When a probable loss can only be described as a range, and no single amount within the range is a better estimate than any other, US GAAP requires accruing the minimum of the range and disclosing the exposure up to the maximum. This diverges from IFRS, which accrues the midpoint of a continuous range — the exam rewards candidates who apply the low-end US GAAP rule and flags the IFRS contrast. If one point in the range IS the best estimate, that point estimate is accrued instead.",
          "Symmetry does not hold for gains. Gain contingencies are never accrued because recognizing a gain before realization would overstate income and violate conservatism; they are disclosed only when the realization is highly probable, and even then care is taken to avoid misleading implications about likelihood. Warranties and litigation are the standard fact patterns: a probable, estimable litigation loss is accrued; a probable warranty obligation is accrued as sales occur; a merely reasonably possible lawsuit is disclosed.",
        ],
        keyRules: [
          "Accrue if probable AND reasonably estimable; disclose if reasonably possible; ignore remote (except guarantees).",
          "Probable range with no best estimate → accrue the minimum (US GAAP), disclose to the maximum (IFRS uses the midpoint).",
          "Gain contingencies are never accrued; disclose only if realization is highly probable.",
        ],
        workedProblem: {
          scenario:
            "At year end, Orion Inc. faces a product-liability lawsuit its counsel considers probable to result in a loss. Counsel estimates the loss will fall between $2,000,000 and $6,000,000, with no amount in that range being a better estimate than any other. Orion also expects, with reasonable possibility, a separate $1,500,000 environmental claim, and is highly likely to win a $900,000 counterclaim against a supplier. State the accounting for each.",
          steps: [
            "Lawsuit: loss is probable and estimable only as a range with no best point estimate → under US GAAP accrue the minimum of the range, $2,000,000, as a liability and expense.",
            "Lawsuit disclosure: disclose the nature of the contingency and the reasonably possible additional exposure up to $6,000,000 (i.e., the additional $4,000,000).",
            "Environmental claim: only reasonably possible → do not accrue; disclose the nature and the $1,500,000 estimate.",
            "Counterclaim: a gain contingency → do not accrue even though highly likely; disclose the $900,000 possible recovery, worded to avoid implying certainty of realization.",
          ],
          conclusion:
            "Orion accrues a $2,000,000 loss (the range minimum) for the lawsuit and discloses the additional $4,000,000 of possible loss; it discloses but does not accrue the $1,500,000 environmental claim; and it discloses but does not accrue the $900,000 gain contingency.",
          markingNotes: [
            "Award a mark for accruing the $2,000,000 minimum (not the $4,000,000 midpoint) and noting the IFRS midpoint contrast.",
            "Award a mark for disclose-only treatment of the reasonably possible environmental claim.",
            "Award a mark for not accruing the gain contingency and limiting it to disclosure.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Fair value: exit price, principal market and the input hierarchy",
        testPointIds: ["tp4"],
        explanation: [
          "ASC 820 defines fair value as the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date. Two words carry the exam weight: 'received' and 'transfer' make it an exit price, distinguishing it from the entry (acquisition) price. The measurement is market-based, not entity-specific, so it uses the assumptions market participants would use, including — for a nonfinancial asset — its highest and best use, which may differ from the reporting entity's intended use.",
          "The measurement occurs in the principal market: the market with the greatest volume and level of activity for the asset or liability. If there is no principal market, the most advantageous market is used — the one that maximizes the amount received net of transaction and transport costs. Critically, when a principal market exists, its price is used even if another market would yield a higher net price. Transaction costs are used to identify the most advantageous market but are not deducted in arriving at fair value itself (transport costs, however, are deducted because location is a characteristic of the asset).",
          "The three-level hierarchy prioritizes observability. Level 1 inputs are unadjusted quoted prices in active markets for identical assets (for example, an exchange-listed equity) and produce the most reliable measurement. Level 2 inputs are other observable inputs — quoted prices for similar assets, matrix pricing for bonds, observable interest-rate curves. Level 3 inputs are unobservable and reflect the entity's own assumptions, such as internally developed discounted-cash-flow projections; these require the most extensive disclosure. The level of a measurement is determined by the lowest-level input that is significant to the entire measurement.",
        ],
        keyRules: [
          "Fair value = exit price to sell an asset/transfer a liability in an orderly transaction at the measurement date.",
          "Use the principal market's price (greatest volume/activity); use the most advantageous market only if no principal market exists.",
          "Hierarchy: Level 1 (quoted, identical, active) > Level 2 (other observable) > Level 3 (unobservable); classify by the lowest significant input.",
        ],
        formulas: [
          "Most advantageous market test = price − transaction costs − transport costs (choose the highest net)",
          "Fair value = market price − transport costs (do NOT subtract transaction costs from the final measurement)",
        ],
      },
      {
        id: "sn5",
        title: "Warranties, asset retirement obligations and OPEB",
        testPointIds: ["tp5"],
        explanation: [
          "Assurance-type warranties are a direct application of the contingency accrual rule combined with matching. Because a probable, estimable obligation arises as products are sold, the estimated warranty cost is expensed and a warranty liability recognized in the period of sale. The liability then rolls forward: beginning balance plus the current-period estimated accrual, minus the actual cost of claims settled during the period. A common exam trap is to expense claims as they are paid; instead, claims paid reduce the previously recorded liability. (A service-type warranty sold separately is deferred revenue under ASC 606, a different model.)",
          "An asset retirement obligation (ARO) is a legal obligation to dismantle or restore a long-lived asset. It is recorded at the present value of the expected retirement cash flows using a credit-adjusted risk-free rate, with the same amount capitalized as part of the asset's carrying value. Two expenses then flow: depreciation of the capitalized retirement cost over the asset's life, and accretion expense equal to the beginning ARO balance times the credit-adjusted risk-free rate, which grows the liability toward its undiscounted settlement amount. Accretion is not interest expense in the classic sense but is presented as an operating item.",
          "Other post-employment benefits (OPEB), chiefly retiree healthcare, borrow the pension accrual machinery. The expected postretirement benefit obligation is attributed to service over the period from the date of hire to the full-eligibility date (the date the employee has earned the full benefit), not to the expected retirement date. Like pensions, OPEB recognizes service cost, interest cost, expected return on any plan assets and amortizations, and reports funded status on the balance sheet — so a candidate who can do pensions can do OPEB by analogy.",
        ],
        keyRules: [
          "Warranty liability rolls forward: beginning + estimated accrual − actual claims settled; accrue as sales occur.",
          "ARO = PV of retirement costs at the credit-adjusted risk-free rate, capitalized into the asset; accretion = beginning ARO × that rate.",
          "OPEB attributes the obligation over the service-to-full-eligibility period and uses the pension component model.",
        ],
        formulas: [
          "Ending warranty liability = beginning + accrual (est. rate × sales) − actual claims paid",
          "Accretion expense = beginning ARO balance × credit-adjusted risk-free rate",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (pension worksheet)",
        question:
          "Vega Corp.'s defined-benefit plan begins the year with PBO $800,000 and plan assets $700,000 (market-related value equal to fair value). Discount rate 5%; expected return 7%. During the year: service cost $90,000; actual return $60,000; contributions $80,000; benefits paid $40,000. Beginning net loss in AOCI $130,000; average remaining service 8 years; no prior service cost. Compute net periodic pension cost and the ending funded status, and state where each cost component is presented.",
        answerPlan: [
          "Service cost given; interest = 5% × 800,000; expected return = 7% × 700,000.",
          "Corridor = 10% × greater of 800,000 or 700,000 = 80,000; amortize excess over 8 years.",
          "Sum components for net periodic cost.",
          "Roll PBO and plan assets; difference for funded status.",
          "Split service cost (operating) from other components (nonoperating).",
        ],
        modelAnswer:
          "Interest cost = 5% × $800,000 = $40,000. Expected return = 7% × $700,000 = $49,000 (reduces cost). Corridor = 10% × greater of $800,000 or $700,000 = $80,000; the net loss $130,000 exceeds it by $50,000, so amortization = $50,000 ÷ 8 = $6,250. Net periodic pension cost = 90,000 + 40,000 − 49,000 + 6,250 = $87,250. Ending PBO = 800,000 + 90,000 + 40,000 − 40,000 = $890,000. Ending plan assets = 700,000 + 60,000 + 80,000 − 40,000 = $800,000. Funded status = 800,000 − 890,000 = $(90,000), a net pension liability. Presentation: the $90,000 service cost is in operating income; the net $(2,750) of interest cost, expected return and amortization ($40,000 − $49,000 + $6,250) is reported outside operating income.",
        markingGuide: [
          "1 mark: interest cost $40,000 and expected return $49,000 with correct signs.",
          "1 mark: corridor tested against $80,000 (greater balance) and $6,250 amortization.",
          "1 mark: net periodic pension cost $87,250.",
          "1 mark: ending funded status $(90,000) net liability from separate roll-forwards.",
          "1 mark: service cost operating, remaining components nonoperating.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3", "tp5"],
        style: "MCQ set rationale (contingencies & warranties)",
        question:
          "(a) Sirius Co. is a defendant in a suit; a loss is probable and estimated between $500,000 and $900,000 with no better estimate in the range. (b) Sirius sells goods with a one-year assurance warranty; it estimates warranty cost at 3% of the year's $10,000,000 sales and paid $220,000 of claims during the year (opening warranty liability $150,000). Determine the lawsuit accrual and the ending warranty liability, and explain.",
        answerPlan: [
          "Lawsuit: probable range, no best estimate → accrue minimum.",
          "Warranty: accrue 3% of sales; roll the liability by subtracting claims paid.",
        ],
        modelAnswer:
          "(a) Because the loss is probable and only estimable as a range with no superior point estimate, US GAAP requires accruing the minimum of the range, $500,000, and disclosing the additional reasonably possible loss up to $900,000 (the extra $400,000). Under IFRS the midpoint ($700,000) would be accrued instead. (b) The warranty is an assurance-type warranty, so cost is accrued as sales occur: estimated accrual = 3% × $10,000,000 = $300,000. The liability rolls forward: beginning $150,000 + accrual $300,000 − claims paid $220,000 = ending warranty liability $230,000. Claims paid reduce the liability rather than being expensed separately.",
        markingGuide: [
          "1 mark: accrue $500,000 lawsuit minimum (with IFRS midpoint contrast noted).",
          "1 mark: warranty accrual of $300,000 (3% of sales) recognized as sales occur.",
          "1 mark: ending warranty liability $230,000 via roll-forward.",
          "Deduct if claims paid are expensed instead of reducing the liability.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp4"],
        style: "Task-based simulation (fair value market & hierarchy)",
        question:
          "Lyra Fund holds an asset it can sell in two markets. Market A (its principal market) shows a price of $102 with $4 transaction costs and $1 transport cost. Market B shows a price of $105 with $2 transaction costs and $1 transport cost. Separately, classify these inputs: (i) an exchange-quoted price for the identical asset, (ii) a broker matrix price for a similar bond, (iii) the fund's internal discounted-cash-flow projection. Determine the asset's fair value and the hierarchy levels.",
        answerPlan: [
          "Fair value uses the principal market (A) price, adjusted only for transport, not transaction costs.",
          "Note that B looks more advantageous net but is ignored because A is the principal market.",
          "Classify each input into Levels 1/2/3.",
        ],
        modelAnswer:
          "Because Market A is the principal market, its price is used even though Market B would yield a higher net amount. Fair value equals the Market A price less transport cost (a characteristic of the asset's location): $102 − $1 = $101. Transaction costs ($4) are NOT deducted in measuring fair value; they are used only to identify the most advantageous market when no principal market exists. (Had there been no principal market, Market B's net-of-all-costs amount $105 − $2 − $1 = $102 would beat Market A's $102 − $4 − $1 = $97, making B most advantageous, with fair value then $105 − $1 = $104.) Input classification: (i) exchange-quoted price for the identical asset is Level 1; (ii) broker matrix pricing for a similar bond is Level 2 (observable but not identical/active); (iii) the fund's internal DCF projection is Level 3 (unobservable).",
        markingGuide: [
          "1 mark: fair value $101 using the principal market and deducting only transport cost.",
          "1 mark: recognizing the principal market overrides the more advantageous market, and transaction costs are excluded from measurement.",
          "1 mark: correct hierarchy classification (Level 1 / Level 2 / Level 3).",
        ],
      },
    ],
  }),

  // ===================================================================
  // FAR M6 — Debt, equity & EPS (ASC 470 / 505 / 718 / 260)
  // ===================================================================
  "cpa-far-m6": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Bond issuance and the effective-interest method",
        priority: "critical",
        examinerFocus:
          "Pricing a bond as the present value of its cash flows at the market yield, then running the effective-interest amortization schedule so that interest expense equals carrying value times the market rate, not the coupon rate.",
        typicalQuestionForms: [
          "MCQ: compute issue price given PV factors, or first-year interest expense on a discount/premium bond.",
          "TBS: build a multi-period amortization schedule and report the year-end carrying value.",
        ],
        mustKnow: [
          "Issue price = PV of face at the market rate + PV of the coupon annuity at the market rate; coupon < market → discount, coupon > market → premium.",
          "Effective-interest expense = beginning carrying value × market (effective) rate; cash paid = face × coupon rate; the difference amortizes the discount/premium.",
          "A discount increases carrying value toward par over time (expense > cash); a premium decreases carrying value toward par (expense < cash).",
        ],
        scoringActions: [
          "Always apply the MARKET rate to carrying value for expense and the COUPON rate to face for cash — mixing them is the top error.",
          "Update carrying value each period before computing the next period's expense.",
        ],
      },
      {
        id: "tp2",
        title: "Debt extinguishment and modification (10% test)",
        priority: "high",
        examinerFocus:
          "Computing gain or loss on early extinguishment (reacquisition price vs net carrying value) and applying the 10% cash-flow test to decide whether a restructuring is a modification or an extinguishment.",
        typicalQuestionForms: [
          "MCQ: compute the gain/loss on retiring bonds before maturity.",
          "MCQ: apply the 10% test to classify a debtor's restructuring as modification vs extinguishment.",
        ],
        mustKnow: [
          "Gain/loss on extinguishment = net carrying value (face ± unamortized premium/discount − unamortized issue costs) − reacquisition price; excess carrying value over price is a gain.",
          "For a debtor, if the present value of the new cash flows (at the original effective rate) differs from the old by 10% or more, the exchange is an extinguishment (new debt at fair value, old derecognized); under 10% it is a modification (carry over, adjust effective yield).",
          "Unamortized discount/premium and issue costs must be written off as part of the extinguishment gain/loss.",
        ],
        scoringActions: [
          "Compute NET carrying value (include unamortized discount/premium and issue costs) before comparing to reacquisition price.",
          "Run the 10% PV test using the ORIGINAL effective rate to discount the new cash flows.",
        ],
      },
      {
        id: "tp3",
        title: "Stockholders' equity: treasury stock and dividends",
        priority: "medium",
        examinerFocus:
          "Recording treasury stock under the cost and par-value methods, and distinguishing cash, property, small stock, large stock dividends and splits by their effect on retained earnings and par.",
        typicalQuestionForms: [
          "MCQ: journal entries for treasury reacquisition and reissuance under the cost method.",
          "MCQ: amount capitalized from retained earnings for a small vs large stock dividend.",
        ],
        mustKnow: [
          "Cost method: treasury stock is debited at reacquisition cost; reissuance above cost credits APIC-treasury, below cost debits APIC-treasury then retained earnings — never a gain/loss to income.",
          "Cash dividends reduce retained earnings on the declaration date (creating a liability); the record and payment dates have no income effect.",
          "Small stock dividend (<20–25%) capitalizes retained earnings at fair value; large stock dividend (>20–25%) and stock split capitalize at par (or, for a split, only change par/share count with no entry to retained earnings).",
        ],
        scoringActions: [
          "Route treasury gains/losses through APIC and retained earnings, never through net income.",
          "Use fair value for a small stock dividend and par for a large one when reducing retained earnings.",
        ],
      },
      {
        id: "tp4",
        title: "Share-based compensation (ASC 718)",
        priority: "high",
        examinerFocus:
          "Measuring equity-classified awards at grant-date fair value and recognizing compensation over the requisite service (vesting) period, with correct handling of forfeitures and the no-remeasurement rule.",
        typicalQuestionForms: [
          "MCQ: compute annual compensation expense for options over the vesting period.",
          "MCQ: distinguish equity-classified (no remeasurement) from liability-classified (remeasured) awards.",
        ],
        mustKnow: [
          "Equity-classified awards are measured at grant-date fair value and NOT remeasured; total compensation = grant-date fair value × awards expected to vest, expensed straight-line over the service period.",
          "Forfeitures may be estimated (and trued up) or recognized as they occur, per an accounting policy election.",
          "Liability-classified awards (e.g., cash-settled SARs) are remeasured to fair value each reporting date until settlement, with changes in expense.",
        ],
        scoringActions: [
          "Lock in grant-date fair value for equity awards and spread it over the vesting period — do not remeasure for stock-price changes.",
          "For a cash-settled (liability) award, remeasure each period-end.",
        ],
      },
      {
        id: "tp5",
        title: "Basic and diluted EPS (ASC 260)",
        priority: "critical",
        examinerFocus:
          "Computing basic EPS on the weighted-average share count and diluted EPS by layering in dilutive potential shares using the treasury-stock method (options) and if-converted method (convertibles), while excluding antidilutive securities.",
        typicalQuestionForms: [
          "MCQ: compute basic EPS with preferred dividends and a mid-year share issuance.",
          "TBS: rank potential common shares by incremental EPS and compute fully diluted EPS.",
        ],
        mustKnow: [
          "Basic EPS = (net income − preferred dividends) ÷ weighted-average common shares; cumulative preferred dividends are subtracted whether or not declared.",
          "Treasury-stock method (options): incremental shares = options − (option proceeds ÷ average market price); only 'in-the-money' options are dilutive.",
          "If-converted method: add back the after-tax interest (convertible bonds) or the preferred dividends (convertible preferred) to the numerator and add the conversion shares to the denominator; test each security and include only if it lowers EPS.",
        ],
        scoringActions: [
          "Compute basic EPS first, then add potential shares in order of increasing incremental EPS (most dilutive first), stopping before any security raises EPS.",
          "Exclude antidilutive securities entirely and subtract cumulative preferred dividends even if undeclared.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Bond amortization and EPS are the two reliably scored TBS engines in this module — practice them until the schedules are automatic and bank the marks.",
      timeBudget:
        "~1.25 min per MCQ; on a diluted-EPS TBS spend 4–5 minutes ranking securities by incremental EPS before assembling the final ratio.",
      answerSequence: [
        "Price the bond at market yield, then amortize with expense = carrying value × market rate.",
        "For restructurings, compute net carrying value and run the 10% PV test.",
        "For EPS, compute basic first, then layer dilutive securities from most to least dilutive.",
        "Route treasury and share-comp adjustments through equity/APIC, never income.",
      ],
      qualityChecks: [
        "Did I use the market rate (not coupon) on carrying value for interest expense?",
        "Did I include unamortized discount/premium and issue costs in extinguishment gain/loss?",
        "Did I subtract cumulative preferred dividends even though undeclared?",
        "Did I exclude every antidilutive security from diluted EPS?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Pricing bonds and the effective-interest schedule",
        testPointIds: ["tp1"],
        explanation: [
          "A bond's issue price is simply the present value of everything it will pay, discounted at the market (effective) yield demanded on the issue date. That is the present value of the face amount (a single sum discounted with the PV-of-1 factor) plus the present value of the periodic coupon payments (an annuity discounted with the PV-of-annuity factor). When the stated coupon rate is below the market rate, investors will pay less than face, producing a discount; when the coupon exceeds the market rate, they pay a premium. The coupon rate never changes the price direction on its own — it is the coupon relative to the market yield that determines discount versus premium.",
          "Once issued, GAAP requires the effective-interest method for amortization (the straight-line method is acceptable only if results are not materially different). Each period, interest expense equals the beginning carrying value multiplied by the market rate, while the cash coupon equals face times the stated rate. The difference between expense and cash is the amortization of the discount or premium. For a discount bond, expense exceeds cash, so the discount shrinks and carrying value rises toward par; for a premium bond, cash exceeds expense, so carrying value falls toward par. By maturity the carrying value equals face in both cases.",
          "Exam schedules are graded on internal consistency. A single mislabeled rate cascades through every subsequent period, so candidates should build a five-column schedule (cash interest, effective interest, amortization, unamortized balance, carrying value) and update the carrying value before computing the next period. Debt issuance costs are netted against the carrying value (a further discount) and amortized through the effective yield as well.",
        ],
        keyRules: [
          "Issue price = (face × PV-of-1 factor at market rate) + (coupon × PV-of-annuity factor at market rate).",
          "Interest expense = beginning carrying value × market rate; cash = face × coupon rate.",
          "Discount → carrying value rises to par; premium → carrying value falls to par; issue costs net against carrying value.",
        ],
        formulas: [
          "Issue price = Face × PVF(market, n) + Coupon × PVA(market, n)",
          "Interest expense = beginning carrying value × market rate",
          "Amortization = interest expense − cash coupon; ending carrying value = beginning ± amortization",
        ],
        workedProblem: {
          scenario:
            "On Jan 1, Nova Co. issues $100,000 of 5-year bonds paying an 8% annual coupon when the market yield is 10%. PV factors at 10% for 5 periods: PV of $1 = 0.6209; PV of ordinary annuity = 3.7908. Compute the issue price and the Year 1 interest expense, amortization, and ending carrying value.",
          steps: [
            "PV of face = $100,000 × 0.6209 = $62,090.",
            "Annual coupon = $100,000 × 8% = $8,000; PV of coupons = $8,000 × 3.7908 = $30,326.",
            "Issue price = 62,090 + 30,326 = $92,416 (a discount of $7,584 because coupon 8% < market 10%).",
            "Year 1 interest expense = beginning carrying value $92,416 × 10% = $9,242 (rounded).",
            "Cash coupon = $8,000; discount amortization = 9,242 − 8,000 = $1,242.",
            "Ending carrying value = 92,416 + 1,242 = $93,658.",
          ],
          conclusion:
            "The bonds are issued at $92,416 (a $7,584 discount). Year 1 interest expense is $9,242, of which $8,000 is cash and $1,242 amortizes the discount, raising the carrying value to $93,658.",
          markingNotes: [
            "1 mark: issue price $92,416 using both PV factors.",
            "1 mark: interest expense $9,242 = carrying value × 10% (not $8,000 = face × 8%).",
            "1 mark: amortization $1,242 and ending carrying value $93,658.",
            "Deduct if the coupon rate is applied to carrying value for expense.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Extinguishment gains/losses and the 10% modification test",
        testPointIds: ["tp2"],
        explanation: [
          "When a company retires debt before maturity, the gain or loss is the difference between the net carrying value of the debt and the price paid to reacquire it. Net carrying value is the face amount adjusted for any unamortized premium (added) or discount (subtracted) and any unamortized issuance costs (subtracted). If the net carrying value exceeds the reacquisition price, the company settles for less than the books show and records a gain; if it pays more, it records a loss. A frequent error is comparing the reacquisition price to face rather than to net carrying value — the unamortized amounts must be written off in the same entry.",
          "Restructurings between a borrower and the original lender require the 10% cash-flow test to decide whether the old debt survives (modification) or is treated as retired (extinguishment). The present value of the new instrument's cash flows, discounted at the original effective interest rate, is compared to the carrying amount of the old debt. If the two differ by 10% or more, the transaction is an extinguishment: the old debt is derecognized, the new debt is recorded at fair value, and a gain or loss results. If they differ by less than 10%, it is a modification: no gain or loss is recognized, fees are generally expensed, and a new effective rate is computed that carries the old balance forward.",
          "Troubled debt restructurings (where the creditor grants a concession to a debtor in financial difficulty) layer on additional rules, but the exam most often tests the mechanical distinction above plus the write-off of unamortized amounts. Candidates should state which test they are applying and show the net carrying value explicitly to earn full marks.",
        ],
        keyRules: [
          "Gain/loss on extinguishment = net carrying value − reacquisition price (gain if carrying value is higher).",
          "Net carrying value = face ± unamortized premium/discount − unamortized issue costs.",
          "10% test (borrower): PV of new cash flows at the original effective rate vs old carrying amount — ≥10% difference = extinguishment; <10% = modification.",
        ],
        formulas: [
          "Net carrying value = face + unamortized premium − unamortized discount − unamortized issue costs",
          "Gain (loss) on extinguishment = net carrying value − reacquisition price",
        ],
      },
      {
        id: "sn3",
        title: "Treasury stock and dividend mechanics",
        testPointIds: ["tp3"],
        explanation: [
          "Equity transactions never touch net income — this is the organizing principle. Under the cost method (the exam default), reacquired shares are recorded in a contra-equity Treasury Stock account at their reacquisition cost. When the shares are later reissued above cost, the excess is credited to Additional Paid-in Capital — Treasury; when reissued below cost, the shortfall first reduces any APIC-Treasury balance and, once that is exhausted, reduces Retained Earnings. No gain or loss ever flows to the income statement, no matter how the reissue price compares to cost. The par-value method instead removes the original issuance amounts, but the cost method is what most simulations test.",
          "Dividends are recognized on the declaration date, when the board creates a legal obligation. A cash dividend debits Retained Earnings and credits Dividends Payable on declaration; the record date merely identifies who is paid; the payment date settles the liability. Property dividends are first remeasured to the fair value of the asset distributed (recognizing any gain or loss on the asset), then the dividend is recorded at that fair value.",
          "Stock dividends and splits reshuffle equity without transferring assets. A small stock dividend (conventionally under 20–25% of shares outstanding) capitalizes Retained Earnings at the fair value of the shares issued. A large stock dividend (over 20–25%) capitalizes only at par value. A stock split changes the number of shares and the par per share but requires no journal entry to retained earnings — it is purely a memorandum change. Recognizing the fair-value-vs-par distinction and the declaration-date trigger earns most of the marks here.",
        ],
        keyRules: [
          "Cost method: treasury reissuances route through APIC-Treasury then Retained Earnings — never income.",
          "Cash dividends reduce Retained Earnings on the declaration date; property dividends are remeasured to fair value first.",
          "Small stock dividend → capitalize at fair value; large stock dividend → capitalize at par; split → memo only.",
        ],
      },
      {
        id: "sn4",
        title: "Share-based compensation under ASC 718",
        testPointIds: ["tp4"],
        explanation: [
          "For equity-classified awards such as stock options and restricted stock units settled in shares, the measurement date is the grant date and the measure is fair value. Total compensation cost equals the grant-date fair value of the awards expected to vest and is recognized over the requisite service period — usually the vesting period — typically on a straight-line basis. A defining feature is that equity-classified awards are NOT remeasured for later changes in the stock price; once grant-date fair value is fixed, subsequent market movements do not change compensation expense.",
          "Forfeitures are handled by policy election: an entity may estimate expected forfeitures up front (and true up to actual) or account for forfeitures as they occur. Either way, only awards that ultimately vest generate cumulative expense, so a graded example computes annual expense as total grant-date fair value divided across the vesting years, adjusted for the vesting estimate. Performance conditions affect whether expense is recognized (based on the probability of achieving the condition), while market conditions are baked into the grant-date fair value and are not reversed even if unmet.",
          "Liability-classified awards behave differently. Cash-settled stock appreciation rights, for instance, are remeasured to fair value at every reporting date until settlement, so compensation expense fluctuates with the stock price throughout the award's life. Distinguishing equity settlement (fixed at grant date) from cash settlement (remeasured) is a common MCQ, as is identifying the requisite service period over which to spread the cost.",
        ],
        keyRules: [
          "Equity-classified award: measure at grant-date fair value, recognize over the service period, do not remeasure.",
          "Forfeitures: estimate-and-true-up or recognize as incurred (policy election); only vested awards create cumulative cost.",
          "Liability-classified (cash-settled) awards are remeasured to fair value each reporting date.",
        ],
        formulas: [
          "Annual compensation expense (equity, straight-line) = (grant-date fair value × awards expected to vest) ÷ vesting years",
        ],
      },
      {
        id: "sn5",
        title: "Basic and diluted EPS: the ranking method",
        testPointIds: ["tp5"],
        explanation: [
          "Basic EPS divides income available to common shareholders by the weighted-average number of common shares outstanding. Income available to common shareholders is net income less preferred dividends; for cumulative preferred stock, the current-year dividend is subtracted whether or not it is declared, while for noncumulative preferred only declared dividends are subtracted. The weighted-average share count is time-weighted for issuances and buybacks during the year, and stock dividends/splits are applied retroactively to all periods presented.",
          "Diluted EPS asks what the ratio would be if all dilutive potential common shares had been issued. Options and warrants use the treasury-stock method: assume exercise, then assume the proceeds (exercise price times option count) are used to buy back shares at the average market price; the net new shares (options minus repurchased shares) enlarge the denominator, with no effect on the numerator. Only options that are in the money (exercise price below average market price) are dilutive. Convertible bonds and convertible preferred use the if-converted method: assume conversion at the beginning of the period, add the conversion shares to the denominator, and add back to the numerator the after-tax interest on the bonds or the preferred dividends that would no longer be paid.",
          "The safe technique is to compute basic EPS first, then compute each security's incremental EPS (the numerator effect divided by the share effect) and add the securities to the calculation in order from most dilutive (lowest incremental EPS) to least. Add a security only if it continues to reduce EPS; the moment a security would raise EPS it is antidilutive and is excluded, along with all remaining, higher-incremental securities. This ordering prevents the classic error of accidentally including an antidilutive convertible.",
        ],
        keyRules: [
          "Basic EPS = (net income − preferred dividends) ÷ weighted-average common shares; cumulative preferred subtracted even if undeclared.",
          "Treasury-stock method: incremental shares = options − (proceeds ÷ average market price), in-the-money only.",
          "If-converted method: add back after-tax bond interest or preferred dividends to the numerator and conversion shares to the denominator; include only if dilutive.",
        ],
        formulas: [
          "Basic EPS = (NI − preferred dividends) ÷ weighted-average common shares",
          "Option incremental shares = options − (option count × exercise price ÷ average market price)",
          "Convertible bond incremental EPS = after-tax interest ÷ conversion shares",
        ],
        workedProblem: {
          scenario:
            "Rigel Corp. reports net income $500,000. It has 100,000 weighted-average common shares, 10,000 shares of 8% $100-par cumulative convertible preferred (each convertible into 4 common shares), 20,000 options with a $20 exercise price (average market price $25), and $1,000,000 of 8% convertible bonds convertible into 30,000 common shares. The tax rate is 25%. Compute basic and diluted EPS.",
          steps: [
            "Preferred dividends = 10,000 × $100 × 8% = $80,000 (cumulative → subtract).",
            "Basic EPS = (500,000 − 80,000) ÷ 100,000 = 420,000 ÷ 100,000 = $4.20.",
            "Options (treasury-stock): proceeds = 20,000 × $20 = $400,000; repurchased = 400,000 ÷ 25 = 16,000; incremental = 20,000 − 16,000 = 4,000 shares; incremental EPS = $0 (no numerator effect) → most dilutive.",
            "Convertible bonds (if-converted): after-tax interest = 1,000,000 × 8% × (1 − 0.25) = $60,000; shares 30,000; incremental EPS = 60,000 ÷ 30,000 = $2.00.",
            "Convertible preferred (if-converted): add back dividends $80,000; shares = 10,000 × 4 = 40,000; incremental EPS = 80,000 ÷ 40,000 = $2.00.",
            "Add in order (options $0, then bonds $2.00, then preferred $2.00): after options 420,000 ÷ 104,000 = $4.04; after bonds (420,000 + 60,000) ÷ (104,000 + 30,000) = 480,000 ÷ 134,000 = $3.58; after preferred (480,000 + 80,000) ÷ (134,000 + 40,000) = 560,000 ÷ 174,000 = $3.22.",
            "Each step lowers EPS, so all three securities are dilutive.",
          ],
          conclusion:
            "Basic EPS is $4.20 and diluted EPS is $3.22. All potential common shares (options, convertible bonds, convertible preferred) are dilutive because adding each in incremental-EPS order continues to reduce the ratio.",
          markingNotes: [
            "1 mark: basic EPS $4.20 with cumulative preferred subtracted.",
            "1 mark: treasury-stock method incremental shares of 4,000 for options.",
            "1 mark: after-tax bond add-back $60,000 and preferred add-back $80,000 with correct share counts.",
            "1 mark: diluted EPS $3.22 assembled in most-to-least dilutive order.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (bond schedule & retirement)",
        question:
          "Orion Co. issued $200,000 of 6% annual-coupon bonds at $186,000 when the market yield was 8%. After the first interest payment, it retires the entire issue at 101 (i.e., $202,000). Compute Year 1 interest expense and ending carrying value, then the gain or loss on retirement.",
        answerPlan: [
          "Interest expense = carrying value × 8%; cash = face × 6%; amortize the difference.",
          "Update carrying value.",
          "Gain/loss = net carrying value − reacquisition price.",
        ],
        modelAnswer:
          "Year 1 interest expense = $186,000 × 8% = $14,880. Cash coupon = $200,000 × 6% = $12,000. Discount amortization = 14,880 − 12,000 = $2,880, so ending carrying value = 186,000 + 2,880 = $188,880. On retirement, net carrying value $188,880 is compared to the reacquisition price of $202,000. Because the company pays $202,000 to settle debt carried at $188,880, it recognizes a loss on extinguishment of $202,000 − $188,880 = $13,120. The entry writes off the bonds and remaining unamortized discount and records the $13,120 loss.",
        markingGuide: [
          "1 mark: interest expense $14,880 (carrying value × market rate) and cash $12,000.",
          "1 mark: ending carrying value $188,880 after $2,880 amortization.",
          "1 mark: loss on extinguishment $13,120 = reacquisition price − net carrying value.",
          "Deduct if face ($200,000) is used instead of net carrying value for the gain/loss.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp4", "tp3"],
        style: "MCQ set rationale (share comp & equity)",
        question:
          "(a) On Jan 1, Year 1, Perseus grants 10,000 stock options with a grant-date fair value of $6 each, vesting evenly over 3 years; the stock price rises to $9 by year-end. (b) Perseus reacquires 1,000 treasury shares at $30 and later reissues 400 of them at $25 (cost method; no prior APIC-Treasury). Compute Year 1 compensation expense and describe the reissuance entry.",
        answerPlan: [
          "Equity-classified: use grant-date fair value, ignore the price rise, spread over vesting.",
          "Treasury reissuance below cost: APIC-Treasury then Retained Earnings.",
        ],
        modelAnswer:
          "(a) The options are equity-classified, so they are measured at grant-date fair value ($6) and NOT remeasured for the rise to $9. Total compensation = 10,000 × $6 = $60,000, recognized straight-line over the 3-year vesting period, so Year 1 expense = $60,000 ÷ 3 = $20,000. (b) Reissuing 400 shares at $25 that cost $30 falls $5 below cost, a $2,000 shortfall (400 × $5). Under the cost method with no APIC-Treasury balance available, the entry debits Cash $10,000 (400 × $25) and Retained Earnings $2,000, and credits Treasury Stock $12,000 (400 × $30). No loss is reported in net income.",
        markingGuide: [
          "1 mark: Year 1 compensation expense $20,000 using grant-date fair value (no remeasurement).",
          "1 mark: reissuance shortfall $2,000 charged to Retained Earnings (no APIC-Treasury available).",
          "1 mark: recognizing that no gain/loss hits net income on treasury transactions.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5"],
        style: "MCQ (basic EPS with mid-year changes)",
        question:
          "Andromeda Co. began the year with 200,000 common shares, issued 60,000 shares on April 1, and declared a 2-for-1 stock split on October 1. Net income was $1,320,000 and it paid $120,000 of noncumulative preferred dividends (declared). Compute basic EPS.",
        answerPlan: [
          "Weight the share changes by time; apply the split retroactively to all pre-split shares.",
          "Subtract declared preferred dividends from net income.",
        ],
        modelAnswer:
          "Apply the 2-for-1 split retroactively to all shares outstanding before it, since splits are treated as if they existed for all periods presented. Weighted-average shares before the split: 200,000 × 12/12 = 200,000, plus 60,000 × 9/12 = 45,000, for 245,000 pre-split weighted shares; after the retroactive ×2 split, that is 490,000 shares. Income available to common = $1,320,000 − $120,000 preferred dividends = $1,200,000. Basic EPS = $1,200,000 ÷ 490,000 = $2.45.",
        markingGuide: [
          "1 mark: weighted-average of 245,000 pre-split shares (time-weighting the April issuance).",
          "1 mark: retroactive application of the 2-for-1 split to 490,000 shares.",
          "1 mark: basic EPS $2.45 after subtracting $120,000 preferred dividends.",
        ],
      },
    ],
  }),

  // ===================================================================
  // FAR M7 — Temporary differences & income taxes (ASC 740)
  // ===================================================================
  "cpa-far-m7": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Temporary vs permanent differences",
        priority: "critical",
        examinerFocus:
          "Classifying each book-tax difference as temporary (reverses, creates deferred taxes) or permanent (never reverses, no deferred tax), and identifying the direction of each temporary difference (taxable → DTL, deductible → DTA).",
        typicalQuestionForms: [
          "MCQ: identify whether a stated difference is temporary or permanent.",
          "TBS: sort a schedule of differences and mark which create DTAs vs DTLs.",
        ],
        mustKnow: [
          "Temporary differences reverse in future periods and create deferred taxes; permanent differences (municipal interest, fines/penalties, meals disallowance, DRD, life-insurance proceeds) never reverse and create no deferred tax.",
          "Taxable temporary differences (book income > tax now; e.g., tax depreciation > book) create deferred tax liabilities; deductible temporary differences (tax income > book now; e.g., warranty/allowance accruals) create deferred tax assets.",
          "Permanent differences change only the effective tax rate; they never appear in the deferred tax computation.",
        ],
        scoringActions: [
          "First label each difference temporary vs permanent; only temporary ones enter the deferred-tax schedule.",
          "For temporary differences, decide DTA vs DTL by whether the future reversal will be deductible (DTA) or taxable (DTL).",
        ],
      },
      {
        id: "tp2",
        title: "Measuring DTAs and DTLs at enacted rates",
        priority: "critical",
        examinerFocus:
          "Multiplying the cumulative temporary difference by the ENACTED future tax rate expected when it reverses, and recognizing the effect of an enacted rate change in the period of enactment.",
        typicalQuestionForms: [
          "MCQ: compute the year-end DTL/DTA given a temporary difference and enacted rate.",
          "TBS: remeasure deferred balances when a new rate is enacted.",
        ],
        mustKnow: [
          "DTL or DTA = cumulative temporary difference × the enacted tax rate expected to apply in the reversal period (not the current rate unless they are the same).",
          "A change in the enacted rate is recognized in continuing operations in the period the law is enacted, remeasuring all deferred balances immediately.",
          "Deferred tax assets and liabilities are classified as noncurrent on a classified balance sheet.",
        ],
        scoringActions: [
          "Use the ENACTED future rate for the reversal year; never use a merely proposed rate.",
          "On a rate change, remeasure every deferred balance and book the adjustment to tax expense from continuing operations.",
        ],
      },
      {
        id: "tp3",
        title: "Valuation allowance for deferred tax assets",
        priority: "high",
        examinerFocus:
          "Applying the more-likely-than-not (>50%) realization threshold, weighing positive and negative evidence, and reducing a DTA by a valuation allowance when realization is not more likely than not.",
        typicalQuestionForms: [
          "MCQ: determine whether a valuation allowance is required and its effect on tax expense.",
          "TBS: assess evidence and compute the net DTA after the allowance.",
        ],
        mustKnow: [
          "A valuation allowance reduces a DTA to the amount more likely than not (>50%) to be realized; it is a contra-asset that increases tax expense when established.",
          "Weigh positive evidence (future taxable income, reversing DTLs, tax-planning strategies, strong earnings history) against negative evidence (cumulative recent losses, expiring carryforwards) — cumulative losses are strong negative evidence.",
          "The allowance is reassessed each period; reversing it (when realization becomes probable) reduces tax expense.",
        ],
        scoringActions: [
          "Apply the >50% MLTN threshold, not 'probable' or 'certain', to DTA realization.",
          "Treat a recent cumulative loss position as strong negative evidence pointing toward an allowance.",
        ],
      },
      {
        id: "tp4",
        title: "Total tax provision and rate reconciliation",
        priority: "high",
        examinerFocus:
          "Building total income-tax expense as current tax plus the change in deferred taxes, and reconciling the statutory rate to the effective rate through permanent differences.",
        typicalQuestionForms: [
          "MCQ: compute total tax expense from current tax and the deferred change.",
          "TBS: prepare a statutory-to-effective rate reconciliation.",
        ],
        mustKnow: [
          "Total income-tax expense = current tax expense (taxable income × current rate) + net change in deferred tax balances (Δ DTL − Δ DTA).",
          "The effective tax rate = total tax expense ÷ pretax book income; it diverges from the statutory rate because of permanent differences (and rate changes, credits, VA changes).",
          "The reconciliation starts at statutory tax on book income and adjusts for the tax effect of each permanent item to arrive at total tax expense.",
        ],
        scoringActions: [
          "Compute taxable income (book ± all differences), then current tax; separately compute the deferred change from temporary differences only.",
          "Reconcile using only permanent items (and rate/credit effects) — temporary differences do not move the effective rate.",
        ],
      },
      {
        id: "tp5",
        title: "Uncertain tax positions (two-step model)",
        priority: "medium",
        examinerFocus:
          "Applying the recognition step (a position is recognized only if more likely than not to be sustained on technical merits) and the measurement step (the largest benefit with a cumulative probability greater than 50%).",
        typicalQuestionForms: [
          "MCQ: decide whether an uncertain position may be recognized and at what amount.",
          "TBS: given a probability table of possible outcomes, compute the recognizable benefit.",
        ],
        mustKnow: [
          "Step 1 recognition: recognize the tax benefit only if it is more likely than not (>50%) to be sustained on its technical merits assuming examination.",
          "Step 2 measurement: measure at the largest amount of benefit whose cumulative probability of being realized exceeds 50%.",
          "The unrecognized portion is a liability for unrecognized tax benefits; interest and penalties are accrued per policy.",
        ],
        scoringActions: [
          "Confirm the position clears the >50% technical-merits threshold before measuring any benefit.",
          "Build the cumulative-probability table and pick the largest outcome that first exceeds 50% cumulative.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "ASC 740 is a formula-plus-classification module; if you nail the temporary/permanent sort and the enacted-rate multiplication, the provision and reconciliation fall out — target strong TBS marks here.",
      timeBudget:
        "~1.25 min per MCQ; on a provision TBS budget 4–5 minutes to build the book-to-tax schedule before computing current and deferred pieces.",
      answerSequence: [
        "Sort each difference into temporary vs permanent; drop permanents from the deferred schedule.",
        "Compute taxable income and current tax at the current rate.",
        "Measure DTAs/DTLs at the enacted future rate; assess a valuation allowance.",
        "Sum current + deferred for total tax expense; reconcile statutory to effective via permanents.",
      ],
      qualityChecks: [
        "Did I exclude permanent differences from the deferred-tax computation?",
        "Did I use the ENACTED future rate for deferred balances?",
        "Did I test the DTA for a valuation allowance under the >50% MLTN threshold?",
        "Does my reconciliation move the rate only for permanent items and rate/credit effects?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The temporary/permanent sort and the direction of deferred taxes",
        testPointIds: ["tp1"],
        explanation: [
          "Income-tax accounting under ASC 740 exists because book income (GAAP) and taxable income (the IRC) are computed under different rules. The first task on any tax problem is to sort every difference into one of two boxes. A temporary difference is one that will reverse in a future period — the item hits book income and taxable income in different years but the lifetime totals are equal. A permanent difference never reverses; the item appears in one measure of income but never in the other (for example, tax-exempt municipal bond interest is in book income forever but never in taxable income). Only temporary differences generate deferred taxes; permanent differences are irrelevant to the deferred computation and instead move the effective tax rate.",
          "For temporary differences, the direction determines whether a deferred tax liability or asset arises. A taxable temporary difference reduces taxable income now relative to book (so more tax is payable later) and creates a deferred tax liability — the classic case is tax depreciation (MACRS/bonus) exceeding book depreciation, deferring tax to later years when book depreciation exceeds tax. A deductible temporary difference increases taxable income now relative to book (so less tax is payable later) and creates a deferred tax asset — accrued warranty expense, allowance for doubtful accounts, and deferred compensation are deductible for tax only when paid, so they create DTAs.",
          "Permanent differences include municipal bond interest income, fines and penalties, the nondeductible portion of meals and entertainment, the dividends-received deduction, and life-insurance proceeds and premiums on key-person policies. Because these never reverse, they change the relationship between pretax book income and tax expense — the effective rate — but never appear in a DTA or DTL. Correctly quarantining permanents from temporaries is the single most important discipline in ASC 740 problems.",
        ],
        keyRules: [
          "Only temporary differences create deferred taxes; permanent differences never do.",
          "Taxable temporary difference (e.g., excess tax depreciation) → deferred tax liability.",
          "Deductible temporary difference (e.g., warranty accrual) → deferred tax asset.",
        ],
      },
      {
        id: "sn2",
        title: "Measuring deferred balances at enacted rates and rate changes",
        testPointIds: ["tp2"],
        explanation: [
          "Deferred tax balances are measured by multiplying the cumulative temporary difference by the enacted tax rate expected to apply in the period the difference reverses. The word 'enacted' is critical: a rate that has been signed into law is used even if it takes effect in a future year, but a merely proposed or expected rate is never used. When future rates are scheduled to change (for example, a graduated phase-in), the reversal-year rate applies to the portion reversing in that year.",
          "When a new rate is enacted, all existing deferred tax assets and liabilities are remeasured immediately at the new rate, and the entire adjustment is recognized in income-tax expense from continuing operations in the period of enactment — even if the deferred balances originally related to items reported in other comprehensive income or discontinued operations. This 'enactment date' recognition is a favorite MCQ, testing whether candidates wait until the rate is effective (wrong) or adjust when it is enacted (right).",
          "Presentation is straightforward under current GAAP: all deferred tax assets and liabilities are classified as noncurrent on a classified balance sheet, and DTAs and DTLs attributable to the same taxing jurisdiction are netted into a single noncurrent amount. Candidates who remember the noncurrent-only classification and the enactment-date remeasurement rule capture most of the measurement marks.",
        ],
        keyRules: [
          "Deferred balance = cumulative temporary difference × enacted future (reversal-year) rate.",
          "Enacted rate changes are recognized in continuing-operations tax expense in the period of enactment.",
          "All deferred tax balances are noncurrent and are netted by jurisdiction.",
        ],
        formulas: [
          "DTL = taxable temporary difference × enacted future rate",
          "DTA = deductible temporary difference × enacted future rate",
        ],
      },
      {
        id: "sn3",
        title: "The valuation allowance and the MLTN threshold",
        testPointIds: ["tp3"],
        explanation: [
          "A deferred tax asset is only worth what the company can actually use against future taxable income. ASC 740 therefore requires a valuation allowance to reduce a DTA to the amount that is more likely than not — a probability greater than 50% — to be realized. The allowance is a contra-asset; establishing or increasing it increases income-tax expense, while reducing or reversing it decreases tax expense. Unlike the recognition of the DTA itself, the allowance is a judgment call driven by the weight of available evidence.",
          "Positive and negative evidence are weighed against each other. Positive evidence includes existing taxable temporary differences (reversing DTLs that will generate taxable income to absorb the DTA), a strong history of profitability, firm sales backlogs or contracts, and prudent, feasible tax-planning strategies. Negative evidence includes a history of operating loss or credit carryforwards expiring unused, cumulative recent losses, and expectations of future losses. Cumulative losses in recent years are considered strong, hard-to-overcome negative evidence and frequently trigger a full valuation allowance.",
          "The allowance is not permanent — it is reassessed each reporting period as circumstances change. If a company that previously recorded an allowance returns to sustained profitability, reversing the allowance boosts net income by reducing tax expense. Exam items test whether candidates apply the correct >50% threshold (not 'probable' at ~75% and not 'virtually certain') and whether they recognize cumulative losses as decisive negative evidence.",
        ],
        keyRules: [
          "Valuation allowance reduces a DTA to the more-likely-than-not (>50%) realizable amount.",
          "Establishing/increasing the allowance increases tax expense; reversing it decreases tax expense.",
          "Cumulative recent losses are strong negative evidence favoring an allowance.",
        ],
      },
      {
        id: "sn4",
        title: "Assembling the provision and reconciling the rate",
        testPointIds: ["tp4", "tp1"],
        explanation: [
          "Total income-tax expense has two pieces. The current piece is taxable income (book income adjusted for all permanent and temporary differences) multiplied by the current statutory rate — this is what the company owes the taxing authority for the year. The deferred piece is the net change during the year in deferred tax balances: an increase in a net DTL or a decrease in a net DTA adds to expense, while an increase in a net DTA or a decrease in a net DTL reduces expense. Adding the current and deferred pieces gives total income-tax expense, which is matched against pretax book income on the income statement.",
          "The effective tax rate — total tax expense divided by pretax book income — usually differs from the statutory rate. Temporary differences do NOT cause this divergence, because they affect only the timing and wash out through the deferred piece; the effective rate is driven by permanent differences, enacted rate changes, tax credits, and changes in the valuation allowance. The rate reconciliation therefore begins with statutory tax on book income and adds or subtracts the tax effect of each permanent item (and any rate/credit/VA effect) to arrive at total tax expense.",
          "A disciplined worksheet keeps the two computations physically separate: one column reconciles book income to taxable income for the current tax, and another tracks the beginning-to-ending change in each temporary difference for the deferred tax. Candidates who blend permanents into the deferred column, or who let temporaries drift into the rate reconciliation, lose marks even when the arithmetic is otherwise correct.",
        ],
        keyRules: [
          "Total tax expense = current tax (taxable income × current rate) + net change in deferred balances.",
          "Effective rate = total tax expense ÷ pretax book income; moved only by permanent items, rate changes, credits, VA changes.",
          "Temporary differences never appear in the rate reconciliation.",
        ],
        formulas: [
          "Current tax = taxable income × current statutory rate",
          "Deferred tax expense = ΔDTL − ΔDTA (increase in net DTL adds to expense)",
          "Total tax expense = current tax + deferred tax expense",
        ],
        workedProblem: {
          scenario:
            "Ceres Inc. reports pretax book income of $1,000,000. Permanent differences: $40,000 tax-exempt municipal bond interest (in book income, not taxable) and $10,000 of nondeductible fines. Temporary differences: tax depreciation exceeds book depreciation by $120,000 (taxable temporary difference), and warranty expense accrued for books but not yet deductible for tax is $30,000 (deductible temporary difference). The enacted rate is 21% for the current and all future years. Compute taxable income, current tax, the deferred tax expense, total tax expense, and the effective rate, and reconcile it.",
          steps: [
            "Taxable income = 1,000,000 − 40,000 (muni, remove) + 10,000 (fines, add back) − 120,000 (excess tax depreciation) + 30,000 (nondeductible warranty accrual) = $880,000.",
            "Current tax = 880,000 × 21% = $184,800.",
            "DTL from depreciation = 120,000 × 21% = $25,200 (increase → deferred tax expense).",
            "DTA from warranty = 30,000 × 21% = $6,300 (increase → deferred tax benefit).",
            "Net deferred tax expense = 25,200 − 6,300 = $18,900.",
            "Total tax expense = 184,800 + 18,900 = $203,700.",
            "Effective rate = 203,700 ÷ 1,000,000 = 20.37%.",
            "Reconciliation: statutory 21% × 1,000,000 = 210,000; less muni interest benefit 40,000 × 21% = (8,400); plus nondeductible fines 10,000 × 21% = 2,100; = $203,700 (matches).",
          ],
          conclusion:
            "Taxable income is $880,000, current tax $184,800, deferred tax expense $18,900, and total tax expense $203,700. The effective rate is 20.37%, below the 21% statutory rate because the tax-exempt municipal interest lowers it more than the nondeductible fines raise it — the two temporary differences do not affect the rate.",
          markingNotes: [
            "1 mark: taxable income $880,000 with correct signs on all four differences.",
            "1 mark: current tax $184,800.",
            "1 mark: net deferred tax expense $18,900 (DTL $25,200 less DTA $6,300).",
            "1 mark: total tax expense $203,700 and reconciliation using ONLY the two permanent items.",
            "Deduct if a temporary difference is included in the rate reconciliation.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Uncertain tax positions: recognition then measurement",
        testPointIds: ["tp5"],
        explanation: [
          "When a company takes a tax position that might not survive scrutiny, ASC 740 applies a two-step model before any benefit can be reflected in the financial statements. Step one is recognition: the benefit is recognized only if the position is more likely than not (greater than 50%) to be sustained on its technical merits, assuming the taxing authority examines it and has full knowledge of the facts. If the position fails this threshold, no benefit is recognized and the entire amount is a liability for unrecognized tax benefits.",
          "Step two is measurement, applied only after the position clears step one. The benefit recognized is the largest amount of tax benefit that has a cumulative probability greater than 50% of being realized upon ultimate settlement. In practice the entity lists the possible outcomes and their individual probabilities, computes the cumulative probability from the largest outcome downward, and recognizes the first outcome at which the cumulative probability exceeds 50%. The difference between the benefit claimed on the return and the benefit recognized is the unrecognized tax benefit liability.",
          "Interest and penalties on the unrecognized benefit are accrued according to the entity's accounting policy (either within income-tax expense or as separate line items). The exam typically supplies a probability table and tests whether candidates first confirm the >50% technical-merits hurdle and then select the correct measurement outcome — a position that passes recognition can still be measured well below the amount claimed.",
        ],
        keyRules: [
          "Recognition: recognize only if the position is >50% likely to be sustained on technical merits.",
          "Measurement: recognize the largest benefit with a cumulative probability >50% of realization.",
          "The unrecognized portion is a liability; interest and penalties are accrued per policy.",
        ],
        workedProblem: {
          scenario:
            "Pluto Corp. claims a $100,000 tax deduction it believes is 70% likely to be sustained on technical merits. On measurement, management assesses the possible sustained benefit as: $100,000 with 25% probability, $80,000 with 30%, $60,000 with 25%, and $40,000 with 20%. How much tax benefit should Pluto recognize, and what is the unrecognized tax benefit?",
          steps: [
            "Step 1 recognition: the position is 70% likely to be sustained, which exceeds the 50% more-likely-than-not threshold, so a benefit may be recognized.",
            "Step 2 measurement: build cumulative probabilities from the largest outcome down — $100,000: 25%; $80,000: 25% + 30% = 55%; the $80,000 outcome is the first whose cumulative probability exceeds 50%.",
            "Recognize $80,000 of benefit (the largest amount with cumulative probability >50%).",
            "Unrecognized tax benefit = claimed $100,000 − recognized $80,000 = $20,000 liability.",
          ],
          conclusion:
            "Because the position clears the more-likely-than-not recognition threshold, Pluto recognizes the $80,000 benefit (the largest amount with cumulative probability above 50%) and records a $20,000 liability for the unrecognized tax benefit.",
          markingNotes: [
            "1 mark: confirming the 70% position passes the >50% recognition threshold.",
            "1 mark: building cumulative probability and selecting the $80,000 measurement outcome.",
            "1 mark: $20,000 unrecognized tax benefit liability.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2", "tp4"],
        style: "Task-based simulation (provision build)",
        question:
          "Titan Co. has pretax book income of $600,000. It earned $20,000 of tax-exempt interest and incurred $5,000 of nondeductible penalties (permanent). Tax depreciation exceeded book by $80,000 (taxable temporary difference) and it accrued $15,000 of bad-debt expense not yet deductible (deductible temporary difference). The enacted rate is 25%. Compute taxable income, current tax, deferred tax expense, and total tax expense.",
        answerPlan: [
          "Adjust book income for permanents and temporaries to get taxable income.",
          "Current tax = taxable income × 25%.",
          "DTL and DTA from temporaries × 25%; net for deferred expense.",
          "Sum current + deferred.",
        ],
        modelAnswer:
          "Taxable income = 600,000 − 20,000 (tax-exempt interest) + 5,000 (nondeductible penalties) − 80,000 (excess tax depreciation) + 15,000 (nondeductible bad-debt accrual) = $520,000. Current tax = 520,000 × 25% = $130,000. Deferred: the $80,000 taxable temporary difference creates a DTL increase of 80,000 × 25% = $20,000 (deferred expense); the $15,000 deductible temporary difference creates a DTA increase of 15,000 × 25% = $3,750 (deferred benefit). Net deferred tax expense = 20,000 − 3,750 = $16,250. Total income-tax expense = 130,000 + 16,250 = $146,250.",
        markingGuide: [
          "1 mark: taxable income $520,000 with correct signs.",
          "1 mark: current tax $130,000.",
          "1 mark: DTL increase $20,000 and DTA increase $3,750.",
          "1 mark: total tax expense $146,250.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3"],
        style: "MCQ set rationale (valuation allowance)",
        question:
          "Europa Inc. has a $200,000 deferred tax asset from net operating loss carryforwards. It has reported cumulative pretax losses over the past three years and forecasts modest future profits, but management judges only 60% of the DTA more likely than not to be realized. What entry is required and how does it affect tax expense?",
        answerPlan: [
          "Apply the >50% MLTN threshold to the realizable portion.",
          "Compute the allowance for the unrealizable portion.",
          "State the tax-expense effect.",
        ],
        modelAnswer:
          "Because only 60% of the $200,000 DTA is more likely than not to be realized, a valuation allowance must reduce the DTA to its realizable amount. Realizable = 60% × $200,000 = $120,000; the allowance = the remaining $80,000. The entry debits income-tax expense $80,000 and credits the valuation allowance (a contra-DTA) $80,000, leaving a net DTA of $120,000. The cumulative recent losses are strong negative evidence supporting the allowance despite the forecast of modest profits; if future evidence shows realization has become more likely, reversing the allowance would reduce tax expense in that later period.",
        markingGuide: [
          "1 mark: allowance of $80,000 reducing the DTA to the $120,000 realizable amount.",
          "1 mark: increase in income-tax expense of $80,000 via the contra-asset.",
          "1 mark: identifying cumulative losses as strong negative evidence.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5"],
        style: "MCQ (uncertain tax position measurement)",
        question:
          "Io Co. claims an $90,000 deduction that is 80% likely to be sustained on technical merits. Possible sustained outcomes and probabilities: $90,000 (20%), $70,000 (35%), $50,000 (30%), $30,000 (15%). Determine the benefit to recognize and the unrecognized tax benefit.",
        answerPlan: [
          "Confirm recognition threshold (>50% on technical merits).",
          "Build cumulative probabilities from the top and select the first outcome exceeding 50%.",
        ],
        modelAnswer:
          "The 80% technical-merits likelihood exceeds the more-likely-than-not threshold, so a benefit may be recognized. Measuring: cumulative probability from the largest outcome down is $90,000 → 20%, $70,000 → 20% + 35% = 55%. The $70,000 outcome is the first whose cumulative probability exceeds 50%, so Io recognizes a $70,000 benefit. The unrecognized tax benefit is the claimed $90,000 less the recognized $70,000 = $20,000, recorded as a liability.",
        markingGuide: [
          "1 mark: confirming the position clears the >50% recognition threshold.",
          "1 mark: selecting the $70,000 measurement outcome via cumulative probability.",
          "1 mark: $20,000 unrecognized tax benefit liability.",
        ],
      },
    ],
  }),

  // ===================================================================
  // FAR M8 — State & local government accounting (GASB 34 / 33 / 54)
  // ===================================================================
  "cpa-far-m8": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Fund structure and the eleven fund types",
        priority: "critical",
        examinerFocus:
          "Classifying a described activity into the correct fund and category (governmental, proprietary, fiduciary) — the examiner gives a transaction and tests which fund records it and under what category.",
        typicalQuestionForms: [
          "MCQ: match an activity (utility, pension trust, motor pool, grant, tax-supported operations) to the correct fund.",
          "TBS: assign a list of transactions to the appropriate fund and category.",
        ],
        mustKnow: [
          "Governmental funds (5): General, Special Revenue, Capital Projects, Debt Service, Permanent — tax-supported core services.",
          "Proprietary funds (2): Enterprise (services to the public for a fee, e.g., water utility) and Internal Service (services to other government departments, e.g., a motor pool).",
          "Fiduciary funds (4): Pension (and OPEB) trust, Investment trust, Private-purpose trust, and Custodial — resources held for others, not available for government programs.",
        ],
        scoringActions: [
          "Ask 'who benefits and who pays?' — the public paying a fee → enterprise; another department → internal service; outside parties → fiduciary.",
          "Remember Permanent funds hold principal that must stay intact and only earnings support government programs (vs private-purpose trusts benefiting outsiders).",
        ],
      },
      {
        id: "tp2",
        title: "Measurement focus and basis of accounting",
        priority: "critical",
        examinerFocus:
          "Pairing the correct measurement focus (current financial resources vs economic resources) with the correct basis of accounting (modified accrual vs full accrual) for each fund and for the government-wide statements.",
        typicalQuestionForms: [
          "MCQ: identify the measurement focus/basis for a given fund or statement.",
          "TBS: determine whether a transaction is recorded and how, given the fund's basis.",
        ],
        mustKnow: [
          "Governmental funds use the current financial resources measurement focus and the modified accrual basis: they report near-term inflows/outflows of spendable resources, so no long-term assets or debt appear in the fund.",
          "Proprietary and fiduciary funds, and BOTH government-wide statements, use the economic resources measurement focus and the full accrual basis, reporting all assets and liabilities including capital assets and long-term debt.",
          "Under modified accrual, capital outlays are expenditures (not assets) and debt proceeds are 'other financing sources', not liabilities in the fund.",
        ],
        scoringActions: [
          "Identify the fund first, then lock its focus/basis before recording anything.",
          "In governmental funds, expense capital purchases as expenditures and record bond proceeds as other financing sources.",
        ],
      },
      {
        id: "tp3",
        title: "Modified accrual revenue recognition (GASB 33 nonexchange)",
        priority: "high",
        examinerFocus:
          "Applying 'measurable and available' to governmental-fund revenue and classifying nonexchange transactions (derived tax, imposed nonexchange, government-mandated, voluntary) for the correct recognition timing.",
        typicalQuestionForms: [
          "MCQ: determine when property tax or grant revenue is recognized in a governmental fund.",
          "TBS: recognize revenue across fund and government-wide bases for the same transaction.",
        ],
        mustKnow: [
          "Modified accrual recognizes revenue when it is measurable AND available — available meaning collectible within the period or soon enough after year-end to pay current liabilities (commonly within 60 days for property taxes).",
          "Imposed nonexchange revenues (property taxes, fines): recognize assets when there is an enforceable claim and revenue in the period for which levied (subject to availability in fund statements).",
          "Government-mandated and voluntary nonexchange (grants): recognize when all eligibility requirements are met (and time/purpose/reimbursement conditions satisfied).",
        ],
        scoringActions: [
          "Apply the availability criterion only in governmental funds; the government-wide statements (full accrual) drop it and recognize when levied/earned.",
          "For grants, confirm eligibility requirements are met before recognizing revenue.",
        ],
      },
      {
        id: "tp4",
        title: "Governmental fund statements, budgetary & encumbrance accounting",
        priority: "high",
        examinerFocus:
          "Preparing the balance sheet and statement of revenues, expenditures and changes in fund balance, recording the budget, and using encumbrance accounting to reserve appropriations for commitments.",
        typicalQuestionForms: [
          "MCQ: record the budgetary entry or an encumbrance and its reversal on receipt of goods.",
          "TBS: compute available appropriation (appropriation − expenditures − outstanding encumbrances).",
        ],
        mustKnow: [
          "The budget is recorded by debiting Estimated Revenues, crediting Appropriations, with Budgetary Fund Balance balancing; actual results are then compared to budget.",
          "Encumbrances reserve appropriation when a purchase order is issued (debit Encumbrances, credit Budgetary Fund Balance Reserved for Encumbrances); the entry is reversed and an expenditure recorded when goods/services are received.",
          "Fund balance is classified per GASB 54: Nonspendable, Restricted, Committed, Assigned, Unassigned.",
        ],
        scoringActions: [
          "Reverse the encumbrance when the actual expenditure is booked so amounts are not double-counted.",
          "Compute remaining appropriation as appropriation less expenditures less outstanding encumbrances.",
        ],
      },
      {
        id: "tp5",
        title: "Government-wide statements and the reconciliation (GASB 34)",
        priority: "critical",
        examinerFocus:
          "Preparing the government-wide statement of net position and statement of activities on full accrual, and reconciling governmental fund balance to the net position of governmental activities.",
        typicalQuestionForms: [
          "MCQ: identify a reconciling item between fund and government-wide statements.",
          "TBS: reconcile total governmental fund balance to net position of governmental activities.",
        ],
        mustKnow: [
          "Government-wide statements use full accrual and report governmental and business-type activities separately, plus a total; they include capital assets (net of depreciation) and long-term liabilities excluded from governmental funds.",
          "Reconciliation from fund balance to net position: ADD capital assets (net), SUBTRACT long-term liabilities (bonds, compensated absences) and accrued interest, and typically ADD internal service fund net position and revenues deferred as 'unavailable' in the funds.",
          "The statement of activities presents net (expense) revenue by function, showing how much of each function is supported by general revenues.",
        ],
        scoringActions: [
          "Start from total fund balance and layer the reconciling adjustments (add capital assets, remove long-term debt) to reach net position.",
          "Include internal service fund balances with governmental activities in the reconciliation when they primarily serve governmental functions.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Governmental accounting is a distinct, reliably tested FAR area — bank marks by nailing the fund-classification MCQs and the fund-to-government-wide reconciliation TBS.",
      timeBudget:
        "~1.25 min per MCQ; on a reconciliation TBS budget 4–5 minutes to lay out fund balance and each reconciling adjustment before totaling.",
      answerSequence: [
        "Classify the fund and category first (governmental / proprietary / fiduciary).",
        "Lock the measurement focus and basis of accounting for that fund/statement.",
        "Recognize revenue with 'measurable and available' in funds; full accrual government-wide.",
        "For reconciliations, start at fund balance and add capital assets, subtract long-term debt, adjust ISF and unavailable revenue.",
      ],
      qualityChecks: [
        "Did I use modified accrual (current financial resources) for governmental funds and full accrual for government-wide?",
        "Did I record capital outlays as expenditures and bond proceeds as other financing sources in the fund?",
        "Did I apply the availability criterion only in the fund statements, not government-wide?",
        "Did my reconciliation add capital assets and subtract long-term liabilities?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The three fund categories and eleven fund types",
        testPointIds: ["tp1"],
        explanation: [
          "Governmental accounting divides a government's activities into funds — self-balancing sets of accounts — grouped into three categories. The governmental category contains the five funds that account for tax-supported core services: the General Fund (the catch-all for general operations), Special Revenue Funds (revenues legally restricted to specific purposes, such as a gas-tax road fund), Capital Projects Funds (acquiring or constructing major capital facilities), Debt Service Funds (accumulating resources to pay general long-term debt principal and interest), and Permanent Funds (holding principal that must remain intact, with only the earnings usable for government programs — for example, a cemetery perpetual-care endowment).",
          "The proprietary category has two funds that operate like businesses. Enterprise Funds account for services provided to the general public for a fee, such as a municipal water or electric utility, an airport, or a public transit system. Internal Service Funds account for services one department provides to other departments of the same government on a cost-reimbursement basis, such as a central motor pool, print shop, or self-insurance fund. The key difference is the customer: the outside public versus other government departments.",
          "The fiduciary category has four funds for resources the government holds on behalf of others and that cannot be used to support the government's own programs: Pension (and OPEB) Trust Funds, Investment Trust Funds (external portions of investment pools), Private-Purpose Trust Funds (principal/income benefiting outside individuals or organizations), and Custodial Funds (assets held in a purely custodial capacity, such as taxes collected for other governments). Distinguishing a Permanent Fund (governmental, benefits the government's own programs) from a Private-Purpose Trust (fiduciary, benefits outsiders) is a classic exam trap.",
        ],
        keyRules: [
          "Governmental (5): General, Special Revenue, Capital Projects, Debt Service, Permanent.",
          "Proprietary (2): Enterprise (public customers) and Internal Service (other departments).",
          "Fiduciary (4): Pension/OPEB Trust, Investment Trust, Private-Purpose Trust, Custodial.",
        ],
      },
      {
        id: "sn2",
        title: "Measurement focus and basis of accounting",
        testPointIds: ["tp2"],
        explanation: [
          "The single most important idea in governmental accounting is that the same government reports on two different bases at once. Governmental funds use the current financial resources measurement focus with the modified accrual basis of accounting. This focus is deliberately short-term: it measures the flow of spendable financial resources, so the fund balance sheet reports only current assets and current liabilities that will be settled with those resources. Long-term capital assets and long-term debt do NOT appear in a governmental fund. Consequently, buying a fire truck is recorded as an expenditure (not a capitalized asset), and issuing bonds is recorded as an 'other financing source' (not a liability) in the fund.",
          "Proprietary funds, fiduciary funds, and both government-wide statements use the economic resources measurement focus with the full accrual basis — the same model as commercial GAAP. These statements report all assets and all liabilities, including capital assets net of accumulated depreciation and long-term bonds payable, and they recognize depreciation expense. This dual model is why a government must reconcile between the two: the same fire truck that was an expenditure in the fund becomes a depreciable capital asset government-wide, and the same bond that was an other-financing source becomes a long-term liability.",
          "Under modified accrual, expenditures are generally recognized when the related fund liability is incurred, with exceptions (e.g., debt service principal and interest are recognized when due, and compensated absences and claims are recognized only to the extent they will be liquidated with current resources). Recognizing which items are pushed to the government-wide statements — capital assets, long-term debt, accrued interest, depreciation — is the foundation for both recording transactions and building the reconciliation.",
        ],
        keyRules: [
          "Governmental funds: current financial resources focus + modified accrual; no long-term assets or debt in the fund.",
          "Proprietary, fiduciary, and government-wide: economic resources focus + full accrual; report capital assets and long-term debt.",
          "In funds, capital outlays = expenditures and bond proceeds = other financing sources.",
        ],
      },
      {
        id: "sn3",
        title: "Modified accrual revenue and GASB 33 nonexchange transactions",
        testPointIds: ["tp3"],
        explanation: [
          "Under modified accrual, revenue in governmental funds is recognized only when it is both measurable and available. 'Available' means the resources are collectible within the current period or soon enough afterward to pay current-period liabilities; for property taxes, governments commonly use a 60-day availability window after year-end. This availability criterion is unique to the fund statements — the government-wide statements, being full accrual, drop availability and recognize revenue when the underlying event occurs.",
          "GASB 33 classifies nonexchange transactions (where the government gives or receives value without directly equal exchange) into four types, each with its own recognition timing. Derived tax revenues (sales and income taxes) are recognized when the underlying exchange occurs. Imposed nonexchange revenues (property taxes, fines and forfeitures) create a receivable when the government has an enforceable legal claim, with revenue recognized in the period for which the taxes are levied (and, in funds, only to the extent available). Government-mandated nonexchange transactions and voluntary nonexchange transactions (most grants and donations) are recognized when all eligibility requirements are met — including time requirements, reimbursement conditions, and any purpose restrictions.",
          "The practical exam pattern gives a property tax levy or a grant and asks for the revenue in both the fund and the government-wide statements. In the fund, apply availability (recognize only what will be collected within the window, deferring the rest as 'unavailable revenue'); government-wide, recognize the full levied or earned amount. For a reimbursement-type grant, revenue is recognized only as the qualifying expenditures are made, because incurring the eligible cost is the eligibility requirement.",
        ],
        keyRules: [
          "Modified accrual revenue = recognized when measurable AND available (e.g., property taxes within ~60 days).",
          "Imposed nonexchange (property tax, fines): revenue in the period levied; asset when an enforceable claim exists.",
          "Grants (government-mandated/voluntary): recognize when all eligibility requirements are met; reimbursement grants when eligible costs are incurred.",
        ],
      },
      {
        id: "sn4",
        title: "Budgetary accounting, encumbrances and fund balance (GASB 54)",
        testPointIds: ["tp4"],
        explanation: [
          "Many governments formally integrate their legally adopted budget into the accounting records. The budgetary entry debits Estimated Revenues for anticipated inflows and credits Appropriations for authorized spending, with Budgetary Fund Balance as the balancing figure; if estimated revenues exceed appropriations, the plan is a surplus and Budgetary Fund Balance is credited. These budgetary accounts are memorandum controls that are closed at year-end and let the government compare actual results to the legally adopted budget in a required budgetary comparison schedule.",
          "Encumbrance accounting prevents overspending by reserving appropriation authority when a commitment is made. When a purchase order or contract is issued, the government debits Encumbrances and credits Budgetary Fund Balance Reserved for Encumbrances for the estimated amount. When the goods or services arrive, that entry is reversed at the original estimate and the actual expenditure is recorded (debit Expenditures, credit Vouchers/Cash) at the invoice amount. Remaining spending authority at any point equals appropriation minus expenditures to date minus outstanding encumbrances — a favorite MCQ computation.",
          "GASB 54 governs how the resulting fund balance is classified in governmental funds along a spendability hierarchy: Nonspendable (not in spendable form, e.g., inventory or permanent-fund principal), Restricted (constrained by external parties or law), Committed (constrained by the government's highest decision-making authority), Assigned (intended for a purpose but not formally committed), and Unassigned (the residual, only positive in the General Fund). Correctly ordering these classifications and computing available appropriation captures most of the marks in fund-accounting simulations.",
        ],
        keyRules: [
          "Budgetary entry: debit Estimated Revenues, credit Appropriations, balance to Budgetary Fund Balance.",
          "Encumbrance on order → reverse on receipt and record actual expenditure; available = appropriation − expenditures − outstanding encumbrances.",
          "GASB 54 fund balance tiers: Nonspendable, Restricted, Committed, Assigned, Unassigned.",
        ],
        formulas: [
          "Remaining appropriation = appropriation − expenditures to date − outstanding encumbrances",
        ],
        workedProblem: {
          scenario:
            "The General Fund adopts a budget with estimated revenues $5,000,000 and appropriations $4,800,000. During the year it issues purchase orders totaling $600,000 (encumbrances). Goods estimated at $350,000 arrive with an actual invoice of $360,000. Separately, actual expenditures unrelated to those POs are $3,900,000. Record the budgetary entry, the encumbrance activity, and compute the remaining available appropriation.",
          steps: [
            "Budgetary entry: debit Estimated Revenues $5,000,000; credit Appropriations $4,800,000; credit Budgetary Fund Balance $200,000 (planned surplus).",
            "Issuing POs: debit Encumbrances $600,000; credit Budgetary Fund Balance Reserved for Encumbrances $600,000.",
            "Goods arrive: reverse the encumbrance at the estimate — debit Reserved for Encumbrances $350,000, credit Encumbrances $350,000; then record the actual expenditure — debit Expenditures $360,000, credit Vouchers Payable $360,000.",
            "Outstanding encumbrances remaining = $600,000 − $350,000 reversed = $250,000.",
            "Total expenditures to date = $3,900,000 + $360,000 = $4,260,000.",
            "Remaining available appropriation = appropriation $4,800,000 − expenditures $4,260,000 − outstanding encumbrances $250,000 = $290,000.",
          ],
          conclusion:
            "After recording the budget, the encumbrances, and the receipt of goods, the General Fund has $290,000 of appropriation authority still available to spend (appropriation $4,800,000 less $4,260,000 expenditures less $250,000 outstanding encumbrances).",
          markingNotes: [
            "1 mark: budgetary entry with the $200,000 surplus to Budgetary Fund Balance.",
            "1 mark: reversing the encumbrance at the $350,000 estimate and recording the $360,000 actual expenditure.",
            "1 mark: outstanding encumbrances of $250,000.",
            "1 mark: remaining available appropriation $290,000.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Government-wide statements and the fund reconciliation",
        testPointIds: ["tp5"],
        explanation: [
          "GASB 34 requires government-wide statements — the statement of net position and the statement of activities — prepared on the full accrual, economic-resources basis. They present governmental activities and business-type activities in separate columns with a total, and include everything the fund statements omit: capital assets net of accumulated depreciation, long-term liabilities such as bonds and compensated absences, and depreciation expense. The statement of activities uses a distinctive net-(expense)-revenue format, subtracting program revenues (charges for services, operating and capital grants) from each function's expenses to show how much of each function must be covered by general revenues like taxes.",
          "Because the fund statements (modified accrual) and the government-wide statements (full accrual) measure different things, GASB 34 requires a reconciliation. Starting from total governmental fund balance, the government ADDS capital assets net of depreciation (which are in the government-wide statements but not the funds), SUBTRACTS long-term liabilities and accrued interest payable (present government-wide but not in the funds), and adjusts for revenues that were deferred as 'unavailable' in the funds but earned under full accrual (added back). Internal service fund net position is typically folded into governmental activities when the ISF primarily serves governmental functions.",
          "The reconciliation is a staple TBS because each adjustment corresponds to a rule the candidate must know cold: capital assets appear only government-wide, long-term debt appears only government-wide, and availability defers revenue only in the funds. Building the reconciliation as a vertical schedule — fund balance, then each labeled adjustment, then net position — earns marks even where a single figure is off.",
        ],
        keyRules: [
          "Government-wide (GASB 34): full accrual; separate governmental vs business-type activities; include capital assets and long-term debt.",
          "Reconciliation from fund balance: ADD capital assets (net), SUBTRACT long-term liabilities and accrued interest, ADD unavailable revenue and (usually) ISF net position.",
          "Statement of activities uses the net-(expense)-revenue by-function format.",
        ],
        formulas: [
          "Net position of governmental activities = total governmental fund balance + capital assets (net) − long-term liabilities − accrued interest + unavailable revenue + ISF net position",
        ],
        workedProblem: {
          scenario:
            "A city's governmental funds report total fund balance of $2,000,000. Additional facts: capital assets net of depreciation $5,000,000 are not reported in the funds; general long-term bonds payable are $3,000,000; accrued interest of $50,000 on those bonds is unrecorded in the funds; an internal service fund that serves governmental departments has net position of $200,000; and $80,000 of property tax revenue was deferred as 'unavailable' in the funds but is earned under full accrual. Compute the net position of governmental activities.",
          steps: [
            "Start with total governmental fund balance = $2,000,000.",
            "ADD capital assets net of depreciation = +$5,000,000 (reported government-wide, not in funds).",
            "SUBTRACT long-term bonds payable = −$3,000,000 (a liability government-wide, not in funds).",
            "SUBTRACT accrued interest payable = −$50,000 (accrued under full accrual).",
            "ADD internal service fund net position = +$200,000 (folded into governmental activities).",
            "ADD unavailable property tax revenue = +$80,000 (earned under full accrual though not 'available' in the fund).",
            "Net position of governmental activities = 2,000,000 + 5,000,000 − 3,000,000 − 50,000 + 200,000 + 80,000 = $4,230,000.",
          ],
          conclusion:
            "After adding capital assets and the ISF and unavailable revenue, and subtracting long-term debt and accrued interest, the net position of governmental activities is $4,230,000 — the reconciling items convert the modified-accrual fund balance to the full-accrual government-wide figure.",
          markingNotes: [
            "1 mark: adding capital assets net ($5,000,000).",
            "1 mark: subtracting long-term bonds ($3,000,000) and accrued interest ($50,000).",
            "1 mark: adding internal service fund net position ($200,000) and unavailable revenue ($80,000).",
            "1 mark: net position of governmental activities $4,230,000.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (fund classification & recording)",
        question:
          "For each item, name the fund and its basis of accounting, and state how it is recorded: (1) the city buys a $400,000 fire truck with General Fund resources; (2) the city-owned water utility bills customers $90,000; (3) the city issues $2,000,000 of general obligation bonds received in a Capital Projects Fund; (4) the city holds $500,000 of taxes collected on behalf of the county.",
        answerPlan: [
          "Classify each into governmental/proprietary/fiduciary and state the basis.",
          "Apply modified accrual vs full accrual to the recording.",
        ],
        modelAnswer:
          "(1) General Fund (governmental, modified accrual): the fire truck is recorded as a $400,000 expenditure, NOT a capital asset, because governmental funds use the current financial resources focus; the asset appears only in the government-wide statements. (2) Enterprise Fund (proprietary, full accrual): the water utility recognizes $90,000 of operating revenue and a receivable, exactly as a business would. (3) Capital Projects Fund (governmental, modified accrual): the $2,000,000 bond proceeds are recorded as an 'other financing source', not a liability, in the fund; the long-term bond liability is reported only government-wide. (4) Custodial Fund (fiduciary, full accrual): the $500,000 held for the county is recorded as an asset with a corresponding liability to the county; it is not revenue of the city because the resources are held purely in a custodial capacity.",
        markingGuide: [
          "1 mark each: correct fund and basis for items 1–4.",
          "1 mark: fire truck as an expenditure and bond proceeds as an other financing source in the governmental funds.",
          "Deduct if the water utility or custodial item is placed on modified accrual.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3"],
        style: "MCQ set rationale (revenue recognition)",
        question:
          "A city levies $4,000,000 of property taxes for the current year. By year-end it has collected $3,600,000 and expects to collect another $250,000 within 60 days and $150,000 later. How much property tax revenue is recognized (a) in the General Fund and (b) in the government-wide statements?",
        answerPlan: [
          "Fund: apply measurable and available (within ~60 days).",
          "Government-wide: full accrual, recognize the full levy less estimated uncollectible.",
        ],
        modelAnswer:
          "(a) In the General Fund (modified accrual), revenue is recognized only to the extent measurable and available. The $3,600,000 collected plus the $250,000 collectible within 60 days meet the availability criterion, so $3,850,000 is recognized as revenue; the remaining $150,000 is recorded as a receivable with 'deferred inflows — unavailable revenue' because it will not be collected within the availability window. (b) In the government-wide statements (full accrual), availability does not apply, so the full $4,000,000 levied is recognized as revenue in the period for which it was levied (net of any amount estimated to be uncollectible, which the facts do not provide).",
        markingGuide: [
          "1 mark: General Fund revenue of $3,850,000 applying the 60-day availability window.",
          "1 mark: recording the $150,000 as unavailable revenue (deferred inflow) in the fund.",
          "1 mark: government-wide revenue of the full $4,000,000 under full accrual.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5", "tp2"],
        style: "Task-based simulation (reconciliation)",
        question:
          "A town's governmental funds show total fund balance $1,500,000. Capital assets net of depreciation are $4,200,000; general long-term debt is $2,600,000; accrued interest not recorded in the funds is $30,000; deferred 'unavailable' revenue that is earned under full accrual is $120,000. There is no internal service fund. Compute the net position of governmental activities and identify each reconciling item.",
        answerPlan: [
          "Start from fund balance; add capital assets; subtract long-term debt and accrued interest; add unavailable revenue.",
        ],
        modelAnswer:
          "Begin with total governmental fund balance of $1,500,000. Add capital assets net of depreciation $4,200,000, which are reported government-wide but not in the funds. Subtract general long-term debt $2,600,000, a liability recognized only government-wide. Subtract accrued interest payable $30,000, which is accrued under full accrual but not in the funds. Add the $120,000 of revenue that was deferred as unavailable in the funds but is earned under full accrual. Net position of governmental activities = 1,500,000 + 4,200,000 − 2,600,000 − 30,000 + 120,000 = $3,190,000. Each adjustment converts a modified-accrual fund figure to the full-accrual, economic-resources basis of the government-wide statements.",
        markingGuide: [
          "1 mark: adding capital assets net $4,200,000.",
          "1 mark: subtracting long-term debt $2,600,000 and accrued interest $30,000.",
          "1 mark: adding unavailable revenue $120,000.",
          "1 mark: net position of governmental activities $3,190,000.",
        ],
      },
    ],
  }),
};
