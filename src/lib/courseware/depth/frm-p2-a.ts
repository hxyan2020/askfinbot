import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * Exam-calibrated deep content for the FIRST FRM Part II block, keyed by
 * moduleId: frm-p2-m1..m4 (three Market Risk modules and the opening Credit
 * Risk module). Part II items are multiple-choice but reward judgement:
 * choosing an estimation method, reading model limitations, applying a
 * regulatory framework and running multi-step calculations under time pressure.
 *
 * Regulatory content (Basel/FRTB) is described at the level of the framework's
 * design — measure, confidence level, horizon, test structure — rather than any
 * date-specific jurisdiction status. Candidates must confirm the live GARP
 * reading list and any local implementation timing each exam cycle.
 */
export const FRM_P2_A_DEPTH: Record<string, CoursewareDepth> = {
  // ======================================================================
  // frm-p2-m1 — Market Risk: VaR, ES & parametric/historical/Monte Carlo
  // ======================================================================
  "frm-p2-m1": examDepth({
    testPoints: [
      {
        id: "tp-method-choice",
        title: "Choose the VaR/ES method and defend its assumptions",
        priority: "critical",
        examinerFocus:
          "Whether you can match parametric, historical simulation (HS) and Monte Carlo (MC) to a described portfolio and name the assumption that would break each one. Part II plants a nonlinear book, a fat-tailed series or a regime shift and asks which method is MOST/LEAST appropriate.",
        typicalQuestionForms: [
          "'Which VaR method is MOST appropriate for a portfolio dominated by out-of-the-money options?'",
          "'A risk manager wants VaR that reacts quickly to a volatility spike without a distributional assumption — which method?'",
          "'Which statement about a limitation of historical simulation is correct?'",
        ],
        mustKnow: [
          "Parametric (delta-normal) VaR assumes a distribution (usually normal) and linear exposures; it is fast and analytic but wrong for options and fat tails.",
          "Historical simulation is assumption-free about the distribution shape and captures nonlinearity via full repricing, but it is bounded by the sample window and reacts slowly (ghosting) to new regimes.",
          "Monte Carlo can use any distribution and reprice nonlinear payoffs exactly, but is compute-heavy and carries model risk in the chosen data-generating process.",
        ],
        scoringActions: [
          "Screen the portfolio: options/nonlinearity rules out plain delta-normal and favours HS or MC full revaluation.",
          "Screen the data: fat tails or regime change favours EVT, filtered HS or a non-normal MC over delta-normal.",
          "Name the single binding weakness (window length, normality, compute/model risk) the question is probing before selecting.",
        ],
      },
      {
        id: "tp-parametric-cf",
        title: "Parametric VaR and the Cornish-Fisher adjustment",
        priority: "high",
        examinerFocus:
          "Whether you can compute delta-normal VaR/ES with correct z-multipliers and adjust for skew and excess kurtosis using Cornish-Fisher, rather than blindly using the normal quantile.",
        typicalQuestionForms: [
          "'Compute 1-day 99% VaR given σ and (near-zero) μ.'",
          "'A distribution has negative skew and excess kurtosis — how does Cornish-Fisher change the 99% quantile?'",
          "'Scale a 1-day VaR to 10 days.'",
        ],
        mustKnow: [
          "Dollar VaR ≈ V·(z_α·σ − μ) for a horizon return; common z: 1.645 (95%), 1.96 (97.5%), 2.326 (99%).",
          "Square-root-of-time scaling (VaR_h = VaR_1·√h) assumes i.i.d. returns and constant volatility; it breaks under autocorrelation or vol clustering.",
          "Cornish-Fisher replaces z with z_CF = z + (z²−1)S/6 + (z³−3z)K/24 − (2z³−5z)S²/36, where S = skewness and K = excess kurtosis; negative skew and positive K push the loss quantile out.",
        ],
        scoringActions: [
          "Keep μ and σ on the same horizon and in the same units before multiplying by V.",
          "Use √h only when told returns are i.i.d.; flag it as an assumption otherwise.",
          "For fat/left-skewed tails, expect z_CF > z, so a normal VaR understates the loss.",
        ],
      },
      {
        id: "tp-weighted-hs",
        title: "Weighted and filtered historical simulation",
        priority: "high",
        examinerFocus:
          "Whether you understand how age-weighting, volatility-weighting and filtered HS fix equal-weighted HS's slow reaction and ghosting, and how to read a VaR off ordered (possibly weighted) losses.",
        typicalQuestionForms: [
          "'What problem does age-weighting (BRW) solve versus equal-weighted HS?'",
          "'Filtered historical simulation rescales a past return by which ratio?'",
          "'Identify the HS VaR from an ordered loss series and a confidence level.'",
        ],
        mustKnow: [
          "Equal-weighted HS gives every observation weight 1/n, so a single old crash keeps inflating VaR until it drops out of the window (ghosting), then VaR falls abruptly.",
          "Age-weighting (Boudoukh-Richardson-Whitelaw) applies geometrically declining weights λ so recent data matters more; VaR is the loss where cumulated weights reach 1−confidence.",
          "Filtered/volatility-weighted HS rescales each historical return r_t by σ_today/σ_t (σ from EWMA/GARCH), making the simulated tail reflect the current volatility regime while keeping the empirical shape.",
        ],
        scoringActions: [
          "For equal-weighted HS, find the quantile by rank: with n obs at confidence c, the VaR sits near the n·(1−c)-th worst loss (interpolate if fractional).",
          "For weighted HS, accumulate weights from the worst loss inward until reaching 1−c.",
          "Attribute a slow-reacting or 'ghosting' VaR to equal weighting and prescribe age/vol weighting.",
        ],
      },
      {
        id: "tp-evt",
        title: "Extreme-value theory: POT, GPD and tail quantiles",
        priority: "critical",
        examinerFocus:
          "Whether you can justify modelling only the tail with EVT and apply the peaks-over-threshold (POT) generalised Pareto (GPD) formulas for VaR and ES, including the role of the shape parameter ξ.",
        typicalQuestionForms: [
          "'Why model the tail with a GPD rather than fitting a normal to all returns?'",
          "'Given a GPD fit (u, ξ, β, exceedances), compute the 99% VaR/ES.'",
          "'What does a positive shape parameter ξ imply about the tail?'",
        ],
        mustKnow: [
          "POT models exceedances over a high threshold u with a GPD(ξ, β); block-maxima instead fits a GEV to periodic maxima. POT uses data more efficiently for VaR/ES.",
          "GPD VaR_q = u + (β/ξ)·{[(n/N_u)(1−q)]^(−ξ) − 1}, where n = total obs, N_u = exceedances over u.",
          "GPD ES_q = VaR_q/(1−ξ) + (β − ξu)/(1−ξ) for ξ < 1; ξ > 0 means a heavy (power-law) tail, ξ = 0 the exponential/thin tail case.",
        ],
        scoringActions: [
          "Use EVT only for extreme quantiles (deep tail); do not use it to describe the whole distribution.",
          "Plug into the GPD VaR formula first, then feed VaR into the ES formula — do not average scenarios for a fitted GPD.",
          "Read ξ: a larger positive ξ widens the gap between ES and VaR (fatter tail).",
        ],
      },
      {
        id: "tp-es-coherence",
        title: "Expected shortfall, coherence and VaR's subadditivity failure",
        priority: "critical",
        examinerFocus:
          "Whether you can compute ES and prove/recognise that VaR can violate subadditivity while ES (a coherent measure) does not — the conceptual reason regulators moved capital toward ES.",
        typicalQuestionForms: [
          "'Which coherence axiom can VaR violate?'",
          "'Compute ES from a set of tail scenarios / from a normal σ.'",
          "'Given two positions, show VaR is superadditive.'",
        ],
        mustKnow: [
          "ES_c = average loss conditional on being beyond VaR_c: ES = E[L | L ≥ VaR_c]; for a normal, ES_c = σ·φ(z_c)/(1−c) − μ, e.g. ES_97.5 ≈ 2.34σ ≈ VaR_99 (2.326σ).",
          "Coherence = monotonicity, translation invariance, positive homogeneity and subadditivity; ES satisfies all four, VaR can fail subadditivity (diversification can appear to raise VaR).",
          "The classic counterexample: two independent bonds each with default probability just below 1−c have individual VaR ≈ 0, yet the portfolio's VaR jumps to a full default loss.",
        ],
        scoringActions: [
          "For discrete tails, ES = probability-weighted average of losses in the tail beyond VaR (renormalise the tail probabilities to sum to 1−c).",
          "Remember ES ≥ VaR always, and quote ES_97.5 ≈ VaR_99 under normality as the FRTB rationale.",
          "To test subadditivity, compare VaR(A+B) with VaR(A)+VaR(B); a strictly larger sum-vs-portfolio flip flags a violation.",
        ],
      },
      {
        id: "tp-backtest-frtb",
        title: "Backtesting VaR/ES and the FRTB measure choice",
        priority: "high",
        examinerFocus:
          "Whether you can count exceptions against expected, apply the Kupiec/traffic-light logic, and state why ES is harder to backtest yet is the FRTB internal-models risk measure at 97.5% with liquidity horizons.",
        typicalQuestionForms: [
          "'How many 99% VaR exceptions are expected in 250 days, and what zone is N exceptions?'",
          "'Why is ES harder to backtest than VaR?'",
          "'What confidence level and measure does the FRTB internal-models approach use?'",
        ],
        mustKnow: [
          "At 99% 1-day VaR over 250 days you expect ~2.5 exceptions; the Basel traffic light is roughly green 0–4, amber 5–9, red 10+, with amber raising the capital multiplier and red threatening model approval.",
          "VaR backtesting only checks a frequency of breaches (a single quantile); ES depends on the size of tail losses, so it needs the whole tail — this is what makes ES backtesting statistically harder.",
          "The FRTB internal-models measure is ES at a 97.5% confidence level, scaled by asset-class liquidity horizons rather than a flat √time to 10 days.",
        ],
        scoringActions: [
          "Compute expected exceptions = (1−c)·T before judging a backtest.",
          "Attribute clustered exceptions to missing volatility dynamics (independence failure), not just too many breaches.",
          "State '97.5% ES with liquidity horizons' for FRTB IMA, not '99% VaR'.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Market-risk measurement is ~20–30% of Part II; aim to convert every method-selection and single-formula item, and to bank at least the setup marks on multi-step EVT/ES calculations.",
      timeBudget:
        "~1.5 minutes per multiple-choice item; give calculation-heavy EVT/ES vignettes up to 2.5 minutes and flag-and-return anything that stalls past that.",
      answerSequence: [
        "Classify the portfolio (linear vs nonlinear) and the data (normal vs fat/skewed) to fix the appropriate method.",
        "Write the governing formula with its assumption before substituting numbers.",
        "Substitute in consistent units and horizons; keep VaR and ES on the same confidence basis.",
        "Sanity-check: ES ≥ VaR, z_CF ≥ z for fat left tails, and exceptions ≈ (1−c)·T.",
      ],
      qualityChecks: [
        "Did I choose the method on the binding weakness the vignette described, not habit?",
        "Are σ, μ and V on the same horizon and currency before multiplying?",
        "Did I feed VaR into the ES formula (not re-average) for a fitted GPD?",
      ],
    },
    studyNotes: [
      {
        id: "sn-method-map",
        title: "Mapping estimation methods to the portfolio and the data",
        testPointIds: ["tp-method-choice", "tp-parametric-cf"],
        explanation: [
          "The three families differ on two axes: what they assume about the return distribution, and how they value the portfolio in each scenario. Delta-normal parametric VaR assumes normal risk-factor returns and linear (delta-only) exposures, so it collapses to V·z·σ. It is analytic and instant, which is why it survives for large linear books, but it is simply wrong when the payoff is convex (options) or the returns are fat-tailed — both understate the loss quantile.",
          "Historical simulation makes no shape assumption: it replays the actual past risk-factor moves through a full repricing of today's book, so it captures nonlinearity and observed fat tails for free. Its weaknesses are all about the window — it can only produce losses it has seen, it reacts slowly to a new volatility regime, and dropping a crash out of the window makes VaR fall abruptly (ghosting). Monte Carlo keeps HS's full-revaluation strength but replaces the empirical sample with a chosen data-generating process, so it can stress any distribution and any correlation structure at the cost of compute time and model risk in that assumed process.",
          "Exam items rarely ask for a pure definition; they describe a book (say, deep out-of-the-money options) or a data problem (a recent vol spike) and ask which method fits. The discipline is to name the single binding constraint: nonlinearity kills delta-normal; a regime shift kills equal-weighted HS; heavy tails call for EVT or a non-normal MC.",
        ],
        keyRules: [
          "Nonlinearity ⇒ full revaluation (HS or MC), not delta-only parametric.",
          "Regime change / slow reaction ⇒ filtered or age-weighted HS, or MC.",
          "Fat tails at extreme quantiles ⇒ EVT overlay on the tail.",
        ],
        formulas: [
          "Delta-normal VaR = V·(z_α·σ − μ).",
          "√time scaling: VaR_h = VaR_1·√h (i.i.d. only).",
        ],
        workedProblem: {
          scenario:
            "A book of long equity plus a large long position in far out-of-the-money puts has a 1-day delta-normal 99% VaR of $4.0m. Explain why this number is likely to misstate risk and which method you would use instead.",
          steps: [
            "Delta-normal uses only the linear (delta) sensitivity and a normal factor, so it ignores the puts' gamma and vega — the payoff is convex, not linear.",
            "For a long-option book, delta-only understates the gain from convexity in a crash (the puts pay off), but it also ignores vega: a vol spike in a crash makes the puts worth much more, which delta-normal cannot see at all.",
            "Because the mispricing comes from nonlinearity, switch to a full-revaluation method: historical or Monte Carlo simulation that reprices the puts under each scenario.",
            "If the concern is also fat tails / a new regime, prefer filtered HS (rescale past returns by σ_today/σ_t) or an MC with a fat-tailed factor and a stochastic-vol process.",
          ],
          conclusion:
            "The $4.0m delta-normal figure is unreliable for an option book: it omits gamma and vega. Use full-revaluation HS/MC (filtered HS if the regime has shifted) so the puts are repriced under each scenario.",
          markingNotes: [
            "Credit for identifying nonlinearity (gamma/vega), not just 'options are risky'.",
            "Credit for prescribing full revaluation, and a further mark for the filtered-HS / non-normal MC refinement.",
          ],
        },
      },
      {
        id: "sn-parametric-cf",
        title: "Parametric VaR, ES and correcting for non-normal moments",
        testPointIds: ["tp-parametric-cf", "tp-es-coherence"],
        explanation: [
          "Under normality the whole tail is pinned down by σ. VaR at confidence c is z_c·σ (net of a usually-tiny μ), and the corresponding ES is σ·φ(z_c)/(1−c), where φ is the standard-normal density. Two numbers worth memorising: ES_97.5 = σ·φ(1.96)/0.025 ≈ 2.34σ, and VaR_99 = 2.326σ. They are almost identical, which is exactly why FRTB could swap 99% VaR for 97.5% ES with little change in stringency for normal risks while gaining tail sensitivity for non-normal ones.",
          "Real return series are leptokurtic and often left-skewed, so a normal quantile is too small in the loss tail. Cornish-Fisher keeps the analytic speed but bends the quantile: z_CF = z + (z²−1)S/6 + (z³−3z)K/24 − (2z³−5z)S²/36. With negative skew (S<0) and positive excess kurtosis (K>0), z_CF exceeds z, so the corrected VaR is larger — the adjustment 'pays back' the mass the normal ignored in the tail.",
          "Horizon scaling is the other exam reflex. VaR_h = VaR_1·√h is only valid for i.i.d. returns with constant volatility; volatility clustering (positive autocorrelation in squared returns) makes √time understate multi-day risk, and mean-reverting volatility can make it overstate. Always state the i.i.d. assumption when you scale.",
        ],
        keyRules: [
          "z: 1.645 (95%), 1.96 (97.5%), 2.326 (99%).",
          "ES_97.5(normal) ≈ 2.34σ ≈ VaR_99 — the FRTB equivalence.",
          "Negative skew + fat tails ⇒ z_CF > z ⇒ normal VaR understates loss.",
        ],
        formulas: [
          "VaR_c = V·(z_c·σ − μ).",
          "ES_c(normal) = σ·φ(z_c)/(1−c) − μ.",
          "z_CF = z + (z²−1)S/6 + (z³−3z)K/24 − (2z³−5z)S²/36.",
        ],
        workedProblem: {
          scenario:
            "A $50m linear portfolio has a daily σ of 1.2% and μ ≈ 0. Compute the 1-day 99% VaR and the 1-day 97.5% ES, then compare ES_97.5 with VaR_99.",
          steps: [
            "VaR_99 = V·z_99·σ = 50m·2.326·0.012 = 50m·0.027912 = $1.3956m ≈ $1.40m.",
            "ES_97.5 = V·σ·φ(1.96)/(1−0.975); φ(1.96) = 0.39894·e^(−1.96²/2) = 0.39894·e^(−1.9208) = 0.39894·0.14639 = 0.05840.",
            "ES multiplier = 0.05840/0.025 = 2.336; ES_97.5 = 50m·0.012·2.336 = 50m·0.028032 = $1.4016m ≈ $1.40m.",
            "Compare: VaR_99 ≈ $1.396m and ES_97.5 ≈ $1.402m — essentially equal because 2.336 ≈ 2.326 under normality.",
          ],
          conclusion:
            "1-day 99% VaR ≈ $1.40m and 1-day 97.5% ES ≈ $1.40m; the near-equality illustrates why FRTB's move to 97.5% ES barely changes stringency for normal risks while adding tail sensitivity for non-normal ones.",
          markingNotes: [
            "Full marks require the ES multiplier φ(z)/(1−c) = 2.336, not just reusing 1.96.",
            "State the ES ≈ VaR_99 comparison — the point of the question.",
          ],
        },
      },
      {
        id: "sn-weighted-hs",
        title: "Weighted and filtered historical simulation in practice",
        testPointIds: ["tp-weighted-hs", "tp-method-choice"],
        explanation: [
          "Equal-weighted HS is a percentile of the ordered loss sample. With n observations and confidence c, the VaR is the loss ranked at roughly n·(1−c) from the worst (interpolating when the rank is fractional). Its two structural problems both come from the flat 1/n weighting: it treats a five-year-old crash as informative as yesterday, and when that crash finally exits the window the VaR drops sharply — the ghosting effect — even though nothing changed today.",
          "Age-weighting (Boudoukh-Richardson-Whitelaw) fixes the time dimension by giving observation t a geometrically declining weight ∝ λ^(age). You then order losses and accumulate their weights from the worst inward until the cumulative weight reaches 1−c; the loss at that point is the VaR. Recent shocks therefore raise VaR quickly and old shocks fade smoothly instead of dropping off a cliff.",
          "Filtered / volatility-weighted HS fixes the scale dimension. Each past return is rescaled r_t* = r_t·(σ_today/σ_t), with the σ's from an EWMA or GARCH model, so a 3% move that occurred in a 1%-vol regime is amplified to reflect today's 2% vol. This preserves the empirical shape of the distribution (fat tails, skew) while making the tail respond to the current regime — often the best of both worlds for a single-asset or linear book in changing conditions.",
        ],
        keyRules: [
          "Equal-weighted VaR ≈ the n·(1−c)-th worst loss (interpolate).",
          "Age-weighting: accumulate declining weights from the worst loss until 1−c.",
          "Filtered HS scale factor = σ_today/σ_historical.",
        ],
        formulas: [
          "Age weight_t ∝ λ^(t_age)·(1−λ)/(1−λ^n).",
          "Filtered return r_t* = r_t·(σ_today/σ_t).",
        ],
        workedProblem: {
          scenario:
            "You hold 250 daily P&L observations. The five largest losses (in $m) are 9.8, 8.1, 7.4, 6.9 and 6.2. (a) Estimate the equal-weighted 99% VaR. (b) Yesterday's return of −2.0% occurred when EWMA vol was 1.0%; today's EWMA vol is 1.6%. What is the filtered return used in FHS?",
          steps: [
            "(a) Expected tail count = (1−0.99)·250 = 2.5, so the 99% VaR sits between the 2nd and 3rd worst losses.",
            "Interpolate: 2nd worst = 8.1, 3rd worst = 7.4; halfway ⇒ VaR_99 ≈ (8.1 + 7.4)/2 = $7.75m (a common convention takes the 3rd-worst, $7.4m — state your rule).",
            "(b) Filtered return r* = r·(σ_today/σ_then) = −2.0%·(1.6/1.0) = −3.2%.",
            "The FHS tail therefore uses −3.2% in place of −2.0%, so today's higher regime volatility inflates the historical move.",
          ],
          conclusion:
            "Equal-weighted 99% VaR ≈ $7.7–7.8m from the 2.5-rank quantile, and the filtered version of yesterday's −2.0% move becomes −3.2% after rescaling by 1.6/1.0 — showing how FHS keeps the empirical shape but lifts the tail to the current regime.",
          markingNotes: [
            "Credit for using rank n·(1−c) = 2.5 and stating the interpolation/rounding convention.",
            "Filtered return must multiply by σ_today/σ_then, not the inverse.",
          ],
        },
      },
      {
        id: "sn-evt",
        title: "EVT: fitting and using the tail (POT/GPD)",
        testPointIds: ["tp-evt"],
        explanation: [
          "EVT accepts that the centre and the tail of a return distribution obey different laws, and models only the tail. The peaks-over-threshold approach picks a high threshold u and models the exceedances (L − u | L > u) with a generalised Pareto distribution GPD(ξ, β). The Pickands-Balkema-de Haan result says this GPD limit holds for essentially any underlying distribution, which is why EVT can give sensible 99.9% quantiles even from a few hundred observations where a fitted normal would badly under-predict.",
          "The shape parameter ξ is the whole story of the tail. ξ = 0 gives an exponential (thin) tail; ξ > 0 gives a Fréchet-type power-law tail (fat, the finance-relevant case); ξ < 0 gives a bounded tail. A larger ξ widens the gap between ES and VaR because more mass sits far out. The scale β and the exceedance count N_u calibrate the level. Threshold choice is the practical trade-off: too low and the GPD approximation is poor; too high and you have too few exceedances to estimate ξ and β reliably.",
          "For VaR and ES the closed forms are what the exam wants. VaR_q = u + (β/ξ)·{[(n/N_u)(1−q)]^(−ξ) − 1}, and ES_q = VaR_q/(1−ξ) + (β − ξu)/(1−ξ) for ξ < 1. Note ES here is computed from the fitted parameters, not by averaging scenarios, and it is always larger than VaR by the factor structure above.",
        ],
        keyRules: [
          "POT ⇒ GPD on exceedances over u; block-maxima ⇒ GEV on periodic maxima.",
          "ξ > 0 ⇒ heavy power-law tail; larger ξ ⇒ larger ES/VaR gap.",
          "Compute VaR first, then ES from the GPD formula.",
        ],
        formulas: [
          "VaR_q = u + (β/ξ)·{[(n/N_u)(1−q)]^(−ξ) − 1}.",
          "ES_q = VaR_q/(1−ξ) + (β − ξu)/(1−ξ), ξ < 1.",
        ],
        workedProblem: {
          scenario:
            "From n = 1,000 daily loss observations, N_u = 50 exceed the threshold u = 2.0%. A GPD fit gives ξ = 0.20 and β = 0.70% (0.0070). Compute the 99% VaR and 99% ES.",
          steps: [
            "Tail factor: (n/N_u)(1−q) = (1000/50)·0.01 = 20·0.01 = 0.20.",
            "0.20^(−ξ) = 0.20^(−0.20) = exp(−0.20·ln0.20) = exp(−0.20·(−1.6094)) = exp(0.32188) = 1.3797.",
            "VaR_99 = u + (β/ξ)·(1.3797 − 1) = 0.02 + (0.0070/0.20)·0.3797 = 0.02 + 0.035·0.3797 = 0.02 + 0.013289 = 0.033289 ≈ 3.33%.",
            "ES_99 = VaR/(1−ξ) + (β − ξu)/(1−ξ) = 0.033289/0.80 + (0.0070 − 0.20·0.02)/0.80 = 0.041611 + (0.0070 − 0.0040)/0.80 = 0.041611 + 0.00375 = 0.045361 ≈ 4.54%.",
          ],
          conclusion:
            "The GPD tail gives 99% VaR ≈ 3.33% and 99% ES ≈ 4.54% of value; the ES sits well above VaR because the positive shape ξ = 0.20 makes the tail heavy.",
          markingNotes: [
            "Full marks require the (n/N_u)(1−q) tail factor, not just (1−q).",
            "ES must use the GPD ES formula, giving ES > VaR; averaging scenarios earns no credit here.",
          ],
        },
      },
      {
        id: "sn-es-coherence",
        title: "Why ES is coherent and VaR can be superadditive",
        testPointIds: ["tp-es-coherence", "tp-backtest-frtb"],
        explanation: [
          "A risk measure is coherent if it is monotonic, translation-invariant, positively homogeneous and subadditive. Subadditivity — risk(A+B) ≤ risk(A) + risk(B) — is the one that encodes 'diversification cannot increase risk'. ES satisfies all four; VaR satisfies the first three but can fail subadditivity, which means a merged portfolio can show a VaR larger than the sum of standalone VaRs. That is not just a theoretical wart: it can penalise diversification and makes VaR a poor building block for allocating capital across desks.",
          "The cleanest counterexample uses two independent single-name credit positions whose default probability is just below the tail probability 1−c. Individually the default outcome is rarer than the VaR level, so each standalone VaR sits at (roughly) zero. Combine them and the probability that at least one defaults rises above 1−c, so the portfolio VaR jumps to a full default loss — larger than 0 + 0. VaR is superadditive here; ES, by averaging the whole tail, would have reflected the default losses in both standalone measures and stays subadditive.",
          "This coherence gap plus tail-insensitivity (VaR says nothing about the size of losses beyond the quantile) is why regulators moved the internal-models capital measure to ES. The cost is that ES is harder to backtest: a single quantile breach is a clean Bernoulli event, but validating an average over the tail requires more of the tail to be observed, so ES backtests are lower-power and often rely on multi-level or elicitability-based approaches.",
        ],
        keyRules: [
          "Coherence = monotonicity + translation invariance + positive homogeneity + subadditivity.",
          "ES is coherent; VaR can violate subadditivity.",
          "ES ≥ VaR and ES is tail-size sensitive; VaR is not.",
        ],
        formulas: [
          "Subadditivity: ρ(A+B) ≤ ρ(A) + ρ(B).",
          "ES_c = E[L | L ≥ VaR_c].",
        ],
        workedProblem: {
          scenario:
            "Two independent bonds each lose $10m on default (probability 4%) and $0 otherwise. Using a 95% confidence level, compute the standalone VaR of each and the VaR of the two-bond portfolio, and comment on subadditivity.",
          steps: [
            "Single bond: P(loss = 0) = 96% ≥ 95%, so the 95th-percentile loss is 0 ⇒ VaR_95 = $0.",
            "Portfolio outcomes (independence): both survive w.p. 0.96² = 0.9216; exactly one defaults w.p. 2·0.04·0.96 = 0.0768; both default w.p. 0.04² = 0.0016.",
            "Cumulative loss distribution: P(L ≤ 0) = 0.9216 < 0.95; P(L ≤ 10) = 0.9216 + 0.0768 = 0.9984 ≥ 0.95 ⇒ portfolio VaR_95 = $10m.",
            "Compare: VaR(A+B) = $10m > VaR(A) + VaR(B) = $0 + $0 = $0 — VaR is superadditive, violating subadditivity.",
          ],
          conclusion:
            "Each bond's 95% VaR is $0 but the portfolio's is $10m, so combining the positions raises VaR above the sum — a subadditivity violation that ES (which averages the tail) would not produce.",
          markingNotes: [
            "Credit for the standalone VaR = 0 result (default rarer than 1−c).",
            "Credit for building the portfolio loss distribution and concluding VaR(A+B) > VaR(A)+VaR(B).",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pp-p2m1-1",
        testPointIds: ["tp-parametric-cf", "tp-method-choice"],
        style: "Calculation + judgement",
        question:
          "A linear $80m bond portfolio has daily return σ = 0.9% and μ ≈ 0. (a) Compute the 1-day 99% VaR. (b) The risk committee wants a 10-day figure. State the scaled VaR and the key assumption. (c) Backtesting shows exceptions clustered in one volatile month. Which HS refinement addresses this?",
        answerPlan: [
          "Apply delta-normal VaR with z_99 = 2.326.",
          "Scale by √10 and flag the i.i.d. assumption.",
          "Link clustered exceptions to volatility dynamics ⇒ filtered HS.",
        ],
        modelAnswer:
          "(a) VaR_99 = 80m·2.326·0.009 = 80m·0.020934 = $1.675m. (b) 10-day VaR = 1.675m·√10 = 1.675m·3.162 = $5.30m, valid only if daily returns are i.i.d. with constant volatility; volatility clustering would make √time understate the 10-day risk. (c) Clustered exceptions signal that the model missed a volatility regime shift — filtered (volatility-weighted) historical simulation, which rescales past returns by σ_today/σ_t, would make the tail respond to the high-vol month; equal-weighted HS reacts too slowly.",
        markingGuide: [
          "(a) Correct z_99 = 2.326 and VaR ≈ $1.68m.",
          "(b) √10 scaling ≈ $5.3m AND the i.i.d./constant-vol assumption stated.",
          "(c) Identifies clustering as a volatility-dynamics failure and prescribes filtered HS (not merely 'more data').",
        ],
      },
      {
        id: "pp-p2m1-2",
        testPointIds: ["tp-evt", "tp-es-coherence"],
        style: "EVT calculation",
        question:
          "From n = 2,000 daily losses, N_u = 80 exceed u = 1.5%. A GPD fit gives ξ = 0.25, β = 0.5% (0.0050). Compute the 99.5% VaR and the 99.5% ES, and state what ξ implies about the tail.",
        answerPlan: [
          "Compute the tail factor (n/N_u)(1−q).",
          "Apply the GPD VaR formula, then the ES formula.",
          "Interpret ξ > 0.",
        ],
        modelAnswer:
          "Tail factor = (2000/80)·(1−0.995) = 25·0.005 = 0.125. 0.125^(−0.25) = exp(−0.25·ln0.125) = exp(−0.25·(−2.07944)) = exp(0.51986) = 1.6818. VaR = u + (β/ξ)(1.6818 − 1) = 0.015 + (0.0050/0.25)·0.6818 = 0.015 + 0.020·0.6818 = 0.015 + 0.013636 = 0.028636 ≈ 2.86%. ES = VaR/(1−ξ) + (β − ξu)/(1−ξ) = 0.028636/0.75 + (0.0050 − 0.25·0.015)/0.75 = 0.038181 + (0.0050 − 0.00375)/0.75 = 0.038181 + 0.001667 = 0.039848 ≈ 3.98%. The positive shape ξ = 0.25 means a heavy power-law tail, which is why ES (3.98%) sits well above VaR (2.86%).",
        markingGuide: [
          "Tail factor (n/N_u)(1−q) = 0.125 used correctly.",
          "VaR ≈ 2.86% and ES ≈ 3.98% via the GPD formulas.",
          "Interprets ξ > 0 as a heavy tail widening the ES–VaR gap.",
        ],
      },
      {
        id: "pp-p2m1-3",
        testPointIds: ["tp-backtest-frtb", "tp-es-coherence"],
        style: "Conceptual / regulatory",
        question:
          "A desk runs 99% 1-day VaR and observes 9 exceptions over 250 trading days. (a) How many are expected, and which supervisory zone is 9? (b) Give one reason regulators favour 97.5% ES over 99% VaR, and (c) one reason ES is nonetheless harder to backtest.",
        answerPlan: [
          "Expected exceptions = (1−c)·T.",
          "Map 9 to the traffic-light zone and its capital consequence.",
          "Coherence/tail sensitivity for ES; tail-observation difficulty for backtesting.",
        ],
        modelAnswer:
          "(a) Expected exceptions = 0.01·250 = 2.5; 9 falls in the amber (yellow) zone (roughly 5–9), which raises the capital multiplier and prompts scrutiny short of automatic model withdrawal (10+ would be red). (b) ES is coherent (subadditive) and tail-size sensitive, so it captures the magnitude of losses beyond the quantile and does not penalise diversification the way VaR can; at 97.5% for normal risks ES ≈ VaR_99, so stringency is preserved while tail sensitivity is gained. (c) ES depends on the whole tail rather than a single breach indicator, so validating it needs more tail observations and lower-power tests — a simple exception count is not enough.",
        markingGuide: [
          "(a) Expected 2.5 AND amber/yellow zone with the capital-multiplier consequence.",
          "(b) Coherence/subadditivity or tail-sensitivity, ideally with the ES_97.5 ≈ VaR_99 point.",
          "(c) ES needs the full tail ⇒ harder/lower-power backtest.",
        ],
      },
    ],
  }),

  // ======================================================================
  // frm-p2-m2 — Market Risk: Volatility, correlation & nonlinear risk
  // ======================================================================
  "frm-p2-m2": examDepth({
    testPoints: [
      {
        id: "tp-ewma-garch",
        title: "EWMA vs GARCH(1,1): updating, persistence, mean reversion",
        priority: "critical",
        examinerFocus:
          "Whether you can update a variance one step with EWMA and GARCH, read persistence and long-run variance from GARCH parameters, and explain why EWMA is a GARCH special case with no mean reversion.",
        typicalQuestionForms: [
          "'Update today's variance given yesterday's variance and return (EWMA/GARCH).'",
          "'Compute GARCH persistence and long-run variance from ω, α, β.'",
          "'Why does EWMA not mean-revert?'",
        ],
        mustKnow: [
          "EWMA: σ²_t = λσ²_(t−1) + (1−λ)r²_(t−1); RiskMetrics uses λ ≈ 0.94 daily. Higher λ ⇒ smoother, slower-reacting variance.",
          "GARCH(1,1): σ²_t = ω + α·r²_(t−1) + β·σ²_(t−1); persistence = α + β (must be < 1 for stationarity); long-run variance V_L = ω/(1 − α − β).",
          "EWMA is GARCH(1,1) with ω = 0 and α + β = 1, so it has no long-run mean to revert to — it is an integrated process.",
        ],
        scoringActions: [
          "Substitute yesterday's r² and σ² directly; keep everything in variance (not vol) units until the last step.",
          "Compute α + β first (persistence), then V_L = ω/(1 − α − β).",
          "Flag EWMA's no-mean-reversion property when a question contrasts it with GARCH.",
        ],
      },
      {
        id: "tp-vol-forecast",
        title: "Multi-day volatility forecasting and the term structure",
        priority: "high",
        examinerFocus:
          "Whether you can project GARCH variance k steps ahead toward the long-run level and understand why the vol term structure slopes toward V_L rather than scaling by flat √time.",
        typicalQuestionForms: [
          "'Forecast the k-day-ahead GARCH variance.'",
          "'Is current vol above or below long-run — which way does the forecast move?'",
          "'Why is √time scaling wrong under GARCH?'",
        ],
        mustKnow: [
          "k-step GARCH forecast: E[σ²_(t+k)] = V_L + (α+β)^k·(σ²_t − V_L); it decays geometrically toward V_L at rate (α+β).",
          "If current variance is above V_L the forecast falls over the horizon; if below, it rises — the term structure of volatility mean-reverts.",
          "√time scaling assumes constant variance, so it overstates when vol is currently high and understates when currently low relative to V_L.",
        ],
        scoringActions: [
          "Identify whether σ²_t is above or below V_L to predict the forecast's direction.",
          "Use (α+β)^k as the decay factor, not a linear interpolation.",
          "Reject flat √time scaling whenever GARCH mean reversion is described.",
        ],
      },
      {
        id: "tp-implied-smile",
        title: "Implied vs realised volatility and the smile/skew",
        priority: "high",
        examinerFocus:
          "Whether you can distinguish implied (forward-looking, from prices) from realised (historical) volatility and explain the smile/skew as a departure from the Black-Scholes lognormal assumption.",
        typicalQuestionForms: [
          "'Why does an equity index show a volatility skew rather than a flat line?'",
          "'What does a rising implied vs realised vol gap imply?'",
          "'Which options are richest on an equity skew?'",
        ],
        mustKnow: [
          "Implied vol is backed out of market option prices given a model; realised vol is measured from historical returns — they can diverge, and the gap is a traded 'variance risk premium'.",
          "A flat implied-vol surface would confirm Black-Scholes lognormality; the observed smile/skew shows the market prices fatter tails and asymmetry.",
          "Equity indices show a negative skew (higher implied vol for low strikes/OTM puts) reflecting crash fear and leverage effects; currencies tend to show a more symmetric smile.",
        ],
        scoringActions: [
          "Label the axis: skew is implied vol across strikes; term structure is implied vol across maturities.",
          "Read equity index shape as demand for downside (put) protection ⇒ low-strike vols richest.",
          "Treat a persistent implied > realised gap as a risk premium, not a mispricing to arbitrage blindly.",
        ],
      },
      {
        id: "tp-correlation-copula",
        title: "Correlation limits and copulas for dependence",
        priority: "critical",
        examinerFocus:
          "Whether you know that linear correlation captures only linear co-movement and miss tail dependence, and that copulas separate marginals from a dependence structure — including the Gaussian copula's zero tail dependence weakness.",
        typicalQuestionForms: [
          "'Why can two portfolios share a correlation yet differ in joint tail risk?'",
          "'What does a copula add beyond a correlation matrix?'",
          "'What was the modelling weakness of the Gaussian copula for tranched credit?'",
        ],
        mustKnow: [
          "Linear (Pearson) correlation is only a complete dependence description for elliptical (e.g. joint-normal) distributions; otherwise it misses nonlinear and tail dependence.",
          "A copula joins arbitrary marginals into a joint distribution via Sklar's theorem, letting you model fat-tailed marginals and a separate dependence structure.",
          "The Gaussian copula has zero asymptotic tail dependence (joint extremes decouple), so it understates simultaneous crashes; a Student-t copula adds tail dependence via low degrees of freedom.",
        ],
        scoringActions: [
          "Separate the two questions: what are the marginals, and what is the dependence copula?",
          "For 'joint crash' risk, prefer a t-copula (tail dependence) over a Gaussian copula.",
          "Attribute the crisis-era mispricing of correlated defaults to Gaussian-copula zero tail dependence.",
        ],
      },
      {
        id: "tp-correlation-stress",
        title: "Correlation breakdown and diversification erosion in stress",
        priority: "high",
        examinerFocus:
          "Whether you can explain that measured correlations rise toward 1 in crises, so diversification benefits shrink exactly when needed, and that stress tests must not assume normal-period correlations.",
        typicalQuestionForms: [
          "'What happens to diversification benefit when correlations rise in stress?'",
          "'Why should stress scenarios override the historical correlation matrix?'",
          "'How does correlation breakdown affect portfolio VaR?'",
        ],
        mustKnow: [
          "In crises, cross-asset correlations tend toward +1 as everything sells off together (flight to quality), so the covariance cross-terms grow and portfolio risk rises.",
          "Diversification benefit is largest when ρ < 1; as ρ → 1 the portfolio SD approaches the weighted-average SD, i.e. the benefit vanishes.",
          "Backward-looking correlation matrices understate stressed risk; stress and scenario analysis should impose elevated, sometimes near-unit, correlations.",
        ],
        scoringActions: [
          "When a vignette mentions stress, mentally push correlations toward 1 before judging portfolio risk.",
          "State that diversification is least reliable in the tail — the opposite of when it is assumed to help.",
          "Recommend scenario/stressed correlations rather than the sample matrix for tail capital.",
        ],
      },
      {
        id: "tp-nonlinear",
        title: "Nonlinear risk: delta-gamma-vega and full revaluation",
        priority: "critical",
        examinerFocus:
          "Whether you can approximate option P&L with delta-gamma, recognise when gamma makes delta-only VaR over- or under-state risk, and know when only full revaluation is adequate.",
        typicalQuestionForms: [
          "'Estimate option P&L for a given underlying move using delta and gamma.'",
          "'For a short-gamma book, does delta-only VaR over- or under-state risk?'",
          "'When does delta-gamma break down and require full revaluation?'",
        ],
        mustKnow: [
          "Delta-gamma P&L ≈ δ·ΔS + ½·γ·(ΔS)²; vega adds ∂V/∂σ·Δσ for volatility moves.",
          "Long options (long gamma) have a convex payoff, so delta-only overstates the loss; short options (short gamma) are concave, so delta-only understates the loss — the dangerous case.",
          "For large moves or complex/path-dependent payoffs the quadratic approximation fails; full revaluation (repricing each scenario) is required.",
        ],
        scoringActions: [
          "Always add the ½γ(ΔS)² term for option books; state its sign relative to the position.",
          "For short-gamma positions, expect the true loss to exceed the linear estimate.",
          "Escalate to full revaluation for big shocks, digitals/barriers, or heavily convex books.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Volatility, correlation and nonlinear risk are dense with quick calculations; target full marks on EWMA/GARCH updates, persistence and delta-gamma, and at least the setup on multi-day forecasts.",
      timeBudget:
        "~1.5 minutes per item; GARCH forecast and delta-gamma items may take up to 2 minutes — do the arithmetic in variance/dollar terms to avoid unit slips.",
      answerSequence: [
        "Identify the model (EWMA vs GARCH) or the exposure (linear vs option) the item is testing.",
        "Write the update/forecast/approximation formula before substituting.",
        "Track units: variance vs volatility, and per-share vs position dollars.",
        "Sanity-check direction: forecast toward V_L, correlations up in stress, gamma sign vs long/short options.",
      ],
      qualityChecks: [
        "Did I convert to volatility (√) only at the final step?",
        "Is persistence α + β < 1 and V_L = ω/(1 − α − β) correct?",
        "For the option book, did I get the gamma sign (long vs short) right?",
      ],
    },
    studyNotes: [
      {
        id: "sn-ewma-garch",
        title: "EWMA and GARCH: two views of the same variance recursion",
        testPointIds: ["tp-ewma-garch", "tp-vol-forecast"],
        explanation: [
          "Both models update variance from yesterday's squared return and yesterday's variance; they differ only in whether there is a gravitational pull toward a long-run level. EWMA, σ²_t = λσ²_(t−1) + (1−λ)r²_(t−1), is a pure exponential average of past squared returns. The decay λ controls memory: RiskMetrics' 0.94 gives roughly a month of effective memory. Because the two weights sum to 1 and there is no constant term, EWMA has no long-run variance to revert to — it drifts wherever the data push it.",
          "GARCH(1,1) adds a constant: σ²_t = ω + α·r²_(t−1) + β·σ²_(t−1). Now α measures the reaction to new shocks, β the persistence of prior variance, and α + β the overall persistence. Provided α + β < 1 the process is stationary with a finite long-run variance V_L = ω/(1 − α − β), and shocks decay back toward V_L. Setting ω = 0 and α + β = 1 recovers EWMA exactly, which is why EWMA is called an integrated GARCH: the special case with unit persistence and no mean reversion.",
          "The exam exploits this contrast. A GARCH with high persistence (say 0.98) forecasts slowly decaying volatility; EWMA forecasts a flat volatility forever (its k-step forecast is just today's variance). Knowing V_L and α + β lets you answer both 'update' and 'forecast' questions from the same parameters.",
        ],
        keyRules: [
          "EWMA weights sum to 1, no ω ⇒ no mean reversion.",
          "GARCH persistence = α + β < 1 for stationarity.",
          "V_L = ω/(1 − α − β).",
        ],
        formulas: [
          "EWMA: σ²_t = λσ²_(t−1) + (1−λ)r²_(t−1).",
          "GARCH(1,1): σ²_t = ω + α·r²_(t−1) + β·σ²_(t−1).",
          "V_L = ω/(1 − α − β).",
        ],
        workedProblem: {
          scenario:
            "GARCH(1,1) parameters: ω = 0.000002, α = 0.05, β = 0.92. Yesterday's return was −3% and yesterday's variance was 0.0004 (σ = 2%). (a) Update today's variance and volatility. (b) Give persistence and long-run volatility. (c) Contrast with the EWMA (λ = 0.94) update.",
          steps: [
            "(a) σ²_t = 0.000002 + 0.05·(0.03)² + 0.92·0.0004 = 0.000002 + 0.05·0.0009 + 0.000368 = 0.000002 + 0.000045 + 0.000368 = 0.000415 ⇒ σ_t = √0.000415 = 0.02037 ≈ 2.04%.",
            "(b) Persistence = α + β = 0.97; V_L = ω/(1 − 0.97) = 0.000002/0.03 = 0.00006667 ⇒ long-run vol = √0.00006667 = 0.008165 ≈ 0.82%.",
            "(c) EWMA: σ²_t = 0.94·0.0004 + 0.06·0.0009 = 0.000376 + 0.000054 = 0.000430 ⇒ σ_t = √0.000430 = 0.02074 ≈ 2.07%.",
            "The two updates are close today, but GARCH will pull future variance toward 0.82% vol, whereas EWMA keeps forecasting ~2% indefinitely.",
          ],
          conclusion:
            "Today's GARCH vol ≈ 2.04% vs EWMA ≈ 2.07%; persistence is 0.97 with a long-run vol of ~0.82%. The models agree now but diverge in the forecast because only GARCH mean-reverts.",
          markingNotes: [
            "Keep the calculation in variance units and take √ only at the end.",
            "Long-run vol requires V_L then its square root — do not report V_L as a volatility.",
          ],
        },
      },
      {
        id: "sn-vol-forecast",
        title: "Forecasting the volatility term structure with GARCH",
        testPointIds: ["tp-vol-forecast", "tp-ewma-garch"],
        explanation: [
          "A one-day model becomes a term-structure tool through the k-step forecast E[σ²_(t+k)] = V_L + (α+β)^k·(σ²_t − V_L). The current gap between today's variance and V_L shrinks geometrically at the persistence rate. If today's variance is above V_L (a recent shock), the forecast slopes down toward V_L; if below, it slopes up. This is the mean-reverting term structure of volatility, and it is why implied-vol term structures are typically upward-sloping when spot vol is low and downward-sloping (inverted) after a spike.",
          "Contrast this with naive √time scaling, which multiplies a one-day vol by √h and implicitly assumes variance is constant. That is fine only when today's variance already equals V_L. When vol is elevated, √time overstates longer-horizon risk (it keeps the shock forever); when vol is quiet, √time understates it. FRM answers frequently hinge on choosing GARCH mean reversion over √time when the vignette says current vol is unusually high or low.",
          "To get a horizon variance you sum the per-day forecasts: Var over h days = Σ_(k=1..h) E[σ²_(t+k)]. For risk numbers you then take the square root of the summed variance, not the sum of the square roots.",
        ],
        keyRules: [
          "E[σ²_(t+k)] = V_L + (α+β)^k·(σ²_t − V_L).",
          "Above V_L ⇒ forecast falls; below V_L ⇒ forecast rises.",
          "Horizon variance = Σ per-day forecasts, then √ for vol.",
        ],
        formulas: [
          "E[σ²_(t+k)] = V_L + (α+β)^k·(σ²_t − V_L).",
          "√time scaling (constant-vol special case): σ_h = σ_1·√h.",
        ],
        workedProblem: {
          scenario:
            "Using ω = 0.000002, α = 0.05, β = 0.92 (so V_L = 0.00006667, persistence 0.97) and today's variance σ²_t = 0.0004, forecast the variance and volatility 10 days ahead, and compare with √time scaling of today's vol.",
          steps: [
            "Decay factor (α+β)^10 = 0.97^10 = exp(10·ln0.97) = exp(10·(−0.030459)) = exp(−0.30459) = 0.7374.",
            "E[σ²_(t+10)] = V_L + 0.7374·(σ²_t − V_L) = 0.00006667 + 0.7374·(0.0004 − 0.00006667) = 0.00006667 + 0.7374·0.00033333 = 0.00006667 + 0.00024580 = 0.00031247.",
            "Forecast vol (single-day 10 ahead) = √0.00031247 = 0.017677 ≈ 1.77%, below today's 2.00% — mean reversion pulls it toward the 0.82% long-run vol.",
            "Naive √time on today's vol would keep the daily forecast at 2.00% for all horizons, overstating day-10 risk because today's variance is above V_L.",
          ],
          conclusion:
            "The 10-day-ahead GARCH volatility is ~1.77%, lower than today's 2.00% because variance mean-reverts toward the 0.82% long-run level; flat √time scaling would wrongly hold it at 2.00%.",
          markingNotes: [
            "Credit for the (α+β)^k decay factor applied to the gap (σ²_t − V_L).",
            "Note the direction (falls because above V_L) and the contrast with √time.",
          ],
        },
      },
      {
        id: "sn-implied-copula",
        title: "Implied vol surfaces, correlation limits and copulas",
        testPointIds: ["tp-implied-smile", "tp-correlation-copula"],
        explanation: [
          "Implied volatility is the number that makes a pricing model reproduce a market option price; it is forward-looking and, plotted across strikes and maturities, forms the volatility surface. A flat surface would validate Black-Scholes' single-lognormal assumption. The observed smile/skew is the market's correction: equity indices show higher implied vols at low strikes (a negative skew) because investors pay up for crash protection and because falling prices raise leverage and realised vol. Realised volatility, measured from actual returns, often sits below implied vol, and that persistent gap is the variance risk premium harvested by option sellers.",
          "Dependence between assets is a separate axis, and linear correlation is a blunt tool there. Pearson correlation fully describes dependence only for elliptical distributions; for anything with fat or asymmetric tails it misses the crucial feature — whether extremes occur together. Two asset pairs can share ρ = 0.5 yet have completely different probabilities of crashing simultaneously.",
          "Copulas solve this by Sklar's theorem: any joint distribution factorises into its marginals and a copula that carries the pure dependence structure. You can therefore fit fat-tailed marginals and then bolt on a dependence copula. The Gaussian copula, however, has zero asymptotic tail dependence — in the extreme, joint crashes decouple — which is why it under-priced simultaneous defaults in tranched credit. A Student-t copula with low degrees of freedom restores tail dependence and is the standard fix in exam answers about joint extremes.",
        ],
        keyRules: [
          "Skew = implied vol across strikes; term structure = across maturities.",
          "Pearson ρ is complete only for elliptical distributions.",
          "Gaussian copula ⇒ zero tail dependence; t-copula ⇒ tail dependence.",
        ],
        formulas: [
          "Sklar: F(x,y) = C(F_X(x), F_Y(y)).",
          "Variance risk premium ≈ implied vol − realised vol.",
        ],
        workedProblem: {
          scenario:
            "A structurer models a two-name first-to-default basket with fat-tailed marginals and a Gaussian copula, then a Student-t copula (4 d.o.f.), holding the linear correlation at 0.3 in both. Explain qualitatively how and why the fair spread differs, and which is more prudent.",
          steps: [
            "Both copulas reproduce the same linear correlation (0.3) and the same marginal default curves, so single-name statistics are identical.",
            "First-to-default risk depends on the chance that both names deteriorate together in the tail — i.e. tail dependence — which linear correlation does not pin down.",
            "The Gaussian copula has zero asymptotic tail dependence, so joint extreme defaults are rarer; the t-copula (4 d.o.f.) assigns materially higher probability to simultaneous tail defaults.",
            "Higher joint-tail probability under the t-copula raises the modelled probability of an early first default and hence the fair protection spread.",
          ],
          conclusion:
            "Despite identical marginals and correlation, the Student-t copula produces a higher first-to-default spread because it adds tail dependence the Gaussian copula omits; the t-copula is the more prudent choice for joint-crash risk.",
          markingNotes: [
            "Credit for isolating tail dependence (not correlation) as the driver.",
            "Credit for naming the Gaussian copula's zero tail dependence as the weakness.",
          ],
        },
      },
      {
        id: "sn-correlation-stress",
        title: "Correlation breakdown and the fragility of diversification",
        testPointIds: ["tp-correlation-stress"],
        explanation: [
          "Diversification is a correlation trade. For a two-asset book, σ_p² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂, and the whole benefit lives in the cross term: the lower ρ, the smaller that term and the lower total risk. At ρ = 1 the portfolio SD collapses to the weighted average of the asset SDs and the benefit disappears entirely. So the size of any diversification claim is only as good as the correlation assumption behind it.",
          "The problem is that correlations are regime-dependent and rise sharply in crises. In a flight to quality, risk assets sell off together, cross-asset correlations move toward +1, and the cross term inflates precisely when losses are largest. Diversification therefore fails at the worst moment — the benefit you were relying on evaporates in the tail. Measured 'quiet period' correlations badly understate stressed risk.",
          "The practical response is to stop trusting a single backward-looking correlation matrix for tail capital. Stress and scenario analysis should impose elevated, sometimes near-unit, correlations; conditional or DCC-type estimates and copulas with tail dependence give a more honest picture. In answers, the reflex is: when the vignette says 'stress', push ρ toward 1 and expect portfolio risk to be higher than the normal-period model implies.",
        ],
        keyRules: [
          "Benefit lives in the 2w₁w₂ρσ₁σ₂ cross term; ρ = 1 ⇒ no benefit.",
          "Crisis correlations rise toward +1 (flight to quality).",
          "Use stressed/scenario correlations, not the quiet-period matrix, for tail capital.",
        ],
        formulas: [
          "σ_p² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂.",
          "At ρ = 1: σ_p = w₁σ₁ + w₂σ₂ (weighted average).",
        ],
        workedProblem: {
          scenario:
            "A 50/50 portfolio has σ₁ = 20%, σ₂ = 15%. Compute portfolio SD when ρ = 0.2 (normal) and when ρ = 0.9 (stress), and quantify the lost diversification benefit.",
          steps: [
            "Common terms: w₁²σ₁² = 0.25·0.04 = 0.01; w₂²σ₂² = 0.25·0.0225 = 0.005625; 2w₁w₂σ₁σ₂ = 2·0.5·0.5·0.20·0.15 = 0.015.",
            "ρ = 0.2: σ_p² = 0.01 + 0.005625 + 0.2·0.015 = 0.015625 + 0.003 = 0.018625 ⇒ σ_p = √0.018625 = 0.13647 ≈ 13.6%.",
            "ρ = 0.9: σ_p² = 0.015625 + 0.9·0.015 = 0.015625 + 0.0135 = 0.029125 ⇒ σ_p = √0.029125 = 0.17066 ≈ 17.1%.",
            "Weighted-average SD (the ρ = 1 no-benefit case) = 0.5·20 + 0.5·15 = 17.5%; the benefit shrinks from 3.9pp (17.5 − 13.6) to only 0.4pp (17.5 − 17.1) as ρ rises to 0.9.",
          ],
          conclusion:
            "Portfolio SD rises from ~13.6% to ~17.1% as correlation jumps from 0.2 to 0.9, and the diversification benefit almost vanishes (3.9pp → 0.4pp) — the classic stress-period breakdown that makes quiet-period correlation matrices dangerous for tail capital.",
          markingNotes: [
            "Credit for recomputing only the cross term when ρ changes.",
            "Credit for comparing against the 17.5% weighted-average SD to quantify lost benefit.",
          ],
        },
      },
      {
        id: "sn-nonlinear",
        title: "Delta-gamma-vega risk and when to fully revalue",
        testPointIds: ["tp-nonlinear", "tp-implied-smile"],
        explanation: [
          "An option's P&L for a small underlying move is well approximated by a Taylor expansion: ΔV ≈ δ·ΔS + ½·γ·(ΔS)² + vega·Δσ + θ·Δt. The delta term is the linear sensitivity; the gamma term is the convexity correction that delta-normal VaR omits. Sign matters enormously: a long-option position is long gamma (convex), so its losses are cushioned and delta-only VaR overstates the loss; a short-option position is short gamma (concave), so losses accelerate and delta-only VaR understates the loss — the genuinely dangerous case that has blown up option desks.",
          "Vega is the other half of option risk and interacts with the smile. In a crash, the underlying falls (hitting delta and gamma) and implied vol usually spikes (hitting vega), so a short-vol book is hit twice. Delta-gamma VaR that ignores vega will understate the loss of any book whose value depends on the volatility level, which is most option books.",
          "The quadratic approximation is local. For large shocks, or for path-dependent and discontinuous payoffs (barriers, digitals), curvature beyond gamma matters and the Taylor terms can mislead — a digital's payoff is a step, not a smooth curve. There the only reliable method is full revaluation: reprice the whole book under each simulated scenario (historical or Monte Carlo) rather than trusting Greeks.",
        ],
        keyRules: [
          "ΔV ≈ δ·ΔS + ½γ(ΔS)² + vega·Δσ.",
          "Long gamma ⇒ delta-only overstates loss; short gamma ⇒ it understates loss.",
          "Large or path-dependent payoffs ⇒ full revaluation, not Greeks.",
        ],
        formulas: [
          "Delta-gamma P&L ≈ δ·ΔS + ½·γ·(ΔS)².",
          "1-day σ_S = S·σ; α-move ΔS = z_α·σ_S.",
        ],
        workedProblem: {
          scenario:
            "A trader is SHORT 100 call contracts (each on 100 shares) on a $50 stock, giving position delta −0.55 and gamma −0.04 per share (10,000 share-equivalents). Daily stock volatility is 2%. Estimate the 1-day 99% loss using delta-gamma and compare with delta-only.",
          steps: [
            "1-day σ_S = 50·0.02 = $1.00; a 99% adverse up-move for a short-call book is ΔS = +2.326·1.00 = +$2.326 (short calls lose as the stock rises).",
            "Per share: δ·ΔS = −0.55·(+2.326) = −1.2793; ½γ(ΔS)² = ½·(−0.04)·(2.326²) = 0.5·(−0.04)·5.410 = −0.10821.",
            "Delta-gamma P&L per share = −1.2793 − 0.10821 = −1.3875; ×10,000 = −$13,875.",
            "Delta-only P&L = −1.2793·10,000 = −$12,793, so delta-only understates the loss by about $1,082 because the position is short gamma (concave).",
          ],
          conclusion:
            "Delta-gamma 1-day 99% loss ≈ $13,875 versus delta-only ≈ $12,793; the short-gamma position makes delta-only understate the loss, exactly the case where ignoring convexity is most dangerous.",
          markingNotes: [
            "Credit for the correct adverse direction (up-move) for a short-call book.",
            "Gamma term must be negative (short gamma) so delta-gamma loss > delta-only loss.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pp-p2m2-1",
        testPointIds: ["tp-ewma-garch", "tp-vol-forecast"],
        style: "Calculation",
        question:
          "A GARCH(1,1) has ω = 0.0000015, α = 0.06, β = 0.90. Today's variance is 0.00025. (a) Give persistence and long-run daily volatility. (b) Forecast the variance 5 days ahead. (c) State whether √time scaling of today's vol would over- or under-state 5-day risk.",
        answerPlan: [
          "Compute α + β and V_L, then its √.",
          "Apply the k-step forecast with (α+β)^5.",
          "Compare current variance to V_L for the √time verdict.",
        ],
        modelAnswer:
          "(a) Persistence = 0.06 + 0.90 = 0.96; V_L = 0.0000015/(1 − 0.96) = 0.0000015/0.04 = 0.00003750 ⇒ long-run vol = √0.00003750 = 0.006124 ≈ 0.61%. (b) (0.96)^5 = exp(5·ln0.96) = exp(5·(−0.040822)) = exp(−0.20411) = 0.8154; E[σ²_(t+5)] = V_L + 0.8154·(0.00025 − 0.00003750) = 0.00003750 + 0.8154·0.00021250 = 0.00003750 + 0.00017327 = 0.00021077 ⇒ vol ≈ √0.00021077 = 1.452%. (c) Today's variance (0.00025, vol ≈ 1.58%) is above V_L, so mean reversion lowers future variance; flat √time scaling holds vol at 1.58% and therefore OVERSTATES 5-day risk.",
        markingGuide: [
          "(a) Persistence 0.96 and long-run vol ≈ 0.61% (√ of V_L).",
          "(b) Correct (0.96)^5 decay applied to the gap ⇒ variance ≈ 0.000211.",
          "(c) Above V_L ⇒ √time overstates.",
        ],
      },
      {
        id: "pp-p2m2-2",
        testPointIds: ["tp-nonlinear"],
        style: "Delta-gamma calculation",
        question:
          "A book is LONG options with position delta +2,000 (share-equivalents) and gamma +150 (per $1) on an underlying at $40 with 1.5% daily volatility. Estimate the 1-day 99% loss with delta-gamma and explain whether delta-only over- or under-states it.",
        answerPlan: [
          "Compute the 99% adverse move in dollars.",
          "Apply delta-gamma at the portfolio level.",
          "Interpret the long-gamma sign.",
        ],
        modelAnswer:
          "1-day σ_S = 40·0.015 = $0.60; the 99% adverse move for a long-delta book is a down move ΔS = −2.326·0.60 = −$1.3956. Delta term = δ·ΔS = 2,000·(−1.3956) = −$2,791.2. Gamma term = ½·γ·(ΔS)² = 0.5·150·(1.3956²) = 0.5·150·1.9477 = +$146.1 (positive because long gamma). Delta-gamma P&L ≈ −2,791.2 + 146.1 = −$2,645. Delta-only loss would be −$2,791, so delta-only OVERSTATES the loss by about $146: the long-gamma convexity cushions the downside.",
        markingGuide: [
          "Correct 99% adverse down-move ≈ −$1.396.",
          "Delta-gamma loss ≈ $2,645 with a POSITIVE gamma term.",
          "Concludes delta-only overstates loss for long gamma.",
        ],
      },
      {
        id: "pp-p2m2-3",
        testPointIds: ["tp-correlation-copula", "tp-correlation-stress"],
        style: "Conceptual",
        question:
          "A risk manager reports that a 60/40 equity-bond portfolio is 'well diversified' based on a −0.2 historical correlation, and models joint losses with a Gaussian copula. Critique both choices for tail-risk purposes and propose fixes.",
        answerPlan: [
          "Attack the reliance on a quiet-period correlation.",
          "Attack the Gaussian copula's zero tail dependence.",
          "Propose stressed correlations and a t-copula.",
        ],
        modelAnswer:
          "First, the −0.2 correlation is a normal-period estimate; in a crisis equity-bond correlations can flip positive and other cross-asset correlations move toward +1, so the diversification benefit shrinks or reverses exactly when it is needed — the cross term 2w₁w₂ρσ₁σ₂ grows. Tail capital should use stressed/scenario correlations, not the historical matrix. Second, the Gaussian copula has zero asymptotic tail dependence, so it assumes joint extreme losses decouple and understates the probability that both legs crash together. Fixes: impose elevated (near-unit) correlations in stress scenarios, and use a Student-t copula (low degrees of freedom) or another tail-dependent copula so the model captures simultaneous tail losses; supplement VaR with ES and explicit stress tests.",
        markingGuide: [
          "Identifies quiet-period correlation as unreliable in stress (correlation breakdown).",
          "Identifies Gaussian-copula zero tail dependence as understating joint crashes.",
          "Proposes stressed correlations AND a tail-dependent (t-)copula.",
        ],
      },
    ],
  }),

  // ======================================================================
  // frm-p2-m3 — Market Risk: Risk capital & model validation (FRTB)
  // ======================================================================
  "frm-p2-m3": examDepth({
    testPoints: [
      {
        id: "tp-frtb-boundary",
        title: "Trading-/banking-book boundary and framework structure",
        priority: "high",
        examinerFocus:
          "Whether you understand why the boundary exists (to stop capital arbitrage between books), what determines classification, and how the standardised and internal-models approaches sit within the framework.",
        typicalQuestionForms: [
          "'Why did the framework tighten the trading-/banking-book boundary?'",
          "'Which approach applies if a desk loses internal-model approval?'",
          "'What is the purpose of the standardised approach as a floor?'",
        ],
        mustKnow: [
          "The boundary limits arbitrage: instruments held for trading intent/short-term resale sit in the trading book (market-risk capital), banking-book items attract credit/other capital; reclassification is heavily restricted.",
          "There are two capital approaches — a standardised approach (SA) and an internal-models approach (IMA) — with SA acting as a mandatory floor/fallback and IMA requiring supervisory approval at desk level.",
          "A desk that fails ongoing tests reverts from IMA to the more punitive SA, so approval is not permanent.",
        ],
        scoringActions: [
          "Classify by trading intent and the boundary rules before assigning a capital regime.",
          "Treat SA as the fallback/floor whenever IMA approval is lost or unavailable.",
          "Link classification restrictions to the anti-arbitrage motive.",
        ],
      },
      {
        id: "tp-sa-sbm",
        title: "Standardised approach: sensitivities-based method, DRC, RRAO",
        priority: "critical",
        examinerFocus:
          "Whether you can assemble the SA charge from delta, vega and curvature under prescribed risk weights and correlations, and know that a default-risk charge (DRC) and residual add-on (RRAO) sit on top.",
        typicalQuestionForms: [
          "'Aggregate weighted sensitivities within a bucket given a correlation.'",
          "'What three components make up the sensitivities-based charge?'",
          "'What does the curvature charge capture that delta does not?'",
        ],
        mustKnow: [
          "SBM charge combines delta, vega and curvature risk; weighted sensitivity WS_k = RW_k·s_k, and within a bucket K = √(ΣWS_k² + ΣΣ_(k≠l) ρ_kl·WS_k·WS_l).",
          "Curvature captures gamma-type risk (nonlinearity beyond delta) via stressed up/down shocks; vega captures volatility risk.",
          "The total SA charge = SBM + default-risk charge (DRC, jump-to-default) + residual risk add-on (RRAO for exotic/gap risk).",
        ],
        scoringActions: [
          "Compute WS_k = RW_k·s_k first, then aggregate with the prescribed correlation inside the bucket.",
          "Remember the correlation cross term can lower the bucket charge when sensitivities offset.",
          "Add DRC and RRAO — do not report SBM alone as the SA charge.",
        ],
      },
      {
        id: "tp-ima-es",
        title: "Internal-models approach: ES 97.5% and liquidity horizons",
        priority: "critical",
        examinerFocus:
          "Whether you know the IMA risk measure is ES at 97.5% scaled by asset-class liquidity horizons (not flat √time to 10 days), plus a stressed calibration and the NMRF add-on.",
        typicalQuestionForms: [
          "'What confidence level and measure does the IMA use?'",
          "'How are liquidity horizons incorporated into the ES?'",
          "'Why is IMA capital calibrated to a stressed period?'",
        ],
        mustKnow: [
          "IMA uses expected shortfall at 97.5%, calibrated to a stressed period, replacing the earlier 99% VaR + stressed-VaR construction.",
          "Different risk factors have different liquidity horizons (e.g. 10 up to 120 days); the ES is built from incremental-horizon components rather than scaling a 10-day number by flat √time.",
          "Capital = a function of the modellable ES plus a separate stressed capital add-on (SES) for non-modellable risk factors.",
        ],
        scoringActions: [
          "State '97.5% ES, stressed calibration, liquidity-horizon scaling' for the IMA measure.",
          "Use the incremental liquidity-horizon aggregation, not a single √time factor, when asked.",
          "Add the NMRF/SES charge to the modellable ES for total IMA capital.",
        ],
      },
      {
        id: "tp-nmrf",
        title: "Non-modellable risk factors and eligibility",
        priority: "high",
        examinerFocus:
          "Whether you understand the risk-factor eligibility test (real-price observability), why failing it makes a factor non-modellable, and how NMRFs are capitalised via a stressed scenario add-on.",
        typicalQuestionForms: [
          "'What makes a risk factor non-modellable?'",
          "'How are NMRFs capitalised differently from modellable factors?'",
          "'Why do NMRFs typically attract more capital?'",
        ],
        mustKnow: [
          "A factor is modellable only if it passes a real-price observability test (enough genuine transactions/quotes over a window); otherwise it is a non-modellable risk factor (NMRF).",
          "NMRFs are excluded from the ES model and capitalised via a separate stressed-scenario add-on (SES), typically more conservative than the modelled ES treatment.",
          "Illiquid or sparsely traded factors (some long-dated, bespoke or emerging exposures) are the usual NMRFs, which is why data quality is a capital issue, not just a modelling one.",
        ],
        scoringActions: [
          "Test observability first; sparse real prices ⇒ NMRF.",
          "Capitalise NMRFs through the stressed add-on, separate from ES.",
          "Explain the extra capital as a penalty for unobservable/illiquid factors.",
        ],
      },
      {
        id: "tp-backtest-pla",
        title: "Backtesting and the P&L attribution test for desk approval",
        priority: "critical",
        examinerFocus:
          "Whether you can apply the exception-count backtest (Kupiec/traffic light) and describe the P&L attribution (PLA) test comparing risk-theoretical and hypothetical P&L, and the consequences of failure.",
        typicalQuestionForms: [
          "'How many exceptions push a desk into the amber/red zone?'",
          "'What two P&L series does the PLA test compare, and via which statistics?'",
          "'What happens to a desk that fails backtesting or PLA?'",
        ],
        mustKnow: [
          "Backtesting counts 99% VaR exceptions over ~250 days (expected ~2.5); the traffic light (green/amber/red) raises the multiplier in amber and threatens IMA loss in red.",
          "The PLA test compares the desk's risk-theoretical P&L (from the risk model's factors) with the hypothetical (front-office) P&L using metrics such as the Spearman correlation and the Kolmogorov-Smirnov statistic; poor alignment fails the test.",
          "A desk that fails backtesting or PLA can be pushed back to the standardised approach for its capital — a direct, punitive consequence.",
        ],
        scoringActions: [
          "Compute expected exceptions = (1−c)·T before mapping to a zone.",
          "Identify the two P&L series (risk-theoretical vs hypothetical) and the alignment statistics for PLA.",
          "State the SA fallback as the failure consequence.",
        ],
      },
      {
        id: "tp-validation",
        title: "Independent model validation and governance",
        priority: "medium",
        examinerFocus:
          "Whether you know validation must be independent of model development, and what it involves — conceptual soundness, benchmarking, outcome analysis and ongoing monitoring.",
        typicalQuestionForms: [
          "'Why must validation be independent of the developers?'",
          "'What does benchmarking add beyond backtesting?'",
          "'Which activity detects model performance decay over time?'",
        ],
        mustKnow: [
          "Validation must be organisationally independent from model development to provide effective challenge and avoid conflicts of interest.",
          "Core validation pillars: evaluation of conceptual soundness, ongoing monitoring (including backtesting), and outcomes analysis/benchmarking against alternative models or data.",
          "Benchmarking compares the model against independent alternatives to expose hidden assumptions; ongoing monitoring catches drift as markets change.",
        ],
        scoringActions: [
          "Insist on independence between builders and validators when a governance flaw is described.",
          "Separate 'conceptual soundness' (design) from 'outcomes analysis' (performance).",
          "Attribute detection of decay to ongoing monitoring, not one-off approval.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Regulatory-capital items reward precise recall of the framework's design plus small SBM/backtest calculations; aim to convert every 'which measure/level/component' item and the setup of any aggregation.",
      timeBudget:
        "~1.5 minutes per item; SBM aggregation and Kupiec-style calculations can take ~2 minutes — write the formula and the prescribed correlation before substituting.",
      answerSequence: [
        "Fix the regime: SA (sensitivities) vs IMA (ES) vs the DRC/RRAO/NMRF add-ons.",
        "For SA, compute weighted sensitivities then aggregate with the given correlation.",
        "For IMA, state 97.5% ES, stressed calibration, liquidity horizons and the NMRF add-on.",
        "For approval, count exceptions vs expected and recall the PLA series and failure consequence.",
      ],
      qualityChecks: [
        "Did I add DRC/RRAO (SA) or the NMRF/SES add-on (IMA), not just the core charge?",
        "Did I use 97.5% ES (IMA), not 99% VaR?",
        "Did I map the exception count to the correct traffic-light zone and consequence?",
      ],
    },
    studyNotes: [
      {
        id: "sn-framework",
        title: "The market-risk capital framework and the book boundary",
        testPointIds: ["tp-frtb-boundary", "tp-sa-sbm"],
        explanation: [
          "Market-risk capital exists because trading positions can lose value from moves in prices, rates, spreads and volatilities, and the framework's first job is to decide which positions are captured. The trading-/banking-book boundary does that. Instruments held with trading intent (short-term resale, hedging of trading positions, locking in arbitrage) sit in the trading book and attract market-risk capital; the rest sit in the banking book under credit and other regimes. The boundary was tightened precisely because a soft boundary let banks park positions in whichever book carried the lower charge — regulatory capital arbitrage — so reclassification is now tightly restricted and rare.",
          "Within the trading book, capital is computed under one of two approaches. The standardised approach (SA) uses prescribed risk weights and correlations and is required for all banks as a transparent floor and fallback. The internal-models approach (IMA) lets approved desks use their own expected-shortfall model, subject to supervisory approval and ongoing tests. Crucially, IMA approval is granted and monitored at the desk level and can be lost, at which point the desk reverts to the SA.",
          "This structure — a robust SA floor plus a conditional, test-dependent IMA — means a risk professional must know both regimes and the triggers that move a desk between them. Exam items often hinge on the fallback logic: fail the tests, lose IMA, capitalise under the more punitive SA.",
        ],
        keyRules: [
          "Trading intent ⇒ trading book ⇒ market-risk capital; boundary limits arbitrage.",
          "SA is the mandatory floor/fallback; IMA needs desk-level approval.",
          "Lose IMA approval ⇒ revert to SA.",
        ],
        formulas: [
          "Total SA charge = SBM + DRC + RRAO.",
          "SBM aggregates delta + vega + curvature risk.",
        ],
        workedProblem: {
          scenario:
            "A bank's exotic-options desk on IMA suffers a run of backtesting exceptions and fails its P&L attribution test. Trace the capital consequence and why the framework is built this way.",
          steps: [
            "IMA approval is desk-level and conditional on ongoing backtesting and PLA performance.",
            "Persistent exceptions push the desk into the amber/red backtesting zone, and a PLA failure independently signals the risk model does not track front-office P&L.",
            "Either failure can revoke the desk's IMA eligibility, forcing it onto the standardised approach.",
            "SA uses prescribed risk weights/correlations plus DRC and RRAO and is generally more punitive, so capital rises — the intended incentive to keep models accurate.",
          ],
          conclusion:
            "The desk loses IMA and is capitalised under the SA (SBM + DRC + RRAO), typically raising its capital; the design deliberately makes model failure expensive to preserve model discipline.",
          markingNotes: [
            "Credit for desk-level, conditional IMA approval and the SA fallback.",
            "Credit for noting SA is more punitive and the incentive rationale.",
          ],
        },
      },
      {
        id: "sn-sbm",
        title: "Standardised approach: building the SBM charge",
        testPointIds: ["tp-sa-sbm", "tp-frtb-boundary"],
        explanation: [
          "The sensitivities-based method turns a portfolio into a set of standardised risk sensitivities and applies prescribed weights and correlations, so two banks with the same book get the same charge. For each risk factor k you compute a weighted sensitivity WS_k = RW_k·s_k, where s_k is the position's sensitivity (e.g. PV01 for a rate, or a vega) and RW_k is the regulator's risk weight. Within a bucket the charge is K = √(ΣWS_k² + ΣΣ_(k≠l) ρ_kl·WS_k·WS_l), and buckets are then aggregated with cross-bucket correlations.",
          "Three risk classes feed the SBM: delta (linear sensitivity to the factor), vega (sensitivity to implied volatility) and curvature (a stressed up/down shock capturing gamma-type nonlinearity that delta misses). The prescribed correlations are deliberately conservative and, importantly, allow partial offset: opposing sensitivities inside a bucket reduce the charge through the negative cross term, but never as much as a bank's own internal correlations might suggest.",
          "The SBM is not the whole SA. On top sit the default-risk charge (DRC), which captures jump-to-default/gap risk that a smooth sensitivity model cannot, and the residual risk add-on (RRAO), a blunt charge for exotic features (correlation, behavioural, gap risks). A complete SA answer is SBM + DRC + RRAO.",
        ],
        keyRules: [
          "WS_k = RW_k·s_k; bucket K = √(ΣWS_k² + ΣΣρ_kl·WS_k·WS_l).",
          "Delta + vega + curvature are the three SBM classes.",
          "SA total = SBM + DRC + RRAO.",
        ],
        formulas: [
          "WS_k = RW_k·s_k.",
          "K_bucket = √(Σ_k WS_k² + Σ_(k≠l) ρ_kl·WS_k·WS_l).",
        ],
        workedProblem: {
          scenario:
            "Within one delta bucket a desk has two net weighted sensitivities WS_1 = +8 and WS_2 = −5 (in $m), with a prescribed intra-bucket correlation ρ = 0.4. Compute the bucket delta charge and explain the effect of the offset.",
          steps: [
            "Square terms: WS_1² + WS_2² = 8² + (−5)² = 64 + 25 = 89.",
            "Cross term: 2·ρ·WS_1·WS_2 = 2·0.4·8·(−5) = −32 (negative because the sensitivities have opposite signs).",
            "K = √(89 − 32) = √57 = 7.55 ($m).",
            "Without any offset the naive sum of magnitudes would be 13; the negative cross term recognises the partial hedge and lowers the charge to 7.55.",
          ],
          conclusion:
            "The bucket delta charge is √57 ≈ $7.55m; the opposing sensitivities create a negative cross term that reduces the charge below the $13m no-offset sum, illustrating the prescribed partial recognition of hedging.",
          markingNotes: [
            "Credit for the negative cross term from opposite-sign sensitivities.",
            "Charge must be √57 ≈ 7.55, not the 13 sum-of-magnitudes.",
          ],
        },
      },
      {
        id: "sn-ima",
        title: "Internal-models approach: ES, stress and liquidity horizons",
        testPointIds: ["tp-ima-es", "tp-nmrf"],
        explanation: [
          "The IMA risk measure is expected shortfall at 97.5%, calibrated to a stressed period. Two deliberate changes from the older regime sit here: the switch from 99% VaR to 97.5% ES (coherent and tail-sensitive, roughly equal in stringency for normal risks) and the move from a current-period calibration to a stressed calibration, so capital does not fall away in calm markets. The stressed calibration is implemented by scaling a full-history ES by the ratio of stressed to current ES on a reduced set of factors.",
          "Liquidity is built in through liquidity horizons rather than a single 10-day scaling. Risk factors are assigned horizons (from a short base up to much longer for illiquid factors), reflecting how long it would actually take to exit or hedge. The ES aggregates incremental-horizon components, so a portfolio's illiquid factors carry a longer effective horizon and more capital. This is why 'just scale 1-day ES by √10' is wrong for the IMA — the framework explicitly differentiates by liquidity.",
          "Finally, only factors that pass the observability test are allowed inside the ES model. Everything else is a non-modellable risk factor, capitalised through a separate stressed-scenario add-on (SES). Total IMA capital is therefore the modellable ES (with liquidity horizons) plus the NMRF add-on plus the default-risk charge — the ES model alone is not the capital number.",
        ],
        keyRules: [
          "IMA measure = 97.5% ES, stressed calibration.",
          "Liquidity horizons (incremental), not flat √10, drive the horizon.",
          "IMA capital = modellable ES + NMRF (SES) add-on + DRC.",
        ],
        formulas: [
          "ES_liq = √(ES(P;base)² + Σ_(j≥2) [ES(P,j)·√((LH_j − LH_(j−1))/base)]²).",
          "Simple √time (base case only): ES_h = ES_1·√h.",
        ],
        workedProblem: {
          scenario:
            "A desk's 1-day ES at 97.5% for its liquid factors is $1.0m. (a) Give the naive 10-day ES under flat √time scaling. (b) Explain why the IMA figure for a book with some illiquid factors would exceed this, and (c) how a non-modellable factor would be handled.",
          steps: [
            "(a) Flat √time: ES_10 = ES_1·√10 = 1.0m·3.162 = $3.16m.",
            "(b) The IMA assigns longer liquidity horizons to illiquid factors (e.g. 20–120 days), so the incremental-horizon aggregation adds capital beyond the 10-day base — the effective horizon is longer than 10 days for those factors.",
            "(c) A factor failing the real-price observability test is non-modellable; it is removed from the ES and capitalised separately through the stressed-scenario add-on (SES).",
            "Total IMA capital = the liquidity-horizon-scaled modellable ES + the NMRF (SES) add-on (+ DRC), so it exceeds the $3.16m naive figure.",
          ],
          conclusion:
            "Naive √time gives $3.16m, but the IMA exceeds it because illiquid factors carry longer liquidity horizons and non-modellable factors add a separate stressed charge; the ES model output alone understates required capital.",
          markingNotes: [
            "√10 scaling ≈ $3.16m computed correctly.",
            "Credit for longer liquidity horizons raising capital AND the NMRF/SES add-on.",
          ],
        },
      },
      {
        id: "sn-backtest-pla",
        title: "Backtesting and P&L attribution for desk approval",
        testPointIds: ["tp-backtest-pla", "tp-ima-es"],
        explanation: [
          "Backtesting is the frequency check: over a rolling window (about 250 days) you count how often the actual loss exceeded the 99% VaR. At 99% you expect roughly 2.5 exceptions a year, and the supervisory traffic light maps the count to consequences — green (few exceptions) leaves the multiplier at its floor, amber raises the capital multiplier progressively, and red signals the model is unreliable and can trigger loss of IMA. The Kupiec proportion-of-failures test formalises this as a likelihood-ratio comparison of the observed exception rate against the target, tested against a chi-square critical value.",
          "The P&L attribution (PLA) test is the quality check that backtesting cannot provide. It compares two P&L series for each desk: the risk-theoretical P&L generated using only the risk model's factors, and the hypothetical (front-office) P&L from full pricing with market moves. If the risk model captures the desk's true drivers these series should track closely; the test uses alignment metrics such as the Spearman rank correlation and the Kolmogorov-Smirnov distance to classify the desk into pass/amber/fail zones. A desk can pass backtesting on breach counts yet fail PLA because its risk model omits material factors.",
          "The consequences bind. A desk in the red backtesting zone or failing PLA can lose IMA eligibility and be pushed onto the standardised approach, generally raising its capital. This is why validation, factor coverage and data quality are treated as capital issues: a technically 'accurate enough' VaR count is not sufficient if the model does not explain the desk's P&L.",
        ],
        keyRules: [
          "Expected 99% exceptions over 250 days ≈ 2.5; traffic light green/amber/red.",
          "PLA compares risk-theoretical vs hypothetical P&L via Spearman and KS.",
          "Red zone or PLA failure ⇒ possible loss of IMA ⇒ SA capital.",
        ],
        formulas: [
          "Expected exceptions = (1 − c)·T.",
          "Kupiec LR_POF = −2ln[(1−p)^(T−N)p^N] + 2ln[(1−N/T)^(T−N)(N/T)^N] ~ χ²(1).",
        ],
        workedProblem: {
          scenario:
            "A desk records N = 8 exceptions of its 99% 1-day VaR over T = 250 days. Apply the Kupiec POF test (χ²(1) 5% critical value 3.84) and state the likely supervisory consequence.",
          steps: [
            "Expected exceptions = 0.01·250 = 2.5, so 8 is well above target (observed rate p̂ = 8/250 = 0.032).",
            "First term: −2·ln[(0.99)^242·(0.01)^8] = −2·[242·ln0.99 + 8·ln0.01] = −2·[−2.4322 − 36.8414] = −2·(−39.2736) = 78.547.",
            "Second term: +2·ln[(0.968)^242·(0.032)^8] = 2·[242·ln0.968 + 8·ln0.032] = 2·[−7.8706 − 27.5361] = 2·(−35.4067) = −70.813.",
            "LR_POF = 78.547 − 70.813 = 7.73 > 3.84, so reject model adequacy at 5%; 8 exceptions also sits in the amber/red backtesting zone.",
          ],
          conclusion:
            "The Kupiec statistic ≈ 7.73 exceeds the 3.84 critical value, so the model is rejected at the 5% level; combined with a traffic-light amber/red classification the desk faces a higher capital multiplier and, if sustained, loss of IMA.",
          markingNotes: [
            "Expected exceptions 2.5 and correct Kupiec LR ≈ 7.7.",
            "Compares to χ²(1) = 3.84 and states the capital-multiplier / IMA consequence.",
          ],
        },
      },
      {
        id: "sn-validation",
        title: "Independent validation, benchmarking and monitoring",
        testPointIds: ["tp-validation", "tp-nmrf"],
        explanation: [
          "Model validation is the independent challenge that keeps a risk model honest, and independence is the load-bearing word: validators must be organisationally separate from the developers so that they have both the incentive and the authority to disagree. A validation team reporting to the model's owners cannot provide effective challenge, and that governance flaw is a favourite exam trap.",
          "Validation rests on three pillars. Conceptual soundness examines whether the model's design, assumptions and data are appropriate for its use — before any performance data exist. Ongoing monitoring, including backtesting and the PLA test, tracks whether the model keeps performing as markets evolve, catching drift and regime change. Outcomes analysis and benchmarking compare the model's numbers with realised outcomes and with independent alternative models or data, exposing hidden assumptions that a single model would never reveal about itself.",
          "These activities connect directly to capital. A model whose factors fail observability tests pushes exposures into the NMRF bucket; a model that fails ongoing monitoring or benchmarking can lose approval. Validation is therefore not a one-off sign-off at go-live but a continuous governance process, and the strongest answers frame it that way rather than as a documentation exercise.",
        ],
        keyRules: [
          "Validation must be independent of development.",
          "Three pillars: conceptual soundness, ongoing monitoring, outcomes/benchmarking.",
          "Benchmarking exposes hidden assumptions; monitoring catches drift.",
        ],
        formulas: [
          "Effective challenge requires organisational independence.",
          "Validation is continuous, not a one-off approval.",
        ],
        workedProblem: {
          scenario:
            "A bank's VaR model was signed off at launch by a team inside the trading desk and has not been re-examined since; it recently began underpredicting losses. Diagnose the governance failures and prescribe fixes.",
          steps: [
            "The sign-off team sits inside the desk, so validation is not independent — no effective challenge and a clear conflict of interest.",
            "Validation happened only at launch, so there is no ongoing monitoring to detect the drift now showing up as underprediction.",
            "There is no benchmarking against alternative models or outcomes analysis, so the deterioration went unnoticed until losses appeared.",
            "Fixes: move validation to an independent function; institute ongoing backtesting/PLA monitoring; add benchmarking and periodic re-validation of conceptual soundness as markets change.",
          ],
          conclusion:
            "The failures are lack of independence, no ongoing monitoring, and no benchmarking; the remedy is an independent validation function running continuous monitoring, outcomes analysis and benchmarking rather than a one-off launch sign-off.",
          markingNotes: [
            "Independence failure identified as the primary flaw.",
            "Prescribes ongoing monitoring AND benchmarking, not just re-documentation.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pp-p2m3-1",
        testPointIds: ["tp-sa-sbm", "tp-frtb-boundary"],
        style: "SBM calculation",
        question:
          "In a single vega bucket a desk has weighted sensitivities WS_1 = +6, WS_2 = +4 and WS_3 = −3 (in $m), with a uniform prescribed intra-bucket correlation ρ = 0.5. Compute the bucket charge and name the two SA components that would be added on top.",
        answerPlan: [
          "Sum the squared weighted sensitivities.",
          "Add all pairwise cross terms with ρ = 0.5.",
          "Take the root and name DRC and RRAO.",
        ],
        modelAnswer:
          "Squares: 6² + 4² + (−3)² = 36 + 16 + 9 = 61. Pairwise cross terms (each 2·ρ·WS_i·WS_j): (1,2) 2·0.5·6·4 = 24; (1,3) 2·0.5·6·(−3) = −18; (2,3) 2·0.5·4·(−3) = −12; sum = 24 − 18 − 12 = −6. K = √(61 − 6) = √55 = 7.42 ($m). On top of the sensitivities-based charge the SA adds the default-risk charge (DRC, jump-to-default) and the residual risk add-on (RRAO) for exotic/gap risks, so SA total = SBM + DRC + RRAO.",
        markingGuide: [
          "Correct squares (61) and all three cross terms summing to −6.",
          "Bucket charge K = √55 ≈ $7.42m.",
          "Names DRC and RRAO as the additional SA components.",
        ],
      },
      {
        id: "pp-p2m3-2",
        testPointIds: ["tp-ima-es", "tp-nmrf"],
        style: "Conceptual / regulatory",
        question:
          "Contrast the IMA and SA capital treatments for a desk trading some illiquid, sparsely quoted structured products. Address the risk measure, horizon treatment and how the illiquid factors are handled.",
        answerPlan: [
          "State IMA measure and stressed calibration.",
          "Contrast liquidity horizons with SA's prescribed weights.",
          "Explain NMRF treatment of the illiquid factors.",
        ],
        modelAnswer:
          "Under the IMA the desk would capitalise using expected shortfall at 97.5% calibrated to a stressed period, with risk factors scaled by their liquidity horizons (longer for illiquid factors) rather than a flat 10-day √time. The sparsely quoted factors would likely fail the real-price observability test, making them non-modellable; they would be removed from the ES and capitalised through a separate stressed-scenario add-on (SES), which is typically conservative. Under the SA the desk instead uses the sensitivities-based method (delta, vega, curvature with prescribed weights/correlations) plus the default-risk charge and residual risk add-on; the SA does not model the factors at all and is generally more punitive, which is where the desk would land if it lacked or lost IMA approval.",
        markingGuide: [
          "IMA = 97.5% ES, stressed calibration, liquidity horizons.",
          "Illiquid factors ⇒ NMRF ⇒ stressed add-on (SES).",
          "SA = SBM + DRC + RRAO, prescribed and more punitive.",
        ],
      },
      {
        id: "pp-p2m3-3",
        testPointIds: ["tp-backtest-pla", "tp-validation"],
        style: "Backtesting + governance",
        question:
          "A desk passes its 99% VaR backtest (3 exceptions in 250 days) but fails the P&L attribution test. (a) Explain how both can be true. (b) State the likely capital consequence. (c) What validation activity should have flagged the problem earlier?",
        answerPlan: [
          "Distinguish breach-frequency (backtest) from P&L tracking (PLA).",
          "State the SA fallback consequence.",
          "Link to ongoing monitoring/benchmarking.",
        ],
        modelAnswer:
          "(a) Backtesting only checks how often losses exceed VaR — 3 exceptions is within the green zone (expected ~2.5). PLA instead checks whether the risk-theoretical P&L (risk-model factors) tracks the hypothetical front-office P&L; a desk can have the right number of breaches yet a risk model that omits material factors, so the two P&L series diverge and PLA fails (poor Spearman correlation / large KS distance). (b) Failing PLA can strip the desk of IMA eligibility and push it onto the standardised approach, generally raising capital. (c) Ongoing monitoring and benchmarking by an independent validation function — comparing the risk model's factor coverage and P&L against alternatives — should have exposed the missing factors before the formal PLA failure.",
        markingGuide: [
          "(a) Correctly separates breach-frequency from P&L tracking, with PLA metrics.",
          "(b) SA fallback / higher capital.",
          "(c) Independent ongoing monitoring/benchmarking as the earlier safeguard.",
        ],
      },
    ],
  }),

  // ======================================================================
  // frm-p2-m4 — Credit Risk: Default risk, ratings & credit scoring
  // ======================================================================
  "frm-p2-m4": examDepth({
    testPoints: [
      {
        id: "tp-merton",
        title: "Merton structural model, distance to default and PD",
        priority: "critical",
        examinerFocus:
          "Whether you can treat equity as a call on assets, compute distance to default and translate it into a PD, and state the model's assumptions and limits.",
        typicalQuestionForms: [
          "'Compute distance to default given asset value, debt, drift and asset volatility.'",
          "'Why is equity a call option on the firm's assets?'",
          "'Which Merton assumption is least realistic?'",
        ],
        mustKnow: [
          "Equity = call on assets with strike = face value of debt maturing at T; default occurs if asset value V_T < debt D.",
          "Distance to default DD = [ln(V/D) + (μ − ½σ_V²)T] / (σ_V·√T); model PD = N(−DD).",
          "Assumptions: single zero-coupon debt, lognormal assets, no early default; real firms have complex, rolling debt and can default before maturity, so structural PDs are approximate.",
        ],
        scoringActions: [
          "Plug into DD carefully: the drift term uses (μ − ½σ_V²), and σ_V is asset (not equity) volatility.",
          "Convert DD to PD with the normal CDF of −DD.",
          "Use the risk-free rate r in place of μ when the question asks for a risk-neutral PD.",
        ],
      },
      {
        id: "tp-reduced-form",
        title: "Reduced-form (hazard-rate) models and spreads",
        priority: "critical",
        examinerFocus:
          "Whether you can extract a risk-neutral default intensity from a credit spread, compute survival and cumulative default probabilities, and contrast the approach with structural models.",
        typicalQuestionForms: [
          "'Given a spread and recovery, estimate the default intensity.'",
          "'Compute the cumulative PD over n years from a constant hazard rate.'",
          "'How do structural and reduced-form models differ conceptually?'",
        ],
        mustKnow: [
          "Reduced-form models treat default as an unpredictable jump with intensity (hazard) λ; survival to t is e^(−λt) and cumulative PD by t is 1 − e^(−λt).",
          "Approximate risk-neutral intensity from a spread: λ ≈ spread/(1 − R), where R is recovery.",
          "Structural models tie default to the firm's asset value/capital structure; reduced-form models calibrate default intensity to market spreads without modelling the balance sheet.",
        ],
        scoringActions: [
          "Use λ ≈ s/(1 − R) for a quick risk-neutral intensity, and state it is risk-neutral.",
          "Compute cumulative PD as 1 − e^(−λt), not λ·t (except as a small-λ approximation).",
          "Flag that spreads give risk-neutral, not real-world, default probabilities.",
        ],
      },
      {
        id: "tp-ratings-transition",
        title: "Ratings, transition matrices and cumulative PD",
        priority: "high",
        examinerFocus:
          "Whether you can use a one-year transition matrix to build multi-year cumulative default probabilities and distinguish through-the-cycle from point-in-time ratings.",
        typicalQuestionForms: [
          "'Compute the 2-year cumulative default probability from a 1-year transition matrix.'",
          "'What is the difference between point-in-time and through-the-cycle ratings?'",
          "'Why are transition matrices assumed (approximately) Markov?'",
        ],
        mustKnow: [
          "Multi-year transition probabilities come from multiplying the one-year matrix (Markov assumption): the n-year matrix is the one-year matrix raised to the n-th power.",
          "Cumulative PD over n years = 1 − probability of surviving all n years; marginal PD in year k is the incremental default probability that year.",
          "Through-the-cycle ratings are deliberately stable across the business cycle; point-in-time measures move with current conditions, so PIT PDs are more volatile.",
        ],
        scoringActions: [
          "Build cumulative PD by summing default paths, or as 1 − survival product, not by adding raw one-year PDs across changing states.",
          "Respect the Markov assumption when told to use matrix multiplication.",
          "Label a stable rating as TTC and a condition-sensitive one as PIT.",
        ],
      },
      {
        id: "tp-rn-vs-rw",
        title: "Risk-neutral vs real-world default probabilities",
        priority: "high",
        examinerFocus:
          "Whether you know risk-neutral PDs (from market prices) exceed real-world PDs (from historical experience) and can explain and use the distinction correctly.",
        typicalQuestionForms: [
          "'Why does a PD implied from a bond spread exceed the historical default rate?'",
          "'Which PD is appropriate for pricing versus for expected-loss provisioning?'",
          "'What drives the wedge between the two PDs?'",
        ],
        mustKnow: [
          "Risk-neutral PDs are extracted from market prices/spreads and embed a risk premium, so they exceed real-world (physical) PDs estimated from historical default frequencies.",
          "Use risk-neutral PDs for pricing and hedging (consistent with market prices); use real-world PDs for economic-capital, expected-loss and scenario/loss forecasting.",
          "The wedge reflects credit-risk premia, liquidity premia and default-risk aversion, and is larger for lower-rated names.",
        ],
        scoringActions: [
          "Identify whether the PD came from prices (risk-neutral) or history (real-world) before using it.",
          "Match the PD to the task: pricing ⇒ risk-neutral; provisioning/capital ⇒ real-world.",
          "Explain the gap as risk/liquidity premia, not as a mistake.",
        ],
      },
      {
        id: "tp-scoring",
        title: "Credit scoring and model discrimination (ROC/AUC, KS)",
        priority: "medium",
        examinerFocus:
          "Whether you can describe scoring models and evaluate their discriminatory power with the ROC/AUC and the Kolmogorov-Smirnov statistic, and read a simple KS table.",
        typicalQuestionForms: [
          "'What does the AUC measure in a scoring model?'",
          "'Compute the KS statistic from cumulative good/bad distributions.'",
          "'How do you interpret an AUC of 0.5 versus 0.8?'",
        ],
        mustKnow: [
          "Scoring models rank borrowers by default likelihood (e.g. logistic regression or discriminant analysis); the score is used for cut-offs and pricing.",
          "AUC (area under the ROC curve) measures discrimination: 0.5 = no better than random, 1.0 = perfect; higher is better.",
          "The KS statistic is the maximum gap between the cumulative distributions of scores for defaulters (bads) and non-defaulters (goods); a larger KS means better separation.",
        ],
        scoringActions: [
          "Read AUC as ranking power: near 0.5 is useless, higher is stronger.",
          "Compute KS as max |cumulative bad% − cumulative good%| across score bands.",
          "Do not confuse discrimination (ranking) with calibration (level accuracy of PDs).",
        ],
      },
      {
        id: "tp-recovery-el",
        title: "Recovery, LGD and expected loss",
        priority: "high",
        examinerFocus:
          "Whether you can compute expected loss from PD, LGD and EAD, and explain what drives recovery and why PD-recovery correlation matters in downturns.",
        typicalQuestionForms: [
          "'Compute expected loss given PD, LGD and EAD.'",
          "'What drives recovery rates?'",
          "'Why is assuming independent PD and recovery dangerous?'",
        ],
        mustKnow: [
          "Expected loss EL = PD × LGD × EAD, with LGD = 1 − recovery rate.",
          "Recovery depends on seniority, collateral, industry and the credit cycle; senior secured recovers more than subordinated unsecured.",
          "PD and recovery are negatively correlated in downturns (defaults rise while recoveries fall), so treating them as independent understates tail credit losses.",
        ],
        scoringActions: [
          "Convert recovery to LGD before applying EL = PD·LGD·EAD.",
          "Adjust recovery for seniority/collateral and the cycle, not a flat 40%.",
          "Flag PD-recovery correlation as an amplifier of downturn losses.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Credit risk is ~25% of Part II and formula-rich; aim to convert every Merton DD, hazard-rate and EL calculation and to read transition-matrix and KS items correctly.",
      timeBudget:
        "~1.5 minutes per item; Merton DD and multi-year transition calculations may take ~2 minutes — write the formula and identify risk-neutral vs real-world before substituting.",
      answerSequence: [
        "Identify the model family (structural, reduced-form, ratings, scoring) the item targets.",
        "State the governing formula and whether the PD is risk-neutral or real-world.",
        "Substitute in consistent units (recovery vs LGD; annual vs cumulative).",
        "Sanity-check: PD in [0,1], risk-neutral > real-world, EL scales with all three inputs.",
      ],
      qualityChecks: [
        "Did I use asset volatility and the (μ − ½σ²) drift in DD?",
        "Did I compute cumulative PD as 1 − survival, not a sum of annual PDs?",
        "Did I convert recovery to LGD before EL = PD·LGD·EAD?",
      ],
    },
    studyNotes: [
      {
        id: "sn-merton",
        title: "The Merton model: equity as an option on assets",
        testPointIds: ["tp-merton", "tp-rn-vs-rw"],
        explanation: [
          "Merton's insight is that limited liability makes equity a call option on the firm's assets. If a firm has assets worth V and a single zero-coupon debt of face value D maturing at T, then at maturity equity holders receive max(V_T − D, 0): they keep the upside and walk away (default) if assets fall below the debt. Debt holders correspondingly hold a risk-free bond minus a put — they are short the option that lets shareholders default. This reframes default as the option finishing out of the money.",
          "The probability of that happening is captured by the distance to default, DD = [ln(V/D) + (μ − ½σ_V²)T] / (σ_V·√T), which measures how many standard deviations of asset value sit between today's assets and the default point, adjusting for expected drift and the volatility drag ½σ_V². The model PD is then N(−DD): the normal probability that assets end below D. Note two exam trip-wires — σ_V is asset volatility (which must usually be inferred from equity volatility, since assets are unobservable), and using the risk-free rate r instead of the real drift μ gives the risk-neutral PD used for pricing.",
          "The model's assumptions are also its weaknesses: a single zero-coupon debt, lognormal assets, no default before T, and constant volatility. Real firms have layered, rolling debt and can default early, so structural PDs are approximate; commercial variants (KMV-type) map DD to empirical default frequencies rather than trusting N(−DD) literally. Still, the framework is the exam's anchor for linking leverage, asset volatility and default.",
        ],
        keyRules: [
          "Equity = call on assets, strike = face value of debt.",
          "DD uses asset volatility σ_V and drift (μ − ½σ_V²).",
          "Real-world PD uses μ; risk-neutral PD uses r.",
        ],
        formulas: [
          "DD = [ln(V/D) + (μ − ½σ_V²)T] / (σ_V·√T).",
          "PD = N(−DD).",
        ],
        workedProblem: {
          scenario:
            "A firm has asset value V = $120m, zero-coupon debt face value D = $100m maturing in T = 1 year, asset drift μ = 8% and asset volatility σ_V = 25%. Compute the distance to default and the (real-world) 1-year PD.",
          steps: [
            "ln(V/D) = ln(120/100) = ln(1.2) = 0.18232.",
            "Drift term = (μ − ½σ_V²)T = (0.08 − 0.5·0.25²)·1 = 0.08 − 0.03125 = 0.04875.",
            "DD = (0.18232 + 0.04875) / (0.25·√1) = 0.23107 / 0.25 = 0.9243.",
            "PD = N(−0.9243) ≈ N(−0.92) ≈ 0.1788 ⇒ about 17.9%.",
          ],
          conclusion:
            "Distance to default ≈ 0.92 standard deviations, giving a real-world 1-year PD of roughly 18%; substituting the risk-free rate r (typically below the real drift μ) for μ lowers the drift term, raises the PD and yields the risk-neutral PD used for pricing.",
          markingNotes: [
            "Drift term must use (μ − ½σ²), not μ alone.",
            "PD = N(−DD); a positive DD gives a PD below 50%.",
          ],
        },
      },
      {
        id: "sn-reduced-form",
        title: "Reduced-form models: intensity, survival and spreads",
        testPointIds: ["tp-reduced-form", "tp-rn-vs-rw"],
        explanation: [
          "Reduced-form (intensity) models take the opposite philosophy to Merton: they do not model the balance sheet at all. Default is an unpredictable jump arriving with intensity (hazard rate) λ, like a Poisson event. With a constant λ, the probability of surviving to time t is e^(−λt), so the cumulative default probability by t is 1 − e^(−λt), and the instantaneous conditional default rate is λ. This makes the models easy to calibrate directly to market prices, which is their main appeal.",
          "The key calibration link is the credit triangle: for a bond or CDS, spread ≈ λ·(1 − R), where R is the recovery rate, because the spread must compensate for expected loss per unit time. Rearranged, λ ≈ spread/(1 − R) gives a quick risk-neutral default intensity from an observed spread. Because it comes from prices, this λ is risk-neutral — it embeds a risk premium and will exceed the physical default intensity implied by historical experience.",
          "Structural and reduced-form models are complements, not rivals. Structural models explain why a firm defaults (leverage, asset volatility) and are useful for capital-structure and equity-linked analysis; reduced-form models are better for pricing and marking credit instruments because they fit market spreads by construction. A common exam theme is choosing the right tool: reduced-form for pricing/marking, structural for economic default analysis.",
        ],
        keyRules: [
          "Survival to t = e^(−λt); cumulative PD = 1 − e^(−λt).",
          "Credit triangle: spread ≈ λ·(1 − R) ⇒ λ ≈ spread/(1 − R).",
          "Spread-implied λ is risk-neutral.",
        ],
        formulas: [
          "λ ≈ spread/(1 − R).",
          "Cumulative PD(t) = 1 − e^(−λt).",
        ],
        workedProblem: {
          scenario:
            "A 5-year CDS trades at a spread of 150 bp with an assumed recovery rate of 40%. (a) Estimate the risk-neutral annual default intensity. (b) Compute the 1-year and cumulative 5-year risk-neutral default probabilities.",
          steps: [
            "(a) λ ≈ spread/(1 − R) = 0.0150/(1 − 0.40) = 0.0150/0.60 = 0.0250 ⇒ 2.5% per year (risk-neutral).",
            "(b) 1-year PD = 1 − e^(−λ·1) = 1 − e^(−0.025) = 1 − 0.97531 = 0.02469 ⇒ about 2.47%.",
            "5-year survival = e^(−λ·5) = e^(−0.125) = 0.88250; cumulative 5-year PD = 1 − 0.88250 = 0.11750 ⇒ about 11.75%.",
            "These are risk-neutral (spread-implied) probabilities and exceed the real-world default rate for a comparable name.",
          ],
          conclusion:
            "The spread implies a risk-neutral intensity of 2.5% per year, a 1-year PD of ~2.47% and a cumulative 5-year PD of ~11.75%; all are risk-neutral and sit above the historical (real-world) default rate.",
          markingNotes: [
            "λ = spread/(1 − R); do not forget the recovery adjustment.",
            "Cumulative PD via 1 − e^(−λt); state that the figures are risk-neutral.",
          ],
        },
      },
      {
        id: "sn-transition",
        title: "Ratings and transition matrices: cumulative default",
        testPointIds: ["tp-ratings-transition", "tp-rn-vs-rw"],
        explanation: [
          "Rating agencies summarise credit quality in a rating and publish transition matrices: the probability that a name in rating i migrates to rating j (including default) over one year. Under the common Markov assumption, migrations are memoryless, so the n-year transition matrix is just the one-year matrix raised to the n-th power. That lets you turn a single one-year matrix into any horizon.",
          "For a multi-year cumulative default probability you track every path that ends in default. Over two years, a name defaults if it defaults in year one, or survives year one in some rating and then defaults in year two. Equivalently, cumulative PD over n years = 1 − probability of surviving (never defaulting) across all n years. The marginal PD in year k is the extra default probability contributed by that year, which typically rises then flattens for investment-grade names and can fall for distressed names that either die or recover.",
          "Two conceptual points recur. First, ratings are usually through-the-cycle: agencies deliberately hold them stable across the business cycle, so a TTC PD is smoother than a point-in-time PD that moves with current conditions. Second, real transition matrices are only approximately Markov — rating momentum (a recently downgraded name is more likely to be downgraded again) violates memorylessness — so matrix powers are a useful approximation, not an exact law.",
        ],
        keyRules: [
          "n-year matrix = (one-year matrix)^n under the Markov assumption.",
          "Cumulative PD(n) = 1 − probability of surviving all n years.",
          "Ratings are through-the-cycle; PIT PDs are more volatile.",
        ],
        formulas: [
          "P(n) = P(1)^n (Markov).",
          "Marginal year-k PD = cumulative PD(k) − cumulative PD(k−1).",
        ],
        workedProblem: {
          scenario:
            "A rating-B name has a one-year transition: stay B 90%, upgrade to A 5%, default 5%. Rating A has: stay A 94%, downgrade to B 5%, default 1%. Compute the 2-year cumulative default probability for the B name and the marginal second-year PD.",
          steps: [
            "Year-1 default = 5%. Survivors: 90% remain B, 5% become A (the 5% default drops out).",
            "Year-2 default from survivors = P(B→B)·P(B→D) + P(B→A)·P(A→D) = 0.90·0.05 + 0.05·0.01 = 0.0450 + 0.0005 = 0.0455.",
            "2-year cumulative PD = year-1 PD + year-2 default from survivors = 0.05 + 0.0455 = 0.0955 ⇒ 9.55%.",
            "Marginal second-year PD (unconditional) = 0.0455 ⇒ 4.55%.",
          ],
          conclusion:
            "The B name has a 2-year cumulative default probability of about 9.55%, with a marginal second-year contribution of 4.55%, obtained by rolling survivors through the second-year transition rather than doubling the one-year PD.",
          markingNotes: [
            "Only survivors (non-defaulters) roll into year two.",
            "Cumulative PD = year-1 + survivor-weighted year-2 default; do not simply add 5% + 5%.",
          ],
        },
      },
      {
        id: "sn-rn-rw",
        title: "Risk-neutral versus real-world default probabilities",
        testPointIds: ["tp-rn-vs-rw", "tp-reduced-form"],
        explanation: [
          "Every credit PD is one of two species, and mixing them is a classic error. Real-world (physical) PDs are estimated from historical default frequencies — how often BB names actually defaulted — and answer 'how likely is default to happen?'. Risk-neutral PDs are extracted from market prices (bond spreads, CDS) and answer 'what default probability is consistent with these prices?'. Because investors demand compensation for bearing credit risk, the price-implied probability is inflated: risk-neutral PD > real-world PD, and the gap widens for lower-rated, less liquid names.",
          "The wedge is not a mistake; it is the sum of premia. Investors are risk-averse to default losses (especially systematic, hard-to-diversify credit losses), and they charge liquidity premia for holding credit instruments. Both premia are embedded in spreads, so the spread-implied intensity λ ≈ spread/(1 − R) overstates the frequency at which defaults actually occur. Stripping the premia out to get a real-world PD requires historical data or a model of the market price of risk.",
          "Use the right species for the task. Pricing, marking and hedging credit instruments must use risk-neutral PDs, because those are consistent with the market prices you are trading against. Economic-capital, expected-loss provisioning and stress/loss forecasting should use real-world PDs, because they ask what losses will actually be incurred. An answer that prices a CDS off historical default rates, or provisions off spread-implied PDs, is making the canonical mistake.",
        ],
        keyRules: [
          "Risk-neutral PD (from prices) > real-world PD (from history).",
          "Pricing/hedging ⇒ risk-neutral; capital/provisioning ⇒ real-world.",
          "The gap = credit + liquidity risk premia; larger for weaker names.",
        ],
        formulas: [
          "Risk-neutral λ ≈ spread/(1 − R).",
          "Real-world PD from historical default frequencies.",
        ],
        workedProblem: {
          scenario:
            "A BBB bond trades at a 120 bp spread (recovery 40%), while the historical one-year default rate for BBB names is about 0.25%. Reconcile the two figures and state which to use for pricing and which for provisioning.",
          steps: [
            "Spread-implied risk-neutral intensity λ ≈ 0.0120/(1 − 0.40) = 0.0120/0.60 = 0.0200 ⇒ 2.0% per year.",
            "Risk-neutral 1-year PD ≈ 1 − e^(−0.02) ≈ 1.98%, far above the ~0.25% historical (real-world) rate.",
            "The gap (~1.7pp) reflects credit-risk and liquidity premia demanded by investors, not a data error.",
            "Use the ~2% risk-neutral PD for pricing/hedging the bond; use the ~0.25% real-world PD for expected-loss provisioning and economic capital.",
          ],
          conclusion:
            "The spread implies a ~2% risk-neutral PD versus a ~0.25% real-world PD; the difference is a risk/liquidity premium. Price and hedge off the risk-neutral figure, but provision and hold capital off the real-world figure.",
          markingNotes: [
            "Computes risk-neutral λ from the spread and contrasts with the historical rate.",
            "Correctly assigns risk-neutral to pricing and real-world to provisioning/capital.",
          ],
        },
      },
      {
        id: "sn-scoring-el",
        title: "Credit scoring, discrimination and expected loss",
        testPointIds: ["tp-scoring", "tp-recovery-el"],
        explanation: [
          "Credit-scoring models rank borrowers by default likelihood, usually via logistic regression (a PD directly) or discriminant analysis (a score). The two things you must be able to judge are discrimination — does the score separate future defaulters from non-defaulters? — and calibration — are the predicted PDs at the right level? They are different: a model can rank perfectly yet be miscalibrated, and vice versa. The exam mostly tests discrimination.",
          "Two discrimination metrics dominate. The ROC curve plots the true-positive rate against the false-positive rate as the cut-off varies, and the area under it (AUC) summarises ranking power: 0.5 is random, 1.0 is perfect, and typical useful models sit well above 0.5. The Kolmogorov-Smirnov statistic is the maximum vertical gap between the cumulative score distributions of bads (defaulters) and goods (non-defaulters); a larger KS means the score pushes bads and goods further apart. Both reward separation, not the absolute PD level.",
          "Discrimination feeds the loss calculation but does not complete it. Expected loss is EL = PD × LGD × EAD, where LGD = 1 − recovery. Recovery, and hence LGD, depends on seniority, collateral, industry and the cycle, so a flat 40% recovery is a modelling convenience, not a fact. The sharpest point is that PD and recovery are negatively correlated in downturns — more firms default just as collateral values and recoveries fall — so assuming independence understates tail losses and downturn LGDs (used in regulatory capital) exist precisely to counter that.",
        ],
        keyRules: [
          "AUC: 0.5 random, 1.0 perfect; measures ranking, not level.",
          "KS = max |cumulative bad% − cumulative good%|.",
          "EL = PD × LGD × EAD, LGD = 1 − recovery.",
        ],
        formulas: [
          "EL = PD × LGD × EAD.",
          "KS = max_k |F_bad(k) − F_good(k)|.",
        ],
        workedProblem: {
          scenario:
            "A scorecard sorts accounts into three score bands. Cumulative share of bads by band is 55%, 85%, 100%; cumulative share of goods is 20%, 55%, 100%. (a) Compute the KS statistic. (b) A $10m senior secured exposure has PD 3% and expected recovery 60% — compute its expected loss.",
          steps: [
            "(a) Band gaps |bad − good|: band 1 = |55 − 20| = 35; band 2 = |85 − 55| = 30; band 3 = |100 − 100| = 0.",
            "KS = max(35, 30, 0) = 35 percentage points (0.35) at the first band.",
            "(b) LGD = 1 − recovery = 1 − 0.60 = 0.40.",
            "EL = PD × LGD × EAD = 0.03 × 0.40 × $10m = $0.12m = $120,000.",
          ],
          conclusion:
            "The scorecard's KS is 35% (strong separation, occurring at the first band), and the exposure's expected loss is $120,000; note that in a downturn PD-recovery correlation would raise LGD and push EL above this base figure.",
          markingNotes: [
            "KS is the maximum gap across bands (35), not the last or the sum.",
            "Convert recovery to LGD before EL = PD·LGD·EAD; EL = $120k.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pp-p2m4-1",
        testPointIds: ["tp-merton", "tp-rn-vs-rw"],
        style: "Merton calculation",
        question:
          "A firm has assets V = $200m, zero-coupon debt D = $150m due in T = 2 years, asset drift μ = 10% and asset volatility σ_V = 30%. Compute the distance to default and the real-world 2-year PD, and state how you would obtain the risk-neutral PD.",
        answerPlan: [
          "Compute ln(V/D) and the drift term.",
          "Compute DD and PD = N(−DD).",
          "Explain the r-for-μ substitution.",
        ],
        modelAnswer:
          "ln(V/D) = ln(200/150) = ln(1.3333) = 0.28768. Drift term = (μ − ½σ_V²)T = (0.10 − 0.5·0.09)·2 = (0.10 − 0.045)·2 = 0.055·2 = 0.110. Denominator = σ_V·√T = 0.30·√2 = 0.30·1.41421 = 0.42426. DD = (0.28768 + 0.110)/0.42426 = 0.39768/0.42426 = 0.9374. PD = N(−0.9374) ≈ N(−0.94) ≈ 0.1736, about 17.4%. To get the risk-neutral PD, replace the real drift μ with the risk-free rate r in the numerator (the drift term becomes (r − ½σ_V²)T) and recompute N(−DD); since typically r < μ the risk-neutral PD is higher.",
        markingGuide: [
          "Correct DD ≈ 0.94 using (μ − ½σ²)T and σ_V√T.",
          "PD = N(−DD) ≈ 17%.",
          "States r-for-μ substitution gives the risk-neutral PD.",
        ],
      },
      {
        id: "pp-p2m4-2",
        testPointIds: ["tp-reduced-form", "tp-recovery-el"],
        style: "Hazard-rate + EL calculation",
        question:
          "A name's 3-year CDS spread is 300 bp with 30% recovery on a $20m notional. (a) Estimate the annual default intensity. (b) Compute the cumulative 3-year risk-neutral PD. (c) Estimate the 1-year expected loss using the risk-neutral 1-year PD.",
        answerPlan: [
          "λ ≈ spread/(1 − R).",
          "Cumulative PD = 1 − e^(−λt).",
          "EL = PD·LGD·EAD.",
        ],
        modelAnswer:
          "(a) λ ≈ 0.0300/(1 − 0.30) = 0.0300/0.70 = 0.042857 ⇒ about 4.29% per year (risk-neutral). (b) 3-year survival = e^(−0.042857·3) = e^(−0.128571) = 0.87935; cumulative 3-year PD = 1 − 0.87935 = 0.12065 ⇒ about 12.07%. (c) 1-year PD = 1 − e^(−0.042857) = 1 − 0.95805 = 0.04195 ⇒ 4.20%; LGD = 1 − 0.30 = 0.70; EL = 0.04195 × 0.70 × $20m = $587,300 ≈ $0.59m. (These use risk-neutral PDs; real-world provisioning would use lower physical PDs.)",
        markingGuide: [
          "λ ≈ 4.29% via spread/(1 − R).",
          "Cumulative 3-year PD ≈ 12% via 1 − e^(−λt).",
          "EL ≈ $0.59m with LGD = 0.70; notes risk-neutral vs real-world.",
        ],
      },
      {
        id: "pp-p2m4-3",
        testPointIds: ["tp-ratings-transition", "tp-scoring"],
        style: "Transition matrix + interpretation",
        question:
          "A BB name has a one-year transition: stay BB 88%, upgrade to BBB 6%, default 6%. BBB has: stay BBB 92%, downgrade to BB 6%, default 2%. (a) Compute the 2-year cumulative default probability. (b) A scorecard for these names has AUC 0.78; interpret it and contrast with an AUC of 0.5.",
        answerPlan: [
          "Roll survivors into year two.",
          "Cumulative PD = year-1 + survivor-weighted year-2 default.",
          "Interpret AUC as ranking power.",
        ],
        modelAnswer:
          "(a) Year-1 default = 6%. Survivors: 88% stay BB, 6% move to BBB. Year-2 default from survivors = P(BB→BB)·P(BB→D) + P(BB→BBB)·P(BBB→D) = 0.88·0.06 + 0.06·0.02 = 0.0528 + 0.0012 = 0.0540. 2-year cumulative PD = 0.06 + 0.0540 = 0.1140 ⇒ about 11.40% (marginal second-year PD 5.40%). (b) An AUC of 0.78 means that for a randomly chosen defaulter and non-defaulter, the model ranks the defaulter as riskier 78% of the time — solid discriminatory power well above chance. An AUC of 0.5 would mean the score is no better than a coin flip at separating defaulters from non-defaulters. AUC measures ranking (discrimination), not whether the predicted PD levels are calibrated.",
        markingGuide: [
          "Only survivors roll to year 2; cumulative PD ≈ 11.4%.",
          "AUC 0.78 interpreted as ranking power above chance.",
          "Notes AUC 0.5 = random and that AUC measures discrimination, not calibration.",
        ],
      },
    ],
  }),
};
