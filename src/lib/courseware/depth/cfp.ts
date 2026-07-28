import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CFP (Certified Financial Planner) exam-calibrated depth content, keyed by
 * source module id (`cfp-full-m1` .. `cfp-full-m10`).
 *
 * Two design choices run through this file:
 *
 * 1. INTEGRATED CLIENT CASE. A single household — Maya Ellis (52) and David
 *    Ellis (55), married filing jointly, two dependent children (Sofia, 17, and
 *    Leo, 14), David a salaried employee and Maya a self-employed consultant —
 *    recurs across the worked scenarios so candidates practice the CFP exam's
 *    signature skill of integrating cash flow, risk, investments, tax,
 *    retirement, and estate decisions for one family rather than in silos.
 *
 * 2. TAX FIGURES ARE ANNUALLY VARIABLE. The CFP exam is administered against the
 *    tax year in effect at the test date. Every dollar threshold, contribution
 *    limit, exclusion, deduction, bracket, penalty age, and phase-out below is
 *    labeled "[ANNUALLY VARIABLE — verify the current-year figure]" and must be
 *    re-checked against the current IRS/SSA/CFP Board figures before use. The
 *    depth teaches the mechanics and relationships, which are stable; the
 *    specific numbers are not.
 */
export const CFP_DEPTH: Record<string, CoursewareDepth> = {
  "cfp-full-m1": examDepth({
    testPoints: [
      {
        id: "cfp-full-m1-tp1",
        title: "Fiduciary duty: when it applies and its three components",
        priority: "critical",
        examinerFocus:
          "Whether you know the fiduciary duty applies at all times when providing Financial Advice, and can name and apply its three components — Duty of Loyalty, Duty of Care, and Duty to Follow Client Instructions. The exam tests recognition of which duty a fact pattern breaches.",
        typicalQuestionForms: [
          "When does a CFP professional owe a fiduciary duty to a client?",
          "A planner recommends a higher-commission proprietary product without showing it is best for the client. Which duty is breached?",
          "Which fiduciary component requires acting with the care of a prudent professional?",
        ],
        mustKnow: [
          "The fiduciary duty applies at all times when providing Financial Advice to a client.",
          "Duty of Loyalty: place the client's interests first; avoid, or fully disclose and manage, conflicts and obtain informed consent.",
          "Duty of Care: act with the care, skill, prudence, and diligence a prudent professional would use; Duty to Follow Client Instructions: comply with lawful, reasonable directions.",
        ],
        scoringActions: [
          "First confirm the fiduciary duty applies (is this Financial Advice?), then identify the specific duty at issue.",
          "For conflict facts, test both disclosure AND whether the advice actually serves the client.",
        ],
      },
      {
        id: "cfp-full-m1-tp2",
        title: "Financial Advice vs Financial Planning and the practice standards trigger",
        priority: "critical",
        examinerFocus:
          "Distinguishing when an engagement is merely Financial Advice (fiduciary duty applies) from when it rises to Financial Planning (the full Practice Standards for the Financial Planning Process apply), using the Integration Factors.",
        typicalQuestionForms: [
          "What triggers the full financial planning Practice Standards?",
          "Which of the following engagements constitutes Financial Planning rather than Financial Advice?",
        ],
        mustKnow: [
          "Providing Financial Advice triggers the fiduciary duty and disclosure obligations.",
          "When an engagement constitutes Financial Planning, the full seven-step Practice Standards apply.",
          "Integration Factors (number of relevant elements, portion of finances affected, breadth/depth of advice) determine whether advice rises to Financial Planning.",
        ],
        scoringActions: [
          "Apply the Integration Factors before deciding which standards govern.",
          "Do not assume the fiduciary duty only applies to full planning engagements — it applies to all Financial Advice.",
        ],
      },
      {
        id: "cfp-full-m1-tp3",
        title: "Conflicts, disclosure, and informed consent",
        priority: "high",
        examinerFocus:
          "That disclosure alone does not cure a recommendation that harms the client, and that material conflicts must be disclosed clearly enough for informed consent, with compensation accurately described.",
        typicalQuestionForms: [
          "Does disclosing a conflict cure a recommendation that is not in the client's interest?",
          "What must conflict disclosure enable the client to do?",
          "A planner describes a fee-based practice as 'fee-only.' What is wrong?",
        ],
        mustKnow: [
          "Material conflicts must be disclosed clearly enough for the client to give informed consent.",
          "Disclosure does not satisfy the Duty of Loyalty if the recommendation still harms the client.",
          "Compensation must be described accurately (fee-only vs fee-based vs commission).",
        ],
        scoringActions: [
          "Treat disclosure as necessary but not sufficient — the advice must still serve the client.",
          "Flag any mislabeled compensation (e.g., calling fee-based 'fee-only') as a violation.",
        ],
      },
      {
        id: "cfp-full-m1-tp4",
        title: "The Code of Ethics principles and prohibited conduct",
        priority: "high",
        examinerFocus:
          "Recognising the Code of Ethics principles (including acting with integrity, competence, diligence, confidentiality, professionalism, and putting the client first) and identifying prohibited conduct such as fraud, misrepresentation, and commingling.",
        typicalQuestionForms: [
          "Which principle requires acting within one's competence?",
          "Give an example of conduct prohibited under the Standards.",
        ],
        mustKnow: [
          "The Code requires integrity, competence, diligence, confidentiality, professionalism, and putting the client's interests first.",
          "Competence includes knowing one's limits and referring or collaborating when appropriate.",
          "Prohibited conduct includes fraud, material misrepresentation, and commingling client funds.",
        ],
        scoringActions: [
          "Map the described failing to the specific principle or standard.",
          "Treat competence limits as a duty to refer, not to improvise.",
        ],
      },
      {
        id: "cfp-full-m1-tp5",
        title: "Regulatory environment and the stricter-rule principle",
        priority: "medium",
        examinerFocus:
          "The regulatory framework for advisers (Investment Advisers Act; SEC vs state registration) and the principle that a CFP professional follows the more demanding of applicable law or CFP Board standards.",
        typicalQuestionForms: [
          "Who regulates investment advisers?",
          "If the law is less strict than the CFP Board standards, which governs?",
        ],
        mustKnow: [
          "Investment advisers are regulated under the Investment Advisers Act (SEC or state, by size/scope).",
          "CFP Board can discipline members for violations, up to revocation of the right to use the marks.",
          "Follow the stricter of applicable law or CFP Board standards.",
        ],
        scoringActions: [
          "Apply the stricter-rule principle when law and CFP standards diverge.",
          "Separate the regulator's rules from the additional CFP Board obligations.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Ethics and the fiduciary standard are dominant, repeatedly tested themes that decide close outcomes; treat this module as a must-master domain and aim for near-full conversion.",
      timeBudget:
        "About 60–90 seconds per stand-alone item; longer for case-embedded ethics items where you must first extract the decisive fact.",
      answerSequence: [
        "Confirm whether Financial Advice is being provided (fiduciary duty on).",
        "Apply the Integration Factors to decide if the full Practice Standards apply.",
        "Identify the specific duty or principle at issue.",
        "For conflicts, test disclosure AND client benefit before selecting.",
      ],
      qualityChecks: [
        "Did you check that the recommendation actually serves the client, not just that it was disclosed?",
        "Is the compensation labeled accurately (fee-only vs fee-based)?",
        "Did you apply the stricter of law or CFP standards?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m1-sn1",
        title: "The fiduciary duty as the exam's organizing principle",
        testPointIds: ["cfp-full-m1-tp1", "cfp-full-m1-tp2"],
        explanation: [
          "The fiduciary standard is the defining feature of the CFP marks, and it applies at all times when a CFP professional is providing Financial Advice — not only during a formal financial planning engagement. This is the single most important framing on the exam: before analysing any ethics fact pattern, confirm that Financial Advice is being given, which switches the fiduciary duty on, and then identify which of its three components is implicated.",
          "The duty has three components. The Duty of Loyalty requires placing the client's interests above the planner's and the firm's, and either avoiding conflicts or fully disclosing and managing them with the client's informed consent. The Duty of Care requires acting with the care, skill, prudence, and diligence that a prudent professional would exercise given the client's goals and circumstances. The Duty to Follow Client Instructions requires complying with the client's lawful and reasonable directions (and the engagement's terms).",
          "Whether the broader Practice Standards apply depends on the Integration Factors — how many relevant elements of the client's situation are involved, what portion of the client's finances is affected, and how broad and deep the advice is. When advice integrates enough elements, the engagement becomes Financial Planning and the full seven-step process standards apply. The exam rewards candidates who separate 'is the fiduciary duty on?' (always, for advice) from 'do the full planning standards apply?' (only when the engagement rises to planning).",
        ],
        keyRules: [
          "Fiduciary duty applies at all times when providing Financial Advice.",
          "Three components: Loyalty, Care, Follow Client Instructions.",
          "Integration Factors determine whether advice becomes Financial Planning (triggering the full Practice Standards).",
        ],
      },
      {
        id: "cfp-full-m1-sn2",
        title: "Conflicts and disclosure: necessary but not sufficient",
        testPointIds: ["cfp-full-m1-tp3", "cfp-full-m1-tp4"],
        explanation: [
          "A recurring trap is the belief that disclosing a conflict is enough. It is not. Disclosure is a precondition for managing a conflict, but the Duty of Loyalty is only satisfied if the recommendation actually serves the client's best interest. A planner who discloses that a recommended proprietary fund pays a higher commission has not cured the problem if a comparable lower-cost fund would better serve the client — the disclosure does not transform a disloyal recommendation into a loyal one.",
          "When a material conflict does exist, the disclosure must be specific enough that the client can give informed consent — understanding the nature of the conflict and how it could affect the advice. Compensation descriptions are a frequent exam target: 'fee-only' means compensation solely from client fees with no commissions anywhere in the firm's related activity, while 'fee-based' blends fees and commissions. Mislabeling fee-based as fee-only is a misrepresentation. Underlying all of this are the Code principles — integrity, competence, diligence, confidentiality, professionalism, and client-first — and prohibitions on fraud, misrepresentation, and commingling client funds.",
        ],
        keyRules: [
          "Disclosure is necessary but not sufficient; the advice must still serve the client.",
          "Material conflict disclosure must enable informed consent.",
          "Compensation labels must be accurate (fee-only vs fee-based vs commission).",
        ],
        workedProblem: {
          scenario:
            "David and Maya Ellis engage a CFP professional for advice on rolling David's old 401(k). The planner's firm offers a proprietary IRA product that pays the planner a higher payout than a comparable lower-cost IRA available on the same platform. The planner discloses in writing that the proprietary product pays more, then recommends it. Evaluate whether the planner has met the fiduciary duty.",
          steps: [
            "Confirm the fiduciary duty is engaged: the planner is providing Financial Advice on a rollover, so the duty applies at all times here.",
            "Identify the conflict: the planner earns more from the proprietary product than from a comparable lower-cost alternative — a material conflict of interest.",
            "Assess the disclosure: the planner disclosed the higher payout in writing, satisfying the disclosure precondition and enabling potential informed consent.",
            "Apply the Duty of Loyalty test: disclosure does not cure the conflict; the planner must still show the recommended product is in the Ellises' best interest despite the higher cost.",
            "Compare alternatives: if the lower-cost IRA offers comparable features and better net outcomes, recommending the pricier proprietary product fails the best-interest test regardless of disclosure.",
          ],
          conclusion:
            "The written disclosure alone does not satisfy the fiduciary duty. Unless the planner can demonstrate the proprietary product is genuinely in the Ellises' best interest relative to the comparable lower-cost option, recommending it breaches the Duty of Loyalty. Disclosure manages a conflict; it does not license a self-interested recommendation.",
          markingNotes: [
            "Full credit requires stating that disclosure is necessary but not sufficient and that the advice must independently serve the client.",
            "Concluding the planner is 'fine because he disclosed' is the classic error and earns no credit.",
          ],
        },
      },
      {
        id: "cfp-full-m1-sn3",
        title: "The Practice Standards and the seven-step process link",
        testPointIds: ["cfp-full-m1-tp2", "cfp-full-m1-tp4"],
        explanation: [
          "When an engagement rises to Financial Planning, the CFP Board's Practice Standards require the planner to follow the seven-step financial planning process: understand the client's circumstances; identify and select goals; analyse the current course of action and potential alternatives; develop recommendations; present recommendations; implement; and monitor and update. The Standards define specific responsibilities at each step, and the exam frequently asks which step a described action belongs to.",
          "The Standards also require clear scope, engagement terms, and disclosures at the outset, and documentation that supports accountability. Competence runs through all of it: a planner must work within their expertise and refer to or collaborate with other professionals (an attorney for drafting documents, a CPA for complex tax) when a matter exceeds their competence. Recognising the boundary of one's competence is itself an ethical obligation, not a weakness.",
        ],
        keyRules: [
          "Financial Planning engagements follow the seven-step Practice Standards.",
          "Scope, terms, and material disclosures come at engagement.",
          "Competence includes referring or collaborating beyond one's expertise.",
        ],
      },
      {
        id: "cfp-full-m1-sn4",
        title: "Regulation and the stricter-rule principle",
        testPointIds: ["cfp-full-m1-tp5"],
        explanation: [
          "Financial planners operate inside a legal framework as well as the CFP Board's standards. Investment advisers are regulated under the Investment Advisers Act, registering with the SEC or the states depending on assets under management and scope, and are subject to their own fiduciary and disclosure obligations. Broker-dealer conduct is governed by separate rules. Prohibited conduct — fraud, misrepresentation, commingling — can bring both regulatory sanctions and CFP Board discipline, up to revocation of the right to use the marks.",
          "The governing principle when the two frameworks diverge is to follow the stricter standard. If applicable law permits something the CFP Board standards prohibit (or requires less than the standards require), the CFP professional must meet the more demanding CFP obligation. The exam tests this by presenting a scenario where legal compliance alone would not satisfy the CFP standards, and the correct answer applies the higher bar.",
        ],
        keyRules: [
          "Advisers are regulated under the Investment Advisers Act (SEC or state).",
          "CFP Board can discipline up to revocation of the marks.",
          "Follow the stricter of law or CFP Board standards.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m1-p1",
        testPointIds: ["cfp-full-m1-tp1", "cfp-full-m1-tp3"],
        style: "Case-embedded ethics item",
        question:
          "A CFP professional advises Maya Ellis to move her portfolio into a share class that pays the planner a trailing commission, disclosing the commission but not comparing it to an available lower-cost share class with identical holdings. Which fiduciary component is most at risk, and what should the planner have done?",
        answerPlan: [
          "Confirm the fiduciary duty applies.",
          "Identify the duty at issue.",
          "State the corrective action.",
        ],
        modelAnswer:
          "Because the planner is providing Financial Advice, the fiduciary duty applies. The component most at risk is the Duty of Loyalty: disclosing the commission does not cure the conflict if an available lower-cost share class with identical holdings would better serve Maya. The planner should have compared the share classes, recommended the option in Maya's best interest, and disclosed and managed the conflict clearly enough for informed consent. Disclosure is necessary but not sufficient — the recommendation itself must serve the client.",
        markingGuide: [
          "Confirms the fiduciary duty applies (Financial Advice).",
          "Identifies the Duty of Loyalty as breached.",
          "States disclosure is insufficient and the lower-cost option should have been considered/recommended.",
        ],
      },
      {
        id: "cfp-full-m1-p2",
        testPointIds: ["cfp-full-m1-tp2"],
        style: "Standards-trigger MCQ",
        question:
          "A CFP professional agrees to help the Ellises with a comprehensive review covering cash flow, insurance, investments, taxes, retirement, and estate goals. Does this engagement trigger the full financial planning Practice Standards, and why?",
        answerPlan: [
          "Apply the Integration Factors.",
          "State the resulting standard.",
        ],
        modelAnswer:
          "Yes. Applying the Integration Factors — the number of relevant financial elements involved, the portion of the client's finances affected, and the breadth and depth of the advice — this engagement covers many integrated elements across most of the Ellises' finances, so it constitutes Financial Planning. That triggers the full seven-step Practice Standards, requiring the planner to understand circumstances, identify goals, analyse, develop and present recommendations, implement, and monitor, with appropriate scope, disclosures, and documentation.",
        markingGuide: [
          "Applies the Integration Factors to classify the engagement.",
          "Concludes it is Financial Planning.",
          "States the full seven-step Practice Standards apply.",
        ],
      },
      {
        id: "cfp-full-m1-p3",
        testPointIds: ["cfp-full-m1-tp4", "cfp-full-m1-tp5"],
        style: "Short-answer conduct item",
        question:
          "A planner is asked by a client to implement an estate strategy that requires drafting a complex trust, an area outside the planner's expertise, and notices the client's instruction would also violate a securities regulation. Explain the planner's obligations regarding competence and the stricter-rule principle.",
        answerPlan: [
          "Address the competence obligation.",
          "Address the unlawful instruction.",
          "Apply the stricter-rule principle.",
        ],
        modelAnswer:
          "On competence, the planner must recognise the trust drafting exceeds their expertise and refer the client to, or collaborate with, a qualified attorney rather than improvising — acting within one's competence is an ethical duty. On the instruction, the Duty to Follow Client Instructions extends only to lawful, reasonable directions; the planner must not implement an instruction that violates a securities regulation. Where the law and CFP standards differ, the planner follows the stricter requirement, so even if some conduct were technically permitted, the planner must meet the higher CFP obligation and decline the unlawful step.",
        markingGuide: [
          "States the planner must refer/collaborate for the trust (competence).",
          "States the planner must not follow an unlawful instruction.",
          "Applies the stricter-rule principle.",
        ],
      },
    ],
  }),

  "cfp-full-m2": examDepth({
    testPoints: [
      {
        id: "cfp-full-m2-tp1",
        title: "The seven-step financial planning process",
        priority: "critical",
        examinerFocus:
          "Recalling the seven steps in order and matching a described planner action to its correct step. The process is the backbone that integrates every other topic in case questions.",
        typicalQuestionForms: [
          "What is the first step of the financial planning process?",
          "A planner is comparing alternative strategies against the client's goals. Which step is this?",
        ],
        mustKnow: [
          "Steps: understand circumstances; identify/select goals; analyse current course and alternatives; develop recommendations; present recommendations; implement; monitor and update.",
          "Each step has defined planner responsibilities under the Practice Standards.",
          "The process is iterative — new information can reopen earlier steps.",
        ],
        scoringActions: [
          "Name the exact step before answering process questions.",
          "Watch for cases where earlier steps must be revisited.",
        ],
      },
      {
        id: "cfp-full-m2-tp2",
        title: "Data gathering: qualitative and quantitative",
        priority: "high",
        examinerFocus:
          "That effective planning requires both quantitative data (income, assets, liabilities) and qualitative data (values, risk tolerance, goals), and that assumptions must be reasonable and documented.",
        typicalQuestionForms: [
          "Why gather qualitative as well as quantitative data?",
          "What is required of planning assumptions?",
        ],
        mustKnow: [
          "Collect quantitative (income, assets, liabilities, cash flows) and qualitative (values, attitudes, risk tolerance) data.",
          "Assumptions (inflation, returns, longevity) must be reasonable and documented.",
          "Incomplete data limits the reliability of recommendations.",
        ],
        scoringActions: [
          "Insist on both data types before analysis.",
          "Require assumptions to be reasonable, documented, and disclosed.",
        ],
      },
      {
        id: "cfp-full-m2-tp3",
        title: "Goal identification and prioritization",
        priority: "high",
        examinerFocus:
          "Clarifying, quantifying, and prioritising client goals, and resolving conflicts among goals with the client rather than for them.",
        typicalQuestionForms: [
          "How should conflicting client goals be handled?",
          "What makes a goal usable for planning?",
        ],
        mustKnow: [
          "Goals must be clarified, quantified, and time-bound to be usable.",
          "Prioritisation is done with the client, reflecting their values.",
          "Conflicts among goals are surfaced and resolved collaboratively.",
        ],
        scoringActions: [
          "Quantify and time-bound goals before analysing feasibility.",
          "Prioritise with the client, not unilaterally.",
        ],
      },
      {
        id: "cfp-full-m2-tp4",
        title: "Developing and presenting recommendations",
        priority: "high",
        examinerFocus:
          "That recommendations must be suitable, specific, prioritised, and aligned to goals, with alternatives and trade-offs presented in plain language, and assumptions/conflicts disclosed.",
        typicalQuestionForms: [
          "What makes a recommendation suitable and actionable?",
          "Why present alternatives and trade-offs?",
        ],
        mustKnow: [
          "Recommendations must be suitable, specific, prioritised, and goal-aligned.",
          "Alternatives and trade-offs are evaluated against goals and constraints.",
          "Present in plain language with rationale, expected impact, assumptions, and disclosures.",
        ],
        scoringActions: [
          "Check each recommendation traces back to a prioritised goal.",
          "Present trade-offs, not a single unexplained option.",
        ],
      },
      {
        id: "cfp-full-m2-tp5",
        title: "Implementation and monitoring responsibilities",
        priority: "medium",
        examinerFocus:
          "Clarifying who is responsible for each implementation action and by when, and designing monitoring that responds to life events, as part of the ongoing fiduciary relationship.",
        typicalQuestionForms: [
          "What should implementation responsibilities specify?",
          "What events should trigger a plan review?",
        ],
        mustKnow: [
          "Implementation should specify responsibilities, actions, and timelines.",
          "Monitoring updates the plan as circumstances change.",
          "Life events (job change, birth, inheritance, death) trigger reviews.",
        ],
        scoringActions: [
          "Assign each implementation action an owner and a deadline.",
          "Tie monitoring to defined life-event triggers.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "The planning process frames every case set; mastering step identification converts both stand-alone process items and the structure of longer case questions.",
      timeBudget:
        "60–90 seconds per stand-alone item; budget extra reading time for multi-question case vignettes anchored on the process.",
      answerSequence: [
        "Identify which of the seven steps the action or question concerns.",
        "Verify data completeness before endorsing any analysis step.",
        "Confirm recommendations trace to prioritised goals.",
        "For monitoring, check for a life-event trigger.",
      ],
      qualityChecks: [
        "Did you name the exact step rather than a general phase?",
        "Are both qualitative and quantitative data present before analysis?",
        "Do recommendations align to prioritised goals with trade-offs shown?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m2-sn1",
        title: "The seven steps and how the exam uses them",
        testPointIds: ["cfp-full-m2-tp1", "cfp-full-m2-tp3"],
        explanation: [
          "The CFP Board's seven-step process is both a professional workflow and the exam's structural spine. In order, the steps are: understand the client's personal and financial circumstances; identify and select goals; analyse the client's current course of action and potential alternatives; develop the recommendations; present the recommendations; implement the recommendations; and monitor progress and update. Each step carries defined responsibilities under the Practice Standards, and a large share of case questions simply ask which step a described activity belongs to.",
          "The process is iterative, not strictly linear. New information discovered while analysing or implementing can send the planner back to understand circumstances or re-select goals. Goal work — clarifying, quantifying, and time-bounding goals, then prioritising them with the client — sits early and drives everything downstream, because recommendations are judged by how well they advance the client's prioritised goals. When goals conflict (fund college versus retire early), the planner surfaces the tension and resolves it collaboratively, respecting the client's values.",
        ],
        keyRules: [
          "Steps: understand, identify goals, analyse, develop, present, implement, monitor.",
          "The process is iterative — later findings can reopen earlier steps.",
          "Goals must be quantified, time-bound, and prioritised with the client.",
        ],
      },
      {
        id: "cfp-full-m2-sn2",
        title: "Data, assumptions, and analysis, worked",
        testPointIds: ["cfp-full-m2-tp2", "cfp-full-m2-tp4"],
        explanation: [
          "Good analysis rests on complete data and defensible assumptions. Quantitative data (income, assets, liabilities, insurance, cash flows) tells the planner what the client has; qualitative data (values, attitudes, risk tolerance, family dynamics) tells the planner what the client wants and can tolerate. Both are required — a technically optimal plan that ignores a client's low risk tolerance or strong legacy motive will fail in practice. Assumptions about inflation, investment returns, and longevity must be reasonable, documented, and disclosed, because small assumption changes can swing conclusions materially.",
          "When developing recommendations, the planner generates alternatives, evaluates their trade-offs against the client's prioritised goals and constraints, and selects options that are suitable, specific, and actionable. Presenting a single option without trade-offs is a common error; the client should understand the rationale, expected impact, and the alternatives considered. The exam frequently tests whether a recommendation actually traces back to a stated, prioritised goal and whether the underlying assumptions were reasonable.",
        ],
        keyRules: [
          "Gather both quantitative and qualitative data before analysing.",
          "Assumptions must be reasonable, documented, and disclosed.",
          "Recommendations must be suitable, specific, and goal-aligned, with trade-offs shown.",
        ],
        workedProblem: {
          scenario:
            "The Ellises say their top goal is Sofia's college in one year (estimated four-year cost, present value roughly $140,000), their second is retirement in about 12 years, and their third is a kitchen renovation. They have $160,000 in a taxable brokerage account and stable positive cash flow. A junior planner proposes using the entire $160,000 to max out retirement accounts now. Evaluate this against the planning process.",
          steps: [
            "Check the step: developing/selecting a recommendation requires alignment with prioritised goals identified earlier.",
            "Review the prioritisation: college (near-term, 1 year) is the client's stated top goal; retirement is second; the renovation third.",
            "Test the proposal against priorities: sinking all $160,000 into retirement accounts ignores the top, imminent college goal and could force high-cost borrowing for tuition.",
            "Consider liquidity and time horizon: the college goal is one year out, so its funding should be in low-volatility, liquid assets, not locked in retirement accounts with access restrictions.",
            "Reframe the recommendation: reserve enough of the taxable account for the near-term college need (in appropriate low-risk vehicles), then direct remaining cash flow and assets toward retirement, with the renovation last.",
          ],
          conclusion:
            "The junior planner's proposal fails because it does not trace to the client's prioritised goals and mismatches the college goal's short horizon with illiquid retirement accounts. A compliant recommendation funds the top-priority, near-term college goal first with suitable liquid assets, then advances retirement, then the renovation.",
          markingNotes: [
            "Full credit requires linking the recommendation back to the client's prioritisation and the horizon/liquidity mismatch.",
            "Endorsing the max-out-retirement proposal without addressing the imminent college goal earns no credit.",
          ],
        },
      },
      {
        id: "cfp-full-m2-sn3",
        title: "Presenting, implementing, and monitoring",
        testPointIds: ["cfp-full-m2-tp4", "cfp-full-m2-tp5"],
        explanation: [
          "Presentation turns analysis into client understanding. The planner explains each recommendation in plain language, with its rationale, expected impact, the alternatives considered, and the assumptions and conflicts behind it, so the client can make an informed decision. Recommendations should be prioritised so the client knows what to do first. Poor presentation — jargon, a single take-it-or-leave-it option, hidden assumptions — undermines even sound analysis.",
          "Implementation clarifies who does what and by when: some actions are the planner's, some the client's, and some belong to other professionals (attorney, CPA, insurance agent). Monitoring then keeps the plan alive — the planner tracks progress against goals and updates the plan as circumstances change. Life events such as a job change, a birth, an inheritance, a divorce, or a death should trigger a review, and ongoing monitoring is part of the fiduciary relationship when the engagement includes it.",
        ],
        keyRules: [
          "Present in plain language with rationale, impact, alternatives, and disclosures.",
          "Implementation assigns owners and timelines to each action.",
          "Monitoring updates the plan and is triggered by life events.",
        ],
      },
      {
        id: "cfp-full-m2-sn4",
        title: "Integrating the process across planning domains",
        testPointIds: ["cfp-full-m2-tp1", "cfp-full-m2-tp3"],
        explanation: [
          "The seven-step process is what makes CFP planning integrated rather than piecemeal. A single recommendation often touches several domains at once: funding college affects cash flow, taxes, and financial aid; a Roth conversion affects taxes, retirement income, and estate outcomes; buying permanent life insurance affects cash flow, risk management, and estate liquidity. The process forces the planner to consider these interactions instead of optimising one area in isolation.",
          "On the exam, the longer case sets exploit this integration: a single Ellis-style household is described once, and successive questions apply different domains to the same facts. Candidates who anchor on the process — understanding circumstances and goals first, then analysing across domains, then developing coordinated recommendations — handle these efficiently, because they reuse the shared facts and check each recommendation for cross-domain effects.",
        ],
        keyRules: [
          "The process integrates domains; recommendations often cross cash flow, tax, risk, retirement, and estate.",
          "Case sets reuse one household across multiple domains.",
          "Check each recommendation for cross-domain effects.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m2-p1",
        testPointIds: ["cfp-full-m2-tp1"],
        style: "Step-identification MCQ",
        question:
          "During an engagement with the Ellises, the planner compares two strategies for funding college — a systematic withdrawal from the taxable account versus a home-equity line — weighing each against the family's goals and cash flow. Which step of the financial planning process is the planner performing?",
        answerPlan: [
          "Locate the activity in the seven steps.",
          "Justify the classification.",
        ],
        modelAnswer:
          "The planner is analysing the current course of action and potential alternatives — the third step of the process. Comparing two funding strategies and weighing their trade-offs against the client's goals and cash flow is analysis of alternatives, which precedes developing and presenting a specific recommendation. It is not yet the develop or present step, because the planner is still evaluating options rather than proposing a chosen course.",
        markingGuide: [
          "Identifies the analyse-current-course-and-alternatives step.",
          "Distinguishes it from developing/presenting recommendations.",
          "Ties the reasoning to weighing trade-offs against goals.",
        ],
      },
      {
        id: "cfp-full-m2-p2",
        testPointIds: ["cfp-full-m2-tp2", "cfp-full-m2-tp4"],
        style: "Data-and-assumptions item",
        question:
          "A planner builds a retirement projection for the Ellises using an 11% annual return assumption and no inflation adjustment, and gathers only their account balances (not their spending or risk tolerance). Identify two flaws and how to correct them.",
        answerPlan: [
          "Critique the assumptions.",
          "Critique the data gathered.",
          "State corrections.",
        ],
        modelAnswer:
          "First, the assumptions are unreasonable: an 11% return with no inflation adjustment overstates real growth; the planner should use a reasonable, documented return assumption and adjust for inflation so real spending power is captured. Second, the data is incomplete: gathering only balances, without spending needs and risk tolerance, prevents a reliable projection or a suitable allocation. The planner should collect quantitative cash-flow data and qualitative risk-tolerance data, document the assumptions, and disclose them, since incomplete data and unreasonable assumptions make recommendations unreliable.",
        markingGuide: [
          "Identifies the unreasonable return/no-inflation assumption and corrects it.",
          "Identifies the incomplete data and specifies spending/risk-tolerance data.",
          "Notes assumptions must be reasonable, documented, and disclosed.",
        ],
      },
      {
        id: "cfp-full-m2-p3",
        testPointIds: ["cfp-full-m2-tp5"],
        style: "Monitoring item",
        question:
          "Eighteen months after the Ellises' plan is implemented, Maya receives a $250,000 inheritance and David changes employers. Explain why these events matter to the planning process and what the planner should do.",
        answerPlan: [
          "Explain why life events matter.",
          "Identify affected areas.",
          "State the monitoring action.",
        ],
        modelAnswer:
          "Both are life events that should trigger a plan review, because monitoring requires updating the plan as circumstances change. The inheritance changes the Ellises' net worth, goal feasibility, tax situation, and possibly their estate plan; David's job change affects retirement plan options, benefits, insurance coverage, and cash flow. The planner should revisit the client's circumstances and goals, re-analyse across the affected domains (cash flow, tax, retirement, risk, estate), and update recommendations accordingly, documenting the changes.",
        markingGuide: [
          "States life events trigger a plan review under monitoring.",
          "Identifies multiple affected domains for each event.",
          "Describes revisiting circumstances/goals and updating the plan.",
        ],
      },
    ],
  }),

  "cfp-full-m3": examDepth({
    testPoints: [
      {
        id: "cfp-full-m3-tp1",
        title: "Cash-flow, net-worth statements, and financial ratios",
        priority: "high",
        examinerFocus:
          "Building and interpreting personal financial statements and applying benchmark ratios (emergency fund, savings rate, debt-to-income) to diagnose financial health.",
        typicalQuestionForms: [
          "How is net worth calculated?",
          "What does the debt-to-income ratio indicate?",
          "How many months of expenses should an emergency fund cover?",
        ],
        mustKnow: [
          "Net worth = assets - liabilities; cash-flow statement tracks inflows and outflows.",
          "Emergency fund typically covers 3–6 months of essential expenses (more if income is volatile).",
          "Key ratios: savings rate, debt-to-income, and emergency-fund (months of expenses).",
        ],
        scoringActions: [
          "Compute net worth and ratios directly from the given statement.",
          "Interpret each ratio against its benchmark before answering.",
        ],
      },
      {
        id: "cfp-full-m3-tp2",
        title: "Time value of money: PV/FV and annuities",
        priority: "critical",
        examinerFocus:
          "Fluent TVM computation — PV, FV, PMT, N, I/Y — and distinguishing ordinary annuities from annuities due, plus matching compounding to payment frequency. TVM appears across the entire exam.",
        typicalQuestionForms: [
          "Compute the lump sum needed today to fund a future goal.",
          "How does an annuity due differ from an ordinary annuity in a computation?",
        ],
        mustKnow: [
          "FV = PV × (1 + r)^n; PV = FV ÷ (1 + r)^n.",
          "Annuity due = ordinary annuity × (1 + r) (payments at period start).",
          "Match compounding periods to payment frequency (set N and I/Y consistently).",
        ],
        scoringActions: [
          "Write out the known TVM variables before computing.",
          "Confirm BGN/END mode for annuities.",
        ],
      },
      {
        id: "cfp-full-m3-tp3",
        title: "Loan amortization, effective rates, and debt strategy",
        priority: "high",
        examinerFocus:
          "Understanding how amortizing payments split between interest and principal over time, effective vs nominal rates, and comparing avalanche vs snowball repayment and refinancing decisions.",
        typicalQuestionForms: [
          "Why does the principal portion of a payment grow over time?",
          "When is refinancing financially justified?",
          "Compute the effective annual rate given a nominal rate and compounding.",
        ],
        mustKnow: [
          "Amortizing loans allocate each payment between interest and principal; the principal share grows over time.",
          "EAR = (1 + nominal/m)^m - 1; EAR exceeds the nominal rate with intra-year compounding.",
          "Avalanche (highest-rate first) minimizes interest; snowball (smallest balance) aids motivation; refinance when savings exceed costs over the horizon.",
        ],
        scoringActions: [
          "Convert nominal to effective rates when comparing loans.",
          "Weigh refinancing savings against costs over the expected holding period.",
        ],
      },
      {
        id: "cfp-full-m3-tp4",
        title: "Education funding vehicles and financial aid impact",
        priority: "high",
        examinerFocus:
          "Comparing 529 plans, Coverdell ESAs, and UTMA/UGMA custodial accounts on tax treatment, control, and financial-aid impact, and computing funding needs via TVM. Tax rules and limits are annually variable.",
        typicalQuestionForms: [
          "What is the main tax benefit of a 529 plan?",
          "How does account ownership affect financial aid?",
          "Compute the required savings to fund a future education cost.",
        ],
        mustKnow: [
          "529 plans grow tax-free for qualified education expenses; contribution/gift-tax treatment is [ANNUALLY VARIABLE — verify the current-year figure].",
          "Coverdell ESAs have lower contribution limits [ANNUALLY VARIABLE — verify] but broader flexibility; UTMA/UGMA are the child's asset at majority.",
          "Account ownership affects financial-aid treatment (parent-owned vs student-owned assets are weighted differently).",
        ],
        scoringActions: [
          "Match each vehicle to its tax treatment, control, and aid impact.",
          "Label any contribution/limit figure as annually variable and verify current-year values.",
        ],
      },
      {
        id: "cfp-full-m3-tp5",
        title: "Emergency funds and credit management",
        priority: "medium",
        examinerFocus:
          "Sizing emergency funds to income volatility, prioritizing high-cost revolving debt, and understanding drivers of credit scores (payment history, utilization).",
        typicalQuestionForms: [
          "How large should an emergency fund be, and why does it vary?",
          "Which debts should generally be repaid first?",
        ],
        mustKnow: [
          "Emergency funds cover 3–6 months of essential expenses, more for volatile or single-earner income.",
          "High-cost revolving debt (credit cards) is generally prioritized for repayment.",
          "Credit scores are driven mainly by on-time payment history and low utilization.",
        ],
        scoringActions: [
          "Scale the emergency fund to the client's income stability.",
          "Prioritize the highest-rate debt for repayment unless behavioral factors dominate.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "TVM computations recur across the whole exam, so fluency here pays dividends everywhere; aim to convert all cash-flow and TVM items and most education-funding items.",
      timeBudget:
        "About 90–120 seconds for multi-step TVM/amortization items; 60 seconds for ratio and definitional items.",
      answerSequence: [
        "For TVM, list knowns (PV, FV, PMT, N, I/Y) and set BGN/END and compounding.",
        "For statements, compute net worth and the relevant ratio, then interpret vs benchmark.",
        "For education funding, match vehicle features and label tax figures as annually variable.",
        "For debt, convert to effective rates and weigh refinancing costs vs savings.",
      ],
      qualityChecks: [
        "Did you set the calculator to the correct annuity mode and compounding frequency?",
        "Did you separate accumulation from distribution phases in funding problems?",
        "Did you flag every tax/limit figure as annually variable?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m3-sn1",
        title: "Financial statements and ratio diagnosis",
        testPointIds: ["cfp-full-m3-tp1", "cfp-full-m3-tp5"],
        explanation: [
          "Two statements anchor personal financial analysis. The net-worth (balance-sheet) statement lists assets and liabilities at a point in time, with net worth equal to assets minus liabilities. The cash-flow statement tracks inflows and outflows over a period, revealing whether the household runs a surplus (which can fund goals and debt reduction) or a deficit. Building these correctly is a prerequisite for every downstream recommendation.",
          "Ratios turn the statements into diagnosis. The emergency-fund ratio measures months of essential expenses covered by liquid assets, with a typical target of three to six months (more when income is volatile or there is a single earner). The savings rate measures savings as a share of gross income, and debt-to-income measures debt service against income. Comparing each ratio to its benchmark flags priorities — a thin emergency fund or a high debt-to-income ratio points to where the plan should act first.",
        ],
        keyRules: [
          "Net worth = assets - liabilities.",
          "Emergency fund: 3–6 months of essential expenses (more if volatile).",
          "Diagnose with savings rate, debt-to-income, and emergency-fund ratios vs benchmarks.",
        ],
      },
      {
        id: "cfp-full-m3-sn2",
        title: "Time value of money, worked across phases",
        testPointIds: ["cfp-full-m3-tp2", "cfp-full-m3-tp4"],
        explanation: [
          "Time value of money is the exam's most reused computational skill. The core relationships are FV = PV × (1 + r)^n and PV = FV ÷ (1 + r)^n, extended to level payment streams (annuities). The critical mechanical distinctions are annuity timing — an ordinary annuity pays at period end, an annuity due pays at period start, so annuity due = ordinary annuity × (1 + r) — and matching the compounding frequency to the payment frequency by setting N and I/Y consistently (e.g., monthly payments require monthly periods and a monthly rate).",
          "Funding problems usually have two phases. In the accumulation phase, the client saves toward a future target; in the distribution phase, the accumulated sum is drawn down (for tuition or retirement spending). Separating the phases prevents errors: first find the amount needed at the goal date (often the PV of a future stream of costs), then solve for the savings required to reach it. Education funding is the classic two-phase case, and its vehicles carry tax and aid consequences layered on top of the math.",
        ],
        keyRules: [
          "FV = PV × (1 + r)^n; PV = FV ÷ (1 + r)^n.",
          "Annuity due = ordinary annuity × (1 + r); match compounding to payments.",
          "Separate accumulation from distribution phases in funding problems.",
        ],
        formulas: [
          "FV = PV × (1 + r)^n",
          "PV = FV ÷ (1 + r)^n",
          "Annuity due value = ordinary annuity value × (1 + r)",
          "EAR = (1 + nominal/m)^m - 1",
        ],
        workedProblem: {
          scenario:
            "The Ellises want to fund Leo's college, estimated at $50,000 per year for four years, with the first payment due in 4 years (assume payments at the start of each college year). They can earn 6% annually. Compute (a) the lump sum needed 4 years from now at the start of college, and (b) the single deposit they must make today to reach that amount. Note where tax-advantaged vehicles would layer on.",
          steps: [
            "Recognise the distribution phase: four annual payments of $50,000 at the start of each year is a 4-payment annuity due beginning at the college start date.",
            "Compute the ordinary-annuity present value at college start: PV_ordinary = 50,000 × [1 - (1.06)^-4] / 0.06 ≈ 50,000 × 3.4651 ≈ $173,255.",
            "Convert to annuity due (payments at year start): multiply by (1 + r): $173,255 × 1.06 ≈ $183,650 needed at the start of college.",
            "Compute the accumulation phase: discount that lump sum back 4 years to today at 6%: PV_today = 183,650 ÷ (1.06)^4 ≈ 183,650 ÷ 1.2625 ≈ $145,466.",
            "Layer on tax vehicles: holding the accumulation in a 529 plan lets the growth be tax-free for qualified expenses, reducing the effective cost versus a taxable account — with contribution/gift-tax treatment [ANNUALLY VARIABLE — verify the current-year figure].",
          ],
          conclusion:
            "The Ellises need about $183,650 at the start of college (a 4-year annuity due of $50,000 at 6%), which requires a single deposit of roughly $145,466 today. Using a 529 plan for the accumulation improves the after-tax result, subject to current-year contribution and gift-tax rules that must be verified.",
          markingNotes: [
            "Full credit requires treating the tuition stream as an annuity due and separating the accumulation and distribution phases.",
            "Using an ordinary annuity (omitting the ×1.06 due adjustment) or mismatching phases loses computation marks.",
            "Any tax/limit figure must be flagged as annually variable.",
          ],
        },
      },
      {
        id: "cfp-full-m3-sn3",
        title: "Amortization, effective rates, and debt strategy",
        testPointIds: ["cfp-full-m3-tp3", "cfp-full-m3-tp5"],
        explanation: [
          "In an amortizing loan, each level payment covers the interest accrued on the outstanding balance plus some principal. Early in the loan the balance is large, so most of the payment is interest and little is principal; as the balance falls, the interest portion shrinks and the principal portion grows — which is why the principal share of each payment rises over time. Comparing loans requires effective rates: EAR = (1 + nominal/m)^m - 1 converts a nominal rate with intra-year compounding into a comparable annual figure, and EAR exceeds the stated nominal rate whenever there is more than one compounding period per year.",
          "Debt strategy blends math and behavior. The avalanche method targets the highest-interest-rate debt first, minimizing total interest paid; the snowball method targets the smallest balance first, producing quick wins that sustain motivation. Refinancing is justified when the interest savings over the expected holding period exceed the refinancing costs. High-cost revolving debt (credit cards) is generally the top repayment priority, and maintaining a liquidity buffer prevents forced selling of investments to cover shortfalls.",
        ],
        keyRules: [
          "Amortization: interest share falls and principal share rises over the loan's life.",
          "EAR = (1 + nominal/m)^m - 1; compare loans on effective rates.",
          "Avalanche minimizes interest; refinance when savings exceed costs.",
        ],
      },
      {
        id: "cfp-full-m3-sn4",
        title: "Education funding vehicles and aid",
        testPointIds: ["cfp-full-m3-tp4"],
        explanation: [
          "Education vehicles differ on tax treatment, control, and financial-aid impact. A 529 plan offers tax-free growth for qualified education expenses and high contribution capacity, and it is typically parent-owned, which is treated relatively favorably in aid formulas; its annual contribution/gift-tax treatment and any state benefits are [ANNUALLY VARIABLE — verify the current-year figure]. A Coverdell ESA offers tax-free growth with broader flexibility but a lower contribution limit [ANNUALLY VARIABLE — verify]. A UTMA/UGMA custodial account is an irrevocable gift that becomes the child's property at the age of majority and is treated as a student asset for aid, which weighs more heavily against aid than a parent asset.",
          "The planning takeaway is to match the vehicle to the family's goals: 529 plans for tax-advantaged, parent-controlled college savings with limited aid drag; Coverdells where broader flexibility matters within the lower limit; and custodial accounts only where the family accepts loss of control and the aid consequence. Because ownership drives the aid treatment, the exam repeatedly tests who owns the account. All specific dollar limits and tax figures must be verified against the current year.",
        ],
        keyRules: [
          "529: tax-free qualified growth, high capacity, parent-owned aid treatment; figures annually variable.",
          "Coverdell: flexible but lower limit (annually variable); UTMA/UGMA is the child's asset at majority.",
          "Account ownership drives financial-aid impact.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m3-p1",
        testPointIds: ["cfp-full-m3-tp1"],
        style: "Statement/ratio computation",
        question:
          "The Ellises list assets of $920,000 and liabilities of $410,000, essential monthly expenses of $9,000, and $36,000 in liquid emergency savings. Compute their net worth and emergency-fund coverage, and comment on the adequacy of the fund given that Maya's consulting income is variable.",
        answerPlan: [
          "Compute net worth.",
          "Compute months of coverage.",
          "Interpret against volatility.",
        ],
        modelAnswer:
          "Net worth = $920,000 - $410,000 = $510,000. Emergency-fund coverage = $36,000 ÷ $9,000 = 4 months of essential expenses. Four months sits within the general 3–6 month guideline, but because Maya's consulting income is variable, the household faces higher income volatility and a single-income shock risk; the fund should likely be built toward the upper end (closer to 6 months, i.e., roughly $54,000) to avoid forced borrowing or asset sales during an income gap.",
        markingGuide: [
          "Computes net worth of $510,000.",
          "Computes 4 months of emergency coverage.",
          "Recommends a larger fund given income volatility.",
        ],
      },
      {
        id: "cfp-full-m3-p2",
        testPointIds: ["cfp-full-m3-tp2"],
        style: "TVM computation",
        question:
          "David wants $600,000 in an account 12 years from now. The account earns 6% compounded annually. Compute the single lump sum he must invest today, and separately state how the required deposit changes conceptually if contributions are made monthly instead.",
        answerPlan: [
          "Apply the PV formula.",
          "Compute the lump sum.",
          "Explain the monthly-contribution adjustment.",
        ],
        modelAnswer:
          "Lump sum today = FV ÷ (1 + r)^n = $600,000 ÷ (1.06)^12 = $600,000 ÷ 2.0122 ≈ $298,190. If instead David contributes monthly, the problem becomes a future-value-of-annuity calculation, and he must set the calculator to monthly compounding (N = 144 periods, I/Y = 6%/12 = 0.5% per month) and solve for PMT; the total of the monthly deposits will exceed the single lump sum's present value because contributions are spread over time and earn less compounding than an upfront investment.",
        markingGuide: [
          "Computes the lump sum of about $298,190.",
          "Identifies the monthly case as an annuity requiring monthly compounding (N=144, I/Y=0.5%).",
          "Explains why spread-out deposits require more in total than the lump-sum PV.",
        ],
      },
      {
        id: "cfp-full-m3-p3",
        testPointIds: ["cfp-full-m3-tp4"],
        style: "Vehicle-selection item",
        question:
          "The Ellises ask whether to save for Leo's college in a parent-owned 529 plan or a UTMA custodial account in Leo's name. Compare the two on tax treatment, control, and financial-aid impact, and note which figures you would verify for the current year.",
        answerPlan: [
          "Compare tax treatment.",
          "Compare control.",
          "Compare aid impact and flag variable figures.",
        ],
        modelAnswer:
          "A parent-owned 529 plan offers tax-free growth for qualified education expenses and keeps the parents in control of the account, and it is treated as a parent asset in aid formulas, which weighs relatively lightly against aid. A UTMA account is an irrevocable gift that becomes Leo's property at the age of majority (loss of parental control) and is treated as a student asset, which reduces aid eligibility more heavily. For most families prioritizing tax efficiency, control, and minimizing aid drag, the 529 is preferable. I would verify the current-year 529 contribution/gift-tax treatment, any state tax benefits, and the UTMA gift-tax figures, since all of these are annually variable.",
        markingGuide: [
          "States the 529's tax-free qualified growth and parent control.",
          "States the UTMA becomes the child's asset (loss of control) and hurts aid more.",
          "Flags contribution/gift-tax and state-benefit figures as annually variable.",
        ],
      },
    ],
  }),

  "cfp-full-m4": examDepth({
    testPoints: [
      {
        id: "cfp-full-m4-tp1",
        title: "Risk-management process and handling techniques",
        priority: "high",
        examinerFocus:
          "Applying the identify-evaluate-treat-monitor process and matching the handling technique (avoid, reduce, retain, transfer) to a risk's frequency and severity.",
        typicalQuestionForms: [
          "Which risks are best transferred to an insurer?",
          "When is risk retention appropriate?",
        ],
        mustKnow: [
          "Process: identify exposures, evaluate frequency/severity, select technique, monitor.",
          "High-severity/low-frequency risks are best transferred via insurance.",
          "Low-severity risks can be retained (e.g., via deductibles); avoidance/reduction lower exposure first.",
        ],
        scoringActions: [
          "Map the risk to the frequency/severity grid before choosing a technique.",
          "Reserve insurance (transfer) for high-severity exposures.",
        ],
      },
      {
        id: "cfp-full-m4-tp2",
        title: "Life insurance types and needs analysis",
        priority: "critical",
        examinerFocus:
          "Comparing term vs permanent (whole/universal) coverage and performing a needs-based coverage calculation (income replacement + debts + goals - existing resources).",
        typicalQuestionForms: [
          "How does term differ from permanent life insurance?",
          "Compute the coverage gap using the needs approach.",
        ],
        mustKnow: [
          "Term is pure, temporary protection; whole/universal add cash value and permanence at higher cost.",
          "Needs approach: capital needed = income replacement + debts + final expenses + goals - existing resources.",
          "Human-life-value and needs-based approaches estimate coverage differently.",
        ],
        scoringActions: [
          "Run the needs calculation before selecting a product.",
          "Net out existing resources (assets, existing coverage) to find the gap.",
        ],
      },
      {
        id: "cfp-full-m4-tp3",
        title: "Disability income and long-term care",
        priority: "high",
        examinerFocus:
          "Why the definition of disability (own-occupation vs any-occupation) is decisive, how elimination and benefit periods shape cost/protection, and what triggers LTC benefits (ADLs, cognitive impairment).",
        typicalQuestionForms: [
          "Why does the definition of disability matter so much?",
          "What triggers long-term-care benefits?",
        ],
        mustKnow: [
          "Own-occupation is more protective (and costlier) than any-occupation.",
          "Elimination period (waiting) and benefit period shape cost and protection.",
          "LTC benefits trigger on inability to perform a set number of ADLs or cognitive impairment.",
        ],
        scoringActions: [
          "Read the definition-of-disability clause first — it drives the answer.",
          "Tie LTC payout to ADL/cognitive triggers.",
        ],
      },
      {
        id: "cfp-full-m4-tp4",
        title: "Health insurance and HSAs/Medicare basics",
        priority: "medium",
        examinerFocus:
          "Comparing HMO/PPO/HDHP trade-offs, the HSA's triple tax advantage with an HDHP, and the coverage of Medicare Parts A/B/C/D. HSA/Medicare dollar figures are annually variable.",
        typicalQuestionForms: [
          "What is the tax advantage of an HSA paired with an HDHP?",
          "What does each Medicare part cover?",
        ],
        mustKnow: [
          "HDHPs pair with HSAs offering a triple tax advantage (deductible in, tax-free growth, tax-free qualified out); HSA limits are [ANNUALLY VARIABLE — verify].",
          "Plan types (HMO, PPO, HDHP) trade network flexibility for cost.",
          "Medicare Parts: A (hospital), B (medical), C (Advantage), D (drugs); premiums/thresholds are [ANNUALLY VARIABLE — verify].",
        ],
        scoringActions: [
          "Tie the triple tax advantage specifically to the HSA/HDHP pairing.",
          "Match each Medicare part to its coverage and flag dollar figures as annually variable.",
        ],
      },
      {
        id: "cfp-full-m4-tp5",
        title: "Property, casualty, and liability coverage",
        priority: "medium",
        examinerFocus:
          "Evaluating homeowners/auto coverage, the role of umbrella liability, and how policy provisions (deductibles, coinsurance, exclusions, limits) affect claims.",
        typicalQuestionForms: [
          "Why recommend an umbrella liability policy?",
          "How does coinsurance affect a property claim?",
        ],
        mustKnow: [
          "Homeowners covers dwelling/property/liability; auto covers liability, collision, comprehensive, uninsured motorist.",
          "Umbrella policies extend liability limits cost-effectively above underlying policies.",
          "Coinsurance recovery = (carried ÷ required) × loss when a property is underinsured.",
        ],
        scoringActions: [
          "Recommend umbrella coverage where liability exposure exceeds underlying limits.",
          "Apply the coinsurance formula when a property is underinsured.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Insurance needs analysis and policy features are consistently tested; convert the needs-analysis computation and the definition-driven DI/LTC items for reliable marks.",
      timeBudget:
        "90–120 seconds for needs-analysis and coinsurance computations; 60 seconds for definitional items.",
      answerSequence: [
        "For any coverage question, run the needs analysis before selecting a product.",
        "Read policy-definition clauses (own vs any occupation, coinsurance) carefully.",
        "Match risk-handling technique to frequency and severity.",
        "Flag HSA/Medicare dollar figures as annually variable.",
      ],
      qualityChecks: [
        "Did you net existing resources when finding the coverage gap?",
        "Did the definition-of-disability clause drive the DI answer?",
        "Did you apply the coinsurance ratio correctly for underinsured property?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m4-sn1",
        title: "The risk-management process and technique selection",
        testPointIds: ["cfp-full-m4-tp1"],
        explanation: [
          "Risk management follows a disciplined process: identify the client's exposures, evaluate each on frequency (how often) and severity (how costly), select a handling technique, and monitor over time. The technique should match the exposure's place on the frequency/severity grid. Low-frequency but high-severity risks — a house fire, premature death, a large liability judgment — are best transferred to an insurer, because the client cannot afford the tail loss even though it is unlikely.",
          "The other techniques handle the rest of the grid. Risk avoidance eliminates the activity that creates the exposure; risk reduction lowers frequency or severity (installing sprinklers, safe driving); and risk retention accepts small, affordable losses, often deliberately through deductibles that lower premiums. High-frequency, high-severity risks may need to be avoided or reduced before they can be insured economically. The exam tests whether you can place a described risk on the grid and choose the matching technique.",
        ],
        keyRules: [
          "Process: identify, evaluate (frequency/severity), treat, monitor.",
          "Transfer high-severity/low-frequency risks via insurance.",
          "Retain low-severity risks (deductibles); avoid/reduce before transferring where possible.",
        ],
      },
      {
        id: "cfp-full-m4-sn2",
        title: "Life insurance needs analysis, worked",
        testPointIds: ["cfp-full-m4-tp2"],
        explanation: [
          "Life insurance sizing should start from needs, not products. The needs approach sums the capital required to meet the family's objectives if the insured dies — income replacement for the survivors, outstanding debts, final expenses, and specific goals such as college — and then subtracts existing resources (current assets and any in-force coverage) to find the coverage gap. Only after the gap is known does product selection follow: term insurance provides pure, temporary protection at low cost and usually fits a temporary need like income replacement during the working years, while permanent insurance (whole or universal) adds lifelong coverage and cash value at higher cost, fitting permanent needs such as estate liquidity.",
          "A common error is to recommend expensive permanent insurance when low-cost term would meet a temporary need, or to ignore existing resources and oversize the policy. The human-life-value method (capitalizing the insured's future earnings) is an alternative estimation approach that can yield a different figure; the exam expects you to apply the needs method precisely and to net out resources.",
        ],
        keyRules: [
          "Needs approach: income replacement + debts + final expenses + goals - existing resources.",
          "Term for temporary needs; permanent for permanent needs (e.g., estate liquidity).",
          "Net existing assets and in-force coverage before choosing a product.",
        ],
        workedProblem: {
          scenario:
            "David Ellis earns $120,000. If he died, the family would need to replace $80,000 per year of his after-tax income for 15 years (assume a 4% real discount rate, end-of-year need), pay off a $300,000 mortgage and $40,000 of other debt, cover $20,000 of final expenses, and fund $150,000 for the children's remaining college. The family has $250,000 of investable assets and David has $200,000 of existing group term coverage. Compute the additional coverage needed.",
          steps: [
            "Capitalize the income-replacement need: PV of $80,000 for 15 years at 4% = 80,000 × [1 - (1.04)^-15] / 0.04 ≈ 80,000 × 11.1184 ≈ $889,470.",
            "Add lump-sum needs: mortgage $300,000 + other debt $40,000 + final expenses $20,000 + college $150,000 = $510,000.",
            "Sum total capital needed: $889,470 + $510,000 = $1,399,470.",
            "Subtract existing resources: investable assets $250,000 + existing group term $200,000 = $450,000.",
            "Compute the gap: $1,399,470 - $450,000 ≈ $949,470 of additional coverage needed.",
          ],
          conclusion:
            "David needs roughly $949,000 of additional life insurance under the needs approach. Because this is a temporary income-replacement need over the working/college years, low-cost term insurance is the appropriate product rather than permanent coverage.",
          markingNotes: [
            "Full credit requires capitalizing the income stream, adding lump-sum needs, and subtracting all existing resources.",
            "Forgetting to net the existing $200,000 group coverage or the $250,000 assets is the classic error.",
            "Recommending permanent insurance for a purely temporary need loses the product-selection mark.",
          ],
        },
      },
      {
        id: "cfp-full-m4-sn3",
        title: "Disability income and long-term care definitions",
        testPointIds: ["cfp-full-m4-tp3"],
        explanation: [
          "Disability income insurance replaces a portion of earnings when the insured cannot work, and the single most decisive contract term is the definition of disability. An own-occupation definition pays if the insured cannot perform their own occupation, even if they could work in another job — the most protective and most expensive option, valuable for specialized professionals. An any-occupation definition pays only if the insured cannot work in any suitable occupation, which is cheaper but far less protective. The elimination period (the waiting period before benefits begin) and the benefit period (how long benefits last) further shape both cost and protection.",
          "Long-term care insurance covers custodial and personal-care needs that health insurance and Medicare largely do not cover. Benefits are triggered when the insured cannot perform a set number of activities of daily living (ADLs) — bathing, dressing, eating, transferring, toileting, continence — or suffers cognitive impairment such as dementia. Policy features like the daily benefit, benefit period, elimination period, and inflation protection determine the coverage's real-world value. The exam consistently tests the own-vs-any definition and the ADL/cognitive trigger.",
        ],
        keyRules: [
          "Own-occupation DI is more protective and costlier than any-occupation.",
          "Elimination and benefit periods shape DI cost and protection.",
          "LTC benefits trigger on ADL limitations or cognitive impairment.",
        ],
      },
      {
        id: "cfp-full-m4-sn4",
        title: "Health coverage, HSAs, and property/liability",
        testPointIds: ["cfp-full-m4-tp4", "cfp-full-m4-tp5"],
        explanation: [
          "Health plans trade cost against flexibility: HMOs are lower-cost but restrict networks and require referrals; PPOs cost more for broader network freedom; high-deductible health plans (HDHPs) have lower premiums and higher deductibles and can be paired with a Health Savings Account. The HSA's triple tax advantage — contributions are deductible, growth is tax-free, and qualified medical withdrawals are tax-free — makes it a powerful savings vehicle, with contribution limits [ANNUALLY VARIABLE — verify the current-year figure]. Medicare, for those 65 and older, has Part A (hospital), Part B (medical), Part C (Medicare Advantage), and Part D (prescription drugs); premiums, deductibles, and income-related surcharges are [ANNUALLY VARIABLE — verify].",
          "On the property and casualty side, homeowners policies cover the dwelling, personal property, and liability, while auto policies cover liability, collision, comprehensive, and uninsured-motorist exposures. An umbrella liability policy extends liability limits above the underlying home and auto policies at relatively low cost, protecting the client's net worth against large judgments. Policy provisions — deductibles, coinsurance, exclusions, and limits — determine what is actually recovered; a property coinsurance clause reduces the recovery when the owner carries less than the required percentage of value, using recovery = (carried ÷ required) × loss.",
        ],
        keyRules: [
          "HSA triple tax advantage requires an HDHP; limits are annually variable.",
          "Medicare Parts A/B/C/D cover hospital/medical/Advantage/drugs; figures annually variable.",
          "Umbrella extends liability limits; coinsurance recovery = (carried ÷ required) × loss.",
        ],
        formulas: ["Property coinsurance recovery = (amount carried ÷ amount required) × loss"],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m4-p1",
        testPointIds: ["cfp-full-m4-tp2"],
        style: "Needs-analysis computation",
        question:
          "Maya Ellis needs $60,000/year replaced for 10 years (assume PV ≈ $486,000 at the chosen discount rate), plus $340,000 of debts and $170,000 of goals. The family holds $200,000 of assets earmarked for these needs and Maya has $100,000 of existing coverage. Compute the additional coverage required and recommend a product type with justification.",
        answerPlan: [
          "Sum total needs.",
          "Subtract existing resources.",
          "Recommend and justify a product.",
        ],
        modelAnswer:
          "Total capital needed = $486,000 (income replacement) + $340,000 (debts) + $170,000 (goals) = $996,000. Existing resources = $200,000 assets + $100,000 coverage = $300,000. Additional coverage required = $996,000 - $300,000 = $696,000. Because this is a temporary income-replacement and goal-funding need over a defined period, term insurance is the appropriate, cost-effective product; permanent insurance would add unnecessary cost unless there is a separate permanent need such as estate liquidity.",
        markingGuide: [
          "Sums total needs to $996,000.",
          "Nets existing resources to reach $696,000 additional coverage.",
          "Recommends term with a temporary-need justification.",
        ],
      },
      {
        id: "cfp-full-m4-p2",
        testPointIds: ["cfp-full-m4-tp3"],
        style: "Definition-driven item",
        question:
          "Maya, a self-employed consultant, is comparing two disability policies: one with an own-occupation definition and a 90-day elimination period, and one with an any-occupation definition and a 180-day elimination period at a lower premium. Explain how the definitions and elimination periods affect her protection and what you would prioritize given her situation.",
        answerPlan: [
          "Contrast the definitions.",
          "Contrast the elimination periods.",
          "Prioritize for her circumstances.",
        ],
        modelAnswer:
          "The own-occupation policy pays if Maya cannot perform her own consulting occupation, even if she could do other work — far more protective for a specialized self-employed professional than the any-occupation policy, which pays only if she cannot work in any suitable occupation. The 90-day elimination period means benefits start sooner than the 180-day period, but requires a larger emergency reserve is not needed as long. Given that Maya relies on her specialized income and has variable earnings, I would prioritize the own-occupation definition; the shorter elimination period is desirable but secondary, and can be lengthened to control premium if she holds an adequate emergency fund.",
        markingGuide: [
          "Explains own-occupation is more protective than any-occupation.",
          "Explains the elimination-period trade-off (sooner benefits vs premium/reserve).",
          "Prioritizes own-occupation for a specialized self-employed earner.",
        ],
      },
      {
        id: "cfp-full-m4-p3",
        testPointIds: ["cfp-full-m4-tp5"],
        style: "Coinsurance computation",
        question:
          "The Ellises' home has a replacement value of $500,000, and their policy requires 80% coinsurance. They carry $320,000 of coverage and suffer a $100,000 partial loss (ignore the deductible). Compute the amount the policy will pay and explain the result.",
        answerPlan: [
          "Determine the required coverage.",
          "Apply the coinsurance formula.",
          "Interpret the shortfall.",
        ],
        modelAnswer:
          "Required coverage = 80% × $500,000 = $400,000. The Ellises carry only $320,000, so they are underinsured. Coinsurance recovery = (carried ÷ required) × loss = ($320,000 ÷ $400,000) × $100,000 = 0.80 × $100,000 = $80,000. The policy pays $80,000, and the Ellises absorb the remaining $20,000 themselves as a coinsurance penalty for carrying less than the required 80% of value. To avoid this, they should insure to at least the 80% coinsurance requirement.",
        markingGuide: [
          "Computes required coverage of $400,000.",
          "Applies the coinsurance formula to get $80,000 paid.",
          "Explains the $20,000 shortfall as the underinsurance penalty.",
        ],
      },
    ],
  }),

  "cfp-full-m5": examDepth({
    testPoints: [
      {
        id: "cfp-full-m5-tp1",
        title: "Investment vehicles, bond pricing, and duration",
        priority: "high",
        examinerFocus:
          "Comparing equities, fixed income, funds, and alternatives on risk/return and cost, and understanding the inverse bond price-yield relationship and duration as interest-rate sensitivity.",
        typicalQuestionForms: [
          "Why do bond prices fall when interest rates rise?",
          "What does duration measure?",
          "What advantages do ETFs offer over mutual funds?",
        ],
        mustKnow: [
          "Equities offer growth with volatility; bonds offer income with rate sensitivity.",
          "Bond prices move inversely with rates; duration ≈ % price change for a 1% rate move.",
          "ETFs are typically lower-cost and more tax-efficient than comparable mutual funds.",
        ],
        scoringActions: [
          "State the inverse rate-price relationship before any bond item.",
          "Use duration to estimate price sensitivity to rate moves.",
        ],
      },
      {
        id: "cfp-full-m5-tp2",
        title: "Diversification and the efficient frontier",
        priority: "high",
        examinerFocus:
          "That diversification reduces unsystematic (not systematic) risk, correlation below 1 drives the benefit, and the efficient frontier represents the best return per unit of risk.",
        typicalQuestionForms: [
          "Which type of risk does diversification reduce?",
          "Why does correlation drive diversification benefits?",
        ],
        mustKnow: [
          "Diversification reduces unsystematic (specific) risk; systematic (market) risk remains.",
          "Correlation below 1 produces diversification benefits; the lower the correlation, the greater the benefit.",
          "The efficient frontier shows portfolios with the highest return for each risk level.",
        ],
        scoringActions: [
          "Attribute only unsystematic-risk reduction to diversification.",
          "Tie the diversification benefit to correlation below 1.",
        ],
      },
      {
        id: "cfp-full-m5-tp3",
        title: "CAPM and risk-adjusted performance measures",
        priority: "critical",
        examinerFocus:
          "Computing CAPM required return and alpha, and choosing between Sharpe (total risk) and Treynor (systematic risk) based on the portfolio's diversification.",
        typicalQuestionForms: [
          "Compute the CAPM required return and alpha given beta and market data.",
          "When is Treynor more appropriate than Sharpe?",
        ],
        mustKnow: [
          "CAPM: E(R) = Rf + β(E(Rm) - Rf); alpha = actual return - CAPM required return.",
          "Sharpe uses total risk (standard deviation); Treynor uses systematic risk (beta).",
          "Beta measures systematic risk relative to the market.",
        ],
        scoringActions: [
          "Plug into CAPM, then compare to the actual return for alpha.",
          "Use Sharpe for undiversified portfolios and Treynor for diversified ones.",
        ],
      },
      {
        id: "cfp-full-m5-tp4",
        title: "Asset allocation, rebalancing, and risk tolerance",
        priority: "high",
        examinerFocus:
          "Distinguishing strategic from tactical allocation, the discipline rebalancing enforces, and defining risk tolerance as the combination of ability and willingness to take risk.",
        typicalQuestionForms: [
          "How does strategic allocation differ from tactical allocation?",
          "What discipline does rebalancing enforce?",
        ],
        mustKnow: [
          "Strategic allocation reflects long-term goals and risk tolerance; tactical tilts are short-term.",
          "Rebalancing restores target weights and enforces buy-low/sell-high discipline.",
          "Risk tolerance combines ability (capacity) and willingness to take risk.",
        ],
        scoringActions: [
          "Anchor allocation answers to the client's risk tolerance and horizon.",
          "Reconcile ability and willingness when they conflict (use the more conservative).",
        ],
      },
      {
        id: "cfp-full-m5-tp5",
        title: "Taxes, costs, and after-tax returns / asset location",
        priority: "medium",
        examinerFocus:
          "Computing after-tax returns and applying asset location (placing tax-inefficient assets in tax-advantaged accounts) and tax-loss harvesting. Tax rates are annually variable.",
        typicalQuestionForms: [
          "Compute the after-tax return given a tax rate.",
          "What is asset location and why does it matter?",
        ],
        mustKnow: [
          "After-tax return = pre-tax return × (1 - tax rate) on taxable income/gains; rates are [ANNUALLY VARIABLE — verify].",
          "Asset location places tax-inefficient assets in tax-advantaged accounts.",
          "Costs and taxes compound, materially reducing long-run wealth.",
        ],
        scoringActions: [
          "Convert to after-tax, after-cost terms when the case requires.",
          "Locate tax-inefficient assets in tax-advantaged accounts and flag rates as annually variable.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Investment planning is a large, quantitative domain; converting the CAPM/alpha and risk-measure items and the after-tax computations secures a strong score here.",
      timeBudget:
        "90–120 seconds for CAPM/alpha and after-tax computations; 60 seconds for conceptual items.",
      answerSequence: [
        "For performance, compute CAPM required return, then alpha, and pick Sharpe vs Treynor by diversification.",
        "For risk, separate systematic from unsystematic effects.",
        "For allocation, anchor to risk tolerance (ability and willingness) and horizon.",
        "For taxes, convert to after-tax terms and apply asset location.",
      ],
      qualityChecks: [
        "Did you match the risk measure (Sharpe vs Treynor) to the portfolio's diversification?",
        "Did you keep systematic risk out of the diversification benefit?",
        "Did you flag tax rates as annually variable?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m5-sn1",
        title: "Vehicles, bond sensitivity, and diversification",
        testPointIds: ["cfp-full-m5-tp1", "cfp-full-m5-tp2"],
        explanation: [
          "Investment vehicles sit on a risk/return spectrum: equities provide growth with higher volatility; bonds provide income but are sensitive to interest rates; funds and ETFs provide diversification, with ETFs typically lower-cost and more tax-efficient than comparable mutual funds; and alternatives add different return drivers and risks. For bonds, the foundational relationship is that prices move inversely to interest rates, and duration measures the sensitivity — a duration of 6 implies roughly a 6% price decline for a 1% rise in rates. Longer-duration bonds are more rate-sensitive.",
          "Diversification is the other core concept, and the exam is strict about what it does. Combining assets whose returns are not perfectly correlated (correlation below 1) reduces unsystematic (security-specific) risk; the lower the correlation, the greater the benefit. It does not reduce systematic (market) risk, which affects all assets and cannot be diversified away. The efficient frontier plots the portfolios that deliver the highest expected return for each level of risk, and the optimal risky portfolio is combined with the risk-free asset to suit the investor's risk tolerance.",
        ],
        keyRules: [
          "Bond prices move inversely with rates; duration ≈ % price change per 1% rate move.",
          "Diversification reduces unsystematic risk only (via correlation below 1).",
          "The efficient frontier gives the best return per unit of risk.",
        ],
        formulas: ["Approx. bond price change ≈ -duration × change in yield"],
      },
      {
        id: "cfp-full-m5-sn2",
        title: "CAPM, alpha, and choosing a risk measure, worked",
        testPointIds: ["cfp-full-m5-tp3"],
        explanation: [
          "The Capital Asset Pricing Model gives the return an investor should require for bearing a security's systematic risk: E(R) = Rf + β(E(Rm) - Rf), where beta measures sensitivity to market movements. Comparing a portfolio's actual return to its CAPM-required return yields alpha, the value added (positive) or subtracted (negative) by the manager. A positive alpha means the portfolio outperformed what its systematic risk alone would justify.",
          "Risk-adjusted performance uses two related ratios, and the choice between them depends on diversification. The Sharpe ratio divides excess return by total risk (standard deviation), making it appropriate when a portfolio is not fully diversified and carries meaningful unsystematic risk. The Treynor ratio divides excess return by beta (systematic risk), making it appropriate for a well-diversified portfolio where unsystematic risk has been largely eliminated. Choosing the wrong measure for the portfolio's diversification is a classic exam trap.",
        ],
        keyRules: [
          "CAPM: E(R) = Rf + β(E(Rm) - Rf).",
          "Alpha = actual return - CAPM required return.",
          "Sharpe (total risk) for undiversified; Treynor (systematic risk) for diversified portfolios.",
        ],
        formulas: [
          "E(R) = Rf + β(E(Rm) - Rf)",
          "Alpha = actual return - E(R)",
          "Sharpe = (Rp - Rf) ÷ σp",
          "Treynor = (Rp - Rf) ÷ βp",
        ],
        workedProblem: {
          scenario:
            "The Ellises' equity manager reports a 12.5% return with a beta of 1.1 and a standard deviation of 18%. The risk-free rate is 3% and the market returned 10%. The portfolio is well diversified. Compute the CAPM required return, the alpha, and state which risk-adjusted measure is more appropriate and why.",
          steps: [
            "Apply CAPM: E(R) = 3% + 1.1 × (10% - 3%) = 3% + 1.1 × 7% = 3% + 7.7% = 10.7%.",
            "Compute alpha: actual 12.5% - required 10.7% = +1.8% alpha (outperformance).",
            "Assess diversification: the portfolio is well diversified, so unsystematic risk is largely eliminated.",
            "Select the measure: for a well-diversified portfolio, Treynor (using beta) is more appropriate than Sharpe (using total standard deviation).",
            "Interpret: the positive 1.8% alpha indicates the manager added value beyond compensation for systematic risk.",
          ],
          conclusion:
            "CAPM required return is 10.7%, so the manager generated a positive alpha of +1.8%. Because the portfolio is well diversified, the Treynor ratio (based on beta) is the more appropriate risk-adjusted measure; Sharpe would be preferred only if the portfolio were not fully diversified.",
          markingNotes: [
            "Full credit requires the correct CAPM figure (10.7%), the alpha (+1.8%), and the Treynor selection with reasoning.",
            "Choosing Sharpe for a well-diversified portfolio is the classic error and loses the measure-selection mark.",
          ],
        },
      },
      {
        id: "cfp-full-m5-sn3",
        title: "Allocation, rebalancing, and risk tolerance",
        testPointIds: ["cfp-full-m5-tp4"],
        explanation: [
          "Asset allocation is the dominant driver of a portfolio's risk and return over time. Strategic allocation sets long-term target weights based on the client's goals, time horizon, and risk tolerance; tactical allocation makes short-term tilts around those targets to exploit perceived opportunities. Rebalancing periodically returns the portfolio to its strategic targets, which mechanically enforces buy-low/sell-high discipline — selling what has appreciated beyond target and buying what has lagged — and keeps risk aligned with the plan.",
          "Risk tolerance is the combination of ability (capacity) to take risk — driven by time horizon, income stability, and financial cushion — and willingness (psychological comfort). When ability and willingness diverge, the prudent practice is generally to plan to the more conservative of the two and to educate the client. Allocation recommendations on the exam should always trace back to the client's risk tolerance and horizon rather than to market predictions.",
        ],
        keyRules: [
          "Strategic = long-term targets; tactical = short-term tilts.",
          "Rebalancing enforces buy-low/sell-high and controls risk.",
          "Risk tolerance = ability + willingness; use the more conservative when they conflict.",
        ],
      },
      {
        id: "cfp-full-m5-sn4",
        title: "After-tax returns, costs, and asset location",
        testPointIds: ["cfp-full-m5-tp5"],
        explanation: [
          "Returns should be evaluated after taxes and costs, because both compound and materially reduce long-run wealth. The basic conversion is after-tax return = pre-tax return × (1 - tax rate) for taxable income and gains, with the applicable rates [ANNUALLY VARIABLE — verify the current-year figure]. Costs — expense ratios, transaction costs, and advisory fees — subtract directly from returns every year, so a seemingly small annual cost difference can compound into a large wealth difference over decades.",
          "Asset location improves after-tax outcomes by placing assets in the accounts where they are taxed most efficiently: tax-inefficient assets (such as taxable bonds and high-turnover strategies) go in tax-advantaged accounts (traditional and Roth), while tax-efficient assets (such as broad index funds and assets eligible for preferential long-term gains) can sit in taxable accounts. Tax-loss harvesting realizes losses to offset gains, subject to the wash-sale rule. The exam expects candidates to convert to after-tax terms when a case requires it and to apply location logic.",
        ],
        keyRules: [
          "After-tax return = pre-tax × (1 - tax rate); rates annually variable.",
          "Asset location: tax-inefficient assets in tax-advantaged accounts.",
          "Costs and taxes compound and materially reduce long-run wealth.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m5-p1",
        testPointIds: ["cfp-full-m5-tp3"],
        style: "CAPM/alpha computation",
        question:
          "A fund the Ellises hold returned 9% with a beta of 0.8. The risk-free rate is 2.5% and the market returned 9.5%. Compute the CAPM required return and the fund's alpha, and state whether it outperformed on a risk-adjusted basis.",
        answerPlan: [
          "Apply CAPM.",
          "Compute alpha.",
          "Interpret.",
        ],
        modelAnswer:
          "CAPM required return = 2.5% + 0.8 × (9.5% - 2.5%) = 2.5% + 0.8 × 7% = 2.5% + 5.6% = 8.1%. Alpha = actual 9% - required 8.1% = +0.9%. The fund generated a positive alpha of 0.9%, meaning it outperformed the return justified by its systematic risk; on a risk-adjusted basis it added value.",
        markingGuide: [
          "Computes CAPM required return of 8.1%.",
          "Computes alpha of +0.9%.",
          "Concludes positive risk-adjusted outperformance.",
        ],
      },
      {
        id: "cfp-full-m5-p2",
        testPointIds: ["cfp-full-m5-tp2", "cfp-full-m5-tp4"],
        style: "Concept item",
        question:
          "The Ellises hold 12 technology stocks and worry they are diversified. Explain what risk this concentration does and does not address, and how strategic allocation plus rebalancing would improve their risk profile.",
        answerPlan: [
          "Diagnose the diversification limit.",
          "Distinguish systematic from unsystematic risk.",
          "Prescribe allocation and rebalancing.",
        ],
        modelAnswer:
          "Holding 12 stocks in a single sector provides limited diversification: it reduces some single-stock (unsystematic) risk but leaves heavy sector and market (systematic) risk, because the holdings are highly correlated and all exposed to the same market and industry factors. Diversification only reduces unsystematic risk, not systematic risk. A strategic allocation across asset classes and sectors with lower correlations would cut the unsystematic and concentration risk, and periodic rebalancing back to target weights would enforce buy-low/sell-high discipline and keep the portfolio aligned with the Ellises' risk tolerance and horizon.",
        markingGuide: [
          "States the sector concentration leaves systematic/sector risk.",
          "Attributes only unsystematic-risk reduction to diversification.",
          "Prescribes a diversified strategic allocation with rebalancing.",
        ],
      },
      {
        id: "cfp-full-m5-p3",
        testPointIds: ["cfp-full-m5-tp5"],
        style: "After-tax/asset-location item",
        question:
          "The Ellises hold taxable corporate bonds yielding 5% pre-tax in a taxable account and a broad equity index fund in their IRA. Assuming a 32% marginal rate, compute the after-tax yield on the bonds and explain how asset location could improve their after-tax outcome. Note which figure is annually variable.",
        answerPlan: [
          "Compute after-tax bond yield.",
          "Diagnose the location mismatch.",
          "Prescribe the swap and flag variability.",
        ],
        modelAnswer:
          "After-tax bond yield = 5% × (1 - 0.32) = 5% × 0.68 = 3.4%. The current setup is tax-inefficient: the tax-inefficient corporate bonds (taxed as ordinary income) sit in the taxable account, while the more tax-efficient equity index fund sits in the tax-advantaged IRA. Asset location would improve the outcome by holding the tax-inefficient bonds inside the IRA (where the interest grows tax-deferred) and the tax-efficient equity index fund in the taxable account (benefiting from preferential long-term capital-gains treatment). The 32% marginal rate is annually variable and must be verified for the current year.",
        markingGuide: [
          "Computes the 3.4% after-tax bond yield.",
          "Identifies the asset-location mismatch.",
          "Prescribes moving bonds to the IRA and equities to taxable, flagging the rate as annually variable.",
        ],
      },
    ],
  }),

  "cfp-full-m6": examDepth({
    testPoints: [
      {
        id: "cfp-full-m6-tp1",
        title: "Income tax framework: computation order and deductions vs credits",
        priority: "critical",
        examinerFocus:
          "Building the tax computation in order (income, adjustments, deductions, tax, credits) and distinguishing deductions (reduce taxable income) from credits (reduce tax dollar-for-dollar), plus marginal vs effective rates. All figures are annually variable.",
        typicalQuestionForms: [
          "How do credits differ from deductions?",
          "What is the difference between marginal and effective rates?",
        ],
        mustKnow: [
          "Taxable income = gross income - adjustments - (standard or itemized deductions); tax liability = tax - credits.",
          "Credits reduce tax dollar-for-dollar; deductions reduce taxable income; brackets/standard deduction are [ANNUALLY VARIABLE — verify].",
          "Marginal rate applies to the next dollar; effective rate is average tax over income.",
        ],
        scoringActions: [
          "Build the computation in order: income, adjustments, deductions, tax, credits.",
          "Flag every bracket/deduction figure as annually variable.",
        ],
      },
      {
        id: "cfp-full-m6-tp2",
        title: "Capital gains, dividends, and basis",
        priority: "critical",
        examinerFocus:
          "Applying preferential long-term capital-gains and qualified-dividend rates versus ordinary treatment for short-term gains, tracking basis (including reinvested dividends), and the holding-period rule.",
        typicalQuestionForms: [
          "What distinguishes a long-term from a short-term gain?",
          "Compute the gain given a basis that includes reinvested dividends.",
        ],
        mustKnow: [
          "Long-term gains (holding over one year) and qualified dividends get preferential rates; short-term is ordinary; rates are [ANNUALLY VARIABLE — verify].",
          "Gain = amount realized - adjusted basis; basis includes reinvested dividends and improvements.",
          "The net investment income tax may apply above income thresholds [ANNUALLY VARIABLE — verify].",
        ],
        scoringActions: [
          "Check the holding period before applying a gain rate.",
          "Adjust basis for reinvested dividends before computing the gain.",
        ],
      },
      {
        id: "cfp-full-m6-tp3",
        title: "Tax-loss harvesting and the wash-sale rule",
        priority: "high",
        examinerFocus:
          "That losses offset gains (and limited ordinary income), and that the wash-sale rule disallows a loss when a substantially identical security is bought within 30 days before or after, adjusting the replacement's basis.",
        typicalQuestionForms: [
          "What triggers the wash-sale rule?",
          "What happens to a disallowed wash-sale loss?",
        ],
        mustKnow: [
          "Capital losses offset gains and a limited amount of ordinary income annually [ANNUALLY VARIABLE — verify the limit].",
          "The wash-sale rule disallows the loss if a substantially identical security is bought within 30 days before/after the sale.",
          "A disallowed loss is added to the basis of the replacement security.",
        ],
        scoringActions: [
          "Check the 30-day window (before and after) for substantially identical securities.",
          "Add any disallowed loss to the replacement security's basis.",
        ],
      },
      {
        id: "cfp-full-m6-tp4",
        title: "Tax-advantaged accounts and income timing",
        priority: "high",
        examinerFocus:
          "Using pre-tax vs Roth accounts, Roth conversions, income timing, and deduction bunching to manage brackets over time. Limits and thresholds are annually variable.",
        typicalQuestionForms: [
          "When is a Roth conversion advantageous?",
          "How does bunching deductions help?",
        ],
        mustKnow: [
          "Pre-tax accounts defer tax; Roth accounts offer tax-free qualified withdrawals; limits are [ANNUALLY VARIABLE — verify].",
          "Roth conversions accelerate tax now for future tax-free growth, best when current rates are relatively low.",
          "Income timing and bunching deductions manage which bracket income falls into.",
        ],
        scoringActions: [
          "Compare current vs expected future rates for Roth-conversion decisions.",
          "Consider lifetime, not just current-year, taxes for planning items.",
        ],
      },
      {
        id: "cfp-full-m6-tp5",
        title: "Property transactions, pass-throughs, and AMT",
        priority: "medium",
        examinerFocus:
          "Basis and depreciation recapture on property, like-kind (1031) exchanges for real property, pass-through income and the QBI deduction, and recognizing who is exposed to the AMT.",
        typicalQuestionForms: [
          "What is depreciation recapture?",
          "Who is most likely to be affected by the AMT?",
        ],
        mustKnow: [
          "Property transactions involve basis, depreciation recapture, and possible like-kind (1031) exchange for real property.",
          "Pass-through income (partnerships, S-corps) flows to the owner's return; a QBI deduction may apply [ANNUALLY VARIABLE — verify].",
          "The AMT recalculates tax with fewer preferences for certain taxpayers.",
        ],
        scoringActions: [
          "Separate recapture (ordinary) from remaining capital gain on property sales.",
          "Flag QBI and AMT thresholds as annually variable.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Taxes touch nearly every planning decision; convert the computation-order, capital-gains/basis, and wash-sale items, and reason about lifetime tax for planning questions.",
      timeBudget:
        "90–120 seconds for basis/gain and wash-sale computations; 60 seconds for definitional items.",
      answerSequence: [
        "Build the tax computation in order: income, adjustments, deductions, tax, credits.",
        "Check holding periods and adjust basis before applying gain rates.",
        "Test the 30-day wash-sale window before allowing a loss.",
        "For planning, compare current vs future rates and think lifetime tax.",
      ],
      qualityChecks: [
        "Did you distinguish credits (dollar-for-dollar) from deductions?",
        "Did you adjust basis for reinvested dividends and check the holding period?",
        "Did you flag every dollar figure as annually variable?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m6-sn1",
        title: "The computation framework and rate concepts",
        testPointIds: ["cfp-full-m6-tp1"],
        explanation: [
          "Individual tax questions are best answered by building the computation in a fixed order: start with gross income, subtract adjustments (above-the-line deductions) to get adjusted gross income, subtract the greater of the standard or itemized deductions to get taxable income, apply the tax brackets to compute the tentative tax, and finally subtract credits to get the tax liability. Keeping this order prevents the common mistakes of mixing deductions and credits or applying a credit to income.",
          "The deduction-versus-credit distinction is heavily tested: a deduction reduces taxable income, so its value depends on the taxpayer's marginal rate, while a credit reduces tax dollar-for-dollar and is generally more valuable per dollar. Rate concepts also recur: the marginal rate is the rate on the next dollar of income (used for decisions like whether to defer income), while the effective rate is total tax divided by income (a measure of average burden). Every bracket, standard-deduction amount, and threshold is [ANNUALLY VARIABLE — verify the current-year figure].",
        ],
        keyRules: [
          "Order: gross income - adjustments - deductions = taxable income; tax - credits = liability.",
          "Deductions reduce taxable income (value = marginal rate); credits reduce tax dollar-for-dollar.",
          "Marginal rate = next dollar; effective rate = average; all figures annually variable.",
        ],
      },
      {
        id: "cfp-full-m6-sn2",
        title: "Capital gains, basis, and a worked computation",
        testPointIds: ["cfp-full-m6-tp2", "cfp-full-m6-tp3"],
        explanation: [
          "Investment taxation turns on holding period and basis. Gains on assets held more than one year are long-term and qualify for preferential rates, as do qualified dividends; gains on assets held one year or less are short-term and taxed as ordinary income. The gain itself equals the amount realized minus the adjusted basis, and basis is often larger than the original purchase price because it includes reinvested dividends (already taxed) and capital improvements — forgetting these overstates the gain and the tax. A net investment income tax may apply above certain income thresholds, all [ANNUALLY VARIABLE — verify].",
          "Tax-loss harvesting realizes losses to offset gains and a limited amount of ordinary income each year, but the wash-sale rule polices it: if the investor buys a substantially identical security within 30 days before or after the loss sale, the loss is disallowed and instead added to the basis of the replacement security (and the holding period tacks). The 30-day window runs both directions, which candidates frequently forget. Harvesting must also respect the client's overall strategy rather than distort the portfolio.",
        ],
        keyRules: [
          "Long-term (over one year) and qualified dividends get preferential rates; short-term is ordinary.",
          "Gain = amount realized - adjusted basis; basis includes reinvested dividends and improvements.",
          "Wash sale: 30 days before/after; disallowed loss adds to replacement basis.",
        ],
        formulas: ["Gain = amount realized - adjusted basis"],
        workedProblem: {
          scenario:
            "Maya bought 1,000 shares of a fund for $30,000 and reinvested $4,000 of dividends over the years (all previously taxed). She now sells all shares for $50,000, having held them for six years. Separately, three days after selling another holding at a $6,000 loss, she repurchases the same fund. Compute the gain on the first sale and explain the tax treatment of the loss on the second.",
          steps: [
            "Compute the adjusted basis of the first holding: original $30,000 + reinvested dividends $4,000 = $34,000.",
            "Compute the gain: amount realized $50,000 - adjusted basis $34,000 = $16,000.",
            "Classify the gain: held six years (over one year), so it is a long-term capital gain eligible for preferential rates (annually variable).",
            "Analyze the second transaction: repurchasing the same fund three days after the loss sale is within the 30-day window and is substantially identical, triggering the wash-sale rule.",
            "Apply the wash-sale consequence: the $6,000 loss is disallowed currently and is added to the basis of the repurchased shares, deferring the benefit.",
          ],
          conclusion:
            "The first sale produces a $16,000 long-term capital gain (basis correctly includes the $4,000 of reinvested dividends). The $6,000 loss on the second transaction is disallowed under the wash-sale rule and is added to the basis of the repurchased shares rather than deducted now. Preferential-rate figures are annually variable.",
          markingNotes: [
            "Full credit requires including reinvested dividends in basis ($16,000 gain, not $20,000) and applying the wash-sale rule.",
            "Allowing the $6,000 loss currently, or ignoring the reinvested-dividend basis, loses marks.",
          ],
        },
      },
      {
        id: "cfp-full-m6-sn3",
        title: "Account types, Roth conversions, and timing",
        testPointIds: ["cfp-full-m6-tp4"],
        explanation: [
          "Tax-advantaged accounts are the main lever for managing lifetime taxes. Pre-tax accounts (traditional 401(k)/IRA) give a deduction now and tax withdrawals later, favoring those who expect a lower rate in retirement; Roth accounts are funded with after-tax dollars and provide tax-free qualified withdrawals, favoring those who expect a higher or similar future rate. A Roth conversion moves money from pre-tax to Roth, paying tax now to secure future tax-free growth — most advantageous when the current marginal rate is relatively low (for example, in a low-income year or before Social Security and RMDs push income up). Contribution limits and phase-outs are [ANNUALLY VARIABLE — verify].",
          "Income timing and deduction bunching manage which bracket income falls into. Deferring income into a lower-rate year, accelerating deductions into a higher-rate year, or bunching itemizable deductions into alternating years to exceed the standard deduction can all reduce lifetime tax. The exam rewards planning answers that consider the client's multi-year rate trajectory rather than optimizing a single year in isolation.",
        ],
        keyRules: [
          "Pre-tax defers tax; Roth gives tax-free qualified withdrawals; limits annually variable.",
          "Roth conversions are best when current rates are relatively low.",
          "Use income timing and deduction bunching to manage brackets over time.",
        ],
      },
      {
        id: "cfp-full-m6-sn4",
        title: "Property, pass-throughs, and the AMT",
        testPointIds: ["cfp-full-m6-tp5"],
        explanation: [
          "Property transactions add wrinkles beyond simple gain calculation. Depreciation taken on business or rental property reduces basis and, on sale, is subject to depreciation recapture that is generally taxed at ordinary-income (or special) rates rather than the lower long-term capital-gains rate; only the gain above recapture gets capital-gains treatment. A like-kind (Section 1031) exchange allows deferral of gain on real property held for business or investment when exchanged for like-kind real property, subject to strict rules. Pass-through income from partnerships and S-corporations flows to the owner's individual return, and a qualified business income (QBI) deduction may apply, with limits and thresholds [ANNUALLY VARIABLE — verify].",
          "The alternative minimum tax (AMT) is a parallel calculation that adds back certain preferences and disallows some deductions, then applies its own rates; a taxpayer pays the higher of the regular tax or the AMT. It tends to affect taxpayers with large amounts of specific preference items. The exam expects recognition of recapture, the 1031 concept, pass-through/QBI treatment, and who is exposed to the AMT, with all dollar figures verified for the current year.",
        ],
        keyRules: [
          "Depreciation recapture is taxed at ordinary/special rates; gain above it gets capital-gains treatment.",
          "Section 1031 defers gain on like-kind real property exchanges.",
          "Pass-through income flows to the owner; QBI and AMT thresholds are annually variable.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m6-p1",
        testPointIds: ["cfp-full-m6-tp1"],
        style: "Concept item",
        question:
          "The Ellises are choosing between a $3,000 tax credit and a $3,000 additional deduction, and Maya asks which saves more given their 32% marginal rate. Explain the difference and quantify the tax savings of each. Note the variable figure.",
        answerPlan: [
          "Explain deduction vs credit.",
          "Quantify each.",
          "Conclude and flag variability.",
        ],
        modelAnswer:
          "A deduction reduces taxable income, so its value equals the deduction times the marginal rate: $3,000 × 32% = $960 of tax savings. A credit reduces tax dollar-for-dollar, so a $3,000 credit saves the full $3,000. The credit is far more valuable here — $3,000 versus $960. The 32% marginal rate is annually variable and must be verified for the current year, but the principle (credits reduce tax dollar-for-dollar, deductions reduce taxable income) is stable.",
        markingGuide: [
          "Quantifies the deduction savings at $960 (deduction × marginal rate).",
          "Quantifies the credit savings at the full $3,000.",
          "Concludes the credit is more valuable and flags the rate as annually variable.",
        ],
      },
      {
        id: "cfp-full-m6-p2",
        testPointIds: ["cfp-full-m6-tp2", "cfp-full-m6-tp3"],
        style: "Basis/wash-sale computation",
        question:
          "David sells stock with a $22,000 basis (including $2,000 of reinvested dividends) for $30,000 after holding two years. He also sells a mutual fund at a $5,000 loss and buys the identical fund 10 days later. Compute the gain and its character on the first sale and state the treatment of the loss on the second.",
        answerPlan: [
          "Compute the gain and character.",
          "Apply the wash-sale rule.",
          "State the basis adjustment.",
        ],
        modelAnswer:
          "First sale: gain = $30,000 - $22,000 basis = $8,000, and because David held the stock two years it is a long-term capital gain eligible for preferential rates (annually variable). Second sale: buying the identical fund 10 days after the loss sale is within the 30-day wash-sale window on a substantially identical security, so the $5,000 loss is disallowed currently and is instead added to the basis of the repurchased shares. David cannot deduct the loss now; the benefit is deferred until he sells the replacement shares.",
        markingGuide: [
          "Computes an $8,000 long-term gain using the correct basis.",
          "Identifies the wash sale within 30 days.",
          "States the $5,000 loss is disallowed and added to the replacement basis.",
        ],
      },
      {
        id: "cfp-full-m6-p3",
        testPointIds: ["cfp-full-m6-tp4"],
        style: "Planning item",
        question:
          "In a year when David is temporarily unemployed and the household is in a much lower bracket than usual, the Ellises have room before the next bracket. Explain whether a Roth conversion makes sense and how you would size it, noting the variable figures.",
        answerPlan: [
          "Assess the rate environment.",
          "Recommend conversion logic.",
          "Size it and flag variability.",
        ],
        modelAnswer:
          "Yes, this low-income year is an ideal time for a partial Roth conversion. Converting pre-tax funds to Roth accelerates tax now, and because the household is temporarily in a much lower marginal bracket, the conversion is taxed at a lower rate than the Ellises would likely pay in the future, securing tax-free growth going forward. I would size the conversion to 'fill up' the current low bracket — converting only up to the top of the low bracket to avoid pushing income into a higher one. The specific bracket thresholds are annually variable and must be verified for the current year.",
        markingGuide: [
          "Recommends a Roth conversion in the low-rate year.",
          "Explains paying tax now at a lower rate for future tax-free growth.",
          "Sizes the conversion to fill the current bracket and flags thresholds as annually variable.",
        ],
      },
    ],
  }),

  "cfp-full-m7": examDepth({
    testPoints: [
      {
        id: "cfp-full-m7-tp1",
        title: "Retirement plan types and who bears the risk",
        priority: "high",
        examinerFocus:
          "Distinguishing defined benefit (employer bears investment risk) from defined contribution (employee bears risk), and matching IRAs and small-business plans (SEP/SIMPLE) to client situations.",
        typicalQuestionForms: [
          "Who bears investment risk in a defined benefit plan?",
          "When is a SEP or SIMPLE appropriate?",
        ],
        mustKnow: [
          "Defined benefit promises a formula pension; the employer bears investment risk.",
          "Defined contribution (401(k), 403(b)) shifts risk to the employee; traditional IRAs defer tax, Roth IRAs are tax-free qualified.",
          "SEP and SIMPLE plans suit small businesses and the self-employed; contribution limits are [ANNUALLY VARIABLE — verify].",
        ],
        scoringActions: [
          "Identify the plan type first — rules differ sharply by plan.",
          "Match small-business plans to employer size/self-employment.",
        ],
      },
      {
        id: "cfp-full-m7-tp2",
        title: "Contributions, eligibility, deductibility, and vesting",
        priority: "high",
        examinerFocus:
          "Contribution limits and catch-ups, traditional IRA deductibility phase-outs when covered by a workplace plan, Roth IRA income phase-outs (and the backdoor Roth), and vesting schedules. All figures are annually variable.",
        typicalQuestionForms: [
          "What limits traditional IRA deductibility?",
          "What does a vesting schedule govern?",
        ],
        mustKnow: [
          "Contribution and catch-up limits vary by plan and age [ANNUALLY VARIABLE — verify].",
          "Traditional IRA deductibility phases out with income when covered by a workplace plan; Roth eligibility phases out at higher incomes [ANNUALLY VARIABLE — verify].",
          "Vesting schedules determine ownership of employer contributions.",
        ],
        scoringActions: [
          "Check workplace-plan coverage and income before deciding IRA deductibility.",
          "Flag all limits and phase-outs as annually variable.",
        ],
      },
      {
        id: "cfp-full-m7-tp3",
        title: "Distributions, penalties, and RMDs",
        priority: "critical",
        examinerFocus:
          "The early-withdrawal penalty and its exceptions, required minimum distributions and their computation, and that Roth IRAs have no lifetime RMDs for the original owner. Ages and figures are annually variable.",
        typicalQuestionForms: [
          "Which accounts have no lifetime RMDs for the owner?",
          "Compute an RMD from a year-end balance and life-expectancy factor.",
        ],
        mustKnow: [
          "Early withdrawals before age 59½ generally incur a 10% penalty, with exceptions.",
          "RMDs begin at the applicable RMD age [ANNUALLY VARIABLE — verify]; Roth IRAs have no lifetime RMDs for the original owner.",
          "RMD = prior year-end balance ÷ life-expectancy factor.",
        ],
        scoringActions: [
          "Check age, penalty exceptions, and RMD status for distribution items.",
          "Apply the RMD formula precisely and flag the RMD age as annually variable.",
        ],
      },
      {
        id: "cfp-full-m7-tp4",
        title: "Retirement needs and sustainable withdrawal",
        priority: "high",
        examinerFocus:
          "Estimating the retirement income gap after Social Security and pensions, applying sustainable-withdrawal guidelines, and accounting for sequence-of-returns and inflation risk.",
        typicalQuestionForms: [
          "What is sequence-of-returns risk?",
          "Compute the income gap and the portfolio needed to fund it.",
        ],
        mustKnow: [
          "Income gap = spending need - Social Security - pensions - other income.",
          "Sustainable withdrawal guidelines (e.g., around 4% initial) balance longevity and spending.",
          "Sequence-of-returns risk hits portfolios with early-retirement losses; inflation erodes real spending.",
        ],
        scoringActions: [
          "Compute the income gap before sizing the portfolio.",
          "Account for inflation and sequence risk in withdrawal sustainability.",
        ],
      },
      {
        id: "cfp-full-m7-tp5",
        title: "Income sequencing, rollovers, and conversions",
        priority: "medium",
        examinerFocus:
          "Tax-efficient withdrawal sequencing, the advantage of direct over indirect rollovers (avoiding withholding), and coordinating Roth conversions with brackets, RMDs, and Social Security taxation.",
        typicalQuestionForms: [
          "Why prefer a direct over an indirect rollover?",
          "When can a Roth conversion be beneficial?",
        ],
        mustKnow: [
          "Tax-efficient sequencing often draws taxable, then tax-deferred, then Roth (client-specific).",
          "Direct rollovers avoid mandatory withholding and preserve tax deferral; indirect rollovers risk withholding and the 60-day rule.",
          "Coordinate Roth conversions with brackets, RMDs, and Social Security taxation.",
        ],
        scoringActions: [
          "Prefer direct (trustee-to-trustee) rollovers to avoid withholding.",
          "Coordinate withdrawals and conversions across all income sources.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Retirement is one of the largest, most technical domains; convert the RMD/penalty items and the income-gap/withdrawal computations for a strong score.",
      timeBudget:
        "90–120 seconds for RMD and income-gap computations; 60 seconds for plan-type and rollover items.",
      answerSequence: [
        "Identify the plan type and its rules first.",
        "For distributions, check age, penalty exceptions, and RMD status.",
        "For needs, compute the income gap, then size the portfolio.",
        "For income, sequence tax-efficiently and prefer direct rollovers.",
      ],
      qualityChecks: [
        "Did you exclude Roth IRAs from lifetime owner RMDs?",
        "Did you check penalty exceptions before assuming a 10% penalty?",
        "Did you flag RMD age and all limits as annually variable?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m7-sn1",
        title: "Plan types, eligibility, and vesting",
        testPointIds: ["cfp-full-m7-tp1", "cfp-full-m7-tp2"],
        explanation: [
          "Retirement plans divide first by who bears the investment risk. A defined benefit plan promises a formula-based pension (based on salary and years of service), and the employer bears the investment and longevity risk of funding that promise. A defined contribution plan (401(k), 403(b)) specifies only the contributions; the account value depends on contributions and investment results, so the employee bears the risk. IRAs supplement these: traditional IRAs may offer a deduction now and tax withdrawals later, while Roth IRAs are funded after-tax and provide tax-free qualified withdrawals. SEP and SIMPLE plans are designed for small businesses and the self-employed, offering higher or simpler contributions than IRAs.",
          "Eligibility, deductibility, and vesting rules are where the exam adds precision. Contribution and catch-up limits vary by plan and age and are [ANNUALLY VARIABLE — verify]. Traditional IRA deductibility phases out with income when the taxpayer (or spouse) is covered by a workplace plan; Roth IRA eligibility phases out at higher incomes, and a backdoor Roth (nondeductible contribution then conversion) is the workaround. Vesting schedules govern when employer contributions become the employee's property — employee salary deferrals are always immediately vested, but employer contributions may vest over time.",
        ],
        keyRules: [
          "DB: employer bears risk; DC: employee bears risk.",
          "Traditional IRA deductibility phases out with workplace-plan coverage; Roth phases out by income.",
          "Vesting governs ownership of employer contributions; limits are annually variable.",
        ],
      },
      {
        id: "cfp-full-m7-sn2",
        title: "Distributions, penalties, and RMDs, worked",
        testPointIds: ["cfp-full-m7-tp3"],
        explanation: [
          "Distribution rules are technical and heavily tested. Withdrawals from tax-deferred accounts before age 59½ generally incur a 10% early-withdrawal penalty on top of ordinary income tax, but numerous exceptions exist (such as certain medical expenses, disability, qualified first-home amounts for IRAs, substantially equal periodic payments, and others) — so the exam expects you to check for an exception before assuming the penalty applies. At the other end, required minimum distributions force withdrawals from most tax-deferred accounts beginning at the applicable RMD age [ANNUALLY VARIABLE — verify], ensuring the deferred tax is eventually collected.",
          "A crucial distinction: Roth IRAs have no lifetime RMDs for the original owner, which makes them valuable for tax-free growth and legacy planning. The RMD amount is computed as the prior year-end account balance divided by the applicable life-expectancy factor from the IRS tables; missing an RMD historically triggered a steep penalty on the shortfall. The exam tests both the computation and the Roth exception, so keep them straight.",
        ],
        keyRules: [
          "Pre-59½ withdrawals: 10% penalty with exceptions — check for an exception first.",
          "RMDs begin at the applicable age (annually variable); Roth IRAs have no lifetime owner RMDs.",
          "RMD = prior year-end balance ÷ life-expectancy factor.",
        ],
        formulas: ["RMD = prior year-end balance ÷ life-expectancy factor"],
        workedProblem: {
          scenario:
            "David, now at his applicable RMD age, has a traditional IRA with a prior year-end balance of $800,000 and an applicable life-expectancy factor of 25.0. He also has a Roth IRA worth $200,000. Compute David's RMD for the traditional IRA, state the Roth requirement, and note what he must verify for the current year.",
          steps: [
            "Identify the accounts subject to RMDs: the traditional IRA is subject to RMDs; the Roth IRA is not (no lifetime RMDs for the original owner).",
            "Apply the RMD formula to the traditional IRA: RMD = prior year-end balance ÷ life-expectancy factor = $800,000 ÷ 25.0 = $32,000.",
            "State the Roth treatment: David is not required to take any RMD from his Roth IRA during his lifetime, so the $200,000 can continue growing tax-free.",
            "Note the tax character: the $32,000 traditional-IRA RMD is taxed as ordinary income in the year taken.",
            "Flag current-year verification: the applicable RMD age, the life-expectancy factor table, and any penalty for a missed RMD are annually variable and must be verified.",
          ],
          conclusion:
            "David must take a $32,000 RMD from his traditional IRA ($800,000 ÷ 25.0), taxed as ordinary income, but no RMD is required from his Roth IRA during his lifetime. The RMD age, factor table, and penalty rules are annually variable and should be confirmed for the current year.",
          markingNotes: [
            "Full credit requires the correct RMD ($32,000) and stating the Roth IRA has no lifetime owner RMD.",
            "Applying an RMD to the Roth IRA is the classic error and loses the mark.",
          ],
        },
      },
      {
        id: "cfp-full-m7-sn3",
        title: "Retirement needs and sustainable withdrawal",
        testPointIds: ["cfp-full-m7-tp4"],
        explanation: [
          "Retirement income planning starts with the income gap: the client's estimated spending need minus guaranteed income sources such as Social Security and pensions and any other income. The remaining gap must be funded by the portfolio. Sizing the portfolio then draws on sustainable-withdrawal analysis — guidelines such as an initial withdrawal near 4% (adjusted for inflation) attempt to balance the risk of running out of money against unnecessarily low spending, though the appropriate rate depends on horizon, asset mix, and flexibility.",
          "Two risks dominate the sustainability analysis. Sequence-of-returns risk is the danger that poor returns early in retirement, combined with withdrawals, permanently impair the portfolio even if average returns are fine — early losses are far more damaging than late ones. Inflation risk erodes real spending power over a potentially multi-decade retirement, so projections must be in real terms. The exam tests computing the income gap and reasoning about these risks rather than blindly applying a single withdrawal rate.",
        ],
        keyRules: [
          "Income gap = spending need - Social Security - pensions - other income.",
          "Sustainable withdrawal (~4% initial, inflation-adjusted) balances longevity and spending.",
          "Account for sequence-of-returns risk and inflation.",
        ],
      },
      {
        id: "cfp-full-m7-sn4",
        title: "Income sequencing, rollovers, and conversions",
        testPointIds: ["cfp-full-m7-tp5"],
        explanation: [
          "How withdrawals are sequenced across account types affects lifetime taxes. A common default is to draw taxable accounts first (using low-taxed gains), then tax-deferred accounts, then Roth accounts last (preserving tax-free growth), but the optimal order is client-specific and should consider brackets, RMDs, and Social Security taxation. Managing which accounts are tapped in which years can smooth income and reduce total tax.",
          "Mechanics matter for rollovers and conversions. A direct (trustee-to-trustee) rollover avoids the mandatory withholding and 60-day redeposit trap of an indirect rollover, where the distribution is paid to the client (with tax withheld) and must be fully redeposited within 60 days to avoid tax and penalty. Roth conversions accelerate tax to gain future tax-free growth and are best coordinated with low-bracket years and executed before RMDs and Social Security push income higher. The exam rewards preferring direct rollovers and coordinating conversions across all income sources.",
        ],
        keyRules: [
          "Sequence taxable, then tax-deferred, then Roth (client-specific).",
          "Prefer direct rollovers to avoid withholding and the 60-day rule.",
          "Coordinate Roth conversions with brackets, RMDs, and Social Security taxation.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m7-p1",
        testPointIds: ["cfp-full-m7-tp3"],
        style: "RMD computation",
        question:
          "Maya has a traditional IRA with a prior year-end balance of $500,000 and an applicable life-expectancy factor of 22.0, plus a Roth IRA of $150,000. Compute her traditional-IRA RMD, state the Roth requirement, and identify the annually variable elements.",
        answerPlan: [
          "Apply the RMD formula to the traditional IRA.",
          "State the Roth treatment.",
          "Flag variable figures.",
        ],
        modelAnswer:
          "Traditional-IRA RMD = $500,000 ÷ 22.0 = $22,727 (approximately), taxed as ordinary income in the year taken. Her Roth IRA requires no lifetime RMD for her as the original owner, so it can keep growing tax-free. The applicable RMD age, the life-expectancy factor table, and the penalty for a missed RMD are annually variable and must be verified for the current year.",
        markingGuide: [
          "Computes the traditional-IRA RMD of about $22,727.",
          "States the Roth IRA has no lifetime owner RMD.",
          "Flags RMD age/factor/penalty as annually variable.",
        ],
      },
      {
        id: "cfp-full-m7-p2",
        testPointIds: ["cfp-full-m7-tp4"],
        style: "Income-gap computation",
        question:
          "The Ellises project $110,000 of annual retirement spending. They expect $40,000 from Social Security and $15,000 from a small pension. Compute their annual income gap, and estimate the portfolio needed to fund it using a 4% initial sustainable withdrawal guideline, noting the risks to this estimate.",
        answerPlan: [
          "Compute the income gap.",
          "Apply the withdrawal guideline.",
          "Note the risks.",
        ],
        modelAnswer:
          "Income gap = $110,000 spending - $40,000 Social Security - $15,000 pension = $55,000 per year. Using a 4% initial sustainable-withdrawal guideline, the portfolio needed is $55,000 ÷ 0.04 = $1,375,000. This is only an estimate: sequence-of-returns risk means poor early returns combined with withdrawals could exhaust the portfolio sooner, and inflation will raise the required withdrawal over time, so the plan should be stress-tested and monitored rather than treated as guaranteed.",
        markingGuide: [
          "Computes the $55,000 income gap.",
          "Applies the 4% guideline to reach about $1,375,000.",
          "Notes sequence-of-returns and inflation risks to the estimate.",
        ],
      },
      {
        id: "cfp-full-m7-p3",
        testPointIds: ["cfp-full-m7-tp5"],
        style: "Rollover item",
        question:
          "David is leaving his employer and wants to move his $400,000 401(k) to an IRA. Explain why a direct rollover is preferable to taking the money himself and redepositing it, and what could go wrong with the indirect approach.",
        answerPlan: [
          "Recommend the direct rollover.",
          "Explain the withholding issue.",
          "Explain the 60-day risk.",
        ],
        modelAnswer:
          "David should use a direct (trustee-to-trustee) rollover, in which the funds move directly from the 401(k) to the IRA. This avoids the mandatory 20% withholding that applies to an indirect rollover (where the distribution is paid to him). With an indirect rollover, he would receive only 80% but must redeposit the full 100% within 60 days to avoid tax and, if under 59½, a penalty on the shortfall — meaning he would have to make up the withheld 20% from other funds. Missing the 60-day deadline would make the distribution taxable and potentially subject to penalty. The direct rollover eliminates these risks and preserves tax deferral.",
        markingGuide: [
          "Recommends the direct/trustee-to-trustee rollover.",
          "Explains the mandatory withholding on indirect rollovers.",
          "Explains the 60-day redeposit risk and tax/penalty consequence.",
        ],
      },
    ],
  }),

  "cfp-full-m8": examDepth({
    testPoints: [
      {
        id: "cfp-full-m8-tp1",
        title: "Social Security benefit basics and full retirement age",
        priority: "high",
        examinerFocus:
          "How benefits derive from the highest 35 years of indexed earnings (AIME to PIA), how full retirement age varies by birth year, and the effect of claiming before or after FRA.",
        typicalQuestionForms: [
          "How many years of earnings determine the benefit?",
          "What happens to benefits if claimed before full retirement age?",
        ],
        mustKnow: [
          "Benefits derive from the highest 35 years of indexed earnings (AIME then PIA).",
          "Full retirement age (FRA) varies by birth year; claiming before FRA permanently reduces benefits.",
          "Delaying past FRA up to age 70 earns delayed retirement credits that increase benefits.",
        ],
        scoringActions: [
          "Tie the benefit to the highest 35 indexed years.",
          "Frame early claiming as a permanent reduction and delay as an increase.",
        ],
      },
      {
        id: "cfp-full-m8-tp2",
        title: "Claiming strategies and spousal/survivor benefits",
        priority: "critical",
        examinerFocus:
          "Evaluating claiming-age trade-offs through the survivor-benefit lens, since the survivor keeps the larger of the two benefits, and understanding spousal benefits (up to 50% of the worker's PIA at FRA).",
        typicalQuestionForms: [
          "Why might the higher earner delay claiming?",
          "How large can a spousal benefit be at FRA?",
        ],
        mustKnow: [
          "Delaying the higher earner's benefit to 70 maximizes the survivor benefit.",
          "A spousal benefit can be up to 50% of the worker's PIA at FRA.",
          "The survivor keeps the larger of the two spouses' benefits.",
        ],
        scoringActions: [
          "Evaluate couples' claiming through the survivor-benefit lens.",
          "Consider having the higher earner delay to protect the survivor.",
        ],
      },
      {
        id: "cfp-full-m8-tp3",
        title: "Social Security taxation and coordination",
        priority: "high",
        examinerFocus:
          "That up to 85% of benefits may be taxable depending on provisional income, that Roth withdrawals do not add to provisional income, and coordinating claiming with RMDs and portfolio withdrawals.",
        typicalQuestionForms: [
          "What determines how much of a benefit is taxable?",
          "Why can Roth income help manage benefit taxation?",
        ],
        mustKnow: [
          "Up to 85% of Social Security benefits may be taxable depending on provisional income; thresholds are [ANNUALLY VARIABLE — verify].",
          "Roth withdrawals do not count toward provisional income.",
          "Coordinate claiming with RMDs and portfolio withdrawals to manage taxable benefits.",
        ],
        scoringActions: [
          "Use provisional income to determine the taxable share of benefits.",
          "Deploy Roth income to reduce provisional income where helpful; flag thresholds as annually variable.",
        ],
      },
      {
        id: "cfp-full-m8-tp4",
        title: "Pension options and annuitization",
        priority: "high",
        examinerFocus:
          "Comparing single-life vs joint-and-survivor pension options and the lump-sum vs annuity decision, considering health, other income, and legacy goals.",
        typicalQuestionForms: [
          "What is the trade-off between single-life and joint-and-survivor pensions?",
          "When might a lump sum be preferable to an annuity?",
        ],
        mustKnow: [
          "Single-life pays more but ends at the retiree's death; joint-and-survivor pays less but protects a spouse.",
          "A lump sum offers control and legacy potential; an annuity offers guaranteed lifetime income.",
          "Annuity types include immediate, deferred, fixed, variable, and indexed.",
        ],
        scoringActions: [
          "Protect a dependent spouse with a joint-and-survivor option unless clearly unnecessary.",
          "Weigh health, other income, and legacy goals in the lump-sum vs annuity decision.",
        ],
      },
      {
        id: "cfp-full-m8-tp5",
        title: "Longevity risk and guaranteed-income floors",
        priority: "medium",
        examinerFocus:
          "That annuities and Social Security pool mortality risk to provide lifetime income, and the guaranteed-income-floor strategy of covering essentials with guaranteed sources while the portfolio funds discretionary spending.",
        typicalQuestionForms: [
          "How do annuities address longevity risk?",
          "What is a guaranteed-income-floor strategy?",
        ],
        mustKnow: [
          "Longevity risk is the danger of outliving assets; it grows with life expectancy.",
          "Annuities and Social Security pool mortality risk, providing lifetime income.",
          "A guaranteed-income floor covers essential spending; the portfolio funds discretionary spending.",
        ],
        scoringActions: [
          "Match guaranteed income to essential expenses (the floor).",
          "Use the portfolio for discretionary spending above the floor.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Social Security and pension decisions are irreversible and high-stakes; convert the claiming/survivor items and the pension-option analysis for reliable marks.",
      timeBudget:
        "60–90 seconds per item; claiming and pension items are conceptual with light arithmetic.",
      answerSequence: [
        "For couples, evaluate claiming through the survivor-benefit lens.",
        "For taxation, use provisional income and consider Roth to manage it.",
        "For pensions, protect a dependent spouse and weigh lump sum vs annuity on health/legacy.",
        "For longevity, build a guaranteed-income floor for essentials.",
      ],
      qualityChecks: [
        "Did you consider having the higher earner delay to protect the survivor?",
        "Did you use provisional income for benefit taxation?",
        "Did you match guaranteed income to essential expenses?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m8-sn1",
        title: "Benefit basics and claiming through the survivor lens",
        testPointIds: ["cfp-full-m8-tp1", "cfp-full-m8-tp2"],
        explanation: [
          "Social Security benefits are built from the worker's highest 35 years of indexed earnings, averaged into the AIME and converted through a progressive formula into the PIA (the benefit at full retirement age). Full retirement age varies by birth year. Claiming before FRA permanently reduces the monthly benefit, while delaying past FRA up to age 70 earns delayed retirement credits that permanently increase it — so the claiming-age decision is a lasting trade-off between more years of a smaller benefit and fewer years of a larger one.",
          "For married couples, the decisive frame is often the survivor benefit. When one spouse dies, the survivor keeps the larger of the two benefits, so maximizing the higher earner's benefit by delaying to 70 also maximizes the income the survivor will receive for the rest of their life — frequently the single most valuable claiming move. Spousal benefits (up to 50% of the worker's PIA at FRA) matter for lower-earning spouses. The exam repeatedly rewards analyzing couples' claiming through the survivor-benefit lens rather than in isolation.",
        ],
        keyRules: [
          "Benefit = highest 35 indexed years (AIME then PIA); FRA varies by birth year.",
          "Early claiming permanently reduces; delaying to 70 permanently increases.",
          "The survivor keeps the larger benefit — a reason for the higher earner to delay.",
        ],
        workedProblem: {
          scenario:
            "Maya's PIA is $1,600/month and David's PIA is $2,800/month; David is the higher earner and in good health, and Maya is expected to outlive him. They ask whether David should claim early at 62 (with a permanent reduction) or delay to 70 (with delayed credits). Frame the analysis and give a recommendation, focusing on the survivor outcome.",
          steps: [
            "Identify the higher earner: David ($2,800 PIA) versus Maya ($1,600 PIA).",
            "Recall the survivor rule: when the first spouse dies, the survivor keeps the larger of the two benefits.",
            "Assess the effect of David claiming at 62: it permanently reduces his benefit, which also becomes the reduced amount the survivor (likely Maya) would keep.",
            "Assess the effect of David delaying to 70: delayed retirement credits permanently increase his benefit, raising the survivor benefit Maya would receive for the rest of her life.",
            "Weigh the facts: David is healthy and Maya is expected to outlive him, so maximizing the survivor benefit is high value; Maya can claim her own or a spousal benefit earlier if income is needed in the interim.",
          ],
          conclusion:
            "David (the higher earner, in good health, with a spouse likely to survive him) should generally delay to 70 to maximize the survivor benefit Maya will keep for life; Maya can claim earlier to provide interim income. The survivor-benefit lens, not just breakeven age, drives the recommendation.",
          markingNotes: [
            "Full credit requires framing the decision around the survivor keeping the larger benefit and recommending the higher earner delay.",
            "Recommending David claim early purely for earlier income, ignoring the survivor impact, loses the analysis mark.",
          ],
        },
      },
      {
        id: "cfp-full-m8-sn2",
        title: "Benefit taxation and coordination",
        testPointIds: ["cfp-full-m8-tp3"],
        explanation: [
          "Social Security benefits can be partially taxable: depending on the retiree's provisional income (roughly adjusted gross income plus tax-exempt interest plus half of Social Security benefits), up to 85% of benefits may be included in taxable income, with the thresholds [ANNUALLY VARIABLE — verify the current-year figure]. Because the taxable share rises with provisional income, managing other income in retirement directly affects how much of the benefit is taxed.",
          "This creates coordination opportunities. Roth withdrawals do not count toward provisional income, so drawing from Roth accounts (rather than taxable-income-generating sources) can keep more of the Social Security benefit tax-free. Coordinating the timing of claiming with RMDs and portfolio withdrawals — for example, doing Roth conversions before claiming and before RMDs begin — can reduce lifetime taxation of benefits. The exam tests the provisional-income mechanism and the Roth coordination insight, with dollar thresholds treated as annually variable.",
        ],
        keyRules: [
          "Up to 85% of benefits may be taxable based on provisional income (thresholds annually variable).",
          "Roth withdrawals do not add to provisional income.",
          "Coordinate claiming with RMDs and withdrawals to manage taxable benefits.",
        ],
      },
      {
        id: "cfp-full-m8-sn3",
        title: "Pension options and the lump-sum decision",
        testPointIds: ["cfp-full-m8-tp4"],
        explanation: [
          "A retiree with a defined benefit pension usually faces two decisions. First, the payout form: a single-life annuity pays the most but stops entirely at the retiree's death, while a joint-and-survivor option pays a lower amount but continues (in whole or part) to a surviving spouse. Choosing single-life when a spouse depends on the income is a serious error; the survivor could be left without that income. Second, if offered, the lump-sum-versus-annuity choice: a lump sum offers investment control and legacy potential but shifts investment and longevity risk to the retiree, while the annuity provides guaranteed lifetime income that pools longevity risk.",
          "The right choice depends on the client's facts: health and life expectancy (poor health may favor a lump sum or single-life), the presence of a dependent spouse (favoring joint-and-survivor), other guaranteed income, legacy goals, and the annuity's implied return versus what the retiree could safely earn. Annuity types (immediate, deferred, fixed, variable, indexed) offer different guarantees and risks. The exam tests protecting a dependent spouse and weighing the lump-sum decision on health, income, and legacy.",
        ],
        keyRules: [
          "Single-life pays more but ends at death; joint-and-survivor protects a spouse.",
          "Lump sum = control/legacy but retiree bears risk; annuity = guaranteed lifetime income.",
          "Decide based on health, dependent spouse, other income, and legacy goals.",
        ],
      },
      {
        id: "cfp-full-m8-sn4",
        title: "Longevity risk and the income floor",
        testPointIds: ["cfp-full-m8-tp5"],
        explanation: [
          "Longevity risk — outliving one's assets — is a defining retirement risk and grows as life expectancy rises. Guaranteed lifetime income sources address it by pooling mortality risk across many people: Social Security and annuities pay for as long as the recipient lives, transferring the risk of unusual longevity to the payer. This makes them uniquely suited to covering expenses that must be met no matter how long the retiree lives.",
          "The guaranteed-income-floor strategy applies this insight: cover essential, non-negotiable expenses (housing, food, healthcare, insurance) with guaranteed income (Social Security, pensions, annuities), so those needs are secure regardless of markets or lifespan, and fund discretionary spending (travel, gifts) from the investment portfolio, which can flex with market conditions. Deferred income annuities can hedge late-life longevity specifically. The exam tests matching guaranteed income to essential expenses and using the portfolio for discretionary needs.",
        ],
        keyRules: [
          "Longevity risk = outliving assets; it grows with life expectancy.",
          "Annuities and Social Security pool mortality risk for lifetime income.",
          "Income floor: guaranteed income covers essentials; portfolio funds discretionary spending.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m8-p1",
        testPointIds: ["cfp-full-m8-tp2"],
        style: "Claiming-strategy item",
        question:
          "David (higher earner, good health) and Maya (lower earner, family history of longevity) ask when David should claim Social Security. Explain the survivor-benefit consideration and give a recommendation with reasoning.",
        answerPlan: [
          "Identify the higher earner.",
          "Apply the survivor rule.",
          "Recommend and justify.",
        ],
        modelAnswer:
          "David is the higher earner, and when the first spouse dies the survivor keeps the larger of the two benefits. Because David is in good health and Maya is likely to outlive him, delaying David's claim to age 70 earns delayed retirement credits that permanently raise his benefit — and therefore the survivor benefit Maya would receive for the rest of her life. I would recommend David delay to 70 to maximize the survivor benefit, while Maya can claim earlier (her own or a spousal benefit) for interim income if needed. The analysis is driven by the survivor outcome, not just David's own breakeven.",
        markingGuide: [
          "Identifies David as the higher earner and applies the survivor rule.",
          "Recommends David delay to 70 to maximize the survivor benefit.",
          "Allows Maya to claim earlier for interim income.",
        ],
      },
      {
        id: "cfp-full-m8-p2",
        testPointIds: ["cfp-full-m8-tp3"],
        style: "Taxation-coordination item",
        question:
          "In retirement, the Ellises find that a large portion of their Social Security is being taxed because of sizable traditional-IRA withdrawals. Explain the mechanism and how drawing from a Roth instead could help. Note the variable figures.",
        answerPlan: [
          "Explain provisional income.",
          "Explain the Roth effect.",
          "Flag variability.",
        ],
        modelAnswer:
          "Up to 85% of Social Security benefits become taxable as provisional income rises, and traditional-IRA withdrawals are ordinary income that increases provisional income, pushing more of the benefit into the taxable range. Drawing from a Roth IRA instead helps because qualified Roth withdrawals do not count toward provisional income, so substituting Roth withdrawals for some traditional-IRA withdrawals can lower provisional income and reduce the taxable portion of Social Security. The provisional-income thresholds are annually variable and must be verified for the current year.",
        markingGuide: [
          "Explains provisional income drives benefit taxation.",
          "Explains Roth withdrawals do not add to provisional income.",
          "Flags thresholds as annually variable.",
        ],
      },
      {
        id: "cfp-full-m8-p3",
        testPointIds: ["cfp-full-m8-tp4", "cfp-full-m8-tp5"],
        style: "Pension/floor item",
        question:
          "David is offered a single-life pension of $4,000/month or a joint-and-survivor pension of $3,300/month (continuing to Maya). Their essential expenses are $6,500/month. Explain which pension option better fits their situation and how it relates to building an income floor.",
        answerPlan: [
          "Compare the pension options.",
          "Apply the dependent-spouse consideration.",
          "Relate to the income floor.",
        ],
        modelAnswer:
          "Because Maya is a dependent spouse likely to outlive David, the joint-and-survivor option at $3,300/month is the better fit: the single-life option pays more ($4,000) but would stop entirely at David's death, leaving Maya without that income. The joint-and-survivor pension, combined with their Social Security, forms a guaranteed-income floor that continues for the survivor. That guaranteed income should be matched against their $6,500 of essential monthly expenses, with any remaining essential gap covered by additional guaranteed sources and discretionary spending funded from the portfolio.",
        markingGuide: [
          "Recommends the joint-and-survivor option to protect Maya.",
          "Explains the single-life option ends at David's death.",
          "Relates the guaranteed pension to covering essential expenses (income floor).",
        ],
      },
    ],
  }),

  "cfp-full-m9": examDepth({
    testPoints: [
      {
        id: "cfp-full-m9-tp1",
        title: "Estate documents and probate avoidance",
        priority: "high",
        examinerFocus:
          "The functions of wills, durable powers of attorney, and health directives, and how titling and beneficiary designations pass assets outside probate.",
        typicalQuestionForms: [
          "How do beneficiary designations bypass probate?",
          "What documents address incapacity?",
        ],
        mustKnow: [
          "A will directs distribution and names guardians/executors; durable POAs and health directives handle incapacity.",
          "Probate is the court process validating a will and settling the estate.",
          "Titling (JTWROS) and beneficiary designations pass assets outside probate.",
        ],
        scoringActions: [
          "Determine whether an asset passes by will, titling, or beneficiary.",
          "Match incapacity needs to durable POAs and health directives.",
        ],
      },
      {
        id: "cfp-full-m9-tp2",
        title: "Property titling and its consequences",
        priority: "medium",
        examinerFocus:
          "How ownership forms (JTWROS, tenancy in common, community property) determine transfer at death and affect basis, and that titling can override will provisions.",
        typicalQuestionForms: [
          "How does JTWROS differ from tenancy in common?",
          "Why must titling align with the estate plan?",
        ],
        mustKnow: [
          "JTWROS passes to the survivor automatically; tenancy in common leaves a divisible, devisable share.",
          "Community-property rules vary by state and affect basis (potential full step-up).",
          "Titling and beneficiary designations can override will provisions, so they must align with the plan.",
        ],
        scoringActions: [
          "Check that titling and beneficiaries align with the overall plan.",
          "Consider basis consequences of the ownership form.",
        ],
      },
      {
        id: "cfp-full-m9-tp3",
        title: "Trusts and their planning uses",
        priority: "high",
        examinerFocus:
          "Distinguishing revocable (probate avoidance/incapacity, no estate-tax shield) from irrevocable trusts (can remove assets from the taxable estate), and the roles of marital, bypass, and special-purpose trusts.",
        typicalQuestionForms: [
          "Does a revocable trust reduce estate tax?",
          "What is the role of a bypass trust?",
        ],
        mustKnow: [
          "Revocable living trusts avoid probate and manage incapacity but do not reduce estate tax.",
          "Irrevocable trusts can remove assets from the taxable estate.",
          "Marital (A) and bypass (B) trusts manage spousal transfers and exemption use; special-purpose trusts serve minors, special needs, and asset protection.",
        ],
        scoringActions: [
          "Never claim a revocable trust reduces estate tax.",
          "Match the trust type to the goal (probate, tax, control, special needs).",
        ],
      },
      {
        id: "cfp-full-m9-tp4",
        title: "Gift and estate taxation and basis",
        priority: "critical",
        examinerFocus:
          "Applying the annual gift exclusion, the unified credit/lifetime exemption, the unlimited marital deduction, and the step-up in basis at death, and the gift-vs-bequest basis trade-off. All figures are annually variable.",
        typicalQuestionForms: [
          "What does the unlimited marital deduction accomplish?",
          "How does step-up in basis benefit heirs?",
          "Compare gifting appreciated stock now vs bequeathing it at death.",
        ],
        mustKnow: [
          "Annual gift exclusion allows tax-free gifts up to a per-donee limit [ANNUALLY VARIABLE — verify]; the unified credit shelters a lifetime exemption [ANNUALLY VARIABLE — verify].",
          "The unlimited marital deduction defers tax on transfers to a U.S.-citizen spouse.",
          "Step-up in basis at death resets appreciated-asset basis to fair value; gifts carry over the donor's basis.",
        ],
        scoringActions: [
          "Weigh carryover basis (gift) vs step-up (bequest) in transfer decisions.",
          "Flag exclusion and exemption amounts as annually variable.",
        ],
      },
      {
        id: "cfp-full-m9-tp5",
        title: "Wealth-transfer and charitable strategies",
        priority: "medium",
        examinerFocus:
          "Systematic gifting to shrink the estate, valuation discounts and GST planning for larger estates, charitable vehicles (CRTs/CLTs, donor-advised funds), and using an ILIT for estate liquidity.",
        typicalQuestionForms: [
          "How does annual gifting reduce estate tax over time?",
          "Why hold life insurance in an ILIT?",
        ],
        mustKnow: [
          "Systematic annual-exclusion gifting shrinks the taxable estate over time.",
          "Charitable remainder/lead trusts and donor-advised funds combine giving with tax benefits.",
          "Life insurance in an ILIT can provide estate liquidity outside the taxable estate.",
        ],
        scoringActions: [
          "Use annual-exclusion gifting to reduce a taxable estate over time.",
          "Recommend an ILIT to keep insurance proceeds out of the taxable estate.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "Estate planning is technical and integrates tax, insurance, and family goals; convert the transfer-tax/basis items and the trust-purpose questions for a strong score.",
      timeBudget:
        "60–90 seconds per item; the gift-vs-bequest basis comparison may take slightly longer.",
      answerSequence: [
        "Determine how each asset passes (will, titling, beneficiary, trust).",
        "For strategies, ask whether the goal is probate, taxes, or control.",
        "For transfers, weigh carryover basis (gift) vs step-up (bequest).",
        "Flag all exclusion/exemption figures as annually variable.",
      ],
      qualityChecks: [
        "Did you avoid claiming a revocable trust reduces estate tax?",
        "Did you weigh basis consequences in gift-vs-bequest questions?",
        "Did you flag exclusion and exemption amounts as annually variable?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m9-sn1",
        title: "Documents, probate, and titling",
        testPointIds: ["cfp-full-m9-tp1", "cfp-full-m9-tp2"],
        explanation: [
          "The estate plan starts with core documents. A will directs how probate assets are distributed and names an executor and guardians for minor children; durable powers of attorney (for financial matters) and health-care directives (for medical decisions) address incapacity while the person is alive. Probate is the court-supervised process of validating the will and settling the estate, which can be time-consuming and public, so much planning aims to pass assets outside probate.",
          "How an asset is titled or designated frequently controls its transfer and can override the will. Assets held as joint tenancy with right of survivorship (JTWROS) pass automatically to the surviving owner; tenancy in common leaves each owner a divisible share that passes through their estate; community-property rules in certain states affect ownership and can allow a full basis step-up. Beneficiary designations on retirement accounts and life insurance pass those assets directly to the named beneficiaries outside probate. Because titling and beneficiaries can defeat a will, they must be coordinated with the overall plan — a mismatch is a classic exam trap.",
        ],
        keyRules: [
          "Wills direct probate assets; durable POAs and health directives handle incapacity.",
          "JTWROS and beneficiary designations pass assets outside probate.",
          "Titling/beneficiaries can override the will and must align with the plan.",
        ],
      },
      {
        id: "cfp-full-m9-sn2",
        title: "Trusts: matching the vehicle to the goal",
        testPointIds: ["cfp-full-m9-tp3"],
        explanation: [
          "Trusts are flexible tools, and the exam wants you to match the trust to the client's goal. A revocable living trust avoids probate and provides for management during incapacity, but because the grantor retains control, the assets remain in the taxable estate — it does not reduce estate tax, a point the exam tests relentlessly. Irrevocable trusts, by contrast, involve giving up control, which can remove the assets (and future appreciation) from the taxable estate, making them the tool when estate-tax reduction is the goal.",
          "Specific trusts serve specific purposes. Marital (A) trusts and bypass (B, or credit-shelter) trusts coordinate spousal transfers to use both spouses' exemptions and defer or minimize tax; a bypass trust holds assets that use the deceased spouse's exemption so they pass to heirs free of estate tax at the second death. Special-purpose trusts address particular needs: trusts for minors, special-needs trusts that preserve government-benefit eligibility, and asset-protection trusts. The organizing question is always whether the goal is probate avoidance, tax reduction, control, or protection.",
        ],
        keyRules: [
          "Revocable trusts avoid probate/manage incapacity but do NOT reduce estate tax.",
          "Irrevocable trusts can remove assets from the taxable estate.",
          "Match marital/bypass/special-purpose trusts to the specific goal.",
        ],
      },
      {
        id: "cfp-full-m9-sn3",
        title: "Transfer taxation and the gift-vs-bequest basis trade-off, worked",
        testPointIds: ["cfp-full-m9-tp4"],
        explanation: [
          "The federal transfer-tax system has several shelters, all with [ANNUALLY VARIABLE — verify] dollar amounts. The annual gift exclusion lets a donor give up to a set amount per donee each year free of gift tax and without using the lifetime exemption. The unified credit shelters a lifetime exemption from combined gift and estate tax. The unlimited marital deduction allows unlimited tax-free transfers to a U.S.-citizen spouse, deferring (not eliminating) tax until the second death. These combine with titling and trusts to minimize transfer tax.",
          "Basis is the other half of the analysis and drives the gift-versus-bequest decision. Property given during life carries over the donor's basis to the recipient (carryover basis), so the recipient inherits the built-in gain. Property transferred at death generally receives a step-up in basis to fair market value at death, erasing the pre-death appreciation for income-tax purposes. This creates a trade-off: gifting appreciated property removes future appreciation from the estate but forfeits the step-up, while holding it until death gives heirs a stepped-up basis but keeps the asset in the taxable estate. The exam tests choosing between these based on the client's estate-tax exposure and the asset's appreciation.",
        ],
        keyRules: [
          "Annual exclusion + unified credit + unlimited marital deduction shelter transfers (amounts annually variable).",
          "Gifts carry over the donor's basis; bequests generally get a step-up at death.",
          "Weigh removing appreciation from the estate (gift) against the step-up (bequest).",
        ],
        workedProblem: {
          scenario:
            "Maya holds stock worth $200,000 with a cost basis of $40,000 (a $160,000 built-in gain). She is considering either gifting it now to her adult daughter Sofia or leaving it to Sofia at death. Assume the Ellises' estate is well below the current exemption so estate tax is not a concern. Analyze the income-tax basis consequences and recommend an approach.",
          steps: [
            "Analyze the gift path: a lifetime gift transfers Maya's carryover basis of $40,000 to Sofia, so if Sofia later sells at $200,000 she realizes a $160,000 taxable gain.",
            "Analyze the bequest path: property inherited at death generally receives a step-up in basis to fair market value ($200,000), so if Sofia sells shortly after at $200,000 she realizes little or no gain.",
            "Assess estate-tax exposure: the estate is well below the current (annually variable) exemption, so keeping the asset in the estate creates no estate tax.",
            "Compare outcomes: because there is no estate-tax concern, the step-up at death is more valuable than removing the asset from the estate, since it eliminates the $160,000 built-in gain for income-tax purposes.",
            "Recommend: hold the appreciated stock until death so Sofia receives the step-up, rather than gifting it now and saddling her with the carryover basis.",
          ],
          conclusion:
            "Because the estate is below the (annually variable) exemption, Maya should hold the appreciated stock until death so Sofia receives a stepped-up basis to $200,000, avoiding the $160,000 built-in gain. Gifting would transfer the low carryover basis and create a large future taxable gain. The recommendation flips only if estate-tax exposure makes removing the asset from the estate worthwhile.",
          markingNotes: [
            "Full credit requires contrasting carryover basis (gift) with step-up (bequest) and tying the recommendation to the lack of estate-tax exposure.",
            "Recommending the gift for a below-exemption estate (losing the step-up) is the classic error.",
            "Exemption/exclusion amounts must be flagged as annually variable.",
          ],
        },
      },
      {
        id: "cfp-full-m9-sn4",
        title: "Wealth-transfer and charitable strategies",
        testPointIds: ["cfp-full-m9-tp5"],
        explanation: [
          "For clients with taxable estates, systematic gifting shrinks the estate over time: using the annual exclusion for multiple donees every year moves substantial wealth out of the estate free of gift tax and without using the lifetime exemption. Larger estates layer on techniques such as valuation discounts (for gifts of interests in closely held entities) and generation-skipping transfer (GST) planning to move wealth to grandchildren efficiently, all subject to annually variable limits.",
          "Charitable strategies combine philanthropy with tax benefits. Charitable remainder trusts pay income to the donor (or others) with the remainder to charity, providing an income stream and a partial deduction; charitable lead trusts do the reverse; donor-advised funds allow an immediate deduction with flexible future granting. Finally, an irrevocable life insurance trust (ILIT) can own a life insurance policy so the death benefit provides liquidity to pay estate taxes and expenses while remaining outside the taxable estate — a common solution when an estate is asset-rich but cash-poor. The exam tests these as goal-matched tools.",
        ],
        keyRules: [
          "Annual-exclusion gifting shrinks a taxable estate over time.",
          "CRTs/CLTs and donor-advised funds combine giving with tax benefits.",
          "An ILIT provides estate liquidity with proceeds outside the taxable estate.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m9-p1",
        testPointIds: ["cfp-full-m9-tp3"],
        style: "Trust-purpose item",
        question:
          "The Ellises set up a revocable living trust and believe it will reduce their estate tax. Explain what a revocable living trust does and does not accomplish, and what they would need instead to reduce estate tax.",
        answerPlan: [
          "State what a revocable trust accomplishes.",
          "Correct the estate-tax misconception.",
          "Identify the tool that does reduce estate tax.",
        ],
        modelAnswer:
          "A revocable living trust avoids probate and provides for management of the assets if the Ellises become incapacitated, and it can be changed or revoked during their lives. However, because they retain control over the assets, those assets remain in their taxable estate — a revocable trust does not reduce estate tax. To reduce estate tax, they would need to remove assets from the taxable estate, for example through irrevocable trusts (giving up control) or other transfer strategies such as systematic gifting or an ILIT for life insurance.",
        markingGuide: [
          "States the revocable trust avoids probate and manages incapacity.",
          "Corrects that it does not reduce estate tax (assets remain in the estate).",
          "Identifies irrevocable trusts/gifting as the estate-tax-reducing tools.",
        ],
      },
      {
        id: "cfp-full-m9-p2",
        testPointIds: ["cfp-full-m9-tp4"],
        style: "Basis trade-off item",
        question:
          "David owns land bought for $60,000 now worth $260,000. His estate is well below the current exemption. He asks whether to gift the land to Leo now or leave it to him at death. Compare the income-tax basis outcomes and recommend an approach, flagging the variable figure.",
        answerPlan: [
          "Analyze the gift basis outcome.",
          "Analyze the bequest basis outcome.",
          "Recommend given no estate-tax exposure.",
        ],
        modelAnswer:
          "If David gifts the land now, Leo takes David's carryover basis of $60,000, so a later sale at $260,000 would produce a $200,000 taxable gain. If David instead leaves the land to Leo at death, it generally receives a step-up in basis to its fair market value (about $260,000), so a sale near that value would produce little or no gain. Because David's estate is well below the current (annually variable) exemption, there is no estate-tax reason to remove the land from the estate, so he should hold it until death to give Leo the stepped-up basis and avoid the $200,000 built-in gain.",
        markingGuide: [
          "States the gift transfers the $60,000 carryover basis (large future gain).",
          "States the bequest gives a step-up to about $260,000.",
          "Recommends holding until death given no estate-tax exposure and flags the exemption as annually variable.",
        ],
      },
      {
        id: "cfp-full-m9-p3",
        testPointIds: ["cfp-full-m9-tp1", "cfp-full-m9-tp5"],
        style: "Integrated estate item",
        question:
          "The Ellises' estate is illiquid (mostly a business and real estate) but large enough to owe estate tax. Explain how beneficiary designations/titling, and an ILIT, would help their estate plan.",
        answerPlan: [
          "Address probate avoidance via titling/beneficiaries.",
          "Address the liquidity problem.",
          "Explain the ILIT solution.",
        ],
        modelAnswer:
          "First, coordinating titling and beneficiary designations lets assets like retirement accounts and life insurance pass directly to heirs outside probate, speeding transfer and keeping it private, provided they align with the overall plan. Second, the estate's illiquidity is a problem because estate taxes and expenses must be paid in cash, and forcing a sale of the business or real estate could be costly. An irrevocable life insurance trust (ILIT) solves this: the ILIT owns a life insurance policy whose death benefit provides liquidity to pay the estate tax and expenses, and because the ILIT (not the Ellises) owns the policy, the proceeds are outside their taxable estate.",
        markingGuide: [
          "Explains titling/beneficiaries pass assets outside probate (aligned with the plan).",
          "Identifies the estate-liquidity problem for taxes/expenses.",
          "Explains the ILIT provides liquidity with proceeds outside the taxable estate.",
        ],
      },
    ],
  }),

  "cfp-full-m10": examDepth({
    testPoints: [
      {
        id: "cfp-full-m10-tp1",
        title: "Cognitive vs emotional biases and their treatment",
        priority: "high",
        examinerFocus:
          "Distinguishing cognitive biases (flawed reasoning, correctable with information) from emotional biases (feeling-driven, better accommodated), and identifying specific biases from a description.",
        typicalQuestionForms: [
          "How do cognitive and emotional biases differ in treatment?",
          "A client refuses to sell a losing stock to avoid realizing the loss. Which bias is this?",
        ],
        mustKnow: [
          "Cognitive biases (anchoring, overconfidence, recency) stem from flawed reasoning and can be corrected with information/education.",
          "Emotional biases (loss aversion, status quo, regret) are feeling-driven and are usually accommodated rather than corrected.",
          "Loss aversion makes losses feel more painful than equivalent gains.",
        ],
        scoringActions: [
          "Classify the bias as cognitive or emotional before choosing a remedy.",
          "Correct cognitive biases with information; accommodate emotional biases.",
        ],
      },
      {
        id: "cfp-full-m10-tp2",
        title: "Framing, mental accounting, and nudges",
        priority: "high",
        examinerFocus:
          "How framing changes decisions, how mental accounting leads clients to treat money differently by bucket, and how defaults/automation improve savings behavior.",
        typicalQuestionForms: [
          "How can framing improve client decisions?",
          "Why are defaults powerful in savings behavior?",
        ],
        mustKnow: [
          "Framing the same choice differently (gain vs loss) changes decisions.",
          "Mental accounting leads clients to treat money differently by 'bucket' rather than fungibly.",
          "Defaults and automation (auto-enrollment, auto-escalation) improve savings behavior.",
        ],
        scoringActions: [
          "Use goal-based framing and helpful defaults to nudge better behavior.",
          "Watch for mental accounting distorting sound financial decisions.",
        ],
      },
      {
        id: "cfp-full-m10-tp3",
        title: "Communication and counseling techniques",
        priority: "high",
        examinerFocus:
          "That active listening, open-ended questions, empathy, and jargon-free communication build the trust needed for clients to follow the plan.",
        typicalQuestionForms: [
          "Why are open-ended questions valuable in client meetings?",
          "How does trust affect plan implementation?",
        ],
        mustKnow: [
          "Active listening and open-ended questions surface true goals and concerns.",
          "Empathy, transparency, and jargon-free explanations build trust and understanding.",
          "Trust drives follow-through and successful implementation.",
        ],
        scoringActions: [
          "Favor listening and client-centered responses on communication items.",
          "Use plain language to build understanding and buy-in.",
        ],
      },
      {
        id: "cfp-full-m10-tp4",
        title: "Money scripts, culture, and life transitions",
        priority: "medium",
        examinerFocus:
          "That money scripts (ingrained beliefs about money) and cultural background shape financial attitudes, and that life transitions require sensitivity and adjusted plans.",
        typicalQuestionForms: [
          "What are money scripts and why do they matter?",
          "How should planners handle major life transitions?",
        ],
        mustKnow: [
          "Money scripts are ingrained beliefs about money shaped by upbringing.",
          "Cultural background influences financial priorities and communication style.",
          "Life transitions (divorce, death, job loss) require sensitivity and plan adjustment.",
        ],
        scoringActions: [
          "Surface money scripts to understand the client's behavior.",
          "Adapt communication and plans to culture and life transitions.",
        ],
      },
      {
        id: "cfp-full-m10-tp5",
        title: "Behavior change and managing planner bias",
        priority: "medium",
        examinerFocus:
          "Using behavior-change techniques (small steps, accountability, commitment devices) and recognizing that planners have their own biases to manage.",
        typicalQuestionForms: [
          "Name a technique to help clients sustain behavior change.",
          "Why must planners manage their own biases?",
        ],
        mustKnow: [
          "Behavior-change techniques (small steps, accountability, commitment devices) improve follow-through.",
          "Planners have biases too; self-awareness prevents projecting them onto clients.",
          "Documenting decisions supports objective, client-centered advice.",
        ],
        scoringActions: [
          "Recommend concrete behavior-change tools for follow-through.",
          "Guard against projecting the planner's own risk preferences onto the client.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "The psychology domain is now distinct and testable; convert the bias-classification and communication items by defaulting to client-centered, behavior-aware answers.",
      timeBudget:
        "45–75 seconds per item; these are conceptual with no computation.",
      answerSequence: [
        "Classify any bias as cognitive or emotional before choosing a remedy.",
        "For communication, favor listening and plain-language, client-centered answers.",
        "Match interventions (framing, defaults, commitment devices) to the described behavior.",
        "Check for planner bias being projected onto the client.",
      ],
      qualityChecks: [
        "Did you correct cognitive biases but accommodate emotional ones?",
        "Did you choose the client-centered communication response?",
        "Did you consider the planner's own bias where relevant?",
      ],
    },
    studyNotes: [
      {
        id: "cfp-full-m10-sn1",
        title: "Classifying biases to choose the right remedy",
        testPointIds: ["cfp-full-m10-tp1", "cfp-full-m10-tp2"],
        explanation: [
          "The exam's central behavioral distinction is between cognitive and emotional biases, because the two call for different responses. Cognitive biases arise from flawed reasoning or information processing — anchoring on an irrelevant number, overconfidence in one's forecasts, recency bias overweighting recent experience — and can usually be corrected by providing better information, education, and structured decision processes. Emotional biases arise from feelings — loss aversion (losses hurt more than equivalent gains), status-quo bias, and regret aversion — and are harder to argue away; the practical response is often to accommodate them within a plan the client can actually follow.",
          "Behavioral tools help redirect these tendencies. Framing the same choice differently (as a gain versus a loss) changes decisions, so planners can frame recommendations in goal terms that increase commitment. Mental accounting — treating money differently depending on its mental 'bucket' rather than as fungible — can distort decisions, but goal-based buckets can also be used constructively. Defaults and automation, such as auto-enrollment and auto-escalation of savings, are powerful because inertia keeps clients in the default; setting the default to the desired behavior improves outcomes with minimal effort.",
        ],
        keyRules: [
          "Cognitive biases: correct with information; emotional biases: accommodate.",
          "Framing and goal-based buckets can nudge better decisions.",
          "Defaults and automation harness inertia to improve savings behavior.",
        ],
      },
      {
        id: "cfp-full-m10-sn2",
        title: "Communication, counseling, and trust, worked",
        testPointIds: ["cfp-full-m10-tp3", "cfp-full-m10-tp1"],
        explanation: [
          "Even a technically flawless plan fails if the client cannot or will not follow it, which is why communication is now a tested competency. Active listening and open-ended questions surface the client's true goals, fears, and constraints — information that closed questions and planner monologues miss. Empathy and transparency build the trust that makes clients willing to act on advice, and explaining recommendations in plain, jargon-free language ensures the client actually understands what they are agreeing to. Counseling skills also help clients process financial stress during difficult decisions.",
          "The exam rewards client-centered responses: when a question offers a technical fix and a listen-and-understand option, the behaviorally sophisticated answer usually favors understanding the client first. Trust and understanding are the mechanisms that turn a good recommendation into implemented behavior, so communication is not soft filler — it is the bridge between analysis and outcomes.",
        ],
        keyRules: [
          "Active listening and open-ended questions surface true goals.",
          "Empathy and plain language build trust and understanding.",
          "Trust and understanding drive implementation.",
        ],
        workedProblem: {
          scenario:
            "During a market decline, David Ellis calls in a panic wanting to sell the entire portfolio to cash, citing recent losses and his fear of losing more. He anchors on the portfolio's peak value and says he 'cannot stand to watch it drop further.' Diagnose the biases at work and outline a behaviorally sound response.",
          steps: [
            "Identify the anchoring bias: David is fixated on the portfolio's peak value as the reference point, making current values feel like pure losses.",
            "Identify the emotional bias: 'cannot stand to watch it drop further' reflects loss aversion (and regret aversion) — an emotional, feeling-driven bias.",
            "Choose the remedy per bias type: the anchoring (cognitive) component can be addressed with information — reframing away from the peak toward long-term goals and historical recoveries; the loss aversion (emotional) component should be accommodated, not just argued against.",
            "Apply communication technique: listen actively and acknowledge David's fear (empathy) before educating, so he feels heard and is willing to engage.",
            "Design an accommodating action: rather than an all-or-nothing sale, propose a plan David can follow — e.g., revisiting the strategic allocation, ensuring the near-term cash needs are covered so he is not forced to sell, and using goal-based framing to reduce the urge to abandon the plan.",
          ],
          conclusion:
            "David is exhibiting anchoring (cognitive) and loss aversion/regret (emotional). The sound response listens and empathizes first, corrects the anchoring with information and goal-based reframing, and accommodates the emotional bias with a followable plan (secure near-term cash, revisit allocation) rather than endorsing a panic sale to cash.",
          markingNotes: [
            "Full credit requires identifying both a cognitive (anchoring) and an emotional (loss aversion) bias and matching remedies (correct vs accommodate).",
            "Simply telling David 'don't sell, markets recover' without listening/accommodating the emotional bias earns partial credit at best.",
          ],
        },
      },
      {
        id: "cfp-full-m10-sn3",
        title: "Money scripts, culture, and transitions",
        testPointIds: ["cfp-full-m10-tp4"],
        explanation: [
          "Clients bring ingrained beliefs about money — money scripts — formed by upbringing and experience, such as money avoidance, money worship, money status, or money vigilance. These scripts drive behaviors (over-saving, over-spending, secrecy) that a purely technical plan cannot explain, so surfacing them helps the planner understand and address the real drivers of the client's decisions. Cultural background similarly shapes financial priorities, family obligations, and communication style, and planners must adapt rather than assume a single norm.",
          "Life transitions demand particular sensitivity. Divorce, the death of a spouse, job loss, inheritance, or the birth of a child are emotionally charged and materially change the plan; the planner must combine empathy with a re-examination of goals, cash flow, insurance, tax, and estate needs. Recommendations made without acknowledging the emotional weight of a transition are unlikely to be accepted. The exam tests recognizing money scripts and adapting to culture and transitions.",
        ],
        keyRules: [
          "Money scripts are ingrained money beliefs that drive behavior.",
          "Cultural background shapes priorities and communication.",
          "Life transitions require empathy and a plan review.",
        ],
      },
      {
        id: "cfp-full-m10-sn4",
        title: "Sustaining behavior change and managing planner bias",
        testPointIds: ["cfp-full-m10-tp5"],
        explanation: [
          "Turning intentions into sustained behavior is a distinct skill. Techniques that improve follow-through include breaking goals into small, achievable steps, building in accountability (check-ins, progress tracking), and using commitment devices (automatic transfers, pre-commitment agreements) that make the desired behavior the path of least resistance. Reinforcing progress through monitoring keeps clients on track after the initial enthusiasm fades.",
          "Planners must also manage their own biases. A planner who is personally risk-averse, or who anchors on their favorite strategy, can unconsciously project those preferences onto clients, undermining objectivity. Self-awareness, structured processes, and documenting the rationale for decisions help keep advice client-centered rather than planner-centered. The exam tests both concrete behavior-change tools and the professional obligation to recognize and control one's own biases.",
        ],
        keyRules: [
          "Use small steps, accountability, and commitment devices to sustain change.",
          "Planners must recognize and manage their own biases.",
          "Document decisions to keep advice objective and client-centered.",
        ],
      },
    ],
    examPractice: [
      {
        id: "cfp-full-m10-p1",
        testPointIds: ["cfp-full-m10-tp1"],
        style: "Bias-classification item",
        question:
          "Maya refuses to sell an underperforming stock because selling would 'make the loss real,' while separately David insists the market will keep rising because it has risen for the past three years. Classify each client's bias as cognitive or emotional and state the appropriate response.",
        answerPlan: [
          "Classify Maya's bias.",
          "Classify David's bias.",
          "State the matched remedies.",
        ],
        modelAnswer:
          "Maya is exhibiting loss aversion (and regret aversion), an emotional bias driven by the pain of realizing a loss; because emotional biases are feeling-driven, the appropriate response is to accommodate it within a plan she can follow while gently reframing the decision around her goals. David is exhibiting recency bias, a cognitive bias from over-weighting recent experience; because cognitive biases stem from flawed reasoning, the appropriate response is to correct it with information and education about market history and the risk of extrapolating recent returns. The key is matching the remedy to the bias type.",
        markingGuide: [
          "Classifies Maya's as an emotional bias (loss/regret aversion) to accommodate.",
          "Classifies David's as a cognitive bias (recency) to correct with information.",
          "Matches remedy to bias type.",
        ],
      },
      {
        id: "cfp-full-m10-p2",
        testPointIds: ["cfp-full-m10-tp2"],
        style: "Nudge item",
        question:
          "The Ellises consistently intend to increase their retirement savings each year but never get around to it. Recommend a behavioral solution and explain why it works.",
        answerPlan: [
          "Recommend a default/automation solution.",
          "Explain the mechanism.",
        ],
        modelAnswer:
          "I would recommend automating the savings increase — for example, enrolling in auto-escalation so the contribution rate rises by a set amount each year automatically, and setting up automatic transfers to savings on payday. This works because it harnesses inertia: by making the desired behavior the default, the Ellises no longer have to take action to save more, and the same tendency that kept them from acting now keeps them in the beneficial default. Automation and defaults reliably improve savings behavior where good intentions alone fail.",
        markingGuide: [
          "Recommends automation/auto-escalation (a default-based nudge).",
          "Explains it harnesses inertia by making saving the default.",
          "Connects the solution to the intention-action gap.",
        ],
      },
      {
        id: "cfp-full-m10-p3",
        testPointIds: ["cfp-full-m10-tp3", "cfp-full-m10-tp5"],
        style: "Communication/professionalism item",
        question:
          "A newly widowed client is overwhelmed and unable to make decisions about her late husband's accounts. Her planner, who is personally very aggressive with investments, wants to quickly reallocate her portfolio. Explain the communication approach the planner should take and the professional risk of the planner's own tendencies.",
        answerPlan: [
          "Describe the communication approach.",
          "Address the life-transition sensitivity.",
          "Address the planner's bias.",
        ],
        modelAnswer:
          "The planner should slow down and use active listening and empathy, acknowledging the client's grief before pushing any decisions; open-ended questions and plain language will help surface her real concerns and rebuild her capacity to decide. A recent widowhood is a major life transition that warrants sensitivity and, often, deferring non-urgent decisions until she is ready, then reviewing goals, cash flow, insurance, and estate needs. The planner must also guard against projecting his own aggressive risk preferences onto a client who may need stability; self-awareness, a client-centered process, and documenting the rationale keep the advice objective and in her best interest rather than reflecting the planner's tendencies.",
        markingGuide: [
          "Recommends active listening/empathy and slowing down.",
          "Treats widowhood as a life transition warranting sensitivity/deferral of non-urgent decisions.",
          "Warns against the planner projecting his own risk bias and recommends safeguards.",
        ],
      },
    ],
  }),
};
