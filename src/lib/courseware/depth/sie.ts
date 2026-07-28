import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * SIE (Securities Industry Essentials) exam-calibrated depth content, keyed by
 * source module id (`sie-full-m1` .. `sie-full-m10`).
 *
 * Depth is written to FINRA SIE level: 75 scored multiple-choice questions,
 * passing score 70, testing conceptual product and regulatory distinctions.
 * It deliberately stays at the "essentials" line — it explains why a product or
 * rule behaves the way it does without drifting into the top-off representative
 * exams (Series 6/7/57) that would layer on strategy math, margin computations,
 * or line-of-business specifics.
 */
export const SIE_DEPTH: Record<string, CoursewareDepth> = {
  "sie-full-m1": examDepth({
    testPoints: [
      {
        id: "sie-full-m1-tp1",
        title: "Primary vs secondary market and where proceeds go",
        priority: "critical",
        examinerFocus:
          "Whether you know that an issuer is only paid in the primary market. The trap is a question that describes an investor buying shares 'on the exchange' and asks how much the company raised — the answer is zero, because that is a secondary-market trade between investors.",
        typicalQuestionForms: [
          "In which market does the issuing corporation receive the sale proceeds?",
          "An investor buys 100 shares of a listed company on Nasdaq. Who receives the money?",
          "Which of the following is a primary-market transaction?",
        ],
        mustKnow: [
          "Primary market = new issuance (IPO, follow-on, new bond); proceeds flow to the issuer.",
          "Secondary market = existing securities trading investor-to-investor; the issuer gets nothing.",
          "Secondary-market liquidity lowers the issuer's future cost of capital by making primary issues easier to price and sell.",
        ],
        scoringActions: [
          "Before answering, label the transaction primary or secondary, then trace who is paid.",
          "Treat any exchange or OTC trade of already-issued stock as secondary by default.",
        ],
      },
      {
        id: "sie-full-m1-tp2",
        title: "Agent (broker) vs principal (dealer) capacity",
        priority: "critical",
        examinerFocus:
          "That capacity determines the form of compensation. Acting as agent earns a commission; acting as principal (trading from inventory) earns a markup or markdown. Questions describe the mechanics and ask for the capacity or the correct charge label.",
        typicalQuestionForms: [
          "A firm buys stock into its own inventory and resells it to a customer. In what capacity did it act?",
          "Which compensation is associated with an agency transaction?",
          "A markup is charged when a firm acts as...?",
        ],
        mustKnow: [
          "Agent/broker: executes for the customer, charges a commission, disclosed on the confirmation.",
          "Principal/dealer: buys/sells from its own account, earns a markup (on a sale) or markdown (on a purchase).",
          "A firm can act as either but not in a way that double-charges; capacity must be disclosed to the customer.",
        ],
        scoringActions: [
          "Ask 'did the firm use its own inventory?' — yes means principal/markup; no means agent/commission.",
          "Match the compensation word (commission vs markup/markdown) to the capacity before selecting.",
        ],
      },
      {
        id: "sie-full-m1-tp3",
        title: "Investor classification: retail, accredited, institutional",
        priority: "high",
        examinerFocus:
          "Why the accredited-investor concept exists (access to private, less-regulated offerings) rather than the exact dollar thresholds. The exam tests the purpose and the consequence for protection and product access.",
        typicalQuestionForms: [
          "The accredited-investor standard is used primarily to determine eligibility for what?",
          "Which investor type receives the fewest regulatory protections in exchange for broader access?",
        ],
        mustKnow: [
          "Retail investors are individuals and receive the fullest disclosure protections.",
          "Accredited investors meet income or net-worth criteria and can access private placements (Reg D).",
          "Institutional investors (funds, pensions, insurers) trade in size and face lighter protective rules.",
        ],
        scoringActions: [
          "Link accredited status to private-offering access, not to public-market permission.",
          "Reason that broader access generally means fewer regulatory protections.",
        ],
      },
      {
        id: "sie-full-m1-tp4",
        title: "Exchange (auction) vs OTC (dealer network) venues",
        priority: "high",
        examinerFocus:
          "That not everything trades on an exchange. Most bonds and many equities trade OTC through dealers and market makers. Questions test venue mechanics and the market-maker's liquidity role.",
        typicalQuestionForms: [
          "Which market is a decentralised network of dealers rather than a central auction?",
          "What is the primary function of a market maker?",
        ],
        mustKnow: [
          "Exchanges are centralised, auction-based, with listing standards.",
          "OTC markets are decentralised dealer networks; most debt trades here.",
          "Market makers quote continuous two-sided (bid/ask) prices to provide liquidity.",
        ],
        scoringActions: [
          "Default corporate/municipal/government bonds to OTC unless told otherwise.",
          "Tie 'provides liquidity by quoting bid and ask' to the market-maker role.",
        ],
      },
      {
        id: "sie-full-m1-tp5",
        title: "Roles of intermediaries: transfer agents, clearing firms, custodians",
        priority: "medium",
        examinerFocus:
          "Precise back-office role matching. The exam gives a function (recordkeeping of owners, settlement, safekeeping) and asks which entity performs it.",
        typicalQuestionForms: [
          "Which entity maintains the record of a corporation's registered shareholders?",
          "Clearing firms are primarily responsible for what?",
        ],
        mustKnow: [
          "Transfer agent: maintains ownership records, cancels/issues certificates, handles dividends.",
          "Clearing firm/corporation: matches and settles trades, reducing counterparty risk.",
          "Custodian: safekeeps client assets; banks may act as custodians and underwriters.",
        ],
        scoringActions: [
          "Map each function word (records vs settlement vs safekeeping) to one specific entity.",
          "Do not confuse the transfer agent (owner records) with the clearing firm (settlement).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Capital-markets structure is ~16% of the SIE; aim to convert essentially every question here since it is definitional and low-computation.",
      timeBudget:
        "About 60–75 seconds per item; these are recall/classification questions with no math, so bank time here for later product items.",
      answerSequence: [
        "Read the stem and label the market (primary/secondary).",
        "Identify the actor's capacity (agent vs principal) if a firm is involved.",
        "Match the described function to the specific participant.",
        "Eliminate distractors that swap compensation type or venue.",
      ],
      qualityChecks: [
        "Did the issuer actually receive proceeds, or was this a secondary trade?",
        "Is the compensation word consistent with the stated capacity?",
        "Have you defaulted bonds to OTC unless an exchange is named?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m1-sn1",
        title: "How capital actually flows from investor to issuer",
        testPointIds: ["sie-full-m1-tp1", "sie-full-m1-tp3"],
        explanation: [
          "The securities industry exists to move capital from those who have it (investors) to those who need it (issuers). That transfer only happens once for each security, in the primary market. When a company runs an IPO or a follow-on offering, or when a municipality or the Treasury sells new bonds, the buyer's money goes to the issuer (net of underwriting spread). Every subsequent trade of that same security is a secondary-market transaction in which one investor pays another; the issuer is not a party and receives nothing.",
          "This single distinction resolves a large share of capital-markets questions. A stem that says an investor 'bought shares on the NYSE' is describing the secondary market by definition, so the company raised no new capital in that trade. The primary market is also where the offering process, disclosure documents, and underwriters live (covered in module 2), while the secondary market is where liquidity, exchanges, and market makers operate.",
          "Investor classification then determines which primary offerings an investor may access. Retail investors are steered toward registered, fully disclosed public offerings. Accredited and institutional investors can participate in private placements that skip full registration, trading disclosure protection for access. The logic the exam rewards is: more sophistication/wealth means access to less-regulated products.",
        ],
        keyRules: [
          "Issuer is paid only in the primary market.",
          "Secondary-market liquidity supports primary-market pricing and lowers cost of capital.",
          "Access to private offerings tracks accredited/institutional status.",
        ],
      },
      {
        id: "sie-full-m1-sn2",
        title: "Agent vs principal: the compensation logic",
        testPointIds: ["sie-full-m1-tp2"],
        explanation: [
          "A broker-dealer wears two hats. When it acts as an agent (broker), it is a middleman: it takes the customer's order to the market, executes it, and charges a commission for the service. The firm never owns the security; it simply arranges the trade. When it acts as a principal (dealer), it uses its own inventory: it sells stock it already owns to the customer at a price that includes a markup, or buys stock from the customer at a price reduced by a markdown.",
          "The exam almost always signals capacity through the phrase 'from its own account/inventory' (principal) or 'executed the customer's order in the market' (agent). Compensation must then match: commission for agency, markup/markdown for principal. A common distractor pairs the wrong compensation with the capacity, so verify the pairing before answering. Capacity and charges must be disclosed on the trade confirmation so the customer understands how the firm was paid.",
        ],
        keyRules: [
          "Agent = commission; principal = markup/markdown.",
          "'Own inventory/account' language signals principal capacity.",
          "Capacity and compensation are disclosed on the confirmation.",
        ],
        workedProblem: {
          scenario:
            "A customer wants 500 shares of XYZ. Firm A already holds XYZ in its trading account and sells 500 shares to the customer at $20.25 when its inventory cost was $20.00. Firm B, for a different customer, routes an identical order to the exchange and charges $0.03 per share. Identify each firm's capacity and compensation.",
          steps: [
            "Firm A: check the source of the shares — they came from the firm's own inventory, so Firm A acted as a principal (dealer).",
            "Firm A's compensation: it sold at $20.25 versus a $20.00 cost, a $0.25 per-share markup, or $125 total on 500 shares.",
            "Firm B: the order was routed to the market and executed for the customer, so Firm B acted as an agent (broker).",
            "Firm B's compensation: $0.03 per share commission = $15 on 500 shares.",
            "Confirm the pairing: markup with principal (Firm A), commission with agent (Firm B) — both consistent.",
          ],
          conclusion:
            "Firm A is a principal earning a $125 markup; Firm B is an agent earning a $15 commission. The capacity, not the security, drives the compensation label.",
          markingNotes: [
            "Full credit requires both the correct capacity and the correct compensation term for each firm.",
            "No credit for calling Firm A an agent even if the dollar math is right — capacity is the tested concept.",
          ],
        },
      },
      {
        id: "sie-full-m1-sn3",
        title: "Issuers and the debt-vs-equity decision",
        testPointIds: ["sie-full-m1-tp1"],
        explanation: [
          "Corporations, municipalities, and governments all raise capital, but for different reasons and with different instruments. Corporations choose between issuing equity (selling ownership, no repayment obligation, but diluting existing holders and giving up some control) and debt (a contractual repayment obligation with interest, but no dilution and tax-deductible interest). Municipalities issue bonds to fund public projects, and the federal government and its agencies issue Treasuries and agency securities to fund operations.",
          "The exam frames this as a trade-off question: debt preserves ownership but adds fixed obligations and default risk; equity avoids repayment but dilutes and can be more expensive over time. Recognising the issuer type also foreshadows product features tested later — municipal interest tends to be federally tax-exempt, and government securities are treated as low credit risk.",
        ],
        keyRules: [
          "Debt: repayment + interest, no dilution, interest is tax-deductible for corporations.",
          "Equity: no repayment, but dilution and loss of some control.",
          "Issuer type previews product features (muni tax exemption, government credit quality).",
        ],
      },
      {
        id: "sie-full-m1-sn4",
        title: "Venues and the market-maker's job",
        testPointIds: ["sie-full-m1-tp4", "sie-full-m1-tp5"],
        explanation: [
          "Trading happens in two structural venue types. Exchanges are centralised auction markets with listing standards, where buyers and sellers meet through a transparent order book. OTC markets are decentralised networks of dealers connected electronically; there is no single central auction, and this is where most bonds and many smaller equities trade. The SIE wants you to reject the assumption that everything trades on an exchange.",
          "Within both venues, market makers supply liquidity by continuously quoting a bid (the price at which they will buy) and an ask (the price at which they will sell). The spread between them compensates the market maker for risk and inventory. Behind the scenes, transfer agents keep the register of who owns each security, and clearing firms match and settle the resulting trades so cash and securities change hands reliably. Keeping these back-office roles distinct is the whole point of the medium-priority questions in this area.",
        ],
        keyRules: [
          "Exchange = centralised auction; OTC = decentralised dealer network.",
          "Market maker quotes two-sided prices to provide liquidity.",
          "Transfer agent = ownership records; clearing firm = trade settlement.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m1-p1",
        testPointIds: ["sie-full-m1-tp1", "sie-full-m1-tp3"],
        style: "Multiple-choice concept check",
        question:
          "An investor purchases 1,000 previously issued shares of a listed company through a broker on a national exchange. Which statement is correct about this transaction?",
        answerPlan: [
          "Classify the market (primary or secondary).",
          "Determine who receives the proceeds.",
          "Reject options implying the issuer raised capital.",
        ],
        modelAnswer:
          "This is a secondary-market transaction because the shares were previously issued and are trading between investors. The selling investor receives the proceeds; the issuing company receives nothing, since companies are paid only in the primary market. The exchange listing and the broker's involvement do not change this — they simply facilitate an investor-to-investor trade.",
        markingGuide: [
          "Correctly labels the trade as secondary market (essential).",
          "States the issuer receives no proceeds / the selling investor is paid.",
          "Does not attribute any capital raised to the company.",
        ],
      },
      {
        id: "sie-full-m1-p2",
        testPointIds: ["sie-full-m1-tp2"],
        style: "Applied capacity identification",
        question:
          "A broker-dealer sells a customer 200 shares from securities it holds in its own trading account, charging a price above its inventory cost. In what capacity did the firm act, and how was it compensated?",
        answerPlan: [
          "Identify the source of the shares.",
          "Assign the capacity.",
          "Name the correct compensation term.",
        ],
        modelAnswer:
          "Because the shares came from the firm's own inventory, the firm acted as a principal (dealer). Its compensation is a markup — the amount by which the sale price exceeds its cost — not a commission. Commissions apply only to agency (broker) transactions where the firm executes an order in the market rather than trading from inventory. The capacity and the markup must be disclosed to the customer on the confirmation.",
        markingGuide: [
          "Identifies principal/dealer capacity from 'own account' language.",
          "Names markup (not commission) as the compensation.",
          "Notes disclosure on the confirmation for full marks.",
        ],
      },
      {
        id: "sie-full-m1-p3",
        testPointIds: ["sie-full-m1-tp4", "sie-full-m1-tp5"],
        style: "Role-matching MCQ",
        question:
          "A corporate bond is bought and sold through a network of competing dealers rather than a central auction, and the record of who owns the issuer's registered securities is kept by a separate entity. Name the venue type and the recordkeeping entity.",
        answerPlan: [
          "Classify the trading venue.",
          "Identify the recordkeeping entity.",
          "Distinguish it from the clearing firm.",
        ],
        modelAnswer:
          "The venue is the over-the-counter (OTC) market — a decentralised dealer network, which is where most bonds trade. The entity that maintains the register of the issuer's owners is the transfer agent. This is distinct from a clearing firm, which matches and settles trades rather than keeping ownership records. Reserving 'transfer agent' for ownership records and 'clearing firm' for settlement is the key distinction being tested.",
        markingGuide: [
          "Identifies OTC/dealer market as the venue.",
          "Names the transfer agent as the recordkeeper.",
          "Explicitly separates transfer agent from clearing firm.",
        ],
      },
    ],
  }),

  "sie-full-m2": examDepth({
    testPoints: [
      {
        id: "sie-full-m2-tp1",
        title: "Business cycle phases and leading vs lagging indicators",
        priority: "high",
        examinerFocus:
          "Whether you can place an indicator in time relative to the economy. Leading indicators (building permits, new orders, stock prices) turn before the economy; lagging indicators (unemployment, CPI, corporate profits) confirm after. The exam supplies an indicator and asks for its type or the current cycle phase.",
        typicalQuestionForms: [
          "Which of the following is a leading economic indicator?",
          "The economy has passed its peak and output is falling. Which phase is this?",
          "Rising unemployment that persists after a recovery begins is an example of a ___ indicator.",
        ],
        mustKnow: [
          "Cycle order: expansion, peak, contraction (recession), trough.",
          "Leading indicators change before the economy (building permits, new orders, money supply, equity prices).",
          "Lagging indicators confirm after (unemployment rate, CPI/inflation, average duration of unemployment).",
        ],
        scoringActions: [
          "Classify each indicator as leading/coincident/lagging before choosing.",
          "Anchor 'unemployment' and 'inflation/CPI' as lagging by default.",
        ],
      },
      {
        id: "sie-full-m2-tp2",
        title: "Interest rates, inflation, and the inverse bond-price relationship",
        priority: "critical",
        examinerFocus:
          "The single most reused rule in the fixed-income parts of the exam: when rates rise, existing bond prices fall, and vice versa. Also tested: inflation erodes purchasing power and pushes rate expectations up.",
        typicalQuestionForms: [
          "Interest rates rise. What happens to the price of outstanding bonds?",
          "How does unexpected inflation typically affect bond yields?",
        ],
        mustKnow: [
          "Bond prices and market interest rates move inversely.",
          "Rising rates raise borrowing costs and depress existing bond prices; falling rates do the reverse.",
          "Inflation erodes real returns and generally pushes nominal yields higher.",
        ],
        scoringActions: [
          "State 'rates up = prices down' before answering any rate/bond item.",
          "Separate the effect on new-issue coupons (higher) from outstanding prices (lower).",
        ],
      },
      {
        id: "sie-full-m2-tp3",
        title: "Monetary vs fiscal policy",
        priority: "high",
        examinerFocus:
          "Attribution of the tool to the right actor. Monetary policy is the central bank (money supply, rates, open-market operations, reserve/discount settings); fiscal policy is the government/legislature (taxing and spending). Questions swap the actor to create distractors.",
        typicalQuestionForms: [
          "A change in the federal funds target is an example of which policy?",
          "Which body sets fiscal policy?",
        ],
        mustKnow: [
          "Monetary policy = central bank; tools include open-market operations, the discount rate, and reserve requirements.",
          "Fiscal policy = government taxing and spending decisions.",
          "Easing (monetary) or stimulus (fiscal) tends to support growth; tightening/austerity restrains it.",
        ],
        scoringActions: [
          "Match the tool to its actor (central bank vs government) first.",
          "Reject options that assign spending/taxing to the central bank.",
        ],
      },
      {
        id: "sie-full-m2-tp4",
        title: "The registration and underwriting process (cooling-off period)",
        priority: "critical",
        examinerFocus:
          "The offering timeline and what is permitted at each stage. The cooling-off period (minimum ~20 days) allows only limited activity — indications of interest and a preliminary prospectus (red herring), no sales and no final confirmations.",
        typicalQuestionForms: [
          "During the cooling-off period, a registered rep may do which of the following?",
          "What document is distributed during the cooling-off period?",
          "How does firm-commitment underwriting differ from best efforts?",
        ],
        mustKnow: [
          "Timeline: file registration statement, cooling-off period (~20 days minimum), effective date, then sales.",
          "During cooling-off: preliminary prospectus (red herring) and non-binding indications of interest only; no sales or money accepted.",
          "Firm commitment = underwriter buys the whole issue and bears unsold risk; best efforts = underwriter acts as agent and returns unsold shares.",
        ],
        scoringActions: [
          "Reject any 'sold shares' or 'accepted payment' option during cooling-off.",
          "Distinguish the underwriter's risk: principal (firm commitment) vs agent (best efforts).",
        ],
      },
      {
        id: "sie-full-m2-tp5",
        title: "Exemptions, Regulation D private placements, and restricted stock",
        priority: "high",
        examinerFocus:
          "The difference between an exempt security and an exempt transaction, and that Reg D private placements sell mainly to accredited investors and produce restricted securities with resale limits (Rule 144 concept).",
        typicalQuestionForms: [
          "Which is an example of an exempt security?",
          "Regulation D private placements are sold primarily to which investors?",
          "Why are privately placed securities generally 'restricted'?",
        ],
        mustKnow: [
          "Exempt securities include U.S. government and municipal securities; exempt transactions include certain private/institutional offerings.",
          "An exemption can attach to the security OR the transaction — not necessarily both.",
          "Reg D offerings target accredited investors (with limited non-accredited participation); the shares are restricted and face resale conditions.",
        ],
        scoringActions: [
          "Ask whether the exemption is about the security or the transaction.",
          "Tie 'private placement' to accredited investors and restricted resale.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Economics and the offering process are reliable points; target near-full conversion on the rate/price rule and the cooling-off timeline, which recur across the exam.",
      timeBudget:
        "About 60–90 seconds per item; economic-attribution and timeline questions are recall-based with no computation.",
      answerSequence: [
        "For economics: classify the indicator or assign the policy to its actor.",
        "For rates: state the inverse price relationship before evaluating options.",
        "For offerings: locate the stage on the timeline and check what is permitted.",
        "For exemptions: separate exempt security from exempt transaction.",
      ],
      qualityChecks: [
        "Is 'unemployment/inflation' being treated as lagging?",
        "Did you assign monetary tools to the central bank and fiscal tools to the government?",
        "Did any distractor sneak a 'sale' into the cooling-off period?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m2-sn1",
        title: "Reading the cycle and the indicators that describe it",
        testPointIds: ["sie-full-m2-tp1", "sie-full-m2-tp3"],
        explanation: [
          "The business cycle runs expansion, peak, contraction, trough, and back to expansion. The exam rarely asks you to forecast; it asks you to classify. Given a description ('output is rising, unemployment falling'), name the phase (expansion). Given an indicator, place it in time: leading indicators change ahead of the economy and are used to anticipate turns (building permits, new manufacturing orders, money supply, equity prices), while lagging indicators only confirm a change after it has happened (the unemployment rate, CPI/inflation, average duration of unemployment).",
          "Policy is the lever pulled in response to the cycle. Monetary policy is run by the central bank and works through open-market operations, the discount rate, and reserve requirements to change the money supply and short-term rates. Fiscal policy is run by the government through taxing and spending. The commonest distractor gives the central bank a spending power or the legislature a rate-setting power — reject those on sight. Easier money and fiscal stimulus tend to support activity; tightening and austerity restrain it.",
        ],
        keyRules: [
          "Cycle order: expansion, peak, contraction, trough.",
          "Unemployment and inflation are lagging indicators.",
          "Monetary = central bank tools; fiscal = government taxing/spending.",
        ],
      },
      {
        id: "sie-full-m2-sn2",
        title: "The inverse relationship, from concept to a worked case",
        testPointIds: ["sie-full-m2-tp2"],
        explanation: [
          "A bond pays a fixed coupon. If market interest rates rise after the bond is issued, newly issued bonds offer higher coupons, so the older, lower-coupon bond is worth less and its price falls until its yield is competitive. If rates fall, the older bond's above-market coupon becomes attractive and its price rises. This inverse relationship is the backbone of every fixed-income question and reappears in modules 3 and 5.",
          "Keep two effects separate. New-issue coupons move with rates (rates up, new coupons up). Prices of already-outstanding bonds move opposite to rates (rates up, prices down). Inflation sits behind this: when inflation rises, investors demand higher nominal yields to preserve real return, which pushes existing bond prices down. The SIE does not require present-value math, but it does require you to reason the direction confidently.",
        ],
        keyRules: [
          "Rates and outstanding bond prices move inversely.",
          "New-issue coupons move with rates; outstanding prices move against them.",
          "Higher inflation pushes nominal yields up and prices down.",
        ],
        workedProblem: {
          scenario:
            "An investor owns a bond issued last year with a 4% coupon at par ($1,000). Since then, prevailing rates on comparable new bonds have risen to 6%. Directionally, what happens to the investor's bond price, its current yield, and the coupon on newly issued comparable bonds?",
          steps: [
            "Identify the fixed feature: the coupon is locked at 4% ($40/year) for the life of the bond.",
            "Compare to the market: new comparable bonds now pay 6%, so the 4% bond is less attractive.",
            "Apply the inverse rule: to compete, the 4% bond's price must fall below par (to a discount).",
            "Recompute current yield direction: current yield = annual coupon divided by a now-lower price, so current yield rises above 4% toward the market level.",
            "Assess new issues: brand-new comparable bonds carry ~6% coupons because coupons move with rates.",
          ],
          conclusion:
            "The investor's bond price falls to a discount, its current yield rises toward 6%, and newly issued comparable bonds carry higher (~6%) coupons. Direction — not a precise price — is what the SIE tests.",
          markingNotes: [
            "Full credit requires all three directions correct: price down, current yield up, new coupons up.",
            "Reversing price and yield direction is the classic error and earns no credit.",
          ],
        },
      },
      {
        id: "sie-full-m2-sn3",
        title: "Bringing a security to market: registration and underwriting",
        testPointIds: ["sie-full-m2-tp4"],
        explanation: [
          "A public offering follows a fixed sequence. The issuer files a registration statement with the SEC; a cooling-off period of at least about 20 days follows; on the effective date the security may be sold, accompanied by a final prospectus. During the cooling-off period, activity is tightly limited: a preliminary prospectus (red herring) may be distributed and non-binding indications of interest may be gathered, but no sales may occur and no money may be accepted. Exam distractors routinely slip a 'sale' or 'accepted payment' into this window — reject them.",
          "Underwriters can take the issue on two bases. Under firm commitment, the underwriter buys the entire issue from the issuer and resells it, bearing the risk of any unsold shares (acting as principal). Under best efforts, the underwriter acts only as an agent, selling what it can and returning the rest, so the issuer bears the unsold risk. A syndicate of firms spreads underwriting risk on larger deals.",
        ],
        keyRules: [
          "Sequence: file, cooling-off (~20 days min), effective, sell with final prospectus.",
          "Cooling-off allows red herring + indications of interest only; no sales.",
          "Firm commitment = underwriter bears unsold risk; best efforts = issuer bears it.",
        ],
      },
      {
        id: "sie-full-m2-sn4",
        title: "Exemptions and private placements",
        testPointIds: ["sie-full-m2-tp5"],
        explanation: [
          "Not all securities must be registered. Exempt securities — U.S. government and municipal securities among them — are exempt because of what they are. Exempt transactions — such as certain private and institutional offerings — are exempt because of how and to whom they are sold. The crucial exam point is that these are separate concepts: a transaction can be exempt even if the security is not, and vice versa.",
          "Regulation D is the workhorse private-placement exemption. It allows an issuer to raise capital without full registration by selling primarily to accredited investors (with limited participation by non-accredited investors) and providing reduced disclosure. Because these securities were never registered for public sale, they are 'restricted': buyers generally must hold them and satisfy resale conditions (the Rule 144 concept) before selling into the public market. Control securities held by insiders face parallel resale limits.",
        ],
        keyRules: [
          "Distinguish exempt security (what it is) from exempt transaction (how it is sold).",
          "Reg D sells mainly to accredited investors with limited disclosure.",
          "Privately placed shares are restricted and face resale conditions (Rule 144).",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m2-p1",
        testPointIds: ["sie-full-m2-tp1", "sie-full-m2-tp3"],
        style: "Classification MCQ",
        question:
          "A rise in the unemployment rate continues for several months after economic output has already begun to recover. Classify unemployment as an indicator type, and state which policy actor could cut short-term interest rates in response.",
        answerPlan: [
          "Classify the indicator by timing.",
          "Assign the rate-cutting tool to the correct actor.",
        ],
        modelAnswer:
          "The unemployment rate is a lagging indicator — it confirms changes in the economy only after they have occurred, which is why it can keep rising even as recovery begins. Cutting short-term interest rates is a monetary-policy tool, exercised by the central bank through its policy operations, not by the government (which controls fiscal policy via taxing and spending).",
        markingGuide: [
          "Identifies unemployment as a lagging indicator.",
          "Attributes rate cuts to the central bank / monetary policy.",
          "Does not attribute rate-setting to the government.",
        ],
      },
      {
        id: "sie-full-m2-p2",
        testPointIds: ["sie-full-m2-tp4"],
        style: "Rule-application MCQ",
        question:
          "During the cooling-off period for a new registered offering, a customer tells her rep she 'definitely wants 500 shares.' What may the rep do, and what may the rep not do?",
        answerPlan: [
          "Locate the stage on the offering timeline.",
          "State permitted vs prohibited activity.",
          "Reference the correct document.",
        ],
        modelAnswer:
          "During the cooling-off period the rep may record a non-binding indication of interest and provide the customer with a preliminary prospectus (red herring). The rep may not sell the shares, accept payment, or confirm a sale, because the registration is not yet effective. The order can only be executed on or after the effective date, when a final prospectus is delivered. Any option describing a completed sale during cooling-off is wrong.",
        markingGuide: [
          "Permits only an indication of interest plus a preliminary prospectus.",
          "Prohibits sales/payment during the cooling-off period.",
          "Ties execution to the effective date and final prospectus.",
        ],
      },
      {
        id: "sie-full-m2-p3",
        testPointIds: ["sie-full-m2-tp5"],
        style: "Concept-distinction MCQ",
        question:
          "A startup raises capital under Regulation D. Explain who typically buys these securities, why the securities are considered restricted, and how this differs from an 'exempt security.'",
        answerPlan: [
          "Identify the eligible buyers.",
          "Explain the restricted-resale consequence.",
          "Contrast exempt transaction with exempt security.",
        ],
        modelAnswer:
          "Regulation D offerings are sold primarily to accredited investors (with limited non-accredited participation) under an exempt transaction, with reduced disclosure. Because the shares were never registered for public sale, they are restricted: buyers must generally hold them and meet resale conditions (Rule 144) before selling to the public. This is an exemption based on how the securities are sold — an exempt transaction — which is different from an exempt security like a Treasury or municipal bond, which is exempt because of what it is.",
        markingGuide: [
          "States accredited investors are the primary buyers.",
          "Explains restricted status and resale conditions.",
          "Distinguishes exempt transaction from exempt security.",
        ],
      },
    ],
  }),

  "sie-full-m3": examDepth({
    testPoints: [
      {
        id: "sie-full-m3-tp1",
        title: "Common vs preferred stock features and rights",
        priority: "critical",
        examinerFocus:
          "The trade-offs between the two equity types: common carries voting and growth (residual claim); preferred carries a fixed dividend and priority over common. Cumulative preferred accrues missed dividends.",
        typicalQuestionForms: [
          "Which security typically carries voting rights and the greatest growth potential?",
          "What does cumulative preferred stock provide that non-cumulative does not?",
          "In a dividend cut, which holders are paid first?",
        ],
        mustKnow: [
          "Common: voting rights, residual/last claim, highest growth potential and volatility.",
          "Preferred: fixed dividend, priority over common for dividends and liquidation, usually non-voting.",
          "Cumulative preferred accrues unpaid dividends that must be paid before any common dividend.",
        ],
        scoringActions: [
          "Match the feature (voting/growth vs fixed income/priority) to the correct equity type.",
          "For cumulative preferred, ensure arrears are cleared before common receives anything.",
        ],
      },
      {
        id: "sie-full-m3-tp2",
        title: "Dividend dates and liquidation priority",
        priority: "high",
        examinerFocus:
          "The sequence of dividend dates (declaration, ex-date, record, payable) and the liquidation waterfall. The ex-date determines who is entitled to the dividend.",
        typicalQuestionForms: [
          "To receive the declared dividend, an investor must buy before which date?",
          "Rank the order of claims in a corporate liquidation.",
        ],
        mustKnow: [
          "Dividend dates in order: declaration, ex-dividend, record, payable.",
          "Buy before the ex-date to receive the dividend; on/after the ex-date the seller keeps it.",
          "Liquidation priority: secured creditors, unsecured creditors (incl. bondholders/general creditors), preferred, then common.",
        ],
        scoringActions: [
          "Use the ex-date as the cutoff for dividend entitlement.",
          "Apply the liquidation ladder top-down; common is always last.",
        ],
      },
      {
        id: "sie-full-m3-tp3",
        title: "Bond features: par, coupon, maturity, seniority, call/convert",
        priority: "high",
        examinerFocus:
          "Correctly reading a bond's structural features and how secured vs unsecured (debenture) status and call/convertible features affect risk and value to the holder.",
        typicalQuestionForms: [
          "What is the difference between a secured bond and a debenture?",
          "How does a call feature disadvantage a bondholder?",
          "A convertible bond gives the holder what right?",
        ],
        mustKnow: [
          "Bonds have par (usually $1,000), a fixed coupon, and a maturity date.",
          "Secured bonds are backed by specific collateral; debentures are unsecured (backed by issuer credit).",
          "Callable bonds can be redeemed early by the issuer (reinvestment risk to holders); convertibles can be exchanged for stock.",
        ],
        scoringActions: [
          "Tie 'unsecured' to debenture and 'collateral-backed' to secured.",
          "Frame calls as issuer-favourable (they call when rates fall), hurting holders.",
        ],
      },
      {
        id: "sie-full-m3-tp4",
        title: "Bond yields and the price-yield relationship",
        priority: "critical",
        examinerFocus:
          "Computing current yield and reasoning about the premium/discount relationship: when price is below par, current yield and YTM exceed the coupon; when above par, they fall below it.",
        typicalQuestionForms: [
          "A bond with a $60 coupon trades at $1,200. What is its current yield?",
          "A bond trades at a premium. How do its coupon, current yield, and YTM rank?",
        ],
        mustKnow: [
          "Current yield = annual coupon / market price.",
          "Discount bond (price < par): coupon < current yield < YTM.",
          "Premium bond (price > par): coupon > current yield > YTM.",
        ],
        scoringActions: [
          "Plug into current yield = coupon / price directly.",
          "Order the yields using the premium/discount ranking before answering.",
        ],
      },
      {
        id: "sie-full-m3-tp5",
        title: "Risks by security type and corporate actions",
        priority: "high",
        examinerFocus:
          "Matching each risk (interest-rate, credit, reinvestment for bonds; market/business risk for equity) to the security it most affects, and computing the mechanical effect of stock splits (no change in total value).",
        typicalQuestionForms: [
          "Which risk increases with a bond's time to maturity?",
          "After a 2-for-1 split, what happens to share count and price?",
        ],
        mustKnow: [
          "Interest-rate risk rises with maturity; longer bonds are more price-sensitive.",
          "Credit (default) risk is measured by ratings; reinvestment risk affects coupon reinvestment when rates fall.",
          "A 2-for-1 split doubles shares and halves price; total position value is unchanged.",
        ],
        scoringActions: [
          "Link each named risk to the security type it primarily affects.",
          "For splits, verify total value is constant before/after.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Equity and debt fundamentals sit inside the ~44% products section; this is high-yield territory — aim to convert nearly all recall items and the current-yield computation.",
      timeBudget:
        "45–90 seconds per item; current-yield questions take under a minute once the formula is set up.",
      answerSequence: [
        "Identify the security type (common, preferred, or bond).",
        "For yields, write current yield = coupon / price and apply the premium/discount ranking.",
        "For priority, apply the liquidation ladder or dividend-date sequence.",
        "For splits/actions, confirm total value is preserved.",
      ],
      qualityChecks: [
        "Is common last in liquidation and preferred ahead of it?",
        "Did the yield ranking follow premium (coupon highest) vs discount (YTM highest)?",
        "Does the stock split leave total position value unchanged?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m3-sn1",
        title: "Two equities, two purposes",
        testPointIds: ["sie-full-m3-tp1", "sie-full-m3-tp2"],
        explanation: [
          "Common stock is ownership with upside: holders vote to elect directors and approve major actions, and they hold the residual claim on earnings and assets. That residual position means the greatest growth potential but also the greatest volatility and the last place in the liquidation line. Preferred stock behaves more like a hybrid: it pays a fixed dividend, usually carries no vote, and ranks ahead of common for both dividends and liquidation proceeds. Cumulative preferred adds a protection — any missed (in arrears) dividends accumulate and must be paid in full before common shareholders receive a cent.",
          "Dividend entitlement turns on the ex-dividend date. The board declares the dividend (declaration date), sets a record date to identify owners, and pays on the payable date; the ex-date is set so that a buyer purchasing on or after it does not receive the dividend — the seller keeps it. In liquidation, the ladder is strict: secured creditors, then unsecured creditors (including bondholders and general creditors), then preferred shareholders, and finally common shareholders. Committing this ordering to memory answers a whole family of priority questions.",
        ],
        keyRules: [
          "Common: vote + residual claim + growth; preferred: fixed dividend + priority, usually no vote.",
          "Cumulative preferred arrears are paid before any common dividend.",
          "Liquidation: secured, unsecured, preferred, common.",
        ],
      },
      {
        id: "sie-full-m3-sn2",
        title: "Bond anatomy and the features that shift risk",
        testPointIds: ["sie-full-m3-tp3", "sie-full-m3-tp5"],
        explanation: [
          "A bond is a contractual loan: par value (typically $1,000) is repaid at a stated maturity, and a fixed coupon is paid along the way. What changes the risk profile is the structure around those basics. Secured bonds are backed by specific collateral (equipment, mortgages), giving holders a claim on assets in default; debentures are unsecured and rely solely on the issuer's general credit, so they sit lower in the recovery order. Seniority language in the indenture governs who is repaid first among creditors.",
          "Embedded options reallocate risk between issuer and holder. A call feature lets the issuer redeem early — issuers call when rates have fallen, refinancing cheaply and leaving the holder to reinvest at lower rates (reinvestment risk), so calls favour the issuer. A convertible feature lets the holder exchange the bond for a set number of shares, adding equity upside and usually allowing a lower coupon. The tested risks then map cleanly: interest-rate risk rises with maturity, credit risk is captured by ratings, and reinvestment risk bites when rates fall.",
        ],
        keyRules: [
          "Secured = collateral-backed; debenture = unsecured.",
          "Callable favours the issuer (reinvestment risk to holders); convertible favours the holder.",
          "Interest-rate risk rises with maturity; ratings signal credit risk.",
        ],
      },
      {
        id: "sie-full-m3-sn3",
        title: "Yields and the premium/discount ranking, worked",
        testPointIds: ["sie-full-m3-tp4"],
        explanation: [
          "Current yield answers 'what income am I getting relative to what I paid?' and equals the annual coupon divided by the current market price. Yield to maturity is broader: it is the total annualised return if the bond is held to maturity, capturing coupon income plus any gain (from a discount) or loss (from a premium) as the price pulls to par. The SIE does not require a full YTM calculation but does require the ranking logic.",
          "That ranking follows directly from the inverse price-yield relationship. When a bond trades at a discount (below par), the investor also earns a gain to par, so YTM exceeds current yield, which exceeds the coupon rate. When a bond trades at a premium (above par), the investor absorbs a loss to par, so the coupon exceeds current yield, which exceeds YTM. Memorising 'discount: coupon lowest; premium: coupon highest' lets you order the three yields instantly.",
        ],
        keyRules: [
          "Current yield = annual coupon / market price.",
          "Discount: coupon < current yield < YTM.",
          "Premium: coupon > current yield > YTM.",
        ],
        formulas: [
          "Current yield = annual coupon / market price",
          "Premium/discount ranking: order coupon, current yield, YTM by where price sits vs par",
        ],
        workedProblem: {
          scenario:
            "A corporate bond has a 5% coupon (par $1,000, so $50/year). It currently trades at $1,250. Compute the current yield, then rank the coupon rate, current yield, and yield to maturity.",
          steps: [
            "Identify the annual coupon: 5% of $1,000 par = $50 per year.",
            "Apply the current-yield formula: $50 / $1,250 = 0.04 = 4.0%.",
            "Note the price relative to par: $1,250 > $1,000, so the bond trades at a premium.",
            "Apply the premium ranking: coupon (5%) > current yield (4%) > YTM.",
            "Reason why: a premium buyer pays $1,250 but is redeemed at $1,000 par, absorbing a $250 loss that drags YTM below the current yield.",
          ],
          conclusion:
            "Current yield is 4.0%, and because the bond trades at a premium the order is coupon 5% > current yield 4% > YTM. The premium's built-in capital loss is what makes YTM the lowest of the three.",
          markingNotes: [
            "Full credit requires the correct current yield (4%) and the correct three-way ranking.",
            "Ranking the yields as if the bond were at a discount (YTM highest) is the common error and loses the ranking mark.",
          ],
        },
      },
      {
        id: "sie-full-m3-sn4",
        title: "Corporate actions that change form but not value",
        testPointIds: ["sie-full-m3-tp5"],
        explanation: [
          "Corporate actions restructure a holding without necessarily changing its worth. A forward stock split (e.g., 2-for-1) increases the number of shares and proportionally lowers the price per share, leaving total position value unchanged; a reverse split does the opposite. The SIE tests whether you understand that a split is cosmetic to total value — an investor with 100 shares at $80 ends up with 200 shares at $40, still $8,000.",
          "Other actions affect holders differently. Tender offers and buybacks let a company (or an acquirer) purchase shares, often at a premium, which can be attractive to holders. Stock dividends add shares in lieu of cash. The theme is to separate actions that only change share count/price mechanics (splits, stock dividends) from those that involve an actual purchase or economic change (tender offers, buybacks).",
        ],
        keyRules: [
          "2-for-1 split: shares double, price halves, total value unchanged.",
          "Reverse split: shares fall, price rises, total value unchanged.",
          "Tender offers/buybacks involve an actual purchase, often at a premium.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m3-p1",
        testPointIds: ["sie-full-m3-tp1", "sie-full-m3-tp2"],
        style: "Priority MCQ",
        question:
          "A company suspends dividends for two years, then resumes them. It has cumulative preferred stock outstanding. Before the company can pay any dividend to common shareholders, what must it do, and where does common rank in a liquidation?",
        answerPlan: [
          "Apply the cumulative-preferred arrears rule.",
          "State the liquidation position of common.",
        ],
        modelAnswer:
          "Because the preferred is cumulative, the two years of missed (in-arrears) preferred dividends plus the current preferred dividend must be paid in full before any dividend is paid to common shareholders. In a liquidation, common ranks last — behind secured creditors, unsecured creditors including bondholders, and preferred shareholders — so common holders receive only whatever remains after all higher claims are satisfied.",
        markingGuide: [
          "States all preferred arrears must be cleared before common dividends.",
          "Places common last in the liquidation waterfall.",
          "Correctly orders creditors and preferred ahead of common.",
        ],
      },
      {
        id: "sie-full-m3-p2",
        testPointIds: ["sie-full-m3-tp4"],
        style: "Computation MCQ",
        question:
          "A bond has a 6% coupon (par $1,000) and trades at $800. Compute the current yield and state whether the yield to maturity is above or below the current yield, with reasoning.",
        answerPlan: [
          "Compute the annual coupon.",
          "Apply the current-yield formula.",
          "Use the discount ranking to place YTM.",
        ],
        modelAnswer:
          "The annual coupon is 6% of $1,000 = $60. Current yield = $60 / $800 = 7.5%. Because the bond trades at a discount (price below par), the investor also earns a gain as the price rises to par at maturity, so the yield to maturity is above the current yield. The full ranking is coupon 6% < current yield 7.5% < YTM.",
        markingGuide: [
          "Computes current yield of 7.5%.",
          "States YTM is above current yield for a discount bond.",
          "Gives the pull-to-par reasoning for full marks.",
        ],
      },
      {
        id: "sie-full-m3-p3",
        testPointIds: ["sie-full-m3-tp3", "sie-full-m3-tp5"],
        style: "Feature-and-risk MCQ",
        question:
          "An issuer sells an unsecured, callable bond. Explain what 'unsecured' means for the holder's claim, why the call feature works against the holder, and which risk grows as the bond's maturity lengthens.",
        answerPlan: [
          "Define unsecured/debenture status.",
          "Explain the call feature's disadvantage.",
          "Identify the maturity-linked risk.",
        ],
        modelAnswer:
          "Unsecured means the bond is a debenture, backed only by the issuer's general creditworthiness rather than specific collateral, so holders have a weaker claim in default than secured creditors. The call feature disadvantages the holder because the issuer will call the bond when rates fall, redeeming it and forcing the holder to reinvest the proceeds at lower prevailing rates (reinvestment risk). Interest-rate risk is the risk that grows with maturity — longer bonds experience larger price swings for a given change in rates.",
        markingGuide: [
          "Defines unsecured/debenture and its weaker claim.",
          "Explains issuers call when rates fall, creating reinvestment risk.",
          "Identifies interest-rate risk as rising with maturity.",
        ],
      },
    ],
  }),

  "sie-full-m4": examDepth({
    testPoints: [
      {
        id: "sie-full-m4-tp1",
        title: "Open-end vs closed-end funds, ETFs, and UITs",
        priority: "critical",
        examinerFocus:
          "Distinguishing the four investment-company structures by how shares are created and priced: open-end funds continuously issue/redeem at NAV; closed-end funds have a fixed share count and trade at a premium/discount; ETFs trade intraday; UITs hold a fixed portfolio with a termination date.",
        typicalQuestionForms: [
          "Which fund continuously issues and redeems shares at NAV?",
          "Why can a closed-end fund trade at a discount to NAV?",
          "Which product holds a fixed portfolio and has a set termination date?",
        ],
        mustKnow: [
          "Open-end (mutual fund): unlimited shares, bought/redeemed at NAV (forward pricing).",
          "Closed-end: fixed shares, trade on an exchange at market price (premium or discount to NAV).",
          "ETF: trades intraday like a stock; UIT: fixed, unmanaged portfolio with a termination date.",
        ],
        scoringActions: [
          "Map 'continuous issue/redeem at NAV' to open-end and 'fixed shares, market price' to closed-end.",
          "Tie 'fixed portfolio + termination date' to UIT.",
        ],
      },
      {
        id: "sie-full-m4-tp2",
        title: "NAV and forward pricing",
        priority: "high",
        examinerFocus:
          "Computing NAV and knowing that mutual-fund orders receive the next computed NAV (forward pricing), calculated once per business day.",
        typicalQuestionForms: [
          "How is a mutual fund's NAV per share calculated?",
          "An order to buy a mutual fund is placed mid-morning. At what price does it execute?",
        ],
        mustKnow: [
          "NAV per share = (total assets - total liabilities) / shares outstanding.",
          "Forward pricing: orders fill at the next NAV computed after the order is received.",
          "NAV is typically calculated once per business day at market close.",
        ],
        scoringActions: [
          "Apply the NAV formula precisely; do not use market price for open-end funds.",
          "For timing questions, choose the next-computed NAV, not the last one.",
        ],
      },
      {
        id: "sie-full-m4-tp3",
        title: "Share classes, loads, and breakpoints",
        priority: "critical",
        examinerFocus:
          "Distinguishing Class A (front-end load, breakpoint discounts), Class B (contingent deferred/back-end load that declines), and Class C (level load with ongoing 12b-1). Also that breakpoint selling is a prohibited practice.",
        typicalQuestionForms: [
          "Which share class has a front-end sales charge with breakpoint discounts?",
          "Splitting a purchase to keep the client below a breakpoint is called what, and is it allowed?",
          "For a long-term, large investment, which class is generally most cost-effective?",
        ],
        mustKnow: [
          "Class A: front-end load, reduced at breakpoints (and via letters of intent/rights of accumulation).",
          "Class B: back-end contingent deferred sales charge that declines over time; higher 12b-1.",
          "Class C: level load with ongoing 12b-1 fees; costly for long holding periods.",
        ],
        scoringActions: [
          "Match the load type to the class before choosing.",
          "Flag breakpoint selling as a prohibited practice, not a service.",
        ],
      },
      {
        id: "sie-full-m4-tp4",
        title: "ETF creation/redemption and tax efficiency",
        priority: "medium",
        examinerFocus:
          "How the in-kind creation/redemption mechanism through authorized participants keeps ETF prices near NAV and contributes to tax efficiency and intraday tradeability.",
        typicalQuestionForms: [
          "How does the creation/redemption process keep an ETF's price near its NAV?",
          "Why are ETFs often more tax-efficient than mutual funds?",
        ],
        mustKnow: [
          "Authorized participants create/redeem ETF shares in kind, arbitraging price toward NAV.",
          "ETFs trade intraday at market prices with bid-ask spreads and small premiums/discounts.",
          "In-kind redemptions limit taxable capital-gains distributions, aiding tax efficiency.",
        ],
        scoringActions: [
          "Explain price alignment through AP arbitrage, not a mandated NAV price.",
          "Tie tax efficiency to in-kind redemption mechanics.",
        ],
      },
      {
        id: "sie-full-m4-tp5",
        title: "Variable annuities/life and heightened suitability",
        priority: "high",
        examinerFocus:
          "The two phases of a variable annuity (accumulation and payout/annuitisation), that sub-accounts carry market risk, and why high fees, surrender charges, and complexity raise suitability and disclosure duties.",
        typicalQuestionForms: [
          "What are the two phases of a variable annuity?",
          "Why are suitability obligations heightened for variable products?",
          "Who bears the investment risk in a variable annuity's sub-accounts?",
        ],
        mustKnow: [
          "Variable annuity phases: accumulation (contributions grow tax-deferred) and payout/annuitisation.",
          "Sub-accounts invest in fund-like options; the contract owner bears market risk.",
          "High fees, surrender charges, and complexity elevate suitability and disclosure duties.",
        ],
        scoringActions: [
          "Name both phases and place tax deferral in accumulation.",
          "Tie heightened suitability to fees, surrender charges, and complexity.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Packaged products are heavily represented in the products section; prioritise the structure distinctions and the share-class/breakpoint rules for near-full conversion.",
      timeBudget:
        "45–90 seconds per item; the NAV computation is quick once the formula is written.",
      answerSequence: [
        "Identify the product structure (open/closed/ETF/UIT).",
        "For pricing, apply NAV = (assets - liabilities)/shares and forward pricing.",
        "For fees, match the load pattern to the share class.",
        "For variable products, name the phase and flag suitability.",
      ],
      qualityChecks: [
        "Did you use NAV (not market price) for open-end funds?",
        "Is the load type correctly matched to the class?",
        "Did you treat breakpoint selling as prohibited?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m4-sn1",
        title: "Four structures, four pricing mechanisms",
        testPointIds: ["sie-full-m4-tp1", "sie-full-m4-tp2"],
        explanation: [
          "Investment companies pool investor money, but their structures price shares very differently. Open-end mutual funds issue and redeem an unlimited number of shares directly with the fund at net asset value, calculated once per business day; orders receive the next computed NAV (forward pricing), which prevents investors from trading on stale prices. Closed-end funds issue a fixed number of shares in an IPO and then trade on an exchange like a stock, so their market price can sit above (premium) or below (discount) NAV depending on supply and demand.",
          "ETFs blend features: they hold a portfolio like a fund but trade intraday on an exchange, with prices kept near NAV by an arbitrage mechanism (below). UITs are the odd one out — they hold a fixed, unmanaged basket of securities and have a stated termination date, after which the portfolio is liquidated and proceeds returned. The exam wants clean matching: continuous issue/redeem at NAV means open-end; fixed shares trading at market price means closed-end; a fixed portfolio with a termination date means UIT.",
        ],
        keyRules: [
          "Open-end: unlimited shares, priced at next-computed NAV (forward pricing).",
          "Closed-end: fixed shares, exchange-traded at a premium/discount to NAV.",
          "UIT: fixed portfolio with a set termination date.",
        ],
        formulas: ["NAV per share = (total assets - total liabilities) / shares outstanding"],
      },
      {
        id: "sie-full-m4-sn2",
        title: "Share classes, loads, and a breakpoint worked case",
        testPointIds: ["sie-full-m4-tp3"],
        explanation: [
          "Mutual-fund share classes package the same portfolio with different fee timing. Class A charges a front-end load at purchase but offers breakpoint discounts — the sales charge percentage drops as the investment amount crosses set thresholds, and rights of accumulation and letters of intent help investors reach them. Class B charges no front-end load but imposes a contingent deferred sales charge (back-end load) that declines the longer the investor holds, plus higher ongoing 12b-1 fees. Class C charges a level load with ongoing 12b-1 fees and no breakpoints, which makes it expensive for long holding periods.",
          "The suitability logic follows the horizon and amount: large, long-term investments usually favour Class A because breakpoints cut the front-end cost and ongoing fees are lower. Because breakpoints reward larger purchases, deliberately splitting an order to keep a client just below a breakpoint — depriving them of the discount to preserve a higher commission — is 'breakpoint selling,' a prohibited practice the exam tests directly.",
        ],
        keyRules: [
          "A = front-end load with breakpoints; B = declining back-end load; C = level load.",
          "Large/long-term investments generally favour Class A.",
          "Breakpoint selling is prohibited.",
        ],
        workedProblem: {
          scenario:
            "A fund's Class A schedule charges a 5.0% front-end load below $50,000 and 4.0% at the $50,000 breakpoint. A client intends to invest $52,000 as a lump sum. A rep proposes splitting it into a $40,000 purchase now and $12,000 next month. Evaluate the cost impact and whether the rep's plan is permissible.",
          steps: [
            "Determine the client's natural breakpoint: a single $52,000 purchase exceeds $50,000, qualifying for the 4.0% load.",
            "Compute the load at the correct breakpoint: 4.0% of $52,000 = $2,080.",
            "Compute the load if split below the breakpoint: 5.0% on each tranche = 5.0% of $52,000 = $2,600.",
            "Compare: splitting costs the client $2,600 - $2,080 = $520 more, purely to keep them under the breakpoint.",
            "Classify the conduct: splitting to deny the breakpoint discount is breakpoint selling, a prohibited practice.",
          ],
          conclusion:
            "The client should invest the $52,000 together to receive the 4.0% breakpoint (load $2,080). The rep's split would cost the client an extra $520 and constitutes prohibited breakpoint selling.",
          markingNotes: [
            "Full credit requires both the cost comparison and identifying breakpoint selling as prohibited.",
            "Recommending the split, or treating it as a neutral service, earns no credit.",
          ],
        },
      },
      {
        id: "sie-full-m4-sn3",
        title: "Why ETFs stay near NAV and stay tax-efficient",
        testPointIds: ["sie-full-m4-tp4"],
        explanation: [
          "ETFs trade intraday at market prices, yet they rarely stray far from NAV because of an arbitrage loop run by authorized participants (APs). When the ETF trades above NAV, APs deliver the underlying basket of securities in kind and receive new ETF shares to sell, adding supply and pushing the price down; when it trades below NAV, APs buy ETF shares and redeem them in kind for the basket, reducing supply and pushing the price up. This creation/redemption mechanism keeps market price and NAV aligned without any rule fixing the price.",
          "The same in-kind mechanism drives tax efficiency. Because redemptions are settled by handing over securities rather than selling them for cash, the ETF generally avoids realising capital gains that would otherwise be distributed to all shareholders. Combined with low expense ratios and intraday tradeability, this makes ETFs attractive to cost- and tax-sensitive investors — while bid-ask spreads and small premiums/discounts remain trading considerations.",
        ],
        keyRules: [
          "AP creation/redemption arbitrage keeps ETF price near NAV.",
          "In-kind redemptions limit taxable capital-gains distributions.",
          "Trading costs show up as spreads and small premiums/discounts.",
        ],
      },
      {
        id: "sie-full-m4-sn4",
        title: "Variable products and heightened duties",
        testPointIds: ["sie-full-m4-tp5"],
        explanation: [
          "A variable annuity has two phases. During accumulation, contributions are invested in sub-accounts (fund-like options) and grow tax-deferred; during the payout/annuitisation phase, the accumulated value is converted into a stream of income. Crucially, the contract owner bears the investment risk in the sub-accounts — returns vary with the markets, unlike a fixed annuity. Variable life insurance similarly combines a death benefit with investment sub-accounts.",
          "Because variable products carry high fees, surrender charges for early withdrawal, and considerable complexity, they trigger heightened suitability and disclosure obligations. A rep must have a reasonable basis that the product fits the customer's objectives, time horizon, and liquidity needs, and must disclose costs and surrender terms clearly. The exam frames unsuitable sales of these products — especially to investors who need liquidity or have short horizons — as a serious concern.",
        ],
        keyRules: [
          "Variable annuity phases: accumulation (tax-deferred) then payout.",
          "The owner bears sub-account market risk.",
          "High fees, surrender charges, and complexity raise suitability/disclosure duties.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m4-p1",
        testPointIds: ["sie-full-m4-tp1", "sie-full-m4-tp2"],
        style: "Structure-and-pricing MCQ",
        question:
          "A fund has $500 million in assets, $20 million in liabilities, and 24 million shares outstanding. It issues and redeems shares directly with investors. Compute NAV per share and state at what price a buy order placed at 11 a.m. will execute.",
        answerPlan: [
          "Apply the NAV formula.",
          "Identify the structure.",
          "Apply forward pricing to the timing.",
        ],
        modelAnswer:
          "NAV per share = ($500m - $20m) / 24m = $480m / 24m = $20.00. Because the fund issues and redeems directly with investors, it is an open-end mutual fund. Under forward pricing, an 11 a.m. order does not fill at the last posted NAV; it fills at the next NAV computed after the order is received, typically at that day's market close.",
        markingGuide: [
          "Computes NAV of $20.00 using (assets - liabilities)/shares.",
          "Identifies the fund as open-end.",
          "Applies forward pricing (next computed NAV) to the order.",
        ],
      },
      {
        id: "sie-full-m4-p2",
        testPointIds: ["sie-full-m4-tp3"],
        style: "Suitability/ethics MCQ",
        question:
          "A client has $105,000 to invest in one fund family for the long term. Class A breakpoints reduce the front-end load at $100,000. A rep suggests investing $95,000 in Class A now and $10,000 in a different fund family to 'diversify.' Identify the concern and the better course of action.",
        answerPlan: [
          "Spot the breakpoint being missed.",
          "Name the prohibited practice if applicable.",
          "Recommend the suitable action.",
        ],
        modelAnswer:
          "Investing $95,000 keeps the client just below the $100,000 breakpoint, causing them to pay a higher front-end load than a single $105,000 purchase in one family would incur. If the split is designed to avoid the breakpoint (and preserve a higher commission) rather than for a genuine investment reason, it is breakpoint selling — a prohibited practice. For a long-term investor of this size, the suitable course is to invest enough in one fund family to reach the $100,000 breakpoint and capture the reduced sales charge.",
        markingGuide: [
          "Identifies the missed breakpoint and higher load.",
          "Names breakpoint selling as the prohibited concern.",
          "Recommends reaching the breakpoint in one family.",
        ],
      },
      {
        id: "sie-full-m4-p3",
        testPointIds: ["sie-full-m4-tp5"],
        style: "Concept MCQ",
        question:
          "A 68-year-old with a short time horizon and a need for liquidity is offered a variable annuity with a 7-year surrender-charge schedule. Explain the two phases of the product, who bears the investment risk, and why suitability is a heightened concern here.",
        answerPlan: [
          "Name the two phases.",
          "Assign the market risk.",
          "Connect the client's facts to suitability.",
        ],
        modelAnswer:
          "A variable annuity has an accumulation phase, where contributions grow tax-deferred in sub-accounts, and a payout (annuitisation) phase, where the value is converted to income. The contract owner bears the investment risk because sub-account values move with the markets. Suitability is heightened because of the product's high fees, complexity, and surrender charges: for a 68-year-old with a short horizon and liquidity needs, a 7-year surrender schedule could trap assets and impose penalties on early access, making the recommendation questionable unless clearly justified and disclosed.",
        markingGuide: [
          "Names accumulation and payout phases.",
          "States the owner bears sub-account market risk.",
          "Links surrender charges/liquidity needs to a suitability concern.",
        ],
      },
    ],
  }),

  "sie-full-m5": examDepth({
    testPoints: [
      {
        id: "sie-full-m5-tp1",
        title: "Calls and puts: rights, obligations, and moneyness",
        priority: "critical",
        examinerFocus:
          "The fundamental option grid: a call is the right to buy, a put the right to sell, at the strike. Buyers pay a premium and hold rights; sellers (writers) receive the premium and take on obligations. Moneyness: a call is in the money above the strike, a put below.",
        typicalQuestionForms: [
          "What right does the buyer of a put option have?",
          "A call is in the money when the stock price is where relative to the strike?",
          "Who has the obligation in an option contract?",
        ],
        mustKnow: [
          "Call = right to buy at strike; put = right to sell at strike.",
          "Buyer pays premium and holds the right; writer receives premium and has the obligation.",
          "Call in the money: stock > strike; put in the money: stock < strike.",
        ],
        scoringActions: [
          "Draw the buyer/seller right-vs-obligation grid before answering.",
          "Check moneyness by comparing stock price to strike for the specific option type.",
        ],
      },
      {
        id: "sie-full-m5-tp2",
        title: "Option risk profiles (buyer vs naked writer)",
        priority: "high",
        examinerFocus:
          "Maximum loss reasoning: an option buyer's loss is limited to the premium; a naked call writer faces theoretically unlimited risk; time decay erodes option value approaching expiration.",
        typicalQuestionForms: [
          "What is the maximum loss for the buyer of an option?",
          "Why is writing a naked call considered especially risky?",
        ],
        mustKnow: [
          "Long option maximum loss = premium paid.",
          "Naked call writer risk is theoretically unlimited (no cap on the stock price).",
          "Time decay reduces an option's value as expiration approaches.",
        ],
        scoringActions: [
          "State the buyer's max loss equals the premium.",
          "Flag the naked call as the unlimited-risk position.",
        ],
      },
      {
        id: "sie-full-m5-tp3",
        title: "Municipal securities: GO vs revenue and tax-exempt interest",
        priority: "critical",
        examinerFocus:
          "The backing distinction (GO = issuer taxing power; revenue = specific project revenues) and computing the taxable-equivalent yield to explain munis' appeal to high-bracket investors.",
        typicalQuestionForms: [
          "How do general obligation and revenue bonds differ in their backing?",
          "Compute the taxable-equivalent yield of a 3% muni for a 35% bracket investor.",
          "Why are municipal bonds attractive to high-tax-bracket investors?",
        ],
        mustKnow: [
          "GO bonds are backed by the issuer's taxing power; revenue bonds by specific project revenues.",
          "Municipal interest is generally exempt from federal income tax.",
          "Taxable-equivalent yield = muni yield / (1 - marginal tax rate).",
        ],
        scoringActions: [
          "Match the backing to the bond type first.",
          "Apply the TEY formula and note it rises with the tax bracket.",
        ],
      },
      {
        id: "sie-full-m5-tp4",
        title: "REITs: structure, income, and taxation",
        priority: "medium",
        examinerFocus:
          "That REITs must distribute most of their income, provide liquid real-estate exposure when exchange-traded, and that their distributions are largely taxed as ordinary income, with real-estate and interest-rate risk.",
        typicalQuestionForms: [
          "Why must a REIT distribute most of its income?",
          "How are most REIT distributions taxed?",
        ],
        mustKnow: [
          "REITs pool capital to invest in real estate and must distribute most taxable income to holders.",
          "Exchange-traded REITs offer liquidity relative to direct property ownership.",
          "REIT distributions are largely taxed as ordinary income; risks include real-estate and interest-rate risk.",
        ],
        scoringActions: [
          "Tie the required distribution to the REIT's favourable tax treatment.",
          "Classify most REIT distributions as ordinary income, not qualified dividends.",
        ],
      },
      {
        id: "sie-full-m5-tp5",
        title: "Direct participation programs (DPPs): flow-through and illiquidity",
        priority: "medium",
        examinerFocus:
          "That DPPs (e.g., limited partnerships) pass income, gains, and losses through to investors, are typically illiquid with limited transferability, and therefore carry heightened suitability concerns.",
        typicalQuestionForms: [
          "What is the defining tax feature of a DPP?",
          "Why is liquidity a concern with DPPs?",
        ],
        mustKnow: [
          "DPPs pass income, gains, losses, and deductions through to investors (no entity-level tax).",
          "They are generally illiquid with limited transferability.",
          "Illiquidity and complexity raise suitability considerations.",
        ],
        scoringActions: [
          "Identify flow-through taxation as the DPP hallmark.",
          "Tie illiquidity to a suitability concern.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "This overview module rewards clean product distinctions; the option grid and the muni taxable-equivalent yield are near-guaranteed points if executed methodically.",
      timeBudget:
        "45–90 seconds per item; the TEY calculation takes under a minute once the formula is written.",
      answerSequence: [
        "For options, draw the right/obligation grid and check moneyness and max loss.",
        "For munis, match GO/revenue backing and apply TEY = yield/(1 - tax rate).",
        "For REITs/DPPs, recall the distribution/flow-through rule and the liquidity/tax feature.",
        "Eliminate distractors that reverse rights, backing, or tax treatment.",
      ],
      qualityChecks: [
        "Did you keep the buyer's loss capped at the premium and the naked call unlimited?",
        "Did the TEY formula use (1 - tax rate) in the denominator?",
        "Are REIT distributions treated as ordinary income and DPPs as flow-through?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m5-sn1",
        title: "The option grid and risk, at SIE depth",
        testPointIds: ["sie-full-m5-tp1", "sie-full-m5-tp2"],
        explanation: [
          "Every option question resolves onto a simple 2x2 grid. Along one axis is the type: a call is the right to buy the underlying at the strike, a put is the right to sell at the strike. Along the other axis is the party: the buyer pays a premium and holds the right (and can walk away), while the writer/seller receives the premium and takes on the corresponding obligation (to deliver on a call, to purchase on a put) if exercised. The SIE tests the fundamentals — rights, obligations, and moneyness — not multi-leg strategies, which belong to the top-off Series 7.",
          "Moneyness compares the stock price to the strike. A call is in the money when the stock is above the strike (you can buy cheap); a put is in the money when the stock is below the strike (you can sell high). Risk follows from the grid: a buyer's maximum loss is the premium paid, because the right can simply expire. A naked call writer, by contrast, faces theoretically unlimited risk, since the stock can rise without bound while they are obligated to deliver at the fixed strike. Time decay steadily erodes option value as expiration nears, hurting buyers and helping writers.",
        ],
        keyRules: [
          "Call = right to buy; put = right to sell (at the strike).",
          "Buyer holds the right (max loss = premium); writer holds the obligation.",
          "Call ITM: stock > strike; put ITM: stock < strike; naked call risk is unlimited.",
        ],
      },
      {
        id: "sie-full-m5-sn2",
        title: "Municipal securities and taxable-equivalent yield, worked",
        testPointIds: ["sie-full-m5-tp3"],
        explanation: [
          "Municipal bonds are issued by states, cities, and their agencies, and their interest is generally exempt from federal income tax. That exemption is the whole reason to compare a muni's stated yield to a taxable bond on an apples-to-apples basis. Munis come in two backing types: general obligation (GO) bonds are backed by the issuer's full faith and credit and taxing power, while revenue bonds are repaid only from the revenues of a specific project (a toll road, a utility), making them dependent on that project's success.",
          "The taxable-equivalent yield (TEY) translates a tax-free muni yield into the pre-tax yield a taxable bond would need to match it: TEY = muni yield / (1 - marginal tax rate). Because the denominator shrinks as the tax rate rises, the TEY climbs with the investor's bracket — which is precisely why munis are most attractive to high-bracket investors. A low-bracket investor gains little from the exemption and may do better in a higher-yielding taxable bond.",
        ],
        keyRules: [
          "GO = taxing power; revenue = specific project revenues.",
          "Municipal interest is generally federally tax-exempt.",
          "TEY = muni yield / (1 - marginal tax rate); it rises with the bracket.",
        ],
        formulas: ["Taxable-equivalent yield = municipal yield / (1 - marginal tax rate)"],
        workedProblem: {
          scenario:
            "An investor in the 35% federal bracket compares a 3.25% tax-exempt GO bond with a taxable corporate bond yielding 4.75%. Compute the muni's taxable-equivalent yield and decide which bond delivers more after-tax income, then explain how the answer would change for a 12% bracket investor.",
          steps: [
            "Write the TEY formula: TEY = muni yield / (1 - tax rate).",
            "Insert the 35%-bracket values: TEY = 3.25% / (1 - 0.35) = 3.25% / 0.65 = 5.0%.",
            "Compare to the taxable bond: the muni's 5.0% TEY exceeds the corporate's 4.75%, so the muni wins for this investor.",
            "Recompute for the 12% bracket: TEY = 3.25% / (1 - 0.12) = 3.25% / 0.88 = 3.69%.",
            "Compare again: 3.69% is well below the corporate's 4.75%, so the low-bracket investor should prefer the taxable bond.",
          ],
          conclusion:
            "For the 35% investor the muni's 5.0% TEY beats the 4.75% taxable bond; for the 12% investor the muni's TEY is only 3.69%, so the taxable bond is better. The tax exemption is worth more the higher the investor's bracket.",
          markingNotes: [
            "Full credit requires the correct TEY at 35% (5.0%) and the correct bracket-dependent conclusion.",
            "Using (1 + tax rate) or multiplying instead of dividing is the classic error and loses the computation mark.",
          ],
        },
      },
      {
        id: "sie-full-m5-sn3",
        title: "REITs and DPPs: income delivery and liquidity",
        testPointIds: ["sie-full-m5-tp4", "sie-full-m5-tp5"],
        explanation: [
          "REITs give investors real-estate exposure without owning property directly. To qualify for favourable tax treatment (avoiding entity-level tax on distributed income), a REIT must distribute the large majority of its taxable income to shareholders, which is why REITs are known for high payouts. Those distributions are largely taxed to the investor as ordinary income rather than as qualified dividends. Exchange-traded REITs are liquid, but they still carry real-estate risk and interest-rate risk (rising rates can pressure values and make their yields less competitive).",
          "Direct participation programs (DPPs), such as limited partnerships, are structured to flow income, gains, losses, and deductions directly through to investors, so there is no tax at the entity level. The catch is liquidity: DPP interests are generally illiquid with limited transferability, and they can be complex. Together, illiquidity and complexity make suitability a central concern — a DPP is inappropriate for an investor who may need access to the capital or who cannot bear the business risk.",
        ],
        keyRules: [
          "REITs must distribute most income; distributions are mostly ordinary income.",
          "DPPs flow income/gains/losses through to investors (no entity-level tax).",
          "DPP illiquidity and complexity make suitability a key concern.",
        ],
      },
      {
        id: "sie-full-m5-sn4",
        title: "Keeping SIE product depth at the essentials line",
        testPointIds: ["sie-full-m5-tp1", "sie-full-m5-tp3"],
        explanation: [
          "The SIE deliberately tests these products at a foundational level, and knowing where the line sits saves time and prevents over-thinking. For options, the exam wants the definitions, the buyer/writer relationship, moneyness, and simple maximum-loss reasoning — it does not require multi-leg strategy payoffs, breakevens for spreads, or hedging math, which are Series 7 territory. For municipals, it wants the GO/revenue distinction and the taxable-equivalent yield, not detailed analysis of official statements or the finer points of the primary market.",
          "Applying this calibration, treat each product question as a distinction to be classified rather than a strategy to be optimised. Match the option to its right and its risk cap; match the muni to its backing and its tax math; match REITs and DPPs to their distribution and flow-through features. This keeps answers fast and correct and avoids importing complexity the SIE does not test.",
        ],
        keyRules: [
          "SIE options: definitions, rights/obligations, moneyness, max loss — not multi-leg strategies.",
          "SIE munis: GO vs revenue and TEY — not deep primary-market analysis.",
          "Classify the product distinction rather than optimise a strategy.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m5-p1",
        testPointIds: ["sie-full-m5-tp1", "sie-full-m5-tp2"],
        style: "Grid-reasoning MCQ",
        question:
          "An investor buys one call option with a $50 strike for a $3 premium when the stock is $48. State whether the call is in or out of the money at purchase, the investor's maximum loss, and what obligation (if any) the investor has.",
        answerPlan: [
          "Assess moneyness by comparing stock to strike.",
          "State the buyer's maximum loss.",
          "Clarify rights vs obligations for a buyer.",
        ],
        modelAnswer:
          "With the stock at $48 and a $50 strike, the call is out of the money (a call is in the money only when the stock is above the strike). As the buyer, the investor holds a right, not an obligation — the maximum loss is the $3 premium paid, which is lost if the option expires worthless. The buyer is never obligated to exercise; the obligation belongs to the call writer.",
        markingGuide: [
          "Identifies the call as out of the money at $48 vs $50.",
          "States maximum loss equals the $3 premium.",
          "Clarifies the buyer holds a right, not an obligation.",
        ],
      },
      {
        id: "sie-full-m5-p2",
        testPointIds: ["sie-full-m5-tp3"],
        style: "Computation MCQ",
        question:
          "A tax-exempt municipal bond yields 4%. Compute the taxable-equivalent yield for an investor in a 25% marginal bracket, and explain why the same muni is less compelling for an investor in a low bracket.",
        answerPlan: [
          "Apply the TEY formula.",
          "Interpret the result.",
          "Explain the bracket sensitivity.",
        ],
        modelAnswer:
          "TEY = 4% / (1 - 0.25) = 4% / 0.75 = 5.33%. So a taxable bond would need to yield about 5.33% to match this muni for a 25%-bracket investor. For a low-bracket investor, the denominator (1 - tax rate) is larger, so the TEY is lower and closer to the stated 4% — the tax exemption is worth less, and a higher-yielding taxable bond may deliver more after-tax income.",
        markingGuide: [
          "Computes TEY of about 5.33%.",
          "Explains the muni needs a lower stated yield to compete for high-bracket investors.",
          "States the exemption is worth less at lower brackets.",
        ],
      },
      {
        id: "sie-full-m5-p3",
        testPointIds: ["sie-full-m5-tp4", "sie-full-m5-tp5"],
        style: "Product-distinction MCQ",
        question:
          "Contrast a publicly traded REIT with a non-traded direct participation program in terms of how income reaches investors, tax treatment, and liquidity, and state which raises the greater suitability concern.",
        answerPlan: [
          "Describe REIT distribution and taxation.",
          "Describe DPP flow-through and liquidity.",
          "Compare suitability.",
        ],
        modelAnswer:
          "A publicly traded REIT distributes most of its taxable income to shareholders (largely taxed as ordinary income) and is liquid because it trades on an exchange. A DPP passes income, gains, and losses through to investors without entity-level tax, but interests are typically illiquid with limited transferability. The DPP raises the greater suitability concern because its illiquidity and complexity make it inappropriate for investors who may need access to their capital or cannot bear the business risk.",
        markingGuide: [
          "States REITs distribute most income, taxed as ordinary income, and are liquid when traded.",
          "States DPPs flow income/gains/losses through and are illiquid.",
          "Identifies the DPP as the greater suitability concern.",
        ],
      },
    ],
  }),

  "sie-full-m6": examDepth({
    testPoints: [
      {
        id: "sie-full-m6-tp1",
        title: "Order types: market, limit, stop, stop-limit",
        priority: "critical",
        examinerFocus:
          "Selecting the right order for the goal and knowing execution behaviour: market orders prioritise speed, limit orders prioritise price, stop orders trigger a market order at the stop price, and stop-limits add a limit after triggering.",
        typicalQuestionForms: [
          "Which order guarantees execution but not price?",
          "What happens when a sell-stop's stop price is reached?",
          "Which order combines a trigger price with a limit price?",
        ],
        mustKnow: [
          "Market order: immediate execution at the best available price; price not guaranteed.",
          "Limit order: sets a max buy or min sell price; price guaranteed, execution not.",
          "Stop order: dormant until the stop price triggers a market order; stop-limit adds a limit price.",
        ],
        scoringActions: [
          "Choose by whether speed or price control matters.",
          "Remember a triggered stop becomes a market order (no price guarantee).",
        ],
      },
      {
        id: "sie-full-m6-tp2",
        title: "Bid, ask, and the spread",
        priority: "high",
        examinerFocus:
          "That investors buy at the ask and sell at the bid, the spread equals ask minus bid, and a narrow spread signals liquidity.",
        typicalQuestionForms: [
          "At which price does a retail investor typically buy?",
          "What does a wide bid-ask spread indicate?",
        ],
        mustKnow: [
          "Bid = highest price buyers will pay; ask = lowest price sellers will accept.",
          "Investors buy at the ask, sell at the bid; spread = ask - bid.",
          "Narrow spreads indicate liquid, actively traded securities.",
        ],
        scoringActions: [
          "State 'buy at ask, sell at bid' before answering quote questions.",
          "Read a wide spread as lower liquidity/higher cost.",
        ],
      },
      {
        id: "sie-full-m6-tp3",
        title: "Execution, market makers, and best execution",
        priority: "medium",
        examinerFocus:
          "The market maker's liquidity role, the best-execution obligation to seek favourable terms for customers, and the meaning of price improvement.",
        typicalQuestionForms: [
          "What is a market maker's primary function?",
          "What does the duty of best execution require?",
        ],
        mustKnow: [
          "Market makers quote two-sided prices and provide liquidity.",
          "Best execution requires seeking the most favourable reasonably available terms for the customer.",
          "Price improvement occurs when a trade executes better than the quoted price.",
        ],
        scoringActions: [
          "Tie liquidity provision to market makers and favourable terms to best execution.",
          "Recognise price improvement as beating the quote.",
        ],
      },
      {
        id: "sie-full-m6-tp4",
        title: "Clearance, settlement, and the T+1 cycle",
        priority: "critical",
        examinerFocus:
          "The difference between clearing (matching trades) and settlement (exchanging cash for securities), and the current U.S. standard settlement cycle of T+1.",
        typicalQuestionForms: [
          "What is the current standard U.S. settlement cycle for most securities?",
          "What is the difference between clearing and settlement?",
        ],
        mustKnow: [
          "Clearing matches and confirms trades; settlement exchanges cash for securities.",
          "The U.S. regular-way settlement cycle is T+1 (one business day after trade date).",
          "Clearing corporations and depositories reduce counterparty risk.",
        ],
        scoringActions: [
          "Separate clearing (match) from settlement (exchange of cash/securities).",
          "State T+1 as the current regular-way cycle.",
        ],
      },
      {
        id: "sie-full-m6-tp5",
        title: "Order qualifiers and regular-way settlement",
        priority: "medium",
        examinerFocus:
          "Time and handling qualifiers (day vs GTC) and the meaning of regular-way settlement, plus the consequence of a failure to settle.",
        typicalQuestionForms: [
          "How does a GTC order differ from a day order?",
          "What is regular-way settlement?",
        ],
        mustKnow: [
          "Day orders expire at the end of the trading day; GTC (good-'til-cancelled) persist until filled or cancelled.",
          "Regular-way settlement follows the standard cycle (currently T+1).",
          "Failure to settle can trigger buy-ins or penalties.",
        ],
        scoringActions: [
          "Match the qualifier (day vs GTC) to its lifespan.",
          "Equate regular way with the standard T+1 cycle.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Trading and settlement is a smaller (~11%) but very learnable slice; the order-type logic and the T+1 fact are high-confidence points.",
      timeBudget:
        "45–75 seconds per item; these are mechanics questions with no computation.",
      answerSequence: [
        "For orders, decide whether speed or price control is the goal.",
        "For quotes, state buy-at-ask/sell-at-bid before evaluating.",
        "For settlement, separate clearing from settlement and recall T+1.",
        "Reject any option implying a stop guarantees the stop price.",
      ],
      qualityChecks: [
        "Did you treat a triggered stop as a market order with no price guarantee?",
        "Did you use the current T+1 cycle (not an older T+2/T+3)?",
        "Is 'buy at ask, sell at bid' applied correctly?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m6-sn1",
        title: "Choosing an order type, with a stop-order worked case",
        testPointIds: ["sie-full-m6-tp1", "sie-full-m6-tp2"],
        explanation: [
          "Order selection is a trade-off between speed and control. A market order executes immediately at the best available price but guarantees no specific price — useful when getting filled matters more than the exact level. A limit order guarantees the price (or better) but not execution — a buy limit fills only at or below the limit, a sell limit only at or above it. A stop order sits dormant until the market reaches the stop price, at which point it becomes a market order; a stop-limit order becomes a limit order instead, adding price protection at the cost of possibly not filling.",
          "The pricing context matters because investors transact against the quote: they buy at the ask (the lowest offer) and sell at the bid (the highest bid), so the spread (ask minus bid) is a real cost that is smaller for liquid securities. A crucial and heavily tested nuance is that a triggered stop offers no price guarantee — in a fast-moving market it can execute well past the stop price, which is exactly what a stop-limit is designed to prevent (while risking non-execution).",
        ],
        keyRules: [
          "Market = speed (no price guarantee); limit = price (no execution guarantee).",
          "A triggered stop becomes a market order; a triggered stop-limit becomes a limit order.",
          "Buy at ask, sell at bid; spread = ask - bid.",
        ],
        workedProblem: {
          scenario:
            "A customer owns stock trading at $50 and places a sell-stop at $48 to limit downside. Bad news hits and the stock gaps down, with the next available bid at $45. Trace what happens to the order, and contrast it with what would happen under a sell stop-limit at $48 (limit $47).",
          steps: [
            "Establish the resting order: at $50 the sell-stop at $48 is dormant and does nothing.",
            "Trigger the stop: the stock falls and trades through $48, activating the stop.",
            "Convert to a market order: the plain sell-stop becomes a market order seeking immediate execution.",
            "Execute at the available price: with the next bid at $45, the market order fills at about $45 — below the $48 stop, because a stop guarantees no price.",
            "Contrast the stop-limit: after triggering at $48 it becomes a sell limit at $47, so it will not sell below $47; with the market at $45 it goes unfilled, leaving the customer still holding the stock.",
          ],
          conclusion:
            "The plain sell-stop fills near $45 (execution guaranteed, price not); the stop-limit protects price at $47 but goes unfilled in the gap-down (price protected, execution not). The choice trades certainty of execution against certainty of price.",
          markingNotes: [
            "Full credit requires stating the stop fills below $48 (near $45) and the stop-limit likely goes unfilled.",
            "Claiming the stop guarantees a $48 execution is the classic error and loses the mark.",
          ],
        },
      },
      {
        id: "sie-full-m6-sn2",
        title: "Execution quality and the market maker's role",
        testPointIds: ["sie-full-m6-tp3"],
        explanation: [
          "Once an order is placed, it routes to a venue or a market maker for execution. Market makers quote continuous two-sided prices and stand ready to buy at their bid and sell at their ask, supplying the liquidity that lets other participants trade when they want. Their compensation is embedded in the spread and, where applicable, order-routing arrangements.",
          "Firms owe customers a duty of best execution: they must seek the most favourable terms reasonably available under the circumstances, considering price, speed, and likelihood of execution. When an order fills at a price better than the prevailing quote — a lower price on a buy or a higher price on a sell — the customer has received price improvement. The exam tests these as definitions: liquidity provision belongs to market makers, favourable terms belong to best execution, and beating the quote is price improvement.",
        ],
        keyRules: [
          "Market makers provide liquidity via two-sided quotes.",
          "Best execution = seek the most favourable reasonably available terms.",
          "Price improvement = execution better than the quoted price.",
        ],
      },
      {
        id: "sie-full-m6-sn3",
        title: "From trade to settled: clearing, settlement, and T+1",
        testPointIds: ["sie-full-m6-tp4"],
        explanation: [
          "A completed trade is not finished until it clears and settles. Clearing is the matching and confirmation step: the buyer's and seller's trade details are compared and reconciled, typically through a clearing corporation that becomes the counterparty to each side and thereby reduces counterparty risk. Settlement is the actual exchange — cash moves to the seller and securities move to the buyer, with depositories facilitating the book-entry transfer.",
          "The U.S. standard (regular-way) settlement cycle is now T+1, meaning settlement occurs one business day after the trade date. The exam has been updated to this current standard, so reject older T+2 or T+3 answers. Understanding the sequence — trade, then clearing (match), then settlement (exchange) — lets you answer both 'what is the cycle?' and 'what is the difference between clearing and settlement?' questions confidently.",
        ],
        keyRules: [
          "Clearing = match/confirm; settlement = exchange cash for securities.",
          "Regular-way settlement is T+1 (one business day after trade date).",
          "Clearing corporations/depositories reduce counterparty risk.",
        ],
      },
      {
        id: "sie-full-m6-sn4",
        title: "Order qualifiers and settlement conventions",
        testPointIds: ["sie-full-m6-tp5"],
        explanation: [
          "Order qualifiers control an order's lifespan and handling. A day order expires at the end of the trading day if unfilled; a good-'til-cancelled (GTC) order remains working until it is filled or the customer cancels it (subject to firm limits). Other qualifiers can restrict timing, quantity, or price handling. Matching the qualifier to its lifespan answers the common day-vs-GTC question directly.",
          "Regular-way settlement refers to trades that settle on the standard cycle (currently T+1); it is the default unless a different settlement is specified. If a party fails to settle — for example, a seller does not deliver securities — the firm may execute a buy-in and penalties can apply. These conventions ensure the market's post-trade plumbing works predictably.",
        ],
        keyRules: [
          "Day order expires at day's end; GTC persists until filled or cancelled.",
          "Regular-way = standard cycle (T+1) settlement.",
          "Failure to settle can trigger buy-ins or penalties.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m6-p1",
        testPointIds: ["sie-full-m6-tp1"],
        style: "Order-selection MCQ",
        question:
          "A customer wants to sell a stock but only if it can be sold for at least $30, and is willing to wait or not sell at all. Which order type fits, and how does it differ from a market order?",
        answerPlan: [
          "Match the goal (price control) to an order type.",
          "Contrast with a market order.",
        ],
        modelAnswer:
          "A sell limit order at $30 fits: it will execute only at $30 or higher, guaranteeing the price (or better) but not guaranteeing execution — if the stock never reaches $30, the order goes unfilled, which the customer has accepted. A market order is the opposite: it would sell immediately at the best available price, guaranteeing execution but not the price, so it could fill below $30.",
        markingGuide: [
          "Selects a sell limit order at $30.",
          "States a limit guarantees price (or better) but not execution.",
          "Contrasts with the market order (execution guaranteed, price not).",
        ],
      },
      {
        id: "sie-full-m6-p2",
        testPointIds: ["sie-full-m6-tp1", "sie-full-m6-tp2"],
        style: "Execution-behaviour MCQ",
        question:
          "A buy-stop order is set at $52 on a stock trading at $50. The stock rallies sharply and gaps to $55. Explain what the order does and at roughly what price it is likely to execute.",
        answerPlan: [
          "Describe the stop while dormant.",
          "Describe triggering.",
          "Explain the execution price in a gap.",
        ],
        modelAnswer:
          "While the stock is at $50, the buy-stop at $52 is dormant. When the stock trades up through $52, the stop is triggered and becomes a market order to buy. Because a triggered stop becomes a market order with no price guarantee, in a sharp gap it will execute at the next available offer — around $55 here — which is above the $52 stop. A buy stop-limit would have capped the purchase price but risked going unfilled.",
        markingGuide: [
          "States the stop is dormant until $52 is reached.",
          "Explains it becomes a market order on triggering.",
          "Recognises execution near $55 (above the stop) in a gap.",
        ],
      },
      {
        id: "sie-full-m6-p3",
        testPointIds: ["sie-full-m6-tp4"],
        style: "Settlement MCQ",
        question:
          "An investor buys a stock on Monday (a normal business week, no holidays). State the regular-way settlement date and explain the difference between clearing and settlement.",
        answerPlan: [
          "Apply the T+1 cycle to the trade date.",
          "Define clearing.",
          "Define settlement.",
        ],
        modelAnswer:
          "Under the current T+1 regular-way cycle, a Monday trade settles on Tuesday (one business day later). Clearing is the step where the trade details are matched and confirmed, typically through a clearing corporation that reduces counterparty risk; settlement is the subsequent step where cash is exchanged for the securities so ownership actually transfers. Clearing matches the trade; settlement completes it.",
        markingGuide: [
          "States settlement on Tuesday (T+1).",
          "Defines clearing as matching/confirming trades.",
          "Defines settlement as the exchange of cash for securities.",
        ],
      },
    ],
  }),

  "sie-full-m7": examDepth({
    testPoints: [
      {
        id: "sie-full-m7-tp1",
        title: "Account opening: KYC and CIP requirements",
        priority: "critical",
        examinerFocus:
          "The specific data the Customer Identification Program requires and why KYC underpins suitability. Questions list required identifying information or ask the purpose of CIP (deter money laundering, verify identity).",
        typicalQuestionForms: [
          "Which information must the CIP collect to open an account?",
          "Why is KYC essential to making suitable recommendations?",
        ],
        mustKnow: [
          "CIP requires name, date of birth, physical address, and taxpayer identification number (e.g., SSN).",
          "CIP verifies identity to deter money laundering; KYC gathers the customer profile.",
          "Suitability depends on knowing the customer's objectives, risk tolerance, and financial situation.",
        ],
        scoringActions: [
          "Recall the four core CIP data points precisely.",
          "Link the customer profile (KYC) to suitability decisions.",
        ],
      },
      {
        id: "sie-full-m7-tp2",
        title: "Cash vs margin accounts",
        priority: "high",
        examinerFocus:
          "That cash accounts require full payment while margin accounts allow borrowing (leverage), requiring a signed agreement and introducing margin-call and leverage risk. SIE stays conceptual; it does not require margin computations.",
        typicalQuestionForms: [
          "How does a margin account differ from a cash account?",
          "What risk does buying on margin introduce?",
        ],
        mustKnow: [
          "Cash account: securities must be paid for in full.",
          "Margin account: allows borrowing against securities, amplifying gains and losses.",
          "Margin requires a signed margin agreement and can trigger margin calls.",
        ],
        scoringActions: [
          "Tie margin to leverage, a signed agreement, and margin-call risk.",
          "Keep answers conceptual — SIE does not require margin math.",
        ],
      },
      {
        id: "sie-full-m7-tp3",
        title: "Discretionary and fiduciary accounts",
        priority: "high",
        examinerFocus:
          "That discretionary authority requires prior written authorization and close supervision, and that fiduciary accounts act for a beneficiary under standards like the prudent-investor rule.",
        typicalQuestionForms: [
          "What authorization is required before a rep exercises discretion?",
          "Whose interest must a fiduciary account serve?",
        ],
        mustKnow: [
          "Discretionary accounts require prior written authorization; trades must still be suitable.",
          "Discretionary activity is closely supervised.",
          "Fiduciary accounts (trustee, custodian, executor) act for the beneficiary's benefit, often under prudent-investor standards.",
        ],
        scoringActions: [
          "Require written authorization before any discretionary trading.",
          "Center fiduciary answers on the beneficiary's interest.",
        ],
      },
      {
        id: "sie-full-m7-tp4",
        title: "Registration/ownership types and transfer on death",
        priority: "critical",
        examinerFocus:
          "How ownership form controls what happens to assets on death: JTWROS passes to survivors; tenancy in common leaves the deceased's share to their estate; custodial (UTMA/UGMA) accounts are for a minor; TOD passes assets outside probate.",
        typicalQuestionForms: [
          "How does JTWROS differ from tenancy in common when one owner dies?",
          "What does a transfer-on-death designation accomplish?",
        ],
        mustKnow: [
          "JTWROS: on death, assets pass to the surviving owner(s) automatically.",
          "Tenancy in common: the deceased owner's share passes to their estate.",
          "UTMA/UGMA are custodial accounts for a minor; TOD passes assets outside probate.",
        ],
        scoringActions: [
          "Map each ownership form to its death outcome before answering.",
          "Distinguish survivorship (JTWROS) from divisible estate share (TIC).",
        ],
      },
      {
        id: "sie-full-m7-tp5",
        title: "Privacy (Regulation S-P) and account events",
        priority: "medium",
        examinerFocus:
          "That Regulation S-P governs the privacy of customer financial information (notices and opt-out rights), and that account changes and an owner's death trigger specific procedures.",
        typicalQuestionForms: [
          "What does Regulation S-P protect?",
          "What must a firm do regarding privacy notices?",
        ],
        mustKnow: [
          "Regulation S-P protects the privacy of customers' nonpublic personal financial information.",
          "Customers must receive privacy notices and opt-out rights for certain information sharing.",
          "Account changes and the death of an owner require proper documentation and supervision.",
        ],
        scoringActions: [
          "Tie privacy notices and opt-out rights to Regulation S-P.",
          "Recognise that owner death triggers defined account-handling steps.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Customer-account rules are compliance-heavy and highly learnable; target near-full conversion on CIP data points and ownership/death outcomes.",
      timeBudget:
        "45–75 seconds per item; recall-based with no computation.",
      answerSequence: [
        "For opening, recall the CIP data and link KYC to suitability.",
        "For account types, distinguish cash/margin and discretionary/fiduciary requirements.",
        "For ownership, map the form to its death outcome.",
        "For privacy, apply Regulation S-P notices/opt-out.",
      ],
      qualityChecks: [
        "Did you list all four CIP data points?",
        "Did discretionary trading require prior written authorization?",
        "Did JTWROS pass to survivors and TIC to the estate?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m7-sn1",
        title: "Opening an account: identity, profile, and suitability",
        testPointIds: ["sie-full-m7-tp1"],
        explanation: [
          "Opening an account layers two obligations. The Customer Identification Program (CIP), rooted in anti-money-laundering law, requires the firm to collect and verify identifying information: the customer's name, date of birth, a physical (not P.O. box) address, and a taxpayer identification number such as an SSN. The purpose is to confirm the customer is who they claim to be and to deter money laundering and fraud.",
          "Know-Your-Customer (KYC) goes further, building the profile the firm needs to serve the customer: investment objectives, risk tolerance, time horizon, income, net worth, and experience. This profile is the foundation of suitability — a rep cannot judge whether a recommendation fits the customer without it. The exam tests CIP as a precise list of data points and KYC as the basis for suitable recommendations.",
        ],
        keyRules: [
          "CIP data: name, date of birth, physical address, taxpayer ID.",
          "CIP verifies identity and deters money laundering.",
          "KYC profile is the foundation of suitability.",
        ],
      },
      {
        id: "sie-full-m7-sn2",
        title: "Account types: payment, leverage, discretion, and fiduciaries",
        testPointIds: ["sie-full-m7-tp2", "sie-full-m7-tp3"],
        explanation: [
          "Accounts differ first by how purchases are paid. In a cash account, the customer must pay in full for securities. In a margin account, the customer can borrow from the firm against the securities, using leverage that amplifies both gains and losses; this requires a signed margin agreement and exposes the customer to interest costs and margin calls if collateral value falls. The SIE keeps margin conceptual — it tests the leverage/agreement/margin-call ideas rather than the calculations reserved for higher exams.",
          "Accounts also differ by who controls trading and for whom. A discretionary account lets the rep decide what and when to trade without contacting the customer first, but only after the customer grants prior written authorization, and every discretionary trade must still be suitable and is closely supervised. A fiduciary account (trustee, custodian, executor, guardian) is managed for the benefit of a beneficiary, frequently under a prudent-investor standard — the fiduciary's own interests must never take precedence.",
        ],
        keyRules: [
          "Cash = pay in full; margin = borrow (leverage) with a signed agreement.",
          "Discretion requires prior written authorization + supervision.",
          "Fiduciary accounts serve the beneficiary, often under prudent-investor rules.",
        ],
      },
      {
        id: "sie-full-m7-sn3",
        title: "Ownership forms and what happens on death, worked",
        testPointIds: ["sie-full-m7-tp4"],
        explanation: [
          "Registration determines who owns an account and, critically, where the assets go when an owner dies. An individual account has one owner. A joint account with right of survivorship (JTWROS) passes the entire account to the surviving owner(s) automatically on death, bypassing the deceased's estate. A joint account held as tenants in common (TIC) instead leaves each owner a divisible share, so a deceased owner's portion passes to their estate rather than to the co-owner.",
          "Other forms serve specific needs. Custodial accounts (UTMA/UGMA) are opened for a minor and managed by a custodian until the child reaches the age of majority, at which point the assets belong to the (now adult) child. A transfer-on-death (TOD) designation lets account assets pass directly to named beneficiaries outside probate. The exam most often tests the JTWROS-versus-TIC death outcome, so make that distinction automatic.",
        ],
        keyRules: [
          "JTWROS: passes to surviving owner(s) automatically.",
          "TIC: deceased owner's share passes to their estate.",
          "UTMA/UGMA for minors; TOD passes assets outside probate.",
        ],
        workedProblem: {
          scenario:
            "Two siblings hold a brokerage account worth $200,000. Consider two scenarios: (a) they hold it as JTWROS, and (b) they hold it as tenants in common with equal 50% shares. One sibling dies. Determine who receives the deceased's interest in each scenario.",
          steps: [
            "Identify the ownership form in scenario (a): JTWROS includes a right of survivorship.",
            "Apply the survivorship rule: on death, the entire $200,000 passes automatically to the surviving sibling, outside the deceased's estate.",
            "Identify the ownership form in scenario (b): tenancy in common has no survivorship; each owner has a distinct, divisible share.",
            "Apply the TIC rule: the deceased sibling's 50% share ($100,000) passes to their estate and is distributed per their will (or intestacy), not automatically to the co-owner.",
            "Contrast the results: same asset, opposite outcomes purely because of the registration chosen.",
          ],
          conclusion:
            "Under JTWROS the surviving sibling receives the full $200,000; under tenancy in common the surviving sibling keeps only their own $100,000 share while the deceased's $100,000 goes to their estate. Registration, not the asset, controls the death outcome.",
          markingNotes: [
            "Full credit requires the correct outcome in both scenarios.",
            "Confusing the JTWROS and TIC outcomes is the classic error and loses the mark.",
          ],
        },
      },
      {
        id: "sie-full-m7-sn4",
        title: "Privacy and handling account events",
        testPointIds: ["sie-full-m7-tp5"],
        explanation: [
          "Regulation S-P governs the privacy of customers' nonpublic personal financial information. Firms must provide privacy notices describing their information-sharing practices and, for certain sharing with nonaffiliated third parties, give customers the right to opt out. Safeguarding customer information is part of the firm's compliance obligations, and the exam tests S-P as the rule behind privacy notices and opt-out rights.",
          "Account events require defined procedures. Changes to an account (address, ownership, authorization) must be properly documented and supervised. The death of an account owner triggers specific handling — freezing or restricting activity as appropriate, obtaining documentation such as a death certificate, and transferring assets according to the registration (survivorship, estate, or beneficiary designation). Following these procedures protects both the firm and the customer's assets.",
        ],
        keyRules: [
          "Regulation S-P protects nonpublic personal financial information.",
          "Privacy notices and opt-out rights are required for certain sharing.",
          "Owner death triggers documentation and registration-based transfer procedures.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m7-p1",
        testPointIds: ["sie-full-m7-tp1"],
        style: "Compliance recall MCQ",
        question:
          "A new customer is opening an account. List the core identifying information the firm's Customer Identification Program must obtain, and explain how this connects to the firm's suitability duty.",
        answerPlan: [
          "List the CIP data points.",
          "State the purpose of CIP.",
          "Connect KYC to suitability.",
        ],
        modelAnswer:
          "The CIP must obtain the customer's name, date of birth, a physical address, and a taxpayer identification number (such as an SSN), and verify that identity to deter money laundering. Separately, KYC gathers the customer's objectives, risk tolerance, time horizon, and financial situation. That profile is what makes suitability possible: without knowing the customer, the firm cannot judge whether a recommendation is appropriate.",
        markingGuide: [
          "Lists all four CIP data points.",
          "States CIP verifies identity / deters money laundering.",
          "Connects the KYC profile to the suitability obligation.",
        ],
      },
      {
        id: "sie-full-m7-p2",
        testPointIds: ["sie-full-m7-tp3"],
        style: "Authorization MCQ",
        question:
          "A registered rep wants to buy and sell securities in a client's account without contacting the client before each trade. What must be in place first, and what ongoing obligations apply?",
        answerPlan: [
          "State the authorization required.",
          "Note suitability still applies.",
          "Note supervision.",
        ],
        modelAnswer:
          "The rep must obtain the client's prior written authorization to exercise discretion; without it, trading without the client's approval is unauthorized. Even with discretionary authority, every trade must still be suitable for the client, and discretionary activity is subject to close supervision by the firm. Discretion changes who initiates the trade, not the duty to act in the client's interest.",
        markingGuide: [
          "Requires prior written authorization for discretion.",
          "States trades must remain suitable.",
          "Notes discretionary activity is supervised.",
        ],
      },
      {
        id: "sie-full-m7-p3",
        testPointIds: ["sie-full-m7-tp4"],
        style: "Ownership-outcome MCQ",
        question:
          "A married couple holds a joint account as JTWROS. Separately, two business partners hold an account as tenants in common. In each case, one owner dies. Explain who receives the deceased owner's interest and why the outcomes differ.",
        answerPlan: [
          "Apply the JTWROS rule.",
          "Apply the TIC rule.",
          "Explain the reason for the difference.",
        ],
        modelAnswer:
          "In the JTWROS account, the deceased spouse's interest passes automatically to the surviving spouse, bypassing the estate, because JTWROS includes a right of survivorship. In the tenancy-in-common account, the deceased partner's share passes to their estate (and then to their heirs or per their will), because tenancy in common has no survivorship and each owner holds a divisible share. The outcomes differ solely because of the ownership form chosen at account opening.",
        markingGuide: [
          "States JTWROS passes to the surviving owner automatically.",
          "States TIC passes the deceased's share to the estate.",
          "Attributes the difference to the ownership registration.",
        ],
      },
    ],
  }),

  "sie-full-m8": examDepth({
    testPoints: [
      {
        id: "sie-full-m8-tp1",
        title: "Market manipulation forms",
        priority: "critical",
        examinerFocus:
          "Recognising specific manipulative schemes by description: pump-and-dump, wash trades/matched orders, marking the close, painting the tape, spoofing, and front-running — all of which create a false market.",
        typicalQuestionForms: [
          "A trader spreads false hype to inflate a price, then sells. What is this called?",
          "Wash trades are prohibited because they do what?",
        ],
        mustKnow: [
          "Pump-and-dump inflates price with false hype, then sells into the demand.",
          "Wash trades/matched orders create fake volume without real change in ownership.",
          "Marking the close and painting the tape distort prices/appearance of activity; front-running trades ahead of a known order.",
        ],
        scoringActions: [
          "Ask whether the act creates a false market or price; if so, it is manipulation.",
          "Match the scheme name to the described behaviour.",
        ],
      },
      {
        id: "sie-full-m8-tp2",
        title: "Insider trading and material non-public information",
        priority: "critical",
        examinerFocus:
          "The MNPI test (material + non-public + traded or tipped) and that both tippers and tippees can be liable. Materiality means a reasonable investor would consider it important.",
        typicalQuestionForms: [
          "What makes information 'material' for insider-trading purposes?",
          "Can a tippee who trades on a tip be liable?",
        ],
        mustKnow: [
          "Insider trading = trading (or tipping) on material, non-public information.",
          "Information is material if a reasonable investor would consider it important to a decision.",
          "Both the tipper and the tippee can be held liable; firms use information barriers to prevent misuse.",
        ],
        scoringActions: [
          "Run the three-part test: material, non-public, traded/tipped.",
          "Hold both tipper and tippee potentially liable.",
        ],
      },
      {
        id: "sie-full-m8-tp3",
        title: "Fraud, misrepresentation, and selective disclosure",
        priority: "high",
        examinerFocus:
          "That fraud includes false statements and material omissions, that guaranteeing a customer against loss is a prohibited misrepresentation, and that selectively disclosing material information is prohibited.",
        typicalQuestionForms: [
          "Why is guaranteeing a client against loss prohibited?",
          "Is an omission of a material fact a form of fraud?",
        ],
        mustKnow: [
          "Fraud involves deception for gain, including false statements and material omissions.",
          "Guaranteeing a customer against loss is a prohibited misrepresentation.",
          "Selective disclosure of material information is prohibited.",
        ],
        scoringActions: [
          "Treat material omissions as fraud, not just outright lies.",
          "Flag any 'guarantee against loss' language as prohibited.",
        ],
      },
      {
        id: "sie-full-m8-tp4",
        title: "Prohibited sales practices (churning, unauthorized trading, unsuitability)",
        priority: "high",
        examinerFocus:
          "Distinguishing churning (excessive trading for commissions) from unauthorized trading (no customer consent or written discretion) and unsuitable recommendations; also that borrowing from/lending to customers is generally prohibited.",
        typicalQuestionForms: [
          "Excessive trading to generate commissions is called what?",
          "When is a trade 'unauthorized'?",
        ],
        mustKnow: [
          "Churning = excessive trading in an account to generate commissions.",
          "Unauthorized trading = trades without customer consent or written discretionary authority.",
          "Unsuitable recommendations violate suitability; borrowing from/lending to customers is generally prohibited.",
        ],
        scoringActions: [
          "Separate churning (too much trading) from unauthorized (no consent).",
          "Flag customer borrowing/lending arrangements as generally prohibited.",
        ],
      },
      {
        id: "sie-full-m8-tp5",
        title: "Anti-money-laundering: SARs, CTRs, and structuring",
        priority: "high",
        examinerFocus:
          "The AML framework under the Bank Secrecy Act: monitoring for suspicious activity, filing SARs for suspicious activity and CTRs for large cash transactions, and that structuring to evade reporting is prohibited.",
        typicalQuestionForms: [
          "What is the purpose of a Suspicious Activity Report?",
          "What is 'structuring,' and why is it illegal?",
        ],
        mustKnow: [
          "The Bank Secrecy Act and AML rules require monitoring and reporting of suspicious activity.",
          "SARs report suspicious activity; CTRs report large cash transactions above a threshold.",
          "Structuring transactions to avoid reporting thresholds is prohibited.",
        ],
        scoringActions: [
          "Match SAR to suspicious activity and CTR to large cash transactions.",
          "Flag deliberate splitting to dodge thresholds as illegal structuring.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Prohibited activities are heavily weighted and rule-driven; aim to convert nearly all by classifying the violation type precisely before selecting.",
      timeBudget:
        "45–75 seconds per item; scenario-recognition questions with no computation.",
      answerSequence: [
        "Classify the violation category (manipulation, insider trading, fraud, sales abuse, AML).",
        "For MNPI, apply the material + non-public + traded/tipped test.",
        "For sales abuses, distinguish churning from unauthorized from unsuitable.",
        "For AML, match SAR/CTR and flag structuring.",
      ],
      qualityChecks: [
        "Did you treat both tipper and tippee as potentially liable?",
        "Did you count material omissions as fraud?",
        "Did you separate churning (excess) from unauthorized (no consent)?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m8-sn1",
        title: "Manipulation: acts that create a false market",
        testPointIds: ["sie-full-m8-tp1"],
        explanation: [
          "Market manipulation is any conduct designed to create a false or misleading appearance of price or trading activity, distorting the honest interaction of supply and demand. The exam expects you to recognise the named schemes from a description. Pump-and-dump uses false or exaggerated hype to inflate a security's price, after which the promoters sell their holdings into the demand they created. Wash trades and matched orders involve buying and selling with no genuine change in beneficial ownership, manufacturing fake volume to lure others in.",
          "Other schemes distort specific reference points. Marking the close involves trading near the end of the session to push the closing price to a desired level; painting the tape creates the illusion of active trading; spoofing places orders with no intent to execute in order to move prices; and front-running means trading ahead of a known large customer order to profit from its expected price impact. A reliable test is to ask whether the act creates a false market or price — if it does, it is manipulation.",
        ],
        keyRules: [
          "Manipulation creates a false appearance of price or activity.",
          "Pump-and-dump, wash trades, matched orders, marking the close, painting the tape, spoofing, front-running are all prohibited.",
          "Test: does the act create a false market or price?",
        ],
      },
      {
        id: "sie-full-m8-sn2",
        title: "Insider trading and the MNPI test, worked",
        testPointIds: ["sie-full-m8-tp2"],
        explanation: [
          "Insider trading is trading a security, or tipping someone else who trades, on the basis of material non-public information (MNPI). Two elements must both be present. Information is material if a reasonable investor would consider it important to an investment decision — an unannounced merger, a major earnings surprise, or the loss of a key contract typically qualifies. Information is non-public until it has been broadly disseminated to the market; a private tip or an internal document is non-public even if a few people know it.",
          "Liability is broad. The insider who trades is liable, but so is a tipper who passes the information for a benefit and a tippee who trades knowing (or having reason to know) the information was improperly disclosed. Firms erect information barriers to keep MNPI from flowing between departments. The exam tests this as a checklist: is the information material, is it non-public, and did the person trade or tip on it?",
        ],
        keyRules: [
          "MNPI test: material + non-public + traded/tipped.",
          "Materiality = a reasonable investor would consider it important.",
          "Tippers and tippees can both be liable; firms use information barriers.",
        ],
        workedProblem: {
          scenario:
            "An analyst at a firm learns from a friend at a target company that a not-yet-announced acquisition will be revealed next week at a large premium. The analyst buys call options and also tells a colleague, who buys the stock. Apply the MNPI test to each person and determine potential liability.",
          steps: [
            "Test materiality: an unannounced acquisition at a premium would clearly affect a reasonable investor's decision, so the information is material.",
            "Test non-public status: the deal has not been announced, so the information is non-public.",
            "Assess the analyst who traded: the analyst traded (bought calls) on material non-public information, meeting all elements of insider trading.",
            "Assess the analyst as tipper: by passing the information to a colleague who traded, the analyst is also a tipper and potentially liable.",
            "Assess the colleague as tippee: the colleague traded knowing the source was a non-public tip, so the colleague is a tippee and can also be liable.",
          ],
          conclusion:
            "The information is material and non-public, so the analyst is liable as both a trader and a tipper, and the colleague is liable as a tippee. Insider-trading liability reaches everyone in the chain who trades on or improperly passes MNPI.",
          markingNotes: [
            "Full credit requires confirming both materiality and non-public status and holding all who traded/tipped liable.",
            "Excusing the tippee 'because they are not an insider' is the classic error and loses the mark.",
          ],
        },
      },
      {
        id: "sie-full-m8-sn3",
        title: "Fraud and prohibited sales practices",
        testPointIds: ["sie-full-m8-tp3", "sie-full-m8-tp4"],
        explanation: [
          "Fraud is deception for gain, and the exam stresses that it includes not only affirmative false statements but also material omissions — leaving out a fact a customer needs to make an informed decision is just as fraudulent as lying. Two specific prohibitions recur: guaranteeing a customer against loss (no one may promise that an investment cannot lose money) and selective disclosure of material information to some customers but not others. Misrepresenting fees, risks, or a security's characteristics all fall under this umbrella.",
          "Sales-practice abuses are distinct violations that are easy to confuse. Churning is excessive trading in an account driven by the rep's desire for commissions rather than the customer's interest. Unauthorized trading is executing a trade without the customer's consent (or written discretionary authority) — the problem is the lack of authority, regardless of how the trade performs. Unsuitable recommendations violate the duty to recommend only what fits the customer's profile. Separately, borrowing from or lending to customers is generally prohibited because of the conflict it creates.",
        ],
        keyRules: [
          "Fraud includes material omissions, not just false statements.",
          "Guaranteeing against loss and selective disclosure are prohibited.",
          "Churning (excess) vs unauthorized (no consent) vs unsuitable (wrong fit) are distinct abuses.",
        ],
      },
      {
        id: "sie-full-m8-sn4",
        title: "Anti-money-laundering mechanics",
        testPointIds: ["sie-full-m8-tp5"],
        explanation: [
          "Under the Bank Secrecy Act and related AML rules, firms must maintain programs to detect and report activity that may involve money laundering. The core reporting tools are the Suspicious Activity Report (SAR), filed when a transaction appears suspicious (for example, activity with no apparent lawful purpose or that is inconsistent with the customer's known profile), and the Currency Transaction Report (CTR), filed for cash transactions above a set dollar threshold.",
          "A key prohibited behaviour is structuring — deliberately breaking a large cash transaction into smaller amounts to stay under the CTR reporting threshold and avoid detection. Structuring is illegal precisely because it is designed to defeat the reporting system. The exam tests you on matching SAR to suspicious activity, CTR to large cash transactions, and recognising structuring as a violation.",
        ],
        keyRules: [
          "AML programs monitor for and report suspicious activity (Bank Secrecy Act).",
          "SAR = suspicious activity; CTR = large cash transactions above the threshold.",
          "Structuring to evade reporting is prohibited.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m8-p1",
        testPointIds: ["sie-full-m8-tp1"],
        style: "Scheme-identification MCQ",
        question:
          "A group buys a thinly traded stock, floods social media with false claims of a coming buyout to drive the price up, and then sells their shares into the buying frenzy. Name the violation and explain why it is prohibited.",
        answerPlan: [
          "Name the scheme.",
          "Explain the false-market harm.",
        ],
        modelAnswer:
          "This is a pump-and-dump scheme, a form of market manipulation. It is prohibited because the false hype creates an artificial, misleading price that does not reflect genuine supply and demand; the promoters profit by selling into the demand they manufactured, while later buyers are harmed when the price collapses. Any act that creates a false market or price is manipulation.",
        markingGuide: [
          "Identifies pump-and-dump / market manipulation.",
          "Explains the false/artificial price created.",
          "Notes the harm to other investors.",
        ],
      },
      {
        id: "sie-full-m8-p2",
        testPointIds: ["sie-full-m8-tp2"],
        style: "Applied-rule MCQ",
        question:
          "An employee overhears executives discussing an unannounced earnings collapse and sells his shares before the news is public. He also warns his brother, who sells too. Analyze whether each committed a violation.",
        answerPlan: [
          "Apply the MNPI test to the employee.",
          "Assess the tipper role.",
          "Assess the tippee (brother).",
        ],
        modelAnswer:
          "The earnings collapse is material (a reasonable investor would care) and non-public (not yet announced), so the employee's sale is insider trading. By warning his brother, the employee is also a tipper. The brother, who sold knowing the tip was non-public inside information, is a tippee and can likewise be held liable. Both the tipper and the tippee face potential liability — being an outsider does not protect the brother.",
        markingGuide: [
          "Confirms materiality and non-public status.",
          "Identifies the employee as insider trader and tipper.",
          "Holds the brother liable as a tippee.",
        ],
      },
      {
        id: "sie-full-m8-p3",
        testPointIds: ["sie-full-m8-tp4", "sie-full-m8-tp5"],
        style: "Classification MCQ",
        question:
          "Distinguish churning from unauthorized trading, and explain what 'structuring' is in an AML context.",
        answerPlan: [
          "Define churning.",
          "Define unauthorized trading.",
          "Define structuring.",
        ],
        modelAnswer:
          "Churning is excessive trading in a customer's account primarily to generate commissions for the rep, regardless of whether the customer approved individual trades. Unauthorized trading is executing trades without the customer's consent or written discretionary authority — the defect is the absence of authority, not the volume. Structuring, in an AML context, is deliberately breaking a large cash transaction into smaller amounts to stay below the CTR reporting threshold and avoid detection; it is prohibited because it is designed to defeat the reporting rules.",
        markingGuide: [
          "Defines churning as excessive trading for commissions.",
          "Defines unauthorized trading as lacking consent/authority.",
          "Defines structuring as evading AML reporting thresholds.",
        ],
      },
    ],
  }),

  "sie-full-m9": examDepth({
    testPoints: [
      {
        id: "sie-full-m9-tp1",
        title: "The SEC's role and authority",
        priority: "high",
        examinerFocus:
          "That the SEC is the primary federal securities regulator that enforces the federal securities laws, oversees the SROs, and can bring enforcement actions.",
        typicalQuestionForms: [
          "What is the SEC's primary role in the securities industry?",
          "How does the SEC relate to the SROs?",
        ],
        mustKnow: [
          "The SEC is the primary federal securities regulator.",
          "It enforces federal securities laws and oversees the SROs.",
          "It can bring enforcement actions and impose sanctions.",
        ],
        scoringActions: [
          "Position the SEC at the top of the oversight hierarchy.",
          "Distinguish the SEC (government agency) from SROs (industry self-regulators under SEC oversight).",
        ],
      },
      {
        id: "sie-full-m9-tp2",
        title: "SROs: FINRA, MSRB, and exchanges",
        priority: "critical",
        examinerFocus:
          "Matching each SRO to its jurisdiction: FINRA regulates broker-dealers and their associated persons; the MSRB writes municipal-securities rules (enforced by others); exchanges enforce their own trading/listing rules — all under SEC oversight.",
        typicalQuestionForms: [
          "Which SRO regulates broker-dealers and their registered representatives?",
          "What is the MSRB's role, and who enforces its rules?",
        ],
        mustKnow: [
          "FINRA regulates broker-dealers and associated persons.",
          "The MSRB writes rules for municipal securities but does not enforce them itself.",
          "Exchanges enforce their own trading and listing rules; all SROs operate under SEC oversight.",
        ],
        scoringActions: [
          "Match each SRO to its precise jurisdiction.",
          "Note the MSRB writes rules but relies on others for enforcement.",
        ],
      },
      {
        id: "sie-full-m9-tp3",
        title: "Key securities laws (1933, 1934, 1940 Acts)",
        priority: "critical",
        examinerFocus:
          "The 'issue vs trade' shorthand: the 1933 Act governs new issues/registration/prospectus; the 1934 Act governs secondary trading and created the SEC; the 1940 Acts regulate investment companies and advisers.",
        typicalQuestionForms: [
          "Which act created the SEC?",
          "Which act governs the registration of new securities issues?",
          "Which 1940 Act regulates mutual funds?",
        ],
        mustKnow: [
          "Securities Act of 1933: new issues, registration, and the prospectus ('paper it').",
          "Securities Exchange Act of 1934: secondary trading and created the SEC ('trade it').",
          "Investment Company Act of 1940 regulates funds; Investment Advisers Act of 1940 regulates advisers.",
        ],
        scoringActions: [
          "Apply the 1933=issue, 1934=trade shorthand.",
          "Split the 1940 Acts: Investment Company (funds) vs Advisers (advisers).",
        ],
      },
      {
        id: "sie-full-m9-tp4",
        title: "SIPC coverage and its limits",
        priority: "high",
        examinerFocus:
          "That SIPC protects customers if a broker-dealer fails (returning securities and cash within limits) but does not protect against market losses or poor performance.",
        typicalQuestionForms: [
          "What does SIPC protect a customer against?",
          "Which of the following does SIPC NOT cover?",
        ],
        mustKnow: [
          "SIPC protects customers if a broker-dealer fails, within coverage limits.",
          "It covers securities and cash held at the failed firm, not investment losses.",
          "SIPC does not protect against poor market performance.",
        ],
        scoringActions: [
          "Tie SIPC to firm failure, not market losses.",
          "Reject any option claiming SIPC guarantees against investment losses.",
        ],
      },
      {
        id: "sie-full-m9-tp5",
        title: "BD/associated-person registration and enforcement",
        priority: "medium",
        examinerFocus:
          "That broker-dealers and associated persons must register and qualify (Form U4 for individuals), disclosures must be accurate, and disciplinary processes can impose fines, suspensions, or bars.",
        typicalQuestionForms: [
          "Which form registers an associated person?",
          "What sanctions can result from a disciplinary action?",
        ],
        mustKnow: [
          "Broker-dealers and associated persons must register and pass qualifying exams.",
          "Form U4 registers individuals; disclosures must be accurate and kept current.",
          "Disciplinary processes can impose fines, suspensions, or bars from the industry.",
        ],
        scoringActions: [
          "Tie Form U4 to individual registration.",
          "Recall the escalation of sanctions (fine, suspension, bar).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "The regulatory framework (~9%) is definitional; the SRO-jurisdiction matching and the 1933/1934 distinction are near-guaranteed points with the right shorthand.",
      timeBudget:
        "45–75 seconds per item; pure recall, no computation.",
      answerSequence: [
        "Place the actor in the hierarchy (SEC over SROs over firms).",
        "Match each SRO to its jurisdiction.",
        "Apply the 1933=issue / 1934=trade / 1940=funds+advisers shorthand.",
        "Confine SIPC to firm failure, not market losses.",
      ],
      qualityChecks: [
        "Did you keep the MSRB as a rule-writer, not a self-enforcer?",
        "Did you assign the SEC's creation to the 1934 Act?",
        "Did you exclude market losses from SIPC coverage?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m9-sn1",
        title: "The oversight hierarchy: SEC and the SROs",
        testPointIds: ["sie-full-m9-tp1", "sie-full-m9-tp2"],
        explanation: [
          "The regulatory system is layered. At the top sits the SEC, a federal government agency that is the primary securities regulator: it enforces the federal securities laws, requires registration and disclosure for public offerings, oversees the self-regulatory organizations, and brings enforcement actions with the power to impose sanctions. Beneath the SEC are the SROs — industry bodies that write and enforce detailed rules under SEC supervision.",
          "The SROs divide by jurisdiction. FINRA regulates broker-dealers and their associated persons, running registration, examinations, and much day-to-day enforcement. The MSRB writes the rules for municipal securities, but — a favourite exam point — it does not enforce its own rules; enforcement falls to FINRA, bank regulators, and the SEC. The exchanges enforce their own trading and listing rules. Getting these jurisdictions straight, and remembering that all SROs answer to the SEC, resolves most framework questions.",
        ],
        keyRules: [
          "Hierarchy: SEC over SROs (FINRA, MSRB, exchanges) over firms.",
          "FINRA regulates broker-dealers and associated persons.",
          "The MSRB writes municipal rules but does not enforce them itself.",
        ],
      },
      {
        id: "sie-full-m9-sn2",
        title: "The key laws and the issue-vs-trade shorthand",
        testPointIds: ["sie-full-m9-tp3"],
        explanation: [
          "Four statutes anchor the SIE. The Securities Act of 1933 governs the issuance of new securities — registration, the prospectus, and disclosure to buyers in the primary market; the memory hook is 'paper it' (issue it). The Securities Exchange Act of 1934 governs the secondary market — ongoing trading, market regulation, and, importantly, it created the SEC itself; the hook is 'trade it.' Keeping these two straight resolves the most common framework question.",
          "The two 1940 Acts complete the set. The Investment Company Act of 1940 regulates investment companies — mutual funds, closed-end funds, and UITs — setting rules for their structure and operation. The Investment Advisers Act of 1940 regulates investment advisers, the people and firms paid to give investment advice. A clean split — Investment Company Act for funds, Advisers Act for advisers — prevents the common mix-up.",
        ],
        keyRules: [
          "1933 Act = issue new securities (registration/prospectus).",
          "1934 Act = secondary trading and created the SEC.",
          "1940 Acts: Investment Company (funds) and Advisers (advisers).",
        ],
        workedProblem: {
          scenario:
            "For each item, name the governing statute or regulator: (1) a company files a registration statement and prospectus for its IPO; (2) the agency that oversees the secondary market and was created to enforce securities law; (3) the law setting operating rules for a mutual fund; (4) the SRO that regulates a registered representative at a broker-dealer.",
          steps: [
            "Item 1 concerns issuing new securities with a prospectus, so apply the Securities Act of 1933.",
            "Item 2 concerns the secondary market and the creation of the enforcing agency, so identify the Securities Exchange Act of 1934, which created the SEC.",
            "Item 3 concerns the operation of a fund (an investment company), so apply the Investment Company Act of 1940.",
            "Item 4 concerns a registered representative at a broker-dealer, so identify FINRA as the regulating SRO.",
            "Cross-check with the shorthand: issue (1933), trade + SEC (1934), funds (1940 Investment Company), BDs/reps (FINRA).",
          ],
          conclusion:
            "The answers are: (1) Securities Act of 1933; (2) the SEC, created by the Securities Exchange Act of 1934; (3) the Investment Company Act of 1940; (4) FINRA. The issue-vs-trade shorthand plus the funds/advisers split makes these automatic.",
          markingNotes: [
            "Full credit requires all four correct, especially attributing the SEC's creation to the 1934 Act.",
            "Assigning the SEC's creation to the 1933 Act is the classic error and loses that item.",
          ],
        },
      },
      {
        id: "sie-full-m9-sn3",
        title: "SIPC: what it does and does not cover",
        testPointIds: ["sie-full-m9-tp4"],
        explanation: [
          "SIPC (the Securities Investor Protection Corporation) exists to protect customers when a broker-dealer fails financially. If a member firm becomes insolvent, SIPC helps return customers' securities and cash held at the firm, up to statutory coverage limits. Its role is to guard against the loss of assets due to the firm's failure — a custody and solvency protection, not an investment guarantee.",
          "The heavily tested limitation is that SIPC does not cover market losses or poor investment performance. If a customer's stock simply falls in value, SIPC provides no protection; it only steps in when the firm holding the assets fails. Any answer implying SIPC insures against losing money on investments is wrong. SIPC complements, but does not replace, prudent investing.",
        ],
        keyRules: [
          "SIPC protects customer securities and cash if the broker-dealer fails, within limits.",
          "SIPC does not cover market losses or poor performance.",
          "It is a solvency/custody protection, not an investment guarantee.",
        ],
      },
      {
        id: "sie-full-m9-sn4",
        title: "Registration and enforcement",
        testPointIds: ["sie-full-m9-tp5"],
        explanation: [
          "Broker-dealers must register, and the individuals who work for them as associated persons must register and pass the appropriate qualifying exams. Individuals register through Form U4, which requires accurate disclosure of employment, disciplinary, financial, and criminal history; these disclosures must be kept current through amendments as circumstances change. Accurate registration information supports supervision and lets regulators and customers assess a professional's background.",
          "When rules are broken, disciplinary processes follow. Depending on the severity, sanctions can include fines, suspensions, or a bar from the industry, and recordkeeping requirements ensure firms retain the documentation regulators need for examinations. The exam tests Form U4 as the individual registration vehicle and the escalating menu of sanctions available in enforcement.",
        ],
        keyRules: [
          "BDs and associated persons must register and qualify.",
          "Form U4 registers individuals; disclosures must be accurate and current.",
          "Sanctions escalate: fines, suspensions, bars.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m9-p1",
        testPointIds: ["sie-full-m9-tp2"],
        style: "Jurisdiction MCQ",
        question:
          "Identify which body regulates broker-dealers and their registered reps, and explain the MSRB's unusual position regarding enforcement of its own rules.",
        answerPlan: [
          "Name the SRO for broker-dealers.",
          "Describe the MSRB's rule-writing role.",
          "State who enforces MSRB rules.",
        ],
        modelAnswer:
          "FINRA regulates broker-dealers and their associated persons, including registered representatives. The MSRB occupies an unusual position: it writes the rules governing the municipal-securities market, but it does not enforce them itself. Enforcement of MSRB rules is carried out by other regulators such as FINRA, the bank regulators, and the SEC. All of these SROs operate under the oversight of the SEC.",
        markingGuide: [
          "Identifies FINRA as regulating broker-dealers/reps.",
          "States the MSRB writes municipal rules.",
          "Notes the MSRB does not enforce its own rules (others do).",
        ],
      },
      {
        id: "sie-full-m9-p2",
        testPointIds: ["sie-full-m9-tp3"],
        style: "Law-matching MCQ",
        question:
          "A firm is preparing the prospectus for an initial public offering. Separately, a colleague asks which law created the SEC and governs ongoing secondary-market trading. Name the governing act in each case.",
        answerPlan: [
          "Assign the IPO/prospectus law.",
          "Assign the SEC-creating law.",
        ],
        modelAnswer:
          "The prospectus and registration for an IPO are governed by the Securities Act of 1933, which regulates the issuance of new securities. The law that created the SEC and governs ongoing secondary-market trading is the Securities Exchange Act of 1934. The shorthand — 1933 to 'paper it' (issue) and 1934 to 'trade it' (and create the SEC) — keeps the two straight.",
        markingGuide: [
          "Assigns the IPO/prospectus to the 1933 Act.",
          "Assigns the SEC's creation and secondary trading to the 1934 Act.",
          "No confusion between the two acts.",
        ],
      },
      {
        id: "sie-full-m9-p3",
        testPointIds: ["sie-full-m9-tp4"],
        style: "Coverage MCQ",
        question:
          "A customer's brokerage firm goes bankrupt while holding her stocks and cash. Separately, another customer's portfolio has dropped 30% in a market downturn. Explain whether SIPC helps in each case.",
        answerPlan: [
          "Apply SIPC to the firm failure.",
          "Apply SIPC to the market loss.",
          "State the limiting principle.",
        ],
        modelAnswer:
          "SIPC helps the first customer: because the broker-dealer failed while holding her securities and cash, SIPC works to return those assets up to its coverage limits. SIPC does not help the second customer: a 30% decline is a market loss, and SIPC does not protect against poor investment performance or falling prices. SIPC protects against the firm's failure, not against losing money on investments.",
        markingGuide: [
          "States SIPC protects the customer of the failed firm (within limits).",
          "States SIPC does not cover the market loss.",
          "Articulates the firm-failure vs market-loss distinction.",
        ],
      },
    ],
  }),

  "sie-full-m10": examDepth({
    testPoints: [
      {
        id: "sie-full-m10-tp1",
        title: "Registration lifecycle: U4, U5, and statutory disqualification",
        priority: "high",
        examinerFocus:
          "The roles of Form U4 (registration) and Form U5 (termination), the requirement to keep disclosures accurate, and what statutory disqualification means.",
        typicalQuestionForms: [
          "What is the purpose of Form U5?",
          "What can cause statutory disqualification?",
        ],
        mustKnow: [
          "Form U4 registers an associated person; Form U5 reports termination and the reason.",
          "Disclosures on U4/U5 must be accurate and timely.",
          "Statutory disqualification (e.g., certain felonies, securities-law violations) can bar a person from the industry.",
        ],
        scoringActions: [
          "Match U4 to registration and U5 to termination.",
          "Tie disqualifying events to a bar from association.",
        ],
      },
      {
        id: "sie-full-m10-tp2",
        title: "Outside business activities vs selling away",
        priority: "critical",
        examinerFocus:
          "Distinguishing OBA (must be disclosed to the firm) from private securities transactions/'selling away' (require prior written notice, and firm approval if compensated). Undisclosed versions are violations.",
        typicalQuestionForms: [
          "What must a rep do before engaging in an outside business activity?",
          "A rep arranges a private investment for a client outside the firm without notice. What is this called?",
        ],
        mustKnow: [
          "Outside business activities must be disclosed to the firm.",
          "Private securities transactions ('selling away') require prior written notice and, if compensated, firm approval.",
          "Undisclosed OBA and selling away are violations that evade firm supervision.",
        ],
        scoringActions: [
          "Require disclosure for OBA and prior written notice for selling away.",
          "Flag any outside securities transaction without notice as selling away.",
        ],
      },
      {
        id: "sie-full-m10-tp3",
        title: "Gifts, gratuities, and political contributions",
        priority: "high",
        examinerFocus:
          "That business gifts are capped by an annual per-person limit to prevent undue influence, entertainment is treated differently, and political-contribution (pay-to-play) rules limit municipal business.",
        typicalQuestionForms: [
          "Why are business gifts subject to a dollar limit?",
          "What do political-contribution (pay-to-play) rules aim to prevent?",
        ],
        mustKnow: [
          "Business gifts are subject to an annual per-person dollar limit to prevent undue influence.",
          "Ordinary business entertainment is treated differently from gifts.",
          "Political-contribution rules limit pay-to-play in municipal securities business; records must be kept.",
        ],
        scoringActions: [
          "Tie the gift cap to preventing undue influence.",
          "Recognise pay-to-play rules as targeting municipal-business conflicts.",
        ],
      },
      {
        id: "sie-full-m10-tp4",
        title: "Continuing education: Regulatory and Firm Elements",
        priority: "medium",
        examinerFocus:
          "That CE has two components — the Regulatory Element (compliance/regulatory updates) and the Firm Element (firm-designed training) — and that failing CE can affect registration.",
        typicalQuestionForms: [
          "What are the two elements of continuing education?",
          "What happens if a registered person fails to complete CE?",
        ],
        mustKnow: [
          "The Regulatory Element covers compliance and regulatory updates.",
          "The Firm Element is firm-designed training on products and practices.",
          "Failure to complete CE can affect a person's registration status.",
        ],
        scoringActions: [
          "Name both CE elements and their focus.",
          "Link incomplete CE to a registration consequence.",
        ],
      },
      {
        id: "sie-full-m10-tp5",
        title: "Reporting obligations and consequences of violations",
        priority: "medium",
        examinerFocus:
          "That registered persons must promptly report certain events (customer complaints, specified legal matters) via U4 amendments, and that violations can lead to fines, suspension, or a bar.",
        typicalQuestionForms: [
          "When must U4 disclosures be updated?",
          "What are the possible consequences of conduct violations?",
        ],
        mustKnow: [
          "Certain events (customer complaints, specified legal/financial matters) must be reported promptly.",
          "U4 amendments keep disclosures current as circumstances change.",
          "Violations can result in fines, suspension, or a bar from the industry.",
        ],
        scoringActions: [
          "Tie reportable events to prompt U4 amendments.",
          "Recall the escalating sanctions for violations.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Employee-conduct rules are practical and testable; the OBA-versus-selling-away distinction and the two CE elements are high-confidence points.",
      timeBudget:
        "45–75 seconds per item; recall-based, no computation.",
      answerSequence: [
        "For registration, match U4/U5 roles and disqualification triggers.",
        "For outside activity, distinguish OBA (disclose) from selling away (prior written notice).",
        "For gifts/contributions, apply the cap and pay-to-play logic.",
        "For CE/reporting, name the two elements and the U4-amendment duty.",
      ],
      qualityChecks: [
        "Did you require prior written notice for selling away, not mere disclosure?",
        "Did you name both CE elements?",
        "Did you tie reportable events to prompt U4 updates?",
      ],
    },
    studyNotes: [
      {
        id: "sie-full-m10-sn1",
        title: "The registration lifecycle",
        testPointIds: ["sie-full-m10-tp1"],
        explanation: [
          "An associated person's career in the industry is bracketed by two forms. To begin, the person is registered through Form U4, which discloses employment history and any disciplinary, financial, or criminal matters, and the person must pass the required qualifying exams. When employment ends, the firm files Form U5, reporting the termination and its reason (voluntary, permitted to resign, discharged, and any related disclosures). Both forms must be accurate and timely, because they feed the public and regulatory record used to assess a professional.",
          "Some events cause statutory disqualification, which can bar a person from associating with a member firm. Triggers include certain felony convictions, specified securities-law violations, and other disqualifying conduct within defined periods. The exam tests U4 as the entry vehicle, U5 as the exit report, and statutory disqualification as the mechanism that keeps disqualified individuals out of the industry.",
        ],
        keyRules: [
          "U4 registers; U5 reports termination and reason.",
          "U4/U5 disclosures must be accurate and timely.",
          "Statutory disqualification can bar association with a firm.",
        ],
      },
      {
        id: "sie-full-m10-sn2",
        title: "OBA vs selling away, worked",
        testPointIds: ["sie-full-m10-tp2"],
        explanation: [
          "Two related rules govern activity outside the firm, and the exam loves to test the difference. Outside business activities (OBA) are any business a rep conducts outside the scope of their firm employment — a side consulting job, a rental business. The requirement is disclosure to the firm so it can assess conflicts; the firm may then restrict or supervise the activity. The key defect the exam punishes is undisclosed OBA.",
          "Private securities transactions — 'selling away' — are a stricter category: they involve securities transactions outside the firm's regular business. Before participating, the rep must provide prior written notice to the firm, and if the rep will be compensated, the firm must approve and typically must supervise the transaction as its own. Arranging an investment for a client outside the firm without this notice is selling away, a serious violation precisely because it evades the firm's supervision and the investor protections that come with it.",
        ],
        keyRules: [
          "OBA requires disclosure to the firm.",
          "Selling away requires prior written notice (+ approval if compensated).",
          "Undisclosed OBA and selling away are violations.",
        ],
        workedProblem: {
          scenario:
            "A registered rep does two things: (1) she starts a weekend catering company, and (2) she helps a client invest $75,000 in a private real-estate partnership that her firm does not offer, receiving a referral fee, without telling her firm. Classify each activity and state what she was required to do.",
          steps: [
            "Classify activity (1): a catering company is a business outside her firm employment that does not involve securities, so it is an outside business activity.",
            "State the requirement for (1): she must disclose the OBA to her firm so it can assess and supervise any conflicts.",
            "Classify activity (2): arranging a securities investment (a private partnership interest) outside her firm's regular business is a private securities transaction — selling away.",
            "State the requirement for (2): she needed to give prior written notice to the firm, and because she is compensated (a referral fee), obtain the firm's approval and supervision.",
            "Assess the violation: she gave no notice at all, so activity (2) is prohibited selling away; activity (1) is a violation only if she failed to disclose it.",
          ],
          conclusion:
            "The catering business is an OBA requiring disclosure; the compensated private-partnership placement is selling away requiring prior written notice and firm approval. By keeping the firm uninformed of the securities transaction, she committed prohibited selling away.",
          markingNotes: [
            "Full credit requires classifying each activity correctly and stating the specific requirement (disclosure vs prior written notice/approval).",
            "Treating the compensated securities transaction as a mere OBA (disclosure only) is the classic error and loses the mark.",
          ],
        },
      },
      {
        id: "sie-full-m10-sn3",
        title: "Gifts, entertainment, and pay-to-play",
        testPointIds: ["sie-full-m10-tp3"],
        explanation: [
          "To prevent conflicts and undue influence, business gifts given in connection with the recipient's business are capped at an annual per-person dollar limit, and firms must keep records of gifts. Ordinary and reasonable business entertainment — a meal or event the giver attends with the recipient — is treated differently from a gift, though it must still be reasonable and not designed to improperly influence. The principle the exam tests is that limits exist to keep business decisions free of improper inducements.",
          "Political-contribution rules address a specific conflict: pay-to-play in the municipal-securities business, where firms or their personnel might make political contributions to officials who can steer municipal underwriting business their way. These rules limit such contributions and can restrict a firm from engaging in municipal business for a period after a triggering contribution. The exam frames pay-to-play rules as preventing contributions from buying municipal business.",
        ],
        keyRules: [
          "Business gifts are capped per person per year; keep records.",
          "Business entertainment is treated differently from gifts.",
          "Pay-to-play rules limit political contributions tied to municipal business.",
        ],
      },
      {
        id: "sie-full-m10-sn4",
        title: "Continuing education and reporting",
        testPointIds: ["sie-full-m10-tp4", "sie-full-m10-tp5"],
        explanation: [
          "Continuing education keeps registered persons current and has two distinct components. The Regulatory Element delivers compliance and regulatory updates on a required schedule and is content set by the regulators. The Firm Element is training designed by the firm itself, covering its products, services, and practices as they relate to the persons' roles. Failing to complete required CE can affect a person's registration status, so both elements must be satisfied.",
          "Registered persons also carry ongoing reporting duties. Certain events — customer complaints, specified legal or financial matters, and other disclosable items — must be reported promptly, typically through amendments to the Form U4 so the record stays current. When conduct rules are violated, the consequences escalate from fines to suspension to a bar from the industry. Accurate, timely reporting underpins supervision and investor protection.",
        ],
        keyRules: [
          "CE = Regulatory Element (regulator-set) + Firm Element (firm-designed).",
          "Incomplete CE can affect registration status.",
          "Report certain events promptly via U4 amendments; violations bring fines, suspension, or bars.",
        ],
      },
    ],
    examPractice: [
      {
        id: "sie-full-m10-p1",
        testPointIds: ["sie-full-m10-tp2"],
        style: "Distinction MCQ",
        question:
          "A registered representative wants to (a) begin driving for a ride-share service on weekends, and (b) help a friend invest in a private startup offering that his firm does not sell, for which he will receive a fee. What must he do before each activity?",
        answerPlan: [
          "Classify each activity.",
          "State the OBA requirement.",
          "State the selling-away requirement.",
        ],
        modelAnswer:
          "Driving for a ride-share service is an outside business activity, so he must disclose it to his firm, which may then supervise or restrict it. Helping a friend invest in a private securities offering the firm does not sell is a private securities transaction ('selling away'). Because he will be compensated, he must provide prior written notice to the firm and obtain the firm's approval, and the firm will supervise the transaction. Doing the securities transaction with only informal mention, or none, would be prohibited selling away.",
        markingGuide: [
          "Classifies ride-share as an OBA requiring disclosure.",
          "Classifies the compensated private offering as selling away.",
          "Requires prior written notice and firm approval for the securities transaction.",
        ],
      },
      {
        id: "sie-full-m10-p2",
        testPointIds: ["sie-full-m10-tp3"],
        style: "Conduct MCQ",
        question:
          "Explain why business gifts to clients are capped at an annual per-person limit, and describe what political-contribution (pay-to-play) rules are designed to prevent.",
        answerPlan: [
          "Explain the gift cap rationale.",
          "Explain pay-to-play rules.",
        ],
        modelAnswer:
          "Business gifts are capped at an annual per-person dollar limit to prevent undue influence — to ensure that business decisions are made on the merits rather than because of inducements, and firms must keep records of such gifts. Political-contribution (pay-to-play) rules are designed to prevent firms and their personnel from making political contributions to officials in order to win or retain municipal-securities business; they limit such contributions and can bar a firm from municipal business for a period after a triggering contribution.",
        markingGuide: [
          "States the gift cap prevents undue influence.",
          "Explains pay-to-play rules target municipal-business conflicts.",
          "Mentions recordkeeping or the business-restriction consequence.",
        ],
      },
      {
        id: "sie-full-m10-p3",
        testPointIds: ["sie-full-m10-tp1", "sie-full-m10-tp4"],
        style: "Recall MCQ",
        question:
          "Name the two components of continuing education and their focus, and state which form reports an associated person's termination from a firm.",
        answerPlan: [
          "Name the Regulatory Element.",
          "Name the Firm Element.",
          "Identify the termination form.",
        ],
        modelAnswer:
          "Continuing education has two components: the Regulatory Element, which delivers regulator-set compliance and regulatory updates, and the Firm Element, which is training the firm designs on its products, services, and practices. An associated person's termination from a firm is reported on Form U5 (while Form U4 is the registration form). Failing to complete required CE can affect registration status.",
        markingGuide: [
          "Names the Regulatory Element and its focus.",
          "Names the Firm Element and its focus.",
          "Identifies Form U5 as the termination form.",
        ],
      },
    ],
  }),
};
