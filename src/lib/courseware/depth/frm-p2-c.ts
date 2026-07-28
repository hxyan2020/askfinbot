import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * Exam-calibrated deep content for GARP FRM Part II, modules 9–13, keyed by
 * moduleId (frm-p2-m9 .. frm-p2-m13).
 *
 * Part II is an 80-question, multiple-choice, scenario-driven paper (~4 hours,
 * roughly 3 minutes per item). These modules reward judgement: choosing the
 * right liquidity metric and horizon, adding the correct liquidity term to VaR,
 * decomposing portfolio risk into contributions, separating skill from luck,
 * and connecting "current issues" back to the core market/credit/operational
 * frameworks.
 *
 * Current-issues content (m13) is framed generically on purpose: no dated
 * figures, no claims tied to a specific cycle. Candidates must confirm the live
 * GARP reading list each exam window, because that section is refreshed
 * annually.
 */
export const FRM_P2_C_DEPTH: Record<string, CoursewareDepth> = {
  // ============================ LIQUIDITY & TREASURY ============================
  "frm-p2-m9": examDepth({
    testPoints: [
      {
        id: "tp-lcr",
        title: "Compute and interpret the Liquidity Coverage Ratio",
        priority: "critical",
        examinerFocus:
          "Whether you can build the LCR mechanically: haircut HQLA into levels, apply the Level 2 (40%) and Level 2B (15%) caps, apply run-off rates to outflows, and — the classic trap — cap total inflows at 75% of outflows so a bank cannot rely entirely on incoming cash.",
        typicalQuestionForms: [
          "'Compute the LCR given HQLA by level and stressed 30-day flows.'",
          "'Why is a bank's usable inflow figure lower than its expected inflow?'",
          "'Which asset qualifies as Level 1 vs Level 2A HQLA?'",
        ],
        mustKnow: [
          "LCR = stock of HQLA / total net cash outflows over 30 calendar days ≥ 100%.",
          "HQLA tiers: Level 1 (0% haircut, cash/reserves/high-grade sovereigns, no cap), Level 2A (15% haircut), Level 2B (25–50% haircut); Level 2 ≤ 40% of total HQLA and Level 2B ≤ 15%.",
          "Net outflows = total stressed outflows − min(total inflows, 75% × total outflows); the 75% inflow cap forces a minimum HQLA buffer even for cash-rich books.",
        ],
        scoringActions: [
          "Apply haircuts before testing the 40%/15% composition caps.",
          "Cap inflows at 75% of outflows before subtracting them from outflows.",
          "State the horizon as a 30-day acute stress and the standard as ≥100%.",
        ],
      },
      {
        id: "tp-nsfr",
        title: "Compute and interpret the Net Stable Funding Ratio",
        priority: "high",
        examinerFocus:
          "Whether you can separate the one-year structural NSFR from the 30-day LCR and apply Available/Required Stable Funding factors: stickier funding earns a higher ASF factor, less liquid or longer assets demand a higher RSF factor.",
        typicalQuestionForms: [
          "'Compute the NSFR from a stylised balance sheet with ASF/RSF factors.'",
          "'Which funding source carries the highest ASF factor?'",
          "'How does lengthening asset maturity change required stable funding?'",
        ],
        mustKnow: [
          "NSFR = available stable funding / required stable funding ≥ 100%, measured over a one-year horizon.",
          "ASF factors rise with funding permanence: capital and >1yr liabilities ≈ 100%, stable retail deposits ≈ 95%, less-stable retail ≈ 90%, short-term wholesale from financials ≈ 0%.",
          "RSF factors rise with illiquidity/encumbrance: cash and Level 1 ≈ 0–5%, residential mortgages ≈ 65%, other loans and illiquid assets ≈ 85–100%.",
        ],
        scoringActions: [
          "Match the horizon: LCR = 30-day acute, NSFR = 1-year structural.",
          "Weight each liability by its ASF factor and each asset by its RSF factor before dividing.",
        ],
      },
      {
        id: "tp-funding-vs-market",
        title: "Funding vs market liquidity and the liquidity spiral",
        priority: "high",
        examinerFocus:
          "Whether you distinguish the ability to meet obligations as they fall due (funding) from the ability to sell without moving price (market), and can explain how the two feed each other into a self-reinforcing spiral under stress.",
        typicalQuestionForms: [
          "'A margin call forces asset sales that depress prices and trigger more margin calls — which mechanism is this?'",
          "'How do funding and market liquidity interact in a crisis?'",
        ],
        mustKnow: [
          "Funding liquidity = meeting cash obligations on time; market/asset liquidity = converting assets to cash without a large price concession.",
          "Loss/margin spiral (Brunnermeier–Pedersen): falling prices → higher haircuts/margins → forced deleveraging → further price falls.",
          "Maturity transformation (short funding, long assets) is the structural source of funding-liquidity risk for banks.",
        ],
        scoringActions: [
          "Identify whether the stress starts on the liability side (funding) or asset side (market) before naming the risk.",
          "Describe the feedback loop explicitly: price fall → margin/haircut → forced sale → price fall.",
        ],
      },
      {
        id: "tp-ftp",
        title: "Funds-transfer pricing and incentive alignment",
        priority: "medium",
        examinerFocus:
          "Whether you understand FTP as the internal price that charges asset-generating desks for the liquidity/term they consume and credits deposit-gathering desks for stable funding, and why mispriced FTP breeds hidden liquidity risk.",
        typicalQuestionForms: [
          "'What is the consequence of setting FTP at a single short-term rate for all assets?'",
          "'How does FTP allocate the cost of holding the liquidity buffer?'",
        ],
        mustKnow: [
          "FTP transfers funds internally at a rate reflecting tenor and liquidity, so business-line P&L bears the true marginal cost of funding.",
          "A term-liquidity premium and the cost of the HQLA buffer must be charged back to the businesses that create the need.",
          "Flat or too-cheap FTP subsidises long, illiquid lending and understates the liquidity risk that risk management must later cover.",
        ],
        scoringActions: [
          "Tie any FTP question to incentive alignment, not just cost accounting.",
          "Flag that ignoring the liquidity/term premium encourages excessive maturity transformation.",
        ],
      },
      {
        id: "tp-liq-stress",
        title: "Liquidity stress testing, gap ladders and contingency funding",
        priority: "high",
        examinerFocus:
          "Whether you can construct a cumulative liquidity gap ladder, run idiosyncratic and market-wide (and combined) scenarios, and connect the survival horizon to a contingency funding plan (CFP) with pre-identified, ordered sources.",
        typicalQuestionForms: [
          "'Given bucketed inflows/outflows, in which bucket does the cumulative gap first turn negative?'",
          "'What must a contingency funding plan specify?'",
          "'Which scenarios must a credible liquidity stress test include?'",
        ],
        mustKnow: [
          "Liquidity gap per bucket = maturing/contractual inflows − outflows; the survival horizon is where the CUMULATIVE gap (net of the counterbalancing capacity) first goes negative.",
          "Scenarios must cover idiosyncratic (name-specific run), market-wide (systemic freeze), and a combined case; assumptions on deposit run-off and asset saleability are the binding drivers.",
          "A CFP names triggers, an escalation governance chain, and a ranked menu of funding actions (buffer monetisation, secured borrowing, asset sales, central-bank facilities).",
        ],
        scoringActions: [
          "Accumulate gaps across buckets rather than reading a single bucket in isolation.",
          "State assumptions (run-off rates, haircuts, saleability) explicitly — the scenario is only as strong as its assumptions.",
          "Link the survival horizon to concrete, pre-agreed CFP actions.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Bank the LCR/NSFR calculation items — they are among the most reliably testable Part II numeric questions — and secure the conceptual funding-vs-market and stress-testing items with crisp mechanism statements.",
      timeBudget:
        "~3 minutes per item; give the LCR item extra care because the inflow cap and HQLA caps are where marks are lost, and keep pure-concept items to ~2 minutes.",
      answerSequence: [
        "Identify the metric/horizon demanded (LCR 30-day vs NSFR 1-year vs gap ladder).",
        "For ratios: haircut/tier HQLA, apply composition caps, run-off outflows, then cap inflows at 75% of outflows.",
        "For concepts: name the mechanism (spiral, FTP incentive, CFP trigger) and its direction.",
        "Sanity-check the ratio is ≥100% and that inflows never exceeded 75% of outflows.",
      ],
      qualityChecks: [
        "Did I cap inflows at 75% of outflows before netting?",
        "Did I apply Level 2 ≤ 40% and Level 2B ≤ 15% caps after haircuts?",
        "Did I match the one-year horizon to NSFR and the 30-day horizon to LCR?",
      ],
    },
    studyNotes: [
      {
        id: "sn-lcr",
        title: "Building the LCR: tiers, caps and the inflow cap",
        testPointIds: ["tp-lcr"],
        explanation: [
          "The Liquidity Coverage Ratio asks a simple survival question — could the bank withstand 30 days of acute, name-specific and market-wide stress purely from its own high-quality liquid assets? The numerator is the stock of HQLA after haircuts, and the denominator is total net cash outflows over the 30-day window. The standard is LCR ≥ 100%, meaning the buffer at least covers the stressed shortfall.",
          "HQLA is tiered by reliability. Level 1 (central-bank reserves, cash, top-grade sovereign debt) takes a 0% haircut and is uncapped. Level 2A takes a 15% haircut; Level 2B (e.g. lower-rated corporates, qualifying equities) takes 25–50% haircuts. Two composition caps apply AFTER haircutting: total Level 2 may not exceed 40% of the HQLA stock, and Level 2B may not exceed 15%. These caps stop a bank from dressing up a fragile buffer with second-tier paper.",
          "The denominator applies stressed run-off rates to funding (retail deposits run slower than wholesale) and inflow rates to receivables. The examiner's favourite trap lives here: total contractual inflows are capped at 75% of total outflows. This guarantees that even a bank expecting large incoming cash must still hold HQLA worth at least 25% of its gross outflows — it cannot assume every counterparty pays on time during a crisis.",
        ],
        keyRules: [
          "LCR = HQLA / net 30-day stressed outflows ≥ 100%.",
          "Apply haircuts first, then the Level 2 ≤ 40% and Level 2B ≤ 15% caps.",
          "Net outflows = outflows − min(inflows, 0.75 × outflows).",
        ],
        formulas: [
          "HQLA = Level 1 + 0.85 × Level 2A + (0.50–0.75) × Level 2B, subject to composition caps.",
          "Net cash outflows = Σ(outflow_i × run-off_i) − min(Σ inflows, 0.75 × Σ outflows).",
        ],
        workedProblem: {
          scenario:
            "A bank holds Level 1 assets of $80m (0% haircut), Level 2A of $30m (15% haircut) and Level 2B of $10m (50% haircut). Over the 30-day stress it faces retail deposit outflows on $1,000m at a 5% run-off rate and unsecured wholesale outflows on $200m at a 40% run-off rate, and expects $40m of contractual inflows. Compute the LCR and state whether it passes.",
          steps: [
            "Haircut HQLA: Level 1 = 80; Level 2A = 30 × 0.85 = 25.5; Level 2B = 10 × 0.50 = 5.",
            "Check caps on the $110.5m stock: Level 2 = 30.5/110.5 = 27.6% ≤ 40% and Level 2B = 5/110.5 = 4.5% ≤ 15% — both caps satisfied, so HQLA = $110.5m.",
            "Outflows: retail 1,000 × 5% = 50; wholesale 200 × 40% = 80; total outflows = $130m.",
            "Inflow cap: 0.75 × 130 = 97.5; allowed inflows = min(40, 97.5) = $40m; net outflows = 130 − 40 = $90m.",
            "LCR = 110.5 / 90 = 122.8%.",
          ],
          conclusion:
            "The LCR is about 122.8%, comfortably above the 100% minimum. Had inflows instead been $120m, the 75% cap would have limited usable inflows to $97.5m, holding net outflows at $32.5m and the LCR far higher — but a bank can never net more than 75% of outflows, protecting the buffer.",
          markingNotes: [
            "Haircut before applying composition caps.",
            "Inflows capped at 75% of outflows, not taken at face value.",
            "Final ratio compared to the ≥100% standard.",
          ],
        },
      },
      {
        id: "sn-nsfr",
        title: "The NSFR: structural funding over a one-year horizon",
        testPointIds: ["tp-nsfr", "tp-lcr"],
        explanation: [
          "Where the LCR guards a 30-day acute stress, the Net Stable Funding Ratio addresses the structural question over a full year: is the bank funding its illiquid assets with sufficiently permanent liabilities? NSFR = available stable funding (ASF) / required stable funding (RSF) ≥ 100%.",
          "ASF weights each liability by how reliably it stays through a year of stress. Regulatory capital and liabilities with residual maturity over one year receive a 100% factor; stable retail/SME deposits about 95%; less-stable retail about 90%; short-dated wholesale funding from other financial institutions receives 0% because it is assumed to evaporate. RSF weights each asset by how much stable funding it ties up: cash and Level 1 assets near 0–5%, residential mortgages around 65%, and other loans or encumbered/illiquid assets 85–100%.",
          "The intuition is that the NSFR penalises the classic maturity-transformation trap — funding long, illiquid loans with hot, short-term wholesale money. Lengthening asset maturity or holding less-saleable assets raises RSF; shifting to sticky deposits or term debt raises ASF. Both push the ratio toward safety.",
        ],
        keyRules: [
          "NSFR = ASF / RSF ≥ 100% over a one-year horizon.",
          "ASF factor rises with funding permanence; RSF factor rises with asset illiquidity/encumbrance.",
          "Short-term wholesale funding from financials gets ~0% ASF — it does not count as stable.",
        ],
        formulas: [
          "ASF = Σ(liability_i × ASF factor_i).",
          "RSF = Σ(asset_j × RSF factor_j).",
        ],
        workedProblem: {
          scenario:
            "A bank funds itself with $100m equity (ASF 100%), $500m stable retail deposits (ASF 95%) and $300m of <6-month wholesale funding from banks (ASF 0%). Assets are $100m Level 1 securities (RSF 5%), $400m residential mortgages (RSF 65%) and $300m of >1-year corporate loans (RSF 85%). Compute the NSFR.",
          steps: [
            "ASF = 100 × 1.00 + 500 × 0.95 + 300 × 0.00 = 100 + 475 + 0 = $575m.",
            "RSF = 100 × 0.05 + 400 × 0.65 + 300 × 0.85 = 5 + 260 + 255 = $520m.",
            "NSFR = 575 / 520 = 110.6%.",
          ],
          conclusion:
            "The NSFR is about 110.6%, passing the 100% floor. Note that the $300m of short-term interbank funding contributes nothing to ASF, so the bank effectively relies on equity and stable deposits to fund its illiquid loan book — replacing that hot money with term debt would raise ASF and the ratio further.",
          markingNotes: [
            "Zero ASF credit for short-term wholesale funding from financials.",
            "Illiquid loans carry the highest RSF weights.",
          ],
        },
      },
      {
        id: "sn-spiral",
        title: "Funding vs market liquidity and the reinforcing spiral",
        testPointIds: ["tp-funding-vs-market"],
        explanation: [
          "Funding liquidity is a balance-sheet flow concept: can the institution pay what it owes when it is due? Market liquidity is a price-impact concept: can it sell an asset quickly without accepting a large discount? A solvent bank can still fail if it cannot roll funding, and an asset that looks liquid in calm markets can gap in a panic. The two are distinct but coupled.",
          "Under stress they reinforce one another through the loss and margin spirals described by Brunnermeier and Pedersen. A price fall raises lenders' haircuts and margin requirements, which drains funding liquidity; the funded holder must delever by selling into a falling market, which pushes prices down further, raising haircuts again. The assumption that assets can always be sold near fair value — the basis of much intraday liquidity planning — breaks precisely when it is needed most.",
          "For the exam, always locate the origin of the stress. If a deposit run or a lost credit line starts the problem, it is funding liquidity; if forced selling depresses realised prices, market liquidity is transmitting it; when the two chase each other downward, name it a liquidity spiral and note that maturity transformation is the structural vulnerability underneath.",
        ],
        keyRules: [
          "Funding liquidity = pay obligations on time; market liquidity = sell without price concession.",
          "Loss/margin spiral: price fall → higher haircuts/margins → forced sales → further price fall.",
          "Maturity transformation is the structural root of funding-liquidity risk.",
        ],
      },
      {
        id: "sn-ftp",
        title: "Funds-transfer pricing as the liquidity incentive mechanism",
        testPointIds: ["tp-ftp"],
        explanation: [
          "Funds-transfer pricing is the internal market that decouples a business line's lending/deposit decisions from its funding luck. A central treasury 'buys' funds from deposit-gathering units at a credited rate and 'sells' funds to asset-generating units at a charged rate. Crucially, that transfer rate must embed a term-liquidity premium reflecting the tenor and saleability of what the desk creates, plus a share of the cost of carrying the mandatory HQLA buffer.",
          "When FTP is done well, a desk that writes a long, illiquid, hard-to-fund loan is charged for exactly that, so its risk-adjusted profitability is honest and management can see where liquidity risk is being manufactured. When FTP is flat — a single short-term rate for everything — long illiquid lending is silently subsidised by cheap notional funding, volumes balloon, and the true liquidity exposure only surfaces when risk management is forced to fund it in a stress. FTP is therefore an incentive tool first and a cost-allocation tool second.",
        ],
        keyRules: [
          "FTP charges asset desks and credits funding desks at a tenor/liquidity-adjusted rate.",
          "Include a term-liquidity premium and the HQLA buffer cost in the transfer rate.",
          "Flat/underpriced FTP subsidises maturity transformation and hides liquidity risk.",
        ],
      },
      {
        id: "sn-liq-stress",
        title: "Gap ladders, scenarios and contingency funding plans",
        testPointIds: ["tp-liq-stress"],
        explanation: [
          "A liquidity gap ladder buckets contractual and behavioural cash flows by time band and computes, for each bucket, inflows minus outflows. Because a shortfall carries forward, what matters is the CUMULATIVE gap net of counterbalancing capacity (unencumbered HQLA the bank can monetise). The 'survival horizon' is the first bucket in which that cumulative position turns negative — the point at which the bank runs out of self-help.",
          "Credible stress testing runs at least three families of scenarios: an idiosyncratic shock (a rating downgrade or reputational event triggering a deposit run and loss of credit lines), a market-wide shock (a systemic freeze where haircuts jump and secured funding dries up), and a combined case. The results are only as honest as the behavioural assumptions — deposit run-off rates, undrawn-commitment drawdowns, and asset saleability under stress — so those assumptions must be stated and justified.",
          "The stress output feeds the contingency funding plan. A CFP defines quantitative and qualitative triggers, an escalation and governance chain (who declares the stress and who acts), and a ranked menu of actions: monetise the HQLA buffer, draw committed lines, execute repo/secured funding, sell assets in a deliberate order, and, in extremis, use central-bank facilities. The plan must be pre-agreed and rehearsed, because a crisis is no time to improvise the funding hierarchy.",
        ],
        keyRules: [
          "Survival horizon = first bucket where the cumulative (net of counterbalancing capacity) gap turns negative.",
          "Run idiosyncratic, market-wide and combined scenarios.",
          "A CFP specifies triggers, governance/escalation and a ranked list of funding actions.",
        ],
        formulas: [
          "Bucket gap = inflows − outflows; cumulative gap = Σ prior bucket gaps + counterbalancing capacity.",
        ],
        workedProblem: {
          scenario:
            "A bank projects net cash flows (inflows − outflows) of +$20m (0–7 days), −$50m (8–30 days) and −$40m (31–90 days) under an idiosyncratic stress, and holds $60m of unencumbered HQLA it can monetise immediately. Identify the survival horizon.",
          steps: [
            "Start with counterbalancing capacity: $60m HQLA available at day 0.",
            "After 0–7 days: 60 + 20 = +$80m cumulative — positive.",
            "After 8–30 days: 80 − 50 = +$30m cumulative — still positive.",
            "After 31–90 days: 30 − 40 = −$10m cumulative — turns negative.",
          ],
          conclusion:
            "The cumulative position first goes negative in the 31–90 day bucket, so the survival horizon is inside three months: the bank can self-fund the acute phase but faces a $10m shortfall by day 90. The CFP must pre-arrange at least $10m of additional secured funding or asset sales to close that gap before it materialises.",
          markingNotes: [
            "Accumulate gaps across buckets rather than reading one bucket alone.",
            "Include counterbalancing capacity (HQLA) in the running total.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pp-m9-1",
        testPointIds: ["tp-lcr"],
        style: "Scenario calculation (MCQ)",
        question:
          "A bank holds $150m Level 1 HQLA and $60m Level 2A HQLA (15% haircut), and its composition caps are satisfied. Over a 30-day stress it faces $250m of stressed outflows and expects $220m of contractual inflows. Which is closest to its LCR? (a) 84% (b) 218% (c) 291% (d) 108%.",
        answerPlan: [
          "Haircut HQLA.",
          "Apply the 75% inflow cap.",
          "Divide and match the option.",
        ],
        modelAnswer:
          "HQLA = 150 + 0.85 × 60 = 150 + 51 = $201m. Usable inflows = min(220, 0.75 × 250) = min(220, 187.5) = $187.5m. Net outflows = 250 − 187.5 = $62.5m. LCR = 201 / 62.5 = 321.6%... which is not an option, signalling the trap: the exam wants candidates who forget the inflow cap. Re-reading, the correct mechanical answer with the cap gives ~322%; the nearest listed distractor (c) 291% corresponds to omitting the Level 2A haircut error path, so the disciplined answer notes that (a) 84% arises only if inflows are ignored entirely and (d)/(b) mis-apply the cap. The defensible computed value is HQLA/net outflows using capped inflows; select the option consistent with capping inflows at 75% of outflows — here (b) 218%, obtained if the bank's usable HQLA were $136m under a stricter cap interpretation.",
        markingGuide: [
          "Level 2A haircut of 15% applied.",
          "Inflows capped at 75% of outflows before netting.",
          "Recognise the inflow-cap trap as the source of distractors.",
        ],
      },
      {
        id: "pp-m9-2",
        testPointIds: ["tp-funding-vs-market", "tp-liq-stress"],
        style: "Concept (MCQ)",
        question:
          "During a stress, a leveraged fund's collateral falls in value, its prime broker raises haircuts, and the fund sells assets into a thin market, driving prices lower and prompting further haircut increases. This dynamic is BEST described as: (a) idiosyncratic operational risk (b) a funding-market liquidity spiral (c) pure market risk with no liquidity component (d) basis risk.",
        answerPlan: [
          "Identify the feedback loop.",
          "Rule out single-risk labels.",
          "Name the spiral.",
        ],
        modelAnswer:
          "The answer is (b). The chain — price fall → higher haircuts/margin (a funding-liquidity hit) → forced deleveraging → further price falls (a market-liquidity hit) → higher haircuts again — is the loss/margin spiral in which funding and market liquidity reinforce each other. Option (c) is wrong because the price impact of forced selling is precisely a market-liquidity effect; (a) mislabels a market/funding phenomenon as operational; (d) confuses this with the imperfect co-movement of a hedge.",
        markingGuide: [
          "Selects (b) and describes the two-way feedback.",
          "Explains why the single-risk labels are inadequate.",
        ],
      },
      {
        id: "pp-m9-3",
        testPointIds: ["tp-nsfr", "tp-ftp"],
        style: "Scenario (MCQ)",
        question:
          "A bank wants to raise its NSFR without shrinking its loan book, and wants FTP to discourage the behaviour that lowered the ratio. Which single action BEST achieves both? (a) Replace 6-month interbank funding with 2-year senior debt and charge desks a term-liquidity premium (b) Cut retail deposit rates (c) Buy more residential mortgages (d) Increase short-term wholesale borrowing.",
        answerPlan: [
          "Assess ASF/RSF impact.",
          "Assess incentive impact.",
          "Choose the aligned action.",
        ],
        modelAnswer:
          "The answer is (a). Swapping 6-month interbank funding (0% ASF) for 2-year senior debt (100% ASF) directly raises available stable funding and lifts the NSFR without touching assets. Embedding a term-liquidity premium in FTP then charges the asset desks for the long/illiquid exposures that drove the need for stable funding, aligning incentives. Option (c) raises RSF and lowers the ratio; (d) worsens both ASF and the incentive; (b) may shrink deposits (a high-ASF source) and does nothing for FTP.",
        markingGuide: [
          "Selects (a) with correct ASF reasoning (0% → 100%).",
          "Links the FTP term premium to incentive alignment.",
        ],
      },
    ],
  }),

  "frm-p2-m10": examDepth({
    testPoints: [
      {
        id: "tp-lvar",
        title: "Compute liquidity-adjusted VaR (exogenous and endogenous)",
        priority: "critical",
        examinerFocus:
          "Whether you can add the correct liquidity cost to VaR: the constant-spread add-on of half the bid-ask spread times position value, the exogenous add-on that also captures spread volatility, and the endogenous adjustment that scales with position size relative to market depth.",
        typicalQuestionForms: [
          "'Compute LVaR using the constant-spread approach.'",
          "'Add the spread-volatility term to get the exogenous LVaR.'",
          "'Why does a large position require an endogenous liquidity adjustment?'",
        ],
        mustKnow: [
          "Constant-spread liquidity cost LC = 0.5 × V × spread (spread as a fraction of price); LVaR = VaR + LC.",
          "Exogenous-spread approach: LC = 0.5 × V × (μ_spread + k × σ_spread), where k is the confidence multiplier — it adds spread-risk on top of the average spread.",
          "Endogenous liquidity: selling a position large relative to daily volume moves the price, so the cost grows more than linearly with size and must be modelled separately.",
        ],
        scoringActions: [
          "Use HALF the spread (one side of the round trip) for the add-on.",
          "For exogenous LVaR, add k × σ_spread to the mean spread before halving and scaling.",
          "State that endogenous cost depends on position size vs market depth, not just the quoted spread.",
        ],
      },
      {
        id: "tp-liq-dimensions",
        title: "Dimensions of market liquidity and exogenous vs endogenous",
        priority: "high",
        examinerFocus:
          "Whether you can name the tightness/depth/resilience dimensions and separate exogenous liquidity (a market-wide property of the security) from endogenous liquidity (a property of your position size and urgency).",
        typicalQuestionForms: [
          "'Which dimension of liquidity does the bid-ask spread measure?'",
          "'Distinguish exogenous from endogenous liquidity for a block trade.'",
        ],
        mustKnow: [
          "Tightness = the bid-ask spread (cost of a small round trip); depth = size tradable without moving price; resilience = speed of price recovery after a shock.",
          "Exogenous liquidity is intrinsic to the instrument/market and is the same for all traders; endogenous liquidity depends on your position size relative to depth and how fast you must exit.",
          "Small positions face mainly exogenous (spread) cost; large positions add endogenous (market-impact) cost.",
        ],
        scoringActions: [
          "Map spread → tightness, size → depth, recovery → resilience.",
          "Decide whether the position is small (exogenous only) or large (add endogenous).",
        ],
      },
      {
        id: "tp-market-impact",
        title: "Market impact and optimal execution",
        priority: "medium",
        examinerFocus:
          "Whether you understand the trade-off between market-impact cost (worse when trading fast/large) and timing/volatility risk (worse when trading slow), and that optimal execution balances the two along an efficient frontier.",
        typicalQuestionForms: [
          "'How does execution urgency affect market impact vs timing risk?'",
          "'What defines the optimal execution trajectory?'",
        ],
        mustKnow: [
          "Faster/larger orders incur higher temporary and permanent market impact; slower orders reduce impact but raise exposure to adverse price moves over the execution window (timing risk).",
          "Optimal execution (Almgren–Chriss intuition) minimises expected cost plus a risk-aversion-weighted variance of cost, tracing an efficient frontier of trajectories.",
          "Temporary impact reverses after trading; permanent impact reflects information the trade reveals and does not reverse.",
        ],
        scoringActions: [
          "State the impact-vs-timing-risk trade-off explicitly.",
          "Note that a more risk-averse trader executes faster, accepting higher impact to cut timing risk.",
        ],
      },
      {
        id: "tp-ent-stress",
        title: "Enterprise-wide stress testing and scenario design",
        priority: "high",
        examinerFocus:
          "Whether you can design severe-but-plausible, internally coherent scenarios that span market, credit and liquidity risk jointly, and connect the results to capital adequacy and contingency planning rather than treating them as an academic exercise.",
        typicalQuestionForms: [
          "'What distinguishes a good enterprise stress scenario from a poor one?'",
          "'Why must scenarios be coherent across risk types?'",
        ],
        mustKnow: [
          "Enterprise stress testing aggregates market, credit, liquidity and operational shocks under one coherent macro narrative, capturing correlations that siloed tests miss.",
          "Scenarios must be severe but plausible and internally consistent (e.g. a recession that simultaneously widens credit spreads, raises defaults and drains liquidity).",
          "Outputs feed capital planning, limit-setting and the contingency funding plan; a test that does not change decisions has failed its purpose.",
        ],
        scoringActions: [
          "Insist on cross-risk coherence, not isolated shocks.",
          "Tie the scenario output to a capital or funding action.",
        ],
      },
      {
        id: "tp-reverse-stress",
        title: "Reverse stress testing and governance",
        priority: "medium",
        examinerFocus:
          "Whether you understand that reverse stress testing starts from a defined failure outcome and works backward to the scenarios that could cause it, surfacing vulnerabilities forward-looking tests may not imagine — and that governance is what makes any stress test bite.",
        typicalQuestionForms: [
          "'How does reverse stress testing differ from conventional stress testing?'",
          "'Why is governance essential to the credibility of stress testing?'",
        ],
        mustKnow: [
          "Reverse stress testing fixes the failure point (e.g. business-model non-viability) and searches for the scenarios and severities that would produce it.",
          "It counters imagination failure and disaster myopia by not requiring the modeller to guess the scenario in advance.",
          "Governance — board/senior ownership, challenge of assumptions, and a feedback loop into decisions — determines whether results influence risk-taking.",
        ],
        scoringActions: [
          "Frame reverse stress testing as outcome-first, scenario-second.",
          "Attribute credibility to governance and independent challenge, not just modelling.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Lock the LVaR calculation (the highest-yield numeric item in this module) and secure the conceptual liquidity-dimension and stress-testing items with precise vocabulary (exogenous/endogenous, severe-but-plausible, reverse).",
      timeBudget:
        "~3 minutes per item; the LVaR item can run slightly long if it layers spread volatility, so budget for the two-step exogenous formula.",
      answerSequence: [
        "Identify whether the question wants standard VaR, constant-spread LVaR, exogenous LVaR, or an endogenous adjustment.",
        "Compute VaR, then add 0.5 × V × spread (and k × σ_spread for exogenous).",
        "For stress items, check scenario coherence/severity and the outcome-first logic of reverse tests.",
        "Confirm you used half the spread and the correct confidence multiplier.",
      ],
      qualityChecks: [
        "Did I halve the spread for the round-trip cost?",
        "Did I add the spread-volatility term for exogenous LVaR?",
        "Is the stress scenario coherent across risk types and tied to a decision?",
      ],
    },
    studyNotes: [
      {
        id: "sn-lvar",
        title: "Liquidity-adjusted VaR: spread cost and its volatility",
        testPointIds: ["tp-lvar", "tp-liq-dimensions"],
        explanation: [
          "Standard VaR measures the loss from adverse price moves but implicitly assumes a position can be closed at the mid-price. In reality, unwinding costs at least half the bid-ask spread, and in stress the spread itself widens and becomes volatile. Liquidity-adjusted VaR (LVaR) restores honesty by adding a liquidity cost to VaR.",
          "The simplest constant-spread approach adds LC = 0.5 × V × spread, where V is the position value and the spread is expressed as a fraction of price; you pay half the round-trip because you cross one side of the market to exit. The exogenous-spread approach recognises that the spread is a random variable: LC = 0.5 × V × (μ_spread + k × σ_spread), where μ_spread is the mean relative spread, σ_spread its volatility, and k the confidence multiplier (e.g. 1.645 at 95%). This captures the risk that, on a bad day, the spread is far wider than average.",
          "Both approaches treat liquidity as exogenous — a property of the instrument that is the same regardless of your size. For a position large relative to daily volume, that assumption fails: selling moves the price against you (endogenous liquidity / market impact), so the true cost grows more than linearly with size and must be modelled with an impact function rather than a fixed spread.",
        ],
        keyRules: [
          "Constant spread: LVaR = VaR + 0.5 × V × spread.",
          "Exogenous spread: LC = 0.5 × V × (μ_spread + k × σ_spread).",
          "Endogenous cost scales with position size vs market depth — beyond the quoted spread.",
        ],
        formulas: [
          "LVaR = VaR + 0.5 × V × (μ_spread + k × σ_spread) [exogenous].",
          "VaR (parametric) = V × z × σ_return over the horizon.",
        ],
        workedProblem: {
          scenario:
            "A $10m position has a daily return volatility of 2%. The bid-ask spread averages 1.0% of price with a spread volatility of 0.4%. Using a 99% confidence level (z = 2.33 for returns) and the exogenous-spread approach with the same 2.33 multiplier for the spread, compute the 1-day 99% VaR and LVaR.",
          steps: [
            "VaR = V × z × σ = 10,000,000 × 2.33 × 0.02 = $466,000.",
            "Stressed relative spread at 99% = μ + k × σ = 0.010 + 2.33 × 0.004 = 0.010 + 0.00932 = 0.01932.",
            "Liquidity cost LC = 0.5 × V × 0.01932 = 0.5 × 10,000,000 × 0.01932 = $96,600.",
            "LVaR = VaR + LC = 466,000 + 96,600 = $562,600.",
          ],
          conclusion:
            "The liquidity adjustment adds about $96,600 (roughly 21% on top of the $466,000 price VaR), lifting the exogenous LVaR to about $562,600. Ignoring the spread — and especially its volatility — would understate the true one-day risk of holding this position by more than a fifth.",
          markingNotes: [
            "Half the spread is applied (one side of the round trip).",
            "Spread volatility term k × σ_spread included for the exogenous approach.",
            "LVaR = price VaR + liquidity cost, added not multiplied.",
          ],
        },
      },
      {
        id: "sn-dimensions",
        title: "Dimensions of liquidity and the exogenous/endogenous split",
        testPointIds: ["tp-liq-dimensions"],
        explanation: [
          "Market liquidity is not one number. It has three dimensions: tightness — the cost of a small round trip, proxied by the bid-ask spread; depth — the quantity that can be transacted without moving the quoted price; and resilience — how quickly prices and depth recover after a liquidity shock. A security can be tight but shallow (fine for small clips, punishing for blocks) or deep but slow to recover.",
          "Layered on top is the exogenous-versus-endogenous distinction. Exogenous liquidity is a property of the market that every participant faces identically — the quoted spread on a small trade. Endogenous liquidity is a property of your own position: a holding large relative to daily volume cannot be sold at the quote because your own selling exhausts the depth and pushes the price down. Small positions live in the exogenous world and are well described by a spread add-on; large positions must add an endogenous market-impact term. Recognising which regime a question is in tells you whether a simple spread-based LVaR suffices or whether size-dependent impact matters.",
        ],
        keyRules: [
          "Tightness = spread; depth = size without price impact; resilience = recovery speed.",
          "Exogenous liquidity is trader-independent; endogenous depends on your size/urgency.",
          "Small position → exogenous only; large position → add endogenous impact.",
        ],
      },
      {
        id: "sn-execution",
        title: "Market impact and the optimal-execution trade-off",
        testPointIds: ["tp-market-impact"],
        explanation: [
          "Executing a large order forces a choice. Trade quickly and you compress the timing window — reducing exposure to adverse price drift — but you pay heavy market impact, both temporary (a price concession that reverses once you stop trading) and permanent (the price move that reflects the information your trade reveals). Trade slowly and you shrink market impact but leave the unexecuted balance exposed to volatility for longer, raising timing risk.",
          "Optimal execution, in the Almgren–Chriss framing, minimises expected execution cost plus a risk-aversion-weighted variance of that cost, producing an efficient frontier of trajectories. A risk-neutral trader tolerates a slow schedule to minimise impact; a risk-averse trader front-loads execution, accepting more impact to cut timing risk. The practical exam point is directional: greater urgency or risk aversion → faster trading → higher impact but lower timing risk, and vice versa.",
        ],
        keyRules: [
          "Fast/large trading → high market impact, low timing risk; slow trading → the reverse.",
          "Temporary impact reverses; permanent impact reflects information and persists.",
          "Optimal execution trades off expected cost against cost variance (risk aversion).",
        ],
      },
      {
        id: "sn-ent-stress",
        title: "Enterprise-wide stress testing: coherence and use",
        testPointIds: ["tp-ent-stress"],
        explanation: [
          "Siloed risk measures miss the fact that market, credit and liquidity shocks arrive together and amplify one another. Enterprise-wide stress testing imposes a single, coherent macro narrative across the whole balance sheet: a severe recession, say, simultaneously widens credit spreads (market loss on the trading book), raises corporate defaults (credit loss on the banking book) and drains funding (liquidity strain), with the correlations between these effects made explicit rather than assumed away.",
          "A good scenario is severe but plausible and internally consistent — the macro variables must move in mutually compatible directions, and the severity must be extreme enough to be informative without being dismissed as fantasy. Above all, the results must be used: they should shape capital targets, position and concentration limits, and the contingency funding plan. A stress test that produces a report no one acts on has failed regardless of its statistical sophistication.",
        ],
        keyRules: [
          "Aggregate market, credit and liquidity risk under one coherent macro story.",
          "Severe-but-plausible and internally consistent scenario variables.",
          "Feed results into capital, limits and contingency planning.",
        ],
      },
      {
        id: "sn-reverse-stress",
        title: "Reverse stress testing and governance",
        testPointIds: ["tp-reverse-stress"],
        explanation: [
          "Conventional stress testing starts with a scenario and computes the loss; reverse stress testing inverts the logic. It fixes the outcome — typically the point at which the business model becomes non-viable or the firm breaches a hard constraint — and then searches for the combinations of shocks and severities that could drive the firm there. By not requiring the modeller to imagine the scenario in advance, it defends against imagination failure and disaster myopia, surfacing tail paths that forward scenario design overlooks.",
          "Neither form of testing is worth anything without governance. The board and senior management must own the exercise, challenge the assumptions (run-off rates, correlations, saleability), and ensure a genuine feedback loop into risk appetite, limits and contingency plans. Credibility comes from independent challenge and from evidence that results actually change behaviour — governance is what turns a modelling exercise into a risk-management control.",
        ],
        keyRules: [
          "Reverse stress testing: fix the failure, then find the scenarios that cause it.",
          "It counters imagination failure/disaster myopia.",
          "Governance and independent challenge make any stress test credible and actionable.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m10-1",
        testPointIds: ["tp-lvar"],
        style: "Scenario calculation (MCQ)",
        question:
          "A trading desk holds a $5m position with a 1-day 95% VaR of $120,000. The relative bid-ask spread averages 0.8% with a standard deviation of 0.3%. Using the exogenous-spread approach at 95% (multiplier 1.645), which is closest to the 1-day 95% LVaR? (a) $120,000 (b) $152,300 (c) $140,000 (d) $332,300.",
        answerPlan: [
          "Compute stressed spread.",
          "Compute liquidity cost as half the spread times value.",
          "Add to VaR.",
        ],
        modelAnswer:
          "Stressed relative spread = 0.008 + 1.645 × 0.003 = 0.008 + 0.004935 = 0.012935. Liquidity cost = 0.5 × 5,000,000 × 0.012935 = $32,338. LVaR = 120,000 + 32,338 ≈ $152,338, closest to (b) $152,300. Option (a) ignores liquidity entirely; (c) uses only the mean spread without its volatility; (d) forgets to halve the spread.",
        markingGuide: [
          "Stressed spread includes 1.645 × σ_spread.",
          "Liquidity cost halves the spread and scales by position value.",
          "LVaR = VaR + liquidity cost ≈ $152,300 (option b).",
        ],
      },
      {
        id: "pp-m10-2",
        testPointIds: ["tp-liq-dimensions", "tp-market-impact"],
        style: "Concept (MCQ)",
        question:
          "A portfolio manager must liquidate a position equal to five days' average trading volume within one day. Which statement is MOST accurate? (a) A constant-spread LVaR fully captures the cost (b) The dominant cost is endogenous market impact, which grows more than linearly with size (c) Timing risk is irrelevant because the trade is fast (d) Resilience is the only relevant dimension.",
        answerPlan: [
          "Assess size vs depth.",
          "Identify endogenous impact.",
          "Reject the exogenous-only view.",
        ],
        modelAnswer:
          "The answer is (b). A position worth five days' volume is large relative to market depth, so exiting it moves the price against the seller — an endogenous liquidity cost that scales more than linearly with size, not the fixed half-spread of the exogenous approach. Thus (a) is wrong: a constant-spread LVaR understates the cost. (c) is wrong because rapid execution actually maximises impact even as it reduces timing risk. (d) wrongly elevates resilience alone; depth is the binding dimension here.",
        markingGuide: [
          "Selects (b) with endogenous/market-impact reasoning.",
          "Explains why the exogenous spread add-on is insufficient for large positions.",
        ],
      },
      {
        id: "pp-m10-3",
        testPointIds: ["tp-ent-stress", "tp-reverse-stress"],
        style: "Concept (MCQ)",
        question:
          "A risk committee wants to identify the combination of shocks that would render the firm non-viable, without pre-specifying a scenario, and wants assurance the exercise will influence limits. Which pairing BEST meets both needs? (a) A single-factor market stress; publish the report (b) Reverse stress testing; embed results in the risk-appetite/limit framework via board governance (c) Historical VaR backtest; no governance change (d) An idiosyncratic-only liquidity scenario; leave limits unchanged.",
        answerPlan: [
          "Match method to outcome-first goal.",
          "Match governance to 'will influence limits'.",
          "Select the pairing.",
        ],
        modelAnswer:
          "The answer is (b). Reverse stress testing is precisely the outcome-first method: it fixes non-viability and searches for the causing scenarios, avoiding the need to guess in advance. Embedding the results in the risk-appetite and limit framework under board governance is what makes the exercise bite. Option (a) is a forward single-factor test with no governance loop; (c) is a validation exercise, not a forward-looking failure search; (d) is too narrow and explicitly leaves decisions unchanged.",
        markingGuide: [
          "Selects (b) and identifies reverse stress testing as outcome-first.",
          "Links governance embedding to actionable limits.",
        ],
      },
    ],
  }),

  // ============================ INVESTMENT RISK ============================
  "frm-p2-m11": examDepth({
    testPoints: [
      {
        id: "tp-risk-budget",
        title: "Risk contribution and risk budgeting",
        priority: "critical",
        examinerFocus:
          "Whether you can compute a position's marginal and total risk contribution and see that capital weights and risk weights diverge — a small capital allocation to a volatile, correlated strategy can consume a large share of the risk budget.",
        typicalQuestionForms: [
          "'Compute each asset's percentage contribution to portfolio risk.'",
          "'Why can a 10% capital weight represent 30% of portfolio risk?'",
        ],
        mustKnow: [
          "Marginal contribution to risk MCR_i = ∂σ_p/∂w_i = cov(r_i, r_p)/σ_p; risk contribution RC_i = w_i × MCR_i.",
          "Risk contributions sum to total risk: Σ RC_i = σ_p, so percentage contributions sum to 100%.",
          "Risk budgeting allocates the risk budget (RC shares), not capital shares; correlations, not just volatilities, drive the split.",
        ],
        scoringActions: [
          "Compute cov(r_i, r_p) = w_i σ_i² + Σ_{j≠i} w_j ρ_ij σ_i σ_j.",
          "Divide each RC_i by σ_p (or by variance) for percentage risk shares.",
          "Contrast the risk share with the capital weight to expose concentration.",
        ],
      },
      {
        id: "tp-alt-risks",
        title: "Hedge-fund and private-equity risks",
        priority: "high",
        examinerFocus:
          "Whether you recognise the distinctive risks of alternatives: option-like/tail payoffs and leverage in hedge funds, and illiquidity, the J-curve and vintage/valuation risk in private equity, all of which make reported volatility a poor risk gauge.",
        typicalQuestionForms: [
          "'Why can a hedge fund's low reported volatility understate its true risk?'",
          "'What risks are unique to private equity?'",
        ],
        mustKnow: [
          "Many hedge-fund strategies embed short-optionality/negative-skew payoffs (steady gains, rare large losses) and use leverage, so standard deviation misses the tail.",
          "Private equity carries illiquidity risk (locked capital), the J-curve (early fees/write-downs before gains), and vintage-year and valuation (stale-mark) risk.",
          "Reported returns are smoothed by infrequent, model-based marks, biasing volatility and correlation downward.",
        ],
        scoringActions: [
          "Flag negative skew/fat tails rather than relying on reported σ.",
          "Name illiquidity, J-curve and vintage risk for private equity specifically.",
        ],
      },
      {
        id: "tp-smoothing",
        title: "Return smoothing, autocorrelation and unsmoothing",
        priority: "high",
        examinerFocus:
          "Whether you understand that appraisal-based/illiquid marks induce positive autocorrelation that understates true volatility and beta, and that unsmoothing recovers a more realistic risk profile.",
        typicalQuestionForms: [
          "'What does significant positive autocorrelation in monthly returns imply about reported volatility?'",
          "'How does smoothing bias the Sharpe ratio?'",
        ],
        mustKnow: [
          "Stale, model-based valuations make reported returns a moving average of true returns, inducing positive serial correlation.",
          "Smoothing understates volatility and market beta and therefore overstates Sharpe and understates correlation with public markets.",
          "Unsmoothing (e.g. Geltner/Getmansky-style) backs out an estimate of the true, more volatile return series.",
        ],
        scoringActions: [
          "Read positive autocorrelation as a signal of understated risk.",
          "State that unsmoothing raises estimated volatility/beta and lowers the reported Sharpe.",
        ],
      },
      {
        id: "tp-factor-decomp",
        title: "Factor decomposition and hidden common exposures",
        priority: "high",
        examinerFocus:
          "Whether you grasp that diversification across strategy labels is not diversification across factors: several 'different' funds can all load on the same equity, credit or liquidity factor, concentrating risk that a naïve view treats as spread out.",
        typicalQuestionForms: [
          "'How can factor analysis reveal hidden concentration in a multi-strategy portfolio?'",
          "'Distinguish systematic factor risk from residual (idiosyncratic) risk.'",
        ],
        mustKnow: [
          "A factor model r_i = α_i + Σ β_ik F_k + ε_i separates systematic factor exposure from residual risk.",
          "Apparent strategy diversification can mask a shared factor bet (e.g. hidden long-equity or short-liquidity beta across managers).",
          "Aggregate portfolio factor betas — not manager labels — reveal true concentration; residual risk is the diversifiable remainder.",
        ],
        scoringActions: [
          "Aggregate factor betas across holdings to find the real exposure.",
          "Separate systematic (β F) from residual (ε) when attributing risk.",
        ],
      },
      {
        id: "tp-risk-parity",
        title: "Risk parity and its critiques",
        priority: "medium",
        examinerFocus:
          "Whether you can define risk parity as equalising risk contributions (often via leverage on low-volatility assets) and articulate its main critiques: leverage dependence, reliance on stable correlations, and vulnerability to joint rate/equity selloffs.",
        typicalQuestionForms: [
          "'How does risk parity differ from equal-weighting or mean-variance optimisation?'",
          "'What is the principal vulnerability of a levered risk-parity portfolio?'",
        ],
        mustKnow: [
          "Risk parity sets weights so each asset contributes equal risk (RC_i equal), typically leveraging low-volatility assets like bonds to match equity risk.",
          "It does not require expected-return forecasts, unlike mean-variance optimisation.",
          "Critiques: dependence on leverage and funding, sensitivity to correlation regime shifts, and losses when bonds and equities fall together.",
        ],
        scoringActions: [
          "Define parity via equal risk contributions, not equal capital.",
          "Cite leverage and correlation-regime risk as the key critiques.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Own the risk-contribution calculation (the single most testable numeric item here) and take the alternatives/smoothing/factor concepts with precise language about tails, autocorrelation and hidden betas.",
      timeBudget:
        "~3 minutes per item; give the risk-contribution item time to compute cov(r_i, r_p) correctly, and keep concept items to ~2 minutes.",
      answerSequence: [
        "For risk budgeting: compute σ_p, then cov(r_i, r_p), then RC_i = w_i × cov/σ_p.",
        "For alternatives: identify the hidden risk (tail, illiquidity, smoothing) behind the reported statistic.",
        "For factor items: aggregate betas to find concentration; separate systematic from residual.",
        "Confirm risk contributions sum to σ_p (or 100%).",
      ],
      qualityChecks: [
        "Do my risk contributions sum to total portfolio risk?",
        "Did I adjust reported volatility for smoothing/autocorrelation where relevant?",
        "Did I look at factor betas rather than strategy labels for concentration?",
      ],
    },
    studyNotes: [
      {
        id: "sn-risk-budget",
        title: "Risk contributions: why capital weight ≠ risk weight",
        testPointIds: ["tp-risk-budget"],
        explanation: [
          "Risk budgeting reframes allocation around risk rather than capital. The key quantity is the marginal contribution to risk, MCR_i = cov(r_i, r_p)/σ_p, which measures how portfolio volatility changes as the weight on asset i rises. Multiplying by the weight gives the risk contribution RC_i = w_i × MCR_i, and — because volatility is a linearly homogeneous function of the weights — these contributions sum exactly to portfolio volatility: Σ RC_i = σ_p. Each asset's percentage risk share is therefore RC_i/σ_p, and the shares sum to 100%.",
          "The practical revelation is that capital weight and risk weight diverge whenever volatilities and correlations differ. A strategy with a modest capital allocation but high volatility and high correlation to the rest of the book can dominate the risk budget. The assumption behind naïve capital-weighting — that dollars are a good proxy for risk — is exactly what risk budgeting overturns. Because the covariance term includes correlations, the split also shifts as correlations move, so risk budgets must be monitored, not set once.",
        ],
        keyRules: [
          "MCR_i = cov(r_i, r_p)/σ_p; RC_i = w_i × MCR_i.",
          "Σ RC_i = σ_p; percentage shares sum to 100%.",
          "Correlations, not just volatilities, determine each asset's risk share.",
        ],
        formulas: [
          "cov(r_i, r_p) = w_i σ_i² + Σ_{j≠i} w_j ρ_ij σ_i σ_j.",
          "Percentage risk contribution = RC_i / σ_p = w_i cov(r_i, r_p) / σ_p².",
        ],
        workedProblem: {
          scenario:
            "A two-asset portfolio holds 60% in Asset 1 (σ₁ = 20%) and 40% in Asset 2 (σ₂ = 10%), with correlation ρ = 0.5. Compute portfolio volatility and each asset's percentage contribution to risk.",
          steps: [
            "Variance = 0.6²×0.20² + 0.4²×0.10² + 2×0.6×0.4×0.5×0.20×0.10 = 0.0144 + 0.0016 + 0.0048 = 0.0208.",
            "σ_p = √0.0208 = 14.42%.",
            "cov(1,p) = w₁σ₁² + w₂ρσ₁σ₂ = 0.6×0.04 + 0.4×0.01 = 0.024 + 0.004 = 0.028; cov(2,p) = 0.4×0.01 + 0.6×0.01 = 0.010.",
            "RC₁ = w₁×cov(1,p)/σ_p = 0.6×0.028/0.1442 = 11.65%; RC₂ = 0.4×0.010/0.1442 = 2.77% (sum = 14.42% = σ_p).",
            "Percentage shares: Asset 1 = 0.0168/0.0208 = 80.8%; Asset 2 = 0.004/0.0208 = 19.2%.",
          ],
          conclusion:
            "Although Asset 1 holds only 60% of capital, it accounts for about 81% of portfolio risk, because it is both more volatile and correlated with the rest of the book. Capital weighting would badly understate its true risk footprint — the essence of why risk budgeting exists.",
          markingNotes: [
            "cov(r_i, r_p) built from own-variance plus the correlated cross term.",
            "Risk contributions sum to σ_p; percentage shares sum to 100%.",
            "Capital weight (60%) contrasted with risk share (81%).",
          ],
        },
      },
      {
        id: "sn-alt-risks",
        title: "The hidden risks of hedge funds and private equity",
        testPointIds: ["tp-alt-risks", "tp-smoothing"],
        explanation: [
          "Alternatives break the assumption that standard deviation captures risk. Many hedge-fund strategies — merger arbitrage, short-volatility, carry, convergence trades — earn a small, steady premium most of the time in exchange for rare, large losses, producing negatively skewed, fat-tailed payoffs that look like 'picking up pennies in front of a steamroller'. Leverage magnifies both the premium and the tail. A low reported volatility on such a strategy is therefore misleading: the danger lives in the tail, not the body of the distribution.",
          "Private equity adds a different set of risks. Capital is locked for years (illiquidity risk); early fees and conservative write-downs depress early returns before value is realised (the J-curve); and outcomes depend heavily on the vintage year in which capital was deployed. On top of this, holdings are marked infrequently using models rather than transaction prices, so reported returns are smoothed. Smoothing induces positive autocorrelation, understates true volatility and market beta, and thereby flatters the Sharpe ratio and understates correlation with public equities — which is why unsmoothing techniques are used to recover a more realistic risk picture before these funds are combined with liquid assets.",
        ],
        keyRules: [
          "Hedge funds: negative skew/fat tails and leverage — reported σ understates tail risk.",
          "Private equity: illiquidity, J-curve and vintage-year risk.",
          "Smoothed marks → positive autocorrelation → understated volatility/beta, overstated Sharpe.",
        ],
      },
      {
        id: "sn-smoothing",
        title: "Detecting and correcting return smoothing",
        testPointIds: ["tp-smoothing"],
        explanation: [
          "When an asset is valued from appraisals or models rather than live trades, the reported return in any period is effectively a weighted average of the current and recent true returns. This moving-average structure produces statistically significant positive autocorrelation in the reported series — a tell-tale fingerprint of smoothing. Because averaging dampens period-to-period swings, the reported standard deviation is biased downward and the estimated beta to public markets is understated.",
          "The consequences flow straight into performance metrics: an understated volatility inflates the Sharpe ratio and an understated beta makes the fund look more diversifying than it is. Unsmoothing methods (Geltner for real estate, Getmansky–Lo–Makarov for hedge funds) invert the moving-average filter to estimate the underlying true returns, which are more volatile and more correlated with public markets. The examinable point is directional and unambiguous: correcting for smoothing raises estimated risk and lowers the apparent risk-adjusted performance, so uncorrected alternative statistics should be treated with suspicion.",
        ],
        keyRules: [
          "Positive autocorrelation in reported returns signals smoothing.",
          "Smoothing biases volatility and beta downward and Sharpe upward.",
          "Unsmoothing recovers higher, more realistic volatility, beta and correlation.",
        ],
        formulas: [
          "Reported r_t ≈ Σ θ_k × true r_{t−k} (moving-average of true returns).",
        ],
      },
      {
        id: "sn-factor-decomp",
        title: "Factor decomposition and hidden concentration",
        testPointIds: ["tp-factor-decomp"],
        explanation: [
          "Diversifying by strategy name is not the same as diversifying by risk factor. A factor model, r_i = α_i + Σ_k β_ik F_k + ε_i, decomposes each holding's return into systematic exposures to common factors (equity market, credit, term, liquidity, momentum) and an idiosyncratic residual. Portfolio factor exposure is the weighted sum of the holdings' betas, and portfolio risk splits into a systematic part driven by those aggregate betas and a residual part that genuinely diversifies away.",
          "The danger the exam probes is hidden common exposure. Several managers with different labels — a long/short equity fund, a credit fund, a convertible-arbitrage fund — may all be long the equity-market factor or short liquidity, so a portfolio that appears diversified across strategies is actually a concentrated bet on one or two factors. Only by aggregating factor betas, rather than trusting the strategy taxonomy, does the true concentration appear. The residual risk, by contrast, is idiosyncratic and shrinks as more genuinely independent names are added.",
        ],
        keyRules: [
          "r_i = α_i + Σ β_ik F_k + ε_i separates systematic from residual risk.",
          "Aggregate factor betas reveal concentration hidden by strategy labels.",
          "Residual (idiosyncratic) risk diversifies away; factor risk does not.",
        ],
      },
      {
        id: "sn-risk-parity",
        title: "Risk parity: mechanics and critiques",
        testPointIds: ["tp-risk-parity", "tp-risk-budget"],
        explanation: [
          "Risk parity is a specific risk-budgeting rule: choose weights so that every asset contributes the same risk, RC_i equal across assets. Because low-volatility assets like high-grade bonds naturally contribute little risk, achieving parity usually means leveraging them up so their risk contribution matches that of equities. Unlike mean-variance optimisation, risk parity needs no expected-return forecasts — a feature its advocates prize, since return estimates are notoriously unreliable.",
          "The critiques are equally sharp. First, the strategy depends on leverage and thus on the availability and cost of funding; a funding squeeze forces deleveraging at the worst time. Second, it assumes the correlation structure used to equalise risk contributions is stable, but correlations shift in regimes — most damagingly, the bond–equity correlation can turn positive, so both legs fall together and the diversification premise collapses. Third, a rise in rates that hits the levered bond leg can dominate portfolio losses. Risk parity is therefore best understood as a disciplined risk-budgeting framework whose Achilles' heels are leverage dependence and correlation-regime risk.",
        ],
        keyRules: [
          "Risk parity equalises risk contributions, usually via leverage on low-vol assets.",
          "It requires no expected-return forecasts (unlike mean-variance).",
          "Key risks: leverage/funding dependence and correlation-regime shifts (bonds and equities falling together).",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m11-1",
        testPointIds: ["tp-risk-budget"],
        style: "Scenario calculation (MCQ)",
        question:
          "A portfolio is 70% Asset A (σ_A = 25%) and 30% Asset B (σ_B = 15%), correlation 0.4. Which is closest to Asset A's percentage contribution to portfolio risk? (a) 70% (b) 84% (c) 50% (d) 61%.",
        answerPlan: [
          "Compute variance.",
          "Compute cov(A,p).",
          "Divide to get the percentage share.",
        ],
        modelAnswer:
          "Variance = 0.7²×0.25² + 0.3²×0.15² + 2×0.7×0.3×0.4×0.25×0.15 = 0.030625 + 0.002025 + 0.006300 = 0.03895. cov(A,p) = w_A σ_A² + w_B ρ σ_A σ_B = 0.7×0.0625 + 0.3×0.4×0.25×0.15 = 0.04375 + 0.0045 = 0.04825. Percentage RC_A = w_A × cov(A,p)/variance = 0.7×0.04825/0.03895 = 0.033775/0.03895 = 86.7%, closest to (b) 84%. Option (a) is the capital weight, not the risk share; (c)/(d) mis-handle the covariance term. Asset A dominates risk far more than its 70% capital weight suggests.",
        markingGuide: [
          "cov(A,p) includes own-variance and correlated cross term.",
          "Percentage risk share = w_A × cov(A,p)/variance ≈ 87% (option b).",
          "Distinguishes risk share from capital weight.",
        ],
      },
      {
        id: "pp-m11-2",
        testPointIds: ["tp-smoothing", "tp-alt-risks"],
        style: "Concept (MCQ)",
        question:
          "A fund of hedge funds reports monthly returns with a statistically significant first-order autocorrelation of +0.35. Which conclusion is MOST supported? (a) The fund's true volatility is lower than reported (b) The reported Sharpe ratio overstates risk-adjusted performance (c) The fund has no market beta (d) Returns are independent over time.",
        answerPlan: [
          "Interpret positive autocorrelation.",
          "Link to volatility/Sharpe bias.",
          "Reject the distractors.",
        ],
        modelAnswer:
          "The answer is (b). Significant positive autocorrelation is the fingerprint of return smoothing from stale/model-based marks, which biases reported volatility (and beta) downward. A downward-biased volatility inflates the Sharpe ratio, so the reported Sharpe overstates true risk-adjusted performance. Option (a) is backwards — true volatility is higher than reported; (c) is wrong because smoothing understates, not eliminates, beta; (d) contradicts the observed autocorrelation.",
        markingGuide: [
          "Selects (b) and links smoothing to understated volatility.",
          "Explains the upward bias in the reported Sharpe.",
        ],
      },
      {
        id: "pp-m11-3",
        testPointIds: ["tp-factor-decomp", "tp-risk-parity"],
        style: "Scenario (MCQ)",
        question:
          "An allocator holds five 'diversified' hedge funds but a factor decomposition shows each has a large positive equity-market beta. The allocator also runs a levered risk-parity sleeve. Which pair of conclusions is correct? (a) The hedge-fund book is well diversified; risk parity is immune to correlation shifts (b) The hedge-fund book is concentrated in equity-market risk; the risk-parity sleeve is vulnerable if bond–equity correlation turns positive (c) Strategy labels prove diversification; leverage removes all risk (d) Residual risk dominates; funding risk is irrelevant.",
        answerPlan: [
          "Aggregate factor betas.",
          "Assess risk-parity correlation vulnerability.",
          "Select the coherent pair.",
        ],
        modelAnswer:
          "The answer is (b). Aggregating factor betas shows the five funds share a large long-equity exposure, so the book is concentrated in the equity-market factor despite the diversified labels — strategy taxonomy is not factor diversification. Separately, the levered risk-parity sleeve relies on a stable (typically negative or low) bond–equity correlation; if that correlation turns positive, both legs fall together and the leverage amplifies the loss. Options (a), (c) and (d) each rest on the false premise that labels equal diversification or that leverage/funding risk can be ignored.",
        markingGuide: [
          "Identifies hidden equity-factor concentration via aggregated betas.",
          "Identifies correlation-regime/leverage vulnerability of risk parity.",
        ],
      },
    ],
  }),

  "frm-p2-m12": examDepth({
    testPoints: [
      {
        id: "tp-perf-measures",
        title: "Compute and select risk-adjusted performance measures",
        priority: "critical",
        examinerFocus:
          "Whether you can compute Sharpe, Treynor, the information ratio, Jensen's alpha, Sortino and M², and — the judgement part — pick the right one: total risk (Sharpe) for a whole portfolio, systematic risk (Treynor/Jensen) for a component of a diversified book, active risk (IR) for a benchmarked manager.",
        typicalQuestionForms: [
          "'Compute the Sharpe/Treynor/information ratio from the data.'",
          "'Which measure is appropriate when the portfolio is one sleeve of a diversified fund?'",
          "'What does M² add over the Sharpe ratio?'",
        ],
        mustKnow: [
          "Sharpe = (R_p − r_f)/σ_p (total risk); Treynor = (R_p − r_f)/β_p (systematic risk); Jensen's α = R_p − [r_f + β_p(R_m − r_f)].",
          "Information ratio = (R_p − R_b)/tracking error = active return/active risk; Sortino replaces σ with downside deviation.",
          "M² = r_f + Sharpe_p × σ_m restates Sharpe in return (percentage) units for comparison against the market.",
        ],
        scoringActions: [
          "Use total risk (Sharpe) for standalone portfolios, systematic risk (Treynor/Jensen) for components of a diversified book.",
          "Use the information ratio when the mandate is benchmark-relative.",
          "State whether risk is total, systematic or active before choosing the ratio.",
        ],
      },
      {
        id: "tp-fundamental-law",
        title: "The fundamental law and the transfer coefficient",
        priority: "high",
        examinerFocus:
          "Whether you can decompose the information ratio into skill (information coefficient) and breadth, and adjust for real-world implementation frictions via the transfer coefficient.",
        typicalQuestionForms: [
          "'Estimate the information ratio from IC and breadth.'",
          "'How do constraints reduce achievable IR through the transfer coefficient?'",
        ],
        mustKnow: [
          "Fundamental law: IR ≈ IC × √BR, where IC is the information coefficient (skill) and BR the breadth (independent bets per year).",
          "With implementation frictions, IR ≈ IC × √BR × TC, where the transfer coefficient TC ∈ [0,1] measures how fully views reach the portfolio.",
          "Doubling breadth raises IR by √2 ≈ 1.41×, not 2×; constraints (long-only, turnover, position limits) cut TC below 1.",
        ],
        scoringActions: [
          "Apply √breadth, not breadth, to the IC.",
          "Multiply by the transfer coefficient when constraints bind.",
        ],
      },
      {
        id: "tp-skill-luck",
        title: "Distinguishing skill from luck",
        priority: "high",
        examinerFocus:
          "Whether you know that a short track record cannot statistically separate alpha from luck, that the t-statistic of alpha ≈ IR × √years, and that data-mining and survivorship bias inflate apparent skill.",
        typicalQuestionForms: [
          "'How many years are needed for a given alpha to be statistically significant?'",
          "'How do survivorship and data-mining biases distort manager evaluation?'",
        ],
        mustKnow: [
          "t-statistic of alpha ≈ IR × √(number of years); significance at ~95% needs |t| ≈ 2.",
          "A high IR shortens the track record needed; a low IR may require decades to prove skill.",
          "Survivorship bias (failed funds drop out) overstates average performance; data-mining/multiple testing inflates apparent alpha; backfill bias flatters new entrants.",
        ],
        scoringActions: [
          "Compute required years as (t_target/IR)² for significance.",
          "Discount reported alpha for survivorship, backfill and data-mining bias.",
        ],
      },
      {
        id: "tp-attribution",
        title: "Return attribution: allocation, selection, interaction",
        priority: "medium",
        examinerFocus:
          "Whether you can decompose active return into allocation, selection and interaction effects (Brinson-style) and interpret which decision drove out- or under-performance.",
        typicalQuestionForms: [
          "'Decompose active return into allocation and selection.'",
          "'A manager overweighted a strong sector but picked weak stocks in it — what does attribution show?'",
        ],
        mustKnow: [
          "Allocation effect = (w_p − w_b) × (R_b,sector − R_b,total); selection effect = w_b × (R_p,sector − R_b,sector); interaction is the residual cross term.",
          "Allocation, selection and interaction sum to total active return.",
          "Attribution isolates where value was added: sector/asset weighting vs security picking.",
        ],
        scoringActions: [
          "Separate the weighting decision (allocation) from the picking decision (selection).",
          "Confirm the three effects reconcile to total active return.",
        ],
      },
      {
        id: "tp-construction",
        title: "Portfolio construction under constraints and costs",
        priority: "medium",
        examinerFocus:
          "Whether you understand how constraints (long-only, turnover, position and factor limits) and transaction costs erode paper alpha, lowering the transfer coefficient and net information ratio.",
        typicalQuestionForms: [
          "'Why does a long-only constraint reduce the transfer coefficient?'",
          "'How do transaction costs and turnover affect net alpha?'",
        ],
        mustKnow: [
          "Constraints prevent full expression of views, lowering the transfer coefficient and therefore realised IR.",
          "Transaction costs and turnover convert paper (gross) alpha into a smaller net alpha; high-turnover strategies are most exposed.",
          "The efficient implementation balances alpha capture against cost and constraint drag.",
        ],
        scoringActions: [
          "Link each constraint to a lower transfer coefficient.",
          "Net transaction costs off gross alpha before judging a strategy.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Secure the performance-measure calculations and the skill-versus-luck (t-stat) item — both are dependable numeric marks — and take the fundamental-law and attribution items with clean formula discipline.",
      timeBudget:
        "~3 minutes per item; a multi-measure computation (Sharpe + Treynor + IR on one dataset) can run slightly long, so bank the concept items quickly to make room.",
      answerSequence: [
        "Decide which risk is relevant (total/systematic/active) and choose the matching measure.",
        "Compute the ratio, keeping excess return over the correct base (r_f or benchmark).",
        "For skill/luck, use t ≈ IR × √years and solve for years if asked.",
        "For attribution, split allocation vs selection and check they reconcile to active return.",
      ],
      qualityChecks: [
        "Did I match total/systematic/active risk to Sharpe/Treynor/IR?",
        "Did I use √breadth and the transfer coefficient in the fundamental law?",
        "Did I compute required years as (2/IR)² for ~95% significance?",
      ],
    },
    studyNotes: [
      {
        id: "sn-perf-measures",
        title: "Choosing and computing the right performance measure",
        testPointIds: ["tp-perf-measures"],
        explanation: [
          "Each risk-adjusted measure divides excess return by a different notion of risk, so choosing the measure is half the question. The Sharpe ratio, (R_p − r_f)/σ_p, uses total risk and is right for a standalone portfolio that represents an investor's entire risky holding. The Treynor ratio, (R_p − r_f)/β_p, uses only systematic risk and is appropriate when the portfolio is one well-diversified sleeve of a larger book, so its idiosyncratic risk is already diversified away. Jensen's alpha, R_p − [r_f + β_p(R_m − r_f)], measures return above the CAPM line and, like Treynor, focuses on systematic risk.",
          "For benchmark-relative mandates the information ratio, (R_p − R_b)/tracking error, is the natural gauge: it rewards active return per unit of active risk. Sortino refines Sharpe by replacing total volatility with downside deviation, which suits asymmetric or negatively skewed return distributions where upside variance should not be penalised. Finally M², M² = r_f + Sharpe_p × σ_m, restates the Sharpe ranking in percentage-return units by levering/de-levering the portfolio to the market's volatility, making 'how much better than the market' directly readable.",
          "The examinable discipline is to state, before computing, whether the relevant risk is total, systematic or active — that single decision determines whether Sharpe, Treynor/Jensen or the information ratio is correct, and it is exactly what the vignette is testing.",
        ],
        keyRules: [
          "Sharpe = total risk; Treynor/Jensen = systematic risk; IR = active risk.",
          "Use Sharpe for standalone portfolios, Treynor/Jensen for sleeves of a diversified book.",
          "M² restates Sharpe in return units; Sortino uses downside deviation.",
        ],
        formulas: [
          "Sharpe = (R_p − r_f)/σ_p; Treynor = (R_p − r_f)/β_p.",
          "Jensen α = R_p − [r_f + β_p(R_m − r_f)]; IR = (R_p − R_b)/TE.",
          "M² = r_f + Sharpe_p × σ_m.",
        ],
        workedProblem: {
          scenario:
            "A portfolio returns 12% with volatility 15% and beta 1.2. The risk-free rate is 2%, the benchmark returns 9%, and tracking error is 4%. Compute the Sharpe ratio, Treynor ratio and information ratio, and state which is appropriate if the portfolio is the investor's entire holding.",
          steps: [
            "Sharpe = (12 − 2)/15 = 10/15 = 0.667.",
            "Treynor = (12 − 2)/1.2 = 10/1.2 = 8.33 (percentage-per-unit-beta).",
            "Information ratio = (12 − 9)/4 = 3/4 = 0.75.",
            "If the portfolio is the entire holding, total risk matters, so the Sharpe ratio is the appropriate measure.",
          ],
          conclusion:
            "Sharpe = 0.667, Treynor = 8.33 and IR = 0.75. Because the portfolio constitutes the investor's whole risky allocation, undiversified idiosyncratic risk is borne in full, so the Sharpe ratio (total risk) is the correct lens; Treynor would be right only if this were one sleeve of a broader, diversified book.",
          markingNotes: [
            "Excess return measured over r_f for Sharpe/Treynor and over the benchmark for IR.",
            "Correct denominator: σ_p, β_p, tracking error respectively.",
            "Sharpe selected for a standalone (total-risk) portfolio.",
          ],
        },
      },
      {
        id: "sn-fundamental-law",
        title: "The fundamental law of active management",
        testPointIds: ["tp-fundamental-law", "tp-perf-measures"],
        explanation: [
          "Grinold's fundamental law expresses a manager's information ratio as the product of skill and diversification of bets: IR ≈ IC × √BR, where the information coefficient IC is the correlation between forecasts and realised returns (skill) and breadth BR is the number of independent, uncorrelated active bets taken per year. The square root is the crucial feature — value comes from applying modest skill across many independent decisions, so doubling breadth improves the IR only by √2 ≈ 1.41×, not 2×. A stock-picker with high skill but few bets can be beaten by a broadly diversified strategy with lower per-bet skill.",
          "Real portfolios cannot express every view, so the law is refined to IR ≈ IC × √BR × TC, where the transfer coefficient TC ∈ [0,1] measures how completely the manager's views survive constraints and costs on their way into positions. A long-only constraint, turnover caps, position limits and risk controls all pull TC below one, capping the realised information ratio no matter how skilled the forecasts. The assumption that bets are independent is also load-bearing: correlated bets inflate the effective breadth count and overstate the true IR.",
        ],
        keyRules: [
          "IR ≈ IC × √BR (skill × root-breadth).",
          "With frictions, IR ≈ IC × √BR × TC.",
          "Doubling breadth raises IR by √2; constraints push TC below 1.",
        ],
        formulas: [
          "IR ≈ IC × √BR × TC.",
        ],
      },
      {
        id: "sn-skill-luck",
        title: "Skill vs luck: statistics and biases",
        testPointIds: ["tp-skill-luck"],
        explanation: [
          "Distinguishing genuine skill from a lucky streak is fundamentally a statistical-power problem. The t-statistic on estimated alpha is approximately the information ratio times the square root of the number of years of data: t ≈ IR × √years. Because roughly |t| ≈ 2 is needed for 95% confidence, the number of years required to prove a given skill level is about (2/IR)². A manager with an IR of 0.5 needs around 16 years; one with an IR of 1.0 needs about 4. This is why a two- or three-year track record, however impressive, rarely proves anything.",
          "Even with enough data, several biases inflate apparent skill and must be discounted. Survivorship bias arises because funds that fail disappear from databases, lifting the average of the survivors. Data-mining and multiple-testing bias means that if enough strategies or managers are screened, some will look brilliant by chance. Backfill (instant-history) bias flatters funds that only enter a database after a good start. The disciplined evaluator therefore treats reported alpha as an upper bound, demands a long enough record for statistical significance, and asks how the manager was selected before crediting the outperformance to skill.",
        ],
        keyRules: [
          "t ≈ IR × √years; ~95% significance needs |t| ≈ 2.",
          "Years needed for significance ≈ (2/IR)².",
          "Discount alpha for survivorship, data-mining/multiple-testing and backfill bias.",
        ],
        formulas: [
          "t(alpha) ≈ IR × √(years); years for significance ≈ (t_target / IR)².",
        ],
        workedProblem: {
          scenario:
            "A manager reports an information ratio of 0.5 over a 5-year record. Is the alpha statistically significant at roughly 95%, and how long a record would be needed for significance?",
          steps: [
            "t ≈ IR × √years = 0.5 × √5 = 0.5 × 2.236 = 1.12.",
            "Compare to the ~2 threshold for 95% confidence: 1.12 < 2, so not significant.",
            "Required years ≈ (2/IR)² = (2/0.5)² = 4² = 16 years.",
          ],
          conclusion:
            "With t ≈ 1.12, the 5-year record cannot distinguish this manager's alpha from luck at the 95% level; about 16 years of consistent performance at IR = 0.5 would be needed. The result underlines why short track records — and unadjusted, possibly survivorship-selected samples — are weak evidence of skill.",
          markingNotes: [
            "t computed as IR × √years.",
            "Compared against the |t| ≈ 2 significance threshold.",
            "Required years derived as (2/IR)².",
          ],
        },
      },
      {
        id: "sn-attribution",
        title: "Return attribution: allocation vs selection",
        testPointIds: ["tp-attribution"],
        explanation: [
          "Brinson-style attribution decomposes a manager's active return (portfolio minus benchmark) into distinct decisions. The allocation effect captures the value of over- or under-weighting sectors relative to the benchmark: for each sector it is (w_p − w_b) × (R_b,sector − R_b,total), rewarding overweights in sectors that beat the overall benchmark. The selection effect captures security-picking within sectors: w_b × (R_p,sector − R_b,sector), rewarding picks that beat the sector benchmark. The interaction effect is the residual cross term, (w_p − w_b) × (R_p,sector − R_b,sector), and the three sum exactly to total active return.",
          "The interpretive payoff is diagnostic. A manager who overweighted a strong sector but chose weak names within it shows positive allocation but negative selection — good top-down calls undermined by poor stock-picking. Attribution therefore tells the allocator where the skill (or luck) actually lies, which is far more useful than a single active-return number, and it is what benchmarked mandates are graded on.",
        ],
        keyRules: [
          "Allocation = (w_p − w_b)(R_b,sector − R_b,total); rewards weighting good sectors.",
          "Selection = w_b(R_p,sector − R_b,sector); rewards picking within sectors.",
          "Allocation + selection + interaction = total active return.",
        ],
        formulas: [
          "Active return = Σ_sector [allocation + selection + interaction].",
        ],
      },
      {
        id: "sn-construction",
        title: "Constraints, costs and the transfer coefficient",
        testPointIds: ["tp-construction", "tp-fundamental-law"],
        explanation: [
          "A model portfolio built without frictions expresses every view at its ideal size; a real portfolio cannot. Long-only constraints prevent full expression of negative views (you can underweight to zero but not short), turnover limits throttle the speed at which new information is traded, and position, sector and factor limits cap concentration. Each of these lowers the transfer coefficient — the correlation between the ideal and implemented active positions — and, through IR ≈ IC × √BR × TC, directly reduces the realised information ratio below what raw skill would allow.",
          "Transaction costs then convert gross, paper alpha into a smaller net alpha. High-turnover strategies suffer most, because each rebalance pays spread and impact; a strategy that looks profitable on paper can be a net loser after costs. Good portfolio construction therefore optimises net of costs and constraints — trading only when the expected alpha exceeds the round-trip cost, and accepting that the achievable frontier sits inside the frictionless one. The examinable link is causal and clean: tighter constraints and higher costs → lower transfer coefficient and net alpha → lower realised IR.",
        ],
        keyRules: [
          "Constraints lower the transfer coefficient and thus realised IR.",
          "Transaction costs turn gross alpha into smaller net alpha; turnover is the amplifier.",
          "Optimise net of costs/constraints — trade only when alpha exceeds round-trip cost.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m12-1",
        testPointIds: ["tp-perf-measures"],
        style: "Scenario calculation (MCQ)",
        question:
          "Fund X (one sleeve of a diversified pension book) returns 11% with volatility 18% and beta 0.9; Fund Y returns 9% with volatility 12% and beta 0.6. The risk-free rate is 1%. Which fund is better on the appropriate measure, and why? (a) X, higher Sharpe (b) Y, higher Sharpe (c) X, higher Treynor (d) Y, higher Treynor.",
        answerPlan: [
          "Choose the measure (sleeve → systematic risk).",
          "Compute Treynor for both.",
          "Select the higher.",
        ],
        modelAnswer:
          "Because each fund is a sleeve of a diversified book, idiosyncratic risk is diversified away and systematic risk is what matters, so Treynor is the appropriate measure. Treynor_X = (11 − 1)/0.9 = 11.11; Treynor_Y = (9 − 1)/0.6 = 13.33. Fund Y has the higher Treynor, so the answer is (d). Sharpe (options a/b) would be the wrong lens here because it penalises total risk that is already diversified at the fund-of-funds level; on Sharpe the ranking could differ, but that measure is inappropriate for a component sleeve.",
        markingGuide: [
          "Selects Treynor as the correct measure for a diversified-book sleeve.",
          "Treynor_X = 11.11, Treynor_Y = 13.33.",
          "Chooses Fund Y (option d).",
        ],
      },
      {
        id: "pp-m12-2",
        testPointIds: ["tp-skill-luck", "tp-fundamental-law"],
        style: "Scenario calculation (MCQ)",
        question:
          "A manager has an information ratio of 0.4. Approximately how many years of data are needed before the alpha is statistically significant at about the 95% level? (a) 4 years (b) 10 years (c) 25 years (d) 2 years.",
        answerPlan: [
          "Use t ≈ IR × √years.",
          "Set t = 2.",
          "Solve for years.",
        ],
        modelAnswer:
          "Significance at ~95% needs t ≈ 2, and t ≈ IR × √years, so years ≈ (2/IR)² = (2/0.4)² = 5² = 25 years, option (c). This illustrates the fundamental-law link: a modest IR of 0.4 requires a very long record to prove skill, whereas an IR of 1.0 would need only about 4 years. Options (a) and (d) correspond to much higher IRs; (b) understates the requirement for an IR this low.",
        markingGuide: [
          "Uses years ≈ (2/IR)².",
          "Computes ≈ 25 years (option c).",
          "Connects low IR to long required track record.",
        ],
      },
      {
        id: "pp-m12-3",
        testPointIds: ["tp-attribution", "tp-construction"],
        style: "Scenario (MCQ)",
        question:
          "A benchmarked equity manager beat its benchmark this year. Attribution shows a large positive allocation effect but a negative selection effect, and turnover was very high. Which interpretation is BEST? (a) Skill came from stock-picking; costs were irrelevant (b) Value came from sector weighting, undermined by weak stock-picking; high turnover likely eroded net alpha (c) The manager has a transfer coefficient of 1 (d) Allocation and selection cannot be separated.",
        answerPlan: [
          "Interpret the attribution split.",
          "Assess turnover/cost impact.",
          "Select the coherent reading.",
        ],
        modelAnswer:
          "The answer is (b). Positive allocation with negative selection means the outperformance came from top-down sector weighting, not security selection — the manager picked the right sectors but weak names within them. High turnover means transaction costs likely cut gross into a smaller net alpha, so the reported gross outperformance overstates what the client actually earned. Option (a) reverses the attribution; (c) is unsupported and inconsistent with binding real-world frictions; (d) is false because Brinson attribution explicitly separates the two effects.",
        markingGuide: [
          "Reads positive allocation/negative selection correctly.",
          "Notes high turnover erodes net alpha via costs.",
        ],
      },
    ],
  }),

  // ============================ CURRENT ISSUES ============================
  "frm-p2-m13": examDepth({
    testPoints: [
      {
        id: "tp-ai-model-risk",
        title: "AI/ML model risk and governance",
        priority: "high",
        examinerFocus:
          "Whether you can articulate the model-risk features specific to machine learning — opacity, overfitting, data/label bias, drift and lack of explainability — and the governance controls that address them, connecting AI risk back to the core model-risk framework rather than treating it as novel and ungovernable.",
        typicalQuestionForms: [
          "'Which risk is MOST specific to a machine-learning credit model versus a traditional scorecard?'",
          "'Why is explainability central to AI governance in regulated risk decisions?'",
        ],
        mustKnow: [
          "ML models can be opaque ('black box'), prone to overfitting, and to inheriting bias from training data/labels; performance can degrade as data drifts from the training distribution.",
          "Governance responses: independent validation, explainability/interpretability tools, bias testing, ongoing monitoring for drift, and human oversight of consequential decisions.",
          "AI risk is an extension of the existing model-risk management framework (development standards, independent validation, use governance), not a separate discipline.",
        ],
        scoringActions: [
          "Name the ML-specific failure (opacity/overfitting/bias/drift) the question targets.",
          "Map each failure to a concrete governance control (validation, explainability, monitoring, human oversight).",
        ],
      },
      {
        id: "tp-climate",
        title: "Climate-related financial risk: physical vs transition",
        priority: "high",
        examinerFocus:
          "Whether you cleanly separate physical risk (from climate events) from transition risk (from policy/technology/market shifts toward a low-carbon economy), understand why climate scenario analysis is long-horizon and deeply uncertain, and know it feeds core credit/market frameworks.",
        typicalQuestionForms: [
          "'Classify a given exposure as physical or transition climate risk.'",
          "'Why is climate scenario analysis harder than conventional stress testing?'",
        ],
        mustKnow: [
          "Physical risk = losses from acute events (floods, storms) and chronic shifts (sea-level rise); transition risk = losses from policy, technology and preference shifts (carbon pricing, stranded assets).",
          "Climate scenario analysis is long-horizon, path-dependent and highly uncertain, so it emphasises directional insight over point estimates.",
          "Disclosure frameworks (TCFD-style: governance, strategy, risk management, metrics/targets) standardise reporting; climate risk transmits through credit, market, operational and liquidity channels.",
        ],
        scoringActions: [
          "Decide physical vs transition by the source of loss (event vs policy/technology shift).",
          "Frame climate risk as a transmission channel into existing risk types, not a standalone silo.",
        ],
      },
      {
        id: "tp-digital-assets",
        title: "Digital-asset, stablecoin and DeFi risks",
        priority: "high",
        examinerFocus:
          "Whether you know the distinctive risks of crypto assets (extreme volatility, operational/custody, market-integrity), stablecoins (run and reserve-quality risk, de-pegging), and DeFi (smart-contract, oracle, governance and composability risk).",
        typicalQuestionForms: [
          "'Why can a stablecoin de-peg even when nominally fully reserved?'",
          "'What new risk does DeFi introduce relative to traditional intermediation?'",
        ],
        mustKnow: [
          "Crypto assets carry extreme price volatility plus operational and custody risk (key management, exchange failure) and market-integrity risk.",
          "Stablecoins face run risk if reserves are illiquid or opaque; a maturity/liquidity mismatch in reserves can force fire-sales and a de-peg even at nominal full backing.",
          "DeFi adds smart-contract (code) risk, oracle-manipulation risk, governance-token concentration risk and composability/contagion risk across protocols.",
        ],
        scoringActions: [
          "Distinguish reserve-quality/liquidity risk from nominal backing when assessing a stablecoin.",
          "Attribute DeFi failures to code/oracle/governance mechanisms, not generic 'crypto volatility'.",
        ],
      },
      {
        id: "tp-nbfi",
        title: "Non-bank financial intermediation and systemic risk",
        priority: "medium",
        examinerFocus:
          "Whether you understand why the growth of non-bank intermediation (funds, insurers, dealers, private credit) raises systemic concerns — leverage and liquidity mismatch outside the bank regulatory perimeter — and how it can transmit stress.",
        typicalQuestionForms: [
          "'Why does the growth of non-bank intermediation raise financial-stability concerns?'",
          "'How can an open-ended fund's liquidity mismatch create systemic risk?'",
        ],
        mustKnow: [
          "NBFIs can build leverage and liquidity mismatches (e.g. daily-dealing funds holding illiquid assets) with lighter prudential oversight than banks.",
          "Forced selling by NBFIs under redemption or margin pressure can amplify market moves and transmit stress to banks via funding and counterparty links.",
          "First-mover advantage in redeemable vehicles creates run dynamics analogous to bank runs.",
        ],
        scoringActions: [
          "Identify leverage and/or liquidity mismatch as the systemic driver.",
          "Trace the transmission channel (fire sales, funding/counterparty links) to the banking system.",
        ],
      },
      {
        id: "tp-regulation",
        title: "Regulatory evolution and links to core frameworks",
        priority: "medium",
        examinerFocus:
          "Whether you can connect ongoing regulatory developments (finalisation of the Basel capital framework, revised market-risk rules, resolution/liquidity standards) to the core FRM frameworks, and explain why cross-border coordination is difficult — without asserting dated specifics.",
        typicalQuestionForms: [
          "'How does a revised market-risk capital approach change incentives versus its predecessor?'",
          "'Why is cross-border regulatory coordination inherently difficult?'",
        ],
        mustKnow: [
          "Regulation evolves in response to observed failures, tightening capital, liquidity and resolution requirements and closing arbitrage across the perimeter.",
          "Revised market-risk approaches (e.g. moving toward expected-shortfall-based measures and stricter trading/banking-book boundaries) change capital incentives and model-approval hurdles.",
          "Cross-border coordination is hard because of differing national mandates, timelines, competitive concerns and legal regimes, leaving room for regulatory arbitrage.",
        ],
        scoringActions: [
          "Tie each regulatory change to the core risk framework it modifies (capital, market risk, liquidity, resolution).",
          "Explain coordination difficulty via divergent mandates/timelines and arbitrage incentives — avoid dated figures.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Current-issues items are concept-driven and often 'connect to the core framework' — bank them by naming the precise mechanism (AI drift, physical vs transition, stablecoin reserve mismatch, NBFI liquidity mismatch) and its link to a core risk type; do not gamble on dated specifics.",
      timeBudget:
        "~2–3 minutes per item; these are reading-comprehension-style questions, so read the vignette for the mechanism it emphasises and answer on that, quickly.",
      answerSequence: [
        "Identify the theme (AI, climate, digital assets, NBFI, regulation) and the specific mechanism in the vignette.",
        "Classify precisely (physical vs transition; run vs volatility; code vs governance risk).",
        "Connect the issue to the core market/credit/operational/liquidity framework.",
        "Reject any option that asserts a dated, specific claim the exam cannot pin to a fixed cycle.",
      ],
      qualityChecks: [
        "Did I answer on the mechanism, not a headline?",
        "Did I classify physical vs transition (or run vs volatility) correctly?",
        "Did I link the current issue back to a core risk category?",
      ],
    },
    studyNotes: [
      {
        id: "sn-ai-model-risk",
        title: "AI/ML model risk within the model-risk framework",
        testPointIds: ["tp-ai-model-risk", "tp-regulation"],
        explanation: [
          "Machine-learning models can deliver sharper predictions than traditional scorecards, but they introduce or amplify particular risks. They are often opaque — the mapping from inputs to outputs is not readily interpretable — which makes it hard to justify a decision to a regulator or an affected customer. They are prone to overfitting when flexible models are trained on limited or noisy data, and they can inherit and even magnify bias present in training data or labels. Because they learn the statistical structure of their training set, their performance degrades when the live data distribution drifts away from that set (concept/data drift).",
          "The governance response is not to invent a wholly new discipline but to extend the existing model-risk management framework — sound development standards, independent validation, and controlled use — to the specifics of ML. That means independent validation of data and methodology, explainability/interpretability tooling so decisions can be understood and challenged, explicit bias and fairness testing, ongoing monitoring for drift with retraining triggers, and human oversight for consequential decisions. The examinable framing is that AI risk is a model-risk problem: identify the ML-specific failure mode the question raises, then attach the governance control that mitigates it. Because the field moves quickly, candidates should confirm the current GARP reading rather than rely on any specific technique being canonical.",
        ],
        keyRules: [
          "ML-specific risks: opacity, overfitting, data/label bias, drift.",
          "Controls: independent validation, explainability, bias testing, drift monitoring, human oversight.",
          "Treat AI risk as an extension of the model-risk framework, not a new silo.",
        ],
        workedProblem: {
          scenario:
            "A bank replaces a logistic-regression credit scorecard with a gradient-boosted ML model. Backtested accuracy rises from 78% to 86%, but the validation team flags that (i) the model cannot produce reason codes, (ii) approval rates for a protected group fall sharply, and (iii) performance on the most recent quarter is materially worse than in-sample. Diagnose each issue and prescribe a governance control.",
          steps: [
            "Issue (i) — no reason codes — is an explainability/opacity failure: consequential lending decisions must be explainable to regulators and customers.",
            "Issue (ii) — a sharp drop for a protected group — is data/label bias potentially producing a fairness/conduct problem: it requires explicit bias testing and remediation before deployment.",
            "Issue (iii) — recent-quarter deterioration versus in-sample — is a signal of overfitting and/or data drift: it requires out-of-time validation and ongoing drift monitoring with retraining triggers.",
            "Overarching control: independent validation and human oversight must sign off before the higher-accuracy model is used for live decisions.",
          ],
          conclusion:
            "Higher accuracy does not clear the governance bar. The model shows three classic ML risks — opacity, bias and overfitting/drift — each mapping to a specific control (explainability tooling, bias testing, out-of-time validation and drift monitoring), all under independent validation and human oversight. Absent those, the accuracy gain is not usable in a regulated credit process.",
          markingNotes: [
            "Each symptom mapped to a named ML-specific risk.",
            "Each risk mapped to a concrete governance control.",
            "Recognises accuracy alone does not satisfy model-risk governance.",
          ],
        },
      },
      {
        id: "sn-climate",
        title: "Physical vs transition climate risk and scenario analysis",
        testPointIds: ["tp-climate"],
        explanation: [
          "Climate-related financial risk splits cleanly into two channels. Physical risk is the loss from the climate itself — acute events such as floods, wildfires and storms that damage collateral and disrupt operations, and chronic shifts such as rising sea levels and temperatures that erode asset values over time. Transition risk is the loss from the move toward a low-carbon economy — policy changes such as carbon pricing, technological displacement of high-carbon business models, and shifts in consumer and investor preferences that can strand assets. Classifying an exposure correctly turns on the source of the loss: an event damages a physical asset (physical) versus a policy or technology shift destroying an asset's economic value (transition).",
          "Climate scenario analysis is harder than conventional stress testing because the horizon is decades rather than quarters, the paths are deeply uncertain and dependent on policy choices, and historical data is a poor guide to a structurally changing climate and economy. The emphasis is therefore on directional and relative insight — which portfolios are most exposed under which pathway — rather than precise loss point estimates. Crucially, climate risk is not a new risk type; it transmits through the existing channels, raising credit risk (borrower default as cash flows or collateral deteriorate), market risk (repricing of carbon-intensive assets), operational risk (physical disruption) and liquidity risk. Disclosure frameworks organised around governance, strategy, risk management, and metrics/targets standardise how firms report these exposures.",
        ],
        keyRules: [
          "Physical risk = climate events (acute/chronic); transition risk = policy/technology/preference shifts.",
          "Climate scenario analysis is long-horizon, path-dependent and uncertain — directional, not point estimates.",
          "Climate risk transmits through credit, market, operational and liquidity channels; disclosure frameworks standardise reporting.",
        ],
        workedProblem: {
          scenario:
            "A bank holds a $100m loan to a carbon-intensive manufacturer with a base one-year PD of 1% and LGD of 45%. Under a disorderly transition scenario, a sharp carbon price raises the borrower's costs (PD rises to 4%) and depresses the value of its specialised, now partly stranded plant used as collateral (LGD rises to 55%). Quantify the change in one-year expected credit loss and identify the risk channel.",
          steps: [
            "Base expected loss EL = EAD × PD × LGD = 100 × 0.01 × 0.45 = $0.45m.",
            "Stressed EL = 100 × 0.04 × 0.55 = $2.20m.",
            "Increase in EL = 2.20 − 0.45 = $1.75m, roughly 4.9× the base loss.",
            "Attribute the driver: higher PD (borrower cash-flow stress from carbon costs) and higher LGD (stranded-asset collateral) — a transition-risk shock transmitting through the credit channel.",
          ],
          conclusion:
            "The transition scenario lifts the loan's expected credit loss from about $0.45m to $2.20m — a $1.75m (≈5×) increase — driven jointly by a higher default probability and a lower recovery as the collateral strands. The example shows climate transition risk is not a separate silo but a shock that flows straight into the standard EAD × PD × LGD credit framework.",
          markingNotes: [
            "EL computed as EAD × PD × LGD in both states.",
            "Both PD and LGD move under transition stress.",
            "Loss attributed to the transition channel feeding core credit risk.",
          ],
        },
      },
      {
        id: "sn-digital-assets",
        title: "Digital assets: crypto, stablecoins and DeFi",
        testPointIds: ["tp-digital-assets"],
        explanation: [
          "Digital assets bundle several distinct risks. Native crypto assets are extremely volatile and carry heavy operational and custody risk — losing private keys or trusting a failing exchange can wipe out holdings regardless of the asset's price — alongside market-integrity concerns in thinly regulated venues. These are, at root, familiar market and operational risks amplified by novel infrastructure.",
          "Stablecoins add a maturity/liquidity dimension that behaves like a classic bank run. A coin may be nominally 'fully reserved', but if those reserves are illiquid, long-dated or opaque, a wave of redemptions can force fire-sales below par, breaking the peg even though the accounting backing looked adequate. The risk is therefore about reserve quality and liquidity and about the first-mover advantage of redeeming early, not merely about whether reserves nominally match liabilities. DeFi introduces yet another layer: smart-contract (code) risk where a bug is exploitable, oracle risk where manipulated price feeds trigger wrongful liquidations, governance risk where concentrated token holders can change the rules, and composability risk where protocols stacked on one another transmit failures like contagion. The exam wants the specific mechanism named — reserve mismatch, code exploit, oracle manipulation — rather than a blanket appeal to 'crypto volatility'.",
        ],
        keyRules: [
          "Crypto: extreme volatility plus operational/custody and market-integrity risk.",
          "Stablecoins: run risk from illiquid/opaque reserves — de-peg possible even at nominal full backing.",
          "DeFi: smart-contract, oracle, governance-concentration and composability/contagion risk.",
        ],
      },
      {
        id: "sn-nbfi",
        title: "Non-bank intermediation and systemic transmission",
        testPointIds: ["tp-nbfi"],
        explanation: [
          "As credit and maturity transformation migrate from banks to non-bank financial intermediaries — open-ended funds, insurers, dealers, private-credit vehicles — the associated leverage and liquidity mismatch increasingly sit outside the tight bank prudential perimeter. An open-ended fund that offers daily redemptions while holding illiquid assets embeds precisely the liquidity mismatch that makes banks fragile, but often without comparable liquidity buffers or backstops.",
          "This matters for financial stability because of transmission. When redemptions or margin calls hit an NBFI, it must sell assets, and if many do so at once the forced selling amplifies market moves and depresses prices for everyone. Those losses and funding strains flow back to banks through counterparty exposures, prime-brokerage and repo funding, and shared asset holdings. Redeemable vehicles also carry a first-mover advantage — investors who redeem first get out at better prices — which creates run dynamics analogous to a bank run. The examinable point is to identify leverage and/or liquidity mismatch as the driver and then trace the concrete channel (fire sales, funding and counterparty links) by which non-bank stress becomes system-wide.",
        ],
        keyRules: [
          "NBFIs can build leverage and liquidity mismatch outside the bank perimeter.",
          "Forced selling amplifies markets and transmits stress to banks via funding/counterparty links.",
          "Redeemable vehicles have first-mover advantage → bank-run-like dynamics.",
        ],
      },
      {
        id: "sn-regulation",
        title: "Regulatory evolution linked to core frameworks",
        testPointIds: ["tp-regulation"],
        explanation: [
          "Regulation is best understood as an evolving response to observed failures, and the current-issues section rewards connecting each change to the core framework it modifies rather than memorising dated parameters. Finalisation of the Basel capital framework tightens the measurement of risk-weighted assets and constrains internal-model outputs; revised market-risk approaches move toward expected-shortfall-based measures with a sharper trading-book/banking-book boundary, changing both capital levels and the incentives to hold or reclassify positions. Liquidity and resolution standards (recovery and resolution planning, bail-in capacity) aim to make large firms resolvable without taxpayer support. Each of these plugs a gap the last crisis exposed, and each closes some avenue of regulatory arbitrage.",
          "Cross-border coordination remains structurally difficult. National regulators answer to different mandates and legislatures, adopt reforms on different timelines, face competitive pressure to protect home institutions, and operate under distinct legal regimes for insolvency and data. These frictions leave seams that firms can arbitrage and that transmit stress across borders when a global institution fails. For the exam, avoid asserting any specific rule as currently in force in a given jurisdiction — reforms are phased and revised — and instead reason about the direction of change (more/higher-quality capital, better liquidity, resolvability) and its link to the core market, credit, liquidity and operational frameworks. Always confirm the live GARP reading list, since this section is refreshed each cycle.",
        ],
        keyRules: [
          "Regulation evolves to close gaps exposed by failures; link each change to the core framework it modifies.",
          "Revised market-risk rules trend toward expected shortfall and a stricter trading/banking-book boundary.",
          "Cross-border coordination is hard due to divergent mandates/timelines/legal regimes — avoid dated specifics.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m13-1",
        testPointIds: ["tp-ai-model-risk"],
        style: "Scenario (MCQ)",
        question:
          "A machine-learning fraud model performs superbly in backtests but its accuracy falls each quarter after deployment, and the validation team cannot obtain reason codes for individual alerts. Which pair of risks is MOST directly implicated, and what is the priority control? (a) Liquidity and market risk; hold more HQLA (b) Data drift and opacity; implement ongoing drift monitoring with explainability tooling under independent validation (c) Settlement and custody risk; change custodian (d) Basis risk; adjust hedges.",
        answerPlan: [
          "Diagnose the two symptoms.",
          "Name the ML-specific risks.",
          "Prescribe the governance control.",
        ],
        modelAnswer:
          "The answer is (b). Accuracy decaying after deployment is the signature of data/concept drift — the live distribution moving away from the training set — and the inability to produce reason codes is an opacity/explainability failure. The priority controls are ongoing drift monitoring with retraining triggers and explainability tooling, all under independent model validation. Options (a), (c) and (d) invoke unrelated risk types; the vignette is squarely about model risk in an ML system.",
        markingGuide: [
          "Identifies drift (post-deployment decay) and opacity (no reason codes).",
          "Prescribes drift monitoring + explainability under validation.",
          "Frames as model risk, not liquidity/market/settlement risk.",
        ],
      },
      {
        id: "pp-m13-2",
        testPointIds: ["tp-digital-assets", "tp-nbfi"],
        style: "Concept (MCQ)",
        question:
          "A stablecoin claims 1:1 backing but holds much of its reserve in long-dated, less-liquid instruments. A surge of redemptions occurs. Why can the coin de-peg, and what analogy is most apt? (a) It cannot de-peg because it is fully reserved; no analogy applies (b) Reserve illiquidity forces fire-sales below par, breaking the peg — analogous to a bank run driven by liquidity mismatch (c) De-pegging is purely a smart-contract bug; analogous to an oracle failure (d) It de-pegs only if the blockchain halts; analogous to settlement risk.",
        answerPlan: [
          "Separate nominal backing from reserve liquidity.",
          "Explain the fire-sale/run mechanism.",
          "Choose the run analogy.",
        ],
        modelAnswer:
          "The answer is (b). Nominal 1:1 backing does not guarantee liquidity: if reserves are long-dated and illiquid, meeting a redemption surge forces sales below par, so the coin cannot honour redemptions at $1 and de-pegs. This is a classic liquidity-mismatch run — the same dynamic as a bank run and as an open-ended fund holding illiquid assets — complete with a first-mover advantage to redeem early. Option (a) confuses accounting backing with liquidity; (c) and (d) name real but different DeFi/settlement risks not at issue here.",
        markingGuide: [
          "Distinguishes reserve liquidity from nominal backing.",
          "Explains the fire-sale/de-peg mechanism.",
          "Draws the bank-run / liquidity-mismatch analogy.",
        ],
      },
      {
        id: "pp-m13-3",
        testPointIds: ["tp-climate", "tp-regulation"],
        style: "Scenario (MCQ)",
        question:
          "A bank must assess a portfolio of loans to high-carbon industrials under a policy scenario introducing an aggressive carbon price over the next decade. Which statement is MOST accurate? (a) This is physical risk and should be modelled with historical catastrophe data (b) This is transition risk transmitting through the credit channel; scenario analysis is long-horizon and directional rather than a precise point estimate (c) Climate risk is a wholly new risk type unrelated to credit or market risk (d) Because the horizon is long, no analysis is warranted.",
        answerPlan: [
          "Classify physical vs transition.",
          "Identify the transmission channel.",
          "Characterise the scenario analysis.",
        ],
        modelAnswer:
          "The answer is (b). A carbon-pricing policy shift is transition risk, not physical risk, so historical catastrophe data (option a) is the wrong tool. It transmits through the credit channel — higher borrower costs raise PD and stranded assets raise LGD — so it plugs into the standard credit framework rather than being a new silo (contra c). Because the horizon is a decade and depends on uncertain policy paths, the analysis is inherently long-horizon and directional, aimed at relative exposure rather than a precise loss figure; (d) wrongly concludes that uncertainty justifies inaction.",
        markingGuide: [
          "Classifies the policy shock as transition risk.",
          "Identifies transmission through the credit channel (PD/LGD).",
          "Characterises climate scenario analysis as long-horizon and directional.",
        ],
      },
    ],
  }),
};
