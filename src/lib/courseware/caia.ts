import type { CoursewareBundle } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * CAIA (Chartered Alternative Investment Analyst) courseware.
 * Level I builds foundational vocabulary and product knowledge; Level II
 * moves to applied portfolio construction, allocation, and manager selection.
 * Module ids follow `${examId}-${levelId}-m${i+1}` and mirror exams.ts topic order.
 */
export const CAIA_COURSEWARE: CoursewareBundle[] = [
  {
    examId: "caia",
    levelId: "l1",
    modules: [
      courseware({
        moduleId: "caia-l1-m1",
        examId: "caia",
        levelId: "l1",
        title: "Professional Standards & Ethics",
        examFormat:
          "Level I: 200 multiple-choice questions across two 2-hour sessions. Ethics is tested as standalone MCQs and embedded in product questions.",
        estimatedStudyHours: 24,
        overview:
          "CAIA adopts the CFA Institute Code of Ethics and Standards of Professional Conduct as its ethical backbone. This module teaches the seven Standards, how to recognise a violation in a short vignette, and why fiduciary behaviour is decisive in illiquid, opaque alternative markets where information asymmetry is high.",
        whyItMatters:
          "Alternatives are private, valuation is often estimated, and clients frequently cannot independently verify what a manager reports. Ethics is therefore not an abstract topic — it is the practical control that protects capital when transparency is low. Ethics questions are a reliable source of marks and often decide borderline passes.",
        learningOutcomes: [
          "State the six components of the Code of Ethics and the seven Standards of Professional Conduct.",
          "Identify the most likely Standard violated when given a short factual scenario.",
          "Distinguish material non-public information from mosaic-theory analysis.",
          "Apply the duty of loyalty, prudence, and care owed to clients versus employers.",
          "Explain fair dealing, suitability, and priority-of-transactions requirements.",
          "Evaluate disclosure obligations for conflicts of interest, referral fees, and compensation.",
          "Recommend compliance procedures a firm should adopt to prevent recurring violations.",
        ],
        syllabusAreas: [
          area(
            "Code of Ethics & professional integrity",
            [
              "Six components of the Code",
              "Acting with integrity, competence, diligence and respect",
              "Placing client interests before employer and self",
            ],
            "20–30%"
          ),
          area(
            "Standards I–IV: professionalism, markets, clients, employers",
            [
              "Knowledge of the law and dealing with violations",
              "Independence and objectivity; gifts and inducements",
              "Misrepresentation and misconduct",
              "Material non-public information and market manipulation",
              "Loyalty, prudence, care; fair dealing; suitability; performance presentation; confidentiality",
              "Duties to employers, additional compensation, supervisory responsibilities",
            ],
            "40–50%"
          ),
          area(
            "Standards V–VII: analysis, conflicts, and CAIA conduct",
            [
              "Diligence and reasonable basis; communication with clients; record retention",
              "Disclosure of conflicts; priority of transactions; referral fees",
              "Conduct as CAIA members and candidates; use of the designation",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m1-l1",
            "The Code of Ethics and the shape of a violation",
            45,
            [
              "Recall the six components of the Code",
              "Recognise the structure of an ethics vignette",
            ],
            [
              "The Code sets aspirational duties: integrity, competence, diligence, respect, and putting clients first.",
              "The Standards operationalise the Code and are what exam questions actually test.",
              "A vignette violation usually turns on one decisive fact — isolate the action, then match to the Standard.",
              "When two Standards seem to apply, choose the most specific one the facts support.",
            ],
            [
              "Which Standard is most directly implicated when an analyst trades ahead of a client order?",
              "What distinguishes an aspirational Code duty from an enforceable Standard?",
            ]
          ),
          lesson(
            "caia-l1-m1-l2",
            "Professionalism and integrity of capital markets",
            50,
            [
              "Apply Standards I and II",
              "Separate legal MNPI from permissible mosaic analysis",
            ],
            [
              "Knowledge of the Law: follow the stricter of applicable law or the Code; dissociate from ongoing violations.",
              "Independence & Objectivity: modest gifts from clients differ from inducements from third parties seeking influence.",
              "Material Non-Public Information: information is material if it would affect price or a reasonable investor's decision.",
              "Mosaic theory permits combining public and non-material non-public pieces into a conclusion.",
            ],
            [
              "Is a lavish trip paid by a rating-seeking issuer acceptable under Independence & Objectivity?",
              "Give an example of mosaic analysis that does not violate the MNPI standard.",
            ],
            "An analyst overhears a CFO confirm an unannounced merger in an elevator. Trading on it violates Standard II(A). But building a thesis from public filings plus a non-material supplier comment is mosaic theory — permissible."
          ),
          lesson(
            "caia-l1-m1-l3",
            "Duties to clients: loyalty, fair dealing, suitability",
            50,
            [
              "Apply Standard III to client-facing conduct",
              "Assess suitability and fair dealing failures",
            ],
            [
              "Loyalty, Prudence & Care: act for the client's benefit; determine who the client is (e.g. fund investors, not the fund sponsor).",
              "Fair Dealing: allocate IPOs, trades, and recommendations fairly across similar clients.",
              "Suitability: understand the client's objectives, constraints, and the role each alternative plays in the total portfolio.",
              "Performance Presentation: fair, accurate, complete — no cherry-picked track records.",
            ],
            [
              "For a pooled hedge fund, who is the 'client' the manager owes loyalty to?",
              "How can a manager present a track record without violating Standard III(D)?",
            ]
          ),
          lesson(
            "caia-l1-m1-l4",
            "Duties to employers and diligence in analysis",
            45,
            [
              "Apply Standards IV and V",
              "Recognise supervisory and record-keeping duties",
            ],
            [
              "Loyalty to Employer: no competing activity that harms the employer without consent; whistleblowing is protected when it serves clients/market integrity.",
              "Additional Compensation Arrangements require written consent from all parties.",
              "Diligence & Reasonable Basis: recommendations must rest on adequate research; reliance on third parties must itself be reasonable.",
              "Record Retention: keep the support for recommendations (typically seven years absent stricter rules).",
            ],
            [
              "When may an employee take steps to prepare a competing business while still employed?",
              "What must an analyst verify before relying on an external research provider?",
            ]
          ),
          lesson(
            "caia-l1-m1-l5",
            "Conflicts, priority of transactions, and CAIA conduct",
            45,
            [
              "Apply Standards VI and VII",
              "Explain proper use of the CAIA designation",
            ],
            [
              "Disclosure of Conflicts: disclose anything that could impair objectivity — ownership, compensation, board seats — prominently and plainly.",
              "Priority of Transactions: clients and employer come before the member's personal trades.",
              "Referral Fees: disclose to clients and employer so they can assess bias.",
              "CAIA conduct: no misrepresentation of the designation; candidates may state candidacy but not imply completion.",
            ],
            [
              "How should a manager disclose ownership of a company it recommends to clients?",
              "Is 'CAIA Level II candidate' an acceptable self-description before passing?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Violation triage: identify the action → identify affected party → match to the most specific Standard.",
          "Materiality test: would the information affect price or a reasonable investor's decision?",
          "Stricter-rule principle: comply with whichever is stricter — local law or the Code and Standards.",
          "Disclosure adequacy: prominent, plain-language, and timely enough for the client to act on it.",
        ],
        commonTraps: [
          "Choosing a plausible but less-specific Standard when a more precise one fits the facts.",
          "Treating all gifts as violations — modest, disclosed client gifts can be acceptable.",
          "Confusing mosaic theory with trading on material non-public information.",
          "Assuming disclosure alone cures a conflict when the underlying action is still prohibited.",
        ],
        examTechnique: [
          "Underline the single decisive action in each vignette before scanning answer choices.",
          "Eliminate answers that describe conduct that is permissible; the question wants the violation.",
          "For 'least likely to violate' phrasing, flip your logic and confirm before answering.",
          "Bank ethics questions early — they are consistent marks under time pressure.",
        ],
        practicePlan: [
          "Week 1: memorise the seven Standards and their sub-parts using active recall.",
          "Week 2: work 60+ vignette MCQs, logging which Standard each tests.",
          "Week 3: drill 'most likely / least likely' phrasing to avoid careless flips.",
          "Ongoing: re-answer every missed ethics question within 48 hours.",
        ],
        furtherReading: [
          "CFA Institute — Standards of Practice Handbook (current edition).",
          "CAIA Association — Level I curriculum, ethics readings.",
          "CAIA Member Code of Conduct.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m2",
        examId: "caia",
        levelId: "l1",
        title: "Introduction to Alternative Investments",
        examFormat:
          "Foundational MCQs on definitions, structures, fees, and taxonomy. High-yield because concepts recur in every later product module.",
        estimatedStudyHours: 22,
        overview:
          "This module frames what makes an investment 'alternative': illiquidity, complexity, limited regulation, unusual return sources, and non-normal return distributions. It covers the major categories, fund structures, fee models, and the incentive alignment issues that define the industry.",
        whyItMatters:
          "Every later CAIA topic assumes fluency in this vocabulary — carried interest, hurdle rates, clawbacks, J-curves, lock-ups. Getting the foundations exact prevents compounding errors across real assets, private equity, and hedge funds.",
        learningOutcomes: [
          "Define the characteristics that distinguish alternatives from traditional assets.",
          "Classify alternatives into real assets, private equity, private debt, hedge funds, structured products, and digital assets.",
          "Explain limited partnership structure and the LP/GP relationship.",
          "Compute management fees, carried interest, hurdle rates, and clawback effects.",
          "Describe the return distribution features (skewness, kurtosis, autocorrelation) common to alternatives.",
          "Discuss liquidity, transparency, and regulatory differences versus mutual funds.",
          "Explain incentive alignment mechanisms and their limitations.",
        ],
        syllabusAreas: [
          area(
            "Taxonomy and characteristics",
            [
              "Illiquidity, complexity, non-normal returns",
              "Return sources: risk premia, illiquidity premia, skill (alpha)",
              "Categories and their defining features",
            ],
            "30–35%"
          ),
          area(
            "Fund structures and terms",
            [
              "Limited partnership; GP/LP roles",
              "Lock-ups, gates, side pockets, redemption terms",
              "Master-feeder and fund-of-funds structures",
            ],
            "30–35%"
          ),
          area(
            "Fees and alignment",
            [
              "Management and incentive fees; hurdle rates and high-water marks",
              "Carried interest, catch-up, and clawback",
              "Alignment mechanisms and agency conflicts",
            ],
            "30–40%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m2-l1",
            "What makes an asset 'alternative'",
            45,
            [
              "List defining characteristics",
              "Map return sources to categories",
            ],
            [
              "Alternatives share illiquidity, complexity, limited regulation, and non-normal returns.",
              "Returns come from risk premia, illiquidity premia, and manager skill (alpha).",
              "Reported returns are often smoothed by stale/appraisal-based valuations, understating true risk.",
              "Diversification benefits partly reflect this smoothing rather than genuine low correlation.",
            ],
            [
              "Why might reported correlations of private assets understate true risk?",
              "Name three sources of return in alternative strategies.",
            ]
          ),
          lesson(
            "caia-l1-m2-l2",
            "Limited partnerships and fund structures",
            50,
            [
              "Explain GP/LP roles",
              "Describe liquidity-management tools",
            ],
            [
              "GP manages and bears unlimited liability; LPs are passive with liability limited to committed capital.",
              "Commitments are drawn via capital calls over an investment period; distributions return capital and gains.",
              "Lock-ups, gates, and side pockets manage redemption pressure in hedge funds.",
              "Master-feeder pools onshore/offshore investors; fund-of-funds adds a diversification and access layer with a second fee.",
            ],
            [
              "What is the difference between committed and called capital?",
              "When would a manager use a side pocket?",
            ]
          ),
          lesson(
            "caia-l1-m2-l3",
            "Fees: management, incentive, hurdles, and high-water marks",
            55,
            [
              "Compute layered fees",
              "Explain high-water marks and hurdles",
            ],
            [
              "'2 and 20' = 2% management fee plus 20% of profits (incentive/carry).",
              "A high-water mark prevents charging incentive fees until prior losses are recovered.",
              "A hurdle rate requires a minimum return before incentive fees apply; hard vs soft hurdles differ in whether carry applies to the whole gain once the hurdle is cleared.",
              "Fee drag compounds; fund-of-funds create a double fee layer.",
            ],
            [
              "How does a high-water mark protect an investor after a drawdown?",
              "Distinguish a hard hurdle from a soft hurdle.",
            ],
            "A fund earns 15% gross with a 6% soft hurdle and 20% carry with full catch-up. Because the soft hurdle is cleared, carry applies to the entire 15% gain (subject to catch-up), not just the excess over 6%."
          ),
          lesson(
            "caia-l1-m2-l4",
            "Carried interest, catch-up, and clawback",
            50,
            [
              "Compute carry with catch-up",
              "Explain clawback provisions",
            ],
            [
              "Distribution waterfall: return of capital → preferred return → GP catch-up → carry split.",
              "Catch-up lets the GP receive a larger share until its carry equals the target percentage of total profit above the return of capital.",
              "Clawback returns excess carry to LPs if later losses mean the GP was overpaid.",
              "Deal-by-deal (American) waterfalls pay carry earlier and raise clawback risk versus whole-fund (European).",
            ],
            [
              "Why does a deal-by-deal waterfall increase clawback risk?",
              "What does a GP catch-up accomplish?",
            ]
          ),
          lesson(
            "caia-l1-m2-l5",
            "Return distributions and their statistics",
            45,
            [
              "Interpret skewness and kurtosis",
              "Recognise autocorrelation from smoothing",
            ],
            [
              "Many alternatives show negative skew (occasional large losses) and excess kurtosis (fat tails).",
              "Appraisal-based valuations create positive autocorrelation, understating volatility and beta.",
              "Standard mean-variance tools understate tail risk when returns are non-normal.",
              "Downside measures (VaR, expected shortfall, drawdown) supplement standard deviation.",
            ],
            [
              "Why is standard deviation an incomplete risk measure for hedge funds?",
              "What does positive autocorrelation of returns imply about reported volatility?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Distribution waterfall: return of capital → preferred/hurdle → GP catch-up → carry split.",
          "Incentive fee = carry% × profit above high-water mark (and above hurdle if applicable).",
          "Net return ≈ gross − management fee − incentive fee − fund-of-funds layer.",
          "Skewness and excess kurtosis characterise non-normal alternative returns.",
        ],
        commonTraps: [
          "Applying carry to gains below a hard hurdle.",
          "Ignoring the high-water mark after a drawdown when computing incentive fees.",
          "Treating smoothed, appraisal-based volatility as the true risk of an asset.",
          "Confusing committed with called (invested) capital.",
        ],
        examTechnique: [
          "Draw the waterfall in order before computing any carry figure.",
          "Check whether a hurdle is hard or soft before allocating profit.",
          "For statistics questions, connect the number to an investor implication, not just the definition.",
        ],
        practicePlan: [
          "Week 1: master the taxonomy and fund structures with flashcards.",
          "Week 2: work 20+ fee and waterfall computation problems.",
          "Week 3: interpret distribution statistics in mixed MCQs.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Introduction to Alternative Investments.",
          "CAIA — CAIA Level I: An Introduction to Core Topics in Alternative Investments.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m3",
        examId: "caia",
        levelId: "l1",
        title: "Real Assets — real estate, infrastructure, natural resources",
        examFormat:
          "MCQs on property types, valuation, infrastructure risk profiles, commodities, and inflation linkage.",
        estimatedStudyHours: 24,
        overview:
          "Real assets are tangible, often inflation-linked investments spanning real estate, infrastructure, natural resources, and commodities. This module covers their cash-flow drivers, valuation methods, risk profiles, and role in a diversified portfolio.",
        whyItMatters:
          "Real assets anchor liability-driven and inflation-sensitive portfolios for pensions and endowments. Understanding valuation and the illiquidity/appraisal issues here is essential for both the exam and real allocation decisions.",
        learningOutcomes: [
          "Classify real estate by property type, core–opportunistic style, and public vs private access.",
          "Apply income, cost, and sales-comparison valuation approaches to property.",
          "Explain cap rates, NOI, and the drivers of real estate returns.",
          "Describe infrastructure sectors and their brownfield vs greenfield risk profiles.",
          "Analyse commodity return components: spot, roll yield, and collateral yield.",
          "Evaluate the inflation-hedging characteristics of real assets.",
        ],
        syllabusAreas: [
          area(
            "Real estate",
            [
              "Property types and investment styles (core to opportunistic)",
              "Private equity real estate, REITs, and CMBS",
              "Valuation: income (DCF/cap rate), cost, sales comparison",
            ],
            "40–45%"
          ),
          area(
            "Infrastructure",
            [
              "Economic vs social infrastructure",
              "Greenfield vs brownfield; availability vs demand risk",
              "Regulated returns and long-duration cash flows",
            ],
            "25–30%"
          ),
          area(
            "Natural resources & commodities",
            [
              "Timber, farmland, energy, and metals",
              "Spot, roll, and collateral yield in futures-based exposure",
              "Inflation linkage and diversification",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m3-l1",
            "Real estate types, styles, and access routes",
            50,
            ["Classify property and style", "Compare public vs private access"],
            [
              "Property types: office, retail, industrial/logistics, residential/multifamily, hospitality, and specialty.",
              "Styles range from core (stable, income-led) to value-add and opportunistic (development, higher leverage).",
              "Access via direct ownership, private funds, listed REITs, and CMBS.",
              "REITs offer liquidity and price discovery but higher short-run equity-market correlation.",
            ],
            [
              "How does a core strategy differ from opportunistic in leverage and return source?",
              "Why do REIT returns correlate more with equities than direct property in the short run?",
            ]
          ),
          lesson(
            "caia-l1-m3-l2",
            "Property valuation and cap rates",
            55,
            ["Apply the three valuation approaches", "Use NOI and cap rate"],
            [
              "Income approach: value = NOI ÷ cap rate, or a full DCF of net cash flows plus terminal value.",
              "Cost approach: replacement cost less depreciation plus land — useful for special-use property.",
              "Sales comparison: adjust recent comparable transactions for differences.",
              "Cap rate falls as growth expectations rise or required returns fall, pushing value up.",
            ],
            [
              "If NOI is 5m and the cap rate is 5%, what is the implied value?",
              "What causes cap rate compression?",
            ],
            "A stabilised asset has NOI of $6m. At a 6% cap rate its value is $100m; if cap rates compress to 5%, value rises to $120m — showing how sensitive valuation is to the discount rate."
          ),
          lesson(
            "caia-l1-m3-l3",
            "Infrastructure investing",
            50,
            ["Distinguish infrastructure sectors", "Assess risk profiles"],
            [
              "Economic infrastructure: transport, utilities, energy, telecom; social: schools, hospitals.",
              "Brownfield (existing, cash-flowing) is lower risk than greenfield (construction, ramp-up).",
              "Availability-based revenue is more stable than demand/usage-based revenue.",
              "Regulated assets have long-duration, often inflation-linked cash flows attractive to liability matchers.",
            ],
            [
              "Why is availability-based revenue lower risk than demand-based?",
              "What makes brownfield less risky than greenfield?",
            ]
          ),
          lesson(
            "caia-l1-m3-l4",
            "Natural resources: timber, farmland, energy, metals",
            45,
            ["Describe resource sub-classes", "Explain their cash-flow drivers"],
            [
              "Timber returns come from biological growth, price, and land appreciation, with harvest-timing flexibility.",
              "Farmland returns combine crop income (or rent) with land value appreciation.",
              "Energy and metals span upstream production to processing, with commodity-price beta.",
              "These assets often provide inflation linkage but carry operational and ESG risks.",
            ],
            [
              "What are the three return drivers of timberland?",
              "Why does harvest flexibility reduce timberland risk?",
            ]
          ),
          lesson(
            "caia-l1-m3-l5",
            "Commodity futures return decomposition and inflation hedging",
            50,
            ["Decompose commodity return", "Evaluate inflation hedging"],
            [
              "Futures-based commodity return = spot return + roll yield + collateral yield.",
              "Backwardation gives positive roll yield; contango gives negative roll yield.",
              "Commodities and real assets generally hedge unexpected inflation better than nominal bonds.",
              "Correlations rise in crises, limiting diversification exactly when it is most wanted.",
            ],
            [
              "How does contango erode a long commodity futures position?",
              "Which return component reflects the risk-free rate on posted collateral?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Value = NOI ÷ cap rate (direct capitalisation).",
          "Cap rate ≈ discount rate − growth (Gordon-style intuition).",
          "Commodity futures return = spot + roll yield + collateral yield.",
          "Roll yield > 0 in backwardation; < 0 in contango.",
        ],
        commonTraps: [
          "Confusing cap rate direction — lower cap rates mean higher values.",
          "Assuming REITs behave like direct property over short horizons.",
          "Treating contango as beneficial to long futures holders.",
          "Overstating diversification when crisis correlations spike.",
        ],
        examTechnique: [
          "For valuation MCQs, identify whether income, cost, or comparison is most appropriate for the asset type.",
          "Decompose commodity returns into the three components before answering.",
          "Link each real-asset feature to its inflation and diversification implication.",
        ],
        practicePlan: [
          "Week 1: property types, styles, and the three valuation approaches.",
          "Week 2: infrastructure risk profiles and cap-rate computations.",
          "Week 3: commodity return decomposition and inflation-hedge MCQs.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Real Assets.",
          "NCREIF and industry primers on real estate and infrastructure returns.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m4",
        examId: "caia",
        levelId: "l1",
        title: "Private Equity — venture capital & buyouts",
        examFormat:
          "MCQs on PE structures, value creation, LBO mechanics, J-curve, and performance metrics (IRR, MOIC, PME).",
        estimatedStudyHours: 24,
        overview:
          "Private equity spans venture capital (early-stage growth) and buyouts (control of mature companies using leverage). This module covers deal structures, value-creation levers, the J-curve, and how PE performance is measured and benchmarked.",
        whyItMatters:
          "PE is a core alternatives allocation and a heavily tested topic. Understanding IRR versus multiples, the J-curve, and PME comparisons is essential to judging manager skill versus luck and leverage.",
        learningOutcomes: [
          "Distinguish venture capital, growth equity, and buyout strategies.",
          "Explain the LBO value-creation levers: leverage, operational improvement, and multiple expansion.",
          "Describe the J-curve and its effect on early-life reported returns.",
          "Compute and interpret IRR, MOIC/TVPI, DPI, and RVPI.",
          "Apply public market equivalent (PME) analysis to benchmark PE.",
          "Explain vintage-year diversification and commitment pacing.",
        ],
        syllabusAreas: [
          area(
            "Strategies and structures",
            [
              "Venture capital and staged financing",
              "Growth equity and buyouts",
              "Fund life cycle: fundraising, investing, harvesting",
            ],
            "30–35%"
          ),
          area(
            "Value creation and LBO mechanics",
            [
              "Leverage, operational improvement, multiple expansion",
              "Debt capacity, covenants, and exit routes",
              "Governance and alignment in portfolio companies",
            ],
            "30–35%"
          ),
          area(
            "Performance measurement",
            [
              "IRR vs MOIC/TVPI, DPI, RVPI",
              "J-curve and cash-flow timing",
              "PME and vintage-year benchmarking",
            ],
            "30–40%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m4-l1",
            "Venture capital and staged financing",
            45,
            ["Describe VC stages", "Explain staged financing and dilution"],
            [
              "VC funds early-stage companies through seed, Series A/B/C rounds with milestone-based capital.",
              "Staging preserves optionality — capital is committed as risk is retired.",
              "Returns are highly skewed: a few winners drive fund performance (power-law outcomes).",
              "Liquidation preferences and anti-dilution terms protect investors on downside and down-rounds.",
            ],
            [
              "Why is staged financing valuable to a VC investor?",
              "What does a power-law return distribution imply for VC portfolio size?",
            ]
          ),
          lesson(
            "caia-l1-m4-l2",
            "Buyouts and LBO value creation",
            55,
            ["Identify LBO return levers", "Explain debt's role"],
            [
              "Three levers: deleveraging (debt paydown), operational improvement (EBITDA growth), and multiple expansion.",
              "Leverage amplifies equity returns but increases financial risk and distress probability.",
              "Exit routes: strategic sale, secondary buyout, or IPO.",
              "Alignment via management equity and board control drives operational change.",
            ],
            [
              "Which value lever is most within a GP's control?",
              "How does leverage magnify both returns and risk?",
            ],
            "A buyout enters at 8x EBITDA with $100 EBITDA and 60% debt. If EBITDA grows to $130 and it exits at 9x with debt paid down, equity value rises from both EBITDA growth and multiple expansion plus deleveraging — the classic three-lever story."
          ),
          lesson(
            "caia-l1-m4-l3",
            "The J-curve and fund cash flows",
            45,
            ["Explain the J-curve", "Interpret early negative IRR"],
            [
              "Early fees and unrealised markdowns produce negative early returns — the bottom of the J.",
              "As investments mature and exit, distributions lift the curve into positive territory.",
              "Reported early IRRs are unreliable indicators of final performance.",
              "Secondary purchases and co-investments can mitigate the J-curve.",
            ],
            [
              "Why is a fund's Year-2 IRR a poor predictor of final return?",
              "How can an LP soften the J-curve?",
            ]
          ),
          lesson(
            "caia-l1-m4-l4",
            "Performance metrics: IRR, MOIC, DPI, RVPI",
            55,
            ["Compute and interpret PE metrics", "Distinguish realised from unrealised"],
            [
              "IRR is money-weighted and sensitive to cash-flow timing and early distributions.",
              "MOIC/TVPI = (distributions + residual value) ÷ paid-in; ignores timing.",
              "DPI measures realised cash returned; RVPI measures unrealised residual value.",
              "Use IRR and multiples together — high IRR with low multiple can reflect quick small wins.",
            ],
            [
              "How can a fund show a high IRR but a modest MOIC?",
              "What does DPI tell you that TVPI does not?",
            ]
          ),
          lesson(
            "caia-l1-m4-l5",
            "PME, vintage years, and commitment pacing",
            50,
            ["Apply PME benchmarking", "Explain vintage diversification"],
            [
              "PME compares PE cash flows against investing the same flows in a public index.",
              "PME > 1 (or IRR > public equivalent) suggests outperformance versus liquid markets.",
              "Vintage-year diversification spreads entry-point and exit-environment risk.",
              "Commitment pacing manages the gap between committed and invested capital over time.",
            ],
            [
              "What does a PME above 1.0 indicate?",
              "Why diversify across vintage years?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "TVPI (MOIC) = (cumulative distributions + residual value) ÷ paid-in capital.",
          "DPI = distributions ÷ paid-in; RVPI = residual value ÷ paid-in; TVPI = DPI + RVPI.",
          "IRR: money-weighted return solving NPV = 0.",
          "LBO value bridge: deleveraging + EBITDA growth + multiple expansion.",
        ],
        commonTraps: [
          "Trusting early-life IRR before meaningful realisations (J-curve).",
          "Confusing money-weighted IRR with time-weighted returns.",
          "Reading a high IRR as high total value creation without checking the multiple.",
          "Ignoring vintage-year effects when comparing funds.",
        ],
        examTechnique: [
          "Split TVPI into DPI and RVPI to see how much value is realised.",
          "When timing matters, expect IRR; when it does not, expect a multiple.",
          "For LBO questions, isolate which of the three levers the scenario changes.",
        ],
        practicePlan: [
          "Week 1: strategies and LBO value creation.",
          "Week 2: metric computations (IRR, TVPI, DPI, RVPI).",
          "Week 3: PME and vintage-year MCQs.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Private Equity.",
          "ILPA reporting and performance measurement guidance.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m5",
        examId: "caia",
        levelId: "l1",
        title: "Private Debt & Direct Lending",
        examFormat:
          "MCQs on private credit strategies, seniority, covenants, and risk/return versus public credit.",
        estimatedStudyHours: 20,
        overview:
          "Private debt provides loans to companies outside public markets, ranging from senior direct lending to mezzanine and distressed credit. This module covers the capital structure, covenants, illiquidity premium, and default/recovery dynamics.",
        whyItMatters:
          "Private credit has grown rapidly as banks retrench. CAIA tests the seniority ladder, covenant protection, and how illiquidity and complexity are compensated — core to judging risk-adjusted return.",
        learningOutcomes: [
          "Distinguish direct lending, mezzanine, distressed, and specialty finance strategies.",
          "Explain seniority, security, and their effect on recovery rates.",
          "Describe covenant types and covenant-lite risks.",
          "Analyse the illiquidity premium and floating-rate features of private loans.",
          "Evaluate default probability, loss given default, and recovery.",
          "Compare private debt risk/return with public high yield and loans.",
        ],
        syllabusAreas: [
          area(
            "Strategies and the capital stack",
            [
              "Senior direct lending, unitranche, mezzanine",
              "Distressed debt and special situations",
              "Seniority, security, and subordination",
            ],
            "35–40%"
          ),
          area(
            "Credit protection and structure",
            [
              "Maintenance vs incurrence covenants; covenant-lite",
              "Floating-rate coupons and rate sensitivity",
              "Loan documentation and lender rights",
            ],
            "30–35%"
          ),
          area(
            "Risk, return, and recovery",
            [
              "Default probability and loss given default",
              "Recovery by seniority; illiquidity premium",
              "Comparison with public credit",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m5-l1",
            "Private debt strategies and the capital stack",
            50,
            ["Map strategies to the capital stack", "Explain risk/return by tranche"],
            [
              "Senior secured direct lending sits highest in the stack with first claim on assets.",
              "Unitranche blends senior and subordinated into one instrument at a blended rate.",
              "Mezzanine is subordinated, often with equity warrants for extra upside.",
              "Distressed debt targets stressed/defaulted issuers, sometimes as a route to control.",
            ],
            [
              "Where does mezzanine sit relative to senior secured debt?",
              "Why might a lender accept warrants on a mezzanine loan?",
            ]
          ),
          lesson(
            "caia-l1-m5-l2",
            "Seniority, security, and recovery",
            45,
            ["Rank claims", "Link seniority to recovery"],
            [
              "Priority: secured senior → unsecured senior → subordinated → preferred → common equity.",
              "Security (collateral) raises recovery in default.",
              "Recovery rates fall as you move down the stack.",
              "Structural subordination arises when debt sits at a holding company above operating assets.",
            ],
            [
              "Why do senior secured lenders recover more than subordinated lenders?",
              "What is structural subordination?",
            ]
          ),
          lesson(
            "caia-l1-m5-l3",
            "Covenants and lender protection",
            45,
            ["Distinguish covenant types", "Assess covenant-lite risk"],
            [
              "Maintenance covenants are tested periodically; incurrence covenants only on specific actions.",
              "Covenant-lite loans lack maintenance tests, delaying lender intervention.",
              "Weaker covenants can lower recovery and raise loss given default.",
              "Documentation quality is a key diligence item in private credit.",
            ],
            [
              "How does covenant-lite structure affect lender protection?",
              "When is an incurrence covenant tested?",
            ]
          ),
          lesson(
            "caia-l1-m5-l4",
            "Floating rates and the illiquidity premium",
            45,
            ["Explain rate sensitivity", "Quantify illiquidity compensation"],
            [
              "Most direct loans are floating-rate (reference rate + spread), reducing duration risk.",
              "Investors earn an illiquidity premium plus a complexity/origination premium over public credit.",
              "Rising rates raise coupon income but can pressure borrower coverage ratios.",
              "Private marks are less volatile than public spreads, partly due to appraisal smoothing.",
            ],
            [
              "Why do floating-rate loans have low duration?",
              "What risks accompany the illiquidity premium?",
            ]
          ),
          lesson(
            "caia-l1-m5-l5",
            "Default, loss given default, and public comparison",
            45,
            ["Compute expected loss", "Compare with public credit"],
            [
              "Expected loss ≈ probability of default × loss given default × exposure.",
              "LGD = 1 − recovery rate; higher seniority and security lower LGD.",
              "Private loans may carry higher gross yields but less liquidity and price transparency than public high yield.",
              "Manager sourcing and workout skill materially affect realised losses.",
            ],
            [
              "If PD is 4% and recovery is 60%, what is expected loss on $100?",
              "How does private debt liquidity differ from public high yield?",
            ],
            "With PD = 4%, recovery = 60% (LGD = 40%), expected loss on $100 exposure ≈ 0.04 × 0.40 × 100 = $1.60, before considering sourcing and workout skill."
          ),
        ],
        frameworksAndFormulas: [
          "Expected loss = PD × LGD × exposure.",
          "LGD = 1 − recovery rate.",
          "Priority ladder: secured senior → unsecured senior → subordinated → equity.",
          "Loan yield ≈ reference rate + credit spread + illiquidity/complexity premium.",
        ],
        commonTraps: [
          "Assuming private marks reflect true volatility (they are smoothed).",
          "Ignoring covenant quality when assessing downside protection.",
          "Treating floating-rate loans as free of credit risk.",
          "Confusing structural with contractual subordination.",
        ],
        examTechnique: [
          "Always place the instrument in the capital stack first.",
          "For expected-loss questions, separate PD and LGD explicitly.",
          "Tie covenant type to timing of lender intervention.",
        ],
        practicePlan: [
          "Week 1: strategies, seniority, and recovery.",
          "Week 2: covenants and floating-rate mechanics.",
          "Week 3: expected-loss computations and public comparison.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Private Debt.",
          "Industry primers on direct lending and covenant trends.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m6",
        examId: "caia",
        levelId: "l1",
        title: "Hedge Funds — strategies & structures",
        examFormat:
          "MCQs on strategy classification, return drivers, leverage, and structure. One of the most heavily tested L1 areas.",
        estimatedStudyHours: 26,
        overview:
          "Hedge funds pursue absolute returns using long/short positioning, leverage, and derivatives across equity, event, relative-value, and macro strategies. This module classifies strategies, explains their return drivers and risks, and covers structural features like prime brokerage and liquidity terms.",
        whyItMatters:
          "Hedge funds are central to CAIA and to institutional alternatives. Recognising a strategy from its exposures, and understanding its tail risks, is repeatedly tested and vital in practice.",
        learningOutcomes: [
          "Classify hedge fund strategies into equity, event-driven, relative-value, and macro/managed-futures.",
          "Explain the return drivers and typical risks of each strategy.",
          "Describe leverage, short selling, and prime-brokerage mechanics.",
          "Analyse liquidity terms: lock-ups, gates, notice periods, side pockets.",
          "Interpret hedge fund performance measures and biases in indices.",
          "Evaluate tail-risk and crowding concerns across strategies.",
        ],
        syllabusAreas: [
          area(
            "Equity and event-driven strategies",
            [
              "Long/short equity, market neutral, short bias",
              "Merger arbitrage, distressed, activist, special situations",
              "Beta management and idiosyncratic risk",
            ],
            "30–35%"
          ),
          area(
            "Relative-value and macro",
            [
              "Fixed-income arbitrage, convertible arbitrage, volatility",
              "Global macro and managed futures/CTAs",
              "Carry, momentum, and mean-reversion drivers",
            ],
            "30–35%"
          ),
          area(
            "Structure and measurement",
            [
              "Prime brokerage, leverage, margin",
              "Liquidity terms and investor protections",
              "Index biases: survivorship, backfill, selection",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m6-l1",
            "Equity hedge fund strategies",
            50,
            ["Classify equity strategies", "Separate alpha from beta"],
            [
              "Long/short equity varies net exposure; market neutral targets ~zero beta to isolate alpha.",
              "Short bias profits from declines and hedging but suffers in bull markets.",
              "Returns mix stock selection (alpha) with residual market beta and factor tilts.",
              "Crowding into popular longs/shorts creates correlated de-risking events.",
            ],
            [
              "How does market-neutral differ from long/short in beta exposure?",
              "Why is crowding a hidden risk in equity long/short?",
            ]
          ),
          lesson(
            "caia-l1-m6-l2",
            "Event-driven strategies",
            50,
            ["Explain merger arb and distressed", "Identify event risks"],
            [
              "Merger arbitrage captures the spread between deal price and market price, risking deal break.",
              "Distressed investing buys stressed securities anticipating restructuring or recovery.",
              "Activists take stakes to force strategic or governance change.",
              "Event strategies carry binary, deal-specific risks that spike in downturns.",
            ],
            [
              "What risk does a merger-arbitrage spread compensate for?",
              "Why can event-driven returns look like short volatility?",
            ]
          ),
          lesson(
            "caia-l1-m6-l3",
            "Relative-value strategies",
            50,
            ["Explain arbitrage sub-strategies", "Recognise tail risk"],
            [
              "Fixed-income and convertible arbitrage exploit small mispricings with high leverage.",
              "Volatility strategies trade implied vs realised volatility.",
              "Returns often resemble selling insurance — steady gains with occasional large losses.",
              "Leverage magnifies both the small edge and the tail losses.",
            ],
            [
              "Why do relative-value returns often exhibit negative skew?",
              "How does leverage interact with a small pricing edge?",
            ]
          ),
          lesson(
            "caia-l1-m6-l4",
            "Global macro and managed futures",
            45,
            ["Describe macro/CTA drivers", "Explain crisis behaviour"],
            [
              "Global macro takes directional views on rates, FX, equities, and commodities.",
              "Managed futures/CTAs are typically systematic trend-followers across many markets.",
              "Trend strategies often provide 'crisis alpha' when sustained trends develop in drawdowns.",
              "They can suffer in choppy, trendless, mean-reverting markets.",
            ],
            [
              "Why can managed futures diversify equity risk in crises?",
              "In what environment do trend-followers struggle?",
            ]
          ),
          lesson(
            "caia-l1-m6-l5",
            "Structure, liquidity terms, and index biases",
            50,
            ["Explain prime brokerage and leverage", "Adjust for index biases"],
            [
              "Prime brokers provide financing, securities lending, and custody enabling leverage and shorting.",
              "Lock-ups, gates, notice periods, and side pockets align fund liquidity with asset liquidity.",
              "Hedge fund indices suffer survivorship, backfill, and selection biases that inflate reported returns.",
              "Self-reporting makes index returns an imperfect performance benchmark.",
            ],
            [
              "How do backfill and survivorship bias distort index returns upward?",
              "Why do managers use gates during redemption surges?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Net exposure = long − short; gross exposure = long + short (leverage indicator).",
          "Merger-arb return ≈ deal spread × probability of completion − loss × break probability.",
          "Beta decomposition: total return = alpha + Σ(factor betas × factor returns).",
          "Index bias adjustments: reduce reported returns for survivorship and backfill.",
        ],
        commonTraps: [
          "Equating market-neutral with risk-free — factor and financing risks remain.",
          "Ignoring negative skew and tail risk in relative-value strategies.",
          "Taking hedge fund index returns at face value despite biases.",
          "Assuming trend-following always hedges equity drawdowns.",
        ],
        examTechnique: [
          "Identify a strategy from its exposures and payoff shape, not its label.",
          "Ask 'what is this strategy short?' to reveal hidden tail risk.",
          "Flag index-bias questions and pick the answer that lowers reported returns.",
        ],
        practicePlan: [
          "Week 1: classify all strategies from exposure descriptions.",
          "Week 2: payoff shapes, skew, and tail risk.",
          "Week 3: structure, liquidity terms, and index biases.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Hedge Funds.",
          "Industry literature on hedge fund index construction biases.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m7",
        examId: "caia",
        levelId: "l1",
        title: "Digital Assets & crypto markets",
        examFormat:
          "MCQs on blockchain basics, token types, custody, valuation challenges, and market structure.",
        estimatedStudyHours: 18,
        overview:
          "Digital assets are a newer CAIA topic covering blockchain fundamentals, cryptocurrencies, tokens, stablecoins, and DeFi. This module explains the technology, market structure, custody and regulatory risks, and the challenges of valuation.",
        whyItMatters:
          "Institutional interest in digital assets is rising, and CAIA now expects candidates to understand the mechanics and risks. The topic rewards clear grasp of custody, consensus, and valuation limitations.",
        learningOutcomes: [
          "Explain blockchain, distributed ledgers, and consensus mechanisms.",
          "Classify tokens: payment coins, utility tokens, security tokens, and stablecoins.",
          "Describe custody models and their operational risks.",
          "Discuss market structure: exchanges, on/off-chain, and liquidity.",
          "Evaluate valuation frameworks and their limitations for crypto assets.",
          "Assess regulatory, security, and concentration risks.",
        ],
        syllabusAreas: [
          area(
            "Technology foundations",
            [
              "Blockchain and distributed ledgers",
              "Proof-of-work vs proof-of-stake consensus",
              "Smart contracts and DeFi basics",
            ],
            "30–35%"
          ),
          area(
            "Assets and market structure",
            [
              "Coins, utility/security tokens, stablecoins",
              "Exchanges, custody, and settlement",
              "Liquidity and market fragmentation",
            ],
            "30–35%"
          ),
          area(
            "Valuation and risk",
            [
              "Network-value and cost frameworks",
              "Volatility and tail risk",
              "Regulatory, security, and custody risk",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m7-l1",
            "Blockchain and consensus",
            45,
            ["Explain distributed ledgers", "Compare consensus mechanisms"],
            [
              "A blockchain is an append-only, cryptographically linked ledger validated by a network.",
              "Proof-of-work uses computational competition; proof-of-stake uses economic stake.",
              "Immutability and decentralisation reduce single-point trust but raise governance questions.",
              "Public, permissionless chains differ from private, permissioned ledgers.",
            ],
            [
              "How does proof-of-stake differ from proof-of-work?",
              "What does immutability provide and cost?",
            ]
          ),
          lesson(
            "caia-l1-m7-l2",
            "Token taxonomy",
            45,
            ["Classify token types", "Explain stablecoin mechanisms"],
            [
              "Payment coins (e.g. bitcoin) function as money/store of value.",
              "Utility tokens grant access to a network's services; security tokens represent investment contracts.",
              "Stablecoins peg to fiat via reserves (fiat-backed) or algorithms (higher de-peg risk).",
              "Legal classification (e.g. security vs commodity) drives regulatory treatment.",
            ],
            [
              "What distinguishes a utility token from a security token?",
              "Why are algorithmic stablecoins riskier than fully reserved ones?",
            ]
          ),
          lesson(
            "caia-l1-m7-l3",
            "Custody, exchanges, and market structure",
            45,
            ["Explain custody models", "Describe market fragmentation"],
            [
              "Self-custody (private keys) vs third-party/qualified custodians trade convenience for control.",
              "Loss or theft of private keys is irreversible — key management is central to operational risk.",
              "Liquidity is fragmented across many exchanges with varying quality and counterparty risk.",
              "Settlement can be near-instant on-chain but off-exchange failures still occur.",
            ],
            [
              "Why is private-key management the core operational risk?",
              "How does market fragmentation affect execution?",
            ]
          ),
          lesson(
            "caia-l1-m7-l4",
            "Valuation frameworks and their limits",
            45,
            ["Apply valuation approaches", "Explain their weaknesses"],
            [
              "Network-value approaches (e.g. Metcalfe-style, NVT ratios) tie value to adoption/usage.",
              "Cost-of-production frameworks relate price to mining cost, mainly for PoW coins.",
              "No cash flows for many tokens makes traditional DCF inapplicable.",
              "Extreme volatility and reflexivity limit the reliability of any single model.",
            ],
            [
              "Why is DCF hard to apply to most crypto assets?",
              "What does an NVT ratio attempt to capture?",
            ]
          ),
          lesson(
            "caia-l1-m7-l5",
            "Risks: regulatory, security, and concentration",
            40,
            ["Assess digital-asset risks", "Discuss portfolio role"],
            [
              "Regulatory uncertainty can rapidly change legality, access, and taxation.",
              "Smart-contract bugs, hacks, and bridge exploits are recurring security risks.",
              "Ownership and mining/validation can be concentrated, creating governance and manipulation risk.",
              "Low but unstable correlations mean diversification benefits are uncertain.",
            ],
            [
              "Why is regulatory risk elevated for digital assets?",
              "How does concentration create governance risk?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "NVT ratio = network value ÷ transaction volume (valuation heuristic).",
          "Metcalfe intuition: network value scales with the square of active users.",
          "Custody trade-off: control (self-custody) vs operational safeguards (qualified custodian).",
          "Stablecoin integrity = quality and transparency of backing reserves.",
        ],
        commonTraps: [
          "Assuming all stablecoins are equally safe regardless of backing.",
          "Applying DCF to non-cash-flow tokens.",
          "Treating custody as trivial rather than the central operational risk.",
          "Overstating diversification from unstable crypto correlations.",
        ],
        examTechnique: [
          "Anchor answers in mechanics (consensus, custody) rather than price narratives.",
          "For valuation questions, prefer answers acknowledging model limitations.",
          "Match token type to its correct regulatory implication.",
        ],
        practicePlan: [
          "Week 1: blockchain, consensus, and token taxonomy.",
          "Week 2: custody, market structure, and valuation.",
          "Week 3: risk-focused MCQs and portfolio-role questions.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Digital Assets.",
          "Regulatory guidance on digital-asset classification.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m8",
        examId: "caia",
        levelId: "l1",
        title: "Structured Products — MBS, ABS & credit structures",
        examFormat:
          "MCQs on securitisation mechanics, tranching, prepayment, and CDO/CLO structures.",
        estimatedStudyHours: 22,
        overview:
          "Structured products repackage cash flows from pools of assets into tranches with different risk/return profiles. This module covers securitisation mechanics, MBS prepayment risk, ABS, and CDO/CLO structures including credit enhancement and the waterfall.",
        whyItMatters:
          "Securitisation is complex and error-prone, and its failures were central to the 2008 crisis. CAIA tests the mechanics of tranching, subordination, and prepayment, which are essential to understanding credit structuring.",
        learningOutcomes: [
          "Explain the securitisation process and the role of the SPV.",
          "Describe tranching, subordination, and credit enhancement.",
          "Analyse prepayment and extension risk in mortgage-backed securities.",
          "Distinguish ABS collateral types and their risks.",
          "Explain CDO/CLO structures and the cash-flow waterfall.",
          "Evaluate model, correlation, and rating risks in structured credit.",
        ],
        syllabusAreas: [
          area(
            "Securitisation mechanics",
            [
              "Originate-to-distribute and the SPV",
              "Tranching and the waterfall",
              "Credit enhancement: subordination, overcollateralisation, excess spread",
            ],
            "35–40%"
          ),
          area(
            "MBS and ABS",
            [
              "Agency vs non-agency MBS; CMOs",
              "Prepayment and extension risk",
              "ABS collateral: auto, cards, student loans",
            ],
            "30–35%"
          ),
          area(
            "CDOs/CLOs and structured credit risk",
            [
              "Cash vs synthetic CDOs; CLOs",
              "Correlation and tranche sensitivity",
              "Rating and model risk",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m8-l1",
            "Securitisation and the SPV",
            50,
            ["Explain the securitisation chain", "Describe the SPV's role"],
            [
              "Originators sell assets to a bankruptcy-remote SPV that issues tranched securities.",
              "This isolates the pool from originator credit and enables risk redistribution.",
              "Originate-to-distribute can weaken underwriting incentives (moral hazard).",
              "Servicers collect and pass through cash flows per the documentation.",
            ],
            [
              "Why must the SPV be bankruptcy-remote?",
              "How can originate-to-distribute weaken underwriting?",
            ]
          ),
          lesson(
            "caia-l1-m8-l2",
            "Tranching, subordination, and credit enhancement",
            50,
            ["Explain the waterfall", "Describe enhancement techniques"],
            [
              "Senior tranches are paid first; junior/equity tranches absorb first losses.",
              "Credit enhancement: subordination, overcollateralisation, excess spread, and reserves.",
              "Higher subordination raises senior-tranche ratings by increasing loss cushion.",
              "The equity tranche has leveraged, highly non-linear exposure to pool losses.",
            ],
            [
              "How does subordination protect senior tranches?",
              "Why is the equity tranche's exposure non-linear?",
            ],
            "In a pool with 8% subordination below the senior tranche, the senior tranche takes no loss until cumulative pool losses exceed 8% — the junior tranches absorb the first 8%."
          ),
          lesson(
            "caia-l1-m8-l3",
            "MBS prepayment and extension risk",
            50,
            ["Explain prepayment behaviour", "Contrast extension risk"],
            [
              "Falling rates accelerate prepayments, shortening duration and forcing reinvestment at lower yields.",
              "Rising rates slow prepayments, extending duration when it is least desired (negative convexity).",
              "CMOs redistribute prepayment risk across tranches (e.g. PACs vs support bonds).",
              "Prepayment models (e.g. PSA) drive expected cash-flow timing.",
            ],
            [
              "Why do MBS exhibit negative convexity?",
              "How do CMO support tranches absorb prepayment risk?",
            ]
          ),
          lesson(
            "caia-l1-m8-l4",
            "ABS collateral types",
            40,
            ["Distinguish ABS collateral", "Assess collateral-specific risk"],
            [
              "Auto and credit-card ABS have shorter, more predictable cash flows than mortgages.",
              "Revolving structures (cards) use early-amortisation triggers to protect investors.",
              "Collateral quality, seasoning, and diversification drive ABS risk.",
              "Consumer-credit cycles affect default and loss timing.",
            ],
            [
              "Why is credit-card ABS structured as revolving?",
              "What triggers protect card-ABS investors?",
            ]
          ),
          lesson(
            "caia-l1-m8-l5",
            "CDOs, CLOs, and structured-credit risk",
            50,
            ["Explain CDO/CLO structure", "Analyse correlation risk"],
            [
              "CDOs pool bonds/loans; CLOs pool leveraged loans; synthetics use CDS for exposure.",
              "Default correlation is critical: higher correlation raises senior-tranche risk and helps equity.",
              "Ratings can understate model and correlation risk, as 2008 revealed.",
              "Manager selection and covenant quality matter greatly in CLOs.",
            ],
            [
              "Why does higher default correlation hurt senior tranches?",
              "What lesson did 2008 teach about rating reliance?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Waterfall priority: senior → mezzanine → equity (losses reverse the order).",
          "Loss cushion for a tranche = attachment point (subordination below it).",
          "Negative convexity: duration shortens as rates fall, lengthens as rates rise.",
          "Higher default correlation → more senior-tranche risk, more equity-tranche value.",
        ],
        commonTraps: [
          "Assuming senior tranches are risk-free because they are highly rated.",
          "Ignoring negative convexity when rates move.",
          "Overlooking correlation's opposite effects on senior vs equity tranches.",
          "Treating ratings as a substitute for structural analysis.",
        ],
        examTechnique: [
          "Draw the waterfall and mark attachment points before answering loss questions.",
          "For correlation questions, reason separately about senior and equity tranches.",
          "Link rate direction to prepayment and then to duration.",
        ],
        practicePlan: [
          "Week 1: securitisation mechanics and tranching.",
          "Week 2: prepayment, convexity, and ABS collateral.",
          "Week 3: CDO/CLO structure and correlation MCQs.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Structured Products.",
          "Fabozzi — Handbook of Mortgage-Backed Securities (reference).",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m9",
        examId: "caia",
        levelId: "l1",
        title: "Risk & return measures for alternatives",
        examFormat:
          "Quantitative MCQs on return statistics, risk-adjusted measures, and correlation/beta with non-normal data.",
        estimatedStudyHours: 22,
        overview:
          "Alternatives require risk measures beyond mean and variance. This module covers return computation, risk-adjusted ratios, downside and drawdown measures, and the pitfalls of applying normal-distribution statistics to smoothed, non-normal alternative returns.",
        whyItMatters:
          "Because alternative returns are non-normal and often smoothed, standard measures mislead. Mastering Sharpe, Sortino, drawdown, and the biases in reported statistics is essential for the exam and for honest performance assessment.",
        learningOutcomes: [
          "Compute arithmetic vs geometric returns and understand their uses.",
          "Calculate and interpret Sharpe, Sortino, and Calmar ratios.",
          "Explain downside deviation, VaR, expected shortfall, and maximum drawdown.",
          "Interpret skewness, kurtosis, and autocorrelation in returns.",
          "Adjust for smoothing and its effect on volatility, beta, and correlation.",
          "Select appropriate measures for non-normal distributions.",
        ],
        syllabusAreas: [
          area(
            "Return and volatility measures",
            [
              "Arithmetic vs geometric returns",
              "Standard deviation and its limits",
              "Higher moments: skewness and kurtosis",
            ],
            "30–35%"
          ),
          area(
            "Risk-adjusted performance",
            [
              "Sharpe, Sortino, Calmar, information ratio",
              "Downside deviation and drawdown",
              "VaR and expected shortfall",
            ],
            "35–40%"
          ),
          area(
            "Distribution and data issues",
            [
              "Autocorrelation and return smoothing",
              "Unsmoothing and true volatility",
              "Beta and correlation distortions",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m9-l1",
            "Returns and volatility",
            45,
            ["Compute returns", "Explain volatility's limits"],
            [
              "Geometric (compounded) return < arithmetic mean when volatility is present.",
              "Standard deviation treats upside and downside symmetrically — a poor fit for skewed returns.",
              "Volatility understates risk when returns are smoothed by appraisals.",
              "Annualisation assumes independence, which smoothing violates.",
            ],
            [
              "Why is geometric return below the arithmetic mean?",
              "When does annualised volatility understate true risk?",
            ]
          ),
          lesson(
            "caia-l1-m9-l2",
            "Risk-adjusted ratios",
            55,
            ["Compute Sharpe and Sortino", "Interpret Calmar"],
            [
              "Sharpe = (return − risk-free) ÷ standard deviation; penalises all volatility.",
              "Sortino = (return − target) ÷ downside deviation; penalises only downside.",
              "Calmar = annualised return ÷ maximum drawdown; popular for CTAs.",
              "Information ratio = active return ÷ tracking error.",
            ],
            [
              "When is Sortino more appropriate than Sharpe?",
              "What does Calmar emphasise that Sharpe ignores?",
            ],
            "A fund returns 10% with 8% volatility, 5% downside deviation, and a 20% max drawdown; risk-free is 2%. Sharpe = (10−2)/8 = 1.0, Sortino = (10−2)/5 = 1.6, Calmar = 10/20 = 0.5 — each tells a different risk story."
          ),
          lesson(
            "caia-l1-m9-l3",
            "Downside, VaR, and drawdown",
            50,
            ["Interpret VaR and ES", "Explain drawdown"],
            [
              "VaR estimates the loss not exceeded at a confidence level over a horizon.",
              "Expected shortfall (CVaR) averages losses beyond VaR — better for fat tails.",
              "Maximum drawdown captures peak-to-trough pain, the lived experience of risk.",
              "VaR ignores the severity of tail losses; ES addresses this.",
            ],
            [
              "Why is expected shortfall preferred to VaR for fat-tailed returns?",
              "What does maximum drawdown measure that volatility does not?",
            ]
          ),
          lesson(
            "caia-l1-m9-l4",
            "Higher moments and their meaning",
            45,
            ["Interpret skew and kurtosis", "Link to investor preference"],
            [
              "Negative skew means frequent small gains and rare large losses.",
              "Excess kurtosis means fatter tails than the normal distribution.",
              "Investors generally dislike negative skew and high kurtosis.",
              "Mean-variance optimisation ignores these preferences and understates tail risk.",
            ],
            [
              "Why do investors penalise negative skew?",
              "What does mean-variance analysis miss about tails?",
            ]
          ),
          lesson(
            "caia-l1-m9-l5",
            "Smoothing, autocorrelation, and unsmoothing",
            50,
            ["Detect smoothing", "Adjust reported statistics"],
            [
              "Appraisal-based valuations create positive autocorrelation in returns.",
              "Smoothing understates volatility, beta, and correlation — inflating Sharpe ratios.",
              "Unsmoothing techniques recover a more realistic (higher) volatility estimate.",
              "Always question whether reported diversification is genuine or an artefact.",
            ],
            [
              "How does smoothing inflate a reported Sharpe ratio?",
              "What does positive autocorrelation signal about valuation?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Sharpe = (Rp − Rf) ÷ σp; Sortino = (Rp − target) ÷ downside deviation.",
          "Calmar = annualised return ÷ maximum drawdown.",
          "Information ratio = active return ÷ tracking error.",
          "Expected shortfall = average loss conditional on exceeding VaR.",
        ],
        commonTraps: [
          "Using Sharpe for negatively skewed returns without caveat.",
          "Reading low reported volatility as low true risk when data is smoothed.",
          "Confusing VaR (a threshold) with expected shortfall (a tail average).",
          "Mixing arithmetic and geometric returns in comparisons.",
        ],
        examTechnique: [
          "Read whether the denominator is total or downside risk before choosing a ratio.",
          "For smoothed data, expect the 'true risk is higher' answer.",
          "Keep VaR vs ES definitions crisp to avoid trap answers.",
        ],
        practicePlan: [
          "Week 1: return and ratio computations.",
          "Week 2: VaR, ES, and drawdown interpretation.",
          "Week 3: smoothing and higher-moment MCQs.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Risk and Return.",
          "Lo — hedge fund return smoothing and autocorrelation research.",
        ],
      }),
      courseware({
        moduleId: "caia-l1-m10",
        examId: "caia",
        levelId: "l1",
        title: "Due diligence foundations",
        examFormat:
          "MCQs on investment and operational due diligence, red flags, and the manager selection process.",
        estimatedStudyHours: 20,
        overview:
          "Due diligence separates skilled, well-controlled managers from risky or fraudulent ones. This module covers investment due diligence (strategy, edge, performance) and operational due diligence (controls, valuation, service providers), plus common red flags.",
        whyItMatters:
          "In opaque private markets, diligence is the primary defence against fraud and operational failure. CAIA tests the structured process and the warning signs that recur in real cases.",
        learningOutcomes: [
          "Distinguish investment due diligence from operational due diligence.",
          "Evaluate a manager's edge, process, and performance attribution.",
          "Assess operational controls, valuation policy, and segregation of duties.",
          "Verify service providers: administrator, auditor, prime broker, custodian.",
          "Identify red flags associated with fraud and operational failure.",
          "Structure an ongoing monitoring programme.",
        ],
        syllabusAreas: [
          area(
            "Investment due diligence",
            [
              "Strategy, edge, and capacity",
              "Performance attribution and persistence",
              "Risk management and portfolio construction",
            ],
            "35–40%"
          ),
          area(
            "Operational due diligence",
            [
              "Controls and segregation of duties",
              "Valuation policy and independent pricing",
              "Service-provider verification",
            ],
            "35–40%"
          ),
          area(
            "Red flags and monitoring",
            [
              "Fraud indicators and style drift",
              "Independent administration and audit quality",
              "Ongoing monitoring and re-underwriting",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l1-m10-l1",
            "Investment due diligence",
            50,
            ["Assess a manager's edge", "Evaluate attribution"],
            [
              "Identify the source of edge and whether it is repeatable and scalable.",
              "Attribution separates skill (alpha) from market beta and luck.",
              "Capacity constraints erode returns as assets grow.",
              "Consistency of process matters more than a single strong year.",
            ],
            [
              "Why is performance attribution central to IDD?",
              "How can capacity growth erode a manager's edge?",
            ]
          ),
          lesson(
            "caia-l1-m10-l2",
            "Operational due diligence",
            50,
            ["Assess controls", "Evaluate valuation policy"],
            [
              "Segregation of duties prevents any one person controlling trading, valuation, and cash.",
              "Independent, consistent valuation policy reduces manipulation risk.",
              "Robust cash controls and reconciliation defend against misappropriation.",
              "ODD failures, not investment losses, cause many hedge fund blow-ups.",
            ],
            [
              "Why is segregation of duties a key ODD control?",
              "What role does independent valuation play?",
            ]
          ),
          lesson(
            "caia-l1-m10-l3",
            "Service-provider verification",
            45,
            ["Verify key providers", "Explain their control role"],
            [
              "Independent administrators strike NAV and reduce manager control over reporting.",
              "Reputable auditors and unqualified opinions add assurance.",
              "Prime brokers and custodians should be independent and creditworthy.",
              "Directly confirm providers rather than relying on the manager's word.",
            ],
            [
              "Why confirm the administrator independently?",
              "What does a qualified audit opinion signal?",
            ]
          ),
          lesson(
            "caia-l1-m10-l4",
            "Red flags and fraud indicators",
            45,
            ["Recognise red flags", "Link them to failures"],
            [
              "Warning signs: self-administration, self-custody, unusual consistency, and opacity.",
              "Related-party service providers weaken independent checks.",
              "Style drift and returns inconsistent with strategy warrant scrutiny.",
              "Resistance to reasonable diligence is itself a red flag.",
            ],
            [
              "Why is self-administration a red flag?",
              "What does implausibly smooth performance suggest?",
            ]
          ),
          lesson(
            "caia-l1-m10-l5",
            "Ongoing monitoring",
            40,
            ["Design a monitoring plan", "Explain re-underwriting"],
            [
              "Diligence is continuous, not a one-time event.",
              "Monitor for style drift, personnel turnover, and asset-base changes.",
              "Re-underwrite periodically and after material events.",
              "Escalation and redemption triggers should be defined in advance.",
            ],
            [
              "Why must due diligence continue after investment?",
              "What events should trigger re-underwriting?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "IDD vs ODD: 'can they make money?' vs 'can they lose it operationally?'",
          "Segregation-of-duties principle: separate trading, valuation, and cash control.",
          "Independence test: administrator, auditor, custodian all external and reputable.",
          "Red-flag heuristic: opacity + related parties + implausible smoothness.",
        ],
        commonTraps: [
          "Focusing on returns (IDD) while neglecting operations (ODD).",
          "Accepting manager-provided information without independent confirmation.",
          "Treating strong past performance as evidence of controls.",
          "Ignoring red flags because access is attractive.",
        ],
        examTechnique: [
          "Classify each scenario as IDD or ODD before choosing an answer.",
          "For red-flag questions, pick the independence/verification failure.",
          "Remember most blow-ups are operational, not investment, failures.",
        ],
        practicePlan: [
          "Week 1: IDD process and attribution.",
          "Week 2: ODD controls and service-provider checks.",
          "Week 3: red-flag and monitoring MCQs.",
        ],
        furtherReading: [
          "CAIA Level I curriculum — Due Diligence.",
          "Industry ODD frameworks and post-fraud case studies.",
        ],
      }),
    ],
  },
  {
    examId: "caia",
    levelId: "l2",
    modules: [
      courseware({
        moduleId: "caia-l2-m1",
        examId: "caia",
        levelId: "l2",
        title: "Professional Standards & Ethics (applied)",
        examFormat:
          "Level II: 100 MCQs plus constructed-response (essay) sets. Ethics recurs in both formats, often as applied vignettes.",
        estimatedStudyHours: 22,
        overview:
          "Level II ethics moves from recognition to application. Candidates must resolve realistic conflicts, recommend compliance procedures, and defend decisions in constructed-response form using the CFA Institute Standards and CAIA conduct requirements.",
        whyItMatters:
          "At Level II you must not only spot violations but reason to a defensible resolution and articulate it. Ethics appears in essays where partial credit rewards structured application of the Standards.",
        learningOutcomes: [
          "Apply the Standards to complex, multi-party alternative-investment scenarios.",
          "Recommend specific compliance policies to prevent recurring violations.",
          "Resolve conflicts between duties to clients, employers, and self.",
          "Draft constructed-response answers that cite the correct Standard and remedy.",
          "Evaluate disclosure adequacy for layered conflicts and fees.",
          "Apply the CAIA Member Code of Conduct to designation use.",
        ],
        syllabusAreas: [
          area(
            "Applied Standards in alternatives",
            [
              "Valuation, performance presentation, and fair dealing in private funds",
              "MNPI and expert networks",
              "Suitability across complex products",
            ],
            "40–45%"
          ),
          area(
            "Conflicts and compliance design",
            [
              "Conflicts disclosure and management",
              "Priority of transactions and personal trading policies",
              "Supervisory systems and compliance procedures",
            ],
            "35–40%"
          ),
          area(
            "Constructed-response technique",
            [
              "Identifying the decisive Standard",
              "Recommending remedies and policies",
              "Concise justification under time pressure",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m1-l1",
            "Applying the Standards in private markets",
            50,
            ["Apply Standards to illiquid contexts", "Address valuation ethics"],
            [
              "Valuation discretion in private funds heightens performance-presentation duties.",
              "Fair dealing governs allocation of scarce co-investment opportunities.",
              "Suitability must consider illiquidity and complexity for each client.",
              "Confidentiality persists but does not shield illegal conduct.",
            ],
            [
              "How does valuation discretion raise ethical duties?",
              "What governs allocation of limited co-investments?",
            ]
          ),
          lesson(
            "caia-l2-m1-l2",
            "MNPI, expert networks, and diligence",
            45,
            ["Manage MNPI risk", "Use expert networks properly"],
            [
              "Expert networks are permissible but must not become channels for MNPI.",
              "Firms should use restricted lists, wall-crossing procedures, and logs.",
              "Diligence must have a reasonable basis and documented support.",
              "When in doubt, treat information as material and refrain from trading.",
            ],
            [
              "What controls keep expert-network use compliant?",
              "How should uncertainty about materiality be resolved?",
            ]
          ),
          lesson(
            "caia-l2-m1-l3",
            "Conflicts of interest and disclosure",
            50,
            ["Manage layered conflicts", "Design disclosures"],
            [
              "Disclose ownership, cross-fund investments, and compensation that could bias advice.",
              "Manage, not just disclose, conflicts that materially harm clients.",
              "Priority of transactions requires enforced personal-trading policies.",
              "Referral and placement fees must be transparent to affected parties.",
            ],
            [
              "When is disclosure insufficient to cure a conflict?",
              "How should cross-fund investments be handled?",
            ]
          ),
          lesson(
            "caia-l2-m1-l4",
            "Compliance systems and supervision",
            45,
            ["Design compliance procedures", "Apply supervisory duty"],
            [
              "Supervisors must establish and enforce reasonable compliance systems.",
              "Detecting a violation requires prompt investigation and remediation.",
              "Adequate procedures can limit supervisory liability.",
              "Record retention supports both compliance and defensibility.",
            ],
            [
              "What must a supervisor do upon detecting a violation?",
              "How do robust procedures limit supervisory liability?",
            ]
          ),
          lesson(
            "caia-l2-m1-l5",
            "Constructed-response ethics technique",
            50,
            ["Structure essay answers", "Maximise partial credit"],
            [
              "Name the specific Standard, state the violation, and propose a remedy.",
              "Be concise — graders reward correct citation and clear reasoning, not length.",
              "Address each part of a multi-part prompt explicitly.",
              "Recommend a preventive policy where the question asks for one.",
            ],
            [
              "What three elements should an ethics essay answer include?",
              "How do you earn partial credit on a multi-part prompt?",
            ],
            "Prompt: a PM allocates the best co-investment to the largest LP. Answer: cite Standard III(B) Fair Dealing, state that preferential allocation without disclosure violates fair dealing, and recommend a written pro-rata allocation policy."
          ),
        ],
        frameworksAndFormulas: [
          "Essay structure: identify Standard → state violation → recommend remedy/policy.",
          "Conflict resolution ladder: avoid → manage → disclose (in that order of strength).",
          "Materiality-in-doubt rule: treat as material and abstain.",
          "Supervision test: reasonable system + prompt remediation.",
        ],
        commonTraps: [
          "Spotting the issue but failing to recommend a concrete remedy in essays.",
          "Assuming disclosure alone resolves a materially harmful conflict.",
          "Writing long narratives instead of citing the precise Standard.",
          "Missing sub-parts of a constructed-response prompt.",
        ],
        examTechnique: [
          "Budget essay time by marks; answer every sub-part briefly.",
          "Lead each essay point with the Standard name.",
          "Recommend a preventive policy whenever asked for procedures.",
        ],
        practicePlan: [
          "Week 1: applied MCQ vignettes in alternatives contexts.",
          "Week 2: write timed constructed-response ethics answers.",
          "Week 3: self-grade essays against a citation-and-remedy rubric.",
        ],
        furtherReading: [
          "CFA Institute — Standards of Practice Handbook.",
          "CAIA Level II curriculum — ethics and professional conduct.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m2",
        examId: "caia",
        levelId: "l2",
        title: "Institutional investors & asset owner objectives",
        examFormat:
          "MCQs and constructed-response on investor types, objectives, constraints, and governance.",
        estimatedStudyHours: 22,
        overview:
          "Different asset owners — pensions, endowments, foundations, sovereign wealth funds, insurers, and family offices — have distinct objectives, liabilities, liquidity needs, and governance. This module maps these differences to their use of alternatives.",
        whyItMatters:
          "Allocation decisions must fit the owner's liabilities, horizon, and governance. CAIA Level II frames alternatives through the asset owner's lens, which drives suitability and portfolio construction.",
        learningOutcomes: [
          "Compare the objectives and constraints of major institutional investor types.",
          "Explain the liability structures that shape asset allocation.",
          "Analyse liquidity budgets and spending policies.",
          "Describe governance models and their effect on decision quality.",
          "Apply the endowment model and its critiques.",
          "Relate investor type to appropriate use of alternatives.",
        ],
        syllabusAreas: [
          area(
            "Investor types and objectives",
            [
              "Pensions (DB/DC), endowments, foundations",
              "Sovereign wealth funds, insurers, family offices",
              "Return objectives and risk tolerance",
            ],
            "35–40%"
          ),
          area(
            "Liabilities, liquidity, and spending",
            [
              "Liability-driven investing and duration matching",
              "Spending rules and real return targets",
              "Liquidity budgeting for private assets",
            ],
            "30–35%"
          ),
          area(
            "Governance",
            [
              "Board, committee, and staff roles",
              "Delegation and OCIO models",
              "Behavioural and agency issues",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m2-l1",
            "Investor types and their objectives",
            50,
            ["Compare investor objectives", "Match risk tolerance to type"],
            [
              "DB pensions target funded status; DC shifts risk to individuals.",
              "Endowments/foundations pursue intergenerational equity and spending support.",
              "Insurers match assets to policy liabilities under regulatory capital rules.",
              "Sovereign wealth funds and family offices vary widely in horizon and mandate.",
            ],
            [
              "How does a DB pension's objective differ from an endowment's?",
              "Why do insurers emphasise liability matching?",
            ]
          ),
          lesson(
            "caia-l2-m2-l2",
            "Liabilities and liability-driven investing",
            50,
            ["Explain LDI", "Match duration to liabilities"],
            [
              "LDI aligns asset sensitivity with liability sensitivity to protect funded status.",
              "Duration and inflation exposure of liabilities drive hedging choices.",
              "Surplus volatility, not just asset volatility, is the relevant risk for pensions.",
              "Alternatives play a return-seeking role alongside the hedging portfolio.",
            ],
            [
              "Why is surplus volatility the right risk metric for a DB plan?",
              "How do alternatives fit within an LDI framework?",
            ]
          ),
          lesson(
            "caia-l2-m2-l3",
            "Spending policies and real returns",
            45,
            ["Apply spending rules", "Set real return targets"],
            [
              "Spending rules (e.g. smoothed percentage of assets) balance stability and preservation.",
              "Real return target ≈ spending rate + inflation + costs (intergenerational equity).",
              "Higher spending demands higher expected returns and more risk.",
              "Illiquidity can be tolerated by long-horizon owners with modest spending.",
            ],
            [
              "How is a real return target linked to spending?",
              "Why can endowments tolerate more illiquidity?",
            ]
          ),
          lesson(
            "caia-l2-m2-l4",
            "Liquidity budgeting",
            45,
            ["Build a liquidity budget", "Avoid the denominator effect"],
            [
              "Commitments, capital calls, and distributions must be modelled to avoid liquidity crunches.",
              "The denominator effect: falling public assets can push private allocations above targets.",
              "Cash and liquid sleeves fund calls and spending during stress.",
              "Over-commitment strategies manage the gap between committed and invested capital.",
            ],
            [
              "What is the denominator effect and why does it matter?",
              "How does over-commitment address slow capital deployment?",
            ]
          ),
          lesson(
            "caia-l2-m2-l5",
            "Governance and the endowment model",
            50,
            ["Evaluate governance models", "Critique the endowment model"],
            [
              "Clear delegation, skilled staff, and stable committees improve decisions.",
              "OCIO models outsource implementation for smaller or under-resourced owners.",
              "The endowment model emphasises equities and illiquid alternatives for the long horizon.",
              "Critiques: liquidity risk in crises, fee drag, and access dependence on top managers.",
            ],
            [
              "What governance features improve long-term outcomes?",
              "What are the main critiques of the endowment model?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Real return target ≈ spending rate + inflation + investment costs.",
          "Surplus = assets − liabilities; manage surplus volatility for DB plans.",
          "Liquidity budget = expected calls − expected distributions + spending needs.",
          "Denominator effect: private % rises when public assets fall.",
        ],
        commonTraps: [
          "Applying one investor's objectives to a different investor type.",
          "Ignoring liabilities and focusing only on asset volatility.",
          "Underestimating liquidity needs and the denominator effect.",
          "Treating the endowment model as universally appropriate.",
        ],
        examTechnique: [
          "Identify the investor type and its dominant constraint first.",
          "For pensions, reason in surplus terms, not asset-only terms.",
          "Check liquidity implications before endorsing large private allocations.",
        ],
        practicePlan: [
          "Week 1: investor types and objectives.",
          "Week 2: LDI, spending, and liquidity budgeting.",
          "Week 3: governance and endowment-model essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Institutional Asset Owners.",
          "Swensen — Pioneering Portfolio Management (reference).",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m3",
        examId: "caia",
        levelId: "l2",
        title: "Private equity & real assets — advanced applications",
        examFormat:
          "MCQs and constructed-response on advanced PE/real-asset valuation, cash-flow modelling, and portfolio construction.",
        estimatedStudyHours: 24,
        overview:
          "This module extends Level I private markets to advanced applications: cash-flow forecasting, secondary markets, co-investment, GP-led transactions, and integrating private equity and real assets into a total portfolio.",
        whyItMatters:
          "Level II expects candidates to model and construct private-market programmes, not just define terms. Secondaries, co-investment, and pacing are now core institutional tools.",
        learningOutcomes: [
          "Model private-fund cash flows and net asset value over the fund life.",
          "Evaluate secondary-market transactions and their pricing.",
          "Assess co-investment and GP-led continuation vehicles.",
          "Construct a diversified private-markets programme across vintages and strategies.",
          "Apply advanced valuation to real assets and development projects.",
          "Integrate private allocations into total-portfolio risk.",
        ],
        syllabusAreas: [
          area(
            "Cash-flow modelling and pacing",
            [
              "Commitment pacing and capital-call forecasting",
              "NAV projection and the J-curve",
              "Over-commitment and liquidity management",
            ],
            "30–35%"
          ),
          area(
            "Secondaries and co-investment",
            [
              "LP-led and GP-led secondaries",
              "Continuation funds and pricing (discount/premium to NAV)",
              "Co-investment economics and selection bias",
            ],
            "30–35%"
          ),
          area(
            "Valuation and integration",
            [
              "Advanced real-asset and development valuation",
              "Total-portfolio integration and correlation",
              "Fee and cost drag analysis",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m3-l1",
            "Cash-flow modelling and commitment pacing",
            55,
            ["Forecast calls and distributions", "Design a pacing plan"],
            [
              "Capital-call and distribution curves depend on strategy, vintage, and market conditions.",
              "Pacing sets annual commitments to reach and maintain a target NAV allocation.",
              "Over-commitment compensates for slow deployment but adds liquidity risk.",
              "Stress-test pacing against downturns when distributions slow and calls continue.",
            ],
            [
              "Why is over-commitment used, and what risk does it add?",
              "How does a downturn distort call and distribution timing?",
            ]
          ),
          lesson(
            "caia-l2-m3-l2",
            "Secondary markets",
            50,
            ["Price LP secondaries", "Explain GP-led deals"],
            [
              "LP-led secondaries transfer fund stakes, often at a discount or premium to NAV.",
              "GP-led secondaries (continuation funds) move assets into new vehicles with fresh terms.",
              "Secondaries can mitigate the J-curve and provide vintage diversification.",
              "GP-led deals raise conflict-of-interest and valuation-fairness concerns.",
            ],
            [
              "How can secondaries reduce the J-curve?",
              "What conflicts arise in GP-led continuation funds?",
            ]
          ),
          lesson(
            "caia-l2-m3-l3",
            "Co-investment",
            45,
            ["Assess co-investment economics", "Recognise selection bias"],
            [
              "Co-investments often carry reduced or no fees, improving net returns.",
              "They require internal capacity to underwrite quickly and independently.",
              "Adverse selection risk: GPs may syndicate weaker deals.",
              "Concentration rises without disciplined diversification.",
            ],
            [
              "Why can co-investment improve net returns?",
              "What is the adverse-selection risk in co-investment?",
            ]
          ),
          lesson(
            "caia-l2-m3-l4",
            "Advanced real-asset valuation",
            50,
            ["Value development projects", "Adjust for leverage and risk"],
            [
              "Development projects require staged DCF with construction and lease-up risk.",
              "Leverage magnifies equity returns and default risk in real assets.",
              "Discount rates should reflect stage-specific risk (greenfield > brownfield).",
              "Exit assumptions (cap rate, terminal value) dominate valuation sensitivity.",
            ],
            [
              "Why use a higher discount rate for greenfield projects?",
              "Which assumption most affects development valuation?",
            ]
          ),
          lesson(
            "caia-l2-m3-l5",
            "Total-portfolio integration",
            45,
            ["Integrate private allocations", "Analyse fee drag"],
            [
              "Private-market betas overlap with public equity/credit — avoid double counting diversification.",
              "Smoothed valuations understate true correlation and risk contribution.",
              "Fee and cost drag can consume a large share of gross private-market premia.",
              "Assess programmes on net, risk-adjusted, liquidity-aware terms.",
            ],
            [
              "Why can private-market diversification be overstated?",
              "How should fee drag change programme evaluation?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Pacing target: annual commitments sized to reach steady-state NAV allocation.",
          "Secondary price = NAV × (1 ± discount/premium).",
          "Development value = staged DCF less construction/lease-up risk, plus exit value.",
          "Net premium = gross private return − fees − costs − liquidity cost.",
        ],
        commonTraps: [
          "Ignoring downturn scenarios in pacing (calls continue, distributions stall).",
          "Overstating diversification from smoothed private valuations.",
          "Assuming co-investment is 'free' without adverse-selection risk.",
          "Underweighting fee drag in net-return analysis.",
        ],
        examTechnique: [
          "For pacing/liquidity essays, model both normal and stressed scenarios.",
          "State secondary pricing relative to NAV explicitly.",
          "Always convert gross private returns to net, risk-adjusted terms.",
        ],
        practicePlan: [
          "Week 1: cash-flow modelling and pacing.",
          "Week 2: secondaries and co-investment.",
          "Week 3: valuation and integration essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Private Equity and Real Assets.",
          "ILPA guidance on GP-led secondaries.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m4",
        examId: "caia",
        levelId: "l2",
        title: "Hedge fund strategies — advanced applications",
        examFormat:
          "MCQs and constructed-response on strategy analytics, factor exposures, and replication.",
        estimatedStudyHours: 24,
        overview:
          "Level II hedge fund content emphasises analytics: decomposing returns into alternative risk premia and alpha, factor modelling, replication, and combining strategies. It also covers tail risk and dynamic exposures.",
        whyItMatters:
          "Sophisticated allocators judge hedge funds by their factor exposures and true alpha, not headline returns. Understanding replication and risk premia informs both fee negotiation and portfolio design.",
        learningOutcomes: [
          "Decompose hedge fund returns into alternative risk premia and alpha.",
          "Build and interpret multi-factor models for hedge fund strategies.",
          "Explain hedge fund replication and its limitations.",
          "Analyse dynamic and non-linear (option-like) exposures.",
          "Combine strategies to improve portfolio risk-adjusted return.",
          "Assess tail risk, crowding, and liquidity in hedge fund portfolios.",
        ],
        syllabusAreas: [
          area(
            "Return decomposition and factors",
            [
              "Alternative risk premia (carry, momentum, value)",
              "Multi-factor models and betas",
              "Separating alpha from exotic beta",
            ],
            "35–40%"
          ),
          area(
            "Replication and dynamics",
            [
              "Factor-based and payoff replication",
              "Non-linear and option-like exposures",
              "Regime dependence",
            ],
            "30–35%"
          ),
          area(
            "Portfolio applications",
            [
              "Combining strategies and diversification",
              "Tail risk, crowding, liquidity",
              "Fee implications of premia vs alpha",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m4-l1",
            "Alternative risk premia and return decomposition",
            55,
            ["Identify risk premia", "Separate premia from alpha"],
            [
              "Carry, momentum, and value are systematic premia harvestable at low cost.",
              "Much 'hedge fund alpha' is actually exotic beta to these premia.",
              "True alpha is the residual after removing all identifiable risk premia.",
              "Distinguishing the two informs fair fees and expected persistence.",
            ],
            [
              "Why might reported alpha shrink after factor adjustment?",
              "Name three common alternative risk premia.",
            ]
          ),
          lesson(
            "caia-l2-m4-l2",
            "Multi-factor modelling",
            50,
            ["Build factor models", "Interpret betas and R²"],
            [
              "Regress returns on equity, credit, rate, and style factors to estimate exposures.",
              "High R² suggests returns are largely explained by factors, not skill.",
              "Time-varying betas complicate static models.",
              "Model choice and factor selection affect conclusions materially.",
            ],
            [
              "What does a high R² imply about a manager's 'alpha'?",
              "Why are time-varying betas problematic?",
            ]
          ),
          lesson(
            "caia-l2-m4-l3",
            "Replication",
            45,
            ["Explain replication approaches", "State limitations"],
            [
              "Factor-based replication mimics exposures using liquid instruments.",
              "Payoff-distribution replication targets the return distribution rather than positions.",
              "Replication offers liquidity and low fees but cannot capture idiosyncratic alpha.",
              "It works best for beta-driven strategies, worst for genuine skill.",
            ],
            [
              "When does replication work well, and when does it fail?",
              "What can replication not capture?",
            ]
          ),
          lesson(
            "caia-l2-m4-l4",
            "Non-linear exposures and regimes",
            50,
            ["Identify option-like payoffs", "Explain regime dependence"],
            [
              "Many strategies embed short-volatility (short-option) payoffs — steady gains, sharp losses.",
              "Trend-following behaves like long optionality in trending regimes.",
              "Exposures shift across market regimes, so static risk estimates mislead.",
              "Stress and scenario analysis reveal hidden non-linear risk.",
            ],
            [
              "Why does a short-volatility payoff produce negative skew?",
              "How does trend-following resemble long optionality?",
            ]
          ),
          lesson(
            "caia-l2-m4-l5",
            "Combining strategies in a portfolio",
            45,
            ["Diversify across strategies", "Manage tail and crowding risk"],
            [
              "Combining low-correlation strategies improves risk-adjusted return.",
              "Crowding raises correlations exactly during de-risking events.",
              "Liquidity mismatches can force selling of the most liquid assets first.",
              "Pay premia cheaply and reserve high fees for genuine alpha.",
            ],
            [
              "Why can correlations spike during forced de-risking?",
              "How should fee tolerance differ for premia vs alpha?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Return = alpha + Σ(factor beta × factor return) + residual.",
          "Alpha ≈ total return − systematic risk-premia contribution.",
          "R² ≈ share of variance explained by factors (higher → less skill).",
          "Short-volatility payoff: bounded upside, large tail downside.",
        ],
        commonTraps: [
          "Treating factor beta as alpha and overpaying for it.",
          "Relying on static betas when exposures are dynamic.",
          "Ignoring short-volatility tail risk in 'steady' strategies.",
          "Assuming diversification holds in crises despite crowding.",
        ],
        examTechnique: [
          "Decompose returns into premia and alpha before judging skill.",
          "For payoff questions, identify the implicit option position.",
          "Tie fee reasoning to the premia-versus-alpha distinction.",
        ],
        practicePlan: [
          "Week 1: risk premia and factor decomposition.",
          "Week 2: replication and non-linear exposures.",
          "Week 3: portfolio-combination and tail-risk essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Hedge Funds.",
          "Research on alternative risk premia and hedge fund replication.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m5",
        examId: "caia",
        levelId: "l2",
        title: "Structured products & credit strategies",
        examFormat:
          "MCQs and constructed-response on structured credit analytics, tranche risk, and credit strategies.",
        estimatedStudyHours: 22,
        overview:
          "This module deepens structured-credit analysis: correlation and tranche sensitivity, CLO analytics, credit derivatives, and active credit strategies. It links structure to valuation and risk under stress.",
        whyItMatters:
          "Structured credit rewards precise understanding of how correlation, subordination, and cash-flow triggers interact. Level II expects analytical, not just descriptive, mastery.",
        learningOutcomes: [
          "Analyse tranche sensitivity to default correlation and timing.",
          "Explain CLO cash-flow tests (OC/IC) and their triggers.",
          "Value and hedge with credit derivatives (CDS, indices, tranches).",
          "Evaluate active credit strategies across the cycle.",
          "Stress-test structured positions under adverse scenarios.",
          "Assess model and liquidity risk in structured credit.",
        ],
        syllabusAreas: [
          area(
            "Tranche and correlation analytics",
            [
              "Attachment/detachment points and loss allocation",
              "Correlation sensitivity (correlation smile)",
              "Base and compound correlation concepts",
            ],
            "35–40%"
          ),
          area(
            "CLOs and credit derivatives",
            [
              "OC/IC tests and reinvestment",
              "CDS, index tranches, and basis",
              "Hedging credit exposure",
            ],
            "30–35%"
          ),
          area(
            "Active credit and stress",
            [
              "Long/short and relative-value credit",
              "Distressed and stressed strategies",
              "Scenario and liquidity stress testing",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m5-l1",
            "Tranche sensitivity and correlation",
            55,
            ["Analyse loss allocation", "Explain correlation effects"],
            [
              "Losses hit tranches from equity up; attachment/detachment define each tranche's band.",
              "Higher default correlation increases the chance of extreme joint outcomes.",
              "Rising correlation hurts senior tranches and benefits equity tranches.",
              "The 'correlation smile' reflects market pricing of tail dependence.",
            ],
            [
              "How do attachment and detachment points define a tranche?",
              "Why does higher correlation help the equity tranche?",
            ],
            "For a mezzanine tranche with 5% attachment and 10% detachment, it absorbs pool losses between 5% and 10%; below 5% it is untouched, above 10% it is wiped out."
          ),
          lesson(
            "caia-l2-m5-l2",
            "CLO structure and cash-flow tests",
            50,
            ["Explain OC/IC tests", "Describe reinvestment"],
            [
              "Overcollateralisation (OC) and interest-coverage (IC) tests protect senior noteholders.",
              "Failing a test diverts cash to pay down senior notes, cutting equity distributions.",
              "During the reinvestment period, managers roll principal into new loans.",
              "Manager skill and covenant discipline drive CLO equity outcomes.",
            ],
            [
              "What happens when a CLO fails its OC test?",
              "Why does the reinvestment period matter for CLO equity?",
            ]
          ),
          lesson(
            "caia-l2-m5-l3",
            "Credit derivatives",
            50,
            ["Value CDS exposure", "Hedge with indices/tranches"],
            [
              "A CDS transfers default risk for a periodic spread; it can be used long or short credit.",
              "Index products (e.g. CDX/iTraxx) and index tranches allow efficient portfolio hedging.",
              "The CDS-bond basis reflects funding, liquidity, and technical factors.",
              "Counterparty risk and margining affect derivative hedges.",
            ],
            [
              "How can a CDS be used to short credit?",
              "What does the CDS-bond basis capture?",
            ]
          ),
          lesson(
            "caia-l2-m5-l4",
            "Active credit strategies",
            45,
            ["Compare credit strategies", "Time the credit cycle"],
            [
              "Long/short credit exploits relative mispricing between issuers or instruments.",
              "Distressed strategies target restructuring and recovery upside.",
              "Credit spreads widen in downturns, creating entry points but also losses.",
              "Liquidity and financing risk are acute in stressed credit markets.",
            ],
            [
              "Where in the cycle do distressed opportunities peak?",
              "Why is financing risk elevated in stressed credit?",
            ]
          ),
          lesson(
            "caia-l2-m5-l5",
            "Stress testing structured credit",
            45,
            ["Design credit stress tests", "Assess model risk"],
            [
              "Stress default rate, recovery, correlation, and timing together, not in isolation.",
              "Senior tranches can fail under simultaneous high default and high correlation.",
              "Model assumptions (especially correlation) drive valuations and can be wrong.",
              "Liquidity can evaporate, widening marks beyond fundamental loss estimates.",
            ],
            [
              "Why stress correlation alongside default rates?",
              "How can liquidity worsen structured-credit losses?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Tranche loss band = detachment − attachment point.",
          "Correlation effect: ↑correlation → ↑senior risk, ↓equity risk.",
          "CLO OC ratio = collateral par ÷ tranche par; breach diverts cash to seniors.",
          "CDS-bond basis = CDS spread − cash bond spread.",
        ],
        commonTraps: [
          "Assuming senior tranches are safe regardless of correlation.",
          "Ignoring the opposite correlation effect on equity vs senior tranches.",
          "Forgetting OC/IC tests can cut CLO equity cash flows.",
          "Stressing one variable while holding correlated variables fixed.",
        ],
        examTechnique: [
          "Mark attachment/detachment points before computing tranche losses.",
          "State the direction of correlation effects per tranche explicitly.",
          "In stress essays, combine adverse variables jointly.",
        ],
        practicePlan: [
          "Week 1: tranche and correlation analytics.",
          "Week 2: CLO tests and credit derivatives.",
          "Week 3: active credit and stress-test essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Structured Products and Credit.",
          "Research on correlation and structured-credit pricing.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m6",
        examId: "caia",
        levelId: "l2",
        title: "Asset allocation with alternatives",
        examFormat:
          "MCQs and constructed-response on allocation frameworks, capital-market assumptions, and optimisation with alternatives.",
        estimatedStudyHours: 24,
        overview:
          "This module covers how alternatives enter strategic and tactical asset allocation: setting capital-market assumptions, handling non-normal returns and illiquidity, and choosing between mean-variance, risk-based, and factor-based approaches.",
        whyItMatters:
          "Allocation is where alternatives create or destroy value at the total-portfolio level. Getting assumptions and optimisation methods right is central to the Level II curriculum.",
        learningOutcomes: [
          "Set capital-market assumptions for illiquid, non-normal alternatives.",
          "Compare mean-variance, risk-parity, and factor-based allocation.",
          "Adjust for smoothing, illiquidity, and estimation error.",
          "Incorporate liquidity constraints into allocation.",
          "Apply resampling and robust optimisation techniques.",
          "Evaluate the marginal contribution of alternatives to a portfolio.",
        ],
        syllabusAreas: [
          area(
            "Capital-market assumptions",
            [
              "Return, risk, and correlation estimates for alternatives",
              "Adjusting smoothed data and illiquidity",
              "Estimation error and its impact",
            ],
            "30–35%"
          ),
          area(
            "Allocation frameworks",
            [
              "Mean-variance and its fragility",
              "Risk parity and risk budgeting",
              "Factor-based allocation",
            ],
            "35–40%"
          ),
          area(
            "Constraints and robustness",
            [
              "Liquidity and rebalancing constraints",
              "Resampling and robust optimisation",
              "Marginal contribution analysis",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m6-l1",
            "Capital-market assumptions for alternatives",
            55,
            ["Set CMAs for alternatives", "Correct smoothed inputs"],
            [
              "Use unsmoothed volatility and correlation, not raw appraisal-based figures.",
              "Illiquidity premium should be estimated conservatively and net of costs.",
              "Small estimation errors in inputs produce large allocation swings.",
              "Forward-looking assumptions should not simply extrapolate the past.",
            ],
            [
              "Why unsmooth alternative return data before optimisation?",
              "How does estimation error affect optimal weights?",
            ]
          ),
          lesson(
            "caia-l2-m6-l2",
            "Mean-variance and its fragility",
            50,
            ["Apply MVO", "Explain its weaknesses"],
            [
              "MVO maximises return per unit variance but ignores higher moments.",
              "It is highly sensitive to input errors ('error maximisation').",
              "Non-normal alternatives break the mean-variance assumptions.",
              "Constraints and shrinkage improve stability.",
            ],
            [
              "Why is MVO called an 'error maximiser'?",
              "What assumption do non-normal alternatives violate?",
            ]
          ),
          lesson(
            "caia-l2-m6-l3",
            "Risk-based allocation",
            50,
            ["Apply risk parity", "Use risk budgeting"],
            [
              "Risk parity equalises risk contributions rather than capital weights.",
              "Risk budgeting allocates a risk 'budget' across assets or factors.",
              "These approaches reduce reliance on fragile return forecasts.",
              "Leverage and liquidity assumptions become critical in risk parity.",
            ],
            [
              "How does risk parity differ from capital-weighted allocation?",
              "Why does risk parity depend on leverage assumptions?",
            ]
          ),
          lesson(
            "caia-l2-m6-l4",
            "Factor-based allocation",
            45,
            ["Allocate by factor", "Map assets to factors"],
            [
              "Allocate to underlying risk factors (equity, rates, credit, illiquidity) rather than asset labels.",
              "Reveals hidden concentrations where different assets share factors.",
              "Improves diversification by targeting distinct return drivers.",
              "Requires reliable factor mapping, which is itself uncertain.",
            ],
            [
              "Why can asset-label diversification hide factor concentration?",
              "What is the main challenge of factor allocation?",
            ]
          ),
          lesson(
            "caia-l2-m6-l5",
            "Constraints, robustness, and contribution analysis",
            45,
            ["Add liquidity constraints", "Assess marginal contribution"],
            [
              "Liquidity constraints cap illiquid weights and preserve rebalancing capacity.",
              "Resampling and robust optimisation reduce sensitivity to inputs.",
              "Marginal contribution to risk shows each asset's true portfolio impact.",
              "Judge alternatives by their net, risk-adjusted marginal contribution.",
            ],
            [
              "How does resampling improve allocation robustness?",
              "What does marginal contribution to risk reveal?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Risk contribution of asset i = weight_i × (marginal risk_i); sum equals total risk.",
          "Risk parity: equalise risk contributions across holdings.",
          "Shrinkage/resampling reduce estimation-error sensitivity.",
          "Illiquidity-adjusted CMAs use unsmoothed volatility and correlation.",
        ],
        commonTraps: [
          "Feeding smoothed data into optimisers and trusting the output.",
          "Over-allocating to alternatives due to understated correlations.",
          "Ignoring liquidity constraints in optimisation.",
          "Treating MVO output as precise despite input uncertainty.",
        ],
        examTechnique: [
          "State input adjustments (unsmoothing) before optimising in essays.",
          "Prefer robust/risk-based methods when inputs are uncertain.",
          "Use marginal contribution to justify or reject an allocation.",
        ],
        practicePlan: [
          "Week 1: capital-market assumptions and unsmoothing.",
          "Week 2: MVO, risk parity, and factor allocation.",
          "Week 3: constraints, robustness, and contribution essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Asset Allocation.",
          "Research on robust optimisation and risk parity.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m7",
        examId: "caia",
        levelId: "l2",
        title: "Portfolio construction & risk budgeting",
        examFormat:
          "MCQs and constructed-response on building portfolios of alternatives and allocating risk.",
        estimatedStudyHours: 22,
        overview:
          "This module addresses constructing multi-strategy alternatives portfolios: sizing positions, budgeting risk, managing correlations and tail dependence, and controlling leverage and liquidity.",
        whyItMatters:
          "Construction turns good allocation targets into a resilient portfolio. Risk budgeting and tail-aware sizing are what keep multi-strategy books alive through stress.",
        learningOutcomes: [
          "Translate allocation targets into position sizes and risk budgets.",
          "Manage correlation and tail dependence across strategies.",
          "Control leverage, liquidity, and rebalancing.",
          "Apply risk budgeting to strategies and factors.",
          "Incorporate tail-risk hedging where appropriate.",
          "Evaluate portfolio-level stress and scenario outcomes.",
        ],
        syllabusAreas: [
          area(
            "Position sizing and risk budgeting",
            [
              "From weights to risk contributions",
              "Concentration limits and diversification",
              "Factor vs strategy budgets",
            ],
            "35–40%"
          ),
          area(
            "Correlation, leverage, and liquidity",
            [
              "Tail dependence and crowding",
              "Leverage limits and financing risk",
              "Liquidity tiers and rebalancing",
            ],
            "30–35%"
          ),
          area(
            "Tail risk and stress",
            [
              "Tail-risk hedging trade-offs",
              "Scenario and stress design",
              "Drawdown control",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m7-l1",
            "From allocation to risk budget",
            50,
            ["Set position sizes", "Allocate risk"],
            [
              "Capital weights and risk contributions differ, especially with leverage.",
              "Risk budgeting assigns each strategy a share of total portfolio risk.",
              "Concentration limits cap single-manager and single-strategy risk.",
              "Diversification across genuinely different return drivers is the goal.",
            ],
            [
              "Why do capital weights differ from risk contributions?",
              "What does a risk budget constrain?",
            ]
          ),
          lesson(
            "caia-l2-m7-l2",
            "Correlation and tail dependence",
            50,
            ["Manage tail dependence", "Address crowding"],
            [
              "Average correlations understate co-movement in stress (tail dependence).",
              "Crowded trades unwind together, spiking correlations during drawdowns.",
              "Copulas and stress correlations model joint tail behaviour better than linear correlation.",
              "Build in a buffer for correlations rising toward one in crises.",
            ],
            [
              "Why is average correlation misleading for stress planning?",
              "How does crowding create hidden correlation risk?",
            ]
          ),
          lesson(
            "caia-l2-m7-l3",
            "Leverage and financing risk",
            45,
            ["Set leverage limits", "Manage financing risk"],
            [
              "Leverage amplifies both risk contribution and forced-selling risk.",
              "Financing can be withdrawn or repriced precisely when markets fall.",
              "Margin spirals force deleveraging at the worst prices.",
              "Maintain financing diversity and liquidity buffers.",
            ],
            [
              "How can financing risk trigger a margin spiral?",
              "Why diversify financing counterparties?",
            ]
          ),
          lesson(
            "caia-l2-m7-l4",
            "Liquidity tiers and rebalancing",
            45,
            ["Tier liquidity", "Design rebalancing"],
            [
              "Group holdings by liquidity so redemptions and calls can be met without fire sales.",
              "Rebalancing illiquid assets is slow and costly — plan around it.",
              "A liquid sleeve absorbs shocks and funds obligations.",
              "Avoid selling the most liquid assets first and stranding illiquid risk.",
            ],
            [
              "Why maintain a liquid sleeve in an alternatives portfolio?",
              "What is the danger of selling liquid assets first in stress?",
            ]
          ),
          lesson(
            "caia-l2-m7-l5",
            "Tail-risk hedging and stress testing",
            45,
            ["Evaluate tail hedges", "Design stress scenarios"],
            [
              "Tail hedges (options, trend, safe assets) cost carry but limit drawdowns.",
              "Assess hedges on cost versus drawdown reduction over a cycle.",
              "Stress scenarios should combine market, liquidity, and financing shocks.",
              "Drawdown control preserves the ability to stay invested through crises.",
            ],
            [
              "What is the trade-off in explicit tail-risk hedging?",
              "Which shocks should a portfolio stress test combine?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Total risk = Σ risk contributions; budget these, not just weights.",
          "Stress correlation → 1 assumption for crisis planning.",
          "Liquidity coverage = liquid assets ÷ near-term obligations.",
          "Tail-hedge value = drawdown reduction − carry cost over the cycle.",
        ],
        commonTraps: [
          "Budgeting capital instead of risk under leverage.",
          "Using average correlations for stress planning.",
          "Underestimating financing/liquidity risk in leveraged books.",
          "Adding tail hedges without weighing their carry cost.",
        ],
        examTechnique: [
          "Convert weights to risk contributions before answering sizing questions.",
          "Assume correlations rise in stress scenarios.",
          "For hedging essays, quantify cost against benefit.",
        ],
        practicePlan: [
          "Week 1: risk budgeting and position sizing.",
          "Week 2: correlation, leverage, and liquidity.",
          "Week 3: tail-hedging and stress essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Portfolio Construction.",
          "Research on tail dependence and risk budgeting.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m8",
        examId: "caia",
        levelId: "l2",
        title: "Liquidity, valuation & operational risk",
        examFormat:
          "MCQs and constructed-response on valuation policy, liquidity risk, and operational controls.",
        estimatedStudyHours: 20,
        overview:
          "This module examines valuation of hard-to-price assets, liquidity risk management, and operational risk — the areas where alternatives most often fail investors. It covers valuation hierarchies, gates and side pockets, and control frameworks.",
        whyItMatters:
          "Valuation and operational failures, not just bad bets, destroy value in alternatives. Level II expects candidates to manage these risks explicitly.",
        learningOutcomes: [
          "Apply the fair-value hierarchy (Levels 1–3) to alternative assets.",
          "Design independent valuation policies and controls.",
          "Analyse liquidity risk and the tools that manage it.",
          "Explain gates, side pockets, and suspension mechanics.",
          "Assess operational risk and control frameworks.",
          "Evaluate the interaction of liquidity, valuation, and leverage.",
        ],
        syllabusAreas: [
          area(
            "Valuation",
            [
              "Fair-value hierarchy Levels 1–3",
              "Independent pricing and valuation committees",
              "Valuation uncertainty and disclosure",
            ],
            "35–40%"
          ),
          area(
            "Liquidity risk",
            [
              "Asset vs funding liquidity",
              "Gates, side pockets, suspensions",
              "Redemption and liquidity mismatch",
            ],
            "30–35%"
          ),
          area(
            "Operational risk",
            [
              "Control frameworks and segregation",
              "Cyber, counterparty, and process risk",
              "Business continuity",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m8-l1",
            "Fair-value hierarchy and pricing",
            50,
            ["Classify by fair-value level", "Explain uncertainty"],
            [
              "Level 1: quoted prices; Level 2: observable inputs; Level 3: unobservable model inputs.",
              "Level 3 assets carry the greatest valuation uncertainty and manipulation risk.",
              "Disclosure of methods and sensitivities matters most for Level 3.",
              "Independent price verification reduces conflicts.",
            ],
            [
              "What distinguishes Level 2 from Level 3 assets?",
              "Why is Level 3 valuation especially conflict-prone?",
            ]
          ),
          lesson(
            "caia-l2-m8-l2",
            "Valuation governance",
            45,
            ["Design valuation policy", "Explain committee role"],
            [
              "A valuation committee independent of the deal team reviews marks.",
              "Consistent, documented methodologies reduce discretion abuse.",
              "Third-party valuation agents add independence for illiquid assets.",
              "Back-testing marks against realised exits validates the process.",
            ],
            [
              "Why should valuation be independent of the deal team?",
              "How does comparing marks to exits validate valuation?",
            ]
          ),
          lesson(
            "caia-l2-m8-l3",
            "Liquidity risk and mismatch",
            50,
            ["Distinguish liquidity types", "Diagnose mismatch"],
            [
              "Asset liquidity (can you sell?) differs from funding liquidity (can you finance?).",
              "Liquidity mismatch — liquid terms on illiquid assets — is a core failure mode.",
              "Redemption runs force selling and mark deterioration.",
              "Match redemption terms to underlying asset liquidity.",
            ],
            [
              "How does a liquidity mismatch arise?",
              "Why must redemption terms match asset liquidity?",
            ]
          ),
          lesson(
            "caia-l2-m8-l4",
            "Liquidity-management tools",
            40,
            ["Apply gates and side pockets", "Explain suspensions"],
            [
              "Gates limit total redemptions in a period to prevent forced sales.",
              "Side pockets segregate illiquid positions from the main portfolio.",
              "Suspensions halt redemptions in extreme stress.",
              "These tools protect remaining investors but can trap capital.",
            ],
            [
              "What does a side pocket accomplish?",
              "How do gates protect remaining investors?",
            ]
          ),
          lesson(
            "caia-l2-m8-l5",
            "Operational risk frameworks",
            45,
            ["Assess operational risk", "Design controls"],
            [
              "Operational risk spans process, people, systems, cyber, and counterparties.",
              "Segregation of duties and independent reconciliation are foundational controls.",
              "Business continuity and cyber resilience are increasingly critical.",
              "Operational failures often precede or amplify investment losses.",
            ],
            [
              "Which controls are foundational to operational risk management?",
              "Why does operational risk amplify investment risk?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Fair-value hierarchy: Level 1 (quoted) → Level 2 (observable) → Level 3 (model).",
          "Liquidity mismatch = investor redemption liquidity − asset liquidity.",
          "Control principle: independence + segregation + reconciliation.",
          "Liquidity tools ladder: gates → side pockets → suspension.",
        ],
        commonTraps: [
          "Treating Level 3 marks as precise.",
          "Offering liquid redemption terms on illiquid assets.",
          "Viewing gates/side pockets as costless to investors.",
          "Separating operational risk from investment risk analysis.",
        ],
        examTechnique: [
          "Classify assets by fair-value level before discussing valuation risk.",
          "Diagnose liquidity mismatch explicitly in liquidity essays.",
          "Recommend specific controls, not generic 'better governance'.",
        ],
        practicePlan: [
          "Week 1: fair-value hierarchy and valuation governance.",
          "Week 2: liquidity risk and management tools.",
          "Week 3: operational-risk control essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Risk Management.",
          "IOSCO and industry guidance on fund liquidity management.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m9",
        examId: "caia",
        levelId: "l2",
        title: "Manager selection & due diligence",
        examFormat:
          "MCQs and constructed-response on manager evaluation, ODD, and selection frameworks.",
        estimatedStudyHours: 22,
        overview:
          "Building on Level I due diligence, this module covers manager selection analytics: assessing skill persistence, style consistency, alignment, and integrating investment and operational due diligence into a selection decision.",
        whyItMatters:
          "Manager selection is the dominant driver of net alternatives returns given wide dispersion between top and bottom managers. Rigorous, structured selection is a tested and practical skill.",
        learningOutcomes: [
          "Evaluate skill persistence versus luck in manager track records.",
          "Assess alignment of interests and terms.",
          "Integrate investment and operational due diligence into a decision.",
          "Analyse capacity, style consistency, and organisational stability.",
          "Design a scoring framework for manager comparison.",
          "Recognise selection biases and how to mitigate them.",
        ],
        syllabusAreas: [
          area(
            "Skill assessment",
            [
              "Persistence vs luck; dispersion across managers",
              "Attribution and style consistency",
              "Capacity and scalability",
            ],
            "35–40%"
          ),
          area(
            "Alignment and organisation",
            [
              "Fees, terms, and co-investment alignment",
              "Team stability and ownership",
              "Governance and key-person risk",
            ],
            "30–35%"
          ),
          area(
            "Selection process",
            [
              "Integrating IDD and ODD",
              "Scoring and comparison frameworks",
              "Selection biases and mitigation",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m9-l1",
            "Skill, persistence, and dispersion",
            50,
            ["Assess persistence", "Interpret dispersion"],
            [
              "Manager return dispersion in alternatives is wide, raising selection stakes.",
              "Persistence is stronger in private markets than in liquid strategies, but still uncertain.",
              "Short track records provide weak statistical evidence of skill.",
              "Attribution helps separate repeatable skill from favourable conditions.",
            ],
            [
              "Why does wide dispersion raise the value of selection skill?",
              "Why is a short track record weak evidence of skill?",
            ]
          ),
          lesson(
            "caia-l2-m9-l2",
            "Alignment of interests",
            45,
            ["Assess alignment", "Evaluate terms"],
            [
              "GP commitment ('skin in the game') aligns incentives with LPs.",
              "Fee structures, hurdles, and clawbacks shape alignment.",
              "Deal-by-deal carry can misalign timing incentives.",
              "Co-investment and side letters can create differential alignment among LPs.",
            ],
            [
              "How does GP commitment improve alignment?",
              "Why can deal-by-deal carry misalign incentives?",
            ]
          ),
          lesson(
            "caia-l2-m9-l3",
            "Organisation and key-person risk",
            45,
            ["Assess team stability", "Evaluate key-person risk"],
            [
              "Ownership breadth and succession planning reduce key-person risk.",
              "Team turnover can signal deteriorating culture or economics.",
              "Growth in assets and headcount can dilute the original edge.",
              "Governance and controls scale (or fail to scale) with the firm.",
            ],
            [
              "Why is key-person risk a selection concern?",
              "How can rapid asset growth erode a manager's edge?",
            ]
          ),
          lesson(
            "caia-l2-m9-l4",
            "Integrating IDD and ODD",
            45,
            ["Combine IDD and ODD", "Weight veto power to ODD"],
            [
              "A strong investment case cannot override serious operational red flags.",
              "ODD often holds veto power in institutional processes.",
              "Findings should be documented and revisited on monitoring.",
              "The decision integrates skill, alignment, operations, and terms.",
            ],
            [
              "Why can ODD veto an attractive investment case?",
              "What dimensions does the final decision integrate?",
            ]
          ),
          lesson(
            "caia-l2-m9-l5",
            "Scoring frameworks and biases",
            45,
            ["Build a scoring model", "Mitigate selection bias"],
            [
              "Weighted scoring across skill, alignment, operations, and terms aids comparison.",
              "Beware recency, halo, and access biases in selection.",
              "Structured processes reduce behavioural error.",
              "Document rationale to enable later evaluation of decisions.",
            ],
            [
              "How does a scoring framework reduce behavioural bias?",
              "Name two biases that distort manager selection.",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Selection value ≈ dispersion × selection skill (higher dispersion raises the prize).",
          "Alignment checklist: GP commitment + fair terms + clawback + no timing games.",
          "Decision integration: IDD × ODD × alignment × terms (ODD can veto).",
          "Weighted score = Σ(criterion weight × criterion rating).",
        ],
        commonTraps: [
          "Overweighting recent performance (recency bias).",
          "Letting an attractive investment case override ODD red flags.",
          "Treating short track records as statistically meaningful.",
          "Ignoring capacity erosion as assets grow.",
        ],
        examTechnique: [
          "Address both IDD and ODD in selection essays.",
          "State how you separate skill from luck.",
          "Name the specific alignment or organisational risk in scenarios.",
        ],
        practicePlan: [
          "Week 1: skill, persistence, and attribution.",
          "Week 2: alignment and organisational risk.",
          "Week 3: integrated selection essays and scoring.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Manager Selection.",
          "Research on performance persistence in alternatives.",
        ],
      }),
      courseware({
        moduleId: "caia-l2-m10",
        examId: "caia",
        levelId: "l2",
        title: "Monitoring, reporting & governance",
        examFormat:
          "MCQs and constructed-response on ongoing monitoring, performance reporting, and governance frameworks.",
        estimatedStudyHours: 20,
        overview:
          "The final Level II module covers what happens after investment: monitoring managers, interpreting reports, benchmarking, and applying governance and stewardship — including ESG considerations — to alternatives programmes.",
        whyItMatters:
          "Sound monitoring and governance protect capital and support accountability over the long lives of private investments. This is where diligence becomes an ongoing discipline.",
        learningOutcomes: [
          "Design an ongoing monitoring and re-underwriting process.",
          "Interpret performance and risk reports for alternatives.",
          "Select and apply appropriate benchmarks (including PME).",
          "Apply governance and stewardship, including ESG, to programmes.",
          "Detect deterioration and define escalation triggers.",
          "Communicate results to boards and committees effectively.",
        ],
        syllabusAreas: [
          area(
            "Monitoring and reporting",
            [
              "Ongoing monitoring and re-underwriting",
              "Interpreting NAV, exposure, and risk reports",
              "Escalation triggers",
            ],
            "35–40%"
          ),
          area(
            "Benchmarking and attribution",
            [
              "PME and peer benchmarks",
              "Attribution and fee analysis",
              "Reporting standards (e.g. GIPS considerations)",
            ],
            "30–35%"
          ),
          area(
            "Governance and stewardship",
            [
              "Board/committee oversight",
              "ESG integration and stewardship",
              "Conflicts and transparency",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "caia-l2-m10-l1",
            "Ongoing monitoring and re-underwriting",
            50,
            ["Design monitoring", "Set escalation triggers"],
            [
              "Monitor performance, exposures, style drift, personnel, and terms continuously.",
              "Re-underwrite periodically and after material events.",
              "Predefine escalation and redemption triggers to avoid emotional decisions.",
              "Document monitoring to support accountability.",
            ],
            [
              "Why predefine escalation triggers?",
              "What events should prompt re-underwriting?",
            ]
          ),
          lesson(
            "caia-l2-m10-l2",
            "Interpreting reports",
            45,
            ["Read alternatives reports", "Spot inconsistencies"],
            [
              "Reconcile NAV, cash flows, and exposure statements for consistency.",
              "Watch for style drift or exposures inconsistent with the mandate.",
              "Lagged and estimated marks require careful interpretation.",
              "Cross-check manager reports against administrator data.",
            ],
            [
              "How can style drift appear in exposure reports?",
              "Why cross-check manager and administrator data?",
            ]
          ),
          lesson(
            "caia-l2-m10-l3",
            "Benchmarking and attribution",
            50,
            ["Select benchmarks", "Attribute performance"],
            [
              "PME benchmarks private returns against public alternatives.",
              "Peer benchmarks require care due to survivorship and vintage effects.",
              "Attribution separates market, strategy, and manager contributions.",
              "Report net of fees to reflect investor experience.",
            ],
            [
              "Why is PME useful for private-market benchmarking?",
              "What biases affect peer benchmarks?",
            ]
          ),
          lesson(
            "caia-l2-m10-l4",
            "Governance and stewardship",
            45,
            ["Apply governance", "Integrate ESG"],
            [
              "Boards and committees provide oversight, set policy, and review performance.",
              "Stewardship includes engagement and voting where applicable.",
              "ESG integration considers material sustainability risks in monitoring.",
              "Transparency and conflict management sustain trust.",
            ],
            [
              "What is the oversight role of an investment committee?",
              "How does ESG integration fit ongoing monitoring?",
            ]
          ),
          lesson(
            "caia-l2-m10-l5",
            "Communicating to stakeholders",
            40,
            ["Report to boards", "Communicate clearly"],
            [
              "Tailor reporting to the audience — boards need concise, decision-relevant summaries.",
              "Present net, risk-adjusted, liquidity-aware results honestly.",
              "Highlight risks and weak areas, not only successes.",
              "Consistent, transparent reporting supports good governance.",
            ],
            [
              "What should board-level reporting emphasise?",
              "Why report weaknesses alongside successes?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Monitoring loop: observe → compare to thesis → escalate if triggers hit → re-underwrite.",
          "PME > 1 indicates outperformance versus the public alternative.",
          "Attribution: total = market + strategy + manager (net of fees).",
          "Governance: oversight + stewardship + transparency + conflict management.",
        ],
        commonTraps: [
          "Treating monitoring as passive report-filing.",
          "Benchmarking without adjusting for survivorship/vintage effects.",
          "Reporting gross returns that overstate investor experience.",
          "Reacting emotionally without predefined triggers.",
        ],
        examTechnique: [
          "For monitoring essays, specify triggers and re-underwriting events.",
          "Choose PME when comparing private returns to public markets.",
          "Frame governance answers around oversight, stewardship, and transparency.",
        ],
        practicePlan: [
          "Week 1: monitoring design and report interpretation.",
          "Week 2: benchmarking and attribution.",
          "Week 3: governance, ESG, and communication essays.",
        ],
        furtherReading: [
          "CAIA Level II curriculum — Monitoring and Governance.",
          "GIPS standards and ILPA reporting guidance.",
        ],
      }),
    ],
  },
];
