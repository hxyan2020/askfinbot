import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA — FAR (Financial Accounting & Reporting) exam-calibrated depth content,
 * batch A2, keyed by moduleId to merge onto CPA_COURSEWARE. Covers:
 *   cpa-far-m3  Revenue recognition & leases      (ASC 606, ASC 842)
 *   cpa-far-m4  Investments, business combinations
 *               & consolidations                  (ASC 320/321/323/326/805/810)
 *
 * Calibration notes used throughout:
 *  - FAR is a four-hour AICPA Blueprint section (five testlets: two MCQ, three
 *    task-based simulations). These two modules sit in Blueprint Area II (select
 *    transactions). Most content is tested at Application/Analysis, so the TBS
 *    work below mirrors the numeric fill-in, allocation and journal-entry
 *    simulations candidates actually face.
 *  - US GAAP (FASB ASC) governs everything here. ASC 606 is the single revenue
 *    model; ASC 842 replaced the old bright-line 90%/75% lease tests with a
 *    five-criterion classification. Do not import IFRS 15/16 rules — the exam
 *    penalizes IFRS single-lease-model answers on a US lessee question.
 *  - Present-value figures use the discount rate stated in the fact pattern
 *    (the rate the exam gives, e.g., the rate implicit in the lease or the
 *    lessee's incremental borrowing rate). PV factors are shown so a candidate
 *    can reproduce every number without a hard-coded table.
 */
export const CPA_FAR_A2_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // FAR M3 — Revenue recognition & leases (ASC 606 / ASC 842)
  // ===================================================================
  "cpa-far-m3": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "The five-step model & identifying performance obligations",
        priority: "critical",
        examinerFocus:
          "Whether you can march through all five ASC 606 steps in order and, above all, split a bundled arrangement into distinct performance obligations. The examiner rarely asks 'name the steps'; it gives a contract that bundles a good with installation, a service, or a right to future upgrades and tests whether each promise is distinct and therefore separately accounted for.",
        typicalQuestionForms: [
          "MCQ: given a bundled contract, count the separate performance obligations.",
          "TBS: for a machine-plus-installation-plus-maintenance contract, list each performance obligation and state whether it is satisfied over time or at a point in time.",
          "MCQ: decide whether a promise (e.g., free shipping, a loyalty point, a right of return) is a separate performance obligation.",
        ],
        mustKnow: [
          "Five steps in order: (1) identify the contract, (2) identify the performance obligations, (3) determine the transaction price, (4) allocate the price to the obligations, (5) recognize revenue as/when each obligation is satisfied.",
          "A promised good or service is a separate (distinct) performance obligation only if it is BOTH capable of being distinct (the customer can benefit from it alone or with readily available resources) AND distinct within the context of the contract (not highly interdependent/integrated with other promises).",
          "A contract exists for revenue purposes only when it has commercial substance, the parties are committed and rights/payment terms are identifiable, AND collection of the consideration is probable.",
        ],
        scoringActions: [
          "Split the contract into its promised goods/services and test each against BOTH distinctness criteria before deciding the obligation count.",
          "State step 5 timing (over time vs point in time) for each obligation, because allocation and recognition marks depend on it.",
          "Confirm collectibility is probable before recognizing any revenue — a failed step 1 defers everything.",
        ],
      },
      {
        id: "tp2",
        title: "Transaction price: variable consideration, constraint & allocation",
        priority: "critical",
        examinerFocus:
          "Building the transaction price from variable consideration (estimated by expected value or most-likely amount and then CONSTRAINED), separating any significant financing component, and allocating the total to obligations by relative standalone selling price. The classic trap is recognizing unconstrained variable consideration or allocating a discount to the wrong obligation.",
        typicalQuestionForms: [
          "MCQ: estimate variable consideration under the expected-value vs most-likely-amount method and apply the constraint.",
          "TBS: allocate a bundled contract price across obligations using relative standalone selling prices, including a discount.",
          "MCQ: identify when a payment timing gap creates a significant financing component.",
        ],
        mustKnow: [
          "Variable consideration is estimated using expected value (probability-weighted, best when many possible outcomes) or the most-likely amount (best for a binary outcome), then CONSTRAINED to the amount for which a significant reversal is not probable.",
          "The transaction price is allocated to each performance obligation in proportion to its standalone selling price (SSP); when SSP is not observable, estimate it (adjusted market assessment, expected cost plus margin, or residual only in limited cases).",
          "A significant financing component is separated when the timing of payment provides the customer or seller a significant financing benefit; revenue is recorded at the cash-selling (present-value) amount and interest income/expense is accreted separately. A practical expedient ignores it when the period is one year or less.",
        ],
        scoringActions: [
          "Choose expected value vs most-likely amount based on the outcome profile, then apply the constraint before including the amount in the transaction price.",
          "Allocate by relative SSP percentages; push any contract discount across all obligations unless there is evidence it relates to specific ones.",
          "Strip out a significant financing component and present it as interest, not revenue.",
        ],
      },
      {
        id: "tp3",
        title: "Timing: over-time vs point-in-time recognition",
        priority: "high",
        examinerFocus:
          "Deciding whether an obligation is satisfied over time (one of three criteria met) or at a point in time (when control transfers), and — for over-time — measuring progress with an input or output method. Long-term construction is tested here through the cost-to-cost (percentage-of-completion) method.",
        typicalQuestionForms: [
          "MCQ: determine whether revenue is recognized over time or at a point in time for a described obligation.",
          "TBS: compute revenue and gross profit to date on a multi-year contract using cost-to-cost input measurement.",
        ],
        mustKnow: [
          "Recognize over time if ANY one holds: (a) the customer simultaneously receives and consumes the benefits as the entity performs; (b) the entity's performance creates/enhances an asset the customer controls; or (c) the asset has no alternative use to the entity AND the entity has an enforceable right to payment for performance to date.",
          "If none of the three over-time criteria is met, recognize at the point in time control transfers — indicators include a present right to payment, legal title, physical possession, risks/rewards of ownership, and customer acceptance.",
          "Over-time progress uses an input method (e.g., cost-to-cost: costs incurred to date ÷ total estimated costs) or an output method (units, milestones); an expected loss on the whole contract is recognized immediately in full.",
        ],
        scoringActions: [
          "Test all three over-time criteria explicitly; if none is met, default to point-in-time at transfer of control.",
          "Under cost-to-cost, compute the percentage complete, apply it to the contract price for cumulative revenue, then subtract prior-period revenue for the current period.",
          "Recognize any anticipated contract loss immediately and in full, regardless of the percentage complete.",
        ],
      },
      {
        id: "tp4",
        title: "Lessee accounting (ASC 842): classification, ROU asset & liability",
        priority: "critical",
        examinerFocus:
          "Classifying a lease as finance or operating using the five criteria, initially measuring the lease liability as the present value of lease payments and the right-of-use (ROU) asset off it, and — the heavily tested part — the DIFFERENT expense patterns: finance leases split interest and amortization (front-loaded total), operating leases produce a single straight-line expense.",
        typicalQuestionForms: [
          "MCQ: classify a lease finance vs operating from the five criteria.",
          "TBS: compute the initial lease liability and ROU asset, then build a year-1 amortization schedule and state the expense under finance vs operating treatment.",
        ],
        mustKnow: [
          "Finance lease if ANY of the five: (1) title transfers by end of term; (2) a purchase option reasonably certain to be exercised; (3) lease term is a major part of the asset's remaining economic life; (4) PV of lease payments (plus any residual value guarantee) is substantially all of the asset's fair value; (5) the asset is so specialized it has no alternative use to the lessor. Otherwise it is an operating lease.",
          "Initial lease liability = PV of lease payments discounted at the rate implicit in the lease (if determinable) or the lessee's incremental borrowing rate; ROU asset = lease liability + initial direct costs + prepaid lease payments − lease incentives received.",
          "Finance lease: interest expense (liability × rate) plus straight-line amortization of the ROU asset — two line items, front-loaded total expense. Operating lease: a single lease expense recognized straight-line, with the ROU asset amortized as the plug between straight-line expense and interest on the liability.",
        ],
        scoringActions: [
          "Run all five classification criteria before measuring; a single 'yes' makes it a finance lease.",
          "Discount payments to present value using the stated rate; add initial direct costs and prepayments (and subtract incentives) to get the ROU asset — do not equate ROU to the liability when those items exist.",
          "State the correct expense pattern: two components for finance, one straight-line for operating.",
        ],
      },
      {
        id: "tp5",
        title: "Lessor accounting: sales-type, direct financing & operating",
        priority: "high",
        examinerFocus:
          "Classifying the lessor's lease (same five criteria, plus collectibility for sales-type/direct-financing), recognizing selling profit at commencement for a sales-type lease, and measuring interest income on the net investment. The trap is recognizing selling profit or derecognizing the asset in an operating lease.",
        typicalQuestionForms: [
          "MCQ: classify a lessor lease and decide whether selling profit is recognized at commencement.",
          "TBS: for a sales-type lease, compute selling profit, the net investment, and first-year interest income.",
        ],
        mustKnow: [
          "A lessor lease is sales-type if any of the five lessee-style criteria is met; if none is met but the PV of payments plus lessor collectibility supports it, it may be direct financing; otherwise operating.",
          "Sales-type lease: recognize revenue (PV of lease payments = sales), cost of goods sold (carrying amount less PV of unguaranteed residual), and selling profit at commencement; the asset is derecognized and replaced by a net investment in the lease that earns interest income.",
          "Operating lease (lessor): keep the asset on the books and depreciate it; recognize lease income straight-line over the term — no selling profit and no derecognition.",
        ],
        scoringActions: [
          "Classify first; only sales-type/direct-financing leases derecognize the asset and record a net investment.",
          "For a sales-type lease, recognize selling profit at commencement and interest income = net investment × rate thereafter.",
          "For an operating lease, keep depreciating the asset and spread income straight-line.",
        ],
      },
      {
        id: "tp6",
        title: "Contract costs, modifications, principal vs agent & disclosures",
        priority: "medium",
        examinerFocus:
          "Peripheral but examinable mechanics: capitalizing incremental costs to obtain/fulfill a contract, treating a modification as a separate contract vs a cumulative catch-up vs prospective, distinguishing principal (gross) from agent (net) revenue, and the contract-asset/contract-liability presentation.",
        typicalQuestionForms: [
          "MCQ: decide whether a modification is a separate contract or a prospective/cumulative adjustment.",
          "MCQ: determine principal (gross) vs agent (net) presentation.",
          "MCQ: classify a balance as a contract asset, receivable, or contract liability (deferred revenue).",
        ],
        mustKnow: [
          "Incremental costs to obtain a contract (e.g., sales commissions) are capitalized and amortized if recoverable; costs to fulfill are capitalized when they relate directly to a contract, generate/enhance resources, and are expected to be recovered.",
          "A modification is a separate contract if it adds distinct goods/services at their standalone selling price; otherwise it is accounted for prospectively (remaining goods distinct) or as a cumulative catch-up (not distinct/single obligation).",
          "Principal (controls the good/service before transfer) recognizes gross revenue; an agent (arranges for another party to provide it) recognizes only the net commission. A contract asset is a conditional right to consideration; a contract liability (deferred revenue) is an obligation to transfer goods for consideration already received.",
        ],
        scoringActions: [
          "Capitalize recoverable incremental costs to obtain rather than expensing commissions immediately.",
          "Classify modifications by whether the added goods are distinct and priced at SSP before choosing prospective vs catch-up.",
          "Decide control to pick principal (gross) vs agent (net); label unconditional rights as receivables, conditional rights as contract assets.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Revenue and leases are formula-and-framework driven high-yield areas — target near-full marks on the lessee measurement TBS and the transaction-price allocation, and never miss a distinct-performance-obligation count.",
      timeBudget:
        "~1.25 min per MCQ; on a lease or long-term-contract TBS budget 4–5 minutes to build the PV/amortization schedule or the cost-to-cost table before entering any figure.",
      answerSequence: [
        "For revenue: walk the five steps in order, splitting obligations first, then price, then allocation by SSP, then timing.",
        "For variable consideration: pick expected value vs most-likely amount, apply the constraint, then allocate.",
        "For a lessee: run the five classification criteria, discount payments to the liability, build the ROU asset, then apply the correct expense pattern.",
        "For a lessor: classify, recognize selling profit only for sales-type, then interest income on net investment.",
        "For long-term contracts: compute cost-to-cost %, cumulative revenue, then current-period revenue; book any expected loss in full immediately.",
      ],
      qualityChecks: [
        "Did I test BOTH distinctness criteria before counting performance obligations?",
        "Did I CONSTRAIN variable consideration before including it in the transaction price?",
        "Did I add initial direct costs/prepayments (and subtract incentives) to the ROU asset instead of equating it to the liability?",
        "Did I apply a single straight-line expense for an operating lease and split interest/amortization for a finance lease?",
        "Did I recognize any anticipated contract loss immediately and in full?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The five-step model and identifying distinct performance obligations",
        testPointIds: ["tp1"],
        explanation: [
          "ASC 606 replaced dozens of industry-specific rules with a single principle: recognize revenue to depict the transfer of promised goods or services in an amount reflecting the consideration the entity expects to be entitled to. The mechanics are five sequential steps — identify the contract, identify the performance obligations, determine the transaction price, allocate that price to the obligations, and recognize revenue as each obligation is satisfied. Step 1 is a gate: a contract exists only when it has commercial substance, the parties are committed with identifiable rights and payment terms, and collection of the consideration is probable. If collectibility fails, no revenue is recognized until the criteria are met or the cash becomes non-refundable.",
          "The examiner's real interest is step 2. A promised good or service is a separate performance obligation only if it is distinct, which requires two things at once: it is capable of being distinct (the customer can benefit from it on its own or with resources readily available) AND it is distinct within the context of the contract (it is not highly integrated with, dependent on, or modifying other promised items). A machine and a year of routine maintenance are typically two obligations; a construction contract where the entity integrates materials, labor and installation into one building is a single obligation because the promises are not separable in context.",
          "Getting the obligation count right drives every later step, because the transaction price is allocated to obligations and revenue is recognized obligation by obligation. Warranty type also matters: an assurance-type warranty (the product will work as promised) is a cost accrual, not a separate obligation, while a service-type warranty sold separately IS a distinct obligation with deferred revenue. Options for additional goods (loyalty points, discounted renewals) are separate obligations only if they confer a material right the customer would not receive otherwise.",
        ],
        keyRules: [
          "Five steps: contract → performance obligations → transaction price → allocate → recognize.",
          "Distinct requires BOTH capable-of-being-distinct AND distinct-in-context.",
          "Assurance-type warranties are cost accruals; service-type warranties are separate obligations.",
        ],
        workedProblem: {
          scenario:
            "TelCo signs a two-year contract with a customer: a handset delivered at inception, unlimited network service for 24 months, and a one-year assurance warranty that the handset will function as promised. Separately, the customer receives 10,000 loyalty points (worth $100) usable on future purchases that non-contract customers would not receive. Identify the performance obligations.",
          steps: [
            "Handset: capable of being distinct (usable with other carriers) and distinct in context → separate performance obligation, satisfied at a point in time (delivery).",
            "24 months of network service: capable of being distinct and distinct in context → separate performance obligation, satisfied over time.",
            "Assurance-type warranty (handset will work as promised): NOT a performance obligation — it is a cost accrual under ASC 460/450.",
            "10,000 loyalty points conferring a material right the customer would not otherwise get → a separate performance obligation; a portion of the transaction price is deferred until redemption or expiry.",
          ],
          conclusion:
            "There are three performance obligations: the handset, the 24-month service, and the loyalty-point material right. The assurance warranty is accrued as a cost, not treated as an obligation.",
          markingNotes: [
            "Award marks for classifying the handset (point in time) and service (over time) as separate obligations.",
            "Award a mark for excluding the assurance warranty from the obligation count and treating it as a cost accrual.",
            "Award a mark for recognizing the loyalty points as a material right and a separate obligation.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Transaction price, variable consideration and SSP allocation",
        testPointIds: ["tp2"],
        explanation: [
          "Step 3 builds the transaction price — the consideration the entity expects to be entitled to, excluding amounts collected for third parties (like sales tax). When some of the consideration is variable (rebates, refunds, performance bonuses, penalties), it is first estimated using whichever method better predicts the amount: the expected value (probability-weighted, appropriate when there are many possible outcomes) or the most-likely amount (appropriate for a binary outcome such as earning a bonus or not). The estimate is then CONSTRAINED: variable consideration is included only to the extent it is probable that a significant revenue reversal will not occur when the uncertainty resolves. This constraint is the single most tested idea in step 3.",
          "Step 4 allocates the transaction price to the separate performance obligations in proportion to their standalone selling prices (SSPs). The best evidence of SSP is the observable price at which the entity sells the good or service separately; when that is unavailable, SSP is estimated using an adjusted market assessment, an expected-cost-plus-margin approach, or (only when the SSP is highly variable or uncertain) the residual approach. Any discount inherent in the bundle is generally spread across all obligations in proportion to SSP, unless observable evidence shows the discount relates to specific obligations.",
          "A significant financing component arises when the timing of payments gives either party a meaningful financing benefit — for example, an up-front prepayment for goods delivered years later, or extended payment terms. Revenue is then measured at the cash-selling (present-value) amount and the difference is presented as interest income or expense over the financing period, not as revenue. A practical expedient lets the entity ignore financing when the gap between performance and payment is one year or less, which the exam frequently invokes to keep the arithmetic focused on allocation.",
        ],
        keyRules: [
          "Estimate variable consideration by expected value or most-likely amount, then apply the constraint (no probable significant reversal).",
          "Allocate the transaction price by relative standalone selling price; spread bundle discounts across obligations absent specific evidence.",
          "Separate a significant financing component and present it as interest, not revenue (one-year practical expedient available).",
        ],
        formulas: [
          "Allocated price to an obligation = total transaction price × (obligation SSP ÷ Σ SSPs)",
          "Expected value = Σ (outcome × probability); most-likely amount = single most probable outcome",
        ],
        workedProblem: {
          scenario:
            "BuildCo sells a customer a package: equipment (SSP $80,000) and a two-year maintenance service (SSP $40,000). The contract price is $108,000, payable at delivery. BuildCo also offers a $6,000 performance bonus it will earn only if the equipment passes an acceptance test; management judges it 70% likely to earn the full bonus and 30% likely to earn nothing, and concludes a significant reversal is not probable. Allocate the transaction price and state the timing of recognition.",
          steps: [
            "Estimate variable consideration: binary outcome → most-likely amount = $6,000 (70% likely). Constraint satisfied (no probable significant reversal), so include it.",
            "Transaction price = $108,000 fixed + $6,000 bonus = $114,000.",
            "SSP total = $80,000 + $40,000 = $120,000. Allocate by relative SSP: equipment = $114,000 × 80/120 = $76,000; maintenance = $114,000 × 40/120 = $38,000.",
            "Equipment obligation satisfied at a point in time (delivery) → recognize $76,000 on delivery.",
            "Maintenance satisfied over time → recognize $38,000 straight-line over 24 months = $19,000 per year (about $1,583 per month).",
          ],
          conclusion:
            "The $114,000 transaction price is allocated $76,000 to equipment (recognized at delivery) and $38,000 to maintenance (recognized $19,000 per year). The bonus is included because it is estimated by the most-likely amount and passes the constraint.",
          markingNotes: [
            "Award a mark for using the most-likely amount ($6,000) and confirming the constraint before including it.",
            "Award a mark for the relative-SSP allocation ($76,000 / $38,000).",
            "Award a mark for correct timing: equipment at a point in time, maintenance straight-line over time.",
            "Deduct if the discount/bonus is allocated to only one obligation without evidence.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Timing of recognition: over time, point in time and cost-to-cost",
        testPointIds: ["tp3"],
        explanation: [
          "Step 5 recognizes revenue when (point in time) or as (over time) each performance obligation is satisfied, which happens when control of the good or service transfers to the customer. An obligation is satisfied over time if any one of three criteria is met: the customer simultaneously receives and consumes the benefits as the entity performs (routine services); the entity's performance creates or enhances an asset the customer controls as it is built; or the asset created has no alternative use to the entity and the entity has an enforceable right to payment for performance completed to date. Custom construction on a customer's land, or a specialized asset with a right to payment, typically qualifies for over-time recognition.",
          "If none of the three criteria is met, revenue is recognized at the point in time control transfers. The indicators of that transfer are a present right to payment, transfer of legal title, transfer of physical possession, transfer of the significant risks and rewards of ownership, and customer acceptance. No single indicator is decisive; the entity weighs them together. A standard product sold from inventory transfers control on delivery — a point-in-time obligation.",
          "For over-time obligations, progress is measured with an input method (costs incurred, labor hours, resources consumed) or an output method (units produced, milestones, surveys of performance). The cost-to-cost input method — costs incurred to date divided by total estimated costs — is the FAR workhorse and is the successor to percentage-of-completion. Cumulative revenue equals the contract price times the percentage complete, and current-period revenue is that cumulative amount minus revenue recognized in prior periods. Crucially, when total estimated costs exceed the contract price, the entire expected loss is recognized immediately in full, regardless of the stage of completion.",
        ],
        keyRules: [
          "Over time if any of three criteria met; otherwise point in time at transfer of control.",
          "Cost-to-cost %: costs to date ÷ total estimated costs; cumulative revenue = price × %; current revenue = cumulative − prior.",
          "Recognize an expected contract loss immediately and in full.",
        ],
        formulas: [
          "Percentage complete = costs incurred to date ÷ total estimated costs",
          "Cumulative revenue = contract price × percentage complete",
          "Current-period revenue = cumulative revenue − revenue recognized in prior periods",
        ],
      },
      {
        id: "sn4",
        title: "Lessee accounting: classification, measurement and expense patterns",
        testPointIds: ["tp4"],
        explanation: [
          "ASC 842 brought virtually all leases onto the lessee's balance sheet: for any lease longer than 12 months the lessee recognizes a lease liability and a corresponding right-of-use (ROU) asset. Classification still matters, but now it drives the income-statement pattern rather than whether the lease is on the balance sheet. A lease is a finance lease if ANY of five criteria is met: title transfers at the end of the term; a purchase option is reasonably certain to be exercised; the lease term is a major part of the asset's remaining economic life; the present value of the lease payments (plus a lessee residual value guarantee) equals substantially all of the asset's fair value; or the asset is so specialized it has no alternative use to the lessor. If none is met, the lease is operating.",
          "Initial measurement is identical for both types. The lease liability is the present value of the lease payments, discounted at the rate implicit in the lease if the lessee can readily determine it, otherwise the lessee's incremental borrowing rate. The ROU asset starts from that liability and is adjusted: plus any initial direct costs and prepaid lease payments, minus any lease incentives received. A frequent exam trap is to set the ROU asset equal to the liability when initial direct costs or prepayments exist — those items make the ROU asset larger than the liability.",
          "The expense pattern is where finance and operating leases diverge, and where TBS marks are won. A finance lease produces TWO expenses: interest on the lease liability (beginning liability × discount rate, which declines each period) and straight-line amortization of the ROU asset; their sum is front-loaded (higher in early years). An operating lease produces a SINGLE lease expense recognized straight-line over the term; behind the scenes the liability still accretes interest, and the ROU asset is amortized by the plug amount needed to keep total expense flat. Total cash paid is the same either way; only the timing and line-item labels differ.",
        ],
        keyRules: [
          "Finance lease if any one of the five criteria is met; otherwise operating.",
          "Lease liability = PV of lease payments; ROU asset = liability + initial direct costs + prepayments − incentives.",
          "Finance = interest + straight-line amortization (front-loaded total); operating = single straight-line expense.",
        ],
        formulas: [
          "Lease liability = Σ (lease payment × PV factor at the discount rate)",
          "Interest expense (period) = beginning lease liability × discount rate",
          "Finance-lease ROU amortization = ROU asset ÷ lease term (straight-line)",
          "Operating-lease expense = total undiscounted lease payments ÷ lease term",
        ],
        workedProblem: {
          scenario:
            "On 1/1, LesseeCo leases equipment for five years with payments of $50,000 due at the END of each year. The rate implicit in the lease is 8% (PV of an ordinary annuity, 5 periods, 8% = 3.99271). There are no initial direct costs, prepayments, incentives, purchase option or title transfer, and the term is a major part of the asset's economic life so it is a finance lease. Compute the initial lease liability and ROU asset, and the year-1 income-statement effect. Then state the year-1 expense had it been an operating lease.",
          steps: [
            "Lease liability = $50,000 × 3.99271 = $199,636 (rounded).",
            "ROU asset = $199,636 (no initial direct costs, prepayments or incentives to adjust).",
            "Finance lease year-1 interest = $199,636 × 8% = $15,971.",
            "Principal reduction = $50,000 payment − $15,971 interest = $34,029; ending liability = $199,636 − $34,029 = $165,607.",
            "Finance lease ROU amortization = $199,636 ÷ 5 = $39,927.",
            "Finance lease total year-1 expense = $15,971 interest + $39,927 amortization = $55,898.",
            "Operating lease year-1 expense = total payments $250,000 ÷ 5 = $50,000 (single straight-line line item).",
          ],
          conclusion:
            "Both treatments start with a $199,636 lease liability and ROU asset. A finance lease reports $55,898 of total expense in year 1 (front-loaded: $15,971 interest + $39,927 amortization), while an operating lease reports a single $50,000 straight-line expense — the classification changes the pattern and labeling, not the cash.",
          markingNotes: [
            "Award a mark for the $199,636 lease liability computed as PV of the payments.",
            "Award a mark for the ROU asset equal to the liability given no adjusting items.",
            "Award marks for year-1 interest $15,971 and amortization $39,927 under the finance lease.",
            "Award a mark for the $50,000 single straight-line operating-lease expense.",
            "Deduct if the ROU asset is amortized on the operating-lease straight-line basis while also splitting interest.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Lessor accounting: sales-type, direct financing and operating leases",
        testPointIds: ["tp5"],
        explanation: [
          "The lessor classifies a lease using the same five criteria the lessee uses. If any is met, the lease is a sales-type lease. If none is met but the present value of the payments plus any third-party residual guarantee is substantially all the asset's fair value AND collection is probable, the lease is a direct financing lease. Otherwise it is an operating lease. Classification determines whether the lessor keeps the asset on its books (operating) or derecognizes it and records a net investment in the lease (sales-type and direct financing).",
          "In a sales-type lease the lessor is effectively selling the asset on financing terms, so it recognizes at commencement: sales revenue equal to the present value of the lease payments, cost of goods sold equal to the asset's carrying amount (less the present value of any unguaranteed residual), and the resulting selling profit immediately. The asset is derecognized and replaced by a net investment in the lease equal to the PV of the payments plus any residual. Thereafter the lessor recognizes interest income equal to the beginning net investment times the rate implicit in the lease, exactly mirroring the lessee's liability accretion. A direct financing lease has no (or negative) selling profit at commencement, so any profit is deferred and recognized over the term as part of interest income.",
          "An operating lease is the simple case: the lessor keeps the leased asset on its balance sheet, continues to depreciate it, and recognizes lease income on a straight-line basis over the term. There is no selling profit and no derecognition. The exam trap is to record selling profit or remove the asset for an operating lease, or conversely to leave the asset on the books for a sales-type lease — always classify first, then choose the recognition model.",
        ],
        keyRules: [
          "Sales-type if any of the five criteria is met; direct financing if PV substantially all FV and collection probable; else operating.",
          "Sales-type: recognize sales (PV of payments), COGS (carrying amount less PV of unguaranteed residual) and selling profit at commencement; then interest income on net investment.",
          "Operating (lessor): keep and depreciate the asset; recognize income straight-line — no selling profit, no derecognition.",
        ],
        formulas: [
          "Selling profit (sales-type) = PV of lease payments − (carrying amount − PV of unguaranteed residual)",
          "Interest income (period) = beginning net investment in the lease × rate implicit in the lease",
        ],
        workedProblem: {
          scenario:
            "LessorCo leases equipment (carrying amount $160,000) to a customer for five years with annual payments due at year-end. The rate implicit in the lease is 8% and the present value of the payments equals the equipment's fair value of $200,000 (there is no unguaranteed residual). The lease transfers title at the end of the term. Determine the classification, the selling profit at commencement, and the year-1 interest income.",
          steps: [
            "Classification: title transfers at end of term → a sales-type lease; derecognize the asset and record a net investment.",
            "Sales revenue = PV of lease payments = $200,000.",
            "Cost of goods sold = carrying amount − PV of unguaranteed residual = $160,000 − $0 = $160,000.",
            "Selling profit at commencement = $200,000 − $160,000 = $40,000.",
            "Net investment in the lease at commencement = $200,000.",
            "Year-1 interest income = $200,000 × 8% = $16,000.",
          ],
          conclusion:
            "The lease is sales-type: LessorCo recognizes $200,000 sales, $160,000 COGS and $40,000 selling profit at commencement, records a $200,000 net investment, and earns $16,000 of interest income in year 1. Had it been an operating lease, no profit would be recognized and the $160,000 asset would remain on the books and be depreciated.",
          markingNotes: [
            "Award a mark for classifying it as sales-type because title transfers.",
            "Award a mark for the $40,000 selling profit recognized at commencement.",
            "Award a mark for $16,000 year-1 interest income on the $200,000 net investment.",
            "Deduct if the asset is left on the books or depreciated as in an operating lease.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp4"],
        style: "Task-based simulation (lessee measurement & expense)",
        question:
          "On 1/1 RetailCo leases a fixture for four years with payments of $30,000 due at the END of each year; the rate implicit in the lease is 6% (PV ordinary annuity, 4 periods, 6% = 3.46511). RetailCo pays $5,000 of initial direct costs and receives a $2,000 incentive from the lessor. The lease is classified as a finance lease. Compute the initial lease liability and ROU asset, year-1 interest expense, year-1 ROU amortization, and the ending lease liability.",
        answerPlan: [
          "Lease liability = PV of the $30,000 payments at 6%.",
          "ROU asset = liability + initial direct costs − incentive.",
          "Interest = beginning liability × 6%; principal reduction = payment − interest.",
          "ROU amortization = ROU asset ÷ 4 years (finance lease straight-line).",
        ],
        modelAnswer:
          "Lease liability = $30,000 × 3.46511 = $103,953. ROU asset = $103,953 + $5,000 initial direct costs − $2,000 incentive = $106,953. Year-1 interest = $103,953 × 6% = $6,237. Principal reduction = $30,000 − $6,237 = $23,763, so the ending lease liability = $103,953 − $23,763 = $80,190. Year-1 ROU amortization (finance lease, straight-line) = $106,953 ÷ 4 = $26,738. Total year-1 expense = $6,237 interest + $26,738 amortization = $32,975, which is front-loaded relative to later years.",
        markingGuide: [
          "1 mark: lease liability $103,953 as the PV of the payments.",
          "1 mark: ROU asset $106,953 (liability plus initial direct costs minus incentive) — not equal to the liability.",
          "1 mark: year-1 interest $6,237 and ending liability $80,190.",
          "1 mark: ROU amortization $26,738 on the finance-lease straight-line basis.",
          "Deduct if initial direct costs/incentive are ignored in the ROU asset.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (obligations, variable consideration & allocation)",
        question:
          "SoftCo signs a contract to deliver a software license (SSP $90,000, satisfied at a point in time on delivery) and 18 months of hosting service (SSP $30,000, satisfied over time). The fixed fee is $110,000. SoftCo will also receive a $10,000 milestone bonus if uptime exceeds 99.9%; it estimates a probability-weighted expected value of $7,000 and concludes a significant reversal is not probable. Determine the transaction price, allocate it, and state the recognition timing.",
        answerPlan: [
          "Estimate variable consideration (expected value $7,000) and confirm the constraint.",
          "Transaction price = fixed + constrained variable amount.",
          "Allocate by relative standalone selling price.",
          "State timing for each obligation.",
        ],
        modelAnswer:
          "Because uptime has a range of possible outcomes, expected value ($7,000) is the appropriate estimate; the constraint is satisfied, so it is included. Transaction price = $110,000 fixed + $7,000 = $117,000. There are two performance obligations (the license and the hosting) with SSPs of $90,000 and $30,000 (total $120,000). Allocation by relative SSP: license = $117,000 × 90/120 = $87,750; hosting = $117,000 × 30/120 = $29,250. The license is recognized at a point in time on delivery ($87,750). The hosting is recognized over time straight-line, $29,250 ÷ 18 months = $1,625 per month.",
        markingGuide: [
          "1 mark: expected value $7,000 estimate with the constraint applied before inclusion.",
          "1 mark: transaction price $117,000 and identification of two performance obligations.",
          "1 mark: relative-SSP allocation ($87,750 license / $29,250 hosting).",
          "1 mark: correct timing — license at a point in time, hosting straight-line over 18 months.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp3", "tp5"],
        style: "MCQ set rationale (long-term contract & lessor)",
        question:
          "(a) ConstructCo has a $5,000,000 fixed-price contract meeting the over-time criteria. Total estimated costs are $4,000,000; costs incurred to the end of year 1 are $1,200,000. Compute year-1 revenue and gross profit using cost-to-cost. (b) In year 2, estimated total costs rise to $5,200,000 while cumulative costs reach $2,600,000. Explain the year-2 treatment. (c) A lessor classifies a lease as operating; state how it recognizes income and treats the asset.",
        answerPlan: [
          "Year-1 %: $1.2M ÷ $4.0M; revenue = 30% × $5M; gross profit = revenue − cost.",
          "Year-2: total estimated cost now exceeds price → recognize the whole expected loss immediately.",
          "Operating lessor: keep/depreciate the asset, income straight-line.",
        ],
        modelAnswer:
          "(a) Percentage complete = $1,200,000 ÷ $4,000,000 = 30%. Year-1 revenue = 30% × $5,000,000 = $1,500,000; year-1 cost = $1,200,000; year-1 gross profit = $300,000. (b) In year 2 total estimated costs ($5,200,000) exceed the $5,000,000 contract price, so the contract is loss-making: the entire anticipated loss of $200,000 must be recognized immediately and in full in year 2, regardless of the percentage complete (this reverses the year-1 profit and provides for the remaining loss). (c) An operating-lease lessor keeps the leased asset on its balance sheet, continues to depreciate it, and recognizes lease income on a straight-line basis over the lease term — no selling profit and no derecognition.",
        markingGuide: [
          "1 mark: year-1 revenue $1,500,000 and gross profit $300,000 via cost-to-cost.",
          "1 mark: recognizing the full $200,000 expected loss immediately in year 2.",
          "1 mark: operating lessor keeps and depreciates the asset with straight-line income.",
          "Deduct if the year-2 loss is spread over remaining performance instead of recognized in full.",
        ],
      },
    ],
  }),

  // ===================================================================
  // FAR M4 — Investments, business combinations & consolidations
  // (ASC 320 / 321 / 323 / 326 / 805 / 810)
  // ===================================================================
  "cpa-far-m4": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Debt investments: HTM, AFS, trading & CECL",
        priority: "critical",
        examinerFocus:
          "Classifying a debt security into held-to-maturity, available-for-sale or trading, and knowing WHERE each carries and reports its gains: amortized cost (HTM), fair value with unrealized gains/losses in OCI (AFS), or fair value through net income (trading). Credit impairment now runs through the CECL allowance model.",
        typicalQuestionForms: [
          "MCQ: given a classification and year-end fair value, determine the balance-sheet carrying amount and where the unrealized gain/loss is reported.",
          "TBS: reclassify a portfolio and compute the net income vs OCI effect.",
        ],
        mustKnow: [
          "HTM debt (positive intent and ability to hold to maturity) is carried at amortized cost; AFS debt is carried at fair value with unrealized gains/losses in OCI; trading debt is carried at fair value with unrealized gains/losses in net income.",
          "Realized gains/losses on sale go to net income for all three categories; only the UNREALIZED gain/loss placement differs (OCI for AFS, net income for trading, none recognized for HTM).",
          "Credit losses use the CECL (current expected credit loss) model: an allowance for expected losses is recorded through net income; for AFS debt, credit-related declines run through an allowance in net income while non-credit fair-value changes remain in OCI.",
        ],
        scoringActions: [
          "Identify the classification first, then place the unrealized change (amortized cost / OCI / net income).",
          "Separate realized (always net income) from unrealized (category-dependent) amounts.",
          "Route expected credit losses through the CECL allowance to net income, not directly against the security's cost.",
        ],
      },
      {
        id: "tp2",
        title: "Equity securities at fair value through net income",
        priority: "high",
        examinerFocus:
          "Recognizing that most equity investments (without significant influence) are measured at fair value with ALL changes — realized and unrealized — in net income, and applying the measurement alternative for equity securities without a readily determinable fair value.",
        typicalQuestionForms: [
          "MCQ: compute the net income effect of holding an equity security across a year of fair-value changes.",
          "MCQ: apply the cost-minus-impairment measurement alternative for a private-company holding.",
        ],
        mustKnow: [
          "Equity securities without significant influence are measured at fair value through net income (FVTNI); both realized and unrealized changes hit net income each period — there is no AFS/OCI treatment for equity securities under ASC 321.",
          "The measurement alternative lets an equity security without a readily determinable fair value be carried at cost, less impairment, plus/minus observable price changes for identical/similar investments of the same issuer.",
          "Dividends received on FVTNI equity securities are recognized in net income as dividend income (they are not netted against the carrying amount, unlike the equity method).",
        ],
        scoringActions: [
          "Put ALL equity-security fair-value changes (unrealized and realized) into net income — never OCI.",
          "Use the cost-minus-impairment measurement alternative only when there is no readily determinable fair value, adjusting for observable price changes.",
          "Recognize dividends as income rather than as a reduction of the investment.",
        ],
      },
      {
        id: "tp3",
        title: "Equity method for significant influence",
        priority: "critical",
        examinerFocus:
          "Applying the equity method when the investor has significant influence (generally 20–50% ownership): recording the investor's share of investee income, reducing the investment for dividends, and amortizing the basis difference attributable to undervalued depreciable assets (goodwill is not amortized).",
        typicalQuestionForms: [
          "MCQ: roll forward the investment account for one year given income and dividends.",
          "TBS: allocate the excess of cost over book value to identifiable assets and goodwill, then compute equity-method income after amortization.",
        ],
        mustKnow: [
          "Significant influence (typically 20–50% of voting stock, or board representation) triggers the equity method: the investment is recorded at cost, increased by the investor's share of investee net income and decreased by the investor's share of dividends.",
          "The excess of cost over the investor's share of the investee's book value is allocated to undervalued identifiable assets (amortized/depreciated over their lives, reducing equity-method income) and to goodwill (not amortized).",
          "Equity-method income = investor's % × investee net income − amortization of the basis differences; dividends received reduce the carrying amount and are NOT income.",
        ],
        scoringActions: [
          "Confirm significant influence before applying the equity method rather than FVTNI.",
          "Split the purchase-price excess into identifiable-asset differences (amortize) and goodwill (do not amortize).",
          "Reduce the investment for dividends and reduce equity-method income for basis-difference amortization.",
        ],
      },
      {
        id: "tp4",
        title: "Business combinations: acquisition method, goodwill & NCI",
        priority: "critical",
        examinerFocus:
          "Applying the acquisition method: measuring identifiable assets acquired and liabilities assumed at fair value, measuring any non-controlling interest at fair value, and computing goodwill (or a bargain-purchase gain) as the residual. Acquisition-related costs are expensed, not capitalized.",
        typicalQuestionForms: [
          "MCQ: compute goodwill given consideration transferred, NCI fair value and the fair value of net identifiable assets.",
          "TBS: build the acquisition-date fair values, compute goodwill or a bargain-purchase gain, and identify how acquisition costs are treated.",
        ],
        mustKnow: [
          "Goodwill = consideration transferred + fair value of any non-controlling interest + fair value of any previously held equity interest − fair value of net identifiable assets acquired.",
          "If that computation is negative, it is a bargain purchase: recognize a gain in net income (after reassessing the fair values) rather than negative goodwill.",
          "Acquisition-related costs (legal, advisory, due diligence) are expensed as incurred; costs to issue debt/equity are treated under the relevant financial-instrument rules, not added to goodwill.",
        ],
        scoringActions: [
          "Measure identifiable assets/liabilities AND non-controlling interest at fair value before taking the residual.",
          "Recognize a bargain-purchase gain (not negative goodwill) when the residual is negative.",
          "Expense acquisition-related costs; keep them out of the goodwill computation.",
        ],
      },
      {
        id: "tp5",
        title: "Consolidation procedures & intercompany eliminations",
        priority: "critical",
        examinerFocus:
          "Combining parent and subsidiary line by line, eliminating the investment against subsidiary equity, presenting non-controlling interest within equity, and — the heavily tested part — eliminating intercompany transactions including deferral of unrealized profit in ending inventory.",
        typicalQuestionForms: [
          "MCQ: compute consolidated revenue/COGS after eliminating intercompany sales and unrealized profit.",
          "TBS: prepare consolidation eliminations and present non-controlling interest.",
        ],
        mustKnow: [
          "Consolidation combines 100% of the subsidiary's assets, liabilities, revenues and expenses with the parent's, then eliminates the parent's investment account against the subsidiary's equity at acquisition; non-controlling interest is presented within consolidated equity.",
          "Intercompany transactions are eliminated in full: intercompany sales are removed from revenue and COGS, intercompany receivables/payables are offset, and intercompany dividends are eliminated.",
          "Unrealized profit in ending inventory (goods bought intercompany and still on hand) is deferred/eliminated until the inventory is sold to an outside party; downstream (parent→sub) unrealized profit is fully attributed to the parent, while upstream (sub→parent) is shared between the parent and NCI.",
        ],
        scoringActions: [
          "Eliminate intercompany sales against COGS and offset intercompany balances before totaling.",
          "Defer unrealized intercompany profit in ending inventory; recognize it only when sold externally.",
          "Present non-controlling interest within equity and allocate upstream unrealized profit between parent and NCI.",
        ],
      },
      {
        id: "tp6",
        title: "Variable interest entities & the primary beneficiary",
        priority: "medium",
        examinerFocus:
          "Recognizing that control can exist without a voting majority: a variable interest entity (VIE) is consolidated by its primary beneficiary — the party with power over the activities that most significantly affect economic performance and exposure to significant losses or benefits.",
        typicalQuestionForms: [
          "MCQ: identify which party must consolidate a VIE.",
          "MCQ: determine whether an entity is a VIE (insufficient equity at risk, equity holders lacking power).",
        ],
        mustKnow: [
          "An entity is a VIE when the equity investment at risk is insufficient to finance activities without additional support, or the equity holders lack the power to direct significant activities or lack the obligation to absorb losses/right to receive returns.",
          "The primary beneficiary consolidates the VIE; it is the party that BOTH has the power to direct the activities that most significantly affect the VIE's economic performance AND has the obligation to absorb losses or the right to receive benefits that could be significant.",
          "Consolidation of a VIE does not depend on owning a majority of the voting equity — it turns on power and economic exposure, distinguishing the VIE model from the voting-interest model.",
        ],
        scoringActions: [
          "Test whether the entity is a VIE (insufficient equity at risk or equity holders lacking power) before applying the voting model.",
          "Identify the primary beneficiary by BOTH power and significant economic exposure, not by ownership percentage alone.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Classification and formula points here are gettable in full — lock in the debt-security placement grid, the equity-method rollforward, and the goodwill formula, and never lose the unrealized-intercompany-profit deferral on a consolidation TBS.",
      timeBudget:
        "~1.25 min per MCQ; on an equity-method or goodwill TBS budget 3–4 minutes to lay out the rollforward or the acquisition-date fair-value schedule before entering figures.",
      answerSequence: [
        "For investments: classify first (HTM / AFS / trading / FVTNI equity / equity method), then place gains (amortized cost, OCI, or net income).",
        "For the equity method: record cost, add share of income, subtract dividends and basis-difference amortization.",
        "For a combination: fair-value the identifiable net assets and NCI, then take goodwill as the residual (or a bargain-purchase gain).",
        "For consolidation: combine line by line, eliminate the investment against subsidiary equity, remove intercompany transactions, and defer unrealized profit.",
        "For a VIE: confirm it is a VIE, then find the primary beneficiary by power plus economic exposure.",
      ],
      qualityChecks: [
        "Did I put AFS unrealized gains in OCI and trading/equity-security changes in net income?",
        "Did I amortize only the identifiable-asset basis difference and leave goodwill un-amortized in the equity method?",
        "Did I include NCI at fair value in the goodwill computation and expense acquisition costs?",
        "Did I defer unrealized intercompany profit in ending inventory until an external sale?",
        "Did I use power + economic exposure (not ownership %) to pick the VIE primary beneficiary?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Debt and equity investments: classification and where gains land",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "Investment accounting is mostly a placement problem: once you classify the security, the measurement and the location of gains follow mechanically. Debt securities fall into three buckets. Held-to-maturity (HTM) requires both the positive intent and the ability to hold the security to maturity and is carried at amortized cost — fair-value changes are ignored on the balance sheet. Available-for-sale (AFS) debt is carried at fair value, but the unrealized gains and losses bypass net income and accumulate in other comprehensive income (OCI). Trading debt is carried at fair value with all unrealized changes flowing straight through net income. In every category, a REALIZED gain or loss on sale hits net income; only the treatment of the UNREALIZED change differs.",
          "Equity securities follow a different standard, ASC 321. When the investor lacks significant influence, the equity security is measured at fair value through net income (FVTNI): both realized and unrealized changes are recognized in net income every period — there is no OCI treatment for equity securities. When an equity security has no readily determinable fair value, the entity may elect the measurement alternative and carry it at cost less impairment, adjusted for observable price changes in identical or similar securities of the same issuer. Dividends on FVTNI equity securities are dividend income, not a reduction of the carrying amount.",
          "Credit impairment on debt runs through the current expected credit loss (CECL) model: the entity estimates lifetime expected credit losses and records an allowance through net income, rather than waiting for a loss to be incurred. For AFS debt, the split is subtle — credit-related declines are recognized through an allowance in net income, while the remaining (non-credit) fair-value change stays in OCI. The recurring exam trap is to place AFS unrealized gains in net income, or to route an equity-security fair-value change through OCI; keeping the placement grid straight is worth several MCQ points.",
        ],
        keyRules: [
          "HTM debt = amortized cost; AFS debt = fair value with unrealized gains/losses in OCI; trading debt = fair value through net income.",
          "Equity securities without significant influence = fair value through net income (no OCI); measurement alternative = cost less impairment plus observable price changes.",
          "Realized gains/losses always hit net income; expected credit losses run through a CECL allowance to net income.",
        ],
        formulas: [
          "Unrealized gain/loss = fair value at period-end − carrying amount before remeasurement",
          "AFS carrying amount = fair value (unrealized change accumulated in OCI, not net income)",
        ],
      },
      {
        id: "sn2",
        title: "The equity method: rollforward and basis-difference amortization",
        testPointIds: ["tp3"],
        explanation: [
          "When an investor has significant influence over an investee — presumed at 20% to 50% of the voting stock, or evidenced by board seats, participation in policy-making or material intercompany transactions — the equity method applies. The investment is recorded initially at cost and then behaves like a proportionate slice of the investee's equity: it increases by the investor's share of the investee's net income (recorded as 'equity in earnings' in the investor's income statement) and decreases by the investor's share of dividends declared. Dividends are treated as a return of investment, not as income, which is the opposite of the FVTNI equity-security treatment.",
          "Because the investor usually pays more than its share of the investee's book value, the excess must be analyzed. The difference between the purchase price and the investor's share of the investee's book value is allocated first to the investor's share of any undervalued (or overvalued) identifiable net assets — for example, equipment or a customer list carried below fair value — and the remainder to goodwill. The portion assigned to depreciable or amortizable identifiable assets is amortized over those assets' remaining lives and REDUCES equity-method income each year. The portion assigned to goodwill is NOT amortized (though the equity-method investment as a whole is tested for impairment).",
          "The rollforward therefore has four moving parts each period: beginning balance, plus the investor's share of investee income, minus amortization of the identifiable-asset basis difference, minus dividends received. A candidate who forgets the basis-difference amortization overstates equity-method income; one who nets dividends into income double-counts. The equity method is a favorite TBS because it links three ideas — significant influence, purchase-price allocation, and a multi-line rollforward — into a single numeric answer.",
        ],
        keyRules: [
          "Significant influence (≈20–50%) → equity method: cost + share of income − share of dividends.",
          "Allocate the purchase-price excess to identifiable assets (amortize) and goodwill (do not amortize).",
          "Dividends reduce the investment carrying amount and are not income.",
        ],
        formulas: [
          "Equity-method income = investor % × investee net income − amortization of identifiable-asset basis difference",
          "Ending investment = beginning + equity-method income − dividends received",
          "Basis difference to identifiable asset = investor % × (fair value − book value); goodwill = residual excess",
        ],
        workedProblem: {
          scenario:
            "On 1/1 InvestorCo buys 30% of Target for $500,000 when Target's net assets have a book value of $1,400,000. The only difference between fair and book value is equipment undervalued by $100,000 with a 10-year remaining life; the rest of the excess is goodwill. During the year Target reports net income of $200,000 and pays dividends of $60,000. Compute equity-method income and the ending investment balance.",
          steps: [
            "Investor share of book value = 30% × $1,400,000 = $420,000.",
            "Excess of cost over book value = $500,000 − $420,000 = $80,000.",
            "Allocate to equipment = 30% × $100,000 undervaluation = $30,000; remainder to goodwill = $80,000 − $30,000 = $50,000.",
            "Equipment basis-difference amortization = $30,000 ÷ 10 years = $3,000 per year; goodwill is not amortized.",
            "Equity-method income = 30% × $200,000 − $3,000 = $60,000 − $3,000 = $57,000.",
            "Dividends received = 30% × $60,000 = $18,000 (reduces the investment, not income).",
            "Ending investment = $500,000 + $57,000 − $18,000 = $539,000.",
          ],
          conclusion:
            "InvestorCo reports $57,000 of equity-method income (its $60,000 share of earnings less $3,000 of equipment amortization) and carries the investment at $539,000 at year-end. The $50,000 of goodwill inside the investment is not amortized.",
          markingNotes: [
            "Award a mark for allocating the $80,000 excess to $30,000 equipment and $50,000 goodwill.",
            "Award a mark for $3,000 equipment amortization and leaving goodwill un-amortized.",
            "Award a mark for equity-method income of $57,000.",
            "Award a mark for the $539,000 ending investment after subtracting the $18,000 dividend.",
            "Deduct if dividends are treated as income or basis-difference amortization is omitted.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Business combinations: the acquisition method and goodwill",
        testPointIds: ["tp4"],
        explanation: [
          "A business combination is accounted for using the acquisition method, which has four conceptual steps: identify the acquirer, determine the acquisition date, recognize and measure the identifiable assets acquired and liabilities assumed at their acquisition-date fair values, and recognize and measure goodwill or a bargain-purchase gain. The identifiable net assets are measured at fair value regardless of their pre-combination carrying amounts on the target's books; this includes recognizing separately identifiable intangibles (customer lists, patents, trade names) that the target may never have recorded.",
          "Goodwill is the residual: consideration transferred, plus the fair value of any non-controlling interest, plus the fair value of any previously held equity interest in the target, minus the fair value of the identifiable net assets acquired. The inclusion of the NCI at fair value is the 'full goodwill' approach US GAAP requires, and it is a frequent exam distinction — candidates who compute goodwill using only the parent's share understate it. When the residual comes out negative, the transaction is a bargain purchase: after reassessing whether all assets and liabilities were correctly identified and measured, the acquirer recognizes the excess as a gain in net income, not as negative goodwill.",
          "Costs receive specific treatment. Acquisition-related costs — finder's fees, legal, advisory, due-diligence and general administrative costs — are expensed as incurred; they never increase goodwill or the cost of the acquired net assets. Costs to issue equity reduce additional paid-in capital, and costs to issue debt are treated as debt-issuance costs (a contra-liability amortized to interest). Contingent consideration (an earn-out) is measured at fair value on the acquisition date and, if a liability, remeasured through net income thereafter.",
        ],
        keyRules: [
          "Acquisition method: fair-value the identifiable assets/liabilities and the non-controlling interest.",
          "Goodwill = consideration + NCI fair value + prior equity interest fair value − FV of identifiable net assets.",
          "Negative residual = bargain-purchase gain; acquisition-related costs are expensed.",
        ],
        formulas: [
          "Goodwill = consideration transferred + FV of NCI + FV of previously held interest − FV of net identifiable assets",
          "Bargain-purchase gain = FV of net identifiable assets − (consideration + FV of NCI + FV of prior interest), when positive",
        ],
        workedProblem: {
          scenario:
            "AcquirerCo pays $900,000 cash for 80% of Target. The fair value of the 20% non-controlling interest is $220,000. The fair value of Target's identifiable net assets is $1,000,000. AcquirerCo also incurs $30,000 of legal and advisory fees for the deal. Compute goodwill and state the treatment of the fees. Then state the treatment if instead AcquirerCo had paid only $700,000 with the same $220,000 NCI fair value.",
          steps: [
            "Goodwill = consideration $900,000 + NCI fair value $220,000 − FV of net identifiable assets $1,000,000 = $120,000.",
            "The $30,000 of legal/advisory fees are acquisition-related costs → expensed as incurred; they do NOT increase goodwill.",
            "Alternative: consideration $700,000 + NCI $220,000 = $920,000 vs FV of net identifiable assets $1,000,000 → residual = −$80,000.",
            "A negative residual is a bargain purchase: after reassessing the fair values, recognize an $80,000 gain in net income (no goodwill).",
          ],
          conclusion:
            "Goodwill is $120,000 under the full-goodwill (NCI-at-fair-value) approach, and the $30,000 of deal costs are expensed. Had the price been $700,000, the acquisition would be a $80,000 bargain-purchase gain recognized in net income.",
          markingNotes: [
            "Award a mark for including NCI at fair value in the goodwill formula ($120,000, not the parent-only figure).",
            "Award a mark for expensing the $30,000 acquisition-related costs.",
            "Award a mark for recognizing the $80,000 bargain-purchase gain in the alternative scenario.",
            "Deduct if deal costs are capitalized into goodwill or negative goodwill is recorded.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Consolidation procedures and intercompany eliminations",
        testPointIds: ["tp5"],
        explanation: [
          "Consolidated financial statements present the parent and its subsidiaries as a single economic entity, so the starting point is to add together 100% of the subsidiary's assets, liabilities, revenues and expenses with the parent's — even when the parent owns less than 100%. Two structural eliminations follow. First, the parent's investment account is eliminated against the subsidiary's equity at the acquisition date, with any excess allocated to identifiable assets and goodwill as in a business combination. Second, non-controlling interest — the portion of the subsidiary not owned by the parent — is presented within consolidated equity, and the NCI's share of the subsidiary's net income is shown in the consolidated income statement.",
          "Because the consolidated entity cannot transact with itself, all intercompany transactions are eliminated in full. Intercompany sales are removed from both consolidated revenue and consolidated cost of goods sold; intercompany receivables and payables are offset; intercompany dividends and intercompany interest are eliminated. The most heavily tested wrinkle is unrealized intercompany profit: when one affiliate sells inventory to another at a markup and some of that inventory is still on hand at year-end, the profit embedded in the retained inventory has not been earned from the perspective of the consolidated entity and must be deferred until the goods are sold to an outside party.",
          "The direction of the intercompany sale determines how the deferred profit is shared. Downstream sales (parent to subsidiary) have their unrealized profit attributed entirely to the parent (controlling interest). Upstream sales (subsidiary to parent) have their unrealized profit shared between the controlling interest and the non-controlling interest in proportion to ownership, because the selling entity is partly owned by outsiders. Missing this deferral overstates consolidated inventory and net income, and misallocating an upstream deferral distorts the NCI — both are common point losses on the consolidation TBS.",
        ],
        keyRules: [
          "Combine 100% of the subsidiary, eliminate the investment against subsidiary equity, present NCI within equity.",
          "Eliminate intercompany sales against COGS and offset intercompany balances in full.",
          "Defer unrealized intercompany profit in ending inventory; downstream deferrals hit the parent, upstream deferrals split between parent and NCI.",
        ],
        formulas: [
          "Unrealized profit in ending inventory = intercompany gross profit rate × intercompany goods remaining on hand",
          "Consolidated revenue = parent revenue + subsidiary revenue − intercompany sales",
        ],
        workedProblem: {
          scenario:
            "Parent owns 100% of Sub. During the year Parent sold inventory to Sub for $100,000; the inventory had cost Parent $70,000. At year-end Sub still holds 40% of those goods; the rest were sold to outside customers. Determine the consolidation eliminations for intercompany sales and unrealized profit.",
          steps: [
            "Eliminate the intercompany sale: reduce consolidated sales by $100,000 and consolidated COGS by $100,000 (the transfer is internal).",
            "Intercompany gross profit = $100,000 − $70,000 = $30,000; gross profit rate = 30%.",
            "Goods still on hand = 40% × $100,000 transfer price = $40,000; unrealized profit in ending inventory = 30% × $40,000 = $12,000.",
            "Defer the $12,000: reduce consolidated ending inventory by $12,000 and increase COGS by $12,000 (removing the unearned profit).",
            "Because this is a downstream (parent→sub) sale and the sub is wholly owned, the entire $12,000 deferral is attributed to the controlling interest.",
          ],
          conclusion:
            "The consolidation eliminates $100,000 of intercompany sales against COGS and defers $12,000 of unrealized profit in ending inventory (reducing inventory and increasing COGS by $12,000). The $12,000 profit is recognized only when Sub sells the remaining goods to outside parties.",
          markingNotes: [
            "Award a mark for eliminating the full $100,000 intercompany sale against COGS.",
            "Award a mark for computing the 30% gross profit rate and the $40,000 of goods on hand.",
            "Award a mark for deferring $12,000 of unrealized profit in ending inventory.",
            "Deduct if profit on the 60% sold externally is deferred or if the intercompany sale is left in consolidated revenue.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Variable interest entities and the primary beneficiary",
        testPointIds: ["tp6"],
        explanation: [
          "Consolidation is normally driven by a voting majority, but the VIE model captures situations where control exists without owning more than half the voting stock. An entity is a variable interest entity when the equity investment at risk is insufficient to finance its activities without additional subordinated support, or when the equity holders as a group lack the power to direct the activities that most significantly affect the entity's economic performance, lack the obligation to absorb the entity's expected losses, or lack the right to receive the entity's expected residual returns. Special-purpose and thinly capitalized financing structures frequently meet this definition.",
          "Once an entity is identified as a VIE, the question shifts from 'who owns the majority?' to 'who is the primary beneficiary?' The primary beneficiary — the party required to consolidate the VIE — is the one that satisfies BOTH conditions: it has the power to direct the activities that most significantly affect the VIE's economic performance, and it has the obligation to absorb losses or the right to receive benefits that could potentially be significant to the VIE. Both power and significant economic exposure must rest with the same party; power without exposure, or exposure without power, does not create a primary beneficiary.",
          "This two-model system means a reporting entity must first ask whether a potential subsidiary is a VIE. If it is, the VIE (power-plus-exposure) analysis governs consolidation; if it is not, the traditional voting-interest model applies and a majority of voting rights controls. The exam tests the boundary directly — for instance, a company that guarantees a financing entity's debt and directs its key decisions may have to consolidate it even with a small or zero equity stake, because it holds both the power and the economic exposure that define the primary beneficiary.",
        ],
        keyRules: [
          "A VIE has insufficient equity at risk, or equity holders lacking power/obligation/rights.",
          "The primary beneficiary consolidates a VIE and must have BOTH power and significant economic exposure.",
          "Use the VIE model first; only apply the voting-interest majority model if the entity is not a VIE.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp3"],
        style: "Task-based simulation (equity-method rollforward)",
        question:
          "On 1/1 HoldingCo acquires 25% of Assoc for $600,000 when Assoc's net assets have a book value of $2,000,000. The only fair/book difference is a building undervalued by $160,000 with a 20-year remaining life; the balance of the excess is goodwill. Assoc reports net income of $320,000 and pays $80,000 of dividends during the year. Compute the basis-difference allocation, equity-method income, and the ending investment balance.",
        answerPlan: [
          "Share of book value = 25% × $2,000,000.",
          "Excess = cost − share of book value; allocate to building (amortize) and goodwill (do not amortize).",
          "Equity-method income = 25% × net income − building amortization.",
          "Ending investment = cost + equity income − dividends received.",
        ],
        modelAnswer:
          "Share of book value = 25% × $2,000,000 = $500,000. Excess of cost over book value = $600,000 − $500,000 = $100,000. Allocate to the building = 25% × $160,000 = $40,000; remainder to goodwill = $100,000 − $40,000 = $60,000. Building amortization = $40,000 ÷ 20 = $2,000 per year; goodwill is not amortized. Equity-method income = 25% × $320,000 − $2,000 = $80,000 − $2,000 = $78,000. Dividends received = 25% × $80,000 = $20,000 (reduce the investment, not income). Ending investment = $600,000 + $78,000 − $20,000 = $658,000.",
        markingGuide: [
          "1 mark: excess allocated $40,000 to the building and $60,000 to goodwill.",
          "1 mark: $2,000 building amortization with goodwill left un-amortized.",
          "1 mark: equity-method income of $78,000.",
          "1 mark: ending investment $658,000 after the $20,000 dividend.",
          "Deduct if dividends are recorded as income.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp4"],
        style: "Task-based simulation (goodwill & acquisition costs)",
        question:
          "AcqCo acquires 90% of Sub for $1,800,000 cash. The fair value of the 10% non-controlling interest is $190,000. The acquisition-date fair values are: identifiable assets $2,400,000 and liabilities assumed $600,000. AcqCo incurs $40,000 of due-diligence and legal fees. Compute goodwill and state the treatment of the fees.",
        answerPlan: [
          "Fair value of net identifiable assets = identifiable assets − liabilities.",
          "Goodwill = consideration + NCI fair value − FV of net identifiable assets.",
          "State treatment of acquisition-related costs.",
        ],
        modelAnswer:
          "Fair value of net identifiable assets = $2,400,000 − $600,000 = $1,800,000. Goodwill = consideration $1,800,000 + NCI fair value $190,000 − FV of net identifiable assets $1,800,000 = $190,000. The $40,000 of due-diligence and legal fees are acquisition-related costs and are expensed as incurred; they are not added to goodwill or to the acquired assets. Non-controlling interest is presented within consolidated equity at its $190,000 fair value.",
        markingGuide: [
          "1 mark: fair value of net identifiable assets $1,800,000.",
          "1 mark: goodwill $190,000 using NCI at fair value.",
          "1 mark: $40,000 acquisition costs expensed, not capitalized.",
          "Deduct if goodwill is computed on the parent's share only or deal costs are added to goodwill.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp1", "tp5"],
        style: "MCQ set rationale (investment classification & consolidation)",
        question:
          "(a) On 12/31 PortCo holds a debt security bought for $100,000 now worth $94,000. State the year-end carrying amount and where the $6,000 unrealized loss is reported if the security is (i) available-for-sale, (ii) trading. (b) Parent owns 80% of Sub. During the year Sub sold inventory to Parent for $50,000 (cost to Sub $30,000); Parent still holds 50% of those goods at year-end. Compute the unrealized profit to defer and explain how it is allocated between the parent and NCI.",
        answerPlan: [
          "AFS: fair value on the balance sheet, unrealized loss in OCI.",
          "Trading: fair value on the balance sheet, unrealized loss in net income.",
          "Upstream unrealized profit = gross profit rate × goods on hand; allocate between parent and NCI by ownership.",
        ],
        modelAnswer:
          "(a) In both cases the security is carried at its $94,000 fair value. (i) As available-for-sale, the $6,000 unrealized loss is reported in other comprehensive income (not net income). (ii) As a trading security, the $6,000 unrealized loss is reported in net income. (b) The intercompany gross profit rate = ($50,000 − $30,000) ÷ $50,000 = 40%. Goods still on hand = 50% × $50,000 = $25,000, so the unrealized profit to defer = 40% × $25,000 = $10,000. Because this is an upstream (sub→parent) sale, the $10,000 deferral is shared by ownership: 80% ($8,000) reduces the controlling interest and 20% ($2,000) reduces the non-controlling interest.",
        markingGuide: [
          "1 mark: both securities at $94,000; AFS loss in OCI, trading loss in net income.",
          "1 mark: unrealized profit to defer of $10,000 (40% × $25,000).",
          "1 mark: upstream allocation $8,000 to the parent and $2,000 to the NCI.",
          "Deduct if the AFS loss is placed in net income or the upstream deferral is charged entirely to the parent.",
        ],
      },
    ],
  }),
};
