import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA — AUD (Auditing & Attestation) exam-calibrated depth content for the
 * remaining AUD modules m6–m8, keyed by moduleId to merge onto CPA_COURSEWARE.
 *
 * This complements CPA_DEPTH (which carries cpa-aud-m1..m5) without overlapping
 * keys, so the two records can be spread into a single lookup.
 *
 * Calibration notes used throughout:
 *  - AUD is a four-hour AICPA Blueprint section: five MCQ/TBS testlets (two MCQ
 *    testlets, three TBS testlets). Skills are tested at Remembering/
 *    Understanding, Application, Analysis, and—uniquely for AUD—Evaluation.
 *    m6 (execution) and m7 (reporting) sit heavily at Application/Analysis;
 *    report-selection and going-concern TBSs reach Evaluation.
 *  - Authority sets are kept distinct and never cross-applied: AU-C (AICPA,
 *    nonissuers), PCAOB Auditing Standards (issuers), SSARS/AR-C (preparation,
 *    compilation, review of nonissuers), and SSAE/AT-C (attestation). The most
 *    common wrong answer is applying the right rule from the wrong standard set.
 *  - Where a threshold is judgmental (clearly-trivial amount, tolerable
 *    deviation/misstatement, "reasonable period" for going concern) the notes
 *    teach the driver of the number rather than a hard-coded figure, because the
 *    exam varies the facts and rewards the reasoning.
 */
export const CPA_AUD_REST_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // AUD m6 — Tests of controls & substantive procedures (execution)
  // ===================================================================
  "cpa-aud-m6": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Tests of controls and the reliance decision",
        priority: "critical",
        examinerFocus:
          "Whether you understand that a test of controls tests OPERATING EFFECTIVENESS (did the control work all period), which is a different objective from the walkthrough that tested design and implementation. The examiner tests when reliance is even permitted, how a sample deviation rate drives the reliance conclusion, and how the result feeds back into the extent of substantive testing—not merely reciting procedure names.",
        typicalQuestionForms: [
          "MCQ: which procedure provides evidence of operating effectiveness (reperformance / inspection / inquiry-only) and which provides the strongest evidence.",
          "MCQ: given a sample deviation rate versus a tolerable rate, decide whether the planned control reliance is supported.",
          "TBS: a control matrix where you match each control to the assertion it addresses and decide whether to test it or move straight to substantive procedures.",
        ],
        mustKnow: [
          "Tests of controls are required when the auditor's risk assessment assumes controls operate effectively, or when substantive procedures alone cannot provide sufficient appropriate evidence (e.g., highly automated, paperless processing).",
          "Evidence strength ranks reperformance/inspection above observation, and inquiry alone is never sufficient to conclude a control operated effectively (AU-C 330).",
          "If the sample deviation rate (plus an allowance for sampling risk) exceeds the tolerable rate, the control cannot be relied on as planned; the auditor lowers reliance and increases substantive procedures.",
          "A dual-purpose test simultaneously tests a control and the monetary correctness of the same transaction, but each objective is evaluated against its own criterion.",
          "Rotating the testing of some controls across years is permitted only for lower-risk controls that have not changed; controls over significant risks must be tested in the current period.",
        ],
        scoringActions: [
          "Confirm the audit strategy actually plans to rely on the control before designing a test of controls—if not, no test of controls is required.",
          "Choose reperformance/inspection over inquiry-and-observation when the question asks for evidence of operating effectiveness.",
          "Translate a control-testing failure into a substantive-testing consequence (increase extent, change timing to year-end, add procedures).",
        ],
      },
      {
        id: "tp2",
        title: "Substantive analytical procedures (AU-C 520)",
        priority: "high",
        examinerFocus:
          "Whether you can judge when a substantive analytic is an efficient source of evidence and how precise the expectation must be. The distinction tested is between the required planning/final overall analytics and OPTIONAL substantive analytics used as a primary source of evidence for an assertion—the latter demands a precise, independently developed expectation and a defined investigation threshold.",
        typicalQuestionForms: [
          "MCQ: which account is best suited to substantive analytics (predictable, stable relationships such as interest, payroll, depreciation) versus tests of details.",
          "MCQ: what must the auditor do before using an analytic as substantive evidence (develop an independent expectation, set a threshold, evaluate reliability of the data).",
          "TBS: build an expectation for an income-statement line and decide whether the difference from the recorded amount requires investigation.",
        ],
        mustKnow: [
          "Four steps: develop an independent expectation, define an acceptable difference (threshold), compute the difference, and investigate/corroborate differences over the threshold (AU-C 520).",
          "The precision of the expectation and the reliability of the underlying data (independent, disaggregated, from effective controls) determine how much assurance the analytic provides.",
          "A difference exceeding the threshold is not itself a misstatement; it triggers inquiry plus other corroborating evidence—management explanation alone is not sufficient.",
          "Analytics are required at planning (risk assessment) and near the end (overall conclusion); their use as substantive evidence in between is optional and strategy-driven.",
        ],
        scoringActions: [
          "Reject 'because management said so' as sufficient corroboration for a significant difference—demand independent evidence.",
          "Pick predictable, high-volume accounts for substantive analytics and reserve tests of details for unpredictable or high-risk balances.",
          "State the investigation threshold in terms of performance materiality before evaluating a difference.",
        ],
      },
      {
        id: "tp3",
        title: "Tests of details by cycle: the assertion each attacks",
        priority: "critical",
        examinerFocus:
          "Whether you match a procedure to the ONE assertion most at risk in that cycle and direction of testing. Revenue and receivables are tested for existence/occurrence and cutoff (overstatement risk); payables are tested for completeness (understatement risk); inventory is tested for existence and valuation. Selecting the wrong assertion is the most common way candidates lose these marks.",
        typicalQuestionForms: [
          "MCQ: identify the primary assertion tested by a described procedure (confirmations, search for unrecorded liabilities, inventory observation, price testing).",
          "MCQ: choose the direction of testing—vouch (existence) versus trace (completeness).",
          "TBS: a procedures/assertions grid where each substantive procedure is mapped to the assertion and cycle it supports.",
        ],
        mustKnow: [
          "Accounts receivable confirmations primarily test EXISTENCE; positive confirmations request a reply either way, negative confirmations are used only when risk is low, balances are small/homogeneous, and a low exception rate is expected.",
          "The search for unrecorded liabilities (examining cash disbursements and unmatched receiving reports after year-end) tests the COMPLETENESS of accounts payable—the primary risk for liabilities.",
          "Inventory observation provides evidence of EXISTENCE and condition; valuation is tested separately via price testing and lower-of-cost-or-net-realizable-value analysis.",
          "Vouching (from the ledger back to source documents) tests existence/occurrence; tracing (from source documents forward to the ledger) tests completeness.",
        ],
        scoringActions: [
          "Ask 'overstatement or understatement risk?' to choose the assertion: assets/revenue → existence; liabilities → completeness.",
          "Match the direction of testing to the assertion—vouch for existence, trace for completeness—rather than defaulting to one direction.",
          "Reserve negative confirmations for low-risk, homogeneous populations and never rely on non-response as evidence of agreement.",
        ],
      },
      {
        id: "tp4",
        title: "Auditing accounting estimates and fair value (AU-C 540)",
        priority: "high",
        examinerFocus:
          "Whether you can audit an estimate as an area of measurement uncertainty and management-bias risk rather than a hard number. The examiner tests the three response approaches (test management's process, develop an independent estimate/range, or use subsequent events) and the retrospective review that detects bias.",
        typicalQuestionForms: [
          "MCQ: which procedure best addresses estimation uncertainty or possible management bias in an estimate.",
          "MCQ: identify the three permissible approaches to auditing an estimate and when each fits.",
          "TBS: evaluate management's allowance/warranty/fair-value assumptions and conclude whether the recorded amount is reasonable.",
        ],
        mustKnow: [
          "The auditor evaluates the METHOD, the DATA, and the significant ASSUMPTIONS used, and the effect of estimation uncertainty on risk (AU-C 540).",
          "Three response approaches: (1) test how management made the estimate, (2) develop an independent point estimate or range to compare, or (3) use events occurring up to the report date that provide evidence of the estimate.",
          "A retrospective review of prior-period estimates against actual outcomes is a required procedure that indicates the reliability of management's process and possible bias—it is not a restatement of the prior year.",
          "Fair-value estimates require evaluating the model, inputs (Level 1 observable to Level 3 unobservable), and whether the measurement complies with the applicable framework.",
        ],
        scoringActions: [
          "Name which of the three approaches you are applying before designing procedures for an estimate.",
          "Treat a pattern of estimates that consistently favors reported earnings as an indicator of management bias, not a series of coincidences.",
          "Distinguish estimation uncertainty (inherent) from bias (a risk to be tested); high uncertainty may itself be a significant risk.",
        ],
      },
      {
        id: "tp5",
        title: "Evaluating misstatements (AU-C 450)",
        priority: "high",
        examinerFocus:
          "Whether you can accumulate misstatements, classify them (factual, judgmental, projected), and evaluate the uncorrected total both individually and in aggregate against materiality—including qualitative factors and the rollover-versus-iron-curtain problem for reversing errors.",
        typicalQuestionForms: [
          "MCQ: classify a misstatement as factual, judgmental, or projected, or identify the 'clearly trivial' threshold concept.",
          "MCQ/TBS: given a schedule of uncorrected misstatements and materiality, conclude whether the statements are materially misstated.",
          "TBS: evaluate whether a quantitatively small misstatement is nonetheless material for a qualitative reason (turns a loss into a profit, meets a covenant, affects a bonus).",
        ],
        mustKnow: [
          "Accumulate all misstatements other than those that are clearly trivial (a much lower threshold than materiality); communicate accumulated misstatements to management and request correction (AU-C 450).",
          "Factual misstatements are unambiguous; judgmental arise from unreasonable estimates/policies; projected are the auditor's best estimate from sampling and must be projected to the population.",
          "Uncorrected misstatements are evaluated both individually and in the aggregate, considering the current-period effect plus the effect of prior-period uncorrected misstatements.",
          "Qualitative factors can make a numerically immaterial misstatement material (changes a loss to income, affects debt covenants or bonuses, masks a trend, or is an unlawful act).",
          "The rollover (income-statement) and iron-curtain (balance-sheet) methods can reach different conclusions for reversing errors; the auditor considers both; for issuers SAB 108 requires a dual approach.",
        ],
        scoringActions: [
          "Add the effect of prior-year uncorrected misstatements to the current-year schedule before concluding.",
          "Run the qualitative override check even when the aggregate is below materiality.",
          "Project sample misstatements to the population rather than recording only the known error.",
        ],
      },
      {
        id: "tp6",
        title: "Audit sampling in tests of details (MUS and projection)",
        priority: "medium",
        examinerFocus:
          "Whether you can select and evaluate a sample for a substantive test of details, especially monetary-unit (probability-proportional-to-size) sampling, and project the sample result to the population to compare with tolerable misstatement.",
        typicalQuestionForms: [
          "MCQ: identify when MUS is appropriate (few expected misstatements, overstatement focus, larger items automatically selected).",
          "MCQ: compute or interpret a projected misstatement from a sample.",
          "TBS: evaluate whether projected misstatement plus an allowance for sampling risk exceeds tolerable misstatement.",
        ],
        mustKnow: [
          "Monetary-unit sampling defines the sampling unit as each dollar, so larger book balances have a proportionally higher chance of selection—efficient for detecting overstatement.",
          "Projected misstatement (plus an allowance for sampling risk) is compared with tolerable misstatement; if it exceeds tolerable misstatement, the population may be materially misstated.",
          "Sampling risk (wrongly accepting/rejecting) is distinct from nonsampling risk (auditor error); increasing sample size reduces sampling risk but not nonsampling risk.",
          "MUS is less efficient when many misstatements are expected or when understatement/zero balances are the concern.",
        ],
        scoringActions: [
          "Project the sample error to the population before concluding—do not compare the raw sample error to tolerable misstatement.",
          "Add an allowance for sampling risk to the projection when deciding acceptance.",
          "Choose MUS for overstatement-focused, low-error populations and classical variables sampling where many misstatements or understatements are expected.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Execution testlets reward disciplined assertion-to-procedure mapping and correct evaluation of results. Bank the cycle-assertion and misstatement-evaluation TBSs, which are pattern-driven and high-yield.",
      timeBudget:
        "~1.25 min per MCQ; on a procedures/assertions or misstatement-schedule TBS, spend the first 3–4 minutes classifying rows before writing conclusions, and reserve time to project sample results and add prior-year misstatements.",
      answerSequence: [
        "Identify the cycle and its dominant risk direction (overstatement of assets/revenue vs understatement of liabilities).",
        "Select the assertion most at risk and the procedure/direction that attacks it.",
        "Evaluate the result against its own criterion (deviation vs tolerable rate; projected vs tolerable misstatement).",
        "Aggregate misstatements (current + prior uncorrected) and apply the qualitative override before concluding.",
      ],
      qualityChecks: [
        "Did I match the assertion to the risk direction, or default to existence for everything?",
        "Did I project sample results to the population and add an allowance for sampling risk?",
        "Did I add prior-year uncorrected misstatements and run the qualitative-materiality check?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Tests of controls: operating effectiveness and the reliance loop",
        testPointIds: ["tp1"],
        explanation: [
          "A walkthrough during risk assessment tests whether a control is well DESIGNED and has been IMPLEMENTED. A test of controls answers a different question: did the control OPERATE EFFECTIVELY throughout the period of intended reliance? The auditor tests operating effectiveness only when the audit strategy assumes controls work (to reduce substantive testing) or when substantive procedures alone cannot provide sufficient appropriate evidence—typically in highly automated, low-paper environments where evidence exists only inside the system.",
          "Not all evidence is equal. Inquiry corroborated by observation is weak because a control can behave normally while being watched; reperformance and inspection of documentation are stronger because they demonstrate the control actually functioned on real transactions. AU-C 330 is explicit that inquiry alone is never sufficient to conclude that a control operated effectively. For automated application controls, the auditor can often test one instance plus the general IT controls that keep the program unchanged, because a deterministic program that is protected from change will operate consistently.",
          "The result of the test feeds back into substantive planning. The auditor sets a tolerable deviation rate consistent with the planned reliance; if the observed deviation rate plus an allowance for sampling risk exceeds it, the control cannot be relied on as planned. The auditor then lowers control reliance, which raises the assessed risk of material misstatement and therefore increases the nature, timing, and extent of substantive procedures (more items, more persuasive procedures, and testing at year-end rather than interim).",
        ],
        keyRules: [
          "Design/implementation is tested by the walkthrough; operating effectiveness is tested by tests of controls.",
          "Inquiry alone is never sufficient evidence of operating effectiveness (AU-C 330).",
          "Deviation rate + sampling-risk allowance > tolerable rate ⇒ reduce reliance and increase substantive testing.",
          "Controls over significant risks must be tested in the current period; only stable, lower-risk controls may be tested on a rotational basis.",
        ],
        workedProblem: {
          scenario:
            "For sales-invoice approval (a control on the occurrence/accuracy of revenue), the auditor plans to rely on the control and sets a tolerable deviation rate of 8% with a 5% expected deviation rate, yielding a planned sample of 60 invoices. Testing finds 4 invoices approved without the required credit check. How should the auditor evaluate and respond?",
          steps: [
            "Compute the sample deviation rate: 4 ÷ 60 = 6.7%.",
            "Add an allowance for sampling risk. Using an attribute-sampling table for a sample of 60 with 4 deviations, the computed upper deviation limit (upper limit on the true rate) exceeds the sample rate—here it lands above the 8% tolerable rate (roughly 12–13%).",
            "Compare the upper deviation limit to the tolerable rate: because the upper limit (~12–13%) exceeds the tolerable rate (8%), the sample does not support the planned reliance, even though the raw sample rate (6.7%) is below 8%.",
            "Respond: reduce reliance on the credit-approval control, increase the assessed risk of material misstatement for revenue occurrence/accuracy, and expand substantive procedures (larger detail sample, confirmations focused on occurrence, cutoff testing at year-end).",
            "Investigate the nature/cause of the four deviations (isolated clerk error vs a systematic override) because cause affects both the misstatement risk and communications to those charged with governance.",
          ],
          conclusion:
            "The control cannot be relied on as planned: the upper deviation limit exceeds the tolerable rate. The auditor lowers reliance and increases substantive testing, and investigates whether the deviations signal a pervasive control weakness.",
          markingNotes: [
            "Award marks for comparing the UPPER deviation limit (not the raw sample rate) to the tolerable rate.",
            "Award marks for the correct reliance conclusion despite the sample rate being under 8%.",
            "Full marks require translating the failure into a specific substantive-testing response and investigating cause.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Substantive analytical procedures: precision is everything",
        testPointIds: ["tp2"],
        explanation: [
          "Substantive analytics earn evidence by comparing a recorded amount to an INDEPENDENT expectation. The four disciplined steps are: develop the expectation, define the acceptable difference (threshold, usually a fraction of performance materiality), compute the difference, and investigate and corroborate differences above the threshold. The assurance obtained is only as good as (a) the precision of the expectation and (b) the reliability of the data used to build it—data drawn from an area with effective controls, disaggregated, and independent of the client's recorded figure is far more persuasive than a top-line ratio.",
          "The exam's favorite trap is accepting management's explanation as the end of the procedure. AU-C 520 requires the auditor to corroborate management's explanation with other evidence; a plausible story is not audit evidence. If the difference cannot be explained and corroborated, it is treated as a potential misstatement and investigated with tests of details.",
          "Analytics are required twice regardless of strategy—at planning to identify risks and near the end to form an overall conclusion about whether the statements are consistent with the auditor's understanding. Using analytics as a primary substantive source in between is optional and works best for predictable accounts (interest, payroll, depreciation, commissions) where a relationship is stable and can be modeled precisely.",
        ],
        keyRules: [
          "Four steps: expectation → threshold → compute difference → investigate/corroborate (AU-C 520).",
          "Precision of the expectation and reliability of the data drive the assurance obtained.",
          "Corroborate management's explanation with independent evidence—an explanation alone is not evidence.",
          "Planning and final overall analytics are required; substantive-source analytics are optional and strategy-driven.",
        ],
        workedProblem: {
          scenario:
            "The client reports interest expense of $940,000. Average debt during the year was approximately $20,000,000 at a weighted-average stated rate of about 4.0%. Performance materiality is $500,000 and the auditor sets the analytic threshold at $75,000. Evaluate the interest-expense balance.",
          steps: [
            "Build an independent expectation: $20,000,000 × 4.0% = $800,000 of expected interest expense.",
            "Compute the difference: recorded $940,000 − expected $800,000 = $140,000.",
            "Compare with the threshold: $140,000 > $75,000, so the difference must be investigated—it is not accepted on its face.",
            "Investigate: inquire and corroborate. Possible causes include new borrowings not in the average, amortized debt-issuance costs classified in interest, capitalized interest reversed, or an error/overstatement.",
            "Corroborate the explanation with independent evidence (loan agreements, the debt roll-forward, board minutes authorizing new debt); if the excess cannot be explained and corroborated, treat up to $140,000 as a potential misstatement and extend to tests of details.",
          ],
          conclusion:
            "The $140,000 difference exceeds the $75,000 threshold, so the analytic does not by itself provide assurance; the auditor investigates and independently corroborates the cause before concluding, and treats any unexplained portion as a potential misstatement.",
          markingNotes: [
            "Award marks for constructing an independent expectation (average debt × average rate).",
            "Award marks for comparing the difference to a defined threshold rather than to materiality.",
            "Full marks require corroborating the explanation with independent evidence, not accepting management's narrative.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Tests of details by cycle: existence vs completeness and direction of testing",
        testPointIds: ["tp3"],
        explanation: [
          "Every cycle has a dominant risk direction, and the assertion follows from it. Assets and revenue carry overstatement risk, so the key assertions are existence/occurrence and cutoff, tested by vouching from the records back to source documents and by confirming receivables. Liabilities carry understatement risk, so the key assertion is completeness, tested by tracing forward and by the search for unrecorded liabilities. Inventory is dual: existence/condition (observation) and valuation (price testing, lower-of-cost-or-NRV).",
          "Direction of testing is the mechanical expression of the assertion. To test existence you VOUCH—start with a recorded item and find the supporting document, proving the recorded item is real. To test completeness you TRACE—start with a source document (a receiving report, a shipping document, a post-year-end disbursement) and prove it reached the ledger. Choosing the wrong direction tests the wrong assertion and earns no marks even if the mechanics are correct.",
          "Accounts receivable confirmations deserve special care. Positive confirmations ask the customer to respond whether or not they agree and are the default; negative confirmations (respond only if you disagree) are permissible only when the risk of material misstatement is low, the population is many small homogeneous balances, a very low exception rate is expected, and the auditor has no reason to believe recipients will ignore them. Non-response to a negative confirmation is not evidence of agreement.",
        ],
        keyRules: [
          "Assets/revenue → existence/occurrence (overstatement risk); liabilities → completeness (understatement risk).",
          "Vouch (records → source) tests existence; trace (source → records) tests completeness.",
          "Search for unrecorded liabilities (post-year-end disbursements + unmatched receiving reports) tests AP completeness.",
          "Negative confirmations only for low-risk, homogeneous, low-expected-exception populations; non-response ≠ agreement.",
        ],
        workedProblem: {
          scenario:
            "At a December 31 year-end, the auditor performs a search for unrecorded liabilities. In early January the client pays: (a) $60,000 for December raw materials received December 28 (receiving report dated Dec 28) but not recorded in payables at year-end; (b) $18,000 for a January office cleaning contract performed in January; (c) $45,000 for a December utility invoice dated Dec 20, accrued at year-end. Which represent understatements of year-end payables?",
          steps: [
            "Identify the completeness objective: the search tests whether liabilities existing at year-end are all recorded.",
            "Item (a): goods received Dec 28 means the obligation existed at year-end (title/liability arose on receipt); it was not recorded ⇒ understatement of accounts payable of $60,000.",
            "Item (b): services were performed in January, so no obligation existed at December 31 ⇒ correctly excluded from year-end payables; no misstatement.",
            "Item (c): the December utility was already accrued at year-end ⇒ liability is recorded; no misstatement.",
            "Corroborate item (a) using the receiving report date and the purchase terms (FOB shipping point vs destination) to confirm the liability arose before year-end.",
          ],
          conclusion:
            "Only item (a), the $60,000 for goods received December 28, is an unrecorded year-end liability; items (b) and (c) are not. The auditor proposes an adjustment increasing accounts payable and the related asset/expense by $60,000.",
          markingNotes: [
            "Award marks for tying the liability to the date the obligation arose (receipt/terms), not the payment date.",
            "Award marks for correctly excluding the January service and the already-accrued utility.",
            "Full marks require identifying completeness as the assertion and proposing the specific adjustment.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Auditing estimates: method, data, assumptions and the retrospective review",
        testPointIds: ["tp4"],
        explanation: [
          "Estimates are where the financial statements are least verifiable and most exposed to management bias, so AU-C 540 frames them as areas of measurement uncertainty. The auditor evaluates three things—the METHOD (model) management used, the DATA that fed it, and the significant ASSUMPTIONS—and assesses how much estimation uncertainty exists. High uncertainty (wide reasonable range) can itself be a significant risk requiring special audit attention.",
          "There are three permissible response approaches, and naming the one you use is worth marks: (1) test how management made the estimate (evaluate model, data, and assumptions and recompute); (2) develop an independent point estimate or range and compare it to management's; or (3) use events up to the date of the auditor's report that provide evidence about the estimate (for example, subsequent cash collections that confirm the year-end allowance). The auditor may combine approaches.",
          "The retrospective review is the bias detector. Comparing prior-period estimates with actual outcomes reveals whether management's process is reliable and whether estimates have consistently leaned in an earnings-favorable direction. A retrospective review is a diagnostic of the process and possible bias; it is not a challenge to the prior period's audit opinion or a restatement. Fair-value estimates add the discipline of the input hierarchy—Level 1 observable prices are most reliable; Level 3 unobservable inputs demand the most scrutiny of the model and assumptions.",
        ],
        keyRules: [
          "Evaluate the method, the data, and the significant assumptions; assess estimation uncertainty (AU-C 540).",
          "Three approaches: test management's process; build an independent estimate/range; use subsequent events.",
          "Retrospective review detects bias and tests the reliability of the process—it is not a prior-period restatement.",
          "Fair value: scrutinize model and inputs by hierarchy (Level 1 observable → Level 3 unobservable).",
        ],
        workedProblem: {
          scenario:
            "Management records an allowance for doubtful accounts of $300,000 (3% of $10,000,000 gross receivables) using a flat historical rate. The auditor's aging shows $1,200,000 over 90 days past due, and subsequent collections through the report date recovered only 40% of the over-90 bucket. A specific $250,000 customer balance is in bankruptcy. Evaluate the allowance.",
          steps: [
            "Test the method: a single flat 3% rate ignores aging and specific impairments—an imprecise method for a receivables book with a large delinquent bucket.",
            "Develop an independent estimate: expected loss on the over-90 bucket ≈ 60% of $1,200,000 = $720,000 (since only 40% was collected), plus the specific bankrupt customer of $250,000 if not already inside that bucket—yielding an independent estimate materially above $300,000.",
            "Use subsequent events: the actual post-year-end collection rate (40% on the over-90 bucket) is objective evidence the allowance is understated.",
            "Compare and conclude: management's $300,000 is below the auditor's supportable range; the shortfall (on the order of $400,000+) is a likely misstatement that understates the allowance and overstates net receivables and income.",
            "Consider bias: a consistently low, formulaic allowance despite deteriorating aging is an indicator of management bias to be weighed in the overall evaluation.",
          ],
          conclusion:
            "The flat-rate allowance is not reasonable given the aging and subsequent collections; the auditor proposes increasing the allowance by roughly $400,000+ and flags possible management bias. All three approaches (test the process, independent estimate, subsequent events) support the conclusion.",
          markingNotes: [
            "Award marks for challenging the METHOD (flat rate) against the aging evidence.",
            "Award marks for using subsequent collections as objective evidence of the estimate.",
            "Full marks require quantifying an independent estimate/range and identifying the bias indicator.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Evaluating misstatements: aggregate, project, and apply qualitative override",
        testPointIds: ["tp5", "tp6"],
        explanation: [
          "AU-C 450 requires the auditor to accumulate all misstatements identified during the audit other than those that are clearly trivial—a threshold far below materiality, set so that individually inconsequential items are not tracked but everything with any chance of mattering (alone or combined) is captured. Accumulated misstatements are communicated to management with a request to correct them; the auditor also asks management to examine relevant classes for additional misstatements when errors are found.",
          "Classify each misstatement to evaluate it correctly. Factual misstatements are unambiguous (a recorded amount that is simply wrong). Judgmental misstatements arise from management's unreasonable estimates or inappropriate accounting policies. Projected misstatements are the auditor's best estimate of the error in a population extrapolated from a sample—these must be PROJECTED to the population, not recorded at the sampled amount, before evaluation.",
          "The final evaluation is done both individually and in aggregate, and it combines the current-year uncorrected misstatements with the effect of prior-year uncorrected misstatements. Reversing errors force a choice of method: the rollover method measures the income-statement effect of the current-year correction, while the iron-curtain method measures the cumulative balance-sheet effect. They can reach different conclusions; the auditor considers both, and for issuers SAB 108 requires a dual approach. Finally, the qualitative override: a numerically small misstatement can still be material if it turns a loss into income, affects debt covenants or management bonuses, masks a trend, or conceals an unlawful act.",
        ],
        keyRules: [
          "Accumulate everything above 'clearly trivial'; communicate and request correction (AU-C 450).",
          "Classify factual / judgmental / projected; project sample errors to the population before evaluating.",
          "Evaluate current-year plus prior-year uncorrected misstatements, individually and in aggregate.",
          "Apply the qualitative override; for reversing errors consider both rollover and iron-curtain (SAB 108 for issuers).",
        ],
        workedProblem: {
          scenario:
            "Pre-tax income is $2,000,000; materiality is $100,000. Uncorrected misstatements: (a) a factual expense understatement of $35,000; (b) a projected inventory overstatement of $48,000 from a sample; (c) a prior-year uncorrected accrual of $30,000 that reverses in the current year. Management declines to correct any of them. Conclude on materiality.",
          steps: [
            "Confirm each item is above 'clearly trivial' and should be on the schedule—all three are.",
            "Include the projected (not sampled) amount for item (b): $48,000 is already the projection to the population.",
            "Aggregate the current-year effect on income: $35,000 (expense understated ⇒ income overstated) + $48,000 (inventory/COGS ⇒ income overstated) = $83,000 overstatement; the $30,000 prior-year reversal (rollover method) adds a current-year income effect, pushing the aggregate to about $113,000.",
            "Compare to materiality: aggregate current-year effect (~$113,000) exceeds $100,000 ⇒ the statements are materially misstated on a rollover basis even though each item alone is below materiality.",
            "Run the qualitative override and the iron-curtain cross-check: confirm none of the items independently trips a covenant/bonus, and confirm the balance-sheet (iron-curtain) view does not change the conclusion; then request correction or, if refused, consider the effect on the opinion.",
          ],
          conclusion:
            "Individually each item is immaterial, but the aggregate (including the prior-year reversal) exceeds materiality, so the statements are materially misstated. The auditor requests correction; continued refusal points toward a qualified or adverse opinion.",
          markingNotes: [
            "Award marks for using the PROJECTED amount for the sampled item.",
            "Award marks for aggregating current-year plus prior-year uncorrected effects.",
            "Full marks require comparing the aggregate to materiality and noting the qualitative/iron-curtain checks and the opinion consequence.",
          ],
        },
      },
      {
        id: "sn6",
        title: "Sampling for tests of details: monetary-unit sampling and projection",
        testPointIds: ["tp6", "tp3"],
        explanation: [
          "Monetary-unit sampling (MUS), also called probability-proportional-to-size sampling, treats each dollar in the population as the sampling unit. Because selection is dollar-weighted, larger book balances have a proportionally higher chance of selection and very large items are effectively certain to be picked. This makes MUS efficient for detecting OVERSTATEMENT with few expected errors—exactly the profile of receivables and other asset balances.",
          "The evaluation is about projection, not the raw sample error. For each misstated item the auditor computes a tainting percentage (misstatement ÷ book value) and projects it across the sampling interval; the projected misstatements are summed and an allowance for sampling risk is added. This projected misstatement plus allowance is then compared with tolerable misstatement. If it exceeds tolerable misstatement, the population may be materially misstated and the auditor extends procedures or proposes adjustment.",
          "MUS has limits. It is inefficient when many misstatements are expected (each error requires projection and inflates the result) and it is poorly suited to detecting UNDERSTATEMENT or auditing populations with zero/negative balances, because a dollar that is not recorded cannot be selected. In those situations classical variables sampling (mean-per-unit, difference, or ratio estimation) is the better tool. Throughout, remember sampling risk (a wrong conclusion because the sample was unrepresentative) is reduced by larger samples, while nonsampling risk (auditor mistakes) is controlled by supervision and methodology, not sample size.",
        ],
        keyRules: [
          "MUS sampling unit = each dollar ⇒ larger balances more likely selected; best for overstatement, few errors.",
          "Project sample misstatement (tainting × interval) and add an allowance for sampling risk.",
          "Projected misstatement + allowance > tolerable misstatement ⇒ population may be materially misstated.",
          "Use classical variables sampling for many-error or understatement/zero-balance populations.",
        ],
        workedProblem: {
          scenario:
            "A receivables population of $5,000,000 is tested with MUS using a sampling interval of $50,000. Two misstatements are found: a $10,000 book item overstated by $2,000, and a $60,000 book item overstated by $6,000. Tolerable misstatement is $150,000. Evaluate.",
          steps: [
            "Compute tainting for the smaller item (book < interval): $2,000 ÷ $10,000 = 20% tainting; project across the interval: 20% × $50,000 = $10,000 projected misstatement.",
            "Handle the larger item (book ≥ interval): it was selected with certainty, so no projection factor applies—use the actual misstatement of $6,000.",
            "Sum the projected misstatements: $10,000 + $6,000 = $16,000 basic projected misstatement.",
            "Add an allowance for sampling risk (basic precision plus an incremental allowance for the detected errors); assume this brings the upper misstatement limit to roughly $70,000–$90,000, still below $150,000.",
            "Compare with tolerable misstatement: because the upper limit is below $150,000, the evidence supports that receivables are not materially overstated at the planned assurance level.",
          ],
          conclusion:
            "Projected misstatement plus the allowance for sampling risk is below tolerable misstatement, so the sample supports the receivables balance. Note the correct mechanics: project the below-interval item by its tainting and use the actual error for the certainty (≥ interval) item.",
          markingNotes: [
            "Award marks for projecting the below-interval item using its tainting percentage.",
            "Award marks for using the actual misstatement (no projection) for the certainty item ≥ the interval.",
            "Full marks require adding an allowance for sampling risk before comparing to tolerable misstatement.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp3", "tp1"],
        style: "Task-based simulation (procedure-to-assertion mapping)",
        question:
          "For a manufacturer with a December 31 year-end, match each procedure to the primary assertion it tests and state the direction of testing where relevant: (1) confirm a sample of customer balances; (2) examine cash disbursements in the first two weeks of January and trace to year-end payables; (3) observe the physical inventory count; (4) recompute lower-of-cost-or-NRV on slow-moving inventory; (5) reperform the credit-approval control on a sample of sales orders.",
        answerPlan: [
          "Confirmations → existence of receivables (positive default).",
          "Post-year-end disbursements search → completeness of payables (trace forward).",
          "Inventory observation → existence/condition.",
          "LCNRV recompute → valuation of inventory.",
          "Reperformance of credit approval → test of controls (operating effectiveness).",
        ],
        modelAnswer:
          "(1) Confirming customer balances tests the EXISTENCE of accounts receivable; positive confirmations are the default because they require a response whether or not the customer agrees. (2) Examining early-January cash disbursements and tracing them back to whether the underlying liability existed at year-end is the search for unrecorded liabilities, which tests the COMPLETENESS of accounts payable—tracing forward from source (disbursement/receiving report) to the ledger. (3) Observing the physical count tests EXISTENCE and the condition of inventory. (4) Recomputing lower-of-cost-or-net-realizable-value on slow-moving items tests the VALUATION assertion for inventory. (5) Reperforming the credit-approval control is a TEST OF CONTROLS aimed at operating effectiveness—not a substantive test—and reperformance provides stronger evidence than inquiry or observation. The unifying logic: assets/revenue are tested for existence (overstatement risk) by vouching/confirming, liabilities for completeness (understatement risk) by tracing, and controls for whether they actually operated.",
        markingGuide: [
          "1 mark each for the correct assertion on items 1–4.",
          "1 mark for identifying item 5 as a test of controls (operating effectiveness), not a substantive test.",
          "1 mark for correct direction of testing (trace forward for completeness on item 2).",
          "Deduct if receivables are tested for completeness or payables for existence.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp5", "tp6"],
        style: "Constructed response with schedule",
        question:
          "Pre-tax income is $1,500,000 and materiality is $90,000. The auditor's uncorrected-misstatement schedule shows: a factual $28,000 revenue overstatement; a projected $40,000 payables understatement from a sample of 25 items where the sampled error was $16,000; and a prior-year uncorrected $25,000 expense understatement that reverses this year. Management refuses to adjust. Evaluate whether the statements are materially misstated and state the reporting consequence.",
        answerPlan: [
          "Confirm all items exceed clearly-trivial and belong on the schedule.",
          "Use the projected (not sampled) figure for the payables item.",
          "Aggregate current-year plus prior-year reversal effects on income.",
          "Compare to materiality; run qualitative override.",
          "State the opinion consequence if refusal continues.",
        ],
        modelAnswer:
          "All three items exceed the clearly-trivial threshold and belong on the schedule. For the sampled payables item, the auditor must use the PROJECTED misstatement of $40,000, not the raw sampled $16,000, because a sample result is extrapolated to the population before evaluation. Aggregating the current-year income effect: the $28,000 revenue overstatement overstates income by $28,000; the $40,000 payables understatement overstates income by $40,000; and under the rollover method the $25,000 prior-year reversal adds a further current-year income effect—together about $93,000. That aggregate exceeds materiality of $90,000, so even though every item is individually immaterial, the statements are materially misstated in the aggregate. The auditor also runs the qualitative override (does any item breach a covenant, affect a bonus, or turn a loss into income?) and cross-checks the iron-curtain view. Because management refuses to correct a material aggregate misstatement, and assuming the effect is material but not pervasive, the auditor issues a QUALIFIED opinion ('except for'); if the effect were pervasive, an ADVERSE opinion would be required.",
        markingGuide: [
          "1 mark: using the projected $40,000 rather than the sampled $16,000.",
          "1 mark: aggregating current-year plus prior-year reversal effects.",
          "1 mark: concluding materially misstated because the aggregate exceeds materiality.",
          "1 mark: correct opinion (qualified if material-not-pervasive; adverse if pervasive).",
          "Deduct if only individual amounts are compared to materiality.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp2", "tp4"],
        style: "MCQ set rationale",
        question:
          "Explain (a) why a substantive analytic for payroll expense can provide strong evidence while one for miscellaneous 'other income' usually cannot, and (b) why the auditor's retrospective review of last year's warranty reserve is relevant to this year's estimate even though the prior audit is closed.",
        answerPlan: [
          "Analytic assurance depends on precision + data reliability.",
          "Payroll is predictable/modelable; 'other income' is not.",
          "Retrospective review tests process reliability and bias, not the prior opinion.",
        ],
        modelAnswer:
          "(a) A substantive analytic provides assurance only to the extent the expectation is precise and the underlying data are reliable. Payroll is highly predictable—headcount × average pay rate × period, adjusted for raises and turnover—so the auditor can build a precise, independent expectation from data (HR records, tax filings) that is independent of the recorded amount; a small difference gives real assurance. 'Other income' is a catch-all of unrelated, unpredictable items with no stable driver, so no precise expectation can be built and an analytic there provides little assurance—tests of details are required instead. (b) The retrospective review compares last year's warranty reserve to the claims actually paid this year. It is not a re-audit of, or challenge to, the prior opinion; it is a diagnostic of the reliability of management's estimation PROCESS and an indicator of possible management bias. If actual claims consistently and materially exceeded the reserve, the process is unreliable and possibly biased low, which raises the risk of material misstatement for the current-year estimate and directs the auditor to more persuasive procedures this year.",
        markingGuide: [
          "1 mark: assurance depends on precision of expectation and reliability of data.",
          "1 mark: payroll is modelable/predictable; 'other income' is not.",
          "1 mark: retrospective review tests process reliability and bias.",
          "1 mark: clarifying it is not a challenge to the prior-period opinion.",
        ],
      },
    ],
  }),

  // ===================================================================
  // AUD m7 — Audit conclusions, subsequent events & reports
  // ===================================================================
  "cpa-aud-m7": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Subsequent events and subsequently discovered facts",
        priority: "critical",
        examinerFocus:
          "Whether you can distinguish a recognized (Type 1) event that requires ADJUSTMENT from a nonrecognized (Type 2) event that requires DISCLOSURE, based on whether the condition existed at the balance-sheet date—and whether you know the auditor's duties for facts discovered after the report date (dual dating vs redating; withdrawal considerations).",
        typicalQuestionForms: [
          "MCQ: classify an event (customer bankruptcy, litigation settlement, fire, stock issuance) as Type 1 adjust or Type 2 disclose.",
          "MCQ: identify the auditor's responsibility when facts existing at the report date are discovered after the report is issued.",
          "TBS: mark a list of events for adjustment, disclosure, or no action, and choose dual dating where a single later event is added.",
        ],
        mustKnow: [
          "Type 1 (recognized) subsequent events relate to conditions that EXISTED at the balance-sheet date ⇒ adjust the financial statements (e.g., settlement of pre-existing litigation, bankruptcy of a customer whose receivable was doubtful at year-end).",
          "Type 2 (nonrecognized) subsequent events relate to conditions that AROSE after year-end ⇒ disclose if material, do not adjust (e.g., a post-year-end fire, a business combination after year-end, issuance of stock).",
          "The auditor's active subsequent-events review runs through the date of the auditor's report; dual dating limits the auditor's responsibility for a later added event to that specific matter (AU-C 560).",
          "For subsequently discovered facts existing at the report date learned after issuance, the auditor determines whether the statements need revision and whether users are relying, and discusses with management/governance the steps to notify users.",
        ],
        scoringActions: [
          "Ask 'did the condition exist at the balance-sheet date?'—yes ⇒ adjust (Type 1); no ⇒ disclose (Type 2).",
          "Use dual dating to avoid extending responsibility for all subsequent events when adding a single later event.",
          "Separate events occurring before the report date (Type 1/2 framework) from facts discovered after issuance (revision/notification duties).",
        ],
      },
      {
        id: "tp2",
        title: "Going concern evaluation and reporting (AU-C 570)",
        priority: "critical",
        examinerFocus:
          "Whether you can conclude on SUBSTANTIAL DOUBT about the entity's ability to continue as a going concern for a reasonable period, evaluate management's mitigating plans, and select the correct reporting outcome—an explanatory 'Going Concern' section when doubt remains but disclosure is adequate, versus a modified opinion when disclosure is inadequate.",
        typicalQuestionForms: [
          "MCQ: identify conditions/events that raise substantial doubt (recurring losses, negative working capital, default, denial of credit).",
          "MCQ: choose the reporting outcome given adequate vs inadequate going-concern disclosure.",
          "TBS: evaluate management's plans and conclude whether substantial doubt is alleviated, and draft/select the reporting language.",
        ],
        mustKnow: [
          "Substantial doubt is evaluated for a reasonable period of time—generally one year from the date the financial statements are issued (or available to be issued) under the applicable framework (ASC 205-40).",
          "The auditor evaluates whether management's plans are likely to be effectively implemented and will mitigate the conditions causing doubt; only feasible, probable plans count.",
          "If substantial doubt remains but disclosure is adequate, the report includes a separate 'Substantial Doubt About the Entity's Ability to Continue as a Going Concern' section (an unmodified opinion with that section); this is not a qualification.",
          "If going-concern disclosure is inadequate (a GAAP departure), the opinion is modified—qualified or adverse depending on pervasiveness.",
        ],
        scoringActions: [
          "State the reasonable period explicitly and tie it to the applicable framework rather than assuming.",
          "Test whether management's plans are probable of implementation before concluding doubt is alleviated.",
          "Distinguish an emphasis-style going-concern section (adequate disclosure) from a modified opinion (inadequate disclosure).",
        ],
      },
      {
        id: "tp3",
        title: "Written representations and audit wrap-up (AU-C 580)",
        priority: "high",
        examinerFocus:
          "Whether you know that written representations corroborate but never replace other evidence, that they must be dated as of the auditor's report date and cover the periods reported on, and that management's refusal to provide required representations is a scope limitation with severe reporting consequences.",
        typicalQuestionForms: [
          "MCQ: identify the effect of management's refusal to sign the representation letter.",
          "MCQ: determine the required dating and coverage of the representation letter.",
          "TBS: evaluate wrap-up procedures (final analytics, representation letter, review of contingencies) for completeness.",
        ],
        mustKnow: [
          "Written representations are audit evidence but are NOT a substitute for other sufficient appropriate evidence; they corroborate (AU-C 580).",
          "The representation letter is dated as of the date of the auditor's report (not later) and addresses all financial statements and periods covered by the report; management at the appropriate level signs.",
          "If management refuses to provide required written representations, or the auditor concludes there is sufficient doubt about management's integrity to make them unreliable, this is a scope limitation—ordinarily a disclaimer of opinion and possibly withdrawal.",
          "Final wrap-up includes overall analytical review, evaluation of going concern and subsequent events, review of contingencies/commitments, and assessment of accumulated misstatements.",
        ],
        scoringActions: [
          "Treat refusal to provide required representations as a scope limitation leading to a disclaimer, not merely a qualification.",
          "Confirm the letter is dated as of the report date and covers all periods presented.",
          "Never let a representation substitute for missing substantive evidence.",
        ],
      },
      {
        id: "tp4",
        title: "The opinion matrix: materiality × pervasiveness",
        priority: "critical",
        examinerFocus:
          "Whether you can choose the correct opinion using two axes—the nature of the problem (a GAAP misstatement vs a scope limitation) and its magnitude (material but not pervasive vs pervasive). This is the single most-tested reporting skill in AUD.",
        typicalQuestionForms: [
          "MCQ: given a GAAP departure or scope limitation and a pervasiveness cue, pick unmodified/qualified/adverse/disclaimer.",
          "MCQ: distinguish which problem type maps to adverse (GAAP) vs disclaimer (scope).",
          "TBS: read a fact pattern and select the opinion plus the basis-paragraph wording.",
        ],
        mustKnow: [
          "GAAP departure (material misstatement): material but not pervasive ⇒ QUALIFIED ('except for'); pervasive ⇒ ADVERSE.",
          "Scope limitation (unable to obtain sufficient appropriate evidence): material but not pervasive ⇒ QUALIFIED; pervasive ⇒ DISCLAIMER.",
          "'Pervasive' means the effect is not confined to specific elements—it is fundamental to users' understanding or represents a substantial portion of the statements.",
          "A qualified/adverse/disclaimer opinion is accompanied by a Basis for Modification section describing the matter and, where practicable, quantifying the effect.",
        ],
        scoringActions: [
          "Classify the problem first (GAAP vs scope), then apply the pervasiveness axis—never skip straight to a word.",
          "Map adverse to a pervasive GAAP problem and disclaimer to a pervasive scope problem; do not swap them.",
          "Add the Basis for Modification with quantified effects where practicable.",
        ],
      },
      {
        id: "tp5",
        title: "Report structure, EOM/OM paragraphs, and CAMs vs KAMs",
        priority: "high",
        examinerFocus:
          "Whether you know the current unmodified report structure (Opinion first, then Basis), the difference between emphasis-of-matter and other-matter paragraphs, and the distinction between required critical audit matters (CAMs) for issuers under PCAOB AS 3101 and optional key audit matters (KAMs) for nonissuers under AU-C 701.",
        typicalQuestionForms: [
          "MCQ: distinguish emphasis-of-matter (properly disclosed item within the statements) from other-matter (relevant to users' understanding of the audit/report).",
          "MCQ: identify where CAMs are required (issuers) vs KAMs (nonissuers, only when engaged).",
          "TBS: select the correct paragraph type and placement for a given circumstance (consistency change, going concern, prior-period statements audited by a predecessor).",
        ],
        mustKnow: [
          "Under SAS 134, the nonissuer report leads with the Opinion section, followed by Basis for Opinion, then any going-concern section, KAMs (if engaged), and the responsibilities sections.",
          "Emphasis-of-matter draws attention to a matter APPROPRIATELY presented/disclosed in the statements (e.g., a justified accounting-principle change, significant related-party transactions, going concern); it does not modify the opinion.",
          "Other-matter refers to something not presented in the statements but relevant to users' understanding of the audit, the report, or the auditor's responsibilities (e.g., prior period audited by a predecessor, restriction on use).",
          "CAMs are REQUIRED in issuer audit reports (PCAOB AS 3101, with limited exemptions such as certain EGCs/brokers); KAMs are OPTIONAL for nonissuers and reported only when the auditor is engaged to communicate them (AU-C 701).",
        ],
        scoringActions: [
          "Ask whether the matter is in the statements (emphasis-of-matter) or outside them (other-matter) to choose the paragraph type.",
          "Reserve CAMs for issuer reports and KAMs for engaged nonissuer reports—do not use them interchangeably.",
          "Confirm an emphasis paragraph never changes the opinion; if the underlying item is a misstatement, modify instead.",
        ],
      },
      {
        id: "tp6",
        title: "Comparatives, other information, and group audits",
        priority: "medium",
        examinerFocus:
          "Whether you can report correctly when prior periods are presented (including predecessor-auditor situations), address other information in documents containing audited statements, and decide whether a group engagement partner assumes responsibility for or makes reference to component auditors.",
        typicalQuestionForms: [
          "MCQ: determine reporting when a predecessor audited the prior-period statements (reissue vs successor reference in an other-matter paragraph).",
          "MCQ: identify the auditor's responsibility for 'other information' (e.g., MD&A-style narrative) accompanying the statements.",
          "TBS: decide reference vs assume-responsibility for a component auditor in a group audit.",
        ],
        mustKnow: [
          "When comparative statements include a prior period audited by a predecessor who does not reissue, the successor adds an other-matter paragraph stating the prior period was audited by another auditor, the type of opinion, and its date.",
          "The auditor reads other information in the annual report for material inconsistencies with the audited statements or material misstatements of fact and reports on it in a separate section (AU-C 720).",
          "In a group audit, the group engagement partner either assumes responsibility for component auditors' work (no reference) or makes reference to them in the auditor's report (dividing responsibility), provided conditions are met (AU-C 600).",
          "Reference to a component auditor is not a qualification and does not diminish the opinion; it allocates responsibility.",
        ],
        scoringActions: [
          "Use an other-matter paragraph for predecessor-audited prior periods when the predecessor does not reissue.",
          "Treat 'reference to component auditor' as an allocation of responsibility, not a modification.",
          "Address other information in its own report section rather than in the opinion.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Reporting is the highest-yield, most rule-driven AUD area. Master the opinion matrix and the going-concern/subsequent-events classifications to bank a large block of MCQs and the report-selection TBS.",
      timeBudget:
        "~1.25 min per MCQ; on a report-selection TBS, spend the first 2–3 minutes classifying the problem (GAAP vs scope; pervasive?) before choosing wording, and check issuer vs nonissuer differences.",
      answerSequence: [
        "Identify the entity type (issuer vs nonissuer) to fix the reporting framework (PCAOB vs AU-C).",
        "Classify the problem: GAAP misstatement, scope limitation, going concern, or an emphasis/other-matter circumstance.",
        "Apply the magnitude axis (material but not pervasive vs pervasive) to select the opinion.",
        "Add the correct section (Basis for Modification, going-concern section, EOM/OM, CAMs/KAMs) and verify dating.",
      ],
      qualityChecks: [
        "Did I map GAAP-pervasive → adverse and scope-pervasive → disclaimer (not the reverse)?",
        "Did I treat adequate going-concern disclosure as a separate section, not a qualification?",
        "Did I switch to PCAOB requirements (CAMs, tenure) for an issuer?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Subsequent events: adjust, disclose, or notify",
        testPointIds: ["tp1"],
        explanation: [
          "The subsequent-events framework turns on a single question: did the underlying CONDITION exist at the balance-sheet date? If yes, the event provides additional evidence about amounts that should have been recognized at year-end, so the statements are ADJUSTED—this is a Type 1 (recognized) event. The classic example is a customer whose receivable was already doubtful at year-end and who declares bankruptcy shortly after; the bankruptcy confirms the year-end impairment and the allowance is adjusted, not merely disclosed.",
          "If the condition AROSE after the balance-sheet date, the event does not change year-end amounts but may be so significant that omitting it would mislead users; it is DISCLOSED if material—this is a Type 2 (nonrecognized) event. Examples include a post-year-end fire that destroys a plant, a business combination after year-end, or a major issuance of stock or debt. The auditor's active review for such events runs through the date of the auditor's report.",
          "A separate regime governs facts that existed at the report date but become known to the auditor AFTER the report is issued (subsequently discovered facts). Here the auditor determines whether the statements need revision, whether people are currently relying on the report, and works with management and those charged with governance on the steps to prevent further reliance (revision and reissuance, or notification). If a single significant event is added between the original report date and issuance, DUAL DATING confines the auditor's added responsibility to that one matter, whereas redating the whole report extends responsibility for all subsequent events to the later date.",
        ],
        keyRules: [
          "Condition existed at year-end ⇒ Type 1 ⇒ adjust; condition arose after ⇒ Type 2 ⇒ disclose if material.",
          "Active subsequent-events review runs through the date of the auditor's report (AU-C 560).",
          "Dual dating limits added responsibility to the specific later event; redating extends it to all events through the new date.",
          "Facts discovered after issuance ⇒ assess revision, reliance, and notification duties.",
        ],
        workedProblem: {
          scenario:
            "A nonissuer has a December 31, Year 1 year-end; the auditor plans to date the report February 20, Year 2. Consider: (a) On January 15 a customer with a $200,000 year-end receivable—already 120 days past due at year-end—files for bankruptcy. (b) On February 10 a warehouse fire destroys $400,000 of inventory acquired in Year 2. (c) On February 25 (after the planned report date) the client signs a major acquisition; management wants it reflected. Determine the treatment and dating.",
          steps: [
            "Item (a): the receivable was already doubtful at year-end, so the bankruptcy confirms a condition existing at December 31 ⇒ Type 1 ⇒ ADJUST (increase the allowance / write down the receivable).",
            "Item (b): the fire is a new condition arising in Year 2 ⇒ Type 2 ⇒ DISCLOSE if material (it is), no adjustment to Year 1 amounts.",
            "Item (c): the acquisition occurs February 25, after the February 20 report date; if management adds disclosure, the auditor must extend procedures to that event.",
            "Dating decision for (c): to avoid extending responsibility for ALL subsequent events to February 25, the auditor DUAL DATES—e.g., 'February 20, Year 2, except for Note X, as to which the date is February 25, Year 2.'",
            "Document the extended procedures performed on the dual-dated matter only.",
          ],
          conclusion:
            "Adjust for (a) (Type 1), disclose (b) (Type 2), and add the acquisition (c) with DUAL DATING so the auditor's responsibility for other subsequent events is not extended beyond February 20.",
          markingNotes: [
            "Award marks for classifying (a) Type 1 adjust and (b) Type 2 disclose using the 'condition existed?' test.",
            "Award marks for choosing dual dating for the later added event.",
            "Full marks require the dual-date wording concept and limiting extended procedures to that matter.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Going concern: substantial doubt, management's plans, and the report",
        testPointIds: ["tp2"],
        explanation: [
          "Going concern is a two-part evaluation. First, do conditions and events, considered in the aggregate, raise SUBSTANTIAL DOUBT about the entity's ability to continue for a reasonable period? Recurring operating losses, negative working capital or cash flows, loan defaults or denial of credit, loss of a key customer or franchise, and legal proceedings are typical triggers. The reasonable period is generally one year from the date the financial statements are issued (or available to be issued) under ASC 205-40; the auditor's evaluation aligns with the framework's period.",
          "Second, if conditions raise substantial doubt, the auditor evaluates management's plans to mitigate them—asset sales, borrowing or restructuring debt, reducing or delaying expenditures, or raising equity. Only plans that are both feasible and probable of being effectively implemented count; a wish list does not alleviate doubt. If the plans alleviate the doubt and disclosure is adequate, no going-concern section is required (though disclosure of the conditions may still be needed).",
          "The reporting outcome depends on whether doubt remains and whether disclosure is adequate. If substantial doubt remains but the statements adequately disclose it, the auditor expresses an UNMODIFIED opinion and adds a separate section headed 'Substantial Doubt About the Entity's Ability to Continue as a Going Concern'—this is not a qualification. If the disclosure is inadequate, that is a GAAP departure and the opinion is modified (qualified or adverse depending on pervasiveness). For issuers, PCAOB reporting uses an explanatory paragraph for the same substance.",
        ],
        keyRules: [
          "Reasonable period ≈ one year from issuance/availability under ASC 205-40 (AU-C 570 aligns to the framework).",
          "Only feasible, probable-of-implementation management plans alleviate substantial doubt.",
          "Doubt remains + adequate disclosure ⇒ unmodified opinion with a separate going-concern section (not a qualification).",
          "Inadequate disclosure ⇒ GAAP departure ⇒ qualified or adverse.",
        ],
        workedProblem: {
          scenario:
            "A nonissuer has recurring losses, a working-capital deficit, and defaulted on a bank covenant during Year 1. Management presents a plan: (i) a signed refinancing term sheet with a new lender expected to close in Q1 Year 2, and (ii) a hoped-for but uncommitted equity raise. The Year 1 statements fully disclose the conditions and the plan. Determine the going-concern conclusion and reporting.",
          steps: [
            "Identify conditions raising substantial doubt: recurring losses, working-capital deficit, covenant default—clearly sufficient in the aggregate.",
            "Evaluate management's plans for probability of effective implementation: the signed refinancing term sheet is feasible and probable; the uncommitted equity raise is speculative and given little weight.",
            "Assess whether the credible plan alleviates the doubt: a term sheet is not a closed financing, so at the report date substantial doubt is NOT fully alleviated.",
            "Assess disclosure adequacy: the statements fully disclose the conditions and plans ⇒ adequate.",
            "Select reporting: unmodified opinion PLUS a separate 'Substantial Doubt About the Entity's Ability to Continue as a Going Concern' section—not a qualification, because disclosure is adequate.",
          ],
          conclusion:
            "Substantial doubt remains despite the plans, but disclosure is adequate, so the auditor issues an unmodified opinion with a separate going-concern section. Had disclosure been inadequate, the opinion would be qualified or adverse.",
          markingNotes: [
            "Award marks for weighting the signed term sheet over the uncommitted equity raise.",
            "Award marks for concluding doubt is not alleviated at the report date.",
            "Full marks require the correct report: unmodified + separate going-concern section (not a qualification).",
          ],
        },
      },
      {
        id: "sn3",
        title: "Written representations and the wrap-up phase",
        testPointIds: ["tp3"],
        explanation: [
          "Written representations from management are a required part of every audit, but their role is precise: they corroborate other evidence and confirm management's acknowledgment of its responsibilities; they are NOT a substitute for the sufficient appropriate evidence the auditor must otherwise obtain. If a representation is the only 'evidence' for a material assertion, the audit is incomplete.",
          "The letter must be dated as of the date of the auditor's report (and no later) and must address all the financial statements and periods covered by the report. It is signed by management at the appropriate level (typically the CEO and CFO). It confirms responsibility for the statements and internal control, completeness of information, disclosure of fraud and related-party transactions, subsequent events, and other matters specific to the engagement.",
          "Refusal is decisive. If management will not provide required written representations—or if the auditor concludes management's integrity is such that the representations are unreliable—this is a scope limitation that ordinarily precludes an opinion (a disclaimer) and may require withdrawal, because it casts doubt over management's other representations throughout the audit. The wrap-up phase around the letter includes final overall analytics, evaluation of going concern and subsequent events, review of contingencies and commitments (including legal-letter responses), and evaluation of accumulated misstatements.",
        ],
        keyRules: [
          "Representations corroborate; they never substitute for other sufficient appropriate evidence (AU-C 580).",
          "Letter dated as of the auditor's report date; covers all periods reported on; signed by appropriate management.",
          "Refusal to provide required representations ⇒ scope limitation ⇒ ordinarily disclaimer and possible withdrawal.",
          "Wrap-up: final analytics, going concern, subsequent events, contingencies, accumulated misstatements.",
        ],
        workedProblem: {
          scenario:
            "Near completion of a nonissuer audit, management agrees to sign the representation letter but strikes out the paragraph representing that it has disclosed all known instances of fraud or suspected fraud, saying it 'would rather not commit to that.' All other evidence is satisfactory. How should the auditor respond and what is the reporting effect?",
          steps: [
            "Recognize that the fraud-disclosure representation is a required element, not optional.",
            "Evaluate what the refusal signals: an unwillingness to represent completeness of fraud disclosure undermines the reliability of ALL of management's representations and casts doubt on integrity.",
            "Determine that a required representation is effectively withheld ⇒ this is a scope limitation on the audit as a whole, not a narrow one.",
            "Consider the pervasiveness: because it taints the reliability of management's representations generally, the effect is pervasive.",
            "Conclude on reporting: the auditor should ordinarily DISCLAIM an opinion (or withdraw), and consider communications to those charged with governance and any legal/regulatory obligations.",
          ],
          conclusion:
            "Striking a required fraud representation is a scope limitation that undermines all representations; the appropriate response is ordinarily a disclaimer of opinion (or withdrawal), not merely a qualified opinion—regardless that other evidence was satisfactory.",
          markingNotes: [
            "Award marks for identifying the fraud representation as required and its refusal as a scope limitation.",
            "Award marks for recognizing the effect is pervasive because it taints all representations.",
            "Full marks require the disclaimer/withdrawal conclusion and governance communication.",
          ],
        },
      },
      {
        id: "sn4",
        title: "The opinion matrix and the mechanics of a modification",
        testPointIds: ["tp4", "tp5"],
        explanation: [
          "Selecting an opinion is a two-axis decision, and doing it in the wrong order is the classic error. First axis—the NATURE of the problem: is it a GAAP departure (the statements are materially misstated) or a scope limitation (the auditor could not obtain sufficient appropriate evidence)? Second axis—the MAGNITUDE: is the effect material but not pervasive, or pervasive? 'Pervasive' means the effect is not confined to specific elements but is fundamental to users' understanding, or affects a substantial proportion of the statements, or (for disclosures) is fundamental.",
          "The matrix then reads cleanly. GAAP departure, material but not pervasive ⇒ QUALIFIED ('except for'); GAAP departure, pervasive ⇒ ADVERSE. Scope limitation, material but not pervasive ⇒ QUALIFIED; scope limitation, pervasive ⇒ DISCLAIMER. The two pervasive outcomes are the ones candidates swap: a pervasive GAAP problem is ADVERSE (the statements are wrong), while a pervasive scope problem is a DISCLAIMER (the auditor cannot form an opinion).",
          "The mechanics matter for full marks. A modified opinion is paired with a 'Basis for Qualified/Adverse Opinion' or 'Basis for Disclaimer of Opinion' section that describes the matter and, for misstatements, quantifies the effect where practicable. Under SAS 134 the Opinion section comes first, then the Basis section. Do not confuse a modification with an emphasis-of-matter paragraph: an emphasis paragraph highlights something properly presented and NEVER changes the opinion; if the item is actually a misstatement, you modify instead.",
        ],
        keyRules: [
          "Axis 1: GAAP departure vs scope limitation. Axis 2: material-not-pervasive vs pervasive.",
          "GAAP: not pervasive ⇒ qualified; pervasive ⇒ adverse. Scope: not pervasive ⇒ qualified; pervasive ⇒ disclaimer.",
          "Pair a modification with a Basis for Modification section quantifying effects where practicable.",
          "Emphasis-of-matter never modifies the opinion; use it only for properly presented items.",
        ],
        workedProblem: {
          scenario:
            "Two independent nonissuer situations: (A) The client refuses to write down clearly impaired goodwill; the overstatement is large and, because goodwill dominates the balance sheet, the auditor judges the effect pervasive. (B) The client engaged the auditor after year-end, so the auditor could not observe the opening or closing physical inventory and no alternative procedures were feasible; inventory is a major balance and the effect on financial position and results is pervasive. Select the opinion for each.",
          steps: [
            "Situation A—classify nature: refusal to record a required write-down is a GAAP departure (material misstatement).",
            "Situation A—magnitude: the effect is pervasive (goodwill dominates the balance sheet) ⇒ GAAP + pervasive ⇒ ADVERSE opinion, with a Basis for Adverse Opinion quantifying the impairment.",
            "Situation B—classify nature: inability to observe inventory with no alternative procedures is a SCOPE limitation.",
            "Situation B—magnitude: inventory is major and the effect is pervasive ⇒ scope + pervasive ⇒ DISCLAIMER of opinion, with a Basis for Disclaimer describing the limitation.",
            "Cross-check the common trap: do not issue a disclaimer for the GAAP problem (A) or an adverse for the scope problem (B).",
          ],
          conclusion:
            "Situation A is an ADVERSE opinion (pervasive GAAP misstatement); situation B is a DISCLAIMER (pervasive scope limitation). Each is paired with the appropriate Basis section.",
          markingNotes: [
            "Award marks for classifying A as GAAP and B as scope.",
            "Award marks for mapping pervasive-GAAP → adverse and pervasive-scope → disclaimer (not reversed).",
            "Full marks require pairing each with the correct Basis for Modification section.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Emphasis-of-matter, other-matter, and CAMs vs KAMs",
        testPointIds: ["tp5", "tp6"],
        explanation: [
          "Additional communications in the report come in distinct flavors, and the exam rewards precise placement. An EMPHASIS-OF-MATTER paragraph draws users' attention to a matter that is APPROPRIATELY presented or disclosed in the financial statements—a justified change in accounting principle, significant related-party transactions, a major catastrophe, or going concern. Because the underlying item is correctly handled, the opinion is unmodified; the paragraph merely spotlights it. An OTHER-MATTER paragraph, by contrast, refers to something NOT presented in the statements but relevant to users' understanding of the audit, the auditor's responsibilities, or the report—such as a prior period audited by a predecessor, or a restriction on the report's use.",
          "Critical audit matters and key audit matters are a separate, issuer-versus-nonissuer distinction. CAMs are REQUIRED in the audit reports of issuers under PCAOB AS 3101 (with limited exemptions, e.g., certain emerging growth companies and brokers/dealers). A CAM is a matter communicated to the audit committee that relates to material accounts/disclosures and involved especially challenging, subjective, or complex auditor judgment. KAMs are the AU-C 701 analog for nonissuers, but they are OPTIONAL—reported only when the auditor is engaged to communicate them.",
          "Reporting the item does not change the opinion. Neither a CAM/KAM nor an emphasis paragraph is a modification; they inform rather than qualify. Issuer reports also disclose auditor tenure (year the auditor began serving), and the PCAOB report structure differs in headings from the AU-C structure, so the first screening question in any reporting item is whether the client is an issuer or a nonissuer.",
        ],
        keyRules: [
          "Emphasis-of-matter = properly presented item inside the statements; opinion unmodified.",
          "Other-matter = item outside the statements relevant to the audit/report (e.g., predecessor-audited prior period).",
          "CAMs required for issuers (PCAOB AS 3101, limited exemptions); KAMs optional for nonissuers (AU-C 701).",
          "None of these changes the opinion; issuer reports also disclose auditor tenure.",
        ],
        workedProblem: {
          scenario:
            "For a nonissuer audit, decide the correct report treatment for each: (a) the client changed from FIFO to weighted-average, a justified change properly disclosed; (b) the prior-period comparative statements were audited by a predecessor auditor who will not reissue their report; (c) the engagement letter does not ask the auditor to communicate key audit matters.",
          steps: [
            "Item (a): a justified, properly disclosed change in accounting principle is highlighted with an EMPHASIS-OF-MATTER paragraph; the opinion stays unmodified.",
            "Item (b): the predecessor-audited prior period (no reissue) is addressed with an OTHER-MATTER paragraph stating the prior period was audited by another auditor, the type of opinion expressed, and its date.",
            "Item (c): because the auditor was not engaged to communicate KAMs, NO key-audit-matters section is included (KAMs are optional for nonissuers).",
            "Confirm none of these modifies the opinion.",
            "Confirm placement: emphasis and other-matter paragraphs follow the Basis for Opinion (and any going-concern/KAM sections) per the standard structure.",
          ],
          conclusion:
            "Use an emphasis-of-matter paragraph for the justified accounting change (a), an other-matter paragraph for the predecessor-audited comparatives (b), and omit KAMs (c) since they were not engaged—none of which modifies the opinion.",
          markingNotes: [
            "Award marks for emphasis-of-matter on the in-statement item (a) and other-matter on the outside-the-statements item (b).",
            "Award marks for recognizing KAMs are optional for nonissuers (c).",
            "Full marks require stating none of these changes the opinion.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp4", "tp2"],
        style: "Task-based simulation (report selection)",
        question:
          "Select the appropriate opinion (and any added section) for each independent nonissuer situation: (1) inventory is materially overstated because the client refuses a required write-down; the effect is material but confined to inventory and not pervasive. (2) The auditor could not obtain sufficient evidence over a single, isolated investment that is material but not pervasive. (3) Substantial doubt about going concern exists, but the statements disclose it fully and appropriately. (4) The client refuses to record a material, pervasive related-party liability that permeates the statements.",
        answerPlan: [
          "Classify each as GAAP vs scope; assess pervasiveness.",
          "(1) GAAP, not pervasive → qualified.",
          "(2) Scope, not pervasive → qualified.",
          "(3) Going concern, adequate disclosure → unmodified + going-concern section.",
          "(4) GAAP, pervasive → adverse.",
        ],
        modelAnswer:
          "(1) A refused required write-down is a GAAP departure; because it is material but not pervasive (confined to inventory), the opinion is QUALIFIED ('except for'), with a Basis for Qualified Opinion quantifying the overstatement. (2) Inability to obtain sufficient evidence over one isolated, material-but-not-pervasive investment is a scope limitation of limited reach, so the opinion is QUALIFIED, with a Basis for Qualified Opinion describing the limitation. (3) When substantial doubt about going concern exists but the statements adequately disclose it, the auditor issues an UNMODIFIED opinion and adds a separate 'Substantial Doubt About the Entity's Ability to Continue as a Going Concern' section—this is not a qualification. (4) A refused, material, and pervasive related-party liability is a GAAP departure that is pervasive, so the opinion is ADVERSE, with a Basis for Adverse Opinion. The disciplined method is to classify GAAP vs scope first, then apply the pervasiveness axis; the pervasive cases split adverse (GAAP) from disclaimer (scope).",
        markingGuide: [
          "1 mark each for the correct opinion on items 1–4.",
          "1 mark for adding the correct section (Basis for Qualified/Adverse; going-concern section).",
          "1 mark for treating adequate going-concern disclosure as unmodified, not qualified.",
          "Deduct if adverse and disclaimer are swapped in the pervasive cases.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1", "tp3"],
        style: "Constructed response",
        question:
          "A nonissuer's report is dated March 5. On March 3 the auditor learns a lawsuit outstanding at year-end was settled for an amount far above the recorded accrual; management adjusts the accrual. On March 12 (after issuance) the auditor learns of a customer bankruptcy filed March 1 relating to a receivable that was current and healthy at year-end. Explain the correct treatment of each and how the representation letter interacts.",
        answerPlan: [
          "March 3 settlement of pre-existing suit → Type 1 adjust (before report date).",
          "March 12 discovery: bankruptcy relates to a Year 2 condition (customer healthy at year-end) → Type 2 nature, and it is a subsequently discovered fact learned after issuance.",
          "Representation letter dated as of the report date (March 5) and covers subsequent events through then.",
        ],
        modelAnswer:
          "The March 3 settlement concerns litigation that existed at the balance-sheet date, so it is a Type 1 (recognized) subsequent event that provides evidence about a year-end condition; management correctly ADJUSTS the accrual, and because this occurs before the March 5 report date it is captured by the normal subsequent-events review. The March 12 information is different in two ways. Substantively, the customer was healthy at year-end and the bankruptcy relates to conditions arising in Year 2, so it is a Type 2 (nonrecognized) matter that would only ever be a disclosure, not an adjustment. Procedurally, it is a subsequently discovered fact learned AFTER issuance; but because the condition did not exist at the balance-sheet date and the year-end statements are not misstated, no revision of the issued statements is required—the auditor is not obligated to adjust or reissue for a Year 2 event, though it may be relevant to Year 2. The representation letter is dated as of the auditor's report date (March 5) and includes management's representation that all subsequent events through that date have been considered; it corroborates but does not replace the auditor's own subsequent-events procedures.",
        markingGuide: [
          "1 mark: March 3 settlement is Type 1 (adjust) because the condition existed at year-end.",
          "1 mark: March 12 bankruptcy relates to a Year 2 condition (Type 2 nature), so Year 1 statements are not misstated.",
          "1 mark: recognizing the March 12 item as a subsequently discovered fact but concluding no revision is required.",
          "1 mark: representation letter dated as of the report date and its corroborating (not substituting) role.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5", "tp6"],
        style: "MCQ set rationale",
        question:
          "Explain, for an issuer versus a nonissuer, (a) how critical audit matters and key audit matters differ in whether they must be reported, and (b) whether an emphasis-of-matter paragraph or a modified opinion is appropriate when a company makes a justified, properly disclosed change from one acceptable accounting principle to another.",
        answerPlan: [
          "CAMs required for issuers (PCAOB AS 3101); KAMs optional for nonissuers (AU-C 701).",
          "Justified, properly disclosed change → emphasis-of-matter, not a modification.",
        ],
        modelAnswer:
          "(a) For an issuer, PCAOB AS 3101 REQUIRES the auditor to communicate critical audit matters—matters communicated to the audit committee that relate to material accounts or disclosures and involved especially challenging, subjective, or complex auditor judgment (subject to limited exemptions such as certain emerging growth companies). For a nonissuer, the AU-C 701 analog is key audit matters, but reporting them is OPTIONAL: the auditor communicates KAMs only when engaged to do so. So the same substance is mandatory for issuers and elective for nonissuers. (b) A justified change from one acceptable accounting principle to another, properly disclosed in the statements, does not make the statements wrong, so the opinion is NOT modified. Instead the auditor adds an EMPHASIS-OF-MATTER paragraph drawing attention to the change and referring to the relevant note. A modification (qualified/adverse) would be appropriate only if the change were unjustified, improperly applied, or inadequately disclosed—i.e., a GAAP departure.",
        markingGuide: [
          "1 mark: CAMs required for issuers.",
          "1 mark: KAMs optional for nonissuers (only when engaged).",
          "1 mark: justified/disclosed change → emphasis-of-matter, opinion unmodified.",
          "1 mark: modification only if the change is unjustified/improper/inadequately disclosed.",
        ],
      },
    ],
  }),

  // ===================================================================
  // AUD m8 — Other assurance & attestation engagements
  // ===================================================================
  "cpa-aud-m8": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Levels of assurance and engagement selection",
        priority: "critical",
        examinerFocus:
          "Whether you can place an engagement on the assurance ladder—reasonable (audit/examination), limited (review), or none (compilation, preparation, agreed-upon procedures)—and infer the procedures and report from the assurance level, rather than memorizing report wording in isolation.",
        typicalQuestionForms: [
          "MCQ: match an engagement type to its assurance level and the form of conclusion it yields.",
          "MCQ: identify which engagement provides negative (limited) assurance versus a positive opinion versus no assurance.",
          "TBS: complete an assurance-ladder grid mapping engagement type → standards → procedures → report.",
        ],
        mustKnow: [
          "Reasonable assurance (a positive opinion) comes from an audit (AU-C) or an examination (SSAE); limited assurance (negative assurance—'nothing came to our attention') comes from a review (SSARS review of financial statements, or SSAE review of other subject matter).",
          "Compilations and preparation engagements (SSARS) provide NO assurance; agreed-upon procedures (SSAE) provide NO assurance—only findings.",
          "The level of assurance drives the extent of procedures: audits use testing; reviews use inquiry and analytics; compilations/preparations use no verification.",
          "The applicable standard set depends on the engagement: AU-C for audits, SSARS/AR-C for preparation/compilation/review of nonissuer statements, SSAE/AT-C for attestation on other subject matter.",
        ],
        scoringActions: [
          "Fix the assurance level first, then deduce the procedures and report form.",
          "Match the standard set to the engagement (AU-C vs AR-C vs AT-C) before applying a rule.",
          "Never attribute a positive opinion to a review or any assurance to a compilation/AUP.",
        ],
      },
      {
        id: "tp2",
        title: "SSARS: preparation, compilation, and review (AR-C 70/80/90)",
        priority: "critical",
        examinerFocus:
          "Whether you can distinguish the three SSARS services—preparation (AR-C 70, no report, no assurance), compilation (AR-C 80, a report but no assurance), and review (AR-C 90, limited assurance)—including the independence rules and the review's inquiry-and-analytics procedure set and negative-assurance conclusion.",
        typicalQuestionForms: [
          "MCQ: identify whether independence is required and how lack of independence is handled for each SSARS service.",
          "MCQ: choose the correct conclusion wording (negative assurance for a review; none for compilation/preparation).",
          "TBS: classify described procedures and reports as preparation, compilation, or review.",
        ],
        mustKnow: [
          "Preparation (AR-C 70): the accountant prepares financial statements but issues NO report and provides NO assurance; each page carries a legend such as 'No assurance is provided'; independence is not required and need not be determined.",
          "Compilation (AR-C 80): the accountant issues a compilation report but performs no verification and provides NO assurance; independence is NOT required, but if the accountant is not independent, that fact must be disclosed in the report (the reason may optionally be given).",
          "Review (AR-C 90): the accountant obtains LIMITED assurance primarily through inquiry and analytical procedures and expresses negative assurance—'we are not aware of any material modifications that should be made'; independence IS required, and lack of independence precludes a review.",
          "A review engagement requires a signed engagement letter, management representations, and analytical procedures with developed expectations; it is not an audit and does not test details or controls.",
        ],
        scoringActions: [
          "Screen for independence: required for a review, not for compilation/preparation (disclose lack of independence in a compilation).",
          "Use negative-assurance wording only for a review; give no assurance for compilation/preparation.",
          "Confirm a review's evidence is inquiry + analytics, not tests of details.",
        ],
      },
      {
        id: "tp3",
        title: "Attestation engagements under SSAE (AT-C)",
        priority: "high",
        examinerFocus:
          "Whether you understand attestation applies to subject matter OTHER than historical financial statements, comes in examination/review/AUP forms with corresponding assurance levels, and can be assertion-based or direct—and that the practitioner reports on the subject matter or an assertion about it.",
        typicalQuestionForms: [
          "MCQ: match an attestation engagement (examination/review/AUP) to its assurance level and conclusion form.",
          "MCQ: distinguish assertion-based from direct examination reporting.",
          "TBS: select the appropriate SSAE engagement and report for a described subject matter (e.g., greenhouse-gas metrics, compliance with a contract).",
        ],
        mustKnow: [
          "SSAE (AT-C) engagements address subject matter such as compliance, prospective financial information, MD&A, sustainability metrics, and controls—not historical financial statements (which are audited under AU-C or reviewed under SSARS).",
          "Examination = reasonable assurance (a positive opinion); review = limited assurance (negative assurance); agreed-upon procedures = no assurance (findings only).",
          "Assertion-based reporting expresses a conclusion on management's WRITTEN ASSERTION; direct reporting expresses a conclusion directly on the SUBJECT MATTER.",
          "The practitioner must be independent for examination and review attestation engagements and must have a reasonable basis (suitable and available criteria) for the conclusion.",
        ],
        scoringActions: [
          "Route non-historical-financial subject matter to SSAE/AT-C, not AU-C or SSARS.",
          "Match examination→opinion, review→negative assurance, AUP→findings.",
          "Identify whether the report is on the assertion or directly on the subject matter.",
        ],
      },
      {
        id: "tp4",
        title: "Agreed-upon procedures (AT-C 215)",
        priority: "high",
        examinerFocus:
          "Whether you know an AUP engagement expresses NO opinion or conclusion—only findings from procedures the engaging party has agreed are appropriate—and the updated features under the revised standard (no required assertion from the responsible party; engaging party takes responsibility for sufficiency; general-use reporting now permitted).",
        typicalQuestionForms: [
          "MCQ: identify what an AUP report contains (procedures + findings, no assurance) and who determines the procedures.",
          "MCQ: recognize updated AT-C 215 features (no assertion required; engaging party responsibility; general use).",
          "TBS: draft/select an AUP report and distinguish it from a review or examination.",
        ],
        mustKnow: [
          "In an AUP engagement the engaging party agrees the procedures are appropriate/sufficient for its purpose and takes responsibility for that sufficiency; the practitioner performs them and reports FINDINGS, expressing no opinion or conclusion (AT-C 215).",
          "Under the revised standard the practitioner is not required to obtain a written assertion from the responsible party, and the report may be for GENERAL use rather than always restricted.",
          "The practitioner must be independent and must not report vague or subjective terms without agreed, measurable criteria for the procedures.",
          "AUP differs from an examination (no opinion) and a review (no negative assurance)—it is strictly a findings report.",
        ],
        scoringActions: [
          "State that an AUP report gives findings only—no opinion, no conclusion, no assurance.",
          "Attribute responsibility for procedure sufficiency to the engaging party, not the practitioner.",
          "Apply the revised AT-C 215 features (no required assertion; possible general use) rather than the superseded restricted-use-only rule.",
        ],
      },
      {
        id: "tp5",
        title: "Reporting on service organizations (SOC 1/2/3, Type 1/2)",
        priority: "high",
        examinerFocus:
          "Whether you can distinguish SOC 1 (controls over user entities' financial reporting) from SOC 2 (trust-services criteria) and SOC 3 (general-use summary), and Type 1 (design at a point in time) from Type 2 (design plus operating effectiveness over a period)—and how a user auditor uses a SOC 1 Type 2 report.",
        typicalQuestionForms: [
          "MCQ: match SOC 1/2/3 to its subject matter and intended users, and Type 1/2 to its coverage.",
          "MCQ: determine how a user auditor uses a service organization's SOC report as audit evidence.",
          "TBS: select the appropriate SOC report and type for a described outsourcing scenario.",
        ],
        mustKnow: [
          "SOC 1 (AT-C 320) reports on a service organization's controls relevant to USER ENTITIES' internal control over financial reporting—restricted use (management, user entities, and their auditors).",
          "SOC 2 reports on controls relevant to the trust services criteria (security, availability, processing integrity, confidentiality, privacy)—restricted use; SOC 3 is a general-use, short-form report without the detailed description and tests.",
          "Type 1 covers the DESIGN and implementation of controls at a point in time; Type 2 covers design AND operating effectiveness over a period (and includes the service auditor's tests and results).",
          "A user auditor typically needs a SOC 1 TYPE 2 report to obtain evidence about the operating effectiveness of the service organization's controls; carve-out vs inclusive methods affect coverage of subservice organizations.",
        ],
        scoringActions: [
          "Match SOC 1→ICFR, SOC 2→trust services, SOC 3→general-use summary.",
          "Use Type 2 (not Type 1) when operating-effectiveness evidence over a period is needed.",
          "Recognize SOC 1/2 are restricted-use while SOC 3 is general-use.",
        ],
      },
      {
        id: "tp6",
        title: "Special engagements: prospective, pro forma, and special-purpose frameworks",
        priority: "medium",
        examinerFocus:
          "Whether you can report on prospective financial information (forecasts vs projections), pro forma financial information, and special-purpose framework (OCBOA) statements—including the required caveat/use restrictions and the added description of the framework.",
        typicalQuestionForms: [
          "MCQ: distinguish a financial forecast (general use) from a projection (limited/restricted use) and their required caveats.",
          "MCQ: identify reporting for special-purpose framework (cash, tax, regulatory, contractual) statements.",
          "TBS: select the appropriate report and paragraphs for a pro forma or special-purpose framework engagement.",
        ],
        mustKnow: [
          "A financial FORECAST reflects expected conditions and is for general use; a financial PROJECTION is based on hypothetical assumptions ('what-if') and is restricted to specified parties; both examination reports include a caveat that actual results may differ.",
          "Pro forma financial information shows the effect of a transaction as if it had occurred earlier; the examination/review reports on whether management's assumptions and pro forma adjustments are properly applied.",
          "Special-purpose frameworks (cash, tax, regulatory, contractual—collectively OCBOA when applicable) require a description of the framework and, for certain frameworks, an emphasis-of-matter alert and use restriction.",
          "The practitioner does not vouch for achievability of prospective results—only that the presentation conforms to guidelines and assumptions provide a reasonable basis.",
        ],
        scoringActions: [
          "Distinguish forecast (general use) from projection (hypothetical, restricted use) and include the achievability caveat.",
          "For special-purpose frameworks, describe the framework and apply the required alert/use restriction.",
          "Do not express assurance that prospective results will be achieved.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "This module is a taxonomy: score by nailing the assurance level, standard set, and report form for each engagement type. The SSARS independence rules and SOC 1/2/3 × Type 1/2 grids are near-automatic points once memorized.",
      timeBudget:
        "~1.25 min per MCQ; on a classification TBS, build the assurance-ladder or SOC grid first (2–3 minutes) and then fill each row, checking independence and use-restriction rules.",
      answerSequence: [
        "Identify the subject matter: historical financial statements (AU-C/SSARS) vs other subject matter (SSAE).",
        "Fix the assurance level (reasonable / limited / none) and thus the engagement type.",
        "Apply the standard-specific rules (independence, report wording, use restriction).",
        "For service organizations, pick SOC 1/2/3 and Type 1/2 to match the user's need.",
      ],
      qualityChecks: [
        "Did I require independence for a review but not for a compilation (disclosing lack of independence)?",
        "Did I give findings-only for AUP and negative assurance only for a review?",
        "Did I pick SOC 1 Type 2 when operating-effectiveness evidence over a period was needed?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The assurance ladder as an organizing map",
        testPointIds: ["tp1", "tp3"],
        explanation: [
          "Almost every m8 question can be answered by placing the engagement on a ladder of assurance and reading off the consequences. At the top is REASONABLE assurance, expressed as a positive opinion, obtained through an audit (of historical financial statements, under AU-C) or an examination (of other subject matter, under SSAE). In the middle is LIMITED assurance, expressed as negative assurance ('nothing came to our attention'), obtained through a review—of financial statements under SSARS or of other subject matter under SSAE. At the bottom is NO assurance: compilations and preparation engagements (SSARS) and agreed-upon procedures (SSAE), which report information or findings without any conclusion.",
          "The assurance level is not just a label; it dictates the procedures. An audit/examination requires evidence-gathering through testing (inspection, confirmation, recalculation, and so on). A review relies on inquiry and analytical procedures—far less work, hence only limited assurance. Compilations and preparations involve no verification at all, and AUP involves only the specific procedures the engaging party agreed to. If you know the assurance level, you can predict both the procedures and the form of the report.",
          "The second organizing question is the standard set, which follows the subject matter. Historical financial statements are audited under AU-C or, for nonissuers seeking less than an audit, handled under SSARS (AR-C). Any other subject matter—compliance, sustainability metrics, prospective information, controls at a service organization—falls under SSAE (AT-C). Getting the standard set right is often worth the mark on its own, because the wrong-standard answer is the exam's favorite distractor.",
        ],
        keyRules: [
          "Reasonable assurance → audit (AU-C) / examination (SSAE): positive opinion via testing.",
          "Limited assurance → review (SSARS or SSAE): negative assurance via inquiry + analytics.",
          "No assurance → compilation/preparation (SSARS) and AUP (SSAE): information or findings only.",
          "Standard set follows subject matter: AU-C/AR-C for historical FS; AT-C for other subject matter.",
        ],
        workedProblem: {
          scenario:
            "A CPA is approached for four engagements: (1) a bank wants positive assurance on a private company's annual financial statements; (2) a nonissuer wants limited assurance on its financial statements to satisfy a lender; (3) a company wants a report on whether its greenhouse-gas emissions statement is fairly stated (reasonable assurance); (4) a landlord wants the CPA to perform specified procedures on a tenant's sales records and report the numeric findings. Identify each engagement, its standard set, and its assurance level.",
          steps: [
            "Engagement (1): positive assurance on historical financial statements ⇒ an AUDIT under AU-C ⇒ reasonable assurance, positive opinion.",
            "Engagement (2): limited assurance on a nonissuer's financial statements ⇒ a REVIEW under SSARS (AR-C 90) ⇒ limited assurance, negative-assurance conclusion; independence required.",
            "Engagement (3): reasonable assurance on non-financial-statement subject matter (emissions) ⇒ an EXAMINATION under SSAE (AT-C) ⇒ reasonable assurance, positive opinion.",
            "Engagement (4): specified procedures with numeric findings and no conclusion ⇒ AGREED-UPON PROCEDURES under SSAE (AT-C 215) ⇒ no assurance, findings only.",
            "Cross-check the traps: (2) is not an audit; (3) is not an AU-C audit because it is not historical financial statements; (4) yields no opinion.",
          ],
          conclusion:
            "(1) Audit/AU-C/reasonable; (2) Review/SSARS/limited; (3) Examination/SSAE/reasonable; (4) AUP/SSAE/none. Assurance level and subject matter together fix the standard set and report form.",
          markingNotes: [
            "Award marks for the correct engagement type on each.",
            "Award marks for the correct standard set (AU-C vs SSARS vs SSAE).",
            "Full marks require the matching assurance level and report form, and requiring independence for the review.",
          ],
        },
      },
      {
        id: "sn2",
        title: "SSARS trio: preparation vs compilation vs review",
        testPointIds: ["tp2"],
        explanation: [
          "The three SSARS services form a progression. A PREPARATION engagement (AR-C 70) is a nonattest bookkeeping-type service: the accountant prepares financial statements but issues NO report and provides NO assurance. Each page carries a legend such as 'No assurance is provided on these financial statements'; if no such legend is used, the accountant must issue a disclaimer. Independence is not required and, notably, need not even be evaluated.",
          "A COMPILATION (AR-C 80) adds a report but still no assurance. The accountant assembles the statements and reads them for obvious appropriateness but performs no inquiry, analytics, or verification. The compilation report explicitly states that no assurance is provided. Independence is NOT required for a compilation, but if the accountant lacks independence, the report must disclose that fact; the accountant may (optionally) describe the reason(s) for the lack of independence.",
          "A REVIEW (AR-C 90) is the only SSARS service that provides assurance—LIMITED assurance, expressed as negative assurance: 'we are not aware of any material modifications that should be made for the statements to be in accordance with the applicable framework.' The evidence base is inquiry of management and analytical procedures with developed expectations—not tests of details or controls. A review requires a signed engagement letter, a management representation letter, and, critically, INDEPENDENCE; if the accountant is not independent, a review cannot be performed. The most-tested contrast is therefore independence: mandatory for a review, not for a compilation (disclose if lacking), and irrelevant to determine for a preparation.",
        ],
        keyRules: [
          "Preparation (AR-C 70): no report, no assurance, 'no assurance' legend; independence not required or evaluated.",
          "Compilation (AR-C 80): report but no assurance; independence not required, but lack of independence must be disclosed.",
          "Review (AR-C 90): limited/negative assurance via inquiry + analytics; independence REQUIRED.",
          "Only a review provides assurance; review needs engagement letter + management representations.",
        ],
        workedProblem: {
          scenario:
            "A CPA who owns a small direct equity interest in Client Q (impairing independence) is asked to (i) prepare Q's monthly financial statements, (ii) issue a compilation report on the annual statements for a supplier, and (iii) perform a review for Q's bank. Can the CPA do each, and how is independence handled?",
          steps: [
            "Service (i) preparation (AR-C 70): permitted; independence is not required and need not be determined—just include the 'no assurance is provided' legend on each page.",
            "Service (ii) compilation (AR-C 80): permitted even though the CPA is not independent, BUT the compilation report must DISCLOSE the lack of independence (the reason may optionally be stated).",
            "Service (iii) review (AR-C 90): NOT permitted—independence is required for a review, and a direct equity interest impairs it, so the CPA cannot perform the review.",
            "Note the ladder: assurance rises from none (i, ii) to limited (iii), and independence becomes mandatory precisely where assurance is provided.",
            "Advise the client that to obtain the bank's review, either the impairment must be cured or another independent accountant must perform it.",
          ],
          conclusion:
            "The CPA may do the preparation (i) and the compilation (ii)—disclosing the lack of independence in the compilation report—but may NOT perform the review (iii) because a review requires independence.",
          markingNotes: [
            "Award marks for allowing preparation and compilation despite the impairment.",
            "Award marks for requiring disclosure of lack of independence in the compilation report.",
            "Full marks require prohibiting the review because independence is mandatory there.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Attestation under SSAE: examination, review, and the assertion",
        testPointIds: ["tp3", "tp1"],
        explanation: [
          "Attestation is the framework for reporting on subject matter OTHER than historical financial statements—compliance with laws or contracts, the effectiveness of controls, sustainability and greenhouse-gas metrics, MD&A, and prospective financial information. It comes in three levels that mirror the assurance ladder: an EXAMINATION yields reasonable assurance and a positive opinion; a REVIEW yields limited assurance and a negative-assurance conclusion; and agreed-upon procedures yield findings and no assurance.",
          "A defining feature is whether the report is assertion-based or direct. In ASSERTION-BASED reporting, management provides a written assertion (e.g., 'our controls were effective') and the practitioner reports a conclusion on that assertion. In DIRECT reporting, the practitioner measures or evaluates the subject matter itself and reports directly on the subject matter without relying on a management assertion. The revised SSAE permits direct examination engagements, which is a frequent exam update point.",
          "For any examination or review attestation engagement the practitioner must be independent and must have suitable and available CRITERIA against which to evaluate the subject matter—criteria that are relevant, objective, measurable, and complete. Without suitable criteria there is nothing to attest against. The practitioner also obtains a written representation from the responsible party in examination and review engagements (a point that contrasts with the revised AUP rules discussed separately).",
        ],
        keyRules: [
          "SSAE (AT-C) covers non-historical-financial subject matter; examination = reasonable, review = limited, AUP = none.",
          "Assertion-based reporting = conclusion on management's assertion; direct = conclusion on the subject matter itself.",
          "Independence and suitable, available criteria are prerequisites for examination/review attestation.",
          "The practitioner obtains written representations from the responsible party in examination/review engagements.",
        ],
        workedProblem: {
          scenario:
            "A manufacturer wants a CPA to report on its compliance with the financial covenants in a loan agreement. Management is willing to provide a written assertion that it complied. The lender wants the highest level of assurance. Determine the engagement type, standard, reporting mode, and prerequisites.",
          steps: [
            "Subject matter is compliance (not historical financial statements) ⇒ SSAE/AT-C attestation, not AU-C or SSARS.",
            "The lender wants the highest assurance ⇒ an EXAMINATION (reasonable assurance, positive opinion), not a review or AUP.",
            "Management offers a written assertion of compliance ⇒ the engagement can be ASSERTION-BASED, with the CPA reporting a conclusion on that assertion (a direct examination is also possible).",
            "Confirm prerequisites: the CPA must be independent, and the covenants must provide suitable, measurable CRITERIA (the loan agreement's defined ratios do).",
            "Obtain a written representation from the responsible party and evaluate compliance against the defined covenant calculations before opining.",
          ],
          conclusion:
            "This is an SSAE examination of compliance, reported on management's written assertion (assertion-based), requiring independence, suitable criteria (the covenant definitions), and a written representation—yielding a positive opinion for the lender.",
          markingNotes: [
            "Award marks for routing compliance subject matter to SSAE (not AU-C/SSARS).",
            "Award marks for selecting an examination for the highest assurance.",
            "Full marks require identifying assertion-based reporting plus the independence/suitable-criteria prerequisites.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Agreed-upon procedures: findings only, and the revised rules",
        testPointIds: ["tp4"],
        explanation: [
          "An agreed-upon procedures engagement is deliberately narrow: the practitioner performs specific procedures that the ENGAGING PARTY has agreed are appropriate for its purpose and reports the FINDINGS, expressing no opinion and no conclusion. The user draws its own inferences from the findings. Because there is no opinion or conclusion, an AUP provides no assurance—the report is a factual account of what the procedures found (e.g., 'we recomputed the royalty and compared it to the recorded amount; the recorded amount agreed').",
          "The revised standard (AT-C 215, from SSAE 19) modernized several points the exam likes to test. The practitioner is no longer required to obtain a written assertion from the responsible party; the engaging party takes responsibility for the sufficiency of the procedures for its purpose. Reporting is no longer restricted to specified parties in all cases—GENERAL-USE AUP reports are now permitted. The practitioner may also develop or assist in developing the procedures with the engaging party, provided the engaging party acknowledges their appropriateness.",
          "Discipline in the procedures matters. Terms must be measurable and agreed—vague instructions like 'verify that internal control is adequate' are not acceptable because 'adequate' is subjective and would require an opinion. The practitioner must remain independent. An AUP is distinct from an examination (which gives an opinion) and a review (which gives negative assurance); confusing the report forms is a common way to lose the mark.",
        ],
        keyRules: [
          "AUP reports FINDINGS only—no opinion, no conclusion, no assurance (AT-C 215).",
          "Revised rules: no required assertion from the responsible party; engaging party owns procedure sufficiency; general use permitted.",
          "Procedures must be measurable and agreed; avoid subjective terms requiring judgment.",
          "Independence required; AUP ≠ examination (opinion) or review (negative assurance).",
        ],
        workedProblem: {
          scenario:
            "A franchisor engages a CPA to test a franchisee's reported gross sales that drive a royalty. The franchisor wants the CPA to (a) recompute the royalty from reported sales, (b) trace a sample of daily sales summaries to the POS system, and (c) 'confirm the franchisee's internal controls are adequate.' The report will be shared with the franchisee and a prospective buyer. Advise on the engagement.",
          steps: [
            "Recognize the request fits an AUP: specific, agreed procedures with factual findings and no opinion.",
            "Accept procedures (a) and (b): both are measurable and produce factual findings (recomputation result; agreement of traced items).",
            "Reject procedure (c) as worded: 'confirm controls are adequate' is subjective and would require a conclusion/opinion, which an AUP cannot provide; it must be restated as a specific, measurable procedure or moved to an examination.",
            "Address use: under revised AT-C 215, the report may be GENERAL use, so sharing with the prospective buyer is permissible (no automatic restriction).",
            "Confirm the engaging party (franchisor) acknowledges the procedures are appropriate for its purpose and that the CPA is independent; report findings only.",
          ],
          conclusion:
            "Perform the AUP with procedures (a) and (b) reported as findings, restate the subjective 'adequate controls' request (c) into a measurable procedure or decline it, and note that general-use reporting is now permitted so sharing with the buyer is allowed.",
          markingNotes: [
            "Award marks for framing this as findings-only AUP with no opinion.",
            "Award marks for rejecting/restating the subjective 'adequate controls' procedure.",
            "Full marks require applying the revised general-use rule and engaging-party responsibility.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Service organization reporting: SOC 1/2/3 and Type 1/2",
        testPointIds: ["tp5"],
        explanation: [
          "When an entity outsources a process (payroll, cloud hosting, claims processing) to a service organization, the user entity's controls partly reside at the service organization. SOC reports let a service auditor report on those controls. The first axis is the PURPOSE: SOC 1 (AT-C 320) reports on controls relevant to USER ENTITIES' internal control over FINANCIAL REPORTING; SOC 2 reports on controls relevant to the trust services criteria—security, availability, processing integrity, confidentiality, and privacy; and SOC 3 is a short-form, GENERAL-USE report on trust-services subject matter without the detailed system description or the service auditor's tests.",
          "The second axis is the TYPE: a Type 1 report addresses the fairness of the description and the suitability of the DESIGN of controls at a specified point in time; a Type 2 report addresses the same PLUS the OPERATING EFFECTIVENESS of the controls over a period, and it includes the service auditor's tests and their results. Only a Type 2 report provides evidence that controls actually worked over time.",
          "Use restrictions and the user-auditor's needs tie it together. SOC 1 and SOC 2 are RESTRICTED-use (to management, user entities, and their auditors) because they contain detailed control descriptions; SOC 3 is general use. A user auditor who wants to rely on the service organization's controls for the financial-statement audit typically needs a SOC 1 TYPE 2 report covering a period that overlaps the audit period. Finally, the CARVE-OUT method excludes a subservice organization's controls from the description (the user auditor must then address them separately), while the INCLUSIVE method covers them.",
        ],
        keyRules: [
          "SOC 1 → user entities' ICFR (AT-C 320); SOC 2 → trust services criteria; SOC 3 → general-use summary.",
          "Type 1 → design at a point in time; Type 2 → design + operating effectiveness over a period (with tests/results).",
          "SOC 1 and SOC 2 are restricted-use; SOC 3 is general-use.",
          "A user auditor needs a SOC 1 Type 2 to rely on operating effectiveness; carve-out excludes / inclusive covers subservice orgs.",
        ],
        workedProblem: {
          scenario:
            "A retailer outsources its payroll to a service organization and relies on it for the accuracy of payroll expense and liabilities. The retailer's auditor wants audit evidence that the payroll controls at the service organization operated effectively during the year. The service organization uses a subservice cloud host. Which SOC report and type are needed, and what about the subservice host?",
          steps: [
            "Purpose: payroll accuracy affects the retailer's financial reporting ⇒ a SOC 1 report (controls relevant to user entities' ICFR), not SOC 2 or SOC 3.",
            "Type: the user auditor needs evidence of OPERATING EFFECTIVENESS over the year ⇒ a Type 2 report (design + operating effectiveness with the service auditor's tests), not Type 1.",
            "Coverage of the period: confirm the Type 2 report's period overlaps the retailer's audit period; if there is a gap, the user auditor performs additional procedures for the uncovered months.",
            "Subservice host: determine whether the SOC 1 uses the CARVE-OUT method (host excluded—user auditor must separately address the host's controls, e.g., obtain the host's own SOC report) or the INCLUSIVE method (host covered).",
            "Conclude on reliance: use the SOC 1 Type 2 as evidence of the service organization's control effectiveness, supplemented as needed for the subservice host.",
          ],
          conclusion:
            "The retailer's auditor needs a SOC 1 TYPE 2 report covering the audit period; if the report carves out the subservice cloud host, the auditor must separately obtain evidence about the host's controls.",
          markingNotes: [
            "Award marks for selecting SOC 1 (ICFR purpose) over SOC 2/SOC 3.",
            "Award marks for requiring Type 2 to evidence operating effectiveness over the period.",
            "Full marks require addressing the carve-out vs inclusive treatment of the subservice organization.",
          ],
        },
      },
      {
        id: "sn6",
        title: "Prospective, pro forma, and special-purpose framework reporting",
        testPointIds: ["tp6", "tp1"],
        explanation: [
          "Prospective financial information comes in two forms with different uses. A FORECAST presents an entity's expected financial results based on conditions it expects to exist and courses of action it expects to take—it is for GENERAL use (any third party). A PROJECTION is based on one or more HYPOTHETICAL ('what if') assumptions and is therefore restricted to the specified parties who understand the hypothesis. Both examination reports include a CAVEAT that the prospective results may not be achieved; the practitioner never guarantees achievability, only that the presentation conforms to guidelines and that the assumptions provide a reasonable basis.",
          "PRO FORMA financial information shows what the historical results would have looked like if a transaction (a merger, a disposal, a refinancing) had occurred at an earlier date. An examination or review reports on whether management's assumptions provide a reasonable basis, whether the pro forma adjustments give appropriate effect to those assumptions, and whether the pro forma amounts reflect the proper application of those adjustments to the historical statements.",
          "SPECIAL-PURPOSE FRAMEWORKS (cash basis, tax basis, regulatory basis, contractual basis—several of which are OCBOA) require the report to describe the framework and refer to the note that explains it. For certain frameworks (regulatory and contractual basis intended for specified users), the report adds an emphasis-of-matter alert describing the purpose and a restriction on use; a general-use regulatory-basis presentation requires an additional opinion on GAAP conformity. The through-line: identify the framework/engagement, add the required descriptive paragraph and any use restriction, and never express assurance that prospective outcomes will be achieved.",
        ],
        keyRules: [
          "Forecast = expected conditions, general use; projection = hypothetical assumptions, restricted use; both carry an achievability caveat.",
          "Pro forma: report on reasonableness of assumptions, appropriateness of adjustments, and proper application to historical statements.",
          "Special-purpose frameworks: describe the framework; add emphasis-of-matter/use restriction for regulatory/contractual-basis engagements.",
          "Never provide assurance that prospective results will be achieved.",
        ],
        workedProblem: {
          scenario:
            "A company prepares statements on the income-tax basis of accounting for its owners and lenders, and separately gives the CPA a five-year 'what-if' projection assuming it wins a specific government contract, to share only with that government agency. Advise on the reporting for each.",
          steps: [
            "Tax-basis statements: this is a special-purpose framework engagement; the CPA's report must DESCRIBE the tax basis and refer to the note explaining it, and add an emphasis-of-matter paragraph alerting readers that the statements are prepared on a special-purpose framework.",
            "Determine use for the tax-basis statements: tax basis is an acceptable special-purpose framework; if intended for a broad set of users (owners and lenders), a general-use presentation is acceptable with the framework description (no restriction solely because it is tax basis).",
            "Classify the five-year 'what-if' as a PROJECTION (hypothetical assumption: winning the contract), not a forecast.",
            "Apply the projection's use restriction: because it rests on a hypothetical assumption, distribution is RESTRICTED to the specified party (the government agency) that understands the hypothesis.",
            "Include the achievability caveat in the projection report—actual results may differ and the CPA does not vouch for achievability.",
          ],
          conclusion:
            "Report on the tax-basis statements as a special-purpose framework (describe the framework with an emphasis-of-matter paragraph), and report on the five-year item as a PROJECTION restricted to the government agency, with a caveat that prospective results may not be achieved.",
          markingNotes: [
            "Award marks for identifying the tax-basis statements as a special-purpose framework requiring a framework description and emphasis-of-matter.",
            "Award marks for classifying the hypothetical five-year item as a projection (not a forecast).",
            "Full marks require restricting the projection's use and including the achievability caveat.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp2", "tp1"],
        style: "Task-based simulation (engagement classification)",
        question:
          "For a nonissuer, classify each as a preparation, compilation, review, or audit and state the assurance provided and whether independence is required: (1) the accountant assembles annual statements and issues a report stating no assurance is provided; (2) the accountant performs inquiry and analytical procedures and states it is not aware of any needed material modifications; (3) the accountant prepares monthly statements with a 'no assurance is provided' legend and issues no report; (4) the accountant tests details and controls and expresses a positive opinion.",
        answerPlan: [
          "(1) Compilation → no assurance; independence not required (disclose if lacking).",
          "(2) Review → limited/negative assurance; independence required.",
          "(3) Preparation → no assurance, no report; independence not required/not evaluated.",
          "(4) Audit → reasonable assurance; independence required.",
        ],
        modelAnswer:
          "(1) Assembling statements and issuing a report that provides no assurance is a COMPILATION (AR-C 80): no assurance is provided, and independence is not required—though if the accountant lacks independence, the compilation report must disclose that fact. (2) Inquiry and analytical procedures culminating in 'we are not aware of any material modifications that should be made' is a REVIEW (AR-C 90): it provides LIMITED (negative) assurance and INDEPENDENCE is required; lack of independence precludes a review. (3) Preparing statements with a 'no assurance is provided' legend and issuing no report is a PREPARATION engagement (AR-C 70): no assurance, and independence is neither required nor evaluated. (4) Testing details and controls and expressing a positive opinion is an AUDIT (AU-C): it provides REASONABLE assurance and independence is required. The ladder runs preparation/compilation (none) → review (limited) → audit (reasonable), with independence mandatory precisely where assurance is expressed (review and audit).",
        markingGuide: [
          "1 mark each for the correct engagement type on items 1–4.",
          "1 mark for the correct assurance level per engagement.",
          "1 mark for the independence rule (required for review/audit; not for compilation—disclose if lacking; not evaluated for preparation).",
          "Deduct if a review is said to provide reasonable assurance or a compilation is said to require independence.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp5"],
        style: "Constructed response",
        question:
          "A hospital outsources both its claims processing (affecting revenue and receivables) and its patient-data platform (a security/privacy concern) to service organizations. Its auditor needs evidence that the claims controls operated effectively during the year, and the hospital's compliance team separately wants assurance about the data platform's security controls for distribution to business partners. Recommend the SOC report(s) and type(s) and explain the use restrictions.",
        answerPlan: [
          "Claims processing → SOC 1 (ICFR) Type 2 for operating-effectiveness evidence.",
          "Data platform security → SOC 2 (trust services) for restricted use, or SOC 3 for general distribution.",
          "Explain restricted vs general use.",
        ],
        modelAnswer:
          "Because claims processing affects the hospital's revenue and receivables—its financial reporting—the auditor needs a SOC 1 report (controls relevant to user entities' internal control over financial reporting). To obtain evidence that those controls OPERATED EFFECTIVELY during the year, a Type 2 report is required (Type 1 would only address design at a point in time), and its period should overlap the audit period. The SOC 1 is restricted-use—appropriate for management, the hospital, and its auditor. For the patient-data platform, the concern is security and privacy, which are trust services criteria, so the relevant report is a SOC 2. A SOC 2 is also restricted-use, so if the compliance team wants a report it can distribute broadly to business partners, the appropriate vehicle is a SOC 3, which is a general-use, short-form report on the same trust-services subject matter (without the detailed description and the service auditor's tests). If the partners need detail, they would need to be within the SOC 2's restricted-use group. If either service organization relies on a subservice organization, the hospital must determine whether the carve-out or inclusive method was used and address any carved-out controls separately.",
        markingGuide: [
          "1 mark: SOC 1 for the claims (ICFR) engagement.",
          "1 mark: Type 2 required for operating-effectiveness evidence over the period.",
          "1 mark: SOC 2 for the data-platform security/privacy (trust services).",
          "1 mark: SOC 3 (general use) for broad distribution vs restricted-use SOC 1/SOC 2.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp3", "tp4"],
        style: "MCQ set rationale",
        question:
          "Distinguish an examination, a review, and an agreed-upon procedures engagement performed under the attestation standards (SSAE) in terms of (a) the assurance provided and the form of the report, and (b) who is responsible for the sufficiency of the procedures in an AUP and whether a written assertion from the responsible party is required.",
        answerPlan: [
          "Examination → reasonable assurance, positive opinion.",
          "Review → limited assurance, negative-assurance conclusion.",
          "AUP → no assurance, findings only; engaging party owns sufficiency; no required assertion (revised).",
        ],
        modelAnswer:
          "(a) Under the attestation standards, an EXAMINATION provides reasonable assurance and results in a positive opinion on the subject matter (or on management's assertion about it). A REVIEW provides limited assurance and results in a negative-assurance conclusion—'nothing came to our attention'—based on inquiry and analytical procedures rather than the testing done in an examination. An AGREED-UPON PROCEDURES engagement provides NO assurance: the practitioner reports the FINDINGS of specified procedures and expresses no opinion or conclusion. (b) In an AUP under the revised AT-C 215, the ENGAGING PARTY is responsible for the sufficiency of the procedures for its purpose—it agrees that the procedures are appropriate. The revised standard also no longer requires the practitioner to obtain a written assertion from the responsible party, and it permits general-use (not only restricted-use) reporting. The practitioner must still be independent and must use measurable, agreed procedures rather than subjective terms that would require a conclusion.",
        markingGuide: [
          "1 mark: examination → reasonable assurance/positive opinion.",
          "1 mark: review → limited assurance/negative-assurance conclusion.",
          "1 mark: AUP → findings only, no assurance.",
          "1 mark: engaging party responsible for sufficiency; no required assertion under revised AT-C 215.",
        ],
      },
    ],
  }),
};
