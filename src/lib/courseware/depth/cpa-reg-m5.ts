import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA REG (Taxation & Regulation, Core) exam-calibrated depth content for one
 * module, keyed by moduleId to merge onto CPA_COURSEWARE:
 *   - cpa-reg-m5  Individual taxation — gross income & deductions (FEDERAL TAX)
 *
 * Scope (AICPA REG Blueprint Area V — Federal Taxation of Individuals):
 *   the individual income-tax computation from the top of Form 1040 down to
 *   taxable income — gross income inclusions (IRC §61), statutory exclusions
 *   (§§101–139), above-the-line adjustments to arrive at AGI (§62), the choice
 *   between the standard deduction and itemized deductions (§63) with the major
 *   itemized categories and their limits (medical §213, taxes §164, home-mortgage
 *   interest §163(h), charitable contributions §170), the qualified business
 *   income deduction (§199A), and the timing/character rules (cash vs accrual,
 *   constructive receipt, capital vs ordinary) that decide when and how income
 *   is taxed. REG tests this at Application/Analysis via MCQ testlets and
 *   task-based simulations (TBSs); several TBSs are line-by-line 1040 build-ups.
 *
 * Calibration notes used throughout:
 *  - This is FEDERAL TAX, not business law: the module is built on the Internal
 *    Revenue Code, Treasury regulations and Form 1040 mechanics. The single most
 *    common error here is a sequencing error — applying an AGI-based floor or
 *    phase-out before AGI is actually computed, or netting an above-the-line
 *    adjustment against an itemized deduction. The notes drill the ordered
 *    formula: gross income − adjustments = AGI; AGI − (greater of standard or
 *    itemized) − QBI = taxable income.
 *  - MANY dollar figures in individual tax are indexed for inflation every year
 *    (the standard deduction and its age/blind add-ons, the §199A taxable-income
 *    thresholds and phase-out ranges, IRA/HSA/retirement contribution ceilings,
 *    the capital-gain 0/15/20% breakpoints, and phase-out ranges for adjustments
 *    such as student-loan interest). Every such amount is flagged "confirm the
 *    current-year amount for your testing window" rather than hard-coded, because
 *    a stale threshold both loses marks and teaches the wrong number.
 *  - Some figures are FIXED by statute and safe to memorize; they are labelled as
 *    fixed so candidates do not needlessly second-guess them: the 7.5%-of-AGI
 *    medical floor, the $250,000/$500,000 §121 home-sale exclusion, the $3,000
 *    ($1,500 MFS) net capital-loss offset against ordinary income, the $2,500
 *    student-loan-interest cap, and the charitable AGI-percentage ceilings
 *    (60%/30%/20%).
 *  - Several headline individual provisions were enacted by the 2017 Tax Cuts and
 *    Jobs Act (TCJA) with a scheduled sunset (the $10,000 SALT cap, the
 *    suspension of personal/dependency exemptions, the elevated standard
 *    deduction, the $750,000 acquisition-debt mortgage limit, and §199A itself).
 *    These are flagged "confirm whether this provision and its amount apply for
 *    your testing window" because the governing law can change between windows.
 */
export const CPA_REG_M5_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // cpa-reg-m5 — Individual taxation: gross income & deductions (FEDERAL TAX)
  // ===================================================================
  "cpa-reg-m5": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Gross income inclusions and the §61 default rule",
        priority: "critical",
        examinerFocus:
          "Whether you apply the §61 rule that gross income is ALL income from whatever source derived unless a Code section excludes it, and then correctly classify specific items — wages, interest, dividends, business income, unemployment, gambling winnings, prizes/awards, cancellation of debt, state tax refunds under the tax-benefit rule, taxable Social Security, and the post-2018 alimony rule. The examiner tests inclusion vs exclusion and the amount includible, not merely a definition.",
        typicalQuestionForms: [
          "MCQ: given a list of receipts, which are included in gross income and in what amount?",
          "MCQ: is a described state income-tax refund taxable this year (tax-benefit rule)?",
          "TBS: total the includible income lines of a Form 1040 fact pattern.",
        ],
        mustKnow: [
          "§61: gross income means all income from whatever source derived; the burden is to find an EXCLUSION, so the default is inclusion. Common inclusions: wages/salary, taxable interest, ordinary and qualified dividends, business/self-employment income, taxable pensions and IRA distributions, unemployment compensation, gambling winnings, prizes and awards, and taxable refunds.",
          "Tax-benefit rule: a state/local income-tax refund is includible in the year received only to the extent the prior-year deduction produced a tax benefit (i.e., the taxpayer itemized and the SALT deduction reduced tax); a taxpayer who took the standard deduction excludes the refund.",
          "Cancellation of debt (COD) is generally taxable income under §61(a)(11) unless a §108 exception applies (bankruptcy, insolvency to the extent insolvent, qualified principal-residence indebtedness, or qualified farm/real-property business debt).",
          "Alimony from a divorce or separation instrument executed after 12/31/2018 (TCJA) is NEITHER deductible by the payor NOR income to the payee; the old include/deduct rule survives only for pre-2019 instruments not later modified to adopt the new rule. Child support is never income and never deductible. This is a fixed statutory date rule.",
          "Social Security benefits are partially includible (up to 50% or up to 85%) based on 'provisional income' measured against base amounts of $25,000/$32,000 — these base amounts are FIXED and are NOT inflation-indexed.",
        ],
        scoringActions: [
          "Start from inclusion and search for a specific exclusion; do not exclude an item just because it feels informal (prizes, found property, and bargain purchases from an employer can be income).",
          "For a state tax refund, confirm the taxpayer itemized AND received a tax benefit last year before including it.",
          "For alimony, check the instrument's execution date (pre-2019 vs post-2018) before including or deducting anything, and never treat child support as income.",
        ],
      },
      {
        id: "tp2",
        title: "Statutory exclusions from gross income",
        priority: "critical",
        examinerFocus:
          "Applying the specific exclusion sections — gifts and inheritances (§102), life-insurance proceeds paid by reason of death (§101), municipal-bond interest (§103), the §121 gain exclusion on the sale of a principal residence, scholarships for tuition/fees (§117), and employer-provided fringe benefits (§§105/106/119/125/132). The examiner tests which items drop out of gross income and the ceiling/condition on each exclusion.",
        typicalQuestionForms: [
          "MCQ: which of these receipts are excluded from gross income?",
          "MCQ: how much §121 gain may a taxpayer exclude on the sale of a home given ownership/use facts?",
          "TBS: separate excluded receipts from includible ones and carry only the taxable amounts to gross income.",
        ],
        mustKnow: [
          "§102 excludes the value of property received by gift, bequest, devise or inheritance (the DONEE is not taxed); however, income LATER earned on that property is taxable. §101 excludes life-insurance proceeds paid by reason of the insured's death.",
          "§103 excludes interest on state and local (municipal) bonds from federal gross income (a permanent exclusion); by contrast, interest on U.S. Treasury obligations IS federally taxable (but exempt from state tax).",
          "§121 excludes up to $250,000 of gain ($500,000 MFJ) on the sale of a principal residence if the taxpayer owned and used it as a principal residence for at least 2 of the last 5 years and has not used the exclusion within 2 years; these dollar amounts are FIXED by statute (not indexed). A partial exclusion is available for a sale caused by a change in employment, health, or unforeseen circumstances.",
          "§117 excludes a scholarship used for tuition, fees, and required books/supplies of a degree candidate; amounts used for room and board, or paid for teaching/research services, are taxable.",
          "Common excludable employer fringe benefits: employer-paid health coverage (§106) and reimbursements (§105), meals/lodging furnished for the employer's convenience on its premises (§119), and §132 fringes (no-additional-cost services, qualified employee discounts, working-condition and de minimis fringes); §125 cafeteria-plan and dependent-care/education-assistance exclusions are subject to indexed dollar caps — confirm the current-year cap.",
        ],
        scoringActions: [
          "Name the exclusion section that removes each item and stop the analysis there — do not also try to 'deduct' an item that was already excluded.",
          "For §121, verify the 2-of-5-year ownership AND use tests and the once-every-2-years limit before applying the $250k/$500k exclusion, and compute a partial exclusion only for a qualifying reason.",
          "Distinguish tax-exempt municipal interest (§103) from taxable Treasury interest, and remember the gift itself is excluded but its later income is taxed.",
        ],
      },
      {
        id: "tp3",
        title: "Above-the-line adjustments (§62) and the AGI subtotal",
        priority: "high",
        examinerFocus:
          "Identifying which deductions are 'adjustments to income' subtracted from gross income to reach AGI — deductible IRA and HSA contributions, one-half of self-employment tax, self-employed health insurance and retirement plans, the student-loan-interest deduction, and educator expenses — and distinguishing them from itemized deductions. The examiner tests placement (above vs below the line) because AGI drives downstream floors and phase-outs.",
        typicalQuestionForms: [
          "MCQ: which listed item is an adjustment to income rather than an itemized deduction?",
          "MCQ: how much of a described contribution or expense is deductible in arriving at AGI?",
          "TBS: compute AGI from gross income and a schedule of payments.",
        ],
        mustKnow: [
          "Adjustments (§62) reduce gross income to AGI and are available whether or not the taxpayer itemizes; they are strictly more valuable than itemized deductions of the same size. Common adjustments: deductible traditional-IRA contributions, HSA contributions, one-half of self-employment tax, self-employed health-insurance premiums, self-employed retirement (SEP/SIMPLE) contributions, the student-loan-interest deduction, and educator classroom expenses.",
          "The student-loan-interest deduction is limited to $2,500 per return (a FIXED cap) and phases out over an indexed MAGI range — confirm the current-year phase-out. Educator-expense, IRA, HSA, and retirement-plan ceilings are all indexed annually — confirm the current-year maximums.",
          "A self-employed taxpayer deducts one-half of the self-employment tax as an adjustment (mirroring the employer share) and may deduct SE health-insurance premiums above the line (limited to net SE earnings), but only if not eligible for subsidized coverage through an employer of the taxpayer or spouse.",
          "Traditional-IRA deductibility phases out (over indexed ranges) only when the taxpayer or spouse is an active participant in an employer plan; a nondeductible contribution is still allowed but creates basis. Roth-IRA contributions are never deductible (they buy tax-free qualified distributions).",
        ],
        scoringActions: [
          "Before applying any AGI-based floor or phase-out, finish computing AGI by taking every §62 adjustment the facts support.",
          "Classify each payment as above-the-line (adjustment) vs below-the-line (itemized) — e.g., student-loan interest is an adjustment, but home-mortgage interest is itemized.",
          "Flag indexed ceilings (IRA/HSA/retirement/phase-outs) as 'confirm current-year' while treating the $2,500 student-loan cap as fixed.",
        ],
      },
      {
        id: "tp4",
        title: "Standard vs itemized deductions and the itemized limits",
        priority: "high",
        examinerFocus:
          "Choosing the greater of the standard deduction or total itemized deductions, and computing itemized deductions subject to their limits: medical expenses over a 7.5%-of-AGI floor (§213), the capped state-and-local-tax (SALT) deduction (§164), qualified home-mortgage interest (§163(h)), and charitable contributions within AGI-percentage ceilings (§170). The examiner tests the correct order and each limitation.",
        typicalQuestionForms: [
          "MCQ: given a schedule of payments, what is the deductible medical / SALT / charitable amount?",
          "MCQ: should the taxpayer itemize or take the standard deduction?",
          "TBS: build Schedule A and carry total itemized deductions to the 1040.",
        ],
        mustKnow: [
          "Taxpayers deduct the GREATER of the standard deduction (indexed annually; an additional amount applies for age 65+ and/or blindness — confirm current-year figures) or total itemized deductions. TCJA suspended personal and dependency exemptions and raised the standard deduction — confirm whether these rules still apply for your testing window.",
          "Medical expenses (§213) are deductible only to the extent they exceed 7.5% of AGI (a FIXED floor); only unreimbursed qualified medical care counts, and elective/cosmetic costs generally do not.",
          "The SALT deduction (§164) allows the greater of state/local income OR sales taxes, plus property taxes, but the total is capped at $10,000 ($5,000 MFS) — a fixed statutory cap enacted by the TCJA that is scheduled to sunset; confirm whether the cap and its amount apply for your testing window.",
          "Home-mortgage interest (§163(h)) is deductible on acquisition indebtedness up to a $750,000 principal limit ($1,000,000 for debt grandfathered before the TCJA change) — confirm the applicable limit for your window; interest on non-acquisition home-equity debt is deductible only if the proceeds substantially improved the home. Investment interest is deductible only up to net investment income.",
          "Charitable contributions (§170) are limited by AGI percentage ceilings: generally 60% of AGI for cash to public charities, 30% for long-term-capital-gain property to public charities (deducted at FMV), and 20% for gifts of appreciated property to certain private foundations; excess carries forward 5 years. These percentages are FIXED.",
        ],
        scoringActions: [
          "Compute each itemized category net of its limit (medical over the 7.5% floor, SALT capped, charity within the AGI %), total them, THEN compare to the standard deduction and take the greater.",
          "Apply the 7.5% floor to AGI only after AGI is final, and use only unreimbursed qualified costs.",
          "Flag the SALT cap and mortgage-debt limit as TCJA provisions subject to sunset — confirm the amount for the testing window — while treating the 7.5% floor and charitable AGI percentages as fixed.",
        ],
      },
      {
        id: "tp5",
        title: "The qualified business income (QBI) deduction, §199A",
        priority: "critical",
        examinerFocus:
          "Computing the §199A deduction — generally 20% of qualified business income from a pass-through/sole proprietorship — including the overall limit of 20% of (taxable income − net capital gain), the taxable-income threshold that switches on the W-2 wage / UBIA limitation, and the special treatment of a specified service trade or business (SSTB) whose deduction phases out entirely above the threshold. The examiner tests when the limits apply, not just the 20% headline.",
        typicalQuestionForms: [
          "MCQ: what is the QBI deduction for a taxpayer below the threshold?",
          "MCQ: does an SSTB owner above the threshold get any QBI deduction?",
          "TBS: compute the QBI deduction applying the wage/UBIA limit or the SSTB phase-out.",
        ],
        mustKnow: [
          "The §199A deduction is generally 20% of qualified business income (QBI) from a domestic sole proprietorship, partnership, S corporation, or certain trusts/estates; QBI excludes wages, guaranteed payments, and investment items (capital gains, dividends, most interest). The deduction is taken BELOW AGI but does NOT require itemizing.",
          "Overall limit: the deduction cannot exceed 20% of (taxable income computed before the QBI deduction − net capital gain, which includes qualified dividends). Compute the tentative 20% of QBI and this overall cap, and take the lesser.",
          "Above the taxable-income threshold (indexed annually — confirm the current-year single/MFJ amounts), the deduction for a non-SSTB is limited to the greater of (a) 50% of W-2 wages paid by the business or (b) 25% of W-2 wages + 2.5% of the unadjusted basis (UBIA) of qualified property; this wage/UBIA limit phases in over an indexed range above the threshold and does not apply at all below it.",
          "A specified service trade or business (SSTB) — e.g., health, law, accounting, consulting, financial services, athletics, or any trade whose principal asset is the reputation/skill of its owners — loses the QBI deduction entirely once taxable income exceeds the threshold plus the full phase-out range; below the threshold an SSTB is treated like any other business. §199A is a TCJA provision scheduled to sunset — confirm it applies for your window.",
        ],
        scoringActions: [
          "First locate the taxpayer relative to the indexed threshold: below it, simply take the lesser of 20% of QBI and 20% of (taxable income − net capital gain).",
          "Above the threshold, apply the W-2 wage/UBIA limit for a non-SSTB, and phase out (to zero) the deduction for an SSTB.",
          "Always cap the result at 20% of (taxable income − net capital gain), and remember QBI excludes wages, guaranteed payments, and investment income.",
        ],
      },
      {
        id: "tp6",
        title: "Timing and character of individual income",
        priority: "high",
        examinerFocus:
          "Applying the cash vs accrual method for individuals, the constructive-receipt and claim-of-right doctrines that fix the YEAR of inclusion, and the character distinction between ordinary income and net capital gain — including the preferential 0/15/20% rates and the $3,000 net-capital-loss limitation. The examiner tests when income is taxed and at what rate.",
        typicalQuestionForms: [
          "MCQ: in which year must a described item be reported (constructive receipt)?",
          "MCQ: net the capital gains/losses and state the deductible loss and any carryover.",
          "MCQ: which portion of income is taxed at preferential capital-gain rates?",
        ],
        mustKnow: [
          "Most individuals use the CASH method: income is reported when actually or constructively received and expenses when paid. Under constructive receipt, income is taxed when it is credited, set apart, or made available without substantial restriction — a taxpayer cannot defer by declining to cash an available check. The claim-of-right doctrine taxes amounts received under an unrestricted claim even if a later repayment may be required.",
          "Character: long-term capital gains (assets held more than one year) and qualified dividends are taxed at preferential 0/15/20% rates (the breakpoints are indexed annually — confirm current-year); short-term gains and ordinary income are taxed at ordinary rates. A 3.8% net investment income tax may apply above indexed MAGI thresholds.",
          "Capital-loss netting: net short-term and long-term separately, then against each other; an individual may deduct a net capital loss against ordinary income only up to $3,000 per year ($1,500 MFS) — a FIXED limit — and carries the excess forward indefinitely, retaining its short-/long-term character.",
          "Capital vs ordinary turns on the asset: capital assets are property other than inventory, receivables, and depreciable/real business property (§1231); business-use property is analyzed under §1231 with §1245/§1250 depreciation recapture converting some gain to ordinary income.",
        ],
        scoringActions: [
          "Fix the year of inclusion with constructive receipt/claim of right before computing the amount — availability, not physical possession, controls for a cash-basis taxpayer.",
          "Net capital transactions in the required order and cap the ordinary-income offset at $3,000, scheduling the remainder as a carryforward.",
          "Separate preferential-rate income (LTCG + qualified dividends) from ordinary income so the correct rate schedule applies.",
        ],
      },
      {
        id: "tp7",
        title: "Filing status, dependents and standard-deduction mechanics",
        priority: "medium",
        examinerFocus:
          "Determining the correct filing status (single, MFJ, MFS, head of household, qualifying surviving spouse), applying the dependency tests, and computing the standard deduction — including the additional amount for age/blindness, the limited standard deduction of a person who can be claimed as a dependent, and the kiddie tax on a child's unearned income. The examiner tests status selection and the deduction amount, both of which change the whole computation.",
        typicalQuestionForms: [
          "MCQ: what is the taxpayer's correct filing status given household and support facts?",
          "MCQ: is a person a qualifying child or qualifying relative (a dependent)?",
          "MCQ: compute a dependent's limited standard deduction or the child's kiddie-tax exposure.",
        ],
        mustKnow: [
          "Head of household requires an unmarried (or 'considered unmarried') taxpayer who paid more than half the cost of maintaining a home that was the principal home of a qualifying person for more than half the year; it yields a larger standard deduction and wider brackets than single. Qualifying surviving spouse (2 years after the year of a spouse's death, with a dependent child) uses MFJ rates.",
          "Dependency: a qualifying CHILD must meet relationship, age (under 19, or under 24 if a full-time student), residency (more than half the year), and support (child did not provide more than half of own support) tests; a qualifying RELATIVE must meet a gross-income test (dependent's gross income below an indexed limit) and a support test (taxpayer provided more than half). Confirm the current-year gross-income limit.",
          "The standard deduction is indexed annually; taxpayers who are 65+ and/or blind add an indexed extra amount per condition. A person who can be claimed as a dependent has a standard deduction limited to the greater of an indexed floor or earned income plus an indexed add-on (and not more than the regular standard deduction) — confirm current-year figures.",
          "Kiddie tax: a child's net UNEARNED income above an indexed threshold is taxed at the parents' marginal rate; this prevents shifting investment income to a low-bracket child. Confirm the current-year unearned-income threshold.",
        ],
        scoringActions: [
          "Settle filing status first (it fixes the standard deduction and brackets) before computing tax; test HOH against the 'considered unmarried' and 'more than half the cost of a home for a qualifying person' requirements.",
          "For a dependent, run the qualifying-child tests first, then qualifying-relative (gross-income + support) if the child tests fail.",
          "For a dependent's own return, cap the standard deduction at the earned-income-plus-add-on formula and flag the kiddie tax on unearned income — confirm current-year indexed amounts.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Individual taxation is the largest REG area (Area V, roughly 22–38% of the exam across its parts) and is heavily simulated. The 1040 build-up TBS is the marquee item: bank the mechanical points by working the formula in strict order and separating excluded receipts, above-the-line adjustments, and itemized deductions into their correct lines.",
      timeBudget:
        "~1.25 min per MCQ; on a 1040/AGI TBS spend the first 2–3 minutes laying out the ordered formula (gross income → adjustments → AGI → deductions → QBI → taxable income) on scratch paper before filling any line, and reserve time to confirm any indexed amount against the exam's provided authorities.",
      answerSequence: [
        "List gross income, testing each receipt for a specific exclusion (§§101–139) before including it.",
        "Subtract every §62 adjustment the facts support to reach AGI — do this before any AGI-based floor or phase-out.",
        "Compute itemized deductions net of their limits (7.5% medical floor, SALT cap, charitable AGI %), compare to the standard deduction, and take the greater.",
        "Compute the §199A QBI deduction (checking the threshold, wage/UBIA limit or SSTB phase-out, and the 20%-of-(taxable income − net capital gain) cap), then arrive at taxable income and identify any preferential-rate income.",
      ],
      qualityChecks: [
        "Did I finish AGI before applying the 7.5% medical floor, phase-outs, or the §199A overall cap?",
        "Did I keep above-the-line adjustments separate from itemized deductions (e.g., student-loan interest above the line, mortgage interest below)?",
        "Did I flag inflation-indexed amounts (standard deduction, §199A thresholds, IRA/HSA caps, capital-gain breakpoints) as 'confirm current-year' rather than quoting a stale figure?",
        "Did I flag TCJA-sunset provisions (SALT cap, elevated standard deduction, §199A, mortgage-debt limit) as law-dependent for the testing window, while trusting fixed figures (7.5% floor, $250k/$500k §121, $3,000 loss, $2,500 loan-interest cap, charitable %s)?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The individual tax formula and §61 gross income",
        testPointIds: ["tp1", "tp6"],
        explanation: [
          "Every individual-tax question rides on one ordered formula, and the examiner's favorite trap is to make you apply a step out of sequence. Gross income minus above-the-line adjustments equals adjusted gross income (AGI); AGI minus the greater of the standard deduction or itemized deductions, minus the §199A QBI deduction, equals taxable income; tax is then computed on taxable income (with preferential rates carved out for net capital gain and qualified dividends) and reduced by credits. The reason order matters is that AGI is a hinge: the medical floor, several phase-outs, and the §199A overall cap are all measured against a figure that is not final until every adjustment is taken. Compute AGI first; then, and only then, apply anything expressed as a percentage of AGI.",
          "Section 61 sets the default: gross income is 'all income from whatever source derived.' The practical consequence is that the taxpayer must point to a specific exclusion to keep a receipt out of income — the drafters put the thumb on the scale toward inclusion. So wages, taxable interest, dividends, business profits, unemployment compensation, gambling winnings, prizes, awards, and taxable refunds all go in unless a section such as §102 (gifts) or §103 (municipal interest) pulls them out. Two recurring inclusion rules are worth memorizing: the tax-benefit rule (a state income-tax refund is income only to the extent last year's SALT deduction actually reduced tax, so a standard-deduction taxpayer excludes the refund) and the post-2018 alimony rule (for instruments executed after 12/31/2018, alimony is neither income nor deduction, and child support is always ignored).",
          "Timing and character sit alongside inclusion. Most individuals are cash-method: income is reported when received — actually or constructively. Constructive receipt taxes amounts made available without substantial restriction, so a taxpayer cannot defer income by leaving an available check uncashed or a matured bond uncollected. Character then decides the rate: long-term capital gains (held more than a year) and qualified dividends enjoy the preferential 0/15/20% breakpoints (indexed — confirm current-year), while short-term gains and most other income are ordinary. Net capital losses offset ordinary income only up to $3,000 per year ($1,500 MFS), a fixed limit, with the excess carried forward indefinitely and keeping its short-/long-term character.",
        ],
        keyRules: [
          "Formula: gross income − adjustments = AGI; AGI − (greater of standard or itemized) − QBI = taxable income; compute AGI before any AGI-based floor or phase-out.",
          "§61 default is inclusion; find a specific exclusion to remove a receipt. Tax-benefit rule governs state refunds; post-2018 alimony is neither income nor deduction; child support is always ignored.",
          "Cash-method + constructive receipt fix the year; LTCG/qualified dividends get 0/15/20% (indexed) rates; net capital loss offsets ordinary income only $3,000/year ($1,500 MFS, fixed) with indefinite carryforward.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A single, cash-method taxpayer received the following during the year: salary $60,000; $500 interest on corporate bonds; $300 interest on municipal bonds; $1,000 qualified dividends; a $2,000 birthday gift from a grandparent; a $400 state income-tax refund (the taxpayer itemized last year and the SALT deduction produced a full tax benefit); $1,200 unemployment compensation; $6,000 of child support; and $5,000 of life-insurance proceeds received on the death of a parent. Determine gross income.",
          steps: [
            "Apply §61: start by including everything, then remove items with a specific exclusion.",
            "Include salary $60,000; corporate-bond interest $500; qualified dividends $1,000 (taxable, though later taxed at preferential rates); unemployment compensation $1,200 (fully taxable).",
            "Include the $400 state tax refund under the tax-benefit rule — the taxpayer itemized last year and the SALT deduction reduced tax, so the refund is taxable this year.",
            "Exclude municipal-bond interest $300 (§103), the $2,000 gift (§102), the $6,000 child support (never income), and the $5,000 life-insurance death proceeds (§101).",
            "Sum the includible items: $60,000 + $500 + $1,000 + $1,200 + $400 = $63,100.",
          ],
          conclusion:
            "Gross income is $63,100; the $300 municipal interest, $2,000 gift, $6,000 child support, and $5,000 life-insurance proceeds are excluded. The $1,000 qualified dividends are included in gross income but will be taxed at the preferential capital-gain rate schedule.",
          markingNotes: [
            "Award marks for including salary, corporate interest, qualified dividends, and unemployment compensation.",
            "Award a mark for including the state refund under the tax-benefit rule (itemized + tax benefit last year).",
            "Award marks for excluding municipal interest (§103), the gift (§102), child support, and life-insurance death proceeds (§101).",
            "Full marks require the correct total of $63,100 and noting the qualified dividends keep preferential-rate character.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Statutory exclusions: gifts, life insurance, muni interest and §121",
        testPointIds: ["tp2"],
        explanation: [
          "Because §61 makes inclusion the default, the exclusion sections are where marks are won or lost, and each has a precise boundary the examiner probes. Gifts, bequests and inheritances are excluded to the recipient under §102 — but only the transfer itself; income the property later throws off (rent, interest, dividends) is fully taxable. Life-insurance proceeds paid 'by reason of the death of the insured' are excluded under §101, whereas amounts received from cashing in a policy during life, or interest paid on delayed proceeds, are taxable. Municipal-bond interest is permanently excluded under §103, a favorite distractor when paired with U.S. Treasury interest, which is federally taxable (though exempt from state tax). The pattern to internalize: identify the exclusion section, apply its ceiling or condition, and stop — do not then try to 'deduct' something already excluded.",
          "The §121 principal-residence exclusion is the most computational exclusion and the one most often simulated. A taxpayer may exclude up to $250,000 of gain ($500,000 on a joint return) on the sale of a home if, during the five years ending on the sale date, the taxpayer owned the home for at least two years AND used it as a principal residence for at least two years, and has not used the §121 exclusion within the prior two years. These dollar amounts are FIXED by statute — they are not indexed — so they are safe to state precisely. Gain above the exclusion is a capital gain; a loss on a personal residence is nondeductible. When a sale is forced early by a change in employment, health, or unforeseen circumstances, a reduced (pro-rated) exclusion is available based on the fraction of the two-year period satisfied.",
          "Employer-provided fringe benefits round out the exclusions and appear constantly on employment fact patterns. Employer-paid health coverage (§106) and medical reimbursements (§105) are excluded; meals and lodging furnished on the employer's business premises for the employer's convenience are excluded under §119; and §132 excludes no-additional-cost services, qualified employee discounts, working-condition fringes, and de minimis fringes. Cafeteria-plan (§125), dependent-care, and educational-assistance exclusions are capped at indexed dollar amounts — flag those as 'confirm current-year' — but the health, meals/lodging, and most §132 fringes are excluded without a dollar cap when their conditions are met.",
        ],
        keyRules: [
          "§102 excludes gifts/inheritances to the recipient, but later income on the property is taxable; §101 excludes life-insurance death proceeds; §103 permanently excludes municipal interest (Treasury interest is federally taxable).",
          "§121 excludes up to $250,000 ($500,000 MFJ, both FIXED) of gain on a principal residence given the 2-of-5-year ownership AND use tests and the once-every-2-years limit; a partial exclusion applies for employment/health/unforeseen-circumstance sales; a personal-residence loss is nondeductible.",
          "Excludable fringes: §106 health coverage, §105 reimbursements, §119 meals/lodging for employer convenience, §132 fringes; §125 cafeteria/dependent-care/education-assistance caps are indexed — confirm current-year.",
        ],
      },
      {
        id: "sn3",
        title: "Above-the-line adjustments vs itemized deductions",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "The line that separates adjustments (§62) from itemized deductions is the single most important structural distinction in individual tax, because adjustments reduce AGI while itemized deductions reduce taxable income only below AGI. An adjustment of a given size is therefore worth more than an equal itemized deduction: it is available whether or not you itemize, and it lowers AGI, which in turn loosens AGI-based floors and phase-outs elsewhere on the return. Classic adjustments include deductible traditional-IRA and HSA contributions, one-half of self-employment tax, self-employed health-insurance premiums and retirement contributions, the student-loan-interest deduction, and educator classroom expenses. The examiner's trap is to list an adjustment among itemized deductions (or vice versa) — e.g., student-loan interest is an adjustment, but home-mortgage interest is itemized. Most adjustment ceilings (IRA, HSA, retirement, and the student-loan phase-out range) are indexed annually and should be flagged 'confirm current-year'; the $2,500 student-loan-interest cap itself is fixed.",
          "Below the line, the taxpayer takes the GREATER of the standard deduction (indexed; larger for age 65+ and/or blindness) or total itemized deductions. Each itemized category carries its own limit. Medical expenses are deductible only to the extent unreimbursed qualified costs exceed 7.5% of AGI — a fixed floor that makes the deduction useless for most taxpayers with modest medical bills. The SALT deduction allows the greater of state income or sales taxes plus property taxes, but the total is capped at $10,000 ($5,000 MFS); this cap and the elevated standard deduction are TCJA provisions with a scheduled sunset, so confirm they apply for the testing window. Home-mortgage interest is deductible on acquisition debt up to a $750,000 principal limit (or $1,000,000 for grandfathered pre-TCJA debt), and home-equity interest is deductible only if the borrowing substantially improved the home.",
          "Charitable contributions complete Schedule A and have their own AGI-percentage ceilings, all fixed: generally 60% of AGI for cash gifts to public charities, 30% for gifts of long-term-capital-gain property to public charities (deducted at fair market value, which lets the taxpayer skip the built-in gain), and 20% for appreciated property given to certain private foundations. Contributions above the ceiling carry forward for five years. The disciplined approach is mechanical: compute each category net of its limit, total the itemized deductions, then compare that total to the standard deduction and claim the larger figure. Never compare a raw, pre-limit itemized total to the standard deduction — the limits must be applied first.",
        ],
        keyRules: [
          "Adjustments (§62) reduce AGI and are available without itemizing (IRA, HSA, ½ SE tax, SE health insurance, student-loan interest, educator expenses); the $2,500 loan-interest cap is fixed, but IRA/HSA/retirement ceilings and the phase-out ranges are indexed.",
          "Take the greater of the standard deduction (indexed; +age/blind) or itemized deductions; medical over a 7.5%-of-AGI fixed floor; SALT capped at $10,000/$5,000 MFS (TCJA — confirm for window); mortgage interest on acquisition debt up to $750,000 ($1,000,000 grandfathered).",
          "Charitable AGI ceilings are fixed: 60% cash / 30% LTCG property (FMV) / 20% appreciated to private foundations, with a 5-year carryforward; apply every itemized limit before comparing to the standard deduction.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A single taxpayer (under 65, not blind) has gross income of $103,000 consisting of wages $95,000, taxable interest $1,500, qualified dividends $2,500, and a $4,000 long-term capital gain. During the year the taxpayer made a $5,000 deductible traditional-IRA contribution (within the current-year limit) and paid $2,000 of student-loan interest (MAGI is below the phase-out). Schedule A payments were: unreimbursed medical $5,000; state income and property taxes totaling $12,000; qualified home-mortgage interest $9,000; and cash charitable gifts to a public charity of $3,000. Assume the current-year single standard deduction is provided by the exam as $15,000. Compute AGI, total itemized deductions, and taxable income (before any QBI deduction).",
          steps: [
            "Compute AGI. Gross income $103,000 − adjustments (IRA $5,000 + student-loan interest $2,000 = $7,000) = AGI $96,000. The $2,000 loan interest is under the fixed $2,500 cap and MAGI is below the (indexed) phase-out, so it is fully deductible.",
            "Medical: deductible only over 7.5% of AGI. 7.5% × $96,000 = $7,200 floor; $5,000 of medical is below the floor, so $0 is deductible.",
            "SALT: $12,000 of state/property taxes is capped at $10,000 (confirm the TCJA cap applies for the window).",
            "Mortgage interest $9,000 is fully deductible (acquisition debt within the limit). Charitable cash $3,000 is within the 60%-of-AGI ceiling, so fully deductible.",
            "Total itemized = $0 (medical) + $10,000 (SALT) + $9,000 (mortgage) + $3,000 (charity) = $22,000. Compare to the $15,000 standard deduction and take the greater — itemize $22,000.",
            "Taxable income before QBI = AGI $96,000 − itemized $22,000 = $74,000. Note $6,500 of that ($2,500 qualified dividends + $4,000 LTCG) is preferential-rate income taxed under the 0/15/20% schedule.",
          ],
          conclusion:
            "AGI is $96,000, total itemized deductions are $22,000 (so the taxpayer itemizes rather than taking the $15,000 standard deduction), and taxable income before QBI is $74,000, of which $6,500 is taxed at preferential capital-gain rates.",
          markingNotes: [
            "Award marks for reaching AGI of $96,000 by taking the IRA and student-loan-interest adjustments (and noting the $2,500 cap is fixed).",
            "Award a mark for the $0 medical deduction after applying the 7.5%-of-AGI floor ($7,200).",
            "Award marks for capping SALT at $10,000 and allowing mortgage interest and charity in full within their limits.",
            "Full marks require total itemized of $22,000, the itemize-vs-standard comparison, and taxable income of $74,000 with the preferential-rate income identified.",
          ],
        },
      },
      {
        id: "sn4",
        title: "The §199A qualified business income deduction",
        testPointIds: ["tp5"],
        explanation: [
          "The §199A deduction rewards owners of pass-through businesses (sole proprietorships, partnerships, S corporations) with a deduction of generally 20% of qualified business income (QBI). It is unusual structurally: it is taken below AGI but does NOT require itemizing, and it sits between AGI (well, taxable income before QBI) and final taxable income. QBI is the net income of a qualified U.S. trade or business, and it deliberately EXCLUDES compensation-type and investment items — W-2 wages the owner draws, guaranteed payments to a partner, capital gains and losses, dividends, and most interest income are not QBI. The examiner's first job for you is to strip those items out before applying 20%.",
          "Two limits then bite, and both hinge on where the taxpayer's taxable income falls relative to an indexed threshold (confirm the current-year single and MFJ amounts). BELOW the threshold, the analysis is simple: the deduction is the lesser of (a) 20% of QBI and (b) 20% of (taxable income before the QBI deduction − net capital gain, where net capital gain includes qualified dividends). ABOVE the threshold, a non-SSTB becomes subject to the W-2 wage/UBIA limitation: the deduction is capped at the greater of 50% of the business's W-2 wages, or 25% of W-2 wages plus 2.5% of the unadjusted basis (UBIA) of qualified property. This limitation phases in over an indexed range just above the threshold, so a taxpayer partway into the range gets a blended result.",
          "The specified service trade or business (SSTB) rule is the sharpest edge. An SSTB — health, law, accounting, actuarial science, performing arts, consulting, athletics, financial services, brokerage, investing, and any business whose principal asset is the reputation or skill of its owners — is treated like any other business BELOW the threshold, but its QBI deduction phases DOWN and disappears entirely once taxable income exceeds the threshold plus the full phase-out range. Architecture and engineering are notably carved OUT of the SSTB list. Whatever the path, always finish by capping the deduction at 20% of (taxable income − net capital gain). And because §199A is a TCJA creation with a scheduled sunset, flag it as law-dependent for the testing window.",
        ],
        keyRules: [
          "§199A ≈ 20% of QBI; QBI excludes W-2 wages, guaranteed payments, and investment income; the deduction is below AGI but does not require itemizing.",
          "Below the indexed threshold: deduction = lesser of 20% of QBI or 20% of (taxable income − net capital gain, incl. qualified dividends).",
          "Above the threshold: non-SSTB is limited to the greater of 50% of W-2 wages or 25% of W-2 wages + 2.5% of UBIA; an SSTB's deduction phases out to zero. §199A is TCJA — confirm it applies for the window.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A single taxpayer has taxable income before the QBI deduction of $150,000, which the exam confirms is BELOW the current-year §199A threshold. The taxpayer's only business is a sole proprietorship (a non-SSTB retail store) that generated $100,000 of qualified business income. The taxpayer has no net capital gain or qualified dividends. Compute the §199A QBI deduction.",
          steps: [
            "Confirm the threshold position: taxable income ($150,000) is below the indexed threshold, so the W-2 wage/UBIA limitation does NOT apply and the SSTB question is irrelevant.",
            "Tentative deduction = 20% of QBI = 20% × $100,000 = $20,000.",
            "Overall cap = 20% of (taxable income before QBI − net capital gain) = 20% × ($150,000 − $0) = $30,000.",
            "Take the lesser of the tentative deduction and the overall cap: lesser of $20,000 and $30,000 = $20,000.",
            "Final taxable income = $150,000 − $20,000 = $130,000. (If instead the store were an SSTB but the taxpayer stayed below the threshold, the answer would be the same $20,000; the SSTB restriction only matters above the threshold.)",
          ],
          conclusion:
            "The §199A deduction is $20,000, reducing taxable income to $130,000. Because taxable income is below the indexed threshold, neither the W-2 wage/UBIA limitation nor the SSTB phase-out applies; the deduction is simply the lesser of 20% of QBI and 20% of (taxable income − net capital gain).",
          markingNotes: [
            "Award a mark for identifying that being below the (indexed) threshold switches off the wage/UBIA limit and the SSTB rule.",
            "Award marks for the tentative 20% of QBI ($20,000) and the 20%-of-(taxable income − net capital gain) overall cap ($30,000).",
            "Award a mark for taking the lesser ($20,000) and reaching taxable income of $130,000.",
            "Award a mark for noting that below the threshold an SSTB is treated the same, and for flagging §199A as a TCJA provision to confirm for the window.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Timing, character and capital-transaction netting",
        testPointIds: ["tp6"],
        explanation: [
          "Two questions decide how a receipt is taxed: WHEN (timing) and AT WHAT RATE (character). On timing, individuals are overwhelmingly cash-method, reporting income when actually or constructively received and deducting expenses when paid. Constructive receipt is the doctrine the examiner leans on: income is taxed once it is credited to the taxpayer's account, set apart, or otherwise made available without substantial limitation. A December bonus check available for pickup on December 28 is taxed that year even if the taxpayer waits until January to collect it; a matured, redeemable bond's interest is taxed when it becomes available, not when cashed. The claim-of-right doctrine complements this: money received under an unrestricted claim is taxed in the year received even if the taxpayer might later have to repay it.",
          "Character then sets the rate. Net capital gain — the excess of net long-term capital gain (assets held more than one year) over net short-term capital loss — plus qualified dividends is taxed at the preferential 0/15/20% rates, whose breakpoints are indexed annually (confirm current-year). Short-term capital gains and ordinary income are taxed at ordinary rates, and a 3.8% net investment income tax can apply above indexed MAGI thresholds. The rate spread is why the holding period and the classification of an asset as capital, ordinary, or §1231 property carries real exam weight.",
          "Capital-loss netting is a mechanical, high-yield routine. Net short-term gains and losses together, net long-term gains and losses together, then net the two results against each other. If the overall result is a net capital LOSS, an individual may deduct it against ordinary income only up to $3,000 per year ($1,500 for married filing separately) — a FIXED limit — and carries the unused loss forward indefinitely, preserving its short- or long-term character. There is no carryback for individual capital losses. Contrast this with §1231 business-use property, where a net §1231 gain is generally long-term capital gain (subject to §1245/§1250 depreciation recapture that converts part of the gain to ordinary income) while a net §1231 loss is fully ordinary.",
        ],
        keyRules: [
          "Cash-method timing + constructive receipt: income is taxed when available without substantial restriction, regardless of physical possession; claim of right taxes amounts received under an unrestricted claim.",
          "Net capital gain (LTCG over net STCL) and qualified dividends get preferential 0/15/20% rates (breakpoints indexed); a 3.8% NIIT may apply above indexed MAGI thresholds.",
          "Net capital loss offsets ordinary income only up to $3,000/year ($1,500 MFS, fixed) with indefinite carryforward and no carryback; §1231 gain is capital (with §1245/§1250 recapture) but §1231 loss is ordinary.",
        ],
      },
      {
        id: "sn6",
        title: "Filing status, dependents and standard-deduction mechanics",
        testPointIds: ["tp7"],
        explanation: [
          "Filing status is chosen before anything is computed because it fixes the standard-deduction amount and the rate brackets. The five statuses are single, married filing jointly (MFJ), married filing separately (MFS), head of household (HOH), and qualifying surviving spouse (QSS). HOH is the most tested because of its tight requirements: the taxpayer must be unmarried or 'considered unmarried' (living apart from a spouse for the last six months of the year), must have paid more than half the cost of maintaining a home, and that home must have been the principal residence for more than half the year of a qualifying person (typically a qualifying child or a dependent relative). HOH delivers a larger standard deduction and wider brackets than single. Qualifying surviving spouse lets a widow(er) with a dependent child use the favorable MFJ rate schedule for the two years following the year of the spouse's death.",
          "Dependency status determines both HOH eligibility and various credits, and it runs through two tests. A qualifying CHILD must satisfy relationship (child, sibling, or descendant), age (under 19, or under 24 if a full-time student, or any age if permanently disabled), residency (lived with the taxpayer more than half the year), and support (the child did not provide more than half of the child's own support). If the qualifying-child tests fail, the person may still be a qualifying RELATIVE if the taxpayer provided more than half the person's support and the person's gross income is below an indexed limit (confirm current-year). Note the different support directions: for a qualifying child, the CHILD must not have provided over half of its OWN support; for a qualifying relative, the TAXPAYER must have provided over half.",
          "The standard deduction is indexed annually, with an additional indexed amount for each condition of being 65 or older and/or blind. A person who can be claimed as someone else's dependent has a limited standard deduction: the greater of an indexed floor amount or the person's earned income plus an indexed add-on, but never more than the regular standard deduction. Finally, the kiddie tax prevents income-shifting: a child's net UNEARNED income above an indexed threshold is taxed at the parents' marginal rate rather than the child's, so parking a portfolio in a child's name no longer escapes the higher bracket. All of these figures are indexed — flag them 'confirm current-year' — while the structure of the tests themselves is fixed.",
        ],
        keyRules: [
          "Choose filing status first (it sets the standard deduction and brackets); HOH requires unmarried/considered-unmarried + >half the cost of a home that is a qualifying person's principal home >half the year; QSS uses MFJ rates for 2 years after a spouse's death with a dependent child.",
          "Qualifying child = relationship + age + residency + support (child didn't provide >half own support); qualifying relative = support (taxpayer provided >half) + gross-income under an indexed limit.",
          "Standard deduction is indexed (+age/blind add-ons); a dependent's standard deduction is limited to the greater of an indexed floor or earned income + an indexed add-on; kiddie tax taxes a child's unearned income above an indexed threshold at the parents' rate.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2", "tp3", "tp4"],
        style: "Task-based simulation (Form 1040 build-up)",
        question:
          "A single taxpayer under 65 reports: wages $95,000; bank interest $1,500; municipal-bond interest $800; qualified dividends $2,500; a long-term capital gain $4,000; and a $20,000 inheritance from an aunt. The taxpayer made a $5,000 deductible traditional-IRA contribution and paid $2,000 of student-loan interest (MAGI below the phase-out). Schedule A payments: unreimbursed medical $5,000; state and local taxes $12,000; qualified home-mortgage interest $9,000; cash charitable gifts to a public charity $3,000. The exam provides a current-year single standard deduction of $15,000. Compute gross income, AGI, total itemized deductions, and taxable income (ignore any QBI deduction), and state which deduction the taxpayer takes.",
        answerPlan: [
          "Gross income: include wages, interest, qualified dividends, and LTCG; exclude municipal interest (§103) and the inheritance (§102).",
          "AGI: subtract the IRA ($5,000) and student-loan interest ($2,000) adjustments.",
          "Itemized: apply the 7.5% medical floor, cap SALT at $10,000, allow mortgage interest and charity within limits.",
          "Compare itemized to the $15,000 standard deduction; take the greater; compute taxable income.",
        ],
        modelAnswer:
          "Gross income = wages $95,000 + bank interest $1,500 + qualified dividends $2,500 + LTCG $4,000 = $103,000; municipal-bond interest ($800, §103) and the $20,000 inheritance (§102) are excluded. AGI = $103,000 − adjustments of $7,000 (IRA $5,000 + student-loan interest $2,000, which is under the fixed $2,500 cap and within the indexed MAGI phase-out) = $96,000. Itemized deductions: medical of $5,000 is fully below the 7.5%-of-AGI floor (7.5% × $96,000 = $7,200), so $0 is deductible; SALT of $12,000 is capped at $10,000 (a TCJA cap — confirm it applies for the window); mortgage interest of $9,000 is deductible in full; and the $3,000 cash charitable gift is within the 60%-of-AGI ceiling, so fully deductible. Total itemized = $0 + $10,000 + $9,000 + $3,000 = $22,000, which exceeds the $15,000 standard deduction, so the taxpayer ITEMIZES. Taxable income before QBI = $96,000 − $22,000 = $74,000, of which $6,500 ($2,500 qualified dividends + $4,000 LTCG) is taxed under the preferential 0/15/20% schedule (breakpoints indexed).",
        markingGuide: [
          "1 mark: gross income of $103,000 with municipal interest and the inheritance excluded.",
          "1 mark: AGI of $96,000 after the IRA and student-loan-interest adjustments (noting the $2,500 cap is fixed).",
          "1 mark: itemized deductions of $22,000 — $0 medical after the 7.5% floor, SALT capped at $10,000, mortgage and charity in full.",
          "1 mark: choosing to itemize ($22,000 > $15,000) and taxable income of $74,000 with the $6,500 of preferential-rate income identified.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1", "tp2"],
        style: "Short constructed response (inclusion vs exclusion)",
        question:
          "For each item, state whether it is included in or excluded from the recipient's federal gross income, and give the reason: (a) $10,000 of life-insurance proceeds received on the death of a spouse; (b) a $600 state income-tax refund where the taxpayer claimed the standard deduction in the prior year; (c) $3,000 of alimony received under a divorce decree executed in the current year; (d) $1,500 of interest on U.S. Treasury bonds; (e) a $4,000 scholarship, of which $3,000 paid tuition and $1,000 paid dormitory room and board.",
        answerPlan: [
          "(a) §101 death proceeds — excluded.",
          "(b) Tax-benefit rule — refund excluded because no prior tax benefit (standard deduction).",
          "(c) Post-2018 alimony — excluded (neither income nor deduction).",
          "(d) Treasury interest — included federally (state-exempt).",
          "(e) §117 scholarship — tuition portion excluded, room and board included.",
        ],
        modelAnswer:
          "(a) EXCLUDED under §101 — life-insurance proceeds paid by reason of the insured's death are not gross income. (b) EXCLUDED under the tax-benefit rule — because the taxpayer took the standard deduction last year, the SALT deduction produced no tax benefit, so the $600 refund is not taxable this year (it would be taxable only to the extent a prior itemized SALT deduction reduced tax). (c) EXCLUDED — for a divorce or separation instrument executed after 12/31/2018, alimony is neither includible by the payee nor deductible by the payor (TCJA); this is a fixed date rule. (d) INCLUDED in federal gross income — interest on U.S. Treasury obligations is federally taxable (though exempt from state income tax); contrast municipal interest, which is federally excluded under §103. (e) PARTIALLY EXCLUDED under §117 — the $3,000 used for tuition (and required fees/books) is excluded, but the $1,000 used for room and board is included in gross income.",
        markingGuide: [
          "1 mark: (a) excluded under §101 and (d) Treasury interest included (with the muni contrast).",
          "1 mark: (b) excluded because the prior standard deduction produced no tax benefit.",
          "1 mark: (c) excluded as post-2018 alimony (neither income nor deduction).",
          "1 mark: (e) tuition portion excluded but room-and-board portion included under §117.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5"],
        style: "Task-based simulation (§199A limitation)",
        question:
          "A single taxpayer has taxable income before the QBI deduction of $260,000, which the exam confirms is ABOVE the current-year §199A threshold plus the full phase-out range. The taxpayer's only business is a management-consulting sole proprietorship that earned $120,000 of qualified business income and paid no W-2 wages. Determine the §199A deduction, and explain how the answer would differ if the same business were instead a non-service retail store that paid $60,000 of W-2 wages.",
        answerPlan: [
          "Classify the business: consulting is a specified service trade or business (SSTB).",
          "Locate the taxpayer above the threshold + full phase-out range.",
          "SSTB above that range → deduction phases out to $0.",
          "Contrast: a non-SSTB above the threshold gets the wage/UBIA limit — the greater of 50% of W-2 wages or 25% of wages + 2.5% UBIA.",
        ],
        modelAnswer:
          "Management consulting is a specified service trade or business (SSTB). Because the taxpayer's taxable income ($260,000) exceeds the indexed §199A threshold plus the entire phase-out range for a single filer, the SSTB is fully disqualified: the §199A deduction is $0, regardless of the $120,000 of QBI. (Below the threshold, the SSTB would have been treated like any other business and yielded roughly 20% of QBI.) If the same business were instead a non-service retail store above the threshold, it would NOT be disqualified but would be subject to the W-2 wage/UBIA limitation: the deduction would be the LESSER of 20% of QBI ($24,000) and the wage/UBIA cap — the greater of 50% of W-2 wages (50% × $60,000 = $30,000) or 25% of wages + 2.5% of UBIA (here $15,000 + $0 = $15,000), i.e., $30,000 — subject to the overall cap of 20% of (taxable income − net capital gain). Because $24,000 (20% of QBI) is less than the $30,000 wage cap, the retail store's deduction would be $24,000. §199A is a TCJA provision scheduled to sunset — confirm it applies for the testing window, and confirm the current-year indexed threshold.",
        markingGuide: [
          "1 mark: identifying consulting as an SSTB and the taxpayer as above the threshold + full phase-out range.",
          "1 mark: concluding the SSTB deduction is $0 (and noting it would be ~20% of QBI below the threshold).",
          "1 mark: applying the wage/UBIA limit to the non-SSTB alternative (greater of 50% of wages or 25% + 2.5% UBIA = $30,000).",
          "1 mark: reaching the $24,000 retail deduction (lesser of 20% of QBI and the wage cap) and flagging §199A/threshold as law-dependent and indexed.",
        ],
      },
      {
        id: "ep4",
        testPointIds: ["tp4", "tp6"],
        style: "MCQ-set rationale (itemized limits & capital netting)",
        question:
          "A single taxpayer with AGI of $120,000 reports: unreimbursed medical expenses $12,000; a cash charitable gift of appreciated stock (held 3 years, FMV $50,000, basis $10,000) to a public charity; and capital transactions of a $9,000 short-term capital loss and a $2,000 long-term capital gain. Compute (i) the deductible medical expense, (ii) the current-year charitable deduction and any carryover, and (iii) the capital-loss deduction against ordinary income and any carryforward.",
        answerPlan: [
          "Medical: subtract the 7.5%-of-AGI floor.",
          "Charity: LTCG property to a public charity is deducted at FMV, limited to 30% of AGI, with a 5-year carryforward.",
          "Capital netting: net ST and LT, apply the $3,000 ordinary-income limit, carry forward the rest.",
        ],
        modelAnswer:
          "(i) Medical: the 7.5%-of-AGI floor is 7.5% × $120,000 = $9,000, so the deductible medical expense is $12,000 − $9,000 = $3,000. (ii) Charity: a gift of long-term-capital-gain property (the stock held over one year) to a public charity is deducted at fair market value ($50,000), and the taxpayer avoids tax on the $40,000 built-in gain; however, the deduction for appreciated LTCG property to a public charity is limited to 30% of AGI = 30% × $120,000 = $36,000 this year, so $36,000 is deductible now and the remaining $14,000 carries forward for up to 5 years (the 30% ceiling is fixed). (iii) Capital netting: the $9,000 short-term loss nets against the $2,000 long-term gain to a net capital loss of $7,000; an individual may deduct only $3,000 of net capital loss against ordinary income this year, so $3,000 is deducted and the remaining $4,000 is carried forward indefinitely, retaining its short-term character (the $3,000 limit is fixed, with no carryback).",
        markingGuide: [
          "1 mark: deductible medical of $3,000 after the $9,000 (7.5% of AGI) floor.",
          "1 mark: charitable deduction of $36,000 at FMV under the 30%-of-AGI ceiling for LTCG property.",
          "1 mark: the $14,000 charitable carryforward (5 years).",
          "1 mark: net capital loss of $7,000, $3,000 deducted against ordinary income, and a $4,000 carryforward keeping short-term character.",
        ],
      },
    ],
  }),
};
