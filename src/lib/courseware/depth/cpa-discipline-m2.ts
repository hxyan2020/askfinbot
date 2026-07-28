import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA Discipline depth content, keyed by moduleId to merge onto
 * CPA_COURSEWARE. This file supplies depth for exactly ONE module.
 *
 * Discipline scope (CPA Evolution: BAR / ISC / TCP are three separate
 * four-hour AICPA Blueprint Discipline exams; a candidate sits only one):
 *  - cpa-discipline-m2 → BAR (Business Analysis and Reporting), the technical
 *    accounting core of BAR Area II ("Technical Accounting and Reporting").
 *    This is the advanced financial-reporting content that FAR introduces and
 *    BAR pushes to Application/Analysis rigor: business combinations and
 *    consolidations (ASC 805/810), derivatives and hedge accounting
 *    (ASC 815), advanced revenue (ASC 606) and leases (ASC 842), share-based
 *    payment (ASC 718), and complex/hybrid financial instruments together with
 *    their EPS impact (ASC 470-20 / ASC 260).
 *
 * Calibration notes:
 *  - BAR is not FAR. The same codification appears, but BAR fact patterns give
 *    a fuller vignette (a step acquisition with contingent consideration and
 *    NCI; a forecasted-purchase hedge across two periods; a contract
 *    modification with variable consideration) and ask you to MEASURE, journal,
 *    and analyse the reporting impact — not merely recite a rule. Notes flag
 *    where a concept is a FAR carry-over re-tested at Discipline depth.
 *  - Currency: content reflects ASU 2017-12 (targeted hedge-accounting
 *    improvements — the entire change in a qualifying cash-flow hedge goes to
 *    OCI, no bifurcated "ineffectiveness") and ASU 2020-06 (which removed the
 *    beneficial-conversion-feature and cash-conversion separation models so a
 *    conventional convertible is generally one liability, using the
 *    if-converted method for diluted EPS).
 *  - Keep the authority sets distinct: acquisition-method mechanics (805),
 *    consolidation/NCI (810), hedge documentation and designation (815),
 *    the five-step revenue model (606), lease classification/measurement (842),
 *    and grant-date-fair-value share-based payment (718). Do not cross-apply a
 *    hedge rule to a revenue question or a lessee rule to a lessor question.
 */
export const CPA_DISCIPLINE_M2_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // cpa-discipline-m2 — BAR: Technical accounting & reporting applications
  // ===================================================================
  "cpa-discipline-m2": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Business combinations: acquisition method, goodwill, NCI, step acquisitions & contingent consideration",
        priority: "critical",
        examinerFocus:
          "Whether you can execute the acquisition method end to end: measure consideration transferred, remeasure any previously held equity interest to fair value, recognize identifiable assets and liabilities at fair value, measure non-controlling interest (NCI), and solve for goodwill (or a bargain-purchase gain). BAR rarely asks 'what is goodwill'; it gives a step acquisition with contingent consideration and NCI and asks for the goodwill figure, the gain on the previously held interest, and the correct classification/subsequent-measurement of the earn-out.",
        typicalQuestionForms: [
          "TBS: compute goodwill given consideration, NCI at fair value, fair value of a previously held interest, and fair value of identifiable net assets.",
          "MCQ: determine the gain/loss on remeasuring a previously held equity interest in a step acquisition.",
          "MCQ/TBS: classify contingent consideration as a liability or equity and state its subsequent measurement (and the measurement-period rule for facts existing at the acquisition date).",
        ],
        mustKnow: [
          "Goodwill = (consideration transferred + fair value of any NCI + acquisition-date fair value of any previously held equity interest) − fair value of identifiable net assets acquired; a negative result is a bargain-purchase gain recognized in earnings after reassessing the measurement.",
          "US GAAP measures NCI at fair value (the 'full goodwill' method), so goodwill includes the NCI's share; acquisition-related costs (legal, advisory, finder's fees) are expensed as incurred, and debt/equity issue costs are NOT part of consideration.",
          "In a step acquisition, the previously held equity interest is remeasured to fair value at the acquisition date and the resulting gain or loss goes to earnings; that fair value then becomes part of the consideration used to compute goodwill.",
          "Contingent consideration classified as a liability is remeasured to fair value each period through earnings; classified as equity it is NOT remeasured; measurement-period adjustments (up to one year, for facts that existed at the acquisition date) adjust goodwill, whereas post-combination events adjust earnings.",
        ],
        scoringActions: [
          "Build the goodwill bridge explicitly (consideration + NCI at FV + prior interest at FV − FV of identifiable net assets) and label each component before solving.",
          "Remeasure the previously held interest to fair value FIRST and route the gain/loss to earnings, then feed that fair value into the goodwill calculation.",
          "Classify contingent consideration (liability vs equity) and state the correct subsequent measurement, and separate measurement-period (goodwill) adjustments from post-acquisition (earnings) changes.",
        ],
      },
      {
        id: "tp2",
        title: "Derivatives and hedge accounting: classification, fair-value vs cash-flow vs net-investment hedges",
        priority: "critical",
        examinerFocus:
          "Whether you can identify the hedge type from the exposure being hedged and then apply the matching accounting: where the derivative's change in fair value lands (earnings vs OCI) and when amounts in OCI are reclassified to earnings. The trap is routing a fair-value hedge through OCI or forgetting that, post ASU 2017-12, the entire change in a qualifying cash-flow hedge sits in OCI until the hedged item hits earnings.",
        typicalQuestionForms: [
          "MCQ: given the exposure (a fixed-rate liability, a forecasted purchase, a foreign subsidiary), identify the hedge type (fair value / cash flow / net investment).",
          "TBS: prepare the journal entries for a cash-flow hedge of a forecasted transaction across two reporting periods, including the OCI reclassification.",
          "MCQ: determine the amount recognized in earnings vs OCI for a fair-value hedge of a firm commitment or a recognized asset/liability.",
        ],
        mustKnow: [
          "All derivatives are recognized on the balance sheet at fair value; the accounting for the gain/loss depends on whether the instrument is designated (with contemporaneous documentation and expected high effectiveness) in a qualifying hedge, and speculative/undesignated derivatives run entirely through earnings.",
          "Fair-value hedge: the change in the derivative's fair value AND the change in the hedged item's fair value attributable to the hedged risk are both recognized in earnings; the hedged item's carrying amount is adjusted (a basis adjustment).",
          "Cash-flow hedge (hedge of variable cash flows / a forecasted transaction): the entire change in the fair value of the hedging instrument is recorded in OCI and later reclassified to earnings in the period(s) the hedged forecasted transaction affects earnings (ASU 2017-12 eliminated the separate mandatory measurement and immediate recognition of 'ineffectiveness').",
          "Net-investment hedge (of a foreign operation): the effective portion of the gain/loss goes to the cumulative-translation-adjustment section of OCI and is reclassified only on disposal of the foreign operation.",
        ],
        scoringActions: [
          "Name the hedge type from the exposure before choosing any accounting (fixed → fair-value risk; variable/forecasted → cash-flow risk; foreign net investment → CTA).",
          "Route amounts correctly: fair-value hedge → earnings (with a basis adjustment to the hedged item); cash-flow hedge → OCI then reclassify when the hedged item affects earnings.",
          "For cash-flow hedges, hold the full derivative change in OCI and release it to earnings in the same period the forecasted transaction is recognized in income.",
        ],
      },
      {
        id: "tp3",
        title: "Advanced revenue (ASC 606): contract modifications, variable consideration & allocation",
        priority: "high",
        examinerFocus:
          "Whether you can apply the five-step model to a messy contract: identify distinct performance obligations, estimate and constrain variable consideration, allocate the transaction price on a relative standalone-selling-price basis, and — critically — account for a modification correctly as a separate contract, a prospective termination-and-new-contract, or a cumulative catch-up.",
        typicalQuestionForms: [
          "TBS: determine how much revenue to recognize when a contract is modified mid-term to add goods/services or change price.",
          "MCQ: compute the transaction price when consideration is variable (rebates, bonuses, refunds), applying the constraint.",
          "MCQ/TBS: allocate a bundled price to performance obligations using relative standalone selling prices and identify the pattern of recognition (point in time vs over time).",
        ],
        mustKnow: [
          "The five steps: (1) identify the contract, (2) identify distinct performance obligations, (3) determine the transaction price, (4) allocate it to the obligations on a relative standalone-selling-price basis, (5) recognize revenue as/when each obligation is satisfied (over time if one of the three over-time criteria is met; otherwise at the point control transfers).",
          "Variable consideration is estimated using either the expected-value (probability-weighted) method or the most-likely-amount method, then CONSTRAINED to the amount for which it is highly probable a significant reversal will not occur.",
          "Modification accounting: (a) a SEPARATE contract if it adds distinct goods/services priced at their standalone selling prices; (b) if remaining goods are distinct but not at standalone price, treat as a termination of the old contract and a new one — allocate the remaining consideration PROSPECTIVELY; (c) if the remaining goods are NOT distinct (part of a single performance obligation satisfied over time), account for a CUMULATIVE catch-up adjustment to revenue.",
          "A contract asset (revenue recognized before an unconditional right to payment) differs from a receivable (unconditional right); a contract liability (deferred revenue) arises when payment/right precedes performance.",
        ],
        scoringActions: [
          "Test each promised good/service for 'distinct' before counting performance obligations and before choosing a modification treatment.",
          "State the variable-consideration method chosen (expected value vs most likely amount) and apply the constraint explicitly.",
          "Select the modification path (separate / prospective / cumulative catch-up) and justify it by whether the added goods are distinct and priced at standalone selling price.",
        ],
      },
      {
        id: "tp4",
        title: "Leases (ASC 842): lessee classification & measurement; lessor sales-type/direct financing/operating",
        priority: "high",
        examinerFocus:
          "Whether you can classify a lease from both sides and measure it. For the lessee, the point is that BOTH finance and operating leases put a right-of-use (ROU) asset and lease liability on the balance sheet, but the income-statement pattern differs (front-loaded vs single straight-line). For the lessor, whether you can apply the classification criteria to reach sales-type, direct financing, or operating, and measure the net investment.",
        typicalQuestionForms: [
          "TBS: compute the initial lease liability and ROU asset (PV of lease payments) and the first-year expense/interest/amortization for a finance vs an operating lease.",
          "MCQ: classify a lease as finance/operating (lessee) or sales-type/direct-financing/operating (lessor) using the five criteria.",
          "MCQ: determine the effect of variable payments, a purchase option, or a residual-value guarantee on the lease liability.",
        ],
        mustKnow: [
          "Any ONE of the five criteria makes a lease a finance lease (lessee) or sales-type (lessor): (1) transfer of ownership; (2) a purchase option reasonably certain to be exercised; (3) lease term is a major part of the asset's remaining economic life; (4) present value of lease payments (plus a lessee residual-value guarantee) equals or exceeds substantially all of the asset's fair value; (5) the asset is so specialized it has no alternative use to the lessor at term end.",
          "Lessee measurement: lease liability = PV of remaining lease payments (using the rate implicit in the lease if known, else the incremental borrowing rate); ROU asset = lease liability + prepaid lease payments + initial direct costs − lease incentives. Finance lease → separate interest (effective-interest) and amortization; operating lease → a single straight-line lease cost (interest + ROU amortization plugged to a straight line).",
          "Lessor: a sales-type lease derecognizes the asset and may recognize selling profit at commencement; a direct-financing lease defers any selling profit into the net investment; an operating lease keeps the asset on the lessor's books and recognizes lease income (usually straight-line).",
          "Only lease payments (fixed, in-substance fixed, and index/rate-based at the initial rate, plus a probable residual-value guarantee and a reasonably-certain purchase/termination option) enter the liability; variable payments based on usage/performance are expensed as incurred and are NOT in the liability.",
        ],
        scoringActions: [
          "Run all five classification criteria and cite the one(s) met; a single met criterion is sufficient for finance/sales-type.",
          "Measure the liability as the PV of the correct payment set at the correct discount rate, then build the ROU asset from the liability (adjusting for prepayments, initial direct costs, incentives).",
          "Match the expense pattern to the classification: finance → front-loaded (interest + amortization); operating → single straight-line cost.",
        ],
      },
      {
        id: "tp5",
        title: "Share-based payment (ASC 718): service, performance & market conditions; modifications",
        priority: "high",
        examinerFocus:
          "Whether you can measure compensation cost at grant-date fair value and recognize it over the right period given the type of vesting condition, and whether you understand the crucial difference between a market condition (baked into grant-date fair value, expense recognized even if the target is missed) and a performance condition (expense recognized only if achievement is probable, reversed if not).",
        typicalQuestionForms: [
          "MCQ: determine total compensation cost and the annual expense for equity-classified options with a service condition and graded or cliff vesting.",
          "TBS: adjust cumulative compensation cost when a performance condition's probability changes, or when an award is modified.",
          "MCQ: distinguish the accounting for a market condition vs a performance condition (whether expense is reversed if the target is not met).",
        ],
        mustKnow: [
          "Equity-classified awards are measured at grant-date fair value (using an option-pricing model for options) and NOT remeasured; liability-classified awards (e.g., cash-settled SARs) are remeasured to fair value each period until settlement.",
          "Service condition: recognize the grant-date fair value over the requisite service (vesting) period; graded vesting may be recognized straight-line or on an accelerated (graded) attribution basis by policy.",
          "Performance condition (e.g., an earnings or IPO target): recognize expense only when achievement is probable; if it later becomes not probable, reverse previously recognized cost. Market condition (e.g., a stock-price/TSR target): its effect is embedded in the grant-date fair value, so compensation cost is recognized as long as the requisite service is rendered EVEN IF the market target is never met — no reversal for missing the target.",
          "A modification is measured as incremental fair value: for an award expected to vest both before and after (probable-to-probable), recognize the original grant-date cost PLUS the incremental fair value (new FV − old FV at the modification date) over the remaining service period.",
        ],
        scoringActions: [
          "Fix the measurement date and amount (grant-date fair value for equity awards; remeasure liability awards each period) before spreading cost.",
          "Classify the condition (service / performance / market) and apply the reversal rule: reverse for a failed performance condition, never reverse for a failed market condition.",
          "On a modification, add incremental fair value to the original grant-date cost rather than restarting measurement.",
        ],
      },
      {
        id: "tp6",
        title: "Complex/hybrid instruments & EPS impact (ASC 470-20, 260): convertibles, options, dilution",
        priority: "medium",
        examinerFocus:
          "Whether you can classify a convertible or hybrid instrument and then flow its effect through basic and diluted EPS. Post ASU 2020-06, a conventional convertible is usually a single liability, and diluted EPS uses the if-converted method; options/warrants use the treasury-stock method. The exam tests whether you add back interest (net of tax) for convertibles and whether a security is actually dilutive.",
        typicalQuestionForms: [
          "MCQ: compute basic EPS (deducting cumulative/declared preferred dividends) and diluted EPS.",
          "TBS: apply the if-converted method to convertible debt/preferred and the treasury-stock method to options, testing each potential security for dilution (antidilutive securities are excluded).",
          "MCQ: classify a convertible instrument or identify the EPS effect of a specific potential common share.",
        ],
        mustKnow: [
          "Basic EPS = (net income − preferred dividends) ÷ weighted-average common shares outstanding; for cumulative preferred, subtract the current year's dividend whether or not declared; for non-cumulative, subtract only if declared.",
          "Diluted EPS adds the effect of dilutive potential common shares; each potential security is tested separately and any ANTIDILUTIVE security (one that would increase EPS or decrease a loss per share) is excluded.",
          "If-converted method (convertible debt/preferred): assume conversion at the later of the period start or issuance; add the convertible shares to the denominator and add back the after-tax interest (for convertible debt) or the preferred dividends (for convertible preferred) to the numerator.",
          "Treasury-stock method (options/warrants): assume exercise; assumed proceeds are used to repurchase common shares at the average market price, and only the net incremental shares increase the denominator (dilutive only when the average market price exceeds the exercise price). Post ASU 2020-06, most conventional convertibles are accounted for as a single liability (the separate beneficial-conversion-feature and cash-conversion models were eliminated).",
        ],
        scoringActions: [
          "Compute basic EPS first, adjusting the numerator for preferred dividends (cumulative vs declared) correctly.",
          "Apply if-converted to convertibles (add shares + add back after-tax interest / preferred dividends) and treasury-stock to options, then confirm each is dilutive before including it.",
          "Sequence dilutive securities from most to least dilutive and drop any security that turns antidilutive.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "BAR technical items reward disciplined MEASUREMENT, not recitation. Bank the classification MCQs (hedge type, lease criteria, market vs performance condition, dilutive vs antidilutive) as near-automatic points, then earn the TBS marks by showing a clean, labelled computation — a goodwill bridge, an OCI-to-earnings reclassification, a PV-based lease liability — that a marker can follow line by line.",
      timeBudget:
        "~1.25 min per MCQ. On a computational TBS (a step acquisition, a two-period cash-flow hedge, a lease measurement), spend the first 2–3 minutes laying out the structure — the goodwill bridge, the hedge timeline, or the five lease criteria — before entering numbers, so every figure has a labelled home.",
      answerSequence: [
        "Classify first: hedge type, lease criterion met, revenue modification path, condition type (service/performance/market), or dilutive vs antidilutive — the classification dictates the accounting.",
        "Lay out the measurement skeleton: goodwill bridge (consideration + NCI at FV + prior interest at FV − FV of net assets); hedge timeline (derivative FV → OCI/earnings → reclassification); lease liability = PV of payments → ROU asset.",
        "Enter and label each number, keeping earnings vs OCI (hedges), goodwill vs earnings (measurement-period vs post-acquisition), and liability vs equity (contingent consideration, convertibles) strictly separate.",
        "State the reporting impact: where the amount lands (earnings/OCI/goodwill), the subsequent-measurement rule, and the effect on the analysed metric (e.g., EPS, leverage).",
      ],
      qualityChecks: [
        "Did I remeasure the previously held interest to fair value (gain/loss to earnings) before computing goodwill, and measure NCI at fair value?",
        "Did I route a fair-value hedge through earnings and a cash-flow hedge through OCI (reclassified when the hedged item affects earnings), rather than confusing the two?",
        "Did I test each promised good for 'distinct' and pick the correct modification path (separate / prospective / cumulative catch-up)?",
        "Did I put BOTH finance and operating leases on the balance sheet and match the expense pattern to the classification?",
        "Did I reverse cost for a failed performance condition but NOT for a failed market condition, and exclude antidilutive securities from diluted EPS?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The acquisition method: goodwill, NCI, step acquisitions & contingent consideration",
        testPointIds: ["tp1"],
        explanation: [
          "The acquisition method (ASC 805) is a five-move sequence, and BAR expects you to run all five in order. First, identify the acquirer and the acquisition date (the date control is obtained). Second, measure the consideration transferred at fair value — cash, the fair value of shares or other assets given, and the fair value of any contingent consideration — but NOT the acquirer's acquisition-related costs, which are expensed, and NOT debt or equity issuance costs, which follow their own guidance. Third, recognize the identifiable assets acquired and liabilities assumed at fair value, including intangibles that may not have been on the target's books (customer relationships, technology, trade names) and, importantly, excluding the target's own pre-existing goodwill. Fourth, measure any non-controlling interest at fair value. Fifth, solve for goodwill as the plug.",
          "The goodwill bridge is the single most-tested computation: goodwill = consideration transferred + fair value of NCI + acquisition-date fair value of any previously held equity interest − fair value of the identifiable net assets acquired. Because US GAAP measures NCI at fair value, the recognized goodwill includes the NCI's implied share (the 'full goodwill' method) — this is a frequent point of contrast with IFRS, which permits a proportionate-share NCI. If the bridge produces a negative number, you have a bargain purchase: reassess whether all assets/liabilities were correctly identified and measured, and if the negative persists, recognize a bargain-purchase GAIN in earnings on the acquisition date.",
          "Step acquisitions and contingent consideration are where candidates lose marks. In a step acquisition, the acquirer already held an equity interest before gaining control; that previously held interest must be remeasured to its acquisition-date fair value, with the gain or loss recognized in earnings, and that fair value then enters the goodwill bridge as a component of what was effectively 'given' for control. Contingent consideration (an earn-out) is measured at fair value on day one; its later treatment depends on classification — a liability-classified earn-out is remeasured to fair value each period through earnings, while an equity-classified one is not remeasured. Finally, distinguish measurement-period adjustments (within one year, for facts that existed at the acquisition date) which adjust goodwill, from genuinely new post-acquisition developments which hit earnings.",
        ],
        keyRules: [
          "Goodwill = consideration + NCI at FV + previously held interest at FV − FV of identifiable net assets; a negative = bargain-purchase gain (after reassessment) to earnings.",
          "NCI is measured at fair value under US GAAP (full goodwill); acquisition-related costs are expensed; the target's pre-existing goodwill is ignored.",
          "Step acquisition: remeasure the prior interest to FV (gain/loss to earnings) and include that FV in the goodwill bridge.",
          "Contingent consideration: liability-classified → remeasure through earnings; equity-classified → not remeasured. Measurement-period adjustments (≤1 year, pre-existing facts) hit goodwill; later changes hit earnings.",
        ],
        formulas: [
          "Goodwill = (consideration transferred + FV of NCI + FV of previously held interest) − FV of identifiable net assets acquired.",
          "Gain/(loss) on step acquisition = FV of previously held interest − its carrying amount.",
          "NCI at acquisition (fair-value method) = FV per the NCI × NCI %.",
        ],
        workedProblem: {
          scenario:
            "Parent already owned 10% of Target (carrying amount $9M, acquisition-date fair value $12M). On 1/1, Parent buys another 70% for $90M cash and agrees to a contingent earn-out with an acquisition-date fair value of $8M (classified as a liability). The fair value of Target's identifiable net assets is $120M, and the fair value of the 20% NCI is $24M. Legal and advisory fees were $2M. Compute the gain on the previously held interest, goodwill, and note the subsequent treatment of the earn-out and the fees.",
          steps: [
            "Remeasure the previously held 10% interest to fair value: gain = $12M FV − $9M carrying amount = $3M gain to earnings.",
            "Determine consideration transferred for control: $90M cash + $8M contingent consideration (at FV) = $98M; the $12M fair value of the previously held interest is added separately in the bridge.",
            "Assemble the goodwill bridge: consideration $98M + NCI at FV $24M + previously held interest at FV $12M = $134M total; less FV of identifiable net assets $120M.",
            "Goodwill = $134M − $120M = $14M.",
            "Handle the fees and the earn-out: the $2M of legal/advisory (acquisition-related) costs are expensed as incurred, NOT capitalized into consideration or goodwill; the liability-classified $8M earn-out is remeasured to fair value each subsequent period, with changes recognized in earnings.",
          ],
          conclusion:
            "Parent recognizes a $3M gain on remeasuring its previously held interest, records goodwill of $14M (built from $98M consideration + $24M NCI at fair value + $12M prior interest − $120M identifiable net assets), expenses the $2M acquisition costs, and remeasures the $8M liability-classified earn-out through earnings each period thereafter.",
          markingNotes: [
            "Award marks for remeasuring the prior interest to FV and routing the $3M gain to earnings.",
            "Award marks for a correctly assembled goodwill bridge that includes NCI at fair value and the prior interest at fair value, reaching $14M.",
            "Award marks for expensing acquisition costs and for identifying the liability-classified earn-out as remeasured through earnings.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Consolidation mechanics and non-controlling interest after acquisition",
        testPointIds: ["tp1"],
        explanation: [
          "Once control is established, ASC 810 governs how the parent presents the combined group. Consolidation combines 100% of the subsidiary's assets, liabilities, revenues, and expenses with the parent's — even when the parent owns less than 100% — and then presents the non-controlling interest's claim separately. On the balance sheet, NCI is reported within equity but apart from the parent's equity; on the income statement, consolidated net income is allocated between the controlling and non-controlling interests. This 'combine all, then allocate' logic is what distinguishes consolidation from the equity method (a single-line investment), and BAR fact patterns often hinge on whether control (not merely significant influence) exists.",
          "Intercompany transactions must be eliminated so the statements reflect only dealings with outside parties. Intercompany receivables/payables and intercompany sales/purchases are eliminated in full. Unrealized profit in ending inventory (or in a transferred fixed asset) that is still held within the group is deferred until the item is sold outside the group or, for a depreciable asset, realized through depreciation. A subtle BAR point: for UPSTREAM transactions (subsidiary sells to parent), the deferred unrealized profit is allocated between the controlling and non-controlling interests, whereas for DOWNSTREAM transactions (parent sells to subsidiary) it is attributed entirely to the parent.",
          "Subsequent-measurement issues also appear. The fair-value step-ups recognized at acquisition (e.g., on PP&E and finite-lived intangibles) generate additional depreciation/amortization in consolidated income that is not on the subsidiary's own books, so consolidated net income differs from the simple sum. Goodwill is not amortized; it is tested for impairment (a reporting-unit-level test comparing carrying amount to fair value, with the impairment limited to the goodwill balance). Finally, a change in ownership that does NOT result in loss of control (buying more shares from, or selling shares to, the NCI while retaining control) is accounted for as an EQUITY transaction — no gain/loss and no goodwill change — while a transaction that causes loss of control triggers deconsolidation with a gain/loss and remeasurement of any retained interest to fair value.",
        ],
        keyRules: [
          "Consolidate 100% of the subsidiary and present NCI separately within equity; allocate consolidated net income between controlling and non-controlling interests.",
          "Eliminate intercompany balances and transactions in full; defer unrealized intercompany profit until realized with an outside party.",
          "Upstream unrealized profit is shared with the NCI; downstream unrealized profit is attributed entirely to the parent.",
          "Ownership changes without loss of control = equity transactions (no gain/loss); loss of control = deconsolidation with gain/loss and remeasurement of any retained interest to FV.",
        ],
        formulas: [
          "NCI in net income = subsidiary adjusted net income × NCI %.",
          "Ending NCI = beginning NCI + NCI share of net income − NCI share of dividends (± NCI share of OCI).",
          "Consolidated net income = parent standalone income + subsidiary income − intercompany/step-up adjustments.",
        ],
      },
      {
        id: "sn3",
        title: "Derivatives and hedge accounting: fair-value, cash-flow, and net-investment hedges",
        testPointIds: ["tp2"],
        explanation: [
          "Every derivative is recognized on the balance sheet at fair value; the only question is where the change in that fair value goes. Without a qualifying hedge designation, the entire change runs through earnings — this is the default for speculative or undesignated derivatives. To use hedge accounting, the entity must, at inception, formally document the hedging relationship, the risk being hedged, and how effectiveness will be assessed, and the hedge must be expected to be highly effective. BAR's first move is always to identify the exposure: a fixed item whose fair value moves with rates/prices is a fair-value exposure; variability in future cash flows (a forecasted purchase or sale, a variable-rate instrument) is a cash-flow exposure; and the currency exposure of a foreign operation is a net-investment exposure.",
          "In a fair-value hedge, the hedged item is something already recognized (or a firm commitment) whose fair value changes with the hedged risk — for example, fixed-rate debt hedged with a pay-floating/receive-fixed swap. The change in the derivative's fair value goes to earnings, AND the change in the hedged item's fair value attributable to the hedged risk is ALSO recognized in earnings, with an offsetting basis adjustment to the item's carrying amount. Because both sides hit earnings, an effective hedge nets to near zero in income and any residual is the economic mismatch. This is the classic trap: a fair-value hedge does not touch OCI.",
          "In a cash-flow hedge, the entity is protecting the variability of future cash flows — most commonly a forecasted purchase or sale, or interest on variable-rate debt. Post ASU 2017-12, the ENTIRE change in the fair value of the hedging instrument is recorded in OCI and accumulated there; it is reclassified out of OCI into earnings in the same period(s) that the hedged forecasted transaction affects earnings (e.g., when the purchased inventory is sold, or when the interest expense is recognized). This matching is the whole point — it defers the derivative's gains/losses until they can offset the item they were meant to hedge. A net-investment hedge works similarly but parks the effective portion in the cumulative translation adjustment within OCI, released only when the foreign operation is sold.",
        ],
        keyRules: [
          "All derivatives at fair value; undesignated/speculative → all changes to earnings. Hedge accounting requires contemporaneous documentation and expected high effectiveness.",
          "Fair-value hedge → derivative change AND hedged-item change (for the hedged risk) both to earnings; adjust the hedged item's carrying amount.",
          "Cash-flow hedge → entire derivative fair-value change to OCI; reclassify to earnings when the forecasted/hedged transaction affects earnings.",
          "Net-investment hedge → effective portion to the cumulative translation adjustment (OCI); reclassify on disposal of the foreign operation.",
        ],
        formulas: [
          "Fair-value hedge earnings effect ≈ Δ derivative FV + Δ hedged-item FV (hedged risk) — nets to the economic mismatch.",
          "Cash-flow hedge: amount in AOCI at period end = cumulative change in the hedging instrument's fair value; reclassified when the hedged item hits earnings.",
        ],
        workedProblem: {
          scenario:
            "On 11/1/Year 1, a company forecasts the purchase of 10,000 units of a commodity in February of Year 2 and enters a futures contract to hedge the price, designating it as a cash-flow hedge (qualifying, highly effective). At 12/31/Year 1 the futures contract has a fair value gain of $40,000. In February Year 2 the contract is settled for a total cumulative gain of $50,000, the inventory is purchased, and that inventory is sold to customers in March Year 2. Show where the derivative gain goes each period.",
          steps: [
            "12/31/Year 1: record the derivative at fair value — debit the futures asset $40,000 and credit OCI $40,000 (the entire change in a qualifying cash-flow hedge goes to OCI; nothing hits Year 1 earnings).",
            "At year-end Year 1, the $40,000 sits in accumulated OCI; it is NOT yet in earnings because the hedged forecasted purchase has not yet affected earnings.",
            "February Year 2: recognize the remaining $10,000 change — debit the futures asset $10,000, credit OCI $10,000 — bringing cumulative OCI to $50,000; settle the contract for $50,000 cash.",
            "The forecasted purchase occurs: the inventory is recorded at its purchase cost; the $50,000 gain remains deferred in accumulated OCI until the inventory affects earnings.",
            "March Year 2: when the inventory is SOLD (cost of goods sold recognized), reclassify the $50,000 from accumulated OCI to earnings — debit OCI $50,000, credit earnings (cost of goods sold / a reclassification line) $50,000 — matching the derivative gain to the period the hedged item affects income.",
          ],
          conclusion:
            "None of the derivative gain touches earnings until the hedged inventory is sold: $40,000 accumulates in OCI at 12/31/Year 1, the cumulative $50,000 stays in OCI through purchase, and the entire $50,000 is reclassified from OCI to earnings in March Year 2 when the inventory is sold — the defining behavior of a cash-flow hedge.",
          markingNotes: [
            "Award marks for recording the derivative at fair value with the offset to OCI (not earnings) in Year 1.",
            "Award marks for keeping the full $50,000 in accumulated OCI until the inventory affects earnings.",
            "Full marks require reclassifying the $50,000 from OCI to earnings in the period the inventory is sold, matching the derivative gain to the hedged item.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Advanced revenue recognition: distinct obligations, variable consideration & modifications",
        testPointIds: ["tp3"],
        explanation: [
          "ASC 606's five-step model is FAR content re-tested in BAR with harder facts, so precision on 'distinct' and on modifications earns the marks. A promised good or service is a separate performance obligation only if it is distinct — capable of being distinct (the customer can benefit from it on its own or with readily available resources) AND distinct in the context of the contract (separately identifiable, not highly integrated with or modifying other promises). Getting the count of performance obligations right is a precondition to allocating the transaction price, because allocation is done on a relative standalone-selling-price basis: estimate each obligation's standalone selling price (observable if sold separately; otherwise adjusted market, expected-cost-plus-margin, or, only when highly variable/uncertain, a residual approach) and split the transaction price in proportion.",
          "The transaction price itself often includes variable consideration — rebates, performance bonuses, penalties, refunds, or rights of return. Estimate it using the method that better predicts the amount the entity is entitled to: the EXPECTED VALUE (probability-weighted) method for a large number of similar outcomes, or the MOST-LIKELY-AMOUNT method for a binary outcome (e.g., a bonus you either earn or do not). Then apply the CONSTRAINT: include variable consideration in the transaction price only to the extent it is highly probable that a significant revenue reversal will not occur when the uncertainty later resolves. This constraint is the mechanism that keeps entities from booking speculative bonus revenue early.",
          "Contract modifications are the highest-yield BAR revenue topic because there are three distinct answers. If the modification adds distinct goods or services AND the price increases by their standalone selling prices, treat it as a SEPARATE contract — the original accounting is untouched. If the remaining goods/services are distinct but NOT priced at standalone selling price, treat the modification as a termination of the old contract and the creation of a new one, allocating the remaining (unrecognized) consideration to the remaining obligations PROSPECTIVELY. If the remaining goods/services are NOT distinct — they are part of a single performance obligation being satisfied over time — account for the modification as a CUMULATIVE CATCH-UP, adjusting revenue at the modification date to reflect the revised measure of progress. Choosing the wrong path is the classic error; anchor on whether the remaining goods are distinct and whether the added price equals standalone selling price.",
        ],
        keyRules: [
          "Count performance obligations by testing 'distinct' (capable of being distinct + separately identifiable in context) before allocating price.",
          "Allocate the transaction price on relative standalone selling prices (observable → adjusted market / cost-plus-margin → residual only when highly variable).",
          "Estimate variable consideration by expected value or most-likely amount, then constrain to the amount highly probable not to reverse.",
          "Modifications: separate contract (distinct + standalone price) / prospective (distinct, not standalone price) / cumulative catch-up (not distinct).",
        ],
        formulas: [
          "Allocated price to obligation i = total transaction price × (standalone selling price_i ÷ Σ standalone selling prices).",
          "Expected-value variable consideration = Σ (probability × outcome), then apply the constraint.",
          "Over-time revenue (input method) = transaction price × (costs incurred to date ÷ total estimated costs).",
        ],
      },
      {
        id: "sn5",
        title: "Leases under ASC 842: lessee classification/measurement and the lessor models",
        testPointIds: ["tp4"],
        explanation: [
          "ASC 842's headline change is that a lessee recognizes a right-of-use (ROU) asset and a lease liability for essentially all leases (other than short-term leases it elects to exclude), so 'off-balance-sheet operating leases' are gone. Classification still matters, but now it drives the income-statement pattern rather than balance-sheet recognition. A lease is a FINANCE lease for the lessee if ANY ONE of five criteria is met: transfer of ownership by the end of the term; a purchase option the lessee is reasonably certain to exercise; a lease term that is a major part of the asset's remaining economic life; a present value of lease payments (plus any lessee residual-value guarantee) that equals or exceeds substantially all of the asset's fair value; or an asset so specialized it has no alternative use to the lessor at term end. If none is met, it is an OPERATING lease.",
          "Measurement is the same at commencement for both types: the lease liability is the present value of the remaining lease payments, discounted at the rate implicit in the lease if readily determinable, otherwise the lessee's incremental borrowing rate. The ROU asset equals that liability, plus any lease payments made at or before commencement and initial direct costs, minus any lease incentives received. Only qualifying payments enter the liability — fixed and in-substance-fixed payments, index/rate-based payments measured at the initial index/rate, amounts probable under a residual-value guarantee, and the exercise price of a reasonably-certain purchase or termination option; PURELY VARIABLE payments tied to usage or sales are expensed as incurred and are excluded from the liability. The difference emerges after commencement: a finance lease unwinds the liability using the effective-interest method and amortizes the ROU asset separately (a front-loaded total expense), whereas an operating lease reports a SINGLE straight-line lease cost, achieved by amortizing the ROU asset by the plug that makes total cost equal to the straight-line amount.",
          "The lessor side has three outcomes. A lease meeting any of the sales-type criteria (essentially the same five, from the lessor's perspective) is a SALES-TYPE lease: the lessor derecognizes the underlying asset, records a net investment in the lease, and may recognize selling profit at commencement. If it does not meet those criteria but collection is probable and it transfers substantially all risks/rewards via a third-party residual guarantee, it may be a DIRECT-FINANCING lease, in which any selling profit is deferred into the net investment rather than recognized upfront. Otherwise it is an OPERATING lease, and the lessor keeps the asset on its books, continues depreciating it, and recognizes lease income (typically straight-line). BAR fact patterns test whether you can pick the right bucket and measure the net investment or the ROU asset/liability accordingly.",
        ],
        keyRules: [
          "Lessee recognizes an ROU asset and lease liability for essentially all leases; classification (finance vs operating) drives the expense pattern, not recognition.",
          "Finance/sales-type if ANY one of the five criteria is met (ownership transfer, purchase option, major part of life, PV ≥ substantially all of FV, specialized asset).",
          "Lease liability = PV of qualifying lease payments at the implicit rate (or incremental borrowing rate); ROU asset = liability + prepayments + initial direct costs − incentives.",
          "Finance lease → separate interest + amortization (front-loaded); operating lease → single straight-line cost. Lessor: sales-type (profit upfront) / direct-financing (profit deferred) / operating (asset stays, straight-line income).",
        ],
        formulas: [
          "Lease liability (commencement) = Σ PV of lease payments = payment × PV-annuity factor (+ PV of any guaranteed residual / purchase option).",
          "Finance lease Year-1 interest = beginning lease liability × discount rate; ROU amortization = ROU asset ÷ useful life (or term).",
          "Operating lease annual cost = total undiscounted lease payments ÷ lease term (straight-line); ROU amortization = straight-line cost − interest on the liability.",
        ],
        workedProblem: {
          scenario:
            "A lessee signs a 5-year lease with annual payments of $20,000 due at the END of each year; the asset's economic life is 6 years, there is no transfer of ownership and no purchase option, the asset is not specialized, and the incremental borrowing rate is 8% (PV-ordinary-annuity factor for 5 years at 8% = 3.9927; the asset's fair value is $95,000). Classify the lease and compute the initial lease liability and ROU asset, and the Year-1 income-statement effect if it is (a) an operating lease and (b) a finance lease.",
          steps: [
            "Test the five criteria: no ownership transfer, no purchase option, term (5 yrs) is 83% of the 6-year life (a 'major part' — this criterion is met), PV of payments vs fair value, not specialized. Because at least one criterion (major part of economic life) is met, classify as a FINANCE lease; nonetheless compute both patterns to show the difference.",
            "Initial lease liability = $20,000 × 3.9927 = $79,854 (rounded); ROU asset = $79,854 (no prepayments, initial direct costs, or incentives).",
            "Operating-lease pattern (for comparison): single straight-line cost = total payments $100,000 ÷ 5 = $20,000 per year. Within that, Year-1 interest = $79,854 × 8% = $6,388, and ROU amortization is the plug = $20,000 − $6,388 = $13,612; total Year-1 expense $20,000.",
            "Finance-lease pattern: Year-1 interest = $79,854 × 8% = $6,388 (reported as interest); ROU amortization = $79,854 ÷ 5 = $15,971 (straight-line over the term); total Year-1 expense = $6,388 + $15,971 = $22,359 — higher than the operating figure (front-loaded).",
            "Note the balance-sheet identity: under BOTH treatments the lessee initially recognizes the same $79,854 ROU asset and lease liability; only the income-statement pattern and line-item classification differ.",
          ],
          conclusion:
            "The lease is a finance lease (the term is a major part of the asset's economic life). The lessee records an ROU asset and lease liability of $79,854. As a finance lease, Year-1 expense is $22,359 ($6,388 interest + $15,971 amortization) and is front-loaded; had it been an operating lease, Year-1 expense would be a single straight-line $20,000 — same balance-sheet recognition, different expense pattern.",
          markingNotes: [
            "Award marks for running the five criteria and identifying 'major part of economic life' as the met criterion (finance lease).",
            "Award marks for measuring the liability/ROU asset as $20,000 × 3.9927 = $79,854.",
            "Full marks require the Year-1 finance-lease split (interest $6,388 + amortization $15,971 = $22,359) and the recognition that both classifications put the same amount on the balance sheet.",
          ],
        },
      },
      {
        id: "sn6",
        title: "Share-based payment and its EPS/complex-instrument consequences",
        testPointIds: ["tp5", "tp6"],
        explanation: [
          "Share-based payment (ASC 718) is measured differently depending on how the award is settled. Equity-classified awards (stock options, restricted stock settled in shares) are measured at their GRANT-DATE fair value and are NOT remeasured thereafter — for options, that fair value comes from an option-pricing model. Liability-classified awards (cash-settled stock appreciation rights) are remeasured to fair value at each reporting date until settlement, so their expense moves with the stock price. Total compensation cost for an equity award is spread over the requisite service (vesting) period; for graded vesting an entity may recognize cost straight-line or on an accelerated graded-attribution basis as a policy choice, and forfeitures may be estimated up front or recognized as they occur.",
          "The condition type controls recognition and reversal, which is the exam's favorite distinction. A SERVICE condition simply requires the employee to keep working through vesting. A PERFORMANCE condition (an internal target — earnings, revenue, an IPO) causes cost to be recognized only when achievement is PROBABLE; if it becomes not probable, previously recognized cost is reversed, and if the award ultimately does not vest for failing the performance target, no net cost remains. A MARKET condition (a target tied to the stock price or total shareholder return) is fundamentally different: its difficulty is already reflected in the lower grant-date fair value, so compensation cost is recognized as long as the employee renders the required service EVEN IF the market target is never achieved — there is NO reversal for missing a market condition. Modifications are handled by adding incremental fair value: for an award probable to vest both before and after the change, recognize the original grant-date cost plus the excess of the modified-date fair value over the original fair value, over the remaining service period.",
          "These awards, and convertible instruments, then flow into EPS (ASC 260). Basic EPS divides income available to common shareholders — net income minus preferred dividends (subtract cumulative preferred whether or not declared; subtract non-cumulative only if declared) — by the weighted-average common shares outstanding. Diluted EPS adds the effect of dilutive potential common shares, testing each separately and EXCLUDING any that are antidilutive. Options and warrants use the TREASURY-STOCK method: assume exercise, use the proceeds to buy back shares at the average market price, and add only the net incremental shares (dilutive only when the market price exceeds the exercise price). Convertible debt and convertible preferred use the IF-CONVERTED method: assume conversion, add the new shares to the denominator, and add back to the numerator the after-tax interest (for convertible debt) or the preferred dividends (for convertible preferred). Since ASU 2020-06, a conventional convertible is generally accounted for as a single liability (the beneficial-conversion-feature and cash-conversion separation models were eliminated), which simplifies both the balance sheet and the if-converted numerator adjustment.",
        ],
        keyRules: [
          "Equity awards → grant-date fair value, not remeasured; liability awards (cash-settled SARs) → remeasured to fair value each period.",
          "Performance condition → recognize only when probable, reverse if it becomes improbable; market condition → recognized regardless of achievement (no reversal), difficulty baked into grant-date FV.",
          "Modification → original grant-date cost + incremental fair value (modified FV − original FV) over the remaining service period.",
          "Basic EPS = (NI − preferred dividends) ÷ weighted-average shares; diluted uses treasury-stock (options) and if-converted (convertibles), excluding antidilutive securities.",
        ],
        formulas: [
          "Annual comp cost (straight-line) = total grant-date fair value ÷ requisite service period.",
          "Basic EPS = (net income − preferred dividends) ÷ weighted-average common shares outstanding.",
          "Treasury-stock incremental shares = options − (options × exercise price ÷ average market price); dilutive only if average market price > exercise price.",
          "If-converted diluted EPS (convertible debt) = [net income − preferred dividends + after-tax interest] ÷ [weighted-average shares + shares from assumed conversion].",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1"],
        style: "Task-based simulation (business combination)",
        question:
          "On 4/1, Acquirer purchases 80% of Sub for $160M cash. Acquirer previously held no interest in Sub. The fair value of the 20% NCI is $38M. The fair value of Sub's identifiable net assets is $175M (which includes newly identified customer-relationship intangibles of $20M not on Sub's books, and excludes $6M of Sub's own pre-existing goodwill). Acquirer also agrees to pay $10M in one year if Sub hits a revenue target; the acquisition-date fair value of this contingent payment is $7M and it is classified as a liability. Acquirer paid $3M in advisory fees. Compute goodwill, and explain the treatment of the advisory fees, the contingent consideration, and Sub's pre-existing goodwill.",
        answerPlan: [
          "Assemble the goodwill bridge (consideration + NCI at FV − FV of identifiable net assets); there is no previously held interest here.",
          "Include the $7M contingent consideration (at FV) in consideration transferred; exclude the $3M advisory fees.",
          "Confirm identifiable net assets include the $20M customer intangible and EXCLUDE Sub's $6M pre-existing goodwill.",
          "State subsequent treatment: fees expensed, liability-classified earn-out remeasured through earnings.",
        ],
        modelAnswer:
          "Consideration transferred = $160M cash + $7M contingent consideration at fair value = $167M. There is no previously held equity interest, so the goodwill bridge is: consideration $167M + NCI at fair value $38M = $205M total, less the fair value of identifiable net assets of $175M, giving goodwill of $30M. The $175M already correctly includes the $20M of newly identified customer-relationship intangibles (recognized separately from goodwill because they are identifiable) and correctly EXCLUDES Sub's own $6M pre-existing goodwill, which is never carried over — only identifiable assets and liabilities are recognized, and any goodwill is measured fresh as the residual. The $3M of advisory (acquisition-related) fees are expensed as incurred and are NOT added to consideration or goodwill. The $7M contingent consideration is included in consideration at its acquisition-date fair value; because it is classified as a liability, it will be remeasured to fair value at each subsequent reporting date with changes recognized in earnings (not adjusted against goodwill, unless the change is a measurement-period adjustment for facts that existed at the acquisition date).",
        markingGuide: [
          "1 mark: consideration = $167M (cash $160M + contingent consideration $7M at FV), excluding the $3M advisory fees.",
          "1 mark: goodwill bridge including NCI at fair value ($38M) reaching goodwill of $30M ($205M − $175M).",
          "1 mark: recognizing the $20M customer intangible separately and excluding Sub's $6M pre-existing goodwill.",
          "1 mark: expensing the advisory fees and remeasuring the liability-classified earn-out through earnings.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp2"],
        style: "Short constructed response (hedge classification & flow)",
        question:
          "For each situation, identify the hedge type and state exactly where the change in the derivative's fair value is recognized and when (if ever) it is reclassified to earnings: (1) a company with $50M of fixed-rate bonds enters a receive-fixed/pay-floating interest-rate swap to protect against fair-value changes from rate movements; (2) a company hedges a highly probable forecasted sale of inventory denominated in euros with a forward contract; (3) a US parent hedges its net investment in a euro-functional-currency subsidiary with euro-denominated debt. Explain the common error a candidate makes in situation (2).",
        answerPlan: [
          "Classify each by the exposure (fixed → fair value; forecasted → cash flow; foreign net investment → net-investment).",
          "State where each derivative change lands (earnings vs OCI) and the reclassification trigger.",
          "For the fair-value hedge, note the hedged-item basis adjustment.",
          "Explain the OCI-timing error in the cash-flow hedge.",
        ],
        modelAnswer:
          "(1) This is a FAIR-VALUE hedge: the exposure is the fair-value variability of fixed-rate debt as rates change. The change in the swap's fair value is recognized in EARNINGS, and the change in the bonds' fair value attributable to interest-rate risk is ALSO recognized in earnings with an offsetting basis adjustment to the bonds' carrying amount; an effective hedge nets to near zero in income. It does not touch OCI. (2) This is a CASH-FLOW hedge of a forecasted transaction: the entire change in the forward's fair value is recorded in OCI and accumulated there; it is reclassified from OCI to EARNINGS in the period the forecasted sale affects earnings (when the sale is recognized). Post ASU 2017-12 the full change goes to OCI — there is no separate immediate recognition of an 'ineffective' portion. The common candidate error in (2) is to run the derivative's gain/loss through earnings immediately (as if speculative) or to reclassify it too early; the whole purpose of the cash-flow hedge is to DEFER the gain/loss in OCI and release it only when the hedged sale hits income, achieving matching. (3) This is a NET-INVESTMENT hedge: the effective portion of the gain/loss on the euro debt is recognized in the cumulative-translation-adjustment section of OCI and is reclassified to earnings only upon disposal (sale or substantial liquidation) of the foreign subsidiary.",
        markingGuide: [
          "1 mark: correctly classifying all three (fair-value / cash-flow / net-investment).",
          "1 mark: fair-value hedge → earnings for both the derivative and the hedged item (with basis adjustment).",
          "1 mark: cash-flow hedge → entire change to OCI, reclassified when the forecasted sale affects earnings.",
          "1 mark: net-investment hedge → CTA in OCI, reclassified on disposal; plus explaining the premature-earnings-recognition error in (2).",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp3"],
        style: "Task-based simulation (revenue modification & variable consideration)",
        question:
          "On 1/1, SoftCo signs a 2-year contract to deliver software plus 2 years of post-contract support (PCS) for $240,000, with standalone selling prices of $180,000 (software, delivered and controlled at inception) and $60,000 (PCS, over 2 years). SoftCo also can earn a $30,000 bonus if the customer's users exceed a usage threshold; SoftCo estimates a 60% probability of earning it. Six months in (7/1), the parties modify the contract to add a distinct analytics module for an additional $50,000, which equals its standalone selling price. Determine: (a) how to treat the usage bonus in the transaction price; (b) the revenue recognized on the software and PCS in Year 1; and (c) how to account for the 7/1 modification.",
        answerPlan: [
          "Estimate the usage bonus (binary → most-likely amount) and apply the constraint.",
          "Allocate the base transaction price to software vs PCS on relative standalone selling prices.",
          "Recognize software at a point in time and PCS over time; compute Year-1 amounts.",
          "Classify the modification as a separate contract (distinct + standalone price).",
        ],
        modelAnswer:
          "(a) The $30,000 usage bonus is variable consideration with a binary outcome (earned or not), so the MOST-LIKELY-AMOUNT method is appropriate; the most likely single outcome is that SoftCo earns it (60% > 50%), suggesting $30,000. However, SoftCo must apply the CONSTRAINT and include the bonus only to the extent it is highly probable a significant reversal will not occur — a 60% estimate is unlikely to clear 'highly probable,' so the bonus is most appropriately EXCLUDED from the transaction price until the uncertainty is closer to resolved; the transaction price starts at $240,000. (b) Allocate the $240,000 on relative standalone selling prices: software = $240,000 × ($180,000 ÷ $240,000) = $180,000; PCS = $240,000 × ($60,000 ÷ $240,000) = $60,000. The software is delivered and control transfers at inception, so its $180,000 is recognized at a point in time on 1/1. The PCS is satisfied over the 2-year period, so $60,000 is recognized ratably — $30,000 in Year 1 (and $30,000 in Year 2). Year-1 revenue from these obligations is therefore $180,000 + $30,000 = $210,000. (c) The 7/1 modification adds a DISTINCT good (the analytics module) at a price that equals its standalone selling price ($50,000), so it is accounted for as a SEPARATE CONTRACT; the original contract's accounting is unaffected, and the $50,000 is recognized under its own performance-obligation analysis.",
        markingGuide: [
          "1 mark: identifying the bonus as variable consideration, using most-likely amount, and applying the constraint to exclude it at 60%.",
          "1 mark: allocating $180,000 to software and $60,000 to PCS on relative standalone selling prices.",
          "1 mark: recognizing software at a point in time and PCS over time → Year-1 revenue $210,000.",
          "1 mark: treating the modification as a separate contract because the added good is distinct and priced at standalone selling price.",
        ],
      },
      {
        id: "ep4",
        testPointIds: ["tp5", "tp6"],
        style: "Task-based simulation (stock compensation & diluted EPS)",
        question:
          "GrantCo grants 100,000 equity-classified stock options on 1/1/Year 1 with a grant-date fair value of $9 each, vesting after 3 years of service (cliff). The options have a $20 exercise price. Separately, GrantCo has net income of $2,000,000, weighted-average common shares of 1,000,000, and $4,000,000 of 5% convertible bonds (issued at par, convertible into 80,000 common shares); the tax rate is 25% and the average market price of the stock during the year was $32. Compute: (a) the Year-1 compensation expense for the options; (b) basic EPS; and (c) diluted EPS, applying the if-converted method to the bonds and the treasury-stock method to the options. State whether each potential security is dilutive.",
        answerPlan: [
          "Compute total option cost and spread it straight-line over the 3-year service period.",
          "Compute basic EPS (no preferred here).",
          "Apply if-converted to the bonds (add after-tax interest to numerator, add shares to denominator) and test dilution.",
          "Apply treasury-stock method to the options and test dilution; combine into diluted EPS.",
        ],
        modelAnswer:
          "(a) Total grant-date compensation cost = 100,000 options × $9 = $900,000, recognized straight-line over the 3-year requisite service period, so Year-1 expense = $900,000 ÷ 3 = $300,000 (equity-classified options are measured at grant-date fair value and not remeasured). (b) Basic EPS = net income ÷ weighted-average common shares = $2,000,000 ÷ 1,000,000 = $2.00 (no preferred dividends). (c) If-converted for the bonds: annual interest = $4,000,000 × 5% = $200,000; after-tax add-back = $200,000 × (1 − 0.25) = $150,000; assumed conversion adds 80,000 shares. The bonds' incremental EPS effect = $150,000 ÷ 80,000 = $1.875 per share, which is below basic EPS of $2.00, so the bonds are DILUTIVE. Treasury-stock method for the options: because the average market price ($32) exceeds the exercise price ($20), the options are dilutive; assumed proceeds = 100,000 × $20 = $2,000,000, shares repurchased = $2,000,000 ÷ $32 = 62,500, so net incremental shares = 100,000 − 62,500 = 37,500 (these add shares with no numerator change, so they are dilutive). Diluted EPS = ($2,000,000 + $150,000) ÷ (1,000,000 + 80,000 + 37,500) = $2,150,000 ÷ 1,117,500 = $1.92. Both the convertible bonds and the options are dilutive, so both are included; diluted EPS is $1.92 versus basic EPS of $2.00.",
        markingGuide: [
          "1 mark: Year-1 option expense = $900,000 ÷ 3 = $300,000 (grant-date fair value spread over the service period).",
          "1 mark: basic EPS = $2,000,000 ÷ 1,000,000 = $2.00.",
          "1 mark: if-converted bonds — after-tax interest add-back $150,000 and 80,000 shares, confirmed dilutive ($1.875 < $2.00).",
          "1 mark: treasury-stock options — 37,500 net incremental shares (dilutive since $32 > $20) and diluted EPS = $2,150,000 ÷ 1,117,500 = $1.92.",
        ],
      },
    ],
  }),
};
