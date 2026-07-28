import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA — FAR (Financial Accounting & Reporting) exam-calibrated depth content,
 * batch A part 1, keyed by moduleId to merge onto CPA_COURSEWARE. Covers:
 *   cpa-far-m1  Conceptual framework & financial reporting standards
 *               (FASB Concepts Statements / ASC 105 / ASC 220 / APB 22)
 *   cpa-far-m2  Income statement, balance sheet & cash flows
 *               (ASC 205, 210, 220, 225, 230)
 *
 * Calibration notes used throughout:
 *  - FAR is a four-hour AICPA Blueprint section (five testlets: two MCQ, three
 *    task-based simulations). These two modules sit in Blueprint Area I
 *    (conceptual framework, standard setting, financial statement accounts)
 *    and the general-purpose-statement skills of Area II. The framework is
 *    tested mostly at Remembering/Understanding, while the statement mechanics
 *    (cash flow reconciliation, discontinued operations, comprehensive income)
 *    are tested at Application/Analysis via numeric fill-in TBS.
 *  - Every figure below is authored inside the fact pattern; nothing here relies
 *    on an externally indexed threshold, so no "annually variable" caveat is
 *    required for this content (unlike REG/tax modules).
 *  - The recurring exam trap across both modules is the net income vs other
 *    comprehensive income (OCI) boundary and the reclassification adjustment;
 *    the worked simulations below drill that boundary directly.
 */
export const CPA_FAR_A1_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // FAR M1 — Conceptual framework & financial reporting standards
  // ===================================================================
  "cpa-far-m1": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Objective of financial reporting & the qualitative-characteristics hierarchy",
        priority: "critical",
        examinerFocus:
          "Whether you can state the single objective of general-purpose financial reporting and correctly place a described attribute into the hierarchy: the two FUNDAMENTAL characteristics (relevance, faithful representation) versus the four ENHANCING characteristics (comparability, verifiability, timeliness, understandability), plus the pervasive cost constraint. The examiner supplies a definition or a scenario and tests which characteristic is named or breached.",
        typicalQuestionForms: [
          "MCQ: which are the two fundamental qualitative characteristics of useful financial information?",
          "MCQ: an attribute allowing users to identify similarities and differences between items is called ____ (comparability).",
          "MCQ: information that is capable of making a difference in a decision has which characteristic (relevance via predictive/confirmatory value)?",
        ],
        mustKnow: [
          "Objective (FASB Concepts Statement 8, Ch.1): to provide financial information about the reporting entity that is useful to existing and potential investors, lenders and other creditors in decisions about providing resources to the entity.",
          "Fundamental characteristics: Relevance (predictive value, confirmatory value; materiality is the entity-specific aspect of relevance) and Faithful representation (complete, neutral, free from error).",
          "Enhancing characteristics: Comparability (incl. consistency), Verifiability, Timeliness, Understandability; the only constraint is Cost (benefits must justify costs).",
        ],
        scoringActions: [
          "Before answering, sort the described trait into fundamental vs enhancing — enhancing characteristics can only enhance information that is already relevant and faithfully represented, never rescue information that lacks them.",
          "Treat materiality as an aspect of relevance (entity-specific), and treat consistency as the mechanism that produces comparability — do not confuse the two labels.",
        ],
      },
      {
        id: "tp2",
        title: "Elements of financial statements, recognition & measurement bases",
        priority: "critical",
        examinerFocus:
          "Whether you can identify the ten elements, state the two conditions for recognition, and match a measurement scenario to the correct attribute (historical cost, current/replacement cost, net realizable value, present value of future cash flows, or fair value). The exam tests the definition of a liability/asset as a screen and the selection of measurement basis.",
        typicalQuestionForms: [
          "MCQ: which of the following meets the definition of a liability at the balance-sheet date?",
          "MCQ: at what measurement attribute are accounts receivable reported (net realizable value)?",
          "MCQ: revenues are inflows from delivering goods/services that constitute the entity's ongoing major operations — distinguish revenue from a gain.",
        ],
        mustKnow: [
          "Ten elements: assets, liabilities, equity, investments by owners, distributions to owners, comprehensive income, revenues, expenses, gains, losses; revenues/expenses arise from ongoing major operations while gains/losses arise from peripheral or incidental transactions.",
          "Recognition requires that the item (a) meets the definition of an element and (b) is measurable with sufficient reliability; realization/realizability and being earned drive when to recognize revenue.",
          "Measurement attributes actually used in GAAP: historical cost, current (replacement) cost, net realizable value, present value of future cash flows, and fair value — different accounts use different attributes on the same balance sheet.",
        ],
        scoringActions: [
          "Run the element definition as a gate first (is there a present obligation / a probable future economic benefit controlled by the entity?) before deciding recognition or measurement.",
          "Name the specific measurement attribute rather than 'cost' generically — receivables at NRV, inventory at lower of cost or NRV/market, certain investments at fair value.",
        ],
      },
      {
        id: "tp3",
        title: "The FASB Codification & the standard-setting environment",
        priority: "high",
        examinerFocus:
          "That the FASB Accounting Standards Codification is the single source of authoritative nongovernmental US GAAP, how the SEC's statutory authority relates to FASB's private-sector standard setting, and the general contrast between US GAAP and IFRS as a rules-informed vs principles-based framework.",
        typicalQuestionForms: [
          "MCQ: what is the single source of authoritative US GAAP for nongovernmental entities (the FASB ASC)?",
          "MCQ: which body has statutory authority over financial reporting for public companies but has historically delegated standard setting (the SEC)?",
          "MCQ: identify a presentation that differs between US GAAP and IFRS (e.g., LIFO permitted, development-cost capitalization, revaluation of PP&E).",
        ],
        mustKnow: [
          "The FASB Accounting Standards Codification (ASC 105) is the single source of authoritative US GAAP for nongovernmental entities; if guidance is not in the Codification (and not SEC guidance for registrants), it is nonauthoritative.",
          "The SEC has statutory authority over public-company reporting (Securities Act 1933 / Securities Exchange Act 1934) but has delegated standard setting to the private-sector FASB, whose due process includes exposure drafts and public comment.",
          "IFRS (IASB) is more principles-based: it prohibits LIFO, permits revaluation of PP&E and capitalization of qualifying development costs, and generally requires more judgment than US GAAP.",
        ],
        scoringActions: [
          "Answer 'FASB ASC' for the source of authoritative GAAP and reserve the SEC for the authority-and-oversight role, not day-to-day standard setting.",
          "When a US-GAAP-vs-IFRS distinction is asked, anchor on the four heavy hitters: LIFO (GAAP only), development costs, PP&E revaluation, and inventory write-down reversals (allowed under IFRS).",
        ],
      },
      {
        id: "tp4",
        title: "Full set of statements, comprehensive income & the reclassification adjustment",
        priority: "critical",
        examinerFocus:
          "Assembling comprehensive income as net income plus other comprehensive income (OCI), correctly classifying items into OCI versus net income, and applying the reclassification adjustment so a gain/loss is not counted twice when it moves from OCI into net income on realization.",
        typicalQuestionForms: [
          "MCQ: which item is reported in OCI rather than net income (unrealized gain on AFS debt securities, FX translation, effective cash-flow hedge, certain pension changes)?",
          "TBS: compute comprehensive income and ending accumulated OCI from a list of items, applying a reclassification adjustment.",
          "MCQ: what is the purpose of a reclassification adjustment?",
        ],
        mustKnow: [
          "Comprehensive income = net income + other comprehensive income; the full set of statements is the balance sheet, income statement, statement of comprehensive income, statement of cash flows, and statement of changes in equity, plus notes.",
          "OCI items (mnemonic PUFIE): Pension/OPEB funded-status changes not yet in NI; Unrealized gains/losses on available-for-sale DEBT securities; Foreign-currency translation adjustments; Instrument-specific credit-risk gains/losses on liabilities under the fair-value option; Effective portion of cash-flow hedges. Accumulated OCI is an equity component.",
          "A reclassification adjustment removes from OCI an amount that is recognized in net income in the current period (e.g., an AFS gain realized on sale), preventing double counting; OCI may be presented net of tax or gross with a single tax line.",
        ],
        scoringActions: [
          "Build the answer in tiers: start from net income, add each OCI item, then SUBTRACT any reclassification adjustment for amounts now realized in net income.",
          "Keep equity-method investees' equity income and realized/trading gains in net income; only the five OCI categories bypass net income.",
        ],
      },
      {
        id: "tp5",
        title: "Notes, significant accounting policies & materiality",
        priority: "high",
        examinerFocus:
          "That notes are an integral part of the financial statements, that the summary of significant accounting policies is normally the first note (APB 22), and that materiality governs both recognition and disclosure decisions — an omission is material if it could influence a user's decision.",
        typicalQuestionForms: [
          "MCQ: which is normally disclosed in the summary of significant accounting policies (depreciation methods, inventory costing, revenue recognition basis)?",
          "MCQ: notes to the financial statements are ____ (an integral part of the statements).",
          "MCQ: how does materiality affect disclosure?",
        ],
        mustKnow: [
          "Notes are an integral part of the financial statements and are covered by the audit opinion; they provide detail and context the face statements cannot.",
          "The summary of significant accounting policies (APB 22) is normally the first or an early note and discloses measurement bases and policy choices (e.g., depreciation method, inventory costing method, revenue recognition, basis of consolidation) — NOT the detailed account balances.",
          "Materiality is entity-specific and quantitative-and-qualitative: an item is material if omitting or misstating it could reasonably influence a user's decisions; immaterial items may be aggregated or omitted.",
        ],
        scoringActions: [
          "Distinguish the significant-accounting-policies note (methods/choices) from other notes (amounts, schedules, contingencies) when asked where an item belongs.",
          "Apply materiality as a two-sided filter — both quantitative magnitude and qualitative significance (e.g., turning a loss into a profit) can make a small amount material.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "The framework is high-frequency, low-effort points on the MCQ testlets — target near-100% on qualitative-characteristic and elements questions, and treat the comprehensive-income TBS as the one place careless reclassification errors cost marks.",
      timeBudget:
        "~1.25 min per framework MCQ (mostly recognition/recall); on a comprehensive-income or classification TBS budget 3–4 minutes to lay out net income, OCI and the reclassification line before entering figures.",
      answerSequence: [
        "For definitional MCQs, classify the trait into fundamental vs enhancing (or element vs measurement basis) before choosing.",
        "For a comprehensive-income TBS, write net income first, list each OCI item with its sign, subtract reclassification adjustments, then apply tax if items are stated pretax.",
        "For source-of-GAAP items, default to 'FASB ASC' and keep the SEC in its oversight lane.",
        "For disclosure items, decide whether the content belongs in the significant-accounting-policies note or a detailed note.",
      ],
      qualityChecks: [
        "Did I keep enhancing characteristics from 'rescuing' information that is not relevant or faithfully represented?",
        "Did I route only the five PUFIE categories through OCI and leave everything else in net income?",
        "Did I subtract the reclassification adjustment so a realized gain is not counted in both OCI and net income?",
        "Did I apply tax to OCI items only if they were presented pretax?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The objective and the qualitative-characteristics hierarchy",
        testPointIds: ["tp1"],
        explanation: [
          "The conceptual framework begins with a single objective, stated in FASB Concepts Statement 8: general-purpose financial reporting exists to provide financial information about the reporting entity that is useful to existing and potential investors, lenders, and other creditors in deciding whether to provide resources to the entity. It is deliberately capital-provider focused — it is not designed to set asset values, satisfy tax authorities, or serve management's internal needs. Because the framework is the reasoning tool the examiner expects candidates to fall back on when a standard is unfamiliar, knowing this objective verbatim pays off across the whole of FAR.",
          "Usefulness is then decomposed into a strict hierarchy. The two FUNDAMENTAL characteristics are relevance and faithful representation, and both must be present. Relevance means the information is capable of making a difference in a decision, which it does through predictive value, confirmatory value, or both; materiality is described as the entity-specific aspect of relevance. Faithful representation means the depiction is complete, neutral (free from bias), and free from error — note that 'free from error' refers to the process, not perfect accuracy of every estimate.",
          "Sitting above the fundamentals are four ENHANCING characteristics — comparability, verifiability, timeliness, and understandability — which improve the usefulness of information that is already relevant and faithfully represented but can never substitute for them. Comparability lets users identify similarities and differences (consistency, applying the same methods period to period, is the means to comparability). Verifiability means independent observers could reach consensus. The whole system is bounded by one constraint: cost — the benefits of reporting information must justify the costs of providing it.",
        ],
        keyRules: [
          "Objective: decision-useful information for investors, lenders and other creditors (CON 8, Ch.1).",
          "Fundamental = relevance (predictive/confirmatory value, materiality) + faithful representation (complete, neutral, free from error).",
          "Enhancing = comparability, verifiability, timeliness, understandability; constraint = cost.",
        ],
      },
      {
        id: "sn2",
        title: "Elements, recognition and the choice of measurement attribute",
        testPointIds: ["tp2"],
        explanation: [
          "The framework defines ten elements. Three describe financial position — assets (probable future economic benefits controlled as a result of past transactions), liabilities (probable future sacrifices of economic benefits arising from present obligations), and equity (the residual, assets minus liabilities). Two describe transactions with owners — investments by owners and distributions to owners. The remaining five describe performance — comprehensive income, revenues, expenses, gains, and losses. The distinction the exam loves is that revenues and expenses arise from the entity's ongoing major or central operations, whereas gains and losses arise from peripheral or incidental transactions (selling a delivery truck produces a gain/loss, not revenue).",
          "Recognition is the process of formally recording an item in the statements, and it has two conditions: the item must meet the definition of an element, and it must be measurable with sufficient reliability (and, for revenue, be realized or realizable and earned in the classic framework). This is why an internally generated brand or a highly probable but unsettled lawsuit gain may be economically real yet not recognized — either the definition or the measurability screen fails.",
          "GAAP does not use one measurement attribute; it uses several, and the exam tests which one applies. Historical cost anchors most PP&E and inventory; net realizable value governs accounts receivable (gross less the allowance) and is a ceiling for inventory; present value of future cash flows underlies long-term receivables/payables and impairment testing; and fair value governs trading and available-for-sale securities and many disclosures. A single balance sheet therefore mixes attributes, and a candidate must name the specific attribute rather than answering 'cost.'",
        ],
        keyRules: [
          "Ten elements; revenues/expenses = ongoing operations, gains/losses = peripheral transactions.",
          "Recognition = meets element definition AND is measurable (revenue: realized/realizable and earned).",
          "Attributes: historical cost, current/replacement cost, net realizable value, present value, fair value.",
        ],
        formulas: [
          "Equity = assets − liabilities (residual)",
          "Comprehensive income = net income + other comprehensive income",
          "Net realizable value = estimated selling price − costs to complete and sell",
        ],
      },
      {
        id: "sn3",
        title: "The Codification, the SEC/FASB relationship, and US GAAP vs IFRS",
        testPointIds: ["tp3"],
        explanation: [
          "Since the 2009 Codification, ASC 105 establishes the FASB Accounting Standards Codification as the single source of authoritative US GAAP for nongovernmental entities. Anything in the Codification is authoritative; anything not in it — textbooks, practice aids, non-codified FASB concepts statements — is nonauthoritative. For SEC registrants, SEC rules and interpretive releases are also authoritative and sit alongside the Codification. The practical exam answer to 'what is the source of US GAAP?' is always 'the FASB ASC.'",
          "The authority structure is a delegation. The Securities Act of 1933 and the Securities Exchange Act of 1934 gave the SEC statutory power over financial reporting by public companies, but the SEC has long delegated the detailed standard setting to the private-sector FASB while retaining oversight and the ability to override. The FASB follows a public due process — issuing discussion memoranda and exposure drafts and inviting comment — before codifying a new Accounting Standards Update. Governmental entities are outside this system; they follow GASB standards, a distinction FAR tests heavily elsewhere.",
          "Finally, the framework sits within a global contrast. IFRS, set by the IASB, is more principles-based and diverges from US GAAP in several tested ways: IFRS prohibits LIFO, permits the revaluation model for PP&E and intangibles, requires capitalization of qualifying development costs, allows reversal of most inventory and (non-goodwill) asset write-downs, and uses a single-step impairment model. Knowing these four or five headline differences answers the majority of GAAP-vs-IFRS MCQs.",
        ],
        keyRules: [
          "FASB ASC = single source of authoritative nongovernmental US GAAP (ASC 105); SEC guidance also authoritative for registrants.",
          "SEC has statutory authority (1933/1934 Acts) but delegates standard setting to the FASB, retaining oversight.",
          "IFRS: no LIFO, PP&E revaluation allowed, development costs capitalized, write-down reversals allowed.",
        ],
      },
      {
        id: "sn4",
        title: "Comprehensive income, the OCI categories and reclassification",
        testPointIds: ["tp4"],
        explanation: [
          "The full set of general-purpose financial statements comprises the balance sheet (financial position), the income statement, the statement of comprehensive income, the statement of cash flows, and the statement of changes in stockholders' equity, all accompanied by the notes. Comprehensive income is the change in equity during a period from non-owner sources; it equals net income plus other comprehensive income (OCI). It may be presented in a single continuous statement or in two consecutive statements, but the total comprehensive income figure must appear.",
          "Only a defined set of items bypasses net income and lands in OCI. The reliable mnemonic is PUFIE: Pension and OPEB adjustments not yet recognized in net income (prior service cost, net gains/losses); Unrealized holding gains and losses on available-for-sale DEBT securities (equity securities now go through net income, a frequent trap); Foreign-currency translation adjustments; Instrument-specific credit-risk changes on liabilities elected at fair value; and the Effective portion of cash-flow hedges. The cumulative total of these items lives in equity as accumulated other comprehensive income (AOCI).",
          "The subtlety the exam drills is the reclassification adjustment. When an amount previously deferred in OCI becomes realized and enters net income — for example, an available-for-sale debt security is sold and its gain is now in net income — that amount must be removed from OCI in the same period, or it would be double counted (once in prior/current OCI and again in net income). If OCI items are stated pretax, a single tax line or item-by-item tax allocation is applied to reach net-of-tax OCI. Getting comprehensive income right therefore means: net income, plus current OCI movements, minus reclassification adjustments, net of tax.",
        ],
        keyRules: [
          "Comprehensive income = net income + OCI; AOCI is an equity account.",
          "OCI = PUFIE (Pension/OPEB, Unrealized AFS DEBT gains/losses, FX translation, Instrument credit risk, Effective cash-flow hedge).",
          "Reclassification adjustment removes from OCI amounts recognized in current-period net income to prevent double counting.",
        ],
        formulas: [
          "Comprehensive income = net income + other comprehensive income (net of tax)",
          "Ending AOCI = beginning AOCI + current-period OCI − reclassification adjustments (all net of tax)",
        ],
        workedProblem: {
          scenario:
            "For the year ended 12/31, Meridian Corp. reports net income of $500,000. During the year the following pretax items occurred: an unrealized holding gain of $30,000 on available-for-sale debt securities still held at year end; a $10,000 gain on AFS debt securities SOLD during the year (this gain is included in the $500,000 net income and had been deferred in OCI in a prior period); a foreign-currency translation loss of $18,000; and an effective cash-flow-hedge gain of $8,000. The enacted tax rate applicable to OCI items is 25%. Compute other comprehensive income (net of tax) and total comprehensive income, and state the effect on accumulated OCI.",
          steps: [
            "Start with the current-period OCI movements (pretax): unrealized AFS debt gain +$30,000; FX translation loss −$18,000; cash-flow-hedge effective gain +$8,000.",
            "Apply the reclassification adjustment: the $10,000 gain on AFS debt sold is now in net income, so remove it from OCI: −$10,000 (prevents double counting).",
            "Net OCI before tax = 30,000 − 10,000 − 18,000 + 8,000 = $10,000.",
            "Tax at 25% = $10,000 × 25% = $2,500; OCI net of tax = 10,000 − 2,500 = $7,500.",
            "Total comprehensive income = net income $500,000 + OCI $7,500 = $507,500.",
          ],
          conclusion:
            "Other comprehensive income for the year is $7,500 net of tax, total comprehensive income is $507,500, and accumulated OCI (an equity account) increases by $7,500.",
          markingNotes: [
            "Award a mark for including only the four OCI-eligible items and keeping the realized/trading amounts in net income.",
            "Award a mark for the reclassification adjustment (−$10,000) so the sold-security gain is not counted in both OCI and net income.",
            "Award a mark for applying the 25% tax to the net pretax OCI of $10,000 to reach $7,500.",
            "Award a mark for total comprehensive income of $507,500 and an equal $7,500 increase in AOCI.",
            "Deduct if the unrealized gain on equity securities (not present here, but a common insertion) would have been routed through OCI instead of net income.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Notes, the significant-accounting-policies summary and materiality",
        testPointIds: ["tp5"],
        explanation: [
          "The notes are not an optional appendix; they are an integral part of the financial statements and are within the scope of the auditor's opinion. Because the face statements can only carry summarized numbers, the notes carry the detail and context — maturities of debt, components of income tax expense, pension assumptions, segment data, and contingencies — that make the numbers interpretable. A candidate should treat 'notes are an integral part of the statements' as the default true statement whenever it appears.",
          "APB 22 requires a summary of significant accounting policies, normally presented as the first note (or immediately after the statements). This note discloses the measurement bases and accounting-method choices the entity has made — depreciation methods, inventory costing method (FIFO/weighted-average), revenue-recognition basis, basis of consolidation, and use of estimates — rather than the detailed dollar balances, which appear in later notes. The exam distinguishes 'which policy is disclosed here' (a method) from 'which amount is disclosed there' (a schedule).",
          "Materiality overlays every recognition and disclosure decision. An item is material if omitting or misstating it could reasonably be expected to influence the decisions users make on the basis of the statements. Materiality is both quantitative (relative magnitude) and qualitative (a small amount that turns a loss into a profit, masks a trend, or affects loan covenants can be material despite its size). Because materiality is entity-specific, the framework declines to set a numeric threshold, and immaterial items may be aggregated or omitted for clarity.",
        ],
        keyRules: [
          "Notes are an integral part of the financial statements and are covered by the audit opinion.",
          "Significant-accounting-policies note (APB 22) discloses methods/choices (depreciation, inventory costing, revenue basis), usually first; detailed amounts go in later notes.",
          "Materiality is entity-specific and both quantitative and qualitative; immaterial items may be aggregated or omitted.",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp4"],
        style: "Task-based simulation (comprehensive income / OCI)",
        question:
          "Aster Inc. reports net income of $420,000 for the year. Pretax items during the year: unrealized holding LOSS on available-for-sale debt securities held at year end $(24,000); foreign-currency translation gain $30,000; unrealized gain on TRADING securities $9,000; a $6,000 loss on AFS debt securities sold during the year, already reflected in net income and previously deferred in OCI; and an effective cash-flow-hedge loss $(4,000). The tax rate on OCI items is 25%. Compute OCI (net of tax) and total comprehensive income, and identify any item that does NOT belong in OCI.",
        answerPlan: [
          "Identify OCI-eligible items (AFS debt, FX translation, cash-flow hedge) and exclude the trading gain (net income).",
          "Apply a reclassification adjustment for the realized AFS loss now in net income.",
          "Net the pretax OCI, apply 25% tax, add to net income.",
        ],
        modelAnswer:
          "The unrealized gain on TRADING securities ($9,000) is reported in net income, not OCI, so it is excluded from the OCI computation. OCI-eligible movements (pretax): unrealized AFS debt loss $(24,000); FX translation gain $30,000; cash-flow-hedge effective loss $(4,000). Reclassification adjustment: the $6,000 realized loss on AFS debt sold is now in net income, so it is REMOVED from OCI, i.e., +$6,000 added back to OCI (reversing the previously deferred loss). Net OCI before tax = −24,000 + 30,000 − 4,000 + 6,000 = $8,000. Tax at 25% = $2,000; OCI net of tax = $6,000. Total comprehensive income = net income $420,000 + OCI $6,000 = $426,000. Accumulated OCI increases by $6,000.",
        markingGuide: [
          "1 mark: excluding the trading-securities gain from OCI (it is in net income).",
          "1 mark: correct reclassification adjustment of the realized AFS loss (+$6,000 to OCI).",
          "1 mark: net pretax OCI of $8,000 and 25% tax to reach $6,000 net.",
          "1 mark: total comprehensive income of $426,000.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1", "tp3"],
        style: "MCQ set rationale (framework & standard setting)",
        question:
          "(a) Users can identify differences between two companies because both use the FIFO inventory method — which qualitative characteristic is served, and what is the underlying mechanism within one company over time? (b) A private US company follows guidance found only in a widely used practice textbook, not in the Codification. Is that guidance authoritative, and what IS the single source of authoritative US GAAP? (c) The company's CFO argues an item can be omitted because tracing it would be expensive relative to its usefulness — which framework element supports that?",
        answerPlan: [
          "Map (a) to comparability, with consistency as the intra-entity mechanism.",
          "Answer (b): non-codified = nonauthoritative; FASB ASC is the source.",
          "Answer (c): the cost constraint.",
        ],
        modelAnswer:
          "(a) The ability to identify similarities and differences between entities is comparability, an enhancing qualitative characteristic; within a single company, applying the same method (FIFO) from period to period is consistency, which is the mechanism that produces comparability over time. (b) Guidance found only in a practice textbook and not in the Codification is nonauthoritative; the single source of authoritative US GAAP for a nongovernmental entity is the FASB Accounting Standards Codification (ASC 105). (c) The CFO is invoking the cost constraint — the pervasive constraint of the framework — under which the benefits of providing information must justify the costs; note this is separate from materiality, which is the entity-specific aspect of relevance.",
        markingGuide: [
          "1 mark: comparability identified as the characteristic, with consistency as the intra-entity mechanism.",
          "1 mark: textbook guidance is nonauthoritative and the FASB ASC is the authoritative source.",
          "1 mark: the cost constraint identified (and not confused with materiality).",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp2", "tp5"],
        style: "MCQ set rationale (elements, measurement & disclosure)",
        question:
          "For each item state the correct treatment: (a) accounts receivable of $200,000 with an allowance for credit losses of $12,000 — at what amount and measurement attribute is it reported? (b) A gain of $40,000 on the sale of a factory building by a manufacturer — is this revenue or a gain, and why? (c) The company's choice to depreciate equipment using the straight-line method — in which note is this disclosed?",
        answerPlan: [
          "Receivables at net realizable value.",
          "Peripheral transaction → gain, not revenue.",
          "Method choice → significant-accounting-policies note.",
        ],
        modelAnswer:
          "(a) Accounts receivable are reported at net realizable value, which is the gross receivable less the allowance for credit losses: $200,000 − $12,000 = $188,000; the measurement attribute is net realizable value, not historical cost. (b) The $40,000 is a GAIN, not revenue: selling a factory building is a peripheral or incidental transaction for a manufacturer, and the framework classifies inflows from ongoing major operations as revenue but inflows from peripheral transactions as gains. (c) The choice of the straight-line depreciation method is an accounting-method policy and is disclosed in the summary of significant accounting policies (APB 22), normally the first note — the detailed depreciation amounts appear in the property, plant and equipment note.",
        markingGuide: [
          "1 mark: receivable at net realizable value of $188,000 (attribute named).",
          "1 mark: classified as a gain (peripheral transaction), not revenue.",
          "1 mark: disclosed in the significant-accounting-policies note, distinguished from the detailed PP&E note.",
        ],
      },
    ],
  }),

  // ===================================================================
  // FAR M2 — Income statement, balance sheet & cash flows
  //          (ASC 205, 210, 220, 225, 230)
  // ===================================================================
  "cpa-far-m2": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Multi-step income statement & discontinued operations (net of tax)",
        priority: "critical",
        examinerFocus:
          "Building a multi-step income statement in the correct order (gross profit → operating income → income from continuing operations → net income) and presenting discontinued operations, net of tax, as a separate line below income from continuing operations. The examiner tests placement of unusual/infrequent items (within continuing operations, pretax) and the net-of-tax display of a disposed component.",
        typicalQuestionForms: [
          "TBS: prepare a multi-step income statement from a trial balance and report income from continuing operations and net income.",
          "MCQ: how is a component that is sold and represents a strategic shift reported (discontinued operations, net of tax, separately)?",
          "MCQ: where does a material, unusual OR infrequent (but not both) loss appear (within continuing operations, pretax)?",
        ],
        mustKnow: [
          "Multi-step order: Net sales − COGS = gross profit; − operating expenses = operating income; ± non-operating items = income before tax; − income tax = income from continuing operations; ± discontinued operations (net of tax) = net income.",
          "Discontinued operations (ASC 205-20): a component disposed of or classified as held for sale that represents a strategic shift with a major effect is reported net of tax, separately, below income from continuing operations; the caption combines the operating results and any gain/loss on disposal.",
          "The extraordinary-item category has been ELIMINATED; unusual and/or infrequent items are shown within continuing operations, on a pretax basis (not net of tax).",
        ],
        scoringActions: [
          "Compute income from continuing operations (after its own tax) as a clean subtotal before adding the net-of-tax discontinued-operations line.",
          "Keep unusual/infrequent items inside continuing operations and pretax — never label anything 'extraordinary' or move an ordinary unusual item below the line.",
        ],
      },
      {
        id: "tp2",
        title: "Balance-sheet classification: current vs noncurrent",
        priority: "high",
        examinerFocus:
          "Classifying assets and liabilities as current or noncurrent using the one-year-or-operating-cycle rule, and identifying reclassifications (e.g., current maturities of long-term debt, refinancing agreements) that change the split. The exam supplies items and tests the current-asset and current-liability totals.",
        typicalQuestionForms: [
          "TBS: classify a list of accounts and compute total current assets and total current liabilities.",
          "MCQ: is the current portion of long-term debt current or noncurrent, and when may it be excluded from current liabilities?",
          "MCQ: which asset is noncurrent (e.g., cash restricted for a noncurrent purpose, long-term investments)?",
        ],
        mustKnow: [
          "Current assets are those expected to be realized in cash or consumed within one year or the operating cycle, whichever is LONGER (cash, trading securities, receivables, inventory, prepaids); everything else is noncurrent.",
          "Current liabilities are obligations due within one year/operating cycle to be settled with current assets or by creating other current liabilities; the current maturity of long-term debt is a current liability.",
          "A short-term obligation may be reclassified as noncurrent only if the entity both INTENDS to refinance on a long-term basis and demonstrates the ABILITY to do so (e.g., a completed refinancing or a noncancelable agreement before the statements are issued).",
        ],
        scoringActions: [
          "Apply the 'one year OR operating cycle, whichever is longer' test to borderline items rather than defaulting to one year.",
          "Move the current maturity of long-term debt into current liabilities unless both intent AND ability to refinance long-term are demonstrated.",
        ],
      },
      {
        id: "tp3",
        title: "Statement of cash flows — operating activities (indirect method)",
        priority: "critical",
        examinerFocus:
          "Reconciling net income to cash flow from operations under the indirect method: adding back non-cash charges, removing gains and adding losses on investing/financing transactions, and adjusting for changes in operating working-capital accounts with the correct sign.",
        typicalQuestionForms: [
          "TBS: compute cash flow from operations (indirect) from net income, depreciation, gains/losses, and working-capital changes.",
          "MCQ: how does an increase in accounts receivable affect operating cash flow (decrease)?",
          "MCQ: why is a gain on the sale of equipment subtracted in the operating section?",
        ],
        mustKnow: [
          "CFO (indirect) = net income + non-cash expenses (depreciation, amortization, impairment) − gains + losses on the sale/retirement of assets or extinguishment of debt ± changes in operating working capital.",
          "Working-capital signs: an INCREASE in an operating current ASSET (AR, inventory, prepaid) DECREASES cash; an INCREASE in an operating current LIABILITY (AP, accrued expenses) INCREASES cash; decreases reverse those signs.",
          "Gains/losses on asset sales and debt extinguishment are removed from operating income because the entire cash proceeds belong to investing/financing sections — leaving the gain in operating would double count it.",
        ],
        scoringActions: [
          "Lay the reconciliation out in fixed order — net income, then non-cash addbacks, then gains(−)/losses(+), then each working-capital change — before summing.",
          "Reverse the sign of any gain/loss that relates to an investing or financing cash flow so only the operating portion remains.",
        ],
      },
      {
        id: "tp4",
        title: "Cash-flow classification, the direct method & noncash disclosures",
        priority: "high",
        examinerFocus:
          "Sorting cash flows into operating, investing and financing under US GAAP conventions, contrasting the direct and indirect operating presentations, and identifying significant noncash transactions that are disclosed but not shown on the face of the statement.",
        typicalQuestionForms: [
          "TBS: classify a list of cash flows into operating, investing and financing and compute each subtotal.",
          "MCQ: how are interest paid, interest/dividends received, and dividends paid classified under US GAAP?",
          "MCQ: which transaction is a noncash activity disclosed separately (e.g., acquiring an asset by issuing stock or a note)?",
        ],
        mustKnow: [
          "US GAAP classification: interest paid, interest received and dividends received are OPERATING; dividends PAID are FINANCING; purchases/sales of PP&E and investments are INVESTING; issuing/repaying debt and issuing/repurchasing stock are FINANCING (IFRS allows more flexibility for interest and dividends).",
          "The direct method lists actual operating cash receipts and payments (cash collected from customers, cash paid to suppliers/employees); it yields the SAME CFO total as the indirect method and, if used, requires a supplemental reconciliation of net income to CFO.",
          "Significant noncash investing/financing transactions (e.g., acquiring equipment by issuing a note or stock, converting debt to equity, capital-lease/finance-lease additions) are disclosed in a note or schedule, not on the face of the statement.",
        ],
        scoringActions: [
          "Assign each cash flow to a section using the US GAAP defaults, and flag dividends paid (financing) vs interest paid (operating) as the classic split.",
          "Pull noncash exchanges off the face of the statement into the supplemental disclosure rather than recording a phantom cash flow.",
        ],
      },
      {
        id: "tp5",
        title: "Statement articulation & the retained-earnings roll-forward",
        priority: "medium",
        examinerFocus:
          "Using the interrelationships among the statements — net income flowing to retained earnings and to the cash-flow reconciliation, ending cash tying to the balance sheet — as both a preparation tool and an error check, including a correct retained-earnings roll-forward.",
        typicalQuestionForms: [
          "MCQ: ending retained earnings = beginning RE + net income − dividends declared (solve for a missing figure).",
          "TBS: verify that ending cash on the statement of cash flows equals cash on the balance sheet, or solve for a missing statement amount using articulation.",
          "MCQ: how does net income link the income statement, the equity statement and the cash-flow statement?",
        ],
        mustKnow: [
          "Ending retained earnings = beginning retained earnings + net income − dividends DECLARED (not necessarily paid); prior-period-adjustment corrections adjust the beginning balance.",
          "Net income articulates across statements: it is the bottom line of the income statement, the starting point of the indirect cash-flow reconciliation, and an addition to retained earnings in the equity statement.",
          "The net change in cash on the statement of cash flows, added to beginning cash, must equal ending cash on the balance sheet — a direct tie that detects classification and arithmetic errors.",
        ],
        scoringActions: [
          "Use the retained-earnings identity to solve for any single missing figure (net income, dividends, or a beginning/ending balance).",
          "Cross-check ending cash from the cash-flow statement against the balance-sheet cash before finalizing a TBS.",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "The cash-flow reconciliation and the discontinued-operations/net-of-tax presentation are the two highest-yield, most error-prone TBS in these modules — target full marks on the indirect-method build and on the current/noncurrent classification.",
      timeBudget:
        "~1.5 min per statement-preparation MCQ; on an indirect cash-flow or classification TBS budget 4–5 minutes to lay out the reconciliation/classification schedule before entering any subtotal.",
      answerSequence: [
        "For the income statement, drive down the multi-step ladder to income from continuing operations (after tax) before adding net-of-tax discontinued operations.",
        "For the balance sheet, classify each account current vs noncurrent using the one-year-or-cycle rule and subtotal.",
        "For cash flows, build CFO indirect in fixed order (NI, non-cash, gains(−)/losses(+), working-capital changes), then classify investing and financing flows.",
        "Close with articulation: tie net income to retained earnings and ending cash to the balance sheet.",
      ],
      qualityChecks: [
        "Did I present discontinued operations net of tax and keep unusual/infrequent items pretax within continuing operations?",
        "Did I remove gains (−) and add losses (+) on asset sales/debt extinguishment from the operating section?",
        "Did I apply the correct working-capital signs (asset up → cash down; liability up → cash up)?",
        "Did ending cash on the cash-flow statement equal balance-sheet cash, and did the retained-earnings roll-forward tie out?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The multi-step income statement and discontinued operations",
        testPointIds: ["tp1"],
        explanation: [
          "The multi-step income statement is built as a ladder of subtotals, and the exam expects each rung in order. Net sales less cost of goods sold gives gross profit; gross profit less operating expenses (selling, general and administrative) gives operating income; operating income adjusted for non-operating items (interest, investment income, unusual or infrequent gains/losses) gives income before income tax; and income before tax less income tax expense gives income from continuing operations. This last subtotal is important because it is computed after its own income tax and is the anchor from which the special sections branch.",
          "Discontinued operations are the classic special section. Under ASC 205-20, a component of an entity that has been disposed of, or is classified as held for sale, and that represents a strategic shift with a major effect on operations and financial results, is reported as discontinued operations. The presentation is net of tax, on a separate line immediately below income from continuing operations, and the caption combines both the results of operating the component during the period and any gain or loss on its disposal (or remeasurement to fair value less costs to sell).",
          "A frequently tested contrast is the treatment of unusual or infrequent items. The 'extraordinary item' category was eliminated, so a material event that is unusual in nature OR infrequent in occurrence (but does not qualify as a discontinued operation) is reported within continuing operations on a PRETAX basis — typically as a separate line in the non-operating section — and is never shown net of tax below the line. Candidates lose marks by either resurrecting the extraordinary label or by dragging an ordinary unusual item into the discontinued-operations section.",
        ],
        keyRules: [
          "Order: net sales − COGS = gross profit; − operating expenses = operating income; ± non-operating = pretax income; − tax = income from continuing operations; ± discontinued ops (net of tax) = net income.",
          "Discontinued operations (ASC 205-20): strategic-shift component, net of tax, separate line, combining operating results and disposal gain/loss.",
          "Extraordinary items eliminated; unusual/infrequent items are pretax within continuing operations.",
        ],
        formulas: [
          "Gross profit = net sales − cost of goods sold",
          "Income from continuing operations = pretax income from continuing operations − related income tax",
          "Net income = income from continuing operations ± discontinued operations (net of tax)",
        ],
        workedProblem: {
          scenario:
            "Cypress Co. reports for the year: net sales $2,000,000; cost of goods sold $1,200,000; selling, general and administrative expenses $350,000; interest expense $50,000; and a $60,000 pretax loss that is unusual in nature but not a strategic-shift disposal. Separately, during the year Cypress sold a business component that qualifies as a discontinued operation; the component had a pretax operating loss of $80,000 and Cypress recognized a pretax gain on its disposal of $200,000. The tax rate is 25% on all items. Prepare the lower portion of the multi-step income statement from operating income down to net income.",
          steps: [
            "Operating income = net sales 2,000,000 − COGS 1,200,000 − SG&A 350,000 = $450,000.",
            "Deduct non-operating items within continuing operations, PRETAX: interest expense $50,000 and the unusual loss $60,000 → pretax income from continuing operations = 450,000 − 50,000 − 60,000 = $340,000.",
            "Income tax on continuing operations = 340,000 × 25% = $85,000 → income from continuing operations = 340,000 − 85,000 = $255,000.",
            "Discontinued operations, net of tax: net pretax amount = disposal gain 200,000 − operating loss 80,000 = $120,000; tax = 120,000 × 25% = $30,000; net-of-tax discontinued operations = $90,000.",
            "Net income = income from continuing operations 255,000 + discontinued operations 90,000 = $345,000.",
          ],
          conclusion:
            "Income from continuing operations is $255,000, discontinued operations (net of tax) is $90,000, and net income is $345,000. The unusual loss stays pretax within continuing operations; only the discontinued component is shown net of tax below the line.",
          markingNotes: [
            "Award a mark for keeping the $60,000 unusual loss within continuing operations, pretax.",
            "Award a mark for income from continuing operations of $255,000 (after its own 25% tax).",
            "Award a mark for combining the disposal gain and operating loss and presenting discontinued operations net of tax at $90,000.",
            "Award a mark for net income of $345,000.",
            "Deduct if any amount is labeled 'extraordinary' or the unusual loss is shown net of tax below the line.",
          ],
        },
      },
      {
        id: "sn2",
        title: "Balance-sheet classification and the current/noncurrent split",
        testPointIds: ["tp2"],
        explanation: [
          "The classified balance sheet (ASC 210) sorts assets and liabilities into current and noncurrent so users can gauge liquidity. The dividing line is the operating cycle: current assets are those expected to be converted to cash, sold, or consumed within one year OR the operating cycle, whichever is LONGER. For most companies the cycle is under a year, so the one-year rule dominates, but for entities with long cycles (construction, distilling, tobacco) the operating cycle governs, and the exam plants such fact patterns to test whether candidates default incorrectly to one year.",
          "On the liability side, current liabilities are obligations expected to be settled within that same one-year-or-cycle window using current assets or by incurring other current liabilities — accounts payable, accrued expenses, unearned revenue to be earned within the period, and the current maturities of long-term debt. A recurring trap is the current portion of long-term debt: the amount coming due within the next year is a current liability even though the remainder of the note is noncurrent, so a single loan can straddle both classifications.",
          "There is an important exception for short-term obligations expected to be refinanced. A currently maturing obligation may be reclassified as noncurrent only if the entity BOTH intends to refinance on a long-term basis AND demonstrates the ability to do so — evidenced either by actually completing the refinancing after the balance-sheet date but before the statements are issued, or by holding a noncancelable financing agreement with a capable lender. Absent both intent and ability, the obligation remains current. Restricted cash set aside for a noncurrent purpose (e.g., a bond sinking fund) is likewise classified as noncurrent.",
        ],
        keyRules: [
          "Current = realized/consumed within one year OR the operating cycle, whichever is longer; else noncurrent.",
          "Current maturities of long-term debt are current liabilities; the balance is noncurrent.",
          "Reclassify a short-term obligation as noncurrent only with BOTH intent and demonstrated ability to refinance long-term.",
        ],
        formulas: [
          "Working capital = current assets − current liabilities",
          "Current ratio = current assets ÷ current liabilities",
        ],
      },
      {
        id: "sn3",
        title: "Cash flow from operations under the indirect method",
        testPointIds: ["tp3"],
        explanation: [
          "The indirect method starts from net income and undoes everything in it that is not an operating cash flow. The first layer is non-cash expenses embedded in net income — depreciation, amortization, depletion, and impairment losses — which are added back because they reduced net income without using cash. The second layer removes the results of investing and financing transactions that are (incorrectly, for the operating section) sitting in net income: a gain on the sale of equipment is SUBTRACTED and a loss is ADDED back, because the full cash proceeds of the sale belong in the investing section and leaving the gain in operating would double count it. The same logic applies to gains/losses on the extinguishment of debt, which belong to financing.",
          "The third layer adjusts for changes in operating working-capital accounts, and this is where sign discipline matters. An increase in an operating current ASSET (accounts receivable, inventory, prepaid expenses) uses cash and therefore DECREASES operating cash flow; a decrease in such an asset frees cash and increases it. Conversely, an increase in an operating current LIABILITY (accounts payable, accrued expenses, unearned revenue) is a source of cash and INCREASES operating cash flow, while a decrease reduces it. Note that only OPERATING working-capital accounts are adjusted here — changes in short-term debt or dividends payable are financing.",
          "Assembled in that order the reconciliation is robust and self-checking. Under US GAAP, interest paid and interest and dividends received are operating cash flows, so they are already appropriately inside CFO; only dividends paid (financing) and principal flows (financing/investing) are excluded. Whether an entity uses the indirect or direct method, the CFO total is identical — the methods differ only in how the operating section is presented, not in its result.",
        ],
        keyRules: [
          "CFO (indirect) = NI + non-cash charges − gains + losses ± changes in operating working capital.",
          "Operating current asset up → cash down; operating current liability up → cash up (decreases reverse).",
          "Remove investing/financing gains and losses from the operating section to avoid double counting.",
        ],
        formulas: [
          "CFO = net income + depreciation/amortization + losses − gains − ΔAR − ΔInventory − ΔPrepaids + ΔAP + ΔAccrued liabilities",
          "Net change in cash = CFO + CFI + CFF",
        ],
        workedProblem: {
          scenario:
            "Harbor Ltd. reports net income of $300,000. During the year: depreciation expense $45,000; a $12,000 gain on the sale of equipment; an $8,000 loss on early extinguishment of debt; accounts receivable increased $20,000; inventory decreased $15,000; prepaid expenses increased $5,000; accounts payable increased $10,000; and accrued liabilities decreased $4,000. Compute cash flow from operating activities using the indirect method.",
          steps: [
            "Start with net income: $300,000.",
            "Add back non-cash depreciation: +$45,000.",
            "Subtract the equipment gain (investing): −$12,000; add back the debt-extinguishment loss (financing): +$8,000.",
            "Working capital: AR increase −$20,000; inventory decrease +$15,000; prepaid increase −$5,000; AP increase +$10,000; accrued liabilities decrease −$4,000.",
            "CFO = 300,000 + 45,000 − 12,000 + 8,000 − 20,000 + 15,000 − 5,000 + 10,000 − 4,000 = $337,000.",
          ],
          conclusion:
            "Cash flow from operating activities is $337,000. The equipment gain is removed (its proceeds are investing) and the debt-extinguishment loss is added back (its cash effect is financing).",
          markingNotes: [
            "Award a mark for adding back depreciation and for the correct treatment of the gain (−) and loss (+).",
            "Award a mark for correct working-capital signs (AR/prepaid decrease cash; inventory decrease and AP increase raise cash; accrued-liability decrease lowers cash).",
            "Award a mark for the CFO total of $337,000.",
            "Deduct if the equipment gain is left in operating cash flow or the debt loss is subtracted instead of added.",
          ],
        },
      },
      {
        id: "sn4",
        title: "Cash-flow classification, the direct method and noncash disclosures",
        testPointIds: ["tp4"],
        explanation: [
          "The statement of cash flows (ASC 230) has three sections, and correct classification is worth as many marks as the arithmetic. Operating activities relate to the entity's principal revenue-producing transactions and to items that flow through net income; under US GAAP this deliberately includes interest paid, interest received, and dividends received, even though they look financing/investing in flavor. Investing activities cover the acquisition and disposal of long-term assets and investments — buying and selling PP&E, purchasing and collecting on loans, and buying/selling debt or equity securities of other entities. Financing activities cover transactions with owners and lenders — issuing or repaying principal on debt, issuing or reacquiring the entity's own stock, and paying dividends.",
          "The single most tested classification pair is dividends versus interest: dividends PAID are a FINANCING outflow, whereas interest paid and interest and dividends RECEIVED are OPERATING under US GAAP. (IFRS permits more flexibility, allowing interest and dividends paid to be either operating or financing and interest/dividends received to be operating or investing, provided the choice is consistent.) Knowing the US GAAP defaults answers most classification MCQs outright.",
          "The direct method presents the operating section as actual cash receipts and payments — cash collected from customers, cash paid to suppliers and employees, interest paid, and taxes paid — rather than as a reconciliation of net income. It produces the identical CFO total as the indirect method, and if a company uses the direct method it must also provide a supplemental schedule reconciling net income to CFO. Finally, significant NONCASH investing and financing transactions — acquiring an asset by issuing a note or stock, converting bonds to common stock, or recognizing a right-of-use asset and lease liability — are disclosed in a note or supplemental schedule and never appear as cash on the face of the statement.",
        ],
        keyRules: [
          "US GAAP: interest paid, interest received and dividends received = operating; dividends paid = financing.",
          "Investing = long-term assets/investments; financing = debt principal, equity, dividends paid.",
          "Direct and indirect methods yield the same CFO; direct method requires a net-income-to-CFO reconciliation; noncash exchanges are disclosed off the face.",
        ],
        formulas: [
          "Cash collected from customers = net sales − increase in AR (or + decrease in AR)",
          "Cash paid to suppliers = COGS + increase in inventory − increase in AP (signs reverse for decreases)",
        ],
      },
      {
        id: "sn5",
        title: "Articulation and the retained-earnings roll-forward",
        testPointIds: ["tp5"],
        explanation: [
          "Articulation is the property that the financial statements interlock, and it is both a preparation shortcut and a powerful error check. Net income is the clearest connective tissue: it is the bottom line of the income statement, the starting figure of the indirect cash-flow reconciliation, and an increase to retained earnings in the statement of changes in equity. Because the same number appears in three places, a discrepancy signals an error before an examiner ever grades it.",
          "The retained-earnings roll-forward is the identity the exam probes most directly: ending retained earnings = beginning retained earnings + net income − dividends DECLARED. Two nuances earn marks. First, it is dividends declared, not dividends paid, that reduce retained earnings (a declared-but-unpaid dividend creates a liability and still reduces RE). Second, prior-period adjustments — corrections of material errors in previously issued statements — are recorded as adjustments to the BEGINNING retained-earnings balance, net of tax, not through current net income.",
          "The final tie is cash. The net change in cash reported on the statement of cash flows, added to beginning cash, must equal the ending cash reported on the balance sheet. When a TBS omits one figure, candidates can solve for it by articulation — for example, backing into net income from the retained-earnings identity, or confirming an ending-cash balance against the balance sheet. Treating articulation as a mandatory last step catches classification slips (an item posted to the wrong cash-flow section) and arithmetic mistakes.",
        ],
        keyRules: [
          "Ending retained earnings = beginning RE + net income − dividends declared.",
          "Prior-period adjustments adjust beginning retained earnings (net of tax), not current net income.",
          "Beginning cash + net change in cash (per SCF) = ending cash (per balance sheet).",
        ],
        formulas: [
          "Ending retained earnings = beginning retained earnings + net income − dividends declared ± prior-period adjustments",
          "Ending cash = beginning cash + (CFO + CFI + CFF)",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp3", "tp4"],
        style: "Task-based simulation (indirect cash flow & classification)",
        question:
          "Larkspur Inc. reports net income of $180,000. During the year: depreciation $30,000; amortization of a patent $6,000; a $9,000 loss on the sale of equipment (the equipment sold for $25,000 cash); accounts receivable decreased $8,000; inventory increased $22,000; accounts payable increased $5,000; income taxes payable decreased $3,000. The company also issued common stock for $50,000 cash and paid $12,000 of dividends. Compute cash flow from operating activities (indirect) and identify the classification of the equipment sale proceeds, the stock issuance and the dividends.",
        answerPlan: [
          "Build CFO: NI + non-cash + loss on sale ± working-capital changes.",
          "Classify the $25,000 proceeds (investing), stock issuance (financing), dividends paid (financing).",
        ],
        modelAnswer:
          "CFO = net income 180,000 + depreciation 30,000 + patent amortization 6,000 + loss on sale 9,000 (added back; the equipment's cash is investing) + AR decrease 8,000 − inventory increase 22,000 + AP increase 5,000 − income taxes payable decrease 3,000 = $213,000. Classification: the $25,000 of equipment sale proceeds is an INVESTING inflow; issuing common stock for $50,000 is a FINANCING inflow; the $12,000 of dividends paid is a FINANCING outflow. (Note the loss is added back in operating while the full $25,000 proceeds appear in investing, avoiding double counting.)",
        markingGuide: [
          "1 mark: adding back depreciation, amortization and the loss on sale.",
          "1 mark: correct working-capital signs (AR decrease +8,000; inventory increase −22,000; AP increase +5,000; taxes payable decrease −3,000).",
          "1 mark: CFO total of $213,000.",
          "1 mark: correct classification — proceeds investing, stock issuance financing, dividends paid financing.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp1"],
        style: "Task-based simulation (multi-step income statement)",
        question:
          "Sequoia Corp. reports: net sales $1,500,000; cost of goods sold $900,000; SG&A $250,000; interest income $20,000; interest expense $40,000; and a $30,000 pretax loss from a flood (infrequent, but the entity is not exiting any line of business). It also disposed of a component qualifying as a discontinued operation: pretax operating income of the component $50,000 and a pretax LOSS on disposal of $110,000. Tax rate 25%. Prepare from operating income to net income.",
        answerPlan: [
          "Operating income = sales − COGS − SG&A.",
          "Adjust for interest and the flood loss (pretax, continuing); tax to get income from continuing operations.",
          "Net the discontinued component and present net of tax.",
        ],
        modelAnswer:
          "Operating income = 1,500,000 − 900,000 − 250,000 = $350,000. Within continuing operations, pretax: + interest income 20,000 − interest expense 40,000 − flood loss 30,000 = pretax income from continuing operations $300,000. Tax = 300,000 × 25% = $75,000 → income from continuing operations = $225,000. Discontinued operations: pretax = operating income 50,000 − loss on disposal 110,000 = $(60,000); tax benefit = 60,000 × 25% = $15,000; net-of-tax discontinued operations = $(45,000). Net income = 225,000 − 45,000 = $180,000. The flood loss stays pretax within continuing operations (extraordinary treatment is not permitted).",
        markingGuide: [
          "1 mark: operating income $350,000 and flood loss kept pretax within continuing operations.",
          "1 mark: income from continuing operations $225,000 after 25% tax.",
          "1 mark: discontinued operations presented net of tax at $(45,000).",
          "1 mark: net income $180,000.",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp2", "tp5"],
        style: "MCQ set rationale (classification & articulation)",
        question:
          "(a) A $500,000 note payable matures in 8 months; after year end but before the statements are issued the company signs a noncancelable agreement to refinance it on a 5-year basis and intends to do so — current or noncurrent? (b) Beginning retained earnings were $600,000, dividends of $40,000 were declared (of which $10,000 remained unpaid at year end), and ending retained earnings were $720,000 — what was net income? (c) Beginning cash was $95,000 and the statement of cash flows showed CFO $60,000, CFI $(40,000), CFF $(5,000) — what ending cash should the balance sheet report?",
        answerPlan: [
          "Reclassify the note as noncurrent (intent + ability).",
          "Solve the RE identity for net income (dividends declared reduce RE).",
          "Tie ending cash via articulation.",
        ],
        modelAnswer:
          "(a) The note is reclassified as NONCURRENT: the entity both intends to refinance on a long-term basis and demonstrates the ability via a noncancelable agreement executed before the statements are issued — both conditions are met, so it leaves current liabilities. (b) Ending RE = beginning RE + net income − dividends DECLARED, so 720,000 = 600,000 + NI − 40,000 → NI = $160,000; the $10,000 unpaid portion does not change the calculation because declared (not paid) dividends reduce RE (the unpaid $10,000 sits in dividends payable). (c) By articulation, ending cash = beginning cash + (CFO + CFI + CFF) = 95,000 + (60,000 − 40,000 − 5,000) = 95,000 + 15,000 = $110,000, which is the balance-sheet cash.",
        markingGuide: [
          "1 mark: note reclassified noncurrent because BOTH intent and ability to refinance are demonstrated.",
          "1 mark: net income $160,000 using dividends declared (not paid) in the RE identity.",
          "1 mark: ending cash $110,000 tying the cash-flow statement to the balance sheet.",
        ],
      },
    ],
  }),
};
