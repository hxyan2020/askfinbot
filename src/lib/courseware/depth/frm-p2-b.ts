import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * Exam-calibrated deep content for GARP FRM Part II, modules 5–8, keyed by
 * moduleId:
 *   frm-p2-m5  Credit Risk — credit VaR, portfolio credit risk & securitisation
 *   frm-p2-m6  Credit Risk — counterparty risk, CVA & wrong-way risk
 *   frm-p2-m7  Operational Risk — taxonomy, loss data & capital
 *   frm-p2-m8  Operational Risk — resilience, cyber & conduct risk
 *
 * Part II rewards judgement over mechanics: choosing the right model, reading a
 * multi-risk vignette, tracing capital/regulatory consequences and knowing where
 * a model breaks. The 80-item paper runs four hours (~3 minutes/item), so the
 * scoring blueprints below prioritise fast method selection and disciplined
 * calculation on the few numeric items that carry disproportionate risk of loss.
 *
 * Regulatory references are framed by mechanism (ASRF/IRB, SMA, resilience
 * principles) rather than by cycle-specific figures; candidates must confirm the
 * live GARP reading list and any current-issues note each exam window.
 */
export const FRM_P2_B_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // frm-p2-m5 — Credit VaR, portfolio credit risk & securitisation
  // ===================================================================
  "frm-p2-m5": examDepth({
    testPoints: [
      {
        id: "tp-default-corr",
        title: "Default correlation and the shape of the loss distribution",
        priority: "critical",
        examinerFocus:
          "Whether you understand that correlation, not average PD, drives the TAIL of a credit portfolio. The exam gives two portfolios with identical expected loss and asks which needs more economic capital — the answer is always the more correlated (concentrated) one.",
        typicalQuestionForms: [
          "'Two portfolios have the same expected loss; which has the higher credit VaR?'",
          "'What happens to the portfolio loss distribution as default correlation rises?'",
          "'Why can't credit risk be fully diversified away in a downturn?'",
        ],
        mustKnow: [
          "Raising default correlation holds expected loss roughly constant but fattens the right tail: the distribution becomes right-skewed with more probability mass on large simultaneous-default outcomes.",
          "Correlation is driven by common (systematic/macro) factors; the higher the shared factor loading, the more defaults cluster in the same states of the world.",
          "Zero correlation is a diversification best case (losses near expected loss); correlation → 1 collapses the portfolio toward an all-or-nothing single-name bet.",
        ],
        scoringActions: [
          "When two portfolios share EL, pick the concentrated/correlated one as needing more capital.",
          "Attribute clustering to a common macro factor, not to a change in individual PDs.",
          "Reject any answer claiming diversification removes systematic credit risk.",
        ],
      },
      {
        id: "tp-creditvar",
        title: "Expected loss, unexpected loss and credit VaR",
        priority: "critical",
        examinerFocus:
          "Whether you separate expected loss (a cost, covered by provisions/spread) from unexpected loss and credit VaR (a capital question), and can compute each from PD, LGD and EAD.",
        typicalQuestionForms: [
          "'Compute the one-year expected loss and unexpected loss for this exposure.'",
          "'Credit VaR is best described as…?'",
          "'Why is capital held against unexpected, not expected, loss?'",
        ],
        mustKnow: [
          "EL = PD × LGD × EAD; it is provisioned/priced into the spread and is not what capital protects against.",
          "For a single exposure with fixed LGD, unexpected loss UL = EAD × LGD × √(PD(1−PD)); it is the standard deviation of loss and grows with PD volatility.",
          "Credit VaR = the chosen high quantile of the loss distribution minus expected loss (economic capital covers the gap between the quantile and EL).",
        ],
        scoringActions: [
          "Compute EL first, then subtract it from the quantile to get credit VaR — never quote the raw quantile as credit VaR.",
          "Use √(PD(1−PD)) for default-event volatility when LGD is treated as fixed.",
          "State that provisions absorb EL while capital absorbs credit VaR.",
        ],
      },
      {
        id: "tp-asrf",
        title: "The single-factor (Vasicek/ASRF) model and Basel IRB",
        priority: "critical",
        examinerFocus:
          "Whether you can apply the asymptotic single-risk-factor model — computing a worst-case (stressed) default rate at a confidence level — and explain why it is the engine of the Basel IRB capital formula and why it is 'portfolio-invariant'.",
        typicalQuestionForms: [
          "'Compute the worst-case default rate (WCDR) at 99.9% given PD and asset correlation.'",
          "'Why is the IRB formula independent of the rest of the portfolio?'",
          "'How does raising asset correlation ρ change IRB capital?'",
        ],
        mustKnow: [
          "ASRF stresses one systematic factor M to its adverse tail (M = N⁻¹(1−q)), giving WCDR = N[(N⁻¹(PD) + √ρ·N⁻¹(q)) / √(1−ρ)] at confidence q.",
          "IRB capital per unit EAD ≈ LGD × (WCDR − PD) × maturity adjustment; the '−PD' removes expected loss so capital covers only unexpected loss.",
          "Portfolio invariance (the marginal capital of a loan depends only on its own PD/LGD/ρ, not the rest of the book) is what makes IRB tractable but assumes a single factor and a fine-grained, well-diversified portfolio.",
        ],
        scoringActions: [
          "Plug into WCDR carefully: N⁻¹(PD) is negative, √ρ·N⁻¹(0.999) ≈ √ρ × 3.09 is positive.",
          "Subtract PD from WCDR before multiplying by LGD to isolate unexpected loss.",
          "Flag that concentration/single-name risk is NOT captured — IRB assumes infinite granularity.",
        ],
      },
      {
        id: "tp-tranche",
        title: "Tranche loss allocation, attachment and detachment points",
        priority: "high",
        examinerFocus:
          "Whether you can route a realised pool loss through the capital structure from equity upward, and quantify the percentage loss suffered by a specific tranche given its attachment/detachment points.",
        typicalQuestionForms: [
          "'A pool loses X%; what is the loss to the mezzanine tranche?'",
          "'Which forms of credit enhancement protect the senior tranche?'",
          "'Define attachment and detachment points for a tranche.'",
        ],
        mustKnow: [
          "A tranche with attachment a and detachment d absorbs pool losses in the band [a, d]; its percentage loss = min(max(L − a, 0), d − a) / (d − a) for pool loss L.",
          "Losses cascade bottom-up: equity (first-loss) is exhausted before the mezzanine takes any loss, which is exhausted before the senior tranche is touched (the subordination waterfall).",
          "Credit enhancement raises effective attachment for senior notes: subordination, overcollateralisation, excess spread and reserve accounts.",
        ],
        scoringActions: [
          "Compute the tranche loss as a fraction of tranche WIDTH (d − a), not of the whole pool.",
          "Confirm junior tranches are fully wiped before crediting any loss to a more senior one.",
          "Name the specific enhancement (subordination / excess spread / OC) the question is testing.",
        ],
      },
      {
        id: "tp-tranche-corr",
        title: "Correlation sensitivity of structured-credit tranches",
        priority: "high",
        examinerFocus:
          "Whether you know that correlation is the hidden driver of tranche value: rising correlation helps the equity (first-loss) tranche and hurts the senior tranche — and why mispricing it was central to the 2007–09 losses.",
        typicalQuestionForms: [
          "'Rising default correlation has what effect on the equity vs senior tranche?'",
          "'Why is a senior tranche described as a short-correlation position?'",
          "'How did correlation assumptions contribute to structured-credit losses?'",
        ],
        mustKnow: [
          "Higher correlation increases the probability of BOTH zero losses and very large losses; this raises the value of the equity tranche (more chance of no loss) and lowers the value of the senior tranche (more chance of extreme loss reaching it).",
          "Equity is 'long correlation'; senior is 'short correlation' — this is why a fully hedged correlation book can still bleed when correlation moves.",
          "Systematically low correlation assumptions overstate senior-tranche safety and understate the capital and price protection they require; ratings that ignored correlation regime shifts underpriced tail risk.",
        ],
        scoringActions: [
          "Map 'correlation up' to 'equity up, senior down' before answering directionally.",
          "Label the senior tranche a short-correlation, catastrophe-like position.",
          "Attribute crisis losses to correlation/model risk, not to a rise in individual PDs alone.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Bank the EL/UL and tranche arithmetic (they are the only fully deterministic items), then win the judgement items on correlation direction and the limits of the ASRF/IRB engine.",
      timeBudget:
        "~2 minutes on numeric credit-VaR/ASRF/tranche items, ~1 minute on directional correlation items; 80 items across four hours.",
      answerSequence: [
        "Classify the item: distribution/correlation judgement, EL-vs-UL calculation, ASRF stress, or tranche allocation.",
        "For numerics, write EL = PD·LGD·EAD or the WCDR/tranche-band formula before substituting; keep signs on N⁻¹ terms.",
        "For judgement items, resolve direction via 'correlation fattens the tail' and 'equity long / senior short correlation'.",
        "State the capital/regulatory consequence (provisions vs economic capital, IRB invariance limits).",
      ],
      qualityChecks: [
        "Did I subtract EL to report credit VaR (not the raw quantile)?",
        "In WCDR, is N⁻¹(PD) negative and √ρ·N⁻¹(0.999) positive?",
        "Is the tranche loss expressed over its own width (d − a)?",
        "Did I pick the correlated/concentrated book as needing more capital when EL is equal?",
      ],
    },
    studyNotes: [
      {
        id: "sn-default-corr",
        title: "Why correlation, not average PD, sets the credit tail",
        testPointIds: ["tp-default-corr", "tp-creditvar"],
        explanation: [
          "A credit portfolio's expected loss is almost entirely a function of the average PD, LGD and exposure — it barely moves when you change how defaults are correlated. What correlation controls is the dispersion around that average, and specifically the right tail. When names default independently, the law of large numbers pulls the realised loss rate close to the expected rate, so the distribution is tight and roughly symmetric. Capital, which protects against the difference between a bad quantile and the mean, is then small.",
          "Introduce a common macro factor and defaults begin to cluster: in good states almost nobody defaults, in bad states many names default together. The loss distribution becomes strongly right-skewed — a tall spike near zero loss plus a long, fat tail of clustered-default outcomes. Two books with identical expected loss can therefore have wildly different credit VaR, and the more correlated one always demands more economic capital. This is the intuition the exam tests repeatedly, and it is why systematic credit risk cannot be diversified away no matter how many names you add.",
        ],
        keyRules: [
          "Correlation ≈ leaves EL unchanged but fattens/right-skews the tail.",
          "Same EL, higher correlation ⇒ higher credit VaR / capital.",
          "Systematic (common-factor) credit risk is undiversifiable.",
        ],
        formulas: [
          "EL = PD × LGD × EAD (correlation-insensitive).",
          "Credit VaR = quantile(loss, q) − EL (correlation-sensitive).",
        ],
      },
      {
        id: "sn-creditvar",
        title: "Expected loss, unexpected loss and economic capital",
        testPointIds: ["tp-creditvar"],
        explanation: [
          "Expected loss is a cost of doing business: it is what you lose on average and should already be priced into the loan spread and covered by provisions. It is not the reason capital exists. Unexpected loss — the volatility of loss around that average — is what can threaten solvency, and economic capital is sized to cover a high quantile of that unexpected loss. Confusing the two is the single most common conceptual error the exam punishes here.",
          "For a single exposure where LGD is treated as fixed, the loss is a scaled Bernoulli: it equals EAD × LGD with probability PD and zero otherwise. Its standard deviation — the unexpected loss — is therefore EAD × LGD × √(PD(1−PD)). Credit VaR at confidence q is the q-quantile of the portfolio loss distribution minus the expected loss, so that capital covers only the shortfall beyond what provisions already absorb.",
        ],
        keyRules: [
          "EL is provisioned/priced; capital covers UL and credit VaR.",
          "Single-name UL = EAD × LGD × √(PD(1−PD)) when LGD is fixed.",
          "Credit VaR is a quantile MINUS expected loss.",
        ],
        formulas: [
          "EL = PD × LGD × EAD.",
          "UL(single) = EAD × LGD × √(PD(1−PD)).",
          "Credit VaR = L_q − EL.",
        ],
        workedProblem: {
          scenario:
            "A single loan has EAD = $10m, LGD = 40% and one-year PD = 2%. Compute the expected loss and the unexpected loss (standalone), treating LGD as fixed.",
          steps: [
            "EL = PD × LGD × EAD = 0.02 × 0.40 × $10m = $80,000.",
            "Default-event volatility = √(PD(1−PD)) = √(0.02 × 0.98) = √0.0196 = 0.14.",
            "UL = EAD × LGD × √(PD(1−PD)) = $10m × 0.40 × 0.14 = $560,000.",
          ],
          conclusion:
            "Expected loss is $80,000 (a provisioning/pricing number), while the standalone unexpected loss is $560,000 — seven times larger. Capital is sized off the $560,000 volatility (scaled to a chosen quantile), not off the $80,000 mean.",
          markingNotes: [
            "EL uses all three inputs multiplied together ($80,000).",
            "UL applies √(PD(1−PD)) = 0.14, giving $560,000.",
            "Explicitly separates the provisioned EL from the capital-relevant UL.",
          ],
        },
      },
      {
        id: "sn-asrf",
        title: "The ASRF/Vasicek model and the Basel IRB formula",
        testPointIds: ["tp-asrf", "tp-creditvar"],
        explanation: [
          "The asymptotic single-risk-factor model assumes each obligor defaults when its asset value falls below a threshold, and that all obligors load on one common systematic factor M with correlation ρ. Because the portfolio is assumed infinitely granular, idiosyncratic risk washes out and the only thing that matters for the tail is a bad realisation of M. Stressing M to its adverse quantile gives the worst-case default rate WCDR = N[(N⁻¹(PD) + √ρ · N⁻¹(q)) / √(1−ρ)], where q is the confidence level (0.999 in Basel).",
          "The Basel IRB capital charge is essentially LGD × (WCDR − PD) per unit of EAD, times a maturity adjustment. Subtracting PD strips out expected loss so the charge covers only unexpected loss. The model's great convenience is portfolio invariance: a loan's marginal capital depends only on its own PD, LGD, ρ and maturity, not on the rest of the book — which is exactly why it ignores single-name concentration and multi-factor sector risk. Those omissions are the standard exam critique of IRB.",
        ],
        keyRules: [
          "WCDR = N[(N⁻¹(PD) + √ρ·N⁻¹(q)) / √(1−ρ)].",
          "IRB capital ≈ LGD × (WCDR − PD) × maturity adjustment.",
          "Portfolio invariance assumes one factor + infinite granularity (no concentration).",
        ],
        formulas: [
          "M-stress: N⁻¹(0.999) ≈ 3.09.",
          "Capital/EAD ≈ LGD × (WCDR − PD) × MA.",
        ],
        workedProblem: {
          scenario:
            "A loan has PD = 1%, asset correlation ρ = 0.20 and LGD = 45%. Compute the 99.9% worst-case default rate and the unexpected-loss capital per $1 of EAD (ignore the maturity adjustment). Use N⁻¹(0.01) ≈ −2.33, N⁻¹(0.999) ≈ 3.09.",
          steps: [
            "√ρ = √0.20 ≈ 0.447; √(1−ρ) = √0.80 ≈ 0.894.",
            "Numerator = N⁻¹(PD) + √ρ·N⁻¹(0.999) = −2.33 + 0.447 × 3.09 = −2.33 + 1.381 = −0.949.",
            "Argument = −0.949 / 0.894 ≈ −1.061 ⇒ WCDR = N(−1.061) ≈ 14.4%.",
            "Capital/EAD ≈ LGD × (WCDR − PD) = 0.45 × (0.144 − 0.01) = 0.45 × 0.134 ≈ 0.0603.",
          ],
          conclusion:
            "The stressed default rate is ~14.4% versus a 1% through-the-cycle PD, and the IRB unexpected-loss charge is about 6.0 cents per dollar of EAD. The 14× jump from PD to WCDR shows how a single adverse factor draw dominates capital.",
          markingNotes: [
            "Keeps N⁻¹(PD) negative and √ρ·3.09 positive inside the numerator.",
            "WCDR ≈ 14.4% (accept 13–15% with rounding of N(·)).",
            "Subtracts PD before multiplying by LGD → ~6.0% capital, not ~6.5% (which would wrongly include EL).",
          ],
        },
      },
      {
        id: "sn-tranche",
        title: "Tranching: routing pool losses through the waterfall",
        testPointIds: ["tp-tranche", "tp-tranche-corr"],
        explanation: [
          "A securitisation slices the pool's cash flows and losses into tranches defined by attachment (a) and detachment (d) points. A tranche absorbs pool losses only in the band between its attachment and detachment: nothing until cumulative pool loss reaches a, full write-down once loss reaches d, and a pro-rata hit in between. The percentage loss to the tranche is min(max(L − a, 0), d − a) / (d − a), where L is the pool loss rate — crucially expressed relative to the tranche's own width, not the whole pool.",
          "Losses cascade strictly bottom-up. The equity (first-loss) tranche is exhausted before the mezzanine takes a cent, and the mezzanine before the senior. Credit enhancement raises the effective attachment protecting senior notes — subordination (the thickness of tranches below), overcollateralisation, excess spread and reserve accounts. This waterfall is what lets a pool of risky assets manufacture a highly-rated senior note, and understanding it is what the exam rewards.",
        ],
        keyRules: [
          "Tranche loss % = min(max(L − a, 0), d − a) / (d − a).",
          "Waterfall is bottom-up: equity → mezzanine → senior.",
          "Enhancement = subordination + OC + excess spread + reserves.",
        ],
        formulas: [
          "Tranche width = d − a.",
          "Loss to tranche ($) = width × EAD × loss% .",
        ],
        workedProblem: {
          scenario:
            "A $100m pool is tranched equity 0–3%, mezzanine 3–7%, senior 7–100%. Realised pool loss is 5%. Compute the dollar and percentage loss to each tranche.",
          steps: [
            "Pool loss = 5% × $100m = $5m.",
            "Equity (0–3%, width 3% = $3m): loss = min($5m, $3m) = $3m ⇒ 100% wiped out.",
            "Mezzanine (3–7%, width 4% = $4m): absorbs loss above $3m up to $7m ⇒ min($5m−$3m, $4m) = $2m ⇒ $2m/$4m = 50% loss.",
            "Senior (7–100%): pool loss never reaches its 7% attachment ⇒ $0, 0% loss.",
          ],
          conclusion:
            "The 5% pool loss destroys the equity tranche entirely ($3m, 100%), takes half the mezzanine ($2m, 50%) and leaves the senior tranche untouched — a textbook demonstration of why the senior note carries a high rating despite risky collateral.",
          markingNotes: [
            "Equity absorbs the first $3m in full (100%).",
            "Mezzanine loss measured over its own $4m width → 50%, not 2% of the pool.",
            "Senior correctly untouched because loss < 7% attachment.",
          ],
        },
      },
      {
        id: "sn-tranche-corr",
        title: "Correlation as the hidden risk in structured credit",
        testPointIds: ["tp-tranche-corr", "tp-default-corr"],
        explanation: [
          "Given a fixed expected pool loss, raising default correlation pushes probability mass toward the two extremes: many scenarios with essentially no loss, and a fatter tail of scenarios with very large simultaneous losses. The equity tranche, which only cares about avoiding the first losses, benefits — the 'no loss at all' scenario becomes more likely — so it is a long-correlation position. The senior tranche, which only suffers in the extreme, is harmed as the fat tail grows into its attachment band, making it a short-correlation position.",
          "This is why a structured-credit desk can be flat on spread and PD yet still lose money when the correlation regime shifts, and why senior tranches behave like sold catastrophe protection. In the 2007–09 episode, models that assumed low, stable correlations across mortgage pools made senior tranches look far safer than they were; when correlation spiked in the downturn, losses reached tranches that ratings had treated as remote. The lesson the exam wants is that correlation — a model input, not an observed price — was the dominant, mispriced risk.",
        ],
        keyRules: [
          "Correlation up ⇒ equity tranche up, senior tranche down.",
          "Equity is long correlation; senior is short correlation.",
          "Senior tranches behave like sold tail/catastrophe protection.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m5-1",
        testPointIds: ["tp-creditvar", "tp-default-corr"],
        style: "Calculation + judgement",
        question:
          "Portfolio A holds 100 uncorrelated loans; Portfolio B holds 100 loans loading heavily on one macro factor. Both have identical expected loss of $10m. (a) Which has the larger one-year credit VaR and why? (b) If a manager reports the 99.9% loss quantile of $95m as 'credit VaR', what correction is needed?",
        answerPlan: [
          "Link correlation to tail shape.",
          "Rank credit VaR.",
          "Correct the quantile-vs-credit-VaR error.",
        ],
        modelAnswer:
          "(a) Portfolio B has the larger credit VaR. Expected loss is insensitive to correlation, so both books share the same $10m mean; but B's common-factor loading makes defaults cluster, right-skewing its loss distribution and fattening the tail. A high quantile of that fatter tail sits far above the mean, whereas A's independent defaults keep realised losses close to the mean. Capital protects against tail dispersion, so B needs materially more. (b) Credit VaR is a quantile MINUS expected loss, so the correct figure is $95m − $10m = $85m of economic capital; expected loss is already covered by provisions/spread, so quoting the raw $95m double-counts it.",
        markingGuide: [
          "Identifies B (correlated) as higher credit VaR with correct tail reasoning.",
          "States EL is correlation-insensitive while the tail/quantile is not.",
          "Corrects credit VaR to $85m by subtracting the $10m expected loss.",
        ],
      },
      {
        id: "pp-m5-2",
        testPointIds: ["tp-asrf"],
        style: "Calculation",
        question:
          "Under the ASRF model a wholesale exposure has PD = 2%, asset correlation ρ = 0.15 and LGD = 50%. Compute the 99.9% worst-case default rate and the unexpected-loss capital per unit of EAD (ignore maturity adjustment). Use N⁻¹(0.02) ≈ −2.05 and N⁻¹(0.999) ≈ 3.09; N(−0.86) ≈ 0.195.",
        answerPlan: [
          "Compute √ρ and √(1−ρ).",
          "Form the WCDR argument.",
          "Convert to capital via LGD × (WCDR − PD).",
        ],
        modelAnswer:
          "√ρ = √0.15 ≈ 0.387 and √(1−ρ) = √0.85 ≈ 0.922. Numerator = N⁻¹(PD) + √ρ·N⁻¹(0.999) = −2.05 + 0.387 × 3.09 = −2.05 + 1.196 = −0.854. Argument ≈ −0.854/0.922 ≈ −0.926, so WCDR = N(−0.926) ≈ 0.177 (≈17.7%; using the supplied N(−0.86) ≈ 0.195 for a coarser estimate is acceptable). Capital/EAD ≈ LGD × (WCDR − PD) = 0.50 × (0.177 − 0.02) = 0.50 × 0.157 ≈ 0.079, i.e. about 7.9 cents per dollar of EAD. The stressed default rate (~18%) dwarfs the 2% PD, and subtracting PD ensures the charge captures unexpected loss only.",
        markingGuide: [
          "Correct √ρ ≈ 0.387 and signed numerator ≈ −0.854.",
          "WCDR ≈ 17–20% (accept range from rounding of N(·)).",
          "Capital ≈ 7.5–8% after subtracting PD, not ~8.85% (which would include EL).",
        ],
      },
      {
        id: "pp-m5-3",
        testPointIds: ["tp-tranche", "tp-tranche-corr"],
        style: "Calculation + concept",
        question:
          "A $200m ABS is tranched equity 0–4%, mezzanine 4–10%, senior 10–100%. (a) If cumulative pool losses reach 8%, what is the percentage loss to each tranche? (b) A trader is long the mezzanine and hedges spread and PD. Name the residual risk and its direction if correlation falls.",
        answerPlan: [
          "Translate 8% pool loss into each band.",
          "Express mezzanine loss over its own width.",
          "Identify correlation as residual risk.",
        ],
        modelAnswer:
          "(a) Pool loss = 8% × $200m = $16m. Equity (0–4%, $8m width) is fully exhausted ⇒ 100% loss ($8m). Mezzanine (4–10%, $12m width) absorbs losses from $8m up to $20m; realised loss above equity is $16m − $8m = $8m, so mezzanine loss = $8m/$12m = 66.7% ($8m). Senior (10–100%): pool loss of 8% is below its 10% attachment ⇒ 0%. (b) The residual risk is correlation risk. The mezzanine sits between long-correlation equity and short-correlation senior, so it has meaningful correlation sensitivity even with spread and PD hedged; if correlation falls, the tail thins and large losses become less likely to punch through equity into the mezzanine, so a long-mezzanine position generally gains — but the sign can flip depending on where the tranche sits relative to expected loss, which is exactly why correlation must be managed explicitly.",
        markingGuide: [
          "Equity 100% ($8m); mezzanine 66.7% ($8m of $12m width); senior 0%.",
          "Mezzanine loss measured over its own width, not the pool.",
          "Names correlation as the residual (unhedged) risk with a defensible directional argument.",
        ],
      },
    ],
  }),

  // ===================================================================
  // frm-p2-m6 — Counterparty risk, CVA & wrong-way risk
  // ===================================================================
  "frm-p2-m6": examDepth({
    testPoints: [
      {
        id: "tp-exposure",
        title: "Counterparty exposure metrics: EE, EPE, PFE",
        priority: "critical",
        examinerFocus:
          "Whether you can distinguish an AVERAGE of positive future value (expected exposure) from a QUANTILE of it (potential future exposure), and read an exposure profile — why a swap's exposure peaks mid-life while an amortising loan's declines.",
        typicalQuestionForms: [
          "'How does PFE differ from expected exposure?'",
          "'Which exposure metric feeds the CVA calculation?'",
          "'Why does an interest-rate swap's exposure peak in the middle of its life?'",
        ],
        mustKnow: [
          "Exposure = max(value, 0): only positive mark-to-market creates counterparty loss on default; expected exposure (EE) is the mean of that positive value at a future date.",
          "PFE is a high quantile (e.g. 95%/99%) of future exposure used for limits; EPE is the time-average of EE and feeds regulatory/economic capital; effective EE/EPE apply a non-decreasing floor for rollover.",
          "A single interest-rate swap's EE profile is hump-shaped: diffusion widens the distribution of future rates (raising exposure) while amortisation of remaining payments shrinks it (lowering exposure), peaking in between; an FX forward's exposure grows toward maturity because notional exchange is at the end.",
        ],
        scoringActions: [
          "Match 'average' → EE/EPE and 'quantile/limit' → PFE before answering.",
          "Route EE (not PFE) into CVA; route PFE into credit-limit monitoring.",
          "Reason about the profile shape from diffusion vs amortisation, not memory alone.",
        ],
      },
      {
        id: "tp-cva",
        title: "Credit valuation adjustment (CVA) and DVA",
        priority: "critical",
        examinerFocus:
          "Whether you can build CVA from its components — discounted expected exposure × marginal default probability × LGD, summed over time buckets — and explain why DVA (booking gains as your own credit worsens) is conceptually real but controversial.",
        typicalQuestionForms: [
          "'Compute (approximate) CVA from the exposure, PD and LGD schedule.'",
          "'CVA increases when which input rises?'",
          "'Why is DVA controversial / hard to monetise?'",
        ],
        mustKnow: [
          "CVA ≈ LGD × Σₜ [discounted EEₜ × marginal PDₜ]; it is the market price of expected counterparty default loss and is a charge (reduces the value of the trade to you).",
          "CVA rises with higher exposure, higher counterparty PD/spread, higher LGD and longer maturity; it is why dealers charge a CVA on uncollateralised trades.",
          "DVA is the mirror image using your OWN PD: your derivative liabilities fall in value as your credit deteriorates, booking an accounting gain — controversial because it improves P&L exactly when you are weakening and cannot be realised without defaulting.",
        ],
        scoringActions: [
          "Multiply the three components per bucket, discount, then sum — don't average PD across the life.",
          "Identify which single input moved to explain a CVA change.",
          "Flag DVA's perverse 'gain as you weaken' property when asked to critique it.",
        ],
      },
      {
        id: "tp-xva",
        title: "The xVA family: FVA, KVA, MVA",
        priority: "medium",
        examinerFocus:
          "Whether you know each valuation adjustment captures a distinct real cost — funding, capital, initial margin — and that they are additive corrections to the risk-free derivative price, with some overlap/double-counting debate (FVA vs DVA).",
        typicalQuestionForms: [
          "'What cost does FVA/KVA/MVA capture?'",
          "'Why do dealers add xVA to a derivative price?'",
          "'Where is there potential double-counting among the xVAs?'",
        ],
        mustKnow: [
          "FVA = funding cost/benefit of uncollateralised or imperfectly collateralised trades (funding the hedge or the exposure at above-risk-free rates); KVA = cost of holding regulatory capital over the trade's life; MVA = cost of funding initial margin.",
          "xVAs are additive adjustments to the risk-free/collateralised price: Price ≈ risk-free value − CVA + DVA − FVA − KVA − MVA (signs vary by convention/perspective).",
          "FVA and DVA overlap conceptually (own-credit/funding), creating a recognised double-counting debate; KVA and MVA grew in importance as capital and margin rules raised the cost of derivatives.",
        ],
        scoringActions: [
          "Attach each adjustment to its cost: funding (FVA), capital (KVA), initial margin (MVA).",
          "Treat xVAs as additive corrections to a base collateralised price.",
          "Name the FVA/DVA overlap when asked about double-counting.",
        ],
      },
      {
        id: "tp-mitigation",
        title: "Netting, collateral, margin and central clearing",
        priority: "high",
        examinerFocus:
          "Whether you can quantify the netting benefit (net vs gross exposure), explain how variation and initial margin cut residual exposure, and describe how a CCP re-shapes — but does not eliminate — counterparty risk.",
        typicalQuestionForms: [
          "'Compute the exposure with and without a netting agreement.'",
          "'How do initial and variation margin differ in what they cover?'",
          "'Does central clearing remove counterparty risk?'",
        ],
        mustKnow: [
          "Under an enforceable netting set, exposure = max(Σ MtM, 0) rather than Σ max(MtMᵢ, 0); the difference is the netting benefit and is largest when trades offset.",
          "Variation margin collateralises current MtM moves (removing most current exposure); initial margin covers potential future exposure over the close-out/margin period of risk, protecting against gap moves between default and liquidation.",
          "A CCP novates trades and mutualises risk via margin and a default fund/waterfall — it reduces bilateral, wrong-way and network risk but concentrates risk in the CCP and introduces member-contribution and liquidity risk.",
        ],
        scoringActions: [
          "Compute net exposure as max(sum, 0), not the sum of positive legs.",
          "Assign current-move coverage to VM and gap/close-out coverage to IM.",
          "State that clearing transforms and concentrates risk rather than removing it.",
        ],
      },
      {
        id: "tp-wwr",
        title: "Wrong-way and right-way risk",
        priority: "high",
        examinerFocus:
          "Whether you can spot when exposure and counterparty default probability are positively correlated (wrong-way risk), why that raises CVA above the independence assumption, and give the canonical examples.",
        typicalQuestionForms: [
          "'Identify the wrong-way risk in this trade.'",
          "'How does wrong-way risk affect CVA?'",
          "'Give an example of right-way risk.'",
        ],
        mustKnow: [
          "Wrong-way risk (WWR): exposure rises precisely as the counterparty's credit deteriorates, so the standard CVA (which assumes exposure and PD are independent) understates the true adjustment.",
          "Specific WWR arises from a direct link (e.g. buying protection on a name from a seller correlated with that name, or a counterparty posting its own/affiliated stock as collateral); general WWR arises from a macro link.",
          "Right-way risk is the favourable case — exposure falls as the counterparty weakens (e.g. a producer hedging its output) — which reduces effective exposure and CVA.",
        ],
        scoringActions: [
          "Test whether exposure and PD move TOGETHER; if yes, flag WWR and say CVA is understated.",
          "Distinguish specific (direct link/collateral) from general (macro) WWR.",
          "Identify right-way structures (hedgers of their own risk) as CVA-reducing.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Secure the netting and CVA arithmetic, then win the exposure-metric and wrong-way-risk judgement items where most candidates blur EE vs PFE or miss the exposure–PD correlation.",
      timeBudget:
        "~2–2.5 minutes on CVA/netting numerics, ~1 minute on metric-definition and WWR items; pace to finish 80 items in four hours.",
      answerSequence: [
        "Identify the metric family: average (EE/EPE) vs quantile (PFE), or a valuation adjustment.",
        "For CVA, tabulate discounted EE × marginal PD per bucket, sum, then multiply by LGD.",
        "For netting, compute max(Σ MtM, 0) and compare to Σ max(MtMᵢ, 0).",
        "Check for wrong-way risk (exposure and PD co-moving) before finalising any CVA answer.",
      ],
      qualityChecks: [
        "Did I feed EE (not PFE) into CVA and use PFE only for limits?",
        "Are marginal (bucketed) PDs used, not a single average PD?",
        "Is net exposure max(sum,0), not the sum of positive legs?",
        "Did I test exposure–PD correlation for wrong-way risk?",
      ],
    },
    studyNotes: [
      {
        id: "sn-exposure",
        title: "Reading exposure: EE, EPE and PFE",
        testPointIds: ["tp-exposure", "tp-cva"],
        explanation: [
          "Counterparty exposure only exists when a trade has positive value to you, because a defaulting counterparty walks away from what it owes but you still owe what you owe. So exposure at any future date is max(value, 0). Expected exposure (EE) is the average of that positive value across simulated future scenarios at a given date; expected positive exposure (EPE) is EE averaged over time and is the input to economic and regulatory capital. Potential future exposure (PFE) is instead a high quantile (say 95% or 99%) of future exposure and is used to set and monitor credit limits — it answers 'how bad could it plausibly get?' rather than 'what is it on average?'.",
          "Profiles have characteristic shapes that examiners expect you to reason out. For a single interest-rate swap the EE profile is hump-shaped: as time passes, uncertainty about future rates diffuses and widens the value distribution (pushing exposure up), while the number of remaining payments shrinks (pulling it down), so exposure peaks somewhere in the middle. An FX forward or cross-currency swap with a final notional exchange instead sees exposure climb toward maturity. The metric that feeds CVA is EE (the average), never PFE — mixing them up is a classic trap.",
        ],
        keyRules: [
          "Exposure = max(value, 0); EE is its mean, PFE its high quantile.",
          "EPE (time-averaged EE) → capital; PFE → limits; EE → CVA.",
          "IRS exposure peaks mid-life (diffusion vs amortisation); FX forward peaks near maturity.",
        ],
        formulas: [
          "EE(t) = E[max(V(t), 0)].",
          "EPE = time-average of EE(t).",
          "PFE(t) = quantile_q[max(V(t), 0)].",
        ],
      },
      {
        id: "sn-cva",
        title: "Building CVA (and the DVA controversy)",
        testPointIds: ["tp-cva", "tp-exposure"],
        explanation: [
          "CVA is the market value of the expected loss from a counterparty defaulting while it owes you money. You build it by slicing the trade's life into time buckets and, in each bucket, multiplying the discounted expected exposure by the marginal probability that the counterparty defaults in that bucket, then by loss given default; summing across buckets and applying LGD gives the CVA. Because it uses marginal (per-bucket) default probabilities and the exposure profile, CVA is highest for long-dated, uncollateralised trades against weak counterparties.",
          "DVA applies the identical logic to your OWN default: the value of your derivative liabilities falls as your credit spread widens, which under fair-value accounting produces a gain. It is symmetric and internally consistent, but controversial for two reasons: it flatters your P&L exactly when your own creditworthiness is deteriorating, and it can only truly be 'realised' by defaulting. This is why regulators strip DVA out of capital even though accountants may recognise it.",
        ],
        keyRules: [
          "CVA ≈ LGD × Σₜ discounted EEₜ × marginal PDₜ.",
          "CVA rises with exposure, counterparty PD/spread, LGD and tenor.",
          "DVA uses your own PD; it books gains as you weaken (hence controversial).",
        ],
        formulas: [
          "CVA ≈ LGD_C × Σₜ EEₜ · DFₜ · PD_marginal,ₜ.",
          "DVA ≈ LGD_self × Σₜ NEEₜ · DFₜ · PD_marginal,self,ₜ.",
        ],
        workedProblem: {
          scenario:
            "Estimate CVA on an uncollateralised swap. Counterparty LGD = 60%. Two annual buckets: Year 1 discounted EE = $4m, marginal PD = 1.0%; Year 2 discounted EE = $3m, marginal PD = 1.5%.",
          steps: [
            "Year-1 contribution = EE × marginal PD = $4m × 0.010 = $0.040m.",
            "Year-2 contribution = $3m × 0.015 = $0.045m.",
            "Sum of discounted EE × marginal PD = $0.040m + $0.045m = $0.085m.",
            "CVA = LGD × sum = 0.60 × $0.085m = $0.051m.",
          ],
          conclusion:
            "CVA ≈ $51,000. This is the price of the counterparty's expected default loss on the swap and would be charged to the client at inception; note Year 2 contributes more despite lower exposure because its marginal PD is higher.",
          markingNotes: [
            "Uses marginal (per-bucket) PDs, not one averaged PD.",
            "Sums the discounted EE × PD products before applying LGD.",
            "Final CVA = $51,000 (0.60 × $85,000).",
          ],
        },
      },
      {
        id: "sn-xva",
        title: "The xVA stack around a derivative price",
        testPointIds: ["tp-xva", "tp-cva"],
        explanation: [
          "Once CVA and DVA are on the table, dealers layer on further valuation adjustments that capture other real costs of running an uncollateralised derivative. FVA reflects the funding cost (or benefit) of financing an uncollateralised position or its hedge at the firm's funding spread above the risk-free rate. KVA reflects the lifetime cost of the regulatory capital the trade consumes. MVA reflects the cost of funding initial margin, which became material once non-cleared margin rules and CCP initial margin spread across the market.",
          "Conceptually these are additive corrections to a base collateralised (near-risk-free) valuation: roughly Price ≈ base value − CVA + DVA − FVA − KVA − MVA, with signs depending on perspective and convention. The subtlety the exam likes is overlap: FVA and DVA both relate to the firm's own credit/funding, so recognising both risks double-counting. The rise of KVA and MVA is itself a 'why derivatives got more expensive' story driven by post-crisis capital and margin reform, not by any single market event.",
        ],
        keyRules: [
          "FVA = funding cost; KVA = capital cost; MVA = initial-margin funding cost.",
          "xVAs are additive adjustments to a collateralised base price.",
          "FVA/DVA overlap ⇒ double-counting debate.",
        ],
        formulas: [
          "Price ≈ base − CVA + DVA − FVA − KVA − MVA (signs by convention).",
        ],
      },
      {
        id: "sn-mitigation",
        title: "Netting, margin and central clearing",
        testPointIds: ["tp-mitigation", "tp-exposure"],
        explanation: [
          "Netting is the first line of mitigation: under an enforceable master agreement, on default you owe or are owed the NET mark-to-market of the whole netting set, so exposure becomes max(Σ MtM, 0) instead of Σ max(MtMᵢ, 0). The more the trades offset, the bigger the netting benefit. Collateral then attacks the residual: variation margin is exchanged against current MtM moves and removes most of the current exposure, while initial margin is posted up front to cover potential future exposure over the margin period of risk — the gap between the last variation-margin call and final close-out, when prices can move sharply.",
          "Central clearing re-plumbs all of this. A central counterparty novates each trade so it becomes the buyer to every seller and seller to every buyer, standardises margining, and mutualises residual risk through a default fund and a loss waterfall. This cuts bilateral and network exposure and reduces wrong-way and contagion risk — but it does not make risk disappear. It concentrates risk in the CCP, imposes member default-fund contributions, and creates large, procyclical liquidity demands through margin calls. 'Clearing eliminates counterparty risk' is always a wrong answer.",
        ],
        keyRules: [
          "Netting-set exposure = max(Σ MtM, 0) < Σ max(MtMᵢ, 0).",
          "VM covers current MtM; IM covers potential future/close-out exposure.",
          "CCPs transform and concentrate risk; they don't eliminate it.",
        ],
        formulas: [
          "Netting benefit = Σ max(MtMᵢ, 0) − max(Σ MtMᵢ, 0).",
        ],
        workedProblem: {
          scenario:
            "You face one counterparty on two trades under an enforceable netting agreement: Trade 1 MtM = +$10m (in your favour), Trade 2 MtM = −$6m (against you). Compute gross exposure, net exposure and the netting benefit; then state the residual exposure if $3m of variation margin has been received.",
          steps: [
            "Gross exposure (no netting) = Σ max(MtMᵢ, 0) = max($10m,0) + max(−$6m,0) = $10m + $0 = $10m.",
            "Net exposure = max(Σ MtM, 0) = max($10m − $6m, 0) = $4m.",
            "Netting benefit = $10m − $4m = $6m.",
            "After $3m variation margin: residual exposure = max($4m − $3m, 0) = $1m.",
          ],
          conclusion:
            "Netting cuts exposure from $10m to $4m (a $6m benefit), and $3m of variation margin reduces the residual current exposure to $1m — illustrating how netting and collateral stack to shrink counterparty risk.",
          markingNotes: [
            "Gross exposure counts only the positive leg ($10m).",
            "Net exposure is max of the SUM ($4m), giving a $6m netting benefit.",
            "Variation margin nets against current exposure → $1m residual.",
          ],
        },
      },
      {
        id: "sn-wwr",
        title: "Wrong-way and right-way risk",
        testPointIds: ["tp-wwr", "tp-cva"],
        explanation: [
          "Standard CVA assumes exposure and the counterparty's default probability are independent. Wrong-way risk breaks that assumption in the dangerous direction: exposure grows precisely as the counterparty deteriorates, so the true expected loss — and hence the true CVA — is larger than the independence formula suggests. Specific wrong-way risk comes from a direct structural link, such as buying credit protection on a company from a guarantor economically tied to it, or accepting the counterparty's own (or an affiliate's) shares as collateral, so the collateral evaporates just as you need it. General wrong-way risk comes from a macro link, such as exposure and PD both worsening in a recession.",
          "Right-way risk is the benign mirror: exposure falls as the counterparty weakens, for example when a commodity producer hedges by selling forward — if prices collapse the producer is stressed, but your exposure to it also falls because the forward is now in the producer's favour. Recognising the sign of the exposure–PD correlation is what the exam rewards: co-movement (wrong-way) inflates CVA and demands an add-on or alpha multiplier, while inverse movement (right-way) reduces effective exposure.",
        ],
        keyRules: [
          "WWR: exposure ↑ as counterparty PD ↑ ⇒ independence-CVA understates risk.",
          "Specific WWR = direct link/own-collateral; general WWR = macro link.",
          "Right-way risk: exposure ↓ as PD ↑ ⇒ lower effective exposure/CVA.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m6-1",
        testPointIds: ["tp-cva", "tp-exposure"],
        style: "Calculation",
        question:
          "Estimate CVA on an uncollateralised trade with counterparty LGD = 50% over three annual buckets: Year 1 discounted EE = $5m, marginal PD = 0.8%; Year 2 discounted EE = $4m, marginal PD = 1.2%; Year 3 discounted EE = $2m, marginal PD = 2.0%. State which bucket contributes most and why.",
        answerPlan: [
          "Compute each bucket's EE × marginal PD.",
          "Sum and apply LGD.",
          "Identify and explain the largest contributor.",
        ],
        modelAnswer:
          "Year 1: $5m × 0.008 = $0.040m. Year 2: $4m × 0.012 = $0.048m. Year 3: $2m × 0.020 = $0.040m. Sum = $0.128m; CVA = LGD × sum = 0.50 × $0.128m = $0.064m ≈ $64,000. Year 2 contributes most ($48,000) because its combination of still-high exposure and a higher marginal default probability outweighs Year 1 (higher exposure but lower PD) and Year 3 (highest PD but exposure has amortised away). This shows CVA is driven by the interaction of the exposure profile and the term structure of default probability, not by either alone.",
        markingGuide: [
          "Correct per-bucket products (0.040, 0.048, 0.040 in $m).",
          "CVA = $64,000 after applying 50% LGD to the $128k sum.",
          "Identifies Year 2 as largest with exposure-×-PD interaction reasoning.",
        ],
      },
      {
        id: "pp-m6-2",
        testPointIds: ["tp-mitigation", "tp-exposure"],
        style: "Calculation + concept",
        question:
          "Under an enforceable netting set you hold three trades with a single counterparty: +$8m, +$5m and −$9m. (a) Compute gross and net exposure and the netting benefit. (b) The counterparty proposes clearing all future trades through a CCP. State one benefit and one residual risk of doing so.",
        answerPlan: [
          "Compute gross vs net exposure.",
          "Derive netting benefit.",
          "Give a balanced CCP benefit and residual risk.",
        ],
        modelAnswer:
          "(a) Gross exposure = Σ max(MtMᵢ,0) = $8m + $5m + $0 = $13m. Net exposure = max(Σ MtM, 0) = max($8m + $5m − $9m, 0) = max($4m, 0) = $4m. Netting benefit = $13m − $4m = $9m. (b) Benefit: the CCP novates and multilaterally nets across members and standardises margining, cutting bilateral and network/contagion exposure and reducing wrong-way risk. Residual risk: risk is concentrated in the CCP itself — the firm now faces CCP default risk, must contribute to a mutualised default fund, and is exposed to large, procyclical initial- and variation-margin liquidity calls. Clearing transforms and concentrates counterparty risk rather than eliminating it.",
        markingGuide: [
          "Gross = $13m (positive legs only), net = $4m (max of sum), benefit = $9m.",
          "States a genuine CCP benefit (multilateral netting / reduced bilateral & contagion risk).",
          "States a genuine residual risk (CCP concentration, default fund, or margin liquidity).",
        ],
      },
      {
        id: "pp-m6-3",
        testPointIds: ["tp-wwr", "tp-cva"],
        style: "Diagnosis",
        question:
          "A bank buys credit protection on Corporate X via a CDS sold by a small hedge fund whose main position is a large long exposure to Corporate X's sector. (a) What type of risk is present and how does it affect the CVA the bank should charge? (b) Contrast this with a case of right-way risk.",
        answerPlan: [
          "Identify wrong-way risk and its type.",
          "State the CVA effect.",
          "Give a right-way contrast.",
        ],
        modelAnswer:
          "(a) This is specific wrong-way risk: the protection seller's creditworthiness is positively correlated with the very exposure the bank is trying to hedge. If Corporate X (and its sector) deteriorate, the bank's CDS gains value — its exposure to the hedge fund rises — at exactly the moment the hedge fund is most likely to default, so the protection is least reliable when most needed. Standard CVA, which assumes exposure and counterparty PD are independent, therefore understates the true adjustment; the bank should apply a wrong-way add-on (or model the exposure–PD correlation directly) and demand more collateral or a stronger counterparty. (b) Right-way risk would be, for example, an oil producer entering a forward sale of oil with the bank: if oil prices fall the producer is stressed (higher PD) but the bank's exposure to it falls because the forward moves in the producer's favour, so effective exposure and CVA are reduced.",
        markingGuide: [
          "Identifies specific wrong-way risk with the exposure–PD correlation explained.",
          "States that independence-based CVA understates risk ⇒ add-on / more collateral.",
          "Gives a valid right-way example (hedger of its own underlying) with the correct direction.",
        ],
      },
    ],
  }),

  // ===================================================================
  // frm-p2-m7 — Operational risk: taxonomy, loss data & capital
  // ===================================================================
  "frm-p2-m7": examDepth({
    testPoints: [
      {
        id: "tp-taxonomy",
        title: "Operational-risk definition, event types and business lines",
        priority: "high",
        examinerFocus:
          "Whether you can apply the Basel definition (loss from failed people, processes, systems or external events; includes legal risk, EXCLUDES strategic and reputational risk) and classify a given loss into the right event-type/business-line cell.",
        typicalQuestionForms: [
          "'Which of these is NOT operational risk by the Basel definition?'",
          "'Classify this loss by event type.'",
          "'Is legal risk part of operational risk? Is reputational?'",
        ],
        mustKnow: [
          "Operational risk = risk of loss from inadequate/failed internal processes, people and systems, or from external events; it INCLUDES legal risk but EXCLUDES strategic and reputational risk.",
          "The Basel event-type taxonomy has seven categories (e.g. internal fraud; external fraud; employment practices & workplace safety; clients, products & business practices; damage to physical assets; business disruption & system failures; execution, delivery & process management).",
          "Losses are mapped to both an event type and a business line, which structures loss-data collection and the historical capital frameworks.",
        ],
        scoringActions: [
          "Reject strategic/reputational items as operational risk; accept legal risk as included.",
          "Match the loss narrative to the correct event-type category before answering.",
          "Separate the cause (event type) from the affected business line.",
        ],
      },
      {
        id: "tp-lossdata",
        title: "Internal and external loss data; threshold bias and scaling",
        priority: "high",
        examinerFocus:
          "Whether you understand why a firm supplements its own loss history with external/consortium data, and how a collection threshold and reporting bias distort observed frequency and severity — so the raw data cannot be used naively.",
        typicalQuestionForms: [
          "'Why supplement internal loss data with external data?'",
          "'How does a collection threshold bias frequency and severity estimates?'",
          "'What must be done before pooling external data into your model?'",
        ],
        mustKnow: [
          "Internal data captures the firm's own experience and control environment but is sparse in the tail; external (consortium/public) data fills in rare high-severity events but must be scaled and filtered for relevance and reporting bias.",
          "A collection threshold (only recording losses above a cutoff) truncates the data: it understates frequency (small losses missing) and overstates average severity unless the truncation is modelled.",
          "Public/consortium data suffers from reporting bias (large, newsworthy losses over-represented) and scale differences, so it must be scaled to the firm's size/exposure and treated for data-capture bias before use.",
        ],
        scoringActions: [
          "Pair internal (body) with external (tail) data and justify why both are needed.",
          "State that thresholds understate frequency and inflate mean severity if ignored.",
          "Require scaling and bias correction before pooling external data.",
        ],
      },
      {
        id: "tp-freqsev",
        title: "Frequency, severity and the aggregate loss distribution",
        priority: "critical",
        examinerFocus:
          "Whether you can model frequency and severity separately (typically Poisson frequency, lognormal/heavy-tailed severity), combine them into an aggregate annual loss distribution, and recognise that the tail is driven by low-frequency, high-severity events.",
        typicalQuestionForms: [
          "'Why model frequency and severity separately?'",
          "'Compute the expected aggregate annual loss given a Poisson λ and a lognormal severity.'",
          "'What dominates the operational-loss tail?'",
        ],
        mustKnow: [
          "Frequency is commonly Poisson (parameter λ = expected number of events/year); severity is commonly lognormal or heavy-tailed; separating them lets each be estimated from the relevant data and combined flexibly.",
          "Expected aggregate loss = E[frequency] × E[severity] = λ × E[severity]; for a lognormal(μ, σ) severity, E[severity] = exp(μ + σ²/2).",
          "The aggregate distribution is built by convolution — analytically hard, so Monte Carlo is standard — and its high quantiles are dominated by rare, large severities, not by frequency.",
        ],
        scoringActions: [
          "Estimate frequency and severity from separate data, then combine.",
          "Use E[lognormal] = exp(μ + σ²/2) and multiply by λ for expected aggregate loss.",
          "Attribute the capital-relevant tail to severity (rare large events), not frequency.",
        ],
      },
      {
        id: "tp-lda-capital",
        title: "The loss-distribution approach and the Basel SMA",
        priority: "critical",
        examinerFocus:
          "Whether you can derive operational-risk capital from a modelled aggregate loss distribution (LDA at a high quantile) AND explain the current standardised approach (SMA): a business-indicator component scaled by an internal-loss multiplier, which replaced the AMA.",
        typicalQuestionForms: [
          "'How does the LDA derive operational-risk capital?'",
          "'Compute the SMA internal-loss multiplier / capital given BIC and loss data.'",
          "'What replaced the Advanced Measurement Approach and why?'",
        ],
        mustKnow: [
          "LDA capital = a high quantile (e.g. 99.9%) of the modelled aggregate annual loss distribution, often expressed as value beyond expected loss; it is model-driven and Monte-Carlo-based.",
          "Basel replaced the internally-modelled AMA with the standardised SMA for comparability: capital = Business Indicator Component (BIC) × Internal Loss Multiplier (ILM), where the ILM links a firm's own loss history to the charge.",
          "ILM = Ln[exp(1) − 1 + (LC / BIC)^0.8], with the Loss Component LC = 15 × average annual operational losses; ILM > 1 when losses are high relative to the BIC and < 1 when they are low.",
        ],
        scoringActions: [
          "For LDA, read capital off a high quantile of the AGGREGATE distribution, net of EL where specified.",
          "For SMA, compute BIC, then LC = 15 × average losses, then ILM, then capital = BIC × ILM.",
          "State that the AMA was retired in favour of the SMA for comparability/comparability across banks.",
        ],
      },
      {
        id: "tp-scenario-kri",
        title: "Scenario analysis, key risk indicators and RCSA",
        priority: "medium",
        examinerFocus:
          "Whether you know why forward-looking tools (scenario analysis, KRIs, RCSA) are needed to complement backward-looking loss data — especially for rare tail events that the data has never captured.",
        typicalQuestionForms: [
          "'Why complement loss data with scenario analysis?'",
          "'What is the purpose of a key risk indicator (KRI)?'",
          "'What does an RCSA identify?'",
        ],
        mustKnow: [
          "Scenario analysis uses structured expert judgement to estimate the frequency/severity of severe events absent from the firm's own history, feeding the tail of the loss distribution.",
          "KRIs are forward-looking, measurable metrics (e.g. staff turnover, failed trades, system downtime) whose changes signal rising operational risk before losses occur; good KRIs have thresholds and are predictive.",
          "Risk-and-control self-assessment (RCSA) is a bottom-up process where business units identify their risks and rate control effectiveness, surfacing control gaps prospectively.",
        ],
        scoringActions: [
          "Justify scenario analysis by the sparsity of tail data, not as a data replacement.",
          "Describe KRIs as leading, threshold-based indicators, not lagging loss counts.",
          "Frame RCSA as bottom-up control-gap identification.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Lock the SMA and LDA arithmetic (the only reliable numerics), then bank the taxonomy/definition and data-bias items that most candidates get on judgement rather than recall.",
      timeBudget:
        "~2–2.5 minutes on SMA/LDA calculations, ~1 minute on classification and data-quality items; keep pace for 80 items in four hours.",
      answerSequence: [
        "Classify the item: definition/taxonomy, data quality, frequency/severity modelling, or capital (LDA/SMA).",
        "For capital, decide LDA (high quantile of aggregate loss) vs SMA (BIC × ILM) and lay out the formula first.",
        "For SMA compute LC = 15 × average losses, then ILM = Ln(e − 1 + (LC/BIC)^0.8), then multiply by BIC.",
        "For judgement items, resolve via 'excludes strategic/reputational', 'thresholds bias data', and 'tail = severity'.",
      ],
      qualityChecks: [
        "Did I exclude strategic/reputational (but include legal) from operational risk?",
        "For expected aggregate loss, did I use λ × exp(μ + σ²/2)?",
        "In the SMA, is LC = 15 × average annual losses and ILM applied multiplicatively to the BIC?",
        "Did I attribute the tail to severity rather than frequency?",
      ],
    },
    studyNotes: [
      {
        id: "sn-taxonomy",
        title: "Defining and classifying operational risk",
        testPointIds: ["tp-taxonomy", "tp-lossdata"],
        explanation: [
          "Operational risk is defined by Basel as the risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events. Two boundary facts carry most of the exam marks: the definition INCLUDES legal risk (litigation, fines, unenforceable contracts) but EXCLUDES strategic risk (bad business decisions) and reputational risk (loss of standing). A question that dresses up a strategic mis-step or a reputational hit as 'operational' is testing exactly this boundary.",
          "Within scope, losses are classified along two axes: a seven-category event-type taxonomy (internal fraud; external fraud; employment practices and workplace safety; clients, products and business practices; damage to physical assets; business disruption and system failures; execution, delivery and process management) and a set of business lines. This two-dimensional mapping is not academic bureaucracy — it is the grid on which loss data is collected and on which historical capital models were built, so being able to drop a narrative into the right cell is a core skill.",
        ],
        keyRules: [
          "Op risk = failed people/process/systems/external events; includes legal.",
          "Excludes strategic and reputational risk.",
          "Losses mapped by event type (7 categories) AND business line.",
        ],
      },
      {
        id: "sn-lossdata",
        title: "Loss data: internal, external and the threshold trap",
        testPointIds: ["tp-lossdata", "tp-freqsev"],
        explanation: [
          "A single firm rarely experiences enough large operational losses to estimate its own tail, so it combines internal data — which reflects its specific processes and controls and populates the body of the distribution — with external data from consortia or public sources that supply rare, high-severity events. The catch is that external data cannot be dropped in raw: it must be scaled to the firm's size and business mix and cleaned of reporting bias, because public datasets over-represent large, newsworthy losses and under-represent quiet ones.",
          "Even internal data is distorted by the collection threshold. If a firm only records losses above, say, $10,000, the observed data is truncated: it understates true frequency (all the sub-threshold losses are invisible) and overstates average severity (the small losses that would pull the mean down are missing). Unless the truncation point is explicitly modelled, both the frequency and severity estimates — and therefore the capital number — will be biased. Recognising and correcting these biases is what separates a defensible model from a naive one.",
        ],
        keyRules: [
          "Internal data = body/own controls; external data = tail (must be scaled & de-biased).",
          "Collection threshold ⇒ understates frequency, overstates mean severity.",
          "External data carries reporting bias toward large losses.",
        ],
      },
      {
        id: "sn-freqsev",
        title: "Frequency × severity: building the aggregate loss distribution",
        testPointIds: ["tp-freqsev", "tp-lda-capital"],
        explanation: [
          "The workhorse of operational-risk modelling is to treat how OFTEN losses happen and how BIG they are as two separate problems. Frequency — the number of loss events per year — is usually modelled with a Poisson distribution parameterised by λ, its expected count. Severity — the size of an individual loss — is usually modelled with a lognormal or other heavy-tailed distribution, because operational losses are strongly right-skewed. Modelling them separately lets each be estimated from the data best suited to it and then recombined.",
          "The aggregate annual loss is the sum of a random (Poisson) number of severity draws. Its expected value is simply λ × E[severity], and for a lognormal(μ, σ) severity, E[severity] = exp(μ + σ²/2). The full aggregate distribution, however, requires convolving frequency and severity, which has no simple closed form, so practitioners simulate it by Monte Carlo. The high quantiles that drive capital are dominated by the tail of the SEVERITY distribution — a handful of very large events — rather than by frequency, which is why heavy-tailed severity assumptions matter so much.",
        ],
        keyRules: [
          "Frequency ~ Poisson(λ); severity ~ lognormal/heavy-tailed.",
          "E[aggregate] = λ × E[severity]; E[lognormal] = exp(μ + σ²/2).",
          "Aggregate quantiles built by Monte Carlo; tail driven by severity.",
        ],
        formulas: [
          "E[severity] = exp(μ + σ²/2).",
          "E[aggregate annual loss] = λ × exp(μ + σ²/2).",
        ],
        workedProblem: {
          scenario:
            "An operational-risk cell has Poisson frequency with λ = 4 events/year and lognormal severity with μ = 10 and σ = 2 (losses in $). Compute the expected severity per event and the expected aggregate annual loss.",
          steps: [
            "E[severity] = exp(μ + σ²/2) = exp(10 + 4/2) = exp(12).",
            "exp(12) ≈ $162,755 per event.",
            "E[aggregate annual loss] = λ × E[severity] = 4 × $162,755.",
            "= $651,020 (approximately).",
          ],
          conclusion:
            "Expected severity is about $162,800 per event and expected aggregate annual loss is about $651,000. Note this is only the MEAN; the 99.9% capital quantile would sit far above it and must be obtained by Monte Carlo because the lognormal tail dominates.",
          markingNotes: [
            "Uses exp(μ + σ²/2), i.e. exp(12), for lognormal mean.",
            "Multiplies by λ = 4 to get the aggregate expectation.",
            "Notes the capital quantile requires simulation, not just the mean.",
          ],
        },
      },
      {
        id: "sn-lda-capital",
        title: "From aggregate loss to capital: LDA and the SMA",
        testPointIds: ["tp-lda-capital", "tp-freqsev"],
        explanation: [
          "The loss-distribution approach derives capital directly from the modelled aggregate annual loss distribution: capital is a high quantile (Basel used 99.9% over one year), typically expressed as the amount beyond expected loss. Because the aggregate distribution is simulated, the LDA is powerful but sensitive to severity-tail assumptions and data quality — small changes in the tail model swing the capital number a lot. That model risk, plus a lack of comparability across banks, is why the internally-modelled Advanced Measurement Approach was retired.",
          "Its replacement, the Standardised Measurement Approach, trades model freedom for comparability. Capital = Business Indicator Component (BIC) × Internal Loss Multiplier (ILM). The BIC is a size proxy derived from income-statement items (the Business Indicator) through regulatory buckets; the ILM ties the charge to the bank's own losses via ILM = Ln[exp(1) − 1 + (LC/BIC)^0.8], where the Loss Component LC = 15 × the bank's average annual operational losses. When historical losses are high relative to size, LC/BIC exceeds 1 and the ILM lifts capital above the BIC; when losses are low, the ILM pulls it below.",
        ],
        keyRules: [
          "LDA capital = high quantile (e.g. 99.9%) of aggregate loss, net of EL.",
          "SMA capital = BIC × ILM; SMA replaced the AMA.",
          "ILM = Ln(e − 1 + (LC/BIC)^0.8); LC = 15 × average annual losses.",
        ],
        formulas: [
          "LC = 15 × average annual operational losses.",
          "ILM = Ln(exp(1) − 1 + (LC / BIC)^0.8).",
          "SMA capital = BIC × ILM.",
        ],
        workedProblem: {
          scenario:
            "A bank has a Business Indicator Component (BIC) of €1,500m and average annual operational losses of €80m. Compute the Loss Component, the Internal Loss Multiplier and the SMA operational-risk capital.",
          steps: [
            "LC = 15 × average annual losses = 15 × €80m = €1,200m.",
            "LC / BIC = 1,200 / 1,500 = 0.80; (0.80)^0.8 = exp(0.8 × ln 0.80) = exp(0.8 × (−0.223)) = exp(−0.1785) ≈ 0.836.",
            "ILM = Ln(exp(1) − 1 + 0.836) = Ln(1.718 + 0.836) = Ln(2.554) ≈ 0.938.",
            "SMA capital = BIC × ILM = €1,500m × 0.938 ≈ €1,407m.",
          ],
          conclusion:
            "The ILM is about 0.94, slightly below 1, because the bank's losses are modest relative to its size (LC/BIC = 0.8), so SMA capital of ≈ €1,407m sits just under the BIC. A loss history exceeding the BIC would push the ILM above 1 and raise capital above €1,500m.",
          markingNotes: [
            "LC = 15 × €80m = €1,200m (uses the ×15 multiplier).",
            "ILM computed via Ln(e − 1 + (LC/BIC)^0.8) ≈ 0.938.",
            "Capital = BIC × ILM ≈ €1,407m, correctly below BIC because ILM < 1.",
          ],
        },
      },
      {
        id: "sn-scenario-kri",
        title: "Forward-looking tools: scenarios, KRIs and RCSA",
        testPointIds: ["tp-scenario-kri", "tp-lossdata"],
        explanation: [
          "Loss data is inherently backward-looking and, in the tail, almost empty — a firm cannot have a rich history of the catastrophic events that dominate its capital. Scenario analysis fills that gap with structured expert judgement: workshops estimate the frequency and severity of severe-but-plausible events the firm has never actually suffered, and those estimates feed the tail of the aggregate loss model. It is a complement to data, never a substitute, and its main weakness is the behavioural bias of the experts supplying the numbers.",
          "Key risk indicators and the risk-and-control self-assessment add a live, prospective dimension. KRIs are measurable, forward-looking metrics — system downtime, failed-trade rates, staff turnover — with thresholds that flag rising risk before losses crystallise, so they are leading rather than lagging signals. The RCSA is a bottom-up process in which each business unit catalogues its own risks and rates the effectiveness of its controls, surfacing control gaps prospectively. Together these tools turn operational-risk management from an autopsy of past losses into an early-warning system.",
        ],
        keyRules: [
          "Scenario analysis supplies tail estimates absent from data (complement, not substitute).",
          "KRIs are leading, threshold-based metrics that signal rising risk early.",
          "RCSA is bottom-up identification of risks and control gaps.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m7-1",
        testPointIds: ["tp-taxonomy", "tp-lossdata"],
        style: "Concept",
        question:
          "For each item, state whether it is operational risk under the Basel definition and, if so, its likely event type: (a) a trader's unauthorised position causing a loss; (b) a decision to enter a new market that fails commercially; (c) a fine for mis-selling a product; (d) reputational damage after a data breach. Then explain one way a collection threshold could bias the firm's loss statistics.",
        answerPlan: [
          "Classify each against the definition.",
          "Assign event types where applicable.",
          "Explain threshold bias.",
        ],
        modelAnswer:
          "(a) Operational risk — internal fraud (unauthorised/rogue trading is a people/process failure). (b) NOT operational risk — this is strategic/business risk, explicitly excluded. (c) Operational risk — clients, products & business practices; note it includes the legal/regulatory fine, and legal risk IS within operational risk. (d) The reputational damage itself is EXCLUDED (reputational risk is out of scope), though the underlying data breach is an operational event (business disruption/system failure or execution/process management) — the loss booked as reputational fallout is not counted as operational-risk loss. Threshold bias: if the firm only records losses above a cutoff, small losses go uncaptured, so measured frequency is understated and average severity is overstated; unless the truncation is modelled, both the loss distribution and the capital estimate are biased.",
        markingGuide: [
          "(a) internal fraud, (b) excluded strategic, (c) included with legal, (d) reputational excluded.",
          "Correctly applies the include-legal / exclude-strategic-and-reputational boundary.",
          "Explains threshold bias: frequency understated, mean severity overstated.",
        ],
      },
      {
        id: "pp-m7-2",
        testPointIds: ["tp-lda-capital", "tp-freqsev"],
        style: "Calculation",
        question:
          "A bank reports a Business Indicator Component (BIC) of $2,000m and average annual operational losses of $200m. (a) Compute the Loss Component, the Internal Loss Multiplier and the SMA capital. (b) Explain what would happen to capital if the bank's average losses doubled.",
        answerPlan: [
          "Compute LC and LC/BIC.",
          "Compute ILM and capital.",
          "Reason about doubling losses.",
        ],
        modelAnswer:
          "(a) LC = 15 × $200m = $3,000m. LC/BIC = 3,000/2,000 = 1.5. (1.5)^0.8 = exp(0.8 × ln1.5) = exp(0.8 × 0.405) = exp(0.324) ≈ 1.383. ILM = Ln(exp(1) − 1 + 1.383) = Ln(1.718 + 1.383) = Ln(3.101) ≈ 1.132. SMA capital = BIC × ILM = $2,000m × 1.132 ≈ $2,264m. Because losses are large relative to size (LC/BIC = 1.5 > 1), the ILM exceeds 1 and capital sits above the BIC. (b) If average losses doubled to $400m, LC = $6,000m and LC/BIC = 3.0; (3.0)^0.8 ≈ 2.41, ILM = Ln(1.718 + 2.41) = Ln(4.13) ≈ 1.418, so capital ≈ $2,000m × 1.418 ≈ $2,836m. Capital rises but LESS than proportionally with losses because of the 0.8 exponent and the logarithmic ILM — the SMA damps the sensitivity of capital to the loss history.",
        markingGuide: [
          "LC = $3,000m and LC/BIC = 1.5.",
          "ILM ≈ 1.13 and capital ≈ $2,260m (above BIC because ILM > 1).",
          "States capital rises less than proportionally when losses double (concavity from 0.8 power + Ln).",
        ],
      },
      {
        id: "pp-m7-3",
        testPointIds: ["tp-scenario-kri", "tp-freqsev"],
        style: "Concept",
        question:
          "A risk committee complains that the operational-risk model 'never predicts the big losses.' (a) Explain why loss data alone is inadequate for the tail and what tool addresses this. (b) Design two key risk indicators for a trading desk and explain what makes a KRI useful.",
        answerPlan: [
          "Explain tail-data sparsity.",
          "Introduce scenario analysis.",
          "Propose two KRIs and their qualities.",
        ],
        modelAnswer:
          "(a) The capital-relevant tail is dominated by rare, high-severity events that, by definition, the firm has seldom or never experienced, so the internal loss history is almost empty exactly where it matters most; heavy-tailed severity means a few unseen events drive the 99.9% quantile. Scenario analysis addresses this by using structured expert judgement to estimate the frequency and severity of severe-but-plausible events absent from the data and feeding them into the tail of the aggregate model — it complements, rather than replaces, loss data. (b) Two KRIs for a trading desk: (i) the rate of failed/unconfirmed trades per day, and (ii) the number of limit breaches or overrides per week. A useful KRI is measurable, forward-looking (leading rather than lagging losses), and has defined thresholds/escalation triggers so a deteriorating trend prompts action before a loss crystallises; ideally it is empirically linked to actual loss experience.",
        markingGuide: [
          "Explains tail-data sparsity / severity-driven tail as the reason data fails.",
          "Names scenario analysis as the complement (not a substitute) for tail estimation.",
          "Proposes two sensible, measurable leading KRIs and states what makes a KRI useful (leading, threshold-based, predictive).",
        ],
      },
    ],
  }),

  // ===================================================================
  // frm-p2-m8 — Operational resilience, cyber & conduct risk
  // ===================================================================
  "frm-p2-m8": examDepth({
    testPoints: [
      {
        id: "tp-resilience",
        title: "Operational resilience, important business services and impact tolerances",
        priority: "high",
        examinerFocus:
          "Whether you can distinguish resilience (the ability to keep delivering critical services THROUGH disruption and recover) from traditional continuity planning, and apply the mechanics: map important business services, set impact tolerances, then test against severe-but-plausible scenarios.",
        typicalQuestionForms: [
          "'How does operational resilience differ from business continuity?'",
          "'What is an impact tolerance and how is it used?'",
          "'What are the steps in a resilience framework?'",
        ],
        mustKnow: [
          "Operational resilience is the ability to prevent, adapt to, respond to, recover from and learn from disruptions so that important business services keep functioning within acceptable limits; it assumes disruptions WILL happen (outcome-focused), whereas classic BCP focuses on recovering the firm's own processes.",
          "An impact tolerance is the maximum tolerable level of disruption to an important business service — expressed as a threshold (e.g. time, volume, number of customers) beyond which harm to customers, the firm or markets becomes unacceptable.",
          "The framework: identify important business services → set impact tolerances → map the people/processes/technology/third parties supporting each service → test against severe-but-plausible scenarios → remediate gaps.",
        ],
        scoringActions: [
          "Frame resilience as service-and-outcome focused ('stay within impact tolerance'), not just recovery of internal processes.",
          "Define impact tolerance as a maximum tolerable disruption threshold, not a target uptime.",
          "Order the framework steps: identify → tolerate → map → test → remediate.",
        ],
      },
      {
        id: "tp-bcp-dr",
        title: "Business continuity, disaster recovery, RTO and RPO",
        priority: "medium",
        examinerFocus:
          "Whether you can precisely define recovery time objective (how fast) versus recovery point objective (how much data loss), and how they relate to the design and cost of continuity/recovery arrangements.",
        typicalQuestionForms: [
          "'What do RTO and RPO measure, and how do they differ?'",
          "'How does a lower RPO change the backup architecture?'",
          "'Why must continuity plans be tested?'",
        ],
        mustKnow: [
          "RTO (recovery time objective) = the maximum acceptable time to restore a service after disruption; RPO (recovery point objective) = the maximum acceptable amount of DATA loss, measured as the time between the last usable backup and the incident.",
          "A tighter RTO demands faster failover (hot sites, redundancy); a tighter RPO demands more frequent/continuous backup or replication — both raise cost, so objectives are set against business criticality.",
          "Plans must be tested regularly (including scenario and failover tests) because untested plans routinely fail on dependencies, stale contacts and unrehearsed hand-offs.",
        ],
        scoringActions: [
          "Map RTO → time-to-restore and RPO → tolerable data loss; don't swap them.",
          "Link a tighter RPO to more frequent replication and a tighter RTO to faster failover.",
          "Justify regular testing by hidden dependencies and plan decay.",
        ],
      },
      {
        id: "tp-cyber",
        title: "Cyber and information-security risk",
        priority: "high",
        examinerFocus:
          "Whether you can categorise cyber threats via the confidentiality–integrity–availability (CIA) triad, explain defence-in-depth, and articulate why cyber risk is systemic and interconnected rather than firm-idiosyncratic.",
        typicalQuestionForms: [
          "'Classify this cyber incident using the CIA triad.'",
          "'What is defence-in-depth?'",
          "'Why is cyber risk considered systemic?'",
        ],
        mustKnow: [
          "The CIA triad frames security objectives: confidentiality (prevent unauthorised disclosure — e.g. data breach), integrity (prevent unauthorised alteration — e.g. tampering), availability (keep systems usable — e.g. DDoS, ransomware); a single event can breach more than one (ransomware hits availability AND integrity).",
          "Defence-in-depth layers preventive, detective and corrective controls (perimeter, network segmentation, access control/MFA, monitoring, backups, incident response) so no single failure is catastrophic.",
          "Cyber risk is systemic because firms share infrastructure, vendors and connectivity, so an attack can propagate across institutions; it is also fast-moving and adversarial, unlike static hazards.",
        ],
        scoringActions: [
          "Classify each incident by which of confidentiality/integrity/availability it breaches (possibly several).",
          "Describe defence-in-depth as layered preventive/detective/corrective controls.",
          "Explain systemic cyber risk via shared infrastructure/vendors and interconnection.",
        ],
      },
      {
        id: "tp-thirdparty",
        title: "Third-party, outsourcing and concentration risk",
        priority: "high",
        examinerFocus:
          "Whether you grasp that outsourcing transfers the ACTIVITY but not the ACCOUNTABILITY, and that concentration in a few critical providers (e.g. cloud) creates systemic third-party risk that regulators increasingly scrutinise.",
        typicalQuestionForms: [
          "'Why does outsourcing not transfer accountability?'",
          "'What risk arises from cloud/vendor concentration?'",
          "'What controls apply across the outsourcing lifecycle?'",
        ],
        mustKnow: [
          "Outsourcing moves the performance of an activity to a third party but the firm remains accountable to its customers and regulators for the outcome, including the third party's failures.",
          "Concentration in a small number of critical providers (notably cloud and key market utilities) creates systemic risk: a single provider outage can simultaneously disrupt many firms, so it is a sector-level, not just firm-level, exposure.",
          "The third-party lifecycle requires due diligence before onboarding, contractual rights (audit, exit, sub-outsourcing controls, SLAs), ongoing monitoring, and a viable exit/substitutability plan.",
        ],
        scoringActions: [
          "Assert retained accountability whenever an activity is outsourced.",
          "Name concentration in critical providers as a systemic exposure.",
          "Cite lifecycle controls: due diligence, contract rights, monitoring, exit planning.",
        ],
      },
      {
        id: "tp-conduct",
        title: "Conduct and reputational risk and their link to culture",
        priority: "medium",
        examinerFocus:
          "Whether you can define conduct risk (harm to customers/markets from firm behaviour) versus reputational risk (loss of standing), explain why reputational damage can dwarf direct losses, and connect both to culture and incentives.",
        typicalQuestionForms: [
          "'Distinguish conduct risk from reputational risk.'",
          "'How can reputational loss exceed the direct loss?'",
          "'How do incentives and culture drive conduct outcomes?'",
        ],
        mustKnow: [
          "Conduct risk is the risk that a firm's behaviour causes harm to customers, market integrity or competition (mis-selling, market manipulation, unfair treatment); it sits within operational risk via the 'clients, products & business practices' event type.",
          "Reputational risk is the risk of loss from damage to the firm's standing among customers, counterparties, investors and regulators; it is excluded from the Basel operational-risk definition but is a critical downstream consequence.",
          "Reputational damage can far exceed the direct fine/loss through lost customers, higher funding costs, franchise value destruction and regulatory scrutiny; culture and incentive structures are the root drivers, so misaligned incentives predictably generate conduct failures.",
        ],
        scoringActions: [
          "Separate conduct (behaviour causing harm) from reputational (loss of standing) risk.",
          "Argue reputational loss via second-order effects (lost franchise, funding, customers).",
          "Trace conduct outcomes back to incentives and culture, not isolated 'bad apples'.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "This module is judgement-heavy and largely qualitative; the marks come from precise definitions (resilience vs BCP, RTO vs RPO, CIA triad, conduct vs reputational) applied to a vignette, not from calculation.",
      timeBudget:
        "~1 minute per definitional item, a little longer on the map-and-test resilience vignettes; comfortably within the four-hour, 80-item paper.",
      answerSequence: [
        "Identify the theme: resilience/continuity, cyber, third-party, or conduct/reputational.",
        "Anchor to the precise definition (impact tolerance, RTO/RPO, CIA, retained accountability).",
        "Apply it to the vignette's important business service or incident.",
        "State the governance/consequence angle (regulatory expectation, systemic effect, culture link).",
      ],
      qualityChecks: [
        "Did I frame resilience around important business services and impact tolerances (not just recovery)?",
        "Are RTO (time) and RPO (data loss) correctly assigned?",
        "Did I classify the cyber event by confidentiality/integrity/availability?",
        "Did I keep accountability with the firm despite outsourcing, and separate conduct from reputational risk?",
      ],
    },
    studyNotes: [
      {
        id: "sn-resilience",
        title: "Operational resilience: services, tolerances and testing",
        testPointIds: ["tp-resilience", "tp-bcp-dr"],
        explanation: [
          "Operational resilience reframes the old continuity question. Rather than asking 'how do we recover our processes after a disaster?', it asks 'how do we keep delivering the services our customers and the market depend on, even while something is going wrong?'. It starts from the assumption that disruptions are inevitable and shifts the focus from internal recovery to external outcomes — an important business service must keep functioning within acceptable limits regardless of which internal component fails.",
          "The mechanics are a disciplined sequence. First, identify the important business services (those whose failure would cause intolerable harm to customers, the firm or the wider market). Second, set an impact tolerance for each — the maximum tolerable disruption, expressed as a concrete threshold such as hours of outage or number of customers affected, beyond which harm becomes unacceptable. Third, map the people, processes, technology and third parties that support each service. Fourth, test the service against severe-but-plausible scenarios to see whether it can stay within tolerance. Finally, remediate the gaps the testing reveals. Impact tolerance is the pivot of the whole framework, and confusing it with a soft uptime target is a common exam error.",
        ],
        keyRules: [
          "Resilience = keep important business services within tolerance THROUGH disruption.",
          "Impact tolerance = maximum tolerable disruption (a hard threshold, not a target).",
          "Framework: identify services → set tolerances → map dependencies → test → remediate.",
        ],
        workedProblem: {
          scenario:
            "A bank designates 'retail payments' an important business service with an impact tolerance of 2 hours of unavailability. A severe-but-plausible scenario — failure of its primary data centre — is modelled to cause a 5-hour outage before failover restores service. Assess the position and state the required action.",
          steps: [
            "Compare modelled disruption to the impact tolerance: 5 hours vs a 2-hour tolerance.",
            "Breach magnitude = 5 − 2 = 3 hours beyond tolerance.",
            "Identify the binding dependency: single primary data centre with slow (5-hour) failover.",
            "Determine remediation to bring failover within 2 hours: e.g. hot standby / active-active architecture, pre-provisioned capacity and rehearsed failover runbooks.",
          ],
          conclusion:
            "The service breaches its impact tolerance by 3 hours under a severe-but-plausible scenario, so it is NOT resilient as configured. The firm must invest to cut recovery to within the 2-hour tolerance (active-active data centres and tested failover) or, if that is infeasible, revisit whether the tolerance itself is defensible to the regulator.",
          markingNotes: [
            "Explicitly compares modelled 5-hour outage to the 2-hour tolerance (breach = 3 hours).",
            "Diagnoses the single-data-centre dependency and slow failover as the cause.",
            "Recommends remediation that brings recovery within tolerance, not merely 'improve BCP'.",
          ],
        },
      },
      {
        id: "sn-bcp-dr",
        title: "RTO, RPO and the economics of recovery",
        testPointIds: ["tp-bcp-dr", "tp-resilience"],
        explanation: [
          "Business continuity keeps critical functions running (or quickly restored) through a disruption, and disaster recovery is the technology-focused subset concerned with restoring systems and data. The two objectives that quantify recovery are the recovery time objective and the recovery point objective, and the exam wants them kept crisply apart. RTO is about time: the maximum acceptable duration between an outage and the restoration of the service. RPO is about data: the maximum acceptable amount of data loss, measured as the gap between the last usable backup and the moment of failure.",
          "These two objectives drive very different architecture and cost. A tight RTO — say, minutes — requires fast failover: redundant hot sites, active-active systems and automated cut-over. A tight RPO — near zero — requires continuous or near-continuous data replication rather than periodic backups, because any data written since the last backup is lost. Both add cost, so objectives are calibrated to the criticality of each service. And because plans decay — dependencies change, contacts leave, hand-offs are never rehearsed — regular testing (including full failover and scenario tests) is essential; an untested plan is an assumption, not a control.",
        ],
        keyRules: [
          "RTO = max time to restore; RPO = max tolerable data loss.",
          "Tight RTO ⇒ fast failover/redundancy; tight RPO ⇒ frequent/continuous replication.",
          "Plans must be tested regularly or they fail on hidden dependencies.",
        ],
        formulas: [
          "RPO ≈ time since last usable backup at point of failure.",
          "RTO ≈ time from outage to service restoration.",
        ],
      },
      {
        id: "sn-cyber",
        title: "Cyber risk: the CIA triad, defence-in-depth and systemic reach",
        testPointIds: ["tp-cyber", "tp-resilience"],
        explanation: [
          "Cyber and information-security risk is best organised around the confidentiality–integrity–availability triad. Confidentiality is about preventing unauthorised disclosure (a data breach stealing customer records); integrity is about preventing unauthorised alteration (tampering with records or transactions); availability is about keeping systems usable (a distributed-denial-of-service attack or ransomware locking systems). A single incident often breaches more than one dimension — ransomware, for instance, attacks availability by encrypting systems and can compromise integrity, and if data is exfiltrated first, confidentiality too.",
          "Because no single control is perfect against an adaptive adversary, security is built as defence-in-depth: layered preventive controls (perimeter defences, network segmentation, access control and multi-factor authentication), detective controls (monitoring, anomaly detection) and corrective controls (backups, incident response, recovery) so that a breach of one layer is not catastrophic. Crucially, cyber risk is systemic rather than purely idiosyncratic: firms share infrastructure, connectivity and a handful of critical vendors, so an attack can cascade across many institutions at once — which is exactly why cyber scenarios feature so prominently in resilience testing.",
        ],
        keyRules: [
          "CIA triad: confidentiality (disclosure), integrity (alteration), availability (access).",
          "One incident can breach multiple dimensions (ransomware = availability + integrity).",
          "Defence-in-depth = layered preventive + detective + corrective controls.",
        ],
        workedProblem: {
          scenario:
            "A ransomware attack encrypts a bank's core banking platform and, before encryption, the attackers exfiltrate a copy of the customer database. The platform supports the 'retail payments' important business service (impact tolerance 2 hours). Classify the incident and outline the layered controls that should have contained it.",
          steps: [
            "Classify by CIA: encryption of the platform = availability breach; potential corruption of encrypted records = integrity concern; exfiltration of customer data = confidentiality breach — so all three dimensions are engaged.",
            "Assess resilience impact: encryption of the core platform threatens the retail-payments service against its 2-hour impact tolerance, so recovery speed is critical.",
            "Preventive layer: network segmentation and least-privilege access to stop lateral movement; MFA and patching to reduce initial compromise; data-loss-prevention to hinder exfiltration.",
            "Detective + corrective layers: monitoring/anomaly detection to catch the intrusion early; immutable, offline backups plus a rehearsed incident-response and recovery plan to restore service within tolerance.",
          ],
          conclusion:
            "The event is simultaneously a confidentiality (data theft), integrity (data alteration risk) and availability (system lockout) incident that also stresses an important business service. Containment depends on defence-in-depth — segmentation and access control to limit spread, monitoring to detect early, and immutable backups plus tested recovery to meet the 2-hour tolerance.",
          markingNotes: [
            "Correctly maps the incident to all three CIA dimensions.",
            "Links the availability breach to the important business service and its impact tolerance.",
            "Describes layered preventive/detective/corrective controls, including immutable/offline backups for ransomware.",
          ],
        },
      },
      {
        id: "sn-thirdparty",
        title: "Third-party and outsourcing risk: activity out, accountability retained",
        testPointIds: ["tp-thirdparty", "tp-cyber"],
        explanation: [
          "Outsourcing lets a firm hand the performance of an activity to a specialist third party, but it cannot hand over the responsibility for the outcome: to its customers and its regulator the firm remains fully accountable, including for the third party's failures. A cloud outage, a vendor data breach or a service provider's insolvency is, from the regulator's perspective, the firm's problem. This 'activity transfers, accountability does not' principle is the single most tested idea in the topic.",
          "The second big idea is concentration. Because so many firms rely on the same handful of critical providers — major cloud platforms, key market utilities, dominant software vendors — a single provider's failure can disrupt many institutions simultaneously, turning a firm-level outsourcing decision into a sector-level systemic exposure. Managing third-party risk therefore spans the whole lifecycle: due diligence and risk assessment before onboarding; contractual protections (audit and access rights, SLAs, controls on sub-outsourcing, and clear exit terms); ongoing monitoring of performance and financial health; and a credible, tested exit or substitutability plan so the firm is not trapped if the provider fails.",
        ],
        keyRules: [
          "Outsourcing transfers the activity, not the accountability.",
          "Concentration in critical providers (cloud/utilities) = systemic risk.",
          "Lifecycle controls: due diligence → contract rights → monitoring → exit plan.",
        ],
      },
      {
        id: "sn-conduct",
        title: "Conduct and reputational risk and the role of culture",
        testPointIds: ["tp-conduct", "tp-thirdparty"],
        explanation: [
          "Conduct risk is the risk that the way a firm behaves harms its customers, the integrity of markets or fair competition — mis-selling, market manipulation, unfair fees, poor complaint handling. Within the Basel taxonomy it lives in the 'clients, products and business practices' event type, so its direct losses (redress, fines, litigation) are operational-risk losses. Reputational risk is distinct: it is the risk of loss from damage to the firm's standing among customers, counterparties, investors and regulators, and it is explicitly excluded from the operational-risk definition even though conduct failures are one of its main causes.",
          "The reason conduct risk matters so much is that its reputational consequences can dwarf the direct penalty. A fine is a one-off cost; the second-order effects — customers leaving, higher funding and insurance costs, lost franchise value, intensified regulatory scrutiny and difficulty attracting talent — can be far larger and longer-lasting. And the root cause is rarely a lone 'bad apple': conduct outcomes are shaped by culture and incentives. Reward structures that pay for volume or short-term revenue without regard to customer outcomes predictably generate misconduct, which is why supervisors focus on governance, incentive design and 'tone from the top' rather than only on individual wrongdoing.",
        ],
        keyRules: [
          "Conduct risk = behaviour harming customers/markets (in op-risk taxonomy).",
          "Reputational risk = loss of standing (excluded from op-risk definition).",
          "Reputational/second-order losses can exceed direct fines; culture & incentives are root drivers.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pp-m8-1",
        testPointIds: ["tp-resilience", "tp-bcp-dr"],
        style: "Concept + application",
        question:
          "A regulator criticises a bank for treating operational resilience as 'just business continuity with a new name.' (a) Explain the key difference and define impact tolerance. (b) The bank's core trading system has an RTO of 4 hours and an RPO of 15 minutes — explain what each means and one architectural implication of the tight RPO.",
        answerPlan: [
          "Contrast resilience with BCP.",
          "Define impact tolerance.",
          "Interpret RTO/RPO and the RPO implication.",
        ],
        modelAnswer:
          "(a) Business continuity is inward-looking — it plans how the firm recovers its own processes after a disruption. Operational resilience is outcome-looking: it assumes disruptions will occur and asks whether the firm's important business services keep functioning within acceptable limits regardless of which internal component fails. The pivot is the impact tolerance — the maximum tolerable level of disruption to an important business service (a hard threshold such as time, volume or customers affected) beyond which harm to customers, the firm or the market is unacceptable. Resilience then maps dependencies and tests services against severe-but-plausible scenarios to prove they stay within tolerance. (b) RTO = 4 hours means the trading system must be restored within four hours of an outage. RPO = 15 minutes means at most 15 minutes of data may be lost, i.e. the gap between the last usable backup and the incident. The tight 15-minute RPO implies near-continuous data replication (or very frequent snapshots) rather than nightly backups, since anything older would breach it — a materially more expensive architecture than the 4-hour RTO alone would require.",
        markingGuide: [
          "Contrasts inward process-recovery (BCP) with outcome/service focus (resilience).",
          "Defines impact tolerance as a maximum tolerable disruption threshold.",
          "Correctly reads RTO (restore time) and RPO (data loss), linking 15-min RPO to continuous replication.",
        ],
      },
      {
        id: "pp-m8-2",
        testPointIds: ["tp-cyber", "tp-thirdparty"],
        style: "Diagnosis",
        question:
          "A bank's customer-facing app goes down for six hours after its cloud provider suffers a regional outage; separately, attackers steal hashed passwords from the same provider. (a) Classify the two impacts using the CIA triad. (b) The bank argues 'the outage was the cloud provider's fault, not ours.' Evaluate that claim and identify the underlying risk.",
        answerPlan: [
          "Classify impacts via CIA.",
          "Assess the accountability claim.",
          "Name the concentration/third-party risk.",
        ],
        modelAnswer:
          "(a) The six-hour app outage is an availability breach (customers cannot access the service). The theft of hashed passwords is a confidentiality breach (unauthorised disclosure of credential data), with a potential downstream integrity concern if the credentials are later used to alter accounts. (b) The claim is wrong in substance: outsourcing to a cloud provider transfers the activity but not the accountability — the bank remains responsible to its customers and regulator for the availability and security of its service, including its provider's failures. The underlying risk is third-party/concentration risk: reliance on a single critical cloud provider means one regional outage takes down the bank's service (and likely many peers simultaneously), a systemic exposure. Sound management requires due diligence, contractual audit/SLA/exit rights, ongoing monitoring and a tested exit or multi-region/multi-provider resilience plan.",
        markingGuide: [
          "Availability (outage) and confidentiality (password theft) correctly identified.",
          "Rejects the accountability claim: activity outsourced, accountability retained.",
          "Names third-party/cloud concentration as the underlying (systemic) risk with lifecycle controls.",
        ],
      },
      {
        id: "pp-m8-3",
        testPointIds: ["tp-conduct", "tp-resilience"],
        style: "Concept",
        question:
          "A bank is fined $50m for systematically mis-selling a product, and management notes the sales team was paid purely on volume. (a) Distinguish the conduct risk from the reputational risk here and explain how the reputational loss could exceed the $50m fine. (b) What does the incentive structure tell you about the root cause?",
        answerPlan: [
          "Separate conduct from reputational risk.",
          "Explain second-order reputational losses.",
          "Link incentives/culture to root cause.",
        ],
        modelAnswer:
          "(a) The conduct risk is the mis-selling itself — behaviour that harmed customers and breaches the 'clients, products and business practices' category, whose direct loss is the $50m fine plus redress and litigation. The reputational risk is the damage to the bank's standing that follows: it is a distinct, excluded-from-op-risk category. The reputational loss can far exceed the $50m fine through second-order effects — customers leaving and reduced new business, higher funding and insurance costs, destruction of franchise value, heightened regulatory scrutiny and remediation costs, and difficulty attracting talent — none of which is captured in the headline fine. (b) Paying the sales team purely on volume, with no regard to customer outcomes, is a textbook misaligned incentive: it predictably rewards selling regardless of suitability. This points to a cultural/governance root cause rather than a few 'bad apples' — fixing it requires redesigning incentives (balanced scorecards, clawbacks, outcome-based metrics) and strengthening tone from the top, not just disciplining individuals.",
        markingGuide: [
          "Distinguishes conduct (mis-selling behaviour) from reputational (loss of standing) risk.",
          "Explains reputational loss via second-order effects exceeding the direct fine.",
          "Identifies volume-only pay as a misaligned incentive and a cultural/governance root cause.",
        ],
      },
    ],
  }),
};
