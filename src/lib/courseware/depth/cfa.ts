import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * Exam-calibrated deep content for all 32 CFA moduleIds.
 * Level I (10) — recognition and calculation MCQs.
 * Level II (10) — item-set / vignette analysis and valuation.
 * Level III (12) — portfolio construction and constructed-response (essay).
 * Keyed by moduleId to be merged into ModuleCourseware.depth.
 */
export const CFA_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // LEVEL I
  // ===================================================================
  "cfa-l1-m1": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Identify the specific Standard violated",
        priority: "critical",
        examinerFocus:
          "The exam tests whether you can map a described action to the exact Standard (I–VII) and sub-provision, not whether you can recite the Code. Most items hinge on distinguishing two adjacent Standards (e.g. III(B) Fair Dealing vs III(C) Suitability).",
        typicalQuestionForms: [
          "'Which Standard is least likely to be violated?'",
          "'The action most consistent with the Standards is...'",
          "'Which of the following is a violation?'",
        ],
        mustKnow: [
          "Standard I Professionalism: (A) Knowledge of Law, (B) Independence & Objectivity, (C) Misrepresentation, (D) Misconduct.",
          "Standard II Integrity of Capital Markets: (A) Material Nonpublic Information, (B) Market Manipulation.",
          "Standard III Duties to Clients: (A) Loyalty/Prudence/Care, (B) Fair Dealing, (C) Suitability, (D) Performance Presentation, (E) Confidentiality; Standard IV Duties to Employers: (A) Loyalty, (B) Additional Compensation, (C) Responsibilities of Supervisors.",
        ],
        scoringActions: [
          "Name the Standard number and letter before reading answer choices to avoid being led by distractors.",
          "Ask 'what conduct is required?' rather than 'what feels wrong?' — the compliant response, not the harshest, is correct.",
        ],
      },
      {
        id: "tp2",
        title: "Material nonpublic information and the mosaic theory",
        priority: "critical",
        examinerFocus:
          "Whether you can distinguish permissible research (public + nonmaterial nonpublic pieced together) from prohibited use of MNPI, and know the required response (do not trade or cause others to trade; encourage public disclosure).",
        typicalQuestionForms: [
          "Analyst obtains a piece of information — is it material and nonpublic?",
          "Which action complies with Standard II(A)?",
        ],
        mustKnow: [
          "Material = a reasonable investor would want it, or it would affect price. Nonpublic = not disseminated to the marketplace.",
          "Mosaic theory: combining public and nonmaterial nonpublic information is permissible even if the conclusion is material.",
          "Required response to MNPI: do not act or cause others to act; seek to have the issuer disclose it publicly; information barriers (firewalls) are the recommended procedure.",
        ],
        scoringActions: [
          "Test both prongs — information must be BOTH material AND nonpublic to be restricted.",
          "Never select 'trade before others find out' — silence and non-trading is the only compliant path.",
        ],
      },
      {
        id: "tp3",
        title: "Independence, objectivity and gifts",
        priority: "high",
        examinerFocus:
          "Standard I(B): distinguishing modest gifts/benefits from those that could compromise objectivity, and the different treatment of client gifts (past performance) vs issuer/third-party gifts (prospective).",
        typicalQuestionForms: [
          "Is accepting a gift/trip/benefit a violation?",
          "What disclosure or refusal is required?",
        ],
        mustKnow: [
          "Gifts from clients for past performance are permissible but must be disclosed to the employer (they could affect future objectivity toward that client).",
          "Benefits from entities the analyst covers (issuers) that could impair independence should be refused; only modest, token items are acceptable.",
          "Analysts should pay their own travel/expenses when practicable to avoid the appearance of being influenced.",
        ],
        scoringActions: [
          "Separate client gifts (disclose to employer) from issuer/prospective benefits (decline).",
          "Flag anything lavish or contingent on a favourable recommendation as a violation.",
        ],
      },
      {
        id: "tp4",
        title: "Loyalty to employer and the departing-employee rule",
        priority: "high",
        examinerFocus:
          "Standard IV(A): what a member may and may not do while still employed and after resigning — the line between preparation to compete (permitted) and using employer resources or soliciting clients (prohibited).",
        typicalQuestionForms: [
          "Departing employee takes/uses X — violation?",
          "Which action breaches duty of loyalty?",
        ],
        mustKnow: [
          "While employed, members must act for the employer's benefit and not deprive it of skill/ability or divulge confidential information.",
          "After resignation a member may use skills and knowledge but may NOT take client lists, records, or other employer property.",
          "Independent practice for compensation while employed requires employer consent (written notification and permission).",
        ],
        scoringActions: [
          "Distinguish 'memory and general skills' (permitted) from 'files, models, client lists' (property — prohibited).",
          "Check whether the employer was notified and gave consent for outside/competing activity.",
        ],
      },
      {
        id: "tp5",
        title: "Diligence, reasonable basis, and record retention",
        priority: "high",
        examinerFocus:
          "Standard V(A) and V(C): whether recommendations rest on a reasonable and adequate basis (including reliance on others / third-party research) and whether required documentation supports the analysis.",
        typicalQuestionForms: [
          "Analyst relies on a colleague's or external model — reasonable basis met?",
          "How long must supporting records be kept?",
        ],
        mustKnow: [
          "Recommendations require diligence and a reasonable, adequate basis supported by appropriate research and investigation.",
          "Members may rely on others (e.g. quant or third-party research) if they have a reasonable basis to believe that source is sound (verify credentials/soundness).",
          "Record retention: CFA Institute recommends keeping supporting records for a minimum of 7 years absent a local regulatory requirement.",
        ],
        scoringActions: [
          "Check whether reliance on a third party was itself reasonably vetted.",
          "Use the 7-year default when no regulator-specified period is given.",
        ],
      },
      {
        id: "tp6",
        title: "GIPS fundamentals",
        priority: "medium",
        examinerFocus:
          "Whether you know GIPS is firm-wide and voluntary, that composites prevent cherry-picking, and the required minimum history and key disclosures.",
        typicalQuestionForms: [
          "Which statement about GIPS compliance is correct?",
          "What must be included in a composite?",
        ],
        mustKnow: [
          "Compliance is on a firm-wide basis; partial compliance may not be claimed. Firms cannot state they are 'in compliance except for...'.",
          "A composite must include ALL actual, fee-paying, discretionary portfolios managed to a similar strategy; this prevents cherry-picking.",
          "New firms must show a minimum of 5 years of compliant history (or since inception), then build to 10 years.",
        ],
        scoringActions: [
          "Reject any answer allowing partial or product-only compliance.",
          "Confirm composites are defined by strategy/mandate, not by performance.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Ethics is ~15–20% of L1 and the borderline tie-breaker — aim to net >75% of ethics MCQs.",
      timeBudget: "About 1.5 minutes per MCQ; ethics items are short to read but easy to overthink.",
      answerSequence: [
        "Read the stem and identify the actor and the Standard in play.",
        "Predict the compliant action before viewing choices.",
        "Eliminate the two 'obviously wrong' distractors, then decide between the remaining pair on the exact sub-provision.",
      ],
      qualityChecks: [
        "Did I test both prongs (material AND nonpublic) where MNPI is involved?",
        "Did I pick the required response, not the harshest-sounding option?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The seven Standards — a working map",
        testPointIds: ["tp1"],
        explanation: [
          "The Code of Ethics states six broad principles; the seven Standards operationalise them into testable rules. Exam success comes from instant recall of which Standard governs a described act. Standards I–II protect the profession and markets; Standards III–IV govern relationships with clients and employers; Standards V–VII govern the investment process, conflicts, and membership responsibilities.",
          "The most commonly confused pairs are III(B) Fair Dealing vs III(C) Suitability, and I(C) Misrepresentation vs I(D) Misconduct. Fair Dealing concerns the equitable dissemination of recommendations and trade allocation across clients; Suitability concerns matching an investment to a specific client's objectives and constraints (IPS). Misrepresentation is about false statements in a professional capacity; Misconduct concerns dishonesty, fraud, or acts reflecting adversely on professional integrity (including personal conduct such as fraud).",
          "When a scenario mentions plagiarism, that is Misrepresentation I(C). When it mentions guaranteeing returns, that is also Misrepresentation. When it mentions being convicted of a crime or lying about qualifications outside work, treat conduct reflecting on honesty/trustworthiness as Misconduct I(D).",
        ],
        keyRules: [
          "Fair Dealing = 'fair' not 'equal' — treat clients fairly, though not necessarily identically.",
          "Suitability requires a documented IPS and updates when circumstances change.",
          "Misrepresentation covers plagiarism and performance/return guarantees.",
        ],
      },
      {
        id: "sn2",
        title: "Material nonpublic information and information barriers",
        testPointIds: ["tp2"],
        explanation: [
          "Standard II(A) prohibits members who possess MNPI from acting or causing others to act on it. The information must satisfy BOTH tests: material (a reasonable investor would want it or it would move price) and nonpublic (not yet disseminated to the market). If either test fails, the information is not restricted.",
          "The mosaic theory is the examiner's favourite trap: an analyst may combine public information with nonmaterial nonpublic pieces (e.g. observations, supplier commentary, industry colour) and reach a materially significant conclusion — this is permissible and is the essence of superior research. The prohibition attaches only to individual MNPI items, not to skilled synthesis of legitimate inputs.",
          "The recommended firm-level control is an information barrier ('firewall') that restricts the flow of MNPI between departments (e.g. investment banking and research), plus a watch/restricted list. If a member inadvertently receives MNPI, the required response is to refrain from trading and encourage the issuer to disclose it publicly.",
        ],
        keyRules: [
          "Restricted only if material AND nonpublic.",
          "Mosaic conclusions are permissible; MNPI items are not.",
          "Response to MNPI: do not trade, do not tip, urge public disclosure.",
        ],
        workedProblem: {
          scenario:
            "An analyst covering RetailCo visits 40 stores, notes unusually low foot traffic, reads a public FTC filing about a competitor, and speaks to three suppliers who each mention that their individual (small) orders from RetailCo fell slightly. She concludes RetailCo will miss consensus and downgrades the stock before the earnings release.",
          steps: [
            "Classify each input: store visits = public observation; FTC filing = public; each supplier's own small order data = nonmaterial (individually) and arguably nonpublic.",
            "Apply the two-prong test to any single input: none is both material AND nonpublic on its own.",
            "Recognise the synthesis: combining these public and nonmaterial-nonpublic pieces into a material conclusion is the mosaic theory.",
            "Confirm no single supplier disclosed material, company-wide, nonpublic figures (which would be MNPI).",
          ],
          conclusion:
            "The downgrade is permissible under Standard II(A) via the mosaic theory; no violation, and she may act on her research-based conclusion.",
          markingNotes: [
            "Credit for applying BOTH prongs to individual inputs.",
            "Credit for naming the mosaic theory as the governing concept.",
            "Deduct if the answer treats a material conclusion as automatically MNPI.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Independence, gifts and objectivity",
        testPointIds: ["tp3"],
        explanation: [
          "Standard I(B) requires members to use reasonable care and judgement to achieve and maintain independence and objectivity. The exam distinguishes between benefits from clients and benefits from issuers/third parties. A gift from a client for past performance is permissible but must be disclosed to the employer, because it could bias future treatment of that client relative to others.",
          "Benefits offered by companies the analyst covers — paid trips on the issuer's aircraft, lavish entertainment, or anything contingent on a favourable rating — threaten independence and should be declined; the recommended practice is for the analyst's firm to pay travel and lodging. Modest, token items (a coffee mug, an inexpensive meal at a site visit) are generally acceptable.",
          "Buy-side pressure on sell-side analysts, issuer pressure through withholding access, and 'sponsored' research are all classic independence threats. The compliant posture is to base opinions on the analysis and to disclose the nature of any relationship or compensation arrangement.",
        ],
        keyRules: [
          "Client gift for past performance: allowed, but disclose to employer.",
          "Issuer benefit that could impair objectivity: decline; firm pays expenses.",
          "Disclose relationships/compensation that could impair independence.",
        ],
      },
      {
        id: "sn4",
        title: "Duties to employers and diligence",
        testPointIds: ["tp4", "tp5"],
        explanation: [
          "Standard IV(A) Loyalty requires acting for the employer's benefit and not depriving it of the advantage of the member's skills. Preparing to compete (e.g. registering a company, securing office space) while still employed is generally permitted; misappropriating property — client lists, research files, source code, models — is not. After leaving, the member may use general knowledge and skill but not confidential materials.",
          "Standard IV(B) requires written consent from the employer before accepting additional compensation from third parties that competes with the employer's interest. Standard IV(C) makes supervisors responsible for detecting and preventing violations by those under their supervision; a supervisor with reasonable procedures who is nonetheless deceived may not be in violation, but must act once red flags appear.",
          "Standard V(A) Diligence and Reasonable Basis governs the investment process. Reliance on third-party or secondary research is acceptable only if the member has reasonably verified the source's soundness. Standard V(C) requires retaining records supporting analysis; CFA Institute recommends a 7-year minimum where no regulator specifies otherwise.",
        ],
        keyRules: [
          "Take memory and skills; leave files, lists and models.",
          "Additional compensation from third parties needs written employer consent.",
          "Verify third-party research before relying on it; keep records ~7 years.",
        ],
      },
      {
        id: "sn5",
        title: "GIPS: purpose, composites and compliance",
        testPointIds: ["tp6"],
        explanation: [
          "GIPS exists to promote fair representation and full disclosure of investment performance and to enable apples-to-apples comparison across firms. Compliance is voluntary but, once claimed, must be firm-wide; a firm cannot claim compliance for a single product while excluding others. The definition of the 'firm' must be reasonable and applied consistently.",
          "The composite is the central anti-cherry-picking mechanism: it must include all actual, fee-paying, discretionary portfolios managed according to a similar strategy or mandate. Non-discretionary portfolios are excluded. Terminated portfolios remain in the composite through their last full period of measurement, preventing survivorship bias.",
          "A firm claiming compliance must present at least 5 years of GIPS-compliant history (or since inception if younger), then add one year annually until 10 years are shown. Verification (a third party confirming firm-wide processes) is recommended but not required.",
        ],
        keyRules: [
          "Firm-wide compliance only — no partial or product-only claims.",
          "Composite = all similar, discretionary, fee-paying portfolios.",
          "Minimum 5 years history, building to 10.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L1 single MCQ — MNPI / mosaic",
        question:
          "An analyst pieces together nonmaterial nonpublic details from several suppliers plus public filings and concludes a firm will beat earnings, then publishes a buy. Which statement is most accurate?",
        answerPlan: [
          "Apply the two-prong materiality/nonpublic test to individual inputs.",
          "Identify the mosaic theory.",
          "Conclude no violation.",
        ],
        modelAnswer:
          "No violation of Standard II(A). Each individual input is either public or nonmaterial-nonpublic; combining them into a material conclusion is exactly what the mosaic theory permits. The prohibition attaches only to acting on individual items that are both material and nonpublic.",
        markingGuide: [
          "Correct choice: no violation via mosaic theory.",
          "Reasoning applies both prongs to inputs.",
          "Does not equate a material conclusion with MNPI.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L1 single MCQ — departing employee",
        question:
          "Before resigning, a portfolio manager emails herself the firm's proprietary client list and valuation models to use at her new employer. She has not yet resigned. Which Standard is violated?",
        answerPlan: [
          "Identify property vs general knowledge.",
          "Map to Standard IV(A) Loyalty.",
        ],
        modelAnswer:
          "Standard IV(A) Loyalty to Employer is violated. Client lists and proprietary models are employer property; taking them (even before resigning) deprives the employer of its assets and breaches the duty of loyalty. She may leave with her general skills and knowledge but not with confidential records or property.",
        markingGuide: [
          "Names Standard IV(A) Loyalty.",
          "Distinguishes property (prohibited) from skills/knowledge (permitted).",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp6"],
        style: "L1 single MCQ — GIPS",
        question:
          "A firm wishes to claim GIPS compliance only for its flagship equity fund, which has a strong 12-year track record, while excluding its weaker fixed-income products. Is this permissible?",
        answerPlan: [
          "Recall firm-wide requirement.",
          "Explain anti-cherry-picking rationale.",
        ],
        modelAnswer:
          "No. GIPS compliance must be claimed on a firm-wide basis; a firm cannot cherry-pick a single product for a compliance claim. Excluding weaker products defeats the fair-representation purpose. All discretionary, fee-paying portfolios must be assigned to appropriate composites.",
        markingGuide: [
          "States firm-wide requirement.",
          "Rejects product-only/partial compliance and cites cherry-picking rationale.",
        ],
      },
    ],
  }),

  "cfa-l1-m2": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Time value of money — annuities, perpetuities, uneven cash flows",
        priority: "critical",
        examinerFocus:
          "Whether you can move cash flows across time correctly, distinguish ordinary annuity vs annuity due, and pick the right N/I/PV/PMT/FV inputs under different compounding frequencies.",
        typicalQuestionForms: [
          "Compute PV/FV of an annuity or a growing perpetuity.",
          "Solve for the rate or number of periods.",
        ],
        mustKnow: [
          "FV = PV(1+r)^N; PV of ordinary annuity = PMT·[1−(1+r)^−N]/r; annuity due = ordinary × (1+r).",
          "Perpetuity PV = PMT/r; growing perpetuity PV = PMT1/(r−g).",
          "Convert stated (nominal) to periodic rate by dividing by m; effective annual rate EAR = (1+stated/m)^m − 1.",
        ],
        scoringActions: [
          "Set calculator to the correct P/Y and END/BGN mode before solving.",
          "Draw a timeline for uneven cash flows and discount each explicitly.",
        ],
      },
      {
        id: "tp2",
        title: "Statistical measures and distributions",
        priority: "high",
        examinerFocus:
          "Computing and interpreting mean/variance/skew/kurtosis, and applying the normal distribution (z-scores, confidence intervals) and Sharpe/coefficient of variation.",
        typicalQuestionForms: [
          "Compute standard deviation or coefficient of variation.",
          "Find a probability or confidence interval using z.",
        ],
        mustKnow: [
          "Sample variance uses n−1 denominator; population uses n. CV = σ/mean (risk per unit of return; lower is better).",
          "Normal: ~68% within ±1σ, ~95% within ±1.96σ, ~99% within ±2.58σ.",
          "Positive skew: mean > median > mode; excess kurtosis > 0 = leptokurtic (fat tails).",
        ],
        scoringActions: [
          "Confirm whether the question wants sample or population statistics.",
          "Memorise the 1.65 (90%), 1.96 (95%), 2.58 (99%) two-tailed z-values.",
        ],
      },
      {
        id: "tp3",
        title: "Hypothesis testing",
        priority: "high",
        examinerFocus:
          "Selecting the correct test (z vs t), forming hypotheses, computing the test statistic, and reaching a reject/fail-to-reject decision with Type I/II error understanding.",
        typicalQuestionForms: [
          "Which test statistic applies (known vs unknown variance)?",
          "Reject H0 at the given significance level?",
        ],
        mustKnow: [
          "Use z when population variance is known or n is large; use t (df=n−1) when variance is unknown and sample is small/normal.",
          "Test statistic = (sample stat − hypothesized value)/standard error.",
          "Type I error = rejecting a true H0 (probability = significance level α); Type II = failing to reject a false H0.",
        ],
        scoringActions: [
          "State H0 and Ha precisely; one-tailed vs two-tailed changes the critical value.",
          "Compare |test statistic| to the critical value; reject if it exceeds.",
        ],
      },
      {
        id: "tp4",
        title: "Return measures — HPR, TWR vs MWR, and geometric vs arithmetic mean",
        priority: "critical",
        examinerFocus:
          "Distinguishing money-weighted (IRR of cash flows) from time-weighted returns, and knowing when geometric mean (compounding) beats arithmetic mean.",
        typicalQuestionForms: [
          "Compute MWR (IRR) given deposits/withdrawals.",
          "Which return best reflects the manager's skill?",
        ],
        mustKnow: [
          "TWR removes the effect of client cash flows and is the industry standard for evaluating manager performance.",
          "MWR = the IRR that sets PV of inflows = PV of outflows; sensitive to timing/size of external cash flows.",
          "Geometric mean = [(1+r1)...(1+rn)]^(1/n) − 1 ≤ arithmetic mean; use geometric for multi-period compound growth.",
        ],
        scoringActions: [
          "Choose TWR to judge the manager, MWR to judge the investor's actual experience.",
          "Use geometric mean for realized multi-period performance; arithmetic for expected single-period.",
        ],
      },
      {
        id: "tp5",
        title: "Probability concepts and expected value",
        priority: "medium",
        examinerFocus:
          "Bayes' formula, covariance/correlation, and portfolio expected return/variance building blocks.",
        typicalQuestionForms: [
          "Update a probability using Bayes.",
          "Compute expected value/variance of a two-asset portfolio.",
        ],
        mustKnow: [
          "Bayes: P(A|B) = P(B|A)·P(A)/P(B).",
          "Cov(X,Y) = ρ·σX·σY; correlation ρ ∈ [−1, 1].",
          "Two-asset portfolio variance = w1²σ1² + w2²σ2² + 2w1w2·ρ·σ1·σ2.",
        ],
        scoringActions: [
          "Write the Bayes denominator as the total probability of the evidence.",
          "Never forget the 2·w1·w2·cov cross term in portfolio variance.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Quant is ~8–12% of L1; TVM and return/stat questions are high-yield — target >70%.",
      timeBudget: "~1.5 min/MCQ; calculation items can run long, so bank time on conceptual ones.",
      answerSequence: [
        "Identify the concept (TVM, stats, hypothesis, return).",
        "Write the formula and label knowns.",
        "Set calculator modes, compute, and sanity-check magnitude/sign.",
      ],
      qualityChecks: [
        "Correct END/BGN and P/Y settings?",
        "Sample vs population, one- vs two-tailed correctly identified?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Time value of money mechanics",
        testPointIds: ["tp1"],
        explanation: [
          "Every TVM problem reduces to placing each cash flow on a timeline and moving it to a common date using (1+r) per period. The five-key model (N, I/Y, PV, PMT, FV) solves single sums and level annuities; uneven cash flows require the cash-flow (NPV/IRR) worksheet. The single most common error is a mode mismatch — leaving the calculator in BGN when the annuity is ordinary, or forgetting to adjust the periodic rate for compounding frequency.",
          "For non-annual compounding, convert the stated annual rate to a periodic rate (stated/m) and the number of years to periods (years×m). To compare instruments with different compounding, convert each to an effective annual rate: EAR = (1+stated/m)^m − 1, and for continuous compounding EAR = e^(stated) − 1.",
          "Growing streams: a growing perpetuity is PMT1/(r−g), where PMT1 is next period's cash flow; this is the engine behind the Gordon growth (dividend discount) model you will meet in equity. A growing annuity can be handled by discounting each flow or by the closed-form growing-annuity formula.",
        ],
        keyRules: [
          "Match periodic rate and N to the compounding frequency.",
          "Annuity due = ordinary annuity × (1+r).",
          "Use EAR to compare across compounding frequencies.",
        ],
        workedProblem: {
          scenario:
            "You will receive $10,000 at the end of each year for 5 years, then a lump sum of $50,000 at the end of year 6. The discount rate is 8% annually. Also compute the EAR if the 8% were compounded quarterly.",
          steps: [
            "PV of the 5-year ordinary annuity: PMT=10,000, N=5, I=8 → PV = 10,000 × [1−(1.08)^−5]/0.08 = 10,000 × 3.9927 = 39,927.",
            "PV of the year-6 lump sum: 50,000/(1.08)^6 = 50,000/1.58687 = 31,509.",
            "Total PV today = 39,927 + 31,509 = 71,436.",
            "EAR with quarterly compounding = (1 + 0.08/4)^4 − 1 = (1.02)^4 − 1 = 1.08243 − 1 = 0.08243.",
          ],
          conclusion:
            "The package is worth about $71,436 today; the quarterly-compounded 8% is an EAR of ~8.24%, higher than the 8% annual rate.",
          markingNotes: [
            "Annuity discounted for 5 years, lump sum for 6 — no off-by-one error.",
            "Correct EAR formula with m=4.",
            "Answer within rounding of $71,400–71,450.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Descriptive statistics and the normal distribution",
        testPointIds: ["tp2"],
        explanation: [
          "The dispersion measures most examined are variance and standard deviation (use n−1 for a sample) and the coefficient of variation, CV = σ/mean, which standardises risk per unit of return and lets you rank investments with different scales. Lower CV is better when comparing risk relative to return.",
          "Shape matters for tail risk. Skewness measures asymmetry: positive (right) skew has mean > median > mode and a long right tail; negative skew reverses it. Excess kurtosis above zero (leptokurtic) signals fat tails and more frequent extreme outcomes than the normal distribution — a critical caveat when using normal-based risk measures.",
          "The normal distribution underpins confidence intervals: about 68%/95%/99% of observations fall within ±1/±2/±3 standard deviations, with the exact two-tailed z-values 1.65 (90%), 1.96 (95%) and 2.58 (99%). A z-score, z=(x−μ)/σ, converts any value to standard-normal units for probability lookups.",
        ],
        keyRules: [
          "Sample variance divides by n−1; CV = σ/mean.",
          "Positive skew: mean > median > mode.",
          "Two-tailed z: 1.65/1.96/2.58 for 90/95/99%.",
        ],
      },
      {
        id: "sn3",
        title: "Hypothesis testing framework",
        testPointIds: ["tp3"],
        explanation: [
          "Hypothesis testing formalises a decision under uncertainty. State a null (H0, the status quo containing the equality) and an alternative (Ha, what you want to establish). A two-tailed test (Ha: ≠) splits α across both tails; a one-tailed test (Ha: > or <) puts all of α in one tail, changing the critical value.",
          "Choose the distribution by what you know: use the z-statistic when the population variance is known or the sample is large; use the t-statistic (degrees of freedom n−1) when the population variance is unknown and the sample is small and roughly normal. The test statistic is (sample estimate − hypothesized value) divided by the standard error of the estimate.",
          "Two errors are possible. A Type I error rejects a true null; its probability equals the chosen significance level α. A Type II error fails to reject a false null. Power = 1 − P(Type II). Lowering α reduces Type I risk but raises Type II risk for a given sample size.",
        ],
        keyRules: [
          "H0 contains the equality; direction of Ha sets one- vs two-tailed.",
          "z when variance known/large n; t (df=n−1) otherwise.",
          "P(Type I) = α; power = 1 − P(Type II).",
        ],
      },
      {
        id: "sn4",
        title: "Return measurement: TWR vs MWR",
        testPointIds: ["tp4"],
        explanation: [
          "The time-weighted return (TWR) links sub-period returns geometrically and is unaffected by the size and timing of client contributions or withdrawals. Because the manager does not control external cash flows, TWR is the fair basis for evaluating manager skill and is the GIPS standard.",
          "The money-weighted return (MWR) is the internal rate of return that equates the present value of all inflows and outflows; it is heavily influenced by when money was added or removed. If a client adds cash just before a strong period, the MWR flatters the manager; if just before a weak period, it penalises them. MWR best reflects the investor's actual dollar experience.",
          "Multi-period summarising uses the geometric mean, which captures compounding and is always ≤ the arithmetic mean (the gap widens with volatility). Use the arithmetic mean for a single-period expected return and the geometric mean for realised multi-period growth.",
        ],
        keyRules: [
          "TWR to judge the manager; MWR to judge the investor's experience.",
          "MWR = IRR of the cash-flow stream.",
          "Geometric mean ≤ arithmetic mean; use geometric for realised compounding.",
        ],
        workedProblem: {
          scenario:
            "An investor deposits $100 at t=0. At the end of year 1 the portfolio is worth $110; the investor then adds $90 (total $200). At the end of year 2 the portfolio is worth $224. Compute the TWR and the MWR.",
          steps: [
            "Year-1 sub-period return: 110/100 − 1 = 10%.",
            "Year-2 sub-period return: start-of-year value after deposit = 200; end value 224 → 224/200 − 1 = 12%.",
            "TWR = [(1.10)(1.12)]^(1/2) − 1 = (1.232)^0.5 − 1 = 11.0% (annualised).",
            "MWR solves: −100 − 90/(1+IRR) + 224/(1+IRR)^2 = 0; solving gives IRR ≈ 11.1% per period.",
          ],
          conclusion:
            "TWR ≈ 11.0% measures manager performance free of the cash-flow timing; MWR ≈ 11.1% reflects the investor's actual dollar-weighted experience. They differ because a large deposit preceded the 12% year.",
          markingNotes: [
            "Correct sub-period returns of 10% and 12%.",
            "TWR geometrically linked and annualised.",
            "MWR set up as IRR of the −100, −90, +224 flows.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Probability, covariance and portfolio inputs",
        testPointIds: ["tp5"],
        explanation: [
          "Bayes' formula updates a prior probability with new evidence: P(A|B) = P(B|A)·P(A)/P(B), where the denominator P(B) is the total probability of the evidence across all states. Exam items usually give conditional probabilities and ask you to reverse the conditioning.",
          "Covariance measures how two variables move together; correlation standardises it to [−1, 1]: ρ = Cov(X,Y)/(σXσY). Correlation is the key diversification lever — the lower the correlation, the greater the variance reduction from combining assets.",
          "Portfolio expected return is the weighted average of component returns, but portfolio variance is NOT a simple weighted average: for two assets it is w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2. The cross term, driven by correlation, is what makes diversification work; when ρ < 1, portfolio σ is less than the weighted average of the σ's.",
        ],
        keyRules: [
          "Bayes denominator = total probability of the evidence.",
          "ρ = Cov/(σXσY), bounded by −1 and +1.",
          "Portfolio variance includes the 2w1w2ρσ1σ2 cross term.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L1 calculation MCQ — TVM",
        question:
          "What is the present value of a perpetuity paying $4 starting one year from now, growing at 3% forever, discounted at 9%?",
        answerPlan: [
          "Identify growing perpetuity.",
          "Apply PMT1/(r−g).",
        ],
        modelAnswer:
          "PV = PMT1/(r−g) = 4/(0.09 − 0.03) = 4/0.06 = $66.67. Because the first payment is one year out, no additional discounting is required; the formula already gives the value one period before the first cash flow.",
        markingGuide: [
          "Uses growing-perpetuity formula with correct r−g.",
          "Answer $66.67 (±rounding).",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L1 conceptual MCQ — hypothesis test",
        question:
          "A researcher tests whether a fund's mean monthly return exceeds zero using a sample of 20 months with unknown population variance. Which test and tail apply, and what is the risk of rejecting a true null?",
        answerPlan: [
          "Unknown variance + small n → t-test.",
          "'Exceeds' → one-tailed.",
          "Type I risk = α.",
        ],
        modelAnswer:
          "Use a one-tailed t-test with 19 degrees of freedom (variance unknown, small sample). The alternative Ha: mean > 0 is directional, so all of α sits in the right tail. The probability of rejecting a true null (mean actually ≤ 0) equals the chosen significance level α (e.g. 5%).",
        markingGuide: [
          "Selects t-test, df=19.",
          "Identifies one-tailed and P(Type I)=α.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L1 conceptual MCQ — return choice",
        question:
          "To fairly evaluate a portfolio manager whose clients made large, irregular contributions during the year, which return measure should the analyst use, and why?",
        answerPlan: [
          "Identify cash-flow distortion.",
          "Select TWR.",
        ],
        modelAnswer:
          "The analyst should use the time-weighted return. Because the manager does not control the size or timing of client contributions and withdrawals, the TWR removes their distorting effect and isolates the manager's investment decisions. The money-weighted return would be biased by the contribution timing and better reflects the client's dollar experience than the manager's skill.",
        markingGuide: [
          "Selects TWR for manager evaluation.",
          "Explains removal of cash-flow timing effect.",
        ],
      },
    ],
  }),

  "cfa-l1-m3": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Elasticity and demand/supply analysis",
        priority: "high",
        examinerFocus:
          "Computing and interpreting price/income/cross elasticities and predicting revenue effects and market outcomes from shifts in demand or supply.",
        typicalQuestionForms: [
          "Compute price elasticity and its effect on total revenue.",
          "Classify a good (normal/inferior, substitute/complement) from an elasticity sign.",
        ],
        mustKnow: [
          "Price elasticity = %ΔQ/%ΔP (absolute value); elastic (>1): a price cut raises total revenue; inelastic (<1): a price rise raises revenue.",
          "Income elasticity: positive = normal good; negative = inferior good; >1 = luxury.",
          "Cross elasticity: positive = substitutes; negative = complements.",
        ],
        scoringActions: [
          "Use the sign to classify the good; use magnitude vs 1 for revenue effects.",
          "Remember demand is more elastic with more substitutes and over longer horizons.",
        ],
      },
      {
        id: "tp2",
        title: "Market structures and firm behaviour",
        priority: "high",
        examinerFocus:
          "Distinguishing perfect competition, monopolistic competition, oligopoly and monopoly by pricing power, and applying the profit-maximising MR=MC rule.",
        typicalQuestionForms: [
          "Identify the market structure from described features.",
          "At what output does the firm maximise profit?",
        ],
        mustKnow: [
          "All firms maximise profit where marginal revenue = marginal cost (MR=MC).",
          "Perfect competition: price takers, P=MR=MC, zero economic profit long run; monopoly: price maker, MR<P.",
          "Oligopoly models: Cournot (quantity), Stackelberg (leader-follower), Nash equilibrium and the kinked demand curve.",
        ],
        scoringActions: [
          "Apply MR=MC first, then read price off the demand curve.",
          "Use the concentration/number-of-firms and product differentiation cues to name the structure.",
        ],
      },
      {
        id: "tp3",
        title: "Aggregate output, GDP and business cycles",
        priority: "high",
        examinerFocus:
          "Understanding GDP measurement (expenditure vs income), the multiplier, and the phases of the business cycle with their indicators.",
        typicalQuestionForms: [
          "Compute GDP via the expenditure approach.",
          "Which indicators are leading/lagging?",
        ],
        mustKnow: [
          "Expenditure GDP = C + I + G + (X − M).",
          "Fiscal multiplier = 1/(1 − MPC(1−t)); higher marginal propensity to consume → larger multiplier.",
          "Leading indicators (e.g. stock prices, new orders, yield curve) turn before the cycle; lagging (e.g. unemployment duration, CPI) turn after.",
        ],
        scoringActions: [
          "Include net exports (X−M), not gross exports, in expenditure GDP.",
          "Classify indicators by whether they anticipate or confirm the cycle.",
        ],
      },
      {
        id: "tp4",
        title: "Monetary and fiscal policy",
        priority: "critical",
        examinerFocus:
          "How central banks use policy rates and open-market operations to hit inflation targets, the transmission mechanism, and the limits of policy (liquidity trap, crowding out).",
        typicalQuestionForms: [
          "Effect of a rate change on money supply/inflation/currency.",
          "Distinguish expansionary vs contractionary stance.",
        ],
        mustKnow: [
          "Contractionary monetary policy raises rates, slows money growth, curbs inflation, and tends to strengthen the currency.",
          "Quantity theory: MV = PY; if V and Y are stable, money growth feeds inflation.",
          "Fiscal expansion can crowd out private investment via higher rates; monetary easing can fail in a liquidity trap.",
        ],
        scoringActions: [
          "Trace the transmission: policy rate → money supply → aggregate demand → inflation/output.",
          "Watch for crowding out and liquidity-trap exceptions in the stem.",
        ],
      },
      {
        id: "tp5",
        title: "Exchange rates and international trade/parity",
        priority: "high",
        examinerFocus:
          "Reading direct/indirect quotes, computing cross rates and forward premiums/discounts, and applying interest-rate and purchasing-power parity.",
        typicalQuestionForms: [
          "Compute a cross rate or a forward point-adjusted rate.",
          "Which currency trades at a forward premium?",
        ],
        mustKnow: [
          "Covered interest rate parity: F/S = (1+r_domestic)/(1+r_foreign); the higher-rate currency trades at a forward discount.",
          "Relative PPP: expected spot change ≈ inflation differential (high-inflation currency depreciates).",
          "A price currency in the denominator; forward premium/discount is annualised from forward points.",
        ],
        scoringActions: [
          "Fix the base/price convention before computing cross or forward rates.",
          "Use CIRP for arbitrage-free forwards; use PPP for long-run expected spot.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Economics is ~8–12% of L1; policy, elasticity and FX are high-yield — target ~70%.",
      timeBudget: "~1.5 min/MCQ; FX and elasticity calculations are quick if the convention is fixed first.",
      answerSequence: [
        "Identify micro vs macro vs international.",
        "Fix conventions (base currency, sample vs population, MR=MC).",
        "Compute or reason, then check sign/direction against intuition.",
      ],
      qualityChecks: [
        "Did I use net exports and the correct multiplier formula?",
        "Did I keep the FX base/price convention consistent throughout?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Elasticity and its revenue implications",
        testPointIds: ["tp1"],
        explanation: [
          "Price elasticity of demand, |%ΔQ/%ΔP|, measures how sensitive quantity is to price. When demand is elastic (>1), quantity responds more than proportionally, so a price cut increases total revenue and a price rise reduces it; when inelastic (<1), the reverse holds and firms can raise revenue by raising price. At unit elasticity, revenue is maximised.",
          "Determinants of elasticity include the availability of substitutes (more substitutes → more elastic), the share of income spent on the good, whether it is a necessity or luxury, and the time horizon (demand is more elastic over longer periods as consumers adjust).",
          "Income elasticity classifies goods: positive means normal, negative means inferior, and greater than one indicates a luxury. Cross-price elasticity classifies relationships: a positive sign indicates substitutes, a negative sign indicates complements. Exam items often give an elasticity value and ask you to classify the good or predict a revenue change.",
        ],
        keyRules: [
          "Elastic demand: cut price to raise revenue; inelastic: raise price.",
          "Income elasticity >0 normal, <0 inferior, >1 luxury.",
          "Cross elasticity: + substitutes, − complements.",
        ],
      },
      {
        id: "sn2",
        title: "Market structures and profit maximisation",
        testPointIds: ["tp2"],
        explanation: [
          "Every profit-maximising firm produces where marginal revenue equals marginal cost. The structures differ in how price relates to marginal revenue. Under perfect competition firms are price takers: P = MR = MC, and free entry drives economic profit to zero in the long run. A monopolist is a price maker facing the whole downward-sloping demand curve, so MR < P; it restricts output relative to competition and earns positive economic profit protected by barriers to entry.",
          "Monopolistic competition features many firms with differentiated products and some short-run pricing power that erodes as entry occurs, leaving zero long-run economic profit but excess capacity. Oligopoly has few interdependent firms, so strategic interaction dominates.",
          "Oligopoly is modelled several ways: the Cournot model (firms choose quantities simultaneously), the Stackelberg model (a leader moves first), Nash equilibrium (no firm can improve by unilaterally deviating), and the kinked demand curve (prices are sticky because rivals match cuts but not increases). Recognising the described interaction is the key exam skill.",
        ],
        keyRules: [
          "Maximise profit at MR=MC, then read price off demand.",
          "Perfect competition: zero long-run economic profit; monopoly: MR<P.",
          "Oligopoly = strategic interdependence (Cournot/Stackelberg/Nash/kinked demand).",
        ],
      },
      {
        id: "sn3",
        title: "GDP, the multiplier and the business cycle",
        testPointIds: ["tp3"],
        explanation: [
          "The expenditure approach sums consumption, investment, government spending, and net exports: GDP = C + I + G + (X − M). The income approach sums factor payments; the two must reconcile. A common trap is adding gross exports rather than net exports.",
          "The spending multiplier captures how an initial change in autonomous spending cascades through the economy via re-spending. With a marginal propensity to consume MPC and tax rate t, the multiplier is 1/(1 − MPC(1 − t)); a higher MPC (people re-spend more) produces a larger multiplier and a bigger output response.",
          "Business cycles move through expansion, peak, contraction, and trough. Leading indicators (equity prices, new manufacturing orders, the slope of the yield curve, building permits) turn before the economy; coincident indicators move with it; lagging indicators (average duration of unemployment, CPI, commercial lending) confirm turns after they occur. Analysts use leading indicators to anticipate turning points.",
        ],
        keyRules: [
          "GDP = C + I + G + (X − M) — net exports only.",
          "Multiplier = 1/(1 − MPC(1 − t)).",
          "Yield curve and new orders lead; unemployment duration lags.",
        ],
      },
      {
        id: "sn4",
        title: "Monetary and fiscal policy transmission",
        testPointIds: ["tp4"],
        explanation: [
          "Monetary policy works through the central bank's control of short-term rates and the money supply. Contractionary policy (raising the policy rate, selling securities in open-market operations, or raising reserve requirements) shrinks money growth, cools aggregate demand and inflation, and tends to attract capital and strengthen the currency. Expansionary policy does the reverse.",
          "The quantity theory of money, MV = PY, links money to prices: if velocity V and real output Y are roughly stable, money-supply growth translates into inflation. This is the intellectual basis for inflation targeting and for the concern that excessive money growth is ultimately inflationary.",
          "Both policies have limits. Fiscal expansion (higher G or lower taxes) can crowd out private investment if it pushes up interest rates. Monetary easing can be impotent in a liquidity trap, where rates are already near zero and additional liquidity is hoarded rather than lent. The exam rewards tracing the full transmission chain and flagging these exceptions.",
        ],
        keyRules: [
          "Contractionary money policy: higher rates, lower inflation, stronger currency.",
          "MV = PY links money growth to inflation.",
          "Watch for crowding out (fiscal) and the liquidity trap (monetary).",
        ],
      },
      {
        id: "sn5",
        title: "Exchange rates and parity conditions",
        testPointIds: ["tp5"],
        explanation: [
          "Currency quotes are ratios of a price currency to a base currency; a rise in the quote means the base currency has appreciated. Cross rates are computed by chaining two quotes through a common currency, taking care to invert where necessary to keep the base/price convention consistent.",
          "Covered interest rate parity is an arbitrage condition: the forward rate must offset the interest-rate differential, F/S = (1 + r_price)/(1 + r_base). Consequently, the currency with the higher interest rate trades at a forward discount, and the lower-rate currency at a forward premium — otherwise riskless arbitrage would exist.",
          "For expected future spot rates, relative purchasing power parity states that the expected percentage change in the spot rate approximately equals the inflation differential, so the higher-inflation currency is expected to depreciate. CIRP is enforced by arbitrage in the near term; PPP is a longer-run tendency that can deviate substantially in the short run.",
        ],
        keyRules: [
          "CIRP: F/S = (1 + r_price)/(1 + r_base); high-rate currency at forward discount.",
          "Relative PPP: expected spot change ≈ inflation differential.",
          "Keep base/price convention consistent in cross rates.",
        ],
        workedProblem: {
          scenario:
            "The spot rate is 1.2500 USD/EUR. The one-year US interest rate is 5% and the one-year eurozone rate is 3%. Compute the no-arbitrage one-year forward USD/EUR rate and state which currency is at a forward premium.",
          steps: [
            "Identify the convention: USD is the price currency, EUR is the base. r_price = 5% (USD), r_base = 3% (EUR).",
            "Apply CIRP: F = S × (1 + r_price)/(1 + r_base) = 1.2500 × (1.05/1.03).",
            "Compute: 1.05/1.03 = 1.019417; F = 1.2500 × 1.019417 = 1.27427 USD/EUR.",
            "Interpret: the EUR buys more USD forward than spot, so the EUR is at a forward premium and the higher-rate USD is at a forward discount.",
          ],
          conclusion:
            "The no-arbitrage one-year forward is ≈ 1.2743 USD/EUR; the euro (lower interest rate) trades at a forward premium, consistent with CIRP.",
          markingNotes: [
            "Correct assignment of price vs base currency.",
            "CIRP applied with the price-currency rate in the numerator.",
            "Concludes lower-rate currency (EUR) is at a premium.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L1 conceptual MCQ — elasticity/revenue",
        question:
          "A firm faces price-inelastic demand for its product. To increase total revenue, what should it do, and why?",
        answerPlan: [
          "Recall inelastic revenue effect.",
        ],
        modelAnswer:
          "It should raise the price. With inelastic demand (elasticity <1 in absolute value), quantity falls proportionally less than the price rises, so total revenue increases. Cutting price would reduce revenue because the volume gain is too small to offset the lower price.",
        markingGuide: [
          "Chooses raise price for inelastic demand.",
          "Explains proportional response reasoning.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L1 conceptual MCQ — monetary policy",
        question:
          "A central bank sells government securities in the open market. Describe the likely effect on the money supply, short-term interest rates, and the domestic currency.",
        answerPlan: [
          "Open-market sale = contractionary.",
          "Trace transmission.",
        ],
        modelAnswer:
          "Selling securities drains reserves from the banking system, reducing the money supply (contractionary). Less liquidity pushes short-term interest rates up. Higher domestic rates tend to attract foreign capital seeking yield, increasing demand for the currency and causing it to appreciate.",
        markingGuide: [
          "Identifies contractionary effect and lower money supply.",
          "Links higher rates to currency appreciation.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L1 calculation MCQ — cross rate",
        question:
          "Given 1.30 USD/GBP and 1.25 USD/EUR, compute the EUR/GBP cross rate.",
        answerPlan: [
          "Chain through USD.",
        ],
        modelAnswer:
          "EUR/GBP = (USD/GBP)/(USD/EUR) = 1.30/1.25 = 1.04 EUR/GBP. One pound buys 1.04 euros. The common USD cancels, leaving euros per pound.",
        markingGuide: [
          "Correctly divides to cancel USD.",
          "Answer 1.04 EUR/GBP.",
        ],
      },
    ],
  }),

  "cfa-l1-m4": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "The three financial statements and their articulation",
        priority: "critical",
        examinerFocus:
          "Whether you understand how the income statement, balance sheet and cash-flow statement link, and can classify items correctly (operating/investing/financing; current/non-current).",
        typicalQuestionForms: [
          "Which statement/section reports a given item?",
          "Effect of a transaction on the accounting equation.",
        ],
        mustKnow: [
          "Assets = Liabilities + Equity; retained earnings link net income (less dividends) to equity.",
          "Cash flow from operations reconciles net income to cash via non-cash items and working-capital changes.",
          "IFRS allows interest paid in operating or financing; US GAAP requires interest paid/received and dividends received in operating.",
        ],
        scoringActions: [
          "Trace how a transaction flows through all three statements.",
          "Memorise the IFRS vs US GAAP classification differences for interest and dividends.",
        ],
      },
      {
        id: "tp2",
        title: "Revenue recognition and inventory (FIFO/LIFO)",
        priority: "critical",
        examinerFocus:
          "The five-step revenue model and the effect of inventory cost-flow assumptions on COGS, ending inventory, and ratios in a rising-price environment.",
        typicalQuestionForms: [
          "Compute COGS/ending inventory under FIFO vs LIFO.",
          "Effect of LIFO on gross margin/taxes in inflation.",
        ],
        mustKnow: [
          "In rising prices: FIFO gives lower COGS, higher net income, higher ending inventory; LIFO gives higher COGS, lower income, lower taxes.",
          "LIFO is permitted under US GAAP but prohibited under IFRS.",
          "LIFO reserve = FIFO inventory − LIFO inventory; add it to LIFO inventory to compare firms.",
        ],
        scoringActions: [
          "State the price-direction assumption before predicting FIFO/LIFO effects.",
          "Use the LIFO reserve to convert a LIFO firm to a FIFO basis for comparison.",
        ],
      },
      {
        id: "tp3",
        title: "Long-lived assets: depreciation, capitalisation, impairment",
        priority: "high",
        examinerFocus:
          "Effects of capitalising vs expensing, choice of depreciation method, and IFRS vs US GAAP treatment of revaluation and impairment reversals.",
        typicalQuestionForms: [
          "Effect of capitalising costs on income and cash flow.",
          "Compute depreciation under straight-line vs units/declining balance.",
        ],
        mustKnow: [
          "Capitalising raises current income and assets and shifts the cost to future depreciation; expensing does the opposite. Cash flow total is unaffected, but capitalising boosts CFO and reduces CFI.",
          "IFRS permits revaluation of PP&E to fair value; US GAAP uses cost model only.",
          "IFRS allows reversal of impairments (except goodwill); US GAAP prohibits reversal.",
        ],
        scoringActions: [
          "Separate the income-statement timing effect from the total-cash-flow neutrality.",
          "Flag IFRS revaluation and impairment-reversal differences.",
        ],
      },
      {
        id: "tp4",
        title: "Income taxes and deferred tax",
        priority: "high",
        examinerFocus:
          "Distinguishing permanent vs temporary differences and knowing what creates deferred tax assets/liabilities and the valuation allowance.",
        typicalQuestionForms: [
          "Does an item create a DTA or DTL?",
          "Effect of a tax-rate change on deferred balances.",
        ],
        mustKnow: [
          "Temporary differences reverse over time and create DTAs/DTLs; permanent differences (e.g. tax-exempt interest) do not and affect the effective rate.",
          "Accelerated tax depreciation vs straight-line book depreciation creates a DTL.",
          "A valuation allowance reduces a DTA when realisation is not probable.",
        ],
        scoringActions: [
          "Classify the difference as temporary (defer) or permanent (rate effect) first.",
          "For a rate cut, DTLs and DTAs are revalued downward.",
        ],
      },
      {
        id: "tp5",
        title: "Ratio analysis and quality of earnings",
        priority: "high",
        examinerFocus:
          "Computing and interpreting activity, liquidity, solvency, profitability, and DuPont ratios, and spotting earnings-quality red flags.",
        typicalQuestionForms: [
          "Compute a ratio and interpret the change.",
          "Decompose ROE using DuPont.",
        ],
        mustKnow: [
          "5-way DuPont: ROE = tax burden × interest burden × EBIT margin × asset turnover × leverage.",
          "Current ratio = current assets/current liabilities; quick ratio excludes inventory.",
          "Accruals and rising DSO/inventory relative to sales are earnings-quality warning signs.",
        ],
        scoringActions: [
          "Use the DuPont decomposition to locate the driver of an ROE change.",
          "Compare cash flow from operations to net income as a quality screen.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "FSA is ~13–17% of L1 — the largest non-ethics topic; target >70% given its weight.",
      timeBudget: "~1.5 min/MCQ; inventory and deferred-tax items can be computation-heavy.",
      answerSequence: [
        "Identify the statement/standard area.",
        "Note IFRS vs US GAAP if relevant.",
        "Compute, then interpret the ratio/effect directionally.",
      ],
      qualityChecks: [
        "Did I state the price-direction assumption for FIFO/LIFO?",
        "Did I separate income timing from total cash-flow neutrality when capitalising?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "How the statements articulate",
        testPointIds: ["tp1"],
        explanation: [
          "The three statements are a single interlocking system. The income statement's net income flows (net of dividends) into retained earnings on the balance sheet, keeping Assets = Liabilities + Equity in balance. The cash-flow statement then explains the change in the cash balance by reconciling accrual net income to cash generated, adjusting for non-cash items (depreciation, deferred tax) and changes in working capital.",
          "Classification is heavily tested. Under US GAAP, interest paid, interest received, and dividends received are operating cash flows, while dividends paid are financing. IFRS is more flexible: interest and dividends paid may be operating or financing, and interest/dividends received may be operating or investing, provided the choice is consistent.",
          "A robust exam skill is transaction tracing: for any event, ask what happens on each statement. For example, buying inventory on credit raises inventory (asset) and accounts payable (liability) with no income effect yet; selling it recognises revenue and COGS on the income statement and moves cash or receivables on the balance sheet, with the cash effect captured in CFO.",
        ],
        keyRules: [
          "Net income − dividends flows to retained earnings.",
          "US GAAP: interest paid/received and dividends received = operating.",
          "IFRS gives flexibility on interest/dividend classification.",
        ],
      },
      {
        id: "sn2",
        title: "Inventory cost-flow assumptions",
        testPointIds: ["tp2"],
        explanation: [
          "The cost-flow assumption determines which costs land in COGS and which remain in ending inventory. In a rising-price environment, FIFO assigns older (cheaper) costs to COGS, producing lower COGS, higher gross profit and net income, and a higher, more current ending-inventory value. LIFO assigns newer (more expensive) costs to COGS, giving higher COGS, lower income, and — importantly — lower taxes, which is the main reason US firms elect it.",
          "IFRS prohibits LIFO; US GAAP permits it. To compare a LIFO reporter with a FIFO peer, use the LIFO reserve (the disclosed difference between FIFO and LIFO inventory): add the reserve to LIFO inventory to restate to FIFO, and adjust COGS by the change in the reserve.",
          "The revenue side uses a five-step model: identify the contract, identify performance obligations, determine the transaction price, allocate it to the obligations, and recognise revenue as each obligation is satisfied. This principles-based approach replaced older rules and is common exam territory for timing questions.",
        ],
        keyRules: [
          "Rising prices: FIFO → higher income; LIFO → higher COGS, lower tax.",
          "LIFO banned under IFRS; allowed under US GAAP.",
          "Restated FIFO inventory = LIFO inventory + LIFO reserve.",
        ],
        workedProblem: {
          scenario:
            "A firm buys inventory: 100 units at $10 (Jan), 100 at $12 (Jun), 100 at $14 (Nov). It sells 150 units during the year at $20 each. Prices are rising. Compute COGS and ending inventory under FIFO and under LIFO, and the gross profit difference.",
          steps: [
            "FIFO COGS: first 100 @ $10 + next 50 @ $12 = 1,000 + 600 = $1,600. FIFO ending inventory = 50 @ $12 + 100 @ $14 = 600 + 1,400 = $2,000.",
            "LIFO COGS: last 100 @ $14 + next 50 @ $12 = 1,400 + 600 = $2,000. LIFO ending inventory = 100 @ $10 + 50 @ $12 = 1,000 + 600 = $1,600.",
            "Revenue = 150 × $20 = $3,000. FIFO gross profit = 3,000 − 1,600 = $1,400. LIFO gross profit = 3,000 − 2,000 = $1,000.",
            "LIFO reserve = FIFO inventory − LIFO inventory = 2,000 − 1,600 = $400.",
          ],
          conclusion:
            "FIFO shows $400 higher gross profit and $400 higher ending inventory; the $400 LIFO reserve reconciles the two. LIFO's higher COGS lowers taxable income and taxes in this rising-price setting.",
          markingNotes: [
            "Correct layer assignment for both methods.",
            "Gross profit gap equals the change in the LIFO reserve.",
            "Recognises LIFO's tax advantage in inflation.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Long-lived assets: capitalisation and impairment",
        testPointIds: ["tp3"],
        explanation: [
          "Capitalising an expenditure records it as an asset and spreads the cost over future periods via depreciation/amortisation; expensing recognises it immediately. Capitalising therefore raises current-period income and total assets, and in the cash-flow statement it shifts the outflow from operating (CFO) to investing (CFI), flattering CFO. Over the asset's life, total reported income and total cash flow are identical under either treatment — only timing and classification differ.",
          "Depreciation method choice affects the income pattern: straight-line spreads cost evenly; accelerated methods (declining balance) front-load expense, lowering early income and raising later income. Units-of-production ties expense to usage. The choice does not change total depreciation, only its timing.",
          "IFRS and US GAAP diverge on subsequent measurement. IFRS permits a revaluation model that marks PP&E to fair value, with increases generally to a revaluation surplus in equity; US GAAP uses the cost model only. On impairment, US GAAP uses a recoverability test and prohibits reversals, whereas IFRS uses a one-step recoverable-amount test and permits reversal of prior impairments (except for goodwill).",
        ],
        keyRules: [
          "Capitalising boosts current income and CFO; total cash flow unchanged.",
          "IFRS allows PP&E revaluation; US GAAP cost model only.",
          "IFRS permits impairment reversals (not goodwill); US GAAP does not.",
        ],
      },
      {
        id: "sn4",
        title: "Deferred taxes",
        testPointIds: ["tp4"],
        explanation: [
          "Book income and taxable income differ for two reasons. Permanent differences (e.g. tax-exempt municipal interest, non-deductible fines) never reverse; they change the effective tax rate but create no deferred balances. Temporary differences arise from timing — an item is recognised in different periods for book and tax — and they reverse over time, generating deferred tax assets or liabilities.",
          "The classic deferred tax liability comes from using accelerated depreciation for tax and straight-line for books: early tax depreciation exceeds book depreciation, so cash taxes are deferred to later years, creating a DTL. Deferred tax assets arise when the firm pays tax now on income not yet recognised for books (e.g. warranty accruals, loss carryforwards).",
          "A valuation allowance reduces a DTA to the amount more likely than not to be realised; increasing it lowers income. When the enacted tax rate changes, existing deferred balances are remeasured at the new rate: a rate cut reduces both DTLs and DTAs, which can produce a one-time income effect in the period of enactment.",
        ],
        keyRules: [
          "Permanent differences: effective-rate effect, no deferral.",
          "Accelerated tax depreciation → deferred tax liability.",
          "Rate cut remeasures DTAs/DTLs downward.",
        ],
      },
      {
        id: "sn5",
        title: "Ratio analysis and DuPont",
        testPointIds: ["tp5"],
        explanation: [
          "Ratios fall into families: activity (turnover, days), liquidity (current, quick, cash), solvency (debt-to-equity, interest coverage), and profitability (margins, ROA, ROE). The analyst's job is not just computation but interpretation of trends and cross-firm differences, adjusting for accounting choices (e.g. converting LIFO to FIFO) before comparing.",
          "The DuPont framework decomposes ROE to locate the driver of a change. The three-way version is ROE = net profit margin × asset turnover × financial leverage. The five-way version splits margin further: ROE = tax burden × interest burden × EBIT margin × asset turnover × leverage. A rising ROE driven by leverage is lower quality than one driven by margins or efficiency.",
          "Earnings quality is a recurring theme: compare cash flow from operations to net income (persistent gaps suggest aggressive accruals), watch days-sales-outstanding and inventory growing faster than sales, and be alert to non-recurring items inflating income. High accruals relative to cash earnings predict weaker future returns.",
        ],
        keyRules: [
          "5-way DuPont isolates tax, interest, margin, turnover, leverage.",
          "Quick ratio excludes inventory from current assets.",
          "CFO << net income is an earnings-quality red flag.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L1 calculation MCQ — FIFO/LIFO",
        question:
          "In a period of rising prices, a firm switches from FIFO to LIFO. All else equal, what happens to reported net income, ending inventory, and income taxes?",
        answerPlan: [
          "State rising-price effects.",
        ],
        modelAnswer:
          "Net income falls (LIFO assigns higher, more recent costs to COGS), ending inventory falls (older, cheaper costs remain on the balance sheet), and income taxes fall (lower taxable income). The tax saving and resulting higher cash flow are the main economic benefit of LIFO in inflation.",
        markingGuide: [
          "Net income and ending inventory both lower under LIFO.",
          "Identifies lower taxes as the benefit.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L1 conceptual MCQ — capitalise vs expense",
        question:
          "A firm capitalises a large expenditure that a competitor expenses. In the current year, how do net income and cash flow from operations compare, and what happens over the asset's full life?",
        answerPlan: [
          "Current-year timing effect.",
          "Life-total neutrality.",
        ],
        modelAnswer:
          "In the current year the capitalising firm reports higher net income (only depreciation hits the income statement) and higher CFO (the outflow is classified as investing, not operating). Over the asset's entire life, total net income and total cash flow are the same under both treatments; only the timing and cash-flow classification differ.",
        markingGuide: [
          "Higher current income and CFO for capitaliser.",
          "States life-total neutrality.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L1 calculation MCQ — DuPont",
        question:
          "A firm has net profit margin 8%, asset turnover 1.5, and financial leverage (assets/equity) 2.0. Compute ROE and identify the primary lever if ROE rose because leverage increased to 2.5.",
        answerPlan: [
          "Apply 3-way DuPont.",
          "Interpret leverage-driven change.",
        ],
        modelAnswer:
          "ROE = 0.08 × 1.5 × 2.0 = 24%. If leverage rises to 2.5 with margin and turnover unchanged, ROE = 0.08 × 1.5 × 2.5 = 30%. The increase is driven entirely by financial leverage, which is lower-quality growth because it also raises financial risk rather than improving operating efficiency or profitability.",
        markingGuide: [
          "ROE = 24% then 30% computed correctly.",
          "Identifies leverage as the (lower-quality) driver.",
        ],
      },
    ],
  }),

  "cfa-l1-m5": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Cost of capital: WACC and component costs",
        priority: "critical",
        examinerFocus:
          "Computing WACC with the correct after-tax cost of debt and CAPM cost of equity, using market-value weights and marginal (not historical) costs.",
        typicalQuestionForms: [
          "Compute WACC given component costs and weights.",
          "Compute cost of equity via CAPM or dividend-growth.",
        ],
        mustKnow: [
          "WACC = wd·rd·(1−t) + wp·rp + we·re, using market-value weights and marginal costs.",
          "CAPM: re = rf + β(E[Rm] − rf).",
          "Cost of debt is after-tax because interest is tax-deductible; preferred cost = Dp/Pp.",
        ],
        scoringActions: [
          "Apply the (1−t) factor only to debt.",
          "Use target/market-value weights, not book values.",
        ],
      },
      {
        id: "tp2",
        title: "Leverage: operating, financial and total",
        priority: "high",
        examinerFocus:
          "Computing degrees of operating/financial/total leverage and interpreting how fixed costs and debt amplify variability in operating and net income.",
        typicalQuestionForms: [
          "Compute DOL/DFL/DTL at a given output.",
          "Effect of higher fixed costs on the break-even point.",
        ],
        mustKnow: [
          "DOL = %ΔEBIT/%Δsales = contribution margin/(contribution margin − fixed costs).",
          "DFL = %ΔEPS/%ΔEBIT = EBIT/(EBIT − interest).",
          "DTL = DOL × DFL = %ΔEPS/%Δsales.",
        ],
        scoringActions: [
          "Use the contribution-margin form of DOL for speed.",
          "Multiply DOL and DFL to get total leverage.",
        ],
      },
      {
        id: "tp3",
        title: "Capital budgeting: NPV, IRR and decision rules",
        priority: "critical",
        examinerFocus:
          "Applying NPV and IRR correctly, resolving conflicts for mutually exclusive projects, and identifying relevant (incremental) cash flows.",
        typicalQuestionForms: [
          "Compute NPV/IRR and choose a project.",
          "Which cash flows are relevant (sunk vs incremental)?",
        ],
        mustKnow: [
          "Accept if NPV > 0 or IRR > required return; NPV is preferred when they conflict for mutually exclusive projects.",
          "Include incremental after-tax cash flows and opportunity costs; exclude sunk costs and financing costs (captured in the discount rate).",
          "IRR can mislead with non-conventional cash flows (multiple IRRs) or scale/timing differences.",
        ],
        scoringActions: [
          "Default to NPV for mutually exclusive project conflicts.",
          "Strip out sunk costs; include opportunity cost and externalities.",
        ],
      },
      {
        id: "tp4",
        title: "Working capital and liquidity management",
        priority: "high",
        examinerFocus:
          "Computing the cash conversion cycle and evaluating short-term financing and receivables/inventory/payables management.",
        typicalQuestionForms: [
          "Compute the operating and cash conversion cycle.",
          "Effect of a policy change on the cash cycle.",
        ],
        mustKnow: [
          "Operating cycle = DSO + DIO; cash conversion cycle = DSO + DIO − DPO.",
          "A shorter cash conversion cycle frees cash and reduces financing needs.",
          "Cost of trade credit forgone (e.g. 2/10 net 30) can be very high on an annualised basis.",
        ],
        scoringActions: [
          "Subtract days payable to move from operating to cash cycle.",
          "Annualise trade-credit discounts to compare to borrowing costs.",
        ],
      },
      {
        id: "tp5",
        title: "Capital structure and dividend/payout policy",
        priority: "medium",
        examinerFocus:
          "Modigliani-Miller propositions with and without taxes, and the effects of dividends vs buybacks on EPS and shareholder wealth.",
        typicalQuestionForms: [
          "MM with taxes: effect of leverage on firm value.",
          "Compare a dividend to an equivalent buyback.",
        ],
        mustKnow: [
          "MM (no taxes): capital structure is irrelevant; with taxes, the interest tax shield raises firm value with leverage (offset by financial distress costs).",
          "A share buyback reduces shares outstanding; it raises EPS if the after-tax earnings yield exceeds the after-tax cost of funds used.",
          "In perfect markets, a cash dividend and an equivalent buyback leave total shareholder wealth unchanged.",
        ],
        scoringActions: [
          "Add the debt tax shield when taxes are present; subtract distress costs at high leverage.",
          "Compare buyback vs dividend on a total-wealth basis in perfect markets.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Corporate Issuers is ~8–12% of L1; WACC and capital budgeting are high-yield — target ~70%.",
      timeBudget: "~1.5 min/MCQ; WACC and NPV problems reward clean setup.",
      answerSequence: [
        "Identify the topic (cost of capital, leverage, budgeting, WC).",
        "Write the formula and label inputs (after-tax? market weights?).",
        "Compute and check the decision rule (NPV>0, IRR>hurdle).",
      ],
      qualityChecks: [
        "After-tax cost of debt and market-value weights used?",
        "Sunk costs excluded and opportunity costs included?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Weighted average cost of capital",
        testPointIds: ["tp1"],
        explanation: [
          "WACC is the blended required return on a firm's capital and the discount rate for average-risk projects. It uses market-value weights (reflecting how capital is actually valued) and marginal component costs (the cost of raising the next dollar), not historical or book figures. The formula is WACC = wd·rd·(1−t) + wp·rp + we·re.",
          "The cost of debt is measured after tax, rd·(1−t), because interest is tax-deductible; this tax shield is a central reason debt is 'cheaper' than equity. The cost of preferred is Dp/Pp. The cost of equity is estimated with CAPM, re = rf + β(equity risk premium), or with the dividend-growth model, re = D1/P0 + g.",
          "Because equity is riskier than debt, re > rd, so shifting the mix toward debt initially lowers WACC — until rising financial risk raises both rd and re and the expected costs of financial distress dominate. The exam expects clean application: apply the tax factor only to debt, and never mix book and market weights.",
        ],
        keyRules: [
          "WACC uses market-value weights and marginal costs.",
          "Only debt gets the (1−t) tax shield.",
          "CAPM: re = rf + β·ERP.",
        ],
        workedProblem: {
          scenario:
            "A firm targets 40% debt, 10% preferred, 50% equity (market values). Pre-tax cost of debt 6%, tax rate 25%. Preferred pays a $5 dividend on a $50 price. Equity: risk-free 3%, beta 1.2, equity risk premium 5%. Compute WACC.",
          steps: [
            "After-tax cost of debt = 6% × (1 − 0.25) = 4.5%.",
            "Cost of preferred = 5/50 = 10%.",
            "Cost of equity (CAPM) = 3% + 1.2 × 5% = 3% + 6% = 9%.",
            "WACC = 0.40 × 4.5% + 0.10 × 10% + 0.50 × 9% = 1.8% + 1.0% + 4.5% = 7.3%.",
          ],
          conclusion:
            "The firm's WACC is 7.3%; projects of average risk should be discounted at this rate and accepted only if they earn more than 7.3%.",
          markingNotes: [
            "Tax shield applied only to debt.",
            "Preferred and CAPM costs correct.",
            "Weights sum to 1 and WACC = 7.3%.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Leverage and break-even",
        testPointIds: ["tp2"],
        explanation: [
          "Operating leverage arises from fixed operating costs: the higher the proportion of fixed costs, the more a given change in sales magnifies the change in operating income (EBIT). The degree of operating leverage, DOL = %ΔEBIT/%Δsales, can be computed as contribution margin divided by (contribution margin − fixed costs) at a given output level.",
          "Financial leverage arises from fixed financing costs (interest). The degree of financial leverage, DFL = %ΔEPS/%ΔEBIT = EBIT/(EBIT − interest), measures how debt amplifies the effect of an EBIT change on earnings per share. More debt raises DFL and the volatility of EPS.",
          "Total leverage combines both: DTL = DOL × DFL = %ΔEPS/%Δsales. A firm with high fixed operating costs and high debt has very volatile earnings. The break-even quantity rises with fixed costs; operating break-even is where EBIT is zero, and total break-even also covers fixed financing costs.",
        ],
        keyRules: [
          "DOL = CM/(CM − fixed costs).",
          "DFL = EBIT/(EBIT − interest).",
          "DTL = DOL × DFL.",
        ],
      },
      {
        id: "sn3",
        title: "Capital budgeting decisions",
        testPointIds: ["tp3"],
        explanation: [
          "NPV discounts all incremental after-tax cash flows at the required return and accepts the project if NPV is positive, because a positive NPV adds to shareholder wealth by exactly that amount. IRR is the discount rate that sets NPV to zero; the rule is to accept when IRR exceeds the required return. For independent projects with conventional cash flows, the two rules agree.",
          "For mutually exclusive projects they can conflict because of differences in scale or in the timing of cash flows, and because IRR implicitly assumes reinvestment at the IRR rather than the more realistic required return. When they conflict, choose the project with the higher NPV — it maximises absolute wealth. Non-conventional cash-flow signs can also give multiple or no IRRs.",
          "Relevant cash flows are incremental: include the initial outlay, changes in working capital, after-tax operating flows, opportunity costs, and terminal (salvage) values. Exclude sunk costs (already spent, irreversible) and financing costs such as interest, which are already reflected in the discount rate. Externalities like cannibalisation of existing sales must be included.",
        ],
        keyRules: [
          "Accept NPV > 0; prefer NPV over IRR when they conflict.",
          "Include incremental flows and opportunity cost; exclude sunk and financing costs.",
          "Non-conventional flows can produce multiple IRRs.",
        ],
      },
      {
        id: "sn4",
        title: "Working capital and the cash conversion cycle",
        testPointIds: ["tp4"],
        explanation: [
          "Working-capital management balances liquidity against the cost of holding idle assets. The operating cycle is the time from acquiring inventory to collecting cash on its sale: operating cycle = days of inventory (DIO) + days of receivables (DSO). Subtracting the days the firm takes to pay suppliers gives the cash conversion cycle: CCC = DIO + DSO − DPO.",
          "A shorter cash conversion cycle means the firm finances its operations for fewer days, freeing cash and reducing reliance on short-term borrowing. Firms shorten it by collecting receivables faster, turning inventory more quickly, or (carefully) extending payables — though stretching payables can forfeit discounts and damage supplier relationships.",
          "Trade credit terms embed an implicit cost. Terms of '2/10 net 30' mean a 2% discount for paying within 10 days instead of 30. Forgoing the discount to pay 20 days later has a very high annualised cost, often far above short-term borrowing rates, so a firm with access to cheap financing should usually take the discount.",
        ],
        keyRules: [
          "Operating cycle = DIO + DSO; CCC = DIO + DSO − DPO.",
          "Shorter CCC reduces financing needs.",
          "Annualise trade-credit discounts before comparing to borrowing cost.",
        ],
      },
      {
        id: "sn5",
        title: "Capital structure and payout",
        testPointIds: ["tp5"],
        explanation: [
          "Modigliani-Miller's first proposition, in a world without taxes or frictions, says firm value is independent of capital structure — value comes from assets, not financing. Their second proposition says the cost of equity rises linearly with leverage, exactly offsetting the cheaper debt, so WACC is constant.",
          "Introducing corporate taxes changes the conclusion: interest is deductible, so debt creates a tax shield worth (tax rate × debt) that raises firm value with leverage. This is offset at higher leverage by the expected costs of financial distress and agency costs, producing a trade-off theory with an optimal, interior level of debt where the marginal tax benefit equals the marginal distress cost.",
          "On payout, a cash dividend and an economically equivalent share buyback leave total shareholder wealth unchanged in perfect markets — the buyback simply returns cash by reducing share count instead of paying per-share cash. A buyback increases EPS when the after-tax earnings yield exceeds the after-tax cost of the funds used, and it offers tax timing flexibility to shareholders relative to dividends.",
        ],
        keyRules: [
          "MM no-tax: structure irrelevant; MM with tax: leverage adds a tax shield.",
          "Optimal leverage trades tax shield against distress costs.",
          "Dividend vs equivalent buyback: total wealth unchanged in perfect markets.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L1 calculation MCQ — WACC",
        question:
          "A firm is financed 60% equity, 40% debt at market value. Cost of equity 11%, pre-tax cost of debt 7%, tax rate 30%. Compute WACC.",
        answerPlan: [
          "After-tax debt cost.",
          "Weighted sum.",
        ],
        modelAnswer:
          "After-tax cost of debt = 7% × (1 − 0.30) = 4.9%. WACC = 0.60 × 11% + 0.40 × 4.9% = 6.6% + 1.96% = 8.56%. Only debt receives the tax adjustment, and market-value weights are used.",
        markingGuide: [
          "After-tax debt 4.9%.",
          "WACC = 8.56% (±rounding).",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L1 conceptual MCQ — relevant cash flows",
        question:
          "In evaluating a new product line, a firm has already spent $2m on market research and expects the new line to reduce sales of an existing product by $500k per year. Which of these belongs in the capital-budgeting analysis?",
        answerPlan: [
          "Classify sunk vs incremental externality.",
        ],
        modelAnswer:
          "The $2m market research is a sunk cost and must be excluded — it is already spent regardless of the decision. The $500k annual cannibalisation of existing sales is an incremental externality and must be included as a reduction in the project's cash flows, because it is a real consequence of accepting the project.",
        markingGuide: [
          "Excludes the $2m sunk cost.",
          "Includes the $500k cannibalisation externality.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L1 calculation MCQ — cash conversion cycle",
        question:
          "A firm has days inventory outstanding of 50, days sales outstanding of 40, and days payables outstanding of 30. Compute the operating cycle and the cash conversion cycle.",
        answerPlan: [
          "Sum DIO + DSO.",
          "Subtract DPO.",
        ],
        modelAnswer:
          "Operating cycle = DIO + DSO = 50 + 40 = 90 days. Cash conversion cycle = 90 − DPO = 90 − 30 = 60 days. The firm's cash is tied up for 60 days between paying suppliers and collecting from customers, which must be financed.",
        markingGuide: [
          "Operating cycle = 90 days.",
          "CCC = 60 days.",
        ],
      },
    ],
  }),

  "cfa-l1-m6": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Equity securities and market organisation",
        priority: "medium",
        examinerFocus:
          "Distinguishing security types (common vs preferred, convertible, depository receipts) and market mechanics (order types, margin, market efficiency forms).",
        typicalQuestionForms: [
          "Classify a security or order type.",
          "Which market-efficiency form is implied?",
        ],
        mustKnow: [
          "Preferred stock has priority over common for dividends/liquidation; convertible preferred can convert to common.",
          "Margin: return is magnified; a margin call occurs when equity/value falls below the maintenance margin.",
          "EMH forms: weak (past prices), semi-strong (all public info), strong (all info incl. private).",
        ],
        scoringActions: [
          "Match the information set to the correct EMH form.",
          "Compute the margin-call price from the maintenance-margin condition.",
        ],
      },
      {
        id: "tp2",
        title: "Dividend discount models",
        priority: "critical",
        examinerFocus:
          "Applying the Gordon growth model and multistage DDMs, and solving for value, required return, or implied growth.",
        typicalQuestionForms: [
          "Compute intrinsic value via Gordon growth.",
          "Two-stage DDM value.",
        ],
        mustKnow: [
          "Gordon growth: V0 = D1/(r − g), valid only when r > g and g is constant.",
          "Sustainable growth g = retention ratio × ROE.",
          "Multistage: discount explicit dividends, then a terminal (Gordon) value at the stable-growth date.",
        ],
        scoringActions: [
          "Use next year's dividend D1 = D0(1+g) in the numerator.",
          "Discount the terminal value from the correct year.",
        ],
      },
      {
        id: "tp3",
        title: "Multiples and relative valuation",
        priority: "high",
        examinerFocus:
          "Computing and interpreting P/E, P/B, P/S, and EV/EBITDA, and knowing when each is appropriate and how it links to fundamentals.",
        typicalQuestionForms: [
          "Compute a justified P/E from fundamentals.",
          "Which multiple suits a cyclical or loss-making firm?",
        ],
        mustKnow: [
          "Justified leading P/E = (D1/E1)/(r − g) = payout/(r − g).",
          "EV/EBITDA is capital-structure neutral and useful across different leverage/depreciation policies.",
          "P/S and EV/EBITDA are more robust than P/E for firms with negative or volatile earnings.",
        ],
        scoringActions: [
          "Link the justified multiple to payout, growth and required return.",
          "Prefer EV/EBITDA or P/S when earnings are negative or distorted.",
        ],
      },
      {
        id: "tp4",
        title: "Free cash flow and enterprise valuation basics",
        priority: "high",
        examinerFocus:
          "Understanding FCFF vs FCFE and enterprise value construction, and when equity vs firm cash flows are appropriate.",
        typicalQuestionForms: [
          "Convert net income/CFO to FCFF or FCFE.",
          "Build enterprise value from market cap and net debt.",
        ],
        mustKnow: [
          "EV = market value of equity + debt + preferred + minority interest − cash & equivalents.",
          "FCFF = CFO + Int(1−t) − FCInv; FCFE = FCFF − Int(1−t) + net borrowing.",
          "Discount FCFF at WACC (firm value), FCFE at cost of equity (equity value).",
        ],
        scoringActions: [
          "Subtract cash when computing enterprise value.",
          "Match the discount rate to the cash-flow definition (WACC↔FCFF, re↔FCFE).",
        ],
      },
      {
        id: "tp5",
        title: "Industry and company analysis",
        priority: "medium",
        examinerFocus:
          "Applying Porter's five forces, life-cycle stages, and competitive-strategy classification.",
        typicalQuestionForms: [
          "Which of Porter's forces is described?",
          "Identify the industry life-cycle stage.",
        ],
        mustKnow: [
          "Porter's five forces: rivalry, threat of new entrants, substitutes, buyer power, supplier power.",
          "Life-cycle stages: embryonic, growth, shakeout, mature, decline — each with different margins and reinvestment.",
          "Generic strategies: cost leadership vs differentiation (and focus variants).",
        ],
        scoringActions: [
          "Map the described dynamic to a specific force or life-cycle stage.",
          "Link strategy choice to margin and pricing-power implications.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Equity is ~10–12% of L1; DDM and multiples are high-yield — target ~70%.",
      timeBudget: "~1.5 min/MCQ; valuation items reward correct D1/terminal-value handling.",
      answerSequence: [
        "Identify valuation approach (DDM, multiple, FCF, relative).",
        "Set up the formula with the right timing (D1, terminal year).",
        "Compute and sanity-check r > g and the implied multiple.",
      ],
      qualityChecks: [
        "Did I use D1 (not D0) in the Gordon numerator?",
        "Did I match discount rate to cash-flow type?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Securities, markets and efficiency",
        testPointIds: ["tp1"],
        explanation: [
          "Equity securities range from common shares (residual claim, voting rights) to preferred shares (fixed dividend priority, usually no vote) and hybrids such as convertible preferred and depository receipts that give exposure to foreign shares. Understanding the claim priority and conversion features is a frequent recognition task.",
          "Market mechanics include order types (market, limit, stop) and margin trading, which magnifies both gains and losses. A leveraged buyer faces a margin call when the position's equity percentage falls to the maintenance margin; the trigger price can be computed from the initial purchase price, the loan, and the maintenance requirement.",
          "The efficient market hypothesis has three forms defined by the information already reflected in prices: weak-form (all past price/volume information, so technical analysis cannot add value), semi-strong-form (all publicly available information, so fundamental analysis of public data cannot consistently add value), and strong-form (all information including private, implying even insiders cannot outperform). Empirical evidence broadly supports weak and semi-strong forms.",
        ],
        keyRules: [
          "Preferred ranks above common for dividends/liquidation.",
          "Margin call when equity % hits the maintenance margin.",
          "EMH: weak (prices), semi-strong (public), strong (all).",
        ],
      },
      {
        id: "sn2",
        title: "Dividend discount models",
        testPointIds: ["tp2"],
        explanation: [
          "The dividend discount model values a share as the present value of expected future dividends. The Gordon (constant-growth) form, V0 = D1/(r − g), assumes dividends grow forever at a constant rate g below the required return r. The numerator is next period's dividend, D1 = D0(1 + g); using D0 by mistake understates value.",
          "Sustainable growth links dividend policy to fundamentals: g = retention ratio × ROE = (1 − payout) × ROE. This ties the growth assumption to the firm's profitability and reinvestment, and lets you check whether an assumed g is realistic given ROE.",
          "When growth is not constant, a multistage model discounts each explicit-period dividend individually and then adds a terminal value computed with the Gordon formula at the point the firm reaches stable growth. The terminal value is a value one period before the first stable dividend and must itself be discounted back to today — a common timing error is discounting it by the wrong number of periods.",
        ],
        keyRules: [
          "Gordon: V0 = D1/(r − g), requires r > g.",
          "g = (1 − payout) × ROE.",
          "Terminal value sits one period before stable dividends; discount it back.",
        ],
        workedProblem: {
          scenario:
            "A company just paid a dividend of $2.00 (D0). Dividends will grow 20% for two years, then 4% forever. The required return is 10%. Estimate the intrinsic value.",
          steps: [
            "Forecast dividends: D1 = 2.00 × 1.20 = 2.40; D2 = 2.40 × 1.20 = 2.88; D3 = 2.88 × 1.04 = 2.9952.",
            "Terminal value at end of year 2: TV2 = D3/(r − g) = 2.9952/(0.10 − 0.04) = 2.9952/0.06 = 49.92.",
            "Discount to today at 10%: PV(D1) = 2.40/1.10 = 2.182; PV(D2) = 2.88/1.21 = 2.380; PV(TV2) = 49.92/1.21 = 41.256.",
            "Sum: V0 = 2.182 + 2.380 + 41.256 = 45.82.",
          ],
          conclusion:
            "Intrinsic value is approximately $45.82 per share; the terminal value dominates, underscoring the sensitivity of the estimate to the long-run growth and required-return assumptions.",
          markingNotes: [
            "D3 uses the stable 4% growth; TV placed at year 2.",
            "TV discounted by two periods, not three.",
            "Value ≈ $45.8 (±rounding).",
          ],
        },
      },
      {
        id: "sn3",
        title: "Relative valuation with multiples",
        testPointIds: ["tp3"],
        explanation: [
          "Multiples value a company relative to peers using a price or enterprise-value ratio to a fundamental (earnings, book value, sales, EBITDA). The price-to-earnings ratio is most common; a justified leading P/E derived from the Gordon model is payout/(r − g), showing that higher growth and lower required return raise the warranted multiple.",
          "Different multiples suit different situations. P/E fails when earnings are negative or highly cyclical; in those cases P/S (sales are always positive and less manipulable) or EV/EBITDA are more robust. EV/EBITDA is capital-structure and depreciation-policy neutral because enterprise value spans all capital providers and EBITDA precedes interest and depreciation, making it ideal for comparing firms with different leverage.",
          "The key discipline is comparability: the peer set, accounting policies, and growth/risk profiles must be similar, and any multiple should be interpreted through its fundamental drivers (growth, risk, payout, profitability) rather than taken at face value.",
        ],
        keyRules: [
          "Justified leading P/E = payout/(r − g).",
          "EV/EBITDA is leverage- and depreciation-neutral.",
          "Use P/S or EV/EBITDA when earnings are negative/volatile.",
        ],
      },
      {
        id: "sn4",
        title: "Free cash flow and enterprise value",
        testPointIds: ["tp4"],
        explanation: [
          "Free cash flow valuation discounts cash actually available to capital providers, which is more robust than dividends for non-dividend-payers. Free cash flow to the firm (FCFF) is cash available to all providers: FCFF = CFO + interest×(1 − tax) − fixed capital investment. Free cash flow to equity (FCFE) is what remains for shareholders: FCFE = FCFF − interest×(1 − tax) + net borrowing.",
          "The discount rate must match the cash-flow definition. FCFF, being pre-financing, is discounted at the WACC to obtain firm (enterprise) value; FCFE, being post-financing, is discounted at the cost of equity to obtain equity value directly. Mixing them is a classic error.",
          "Enterprise value represents the value of the operating business to all claimants: EV = market value of equity + debt + preferred + minority interest − cash and equivalents. Cash is subtracted because it could be used to retire claims. EV is the numerator in EV/EBITDA and the output of discounting FCFF at WACC.",
        ],
        keyRules: [
          "FCFF = CFO + Int(1−t) − FCInv; FCFE = FCFF − Int(1−t) + net borrowing.",
          "Discount FCFF at WACC, FCFE at cost of equity.",
          "EV = equity + debt + preferred + minority − cash.",
        ],
      },
      {
        id: "sn5",
        title: "Industry and competitive analysis",
        testPointIds: ["tp5"],
        explanation: [
          "Porter's five forces framework assesses the structural attractiveness of an industry: the intensity of rivalry among incumbents, the threat of new entrants (governed by barriers to entry), the threat of substitutes, the bargaining power of buyers, and the bargaining power of suppliers. High force intensity compresses margins; strong barriers and weak buyer/supplier power support profitability.",
          "The industry life cycle shapes growth and reinvestment. Embryonic and growth stages feature rising demand, heavy reinvestment, and often thin or negative early profits; the shakeout and mature stages bring consolidation, pricing discipline, and higher free cash flow; decline brings falling demand and overcapacity. Positioning valuation assumptions to the correct stage is essential.",
          "Firms compete through generic strategies: cost leadership (winning on price via scale and efficiency) or differentiation (commanding a premium via brand, quality, or features), each optionally with a narrow focus. The chosen strategy has direct implications for margins, pricing power, and the sustainability of returns.",
        ],
        keyRules: [
          "Five forces: rivalry, entrants, substitutes, buyer power, supplier power.",
          "Life cycle: embryonic → growth → shakeout → mature → decline.",
          "Generic strategies: cost leadership vs differentiation.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L1 calculation MCQ — Gordon growth",
        question:
          "A stock just paid a $3.00 dividend, expected to grow at 5% forever. The required return is 12%. Compute the intrinsic value.",
        answerPlan: [
          "Compute D1.",
          "Apply Gordon.",
        ],
        modelAnswer:
          "D1 = 3.00 × 1.05 = 3.15. V0 = D1/(r − g) = 3.15/(0.12 − 0.05) = 3.15/0.07 = $45.00. The model requires r > g, which holds here (12% > 5%).",
        markingGuide: [
          "Uses D1 = 3.15, not 3.00.",
          "Value = $45.00.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L1 conceptual MCQ — multiple choice",
        question:
          "An analyst compares two firms with very different capital structures and depreciation policies. Which valuation multiple is most appropriate, and why?",
        answerPlan: [
          "Identify neutrality requirement.",
        ],
        modelAnswer:
          "EV/EBITDA is most appropriate. Enterprise value captures all capital providers, making it neutral to differences in leverage, and EBITDA is measured before interest, taxes, depreciation and amortisation, neutralising depreciation-policy differences. P/E would be distorted by both leverage and depreciation choices.",
        markingGuide: [
          "Selects EV/EBITDA.",
          "Explains leverage- and depreciation-neutrality.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L1 calculation MCQ — enterprise value",
        question:
          "A firm has equity market cap $500m, total debt $200m, preferred $50m, and cash $80m. Compute enterprise value.",
        answerPlan: [
          "Apply EV formula.",
        ],
        modelAnswer:
          "EV = equity + debt + preferred − cash = 500 + 200 + 50 − 80 = $670m. Cash is subtracted because it could be used to pay down claims; the result is the value of the operating business to all capital providers.",
        markingGuide: [
          "Adds equity, debt, preferred; subtracts cash.",
          "EV = $670m.",
        ],
      },
    ],
  }),

  "cfa-l1-m7": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Bond pricing and yield measures",
        priority: "critical",
        examinerFocus:
          "Pricing a bond as the present value of coupons and principal, and computing/interpreting YTM, current yield, and the price-yield inverse relationship.",
        typicalQuestionForms: [
          "Compute a bond's price given YTM.",
          "Relationship of coupon, YTM and premium/discount.",
        ],
        mustKnow: [
          "Price = Σ coupon/(1+y)^t + par/(1+y)^N; price and yield move inversely.",
          "Coupon > YTM → premium; coupon < YTM → discount; coupon = YTM → par.",
          "YTM assumes reinvestment at the YTM and holding to maturity.",
        ],
        scoringActions: [
          "Adjust the coupon and periods for semiannual payments.",
          "Use the coupon-vs-YTM relation to sanity-check premium/discount.",
        ],
      },
      {
        id: "tp2",
        title: "Duration and convexity",
        priority: "critical",
        examinerFocus:
          "Computing modified duration and estimating price change from yield changes, and adding convexity for accuracy on large moves.",
        typicalQuestionForms: [
          "Estimate %price change for a yield change.",
          "Interpret effective duration for a callable bond.",
        ],
        mustKnow: [
          "%ΔPrice ≈ −ModDur × Δy + 0.5 × Convexity × (Δy)².",
          "Modified duration = Macaulay duration/(1 + y/m).",
          "Effective duration is used for bonds with embedded options (uses shifted-curve prices).",
        ],
        scoringActions: [
          "Include the convexity term for large yield moves.",
          "Use effective (not modified) duration when cash flows are rate-dependent.",
        ],
      },
      {
        id: "tp3",
        title: "Term structure, spot and forward rates",
        priority: "high",
        examinerFocus:
          "Bootstrapping spot rates, deriving forward rates, and pricing with spot curves rather than a single YTM.",
        typicalQuestionForms: [
          "Compute a forward rate from two spot rates.",
          "Price a bond using spot rates.",
        ],
        mustKnow: [
          "(1+z2)² = (1+z1)(1+1f1): forwards link successive spot rates.",
          "Spot rates discount each cash flow at its own maturity's rate.",
          "An upward-sloping spot curve implies forward rates above spot rates.",
        ],
        scoringActions: [
          "Chain spot rates to extract the implied forward.",
          "Discount each cash flow at the maturity-matched spot rate for arbitrage-free pricing.",
        ],
      },
      {
        id: "tp4",
        title: "Credit risk and spreads",
        priority: "high",
        examinerFocus:
          "Understanding credit ratings, spread measures (G-spread, Z-spread, OAS), and the drivers of credit risk and recovery.",
        typicalQuestionForms: [
          "Interpret a change in a bond's spread.",
          "Distinguish Z-spread from OAS.",
        ],
        mustKnow: [
          "Credit spread compensates for default probability and loss given default; it widens in stress.",
          "Z-spread is the constant spread over the spot curve that prices the bond; OAS removes the option cost.",
          "Expected loss = probability of default × loss given default (1 − recovery rate).",
        ],
        scoringActions: [
          "Use OAS to compare bonds with embedded options on a like-for-like basis.",
          "Link spread widening to deteriorating credit or rising risk aversion.",
        ],
      },
      {
        id: "tp5",
        title: "Securitised products and bond features",
        priority: "medium",
        examinerFocus:
          "Recognising embedded options (call/put/convertible), and the basics of ABS/MBS and prepayment risk.",
        typicalQuestionForms: [
          "Effect of a call feature on price/yield.",
          "Identify prepayment/extension risk.",
        ],
        mustKnow: [
          "A call option benefits the issuer, caps price appreciation, and raises the bond's yield; a put benefits the holder.",
          "MBS holders are short a prepayment option; falling rates accelerate prepayments (contraction risk).",
          "Callable bond price = straight bond − call option value; putable = straight bond + put value.",
        ],
        scoringActions: [
          "Add/subtract the embedded-option value to move between straight and option-embedded prices.",
          "Link rate direction to contraction vs extension risk in MBS.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Fixed income is ~10–12% of L1; pricing and duration are high-yield — target ~70%.",
      timeBudget: "~1.5 min/MCQ; pricing and forward-rate items reward clean calculator use.",
      answerSequence: [
        "Identify pricing vs risk vs structure question.",
        "Set semiannual conventions; write the formula.",
        "Compute and check the premium/discount and duration sign.",
      ],
      qualityChecks: [
        "Semiannual coupon and periods handled?",
        "Convexity added for large yield moves; effective duration for optioned bonds?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Bond pricing and yields",
        testPointIds: ["tp1"],
        explanation: [
          "A bond's price is the present value of its promised cash flows — periodic coupons and the par repayment — discounted at the yield to maturity. Because price is a decreasing function of yield, price and yield move inversely: when required yields rise, existing bonds with lower coupons fall in price, and vice versa.",
          "The relationship between the coupon rate and the market yield determines whether a bond trades at a premium, discount, or par. If the coupon rate exceeds the YTM, the bond is worth more than par (premium); if it is below the YTM, it trades at a discount; if equal, it trades at par. As a premium or discount bond approaches maturity, its price 'pulls to par'.",
          "YTM is the single internal rate of return that equates price to the present value of cash flows; it embeds two assumptions — that coupons are reinvested at the YTM and that the bond is held to maturity. For semiannual bonds, halve the coupon and annual yield and double the number of periods.",
        ],
        keyRules: [
          "Price and yield move inversely.",
          "Coupon > YTM = premium; < YTM = discount.",
          "Semiannual: half-coupon, half-yield, double periods.",
        ],
        workedProblem: {
          scenario:
            "A 5-year bond has a 6% annual coupon paid semiannually on $1,000 par. The market yield is 8% (annual, semiannual compounding). Compute the price and state whether it is a premium or discount.",
          steps: [
            "Convert to semiannual: coupon = 60/2 = $30 per period; periods N = 5 × 2 = 10; periodic yield = 8%/2 = 4%.",
            "PV of coupons (annuity): 30 × [1 − (1.04)^−10]/0.04 = 30 × 8.1109 = 243.33.",
            "PV of par: 1,000/(1.04)^10 = 1,000/1.48024 = 675.56.",
            "Price = 243.33 + 675.56 = 918.89.",
          ],
          conclusion:
            "The bond is worth about $918.89, a discount to par because its 6% coupon is below the 8% market yield — consistent with the coupon-vs-yield rule.",
          markingNotes: [
            "Semiannual conversion applied correctly.",
            "Coupon annuity and par PV summed.",
            "Identifies discount (price < par).",
          ],
        },
      },
      {
        id: "sn2",
        title: "Interest-rate risk: duration and convexity",
        testPointIds: ["tp2"],
        explanation: [
          "Duration measures a bond's price sensitivity to yield changes. Macaulay duration is the weighted-average time to cash flows; modified duration converts it into a percentage price change per unit of yield: ModDur = Macaulay/(1 + y/m). The first-order price estimate is %ΔPrice ≈ −ModDur × Δy.",
          "Because the price-yield relationship is curved, duration alone overstates the price fall and understates the price rise for large yield moves. Convexity corrects this: %ΔPrice ≈ −ModDur × Δy + 0.5 × Convexity × (Δy)². Convexity is always beneficial to the holder for option-free bonds, adding price when yields fall and cushioning losses when they rise.",
          "For bonds with embedded options, cash flows change with rates, so analytical (modified) duration is inappropriate; effective duration is used instead, computed from prices under small upward and downward parallel shifts of the benchmark curve. Callable bonds can exhibit negative convexity near the call price because upside is capped.",
        ],
        keyRules: [
          "%ΔPrice ≈ −ModDur×Δy + 0.5×Convexity×(Δy)².",
          "ModDur = Macaulay/(1 + y/m).",
          "Use effective duration/convexity for optioned bonds.",
        ],
      },
      {
        id: "sn3",
        title: "Spot rates, forward rates and arbitrage-free pricing",
        testPointIds: ["tp3"],
        explanation: [
          "A spot rate is the yield on a zero-coupon bond of a given maturity; the spot curve is the set of these rates. Arbitrage-free pricing discounts each of a bond's cash flows at the spot rate matching its maturity, rather than at a single YTM. If a bond's price deviates from this spot-based value, arbitrage via stripping/reconstitution is possible.",
          "Forward rates are future period rates implied by today's spot curve. The no-arbitrage link is (1 + z2)² = (1 + z1)(1 + 1f1): investing for two years must equal investing one year and rolling into the one-year forward. Rearranging solves for the implied forward rate between any two maturities.",
          "The shape of the curve carries information: an upward-sloping spot curve implies forward rates above current spot rates, while an inverted curve implies forwards below spot. Forward rates are commonly interpreted as the market's break-even future rates and are inputs to relative-value and hedging decisions.",
        ],
        keyRules: [
          "Discount each cash flow at its maturity-matched spot rate.",
          "(1+z2)² = (1+z1)(1+1f1) links spots and forwards.",
          "Upward-sloping spot curve → forwards above spot.",
        ],
      },
      {
        id: "sn4",
        title: "Credit risk and spread measures",
        testPointIds: ["tp4"],
        explanation: [
          "Credit risk is the risk that the issuer fails to make promised payments. Investors are compensated by a credit spread over a benchmark risk-free rate; the spread reflects the probability of default and the expected loss given default. Expected loss equals the probability of default multiplied by loss given default, where LGD = 1 − recovery rate.",
          "Several spread measures exist. The G-spread is the yield over an interpolated government yield; the Z-spread is the constant spread added to every spot rate that makes the present value of cash flows equal the price; the option-adjusted spread (OAS) removes the value of embedded options from the Z-spread, allowing like-for-like comparison of bonds with and without options.",
          "Spreads widen when credit quality deteriorates or when risk aversion rises (a flight to quality), and narrow in benign conditions. Because spread changes drive returns on credit bonds, understanding what moves them — issuer fundamentals, the credit cycle, and market liquidity — is central to fixed-income analysis.",
        ],
        keyRules: [
          "Expected loss = PD × LGD, LGD = 1 − recovery.",
          "Z-spread over the spot curve; OAS strips out option cost.",
          "Spreads widen in stress, narrow in calm.",
        ],
      },
      {
        id: "sn5",
        title: "Embedded options and securitisation",
        testPointIds: ["tp5"],
        explanation: [
          "Embedded options change a bond's risk and value. A call option lets the issuer redeem early, benefiting the issuer when rates fall; it caps price appreciation and therefore raises the bond's yield relative to an otherwise identical option-free bond. A put option lets the holder sell back early, benefiting the holder and lowering the yield. Convertibles give upside participation in the issuer's equity.",
          "The valuation identities are intuitive: a callable bond equals a straight bond minus the value of the call held by the issuer; a putable bond equals a straight bond plus the value of the put held by the investor. This is why callables yield more and putables yield less than comparable straight bonds.",
          "Securitised products pool assets (mortgages, auto loans, receivables) and issue tranched securities. Mortgage-backed security holders are effectively short a prepayment option: when rates fall, borrowers refinance and prepay, shortening the security's life (contraction risk); when rates rise, prepayments slow and the life extends (extension risk). Modelling prepayment behaviour is central to MBS valuation.",
        ],
        keyRules: [
          "Callable = straight − call value (higher yield); putable = straight + put value.",
          "MBS holders are short prepayment risk.",
          "Falling rates → contraction risk; rising rates → extension risk.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L1 calculation MCQ — duration",
        question:
          "A bond has a modified duration of 7.0 and convexity of 60. If yields rise by 100 basis points, estimate the percentage price change including convexity.",
        answerPlan: [
          "Apply the duration+convexity formula.",
        ],
        modelAnswer:
          "%ΔPrice ≈ −ModDur × Δy + 0.5 × Convexity × (Δy)² = −7.0 × 0.01 + 0.5 × 60 × (0.01)² = −0.07 + 0.003 = −0.067, i.e. approximately −6.7%. Convexity adds back +0.3%, softening the duration-only estimate of −7.0%.",
        markingGuide: [
          "Duration term = −7.0%.",
          "Convexity term = +0.3%; total ≈ −6.7%.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L1 calculation MCQ — forward rate",
        question:
          "The one-year spot rate is 3% and the two-year spot rate is 4%. Compute the implied one-year forward rate one year from now (1f1).",
        answerPlan: [
          "Use the no-arbitrage spot/forward link.",
        ],
        modelAnswer:
          "(1 + z2)² = (1 + z1)(1 + 1f1) → (1.04)² = (1.03)(1 + 1f1) → 1.0816 = 1.03 × (1 + 1f1) → 1 + 1f1 = 1.05010 → 1f1 ≈ 5.01%. The forward exceeds both spot rates, consistent with the upward-sloping curve.",
        markingGuide: [
          "Sets up (1+z2)² = (1+z1)(1+1f1).",
          "1f1 ≈ 5.0%.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L1 conceptual MCQ — embedded option",
        question:
          "Compared with an otherwise identical option-free bond, why does a callable bond offer a higher yield, and what happens to its price as yields fall toward the call level?",
        answerPlan: [
          "Call benefits issuer.",
          "Negative convexity near call.",
        ],
        modelAnswer:
          "The callable bond yields more because the investor is short a call held by the issuer, who will redeem when rates fall — capping the investor's upside. As yields fall toward the call price, the bond's price appreciation is limited (it will be called around the call price), producing negative convexity: price rises less than an option-free bond would.",
        markingGuide: [
          "Higher yield compensates for the short call.",
          "Identifies capped upside / negative convexity near the call.",
        ],
      },
    ],
  }),

  "cfa-l1-m8": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Forwards and futures pricing",
        priority: "critical",
        examinerFocus:
          "Applying the cost-of-carry model to price forwards, and understanding mark-to-market and basis for futures.",
        typicalQuestionForms: [
          "Compute a forward price with carry/yield.",
          "Distinguish forward vs futures cash flows.",
        ],
        mustKnow: [
          "Forward price F0 = S0(1 + r)^T, adjusted for carry costs (+) and benefits/yield (−).",
          "Futures are marked to market daily; forwards settle at maturity (counterparty risk, no daily flows).",
          "Value of a forward at inception is zero; it changes as the spot and rates move.",
        ],
        scoringActions: [
          "Add storage/financing costs and subtract income/convenience yield in the carry model.",
          "Separate the price (set at inception) from the value (changes over life).",
        ],
      },
      {
        id: "tp2",
        title: "Option payoffs, moneyness and put-call parity",
        priority: "critical",
        examinerFocus:
          "Computing option payoffs/profits and applying put-call parity to relate calls, puts, the underlying, and a risk-free bond.",
        typicalQuestionForms: [
          "Compute payoff/profit of a call or put.",
          "Use put-call parity to find a missing price.",
        ],
        mustKnow: [
          "Call payoff = max(0, ST − X); put payoff = max(0, X − ST).",
          "Put-call parity: S0 + p0 = c0 + X/(1 + r)^T (protective put = fiduciary call).",
          "Intrinsic value + time value = option premium; time value decays to zero at expiry.",
        ],
        scoringActions: [
          "Subtract the premium to move from payoff to profit.",
          "Rearrange parity to solve for any single unknown component.",
        ],
      },
      {
        id: "tp3",
        title: "Determinants of option value",
        priority: "high",
        examinerFocus:
          "How the underlying price, strike, time, volatility, rates, and cash flows move call and put values.",
        typicalQuestionForms: [
          "Effect of higher volatility/time on option value.",
          "Effect of a dividend on call vs put value.",
        ],
        mustKnow: [
          "Higher volatility raises both call and put values.",
          "Higher risk-free rate raises call value and lowers put value.",
          "Cash flows/dividends on the underlying lower call value and raise put value.",
        ],
        scoringActions: [
          "Sign each sensitivity separately for calls and puts.",
          "Remember volatility and time generally increase option value.",
        ],
      },
      {
        id: "tp4",
        title: "Swaps as a series of forwards",
        priority: "high",
        examinerFocus:
          "Understanding plain-vanilla interest-rate swaps as exchanges of fixed for floating and their equivalence to a portfolio of forwards/bonds.",
        typicalQuestionForms: [
          "Identify the cash flows of a payer/receiver swap.",
          "Value a swap as bonds or forwards.",
        ],
        mustKnow: [
          "A pay-fixed (payer) swap gains when rates rise; a receive-fixed swap gains when rates fall.",
          "A swap equals a portfolio of forward rate agreements or a long/short pair of bonds.",
          "At initiation the swap fixed rate is set so the swap value is zero.",
        ],
        scoringActions: [
          "Decompose the swap into fixed vs floating legs to determine directional exposure.",
          "Value it as the difference between a fixed-rate and a floating-rate bond.",
        ],
      },
      {
        id: "tp5",
        title: "Uses of derivatives and arbitrage",
        priority: "medium",
        examinerFocus:
          "How derivatives are used for hedging, speculation and arbitrage, and the law of one price / no-arbitrage principle.",
        typicalQuestionForms: [
          "Identify an arbitrage opportunity.",
          "Which strategy hedges a given exposure?",
        ],
        mustKnow: [
          "No-arbitrage: identical cash flows must have identical prices; replication underlies pricing.",
          "Derivatives allow risk transfer at low cost and enable views on price, rate or volatility.",
          "Arbitrage forces convergence of derivative and replicating-portfolio prices.",
        ],
        scoringActions: [
          "Build the replicating portfolio to detect mispricing.",
          "Match the hedge instrument's payoff to the exposure being offset.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Derivatives is ~5–8% of L1; parity and forward pricing are high-yield — target ~70%.",
      timeBudget: "~1.5 min/MCQ; payoff and parity items are quick with a clear setup.",
      answerSequence: [
        "Identify instrument (forward, option, swap).",
        "Write the payoff/pricing relation.",
        "Compute and check the sign/direction of exposure.",
      ],
      qualityChecks: [
        "Did I distinguish price (inception) from value (over life)?",
        "Did I subtract the premium to get profit rather than payoff?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Forward and futures pricing via carry",
        testPointIds: ["tp1"],
        explanation: [
          "A forward contract locks in a price today for delivery later. Under no-arbitrage, the forward price equals the cost of buying and carrying the underlying to delivery: F0 = S0(1 + r)^T, increased by carrying costs (storage, insurance) and decreased by any benefits of holding the asset (income, dividends, convenience yield). If the forward deviates from this, cash-and-carry or reverse arbitrage restores it.",
          "At initiation the forward is priced so its value is zero to both parties. Over the contract's life the value moves with the spot price and interest rates; a long forward gains value when the spot rises above the contracted forward price. Distinguishing the price (fixed at inception) from the value (fluctuating) is a core exam distinction.",
          "Futures are standardised, exchange-traded forwards that are marked to market daily, so gains and losses are settled each day through a margin account, largely eliminating counterparty risk. This daily settlement makes futures cash flows differ from forwards; when interest rates are correlated with the underlying, futures and forward prices can diverge slightly, though for exam purposes they are usually treated as equal.",
        ],
        keyRules: [
          "F0 = S0(1+r)^T + carry costs − carry benefits.",
          "Forward value is zero at inception, then varies.",
          "Futures mark to market daily; forwards settle at maturity.",
        ],
        workedProblem: {
          scenario:
            "A non-dividend-paying stock trades at $100. The one-year risk-free rate is 5%. (a) Compute the one-year forward price. (b) If instead the stock pays a $3 dividend in six months, recompute the forward price (assume the dividend can be invested at the risk-free rate to year-end).",
          steps: [
            "(a) No income: F0 = S0(1 + r)^T = 100 × 1.05 = $105.00.",
            "(b) Future value of the dividend at year-end = 3 × (1.05)^0.5 = 3 × 1.0247 = 3.074.",
            "The carry benefit reduces the forward price: F0 = 100 × 1.05 − 3.074 = 105 − 3.074.",
            "F0 = $101.93.",
          ],
          conclusion:
            "Without dividends the forward is $105.00; the $3 dividend (a benefit of holding the stock) lowers the forward to about $101.93, illustrating that income on the underlying reduces the forward price.",
          markingNotes: [
            "Base forward = S0(1+r).",
            "Dividend future-valued and subtracted.",
            "Dividend-adjusted forward ≈ $101.93.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Option payoffs and put-call parity",
        testPointIds: ["tp2"],
        explanation: [
          "A call gives the right to buy at the strike; its payoff at expiry is max(0, ST − X). A put gives the right to sell; its payoff is max(0, X − ST). Profit subtracts the premium paid (for buyers) or adds it (for writers). Because the premium is a sunk cost at expiry, payoff and profit differ by exactly the premium.",
          "The option premium splits into intrinsic value (the in-the-money amount, floored at zero) and time value (the remainder, reflecting the chance of moving further into the money). Time value decays to zero at expiration, so at expiry the option is worth only its intrinsic value.",
          "Put-call parity ties the four instruments together: S0 + p0 = c0 + X/(1 + r)^T. The left side (stock plus protective put) and the right side (call plus a bond that matures to the strike, a fiduciary call) have identical payoffs, so they must cost the same. Rearranging parity lets you solve for any missing price or construct synthetic positions (e.g. a synthetic call = stock + put − bond).",
        ],
        keyRules: [
          "Call payoff = max(0, ST − X); put payoff = max(0, X − ST).",
          "Premium = intrinsic value + time value; time value → 0 at expiry.",
          "Parity: S0 + p0 = c0 + X/(1+r)^T.",
        ],
      },
      {
        id: "sn3",
        title: "What moves option values",
        testPointIds: ["tp3"],
        explanation: [
          "Six factors drive option value. A higher underlying price raises call value and lowers put value; a higher strike does the opposite. Both effects follow directly from the payoff definitions.",
          "Volatility and time to expiration generally increase the value of both calls and puts, because greater dispersion and more time raise the probability of finishing deeper in the money while the downside is bounded at zero (the option is not exercised if unfavourable). This asymmetry is why long options benefit from volatility.",
          "The risk-free rate and cash flows on the underlying have opposite effects on calls and puts. A higher risk-free rate increases call values (the present value of the strike to be paid falls) and decreases put values. Dividends or other cash flows paid by the underlying reduce the price during the option's life, lowering call values and raising put values — which is why deep-in-the-money American calls may be exercised early just before a large dividend.",
        ],
        keyRules: [
          "Volatility ↑ and time ↑ raise both call and put values.",
          "Rate ↑ raises calls, lowers puts.",
          "Dividends lower calls, raise puts.",
        ],
      },
      {
        id: "sn4",
        title: "Interest-rate swaps",
        testPointIds: ["tp4"],
        explanation: [
          "A plain-vanilla interest-rate swap exchanges a stream of fixed-rate payments for a stream of floating-rate payments on a notional principal (principal is not exchanged). The pay-fixed/receive-floating party (the payer) benefits when rates rise, because their fixed cost stays put while their floating receipts increase; the receive-fixed party benefits when rates fall.",
          "A swap can be decomposed two ways. It is equivalent to a portfolio of forward rate agreements, one per settlement date. It is also equivalent to being long one bond and short another: a payer swap is like being short a fixed-rate bond and long a floating-rate bond. This equivalence is the basis for valuation.",
          "At initiation the fixed rate (the swap rate) is set so the present values of the two legs are equal and the swap's value is zero. Thereafter, as rates move, the swap acquires positive value to one side and negative to the other; its value equals the difference in the present values of the fixed and floating legs (equivalently, the difference between the implied fixed and floating bonds).",
        ],
        keyRules: [
          "Payer (pay-fixed) gains when rates rise; receiver gains when rates fall.",
          "Swap = portfolio of FRAs = long one bond, short another.",
          "Fixed rate set so swap value is zero at inception.",
        ],
      },
      {
        id: "sn5",
        title: "No-arbitrage, hedging and speculation",
        testPointIds: ["tp5"],
        explanation: [
          "The foundational principle of derivative pricing is no-arbitrage (the law of one price): two portfolios that produce identical future cash flows must have the same price today. Derivative prices are derived by constructing a replicating portfolio of the underlying and a risk-free asset that reproduces the derivative's payoff; the derivative must cost the same as the replication, or arbitrageurs will profit until prices converge.",
          "Derivatives serve three broad purposes. Hedging offsets an existing exposure — for example, a producer sells futures to lock in a price. Speculation takes a leveraged view on the direction of prices, rates, or volatility at low upfront cost. Arbitrage exploits temporary mispricings between a derivative and its replicating portfolio, and in doing so enforces fair pricing.",
          "The efficiency benefits of derivatives — low-cost risk transfer, price discovery, and the ability to express views not easily taken in cash markets — are balanced against risks such as leverage, counterparty exposure (for OTC contracts), and complexity. Understanding replication is the unifying skill across all derivative types.",
        ],
        keyRules: [
          "Law of one price: identical payoffs → identical prices.",
          "Replication underlies all derivative valuation.",
          "Uses: hedge, speculate, arbitrage.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L1 calculation MCQ — put-call parity",
        question:
          "A European call with strike $50 expiring in one year sells for $6. The stock is $52 and the one-year risk-free rate is 4%. Using put-call parity, compute the price of the corresponding put.",
        answerPlan: [
          "State parity.",
          "Solve for p0.",
        ],
        modelAnswer:
          "Parity: S0 + p0 = c0 + X/(1 + r)^T → p0 = c0 + X/(1+r)^T − S0 = 6 + 50/1.04 − 52 = 6 + 48.077 − 52 = $2.08. The put is worth about $2.08.",
        markingGuide: [
          "Rearranges parity for p0.",
          "Discounts strike at 4%; p0 ≈ $2.08.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp1"],
        style: "L1 calculation MCQ — forward price",
        question:
          "Gold spot is $2,000/oz, the one-year risk-free rate is 5%, and annual storage cost is $40/oz paid at year-end. Compute the no-arbitrage one-year forward price.",
        answerPlan: [
          "Carry model with storage as a cost.",
        ],
        modelAnswer:
          "Forward = S0(1 + r) + storage = 2,000 × 1.05 + 40 = 2,100 + 40 = $2,140/oz. Storage is a carrying cost, so it is added to the forward price; there is no income offset for gold.",
        markingGuide: [
          "Applies S0(1+r) plus storage cost.",
          "Forward = $2,140.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L1 conceptual MCQ — swap exposure",
        question:
          "A firm with floating-rate debt fears rising interest rates. Which swap position hedges this exposure, and why?",
        answerPlan: [
          "Identify exposure.",
          "Select pay-fixed swap.",
        ],
        modelAnswer:
          "The firm should enter a pay-fixed, receive-floating (payer) swap. Its floating debt payments rise with rates, but the floating leg it receives on the swap also rises, offsetting the higher debt cost, while it pays a locked-in fixed rate. This effectively converts floating-rate debt into fixed-rate debt.",
        markingGuide: [
          "Selects pay-fixed/receive-floating swap.",
          "Explains the offset that converts floating to fixed.",
        ],
      },
    ],
  }),

  "cfa-l1-m9": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Alternative investment categories and characteristics",
        priority: "high",
        examinerFocus:
          "Distinguishing hedge funds, private equity, real estate, commodities, and infrastructure by return sources, liquidity, and risk.",
        typicalQuestionForms: [
          "Classify an alternative by its features.",
          "Which category offers inflation protection/illiquidity premium?",
        ],
        mustKnow: [
          "Alternatives typically offer diversification (low correlation), illiquidity premia, and higher fees; return data may be smoothed/biased.",
          "Commodities provide inflation protection; real estate and infrastructure offer income plus inflation linkage.",
          "Reported alternative returns suffer survivorship and backfill biases, overstating performance.",
        ],
        scoringActions: [
          "Match the category to its dominant return driver and liquidity profile.",
          "Flag survivorship/backfill bias when interpreting reported returns.",
        ],
      },
      {
        id: "tp2",
        title: "Hedge fund fees and structures",
        priority: "critical",
        examinerFocus:
          "Computing management and incentive fees with hurdle rates and high-water marks, and net-of-fee returns.",
        typicalQuestionForms: [
          "Compute total fees given 2-and-20 with a high-water mark.",
          "Effect of a hurdle rate on incentive fees.",
        ],
        mustKnow: [
          "'2 and 20': 2% of assets management fee + 20% of profits incentive fee.",
          "A high-water mark means no incentive fee until prior losses are recovered.",
          "A hurdle rate requires returns above a threshold before incentive fees apply.",
        ],
        scoringActions: [
          "Apply the management fee first, then compute incentive fee on profit above any hurdle/high-water mark.",
          "Check whether the incentive fee is on the whole gain or only the excess over the hurdle.",
        ],
      },
      {
        id: "tp3",
        title: "Private equity strategies and valuation",
        priority: "high",
        examinerFocus:
          "Distinguishing venture capital, buyouts, and the J-curve, and understanding exit routes and value creation.",
        typicalQuestionForms: [
          "Identify a PE strategy or stage.",
          "Explain the J-curve or an exit route.",
        ],
        mustKnow: [
          "Leveraged buyouts use significant debt to acquire mature, cash-generative firms; venture capital funds early-stage growth.",
          "The J-curve: early fees and write-downs depress returns before value is realised later in the fund's life.",
          "Exits: trade sale, secondary sale, IPO, or recapitalisation.",
        ],
        scoringActions: [
          "Match the target company's maturity to the correct PE strategy.",
          "Attribute early negative returns to fees/write-downs (J-curve), not poor selection.",
        ],
      },
      {
        id: "tp4",
        title: "Real estate and commodities",
        priority: "high",
        examinerFocus:
          "Applying real-estate valuation approaches (income/cap rate, comparable, cost) and commodity return components (spot, roll, collateral).",
        typicalQuestionForms: [
          "Value a property using the capitalisation rate.",
          "Decompose a commodity futures return.",
        ],
        mustKnow: [
          "Direct capitalisation: value = net operating income/cap rate.",
          "Commodity futures return = spot return + roll return + collateral return; roll is positive in backwardation, negative in contango.",
          "REITs offer liquid, income-oriented real-estate exposure.",
        ],
        scoringActions: [
          "Use NOI/cap rate for income-property value.",
          "Sign the roll return by whether the curve is in backwardation (+) or contango (−).",
        ],
      },
      {
        id: "tp5",
        title: "Risk, return and due diligence",
        priority: "medium",
        examinerFocus:
          "Understanding the limitations of alternative return statistics and the role of due diligence and non-normal risk measures.",
        typicalQuestionForms: [
          "Which risk measure suits skewed alternative returns?",
          "Identify a due-diligence red flag.",
        ],
        mustKnow: [
          "Alternatives show non-normal returns (negative skew, fat tails); use downside measures (VaR, Sortino, max drawdown).",
          "Return smoothing (stale/appraisal pricing) understates volatility and correlation.",
          "Operational due diligence covers valuation policy, custody, and manager integrity.",
        ],
        scoringActions: [
          "Prefer downside/tail risk measures over standard deviation for alternatives.",
          "Adjust for smoothing before comparing volatility to public markets.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Alternatives is ~5–8% of L1; fees and valuation are high-yield — target ~70%.",
      timeBudget: "~1.5 min/MCQ; fee calculations reward a clear order of operations.",
      answerSequence: [
        "Identify the alternative category.",
        "Apply the relevant fee/valuation formula.",
        "Check biases (survivorship, smoothing) in interpretation.",
      ],
      qualityChecks: [
        "Management fee applied before incentive fee, with high-water mark respected?",
        "Roll return signed correctly for backwardation vs contango?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The alternatives landscape",
        testPointIds: ["tp1"],
        explanation: [
          "Alternative investments encompass hedge funds, private equity, private real estate and infrastructure, commodities, and private debt. Their appeal is diversification (returns less correlated with traditional stocks and bonds), access to illiquidity premia, and, for some, inflation protection. The costs are higher fees, limited liquidity, complexity, and weaker transparency.",
          "Return drivers differ by category: commodities respond to supply/demand and provide inflation hedging; real estate and infrastructure offer contractual income plus inflation linkage; private equity relies on operational improvement and leverage; hedge funds pursue manager skill (alpha) across many strategies. Matching a described exposure to its driver is a common recognition task.",
          "Reported performance of alternatives must be treated cautiously. Survivorship bias (failed funds drop out of databases) and backfill bias (only good early records are added) inflate reported average returns, and appraisal-based valuations smooth returns. Analysts should discount headline statistics accordingly.",
        ],
        keyRules: [
          "Alternatives add diversification and illiquidity premia at higher fees.",
          "Commodities/real assets provide inflation protection.",
          "Survivorship and backfill biases overstate reported returns.",
        ],
      },
      {
        id: "sn2",
        title: "Hedge fund fee mechanics",
        testPointIds: ["tp2"],
        explanation: [
          "The classic hedge fund fee is '2 and 20': a management fee of about 2% of assets under management plus an incentive (performance) fee of about 20% of profits. The management fee is charged regardless of performance; the incentive fee aligns manager and investor interests but can encourage risk-taking.",
          "Two provisions protect investors. A hurdle rate requires the fund to earn above a specified threshold before any incentive fee is charged; the fee may apply to the whole return or only the excess above the hurdle, which the problem must specify. A high-water mark ensures the incentive fee is only paid on new profits — if the fund loses value, it must first recover past the previous peak before incentive fees resume, preventing investors from paying twice for the same gains.",
          "Net-of-fee returns require careful sequencing: apply the management fee to assets, then compute the incentive fee on profits above the hurdle and/or high-water mark, then subtract both from the gross return. Fund-of-funds add a second layer of fees, compounding the drag on net returns.",
        ],
        keyRules: [
          "'2 and 20' = 2% AUM + 20% of profits.",
          "High-water mark: no incentive fee until prior losses recovered.",
          "Hurdle rate: incentive fee only above the threshold.",
        ],
        workedProblem: {
          scenario:
            "An investor places $10m in a hedge fund charging 2% management (on year-end assets before incentive fee) and 20% incentive with a 5% soft hurdle (incentive fee on the full gain once the hurdle is exceeded) and a high-water mark. The fund gains 15% gross in year 1. Compute the net-of-fee return.",
          steps: [
            "Gross year-end value = 10m × 1.15 = 11.5m; gross profit = 1.5m.",
            "Management fee = 2% × 11.5m = 0.23m.",
            "Hurdle = 5% of 10m = 0.5m; gross profit (1.5m) exceeds the hurdle, and it is a soft hurdle, so the incentive fee applies to the full 1.5m profit: 20% × 1.5m = 0.30m.",
            "Total fees = 0.23m + 0.30m = 0.53m; net value = 11.5m − 0.53m = 10.97m; net return = 10.97/10 − 1 = 9.7%.",
          ],
          conclusion:
            "The investor's net-of-fee return is about 9.7%, versus 15% gross — a 5.3-percentage-point fee drag, illustrating how '2 and 20' materially reduces investor returns.",
          markingNotes: [
            "Management fee on year-end assets.",
            "Soft hurdle: incentive on full profit once exceeded.",
            "Net return ≈ 9.7%.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Private equity strategies",
        testPointIds: ["tp3"],
        explanation: [
          "Private equity spans the corporate life cycle. Venture capital funds early-stage, high-growth companies, accepting high failure rates for the chance of outsized winners. Leveraged buyouts acquire mature, stable, cash-generative businesses using substantial debt, creating value through operational improvements, financial engineering, and multiple expansion before exiting.",
          "The J-curve describes the typical return path of a PE fund: in the early years, management fees and conservative write-downs of unrealised investments depress reported returns (often negative), before value creation and successful exits drive returns up later in the fund's life. Interpreting early negative returns as manager failure is a classic mistake.",
          "Exit routes determine realisation of gains: a trade sale to a strategic buyer, a secondary sale to another financial sponsor, an initial public offering, or a recapitalisation (returning capital via new debt while retaining ownership). The chosen exit affects timing, valuation, and risk of the realised return.",
        ],
        keyRules: [
          "VC = early-stage growth; LBO = mature firms with leverage.",
          "J-curve: early fees/write-downs, later gains.",
          "Exits: trade sale, secondary, IPO, recapitalisation.",
        ],
      },
      {
        id: "sn4",
        title: "Real estate and commodity returns",
        testPointIds: ["tp4"],
        explanation: [
          "Real estate is valued three ways: the income approach capitalises net operating income (value = NOI/cap rate) or discounts future cash flows; the comparable-sales approach uses prices of similar transacted properties; and the cost approach values land plus depreciated replacement cost. The cap rate embeds growth and risk expectations, so small changes in it move value substantially. REITs provide liquid, publicly traded, income-focused exposure to property.",
          "Commodity investors rarely hold the physical asset; they gain exposure through futures. The total return has three components: the spot return (change in the underlying price), the roll return (from rolling expiring futures into later contracts), and the collateral return (interest on the cash backing the futures position).",
          "The roll return's sign depends on the futures curve. In backwardation (futures below spot), rolling into cheaper longer-dated contracts produces a positive roll yield; in contango (futures above spot), rolling into more expensive contracts produces a negative roll yield. Recognising the curve shape and its return implication is a favourite exam point.",
        ],
        keyRules: [
          "Property value = NOI/cap rate (direct capitalisation).",
          "Commodity return = spot + roll + collateral.",
          "Backwardation → positive roll; contango → negative roll.",
        ],
      },
      {
        id: "sn5",
        title: "Risk measurement and due diligence",
        testPointIds: ["tp5"],
        explanation: [
          "Alternative returns are frequently non-normal, exhibiting negative skew (occasional large losses) and fat tails. Standard deviation understates the true risk of such distributions, so analysts favour downside-oriented measures: value at risk (VaR) for a loss threshold at a confidence level, the Sortino ratio (which penalises only downside deviation), and maximum drawdown (the largest peak-to-trough decline).",
          "Return smoothing is a pervasive issue: illiquid assets are often valued by appraisal or stale prices, which artificially dampens reported volatility and understates correlation with public markets. This makes risk look lower and diversification look better than reality; unsmoothing techniques are needed before comparison.",
          "Because alternatives are less regulated and less transparent, operational due diligence is critical: reviewing the manager's valuation policy, the independence of custody and administration, the fee terms and liquidity provisions, and the integrity and track record of the principals. Weak controls or opaque valuation are major red flags regardless of headline returns.",
        ],
        keyRules: [
          "Use VaR, Sortino, and max drawdown for skewed returns.",
          "Smoothing understates volatility and correlation.",
          "Operational due diligence: valuation, custody, manager integrity.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L1 calculation MCQ — hedge fund fees",
        question:
          "A fund charges 2% management (on beginning-of-year assets) and 20% incentive with no hurdle and a high-water mark. An investor's $5m grows 10% gross in the year. Compute the net-of-fee value.",
        answerPlan: [
          "Management fee on beginning assets.",
          "Incentive on gross profit.",
        ],
        modelAnswer:
          "Gross profit = 5m × 10% = 0.5m; gross value = 5.5m. Management fee = 2% × 5m = 0.1m. Incentive fee = 20% × 0.5m = 0.1m. Total fees = 0.2m; net value = 5.5m − 0.2m = $5.3m, a net return of 6% versus 10% gross.",
        markingGuide: [
          "Management fee on beginning assets = 0.1m.",
          "Incentive 0.1m; net value $5.3m.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L1 calculation MCQ — real estate cap rate",
        question:
          "A commercial property generates net operating income of $600,000 per year. Comparable properties transact at a capitalisation rate of 6%. Estimate the property's value.",
        answerPlan: [
          "Apply direct capitalisation.",
        ],
        modelAnswer:
          "Value = NOI/cap rate = 600,000/0.06 = $10,000,000. The direct capitalisation approach converts a stabilised income stream into a value using the market cap rate; a lower cap rate would imply a higher value.",
        markingGuide: [
          "Uses NOI/cap rate.",
          "Value = $10m.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L1 conceptual MCQ — commodity roll",
        question:
          "A commodity futures curve is in contango. All else equal, what is the effect on the roll return component of a long futures position, and why?",
        answerPlan: [
          "Define contango.",
          "Sign the roll return.",
        ],
        modelAnswer:
          "In contango, longer-dated futures are more expensive than near-dated ones, so an investor rolling an expiring contract must buy the pricier next contract, producing a negative roll return. This roll drag reduces the total return of a long futures position relative to the spot price change.",
        markingGuide: [
          "Identifies contango as futures above spot.",
          "Concludes negative roll return.",
        ],
      },
    ],
  }),

  "cfa-l1-m10": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Portfolio risk, return and diversification",
        priority: "critical",
        examinerFocus:
          "Computing portfolio expected return and variance for two assets and understanding how correlation drives diversification.",
        typicalQuestionForms: [
          "Compute two-asset portfolio return and standard deviation.",
          "Effect of correlation on portfolio risk.",
        ],
        mustKnow: [
          "E[Rp] = w1E[R1] + w2E[R2]; portfolio variance = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2.",
          "Diversification benefit grows as correlation falls; at ρ = −1 risk can be eliminated.",
          "Systematic risk cannot be diversified away; unsystematic risk can.",
        ],
        scoringActions: [
          "Never omit the 2w1w2ρσ1σ2 cross term.",
          "Attribute risk reduction to correlation below 1.",
        ],
      },
      {
        id: "tp2",
        title: "CAPM, beta and the SML",
        priority: "critical",
        examinerFocus:
          "Applying the CAPM to find required return, interpreting beta, and using the security market line to identify mispricing.",
        typicalQuestionForms: [
          "Compute required return via CAPM.",
          "Is a security overvalued/undervalued relative to the SML?",
        ],
        mustKnow: [
          "CAPM: E[Ri] = rf + βi(E[Rm] − rf); beta measures systematic risk (market beta = 1).",
          "A security plotting above the SML is undervalued (expected return exceeds required); below is overvalued.",
          "Beta of a portfolio is the weighted average of component betas.",
        ],
        scoringActions: [
          "Compare the expected (estimated) return to the CAPM-required return to judge mispricing.",
          "Use weighted-average betas for portfolios.",
        ],
      },
      {
        id: "tp3",
        title: "Efficient frontier and the capital market line",
        priority: "high",
        examinerFocus:
          "Understanding the efficient frontier, the optimal risky portfolio, and how the CML combines the risk-free asset with the market portfolio.",
        typicalQuestionForms: [
          "Which portfolio is efficient/optimal?",
          "Compute expected return on the CML for a target risk.",
        ],
        mustKnow: [
          "The efficient frontier holds the highest expected return for each risk level; the optimal risky portfolio maximises the Sharpe ratio.",
          "The CML runs from the risk-free rate through the market portfolio: E[Rp] = rf + [(E[Rm] − rf)/σm]·σp.",
          "Combining the risk-free asset with the market portfolio dominates the frontier of risky assets alone.",
        ],
        scoringActions: [
          "Select the tangency (max-Sharpe) portfolio as optimal.",
          "Use the CML slope (market Sharpe ratio) to price total risk.",
        ],
      },
      {
        id: "tp4",
        title: "The portfolio management process and IPS",
        priority: "high",
        examinerFocus:
          "The steps of the portfolio process and the components of an investment policy statement (objectives and constraints).",
        typicalQuestionForms: [
          "Which element belongs in the IPS?",
          "Classify a factor as an objective or a constraint.",
        ],
        mustKnow: [
          "Process: planning (IPS) → execution (asset allocation/security selection) → feedback (monitoring/rebalancing).",
          "Objectives: return and risk (ability and willingness to bear risk).",
          "Constraints: liquidity, time horizon, taxes, legal/regulatory, unique circumstances (mnemonic: risk/return + LLTTU).",
        ],
        scoringActions: [
          "Separate return/risk objectives from the five constraints.",
          "Reconcile ability vs willingness to take risk (take the lower unless education resolves it).",
        ],
      },
      {
        id: "tp5",
        title: "Risk measures and behavioral considerations",
        priority: "medium",
        examinerFocus:
          "Interpreting Sharpe/Treynor/M-squared and recognising basic behavioral biases affecting investors.",
        typicalQuestionForms: [
          "Rank portfolios by Sharpe/Treynor.",
          "Identify a described behavioral bias.",
        ],
        mustKnow: [
          "Sharpe = (Rp − rf)/σp (total risk); Treynor = (Rp − rf)/βp (systematic risk).",
          "Use Sharpe for a non-diversified/standalone portfolio; Treynor for a well-diversified sub-portfolio.",
          "Common biases: overconfidence, loss aversion, anchoring, herding, framing.",
        ],
        scoringActions: [
          "Pick Sharpe vs Treynor based on whether total or systematic risk is relevant.",
          "Name the specific bias from the described behaviour.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Portfolio management is ~5–8% of L1; CAPM and diversification are high-yield — target ~70%.",
      timeBudget: "~1.5 min/MCQ; two-asset variance and CAPM items reward careful setup.",
      answerSequence: [
        "Identify the concept (risk/return, CAPM, CML, IPS).",
        "Write the formula and label inputs.",
        "Compute and interpret relative to the benchmark (SML/CML).",
      ],
      qualityChecks: [
        "Included the correlation cross term in portfolio variance?",
        "Compared expected vs required return for mispricing?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Risk, return and diversification",
        testPointIds: ["tp1"],
        explanation: [
          "A portfolio's expected return is simply the weighted average of the component expected returns. Its risk, however, is not a weighted average: portfolio variance for two assets is w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2. The cross term, driven by the correlation ρ, is the engine of diversification.",
          "When assets are less than perfectly correlated (ρ < 1), the portfolio's standard deviation is less than the weighted average of the individual standard deviations, so combining them reduces risk without proportionally reducing return. In the extreme of perfect negative correlation (ρ = −1), risk can theoretically be eliminated with the right weights.",
          "Total risk decomposes into systematic (market) risk, which affects all assets and cannot be diversified away, and unsystematic (firm-specific) risk, which can be eliminated by holding many securities. Because only systematic risk is rewarded in equilibrium, diversification lets investors shed uncompensated risk for free — the central insight of modern portfolio theory.",
        ],
        keyRules: [
          "E[Rp] is a weighted average; variance is not.",
          "Diversification benefit rises as ρ falls.",
          "Only systematic risk is compensated.",
        ],
        workedProblem: {
          scenario:
            "Asset A: expected return 8%, σ 15%. Asset B: expected return 12%, σ 25%. Correlation 0.3. Compute the expected return and standard deviation of a portfolio with 60% in A and 40% in B.",
          steps: [
            "Expected return = 0.6 × 8% + 0.4 × 12% = 4.8% + 4.8% = 9.6%.",
            "Variance = 0.6²×0.15² + 0.4²×0.25² + 2×0.6×0.4×0.3×0.15×0.25.",
            "= 0.36×0.0225 + 0.16×0.0625 + 2×0.6×0.4×0.3×0.0375 = 0.0081 + 0.0100 + 0.0054 = 0.0235.",
            "Standard deviation = √0.0235 = 0.1533 = 15.33%.",
          ],
          conclusion:
            "The portfolio expects 9.6% return with a 15.33% standard deviation — below the 19% weighted-average of the individual σ's (0.6×15 + 0.4×25), demonstrating diversification from the 0.3 correlation.",
          markingNotes: [
            "Expected return = 9.6%.",
            "Variance includes the correct cross term.",
            "σ ≈ 15.3%, below the weighted-average σ.",
          ],
        },
      },
      {
        id: "sn2",
        title: "CAPM, beta and the security market line",
        testPointIds: ["tp2"],
        explanation: [
          "The capital asset pricing model prices systematic risk: the required return on any asset is the risk-free rate plus its beta times the equity risk premium, E[Ri] = rf + βi(E[Rm] − rf). Beta measures how much an asset moves with the market; the market has a beta of 1, defensive assets below 1, and aggressive assets above 1.",
          "The security market line plots required return against beta and is the graphical form of the CAPM. Because it uses beta (systematic risk) on the horizontal axis, it applies to individual securities and portfolios alike. A portfolio's beta is the weighted average of its constituents' betas.",
          "Mispricing is judged relative to the SML. If a security's expected (analyst-estimated) return exceeds the CAPM-required return, it plots above the SML and is undervalued (buy); if its expected return is below the required return, it plots below the line and is overvalued (sell). This comparison of expected versus required return is the core exam skill.",
        ],
        keyRules: [
          "E[Ri] = rf + βi(E[Rm] − rf).",
          "Above the SML = undervalued; below = overvalued.",
          "Portfolio beta = weighted average of betas.",
        ],
      },
      {
        id: "sn3",
        title: "Efficient frontier and the capital market line",
        testPointIds: ["tp3"],
        explanation: [
          "The efficient frontier is the set of risky portfolios offering the highest expected return for each level of risk. Rational, risk-averse investors choose only portfolios on the frontier; those below it are dominated. The frontier's curvature reflects diversification benefits across risky assets.",
          "Introducing a risk-free asset transforms the opportunity set. Investors can combine the risk-free asset with a single optimal risky portfolio — the tangency portfolio that maximises the Sharpe ratio. Under CAPM assumptions this tangency portfolio is the market portfolio, held by all investors in different proportions relative to the risk-free asset.",
          "The capital market line connects the risk-free rate to the market portfolio and represents the best risk-return combinations available: E[Rp] = rf + [(E[Rm] − rf)/σm]·σp. Its slope is the market Sharpe ratio, the market price of total risk. Every point on the CML dominates the risky-asset-only frontier (except at the tangency point), which is why combining the risk-free asset with the market portfolio is optimal.",
        ],
        keyRules: [
          "Efficient frontier: max return per unit of risk.",
          "Optimal risky portfolio = max Sharpe (tangency/market).",
          "CML: E[Rp] = rf + (market Sharpe)·σp.",
        ],
      },
      {
        id: "sn4",
        title: "The portfolio process and the IPS",
        testPointIds: ["tp4"],
        explanation: [
          "Portfolio management follows a repeatable process: planning, execution, and feedback. Planning produces the investment policy statement, the governing document that captures the client's objectives and constraints. Execution translates the IPS into an asset allocation and specific security selections. Feedback monitors performance and rebalances back toward targets as markets and circumstances change.",
          "The IPS specifies two objectives — return and risk — where risk tolerance combines the ability to bear risk (financial capacity, time horizon) and the willingness to bear risk (psychological preference). When these conflict, the prudent approach is to adopt the lower of the two, unless investor education can reconcile them.",
          "The IPS also documents five constraints, often remembered as liquidity, time horizon, taxes, legal/regulatory, and unique circumstances. These shape the feasible set of investments: for instance, high liquidity needs or a short horizon limit exposure to illiquid or volatile assets, and tax status affects the preference for tax-advantaged instruments. A well-drafted IPS is the anchor for all subsequent decisions and for evaluating the manager.",
        ],
        keyRules: [
          "Process: planning (IPS) → execution → feedback.",
          "Objectives = return + risk (ability and willingness).",
          "Constraints: liquidity, horizon, taxes, legal, unique.",
        ],
      },
      {
        id: "sn5",
        title: "Performance measures and behavioral biases",
        testPointIds: ["tp5"],
        explanation: [
          "Risk-adjusted performance is measured by ratios. The Sharpe ratio, (Rp − rf)/σp, uses total risk (standard deviation) and is appropriate for evaluating a standalone or non-diversified portfolio. The Treynor ratio, (Rp − rf)/βp, uses systematic risk (beta) and is appropriate for a sub-portfolio held within a larger, well-diversified whole. M-squared expresses risk-adjusted performance in return units comparable to the market.",
          "Choosing the right measure matters: for an investor's entire wealth, total risk is relevant, so use Sharpe; for a component being added to an already-diversified portfolio, only its marginal (systematic) contribution matters, so use Treynor. Rankings by the two can differ when portfolios have different diversification levels.",
          "Behavioral finance recognises that real investors deviate from rationality. Common biases include overconfidence (overestimating one's skill/information, leading to excessive trading), loss aversion (feeling losses more than equivalent gains, causing reluctance to realise losses), anchoring (over-relying on an initial reference point), herding (following the crowd), and framing (decisions swayed by how choices are presented). Recognising the described behaviour is the exam task.",
        ],
        keyRules: [
          "Sharpe uses total risk; Treynor uses systematic risk.",
          "Sharpe for standalone; Treynor for a diversified sub-portfolio.",
          "Know overconfidence, loss aversion, anchoring, herding, framing.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L1 calculation MCQ — CAPM mispricing",
        question:
          "A stock has a beta of 1.4. The risk-free rate is 3% and the expected market return is 9%. An analyst forecasts the stock will return 13%. Is the stock overvalued or undervalued?",
        answerPlan: [
          "Compute required return.",
          "Compare to forecast.",
        ],
        modelAnswer:
          "Required return = 3% + 1.4 × (9% − 3%) = 3% + 8.4% = 11.4%. The analyst's forecast (13%) exceeds the required return (11.4%), so the stock plots above the SML and is undervalued — its expected return more than compensates for its systematic risk, implying a buy.",
        markingGuide: [
          "Required return = 11.4%.",
          "Forecast > required → undervalued.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L1 conceptual MCQ — IPS constraints",
        question:
          "A retiree needs to withdraw 5% of the portfolio each year for living expenses and cannot tolerate large short-term losses. Classify each of these as an objective or a constraint, and name the specific type.",
        answerPlan: [
          "Map each factor.",
        ],
        modelAnswer:
          "The 5% annual withdrawal is a liquidity constraint (regular cash needs must be met). The inability to tolerate large short-term losses is a risk objective, reflecting low willingness (and likely low ability, given the horizon) to bear risk. Both belong in the IPS and jointly point to a conservative, income-oriented allocation.",
        markingGuide: [
          "Withdrawal = liquidity constraint.",
          "Loss intolerance = risk objective (low risk tolerance).",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L1 conceptual MCQ — performance measure",
        question:
          "An analyst evaluates a single well-diversified sub-portfolio that will be combined with other holdings in a larger diversified fund. Which risk-adjusted measure is most appropriate, and why?",
        answerPlan: [
          "Identify systematic vs total risk relevance.",
        ],
        modelAnswer:
          "The Treynor ratio is most appropriate, because it measures excess return per unit of systematic risk (beta). Since the sub-portfolio is part of a larger diversified fund, only its systematic risk contribution is relevant; unsystematic risk is diversified away at the fund level, so total-risk-based Sharpe would overstate the relevant risk.",
        markingGuide: [
          "Selects Treynor (beta-based).",
          "Explains that only systematic risk is relevant within a diversified whole.",
        ],
      },
    ],
  }),

  // ===================================================================
  // LEVEL II — item-set / vignette analysis and valuation
  // ===================================================================
  "cfa-l2-m1": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Applying the Standards within a multi-fact vignette",
        priority: "critical",
        examinerFocus:
          "L2 ethics buries several potential violations in one narrative; the exam tests whether you can isolate each act, assign the correct Standard, and identify the single change that would bring conduct into compliance.",
        typicalQuestionForms: [
          "Which of the analyst's three actions violates the Standards?",
          "The action that would MOST likely bring the firm into compliance is...",
        ],
        mustKnow: [
          "Each vignette typically embeds distinct issues across I(B) Independence, III(B) Fair Dealing, V(A) Diligence and VI(A) Disclosure of Conflicts.",
          "Recommended procedures (compliance manuals, restricted lists, pre-clearance) are the usual 'fix' answer.",
          "Suitability (III(C)) requires an updated IPS before acting on a material change in client circumstances.",
        ],
        scoringActions: [
          "Tag each described act with a Standard number before reading the questions.",
          "For 'how to comply' items, pick the specific procedure, not a general statement of principle.",
        ],
      },
      {
        id: "tp2",
        title: "Research objectivity, soft dollars and issuer relationships",
        priority: "high",
        examinerFocus:
          "Whether soft-dollar (client brokerage) use benefits the client, and whether analyst independence is compromised by issuer-paid or relationship-driven research.",
        typicalQuestionForms: [
          "Is the described soft-dollar use permissible?",
          "Does the issuer relationship violate I(B)?",
        ],
        mustKnow: [
          "Client brokerage (soft dollars) must be used for research that benefits the client whose commissions generated it.",
          "Issuer-sponsored research must disclose the arrangement; the analyst must maintain an independent, evidence-based opinion.",
          "Directed brokerage arranged by the client is a client-directed use and permissible if disclosed.",
        ],
        scoringActions: [
          "Test soft-dollar use against the 'benefit the client' rule.",
          "Require disclosure of any issuer compensation or relationship.",
        ],
      },
      {
        id: "tp3",
        title: "Performance presentation and GIPS composites",
        priority: "high",
        examinerFocus:
          "GIPS mechanics at greater depth: composite construction, the treatment of carve-outs, non-fee-paying and non-discretionary accounts, and required vs recommended disclosures.",
        typicalQuestionForms: [
          "Which account must/must not be in the composite?",
          "Which GIPS disclosure is required?",
        ],
        mustKnow: [
          "Composites include all actual, fee-paying, discretionary portfolios of a similar strategy; terminated portfolios stay through their last full period.",
          "Non-discretionary and non-fee-paying accounts are excluded (non-fee-paying may be included with disclosure).",
          "Firms must present at least 5 years, building to 10; composite dispersion and benchmark returns must be shown.",
        ],
        scoringActions: [
          "Exclude non-discretionary accounts; keep terminated ones through their last period.",
          "Match each disclosure to 'required' vs 'recommended'.",
        ],
      },
      {
        id: "tp4",
        title: "Material nonpublic information and firewalls in a firm setting",
        priority: "critical",
        examinerFocus:
          "How multi-department firms manage MNPI: information barriers, watch/restricted lists, and the analyst's obligations when a colleague possesses MNPI.",
        typicalQuestionForms: [
          "Which control best prevents the II(A) violation described?",
          "May the research desk publish while banking holds MNPI?",
        ],
        mustKnow: [
          "Information barriers (firewalls) plus a restricted list are the recommended procedures to isolate MNPI within a firm.",
          "The mosaic theory still permits research built from public and nonmaterial nonpublic inputs.",
          "Personal-trade pre-clearance and reporting help detect and prevent violations.",
        ],
        scoringActions: [
          "Choose the firewall/restricted-list control for firm-level MNPI issues.",
          "Confirm no single item was both material and nonpublic before clearing conduct.",
        ],
      },
      {
        id: "tp5",
        title: "Supervisory responsibility and detecting violations",
        priority: "medium",
        examinerFocus:
          "Standard IV(C): when a supervisor is responsible for a subordinate's violation and what constitutes reasonable supervisory procedures and response to red flags.",
        typicalQuestionForms: [
          "Is the supervisor in violation of IV(C)?",
          "What is the appropriate supervisory response?",
        ],
        mustKnow: [
          "A supervisor with reasonable, enforced procedures who is nonetheless deceived may not be in violation — but must respond once red flags appear.",
          "Delegation does not relieve the supervisor of responsibility.",
          "Appropriate response: investigate, limit the person's activity, and strengthen procedures — not merely rely on the subordinate's assurances.",
        ],
        scoringActions: [
          "Ask whether reasonable procedures existed AND whether red flags were acted on.",
          "Select an active investigation/limitation response over passive reliance.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Ethics remains ~10–15% at L2 and is the tie-breaker; net >70% of the ethics item set.",
      timeBudget: "~18 min per 6-question item set; ethics vignettes read fast but reward re-reading the fact pattern.",
      answerSequence: [
        "Read the vignette once, tagging each action with a Standard.",
        "Answer factual 'which is a violation' items first.",
        "For 'best remedy' items, select the specific procedure that closes the identified gap.",
      ],
      qualityChecks: [
        "Did I map every embedded act, not just the first?",
        "For MNPI, did I confirm both prongs and consider the mosaic theory?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Dissecting a multi-issue ethics vignette",
        testPointIds: ["tp1", "tp5"],
        explanation: [
          "Level II ethics differs from Level I in density: a single vignette weaves together several potential violations across different Standards, and the six questions test them separately. The winning method is to annotate the fact pattern on first read, tagging each described act with a Standard number and letter, then answer each question by returning to the relevant tag rather than re-reading the whole passage.",
          "The most frequently tested clusters are independence and objectivity (gifts, issuer relationships), fair dealing (selective disclosure of recommendations, trade allocation), diligence and reasonable basis (relying on flawed or third-party analysis), and disclosure of conflicts (ownership, compensation, referral arrangements). Because the same passage can contain a compliant act and a violation, avoid assuming everything described is wrong.",
          "Supervisory questions (IV(C)) require a two-part test: did the supervisor have reasonable, enforced procedures, and did they respond appropriately once red flags appeared? A supervisor who was reasonably deceived despite good procedures may escape violation, but one who ignored warning signs or relied passively on assurances is in breach. The correct response is active — investigate, restrict the individual's activities, and strengthen controls.",
        ],
        keyRules: [
          "Tag every act with a Standard before answering.",
          "A vignette can contain both compliant and non-compliant acts.",
          "Supervisor test: reasonable procedures AND response to red flags.",
        ],
        workedProblem: {
          scenario:
            "An analyst covers TechCo. She (1) accepts a fully-paid trip on TechCo's corporate jet to tour a plant, (2) issues a buy rating she genuinely believes is justified by her analysis, and (3) sells the recommendation first to the firm's largest client before broad dissemination. Her supervisor has a compliance manual but does not monitor pre-release dissemination.",
          steps: [
            "Act 1: The paid trip on the issuer's jet threatens I(B) Independence & Objectivity; the analyst should decline and have her firm pay travel — a violation of I(B).",
            "Act 2: A buy rating with a reasonable and adequate basis complies with V(A) — no violation on its own.",
            "Act 3: Releasing the recommendation to one client before others violates III(B) Fair Dealing.",
            "Supervisor: A manual exists but dissemination is not monitored; failing to enforce/monitor is a IV(C) supervisory weakness once the fair-dealing breach is foreseeable.",
          ],
          conclusion:
            "Violations: I(B) (issuer-paid travel) and III(B) (selective dissemination); the supervisor breaches IV(C) by not monitoring dissemination. The rating itself (V(A)) is compliant.",
          markingNotes: [
            "Correctly isolates the compliant act (the rating) from the violations.",
            "Names I(B) and III(B) specifically.",
            "Ties the supervisory failure to unmonitored dissemination under IV(C).",
          ],
        },
      },
      {
        id: "sn2",
        title: "Objectivity: soft dollars and issuer-paid research",
        testPointIds: ["tp2"],
        explanation: [
          "Soft-dollar (client brokerage) arrangements use the commissions generated by client trades to purchase research. The governing principle is that such research must benefit the client whose brokerage paid for it; using one client's commissions to buy research that benefits only the manager or other clients breaches the duty of loyalty. Client-directed brokerage, where the client instructs the manager to use a particular broker, is permissible if the manager discloses that best execution may be affected.",
          "Issuer-sponsored research is increasingly common and is not per se prohibited, but the compensation arrangement must be disclosed prominently, and the analyst must reach conclusions based on independent, evidence-based analysis rather than the sponsor's wishes. Pressure to soften conclusions, or compensation contingent on a favourable rating, compromises I(B).",
          "The exam frequently pairs a permissible-sounding arrangement with a subtle breach — for example, using soft dollars for an office expense (impermissible, not research) or failing to disclose issuer compensation. Read for who benefits and whether disclosure occurred.",
        ],
        keyRules: [
          "Soft dollars must buy research benefiting the paying client.",
          "Issuer-paid research: disclose compensation; keep the opinion independent.",
          "Client-directed brokerage is allowed with disclosure of execution effects.",
        ],
      },
      {
        id: "sn3",
        title: "GIPS composites and disclosures in depth",
        testPointIds: ["tp3"],
        explanation: [
          "A GIPS composite aggregates all actual, fee-paying, discretionary portfolios managed to a similar strategy or mandate. Discretion is judged by whether the manager can implement the strategy; accounts with client-imposed restrictions that materially prevent the strategy are non-discretionary and must be excluded. Non-fee-paying portfolios may be included but require disclosure. Terminated portfolios remain in the composite through their last full measurement period to avoid survivorship bias.",
          "Carve-outs (a segment of a multi-asset portfolio treated as a standalone track record) are permitted only if managed separately with their own cash allocation; otherwise the artificial return is misleading. New portfolios are added to a composite on a timely, consistent basis defined by the firm.",
          "Presentation requirements include a minimum of five years of compliant history building to ten, annual composite returns, a benchmark return, the number of portfolios and composite assets, and a measure of internal dispersion. The compliance statement wording is prescribed, and required disclosures (fee schedule, currency, use of leverage/derivatives) must accompany the presentation. Distinguishing required from merely recommended items is a favourite exam point.",
        ],
        keyRules: [
          "Composite = all similar, fee-paying, discretionary portfolios; keep terminated through last period.",
          "Carve-outs need their own cash allocation.",
          "Present ≥5 years (to 10), with benchmark and dispersion.",
        ],
      },
      {
        id: "sn4",
        title: "Managing MNPI across a firm",
        testPointIds: ["tp4"],
        explanation: [
          "In a multi-service firm, one department (e.g. investment banking) may legitimately possess MNPI that must not reach another (e.g. research or trading). The recommended control is an information barrier — a 'firewall' of physical, electronic, and procedural separations — supported by a restricted list that halts research and proprietary trading in affected securities and a watch list monitored by compliance.",
          "Individual analysts remain free to build research from public information and nonmaterial nonpublic pieces under the mosaic theory. What they may not do is act on, or cause others to act on, information that is both material and nonpublic. Where an analyst inadvertently receives MNPI, the required response is to refrain from trading and to urge public disclosure by the issuer.",
          "Personal trading controls — pre-clearance of trades, duplicate confirmations, and blackout periods around research publication — help both prevent violations and demonstrate that reasonable procedures exist, which is relevant to any supervisory-responsibility assessment.",
        ],
        keyRules: [
          "Firewalls + restricted/watch lists isolate MNPI within a firm.",
          "Mosaic research remains permissible.",
          "Response to MNPI: don't trade, don't tip, urge disclosure.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1", "tp2"],
        style: "L2 item-set question — objectivity",
        question:
          "Within a vignette, an analyst accepts an all-expenses-paid research trip from a company she covers and later issues a favourable report that discloses the trip. Which statement about her conduct is most accurate?",
        answerPlan: [
          "Identify the I(B) independence threat.",
          "Assess whether disclosure alone cures it.",
        ],
        modelAnswer:
          "Disclosure does not cure the independence problem. Standard I(B) requires the analyst to maintain independence and objectivity; accepting fully-paid travel from a covered issuer creates a threat that disclosure alone does not eliminate. The recommended practice is to decline the benefit and have her own firm pay for the trip. Merely disclosing the arrangement is insufficient because objectivity may already be compromised.",
        markingGuide: [
          "Identifies I(B) Independence & Objectivity.",
          "States disclosure is insufficient; firm should pay travel.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L2 item-set question — GIPS composite",
        question:
          "A firm excludes a terminated portfolio's returns from a composite for the periods it was managed, arguing the client left. Is this GIPS-compliant, and what is the correct treatment?",
        answerPlan: [
          "Recall survivorship-bias rule.",
        ],
        modelAnswer:
          "It is not compliant. Under GIPS, terminated portfolios must remain in the composite through their last full measurement period; removing their historical returns creates survivorship bias and overstates the composite's track record. The client's departure does not justify deleting periods during which the portfolio was actually managed.",
        markingGuide: [
          "States terminated portfolios stay through last full period.",
          "Identifies survivorship bias as the reason.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4", "tp5"],
        style: "L2 item-set question — firewalls/supervision",
        question:
          "A firm's banking division is advising on an unannounced acquisition while its research desk covers the target. What single control would most effectively prevent a Standard II(A) violation, and what is the supervisor's duty?",
        answerPlan: [
          "Select firewall/restricted list.",
          "State supervisory duty.",
        ],
        modelAnswer:
          "The most effective control is an information barrier (firewall) combined with placing the target on the restricted list, halting research and proprietary trading until the deal is public. The supervisor's duty under IV(C) is to establish, monitor, and enforce these procedures and to act on any red flags — passive reliance on staff assurances is inadequate. This isolates the MNPI held by banking from the research and trading functions.",
        markingGuide: [
          "Selects firewall + restricted list.",
          "States supervisor must establish, monitor and enforce controls.",
        ],
      },
    ],
  }),

  "cfa-l2-m2": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Multiple regression: interpretation and inference",
        priority: "critical",
        examinerFocus:
          "Interpreting slope coefficients, testing their significance (t-tests), and reading the ANOVA table for F-tests and R-squared in a vignette.",
        typicalQuestionForms: [
          "Interpret a slope coefficient holding others constant.",
          "Test coefficient significance / overall model significance.",
        ],
        mustKnow: [
          "Each slope is the marginal effect of that variable holding others constant; t-stat = coefficient/standard error, df = n − k − 1.",
          "F-test (from ANOVA) tests joint significance of all slopes; F = MSR/MSE.",
          "R² = SSR/SST; adjusted R² penalises added regressors and can fall when a weak variable is added.",
        ],
        scoringActions: [
          "Compute t = coef/SE and compare to the critical value at df = n − k − 1.",
          "Use adjusted R², not R², when comparing models with different numbers of regressors.",
        ],
      },
      {
        id: "tp2",
        title: "Regression assumption violations",
        priority: "critical",
        examinerFocus:
          "Detecting and correcting heteroskedasticity, serial correlation, and multicollinearity, and knowing their effects on standard errors and inference.",
        typicalQuestionForms: [
          "Which violation is present given the described symptom/test?",
          "Effect on coefficient estimates vs standard errors and the fix.",
        ],
        mustKnow: [
          "Heteroskedasticity: non-constant error variance; detected by Breusch-Pagan; inflates Type I error; fix with robust (White) standard errors.",
          "Serial correlation: correlated errors; detected by Durbin-Watson (≈2 no autocorrelation); biases standard errors; fix with Newey-West errors.",
          "Multicollinearity: high correlation among regressors; high R² but insignificant t-stats; fix by dropping a variable.",
        ],
        scoringActions: [
          "Match the symptom (biased SEs vs insignificant t's with high R²) to the correct violation.",
          "Recall the specific corrective standard-error method for each.",
        ],
      },
      {
        id: "tp3",
        title: "Time-series analysis",
        priority: "high",
        examinerFocus:
          "Fitting trend and autoregressive models, testing for unit roots (nonstationarity), and detecting seasonality and autoregressive conditional heteroskedasticity.",
        typicalQuestionForms: [
          "Is the series covariance-stationary / does it have a unit root?",
          "Interpret an AR(1) model and test for seasonality.",
        ],
        mustKnow: [
          "An AR model requires covariance stationarity; a unit root (Dickey-Fuller test) implies nonstationarity — first-difference the series.",
          "Seasonality shows a significant autocorrelation at the seasonal lag; add a seasonal lag term.",
          "Mean reversion level for AR(1) = b0/(1 − b1); |b1| < 1 for stationarity.",
        ],
        scoringActions: [
          "Test for a unit root before trusting AR coefficients; difference if nonstationary.",
          "Add a seasonal lag when the residual autocorrelation spikes at the seasonal period.",
        ],
      },
      {
        id: "tp4",
        title: "Machine learning and big data concepts",
        priority: "medium",
        examinerFocus:
          "Distinguishing supervised vs unsupervised learning, overfitting and its remedies, and the roles of key algorithms at a conceptual level.",
        typicalQuestionForms: [
          "Classify a technique as supervised/unsupervised.",
          "Which method reduces overfitting?",
        ],
        mustKnow: [
          "Supervised (labeled data): regression, classification (e.g. SVM, random forests); unsupervised (no labels): clustering, dimension reduction (PCA).",
          "Overfitting = fitting noise; combat with holdout/cross-validation and regularisation (LASSO).",
          "LASSO penalises the number of features, aiding variable selection.",
        ],
        scoringActions: [
          "Decide supervised vs unsupervised by whether the data are labeled.",
          "Select cross-validation/regularisation to address overfitting.",
        ],
      },
      {
        id: "tp5",
        title: "Simulation and probabilistic modelling",
        priority: "medium",
        examinerFocus:
          "Understanding Monte Carlo simulation, its inputs and outputs, and its use versus scenario/sensitivity analysis.",
        typicalQuestionForms: [
          "When is Monte Carlo preferred over scenario analysis?",
          "Interpret a simulation output distribution.",
        ],
        mustKnow: [
          "Monte Carlo draws repeatedly from specified input distributions to build an output distribution.",
          "It handles complex, path-dependent problems and produces a full distribution, not a point estimate.",
          "Quality depends on correctly specified input distributions and correlations (garbage in, garbage out).",
        ],
        scoringActions: [
          "Use Monte Carlo when interactions/path-dependence make closed-form solutions infeasible.",
          "Interpret percentiles of the output distribution rather than a single expected value.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Quant is ~5–10% at L2, heavily regression-based; net >65% by mastering the ANOVA table and violations.",
      timeBudget: "~18 min per item set; regression output items reward pre-computed t/F comparisons.",
      answerSequence: [
        "Read the regression output/ANOVA table and label n, k, SSR, SSE.",
        "Answer interpretation and significance questions using t = coef/SE and F = MSR/MSE.",
        "Diagnose any assumption violation from the described symptoms and state the fix.",
      ],
      qualityChecks: [
        "Correct degrees of freedom (n − k − 1) for t-tests?",
        "Matched the violation to its effect on estimates vs standard errors?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Reading multiple-regression output",
        testPointIds: ["tp1"],
        explanation: [
          "A multiple regression estimates Y = b0 + b1X1 + ... + bkXk + e. Each slope coefficient is the expected change in Y for a one-unit change in that regressor, holding all others constant — the 'partial' interpretation is essential in vignette answers. The intercept b0 is the expected Y when all regressors are zero, which may or may not be economically meaningful.",
          "Inference on a single coefficient uses a t-test: t = (estimated coefficient − hypothesised value)/standard error, with n − k − 1 degrees of freedom, where k is the number of slope coefficients. Reject the null of no effect if |t| exceeds the critical value. Confidence intervals are coefficient ± t_crit × standard error.",
          "The ANOVA table drives model-level inference. The F-statistic, F = MSR/MSE = (SSR/k)/(SSE/(n − k − 1)), tests whether the regressors jointly explain the variation in Y. R² = SSR/SST measures the proportion of variation explained, but it never falls when regressors are added; adjusted R² penalises extra regressors and is the correct metric when comparing models of different size.",
        ],
        keyRules: [
          "Slopes are partial effects, holding other variables constant.",
          "t = coef/SE with df = n − k − 1; F = MSR/MSE for joint significance.",
          "Use adjusted R² to compare models with different regressor counts.",
        ],
        workedProblem: {
          scenario:
            "A regression of monthly stock returns on the market return and a size factor over 60 months gives: market coefficient 1.10 (SE 0.20), size coefficient 0.40 (SE 0.25), SSR = 0.048, SSE = 0.012. Test each coefficient at 5% (two-tailed, critical t ≈ 2.00) and compute R² and the F-statistic.",
          steps: [
            "Degrees of freedom: n − k − 1 = 60 − 2 − 1 = 57.",
            "Market t = 1.10/0.20 = 5.50 > 2.00 → significant. Size t = 0.40/0.25 = 1.60 < 2.00 → not significant.",
            "R² = SSR/SST = SSR/(SSR + SSE) = 0.048/(0.048 + 0.012) = 0.048/0.060 = 0.80.",
            "F = MSR/MSE = (SSR/k)/(SSE/(n − k − 1)) = (0.048/2)/(0.012/57) = 0.024/0.0002105 = 114.0.",
          ],
          conclusion:
            "The market factor is highly significant (t = 5.5) while the size factor is not (t = 1.6); the model explains 80% of return variation and is jointly significant (F = 114 far exceeds any critical value). One would consider dropping the insignificant size factor.",
          markingNotes: [
            "df = 57 and correct t-statistics.",
            "R² computed from SSR/(SSR+SSE) = 0.80.",
            "F-statistic set up with correct MSR and MSE.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Diagnosing assumption violations",
        testPointIds: ["tp2"],
        explanation: [
          "Heteroskedasticity means the error variance is not constant across observations (often related to the size of a regressor). Conditional heteroskedasticity is the damaging kind: coefficient estimates remain unbiased, but the standard errors are wrong — typically too small — inflating t-statistics and the Type I error rate. It is detected with the Breusch-Pagan test and corrected using robust (White) standard errors.",
          "Serial (auto)correlation means the errors are correlated across observations, common in time series. Positive serial correlation understates standard errors, again inflating significance. The Durbin-Watson statistic (near 2 indicates no autocorrelation; near 0 indicates positive) detects first-order serial correlation; the fix is to use serial-correlation-consistent (Newey-West) standard errors.",
          "Multicollinearity is high correlation among the regressors themselves. It does not bias the coefficients but inflates their standard errors, producing the telltale symptom of a high R² and significant F-statistic yet individually insignificant t-statistics. The usual remedy is to drop one of the correlated variables or combine them. Distinguishing these three by their symptoms and fixes is the core L2 quant skill.",
        ],
        keyRules: [
          "Heteroskedasticity: wrong SEs → use White (robust) SEs.",
          "Serial correlation: DW near 2 = none; fix with Newey-West SEs.",
          "Multicollinearity: high R², insignificant t's → drop a variable.",
        ],
      },
      {
        id: "sn3",
        title: "Time-series modelling and stationarity",
        testPointIds: ["tp3"],
        explanation: [
          "Time-series models require covariance stationarity: constant mean, constant variance, and a constant covariance structure over time. An autoregressive AR(1) model, x_t = b0 + b1·x_{t−1} + e, is only valid if the series is stationary; if valid, its mean-reverting level is b0/(1 − b1) and stationarity requires |b1| < 1.",
          "Nonstationarity often takes the form of a unit root (b1 = 1, a random walk), which invalidates ordinary least squares and produces spurious regressions. The Dickey-Fuller test checks for a unit root; if one is present, the standard remedy is to first-difference the series (model the change rather than the level) and re-test.",
          "Two further diagnostics matter. Seasonality appears as a statistically significant autocorrelation of the residuals at the seasonal lag (e.g. lag 4 for quarterly data); the fix is to add a seasonal lag term. ARCH (autoregressive conditional heteroskedasticity) means error variance depends on prior period variance; if present, generalized least squares or ARCH models should be used and the forecast-error variance can itself be predicted.",
        ],
        keyRules: [
          "AR models need covariance stationarity; AR(1) mean = b0/(1 − b1).",
          "Unit root (Dickey-Fuller) → first-difference the series.",
          "Significant seasonal-lag autocorrelation → add a seasonal lag.",
        ],
      },
      {
        id: "sn4",
        title: "Machine learning, big data and simulation",
        testPointIds: ["tp4", "tp5"],
        explanation: [
          "Supervised learning uses labeled data to predict an output: regression predicts a continuous target, while classification (support vector machines, random forests, neural networks) predicts a category. Unsupervised learning finds structure in unlabeled data: clustering (k-means, hierarchical) groups similar observations, and dimension reduction (principal components analysis) compresses correlated features into fewer factors.",
          "The central danger is overfitting — a model that captures noise rather than signal and generalises poorly out of sample. Defences include partitioning data into training/validation/test sets, cross-validation, and regularisation methods such as LASSO, which penalises the number of features and thereby performs variable selection, and its complexity is tuned to balance bias and variance.",
          "Monte Carlo simulation complements analytical methods for complex, path-dependent, or high-dimensional problems. It repeatedly samples from specified input distributions (with their correlations) to generate a full distribution of outcomes rather than a single point estimate, enabling percentile and tail analysis. Its reliability hinges entirely on correctly specifying the input distributions — misspecified inputs produce misleading outputs regardless of the number of trials.",
        ],
        keyRules: [
          "Supervised = labeled (regression/classification); unsupervised = unlabeled (clustering/PCA).",
          "Combat overfitting with cross-validation and LASSO regularisation.",
          "Monte Carlo yields a full outcome distribution; quality depends on input specification.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L2 item-set question — regression inference",
        question:
          "A regression with 100 observations and 3 independent variables produces a coefficient of 0.60 with a standard error of 0.20 on one regressor. Test its significance at the 5% level (critical t ≈ 1.98) and interpret the coefficient.",
        answerPlan: [
          "Compute t and df.",
          "Interpret partial effect.",
        ],
        modelAnswer:
          "Degrees of freedom = n − k − 1 = 100 − 3 − 1 = 96. t = 0.60/0.20 = 3.00, which exceeds the critical 1.98, so the coefficient is statistically significant at 5%. Interpretation: holding the other two regressors constant, a one-unit increase in this variable is associated with a 0.60-unit increase in the dependent variable.",
        markingGuide: [
          "t = 3.00 with df = 96; significant.",
          "Interprets as a partial (ceteris paribus) effect.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L2 item-set question — violation diagnosis",
        question:
          "A regression shows a high R² and a significant F-statistic, but none of the individual t-statistics is significant. Which assumption violation is indicated, and how should it be addressed?",
        answerPlan: [
          "Match symptom to violation.",
        ],
        modelAnswer:
          "This is the classic signature of multicollinearity: the regressors are highly correlated with one another, inflating the coefficient standard errors so individual t-statistics are insignificant even though the model jointly explains the data well (high R², significant F). The remedy is to drop one of the correlated variables or combine them, then re-estimate.",
        markingGuide: [
          "Identifies multicollinearity from high R² / insignificant t's.",
          "Recommends dropping/combining a correlated regressor.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp3"],
        style: "L2 item-set question — time series",
        question:
          "An analyst estimates an AR(1) model on a price series and finds the estimated slope coefficient is approximately 1.0. What problem does this indicate, and what is the appropriate corrective step?",
        answerPlan: [
          "Recognise unit root.",
          "Difference the series.",
        ],
        modelAnswer:
          "A slope of approximately 1.0 indicates a unit root (a random walk), meaning the series is nonstationary; AR estimates and any regression on the levels would be spurious. The appropriate step is to first-difference the series (model the period-to-period change) and re-test for stationarity, for example with a Dickey-Fuller test, before proceeding.",
        markingGuide: [
          "Identifies the unit root / nonstationarity.",
          "Recommends first-differencing and re-testing.",
        ],
      },
    ],
  }),

  "cfa-l2-m3": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Currency exchange rates: forwards, points and arbitrage",
        priority: "critical",
        examinerFocus:
          "Computing forward rates from points, mark-to-market of forward positions, and covered interest rate parity arbitrage within a vignette.",
        typicalQuestionForms: [
          "Compute the all-in forward rate from spot and points.",
          "Value an existing forward position before maturity.",
        ],
        mustKnow: [
          "Forward points are scaled (divide by 10,000 for 4-decimal quotes) and added to spot; a premium/discount follows CIRP.",
          "CIRP: F = S × (1 + r_price × days/360)/(1 + r_base × days/360).",
          "Mark-to-market of a forward = PV of the difference between the contracted and current forward rates on the notional.",
        ],
        scoringActions: [
          "Fix the base/price convention and the day-count before computing.",
          "Value a forward by comparing the locked rate to the current forward for the remaining tenor, then discount.",
        ],
      },
      {
        id: "tp2",
        title: "Economic growth and its determinants",
        priority: "high",
        examinerFocus:
          "Applying growth-accounting and the Solow/neoclassical framework to identify sources of growth and steady-state implications.",
        typicalQuestionForms: [
          "Decompose growth into capital, labour and total factor productivity.",
          "Effect of a change in the savings rate in the neoclassical model.",
        ],
        mustKnow: [
          "Growth accounting: ΔY/Y = ΔA/A + αΔK/K + (1 − α)ΔL/L, where α is capital's output share.",
          "In the neoclassical model, sustained per-capita growth requires technological progress (TFP); capital deepening alone hits diminishing returns.",
          "A higher savings rate raises the steady-state level of output but not its long-run growth rate.",
        ],
        scoringActions: [
          "Isolate the TFP (Solow residual) as the growth not explained by K and L.",
          "Distinguish a one-time level effect (savings) from a permanent growth effect (technology).",
        ],
      },
      {
        id: "tp3",
        title: "Regulation and its economic effects",
        priority: "medium",
        examinerFocus:
          "Understanding the rationale for regulation, regulatory tools, and cost-benefit analysis of regulatory intervention.",
        typicalQuestionForms: [
          "Which regulatory approach addresses the described market failure?",
          "Identify the cost/benefit of a regulation.",
        ],
        mustKnow: [
          "Regulation addresses market failures: externalities, information asymmetry, public goods, and market power.",
          "Regulatory tools: price controls, disclosure requirements, prudential (capital) rules, and antitrust.",
          "Regulatory capture and unintended costs (compliance burden) offset benefits.",
        ],
        scoringActions: [
          "Match the intervention to the specific market failure it corrects.",
          "Weigh direct compliance costs and indirect distortions against benefits.",
        ],
      },
      {
        id: "tp4",
        title: "Exchange-rate determination and the balance of payments",
        priority: "high",
        examinerFocus:
          "Applying the mundell-Fleming and portfolio-balance frameworks and understanding how monetary/fiscal policy and capital flows move exchange rates.",
        typicalQuestionForms: [
          "Effect of expansionary policy on the exchange rate under high vs low capital mobility.",
          "Link the current-account/capital-account to the currency.",
        ],
        mustKnow: [
          "Mundell-Fleming: with high capital mobility, expansionary monetary policy weakens the currency; expansionary fiscal policy strengthens it (via higher rates and capital inflows).",
          "A current-account deficit must be financed by a capital-account surplus (net foreign inflows).",
          "The Marshall-Lerner condition determines whether a depreciation improves the trade balance.",
        ],
        scoringActions: [
          "Trace policy → interest rates → capital flows → currency, conditioning on capital mobility.",
          "Balance the current and capital accounts when reasoning about currency pressure.",
        ],
      },
      {
        id: "tp5",
        title: "Purchasing power and interest-rate parity relationships",
        priority: "high",
        examinerFocus:
          "Linking the international parity conditions (covered/uncovered IRP, PPP, international Fisher effect) and their empirical reliability.",
        typicalQuestionForms: [
          "Apply relative PPP to forecast the future spot rate.",
          "Which parity condition holds by arbitrage?",
        ],
        mustKnow: [
          "Covered IRP holds by arbitrage; uncovered IRP and PPP are longer-run tendencies that often fail short-term.",
          "Relative PPP: expected spot change ≈ inflation differential; the international Fisher effect links interest-rate differentials to expected inflation differentials.",
          "Real exchange-rate changes reflect deviations from PPP.",
        ],
        scoringActions: [
          "Treat covered IRP as an arbitrage equality and PPP/uncovered IRP as expectations.",
          "Use the inflation or interest differential consistently (high-inflation/high-rate currency expected to depreciate).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Economics is ~5–10% at L2; currency and growth are high-yield — net >65%.",
      timeBudget: "~18 min per item set; FX forward-valuation items are the most computational.",
      answerSequence: [
        "For FX, fix conventions and day-count, then compute forwards/mark-to-market.",
        "For macro, identify the framework (growth accounting, Mundell-Fleming, parity).",
        "Answer directionally, conditioning on capital mobility or the policy stance.",
      ],
      qualityChecks: [
        "Base/price currency and 360-day convention applied consistently?",
        "Distinguished a level effect from a growth effect (savings vs technology)?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Currency forwards and covered interest parity",
        testPointIds: ["tp1", "tp5"],
        explanation: [
          "A forward exchange rate equals the spot rate adjusted for the interest-rate differential over the contract's tenor, enforced by covered interest rate parity: F = S × (1 + r_price × t)/(1 + r_base × t), where the price currency is in the numerator and t is the day-count fraction. The currency with the higher interest rate trades at a forward discount; if the market forward deviates from this, riskless covered arbitrage restores it.",
          "Forward quotes are often given as forward points relative to spot; points are scaled by the quote's decimal convention (e.g. divided by 10,000 for a four-decimal quote) and added to spot to get the all-in forward. A positive points figure means the base currency is at a forward premium.",
          "Valuing an existing forward before maturity compares the originally contracted forward rate to the current forward rate for the remaining tenor. The mark-to-market value to the long is the difference between these rates, multiplied by the notional and discounted to the present at the appropriate rate. Uncovered IRP and PPP, by contrast, are expectational relationships (about future spot rates) that hold on average over the long run but deviate substantially in the short term.",
        ],
        keyRules: [
          "CIRP: F = S × (1 + r_price·t)/(1 + r_base·t).",
          "Higher-rate currency at a forward discount.",
          "Mark-to-market = PV of (current forward − contracted forward) × notional.",
        ],
        workedProblem: {
          scenario:
            "Spot USD/EUR = 1.1000. The US 90-day rate is 4% and the eurozone 90-day rate is 2% (both annualised, 360-day). (a) Compute the 90-day forward. (b) 30 days later, spot is 1.1050 and the 60-day forward is 1.1080; value a EUR 10,000,000 long-EUR forward originally struck at the rate from part (a), ignoring discounting for simplicity.",
          steps: [
            "(a) t = 90/360 = 0.25. F = 1.1000 × (1 + 0.04×0.25)/(1 + 0.02×0.25) = 1.1000 × (1.01/1.005) = 1.1000 × 1.004975 = 1.10547 USD/EUR.",
            "(b) The contract locked 1.10547 USD/EUR; the current 60-day forward is 1.1080 USD/EUR.",
            "Gain per EUR to the long = 1.1080 − 1.10547 = 0.00253 USD/EUR.",
            "Value = 0.00253 × 10,000,000 = USD 25,300 (before discounting the remaining 60 days).",
          ],
          conclusion:
            "The 90-day forward is ≈ 1.1055 USD/EUR (EUR at a slight forward premium, consistent with its lower rate). The long-EUR forward has gained about USD 25,300 as the forward rate rose above the contracted rate.",
          markingNotes: [
            "CIRP applied with correct numerator/denominator and day-count.",
            "Mark-to-market compares contracted vs current forward for the remaining tenor.",
            "Gain scaled by notional (≈ USD 25,300).",
          ],
        },
      },
      {
        id: "sn2",
        title: "Sources of economic growth",
        testPointIds: ["tp2"],
        explanation: [
          "Growth accounting decomposes output growth into contributions from capital, labour, and total factor productivity: ΔY/Y = ΔA/A + α·ΔK/K + (1 − α)·ΔL/L, where α is capital's share of output. The TFP term (ΔA/A), the Solow residual, captures growth not explained by measured inputs — technology, efficiency, and organisational improvements.",
          "In the neoclassical (Solow) model, capital accumulation faces diminishing marginal returns, so capital deepening alone cannot sustain per-capita growth indefinitely; the economy converges to a steady state. Only continuous technological progress (rising TFP) can generate sustained long-run growth in output per worker.",
          "A key exam distinction is between level effects and growth effects. Raising the savings/investment rate increases the steady-state level of output per capita and produces faster growth during the transition, but it does not permanently raise the long-run growth rate — that depends on technology. Endogenous growth theory challenges this by arguing that investment in knowledge and human capital can generate increasing returns and sustained growth.",
        ],
        keyRules: [
          "ΔY/Y = ΔA/A + αΔK/K + (1 − α)ΔL/L; TFP is the residual.",
          "Diminishing returns to capital → steady state without technology.",
          "Savings raises the level; technology raises the long-run growth rate.",
        ],
      },
      {
        id: "sn3",
        title: "Exchange-rate determination and the balance of payments",
        testPointIds: ["tp4"],
        explanation: [
          "The Mundell-Fleming model links monetary and fiscal policy to the exchange rate through interest rates and capital flows, conditioned on the degree of capital mobility. With high capital mobility, expansionary monetary policy lowers domestic rates, prompts capital outflows, and weakens the currency; expansionary fiscal policy raises rates, attracts inflows, and strengthens the currency. Under low capital mobility, trade flows dominate and the signs can differ.",
          "The balance of payments must net to zero: a current-account deficit (importing more than exporting, broadly) must be financed by a capital-and-financial-account surplus (net foreign investment inflows). Persistent current-account deficits therefore require ongoing foreign financing, which affects currency demand and can be sustainable or destabilising depending on what the inflows fund.",
          "Whether a currency depreciation improves the trade balance depends on the Marshall-Lerner condition: the sum of the absolute values of export and import demand elasticities must exceed one. Even when it holds, the improvement is often delayed (the J-curve), because volumes adjust more slowly than prices, worsening the balance before it improves.",
        ],
        keyRules: [
          "High mobility: easy money weakens, easy fiscal strengthens the currency.",
          "Current-account deficit = capital-account surplus.",
          "Marshall-Lerner: depreciation helps the trade balance if elasticity sum > 1.",
        ],
      },
      {
        id: "sn4",
        title: "Regulation and market failure",
        testPointIds: ["tp3"],
        explanation: [
          "Regulation is economically justified where markets fail to allocate resources efficiently. The canonical failures are externalities (costs/benefits borne by third parties, e.g. pollution), informational asymmetries (one party knows more, e.g. securities disclosure), public goods (non-excludable, non-rival), and market power (monopoly). Each failure suggests a tailored regulatory response.",
          "Regulators deploy various tools: price and quantity controls, mandatory disclosure to correct asymmetries, prudential (capital and liquidity) requirements for financial institutions, and antitrust enforcement against anti-competitive conduct. The appropriate tool depends on the failure — disclosure for asymmetry, Pigouvian taxes for externalities, capital rules for systemic financial risk.",
          "Regulation carries costs that must be weighed against its benefits. Direct compliance costs, indirect distortions and reduced innovation, and the risk of regulatory capture (regulators serving the industry rather than the public) can erode or reverse the intended gains. Sound analysis applies cost-benefit reasoning rather than assuming regulation is automatically beneficial.",
        ],
        keyRules: [
          "Regulate for externalities, asymmetry, public goods, market power.",
          "Match the tool to the failure (disclosure, Pigouvian tax, capital rules, antitrust).",
          "Weigh compliance costs and capture risk against benefits.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L2 item-set question — forward rate",
        question:
          "Spot GBP/USD is 1.2500. The 180-day US rate is 5% and the 180-day UK rate is 3% (annualised, 360-day). Compute the 180-day forward GBP/USD rate under covered interest parity.",
        answerPlan: [
          "Identify base/price and day-count.",
          "Apply CIRP.",
        ],
        modelAnswer:
          "Here USD is the price currency and GBP the base (GBP/USD read as USD per GBP). t = 180/360 = 0.5. F = S × (1 + r_price·t)/(1 + r_base·t) = 1.2500 × (1 + 0.05×0.5)/(1 + 0.03×0.5) = 1.2500 × (1.025/1.015) = 1.2500 × 1.009852 = 1.26232. The GBP trades at a slight forward premium because the UK rate is lower.",
        markingGuide: [
          "Correct price/base assignment and t = 0.5.",
          "Forward ≈ 1.2623; identifies GBP premium.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L2 item-set question — growth accounting",
        question:
          "An economy's output grew 5%. Capital grew 4% and labour grew 2%; capital's share of output is 0.3. Estimate total factor productivity growth.",
        answerPlan: [
          "Apply growth accounting.",
          "Solve for the residual.",
        ],
        modelAnswer:
          "ΔY/Y = ΔA/A + αΔK/K + (1 − α)ΔL/L → 5% = ΔA/A + 0.3×4% + 0.7×2% = ΔA/A + 1.2% + 1.4% = ΔA/A + 2.6%. So ΔA/A = 5% − 2.6% = 2.4%. TFP (the Solow residual) contributed 2.4 percentage points, the largest single source of growth here.",
        markingGuide: [
          "Weights capital and labour by 0.3 and 0.7.",
          "TFP = 2.4%.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L2 item-set question — Mundell-Fleming",
        question:
          "Under high capital mobility and floating exchange rates, a country pursues expansionary fiscal policy. What is the likely effect on domestic interest rates and the currency, and why?",
        answerPlan: [
          "Trace fiscal → rates → flows → currency.",
        ],
        modelAnswer:
          "Expansionary fiscal policy raises government borrowing and pushes domestic interest rates up. With high capital mobility, higher rates attract foreign capital inflows, increasing demand for the domestic currency and causing it to appreciate. The stronger currency then tends to crowd out net exports, partially offsetting the fiscal stimulus.",
        markingGuide: [
          "Higher domestic interest rates from fiscal expansion.",
          "Capital inflows cause currency appreciation.",
        ],
      },
    ],
  }),

  "cfa-l2-m4": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Intercorporate investments and consolidation",
        priority: "critical",
        examinerFocus:
          "Applying the correct accounting method by level of influence (financial assets, equity method, acquisition/consolidation) and its effect on the statements and ratios.",
        typicalQuestionForms: [
          "Which method applies given the ownership/influence described?",
          "Effect of the equity method vs consolidation on reported metrics.",
        ],
        mustKnow: [
          "<20% (no significant influence): financial asset (FVPL/FVOCI); 20–50% (significant influence): equity method; >50% (control): consolidation.",
          "Equity method: one-line investment; share of investee income raises the investment and net income; dividends reduce the investment.",
          "Consolidation combines 100% of assets/liabilities/revenue with a non-controlling interest for the minority share.",
        ],
        scoringActions: [
          "Classify by influence first, then apply the method's statement effects.",
          "Note that net income can be identical under equity method vs consolidation, but revenue, assets and margins differ.",
        ],
      },
      {
        id: "tp2",
        title: "Business combinations, goodwill and non-controlling interest",
        priority: "high",
        examinerFocus:
          "Measuring goodwill (full vs partial), fair-valuing acquired net assets, and testing goodwill for impairment under IFRS vs US GAAP.",
        typicalQuestionForms: [
          "Compute goodwill and non-controlling interest at acquisition.",
          "Compute a goodwill impairment.",
        ],
        mustKnow: [
          "Goodwill = purchase consideration − fair value of identifiable net assets acquired (partial); full goodwill also grosses up the NCI share.",
          "IFRS allows full or partial goodwill; US GAAP requires full goodwill.",
          "Goodwill is not amortised; it is tested for impairment (IFRS one-step CGU test; US GAAP one-step reporting-unit test in current guidance).",
        ],
        scoringActions: [
          "Fair-value the acquired net assets before computing goodwill.",
          "Gross up goodwill and NCI to fair value under the full-goodwill method.",
        ],
      },
      {
        id: "tp3",
        title: "Post-employment and share-based compensation",
        priority: "high",
        examinerFocus:
          "Interpreting defined-benefit pension accounting (funded status, service/interest cost, actuarial assumptions) and the effect of share-based comp.",
        typicalQuestionForms: [
          "Compute funded status or the pension expense components.",
          "Effect of changing the discount rate/expected return assumption.",
        ],
        mustKnow: [
          "Funded status = fair value of plan assets − present value of the defined-benefit obligation (a net asset or liability on the balance sheet).",
          "Periodic cost includes service cost, net interest, and remeasurements; IFRS puts remeasurements in OCI, US GAAP amortises actuarial gains/losses.",
          "A higher discount rate lowers the DBO and service cost; a lower rate raises the obligation.",
        ],
        scoringActions: [
          "Compute funded status as assets minus obligation and locate it on the balance sheet.",
          "Trace the effect of assumption changes on the obligation and expense.",
        ],
      },
      {
        id: "tp4",
        title: "Multinational operations: currency translation",
        priority: "critical",
        examinerFocus:
          "Choosing the current-rate (translation) vs temporal (remeasurement) method based on the functional currency, and the location of the FX gain/loss.",
        typicalQuestionForms: [
          "Which method applies given the functional currency?",
          "Effect on the translation adjustment / net income.",
        ],
        mustKnow: [
          "If the functional currency is the subsidiary's local currency: current-rate method; the translation adjustment goes to OCI (CTA in equity).",
          "If the functional currency is the parent's (or hyperinflationary): temporal method; the remeasurement gain/loss goes to the income statement.",
          "Current-rate: all assets/liabilities at the current rate, equity at historical, income at average; temporal: monetary items at current, non-monetary at historical.",
        ],
        scoringActions: [
          "Identify the functional currency to pick the method.",
          "Route the FX effect to OCI (current-rate) or net income (temporal).",
        ],
      },
      {
        id: "tp5",
        title: "Financial-reporting quality and analysis",
        priority: "high",
        examinerFocus:
          "Detecting earnings management and low reporting quality, and applying analytical adjustments for comparability.",
        typicalQuestionForms: [
          "Which choice signals aggressive/low-quality reporting?",
          "Adjust the statements for a specific distortion.",
        ],
        mustKnow: [
          "Aggressive choices accelerate revenue, defer expenses, or classify items to flatter operating results and cash flow.",
          "The accruals ratio (accruals/net operating assets) and a persistent CFO-below-net-income gap flag low quality.",
          "Analysts adjust for off-balance-sheet items, non-recurring items, and differing accounting policies before comparison.",
        ],
        scoringActions: [
          "Compare CFO to net income and scrutinise accruals as a quality screen.",
          "Restate for classification and non-recurring items before drawing conclusions.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "FSA is ~10–15% at L2 — a top-weight topic; net >70% by mastering consolidation, pensions and translation.",
      timeBudget: "~18 min per item set; consolidation and translation items are computation-heavy.",
      answerSequence: [
        "Classify the situation (influence level, functional currency).",
        "Apply the correct method and compute the required metric.",
        "Locate the effect (OCI vs net income) and interpret the ratio impact.",
      ],
      qualityChecks: [
        "Did I fair-value acquired net assets before goodwill?",
        "Did I route the FX/pension effect to the correct statement (OCI vs P&L)?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Accounting by level of influence",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "The accounting for an equity investment is driven by the degree of influence, not merely the percentage owned, though ownership is the usual proxy. Below significant influence (typically <20%), the stake is a financial asset measured at fair value, with changes through profit or loss (FVPL) or other comprehensive income (FVOCI). Significant influence (typically 20–50%) triggers the equity method. Control (typically >50%) requires full consolidation.",
          "Under the equity method the investment is a single line on the balance sheet: it rises by the investor's share of investee net income (also recognised in the investor's income) and falls by dividends received. This 'one-line consolidation' reports the same bottom-line net income as full consolidation but very different revenue, total assets, and margins — a frequent exam comparison.",
          "Consolidation (control) combines 100% of the subsidiary's assets, liabilities, revenues and expenses with the parent's, then presents a non-controlling interest for the minority owners' share of equity and income. Goodwill arises when consideration exceeds the fair value of identifiable net assets acquired; it is not amortised but tested for impairment, and under the full-goodwill method (required by US GAAP, optional under IFRS) both goodwill and the NCI are grossed up to fair value.",
        ],
        keyRules: [
          "<20% financial asset; 20–50% equity method; >50% consolidate.",
          "Equity method: same net income as consolidation, different revenue/assets/margins.",
          "Goodwill = consideration − FV of identifiable net assets; not amortised.",
        ],
        workedProblem: {
          scenario:
            "Parent buys 80% of Sub for $800m. Sub's identifiable net assets have a fair value of $900m. Compute goodwill and non-controlling interest at acquisition under (a) the partial-goodwill method and (b) the full-goodwill method (implied 100% value = 800/0.80 = $1,000m).",
          steps: [
            "Partial goodwill: goodwill = consideration − parent's share of FV net assets = 800 − 0.80×900 = 800 − 720 = $80m. NCI = 0.20 × 900 = $180m.",
            "Full goodwill: implied fair value of 100% of Sub = 800/0.80 = $1,000m; goodwill = 1,000 − 900 = $100m.",
            "Full-goodwill NCI = fair value of the 20% stake = 0.20 × 1,000 = $200m.",
            "Difference: full goodwill is $20m higher than partial, and NCI is $20m higher — the extra $20m reflects the minority's share of goodwill.",
          ],
          conclusion:
            "Partial method: goodwill $80m, NCI $180m. Full method (US GAAP): goodwill $100m, NCI $200m. The full method grosses up both goodwill and NCI to include the minority's share of goodwill.",
          markingNotes: [
            "Fair-values net assets ($900m) before computing goodwill.",
            "Partial goodwill = $80m, NCI = $180m.",
            "Full goodwill = $100m, NCI = $200m.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Currency translation of foreign subsidiaries",
        testPointIds: ["tp4"],
        explanation: [
          "The translation method depends on the subsidiary's functional currency — the currency of its primary economic environment. If the functional currency is the subsidiary's own local currency, the current-rate (all-current) method applies: assets and liabilities are translated at the current rate, equity at historical rates, and income-statement items at the average rate. The resulting cumulative translation adjustment (CTA) is reported in other comprehensive income within equity, so it does not touch net income.",
          "If the functional currency is the parent's presentation currency (or the subsidiary operates in a hyperinflationary economy), the temporal (remeasurement) method applies: monetary assets and liabilities are translated at the current rate, non-monetary items (inventory, PP&E) at historical rates, and related income-statement items (COGS, depreciation) at historical rates too. The remeasurement gain or loss flows through the income statement, adding volatility to reported earnings.",
          "The choice has large analytical consequences. Under the current-rate method a subsidiary with a net asset position generates a positive CTA when the local currency appreciates; under the temporal method the sign of the FX effect depends on the net monetary position. Because the two methods translate the same underlying results differently, analysts must identify the functional currency before interpreting margins and growth.",
        ],
        keyRules: [
          "Local currency functional → current-rate method → CTA in OCI.",
          "Parent-currency functional/hyperinflation → temporal method → gain/loss in net income.",
          "Current-rate uses current/average/historical for BS/IS/equity respectively.",
        ],
      },
      {
        id: "sn3",
        title: "Defined-benefit pensions and share-based pay",
        testPointIds: ["tp3"],
        explanation: [
          "A defined-benefit plan promises specified future benefits, so the employer bears the investment and actuarial risk. The balance sheet reports the funded status: the fair value of plan assets minus the present value of the defined-benefit obligation (DBO). A surplus is an asset (subject to a ceiling); a deficit is a liability. The DBO is highly sensitive to the discount rate — a higher rate lowers the present value of the obligation and the current service cost, and vice versa.",
          "Periodic pension cost comprises current service cost (the increase in the obligation from another year of service), net interest on the net pension liability/asset, and remeasurements (actuarial gains/losses and the difference between actual and expected asset returns). IFRS reports remeasurements in OCI and uses a single net-interest rate (the discount rate) for both assets and obligation. US GAAP includes an expected return on assets in P&L and amortises actuarial gains/losses (corridor approach), so the two frameworks report different amounts in net income even for identical plans.",
          "Share-based compensation (stock options, restricted stock) is expensed over the vesting period based on grant-date fair value, increasing compensation expense and, for options, potentially diluting EPS. Analysts adjust for these items when comparing firms, and treat aggressive assumption choices (e.g. an unrealistically high discount rate) as a reporting-quality concern.",
        ],
        keyRules: [
          "Funded status = plan assets FV − DBO on the balance sheet.",
          "Higher discount rate → lower DBO and service cost.",
          "IFRS: remeasurements in OCI; US GAAP: expected return in P&L, corridor amortisation.",
        ],
      },
      {
        id: "sn4",
        title: "Financial-reporting quality",
        testPointIds: ["tp5"],
        explanation: [
          "Reporting quality spans a spectrum from high-quality, decision-useful reporting to fraudulent statements. Within GAAP, firms can make aggressive but permissible choices — accelerating revenue recognition, deferring or capitalising expenses, or classifying recurring costs as non-recurring — that flatter reported earnings, operating income, and operating cash flow without technically breaching the rules.",
          "Quantitative screens help detect low quality. A persistent gap where operating cash flow runs well below net income suggests earnings are supported by accruals rather than cash. The accruals ratio (aggregate accruals relative to average net operating assets) is negatively related to future returns: high accruals predict earnings reversals. Rising days-sales-outstanding or inventory growing faster than sales are additional red flags.",
          "The analyst's job is to adjust reported numbers for comparability and economic reality: capitalise or expense consistently across peers, remove non-recurring items to assess sustainable earnings, and bring off-balance-sheet obligations (e.g. certain leases or unconsolidated entities) onto an analytical balance sheet. Only after such adjustments are ratios and valuations meaningful across companies and over time.",
        ],
        keyRules: [
          "Aggressive choices boost revenue/operating results within GAAP.",
          "CFO << net income and high accruals signal low quality.",
          "Adjust for non-recurring and off-balance-sheet items before comparing.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L2 item-set question — equity method vs consolidation",
        question:
          "Company A owns 30% of Company B and applies the equity method. During the year B earns $10m and pays $4m in dividends. What is the effect on A's investment account and net income, and how would revenue differ under consolidation?",
        answerPlan: [
          "Apply equity-method mechanics.",
          "Contrast revenue treatment.",
        ],
        modelAnswer:
          "Under the equity method, A recognises 30% of B's income, $3m, in its net income and increases the investment account by $3m; dividends of 30% × $4m = $1.2m reduce the investment. Net change in the investment = +$3m − $1.2m = +$1.8m. Revenue is unaffected — the equity method reports only A's share of income on one line. Under consolidation (if A controlled B), 100% of B's revenue would be added to A's revenue, with a non-controlling interest for the 70% not owned, so revenue and total assets would be much higher even though net income attributable to A would be similar.",
        markingGuide: [
          "Recognises $3m income and $1.2m dividend effect (net +$1.8m to investment).",
          "States revenue is unchanged under equity method but grossed up under consolidation.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L2 item-set question — currency translation",
        question:
          "A US parent's subsidiary operates in Europe with the euro as its functional currency. The euro appreciated during the year and the subsidiary holds net assets. Which translation method applies, where does the FX effect appear, and what is its sign?",
        answerPlan: [
          "Identify functional currency and method.",
          "Locate and sign the effect.",
        ],
        modelAnswer:
          "Because the functional currency is the subsidiary's local currency (the euro), the current-rate method applies. The FX effect is recorded as a cumulative translation adjustment in other comprehensive income (equity), not in net income. With a net asset position and an appreciating euro, the translation adjustment is positive, increasing equity through OCI.",
        markingGuide: [
          "Current-rate method with CTA in OCI.",
          "Positive translation adjustment given net assets and euro appreciation.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp3"],
        style: "L2 item-set question — pensions",
        question:
          "A firm increases the discount rate used to value its defined-benefit obligation. All else equal, how does this affect the defined-benefit obligation, the funded status, and current service cost?",
        answerPlan: [
          "Trace discount-rate sensitivity.",
        ],
        modelAnswer:
          "A higher discount rate reduces the present value of the defined-benefit obligation. With plan assets unchanged, the lower obligation improves the funded status (larger surplus or smaller deficit). Current service cost also falls, because the present value of the additional benefits earned in the period is discounted at a higher rate. Analysts should check that the higher rate is justified, as it flatters both the balance sheet and pension expense.",
        markingGuide: [
          "Higher rate lowers the DBO and service cost.",
          "Funded status improves; notes the quality/assumption caveat.",
        ],
      },
    ],
  }),

  "cfa-l2-m5": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Capital structure and the cost of capital in depth",
        priority: "high",
        examinerFocus:
          "Applying MM with taxes and distress costs, static trade-off theory, and the effect of leverage on the cost of equity and WACC.",
        typicalQuestionForms: [
          "Compute the levered cost of equity or WACC as leverage changes.",
          "Identify the optimal capital structure rationale.",
        ],
        mustKnow: [
          "MM Proposition II with taxes: re = r0 + (r0 − rd)(D/E)(1 − t); leverage raises the cost of equity.",
          "The static trade-off theory balances the debt tax shield against expected financial-distress costs.",
          "Pecking-order theory: firms prefer internal funds, then debt, then equity, due to asymmetric information.",
        ],
        scoringActions: [
          "Use the levered-equity formula to update re when D/E changes.",
          "Locate the optimum where marginal tax benefit equals marginal distress cost.",
        ],
      },
      {
        id: "tp2",
        title: "Analysis of dividends and share repurchases",
        priority: "high",
        examinerFocus:
          "Comparing dividends and buybacks on wealth and EPS, and applying dividend theories and payout-policy signalling.",
        typicalQuestionForms: [
          "Compare EPS/BVPS after a buyback vs a dividend.",
          "Which dividend theory/signal is described?",
        ],
        mustKnow: [
          "In perfect markets a buyback and an equal dividend leave shareholder wealth unchanged; taxes and signalling break the equivalence.",
          "A buyback raises EPS when the earnings yield (E/P) exceeds the after-tax cost of funds used.",
          "Dividend signalling: initiations/increases signal management confidence; cuts signal distress.",
        ],
        scoringActions: [
          "Compute post-transaction shares and EPS to compare buyback vs dividend.",
          "Interpret payout changes as information signals under asymmetric information.",
        ],
      },
      {
        id: "tp3",
        title: "Corporate governance and ESG integration",
        priority: "high",
        examinerFocus:
          "Evaluating governance structures, stakeholder conflicts, and integrating ESG factors into analysis and valuation.",
        typicalQuestionForms: [
          "Identify a governance weakness or a principal-agent conflict.",
          "How does an ESG factor affect the analysis?",
        ],
        mustKnow: [
          "Principal-agent conflicts arise between managers and shareholders, and between controlling and minority shareholders.",
          "Strong governance features: independent board majority, separate chair/CEO, aligned incentives, and shareholder rights.",
          "ESG integration adjusts forecasts and discount rates for material environmental, social, and governance risks (materiality varies by industry).",
        ],
        scoringActions: [
          "Name the specific agency conflict and the governance mechanism that mitigates it.",
          "Tie the ESG factor to a concrete cash-flow or risk (discount-rate) effect.",
        ],
      },
      {
        id: "tp4",
        title: "Mergers, acquisitions and corporate restructuring",
        priority: "critical",
        examinerFocus:
          "Evaluating merger motivations, valuing targets, and analysing the distribution of synergies, forms of payment, and takeover defences.",
        typicalQuestionForms: [
          "Compute the gains to the acquirer and target and the post-merger value.",
          "Effect of cash vs stock consideration on risk-sharing.",
        ],
        mustKnow: [
          "Synergy = value of the combined firm − (value of acquirer + value of target standalone); the target's gain is the premium paid.",
          "Cash consideration transfers all synergy risk to the acquirer; stock consideration shares risk with target holders.",
          "Takeover defences (poison pill, staggered board, golden parachute) and the Herfindahl-Hirschman Index for antitrust review.",
        ],
        scoringActions: [
          "Split total synergy into acquirer gain (synergy − premium) and target gain (premium).",
          "Assess payment method by who bears the risk if synergies disappoint.",
        ],
      },
      {
        id: "tp5",
        title: "Cost of capital drivers and country risk",
        priority: "medium",
        examinerFocus:
          "Estimating beta (including unlevering/relevering) and adjusting the cost of equity for country risk in emerging markets.",
        typicalQuestionForms: [
          "Unlever and relever a comparable's beta.",
          "Add a country risk premium to the cost of equity.",
        ],
        mustKnow: [
          "Unlevered (asset) beta = βe/[1 + (1 − t)(D/E)]; relever to the subject firm's capital structure.",
          "Country risk premium (CRP) is added to the equity risk premium for emerging markets.",
          "CRP ≈ sovereign yield spread × (equity volatility/bond volatility).",
        ],
        scoringActions: [
          "Unlever the comparable's beta, then relever with the target's D/E.",
          "Add the CRP to the mature-market ERP before applying CAPM.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Corporate issuers is ~5–10% at L2; M&A and payout analysis are high-yield — net >65%.",
      timeBudget: "~18 min per item set; M&A synergy and beta calculations reward clean setup.",
      answerSequence: [
        "Identify the sub-topic (capital structure, payout, governance, M&A).",
        "Apply the formula (levered equity, synergy split, unlever/relever beta).",
        "Interpret the strategic implication (optimal structure, risk-sharing, signalling).",
      ],
      qualityChecks: [
        "Did I split synergy into acquirer vs target gains correctly?",
        "Did I unlever before relevering beta to the correct D/E?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Capital structure theory applied",
        testPointIds: ["tp1", "tp5"],
        explanation: [
          "Modigliani-Miller's second proposition with taxes shows that the cost of equity rises with leverage: re = r0 + (r0 − rd)(D/E)(1 − t), where r0 is the unlevered cost of equity. Because more debt raises financial risk borne by equity holders, they demand a higher return, partially offsetting the benefit of cheaper debt; the tax shield, however, still lowers WACC over a range of leverage.",
          "The static trade-off theory posits an interior optimum: firms add debt until the marginal value of the interest tax shield is exactly offset by the marginal expected cost of financial distress (bankruptcy costs, lost customers/suppliers, underinvestment). This produces a target capital structure toward which firms gravitate. The pecking-order theory, by contrast, arises from information asymmetry: managers prefer internal funds, then debt, and issue equity only as a last resort because equity issuance signals overvaluation.",
          "Beta estimation feeds the cost of equity. A comparable company's equity beta reflects both business and financial risk, so it is unlevered to an asset beta, βasset = βequity/[1 + (1 − t)(D/E)], then relevered to the subject firm's own D/E. For emerging-market firms, a country risk premium — approximated by the sovereign yield spread scaled by the ratio of equity to bond market volatility — is added to the mature-market equity risk premium before applying the CAPM.",
        ],
        keyRules: [
          "Levered re = r0 + (r0 − rd)(D/E)(1 − t).",
          "Trade-off optimum: marginal tax shield = marginal distress cost.",
          "Unlever then relever beta; add a CRP for emerging markets.",
        ],
        workedProblem: {
          scenario:
            "A comparable firm has an equity beta of 1.30, a debt-to-equity ratio of 0.50, and a 25% tax rate. The subject firm targets a debt-to-equity ratio of 1.00 and also faces a 25% tax rate. The risk-free rate is 4% and the equity risk premium is 5%. Estimate the subject firm's cost of equity.",
          steps: [
            "Unlever the comparable's beta: βasset = 1.30/[1 + (1 − 0.25)(0.50)] = 1.30/[1 + 0.375] = 1.30/1.375 = 0.9455.",
            "Relever to the subject's D/E: βequity = 0.9455 × [1 + (1 − 0.25)(1.00)] = 0.9455 × 1.75 = 1.6545.",
            "Apply CAPM: re = rf + βequity × ERP = 4% + 1.6545 × 5% = 4% + 8.27%.",
            "re = 12.27%.",
          ],
          conclusion:
            "The subject firm's cost of equity is about 12.3%. Its higher leverage (D/E of 1.0 vs the comparable's 0.5) raises the relevered beta to ~1.65 and thus the required return, illustrating how financial risk feeds into the cost of equity.",
          markingNotes: [
            "Correct unlevering formula and asset beta ≈ 0.95.",
            "Relevered beta ≈ 1.65 at the target D/E.",
            "Cost of equity ≈ 12.3%.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Dividends versus repurchases",
        testPointIds: ["tp2"],
        explanation: [
          "In frictionless markets, a cash dividend and an equal-value share repurchase leave total shareholder wealth unchanged: the dividend delivers cash directly, while the buyback delivers it by reducing the share count so each remaining share is worth more. The choice becomes economically meaningful only once taxes, signalling, and information asymmetry enter.",
          "A buyback increases earnings per share when the funds used have an after-tax cost below the company's earnings yield (E/P); if the earnings yield exceeds the after-tax financing cost, fewer shares divide the same earnings and EPS rises, otherwise it falls. Book value per share can rise or fall depending on whether shares are repurchased above or below book value. These mechanical effects are common calculation items.",
          "Payout policy also conveys information. Under dividend-signalling theory, initiating or raising a dividend signals management's confidence in sustainable cash flows, while a cut signals distress; because dividends are 'sticky', managers are reluctant to raise them unless they believe the increase is sustainable. Buybacks are more flexible and less of a commitment, which affects how the market interprets each.",
        ],
        keyRules: [
          "Perfect markets: dividend and equal buyback leave wealth unchanged.",
          "Buyback raises EPS if earnings yield > after-tax cost of funds.",
          "Dividend increases signal confidence; cuts signal distress.",
        ],
      },
      {
        id: "sn3",
        title: "Governance, stakeholders and ESG",
        testPointIds: ["tp3"],
        explanation: [
          "Corporate governance manages the conflicts among stakeholders. The classic principal-agent problem is between shareholders (principals) and managers (agents), who may pursue empire-building, excessive compensation, or risk-aversion at owners' expense. A second conflict pits controlling shareholders against minority shareholders, who can be expropriated through related-party transactions or dilutive actions.",
          "Effective governance mechanisms include a board with a majority of independent directors, separation of the chair and CEO roles, board committees (audit, remuneration, nomination) with independent members, incentive compensation aligned to long-term value, transparent disclosure, and protection of shareholder voting rights. Weaknesses in any of these — an entrenched board, related-party dealings, or misaligned pay — are red flags that raise the cost of capital.",
          "ESG integration incorporates material environmental, social, and governance factors into fundamental analysis. Materiality is industry-specific: carbon exposure matters for energy and utilities, data privacy for technology, supply-chain labour for apparel. Analysts translate ESG risks into concrete effects — adjusting revenue or cost forecasts for a factor, or raising the discount rate for elevated risk — rather than treating ESG as a separate scoring exercise divorced from valuation.",
        ],
        keyRules: [
          "Key conflicts: manager-shareholder and controlling-minority.",
          "Good governance: independent board, split chair/CEO, aligned pay, shareholder rights.",
          "ESG materiality is industry-specific; translate factors into cash-flow/discount-rate effects.",
        ],
      },
      {
        id: "sn4",
        title: "Mergers, acquisitions and restructuring",
        testPointIds: ["tp4"],
        explanation: [
          "Mergers are motivated by synergies (revenue enhancement or cost savings), growth, diversification, market power, or tax benefits. Total synergy equals the value of the combined firm minus the sum of the two firms' standalone values. The premium paid to target shareholders is the target's gain; the acquirer's gain is the synergy created minus the premium paid — so overpaying transfers value from acquirer to target holders.",
          "The form of payment allocates risk. In a cash deal, target shareholders receive a fixed amount and the acquirer's shareholders bear the entire risk that synergies fail to materialise. In a stock deal, target shareholders become owners of the combined firm and therefore share both the upside and the downside of synergy realisation, reducing the acquirer's risk but diluting its existing owners.",
          "Antitrust review often uses the Herfindahl-Hirschman Index (the sum of squared market shares); large post-merger increases in concentrated markets attract scrutiny. Targets may deploy pre- or post-offer defences — poison pills, staggered (classified) boards, golden parachutes, or seeking a white knight — that affect the likelihood and price of a takeover. Restructuring (divestitures, spin-offs, carve-outs) reverses prior combinations to unlock value.",
        ],
        keyRules: [
          "Synergy = combined value − (acquirer + target standalone); target gain = premium.",
          "Cash: acquirer bears synergy risk; stock: risk shared with target holders.",
          "HHI gauges concentration; know common takeover defences.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp4"],
        style: "L2 item-set question — M&A synergy",
        question:
          "Acquirer (standalone value $500m) and Target (standalone value $200m) will be worth $780m combined. The acquirer pays a $60m premium over the target's standalone value. Compute total synergy and the gains to the acquirer and target.",
        answerPlan: [
          "Compute synergy.",
          "Split into acquirer and target gains.",
        ],
        modelAnswer:
          "Total synergy = combined value − (acquirer + target) = 780 − (500 + 200) = $80m. The target's gain equals the premium paid, $60m. The acquirer's gain equals synergy minus premium = 80 − 60 = $20m. The acquirer captures only $20m of the $80m synergy; the rest is paid away to target shareholders as the premium.",
        markingGuide: [
          "Synergy = $80m.",
          "Target gain = $60m (premium); acquirer gain = $20m.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L2 item-set question — buyback EPS",
        question:
          "A firm has 10m shares, net income of $20m (EPS $2.00), and a share price of $40. It uses $40m of cash earning 3% after tax to repurchase 1m shares. Compute the new EPS and explain the direction of the change.",
        answerPlan: [
          "Adjust earnings for lost interest.",
          "Recompute EPS on fewer shares.",
        ],
        modelAnswer:
          "Lost after-tax interest = $40m × 3% = $1.2m, so net income falls to $18.8m. Shares fall to 9m. New EPS = 18.8/9 = $2.089. EPS rises from $2.00 to about $2.09 because the earnings yield used (E/P = 2/40 = 5%) exceeds the 3% after-tax cost of the cash forgone; when the earnings yield exceeds the funding cost, a buyback is EPS-accretive.",
        markingGuide: [
          "Subtracts $1.2m lost after-tax interest.",
          "New EPS ≈ $2.09; explains earnings-yield vs funding-cost rule.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp3"],
        style: "L2 item-set question — governance",
        question:
          "A company's founder is both chair and CEO, the board is majority insiders, and several supply contracts are with entities the founder owns. Identify the governance concerns and the principal conflict.",
        answerPlan: [
          "Name the conflicts.",
          "Identify weaknesses.",
        ],
        modelAnswer:
          "The combined chair/CEO role and an insider-dominated board weaken independent oversight of management, aggravating the manager-shareholder agency conflict. The related-party supply contracts with founder-owned entities create a controlling-shareholder versus minority-shareholder conflict, risking expropriation of minority holders through non-arm's-length pricing. Remedies include separating the chair and CEO roles, appointing an independent board majority, and subjecting related-party transactions to independent review.",
        markingGuide: [
          "Identifies manager-shareholder and controlling-minority conflicts.",
          "Flags combined chair/CEO, insider board, and related-party deals; suggests remedies.",
        ],
      },
    ],
  }),

  "cfa-l2-m6": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Discounted dividend and free-cash-flow valuation",
        priority: "critical",
        examinerFocus:
          "Applying multistage DDM and FCFF/FCFE models with correct terminal values and discount rates in a vignette.",
        typicalQuestionForms: [
          "Compute value with a two/three-stage DDM or FCFE model.",
          "Choose the appropriate model given the firm's characteristics.",
        ],
        mustKnow: [
          "FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv; FCFE = FCFF − Int(1 − t) + net borrowing.",
          "Discount FCFF at WACC for firm value (subtract debt for equity); discount FCFE at cost of equity.",
          "Terminal value = FCF or dividend in the first stable year / (r − g); place it at the end of the explicit horizon.",
        ],
        scoringActions: [
          "Match the discount rate to the cash-flow type (WACC↔FCFF, re↔FCFE/dividends).",
          "Compute the terminal cash flow using the first stable-growth year and discount it correctly.",
        ],
      },
      {
        id: "tp2",
        title: "Residual income valuation",
        priority: "high",
        examinerFocus:
          "Applying the residual-income model, understanding its links to book value and the clean-surplus relation, and when it is preferred.",
        typicalQuestionForms: [
          "Compute value using the single-stage residual income model.",
          "Why is RI useful for non-dividend-paying/negative-FCF firms?",
        ],
        mustKnow: [
          "Residual income = net income − equity charge = NI − (r × beginning book value).",
          "Value = book value + PV of future residual income; single-stage V0 = B0 + [(ROE − r)/(r − g)] × B0.",
          "RI recognises value earlier and relies on book value, useful when dividends/FCF are volatile or negative.",
        ],
        scoringActions: [
          "Subtract the equity charge (r × book value) from net income to get residual income.",
          "Use the single-stage RI formula with the ROE-spread over the cost of equity.",
        ],
      },
      {
        id: "tp3",
        title: "Market-based (multiples) valuation",
        priority: "high",
        examinerFocus:
          "Computing justified multiples from fundamentals, using comparables correctly, and handling normalised/trailing vs leading earnings.",
        typicalQuestionForms: [
          "Compute a justified P/E, P/B or EV/EBITDA from fundamentals.",
          "Value a firm by applying a peer multiple.",
        ],
        mustKnow: [
          "Justified leading P/E = payout/(r − g); justified P/B = (ROE − g)/(r − g).",
          "EV/EBITDA is preferred for cross-border and different-leverage comparisons.",
          "The method of comparables requires adjusting for differences in growth, risk and profitability.",
        ],
        scoringActions: [
          "Derive the justified multiple from the underlying fundamentals when asked.",
          "Adjust peer multiples for differences in growth and risk before applying.",
        ],
      },
      {
        id: "tp4",
        title: "Private company valuation",
        priority: "medium",
        examinerFocus:
          "Applying income, market, and asset-based approaches to private firms and the discounts for lack of control and marketability.",
        typicalQuestionForms: [
          "Which valuation approach fits the private-company context?",
          "Apply a DLOM/DLOC to a controlling/minority interest.",
        ],
        mustKnow: [
          "Approaches: income (FCF/capitalised cash flow), market (guideline public/transactions), and asset-based.",
          "Discount for lack of control (DLOC) applies to minority interests; discount for lack of marketability (DLOM) applies to illiquid stakes.",
          "Total discount is applied multiplicatively, not additively.",
        ],
        scoringActions: [
          "Select the approach fitting the firm's stage and data availability.",
          "Apply DLOC and DLOM multiplicatively to the marketable controlling value.",
        ],
      },
      {
        id: "tp5",
        title: "Industry and competitive analysis for valuation inputs",
        priority: "medium",
        examinerFocus:
          "Translating competitive position (five forces, moat) into growth, margin, and required-return assumptions.",
        typicalQuestionForms: [
          "How does competitive position affect sustainable growth or margins?",
          "Justify a terminal-growth assumption.",
        ],
        mustKnow: [
          "Sustainable growth g = retention × ROE; competitive advantage sustains ROE above the cost of equity.",
          "A durable moat supports a higher terminal growth and multiple; competition erodes excess returns to the cost of capital.",
          "Terminal growth should not exceed long-run nominal GDP growth.",
        ],
        scoringActions: [
          "Tie the growth/margin assumptions to the durability of competitive advantage.",
          "Cap terminal growth at a defensible economy-wide rate.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Equity is ~10–15% at L2 — a top-weight topic; net >70% by mastering DDM, FCF and residual income.",
      timeBudget: "~18 min per item set; multistage models reward disciplined terminal-value handling.",
      answerSequence: [
        "Select the model appropriate to the firm and data.",
        "Forecast cash flows, compute the terminal value, and discount at the matched rate.",
        "Cross-check with a multiple and sanity-check terminal growth.",
      ],
      qualityChecks: [
        "Discount rate matched to cash-flow type?",
        "Terminal value placed and discounted from the correct period; g ≤ GDP growth?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Free-cash-flow valuation",
        testPointIds: ["tp1"],
        explanation: [
          "Free cash flow models value a firm on the cash it generates rather than the dividends it chooses to pay, making them robust for non-dividend-payers. Free cash flow to the firm starts from net income and adds back non-cash charges and after-tax interest, then subtracts investment in fixed and working capital: FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv. Free cash flow to equity removes the debt-holders' claim: FCFE = FCFF − Int(1 − t) + net borrowing.",
          "The discount rate must match the cash-flow definition. FCFF is discounted at the WACC to give total firm (enterprise) value, from which net debt is subtracted to reach equity value; FCFE is discounted at the cost of equity to give equity value directly. Mixing the two — for instance discounting FCFE at WACC — is a serious and common error.",
          "Multistage models forecast an explicit high-growth period and then a terminal value capturing the stable-growth phase. The terminal value uses the first stable-year cash flow divided by (r − g) and is dated at the end of the explicit horizon, so it must be discounted back over that number of periods. The terminal value typically dominates the estimate, so the stable growth rate — which should not exceed long-run nominal GDP growth — deserves careful justification.",
        ],
        keyRules: [
          "FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv; FCFE = FCFF − Int(1 − t) + net borrowing.",
          "Discount FCFF at WACC (subtract debt); FCFE at cost of equity.",
          "Terminal value uses the first stable-year flow; g ≤ nominal GDP growth.",
        ],
        workedProblem: {
          scenario:
            "A firm's FCFE is expected to be $5.00 next year, growing 15% for years 2 and 3, then 4% forever. Year-1 FCFE is $5.00; the cost of equity is 10%. Estimate the equity value per share.",
          steps: [
            "Forecast FCFE: FCFE1 = 5.00; FCFE2 = 5.00×1.15 = 5.75; FCFE3 = 5.75×1.15 = 6.6125; FCFE4 = 6.6125×1.04 = 6.877.",
            "Terminal value at end of year 3: TV3 = FCFE4/(r − g) = 6.877/(0.10 − 0.04) = 6.877/0.06 = 114.62.",
            "Discount at 10%: PV1 = 5.00/1.10 = 4.545; PV2 = 5.75/1.21 = 4.752; PV3 = 6.6125/1.331 = 4.968; PV(TV3) = 114.62/1.331 = 86.12.",
            "Sum: value per share = 4.545 + 4.752 + 4.968 + 86.12 = 100.39.",
          ],
          conclusion:
            "Equity value is approximately $100.39 per share. The terminal value (~$86 discounted) accounts for the bulk of the estimate, underscoring the sensitivity to the 4% perpetual growth and 10% cost-of-equity assumptions.",
          markingNotes: [
            "FCFE4 uses stable 4% growth; TV placed at year 3.",
            "TV discounted three periods, not four.",
            "Value ≈ $100 (±rounding).",
          ],
        },
      },
      {
        id: "sn2",
        title: "Residual income valuation",
        testPointIds: ["tp2"],
        explanation: [
          "Residual income is economic profit after charging for the cost of equity capital: RI = net income − (cost of equity × beginning book value of equity). A firm creates value only when it earns more than the required return on its equity; positive residual income adds to value, negative RI destroys it.",
          "The residual income model expresses intrinsic value as current book value plus the present value of all future residual income: V0 = B0 + Σ RIt/(1 + r)^t. In single-stage form with constant growth, V0 = B0 + [(ROE − r)/(r − g)] × B0, showing that value above book depends on the spread between ROE and the cost of equity. The model relies on the clean-surplus relation (ending book value = beginning book value + net income − dividends).",
          "RI is especially useful when dividends and free cash flows are volatile, negative, or far in the future, because it recognises value earlier (much of the value sits in current book value) and depends less on an uncertain terminal value. Its weakness is reliance on accounting book values, which may require adjustment for off-balance-sheet items and accounting distortions.",
        ],
        keyRules: [
          "RI = NI − (r × beginning book value of equity).",
          "V0 = B0 + PV of future RI; single-stage uses the (ROE − r) spread.",
          "RI suits volatile/negative dividends and FCF; relies on clean surplus.",
        ],
      },
      {
        id: "sn3",
        title: "Multiples and justified valuation",
        testPointIds: ["tp3", "tp5"],
        explanation: [
          "Market-based valuation uses price or enterprise-value multiples, either derived from fundamentals (justified multiples) or from comparable companies. The justified leading P/E from the Gordon model is payout/(r − g), and the justified price-to-book is (ROE − g)/(r − g); these show explicitly how growth, profitability, risk, and payout drive the warranted multiple, which is powerful for defending a target price.",
          "The method of comparables applies a peer multiple to the subject firm's fundamental, but valid comparison requires that peers share similar growth, risk, and profitability; otherwise the multiple must be adjusted. Enterprise-value multiples such as EV/EBITDA are preferred for cross-border comparisons and firms with different capital structures, because they are neutral to leverage and (for EBITDA) to depreciation policy.",
          "Competitive analysis supplies the assumptions behind these multiples. Sustainable growth equals the retention ratio times ROE, and a firm can sustain an ROE above its cost of equity only while its competitive advantage (moat) endures; competition eventually erodes excess returns toward the cost of capital. This logic disciplines terminal-growth and margin assumptions — terminal growth should not exceed long-run nominal GDP growth, and above-normal margins should fade as advantages weaken.",
        ],
        keyRules: [
          "Justified leading P/E = payout/(r − g); justified P/B = (ROE − g)/(r − g).",
          "Prefer EV/EBITDA for different leverage/cross-border comparisons.",
          "Sustainable g = retention × ROE; excess returns fade as moats erode.",
        ],
      },
      {
        id: "sn4",
        title: "Private company valuation",
        testPointIds: ["tp4"],
        explanation: [
          "Private companies are valued with three approaches. The income approach discounts forecast free cash flows or capitalises a normalised cash flow (value = normalised FCF/(r − g)); it suits firms with predictable cash flows. The market approach applies multiples from guideline public companies or from precedent transactions. The asset-based approach values the net assets and is most relevant for asset-heavy or distressed firms.",
          "Normalisation of earnings is critical: private-company statements often mix owner compensation, personal expenses, and related-party transactions with operating results, so the analyst adjusts to an arm's-length, market basis before applying any approach. Required returns are typically higher than for comparable public firms because of greater risk and illiquidity.",
          "Two discounts frequently apply. A discount for lack of control (DLOC) reduces the value of a non-controlling (minority) interest that cannot direct the firm. A discount for lack of marketability (DLOM) reflects the difficulty of selling an illiquid private stake. When both apply, they are combined multiplicatively — total discount = 1 − (1 − DLOC)(1 − DLOM) — not simply added, which would overstate the reduction.",
        ],
        keyRules: [
          "Approaches: income, market (guideline/transactions), asset-based.",
          "Normalise earnings for owner comp and related-party items.",
          "Apply DLOC and DLOM multiplicatively, not additively.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L2 item-set question — residual income",
        question:
          "A firm has a book value of $30 per share, a sustainable ROE of 14%, a cost of equity of 10%, and a constant growth rate of 5%. Using the single-stage residual income model, estimate the intrinsic value per share.",
        answerPlan: [
          "Apply the single-stage RI formula.",
        ],
        modelAnswer:
          "V0 = B0 + [(ROE − r)/(r − g)] × B0 = 30 + [(0.14 − 0.10)/(0.10 − 0.05)] × 30 = 30 + [0.04/0.05] × 30 = 30 + 0.8 × 30 = 30 + 24 = $54. The premium over book value ($24) reflects the firm's ability to earn an ROE (14%) above its cost of equity (10%).",
        markingGuide: [
          "Uses the (ROE − r)/(r − g) spread correctly.",
          "Value = $54.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L2 item-set question — justified P/B",
        question:
          "A company has an ROE of 15%, a cost of equity of 11%, and expected growth of 6%. Compute its justified price-to-book ratio.",
        answerPlan: [
          "Apply justified P/B formula.",
        ],
        modelAnswer:
          "Justified P/B = (ROE − g)/(r − g) = (0.15 − 0.06)/(0.11 − 0.06) = 0.09/0.05 = 1.8. The firm should trade at 1.8 times book value because its ROE exceeds its cost of equity; if it traded below 1.8× book it would appear undervalued on this basis.",
        markingGuide: [
          "Uses (ROE − g)/(r − g).",
          "Justified P/B = 1.8.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L2 item-set question — private company discounts",
        question:
          "A minority interest in a private firm has a marketable, controlling-basis value of $1,000,000. A DLOC of 15% and a DLOM of 20% apply. Compute the value of the interest.",
        answerPlan: [
          "Apply discounts multiplicatively.",
        ],
        modelAnswer:
          "Apply the discounts multiplicatively: value = 1,000,000 × (1 − 0.15) × (1 − 0.20) = 1,000,000 × 0.85 × 0.80 = 1,000,000 × 0.68 = $680,000. The combined discount is 32% (not 35%), because sequential discounts compound rather than add.",
        markingGuide: [
          "Applies (1 − DLOC)(1 − DLOM) multiplicatively.",
          "Value = $680,000 (32% total discount).",
        ],
      },
    ],
  }),

  "cfa-l2-m7": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "The term structure and interest-rate models",
        priority: "high",
        examinerFocus:
          "Distinguishing term-structure theories and understanding equilibrium vs arbitrage-free models and the shape of forward curves.",
        typicalQuestionForms: [
          "Which term-structure theory explains the described curve?",
          "Difference between equilibrium and arbitrage-free models.",
        ],
        mustKnow: [
          "Theories: pure expectations, liquidity preference (term premium), and segmented markets/preferred habitat.",
          "Equilibrium models (e.g. CIR, Vasicek) start from economic assumptions; arbitrage-free models (e.g. Ho-Lee) fit the current curve exactly.",
          "The forward rate implied by the curve is a break-even, not a forecast, but includes any risk/term premium.",
        ],
        scoringActions: [
          "Map the curve behaviour to the theory that predicts it.",
          "Choose an arbitrage-free model when exact fit to observed prices is required.",
        ],
      },
      {
        id: "tp2",
        title: "Arbitrage-free valuation with binomial trees",
        priority: "critical",
        examinerFocus:
          "Valuing option-free and option-embedded bonds on a calibrated binomial interest-rate tree using backward induction.",
        typicalQuestionForms: [
          "Value a callable/putable bond on a given tree.",
          "Compute a value node via backward induction.",
        ],
        mustKnow: [
          "Backward induction: each node value = 0.5 × [PV of up-value + PV of down-value] + coupon, discounted at that node's rate.",
          "At each node, apply the call rule (min of computed value and call price) or put rule (max of value and put price).",
          "The tree is calibrated to be arbitrage-free (reproduces benchmark bond prices).",
        ],
        scoringActions: [
          "Discount each node's expected value at that node's one-period rate.",
          "Impose the call (min) or put (max) constraint at each relevant node.",
        ],
      },
      {
        id: "tp3",
        title: "Valuing bonds with embedded options and OAS",
        priority: "critical",
        examinerFocus:
          "Interpreting the option-adjusted spread and effective duration/convexity for bonds with embedded options as volatility changes.",
        typicalQuestionForms: [
          "Effect of higher interest-rate volatility on a callable/putable bond's value and OAS.",
          "Compute the value of the embedded option.",
        ],
        mustKnow: [
          "Value of callable = value of straight bond − value of call; value of putable = value of straight + value of put.",
          "Higher volatility raises option values: it lowers a callable bond's price and raises a putable bond's price.",
          "OAS removes the option cost from the spread, enabling like-for-like comparison; effective duration is used for optioned bonds.",
        ],
        scoringActions: [
          "Add/subtract the embedded-option value to move between straight and optioned prices.",
          "Reason about volatility's effect via the option value, then the bond price.",
        ],
      },
      {
        id: "tp4",
        title: "Credit analysis and structural/reduced-form models",
        priority: "high",
        examinerFocus:
          "Computing expected loss and credit valuation adjustment, and distinguishing structural from reduced-form default models.",
        typicalQuestionForms: [
          "Compute expected loss / CVA from PD, LGD and exposures.",
          "Distinguish structural vs reduced-form models.",
        ],
        mustKnow: [
          "Expected loss = PD × LGD × exposure; credit valuation adjustment (CVA) is the PV of expected credit losses.",
          "Structural models (Merton) treat equity as a call on firm assets; default occurs when assets fall below debt.",
          "Reduced-form models model default as a statistical (hazard-rate) process driven by observable factors.",
        ],
        scoringActions: [
          "Compute expected loss as PD × LGD × exposure, then discount for CVA.",
          "Match the model to whether default is driven by asset value (structural) or a hazard rate (reduced-form).",
        ],
      },
      {
        id: "tp5",
        title: "Securitised products (MBS/ABS/CMBS)",
        priority: "high",
        examinerFocus:
          "Analysing prepayment and structure risk in mortgage-backed and asset-backed securities, including tranching and credit enhancement.",
        typicalQuestionForms: [
          "Effect of falling rates on MBS (contraction/extension).",
          "How does a CMO tranche or credit enhancement reallocate risk?",
        ],
        mustKnow: [
          "Prepayment risk: falling rates accelerate prepayments (contraction risk); rising rates slow them (extension risk).",
          "CMOs redistribute prepayment risk across tranches (e.g. PAC tranches have stable cash flows protected by support tranches).",
          "Credit enhancement (subordination, overcollateralisation, reserve accounts) protects senior ABS tranches from losses.",
        ],
        scoringActions: [
          "Link rate direction to contraction vs extension risk.",
          "Identify how tranching/enhancement shifts prepayment or credit risk to junior tranches.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Fixed income is ~10–15% at L2 — a top-weight topic; net >70% by mastering trees, OAS and credit.",
      timeBudget: "~18 min per item set; binomial-tree valuation is the most time-intensive.",
      answerSequence: [
        "Identify the tool (tree valuation, OAS, credit model, structure).",
        "For trees, work backward node by node, applying option rules.",
        "Reason about volatility/rate changes through option value, then price.",
      ],
      qualityChecks: [
        "Discounted each node at its own one-period rate and applied the call/put constraint?",
        "Signed volatility's effect correctly for callable vs putable bonds?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Arbitrage-free valuation on a binomial tree",
        testPointIds: ["tp2", "tp1"],
        explanation: [
          "Bonds are valued arbitrage-free by discounting cash flows along a binomial interest-rate tree calibrated so it reproduces the prices of benchmark bonds. At each node the interest rate is known; the bond's value at a node equals the coupon plus the average of the discounted values from the two subsequent nodes, using the node's own one-period rate. Working from maturity back to today (backward induction) yields the value.",
          "The tree embeds the term structure and an assumed interest-rate volatility. Equilibrium models such as Vasicek and Cox-Ingersoll-Ross derive rates from economic assumptions about the short rate, whereas arbitrage-free models such as Ho-Lee are calibrated to fit the observed yield curve exactly, which is why they are used for relative-value and derivative pricing where consistency with market prices is essential.",
          "For an option-free bond the tree simply confirms the price obtainable from spot rates. Its real power appears with embedded options: at each node one imposes the exercise rule before rolling back, so the option's effect is captured node by node. This makes the binomial method the standard L2 tool for callable and putable bonds.",
        ],
        keyRules: [
          "Node value = coupon + average of discounted up/down values, at the node's rate.",
          "Work backward from maturity (backward induction).",
          "Arbitrage-free models fit the current curve; equilibrium models start from assumptions.",
        ],
        workedProblem: {
          scenario:
            "A 2-year annual-pay bond with a 5% coupon and $100 par is valued on a one-year binomial tree. Today's one-year rate is 4%. In one year the rate is 6% (up) or 3% (down), each with risk-neutral probability 0.5. Value the bond (option-free), then determine whether it would be called at $100 in one year if callable.",
          steps: [
            "At the up node (year 1, rate 6%): value = (100 + 5)/1.06 = 105/1.06 = 99.057 (plus the year-1 coupon handled at t=0 discounting).",
            "At the down node (rate 3%): value = (100 + 5)/1.03 = 105/1.03 = 101.942.",
            "Discount to today at 4%, adding the year-1 coupon: V0 = [0.5×(99.057 + 5) + 0.5×(101.942 + 5)]/1.04 = [0.5×104.057 + 0.5×106.942]/1.04 = 105.4995/1.04 = 101.44.",
            "Callable at 100: at the down node the computed value (101.942) exceeds the call price, so the issuer calls it, capping that node at 100; the up node (99.057 < 100) is not called.",
          ],
          conclusion:
            "The option-free bond is worth about $101.44. If callable at $100, the issuer would call at the low-rate (down) node where value exceeds the call price, so the callable bond is worth less than $101.44 — the difference is the value of the issuer's call option.",
          markingNotes: [
            "Correct discounting at each node's own rate.",
            "Backward induction with the year-1 coupon added.",
            "Call rule (cap at 100) applied at the in-the-money down node.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Embedded options, OAS and volatility",
        testPointIds: ["tp3"],
        explanation: [
          "The value of a bond with an embedded option decomposes cleanly: a callable bond equals an otherwise identical straight bond minus the value of the call (held by the issuer), and a putable bond equals a straight bond plus the value of the put (held by the investor). This is why callables trade cheaper (higher yield) and putables richer (lower yield) than comparable option-free bonds.",
          "Interest-rate volatility drives option values. Higher assumed volatility increases the value of both the call and the put. For a callable bond, a more valuable call subtracted from the straight-bond value lowers the callable's price; for a putable bond, a more valuable put added to the straight-bond value raises the putable's price. Understanding this asymmetry is a favourite exam point.",
          "The option-adjusted spread is the constant spread over the benchmark tree that makes the model value equal the market price after accounting for the embedded option; it strips out the option cost, enabling comparison of bonds with different option features on a like-for-like basis. Because cash flows depend on rates, effective duration and effective convexity (computed from small parallel curve shifts on the tree) replace analytical duration for optioned bonds; callables can display negative convexity near the call price.",
        ],
        keyRules: [
          "Callable = straight − call value; putable = straight + put value.",
          "Higher volatility lowers callable prices, raises putable prices.",
          "OAS removes option cost; use effective duration/convexity for optioned bonds.",
        ],
      },
      {
        id: "sn3",
        title: "Credit risk modelling",
        testPointIds: ["tp4"],
        explanation: [
          "Credit analysis quantifies expected loss as the product of the probability of default, the loss given default, and the exposure at default: EL = PD × LGD × exposure, where LGD = 1 − recovery rate. The credit valuation adjustment (CVA) is the present value of these expected losses over the instrument's life and represents the market value of the counterparty credit risk embedded in a position.",
          "Structural models, following Merton, treat a firm's equity as a call option on its assets with a strike equal to the face value of its debt: default occurs if asset value falls below the debt due at maturity. These models tie default probability to asset volatility and leverage and give economic intuition, but require unobservable asset values and assumptions about the capital structure.",
          "Reduced-form models instead treat default as a random event governed by a hazard (default-intensity) process estimated from observable data such as bond prices, spreads, and macroeconomic variables. They do not require knowledge of the firm's asset value and can capture time-varying default intensity, but they are less structural and rely on the stability of the estimated relationships. The exam tests the conceptual distinction and the expected-loss/CVA computation.",
        ],
        keyRules: [
          "Expected loss = PD × LGD × exposure; CVA = PV of expected losses.",
          "Structural (Merton): equity = call on assets; default when assets < debt.",
          "Reduced-form: default as a hazard-rate process from observable data.",
        ],
      },
      {
        id: "sn4",
        title: "Securitised products and structure",
        testPointIds: ["tp5"],
        explanation: [
          "Mortgage-backed securities pass through payments from a pool of mortgages, so investors are effectively short a prepayment option held by borrowers. When rates fall, borrowers refinance and prepay faster, returning principal sooner than expected — contraction risk, which forces reinvestment at lower rates. When rates rise, prepayments slow and the security's life extends — extension risk, locking investors into below-market yields.",
          "Collateralised mortgage obligations (CMOs) reallocate this prepayment risk across tranches. Planned amortisation class (PAC) tranches receive a stable, scheduled cash flow within a band of prepayment speeds, with support (companion) tranches absorbing the variability; this concentrates prepayment risk in the support tranches, which are compensated with higher yields.",
          "Asset-backed securities and commercial MBS rely on credit enhancement to protect senior tranches. Subordination creates a waterfall in which junior tranches absorb losses first; overcollateralisation posts more collateral than the bonds issued; and reserve accounts provide a cash cushion. These structures let senior tranches achieve high ratings while junior tranches bear concentrated credit risk in exchange for higher spreads. Analysts must trace how each structural feature shifts prepayment or credit risk between tranches.",
        ],
        keyRules: [
          "MBS holders are short prepayment risk: contraction (rates fall) vs extension (rates rise).",
          "PAC tranches gain stability; support tranches absorb prepayment variability.",
          "Subordination, overcollateralisation and reserves protect senior tranches.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp3"],
        style: "L2 item-set question — volatility and embedded options",
        question:
          "Interest-rate volatility is expected to increase. All else equal, describe the effect on the value of (a) a callable bond and (b) a putable bond, explaining the mechanism.",
        answerPlan: [
          "Volatility raises option values.",
          "Apply the value identities.",
        ],
        modelAnswer:
          "Higher volatility increases the value of both embedded options. (a) A callable bond equals a straight bond minus the call value; a more valuable call reduces the callable bond's price. (b) A putable bond equals a straight bond plus the put value; a more valuable put increases the putable bond's price. So rising volatility hurts callable holders and benefits putable holders.",
        markingGuide: [
          "States volatility raises both option values.",
          "Callable price falls, putable price rises, via the value identities.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L2 item-set question — expected loss",
        question:
          "A bond has a 3% annual probability of default, a recovery rate of 40%, and an exposure of $10,000,000. Compute the expected annual credit loss.",
        answerPlan: [
          "Compute LGD.",
          "Apply EL = PD × LGD × exposure.",
        ],
        modelAnswer:
          "Loss given default = 1 − recovery = 1 − 0.40 = 0.60. Expected loss = PD × LGD × exposure = 0.03 × 0.60 × 10,000,000 = $180,000. This is the expected credit loss for the year; the credit valuation adjustment would be the present value of such expected losses over the bond's life.",
        markingGuide: [
          "LGD = 60%.",
          "Expected loss = $180,000.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L2 item-set question — MBS prepayment",
        question:
          "Interest rates fall sharply. Explain the effect on a mortgage pass-through security's cash flows and the risk this creates for the investor.",
        answerPlan: [
          "Identify accelerated prepayment.",
          "Name contraction risk.",
        ],
        modelAnswer:
          "Falling rates give borrowers an incentive to refinance, accelerating prepayments so principal is returned to the investor sooner than expected. This is contraction risk: the security's life shortens and the investor must reinvest the returned principal at the new, lower prevailing rates, reducing the realised return. The prepayment option, effectively sold by the investor, becomes more valuable to borrowers as rates fall.",
        markingGuide: [
          "Identifies accelerated prepayments from falling rates.",
          "Names contraction and reinvestment risk.",
        ],
      },
    ],
  }),

  "cfa-l2-m8": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Pricing and valuing forwards and futures",
        priority: "critical",
        examinerFocus:
          "Applying the carry-arbitrage model to price and value forwards/futures on equities, bonds, currencies, and rates within a vignette.",
        typicalQuestionForms: [
          "Compute the forward price with carry costs/benefits.",
          "Value an existing forward before expiration.",
        ],
        mustKnow: [
          "Forward price F0 = S0(1 + r)^T adjusted for income (−) and costs (+); for equities, subtract the PV/FV of dividends.",
          "Value of a long forward during its life = (current forward price − contracted forward price) discounted to today.",
          "Currency forwards follow covered interest parity; FRAs price the forward interest rate.",
        ],
        scoringActions: [
          "Adjust the spot for carry (income vs cost) before compounding to the forward.",
          "Value a forward by comparing contracted and current forward prices, discounted.",
        ],
      },
      {
        id: "tp2",
        title: "Option valuation with the binomial model",
        priority: "critical",
        examinerFocus:
          "Building one- and two-period binomial trees and using risk-neutral probabilities to value options, including early exercise for American options.",
        typicalQuestionForms: [
          "Value a call/put on a one- or two-period binomial tree.",
          "Determine the risk-neutral probability and hedge ratio.",
        ],
        mustKnow: [
          "Risk-neutral probability πu = (1 + r − d)/(u − d); value = [πu·Vu + (1 − πu)·Vd]/(1 + r).",
          "Hedge ratio (delta) = (Vu − Vd)/(S·u − S·d).",
          "American options may be exercised early; check the exercise value at each node.",
        ],
        scoringActions: [
          "Compute the risk-neutral probability first, then discount expected payoffs.",
          "For American options, take the max of exercise and continuation value at each node.",
        ],
      },
      {
        id: "tp3",
        title: "The Black-Scholes-Merton model and the Greeks",
        priority: "high",
        examinerFocus:
          "Understanding the BSM assumptions, inputs, and how the Greeks (delta, gamma, vega, theta, rho) describe option sensitivities.",
        typicalQuestionForms: [
          "Effect of a change in an input (volatility, time) on option value.",
          "Interpret delta/gamma for hedging.",
        ],
        mustKnow: [
          "BSM assumes lognormal prices, constant volatility and rates, no arbitrage, and continuous trading; it prices European options.",
          "Delta ≈ N(d1) for a call (sensitivity to the underlying); gamma measures delta's rate of change; vega measures sensitivity to volatility.",
          "A delta-neutral hedge holds −delta units of the underlying per option; it must be rebalanced as delta changes (gamma).",
        ],
        scoringActions: [
          "Sign each Greek's effect for calls vs puts.",
          "Use delta for the initial hedge and gamma to anticipate rebalancing needs.",
        ],
      },
      {
        id: "tp4",
        title: "Interest-rate options, swaps and swaptions",
        priority: "high",
        examinerFocus:
          "Valuing interest-rate swaps as bonds/FRAs, pricing the swap fixed rate, and understanding caps/floors and swaptions.",
        typicalQuestionForms: [
          "Compute the swap fixed rate or the value of a swap during its life.",
          "How does a cap/floor or a payer/receiver swaption hedge rate risk?",
        ],
        mustKnow: [
          "The swap fixed rate is set so the PVs of the fixed and floating legs are equal at inception (value = 0).",
          "A swap's value during its life = value of the fixed-rate bond minus the value of the floating-rate bond (for a receiver).",
          "An interest-rate cap = a portfolio of caplets (calls on rates); a payer swaption is the right to enter a pay-fixed swap.",
        ],
        scoringActions: [
          "Price the swap rate from the discount factors so both legs' PVs match.",
          "Decompose caps/floors into caplets/floorlets and match swaptions to the desired rate exposure.",
        ],
      },
      {
        id: "tp5",
        title: "Option strategies and risk management",
        priority: "medium",
        examinerFocus:
          "Constructing and analysing option strategies (covered call, protective put, spreads, straddles) and their payoff/greeks profiles.",
        typicalQuestionForms: [
          "Compute the breakeven and max profit/loss of a strategy.",
          "Which strategy fits a described view on direction/volatility?",
        ],
        mustKnow: [
          "Covered call: long stock + short call — caps upside, earns premium; protective put: long stock + long put — insures downside.",
          "A straddle (long call + long put at the same strike) profits from large moves in either direction (a volatility bet).",
          "Bull call spread: long lower-strike call, short higher-strike call — limited cost, limited profit.",
        ],
        scoringActions: [
          "Compute breakevens from strikes net of premiums.",
          "Match the strategy to a directional or volatility view.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Derivatives is ~5–10% at L2; binomial and forward valuation are high-yield — net >65%.",
      timeBudget: "~18 min per item set; two-period trees and swap pricing are the most involved.",
      answerSequence: [
        "Identify the instrument and the pricing model.",
        "Compute the key input (risk-neutral probability, swap rate, forward price).",
        "Value by discounting expected payoffs or comparing legs.",
      ],
      qualityChecks: [
        "Risk-neutral probability computed before discounting payoffs?",
        "Forward valued by contracted-vs-current forward, discounted to today?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Pricing and valuing forward commitments",
        testPointIds: ["tp1", "tp4"],
        explanation: [
          "A forward's no-arbitrage price is the spot price carried to the delivery date: F0 = S0(1 + r)^T, adjusted for the costs and benefits of holding the underlying. For an equity, the present value of dividends is subtracted (income reduces the forward price); for a commodity, storage is added and any convenience yield subtracted. Currency forwards follow covered interest parity, and forward rate agreements price the forward interest rate implied by the yield curve.",
          "At inception the forward's value is zero. During its life the value to the long equals the difference between the current forward price (for the remaining tenor) and the originally contracted forward price, discounted to the present: Vt = [Ft − F0]/(1 + r)^(T − t). This 'contracted-versus-current' comparison is the standard L2 method for valuing an open forward.",
          "Interest-rate swaps extend the same logic. The fixed rate is set at initiation so the present values of the fixed and floating legs are equal, giving the swap zero value. Thereafter a swap is valued as the difference between an implied fixed-rate bond and a floating-rate bond (which resets to par at each reset), so a receiver swap gains value when rates fall. Caps and floors are portfolios of caplets and floorlets (options on rates), and swaptions grant the right to enter a swap.",
        ],
        keyRules: [
          "F0 = S0(1 + r)^T adjusted for income (−) and carrying costs (+).",
          "Open forward value = (current forward − contracted forward), discounted.",
          "Swap fixed rate set so both legs' PVs match at inception.",
        ],
      },
      {
        id: "sn2",
        title: "Binomial option valuation",
        testPointIds: ["tp2"],
        explanation: [
          "The binomial model values an option by replicating its payoff with the underlying and risk-free borrowing/lending, which leads to risk-neutral valuation. The risk-neutral (up) probability is πu = (1 + r − d)/(u − d), where u and d are the up and down price multipliers and r is the one-period risk-free rate. The option value is the expected payoff under these risk-neutral probabilities, discounted at the risk-free rate.",
          "For a one-period option, value = [πu·Vu + (1 − πu)·Vd]/(1 + r), where Vu and Vd are the option payoffs in the up and down states. For multi-period trees, apply this recursively via backward induction, valuing each node from the two nodes that follow it. The hedge ratio (delta) at a node, (Vu − Vd)/(Su − Sd), gives the number of shares needed to replicate the option and underlies the no-arbitrage argument.",
          "American options add the possibility of early exercise. At each node one compares the value of continuing to hold (the discounted risk-neutral expectation) with the intrinsic value of exercising immediately, and takes the greater. Early exercise can be optimal for American puts (deep in the money) and for American calls just before a large dividend, so every node must be checked.",
        ],
        keyRules: [
          "πu = (1 + r − d)/(u − d); value = discounted risk-neutral expected payoff.",
          "Delta = (Vu − Vd)/(Su − Sd).",
          "American options: take max(exercise, continuation) at each node.",
        ],
        workedProblem: {
          scenario:
            "A stock is $100. Over one period it rises to $120 (u = 1.20) or falls to $90 (d = 0.90). The one-period risk-free rate is 5%. Value a European call with a strike of $105.",
          steps: [
            "Payoffs: Vu = max(0, 120 − 105) = 15; Vd = max(0, 90 − 105) = 0.",
            "Risk-neutral probability: πu = (1 + r − d)/(u − d) = (1.05 − 0.90)/(1.20 − 0.90) = 0.15/0.30 = 0.50.",
            "Expected payoff = 0.50×15 + 0.50×0 = 7.50.",
            "Discount at 5%: call value = 7.50/1.05 = 7.14.",
          ],
          conclusion:
            "The call is worth about $7.14. The hedge ratio is (15 − 0)/(120 − 90) = 0.50, so a replicating portfolio holds 0.5 shares financed partly by borrowing — the basis for the risk-neutral valuation.",
          markingNotes: [
            "Correct up/down payoffs.",
            "Risk-neutral probability = 0.50.",
            "Call value ≈ $7.14; delta = 0.5.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Black-Scholes-Merton and the Greeks",
        testPointIds: ["tp3"],
        explanation: [
          "The Black-Scholes-Merton model prices European options in continuous time under specific assumptions: the underlying follows a lognormal price process (geometric Brownian motion) with constant volatility, the risk-free rate is constant, there are no transaction costs or arbitrage, and continuous trading is possible. Its inputs are the underlying price, strike, time to expiry, risk-free rate, and volatility (dividends enter as a yield adjustment). Volatility is the only unobservable input, which is why implied volatility is backed out from market prices.",
          "The Greeks measure an option's sensitivities. Delta (≈ N(d1) for a call) is the change in option value per unit change in the underlying and serves as the hedge ratio; it ranges from 0 to 1 for calls and −1 to 0 for puts. Gamma measures how fast delta changes and is largest near the money, indicating how often a delta hedge must be rebalanced. Vega measures sensitivity to volatility (always positive for long options), theta measures time decay (generally negative for long options), and rho measures sensitivity to interest rates.",
          "Delta hedging creates a position insensitive to small moves in the underlying by holding −delta units of the underlying per long option. Because delta itself changes as the underlying moves (gamma), the hedge is only instantaneously neutral and must be dynamically rebalanced; high gamma means more frequent, costlier rebalancing. Understanding the sign and behaviour of each Greek is the practical core of option risk management.",
        ],
        keyRules: [
          "BSM: lognormal prices, constant volatility/rates, no arbitrage, European options.",
          "Delta ≈ N(d1) (hedge ratio); gamma peaks near the money; vega > 0 for long options.",
          "Delta hedge holds −delta underlying per option; rebalance as delta changes.",
        ],
      },
      {
        id: "sn4",
        title: "Option strategies",
        testPointIds: ["tp5"],
        explanation: [
          "Option strategies tailor payoff profiles to specific views. A covered call (long the underlying plus a short call) generates premium income and caps upside above the strike, suiting a neutral-to-mildly-bullish view; the tradeoff is forgone gains if the underlying rallies past the strike. A protective put (long the underlying plus a long put) insures against downside below the strike at the cost of the premium, functioning like portfolio insurance.",
          "Spreads limit both cost and payoff. A bull call spread buys a lower-strike call and sells a higher-strike call, reducing the net premium in exchange for a capped maximum profit; it profits from a moderate rise. Bear spreads mirror this for a moderate decline. Breakevens are computed from the strikes adjusted for the net premium paid or received.",
          "Volatility strategies bet on the size of the move rather than its direction. A long straddle (long a call and a put at the same strike) profits from a large move either way and loses if the underlying stays near the strike; its breakevens are the strike plus and minus the total premium. Matching a described directional or volatility view to the correct strategy, and computing its breakeven and maximum profit/loss, is the standard exam task.",
        ],
        keyRules: [
          "Covered call caps upside for premium; protective put insures downside.",
          "Bull call spread: limited cost and limited profit; breakeven = lower strike + net premium.",
          "Long straddle profits from large moves; breakevens = strike ± total premium.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L2 item-set question — binomial put",
        question:
          "A stock is $50; over one period it moves to $60 (u = 1.2) or $40 (d = 0.8). The one-period risk-free rate is 4%. Value a European put with a strike of $52.",
        answerPlan: [
          "Compute payoffs and risk-neutral probability.",
          "Discount.",
        ],
        modelAnswer:
          "Payoffs: put up = max(0, 52 − 60) = 0; put down = max(0, 52 − 40) = 12. Risk-neutral probability πu = (1.04 − 0.8)/(1.2 − 0.8) = 0.24/0.40 = 0.60. Expected payoff = 0.60×0 + 0.40×12 = 4.80. Put value = 4.80/1.04 = $4.62.",
        markingGuide: [
          "πu = 0.60 and correct payoffs.",
          "Put value ≈ $4.62.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L2 item-set question — Greeks",
        question:
          "A trader is long call options and wants to be delta-neutral. The call delta is 0.6 and the trader holds 1,000 calls (each on one share). What underlying position achieves delta neutrality, and why must it be adjusted over time?",
        answerPlan: [
          "Compute the hedge.",
          "Explain gamma-driven rebalancing.",
        ],
        modelAnswer:
          "Total delta = 1,000 × 0.6 = 600, so the trader must short 600 shares to offset it and be delta-neutral. As the underlying price moves, the call's delta changes (this rate of change is gamma), so the position drifts away from neutrality and the share hedge must be dynamically rebalanced. The larger the gamma (greatest near the money), the more frequent and costly the rebalancing.",
        markingGuide: [
          "Short 600 shares for delta neutrality.",
          "Explains gamma requires dynamic rebalancing.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L2 item-set question — option strategy",
        question:
          "An investor expects a large price move in a stock but is unsure of the direction, ahead of an earnings announcement. Which option strategy fits, and what are its breakevens if a $50-strike call costs $3 and a $50-strike put costs $2?",
        answerPlan: [
          "Select the volatility strategy.",
          "Compute breakevens.",
        ],
        modelAnswer:
          "A long straddle fits: buy the $50 call and the $50 put, total premium $5. It profits from a large move in either direction and loses if the stock stays near $50. Breakevens are the strike plus and minus the total premium: upper breakeven = 50 + 5 = $55; lower breakeven = 50 − 5 = $45. Beyond these levels the strategy is profitable; between them it loses up to the $5 premium.",
        markingGuide: [
          "Selects a long straddle for a large-move/volatility view.",
          "Breakevens at $55 and $45.",
        ],
      },
    ],
  }),

  "cfa-l2-m9": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Private real estate valuation",
        priority: "high",
        examinerFocus:
          "Applying the income (direct capitalisation and DCF), cost, and sales-comparison approaches, and computing NOI and cap rates.",
        typicalQuestionForms: [
          "Value a property via direct capitalisation or DCF.",
          "Compute NOI and the going-in cap rate.",
        ],
        mustKnow: [
          "NOI = rental income − vacancy/collection loss − operating expenses (excludes financing and depreciation).",
          "Direct capitalisation value = NOI/cap rate; cap rate = discount rate − growth.",
          "The DCF approach discounts NOI plus a terminal (reversion) value at the required return.",
        ],
        scoringActions: [
          "Exclude financing costs and non-cash depreciation from NOI.",
          "Relate the cap rate to the required return minus growth when converting between them.",
        ],
      },
      {
        id: "tp2",
        title: "Publicly traded real estate (REITs)",
        priority: "high",
        examinerFocus:
          "Valuing REITs using net asset value, funds from operations (FFO/AFFO) multiples, and dividend discount approaches.",
        typicalQuestionForms: [
          "Compute FFO/AFFO or NAV per share.",
          "Value a REIT using an FFO multiple.",
        ],
        mustKnow: [
          "FFO = net income + depreciation + deferred taxes − gains on property sales; AFFO deducts recurring maintenance capex.",
          "NAV per share = (market value of assets − liabilities)/shares; REITs often trade at premiums/discounts to NAV.",
          "REITs must distribute most taxable income, making them income-oriented with limited retained growth.",
        ],
        scoringActions: [
          "Add back depreciation (and adjust for property gains) to reach FFO; deduct maintenance capex for AFFO.",
          "Compare price to NAV and to peer FFO multiples.",
        ],
      },
      {
        id: "tp3",
        title: "Private equity valuation and performance",
        priority: "critical",
        examinerFocus:
          "Valuing buyout and venture investments, and computing PE performance measures (IRR, multiples, and fee-adjusted returns).",
        typicalQuestionForms: [
          "Compute the exit equity value and return in an LBO.",
          "Compute committed/paid-in capital metrics (DPI, RVPI, TVPI).",
        ],
        mustKnow: [
          "LBO value creation: debt paydown, EBITDA growth, and multiple expansion drive equity returns.",
          "TVPI = (distributed + residual value)/paid-in; DPI = distributed/paid-in; RVPI = residual value/paid-in.",
          "The J-curve depresses early IRRs; net-of-fee returns reflect the 2-and-20 plus carried-interest waterfall.",
        ],
        scoringActions: [
          "Build the exit equity value as exit EV minus remaining net debt.",
          "Compute TVPI as the sum of DPI and RVPI.",
        ],
      },
      {
        id: "tp4",
        title: "Commodities and commodity derivatives",
        priority: "medium",
        examinerFocus:
          "Decomposing commodity futures returns and interpreting the term structure (backwardation vs contango) and hedging pressure.",
        typicalQuestionForms: [
          "Decompose a commodity futures total return.",
          "Explain the roll return under backwardation/contango.",
        ],
        mustKnow: [
          "Total return = spot return + roll return + collateral return.",
          "Backwardation (futures below spot) → positive roll; contango (futures above spot) → negative roll.",
          "Theories: insurance/hedging pressure, theory of storage (convenience yield), and expectations.",
        ],
        scoringActions: [
          "Sign the roll return by the curve shape.",
          "Attribute the curve shape to convenience yield/storage or hedging pressure.",
        ],
      },
      {
        id: "tp5",
        title: "Hedge funds and fund-of-funds analysis",
        priority: "high",
        examinerFocus:
          "Classifying hedge-fund strategies, computing net-of-fee returns with high-water marks/hurdles, and assessing risk with non-normal measures.",
        typicalQuestionForms: [
          "Compute net-of-fee return with a high-water mark and hurdle.",
          "Identify the hedge-fund strategy from its return drivers.",
        ],
        mustKnow: [
          "Strategies: equity long/short, event-driven (merger arb), relative value, global macro, and managed futures.",
          "Incentive fees apply only above the high-water mark and any hurdle; fund-of-funds add a second fee layer.",
          "Non-normal returns require downside measures (VaR, max drawdown); smoothing understates risk.",
        ],
        scoringActions: [
          "Apply the high-water mark and hurdle before computing incentive fees.",
          "Match the strategy to its dominant return/risk driver.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Alternatives is ~5–10% at L2; real estate, PE and hedge-fund fees are high-yield — net >65%.",
      timeBudget: "~18 min per item set; property DCF and PE waterfall items are the most involved.",
      answerSequence: [
        "Identify the alternative asset and valuation approach.",
        "Compute the key metric (NOI/cap rate, FFO, TVPI, roll return, net fees).",
        "Interpret relative to benchmarks and note data biases.",
      ],
      qualityChecks: [
        "Excluded financing/depreciation from NOI; added them back correctly for FFO?",
        "Applied high-water mark and hurdle before incentive fees?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Real estate valuation: private and public",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "Private real estate is valued with three approaches. The income approach is most common: direct capitalisation converts a stabilised net operating income into value using a market cap rate (value = NOI/cap rate), while the discounted-cash-flow method projects NOI over a holding period plus a terminal reversion value and discounts at the required return. Net operating income is rental income less vacancy and collection losses and operating expenses; crucially, it excludes financing costs and non-cash depreciation. The cap rate equals the required return minus the growth rate, so a lower cap rate implies higher growth expectations and a higher value.",
          "The cost approach values land plus the depreciated replacement cost of improvements and is most useful for new or special-purpose properties; the sales-comparison approach uses recent transactions of similar properties. Each has limitations — the cost approach can misprice older assets, and comparables are scarce for unique properties — so analysts triangulate.",
          "Publicly traded real estate, chiefly REITs, is valued differently because accounting depreciation understates cash flow. Funds from operations adds depreciation back to net income and removes gains on property sales; adjusted FFO further subtracts recurring maintenance capex to approximate distributable cash. REITs are also valued on net asset value per share (market value of properties less liabilities, per share), and they frequently trade at premiums or discounts to NAV. Because REITs must distribute most taxable income, they are income-oriented with limited retained growth.",
        ],
        keyRules: [
          "NOI excludes financing and depreciation; value = NOI/cap rate.",
          "Cap rate = required return − growth.",
          "FFO adds back depreciation and removes property gains; AFFO deducts maintenance capex.",
        ],
        workedProblem: {
          scenario:
            "A property generates gross potential rent of $2,000,000, with a 5% vacancy allowance and operating expenses of $700,000. (a) Compute NOI. (b) If the market cap rate is 6.5%, value it by direct capitalisation. (c) A REIT owning it reports net income of $500,000, depreciation of $600,000, and a $100,000 gain on an unrelated property sale — compute FFO.",
          steps: [
            "(a) Effective gross income = 2,000,000 × (1 − 0.05) = 1,900,000; NOI = 1,900,000 − 700,000 = $1,200,000.",
            "(b) Value = NOI/cap rate = 1,200,000/0.065 = $18,461,538.",
            "(c) FFO = net income + depreciation − gains on sales = 500,000 + 600,000 − 100,000 = $1,000,000.",
            "Check: NOI correctly excludes financing/depreciation; FFO adds back depreciation and strips the non-recurring property gain.",
          ],
          conclusion:
            "NOI is $1.2m, giving a direct-capitalisation value of about $18.46m at a 6.5% cap rate; the REIT's FFO is $1.0m, a better cash-flow proxy than net income because it neutralises depreciation and the one-off sale gain.",
          markingNotes: [
            "NOI excludes financing and depreciation; = $1.2m.",
            "Value = NOI/cap rate ≈ $18.46m.",
            "FFO adds depreciation, removes property gain; = $1.0m.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Private equity valuation and performance",
        testPointIds: ["tp3"],
        explanation: [
          "Buyout (LBO) value creation comes from three levers: paying down acquisition debt with the target's cash flow (increasing the equity share of a fixed enterprise value), growing EBITDA through operational improvement, and multiple expansion (exiting at a higher EV/EBITDA than the entry multiple). The exit equity value equals the exit enterprise value (exit EBITDA × exit multiple) minus the remaining net debt; the equity return compares this to the sponsor's initial equity investment.",
          "Venture capital valuation is more uncertain, relying on scenario analysis and expected exit values discounted at high required returns that reflect failure risk; pre-money and post-money valuations track the effect of new financing rounds on ownership.",
          "Fund performance uses cash-flow-based multiples. Paid-in capital is the capital actually drawn; distributed-to-paid-in (DPI) measures realised returns, residual-value-to-paid-in (RVPI) measures unrealised value, and their sum, total-value-to-paid-in (TVPI), is the overall multiple. Reported IRRs are depressed early by the J-curve (fees and write-downs precede gains). Net-of-fee returns reflect the management fee, the carried interest (typically 20% above a hurdle), and the distribution waterfall, which determines the timing of the GP's carry relative to LP capital returns.",
        ],
        keyRules: [
          "LBO returns: debt paydown + EBITDA growth + multiple expansion.",
          "Exit equity value = exit EV − remaining net debt.",
          "TVPI = DPI + RVPI; J-curve depresses early IRRs.",
        ],
      },
      {
        id: "sn3",
        title: "Commodities and their return sources",
        testPointIds: ["tp4"],
        explanation: [
          "Because most commodity exposure is taken through futures rather than the physical asset, the total return has three components: the spot return (change in the underlying commodity price), the roll return (from replacing expiring contracts with later-dated ones), and the collateral return (interest earned on the cash backing the position). Recognising and decomposing these is a common exam task.",
          "The futures term structure drives the roll return. In backwardation, futures prices are below the spot price, so rolling into cheaper deferred contracts produces a positive roll yield; in contango, futures are above spot, so rolling into more expensive contracts produces a negative roll yield (roll drag). The curve shape thus materially affects the return of a long futures position beyond the spot move.",
          "Several theories explain the curve. The theory of storage links backwardation to a high convenience yield (the benefit of holding scarce physical inventory). The insurance/hedging-pressure theory (normal backwardation) holds that producers hedge by selling futures, depressing futures prices below expected spot and rewarding long speculators. The expectations view treats futures as unbiased forecasts of future spot. These frameworks are tested conceptually and by their return implications.",
        ],
        keyRules: [
          "Total return = spot + roll + collateral.",
          "Backwardation → positive roll; contango → negative roll.",
          "Theories: storage/convenience yield, hedging pressure, expectations.",
        ],
      },
      {
        id: "sn4",
        title: "Hedge funds and fund-of-funds",
        testPointIds: ["tp5"],
        explanation: [
          "Hedge funds pursue diverse strategies with different return and risk drivers: equity long/short takes offsetting long and short positions to isolate stock selection; event-driven strategies (notably merger arbitrage) profit from corporate events; relative-value strategies exploit pricing discrepancies between related securities; global macro takes directional views on macroeconomic trends; and managed futures follow trends across futures markets. Identifying the strategy from its described exposures is a recurring item.",
          "Fee structures materially affect net returns. The typical arrangement adds an incentive fee (often 20%) to a management fee (often 2%), with the incentive fee payable only on gains above a high-water mark (so past losses must be recouped first) and, where present, above a hurdle rate. Fund-of-funds impose a second layer of fees on top of the underlying managers', compounding the drag; the benefit is diversification and manager selection.",
          "Hedge-fund returns are frequently non-normal, exhibiting negative skew and fat tails, so standard deviation understates risk; downside measures such as value at risk, the Sortino ratio, and maximum drawdown are more informative. Return smoothing from illiquid or appraisal-priced holdings artificially lowers reported volatility and correlation, flattering risk statistics, so analysts should unsmooth returns before comparison and conduct operational due diligence on valuation and controls.",
        ],
        keyRules: [
          "Know long/short, event-driven, relative value, macro, managed futures.",
          "Incentive fee only above the high-water mark and hurdle; funds-of-funds add a fee layer.",
          "Use downside measures; adjust for return smoothing.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L2 item-set question — property valuation",
        question:
          "A property has net operating income of $900,000. Analysts estimate a required return of 9% and stable growth of 2%. Estimate the value using direct capitalisation.",
        answerPlan: [
          "Derive cap rate.",
          "Apply value = NOI/cap rate.",
        ],
        modelAnswer:
          "The cap rate equals the required return minus growth: 9% − 2% = 7%. Value = NOI/cap rate = 900,000/0.07 = $12,857,143. The 2% growth lowers the cap rate below the required return, raising the value relative to a no-growth assumption.",
        markingGuide: [
          "Cap rate = 7% (required return − growth).",
          "Value ≈ $12.86m.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L2 item-set question — PE performance",
        question:
          "A private equity fund has paid-in capital of $100m, cumulative distributions of $60m, and a residual (NAV) value of $80m. Compute DPI, RVPI, and TVPI.",
        answerPlan: [
          "Apply the three multiples.",
        ],
        modelAnswer:
          "DPI = distributed/paid-in = 60/100 = 0.60×. RVPI = residual value/paid-in = 80/100 = 0.80×. TVPI = DPI + RVPI = 0.60 + 0.80 = 1.40×. The fund has returned 0.6× in cash and holds 0.8× in unrealised value, for a total value of 1.4× the capital paid in.",
        markingGuide: [
          "DPI = 0.60×, RVPI = 0.80×.",
          "TVPI = 1.40× (sum of DPI and RVPI).",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L2 item-set question — hedge fund fees",
        question:
          "A fund charges 2% management (on beginning assets) and 20% incentive above a high-water mark with no hurdle. Beginning assets are $100m; the fund fell 10% last year (so the high-water mark is $100m) and rises 20% this year. Compute this year's incentive fee.",
        answerPlan: [
          "Determine the high-water mark.",
          "Compute incentive only above it.",
        ],
        modelAnswer:
          "After last year's 10% loss, assets were $90m; the high-water mark remains the prior peak of $100m. This year's 20% gain brings assets to 90 × 1.20 = $108m gross. The incentive fee applies only to the amount above the $100m high-water mark: 108 − 100 = $8m of new profit, so the incentive fee = 20% × 8 = $1.6m. Gains merely recovering the loss up to $100m earn no incentive fee.",
        markingGuide: [
          "Identifies the $100m high-water mark.",
          "Incentive fee on the $8m above the mark = $1.6m.",
        ],
      },
    ],
  }),

  "cfa-l2-m10": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Multifactor models (APT and factor models)",
        priority: "critical",
        examinerFocus:
          "Applying arbitrage pricing theory and macroeconomic/fundamental factor models to estimate expected return and factor exposures.",
        typicalQuestionForms: [
          "Compute expected return from factor sensitivities and premia.",
          "Identify arbitrage from mispriced factor exposures.",
        ],
        mustKnow: [
          "APT: E[R] = Rf + Σ βk·λk, where βk is the sensitivity to factor k and λk is the factor risk premium.",
          "Macroeconomic factor models use surprises in factors (e.g. inflation, GDP); fundamental models use firm attributes (size, value).",
          "The active return = Σ (active factor exposure × factor return) + security selection.",
        ],
        scoringActions: [
          "Multiply each factor sensitivity by its premium and sum, adding the risk-free rate.",
          "Decompose active return into factor tilts and selection.",
        ],
      },
      {
        id: "tp2",
        title: "Measuring and managing market risk (VaR)",
        priority: "critical",
        examinerFocus:
          "Computing and interpreting value at risk by the parametric, historical, and Monte Carlo methods, and its limitations.",
        typicalQuestionForms: [
          "Compute parametric VaR from mean, volatility, and a z-value.",
          "Which VaR method suits the described situation, and what are its limits?",
        ],
        mustKnow: [
          "Parametric VaR = [expected return − z·σ] × value (z ≈ 1.65 for 95%, 2.33 for 99%).",
          "Historical VaR uses the empirical distribution; Monte Carlo simulates from assumed distributions.",
          "VaR ignores the size of losses beyond the threshold; conditional VaR (expected shortfall) addresses this.",
        ],
        scoringActions: [
          "Use the correct z-value for the confidence level and scale for the horizon (σ√t).",
          "Supplement VaR with expected shortfall/stress tests for tail risk.",
        ],
      },
      {
        id: "tp3",
        title: "Economics of active portfolio management",
        priority: "high",
        examinerFocus:
          "Applying the fundamental law of active management (information ratio, information coefficient, breadth) and the Sharpe/active-return tradeoffs.",
        typicalQuestionForms: [
          "Compute the information ratio from IC and breadth.",
          "How does breadth or skill affect expected active performance?",
        ],
        mustKnow: [
          "Fundamental law: IR ≈ IC × √breadth (BR); active return = IR × active risk.",
          "The information coefficient measures forecasting skill; breadth is the number of independent decisions.",
          "The transfer coefficient scales the achievable IR down for constraints.",
        ],
        scoringActions: [
          "Multiply the information coefficient by the square root of breadth for the IR.",
          "Adjust the achievable IR downward by the transfer coefficient when constraints bind.",
        ],
      },
      {
        id: "tp4",
        title: "The portfolio management process and asset allocation",
        priority: "high",
        examinerFocus:
          "Constructing efficient portfolios, applying mean-variance optimisation inputs, and understanding the effect of constraints and estimation error.",
        typicalQuestionForms: [
          "Which portfolio is optimal given the inputs?",
          "Effect of estimation error / adding a constraint on the frontier.",
        ],
        mustKnow: [
          "Mean-variance optimisation requires expected returns, variances, and covariances; it is highly sensitive to input errors.",
          "The optimal risky portfolio maximises the Sharpe ratio; adding constraints shifts the frontier inward.",
          "Resampling and Black-Litterman methods mitigate estimation-error sensitivity.",
        ],
        scoringActions: [
          "Select the max-Sharpe portfolio as the optimal risky portfolio.",
          "Recognise that constraints and input error reduce achievable efficiency.",
        ],
      },
      {
        id: "tp5",
        title: "Trading, execution and backtesting",
        priority: "medium",
        examinerFocus:
          "Understanding execution costs (implementation shortfall), and the pitfalls of backtesting (look-ahead and survivorship bias).",
        typicalQuestionForms: [
          "Compute or interpret implementation shortfall.",
          "Identify a backtesting bias.",
        ],
        mustKnow: [
          "Implementation shortfall = paper (decision-price) return − actual return, capturing delay, execution, and opportunity costs.",
          "Backtesting biases: survivorship (dead firms excluded), look-ahead (using data not yet available), and data snooping.",
          "Robust research uses out-of-sample and rolling-window testing.",
        ],
        scoringActions: [
          "Decompose implementation shortfall into its cost components.",
          "Flag survivorship and look-ahead bias when evaluating a backtest.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Portfolio management is ~5–10% at L2; factor models and VaR are high-yield — net >65%.",
      timeBudget: "~18 min per item set; factor-model and VaR calculations reward correct z-values and premia.",
      answerSequence: [
        "Identify the framework (APT, VaR, fundamental law, MVO).",
        "Apply the formula with correct inputs (z-value, factor premia, IC/breadth).",
        "Interpret the result and note the method's limitations.",
      ],
      qualityChecks: [
        "Correct z-value and horizon scaling for VaR?",
        "IR computed as IC × √breadth, adjusted by transfer coefficient?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Multifactor models and APT",
        testPointIds: ["tp1"],
        explanation: [
          "Arbitrage pricing theory generalises the single-factor CAPM to multiple systematic factors: the expected return on an asset is the risk-free rate plus the sum over factors of the asset's sensitivity to each factor multiplied by that factor's risk premium, E[R] = Rf + Σ βk·λk. APT rests on no-arbitrage rather than the mean-variance assumptions of CAPM and does not require identifying the market portfolio.",
          "Two families of factor models are used in practice. Macroeconomic factor models regress returns on surprises in economic variables such as inflation, industrial production, and credit spreads; the factors are the unexpected components, and the betas are estimated sensitivities. Fundamental factor models use firm characteristics — size, value (book-to-market), momentum, profitability — as the factors, with standardised attributes serving as the exposures.",
          "Factor models decompose active return and active risk. A manager's active return equals the sum of active factor exposures times factor returns, plus a security-selection component; active risk (tracking error) similarly splits into factor and idiosyncratic contributions. This decomposition lets analysts attribute performance to intended factor tilts versus stock selection, which is central to both portfolio construction and performance evaluation.",
        ],
        keyRules: [
          "APT: E[R] = Rf + Σ βk·λk (no-arbitrage, multiple factors).",
          "Macro models use factor surprises; fundamental models use firm attributes.",
          "Active return = factor tilts + security selection.",
        ],
        workedProblem: {
          scenario:
            "A two-factor model has factor risk premia of 4% (GDP factor) and 2% (inflation factor); the risk-free rate is 3%. A stock has a GDP-factor sensitivity of 1.5 and an inflation-factor sensitivity of −0.8. Compute its expected return and comment on the inflation exposure.",
          steps: [
            "Apply APT: E[R] = Rf + β_GDP·λ_GDP + β_inflation·λ_inflation.",
            "GDP contribution = 1.5 × 4% = 6.0%.",
            "Inflation contribution = −0.8 × 2% = −1.6%.",
            "E[R] = 3% + 6.0% − 1.6% = 7.4%.",
          ],
          conclusion:
            "The stock's expected return is 7.4%. Its negative inflation sensitivity subtracts 1.6% because it moves inversely with the (positively priced) inflation factor — it provides some inflation hedging, which lowers its required return relative to a stock with positive inflation exposure.",
          markingNotes: [
            "Applies APT with the risk-free rate and both factor terms.",
            "Correctly signs the negative inflation contribution.",
            "Expected return = 7.4%.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Value at risk and market-risk measurement",
        testPointIds: ["tp2"],
        explanation: [
          "Value at risk estimates the minimum loss expected over a horizon at a given confidence level — for example, a one-day 95% VaR of $1m means there is a 5% chance of losing at least $1m in a day. The parametric (variance-covariance) method assumes returns are normally distributed and computes VaR from the mean and standard deviation: VaR = [expected return − z·σ] × portfolio value, using z ≈ 1.65 for 95% and 2.33 for 99%. Volatility scales with the square root of time (σ√t) to change the horizon.",
          "The historical simulation method uses the actual empirical distribution of past returns, avoiding the normality assumption but assuming the past represents the future; the Monte Carlo method simulates many outcomes from specified distributions, handling complex, non-linear portfolios at the cost of computational effort and dependence on the assumed inputs.",
          "VaR's central limitation is that it says nothing about the magnitude of losses beyond the threshold — two portfolios with the same VaR can have very different tail losses. Conditional VaR (expected shortfall) reports the average loss given that the VaR threshold is breached, giving a fuller picture of tail risk. Because all VaR methods can understate extreme events, they should be complemented with stress testing and scenario analysis.",
        ],
        keyRules: [
          "Parametric VaR = [E(R) − z·σ] × value; z ≈ 1.65 (95%), 2.33 (99%).",
          "Historical uses empirical data; Monte Carlo simulates from assumptions.",
          "VaR ignores tail magnitude; use conditional VaR and stress tests.",
        ],
      },
      {
        id: "sn3",
        title: "The fundamental law of active management",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "The fundamental law of active management links a manager's skill and the number of bets to expected active performance: the information ratio is approximately the information coefficient times the square root of breadth, IR ≈ IC × √BR. The information coefficient measures forecasting skill (the correlation between forecasts and outcomes), and breadth is the number of independent active decisions per period. Expected active return equals the information ratio times the active risk taken.",
          "The insight is that both skill and breadth matter: a manager with modest skill can achieve a strong information ratio by making many independent bets, while a highly skilled manager with few opportunities may underperform one with lower skill but far greater breadth. This motivates strategies (e.g. broad quantitative approaches) that harvest many small, independent edges.",
          "Real portfolios face constraints — position limits, turnover budgets, long-only mandates — that prevent full expression of the manager's forecasts. The transfer coefficient captures this slippage, scaling the achievable information ratio down from its theoretical maximum: the realised IR ≈ TC × IC × √BR. Mean-variance optimisation translates forecasts into weights but is notoriously sensitive to estimation error in expected returns; techniques such as resampling and the Black-Litterman model temper this sensitivity by blending market equilibrium with the manager's views.",
        ],
        keyRules: [
          "IR ≈ IC × √breadth; active return = IR × active risk.",
          "Both skill (IC) and breadth (BR) drive performance.",
          "Transfer coefficient scales down achievable IR under constraints.",
        ],
      },
      {
        id: "sn4",
        title: "Execution costs and backtesting pitfalls",
        testPointIds: ["tp5"],
        explanation: [
          "Turning a strategy into realised returns incurs execution costs. Implementation shortfall measures the difference between the return on a hypothetical 'paper' portfolio executed instantly at the decision price and the actual portfolio's return; it decomposes into explicit costs (commissions, fees), delay (slippage between the decision and the order), execution/market-impact cost, and opportunity cost (unfilled orders). Minimising shortfall requires balancing market impact against the risk of price moves while waiting.",
          "Backtesting a strategy on historical data is essential but riddled with biases that inflate apparent performance. Survivorship bias arises when failed or delisted firms are excluded from the sample, overstating returns. Look-ahead bias uses information that would not actually have been available at the decision time (e.g. restated financials). Data snooping (or data mining) finds spurious patterns by testing many strategies until one appears profitable by chance.",
          "Robust research guards against these pitfalls: using point-in-time databases to avoid look-ahead and survivorship bias, reserving out-of-sample data to validate findings, employing rolling-window and cross-validation testing, and being skeptical of results that lack an economic rationale. The exam tests both the computation/decomposition of implementation shortfall and the identification of specific backtesting biases.",
        ],
        keyRules: [
          "Implementation shortfall = paper return − actual return (delay + execution + opportunity + explicit costs).",
          "Backtest biases: survivorship, look-ahead, data snooping.",
          "Use point-in-time data and out-of-sample testing.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L2 item-set question — parametric VaR",
        question:
          "A $50,000,000 portfolio has an expected annual return of 8% and annual volatility of 15%. Compute the annual 95% value at risk (z = 1.65) in dollar terms.",
        answerPlan: [
          "Apply the parametric VaR formula.",
        ],
        modelAnswer:
          "VaR = [expected return − z·σ] × value = [0.08 − 1.65×0.15] × 50,000,000 = [0.08 − 0.2475] × 50,000,000 = −0.1675 × 50,000,000 = −$8,375,000. So the 95% annual VaR is about $8.375m: there is a 5% chance of losing at least this amount over the year.",
        markingGuide: [
          "Uses z = 1.65 and the mean-minus-z·σ form.",
          "VaR ≈ $8.375m.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L2 item-set question — fundamental law",
        question:
          "A manager has an information coefficient of 0.05 and makes 100 independent active bets per year. Estimate the information ratio, and state the expected active return if active risk is 4%.",
        answerPlan: [
          "Apply IR ≈ IC × √BR.",
          "Active return = IR × active risk.",
        ],
        modelAnswer:
          "IR ≈ IC × √breadth = 0.05 × √100 = 0.05 × 10 = 0.50. Expected active return = IR × active risk = 0.50 × 4% = 2.0%. The modest skill (IC 0.05) still yields a respectable 0.5 information ratio because breadth (100 independent bets) is high.",
        markingGuide: [
          "IR = 0.50 from IC × √breadth.",
          "Active return = 2.0%.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp5"],
        style: "L2 item-set question — backtesting bias",
        question:
          "An analyst backtests a value strategy using a current database of firms that excludes companies that went bankrupt during the sample period. What bias does this introduce, and how does it affect the results?",
        answerPlan: [
          "Identify the bias.",
          "State the effect.",
        ],
        modelAnswer:
          "Excluding bankrupt firms introduces survivorship bias. Because the failed companies — which would have generated poor or negative returns — are dropped, the backtest overstates the strategy's historical returns and understates its risk. The remedy is to use a point-in-time database that includes all firms that existed at each date, including those later delisted or bankrupt.",
        markingGuide: [
          "Identifies survivorship bias.",
          "States it overstates returns / understates risk; suggests point-in-time data.",
        ],
      },
    ],
  }),

  // ===================================================================
  // LEVEL III — portfolio construction and constructed response (essay)
  // ===================================================================
  "cfa-l3-m1": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Asset Manager Code and firm-level ethics",
        priority: "high",
        examinerFocus:
          "L3 ethics moves from individual conduct to firm/manager-level obligations: the Asset Manager Code's six components and how they apply to policies, disclosures, and client treatment.",
        typicalQuestionForms: [
          "Constructed response: does the firm's policy comply with the Asset Manager Code?",
          "Which required disclosure or control is missing?",
        ],
        mustKnow: [
          "AMC components: loyalty to clients; investment process & actions; trading; risk management/compliance/support; performance & valuation; disclosures.",
          "Managers must place client interests first, ensure fair trade allocation, and maintain independent compliance.",
          "The AMC is a voluntary code; claiming compliance requires meeting all provisions, not a subset.",
        ],
        scoringActions: [
          "Cite the specific AMC component and the required action in a constructed-response answer.",
          "Identify the missing control/disclosure rather than restating the principle.",
        ],
      },
      {
        id: "tp2",
        title: "Standards applied to portfolio managers",
        priority: "critical",
        examinerFocus:
          "Applying Standards III (Duties to Clients), V (Investment Analysis) and VI (Conflicts) to portfolio-level decisions: suitability against the IPS, fair dealing in allocation, and soft dollars.",
        typicalQuestionForms: [
          "Identify the Standard violated in a manager scenario.",
          "State the compliant action and justify it.",
        ],
        mustKnow: [
          "Suitability (III(C)) requires managing to the client's IPS, not the manager's view of a good investment.",
          "Fair dealing (III(B)) governs equitable trade allocation across accounts (e.g. pro-rata, average price).",
          "Soft dollars must benefit the client whose brokerage generated them.",
        ],
        scoringActions: [
          "Anchor suitability answers to the IPS objectives and constraints.",
          "Specify a fair allocation method (pro-rata at average price) for block trades.",
        ],
      },
      {
        id: "tp3",
        title: "GIPS for firms and asset owners",
        priority: "high",
        examinerFocus:
          "GIPS at greater depth: composite construction, required disclosures, the treatment of pooled funds, and GIPS for asset owners.",
        typicalQuestionForms: [
          "Which GIPS provision is breached by the described presentation?",
          "State the correct composite/disclosure treatment.",
        ],
        mustKnow: [
          "Composites include all actual, fee-paying, discretionary portfolios of a similar mandate; terminated portfolios remain through their last period.",
          "Firms must present at least 5 years (to 10), with a benchmark and a dispersion measure.",
          "GIPS for asset owners emphasises reporting to oversight bodies; the firm definition must be applied consistently.",
        ],
        scoringActions: [
          "Check discretion, fee-paying status, and strategy similarity for composite inclusion.",
          "Distinguish required from recommended disclosures in the answer.",
        ],
      },
      {
        id: "tp4",
        title: "Professionalism and market integrity in practice",
        priority: "high",
        examinerFocus:
          "Independence and objectivity, material nonpublic information, and misrepresentation in the context of research, manager selection, and marketing.",
        typicalQuestionForms: [
          "Does the marketing/track-record presentation misrepresent performance?",
          "Is the use of information a II(A) violation?",
        ],
        mustKnow: [
          "Performance presentation must not be misleading; showing model/backtested results requires clear labelling.",
          "Independence applies to manager selection and consultant relationships (disclose referral arrangements).",
          "The mosaic theory still permits research from public and nonmaterial nonpublic inputs.",
        ],
        scoringActions: [
          "Flag any performance claim that omits fees, mixes actual and model results, or cherry-picks.",
          "Require disclosure of consultant/referral conflicts in selection decisions.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Ethics is ~10–15% at L3 and remains the tie-breaker; net >70% across essay and item-set ethics.",
      timeBudget: "Constructed response: ~1.5 min per point of credit; ethics vignettes reward precise Standard citation.",
      answerSequence: [
        "Read the scenario and identify the relevant Standard/AMC component per issue.",
        "State the conclusion (violation/compliant) first, then justify with the specific provision.",
        "For 'recommend a fix' items, name the concrete policy or disclosure.",
      ],
      qualityChecks: [
        "Did I cite the specific Standard/AMC component, not a general principle?",
        "Did I anchor suitability to the client's IPS?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The Asset Manager Code",
        testPointIds: ["tp1", "tp3"],
        explanation: [
          "At Level III, ethics broadens from the individual to the firm through the Asset Manager Code (AMC), which sets out ethical and professional responsibilities for firms managing client assets. Its six components require managers to act with loyalty and in the client's best interest; to maintain a sound investment process and take suitable actions; to execute trades fairly and in the client's interest; to maintain robust risk management, compliance, and support; to value client holdings fairly and present performance accurately; and to disclose material information (conflicts, fees, risks) truthfully and completely.",
          "The AMC is voluntary, but a firm claiming compliance must adhere to all provisions; partial adherence cannot be marketed as compliance. Constructed-response questions typically describe a firm policy — a fee arrangement, a trade-allocation practice, a valuation procedure — and ask whether it satisfies the relevant AMC component, requiring you to name the component and the specific required action or disclosure that is met or missing.",
          "GIPS complements the AMC on performance. Composites must include all actual, fee-paying, discretionary portfolios managed to a similar mandate, with terminated portfolios retained through their last full period to prevent survivorship bias. Firms present at least five years of compliant history (building to ten) with a benchmark and a dispersion measure, and distinguishing required from merely recommended disclosures is a frequent grading point. GIPS for asset owners adapts these principles to reporting to governing/oversight bodies.",
        ],
        keyRules: [
          "AMC covers loyalty, investment process, trading, risk/compliance, performance/valuation, disclosures.",
          "Compliance requires all provisions; no partial claims.",
          "GIPS composites: all similar, fee-paying, discretionary portfolios; ≥5 years with benchmark and dispersion.",
        ],
      },
      {
        id: "sn2",
        title: "Standards applied to portfolio managers",
        testPointIds: ["tp2", "tp4"],
        explanation: [
          "Suitability (Standard III(C)) at the portfolio level means managing each account to its investment policy statement — its objectives, constraints, and risk tolerance — rather than to the manager's independent view of an attractive investment. A security that is excellent in isolation may be unsuitable if it breaches the client's risk, liquidity, or ethical constraints. For pooled vehicles, suitability is judged against the fund's stated mandate, and investors self-select.",
          "Fair dealing (Standard III(B)) governs the equitable treatment of multiple clients, especially in trade allocation. When a block trade is only partially filled, allocating pro-rata at the average execution price treats all participating accounts fairly; systematically favouring certain accounts (e.g. the manager's own or higher-fee accounts) violates the Standard. Investment recommendations must also be disseminated fairly, not selectively.",
          "Conflicts of interest (Standard VI) and independence (Standard I(B)) are prominent in manager and consultant selection: referral fees and any compensation that could bias a recommendation must be disclosed. Performance presentation must not mislead — mixing actual with backtested or model results without clear labelling, omitting fees, or cherry-picking periods is a misrepresentation (Standard I(C)). The mosaic theory continues to permit research assembled from public and nonmaterial nonpublic information.",
        ],
        keyRules: [
          "Suitability = manage to the client's IPS, not the manager's view.",
          "Fair dealing: allocate partial fills pro-rata at average price.",
          "Disclose referral/consultant conflicts; label model vs actual performance.",
        ],
      },
      {
        id: "sn3",
        title: "Structuring a constructed-response ethics answer",
        testPointIds: ["tp1", "tp2", "tp3", "tp4"],
        explanation: [
          "L3 ethics is examined both in item sets and in constructed response (essay). The graders reward precision and structure, not volume. The most effective template is: state the conclusion (compliant or a violation) plainly, then justify it by naming the specific Standard, sub-provision, or AMC component and the exact conduct that triggers it, and finally — if asked — recommend the concrete corrective policy or disclosure.",
          "A common failure is restating the principle ('the manager must act ethically') without identifying the operative provision, which earns little credit. Another is hedging with multiple possible answers; graders credit a clear, correct conclusion with sound justification. Time discipline matters: allocate roughly the command-word's worth of effort — 'identify' needs a short answer, 'justify' or 'determine' needs the provision plus reasoning.",
          "Where a scenario embeds several issues, address each separately and explicitly, mirroring the mark allocation. Anchor every duties-to-clients issue to the IPS, every performance issue to GIPS/misrepresentation rules, and every firm-policy issue to the relevant AMC component, so the answer maps directly onto the grading key.",
        ],
        keyRules: [
          "Conclusion first, then the specific provision, then the fix.",
          "Name the exact Standard/AMC component; avoid vague principles.",
          "Match answer length to the command word and marks.",
        ],
        workedProblem: {
          scenario:
            "A manager runs a balanced strategy for many clients. For a new IPO allocation that is oversubscribed, she fills her three largest (highest-fee) accounts fully and gives smaller accounts nothing. She also markets the strategy using a composite that excludes two accounts that were closed after poor performance. Evaluate her conduct.",
          steps: [
            "Trade allocation: filling only the largest/highest-fee accounts breaches Standard III(B) Fair Dealing; the compliant method is pro-rata allocation across all suitable participating accounts at the average price.",
            "Suitability check: confirm the IPO is suitable per each account's IPS before allocating — suitability (III(C)) is a prerequisite to inclusion.",
            "Performance presentation: excluding the two closed, poorly-performing accounts from the composite creates survivorship bias, breaching GIPS (terminated portfolios must remain through their last full period) and constituting misleading performance under I(C)/AMC performance provisions.",
            "Remedy: adopt a written pro-rata allocation policy, retain terminated portfolios in the composite, and present compliant, fee-inclusive performance.",
          ],
          conclusion:
            "Two violations: unfair trade allocation (III(B)) and misleading performance via survivorship bias (GIPS / I(C) / AMC). The fixes are a pro-rata allocation policy and inclusion of terminated portfolios in the composite.",
          markingNotes: [
            "Cites III(B) and prescribes pro-rata at average price.",
            "Identifies survivorship bias and the GIPS terminated-portfolio rule.",
            "Recommends concrete corrective policies, not general principles.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L3 constructed response — fair dealing",
        question:
          "A manager receives a partial fill on a block order intended for 20 client accounts. Describe a trade-allocation method that complies with the Standards and explain why it is fair.",
        answerPlan: [
          "State the pro-rata method.",
          "Justify with III(B).",
        ],
        modelAnswer:
          "Compliant method: allocate the partial fill pro-rata across all participating accounts based on their intended order sizes, at the same (average) execution price. This satisfies Standard III(B) Fair Dealing because every account receives its proportional share on identical price terms, with no account systematically advantaged. The policy should be written, applied consistently, and documented, so that fairness can be demonstrated and no discretion is used to favour higher-fee or proprietary accounts.",
        markingGuide: [
          "Specifies pro-rata allocation at average price.",
          "Justifies with Standard III(B) and the need for a consistent, documented policy.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp1", "tp3"],
        style: "L3 constructed response — GIPS/AMC",
        question:
          "A firm claims GIPS compliance but presents only its best-performing composite and excludes portfolios closed after losses. Identify the violations and the corrective actions.",
        answerPlan: [
          "Firm-wide and survivorship issues.",
          "Corrective steps.",
        ],
        modelAnswer:
          "Presenting only the best composite is not itself a GIPS breach (composites are strategy-specific), but claiming firm-wide compliance while excluding closed, loss-making portfolios from their relevant composites is survivorship bias and breaches GIPS, which requires terminated portfolios to remain through their last full measurement period. Selectively showing performance also breaches the AMC's fair and accurate performance-presentation provision. Corrective actions: include all terminated portfolios in the appropriate composites, present each composite with a benchmark and dispersion measure over at least five years, and ensure the compliance claim is applied firm-wide.",
        markingGuide: [
          "Identifies survivorship bias and the GIPS terminated-portfolio rule.",
          "Prescribes firm-wide inclusion, benchmark, and dispersion disclosure.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L3 constructed response — performance misrepresentation",
        question:
          "In a pitch, a manager shows a five-year record that blends actual results with two years of backtested returns, without distinguishing them, and quotes returns gross of fees. Evaluate under the Standards.",
        answerPlan: [
          "Identify misrepresentation.",
          "State required disclosures.",
        ],
        modelAnswer:
          "Blending backtested (model) returns with actual results without clear labelling is misleading and violates Standard I(C) Misrepresentation and the AMC performance provisions, because prospective clients cannot distinguish realised skill from hypothetical results. Quoting only gross-of-fees returns without also disclosing the effect of fees compounds the problem. The manager must clearly label which periods are actual versus backtested, disclose all material assumptions behind the model results, and present net-of-fee performance (or clearly disclose the fee schedule), so the presentation is fair, accurate, and not misleading.",
        markingGuide: [
          "Identifies I(C) misrepresentation from unlabelled model returns.",
          "Requires clear labelling and net-of-fee (or fee-disclosed) presentation.",
        ],
      },
    ],
  }),

  "cfa-l3-m2": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Behavioral biases: cognitive errors vs emotional biases",
        priority: "critical",
        examinerFocus:
          "Classifying a described investor behaviour as a specific cognitive error or emotional bias and recommending how to moderate or adapt to it.",
        typicalQuestionForms: [
          "Identify the bias exhibited and classify it.",
          "Recommend whether to moderate or adapt the portfolio.",
        ],
        mustKnow: [
          "Cognitive errors (belief-perseverance and processing errors, e.g. anchoring, availability, representativeness, conservatism) can be reduced with information/education.",
          "Emotional biases (loss aversion, overconfidence, self-control, status quo, regret aversion, endowment) are harder to correct and often require adaptation.",
          "Moderate biases in higher-wealth/lower-standard-of-living-risk clients; adapt for lower-wealth clients where the risk of failing goals is high.",
        ],
        scoringActions: [
          "Name the specific bias and whether it is cognitive or emotional.",
          "Recommend moderating cognitive errors and adapting to entrenched emotional biases.",
        ],
      },
      {
        id: "tp2",
        title: "Behavioral portfolio construction and goals-based investing",
        priority: "high",
        examinerFocus:
          "How biases produce behaviorally modified portfolios (e.g. mental accounting, layered pyramids) and how goals-based/behavioral asset allocation accommodates them.",
        typicalQuestionForms: [
          "How would the client's biases alter the recommended allocation?",
          "Explain a goals-based (layered) portfolio structure.",
        ],
        mustKnow: [
          "Mental accounting leads investors to build layered 'pyramid' portfolios by goal rather than a single mean-variance-optimal portfolio.",
          "Behavioral portfolios can deviate from the efficient frontier; the advisor's role is to keep deviations within acceptable bounds.",
          "Goals-based investing assigns sub-portfolios to needs/wants/wishes with different risk levels.",
        ],
        scoringActions: [
          "Link the specific bias to a concrete allocation deviation.",
          "Frame recommendations in goals-based sub-portfolios where biases are strong.",
        ],
      },
      {
        id: "tp3",
        title: "Biases in markets: anomalies and bubbles",
        priority: "high",
        examinerFocus:
          "Connecting individual biases to market-level phenomena — momentum, bubbles/crashes, value and size anomalies, and herding.",
        typicalQuestionForms: [
          "Which bias explains the described market anomaly?",
          "How does herding/overconfidence contribute to a bubble?",
        ],
        mustKnow: [
          "Momentum and bubbles are linked to herding, overconfidence, and the disposition effect (selling winners, holding losers).",
          "Value/size anomalies challenge market efficiency but may reflect risk or data mining.",
          "Regret and herding amplify both bubbles (buying) and crashes (panic selling).",
        ],
        scoringActions: [
          "Map the anomaly to the underlying behavioral driver.",
          "Distinguish a genuine anomaly from a risk-based or data-mined explanation.",
        ],
      },
      {
        id: "tp4",
        title: "Advisor-client relationship and communication",
        priority: "medium",
        examinerFocus:
          "How understanding client psychology improves the IPS process, expectation-setting, and adherence during volatility.",
        typicalQuestionForms: [
          "How should the advisor structure communication given the client's biases?",
          "Which client type/personality is described?",
        ],
        mustKnow: [
          "Recognising biases improves the fit of the IPS and the client's adherence to it through market cycles.",
          "Behavioral classification (e.g. cautious, methodical, spontaneous, individualist) guides communication style.",
          "Framing and anchoring can be used constructively to help clients stay the course.",
        ],
        scoringActions: [
          "Tailor communication to the client's dominant bias/personality type.",
          "Use the IPS to pre-commit clients to a plan that survives emotional episodes.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Behavioral finance underpins private-wealth answers; secure the classify-and-recommend marks (net >65%).",
      timeBudget: "~1.5 min per point of credit; bias questions reward precise naming plus a recommendation.",
      answerSequence: [
        "Identify the specific bias from the behaviour described.",
        "Classify it as cognitive or emotional.",
        "Recommend moderate vs adapt and tie it to the portfolio/IPS.",
      ],
      qualityChecks: [
        "Did I name the exact bias (not just 'a bias')?",
        "Did I match the moderate/adapt recommendation to the bias type and client wealth?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Cognitive errors versus emotional biases",
        testPointIds: ["tp1"],
        explanation: [
          "Behavioral biases split into two broad families. Cognitive errors stem from faulty reasoning or information processing and include belief-perseverance biases (conservatism, confirmation, representativeness, illusion of control, hindsight) and information-processing biases (anchoring and adjustment, mental accounting, framing, availability). Because they arise from flawed thinking, cognitive errors can be substantially reduced through education, better information, and disciplined processes.",
          "Emotional biases arise from feelings and impulses rather than faulty reasoning: loss aversion (feeling losses roughly twice as intensely as equivalent gains), overconfidence, self-control bias, status-quo bias, endowment bias, and regret-aversion bias. These are rooted in how people feel and are far harder to correct; often the practical response is to adapt the portfolio to accommodate the bias rather than attempt to eliminate it.",
          "The moderate-versus-adapt decision also depends on the client's circumstances. For wealthier clients whose standard of living is not threatened by the bias, the advisor can adapt (accommodate) the bias. For clients with lower wealth relative to their goals — where acting on the bias could jeopardise essential objectives — the advisor should moderate the bias more firmly, because the cost of the bias is higher. The exam typically asks you to name the bias, classify it, and give the moderate/adapt recommendation.",
        ],
        keyRules: [
          "Cognitive errors (belief-perseverance and processing) are reducible with education.",
          "Emotional biases (loss aversion, overconfidence, self-control, regret) usually require adaptation.",
          "Moderate for lower-wealth/high-goal-risk clients; adapt for higher-wealth clients.",
        ],
        workedProblem: {
          scenario:
            "A client holds a large, concentrated position in her former employer's stock, which she inherited and refuses to sell 'because it has always been in the family'. She also keeps most of her remaining assets in cash, saying she 'can't bear to see the portfolio drop'. Classify her biases and recommend moderate or adapt for each, given she has modest total wealth relative to her retirement needs.",
          steps: [
            "The refusal to sell the inherited/familiar stock reflects endowment bias (valuing owned assets more) and status-quo bias; these are emotional biases.",
            "Holding excessive cash to avoid seeing declines reflects loss aversion (an emotional bias), producing an overly conservative allocation.",
            "Assess wealth: with modest wealth relative to retirement needs, the concentration and cash drag threaten her ability to meet goals, so the advisor should moderate rather than merely adapt.",
            "Recommendation: gradually diversify the concentrated position (perhaps using a phased sale to ease the emotional resistance) and increase risk-appropriate allocations, while educating her on the risk of concentration and inflation erosion of cash.",
          ],
          conclusion:
            "Endowment/status-quo bias on the stock and loss aversion on the cash holding are emotional biases; because her wealth is modest relative to her goals, the advisor should moderate them — phasing in diversification and a suitable allocation rather than accommodating the biases.",
          markingNotes: [
            "Names endowment/status-quo and loss aversion, classified as emotional.",
            "Ties the moderate recommendation to modest wealth vs goals.",
            "Gives a concrete, phased implementation to overcome emotional resistance.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Behaviorally modified and goals-based portfolios",
        testPointIds: ["tp2"],
        explanation: [
          "Biases systematically distort portfolio construction. Mental accounting leads investors to segregate wealth into separate buckets by source or purpose and to build layered 'pyramid' portfolios — a safe base for security and speculative layers for aspirations — rather than a single mean-variance-optimal portfolio. Overconfidence produces excessive trading and under-diversification; loss aversion and status-quo bias produce overly conservative, inertia-driven allocations.",
          "Rather than fight all of this, behavioral portfolio theory and goals-based investing structure the portfolio around the client's psychology. Goals-based investing assigns sub-portfolios to distinct objectives — needs (essential, low risk), wants (important, moderate risk), and wishes (aspirational, higher risk) — each with a risk level suited to the priority and time horizon of the goal. This aligns with how clients actually think about their money and improves adherence.",
          "The advisor's task is to keep the behaviorally modified portfolio within acceptable bounds of the theoretically optimal one: accommodating harmless preferences while moderating deviations that would materially jeopardise essential goals. The size of tolerable deviation is larger for wealthy clients (who can afford suboptimality) and smaller for clients whose goals are at risk.",
        ],
        keyRules: [
          "Mental accounting → layered pyramid portfolios rather than one MVO portfolio.",
          "Goals-based investing: needs/wants/wishes sub-portfolios with matched risk.",
          "Keep behavioral deviations within acceptable bounds of the optimal portfolio.",
        ],
      },
      {
        id: "sn3",
        title: "Biases in markets and the advisory relationship",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "Individual biases aggregate into market-level phenomena. Herding and overconfidence fuel momentum and can inflate bubbles as investors chase rising prices and rationalise ever-higher valuations; the disposition effect (selling winners too early and holding losers too long) and regret aversion contribute to under-reaction and then over-reaction. When sentiment reverses, the same forces — panic, herding, regret — drive crashes and overshooting to the downside.",
          "Persistent return patterns such as the value and size premia are sometimes cited as evidence of behavioral mispricing, but they may also reflect compensation for risk or the product of data mining; the exam expects you to weigh a behavioral explanation against these alternatives rather than assume markets are simply irrational.",
          "Understanding client psychology strengthens the advisory relationship. Classifying a client's dominant tendencies (for example, cautious, methodical, spontaneous, or individualist personalities) lets the advisor tailor communication and expectation-setting. A well-constructed IPS acts as a pre-commitment device: agreed in calm times, it helps the client resist emotional decisions during volatility, and constructive framing and anchoring can nudge clients toward staying the course.",
        ],
        keyRules: [
          "Herding/overconfidence drive momentum and bubbles; regret/herding drive crashes.",
          "Weigh behavioral explanations of anomalies against risk and data-mining.",
          "Use client classification and the IPS to improve communication and adherence.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L3 constructed response — bias classification",
        question:
          "An investor keeps buying more of a stock as it falls, insisting his original analysis was right despite new negative information. Identify the bias(es), classify them, and recommend how the advisor should respond.",
        answerPlan: [
          "Name the biases.",
          "Classify and recommend.",
        ],
        modelAnswer:
          "The investor exhibits confirmation bias and conservatism (belief-perseverance cognitive errors): he seeks information that supports his original thesis and underweights the new negative evidence, possibly compounded by illusion of control. Because these are cognitive errors, they can be moderated through education and disciplined process. The advisor should present the disconfirming evidence objectively, require a re-underwrite of the thesis against the new information, and impose a rules-based review (e.g. stop-loss or position-size limits) to counteract the tendency to average down on a deteriorating investment.",
        markingGuide: [
          "Names confirmation bias/conservatism as cognitive errors.",
          "Recommends moderation via evidence, re-underwriting, and rules-based limits.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L3 constructed response — goals-based structure",
        question:
          "A client thinks about her money in three buckets: covering essential retirement spending, funding a second home, and leaving a legacy. Explain how a goals-based approach would structure her portfolio and why it suits her.",
        answerPlan: [
          "Map buckets to sub-portfolios.",
          "Assign risk levels.",
        ],
        modelAnswer:
          "A goals-based approach creates three sub-portfolios matched to her priorities. The essential-spending goal (a 'need') is funded with a low-risk, high-certainty allocation (e.g. high-quality bonds/annuitised assets) to ensure it is met. The second home (a 'want') takes moderate risk with a balanced allocation. The legacy (a 'wish') can bear the most risk with a growth-oriented, longer-horizon allocation, since failing it least threatens her lifestyle. This structure aligns with her mental accounting, improves her comfort and adherence, and ensures the most important goal is protected even if the aspirational goal falls short.",
        markingGuide: [
          "Assigns need/want/wish to matched risk levels.",
          "Explains alignment with mental accounting and protection of essential goals.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp3"],
        style: "L3 constructed response — market anomaly",
        question:
          "During a rapid market rally, an advisor observes clients rushing to buy the best-performing funds and dismissing valuation concerns. Which behavioral biases are at work, and how do they contribute to bubble formation?",
        answerPlan: [
          "Identify herding/overconfidence.",
          "Link to bubbles.",
        ],
        modelAnswer:
          "The clients display herding (following the crowd into popular funds) and overconfidence (dismissing valuation risk), often reinforced by availability bias (recent gains are salient) and regret aversion (fear of missing out). Collectively these push prices above fundamental value: as more investors chase performance, prices rise further, seeming to validate the behaviour and attracting still more buyers in a self-reinforcing loop. This is the classic mechanism of bubble formation, which typically reverses sharply when sentiment turns and the same herding drives panic selling.",
        markingGuide: [
          "Names herding and overconfidence (and related biases).",
          "Explains the self-reinforcing price mechanism of a bubble.",
        ],
      },
    ],
  }),

  "cfa-l3-m3": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Forecasting capital market expectations: frameworks and pitfalls",
        priority: "high",
        examinerFocus:
          "Applying a disciplined CME framework and identifying forecasting errors (e.g. anchoring, data-mining, using historical estimates uncritically).",
        typicalQuestionForms: [
          "Identify the forecasting problem in the analyst's approach.",
          "Recommend an adjustment to the estimate.",
        ],
        mustKnow: [
          "Common CME problems: limited/biased data, regime changes, survivorship, data-mining, and psychological (anchoring/overconfidence) errors.",
          "Historical estimates must be adjusted for structural change and the current point in the cycle.",
          "Use multiple approaches (statistical, discounted-cash-flow, risk-premium, and survey/judgment).",
        ],
        scoringActions: [
          "Name the specific forecasting pitfall and its effect on the estimate.",
          "Recommend adjusting historical data for regime change and cycle position.",
        ],
      },
      {
        id: "tp2",
        title: "Economic analysis and asset-class returns",
        priority: "high",
        examinerFocus:
          "Linking the business cycle, monetary/fiscal policy, and the yield curve to expected returns across asset classes.",
        typicalQuestionForms: [
          "Given the cycle phase, what are the expected asset-class returns?",
          "How does the yield-curve shape inform expectations?",
        ],
        mustKnow: [
          "Early expansion favours equities and credit; late cycle/tightening favours defensive assets; recession favours high-quality bonds.",
          "The Taylor rule links the policy rate to inflation and output gaps; an inverted curve often precedes recession.",
          "Inflation regime and central-bank credibility drive real vs nominal asset returns.",
        ],
        scoringActions: [
          "Map the described cycle phase and policy stance to asset-class implications.",
          "Use the yield curve and policy signals as leading indicators.",
        ],
      },
      {
        id: "tp3",
        title: "Estimating expected returns for equities and fixed income",
        priority: "critical",
        examinerFocus:
          "Applying the Grinold-Kroner equity model, the building-block/risk-premium fixed-income approach, and the Singer-Terhaar model for global assets.",
        typicalQuestionForms: [
          "Compute an expected equity return via Grinold-Kroner.",
          "Compute a fixed-income expected return via building blocks.",
        ],
        mustKnow: [
          "Grinold-Kroner: E[R] ≈ dividend yield + (real earnings growth + inflation) − change in shares + repricing (ΔP/E).",
          "Fixed-income building block: E[R] ≈ real risk-free rate + inflation premium + default premium + liquidity/maturity premia.",
          "Singer-Terhaar blends fully integrated and fully segmented risk premia via the degree of market integration.",
        ],
        scoringActions: [
          "Assemble the equity return from income, growth, and repricing components.",
          "Sum the building-block premia for a fixed-income expected return.",
        ],
      },
      {
        id: "tp4",
        title: "Estimating the covariance/correlation structure",
        priority: "medium",
        examinerFocus:
          "Building variance-covariance inputs, using factor models to reduce estimation error, and recognising correlation instability in stress.",
        typicalQuestionForms: [
          "Why use a factor model for the covariance matrix?",
          "How do correlations behave in market stress?",
        ],
        mustKnow: [
          "A full sample covariance matrix has many parameters and large estimation error; factor models reduce dimensionality.",
          "Correlations tend to rise in crises (diversification fails when most needed).",
          "Shrinkage estimators blend the sample matrix with a structured target to improve stability.",
        ],
        scoringActions: [
          "Justify factor models/shrinkage by estimation-error reduction.",
          "Stress-test allocations for rising correlations in downturns.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "CME feeds asset allocation; secure the return-estimation marks (net >65%).",
      timeBudget: "~1.5 min per point of credit; Grinold-Kroner and building-block calculations are high-yield.",
      answerSequence: [
        "Identify the model requested (Grinold-Kroner, building block, Singer-Terhaar).",
        "Assemble the components with correct signs.",
        "Sanity-check against the cycle/policy context.",
      ],
      qualityChecks: [
        "Correct sign on repricing (ΔP/E) and share change in Grinold-Kroner?",
        "Adjusted historical inputs for regime change?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Estimating expected returns",
        testPointIds: ["tp3", "tp1"],
        explanation: [
          "Equity expected returns are commonly built with the Grinold-Kroner model, which decomposes return into income, nominal earnings growth, and repricing: E[R] ≈ (dividend yield − change in shares outstanding) + (real earnings growth + expected inflation) + (percentage change in the P/E multiple). The income component includes the dividend yield plus the effect of net buybacks (a negative change in shares adds to return); the growth component is nominal earnings growth; and the repricing component captures expansion or contraction of the valuation multiple, which is often assumed to mean-revert toward a normal level.",
          "Fixed-income expected returns use a building-block (risk-premium) approach: start with the real risk-free rate, add an inflation premium, then add compensation for default risk, illiquidity, and maturity/duration. For global assets, the Singer-Terhaar model estimates the risk premium as a weighted blend of the premium under full market integration (using the global market portfolio and the asset's correlation with it) and the premium under full segmentation (using the asset's own volatility), weighted by the degree of integration; less integrated markets carry higher required premia.",
          "All of these estimates rest on inputs that must be handled critically. Historical averages should be adjusted for structural/regime change and the current point in the business cycle; analysts must guard against anchoring on the recent past, data-mining spurious patterns, survivorship bias, and overconfidence. Triangulating statistical, model-based, risk-premium, and survey approaches improves robustness.",
        ],
        keyRules: [
          "Grinold-Kroner: E[R] ≈ (div yield − Δshares) + (real growth + inflation) + ΔP/E.",
          "Fixed income building block: real rate + inflation + default + liquidity/maturity premia.",
          "Singer-Terhaar blends integrated and segmented premia by degree of integration.",
        ],
        workedProblem: {
          scenario:
            "For an equity market, the dividend yield is 2.5%, net buybacks reduce shares by 0.5% per year, expected real earnings growth is 2.0%, expected inflation is 2.5%, and the analyst expects the P/E to expand by 1.0% per year. Estimate the expected return using the Grinold-Kroner model.",
          steps: [
            "Income return = dividend yield − change in shares = 2.5% − (−0.5%) = 2.5% + 0.5% = 3.0% (buybacks add to return).",
            "Nominal earnings growth = real growth + inflation = 2.0% + 2.5% = 4.5%.",
            "Repricing (ΔP/E) = +1.0%.",
            "E[R] ≈ 3.0% + 4.5% + 1.0% = 8.5%.",
          ],
          conclusion:
            "The expected equity return is about 8.5%. Note the buyback effect adds 0.5% (a reduction in shares outstanding raises per-share return), and the assumed 1% multiple expansion is a discretionary component that should be scrutinised for mean reversion.",
          markingNotes: [
            "Buybacks (negative Δshares) add to the income component.",
            "Nominal growth = real growth + inflation.",
            "Expected return ≈ 8.5% with the repricing term included.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Economic analysis and the cycle",
        testPointIds: ["tp2"],
        explanation: [
          "Capital market expectations must be conditioned on the business cycle and policy environment. In early expansion, accelerating growth and accommodative policy favour equities and credit-sensitive bonds; as the cycle matures and central banks tighten, returns to risk assets moderate and defensive sectors and quality outperform; in contraction/recession, high-quality government bonds tend to do best as rates fall and risk premia widen.",
          "Monetary policy is central. The Taylor rule provides a benchmark policy rate as a function of the inflation gap and the output gap, helping forecast the direction of short rates. The shape of the yield curve is a powerful leading indicator: a steep curve typically signals expected recovery, while an inverted curve (short rates above long rates) has historically preceded recessions. Fiscal policy and the inflation regime (and the central bank's credibility in controlling it) shape the balance between real and nominal returns.",
          "Because policy and the cycle move asset-class returns systematically, a disciplined CME process links a specific macro scenario to explicit return and risk implications for each asset class, rather than extrapolating recent performance. This macro conditioning is what feeds the strategic and tactical asset-allocation decisions in the following modules.",
        ],
        keyRules: [
          "Early cycle favours equities/credit; late cycle favours defensives; recession favours quality bonds.",
          "Taylor rule benchmarks the policy rate; an inverted curve signals recession risk.",
          "Condition return estimates on the cycle and policy, not recent performance.",
        ],
      },
      {
        id: "sn3",
        title: "Covariance estimation and its instability",
        testPointIds: ["tp4"],
        explanation: [
          "Asset allocation requires not just expected returns but a full variance-covariance matrix. Estimating it directly from historical data is problematic: the number of parameters grows with the square of the number of assets, so the sample matrix is noisy and can even be non-invertible when the sample is short relative to the number of assets. This estimation error propagates into unstable, extreme optimiser weights.",
          "Factor models mitigate this by expressing asset covariances through a small number of common factors, drastically reducing the parameters that must be estimated and producing more stable, economically interpretable inputs. Shrinkage estimators offer another remedy, blending the noisy sample covariance matrix with a structured target (such as a constant-correlation or factor-based matrix) to trade a little bias for a large reduction in variance.",
          "A critical practical caveat is that correlations are not constant: they tend to rise sharply in market stress, so the diversification that appears available in calm periods can evaporate exactly when it is most needed. Analysts therefore stress-test allocations under elevated-correlation scenarios and avoid over-relying on historical averages that understate tail co-movement.",
        ],
        keyRules: [
          "Sample covariance matrices are noisy; parameters grow with assets squared.",
          "Factor models and shrinkage reduce estimation error and stabilise inputs.",
          "Correlations rise in crises; stress-test for diversification breakdown.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp3"],
        style: "L3 constructed response — Grinold-Kroner",
        question:
          "An analyst estimates: dividend yield 3.0%, expected inflation 2.0%, real earnings growth 1.5%, no net change in shares, and expects the market P/E to contract by 0.5% per year. Compute the expected equity return and comment on the repricing assumption.",
        answerPlan: [
          "Assemble components.",
          "Note the negative repricing.",
        ],
        modelAnswer:
          "Income = 3.0% (no share change). Nominal growth = real growth + inflation = 1.5% + 2.0% = 3.5%. Repricing = −0.5% (P/E contraction reduces return). E[R] ≈ 3.0% + 3.5% − 0.5% = 6.0%. The negative repricing term reflects an expectation that an above-normal multiple mean-reverts; if the current P/E is already at fair value, the repricing term should be closer to zero, so this assumption warrants justification.",
        markingGuide: [
          "Nominal growth = 3.5%; income = 3.0%.",
          "Subtracts the 0.5% repricing; E[R] = 6.0%.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L3 constructed response — fixed-income building blocks",
        question:
          "Estimate the expected return on a corporate bond given: real risk-free rate 1.5%, expected inflation 2.5%, default premium 1.0%, and liquidity premium 0.5%.",
        answerPlan: [
          "Sum the building blocks.",
        ],
        modelAnswer:
          "Using the building-block approach: E[R] ≈ real risk-free rate + inflation premium + default premium + liquidity premium = 1.5% + 2.5% + 1.0% + 0.5% = 5.5%. Each premium compensates for a distinct risk; the sum gives the expected return, before any expected change in spreads or rolldown.",
        markingGuide: [
          "Adds all four premia.",
          "Expected return = 5.5%.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp1"],
        style: "L3 constructed response — forecasting pitfall",
        question:
          "An analyst projects future equity returns by simply averaging the last ten years of realised returns, a period of unusually strong performance. Identify the forecasting problem and recommend a correction.",
        answerPlan: [
          "Name the pitfall.",
          "Recommend adjustment.",
        ],
        modelAnswer:
          "The analyst is anchoring on a short, non-representative historical sample and extrapolating an unusually strong regime, which will overstate expected returns. Ten years may not span a full cycle and reflects a period of multiple expansion unlikely to repeat. The correction is to use a longer, cycle-spanning history, adjust for structural/regime change and current valuations (e.g. via a forward-looking model such as Grinold-Kroner), and cross-check with risk-premium and survey approaches rather than relying on recent realised returns.",
        markingGuide: [
          "Identifies anchoring/extrapolation of a non-representative period.",
          "Recommends longer history, valuation adjustment, and forward-looking models.",
        ],
      },
    ],
  }),

  "cfa-l3-m4": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Strategic asset allocation and the investor's economic balance sheet",
        priority: "critical",
        examinerFocus:
          "Setting the strategic asset allocation from objectives, constraints, and the total economic balance sheet (including human capital and liabilities).",
        typicalQuestionForms: [
          "Recommend and justify a strategic asset allocation.",
          "How does human capital affect the allocation?",
        ],
        mustKnow: [
          "The economic balance sheet includes financial capital plus human capital and present value of liabilities/consumption goals.",
          "Human capital that is bond-like argues for more equities in financial assets (and vice versa).",
          "Asset-only, liability-relative, and goals-based approaches frame the SAA differently.",
        ],
        scoringActions: [
          "Incorporate human capital and liabilities into the allocation rationale.",
          "Match the SAA approach (asset-only vs liability-relative vs goals-based) to the investor type.",
        ],
      },
      {
        id: "tp2",
        title: "Liability-relative and goals-based asset allocation",
        priority: "high",
        examinerFocus:
          "Applying surplus optimisation, hedging/return-seeking portfolios for liabilities, and goals-based sub-portfolio construction.",
        typicalQuestionForms: [
          "Design a hedging + return-seeking split for a liability.",
          "Allocate across goals with different horizons/priorities.",
        ],
        mustKnow: [
          "Liability-relative investing manages surplus (assets − liabilities); a hedging portfolio matches liability risk and a return-seeking portfolio grows surplus.",
          "Surplus optimisation maximises expected surplus return for a level of surplus volatility.",
          "Goals-based allocation assigns capital to goals by priority and horizon, each with a required return and risk.",
        ],
        scoringActions: [
          "Split assets into a liability-hedging portfolio and a return-seeking portfolio.",
          "Set each goal's sub-portfolio risk by its priority and time horizon.",
        ],
      },
      {
        id: "tp3",
        title: "Rebalancing and the cost-benefit of policy ranges",
        priority: "high",
        examinerFocus:
          "Choosing rebalancing methods (calendar vs percentage-range) and setting corridor widths based on volatility, correlation, and transaction costs.",
        typicalQuestionForms: [
          "Recommend a rebalancing approach and corridor width.",
          "Effect of transaction costs/volatility on the optimal corridor.",
        ],
        mustKnow: [
          "Percentage-range (corridor) rebalancing triggers on deviation; calendar rebalances on a schedule.",
          "Wider corridors for higher transaction costs and higher risk tolerance; narrower for higher volatility and lower correlation with the rest of the portfolio.",
          "Rebalancing is contrarian and disciplines the portfolio back to the SAA.",
        ],
        scoringActions: [
          "Justify corridor width from transaction costs, volatility, correlation, and risk tolerance.",
          "Recommend disciplined rebalancing rather than market timing.",
        ],
      },
      {
        id: "tp4",
        title: "Tactical asset allocation and behavioral/implementation issues",
        priority: "medium",
        examinerFocus:
          "Distinguishing strategic from tactical allocation, evaluating TAA value-add, and recognising behavioral pitfalls in allocation.",
        typicalQuestionForms: [
          "Is the described deviation strategic or tactical, and is it justified?",
          "Which behavioral bias undermines the allocation?",
        ],
        mustKnow: [
          "TAA takes short-term deviations from the SAA to exploit perceived mispricing; it should be evaluated against a benchmark and risk budget.",
          "Behavioral pitfalls: loss aversion (illusion of control), recency, and mental accounting distort allocation.",
          "Discretionary TAA relies on judgment; systematic TAA uses signals/rules.",
        ],
        scoringActions: [
          "Classify a deviation as strategic vs tactical and test it against the risk budget.",
          "Identify the behavioral bias distorting the allocation decision.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Asset allocation is a top-weight L3 topic; secure SAA and liability-relative marks (net >70%).",
      timeBudget: "~1.5 min per point of credit; SAA recommendations reward explicit links to objectives/constraints.",
      answerSequence: [
        "Identify the investor type and the appropriate allocation approach.",
        "Recommend the allocation and justify from objectives, constraints, and the economic balance sheet.",
        "Address rebalancing and any tactical/behavioral considerations.",
      ],
      qualityChecks: [
        "Did I incorporate human capital/liabilities into the rationale?",
        "Did I justify corridor width and classify deviations correctly?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Strategic asset allocation approaches",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "The strategic asset allocation is the long-run policy mix that reflects the investor's objectives, constraints, and risk tolerance, and it is the dominant driver of long-term return and risk. Modern practice frames it against the investor's total economic balance sheet, which extends beyond financial assets to include human capital (the present value of future earnings) on the asset side and the present value of future consumption goals and liabilities on the other. A young investor with large, stable (bond-like) human capital can afford more equities in their financial portfolio, whereas someone whose human capital is equity-like (e.g. income tied to markets) should hold more bonds financially.",
          "Three broad approaches frame the SAA. Asset-only allocation (typified by mean-variance optimisation) ignores liabilities and maximises the risk-adjusted return of the asset portfolio. Liability-relative allocation manages the surplus (assets minus liabilities) and is appropriate where liabilities are explicit, as for pensions and insurers. Goals-based allocation, common in private wealth, assigns capital to distinct goals by priority and horizon, each funded by a sub-portfolio with its own required return and risk.",
          "Matching the approach to the investor is a graded skill: a defined-benefit pension is naturally liability-relative; an endowment with a spending goal but no hard liability is often asset-only with a spending constraint; a private client with segmented goals suits goals-based. The recommended SAA must be justified explicitly from the objectives, constraints, and the economic balance sheet, not merely asserted.",
        ],
        keyRules: [
          "SAA reflects objectives/constraints and dominates long-run risk/return.",
          "Economic balance sheet adds human capital and liabilities/goals.",
          "Approaches: asset-only, liability-relative, goals-based — match to investor type.",
        ],
        workedProblem: {
          scenario:
            "A corporate defined-benefit pension has assets of $1,000m and a present value of liabilities of $900m (surplus $100m). The sponsor wants to protect the funded status while still growing surplus. Outline a liability-relative allocation and explain the role of each component.",
          steps: [
            "Recognise the objective: manage surplus (assets − liabilities) and control surplus volatility, not just asset volatility.",
            "Construct a liability-hedging portfolio (long-duration, high-quality bonds matched to the liabilities' duration and cash flows) to immunise the funded status against interest-rate moves.",
            "Size the hedging portfolio to cover the liabilities (at least the $900m), so changes in liability value are offset by the hedging assets.",
            "Allocate the remaining surplus ($100m plus any residual) to a return-seeking portfolio (equities, credit, alternatives) to grow the surplus, accepting that this introduces some surplus volatility.",
          ],
          conclusion:
            "A liability-relative structure pairs a duration-matched liability-hedging portfolio (protecting the funded status) with a return-seeking portfolio funded largely by the surplus (growing it). This protects the ~110% funded status against rate moves while pursuing surplus growth within the sponsor's surplus-risk budget.",
          markingNotes: [
            "Frames the objective in surplus terms.",
            "Duration-matches the hedging portfolio to liabilities.",
            "Uses the surplus for the return-seeking portfolio within a surplus-risk budget.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Rebalancing policy",
        testPointIds: ["tp3"],
        explanation: [
          "Because asset returns diverge over time, portfolios drift from the SAA and must be rebalanced to maintain the intended risk profile. Two main methods exist: calendar rebalancing returns the portfolio to target weights on a fixed schedule (e.g. quarterly), which is simple but ignores intra-period drift; percentage-range (corridor) rebalancing acts whenever an asset's weight breaches a preset band around its target, responding to actual market moves.",
          "The optimal corridor width reflects a cost-benefit trade-off. Wider corridors are appropriate when transaction costs are high (fewer trades) and when the investor has higher risk tolerance (more drift tolerable). Narrower corridors are appropriate when the asset is more volatile (drift accumulates faster and risk rises) and when it is less correlated with the rest of the portfolio (its drift changes the portfolio risk more). Higher correlation with the rest of the portfolio and lower volatility permit wider bands.",
          "Rebalancing is inherently contrarian — it sells assets that have risen and buys those that have fallen — which imposes discipline and can add a small rebalancing return in mean-reverting markets, though it can detract in strongly trending markets. It should be executed as a rules-based discipline to return to the SAA, not confused with tactical market timing.",
        ],
        keyRules: [
          "Calendar (scheduled) vs percentage-range (corridor) rebalancing.",
          "Wider corridors: high transaction costs and high risk tolerance; narrower: high volatility, low correlation.",
          "Rebalancing is contrarian and disciplines the portfolio to the SAA.",
        ],
      },
      {
        id: "sn3",
        title: "Tactical allocation and behavioral pitfalls",
        testPointIds: ["tp4"],
        explanation: [
          "Tactical asset allocation deliberately deviates from the SAA to exploit perceived short-term mispricings or shifts in the opportunity set. Discretionary TAA relies on the manager's judgment about markets; systematic TAA uses quantitative signals and rules. Either way, TAA consumes part of the risk budget and must be evaluated against the SAA benchmark, with any value-add measured net of transaction costs and additional risk taken.",
          "Behavioral biases threaten sound allocation at both the strategic and tactical levels. Loss aversion and an illusion of control can cause investors to abandon the SAA during drawdowns or to over-trade; recency bias leads to chasing recent winners (procyclical shifts that buy high and sell low); and mental accounting can produce inconsistent risk-taking across buckets. These undermine the discipline that the SAA and rebalancing policy are designed to provide.",
          "The advisor's role is to distinguish justified tactical deviations (supported by evidence and within the risk budget) from behaviorally driven ones, and to use the IPS and a pre-agreed rebalancing/TAA policy as commitment devices that keep the portfolio aligned with long-run objectives through market cycles.",
        ],
        keyRules: [
          "TAA deviates short-term from the SAA; evaluate net of costs and risk vs benchmark.",
          "Discretionary (judgment) vs systematic (rules) TAA.",
          "Guard against loss aversion, recency, and mental accounting distorting allocation.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L3 constructed response — human capital and SAA",
        question:
          "A 30-year-old tenured professor with stable salary income has most wealth in human capital and a modest financial portfolio. Explain how her human capital should influence the equity/bond mix of her financial assets.",
        answerPlan: [
          "Classify human capital.",
          "Adjust financial allocation.",
        ],
        modelAnswer:
          "Her tenured, stable salary makes her human capital bond-like: it resembles a large, low-risk asset with predictable cash flows. On her total economic balance sheet, this bond-like human capital already provides substantial fixed-income-like exposure, so she can afford to hold a more equity-heavy financial portfolio to balance the whole. As she ages and human capital declines (converting to financial capital), the financial portfolio should gradually shift toward bonds to maintain the overall risk profile.",
        markingGuide: [
          "Classifies stable salary as bond-like human capital.",
          "Concludes a more equity-tilted financial portfolio, de-risking with age.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L3 constructed response — rebalancing corridor",
        question:
          "An investor holds a highly volatile asset class with high transaction costs. Discuss the competing effects on the optimal rebalancing corridor width and give a recommendation.",
        answerPlan: [
          "Identify competing effects.",
          "Recommend.",
        ],
        modelAnswer:
          "High volatility argues for a narrower corridor, because the asset drifts quickly and wide bands would let portfolio risk rise well above target between rebalances. High transaction costs argue for a wider corridor, to avoid frequent, costly trades. These pull in opposite directions, so the recommendation is a moderate corridor that leans on the investor's risk tolerance: if controlling risk is paramount, favour the narrower end; if cost minimisation dominates and risk tolerance is higher, widen it. A percentage-range approach is preferable to a pure calendar approach here so rebalancing responds to actual drift.",
        markingGuide: [
          "Volatility → narrower; transaction costs → wider.",
          "Gives a reasoned, moderate recommendation tied to risk tolerance.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp2"],
        style: "L3 constructed response — liability-relative",
        question:
          "Explain the roles of a liability-hedging portfolio and a return-seeking portfolio for a pension plan, and how their sizes relate to the plan's funded status.",
        answerPlan: [
          "Define each portfolio.",
          "Relate to funded status.",
        ],
        modelAnswer:
          "The liability-hedging portfolio holds assets (typically long-duration, high-quality bonds) whose value moves with the liabilities, immunising the funded status against interest-rate and inflation changes. The return-seeking portfolio (equities, credit, alternatives) aims to grow the surplus and improve the funded ratio over time. For an underfunded plan, more assets must be devoted to hedging to protect the fragile funded status, leaving less for return-seeking; a well-funded or surplus plan can allocate the surplus to the return-seeking portfolio while keeping the liabilities hedged.",
        markingGuide: [
          "Correctly describes hedging vs return-seeking roles.",
          "Links the split to funded status (more hedging when underfunded).",
        ],
      },
    ],
  }),

  "cfa-l3-m5": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Managing equity and interest-rate risk with derivatives",
        priority: "high",
        examinerFocus:
          "Using futures/swaps to adjust equity beta and portfolio duration, and computing the number of contracts required.",
        typicalQuestionForms: [
          "Compute the futures contracts to change beta/duration to a target.",
          "How does a swap reallocate exposure?",
        ],
        mustKnow: [
          "Equity: number of contracts = [(target β − current β)/futures β] × (portfolio value/futures price×multiplier).",
          "Fixed income: number of contracts = [(target duration − current duration)/futures duration] × (portfolio value/futures price×multiplier).",
          "An equity swap can convert equity exposure to fixed/floating or reallocate between markets synthetically.",
        ],
        scoringActions: [
          "Use the beta/duration adjustment formula with the correct sign for the target.",
          "Round to whole contracts and state the direction (long/short).",
        ],
      },
      {
        id: "tp2",
        title: "Currency management: strategic and tactical decisions",
        priority: "critical",
        examinerFocus:
          "Deciding the strategic hedge ratio along the passive-to-active spectrum and implementing hedges with forwards/options.",
        typicalQuestionForms: [
          "Recommend a currency hedging policy given the mandate/beliefs.",
          "Compute the hedge and its effect on return/risk.",
        ],
        mustKnow: [
          "The spectrum runs from fully hedged (passive) to unhedged, with discretionary/active overlays in between.",
          "Hedge more when the foreign asset is bond-like, the investor is risk-averse, and hedging costs are low; hedge less for equities over long horizons.",
          "Forwards give symmetric hedges; options give asymmetric protection at a premium cost.",
        ],
        scoringActions: [
          "Place the recommendation on the passive-active hedging spectrum and justify it.",
          "Match the instrument (forward vs option) to the desired payoff and cost tolerance.",
        ],
      },
      {
        id: "tp3",
        title: "Cost-efficient hedging techniques",
        priority: "high",
        examinerFocus:
          "Reducing hedging cost with option strategies (spreads, collars, risk reversals) and cross/proxy hedges, and minimum-variance hedge ratios.",
        typicalQuestionForms: [
          "Which cost-reduction strategy fits the described view/budget?",
          "When is a cross (proxy) hedge appropriate, and what risk remains?",
        ],
        mustKnow: [
          "Collars/risk reversals reduce or eliminate net option premium by giving up some upside.",
          "Cross hedging uses a correlated currency/instrument when a direct hedge is unavailable or costly; basis risk remains.",
          "The minimum-variance hedge ratio uses the regression beta of the exposure on the hedging instrument.",
        ],
        scoringActions: [
          "Select the option structure that matches the risk view and premium budget.",
          "Flag the residual basis risk in any cross/proxy hedge.",
        ],
      },
      {
        id: "tp4",
        title: "Volatility and using swaps/futures for rebalancing and exposure",
        priority: "medium",
        examinerFocus:
          "Using derivatives for efficient exposure management (equitising cash, portable alpha, volatility trading) and understanding roll/basis risk.",
        typicalQuestionForms: [
          "How to equitise cash or implement portable alpha with derivatives?",
          "Effect of basis/roll risk on a hedge.",
        ],
        mustKnow: [
          "Equitising cash uses index futures to gain market exposure on cash holdings quickly and cheaply.",
          "Portable alpha separates the alpha source from the beta, using derivatives to add the desired beta.",
          "Basis risk (imperfect correlation) and roll costs erode hedge/exposure effectiveness.",
        ],
        scoringActions: [
          "Use index futures to equitise cash or overlay beta for portable alpha.",
          "Account for basis and roll risk when assessing effectiveness.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Derivatives/currency management is high-yield at L3; secure the hedge-sizing and currency-policy marks (net >65%).",
      timeBudget: "~1.5 min per point of credit; contract-sizing calculations reward correct formulas and rounding.",
      answerSequence: [
        "Identify the exposure to adjust (beta, duration, currency).",
        "Apply the sizing formula and state direction and contract count.",
        "Recommend the instrument/structure and note residual risks.",
      ],
      qualityChecks: [
        "Correct sign for target beta/duration and whole-contract rounding?",
        "Instrument matched to payoff/cost, with basis risk noted?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Adjusting beta and duration with futures",
        testPointIds: ["tp1", "tp4"],
        explanation: [
          "Derivatives let managers adjust portfolio risk quickly and cheaply without trading the underlying securities. To change equity systematic risk, the number of index futures is N = [(βtarget − βportfolio)/βfutures] × (portfolio value)/(futures price × multiplier). A positive result means buy futures (to raise beta); a negative result means sell futures (to lower beta). Setting the target beta to zero fully hedges the equity market exposure.",
          "The analogous fixed-income adjustment uses bond futures and duration: N = [(target duration − portfolio duration)/futures duration] × (portfolio value)/(futures price × multiplier), where futures duration is that of the cheapest-to-deliver bond adjusted by its conversion factor. Buying futures lengthens duration; selling shortens it. These tools implement tactical shifts, hedges, and transitions far faster than cash-market trading.",
          "Related exposure-management techniques include equitising cash — using index futures to give idle cash equity exposure so the portfolio is not out of the market — and portable alpha, which separates the alpha source (e.g. a market-neutral strategy) from the beta, using derivatives to overlay the desired market exposure. All these techniques carry basis risk (imperfect correlation between the derivative and the exposure) and roll costs, which must be accounted for when judging effectiveness.",
        ],
        keyRules: [
          "Equity: N = [(βtarget − βport)/βfut] × value/(price×multiplier).",
          "Fixed income: N = [(Dtarget − Dport)/Dfut] × value/(price×multiplier).",
          "Equitise cash and run portable alpha with futures; watch basis/roll risk.",
        ],
        workedProblem: {
          scenario:
            "A $50,000,000 equity portfolio has a beta of 1.10. The manager wants to reduce beta to 0.80 using index futures priced at $250,000 per contract (price × multiplier), with a futures beta of 1.00. Compute the number of contracts and state the direction.",
          steps: [
            "Apply the formula: N = [(βtarget − βport)/βfut] × (portfolio value)/(futures price × multiplier).",
            "N = [(0.80 − 1.10)/1.00] × (50,000,000/250,000).",
            "N = (−0.30) × 200 = −60.",
            "The negative sign means sell (short) 60 contracts to reduce beta.",
          ],
          conclusion:
            "The manager sells 60 index futures contracts to lower the portfolio beta from 1.10 to 0.80. Shorting futures offsets part of the market exposure without selling the underlying stocks, preserving the security-selection positions.",
          markingNotes: [
            "Uses the beta-adjustment formula with correct inputs.",
            "N = −60 (short 60 contracts).",
            "States the direction as selling futures to reduce beta.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Currency management policy",
        testPointIds: ["tp2", "tp3"],
        explanation: [
          "Currency exposure in international portfolios can be managed along a spectrum from fully hedged (a passive policy that neutralises currency risk) to unhedged (accepting full currency exposure), with discretionary and active overlays in between. The strategic hedge ratio depends on the mandate, the investor's beliefs about currency returns, and risk tolerance. Managers hedge more when the foreign asset is bond-like (currency risk is large relative to asset risk), when the investor is risk-averse, and when hedging is cheap; they hedge less for equities over long horizons, where currency volatility is smaller relative to equity volatility and can partly diversify.",
          "Implementation uses forwards or options. Forward contracts provide a symmetric hedge that locks in a rate at low upfront cost but forgoes favourable moves; currency options provide asymmetric protection — capping downside while retaining upside — at the cost of a premium. The choice depends on whether the investor wants certainty (forwards) or insurance with upside (options), and on the premium budget.",
          "Cost-efficient techniques reduce the drag of hedging. Option spreads, collars, and risk reversals lower or eliminate net premium by giving up some upside (e.g. a collar buys a protective put financed by selling a call). Cross hedging (or proxy hedging) uses a correlated currency when a direct hedge is unavailable or expensive, but leaves basis risk from imperfect correlation. The minimum-variance hedge ratio, estimated as the regression coefficient of the asset's domestic-currency return on the hedging instrument, optimises the hedge size when the relationship is not one-to-one.",
        ],
        keyRules: [
          "Hedging spectrum: fully hedged (passive) to unhedged, with active overlays.",
          "Hedge more for bond-like assets/risk-averse investors; less for long-horizon equities.",
          "Forwards symmetric; options asymmetric; collars/cross-hedges cut cost but add basis risk.",
        ],
      },
      {
        id: "sn3",
        title: "Cost-efficient hedging and residual risks",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "Hedging is not free, so managers use structures that balance protection against cost. A collar (long put, short call) brackets the outcome within a range and can be structured at zero net premium by choosing strikes so the call premium funds the put; the trade-off is capped upside. A risk reversal expresses a directional currency view while reducing net premium. Put/call spreads reduce premium by capping the protected range. Each structure should be matched to the manager's specific risk view and premium tolerance.",
          "When a direct hedge is unavailable, illiquid, or costly, a cross (proxy) hedge uses a correlated currency or instrument. This introduces basis risk: if the correlation between the exposure and the proxy breaks down, the hedge underperforms. The minimum-variance hedge ratio helps size such hedges, but the residual basis risk cannot be fully eliminated and must be disclosed and monitored.",
          "Exposure-management overlays (equitising cash, portable alpha, duration/beta overlays) similarly rely on derivatives whose effectiveness is limited by basis risk and roll costs — the cost of rolling expiring futures into new contracts, especially in a contango/backwardation term structure. A complete answer both recommends the cost-efficient structure and explicitly identifies the residual risks (basis, roll, and, for options, premium cost or forgone upside).",
        ],
        keyRules: [
          "Collars/spreads/risk reversals cut premium by giving up upside.",
          "Cross hedges introduce basis risk; size with the minimum-variance hedge ratio.",
          "Overlays face basis and roll risk; always state residual risks.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L3 constructed response — duration adjustment",
        question:
          "A $100,000,000 bond portfolio has a duration of 4.0. The manager wants to raise duration to 6.0 using futures with a duration of 8.0 priced at $125,000 per contract. Compute the number of contracts and the direction.",
        answerPlan: [
          "Apply the duration formula.",
          "State direction.",
        ],
        modelAnswer:
          "N = [(target duration − portfolio duration)/futures duration] × (portfolio value)/(futures price) = [(6.0 − 4.0)/8.0] × (100,000,000/125,000) = 0.25 × 800 = 200. The positive result means buy 200 futures contracts to increase the portfolio's duration from 4.0 to 6.0.",
        markingGuide: [
          "Uses the duration-adjustment formula correctly.",
          "N = 200 contracts, long (buy).",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L3 constructed response — currency policy",
        question:
          "An institutional investor with a long horizon holds international equities and believes currency movements are unpredictable but adds volatility. Recommend a currency hedging policy and justify it.",
        answerPlan: [
          "Place on the hedging spectrum.",
          "Justify.",
        ],
        modelAnswer:
          "Because the investor believes currencies are unpredictable (no expected return advantage) but add volatility, a passive, largely hedged policy is reasonable to remove uncompensated currency risk. However, for a long-horizon equity portfolio, currency volatility is modest relative to equity volatility and offers some diversification, so a partial hedge (rather than a full 100% hedge) is defensible and reduces hedging costs. The recommendation is a strategic partial-to-full hedge implemented with forwards for their low cost and symmetric payoff, rebalanced periodically, with no active currency views given the stated belief.",
        markingGuide: [
          "Recommends a (partial-to-full) hedge given no expected currency return.",
          "Justifies with volatility reduction, long-horizon equity context, and forward implementation.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp3"],
        style: "L3 constructed response — cost-efficient hedge",
        question:
          "A manager wants downside currency protection but has a limited premium budget and is willing to give up some upside. Recommend an option structure and identify the trade-off.",
        answerPlan: [
          "Select a collar.",
          "State the trade-off.",
        ],
        modelAnswer:
          "A collar (or zero-cost collar) fits: buy a protective put to cap the downside and sell a call to finance the put premium, potentially bringing the net cost to near zero. This respects the limited premium budget while providing downside protection. The trade-off is capped upside: if the currency moves favourably beyond the call strike, the manager forgoes that gain. The strikes are chosen to balance the level of protection against the amount of upside surrendered.",
        markingGuide: [
          "Recommends a (zero-cost) collar to meet the budget.",
          "Identifies capped upside as the trade-off.",
        ],
      },
    ],
  }),

  "cfa-l3-m6": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Liability-driven investing and immunisation",
        priority: "critical",
        examinerFocus:
          "Immunising a single liability or multiple liabilities via duration matching, and understanding the conditions and rebalancing needs.",
        typicalQuestionForms: [
          "Design an immunising portfolio for a liability.",
          "Why must an immunised portfolio be rebalanced?",
        ],
        mustKnow: [
          "Single-liability immunisation: match the portfolio's Macaulay duration to the liability horizon and set PV(assets) ≥ PV(liability).",
          "Immunisation locks in a return only if the portfolio is rebalanced as time passes and yields change (duration drifts).",
          "Multiple liabilities: match duration and ensure asset dispersion (convexity) exceeds liability dispersion, with cash-flow coverage.",
        ],
        scoringActions: [
          "Set duration to the liability horizon and PV(assets) ≥ PV(liabilities).",
          "State the rebalancing requirement and the dispersion/convexity condition.",
        ],
      },
      {
        id: "tp2",
        title: "Yield-curve strategies",
        priority: "high",
        examinerFocus:
          "Positioning for expected changes in the level, slope, and curvature of the yield curve (bullet, barbell, laddered; riding the curve).",
        typicalQuestionForms: [
          "Which structure benefits from the expected curve move?",
          "Explain rolldown/riding the yield curve.",
        ],
        mustKnow: [
          "Barbells outperform bullets when the curve flattens (with more convexity); bullets outperform when it steepens (for the same duration).",
          "Riding the curve (rolldown) earns extra return when the curve is upward-sloping and stable, as bonds roll to lower yields.",
          "Duration positions for level; barbell/bullet and butterfly positions for slope/curvature.",
        ],
        scoringActions: [
          "Match bullet/barbell/laddered structures to the expected curve reshaping.",
          "Attribute rolldown return to an upward-sloping, stable curve.",
        ],
      },
      {
        id: "tp3",
        title: "Credit strategy and management",
        priority: "high",
        examinerFocus:
          "Positioning credit exposure across the cycle, spread analysis, and measuring the excess return and risk of credit.",
        typicalQuestionForms: [
          "How should credit exposure change over the cycle?",
          "Decompose the expected excess return of a credit bond.",
        ],
        mustKnow: [
          "Add credit/lower quality in early expansion; reduce/up-in-quality late cycle and pre-recession.",
          "Expected excess return ≈ spread − (change in spread × spread duration) − (expected loss = PD × LGD).",
          "Spread duration measures sensitivity to spread changes; carry and rolldown add to credit returns.",
        ],
        scoringActions: [
          "Time credit beta to the cycle (add early, reduce late).",
          "Compute expected excess return as spread carry minus spread-change and loss effects.",
        ],
      },
      {
        id: "tp4",
        title: "Fixed-income return measurement and leverage",
        priority: "medium",
        examinerFocus:
          "Decomposing bond return (yield income, rolldown, price change from yield/spread change) and the effect of leverage/repo on returns and risk.",
        typicalQuestionForms: [
          "Decompose a bond's expected return.",
          "Effect of leverage/repo on portfolio return and risk.",
        ],
        mustKnow: [
          "Expected return ≈ yield income + rolldown return + expected price change from yield/spread views − credit losses ± currency.",
          "Leverage magnifies both returns and risk; the funding cost (repo rate) is subtracted from the asset return on the borrowed portion.",
          "Return on leveraged portfolio = rp + (borrowed/equity) × (rp − funding cost).",
        ],
        scoringActions: [
          "Assemble the return decomposition components.",
          "Apply the leverage return formula and note the amplified risk.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Fixed-income portfolio management is high-yield at L3; secure immunisation and curve marks (net >65%).",
      timeBudget: "~1.5 min per point of credit; immunisation and return-decomposition items reward structure.",
      answerSequence: [
        "Identify the objective (immunise, curve view, credit view).",
        "Apply the relevant condition/formula (duration match, structure, excess return).",
        "State rebalancing and residual risks.",
      ],
      qualityChecks: [
        "Duration matched and PV(assets) ≥ PV(liabilities), with rebalancing noted?",
        "Excess-return decomposition includes spread change and expected loss?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Immunisation and liability-driven investing",
        testPointIds: ["tp1"],
        explanation: [
          "Immunisation protects a portfolio's ability to meet a future liability against interest-rate changes. For a single liability, the classic conditions are: set the portfolio's Macaulay duration equal to the liability's horizon (investment horizon), and ensure the present value of assets is at least the present value of the liability. This balances price risk (bond prices fall when yields rise) against reinvestment risk (coupons reinvest at higher yields), so the two offset at the horizon.",
          "Immunisation is not a set-and-forget strategy. As time passes, the portfolio's duration and the liability's horizon change at different rates, and yield movements alter durations, so the portfolio must be rebalanced periodically to keep duration matched. Failure to rebalance leaves the portfolio exposed to a mismatch and the target return is no longer locked in.",
          "For multiple liabilities, matching duration alone is insufficient; the asset portfolio must also have greater dispersion of cash flows (convexity) than the liabilities so it remains immunised against non-parallel curve shifts, while providing adequate cash-flow coverage for each payment. An alternative is cash-flow matching (a dedicated portfolio whose cash flows exactly meet each liability), which eliminates rebalancing but is more constrained and often costlier. These liability-driven techniques underpin pension and insurance asset management.",
        ],
        keyRules: [
          "Single liability: duration = horizon and PV(assets) ≥ PV(liability).",
          "Rebalance to maintain the duration match as time and yields change.",
          "Multiple liabilities: asset dispersion/convexity > liability dispersion, with cash-flow coverage.",
        ],
        workedProblem: {
          scenario:
            "A pension owes $10,000,000 in exactly 7 years. Current yields are 5%. Describe how to immunise this single liability and explain what must happen over the next few years to keep the immunisation intact.",
          steps: [
            "Compute the present value of the liability: PV = 10,000,000/(1.05)^7 = 10,000,000/1.40710 = $7,106,813; the portfolio must have at least this present value.",
            "Set the portfolio's Macaulay duration equal to the 7-year horizon by choosing bonds (or a barbell/bullet combination) whose weighted duration is 7.",
            "This balances price and reinvestment risk: if yields rise, lower bond prices are offset by higher reinvestment income by year 7, and vice versa.",
            "Rebalance over time: as the horizon shortens and yields move, the portfolio's duration will drift from the (declining) remaining horizon, so periodically adjust holdings to re-match duration.",
          ],
          conclusion:
            "Fund the liability with a bond portfolio of present value ≥ $7.11m and Macaulay duration equal to the 7-year horizon, then rebalance periodically to keep duration matched as time passes and yields change — otherwise the immunisation degrades and the $10m target is no longer assured.",
          markingNotes: [
            "Computes liability PV and requires PV(assets) ≥ PV(liability).",
            "Sets duration = 7-year horizon.",
            "Explains the need for ongoing rebalancing.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Yield-curve strategies",
        testPointIds: ["tp2"],
        explanation: [
          "Active fixed-income managers position for expected changes in the yield curve's level, slope, and curvature. Duration controls exposure to parallel (level) shifts: lengthen duration when yields are expected to fall, shorten when they are expected to rise. For a given duration, the choice among bullet (concentrated at one maturity), barbell (short and long maturities), and laddered structures expresses slope and curvature views.",
          "The classic result is that, holding duration constant, a barbell has more convexity than a bullet and therefore outperforms when the curve flattens or when volatility is high, while a bullet outperforms when the curve steepens. Butterfly trades (long the wings, short the belly, or vice versa) isolate curvature changes. Selecting the structure that profits from the specific expected reshaping is a core exam skill.",
          "Even without a directional view, an upward-sloping and stable curve offers rolldown (riding the curve) return: as a bond ages, it 'rolls down' to lower yields on the curve, gaining price in addition to its coupon. This carry-and-rolldown return is a reliable source of excess return when the curve is upward-sloping and expected to remain stable, and it is a component of the total expected-return decomposition.",
        ],
        keyRules: [
          "Duration positions for level; structure (bullet/barbell) for slope/curvature.",
          "Barbell (more convexity) wins on flattening; bullet wins on steepening.",
          "Rolldown adds return on an upward-sloping, stable curve.",
        ],
      },
      {
        id: "sn3",
        title: "Credit strategy and leveraged returns",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "Credit positioning is timed to the cycle: in early expansion, spreads are wide and default risk is falling, so adding credit and moving down in quality is rewarded; late in the cycle and ahead of recessions, spreads are tight and default risk is rising, so reducing credit beta and moving up in quality protects the portfolio. The expected excess return of a credit bond can be decomposed as approximately the spread (carry) minus the effect of an expected spread change (spread duration × change in spread) minus expected credit losses (probability of default × loss given default), plus any rolldown.",
          "Spread duration measures a bond's price sensitivity to changes in its credit spread and is the key risk metric for credit positioning; carry and rolldown add to returns while spread widening and defaults subtract. A complete credit view weighs the spread earned against the risk of spread widening and losses over the horizon.",
          "Leverage (often via repurchase agreements) amplifies both return and risk. The return on a leveraged portfolio is the unlevered return plus the borrowed-to-equity ratio times the spread between the portfolio return and the funding cost: rE = rp + (borrowed/equity) × (rp − funding cost). When the asset return exceeds the repo funding cost, leverage boosts equity returns; when it falls short, losses are magnified, and rising funding costs or margin calls can force deleveraging at the worst time. Leverage must therefore be sized against liquidity and risk limits.",
        ],
        keyRules: [
          "Add credit early cycle; reduce/up-in-quality late cycle.",
          "Excess return ≈ spread − (spread duration × Δspread) − (PD × LGD) + rolldown.",
          "Leveraged return = rp + (borrowed/equity)(rp − funding cost); risk is amplified.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L3 constructed response — immunisation",
        question:
          "Explain why an immunised single-liability portfolio must be rebalanced over time, and state the two initial conditions for immunisation.",
        answerPlan: [
          "State the two conditions.",
          "Explain rebalancing need.",
        ],
        modelAnswer:
          "The two initial conditions are: (1) set the portfolio's Macaulay duration equal to the liability's investment horizon, and (2) ensure the present value of the assets is at least the present value of the liability. Rebalancing is required because, as time passes and yields change, the portfolio's duration and the remaining horizon change at different rates, causing a duration mismatch. If left unmanaged, this mismatch re-exposes the portfolio to interest-rate risk and the target funding is no longer locked in, so the manager must periodically re-match duration.",
        markingGuide: [
          "States duration = horizon and PV(assets) ≥ PV(liability).",
          "Explains duration drift necessitates rebalancing.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L3 constructed response — curve strategy",
        question:
          "A manager expects the yield curve to flatten (long yields falling relative to short yields) while keeping portfolio duration unchanged. Recommend a structure and explain why it benefits.",
        answerPlan: [
          "Select barbell.",
          "Explain convexity benefit.",
        ],
        modelAnswer:
          "The manager should tilt toward a barbell structure (holding short and long maturities) rather than a duration-matched bullet. For the same duration, a barbell has greater convexity and more exposure to the long end, so it benefits more when long yields fall in a flattening. The bullet, concentrated in the intermediate maturity, would gain less from the fall in long yields. The barbell's higher convexity also provides better performance if rate volatility is high.",
        markingGuide: [
          "Recommends a barbell for a flattening with constant duration.",
          "Explains the convexity/long-end benefit.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L3 constructed response — leverage",
        question:
          "A manager funds an additional $50m of bonds (yielding 6%) using repo at 4%, on a $100m equity base. Compute the levered return on equity if the unlevered portfolio returns 6%.",
        answerPlan: [
          "Apply the leverage return formula.",
        ],
        modelAnswer:
          "Levered return = rp + (borrowed/equity) × (rp − funding cost) = 6% + (50/100) × (6% − 4%) = 6% + 0.5 × 2% = 6% + 1% = 7%. The leverage adds 1% to the equity return because the 6% asset return exceeds the 4% repo cost; however, if the asset return fell below 4%, the same leverage would magnify the loss, and rising repo rates or margin calls could force deleveraging.",
        markingGuide: [
          "Applies rp + (borrowed/equity)(rp − funding cost).",
          "Levered return = 7%; notes amplified downside risk.",
        ],
      },
    ],
  }),

  "cfa-l3-m7": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "The role of equities and active vs passive choice",
        priority: "high",
        examinerFocus:
          "Justifying the equity allocation's role (growth, inflation-hedging, income) and choosing active, passive, or factor approaches given costs and beliefs.",
        typicalQuestionForms: [
          "Recommend active vs passive given the client's beliefs and costs.",
          "What role does the equity allocation play in the portfolio?",
        ],
        mustKnow: [
          "Equities provide long-term capital growth, partial inflation protection, and dividend income.",
          "Passive is favoured when markets are efficient and fees matter; active/factor when there is skill/inefficiency and a fee budget.",
          "Factor (smart-beta) investing targets rewarded factors (value, size, momentum, quality, low-vol) systematically.",
        ],
        scoringActions: [
          "Tie the active/passive recommendation to market efficiency beliefs and cost sensitivity.",
          "Identify the equity allocation's specific role in the total portfolio.",
        ],
      },
      {
        id: "tp2",
        title: "Building equity portfolios: factor exposures and concentration",
        priority: "critical",
        examinerFocus:
          "Constructing portfolios by factor tilt, controlling active risk, and understanding the trade-off between concentration and diversification.",
        typicalQuestionForms: [
          "How does the described strategy tilt factor exposures?",
          "Evaluate the active risk / diversification of a concentrated portfolio.",
        ],
        mustKnow: [
          "Active share and tracking error measure how much a portfolio differs from its benchmark.",
          "Concentrated, high-conviction portfolios have high active share but higher idiosyncratic risk.",
          "Factor tilts should be intentional and consistent with the manager's edge and the mandate.",
        ],
        scoringActions: [
          "Distinguish active share (holdings difference) from tracking error (return difference).",
          "Assess whether concentration is compensated by expected alpha.",
        ],
      },
      {
        id: "tp3",
        title: "Passive equity implementation",
        priority: "medium",
        examinerFocus:
          "Choosing among full replication, stratified sampling, and optimisation to track an index, and minimising tracking error and costs.",
        typicalQuestionForms: [
          "Which replication method suits the index/portfolio size?",
          "What causes tracking error in an index fund?",
        ],
        mustKnow: [
          "Full replication suits liquid, narrow indices; sampling/optimisation suit broad or illiquid indices to control costs.",
          "Sources of tracking error: fees, cash drag, transaction costs, and imperfect replication.",
          "Index reconstitution and corporate actions require careful, low-cost trading.",
        ],
        scoringActions: [
          "Match the replication method to index breadth/liquidity and cost constraints.",
          "Attribute tracking error to fees, cash drag, and sampling.",
        ],
      },
      {
        id: "tp4",
        title: "Equity manager selection and style analysis",
        priority: "high",
        examinerFocus:
          "Analysing a manager's style (holdings vs returns-based), consistency, and evaluating skill versus factor exposure.",
        typicalQuestionForms: [
          "Interpret returns-based vs holdings-based style analysis.",
          "Is the manager's outperformance skill or factor exposure?",
        ],
        mustKnow: [
          "Returns-based style analysis regresses fund returns on style indices; holdings-based examines actual positions.",
          "Style drift (inconsistency) is a red flag; skill is alpha net of factor exposures and fees.",
          "Attribution should separate factor (beta) contributions from selection (alpha).",
        ],
        scoringActions: [
          "Compare returns-based and holdings-based style conclusions.",
          "Strip out factor exposure before crediting the manager with skill.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Equity portfolio management supports allocation and manager-selection answers; net >65%.",
      timeBudget: "~1.5 min per point of credit; active-share/tracking-error and style items are high-yield.",
      answerSequence: [
        "Identify the sub-topic (role, construction, passive, selection).",
        "Apply the relevant concept (active share vs TE, replication method, style analysis).",
        "Recommend and justify from beliefs, costs, and the mandate.",
      ],
      qualityChecks: [
        "Did I distinguish active share from tracking error?",
        "Did I separate factor exposure from genuine skill?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Role of equities and the active-passive decision",
        testPointIds: ["tp1"],
        explanation: [
          "Equities serve several roles in a portfolio: long-term capital appreciation (the primary driver of real growth), partial inflation protection (as revenues and earnings can rise with prices), and dividend income. Their role and appropriate weight depend on the investor's objectives, horizon, and risk tolerance, and on the equity allocation's place within the total (multi-asset) portfolio.",
          "The active-versus-passive decision hinges on beliefs about market efficiency and on costs. Where markets are highly efficient and fee sensitivity is high, passive indexing is favoured because active management, on average and net of fees, struggles to beat the market. Where the manager (or the market segment) offers genuine inefficiency and skill, and the fee budget allows, active management can add value. Factor (smart-beta) investing occupies a middle ground, systematically and cheaply capturing rewarded factors — value, size, momentum, quality, and low volatility — without traditional discretionary stock-picking.",
          "A sound recommendation ties the choice explicitly to the client's beliefs and constraints: efficient market beliefs and cost sensitivity point to passive/factor approaches; conviction in specific manager skill and inefficiency, with tolerance for fees and active risk, supports active management. Blended core-satellite structures (passive core plus active/factor satellites) are common compromises.",
        ],
        keyRules: [
          "Equities provide growth, inflation protection, and income.",
          "Passive/factor for efficient markets and cost sensitivity; active for skill/inefficiency.",
          "Core-satellite blends passive core with active/factor satellites.",
        ],
      },
      {
        id: "sn2",
        title: "Constructing equity portfolios",
        testPointIds: ["tp2", "tp3"],
        explanation: [
          "Portfolio construction is measured by how much it departs from the benchmark. Active share quantifies the proportion of holdings that differ from the benchmark (a holdings-based measure), while tracking error (active risk) measures the volatility of the return difference from the benchmark (a returns-based measure). A concentrated, high-conviction portfolio has high active share and often high tracking error, expressing strong views but bearing more idiosyncratic risk; a diversified, benchmark-aware portfolio has lower active share and tracking error.",
          "Factor tilts should be intentional and consistent with the manager's edge and the mandate. A value manager deliberately overweights cheap stocks; a quality manager tilts to profitable, low-leverage firms. Unintended factor exposures can dominate returns and be mistaken for skill, so both intended and residual factor exposures should be monitored. Concentration is justified only when the expected alpha compensates for the added idiosyncratic risk.",
          "Passive implementation chooses among full replication (holding every index constituent in index weights, best for liquid, narrow indices), stratified sampling (holding a representative subset matched on key characteristics), and optimisation (minimising tracking error subject to constraints) — the latter two used for broad or illiquid indices to control transaction costs. Tracking error in index funds arises from fees, cash drag, transaction costs, and imperfect replication, and reconstitution/corporate-action trading must be executed cheaply to minimise it.",
        ],
        keyRules: [
          "Active share = holdings difference; tracking error = return-difference volatility.",
          "Concentration adds idiosyncratic risk; justify with expected alpha.",
          "Replication: full (narrow/liquid), sampling/optimisation (broad/illiquid).",
        ],
        workedProblem: {
          scenario:
            "Two funds track the same benchmark. Fund A holds 40 of the benchmark's 500 stocks in high-conviction weights; Fund B holds all 500 near index weights with small tilts. Fund A has a tracking error of 6% and an active share of 85%; Fund B has a tracking error of 1.5% and an active share of 25%. Interpret these figures and state which is 'closet indexing'.",
          steps: [
            "Interpret active share: Fund A (85%) differs substantially from the benchmark holdings; Fund B (25%) closely mirrors it.",
            "Interpret tracking error: Fund A (6%) has high return-difference volatility (large active bets); Fund B (1.5%) stays close to benchmark returns.",
            "Combine: Fund A is a genuinely active, concentrated, high-conviction manager; Fund B takes little active risk.",
            "Identify closet indexing: Fund B, with low active share and low tracking error but charging active fees, resembles closet indexing — paying active fees for near-benchmark exposure.",
          ],
          conclusion:
            "Fund A is truly active (high active share and tracking error, high conviction); Fund B is effectively a closet indexer (low active share/tracking error). If Fund B charges active fees, the client is overpaying for near-index performance and should prefer a cheaper index fund or a genuinely active manager.",
          markingNotes: [
            "Correctly interprets active share vs tracking error.",
            "Identifies Fund B as closet indexing.",
            "Draws the fee/value implication for the client.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Manager selection and style analysis",
        testPointIds: ["tp4"],
        explanation: [
          "Evaluating equity managers requires separating genuine skill from mere factor exposure. Returns-based style analysis regresses a fund's returns on a set of style indices (e.g. large/small, value/growth) to infer its effective style mix without needing holdings; it is quick but can lag actual positioning. Holdings-based style analysis examines the actual portfolio, giving a precise, current picture at the cost of requiring detailed data. Comparing the two can reveal style drift — inconsistency between stated and actual style — which is a red flag for discipline.",
          "True skill is alpha net of factor exposures and fees: a manager who outperforms simply by tilting toward rewarded factors (value, small-cap) is capturing factor premia that could be obtained more cheaply, not demonstrating selection skill. Performance attribution should therefore decompose returns into factor (beta) contributions and a residual selection (alpha) component.",
          "Manager due diligence extends beyond performance to process, people, and consistency: a repeatable, well-articulated investment process; a stable, capable team; and consistency of style and risk-taking over time. Past outperformance driven by factor exposure or a single lucky period is not evidence of persistent skill, so evaluators weight process and risk-adjusted, factor-adjusted performance over raw returns.",
        ],
        keyRules: [
          "Returns-based (regression on style indices) vs holdings-based style analysis.",
          "Skill = alpha net of factor exposures and fees; watch for style drift.",
          "Weigh process, people, and consistency, not just raw returns.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L3 constructed response — active share vs tracking error",
        question:
          "Distinguish active share from tracking error and explain how a fund can have high active share but relatively modest tracking error.",
        answerPlan: [
          "Define both.",
          "Explain the diversified-bets case.",
        ],
        modelAnswer:
          "Active share measures the percentage of a portfolio's holdings that differ from the benchmark; tracking error measures the volatility of the portfolio's return relative to the benchmark. A fund can have high active share but modest tracking error if it makes many diversified, benchmark-agnostic bets across sectors and stocks whose active positions are largely uncorrelated — the individual differences are large (high active share) but they offset one another so the aggregate return deviation is small (modest tracking error). This is typical of diversified stock-pickers, as opposed to concentrated factor/sector bets that produce both high active share and high tracking error.",
        markingGuide: [
          "Correctly defines active share (holdings) and tracking error (returns).",
          "Explains diversified uncorrelated bets reconcile high active share with modest TE.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L3 constructed response — skill vs factor",
        question:
          "A small-cap value manager beat the broad market index by 3% last year. Explain what analysis is needed before attributing this outperformance to skill.",
        answerPlan: [
          "Adjust for factor exposure.",
        ],
        modelAnswer:
          "Before crediting skill, the outperformance must be adjusted for the manager's factor exposures. A small-cap value tilt captures the size and value premia, which may have driven much of the 3% simply because those factors outperformed the broad market. The correct analysis benchmarks the manager against an appropriate small-cap value index (or runs a factor regression) and measures the residual alpha net of factor exposures and fees. Only alpha that remains after removing factor contributions reflects genuine selection skill.",
        markingGuide: [
          "Recognises the size/value factor exposure.",
          "Requires factor-adjusted alpha (appropriate benchmark/regression) net of fees.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp1"],
        style: "L3 constructed response — active vs passive",
        question:
          "A cost-sensitive client believes large-cap developed equity markets are highly efficient but that emerging markets are less efficient. Recommend an implementation approach for each and justify.",
        answerPlan: [
          "Passive for efficient, active for inefficient.",
        ],
        modelAnswer:
          "For the large-cap developed allocation, use passive index (or factor) implementation: given the client's belief in efficiency and cost sensitivity, active managers are unlikely to beat the index net of fees, so low-cost indexing maximises expected net return. For emerging markets, where the client believes inefficiencies exist, active management (or a skilled factor approach) is justified because skill can add value there, and the higher fees may be warranted by the greater alpha opportunity. This core-satellite structure aligns implementation with the client's efficiency beliefs and cost sensitivity.",
        markingGuide: [
          "Passive for efficient developed markets; active for inefficient emerging markets.",
          "Justifies each with efficiency beliefs and cost sensitivity.",
        ],
      },
    ],
  }),

  "cfa-l3-m8": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Role of alternatives in a portfolio",
        priority: "high",
        examinerFocus:
          "Justifying alternatives by their diversification, return-enhancement, and inflation/income roles, and matching a category to an objective.",
        typicalQuestionForms: [
          "Which alternative fits the stated portfolio objective?",
          "What role does the alternative play (diversifier, growth, income, inflation hedge)?",
        ],
        mustKnow: [
          "Alternatives can diversify (low correlation), enhance return (illiquidity premium), hedge inflation (real assets), or provide income (real estate/infrastructure).",
          "Liquidity, fees, and operational complexity are the main costs.",
          "Reported returns are smoothed/biased; true risk and correlation are higher than reported.",
        ],
        scoringActions: [
          "Match the alternative category to the specific portfolio role required.",
          "Adjust reported risk/correlation upward for smoothing before allocating.",
        ],
      },
      {
        id: "tp2",
        title: "Due diligence and manager selection for alternatives",
        priority: "critical",
        examinerFocus:
          "Conducting investment and operational due diligence, and evaluating fees, liquidity terms, and valuation policies.",
        typicalQuestionForms: [
          "Which due-diligence red flag is present?",
          "Evaluate the fee/liquidity terms.",
        ],
        mustKnow: [
          "Operational due diligence covers valuation policy, independent custody/administration, and manager integrity.",
          "Fee terms (management + incentive, high-water marks, hurdles) and liquidity (lock-ups, gates, redemption notice) materially affect net outcomes.",
          "Style drift, opaque valuation, and weak controls are red flags regardless of returns.",
        ],
        scoringActions: [
          "Separate investment due diligence (strategy/edge) from operational due diligence (controls).",
          "Flag opaque valuation, weak custody, and unfavourable liquidity terms.",
        ],
      },
      {
        id: "tp3",
        title: "Risk, return, and portfolio construction with alternatives",
        priority: "high",
        examinerFocus:
          "Using non-normal risk measures, modelling illiquidity and cash-flow (capital call) dynamics, and sizing allocations.",
        typicalQuestionForms: [
          "Which risk measure suits the alternative's return distribution?",
          "How do capital calls/illiquidity affect allocation sizing?",
        ],
        mustKnow: [
          "Non-normal returns (negative skew, fat tails) require downside measures (VaR, CVaR, max drawdown).",
          "Private funds have a commitment/drawdown/distribution (J-curve) cash-flow pattern requiring a commitment strategy to reach a target allocation.",
          "Illiquidity limits rebalancing and requires a liquidity reserve for capital calls and spending.",
        ],
        scoringActions: [
          "Use downside/tail measures rather than standard deviation for alternatives.",
          "Plan commitments and a liquidity buffer to manage the drawdown pattern.",
        ],
      },
      {
        id: "tp4",
        title: "Monitoring and the illiquidity/valuation challenge",
        priority: "medium",
        examinerFocus:
          "Ongoing monitoring, unsmoothing returns for true risk, and comparing performance appropriately.",
        typicalQuestionForms: [
          "Why do appraisal-based returns understate risk?",
          "How should alternative performance be benchmarked?",
        ],
        mustKnow: [
          "Appraisal/stale pricing smooths returns, understating volatility and correlation.",
          "Unsmoothing techniques and public-market equivalents (PME) improve comparison.",
          "Benchmarks must reflect the strategy, vintage, and illiquidity (e.g. peer/vintage comparisons for private funds).",
        ],
        scoringActions: [
          "Unsmooth appraisal-based returns before assessing risk.",
          "Use vintage-year peer comparisons or PME for private-fund benchmarking.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Alternatives portfolio management supports allocation and due-diligence answers; net >65%.",
      timeBudget: "~1.5 min per point of credit; due-diligence and risk-measure items are high-yield.",
      answerSequence: [
        "Identify the alternative's role and the relevant issue (DD, risk, liquidity).",
        "Apply the concept (downside measures, commitment strategy, unsmoothing).",
        "Recommend and flag residual risks (illiquidity, valuation).",
      ],
      qualityChecks: [
        "Did I adjust reported risk/correlation for smoothing?",
        "Did I plan for capital calls and liquidity needs?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Role of alternatives and portfolio construction",
        testPointIds: ["tp1", "tp3"],
        explanation: [
          "Alternatives are added to a portfolio for specific roles: diversification (low correlation with traditional assets), return enhancement (harvesting illiquidity and complexity premia), inflation hedging (real assets such as real estate, infrastructure, and commodities), and income (contractual cash flows from real estate/infrastructure and private debt). A sound recommendation matches the specific alternative to the role the portfolio needs, rather than adding alternatives generically.",
          "Because alternative returns are non-normal — exhibiting negative skew and fat tails — standard deviation understates their risk. Portfolio construction should use downside and tail measures (value at risk, conditional VaR/expected shortfall, maximum drawdown) and should adjust reported volatility and correlation upward, since appraisal-based pricing smooths returns and makes diversification look better than it truly is.",
          "Private alternatives introduce cash-flow dynamics that shape allocation. Capital is committed and then drawn down over time (with early fees and write-downs producing the J-curve), and distributions arrive later. To reach and maintain a target allocation, investors run a commitment strategy — committing more than the target because capital is drawn gradually — and hold a liquidity reserve to meet capital calls and spending. Illiquidity also limits rebalancing, so the allocation must be sized for the investor's true liquidity tolerance.",
        ],
        keyRules: [
          "Match the alternative to its role: diversify, enhance return, hedge inflation, income.",
          "Use downside/tail risk measures; adjust for smoothing.",
          "Plan a commitment strategy and liquidity reserve for capital calls.",
        ],
        workedProblem: {
          scenario:
            "An endowment wants a 20% allocation to private equity but capital is drawn gradually and distributions reduce the balance. Explain why the endowment must over-commit to reach the 20% target, and identify two liquidity risks it must manage.",
          steps: [
            "Recognise the drawdown pattern: committed capital is not invested immediately; it is called over several years, so committed capital greatly exceeds invested capital early on.",
            "Because distributions from maturing funds also return capital, the net invested balance at any time is well below cumulative commitments.",
            "To keep ~20% actually invested, the endowment must commit more than 20% (over-commit) across vintage years so that new calls replace distributions and maintain the target NAV.",
            "Identify liquidity risks: (a) meeting unpredictable capital calls (needs a liquidity reserve), and (b) the denominator effect — if public markets fall, the private allocation can exceed target and cannot be easily sold to rebalance.",
          ],
          conclusion:
            "The endowment must over-commit across vintage years because capital is drawn gradually and offset by distributions, so committed capital far exceeds invested capital. It must manage the risk of funding capital calls (via a liquidity reserve) and the denominator effect that can push the illiquid allocation above target in a downturn.",
          markingNotes: [
            "Explains gradual drawdown and distribution offset requiring over-commitment.",
            "Identifies capital-call funding risk and a liquidity reserve.",
            "Identifies the denominator effect / rebalancing constraint.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Due diligence for alternatives",
        testPointIds: ["tp2"],
        explanation: [
          "Alternatives demand deeper due diligence than public assets because they are less regulated, less transparent, and less liquid. Investment due diligence evaluates the strategy, the source of the manager's edge, the repeatability of the process, and the alignment of the team. Operational due diligence — often the differentiator between success and blow-ups — examines the valuation policy (who values illiquid positions and how independently), the independence of custody and fund administration, cash controls, compliance, and the integrity and track record of the principals.",
          "Fee and liquidity terms materially affect net outcomes and must be scrutinised. Fee structures (management plus incentive fees, high-water marks, hurdle rates, and, for funds-of-funds, a second fee layer) determine how much of the gross return the investor keeps. Liquidity terms — lock-up periods, redemption notice periods, and gates that limit withdrawals in stress — determine whether the investor can access capital when needed.",
          "Red flags override attractive headline returns: opaque or manager-controlled valuation of illiquid assets, lack of independent administration or custody, style drift away from the stated strategy, unusually smooth returns (possible marking manipulation), and key-person or governance weaknesses. A rigorous evaluator will decline an investment with strong past performance but weak operational controls.",
        ],
        keyRules: [
          "Separate investment DD (strategy/edge) from operational DD (controls).",
          "Scrutinise fees (incentive, high-water mark, hurdle) and liquidity (lock-ups, gates).",
          "Opaque valuation, weak custody, and style drift are disqualifying red flags.",
        ],
      },
      {
        id: "sn3",
        title: "Monitoring, unsmoothing, and benchmarking",
        testPointIds: ["tp4"],
        explanation: [
          "Ongoing monitoring of alternatives focuses on whether the manager is executing the agreed strategy, whether operational controls remain sound, and whether performance is consistent with the thesis. Because valuations are infrequent and often appraisal-based, monitoring must look beyond reported NAVs to underlying drivers and cash flows.",
          "Appraisal or stale pricing smooths reported returns, artificially lowering measured volatility and correlation with public markets. This makes risk look lower and diversification benefits look larger than they truly are. Analysts apply unsmoothing techniques to reported return series to recover a more realistic risk profile before feeding these inputs into allocation and risk models.",
          "Benchmarking must reflect the strategy, vintage, and illiquidity of the investment. For private funds, appropriate comparisons include vintage-year peer-group rankings (comparing funds that began investing in the same period) and the public-market equivalent (PME), which measures the private fund's performance against a public index adjusted for the timing of cash flows. Using an inappropriate public benchmark for an illiquid private fund overstates or understates skill and should be avoided.",
        ],
        keyRules: [
          "Appraisal/stale pricing smooths returns, understating risk and correlation.",
          "Unsmooth reported returns before risk analysis.",
          "Benchmark private funds by vintage-year peers and PME.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2"],
        style: "L3 constructed response — due diligence",
        question:
          "In evaluating a hedge fund with strong reported returns, an analyst finds the manager values illiquid positions internally with no independent administrator, and returns are unusually smooth. Assess these findings.",
        answerPlan: [
          "Identify operational red flags.",
          "State the conclusion.",
        ],
        modelAnswer:
          "These are serious operational due-diligence red flags. Manager-controlled valuation of illiquid positions with no independent administrator creates a conflict of interest and the risk of marking positions to flatter performance; unusually smooth returns are consistent with such marking or with stale valuations that understate true volatility. Regardless of the strong headline returns, the lack of independent valuation and administration undermines confidence in both the reported performance and the risk statistics. The analyst should require independent administration/custody and a transparent, third-party valuation policy before investing, and should decline if these are absent.",
        markingGuide: [
          "Identifies manager-controlled valuation and lack of independent administration as red flags.",
          "Concludes performance/risk cannot be trusted; requires independent valuation/custody.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp3"],
        style: "L3 constructed response — risk measurement",
        question:
          "Explain why standard deviation is inadequate for measuring the risk of an alternative investment with negatively skewed, fat-tailed returns, and name two better measures.",
        answerPlan: [
          "Explain the non-normality issue.",
          "Name downside measures.",
        ],
        modelAnswer:
          "Standard deviation assumes a symmetric (normal) distribution and treats upside and downside deviations equally, so it fails to capture the elevated probability of large losses in a negatively skewed, fat-tailed distribution — it understates the true tail risk. Better measures focus on the downside: value at risk (VaR) or, preferably, conditional VaR/expected shortfall (the average loss beyond the VaR threshold), and maximum drawdown (the largest peak-to-trough loss). These capture the severity and likelihood of extreme adverse outcomes that standard deviation misses.",
        markingGuide: [
          "Explains standard deviation's symmetry/normality limitation.",
          "Names two downside measures (e.g. CVaR/expected shortfall, max drawdown).",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L3 constructed response — benchmarking",
        question:
          "Why is comparing a private equity fund's IRR directly to a public equity index return misleading, and what alternative comparison is more appropriate?",
        answerPlan: [
          "Explain the mismatch.",
          "Recommend PME/vintage peers.",
        ],
        modelAnswer:
          "A direct comparison is misleading because the private fund's IRR is money-weighted and driven by the timing of capital calls and distributions, its returns are appraisal-based and smoothed, and it bears illiquidity and vintage-specific risks that a public index return does not. More appropriate comparisons are the public-market equivalent (PME), which replicates the fund's exact cash-flow timing in a public index to give a like-for-like measure, and vintage-year peer-group rankings that compare the fund to other private funds started in the same period. These control for cash-flow timing and vintage effects.",
        markingGuide: [
          "Explains cash-flow-timing/illiquidity/vintage mismatch.",
          "Recommends PME and/or vintage-year peer comparison.",
        ],
      },
    ],
  }),

  "cfa-l3-m9": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Constructing a private-client IPS",
        priority: "critical",
        examinerFocus:
          "Building the return objective and risk tolerance and the five constraints (liquidity, time horizon, taxes, legal, unique) for an individual, and computing the required return.",
        typicalQuestionForms: [
          "State and justify the return objective / risk tolerance.",
          "Compute the required after-tax, inflation-adjusted return.",
        ],
        mustKnow: [
          "Risk tolerance combines ability (wealth, horizon, flexibility) and willingness (attitude); use the lower unless resolved by education.",
          "Return requirement should be stated after tax and, where relevant, real (inflation-adjusted); do not simply add inflation to a real spending rate for taxable accounts.",
          "Constraints: liquidity (spending, reserves), time horizon (often multistage), taxes, legal/regulatory, unique circumstances.",
        ],
        scoringActions: [
          "Reconcile ability and willingness explicitly and take the more conservative unless justified.",
          "Compute the required return grossing up for taxes and adjusting for inflation as appropriate.",
        ],
      },
      {
        id: "tp2",
        title: "Taxes and tax-efficient management",
        priority: "high",
        examinerFocus:
          "Applying tax regimes to returns, asset location, and tax-loss harvesting, and computing after-tax returns and the tax drag.",
        typicalQuestionForms: [
          "Compute the after-tax return / future value under a tax regime.",
          "Recommend asset location and tax-loss harvesting.",
        ],
        mustKnow: [
          "After-tax return depends on the mix of income (ordinary), dividends, and deferred capital gains; deferral and lower gains rates reduce tax drag.",
          "Asset location: hold tax-inefficient assets (bonds/high turnover) in tax-deferred accounts and tax-efficient assets (equities) in taxable accounts.",
          "Tax-loss harvesting realises losses to offset gains, improving after-tax returns.",
        ],
        scoringActions: [
          "Compute after-tax returns using the applicable rates and deferral benefit.",
          "Locate tax-inefficient assets in sheltered accounts; harvest losses.",
        ],
      },
      {
        id: "tp3",
        title: "Wealth transfer and estate planning",
        priority: "high",
        examinerFocus:
          "Comparing lifetime gifts versus bequests, and applying core estate-planning tools and the relative value of gifting.",
        typicalQuestionForms: [
          "Is a lifetime gift or a bequest more tax-efficient?",
          "Which estate-planning tool addresses the objective?",
        ],
        mustKnow: [
          "The relative value of a tax-free gift over a bequest rises with the donee's investment horizon and return, and with the difference in tax treatment.",
          "Tools: trusts, life insurance, gifting, and jurisdiction/estate structures; consider control, creditor protection, and tax.",
          "Gifting early lets returns compound in the donee's (often lower-tax) hands.",
        ],
        scoringActions: [
          "Compare the after-tax future value of gifting now versus bequeathing later.",
          "Match the estate tool to the client's control/tax/protection objective.",
        ],
      },
      {
        id: "tp4",
        title: "Concentrated positions and wealth-manager practice",
        priority: "medium",
        examinerFocus:
          "Managing concentrated single-asset risk (public stock, private business, real estate) and understanding client relationship/behavioral management.",
        typicalQuestionForms: [
          "Recommend a strategy to diversify a concentrated position.",
          "Address the behavioral/tax obstacles to diversification.",
        ],
        mustKnow: [
          "Techniques for concentrated public stock: outright sale, staged selling, exchange funds, hedging (collars), and charitable trusts.",
          "Tax and behavioral (endowment/overconfidence) obstacles impede diversification.",
          "Private business/real estate concentration requires liquidity and succession planning.",
        ],
        scoringActions: [
          "Match the diversification technique to the asset type and tax/behavioral constraints.",
          "Address both the tax cost and the behavioral resistance to diversifying.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Private wealth is a top-weight L3 topic (IPS is heavily tested); net >70% on IPS and required-return marks.",
      timeBudget: "~1.5 min per point of credit; required-return calculations and IPS objectives are the biggest earners.",
      answerSequence: [
        "State the return objective and risk tolerance (reconcile ability and willingness).",
        "Compute the required return (after-tax, inflation-adjusted as needed).",
        "Address the five constraints and any wealth-transfer/concentration issues.",
      ],
      qualityChecks: [
        "Did I take the lower of ability/willingness unless justified?",
        "Did I gross up for taxes and adjust for inflation correctly?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The individual IPS and required return",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "The individual investment policy statement sets return and risk objectives and documents constraints. Risk tolerance has two dimensions: ability to take risk (driven by wealth relative to needs, time horizon, and flexibility of goals) and willingness to take risk (the client's psychological attitude). When ability and willingness conflict, the prudent approach is to adopt the lower of the two, unless client education can reconcile the gap; the answer must state this reconciliation explicitly.",
          "The return objective should be expressed on the correct basis. For a taxable individual funding spending from a portfolio, the required return must be computed after tax and, where purchasing power must be preserved, in real (inflation-adjusted) terms. A common error is simply adding inflation to a real spending rate; for taxable accounts, one must also gross up for taxes. The starting point is often the spending need divided by the investable base to get a real rate, then adjust for inflation and taxes and add back any additions.",
          "The five constraints frame the feasible portfolio: liquidity (ongoing spending, emergency reserves, and known large outflows), time horizon (frequently multistage — e.g. pre- and post-retirement), tax status, legal/regulatory factors, and unique circumstances (concentrated holdings, ESG preferences, health). Each constraint must be identified from the vignette and translated into portfolio implications, such as holding liquid reserves or avoiding illiquid assets when spending needs are high.",
        ],
        keyRules: [
          "Risk tolerance = lower of ability and willingness (unless reconciled by education).",
          "State the required return after tax and inflation-adjusted where relevant.",
          "Constraints: liquidity, time horizon, taxes, legal/regulatory, unique.",
        ],
        workedProblem: {
          scenario:
            "A newly retired couple has an investable portfolio of $4,000,000. They need $150,000 in the first year for living expenses (paid at year-end), have no other income, expect inflation of 2.5%, and face a 20% average tax rate on portfolio returns. Compute the pre-tax nominal required return, ignoring the growing base.",
          steps: [
            "Real spending rate = first-year need/portfolio = 150,000/4,000,000 = 3.75%.",
            "Adjust for inflation to preserve purchasing power: add 2.5% (approximately additive): 3.75% + 2.5% = 6.25% after-tax nominal required return.",
            "Gross up for the 20% tax rate: pre-tax required return = after-tax return/(1 − tax rate) = 6.25%/0.80 = 7.81%.",
            "Interpret: the portfolio must earn about 7.81% pre-tax to fund spending, keep pace with inflation, and cover taxes.",
          ],
          conclusion:
            "The couple's required pre-tax nominal return is approximately 7.8%. The answer combines the real spending rate (3.75%), inflation (2.5%), and a tax gross-up (÷0.80); omitting the tax gross-up or the inflation adjustment would understate the required return and risk under-funding their retirement.",
          markingNotes: [
            "Real spending rate = 3.75% from need/portfolio.",
            "Adds inflation and grosses up for tax.",
            "Pre-tax required return ≈ 7.8%.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Tax-efficient investment management",
        testPointIds: ["tp2"],
        explanation: [
          "Taxes are a major drag on wealth accumulation, and after-tax returns depend on the character of returns and the account type. Ordinary income (interest) is typically taxed most heavily; qualified dividends and long-term capital gains are often taxed at lower rates; and capital gains benefit from deferral because the tax is paid only on realisation, allowing pre-tax compounding. The effective tax drag therefore depends on turnover, the income/gain mix, and the holding period.",
          "Asset location — deciding which assets to hold in taxable versus tax-advantaged accounts — is a powerful, low-risk value-add. Tax-inefficient assets (taxable bonds, high-turnover strategies generating ordinary income and short-term gains) are best held in tax-deferred or tax-exempt accounts, while tax-efficient assets (buy-and-hold equities that generate deferred long-term gains and qualified dividends) are better held in taxable accounts. This differs from asset allocation, which decides how much to hold overall.",
          "Active tax management techniques further improve after-tax outcomes: tax-loss harvesting realises losses to offset realised gains (and sometimes ordinary income), resetting cost basis while maintaining market exposure; managing the timing of realisations across tax years; and favouring lower-turnover strategies. These techniques are consistent with, and additive to, the pre-tax investment strategy.",
        ],
        keyRules: [
          "Deferral and lower gains rates reduce tax drag versus ordinary income.",
          "Locate tax-inefficient assets in sheltered accounts; tax-efficient in taxable.",
          "Harvest losses and manage realisation timing to raise after-tax returns.",
        ],
      },
      {
        id: "sn3",
        title: "Wealth transfer, estate planning, and concentration",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "Wealth transfer weighs lifetime gifts against bequests. A tax-free (or lower-taxed) lifetime gift generally becomes more valuable than an equivalent bequest as the donee's investment horizon lengthens and their expected return rises, and when the gift escapes taxes that a bequest would incur. Gifting early lets returns compound in the donee's hands, often at a lower tax rate. The relative-value calculation compares the after-tax future value of gifting now with that of transferring later.",
          "Estate-planning tools serve different objectives: trusts provide control, creditor protection, and tax efficiency; life insurance can provide liquidity to pay estate taxes and transfer wealth efficiently; and jurisdiction and entity structures manage cross-border and tax exposures. The appropriate tool is matched to the client's specific goals around control, protection, liquidity, and tax minimisation, within the applicable legal framework.",
          "Concentrated positions — a large single public stock, a private business, or real estate — create idiosyncratic risk that diversification would reduce, but tax costs (embedded gains) and behavioral resistance (endowment bias, overconfidence, loyalty to a family company) impede action. Techniques for public stock include staged selling, equity collars and other hedges, exchange (swap) funds, and charitable remainder trusts; private businesses and real estate require liquidity and succession planning. A good answer addresses both the technical solution and the tax and behavioral obstacles.",
        ],
        keyRules: [
          "Gifting beats bequeathing as donee horizon/return rise and taxes differ.",
          "Match trusts/insurance/structures to control, protection, liquidity, and tax goals.",
          "Diversify concentrations via staged sales, collars, exchange funds, or charitable trusts, addressing tax and behavioral barriers.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L3 constructed response — risk tolerance",
        question:
          "A client has substantial wealth and a long horizon (high ability to take risk) but becomes highly anxious during market declines and has sold at the bottom before (low willingness). Determine the appropriate risk tolerance and how to address the conflict.",
        answerPlan: [
          "Reconcile ability and willingness.",
          "Recommend the conservative stance plus education.",
        ],
        modelAnswer:
          "Ability and willingness conflict: ability is high (wealth, horizon), but willingness is low (anxiety, past capitulation). The prudent conclusion is to adopt the lower of the two — a below-average to moderate risk tolerance — because acting on high ability while ignoring low willingness risks the client abandoning the plan at the worst time. The advisor should then work to narrow the gap through education about long-term outcomes and the cost of selling at the bottom, and by using tools such as a goals-based structure and a pre-agreed IPS to build the client's comfort, potentially raising the risk level over time if willingness genuinely increases.",
        markingGuide: [
          "Takes the lower (willingness-constrained) risk tolerance.",
          "Addresses the conflict through education and IPS/goals-based framing.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L3 constructed response — asset location",
        question:
          "A client holds both a taxable account and a tax-deferred retirement account. She owns taxable corporate bonds and buy-and-hold equities. Recommend which assets to hold in each account and explain why.",
        answerPlan: [
          "Apply asset-location logic.",
        ],
        modelAnswer:
          "Hold the taxable corporate bonds in the tax-deferred retirement account and the buy-and-hold equities in the taxable account. Bonds generate ordinary interest income that is taxed heavily each year, so sheltering them in the tax-deferred account defers that tax and maximises compounding. Buy-and-hold equities generate mostly deferred long-term capital gains and qualified dividends taxed at lower rates, and their gains can be deferred until sale, so they are relatively tax-efficient and best placed in the taxable account. This asset-location choice raises the overall after-tax return without changing the asset allocation.",
        markingGuide: [
          "Bonds in tax-deferred, equities in taxable.",
          "Justifies via ordinary income vs deferred/low-rate equity returns.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L3 constructed response — concentrated position",
        question:
          "A client holds a concentrated low-basis position in a single public stock and is reluctant to sell due to the large embedded gain and emotional attachment. Recommend approaches to reduce the risk while managing the tax and behavioral obstacles.",
        answerPlan: [
          "Offer diversification techniques.",
          "Address tax and behavior.",
        ],
        modelAnswer:
          "Several approaches reduce the risk while managing the constraints. A staged (phased) selling program spreads the capital-gains tax over multiple years and eases the emotional resistance to selling all at once. An equity collar (buy a protective put, sell a call) hedges the downside without triggering an immediate sale. An exchange (swap) fund lets the client contribute the stock for a diversified interest, deferring tax. A charitable remainder trust can diversify tax-efficiently while meeting philanthropic goals. The advisor should also address the endowment bias and overconfidence behind the attachment through education on concentration risk, framing diversification as protecting the wealth the client has built.",
        markingGuide: [
          "Recommends diversification techniques (staged sale, collar, exchange fund, or charitable trust).",
          "Addresses both the tax cost and the behavioral resistance.",
        ],
      },
    ],
  }),

  "cfa-l3-m10": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Defined-benefit pension IPS",
        priority: "critical",
        examinerFocus:
          "Setting risk and return objectives and constraints for a DB pension, driven by funded status, workforce demographics, and the sponsor's ability to bear risk.",
        typicalQuestionForms: [
          "State and justify the pension's risk tolerance / return objective.",
          "How do funded status and demographics affect the allocation?",
        ],
        mustKnow: [
          "Risk tolerance rises with a higher funded surplus, a younger/active workforce, a stronger sponsor, and low correlation of pension assets with sponsor operations.",
          "The return objective is anchored to the discount rate/actuarial return needed to fund the liabilities.",
          "Liquidity needs rise as the plan matures (more retirees, higher benefit payments); time horizon links to workforce age.",
        ],
        scoringActions: [
          "Link risk tolerance to funded status, demographics, and sponsor strength.",
          "Anchor the return objective to funding the liabilities.",
        ],
      },
      {
        id: "tp2",
        title: "Foundations, endowments, and the spending rule",
        priority: "high",
        examinerFocus:
          "Setting the return objective (spending + inflation + costs) and the long-horizon, growth-oriented risk posture, and applying smoothing spending rules.",
        typicalQuestionForms: [
          "Compute the endowment's required return.",
          "Compare spending rules and their effect on stability.",
        ],
        mustKnow: [
          "Required return ≈ spending rate + expected inflation + management costs (often combined multiplicatively).",
          "Endowments/foundations have long horizons and high risk tolerance, favouring equities/alternatives, subject to liquidity.",
          "Smoothing rules (rolling-average or geometric spending) stabilise distributions versus a simple percentage of current assets.",
        ],
        scoringActions: [
          "Add spending, inflation, and costs for the required return (multiplicatively for precision).",
          "Recommend a smoothing spending rule to stabilise distributions.",
        ],
      },
      {
        id: "tp3",
        title: "Insurance companies (life and P&C)",
        priority: "high",
        examinerFocus:
          "Understanding how liability characteristics drive insurers' investment constraints (duration matching, liquidity, credit, and regulatory/tax factors).",
        typicalQuestionForms: [
          "How do life vs P&C liabilities differ in investment implications?",
          "Which constraint dominates the insurer's portfolio?",
        ],
        mustKnow: [
          "Life insurers have longer, more predictable liabilities → longer-duration, spread-oriented portfolios matched to liabilities.",
          "P&C insurers have shorter, less predictable (lumpy) liabilities and underwriting cycles → more liquidity and shorter duration, plus some equities.",
          "Regulatory capital, credit quality, and taxes are major constraints for both.",
        ],
        scoringActions: [
          "Match asset duration/liquidity to the liability profile (life vs P&C).",
          "Weigh regulatory, credit, and tax constraints in the recommendation.",
        ],
      },
      {
        id: "tp4",
        title: "Banks and sovereign wealth funds",
        priority: "medium",
        examinerFocus:
          "Managing a bank's investment (liquidity) portfolio within ALM and capital rules, and classifying sovereign wealth funds by objective.",
        typicalQuestionForms: [
          "What is the role/constraint of a bank's securities portfolio?",
          "Classify the sovereign wealth fund and its horizon/risk.",
        ],
        mustKnow: [
          "A bank's securities portfolio manages liquidity and interest-rate risk within asset-liability management and regulatory capital constraints.",
          "SWF types: stabilisation (short horizon, low risk), savings/future-generations (long horizon, high risk), reserve investment, development, and pension reserve funds.",
          "Objectives and horizons differ sharply across institutional types, driving very different allocations.",
        ],
        scoringActions: [
          "Frame the bank portfolio around liquidity/ALM and capital rules.",
          "Classify the SWF by purpose to infer its horizon and risk tolerance.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Institutional investors is a top-weight L3 topic; net >70% on IPS and required-return marks.",
      timeBudget: "~1.5 min per point of credit; risk-tolerance justifications and required-return calcs earn the most.",
      answerSequence: [
        "Identify the institution type and its liability/objective profile.",
        "State risk and return objectives and the binding constraints.",
        "Justify the allocation from liabilities, horizon, and regulation.",
      ],
      qualityChecks: [
        "Did I link pension risk tolerance to funded status and demographics?",
        "Did I match insurer duration/liquidity to the liability profile?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Pension plans",
        testPointIds: ["tp1"],
        explanation: [
          "A defined-benefit pension's investment policy is driven by its liabilities. Its ability to take risk rises with a higher funded status (a surplus cushions adverse markets), a younger and more active workforce (longer horizon, smaller near-term benefit payments), a financially strong sponsor able to make contributions, and low correlation between the pension assets and the sponsor's own business (so a downturn does not hit both simultaneously). Conversely, an underfunded plan, a retiree-heavy workforce, a weak sponsor, or high asset-sponsor correlation reduce risk tolerance.",
          "The return objective is anchored to funding the liabilities — typically the actuarial discount rate or the return required to maintain/improve the funded status. Setting the return too aggressively raises risk; setting it too low forces higher sponsor contributions. Modern practice frames this in liability-relative terms, managing surplus and its volatility rather than asset returns in isolation.",
          "Liquidity and time horizon evolve with plan maturity: as the workforce ages and more members retire, benefit payments rise, increasing liquidity needs and shortening the effective horizon, which argues for more liability-hedging assets. Legal and regulatory constraints (funding rules, prudent-investor standards) and the treatment of the pension on the sponsor's balance sheet complete the picture.",
        ],
        keyRules: [
          "Risk tolerance ↑ with funded surplus, young workforce, strong sponsor, low asset-sponsor correlation.",
          "Return objective anchored to funding the liabilities (discount rate).",
          "Maturity raises liquidity needs and shortens the horizon.",
        ],
      },
      {
        id: "sn2",
        title: "Endowments and foundations",
        testPointIds: ["tp2"],
        explanation: [
          "Endowments and foundations exist to support spending in perpetuity (or over a long horizon), which gives them long time horizons and generally high risk tolerance, favouring growth assets such as equities and alternatives, subject to their liquidity needs for spending and, for private foundations, minimum payout requirements. Their return objective is typically the spending rate plus expected inflation plus management/investment costs, so that the real value of the corpus and its spending capacity are preserved over time. For precision these components are combined multiplicatively rather than simply added.",
          "The spending rule shapes both the required return and the stability of distributions. A simple rule spends a fixed percentage of current (or prior year-end) assets, but this makes spending volatile because it tracks market swings. Smoothing rules dampen this: a rolling-average rule spends a percentage of a multi-year moving average of asset values, and a geometric (weighted) rule blends the prior year's spending (inflation-adjusted) with a percentage of current assets, producing steadier, more predictable distributions that better support the institution's budget.",
          "Constraints include liquidity for near-term spending and capital calls (given large alternatives allocations), the time horizon (usually perpetual), tax status (often tax-exempt, though with some exceptions), legal/regulatory rules (payout minimums, donor restrictions), and unique circumstances (mission-related or socially responsible investment mandates). These shape the balance between the growth needed to sustain spending and the liquidity needed to fund it.",
        ],
        keyRules: [
          "Required return ≈ spending rate + inflation + costs (combine multiplicatively).",
          "Long horizon and high risk tolerance favour equities/alternatives, subject to liquidity.",
          "Smoothing spending rules stabilise distributions versus a simple percentage.",
        ],
        workedProblem: {
          scenario:
            "A university endowment targets a 4.5% annual spending rate, expects long-run inflation of 2.5%, and incurs 0.4% in investment management costs. Estimate the required nominal return using both the additive approximation and the more precise multiplicative method.",
          steps: [
            "Additive approximation: required return ≈ spending + inflation + costs = 4.5% + 2.5% + 0.4% = 7.4%.",
            "Multiplicative (precise): (1 + spending)(1 + inflation)(1 + costs) − 1 = (1.045)(1.025)(1.004) − 1.",
            "Compute: 1.045 × 1.025 = 1.071125; × 1.004 = 1.075409.",
            "Required return = 1.075409 − 1 = 0.07541 ≈ 7.54%.",
          ],
          conclusion:
            "The endowment needs about 7.4% (additive) to 7.5% (multiplicative) nominal to sustain its spending, keep pace with inflation, and cover costs while preserving the real corpus. The multiplicative method is more precise and slightly higher because it compounds the components.",
          markingNotes: [
            "Additive estimate ≈ 7.4%.",
            "Multiplicative estimate ≈ 7.54%.",
            "Preserves real corpus by covering spending, inflation, and costs.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Insurers, banks, and sovereign wealth funds",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "Insurance companies invest to meet policyholder liabilities, and their liability profile dictates the portfolio. Life insurers have long-duration, relatively predictable liabilities (based on mortality), so they hold long-duration, spread-oriented (high-quality bond) portfolios matched to those liabilities, seeking a positive spread over the guaranteed crediting rate. Property and casualty insurers have shorter, lumpier, and less predictable liabilities (catastrophes, litigation) and an underwriting cycle, so they hold shorter-duration, more liquid portfolios with some equity exposure and a larger liquidity buffer. Both face regulatory capital requirements, credit-quality constraints, and tax considerations.",
          "Banks manage a securities (investment) portfolio primarily for liquidity and interest-rate risk management within an asset-liability management framework and regulatory capital/liquidity rules. Unlike return-seeking institutions, the bank's securities book is a residual tool to manage the balance sheet's overall duration gap and liquidity, so it emphasises high-quality, liquid instruments rather than maximum return.",
          "Sovereign wealth funds vary widely by purpose, which determines horizon and risk. Stabilisation funds buffer government budgets against commodity/revenue swings and need short horizons and low risk (liquid, safe assets). Savings/future-generations funds convert finite resource wealth into a permanent endowment, with very long horizons and high risk tolerance (equities, alternatives). Reserve investment corporations, development funds, and pension reserve funds each have distinct objectives. Classifying the fund by its purpose is the key to inferring its appropriate horizon, liquidity, and risk posture.",
        ],
        keyRules: [
          "Life insurers: long-duration matched bond portfolios; P&C: shorter, liquid, some equities.",
          "Bank securities portfolio: liquidity and interest-rate management within ALM/capital rules.",
          "SWF horizon/risk follow purpose: stabilisation (short/low) vs savings (long/high).",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp1"],
        style: "L3 constructed response — pension risk tolerance",
        question:
          "A defined-benefit plan is 90% funded, has a mostly retired (older) workforce, and a financially weak sponsor whose business is highly correlated with the plan's equity-heavy assets. Assess the plan's ability to take risk.",
        answerPlan: [
          "Evaluate each factor.",
          "Conclude on risk tolerance.",
        ],
        modelAnswer:
          "Every factor points to low ability to take risk. The plan is underfunded (90%), so there is no surplus cushion. The retiree-heavy workforce means large near-term benefit payments, high liquidity needs, and a short effective horizon. The financially weak sponsor cannot reliably make contributions if markets fall, and the high correlation between the plan's equity-heavy assets and the sponsor's business means a downturn would hit both simultaneously (worsening funding just when the sponsor is least able to help). The conclusion is a low ability to take risk, arguing for a more conservative, liability-hedging-oriented allocation with reduced equity exposure.",
        markingGuide: [
          "Identifies underfunding, older workforce, weak sponsor, and high correlation as risk-reducing.",
          "Concludes low ability to take risk / more conservative allocation.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L3 constructed response — endowment spending rule",
        question:
          "Compare a simple 'percentage of current assets' spending rule with a rolling three-year average rule for an endowment, focusing on distribution stability.",
        answerPlan: [
          "Contrast the two rules.",
        ],
        modelAnswer:
          "A simple percentage-of-current-assets rule ties spending directly to the latest market value, so distributions swing sharply with markets — falling steeply after a downturn, exactly when the institution may most need support, and jumping after rallies. A rolling three-year average rule bases spending on the average of recent asset values, smoothing out year-to-year market volatility so distributions are steadier and more predictable, which better supports the institution's operating budget. The trade-off is that the smoothed rule responds more slowly to permanent changes in asset levels, but for budgeting stability it is generally preferred.",
        markingGuide: [
          "Explains the current-assets rule's volatility.",
          "Explains the rolling-average rule stabilises distributions.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp3"],
        style: "L3 constructed response — insurer liabilities",
        question:
          "Explain why a life insurer and a property-casualty insurer would hold portfolios with different durations and liquidity profiles.",
        answerPlan: [
          "Contrast liability profiles.",
          "Map to portfolio.",
        ],
        modelAnswer:
          "The difference stems from their liabilities. A life insurer's liabilities are long-dated and relatively predictable (based on mortality tables), so it holds a long-duration, high-quality bond portfolio matched to those liabilities to earn a spread over guaranteed crediting rates, with modest liquidity needs. A P&C insurer's liabilities are shorter, lumpier, and far less predictable (catastrophes, large claims) and subject to an underwriting cycle, so it holds a shorter-duration, more liquid portfolio with a larger cash buffer to meet sudden claims, plus some equities given its shorter liability duration and surplus. Thus liability duration and predictability drive the asset duration and liquidity choices.",
        markingGuide: [
          "Links life insurer's long, predictable liabilities to long-duration matched bonds.",
          "Links P&C's short, unpredictable liabilities to shorter duration and higher liquidity.",
        ],
      },
    ],
  }),

  "cfa-l3-m11": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Trade execution and implementation shortfall",
        priority: "high",
        examinerFocus:
          "Selecting execution strategies by trade urgency/size and computing implementation shortfall and its components.",
        typicalQuestionForms: [
          "Compute implementation shortfall for a trade.",
          "Which execution algorithm/venue suits the order?",
        ],
        mustKnow: [
          "Implementation shortfall = paper (decision-price) return − actual return = explicit costs + delay + market impact + opportunity cost.",
          "Urgent/informed trades favour aggressive (liquidity-taking) execution; patient trades favour passive strategies (VWAP/TWAP) to reduce impact.",
          "Market impact rises with order size relative to liquidity; opportunity cost arises from unfilled shares.",
        ],
        scoringActions: [
          "Decompose implementation shortfall into its cost components.",
          "Match execution strategy to trade urgency and size relative to liquidity.",
        ],
      },
      {
        id: "tp2",
        title: "Performance attribution",
        priority: "critical",
        examinerFocus:
          "Applying return attribution (allocation vs selection; Brinson) and risk attribution to explain performance versus a benchmark.",
        typicalQuestionForms: [
          "Decompose active return into allocation and selection effects.",
          "Interpret the attribution result.",
        ],
        mustKnow: [
          "Brinson allocation effect = (portfolio weight − benchmark weight) × (benchmark sector return − total benchmark return).",
          "Selection effect = benchmark weight × (portfolio sector return − benchmark sector return); interaction captures the joint effect.",
          "Attribution should reconcile to the total active return and be consistent with the investment process.",
        ],
        scoringActions: [
          "Compute allocation and selection effects with the correct Brinson formulas.",
          "Ensure the effects sum to the total active return.",
        ],
      },
      {
        id: "tp3",
        title: "Performance appraisal (risk-adjusted measures)",
        priority: "high",
        examinerFocus:
          "Computing and choosing among Sharpe, Treynor, information ratio, M-squared, and Jensen's alpha for the context.",
        typicalQuestionForms: [
          "Compute the information ratio / Sharpe / Treynor and rank managers.",
          "Which measure is appropriate for the mandate?",
        ],
        mustKnow: [
          "Sharpe = (Rp − rf)/σp (total risk); Treynor = (Rp − rf)/βp (systematic risk); information ratio = active return/active risk.",
          "Use the information ratio to evaluate active managers against a benchmark; Sharpe for a standalone portfolio.",
          "Jensen's alpha = Rp − [rf + βp(Rm − rf)]; M-squared expresses Sharpe in return units versus the market.",
        ],
        scoringActions: [
          "Select the measure matching the mandate (standalone vs sub-portfolio vs benchmark-relative).",
          "Compute the information ratio as active return divided by tracking error.",
        ],
      },
      {
        id: "tp4",
        title: "Manager selection and the appropriate benchmark",
        priority: "high",
        examinerFocus:
          "Evaluating managers (Type I/II errors), and testing benchmark quality against the SAMURAI/valid-benchmark criteria.",
        typicalQuestionForms: [
          "Is the benchmark valid for this manager?",
          "Which selection error is the greater risk?",
        ],
        mustKnow: [
          "A valid benchmark is specified in advance, appropriate, measurable, unambiguous, reflective of the manager's investment opinions, owned, and investable.",
          "Type I error = hiring/keeping a manager with no skill; Type II = rejecting/firing a skilled manager.",
          "The manager's true alpha must be judged net of style/factor exposures and against the correct benchmark.",
        ],
        scoringActions: [
          "Test the benchmark against the validity criteria before appraising performance.",
          "Weigh the cost of Type I vs Type II errors in the selection decision.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "Trading, evaluation, and manager selection are high-yield at L3; secure attribution and appraisal marks (net >65%).",
      timeBudget: "~1.5 min per point of credit; attribution and ratio calculations reward correct formulas.",
      answerSequence: [
        "Identify the task (execution, attribution, appraisal, selection).",
        "Apply the formula (implementation shortfall, Brinson, information ratio).",
        "Interpret and reconcile to the total, matching the mandate.",
      ],
      qualityChecks: [
        "Do the attribution effects sum to the total active return?",
        "Did I match the appraisal measure to the mandate and use the correct benchmark?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Trade execution and costs",
        testPointIds: ["tp1"],
        explanation: [
          "Execution converts investment decisions into positions, and its cost is captured by implementation shortfall: the difference between the return on a hypothetical 'paper' portfolio transacted instantly at the decision price and the actual portfolio's realised return. It decomposes into explicit costs (commissions, fees, taxes), delay/slippage costs (price movement between the decision and order placement), market-impact (execution) costs (the price concession from trading), and opportunity cost (the cost of shares that were never filled).",
          "The optimal execution strategy depends on the trade's urgency and size relative to available liquidity. Informed, urgent trades favour aggressive, liquidity-taking execution to capture the alpha before it decays, accepting higher market impact. Patient, uninformed trades favour passive strategies (e.g. VWAP or TWAP algorithms that spread the order over time) to minimise market impact, accepting some timing risk. Large orders relative to daily volume incur greater impact and often require careful scheduling and dark-pool or block-trading venues.",
          "Managing execution well is a genuine, if modest, source of value, since excessive trading costs erode alpha. The trade-off is between market impact (worse for fast, large trades) and timing/opportunity risk (worse for slow trades), and the manager chooses the point on this spectrum that best fits the information content and urgency of each order.",
        ],
        keyRules: [
          "Implementation shortfall = explicit + delay + market impact + opportunity cost.",
          "Urgent/informed trades: aggressive execution; patient trades: passive (VWAP/TWAP).",
          "Market impact rises with order size relative to liquidity.",
        ],
      },
      {
        id: "sn2",
        title: "Performance attribution",
        testPointIds: ["tp2"],
        explanation: [
          "Attribution explains why a portfolio out- or under-performed its benchmark by decomposing the active return into sources consistent with the investment process. The Brinson model splits active return into an allocation effect and a selection effect (plus an interaction term). The allocation effect measures the value added by over- or under-weighting sectors relative to the benchmark: for each sector it is (portfolio weight − benchmark weight) × (benchmark sector return − total benchmark return).",
          "The selection effect measures the value added by picking securities that beat the benchmark within each sector: benchmark weight × (portfolio sector return − benchmark sector return). The interaction term captures the combined effect of allocating to a sector and selecting well within it. Summed across sectors, allocation, selection, and interaction reconcile exactly to the total active return — a check that a correct attribution must satisfy.",
          "Good attribution matches the manager's actual process: a top-down asset allocator's value should appear mainly in the allocation effect, while a bottom-up stock-picker's should appear in selection. Risk attribution complements return attribution by decomposing active risk (tracking error) into its factor and idiosyncratic sources, ensuring the risk taken is consistent with where the return was earned.",
        ],
        keyRules: [
          "Allocation effect = (wp − wb) × (benchmark sector return − total benchmark return).",
          "Selection effect = wb × (portfolio sector return − benchmark sector return).",
          "Allocation + selection + interaction = total active return.",
        ],
        workedProblem: {
          scenario:
            "Over a period, in the technology sector the portfolio weight was 30% versus a benchmark weight of 20%; the benchmark tech sector returned 15% while the total benchmark returned 10%; the portfolio's tech holdings returned 18%. Compute the allocation and selection effects for the technology sector.",
          steps: [
            "Allocation effect = (portfolio weight − benchmark weight) × (benchmark sector return − total benchmark return).",
            "= (0.30 − 0.20) × (15% − 10%) = 0.10 × 5% = +0.50%.",
            "Selection effect = benchmark weight × (portfolio sector return − benchmark sector return).",
            "= 0.20 × (18% − 15%) = 0.20 × 3% = +0.60%.",
          ],
          conclusion:
            "The technology sector added +0.50% from allocation (overweighting a sector that beat the benchmark average) and +0.60% from selection (picking tech stocks that beat the sector), for +1.10% before the interaction term. Both effects are positive, showing the manager both allocated to and selected within technology well.",
          markingNotes: [
            "Allocation effect = +0.50% via the Brinson formula.",
            "Selection effect = +0.60% using benchmark weight.",
            "Both effects positive and correctly interpreted.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Appraisal, selection, and benchmarks",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "Risk-adjusted appraisal measures rank managers after accounting for risk. The Sharpe ratio, (Rp − rf)/σp, uses total risk and suits a standalone portfolio; the Treynor ratio, (Rp − rf)/βp, uses systematic risk and suits a component of a diversified whole; the information ratio, active return divided by active risk (tracking error), evaluates an active manager against a benchmark and is the workhorse for manager comparison. Jensen's alpha, Rp − [rf + βp(Rm − rf)], measures return in excess of CAPM-required return, and M-squared restates the Sharpe ratio in return units comparable to the market. Choosing the measure appropriate to the mandate is a graded skill.",
          "A valid benchmark is a precondition for meaningful appraisal. The standard criteria (often summarised as SAMURAI) require the benchmark to be Specified in advance, Appropriate to the manager's style, Measurable, Unambiguous, Reflective of the manager's current investment opinions, Accountable/owned by the manager, and Investable. A benchmark failing these — for example, an ill-fitting broad index for a niche strategy — produces misleading alpha and attribution.",
          "Manager selection balances two errors. A Type I error is hiring or retaining a manager who actually has no skill (a false positive); a Type II error is rejecting or firing a manager who truly has skill (a false negative). Because past outperformance may reflect luck or factor exposure rather than skill, evaluators judge managers on process, consistency, and factor-adjusted, benchmark-relative performance, and weigh the relative costs of the two errors when making decisions.",
        ],
        keyRules: [
          "Sharpe (total risk), Treynor (systematic), information ratio (benchmark-relative), Jensen's alpha, M-squared.",
          "Valid benchmark (SAMURAI): specified in advance, appropriate, measurable, unambiguous, reflective, owned, investable.",
          "Type I = keep a no-skill manager; Type II = drop a skilled manager.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp3"],
        style: "L3 constructed response — information ratio",
        question:
          "A manager delivered an active return (over benchmark) of 2.4% with a tracking error of 4.0%. Compute the information ratio and explain what it measures.",
        answerPlan: [
          "Compute IR.",
          "Interpret.",
        ],
        modelAnswer:
          "Information ratio = active return/active risk (tracking error) = 2.4%/4.0% = 0.60. It measures the manager's active return per unit of active risk taken relative to the benchmark — the efficiency with which the manager converts benchmark-relative risk into benchmark-relative return. An information ratio of 0.60 is considered good; higher values indicate more skillful, risk-efficient active management.",
        markingGuide: [
          "IR = 0.60 (active return / tracking error).",
          "Interprets it as active return per unit of active risk.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp2"],
        style: "L3 constructed response — attribution",
        question:
          "A portfolio underperformed its benchmark. Attribution shows a positive selection effect but a large negative allocation effect. Interpret this result and what it implies about the manager's process.",
        answerPlan: [
          "Interpret each effect.",
          "Draw the process implication.",
        ],
        modelAnswer:
          "The positive selection effect means the manager picked securities that outperformed within their sectors — stock selection added value. The large negative allocation effect means the manager's sector (or asset-class) weighting decisions detracted, for example by overweighting sectors that underperformed the benchmark average or underweighting sectors that outperformed. Net, the poor allocation outweighed good selection, so the portfolio underperformed. This implies the manager's strength is bottom-up security selection, while top-down allocation is a weakness; the process might be improved by reducing active allocation bets or improving the allocation decision, while leveraging the demonstrated selection skill.",
        markingGuide: [
          "Correctly interprets positive selection and negative allocation.",
          "Concludes selection is the strength, allocation the weakness.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp4"],
        style: "L3 constructed response — benchmark validity",
        question:
          "A small-cap growth manager is evaluated against a broad large-cap market index. Explain why this benchmark is invalid and what problems it causes.",
        answerPlan: [
          "Apply validity criteria.",
          "State the consequences.",
        ],
        modelAnswer:
          "The broad large-cap index is not appropriate to the manager's small-cap growth style and does not reflect the manager's investment opinions, violating the validity criteria (it is neither appropriate nor reflective of the style). Using it produces misleading appraisal: the measured alpha and attribution will largely reflect the systematic difference between small-cap growth and large-cap stocks rather than the manager's true skill, so the manager could be wrongly credited or penalised depending on how small-cap growth performed relative to large caps. A valid benchmark would be a small-cap growth index that is specified in advance, investable, and reflective of the manager's mandate.",
        markingGuide: [
          "Identifies the benchmark as not appropriate/reflective of style.",
          "Explains that alpha/attribution become misleading (style vs skill).",
        ],
      },
    ],
  }),

  "cfa-l3-m12": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Integrated case analysis across topics",
        priority: "critical",
        examinerFocus:
          "Synthesising ethics, asset allocation, IPS, and portfolio decisions from a single case, allocating effort to command words and mark values.",
        typicalQuestionForms: [
          "Given the full case, recommend and justify an allocation/decision.",
          "Identify the issue and prescribe the correct action across topics.",
        ],
        mustKnow: [
          "Constructed-response answers must lead with the conclusion, then justify with specific evidence from the case.",
          "Command words (identify, calculate, justify, determine, recommend) dictate answer length and content.",
          "Cross-topic cases require connecting the IPS to allocation, risk management, and ethics consistently.",
        ],
        scoringActions: [
          "Answer the command word precisely; match effort to the marks available.",
          "Cite specific facts from the case to justify each conclusion.",
        ],
      },
      {
        id: "tp2",
        title: "IPS construction under time pressure",
        priority: "critical",
        examinerFocus:
          "Rapidly extracting objectives and constraints and computing a required return in a constructed-response setting.",
        typicalQuestionForms: [
          "State the return and risk objectives from the case.",
          "Compute the required return with taxes and inflation.",
        ],
        mustKnow: [
          "Reconcile ability and willingness to take risk and take the lower unless justified.",
          "Compute the required return after tax and inflation-adjusted where relevant, based on the spending need and asset base.",
          "Constraints (LLTTU): liquidity, legal, time horizon, taxes, unique circumstances.",
        ],
        scoringActions: [
          "Extract objectives/constraints in a structured template to save time.",
          "Show the required-return calculation steps for method marks.",
        ],
      },
      {
        id: "tp3",
        title: "Recommending and defending portfolio actions",
        priority: "high",
        examinerFocus:
          "Selecting among candidate portfolios/strategies and defending the choice against the case's objectives and constraints.",
        typicalQuestionForms: [
          "Select the most appropriate portfolio and justify with two reasons.",
          "Recommend a rebalancing/hedging/allocation action.",
        ],
        mustKnow: [
          "The best portfolio meets the return requirement within the risk tolerance and satisfies all constraints (especially liquidity).",
          "Justifications must reference specific case facts, not generic principles.",
          "Eliminate candidates that breach a hard constraint before comparing the rest.",
        ],
        scoringActions: [
          "Screen out constraint-breaching options first, then compare on objectives.",
          "Give the specific number of reasons requested, each tied to the case.",
        ],
      },
      {
        id: "tp4",
        title: "Ethics and behavioral issues within a case",
        priority: "high",
        examinerFocus:
          "Spotting embedded ethics violations and behavioral biases in a broader case and prescribing the compliant/corrective action.",
        typicalQuestionForms: [
          "Identify the Standard violated and the corrective action.",
          "Identify the client's bias and how to address it.",
        ],
        mustKnow: [
          "Anchor ethics answers to the specific Standard/AMC provision and prescribe a concrete fix.",
          "Classify biases as cognitive (moderate) or emotional (often adapt) and tie the response to the client's situation.",
          "Ethics and suitability must remain consistent with the IPS throughout the case.",
        ],
        scoringActions: [
          "Name the exact Standard and the corrective policy.",
          "Classify the bias and give a specific moderate/adapt recommendation.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget: "The exam blends item sets and constructed response; disciplined technique across topics lifts the total — net >65%.",
      timeBudget: "Constructed response: ~1.5 minutes per available mark; never over-write low-mark 'identify' items.",
      answerSequence: [
        "Read the command word and mark value; plan the answer's scope.",
        "State the conclusion first, then justify with specific case facts and any calculation.",
        "Check consistency across the IPS, allocation, and ethics.",
      ],
      qualityChecks: [
        "Did I answer the exact command word and match effort to marks?",
        "Did I cite specific case facts rather than generic principles?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Constructed-response technique",
        testPointIds: ["tp1", "tp3"],
        explanation: [
          "The Level III exam combines vignette-based item sets with constructed-response (essay) questions, and technique is as important as knowledge. The single highest-value habit is to lead with the conclusion — state the recommendation or answer first — and then justify it with specific evidence drawn from the case, plus any required calculation. Graders award marks for correct, well-supported conclusions, not for length or restated theory.",
          "Command words dictate what to write. 'Identify' or 'state' needs a brief, direct answer; 'calculate' or 'determine' needs the computation and result; 'justify', 'explain', or 'discuss' needs reasoning tied to the case. Matching the answer's depth to the command word — and to the marks available (roughly 1.5 minutes per mark) — prevents over-writing low-value items and under-serving high-value ones. Using the answer template/structure provided (and answering on the correct page) is essential.",
          "For recommendation questions, the disciplined approach is to first eliminate any candidate that breaches a hard constraint (especially liquidity or a legal restriction), then compare the survivors against the return requirement and risk tolerance, and finally justify the choice with the exact number of reasons requested, each referencing specific case facts. Generic justifications earn little credit.",
        ],
        keyRules: [
          "Conclusion first, then justify with specific case evidence.",
          "Match answer depth to the command word and marks (~1.5 min/mark).",
          "Eliminate constraint-breaching options before comparing on objectives.",
        ],
        workedProblem: {
          scenario:
            "A case gives a client with $2,000,000 investable, a first-year after-tax spending need of $80,000 (year-end), expected inflation of 3%, and three candidate portfolios: A (expected return 4.5%, very low risk, fully liquid), B (expected return 6.5%, moderate risk, fully liquid), and C (expected return 7.0%, moderate-high risk, 40% illiquid). The client needs full liquidity for near-term spending and has average risk tolerance. Determine the required return and recommend a portfolio.",
          steps: [
            "Compute the real spending rate: 80,000/2,000,000 = 4.0%.",
            "Add inflation to preserve purchasing power: 4.0% + 3.0% = 7.0% nominal required return (need is already after-tax).",
            "Screen constraints: the client needs full liquidity, so Portfolio C (40% illiquid) breaches the liquidity constraint and is eliminated despite meeting the return.",
            "Compare A and B against the 7.0% requirement: A (4.5%) falls short of the required return; B (6.5%) is closest but slightly below 7.0% — with average risk tolerance and the liquidity constraint, B is the most appropriate feasible choice, and the small shortfall should be flagged (e.g. modestly reduce spending or accept slight erosion).",
          ],
          conclusion:
            "The required return is about 7.0% nominal. Portfolio C is eliminated for breaching the liquidity constraint; Portfolio A is too conservative to meet the return; Portfolio B is recommended as the best feasible fit for the return need, risk tolerance, and liquidity requirement, with a note that its 6.5% return is marginally below the 7.0% target.",
          markingNotes: [
            "Required return ≈ 7.0% (spending rate + inflation, need already after-tax).",
            "Eliminates C on the liquidity constraint before comparing returns.",
            "Recommends B with justification tied to case facts and flags the small shortfall.",
          ],
        },
      },
      {
        id: "sn2",
        title: "IPS extraction and required-return calculation",
        testPointIds: ["tp2"],
        explanation: [
          "Under time pressure, extract the IPS elements with a fixed template. Return objective: identify the spending need and the asset base, then compute the required return on the correct basis — after tax and inflation-adjusted where purchasing power must be preserved. For a taxable investor funding real spending, add expected inflation to the real spending rate and gross up for taxes; do not conflate real and nominal or forget the tax gross-up.",
          "Risk objective: assess ability to take risk (wealth relative to needs, time horizon, flexibility of goals) and willingness (attitude, past behaviour) separately, then reconcile them — take the lower unless the gap can be resolved through education, and state this explicitly. The most common error is asserting a risk level without reconciling the two dimensions.",
          "Constraints are captured with the LLTTU checklist: Liquidity (spending, reserves, known large outflows), Legal/regulatory, Time horizon (often multistage), Taxes, and Unique circumstances (concentrated positions, ESG or religious constraints, health). Each identified constraint should be translated into a portfolio implication, since graders reward the 'so what', not just the label.",
        ],
        keyRules: [
          "Compute the required return after tax and inflation-adjusted as appropriate.",
          "Reconcile ability and willingness; take the lower unless justified.",
          "Use the LLTTU constraint checklist and state each implication.",
        ],
      },
      {
        id: "sn3",
        title: "Embedded ethics and behavioral issues",
        testPointIds: ["tp4"],
        explanation: [
          "Broad cases frequently embed an ethics violation or a behavioral bias inside a larger portfolio narrative, and these are easy marks if spotted. For ethics, name the specific Standard or Asset Manager Code provision implicated (e.g. suitability III(C), fair dealing III(B), misrepresentation I(C)), state whether conduct complies or violates, and prescribe the concrete corrective policy or disclosure — not a vague appeal to acting ethically.",
          "For behavioral issues, identify the exact bias from the described behaviour, classify it as a cognitive error (usually moderated through education and process) or an emotional bias (often accommodated/adapted, especially for wealthier clients), and give a specific recommendation tied to the client's circumstances. The moderate-versus-adapt call should reflect the client's wealth relative to their goals.",
          "Throughout the case, ethics and suitability must remain consistent with the IPS: a recommendation that meets return and risk targets but breaches a client constraint, a fiduciary duty, or a Standard is wrong regardless of its financial merit. Keeping the ethical and suitability lens active across every recommendation is what distinguishes strong Level III answers.",
        ],
        keyRules: [
          "Name the exact Standard/AMC provision and prescribe a concrete fix.",
          "Classify biases (cognitive → moderate; emotional → often adapt) and tailor the response.",
          "Keep ethics and suitability consistent with the IPS across the whole case.",
        ],
      },
    ],
    examPractice: [
      {
        id: "pr1",
        testPointIds: ["tp2", "tp3"],
        style: "L3 constructed response — integrated recommendation",
        question:
          "A client needs $120,000 (after-tax, year-end) from a $3,000,000 portfolio, with expected inflation of 2%. Two portfolios are offered: X (expected return 5.5%, fully liquid) and Y (expected return 6.5%, but 30% locked up for 5 years). The client also has an unexpected liquidity need of $200,000 next year. Compute the required return and recommend a portfolio.",
        answerPlan: [
          "Compute required return.",
          "Screen liquidity, then recommend.",
        ],
        modelAnswer:
          "Required return = real spending rate + inflation = (120,000/3,000,000) + 2% = 4.0% + 2.0% = 6.0% nominal (the need is after-tax). Screen constraints: the client has a $200,000 near-term liquidity need plus ongoing spending, so the 30% lockup in Portfolio Y breaches the liquidity constraint despite its higher 6.5% return. Portfolio X is fully liquid but returns 5.5%, slightly below the 6.0% requirement. Recommend Portfolio X because it satisfies the binding liquidity constraint; flag that its 5.5% return is modestly below the 6.0% target, so the client should consider trimming spending or accepting slight real erosion rather than sacrificing liquidity.",
        markingGuide: [
          "Required return ≈ 6.0% (spending rate + inflation).",
          "Eliminates Y on liquidity; recommends X and flags the shortfall.",
        ],
      },
      {
        id: "pr2",
        testPointIds: ["tp4"],
        style: "L3 constructed response — embedded ethics",
        question:
          "In a case, an advisor allocates a hot IPO mainly to the accounts that generate the highest fees and later reports composite performance excluding two accounts closed after losses. Identify the violations and the corrective actions.",
        answerPlan: [
          "Identify the two issues.",
          "Prescribe fixes.",
        ],
        modelAnswer:
          "Two violations. Allocating the IPO to the highest-fee accounts breaches Standard III(B) Fair Dealing; the corrective action is a written pro-rata allocation policy applied at the average price across all suitable participating accounts. Excluding the two closed, loss-making accounts from the composite is survivorship bias, breaching GIPS (terminated portfolios must remain through their last full period) and constituting misleading performance under I(C)/the Asset Manager Code; the corrective action is to include all terminated portfolios in the appropriate composites and present compliant, benchmarked performance. Both fixes must be documented and consistently applied.",
        markingGuide: [
          "Identifies III(B) unfair allocation and prescribes pro-rata.",
          "Identifies survivorship bias / GIPS breach and prescribes inclusion of terminated portfolios.",
        ],
      },
      {
        id: "pr3",
        testPointIds: ["tp1"],
        style: "L3 constructed response — technique",
        question:
          "Explain how a candidate should handle a constructed-response question worth 6 marks that asks to 'recommend and justify, with two reasons,' a strategic asset allocation, to maximise the score.",
        answerPlan: [
          "Apply command-word/marks technique.",
        ],
        modelAnswer:
          "The candidate should first note the command words ('recommend and justify, with two reasons') and the 6 marks, budgeting roughly 9 minutes. Lead with the recommendation (the specific allocation) stated clearly, then provide exactly two justifications — no fewer, no more — each tied to specific facts from the case (e.g. the client's required return, risk tolerance, and a binding constraint such as liquidity or horizon). Each reason should link a case fact to the allocation choice rather than citing a generic principle. Any needed calculation (e.g. the required return) should be shown for method marks. Answering precisely to the command word, giving the requested number of reasons, and grounding each in the case maximises the marks earned.",
        markingGuide: [
          "Leads with the recommendation and gives exactly two case-specific reasons.",
          "Matches effort to marks and shows any calculation for method marks.",
        ],
      },
    ],
  }),
};
