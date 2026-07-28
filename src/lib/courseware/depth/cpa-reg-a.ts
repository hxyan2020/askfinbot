import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA REG (Taxation & Regulation, Core) exam-calibrated depth content for the
 * first four modules, keyed by moduleId to merge onto CPA_COURSEWARE:
 *   - cpa-reg-m1  Ethics, tax procedures & taxpayer penalties  (FEDERAL TAX)
 *   - cpa-reg-m2  Business law — contracts, agency & debtor-creditor (BUSINESS LAW)
 *   - cpa-reg-m3  Business structure — partnerships, corporations & LLCs (BUSINESS LAW)
 *   - cpa-reg-m4  Federal taxation of property transactions  (FEDERAL TAX)
 *
 * Calibration notes used throughout:
 *  - REG mixes two distinct bodies of authority. Modules m1 and m4 test FEDERAL
 *    TAX (Internal Revenue Code, Treasury regulations, Circular 230, AICPA SSTS).
 *    Modules m2 and m3 test BUSINESS LAW (common-law contracts, UCC Articles 2/9,
 *    agency, the federal Bankruptcy Code, and state entity statutes such as RUPA
 *    and the MBCA). These depth notes repeatedly flag which authority set governs,
 *    because the single most common REG error is answering a legal-form question
 *    with a tax rule (or vice versa).
 *  - Dollar figures that Congress or the IRS index for inflation each year
 *    (§6695 preparer-penalty amounts, the 0/15/20% capital-gains rate breakpoints,
 *    and similar) are flagged as "confirm the current-year amount for your testing
 *    window" rather than hard-coded, because a stale threshold both loses marks and
 *    teaches the wrong number. Figures that are FIXED by statute (e.g., the $3,000
 *    net capital-loss offset, the §121 $250k/$500k exclusion, the 20%/75% penalty
 *    rates) are labelled as fixed so candidates do not needlessly second-guess them.
 *  - REG is tested at Application/Analysis via MCQ testlets and task-based
 *    simulations (TBSs); some TBSs include an authoritative-literature research tab.
 */
export const CPA_REG_A_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // cpa-reg-m1 — Ethics, tax procedures & taxpayer penalties (FEDERAL TAX)
  // ===================================================================
  "cpa-reg-m1": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Circular 230 practice standards and sanctions",
        priority: "critical",
        examinerFocus:
          "Whether you can apply Treasury Circular 230 to a described practitioner act—diligence as to accuracy, standards for return positions and written advice, conflicts of interest, prompt disposition, fee rules—and identify the correct sanction (censure, suspension, disbarment, or monetary penalty) imposed by the Office of Professional Responsibility. The examiner tests the practitioner-conduct rule, not the taxpayer's tax result.",
        typicalQuestionForms: [
          "MCQ: is a described act (charging a contingent fee for original return preparation, negotiating a client's refund check, failing to advise a client of an error) permitted under Circular 230?",
          "MCQ: which sanction can OPR impose, and who administers Circular 230?",
          "TBS research tab: locate the Circular 230 section governing written tax advice or conflicts of interest.",
        ],
        mustKnow: [
          "Circular 230 governs practice before the IRS by attorneys, CPAs, enrolled agents and enrolled actuaries; it is administered by the Office of Professional Responsibility (OPR), not the AICPA.",
          "Contingent fees are generally prohibited for preparing an original return; they are allowed in narrow situations (e.g., an IRS examination of, or claim for refund on, an already-filed return, or judicial proceedings).",
          "A practitioner who knows a client has not complied or has made an error/omission must promptly advise the client of it and of the consequences—but is not required to correct it without the client's consent.",
          "Sanctions OPR may impose: censure (public reprimand), suspension, disbarment, and monetary penalties (which may also reach the practitioner's firm).",
        ],
        scoringActions: [
          "Separate the practitioner-conduct question (Circular 230) from the taxpayer's or preparer's Code penalty—these are different authority sets.",
          "Check the fee arrangement against the contingent-fee prohibition before concluding it is permissible.",
          "When the client has an uncorrected error, choose 'advise the client' rather than 'correct it' or 'resign' unless the facts require withdrawal.",
        ],
      },
      {
        id: "tp2",
        title: "AICPA Statements on Standards for Tax Services (SSTS)",
        priority: "high",
        examinerFocus:
          "Applying the AICPA SSTS to advice, return positions, questions on returns, use of estimates, and knowledge of errors. The examiner tests the CPA's professional standard (an ethics standard enforceable through the AICPA), distinct from the IRC preparer-penalty standard and from Circular 230.",
        typicalQuestionForms: [
          "MCQ: may a member recommend a return position, and must it be disclosed given a stated confidence level?",
          "MCQ: what must a member do on learning of an error in a prior return or in an administrative proceeding?",
        ],
        mustKnow: [
          "Under the SSTS a member should not recommend a position unless it meets the applicable reporting standard—generally 'substantial authority' for an undisclosed position or a 'reasonable basis' with adequate disclosure (a member may use the standard the taxing authority applies).",
          "A member may in good faith rely on client-provided information without verification but must make reasonable inquiries if information appears incorrect, incomplete or inconsistent, and must consider answers to all questions on a return.",
          "On learning of an error, the member must advise the client of the error and recommend corrective action but must not, without the client's permission, disclose it to the taxing authority.",
        ],
        scoringActions: [
          "Match the recommended position to the correct SSTS reporting standard (disclosed vs undisclosed) before concluding it is proper.",
          "For a prior-year error, choose 'advise the client'—not unilateral disclosure to the IRS.",
        ],
      },
      {
        id: "tp3",
        title: "Preparer responsibilities and paid-preparer due diligence",
        priority: "high",
        examinerFocus:
          "Who is a tax return preparer (signing vs nonsigning), the mechanical §6695 duties (sign, furnish a copy, retain records, PTIN, no negotiating refund checks) and the §6695(g) knowledge-and-documentation due diligence for the EITC, CTC/ACTC, AODC/AOTC and head-of-household status (Form 8867). The examiner tests the compliance duty and its per-return penalty—several dollar amounts here are inflation-indexed.",
        typicalQuestionForms: [
          "MCQ: which §6695 duty was violated and what triggers the penalty (failure to sign, to furnish a copy, to retain a list/copies, to file correct information returns, negotiating a refund check).",
          "MCQ: what must a preparer do to meet EITC/CTC/AOTC/HOH due diligence.",
        ],
        mustKnow: [
          "A signing preparer has primary responsibility for the substantive accuracy of the return; a nonsigning preparer provides advice on a position that is a substantial portion of the return. Both must hold a PTIN.",
          "§6695 imposes separate per-return/per-failure penalties for failure to furnish a copy to the taxpayer, to sign, to furnish an identifying number, to retain copies or a client list, to file correct information returns, and for negotiating a client's refund check. These dollar amounts are indexed annually—confirm the current-year amount for your testing window rather than relying on a memorized figure.",
          "§6695(g) due diligence for the EITC, child tax credit/additional CTC/credit for other dependents, American Opportunity credit and head-of-household filing status requires completing and submitting Form 8867, computing the credit on the worksheet, meeting the knowledge requirement (no reason to know information is incorrect), and retaining the records; the penalty applies per credit/status per return and is inflation-indexed.",
        ],
        scoringActions: [
          "Identify whether the person is a signing or nonsigning preparer before assigning responsibility.",
          "For a due-diligence question, confirm Form 8867 completion, computation, the knowledge requirement and record retention—all four elements.",
          "Flag indexed §6695 dollar amounts as 'confirm current-year figure' rather than quoting a stale number.",
        ],
      },
      {
        id: "tp4",
        title: "Preparer penalties: unreasonable positions vs willful/reckless conduct",
        priority: "critical",
        examinerFocus:
          "Distinguishing the §6694(a) penalty for an understatement due to an unreasonable position from the larger §6694(b) penalty for willful or reckless conduct, and mapping each to its confidence standard (reasonable basis + disclosure, substantial authority, or more-likely-than-not for tax shelters/reportable transactions).",
        typicalQuestionForms: [
          "MCQ: given a stated position and disclosure status, is the preparer subject to a §6694 penalty, and which subsection?",
          "TBS: classify several positions by the standard they meet and conclude on penalty exposure.",
        ],
        mustKnow: [
          "§6694(a) (unreasonable position) applies when the understatement is due to a position without substantial authority (undisclosed), or without a reasonable basis even if disclosed; the penalty is the greater of $1,000 or 50% of the income the preparer derived from the return (these §6694 dollar amounts are fixed by statute, not inflation-indexed).",
          "§6694(b) applies to a willful attempt to understate liability or a reckless/intentional disregard of rules; the penalty is the greater of $5,000 or 75% of the income derived, and it reduces (is offset by) any §6694(a) penalty on the same return.",
          "Standards ladder: reasonable basis (roughly a 20% chance, sufficient only with adequate disclosure) < substantial authority (roughly 40%, sufficient without disclosure) < more likely than not (>50%, required for tax-shelter and reportable-transaction positions).",
        ],
        scoringActions: [
          "Ask 'was the position disclosed?'—disclosure lowers the required standard from substantial authority to reasonable basis.",
          "Escalate to the more-likely-than-not standard whenever the facts mention a tax shelter or reportable transaction.",
          "Distinguish willful/reckless (§6694(b)) from a merely unreasonable position (§6694(a)) based on the described intent.",
        ],
      },
      {
        id: "tp5",
        title: "Taxpayer penalties and reasonable-cause defenses",
        priority: "critical",
        examinerFocus:
          "Computing and distinguishing the failure-to-file and failure-to-pay penalties (§6651), the 20% accuracy-related penalty (§6662, covering negligence, substantial understatement, and substantial valuation misstatement), and the 75% civil fraud penalty (§6663), plus the §6664 reasonable-cause/good-faith defense.",
        typicalQuestionForms: [
          "MCQ/TBS: compute the combined failure-to-file and failure-to-pay penalty for a stated period.",
          "MCQ: which accuracy-related penalty component applies and can reasonable cause abate it?",
        ],
        mustKnow: [
          "Failure to file: 5% of net tax due per month (or part), max 25%; failure to pay: 0.5% per month, max 25%. When both apply in the same month the FTF penalty is reduced by the FTP penalty for that month. These percentage rates are fixed by statute.",
          "§6662 accuracy-related penalty is 20% of the underpayment for negligence/disregard of rules, a substantial understatement (individuals: understatement exceeding the greater of 10% of the tax required or $5,000), or a substantial valuation misstatement; the rate rises to 40% for gross valuation misstatements and certain undisclosed transactions.",
          "§6663 civil fraud penalty is 75% of the underpayment attributable to fraud; the burden of proving fraud is on the IRS by clear and convincing evidence. §6664 provides a reasonable-cause and good-faith exception for accuracy-related (but not fraud) penalties.",
        ],
        scoringActions: [
          "Compute failure-to-file and failure-to-pay separately, then apply the same-month offset.",
          "Test the §6662 substantial-understatement trigger with the greater-of formula before applying the 20% rate.",
          "Offer the §6664 reasonable-cause defense for accuracy penalties but not for the §6663 fraud penalty.",
        ],
      },
      {
        id: "tp6",
        title: "IRS examination, appeals and choice of litigation forum",
        priority: "medium",
        examinerFocus:
          "The exam-audit-appeals sequence (30-day letter to Appeals, statutory notice of deficiency/90-day letter) and the taxpayer's choice among the U.S. Tax Court (no prepayment required), the U.S. District Court and the U.S. Court of Federal Claims (both require paying the tax and suing for refund).",
        typicalQuestionForms: [
          "MCQ: what document is the '90-day letter' and what does it permit the taxpayer to do?",
          "MCQ: in which court can a taxpayer litigate without first paying the disputed tax?",
        ],
        mustKnow: [
          "A 30-day letter proposes adjustments and offers an Appeals conference; a statutory notice of deficiency (90-day letter) is required before assessment and gives the taxpayer 90 days to petition the Tax Court.",
          "Only the U.S. Tax Court hears a deficiency without prepayment; District Court and the Court of Federal Claims require the taxpayer to pay the tax, file a refund claim, and sue for refund. A jury is available only in District Court.",
          "The burden of proof is generally on the taxpayer, but may shift to the IRS if the taxpayer introduces credible evidence and has met substantiation and cooperation requirements.",
        ],
        scoringActions: [
          "Identify the letter (30-day vs 90-day) to determine the taxpayer's next procedural step.",
          "Match the desired remedy (no prepayment vs jury trial) to the correct court.",
        ],
      },
      {
        id: "tp7",
        title: "Statutes of limitation: assessment, refund and collection",
        priority: "high",
        examinerFocus:
          "Applying §6501 (assessment), §6511 (refund claims) and §6502 (collection). The examiner tests the correct period given omitted income, fraud, non-filing, or a refund-claim timing question—these periods are fixed by statute, so precise recall wins marks.",
        typicalQuestionForms: [
          "MCQ: given a described omission or fraud, how long does the IRS have to assess?",
          "MCQ: is a refund claim timely given the filing and payment dates?",
        ],
        mustKnow: [
          "§6501 assessment: generally 3 years from the later of the due date or filing date; 6 years if gross income omitted exceeds 25% of gross income reported; unlimited for a false/fraudulent return or a failure to file.",
          "§6511 refund claim: must be filed within the later of 3 years from filing the return or 2 years from paying the tax; the recoverable amount is capped by a corresponding look-back period.",
          "§6502 collection: the IRS generally has 10 years from assessment to collect; the period can be suspended or extended (e.g., by an installment agreement, offer in compromise, or bankruptcy stay).",
        ],
        scoringActions: [
          "Trigger the 6-year period only on a >25% gross-income omission; use unlimited only for fraud or non-filing.",
          "Apply the later-of test for refund claims (3 years from filing vs 2 years from payment).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Ethics/procedure/penalty items are rule-driven and high-yield across REG—bank the statute-of-limitations and penalty-mechanics MCQs as near-automatic points and use the research tab efficiently for Circular 230/SSTS lookups.",
      timeBudget:
        "~1.25 min per MCQ; on a penalty-computation TBS spend the first 2–3 minutes identifying which penalties apply before computing, and reserve time to confirm any indexed §6695 amounts against the exam's provided authorities.",
      answerSequence: [
        "Identify the authority in play: Circular 230 (practice conduct) vs SSTS (AICPA standard) vs IRC penalty (taxpayer or preparer).",
        "For a position question, fix the required confidence standard and check disclosure.",
        "For a penalty, compute each component separately, then apply offsets (FTF vs FTP; §6694(b) offsets §6694(a)).",
        "For procedure/limitations, name the document or period and the resulting deadline.",
      ],
      qualityChecks: [
        "Did I keep practitioner conduct (Circular 230/SSTS) separate from Code penalties?",
        "Did I flag inflation-indexed §6695 amounts as 'confirm current-year' rather than quoting a stale figure?",
        "Did I apply the same-month FTF/FTP offset and the correct substantial-understatement trigger?",
        "Did I reserve the unlimited assessment period for fraud/non-filing only?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Three overlapping rule sets: Circular 230, SSTS and the IRC penalties",
        testPointIds: ["tp1", "tp2", "tp4"],
        explanation: [
          "REG's ethics material layers three separate authorities that candidates routinely conflate. Circular 230 is a Treasury regulation that governs the privilege of practicing before the IRS; it is enforced by the Office of Professional Responsibility, and its sanctions (censure, suspension, disbarment, monetary penalty) affect the practitioner's ability to practice—not the client's tax. The AICPA Statements on Standards for Tax Services are professional standards binding on AICPA members and enforceable through the Institute's disciplinary process. The Internal Revenue Code preparer penalties (§§6694–6695) are monetary penalties the IRS assesses against a preparer for specific failures. A single fact pattern can implicate all three, and the examiner writes distractors that borrow language from the wrong set.",
          "The through-line is the confidence-standard ladder that both the SSTS and §6694 use to judge a return position. A 'reasonable basis' (roughly a one-in-five chance of success) is sufficient only if the position is adequately disclosed on the return. 'Substantial authority' (a higher, roughly two-in-five, objective standard measured by the weight of authorities) supports an undisclosed position. 'More likely than not' (greater than 50%) is required for positions involving tax shelters or reportable transactions. When a question states both a confidence level and whether disclosure was made, work the ladder: disclosure lowers the bar from substantial authority to reasonable basis.",
          "Finally, distinguish intent. §6694(a) targets an understatement from an unreasonable position and carries the greater of $1,000 or 50% of the preparer's income from the return; §6694(b) targets willful or reckless conduct and carries the greater of $5,000 or 75% of that income, offset by any §6694(a) amount. Those §6694 dollar figures are fixed by statute. By contrast, the §6695 compliance-penalty amounts (failure to sign, furnish a copy, due-diligence failures, etc.) are indexed for inflation each year, so treat any specific dollar figure as 'confirm the current-year amount' rather than a memorized constant.",
        ],
        keyRules: [
          "Circular 230 = practice conduct (OPR-enforced); SSTS = AICPA professional standard; §§6694–6695 = IRC preparer penalties.",
          "Disclosure lowers the required standard from substantial authority to reasonable basis; tax shelters require more-likely-than-not.",
          "§6694 dollar amounts are fixed; §6695 amounts are inflation-indexed—confirm the current-year figure.",
        ],
      },
      {
        id: "sn2",
        title: "Paid-preparer due diligence and the §6695 mechanics",
        testPointIds: ["tp3"],
        explanation: [
          "Section 6695 collects the 'housekeeping' duties of a paid preparer, each with its own per-return or per-failure penalty: furnish a completed copy to the taxpayer, sign the return, include a preparer identifying number (PTIN), retain copies or a client list, file correct information returns, and—critically—never endorse or otherwise negotiate a client's refund check. These duties are mechanical and are tested as clean MCQ points, but because the dollar amounts are indexed annually, the exam expects you to recognize the violated duty rather than recite a specific fine; treat any figure as 'confirm current-year'.",
          "Section 6695(g) is the heavier due-diligence rule and the one most often simulated. For each of the earned income credit, the child tax credit/additional child tax credit/credit for other dependents, the American Opportunity credit, and head-of-household filing status claimed on a return, the preparer must satisfy four elements: complete and submit Form 8867 (the paid-preparer's due-diligence checklist), complete the applicable computation worksheet, meet the knowledge requirement (make reasonable inquiries when information appears incorrect, inconsistent or incomplete, and document those inquiries and the client's responses), and retain the records for the required period. The penalty applies separately to each credit or status, so a single return claiming the EITC and CTC and HOH status can generate three separate penalties—again at an inflation-indexed amount.",
        ],
        keyRules: [
          "§6695 duties: copy to taxpayer, signature, PTIN, record retention, correct information returns, no negotiating refund checks.",
          "§6695(g) four elements: Form 8867 + computation + knowledge requirement + record retention.",
          "The due-diligence penalty applies per credit/status per return; amounts are inflation-indexed—confirm current-year.",
        ],
      },
      {
        id: "sn3",
        title: "Taxpayer penalty computation and the reasonable-cause defense",
        testPointIds: ["tp5"],
        explanation: [
          "The failure-to-file and failure-to-pay penalties are the most computational item in this module. Failure to file runs at 5% of the net tax due per month or part of a month, capped at 25%; failure to pay runs at 0.5% per month, also capped at 25%. When both apply in the same month, the failure-to-file penalty is reduced by the failure-to-pay penalty for that month, so the combined rate for overlapping months is 5% (4.5% FTF + 0.5% FTP), not 5.5%. These percentage rates are fixed by statute and are safe to memorize, unlike indexed dollar thresholds.",
          "The accuracy-related penalty under §6662 is a flat 20% of the underpayment attributable to negligence or disregard of rules, a substantial understatement, or a substantial valuation misstatement. For individuals the 'substantial understatement' trigger is an understatement exceeding the greater of 10% of the tax required to be shown or $5,000. The rate doubles to 40% for gross valuation misstatements and certain nondisclosed transactions. The §6663 civil fraud penalty is 75% of the underpayment attributable to fraud, and here the IRS bears the burden of proving fraud by clear and convincing evidence—a deliberate contrast with the taxpayer's usual burden.",
          "Section 6664 supplies the escape valve: the accuracy-related and substantial-understatement penalties do not apply to any portion of an underpayment for which the taxpayer had reasonable cause and acted in good faith (for example, good-faith reliance on a competent professional given complete information). Reasonable cause is not a defense to the §6663 fraud penalty. Candidates should reflexively pair 'accuracy-related penalty' with 'is there reasonable cause?' and refuse to extend that defense to fraud.",
        ],
        keyRules: [
          "FTF 5%/month (max 25%); FTP 0.5%/month (max 25%); FTF reduced by FTP in overlapping months.",
          "§6662 = 20% (40% for gross valuation misstatement); substantial understatement trigger = greater of 10% of tax or $5,000.",
          "§6663 fraud = 75%, IRS burden by clear and convincing evidence; §6664 reasonable cause defends accuracy penalties but not fraud.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. An individual's return was due April 15 and the balance of tax owed was $20,000. The taxpayer filed the return and paid the full balance on July 20 of the same year, with no extension. There was no fraud. Compute the failure-to-file and failure-to-pay penalties and the total, and identify any defense.",
          steps: [
            "Count the months late. From April 16 to July 20 spans parts of four months (mid-April to mid-May, to mid-June, to mid-July, plus the partial month to July 20). A 'part of a month' counts as a full month, so use 4 months for both penalties.",
            "Failure to pay: 0.5% × $20,000 × 4 months = $400. This stays well under the 25% cap.",
            "Failure to file: 5% × $20,000 × 4 months = $4,000 gross, but each overlapping month is reduced by that month's FTP. Reduction = 0.5% × $20,000 × 4 = $400, so net FTF = $4,000 − $400 = $3,600.",
            "Total penalty = $3,600 (FTF, net of offset) + $400 (FTP) = $4,000. Confirm neither penalty exceeds its 25% cap ($5,000 here): both are below the cap.",
            "Defense: §6664 reasonable cause and good faith can abate these penalties if the taxpayer shows, for example, that the delay resulted from circumstances beyond their control; ordinary forgetfulness or lack of funds generally is not reasonable cause.",
          ],
          conclusion:
            "The taxpayer owes $3,600 failure-to-file plus $400 failure-to-pay for a total of $4,000, subject to abatement only on a showing of reasonable cause under §6664.",
          markingNotes: [
            "Award marks for counting a partial month as a full month (4 months).",
            "Award marks for computing FTP ($400) and gross FTF ($4,000) separately.",
            "Full marks require applying the same-month offset to reach net FTF of $3,600 and the $4,000 total.",
            "Award a mark for correctly citing §6664 reasonable cause and noting lack of funds is generally insufficient.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Procedure and the three statutes of limitation",
        testPointIds: ["tp6", "tp7"],
        explanation: [
          "The examination workflow is procedural and heavily tested. After an audit the IRS issues a 30-day letter proposing adjustments and offering an Appeals conference; if unresolved, it issues a statutory notice of deficiency—the 90-day letter—which the taxpayer must receive before the tax can be assessed. Within 90 days the taxpayer may petition the U.S. Tax Court without paying the disputed tax. Alternatively, the taxpayer may pay the tax, file a refund claim, and, if denied, sue for refund in a U.S. District Court (the only forum offering a jury) or the U.S. Court of Federal Claims. Knowing which forum requires prepayment and which offers a jury answers most litigation-choice MCQs.",
          "Three limitation periods recur. Under §6501 the IRS generally has three years from the later of the due date or filing date to assess; the period extends to six years if gross income omitted exceeds 25% of the gross income reported, and there is no limit for a fraudulent return or a return never filed. Under §6511 a refund claim must be filed within the later of three years from filing the return or two years from paying the tax, with a corresponding look-back cap on the amount recoverable. Under §6502 the IRS generally has ten years from assessment to collect, a period that can be suspended by events such as an installment agreement, an offer in compromise, or a bankruptcy automatic stay. Because these periods are fixed by statute, precise recall—rather than judgment—earns the marks.",
        ],
        keyRules: [
          "30-day letter → Appeals; 90-day letter (notice of deficiency) → 90 days to petition Tax Court without prepayment.",
          "District Court and Court of Federal Claims require paying tax and suing for refund; only District Court offers a jury.",
          "§6501: 3 years / 6 years (>25% omission) / unlimited (fraud or no return); §6511 refund: later of 3 years from filing or 2 years from payment; §6502 collection: 10 years.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp3", "tp4"],
        style: "Task-based simulation (preparer standards)",
        question:
          "A CPA prepared a client's return taking a position that had a reasonable basis but was not disclosed and lacked substantial authority; the position produced an understatement, and the CPA earned $2,000 preparing the return. On a separate client's return the CPA claimed the earned income credit but never completed Form 8867. For each situation, state the preparer's exposure and what would have avoided it.",
        answerPlan: [
          "Situation 1: undisclosed position needs substantial authority; reasonable basis alone is insufficient → §6694(a).",
          "Compute §6694(a): greater of $1,000 or 50% of $2,000 income.",
          "Situation 2: §6695(g) EITC due diligence requires Form 8867 → per-credit penalty (indexed).",
          "State the cure for each: disclosure/higher authority; complete the four due-diligence elements.",
        ],
        modelAnswer:
          "Situation 1: Because the position was not disclosed, it needed substantial authority to be safe; a reasonable basis suffices only with adequate disclosure. The resulting understatement therefore exposes the CPA to the §6694(a) unreasonable-position penalty, computed as the greater of $1,000 or 50% of the $2,000 income derived, i.e., the greater of $1,000 or $1,000 = $1,000 (these §6694 amounts are fixed by statute, not indexed). Disclosing the position on the return (dropping the required standard to reasonable basis) or obtaining substantial authority would have avoided it. Situation 2: Claiming the earned income credit without completing and submitting Form 8867 breaches the §6695(g) due-diligence rules; the penalty applies per credit and its dollar amount is indexed annually—confirm the current-year figure. To comply, the CPA must complete Form 8867, complete the computation worksheet, satisfy the knowledge requirement by making and documenting reasonable inquiries, and retain the records.",
        markingGuide: [
          "1 mark: recognizing an undisclosed position needs substantial authority, not merely reasonable basis.",
          "1 mark: computing the §6694(a) penalty as the greater of $1,000 or 50% of income and noting it is fixed, not indexed.",
          "1 mark: identifying the §6695(g) due-diligence failure and that the amount is inflation-indexed.",
          "1 mark: stating the cure for each (disclosure/substantial authority; the four due-diligence elements).",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp5"],
        style: "MCQ set rationale (penalty computation)",
        question:
          "An individual owed $10,000 with the return, filed and paid it three and a half months late with no extension and no fraud. Compute the failure-to-file and failure-to-pay penalties and the total, and note any available defense.",
        answerPlan: [
          "Count 4 months (partial month counts as full).",
          "FTP = 0.5% × $10,000 × 4.",
          "Gross FTF = 5% × $10,000 × 4; reduce by the FTP for overlapping months.",
          "Sum and identify §6664 reasonable cause.",
        ],
        modelAnswer:
          "A part of a month counts as a full month, so the delay is four months. Failure to pay = 0.5% × $10,000 × 4 = $200. Gross failure to file = 5% × $10,000 × 4 = $2,000, but the failure-to-file penalty is reduced by the same-month failure-to-pay penalty ($200), giving a net failure-to-file penalty of $1,800. The total is $1,800 + $200 = $2,000, and both amounts are within their 25% caps ($2,500). These percentage rates are fixed by statute. The §6664 reasonable-cause and good-faith exception can abate the penalties if the taxpayer shows the failure resulted from circumstances beyond their control; a mere shortage of funds is generally not reasonable cause.",
        markingGuide: [
          "1 mark: treating the partial month as a full month (4 months).",
          "1 mark: computing FTP ($200) and gross FTF ($2,000).",
          "1 mark: applying the offset to reach net FTF $1,800 and total $2,000.",
          "1 mark: citing §6664 reasonable cause and noting lack of funds is generally insufficient.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp1", "tp7"],
        style: "Short constructed response (procedure & conduct)",
        question:
          "A CPA discovers that a client's already-filed prior-year return omitted income; the client refuses to amend. Separately, the client received a statutory notice of deficiency 80 days ago and wants to litigate without paying first. Explain the CPA's Circular 230/SSTS obligation and the litigation route, including the relevant deadline.",
        answerPlan: [
          "Circular 230/SSTS: advise the client of the error and consequences; do not disclose without consent.",
          "May the CPA continue? Consider withdrawal only if required.",
          "90-day letter → 90 days to petition Tax Court without prepayment; 80 days used, 10 days remain.",
        ],
        modelAnswer:
          "Under Circular 230 and the SSTS, the CPA must promptly advise the client of the omission and of the potential consequences (additional tax, interest and penalties), but must not disclose the error to the IRS without the client's permission; the CPA is not required to force an amendment. If continued representation would require the CPA to violate the standards, withdrawal may become necessary, but merely preparing future returns is generally permissible so long as they are correct. On the procedural question, the statutory notice of deficiency is the '90-day letter'; the client has 90 days from its date to petition the U.S. Tax Court, which is the only forum that allows litigation of the deficiency without first paying the tax. Because 80 days have elapsed, only about 10 days remain to file the Tax Court petition—if that window closes, the client would have to pay the tax and pursue a refund suit in District Court or the Court of Federal Claims.",
        markingGuide: [
          "1 mark: advise the client but do not disclose to the IRS without consent.",
          "1 mark: not required to amend; withdrawal only if standards would be violated.",
          "1 mark: identifying the notice as the 90-day letter and the Tax Court as the no-prepayment forum.",
          "1 mark: computing the remaining ~10 days and the pay-then-refund alternative if missed.",
        ],
      },
    ],
  }),

  // ===================================================================
  // cpa-reg-m2 — Business law: contracts, agency & debtor-creditor (BUSINESS LAW)
  // ===================================================================
  "cpa-reg-m2": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Contract formation: common law vs UCC Article 2",
        priority: "critical",
        examinerFocus:
          "Whether you first classify the contract as goods (UCC Article 2) or services/real estate (common law), then apply the correct formation rules: offer, acceptance, consideration, the mailbox rule, the UCC merchant firm offer, and the mirror-image rule versus UCC §2-207 battle-of-the-forms. This is business law, not tax—no IRC concept applies.",
        typicalQuestionForms: [
          "MCQ: is a contract formed given an offer, a delayed or varying acceptance, and the goods/services classification?",
          "MCQ: does a merchant's signed promise to hold an offer open bind without consideration?",
        ],
        mustKnow: [
          "Classify first: UCC Article 2 governs the sale of goods (movable tangible property); common law governs services and real estate. Predominant-purpose test resolves mixed contracts.",
          "A valid contract needs offer, acceptance and consideration (plus capacity and legality). Consideration is a bargained-for exchange; past consideration and pre-existing duty are not consideration.",
          "Mailbox rule: acceptance is effective when dispatched (not so for options). UCC merchant firm offer: a merchant's signed written promise to hold an offer open is irrevocable without consideration for the stated time, up to 3 months. Common law mirror-image rule requires acceptance to match; UCC §2-207 can form a contract despite additional/different terms.",
        ],
        scoringActions: [
          "State whether the contract is goods (UCC) or services/realty (common law) before applying any rule.",
          "Test each element—offer, acceptance, consideration—and reject pre-existing duty or past consideration.",
        ],
      },
      {
        id: "tp2",
        title: "Defenses to formation and the statute of frauds",
        priority: "high",
        examinerFocus:
          "Identifying which contracts must be evidenced by a writing (the MYLEGS categories), and the defenses that void or make a contract voidable—lack of capacity, fraud, duress, undue influence, mutual mistake—plus the parol evidence rule's effect on prior/contemporaneous terms.",
        typicalQuestionForms: [
          "MCQ: must this contract be in writing to be enforceable, and what satisfies the writing?",
          "MCQ: does a described misrepresentation make the contract void or merely voidable?",
        ],
        mustKnow: [
          "Statute of frauds (MYLEGS): contracts in consideration of Marriage, that cannot be performed within one Year, for an interest in Land, by an Executor to pay estate debts personally, for the sale of Goods of $500 or more, and Suretyship (promise to answer for another's debt) must be evidenced by a signed writing.",
          "Voidable vs void: fraud, duress, undue influence, and lack of capacity (minors, intoxication) generally make a contract voidable by the protected party; illegality makes it void.",
          "The parol evidence rule bars prior or contemporaneous evidence that contradicts a fully integrated written contract, but allows evidence of fraud, ambiguity, condition precedent, or subsequent modification.",
        ],
        scoringActions: [
          "Run the MYLEGS checklist to decide whether a writing is required.",
          "Distinguish void (illegality) from voidable (fraud/duress/capacity) outcomes.",
        ],
      },
      {
        id: "tp3",
        title: "Performance, breach and remedies",
        priority: "high",
        examinerFocus:
          "Distinguishing material from minor breach, the UCC perfect-tender rule for goods, anticipatory repudiation, and the available remedies—compensatory/consequential damages, specific performance (for unique goods/land), rescission, and the duty to mitigate.",
        typicalQuestionForms: [
          "MCQ: given a described failure, is the non-breaching party excused, and what remedy applies?",
          "MCQ: is specific performance available for the subject matter described?",
        ],
        mustKnow: [
          "A material breach excuses the non-breaching party's performance and permits damages; a minor breach permits damages only, with performance still due. The UCC perfect-tender rule lets a buyer reject goods that fail in any respect, subject to the seller's right to cure.",
          "Compensatory damages put the injured party where performance would have; consequential damages require foreseeability; the injured party must mitigate. Liquidated-damages clauses are enforceable only if a reasonable estimate, not a penalty.",
          "Specific performance is available for unique goods or land because money damages are inadequate; it is not ordered for personal-service contracts. Anticipatory repudiation lets the other party sue immediately or await performance.",
        ],
        scoringActions: [
          "Label the breach material or minor before deciding whether performance is excused.",
          "Reserve specific performance for unique goods/land, never for personal services, and check the mitigation duty.",
        ],
      },
      {
        id: "tp4",
        title: "Agency: authority and liability to third parties",
        priority: "medium",
        examinerFocus:
          "Classifying an agent's authority as actual (express or implied), apparent, or by ratification, and determining when the principal and agent are each bound to and liable to third parties, including disclosed, partially disclosed, and undisclosed principals and tort liability under respondeat superior.",
        typicalQuestionForms: [
          "MCQ: is the principal bound where the agent lacked actual but had apparent authority?",
          "MCQ: who is liable to a third party when the principal is undisclosed?",
        ],
        mustKnow: [
          "Actual authority arises from the principal's manifestations to the agent (express or implied); apparent authority arises from the principal's manifestations to the third party. Ratification adopts an unauthorized act done on the principal's behalf.",
          "A disclosed principal is liable on authorized contracts and the agent is not; with a partially disclosed or undisclosed principal, both the agent and the principal can be liable to the third party.",
          "Under respondeat superior a principal is liable for an employee-agent's torts within the scope of employment; independent-contractor torts generally are not attributed to the principal absent nondelegable or inherently dangerous duties.",
        ],
        scoringActions: [
          "Trace the source of authority (to the agent vs to the third party) before deciding if the principal is bound.",
          "For liability, first classify the principal as disclosed, partially disclosed, or undisclosed.",
        ],
      },
      {
        id: "tp5",
        title: "Suretyship and creditor rights",
        priority: "medium",
        examinerFocus:
          "The surety relationship—when a surety is primarily vs secondarily liable—and the surety's rights (exoneration, reimbursement/indemnity, subrogation, contribution among co-sureties) and defenses (including release of the principal or impairment of collateral).",
        typicalQuestionForms: [
          "MCQ: on the debtor's default, what may the creditor do and what are the surety's rights?",
          "MCQ: how does a material modification or release of collateral affect the surety?",
        ],
        mustKnow: [
          "A surety promises to answer for another's debt; a strict guaranty is secondary (creditor must first pursue the debtor), while a surety/absolute guarantor can be pursued immediately on default. A suretyship promise generally must be in writing (statute of frauds).",
          "Surety rights: exoneration (compel the debtor to pay before the surety does), reimbursement/indemnity (recover from the debtor after paying), subrogation (step into the creditor's rights and collateral), and contribution (recover a pro-rata share from co-sureties).",
          "Surety defenses: the creditor's release of the principal or unjustified impairment/release of collateral discharges the surety to the extent of the loss; a material modification without consent may discharge a gratuitous surety.",
        ],
        scoringActions: [
          "Decide whether the guaranty is absolute (pursue surety immediately) or conditional (debtor first).",
          "Match the surety's post-payment recovery to the correct right (reimbursement vs subrogation vs contribution).",
        ],
      },
      {
        id: "tp6",
        title: "Secured transactions (UCC Article 9): attachment, perfection & priority",
        priority: "critical",
        examinerFocus:
          "The three-step Article 9 analysis—attachment (enforceability against the debtor), perfection (effectiveness against third parties), and priority among competing claimants—including the automatic perfection and superpriority of a purchase-money security interest (PMSI).",
        typicalQuestionForms: [
          "TBS: order competing creditors by priority given filing dates, PMSI status and buyer-in-ordinary-course facts.",
          "MCQ: is a security interest perfected, and who has priority?",
        ],
        mustKnow: [
          "Attachment requires value given, the debtor's rights in the collateral, and either a signed/authenticated security agreement describing the collateral or the secured party's possession/control. Perfection is usually by filing a financing statement, but also by possession, control (deposit accounts, investment property), or automatically for a PMSI in consumer goods.",
          "General priority: perfected beats unperfected; among perfected interests, first to file or perfect wins. A PMSI in goods (other than inventory) has superpriority if perfected within the statutory grace period after the debtor receives the collateral; a PMSI in inventory requires perfection plus notice to prior inventory financers before delivery.",
          "A buyer in the ordinary course of business takes free of a security interest created by the seller even if perfected and even if the buyer knows of it (but not that the sale violates the security agreement).",
        ],
        scoringActions: [
          "Work attachment → perfection → priority in order; do not jump to priority without confirming perfection.",
          "Flag any PMSI and apply the correct grace-period/notice rule for its superpriority.",
        ],
      },
      {
        id: "tp7",
        title: "Bankruptcy: chapters, the estate and claim priority",
        priority: "high",
        examinerFocus:
          "Comparing Chapters 7, 11 and 13, the effect of the automatic stay, voidable preferences and fraudulent transfers, the §507 priority ladder among unsecured claims, and which debts are nondischargeable. Bankruptcy is federal law—but it is not tax law.",
        typicalQuestionForms: [
          "TBS: distribute a liquidation estate across secured, priority-unsecured and general-unsecured claims.",
          "MCQ: is a described pre-petition payment a voidable preference; is a debt dischargeable?",
        ],
        mustKnow: [
          "Chapter 7 liquidates nonexempt assets; Chapter 11 reorganizes (typically businesses); Chapter 13 is an individual wage-earner repayment plan. Filing triggers an automatic stay halting most collection.",
          "The trustee may avoid a preference: a transfer to a creditor for an antecedent debt made while insolvent within 90 days before filing (one year for insiders) that lets the creditor receive more than in a Chapter 7. Fraudulent transfers (actual intent or for less than reasonably equivalent value while insolvent) are also avoidable.",
          "Distribution: secured claims are satisfied from their collateral first; then §507 priority unsecured claims (e.g., domestic support, administrative expenses, certain wages and taxes) in order; then general unsecured claims pro rata; equity last. Certain debts (most taxes, student loans absent hardship, alimony/child support, fraud debts) are nondischargeable.",
        ],
        scoringActions: [
          "Pay secured creditors from collateral first, then walk the §507 ladder before general unsecured claims.",
          "Test a pre-petition payment against the preference elements (antecedent debt, insolvency, 90-day/1-year window, greater recovery).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Business-law items reward disciplined issue-spotting; secured-transactions and bankruptcy TBSs are high-value—earn full marks by walking the structured ladders (attachment→perfection→priority; secured→§507→general).",
      timeBudget:
        "~1.25 min per MCQ; on an Article 9 or bankruptcy TBS, spend the first few minutes ordering the parties/claims on scratch paper before answering line items.",
      answerSequence: [
        "Classify the transaction: goods (UCC) vs services/realty (common law); secured vs unsecured; which law governs.",
        "For contracts, test formation, then defenses/statute of frauds, then breach and remedy.",
        "For secured transactions, work attachment → perfection → priority.",
        "For bankruptcy, apply the stay, test avoidance, then distribute by the priority ladder.",
      ],
      qualityChecks: [
        "Did I classify goods vs services before applying contract rules?",
        "Did I confirm perfection before deciding Article 9 priority, and flag any PMSI?",
        "Did I pay secured creditors from collateral before the §507 ladder?",
        "Did I keep this business-law analysis free of any tax concept?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Classify first: UCC Article 2 versus common law",
        testPointIds: ["tp1", "tp2", "tp3"],
        explanation: [
          "Almost every contracts question turns on a threshold classification the examiner hides in the facts: is the subject matter goods, or services/real estate? The UCC's Article 2 governs the sale of goods—movable, tangible personal property—while the common law governs contracts for services and for real property. For a mixed contract (goods plus services), the predominant-purpose test decides which body of law applies to the whole. Getting this wrong cascades into wrong rules on offer irrevocability, acceptance, and the effect of varying terms.",
          "The rules then diverge in predictable ways. Under the common law an acceptance must mirror the offer exactly (the mirror-image rule), and an added or changed term is a counteroffer that rejects the original. Under the UCC, §2-207 can form a contract even when the acceptance states additional terms, and between merchants those additional terms may become part of the contract unless they materially alter it, the offer limited acceptance, or the offeror objects. Irrevocability also differs: at common law an option requires consideration to be binding, whereas the UCC merchant firm-offer rule makes a merchant's signed written promise to hold an offer open binding without consideration for the stated period, capped at three months.",
          "Consideration and the statute of frauds round out formation. Consideration is a bargained-for exchange; a promise to do what one is already legally bound to do (pre-existing duty) or a reference to something already given (past consideration) is not consideration. The statute of frauds (MYLEGS) requires a signed writing for marriage-based promises, contracts not performable within one year, interests in land, an executor's personal promise to pay estate debts, sales of goods of $500 or more, and suretyship promises. The $500 goods threshold is a fixed UCC figure—this is business law, so no inflation indexing or tax rule applies.",
        ],
        keyRules: [
          "Predominant-purpose test classifies mixed goods/services contracts.",
          "Common law: mirror-image rule; UCC §2-207 can form a contract despite varying terms; firm offer binds a merchant without consideration up to 3 months.",
          "Consideration excludes pre-existing duty and past consideration; MYLEGS lists the statute-of-frauds categories (goods $500+ is a fixed figure).",
        ],
      },
      {
        id: "sn2",
        title: "Agency authority and third-party liability",
        testPointIds: ["tp4"],
        explanation: [
          "Agency questions are decided by the source of the authority, and the key move is to ask to whom the principal made a manifestation. Actual authority—express or implied—flows from what the principal communicated to the agent, including authority reasonably necessary to carry out the express task. Apparent authority flows from what the principal communicated (or allowed to appear) to the third party, so an agent can bind the principal even without actual authority if the principal's conduct led the third party reasonably to believe the agent was authorized. Ratification lets a principal adopt an unauthorized act done on their behalf, provided the principal has knowledge of the material facts and the third party has not withdrawn.",
          "Liability to third parties depends on how much the third party knew about the principal. With a disclosed principal (identity known), the principal is liable on authorized contracts and the agent generally is not a party. With a partially disclosed (existence but not identity known) or undisclosed principal, both the agent and the principal may be held liable, because the third party dealt in reliance on the agent. For torts, respondeat superior makes a principal liable for an employee-agent's torts committed within the scope of employment; the acts of an independent contractor generally are not attributed to the principal unless the duty is nondelegable or inherently dangerous. As with the rest of this module, these are common-law and Restatement rules—there is no tax overlay.",
        ],
        keyRules: [
          "Actual authority = manifestation to the agent; apparent authority = manifestation to the third party; ratification adopts an unauthorized act.",
          "Disclosed principal → principal liable, agent not; partially disclosed/undisclosed → both may be liable.",
          "Respondeat superior covers employee torts within scope; independent-contractor torts generally are not attributed.",
        ],
      },
      {
        id: "sn3",
        title: "Article 9: attachment, perfection and priority",
        testPointIds: ["tp6", "tp5"],
        explanation: [
          "Secured-transactions questions must be worked in a fixed order, and skipping a step is the classic way to lose a TBS. Attachment makes the security interest enforceable against the debtor and requires three things: the secured party gives value, the debtor has rights in the collateral, and there is either an authenticated security agreement describing the collateral or the secured party takes possession or control. Perfection makes the interest effective against third parties and is usually accomplished by filing a financing statement, but can also be by possession (e.g., pledged goods), by control (deposit accounts, investment property), or automatically at attachment for a purchase-money security interest in consumer goods.",
          "Priority then sorts competing claimants. The baseline rules are that a perfected interest beats an unperfected one, and among perfected interests the first to file or perfect wins. The purchase-money security interest is the crucial exception: a PMSI in goods other than inventory takes superpriority over an earlier-filed general interest if it is perfected within the statutory grace period after the debtor receives possession; a PMSI in inventory requires perfection before delivery plus authenticated notice to conflicting inventory financers. Overlaying all of this, a buyer in the ordinary course of business takes free of a security interest created by that seller—even a perfected one, and even if the buyer knew it existed—so long as the buyer did not know the sale violated the security agreement.",
          "Suretyship interacts with these creditor remedies. A surety who pays the debt obtains reimbursement from the debtor, subrogation to the creditor's rights and collateral, and contribution from co-sureties; conversely, if the creditor releases the principal debtor or impairs the collateral without the surety's consent, the surety is discharged to the extent of the resulting loss. These are all business-law remedies—no tax basis, character, or recognition concept is in play.",
        ],
        keyRules: [
          "Attachment: value + debtor's rights + authenticated agreement (or possession/control).",
          "Perfection: filing (usual), possession, control, or automatic for a PMSI in consumer goods.",
          "Priority: perfected > unperfected; first to file/perfect among perfected; PMSI superpriority with grace period/notice; buyer in ordinary course takes free.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. Debtor Co. buys a $100,000 packaging machine (equipment) from Seller on credit; Seller retains a security interest and files a financing statement 15 days after Debtor receives the machine. Bank had earlier lent Debtor money secured by 'all present and after-acquired equipment' and perfected that interest by filing two years ago. Debtor defaults. Assume the PMSI grace period is 20 days. Who has priority in the machine, and why?",
          steps: [
            "Confirm attachment for both: Bank (value, rights, authenticated after-acquired equipment agreement) and Seller (value via credit sale, Debtor's rights, retained security interest in the identified machine).",
            "Confirm perfection: Bank perfected by filing two years ago; Seller perfected by filing 15 days after Debtor received the machine.",
            "Identify Seller's interest as a purchase-money security interest in equipment (it secures the price of the very machine sold).",
            "Apply the PMSI-in-equipment superpriority rule: a PMSI in goods other than inventory beats an earlier-filed conflicting interest if perfected within the grace period (here 20 days) after the debtor receives the collateral. Seller filed on day 15, within 20 days.",
            "Because Bank's interest is a general (after-acquired) equipment interest and Seller timely perfected its PMSI, Seller's superpriority defeats Bank's earlier filing as to this machine.",
          ],
          conclusion:
            "Seller has priority in the packaging machine. Its purchase-money security interest in equipment, perfected within the 20-day grace period after Debtor took possession, takes superpriority over Bank's earlier-filed after-acquired-equipment interest.",
          markingNotes: [
            "Award marks for confirming attachment and perfection for both creditors before addressing priority.",
            "Award marks for correctly identifying Seller's interest as a PMSI in equipment.",
            "Full marks require applying the PMSI grace-period rule (filed day 15 ≤ 20-day period) to give Seller superpriority.",
            "Deduct if the answer applies the inventory-PMSI notice rule (this is equipment, not inventory).",
          ],
        },
      },
      {
        id: "sn4",
        title: "Bankruptcy: the estate, avoidance and the priority ladder",
        testPointIds: ["tp7"],
        explanation: [
          "Bankruptcy is federal law but wholly separate from federal tax—candidates should resist importing any IRC concept. The three tested chapters serve different purposes: Chapter 7 liquidates the debtor's nonexempt property and distributes the proceeds; Chapter 11 reorganizes an ongoing business under a confirmed plan; Chapter 13 is a repayment plan for an individual with regular income. Filing a petition creates the bankruptcy estate and triggers the automatic stay, which immediately halts most collection actions, lawsuits and lien enforcement against the debtor and the estate.",
          "The trustee can enlarge the estate by avoiding certain pre-petition transfers. A voidable preference is a transfer to or for a creditor, on account of an antecedent debt, made while the debtor was insolvent, within 90 days before filing (extended to one year for insiders), that enabled the creditor to receive more than it would in a Chapter 7 liquidation—subject to defenses such as contemporaneous exchanges and ordinary-course payments. Fraudulent transfers—those made with actual intent to hinder creditors, or for less than reasonably equivalent value while insolvent—are also avoidable.",
          "Distribution follows a strict order. Secured creditors are paid first out of their collateral (any deficiency becomes an unsecured claim). Next come the §507 priority unsecured claims in their statutory sequence—these typically include domestic-support obligations, administrative expenses, certain employee wages and benefit contributions within statutory caps, and certain taxes—each level paid in full before the next. General unsecured creditors then share pro rata in whatever remains, and equity holders are last. Finally, discharge is not universal: most taxes, alimony and child support, debts from fraud or willful injury, and student loans (absent undue hardship) are nondischargeable, so a debtor can emerge still owing them.",
        ],
        keyRules: [
          "Chapter 7 liquidates; 11 reorganizes; 13 is an individual repayment plan; filing triggers the automatic stay.",
          "Preference: antecedent debt, insolvent, within 90 days (1 year for insiders), greater recovery than Chapter 7; fraudulent transfers also avoidable.",
          "Distribution: secured (from collateral) → §507 priority unsecured (in order) → general unsecured pro rata → equity; some debts are nondischargeable.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp3"],
        style: "Task-based simulation (contract classification & remedy)",
        question:
          "A merchant emails a signed offer to sell 1,000 branded phone cases (goods) for $6,000, promising to hold it open for 60 days. Fifteen days later, before any acceptance, the merchant tries to revoke. Separately, in a contract to sell a specific vintage painting, the seller refuses to deliver. For each, state whether the buyer prevails and why.",
        answerPlan: [
          "Case 1: goods → UCC; merchant signed firm offer irrevocable without consideration up to 3 months → revocation ineffective.",
          "Case 2: unique good/subject matter → specific performance because damages inadequate.",
        ],
        modelAnswer:
          "Case 1 is a sale of goods governed by UCC Article 2. The seller is a merchant who made a signed written promise to hold the offer open; under the UCC firm-offer rule that promise is irrevocable without consideration for the time stated, up to a maximum of three months. Sixty days is within that cap, so the attempted revocation on day 15 is ineffective and the offer remains open for the buyer to accept. Case 2 concerns a unique item (a specific vintage painting) for which money damages are inadequate; a court will therefore order specific performance compelling the seller to deliver, just as it would for a contract involving land or other unique goods. Both outcomes rest on business-law rules, with no tax consequence at the formation stage.",
        markingGuide: [
          "1 mark: classifying Case 1 as a UCC sale of goods.",
          "1 mark: applying the merchant firm-offer rule (irrevocable without consideration, ≤ 3 months) to defeat the revocation.",
          "1 mark: identifying the painting as unique and awarding specific performance.",
          "1 mark: explaining money damages are inadequate for unique subject matter.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp6"],
        style: "MCQ set rationale (secured transactions priority)",
        question:
          "On March 1, Bank perfects a security interest in Debtor's existing and after-acquired inventory by filing. On April 1, Supplier sells inventory to Debtor on credit, retaining a security interest, files that day, but gives Bank no notice. Debtor receives the goods April 3 and defaults. Who has priority in the Supplier-sold inventory?",
        answerPlan: [
          "Identify Supplier's interest as a PMSI in inventory.",
          "Inventory-PMSI superpriority requires perfection before the debtor receives the goods AND authenticated notice to prior inventory financers.",
          "Supplier gave no notice → fails superpriority → first-to-file governs → Bank wins.",
        ],
        modelAnswer:
          "Supplier holds a purchase-money security interest because it financed the very inventory it sold. But a PMSI in inventory takes superpriority over an earlier-filed conflicting interest only if two conditions are met before the debtor receives the goods: the PMSI is perfected, and the PMSI holder sends authenticated notice to the holders of conflicting perfected inventory interests. Supplier perfected but gave Bank no notice, so it fails the inventory-PMSI rule. The dispute therefore reverts to the general priority rule—first to file or perfect—under which Bank, having filed on March 1, has priority over Supplier's April filing in the inventory. Had this been equipment rather than inventory, Supplier would only have needed to perfect within the grace period, with no notice requirement.",
        markingGuide: [
          "1 mark: identifying Supplier's interest as a PMSI in inventory.",
          "1 mark: stating the two inventory-PMSI superpriority conditions (perfection + notice before receipt).",
          "1 mark: concluding Supplier fails for lack of notice, so first-to-file governs and Bank wins.",
          "1 mark: contrasting the equipment-PMSI rule (grace period, no notice).",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp7"],
        style: "Task-based simulation (bankruptcy distribution)",
        question:
          "In a Chapter 7 case the estate has $120,000 to distribute. Claims: a bank with a perfected security interest in equipment worth $50,000 owed $70,000; unpaid administrative expenses of $10,000; employee wages earned within the priority period totaling $8,000 (within the statutory cap); and general unsecured trade creditors owed $200,000. Distribute the funds.",
        answerPlan: [
          "Pay secured creditor from collateral ($50,000); deficiency $20,000 becomes unsecured.",
          "Pay §507 priorities in order: administrative $10,000, then wages $8,000.",
          "Distribute remainder pro rata to general unsecured (including the $20,000 deficiency).",
        ],
        modelAnswer:
          "First, the bank is paid from its collateral: the equipment is worth $50,000, so the bank receives $50,000, and its remaining $20,000 becomes a general unsecured claim. That leaves $70,000 of the $120,000. Next come the §507 priority unsecured claims in order: administrative expenses of $10,000 are paid in full, then priority employee wages of $8,000 (within the statutory cap) are paid in full, leaving $52,000. The general unsecured pool totals $220,000 (the $200,000 trade creditors plus the bank's $20,000 deficiency), so they share the remaining $52,000 pro rata—about 23.6 cents on the dollar. Equity holders receive nothing. This is a purely bankruptcy-law waterfall; no tax computation is involved.",
        markingGuide: [
          "1 mark: paying the secured creditor $50,000 from collateral and treating the $20,000 as unsecured.",
          "1 mark: paying §507 priorities in order (administrative $10,000, then wages $8,000).",
          "1 mark: computing the general unsecured pool as $220,000 and distributing $52,000 pro rata.",
          "1 mark: concluding equity receives nothing and noting the deficiency joins the unsecured pool.",
        ],
      },
    ],
  }),

  // ===================================================================
  // cpa-reg-m3 — Business structure: partnerships, corporations & LLCs (BUSINESS LAW)
  // ===================================================================
  "cpa-reg-m3": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Entity comparison: liability, continuity and control",
        priority: "critical",
        examinerFocus:
          "Comparing the legal (not tax) features of sole proprietorships, general and limited partnerships, LLCs and corporations across owner liability, continuity of existence, management/control, and transferability of ownership. The examiner tests the legal characteristic, so keep tax classification out of the analysis.",
        typicalQuestionForms: [
          "MCQ: which entities provide limited liability to all their owners?",
          "MCQ: which entity offers perpetual existence and free transferability of interests?",
        ],
        mustKnow: [
          "Limited liability for all owners: corporations, LLCs, and limited partners (but not general partners). Unlimited personal liability: sole proprietors and general partners.",
          "Continuity: corporations have perpetual existence; partnerships and LLCs traditionally dissolve on certain events but modern statutes (RUPA, LLC acts) allow continuation by agreement.",
          "Control: shareholders elect a board that appoints officers (corporation); partners share management by default (partnership); LLC members manage directly or appoint managers.",
        ],
        scoringActions: [
          "Answer liability/continuity questions with legal characteristics, not tax treatment.",
          "Separate the general partner (unlimited liability) from limited partners/members (limited liability).",
        ],
      },
      {
        id: "tp2",
        title: "Formation requirements by entity",
        priority: "medium",
        examinerFocus:
          "What each entity requires to come into legal existence—no filing for a general partnership or sole proprietorship, versus a state filing (articles/certificate) for corporations, LLCs and limited partnerships—and the consequences of defective formation.",
        typicalQuestionForms: [
          "MCQ: which entity requires a filing with the state to exist?",
          "MCQ: is a general partnership formed despite the absence of a written agreement?",
        ],
        mustKnow: [
          "A general partnership can form without any filing or writing—by the association of two or more persons to carry on a business for profit as co-owners; a sole proprietorship needs no formation document.",
          "Corporations form by filing articles of incorporation; LLCs by filing articles/certificate of organization; limited partnerships by filing a certificate of limited partnership. These are state-law acts.",
          "De jure vs de facto corporation and corporation by estoppel address defective incorporation; a promoter is personally liable on pre-incorporation contracts until the corporation adopts them (novation releases the promoter).",
        ],
        scoringActions: [
          "Distinguish filing entities (corporation, LLC, LP) from non-filing entities (general partnership, sole proprietorship).",
          "Hold the promoter personally liable on pre-incorporation contracts absent adoption/novation.",
        ],
      },
      {
        id: "tp3",
        title: "Partnerships: rights, duties, liability and dissociation",
        priority: "high",
        examinerFocus:
          "Default rules for general partnerships under RUPA—equal management and profit sharing, joint and several liability, fiduciary duties of loyalty and care—and the effect of a partner's dissociation on the partnership and on continuing liability.",
        typicalQuestionForms: [
          "MCQ: how are profits and losses shared absent an agreement?",
          "MCQ: what liability does an incoming or withdrawing partner bear for partnership debts?",
        ],
        mustKnow: [
          "Default profit sharing is equal regardless of capital contributed; losses follow profits unless otherwise agreed. Each partner has equal management rights and one vote; ordinary matters are decided by majority, extraordinary matters by unanimity.",
          "Partners are jointly and severally liable for partnership obligations, including torts committed in the ordinary course; an incoming partner's liability for pre-admission debts is generally limited to their capital contribution.",
          "Partners owe fiduciary duties of loyalty (no self-dealing, competing, or usurping partnership opportunities) and care; dissociation does not automatically end the partnership, but a dissociated partner can retain apparent-authority liability to third parties until proper notice is given.",
        ],
        scoringActions: [
          "Apply equal profit sharing by default, ignoring unequal capital, unless the agreement states otherwise.",
          "Limit an incoming partner's exposure for pre-admission debts to the capital contributed.",
        ],
      },
      {
        id: "tp4",
        title: "Limited partnerships and LLCs",
        priority: "high",
        examinerFocus:
          "The liability shield and control features of limited partnerships (at least one general partner with unlimited liability; limited partners shielded unless they participate in control under older acts) and LLCs (member limited liability with flexible member- or manager-management), plus piercing/veil concepts.",
        typicalQuestionForms: [
          "MCQ: can a limited partner lose the liability shield by managing the business?",
          "MCQ: how is an LLC managed and what liability do members bear?",
        ],
        mustKnow: [
          "A limited partnership must have at least one general partner (unlimited liability) and one or more limited partners whose liability is limited to their investment. Under older law a limited partner who takes part in control could be liable; modern acts (RULPA/ULPA) largely eliminate that 'control rule'.",
          "An LLC gives all members limited liability while allowing pass-through-style flexibility; it may be member-managed (all members have authority) or manager-managed (designated managers act, and non-manager members lack agency authority).",
          "The corporate/LLC liability shield can be pierced (holding owners personally liable) for fraud, commingling of assets, inadequate capitalization, or ignoring formalities—an equitable exception, not the norm.",
        ],
        scoringActions: [
          "Confirm a limited partnership has a general partner bearing unlimited liability before analyzing limited partners.",
          "Identify whether the LLC is member- or manager-managed to determine who has authority.",
        ],
      },
      {
        id: "tp5",
        title: "Corporate governance, fiduciary duties and shareholder rights",
        priority: "critical",
        examinerFocus:
          "The corporate governance structure (shareholders elect the board, the board sets policy and appoints officers, officers manage), directors' and officers' fiduciary duties (duty of care protected by the business judgment rule; duty of loyalty), and shareholder rights including voting, inspection, and derivative suits.",
        typicalQuestionForms: [
          "MCQ: does the business judgment rule protect a described board decision?",
          "MCQ: what must a shareholder show to bring a derivative suit?",
        ],
        mustKnow: [
          "Governance flows shareholders → board of directors → officers; shareholders do not manage day-to-day and generally act only through voting (electing directors, approving fundamental changes like mergers, dissolution or charter amendments).",
          "Directors/officers owe a duty of care (act in good faith with the care of an ordinarily prudent person)—protected by the business judgment rule for informed, disinterested, rational decisions—and a duty of loyalty (no self-dealing, usurping corporate opportunities, or conflicts unless properly approved).",
          "Shareholder rights include voting (often with cumulative voting for directors if authorized), inspection of books for a proper purpose, preemptive rights if provided, and derivative suits brought on the corporation's behalf after making demand on the board (or showing demand would be futile).",
        ],
        scoringActions: [
          "Apply the business judgment rule only to informed, disinterested, good-faith decisions; a conflict of interest shifts analysis to the duty of loyalty.",
          "For a derivative suit, confirm the shareholder made demand on the board or that demand was excused as futile.",
        ],
      },
      {
        id: "tp6",
        title: "Dissolution and winding up",
        priority: "medium",
        examinerFocus:
          "The events that trigger voluntary and involuntary dissolution across entities, the winding-up process, and the order in which creditors and owners are paid on liquidation.",
        typicalQuestionForms: [
          "MCQ: what triggers involuntary (judicial) dissolution of a corporation?",
          "MCQ: on winding up, who is paid before the owners receive distributions?",
        ],
        mustKnow: [
          "Dissolution may be voluntary (owner/board-and-shareholder action, expiration of term, or agreed event) or involuntary (judicial dissolution for deadlock, oppression, fraud, or failure to comply with statutory requirements; administrative dissolution for failing to file/pay fees).",
          "Winding up collects assets, pays or provides for creditors, and distributes any remainder to owners; the entity continues only for winding-up purposes during this period.",
          "Liquidation priority: outside creditors first, then owners—on dissolution creditors (including owners who are creditors) are paid before capital is returned and before any remaining surplus is distributed to owners.",
        ],
        scoringActions: [
          "Classify the dissolution trigger as voluntary, judicial, or administrative.",
          "Pay creditors before owners in every winding-up distribution question.",
        ],
      },
      {
        id: "tp7",
        title: "Legal form versus tax classification (check-the-box)",
        priority: "high",
        examinerFocus:
          "Recognizing that an entity's legal form (this module) is distinct from its federal tax classification (tested in the tax modules). An LLC's legal liability shield says nothing about whether it is taxed as a disregarded entity, partnership, or corporation under the check-the-box rules.",
        typicalQuestionForms: [
          "MCQ: does forming an LLC determine how the entity is taxed?",
          "MCQ: distinguish a legal-liability question from a tax-classification question in a fact pattern.",
        ],
        mustKnow: [
          "Legal form (liability, governance, continuity) is governed by state entity law; federal tax classification is governed by the Internal Revenue Code and the check-the-box regulations—these are separate systems and must not be cross-applied.",
          "Under check-the-box, a domestic single-member LLC is by default a disregarded entity, a multi-member LLC is by default a partnership, and any eligible entity may elect corporate (and then possibly S) tax treatment; the legal LLC form is unchanged by the election.",
          "A corporation's legal 'C' or 'S' form is a state-law corporation either way; the S election is purely a federal tax choice layered on top of the legal corporation.",
        ],
        scoringActions: [
          "When a question asks about liability or governance, answer with legal-form rules; when it asks how the entity is taxed, switch to the check-the-box/IRC framework.",
          "Never infer tax treatment from legal form or vice versa.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Entity questions are conceptual and comparison-heavy—target near-full MCQ marks by anchoring each answer to the correct legal characteristic and refusing to let tax classification bleed in.",
      timeBudget:
        "~1.25 min per MCQ; on an entity-comparison TBS, sketch a quick liability/continuity/control/tax-classification grid before answering line items.",
      answerSequence: [
        "Identify the entity type and whether the question is about liability, governance, continuity, or tax classification.",
        "Apply the correct default rule (e.g., equal partnership profit sharing; shareholders→board→officers).",
        "For governance disputes, choose duty of care (business judgment rule) vs duty of loyalty.",
        "For anything tax, switch explicitly to the check-the-box/IRC framework.",
      ],
      qualityChecks: [
        "Did I answer a legal-form question with legal rules, not tax rules?",
        "Did I keep the general partner's unlimited liability distinct from limited partners/members?",
        "Did I apply the business judgment rule only to disinterested, informed decisions?",
        "Did I pay creditors before owners on dissolution?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The entity-comparison grid: liability, continuity, control, transferability",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "The examiner's favorite REG entity tool is a comparison across four legal dimensions, and building the grid mentally prevents most errors. On liability, sole proprietors and general partners bear unlimited personal liability; limited partners, LLC members, and corporate shareholders enjoy limited liability capped at their investment—remembering that a limited partnership must still have at least one general partner exposed to unlimited liability. On continuity, corporations have perpetual existence, while partnerships and LLCs historically dissolved on certain owner events, though modern statutes let them continue by agreement.",
          "On control, the corporation separates ownership from management: shareholders elect directors, the board sets policy and appoints officers, and officers run daily operations. Partnerships default to shared, equal management with one vote per partner regardless of capital, and LLCs choose between member-management (everyone has authority) and manager-management (only designated managers act). On transferability, corporate shares are freely transferable, while partnership and LLC interests generally transfer only the economic (financial) rights unless the other owners consent to admitting the transferee as a full owner.",
          "Formation tracks these differences. A general partnership or sole proprietorship needs no filing—a general partnership can arise simply from two or more people carrying on a business for profit as co-owners, even without a written agreement. Corporations, LLCs and limited partnerships require a state filing (articles of incorporation, articles of organization, or a certificate of limited partnership). Where incorporation is defective, doctrines like de facto corporation and corporation by estoppel may still shield owners, and a promoter remains personally liable on pre-incorporation contracts until the corporation adopts them or a novation releases the promoter. All of this is state entity law—no tax concept belongs here.",
        ],
        keyRules: [
          "Unlimited liability: sole proprietor, general partner. Limited: limited partner, LLC member, shareholder.",
          "Corporations = perpetual existence and freely transferable shares; partnership/LLC interests transfer economic rights only absent consent.",
          "No filing for general partnership/sole proprietorship; filing required for corporation, LLC, LP; promoter liable pre-adoption.",
        ],
      },
      {
        id: "sn2",
        title: "Partnership and LLC default rules and the control question",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "General partnership questions are decided by RUPA's default rules, which apply whenever the partnership agreement is silent. Profits are shared equally among partners regardless of unequal capital contributions, and losses follow the profit-sharing ratio unless otherwise agreed—so a partner who contributed 90% of the capital still shares profits equally absent an agreement. Management rights are equal (one partner, one vote); ordinary-course decisions pass by majority, while extraordinary matters (admitting a partner, amending the agreement, selling substantially all assets) require unanimity. Partners are jointly and severally liable for partnership obligations, but an incoming partner's liability for debts incurred before admission is limited to their capital contribution.",
          "Fiduciary duties are strict: partners owe duties of loyalty (no competing with the firm, self-dealing, or usurping partnership opportunities) and care. A partner's dissociation (withdrawal) does not necessarily dissolve the partnership under RUPA, but the dissociated partner can remain liable to third parties on the basis of apparent authority until proper notice of the withdrawal is given—an easy trap.",
          "Limited partnerships and LLCs modify the liability/control balance. A limited partnership shields its limited partners but requires at least one general partner with unlimited liability; under older law a limited partner who participated in control risked losing the shield, but modern acts largely abolish that control rule. An LLC gives every member limited liability while offering flexible governance: in a member-managed LLC each member is an agent with authority, whereas in a manager-managed LLC only the managers bind the entity and non-manager members lack agency authority. In all these entities the liability shield can be pierced for fraud, commingling, undercapitalization, or disregard of formalities. Note carefully: none of these liability or control features determines how the entity is taxed.",
        ],
        keyRules: [
          "Default: equal profit sharing regardless of capital; losses follow profits; majority for ordinary, unanimity for extraordinary matters.",
          "Incoming partner's pre-admission liability limited to capital contribution; dissociated partner retains apparent-authority liability until notice.",
          "LP needs a general partner (unlimited liability); LLC members have limited liability; member- vs manager-managed determines authority.",
        ],
      },
      {
        id: "sn3",
        title: "Corporate governance and the duty-of-care/loyalty split",
        testPointIds: ["tp5", "tp6"],
        explanation: [
          "Corporate governance rests on a chain of authority: shareholders own the corporation but do not manage it; they elect the board of directors, which sets policy and appoints officers, and the officers conduct day-to-day operations. Shareholders act mainly through voting—electing and removing directors, and approving fundamental corporate changes such as mergers, sales of substantially all assets, charter amendments and dissolution. Beyond voting, shareholders have the right to inspect the corporation's books and records for a proper purpose, may have preemptive rights to maintain their ownership percentage if the charter provides, and may sue.",
          "Directors and officers owe two fiduciary duties that the exam constantly contrasts. The duty of care requires acting in good faith and with the care of an ordinarily prudent person; when a decision is informed, made in good faith, and free of conflict, the business judgment rule shields the director from liability even if the decision turns out badly. The duty of loyalty forbids self-dealing, taking corporate opportunities, and undisclosed conflicts of interest; a conflicted transaction survives only if properly approved by disinterested directors or shareholders or shown to be fair. When a fact pattern involves a conflict or personal benefit, the analysis leaves the business judgment rule and becomes a duty-of-loyalty question.",
          "Shareholders enforce these duties through derivative suits—actions brought on the corporation's behalf against directors or third parties. The shareholder must generally first make a demand on the board to act, unless demand would be futile; any recovery belongs to the corporation, not the suing shareholder. Finally, when the corporate life ends, dissolution may be voluntary (board-and-shareholder action or an agreed event), judicial (deadlock, oppression, or fraud), or administrative (failure to file reports or pay fees); winding up then collects assets and, crucially, pays outside creditors before returning capital or distributing any surplus to shareholders.",
        ],
        keyRules: [
          "Authority flows shareholders → board → officers; shareholders vote on fundamental changes and elect directors.",
          "Duty of care is protected by the business judgment rule (informed, good-faith, disinterested); a conflict shifts to the duty of loyalty.",
          "Derivative suits require demand (or futility); on dissolution, creditors are paid before owners.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. XYZ Corp's board, after reviewing a written analysis from an independent investment bank, approves acquiring a supplier at a fair price; the acquisition later underperforms and a shareholder sues the directors. Separately, Director D quietly arranges for XYZ to buy real estate from a company D secretly owns, at an inflated price. Analyze the directors' liability in each situation.",
          steps: [
            "Situation 1: identify the applicable duty—duty of care—because the decision is a business decision with no conflict.",
            "Apply the business judgment rule: the directors were informed (relied on an independent analysis), acted in good faith, and were disinterested, so a mere bad outcome does not create liability.",
            "Conclude the directors are protected; the shareholder's derivative claim on Situation 1 fails.",
            "Situation 2: identify the applicable duty—duty of loyalty—because Director D has an undisclosed conflict (self-dealing).",
            "Because D concealed the interest and the price was inflated, the transaction is not protected by the business judgment rule and was not properly approved by disinterested decision-makers; D breached the duty of loyalty and is liable (transaction voidable; D may disgorge the benefit).",
          ],
          conclusion:
            "The board is not liable for the underperforming acquisition—the business judgment rule protects an informed, good-faith, disinterested decision. Director D is liable for breaching the duty of loyalty through undisclosed self-dealing at an unfair price; the transaction can be rescinded and D can be required to disgorge the improper gain.",
          markingNotes: [
            "Award marks for classifying Situation 1 as a duty-of-care question and applying the business judgment rule (informed, good faith, disinterested).",
            "Award marks for concluding no liability despite the bad result.",
            "Award marks for classifying Situation 2 as a duty-of-loyalty breach (undisclosed self-dealing) outside business-judgment protection.",
            "Full marks require noting the remedy (voidable transaction / disgorgement) and that a derivative suit is brought on the corporation's behalf.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Legal form is not tax classification",
        testPointIds: ["tp7"],
        explanation: [
          "The most valuable habit in the REG business-structure module is to keep two separate systems apart. Legal form—who bears liability, how the entity is governed, whether it survives an owner's departure—is a matter of state entity law and is what this module tests. Federal tax classification—whether the entity is a disregarded entity, a partnership, or a corporation for income-tax purposes—is a matter of the Internal Revenue Code and the check-the-box regulations, and is tested in the tax modules. The examiner deliberately writes fact patterns that tempt candidates to infer one from the other.",
          "Under the check-the-box regime, a domestic single-member LLC is a disregarded entity by default, a domestic multi-member LLC is a partnership by default, and any eligible entity may affirmatively elect to be taxed as a corporation (and, if qualified, then elect S status). None of these elections changes the entity's legal form: an LLC that elects corporate tax treatment is still an LLC providing an LLC's liability shield and governance under state law. Likewise, an 'S corporation' is legally an ordinary state-law corporation; the S election is only a federal tax overlay that permits pass-through taxation if the eligibility requirements are met. When a question asks who is liable or how the entity is governed, answer with legal rules; when it asks how income is taxed, switch deliberately to the IRC framework, and never let one answer the other.",
        ],
        keyRules: [
          "State entity law governs liability/governance/continuity; the IRC and check-the-box govern tax classification—separate systems.",
          "Check-the-box defaults: single-member LLC = disregarded; multi-member LLC = partnership; corporate election available (then S if eligible).",
          "An S corporation is a legal corporation with a federal tax overlay; the tax election does not change legal form.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp3", "tp7"],
        style: "Task-based simulation (entity features)",
        question:
          "Three friends form a general partnership; A contributes $80,000, B contributes $20,000, and C contributes services. The agreement is silent on profit sharing. The firm earns $90,000. Separately, the friends ask whether choosing an LLC instead would have determined how the business is taxed. Explain the profit split and the LLC/tax point.",
        answerPlan: [
          "Default RUPA rule: equal profit sharing regardless of capital or services.",
          "Split $90,000 equally → $30,000 each.",
          "LLC formation is legal form, not tax classification; check-the-box governs tax.",
        ],
        modelAnswer:
          "Because the partnership agreement is silent, RUPA's default rule applies: partners share profits equally regardless of their unequal capital contributions or that C contributed only services. The $90,000 profit is therefore split equally—$30,000 to each of A, B and C—even though A contributed far more capital. If the partners wanted A to receive a larger share, they needed to say so in the agreement. On the second point, choosing to form an LLC would not by itself determine how the business is taxed: legal form (the LLC liability shield and governance) is governed by state law, while federal tax classification is governed by the check-the-box regulations. A multi-member LLC is taxed as a partnership by default but may elect corporate (and possibly S) treatment—so the tax outcome is a separate election layered on top of the legal form.",
        markingGuide: [
          "1 mark: applying the default equal-profit-sharing rule despite unequal contributions.",
          "1 mark: computing $30,000 to each partner.",
          "1 mark: distinguishing legal form from tax classification.",
          "1 mark: noting the check-the-box default (multi-member LLC = partnership) and the ability to elect otherwise.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp5"],
        style: "MCQ set rationale (governance & fiduciary duty)",
        question:
          "A corporation's board, relying on a thorough independent report, approves a new product line that later fails, and a shareholder sues. In a second matter, a director causes the corporation to lease property from the director's spouse without disclosure at an above-market rate. Analyze each under the directors' fiduciary duties.",
        answerPlan: [
          "Matter 1: duty of care → business judgment rule protects informed, good-faith, disinterested decision.",
          "Matter 2: duty of loyalty → undisclosed self-dealing, not protected, voidable/disgorgement.",
        ],
        modelAnswer:
          "The first matter is a duty-of-care question. The board made an informed decision in good faith, relying on a thorough independent report, and had no conflict of interest, so the business judgment rule shields the directors from liability even though the product line failed—courts do not second-guess a reasonable, informed business decision merely because it produced a loss. The second matter is a duty-of-loyalty question. The director engaged in undisclosed self-dealing (leasing from a spouse's interest at an above-market rate), which the business judgment rule does not protect. Absent approval by disinterested directors or shareholders or proof of fairness, the director breached the duty of loyalty; the transaction is voidable and the director can be required to disgorge the improper benefit. A shareholder would typically enforce this through a derivative suit brought on the corporation's behalf.",
        markingGuide: [
          "1 mark: classifying Matter 1 as duty of care and applying the business judgment rule.",
          "1 mark: concluding no liability despite the failed product line.",
          "1 mark: classifying Matter 2 as a duty-of-loyalty breach (undisclosed self-dealing).",
          "1 mark: identifying the remedy (voidable/disgorgement) and the derivative-suit mechanism.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp4", "tp6"],
        style: "Short constructed response (LP liability & dissolution)",
        question:
          "In a limited partnership under a modern statute, a limited partner attends management meetings and votes on major decisions; a creditor argues she has thereby become personally liable for partnership debts. The partnership later dissolves with assets of $200,000 and debts of $150,000 owed to outside creditors plus $30,000 owed to a general partner who lent money. Address the liability argument and the distribution order.",
        answerPlan: [
          "Modern LP acts largely abolish the control rule → limited partner keeps the shield.",
          "Confirm at least one general partner bears unlimited liability.",
          "Distribution: creditors (including partner-creditor) before return of capital to owners.",
        ],
        modelAnswer:
          "Under a modern limited-partnership statute (RULPA/ULPA), the old 'control rule' has been largely eliminated, so a limited partner does not lose her liability shield merely by participating in management or voting on major decisions; her liability remains limited to her investment. The limited partnership still functions because it has at least one general partner who bears unlimited personal liability for the firm's debts. On dissolution, outside creditors are paid before owners receive anything, and a partner who is also a creditor (here the general partner who lent $30,000) is treated as a creditor for that loan. With $200,000 of assets, the $150,000 owed to outside creditors and the $30,000 partner loan (total $180,000 of debt) are satisfied in full, leaving $20,000 to be distributed to the partners according to their agreement. Creditors are always paid before capital is returned to owners.",
        markingGuide: [
          "1 mark: applying the modern abolition of the control rule so the limited partner keeps the shield.",
          "1 mark: noting a general partner bears unlimited liability.",
          "1 mark: treating the partner-lender as a creditor and paying all debts ($180,000) before owners.",
          "1 mark: computing the $20,000 residual distributed to partners.",
        ],
      },
    ],
  }),

  // ===================================================================
  // cpa-reg-m4 — Federal taxation of property transactions (FEDERAL TAX)
  // ===================================================================
  "cpa-reg-m4": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Basis: cost, gift (dual basis) and inherited (step-up)",
        priority: "critical",
        examinerFocus:
          "Determining adjusted basis and holding period across acquisition modes—purchased (cost), gifted (§1015 carryover with the dual-basis rule for loss property), and inherited (§1014 fair-market-value step-up). The examiner tests which basis to use and, for gifts, which basis applies on a later sale.",
        typicalQuestionForms: [
          "MCQ: what basis and holding period does the donee take, and what gain/loss results on sale?",
          "MCQ: what is the heir's basis in inherited property, and is the holding period long-term?",
        ],
        mustKnow: [
          "Cost basis (§1012) includes the purchase price plus acquisition costs; it is adjusted up for capital improvements and down for depreciation.",
          "Gift basis (§1015): the donee takes the donor's carryover basis for computing gain and holding period. If FMV at the gift date is below the donor's basis, the loss basis is that lower FMV (the dual-basis rule); a later sale between the two figures yields no gain and no loss.",
          "Inherited basis (§1014): fair market value at the date of death (or the alternate valuation date if elected); inherited property is automatically treated as long-term regardless of actual holding period.",
        ],
        scoringActions: [
          "For a gift, apply carryover basis for gain and the lower FMV for loss; check for the no-gain/no-loss middle zone.",
          "For inherited property, use date-of-death FMV and treat the holding period as long-term automatically.",
        ],
      },
      {
        id: "tp2",
        title: "Amount realized and realized vs recognized gain/loss",
        priority: "high",
        examinerFocus:
          "Computing amount realized (cash plus FMV of property plus liabilities relieved) and distinguishing realized gain/loss from recognized gain/loss, including loss-disallowance rules such as related-party sales (§267) and personal-use losses.",
        typicalQuestionForms: [
          "MCQ: compute realized and recognized gain when the buyer assumes the seller's debt.",
          "MCQ: is a loss on a sale to a related party or on personal-use property deductible?",
        ],
        mustKnow: [
          "Amount realized = cash + FMV of other property received + liabilities of the seller assumed/relieved, net of selling expenses. Realized gain/loss = amount realized − adjusted basis.",
          "Realized gain is recognized (taxed) unless a nonrecognition provision applies; realized losses are recognized only if allowed—losses on personal-use assets are nondeductible.",
          "§267 disallows losses on sales between related parties; the related buyer takes a cost basis and may use the previously disallowed loss to offset gain on a later sale to an unrelated party (the 'right of offset').",
        ],
        scoringActions: [
          "Add liabilities relieved to the amount realized—candidates routinely omit assumed debt.",
          "Disallow related-party and personal-use losses, and track the §267 right of offset for the related buyer.",
        ],
      },
      {
        id: "tp3",
        title: "Character: capital vs ordinary, netting and rate breakpoints",
        priority: "critical",
        examinerFocus:
          "Classifying an asset as capital or ordinary (§1221 exclusions), applying the holding-period long/short-term split, netting capital gains and losses, and the individual net-capital-loss limitation. Preferential-rate breakpoints are inflation-indexed—flag them rather than memorizing figures.",
        typicalQuestionForms: [
          "MCQ: is the asset a capital asset, and is the gain long- or short-term?",
          "MCQ/TBS: net the year's capital transactions and determine the deductible loss and carryover.",
        ],
        mustKnow: [
          "§1221 capital assets exclude inventory, accounts receivable, depreciable property/real property used in a trade or business (that is §1231 property), and self-created copyrights/similar. Holding period over one year is long-term.",
          "Individuals net short-term and long-term separately, then across; a net capital loss is deductible against ordinary income only up to $3,000 per year (this $3,000 limit is fixed by statute, not indexed), with the excess carried forward indefinitely, retaining character.",
          "Net long-term capital gain is taxed at preferential 0%/15%/20% rates, but the income breakpoints separating those rates are adjusted for inflation annually—confirm the current-year breakpoints for your testing window rather than quoting a stale threshold.",
        ],
        scoringActions: [
          "Screen for §1221 exclusions before treating a sale as capital; business depreciable property is §1231, not capital.",
          "Cap the ordinary offset for a net capital loss at the fixed $3,000, and carry the remainder forward with its character.",
          "Flag the 0/15/20% breakpoints as 'confirm current-year indexed amounts,' not fixed numbers.",
        ],
      },
      {
        id: "tp4",
        title: "Section 1231 and depreciation recapture (§1245/§1250)",
        priority: "critical",
        examinerFocus:
          "Applying §1231 netting (net gain is capital, net loss is ordinary), the five-year lookback rule that recharacterizes 1231 gain as ordinary to the extent of prior unrecaptured 1231 losses, and depreciation recapture under §1245 (all depreciation, personal property) and §1250 (excess depreciation, real property; plus unrecaptured §1250 gain taxed at a maximum 25%).",
        typicalQuestionForms: [
          "TBS: sell depreciable business assets; compute ordinary recapture and remaining §1231 gain/loss.",
          "MCQ: why is §1231 favorable, and how does the lookback rule work?",
        ],
        mustKnow: [
          "§1231 property is depreciable property and real property used in a trade or business held over one year. Net §1231 gains are treated as long-term capital gains; net §1231 losses are treated as ordinary—the best of both worlds.",
          "§1245 recaptures the lesser of the gain or total depreciation taken as ordinary income (applies to depreciable personal property/equipment). §1250 recaptures only depreciation taken in excess of straight-line as ordinary (little today since real property uses straight-line), but the 'unrecaptured §1250 gain' attributable to prior straight-line depreciation is taxed at a maximum 25% rate.",
          "The five-year lookback: net §1231 gain is recharacterized as ordinary income to the extent of net §1231 losses deducted (as ordinary) in the preceding five years.",
        ],
        scoringActions: [
          "Compute depreciation recapture first, then run §1231 netting on the remaining gain.",
          "Apply the five-year lookback to convert 1231 gain to ordinary up to prior unrecaptured 1231 losses.",
        ],
      },
      {
        id: "tp5",
        title: "Like-kind exchanges (§1031): real property only",
        priority: "high",
        examinerFocus:
          "Applying §1031 after the TCJA limited it to real property held for productive use in a trade/business or investment, computing recognized gain when boot is received, and determining the basis of the property received.",
        typicalQuestionForms: [
          "TBS: exchange investment real property with boot; compute realized gain, recognized gain and new basis.",
          "MCQ: does the exchange qualify for §1031 (personal property no longer eligible)?",
        ],
        mustKnow: [
          "§1031 now applies only to real property held for productive use in a trade or business or for investment; personal/intangible property no longer qualifies. Property held for sale (inventory) and a personal residence never qualify.",
          "Recognized gain = the lesser of realized gain or boot received (cash or non-like-kind property, including net liability relief). Loss is not recognized in a like-kind exchange.",
          "Basis of property received = FMV of that property − deferred (unrecognized) gain + deferred loss; equivalently, carryover basis + gain recognized + boot paid − boot received. Strict 45-day identification and 180-day completion deadlines apply to deferred exchanges.",
        ],
        scoringActions: [
          "Confirm both properties are real property held for business/investment before applying §1031.",
          "Recognize gain only up to boot received; then compute the substituted basis in the property received.",
        ],
      },
      {
        id: "tp6",
        title: "Other nonrecognition: §1033, §121, §453 and wash sales",
        priority: "medium",
        examinerFocus:
          "Applying involuntary-conversion deferral (§1033), the §121 exclusion of gain on a principal residence, installment-method gain recognition (§453), and the §1091 wash-sale loss disallowance—recognizing which provisions defer, exclude, or disallow, and which figures are fixed vs indexed.",
        typicalQuestionForms: [
          "MCQ: how much gain is excluded on the sale of a principal residence, and what are the ownership/use tests?",
          "MCQ/TBS: compute installment-sale gain recognized in the year of collection.",
        ],
        mustKnow: [
          "§1033: gain from an involuntary conversion (casualty, theft, condemnation) can be deferred if the proceeds are reinvested in qualifying replacement property within the statutory period; gain is recognized only to the extent proceeds are not reinvested.",
          "§121: an individual may exclude up to $250,000 ($500,000 for married filing jointly) of gain on the sale of a principal residence owned and used as such for at least 2 of the prior 5 years; these exclusion amounts are fixed by statute (not inflation-indexed).",
          "§453 installment method: gain recognized each year = payment received × gross profit percentage (gross profit ÷ contract price); depreciation recapture is fully recognized in the year of sale, not deferred. §1091 disallows a loss on a sale of stock/securities if substantially identical securities are bought within 30 days before or after; the disallowed loss adds to the basis of the replacement.",
        ],
        scoringActions: [
          "For §1033, recognize gain only to the extent proceeds are not reinvested in qualifying property in time.",
          "Apply the §121 fixed $250k/$500k exclusion after confirming the 2-of-5-year ownership and use tests.",
          "For installment sales, recognize recapture up front and spread the rest via the gross-profit percentage.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Property transactions are computational and recurring—bank the basis, recapture and like-kind TBSs by working them in a fixed order, and don't lose the conceptual character/netting MCQs.",
      timeBudget:
        "~1.25 min per MCQ; on a property TBS, budget the first minutes to lay out amount realized, adjusted basis, realized gain, recapture and character before entering numbers.",
      answerSequence: [
        "Establish adjusted basis (cost/gift dual-basis/inherited step-up) and holding period.",
        "Compute amount realized (include liabilities relieved) and realized gain/loss; test loss-disallowance rules.",
        "Compute depreciation recapture (§1245/§1250) first, then §1231 netting and the lookback.",
        "Apply any nonrecognition provision (§1031/§1033/§121/§453) and compute the substituted basis.",
      ],
      qualityChecks: [
        "Did I use carryover basis for gift gain but the lower FMV for gift loss?",
        "Did I add assumed liabilities to the amount realized?",
        "Did I recapture depreciation before §1231 netting and apply the 5-year lookback?",
        "Did I flag the 0/15/20% breakpoints as indexed while treating the $3,000 loss limit and §121 amounts as fixed?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "Basis across acquisition modes and the gift dual-basis trap",
        testPointIds: ["tp1", "tp2"],
        explanation: [
          "Every property computation starts with basis, and the acquisition mode dictates the rule. Purchased property takes a cost basis under §1012—the price paid plus costs to acquire—later increased by capital improvements and decreased by depreciation to arrive at adjusted basis. Inherited property takes a §1014 basis equal to fair market value at the date of death (or the alternate valuation date if the estate elects it), and it is automatically treated as long-term regardless of how briefly the heir holds it; this 'step-up' erases the decedent's unrealized appreciation for income-tax purposes.",
          "Gifts are the classic trap because of the dual-basis rule of §1015. For computing a gain on later sale, the donee uses the donor's carryover basis and tacks the donor's holding period. But if the property's fair market value at the date of the gift is less than the donor's basis, then for computing a loss the donee's basis is that lower fair market value. The consequence is a 'dead zone': if the donee later sells at a price between the lower FMV loss basis and the higher carryover gain basis, the donee recognizes neither gain nor loss. This prevents a donor from shifting a built-in loss to the donee.",
          "Amount realized then completes the gain/loss equation. It equals cash plus the fair market value of other property received plus any of the seller's liabilities that the buyer assumes or that are otherwise relieved, reduced by selling expenses—candidates most often forget to add assumed debt. Realized gain or loss is amount realized minus adjusted basis, and realized gain is recognized unless a nonrecognition rule applies. Realized losses are recognized only if allowed: losses on personal-use property are nondeductible, and §267 disallows losses on sales to related parties, though the related buyer may later use that disallowed loss to offset gain on a subsequent sale to an unrelated party.",
        ],
        keyRules: [
          "Cost basis §1012; inherited basis §1014 = date-of-death FMV, automatically long-term.",
          "Gift dual basis §1015: carryover for gain, lower FMV for loss; sale in between = no gain/no loss.",
          "Amount realized includes liabilities relieved; personal-use and §267 related-party losses are disallowed (with a §267 right of offset).",
        ],
      },
      {
        id: "sn2",
        title: "Character, netting and the §1231/recapture interaction",
        testPointIds: ["tp3", "tp4"],
        explanation: [
          "Character determines the rate, and the first job is classification. A capital asset is defined by exclusion in §1221: inventory, accounts receivable arising from the business, depreciable and real property used in a trade or business, and certain self-created intangibles are not capital assets. Depreciable business property held more than a year is §1231 property, which enjoys the best of both worlds—if the year's §1231 transactions net to a gain, that net gain is treated as long-term capital gain (preferential rates); if they net to a loss, the net loss is ordinary (fully deductible against ordinary income). A five-year lookback rule prevents abuse: net §1231 gain is recharacterized as ordinary income to the extent the taxpayer deducted net §1231 losses (as ordinary) in the preceding five years.",
          "Depreciation recapture is computed before §1231 netting and converts some gain to ordinary income. Section 1245, which applies to depreciable personal property such as equipment, recaptures as ordinary income the lesser of the recognized gain or the total depreciation taken—so gain up to the depreciation previously deducted is ordinary, and only gain above original cost is §1231. Section 1250 applies to real property but recaptures only depreciation taken in excess of straight-line; because real property today is depreciated straight-line, §1250 recapture is usually zero, but the 'unrecaptured §1250 gain' equal to the straight-line depreciation taken is taxed at a maximum 25% rate rather than the ordinary rate.",
          "Netting the remaining capital items follows fixed mechanics for individuals: short-term and long-term gains and losses are netted within their groups and then against each other. A net capital loss offsets ordinary income only up to $3,000 per year—a figure fixed by statute, not indexed—with any excess carried forward indefinitely and retaining its short- or long-term character. Net long-term capital gain then benefits from the preferential 0%/15%/20% rates, but the income breakpoints dividing those brackets are adjusted for inflation each year, so a candidate should flag them as 'confirm the current-year amount' rather than commit a specific dollar threshold to memory.",
        ],
        keyRules: [
          "§1221 excludes inventory, receivables, business depreciable/real property (that's §1231) and some self-created intangibles.",
          "§1245 recaptures the lesser of gain or all depreciation (ordinary); §1250 recaptures excess depreciation, with unrecaptured §1250 gain taxed at max 25%.",
          "Net §1231 gain is capital, net §1231 loss ordinary; 5-year lookback recharacterizes gain as ordinary; $3,000 loss offset is fixed, 0/15/20% breakpoints are indexed.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A calendar-year business sells a machine (§1245 property) held four years for $46,000. It originally cost $50,000 and $30,000 of depreciation has been taken, giving an adjusted basis of $20,000. The taxpayer deducted a $4,000 net §1231 loss two years ago and has no other property transactions this year. Determine the amount and character of the gain.",
          steps: [
            "Compute realized/recognized gain: amount realized $46,000 − adjusted basis $20,000 = $26,000 gain.",
            "Apply §1245 recapture first: ordinary income = lesser of the gain ($26,000) or total depreciation ($30,000) = $26,000. Because the sale price ($46,000) is below original cost ($50,000), the entire $26,000 gain is recaptured depreciation and is ordinary income.",
            "Determine the remaining §1231 gain: $26,000 − $26,000 recaptured = $0, so there is no §1231 gain to net.",
            "Consider the five-year lookback: it would recharacterize net §1231 gain as ordinary, but here there is no §1231 gain remaining after recapture, so the lookback has nothing to convert.",
            "Confirm rate character: none of the gain reaches the preferential capital-gain rates; it is fully ordinary.",
          ],
          conclusion:
            "The entire $26,000 gain is ordinary income under §1245 depreciation recapture. Because the machine sold for less than its original cost, all of the gain represents recaptured depreciation, leaving no §1231 gain and nothing for the five-year lookback to affect.",
          markingNotes: [
            "Award marks for computing the $26,000 recognized gain (amount realized − adjusted basis).",
            "Award marks for applying §1245 recapture as the lesser of gain or depreciation and recognizing the sale price is below original cost.",
            "Full marks require concluding the full $26,000 is ordinary with $0 remaining §1231 gain.",
            "Award a mark for correctly noting the five-year lookback has no §1231 gain to recharacterize here.",
          ],
        },
      },
      {
        id: "sn3",
        title: "Like-kind exchanges (§1031) after the TCJA",
        testPointIds: ["tp5"],
        explanation: [
          "Section 1031 defers gain (and loss) when property held for productive use in a trade or business or for investment is exchanged for like-kind property. After the Tax Cuts and Jobs Act, §1031 applies only to real property—personal property and intangibles no longer qualify—so a candidate must first confirm both the relinquished and replacement properties are real property held for business or investment (not inventory and not a personal residence). Real property within the United States is generally like-kind to other U.S. real property regardless of grade or quality (e.g., raw land for an apartment building).",
          "The computation hinges on boot. Recognized gain equals the lesser of the realized gain or the boot received, where boot is any cash or non-like-kind property received, including net relief of liabilities. Losses are never recognized in a like-kind exchange, even if boot is received. The basis of the property received preserves the deferred gain: it equals the fair market value of the replacement property minus the deferred (unrecognized) gain (or plus a deferred loss)—equivalently, the carryover basis plus any gain recognized plus boot paid minus boot received. Deferred (non-simultaneous) exchanges must meet strict timing: the replacement property must be identified within 45 days and the exchange completed within 180 days.",
        ],
        keyRules: [
          "Post-TCJA §1031 applies only to real property held for business/investment; no personal property, inventory, or residences.",
          "Recognized gain = lesser of realized gain or boot received (boot includes net liability relief); losses are never recognized.",
          "Basis of replacement = FMV − deferred gain (+ deferred loss); 45-day identification and 180-day completion deadlines apply.",
        ],
        workedProblem: {
          scenario:
            "TASK-BASED SIMULATION. A taxpayer exchanges investment land with an adjusted basis of $60,000 and a fair market value of $100,000 for like-kind investment real estate worth $85,000 plus $15,000 cash. Compute the realized gain, the recognized gain, and the basis of the replacement real estate.",
          steps: [
            "Compute realized gain: amount realized = $85,000 (replacement real estate) + $15,000 cash = $100,000; less adjusted basis $60,000 = $40,000 realized gain.",
            "Identify boot: the $15,000 cash received is boot.",
            "Recognized gain = lesser of realized gain ($40,000) or boot received ($15,000) = $15,000 recognized.",
            "Deferred gain = $40,000 realized − $15,000 recognized = $25,000 deferred.",
            "Basis of replacement real estate = FMV $85,000 − deferred gain $25,000 = $60,000 (check: carryover $60,000 + recognized $15,000 − boot received $15,000 = $60,000).",
          ],
          conclusion:
            "The taxpayer realizes $40,000 of gain but recognizes only $15,000 (limited to the boot received); the remaining $25,000 is deferred, giving the replacement real estate a substituted basis of $60,000.",
          markingNotes: [
            "Award marks for computing the $40,000 realized gain including cash in the amount realized.",
            "Award marks for limiting recognized gain to the $15,000 boot received.",
            "Full marks require the $60,000 replacement basis, ideally verified by both the FMV−deferred-gain and carryover formulas.",
            "Deduct if the answer recognizes the full realized gain despite the like-kind exchange.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Deferral, exclusion and disallowance: §1033, §121, §453 and wash sales",
        testPointIds: ["tp6", "tp2"],
        explanation: [
          "Several provisions change the timing or existence of recognition, and the exam tests which one is at work. Section 1033 defers gain from an involuntary conversion—property lost to casualty, theft, or condemnation—if the taxpayer reinvests the proceeds in qualifying replacement property within the statutory replacement period; gain is recognized only to the extent the proceeds are not reinvested. Unlike a §1031 exchange, §1033 is elective and measured by whether the amount reinvested at least equals the proceeds received.",
          "Section 121 excludes, rather than defers, gain on the sale of a principal residence: an individual may exclude up to $250,000 of gain ($500,000 for a married couple filing jointly) if they owned and used the home as their principal residence for at least two of the five years before the sale. These exclusion amounts are fixed by statute and are not adjusted for inflation, so unlike the capital-gains rate breakpoints they can be relied on as stated. A reduced exclusion may apply for a sale caused by a change in employment, health, or unforeseen circumstances.",
          "Two mechanical rules round out the module. The §453 installment method spreads gain over the years payments are received: each year's recognized gain equals the payment received multiplied by the gross-profit percentage (gross profit ÷ total contract price)—but depreciation recapture is fully recognized in the year of sale and cannot be deferred. Finally, the §1091 wash-sale rule disallows a loss on the sale of stock or securities if the taxpayer acquires substantially identical securities within 30 days before or after the sale; the disallowed loss is not lost but added to the basis of the replacement securities, preserving it for the future. Together these show the three outcomes candidates must distinguish—deferral (§1033, §453), exclusion (§121), and disallowance with basis preservation (§1091).",
        ],
        keyRules: [
          "§1033 defers involuntary-conversion gain to the extent proceeds are reinvested in qualifying property within the replacement period.",
          "§121 excludes $250k/$500k (MFJ) of principal-residence gain with the 2-of-5-year ownership/use test; these amounts are fixed, not indexed.",
          "§453 installment gain = payment × gross-profit %, but recapture is recognized up front; §1091 disallows wash-sale losses and adds them to replacement basis.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp1", "tp2"],
        style: "Task-based simulation (gift basis)",
        question:
          "A donor gives stock to a donee when the donor's basis is $10,000 and the fair market value is $7,000. Compute the donee's gain or loss if the donee later sells for (a) $12,000, (b) $6,000, and (c) $8,000. No gift tax was paid.",
        answerPlan: [
          "Gain basis = carryover $10,000; loss basis = FMV at gift $7,000 (FMV < basis → dual basis).",
          "(a) sale above both → gain using $10,000.",
          "(b) sale below both → loss using $7,000.",
          "(c) sale between → no gain, no loss.",
        ],
        modelAnswer:
          "Because the fair market value at the date of the gift ($7,000) is less than the donor's basis ($10,000), the dual-basis rule of §1015 applies: the donee uses a $10,000 carryover basis to compute gain and a $7,000 (date-of-gift FMV) basis to compute loss. (a) Selling for $12,000 exceeds both figures, so the donee has a gain of $12,000 − $10,000 = $2,000. (b) Selling for $6,000 is below both figures, so the donee has a loss of $6,000 − $7,000 = ($1,000). (c) Selling for $8,000 falls between the $7,000 loss basis and the $10,000 gain basis, so the donee recognizes neither gain nor loss—the classic 'dead zone' that prevents shifting the donor's built-in loss to the donee.",
        markingGuide: [
          "1 mark: identifying the dual-basis rule because gift-date FMV is below the donor's basis.",
          "1 mark: computing the $2,000 gain in (a) using the $10,000 carryover basis.",
          "1 mark: computing the $1,000 loss in (b) using the $7,000 FMV basis.",
          "1 mark: concluding no gain or loss in (c) for the in-between sale.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3", "tp4"],
        style: "Task-based simulation (recapture & netting)",
        question:
          "A business sells equipment (§1245 property, held 3 years) for $22,000; it cost $30,000 and had $18,000 of accumulated depreciation (adjusted basis $12,000). The taxpayer has no prior §1231 losses in the lookback period and no other property sales this year. State the amount and character of the gain, and note whether preferential rates apply.",
        answerPlan: [
          "Gain = $22,000 − $12,000 = $10,000.",
          "§1245 recapture = lesser of gain ($10,000) or depreciation ($18,000) = $10,000 ordinary (sale below cost).",
          "No remaining §1231 gain; no preferential rate.",
        ],
        modelAnswer:
          "The recognized gain is amount realized $22,000 minus adjusted basis $12,000 = $10,000. Section 1245 recapture applies first and recharacterizes as ordinary income the lesser of the gain ($10,000) or the total depreciation taken ($18,000), which is $10,000. Because the sale price ($22,000) is below the original cost ($30,000), the entire gain represents recaptured depreciation and is ordinary income; there is no gain in excess of cost, so no §1231 gain remains. With no prior §1231 losses in the five-year lookback period and no other §1231 transactions, there is nothing to net or recharacterize. None of the gain qualifies for the preferential 0%/15%/20% long-term capital-gain rates—recaptured depreciation is taxed at ordinary rates.",
        markingGuide: [
          "1 mark: computing the $10,000 recognized gain.",
          "1 mark: applying §1245 recapture as the lesser of gain or depreciation ($10,000).",
          "1 mark: recognizing the sale is below cost so the entire gain is ordinary with no §1231 gain.",
          "1 mark: concluding no preferential capital-gain rate applies.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5", "tp6"],
        style: "Short constructed response (§1031 vs §121 and indexing)",
        question:
          "Compare how gain is treated when an investor exchanges investment real estate under §1031 versus when a married couple sells their principal residence under §121, and explain which figures a candidate should confirm as current-year amounts versus treat as fixed.",
        answerPlan: [
          "§1031: deferral of gain (except boot) into substituted basis; real property only post-TCJA.",
          "§121: exclusion (permanent) up to $250k/$500k with 2-of-5-year test.",
          "Fixed vs indexed: §121 amounts and $3,000 loss limit fixed; 0/15/20% breakpoints indexed.",
        ],
        modelAnswer:
          "Under §1031, gain on an exchange of investment real property is deferred, not eliminated: the investor recognizes gain only to the extent of boot received, and the remaining gain is preserved by reducing the basis of the replacement property, to be recognized on a later taxable disposition. After the TCJA, §1031 applies only to real property held for business or investment. Under §121, gain on the sale of a principal residence is permanently excluded—up to $250,000 for a single filer or $500,000 for a married couple filing jointly—provided the owners owned and used the home as their principal residence for at least two of the five years before sale; any gain above the exclusion is taxable. As for figures, the §121 exclusion amounts ($250,000/$500,000) and the $3,000 net-capital-loss ordinary offset are fixed by statute and can be relied on as stated. By contrast, the 0%/15%/20% long-term capital-gain rate breakpoints are adjusted for inflation annually, so a candidate should confirm the current-year breakpoints for the testing window rather than memorizing a stale threshold.",
        markingGuide: [
          "1 mark: characterizing §1031 as deferral (except boot) via substituted basis, real property only.",
          "1 mark: characterizing §121 as a permanent exclusion with the 2-of-5-year ownership/use test and the $250k/$500k amounts.",
          "1 mark: identifying the §121 amounts and $3,000 loss limit as fixed by statute.",
          "1 mark: identifying the 0/15/20% breakpoints as inflation-indexed to confirm for the current year.",
        ],
      },
    ],
  }),
};
