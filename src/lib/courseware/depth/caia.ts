import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CAIA (Chartered Alternative Investment Analyst) exam-calibrated depth content,
 * keyed by source module id (`caia-l1-m1` .. `caia-l1-m10`, `caia-l2-m1` ..
 * `caia-l2-m10`).
 *
 * The two levels are deliberately written to different cognitive targets, which
 * mirrors how CAIA actually tests them:
 *
 * - LEVEL I (product foundations). 200 multiple-choice questions across two
 *   2-hour sessions. The depth emphasises the *characteristics, structures,
 *   cash-flow mechanics, and risk/return language* of each alternative asset
 *   class — what the instrument is, how it is built, and how it behaves — because
 *   Level I rewards precise recognition and definitional accuracy.
 *
 * - LEVEL II (allocation & manager due diligence). 100 MCQs plus
 *   constructed-response (essay) sets. The depth emphasises *application*:
 *   integrating alternatives into an institutional portfolio, risk budgeting,
 *   liquidity/valuation/operational analysis, manager selection and due
 *   diligence, and governance/monitoring — the skills a practitioner uses to
 *   allocate to and oversee managers, and which partial-credit essays reward.
 */
export const CAIA_DEPTH: Record<string, CoursewareDepth> = {
  "caia-l1-m1": examDepth({
    testPoints: [
      {
        id: "caia-l1-m1-tp1",
        title: "Structure of an ethics vignette and matching to a Standard",
        priority: "critical",
        examinerFocus:
          "Whether you can isolate the single decisive act in a short vignette and map it to the most specific CFA Institute Standard of Professional Conduct. Level I ethics is recognition under time pressure, not open-ended reasoning.",
        typicalQuestionForms: [
          "Which Standard is most directly violated when an analyst trades ahead of a client order?",
          "An analyst uses an outside report without attribution. Which Standard applies?",
          "Which Standard is least likely to be violated by the described conduct?",
        ],
        mustKnow: [
          "The Code sets aspirational duties; the seven Standards are what questions actually test.",
          "Isolate the decisive action, then match to the most specific Standard the facts support.",
          "When two Standards seem to apply, choose the most specific one, not the most general.",
        ],
        scoringActions: [
          "Name the single decisive fact before scanning answer choices.",
          "Prefer the most specific Standard over a general 'professionalism' catch-all.",
        ],
      },
      {
        id: "caia-l1-m1-tp2",
        title: "Material non-public information vs mosaic theory",
        priority: "high",
        examinerFocus:
          "Distinguishing prohibited trading on material non-public information (MNPI) from permissible mosaic-theory analysis that combines public and non-material non-public pieces into a conclusion.",
        typicalQuestionForms: [
          "Which situation involves prohibited use of MNPI rather than mosaic analysis?",
          "An analyst reaches a conclusion from many non-material public and private details. Is this permitted?",
        ],
        mustKnow: [
          "MNPI is information that is both material and non-public; trading or causing trading on it is prohibited.",
          "Mosaic theory permits conclusions built from public and non-material non-public information.",
          "Materiality turns on whether a reasonable investor would consider it important.",
        ],
        scoringActions: [
          "Test each piece for materiality AND non-public status before concluding MNPI.",
          "Recognise mosaic conclusions as permissible even if they reveal an insight.",
        ],
      },
      {
        id: "caia-l1-m1-tp3",
        title: "Loyalty, prudence, and care; fair dealing; suitability",
        priority: "high",
        examinerFocus:
          "Applying duties to clients — loyalty/prudence/care, fair dealing across clients, and suitability — which are especially acute in illiquid, opaque alternatives where clients cannot verify what managers report.",
        typicalQuestionForms: [
          "A manager allocates a scarce private deal only to favoured clients. Which Standard is breached?",
          "Which duty requires acting for the client's benefit with the care of a prudent professional?",
        ],
        mustKnow: [
          "Loyalty, Prudence, and Care require acting for the client's benefit and placing client interests first.",
          "Fair Dealing requires treating clients fairly in investment actions and recommendations.",
          "Suitability requires recommendations consistent with the client's objectives and constraints.",
        ],
        scoringActions: [
          "For allocation-of-opportunity facts, apply Fair Dealing.",
          "For 'is this appropriate for this client?' facts, apply Suitability.",
        ],
      },
      {
        id: "caia-l1-m1-tp4",
        title: "Disclosure of conflicts, referral fees, and compensation",
        priority: "high",
        examinerFocus:
          "That conflicts of interest, referral arrangements, and additional compensation must be disclosed, and that disclosure must be prominent and clear enough to be effective.",
        typicalQuestionForms: [
          "A member receives a referral fee but does not disclose it. Which Standard is violated?",
          "What must a member do about a material conflict of interest?",
        ],
        mustKnow: [
          "Disclosure of Conflicts requires prominent, plain disclosure of matters that could impair objectivity.",
          "Referral fees must be disclosed to clients and employers.",
          "Additional compensation arrangements require written consent from the employer.",
        ],
        scoringActions: [
          "Treat undisclosed referral fees/conflicts as disclosure violations.",
          "Require written employer consent for additional compensation.",
        ],
      },
      {
        id: "caia-l1-m1-tp5",
        title: "CAIA member conduct and use of the designation",
        priority: "medium",
        examinerFocus:
          "Proper use of the CAIA designation and conduct as members/candidates — not overstating the credential and not implying superior performance from holding it.",
        typicalQuestionForms: [
          "Which use of the CAIA designation is proper?",
          "A candidate implies passing the exam guarantees performance. Is this permitted?",
        ],
        mustKnow: [
          "The designation must be used accurately, without implying superior performance.",
          "Members and candidates must not misrepresent the meaning of the credential.",
          "Conduct requirements apply to both members and candidates.",
        ],
        scoringActions: [
          "Reject any claim that the designation guarantees results.",
          "Confirm the reference states the credential accurately.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Ethics is a reliable source of Level I marks and often decides borderline passes; treat it as a must-master, high-conversion domain across both sessions.",
      timeBudget:
        "About 60 seconds per ethics MCQ; extract the decisive fact fast and resist re-reading the whole vignette.",
      answerSequence: [
        "Read the stem for the one decisive action.",
        "Identify the client/employer/market duty implicated.",
        "Match to the most specific Standard.",
        "Eliminate choices that describe permissible conduct (e.g., mosaic analysis).",
      ],
      qualityChecks: [
        "Did you choose the most specific Standard rather than a general one?",
        "Did you confirm MNPI is both material and non-public before calling it a violation?",
        "Did undisclosed conflicts/referral fees map to the disclosure Standards?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m1-sn1",
        title: "Reading a vignette and choosing the decisive Standard",
        testPointIds: ["caia-l1-m1-tp1", "caia-l1-m1-tp3"],
        explanation: [
          "CAIA adopts the CFA Institute Code of Ethics and Standards of Professional Conduct, and Level I tests them as fast recognition problems. The Code states aspirational duties — integrity, competence, diligence, respect, and placing client interests first — but questions turn on the seven Standards, which operationalise the Code. The reliable method is to isolate the single decisive action in the vignette (the trade, the omission, the allocation) and match it to the Standard that most specifically addresses it.",
          "A common trap is choosing an overly general Standard (Professionalism) when a more specific one (Priority of Transactions, Fair Dealing, Material Non-Public Information) squarely fits. Because alternatives are private and often unverifiable, the client-facing duties — Loyalty/Prudence/Care, Fair Dealing, and Suitability — carry particular weight, and the exam frequently frames scenarios where a manager exploits the client's inability to independently verify reported values or access.",
        ],
        keyRules: [
          "Test the Standards, not the aspirational Code, when answering.",
          "Isolate one decisive fact, then match the most specific Standard.",
          "Client duties (loyalty, fair dealing, suitability) dominate in opaque alternatives.",
        ],
      },
      {
        id: "caia-l1-m1-sn2",
        title: "MNPI, mosaic theory, and a worked classification",
        testPointIds: ["caia-l1-m1-tp2"],
        explanation: [
          "The line between prohibited insider activity and legitimate research is the MNPI-versus-mosaic distinction. Information is MNPI only if it is both material (a reasonable investor would consider it important) and non-public (not broadly disseminated). Trading, or causing others to trade, on MNPI violates the Standard on Material Non-Public Information. The mosaic theory, by contrast, permits an analyst to reach a market-moving conclusion by combining public information with non-material non-public information — the insight is the analyst's own work product, not a leaked material fact.",
          "The exam tests whether candidates can decompose a scenario into its information pieces and evaluate each for materiality and public status. If a single decisive piece is both material and non-public, the analyst must not trade on it; if the conclusion emerges from an assembly of individually non-material and public items, the analysis is permissible even though it is valuable.",
        ],
        keyRules: [
          "MNPI = material AND non-public; trading/causing trading on it is prohibited.",
          "Mosaic theory permits conclusions from public + non-material non-public pieces.",
          "Evaluate each information piece separately for materiality and public status.",
        ],
        workedProblem: {
          scenario:
            "An analyst covering a private mining company (1) reads the public environmental filings, (2) notices from public satellite images that a competitor's site looks idle, (3) is told by the company's CFO, in confidence, the exact unannounced quarterly production number, and (4) interviews several suppliers who each mention non-material shipping details. She wants to trade on her bullish conclusion. Classify each piece and determine whether she may trade.",
          steps: [
            "Classify piece (1): public environmental filings are public information — usable.",
            "Classify piece (2): public satellite imagery is public and, on its own, non-material — usable as a mosaic input.",
            "Classify piece (3): the CFO's exact unannounced quarterly production number is both material (would move a reasonable investor) and non-public — this is MNPI.",
            "Classify piece (4): individually non-material supplier shipping details that are not broadly public can be mosaic inputs, since no single item is material.",
            "Decide: because her decision set includes MNPI (piece 3), she may not trade on the conclusion; she must not use or cause trading on the CFO's confidential production figure.",
          ],
          conclusion:
            "Pieces 1, 2, and 4 are legitimate mosaic inputs, but piece 3 (the CFO's exact unannounced production number) is material non-public information. Because MNPI is in her decision set, she is prohibited from trading; the presence of even one decisive material non-public fact taints the trade regardless of the surrounding mosaic.",
          markingNotes: [
            "Full credit requires classifying the CFO figure as MNPI and prohibiting the trade, while recognising the other pieces as permissible mosaic inputs.",
            "Calling the whole analysis 'mosaic and therefore permitted' despite the CFO tip is the classic error and earns no credit.",
          ],
        },
      },
      {
        id: "caia-l1-m1-sn3",
        title: "Conflicts, referral fees, and additional compensation",
        testPointIds: ["caia-l1-m1-tp4"],
        explanation: [
          "Disclosure is the mechanism the Standards use to manage conflicts. Members must make full and fair disclosure of matters that could reasonably impair their objectivity or interfere with duties to clients and employers, and the disclosure must be prominent and in plain language — burying it is ineffective. In alternatives, conflicts are pervasive: cross-fund investments, affiliated service providers, and performance fees that can incentivise risk-taking all require disclosure so clients can assess them.",
          "Two specific arrangements recur on the exam. Referral fees (paid or received for recommending products or services) must be disclosed to clients and employers so they can judge the objectivity of the recommendation. Additional compensation — accepting gifts, benefits, or compensation that competes with the employer's interest — requires written consent from the employer. Undisclosed referral fees and unconsented additional compensation are frequent, clean violations.",
        ],
        keyRules: [
          "Disclose conflicts prominently and plainly.",
          "Referral fees must be disclosed to clients and employers.",
          "Additional compensation requires written employer consent.",
        ],
      },
      {
        id: "caia-l1-m1-sn4",
        title: "Diligence, communication, and use of the designation",
        testPointIds: ["caia-l1-m1-tp1", "caia-l1-m1-tp5"],
        explanation: [
          "Analysis-side Standards require a reasonable and adequate basis for recommendations (Diligence and Reasonable Basis), clear communication that distinguishes fact from opinion, and appropriate record retention. In alternatives, where diligence often depends on manager-provided information, the member must still exercise independent judgement and cannot outsource the reasonable-basis duty to the manager's marketing.",
          "Finally, conduct as CAIA members and candidates governs use of the designation itself: it must be represented accurately, never implying that holding the credential guarantees superior performance or investment results. Candidates are bound by the same conduct expectations. The exam tests proper versus improper references to the designation and the general obligation not to misrepresent the credential.",
        ],
        keyRules: [
          "Maintain a reasonable and adequate basis; communicate fact vs opinion clearly.",
          "Independent judgement is required even when relying on manager information.",
          "Use the CAIA designation accurately, never implying guaranteed performance.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m1-p1",
        testPointIds: ["caia-l1-m1-tp1", "caia-l1-m1-tp3"],
        style: "Standard-identification MCQ",
        question:
          "A hedge fund manager receives an unusually attractive allocation in an oversubscribed private deal and fills the orders of his largest, most profitable clients first, leaving smaller clients with little or none. Which Standard is most directly implicated, and why?",
        answerPlan: [
          "Isolate the decisive act.",
          "Match to the most specific Standard.",
          "Justify over general alternatives.",
        ],
        modelAnswer:
          "The decisive act is allocating a scarce investment opportunity unequally, favouring larger clients over smaller ones. This most directly implicates Fair Dealing, which requires treating all clients fairly in investment actions and recommendations, including the allocation of limited opportunities. It is more specific than a general Professionalism claim, and it is distinct from Suitability (which concerns whether an investment fits a client) — the problem here is unequal treatment across clients, not appropriateness for any one client.",
        markingGuide: [
          "Identifies the unequal allocation as the decisive act.",
          "Selects Fair Dealing as the most specific Standard.",
          "Distinguishes it from general Professionalism and from Suitability.",
        ],
      },
      {
        id: "caia-l1-m1-p2",
        testPointIds: ["caia-l1-m1-tp2"],
        style: "MNPI/mosaic MCQ",
        question:
          "An analyst combines a company's public filings, publicly observable shipping traffic, and several individually immaterial comments from suppliers to conclude that revenue will beat consensus, then recommends the stock. A colleague instead trades after a board member privately shares the unannounced earnings figure. Contrast the two actions.",
        answerPlan: [
          "Classify the analyst's inputs.",
          "Classify the colleague's information.",
          "State the permissible vs prohibited conclusion.",
        ],
        modelAnswer:
          "The analyst is applying mosaic theory: her inputs are public (filings, shipping traffic) and individually non-material (supplier comments), so assembling them into a market-beating conclusion is permissible research, and recommending the stock is allowed. The colleague, by contrast, traded on the unannounced earnings figure shared privately by a board member — information that is both material and non-public (MNPI) — which violates the Standard on Material Non-Public Information. The distinction is that the analyst created an insight from permissible pieces, while the colleague used a single decisive material non-public fact.",
        markingGuide: [
          "Identifies the analyst's work as permissible mosaic analysis.",
          "Identifies the colleague's information as MNPI and the trade as prohibited.",
          "Articulates the material-and-non-public test as the dividing line.",
        ],
      },
      {
        id: "caia-l1-m1-p3",
        testPointIds: ["caia-l1-m1-tp4", "caia-l1-m1-tp5"],
        style: "Disclosure/conduct MCQ",
        question:
          "A CAIA member steers clients to an affiliated administrator that pays him a referral fee he does not disclose, and his marketing states that his CAIA charter 'ensures superior returns.' Identify the two conduct problems.",
        answerPlan: [
          "Address the undisclosed referral fee.",
          "Address the designation misuse.",
        ],
        modelAnswer:
          "First, receiving a referral fee for steering clients to the affiliated administrator without disclosing it violates the requirement to disclose referral fees and conflicts to clients and employers; the clients cannot assess the objectivity of the recommendation. Second, stating that the CAIA charter 'ensures superior returns' misuses the designation by implying it guarantees performance, which violates the conduct requirements governing use of the credential. Both must be corrected: disclose (and ideally eliminate or manage) the referral conflict, and represent the designation accurately without performance claims.",
        markingGuide: [
          "Identifies the undisclosed referral fee as a disclosure violation.",
          "Identifies the 'ensures superior returns' claim as improper designation use.",
          "States corrective actions for each.",
        ],
      },
    ],
  }),

  "caia-l1-m2": examDepth({
    testPoints: [
      {
        id: "caia-l1-m2-tp1",
        title: "What defines an alternative investment",
        priority: "high",
        examinerFocus:
          "The characteristics that distinguish alternatives from traditional stocks/bonds: illiquidity, limited transparency, complex structures, active management, and different regulatory treatment.",
        typicalQuestionForms: [
          "Which characteristic is most associated with alternative investments?",
          "Which of the following is NOT a typical feature of alternatives?",
        ],
        mustKnow: [
          "Alternatives are typically less liquid, less transparent, and more complex than traditional assets.",
          "They often use active management, leverage, and performance-based fees.",
          "Regulatory treatment and investor eligibility differ from public markets.",
        ],
        scoringActions: [
          "Match the defining characteristic (illiquidity, complexity, opacity) to the asset.",
          "Reject 'daily liquidity/full transparency' as defining features of alternatives.",
        ],
      },
      {
        id: "caia-l1-m2-tp2",
        title: "The four main alternative asset classes and their roles",
        priority: "high",
        examinerFocus:
          "Classifying the major categories — real assets, hedge funds, private equity, and structured/private credit — and the primary role each plays (return enhancement, diversification, inflation hedging, income).",
        typicalQuestionForms: [
          "Which alternative asset class is most associated with an inflation hedge?",
          "Which category primarily seeks diversification from equity beta?",
        ],
        mustKnow: [
          "Real assets (real estate, infrastructure, natural resources) offer income and inflation sensitivity.",
          "Hedge funds seek absolute or diversifying returns via active strategies.",
          "Private equity and private/structured credit provide return enhancement and income from private markets.",
        ],
        scoringActions: [
          "Tie inflation-hedging roles to real assets.",
          "Tie diversification-from-equity roles to certain hedge fund strategies.",
        ],
      },
      {
        id: "caia-l1-m2-tp3",
        title: "The alpha-beta framework and sources of return",
        priority: "critical",
        examinerFocus:
          "Distinguishing beta (systematic market exposure), alternative/exotic beta (non-traditional risk premia), and alpha (skill-based excess return), and understanding that much 'alpha' may be alternative beta.",
        typicalQuestionForms: [
          "A strategy's return is explained by a non-traditional risk premium. Is this alpha or beta?",
          "Which return source reflects manager skill rather than risk exposure?",
        ],
        mustKnow: [
          "Beta is return from systematic risk exposure; alpha is skill-based excess return.",
          "Alternative (exotic) beta captures non-traditional risk premia (e.g., value, carry, illiquidity).",
          "Return once labelled alpha is often alternative beta once the risk premium is identified.",
        ],
        scoringActions: [
          "Ask whether the return is explained by an identifiable risk premium (beta) or genuine skill (alpha).",
          "Treat priced, replicable premia as alternative beta, not alpha.",
        ],
      },
      {
        id: "caia-l1-m2-tp4",
        title: "Illiquidity, the J-curve, and fund structures",
        priority: "high",
        examinerFocus:
          "How closed-end (drawdown) fund structures with capital calls and distributions produce the J-curve, and the illiquidity premium expected as compensation for lock-ups.",
        typicalQuestionForms: [
          "What causes the J-curve in a private fund's early years?",
          "Why do investors expect an illiquidity premium?",
        ],
        mustKnow: [
          "Closed-end funds call capital over time and return it as investments are realised.",
          "The J-curve reflects early fees/costs and write-downs before value is created.",
          "Investors require an illiquidity premium as compensation for locking up capital.",
        ],
        scoringActions: [
          "Attribute early negative returns (J-curve) to fees and immature investments.",
          "Tie lock-ups to an expected illiquidity premium.",
        ],
      },
      {
        id: "caia-l1-m2-tp5",
        title: "Fee structures and alignment",
        priority: "medium",
        examinerFocus:
          "Management and performance (incentive) fees, hurdle rates, high-water marks, and how they align — or misalign — manager and investor interests.",
        typicalQuestionForms: [
          "What is the purpose of a high-water mark?",
          "How does a hurdle rate affect incentive fees?",
        ],
        mustKnow: [
          "Typical structures combine a management fee with a performance/incentive fee.",
          "A high-water mark prevents charging incentive fees on gains that merely recover prior losses.",
          "A hurdle rate requires a minimum return before incentive fees apply.",
        ],
        scoringActions: [
          "Explain the high-water mark as loss-recovery protection for investors.",
          "Explain the hurdle as a minimum return threshold for incentive fees.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "This foundational module frames the whole curriculum; convert the alpha-beta and structure/fee items, which recur across later product modules.",
      timeBudget:
        "About 60 seconds per item; mostly definitional and classification-based.",
      answerSequence: [
        "Classify the asset class and its primary role.",
        "For returns, separate beta, alternative beta, and alpha.",
        "For structures, tie lock-ups to the J-curve and illiquidity premium.",
        "For fees, apply the high-water-mark and hurdle mechanics.",
      ],
      qualityChecks: [
        "Did you treat identifiable risk premia as alternative beta, not alpha?",
        "Did you attribute early negative returns to the J-curve mechanics?",
        "Did you apply the high-water mark and hurdle correctly?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m2-sn1",
        title: "Defining alternatives and their portfolio roles",
        testPointIds: ["caia-l1-m2-tp1", "caia-l1-m2-tp2"],
        explanation: [
          "Alternative investments are defined less by a single feature than by a cluster of characteristics that separate them from public stocks and bonds: they tend to be illiquid, less transparent, structurally complex, actively managed, and subject to different regulation and investor-eligibility rules. These features are the source of both their potential benefits (diversification, differentiated return drivers) and their risks (valuation uncertainty, limited exit).",
          "The curriculum organises them into broad classes, each with a primary portfolio role. Real assets — real estate, infrastructure, and natural resources — provide income and sensitivity to inflation. Hedge funds pursue absolute or diversifying returns through active strategies and can reduce dependence on equity beta. Private equity and private/structured credit access return and income in private markets that public investors cannot reach directly. Knowing the role each class is expected to play frames every allocation question that follows.",
        ],
        keyRules: [
          "Alternatives cluster around illiquidity, opacity, complexity, and active management.",
          "Real assets hedge inflation; hedge funds diversify; private markets enhance return/income.",
          "Portfolio role, not just definition, drives later allocation reasoning.",
        ],
      },
      {
        id: "caia-l1-m2-sn2",
        title: "Alpha, beta, and alternative beta, worked",
        testPointIds: ["caia-l1-m2-tp3"],
        explanation: [
          "The alpha-beta framework is the intellectual core of alternatives analysis. Beta is the return earned for bearing systematic (market) risk; alpha is excess return attributable to manager skill after accounting for risk exposures. Between them sits alternative (exotic) beta — return from non-traditional but identifiable and often replicable risk premia such as value, carry, momentum, and illiquidity. A key insight the exam tests is that much of what managers historically sold as alpha is really alternative beta: once a risk premium is identified and can be captured systematically, it is beta, not skill.",
          "This matters for fees and expectations. Investors should not pay alpha fees for exposures they can obtain cheaply as alternative beta, and they should expect true alpha to be scarce and hard to sustain. When a strategy's returns are well explained by a known risk premium, they are beta; when returns persist after controlling for all identifiable exposures, that residual is the candidate for genuine alpha.",
        ],
        keyRules: [
          "Beta = systematic risk return; alpha = skill-based excess return.",
          "Alternative beta = non-traditional, identifiable, replicable risk premia.",
          "Returns explained by a known premium are beta, not alpha.",
        ],
        workedProblem: {
          scenario:
            "A fund reports a 12% annual return and markets it as pure alpha. A factor analysis shows: 4% is explained by equity market beta, 3% by a value premium, 2% by a carry premium, and 1% by an illiquidity premium; the remaining 2% is unexplained by any identified factor. Decompose the return and state how much is genuine alpha.",
          steps: [
            "Separate traditional beta: 4% comes from equity market exposure — this is traditional beta, not alpha.",
            "Identify alternative beta components: 3% value + 2% carry + 1% illiquidity = 6% from identifiable, replicable risk premia — alternative beta, not alpha.",
            "Sum the risk-premium-explained return: 4% + 6% = 10% is attributable to beta and alternative beta.",
            "Compute the residual: 12% total - 10% explained = 2% unexplained by any identified factor.",
            "Interpret the residual: the 2% residual is the candidate for genuine alpha, and even that should be tested for statistical significance and persistence before being credited to skill.",
          ],
          conclusion:
            "Only about 2% of the 12% return is potential genuine alpha; 4% is traditional equity beta and 6% is alternative beta from value, carry, and illiquidity premia. The fund's 'pure alpha' claim is unsupported — most of its return is replicable risk-premium exposure that should not command alpha fees.",
          markingNotes: [
            "Full credit requires separating traditional beta, alternative beta, and the residual alpha (2%).",
            "Treating the full 12% (or the 6% of alternative beta) as alpha is the classic error and loses marks.",
          ],
        },
      },
      {
        id: "caia-l1-m2-sn3",
        title: "Closed-end structures, the J-curve, and illiquidity",
        testPointIds: ["caia-l1-m2-tp4"],
        explanation: [
          "Many alternatives use a closed-end (drawdown) fund structure. Investors commit capital that is called over an investment period as the manager finds deals, and capital is returned through distributions as investments are realised. This structure produces the J-curve: in the early years, management fees and transaction costs are incurred and immature investments may be written down, so reported returns are negative, before value creation and realisations push cumulative returns positive later — tracing a J shape.",
          "The lock-up of capital is compensated by an expected illiquidity premium: because investors cannot readily exit, they require a higher expected return than for comparable liquid assets. The exam tests both the mechanics (capital calls, distributions, the J-curve pattern) and the rationale for the illiquidity premium, and it distinguishes closed-end drawdown vehicles from open-end structures that permit periodic subscriptions and redemptions.",
        ],
        keyRules: [
          "Closed-end funds call capital over time and distribute on realisation.",
          "The J-curve: early fees/write-downs cause negative early returns before value is realised.",
          "Lock-ups justify an expected illiquidity premium.",
        ],
      },
      {
        id: "caia-l1-m2-sn4",
        title: "Fees and alignment of interests",
        testPointIds: ["caia-l1-m2-tp5"],
        explanation: [
          "Alternative fee structures typically pair a management fee (a percentage of assets or commitments, funding operations) with a performance or incentive fee (a share of profits, intended to align the manager with investors). Two features moderate the incentive fee. A high-water mark ensures the manager earns incentive fees only on new profits, not on gains that merely recover prior losses, protecting investors from paying twice for the same performance. A hurdle rate requires the fund to exceed a minimum return before incentive fees apply, so the manager is not rewarded for returns investors could earn elsewhere.",
          "These mechanics create alignment but also potential misalignment: performance fees can encourage excessive risk-taking (especially without a high-water mark), and management fees on large asset bases can reward gathering assets over performance. The exam tests the purpose of high-water marks and hurdles and the general principle that fee design shapes manager behaviour.",
        ],
        keyRules: [
          "Structures pair a management fee with a performance/incentive fee.",
          "High-water mark: incentive fees only on new profits above prior peaks.",
          "Hurdle rate: a minimum return before incentive fees apply.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m2-p1",
        testPointIds: ["caia-l1-m2-tp3"],
        style: "Return-decomposition MCQ",
        question:
          "A long/short equity fund claims its 9% return is alpha. Analysis shows 3% from net equity beta and 4% from a documented momentum premium, with 2% unexplained. How much is genuine alpha, and what does this imply about the fund's fees?",
        answerPlan: [
          "Separate beta and alternative beta.",
          "Compute the residual alpha.",
          "Draw the fee implication.",
        ],
        modelAnswer:
          "Of the 9% return, 3% is traditional equity beta and 4% is alternative beta from the momentum risk premium, leaving 2% unexplained as the candidate for genuine alpha. Thus only about 2% reflects potential skill; the other 7% is replicable risk-premium exposure. This implies the fund should not command full alpha fees on the whole return — investors can access the momentum premium more cheaply as alternative beta, so paying performance fees as if all 9% were skill overpays for exposures that are not alpha.",
        markingGuide: [
          "Identifies 3% traditional beta and 4% alternative beta (momentum).",
          "Isolates the 2% residual as potential alpha.",
          "States investors should not pay alpha fees for replicable alternative beta.",
        ],
      },
      {
        id: "caia-l1-m2-p2",
        testPointIds: ["caia-l1-m2-tp4"],
        style: "Structure MCQ",
        question:
          "An investor commits $10 million to a closed-end private fund and is surprised that after two years the fund reports negative cumulative returns despite no major problems. Explain the pattern and why the investor still expects a premium for holding it.",
        answerPlan: [
          "Explain capital calls/timing.",
          "Explain the J-curve.",
          "Explain the illiquidity premium.",
        ],
        modelAnswer:
          "In a closed-end fund, capital is called over time as deals are made, and early years incur management fees and transaction costs while investments are still immature and may be written down — producing the J-curve, where cumulative returns are negative before value creation and realisations turn them positive later. This is a normal early-life pattern, not necessarily a sign of trouble. The investor still expects an illiquidity premium: because the capital is locked up and cannot be readily redeemed, the fund must offer a higher expected return than a comparable liquid investment to compensate for that illiquidity.",
        markingGuide: [
          "Explains the capital-call/distribution timing of closed-end funds.",
          "Attributes early negative returns to the J-curve (fees + immature investments).",
          "Explains the illiquidity premium as compensation for the lock-up.",
        ],
      },
      {
        id: "caia-l1-m2-p3",
        testPointIds: ["caia-l1-m2-tp5"],
        style: "Fee-mechanics MCQ",
        question:
          "A hedge fund charges '2 and 20' with a high-water mark and no hurdle. In year 1 the fund falls 10%; in year 2 it rises 15%. Explain how the high-water mark affects the incentive fee in year 2.",
        answerPlan: [
          "Establish the high-water mark logic.",
          "Apply it across the two years.",
          "State the incentive-fee consequence.",
        ],
        modelAnswer:
          "A high-water mark means the manager earns an incentive fee only on gains that exceed the highest prior value on which fees were charged. After year 1's 10% loss, the fund is below its starting high-water mark. In year 2, the 15% gain must first recover the year-1 loss before any incentive fee applies; only the portion of the year-2 return that lifts the fund above the previous high-water mark is subject to the 20% incentive fee. This protects the investor from paying an incentive fee merely to recover prior losses, though the 2% management fee is still charged.",
        markingGuide: [
          "Explains the high-water mark restricts incentive fees to new peaks.",
          "Applies it so the year-2 gain first recovers the year-1 loss.",
          "Notes only gains above the prior high-water mark bear the incentive fee.",
        ],
      },
    ],
  }),

  "caia-l1-m3": examDepth({
    testPoints: [
      {
        id: "caia-l1-m3-tp1",
        title: "Real estate ownership forms and return sources",
        priority: "high",
        examinerFocus:
          "Distinguishing direct/private real estate, private funds, and public REITs, and the two return sources (income yield and appreciation) plus the role of leverage.",
        typicalQuestionForms: [
          "What are the two primary sources of real estate return?",
          "How do public REITs differ from direct private real estate in liquidity and correlation?",
        ],
        mustKnow: [
          "Real estate return comes from income (rent) yield and capital appreciation.",
          "Access forms: direct ownership, private funds, and publicly traded REITs.",
          "Public REITs are liquid but more equity-correlated; private real estate is illiquid with smoothed valuations.",
        ],
        scoringActions: [
          "Split real estate return into income and appreciation.",
          "Contrast public REIT liquidity/correlation with private real estate.",
        ],
      },
      {
        id: "caia-l1-m3-tp2",
        title: "Real estate valuation and cap rates",
        priority: "critical",
        examinerFocus:
          "Applying the capitalization-rate relationship (value = NOI / cap rate), computing NOI, and understanding how cap rates move inversely with value and reflect risk/growth.",
        typicalQuestionForms: [
          "Compute a property's value given NOI and a cap rate.",
          "If cap rates rise, what happens to property values?",
        ],
        mustKnow: [
          "Net operating income (NOI) = rental income - operating expenses (before financing/taxes).",
          "Value = NOI / cap rate; value and cap rate move inversely.",
          "Lower cap rates imply higher prices, lower risk, or higher expected growth.",
        ],
        scoringActions: [
          "Compute NOI first, then apply value = NOI / cap rate.",
          "Reason that rising cap rates lower values.",
        ],
      },
      {
        id: "caia-l1-m3-tp3",
        title: "Infrastructure characteristics and stages",
        priority: "high",
        examinerFocus:
          "The defining features of infrastructure (long-lived assets, stable cash flows, often inflation-linked, high barriers), and the greenfield vs brownfield distinction.",
        typicalQuestionForms: [
          "Which characteristic is typical of core infrastructure cash flows?",
          "How does greenfield infrastructure differ from brownfield?",
        ],
        mustKnow: [
          "Infrastructure assets are long-lived with stable, often regulated or contracted, cash flows.",
          "Many have inflation linkage and high barriers to entry (monopoly-like).",
          "Greenfield = new build (construction/ramp-up risk); brownfield = existing, operating asset.",
        ],
        scoringActions: [
          "Tie stable, inflation-linked cash flows to core infrastructure.",
          "Classify greenfield (build) vs brownfield (operating) by development stage.",
        ],
      },
      {
        id: "caia-l1-m3-tp4",
        title: "Natural resources and commodities as inflation hedges",
        priority: "high",
        examinerFocus:
          "How natural resources (timber, farmland, energy, metals) and commodities behave, including their inflation-hedging role and the components of commodity futures return (spot, roll, collateral yield).",
        typicalQuestionForms: [
          "Why are commodities considered an inflation hedge?",
          "What are the components of return from a collateralized commodity futures position?",
        ],
        mustKnow: [
          "Natural resources and commodities tend to rise with inflation, providing a hedge.",
          "Commodity futures return = spot return + roll yield (contango/backwardation) + collateral yield.",
          "Backwardation gives positive roll yield; contango gives negative roll yield.",
        ],
        scoringActions: [
          "Decompose commodity futures return into spot, roll, and collateral yield.",
          "Tie backwardation to positive and contango to negative roll yield.",
        ],
      },
      {
        id: "caia-l1-m3-tp5",
        title: "Real assets, inflation, and diversification",
        priority: "medium",
        examinerFocus:
          "Why real assets are held — inflation sensitivity, income, and diversification — and their limitations (illiquidity, valuation lags, operating risk).",
        typicalQuestionForms: [
          "What is the primary portfolio role of real assets?",
          "Which limitation applies to private real assets?",
        ],
        mustKnow: [
          "Real assets provide inflation sensitivity, income, and diversification from financial assets.",
          "Valuations are often appraisal-based and lagged, smoothing reported volatility.",
          "Illiquidity and operating/development risk are key limitations.",
        ],
        scoringActions: [
          "State inflation-hedging and diversification as the portfolio roles.",
          "Flag appraisal smoothing and illiquidity as limitations.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Real assets are a large product area; convert the cap-rate valuation and commodity-return-decomposition items, which are the most computational here.",
      timeBudget:
        "60–90 seconds per item; cap-rate and roll-yield computations take under a minute once set up.",
      answerSequence: [
        "For real estate, compute NOI then value = NOI / cap rate.",
        "For infrastructure, classify by cash-flow stability and development stage.",
        "For commodities, decompose return into spot, roll, and collateral yield.",
        "For roles, tie real assets to inflation and diversification.",
      ],
      qualityChecks: [
        "Did you reason cap rates and values move inversely?",
        "Did you assign roll-yield sign correctly (backwardation positive, contango negative)?",
        "Did you flag appraisal smoothing when comparing volatilities?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m3-sn1",
        title: "Real estate access, returns, and valuation, worked",
        testPointIds: ["caia-l1-m3-tp1", "caia-l1-m3-tp2"],
        explanation: [
          "Real estate can be accessed in several forms with different liquidity and behaviour: direct ownership and private funds are illiquid and valued by periodic appraisal (which smooths reported volatility), while publicly traded REITs are liquid but trade with more equity-market correlation and price volatility. Returns come from two sources — the income yield from rents and capital appreciation — and leverage amplifies both the returns and the risk.",
          "The workhorse valuation tool is the capitalization rate. Net operating income (NOI) is rental income minus operating expenses, before financing and taxes, and value equals NOI divided by the cap rate. Because value and cap rate are inversely related, rising cap rates (from higher required returns or lower expected growth) push values down, while falling cap rates push values up. The cap rate embeds the market's view of risk and growth for the property, so comparing cap rates across properties is a comparison of risk and expected growth.",
        ],
        keyRules: [
          "Return = income yield + appreciation; leverage amplifies both.",
          "NOI = rental income - operating expenses (pre-financing/tax).",
          "Value = NOI / cap rate; value and cap rate move inversely.",
        ],
        formulas: ["NOI = rental income - operating expenses", "Value = NOI / cap rate"],
        workedProblem: {
          scenario:
            "An office property generates $2,000,000 of gross rental income with $700,000 of operating expenses. Comparable properties trade at a 6.5% cap rate. Compute the property's value. Then estimate the new value if rising interest rates push the market cap rate to 7.5%, and comment on the sensitivity.",
          steps: [
            "Compute NOI: gross rent $2,000,000 - operating expenses $700,000 = $1,300,000.",
            "Apply the cap-rate valuation at 6.5%: value = NOI / cap rate = $1,300,000 / 0.065 = $20,000,000.",
            "Recompute at the higher 7.5% cap rate: value = $1,300,000 / 0.075 = $17,333,333.",
            "Measure the change: value falls from $20,000,000 to about $17,333,333, a decline of roughly $2,666,667 or about 13.3%.",
            "Interpret sensitivity: a 1 percentage-point rise in the cap rate cut value by about 13%, showing how sensitive real estate values are to cap-rate (and thus interest-rate/required-return) shifts even when NOI is unchanged.",
          ],
          conclusion:
            "At a 6.5% cap rate the property is worth $20 million; at 7.5% it is worth about $17.33 million. Holding NOI constant, a 1-point cap-rate increase reduced value by roughly 13%, illustrating the inverse and highly sensitive relationship between cap rates and property values.",
          markingNotes: [
            "Full credit requires computing NOI correctly and applying value = NOI / cap rate at both rates.",
            "Adding financing costs into NOI, or reversing the cap-rate/value relationship, loses marks.",
          ],
        },
      },
      {
        id: "caia-l1-m3-sn2",
        title: "Infrastructure characteristics and stages",
        testPointIds: ["caia-l1-m3-tp3"],
        explanation: [
          "Infrastructure comprises long-lived physical assets that provide essential services — transport, utilities, energy, communications. Core infrastructure is prized for stable, predictable cash flows that are frequently regulated or contracted and often linked to inflation, with high barriers to entry that give the assets monopoly-like characteristics. These features make core infrastructure a source of steady income and inflation protection, though at the cost of illiquidity and exposure to regulatory and political risk.",
          "The development stage drives the risk profile. Greenfield infrastructure involves building a new asset, carrying construction, permitting, and ramp-up risk with uncertain early cash flows; brownfield infrastructure is an existing, operating asset with an established cash-flow history and lower risk. The exam tests classifying assets by cash-flow stability and by greenfield-versus-brownfield stage, and recognising the inflation-linkage and barrier-to-entry features that distinguish infrastructure from other real assets.",
        ],
        keyRules: [
          "Core infrastructure: stable, regulated/contracted, often inflation-linked cash flows.",
          "High barriers to entry create monopoly-like characteristics.",
          "Greenfield = build risk; brownfield = existing operating asset.",
        ],
      },
      {
        id: "caia-l1-m3-sn3",
        title: "Natural resources, commodities, and futures return",
        testPointIds: ["caia-l1-m3-tp4"],
        explanation: [
          "Natural resources — timber, farmland, energy, and metals — and commodities generally are valued for their tendency to rise with inflation, making them a hedge against unexpected inflation that erodes financial assets. Physical resources like timberland and farmland also produce income (harvests, crops) and biological growth. Commodities themselves are usually accessed through futures rather than physical holdings.",
          "The return on a collateralized commodity futures position has three components: the spot return (change in the commodity's price), the roll yield (from rolling expiring futures into new contracts), and the collateral yield (interest earned on the cash backing the futures). The roll yield's sign depends on the futures curve: in backwardation (near-term prices above longer-dated), rolling generates positive roll yield; in contango (longer-dated above near-term), rolling generates negative roll yield. The exam tests this decomposition and the contango/backwardation sign convention.",
        ],
        keyRules: [
          "Natural resources/commodities tend to hedge inflation.",
          "Commodity futures return = spot + roll yield + collateral yield.",
          "Backwardation: positive roll yield; contango: negative roll yield.",
        ],
        formulas: ["Collateralized futures return ≈ spot return + roll yield + collateral yield"],
      },
      {
        id: "caia-l1-m3-sn4",
        title: "Real assets: roles and limitations",
        testPointIds: ["caia-l1-m3-tp5", "caia-l1-m3-tp1"],
        explanation: [
          "The portfolio case for real assets rests on three pillars: sensitivity to inflation (helping protect real purchasing power), income generation (rents, tolls, harvests), and diversification from traditional financial assets whose returns are driven by different factors. These roles make real assets a common allocation for institutions seeking inflation protection and stable cash yield.",
          "The limitations are equally important for the exam. Private real assets are illiquid, with long holding periods and limited exit options, and their valuations are often appraisal-based and lagged, which smooths reported volatility and can understate true risk and correlation with markets. They also carry operating and development risk (vacancy, construction overruns, commodity price swings) and, for infrastructure, regulatory and political risk. Sound analysis adjusts for appraisal smoothing when comparing real-asset volatility to that of public markets.",
        ],
        keyRules: [
          "Roles: inflation sensitivity, income, and diversification.",
          "Appraisal-based valuations are lagged and smooth reported volatility.",
          "Illiquidity, operating/development, and regulatory risks are key limitations.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m3-p1",
        testPointIds: ["caia-l1-m3-tp2"],
        style: "Cap-rate computation MCQ",
        question:
          "A retail property produces $1,500,000 of rental income and $500,000 of operating expenses, and comparable assets trade at an 8% cap rate. Compute the value. If investor sentiment improves and the cap rate compresses to 6.25%, compute the new value and comment.",
        answerPlan: [
          "Compute NOI.",
          "Value at 8% and 6.25%.",
          "Interpret the change.",
        ],
        modelAnswer:
          "NOI = $1,500,000 - $500,000 = $1,000,000. At an 8% cap rate, value = $1,000,000 / 0.08 = $12,500,000. If the cap rate compresses to 6.25%, value = $1,000,000 / 0.0625 = $16,000,000. The value rises by $3,500,000 (28%) purely from cap-rate compression, with NOI unchanged — showing that a lower cap rate (reflecting lower required returns or higher expected growth) drives values up, the inverse of the earlier example.",
        markingGuide: [
          "Computes NOI of $1,000,000.",
          "Values the property at $12.5M (8%) and $16M (6.25%).",
          "Explains cap-rate compression raises value inversely.",
        ],
      },
      {
        id: "caia-l1-m3-p2",
        testPointIds: ["caia-l1-m3-tp4"],
        style: "Commodity-return MCQ",
        question:
          "A collateralized commodity futures position earns a 4% spot return, and the futures market is in contango such that rolling contracts costs 3%; the cash collateral earns 2%. Compute the approximate total return and explain the effect of contango.",
        answerPlan: [
          "Identify the three components.",
          "Assign the roll-yield sign.",
          "Sum the return.",
        ],
        modelAnswer:
          "Total return ≈ spot return + roll yield + collateral yield. The spot return is +4% and the collateral yield is +2%. Because the market is in contango (longer-dated futures priced above near-term), rolling contracts produces a negative roll yield of -3%. Total return ≈ 4% - 3% + 2% = 3%. Contango drags on the return: the investor repeatedly rolls into more expensive longer-dated contracts, so even a positive spot move is partly offset by the negative roll yield.",
        markingGuide: [
          "Identifies spot, roll, and collateral components.",
          "Assigns a negative roll yield to contango.",
          "Computes total return of about 3% and explains the contango drag.",
        ],
      },
      {
        id: "caia-l1-m3-p3",
        testPointIds: ["caia-l1-m3-tp1", "caia-l1-m3-tp5"],
        style: "Comparison MCQ",
        question:
          "An investor notes that private real estate in his portfolio shows much lower reported volatility than the public REITs he also holds, and concludes private real estate is far less risky. Critique this conclusion.",
        answerPlan: [
          "Explain appraisal smoothing.",
          "Contrast REIT pricing.",
          "Correct the conclusion.",
        ],
        modelAnswer:
          "The lower reported volatility is partly an artifact of valuation method, not necessarily lower true risk. Private real estate is valued by periodic appraisals, which lag and smooth market movements, dampening measured volatility; public REITs are continuously priced in the market, so they reflect volatility and equity correlation in real time. Adjusting for appraisal smoothing, private real estate's true volatility and correlation are higher than reported. The investor should not conclude private real estate is far less risky; he should also weigh its illiquidity and operating risks, which the smoothed figures understate.",
        markingGuide: [
          "Explains appraisal smoothing understates private real-estate volatility.",
          "Notes REITs are continuously priced and more equity-correlated.",
          "Corrects the risk conclusion and cites illiquidity/operating risk.",
        ],
      },
    ],
  }),

  "caia-l1-m4": examDepth({
    testPoints: [
      {
        id: "caia-l1-m4-tp1",
        title: "Private equity strategies across the company life cycle",
        priority: "high",
        examinerFocus:
          "Distinguishing venture capital (early-stage, equity, high failure/high upside) from buyouts (mature companies, leverage, control) and growth equity in between.",
        typicalQuestionForms: [
          "Which private equity strategy uses substantial leverage to acquire mature companies?",
          "Which strategy is characterised by high failure rates and a few large winners?",
        ],
        mustKnow: [
          "Venture capital funds early-stage companies with equity; returns are driven by a few big winners.",
          "Buyouts acquire mature companies using significant leverage and take control.",
          "Growth equity sits between, funding expansion of established but growing companies.",
        ],
        scoringActions: [
          "Map the strategy to the company's life-cycle stage.",
          "Tie leverage and control to buyouts, high dispersion to venture.",
        ],
      },
      {
        id: "caia-l1-m4-tp2",
        title: "The leveraged buyout value-creation model",
        priority: "critical",
        examinerFocus:
          "The three levers of LBO returns — leverage (debt paydown), operational improvement (EBITDA growth), and multiple expansion — and how debt amplifies equity returns.",
        typicalQuestionForms: [
          "What are the primary sources of return in a leveraged buyout?",
          "How does debt paydown create equity value in an LBO?",
        ],
        mustKnow: [
          "LBO equity return comes from debt paydown, EBITDA growth, and exit-multiple expansion.",
          "Entry equity is small relative to debt, so debt reduction accrues to equity.",
          "Leverage amplifies both gains and losses; excessive leverage raises default risk.",
        ],
        scoringActions: [
          "Attribute LBO returns to the three levers.",
          "Show how debt paydown transfers enterprise value to equity.",
        ],
      },
      {
        id: "caia-l1-m4-tp3",
        title: "Fund structure, cash flows, and the J-curve",
        priority: "high",
        examinerFocus:
          "The GP/LP structure, capital commitments and calls, distributions, the investment/harvest periods, and the resulting J-curve of net cash flows.",
        typicalQuestionForms: [
          "What is the difference between committed and called capital?",
          "Why do LPs experience a J-curve of net cash flows?",
        ],
        mustKnow: [
          "GP manages the fund; LPs commit capital that is called over the investment period.",
          "Distributions occur during the harvest period as portfolio companies are exited.",
          "Early fees and unrealised investments produce the J-curve of net cash flow.",
        ],
        scoringActions: [
          "Separate committed, called (paid-in), and distributed capital.",
          "Attribute the J-curve to early fees and delayed realisations.",
        ],
      },
      {
        id: "caia-l1-m4-tp4",
        title: "Performance metrics: IRR, MOIC/TVPI, DPI, RVPI",
        priority: "critical",
        examinerFocus:
          "Computing and interpreting private-equity performance metrics and understanding the difference between money-weighted IRR and multiples, and realised (DPI) vs unrealised (RVPI) value.",
        typicalQuestionForms: [
          "Compute the TVPI/DPI given paid-in, distributed, and residual value.",
          "Why can a high IRR coexist with a modest multiple?",
        ],
        mustKnow: [
          "TVPI = (distributions + residual value) / paid-in; DPI = distributions / paid-in; RVPI = residual value / paid-in.",
          "IRR is money-weighted and sensitive to timing; multiples ignore timing.",
          "DPI measures realised returns; RVPI measures unrealised (marked) value.",
        ],
        scoringActions: [
          "Compute the requested multiple from paid-in, distributed, and residual value.",
          "Interpret IRR (timing-sensitive) alongside multiples (timing-agnostic).",
        ],
      },
      {
        id: "caia-l1-m4-tp5",
        title: "The distribution waterfall and carried interest",
        priority: "medium",
        examinerFocus:
          "How the waterfall allocates proceeds — return of capital, preferred return (hurdle), GP catch-up, then carried-interest split — and clawback provisions.",
        typicalQuestionForms: [
          "In what order are LP and GP proceeds distributed?",
          "What is the purpose of a clawback provision?",
        ],
        mustKnow: [
          "Typical waterfall: return of capital, preferred return, GP catch-up, then carried-interest split.",
          "Carried interest is the GP's share of profits (commonly around 20%).",
          "Clawback returns excess carry to LPs if later losses leave the GP overpaid.",
        ],
        scoringActions: [
          "Order the waterfall steps before allocating proceeds.",
          "Use clawback to correct GP overpayment across the fund's life.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Private equity is a core Level I product area; convert the LBO-lever and performance-metric computations, which are the most testable and reusable.",
      timeBudget:
        "60–90 seconds per item; multiple and waterfall computations take about a minute.",
      answerSequence: [
        "Classify the PE strategy by life-cycle stage.",
        "For LBOs, attribute returns to debt paydown, EBITDA growth, and multiple change.",
        "For performance, compute the requested multiple and interpret IRR vs multiples.",
        "For waterfalls, apply the steps in order.",
      ],
      qualityChecks: [
        "Did you separate committed, paid-in, distributed, and residual value?",
        "Did you distinguish DPI (realised) from RVPI (unrealised)?",
        "Did you apply the waterfall steps in the correct order?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m4-sn1",
        title: "PE strategies and the LBO value-creation model",
        testPointIds: ["caia-l1-m4-tp1", "caia-l1-m4-tp2"],
        explanation: [
          "Private equity spans the company life cycle. Venture capital funds early-stage companies with equity, accepting high failure rates in exchange for the outsized returns of a few winners; growth equity funds the expansion of established but still-growing companies; and buyouts acquire mature, cash-generative companies, usually with significant leverage, taking control to drive change. Recognising which strategy fits a described company stage and financing approach is a frequent Level I task.",
          "The leveraged buyout has a specific value-creation model with three levers. First, leverage: the buyer funds much of the purchase with debt and a relatively small equity check, so as the company's cash flow pays down debt, enterprise value increasingly accrues to equity. Second, operational improvement: growing EBITDA (through margin expansion, revenue growth, or add-on acquisitions) increases enterprise value. Third, multiple expansion: exiting at a higher EBITDA multiple than the entry multiple. Leverage magnifies all of these, but also magnifies losses and raises default risk if cash flows disappoint.",
        ],
        keyRules: [
          "VC = early-stage equity (few big winners); buyout = leveraged control of mature firms.",
          "LBO returns come from debt paydown, EBITDA growth, and multiple expansion.",
          "Leverage amplifies both equity returns and default risk.",
        ],
        workedProblem: {
          scenario:
            "A sponsor buys a company for an enterprise value of $500 million (10x $50m EBITDA), funding it with $350m debt and $150m equity. Over five years, EBITDA grows to $70m, $200m of debt is repaid, and the company is sold at an 11x multiple. Compute the exit equity value and the money multiple (MOIC), and attribute the value creation to the three LBO levers.",
          steps: [
            "Compute exit enterprise value: 11x exit multiple × $70m EBITDA = $770m.",
            "Compute exit net debt: initial debt $350m - $200m repaid = $150m remaining.",
            "Compute exit equity value: enterprise value $770m - remaining debt $150m = $620m.",
            "Compute MOIC: exit equity $620m / entry equity $150m = about 4.13x.",
            "Attribute the levers: EBITDA growth ($50m to $70m) and multiple expansion (10x to 11x) both raised enterprise value, while $200m of debt paydown converted enterprise value into equity — together lifting equity from $150m to $620m.",
          ],
          conclusion:
            "Exit equity value is $620 million, a MOIC of about 4.1x on the $150m invested. All three LBO levers contributed: operational EBITDA growth, exit-multiple expansion, and $200m of debt paydown, with leverage amplifying the equity return well above the enterprise-value growth.",
          markingNotes: [
            "Full credit requires computing exit enterprise value, subtracting remaining debt, and the MOIC, plus attributing to the three levers.",
            "Forgetting to subtract remaining debt, or ignoring debt paydown as a value lever, loses marks.",
          ],
        },
      },
      {
        id: "caia-l1-m4-sn2",
        title: "Fund structure, cash flows, and the J-curve",
        testPointIds: ["caia-l1-m4-tp3"],
        explanation: [
          "A private equity fund is organised as a limited partnership: the general partner (GP) manages the fund and makes investment decisions, while limited partners (LPs) provide the capital. LPs make a capital commitment that the GP draws down (calls) over an investment period as deals are sourced; the fund then enters a harvest period during which portfolio companies are exited and proceeds are distributed to LPs. Committed capital is the total promised; called (paid-in) capital is what has actually been drawn; distributed capital is what has been returned.",
          "This structure produces the J-curve of net cash flows: in the early years, LPs pay management fees and fund investments that are still immature and often carried at cost or written down, so net cash flow and reported returns are negative. As investments mature and are realised in the harvest period, distributions exceed calls and cumulative net cash flow turns positive, tracing the J. The exam tests the committed/called/distributed distinctions and the mechanics behind the J-curve.",
        ],
        keyRules: [
          "GP manages; LPs commit capital called over the investment period.",
          "Committed vs called (paid-in) vs distributed capital are distinct.",
          "Early fees and immature investments create the J-curve of net cash flow.",
        ],
      },
      {
        id: "caia-l1-m4-sn3",
        title: "Performance metrics: multiples versus IRR",
        testPointIds: ["caia-l1-m4-tp4"],
        explanation: [
          "Private equity performance is measured with both multiples and IRR because each answers a different question. TVPI (total value to paid-in) equals distributions plus residual value divided by paid-in capital and measures total value created per dollar invested; DPI (distributions to paid-in) captures only realised cash returned; and RVPI (residual value to paid-in) captures the remaining unrealised (marked) value. Together, TVPI = DPI + RVPI. Multiples are simple and timing-agnostic but ignore when cash flows occurred.",
          "IRR is the money-weighted return that accounts for the timing and size of every cash flow, so it rewards early distributions and is sensitive to the pattern of calls and distributions. This is why a fund can post a high IRR with a modest multiple (fast early returns) or a high multiple with a lower IRR (large gains realised slowly). Sophisticated analysis reports both, and treats early-life IRRs cautiously because unrealised marks (RVPI) dominate before exits occur.",
        ],
        keyRules: [
          "TVPI = (distributions + residual value) / paid-in = DPI + RVPI.",
          "DPI = realised; RVPI = unrealised (marked) value.",
          "IRR is money-weighted (timing-sensitive); multiples ignore timing.",
        ],
        formulas: [
          "TVPI = (distributions + residual value) / paid-in capital",
          "DPI = distributions / paid-in capital",
          "RVPI = residual value / paid-in capital",
        ],
      },
      {
        id: "caia-l1-m4-sn4",
        title: "The distribution waterfall and carried interest",
        testPointIds: ["caia-l1-m4-tp5"],
        explanation: [
          "The waterfall governs how realised proceeds are split between LPs and the GP, and the exam tests its order. A common sequence is: first, return of capital to LPs (their paid-in capital, and often fees); second, a preferred return (hurdle) to LPs, a minimum return before the GP shares profits; third, a GP catch-up, allowing the GP to receive a larger share until it has caught up to its agreed profit split; and fourth, the carried-interest split of remaining profits (commonly around 80/20 in the LPs' favour). Carried interest is the GP's share of the profits and the main performance incentive.",
          "Because distributions occur over the fund's life while final performance is unknown until the end, a clawback provision protects LPs: if the GP received carry early on winning deals but later losses mean the GP was overpaid relative to the agreed split, the clawback requires the GP to return the excess. The exam tests the order of the waterfall and the purpose of the clawback in correcting timing-driven overpayment.",
        ],
        keyRules: [
          "Waterfall order: return of capital, preferred return, GP catch-up, carried-interest split.",
          "Carried interest (often ~20%) is the GP's profit share.",
          "Clawback returns excess carry to LPs if the GP was overpaid.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m4-p1",
        testPointIds: ["caia-l1-m4-tp4"],
        style: "Performance-metric computation MCQ",
        question:
          "An LP has paid in $80 million to a fund that has distributed $60 million and holds portfolio companies with a reported residual value of $70 million. Compute TVPI, DPI, and RVPI, and explain what the split of TVPI tells you about the fund's maturity.",
        answerPlan: [
          "Compute each multiple.",
          "Confirm TVPI = DPI + RVPI.",
          "Interpret realised vs unrealised.",
        ],
        modelAnswer:
          "DPI = distributions / paid-in = $60m / $80m = 0.75x. RVPI = residual value / paid-in = $70m / $80m = 0.875x. TVPI = (distributions + residual value) / paid-in = ($60m + $70m) / $80m = 1.625x, which equals DPI + RVPI (0.75 + 0.875). The split shows the fund has returned 0.75x in realised cash but still carries 0.875x in unrealised, marked value — meaning much of its reported value is not yet realised, typical of a fund still in its harvest period, and that value depends on the reliability of the marks.",
        markingGuide: [
          "Computes DPI 0.75x, RVPI 0.875x, TVPI 1.625x.",
          "Confirms TVPI = DPI + RVPI.",
          "Interprets the large RVPI as unrealised value in a maturing fund.",
        ],
      },
      {
        id: "caia-l1-m4-p2",
        testPointIds: ["caia-l1-m4-tp2"],
        style: "LBO-attribution MCQ",
        question:
          "A sponsor acquires a company for $400m (8x $50m EBITDA) with $280m debt and $120m equity. At exit in year 5, EBITDA is $60m, $120m of debt has been repaid, and the exit multiple is 8x (unchanged). Compute the exit equity value and MOIC, and identify which value levers were used.",
        answerPlan: [
          "Compute exit enterprise value.",
          "Subtract remaining debt.",
          "Compute MOIC and identify the levers.",
        ],
        modelAnswer:
          "Exit enterprise value = 8x × $60m = $480m. Remaining debt = $280m - $120m repaid = $160m. Exit equity value = $480m - $160m = $320m. MOIC = $320m / $120m = about 2.67x. The value came from two levers: EBITDA growth ($50m to $60m) and debt paydown ($120m), which converted enterprise value into equity. There was no multiple expansion, since the exit multiple (8x) equalled the entry multiple.",
        markingGuide: [
          "Computes exit enterprise value of $480m.",
          "Computes exit equity of $320m and MOIC of about 2.67x.",
          "Identifies EBITDA growth and debt paydown, and notes no multiple expansion.",
        ],
      },
      {
        id: "caia-l1-m4-p3",
        testPointIds: ["caia-l1-m4-tp5"],
        style: "Waterfall MCQ",
        question:
          "A fund realises a large early gain and pays the GP carried interest, but subsequent deals lose money, leaving the GP with more total carry than the agreed 20% of lifetime profits. Explain the order of the waterfall and how the clawback resolves this.",
        answerPlan: [
          "State the waterfall order.",
          "Explain the timing problem.",
          "Explain the clawback remedy.",
        ],
        modelAnswer:
          "The waterfall distributes proceeds in order: return of capital to LPs, then the preferred return (hurdle), then the GP catch-up, then the carried-interest split (about 20% to the GP). Because distributions happen deal-by-deal over the fund's life, the GP can be paid carry on early winners before later losers reduce lifetime profits, leaving the GP with more than its agreed 20% share of the fund's total profits. The clawback provision resolves this by requiring the GP to return the excess carry to the LPs at the end of the fund's life, so the GP's total carry matches the agreed share of actual lifetime profits.",
        markingGuide: [
          "States the waterfall order correctly.",
          "Explains how early carry can exceed the lifetime entitlement.",
          "Explains the clawback returns the excess carry to LPs.",
        ],
      },
    ],
  }),

  "caia-l1-m5": examDepth({
    testPoints: [
      {
        id: "caia-l1-m5-tp1",
        title: "Private debt strategies and where they sit in the capital structure",
        priority: "high",
        examinerFocus:
          "Distinguishing direct lending (senior secured), mezzanine (subordinated, often with equity kickers), distressed debt, and specialty finance by seniority and risk/return.",
        typicalQuestionForms: [
          "Which private debt strategy is most senior and secured?",
          "Which strategy typically includes equity warrants (kickers)?",
        ],
        mustKnow: [
          "Direct lending is typically senior secured, first in line for repayment.",
          "Mezzanine is subordinated, higher-yielding, and often carries equity kickers/warrants.",
          "Distressed debt invests in troubled credits, sometimes to gain control through restructuring.",
        ],
        scoringActions: [
          "Rank the strategy by seniority in the capital structure.",
          "Tie equity kickers to mezzanine and control-through-restructuring to distressed.",
        ],
      },
      {
        id: "caia-l1-m5-tp2",
        title: "Loan economics: yield components and floating rates",
        priority: "critical",
        examinerFocus:
          "The components of private-loan return — reference rate plus spread, original issue discount (OID), and fees — and that direct loans are typically floating-rate, reducing duration risk.",
        typicalQuestionForms: [
          "What are the components of a direct loan's yield?",
          "Why do floating-rate loans have low interest-rate duration?",
        ],
        mustKnow: [
          "Yield = reference rate + credit spread, plus OID and upfront/ongoing fees.",
          "Direct loans are usually floating-rate, so coupons reset with reference rates.",
          "Floating rates reduce interest-rate duration but leave credit risk.",
        ],
        scoringActions: [
          "Build the yield from reference rate + spread + OID/fees.",
          "Attribute low duration to floating-rate resets, not to low credit risk.",
        ],
      },
      {
        id: "caia-l1-m5-tp3",
        title: "Credit risk, covenants, and recovery",
        priority: "high",
        examinerFocus:
          "How covenants (maintenance vs incurrence), seniority, and collateral affect default probability and loss given default/recovery.",
        typicalQuestionForms: [
          "What protection does a maintenance covenant provide a lender?",
          "How does seniority affect recovery in a default?",
        ],
        mustKnow: [
          "Maintenance covenants are tested periodically; incurrence covenants only on specific actions.",
          "Senior secured lenders recover more than subordinated/unsecured in default.",
          "Expected loss ≈ probability of default × loss given default (1 - recovery rate).",
        ],
        scoringActions: [
          "Tie stronger protection to maintenance covenants and senior secured status.",
          "Estimate expected loss from default probability and recovery.",
        ],
      },
      {
        id: "caia-l1-m5-tp4",
        title: "Direct lending market structure and the illiquidity premium",
        priority: "medium",
        examinerFocus:
          "Why direct lending grew (bank retrenchment, middle-market demand), how loans are privately negotiated and held, and the illiquidity/complexity premium lenders earn.",
        typicalQuestionForms: [
          "Why did direct lending expand after banks retrenched?",
          "What premium compensates direct lenders for holding illiquid loans?",
        ],
        mustKnow: [
          "Direct lenders fill the gap left by banks in middle-market financing.",
          "Loans are privately negotiated, illiquid, and typically held to maturity.",
          "Lenders earn an illiquidity and complexity premium over public credit.",
        ],
        scoringActions: [
          "Tie market growth to bank retrenchment and middle-market demand.",
          "Attribute excess spread to illiquidity and complexity, not only credit risk.",
        ],
      },
      {
        id: "caia-l1-m5-tp5",
        title: "Distressed and mezzanine risk/return profiles",
        priority: "medium",
        examinerFocus:
          "The equity-like risk of distressed and mezzanine strategies, and how mezzanine blends current income with equity upside while distressed depends on restructuring outcomes.",
        typicalQuestionForms: [
          "Why does mezzanine sit between debt and equity in risk/return?",
          "What drives returns in distressed debt investing?",
        ],
        mustKnow: [
          "Mezzanine offers high current income plus equity upside via warrants, at subordinated risk.",
          "Distressed returns depend on restructuring, recovery, and sometimes loan-to-own control.",
          "Both carry more equity-like risk than senior direct lending.",
        ],
        scoringActions: [
          "Frame mezzanine as income plus equity upside at subordinated risk.",
          "Tie distressed returns to restructuring and recovery outcomes.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Private debt is a growing product area; convert the yield-component and expected-loss items and the capital-structure/seniority questions.",
      timeBudget:
        "60–90 seconds per item; yield and expected-loss calculations take under a minute.",
      answerSequence: [
        "Place the strategy in the capital structure by seniority.",
        "Build loan yield from reference rate + spread + OID/fees.",
        "For credit, estimate expected loss and weigh covenant/collateral protection.",
        "Attribute excess spread to illiquidity/complexity where relevant.",
      ],
      qualityChecks: [
        "Did you attribute low duration to floating rates, not low credit risk?",
        "Did you use expected loss = PD × LGD?",
        "Did you rank recovery by seniority and collateral?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m5-sn1",
        title: "The private debt spectrum and capital structure",
        testPointIds: ["caia-l1-m5-tp1", "caia-l1-m5-tp5"],
        explanation: [
          "Private debt strategies are best understood by where they sit in the borrower's capital structure, because seniority drives both risk and recovery. Direct lending typically provides senior secured loans — first in line for repayment and backed by collateral — offering steady, lower-risk income. Mezzanine debt is subordinated, ranking behind senior lenders, and compensates for that lower priority with higher yields and often equity kickers (warrants) that provide upside, giving it a risk/return profile between debt and equity. Distressed debt invests in the obligations of troubled companies, aiming to profit from recovery or restructuring, sometimes pursuing a loan-to-own strategy to gain control.",
          "Specialty finance (asset-backed lending, royalties, litigation finance) rounds out the spectrum with idiosyncratic risk drivers. The exam tests ranking these strategies by seniority and recognising their risk/return: senior direct lending is the most protected, mezzanine and distressed carry more equity-like risk, and returns in mezzanine come from income plus equity upside while distressed returns hinge on restructuring outcomes and recovery values.",
        ],
        keyRules: [
          "Direct lending = senior secured; mezzanine = subordinated with equity kickers.",
          "Distressed invests in troubled credits, sometimes loan-to-own.",
          "Seniority drives both risk and recovery.",
        ],
      },
      {
        id: "caia-l1-m5-sn2",
        title: "Loan economics and expected loss, worked",
        testPointIds: ["caia-l1-m5-tp2", "caia-l1-m5-tp3"],
        explanation: [
          "A direct loan's return is built from several pieces: a reference rate (a floating benchmark) plus a credit spread compensating for default risk, augmented by an original issue discount (OID, where the loan is funded below par so it accretes to par) and upfront and ongoing fees. Because most direct loans are floating-rate, their coupons reset as reference rates move, giving them low interest-rate duration — a key point the exam tests, since low duration comes from the floating structure, not from low credit risk, which remains.",
          "Credit analysis then focuses on default probability and recovery. Covenants protect lenders: maintenance covenants are tested periodically (e.g., a leverage ratio each quarter), giving early warning and leverage to act, whereas incurrence covenants bind only when the borrower takes a specific action. Seniority and collateral drive recovery: senior secured lenders recover more than subordinated or unsecured creditors. Expected loss is approximately the probability of default multiplied by the loss given default, where loss given default equals one minus the recovery rate.",
        ],
        keyRules: [
          "Yield = reference rate + spread + OID + fees.",
          "Floating rates give low duration but retain credit risk.",
          "Expected loss ≈ PD × LGD, where LGD = 1 - recovery rate.",
        ],
        formulas: [
          "Loan yield ≈ reference rate + credit spread + OID accretion + fees",
          "Expected loss ≈ probability of default × (1 - recovery rate)",
        ],
        workedProblem: {
          scenario:
            "A direct lender makes a floating-rate senior secured loan at a reference rate of 5% plus a 6% spread, funded at 98 (a 2-point OID) amortising to par over an assumed 4-year life, with a 1% annual fee. Separately, the lender estimates a 3% annual probability of default and a 60% recovery rate. Estimate the approximate all-in annual yield and the expected annual credit loss.",
          steps: [
            "Sum the coupon components: reference rate 5% + credit spread 6% = 11% coupon.",
            "Add OID accretion: a 2-point discount over roughly 4 years adds about 0.5% per year.",
            "Add the fee: 1% annual fee adds about 1%.",
            "Estimate all-in yield: 11% + 0.5% + 1% ≈ 12.5% gross annual yield before losses.",
            "Estimate expected loss: PD 3% × LGD (1 - 0.60 recovery) 40% = 0.03 × 0.40 = 1.2% expected annual credit loss.",
          ],
          conclusion:
            "The loan's approximate all-in gross yield is about 12.5% (coupon plus OID accretion plus fees), against an expected annual credit loss of about 1.2% (3% default probability times a 40% loss given default). The floating structure keeps interest-rate duration low, but the 6% spread and the 1.2% expected loss show that credit risk, not rate risk, is the main exposure.",
          markingNotes: [
            "Full credit requires building the yield from reference rate + spread + OID + fees and computing expected loss as PD × LGD.",
            "Using recovery instead of (1 - recovery) for LGD, or treating the loan as high-duration, loses marks.",
          ],
        },
      },
      {
        id: "caia-l1-m5-sn3",
        title: "Direct lending market structure and premia",
        testPointIds: ["caia-l1-m5-tp4"],
        explanation: [
          "Direct lending grew substantially as banks retrenched from middle-market lending after tighter post-crisis regulation, leaving a financing gap that non-bank lenders (private credit funds) filled. These lenders privately negotiate bilateral or club loans directly with borrowers, often to companies too small for the public bond market, and typically hold the loans to maturity rather than trading them.",
          "Because the loans are privately negotiated, illiquid, and require intensive underwriting and monitoring, direct lenders earn an illiquidity and complexity premium — a spread above comparable public credit that compensates for the lack of a secondary market and the resources needed to originate and service the loans. The exam tests the market's growth drivers and the recognition that part of the excess spread reflects illiquidity and complexity, not solely additional credit risk.",
        ],
        keyRules: [
          "Direct lending filled the middle-market gap left by bank retrenchment.",
          "Loans are privately negotiated, illiquid, and usually held to maturity.",
          "Lenders earn an illiquidity/complexity premium over public credit.",
        ],
      },
      {
        id: "caia-l1-m5-sn4",
        title: "Covenants, seniority, and downside protection",
        testPointIds: ["caia-l1-m5-tp3", "caia-l1-m5-tp1"],
        explanation: [
          "Downside protection in private debt comes from structure as much as from pricing. Covenants constrain the borrower and give the lender rights: maintenance covenants require the borrower to stay within financial tests (leverage, coverage) measured periodically, so a breach gives the lender early warning and negotiating leverage before a default; incurrence covenants restrict specific actions (new debt, dividends) but are only tested when the action is taken, offering weaker ongoing protection. The trend toward 'covenant-lite' loans reduces this protection and is a recognised risk.",
          "Seniority and collateral determine what a lender recovers if the borrower defaults. Senior secured lenders have first claim on pledged collateral and rank ahead of subordinated and unsecured creditors, so their recovery (and thus lower loss given default) is higher. This is why the same borrower's senior loan is far safer than its mezzanine tranche. The exam tests matching covenant strength and seniority to downside protection and recovery.",
        ],
        keyRules: [
          "Maintenance covenants (periodic tests) protect more than incurrence covenants.",
          "Covenant-lite structures weaken lender protection.",
          "Senior secured status raises recovery and lowers loss given default.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m5-p1",
        testPointIds: ["caia-l1-m5-tp2", "caia-l1-m5-tp3"],
        style: "Yield/loss computation MCQ",
        question:
          "A senior secured floating-rate loan pays a 4% reference rate plus a 5% spread, with a 1-point OID over an assumed 4-year life and a 0.5% fee. Default probability is 2% and the expected recovery is 70%. Estimate the all-in gross yield and the expected annual credit loss, and state the main risk exposure.",
        answerPlan: [
          "Build the yield.",
          "Compute expected loss.",
          "Identify the main risk.",
        ],
        modelAnswer:
          "All-in gross yield ≈ reference 4% + spread 5% + OID accretion (~0.25%/yr over 4 years) + fee 0.5% ≈ 9.75%. Expected annual credit loss = PD × LGD = 2% × (1 - 0.70) = 2% × 30% = 0.6%. Because the loan is floating-rate, its interest-rate duration is low, so the main risk exposure is credit risk (default and recovery), reflected in the 5% spread and the 0.6% expected loss, rather than interest-rate risk.",
        markingGuide: [
          "Builds the yield to about 9.75% from all components.",
          "Computes expected loss of 0.6% using PD × (1 - recovery).",
          "Identifies credit risk (not rate risk) as the main exposure.",
        ],
      },
      {
        id: "caia-l1-m5-p2",
        testPointIds: ["caia-l1-m5-tp1"],
        style: "Capital-structure MCQ",
        question:
          "A company defaults. It has senior secured direct loans, subordinated mezzanine notes with warrants, and common equity. Rank the recovery prospects of these claims and explain why the mezzanine holders accepted their position.",
        answerPlan: [
          "Rank recovery by seniority.",
          "Explain the mezzanine trade-off.",
        ],
        modelAnswer:
          "Recovery ranks by seniority: the senior secured direct lenders are first, with the strongest recovery from collateral; the subordinated mezzanine notes rank behind them, recovering only after the senior lenders are satisfied; and common equity is last, typically recovering little or nothing in a default. Mezzanine holders accepted this subordinated position in exchange for a higher yield and equity upside through their warrants — compensation for taking more risk than the senior lenders. In default, that trade-off means their recovery is materially lower than the senior loans'.",
        markingGuide: [
          "Ranks senior secured, then mezzanine, then equity in recovery.",
          "Explains mezzanine took subordination for higher yield plus warrants.",
          "Notes equity is last and often recovers little.",
        ],
      },
      {
        id: "caia-l1-m5-p3",
        testPointIds: ["caia-l1-m5-tp4"],
        style: "Market-structure MCQ",
        question:
          "An institutional investor asks why a direct lending fund can earn a spread above comparable public high-yield bonds for similar-rated borrowers. Give two reasons rooted in the market structure of private credit.",
        answerPlan: [
          "Explain the illiquidity premium.",
          "Explain the complexity/origination premium.",
        ],
        modelAnswer:
          "First, direct loans are illiquid: they are privately negotiated and typically held to maturity with no active secondary market, so lenders demand an illiquidity premium above publicly traded high-yield bonds that can be sold at will. Second, direct lending is complex and resource-intensive: lenders must originate, underwrite, structure, and monitor bespoke loans to middle-market borrowers, earning a complexity/origination premium for that work and for filling the gap left by bank retrenchment. Together these mean part of the extra spread reflects illiquidity and complexity, not just additional credit risk.",
        markingGuide: [
          "Cites the illiquidity premium for privately held, non-traded loans.",
          "Cites the complexity/origination premium for bespoke underwriting.",
          "Notes the excess spread is not solely credit risk.",
        ],
      },
    ],
  }),

  "caia-l1-m6": examDepth({
    testPoints: [
      {
        id: "caia-l1-m6-tp1",
        title: "Hedge fund strategy classification",
        priority: "high",
        examinerFocus:
          "Classifying strategies into equity hedge (long/short), event-driven (merger arb, distressed), relative value (arbitrage), and macro/managed futures, and their primary return drivers.",
        typicalQuestionForms: [
          "Which strategy profits from the spread between a target's price and a deal price?",
          "Which strategy takes directional views on macro variables?",
        ],
        mustKnow: [
          "Equity hedge: long/short equity, variable net exposure.",
          "Event-driven: merger arbitrage, distressed, special situations.",
          "Relative value: arbitrage of related securities' mispricings; macro/managed futures: directional macro bets.",
        ],
        scoringActions: [
          "Match the described trade to its strategy bucket.",
          "Tie merger arb and distressed to event-driven, spreads/mispricings to relative value.",
        ],
      },
      {
        id: "caia-l1-m6-tp2",
        title: "Long/short exposure: gross, net, and market neutrality",
        priority: "critical",
        examinerFocus:
          "Computing gross and net exposure from long and short positions and understanding market-neutral versus directional positioning.",
        typicalQuestionForms: [
          "Compute gross and net exposure given long and short percentages.",
          "What defines a market-neutral portfolio?",
        ],
        mustKnow: [
          "Gross exposure = long % + short %; net exposure = long % - short %.",
          "Market neutral targets near-zero net market exposure, isolating stock selection.",
          "Higher gross exposure means more leverage and more idiosyncratic risk.",
        ],
        scoringActions: [
          "Compute gross (sum) and net (difference) exposure precisely.",
          "Tie market neutrality to near-zero net exposure.",
        ],
      },
      {
        id: "caia-l1-m6-tp3",
        title: "Event-driven and relative-value mechanics",
        priority: "high",
        examinerFocus:
          "How merger arbitrage captures the deal spread (and its deal-break risk), and how relative-value trades profit from convergence of related mispriced securities.",
        typicalQuestionForms: [
          "What is the main risk in merger arbitrage?",
          "How does a relative-value convergence trade make money?",
        ],
        mustKnow: [
          "Merger arb buys the target (and may short the acquirer) to earn the deal spread; deal-break risk is the key exposure.",
          "Relative value profits from the convergence of related, mispriced securities, often with leverage.",
          "These strategies can have equity-like tail risk despite low average volatility.",
        ],
        scoringActions: [
          "Frame merger-arb return as the deal spread, risk as deal breakage.",
          "Explain relative value as convergence of mispriced pairs, often levered.",
        ],
      },
      {
        id: "caia-l1-m6-tp4",
        title: "Hedge fund structure, terms, and liquidity provisions",
        priority: "high",
        examinerFocus:
          "Master-feeder structures, lock-ups, gates, side pockets, redemption notice periods, and the fee model (management plus incentive with high-water mark).",
        typicalQuestionForms: [
          "What is the purpose of a gate provision?",
          "Why are illiquid holdings placed in a side pocket?",
        ],
        mustKnow: [
          "Lock-ups restrict early redemptions; gates limit total redemptions in a period.",
          "Side pockets segregate illiquid/hard-to-value holdings from redeemable assets.",
          "Master-feeder structures pool onshore/offshore investors; fees are management plus incentive with a high-water mark.",
        ],
        scoringActions: [
          "Match each liquidity provision (lock-up, gate, side pocket) to its function.",
          "Recall the master-feeder purpose and the high-water-mark fee logic.",
        ],
      },
      {
        id: "caia-l1-m6-tp5",
        title: "Hedge fund risks and biases in indices",
        priority: "medium",
        examinerFocus:
          "Leverage, liquidity, and tail risks, and the reporting biases in hedge fund indices (survivorship, backfill, self-selection) that inflate historical returns.",
        typicalQuestionForms: [
          "Which bias overstates hedge fund index returns by excluding failed funds?",
          "What is backfill (instant-history) bias?",
        ],
        mustKnow: [
          "Leverage and illiquidity can create tail risk masked by low average volatility.",
          "Survivorship bias excludes failed funds; backfill bias adds favourable prior returns of newly reporting funds.",
          "Self-selection means only some funds report, biasing indices.",
        ],
        scoringActions: [
          "Identify the specific index bias described.",
          "Discount reported hedge fund index returns for these biases.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Hedge funds are a large Level I product area; convert the exposure computations and the strategy-classification and index-bias items.",
      timeBudget:
        "60–90 seconds per item; exposure calculations take well under a minute.",
      answerSequence: [
        "Classify the strategy from the described trade.",
        "Compute gross (sum) and net (difference) exposure where asked.",
        "For structure, match the liquidity provision to its purpose.",
        "For indices, identify and discount for the relevant bias.",
      ],
      qualityChecks: [
        "Did you compute gross as the sum and net as the difference of exposures?",
        "Did you tie market neutrality to near-zero net exposure?",
        "Did you name the specific index bias correctly?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m6-sn1",
        title: "Strategy classification and exposure, worked",
        testPointIds: ["caia-l1-m6-tp1", "caia-l1-m6-tp2"],
        explanation: [
          "Hedge fund strategies group into a few families defined by their return drivers. Equity hedge (long/short equity) takes long and short stock positions with variable net exposure, profiting from stock selection and directional tilts. Event-driven strategies profit from corporate events — merger arbitrage on announced deals, distressed on troubled companies, and special situations. Relative-value strategies arbitrage the mispricing of related securities, betting on convergence, often with leverage. Macro and managed-futures strategies take directional positions on macro variables (rates, currencies, commodities) across markets. Level I asks you to map a described trade to its family.",
          "Exposure measurement is a core computational skill for long/short portfolios. Gross exposure is the sum of long and short positions (as a percentage of capital) and measures total market involvement and leverage; net exposure is longs minus shorts and measures directional market risk. A market-neutral portfolio targets near-zero net exposure to isolate stock-selection (alpha) from market direction, while still carrying meaningful gross exposure and idiosyncratic risk.",
        ],
        keyRules: [
          "Families: equity hedge, event-driven, relative value, macro/managed futures.",
          "Gross exposure = long % + short %; net exposure = long % - short %.",
          "Market neutral = near-zero net exposure isolating stock selection.",
        ],
        formulas: ["Gross exposure = long % + short %", "Net exposure = long % - short %"],
        workedProblem: {
          scenario:
            "A long/short equity fund with $100m of capital holds $130m of long positions and $70m of short positions. Compute its gross and net exposure, state whether it is net long, net short, or market neutral, and explain what its gross figure implies about leverage.",
          steps: [
            "Express positions as a percentage of capital: longs = 130%, shorts = 70% of the $100m capital.",
            "Compute gross exposure: 130% + 70% = 200% of capital.",
            "Compute net exposure: 130% - 70% = 60% of capital.",
            "Classify the positioning: net exposure is +60%, so the fund is net long (directional), not market neutral.",
            "Interpret gross exposure: 200% gross means total positions are twice the capital, indicating the fund is using leverage and carries substantial idiosyncratic (stock-specific) risk on both the long and short books.",
          ],
          conclusion:
            "The fund's gross exposure is 200% and its net exposure is +60%, making it net long rather than market neutral. The 200% gross figure shows it is levered two-to-one in total market involvement, so its returns and risks reflect both directional market exposure and leveraged stock selection.",
          markingNotes: [
            "Full credit requires gross of 200%, net of +60%, and the net-long classification.",
            "Confusing gross (sum) with net (difference), or calling a +60% net position market neutral, loses marks.",
          ],
        },
      },
      {
        id: "caia-l1-m6-sn2",
        title: "Event-driven and relative-value mechanics",
        testPointIds: ["caia-l1-m6-tp3"],
        explanation: [
          "Merger arbitrage is the archetypal event-driven trade. After a deal is announced, the target usually trades at a discount to the offer price (the deal spread) because of the risk and time until closing; the arbitrageur buys the target (and in a stock deal may short the acquirer) to capture that spread when the deal closes. The strategy earns a steady spread most of the time but faces deal-break risk: if the deal collapses, the target price falls sharply, producing a large loss. This gives merger arb a return profile with low average volatility but occasional sharp drawdowns — equity-like tail risk.",
          "Relative-value strategies profit from the convergence of related but mispriced securities — for example, two bonds of the same issuer, or a convertible bond versus its underlying stock. The manager goes long the cheap security and short the expensive one, expecting the mispricing to close, and often applies leverage because each spread is small. The risk is that the mispricing widens before it converges (as in liquidity crises), which, combined with leverage, can force losses. Both event-driven and relative-value strategies can look low-risk on average while harbouring significant tail risk.",
        ],
        keyRules: [
          "Merger arb captures the deal spread; deal-break risk is the key exposure.",
          "Relative value profits from convergence of mispriced pairs, often levered.",
          "Both can show low average volatility but equity-like tail risk.",
        ],
      },
      {
        id: "caia-l1-m6-sn3",
        title: "Structure, terms, and liquidity provisions",
        testPointIds: ["caia-l1-m6-tp4"],
        explanation: [
          "Hedge funds are commonly organised as master-feeder structures, in which onshore and offshore feeder funds invest into a single master fund, pooling taxable and tax-exempt or non-U.S. investors efficiently. Fees follow a management-plus-incentive model, typically with a high-water mark so incentive fees are charged only on new profits above prior peaks. Investors should understand these terms because they shape both cost and behaviour.",
          "Liquidity provisions protect the fund (and remaining investors) from being forced to liquidate positions at bad prices. Lock-up periods prevent redemptions for an initial period after investment; gates limit the total percentage of the fund that can be redeemed in a given period; redemption notice periods require advance notice; and side pockets segregate illiquid or hard-to-value holdings so they are not redeemed at unreliable marks and remaining investors are not disadvantaged. The exam tests matching each provision to its purpose.",
        ],
        keyRules: [
          "Master-feeder pools onshore/offshore investors into one master fund.",
          "Lock-ups, gates, notice periods, and side pockets manage redemption liquidity.",
          "Fees are management plus incentive with a high-water mark.",
        ],
      },
      {
        id: "caia-l1-m6-sn4",
        title: "Hedge fund risks and index biases",
        testPointIds: ["caia-l1-m6-tp5"],
        explanation: [
          "Hedge fund risks extend beyond reported volatility. Leverage magnifies losses; illiquidity can trap capital when it is most needed; and many strategies carry tail risk that low average volatility conceals. Sound analysis looks past smooth-looking track records to the leverage, liquidity, and strategy risks underneath.",
          "Hedge fund indices are subject to well-known biases that inflate historical returns and must be discounted. Survivorship bias arises because failed funds drop out of the index, leaving only survivors and overstating average performance. Backfill (instant-history) bias occurs when a fund that starts reporting brings its favourable prior returns into the index. Self-selection bias arises because reporting is voluntary, so the funds that report may not be representative. Together these biases mean reported hedge fund index returns overstate what an investor would realistically have earned.",
        ],
        keyRules: [
          "Leverage and illiquidity create tail risk masked by low volatility.",
          "Survivorship, backfill, and self-selection biases inflate index returns.",
          "Discount reported hedge fund index performance for these biases.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m6-p1",
        testPointIds: ["caia-l1-m6-tp2"],
        style: "Exposure computation MCQ",
        question:
          "A fund with $200m capital holds $180m long and $180m short. Compute gross and net exposure, classify the positioning, and explain what type of return the structure is designed to capture.",
        answerPlan: [
          "Compute gross and net.",
          "Classify positioning.",
          "Explain the return objective.",
        ],
        modelAnswer:
          "As a percentage of the $200m capital, longs = 90% and shorts = 90%. Gross exposure = 90% + 90% = 180%; net exposure = 90% - 90% = 0%. With near-zero net exposure, the fund is market neutral. This structure is designed to isolate stock-selection return (alpha) from overall market direction: by matching long and short market exposure, the fund aims to profit from the relative performance of its longs versus its shorts rather than from the market's direction, while still using leverage (180% gross) and bearing idiosyncratic risk.",
        markingGuide: [
          "Computes gross 180% and net 0%.",
          "Classifies the fund as market neutral.",
          "Explains it seeks stock-selection alpha independent of market direction.",
        ],
      },
      {
        id: "caia-l1-m6-p2",
        testPointIds: ["caia-l1-m6-tp3"],
        style: "Strategy-mechanics MCQ",
        question:
          "A merger-arbitrage fund buys a target trading at $48 after a $50 all-cash acquisition is announced. Explain how the fund makes money if the deal closes, and what happens if the deal breaks.",
        answerPlan: [
          "Explain the deal spread.",
          "Describe the closing payoff.",
          "Describe the deal-break risk.",
        ],
        modelAnswer:
          "The fund captures the deal spread: it buys the target at $48 against a $50 offer, so if the all-cash deal closes it receives $50, earning the $2 spread (about 4%) over the time to closing — compensation for bearing deal risk. If the deal breaks, however, the target price typically collapses back toward or below its pre-announcement level, well below $48, producing a large loss. This is the strategy's defining deal-break risk: many small, steady spread gains punctuated by occasional sharp losses when deals fail.",
        markingGuide: [
          "Explains capturing the $2 deal spread on a successful close.",
          "Describes the sharp loss if the deal breaks.",
          "Identifies deal-break risk as the key exposure.",
        ],
      },
      {
        id: "caia-l1-m6-p3",
        testPointIds: ["caia-l1-m6-tp5"],
        style: "Index-bias MCQ",
        question:
          "An investor is impressed by a hedge fund index showing high, smooth historical returns. Explain two reporting biases that likely inflate that record and how they should change his interpretation.",
        answerPlan: [
          "Explain survivorship bias.",
          "Explain backfill bias.",
          "State the adjusted interpretation.",
        ],
        modelAnswer:
          "First, survivorship bias: funds that performed poorly and closed drop out of the index, so the reported history reflects only survivors and overstates average returns. Second, backfill (instant-history) bias: when a fund begins reporting, its favourable prior returns are added to the index, again inflating the record because funds with poor early results are less likely to start reporting. Because of these biases (along with self-selection), the investor should discount the reported returns and recognise that a realistic, live investor experience would likely have been meaningfully lower and less smooth.",
        markingGuide: [
          "Explains survivorship bias excludes failed funds.",
          "Explains backfill bias adds favourable prior returns.",
          "Concludes the reported returns should be discounted.",
        ],
      },
    ],
  }),

  "caia-l1-m7": examDepth({
    testPoints: [
      {
        id: "caia-l1-m7-tp1",
        title: "Blockchain and distributed-ledger fundamentals",
        priority: "high",
        examinerFocus:
          "How a blockchain works (distributed ledger, cryptographic hashing, immutability) and the difference between public/permissionless and private/permissioned ledgers.",
        typicalQuestionForms: [
          "What property makes a blockchain record difficult to alter?",
          "How does a permissionless blockchain differ from a permissioned one?",
        ],
        mustKnow: [
          "A blockchain is a distributed ledger of cryptographically linked blocks, making tampering evident.",
          "Immutability comes from hashing and consensus across many nodes.",
          "Permissionless (public) ledgers are open; permissioned (private) restrict participants.",
        ],
        scoringActions: [
          "Tie immutability to cryptographic hashing and distributed consensus.",
          "Distinguish permissionless (open) from permissioned (restricted) ledgers.",
        ],
      },
      {
        id: "caia-l1-m7-tp2",
        title: "Consensus mechanisms: proof of work vs proof of stake",
        priority: "high",
        examinerFocus:
          "How proof of work (mining, energy-intensive) and proof of stake (validators bonding stake) secure a network and their trade-offs.",
        typicalQuestionForms: [
          "How does proof of stake differ from proof of work?",
          "Which consensus mechanism relies on computational mining?",
        ],
        mustKnow: [
          "Proof of work secures the chain via competitive, energy-intensive mining.",
          "Proof of stake selects validators based on staked coins, using far less energy.",
          "Both aim to make attacking the network economically unattractive.",
        ],
        scoringActions: [
          "Tie mining/energy intensity to proof of work.",
          "Tie staking/validator selection to proof of stake.",
        ],
      },
      {
        id: "caia-l1-m7-tp3",
        title: "Digital asset categories",
        priority: "critical",
        examinerFocus:
          "Distinguishing cryptocurrencies, stablecoins, utility/platform tokens, security tokens, and NFTs by function and how each derives value.",
        typicalQuestionForms: [
          "Which digital asset is designed to maintain a stable value against a reference?",
          "Which token represents an investment contract subject to securities regulation?",
        ],
        mustKnow: [
          "Cryptocurrencies (e.g., a native coin) serve as a medium of exchange/store of value.",
          "Stablecoins peg to a reference (fiat/assets); utility tokens access a platform's services.",
          "Security tokens represent investment contracts; NFTs represent unique digital items.",
        ],
        scoringActions: [
          "Match each asset to its function and value source.",
          "Tie 'investment contract' language to security tokens/regulation.",
        ],
      },
      {
        id: "caia-l1-m7-tp4",
        title: "Valuation approaches and market structure",
        priority: "high",
        examinerFocus:
          "Approaches to valuing digital assets (network value, stock-to-flow, cost-of-production, utility/adoption) and the roles of exchanges, wallets, and custody.",
        typicalQuestionForms: [
          "Which valuation approach relates value to network usage?",
          "What is the role of a custodian in digital-asset markets?",
        ],
        mustKnow: [
          "Valuation approaches include network-value/adoption metrics, scarcity models, and cost of production.",
          "Exchanges enable trading; wallets hold keys; custodians safekeep assets and keys.",
          "Self-custody shifts key-management risk to the holder.",
        ],
        scoringActions: [
          "Match the valuation approach to its underlying driver (usage, scarcity, cost).",
          "Distinguish exchange, wallet, and custodian roles.",
        ],
      },
      {
        id: "caia-l1-m7-tp5",
        title: "Digital-asset risks and regulation",
        priority: "high",
        examinerFocus:
          "The distinctive risks — extreme volatility, custody/key loss, hacking/fraud, regulatory uncertainty, and liquidity/operational risk — and the evolving regulatory landscape.",
        typicalQuestionForms: [
          "Which risk is unique to self-custodied digital assets?",
          "Why is regulatory risk especially significant for digital assets?",
        ],
        mustKnow: [
          "Volatility, custody/key-loss, hacking, fraud, and regulatory uncertainty are key risks.",
          "Loss of private keys can mean permanent, irreversible loss of assets.",
          "Regulatory treatment (security vs commodity vs currency) is uncertain and evolving.",
        ],
        scoringActions: [
          "Tie irreversible loss to private-key/custody risk.",
          "Frame regulatory classification uncertainty as a core risk.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Digital assets are a growing, definition-heavy Level I area; convert the asset-category and consensus items, which are the most testable.",
      timeBudget:
        "About 60 seconds per item; mostly conceptual recognition with no computation.",
      answerSequence: [
        "For technology, tie immutability to hashing/consensus and classify the ledger type.",
        "For consensus, distinguish proof of work from proof of stake.",
        "For assets, match each category to its function and value source.",
        "For risk, emphasise custody/key loss and regulatory uncertainty.",
      ],
      qualityChecks: [
        "Did you tie mining to proof of work and staking to proof of stake?",
        "Did you classify the digital asset by function (stablecoin, utility, security, NFT)?",
        "Did you recognise irreversible key-loss and regulatory risk?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m7-sn1",
        title: "Blockchain fundamentals and consensus",
        testPointIds: ["caia-l1-m7-tp1", "caia-l1-m7-tp2"],
        explanation: [
          "A blockchain is a distributed ledger: a record of transactions grouped into blocks that are cryptographically linked, with copies maintained across many independent nodes. Each block contains a cryptographic hash of the previous block, so altering any past record would change all subsequent hashes and be immediately detectable — this is the source of the ledger's immutability. Because no single party controls the ledger and the network agrees on its state through consensus, records are tamper-evident and resistant to unilateral change. Permissionless (public) blockchains are open for anyone to participate, while permissioned (private) blockchains restrict who can validate or view transactions, trading decentralisation for control.",
          "Consensus mechanisms are how a decentralised network agrees on the valid ledger. Proof of work requires participants (miners) to expend significant computational effort to add blocks, making attacks expensive but consuming large amounts of energy. Proof of stake instead selects validators based on the amount of the network's coins they bond (stake), so honest behaviour is enforced economically (a dishonest validator risks losing its stake), using far less energy. Both mechanisms aim to make attacking the network economically irrational; the exam tests distinguishing them by their security model and resource use.",
        ],
        keyRules: [
          "Immutability comes from cryptographic hashing plus distributed consensus.",
          "Permissionless = open; permissioned = restricted participants.",
          "Proof of work = mining/energy; proof of stake = bonded stake/validators.",
        ],
      },
      {
        id: "caia-l1-m7-sn2",
        title: "Digital-asset categories, worked classification",
        testPointIds: ["caia-l1-m7-tp3"],
        explanation: [
          "Digital assets are not a single thing, and Level I rewards precise categorisation. Cryptocurrencies (a network's native coin) are designed to serve as a medium of exchange and store of value, deriving value from network adoption and scarcity. Stablecoins are engineered to hold a stable value against a reference (usually a fiat currency), backed by reserves or algorithms, and are used for payments and as a bridge between fiat and crypto. Utility (or platform) tokens grant access to a platform's services or functions, deriving value from demand to use that platform.",
          "Two further categories carry distinct treatment. Security tokens represent an investment contract — a claim on profits or assets — and are therefore generally subject to securities regulation, which is a frequent exam point. Non-fungible tokens (NFTs) represent unique, non-interchangeable digital items (art, collectibles, rights), with value driven by uniqueness and demand for the specific item. Classifying an asset correctly determines both how it derives value and how it is regulated.",
        ],
        keyRules: [
          "Cryptocurrency: medium of exchange/store of value.",
          "Stablecoin: pegged to a reference; utility token: platform access.",
          "Security token: investment contract (regulated); NFT: unique digital item.",
        ],
        workedProblem: {
          scenario:
            "Classify each digital asset and state how each derives value and whether it is likely subject to securities regulation: (1) a coin engineered to always equal one U.S. dollar, backed by cash reserves; (2) a token that entitles holders to a pro-rata share of a project's profits; (3) a token required to pay for computation on a decentralised platform; (4) a one-of-a-kind tokenised digital artwork.",
          steps: [
            "Classify (1): a coin pegged to one dollar and backed by reserves is a stablecoin; its value derives from the reserve backing and the peg mechanism.",
            "Classify (2): a token entitling holders to a share of profits is an investment contract, i.e., a security token; its value derives from the project's profits and it is likely subject to securities regulation.",
            "Classify (3): a token required to pay for platform computation is a utility token; its value derives from demand to use the platform's services.",
            "Classify (4): a one-of-a-kind tokenised artwork is a non-fungible token (NFT); its value derives from its uniqueness and demand for that specific item.",
            "Flag regulation: only (2), the profit-sharing security token, clearly looks like a regulated security; the others may face different or evolving treatment.",
          ],
          conclusion:
            "Asset (1) is a stablecoin (reserve-backed peg), (2) is a security token (profit claim, likely regulated as a security), (3) is a utility token (platform access), and (4) is an NFT (unique item). Correct classification determines both the value driver and the regulatory treatment, with the profit-sharing token the one most clearly subject to securities regulation.",
          markingNotes: [
            "Full credit requires correctly classifying all four and flagging the profit-sharing token as a security.",
            "Calling the profit-sharing token a utility token (avoiding securities regulation) is the classic error.",
          ],
        },
      },
      {
        id: "caia-l1-m7-sn3",
        title: "Valuation approaches and market infrastructure",
        testPointIds: ["caia-l1-m7-tp4"],
        explanation: [
          "Valuing digital assets is unsettled, and the curriculum surveys several approaches rather than a single model. Network-value and adoption metrics relate an asset's value to the size and activity of its user network (more users and transactions imply more value). Scarcity models (such as stock-to-flow) tie value to limited supply and issuance schedules. Cost-of-production approaches anchor value to the cost of mining or producing new units. Utility-based approaches link value to demand for the platform's services. Each approach captures a different driver, and the exam tests matching the approach to its underlying logic.",
          "Market infrastructure has its own vocabulary. Exchanges (centralised or decentralised) enable trading; wallets store the cryptographic keys that control assets (a wallet holds keys, not the coins themselves); and custodians safekeep assets and keys on behalf of investors, providing institutional-grade security and controls. Self-custody gives the holder full control but shifts all key-management risk to them. Understanding who holds the keys is central to understanding custody risk.",
        ],
        keyRules: [
          "Valuation approaches: network/adoption, scarcity (stock-to-flow), cost of production, utility.",
          "Exchanges trade; wallets hold keys; custodians safekeep assets/keys.",
          "Self-custody shifts key-management risk to the holder.",
        ],
      },
      {
        id: "caia-l1-m7-sn4",
        title: "Risks and the regulatory landscape",
        testPointIds: ["caia-l1-m7-tp5"],
        explanation: [
          "Digital assets carry distinctive risks that dominate the investment case. Prices are extremely volatile, so position sizing and risk management are critical. Custody risk is unique and severe: whoever controls the private keys controls the assets, and losing the keys generally means permanent, irreversible loss, while hacks and fraud have caused large investor losses at exchanges and platforms. Liquidity and operational risks vary widely across assets and venues.",
          "Regulatory risk is especially significant because the fundamental classification of many digital assets — as securities, commodities, or currencies — remains uncertain and differs across jurisdictions, and that classification determines which rules apply. Evolving regulation can sharply affect an asset's legality, availability, and value. The exam tests recognising irreversible key-loss/custody risk and framing regulatory-classification uncertainty as a core, ongoing risk rather than a peripheral concern.",
        ],
        keyRules: [
          "Key risks: volatility, custody/key loss, hacking/fraud, regulatory uncertainty.",
          "Losing private keys can mean permanent, irreversible loss.",
          "Uncertain security/commodity/currency classification is a core regulatory risk.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m7-p1",
        testPointIds: ["caia-l1-m7-tp3"],
        style: "Classification MCQ",
        question:
          "A project issues a token that promises holders a share of the platform's future revenue and appreciates if the platform succeeds. The promoters market it as a 'utility token' to avoid regulation. Assess this classification.",
        answerPlan: [
          "Analyse the token's economic substance.",
          "Classify it correctly.",
          "State the regulatory implication.",
        ],
        modelAnswer:
          "Despite the 'utility token' label, the token's substance is an investment contract: holders expect profits (a share of platform revenue and appreciation) from the efforts of the promoters. That makes it a security token, which is generally subject to securities regulation. A true utility token grants access to a platform's services and is not primarily an investment in others' profits. Labeling it a utility token does not change its economic reality, so treating it as unregulated is a misclassification with significant regulatory risk.",
        markingGuide: [
          "Identifies the profit expectation as investment-contract substance.",
          "Classifies it as a security token, not a utility token.",
          "States it is likely subject to securities regulation despite the label.",
        ],
      },
      {
        id: "caia-l1-m7-p2",
        testPointIds: ["caia-l1-m7-tp2"],
        style: "Consensus MCQ",
        question:
          "Contrast proof of work and proof of stake as consensus mechanisms, addressing how each secures the network and their energy profiles.",
        answerPlan: [
          "Describe proof of work.",
          "Describe proof of stake.",
          "Compare energy and security.",
        ],
        modelAnswer:
          "Proof of work secures the network through mining: participants compete to solve computationally intensive puzzles to add blocks, and the enormous cost of computation makes attacking the network economically irrational — but it consumes large amounts of energy. Proof of stake secures the network by selecting validators according to the amount of the network's coins they bond (stake); a validator that acts dishonestly risks losing its stake, so honesty is enforced economically, and the mechanism uses far less energy because it does not rely on competitive computation. Both aim to make attacks uneconomic, but they differ in resource intensity and security model.",
        markingGuide: [
          "Explains proof of work via mining and its energy intensity.",
          "Explains proof of stake via bonded stake and validator penalties.",
          "Compares the energy profiles and security models.",
        ],
      },
      {
        id: "caia-l1-m7-p3",
        testPointIds: ["caia-l1-m7-tp5", "caia-l1-m7-tp4"],
        style: "Risk MCQ",
        question:
          "An institution wants to hold a digital asset directly (self-custody). Explain the custody risk this creates and one distinctive regulatory risk it should weigh, and how a qualified custodian changes the custody picture.",
        answerPlan: [
          "Explain self-custody key risk.",
          "Explain a regulatory risk.",
          "Explain the custodian's role.",
        ],
        modelAnswer:
          "With self-custody, the institution controls the private keys, and whoever holds the keys controls the assets — so loss or theft of the keys generally means permanent, irreversible loss, and there is no intermediary to recover from. A distinctive regulatory risk is classification uncertainty: whether the asset is treated as a security, commodity, or currency is unsettled and varies by jurisdiction, and a change in that treatment could affect its legality, availability, or value. Using a qualified custodian shifts the safekeeping of assets and keys to a specialist with institutional-grade security and controls, reducing (though not eliminating) key-management and operational risk relative to self-custody.",
        markingGuide: [
          "Explains irreversible loss from self-custodied key loss/theft.",
          "Cites regulatory-classification uncertainty as a distinctive risk.",
          "Explains a qualified custodian assumes safekeeping of assets/keys.",
        ],
      },
    ],
  }),

  "caia-l1-m8": examDepth({
    testPoints: [
      {
        id: "caia-l1-m8-tp1",
        title: "Securitization mechanics and tranching",
        priority: "critical",
        examinerFocus:
          "How pooling assets and issuing tranches redistributes cash flows and risk, with senior tranches protected by subordination and equity/junior tranches absorbing first losses.",
        typicalQuestionForms: [
          "How does subordination protect a senior tranche?",
          "Which tranche absorbs the first losses in a structured deal?",
        ],
        mustKnow: [
          "Securitization pools assets and issues tranches with a defined priority of cash flows (waterfall).",
          "Senior tranches are paid first and protected by subordinated tranches (credit enhancement).",
          "The equity/junior tranche absorbs first losses and earns the highest yield.",
        ],
        scoringActions: [
          "Order tranche cash flows and losses by seniority.",
          "Tie senior-tranche safety to subordination/credit enhancement.",
        ],
      },
      {
        id: "caia-l1-m8-tp2",
        title: "Mortgage-backed securities and prepayment risk",
        priority: "high",
        examinerFocus:
          "How MBS pass through mortgage cash flows and the prepayment risk (and its contraction/extension effects) that makes MBS behave differently from standard bonds.",
        typicalQuestionForms: [
          "What is prepayment risk in an MBS?",
          "How do falling rates affect an MBS through prepayments?",
        ],
        mustKnow: [
          "MBS pass through principal and interest from a pool of mortgages.",
          "Prepayment risk: borrowers refinance when rates fall (contraction) and prepay slowly when rates rise (extension).",
          "Prepayments give MBS negative convexity relative to standard bonds.",
        ],
        scoringActions: [
          "Tie falling rates to faster prepayment (contraction) and rising rates to extension.",
          "Recognise negative convexity as a defining MBS feature.",
        ],
      },
      {
        id: "caia-l1-m8-tp3",
        title: "Asset-backed securities and collateral types",
        priority: "high",
        examinerFocus:
          "How ABS securitize non-mortgage receivables (auto loans, credit cards, student loans) and how collateral characteristics drive risk.",
        typicalQuestionForms: [
          "Which of the following is a typical ABS collateral type?",
          "How does the collateral pool affect ABS risk?",
        ],
        mustKnow: [
          "ABS securitize non-mortgage receivables such as auto loans, credit-card balances, and student loans.",
          "Collateral quality, diversification, and amortisation drive ABS risk and cash flows.",
          "Credit enhancement (subordination, overcollateralisation, reserves) protects senior ABS holders.",
        ],
        scoringActions: [
          "Identify the collateral type behind the ABS.",
          "Tie risk to collateral quality and the enhancement structure.",
        ],
      },
      {
        id: "caia-l1-m8-tp4",
        title: "CDOs/CLOs and their structure",
        priority: "high",
        examinerFocus:
          "How CDOs/CLOs pool debt (e.g., leveraged loans in a CLO) and tranche it, the role of the manager, and coverage tests that protect senior tranches.",
        typicalQuestionForms: [
          "What assets typically back a CLO?",
          "What do overcollateralisation and interest-coverage tests do?",
        ],
        mustKnow: [
          "CLOs pool leveraged loans; CDOs pool various debt, tranched by seniority.",
          "A manager actively manages the collateral within defined rules.",
          "Overcollateralisation and interest-coverage tests divert cash to senior tranches if breached.",
        ],
        scoringActions: [
          "Tie CLOs to leveraged-loan collateral and active management.",
          "Explain coverage tests as protection that redirects cash to senior tranches.",
        ],
      },
      {
        id: "caia-l1-m8-tp5",
        title: "Structured-product risks and the 2008 lessons",
        priority: "medium",
        examinerFocus:
          "Correlation, model, and liquidity risks in structured credit, and why underestimating default correlation caused senior-tranche losses in the financial crisis.",
        typicalQuestionForms: [
          "Why did highly rated structured tranches suffer losses in 2008?",
          "How does correlation affect senior-tranche risk?",
        ],
        mustKnow: [
          "Structured products carry correlation, model, liquidity, and complexity risk.",
          "Higher-than-assumed default correlation increases senior-tranche losses.",
          "Ratings and models under-estimated correlated defaults before 2008.",
        ],
        scoringActions: [
          "Tie senior-tranche losses to underestimated default correlation.",
          "Flag model and liquidity risk in complex structures.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Structured products are conceptually dense; convert the tranching/waterfall and prepayment items, which anchor the whole module.",
      timeBudget:
        "60–90 seconds per item; loss-allocation reasoning takes a little longer.",
      answerSequence: [
        "For any structure, order cash flows and losses by tranche seniority.",
        "For MBS, reason prepayment direction with rates (contraction vs extension).",
        "For CLOs/CDOs, tie coverage tests to senior-tranche protection.",
        "For risk, emphasise correlation and model risk.",
      ],
      qualityChecks: [
        "Did the equity tranche absorb first losses and senior tranches last?",
        "Did you tie falling rates to faster prepayment?",
        "Did you connect senior-tranche losses to correlation assumptions?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m8-sn1",
        title: "Securitization and tranching, worked loss allocation",
        testPointIds: ["caia-l1-m8-tp1"],
        explanation: [
          "Securitization pools cash-flow-producing assets (mortgages, loans, receivables) into a special-purpose vehicle that issues securities (tranches) backed by the pool. The defining feature is tranching: cash flows are distributed by a priority waterfall, and losses are absorbed in reverse priority. Senior tranches are paid first and are protected by the subordinated tranches beneath them, which act as credit enhancement; the equity (or junior) tranche is paid last and absorbs the first losses, so it bears the most risk and earns the highest yield. This structure converts a pool of similar-risk assets into securities of very different risk levels.",
          "The exam tests both the direction of cash flows (senior first) and the direction of losses (junior/equity first). Additional credit enhancement — overcollateralisation, reserve accounts, and excess spread — further protects senior holders. Understanding the waterfall lets you determine which tranche is affected by a given level of pool losses, which is the core analytical skill for the whole module.",
        ],
        keyRules: [
          "Securitization pools assets and issues tranches paid by a priority waterfall.",
          "Cash flows go senior-first; losses hit the equity/junior tranche first.",
          "Subordination and other enhancements protect senior tranches.",
        ],
        workedProblem: {
          scenario:
            "A $100 million securitization has three tranches: a senior tranche of $80m, a mezzanine tranche of $15m, and an equity tranche of $5m. The underlying pool suffers cumulative losses of $12m. Determine how the losses are allocated across the tranches and which tranches are impaired.",
          steps: [
            "Establish the loss priority: losses are absorbed from the bottom up — equity first, then mezzanine, then senior.",
            "Apply losses to the equity tranche: the first $5m of losses wipes out the entire $5m equity tranche.",
            "Apply remaining losses to mezzanine: $12m total - $5m absorbed by equity = $7m remaining, which hits the $15m mezzanine tranche.",
            "Assess the mezzanine impact: $7m of the $15m mezzanine is lost, leaving $8m; the mezzanine is impaired but not wiped out.",
            "Assess the senior tranche: because losses ($12m) are less than the combined equity + mezzanine cushion ($20m), the $80m senior tranche is fully protected and unimpaired.",
          ],
          conclusion:
            "The $12m of losses wipes out the entire $5m equity tranche and impairs $7m of the $15m mezzanine tranche, while the $80m senior tranche is untouched. The $20m of subordination beneath the senior tranche absorbed the losses, illustrating exactly how tranching protects senior holders.",
          markingNotes: [
            "Full credit requires allocating losses bottom-up (equity, then mezzanine) and showing the senior tranche is protected.",
            "Allocating losses pro-rata or hitting the senior tranche first is the classic error and loses marks.",
          ],
        },
      },
      {
        id: "caia-l1-m8-sn2",
        title: "MBS and prepayment risk",
        testPointIds: ["caia-l1-m8-tp2"],
        explanation: [
          "Mortgage-backed securities pass through the principal and interest payments from a pool of mortgages to investors. What makes them behave differently from ordinary bonds is prepayment risk: borrowers can repay their mortgages early, and they tend to do so when interest rates fall (refinancing into cheaper loans). Falling rates therefore cause contraction — investors get their principal back faster, precisely when they must reinvest at lower rates. Rising rates cause extension — borrowers prepay more slowly, so investors are stuck holding a below-market-rate security longer.",
          "This behaviour gives MBS negative convexity: as rates fall, the MBS price rises less than a comparable option-free bond would (because faster prepayments cap the upside), while as rates rise, the price falls more (because extension lengthens the security). The prepayment option effectively belongs to the borrower, and the investor is compensated with a higher yield for bearing it. The exam tests the contraction/extension directions and the negative-convexity consequence.",
        ],
        keyRules: [
          "MBS pass through pooled mortgage principal and interest.",
          "Falling rates: faster prepayment (contraction); rising rates: slower (extension).",
          "Prepayment gives MBS negative convexity versus option-free bonds.",
        ],
      },
      {
        id: "caia-l1-m8-sn3",
        title: "ABS, CDOs, and CLOs",
        testPointIds: ["caia-l1-m8-tp3", "caia-l1-m8-tp4"],
        explanation: [
          "Asset-backed securities apply the securitization template to non-mortgage receivables — auto loans, credit-card balances, student loans, and other cash-flow assets. The risk of an ABS depends on the quality and diversification of the underlying collateral, its amortisation profile, and the credit enhancement (subordination, overcollateralisation, reserve accounts) protecting senior holders. Different collateral types have different loss and prepayment behaviours, so identifying the collateral is the first analytical step.",
          "Collateralised debt obligations (CDOs) and collateralised loan obligations (CLOs) pool debt instruments and tranche them by seniority; a CLO specifically pools leveraged (bank) loans. A distinctive feature is that a manager actively manages the collateral pool within defined rules, buying and selling loans during a reinvestment period. Structural protections include coverage tests — overcollateralisation and interest-coverage tests — that, if breached, divert cash flows away from junior tranches to pay down or protect the senior tranches. The exam tests the CLO collateral type, the manager's role, and the protective function of coverage tests.",
        ],
        keyRules: [
          "ABS securitize non-mortgage receivables; collateral quality drives risk.",
          "CLOs pool actively managed leveraged loans; CDOs pool various debt.",
          "Overcollateralisation/interest-coverage tests redirect cash to senior tranches when breached.",
        ],
      },
      {
        id: "caia-l1-m8-sn4",
        title: "Structured-product risks and the crisis lessons",
        testPointIds: ["caia-l1-m8-tp5"],
        explanation: [
          "Structured products carry risks beyond the credit risk of the underlying assets. Correlation risk is central: the safety of a senior tranche depends on losses in the pool being diversified, so if defaults become highly correlated (as in a systemic downturn), losses cluster and can breach the subordination protecting senior tranches. Model risk arises because tranche valuation and ratings rely on assumptions (default rates, correlations, recoveries) that can be wrong, and liquidity and complexity risks make these securities hard to value and sell in stress.",
          "The 2008 crisis is the canonical lesson: rating agencies and models underestimated the correlation of mortgage defaults, so tranches rated highly on the assumption of diversified losses suffered severe losses when defaults became correlated across a nationwide housing downturn. The exam tests the link between underestimated default correlation and senior-tranche losses, and the broader point that a structured product is only as safe as the correlation and model assumptions behind its enhancement.",
        ],
        keyRules: [
          "Correlation, model, liquidity, and complexity risks pervade structured products.",
          "Higher default correlation erodes senior-tranche protection.",
          "2008: underestimated correlation caused losses on highly rated tranches.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m8-p1",
        testPointIds: ["caia-l1-m8-tp1"],
        style: "Loss-allocation MCQ",
        question:
          "A $200m structure has a $150m senior tranche, a $35m mezzanine tranche, and a $15m equity tranche. The collateral pool loses $22m. Allocate the losses and state which tranches are impaired and which are protected.",
        answerPlan: [
          "Apply losses bottom-up.",
          "Determine each tranche's impairment.",
          "Confirm senior protection.",
        ],
        modelAnswer:
          "Losses are absorbed from the bottom up. The first $15m wipes out the entire equity tranche. The remaining $22m - $15m = $7m hits the $35m mezzanine tranche, impairing $7m and leaving $28m. Because total losses ($22m) are less than the combined equity + mezzanine cushion ($50m), the $150m senior tranche is fully protected and unimpaired. So the equity tranche is wiped out, the mezzanine is partially impaired, and the senior tranche is untouched.",
        markingGuide: [
          "Wipes out the equity tranche first ($15m).",
          "Impairs $7m of the mezzanine tranche.",
          "Confirms the senior tranche is fully protected.",
        ],
      },
      {
        id: "caia-l1-m8-p2",
        testPointIds: ["caia-l1-m8-tp2"],
        style: "MBS MCQ",
        question:
          "Interest rates fall sharply. Explain what happens to the cash flows and price behaviour of a mortgage-backed security relative to an option-free bond of similar maturity.",
        answerPlan: [
          "Explain the prepayment response.",
          "Explain the cash-flow effect.",
          "Explain the price/convexity effect.",
        ],
        modelAnswer:
          "When rates fall sharply, many borrowers refinance, so the MBS experiences faster prepayments (contraction): investors receive principal back sooner and must reinvest it at the new, lower rates. Relative to an option-free bond, the MBS price rises less as rates fall, because the accelerating prepayments cap its upside — this is negative convexity. In effect, the borrower's prepayment option works against the investor exactly when lower rates would otherwise be most beneficial, which is why MBS carry higher yields to compensate for prepayment risk.",
        markingGuide: [
          "Explains faster prepayment/contraction when rates fall.",
          "Notes reinvestment at lower rates.",
          "Explains the negative-convexity price behaviour vs an option-free bond.",
        ],
      },
      {
        id: "caia-l1-m8-p3",
        testPointIds: ["caia-l1-m8-tp5"],
        style: "Risk MCQ",
        question:
          "Explain why senior tranches of mortgage-related structured products that were highly rated before 2008 nonetheless suffered large losses, focusing on the role of default correlation.",
        answerPlan: [
          "Explain the diversification assumption.",
          "Explain the correlation failure.",
          "Explain the consequence for senior tranches.",
        ],
        modelAnswer:
          "The high ratings on senior tranches rested on the assumption that mortgage defaults would be largely diversified, so that only a modest, absorbable share of the pool would default and the subordination beneath the senior tranche would cover the losses. In the 2008 nationwide housing downturn, defaults became highly correlated across regions and borrowers, so losses clustered and far exceeded the diversified levels assumed. That surge overwhelmed the subordination protecting the senior tranches, causing losses on securities that models and ratings had treated as very safe. The episode shows that a senior tranche's safety depends critically on the default-correlation assumption behind its credit enhancement.",
        markingGuide: [
          "Explains ratings assumed diversified/low-correlation defaults.",
          "Explains correlation rose in the systemic downturn.",
          "Explains correlated losses breached the senior tranches' subordination.",
        ],
      },
    ],
  }),

  "caia-l1-m9": examDepth({
    testPoints: [
      {
        id: "caia-l1-m9-tp1",
        title: "Return measures for alternatives (arithmetic vs geometric, IRR)",
        priority: "critical",
        examinerFocus:
          "Distinguishing arithmetic from geometric (compound) returns and time-weighted from money-weighted (IRR) returns, and when each is appropriate for alternatives.",
        typicalQuestionForms: [
          "When is a money-weighted (IRR) return more appropriate than a time-weighted return?",
          "Why is the geometric mean lower than the arithmetic mean for volatile returns?",
        ],
        mustKnow: [
          "Geometric (compound) return reflects actual multi-period growth; arithmetic overstates it for volatile series.",
          "Time-weighted return removes cash-flow timing (for manager comparison); money-weighted (IRR) reflects investor cash-flow timing.",
          "IRR suits drawdown vehicles where the GP controls cash-flow timing.",
        ],
        scoringActions: [
          "Use IRR when cash-flow timing is controlled (private funds); time-weighted to compare managers.",
          "Prefer geometric mean for realised multi-period growth.",
        ],
      },
      {
        id: "caia-l1-m9-tp2",
        title: "Risk measures beyond standard deviation",
        priority: "high",
        examinerFocus:
          "Why standard deviation is insufficient for non-normal alternative returns, and the roles of downside deviation, semivariance, drawdown, and Value at Risk.",
        typicalQuestionForms: [
          "Which risk measure focuses only on downside volatility?",
          "What does maximum drawdown measure?",
        ],
        mustKnow: [
          "Standard deviation assumes symmetry and understates tail risk for skewed returns.",
          "Downside deviation/semivariance measure only harmful (below-target) volatility.",
          "Maximum drawdown measures the largest peak-to-trough loss; VaR estimates a loss threshold at a confidence level.",
        ],
        scoringActions: [
          "Match the risk measure to the concern (downside, tail, path).",
          "Prefer downside/tail measures for non-normal alternative returns.",
        ],
      },
      {
        id: "caia-l1-m9-tp3",
        title: "Higher moments: skewness and kurtosis",
        priority: "high",
        examinerFocus:
          "Interpreting skewness (asymmetry) and kurtosis (fat tails), and recognising that many alternatives exhibit negative skew and excess kurtosis (crash risk).",
        typicalQuestionForms: [
          "What does negative skewness imply about a return distribution?",
          "Which strategies typically exhibit negative skew and fat tails?",
        ],
        mustKnow: [
          "Negative skew means frequent small gains and occasional large losses.",
          "Excess kurtosis (fat tails) means extreme outcomes are more likely than normal.",
          "Many alternatives (e.g., merger arb, some credit) show negative skew and excess kurtosis.",
        ],
        scoringActions: [
          "Tie negative skew to 'small gains, rare large losses'.",
          "Flag fat tails as elevated extreme-loss probability.",
        ],
      },
      {
        id: "caia-l1-m9-tp4",
        title: "Risk-adjusted performance ratios",
        priority: "critical",
        examinerFocus:
          "Computing and choosing among Sharpe (total risk), Sortino (downside risk), Treynor (systematic risk), and the information ratio (active risk).",
        typicalQuestionForms: [
          "Compute the Sharpe/Sortino ratio given returns and risk.",
          "Which ratio is most appropriate when downside risk is the concern?",
        ],
        mustKnow: [
          "Sharpe = (return - risk-free) / standard deviation; Sortino uses downside deviation.",
          "Treynor uses beta (systematic risk); the information ratio uses active return / tracking error.",
          "Choose the ratio matching the relevant risk (total, downside, systematic, active).",
        ],
        scoringActions: [
          "Compute the requested ratio precisely.",
          "Select the ratio whose risk denominator matches the question's concern.",
        ],
      },
      {
        id: "caia-l1-m9-tp5",
        title: "Data problems: smoothing, autocorrelation, and stale pricing",
        priority: "medium",
        examinerFocus:
          "How appraisal smoothing and stale pricing in illiquid alternatives create autocorrelation, understating volatility and correlation and overstating risk-adjusted ratios.",
        typicalQuestionForms: [
          "How does return smoothing affect reported volatility and Sharpe ratios?",
          "What does positive autocorrelation in returns suggest?",
        ],
        mustKnow: [
          "Illiquid/appraisal-based returns are smoothed and positively autocorrelated.",
          "Smoothing understates true volatility and correlation, inflating Sharpe ratios.",
          "Unsmoothing techniques adjust reported returns to reveal true risk.",
        ],
        scoringActions: [
          "Discount reported low volatility/high Sharpe from smoothed data.",
          "Read positive autocorrelation as a sign of smoothing/stale pricing.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "This quantitative module underpins later performance analysis; convert the ratio computations and the return-measure and data-problem items.",
      timeBudget:
        "60–90 seconds per item; ratio computations take under a minute once inputs are set.",
      answerSequence: [
        "Pick the correct return measure (time- vs money-weighted; geometric vs arithmetic).",
        "Match the risk measure to the concern (downside, tail, path).",
        "Compute the requested risk-adjusted ratio.",
        "Adjust reported figures for smoothing/autocorrelation where relevant.",
      ],
      qualityChecks: [
        "Did you use IRR for cash-flow-timed private funds and time-weighted to compare managers?",
        "Did the ratio's denominator match the relevant risk?",
        "Did you discount inflated Sharpe ratios from smoothed data?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m9-sn1",
        title: "Return measures for alternatives",
        testPointIds: ["caia-l1-m9-tp1"],
        explanation: [
          "Choosing the right return measure is the first analytical decision. The arithmetic mean averages period returns and overstates realised growth for volatile series, while the geometric (compound) mean reflects the actual multi-period growth an investor experiences and is always lower than the arithmetic mean when returns vary. For evaluating realised performance, the geometric return is the honest figure.",
          "Equally important is time-weighted versus money-weighted (IRR) return. Time-weighted return removes the effect of cash-flow timing, isolating the manager's investment decisions, which makes it the right tool for comparing managers who do not control when investors add or withdraw money. Money-weighted return (IRR) incorporates the size and timing of cash flows, so it is appropriate for drawdown vehicles like private equity, where the GP controls capital calls and distributions and the investor's actual experience depends on that timing. The exam tests matching the measure to the question: IRR for GP-controlled private funds, time-weighted for comparing managers.",
        ],
        keyRules: [
          "Geometric (compound) return reflects realised multi-period growth; arithmetic overstates it.",
          "Time-weighted return isolates manager skill; money-weighted (IRR) reflects cash-flow timing.",
          "Use IRR for GP-controlled drawdown vehicles.",
        ],
      },
      {
        id: "caia-l1-m9-sn2",
        title: "Risk measures and higher moments",
        testPointIds: ["caia-l1-m9-tp2", "caia-l1-m9-tp3"],
        explanation: [
          "Standard deviation is a poor sole risk measure for alternatives because it assumes symmetric, normal returns and treats upside and downside volatility equally, understating the tail risk of skewed distributions. Better tools focus on the harmful side: downside deviation and semivariance measure only volatility below a target, maximum drawdown captures the largest peak-to-trough loss (a path-dependent measure investors actually feel), and Value at Risk estimates the loss that will not be exceeded at a given confidence level.",
          "Higher moments describe the shape that standard deviation misses. Skewness measures asymmetry: negative skew — common in alternatives like merger arbitrage and some credit strategies — means the distribution has frequent small gains and occasional large losses, exactly the profile that looks safe until it is not. Kurtosis measures tail fatness: excess kurtosis (fat tails) means extreme outcomes are more likely than a normal distribution implies. Because many alternatives exhibit negative skew and excess kurtosis, risk analysis must go beyond volatility to capture crash risk.",
        ],
        keyRules: [
          "Standard deviation understates tail risk for skewed returns.",
          "Downside deviation/semivariance, drawdown, and VaR target harmful risk.",
          "Negative skew = small gains, rare large losses; excess kurtosis = fat tails.",
        ],
      },
      {
        id: "caia-l1-m9-sn3",
        title: "Risk-adjusted ratios, worked",
        testPointIds: ["caia-l1-m9-tp4"],
        explanation: [
          "Risk-adjusted ratios express return per unit of risk, and each uses a different risk denominator, so the choice must match the concern. The Sharpe ratio divides excess return (return minus risk-free) by total risk (standard deviation) and is the general-purpose measure. The Sortino ratio replaces standard deviation with downside deviation, making it preferable when only downside risk matters — appropriate for the negatively skewed return profiles common in alternatives. The Treynor ratio uses beta (systematic risk) and suits diversified portfolios, while the information ratio divides active return by tracking error to measure active-management skill relative to a benchmark.",
          "Because alternatives are often negatively skewed, the Sharpe ratio can flatter them (it penalises upside and downside volatility equally and ignores tail risk), so the Sortino ratio and tail measures give a more honest picture. The exam tests both computing the ratios and selecting the one whose risk denominator matches the question's concern.",
        ],
        keyRules: [
          "Sharpe uses total risk; Sortino uses downside deviation.",
          "Treynor uses beta; information ratio uses tracking error.",
          "Match the ratio to the relevant risk; Sortino suits negatively skewed alternatives.",
        ],
        formulas: [
          "Sharpe = (Rp - Rf) / standard deviation",
          "Sortino = (Rp - target) / downside deviation",
          "Information ratio = active return / tracking error",
        ],
        workedProblem: {
          scenario:
            "A fund returns 11% with a standard deviation of 14% and a downside deviation of 8%; the risk-free rate is 2%. Compute its Sharpe and Sortino ratios. The fund's returns are negatively skewed with occasional large losses. Explain which ratio better reflects its risk and why the two differ.",
          steps: [
            "Compute the excess return: 11% - 2% risk-free = 9%.",
            "Compute the Sharpe ratio: excess return / standard deviation = 9% / 14% = 0.64.",
            "Compute the Sortino ratio: excess return / downside deviation = 9% / 8% = 1.13.",
            "Explain the difference: the Sortino ratio is higher because downside deviation (8%) is smaller than total standard deviation (14%) — it ignores upside volatility and counts only harmful (below-target) volatility.",
            "Choose the better measure: because the fund is negatively skewed with occasional large losses, neither ratio fully captures tail risk, but the Sortino ratio better reflects investor concern with downside; however, both should be read alongside drawdown/tail measures given the negative skew.",
          ],
          conclusion:
            "The Sharpe ratio is 0.64 and the Sortino ratio is 1.13; the Sortino is higher because it only penalises downside volatility. Given the fund's negative skew, the Sortino ratio is the more relevant of the two, but it should be supplemented with drawdown and tail-risk measures because ratio-based metrics can still understate crash risk.",
          markingNotes: [
            "Full credit requires Sharpe 0.64, Sortino 1.13, and the explanation of why they differ.",
            "Recommending only the Sharpe ratio for a negatively skewed fund, without noting tail-risk limits, loses the interpretation mark.",
          ],
        },
      },
      {
        id: "caia-l1-m9-sn4",
        title: "Data problems: smoothing and autocorrelation",
        testPointIds: ["caia-l1-m9-tp5"],
        explanation: [
          "Illiquid alternatives that rely on appraisals or stale prices produce smoothed return series, because reported values lag true market values and change gradually rather than reflecting real-time moves. Smoothing shows up statistically as positive autocorrelation — this period's reported return is correlated with last period's — which is a red flag that the returns do not reflect true market volatility.",
          "The consequence is that smoothed data understates true volatility and understates correlation with public markets, which in turn overstates risk-adjusted ratios like the Sharpe ratio and makes the asset look better-diversifying and less risky than it is. Analysts apply unsmoothing techniques to reconstruct a truer return series and recover the underlying volatility and correlation. The exam tests recognising positive autocorrelation as a symptom of smoothing and discounting the flattering statistics that result.",
        ],
        keyRules: [
          "Appraisal/stale pricing smooths returns, creating positive autocorrelation.",
          "Smoothing understates volatility and correlation, inflating Sharpe ratios.",
          "Unsmoothing reveals the true underlying risk.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m9-p1",
        testPointIds: ["caia-l1-m9-tp4"],
        style: "Ratio computation MCQ",
        question:
          "A fund returns 8% with a standard deviation of 10% and a downside deviation of 5%; the risk-free rate is 1%. Compute the Sharpe and Sortino ratios and state which is more appropriate if the investor cares only about downside risk.",
        answerPlan: [
          "Compute excess return.",
          "Compute both ratios.",
          "Select the appropriate ratio.",
        ],
        modelAnswer:
          "Excess return = 8% - 1% = 7%. Sharpe ratio = 7% / 10% = 0.70. Sortino ratio = 7% / 5% = 1.40. If the investor cares only about downside risk, the Sortino ratio is more appropriate because it measures return per unit of downside (harmful) deviation rather than total volatility, which also penalises upside movement. Here the Sortino (1.40) is double the Sharpe (0.70) because the downside deviation (5%) is half the total standard deviation (10%).",
        markingGuide: [
          "Computes Sharpe 0.70 and Sortino 1.40.",
          "Selects Sortino for downside-focused investors.",
          "Explains why the Sortino exceeds the Sharpe here.",
        ],
      },
      {
        id: "caia-l1-m9-p2",
        testPointIds: ["caia-l1-m9-tp1"],
        style: "Return-measure MCQ",
        question:
          "An analyst wants to (a) compare two hedge fund managers' skill regardless of investor cash flows, and (b) measure an LP's realised return in a private equity fund with irregular capital calls and distributions. Which return measure fits each purpose and why?",
        answerPlan: [
          "Address the manager comparison.",
          "Address the private-equity measurement.",
          "Justify each choice.",
        ],
        modelAnswer:
          "For comparing the two managers' skill, the analyst should use the time-weighted return, because it removes the effect of the timing and size of investor cash flows, isolating the managers' investment decisions and making the comparison fair. For the LP's realised return in the private equity fund, the money-weighted return (IRR) is appropriate, because the GP controls the timing of capital calls and distributions, and the LP's actual experience depends on that timing — which the IRR captures but a time-weighted return would ignore.",
        markingGuide: [
          "Selects time-weighted return for manager comparison.",
          "Selects money-weighted return (IRR) for the private-equity LP.",
          "Justifies each by the role of cash-flow timing.",
        ],
      },
      {
        id: "caia-l1-m9-p3",
        testPointIds: ["caia-l1-m9-tp5", "caia-l1-m9-tp2"],
        style: "Data-quality MCQ",
        question:
          "An illiquid credit fund reports very low volatility, a high Sharpe ratio, and near-zero correlation to equities, and its returns show strong positive autocorrelation. Explain what is likely happening and how it should change the analyst's assessment.",
        answerPlan: [
          "Identify the smoothing symptom.",
          "Explain the effect on statistics.",
          "State the corrected assessment.",
        ],
        modelAnswer:
          "The strong positive autocorrelation is a classic symptom of return smoothing from appraisal-based or stale pricing: reported values lag and change gradually rather than reflecting true market moves. This smoothing artificially understates the fund's true volatility and its correlation to equities, which in turn inflates its Sharpe ratio and makes it look like a better diversifier than it is. The analyst should discount the reported low volatility, high Sharpe, and low correlation, ideally applying an unsmoothing adjustment, and recognise that the fund's true risk and equity correlation are higher than the reported statistics suggest.",
        markingGuide: [
          "Identifies positive autocorrelation as a smoothing symptom.",
          "Explains it understates volatility/correlation and inflates the Sharpe ratio.",
          "Recommends discounting/unsmoothing the reported statistics.",
        ],
      },
    ],
  }),

  "caia-l1-m10": examDepth({
    testPoints: [
      {
        id: "caia-l1-m10-tp1",
        title: "The due diligence framework: investment vs operational",
        priority: "critical",
        examinerFocus:
          "Distinguishing investment due diligence (strategy, edge, performance, risk) from operational due diligence (ODD: operations, controls, service providers), and why ODD failures cause many blowups.",
        typicalQuestionForms: [
          "Which type of due diligence focuses on the fund's operational controls and service providers?",
          "Why is operational due diligence critical for alternatives?",
        ],
        mustKnow: [
          "Investment due diligence assesses the strategy, edge, team, performance, and risk.",
          "Operational due diligence (ODD) assesses operations, controls, valuation, compliance, and service providers.",
          "Many fund failures stem from operational problems and fraud, not just poor investment performance.",
        ],
        scoringActions: [
          "Classify each due-diligence task as investment or operational.",
          "Emphasise ODD as a primary defence against fraud and operational failure.",
        ],
      },
      {
        id: "caia-l1-m10-tp2",
        title: "Independent service providers and their role",
        priority: "high",
        examinerFocus:
          "The importance of independent administrators, auditors, custodians, and prime brokers as external checks on a manager's reported values and controls.",
        typicalQuestionForms: [
          "Why is an independent administrator important in due diligence?",
          "Which service provider independently verifies a fund's financial statements?",
        ],
        mustKnow: [
          "Independent administrators strike NAV and provide an external check on valuations.",
          "Auditors independently verify financial statements; custodians safekeep assets.",
          "Reliance on the manager for valuation (no independent check) is a red flag.",
        ],
        scoringActions: [
          "Tie NAV/valuation verification to independent administrators and auditors.",
          "Flag manager-controlled valuation without independence as a red flag.",
        ],
      },
      {
        id: "caia-l1-m10-tp3",
        title: "Fraud red flags and lessons (e.g., Ponzi schemes)",
        priority: "high",
        examinerFocus:
          "Recognising red flags — implausibly smooth returns, lack of independent verification, related-party service providers, restricted transparency — that signal fraud.",
        typicalQuestionForms: [
          "Which combination of red flags most strongly suggests fraud?",
          "What lesson does a major Ponzi scheme teach about due diligence?",
        ],
        mustKnow: [
          "Red flags: implausibly smooth/consistent returns, no independent administrator/auditor, related-party providers, opacity.",
          "Fraud often hides behind self-administration and self-custody.",
          "Independent verification of assets and returns is the key defence.",
        ],
        scoringActions: [
          "Cluster red flags (smooth returns + no independence + opacity) as fraud indicators.",
          "Insist on independent verification of assets and NAV.",
        ],
      },
      {
        id: "caia-l1-m10-tp4",
        title: "Assessing the investment process and edge",
        priority: "high",
        examinerFocus:
          "Evaluating whether a manager has a genuine, repeatable edge, a sound and consistent process, and returns explained by skill rather than luck or hidden risk.",
        typicalQuestionForms: [
          "What distinguishes a repeatable investment edge from luck?",
          "Why should due diligence probe the source of a manager's returns?",
        ],
        mustKnow: [
          "A genuine edge is repeatable and grounded in a defensible process, not a few lucky bets.",
          "Style drift and returns inconsistent with the stated strategy are warning signs.",
          "Attribution should tie returns to identifiable, repeatable sources.",
        ],
        scoringActions: [
          "Test whether returns match the stated strategy and process.",
          "Distinguish repeatable edge from luck or hidden risk exposure.",
        ],
      },
      {
        id: "caia-l1-m10-tp5",
        title: "Terms, transparency, and alignment in DD",
        priority: "medium",
        examinerFocus:
          "Evaluating fund terms (fees, liquidity, gates, lock-ups), transparency, and alignment (GP co-investment) as part of due diligence.",
        typicalQuestionForms: [
          "How does GP co-investment affect alignment?",
          "Why do liquidity terms matter in due diligence?",
        ],
        mustKnow: [
          "Fees, liquidity terms, gates, and lock-ups affect investor outcomes and must be assessed.",
          "GP co-investment (skin in the game) improves alignment of interests.",
          "Transparency into positions, risk, and valuation supports monitoring.",
        ],
        scoringActions: [
          "Weigh terms and liquidity against the strategy's actual liquidity.",
          "Treat GP co-investment as a positive alignment signal.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Due diligence foundations set up the Level II due-diligence emphasis; convert the investment-vs-operational and red-flag items, which are the most testable.",
      timeBudget:
        "About 60 seconds per item; conceptual with no computation.",
      answerSequence: [
        "Classify the task as investment or operational due diligence.",
        "Check for independent service providers and verification.",
        "Cluster red flags to assess fraud risk.",
        "Assess edge, terms, and alignment.",
      ],
      qualityChecks: [
        "Did you treat operational due diligence as a primary fraud defence?",
        "Did you flag manager-controlled valuation without independence?",
        "Did you test whether returns match the stated strategy?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l1-m10-sn1",
        title: "Investment versus operational due diligence",
        testPointIds: ["caia-l1-m10-tp1", "caia-l1-m10-tp4"],
        explanation: [
          "Due diligence has two complementary tracks. Investment due diligence evaluates the merits of the strategy: the source of the manager's edge, the soundness and repeatability of the process, the team's skill and stability, the track record and its attribution, and the risk taken to generate returns. The key question is whether the manager has a genuine, repeatable edge grounded in a defensible process, or whether the returns reflect luck, style drift, or hidden risk exposures that could reverse.",
          "Operational due diligence (ODD) evaluates everything around the investment process: the firm's operations, internal controls, valuation policies, compliance, technology, business viability, and — critically — its service providers. ODD matters enormously in alternatives because a large share of fund failures and investor losses stem from operational breakdowns and fraud rather than poor investment performance. A manager can be a brilliant investor and still lose investors' money through weak controls, mispricing, or outright theft, which is why ODD is a primary defence, not an afterthought.",
        ],
        keyRules: [
          "Investment DD: strategy, edge, team, track record, risk.",
          "Operational DD: operations, controls, valuation, compliance, service providers.",
          "Many failures are operational/fraud-driven, not investment-driven.",
        ],
      },
      {
        id: "caia-l1-m10-sn2",
        title: "Independent providers, red flags, and a worked assessment",
        testPointIds: ["caia-l1-m10-tp2", "caia-l1-m10-tp3"],
        explanation: [
          "Independent service providers are the external checks that make a manager's reported figures trustworthy. An independent administrator strikes the NAV and provides a check on the manager's valuations; an independent auditor verifies the financial statements; a qualified custodian safekeeps the assets; and a prime broker provides financing and reporting. When these functions are independent of the manager, investors have external confirmation that the assets exist and are valued fairly. When the manager performs these functions itself (self-administration, self-custody, an affiliated or obscure auditor), the external checks vanish — a serious red flag.",
          "Fraud typically hides where independent verification is absent. Classic red flags include implausibly smooth and consistent returns (real strategies have volatility), the absence of a reputable independent administrator or auditor, related-party or unknown service providers, and restricted transparency into positions and valuation. Major Ponzi schemes shared these features — self-administration, a tiny or complicit auditor, and secrecy — and their central lesson is that returns and assets must be independently verified, not taken on the manager's word.",
        ],
        keyRules: [
          "Independent administrator (NAV), auditor (statements), and custodian (assets) are essential checks.",
          "Red flags: smooth returns, no independent verification, related-party providers, opacity.",
          "Independent verification of assets and returns is the primary fraud defence.",
        ],
        workedProblem: {
          scenario:
            "An analyst reviews a fund that reports remarkably consistent 1% monthly gains with almost no losing months, is administered in-house by the manager, uses a small, little-known audit firm, keeps its strategy secret 'to protect its edge,' and holds assets at a broker affiliated with the manager. Identify the red flags and give a due-diligence recommendation.",
          steps: [
            "Assess the return pattern: consistent 1% monthly gains with virtually no losses is implausibly smooth for any real strategy — red flag one (possible fabricated or smoothed returns).",
            "Assess administration: the manager self-administers and strikes its own NAV, removing the independent valuation check — red flag two.",
            "Assess the auditor: a small, little-known audit firm may lack the capacity or independence to verify a complex fund — red flag three.",
            "Assess transparency and custody: refusing to explain the strategy plus holding assets at an affiliated broker removes both transparency and independent asset verification — red flags four and five.",
            "Synthesize: the cluster of smooth returns, self-administration, weak/related-party providers, and opacity closely matches the profile of known frauds.",
          ],
          conclusion:
            "The fund displays a dangerous cluster of red flags — implausibly smooth returns, self-administration, a weak auditor, opacity, and an affiliated custodian — that together strongly suggest fraud risk. The due-diligence recommendation is to decline to invest absent independent verification: require a reputable independent administrator and auditor and independent custody, and independently confirm the assets and returns before any allocation.",
          markingNotes: [
            "Full credit requires identifying the cluster of red flags and recommending independent verification / declining absent it.",
            "Being reassured by the strong, smooth track record is the classic error — that consistency is itself the warning sign.",
          ],
        },
      },
      {
        id: "caia-l1-m10-sn3",
        title: "Assessing edge and the investment process",
        testPointIds: ["caia-l1-m10-tp4"],
        explanation: [
          "Investment due diligence must determine whether a manager's returns come from a genuine, repeatable edge or from luck and hidden risk. A defensible edge is grounded in a clear, consistent process — an identifiable source of advantage (information, analytical, structural, or behavioural) that can be repeated across market environments. Return attribution should tie the performance to that stated source; if the returns are explained instead by unstated risk exposures or a few concentrated bets, the edge is questionable.",
          "Warning signs include style drift (the manager deviating from the stated strategy), returns inconsistent with the claimed approach, over-reliance on a single person, and performance that only works in one market regime. The exam frames good investment DD as probing the source and repeatability of returns rather than being impressed by the headline track record, echoing the alpha-versus-beta theme from earlier modules.",
        ],
        keyRules: [
          "A genuine edge is repeatable and grounded in a defensible process.",
          "Attribution should tie returns to the stated strategy, not hidden risk.",
          "Style drift and regime-dependent returns are warning signs.",
        ],
      },
      {
        id: "caia-l1-m10-sn4",
        title: "Terms, transparency, and alignment",
        testPointIds: ["caia-l1-m10-tp5"],
        explanation: [
          "Due diligence also assesses the deal itself. Fees (management and incentive), liquidity terms, gates, lock-ups, and redemption notice periods all affect investor outcomes and must be judged against the strategy's actual liquidity — a strategy holding illiquid assets should not offer daily liquidity, and a mismatch is itself a risk. Transparency into positions, risk exposures, and valuation supports ongoing monitoring after the investment is made.",
          "Alignment of interests is a recurring theme. GP or manager co-investment — meaningful personal capital in the fund ('skin in the game') — aligns the manager with investors, because the manager shares in losses as well as gains. Weak alignment (little co-investment, fee structures that reward asset gathering or risk-taking) is a caution. The exam tests weighing terms and liquidity against the strategy and treating manager co-investment as a positive alignment signal.",
        ],
        keyRules: [
          "Match liquidity terms and gates/lock-ups to the strategy's true liquidity.",
          "Transparency supports ongoing monitoring.",
          "GP co-investment (skin in the game) improves alignment.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l1-m10-p1",
        testPointIds: ["caia-l1-m10-tp1", "caia-l1-m10-tp2"],
        style: "Classification MCQ",
        question:
          "For each item, state whether it belongs to investment or operational due diligence: (a) verifying the fund uses an independent administrator and auditor; (b) assessing whether the manager's edge is repeatable; (c) reviewing the fund's valuation policy and compliance controls; (d) attributing the track record to identifiable return sources.",
        answerPlan: [
          "Classify each item.",
          "Justify the operational vs investment split.",
        ],
        modelAnswer:
          "(a) Verifying independent administrator and auditor is operational due diligence — it checks the external controls and service providers. (b) Assessing whether the edge is repeatable is investment due diligence — it evaluates the strategy's merit. (c) Reviewing valuation policy and compliance controls is operational due diligence — it concerns operations and controls. (d) Attributing the track record to identifiable return sources is investment due diligence — it evaluates the source and quality of returns. In short, (a) and (c) are operational; (b) and (d) are investment. Operational failures are a leading cause of fund blowups, so (a) and (c) are not secondary to the investment questions.",
        markingGuide: [
          "Classifies (a) and (c) as operational due diligence.",
          "Classifies (b) and (d) as investment due diligence.",
          "Notes the importance of operational due diligence.",
        ],
      },
      {
        id: "caia-l1-m10-p2",
        testPointIds: ["caia-l1-m10-tp3"],
        style: "Red-flag MCQ",
        question:
          "A prospective fund reports steady positive returns every single month for five years, is administered and valued in-house, and provides no independent audit. Explain why this combination is alarming and what an analyst should require before considering an investment.",
        answerPlan: [
          "Explain the smooth-return red flag.",
          "Explain the lack of independence.",
          "State the verification requirement.",
        ],
        modelAnswer:
          "Steady positive returns every month for five years is implausibly smooth — genuine strategies experience volatility and losing months — so the pattern itself is a red flag suggesting the returns may be fabricated or improperly smoothed. Compounding the concern, the fund administers and values itself and has no independent audit, so there is no external check confirming that the assets exist or that the reported values are accurate. This combination matches the profile of historical frauds. Before considering any investment, the analyst should require a reputable independent administrator and auditor and independent custody, and should independently verify the existence and valuation of the assets; absent that verification, the fund should be declined.",
        markingGuide: [
          "Identifies implausibly smooth returns as a red flag.",
          "Identifies the absence of independent administration/audit.",
          "Requires independent verification before investing (or declines).",
        ],
      },
      {
        id: "caia-l1-m10-p3",
        testPointIds: ["caia-l1-m10-tp4", "caia-l1-m10-tp5"],
        style: "Process/alignment MCQ",
        question:
          "A fund's returns have been strong, but its performance recently came from large positions in an asset class outside its stated market-neutral strategy, and the founder has no personal capital in the fund. Identify the two concerns and how they affect your assessment.",
        answerPlan: [
          "Identify the style-drift concern.",
          "Identify the alignment concern.",
          "State the assessment impact.",
        ],
        modelAnswer:
          "First, the recent returns came from large positions outside the stated market-neutral strategy, which is style drift: the manager is taking risks inconsistent with the claimed approach, so the returns are not attributable to the stated, repeatable edge and could reverse, and they signal weak discipline or hidden risk. Second, the founder has no personal capital in the fund, indicating weak alignment (no skin in the game), so the manager does not share in losses. Together these lower the assessment: the returns' source is questionable and the manager's incentives are poorly aligned with investors, both of which argue for caution or additional scrutiny before investing.",
        markingGuide: [
          "Identifies style drift as inconsistent with the stated strategy.",
          "Identifies the lack of GP co-investment as weak alignment.",
          "Explains both lower the overall assessment.",
        ],
      },
    ],
  }),

  "caia-l2-m1": examDepth({
    testPoints: [
      {
        id: "caia-l2-m1-tp1",
        title: "Applying the Standards to complex, multi-party scenarios",
        priority: "critical",
        examinerFocus:
          "Whether you can resolve realistic conflicts among duties to clients, employers, and self and defend the resolution in constructed-response form — Level II moves from recognition to application with partial credit for structured reasoning.",
        typicalQuestionForms: [
          "Identify the Standard(s) violated and recommend a resolution (essay).",
          "A manager faces competing duties to two clients and the firm. How should the conflict be resolved?",
        ],
        mustKnow: [
          "Identify the decisive Standard(s), then reason to a defensible resolution and remedy.",
          "Client interests take priority over employer and self.",
          "Constructed-response answers earn partial credit for correctly citing the Standard and the remedy.",
        ],
        scoringActions: [
          "State the specific Standard(s), the breach, and a concrete remedy in structured form.",
          "Prioritise client interests when duties conflict.",
        ],
      },
      {
        id: "caia-l2-m1-tp2",
        title: "Valuation, performance presentation, and fair dealing in private funds",
        priority: "high",
        examinerFocus:
          "Applying the Standards to the valuation and performance-reporting problems specific to illiquid private funds, where the manager controls marks and clients cannot independently verify them.",
        typicalQuestionForms: [
          "A GP marks illiquid positions to support a favourable track record. Which Standards apply?",
          "How should performance be presented for an illiquid fund?",
        ],
        mustKnow: [
          "Performance presentation must be fair, accurate, and not misleading.",
          "Manager-controlled valuations create acute loyalty and misrepresentation risks.",
          "Fair dealing governs allocation of opportunities and treatment across clients.",
        ],
        scoringActions: [
          "Flag self-serving valuations as loyalty/misrepresentation issues.",
          "Require fair, verifiable performance presentation.",
        ],
      },
      {
        id: "caia-l2-m1-tp3",
        title: "MNPI, expert networks, and information barriers",
        priority: "high",
        examinerFocus:
          "Applying the MNPI Standard to expert-network and alternative-data situations, and recommending information barriers and policies to prevent misuse.",
        typicalQuestionForms: [
          "An expert-network consultant shares an issuer's confidential data. How should the firm respond?",
          "What policies prevent MNPI misuse in a multi-strategy firm?",
        ],
        mustKnow: [
          "Expert networks can be legitimate but risk conveying MNPI.",
          "Firms must implement information barriers and pre-clearance/restricted lists.",
          "On receiving MNPI, the firm must restrict trading in the affected security.",
        ],
        scoringActions: [
          "Recommend information barriers, restricted lists, and pre-clearance.",
          "Restrict trading once MNPI is received.",
        ],
      },
      {
        id: "caia-l2-m1-tp4",
        title: "Conflicts disclosure, priority of transactions, and personal trading",
        priority: "high",
        examinerFocus:
          "Designing and applying conflict-disclosure, priority-of-transactions, and personal-trading policies to prevent recurring violations in alternatives firms.",
        typicalQuestionForms: [
          "A portfolio manager trades personally ahead of client orders. Which Standard and remedy apply?",
          "What compliance policies prevent priority-of-transactions violations?",
        ],
        mustKnow: [
          "Client transactions take priority over personal and firm transactions.",
          "Personal-trading policies (pre-clearance, blackout periods, reporting) enforce priority.",
          "Material conflicts must be disclosed prominently for informed consent.",
        ],
        scoringActions: [
          "Apply priority of transactions and recommend personal-trading controls.",
          "Require prominent conflict disclosure.",
        ],
      },
      {
        id: "caia-l2-m1-tp5",
        title: "Constructed-response technique for ethics essays",
        priority: "medium",
        examinerFocus:
          "Structuring essay answers to earn partial credit: identify the decisive Standard, state the violation, and recommend a specific remedy or policy concisely.",
        typicalQuestionForms: [
          "Justify which Standard governs and the remedy (essay).",
          "Recommend a compliance procedure to prevent recurrence.",
        ],
        mustKnow: [
          "Structure: identify the Standard, state the breach, recommend the remedy/policy.",
          "Be specific and concise; graders award points per correct element.",
          "Recommend preventive policies, not just spot the violation.",
        ],
        scoringActions: [
          "Answer in the identify-breach-remedy structure.",
          "Include a preventive compliance recommendation.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Ethics recurs in both MCQ and essay formats at Level II; essays reward structured application, so aim to bank partial credit on every ethics constructed-response.",
      timeBudget:
        "For essays, budget time proportional to point allocation; spend the first minute identifying the decisive Standard before writing.",
      answerSequence: [
        "Identify the decisive Standard(s) from the facts.",
        "State the breach clearly.",
        "Recommend a specific resolution and preventive policy.",
        "Prioritise client interests when duties conflict.",
      ],
      qualityChecks: [
        "Did you cite the specific Standard, not a general principle?",
        "Did you recommend a concrete remedy and preventive policy?",
        "Did client interests take priority over employer/self?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m1-sn1",
        title: "From recognition to defensible resolution",
        testPointIds: ["caia-l2-m1-tp1", "caia-l2-m1-tp5"],
        explanation: [
          "Level II ethics demands application, not just recognition. Constructed-response questions present realistic, multi-party scenarios and ask candidates to identify the violation, resolve competing duties, and recommend remedies or policies. Graders award partial credit for each correct element, so a structured answer — name the decisive Standard, state precisely how it was breached, and recommend a concrete remedy and a preventive policy — captures points that a vague answer misses.",
          "When duties conflict, the ordering principle is that client interests take precedence over the interests of the employer and the member. A defensible resolution explains why one duty prevails and prescribes an action (decline, disclose, restrict, escalate) plus a policy to prevent recurrence. Because the format rewards clarity and specificity, candidates should write in the identify-breach-remedy structure rather than narrating the scenario.",
        ],
        keyRules: [
          "Structure essays: identify the Standard, state the breach, recommend the remedy/policy.",
          "Client interests outrank employer and self when duties conflict.",
          "Partial credit rewards each correct, specific element.",
        ],
      },
      {
        id: "caia-l2-m1-sn2",
        title: "Valuation, performance, and MNPI in practice, worked",
        testPointIds: ["caia-l2-m1-tp2", "caia-l2-m1-tp3"],
        explanation: [
          "Two application areas dominate Level II ethics in alternatives. First, valuation and performance presentation: because private funds hold illiquid assets the manager marks itself, there is acute risk of self-serving valuations that inflate the track record or support incentive fees, implicating the duties of loyalty, fair dealing, and the prohibition on misrepresentation. Performance must be presented fairly, accurately, and without misleading omissions, and independent valuation is the safeguard. Second, MNPI in the age of expert networks and alternative data: consultants and datasets can legitimately inform research, but they can also convey material non-public information, and once a firm receives MNPI it must restrict trading in the affected security.",
          "The remedy in both areas is policy. Firms should use independent administrators and auditors for valuation, present GIPS-style fair performance, and, for information risk, implement information barriers, restricted and watch lists, and pre-clearance procedures. The exam rewards candidates who not only spot the violation but prescribe the specific control that would prevent it.",
        ],
        keyRules: [
          "Self-serving valuations implicate loyalty, fair dealing, and misrepresentation.",
          "Present performance fairly; use independent valuation.",
          "On receiving MNPI, restrict trading; use information barriers and restricted lists.",
        ],
        workedProblem: {
          scenario:
            "A multi-strategy firm's credit team uses an expert network and, in one call, a consultant (a current employee of a target issuer) discloses the issuer's unannounced covenant breach. Meanwhile, the firm's private-credit fund manager marks an illiquid loan well above recent comparable transactions to hit an incentive-fee hurdle. As compliance, identify the violations and recommend remedies in constructed-response form.",
          steps: [
            "Identify the MNPI issue: the consultant disclosed material non-public information (the unannounced covenant breach), so trading on it would violate the Standard on Material Non-Public Information.",
            "Prescribe the MNPI remedy: restrict trading in the affected issuer, place it on the restricted list, document the incident, and reinforce expert-network policies and information barriers to prevent recurrence.",
            "Identify the valuation issue: marking the illiquid loan above comparable transactions to reach an incentive-fee hurdle is a self-serving valuation that breaches loyalty, fair dealing, and the prohibition on misrepresentation (the performance/valuation is misleading).",
            "Prescribe the valuation remedy: require independent administrator/third-party valuation, a documented valuation policy and committee, and correction of the mark; incentive fees must be based on fair value.",
            "Structure the answer: for each issue, state the Standard, the breach, and the specific remedy/policy, prioritising the clients' interests.",
          ],
          conclusion:
            "The firm faces two violations: prospective insider trading from the expert-network MNPI (restrict trading, restricted list, information barriers) and a self-serving valuation breaching loyalty and misrepresentation (independent valuation, documented policy, corrected mark). A full-credit essay names each Standard, states the breach, and prescribes the preventive control.",
          markingNotes: [
            "Full credit requires addressing both issues with the correct Standard and a specific remedy for each.",
            "Only spotting the violations without recommending preventive policies loses the remedy points.",
          ],
        },
      },
      {
        id: "caia-l2-m1-sn3",
        title: "Conflicts, priority of transactions, and compliance design",
        testPointIds: ["caia-l2-m1-tp4"],
        explanation: [
          "Alternatives firms are riddled with conflicts — cross-fund investments, affiliated service providers, allocation of scarce deals, and personal trading — and Level II tests designing controls, not just spotting problems. The priority-of-transactions Standard requires that client transactions come before the personal transactions of members and before the firm's own account, so personal trades must never front-run client orders. Enforcing this requires personal-trading policies: pre-clearance of personal trades, blackout periods around client transactions, and regular reporting of personal holdings.",
          "Material conflicts must be disclosed prominently and plainly so clients can give informed consent, and firms should establish supervisory systems that monitor for and prevent recurring violations. The exam expects candidates to apply the priority-of-transactions rule to a fact pattern and to recommend the concrete compliance procedures (pre-clearance, blackout windows, disclosure, supervision) that would prevent the conflict from recurring.",
        ],
        keyRules: [
          "Client transactions take priority over personal and firm transactions.",
          "Enforce priority with pre-clearance, blackout periods, and personal-trade reporting.",
          "Disclose material conflicts prominently and supervise for recurrence.",
        ],
      },
      {
        id: "caia-l2-m1-sn4",
        title: "Applying the CAIA Member Code and designing supervisory systems",
        testPointIds: ["caia-l2-m1-tp1", "caia-l2-m1-tp4"],
        explanation: [
          "Beyond the CFA Institute Standards, CAIA members are bound by the CAIA Member Code of Conduct, which governs professional conduct and the accurate use of the designation. At Level II, application questions may ask how a member should behave in an alternatives-specific dilemma and how a firm should build a supervisory system that makes compliance the default rather than relying on individual virtue.",
          "A sound supervisory system combines clear written policies, training, monitoring, escalation paths, and consequences, and it assigns responsibility for supervision so that violations are detected and addressed. Because Level II rewards preventive design, strong answers move from the specific violation to the systemic control — an information barrier, a valuation committee, a personal-trading policy, an allocation policy — that would stop the problem from recurring across the firm.",
        ],
        keyRules: [
          "The CAIA Member Code governs conduct and accurate designation use.",
          "Supervisory systems need policies, training, monitoring, escalation, and consequences.",
          "Move from the specific violation to the systemic preventive control.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m1-p1",
        testPointIds: ["caia-l2-m1-tp1", "caia-l2-m1-tp5"],
        style: "Constructed-response essay",
        question:
          "A portfolio manager at a hedge fund learns his firm is about to place a large client buy order in a thinly traded name. He buys the stock in his personal account first, expecting the client order to push the price up. Identify the Standard(s) violated and recommend a resolution and a preventive policy (answer in structured form).",
        answerPlan: [
          "Identify the Standard.",
          "State the breach.",
          "Recommend the remedy and a preventive policy.",
        ],
        modelAnswer:
          "Standard: Priority of Transactions (and the duty of loyalty to clients) is violated because the manager placed his personal trade ahead of a known client order, front-running the client. Breach: by buying personally before the client's order, he put his own interest ahead of the client's and exploited knowledge of the pending order, benefiting from the price impact the client's trade would create. Remedy: he should not trade personally ahead of client orders; the personal trade should be reversed or disgorged, and the incident reported and disciplined. Preventive policy: implement a personal-trading policy with mandatory pre-clearance, blackout periods around client transactions, and holding-period and reporting requirements, plus supervision to detect front-running. This structure — Standard, breach, remedy, preventive policy — captures the available partial credit.",
        markingGuide: [
          "Cites Priority of Transactions / duty of loyalty.",
          "States the front-running breach clearly.",
          "Recommends a remedy and a preventive personal-trading policy.",
        ],
      },
      {
        id: "caia-l2-m1-p2",
        testPointIds: ["caia-l2-m1-tp3"],
        style: "Constructed-response essay",
        question:
          "An analyst on an expert-network call receives, from a consultant employed by a public company, the company's exact unannounced quarterly earnings. Explain what the analyst and firm must do, and what ongoing policy should be in place.",
        answerPlan: [
          "Classify the information.",
          "State the required action.",
          "Recommend the ongoing policy.",
        ],
        modelAnswer:
          "The exact unannounced quarterly earnings are material and non-public, so this is MNPI, and trading on it or tipping others would violate the Standard on Material Non-Public Information. The analyst must not trade or cause trading in the company's securities and must report the receipt of MNPI to compliance; the firm should place the security on a restricted list until the information is public. Ongoing policy: the firm should maintain information barriers, vet and monitor expert-network usage (prohibiting consultants from disclosing employer confidential data), require pre-clearance, and keep restricted/watch lists, so that legitimate research does not become a channel for MNPI.",
        markingGuide: [
          "Classifies the earnings figure as MNPI.",
          "States the analyst must not trade/tip and must notify compliance (restrict the security).",
          "Recommends information barriers and expert-network controls as ongoing policy.",
        ],
      },
      {
        id: "caia-l2-m1-p3",
        testPointIds: ["caia-l2-m1-tp2"],
        style: "Constructed-response essay",
        question:
          "A private-credit GP marks several illiquid loans above recent comparable transaction levels shortly before a fundraising, boosting the reported track record. As an LP's due-diligence lead, identify the ethics concerns and the controls you would require.",
        answerPlan: [
          "Identify the valuation/performance concern.",
          "Identify the Standards implicated.",
          "Require the controls.",
        ],
        modelAnswer:
          "The concern is a self-serving valuation: marking illiquid loans above comparable transactions before a fundraise inflates the track record and could mislead prospective investors, implicating the duties of loyalty and fair dealing and the prohibition on misrepresentation (performance presentation must be fair and not misleading). As the LP's due-diligence lead, I would require independent third-party valuation and an independent administrator, a documented valuation policy overseen by a valuation committee, GIPS-style fair performance presentation, and an audit by a reputable independent auditor. Absent these controls confirming the marks reflect fair value, the reported track record cannot be relied upon and the allocation should be reconsidered.",
        markingGuide: [
          "Identifies the self-serving valuation and misleading performance concern.",
          "Cites loyalty/fair dealing/misrepresentation.",
          "Requires independent valuation, administrator, and audit controls.",
        ],
      },
    ],
  }),

  "caia-l2-m2": examDepth({
    testPoints: [
      {
        id: "caia-l2-m2-tp1",
        title: "Asset-owner types and their distinct objectives",
        priority: "critical",
        examinerFocus:
          "Distinguishing the objectives and constraints of pensions (DB/DC), endowments/foundations, sovereign wealth funds, insurers, and family offices, and how these drive alternatives allocation.",
        typicalQuestionForms: [
          "Which asset owner is most constrained by liability matching?",
          "Why can an endowment tolerate more illiquidity than an insurer?",
        ],
        mustKnow: [
          "DB pensions and insurers are liability-driven; endowments/SWFs have long horizons and higher illiquidity tolerance.",
          "Objectives, time horizon, liquidity needs, and regulatory/tax constraints differ by owner type.",
          "These differences determine appropriate alternatives exposure.",
        ],
        scoringActions: [
          "Match the owner type to its objective and liquidity tolerance.",
          "Tie liability-driven owners to matching constraints, long-horizon owners to illiquidity capacity.",
        ],
      },
      {
        id: "caia-l2-m2-tp2",
        title: "The endowment model and its assumptions",
        priority: "high",
        examinerFocus:
          "The endowment model's heavy use of illiquid alternatives to harvest illiquidity premia, its reliance on a long horizon and stable spending, and its vulnerabilities (liquidity crises, denominator effect).",
        typicalQuestionForms: [
          "What assumption underpins the endowment model's illiquidity tilt?",
          "What is the denominator effect and why is it dangerous?",
        ],
        mustKnow: [
          "The endowment model tilts heavily to illiquid alternatives to earn illiquidity premia.",
          "It assumes a long horizon and stable, predictable spending needs.",
          "The denominator effect: falling public markets raise the private-asset share, forcing rebalancing pressure and liquidity strain.",
        ],
        scoringActions: [
          "Tie the endowment model to long-horizon illiquidity harvesting.",
          "Explain the denominator effect as a liquidity/rebalancing risk in downturns.",
        ],
      },
      {
        id: "caia-l2-m2-tp3",
        title: "Liability-driven investing and asset-liability management",
        priority: "high",
        examinerFocus:
          "How liability-driven investors (DB pensions, insurers) match assets to liabilities, and where alternatives fit (cash-flow matching, inflation hedging) versus where illiquidity constrains them.",
        typicalQuestionForms: [
          "How do alternatives fit a liability-driven investor's portfolio?",
          "Why must an insurer limit illiquid alternatives?",
        ],
        mustKnow: [
          "Liability-driven investors match asset cash flows and duration to liabilities.",
          "Some alternatives (infrastructure, private credit, real estate) provide long-dated, inflation-linked cash flows that fit liabilities.",
          "Illiquidity and capital/regulatory charges constrain liability-driven investors' alternatives use.",
        ],
        scoringActions: [
          "Match liability characteristics to alternatives with fitting cash flows.",
          "Constrain illiquid allocations by liquidity and regulatory capital needs.",
        ],
      },
      {
        id: "caia-l2-m2-tp4",
        title: "Setting return objectives and risk tolerance",
        priority: "high",
        examinerFocus:
          "Translating an asset owner's spending/liability needs into required returns and risk tolerance, and how those shape the strategic role of alternatives.",
        typicalQuestionForms: [
          "How does a required spending rate translate into a return objective?",
          "How do liquidity needs constrain risk-taking?",
        ],
        mustKnow: [
          "Required return links to spending/liability growth plus inflation and costs.",
          "Risk tolerance combines the ability (horizon, liquidity) and willingness to bear risk.",
          "Liquidity needs cap the feasible illiquid allocation regardless of return appetite.",
        ],
        scoringActions: [
          "Derive the return objective from spending/liabilities, inflation, and costs.",
          "Cap illiquid exposure by liquidity ability, not just return desire.",
        ],
      },
      {
        id: "caia-l2-m2-tp5",
        title: "Governance and the investment policy statement",
        priority: "medium",
        examinerFocus:
          "The role of governance and the IPS in defining objectives, constraints, roles, and the alternatives program's scope, and how governance capacity limits complexity.",
        typicalQuestionForms: [
          "What should an IPS specify for an alternatives program?",
          "How does governance capacity constrain an alternatives allocation?",
        ],
        mustKnow: [
          "The IPS defines objectives, constraints, roles, and allowable investments.",
          "Governance capacity (expertise, resources, decision speed) limits program complexity.",
          "Weak governance is a reason to limit illiquid/complex alternatives.",
        ],
        scoringActions: [
          "Anchor program design to the IPS and governance capacity.",
          "Limit complexity where governance capacity is weak.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Understanding asset owners is the foundation of the allocation-focused Level II; convert the owner-type and endowment-model items and reason from objectives in essays.",
      timeBudget:
        "MCQs about 75–90 seconds; for essays, first map the owner's objectives and constraints before recommending.",
      answerSequence: [
        "Identify the owner type and its objectives/constraints.",
        "Derive the return objective and risk/liquidity tolerance.",
        "Fit alternatives to the owner's horizon and liability profile.",
        "Check governance capacity and IPS constraints.",
      ],
      qualityChecks: [
        "Did you tie liability-driven owners to matching and long-horizon owners to illiquidity capacity?",
        "Did liquidity ability cap the illiquid allocation?",
        "Did you consider governance capacity in program design?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m2-sn1",
        title: "Asset owners and how their objectives shape alternatives",
        testPointIds: ["caia-l2-m2-tp1", "caia-l2-m2-tp4"],
        explanation: [
          "The starting point for allocating to alternatives is the asset owner's objectives and constraints, which differ sharply by type. Defined-benefit pensions and insurers are liability-driven: they must meet defined future obligations, so their investing is constrained by the need to match asset cash flows and duration to liabilities and by regulatory capital charges. Endowments and foundations have long, effectively perpetual horizons and stable spending, giving them a high tolerance for illiquidity. Sovereign wealth funds vary but often have long horizons and large scale; defined-contribution plans need daily-valued, liquid options; and family offices span a wide range of goals and constraints.",
          "These differences translate into return objectives and risk tolerance. A required return is derived from the owner's spending or liability growth plus inflation and costs; risk tolerance combines the ability to bear risk (driven by horizon and liquidity needs) with the willingness to do so. Critically, liquidity ability caps the feasible illiquid allocation regardless of return appetite — an owner with large near-term cash needs cannot prudently lock up capital in private funds even if the expected returns are attractive. The exam rewards reasoning from the owner's objectives to the appropriate alternatives role.",
        ],
        keyRules: [
          "Liability-driven owners (DB pensions, insurers) must match assets to liabilities.",
          "Long-horizon owners (endowments, SWFs) can tolerate more illiquidity.",
          "Required return derives from spending/liabilities; liquidity ability caps illiquid exposure.",
        ],
      },
      {
        id: "caia-l2-m2-sn2",
        title: "The endowment model and the denominator effect, worked",
        testPointIds: ["caia-l2-m2-tp2"],
        explanation: [
          "The endowment model, associated with large university endowments, tilts heavily toward illiquid alternatives — private equity, real assets, and hedge funds — to harvest illiquidity and manager-skill premia, on the assumption that a long horizon and stable spending let the institution ride out illiquidity. The model has delivered strong long-run returns for well-resourced institutions with the governance to underwrite complex managers, but it carries real vulnerabilities.",
          "The chief danger is the denominator effect during market stress. Private assets are marked infrequently and lag public markets, so when public markets fall sharply, the portfolio's total value drops while private valuations lag, mechanically raising the private-asset share above target. This forces the institution toward rebalancing and can create a liquidity crisis: it may need cash for spending and capital calls precisely when it cannot sell illiquid assets except at distressed prices. Managing this requires liquidity planning, commitment pacing, and stress testing — themes that recur in the liquidity module.",
        ],
        keyRules: [
          "The endowment model harvests illiquidity/skill premia over a long horizon.",
          "It relies on stable spending and strong governance to underwrite complexity.",
          "The denominator effect raises private-asset weights in downturns, straining liquidity.",
        ],
        workedProblem: {
          scenario:
            "An endowment has a $1,000m portfolio: $600m public equities/bonds and $400m illiquid private assets (40% target). A market crash cuts public assets by 40% while private marks lag and stay flat. The endowment must also fund $50m of spending and $60m of capital calls this year. Analyze the denominator effect and the liquidity problem, and recommend actions.",
          steps: [
            "Recompute values after the crash: public assets fall 40% from $600m to $360m; private assets stay at $400m (lagged marks).",
            "Compute the new total and private weight: total = $360m + $400m = $760m; private weight = $400m / $760m = 52.6%, up from the 40% target.",
            "Identify the denominator effect: the private-asset share jumped to ~53% not because privates rose but because the denominator (total portfolio) shrank — this is the denominator effect.",
            "Assess the liquidity strain: the endowment needs $50m spending + $60m capital calls = $110m of cash, but its liquid book has shrunk to $360m and selling would crystallise losses and further raise the private weight.",
            "Recommend actions: use liquidity planning (cash reserves, credit lines), slow new commitments (pacing), consider the secondary market for some private stakes, and avoid forced sales of illiquid assets at distressed prices; rebalancing toward target must be managed gradually.",
          ],
          conclusion:
            "The crash pushed the private-asset weight from 40% to about 53% purely through the denominator effect, while the endowment faces $110m of near-term cash needs against a shrunken liquid book. The response is liquidity management — reserves, credit lines, commitment pacing, and selective secondary sales — not forced liquidation, illustrating why the endowment model requires robust liquidity planning.",
          markingNotes: [
            "Full credit requires computing the new private weight (~53%), naming the denominator effect, and recommending liquidity-management actions.",
            "Recommending immediate forced rebalancing/sales at distressed prices is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m2-sn3",
        title: "Liability-driven investing and alternatives",
        testPointIds: ["caia-l2-m2-tp3"],
        explanation: [
          "Liability-driven investors — defined-benefit pensions and insurers — build portfolios around their liabilities, matching the cash flows and interest-rate/inflation sensitivity of assets to the obligations they must pay. Their objective is to meet those liabilities with high confidence, so risk is measured relative to the liabilities (funded status, surplus volatility) rather than in absolute terms. This liability focus both creates opportunities and imposes constraints for alternatives.",
          "On the opportunity side, certain alternatives fit liabilities well: infrastructure and long-dated private credit provide long-duration, often inflation-linked cash flows that can hedge long-dated liabilities, and real estate offers income with inflation sensitivity. On the constraint side, illiquidity is a problem when benefit payments or claims require predictable liquidity, and insurers face regulatory capital charges that penalise volatile or illiquid assets. The exam tests matching liability characteristics to suitable alternatives while limiting illiquid exposure to what the liability and regulatory profile can bear.",
        ],
        keyRules: [
          "Liability-driven investors match asset cash flows/duration to liabilities.",
          "Infrastructure, long private credit, and real estate can hedge long-dated/inflation-linked liabilities.",
          "Illiquidity and regulatory capital charges constrain their alternatives use.",
        ],
      },
      {
        id: "caia-l2-m2-sn4",
        title: "Governance, the IPS, and program capacity",
        testPointIds: ["caia-l2-m2-tp5"],
        explanation: [
          "An alternatives program is only as sound as the governance behind it. The investment policy statement (IPS) codifies the owner's objectives, constraints, risk tolerance, roles and responsibilities, allowable investments, and rebalancing and monitoring policies, giving the program discipline and accountability. For alternatives specifically, the IPS should define the strategic role, target ranges, liquidity limits, and the process for approving and monitoring managers.",
          "Governance capacity — the expertise, resources, and decision-making speed of the board and staff — is a binding constraint that the exam emphasises. Illiquid, complex alternatives require the capability to underwrite managers, negotiate terms, monitor exposures, and act decisively; institutions lacking that capacity should limit their exposure to complex strategies or use pooled/advised vehicles. The recurring lesson is that governance capacity, not just return appetite, should determine how far an institution ventures into complex alternatives.",
        ],
        keyRules: [
          "The IPS defines objectives, constraints, roles, allowable investments, and monitoring.",
          "Governance capacity (expertise, resources, speed) constrains program complexity.",
          "Limit complex/illiquid alternatives where governance is weak.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m2-p1",
        testPointIds: ["caia-l2-m2-tp1", "caia-l2-m2-tp3"],
        style: "Constructed-response essay",
        question:
          "Compare how a life insurer and a large university endowment should approach illiquid alternatives, addressing their objectives, liquidity tolerance, and which alternatives fit each.",
        answerPlan: [
          "Contrast the objectives.",
          "Contrast liquidity tolerance.",
          "Match suitable alternatives to each.",
        ],
        modelAnswer:
          "The life insurer is liability-driven: it must meet policyholder claims and is subject to regulatory capital charges, so its objective is to match asset cash flows and duration to liabilities with high confidence, and its liquidity tolerance for illiquid alternatives is limited. Suitable alternatives are those with long-dated, predictable, often inflation-linked cash flows — long private credit, infrastructure, and core real estate — held in sizes that respect liquidity and capital charges. The university endowment has an effectively perpetual horizon and stable spending, giving it high illiquidity tolerance; it can tilt heavily toward private equity, venture, real assets, and hedge funds to harvest illiquidity and skill premia, provided it maintains liquidity planning to withstand the denominator effect. In short, the insurer uses liability-fitting, more liquid alternatives constrained by capital rules, while the endowment can pursue a broader, more illiquid program supported by its long horizon.",
        markingGuide: [
          "Identifies the insurer as liability-driven with limited illiquidity tolerance and capital constraints.",
          "Identifies the endowment's long horizon and higher illiquidity tolerance.",
          "Matches suitable alternatives to each owner.",
        ],
      },
      {
        id: "caia-l2-m2-p2",
        testPointIds: ["caia-l2-m2-tp2"],
        style: "Constructed-response essay",
        question:
          "Explain the denominator effect and why it is dangerous for an institution running the endowment model during a sharp public-market decline, and recommend two measures to mitigate it.",
        answerPlan: [
          "Define the denominator effect.",
          "Explain the danger.",
          "Recommend mitigations.",
        ],
        modelAnswer:
          "The denominator effect occurs because private assets are marked infrequently and lag public markets, so when public markets fall sharply the total portfolio value (the denominator) drops while private valuations stay elevated, mechanically raising the private-asset weight above target. It is dangerous because it pushes the institution toward rebalancing and can trigger a liquidity crisis: the endowment may need cash for spending and capital calls precisely when its liquid assets have shrunk and it cannot sell illiquid holdings except at distressed prices. Two mitigating measures are: (1) maintain liquidity buffers and committed credit lines to meet spending and capital calls without forced sales; and (2) manage commitment pacing and use the secondary market selectively, so the private-asset weight can normalise over time rather than through fire sales.",
        markingGuide: [
          "Defines the denominator effect correctly.",
          "Explains the liquidity-crisis danger.",
          "Recommends liquidity buffers/credit lines and pacing/secondary sales.",
        ],
      },
      {
        id: "caia-l2-m2-p3",
        testPointIds: ["caia-l2-m2-tp4", "caia-l2-m2-tp5"],
        style: "Constructed-response essay",
        question:
          "A mid-sized foundation with a small staff and a required 5% spending rate wants to build a large, complex illiquid alternatives program. Assess the appropriateness given its return objective and governance capacity, and recommend a suitable approach.",
        answerPlan: [
          "Derive the return objective.",
          "Assess governance capacity.",
          "Recommend an approach.",
        ],
        modelAnswer:
          "The foundation's required return must cover its 5% spending rate plus inflation and costs, which justifies some growth-oriented and alternatives exposure to meet the target. However, governance capacity is a binding constraint: a small staff may lack the expertise and resources to underwrite, negotiate, and monitor a large, complex illiquid program, and weak governance is a recognised reason to limit complexity. A suitable approach is to size the alternatives allocation to what the foundation can prudently govern and to its liquidity needs (the 5% annual spending must be funded), and to access alternatives through pooled vehicles, funds-of-funds, or an outsourced CIO/advisor that provides the expertise and diversification the small staff cannot build in-house. The IPS should codify the objectives, liquidity limits, and roles.",
        markingGuide: [
          "Derives the return objective from the 5% spending plus inflation/costs.",
          "Identifies governance capacity as a binding constraint.",
          "Recommends sizing to governance/liquidity and using pooled/outsourced access.",
        ],
      },
    ],
  }),

  "caia-l2-m3": examDepth({
    testPoints: [
      {
        id: "caia-l2-m3-tp1",
        title: "Advanced private equity valuation and value creation",
        priority: "high",
        examinerFocus:
          "Applying valuation methods to private companies and attributing PE returns to operational improvement, leverage, and multiple change in an allocation/selection context.",
        typicalQuestionForms: [
          "Attribute a buyout's value creation to its drivers (essay).",
          "How should an LP evaluate a GP's claimed operational value-add?",
        ],
        mustKnow: [
          "Private company valuation uses comparables, DCF, and transaction multiples.",
          "Return attribution separates operational improvement, leverage, and multiple expansion.",
          "Sustainable value-add comes from operations, not just leverage or multiple timing.",
        ],
        scoringActions: [
          "Attribute buyout returns to the three drivers and judge sustainability.",
          "Credit operational value-add over leverage/multiple-driven gains.",
        ],
      },
      {
        id: "caia-l2-m3-tp2",
        title: "Commitment pacing and the private-markets cash-flow model",
        priority: "critical",
        examinerFocus:
          "Modelling capital calls, distributions, and NAV over a fund's life, and pacing commitments to reach and maintain a target private-markets allocation.",
        typicalQuestionForms: [
          "How should an LP pace commitments to reach a target NAV allocation?",
          "Why must committed capital exceed the target allocation?",
        ],
        mustKnow: [
          "Because capital is called gradually and distributions return capital, committed capital must exceed the target NAV allocation.",
          "Pacing models project calls, distributions, and NAV to plan commitments over vintages.",
          "Vintage-year diversification smooths cash flows and reduces timing risk.",
        ],
        scoringActions: [
          "Over-commit relative to the target NAV to account for un-called and returning capital.",
          "Diversify across vintage years to smooth cash flows.",
        ],
      },
      {
        id: "caia-l2-m3-tp3",
        title: "Secondaries, co-investments, and fund-of-funds",
        priority: "high",
        examinerFocus:
          "The roles of the secondary market (liquidity, J-curve mitigation), co-investments (fee reduction, concentration), and funds-of-funds (diversification, extra fees) in a private-markets program.",
        typicalQuestionForms: [
          "How does buying secondaries mitigate the J-curve?",
          "What is the trade-off of co-investing alongside a GP?",
        ],
        mustKnow: [
          "Secondaries buy existing fund stakes, often at a discount, mitigating the J-curve and blind-pool risk.",
          "Co-investments reduce fees and add exposure but concentrate risk and require capacity.",
          "Funds-of-funds diversify and provide access but add a second fee layer.",
        ],
        scoringActions: [
          "Use secondaries to mitigate the J-curve and add near-term exposure.",
          "Weigh co-investment fee savings against concentration and capacity needs.",
        ],
      },
      {
        id: "caia-l2-m3-tp4",
        title: "Advanced real assets: valuation, inflation, and structuring",
        priority: "high",
        examinerFocus:
          "Applying real-asset valuation (DCF, cap rates, cost) in allocation, the inflation-hedging properties across real-asset types, and structuring (open vs closed-end, core to opportunistic).",
        typicalQuestionForms: [
          "Rank real-asset styles from core to opportunistic by risk/return.",
          "Which real assets provide the strongest inflation linkage?",
        ],
        mustKnow: [
          "Real-asset styles run core (stable income), value-add, to opportunistic (development, high risk).",
          "Inflation linkage varies: contracted/regulated cash flows and commodities hedge inflation more directly.",
          "Open-end vehicles offer periodic liquidity; closed-end vehicles suit opportunistic strategies.",
        ],
        scoringActions: [
          "Place the strategy on the core-to-opportunistic risk spectrum.",
          "Match inflation-hedging needs to the most inflation-linked real assets.",
        ],
      },
      {
        id: "caia-l2-m3-tp5",
        title: "Benchmarking private markets (PME and vintage analysis)",
        priority: "medium",
        examinerFocus:
          "Using public-market equivalent (PME) analysis and vintage-year peer comparisons to benchmark private-market performance appropriately.",
        typicalQuestionForms: [
          "Why is a public-market equivalent (PME) used to benchmark private equity?",
          "Why compare a fund to its vintage-year peers rather than a calendar index?",
        ],
        mustKnow: [
          "PME compares private returns to a public index using the same cash-flow timing.",
          "Vintage-year peer comparison controls for market environment at inception.",
          "IRR/multiples alone can mislead without a PME or peer context.",
        ],
        scoringActions: [
          "Use PME to test whether privates beat public markets on matched cash flows.",
          "Benchmark against vintage-year peers, not a calendar index.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "This applied module is central to building a private-markets program; convert the pacing and benchmarking items and reason through value-attribution essays.",
      timeBudget:
        "MCQs about 90 seconds; pacing and PME reasoning in essays needs a clear cash-flow framework first.",
      answerSequence: [
        "For value creation, attribute to operations, leverage, and multiple change.",
        "For pacing, over-commit vs target NAV and diversify vintages.",
        "For access, weigh secondaries/co-invest/fund-of-funds trade-offs.",
        "For benchmarking, use PME and vintage peers.",
      ],
      qualityChecks: [
        "Did you credit sustainable operational value-add over leverage/multiple gains?",
        "Did you over-commit relative to the target NAV in pacing?",
        "Did you benchmark against vintage peers/PME rather than a calendar index?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m3-sn1",
        title: "Commitment pacing and the cash-flow model, worked",
        testPointIds: ["caia-l2-m3-tp2"],
        explanation: [
          "Reaching a target private-markets allocation is a cash-flow modelling problem, not a one-time purchase. Because a closed-end fund calls capital gradually over its investment period and returns capital through distributions later, an LP that simply commits an amount equal to its target allocation will never reach that target in NAV terms — much of the committed capital is un-called or already returned at any moment. LPs therefore over-commit: they commit more than the target NAV so that, across overlapping vintages, called-but-not-yet-distributed capital reaches and maintains the target.",
          "A pacing model projects annual capital calls, distributions, and resulting NAV for planned commitments, then solves for the commitment schedule that reaches and holds the target allocation. Diversifying commitments across vintage years is essential: it smooths cash flows, avoids concentrating in a single market environment, and reduces the risk of over- or under-shooting the target. The exam tests the over-commitment logic and vintage diversification as the core of program construction.",
        ],
        keyRules: [
          "Committed capital must exceed the target NAV because capital is called gradually and returned over time.",
          "Pacing models project calls, distributions, and NAV to set commitments.",
          "Diversify across vintage years to smooth cash flows and reduce timing risk.",
        ],
        workedProblem: {
          scenario:
            "A $2,000m plan wants a 20% ($400m) private-equity NAV allocation. Historically, only about 60% of committed capital is invested as NAV at steady state (the rest is un-called or already distributed). The plan currently has $0 in PE. Estimate the total commitments needed at steady state, explain why a single large commitment is unwise, and describe the pacing approach.",
          steps: [
            "Set the target NAV: 20% of $2,000m = $400m of desired PE NAV.",
            "Adjust for the invested ratio: if only ~60% of commitments show up as NAV at steady state, required commitments = target NAV / 0.60 = $400m / 0.60 ≈ $667m of total outstanding commitments.",
            "Recognise the over-commitment: the plan must commit about $667m — more than the $400m target — because much committed capital is un-called or already returned at any time.",
            "Explain why a single commitment is unwise: committing $667m in one vintage concentrates exposure in one market environment and creates a lumpy J-curve and cash-flow profile.",
            "Describe pacing: commit in tranches across several vintage years (e.g., roughly $130m–$170m per year for several years), building overlapping funds so calls and distributions net out toward a stable $400m NAV.",
          ],
          conclusion:
            "To hold a $400m PE NAV when only ~60% of commitments are invested at steady state, the plan needs roughly $667m of total commitments — an over-commitment relative to the target. It should reach that level by pacing commitments across multiple vintage years rather than in one lump, smoothing cash flows and diversifying the vintage exposure.",
          markingNotes: [
            "Full credit requires grossing up the target NAV by the invested ratio (~$667m) and describing vintage-diversified pacing.",
            "Committing only $400m (equal to the target NAV) is the classic error — it under-shoots the allocation.",
          ],
        },
      },
      {
        id: "caia-l2-m3-sn2",
        title: "Value creation and attribution in buyouts",
        testPointIds: ["caia-l2-m3-tp1"],
        explanation: [
          "At Level II, private equity analysis focuses on where returns come from and whether they are repeatable. A buyout's value creation decomposes into operational improvement (revenue growth and margin expansion that grow EBITDA), leverage (debt paydown transferring enterprise value to equity), and multiple expansion (exiting at a higher multiple than entry). For an LP selecting or evaluating a GP, the crucial judgement is which driver dominated: operational improvement reflects a repeatable capability, while returns driven mainly by leverage or by buying low and selling high on multiples are more dependent on market conditions and financing and are less likely to persist.",
          "Valuation of the underlying companies uses comparables, transaction multiples, and DCF, and LPs should scrutinise the assumptions behind GP-reported valuations. The exam tests attributing value creation to its drivers and judging the sustainability of a GP's edge — a GP that consistently creates operational value has a more durable advantage than one that relied on cheap debt or rising multiples.",
        ],
        keyRules: [
          "Buyout value creation = operational improvement + leverage + multiple expansion.",
          "Operational value-add is more repeatable than leverage/multiple-driven returns.",
          "Scrutinise GP valuation assumptions when evaluating the track record.",
        ],
      },
      {
        id: "caia-l2-m3-sn3",
        title: "Secondaries, co-investments, and funds-of-funds",
        testPointIds: ["caia-l2-m3-tp3"],
        explanation: [
          "Beyond primary fund commitments, LPs use several routes with distinct trade-offs. Secondary investments buy existing fund stakes from other LPs, often at a discount to NAV; because the underlying investments are already made and partly matured, secondaries mitigate the J-curve (less early negative return), reduce blind-pool risk (the assets are visible), and can provide near-term exposure and diversification. Co-investments invest directly alongside a GP in a specific deal, usually with reduced or no fees, improving net returns and adding capacity — but they concentrate risk in individual deals and require the LP to have the expertise and speed to underwrite them.",
          "Funds-of-funds pool LP capital to invest across many underlying funds, providing diversification, access to hard-to-reach managers, and outsourced due diligence, which suits smaller or less-resourced investors — at the cost of a second layer of fees. The exam tests matching each route to an investor's needs: secondaries and co-investments for sophisticated LPs seeking J-curve mitigation or fee savings, funds-of-funds for those needing diversification and access despite the extra fees.",
        ],
        keyRules: [
          "Secondaries mitigate the J-curve and blind-pool risk, often at a discount.",
          "Co-investments cut fees and add exposure but concentrate risk and need capacity.",
          "Funds-of-funds diversify and provide access but add a fee layer.",
        ],
      },
      {
        id: "caia-l2-m3-sn4",
        title: "Advanced real assets and private-markets benchmarking",
        testPointIds: ["caia-l2-m3-tp4", "caia-l2-m3-tp5"],
        explanation: [
          "Real-asset programs span a risk spectrum from core (stabilised, income-producing assets with modest risk) through value-add (improvement or repositioning) to opportunistic (development and high-risk strategies with equity-like return targets), and the vehicle should match: open-end funds offer periodic liquidity suited to core holdings, while closed-end funds suit opportunistic strategies with defined lives. Inflation-hedging quality varies across real assets — contracted or regulated cash flows and commodities provide more direct inflation linkage than assets whose income adjusts slowly — so the choice depends on the owner's inflation-hedging objective.",
          "Benchmarking private markets requires care because IRRs and multiples alone can mislead. The public-market equivalent (PME) compares a private fund's cash flows to what the same cash-flow timing would have earned in a public index, testing whether the illiquid investment actually beat liquid markets. Vintage-year peer comparisons control for the market environment at inception, since funds started in very different years are not comparable. The exam tests using PME and vintage peers rather than a calendar index to judge private-market performance fairly.",
        ],
        keyRules: [
          "Real-asset styles run core to opportunistic; match the vehicle (open vs closed-end) to the style.",
          "Inflation linkage is strongest for contracted/regulated cash flows and commodities.",
          "Benchmark private markets with PME and vintage-year peers, not a calendar index.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m3-p1",
        testPointIds: ["caia-l2-m3-tp2"],
        style: "Constructed-response essay",
        question:
          "A pension wants a stable 15% private-markets NAV allocation but has committed exactly 15% of assets and finds its actual NAV stuck well below target. Explain why, and describe how it should set commitments and diversify to reach and hold the target.",
        answerPlan: [
          "Diagnose the under-commitment.",
          "Explain the over-commitment principle.",
          "Describe vintage-diversified pacing.",
        ],
        modelAnswer:
          "The NAV is stuck below target because capital in closed-end funds is called gradually and returned through distributions, so at any time much of the committed 15% is un-called or already distributed — committing exactly the target amount cannot produce a 15% invested NAV. The pension must over-commit: commit more than the 15% target (grossed up by the share of commitments that is invested as NAV at steady state) so that called-but-undistributed capital reaches the target. It should reach that level by pacing commitments across multiple vintage years rather than in one lump, building overlapping funds so calls and distributions net toward a stable target NAV, while diversifying the vintage exposure to smooth cash flows and avoid concentrating in a single market environment.",
        markingGuide: [
          "Explains why committing exactly the target under-shoots the NAV.",
          "States the over-commitment principle (gross up by the invested ratio).",
          "Describes vintage-diversified pacing.",
        ],
      },
      {
        id: "caia-l2-m3-p2",
        testPointIds: ["caia-l2-m3-tp1"],
        style: "Constructed-response essay",
        question:
          "Two buyout funds report similar IRRs. Fund A's returns came mainly from operational EBITDA growth; Fund B's came mainly from leverage and exit-multiple expansion in a rising market. As an LP re-upping to one, which do you prefer and why?",
        answerPlan: [
          "Attribute each fund's returns.",
          "Assess sustainability.",
          "State the preference.",
        ],
        modelAnswer:
          "Fund A's returns came from operational EBITDA growth, which reflects a repeatable capability to improve companies and is less dependent on market conditions. Fund B's similar IRR came from leverage and multiple expansion in a rising market, which depend on cheap financing and buoyant valuations that may not persist and can reverse. Since equal IRRs mask very different sources of value, I would prefer to re-up with Fund A, because sustainable operational value-add is more likely to be repeatable across market environments, whereas Fund B's returns are more exposed to a turn in financing conditions or multiples. I would still verify Fund A's operational attribution and valuation assumptions before committing.",
        markingGuide: [
          "Attributes Fund A to operations and Fund B to leverage/multiples.",
          "Assesses operational value-add as more sustainable.",
          "Prefers Fund A with appropriate verification.",
        ],
      },
      {
        id: "caia-l2-m3-p3",
        testPointIds: ["caia-l2-m3-tp5"],
        style: "Constructed-response essay",
        question:
          "A GP markets a 22% IRR for its private equity fund and claims this proves superior skill. Explain why an LP should use a public-market equivalent (PME) and vintage-year peer analysis before accepting that claim.",
        answerPlan: [
          "Explain the limits of IRR alone.",
          "Explain PME.",
          "Explain vintage-peer comparison.",
        ],
        modelAnswer:
          "A 22% IRR in isolation does not prove skill, because it ignores what public markets returned over the same period and the market environment at the fund's inception. A public-market equivalent (PME) analysis reinvests the fund's actual cash flows in a public index with the same timing, showing whether the illiquid, higher-fee private fund actually outperformed a liquid public alternative — if the PME shows the public index would have matched or beaten it, the 22% is less impressive. Vintage-year peer comparison then ranks the fund against other funds started in the same year, controlling for the market conditions at inception, since a 22% IRR may be top-quartile in a weak vintage but below median in a strong one. Only after PME and vintage-peer context can the LP judge whether the return reflects genuine, repeatable skill.",
        markingGuide: [
          "Explains IRR alone lacks public-market and vintage context.",
          "Explains PME compares to public markets on matched cash flows.",
          "Explains vintage-peer comparison controls for the inception environment.",
        ],
      },
    ],
  }),

  "caia-l2-m4": examDepth({
    testPoints: [
      {
        id: "caia-l2-m4-tp1",
        title: "Hedge fund return drivers and factor exposures",
        priority: "critical",
        examinerFocus:
          "Decomposing hedge fund returns into traditional beta, alternative risk premia, and alpha in an allocation context, and identifying hidden factor exposures.",
        typicalQuestionForms: [
          "Decompose a hedge fund's return into its factor exposures (essay).",
          "Which factor exposure is hidden in a strategy that appears market-neutral?",
        ],
        mustKnow: [
          "Hedge fund returns often reflect alternative risk premia (value, carry, momentum, volatility) plus some beta.",
          "Apparent alpha frequently proves to be alternative beta once factors are identified.",
          "Hidden exposures (credit, liquidity, volatility) can create tail risk.",
        ],
        scoringActions: [
          "Decompose returns into beta, alternative beta, and residual alpha.",
          "Probe for hidden credit/liquidity/volatility exposures.",
        ],
      },
      {
        id: "caia-l2-m4-tp2",
        title: "Strategy tail risk and non-normal return profiles",
        priority: "high",
        examinerFocus:
          "Identifying which strategies carry negative skew and fat tails (short-volatility-like profiles) and why smooth returns can mask crash risk.",
        typicalQuestionForms: [
          "Which strategies have a short-volatility (negatively skewed) return profile?",
          "Why can a high Sharpe ratio understate a strategy's true risk?",
        ],
        mustKnow: [
          "Merger arb, some relative-value, and carry strategies carry negative skew and tail risk.",
          "Selling volatility/optionality produces steady gains punctuated by large losses.",
          "Sharpe ratios flatter negatively skewed strategies; tail and drawdown measures are needed.",
        ],
        scoringActions: [
          "Flag short-volatility profiles as negatively skewed with tail risk.",
          "Supplement Sharpe with drawdown/tail measures for these strategies.",
        ],
      },
      {
        id: "caia-l2-m4-tp3",
        title: "Role of hedge funds in a portfolio",
        priority: "high",
        examinerFocus:
          "How different hedge fund strategies serve distinct portfolio roles — diversification, equity-risk reduction, or return enhancement — and how to combine them.",
        typicalQuestionForms: [
          "Which hedge fund strategy best diversifies equity risk?",
          "How should an allocator combine strategies to achieve a portfolio goal?",
        ],
        mustKnow: [
          "Macro and managed futures often diversify (low/negative equity correlation, crisis alpha).",
          "Equity long/short retains net equity beta; relative value/arb are more market-neutral.",
          "Combine strategies to target the portfolio's diversification or return objective.",
        ],
        scoringActions: [
          "Match the strategy to the portfolio role (diversify vs enhance).",
          "Tie crisis alpha and low correlation to macro/managed futures.",
        ],
      },
      {
        id: "caia-l2-m4-tp4",
        title: "Replication, liquid alternatives, and fees",
        priority: "medium",
        examinerFocus:
          "Whether hedge fund returns can be replicated with factors/liquid instruments, the trade-offs of liquid alternatives, and evaluating fees against delivered alpha.",
        typicalQuestionForms: [
          "When is factor replication a reasonable substitute for a hedge fund?",
          "What are the trade-offs of liquid alternative funds?",
        ],
        mustKnow: [
          "Alternative-beta strategies can often be replicated cheaply with liquid factors.",
          "Liquid alternatives offer daily liquidity and lower fees but may sacrifice some return/illiquidity premia.",
          "Fees should be judged against genuine alpha delivered, not gross returns.",
        ],
        scoringActions: [
          "Replicate replicable alternative beta cheaply; pay alpha fees only for genuine alpha.",
          "Weigh liquid-alt liquidity/fee benefits against lost premia.",
        ],
      },
      {
        id: "caia-l2-m4-tp5",
        title: "Hedge fund risk management and leverage",
        priority: "high",
        examinerFocus:
          "How leverage, financing, and liquidity risk interact in hedge funds, and how funding runs and margin calls can force deleveraging.",
        typicalQuestionForms: [
          "How can leverage and funding risk force a hedge fund to deleverage?",
          "Why is liquidity risk critical for a levered relative-value fund?",
        ],
        mustKnow: [
          "Leverage magnifies returns and losses and depends on stable financing.",
          "Margin calls and financing withdrawal can force selling into falling markets.",
          "Liquidity mismatches (illiquid assets, liquid redemptions) create runs.",
        ],
        scoringActions: [
          "Trace how margin calls/financing loss force deleveraging.",
          "Flag asset-liability liquidity mismatches as run risk.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Applied hedge fund analysis is about integrating strategies into a portfolio; convert the return-decomposition and portfolio-role items and reason about tail risk in essays.",
      timeBudget:
        "MCQs about 90 seconds; return-decomposition essays need a clear factor framework.",
      answerSequence: [
        "Decompose returns into beta, alternative beta, and alpha.",
        "Identify tail risk and non-normal profiles.",
        "Match the strategy to its portfolio role.",
        "Weigh replication/fees and leverage/liquidity risk.",
      ],
      qualityChecks: [
        "Did you separate replicable alternative beta from genuine alpha?",
        "Did you flag negatively skewed strategies' tail risk?",
        "Did you trace leverage/funding to forced deleveraging?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m4-sn1",
        title: "Return decomposition and hidden exposures, worked",
        testPointIds: ["caia-l2-m4-tp1", "caia-l2-m4-tp2"],
        explanation: [
          "At Level II, hedge fund analysis is about understanding what really drives returns so they can be allocated to intelligently. A factor decomposition separates returns into traditional market beta, alternative risk premia (value, carry, momentum, volatility selling), and a residual that is the candidate for genuine alpha. This matters for both fee justification and risk: much of what is marketed as alpha is alternative beta that can be obtained more cheaply, and returns that appear market-neutral may hide exposures to credit, liquidity, or volatility that only manifest in stress.",
          "Those hidden exposures are the source of tail risk. Strategies that effectively sell volatility or optionality — merger arbitrage, some relative value, and carry trades — produce steady, smooth returns most of the time but suffer large losses when the tail event occurs, giving them negative skew and fat tails. A high Sharpe ratio can flatter such strategies because it does not capture the crash risk, so allocators must supplement it with drawdown and tail-risk analysis and understand the conditions under which the strategy loses.",
        ],
        keyRules: [
          "Decompose returns into beta, alternative beta, and residual alpha.",
          "Apparent market-neutrality can hide credit/liquidity/volatility exposures.",
          "Short-volatility-like strategies are negatively skewed with tail risk that Sharpe understates.",
        ],
        workedProblem: {
          scenario:
            "A relative-value fund shows a 0.9% average monthly return with very low volatility and a high Sharpe ratio; factor analysis shows exposure to a carry/illiquidity premium, and in the last liquidity crisis it lost 25% in one month. An allocator is deciding how to treat it. Analyze the return drivers, the risk profile, and how to allocate.",
          steps: [
            "Decompose the returns: the steady monthly gains are largely explained by a carry/illiquidity premium — alternative beta — rather than pure skill/alpha.",
            "Characterise the profile: steady small gains punctuated by a 25% one-month loss is a negatively skewed, fat-tailed (short-volatility-like) profile.",
            "Assess the Sharpe ratio: the high Sharpe reflects the smooth normal-times returns and understates the crash risk revealed by the 25% loss.",
            "Draw the fee implication: since much of the return is replicable alternative beta, paying full alpha fees is not justified for that portion.",
            "Decide the allocation: size the position for the tail (stress-test the 25% loss), avoid over-relying on the Sharpe ratio, use tail/drawdown measures, and treat it as a source of alternative-beta return with crash risk, not diversifying alpha.",
          ],
          conclusion:
            "The fund's smooth returns are mainly a carry/illiquidity risk premium (alternative beta) with a negatively skewed, fat-tailed profile that the high Sharpe ratio disguises, as the 25% crisis loss shows. The allocator should size the position for its tail risk, use drawdown/tail measures rather than the Sharpe ratio alone, and not pay alpha fees for replicable alternative beta.",
          markingNotes: [
            "Full credit requires identifying the return as alternative beta, the profile as negatively skewed/tail-risky, and the Sharpe as misleading.",
            "Being persuaded by the high Sharpe and low volatility is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m4-sn2",
        title: "Portfolio roles and combining strategies",
        testPointIds: ["caia-l2-m4-tp3"],
        explanation: [
          "Different hedge fund strategies play different roles, and allocators choose and combine them to serve the total portfolio. Macro and managed-futures strategies typically have low or negative correlation to equities and can deliver crisis alpha (gains when equities fall), making them valuable diversifiers. Equity long/short retains meaningful net equity beta, so it enhances or modifies equity exposure rather than diversifying it. Relative-value and arbitrage strategies aim to be more market-neutral, seeking returns uncorrelated with market direction but often carrying the tail risk discussed above.",
          "The allocation decision starts from the portfolio's need: to reduce equity risk and add crisis protection, macro/managed futures fit; to enhance returns with active equity exposure, long/short fits; to add uncorrelated return, market-neutral relative value fits. Combining complementary strategies can improve the total portfolio's risk-adjusted return, but only if the allocator understands each strategy's true exposures and tail risks rather than treating hedge funds as a homogeneous block.",
        ],
        keyRules: [
          "Macro/managed futures diversify (low/negative equity correlation, crisis alpha).",
          "Equity long/short retains net equity beta; relative value seeks market neutrality.",
          "Choose and combine strategies to serve the total-portfolio objective.",
        ],
      },
      {
        id: "caia-l2-m4-sn3",
        title: "Replication, liquid alternatives, and fees",
        testPointIds: ["caia-l2-m4-tp4"],
        explanation: [
          "Because much of hedge fund return is alternative beta, a large part can often be replicated with liquid, rules-based factor strategies at far lower cost. This creates a discipline for allocators: pay high, performance-based fees only for genuine, hard-to-replicate alpha, and access replicable premia (value, carry, momentum, trend) through cheaper vehicles. Liquid alternative funds package alternative strategies in daily-liquid, lower-fee, regulated wrappers, offering accessibility and liquidity — but they may sacrifice some return, forgo the illiquidity premium, and face constraints that limit the strategy relative to a private hedge fund.",
          "The fee analysis should always compare fees to the alpha actually delivered, not to gross returns. A fund charging alpha fees for what is really alternative beta is overpriced; a fund delivering genuine, persistent alpha may justify its fees. The exam tests judging when replication or liquid alternatives are reasonable substitutes and evaluating fees against delivered alpha.",
        ],
        keyRules: [
          "Replicable alternative beta can be obtained cheaply; reserve alpha fees for genuine alpha.",
          "Liquid alternatives trade some return/illiquidity premium for liquidity and lower fees.",
          "Judge fees against delivered alpha, not gross returns.",
        ],
      },
      {
        id: "caia-l2-m4-sn4",
        title: "Leverage, financing, and liquidity risk",
        testPointIds: ["caia-l2-m4-tp5"],
        explanation: [
          "Hedge fund risk management centres on the interaction of leverage, financing, and liquidity. Leverage magnifies both returns and losses and depends on continued access to financing from prime brokers and counterparties; if that financing is withdrawn or margin requirements rise, the fund can be forced to sell assets — often into a falling market — crystallising losses and driving prices down further. Levered relative-value strategies are especially exposed because their small spreads require leverage, so a modest adverse move plus a margin call can compound rapidly.",
          "Liquidity mismatches amplify the danger: a fund holding illiquid assets while offering liquid redemption terms faces a run risk, where redemptions and margin calls demand cash the fund cannot raise without fire sales. This is why liquidity provisions (gates, lock-ups, side pockets) and careful matching of asset and liability liquidity matter, and why the 2008 and other crises featured forced deleveraging spirals. The exam tests tracing how leverage and funding stress force deleveraging and how liquidity mismatches create runs.",
        ],
        keyRules: [
          "Leverage magnifies losses and depends on stable financing.",
          "Margin calls/financing withdrawal can force selling into falling markets.",
          "Asset-liability liquidity mismatches create run risk.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m4-p1",
        testPointIds: ["caia-l2-m4-tp1", "caia-l2-m4-tp4"],
        style: "Constructed-response essay",
        question:
          "A fund charging 2-and-20 shows returns that a factor model explains almost entirely by exposure to value and momentum premia, with negligible residual. Evaluate whether the fund's fees are justified and what an allocator should do.",
        answerPlan: [
          "Decompose the returns.",
          "Assess the fee justification.",
          "Recommend the action.",
        ],
        modelAnswer:
          "The factor model shows the fund's returns come almost entirely from value and momentum premia — alternative beta — with negligible residual alpha, meaning the manager is delivering replicable factor exposure rather than genuine skill. Charging 2-and-20 for what is essentially alternative beta is not justified, because those premia can be obtained far more cheaply through liquid, rules-based factor strategies. The allocator should either negotiate much lower fees, or replace the fund with a cheaper factor/liquid-alternative implementation that captures the same value and momentum exposure, reserving high performance fees only for managers who deliver genuine, hard-to-replicate alpha.",
        markingGuide: [
          "Identifies the returns as alternative beta (value/momentum) with no alpha.",
          "Concludes 2-and-20 is not justified for replicable beta.",
          "Recommends fee negotiation or cheaper factor/liquid-alt replacement.",
        ],
      },
      {
        id: "caia-l2-m4-p2",
        testPointIds: ["caia-l2-m4-tp3"],
        style: "Constructed-response essay",
        question:
          "An equity-heavy plan wants to add hedge funds specifically to reduce drawdowns in equity bear markets. Recommend which strategy type best fits this goal and which would not, with reasoning.",
        answerPlan: [
          "State the goal.",
          "Recommend the fitting strategy.",
          "Reject the poor fit.",
        ],
        modelAnswer:
          "The goal is diversification and drawdown reduction during equity bear markets. Macro and managed-futures (trend-following) strategies best fit this goal because they typically have low or negative correlation to equities and can deliver crisis alpha — gains when equities fall — as trend-followers profit from sustained downward moves. Equity long/short is a poor fit for this specific goal because it retains meaningful net long equity beta, so it tends to fall with equities in a bear market rather than offsetting the drawdown. The plan should allocate to macro/managed futures for the drawdown-reduction objective, while recognising these strategies can lag in strong equity bull markets.",
        markingGuide: [
          "Recommends macro/managed futures for crisis alpha/low correlation.",
          "Rejects equity long/short due to retained equity beta.",
          "Notes the trade-off (lagging in bull markets).",
        ],
      },
      {
        id: "caia-l2-m4-p3",
        testPointIds: ["caia-l2-m4-tp5"],
        style: "Constructed-response essay",
        question:
          "A highly levered relative-value fund holds illiquid positions but offers investors quarterly liquidity. During a market shock, spreads widen and prime brokers raise margin requirements. Explain the chain of events that could threaten the fund and what structural features would mitigate it.",
        answerPlan: [
          "Trace the leverage/margin chain.",
          "Explain the liquidity mismatch.",
          "Recommend mitigating features.",
        ],
        modelAnswer:
          "When spreads widen, the levered positions lose value, and as prime brokers raise margin requirements the fund must post more collateral; to meet the margin calls it may be forced to sell positions into a falling, illiquid market, crystallising losses and potentially widening spreads further in a self-reinforcing deleveraging spiral. Compounding this, the fund holds illiquid assets but offers quarterly liquidity, so investor redemptions during the shock demand cash the fund cannot raise without fire sales — a run risk from the asset-liability liquidity mismatch. Mitigating structural features include lower leverage, diversified and committed financing, gates and longer lock-ups or notice periods that align redemption terms with the assets' liquidity, side pockets for the most illiquid positions, and liquidity buffers to meet margin calls without forced selling.",
        markingGuide: [
          "Traces spread widening, margin calls, and forced deleveraging.",
          "Explains the illiquid-asset/liquid-redemption mismatch (run risk).",
          "Recommends lower leverage, aligned liquidity terms, and buffers.",
        ],
      },
    ],
  }),

  "caia-l2-m5": examDepth({
    testPoints: [
      {
        id: "caia-l2-m5-tp1",
        title: "Structured credit in a portfolio: risk/return roles",
        priority: "high",
        examinerFocus:
          "How different structured-credit tranches serve distinct roles (senior for yield/quality, mezzanine/equity for higher return/risk) in an allocation, and their correlation behaviour.",
        typicalQuestionForms: [
          "Which tranche suits an investor seeking yield with high credit quality?",
          "How does the equity tranche behave relative to the underlying pool?",
        ],
        mustKnow: [
          "Senior tranches offer yield with high credit quality and low expected loss; equity tranches offer high return with first-loss risk.",
          "Equity tranches are leveraged bets on the pool's default and correlation experience.",
          "Tranche correlation to markets rises in stress as diversification assumptions fail.",
        ],
        scoringActions: [
          "Match the tranche to the investor's risk/return role.",
          "Treat the equity tranche as a leveraged, correlation-sensitive position.",
        ],
      },
      {
        id: "caia-l2-m5-tp2",
        title: "Correlation risk and tranche sensitivity",
        priority: "critical",
        examinerFocus:
          "How default correlation drives the value and risk of tranches — higher correlation hurts senior tranches and can help equity tranches — and why correlation assumptions are the key model risk.",
        typicalQuestionForms: [
          "How does rising default correlation affect senior versus equity tranches?",
          "Why is correlation the critical assumption in structured-credit valuation?",
        ],
        mustKnow: [
          "Higher default correlation increases the chance of large clustered losses, hurting senior tranches.",
          "Equity tranches can benefit from higher correlation in some cases (fewer moderate-loss scenarios).",
          "Correlation is the key, hard-to-estimate assumption and the main model risk.",
        ],
        scoringActions: [
          "Reason correlation's opposite effects on senior vs equity tranches.",
          "Flag correlation estimation as the central model risk.",
        ],
      },
      {
        id: "caia-l2-m5-tp3",
        title: "CLO structure, tests, and manager behaviour",
        priority: "high",
        examinerFocus:
          "How CLO coverage tests (OC/IC), reinvestment periods, and manager incentives affect cash flows to tranches, especially in stress.",
        typicalQuestionForms: [
          "What happens to cash flows when a CLO fails an overcollateralisation test?",
          "How do manager incentives affect CLO equity and debt holders?",
        ],
        mustKnow: [
          "Failing OC/IC tests diverts cash from junior/equity tranches to pay down senior tranches.",
          "During the reinvestment period the manager trades the collateral within rules.",
          "Manager incentives (equity ownership, fees) can conflict across the capital structure.",
        ],
        scoringActions: [
          "Trace cash diversion to senior tranches when coverage tests fail.",
          "Assess manager incentive alignment across tranches.",
        ],
      },
      {
        id: "caia-l2-m5-tp4",
        title: "Credit derivatives and synthetic structures",
        priority: "medium",
        examinerFocus:
          "How credit default swaps and synthetic CDOs transfer credit risk, and the counterparty and basis risks they introduce.",
        typicalQuestionForms: [
          "How does a credit default swap transfer credit risk?",
          "What risk does a synthetic structure add versus a cash structure?",
        ],
        mustKnow: [
          "A CDS transfers default risk from protection buyer to seller for a premium.",
          "Synthetic CDOs use CDS to gain exposure without owning the underlying assets.",
          "Synthetic structures add counterparty and basis risk.",
        ],
        scoringActions: [
          "Explain CDS risk transfer and the premium.",
          "Flag counterparty/basis risk in synthetic structures.",
        ],
      },
      {
        id: "caia-l2-m5-tp5",
        title: "Structured-credit due diligence and stress testing",
        priority: "high",
        examinerFocus:
          "Applying scenario/stress analysis (defaults, recoveries, correlation, prepayments) to structured credit and evaluating manager, servicer, and structural protections.",
        typicalQuestionForms: [
          "What scenarios should be stress-tested for a structured-credit investment?",
          "Why is the servicer/manager quality critical to structured-credit outcomes?",
        ],
        mustKnow: [
          "Stress-test default rates, recoveries, correlation, and prepayment assumptions.",
          "Servicer/manager quality drives collateral performance and workouts.",
          "Evaluate structural protections (subordination, tests, triggers) under stress.",
        ],
        scoringActions: [
          "Stress the key assumptions (default, recovery, correlation, prepayment).",
          "Assess servicer/manager quality and structural protections.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Applied structured-credit analysis centres on correlation and structure under stress; convert the correlation-sensitivity and CLO-test items and reason through stress scenarios in essays.",
      timeBudget:
        "MCQs about 90 seconds; stress-scenario essays need a clear assumption framework.",
      answerSequence: [
        "Match the tranche to its portfolio role and risk.",
        "Reason correlation's effect on senior vs equity tranches.",
        "Trace coverage-test cash diversion.",
        "Stress-test defaults, recoveries, correlation, and prepayments.",
      ],
      qualityChecks: [
        "Did you treat correlation as the central model risk?",
        "Did failing coverage tests divert cash to senior tranches?",
        "Did you stress the key assumptions and assess the manager/servicer?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m5-sn1",
        title: "Correlation and tranche sensitivity, worked",
        testPointIds: ["caia-l2-m5-tp1", "caia-l2-m5-tp2"],
        explanation: [
          "Structured-credit analysis at Level II centres on correlation, because it drives how losses distribute across tranches. In a pool, the senior tranche is safe as long as losses stay diversified and modest; higher default correlation raises the probability of many defaults clustering together, which produces the large loss scenarios that breach the senior tranche's subordination — so higher correlation hurts senior tranches. The equity (first-loss) tranche has the opposite sensitivity in part: it is nearly always hit by moderate losses, but higher correlation increases the chance of the extreme outcomes at both ends (very few or very many defaults), which can, in some cases, benefit the equity tranche relative to low-correlation scenarios where moderate losses reliably wipe it out.",
          "Because correlation is difficult to estimate and unstable — it tends to spike in systemic stress just when senior tranches are counting on diversification — it is the central model risk in structured credit, and the 2008 crisis was fundamentally a correlation-assumption failure. Allocators must treat correlation as an assumption to stress, not a fixed input, and understand that a tranche's rating and price embed a correlation view that may not hold.",
        ],
        keyRules: [
          "Higher default correlation hurts senior tranches (clustered losses breach subordination).",
          "Equity tranches have opposite/complex correlation sensitivity.",
          "Correlation is the key, unstable model-risk assumption in structured credit.",
        ],
        workedProblem: {
          scenario:
            "An allocator considers the senior tranche of a corporate CLO, rated highly on the assumption of low default correlation among the leveraged loans. A colleague argues the senior tranche is 'basically risk-free.' Explain how a rise in default correlation during a recession would affect the senior tranche and why the 'risk-free' view is dangerous, using loss reasoning.",
          steps: [
            "State the senior-tranche protection: the senior tranche is protected by the subordination beneath it, sized to absorb the diversified losses expected under the assumed low correlation.",
            "Introduce the correlation shift: in a recession, leveraged-loan defaults become correlated (common economic driver), so defaults cluster rather than occurring independently.",
            "Reason the loss distribution: clustered defaults produce fat-tailed, large aggregate losses far above the diversified expectation the subordination was sized for.",
            "Assess the senior tranche: if clustered losses exceed the subordination cushion, the senior tranche takes losses despite its high rating — exactly the 2008 pattern.",
            "Refute the 'risk-free' claim: the rating and safety depend entirely on the low-correlation assumption; when correlation rises in stress, that assumption fails and the senior tranche is not risk-free.",
          ],
          conclusion:
            "A rise in default correlation during a recession clusters losses and can push aggregate losses beyond the subordination protecting the senior tranche, causing losses on a highly rated position. The 'risk-free' view is dangerous because the senior tranche's safety rests on the low-correlation assumption, which is precisely what breaks down in systemic stress — the central lesson of 2008.",
          markingNotes: [
            "Full credit requires linking rising correlation to clustered losses that can breach the senior tranche's subordination.",
            "Accepting the 'risk-free' claim because of the high rating is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m5-sn2",
        title: "CLO structure, coverage tests, and manager behaviour",
        testPointIds: ["caia-l2-m5-tp3"],
        explanation: [
          "A CLO is an actively managed structured vehicle backed by a pool of leveraged loans, with tranches from senior debt down to the equity. Its structural protections centre on coverage tests: overcollateralisation (OC) tests check that collateral value sufficiently exceeds the tranche's par, and interest-coverage (IC) tests check that interest income covers obligations. If a test is breached, the structure diverts cash flows away from junior and equity tranches to pay down or protect the senior tranches until the test is cured — a powerful protection for senior holders that comes at the equity's expense in stress.",
          "During the reinvestment period, the CLO manager can trade the collateral within defined rules, and the manager's incentives — often including equity ownership and fees tied to performance — can create conflicts across the capital structure: actions that help the equity (reaching for yield) may raise risk for the debt tranches, and vice versa. The exam tests tracing cash diversion when coverage tests fail and assessing whether the manager's incentives are aligned with the tranche the investor holds.",
        ],
        keyRules: [
          "OC/IC test breaches divert cash to senior tranches, hurting equity/junior tranches.",
          "The manager trades collateral within rules during the reinvestment period.",
          "Manager incentives can conflict across the capital structure.",
        ],
      },
      {
        id: "caia-l2-m5-sn3",
        title: "Credit derivatives and synthetic structures",
        testPointIds: ["caia-l2-m5-tp4"],
        explanation: [
          "Credit derivatives let investors transfer or take on credit risk without owning the underlying bonds or loans. A credit default swap (CDS) is the building block: the protection buyer pays a periodic premium to the protection seller, who compensates the buyer if a defined credit event occurs. This transfers default risk from buyer to seller. Synthetic CDOs use portfolios of CDS to create tranched credit exposure without holding the actual assets, allowing investors to gain (or hedge) credit exposure synthetically.",
          "Synthetic structures add risks beyond those of cash structures. Counterparty risk arises because the protection depends on the seller's ability to pay, so a defaulting counterparty can leave the buyer unprotected. Basis risk arises when the CDS does not perfectly track the exposure being hedged. The exam tests explaining CDS risk transfer and flagging the counterparty and basis risks that synthetic structures introduce relative to owning the cash assets.",
        ],
        keyRules: [
          "A CDS transfers default risk from protection buyer to seller for a premium.",
          "Synthetic CDOs create tranched exposure via CDS without owning the assets.",
          "Synthetic structures add counterparty and basis risk.",
        ],
      },
      {
        id: "caia-l2-m5-sn4",
        title: "Due diligence and stress testing structured credit",
        testPointIds: ["caia-l2-m5-tp5"],
        explanation: [
          "Because a structured-credit investment's outcome depends on assumptions that can fail, due diligence emphasises stress testing. Allocators should test the sensitivity of each tranche to adverse default rates, lower recoveries, higher default correlation, and different prepayment speeds, examining how the structural protections (subordination, OC/IC tests, triggers) perform under stress and at what point the investor's tranche takes losses. A tranche that looks safe under base-case assumptions may be vulnerable once correlation and defaults rise together.",
          "Qualitative diligence matters too. For managed structures (CLOs) the manager's quality and incentives drive collateral performance and workout outcomes, and for securitisations the servicer's quality affects collections and loss mitigation. Evaluating the manager/servicer alongside the structural protections, and stressing the key assumptions rather than accepting base-case marketing, is the core of applied structured-credit due diligence the exam rewards.",
        ],
        keyRules: [
          "Stress-test default rates, recoveries, correlation, and prepayments.",
          "Evaluate how structural protections perform under stress and where the tranche takes losses.",
          "Manager/servicer quality is critical to collateral and workout outcomes.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m5-p1",
        testPointIds: ["caia-l2-m5-tp2"],
        style: "Constructed-response essay",
        question:
          "Explain how an increase in default correlation affects the senior and equity tranches of a structured-credit deal differently, and why correlation is the most important assumption an allocator should stress.",
        answerPlan: [
          "Explain the senior-tranche effect.",
          "Explain the equity-tranche effect.",
          "Explain why correlation is the key stress.",
        ],
        modelAnswer:
          "Higher default correlation increases the probability that defaults cluster, producing large aggregate losses that can exceed the subordination protecting the senior tranche — so rising correlation hurts senior tranches, which rely on diversified, moderate losses. The equity (first-loss) tranche has a more complex, partly opposite sensitivity: it is nearly always hit by moderate losses, so higher correlation, which raises the chance of extreme outcomes (very few or very many defaults), can in some scenarios benefit the equity tranche relative to a low-correlation world where moderate losses reliably wipe it out. Correlation is the most important assumption to stress because it is hard to estimate, unstable, and tends to spike in systemic stress exactly when senior tranches depend on diversification — the failure that caused highly rated tranches to suffer losses in 2008.",
        markingGuide: [
          "States rising correlation hurts senior tranches via clustered losses.",
          "Describes the equity tranche's opposite/complex sensitivity.",
          "Explains why correlation is the key, unstable assumption to stress.",
        ],
      },
      {
        id: "caia-l2-m5-p2",
        testPointIds: ["caia-l2-m5-tp3"],
        style: "Constructed-response essay",
        question:
          "A CLO experiences rising defaults and breaches its overcollateralisation test. Explain what happens to cash flows across the tranches and how this affects the equity versus senior holders.",
        answerPlan: [
          "Explain the OC-test breach.",
          "Trace the cash diversion.",
          "Contrast the effects on equity vs senior.",
        ],
        modelAnswer:
          "When rising defaults erode the collateral value enough to breach the overcollateralisation test, the CLO's structure responds by diverting cash flows that would otherwise go to the junior and equity tranches, using them instead to pay down the senior tranches until the test is cured. This protects the senior holders, whose principal is amortised and whose position is de-risked. The equity holders bear the cost: they are cut off from distributions during the breach, so their returns are sharply reduced or eliminated in stress. Thus the coverage test transfers value from equity to senior holders exactly when the collateral deteriorates, illustrating the structural protection senior investors pay for and the leverage the equity holders take on.",
        markingGuide: [
          "Explains the OC-test breach diverts cash to senior tranches.",
          "States seniors are protected/de-risked.",
          "States equity holders lose distributions in the breach.",
        ],
      },
      {
        id: "caia-l2-m5-p3",
        testPointIds: ["caia-l2-m5-tp5"],
        style: "Constructed-response essay",
        question:
          "As part of due diligence on a mezzanine structured-credit tranche, outline the key assumptions you would stress and the qualitative factors you would assess, and explain how these determine whether the tranche is a sound investment.",
        answerPlan: [
          "List the assumptions to stress.",
          "List the qualitative factors.",
          "Explain the decision link.",
        ],
        modelAnswer:
          "I would stress the key assumptions that determine tranche losses: higher default rates, lower recovery rates, higher default correlation, and adverse prepayment speeds, examining at what point the losses breach the subordination beneath the mezzanine tranche and how the structural protections (subordination, OC/IC tests, triggers) perform under each scenario. Qualitatively, I would assess the manager's quality and incentives (for a managed structure) and the servicer's quality, since they drive collateral performance and workouts, plus the alignment of the manager's incentives with mezzanine holders. Together these determine soundness: if the mezzanine tranche can withstand plausible stress (especially correlated defaults) with acceptable loss, is backed by a capable, aligned manager/servicer, and offers a spread that compensates for the residual risk, it is a sound investment; if modest stress or a correlation spike wipes it out, or the manager is misaligned, it is not.",
        markingGuide: [
          "Stresses defaults, recoveries, correlation, and prepayments.",
          "Assesses manager/servicer quality and incentive alignment.",
          "Links the stress and qualitative results to the investment decision.",
        ],
      },
    ],
  }),

  "caia-l2-m6": examDepth({
    testPoints: [
      {
        id: "caia-l2-m6-tp1",
        title: "Strategic asset allocation with alternatives",
        priority: "critical",
        examinerFocus:
          "Integrating alternatives into strategic asset allocation using expected returns, risk, and correlations, while adjusting for the data problems (smoothing, illiquidity) that distort optimiser inputs.",
        typicalQuestionForms: [
          "Why can naive mean-variance optimisation over-allocate to smoothed alternatives?",
          "How should inputs be adjusted before optimising with alternatives?",
        ],
        mustKnow: [
          "Smoothed/appraisal-based returns understate volatility and correlation, biasing optimisers toward over-allocating.",
          "Inputs should be desmoothed and stress-adjusted before optimisation.",
          "Illiquidity and non-normality must be reflected in the allocation, not just mean and variance.",
        ],
        scoringActions: [
          "Desmooth and stress-adjust inputs before optimising with alternatives.",
          "Avoid over-allocating to assets with artificially low reported volatility.",
        ],
      },
      {
        id: "caia-l2-m6-tp2",
        title: "Limitations of mean-variance optimisation for alternatives",
        priority: "high",
        examinerFocus:
          "Why mean-variance optimisation is ill-suited to non-normal, illiquid alternatives, and alternatives such as resampling, constraints, and risk-factor approaches.",
        typicalQuestionForms: [
          "Why is mean-variance optimisation problematic for alternatives?",
          "Which approaches address MVO's weaknesses with alternatives?",
        ],
        mustKnow: [
          "MVO assumes normality and stable inputs and ignores skew, kurtosis, and illiquidity.",
          "MVO is highly sensitive to input errors (error maximisation), often producing extreme allocations.",
          "Remedies: input constraints, resampling, Black-Litterman, and risk-factor allocation.",
        ],
        scoringActions: [
          "Cite MVO's normality assumption and input sensitivity as key weaknesses.",
          "Recommend constraints/resampling/factor approaches for alternatives.",
        ],
      },
      {
        id: "caia-l2-m6-tp3",
        title: "Risk-factor and risk-based allocation approaches",
        priority: "high",
        examinerFocus:
          "Allocating by underlying risk factors (equity, rates, credit, inflation, illiquidity) rather than asset-class labels, and risk-based approaches like risk parity.",
        typicalQuestionForms: [
          "Why allocate by risk factor rather than asset-class label?",
          "What does risk parity aim to achieve?",
        ],
        mustKnow: [
          "Asset-class labels hide shared risk factors; factor allocation reveals true diversification.",
          "Many alternatives load on the same factors (equity, credit) as traditional assets.",
          "Risk parity allocates so each risk contributes equally, often using leverage.",
        ],
        scoringActions: [
          "Diagnose true diversification by underlying factors, not labels.",
          "Explain risk parity as equal risk contribution (often levered).",
        ],
      },
      {
        id: "caia-l2-m6-tp4",
        title: "Incorporating illiquidity and the liquidity budget",
        priority: "high",
        examinerFocus:
          "Setting an illiquidity/liquidity budget in the allocation, sizing illiquid alternatives to the owner's liquidity needs, and the illiquidity premium trade-off.",
        typicalQuestionForms: [
          "How should an allocator set a liquidity budget for illiquid alternatives?",
          "What is the trade-off in harvesting the illiquidity premium?",
        ],
        mustKnow: [
          "The illiquid allocation should be capped by the owner's liquidity needs (a liquidity budget).",
          "Harvesting the illiquidity premium requires bearing lock-ups and denominator-effect risk.",
          "Liquidity should be stress-tested for capital calls and spending in downturns.",
        ],
        scoringActions: [
          "Cap illiquid exposure with a stress-tested liquidity budget.",
          "Weigh the illiquidity premium against liquidity and denominator-effect risk.",
        ],
      },
      {
        id: "caia-l2-m6-tp5",
        title: "Rebalancing and implementation with alternatives",
        priority: "medium",
        examinerFocus:
          "How illiquidity complicates rebalancing (you cannot readily sell privates), and using liquid sleeves, overlays, and commitment pacing to maintain the target allocation.",
        typicalQuestionForms: [
          "Why is rebalancing harder with illiquid alternatives?",
          "How can an allocator maintain target exposures despite illiquidity?",
        ],
        mustKnow: [
          "Illiquid assets cannot be sold quickly, so rebalancing must use liquid sleeves and pacing.",
          "Overlays (derivatives) can adjust exposures without trading the illiquid assets.",
          "Commitment pacing manages the private-asset weight over time.",
        ],
        scoringActions: [
          "Rebalance using liquid sleeves, overlays, and pacing, not forced private sales.",
          "Plan the private weight through commitment pacing.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Asset allocation with alternatives is the heart of Level II; convert the input-adjustment and factor/liquidity items and reason through allocation essays.",
      timeBudget:
        "MCQs about 90 seconds; allocation essays need an explicit input-adjustment and liquidity framework.",
      answerSequence: [
        "Adjust inputs (desmooth, stress) before optimising with alternatives.",
        "Prefer factor/risk-based over naive MVO for non-normal assets.",
        "Set a stress-tested liquidity budget for illiquid exposure.",
        "Implement and rebalance with liquid sleeves, overlays, and pacing.",
      ],
      qualityChecks: [
        "Did you desmooth inputs to avoid over-allocating to alternatives?",
        "Did you diagnose diversification by factor, not label?",
        "Did you cap illiquid exposure with a stress-tested liquidity budget?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m6-sn1",
        title: "Optimiser inputs, smoothing, and a worked adjustment",
        testPointIds: ["caia-l2-m6-tp1", "caia-l2-m6-tp2"],
        explanation: [
          "The central challenge in allocating to alternatives is that the inputs are unreliable. Appraisal-based and illiquid returns are smoothed, which understates their true volatility and their correlation with other assets. Fed into a naive mean-variance optimiser, these flattering inputs make alternatives look like high-return, low-risk, low-correlation assets, so the optimiser over-allocates to them — an artefact of bad data, not a genuine free lunch. Before optimising, inputs should be desmoothed to recover true volatility and correlation, and adjusted for the non-normality (skew, kurtosis) and illiquidity the raw statistics miss.",
          "Mean-variance optimisation has deeper limitations for alternatives. It assumes normally distributed returns and stable inputs, ignoring the skew, fat tails, and illiquidity that define alternatives, and it is an 'error maximiser' — highly sensitive to small input errors, it tends to produce extreme, concentrated allocations. Remedies include imposing sensible constraints, resampling the efficient frontier, using the Black-Litterman approach to blend views with equilibrium, and allocating by risk factors. The exam rewards recognising that the inputs and the optimiser both need adjustment before alternatives are added.",
        ],
        keyRules: [
          "Smoothed returns understate volatility/correlation, biasing optimisers to over-allocate.",
          "Desmooth and adjust for non-normality before optimising.",
          "MVO assumes normality and is error-maximising; use constraints/resampling/factor approaches.",
        ],
        workedProblem: {
          scenario:
            "An allocator runs a mean-variance optimisation using a private real-estate fund's reported statistics: 9% return, 6% volatility, and 0.1 correlation to equities. Desmoothing suggests the true volatility is closer to 12% and the true equity correlation closer to 0.6. Explain how the naive optimisation would misallocate and how the corrected inputs change the result.",
          steps: [
            "Interpret the reported inputs: 9% return, 6% volatility, and 0.1 equity correlation make the fund look like a high-return, low-risk, strong diversifier.",
            "Predict the naive result: the optimiser will over-allocate heavily to the private real-estate fund because its risk-adjusted, low-correlation profile dominates the frontier.",
            "Apply the desmoothed inputs: true volatility ~12% (double the reported) and true equity correlation ~0.6 (six times the reported) reveal it is riskier and far less diversifying.",
            "Predict the corrected result: with realistic volatility and correlation, the optimiser allocates much less to the fund, because its diversification benefit and risk-adjusted appeal shrink substantially.",
            "Add further caution: also account for illiquidity and non-normality (skew/kurtosis) that even the desmoothed mean-variance inputs omit, and impose constraints to avoid extreme allocations.",
          ],
          conclusion:
            "Using the reported (smoothed) statistics, the optimiser would drastically over-allocate to the private real-estate fund because it appears low-risk and uncorrelated. Correcting to the desmoothed 12% volatility and 0.6 equity correlation sharply reduces the recommended allocation, and layering in illiquidity, non-normality, and constraints reduces it further — showing why inputs must be adjusted before optimising with alternatives.",
          markingNotes: [
            "Full credit requires explaining the over-allocation from smoothed inputs and the reduction after desmoothing.",
            "Trusting the reported 6% volatility and 0.1 correlation is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m6-sn2",
        title: "Risk-factor and risk-based allocation",
        testPointIds: ["caia-l2-m6-tp3"],
        explanation: [
          "Allocating by asset-class label can create an illusion of diversification, because different labels often share the same underlying risk factors. Private equity, public equity, and equity long/short all load heavily on the equity factor; high-yield bonds, private credit, and some hedge funds load on the credit factor. A risk-factor approach decomposes each asset into its exposures to fundamental factors (equity, interest rates, credit, inflation, illiquidity) and allocates to achieve the desired factor exposures, revealing that a portfolio that looks diversified by asset class may be concentrated in a few factors.",
          "Risk-based approaches go further by allocating on risk rather than capital. Risk parity, for example, sizes positions so that each asset (or factor) contributes equally to portfolio risk, typically using leverage to raise the contribution of low-risk assets like bonds. The exam tests the insight that true diversification is about factor exposures, not labels, and that risk-based methods aim to balance risk contributions rather than dollar weights — relevant because many alternatives add factor exposures the investor may already hold.",
        ],
        keyRules: [
          "Asset-class labels can hide shared risk factors (e.g., equity, credit).",
          "Factor allocation reveals true diversification.",
          "Risk parity equalises risk contributions, often using leverage.",
        ],
      },
      {
        id: "caia-l2-m6-sn3",
        title: "Illiquidity and the liquidity budget",
        testPointIds: ["caia-l2-m6-tp4"],
        explanation: [
          "Illiquidity must be an explicit part of the allocation, not an afterthought. The illiquidity premium — the extra expected return for bearing lock-ups — is a genuine reason to hold private assets, but harvesting it requires the ability to withstand illiquidity through downturns, including the denominator effect and the need to fund capital calls and spending when liquid assets have fallen. Allocators therefore set a liquidity budget: a cap on the illiquid allocation sized to the owner's liquidity needs and stress-tested against scenarios where markets fall and cash demands rise simultaneously.",
          "The trade-off is central: more illiquid exposure means more illiquidity premium but less flexibility and more denominator-effect and forced-selling risk. The right level depends on the owner's horizon, spending, and governance (linking back to the asset-owner module). The exam tests sizing illiquid alternatives to a stress-tested liquidity budget and articulating the premium-versus-flexibility trade-off, rather than maximising the illiquidity premium blindly.",
        ],
        keyRules: [
          "Cap illiquid exposure with a liquidity budget sized to the owner's needs.",
          "Harvesting the illiquidity premium requires withstanding lock-ups and the denominator effect.",
          "Stress-test liquidity for simultaneous market falls and cash demands.",
        ],
      },
      {
        id: "caia-l2-m6-sn4",
        title: "Rebalancing and implementation with illiquid assets",
        testPointIds: ["caia-l2-m6-tp5"],
        explanation: [
          "Illiquidity complicates the mechanics of maintaining a target allocation. You cannot quickly sell private equity or real estate to rebalance, so when public assets move and weights drift, the allocator must use the liquid parts of the portfolio to restore balance, and may use derivatives overlays to adjust factor exposures synthetically without trading the illiquid assets. The private-asset weight itself is managed over time through commitment pacing rather than spot trades.",
          "This means implementation must be planned in advance: maintain a liquid sleeve for rebalancing and liquidity, use overlays to fine-tune exposures, and pace commitments so the private weight trends toward target across vintages. During stress, the allocator relies on these tools rather than forced sales of illiquid assets at distressed prices. The exam tests recognising why rebalancing is harder with alternatives and how liquid sleeves, overlays, and pacing solve it.",
        ],
        keyRules: [
          "Illiquid assets cannot be readily sold to rebalance.",
          "Use liquid sleeves and derivatives overlays to adjust exposures.",
          "Manage the private weight through commitment pacing, not forced sales.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m6-p1",
        testPointIds: ["caia-l2-m6-tp1", "caia-l2-m6-tp2"],
        style: "Constructed-response essay",
        question:
          "An allocator plans to add private real estate and private credit to a portfolio by running a mean-variance optimisation on the funds' reported returns. Explain two reasons this could produce a poor allocation and how you would adjust the process.",
        answerPlan: [
          "Explain the smoothed-input problem.",
          "Explain an MVO limitation.",
          "Describe the adjustments.",
        ],
        modelAnswer:
          "First, the reported returns of private real estate and private credit are smoothed by appraisal/stale pricing, which understates their true volatility and correlation, so a naive optimiser will treat them as low-risk, low-correlation assets and over-allocate to them — an artefact of bad data. Second, mean-variance optimisation assumes normally distributed returns and stable inputs and is an error maximiser, so it ignores these assets' skew, fat tails, and illiquidity and produces extreme, unstable allocations. To adjust, I would desmooth the inputs to recover true volatility and correlation, incorporate non-normality and illiquidity, impose sensible allocation constraints, and consider resampling or a risk-factor approach rather than relying on unconstrained MVO of raw statistics.",
        markingGuide: [
          "Explains smoothed inputs cause over-allocation.",
          "Explains an MVO limitation (normality/error maximisation).",
          "Describes desmoothing, constraints, and factor/resampling adjustments.",
        ],
      },
      {
        id: "caia-l2-m6-p2",
        testPointIds: ["caia-l2-m6-tp3"],
        style: "Constructed-response essay",
        question:
          "A board is proud that its portfolio is spread across public equity, private equity, venture capital, and equity long/short, believing it is well diversified. Critique this using a risk-factor lens.",
        answerPlan: [
          "Identify the shared factor.",
          "Explain the false diversification.",
          "Recommend the factor-based fix.",
        ],
        modelAnswer:
          "Although the portfolio spans four different asset-class labels, all of them — public equity, private equity, venture capital, and equity long/short — load heavily on the same underlying equity risk factor. So despite the appearance of diversification by label, the portfolio is concentrated in equity risk and would suffer together in an equity downturn; the different labels mostly repackage the same factor exposure (private equity and venture are essentially levered/illiquid equity). Using a risk-factor lens, the board should measure diversification by exposure to fundamental factors (equity, rates, credit, inflation, illiquidity) rather than asset-class labels, and add exposures to genuinely different factors — for example, trend/macro, rates, or inflation-linked real assets — to achieve true diversification.",
        markingGuide: [
          "Identifies the shared equity factor across the labels.",
          "Explains the diversification is illusory by factor.",
          "Recommends measuring and diversifying by factor.",
        ],
      },
      {
        id: "caia-l2-m6-p3",
        testPointIds: ["caia-l2-m6-tp4", "caia-l2-m6-tp5"],
        style: "Constructed-response essay",
        question:
          "A pension with sizeable near-term benefit payments wants to raise its illiquid alternatives allocation to capture the illiquidity premium. Explain how it should set a liquidity budget and how it would rebalance and maintain exposures given the illiquidity.",
        answerPlan: [
          "Explain the liquidity budget.",
          "Explain the premium/flexibility trade-off.",
          "Explain implementation.",
        ],
        modelAnswer:
          "The pension should cap its illiquid allocation with a liquidity budget sized to its near-term benefit payments and stress-tested against scenarios where markets fall and cash demands (benefits and capital calls) rise together, so it is never forced to sell illiquid assets at distressed prices — this is especially important given its sizeable near-term outflows. It must weigh the illiquidity premium against the loss of flexibility and the denominator-effect risk, harvesting the premium only up to what its liquidity can bear. For implementation, it should maintain a liquid sleeve for rebalancing and liquidity, use derivatives overlays to adjust factor exposures without trading the illiquid assets, and manage the private-asset weight through commitment pacing across vintages rather than through spot sales, since illiquid assets cannot be readily sold to rebalance.",
        markingGuide: [
          "Sets a stress-tested liquidity budget sized to near-term outflows.",
          "Explains the illiquidity-premium vs flexibility trade-off.",
          "Describes liquid sleeves, overlays, and pacing for implementation.",
        ],
      },
    ],
  }),

  "caia-l2-m7": examDepth({
    testPoints: [
      {
        id: "caia-l2-m7-tp1",
        title: "Risk budgeting and allocating a risk budget",
        priority: "critical",
        examinerFocus:
          "Allocating a total risk budget across strategies/managers by their marginal contribution to risk, rather than by capital, to control portfolio risk.",
        typicalQuestionForms: [
          "How does a risk budget differ from a capital budget?",
          "Which position contributes most to portfolio risk given its marginal contribution?",
        ],
        mustKnow: [
          "A risk budget allocates portfolio risk (not just capital) across positions/strategies.",
          "Marginal contribution to risk accounts for volatility and correlation, not weight alone.",
          "A small capital weight can carry a large risk contribution if volatile/correlated.",
        ],
        scoringActions: [
          "Allocate by risk contribution, not capital weight.",
          "Compute marginal contribution to risk using volatility and correlation.",
        ],
      },
      {
        id: "caia-l2-m7-tp2",
        title: "Diversification, correlation, and correlation instability",
        priority: "high",
        examinerFocus:
          "How correlations drive portfolio risk and diversification, and that correlations tend to rise in crises, undermining diversification when it is most needed.",
        typicalQuestionForms: [
          "Why can diversification fail in a crisis?",
          "How does rising correlation affect portfolio risk?",
        ],
        mustKnow: [
          "Portfolio risk depends on correlations, not just individual volatilities.",
          "Correlations tend to rise toward 1 in crises, reducing diversification benefits.",
          "Tail dependence means assets can crash together despite low normal-times correlation.",
        ],
        scoringActions: [
          "Stress correlations upward for crisis scenarios.",
          "Do not rely on normal-times correlations for tail risk.",
        ],
      },
      {
        id: "caia-l2-m7-tp3",
        title: "Tail-risk measures and management (VaR, CVaR, stress tests)",
        priority: "high",
        examinerFocus:
          "Using VaR and conditional VaR (expected shortfall), their limitations, and stress testing/scenario analysis to manage the tail risk of alternative-heavy portfolios.",
        typicalQuestionForms: [
          "What does conditional VaR capture that VaR does not?",
          "Why supplement VaR with stress tests for alternatives?",
        ],
        mustKnow: [
          "VaR estimates a loss threshold at a confidence level; CVaR (expected shortfall) is the average loss beyond VaR.",
          "VaR ignores the size of tail losses and assumes a distribution; it can understate risk.",
          "Stress tests and scenario analysis capture tail and non-normal risks VaR misses.",
        ],
        scoringActions: [
          "Prefer CVaR/stress tests over VaR alone for tail-heavy alternatives.",
          "Recognise VaR's blindness to the magnitude of extreme losses.",
        ],
      },
      {
        id: "caia-l2-m7-tp4",
        title: "Leverage, liquidity, and their risk-budget impact",
        priority: "high",
        examinerFocus:
          "How leverage and liquidity risk consume risk budget and interact, and why the risk budget must account for financing and redemption risk, not just market volatility.",
        typicalQuestionForms: [
          "How does leverage affect a strategy's risk contribution?",
          "Why must a risk budget include liquidity and funding risk?",
        ],
        mustKnow: [
          "Leverage magnifies a position's risk contribution and funding dependence.",
          "Liquidity/funding risk can force deleveraging, adding non-market risk.",
          "The risk budget must reflect leverage and liquidity, not market volatility alone.",
        ],
        scoringActions: [
          "Account for leverage and funding in each position's risk contribution.",
          "Include liquidity/redemption risk in the risk budget.",
        ],
      },
      {
        id: "caia-l2-m7-tp5",
        title: "Portfolio construction: combining managers and strategies",
        priority: "medium",
        examinerFocus:
          "Constructing a portfolio of alternative managers to target a risk/return profile, managing manager-specific and concentration risk, and sizing positions.",
        typicalQuestionForms: [
          "How should an allocator size positions across managers by risk?",
          "How is manager-specific risk controlled in construction?",
        ],
        mustKnow: [
          "Combine managers with complementary exposures to improve risk-adjusted return.",
          "Size positions by risk contribution and control concentration/manager-specific risk.",
          "Diversify across strategies, styles, and correlated exposures.",
        ],
        scoringActions: [
          "Size manager positions by risk contribution, not equal capital.",
          "Control concentration and manager-specific risk through diversification.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Portfolio construction and risk budgeting are quantitative Level II staples; convert the risk-contribution and tail-measure items and reason through construction essays.",
      timeBudget:
        "MCQs about 90 seconds; risk-contribution and CVaR reasoning in essays needs a clear framework.",
      answerSequence: [
        "Allocate by risk contribution, not capital weight.",
        "Stress correlations upward for crisis scenarios.",
        "Use CVaR and stress tests, not VaR alone, for tail risk.",
        "Account for leverage and liquidity in the risk budget.",
      ],
      qualityChecks: [
        "Did you use marginal contribution to risk (volatility and correlation), not weight?",
        "Did you stress correlations and use tail measures?",
        "Did you include leverage and liquidity risk in the budget?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m7-sn1",
        title: "Risk budgeting and marginal contribution to risk, worked",
        testPointIds: ["caia-l2-m7-tp1", "caia-l2-m7-tp2"],
        explanation: [
          "Risk budgeting reframes portfolio construction around risk rather than capital. Instead of asking how much money to put in each position, the allocator asks how much of the total portfolio risk each position should consume, then allocates capital to achieve those risk contributions. This matters because a position's risk contribution depends on its volatility and its correlation with the rest of the portfolio, not on its capital weight alone: a small allocation to a volatile, correlated strategy can dominate portfolio risk, while a larger allocation to a low-volatility, diversifying strategy may contribute little.",
          "The tool is marginal contribution to risk, which measures how much each position adds to total portfolio volatility given its own volatility and its correlations. Summing the contributions gives total risk, and the allocator adjusts weights until the risk contributions match the intended budget. A crucial caveat is that correlations are unstable and tend to rise toward one in crises (tail dependence), so a portfolio that looks well diversified in normal times can become concentrated in a crash; risk budgets should therefore be stress-tested with elevated correlations.",
        ],
        keyRules: [
          "Allocate by risk contribution, not capital weight.",
          "Risk contribution depends on volatility and correlation, not weight alone.",
          "Correlations rise in crises; stress-test the risk budget.",
        ],
        workedProblem: {
          scenario:
            "A portfolio has two strategies: Strategy A (70% of capital, 8% volatility) and Strategy B (30% of capital, 20% volatility), with a correlation of 0.3. Compute the portfolio volatility and each strategy's approximate contribution to risk, and explain why B's risk contribution exceeds its capital weight.",
          steps: [
            "Compute portfolio variance: (0.70^2 x 0.08^2) + (0.30^2 x 0.20^2) + (2 x 0.70 x 0.30 x 0.30 x 0.08 x 0.20).",
            "Evaluate the terms: A term = 0.49 x 0.0064 = 0.003136; B term = 0.09 x 0.04 = 0.0036; cross term = 2 x 0.70 x 0.30 x 0.30 x 0.08 x 0.20 = 0.0020160.",
            "Sum and take the root: variance = 0.003136 + 0.0036 + 0.002016 = 0.008752; portfolio volatility = sqrt(0.008752) ≈ 9.36%.",
            "Attribute risk contributions: A contributes roughly its 0.003136 + half the cross term, and B contributes roughly its 0.0036 + half the cross term; B's share of total variance (~48%) far exceeds its 30% capital weight.",
            "Explain the result: despite holding only 30% of capital, Strategy B's much higher 20% volatility makes it contribute nearly half the portfolio risk, illustrating that risk contribution, not capital weight, is what matters.",
          ],
          conclusion:
            "Portfolio volatility is about 9.4%, and Strategy B contributes roughly half the total risk despite being only 30% of capital, because its 20% volatility dwarfs A's 8%. This is the core risk-budgeting lesson: a small capital weight in a volatile strategy can dominate portfolio risk, so allocation should be driven by risk contribution, not dollars.",
          markingNotes: [
            "Full credit requires computing portfolio volatility (~9.4%) and showing B's risk contribution exceeds its capital weight.",
            "Assuming risk contribution equals capital weight is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m7-sn2",
        title: "Tail-risk measures and their limits",
        testPointIds: ["caia-l2-m7-tp3"],
        explanation: [
          "Because alternatives have non-normal returns, tail-risk measurement is essential. Value at Risk (VaR) estimates the loss that will not be exceeded at a given confidence level over a horizon (e.g., a 5% one-month VaR of $10m means there is a 5% chance of losing more than $10m). Its weakness is that it says nothing about how bad losses are beyond the threshold and depends on distributional assumptions that fail for fat-tailed alternatives, so it can badly understate risk. Conditional VaR (CVaR, or expected shortfall) addresses part of this by measuring the average loss in the tail beyond VaR, capturing the severity of extreme losses.",
          "Even CVaR relies on assumptions, so it must be supplemented with stress testing and scenario analysis, which apply specific adverse scenarios (a rate shock, a liquidity crisis, a correlation spike) to see how the portfolio behaves without assuming a distribution. For alternative-heavy portfolios with negative skew and tail dependence, stress tests and scenario analysis often reveal risks that VaR and even CVaR miss. The exam tests knowing what each measure captures and preferring CVaR and stress tests over VaR alone.",
        ],
        keyRules: [
          "VaR = loss threshold at a confidence level; it ignores tail severity and assumes a distribution.",
          "CVaR (expected shortfall) = average loss beyond VaR.",
          "Supplement with stress tests/scenario analysis for non-normal alternatives.",
        ],
      },
      {
        id: "caia-l2-m7-sn3",
        title: "Leverage, liquidity, and the risk budget",
        testPointIds: ["caia-l2-m7-tp4"],
        explanation: [
          "A risk budget built only on market volatility misses two risks that dominate alternatives in stress: leverage and liquidity. Leverage magnifies a position's contribution to portfolio risk and makes it dependent on continued financing; a levered strategy consumes more risk budget than its capital suggests and can be forced to deleverage if financing tightens. Liquidity and funding risk — the inability to raise cash or the withdrawal of financing — can force selling into falling markets, adding losses that are not captured by market-volatility measures.",
          "Therefore the risk budget must explicitly reflect leverage and liquidity: measuring each position's contribution including its leverage, and reserving budget for the possibility that funding or redemption stress forces action at bad prices. This connects to the liquidity-budget idea from the allocation module: leverage and illiquidity together create the deleveraging spirals seen in crises, so a robust risk budget accounts for them rather than assuming positions can be held or exited smoothly.",
        ],
        keyRules: [
          "Leverage magnifies risk contribution and funding dependence.",
          "Liquidity/funding stress can force deleveraging at bad prices.",
          "The risk budget must reflect leverage and liquidity, not just market volatility.",
        ],
      },
      {
        id: "caia-l2-m7-sn4",
        title: "Constructing a portfolio of managers",
        testPointIds: ["caia-l2-m7-tp5"],
        explanation: [
          "Portfolio construction with alternatives is largely about combining managers to achieve a target risk/return profile. The allocator seeks managers with complementary exposures — different strategies, styles, and factor loadings — so that their combination improves the portfolio's risk-adjusted return rather than stacking the same exposures. Position sizing should be driven by each manager's risk contribution and by concentration limits, so that no single manager or correlated cluster dominates the portfolio's risk.",
          "Manager-specific risk (the idiosyncratic risk that a particular manager underperforms, changes style, or fails operationally) is controlled through diversification across managers and ongoing monitoring, while overall diversification across strategies and factors controls systematic concentration. The exam tests sizing manager positions by risk rather than equal capital and controlling both concentration and manager-specific risk in construction, tying together the risk-budgeting, correlation, and due-diligence themes.",
        ],
        keyRules: [
          "Combine managers with complementary exposures for better risk-adjusted return.",
          "Size positions by risk contribution and enforce concentration limits.",
          "Diversify to control manager-specific and systematic concentration risk.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m7-p1",
        testPointIds: ["caia-l2-m7-tp1"],
        style: "Constructed-response essay",
        question:
          "An allocator equal-weights capital across five managers and assumes each therefore contributes equally to portfolio risk. Explain why this assumption is likely wrong and how a risk-budgeting approach would change the sizing.",
        answerPlan: [
          "Explain why equal capital is not equal risk.",
          "Introduce marginal contribution to risk.",
          "Describe the risk-budgeting fix.",
        ],
        modelAnswer:
          "Equal capital does not mean equal risk, because a position's contribution to portfolio risk depends on its volatility and its correlation with the rest of the portfolio, not on its capital weight. A high-volatility or highly correlated manager will contribute far more risk than a low-volatility, diversifying one, so five equal-capital managers can have wildly unequal risk contributions, with one or two dominating the portfolio's risk. A risk-budgeting approach computes each manager's marginal contribution to risk and reallocates capital so the risk contributions match the intended budget — reducing capital to the volatile/correlated managers and increasing it to the diversifying ones — which typically produces a more balanced and controlled risk profile than equal capital weighting.",
        markingGuide: [
          "Explains risk contribution depends on volatility and correlation, not capital.",
          "Introduces marginal contribution to risk.",
          "Describes reallocating capital to equalise/target risk contributions.",
        ],
      },
      {
        id: "caia-l2-m7-p2",
        testPointIds: ["caia-l2-m7-tp3"],
        style: "Constructed-response essay",
        question:
          "A risk manager reports that the alternatives portfolio's 1-month 5% VaR is $8m and concludes the portfolio is safe. Critique reliance on VaR alone for this portfolio and recommend better measures.",
        answerPlan: [
          "State what VaR does and does not capture.",
          "Explain the risk for alternatives.",
          "Recommend better measures.",
        ],
        modelAnswer:
          "A 1-month 5% VaR of $8m means there is a 5% chance of losing more than $8m, but VaR says nothing about how much more could be lost in that tail, and it relies on distributional assumptions that fail for alternatives with negative skew and fat tails — so it can badly understate the true risk. For an alternatives portfolio, the danger lives precisely in the tail beyond VaR, which VaR ignores. The risk manager should supplement VaR with conditional VaR (expected shortfall), which measures the average loss beyond the VaR threshold and captures tail severity, and with stress tests and scenario analysis (rate shocks, liquidity crises, correlation spikes) that do not assume a distribution. These reveal the tail and non-normal risks that make 'VaR says we're safe' a dangerous conclusion.",
        markingGuide: [
          "States VaR ignores tail severity and assumes a distribution.",
          "Explains alternatives' tail risk makes VaR misleading.",
          "Recommends CVaR and stress tests/scenario analysis.",
        ],
      },
      {
        id: "caia-l2-m7-p3",
        testPointIds: ["caia-l2-m7-tp2", "caia-l2-m7-tp4"],
        style: "Constructed-response essay",
        question:
          "A portfolio of levered relative-value and carry strategies shows low volatility and low pairwise correlations in normal times. Explain why its risk budget could be dangerously understated and what a robust risk-budgeting process would incorporate.",
        answerPlan: [
          "Explain correlation instability.",
          "Explain leverage/liquidity risk.",
          "Describe the robust process.",
        ],
        modelAnswer:
          "The portfolio's low normal-times volatility and correlations are misleading because levered relative-value and carry strategies tend to be short volatility, with correlations that spike toward one in a crisis (tail dependence) — so the diversification that lowers the measured risk budget can vanish exactly when it is needed, and the strategies can crash together. In addition, the leverage magnifies each strategy's risk contribution and creates funding dependence, while liquidity/funding stress can force simultaneous deleveraging at bad prices, adding losses that market-volatility measures miss. A robust risk-budgeting process would stress correlations upward toward crisis levels, use tail measures (CVaR) and scenario stress tests rather than normal-times volatility, and explicitly account for leverage and liquidity/funding risk in each strategy's risk contribution, sizing positions for the stressed rather than the calm environment.",
        markingGuide: [
          "Explains correlations spike in crises, undermining the risk budget.",
          "Explains leverage and liquidity/funding risk add non-market risk.",
          "Recommends stressed correlations, tail measures, and leverage/liquidity in the budget.",
        ],
      },
    ],
  }),

  "caia-l2-m8": examDepth({
    testPoints: [
      {
        id: "caia-l2-m8-tp1",
        title: "Liquidity risk and liquidity management",
        priority: "critical",
        examinerFocus:
          "Identifying sources of liquidity risk in alternatives (lock-ups, capital calls, redemption terms, funding) and managing them through liquidity planning and buffers.",
        typicalQuestionForms: [
          "What are the main sources of liquidity risk in an alternatives portfolio?",
          "How should an investor plan for liquidity across market cycles?",
        ],
        mustKnow: [
          "Liquidity risk arises from lock-ups, gates, capital calls, redemption terms, and funding needs.",
          "Liquidity planning matches expected inflows/outflows and stress-tests downturns.",
          "Buffers, credit lines, and pacing manage liquidity risk.",
        ],
        scoringActions: [
          "Map liquidity sources and match them to obligations.",
          "Stress-test liquidity for downturns and capital calls.",
        ],
      },
      {
        id: "caia-l2-m8-tp2",
        title: "Valuation of illiquid assets and its risks",
        priority: "critical",
        examinerFocus:
          "How illiquid assets are valued (appraisals, models, comparables), the resulting smoothing and staleness, and the conflicts when managers value their own assets.",
        typicalQuestionForms: [
          "Why are manager-controlled valuations a concern?",
          "How does appraisal-based valuation affect reported risk?",
        ],
        mustKnow: [
          "Illiquid assets are valued by appraisal, model, or comparables, not market prices.",
          "Self-valuation by managers creates conflicts and needs independent verification.",
          "Smoothed/stale valuations understate volatility and correlation.",
        ],
        scoringActions: [
          "Require independent valuation and challenge manager marks.",
          "Adjust for smoothing when assessing risk.",
        ],
      },
      {
        id: "caia-l2-m8-tp3",
        title: "Operational risk and operational due diligence",
        priority: "high",
        examinerFocus:
          "The operational risks (controls, valuation, cash controls, compliance, service providers, key-person, cyber) that cause many fund failures, and the ODD process to assess them.",
        typicalQuestionForms: [
          "Which operational failures most commonly cause fund losses?",
          "What does operational due diligence assess?",
        ],
        mustKnow: [
          "Operational risk includes weak controls, valuation/cash-control failures, compliance gaps, and fraud.",
          "ODD assesses controls, service providers, valuation, compliance, and business viability.",
          "Operational failures cause a large share of fund losses, independent of investment skill.",
        ],
        scoringActions: [
          "Treat ODD as a primary, veto-capable part of the process.",
          "Probe controls, cash handling, and independent service providers.",
        ],
      },
      {
        id: "caia-l2-m8-tp4",
        title: "Counterparty, funding, and financing risk",
        priority: "high",
        examinerFocus:
          "How dependence on prime brokers/counterparties and financing creates risk, and how margin, rehypothecation, and counterparty failure can impair a fund.",
        typicalQuestionForms: [
          "How can prime-broker failure harm a hedge fund?",
          "What is rehypothecation risk?",
        ],
        mustKnow: [
          "Funds depend on prime brokers/counterparties for financing, custody, and clearing.",
          "Rehypothecation lets counterparties reuse posted collateral, creating loss risk on failure.",
          "Counterparty failure or margin increases can impair or trap assets.",
        ],
        scoringActions: [
          "Assess counterparty concentration and rehypothecation exposure.",
          "Trace how counterparty/funding stress impairs the fund.",
        ],
      },
      {
        id: "caia-l2-m8-tp5",
        title: "Integrating liquidity, valuation, and operational risk",
        priority: "medium",
        examinerFocus:
          "How liquidity, valuation, and operational risks interact and compound in stress, and building a holistic risk framework for an alternatives program.",
        typicalQuestionForms: [
          "How do valuation and liquidity risks compound in a downturn?",
          "What does a holistic non-market risk framework include?",
        ],
        mustKnow: [
          "Stale valuations mask deterioration until redemptions/calls force real pricing.",
          "Liquidity, valuation, and operational risks compound in stress.",
          "A holistic framework monitors all three alongside market risk.",
        ],
        scoringActions: [
          "Analyse how the three risks compound in stress.",
          "Build a framework covering market and non-market risks together.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Non-market risks cause most fund blowups; convert the liquidity, valuation, and operational-risk items, which are heavily tested and essay-friendly.",
      timeBudget:
        "MCQs about 90 seconds; essays need a clear non-market-risk framework.",
      answerSequence: [
        "Map and stress-test liquidity against obligations.",
        "Challenge valuations and require independence.",
        "Treat operational due diligence as veto-capable.",
        "Assess counterparty/funding risk and how risks compound.",
      ],
      qualityChecks: [
        "Did you stress-test liquidity for downturns and capital calls?",
        "Did you require independent valuation and adjust for smoothing?",
        "Did you treat operational risk as a primary failure cause?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m8-sn1",
        title: "Liquidity risk and planning, worked",
        testPointIds: ["caia-l2-m8-tp1"],
        explanation: [
          "Liquidity risk is the risk of being unable to meet cash obligations or being forced to sell assets at unfavourable prices. In alternatives it arises from multiple sources: lock-ups and gates that restrict redemptions, capital calls that demand cash on the GP's schedule, redemption terms that may not match the investor's needs, and funding/financing arrangements that can be withdrawn. Managing it requires liquidity planning: projecting expected inflows (distributions, income) and outflows (capital calls, spending, redemptions) across time and stress-testing them against downturn scenarios where distributions dry up and calls continue.",
          "The tools are liquidity buffers (cash and highly liquid assets), committed credit lines, and commitment pacing, all sized so the investor can meet obligations without forced sales even in stress. The recurring lesson, connecting to the endowment model and denominator effect, is that liquidity must be planned for the worst case — the moment when markets fall, distributions stop, and capital calls and spending needs persist simultaneously. The exam tests mapping liquidity sources, matching them to obligations, and stress-testing.",
        ],
        keyRules: [
          "Liquidity risk sources: lock-ups, gates, capital calls, redemption terms, funding.",
          "Plan by projecting and stress-testing inflows vs outflows.",
          "Manage with buffers, credit lines, and pacing.",
        ],
        workedProblem: {
          scenario:
            "An investor has $500m committed to private funds with $150m still un-called, expects $40m of distributions and must fund $30m of spending next year, and holds a $200m liquid portfolio. Model a stress scenario where markets fall 30%, distributions drop to $5m, and $60m of capital calls arrive, and assess whether the investor can meet its obligations without forced private-asset sales.",
          steps: [
            "Establish the base case: expected distributions $40m plus a $200m liquid portfolio comfortably cover $30m spending and normal calls.",
            "Apply the stress to the liquid portfolio: a 30% market fall cuts the liquid portfolio from $200m to about $140m.",
            "Apply the stress to cash flows: distributions fall from $40m to $5m, while capital calls rise to $60m and spending remains $30m.",
            "Compute the stressed cash need: outflows = $60m calls + $30m spending = $90m; inflows = $5m distributions; net cash need ≈ $85m.",
            "Assess coverage: the stressed liquid portfolio (~$140m) can cover the ~$85m net need without selling private assets, but the buffer is much thinner than the base case, and a deeper or longer stress could exhaust it — so credit lines and pacing discipline are prudent.",
          ],
          conclusion:
            "In the stress scenario the investor faces roughly $85m of net cash needs (higher calls, lower distributions, ongoing spending) against a shrunken ~$140m liquid portfolio; it can meet obligations without forced private-asset sales, but with a much thinner margin than in normal times. This shows why liquidity must be planned and stress-tested for the simultaneous shock of falling markets, dried-up distributions, and continuing capital calls.",
          markingNotes: [
            "Full credit requires computing the stressed net cash need and comparing it to the stressed liquid portfolio.",
            "Assessing liquidity only in the base case, ignoring the simultaneous shocks, is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m8-sn2",
        title: "Valuation of illiquid assets and its risks",
        testPointIds: ["caia-l2-m8-tp2"],
        explanation: [
          "Illiquid assets lack observable market prices, so they are valued by appraisals, models, or comparable transactions — methods that involve judgement and lag actual market conditions. This produces smoothing and staleness: reported values change gradually and understate true volatility and correlation, which flatters risk statistics (as covered in the risk-measures module) and can delay recognition of deterioration. A particular concern is that managers often value their own illiquid assets, creating a conflict of interest: they may mark assets favourably to support the track record, incentive fees, or fundraising.",
          "The safeguards are independence and scrutiny: independent administrators and third-party valuation agents, documented and consistent valuation policies overseen by a valuation committee, and independent audits provide external checks that the marks are fair. Investors should challenge manager marks, compare them to recent comparable transactions, and adjust for smoothing when assessing risk. The exam tests recognising the conflicts in self-valuation and the need for independent verification.",
        ],
        keyRules: [
          "Illiquid assets are valued by appraisal/model/comparables, not market prices.",
          "Self-valuation creates conflicts; require independent verification.",
          "Smoothing/staleness understate volatility and delay recognising deterioration.",
        ],
      },
      {
        id: "caia-l2-m8-sn3",
        title: "Operational risk and operational due diligence",
        testPointIds: ["caia-l2-m8-tp3"],
        explanation: [
          "Operational risk is the risk of loss from inadequate or failed internal processes, people, systems, or external events — as opposed to investment risk. In alternatives it includes weak internal controls, valuation and cash-control failures, compliance gaps, key-person dependence, cyber and technology failures, and outright fraud. Crucially, a large share of fund failures and investor losses stem from operational breakdowns rather than poor investment performance, so operational risk cannot be treated as secondary.",
          "Operational due diligence (ODD) is the process for assessing these risks: it examines the firm's control environment, segregation of duties, cash-movement controls, valuation policies, compliance program, business viability, technology, and — critically — the independence and quality of service providers (administrator, auditor, custodian). Strong practice gives ODD veto power: even a talented investment manager should be rejected if the operational environment is unsound. The exam tests treating ODD as a primary part of the process and knowing what it assesses.",
        ],
        keyRules: [
          "Operational risk: controls, valuation/cash-control, compliance, key-person, cyber, fraud.",
          "Many fund failures are operational, not investment-driven.",
          "ODD assesses controls and service providers and should be veto-capable.",
        ],
      },
      {
        id: "caia-l2-m8-sn4",
        title: "Counterparty risk and compounding in stress",
        testPointIds: ["caia-l2-m8-tp4", "caia-l2-m8-tp5"],
        explanation: [
          "Funds depend on counterparties — prime brokers for financing and custody, dealers for trading, clearing houses for settlement — and this creates counterparty and funding risk. If a prime broker fails, assets held there can be frozen or lost, and financing can vanish, forcing deleveraging; rehypothecation, where a counterparty reuses the fund's posted collateral, means the fund can lose that collateral if the counterparty fails. Concentration with a single counterparty amplifies these risks, which is why funds diversify counterparties and monitor their creditworthiness.",
          "The deeper Level II point is that liquidity, valuation, operational, and counterparty risks compound in stress. Stale valuations hide deterioration until redemptions or capital calls force real pricing; illiquidity prevents raising cash; operational weaknesses surface under pressure; and counterparty failures cut off financing — all at once. A holistic risk framework therefore monitors these non-market risks alongside market risk and considers their interactions, rather than analysing each in isolation. The exam rewards showing how the risks reinforce one another in a downturn.",
        ],
        keyRules: [
          "Counterparty/funding risk: prime-broker failure, financing withdrawal, rehypothecation.",
          "Diversify and monitor counterparties.",
          "Liquidity, valuation, operational, and counterparty risks compound in stress.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m8-p1",
        testPointIds: ["caia-l2-m8-tp2"],
        style: "Constructed-response essay",
        question:
          "A private fund values its illiquid holdings internally and reports steadily rising NAVs even as comparable public markets fall. Explain the valuation risks this creates and the controls an LP should require.",
        answerPlan: [
          "Explain the self-valuation conflict.",
          "Explain the smoothing/staleness risk.",
          "Require independent controls.",
        ],
        modelAnswer:
          "Internally valuing illiquid holdings creates a conflict of interest: the manager may mark assets favourably to support the track record, incentive fees, or fundraising, and rising NAVs while comparable public markets fall is a warning that the marks may be stale or self-serving rather than reflecting current value. The appraisal/model-based valuations are also smoothed and lagged, so they understate volatility and correlation and delay recognition of deterioration. The LP should require independent controls: an independent administrator striking NAV and independent third-party valuation, a documented, consistent valuation policy overseen by a valuation committee, and an audit by a reputable independent auditor. It should also challenge the marks against recent comparable transactions and adjust for smoothing when assessing the fund's true risk.",
        markingGuide: [
          "Identifies the self-valuation conflict and the divergence from public markets.",
          "Explains smoothing/staleness understates risk and delays recognition.",
          "Requires independent administrator, valuation, and audit controls.",
        ],
      },
      {
        id: "caia-l2-m8-p2",
        testPointIds: ["caia-l2-m8-tp3"],
        style: "Constructed-response essay",
        question:
          "An investment team is impressed by a manager's returns and wants to invest quickly, treating operational due diligence as a formality. Explain why operational due diligence deserves veto power and list the key areas it should examine.",
        answerPlan: [
          "Explain why ODD is critical.",
          "Justify veto power.",
          "List the key ODD areas.",
        ],
        modelAnswer:
          "Operational due diligence deserves veto power because a large share of fund failures and investor losses come from operational breakdowns and fraud, not poor investment performance — a talented investor can still lose clients' money through weak controls, mispricing, or theft. So no matter how impressive the returns, an unsound operational environment is a reason to decline. ODD should examine the control environment and segregation of duties, cash-movement controls (who can move money), valuation policies and their independence, the compliance program, key-person and business-viability risk, technology/cyber controls, and — critically — the independence and quality of service providers (administrator, auditor, custodian). If these are deficient, the manager should be rejected regardless of the track record.",
        markingGuide: [
          "Explains operational failures cause many fund losses.",
          "Justifies ODD veto power over the investment decision.",
          "Lists key ODD areas including controls, cash, valuation, and service providers.",
        ],
      },
      {
        id: "caia-l2-m8-p3",
        testPointIds: ["caia-l2-m8-tp1", "caia-l2-m8-tp5"],
        style: "Constructed-response essay",
        question:
          "During a market crisis, an alternatives-heavy investor faces redemption requests it cannot meet, discovers its private marks were stale, and finds a prime broker raising margins. Explain how these non-market risks compound and what a holistic risk framework would have done differently.",
        answerPlan: [
          "Explain how the risks compound.",
          "Trace the crisis dynamics.",
          "Describe the holistic framework.",
        ],
        modelAnswer:
          "The risks compound: the crisis triggers redemptions and margin increases (liquidity and counterparty/funding risk) while the private marks, which had been stale and smoothed (valuation risk), finally reset downward, revealing losses and worsening the funded/liquidity position all at once. Illiquidity prevents raising cash from the private assets, the prime broker's higher margins force deleveraging, and the delayed valuation recognition means the investor was managing to inaccurate figures — each risk amplifies the others. A holistic risk framework would have monitored liquidity, valuation, operational, and counterparty risks together alongside market risk: stress-testing liquidity for simultaneous redemptions, dried-up distributions, and margin calls; adjusting for valuation smoothing so risk was not understated; diversifying counterparties and assessing rehypothecation exposure; and holding buffers and credit lines — so the investor would have entered the crisis with realistic risk estimates and the liquidity to avoid forced sales.",
        markingGuide: [
          "Explains how liquidity, valuation, and counterparty risks compound.",
          "Traces the crisis dynamics (redemptions, stale marks resetting, margin calls).",
          "Describes a holistic framework monitoring non-market risks together with buffers/diversification.",
        ],
      },
    ],
  }),

  "caia-l2-m9": examDepth({
    testPoints: [
      {
        id: "caia-l2-m9-tp1",
        title: "The manager selection process end to end",
        priority: "critical",
        examinerFocus:
          "The full manager-selection workflow — sourcing, screening, investment and operational due diligence, and the investment decision — and how each stage filters the manager universe.",
        typicalQuestionForms: [
          "What are the stages of a rigorous manager-selection process?",
          "At which stage is operational due diligence typically conducted?",
        ],
        mustKnow: [
          "Process: source, screen, investment due diligence, operational due diligence, decision, and negotiation.",
          "Both investment and operational due diligence must pass before investing.",
          "The process filters a large universe to a few high-conviction managers.",
        ],
        scoringActions: [
          "Order the selection stages and require both IDD and ODD to pass.",
          "Treat ODD as a gating (veto) stage.",
        ],
      },
      {
        id: "caia-l2-m9-tp2",
        title: "Evaluating performance, persistence, and attribution",
        priority: "high",
        examinerFocus:
          "Analysing a track record for genuine, persistent skill using attribution, peer/vintage/PME context, and controlling for luck, biases, and hidden risk.",
        typicalQuestionForms: [
          "How should an allocator distinguish skill from luck in a track record?",
          "Why is performance attribution essential in manager selection?",
        ],
        mustKnow: [
          "Attribution ties returns to identifiable, repeatable sources; unexplained returns may be luck or hidden risk.",
          "Context (peers, vintage, PME) is needed to judge performance fairly.",
          "Beware backfill, survivorship, and cherry-picked track records.",
        ],
        scoringActions: [
          "Attribute returns and test persistence before crediting skill.",
          "Place performance in peer/vintage/PME context and guard against biases.",
        ],
      },
      {
        id: "caia-l2-m9-tp3",
        title: "Assessing the team, process, and edge",
        priority: "high",
        examinerFocus:
          "Evaluating the investment team's stability and depth, the repeatability and discipline of the process, and whether the manager has a genuine, defensible edge.",
        typicalQuestionForms: [
          "What team and process factors signal a durable edge?",
          "Why is key-person risk important in manager selection?",
        ],
        mustKnow: [
          "A durable edge rests on a stable, deep team and a repeatable, disciplined process.",
          "Key-person risk and style drift are warning signs.",
          "The source of the edge should be identifiable and defensible.",
        ],
        scoringActions: [
          "Assess team stability/depth and process repeatability.",
          "Flag key-person risk and style drift.",
        ],
      },
      {
        id: "caia-l2-m9-tp4",
        title: "Operational due diligence and red flags in selection",
        priority: "critical",
        examinerFocus:
          "Applying ODD within selection to detect operational weaknesses and fraud red flags before investing, and treating ODD as a veto.",
        typicalQuestionForms: [
          "Which red flags should stop an allocation regardless of returns?",
          "How does ODD function as a veto in the selection process?",
        ],
        mustKnow: [
          "ODD examines controls, valuation, cash controls, compliance, and service-provider independence.",
          "Red flags (self-administration, no independent audit, opacity, smooth returns) can veto an allocation.",
          "Operational failure/fraud can destroy capital regardless of investment skill.",
        ],
        scoringActions: [
          "Let ODD veto an allocation despite strong returns.",
          "Cluster red flags to assess fraud/operational risk.",
        ],
      },
      {
        id: "caia-l2-m9-tp5",
        title: "Terms, alignment, and negotiation",
        priority: "medium",
        examinerFocus:
          "Evaluating and negotiating fees, liquidity terms, transparency, and alignment (co-investment, high-water marks) as part of selection.",
        typicalQuestionForms: [
          "How does GP co-investment factor into selection?",
          "Which terms should an allocator scrutinise before investing?",
        ],
        mustKnow: [
          "Fees, liquidity terms, gates, and transparency materially affect net outcomes.",
          "GP co-investment and high-water marks improve alignment.",
          "Terms should match the strategy's liquidity and the investor's needs.",
        ],
        scoringActions: [
          "Scrutinise and negotiate fees, liquidity, and transparency.",
          "Reward alignment (co-investment, high-water marks) in selection.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Manager selection and due diligence are a Level II focus; convert the process, performance-analysis, and ODD-veto items and reason through selection essays.",
      timeBudget:
        "MCQs about 90 seconds; selection essays need the full IDD/ODD framework.",
      answerSequence: [
        "Order the selection stages and require both IDD and ODD.",
        "Attribute performance and place it in peer/vintage/PME context.",
        "Assess team, process, and edge; flag key-person risk/style drift.",
        "Apply ODD as a veto and negotiate terms/alignment.",
      ],
      qualityChecks: [
        "Did you require ODD to pass regardless of returns?",
        "Did you distinguish skill from luck via attribution and context?",
        "Did you reward alignment and scrutinise terms?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m9-sn1",
        title: "The selection process and separating skill from luck, worked",
        testPointIds: ["caia-l2-m9-tp1", "caia-l2-m9-tp2"],
        explanation: [
          "Manager selection is a funnel that filters a large universe to a few high-conviction investments through defined stages: sourcing (building the universe), screening (quantitative and qualitative filters), investment due diligence (the strategy, edge, team, and risk), operational due diligence (controls, valuation, service providers), the investment decision, and terms negotiation. Both the investment and operational tracks must pass — a manager who excels on investment merit but fails ODD should not be funded — which is why ODD acts as a gating veto rather than a rubber stamp.",
          "The core analytical task is separating skill from luck. A strong headline return proves little on its own: attribution should tie the returns to identifiable, repeatable sources (rather than a few lucky bets or hidden risk exposures), and the performance must be placed in context using peer comparisons, vintage-year analysis, and public-market equivalents. Allocators must also guard against biases — backfilled or survivorship-inflated records and cherry-picked composites — that make luck look like skill. Only performance that is attributable, persistent, and robust to context and biases should be credited as genuine edge.",
        ],
        keyRules: [
          "Selection stages: source, screen, IDD, ODD, decide, negotiate.",
          "Both IDD and ODD must pass; ODD is a veto.",
          "Distinguish skill from luck via attribution, context, and bias controls.",
        ],
        workedProblem: {
          scenario:
            "An allocator screens a hedge fund with a 5-year record showing a 15% annualised return and a high Sharpe ratio. Digging in, she finds: the first two years were 'backfilled' before the fund started reporting; most of the return came in one year from a single concentrated bet; and the strategy has drifted from its stated market-neutral mandate. Walk through how she should evaluate whether this is skill.",
          steps: [
            "Adjust for backfill bias: the first two years were added retroactively, so exclude or discount them — the live, reportable record is shorter and likely less impressive than the 15%.",
            "Attribute the returns: most of the gain came from one concentrated bet in a single year, which looks like a lucky outcome rather than a repeatable, diversified process.",
            "Check consistency with the mandate: the strategy has drifted from its stated market-neutral approach (style drift), so the returns are not attributable to the claimed, repeatable edge and signal weak discipline or hidden risk.",
            "Place in context: compare the adjusted record to peers, vintage, and a public-market equivalent to see whether even the genuine portion beat alternatives.",
            "Conclude: after removing backfill, recognising the luck-driven concentration, and accounting for style drift, there is little evidence of persistent, attributable skill.",
          ],
          conclusion:
            "Once the backfilled years are removed, the return is shown to depend on a single lucky concentrated bet, and the strategy has drifted from its mandate, the 15%/high-Sharpe record does not demonstrate genuine, repeatable skill. The allocator should not credit it as edge and should either decline or require much more evidence of an attributable, persistent process.",
          markingNotes: [
            "Full credit requires addressing backfill bias, luck-driven concentration, and style drift.",
            "Being persuaded by the headline 15% return and Sharpe ratio is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m9-sn2",
        title: "Assessing team, process, and edge",
        testPointIds: ["caia-l2-m9-tp3"],
        explanation: [
          "Beyond the numbers, selection requires judging the people and process behind the returns. A durable edge rests on a stable, adequately deep team — one that is not dependent on a single individual (key-person risk) and has the experience and incentives to persist — and on a repeatable, disciplined investment process that can be articulated and consistently applied across market environments. Allocators probe how decisions are made, how risk is managed, and whether the process explains the track record.",
          "Warning signs include heavy dependence on one person, high team turnover, a process that cannot be clearly explained, and style drift (deviating from the stated strategy), which undermines the claim that returns come from a repeatable edge. The source of the edge — informational, analytical, structural, or behavioural — should be identifiable and defensible against competition and capacity growth. The exam tests assessing team stability/depth and process repeatability and flagging key-person risk and style drift.",
        ],
        keyRules: [
          "A durable edge needs a stable, deep team and a repeatable, disciplined process.",
          "Key-person risk, turnover, and style drift are warning signs.",
          "The edge's source should be identifiable and defensible.",
        ],
      },
      {
        id: "caia-l2-m9-sn3",
        title: "Operational due diligence as a veto",
        testPointIds: ["caia-l2-m9-tp4"],
        explanation: [
          "Within manager selection, operational due diligence is the safeguard that prevents investing with a manager whose operations could destroy capital regardless of investment skill. ODD examines the control environment, cash-movement controls, valuation policies and their independence, compliance, business viability, technology, and the independence and quality of service providers (administrator, auditor, custodian). The guiding principle is that ODD can veto an allocation: no level of investment brilliance compensates for an operational environment that could lose or misappropriate assets.",
          "ODD is also the front line against fraud. Red flags — self-administration and self-custody, the absence of a reputable independent auditor, related-party or unknown service providers, opacity, and implausibly smooth returns — should stop an allocation until independently resolved, echoing the Level I due-diligence foundations and the lessons of major frauds. The exam tests treating ODD as a gating veto and clustering red flags to assess operational and fraud risk.",
        ],
        keyRules: [
          "ODD examines controls, cash, valuation, compliance, and service-provider independence.",
          "ODD can veto an allocation regardless of investment returns.",
          "Cluster red flags (self-administration, no independent audit, opacity, smooth returns) as fraud risk.",
        ],
      },
      {
        id: "caia-l2-m9-sn4",
        title: "Terms, alignment, and negotiation",
        testPointIds: ["caia-l2-m9-tp5"],
        explanation: [
          "The final selection stage evaluates and negotiates the terms on which capital is committed, because terms materially affect net outcomes and alignment. Fees (management and incentive), liquidity terms (lock-ups, gates, notice periods), and transparency all shape the investor's experience, and they should match the strategy's true liquidity — a strategy holding illiquid assets should not promise daily liquidity, and a mismatch is a risk. Larger or anchor investors can often negotiate improved fees, liquidity, or transparency, and co-investment or most-favoured-nation terms.",
          "Alignment features are especially valued: meaningful GP or manager co-investment ('skin in the game') ensures the manager shares losses as well as gains, and a high-water mark ensures incentive fees are earned only on new profits. Weak alignment — little co-investment, or fee structures that reward asset gathering or risk-taking — is a caution. The exam tests scrutinising and negotiating terms and rewarding alignment as part of the selection decision.",
        ],
        keyRules: [
          "Fees, liquidity terms, and transparency affect net outcomes and should match the strategy.",
          "GP co-investment and high-water marks strengthen alignment.",
          "Negotiate terms and reward alignment in the selection decision.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m9-p1",
        testPointIds: ["caia-l2-m9-tp1", "caia-l2-m9-tp4"],
        style: "Constructed-response essay",
        question:
          "A manager passes investment due diligence with an impressive, attributable track record, but operational due diligence finds it self-administers, uses a tiny unknown auditor, and grants no independent verification of assets. Explain how the selection process should handle this and why.",
        answerPlan: [
          "State the ODD findings as red flags.",
          "Explain the veto principle.",
          "State the decision.",
        ],
        modelAnswer:
          "The operational findings — self-administration, a tiny unknown auditor, and no independent verification of assets — are serious red flags indicating that the reported values and even the existence of the assets cannot be independently confirmed, which is the classic profile of operational failure and fraud. In a sound selection process, operational due diligence functions as a veto: because operational breakdowns and fraud can destroy capital regardless of investment skill, no level of investment merit compensates for an unsound operational environment. Therefore, despite the impressive, attributable investment track record, the allocator should decline the investment (or defer it) unless the manager remedies the deficiencies by engaging a reputable independent administrator and auditor and providing independent verification of the assets.",
        markingGuide: [
          "Identifies the operational findings as fraud/operational red flags.",
          "Explains ODD functions as a veto regardless of returns.",
          "Concludes the allocation should be declined absent remediation.",
        ],
      },
      {
        id: "caia-l2-m9-p2",
        testPointIds: ["caia-l2-m9-tp2", "caia-l2-m9-tp3"],
        style: "Constructed-response essay",
        question:
          "Two managers have similar returns. Manager X's returns are well attributed to a repeatable process run by a stable, deep team; Manager Y's returns came largely from one star analyst who recently signalled he may leave, and the strategy has drifted. Which manager would you select and why?",
        answerPlan: [
          "Assess Manager X.",
          "Assess Manager Y.",
          "State the selection and reasoning.",
        ],
        modelAnswer:
          "Manager X is the stronger choice: the returns are well attributed to a repeatable, disciplined process and are supported by a stable, deep team, so the edge is more likely to persist and is not dependent on any single individual. Manager Y carries serious concerns despite similar returns: the performance came largely from one star analyst who may leave (acute key-person risk), so the edge could walk out the door, and the strategy has drifted from its stated approach (style drift), meaning the returns are not clearly attributable to a repeatable process and signal weak discipline or hidden risk. I would select Manager X, because a durable edge rests on a stable team and repeatable process, whereas Manager Y's returns are fragile and poorly attributable.",
        markingGuide: [
          "Credits Manager X's attributable process and stable, deep team.",
          "Flags Manager Y's key-person risk and style drift.",
          "Selects Manager X with durable-edge reasoning.",
        ],
      },
      {
        id: "caia-l2-m9-p3",
        testPointIds: ["caia-l2-m9-tp5"],
        style: "Constructed-response essay",
        question:
          "As an anchor investor negotiating with a new private fund, identify the key terms you would scrutinise and the alignment features you would seek, and explain how these protect your interests.",
        answerPlan: [
          "Identify the terms to scrutinise.",
          "Identify the alignment features.",
          "Explain the protection.",
        ],
        modelAnswer:
          "As an anchor investor, I would scrutinise the fee structure (management and incentive fees), the liquidity terms (lock-ups, gates, notice periods) to ensure they match the strategy's true liquidity, and the transparency provided into positions, risk, and valuation, negotiating improvements such as reduced fees, better liquidity, co-investment rights, or most-favoured-nation terms given my anchor position. I would seek strong alignment features: meaningful GP co-investment ('skin in the game') so the manager shares losses as well as gains, and a high-water mark so incentive fees are earned only on new profits above prior peaks. These protect my interests by ensuring I am not overpaying for replicable returns, that liquidity terms fit the assets, that I can monitor the fund, and that the manager's incentives are aligned with generating genuine, sustained performance rather than gathering assets or taking excessive risk.",
        markingGuide: [
          "Scrutinises fees, liquidity terms, and transparency (matched to the strategy).",
          "Seeks GP co-investment and a high-water mark.",
          "Explains how these terms and alignment features protect the investor.",
        ],
      },
    ],
  }),

  "caia-l2-m10": examDepth({
    testPoints: [
      {
        id: "caia-l2-m10-tp1",
        title: "Ongoing monitoring of managers and portfolios",
        priority: "critical",
        examinerFocus:
          "What to monitor after investing — performance versus expectations, style/strategy consistency, risk exposures, and operational/organisational changes — and acting on red flags.",
        typicalQuestionForms: [
          "What should ongoing manager monitoring cover?",
          "Which changes at a manager should trigger a review or redemption?",
        ],
        mustKnow: [
          "Monitor performance vs expectations, style consistency, risk exposures, and operational/organisational changes.",
          "Style drift, key-person departures, and control weaknesses trigger review.",
          "Monitoring is continuous, not a one-time due-diligence event.",
        ],
        scoringActions: [
          "Monitor investment and operational dimensions continuously.",
          "Act on drift, key-person, or control red flags.",
        ],
      },
      {
        id: "caia-l2-m10-tp2",
        title: "Performance measurement and attribution over time",
        priority: "high",
        examinerFocus:
          "Measuring realised performance against appropriate benchmarks, attributing it to sources, and detecting deterioration or exposure changes.",
        typicalQuestionForms: [
          "How should ongoing performance be benchmarked for an alternatives program?",
          "What does deteriorating attribution suggest?",
        ],
        mustKnow: [
          "Benchmark against appropriate peers/PME/factor benchmarks, not just an index.",
          "Attribution over time detects whether the edge and exposures persist.",
          "Changing exposures or unexplained returns warrant investigation.",
        ],
        scoringActions: [
          "Use appropriate benchmarks and ongoing attribution.",
          "Investigate exposure changes or unexplained returns.",
        ],
      },
      {
        id: "caia-l2-m10-tp3",
        title: "Reporting, transparency, and disclosure to stakeholders",
        priority: "high",
        examinerFocus:
          "The information asset owners need to report to their boards/beneficiaries, the transparency they should demand from managers, and standards (e.g., GIPS) for fair reporting.",
        typicalQuestionForms: [
          "What transparency should an LP demand from managers for effective reporting?",
          "Why do performance-reporting standards matter?",
        ],
        mustKnow: [
          "LPs need position, risk, valuation, and exposure transparency to report accurately.",
          "Fair, standardised performance presentation (e.g., GIPS) supports comparability and trust.",
          "Reporting to boards/beneficiaries must be clear, accurate, and not misleading.",
        ],
        scoringActions: [
          "Demand transparency sufficient for accurate stakeholder reporting.",
          "Require fair, standardised performance presentation.",
        ],
      },
      {
        id: "caia-l2-m10-tp4",
        title: "Governance structures and decision-making",
        priority: "critical",
        examinerFocus:
          "How governance (boards, investment committees, delegation, the IPS) shapes an alternatives program's success, and how governance capacity constrains complexity.",
        typicalQuestionForms: [
          "How does governance structure affect an alternatives program?",
          "Why should governance capacity limit program complexity?",
        ],
        mustKnow: [
          "Governance defines roles, delegation, decision processes, and accountability via the IPS.",
          "Effective governance enables timely, informed decisions on complex, illiquid investments.",
          "Weak governance capacity should limit program complexity.",
        ],
        scoringActions: [
          "Tie program design to governance capacity and the IPS.",
          "Limit complexity where governance is weak or slow.",
        ],
      },
      {
        id: "caia-l2-m10-tp5",
        title: "Rebalancing, redemption, and termination decisions",
        priority: "medium",
        examinerFocus:
          "Deciding when to rebalance, redeem, or terminate a manager based on monitoring, and executing these given illiquidity and secondary-market options.",
        typicalQuestionForms: [
          "When should an allocator redeem or terminate a manager?",
          "How can illiquidity be managed when exiting a private fund?",
        ],
        mustKnow: [
          "Terminate/redeem for style drift, deterioration, operational problems, or mandate changes.",
          "Illiquidity complicates exit; the secondary market provides a partial exit route.",
          "Rebalancing and exit decisions follow from disciplined monitoring.",
        ],
        scoringActions: [
          "Base termination on drift, deterioration, or operational red flags.",
          "Use the secondary market to exit illiquid positions where needed.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Monitoring and governance close the Level II loop; convert the monitoring and governance items and reason through governance/termination essays.",
      timeBudget:
        "MCQs about 90 seconds; governance essays should reason from the IPS and governance capacity.",
      answerSequence: [
        "Monitor investment and operational dimensions continuously.",
        "Benchmark and attribute performance appropriately over time.",
        "Ensure transparency and fair reporting to stakeholders.",
        "Tie decisions to governance capacity and act on red flags.",
      ],
      qualityChecks: [
        "Did you treat monitoring as continuous, covering operations too?",
        "Did you tie program complexity to governance capacity?",
        "Did you base termination on drift/deterioration/operational red flags?",
      ],
    },
    studyNotes: [
      {
        id: "caia-l2-m10-sn1",
        title: "Ongoing monitoring across investment and operations",
        testPointIds: ["caia-l2-m10-tp1", "caia-l2-m10-tp2"],
        explanation: [
          "Due diligence does not end at the investment; monitoring is continuous. On the investment side, the allocator tracks performance against expectations and appropriate benchmarks, checks that the manager is running the strategy it was hired for (style consistency), and watches the risk exposures for signs of drift, higher leverage, or changing factor loadings. Attribution over time is the key tool: it reveals whether the returns still come from the expected, repeatable sources or whether the edge is eroding or the manager is taking new, unexplained risks.",
          "On the operational and organisational side, monitoring watches for changes that raise risk: key-person departures, team turnover, growth in assets that strains the strategy, changes in service providers, control weaknesses, and any deterioration in transparency. Red flags on either dimension — persistent underperformance versus a fair benchmark, style drift, a lost key person, or control problems — should trigger a review and potentially a redemption or termination. The exam tests treating monitoring as a continuous, dual investment-and-operational discipline.",
        ],
        keyRules: [
          "Monitor performance, style consistency, risk exposures, and operational/organisational changes.",
          "Use ongoing attribution to detect eroding edge or new risks.",
          "Act on red flags with review, redemption, or termination.",
        ],
      },
      {
        id: "caia-l2-m10-sn2",
        title: "Governance, capacity, and a worked assessment",
        testPointIds: ["caia-l2-m10-tp4"],
        explanation: [
          "Governance is the decision-making architecture that determines whether an alternatives program succeeds. It defines roles and responsibilities, delegation of authority, the investment committee and board processes, and accountability, all codified in the investment policy statement. Effective governance enables timely, informed decisions — essential for illiquid, complex investments where opportunities and manager issues require decisive action — while poor governance (slow processes, inadequate expertise, unclear authority) leads to missed opportunities, poor manager oversight, and unmanaged risk.",
          "The recurring principle is that governance capacity should constrain program complexity. An institution with limited expertise, resources, or decision speed should not run a complex, heavily illiquid alternatives program directly; it should either build capacity, simplify the program, or delegate through pooled vehicles or an outsourced CIO. Matching the program's complexity to the governance that oversees it is a central Level II theme, tying together the asset-owner, allocation, and monitoring modules.",
        ],
        keyRules: [
          "Governance defines roles, delegation, processes, and accountability via the IPS.",
          "Effective governance enables timely, informed decisions on complex investments.",
          "Match program complexity to governance capacity.",
        ],
        workedProblem: {
          scenario:
            "A public pension's board meets quarterly, has limited alternatives expertise, and requires full-board approval for every manager commitment. It wants to build a large co-investment and secondaries program requiring fast decisions. Assess the governance mismatch and recommend changes.",
          steps: [
            "Identify the program's decision requirements: co-investments and secondaries require fast, expert decisions, often within days or weeks, to win allocations and transact.",
            "Identify the governance constraints: a board that meets only quarterly, lacks alternatives expertise, and requires full-board approval for every commitment cannot decide quickly or expertly.",
            "Diagnose the mismatch: the program's need for speed and expertise far exceeds the board's decision capacity, so the pension would miss deals or make poorly vetted commitments.",
            "Recommend governance changes: delegate authority (within IPS-defined limits) to an internal investment team or committee empowered to approve co-investments/secondaries between board meetings, build or hire the required expertise, and/or use a discretionary advisor/outsourced CIO for these fast-moving programs.",
            "Tie complexity to capacity: alternatively, if governance cannot be strengthened, the pension should scale back to a simpler, primary-fund program that its quarterly, full-board process can oversee.",
          ],
          conclusion:
            "The pension's quarterly, full-board, low-expertise governance is mismatched to a co-investment/secondaries program that demands fast, expert decisions. It should either delegate authority to an empowered internal team or outsourced advisor with the necessary expertise (within IPS limits) or scale the program's complexity back to what its governance can oversee — the core principle that program complexity must match governance capacity.",
          markingNotes: [
            "Full credit requires diagnosing the speed/expertise mismatch and recommending delegation/outsourcing or reduced complexity.",
            "Recommending the complex program without addressing the governance capacity is the classic error.",
          ],
        },
      },
      {
        id: "caia-l2-m10-sn3",
        title: "Reporting, transparency, and disclosure",
        testPointIds: ["caia-l2-m10-tp3"],
        explanation: [
          "Asset owners must report their alternatives program to boards, beneficiaries, and regulators, and this depends on getting adequate transparency from managers. LPs should demand sufficient information — positions, exposures, risk, valuations, and fees — to understand and accurately report their true risk and performance, and to detect problems early. Insufficient transparency is both a monitoring weakness and a reason for caution about a manager.",
          "Fair and standardised performance reporting matters for comparability and trust. Standards like the Global Investment Performance Standards (GIPS) promote fair, consistent, and non-misleading presentation of returns, which helps LPs compare managers and report honestly to their own stakeholders. Reporting up the chain must itself be clear, accurate, and not misleading, consistent with the ethics themes from the first Level II module. The exam tests demanding transparency sufficient for accurate stakeholder reporting and valuing standardised, fair performance presentation.",
        ],
        keyRules: [
          "Demand position, risk, valuation, exposure, and fee transparency from managers.",
          "Standards (e.g., GIPS) promote fair, comparable performance reporting.",
          "Reporting to stakeholders must be clear, accurate, and not misleading.",
        ],
      },
      {
        id: "caia-l2-m10-sn4",
        title: "Rebalancing, redemption, and termination",
        testPointIds: ["caia-l2-m10-tp5"],
        explanation: [
          "Monitoring must translate into action. Rebalancing keeps the program aligned with strategic targets, using liquid sleeves, overlays, and pacing given illiquidity (as in the allocation module). Redemption or termination of a manager is warranted when monitoring reveals persistent underperformance versus a fair benchmark, style drift, a material team or key-person loss, operational deterioration, or a change that breaches the mandate — the decision should follow disciplined criteria rather than short-term performance chasing.",
          "Executing an exit is complicated by illiquidity: liquid managers can be redeemed within their terms, but private funds cannot be exited on demand, so the secondary market provides a partial exit route (selling the fund stake, often at a discount) when a faster exit is needed. The exam tests basing termination on genuine red flags (drift, deterioration, operational problems) rather than noise, and recognising the secondary market as the tool for exiting illiquid positions.",
        ],
        keyRules: [
          "Redeem/terminate for style drift, deterioration, operational problems, or mandate breaches.",
          "Rebalance with liquid sleeves, overlays, and pacing given illiquidity.",
          "Use the secondary market to exit illiquid positions when needed.",
        ],
      },
    ],
    examPractice: [
      {
        id: "caia-l2-m10-p1",
        testPointIds: ["caia-l2-m10-tp1", "caia-l2-m10-tp5"],
        style: "Constructed-response essay",
        question:
          "Two years after investing, an allocator notices a hedge fund manager has taken on much higher leverage and larger directional bets than its stated market-neutral mandate, and a co-portfolio manager has left. Explain what monitoring has revealed and how the allocator should respond, including exit considerations.",
        answerPlan: [
          "Identify the monitoring findings.",
          "Assess their significance.",
          "Recommend the response and exit.",
        ],
        modelAnswer:
          "Monitoring has revealed two serious problems: style drift (higher leverage and larger directional bets inconsistent with the stated market-neutral mandate) and a key-person loss (a departed co-portfolio manager). The style drift means the fund is no longer running the strategy the allocator underwrote and is taking new, unexplained risk, while the departure raises key-person and organisational risk — both are red flags that warrant a formal review. The allocator should investigate the reasons, reassess whether the fund still fits the portfolio's role and risk budget, and, if the drift and instability are confirmed, move to redeem or terminate the manager. For a hedge fund this can typically be done within the redemption terms (notice periods, gates); if the position were an illiquid private fund instead, the allocator could use the secondary market to exit, likely at a discount. The decision should follow disciplined criteria (drift, deterioration, key-person risk), not short-term performance.",
        markingGuide: [
          "Identifies style drift and key-person loss from monitoring.",
          "Explains they warrant review and potentially termination.",
          "Addresses exit via redemption terms (or the secondary market for illiquid funds).",
        ],
      },
      {
        id: "caia-l2-m10-p2",
        testPointIds: ["caia-l2-m10-tp4"],
        style: "Constructed-response essay",
        question:
          "A foundation's board wants to expand into complex, illiquid alternatives but meets infrequently, lacks in-house expertise, and requires full-board sign-off on all investments. Assess whether the board should proceed and recommend governance changes.",
        answerPlan: [
          "Diagnose the governance mismatch.",
          "State the guiding principle.",
          "Recommend changes or scope limits.",
        ],
        modelAnswer:
          "The board should not proceed with a complex, illiquid alternatives program under its current governance, because complex, illiquid investing requires timely, expert decisions that a board meeting infrequently, lacking expertise, and requiring full-board sign-off cannot provide — it would miss opportunities and make poorly vetted, poorly monitored commitments. The guiding principle is that program complexity must match governance capacity. To proceed responsibly, the foundation should strengthen governance: delegate investment authority within IPS-defined limits to an empowered internal team or investment committee (able to decide between board meetings), build or hire alternatives expertise, and/or engage a discretionary advisor or outsourced CIO. If it cannot strengthen governance, it should limit the program to simpler, more liquid alternatives that its existing process can oversee.",
        markingGuide: [
          "Diagnoses the speed/expertise/authority mismatch.",
          "States complexity must match governance capacity.",
          "Recommends delegation/expertise/outsourcing or a simpler program.",
        ],
      },
      {
        id: "caia-l2-m10-p3",
        testPointIds: ["caia-l2-m10-tp2", "caia-l2-m10-tp3"],
        style: "Constructed-response essay",
        question:
          "A pension's staff must report its private-markets program to a board and beneficiaries. The managers provide only annual, high-level returns with little position or risk detail. Explain the problems this creates and what the staff should demand and do.",
        answerPlan: [
          "Explain the reporting problem.",
          "State what transparency is needed.",
          "Describe the benchmarking/reporting fix.",
        ],
        modelAnswer:
          "Annual, high-level returns with little position or risk detail make it impossible for the staff to understand or accurately report the program's true risk and performance, to detect deterioration or exposure changes early, or to attribute returns to their sources — undermining both monitoring and honest reporting to the board and beneficiaries. The staff should demand greater transparency: position, exposure, risk, valuation, and fee information sufficient to assess and report the program accurately, and fair, standardised performance presentation (e.g., GIPS-consistent) for comparability. It should benchmark the managers against appropriate peers, vintage-year cohorts, and public-market equivalents rather than a simple index, use ongoing attribution to check the edge persists, and then report to the board and beneficiaries in clear, accurate, non-misleading terms. Managers unwilling to provide adequate transparency should be a cause for concern in monitoring.",
        markingGuide: [
          "Explains inadequate transparency undermines monitoring and reporting.",
          "Demands position/risk/valuation/fee transparency and fair (GIPS-style) presentation.",
          "Describes appropriate benchmarking/attribution and clear stakeholder reporting.",
        ],
      },
    ],
  }),
};
