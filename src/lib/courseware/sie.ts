import type { CoursewareBundle } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * SIE (Securities Industry Essentials) courseware for the single exam.
 * Module ids follow `sie-full-m${i+1}` and mirror exams.ts topic order for the
 * "full" level (the SIE Exam).
 */
export const SIE_COURSEWARE: CoursewareBundle[] = [
  {
    examId: "sie",
    levelId: "full",
    modules: [
      courseware({
        moduleId: "sie-full-m1",
        examId: "sie",
        levelId: "full",
        title: "Capital markets structure — issuers, investors & intermediaries",
        examFormat:
          "SIE exam: 75 scored multiple-choice questions (plus unscored pretest items), 1 hour 45 minutes, passing score 70. This topic falls under 'Knowledge of Capital Markets' (~16% of the exam).",
        estimatedStudyHours: 16,
        overview:
          "This module introduces the structure of the securities markets: who issues securities, who invests, and the intermediaries that connect them. It covers primary vs secondary markets, market participants, and the roles of broker-dealers, banks, and regulators.",
        whyItMatters:
          "Understanding the market's participants and their roles is the foundation for every later SIE topic. Many questions test who does what, and clear role definitions prevent confusion across products and regulations.",
        learningOutcomes: [
          "Distinguish primary and secondary markets.",
          "Identify the main types of issuers and their motivations.",
          "Classify investors as retail, accredited, and institutional.",
          "Describe the roles of broker-dealers, banks, and transfer agents.",
          "Explain the functions of exchanges and over-the-counter markets.",
          "Outline how capital flows from investors to issuers.",
        ],
        syllabusAreas: [
          area(
            "Markets and issuers",
            [
              "Primary vs secondary markets",
              "Corporate, municipal, and government issuers",
              "Reasons entities raise capital",
            ],
            "35–40%"
          ),
          area(
            "Investors",
            [
              "Retail vs institutional investors",
              "Accredited investor concept",
              "Investor objectives and suitability basics",
            ],
            "25–30%"
          ),
          area(
            "Intermediaries and infrastructure",
            [
              "Broker-dealers and their roles (agent vs principal)",
              "Banks, transfer agents, clearing firms",
              "Exchanges vs OTC markets",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m1-l1",
            "Primary and secondary markets",
            40,
            ["Distinguish market types", "Explain capital flow"],
            [
              "The primary market is where new securities are issued and proceeds go to the issuer.",
              "The secondary market is where existing securities trade between investors.",
              "Issuers raise capital only in the primary market.",
              "Liquidity in the secondary market supports primary-market pricing.",
            ],
            [
              "In which market does the issuer receive proceeds?",
              "Why does secondary-market liquidity matter to issuers?",
            ]
          ),
          lesson(
            "sie-full-m1-l2",
            "Issuers and why they raise capital",
            40,
            ["Identify issuer types", "Explain issuance motives"],
            [
              "Corporations issue equity and debt to fund growth and operations.",
              "Municipalities issue bonds for public projects.",
              "The federal government and agencies issue Treasuries and agency securities.",
              "Issuers weigh cost of capital and control when choosing debt vs equity.",
            ],
            [
              "Why might a corporation issue debt instead of equity?",
              "What do municipalities typically fund with bonds?",
            ]
          ),
          lesson(
            "sie-full-m1-l3",
            "Investors: retail, accredited, and institutional",
            40,
            ["Classify investors", "Explain the accredited concept"],
            [
              "Retail investors are individuals; institutions include funds, pensions, and insurers.",
              "Accredited investors meet income or net-worth thresholds and can access private offerings.",
              "Institutional investors trade in size and receive different regulatory treatment.",
              "Investor type affects product access and protections.",
            ],
            [
              "What qualifies someone as an accredited investor?",
              "How does investor type affect product access?",
            ]
          ),
          lesson(
            "sie-full-m1-l4",
            "Broker-dealers and intermediaries",
            45,
            ["Explain BD roles", "Distinguish agent vs principal"],
            [
              "As agent (broker), a firm executes trades for clients and earns a commission.",
              "As principal (dealer), a firm trades from its own inventory and earns a markup/markdown.",
              "Transfer agents and clearing firms handle recordkeeping and settlement.",
              "Banks may act as underwriters and custodians.",
            ],
            [
              "How does a firm acting as agent differ from acting as principal?",
              "What does a clearing firm do?",
            ],
            "When a firm buys stock into its own account and later sells it to a client with a markup, it acts as a principal (dealer); when it simply routes the client's order to the market for a commission, it acts as an agent (broker)."
          ),
          lesson(
            "sie-full-m1-l5",
            "Exchanges and OTC markets",
            40,
            ["Compare market venues", "Explain OTC trading"],
            [
              "Exchanges provide centralised, auction-based trading with listing standards.",
              "OTC markets are decentralised dealer networks (e.g. for many bonds).",
              "Market makers provide liquidity by quoting bid/ask prices.",
              "Different venues suit different securities and liquidity needs.",
            ],
            [
              "How does an exchange differ from an OTC market?",
              "What role do market makers play?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Capital flow: investors → intermediaries → issuers (primary market).",
          "Agent vs principal: commission (agent) vs markup/markdown (principal).",
          "Issuer choice: debt (cost, no dilution) vs equity (no repayment, dilution).",
          "Venue map: exchange (centralised/auction) vs OTC (dealer network).",
        ],
        commonTraps: [
          "Thinking issuers receive proceeds from secondary-market trades.",
          "Confusing agent (commission) with principal (markup) transactions.",
          "Assuming all securities trade on exchanges.",
          "Mixing up the accredited-investor thresholds and purpose.",
        ],
        examTechnique: [
          "Identify the market (primary vs secondary) the question describes.",
          "Determine whether the firm acts as agent or principal.",
          "Match each participant to its precise function.",
        ],
        practicePlan: [
          "Week 1: markets, issuers, and investors.",
          "Week 2: intermediaries and venues with MCQs.",
          "Week 3: mixed review of capital-markets structure.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Knowledge of Capital Markets).",
          "SEC — Investor.gov market basics.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m2",
        examId: "sie",
        levelId: "full",
        title: "Economic factors & offering process (IPOs, private placements)",
        examFormat:
          "MCQs on economic indicators, the business cycle, and the securities offering/registration process.",
        estimatedStudyHours: 16,
        overview:
          "This module covers the economic factors that influence markets — indicators, the business cycle, interest rates, and monetary/fiscal policy — and the process of bringing securities to market through registered offerings and exemptions like private placements.",
        whyItMatters:
          "Economic context drives security prices and investor behaviour, and the offering process is core to how the primary market functions. Both are consistently tested on the SIE.",
        learningOutcomes: [
          "Interpret key economic indicators and the business cycle.",
          "Explain how interest rates and inflation affect securities.",
          "Distinguish monetary from fiscal policy.",
          "Describe the securities registration and underwriting process.",
          "Identify exempt securities and exempt transactions.",
          "Explain private placements and Regulation D basics.",
        ],
        syllabusAreas: [
          area(
            "Economic factors",
            [
              "Business cycle and indicators (leading/lagging)",
              "Interest rates, inflation, and yield effects",
              "Monetary and fiscal policy",
            ],
            "40–45%"
          ),
          area(
            "The offering process",
            [
              "Registration statement and prospectus",
              "Underwriting roles and the cooling-off period",
              "Shelf registration basics",
            ],
            "30–35%"
          ),
          area(
            "Exemptions and private placements",
            [
              "Exempt securities and transactions",
              "Regulation D private placements",
              "Restricted vs control securities (overview)",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m2-l1",
            "Business cycle and economic indicators",
            40,
            ["Interpret indicators", "Identify cycle phases"],
            [
              "The business cycle moves through expansion, peak, contraction, and trough.",
              "Leading indicators (e.g. building permits) precede changes; lagging indicators confirm them.",
              "GDP, unemployment, and CPI describe economic conditions.",
              "Markets often anticipate cycle turns before they appear in data.",
            ],
            [
              "What are the four phases of the business cycle?",
              "How do leading and lagging indicators differ?",
            ]
          ),
          lesson(
            "sie-full-m2-l2",
            "Interest rates, inflation, and policy",
            45,
            ["Link rates to prices", "Distinguish policy tools"],
            [
              "Rising interest rates lower bond prices and raise borrowing costs.",
              "Inflation erodes purchasing power and influences rate expectations.",
              "Monetary policy (central bank) adjusts money supply and rates.",
              "Fiscal policy (government) uses taxing and spending.",
            ],
            [
              "How do rising rates affect bond prices?",
              "What distinguishes monetary from fiscal policy?",
            ]
          ),
          lesson(
            "sie-full-m2-l3",
            "The registration and underwriting process",
            45,
            ["Explain registration", "Describe underwriting roles"],
            [
              "Issuers file a registration statement; the prospectus discloses material information.",
              "The cooling-off period (~20 days minimum) precedes effectiveness; only limited activity is allowed.",
              "Underwriters may act on a firm-commitment or best-efforts basis.",
              "A syndicate spreads underwriting risk among firms.",
            ],
            [
              "What is permitted during the cooling-off period?",
              "How does firm commitment differ from best efforts?",
            ]
          ),
          lesson(
            "sie-full-m2-l4",
            "Exempt securities and transactions",
            40,
            ["Identify exemptions", "Explain their basis"],
            [
              "Exempt securities include U.S. government and municipal securities.",
              "Exempt transactions include certain private and institutional offerings.",
              "Exemptions reduce or remove registration requirements.",
              "The exemption applies to either the security or the transaction, not always both.",
            ],
            [
              "Name two categories of exempt securities.",
              "What is the difference between an exempt security and an exempt transaction?",
            ]
          ),
          lesson(
            "sie-full-m2-l5",
            "Private placements and Regulation D",
            40,
            ["Explain Reg D", "Describe restricted securities"],
            [
              "Regulation D permits private placements without full registration to accredited (and limited non-accredited) investors.",
              "Private placements rely on the accredited-investor concept and limited disclosure.",
              "Securities sold this way are typically restricted and have resale limits.",
              "Control and restricted securities have specific resale rules (Rule 144 overview).",
            ],
            [
              "Who can typically buy Regulation D private placements?",
              "Why are privately placed securities usually restricted?",
            ],
            "A startup raises capital under Regulation D by selling shares only to accredited investors; those shares are restricted, so buyers generally must hold them and satisfy resale conditions before selling."
          ),
        ],
        frameworksAndFormulas: [
          "Cycle sequence: expansion → peak → contraction → trough.",
          "Rate–price rule: rates up → bond prices down (inverse).",
          "Offering steps: file registration → cooling-off → effective → sale.",
          "Exemption logic: exempt security vs exempt transaction.",
        ],
        commonTraps: [
          "Confusing leading and lagging indicators.",
          "Forgetting the inverse relationship between rates and bond prices.",
          "Mixing up firm-commitment and best-efforts underwriting.",
          "Assuming exempt transactions also exempt the security (and vice versa).",
        ],
        examTechnique: [
          "For economic items, connect the indicator or policy to a market effect.",
          "Track the offering timeline steps in order.",
          "Separate the exemption of a security from that of a transaction.",
        ],
        practicePlan: [
          "Week 1: economic indicators and policy.",
          "Week 2: registration and underwriting.",
          "Week 3: exemptions and private-placement MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Understanding Products; Regulatory Framework).",
          "SEC — Securities Act registration and Regulation D.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m3",
        examId: "sie",
        levelId: "full",
        title: "Equity & debt securities characteristics",
        examFormat:
          "MCQs on stock and bond features, rights, yields, and risks. Part of the large 'Understanding Products & Their Risks' section (~44%).",
        estimatedStudyHours: 18,
        overview:
          "This module covers the two core securities: equity (common and preferred stock) and debt (bonds). It details their features, shareholder/creditor rights, income, valuation basics, and associated risks.",
        whyItMatters:
          "Equities and bonds are the building blocks of the securities industry and the largest tested product area. Solid knowledge of their features and risks anchors the entire exam.",
        learningOutcomes: [
          "Describe common and preferred stock features and rights.",
          "Explain dividends, voting, and shareholder priorities.",
          "Describe bond features: par, coupon, maturity, and seniority.",
          "Compute and interpret bond yields and the price-yield relationship.",
          "Compare the risks of equity and debt securities.",
          "Explain corporate actions and their effects on holders.",
        ],
        syllabusAreas: [
          area(
            "Equity securities",
            [
              "Common vs preferred stock",
              "Voting, dividends, and rights/warrants",
              "Shareholder priority in liquidation",
            ],
            "35–40%"
          ),
          area(
            "Debt securities",
            [
              "Par, coupon, maturity, and seniority",
              "Yields: current yield, YTM, and price-yield relationship",
              "Ratings and credit risk",
            ],
            "35–40%"
          ),
          area(
            "Risks and corporate actions",
            [
              "Equity vs debt risk comparison",
              "Interest-rate, credit, and reinvestment risk",
              "Splits, dividends, and tender offers",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m3-l1",
            "Common and preferred stock",
            45,
            ["Compare stock types", "Explain shareholder rights"],
            [
              "Common stock carries voting rights and residual ownership with growth potential.",
              "Preferred stock pays fixed dividends and has priority over common in dividends and liquidation.",
              "Cumulative preferred accrues unpaid dividends.",
              "Rights and warrants let holders buy additional shares.",
            ],
            [
              "How does preferred stock differ from common stock?",
              "What does cumulative preferred stock guarantee?",
            ]
          ),
          lesson(
            "sie-full-m3-l2",
            "Dividends, voting, and priority",
            40,
            ["Explain dividends", "Rank liquidation priority"],
            [
              "Dividends are declared by the board and are not guaranteed for common stock.",
              "Key dividend dates: declaration, ex-date, record, and payable.",
              "In liquidation, priority runs: secured creditors → unsecured creditors → preferred → common.",
              "Voting elects directors and approves major actions.",
            ],
            [
              "What is the order of priority in a liquidation?",
              "Why does the ex-dividend date matter?",
            ]
          ),
          lesson(
            "sie-full-m3-l3",
            "Bond features and seniority",
            45,
            ["Describe bond features", "Explain seniority"],
            [
              "Bonds have par value, a coupon rate, and a maturity date.",
              "Secured bonds are backed by collateral; debentures are unsecured.",
              "Seniority determines repayment order in default.",
              "Callable and convertible features affect value and risk.",
            ],
            [
              "What is the difference between a secured bond and a debenture?",
              "How does a call feature affect a bondholder?",
            ]
          ),
          lesson(
            "sie-full-m3-l4",
            "Bond yields and the price-yield relationship",
            50,
            ["Compute yields", "Explain price-yield inverse"],
            [
              "Current yield = annual coupon ÷ market price.",
              "Yield to maturity reflects total return if held to maturity.",
              "Bond prices and yields move inversely.",
              "Premium bonds have coupon > yield; discount bonds have coupon < yield.",
            ],
            [
              "How is current yield calculated?",
              "Why do premium bonds have a coupon rate above their yield?",
            ],
            "A bond with a $50 annual coupon trading at $1,000 has a 5% current yield; if its price falls to $950, the current yield rises to about 5.26%, illustrating the inverse price-yield relationship."
          ),
          lesson(
            "sie-full-m3-l5",
            "Risks and corporate actions",
            40,
            ["Compare risks", "Explain corporate actions"],
            [
              "Equity carries market and business risk with unlimited upside; debt carries interest-rate and credit risk.",
              "Interest-rate risk rises with maturity; reinvestment risk affects coupon reinvestment.",
              "Stock splits change share count and price without changing total value.",
              "Tender offers and buybacks are corporate actions affecting holders.",
            ],
            [
              "What is interest-rate risk, and how does maturity affect it?",
              "How does a 2-for-1 stock split affect price and share count?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Current yield = annual coupon ÷ market price.",
          "Price-yield rule: prices and yields move inversely.",
          "Premium/discount: coupon > yield (premium), coupon < yield (discount).",
          "Liquidation priority: secured → unsecured → preferred → common.",
        ],
        commonTraps: [
          "Assuming common-stock dividends are guaranteed.",
          "Reversing the inverse price-yield relationship.",
          "Confusing secured bonds with debentures.",
          "Thinking a stock split changes total investment value.",
        ],
        examTechnique: [
          "For yield questions, identify which yield is asked before computing.",
          "Use the liquidation-priority ladder for creditor/holder questions.",
          "Link each risk to the security type it most affects.",
        ],
        practicePlan: [
          "Week 1: equity features and shareholder rights.",
          "Week 2: bond features and yield computations.",
          "Week 3: risks, corporate actions, and mixed MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Understanding Products & Their Risks).",
          "SEC — Investor.gov stocks and bonds basics.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m4",
        examId: "sie",
        levelId: "full",
        title: "Packaged products — mutual funds, ETFs, UITs, variable contracts",
        examFormat:
          "MCQs on pooled investment vehicles, share classes, fees, and variable products.",
        estimatedStudyHours: 16,
        overview:
          "This module covers packaged (pooled) investment products: mutual funds, exchange-traded funds, unit investment trusts, and variable annuities/life insurance. It emphasises structure, pricing, fees, and suitability considerations.",
        whyItMatters:
          "Packaged products are widely sold to retail investors, so their structures, costs, and suitability are core SIE content and central to protecting clients.",
        learningOutcomes: [
          "Distinguish open-end funds, closed-end funds, ETFs, and UITs.",
          "Explain NAV, pricing, and forward pricing for mutual funds.",
          "Compare mutual fund share classes and fee structures.",
          "Describe ETF creation/redemption and trading features.",
          "Explain variable annuities and variable life insurance.",
          "Identify suitability and disclosure considerations for packaged products.",
        ],
        syllabusAreas: [
          area(
            "Investment company products",
            [
              "Open-end vs closed-end funds",
              "ETFs and UITs",
              "NAV and pricing",
            ],
            "40–45%"
          ),
          area(
            "Fees and share classes",
            [
              "Sales charges (loads) and breakpoints",
              "Class A/B/C shares and 12b-1 fees",
              "Expense ratios",
            ],
            "25–30%"
          ),
          area(
            "Variable products",
            [
              "Variable annuities: accumulation and payout",
              "Variable life insurance",
              "Suitability and disclosure",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m4-l1",
            "Investment company structures",
            45,
            ["Compare fund structures", "Explain pricing"],
            [
              "Open-end funds continuously issue/redeem shares at NAV.",
              "Closed-end funds have a fixed share count and trade at a premium/discount to NAV.",
              "ETFs trade intraday like stocks and track an index or strategy.",
              "UITs hold a fixed portfolio with a set termination date.",
            ],
            [
              "How do open-end and closed-end funds differ?",
              "Why can a closed-end fund trade at a discount to NAV?",
            ]
          ),
          lesson(
            "sie-full-m4-l2",
            "NAV and forward pricing",
            40,
            ["Compute NAV", "Explain forward pricing"],
            [
              "NAV = (assets − liabilities) ÷ shares outstanding.",
              "Mutual fund orders receive the next computed NAV (forward pricing).",
              "NAV is typically calculated once per business day.",
              "ETFs trade at market prices that may differ slightly from NAV.",
            ],
            [
              "How is NAV calculated?",
              "What is forward pricing for mutual funds?",
            ]
          ),
          lesson(
            "sie-full-m4-l3",
            "Share classes and fees",
            45,
            ["Compare share classes", "Apply breakpoints"],
            [
              "Class A shares have front-end loads with breakpoint discounts for larger investments.",
              "Class B shares have back-end (contingent deferred) loads that decline over time.",
              "Class C shares have level loads and ongoing 12b-1 fees.",
              "Breakpoint sales and letters of intent reduce sales charges.",
            ],
            [
              "How do Class A and Class C shares differ in fees?",
              "What is a breakpoint, and why does it matter?",
            ],
            "An investor placing a large lump sum may reach an A-share breakpoint that lowers the front-end load; splitting the purchase to avoid a breakpoint (breakpoint selling) is a prohibited practice."
          ),
          lesson(
            "sie-full-m4-l4",
            "ETFs in depth",
            40,
            ["Explain creation/redemption", "Compare with mutual funds"],
            [
              "Authorized participants create/redeem ETF shares in kind, keeping price near NAV.",
              "ETFs offer intraday trading, tax efficiency, and typically low costs.",
              "Bid-ask spreads and premiums/discounts are trading considerations.",
              "ETFs suit cost- and tax-sensitive investors.",
            ],
            [
              "How does the creation/redemption mechanism keep ETF prices near NAV?",
              "Why are ETFs often more tax-efficient than mutual funds?",
            ]
          ),
          lesson(
            "sie-full-m4-l5",
            "Variable annuities and variable life",
            45,
            ["Explain variable products", "Assess suitability"],
            [
              "Variable annuities have accumulation and annuitisation (payout) phases with tax-deferred growth.",
              "Sub-accounts invest in fund-like options; performance varies with markets.",
              "Variable life combines insurance with investment sub-accounts.",
              "High fees, surrender charges, and complexity raise suitability and disclosure duties.",
            ],
            [
              "What are the two phases of a variable annuity?",
              "Why are suitability duties heightened for variable products?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "NAV = (assets − liabilities) ÷ shares outstanding.",
          "Forward pricing: orders execute at the next computed NAV.",
          "Share-class trade-off: front-end (A) vs back-end (B) vs level (C) loads.",
          "ETF arbitrage: creation/redemption keeps price aligned to NAV.",
        ],
        commonTraps: [
          "Assuming closed-end funds always trade at NAV.",
          "Confusing A-share front loads with C-share level loads.",
          "Overlooking breakpoint-selling as a prohibited practice.",
          "Ignoring surrender charges and fees in variable-product suitability.",
        ],
        examTechnique: [
          "Match the product structure to its pricing mechanism.",
          "For share-class questions, connect the investor's horizon and amount to the best class.",
          "Flag suitability issues for high-fee, complex products.",
        ],
        practicePlan: [
          "Week 1: fund structures and NAV.",
          "Week 2: share classes, fees, and ETFs.",
          "Week 3: variable products and suitability MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Packaged Products).",
          "SEC — Investor bulletins on mutual funds, ETFs, and variable annuities.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m5",
        examId: "sie",
        levelId: "full",
        title: "Options, municipal securities & other products (overview)",
        examFormat:
          "MCQs on options basics, municipal securities, and other products at an introductory level.",
        estimatedStudyHours: 16,
        overview:
          "This module gives an overview of options (calls and puts), municipal securities, and other products such as REITs and direct participation programs. The SIE tests fundamentals rather than advanced strategies.",
        whyItMatters:
          "These products broaden the product knowledge the SIE requires. Understanding option basics and municipal tax features is frequently tested and foundational for later licensing exams.",
        learningOutcomes: [
          "Define calls and puts and basic option terminology.",
          "Explain the rights and obligations of option buyers and sellers.",
          "Describe municipal securities and their tax advantages.",
          "Distinguish general obligation from revenue bonds.",
          "Explain REITs and direct participation programs at a basic level.",
          "Identify the risks of these products.",
        ],
        syllabusAreas: [
          area(
            "Options basics",
            [
              "Calls and puts; buyers vs sellers",
              "Strike, premium, expiration",
              "In/at/out of the money",
            ],
            "35–40%"
          ),
          area(
            "Municipal securities",
            [
              "General obligation vs revenue bonds",
              "Tax-exempt interest and taxable-equivalent yield",
              "Issuers and uses",
            ],
            "30–35%"
          ),
          area(
            "Other products",
            [
              "REITs and their income features",
              "Direct participation programs (DPPs)",
              "Associated risks",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m5-l1",
            "Option fundamentals",
            45,
            ["Define calls and puts", "Explain moneyness"],
            [
              "A call gives the right to buy; a put gives the right to sell, at the strike price.",
              "Buyers pay a premium for rights; sellers (writers) receive it and take on obligations.",
              "A call is in the money when the stock is above the strike; a put when below.",
              "Options have expiration dates and time value.",
            ],
            [
              "What right does a put option grant?",
              "When is a call option in the money?",
            ]
          ),
          lesson(
            "sie-full-m5-l2",
            "Option rights, obligations, and risk",
            45,
            ["Compare buyers and sellers", "Assess risk profiles"],
            [
              "Long option risk is limited to the premium paid.",
              "A naked call writer faces theoretically unlimited risk.",
              "Options can hedge or speculate.",
              "Time decay erodes option value as expiration nears.",
            ],
            [
              "What is the maximum loss for an option buyer?",
              "Why is writing a naked call especially risky?",
            ]
          ),
          lesson(
            "sie-full-m5-l3",
            "Municipal securities and taxation",
            50,
            ["Compare muni types", "Compute taxable-equivalent yield"],
            [
              "General obligation bonds are backed by the issuer's taxing power.",
              "Revenue bonds are repaid from specific project revenues.",
              "Municipal interest is generally exempt from federal income tax.",
              "Taxable-equivalent yield = muni yield ÷ (1 − tax rate).",
            ],
            [
              "How do GO and revenue bonds differ in backing?",
              "Why are municipal bonds attractive to high-tax-bracket investors?",
            ],
            "A 3% tax-exempt muni yields a taxable-equivalent of 3% ÷ (1 − 0.35) ≈ 4.62% for an investor in the 35% bracket, explaining munis' appeal to high earners."
          ),
          lesson(
            "sie-full-m5-l4",
            "REITs",
            35,
            ["Describe REITs", "Explain income features"],
            [
              "REITs pool capital to invest in real estate and must distribute most income.",
              "They offer real-estate exposure with liquidity when exchange-traded.",
              "Income is largely taxed as ordinary income.",
              "REITs carry real-estate and interest-rate risk.",
            ],
            [
              "Why must REITs distribute most of their income?",
              "What risks do REITs carry?",
            ]
          ),
          lesson(
            "sie-full-m5-l5",
            "Direct participation programs",
            35,
            ["Explain DPPs", "Identify risks"],
            [
              "DPPs (e.g. limited partnerships) pass income, gains, and losses to investors.",
              "They are typically illiquid with limited transferability.",
              "Investors face business, liquidity, and tax-related risks.",
              "Suitability is important given illiquidity and complexity.",
            ],
            [
              "What is a defining feature of a DPP's tax treatment?",
              "Why is liquidity a concern with DPPs?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Call = right to buy; put = right to sell (at strike).",
          "Buyer risk = premium; naked call writer risk = unlimited.",
          "Taxable-equivalent yield = muni yield ÷ (1 − tax rate).",
          "GO (taxing power) vs revenue (project revenues).",
        ],
        commonTraps: [
          "Reversing calls and puts or buyer/seller obligations.",
          "Forgetting the taxable-equivalent-yield adjustment for munis.",
          "Confusing GO with revenue bond backing.",
          "Overlooking DPP illiquidity in suitability.",
        ],
        examTechnique: [
          "Draw the buyer/seller right-and-obligation grid for option questions.",
          "Apply the taxable-equivalent formula for muni comparisons.",
          "Match each 'other product' to its defining feature and risk.",
        ],
        practicePlan: [
          "Week 1: option fundamentals and moneyness.",
          "Week 2: municipal securities and taxation.",
          "Week 3: REITs, DPPs, and mixed MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Options; Municipal Securities).",
          "MSRB — municipal securities basics.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m6",
        examId: "sie",
        levelId: "full",
        title: "Trading markets, orders & settlement concepts",
        examFormat:
          "MCQs on order types, market mechanics, and clearance/settlement. Part of 'Understanding Trading, Customer Accounts & Prohibited Activities' (~11%).",
        estimatedStudyHours: 14,
        overview:
          "This module covers how securities trade: order types, execution, bid/ask and spreads, market participants, and the clearance and settlement process including settlement cycles.",
        whyItMatters:
          "Order handling and settlement are practical, everyday functions of the industry and reliably tested. Knowing order mechanics prevents costly execution errors.",
        learningOutcomes: [
          "Distinguish market, limit, stop, and stop-limit orders.",
          "Explain bid, ask, and the bid-ask spread.",
          "Describe order execution and market participants.",
          "Explain the clearance and settlement process.",
          "State the standard settlement cycle and its implications.",
          "Describe order qualifiers and account settlement basics.",
        ],
        syllabusAreas: [
          area(
            "Order types",
            [
              "Market vs limit orders",
              "Stop and stop-limit orders",
              "Order qualifiers (day, GTC, etc.)",
            ],
            "40–45%"
          ),
          area(
            "Market mechanics",
            [
              "Bid, ask, and spread",
              "Execution and market participants",
              "Quotes and price improvement",
            ],
            "25–30%"
          ),
          area(
            "Clearance and settlement",
            [
              "Settlement cycle (T+1)",
              "Clearing corporations and depositories",
              "Trade confirmation and delivery",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m6-l1",
            "Order types",
            50,
            ["Compare order types", "Choose the right order"],
            [
              "Market orders execute immediately at the best available price.",
              "Limit orders set a maximum buy price or minimum sell price.",
              "Stop (stop-loss) orders trigger a market order once a stop price is reached.",
              "Stop-limit orders combine a stop trigger with a limit price.",
            ],
            [
              "How does a limit order differ from a market order?",
              "What happens when a stop order's stop price is reached?",
            ],
            "A sell-stop at $48 on a stock trading at $50 stays dormant; if the price falls to $48, it becomes a market order and sells at the next available price — which may be below $48 in fast markets."
          ),
          lesson(
            "sie-full-m6-l2",
            "Bid, ask, and spreads",
            40,
            ["Explain the spread", "Interpret quotes"],
            [
              "The bid is the highest price buyers will pay; the ask is the lowest sellers will accept.",
              "The spread is the difference and reflects liquidity and cost.",
              "Investors generally buy at the ask and sell at the bid.",
              "Narrow spreads indicate liquid, actively traded securities.",
            ],
            [
              "At which price does an investor typically buy?",
              "What does a wide bid-ask spread suggest?",
            ]
          ),
          lesson(
            "sie-full-m6-l3",
            "Execution and participants",
            35,
            ["Describe execution", "Identify participants"],
            [
              "Orders route to exchanges or market makers for execution.",
              "Market makers quote two-sided prices and provide liquidity.",
              "Best-execution obligations require seeking favourable terms for clients.",
              "Price improvement occurs when execution beats the quoted price.",
            ],
            [
              "What is a market maker's function?",
              "What does best execution require?",
            ]
          ),
          lesson(
            "sie-full-m6-l4",
            "Clearance and settlement",
            40,
            ["Explain settlement", "State the settlement cycle"],
            [
              "Clearing confirms and matches trades; settlement exchanges cash for securities.",
              "The U.S. standard settlement cycle is T+1 (one business day after the trade).",
              "Clearing corporations and depositories reduce counterparty risk.",
              "Confirmations document trade terms for customers.",
            ],
            [
              "What is the standard U.S. settlement cycle?",
              "What is the difference between clearing and settlement?",
            ]
          ),
          lesson(
            "sie-full-m6-l5",
            "Order qualifiers and account settlement",
            30,
            ["Apply order qualifiers", "Explain account settlement"],
            [
              "Day orders expire at day's end; GTC orders persist until filled or cancelled.",
              "Qualifiers can restrict price, timing, or quantity.",
              "Regular-way settlement follows the standard cycle.",
              "Failure to settle can trigger buy-ins or penalties.",
            ],
            [
              "How does a GTC order differ from a day order?",
              "What is regular-way settlement?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Order ladder: market (speed) → limit (price) → stop (trigger) → stop-limit (both).",
          "Trade sides: buy at ask, sell at bid; spread = ask − bid.",
          "Settlement cycle: T+1 (regular way).",
          "Process flow: trade → clearing (match) → settlement (exchange).",
        ],
        commonTraps: [
          "Assuming a stop order guarantees the stop price on execution.",
          "Reversing bid/ask when identifying buy/sell prices.",
          "Confusing clearing with settlement.",
          "Forgetting the current T+1 settlement standard.",
        ],
        examTechnique: [
          "Pick the order type by whether speed or price control matters.",
          "State buy-at-ask/sell-at-bid before quote questions.",
          "Trace the trade-to-settlement flow in order.",
        ],
        practicePlan: [
          "Week 1: order types and selection.",
          "Week 2: market mechanics and execution.",
          "Week 3: settlement and qualifier MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Trading and Settlement).",
          "SEC — settlement cycle (T+1) resources.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m7",
        examId: "sie",
        levelId: "full",
        title: "Customer accounts, account types & account registration",
        examFormat:
          "MCQs on account opening, registration types, and account handling rules.",
        estimatedStudyHours: 14,
        overview:
          "This module covers opening and maintaining customer accounts: account types, registration/ownership forms, required documentation, and rules for handling customer accounts and information.",
        whyItMatters:
          "Account handling is a daily industry function with strict compliance rules. Registration types and documentation requirements are commonly tested and protect both firm and client.",
        learningOutcomes: [
          "Describe the account-opening process and required documentation.",
          "Distinguish cash and margin accounts.",
          "Compare account registration and ownership types.",
          "Explain rules for discretionary and fiduciary accounts.",
          "Describe customer identification and privacy requirements.",
          "Identify handling rules for account changes and death.",
        ],
        syllabusAreas: [
          area(
            "Account opening and documentation",
            [
              "New account information and KYC",
              "Customer identification program (CIP)",
              "Privacy (Regulation S-P) basics",
            ],
            "35–40%"
          ),
          area(
            "Account types",
            [
              "Cash vs margin accounts",
              "Discretionary and fiduciary accounts",
              "Options and specialized accounts",
            ],
            "30–35%"
          ),
          area(
            "Registration and ownership",
            [
              "Individual, joint (JTWROS, TIC)",
              "Trust, custodial, and business accounts",
              "Transfer on death and account changes",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m7-l1",
            "Opening an account: KYC and CIP",
            45,
            ["Apply KYC", "Explain CIP"],
            [
              "Know-Your-Customer rules require essential facts about each customer.",
              "The Customer Identification Program verifies identity to deter money laundering.",
              "Firms must collect name, address, date of birth, and taxpayer ID.",
              "Suitability depends on understanding the customer's profile.",
            ],
            [
              "What information does the CIP require?",
              "Why is KYC essential to suitability?",
            ]
          ),
          lesson(
            "sie-full-m7-l2",
            "Cash and margin accounts",
            45,
            ["Compare account types", "Explain margin basics"],
            [
              "Cash accounts require full payment for purchases.",
              "Margin accounts allow borrowing against securities, amplifying gains and losses.",
              "Margin requires a signed agreement and carries interest and maintenance requirements.",
              "Margin adds leverage risk and possible margin calls.",
            ],
            [
              "How does a margin account differ from a cash account?",
              "What risk does buying on margin introduce?",
            ]
          ),
          lesson(
            "sie-full-m7-l3",
            "Discretionary and fiduciary accounts",
            40,
            ["Explain discretion", "Describe fiduciary duties"],
            [
              "Discretionary accounts let the rep trade without prior approval, requiring written authorization.",
              "Discretionary trades must still be suitable and are closely supervised.",
              "Fiduciary accounts (e.g. trustee, custodian) act for a beneficiary's benefit.",
              "Prudent-investor standards may govern fiduciary accounts.",
            ],
            [
              "What authorization is required for a discretionary account?",
              "Whose interest does a fiduciary account serve?",
            ]
          ),
          lesson(
            "sie-full-m7-l4",
            "Registration and ownership types",
            45,
            ["Compare ownership forms", "Explain transfer on death"],
            [
              "Individual accounts have a single owner; joint accounts have multiple owners.",
              "JTWROS passes to survivors; tenancy in common leaves a divisible share to the estate.",
              "Custodial (UTMA/UGMA) accounts are managed for a minor.",
              "Transfer-on-death designations pass assets outside probate.",
            ],
            [
              "How does JTWROS differ from tenancy in common?",
              "What does a transfer-on-death designation accomplish?",
            ],
            "In a JTWROS account, when one owner dies the assets pass entirely to the surviving owner; in a tenancy-in-common account, the deceased owner's share passes to their estate instead."
          ),
          lesson(
            "sie-full-m7-l5",
            "Privacy and account changes",
            30,
            ["Apply privacy rules", "Handle account events"],
            [
              "Regulation S-P governs privacy of customer financial information.",
              "Customers must receive privacy notices and opt-out rights.",
              "Account changes require proper documentation and supervision.",
              "Death of an owner triggers specific account-handling procedures.",
            ],
            [
              "What does Regulation S-P protect?",
              "What must happen when an account owner dies?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Account opening: KYC + CIP + suitability + documentation.",
          "Cash vs margin: full payment vs borrowing (leverage).",
          "Ownership: individual, JTWROS, TIC, custodial, trust, business.",
          "Discretion requires written authorization + supervision.",
        ],
        commonTraps: [
          "Confusing JTWROS with tenancy in common on death.",
          "Forgetting discretionary trading needs written authorization.",
          "Overlooking CIP identity-verification requirements.",
          "Ignoring privacy (Reg S-P) obligations.",
        ],
        examTechnique: [
          "Match the ownership type to what happens on an owner's death.",
          "Confirm authorization and suitability for discretionary questions.",
          "Recall required CIP data points precisely.",
        ],
        practicePlan: [
          "Week 1: account opening, KYC, and CIP.",
          "Week 2: account and ownership types.",
          "Week 3: discretion, privacy, and account-event MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Customer Accounts).",
          "FINRA Rules on accounts; SEC Regulation S-P.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m8",
        examId: "sie",
        levelId: "full",
        title: "Prohibited activities — manipulation, insider trading & fraud",
        examFormat:
          "MCQs on prohibited practices, market manipulation, insider trading, and fraud. High-yield compliance content.",
        estimatedStudyHours: 16,
        overview:
          "This module covers activities prohibited in the securities industry: market manipulation, insider trading, fraud, and unethical sales practices. It links each prohibition to the laws and rules that enforce it.",
        whyItMatters:
          "Prohibited-practices questions are heavily tested and central to industry integrity. Recognising violations protects investors, firms, and the market.",
        learningOutcomes: [
          "Identify forms of market manipulation.",
          "Explain insider trading and the misuse of material non-public information.",
          "Recognise fraudulent and deceptive practices.",
          "Describe prohibited sales practices (churning, unauthorized trading).",
          "Explain anti-money-laundering obligations and red flags.",
          "State the consequences of violations.",
        ],
        syllabusAreas: [
          area(
            "Market manipulation",
            [
              "Pump-and-dump, spoofing, wash trades",
              "Marking the close and painting the tape",
              "Front-running",
            ],
            "30–35%"
          ),
          area(
            "Insider trading and fraud",
            [
              "Material non-public information",
              "Fraud and misrepresentation",
              "Selective disclosure",
            ],
            "30–35%"
          ),
          area(
            "Sales practices and AML",
            [
              "Churning and unauthorized trading",
              "Suitability abuses",
              "Anti-money-laundering and SAR/CTR basics",
            ],
            "30–35%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m8-l1",
            "Market manipulation",
            45,
            ["Identify manipulation", "Explain its harm"],
            [
              "Pump-and-dump inflates a price with false hype, then sells into it.",
              "Wash trades and matched orders create fake volume.",
              "Marking the close manipulates end-of-day prices.",
              "Manipulation distorts fair pricing and harms investors.",
            ],
            [
              "What is a pump-and-dump scheme?",
              "Why are wash trades prohibited?",
            ]
          ),
          lesson(
            "sie-full-m8-l2",
            "Insider trading",
            50,
            ["Define insider trading", "Apply the MNPI test"],
            [
              "Trading on material non-public information breaches insider-trading rules.",
              "Information is material if it would affect a reasonable investor's decision.",
              "Tippers and tippees can both be liable.",
              "Firms use information barriers to prevent misuse.",
            ],
            [
              "What makes information 'material'?",
              "Can a tippee be liable for insider trading?",
            ],
            "An employee who learns of an unannounced acquisition and buys shares, or tips a friend who trades, commits insider trading — both the tipper and the tippee can face liability."
          ),
          lesson(
            "sie-full-m8-l3",
            "Fraud and misrepresentation",
            40,
            ["Recognise fraud", "Explain disclosure duties"],
            [
              "Fraud involves deception for gain, including false statements and omissions.",
              "Misrepresenting material facts to clients is prohibited.",
              "Guaranteeing against loss is a prohibited misrepresentation.",
              "Selective disclosure of material information is prohibited.",
            ],
            [
              "Why is guaranteeing a client against loss prohibited?",
              "What is selective disclosure?",
            ]
          ),
          lesson(
            "sie-full-m8-l4",
            "Prohibited sales practices",
            45,
            ["Identify sales abuses", "Link to rules"],
            [
              "Churning is excessive trading to generate commissions.",
              "Unauthorized trading executes without customer or written discretionary authority.",
              "Unsuitable recommendations violate suitability obligations.",
              "Borrowing from or lending to customers is generally prohibited.",
            ],
            [
              "What defines churning?",
              "When is a trade 'unauthorized'?",
            ]
          ),
          lesson(
            "sie-full-m8-l5",
            "Anti-money-laundering",
            40,
            ["Explain AML duties", "Identify red flags"],
            [
              "The Bank Secrecy Act and AML rules require monitoring for suspicious activity.",
              "Suspicious Activity Reports (SARs) flag potential money laundering.",
              "Currency Transaction Reports (CTRs) cover large cash transactions.",
              "Structuring transactions to evade reporting is prohibited.",
            ],
            [
              "What is the purpose of a SAR?",
              "What is 'structuring', and why is it prohibited?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Manipulation test: does the act create a false market or price?",
          "Insider-trading test: material + non-public + traded/tipped.",
          "Sales-abuse triad: churning, unauthorized trading, unsuitability.",
          "AML flow: monitor → detect red flags → file SAR/CTR.",
        ],
        commonTraps: [
          "Missing that tippees, not just insiders, can be liable.",
          "Overlooking omissions as a form of fraud.",
          "Confusing churning (excessive) with unauthorized (no consent) trading.",
          "Forgetting that guaranteeing against loss is prohibited.",
        ],
        examTechnique: [
          "Classify the violation type before selecting the rule.",
          "For MNPI questions, test materiality and non-public status.",
          "Distinguish the specific prohibited practice the scenario describes.",
        ],
        practicePlan: [
          "Week 1: market manipulation forms.",
          "Week 2: insider trading and fraud.",
          "Week 3: sales practices and AML MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Prohibited Activities).",
          "SEC and FINRA guidance on insider trading and AML.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m9",
        examId: "sie",
        levelId: "full",
        title: "Regulatory framework — SEC, SROs, FINRA & MSRB roles",
        examFormat:
          "MCQs on regulators, self-regulatory organizations, and the laws they enforce. Part of 'Overview of the Regulatory Framework' (~9%).",
        estimatedStudyHours: 14,
        overview:
          "This module maps the securities regulatory system: the SEC, self-regulatory organizations (FINRA, MSRB, exchanges), the SIPC, and the key laws that structure the industry.",
        whyItMatters:
          "Knowing who regulates what — and which law applies — is fundamental SIE content. It frames every compliance topic on the exam and in practice.",
        learningOutcomes: [
          "Describe the SEC's role and authority.",
          "Explain the functions of SROs (FINRA, MSRB, exchanges).",
          "Distinguish the key securities laws and what they govern.",
          "Explain SIPC's role in investor protection.",
          "Describe the registration of broker-dealers and associated persons.",
          "Outline enforcement and disciplinary processes.",
        ],
        syllabusAreas: [
          area(
            "Regulators and SROs",
            [
              "SEC authority",
              "FINRA, MSRB, and exchanges",
              "SIPC investor protection",
            ],
            "40–45%"
          ),
          area(
            "Key securities laws",
            [
              "Securities Act of 1933 (new issues)",
              "Securities Exchange Act of 1934 (trading and the SEC)",
              "Investment Company and Advisers Acts of 1940",
            ],
            "30–35%"
          ),
          area(
            "Registration and enforcement",
            [
              "BD and associated-person registration",
              "Disciplinary processes",
              "Recordkeeping and reporting",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m9-l1",
            "The SEC and its authority",
            40,
            ["Describe SEC role", "Explain its authority"],
            [
              "The SEC is the primary federal securities regulator.",
              "It enforces federal securities laws and oversees SROs.",
              "It requires registration and disclosure for public offerings.",
              "It can bring enforcement actions and impose sanctions.",
            ],
            [
              "What is the SEC's primary role?",
              "How does the SEC relate to SROs?",
            ]
          ),
          lesson(
            "sie-full-m9-l2",
            "Self-regulatory organizations",
            45,
            ["Compare SROs", "Explain their scope"],
            [
              "FINRA regulates broker-dealers and their associated persons.",
              "The MSRB writes rules for municipal securities (enforced by others).",
              "Exchanges enforce their own trading and listing rules.",
              "SROs operate under SEC oversight.",
            ],
            [
              "What does FINRA regulate?",
              "What is the MSRB's role?",
            ]
          ),
          lesson(
            "sie-full-m9-l3",
            "Key securities laws",
            50,
            ["Distinguish the acts", "Match law to purpose"],
            [
              "The Securities Act of 1933 governs new issues and disclosure ('paper it').",
              "The Securities Exchange Act of 1934 governs secondary trading and created the SEC ('trade it').",
              "The Investment Company Act of 1940 regulates funds.",
              "The Investment Advisers Act of 1940 regulates advisers.",
            ],
            [
              "Which act created the SEC?",
              "Which act governs new securities issues?",
            ],
            "A shorthand: the 1933 Act is about issuing securities (registration and prospectus), while the 1934 Act is about trading securities and the ongoing regulation of markets and the SEC."
          ),
          lesson(
            "sie-full-m9-l4",
            "SIPC and investor protection",
            35,
            ["Explain SIPC", "State its limits"],
            [
              "SIPC protects customers if a broker-dealer fails, within coverage limits.",
              "It covers securities and cash held at a failed firm, not market losses.",
              "SIPC does not protect against poor investment performance.",
              "It complements, not replaces, prudent investing.",
            ],
            [
              "What does SIPC protect against?",
              "What does SIPC not cover?",
            ]
          ),
          lesson(
            "sie-full-m9-l5",
            "Registration and enforcement",
            35,
            ["Explain registration", "Describe enforcement"],
            [
              "Broker-dealers and associated persons must register and qualify.",
              "Form U4 registers individuals; disclosures must be accurate and updated.",
              "Disciplinary processes can impose fines, suspensions, or bars.",
              "Recordkeeping supports supervision and examinations.",
            ],
            [
              "What form registers an associated person?",
              "What sanctions can result from disciplinary action?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Oversight hierarchy: SEC → SROs (FINRA, MSRB, exchanges) → firms.",
          "1933 = issue (paper it); 1934 = trade it (and the SEC).",
          "1940 Acts: Investment Company (funds) + Advisers (advisers).",
          "SIPC covers firm failure, not market losses.",
        ],
        commonTraps: [
          "Confusing the 1933 and 1934 Acts.",
          "Thinking SIPC covers investment losses.",
          "Assuming the MSRB enforces its own rules directly.",
          "Blurring SEC and SRO roles.",
        ],
        examTechnique: [
          "Use the 'issue vs trade' shorthand for the 1933/1934 Acts.",
          "Match each regulator to its precise jurisdiction.",
          "Recall SIPC's coverage scope and limits.",
        ],
        practicePlan: [
          "Week 1: SEC, SROs, and SIPC.",
          "Week 2: key securities laws.",
          "Week 3: registration and enforcement MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Regulatory Framework).",
          "SEC — laws that govern the securities industry.",
        ],
      }),
      courseware({
        moduleId: "sie-full-m10",
        examId: "sie",
        levelId: "full",
        title: "Employee conduct, registration & continuing education basics",
        examFormat:
          "MCQs on registration requirements, permitted activities, reporting, and continuing education.",
        estimatedStudyHours: 12,
        overview:
          "This module covers the conduct expected of registered persons: registration and qualification, permitted vs prohibited activities, reporting obligations, outside business activities, and continuing education.",
        whyItMatters:
          "Employee conduct rules govern day-to-day industry behaviour and are consistently tested. They protect firms and investors and are the practical application of the regulatory framework.",
        learningOutcomes: [
          "Explain registration and qualification requirements.",
          "Distinguish permitted and prohibited employee activities.",
          "Describe reporting of outside business activities and private securities transactions.",
          "Explain gifts, gratuities, and political-contribution limits.",
          "Describe continuing education requirements.",
          "Outline the consequences of conduct violations.",
        ],
        syllabusAreas: [
          area(
            "Registration and qualification",
            [
              "Form U4/U5 and disclosures",
              "Statutory disqualification",
              "State (Blue Sky) registration basics",
            ],
            "35–40%"
          ),
          area(
            "Permitted and prohibited activities",
            [
              "Outside business activities (OBA)",
              "Private securities transactions (selling away)",
              "Gifts, gratuities, and contribution limits",
            ],
            "35–40%"
          ),
          area(
            "Continuing education and reporting",
            [
              "Regulatory and firm elements",
              "Reporting obligations and updates",
              "Consequences of violations",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "sie-full-m10-l1",
            "Registration and qualification",
            45,
            ["Explain registration", "Describe disqualification"],
            [
              "Associated persons register via Form U4 and pass qualifying exams.",
              "Form U5 reports termination and reasons.",
              "Statutory disqualification bars certain individuals from the industry.",
              "Disclosures on U4/U5 must be accurate and timely.",
            ],
            [
              "What is the purpose of Form U5?",
              "What can cause statutory disqualification?",
            ]
          ),
          lesson(
            "sie-full-m10-l2",
            "Outside business activities and selling away",
            45,
            ["Explain OBA rules", "Define selling away"],
            [
              "Outside business activities must be disclosed to the firm.",
              "Private securities transactions ('selling away') require prior written notice and, if compensated, firm approval.",
              "Firms supervise approved outside activities.",
              "Undisclosed OBA and selling away are violations.",
            ],
            [
              "What must an employee do before engaging in outside business activity?",
              "What is 'selling away'?",
            ],
            "A rep who arranges a private investment for a client outside the firm without prior written notice is 'selling away' — a prohibited practice that evades firm supervision."
          ),
          lesson(
            "sie-full-m10-l3",
            "Gifts, gratuities, and contributions",
            35,
            ["Apply gift limits", "Explain contribution rules"],
            [
              "Business gifts are capped (commonly a per-person annual limit) to prevent undue influence.",
              "Ordinary business entertainment is treated differently from gifts.",
              "Political-contribution rules limit pay-to-play in municipal business.",
              "Records of gifts and entertainment must be maintained.",
            ],
            [
              "Why are business gifts subject to a dollar limit?",
              "What do political-contribution rules aim to prevent?",
            ]
          ),
          lesson(
            "sie-full-m10-l4",
            "Continuing education",
            30,
            ["Describe CE elements", "Explain requirements"],
            [
              "The Regulatory Element addresses compliance and regulatory updates.",
              "The Firm Element is firm-designed training on products and practices.",
              "CE keeps registered persons current on rules and risks.",
              "Failure to complete CE can affect registration status.",
            ],
            [
              "What are the two elements of continuing education?",
              "What happens if CE is not completed?",
            ]
          ),
          lesson(
            "sie-full-m10-l5",
            "Reporting obligations and consequences",
            30,
            ["Explain reporting", "State consequences"],
            [
              "Registered persons must promptly report certain events (e.g. customer complaints, certain legal matters).",
              "U4 amendments update disclosures as circumstances change.",
              "Violations can lead to fines, suspension, or bar.",
              "Accurate reporting supports supervision and investor protection.",
            ],
            [
              "When must U4 disclosures be updated?",
              "What are possible consequences of conduct violations?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Registration lifecycle: qualify → U4 → work (with disclosures) → U5 on exit.",
          "OBA: disclose; selling away: prior written notice (+ approval if paid).",
          "Gift cap prevents undue influence; keep records.",
          "CE = Regulatory Element + Firm Element.",
        ],
        commonTraps: [
          "Thinking OBA needs no disclosure if unpaid.",
          "Confusing selling away with permitted firm-approved activity.",
          "Ignoring the gift limit or record requirements.",
          "Overlooking the two distinct CE elements.",
        ],
        examTechnique: [
          "For conduct questions, ask what disclosure or approval was required.",
          "Distinguish OBA from private securities transactions.",
          "Recall the gift limit and the two CE elements precisely.",
        ],
        practicePlan: [
          "Week 1: registration, U4/U5, and disqualification.",
          "Week 2: OBA, selling away, and gifts.",
          "Week 3: CE, reporting, and mixed conduct MCQs.",
        ],
        furtherReading: [
          "FINRA — SIE Content Outline (Employee Conduct).",
          "FINRA Rules on registration, OBA, gifts, and CE.",
        ],
      }),
    ],
  },
];
