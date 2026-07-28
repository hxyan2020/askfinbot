import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA REG exam-calibrated depth content for:
 *   - cpa-reg-m6  Individual taxation — credits, AMT & filing  (FEDERAL TAX)
 *
 * Calibration notes:
 *  - This module closes the individual-tax computation: it starts where gross
 *    income, adjustments, deductions and the regular tax leave off, then layers
 *    on credits, the alternative minimum tax (AMT), filing status, estimated-tax
 *    mechanics and the final refund/balance-due figure. The single most tested
 *    idea is the ORDERING of the computation: nonrefundable credits reduce tax
 *    only to zero, refundable credits and payments can generate a refund, and
 *    AMT is a parallel system where the taxpayer pays the HIGHER of the two.
 *  - Many dollar figures here are indexed for inflation every year (the AMT
 *    exemption and its phaseout threshold, the 26%/28% AMT rate breakpoint, the
 *    refundable portion of the child tax credit, the standard deduction, and the
 *    earned-income credit amounts). These are flagged "confirm the current-year
 *    amount for your testing window" rather than relied on as permanent numbers.
 *  - Figures that are FIXED by statute are labelled as fixed so candidates do
 *    not second-guess them: the child-tax-credit base of $2,000/child and the
 *    $500 credit for other dependents and their $400,000 (MFJ)/$200,000 (other)
 *    phaseout thresholds and the $2,500 earned-income floor (all set by the TCJA
 *    and scheduled to change after 2025 — flag the sunset), the child-and-
 *    dependent-care expense caps ($3,000/$6,000) and 20%–35% rate band, the
 *    American Opportunity ($2,500 max, 40% refundable) and Lifetime Learning
 *    ($2,000 max) credit structures and their $80k/$90k (single) and
 *    $160k/$180k (MFJ) MAGI phaseouts, and the estimated-tax safe-harbor
 *    percentages (90% current / 100% prior / 110% if prior-year AGI > $150,000).
 *  - REG is tested at Application/Analysis via MCQ testlets and task-based
 *    simulations (TBSs); credits, AMT and the final-liability reconciliation are
 *    classic computational TBS material, so the notes drill a fixed work order.
 */
export const CPA_REG_M6_DEPTH: Record<string, CoursewareDepth> = {
  "cpa-reg-m6": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Nonrefundable vs refundable credits and the ordering rule",
        priority: "critical",
        examinerFocus:
          "Whether the candidate knows that a credit reduces tax dollar-for-dollar (unlike a deduction, which reduces taxable income), that nonrefundable credits can only take the tax to zero with any excess generally lost or carried over, and that refundable credits plus withholding and estimated payments are what can actually produce a refund. The examiner buries this ordering inside a final-liability computation.",
        typicalQuestionForms: [
          "MCQ: given tax before credits and a mix of nonrefundable and refundable credits, compute the tax after credits and the refund or balance due.",
          "MCQ: contrast the value of a $1,000 credit with a $1,000 deduction for a taxpayer in a given bracket.",
        ],
        mustKnow: [
          "A credit reduces the tax liability dollar-for-dollar; a deduction reduces taxable income and is worth only the deduction times the marginal rate. A $1,000 credit saves $1,000; a $1,000 deduction at a 24% marginal rate saves $240.",
          "Nonrefundable credits (e.g., child & dependent care credit, Lifetime Learning credit, foreign tax credit, retirement savings contribution credit) reduce the tax only to zero; the excess is lost or, for some credits like the foreign tax credit, carried back/forward — it is never refunded.",
          "Refundable credits (e.g., earned income credit, the additional child tax credit portion, the 40% refundable part of the American Opportunity credit, and excess federal income tax withheld/estimated payments) can reduce the tax below zero and produce a cash refund.",
        ],
        scoringActions: [
          "Apply nonrefundable credits first, stopping at a tax of zero, and note that any unused nonrefundable amount is lost (or carried over if that specific credit allows it).",
          "Then subtract refundable credits and payments; a total exceeding the remaining tax is refunded, a shortfall is a balance due.",
        ],
      },
      {
        id: "tp2",
        title: "Family credits: child tax credit, credit for other dependents, child & dependent care",
        priority: "critical",
        examinerFocus:
          "Computing the child tax credit ($2,000 per qualifying child under 17), the $500 credit for other dependents, the refundable additional child tax credit, and the child and dependent care credit — including which figures are fixed by the TCJA (and set to change after 2025) versus which are indexed, and the AGI phaseouts.",
        typicalQuestionForms: [
          "TBS: given filing status, number and ages of dependents, earned income and AGI, compute the child tax credit, the refundable additional child tax credit, and the credit for other dependents.",
          "MCQ: compute the child and dependent care credit from qualifying expenses and AGI.",
        ],
        mustKnow: [
          "Child tax credit (CTC): $2,000 per qualifying child under age 17 at year-end (a fixed TCJA figure through 2025 — flag the scheduled sunset). Phaseout begins at modified AGI of $400,000 (MFJ) / $200,000 (all others), reducing the credit $50 per $1,000 over the threshold (these thresholds are fixed by the TCJA, not indexed).",
          "Refundable additional child tax credit (ACTC): up to a per-child cap that is indexed for inflation (confirm the current-year amount for your testing window), limited to 15% of earned income over $2,500 (the $2,500 floor is fixed) and to the unused nonrefundable CTC. The $500 credit for other dependents (ODC) is entirely nonrefundable.",
          "Child and dependent care credit: a nonrefundable credit on employment-related care expenses for a child under 13 or a disabled dependent/spouse, capped at $3,000 of expenses for one qualifying person or $6,000 for two or more (fixed), limited to the lower earned income of the two spouses, times a rate of 20%–35% that declines as AGI rises (bottoming at 20% for higher-AGI taxpayers).",
        ],
        scoringActions: [
          "Separate the $2,000 CTC per under-17 child from the $500 ODC per other dependent, then apply the phaseout only if MAGI exceeds $400,000/$200,000.",
          "For the care credit, cap eligible expenses at $3,000/$6,000, then at the lower spouse's earned income, before applying the 20%–35% rate.",
          "Flag the ACTC refundable cap as indexed while treating the $2,500 floor and $400k/$200k phaseout starts as fixed (and note the post-2025 sunset).",
        ],
      },
      {
        id: "tp3",
        title: "Education credits: American Opportunity vs Lifetime Learning",
        priority: "high",
        examinerFocus:
          "Distinguishing the American Opportunity credit (AOTC) from the Lifetime Learning credit (LLC): the computation formula, per-student vs per-return limits, the 40% refundable feature of the AOTC, eligibility (first four years and at least half-time for the AOTC), and the shared MAGI phaseout. The examiner tests which credit yields the larger benefit and the no-double-benefit rule.",
        typicalQuestionForms: [
          "TBS/MCQ: given tuition paid for several students, compute the AOTC and LLC and select the more advantageous credit.",
          "MCQ: identify the refundable portion of the AOTC or the effect of a MAGI phaseout.",
        ],
        mustKnow: [
          "American Opportunity credit: 100% of the first $2,000 of qualified tuition and related expenses plus 25% of the next $2,000 = a maximum $2,500 per eligible student, available only for the first four years of postsecondary education for a student enrolled at least half-time in a degree program. Up to 40% of the credit (a maximum $1,000) is refundable; the rest is nonrefundable.",
          "Lifetime Learning credit: 20% of up to $10,000 of qualified expenses = a maximum $2,000 per tax return (not per student), fully nonrefundable, with no limit on the number of years and no half-time or degree requirement — it covers graduate work and job-skills courses.",
          "Both credits phase out over a MAGI range (currently $80,000–$90,000 single / $160,000–$180,000 MFJ — treat these as the fixed statutory band and confirm any legislative change for your window), and a taxpayer cannot claim both credits for the same student in the same year, nor claim a credit on expenses paid with tax-free assistance (the no-double-benefit rule).",
        ],
        scoringActions: [
          "Compute the AOTC per student (100%/25% steps to $2,500) and split out the 40% refundable portion; compute the LLC once per return (20% × up to $10,000).",
          "Pick the larger benefit per student, avoid claiming both credits for the same student, and strip out expenses covered by scholarships or other tax-free aid.",
        ],
      },
      {
        id: "tp4",
        title: "The alternative minimum tax (AMT): adjustments, exemption and rate",
        priority: "critical",
        examinerFocus:
          "Building alternative minimum taxable income (AMTI) from regular taxable income by adding back preferences and adjustments (state/local taxes, the ISO bargain element, private-activity-bond interest, etc.), subtracting the indexed AMT exemption (which itself phases out), applying the 26%/28% rate to reach tentative minimum tax, and paying the excess of tentative minimum tax over the regular tax.",
        typicalQuestionForms: [
          "TBS: start from regular taxable income, add the listed AMT adjustments/preferences, subtract the exemption, compute tentative minimum tax, and determine the additional AMT.",
          "MCQ: identify which items are AMT addbacks and which are not (e.g., charitable contributions and qualified housing interest are generally NOT addbacks).",
        ],
        mustKnow: [
          "AMTI = regular taxable income +/− adjustments + preferences. Common addbacks: the state and local tax (SALT) itemized deduction, the standard deduction if taken, the bargain element on exercise of incentive stock options (ISOs) not sold in the same year, tax-exempt interest on certain private-activity bonds, and depreciation timing differences. Charitable contributions, qualified residence (acquisition) mortgage interest, and gambling losses are generally NOT added back.",
          "Subtract the AMT exemption, an amount that is indexed for inflation each year and that phases out at 25 cents per dollar of AMTI above an indexed threshold (confirm both the exemption and the phaseout start for your testing window rather than memorizing a stale figure).",
          "Apply the AMT rate to the AMT base: 26% up to an indexed breakpoint and 28% on the excess. The result is the tentative minimum tax (TMT). AMT owed = TMT − regular tax; the taxpayer effectively pays the HIGHER of the two. Timing-difference AMT (e.g., ISO or depreciation) can generate a minimum-tax credit carried forward against future regular tax.",
        ],
        scoringActions: [
          "Start from regular taxable income and add only genuine AMT items — do not add back charitable gifts or qualified acquisition mortgage interest.",
          "Subtract the (indexed) exemption after testing its phaseout, apply 26%/28% to reach TMT, then report AMT as the excess of TMT over regular tax.",
        ],
      },
      {
        id: "tp5",
        title: "Filing status and dependency",
        priority: "high",
        examinerFocus:
          "Selecting the correct filing status (single, married filing jointly, married filing separately, head of household, qualifying surviving spouse) and applying the dependency tests, because status drives the standard deduction, the rate brackets, and eligibility for numerous credits. The examiner rewards the taxpayer-favorable status the facts support.",
        typicalQuestionForms: [
          "MCQ: given marital status at year-end, a household with a qualifying person, and support facts, determine the most advantageous filing status.",
          "MCQ: apply the qualifying-child or qualifying-relative tests to decide who may be claimed as a dependent.",
        ],
        mustKnow: [
          "Marital status is generally determined on the last day of the year; a surviving spouse may file jointly for the year of death. Head of household requires an unmarried (or 'considered unmarried') taxpayer who pays more than half the cost of keeping up a home that is the principal residence of a qualifying person for more than half the year. Qualifying surviving spouse status (with a dependent child) is available for the two years after the year of a spouse's death, giving joint rates.",
          "A qualifying child must meet the relationship, age (under 19, or under 24 if a full-time student, or any age if permanently disabled), residency (more than half the year), support (child did not provide more than half of own support), and joint-return tests.",
          "A qualifying relative must meet a relationship-or-member-of-household test, a gross-income test (the dependent's gross income below an indexed threshold — confirm the current amount), a support test (taxpayer provides more than half the dependent's support), and the not-a-qualifying-child test.",
        ],
        scoringActions: [
          "Fix marital status at year-end, then test for head-of-household or qualifying-surviving-spouse before defaulting to single or MFS.",
          "Run the qualifying-child tests first; only if they fail, test the qualifying-relative rules (relationship/household, gross income, support, not-a-qualifying-child).",
        ],
      },
      {
        id: "tp6",
        title: "Estimated taxes, safe harbors and the final liability reconciliation",
        priority: "high",
        examinerFocus:
          "Computing the required annual payment to avoid the underpayment penalty (the lesser of 90% of the current year's tax or a percentage of the prior year's tax) and reconciling tax after credits, other taxes, withholding, estimated payments and refundable credits into a refund or balance due. The examiner tests the 110% high-income safe harbor and the ordering of the final computation.",
        typicalQuestionForms: [
          "TBS: given current-year tax, prior-year tax and AGI, and payments made, determine whether an underpayment penalty applies and compute the balance due or refund.",
          "MCQ: identify the safe-harbor percentage that applies to a higher-income taxpayer.",
        ],
        mustKnow: [
          "Individuals must generally pay in, through withholding and quarterly estimates, the SMALLER of (a) 90% of the current-year tax or (b) 100% of the prior-year tax — increased to 110% of the prior-year tax if prior-year AGI exceeded $150,000 ($75,000 if married filing separately). These percentages and the $150,000 threshold are fixed by statute.",
          "No underpayment penalty applies if the balance due after withholding is less than a small statutory de minimis amount (confirm the current figure) or if the required annual payment is met; withholding is treated as paid evenly throughout the year, while estimates are credited when actually paid.",
          "Final liability ordering: regular tax (or AMT if higher) − nonrefundable credits + other taxes (e.g., self-employment tax, the additional Medicare tax, the net investment income tax) − withholding − estimated payments − refundable credits = balance due or (refund).",
        ],
        scoringActions: [
          "Compute the required annual payment as the lesser of 90% current or 100%/110% prior-year, using 110% only when prior-year AGI exceeds $150,000.",
          "Reconcile in order — tax after nonrefundable credits, add other taxes, then subtract payments and refundable credits — to reach the refund or balance due.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "This module is highly computational and recurs on almost every REG form. Lock the credit and final-liability TBSs by working a fixed order, treat AMT as a mechanical parallel computation, and never lose the conceptual MCQs on refundable vs nonrefundable credits or filing status.",
      timeBudget:
        "~1.25 min per MCQ. On a credits or final-liability TBS, spend the first minute laying out the skeleton (tax before credits → nonrefundable credits → other taxes → payments → refundable credits) before entering numbers; on an AMT TBS, list the addbacks in a column before subtracting the exemption.",
      answerSequence: [
        "Compute regular tax, then run the AMT in parallel and carry the HIGHER figure forward.",
        "Apply nonrefundable credits (family, education, foreign tax, etc.) down to a floor of zero.",
        "Add other taxes (self-employment, additional Medicare, net investment income).",
        "Subtract withholding, estimated payments and refundable credits to reach the refund or balance due, then test the estimated-tax safe harbor for any penalty.",
      ],
      qualityChecks: [
        "Did I stop nonrefundable credits at zero tax and only let refundable credits/payments create a refund?",
        "Did I add back only genuine AMT items (SALT, ISO bargain element, private-activity-bond interest) and NOT charitable gifts or qualified acquisition mortgage interest?",
        "Did I pick the taxpayer-favorable filing status (HOH or qualifying surviving spouse where the facts allow) before defaulting to single?",
        "Did I use the lesser of 90% current or 100%/110% prior-year for the safe harbor, applying 110% only when prior-year AGI exceeded $150,000?",
        "Did I flag the indexed figures (AMT exemption/breakpoint, ACTC refundable cap, standard deduction, EIC amounts) as current-year-confirm while treating the CTC $2,000/$500, care-expense caps and safe-harbor percentages as fixed?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Credits vs deductions and the nonrefundable/refundable ordering",
        testPointIds: ["tp1"],
        explanation: [
          "The final third of the individual computation turns tax into cash, and it hinges on two distinctions the exam tests relentlessly. First, a credit is worth far more than a deduction of the same size: a credit reduces the tax itself dollar-for-dollar, whereas a deduction only reduces taxable income and is therefore worth the deduction multiplied by the marginal rate. A $1,000 credit always saves $1,000; a $1,000 deduction saves a taxpayer in the 24% bracket only $240. Candidates who instinctively 'subtract' a credit from income lose the point.",
          "Second, credits are either nonrefundable or refundable, and the order of application matters. Nonrefundable credits — the child and dependent care credit, the Lifetime Learning credit, the foreign tax credit, the retirement savings contribution credit, the $500 credit for other dependents — can reduce the tax only to zero. Any excess is generally lost; a few (notably the foreign tax credit) carry back or forward, but none of them is ever paid out in cash. Refundable credits — the earned income credit, the additional (refundable) child tax credit, the 40% refundable portion of the American Opportunity credit — plus withholding and estimated payments, can push the liability below zero and generate an actual refund.",
          "Because of this, the mechanical order is: compute the tax (the higher of regular tax or AMT), apply nonrefundable credits down to a floor of zero, add any other taxes such as self-employment tax, and only then subtract refundable credits and payments to find the refund or balance due. Reversing the order — for example, treating a nonrefundable credit as if it could create a refund — is the most common single-point error on the final-liability TBS.",
        ],
        keyRules: [
          "Credit reduces tax dollar-for-dollar; deduction reduces income and is worth deduction × marginal rate.",
          "Nonrefundable credits stop at zero tax (some carry over, none refund); refundable credits and payments can create a refund.",
          "Order: tax (higher of regular/AMT) → nonrefundable credits → other taxes → payments and refundable credits.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A single taxpayer has a tax before credits of $900. She qualifies for a Lifetime Learning credit of $2,000 (nonrefundable) and an earned income credit of $600 (refundable). Federal income tax of $1,300 was withheld from her wages. Determine her tax after nonrefundable credits and her refund or balance due.",
          steps: [
            "Apply the nonrefundable Lifetime Learning credit against the $900 tax: the credit can only reduce the tax to zero, so $900 of the $2,000 credit is used and $1,100 is wasted (the LLC has no carryover).",
            "Tax after nonrefundable credits = $0. There are no other taxes in the facts.",
            "Subtract refundable amounts: earned income credit $600 + withholding $1,300 = $1,900 of payments/refundable credits.",
            "Refund = $1,900 − $0 tax = $1,900.",
          ],
          conclusion:
            "Her tax after nonrefundable credits is $0 and she receives a $1,900 refund. Note that $1,100 of the Lifetime Learning credit is simply lost — a nonrefundable credit cannot create a refund — whereas the $600 earned income credit and the $1,300 of withholding are fully recoverable in cash.",
          markingNotes: [
            "Award marks for limiting the nonrefundable LLC to the $900 tax and recognizing the $1,100 excess is lost.",
            "Award marks for treating the earned income credit and withholding as refundable/recoverable.",
            "Full marks require the $1,900 refund with the correct ordering (nonrefundable to zero, then refundable).",
            "Deduct if the answer lets the Lifetime Learning credit generate any refund.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Family credits: CTC, the refundable ACTC, ODC and dependent care",
        testPointIds: ["tp2", "tp1"],
        explanation: [
          "The child tax credit is the workhorse family credit: $2,000 for each qualifying child who is under age 17 at year-end — a figure fixed by the Tax Cuts and Jobs Act through 2025, so candidates should flag the scheduled post-2025 change rather than assume it is permanent. A separate, entirely nonrefundable $500 credit for other dependents (ODC) covers dependents who are not qualifying children under 17, such as a college-age child or a supported parent. Both begin to phase out at modified AGI of $400,000 for joint filers and $200,000 for everyone else, losing $50 for each $1,000 (or fraction) above the threshold; these phaseout starts are fixed by statute, not indexed.",
          "The CTC is partly refundable. To the extent the $2,000-per-child credit exceeds the tax (after other nonrefundable credits), a portion becomes the refundable additional child tax credit (ACTC). The refundable amount is capped per child at an inflation-indexed figure — confirm the current-year cap for your window — and is further limited to 15% of earned income over $2,500 (the $2,500 floor is fixed). The $500 ODC, by contrast, never becomes refundable. This split is a favorite TBS: the examiner drives the tax low so the candidate must compute both the nonrefundable use and the refundable ACTC.",
          "The child and dependent care credit is a different, nonrefundable credit for employment-related care that lets the taxpayer (and spouse, if married) work or look for work. Qualifying expenses for a child under 13 or a disabled dependent/spouse are capped at $3,000 for one qualifying person or $6,000 for two or more (fixed amounts), then further limited to the lower of the two spouses' earned income, and finally multiplied by a rate that slides from 35% down to 20% as AGI rises — most exam candidates land at the 20% floor. Keep this credit separate from the CTC; they can both apply to the same child.",
        ],
        keyRules: [
          "CTC $2,000/child under 17 (fixed through 2025 — flag sunset); ODC $500/other dependent (nonrefundable).",
          "Phaseout begins $400,000 MFJ / $200,000 others, −$50 per $1,000 over (fixed thresholds); ACTC refundable cap is indexed, limited to 15% of earned income over the fixed $2,500 floor.",
          "Care credit: expenses capped $3,000 (one) / $6,000 (two+), limited to lower earned income, × 20%–35% rate.",
        ],
        formulas: [
          "Additional (refundable) CTC = lesser of [unused nonrefundable CTC], [indexed per-child refundable cap × number of children], and [15% × (earned income − $2,500)].",
          "Child & dependent care credit = min(actual expenses, $3,000/$6,000 cap, lower spouse earned income) × applicable rate (20%–35%).",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A married couple filing jointly have two qualifying children under age 17, wages (earned income) of $30,000, AGI of $30,000, and a tax before credits of $700. Their MAGI is well below the phaseout. Assume the indexed refundable ACTC cap is $1,700 per child for the testing year. Compute the child tax credit used against tax and the refundable additional child tax credit.",
          steps: [
            "Compute the gross CTC: $2,000 × 2 children = $4,000. No phaseout applies (MAGI far below $400,000 MFJ).",
            "Use the nonrefundable portion against the $700 tax: the credit reduces tax to $0, using $700; the remaining unused CTC is $4,000 − $700 = $3,300.",
            "Test the refundable ACTC limits: (a) unused credit = $3,300; (b) per-child cap = $1,700 × 2 = $3,400; (c) 15% × (earned income $30,000 − $2,500) = 15% × $27,500 = $4,125.",
            "Refundable ACTC = the smallest of $3,300, $3,400 and $4,125 = $3,300.",
          ],
          conclusion:
            "The child tax credit reduces the $700 tax to $0, and the entire remaining $3,300 is refundable as the additional child tax credit because it is below both the $3,400 per-child cap and the $4,125 earned-income limit. The couple therefore receives $3,300 in cash from the CTC alone. Note the $1,700 per-child refundable cap is indexed (confirm for the exam window), while the $2,500 earned-income floor and $400,000 phaseout start are fixed.",
          markingNotes: [
            "Award marks for the $4,000 gross CTC and using $700 nonrefundably to zero the tax.",
            "Award marks for computing all three ACTC limits ($3,300 unused, $3,400 cap, $4,125 earned-income test).",
            "Full marks require the $3,300 refundable ACTC as the smallest of the three limits.",
            "Award a mark for flagging the $1,700 cap as indexed while treating $2,500 and $400k as fixed.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Education credits: American Opportunity vs Lifetime Learning",
        testPointIds: ["tp3"],
        explanation: [
          "Two education credits compete for the same tuition dollars, and the exam wants the candidate to pick the more valuable one and avoid double-counting. The American Opportunity credit (AOTC) is computed per eligible student as 100% of the first $2,000 of qualified tuition and related expenses plus 25% of the next $2,000, for a maximum of $2,500 per student. It is available only for the first four years of postsecondary education for a student pursuing a degree at least half-time, and it is the only education credit that is partly refundable — up to 40% (a maximum $1,000) can be refunded, with the balance nonrefundable.",
          "The Lifetime Learning credit (LLC) is broader but thinner: 20% of up to $10,000 of qualified expenses, for a maximum $2,000 per tax return (not per student), fully nonrefundable. It has no four-year cap, no half-time requirement, and no degree requirement, so it covers graduate study, a fifth undergraduate year, and single job-skills courses. Because the LLC is a per-return ceiling, a family with several students often gets more from claiming the AOTC for each qualifying undergraduate and reserving the LLC only for students who no longer qualify for the AOTC.",
          "Both credits share a modified-AGI phaseout — currently ratable over $80,000–$90,000 for single filers and $160,000–$180,000 for joint filers — which the exam treats as the fixed statutory band (confirm any legislative change for the testing window). Two anti-abuse rules recur: a taxpayer cannot claim both credits for the same student in the same year, and neither credit may be claimed on expenses paid with tax-free assistance such as scholarships or employer aid (the no-double-benefit rule). Married taxpayers filing separately cannot claim either education credit.",
        ],
        keyRules: [
          "AOTC: 100% of first $2,000 + 25% of next $2,000 = max $2,500/student; first 4 years, ≥half-time, degree program; 40% refundable (max $1,000).",
          "LLC: 20% × up to $10,000 = max $2,000 per return; nonrefundable; no year/enrollment/degree limits.",
          "Shared MAGI phaseout $80k–$90k single / $160k–$180k MFJ; no double credit for one student in one year; strip out scholarship-funded expenses; MFS ineligible.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A married couple filing jointly (MAGI $120,000, below any phaseout) paid qualified tuition of $4,000 for their daughter, a full-time sophomore in a degree program, and $6,000 of graduate tuition for the taxpayer. Compute the maximum education credits and identify the refundable portion.",
          steps: [
            "For the daughter (first four years, at least half-time): use the American Opportunity credit = 100% × $2,000 + 25% × $2,000 = $2,000 + $500 = $2,500.",
            "Determine the AOTC refundable portion: 40% × $2,500 = $1,000 refundable; the remaining $1,500 is nonrefundable.",
            "For the taxpayer's graduate tuition (not AOTC-eligible): use the Lifetime Learning credit = 20% × $6,000 = $1,200 (within the $2,000 per-return maximum), fully nonrefundable.",
            "Total education credits = $2,500 (AOTC) + $1,200 (LLC) = $3,700, of which $1,000 is refundable and $2,700 nonrefundable. Confirm no phaseout at MAGI $120,000 (below the $160,000 MFJ start).",
          ],
          conclusion:
            "The couple claims a $2,500 American Opportunity credit for the daughter ($1,000 refundable, $1,500 nonrefundable) and a $1,200 Lifetime Learning credit for the taxpayer's graduate tuition, for $3,700 total. The two credits apply to different students, so there is no double-benefit problem; graduate study qualifies only for the LLC.",
          markingNotes: [
            "Award marks for the $2,500 AOTC computed with the 100%/25% steps for the daughter.",
            "Award marks for identifying $1,000 (40%) of the AOTC as refundable.",
            "Award marks for the $1,200 LLC (20% × $6,000) on the graduate tuition and confirming no phaseout.",
            "Deduct if the answer claims the AOTC for the graduate student or both credits for the same student.",
          ],
        },
      },
      {
        id: "sn4",
        title: "The alternative minimum tax: building AMTI and paying the higher tax",
        testPointIds: ["tp4"],
        explanation: [
          "The AMT is a parallel tax designed to make sure high-income taxpayers who use large preferences still pay a minimum amount. The computation restarts from regular taxable income and adds back items the regular system allowed. The classic addbacks are the state and local tax (SALT) itemized deduction, the standard deduction (if the taxpayer took it instead of itemizing), the bargain element on the exercise of incentive stock options (ISOs) that are not sold in the same year, interest on certain private-activity municipal bonds, and depreciation timing differences. Crucially, some deductions are NOT added back — charitable contributions, qualified acquisition mortgage interest on a residence, and gambling losses survive into AMTI — and the exam frequently tests whether a candidate wrongly adds these back.",
          "After building AMTI, the taxpayer subtracts the AMT exemption, an amount that is indexed for inflation each year and that itself phases out at 25 cents per dollar of AMTI above an indexed threshold. Because both the exemption and its phaseout start move every year, a candidate should flag them as 'confirm the current-year amount' rather than commit a specific figure to memory. The remaining AMT base is then taxed at 26% up to an indexed breakpoint and 28% on the excess, producing the tentative minimum tax (TMT).",
          "Finally, the taxpayer compares TMT with the regular tax and pays the higher of the two; the 'AMT' reported on the return is simply the excess of TMT over the regular tax. AMT that arises from timing differences — such as the ISO bargain element or accelerated depreciation — generates a minimum-tax credit that carries forward and can offset regular tax in a later year when the timing reverses, preventing permanent double taxation of the same income.",
        ],
        keyRules: [
          "AMTI = regular taxable income + addbacks (SALT, standard deduction, ISO bargain element, private-activity-bond interest, depreciation timing). Do NOT add back charitable gifts, qualified acquisition mortgage interest, or gambling losses.",
          "Subtract the indexed AMT exemption (phases out 25% above an indexed threshold — confirm current amounts).",
          "TMT = 26% up to an indexed breakpoint, 28% above; AMT owed = TMT − regular tax; taxpayer pays the higher. Timing-difference AMT creates a minimum-tax credit carryforward.",
        ],
        formulas: [
          "AMTI = Regular taxable income + AMT adjustments + AMT preferences.",
          "Tentative minimum tax (TMT) = 26%/28% × (AMTI − AMT exemption).",
          "AMT = TMT − regular tax (report only if positive); taxpayer pays the higher of regular tax or TMT.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A single taxpayer has regular taxable income of $230,000 and a regular tax of $38,000. AMT items: a $10,000 state and local tax deduction and a $10,000 incentive-stock-option bargain element (ISO exercised and held). Assume for the testing year the AMT exemption is $85,700 (fully available at this income) and the 26%/28% breakpoint is $232,600. Compute the AMT.",
          steps: [
            "Build AMTI: regular taxable income $230,000 + SALT addback $10,000 + ISO bargain element $10,000 = $250,000. (Charitable gifts and qualified mortgage interest, if any, are not added back.)",
            "Subtract the indexed AMT exemption: AMTI $250,000 is below the exemption phaseout start, so the full $85,700 applies. AMT base = $250,000 − $85,700 = $164,300.",
            "Apply the AMT rate: the base $164,300 is below the $232,600 breakpoint, so the entire base is taxed at 26%. Tentative minimum tax = 26% × $164,300 = $42,718.",
            "Compare with the regular tax: AMT = TMT $42,718 − regular tax $38,000 = $4,718.",
          ],
          conclusion:
            "The taxpayer owes $4,718 of alternative minimum tax on top of the $38,000 regular tax, for a total of $42,718 (the higher of the two systems). Because the ISO addback is a timing difference, a corresponding minimum-tax credit carries forward to offset regular tax in a future year. The exemption ($85,700) and 26%/28% breakpoint ($232,600) used here are indexed — confirm the current-year figures for your testing window.",
          markingNotes: [
            "Award marks for adding back only the SALT and ISO items to reach AMTI of $250,000.",
            "Award marks for subtracting the exemption and computing the $164,300 AMT base.",
            "Award marks for applying 26% to reach TMT of $42,718 and computing AMT of $4,718 as the excess over regular tax.",
            "Award a mark for flagging the exemption/breakpoint as indexed and noting the ISO minimum-tax-credit carryforward.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Filing status and dependency drive the whole computation",
        testPointIds: ["tp5"],
        explanation: [
          "Filing status sits at the top of the return because it sets the standard deduction, the rate brackets, and eligibility for many credits, so the exam rewards choosing the most taxpayer-favorable status the facts support. Marital status is generally fixed on the last day of the year: a couple married on December 31 is treated as married for the whole year, and a taxpayer whose spouse died during the year may still file jointly for that year. Married filing separately (MFS) is almost always the worst outcome — it compresses brackets and disqualifies the taxpayer from credits such as the education credits and the earned income credit — so it should be a last resort.",
          "Head of household (HOH) is the valuable status for unmarried taxpayers with dependents: it requires an unmarried (or 'considered unmarried') taxpayer who pays more than half the cost of keeping up a home that is, for more than half the year, the principal residence of a qualifying person (generally a qualifying child or a dependent relative). Qualifying surviving spouse status extends joint rates and the higher standard deduction for the two years following the year a spouse dies, provided the taxpayer maintains a home for a dependent child and has not remarried.",
          "Dependency is tested through two gateways. A qualifying child must satisfy the relationship, age (under 19, under 24 if a full-time student, or any age if permanently and totally disabled), residency (more than half the year with the taxpayer), support (the child did not provide more than half of their own support), and joint-return tests. If those fail, a person may still be a qualifying relative if they meet a relationship-or-member-of-household test, a gross-income test (their gross income is below an indexed threshold — confirm the current figure), a support test (the taxpayer provides more than half the person's support), and the not-a-qualifying-child test. Getting dependency right also determines who counts for HOH and for the family credits.",
        ],
        keyRules: [
          "Marital status fixed at year-end; joint return allowed in the year of a spouse's death; MFS is a last resort (loses many credits).",
          "HOH: unmarried, pays >half the cost of a home that is a qualifying person's principal residence for >half the year; qualifying surviving spouse gives joint rates for two years after the spouse's death.",
          "Qualifying child: relationship, age, residency, support, joint-return tests. Qualifying relative: relationship/household, gross income (indexed), support (>half), not-a-qualifying-child.",
        ],
      },
      {
        id: "sn6",
        title: "Estimated taxes, safe harbors and the final reconciliation",
        testPointIds: ["tp6", "tp1"],
        explanation: [
          "The return closes by reconciling the tax with what has already been paid in, and by testing whether the taxpayer prepaid enough to avoid an underpayment penalty. To avoid the penalty, an individual must pay in — through withholding plus quarterly estimates — the SMALLER of 90% of the current-year tax or 100% of the prior-year tax. For higher-income taxpayers, whose prior-year AGI exceeded $150,000 ($75,000 if married filing separately), the prior-year safe harbor rises to 110%. These percentages and the $150,000 threshold are fixed by statute, so they are reliable exam anchors. Because the prior-year safe harbor only needs last year's actual liability, it is the escape hatch for a taxpayer whose income jumped this year.",
          "Withholding and estimates are credited differently: tax withheld from wages is treated as paid evenly across the year regardless of when it was actually withheld, while estimated payments are credited only when made, which is why a large fourth-quarter estimate may not cure an earlier-quarter shortfall. There is also a de minimis rule — no penalty applies if the balance due after withholding is under a small statutory amount (confirm the current figure) — and a penalty is computed quarter-by-quarter at the federal underpayment rate.",
          "The final-liability computation then follows a fixed order that ties the whole module together: start with the greater of the regular tax or the tentative minimum tax; subtract nonrefundable credits down to zero; add other taxes such as self-employment tax, the 0.9% additional Medicare tax and the 3.8% net investment income tax; and finally subtract withholding, estimated payments and refundable credits. A positive result is a balance due (payable by the original due date to avoid failure-to-pay interest and penalties even if there is no estimated-tax penalty); a negative result is a refund.",
        ],
        keyRules: [
          "Required annual payment = lesser of 90% current-year tax or 100% prior-year tax (110% if prior-year AGI > $150,000; $75,000 MFS). Percentages and $150,000 are fixed.",
          "Withholding is deemed paid evenly; estimates are credited when paid; a small de minimis balance avoids the penalty (confirm amount).",
          "Final order: higher of regular tax/TMT − nonrefundable credits + other taxes (SE, additional Medicare, NIIT) − payments − refundable credits = balance due/(refund).",
        ],
        formulas: [
          "Required annual payment = min(90% × current-year tax, [100% or 110%] × prior-year tax).",
          "Balance due/(refund) = (higher of regular tax or TMT) − nonrefundable credits + other taxes − withholding − estimated payments − refundable credits.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A single taxpayer's current-year tax after credits is $30,000. Her prior-year tax was $20,000 and her prior-year AGI was $180,000. During the year, $18,000 was withheld from wages and she made $4,000 of estimated payments. Determine (a) whether she owes an underpayment penalty and (b) her balance due at filing.",
          steps: [
            "Compute the safe harbor. Because prior-year AGI ($180,000) exceeded $150,000, the prior-year safe harbor is 110%: 110% × $20,000 = $22,000. The current-year safe harbor is 90% × $30,000 = $27,000.",
            "Required annual payment = the lesser of $27,000 and $22,000 = $22,000.",
            "Compare payments to the requirement: withholding $18,000 + estimates $4,000 = $22,000, which meets the $22,000 required annual payment — so no underpayment penalty applies.",
            "Compute the balance due: current-year tax $30,000 − total payments $22,000 = $8,000 balance due at filing.",
          ],
          conclusion:
            "She avoids the underpayment penalty because her $22,000 of withholding and estimates exactly meets the 110% prior-year safe harbor, even though she still owes an $8,000 balance. That $8,000 must be paid by the original filing due date to avoid failure-to-pay penalties and interest, but no estimated-tax penalty is due. The 110% factor and the $150,000 AGI trigger are fixed by statute.",
          markingNotes: [
            "Award marks for using 110% (not 100%) because prior-year AGI exceeded $150,000, giving a $22,000 prior-year safe harbor.",
            "Award marks for taking the lesser of the $27,000 current and $22,000 prior safe harbors.",
            "Award marks for concluding no penalty because $22,000 of payments meets the required annual payment.",
            "Full marks require the $8,000 balance due and the point that it is still payable by the due date.",
          ],
        },
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (family credits and refund)",
        question:
          "A married couple filing jointly have two qualifying children under age 17, earned income and AGI of $60,000 (below all phaseouts), and a tax before credits of $900. Federal income tax of $1,500 was withheld. Assume the indexed additional-child-tax-credit refundable cap is $1,700 per child. Compute their tax after nonrefundable credits and their refund or balance due.",
        answerPlan: [
          "Gross CTC = $2,000 × 2 = $4,000; no phaseout.",
          "Use nonrefundable CTC against $900 tax → $0; remaining CTC $3,100.",
          "ACTC refundable = min($3,100 unused, $3,400 cap, 15% × ($60,000 − $2,500) = $8,625) = $3,100.",
          "Refund = withholding $1,500 + ACTC $3,100.",
        ],
        modelAnswer:
          "The gross child tax credit is $2,000 × 2 = $4,000, with no phaseout because MAGI of $60,000 is far below the $400,000 MFJ threshold. The nonrefundable portion offsets the $900 tax down to zero, using $900 and leaving $3,100 of unused credit. The refundable additional child tax credit is the smallest of (a) the $3,100 unused credit, (b) the per-child refundable cap of $1,700 × 2 = $3,400, and (c) 15% of earned income over $2,500 = 15% × ($60,000 − $2,500) = $8,625; the smallest is $3,100, so the full remaining credit is refundable. Tax after nonrefundable credits is therefore $0. Adding the refundable amounts — $1,500 of withholding plus the $3,100 refundable ACTC — produces a refund of $4,600. The $1,700 per-child refundable cap is indexed (confirm for the testing window), while the $2,500 floor and $400,000 phaseout start are fixed.",
        markingGuide: [
          "1 mark: $4,000 gross CTC and using $900 nonrefundably to zero the tax.",
          "1 mark: computing all three ACTC limits and selecting the $3,100 refundable amount.",
          "1 mark: adding $1,500 withholding to the refundable ACTC.",
          "1 mark: the $4,600 refund with the indexed/fixed figures correctly flagged.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp4"],
        style: "Task-based simulation (AMT computation)",
        question:
          "A single taxpayer has regular taxable income of $230,000 and a regular tax of $38,000. She deducted $10,000 of state and local taxes and exercised (and held) incentive stock options with a $10,000 bargain element. She also made $20,000 of charitable cash contributions and paid $12,000 of qualified acquisition mortgage interest, both already reflected in taxable income. Assume the AMT exemption is $85,700 (no phaseout at this income) and the 26%/28% breakpoint is $232,600. Compute her alternative minimum tax.",
        answerPlan: [
          "AMTI = $230,000 + SALT $10,000 + ISO $10,000 = $250,000 (do NOT add charitable gifts or qualified mortgage interest).",
          "AMT base = $250,000 − $85,700 exemption = $164,300.",
          "TMT = 26% × $164,300 = $42,718 (base below $232,600 breakpoint).",
          "AMT = $42,718 − $38,000 regular tax = $4,718.",
        ],
        modelAnswer:
          "Alternative minimum taxable income starts from the $230,000 regular taxable income and adds back only genuine AMT items: the $10,000 SALT deduction and the $10,000 ISO bargain element, giving AMTI of $250,000. The $20,000 of charitable contributions and $12,000 of qualified acquisition mortgage interest are NOT added back — they remain allowable for AMT. Subtracting the $85,700 exemption (fully available because AMTI is below the phaseout start) leaves an AMT base of $164,300. Because that base is below the $232,600 breakpoint, the entire base is taxed at 26%, so tentative minimum tax is 26% × $164,300 = $42,718. Comparing this with the $38,000 regular tax, the alternative minimum tax is the excess, $42,718 − $38,000 = $4,718, and she pays $42,718 in total. The ISO addback is a timing difference that generates a minimum-tax credit carryforward. The $85,700 exemption and $232,600 breakpoint are indexed — confirm the current-year figures.",
        markingGuide: [
          "1 mark: adding back only SALT and the ISO bargain element (not charity or qualified mortgage interest) to reach $250,000 AMTI.",
          "1 mark: subtracting the exemption to compute the $164,300 AMT base.",
          "1 mark: applying 26% for a $42,718 tentative minimum tax.",
          "1 mark: reporting AMT of $4,718 as the excess over regular tax and noting the minimum-tax-credit carryforward / indexed figures.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp3", "tp1"],
        style: "Short constructed response (education credits)",
        question:
          "Compare the American Opportunity credit with the Lifetime Learning credit — the computation, the per-student vs per-return limit, refundability, and eligibility — and explain why a family with one undergraduate and one graduate student would typically claim different credits for each.",
        answerPlan: [
          "AOTC: 100%/25% to $2,500 per student; first 4 years, ≥half-time, degree; 40% refundable.",
          "LLC: 20% × up to $10,000 = $2,000 per return; nonrefundable; no year/enrollment/degree limits.",
          "Same MAGI phaseout; no double credit for one student; strip scholarship-funded expenses.",
          "Undergraduate → AOTC (bigger, partly refundable); graduate → LLC (only option).",
        ],
        modelAnswer:
          "The American Opportunity credit is computed per eligible student as 100% of the first $2,000 of qualified tuition plus 25% of the next $2,000, for a maximum of $2,500 per student, and up to 40% ($1,000) of it is refundable. It is limited to the first four years of postsecondary education for a student enrolled at least half-time in a degree program. The Lifetime Learning credit is 20% of up to $10,000 of qualified expenses for a maximum of $2,000 per tax return (not per student), is fully nonrefundable, and has no four-year, half-time, or degree restriction, so it reaches graduate study and single job-skills courses. Both share the same MAGI phaseout ($80,000–$90,000 single / $160,000–$180,000 MFJ), a taxpayer cannot claim both credits for the same student in one year, and neither applies to expenses paid with tax-free scholarships. A family with one undergraduate and one graduate student would claim the AOTC for the undergraduate — it is larger per student and partly refundable — and the Lifetime Learning credit for the graduate student, who is no longer eligible for the AOTC. This split maximizes the total benefit while respecting the no-double-credit-per-student rule.",
        markingGuide: [
          "1 mark: correct AOTC computation and its first-four-years / half-time / degree eligibility plus 40% refundability.",
          "1 mark: correct LLC computation, per-return $2,000 cap, nonrefundable, and broader eligibility.",
          "1 mark: shared phaseout and no-double-benefit / one-credit-per-student rules.",
          "1 mark: matching the AOTC to the undergraduate and the LLC to the graduate student with a sound rationale.",
        ],
      },
      {
        id: "ep4",
        testPointIds: ["tp6", "tp1"],
        style: "Task-based simulation (final liability and safe harbor)",
        question:
          "A single taxpayer's current-year tax after credits is $50,000. Her prior-year tax was $30,000 and her prior-year AGI was $200,000. She had $28,000 of federal income tax withheld and made $6,000 of estimated payments. Determine whether she owes an underpayment penalty and compute her balance due or refund.",
        answerPlan: [
          "Safe harbor: prior-year AGI > $150,000 → 110% × $30,000 = $33,000; current 90% × $50,000 = $45,000.",
          "Required annual payment = lesser = $33,000.",
          "Payments = $28,000 + $6,000 = $34,000 ≥ $33,000 → no penalty.",
          "Balance due = $50,000 − $34,000 = $16,000.",
        ],
        modelAnswer:
          "Because her prior-year AGI of $200,000 exceeded $150,000, the prior-year safe harbor is 110% of the prior-year tax: 110% × $30,000 = $33,000. The current-year safe harbor is 90% × $50,000 = $45,000. The required annual payment is the lesser of the two, $33,000. Her total payments — $28,000 of withholding plus $6,000 of estimates — are $34,000, which exceeds the $33,000 required annual payment, so no underpayment penalty applies (withholding is treated as paid evenly through the year). She still owes a balance, however: current-year tax of $50,000 minus $34,000 of payments leaves a $16,000 balance due, which must be paid by the original filing due date to avoid failure-to-pay penalties and interest. The 110% factor and the $150,000 AGI trigger are fixed by statute.",
        markingGuide: [
          "1 mark: applying 110% (because prior-year AGI > $150,000) for a $33,000 prior-year safe harbor.",
          "1 mark: taking the lesser of the $45,000 current and $33,000 prior safe harbors as the required annual payment.",
          "1 mark: concluding no penalty because $34,000 of payments exceeds $33,000.",
          "1 mark: computing the $16,000 balance due and noting it is still payable by the due date.",
        ],
      },
    ],
  }),
};
