import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * Exam-calibrated deep content for the GARP FRM programme, keyed by moduleId.
 *
 * Part I (frm-p1-m1..m14) rewards fast, mechanical mastery: taxonomy, formulas,
 * sign/unit discipline and single-step calculations under ~90 seconds per item.
 * Part II (frm-p2-m1..m13) rewards judgement: choosing methods, stress logic,
 * model limitations, capital/regulatory framing and multi-factor reasoning.
 *
 * Current-issues content is framed generically: no date-specific figures are
 * asserted. Candidates must confirm the live GARP reading list each cycle.
 */
export const FRM_DEPTH: Record<string, CoursewareDepth> = {
  // ============================= PART I =============================
  "frm-p1-m1": examDepth({
    testPoints: [
      {
        id: "tp-taxonomy",
        title: "Classify risk into the correct category",
        priority: "critical",
        examinerFocus:
          "Whether you can attach a loss driver to the RIGHT risk type rather than the label in the vignette. The exam plants a position that carries several risks at once and asks for the primary or least-likely category.",
        typicalQuestionForms: [
          "'Which risk is MOST/LEAST likely the source of the loss described?'",
          "'A bond held to maturity by a bank is exposed to which risks?'",
          "'Which of the following is an example of business (strategic) rather than financial risk?'",
        ],
        mustKnow: [
          "Market risk = losses from moves in prices/rates/vols; credit risk = counterparty failure to pay; liquidity splits into funding (can't raise cash) vs market/asset (can't sell without price concession).",
          "Operational risk = failed people/process/systems/external events, and by GARP/Basel definition EXCLUDES strategic and reputational risk.",
          "Idiosyncratic (name-specific) risk is diversifiable; systematic (market-wide) risk is not — this distinction drives the whole portfolio-theory chain later.",
        ],
        scoringActions: [
          "Read the loss driver, not the instrument: a defaulting issuer is credit risk even if the instrument is a 'market' bond.",
          "For 'least likely operational' answers, eliminate anything that is a deliberate market/credit position.",
          "Flag dual-risk traps (e.g., a derivative has market AND counterparty credit risk) and pick the one the question emphasises.",
        ],
      },
      {
        id: "tp-governance",
        title: "Board oversight, risk appetite and three lines of defence",
        priority: "high",
        examinerFocus:
          "Whether you can separate the SET-appetite role (board) from the OWN-risk role (business, line 1) and the CHALLENGE role (risk/compliance line 2, internal audit line 3).",
        typicalQuestionForms: [
          "'Which line of defence does the independent risk function represent?'",
          "'Whose responsibility is it to approve the firm's risk appetite?'",
          "'Which statement about risk appetite vs tolerance is correct?'",
        ],
        mustKnow: [
          "Board approves risk appetite and oversees the framework; it does not run day-to-day risk-taking.",
          "Line 1 = business units owning/managing risk; line 2 = risk management and compliance setting limits and challenging; line 3 = internal audit giving independent assurance.",
          "Risk appetite = aggregate risk the firm will accept in pursuit of strategy; tolerance/limits are the measurable cascade of that appetite.",
        ],
        scoringActions: [
          "Map any named function to its line number before answering.",
          "Reject answers that put the board in an operational role or internal audit in a limit-setting role.",
        ],
      },
      {
        id: "tp-code",
        title: "Apply the GARP Code of Conduct",
        priority: "high",
        examinerFocus:
          "Whether you pick the action the Code REQUIRES under pressure, not the commercially convenient one. Ethics items reward the most conservative defensible response.",
        typicalQuestionForms: [
          "'A risk manager is pressured to understate VaR — the MOST appropriate action is…?'",
          "'Which behaviour violates the GARP Code principle of professional integrity?'",
        ],
        mustKnow: [
          "Code pillars: professional integrity & ethical conduct, conflicts of interest, confidentiality, and fundamental responsibilities.",
          "Members must protect the integrity of the profession and place it above personal/employer gain.",
          "Misrepresenting risk (e.g., understating VaR) is a violation; the required action is refuse + escalate + document.",
        ],
        scoringActions: [
          "Choose the answer that discloses/refuses/escalates rather than complies quietly.",
          "Do not confuse legal compliance with Code compliance — the Code can demand more.",
        ],
      },
      {
        id: "tp-value",
        title: "Value-creating vs value-destroying risk-taking",
        priority: "medium",
        examinerFocus:
          "Whether you understand that risk management aligns risk with strategy and eliminates only UNCOMPENSATED risk, rather than minimising all risk.",
        typicalQuestionForms: [
          "'Which statement about the objective of risk management is correct?'",
          "'Why might a firm choose NOT to hedge a particular exposure?'",
        ],
        mustKnow: [
          "The goal is optimising, not minimising, risk relative to return and strategy.",
          "Compensated risk (earning a premium) may be retained; uncompensated risk is hedged or avoided.",
          "Over-hedging destroys value by paying away expected return the firm is equipped to bear.",
        ],
        scoringActions: [
          "Eliminate any answer claiming the aim is to remove all risk.",
          "Tie the retain/hedge decision to whether the risk is rewarded.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Near-automatic marks: aim to bank every Foundations item in under 75 seconds each and reinvest saved time in Quant/Valuation.",
      timeBudget: "~1.0–1.3 minutes per item; Foundations should be your fastest domain.",
      answerSequence: [
        "Identify the loss driver or the actor in the vignette.",
        "Match it to the precise category/line/Code pillar.",
        "Scan distractors for the classic swap (systematic↔idiosyncratic, line 2↔line 3).",
        "Confirm 'most/least likely' polarity before locking the answer.",
      ],
      qualityChecks: [
        "Did I answer on the driver, not the instrument label?",
        "For ethics: is my choice the most conservative defensible action?",
        "Did I honour 'least likely' phrasing?",
      ],
    },
    studyNotes: [
      {
        id: "sn-taxonomy",
        title: "The risk taxonomy as an answer key",
        testPointIds: ["tp-taxonomy"],
        explanation: [
          "Treat the taxonomy as a decision tree keyed on the CAUSE of loss. Prices/rates/vols moving against you is market risk; a counterparty failing to perform is credit risk; being unable to fund or to sell is liquidity risk; a broken process, rogue employee, system outage or external event is operational risk; and losses from bad strategy or demand shifts are business/strategic risk.",
          "A single instrument usually carries several risks. A corporate bond exposes the holder to market risk (yields move), credit risk (issuer defaults or is downgraded) and market-liquidity risk (thin secondary market). The exam tests whether you can isolate the risk the scenario emphasises rather than reflexively naming the asset class.",
          "The systematic vs idiosyncratic split is the hinge to later modules: diversification removes idiosyncratic risk but leaves systematic risk, which is why market risk carries a premium and single-name credit risk can be diversified in a large portfolio.",
        ],
        keyRules: [
          "Operational risk excludes strategic and reputational risk by definition.",
          "Funding liquidity = access to cash; market liquidity = ability to trade without moving price.",
          "Diversifiable = idiosyncratic; non-diversifiable = systematic.",
        ],
        workedProblem: {
          scenario:
            "A bank holds a 5-year fixed-rate corporate bond. Rates rise 50bp, the issuer is downgraded from A to BBB, and the trading desk finds the bond hard to sell within a day. Assign each effect to a risk category.",
          steps: [
            "Rates rising 50bp reduces the bond's price via duration — this is MARKET (interest-rate) risk.",
            "The downgrade widens the credit spread and raises default probability — this is CREDIT (migration/spread) risk.",
            "Inability to sell within a day without a price concession — this is MARKET/ASSET LIQUIDITY risk.",
            "Note none of these is operational risk unless a settlement or process failure is described.",
          ],
          conclusion:
            "One position, three distinct exposures: interest-rate market risk, credit (spread/migration) risk, and asset-liquidity risk.",
          markingNotes: [
            "Full marks require naming the driver, not the instrument.",
            "Award nothing for calling the downgrade 'market risk'—migration is credit risk.",
          ],
        },
      },
      {
        id: "sn-governance",
        title: "Three lines of defence and the appetite cascade",
        testPointIds: ["tp-governance", "tp-value"],
        explanation: [
          "Governance answers hinge on separation of duties. The board sets and approves risk appetite and oversees the framework but does not take positions. Line 1 (business) owns and manages risk day to day. Line 2 (risk management, compliance) sets limits, measures exposure and independently challenges line 1. Line 3 (internal audit) provides assurance that lines 1 and 2 work, reporting to the audit committee.",
          "Risk appetite is the aggregate risk the firm accepts to pursue strategy; tolerances translate it into measurable ceilings; limits operationalise tolerances at desk/portfolio level; breaches trigger escalation. The exam probes whether you can order this cascade and place each actor.",
          "Because the objective is aligning risk with strategy—not minimising risk—retaining compensated risk is legitimate. This links governance to the value question: the board's appetite statement is precisely the tool that authorises which risks are worth taking.",
        ],
        keyRules: [
          "Appetite → tolerance → limits → escalation is the fixed hierarchy.",
          "Independence of line 2 and line 3 from revenue generation is the control that matters.",
          "Internal audit assures; it does not set limits.",
        ],
      },
      {
        id: "sn-code",
        title: "Working GARP ethics items",
        testPointIds: ["tp-code"],
        explanation: [
          "Ethics questions are pattern-matching once you internalise the pillars. The examiner constructs a conflict between commercial pressure and professional integrity; the correct answer is almost always the option that refuses misrepresentation, discloses the conflict, and escalates through proper channels.",
          "Distinguish the Code from law and internal policy. The Code can require MORE than local law: even where understating a risk metric is not illegal, misrepresenting risk breaches professional integrity. Confidentiality obligations survive the end of an engagement, and material conflicts must be disclosed regardless of client sophistication.",
        ],
        keyRules: [
          "Refuse to misrepresent; disclose conflicts; escalate; document.",
          "Confidentiality persists beyond the engagement.",
          "Code compliance ≥ legal compliance.",
        ],
        workedProblem: {
          scenario:
            "A desk head tells the risk analyst that reported one-day 99% VaR should be 'trimmed' from $12.4m to $9.9m so the desk stays under its limit ahead of a bonus review.",
          steps: [
            "Identify the pillar at stake: professional integrity (no misrepresentation of risk).",
            "Reject compliance with the instruction—reporting $9.9m is a knowing misstatement.",
            "Escalate to an independent party (CRO/compliance) and document the request and response.",
            "Continue to report the model's $12.4m figure with any legitimate caveats.",
          ],
          conclusion:
            "The analyst must refuse to alter the number, escalate, and document—understating VaR to fit a limit is a Code violation.",
          markingNotes: [
            "Answers that 'discuss with the desk head and adjust' score zero.",
            "Escalation + refusal + documentation is the full-mark response.",
          ],
        },
      },
      {
        id: "sn-value",
        title: "Why not hedge everything",
        testPointIds: ["tp-value", "tp-taxonomy"],
        explanation: [
          "A recurring Part I theme is that risk management is an optimisation, not a suppression, exercise. Firms are paid to bear risks in which they hold an edge or an information advantage; hedging those away pays a premium to remove expected return the firm can profitably carry.",
          "The practical rule: retain compensated, well-understood risks that fit appetite; transfer or avoid uncompensated risks (e.g., an FX exposure incidental to a core business). This is why an airline hedges jet fuel but a hedge fund may deliberately hold the very market risk it is paid to manage.",
        ],
        keyRules: [
          "Retain compensated risk within appetite; shed uncompensated risk.",
          "Hedging has a cost—expected-return give-up plus transaction cost.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m1-1",
        testPointIds: ["tp-taxonomy"],
        style: "Multiple choice — least likely",
        question:
          "A treasury desk cannot roll over its short-term funding when a rating agency downgrades the parent. This loss is MOST accurately classified as:",
        answerPlan: [
          "Isolate the driver: inability to raise cash.",
          "Match to funding liquidity risk.",
          "Distinguish from market liquidity and credit risk.",
        ],
        modelAnswer:
          "Funding liquidity risk. The firm's problem is an inability to raise cash to meet obligations as the funding market closes to it; that is the definition of funding liquidity risk. It is not market/asset liquidity (which concerns selling assets without price concession), and although a downgrade is the trigger, the loss mechanism the question describes is the funding shortfall, not the counterparty default that defines credit risk.",
        markingGuide: [
          "Correct category (funding liquidity) — primary mark.",
          "Correct rejection of market-liquidity and credit distractors.",
          "Recognition that the downgrade is a trigger, not the risk type.",
        ],
      },
      {
        id: "pp-m1-2",
        testPointIds: ["tp-governance"],
        style: "Multiple choice — concept",
        question:
          "Which statement about the three lines of defence is correct?",
        answerPlan: [
          "Recall the three lines.",
          "Match assurance vs limit-setting vs ownership.",
          "Eliminate role-swaps.",
        ],
        modelAnswer:
          "Internal audit (line 3) provides independent assurance over the effectiveness of both the business (line 1, which owns and manages the risk) and the risk/compliance function (line 2, which sets limits and challenges line 1). The correct statement is the one placing limit-setting with line 2 and assurance with line 3; any statement giving internal audit a limit-setting role or placing the board in day-to-day risk-taking is wrong.",
        markingGuide: [
          "Correct line assignments (ownership/challenge/assurance).",
          "Rejection of internal-audit-sets-limits distractor.",
          "Board as overseer, not operator.",
        ],
      },
      {
        id: "pp-m1-3",
        testPointIds: ["tp-code"],
        style: "Ethics application",
        question:
          "A GARP member learns that a colleague is routinely omitting one large concentrated position from a client's reported exposure summary to keep the report 'clean'. What is the member's MOST appropriate action?",
        answerPlan: [
          "Identify integrity/misrepresentation breach.",
          "State required action.",
          "Reject passive options.",
        ],
        modelAnswer:
          "The omission misrepresents the client's true risk and breaches the professional-integrity pillar of the Code. The member should not ignore it or quietly rely on the colleague to fix it; the appropriate action is to escalate through the firm's compliance/CRO channel and ensure the reporting is corrected, documenting the concern. Protecting the integrity of the profession and accurate risk representation outranks avoiding an awkward internal conversation.",
        markingGuide: [
          "Identifies misrepresentation as the violation.",
          "Escalation + correction + documentation.",
          "Rejects 'do nothing' / 'assume it will be fixed' options.",
        ],
      },
    ],
  }),
  "frm-p1-m2": examDepth({
    testPoints: [
      {
        id: "tp-erm",
        title: "ERM as an integrated, top-down framework",
        priority: "critical",
        examinerFocus:
          "Whether you can contrast ERM (portfolio view of risk across the firm, owned at the top) with siloed risk management, and identify the benefits (diversification recognition, capital efficiency) and pitfalls (aggregation error, false comfort).",
        typicalQuestionForms: [
          "'Which is a benefit of ERM relative to a siloed approach?'",
          "'A firm aggregates risks assuming perfect correlation — what is the consequence?'",
          "'Which statement about the CRO's mandate under ERM is correct?'",
        ],
        mustKnow: [
          "ERM aggregates all material risks into a firm-wide portfolio view to inform strategy and capital allocation.",
          "Diversification across risk types can reduce required economic capital versus summing standalone capital — but only if correlations are estimated realistically.",
          "The CRO owns the framework and reports independently (often to the board/risk committee), preserving challenge power against the business.",
        ],
        scoringActions: [
          "Frame ERM as portfolio-level, not sum-of-silos.",
          "Flag correlation assumptions as the key model-risk lever in aggregation.",
        ],
      },
      {
        id: "tp-culture",
        title: "Risk culture and its failure modes",
        priority: "high",
        examinerFocus:
          "Whether you recognise that culture, incentives and tone-from-the-top drive real risk behaviour, and can spot incentive structures that reward risk-taking without accountability.",
        typicalQuestionForms: [
          "'Which feature indicates a weak risk culture?'",
          "'How should compensation be structured to support sound risk-taking?'",
        ],
        mustKnow: [
          "Strong culture: tone from the top, accountability, incentives aligned to risk-adjusted (not gross) performance, and safety to escalate.",
          "Deferred/clawback compensation aligns pay with the horizon over which risk crystallises.",
          "Case studies (e.g., large rogue-trading and mis-selling losses) trace back to weak escalation and misaligned incentives.",
        ],
        scoringActions: [
          "Link bonus-on-gross-P&L to weak culture.",
          "Prefer answers with deferral/clawback and independent escalation channels.",
        ],
      },
      {
        id: "tp-appetite-metrics",
        title: "Translating appetite into metrics and limits",
        priority: "high",
        examinerFocus:
          "Whether you can move from qualitative appetite statements to quantitative metrics (VaR/ES limits, capital ratios, concentration caps) and understand escalation on breach.",
        typicalQuestionForms: [
          "'Which metric best operationalises an appetite statement about earnings volatility?'",
          "'What should happen on a limit breach?'",
        ],
        mustKnow: [
          "Appetite statements must be measurable to be enforceable (e.g., 'no more than X% probability of losing $Y in a year').",
          "Common metrics: economic capital, VaR/ES limits, stress-loss limits, concentration and liquidity ratios.",
          "Breach protocol: detect → escalate → remediate/approve exception → report to committee.",
        ],
        scoringActions: [
          "Match each qualitative aim to a concrete metric.",
          "Never let a breach 'self-cure' without escalation.",
        ],
      },
      {
        id: "tp-scenario",
        title: "Scenario analysis and stress testing at the enterprise level",
        priority: "medium",
        examinerFocus:
          "Whether you grasp that enterprise stress tests probe tail and combined scenarios that statistical models (VaR) miss, and inform capital adequacy and strategy.",
        typicalQuestionForms: [
          "'Why complement VaR with scenario analysis?'",
          "'What distinguishes a reverse stress test?'",
        ],
        mustKnow: [
          "Scenario/stress analysis is forward-looking and can capture correlations that break down in crises.",
          "Reverse stress testing starts from a failure outcome and works back to the scenarios that cause it.",
          "Stress results feed capital planning and appetite calibration, not just measurement.",
        ],
        scoringActions: [
          "Position stress testing as complement to, not substitute for, VaR.",
          "Define reverse stress by its starting point (the failure state).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Bank conceptual marks quickly; these items reward clean definitions and incentive logic rather than calculation.",
      timeBudget: "~1.1 minutes per item.",
      answerSequence: [
        "Decide whether the item is about structure (ERM/CRO), behaviour (culture/incentives), or metrics.",
        "Recall the one distinguishing feature (portfolio view / deferral / measurability / reverse logic).",
        "Eliminate silo-thinking and gross-P&L-incentive distractors.",
      ],
      qualityChecks: [
        "Did I keep ERM at the portfolio level?",
        "Is the incentive answer risk-adjusted and deferred?",
        "Did I treat stress testing as a complement to VaR?",
      ],
    },
    studyNotes: [
      {
        id: "sn-erm",
        title: "ERM, economic capital and the diversification benefit",
        testPointIds: ["tp-erm", "tp-appetite-metrics"],
        explanation: [
          "ERM's core claim is that risks viewed together require less capital than risks summed in silos, because they are not perfectly correlated. If standalone capital for market, credit and operational risk is C_m, C_c, C_o, the naive sum overstates true portfolio capital whenever correlations are below one.",
          "The danger is symmetric: assuming correlations that are too LOW understates capital and creates false comfort, precisely the failure that surfaces in crises when correlations spike toward one. The examiner rewards candidates who name correlation estimation as the pivotal, fragile assumption.",
          "The CRO operationalises ERM by owning the aggregation methodology and reporting independently, so that business-line optimism cannot quietly lower the firm's capital estimate.",
        ],
        keyRules: [
          "Diversified capital ≤ sum of standalone capital, with equality only at correlation 1.",
          "Under-stated correlations → under-capitalisation → tail fragility.",
        ],
        formulas: [
          "Two-risk aggregate: C = √(C₁² + C₂² + 2ρC₁C₂).",
          "ρ = 1 ⇒ C = C₁ + C₂ (no benefit); ρ < 1 ⇒ C < C₁ + C₂.",
        ],
        workedProblem: {
          scenario:
            "Standalone economic capital is $300m for market risk and $400m for credit risk, with an assumed correlation of 0.3. Compute diversified capital and the diversification benefit, then state the effect of the correlation rising to 0.9 in stress.",
          steps: [
            "Diversified C = √(300² + 400² + 2·0.3·300·400) = √(90,000 + 160,000 + 72,000) (in $m²).",
            "= √322,000 ≈ $567.4m.",
            "Sum of standalone = $700m, so diversification benefit ≈ 700 − 567.4 = $132.6m.",
            "If ρ→0.9: C = √(90,000+160,000+2·0.9·300·400)=√(250,000+216,000)=√466,000 ≈ $682.6m; benefit collapses to ≈ $17.4m.",
          ],
          conclusion:
            "The $133m diversification benefit is almost entirely an artefact of the low correlation assumption; in stress it nearly vanishes, which is why relying on it is dangerous.",
          markingNotes: [
            "Unit check: capital in $m, variance terms in $m²—take the square root at the end.",
            "Full marks require noting the benefit's sensitivity to ρ.",
          ],
        },
      },
      {
        id: "sn-culture",
        title: "Incentives, deferral and escalation",
        testPointIds: ["tp-culture"],
        explanation: [
          "Culture is measured by behaviour under pressure, not posters. The exam's tell for a weak culture is compensation tied to gross revenue with no deferral, no clawback and no safe escalation route—so employees are paid before risk crystallises and are punished for raising concerns.",
          "Sound design defers a portion of variable pay over the risk horizon and permits clawback if losses emerge, aligning the payout timeline with when tail risk actually materialises. Independent escalation channels (to line 2/3) ensure concerns are heard without career penalty.",
        ],
        keyRules: [
          "Pay on risk-adjusted, deferred performance—not gross P&L.",
          "Clawback aligns pay with realised outcomes.",
          "Psychological safety to escalate is a culture control.",
        ],
      },
      {
        id: "sn-metrics",
        title: "From appetite statement to enforceable limit",
        testPointIds: ["tp-appetite-metrics"],
        explanation: [
          "An appetite statement is inert until expressed as a metric with a threshold and an owner. 'We will not risk more than a 1-in-20 chance of a $Y annual loss' becomes a 95% annual VaR/economic-capital limit; 'no single name above Z% of capital' becomes a concentration cap.",
          "The breach protocol is examinable: exposures are monitored, breaches trigger immediate escalation, and either remediation or a formally approved, time-limited exception follows, with reporting to the risk committee. Self-curing breaches (waiting for the market to reverse) are wrong answers.",
        ],
        keyRules: [
          "Every appetite aim maps to a measurable limit + owner + escalation.",
          "Breach → escalate → remediate/approve exception → report.",
        ],
      },
      {
        id: "sn-scenario",
        title: "Stress and reverse stress testing",
        testPointIds: ["tp-scenario", "tp-erm"],
        explanation: [
          "Enterprise stress testing asks 'what if' under severe-but-plausible scenarios, capturing joint moves and correlation breakdowns that a single-distribution VaR cannot. It is forward-looking and narrative, feeding capital planning and appetite recalibration.",
          "Reverse stress testing inverts the logic: define the outcome that would render the firm non-viable, then identify scenarios that could produce it. This surfaces hidden concentrations and business-model vulnerabilities that forward scenarios might not target.",
        ],
        keyRules: [
          "Forward stress: scenario → loss. Reverse stress: failure → scenario.",
          "Stress complements VaR by probing tail correlations.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m2-1",
        testPointIds: ["tp-erm"],
        style: "Calculation + concept",
        question:
          "Standalone capital is $250m (market) and $150m (operational) with correlation 0.2. Compute diversified capital and explain what happens to the benefit if the correlation assumption is wrong on the low side.",
        answerPlan: [
          "Apply the two-risk aggregation formula.",
          "Compute diversified capital.",
          "Explain correlation sensitivity/false comfort.",
        ],
        modelAnswer:
          "C = √(250² + 150² + 2·0.2·250·150) = √(62,500 + 22,500 + 15,000) = √100,000 ≈ $316.2m, versus a $400m naive sum — a diversification benefit of about $83.8m. If the true correlation is higher than the assumed 0.2 (as tends to happen in stress), diversified capital rises toward the $400m sum and the firm has under-provisioned; the benefit is fragile and understated correlations create false comfort.",
        markingGuide: [
          "Correct diversified capital (~$316m) with unit discipline.",
          "Correct benefit (~$84m).",
          "Explanation of correlation fragility and under-capitalisation risk.",
        ],
      },
      {
        id: "pp-m2-2",
        testPointIds: ["tp-culture"],
        style: "Multiple choice — best design",
        question:
          "Which compensation feature best supports a sound risk culture in a trading business?",
        answerPlan: [
          "Reject gross-P&L, pay-now designs.",
          "Select deferral + clawback + risk adjustment.",
        ],
        modelAnswer:
          "A structure that defers a meaningful share of variable pay over the horizon on which trading risks crystallise and permits clawback if losses later emerge, with the bonus based on risk-adjusted rather than gross performance. This aligns the payout timeline with realised risk and discourages loading up on tail risk for an immediate, unrecoverable bonus.",
        markingGuide: [
          "Deferral over the risk horizon.",
          "Clawback on subsequent losses.",
          "Risk-adjusted (not gross) performance basis.",
        ],
      },
      {
        id: "pp-m2-3",
        testPointIds: ["tp-scenario", "tp-appetite-metrics"],
        style: "Short concept",
        question:
          "Explain how a reverse stress test differs from a standard stress test and why a firm running only VaR-based limits should perform one.",
        answerPlan: [
          "Define reverse stress by its starting point.",
          "Contrast with forward stress.",
          "Explain the VaR blind spot it addresses.",
        ],
        modelAnswer:
          "A standard stress test specifies a scenario and computes the loss; a reverse stress test specifies the failure outcome (the point at which the business model is non-viable) and works backward to find the scenarios that would cause it. A firm relying on VaR limits sees only losses up to a confidence level under assumed distributions and correlations; reverse stress testing exposes the tail combinations and concentrations that could break the firm but sit beyond the VaR horizon, informing appetite and capital.",
        markingGuide: [
          "Correct direction of reverse stress (failure → scenario).",
          "Contrast with forward scenario → loss.",
          "Links to VaR tail blind spot and capital/appetite use.",
        ],
      },
    ],
  }),
  "frm-p1-m3": examDepth({
    testPoints: [
      {
        id: "tp-moments",
        title: "Moments: mean, variance, skewness, kurtosis",
        priority: "critical",
        examinerFocus:
          "Whether you can compute and interpret the first four moments and read their risk meaning—negative skew and excess kurtosis (fat tails) are the risk-manager's warning signs.",
        typicalQuestionForms: [
          "'Compute the variance/standard deviation of the returns given.'",
          "'A distribution has negative skew and excess kurtosis of 3 — what does this imply for tail risk?'",
          "'Which portfolio has the higher probability of an extreme loss?'",
        ],
        mustKnow: [
          "Variance uses n−1 for a sample, n for a population; standard deviation is its square root and shares the data's units.",
          "Skewness sign: negative skew ⇒ long left (loss) tail; positive skew ⇒ long right tail.",
          "Kurtosis of 3 is normal; 'excess kurtosis' = kurtosis − 3; positive excess ⇒ fat tails and higher extreme-event probability.",
        ],
        scoringActions: [
          "State units on standard deviation; variance is in squared units.",
          "Translate negative skew + fat tails into 'more/larger downside surprises'.",
          "Watch sample-vs-population denominator traps.",
        ],
      },
      {
        id: "tp-distributions",
        title: "Key distributions and when each applies",
        priority: "critical",
        examinerFocus:
          "Whether you match the right distribution to the setting: binomial (counts of successes), Poisson (rare-event counts, op-risk frequency), normal (returns/aggregates), lognormal (prices), Student-t (fat-tailed returns), and can use their parameters.",
        typicalQuestionForms: [
          "'Losses arrive at 3 per year on average — probability of exactly 5?'",
          "'Why is the lognormal used for asset PRICES but the normal for RETURNS?'",
          "'Which distribution best captures fat-tailed daily returns?'",
        ],
        mustKnow: [
          "Poisson: P(X=k)=e^(−λ)λ^k/k!, mean = variance = λ; used for operational-loss frequency and rare events.",
          "Binomial mean = np, variance = np(1−p); approximates to normal for large n, to Poisson when n large and p small.",
          "If log-returns are normal, prices are lognormal (bounded at zero, right-skewed); Student-t has fatter tails than normal (lower degrees of freedom = fatter).",
        ],
        scoringActions: [
          "Identify count vs continuous, then bounded vs unbounded.",
          "Use λ for both Poisson mean and variance (a fast sanity check).",
        ],
      },
      {
        id: "tp-conditional",
        title: "Conditional probability, Bayes and independence",
        priority: "high",
        examinerFocus:
          "Whether you can update probabilities with Bayes' theorem and avoid the base-rate fallacy—central to credit-scoring and default-testing questions.",
        typicalQuestionForms: [
          "'A test flags defaulters with 90% sensitivity… what is P(default | flag)?'",
          "'Are these two events independent given the data?'",
        ],
        mustKnow: [
          "Bayes: P(A|B) = P(B|A)P(A) / P(B); expand P(B) with the law of total probability.",
          "Independence ⇔ P(A∩B) = P(A)P(B) ⇔ P(A|B) = P(A).",
          "Low base rates make even accurate tests produce many false positives—the classic trap.",
        ],
        scoringActions: [
          "Write the tree/total-probability denominator explicitly before dividing.",
          "Sanity-check that a rare condition yields a low posterior despite a 'good' test.",
        ],
      },
      {
        id: "tp-covariance",
        title: "Covariance, correlation and portfolio variance",
        priority: "high",
        examinerFocus:
          "Whether you can build a portfolio variance from weights, variances and covariances, and understand correlation's role in diversification.",
        typicalQuestionForms: [
          "'Compute the variance of a two-asset portfolio.'",
          "'What happens to portfolio risk as correlation falls?'",
        ],
        mustKnow: [
          "σ_p² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂; correlation ρ = cov/(σ₁σ₂) ∈ [−1,1].",
          "Lower ρ ⇒ greater diversification; ρ = 1 gives no diversification benefit.",
          "Correlation captures only LINEAR dependence; nonlinear/tail dependence needs other tools.",
        ],
        scoringActions: [
          "Keep the cross term's factor of 2 and the weights squared.",
          "Report σ_p (root), not variance, when the question asks for risk in return units.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Quant is high-yield and calculator-driven; target every computable item and never lose marks to unit/denominator slips.",
      timeBudget: "~1.5 minutes per item; some multi-step problems need 2 minutes—bank the definitional items faster to fund them.",
      answerSequence: [
        "Classify the quantity (moment, distribution, conditional prob, portfolio stat).",
        "Write the formula with symbols before plugging numbers.",
        "Plug, compute, then do a sign/unit check.",
        "Match to the closest answer, watching for the 'variance vs SD' and 'n vs n−1' traps.",
      ],
      qualityChecks: [
        "Standard deviation in data units, variance squared?",
        "Sample (n−1) vs population (n) denominator correct?",
        "Did I keep the 2·w₁w₂ρσ₁σ₂ cross term?",
      ],
    },
    studyNotes: [
      {
        id: "sn-moments",
        title: "Reading the four moments as risk signals",
        testPointIds: ["tp-moments"],
        explanation: [
          "The mean locates the distribution; variance/standard deviation scales its spread; skewness describes asymmetry; kurtosis measures tail heaviness. For a risk manager the third and fourth moments matter most: negative skew means the left (loss) tail is longer, and positive excess kurtosis means extreme moves are more likely than a normal model predicts.",
          "Many trading strategies (selling options, carry, credit) exhibit exactly the dangerous combination—small steady gains (positive mean, low variance) but negative skew and fat tails—so a Sharpe-ratio-only view flatters them. The exam rewards linking moments to the shape of the payoff.",
          "Beware the sample-vs-population denominator. Sample variance divides by n−1 (Bessel's correction) to stay unbiased; population variance divides by n. On the exam the wording ('a sample of returns') dictates the choice.",
        ],
        keyRules: [
          "Excess kurtosis = kurtosis − 3; >0 means fat tails.",
          "Negative skew ⇒ long left/loss tail.",
          "Sample variance ÷ (n−1); population ÷ n.",
        ],
        formulas: [
          "Sample variance s² = Σ(xᵢ − x̄)² / (n − 1).",
          "Skewness ∝ E[(x−μ)³]/σ³; Kurtosis ∝ E[(x−μ)⁴]/σ⁴.",
        ],
        workedProblem: {
          scenario:
            "Annual returns (%) for a fund are −8, 2, 3, 4, 9. Compute the sample mean and sample standard deviation, and comment on any asymmetry.",
          steps: [
            "Mean x̄ = (−8+2+3+4+9)/5 = 10/5 = 2.0%.",
            "Deviations: −10, 0, 1, 2, 7; squared: 100, 0, 1, 4, 49; sum = 154.",
            "Sample variance = 154/(5−1) = 38.5 (%²); sample SD = √38.5 ≈ 6.2%.",
            "The single −8% observation sits far in the left tail relative to the cluster of small positives, hinting at negative skew.",
          ],
          conclusion:
            "Mean 2.0%, sample SD ≈ 6.2% (in %, not %²), with a left-tail outlier suggesting negative skew—downside risk is understated by the mean alone.",
          markingNotes: [
            "Divide by n−1 = 4, not 5, for a sample.",
            "SD in %, variance in %²—state units.",
          ],
        },
      },
      {
        id: "sn-distributions",
        title: "Matching distributions to risk problems",
        testPointIds: ["tp-distributions"],
        explanation: [
          "Choose by data type. Counts of independent rare events (operational loss events, defaults in a small pool) → Poisson, with the elegant property that mean equals variance equals λ. Fixed number of independent yes/no trials → binomial, mean np and variance np(1−p). Continuous aggregates and returns → normal via the central limit theorem.",
          "Prices versus returns is a favourite. If continuously-compounded returns are normal, prices are lognormal: bounded below by zero and right-skewed, which matches the fact that a price cannot go negative but can rise without limit. Using a normal for prices would wrongly admit negative prices.",
          "Real return data have fatter tails than the normal, so the Student-t (with low degrees of freedom) is used to capture extreme moves; as degrees of freedom rise, the t converges to the normal.",
        ],
        keyRules: [
          "Poisson: mean = variance = λ.",
          "Returns normal ⇒ prices lognormal (non-negative, right-skewed).",
          "Lower t degrees of freedom ⇒ fatter tails.",
        ],
        formulas: [
          "Poisson P(X=k) = e^(−λ) λ^k / k!.",
          "Binomial P(X=k) = C(n,k) p^k (1−p)^(n−k), mean np, var np(1−p).",
        ],
        workedProblem: {
          scenario:
            "Operational loss events occur at an average of λ = 3 per year (Poisson). Find the probability of exactly 5 events, and of zero events, in a year.",
          steps: [
            "P(X=5) = e^(−3)·3⁵/5! = e^(−3)·243/120.",
            "e^(−3) ≈ 0.049787; 243/120 = 2.025 ⇒ P(X=5) ≈ 0.049787·2.025 ≈ 0.1008.",
            "P(X=0) = e^(−3)·3⁰/0! = e^(−3) ≈ 0.0498.",
            "Sanity: variance = λ = 3, so SD ≈ 1.73 events—5 is a bit under +2 SD, consistent with ~10% probability.",
          ],
          conclusion:
            "P(exactly 5) ≈ 10.1%; P(zero) ≈ 5.0%. The mean-equals-variance property gives a quick plausibility check.",
          markingNotes: [
            "Remember 0! = 1.",
            "Use e^(−λ), not e^(λ)—a common sign slip.",
          ],
        },
      },
      {
        id: "sn-bayes",
        title: "Bayes, base rates and default testing",
        testPointIds: ["tp-conditional"],
        explanation: [
          "Bayes updates a prior with evidence. The engine is the total-probability denominator: P(flag) = P(flag|default)P(default) + P(flag|no default)P(no default). Candidates lose marks by forgetting the false-positive term in the denominator.",
          "The base-rate trap is the exam's favourite: when defaults are rare, even a highly sensitive test produces mostly false positives, so P(default|flag) can be surprisingly low. Recognising this protects against over-trusting a 'good' credit screen.",
        ],
        keyRules: [
          "P(A|B) = P(B|A)P(A)/P(B); expand P(B) fully.",
          "Rare condition + imperfect specificity ⇒ low posterior despite high sensitivity.",
        ],
        formulas: [
          "P(D|F) = [P(F|D)P(D)] / [P(F|D)P(D) + P(F|Dᶜ)P(Dᶜ)].",
        ],
        workedProblem: {
          scenario:
            "Base default rate P(D) = 2%. A model flags 90% of true defaulters (sensitivity) but also flags 8% of non-defaulters (false-positive rate). Given a flag, what is the probability of default?",
          steps: [
            "Numerator = P(F|D)P(D) = 0.90·0.02 = 0.018.",
            "Denominator = 0.018 + P(F|Dᶜ)P(Dᶜ) = 0.018 + 0.08·0.98 = 0.018 + 0.0784 = 0.0964.",
            "P(D|F) = 0.018/0.0964 ≈ 0.187.",
          ],
          conclusion:
            "Despite 90% sensitivity, only ~18.7% of flagged names actually default—the low 2% base rate dominates, illustrating the base-rate fallacy.",
          markingNotes: [
            "Include the false-positive mass 0.08·0.98 in the denominator.",
            "A posterior far below sensitivity is the expected, correct result.",
          ],
        },
      },
      {
        id: "sn-portfolio-var",
        title: "Portfolio variance and diversification",
        testPointIds: ["tp-covariance"],
        explanation: [
          "Portfolio variance is not the weighted average of variances; the covariance cross term is what makes diversification work. Written out, σ_p² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂, and lowering ρ lowers the cross term and hence total risk.",
          "At ρ = 1 the portfolio SD is just the weighted average of the asset SDs (no benefit); at ρ < 1 the portfolio SD is strictly less. Correlation, however, only captures linear co-movement—tail dependence (assets crashing together) requires copulas/stress work covered in Part II.",
        ],
        keyRules: [
          "Keep the factor 2 and squared weights in σ_p².",
          "Report SD (root) when risk is asked in return units.",
          "ρ measures linear dependence only.",
        ],
        formulas: [
          "σ_p² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂.",
          "ρ = cov(1,2)/(σ₁σ₂).",
        ],
        workedProblem: {
          scenario:
            "Two assets: σ₁ = 20%, σ₂ = 10%, weights 60%/40%, correlation ρ = 0.25. Compute portfolio standard deviation.",
          steps: [
            "w₁²σ₁² = 0.6²·0.20² = 0.36·0.04 = 0.0144.",
            "w₂²σ₂² = 0.4²·0.10² = 0.16·0.01 = 0.0016.",
            "Cross term = 2·0.6·0.4·0.25·0.20·0.10 = 2·0.24·0.25·0.02 = 0.0024.",
            "σ_p² = 0.0144 + 0.0016 + 0.0024 = 0.0184 ⇒ σ_p = √0.0184 ≈ 0.1356 = 13.6%.",
          ],
          conclusion:
            "Portfolio SD ≈ 13.6%, below the 16% weighted-average SD, showing the diversification benefit from ρ < 1.",
          markingNotes: [
            "Compare to weighted-average SD (0.6·20+0.4·10 = 16%) to confirm benefit.",
            "Take the square root—do not report variance as risk.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pp-m3-1",
        testPointIds: ["tp-distributions"],
        style: "Calculation",
        question:
          "A portfolio suffers operational incidents at a Poisson rate of λ = 4 per quarter. What is the probability of at most 1 incident in a quarter?",
        answerPlan: [
          "Recall Poisson pmf.",
          "Compute P(0)+P(1).",
          "State result.",
        ],
        modelAnswer:
          "P(X≤1) = P(0) + P(1) = e^(−4)·4⁰/0! + e^(−4)·4¹/1! = e^(−4)(1 + 4) = 5·e^(−4). With e^(−4) ≈ 0.018316, P(X≤1) ≈ 5·0.018316 ≈ 0.0916, about 9.2%. The mean and variance both equal 4, so seeing 0 or 1 event is well below the mean and appropriately low-probability.",
        markingGuide: [
          "Correct pmf and summing P(0)+P(1).",
          "Numerical answer ≈ 9.2%.",
          "Uses mean = variance = λ as a check.",
        ],
      },
      {
        id: "pp-m3-2",
        testPointIds: ["tp-covariance", "tp-moments"],
        style: "Calculation",
        question:
          "Assets A and B have σ_A = 25%, σ_B = 15%, correlation 0.4, in weights 50/50. Compute portfolio SD and state the diversification benefit versus the weighted-average SD.",
        answerPlan: [
          "Apply portfolio variance formula.",
          "Take square root.",
          "Compare to weighted-average SD.",
        ],
        modelAnswer:
          "σ_p² = 0.5²·0.25² + 0.5²·0.15² + 2·0.5·0.5·0.4·0.25·0.15 = 0.015625 + 0.005625 + 0.0075 = 0.02875, so σ_p = √0.02875 ≈ 0.1696 = 17.0%. The weighted-average SD is 0.5·25 + 0.5·15 = 20%, so diversification lowers risk by about 3.0 percentage points because the correlation is below 1.",
        markingGuide: [
          "Correct variance components incl. cross term.",
          "σ_p ≈ 17.0%.",
          "Correct benefit vs 20% weighted average.",
        ],
      },
      {
        id: "pp-m3-3",
        testPointIds: ["tp-conditional"],
        style: "Bayes application",
        question:
          "1% of loan applicants are fraudulent. A screen catches 95% of fraudsters but wrongly flags 5% of honest applicants. Given a flag, what is the probability of fraud, and what does the answer teach about screen design?",
        answerPlan: [
          "Set up Bayes with total probability.",
          "Compute posterior.",
          "Interpret base-rate effect.",
        ],
        modelAnswer:
          "P(fraud|flag) = (0.95·0.01) / (0.95·0.01 + 0.05·0.99) = 0.0095 / (0.0095 + 0.0495) = 0.0095/0.0590 ≈ 0.161, about 16%. Even a 95%-sensitive screen yields mostly false alarms because fraud is rare; a firm acting on flags alone would investigate roughly five honest applicants for each fraudster, so screens on low-base-rate events need high specificity or a second-stage check.",
        markingGuide: [
          "Correct posterior ≈ 16%.",
          "Denominator includes the 0.05·0.99 false-positive mass.",
          "Interpretation of the base-rate/false-positive problem.",
        ],
      },
    ],
  }),
  "frm-p1-m4": examDepth({
    testPoints: [
      {
        id: "tp-ols",
        title: "OLS coefficients, interpretation and R²",
        priority: "critical",
        examinerFocus:
          "Whether you can interpret a slope as the expected change in Y per unit X holding others fixed, read the intercept correctly, and explain R²/adjusted-R² as variance explained—without over-claiming causation.",
        typicalQuestionForms: [
          "'Interpret the coefficient on the market return in a regression of stock returns.'",
          "'Which model has better fit given R² and adjusted R²?'",
          "'Compute the predicted value / residual.'",
        ],
        mustKnow: [
          "Slope β̂ = cov(X,Y)/var(X) in simple OLS; it is the expected ΔY per unit ΔX, other regressors held constant.",
          "R² = ESS/TSS = fraction of Y-variance explained; adjusted R² penalises added regressors, so it can fall when a useless variable is added.",
          "A high R² does not imply causation or a good forecast out-of-sample.",
        ],
        scoringActions: [
          "Interpret slopes 'per unit, holding others constant'.",
          "Use adjusted R² to compare models with different numbers of regressors.",
        ],
      },
      {
        id: "tp-assumptions",
        title: "OLS assumptions and their violations",
        priority: "critical",
        examinerFocus:
          "Whether you can name the classical assumptions and the consequence of each violation—heteroskedasticity and autocorrelation bias the STANDARD ERRORS (not the coefficients), multicollinearity inflates them, and omitted variables bias the COEFFICIENTS.",
        typicalQuestionForms: [
          "'Heteroskedasticity has what effect on OLS estimates and inference?'",
          "'Which violation biases the coefficients themselves?'",
          "'What remedy addresses autocorrelated errors?'",
        ],
        mustKnow: [
          "Heteroskedasticity & autocorrelation: coefficients still unbiased but standard errors wrong ⇒ invalid t/F tests; fix with robust (White/Newey-West) standard errors.",
          "Omitted-variable bias: coefficients biased and inconsistent if the omitted variable is correlated with an included regressor and with Y.",
          "Multicollinearity: coefficients unbiased but imprecise (inflated SEs, unstable signs); high R² with insignificant t-stats is the tell.",
        ],
        scoringActions: [
          "Separate 'bias the SE' violations from 'bias the coefficient' violations.",
          "Match each problem to its correct remedy (robust SEs vs adding a variable).",
        ],
      },
      {
        id: "tp-timeseries",
        title: "Stationarity, AR/MA and forecasting",
        priority: "high",
        examinerFocus:
          "Whether you understand stationarity, can identify AR vs MA behaviour, and know that non-stationary (unit-root) series produce spurious regressions unless differenced.",
        typicalQuestionForms: [
          "'A regression of two random walks gives R²=0.9 and significant t — what is the problem?'",
          "'Which process is covariance-stationary?'",
        ],
        mustKnow: [
          "Covariance stationarity: constant mean, constant variance, autocovariance depending only on lag.",
          "AR(1): x_t = c + φx_(t−1)+ε; |φ|<1 for stationarity; unit root (φ=1) ⇒ random walk, non-stationary.",
          "Spurious regression: two independent unit-root series can show high R² and significant t—difference the data or use cointegration.",
        ],
        scoringActions: [
          "Check |φ|<1 before treating an AR series as stationary.",
          "Suspect spurious regression when both series trend/wander.",
        ],
      },
      {
        id: "tp-simulation",
        title: "Monte Carlo and bootstrapping",
        priority: "medium",
        examinerFocus:
          "Whether you grasp what simulation buys (handling path-dependence and complex payoffs), its error shrinking as 1/√N, and variance-reduction techniques.",
        typicalQuestionForms: [
          "'To halve Monte Carlo standard error, by what factor must N increase?'",
          "'What does the bootstrap resample, and what assumption does it avoid?'",
        ],
        mustKnow: [
          "Monte Carlo standard error ∝ 1/√N: to halve it, multiply N by 4.",
          "Antithetic variates and control variates reduce variance without more paths.",
          "Bootstrap resamples the observed data with replacement, avoiding a parametric distributional assumption.",
        ],
        scoringActions: [
          "Use the 1/√N rule for 'how many more simulations' questions.",
          "Distinguish Monte Carlo (draws from an assumed distribution) from bootstrap (resamples data).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Split cleanly: definitional assumption items are fast wins; interpretation and spurious-regression items need a moment of thought.",
      timeBudget: "~1.4 minutes per item.",
      answerSequence: [
        "Decide if the item is estimation, inference (SEs), time series, or simulation.",
        "For violations, first ask: does this bias the COEFFICIENT or the STANDARD ERROR?",
        "State the correct remedy explicitly.",
      ],
      qualityChecks: [
        "Did I keep 'holding others constant' in coefficient interpretations?",
        "Did I attribute heteroskedasticity/autocorrelation to SE bias, not coefficient bias?",
        "Did I apply 1/√N correctly (4× N to halve error)?",
      ],
    },
    studyNotes: [
      {
        id: "sn-ols",
        title: "Interpreting OLS output like an examiner",
        testPointIds: ["tp-ols"],
        explanation: [
          "Every coefficient answer is a sentence: 'a one-unit increase in Xⱼ is associated with a β̂ⱼ change in expected Y, holding the other regressors constant.' The 'holding constant' clause is what distinguishes multiple regression from a simple correlation and is frequently the marked point.",
          "R² measures in-sample variance explained (ESS/TSS) and mechanically rises with every added regressor, which is why adjusted R² exists—it penalises extra variables and can fall. Use adjusted R² to compare models of different size, and never read a high R² as proof of causation or predictive power.",
          "Prediction is coefficients times regressor values plus the intercept; the residual is actual minus fitted. Keeping fitted-vs-residual straight avoids sign errors in the marked calculation.",
        ],
        keyRules: [
          "Slope interpretation always includes 'holding others constant'.",
          "Adjusted R² for model comparison; R² for pure fit.",
          "High R² ≠ causation ≠ good forecast.",
        ],
        formulas: [
          "β̂ = cov(X,Y)/var(X) (simple OLS).",
          "R² = ESS/TSS = 1 − SSR/TSS.",
        ],
        workedProblem: {
          scenario:
            "A regression gives Ŷ = 1.5 + 0.8·X₁ − 0.3·X₂. For X₁ = 10, X₂ = 4, actual Y = 8. Compute the fitted value and residual, and interpret the X₁ coefficient.",
          steps: [
            "Fitted Ŷ = 1.5 + 0.8·10 − 0.3·4 = 1.5 + 8 − 1.2 = 8.3.",
            "Residual = actual − fitted = 8 − 8.3 = −0.3.",
            "Interpretation: a one-unit rise in X₁ raises expected Y by 0.8, holding X₂ constant.",
          ],
          conclusion:
            "Fitted 8.3, residual −0.3; the model slightly over-predicts this observation, and each unit of X₁ adds 0.8 to expected Y with X₂ fixed.",
          markingNotes: [
            "Residual sign: actual − fitted (negative here).",
            "Include 'holding X₂ constant' for the interpretation mark.",
          ],
        },
      },
      {
        id: "sn-assumptions",
        title: "Violations: what breaks, and the fix",
        testPointIds: ["tp-assumptions"],
        explanation: [
          "Organise violations by what they damage. Heteroskedasticity (non-constant error variance) and autocorrelation (correlated errors, common in time series) leave the coefficients unbiased but make the usual standard errors wrong, so t- and F-tests mislead. The remedy is robust standard errors—White for heteroskedasticity, Newey-West for autocorrelation—not dropping the model.",
          "Omitted-variable bias is more serious: if a relevant variable correlated with an included regressor is left out, the coefficients themselves are biased and inconsistent. The fix is to include the variable (or a proxy), not to adjust the standard errors.",
          "Multicollinearity (regressors highly correlated with each other) keeps coefficients unbiased but inflates their standard errors, producing the classic symptom of a high overall R² with individually insignificant t-statistics and unstable coefficient signs.",
        ],
        keyRules: [
          "Heteroskedasticity/autocorrelation → SE problem → robust SEs.",
          "Omitted variable → coefficient bias → add the variable.",
          "Multicollinearity → inflated SEs → high R², insignificant t's.",
        ],
      },
      {
        id: "sn-timeseries",
        title: "Stationarity and spurious regression",
        testPointIds: ["tp-timeseries"],
        explanation: [
          "A covariance-stationary series has a constant mean and variance and an autocovariance that depends only on the lag. An AR(1) is stationary only if |φ| < 1; at φ = 1 it is a random walk with a unit root—its variance grows without bound and it is non-stationary.",
          "Regressing one non-stationary series on another independent non-stationary series produces a spurious regression: high R² and significant t-statistics that reflect common trending, not a real relationship. The defences are differencing the series to induce stationarity or, when a genuine long-run link exists, testing for cointegration.",
        ],
        keyRules: [
          "Stationary AR(1): |φ| < 1.",
          "Unit root (φ = 1) ⇒ random walk, non-stationary.",
          "High R² between two wandering series ⇒ suspect spurious regression.",
        ],
        formulas: [
          "AR(1): xₜ = c + φ·xₜ₋₁ + εₜ; long-run mean c/(1−φ) if |φ|<1.",
        ],
        workedProblem: {
          scenario:
            "An AR(1) model estimates xₜ = 0.5 + 0.8·xₜ₋₁ + εₜ. Is it stationary, and what is its long-run mean? If the coefficient were 1.0 instead, how would your answer change?",
          steps: [
            "|φ| = 0.8 < 1, so the process is covariance-stationary.",
            "Long-run mean = c/(1−φ) = 0.5/(1−0.8) = 0.5/0.2 = 2.5.",
            "If φ = 1.0, there is a unit root: the series is a random walk, non-stationary, with no finite long-run mean.",
          ],
          conclusion:
            "At φ = 0.8 the process is stationary with mean 2.5; at φ = 1.0 it becomes a non-stationary random walk, and regressions using it risk being spurious.",
          markingNotes: [
            "Long-run mean uses c/(1−φ), valid only for |φ|<1.",
            "Identify φ=1 as a unit root, not merely 'high persistence'.",
          ],
        },
      },
      {
        id: "sn-simulation",
        title: "Monte Carlo error and the bootstrap",
        testPointIds: ["tp-simulation"],
        explanation: [
          "Monte Carlo estimates a quantity by averaging over many simulated paths; its standard error shrinks as 1/√N, so precision is expensive—cutting error in half needs four times the paths. Variance-reduction techniques (antithetic variates, control variates, importance sampling) buy precision without brute-force path counts.",
          "The bootstrap sidesteps a parametric distribution entirely: it resamples the observed data with replacement to build an empirical sampling distribution of a statistic. That makes it valuable when returns are non-normal, but it cannot manufacture information beyond the sample and struggles with strong serial dependence unless block methods are used.",
        ],
        keyRules: [
          "MC standard error ∝ 1/√N; 4× N halves error.",
          "Bootstrap resamples data with replacement (no distribution assumed).",
          "Variance reduction improves precision per path.",
        ],
        formulas: [
          "SE_MC ≈ σ/√N.",
        ],
        workedProblem: {
          scenario:
            "A Monte Carlo VaR estimate using 10,000 paths has a standard error of $0.40m. How many paths are needed to cut the standard error to $0.10m?",
          steps: [
            "Target error is one-quarter of current ($0.10m vs $0.40m).",
            "Since SE ∝ 1/√N, reducing SE by a factor of 4 requires N ×16.",
            "N_new = 16 × 10,000 = 160,000 paths.",
          ],
          conclusion:
            "About 160,000 paths are required; the 1/√N law makes high precision costly, motivating variance-reduction techniques.",
          markingNotes: [
            "Reducing SE by factor k needs N × k².",
            "Here k=4 ⇒ 16× paths.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pp-m4-1",
        testPointIds: ["tp-assumptions"],
        style: "Multiple choice — concept",
        question:
          "A time-series regression of bond returns shows Durbin-Watson well below 2, signalling positive autocorrelation. What is the effect and the correct remedy?",
        answerPlan: [
          "Identify autocorrelation effect on SEs vs coefficients.",
          "State inference consequence.",
          "Give remedy.",
        ],
        modelAnswer:
          "Positive autocorrelation leaves the OLS coefficients unbiased but makes the ordinary standard errors too small, so t-statistics are overstated and variables look more significant than they are. The remedy is not to discard the model but to use autocorrelation-robust (Newey-West) standard errors, or to model the dynamics directly (e.g., add lags/AR terms). Coefficient bias is not the issue here.",
        markingGuide: [
          "Correctly states coefficients unbiased, SEs wrong.",
          "Notes inflated t-stats / false significance.",
          "Newey-West / robust SE remedy.",
        ],
      },
      {
        id: "pp-m4-2",
        testPointIds: ["tp-timeseries"],
        style: "Diagnosis",
        question:
          "An analyst regresses one stock's price level on an unrelated commodity price level and reports R² = 0.88 with a highly significant slope. Explain why this result is likely misleading.",
        answerPlan: [
          "Identify non-stationary levels.",
          "Explain spurious regression.",
          "Give the fix.",
        ],
        modelAnswer:
          "Price levels are typically non-stationary (near unit-root, trending) series. Regressing one wandering series on another can produce a high R² and significant t-statistics purely because both drift over time, not because they are related—this is a spurious regression. The analyst should test for stationarity, difference the series to returns (which are usually stationary), and only infer a relationship from the differenced data or via a proper cointegration test.",
        markingGuide: [
          "Identifies non-stationarity of levels.",
          "Names spurious regression as the cause.",
          "Recommends differencing / cointegration test.",
        ],
      },
      {
        id: "pp-m4-3",
        testPointIds: ["tp-simulation"],
        style: "Calculation + concept",
        question:
          "A Monte Carlo option price uses 40,000 paths with standard error $0.20. (a) How many paths halve the error? (b) Name one way to improve precision without simply adding paths.",
        answerPlan: [
          "Apply 1/√N rule.",
          "Compute new N.",
          "Give a variance-reduction method.",
        ],
        modelAnswer:
          "(a) Halving the standard error requires 2² = 4 times the paths, so N = 4 × 40,000 = 160,000 paths. (b) A variance-reduction technique such as antithetic variates (pair each random draw with its negative) or control variates (use a correlated instrument with a known analytic price) reduces the estimator's variance for the same number of paths, improving precision more cheaply than brute-force path increases.",
        markingGuide: [
          "Correct N = 160,000 via k² rule.",
          "Names a valid variance-reduction method.",
          "Explains it improves precision per path.",
        ],
      },
    ],
  }),
  "frm-p1-m5": examDepth({
    testPoints: [
      {
        id: "tp-ci",
        title: "Confidence intervals and the t vs z choice",
        priority: "critical",
        examinerFocus:
          "Whether you build a correct interval, choose t (small sample / unknown variance) vs z, and interpret it as a statement about the procedure, not a single realised interval.",
        typicalQuestionForms: [
          "'Construct a 95% confidence interval for the mean return.'",
          "'When should the t-distribution be used instead of the normal?'",
        ],
        mustKnow: [
          "CI = point estimate ± (critical value)·(standard error); SE of mean = s/√n.",
          "Use t with n−1 df when the population variance is unknown (especially small samples); as n grows, t → z.",
          "z critical values: 1.645 (90%), 1.96 (95%), 2.33 (one-tailed 99% ≈ VaR), 2.576 (two-tailed 99%).",
        ],
        scoringActions: [
          "Divide s by √n for the mean's SE (don't use s directly).",
          "Pick the correct critical value and tail count.",
        ],
      },
      {
        id: "tp-hyptest",
        title: "Hypothesis testing mechanics",
        priority: "critical",
        examinerFocus:
          "Whether you set up H₀/H₁ correctly, compute the test statistic, compare to the critical value or p-value, and state Type I vs Type II errors.",
        typicalQuestionForms: [
          "'Test whether the mean return differs from zero at 5%.'",
          "'Define Type I and Type II error in this context.'",
          "'What happens to power as sample size rises?'",
        ],
        mustKnow: [
          "Test statistic = (estimate − hypothesised)/SE; reject H₀ if |t| > critical or p < α.",
          "Type I = reject a true H₀ (probability α); Type II = fail to reject a false H₀ (probability β); power = 1 − β.",
          "Larger n and larger true effect raise power; lowering α (fewer false positives) raises β.",
        ],
        scoringActions: [
          "Write H₀/H₁ explicitly and pick one- vs two-tailed.",
          "Match the error type to 'true H₀' vs 'false H₀'.",
        ],
      },
      {
        id: "tp-jointtests",
        title: "F-tests, chi-square and joint hypotheses",
        priority: "high",
        examinerFocus:
          "Whether you know the F-test evaluates joint significance of regressors, chi-square handles variance/goodness-of-fit, and that individual t's can be insignificant while the F is significant (multicollinearity signature).",
        typicalQuestionForms: [
          "'Which test evaluates the joint significance of all slope coefficients?'",
          "'The F is significant but no single t is — what does this indicate?'",
        ],
        mustKnow: [
          "F-test: joint restriction (e.g., all slopes = 0); significant F with insignificant t's ⇒ multicollinearity.",
          "Chi-square: tests on variances and goodness-of-fit/contingency.",
          "The F statistic relates to R² and the number of restrictions.",
        ],
        scoringActions: [
          "Use F for joint hypotheses, t for single coefficients.",
          "Read 'significant F, insignificant t' as multicollinearity, not a contradiction.",
        ],
      },
      {
        id: "tp-estimators",
        title: "Estimator properties: bias, efficiency, consistency",
        priority: "medium",
        examinerFocus:
          "Whether you can rank estimators by unbiasedness (correct on average), efficiency (smallest variance among unbiased), and consistency (converges to the truth as n→∞).",
        typicalQuestionForms: [
          "'Which estimator is BLUE, and what does that mean?'",
          "'An estimator is biased but consistent — is that possible?'",
        ],
        mustKnow: [
          "Unbiased: E[estimator] = parameter; efficient: minimum variance among a class; consistent: converges in probability as n→∞.",
          "OLS is BLUE (Best Linear Unbiased Estimator) under the Gauss-Markov assumptions.",
          "An estimator can be biased in small samples yet consistent (bias → 0 as n → ∞).",
        ],
        scoringActions: [
          "Separate the three properties—they are not the same.",
          "Recall Gauss-Markov as the condition for OLS being BLUE.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Inference items are formula-driven; lock the critical values and the error definitions to bank them fast.",
      timeBudget: "~1.4 minutes per item.",
      answerSequence: [
        "State H₀/H₁ (or the interval target) and the tail structure.",
        "Compute SE = s/√n, then the test statistic or interval.",
        "Compare to the right critical value; state the decision and its error meaning.",
      ],
      qualityChecks: [
        "Did I use s/√n, not s, for the mean's SE?",
        "One- vs two-tailed critical value correct?",
        "Type I ↔ true H₀; Type II ↔ false H₀?",
      ],
    },
    studyNotes: [
      {
        id: "sn-ci",
        title: "Confidence intervals done cleanly",
        testPointIds: ["tp-ci"],
        explanation: [
          "A confidence interval is the point estimate plus/minus a margin, where the margin is a critical value times the standard error. For a mean, the standard error is s/√n, so the interval tightens with more data. The most common exam slip is using the raw sample standard deviation s as the standard error instead of s/√n.",
          "Choose the distribution by what you know. With an unknown population variance—especially in small samples—use the t-distribution with n−1 degrees of freedom, which has fatter tails and hence wider intervals; as n grows, the t converges to the normal and the two coincide.",
          "Interpretation matters for marks: a 95% CI means the procedure captures the true parameter 95% of the time across repeated samples, not that there is a 95% probability the truth lies in this one realised interval.",
        ],
        keyRules: [
          "CI = estimate ± critical × SE; SE of mean = s/√n.",
          "Unknown variance / small n ⇒ t with n−1 df.",
          "z: 1.645 / 1.96 / 2.576 for 90/95/99% two-tailed.",
        ],
        formulas: [
          "CI(mean) = x̄ ± t_(n−1,α/2)·(s/√n).",
        ],
        workedProblem: {
          scenario:
            "A sample of n = 25 monthly returns has mean 1.2% and sample SD 3.0%. Build an approximate 95% confidence interval for the mean (t₀.₀₂₅,₂₄ ≈ 2.064).",
          steps: [
            "SE = s/√n = 3.0%/√25 = 3.0%/5 = 0.6%.",
            "Margin = 2.064 × 0.6% ≈ 1.238%.",
            "CI = 1.2% ± 1.238% ⇒ (−0.04%, 2.44%).",
          ],
          conclusion:
            "The 95% CI is roughly (−0.04%, 2.44%). Because it straddles zero, the mean return is not statistically distinguishable from zero at 5%.",
          markingNotes: [
            "SE uses √25 = 5; do not skip the √n.",
            "Interval containing zero ⇒ not significant at 5%.",
          ],
        },
      },
      {
        id: "sn-hyptest",
        title: "Hypothesis tests and the two errors",
        testPointIds: ["tp-hyptest"],
        explanation: [
          "State the null and alternative before touching numbers. The test statistic is (estimate − hypothesised value)/standard error; reject the null when its magnitude exceeds the critical value or when the p-value is below the significance level α. One-tailed versus two-tailed depends on whether the alternative is directional.",
          "Type I error is rejecting a true null; its probability is α, the significance level you choose. Type II error is failing to reject a false null, with probability β, and power is 1 − β. Because tightening α (demanding stronger evidence) makes rejection harder, it raises β—there is a trade-off resolved only by collecting more data, which raises power for any fixed α.",
        ],
        keyRules: [
          "Reject H₀ if |stat| > critical or p < α.",
          "Type I = reject true H₀ (prob α); Type II = accept false H₀ (prob β).",
          "Power = 1 − β; rises with n and effect size.",
        ],
        formulas: [
          "t = (x̄ − μ₀)/(s/√n).",
        ],
        workedProblem: {
          scenario:
            "Test whether a strategy's mean monthly return differs from 0 at the 5% level. Sample: n = 36, mean 0.8%, sample SD 2.4%.",
          steps: [
            "H₀: μ = 0; H₁: μ ≠ 0 (two-tailed).",
            "SE = 2.4%/√36 = 2.4%/6 = 0.4%.",
            "t = (0.8% − 0)/0.4% = 2.0.",
            "Critical value ≈ ±2.03 (t₃₅) or ±1.96 (z). At 2.0, we are borderline: below 2.03 (fail to reject with t) but above 1.96.",
          ],
          conclusion:
            "t = 2.0 is essentially at the 5% boundary; using the t-critical (2.03) we narrowly fail to reject H₀, so the mean is not clearly different from zero. This borderline case shows why stating the exact critical value matters.",
          markingNotes: [
            "SE uses √36 = 6.",
            "Compare to the t-critical, not just 1.96, for small samples.",
          ],
        },
      },
      {
        id: "sn-jointtests",
        title: "F, chi-square and joint significance",
        testPointIds: ["tp-jointtests"],
        explanation: [
          "The F-test evaluates joint hypotheses—most often that all slope coefficients are simultaneously zero. A significant F says the regressors jointly explain Y even if, thanks to multicollinearity, no single t-statistic is significant. That apparent contradiction (significant F, insignificant t's) is a standard exam signal of collinear regressors, not an error.",
          "The chi-square distribution supports tests on variances and goodness-of-fit or independence in contingency tables. Keeping the map straight—t for one coefficient, F for joint coefficient restrictions, chi-square for variance/fit—prevents mismatched-test distractors.",
        ],
        keyRules: [
          "F: joint restrictions; t: single coefficient.",
          "Significant F + insignificant t's ⇒ multicollinearity.",
          "Chi-square: variance and goodness-of-fit tests.",
        ],
      },
      {
        id: "sn-estimators",
        title: "Bias, efficiency, consistency and BLUE",
        testPointIds: ["tp-estimators"],
        explanation: [
          "These three properties are distinct. Unbiasedness means the estimator is right on average across samples; efficiency means it has the smallest variance within a defined class; consistency means it converges to the true value as the sample grows. An estimator can be biased in small samples yet consistent if that bias vanishes as n→∞.",
          "Under the Gauss-Markov assumptions (linearity, exogeneity, homoskedastic non-autocorrelated errors), OLS is the Best Linear Unbiased Estimator—unbiased with the minimum variance among linear unbiased estimators. Violations like heteroskedasticity break the 'best' (efficiency) claim, which is precisely why robust standard errors are then needed.",
        ],
        keyRules: [
          "Unbiased ≠ efficient ≠ consistent.",
          "OLS is BLUE under Gauss-Markov.",
          "Biased-but-consistent is possible (bias → 0 as n → ∞).",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m5-1",
        testPointIds: ["tp-ci", "tp-hyptest"],
        style: "Calculation",
        question:
          "A sample of 49 daily returns has mean 0.05% and sample SD 0.70%. Construct a 95% CI for the mean (use z = 1.96) and state whether the mean differs from zero at 5%.",
        answerPlan: [
          "Compute SE.",
          "Build interval.",
          "Assess vs zero.",
        ],
        modelAnswer:
          "SE = 0.70%/√49 = 0.70%/7 = 0.10%. Margin = 1.96 × 0.10% = 0.196%. CI = 0.05% ± 0.196% = (−0.146%, 0.246%). Because the interval contains zero, we fail to reject H₀: μ = 0 at the 5% level—the mean daily return is not statistically distinguishable from zero.",
        markingGuide: [
          "SE = 0.10% (uses √49 = 7).",
          "Correct interval (−0.146%, 0.246%).",
          "Correct 'contains zero ⇒ not significant' conclusion.",
        ],
      },
      {
        id: "pp-m5-2",
        testPointIds: ["tp-hyptest"],
        style: "Concept",
        question:
          "A risk model's backtest sets H₀: 'the model is correctly calibrated.' Define Type I and Type II errors here and explain which is more dangerous for a risk manager.",
        answerPlan: [
          "Map errors to the H₀.",
          "State consequences.",
          "Argue relative danger.",
        ],
        modelAnswer:
          "Type I error is rejecting a correctly calibrated model (a false alarm that wastes effort recalibrating a sound model). Type II error is failing to reject a miscalibrated model—accepting a model that actually understates risk. For a risk manager the Type II error is generally more dangerous, because it leaves the firm under-capitalised and exposed while believing its risk is measured correctly; this argues for backtests with adequate power (enough observations) rather than merely a low false-alarm rate.",
        markingGuide: [
          "Type I = reject true (calibrated) model.",
          "Type II = accept false (miscalibrated) model.",
          "Reasoned argument that Type II is more dangerous + power point.",
        ],
      },
      {
        id: "pp-m5-3",
        testPointIds: ["tp-jointtests", "tp-estimators"],
        style: "Diagnosis",
        question:
          "A three-factor return regression has a highly significant F-statistic but all three individual t-statistics are insignificant. What is the most likely cause, and does it bias the coefficients?",
        answerPlan: [
          "Identify the F-vs-t pattern.",
          "Name multicollinearity.",
          "State effect on bias vs variance.",
        ],
        modelAnswer:
          "The pattern—jointly significant (F) but individually insignificant (t)—is the classic signature of multicollinearity: the factors are highly correlated with one another, so the model explains returns well collectively while the data cannot pin down each factor's separate contribution. It does not bias the coefficients (they remain unbiased under Gauss-Markov); it inflates their standard errors, making individual estimates imprecise and their signs unstable. Remedies include dropping/combining collinear factors or gathering more independent variation.",
        markingGuide: [
          "Identifies multicollinearity from F-vs-t pattern.",
          "States coefficients unbiased but SEs inflated.",
          "Offers a sensible remedy.",
        ],
      },
    ],
  }),
  "frm-p1-m6": examDepth({
    testPoints: [
      {
        id: "tp-bankrisk",
        title: "Bank balance-sheet risks and net interest margin",
        priority: "critical",
        examinerFocus:
          "Whether you understand how banks earn a spread by maturity transformation and the risks that creates—interest-rate/repricing risk, liquidity risk from funding short and lending long, and credit risk on the asset side.",
        typicalQuestionForms: [
          "'A bank funds 5-year loans with overnight deposits — which risk dominates?'",
          "'What happens to net interest margin if short rates rise faster than long rates?'",
        ],
        mustKnow: [
          "Banks transform maturity/liquidity: short-term deposits fund long-term illiquid loans, earning net interest margin but creating repricing and liquidity risk.",
          "A flattening/inverting curve compresses NIM when funding costs reprice faster than assets.",
          "Economic capital vs regulatory capital: economic capital is the firm's own risk-based estimate; regulatory is the Basel minimum.",
        ],
        scoringActions: [
          "Trace the funding-vs-asset maturity mismatch to the named risk.",
          "Link curve shape to NIM direction.",
        ],
      },
      {
        id: "tp-insurance",
        title: "Insurer risks: underwriting, reserving and moral hazard",
        priority: "high",
        examinerFocus:
          "Whether you can separate life vs P&C insurer risk profiles and identify adverse selection, moral hazard and reserving/longevity risk.",
        typicalQuestionForms: [
          "'Which risk does a life insurer face that a P&C insurer largely does not?'",
          "'How do deductibles and co-insurance mitigate moral hazard?'",
        ],
        mustKnow: [
          "P&C: short-tail/long-tail claims, catastrophe and reserving risk; Life: mortality/longevity and interest-rate/reinvestment risk on long liabilities.",
          "Adverse selection = high-risk buyers self-select before contract; moral hazard = behaviour changes after contract.",
          "Deductibles, co-insurance and policy limits align policyholder incentives and cap insurer loss.",
        ],
        scoringActions: [
          "Classify life vs P&C by liability duration and claim driver.",
          "Distinguish adverse selection (pre-contract) from moral hazard (post-contract).",
        ],
      },
      {
        id: "tp-funds",
        title: "Fund structures, leverage and fee models",
        priority: "high",
        examinerFocus:
          "Whether you know mutual-fund vs hedge-fund vs pension structures, the '2-and-20' fee model with high-water marks, and how leverage and redemption terms create liquidity risk.",
        typicalQuestionForms: [
          "'Compute the performance fee given a high-water mark.'",
          "'Which structure poses the greatest liquidity/redemption risk?'",
        ],
        mustKnow: [
          "Hedge funds: management fee (e.g., 2%) plus incentive fee (e.g., 20%) above a high-water mark and possibly a hurdle; lock-ups and gates limit redemptions.",
          "Leverage amplifies both returns and losses and adds margin-call/funding-liquidity risk.",
          "Open-end funds face redemption/first-mover risk; closed-end/lock-up structures mitigate it.",
        ],
        scoringActions: [
          "Apply the high-water mark before charging an incentive fee.",
          "Link leverage and redemption terms to liquidity risk.",
        ],
      },
      {
        id: "tp-systemic",
        title: "Interconnection, systemic risk and moral hazard",
        priority: "medium",
        examinerFocus:
          "Whether you grasp why leverage, interconnectedness and 'too-big-to-fail' create systemic externalities that motivate regulation.",
        typicalQuestionForms: [
          "'Why does TBTF create moral hazard?'",
          "'Which feature makes an institution systemically important?'",
        ],
        mustKnow: [
          "Systemic importance rises with size, interconnectedness, leverage and lack of substitutability.",
          "Implicit bailout guarantees create moral hazard—incentive to take more risk.",
          "Regulation (capital surcharges, resolution planning) internalises the externality.",
        ],
        scoringActions: [
          "Cite interconnectedness/leverage as systemic drivers.",
          "Frame TBTF as a moral-hazard/externality problem.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Conceptual markets domain—bank the definitions and one fee/NIM calculation quickly.",
      timeBudget: "~1.2 minutes per item.",
      answerSequence: [
        "Identify the institution type (bank/insurer/fund) and its core risk.",
        "For fees/NIM, apply the mechanical rule (high-water mark, repricing).",
        "Eliminate distractors that mix up life vs P&C or adverse selection vs moral hazard.",
      ],
      qualityChecks: [
        "Did I apply the high-water mark before the incentive fee?",
        "Adverse selection (pre) vs moral hazard (post) kept straight?",
        "Did I link maturity mismatch to the right risk?",
      ],
    },
    studyNotes: [
      {
        id: "sn-bankrisk",
        title: "Maturity transformation and net interest margin",
        testPointIds: ["tp-bankrisk"],
        explanation: [
          "A bank's business model is maturity and liquidity transformation: it funds long-dated, illiquid loans with short-dated, liquid deposits and earns the spread (net interest margin). That spread is the reward for bearing repricing risk (assets and liabilities reprice at different speeds) and liquidity risk (depositors can withdraw faster than loans mature).",
          "The curve shape drives NIM. When the yield curve is steep, funding short and lending long is lucrative; when short rates rise toward or above long rates (flattening/inversion), funding costs reprice faster than loan yields and NIM compresses. This is why rate-shock scenarios are central to bank risk.",
          "Distinguish economic capital—the bank's internal, risk-model-based estimate of the buffer needed to survive at a chosen confidence level—from regulatory capital, the Basel-prescribed minimum. Well-run banks hold the greater of the two and manage to economic capital.",
        ],
        keyRules: [
          "NIM = asset yield − funding cost; compressed by faster-repricing liabilities.",
          "Maturity mismatch ⇒ repricing + liquidity risk.",
          "Economic capital (internal) vs regulatory capital (Basel minimum).",
        ],
        workedProblem: {
          scenario:
            "A bank earns 5.0% on loans funded at 1.5% on deposits, giving a 3.5% NIM. Short rates jump so funding cost rises to 3.0% while loan yields (longer, slower to reprice) rise only to 5.3%. What is the new NIM and what risk materialised?",
          steps: [
            "Original NIM = 5.0% − 1.5% = 3.5%.",
            "New funding cost = 3.0%; new asset yield = 5.3%.",
            "New NIM = 5.3% − 3.0% = 2.3%.",
            "NIM fell 1.2pp because liabilities repriced faster than assets—repricing/interest-rate risk.",
          ],
          conclusion:
            "NIM compresses from 3.5% to 2.3%; the loss stems from repricing (interest-rate) risk inherent in maturity transformation.",
          markingNotes: [
            "NIM is asset yield minus funding cost, in the same units.",
            "Attribute the compression to faster-repricing liabilities.",
          ],
        },
      },
      {
        id: "sn-insurance",
        title: "Insurer risk profiles and information asymmetry",
        testPointIds: ["tp-insurance"],
        explanation: [
          "Property & casualty insurers face claim frequency/severity, catastrophe accumulation and reserving risk (setting aside enough for claims not yet fully known, especially 'long-tail' liability lines). Life insurers carry long-duration liabilities exposed to mortality/longevity risk and to interest-rate/reinvestment risk, because they must earn enough over decades to meet promised payouts.",
          "Two information problems recur. Adverse selection occurs before the contract—high-risk individuals are keenest to buy, skewing the pool—and is managed by underwriting and risk-based pricing. Moral hazard occurs after the contract—being insured changes behaviour—and is managed by deductibles, co-insurance and policy limits that keep the policyholder with 'skin in the game'.",
        ],
        keyRules: [
          "P&C: catastrophe + reserving risk; Life: longevity + rate risk.",
          "Adverse selection = pre-contract selection; moral hazard = post-contract behaviour.",
          "Deductibles/co-insurance/limits mitigate moral hazard.",
        ],
      },
      {
        id: "sn-funds",
        title: "Hedge-fund fees, high-water marks and leverage",
        testPointIds: ["tp-funds"],
        explanation: [
          "The '2-and-20' model charges a management fee on assets plus an incentive fee on profits, but only above a high-water mark—the highest NAV previously reached—so managers cannot charge performance fees on gains that merely recover prior losses. A hurdle rate, when present, requires returns above a threshold before the incentive fee applies.",
          "Leverage magnifies both gains and losses and introduces funding-liquidity risk: adverse moves trigger margin calls that can force selling at the worst time. Redemption terms interact with this—open-ended funds allowing frequent redemptions face first-mover/run risk, which lock-ups and gates are designed to slow.",
        ],
        keyRules: [
          "Incentive fee applies only above the high-water mark.",
          "Leverage amplifies P&L and adds margin-call risk.",
          "Redemption liquidity ↔ run risk; lock-ups/gates mitigate.",
        ],
        formulas: [
          "Incentive fee = rate × max(0, NAV_end − max(HWM, hurdle-adjusted base)).",
        ],
        workedProblem: {
          scenario:
            "A hedge fund charges 2% management and 20% incentive above a high-water mark. Start-of-year NAV = $100m (also the HWM). Gross return before fees is +15%. Compute total fees (management on start NAV for simplicity, incentive on gains above HWM after management fee).",
          steps: [
            "Management fee = 2% × $100m = $2.0m.",
            "Gross gain = 15% × $100m = $15m ⇒ NAV before incentive = $115m; after management fee ≈ $113m.",
            "Profit above HWM (net of management fee) = $113m − $100m = $13m.",
            "Incentive fee = 20% × $13m = $2.6m; total fees ≈ $2.0m + $2.6m = $4.6m.",
          ],
          conclusion:
            "Total fees ≈ $4.6m; note the incentive fee applies only to the $13m gain above the $100m high-water mark, not to the whole NAV.",
          markingNotes: [
            "No incentive fee below the HWM.",
            "State your ordering convention (management before incentive) clearly.",
          ],
        },
      },
      {
        id: "sn-systemic",
        title: "Systemic risk and too-big-to-fail",
        testPointIds: ["tp-systemic"],
        explanation: [
          "An institution is systemically important when its failure would cascade through the system: drivers are size, interconnectedness (many counterparties), leverage, complexity and lack of substitutability. The failure imposes costs on parties beyond the firm—a negative externality—so private risk-taking exceeds the socially optimal level.",
          "The expectation of a public bailout ('too big to fail') creates moral hazard: creditors under-price risk and the firm takes on more of it, knowing losses may be socialised. Regulation responds with capital surcharges for systemically important firms, resolution/recovery planning and higher supervisory intensity to internalise the externality.",
        ],
        keyRules: [
          "Systemic drivers: size, interconnectedness, leverage, substitutability.",
          "TBTF ⇒ moral hazard via implicit guarantees.",
          "Surcharges + resolution planning internalise the externality.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m6-1",
        testPointIds: ["tp-funds"],
        style: "Calculation",
        question:
          "A fund's NAV fell from $120m (its high-water mark) to $100m last year, then rose to $118m this year. With a 20% incentive fee and no hurdle, how much incentive fee is due this year, and why?",
        answerPlan: [
          "Identify HWM.",
          "Compare current NAV to HWM.",
          "Compute fee.",
        ],
        modelAnswer:
          "The high-water mark is $120m. This year's NAV of $118m is still below the $120m high-water mark, so no incentive fee is due—the $18m gain merely recovers part of the prior loss. The manager can only charge the 20% incentive fee on gains that push NAV above $120m; the high-water mark exists precisely to stop managers earning performance fees for re-earning money they previously lost.",
        markingGuide: [
          "Identifies $120m HWM.",
          "Concludes zero incentive fee ($118m < $120m).",
          "Explains the purpose of the high-water mark.",
        ],
      },
      {
        id: "pp-m6-2",
        testPointIds: ["tp-bankrisk"],
        style: "Concept",
        question:
          "A regional bank funds 30-year fixed-rate mortgages with money-market deposits. The yield curve inverts sharply. Describe the two main risks and the effect on the bank.",
        answerPlan: [
          "Identify maturity mismatch.",
          "Name repricing and liquidity risk.",
          "Explain NIM/valuation effect.",
        ],
        modelAnswer:
          "The bank runs a large maturity mismatch—long fixed-rate assets funded by very short liabilities. First, repricing (interest-rate) risk: when the curve inverts, short-term funding costs rise above the fixed mortgage yields, compressing or eliminating net interest margin, and the fixed-rate assets also fall in market value as rates rise. Second, funding-liquidity risk: money-market deposits can flee quickly, forcing the bank to sell illiquid or depreciated assets to meet withdrawals. Together these can erode both earnings and capital.",
        markingGuide: [
          "Identifies maturity mismatch.",
          "Repricing/interest-rate risk with NIM + valuation effect.",
          "Funding-liquidity/run risk.",
        ],
      },
      {
        id: "pp-m6-3",
        testPointIds: ["tp-insurance"],
        style: "Concept",
        question:
          "Explain the difference between adverse selection and moral hazard for a health insurer, and give one contract feature that mitigates each.",
        answerPlan: [
          "Define both with timing.",
          "Give a mitigant for each.",
        ],
        modelAnswer:
          "Adverse selection arises before the contract: sicker individuals are more likely to buy insurance, worsening the risk pool; it is mitigated by underwriting and risk-based pricing (or mandatory participation to broaden the pool). Moral hazard arises after the contract: once insured, people may over-use care or take less precaution; it is mitigated by deductibles and co-insurance, which keep policyholders paying a share and so preserve their incentive to economise. The key contrast is timing—selection before, behaviour change after.",
        markingGuide: [
          "Adverse selection defined as pre-contract with a mitigant.",
          "Moral hazard defined as post-contract with a mitigant.",
          "Explicit timing contrast.",
        ],
      },
    ],
  }),
  "frm-p1-m7": examDepth({
    testPoints: [
      {
        id: "tp-yields",
        title: "Fixed-income yields, spot/forward and the curve",
        priority: "critical",
        examinerFocus:
          "Whether you can move between spot, forward and par yields, and read what curve shape implies—forward rates are implied by the term structure, not forecasts.",
        typicalQuestionForms: [
          "'Given 1-year and 2-year spot rates, compute the 1-year forward rate one year out.'",
          "'What does an upward-sloping curve imply about forward rates?'",
        ],
        mustKnow: [
          "No-arbitrage forward: (1+z₂)² = (1+z₁)(1+f₁,₂) ⇒ f = (1+z₂)²/(1+z₁) − 1.",
          "Forward rate > spot when the curve is upward-sloping; forwards are break-even, not predictions.",
          "Par yield is the coupon making price = par; bootstrapping recovers spot rates from coupon bonds.",
        ],
        scoringActions: [
          "Use compounding consistently (annual vs continuous).",
          "Solve the no-arbitrage relation, don't average the spots.",
        ],
      },
      {
        id: "tp-equityfx",
        title: "Equity and FX cash-and-carry / covered interest parity",
        priority: "high",
        examinerFocus:
          "Whether you can price forwards via cost-of-carry and apply covered interest rate parity to FX, getting the sign of the interest-rate differential right.",
        typicalQuestionForms: [
          "'Compute the fair forward FX rate given spot and two interest rates.'",
          "'A stock pays a dividend yield q — what is the fair equity forward?'",
        ],
        mustKnow: [
          "Equity forward: F = S·e^((r−q)T) (continuous) or S(1+r−q)^T; dividends reduce the forward.",
          "Covered interest parity: F = S·(1+r_domestic)/(1+r_foreign) (price/quote convention matters).",
          "The higher-interest-rate currency trades at a forward discount.",
        ],
        scoringActions: [
          "Nail the quote convention (domestic per foreign) before applying CIP.",
          "Subtract dividend yield from the carry for equities.",
        ],
      },
      {
        id: "tp-commodities",
        title: "Commodity forwards, storage and convenience yield",
        priority: "high",
        examinerFocus:
          "Whether you understand contango vs backwardation and the roles of storage cost and convenience yield in the cost-of-carry for physicals.",
        typicalQuestionForms: [
          "'A market in backwardation implies what about convenience yield?'",
          "'Compute the fair commodity forward including storage.'",
        ],
        mustKnow: [
          "F = S·e^((r+u−y)T): r financing, u storage cost, y convenience yield.",
          "Contango: forward > spot (carry positive net); backwardation: forward < spot (high convenience yield).",
          "Roll yield is positive in backwardation, negative in contango for a long futures position.",
        ],
        scoringActions: [
          "Add storage, subtract convenience yield in the carry.",
          "Map backwardation to high convenience yield / tight supply.",
        ],
      },
      {
        id: "tp-fi-risks",
        title: "Fixed-income return sources and risks",
        priority: "medium",
        examinerFocus:
          "Whether you can decompose bond return into coupon, rolldown, price change from yield moves, and reinvestment, and identify reinvestment vs price risk.",
        typicalQuestionForms: [
          "'Which risk dominates for a long-horizon investor in a laddered portfolio?'",
          "'How does reinvestment risk offset price risk at the duration horizon?'",
        ],
        mustKnow: [
          "Total return = coupon income + reinvestment + rolldown + price change.",
          "Price risk and reinvestment risk move in opposite directions with rates; they offset at the Macaulay-duration horizon (immunisation).",
          "Rolldown captures the pull toward par / down a positively sloped curve as maturity shortens.",
        ],
        scoringActions: [
          "Separate income from price effects in a total-return question.",
          "Link the offset of price and reinvestment risk to duration matching.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Carry/parity items are formulaic and high-yield; get the sign conventions right and they are free marks.",
      timeBudget: "~1.5 minutes per item.",
      answerSequence: [
        "Identify the asset (rate/equity/FX/commodity) and pull the right carry formula.",
        "Fix the sign of each carry component (dividend, storage, convenience, rate differential).",
        "Compute and sanity-check the direction (e.g., high-rate currency at forward discount).",
      ],
      qualityChecks: [
        "Compounding convention (continuous vs discrete) consistent?",
        "Correct FX quote convention for CIP?",
        "Storage adds, convenience/dividend subtracts?",
      ],
    },
    studyNotes: [
      {
        id: "sn-yields",
        title: "Spot, forward and the no-arbitrage curve",
        testPointIds: ["tp-yields"],
        explanation: [
          "Spot rates discount single future cash flows; forward rates are the rates implied for future periods that make rolling short investments equal to a longer one—pure no-arbitrage, not a forecast. The two-period relation (1+z₂)² = (1+z₁)(1+f₁,₂) says a two-year investment must equal a one-year investment reinvested at the implied one-year forward.",
          "When the spot curve slopes upward, implied forward rates lie above spot rates; a flat curve makes them equal. The common error is to average spots or to treat the forward as the market's rate prediction—it is only the break-even rate embedded in today's prices.",
          "Par yields (the coupon that prices a bond at par) and spot rates are linked by bootstrapping: knowing shorter spot rates lets you strip the spot rate implied by each successive coupon bond. This is the backbone of curve construction used later for valuation.",
        ],
        keyRules: [
          "f₁,₂ = (1+z₂)²/(1+z₁) − 1.",
          "Upward curve ⇒ forwards above spots.",
          "Forwards are break-even, not forecasts.",
        ],
        formulas: [
          "(1+zₙ)ⁿ = (1+z₁)(1+f₁,₂)…(1+f_{n−1,n}).",
        ],
        workedProblem: {
          scenario:
            "The 1-year spot rate is 3.0% and the 2-year spot rate is 4.0% (annual compounding). Compute the implied 1-year forward rate starting in one year.",
          steps: [
            "Use (1+z₂)² = (1+z₁)(1+f).",
            "(1.04)² = 1.0816; (1.03) = 1.03.",
            "1 + f = 1.0816 / 1.03 = 1.05010.",
            "f = 5.01%.",
          ],
          conclusion:
            "The implied 1-year forward is about 5.01%, above both spot rates—consistent with an upward-sloping curve. It is the break-even reinvestment rate, not a forecast of next year's 1-year rate.",
          markingNotes: [
            "Square the 2-year factor; do not average 3% and 4%.",
            "Forward exceeds spots when the curve rises.",
          ],
        },
      },
      {
        id: "sn-carry",
        title: "Cost-of-carry for equities and FX",
        testPointIds: ["tp-equityfx"],
        explanation: [
          "A forward price is the spot compounded at the net cost of carry. For a dividend-paying stock the carry is the financing rate minus the dividend yield, F = S·e^((r−q)T); dividends received while holding the underlying reduce the forward. Getting the sign of q right is a frequent marked point.",
          "For FX, covered interest parity ties the forward to the interest-rate differential: financing in the domestic currency and investing in the foreign one must not create arbitrage, so F = S·(1+r_dom)/(1+r_for) under the domestic-per-foreign quote. The currency with the higher interest rate trades at a forward discount, which is the intuition to sanity-check the arithmetic against.",
        ],
        keyRules: [
          "Equity forward F = S·e^((r−q)T); dividends lower F.",
          "CIP: F = S·(1+r_dom)/(1+r_for) (domestic per foreign).",
          "Higher-rate currency ⇒ forward discount.",
        ],
        formulas: [
          "F_equity = S·e^((r−q)T).",
          "F_FX = S·(1+r_dom)/(1+r_for).",
        ],
        workedProblem: {
          scenario:
            "Spot USD/EUR (USD per EUR) is 1.1000. The 1-year USD rate is 5% and the 1-year EUR rate is 3% (annual). Compute the 1-year forward and state which currency is at a forward premium.",
          steps: [
            "Domestic = USD, foreign = EUR; F = S·(1+r_USD)/(1+r_EUR).",
            "F = 1.1000 × (1.05/1.03) = 1.1000 × 1.019417 = 1.12136.",
            "The EUR buys more USD forward (1.1214 > 1.1000), so EUR is at a forward premium and USD (higher rate) at a forward discount.",
          ],
          conclusion:
            "The 1-year forward is about 1.1214 USD/EUR; the higher-rate currency (USD) trades at a forward discount, exactly as covered interest parity predicts.",
          markingNotes: [
            "Match the quote convention to the rate placement.",
            "Higher-rate currency at a discount is the sanity check.",
          ],
        },
      },
      {
        id: "sn-commodities",
        title: "Storage, convenience yield and the futures curve",
        testPointIds: ["tp-commodities"],
        explanation: [
          "Physical commodities extend the carry model with storage cost (u, which raises the forward like a negative dividend) and convenience yield (y, the benefit of holding the physical, which lowers the forward). The full relation F = S·e^((r+u−y)T) explains why some curves slope up (contango) and others down (backwardation).",
          "Contango (forward above spot) arises when net carry is positive—ample supply, low convenience yield. Backwardation (forward below spot) signals a high convenience yield, typically tight physical supply where holders value immediate access. For a long futures position, roll yield is positive in backwardation and negative in contango, materially affecting index returns.",
        ],
        keyRules: [
          "F = S·e^((r+u−y)T): storage adds, convenience subtracts.",
          "Contango ⇔ high supply/low convenience; backwardation ⇔ high convenience.",
          "Long roll yield: + in backwardation, − in contango.",
        ],
        formulas: [
          "F = S·e^((r+u−y)T).",
        ],
      },
      {
        id: "sn-fi-return",
        title: "Decomposing bond return and immunisation",
        testPointIds: ["tp-fi-risks"],
        explanation: [
          "A bond's holding-period return is more than its yield: it combines coupon income, reinvestment of those coupons, rolldown (the price gain as a bond rolls down a positively-sloped curve toward maturity), and the price change from any shift in yields. Separating these is essential to answering total-return questions correctly.",
          "Price risk (a rate rise lowers price) and reinvestment risk (a rate rise raises reinvestment income) move in opposite directions. They exactly offset over a horizon equal to the bond's Macaulay duration—the principle behind immunisation, where matching duration to the investment horizon locks in a return despite rate moves.",
        ],
        keyRules: [
          "Return = coupon + reinvestment + rolldown + price change.",
          "Price and reinvestment risk offset at the Macaulay-duration horizon.",
          "Rolldown is a return source on an upward-sloping curve.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m7-1",
        testPointIds: ["tp-equityfx"],
        style: "Calculation",
        question:
          "A stock trades at $50, pays a 2% continuous dividend yield, and the continuously-compounded risk-free rate is 4%. Compute the fair 6-month forward price.",
        answerPlan: [
          "Recall equity forward formula.",
          "Plug in with T = 0.5.",
          "Compute.",
        ],
        modelAnswer:
          "F = S·e^((r−q)T) = 50·e^((0.04−0.02)·0.5) = 50·e^(0.01) = 50·1.01005 ≈ $50.50. The forward exceeds spot because the financing cost (4%) exceeds the dividend yield (2%), so net carry is positive; if the dividend yield had exceeded the rate, the forward would trade below spot.",
        markingGuide: [
          "Correct formula with r − q carry.",
          "T = 0.5 applied.",
          "F ≈ $50.50 with correct interpretation.",
        ],
      },
      {
        id: "pp-m7-2",
        testPointIds: ["tp-yields"],
        style: "Calculation",
        question:
          "Spot rates (annual): 2-year = 3.5%, 3-year = 4.0%. Compute the implied 1-year forward rate covering year 3 (from t=2 to t=3).",
        answerPlan: [
          "Set up (1+z₃)³ = (1+z₂)²(1+f₂,₃).",
          "Solve for f.",
        ],
        modelAnswer:
          "(1+z₃)³ = (1+z₂)²(1+f₂,₃). (1.04)³ = 1.124864; (1.035)² = 1.071225. So 1 + f₂,₃ = 1.124864/1.071225 = 1.05007, giving f₂,₃ ≈ 5.01%. The forward for year 3 sits above the 3-year spot of 4%, consistent with the upward-sloping curve, and represents the break-even 1-year rate two years forward.",
        markingGuide: [
          "Correct no-arbitrage setup with cubes/squares.",
          "f₂,₃ ≈ 5.0%.",
          "Notes forward > spot for a rising curve.",
        ],
      },
      {
        id: "pp-m7-3",
        testPointIds: ["tp-commodities"],
        style: "Concept + calculation",
        question:
          "Crude oil spot is $80, storage cost is 1% and financing 4% (both continuous, annual), and the 1-year futures trades at $79. What convenience yield does this imply, and what does it say about the market?",
        answerPlan: [
          "Set F = S·e^((r+u−y)T).",
          "Solve for y.",
          "Interpret backwardation.",
        ],
        modelAnswer:
          "From F = S·e^((r+u−y)T): 79 = 80·e^((0.04+0.01−y)·1). So e^(0.05−y) = 79/80 = 0.9875, giving 0.05 − y = ln(0.9875) = −0.01258, hence y ≈ 0.0626, about 6.3%. The convenience yield exceeds financing plus storage, pushing the futures below spot—backwardation—signalling tight physical supply where holders place a high value on immediate access to the commodity.",
        markingGuide: [
          "Correct rearrangement for y.",
          "y ≈ 6.3%.",
          "Interprets backwardation / tight supply.",
        ],
      },
    ],
  }),
  "frm-p1-m8": examDepth({
    testPoints: [
      {
        id: "tp-futures-mechanics",
        title: "Futures vs forwards: margining and mark-to-market",
        priority: "critical",
        examinerFocus:
          "Whether you distinguish exchange-traded futures (daily margined, standardised, low counterparty risk via clearinghouse) from OTC forwards, and can compute variation margin and margin-call triggers.",
        typicalQuestionForms: [
          "'Compute the variation margin flow after a price move.'",
          "'Why can a futures price differ slightly from the equivalent forward?'",
          "'A margin account falls below maintenance — how much must be posted?'",
        ],
        mustKnow: [
          "Futures are marked to market daily; gains/losses flow through the margin account; forwards settle once at maturity.",
          "Initial margin sets the buffer; a drop below maintenance margin triggers a call back to the INITIAL level (variation margin).",
          "Futures ≈ forward except when rates and the underlying are correlated (daily settlement interacts with reinvestment).",
        ],
        scoringActions: [
          "Top up to INITIAL margin on a call, not to maintenance.",
          "Attribute futures-vs-forward differences to daily settlement + rate correlation.",
        ],
      },
      {
        id: "tp-swaps",
        title: "Interest-rate swap pricing and value",
        priority: "critical",
        examinerFocus:
          "Whether you can value a swap as fixed vs floating legs, know the par swap rate sets initial value to zero, and compute value after rates move.",
        typicalQuestionForms: [
          "'Compute the value of the fixed leg / the swap to the payer.'",
          "'Why is a newly-initiated at-market swap worth zero?'",
        ],
        mustKnow: [
          "Swap value (to fixed payer) = PV(floating) − PV(fixed); floating leg resets to par at each reset.",
          "The par swap rate equates PV of legs, so an at-market swap starts at zero value.",
          "A swap decomposes into a strip of forwards or a long/short bond pair.",
        ],
        scoringActions: [
          "Value floating leg as notional at the next reset (par + accrued).",
          "Discount fixed cash flows at the correct curve.",
        ],
      },
      {
        id: "tp-option-payoffs",
        title: "Option payoffs, moneyness and put-call parity",
        priority: "critical",
        examinerFocus:
          "Whether you can draw payoff/profit diagrams, apply put-call parity, and identify intrinsic vs time value.",
        typicalQuestionForms: [
          "'Use put-call parity to find the fair put price given the call.'",
          "'What is the maximum loss on this option strategy?'",
        ],
        mustKnow: [
          "Put-call parity (European, no dividends): C + PV(K) = P + S; with dividends subtract PV(divs) from S.",
          "Call payoff max(S−K,0); put payoff max(K−S,0); long option loss capped at premium.",
          "Option value = intrinsic + time value; time value decays to zero at expiry.",
        ],
        scoringActions: [
          "Rearrange put-call parity for the unknown leg carefully.",
          "State max loss/gain explicitly for strategy questions.",
        ],
      },
      {
        id: "tp-strategies",
        title: "Option strategies and hedging",
        priority: "medium",
        examinerFocus:
          "Whether you can recognise spreads, straddles, collars and protective puts and match a payoff profile or a hedging objective to the right combination.",
        typicalQuestionForms: [
          "'Which strategy profits from a large move in either direction?'",
          "'A holder wants downside protection while keeping upside — which combination and at what cost?'",
        ],
        mustKnow: [
          "Straddle/strangle profit from volatility; spreads cap cost and payoff; collars finance a put with a sold call.",
          "Protective put = long stock + long put (insurance, costs premium); covered call = long stock + short call (income, caps upside).",
          "Payoff shape (kinks at strikes) identifies the strategy.",
        ],
        scoringActions: [
          "Sketch the kinked payoff to name the strategy.",
          "State the premium cost / financing of any collar.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Derivatives mechanics are high-frequency; bank margin, parity and swap-value calculations at speed.",
      timeBudget: "~1.5 minutes per item.",
      answerSequence: [
        "Identify instrument (future/forward/swap/option) and what is asked (value/margin/payoff).",
        "Apply the exact relation (top-up to initial margin, PV(float)−PV(fixed), put-call parity).",
        "Check the sign from the stated perspective (payer/receiver, long/short).",
      ],
      qualityChecks: [
        "Margin call restores to INITIAL, not maintenance?",
        "Put-call parity rearranged correctly for the unknown?",
        "Swap value signed from the correct counterparty's view?",
      ],
    },
    studyNotes: [
      {
        id: "sn-futures",
        title: "Margining mechanics and the futures/forward gap",
        testPointIds: ["tp-futures-mechanics"],
        explanation: [
          "Futures neutralise counterparty risk by interposing a clearinghouse and marking to market daily: each day's gain is credited and each loss debited from the margin account. Initial margin is the up-front buffer; if losses erode the account below the maintenance margin, a margin call requires topping up all the way back to the initial margin, not merely to the maintenance level—a classic trap.",
          "Forwards, by contrast, are OTC, customised and settle only at maturity, so they carry accumulated counterparty exposure. The daily-settlement feature makes a futures price theoretically differ from an otherwise-identical forward when the underlying is correlated with interest rates, because daily cash flows are reinvested (or funded) at rates that co-move with the position.",
          "For most exam purposes futures and forwards are priced the same, and the difference is invoked only when the question stresses rate-correlation; recognising when the distinction matters is itself the tested point.",
        ],
        keyRules: [
          "Margin call restores the account to INITIAL margin.",
          "Futures: daily mark-to-market via clearinghouse; forwards: single settlement, OTC counterparty risk.",
          "Futures ≠ forward only when underlying correlates with rates.",
        ],
        workedProblem: {
          scenario:
            "A trader is long 1 futures contract (multiplier 100). Initial margin $6,000, maintenance $4,500. The futures price falls $20. Determine the margin balance and any call.",
          steps: [
            "Loss = $20 × 100 = $2,000 (long loses when price falls).",
            "New balance = $6,000 − $2,000 = $4,000.",
            "$4,000 < $4,500 maintenance ⇒ margin call triggered.",
            "Call amount tops up to INITIAL: $6,000 − $4,000 = $2,000.",
          ],
          conclusion:
            "The account falls to $4,000, breaches the $4,500 maintenance level, and the trader must post $2,000 to restore the full $6,000 initial margin.",
          markingNotes: [
            "Restore to initial ($6,000), not to maintenance.",
            "Long position loses on a price fall—sign check.",
          ],
        },
      },
      {
        id: "sn-swaps",
        title: "Valuing a plain-vanilla interest-rate swap",
        testPointIds: ["tp-swaps"],
        explanation: [
          "A payer swap (pay fixed, receive floating) is worth PV(floating leg) − PV(fixed leg). The floating leg is elegant: immediately after a reset it is worth par (notional) because it pays the current market rate, so its PV is the notional discounted from the next reset plus the upcoming coupon. The fixed leg is a standard annuity of coupons plus notional, discounted on the curve.",
          "At initiation the swap rate is chosen so the two legs have equal present value, making the swap worth zero—this is the par swap rate. As market rates move afterwards, the legs diverge and the swap acquires positive value to one side. Equivalently, a swap can be seen as a long/short pair of bonds or a strip of forward rate agreements.",
        ],
        keyRules: [
          "Payer swap value = PV(float) − PV(fixed).",
          "At-market swap starts at zero (par swap rate).",
          "Floating leg resets to par at each reset date.",
        ],
        formulas: [
          "V_payer = [notional·(1 + f·τ)·DF_next − notional·DF_next_reset-as-par] − Σ coupon·DFᵢ − notional·DF_N.",
          "Simplest: V_payer ≈ (Fixed_rate_now − Fixed_rate_orig)·annuity for a value change.",
        ],
        workedProblem: {
          scenario:
            "A 2-year annual-pay swap has $100m notional at a 3% fixed rate. One year later, with one payment left, the 1-year discount factor is 0.9615 (≈4% rate) and the floating leg is worth par at the next reset. Value the swap to the fixed payer.",
          steps: [
            "Fixed leg remaining = coupon + notional = $3m + $100m = $103m, discounted: 103 × 0.9615 = $99.03m.",
            "Floating leg = par at reset = $100m × 0.9615 + accrued float coupon (≈ notional value ≈ $100m today as it resets to par).",
            "Value to payer = PV(float) − PV(fixed) ≈ $100.0m − $99.03m ≈ +$0.97m.",
          ],
          conclusion:
            "The pay-fixed swap is worth about +$0.97m because rates rose to ~4% above the 3% fixed rate, so paying the below-market fixed rate is now advantageous.",
          markingNotes: [
            "Rates rising benefit the fixed PAYER (positive value).",
            "Floating leg ≈ par at reset simplifies the calculation.",
          ],
        },
      },
      {
        id: "sn-parity",
        title: "Put-call parity and option value decomposition",
        testPointIds: ["tp-option-payoffs"],
        explanation: [
          "Put-call parity is the no-arbitrage link between a European call and put on the same strike and maturity: C + PV(K) = P + S. It lets you price one option from the other, or build synthetic positions (a synthetic long stock is long call + short put + lend PV(K)). With dividends, replace S by S − PV(dividends).",
          "Any option's value splits into intrinsic value (the immediate exercise payoff, max(S−K,0) for a call) and time value (everything else, reflecting the chance of favourable moves before expiry). Time value is greatest at the money and decays to zero by expiry, when only intrinsic value remains.",
        ],
        keyRules: [
          "C + PV(K) = P + S (European, adjust S for dividends).",
          "Long option max loss = premium paid.",
          "Value = intrinsic + time value; time value → 0 at expiry.",
        ],
        formulas: [
          "P = C − S + PV(K); PV(K) = K·e^(−rT).",
        ],
        workedProblem: {
          scenario:
            "A European call struck at $100 (1 year) costs $8. The stock is $102, the risk-free rate is 5% continuous, and there are no dividends. Find the fair put price.",
          steps: [
            "PV(K) = 100·e^(−0.05) = 100·0.95123 = $95.123.",
            "Put-call parity: P = C − S + PV(K) = 8 − 102 + 95.123.",
            "P = $1.123.",
          ],
          conclusion:
            "The fair put price is about $1.12. The put is cheap because the stock is above the strike and PV(K) is discounted, so downside protection has little intrinsic value.",
          markingNotes: [
            "Discount the strike: PV(K) = K·e^(−rT).",
            "A negative would signal an arithmetic slip—recheck signs.",
          ],
        },
      },
      {
        id: "sn-strategies",
        title: "Reading option-strategy payoffs",
        testPointIds: ["tp-strategies"],
        explanation: [
          "Option strategies are identified by the kinks in their payoff at each strike. A straddle (long call + long put, same strike) profits from a big move either way and is a bet on volatility; a bull call spread (long low-strike call, short high-strike call) caps both cost and payoff and expresses a moderately bullish view.",
          "Hedging combinations trade off cost against protection. A protective put (long stock + long put) is insurance that caps downside at the strike but costs the premium; a covered call (long stock + short call) earns premium income but forfeits upside above the strike; a collar combines the two, using the sold call to finance the bought put, often at zero net premium in exchange for capped upside.",
        ],
        keyRules: [
          "Straddle/strangle = volatility bet; spreads cap cost and payoff.",
          "Protective put = insurance (cost = premium); covered call = income, capped upside.",
          "Collar finances the put with a sold call.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m8-1",
        testPointIds: ["tp-futures-mechanics"],
        style: "Calculation",
        question:
          "Initial margin is $10,000 and maintenance margin $7,500 on a long futures position (multiplier 50). The price drops $70 in a day. Compute the end-of-day balance and any required deposit.",
        answerPlan: [
          "Compute daily loss.",
          "Update balance.",
          "Check maintenance and compute top-up.",
        ],
        modelAnswer:
          "Daily loss = $70 × 50 = $3,500 for the long. Balance = $10,000 − $3,500 = $6,500, which is below the $7,500 maintenance margin, so a margin call is triggered. The trader must restore the account to the initial margin of $10,000, requiring a deposit of $10,000 − $6,500 = $3,500. Restoring only to maintenance would be incorrect.",
        markingGuide: [
          "Loss = $3,500; balance $6,500.",
          "Identifies breach of $7,500 maintenance.",
          "Top-up of $3,500 to initial margin.",
        ],
      },
      {
        id: "pp-m8-2",
        testPointIds: ["tp-option-payoffs"],
        style: "Calculation",
        question:
          "A stock is $48, a 6-month European put struck at $50 trades at $3.50, and the 6-month risk-free rate is 4% continuous (no dividends). Use put-call parity to find the fair call price.",
        answerPlan: [
          "Compute PV(K).",
          "Rearrange parity for C.",
          "Compute.",
        ],
        modelAnswer:
          "PV(K) = 50·e^(−0.04·0.5) = 50·e^(−0.02) = 50·0.98020 = $49.010. Put-call parity C = P + S − PV(K) = 3.50 + 48 − 49.010 = $2.49. The call is worth about $2.49; it has $0 intrinsic value (out of the money by $2) so its value is entirely time value, whereas the in-the-money put carries $2 of intrinsic value.",
        markingGuide: [
          "PV(K) correct (≈ $49.01).",
          "C = P + S − PV(K) rearrangement.",
          "C ≈ $2.49 with intrinsic/time-value note.",
        ],
      },
      {
        id: "pp-m8-3",
        testPointIds: ["tp-strategies", "tp-option-payoffs"],
        style: "Concept",
        question:
          "A portfolio manager holds a large equity position and wants downside protection over the next quarter at little or no cash outlay, accepting a cap on gains. Which strategy fits, how is it built, and what is the trade-off?",
        answerPlan: [
          "Identify collar.",
          "Describe construction.",
          "State the trade-off.",
        ],
        modelAnswer:
          "A collar fits: the manager buys a protective put below the current price to cap downside and sells a call above the current price whose premium finances the put, often achieving near-zero net cost (a 'costless collar'). The trade-off is that gains are capped at the sold call's strike—upside beyond it is forgone. Compared with a bare protective put, the collar removes the premium drag but sacrifices the upper tail of returns, which suits a manager prioritising capital preservation over further appreciation.",
        markingGuide: [
          "Identifies collar (long put + short call).",
          "Explains premium financing / low cost.",
          "States capped-upside trade-off.",
        ],
      },
    ],
  }),
  "frm-p1-m9": examDepth({
    testPoints: [
      {
        id: "tp-prepayment",
        title: "Mortgage prepayment and negative convexity",
        priority: "critical",
        examinerFocus:
          "Whether you understand that the borrower's prepayment option makes MBS negatively convex—price appreciation is capped as rates fall (refinancing) while extension risk bites as rates rise.",
        typicalQuestionForms: [
          "'Why does an MBS underperform a comparable bullet bond in a rally?'",
          "'Define contraction and extension risk.'",
        ],
        mustKnow: [
          "Prepayment is a call option held by the borrower; falling rates → faster prepay (contraction), rising rates → slower prepay (extension).",
          "Negative convexity: as yields fall, MBS price rises less than a bullet's would (the call caps it).",
          "PSA/CPR/SMM measure prepayment speed; option-adjusted spread (OAS) strips out the option to compare value.",
        ],
        scoringActions: [
          "Link falling rates to contraction and capped price upside.",
          "Cite OAS as the option-adjusted valuation metric.",
        ],
      },
      {
        id: "tp-securitization",
        title: "Securitization tranching and the waterfall",
        priority: "high",
        examinerFocus:
          "Whether you can describe how a pool is tranched into senior/mezzanine/equity, how the cash-flow waterfall and subordination create credit enhancement, and where losses hit first.",
        typicalQuestionForms: [
          "'Which tranche absorbs the first losses?'",
          "'How does subordination protect the senior tranche?'",
        ],
        mustKnow: [
          "Waterfall pays interest/principal top-down (senior first); losses hit bottom-up (equity first).",
          "Credit enhancement: subordination, overcollateralization, excess spread, reserve accounts.",
          "Attachment/detachment points define a tranche's loss band.",
        ],
        scoringActions: [
          "Equity/junior tranche takes first loss; senior is last.",
          "Compute tranche loss from pool loss vs attachment/detachment points.",
        ],
      },
      {
        id: "tp-cds",
        title: "Credit default swaps: mechanics and pricing intuition",
        priority: "high",
        examinerFocus:
          "Whether you know the CDS pays protection on a credit event, that the spread compensates for expected loss, and the credit-triangle relationship spread ≈ PD × LGD.",
        typicalQuestionForms: [
          "'Estimate the hazard/default probability implied by a CDS spread.'",
          "'Who pays whom on a credit event, and what is delivered?'",
        ],
        mustKnow: [
          "Protection buyer pays a periodic spread; on a credit event the seller pays (1 − recovery) × notional (cash or physical settlement).",
          "Credit triangle: spread ≈ hazard rate × (1 − recovery), so PD ≈ spread/(1 − recovery).",
          "CDS-bond basis = CDS spread − cash bond spread; non-zero basis signals frictions/arbitrage.",
        ],
        scoringActions: [
          "Use spread/(1−R) for the implied default intensity.",
          "State the settlement payment as (1−recovery)×notional.",
        ],
      },
      {
        id: "tp-structured-risk",
        title: "Correlation risk in structured credit",
        priority: "medium",
        examinerFocus:
          "Whether you grasp that senior-tranche value is highly sensitive to DEFAULT CORRELATION, and why underestimating correlation (as in the GFC) endangers 'safe' tranches.",
        typicalQuestionForms: [
          "'How does rising default correlation affect the senior vs equity tranche?'",
          "'Why did highly-rated tranches fail in a systemic downturn?'",
        ],
        mustKnow: [
          "Higher default correlation raises the probability of many simultaneous defaults, increasing senior-tranche loss probability (and, counterintuitively, can help the equity tranche).",
          "Senior tranches are effectively short a correlation option—systemic events cluster losses.",
          "Rating ≠ safety if correlation assumptions are wrong.",
        ],
        scoringActions: [
          "State that correlation ↑ hurts senior, can help equity tranche.",
          "Attribute historical failures to underestimated correlation, framed generically.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Mix of concept (prepayment, waterfall, correlation) and one credit-triangle calculation—bank both cleanly.",
      timeBudget: "~1.5 minutes per item.",
      answerSequence: [
        "Identify the product (MBS / ABS tranche / CDS) and the risk lens (prepayment/credit/correlation).",
        "Apply the mechanical rule (loss waterfall, spread ≈ PD×LGD, negative convexity).",
        "Sanity-check direction (falling rates → contraction; correlation ↑ → senior worse).",
      ],
      qualityChecks: [
        "Losses bottom-up (equity first), cash flows top-down?",
        "PD ≈ spread/(1−recovery) applied with correct recovery?",
        "Correlation direction correct for the named tranche?",
      ],
    },
    studyNotes: [
      {
        id: "sn-prepayment",
        title: "The prepayment option and negative convexity",
        testPointIds: ["tp-prepayment"],
        explanation: [
          "A mortgage borrower can prepay—effectively holding a call on their own debt. This option is what makes mortgage-backed securities negatively convex: when rates fall, borrowers refinance and return principal early (contraction), so investors get cash back to reinvest at the new, lower rates and the MBS price cannot rally as much as a comparable option-free bullet bond. When rates rise, prepayments slow and the expected life lengthens (extension), just when investors would prefer their cash back.",
          "Prepayment speed is quantified with conventions like CPR (annualised conditional prepayment rate), SMM (its monthly equivalent) and the PSA benchmark. Because a naive spread ignores the embedded option, valuation uses the option-adjusted spread (OAS), which removes the option's value so bonds with different prepayment profiles can be compared on a like-for-like basis.",
          "The practical lesson is that MBS reward investors with extra spread for selling the prepayment option, and that spread must be judged net of the option cost—an OAS, not a nominal spread.",
        ],
        keyRules: [
          "Falling rates → contraction (fast prepay); rising rates → extension.",
          "Negative convexity caps MBS upside in a rally.",
          "Use OAS to compare option-embedded bonds.",
        ],
      },
      {
        id: "sn-securitization",
        title: "Tranching, the waterfall and credit enhancement",
        testPointIds: ["tp-securitization"],
        explanation: [
          "Securitization pools cash flows and slices them into tranches with a strict priority. Cash flows travel top-down—senior tranches are paid interest and principal first—while losses travel bottom-up, hitting the equity (first-loss) tranche before the mezzanine and only reaching the senior tranche if losses exhaust everything below it. This subordination is the primary credit enhancement.",
          "Additional enhancement comes from overcollateralization (pool value exceeds notes issued), excess spread (pool yield above the cost of the notes) and reserve accounts. A tranche is defined by its attachment point (loss level at which it starts taking hits) and detachment point (loss level at which it is wiped out), so its loss can be computed directly from the pool's cumulative loss.",
        ],
        keyRules: [
          "Cash flows top-down; losses bottom-up (equity first).",
          "Subordination + overcollateralization + excess spread = enhancement.",
          "Tranche loss determined by attachment/detachment points.",
        ],
        formulas: [
          "Tranche loss % = min(max(PoolLoss − Attach, 0), Detach − Attach) / (Detach − Attach).",
        ],
        workedProblem: {
          scenario:
            "A mezzanine tranche has an attachment point of 5% and a detachment point of 10% of the pool. Cumulative pool losses reach 8%. What fraction of the mezzanine tranche is wiped out?",
          steps: [
            "Losses below 5% are absorbed by the equity tranche—mezzanine untouched until 5%.",
            "Losses in the 5%–10% band hit the mezzanine; realised pool loss is 8%.",
            "Mezzanine loss = (8% − 5%)/(10% − 5%) = 3%/5% = 60%.",
          ],
          conclusion:
            "60% of the mezzanine tranche is wiped out; the senior tranche (above 10%) is still untouched, illustrating how subordination protects seniority.",
          markingNotes: [
            "Only losses within the attachment–detachment band count.",
            "Senior remains intact until losses exceed 10%.",
          ],
        },
      },
      {
        id: "sn-cds",
        title: "CDS mechanics and the credit triangle",
        testPointIds: ["tp-cds"],
        explanation: [
          "In a credit default swap the protection buyer pays a periodic spread (the premium leg) and, if a defined credit event occurs, the protection seller pays (1 − recovery) × notional (the protection leg), settled physically by delivering a defaulted bond or in cash against an auction price. The buyer is effectively short the credit; the seller is long, like owning the bond without funding it.",
          "The pricing intuition is the credit triangle: over a period, the fair spread compensates for expected loss, so spread ≈ hazard (default intensity) × (1 − recovery). Rearranged, the market-implied default intensity is spread/(1 − recovery). The CDS-bond basis—the CDS spread minus the cash-bond spread—should be near zero; a persistent gap signals funding, liquidity or documentation frictions.",
        ],
        keyRules: [
          "Protection leg pays (1 − recovery) × notional on a credit event.",
          "Credit triangle: spread ≈ PD × (1 − recovery); PD ≈ spread/(1 − recovery).",
          "CDS-bond basis ≈ 0 in a frictionless market.",
        ],
        formulas: [
          "λ (hazard) ≈ spread / (1 − recovery).",
        ],
        workedProblem: {
          scenario:
            "A 5-year CDS trades at a spread of 240bp with an assumed recovery rate of 40%. Estimate the market-implied annual default probability (hazard rate), and state the protection payment on a $10m notional if default occurs.",
          steps: [
            "Credit triangle: λ ≈ spread/(1 − R) = 0.0240/(1 − 0.40) = 0.0240/0.60.",
            "λ ≈ 0.040 = 4.0% per year implied default intensity.",
            "Protection payment = (1 − 0.40) × $10m = $6.0m.",
          ],
          conclusion:
            "The implied annual default probability is roughly 4%, and a credit event would trigger a $6.0m payment from the protection seller—the loss-given-default on the notional.",
          markingNotes: [
            "Divide spread by (1 − recovery), not by recovery.",
            "Payment is LGD × notional = (1 − R) × notional.",
          ],
        },
      },
      {
        id: "sn-structured-risk",
        title: "Why correlation is the hidden risk in tranches",
        testPointIds: ["tp-structured-risk"],
        explanation: [
          "The value of a structured-credit tranche depends not just on individual default probabilities but on how correlated defaults are. Higher default correlation raises the chance of many names defaulting together; that fat 'all-fail' scenario is precisely what threatens the senior tranche, so senior investors are effectively short a correlation option. The equity tranche can actually benefit from higher correlation, because it also raises the chance that very few names default.",
          "This is why historically some highly-rated senior tranches suffered severe losses in a systemic downturn: the models had assumed low, benign default correlation, and when a common macro shock drove correlations toward one, losses clustered and breached the 'safe' attachment points. The generic lesson—without asserting specific figures—is that a rating is only as good as its correlation assumption, and stress scenarios must allow correlation to spike.",
        ],
        keyRules: [
          "Correlation ↑ hurts the senior tranche, can help the equity tranche.",
          "Senior tranche ≈ short a correlation option.",
          "Ratings depend on correlation assumptions; stress them.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m9-1",
        testPointIds: ["tp-cds"],
        style: "Calculation",
        question:
          "A CDS on a name trades at 150bp with an assumed 30% recovery. Estimate the implied annual default intensity and the payout on a $20m notional if a credit event occurs.",
        answerPlan: [
          "Apply credit triangle.",
          "Compute hazard.",
          "Compute payout.",
        ],
        modelAnswer:
          "Implied hazard λ ≈ spread/(1 − recovery) = 0.0150/(1 − 0.30) = 0.0150/0.70 ≈ 0.0214, about 2.14% per year. On a credit event the protection seller pays loss-given-default × notional = (1 − 0.30) × $20m = $14m. Note the payout uses the loss rate (70%), not the recovery rate, and the implied PD divides the spread by (1 − recovery).",
        markingGuide: [
          "λ ≈ 2.1% via spread/(1−R).",
          "Payout = $14m = (1−R)×notional.",
          "Correct use of loss vs recovery.",
        ],
      },
      {
        id: "pp-m9-2",
        testPointIds: ["tp-securitization"],
        style: "Calculation",
        question:
          "A senior tranche attaches at 12% and detaches at 100%. A mezzanine tranche attaches at 4% and detaches at 12%. Cumulative pool losses reach 9%. Compute the loss to each tranche.",
        answerPlan: [
          "Order the loss bands.",
          "Compute mezzanine loss.",
          "Confirm senior untouched.",
        ],
        modelAnswer:
          "Losses fill from the bottom. The first 4% is absorbed by the equity tranche (below the mezzanine). Losses from 4% to 12% hit the mezzanine; realised losses are 9%, so mezzanine loss = (9% − 4%)/(12% − 4%) = 5%/8% = 62.5% of the tranche. The senior tranche attaches at 12%, and since cumulative losses (9%) have not reached 12%, the senior tranche suffers zero loss—demonstrating the protection subordination provides.",
        markingGuide: [
          "Mezzanine loss = 62.5%.",
          "Senior loss = 0 (losses < 12% attachment).",
          "Correct bottom-up loss ordering.",
        ],
      },
      {
        id: "pp-m9-3",
        testPointIds: ["tp-prepayment", "tp-structured-risk"],
        style: "Concept",
        question:
          "Explain why an agency MBS tends to underperform a duration-matched Treasury when rates fall sharply, and separately why a AAA CDO senior tranche can be riskier than its rating suggests.",
        answerPlan: [
          "Explain negative convexity/contraction.",
          "Explain correlation risk on senior tranche.",
        ],
        modelAnswer:
          "When rates fall sharply, mortgage borrowers refinance and prepay, returning principal early (contraction). Because of this embedded call, the MBS is negatively convex and its price cannot appreciate as much as a duration-matched Treasury, so it underperforms in a rally. Separately, a AAA CDO senior tranche is exposed to default correlation: its rating relies on defaults being largely independent, but in a systemic downturn correlations rise toward one, clustering losses so that even the 'safe' senior attachment point can be breached. In both cases an embedded optionality/assumption—prepayment or correlation—makes the instrument riskier than a naive rate- or rating-based view implies.",
        markingGuide: [
          "Negative convexity/contraction explains MBS underperformance.",
          "Correlation risk explains senior-tranche fragility.",
          "Links both to embedded optionality/assumptions.",
        ],
      },
    ],
  }),
  "frm-p1-m10": examDepth({
    testPoints: [
      {
        id: "tp-pricing",
        title: "Bond pricing and yield mechanics",
        priority: "critical",
        examinerFocus:
          "Whether you can price a bond as PV of cash flows, and understand the inverse price-yield relationship and pull-to-par.",
        typicalQuestionForms: [
          "'Price this coupon bond at the given yield.'",
          "'A bond trades at a premium — what does that say about coupon vs yield?'",
        ],
        mustKnow: [
          "Price = Σ coupon/(1+y)^t + face/(1+y)^N; price and yield move inversely.",
          "Premium bond: coupon > yield; discount bond: coupon < yield; par: coupon = yield.",
          "As maturity approaches, price pulls to par ('pull to par').",
        ],
        scoringActions: [
          "Discount each cash flow at the correct per-period yield.",
          "Use premium/discount to sanity-check the price direction.",
        ],
      },
      {
        id: "tp-duration",
        title: "Duration: Macaulay, modified and effective",
        priority: "critical",
        examinerFocus:
          "Whether you can compute and apply duration to estimate price change, and distinguish modified (analytic) from effective (for bonds with options).",
        typicalQuestionForms: [
          "'Estimate the % price change for a 50bp yield rise using modified duration.'",
          "'Which duration measure is appropriate for a callable bond?'",
        ],
        mustKnow: [
          "Modified duration = Macaulay/(1+y/k); %ΔP ≈ −ModDur × Δy.",
          "Effective duration uses repriced values for up/down shocks and is required when cash flows change with rates (options).",
          "Dollar duration (DV01/PV01) = price change per 1bp; used for hedging.",
        ],
        scoringActions: [
          "Apply the minus sign: yields up → price down.",
          "Use effective duration for option-embedded bonds.",
        ],
      },
      {
        id: "tp-convexity",
        title: "Convexity and the second-order correction",
        priority: "high",
        examinerFocus:
          "Whether you can add the convexity term to the duration estimate and explain why duration alone understates price gains and overstates losses.",
        typicalQuestionForms: [
          "'Estimate the price change including convexity for a large yield move.'",
          "'Why is positive convexity valuable to a bondholder?'",
        ],
        mustKnow: [
          "%ΔP ≈ −ModDur·Δy + ½·Convexity·(Δy)²; convexity term is always positive for option-free bonds.",
          "Positive convexity: price rises more than duration predicts when yields fall, falls less when yields rise.",
          "Callable bonds/MBS can exhibit negative convexity.",
        ],
        scoringActions: [
          "Include the ½·C·(Δy)² term for large moves.",
          "Note convexity benefits the holder for option-free bonds.",
        ],
      },
      {
        id: "tp-key-rate",
        title: "Key-rate duration and curve risk",
        priority: "medium",
        examinerFocus:
          "Whether you understand that a single duration assumes parallel shifts and that key-rate/partial durations capture non-parallel (steepening/flattening) moves.",
        typicalQuestionForms: [
          "'Why is key-rate duration needed if you already have effective duration?'",
          "'A portfolio is duration-neutral but loses on a steepening — why?'",
        ],
        mustKnow: [
          "Effective duration assumes a parallel shift; real curves twist.",
          "Key-rate durations measure sensitivity to specific maturity points, summing to total duration.",
          "A duration-neutral book can still carry curve (slope/curvature) risk.",
        ],
        scoringActions: [
          "Attribute residual P&L on a duration-neutral book to curve risk.",
          "Use key-rate durations for non-parallel scenarios.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Valuation is the highest-yield Part I domain; duration/convexity approximations must be automatic and sign-correct.",
      timeBudget: "~1.5–2.0 minutes per item; multi-step convexity problems can take the upper end.",
      answerSequence: [
        "Identify whether pricing, duration estimate, or convexity correction is asked.",
        "Write the approximation with the minus sign and convert bp to decimals.",
        "Add the convexity term for large moves; check the direction of the price change.",
      ],
      qualityChecks: [
        "Minus sign on the duration term (yields up ⇒ price down)?",
        "Δy in decimals (50bp = 0.005), squared correctly in the convexity term?",
        "Effective (not modified) duration for option bonds?",
      ],
    },
    studyNotes: [
      {
        id: "sn-pricing",
        title: "Pricing, premium/discount and pull to par",
        testPointIds: ["tp-pricing"],
        explanation: [
          "A bond's price is the present value of its coupons and face value discounted at the yield per period. The price-yield relationship is inverse and convex: as yields rise, prices fall, but by progressively less. Whether a bond trades at a premium or discount is fully determined by the coupon relative to the yield—coupon above yield means a premium (you pay extra for above-market coupons), coupon below yield means a discount.",
          "Over time, a bond's price drifts toward its face value—'pull to par'—because at maturity the investor receives par regardless of the path. A premium bond's price declines to par and a discount bond's rises to par, an effect distinct from yield-driven moves and useful when decomposing return into carry, rolldown and price change.",
        ],
        keyRules: [
          "Price and yield move inversely (and convexly).",
          "Coupon > yield ⇒ premium; coupon < yield ⇒ discount.",
          "Prices pull to par as maturity nears.",
        ],
        formulas: [
          "P = Σ_{t=1}^{N} C/(1+y)^t + F/(1+y)^N.",
        ],
        workedProblem: {
          scenario:
            "Price a 3-year annual bond with a 5% coupon and $1,000 face at a yield of 6%.",
          steps: [
            "Coupons of $50 in years 1–3 and $1,000 face in year 3.",
            "PV = 50/1.06 + 50/1.06² + 1,050/1.06³.",
            "= 47.17 + 44.50 + 881.60.",
            "= $973.27.",
          ],
          conclusion:
            "The bond is worth about $973.27, a discount to par, correctly because its 5% coupon is below the 6% yield.",
          markingNotes: [
            "Add face to the final coupon before discounting the last period.",
            "Discount < par confirms coupon < yield.",
          ],
        },
      },
      {
        id: "sn-duration",
        title: "Duration measures and their uses",
        testPointIds: ["tp-duration"],
        explanation: [
          "Macaulay duration is the weighted-average time to receive a bond's cash flows; modified duration adjusts it by dividing by (1 + y/k) and gives the first-order sensitivity of price to yield: the approximate percentage price change is minus modified duration times the yield change. The minus sign encodes the inverse price-yield relationship and is a frequent lost mark.",
          "Modified duration assumes fixed cash flows, so it is invalid when cash flows themselves respond to rates—callable bonds, putables and MBS. For those, effective duration is used, computed by fully repricing the bond under small up and down yield shocks and measuring the average price response. Dollar duration (DV01/PV01), the price change per basis point, translates duration into hedgeable currency terms.",
        ],
        keyRules: [
          "%ΔP ≈ −ModDur × Δy.",
          "ModDur = Macaulay/(1 + y/k).",
          "Effective duration for option-embedded bonds; DV01 for hedging.",
        ],
        formulas: [
          "Effective duration = (P₋ − P₊)/(2·P₀·Δy).",
          "DV01 = ModDur × P × 0.0001.",
        ],
        workedProblem: {
          scenario:
            "A bond has a modified duration of 7.2 and trades at $98. Estimate the percentage and dollar price change for a 40bp rise in yield, and its DV01.",
          steps: [
            "%ΔP ≈ −7.2 × 0.0040 = −0.0288 = −2.88%.",
            "Dollar change ≈ −2.88% × $98 = −$2.82.",
            "DV01 = 7.2 × 98 × 0.0001 = $0.0706 per 1bp.",
          ],
          conclusion:
            "A 40bp yield rise lowers the price about 2.88% (−$2.82), and each basis point moves the price roughly $0.071—the negative sign confirming price falls as yields rise.",
          markingNotes: [
            "Convert 40bp to 0.0040.",
            "Keep the minus sign; DV01 uses 0.0001 (1bp).",
          ],
        },
      },
      {
        id: "sn-convexity",
        title: "Adding convexity for accuracy",
        testPointIds: ["tp-convexity"],
        explanation: [
          "Duration is a straight-line approximation to a curved price-yield relationship, so for larger yield moves it errs. The second-order convexity term corrects this: the percentage price change is approximately minus modified duration times the yield change plus one-half times convexity times the yield change squared. For option-free bonds convexity is positive, so this term is always additive—duration alone understates gains when yields fall and overstates losses when yields rise.",
          "Positive convexity is therefore desirable: for a given duration, a more convex bond gains more and loses less for equal-sized yield moves. The exception is negative convexity in callable bonds and MBS, where the embedded short option flips the sign over part of the yield range and duration then overstates the price gain in a rally.",
        ],
        keyRules: [
          "%ΔP ≈ −ModDur·Δy + ½·Convexity·(Δy)².",
          "Positive convexity ⇒ gains > duration predicts, losses < duration predicts.",
          "Callable/MBS can be negatively convex.",
        ],
        formulas: [
          "%ΔP ≈ −D·Δy + ½·C·(Δy)².",
        ],
        workedProblem: {
          scenario:
            "A bond has modified duration 6.0 and convexity 80. Estimate the percentage price change for a 200bp yield increase, with and without the convexity term.",
          steps: [
            "Duration term = −6.0 × 0.02 = −0.12 = −12.0%.",
            "Convexity term = ½ × 80 × (0.02)² = 0.5 × 80 × 0.0004 = 0.016 = +1.6%.",
            "Total ≈ −12.0% + 1.6% = −10.4%.",
          ],
          conclusion:
            "Duration alone predicts a 12.0% fall, but convexity softens it to about 10.4%—showing that ignoring convexity overstates the loss on a large upward yield move.",
          markingNotes: [
            "Square Δy (0.02² = 0.0004) in the convexity term.",
            "Convexity term is positive here, reducing the predicted loss.",
          ],
        },
      },
      {
        id: "sn-keyrate",
        title: "Key-rate durations and curve risk",
        testPointIds: ["tp-key-rate"],
        explanation: [
          "A single duration number assumes the whole yield curve shifts in parallel, but real curves steepen, flatten and twist. Key-rate (partial) durations measure a bond or portfolio's sensitivity to changes at specific maturity points on the curve—2y, 5y, 10y, 30y—while holding the others fixed; they sum to the total effective duration.",
          "This matters because a portfolio can be constructed to have zero net duration yet still lose money when the curve changes shape—for example, being long the short end and short the long end is duration-neutral but exposed to steepening. Key-rate durations reveal and let you hedge these non-parallel exposures that a single duration hides.",
        ],
        keyRules: [
          "Single duration assumes parallel shifts.",
          "Key-rate durations capture non-parallel (curve) risk and sum to total duration.",
          "Duration-neutral ≠ curve-risk-neutral.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m10-1",
        testPointIds: ["tp-duration", "tp-convexity"],
        style: "Calculation",
        question:
          "A bond has modified duration 8.5, convexity 120, and price $95. Estimate the percentage and dollar price change for a 100bp fall in yield, including convexity.",
        answerPlan: [
          "Duration term (yields fall).",
          "Convexity term.",
          "Combine and convert to dollars.",
        ],
        modelAnswer:
          "Δy = −0.01 (yields fall). Duration term = −8.5 × (−0.01) = +0.085 = +8.5%. Convexity term = ½ × 120 × (0.01)² = 0.5 × 120 × 0.0001 = 0.006 = +0.6%. Total ≈ +9.1%, so the dollar change ≈ 9.1% × $95 ≈ +$8.65. Both terms are positive because yields fell and convexity always adds for an option-free bond, so duration alone (+8.5%) understates the gain.",
        markingGuide: [
          "Correct sign: falling yields raise price.",
          "Convexity term +0.6% via ½·C·(Δy)².",
          "Total ≈ +9.1% / ≈ +$8.65.",
        ],
      },
      {
        id: "pp-m10-2",
        testPointIds: ["tp-pricing"],
        style: "Calculation",
        question:
          "Price a 2-year annual 4% coupon bond ($100 face) at a 3% yield, and state whether it is a premium or discount and why.",
        answerPlan: [
          "Discount cash flows.",
          "Sum.",
          "Classify premium/discount.",
        ],
        modelAnswer:
          "P = 4/1.03 + 104/1.03² = 3.883 + 98.030 = $101.91. The bond trades at a premium because its 4% coupon exceeds the 3% yield—investors pay more than par for the above-market coupon stream. As it approaches maturity the price will pull down toward $100.",
        markingGuide: [
          "Correct discounting (≈ $101.91).",
          "Adds face to year-2 coupon.",
          "Correct premium classification (coupon > yield).",
        ],
      },
      {
        id: "pp-m10-3",
        testPointIds: ["tp-key-rate"],
        style: "Concept",
        question:
          "A bond portfolio is constructed to be duration-neutral against a benchmark, yet it loses money when the yield curve flattens. Explain how this is possible and what tool would have flagged the exposure.",
        answerPlan: [
          "Explain parallel-shift assumption.",
          "Explain curve exposure.",
          "Name key-rate durations.",
        ],
        modelAnswer:
          "Overall (effective) duration only measures sensitivity to a parallel shift of the whole curve. A portfolio can net to zero total duration while still holding offsetting positions at different maturities—say long the long end and short the short end—which leaves it exposed to a change in curve shape. When the curve flattens, those positions do not offset and the portfolio loses. Key-rate (partial) durations would have flagged this by showing non-zero sensitivities at individual maturity points that a single duration figure conceals, allowing the manager to hedge the curve risk explicitly.",
        markingGuide: [
          "Identifies parallel-shift limitation of single duration.",
          "Explains curve (shape) exposure of a duration-neutral book.",
          "Names key-rate durations as the diagnostic.",
        ],
      },
    ],
  }),
  "frm-p1-m11": examDepth({
    testPoints: [
      {
        id: "tp-bsm",
        title: "Black-Scholes-Merton inputs and intuition",
        priority: "critical",
        examinerFocus:
          "Whether you know the five inputs, the direction each moves option value, and that N(d₂) is the risk-neutral probability of finishing in the money.",
        typicalQuestionForms: [
          "'Which input increase raises a call's value?'",
          "'Interpret N(d₁) and N(d₂).'",
        ],
        mustKnow: [
          "Inputs: S, K, T, σ, r (and dividends). Call value rises with S, σ, T, r; falls with K and dividends.",
          "N(d₂) = risk-neutral P(exercise); N(d₁) = call delta (with dividends, e^(−qT)N(d₁)).",
          "BSM assumes lognormal prices, constant σ and r, no arbitrage, continuous trading, European exercise.",
        ],
        scoringActions: [
          "Recall σ↑ raises BOTH calls and puts (more optionality).",
          "State the BSM assumptions when asked about limitations.",
        ],
      },
      {
        id: "tp-greeks",
        title: "The Greeks: delta, gamma, vega, theta, rho",
        priority: "critical",
        examinerFocus:
          "Whether you can define each Greek, use delta for hedging, and understand gamma's role in re-hedging and the gamma/theta trade-off.",
        typicalQuestionForms: [
          "'How many shares to delta-hedge this option position?'",
          "'Why must a delta hedge be rebalanced, and what Greek governs how often?'",
        ],
        mustKnow: [
          "Delta = ∂V/∂S (hedge ratio); gamma = ∂delta/∂S (curvature, largest near ATM/near expiry).",
          "Vega = sensitivity to σ; theta = time decay (usually negative for long options); rho = sensitivity to r.",
          "Long options are long gamma/vega but pay theta; delta-hedged long-gamma positions profit from realised moves.",
        ],
        scoringActions: [
          "Hedge shares = −delta × contract size × number of options.",
          "Attribute frequent re-hedging to high gamma.",
        ],
      },
      {
        id: "tp-binomial",
        title: "Binomial option pricing and risk-neutral valuation",
        priority: "high",
        examinerFocus:
          "Whether you can build a one/two-step tree, compute the risk-neutral probability, and value American options via early-exercise checks.",
        typicalQuestionForms: [
          "'Value the option using a one-step binomial tree.'",
          "'When is early exercise of an American option optimal?'",
        ],
        mustKnow: [
          "Risk-neutral prob p = (e^(rΔt) − d)/(u − d); value = e^(−rΔt)[p·V_u + (1−p)·V_d].",
          "American options: at each node compare continuation value to immediate exercise; take the larger.",
          "Early exercise: American calls on non-dividend stocks are never exercised early; American puts can be.",
        ],
        scoringActions: [
          "Compute p first, then discount expected payoff.",
          "Check early exercise at each node for American options.",
        ],
      },
      {
        id: "tp-vol",
        title: "Implied volatility and the volatility smile",
        priority: "medium",
        examinerFocus:
          "Whether you understand implied vol backs out from market prices, and that the smile/skew reveals BSM's lognormal assumption failing (fat tails, crash fear).",
        typicalQuestionForms: [
          "'What does a steep equity-index volatility skew imply?'",
          "'Why does implied vol differ across strikes if BSM holds?'",
        ],
        mustKnow: [
          "Implied vol is the σ that equates BSM price to market price.",
          "Equity indices show a skew (higher implied vol for low strikes) reflecting crash risk/fat left tails.",
          "A smile/skew is evidence that returns are not lognormal as BSM assumes.",
        ],
        scoringActions: [
          "Read a steep low-strike skew as crash-risk pricing.",
          "Attribute the smile to non-lognormal returns.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Option maths is calculation-dense; lock the binomial p-formula and delta-hedge share count for guaranteed marks.",
      timeBudget: "~1.7 minutes per item; binomial trees can take the upper end.",
      answerSequence: [
        "Identify the tool (BSM intuition / Greek / binomial / implied vol).",
        "For trees, compute p, then discount; for hedges, compute delta × size.",
        "Sign-check theta (negative for long), delta direction, and vol effects.",
      ],
      qualityChecks: [
        "σ↑ raises calls AND puts?",
        "Binomial p = (e^(rΔt) − d)/(u − d), then discount at e^(−rΔt)?",
        "Delta-hedge shares opposite in sign to the option position?",
      ],
    },
    studyNotes: [
      {
        id: "sn-bsm",
        title: "BSM inputs, N(d₂) and assumptions",
        testPointIds: ["tp-bsm"],
        explanation: [
          "Black-Scholes-Merton values a European option from five inputs. A call rises in value with the underlying price, with volatility, with time to expiry and with the risk-free rate, and falls with the strike and with dividends; a put's directions differ except that both calls and puts gain value from higher volatility, because more dispersion increases the chance of a large favourable move while the downside is capped.",
          "The formula's two normal terms have clean meanings. N(d₂) is the risk-neutral probability the option finishes in the money, and N(d₁) is the call's delta (scaled by e^(−qT) with dividends). This is why the call price can be read as the present value of receiving the stock if exercised minus paying the strike, each weighted by its risk-neutral probability.",
          "BSM's power comes with strong assumptions: lognormally distributed prices, constant volatility and interest rate, no arbitrage, continuous costless trading and European exercise. When the exam asks about limitations, cite these—especially constant volatility, which the observed volatility smile contradicts.",
        ],
        keyRules: [
          "Call value ↑ with S, σ, T, r; ↓ with K and dividends.",
          "N(d₂) = risk-neutral P(exercise); N(d₁) = delta.",
          "Assumes lognormal prices, constant σ and r.",
        ],
        formulas: [
          "C = S·e^(−qT)N(d₁) − K·e^(−rT)N(d₂).",
          "d₁ = [ln(S/K) + (r − q + σ²/2)T]/(σ√T); d₂ = d₁ − σ√T.",
        ],
      },
      {
        id: "sn-greeks",
        title: "Greeks and dynamic hedging",
        testPointIds: ["tp-greeks"],
        explanation: [
          "Delta is the first-order price sensitivity and the hedge ratio: to neutralise an option position you hold minus-delta units of the underlying per option. But delta itself changes as the underlying moves, and that rate of change is gamma. High gamma—largest for at-the-money options near expiry—means the hedge drifts quickly and must be rebalanced often to stay delta-neutral.",
          "The other Greeks round out the picture: vega measures sensitivity to volatility, theta measures time decay (typically negative for a long option, which loses value as expiry nears), and rho measures sensitivity to interest rates. There is a fundamental trade-off: a long-option position is long gamma and long vega but pays theta, so a delta-hedged long-gamma book profits when realised volatility exceeds the implied volatility it paid for, and bleeds theta otherwise.",
        ],
        keyRules: [
          "Delta-hedge: hold −delta × size per option.",
          "Gamma governs re-hedging frequency (peaks ATM/near expiry).",
          "Long options: +gamma, +vega, −theta.",
        ],
        formulas: [
          "Hedge shares = −Δ × contract multiplier × #options.",
        ],
        workedProblem: {
          scenario:
            "A trader is short 200 call options (each on 100 shares) with a delta of 0.45. How many shares must be traded to delta-hedge, and what does gamma imply for maintenance?",
          steps: [
            "Position delta = short 200 × 100 × 0.45 = −9,000 (short calls are short delta).",
            "To hedge, offset −9,000 with +9,000 delta ⇒ BUY 9,000 shares.",
            "Because short calls are short gamma, as the stock rises delta grows, requiring buying more (chasing the market) to stay neutral.",
          ],
          conclusion:
            "The trader buys 9,000 shares to delta-hedge; being short gamma, they must keep re-hedging in the direction of price moves, incurring losses in volatile markets (offset by the theta earned).",
          markingNotes: [
            "Short calls ⇒ short delta ⇒ buy shares to hedge.",
            "Short gamma means re-hedging buys high/sells low.",
          ],
        },
      },
      {
        id: "sn-binomial",
        title: "Binomial trees and risk-neutral valuation",
        testPointIds: ["tp-binomial"],
        explanation: [
          "The binomial model values an option by assuming the underlying moves up by factor u or down by factor d each step. The risk-neutral probability p = (e^(rΔt) − d)/(u − d) is not a real-world probability; it is the weighting that, combined with discounting at the risk-free rate, prices the option by no-arbitrage. The option value at a node is the discounted expected payoff, e^(−rΔt)[p·V_up + (1−p)·V_down].",
          "For American options the tree also checks early exercise: at each node the value is the greater of the continuation value and the immediate exercise payoff. Theory says an American call on a non-dividend-paying stock is never exercised early (its value equals the European call), whereas an American put can be optimally exercised early, so the early-exercise check binds for puts and for calls on dividend payers.",
        ],
        keyRules: [
          "p = (e^(rΔt) − d)/(u − d); value = e^(−rΔt)[pV_u + (1−p)V_d].",
          "American value = max(continuation, immediate exercise) at each node.",
          "American call (no dividends) = European; American put may exercise early.",
        ],
        formulas: [
          "p = (e^(rΔt) − d)/(u − d).",
        ],
        workedProblem: {
          scenario:
            "A stock is $50; in one step it goes up 10% (u=1.1) or down 10% (d=0.9). The risk-free rate is 4% for the one-year step. Value a European call struck at $50.",
          steps: [
            "Up price $55 → payoff $5; down price $45 → payoff $0.",
            "p = (e^(0.04) − 0.9)/(1.1 − 0.9) = (1.04081 − 0.9)/0.2 = 0.14081/0.2 = 0.7041.",
            "Value = e^(−0.04)[0.7041×5 + 0.2959×0] = 0.96079 × 3.5203.",
            "= $3.382.",
          ],
          conclusion:
            "The one-step call is worth about $3.38. The risk-neutral probability (0.704) differs from any real-world probability; it is purely the no-arbitrage weight.",
          markingNotes: [
            "Compute p before discounting.",
            "Discount at e^(−rΔt), not (1+r).",
          ],
        },
      },
      {
        id: "sn-vol",
        title: "Implied volatility and the smile",
        testPointIds: ["tp-vol"],
        explanation: [
          "Implied volatility is the volatility input that makes the BSM price equal the option's market price; it is the market's forward-looking volatility view backed out from prices. If BSM held exactly, implied vol would be identical across all strikes and maturities for a given underlying.",
          "In reality, plotting implied vol against strike produces a smile or, for equity indices, a downward skew—out-of-the-money puts (low strikes) carry higher implied vol than at-the-money options. This reflects demand for crash protection and the fact that returns have fatter left tails than the lognormal assumption allows. The smile/skew is thus direct market evidence that BSM's constant-volatility, lognormal model is misspecified in the tails.",
        ],
        keyRules: [
          "Implied vol equates BSM price to the market price.",
          "Equity skew: higher implied vol at low strikes (crash fear).",
          "A smile/skew contradicts BSM's lognormal assumption.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m11-1",
        testPointIds: ["tp-binomial"],
        style: "Calculation",
        question:
          "A stock at $100 can rise to $120 (u=1.2) or fall to $85 (d=0.85) over one period. The one-period risk-free rate is 3% (continuous). Value a European put struck at $100.",
        answerPlan: [
          "Payoffs at each node.",
          "Compute p.",
          "Discount expected payoff.",
        ],
        modelAnswer:
          "Up payoff = max(100 − 120, 0) = 0; down payoff = max(100 − 85, 0) = 15. p = (e^(0.03) − 0.85)/(1.2 − 0.85) = (1.03045 − 0.85)/0.35 = 0.18045/0.35 = 0.5156. Put value = e^(−0.03)[0.5156×0 + 0.4844×15] = 0.97045 × 7.266 = $7.05. The put derives all its value from the down state, weighted by the risk-neutral probability and discounted.",
        markingGuide: [
          "Correct payoffs (0 and 15).",
          "p ≈ 0.516.",
          "Put value ≈ $7.05.",
        ],
      },
      {
        id: "pp-m11-2",
        testPointIds: ["tp-greeks"],
        style: "Calculation + concept",
        question:
          "A trader is long 500 put options (each on 100 shares) with delta −0.60. State the delta-hedge trade, and explain the gamma/theta trade-off the trader now faces.",
        answerPlan: [
          "Compute position delta.",
          "State hedge trade.",
          "Explain gamma/theta.",
        ],
        modelAnswer:
          "Position delta = 500 × 100 × (−0.60) = −30,000. To delta-hedge, the trader offsets −30,000 by buying 30,000 shares (+30,000 delta). Being long puts, the trader is long gamma and long vega but short theta: the delta-hedged book profits if realised volatility exceeds the implied volatility paid, because large moves in either direction let the trader re-hedge at a profit (buy low/sell high). The cost is time decay—if the market stays quiet, theta erodes the option value each day. It is a bet that realised volatility beats implied.",
        markingGuide: [
          "Position delta −30,000; buy 30,000 shares.",
          "Long gamma/vega, short theta.",
          "Explains realised-vs-implied volatility bet.",
        ],
      },
      {
        id: "pp-m11-3",
        testPointIds: ["tp-vol", "tp-bsm"],
        style: "Concept",
        question:
          "An equity-index option market shows a pronounced skew: 90%-strike puts trade at 28% implied vol while at-the-money options trade at 20%. What does this reveal about market beliefs and about the BSM model?",
        answerPlan: [
          "Interpret the skew.",
          "Explain crash-risk pricing.",
          "State BSM implication.",
        ],
        modelAnswer:
          "The higher implied vol on low-strike puts means the market pays a premium for downside protection, pricing in a fatter left tail than a lognormal distribution implies—i.e., it fears large crashes more than symmetric moves. This skew is direct evidence that the BSM assumption of a single constant volatility and lognormal returns is violated: if BSM held, implied vol would be flat across strikes. Practically, using a single at-the-money vol would underprice out-of-the-money puts and understate crash risk, which is why practitioners use the full volatility surface.",
        markingGuide: [
          "Interprets skew as crash-risk / fat-left-tail pricing.",
          "States it contradicts BSM constant-vol/lognormal assumption.",
          "Notes practical mispricing of tails from a single vol.",
        ],
      },
    ],
  }),
  "frm-p1-m12": examDepth({
    testPoints: [
      {
        id: "tp-var-def",
        title: "VaR definition and parametric computation",
        priority: "critical",
        examinerFocus:
          "Whether you can state VaR precisely (loss threshold at a confidence level over a horizon) and compute parametric VaR, including scaling across horizons.",
        typicalQuestionForms: [
          "'Compute the 1-day 99% VaR of this position.'",
          "'Scale a 1-day VaR to 10 days.'",
        ],
        mustKnow: [
          "Parametric VaR = z_α × σ × value (mean often assumed zero for short horizons); z = 1.65 (95%), 2.33 (99%).",
          "Horizon scaling uses √time under i.i.d.: VaR_T = VaR_1 × √T.",
          "VaR is a threshold, not the expected loss beyond it, and says nothing about tail severity.",
        ],
        scoringActions: [
          "Use the correct one-tailed z for the confidence level.",
          "Scale by √T, not T, for horizon conversion.",
        ],
      },
      {
        id: "tp-var-methods",
        title: "Historical, parametric and Monte Carlo VaR",
        priority: "critical",
        examinerFocus:
          "Whether you can contrast the three methods and their assumptions—parametric assumes a distribution, historical uses the empirical record, Monte Carlo simulates from a model.",
        typicalQuestionForms: [
          "'Which VaR method best captures fat tails without assuming normality?'",
          "'A portfolio has options — which method is most appropriate and why?'",
        ],
        mustKnow: [
          "Parametric: fast, assumes distribution (usually normal), poor for fat tails/nonlinearity.",
          "Historical simulation: no distribution assumed but assumes the past represents the future; limited by window length.",
          "Monte Carlo: flexible, handles nonlinearity/path-dependence, but model- and computation-intensive.",
        ],
        scoringActions: [
          "Match nonlinear/option portfolios to full revaluation (historical/MC).",
          "State the key assumption/limitation of the chosen method.",
        ],
      },
      {
        id: "tp-es",
        title: "Expected shortfall and coherence",
        priority: "high",
        examinerFocus:
          "Whether you know ES is the average loss beyond VaR, that it is a coherent (sub-additive) measure while VaR is not, and can compute ES for simple cases.",
        typicalQuestionForms: [
          "'Compute the expected shortfall given the tail losses.'",
          "'Why is ES preferred to VaR under Basel FRTB?'",
        ],
        mustKnow: [
          "ES = E[loss | loss > VaR]; always ≥ VaR at the same confidence.",
          "ES is sub-additive (diversification never increases it); VaR can violate sub-additivity.",
          "Coherence requires monotonicity, translation invariance, positive homogeneity and sub-additivity.",
        ],
        scoringActions: [
          "Average the tail losses beyond VaR for ES.",
          "Cite sub-additivity as ES's advantage over VaR.",
        ],
      },
      {
        id: "tp-aggregation",
        title: "Aggregating VaR and diversification",
        priority: "medium",
        examinerFocus:
          "Whether you can aggregate component VaRs using correlation and interpret marginal/component/incremental VaR.",
        typicalQuestionForms: [
          "'Compute portfolio VaR from two position VaRs and their correlation.'",
          "'Which position contributes most to portfolio VaR?'",
        ],
        mustKnow: [
          "Portfolio VaR = √(VaR₁² + VaR₂² + 2ρ·VaR₁·VaR₂) for normal, mean-zero positions.",
          "Diversified VaR ≤ sum of individual VaRs; equal only at ρ = 1.",
          "Component VaR sums to total VaR; marginal VaR is the derivative w.r.t. a position.",
        ],
        scoringActions: [
          "Aggregate VaRs like standard deviations (with the cross term).",
          "Use component VaR for risk attribution.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "The signature Part I risk-measurement domain; VaR/ES calculations and method trade-offs are near-certain to appear.",
      timeBudget: "~1.6 minutes per item.",
      answerSequence: [
        "State the confidence level and horizon; pick the right z and scaling.",
        "Choose the method's formula (parametric/aggregation/ES tail average).",
        "Check coherence/diversification direction and units.",
      ],
      qualityChecks: [
        "One-tailed z correct (1.65/2.33)?",
        "Horizon scaled by √T, not T?",
        "ES ≥ VaR and diversified VaR ≤ sum?",
      ],
    },
    studyNotes: [
      {
        id: "sn-var-def",
        title: "Defining and computing VaR",
        testPointIds: ["tp-var-def"],
        explanation: [
          "Value-at-Risk answers a precise question: over a given horizon and at a given confidence level, what loss will not be exceeded? A '1-day 99% VaR of $10m' means there is a 1% chance of losing more than $10m in a day. Crucially VaR is a quantile—a threshold—not the expected loss, and it is silent about how bad losses beyond it can be.",
          "Parametric (variance-covariance) VaR assumes returns are normal, so VaR equals the one-tailed z-score times the portfolio's standard deviation times its value, usually taking the mean as zero over short horizons. The confidence level fixes z: 1.65 for 95% and 2.33 for 99% (one-tailed).",
          "To convert horizons under the i.i.d. assumption, scale by the square root of time: a 10-day VaR is the 1-day VaR times √10. Scaling by T rather than √T is a classic error that overstates risk.",
        ],
        keyRules: [
          "Parametric VaR = z_α × σ × value.",
          "z = 1.65 (95%), 2.33 (99%), one-tailed.",
          "Horizon scaling: VaR_T = VaR_1 × √T.",
        ],
        formulas: [
          "VaR = z_α · σ_portfolio; VaR_T = VaR_1·√T.",
        ],
        workedProblem: {
          scenario:
            "A $50m portfolio has a daily return standard deviation of 1.2%. Compute the 1-day 99% VaR and the 10-day 99% VaR (assume zero mean, i.i.d.).",
          steps: [
            "Daily σ in dollars = 1.2% × $50m = $0.6m.",
            "1-day 99% VaR = 2.33 × $0.6m = $1.398m ≈ $1.40m.",
            "10-day VaR = $1.398m × √10 = $1.398m × 3.162 = $4.42m.",
          ],
          conclusion:
            "The 1-day 99% VaR is about $1.40m and the 10-day about $4.42m. The horizon scaled by √10, not 10, which would have wrongly given ~$14m.",
          markingNotes: [
            "Use z = 2.33 for 99% one-tailed.",
            "Scale by √10 ≈ 3.16, not 10.",
          ],
        },
      },
      {
        id: "sn-var-methods",
        title: "Choosing a VaR method",
        testPointIds: ["tp-var-methods"],
        explanation: [
          "The three methods trade off speed, assumptions and flexibility. Parametric VaR is fastest and analytic but assumes a distribution (typically normal), so it understates risk for fat-tailed or option-heavy portfolios whose payoffs are nonlinear. Historical simulation makes no distributional assumption—it reprices the current portfolio using actual past return scenarios—but it assumes the observed window is representative of the future and is constrained by how much history is available.",
          "Monte Carlo simulation is the most flexible: it generates thousands of scenarios from a specified model, handling nonlinearity, path-dependence and complex payoffs, at the cost of model risk and heavy computation. For a portfolio containing options, full-revaluation approaches (historical or Monte Carlo) are preferred because the delta-normal parametric method mishandles the curvature (gamma) of option payoffs.",
        ],
        keyRules: [
          "Parametric: fast, distribution-dependent, weak on fat tails/options.",
          "Historical: assumption-light but window-bound and backward-looking.",
          "Monte Carlo: flexible for nonlinearity, but model- and compute-heavy.",
        ],
      },
      {
        id: "sn-es",
        title: "Expected shortfall and coherence",
        testPointIds: ["tp-es"],
        explanation: [
          "Expected shortfall (conditional VaR) fixes VaR's blindness to tail severity: it is the average loss given that the loss exceeds VaR, so it always equals or exceeds VaR at the same confidence level and reflects how deep the tail is. This is why Basel's market-risk framework (FRTB) shifted from VaR to ES for regulatory capital.",
          "ES is also a coherent risk measure. Coherence requires four properties—monotonicity, translation invariance, positive homogeneity and, most importantly, sub-additivity (the risk of a combined portfolio is no greater than the sum of the parts, so diversification never looks harmful). VaR can violate sub-additivity, occasionally showing that combining portfolios raises measured risk, which is both counterintuitive and a real weakness ES avoids.",
        ],
        keyRules: [
          "ES = average loss beyond VaR; ES ≥ VaR.",
          "ES is sub-additive (coherent); VaR is not.",
          "FRTB uses ES for market-risk capital.",
        ],
        formulas: [
          "ES_α = E[L | L > VaR_α].",
        ],
        workedProblem: {
          scenario:
            "The five worst daily losses (out of 100 scenarios, so beyond the 95% VaR) are $8m, $9m, $11m, $14m and $20m. Estimate the 95% VaR and 95% expected shortfall.",
          steps: [
            "At 95% over 100 scenarios, the VaR is around the 5th-worst loss ≈ $8m (the threshold beyond which the worst 5% sit).",
            "ES averages the losses in the worst 5% tail: (8 + 9 + 11 + 14 + 20)/5.",
            "= 62/5 = $12.4m.",
          ],
          conclusion:
            "The 95% VaR is about $8m while the 95% ES is $12.4m—ES exceeds VaR and captures the severity of the deep tail (including the $20m loss) that VaR ignores.",
          markingNotes: [
            "ES averages tail losses; it must be ≥ VaR.",
            "VaR is the threshold, ES the tail mean.",
          ],
        },
      },
      {
        id: "sn-aggregation",
        title: "Aggregating and attributing VaR",
        testPointIds: ["tp-aggregation"],
        explanation: [
          "For normally distributed, mean-zero positions, individual VaRs aggregate like standard deviations: portfolio VaR is the square root of the sum of squared position VaRs plus twice the cross term weighted by correlation. Because correlation is at most one, diversified VaR never exceeds the simple sum of the individual VaRs, and the gap is the diversification benefit.",
          "For risk attribution, component VaR decomposes total VaR into additive contributions that sum to the whole, capturing each position's marginal impact including its correlation with the rest; marginal VaR is the sensitivity of portfolio VaR to a small increase in a position. These tools identify which desk truly drives firm risk, which is often not the one with the largest standalone VaR.",
        ],
        keyRules: [
          "Portfolio VaR = √(VaR₁² + VaR₂² + 2ρVaR₁VaR₂).",
          "Diversified VaR ≤ Σ individual VaRs (equal at ρ=1).",
          "Component VaRs sum to total VaR.",
        ],
        formulas: [
          "VaR_p = √(VaR₁² + VaR₂² + 2ρ·VaR₁·VaR₂).",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m12-1",
        testPointIds: ["tp-var-def", "tp-aggregation"],
        style: "Calculation",
        question:
          "Two desks have 1-day 99% VaRs of $3m and $4m with a correlation of 0.5. Compute the diversified portfolio VaR and the diversification benefit.",
        answerPlan: [
          "Apply the aggregation formula.",
          "Compute portfolio VaR.",
          "Compare to the undiversified sum.",
        ],
        modelAnswer:
          "VaR_p = √(3² + 4² + 2·0.5·3·4) = √(9 + 16 + 12) = √37 ≈ $6.08m. The undiversified sum is $7m, so the diversification benefit is 7 − 6.08 ≈ $0.92m. The benefit exists because the correlation (0.5) is below 1; at ρ = 1 the portfolio VaR would equal the $7m sum.",
        markingGuide: [
          "Correct aggregation with cross term (√37).",
          "Portfolio VaR ≈ $6.08m.",
          "Benefit ≈ $0.92m vs $7m sum.",
        ],
      },
      {
        id: "pp-m12-2",
        testPointIds: ["tp-es"],
        style: "Calculation + concept",
        question:
          "A 99% 1-day VaR is $5m. In a stress test, the losses that exceed VaR average $9m. State the expected shortfall and explain why a regulator might prefer ES to VaR.",
        answerPlan: [
          "State ES from the tail average.",
          "Compare to VaR.",
          "Give the coherence/tail argument.",
        ],
        modelAnswer:
          "Expected shortfall is the average loss conditional on exceeding VaR, so ES = $9m, which is above the $5m VaR. A regulator prefers ES because it measures the severity of tail losses—the money actually at risk once the threshold is breached—whereas VaR only marks the threshold and ignores how catastrophic the tail is. ES is also sub-additive (coherent), so it never understates the risk of a combined book through a diversification anomaly, unlike VaR. This is why the Basel FRTB framework bases market-risk capital on ES.",
        markingGuide: [
          "ES = $9m (tail average), exceeds VaR.",
          "Explains VaR's tail blindness.",
          "Cites sub-additivity/coherence and FRTB.",
        ],
      },
      {
        id: "pp-m12-3",
        testPointIds: ["tp-var-methods"],
        style: "Method selection",
        question:
          "A trading book is dominated by short out-of-the-money options. Explain why delta-normal parametric VaR is inappropriate and which method you would use instead.",
        answerPlan: [
          "Identify nonlinearity/fat tails.",
          "Explain parametric failure.",
          "Recommend full revaluation.",
        ],
        modelAnswer:
          "Short out-of-the-money options have highly nonlinear (negatively convex) payoffs and fat-tailed loss distributions: a delta-normal parametric VaR linearises the payoff around the current price and assumes normal returns, so it badly understates the large losses that occur when the market moves enough to bring the options into the money. A full-revaluation method—historical simulation or Monte Carlo—is appropriate because it reprices the options under each scenario, capturing gamma and the tail. Monte Carlo is preferable if the book is complex or path-dependent, provided the model and volatility assumptions are stressed.",
        markingGuide: [
          "Identifies option nonlinearity/negative convexity.",
          "Explains why delta-normal understates tail risk.",
          "Recommends historical/Monte Carlo full revaluation.",
        ],
      },
    ],
  }),
  "frm-p1-m13": examDepth({
    testPoints: [
      {
        id: "tp-mapping",
        title: "Risk mapping of positions to factors",
        priority: "critical",
        examinerFocus:
          "Whether you can map instruments to standard risk factors (cash-flow mapping for bonds, delta mapping for options) so VaR can be computed on a manageable factor set.",
        typicalQuestionForms: [
          "'How is a coupon bond mapped for VaR?'",
          "'What is lost when options are delta-mapped?'",
        ],
        mustKnow: [
          "Cash-flow (principal) mapping assigns bond cash flows to standard vertices preserving PV and often risk.",
          "Delta-normal mapping represents options by their delta-equivalent underlying position—linear, so it ignores gamma.",
          "Mapping reduces dimensionality but introduces basis/approximation risk.",
        ],
        scoringActions: [
          "State that delta mapping ignores nonlinearity (gamma).",
          "Preserve present value when mapping cash flows to vertices.",
        ],
      },
      {
        id: "tp-backtesting",
        title: "Backtesting VaR: exceptions and the traffic light",
        priority: "critical",
        examinerFocus:
          "Whether you can count exceptions, apply the binomial/Kupiec logic, and interpret Basel's traffic-light zones (green/yellow/red) for the capital multiplier.",
        typicalQuestionForms: [
          "'How many exceptions are expected at 99% over 250 days?'",
          "'What does a red-zone backtest result imply for the multiplier?'",
        ],
        mustKnow: [
          "Expected exceptions = (1 − confidence) × days; at 99% over 250 days, ~2.5 expected.",
          "Basel traffic light (250 days, 99%): ≤4 green, 5–9 yellow (rising multiplier), ≥10 red.",
          "Kupiec's unconditional-coverage test checks if the exception rate matches (1−confidence); Christoffersen adds independence (clustering) testing.",
        ],
        scoringActions: [
          "Compute expected exceptions before judging the model.",
          "Map exception count to green/yellow/red and the capital multiplier.",
        ],
      },
      {
        id: "tp-modelrisk",
        title: "Model risk and its sources",
        priority: "high",
        examinerFocus:
          "Whether you can identify sources of model risk—wrong assumptions, calibration/estimation error, implementation bugs, and misuse—and mitigants like independent validation.",
        typicalQuestionForms: [
          "'Which of the following is a source of model risk?'",
          "'What control best mitigates model risk?'",
        ],
        mustKnow: [
          "Sources: incorrect model/assumptions, poor calibration, data errors, implementation bugs, and applying a model outside its valid domain.",
          "Mitigants: independent model validation, benchmarking, backtesting, documentation and governance.",
          "Model risk is amplified when many firms use the same model (herding/endogenous risk).",
        ],
        scoringActions: [
          "Distinguish specification error from estimation/implementation error.",
          "Cite independent validation as the primary control.",
        ],
      },
      {
        id: "tp-stressed",
        title: "Stressed VaR and complementing statistical measures",
        priority: "medium",
        examinerFocus:
          "Whether you understand stressed VaR (calibrated to a historical stress period) and why regulators require it alongside current-period VaR.",
        typicalQuestionForms: [
          "'Why did Basel add stressed VaR after the crisis?'",
          "'How does stressed VaR differ from current VaR?'",
        ],
        mustKnow: [
          "Stressed VaR uses inputs from a significant historical stress window (framed generically), avoiding complacency in calm markets.",
          "Total capital combined current and stressed VaR historically (framed generically; confirm current FRTB treatment).",
          "Procyclicality: VaR falls in calm markets and spikes in crises, so stress measures counteract under-capitalisation.",
        ],
        scoringActions: [
          "Explain stressed VaR as a fix for procyclicality.",
          "Avoid asserting specific dated regulatory formulas—frame generically.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Backtesting counts and the traffic-light mapping are near-guaranteed marks; model-risk items reward crisp source/mitigant lists.",
      timeBudget: "~1.4 minutes per item.",
      answerSequence: [
        "For backtests, compute expected exceptions, then map the observed count to a zone.",
        "For mapping, preserve PV and note nonlinearity lost in delta mapping.",
        "For model risk, name the source category and its control.",
      ],
      qualityChecks: [
        "Expected exceptions = (1−conf)×days computed first?",
        "Zone → multiplier mapping correct (green/yellow/red)?",
        "Did I avoid asserting dated regulatory specifics?",
      ],
    },
    studyNotes: [
      {
        id: "sn-mapping",
        title: "Mapping positions to risk factors",
        testPointIds: ["tp-mapping"],
        explanation: [
          "Risk mapping expresses a portfolio of many instruments in terms of a smaller set of standard risk factors so that a covariance matrix and VaR are tractable. For fixed income, cash-flow mapping allocates each cash flow to standard maturity vertices (e.g., 1y, 2y, 5y) while preserving present value—and, in more careful schemes, also matching the variance so risk is not lost in the approximation.",
          "For options, delta-normal mapping replaces the option with its delta-equivalent position in the underlying, converting a nonlinear payoff into a linear one. This makes the option fit the variance-covariance framework but discards gamma, so it misstates risk for large moves and for portfolios of options where curvature dominates. The general trade-off is that mapping cuts dimensionality at the cost of basis and approximation risk, which must be acknowledged.",
        ],
        keyRules: [
          "Cash-flow mapping preserves PV (and ideally variance) at vertices.",
          "Delta mapping linearises options, ignoring gamma.",
          "Mapping introduces basis/approximation risk.",
        ],
      },
      {
        id: "sn-backtesting",
        title: "Counting exceptions and the traffic light",
        testPointIds: ["tp-backtesting"],
        explanation: [
          "Backtesting validates a VaR model by comparing predicted VaR to actual daily P&L and counting exceptions (days the loss exceeds VaR). At a 99% confidence level you expect about 1% of days to be exceptions—roughly 2.5 over a 250-day year—so too many exceptions signals the model understates risk and too few may signal it overstates risk.",
          "The Basel traffic-light approach formalises this over 250 days at 99%: up to 4 exceptions is the green zone (model accepted), 5–9 is the yellow zone where the regulatory capital multiplier increases with the count, and 10 or more is the red zone implying the model is rejected and a punitive multiplier applies. Statistical tests refine the judgement: Kupiec's test checks unconditional coverage (is the exception rate right?), while Christoffersen's test also checks independence—exceptions clustering in time is itself a red flag even if the total count looks acceptable.",
        ],
        keyRules: [
          "Expected exceptions = (1 − confidence) × days (~2.5 at 99%/250d).",
          "Traffic light: ≤4 green, 5–9 yellow, ≥10 red.",
          "Kupiec = coverage; Christoffersen = coverage + independence.",
        ],
        formulas: [
          "Expected exceptions = (1 − c)·N; e.g., 0.01·250 = 2.5.",
        ],
        workedProblem: {
          scenario:
            "A bank's 99% 1-day VaR model produced 8 exceptions over the last 250 trading days. Assess the model against the Basel traffic-light framework and comment on the capital implication.",
          steps: [
            "Expected exceptions = 0.01 × 250 = 2.5.",
            "Observed = 8, well above expectation.",
            "8 falls in the yellow zone (5–9), so the model is not outright rejected but is questionable.",
            "The regulatory capital multiplier is increased (from the base ~3 toward ~3.65 as exceptions rise), penalising the model until it improves.",
          ],
          conclusion:
            "With 8 exceptions the model sits in the yellow zone: not rejected but flagged, triggering a higher capital multiplier and investigation—far more than the ~2.5 exceptions expected suggests the model understates risk.",
          markingNotes: [
            "Compute expected exceptions first (2.5).",
            "8 ⇒ yellow zone, higher multiplier (avoid asserting exact figures if unsure).",
          ],
        },
      },
      {
        id: "sn-modelrisk",
        title: "Sources of model risk and validation",
        testPointIds: ["tp-modelrisk"],
        explanation: [
          "Model risk is the risk of loss from using a model that is wrong or wrongly used. It arises at several layers: specification error (the model's assumptions do not match reality, like assuming normal returns for a fat-tailed exposure), estimation/calibration error (parameters fit to noisy or short data), data and implementation errors (bugs, wrong inputs), and misuse (applying a model outside the domain it was built for, such as pricing an exotic with a vanilla model).",
          "The primary control is independent model validation—a team separate from the developers that reviews assumptions, tests against benchmarks and alternative models, and checks implementation. Ongoing backtesting, clear documentation and governance (approval, inventory, periodic review) complete the framework. A subtler danger is that when many firms rely on the same model, correlated behaviour amplifies systemic (endogenous) risk, so diversity of models and judgement is itself a mitigant.",
        ],
        keyRules: [
          "Sources: specification, estimation, data/implementation, misuse.",
          "Primary control: independent validation + benchmarking + backtesting.",
          "Shared models create herding/endogenous systemic risk.",
        ],
      },
      {
        id: "sn-stressed",
        title: "Stressed VaR and procyclicality",
        testPointIds: ["tp-stressed"],
        explanation: [
          "Standard VaR calibrated to recent data is procyclical: in calm markets recent volatility is low, so VaR and the capital it drives fall—precisely when risk may be building—and then VaR spikes in a crisis, forcing capital raises at the worst time. This dynamic contributed to under-capitalisation heading into the last major crisis.",
          "Stressed VaR addresses this by calibrating the model to inputs drawn from a significant historical period of financial stress, so the measure does not lull the firm during quiet times. Regulators have historically required capital to reflect both current and stressed VaR (the precise combination and its evolution under FRTB should be confirmed against the live rules rather than memorised as a fixed formula). The generic principle to carry into the exam is that stress-calibrated measures counteract the complacency and procyclicality of purely recent-data VaR.",
        ],
        keyRules: [
          "Recent-data VaR is procyclical (low in calm, spikes in crisis).",
          "Stressed VaR calibrates to a historical stress window.",
          "Confirm the current regulatory combination rather than assuming a fixed formula.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m13-1",
        testPointIds: ["tp-backtesting"],
        style: "Calculation + interpretation",
        question:
          "Over 500 trading days a 99% VaR model records 12 exceptions. How many were expected, and how would you interpret this result (noting the standard traffic light is defined over 250 days)?",
        answerPlan: [
          "Compute expected exceptions.",
          "Compare observed to expected.",
          "Interpret with the coverage logic.",
        ],
        modelAnswer:
          "Expected exceptions = (1 − 0.99) × 500 = 5. The model produced 12, more than double the expectation, strongly suggesting it understates risk (poor unconditional coverage, which a Kupiec test would likely reject). The Basel traffic light is calibrated to a 250-day window (≤4 green, 5–9 yellow, ≥10 red); scaling the intuition to 500 days, 12 exceptions against 5 expected is clearly excessive and would prompt recalibration and a higher capital multiplier. One should also test whether the exceptions cluster (Christoffersen independence), as clustering indicates the model fails in stress regimes specifically.",
        markingGuide: [
          "Expected = 5.",
          "Identifies model understates risk (coverage failure).",
          "References traffic-light/Kupiec and clustering (Christoffersen).",
        ],
      },
      {
        id: "pp-m13-2",
        testPointIds: ["tp-mapping"],
        style: "Concept",
        question:
          "A risk system delta-maps a large book of short gamma options into equivalent underlying positions before computing parametric VaR. Explain the danger and a better approach.",
        answerPlan: [
          "Explain delta mapping linearises.",
          "Identify gamma understatement.",
          "Recommend full revaluation.",
        ],
        modelAnswer:
          "Delta mapping represents each option by its delta-equivalent underlying exposure, which is only a first-order (linear) approximation. For a short-gamma book, the true loss accelerates as the market moves—the payoff is negatively convex—so a delta-based parametric VaR ignores this curvature and materially understates the risk of large moves, exactly the scenario that matters. A better approach is full revaluation under historical or Monte Carlo scenarios, which reprices the options at each shocked market state and captures gamma (and vega) effects; at minimum a delta-gamma approximation should be used to add the second-order term.",
        markingGuide: [
          "Identifies delta mapping as linear/first-order.",
          "Explains gamma/convexity understatement for short-gamma book.",
          "Recommends full revaluation or delta-gamma.",
        ],
      },
      {
        id: "pp-m13-3",
        testPointIds: ["tp-modelrisk", "tp-stressed"],
        style: "Concept",
        question:
          "A firm's VaR fell steadily through a long calm market, lowering its risk capital, just before a sharp crisis. Diagnose the problem and describe two measures that would have made the risk framework more robust.",
        answerPlan: [
          "Identify procyclicality/model reliance.",
          "Recommend stressed VaR.",
          "Recommend validation/stress testing.",
        ],
        modelAnswer:
          "The problem is procyclicality combined with over-reliance on a recent-data statistical model: calibrated to a calm window, VaR shrank and drove capital down just as latent risk was building, leaving the firm thin going into the crisis. Two robustness measures: first, a stressed VaR calibrated to a historical period of severe stress, so the capital requirement does not collapse in quiet markets; second, forward-looking stress testing and scenario analysis (including reverse stress tests) plus independent model validation, which probe tail and correlation-breakdown scenarios that a single-distribution VaR cannot see. Together these counter the false comfort that recent-data VaR provides.",
        markingGuide: [
          "Diagnoses procyclicality / recent-data reliance.",
          "Recommends stressed VaR.",
          "Adds stress testing and/or independent validation.",
        ],
      },
    ],
  }),
  "frm-p1-m14": examDepth({
    testPoints: [
      {
        id: "tp-exposure",
        title: "Counterparty exposure metrics: CE, EE, PFE, EPE",
        priority: "critical",
        examinerFocus:
          "Whether you can define and order the exposure metrics and know that exposure is max(value, 0)—you only lose what the counterparty owes you.",
        typicalQuestionForms: [
          "'Define potential future exposure and how it differs from expected exposure.'",
          "'Current exposure equals what if the trade's mark-to-market is negative?'",
        ],
        mustKnow: [
          "Exposure = max(MtM, 0): if the contract is out-of-the-money to you, exposure is zero.",
          "CE = current exposure; EE = expected exposure (mean over future values); PFE = a high-quantile future exposure; EPE = time-averaged EE.",
          "Expected positive exposure (EPE) feeds capital and CVA calculations.",
        ],
        scoringActions: [
          "Apply the max(·,0)—negative MtM gives zero exposure.",
          "Rank PFE ≥ EE and place EPE as the average EE.",
        ],
      },
      {
        id: "tp-mitigation",
        title: "Netting, collateral and margining",
        priority: "critical",
        examinerFocus:
          "Whether you can compute exposure under a netting set and after collateral/thresholds, and understand how margining reduces exposure to a residual gap risk.",
        typicalQuestionForms: [
          "'Compute net exposure across trades under a master agreement.'",
          "'How does a collateral threshold and minimum transfer amount affect exposure?'",
        ],
        mustKnow: [
          "Netting: exposure is max(Σ MtM, 0) across the netting set, not the sum of positive MtMs.",
          "Collateral reduces exposure to the uncollateralised portion (threshold + MTA + margin period of risk gap).",
          "Initial margin covers potential future moves; variation margin covers current MtM.",
        ],
        scoringActions: [
          "Net first, then floor at zero—netting can cut exposure sharply.",
          "Subtract collateral but keep the threshold/MTA residual.",
        ],
      },
      {
        id: "tp-cva-intro",
        title: "CVA as the price of counterparty credit risk",
        priority: "high",
        examinerFocus:
          "Whether you know CVA is the expected loss from counterparty default—roughly EPE × credit spread—and that it is a valuation adjustment reducing a derivative's value.",
        typicalQuestionForms: [
          "'Estimate CVA given EPE, default probability and recovery.'",
          "'Why does CVA rise when the counterparty's credit spread widens?'",
        ],
        mustKnow: [
          "CVA ≈ Σ discounted EE × PD × (1 − recovery); intuitively EPE × spread.",
          "CVA increases with exposure, default probability and loss-given-default.",
          "DVA is the mirror (own default); bilateral CVA nets the two.",
        ],
        scoringActions: [
          "Combine exposure with PD and LGD multiplicatively.",
          "Explain CVA as a deduction from the risk-free derivative value.",
        ],
      },
      {
        id: "tp-wwr",
        title: "Wrong-way and right-way risk",
        priority: "medium",
        examinerFocus:
          "Whether you can identify wrong-way risk—exposure rising as the counterparty's credit quality falls—and its danger for CVA.",
        typicalQuestionForms: [
          "'Give an example of wrong-way risk.'",
          "'How does wrong-way risk affect CVA relative to an independence assumption?'",
        ],
        mustKnow: [
          "Wrong-way risk: positive correlation between exposure and counterparty default (e.g., buying protection from a seller correlated with the reference name).",
          "Right-way risk: exposure falls as the counterparty weakens (favourable).",
          "Ignoring wrong-way risk understates CVA.",
        ],
        scoringActions: [
          "Spot the correlation between exposure and counterparty default.",
          "State that wrong-way risk raises CVA above the independence estimate.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Sets up Part II counterparty risk; nail exposure definitions, netting arithmetic and the CVA intuition.",
      timeBudget: "~1.5 minutes per item.",
      answerSequence: [
        "Apply max(·,0) to get exposure; net before flooring.",
        "Adjust for collateral, keeping the threshold/MTA residual.",
        "Combine exposure with PD and LGD for CVA; check the wrong-way direction.",
      ],
      qualityChecks: [
        "Negative MtM ⇒ zero exposure?",
        "Netting applied before the max, not after?",
        "CVA rises with exposure, PD and LGD?",
      ],
    },
    studyNotes: [
      {
        id: "sn-exposure",
        title: "The family of exposure metrics",
        testPointIds: ["tp-exposure"],
        explanation: [
          "Counterparty credit exposure is asymmetric: you lose only if the counterparty owes you and then defaults, so exposure equals the mark-to-market floored at zero, max(MtM, 0). If the derivative is out-of-the-money to you (negative MtM) your exposure is zero regardless of the counterparty's health, because you would still owe them.",
          "Because future values are uncertain, several metrics summarise the exposure profile over time. Current exposure (CE) is today's max(MtM,0). Expected exposure (EE) is the average of positive future exposures at a given date; potential future exposure (PFE) is a high-quantile (e.g., 95th percentile) of that distribution, capturing a bad-but-plausible outcome. Expected positive exposure (EPE) is the time-average of EE and is the input that feeds regulatory capital and CVA.",
          "The ordering to remember is PFE ≥ EE for a given horizon (a tail quantile exceeds the mean), and EPE is the average EE across the life of the netting set.",
        ],
        keyRules: [
          "Exposure = max(MtM, 0).",
          "PFE (tail quantile) ≥ EE (mean); EPE = time-average of EE.",
          "EPE drives capital and CVA.",
        ],
        formulas: [
          "EE(t) = E[max(V(t), 0)]; EPE = (1/T)∫₀ᵀ EE(t) dt.",
        ],
      },
      {
        id: "sn-mitigation",
        title: "Netting and collateral arithmetic",
        testPointIds: ["tp-mitigation"],
        explanation: [
          "Under an ISDA master agreement with a netting provision, exposure to a counterparty is computed on the net portfolio value—max(Σ MtM, 0)—not by summing only the positive trades. Netting can dramatically cut exposure because in-the-money and out-of-the-money trades offset; the classic exam trap is to add up the positive MtMs and ignore the negative ones.",
          "Collateral (margin) reduces exposure further. Variation margin covers the current net MtM, while initial margin buffers potential future moves over the margin period of risk (the time to close out a defaulted counterparty). Residual exposure remains from the threshold (the uncollateralised amount below which no collateral is called), the minimum transfer amount, and moves during the margin period of risk, so even a well-margined relationship is not risk-free.",
        ],
        keyRules: [
          "Netted exposure = max(Σ MtM, 0), not Σ max(MtMᵢ, 0).",
          "Variation margin covers current MtM; initial margin buffers future moves.",
          "Residual = threshold + MTA + margin-period-of-risk gap.",
        ],
        formulas: [
          "Exposure_after_collateral = max(NetMtM − Collateral, 0), subject to threshold/MTA.",
        ],
        workedProblem: {
          scenario:
            "With one counterparty a bank has three trades marked +$40m, −$25m and +$10m. There is a netting agreement and $15m of variation margin held with a $5m threshold. Compute exposure with and without netting, and after collateral.",
          steps: [
            "Without netting: sum only positives = 40 + 10 = $50m exposure.",
            "With netting: net MtM = 40 − 25 + 10 = $25m; exposure = max(25, 0) = $25m.",
            "After collateral: net MtM $25m − $15m collateral = $10m; the $5m threshold means the bank is uncollateralised up to $5m, so residual exposure ≈ $10m (plus any MTA/MPoR gap).",
          ],
          conclusion:
            "Netting cuts gross exposure from $50m to $25m, and collateral reduces it to roughly $10m—illustrating how master agreements and margining compound to shrink counterparty risk.",
          markingNotes: [
            "Net the MtMs before flooring at zero.",
            "Collateral reduces exposure but the threshold leaves a residual.",
          ],
        },
      },
      {
        id: "sn-cva-intro",
        title: "CVA: pricing counterparty default",
        testPointIds: ["tp-cva-intro"],
        explanation: [
          "Credit valuation adjustment is the market value of counterparty credit risk—the expected loss from the counterparty defaulting before the derivative matures. It reduces the value of a derivative below its risk-free (default-free) value. In discrete form it sums, over future time buckets, the discounted expected exposure times the marginal default probability times loss-given-default; the compact intuition is CVA ≈ EPE × credit spread over the life of the trade.",
          "So CVA rises with three levers: larger exposure (EPE), higher default probability (a wider counterparty credit spread), and higher loss-given-default (lower recovery). Its mirror image, DVA, reflects the firm's own default risk and increases the position's value from the firm's perspective; combining both gives bilateral CVA. The key exam point is that CVA is a deduction from value driven multiplicatively by exposure and counterparty credit quality.",
        ],
        keyRules: [
          "CVA ≈ Σ discounted EE × PD × (1 − recovery) ≈ EPE × spread.",
          "CVA ↑ with exposure, PD and LGD.",
          "DVA mirrors own default; bilateral CVA = CVA − DVA.",
        ],
        formulas: [
          "CVA ≈ (1 − R)·Σᵢ EE(tᵢ)·PD(tᵢ₋₁,tᵢ)·DF(tᵢ).",
        ],
        workedProblem: {
          scenario:
            "A netting set has an expected positive exposure of $20m, the counterparty's cumulative default probability over the horizon is 4%, and recovery is 30%. Give a simple estimate of CVA.",
          steps: [
            "Loss-given-default = 1 − recovery = 1 − 0.30 = 0.70.",
            "Simple CVA ≈ EPE × PD × LGD = 20 × 0.04 × 0.70.",
            "= 20 × 0.028 = $0.56m.",
          ],
          conclusion:
            "CVA is roughly $0.56m—the amount by which the derivative's risk-free value should be reduced to reflect counterparty credit risk; it would rise if the spread widened (higher PD) or recovery fell.",
          markingNotes: [
            "Multiply exposure by PD and by LGD (not recovery).",
            "This ignores exposure/default correlation (wrong-way risk).",
          ],
        },
      },
      {
        id: "sn-wwr",
        title: "Wrong-way and right-way risk",
        testPointIds: ["tp-wwr"],
        explanation: [
          "Wrong-way risk arises when exposure to a counterparty is positively correlated with that counterparty's probability of default—exactly when you are owed the most, the counterparty is most likely to fail. A textbook case is buying credit protection on a reference entity from a seller whose own fortunes are tied to that entity; if the reference defaults, the protection is most valuable precisely when the seller is also under stress.",
          "Right-way risk is the favourable opposite, where exposure shrinks as the counterparty weakens. The practical consequence is that a CVA calculation assuming independence between exposure and default understates the true CVA in the presence of wrong-way risk, so models must incorporate the correlation or apply add-ons; ignoring it is a recognised cause of underestimated counterparty losses.",
        ],
        keyRules: [
          "Wrong-way risk: exposure and counterparty default positively correlated.",
          "Right-way risk: exposure falls as counterparty weakens.",
          "Independence-based CVA understates risk under wrong-way risk.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m14-1",
        testPointIds: ["tp-mitigation", "tp-exposure"],
        style: "Calculation",
        question:
          "A bank faces a counterparty with four netted trades marked +$60m, +$15m, −$40m and −$5m, and holds $20m of collateral with no threshold. Compute gross (non-netted) exposure, netted exposure, and exposure after collateral.",
        answerPlan: [
          "Sum positives for gross.",
          "Net all MtMs and floor.",
          "Subtract collateral.",
        ],
        modelAnswer:
          "Gross exposure (no netting) = sum of positive MtMs = 60 + 15 = $75m. Netted exposure = max(60 + 15 − 40 − 5, 0) = max(30, 0) = $30m. After $20m collateral with no threshold, exposure = max(30 − 20, 0) = $10m. Netting cuts exposure from $75m to $30m and collateral further to $10m, showing how master agreements and margining compound to reduce counterparty credit risk.",
        markingGuide: [
          "Gross = $75m (positives only).",
          "Netted = $30m (net then floor).",
          "After collateral = $10m.",
        ],
      },
      {
        id: "pp-m14-2",
        testPointIds: ["tp-cva-intro"],
        style: "Calculation",
        question:
          "Estimate CVA for a netting set with EPE of $50m, a counterparty cumulative default probability of 3% over the horizon, and a recovery rate of 40%.",
        answerPlan: [
          "Compute LGD.",
          "Apply EPE × PD × LGD.",
        ],
        modelAnswer:
          "Loss-given-default = 1 − 0.40 = 0.60. Simple CVA ≈ EPE × PD × LGD = 50 × 0.03 × 0.60 = 50 × 0.018 = $0.90m. This is the value deduction for counterparty credit risk; it would increase if the counterparty's spread widened (raising PD) or if recovery expectations fell (raising LGD), and this estimate assumes exposure and default are independent, so any wrong-way risk would push the true CVA higher.",
        markingGuide: [
          "LGD = 0.60.",
          "CVA ≈ $0.90m via EPE × PD × LGD.",
          "Notes independence assumption / wrong-way caveat.",
        ],
      },
      {
        id: "pp-m14-3",
        testPointIds: ["tp-wwr", "tp-cva-intro"],
        style: "Concept",
        question:
          "A dealer buys CDS protection on Bank X from Bank Y, and Bank Y is a major creditor of Bank X. Identify the type of risk, explain why it is dangerous, and state its effect on CVA.",
        answerPlan: [
          "Identify wrong-way risk.",
          "Explain the correlation danger.",
          "State CVA effect.",
        ],
        modelAnswer:
          "This is wrong-way risk: the dealer's exposure to Bank Y (the value of the protection) is largest exactly when Bank X defaults, but Bank Y—being heavily exposed to Bank X—is itself most likely to be in distress at that moment. So the protection is most valuable precisely when the protection seller is least able to pay, undermining the hedge. Because exposure and counterparty default are positively correlated, a CVA computed assuming independence understates the true counterparty credit cost; the dealer should model the correlation (or apply a wrong-way-risk add-on) and would find the correct CVA materially higher, questioning the hedge's effectiveness.",
        markingGuide: [
          "Identifies wrong-way risk with the correlation.",
          "Explains why the hedge fails when needed.",
          "States CVA is understated under independence.",
        ],
      },
    ],
  }),
  // <<<INSERT>>>
};
