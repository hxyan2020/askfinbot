import type { CoursewareDepth } from "../types";
import { examDepth } from "./helpers";

/**
 * CPA Discipline depth content, keyed by moduleId to merge onto CPA_COURSEWARE.
 * This file supplies depth for exactly ONE module: cpa-discipline-m3.
 *
 * Discipline scope (CPA Evolution: BAR / ISC / TCP are three separate
 * four-hour AICPA Blueprint Discipline exams; a candidate sits only one):
 *  - cpa-discipline-m3 → BAR (Business Analysis and Reporting): STATE AND
 *    LOCAL GOVERNMENTS (advanced). This is BAR Area III territory — the
 *    GASB financial reporting model (GASB Statement 34 as amended): the
 *    governmental reporting entity (primary government and component units,
 *    blending vs discrete), fund structure and the dual measurement
 *    focus / basis of accounting, the government-wide vs fund statements and
 *    the required reconciliations between them, capital assets and long-term
 *    liabilities (including the modified approach and GASB 68/75 pension and
 *    OPEB liabilities), interfund activity, and the notes / RSI / ACFR
 *    reporting package. BAR tests these at Application/Analysis: fact patterns
 *    give you fund-level numbers and ask you to convert to the government-wide
 *    view, classify a fund or a component unit, or recognize revenue under
 *    modified accrual — not merely define a term.
 *
 * Calibration notes:
 *  - BAR governmental is NOT FAR governmental. The same GASB vocabulary
 *    appears, but BAR rewards the *conversion* mechanics (fund → government-
 *    wide reconciliations) and the judgment calls (blend vs discrete,
 *    measurable-and-available timing) rather than rote fund-type lists.
 *  - The recurring hinge is the measurement mismatch: governmental funds use
 *    the CURRENT FINANCIAL RESOURCES focus and MODIFIED ACCRUAL, while the
 *    government-wide statements use the ECONOMIC RESOURCES focus and FULL
 *    ACCRUAL. Almost every reconciliation item is one side of that mismatch.
 *  - Authority is GASB (not FASB). Do not cross-apply a for-profit ASC rule
 *    (e.g., ASC 842 lessee, ASC 606 revenue) to a governmental fact pattern;
 *    governments follow GASB 87 leases, GASB 33 nonexchange revenue, etc.
 */
export const CPA_DISCIPLINE_M3_DEPTH: Record<string, CoursewareDepth> = {
  // ===================================================================
  // cpa-discipline-m3 — BAR: State & local governments (advanced)
  // ===================================================================
  "cpa-discipline-m3": examDepth({
    testPoints: [
      {
        id: "tp1",
        title: "Measurement focus and basis of accounting: funds vs government-wide",
        priority: "critical",
        examinerFocus:
          "Whether you can hold two accounting models in your head at once and know which applies where. Governmental funds use the current financial resources measurement focus and the modified accrual basis; the government-wide (and proprietary and fiduciary fund) statements use the economic resources measurement focus and full accrual. The examiner rarely asks you to define these — it gives a transaction (buy a truck, issue a bond, accrue interest) and asks how it hits the fund statements versus the government-wide statements, because the answer differs on each.",
        typicalQuestionForms: [
          "MCQ: given a transaction, state the effect on the governmental fund statements vs the government-wide statements.",
          "TBS: prepare journal entries for a capital acquisition or debt issuance under both modified accrual and full accrual.",
          "MCQ: identify which measurement focus/basis a named fund category (governmental, proprietary, fiduciary) uses.",
        ],
        mustKnow: [
          "Governmental funds = current financial resources focus + modified accrual: they report only current (spendable) assets and current liabilities; capital outlay is an EXPENDITURE (not a capitalized asset) and debt proceeds are an OTHER FINANCING SOURCE (not a liability).",
          "Government-wide, proprietary, and fiduciary statements = economic resources focus + full accrual: capital assets are capitalized and depreciated, and long-term debt is a liability, exactly as in for-profit accounting.",
          "Under modified accrual, revenue is recognized when it is both MEASURABLE and AVAILABLE (collectible within the period or soon enough after year-end to pay current liabilities — commonly within 60 days for property taxes); expenditures are generally recognized when the related fund liability is incurred.",
          "The three fund CATEGORIES map to bases: governmental funds (General, special revenue, capital projects, debt service, permanent) use modified accrual; proprietary funds (enterprise, internal service) and fiduciary funds (custodial, pension/OPEB trust, investment trust, private-purpose trust) use full accrual.",
        ],
        scoringActions: [
          "Before recording anything, state which measurement focus/basis applies to the statement you are preparing.",
          "For any capital or long-term item, give BOTH answers (fund expenditure/OFS vs capitalized asset/liability) so you capture the conversion.",
          "For revenue on modified accrual, test measurable AND available explicitly and defer the unavailable portion.",
        ],
      },
      {
        id: "tp2",
        title: "Reconciling fund statements to government-wide statements",
        priority: "critical",
        examinerFocus:
          "Whether you can convert the governmental funds to the government-wide governmental activities — the single most tested BAR governmental skill. Two reconciliations exist: (1) total governmental fund BALANCE → net position of governmental activities, and (2) net change in fund balances → change in net position. Each reconciling item is one side of the modified-accrual/full-accrual mismatch, and the examiner tests whether you know the SIGN and the reason for each adjustment.",
        typicalQuestionForms: [
          "TBS: complete a reconciliation from total governmental fund balance to net position (add capital assets, subtract long-term liabilities, etc.).",
          "MCQ: identify whether a specific item is added or subtracted in the fund-balance-to-net-position reconciliation and why.",
          "TBS: reconcile net change in fund balances to change in net position (capital outlay vs depreciation, bond proceeds vs principal, accruals).",
        ],
        mustKnow: [
          "Balance-sheet reconciliation (fund balance → net position): ADD capital assets net of accumulated depreciation (not reported in funds); SUBTRACT long-term liabilities such as bonds payable, net pension/OPEB liability, and compensated absences; ADD/SUBTRACT deferred outflows/inflows; and ADD the net position of internal service funds that primarily serve governmental activities.",
          "Deferred inflows for 'unavailable revenue' (e.g., property taxes not collected within the availability period) are subtracted from revenue in the funds but recognized in the government-wide statements, so they are ADDED back in the reconciliation.",
          "Operating-statement reconciliation (net change in fund balances → change in net position): replace capital OUTLAY (an expenditure) with DEPRECIATION expense; remove bond PROCEEDS (an other financing source) but keep them off revenue; add back principal REPAYMENTS (an expenditure in the funds but a balance-sheet item government-wide); and adjust for accrued items not using current resources (interest, pensions, compensated absences).",
          "Internal service funds are usually folded into governmental activities in the government-wide statements even though they are proprietary funds, because they mainly serve other governmental departments.",
        ],
        scoringActions: [
          "Work item by item and label each adjustment with a reason tied to the measurement mismatch, not just a number.",
          "Get the SIGN right: capital assets and unavailable revenue are additions; long-term liabilities and bond proceeds are subtractions/removals.",
          "Remember to fold internal service fund net position/results into governmental activities.",
        ],
      },
      {
        id: "tp3",
        title: "The reporting entity: primary government and component units",
        priority: "high",
        examinerFocus:
          "Whether you can decide (a) whether a legally separate organization is a component unit of the primary government, and (b) if so, whether it is BLENDED or DISCRETELY presented. The test is financial accountability (the primary government appoints a voting majority of the board AND can impose its will or there is a financial benefit/burden), or fiscal dependency plus a financial benefit/burden. The blend-vs-discrete call turns on how intertwined the component is with the primary government.",
        typicalQuestionForms: [
          "MCQ: given governance and financing facts, decide whether an organization is a component unit.",
          "MCQ/TBS: given a component unit, decide blended vs discrete presentation and justify it.",
          "MCQ: identify the primary government vs a component unit vs a related/joint-venture organization.",
        ],
        mustKnow: [
          "A component unit is a legally separate organization for which the primary government is financially accountable: it appoints a voting majority of the board AND either can impose its will or there is a financial benefit or burden relationship; fiscal dependency plus a benefit/burden also creates accountability.",
          "BLEND (report as if part of the primary government) when the component's governing body is substantively the same as the primary government's, OR it exclusively/almost exclusively serves the primary government, OR its debt is expected to be repaid entirely or almost entirely by the primary government.",
          "DISCRETE presentation (a separate column to the right of the primary government's totals) is the default for component units that do not meet a blending criterion, so their balances are not commingled with the primary government's.",
          "Organizations that are NOT component units may still require note disclosure as related organizations, joint ventures, or jointly governed organizations depending on the accountability and equity-interest facts.",
        ],
        scoringActions: [
          "Establish financial accountability FIRST (board appointment + impose will or benefit/burden, or fiscal dependency + benefit/burden) before choosing presentation.",
          "Apply the blending criteria explicitly; default to discrete presentation when none is met.",
          "If the entity is not a component unit, name the correct alternative (related organization / joint venture) and the disclosure it triggers.",
        ],
      },
      {
        id: "tp4",
        title: "Capital assets, the modified approach, and long-term liabilities",
        priority: "high",
        examinerFocus:
          "Whether you can account for capital assets and long-term debt across the two models: capitalized and depreciated government-wide but recorded as expenditures/other financing sources in the governmental funds. The exam favors the infrastructure MODIFIED APPROACH (no depreciation if condition is maintained and documented), general obligation bond issuance and repayment, and the recognition of GASB 68 net pension liability / GASB 75 OPEB liability government-wide.",
        typicalQuestionForms: [
          "TBS: record a bond issuance, capital purchase, and debt service in both the funds and the government-wide statements.",
          "MCQ: determine whether the modified approach is available and what it requires (asset management system + documented condition).",
          "MCQ: identify how the net pension liability and pension expense flow into the government-wide statements.",
        ],
        mustKnow: [
          "Capital assets: capitalized and depreciated in the government-wide statements; in a governmental fund the purchase is a capital-outlay EXPENDITURE with no asset recorded, so the reconciliation adds the asset and swaps depreciation for outlay.",
          "Modified approach for eligible infrastructure networks/subsystems: instead of depreciating, the government does NOT record depreciation if it (1) maintains an up-to-date asset management system, (2) documents that the assets are preserved at or above a disclosed condition level, and expenses maintenance/preservation costs; failing the condition documentation forces a return to depreciation.",
          "General obligation debt: proceeds are an OTHER FINANCING SOURCE and principal repayment is an EXPENDITURE in the (debt service) fund, while government-wide the bond is a liability and repayment reduces that liability; a premium is another financing source in the fund and is amortized government-wide.",
          "GASB 68 pensions / GASB 75 OPEB: the net pension (or OPEB) liability, deferred outflows/inflows, and pension/OPEB expense are reported in the government-wide (economic resources) statements; the funds report only the current-resources expenditure for contributions actually made.",
        ],
        scoringActions: [
          "For every capital/debt transaction, give the fund entry AND the government-wide entry so the conversion is explicit.",
          "For infrastructure, test the two modified-approach conditions (asset management system + documented condition) before concluding no depreciation.",
          "Place the net pension/OPEB liability government-wide only, and keep the funds at the contribution/expenditure level.",
        ],
      },
      {
        id: "tp5",
        title: "Interfund activity and nonexchange revenue recognition",
        priority: "high",
        examinerFocus:
          "Whether you can classify interfund activity (reciprocal vs nonreciprocal) and recognize nonexchange revenue under GASB 33. Interfund loans, services, transfers, and reimbursements are each recorded differently and some are eliminated in the government-wide statements. Nonexchange revenue (taxes, grants) is recognized by category with specific timing and eligibility rules, and BAR tests the timing traps (time requirements, purpose restrictions, eligibility).",
        typicalQuestionForms: [
          "MCQ: classify an interfund transaction (loan, service, transfer, reimbursement) and state its statement effect.",
          "MCQ/TBS: recognize a grant or tax under GASB 33 by nonexchange category and eligibility/time requirement.",
          "MCQ: identify which interfund balances/activity are eliminated in the government-wide statements.",
        ],
        mustKnow: [
          "Reciprocal interfund activity: interfund LOANS (due to/from other funds — a receivable/payable, repaid) and interfund SERVICES PROVIDED AND USED (quasi-external transactions recorded as revenue/expenditure or expense as if with an outside party).",
          "Nonreciprocal interfund activity: interfund TRANSFERS (other financing use in the giving fund, other financing source in the receiving fund) and interfund REIMBURSEMENTS (repay a fund that initially recorded an expenditure/expense; the reimbursement is not itself revenue).",
          "In the government-wide statements, interfund balances and transfers WITHIN governmental activities (and within business-type activities) are eliminated so amounts are not double counted; only net internal balances between governmental and business-type activities remain.",
          "GASB 33 nonexchange categories: derived tax revenues (e.g., sales/income tax — recognize when the underlying exchange occurs), imposed nonexchange revenues (e.g., property taxes/fines — recognize in the period levied/when enforceable, subject to time requirements), government-mandated and voluntary nonexchange (grants — recognize when all ELIGIBILITY requirements, including time requirements, are met; purpose restrictions affect net position/fund balance classification, not timing).",
        ],
        scoringActions: [
          "Classify each interfund item as reciprocal or nonreciprocal and give the specific account (due to/from, transfer, revenue/expenditure, reimbursement).",
          "For nonexchange revenue, name the GASB 33 category and apply its timing/eligibility rule, distinguishing eligibility (affects timing) from purpose restriction (affects classification).",
          "Eliminate intra-activity interfund balances and transfers in the government-wide conversion.",
        ],
      },
      {
        id: "tp6",
        title: "Fund balance classification and the reporting package (notes, RSI, ACFR)",
        priority: "medium",
        examinerFocus:
          "Whether you can classify governmental fund balance under GASB 54's five-tier hierarchy and place items correctly in the external financial report: the basic financial statements, the notes, required supplementary information (MD&A, budgetary comparisons, pension/OPEB schedules), and the annual comprehensive financial report (ACFR) sections. The exam tests whether MD&A precedes the statements (RSI presented before, by convention) and whether budgetary comparisons are RSI or basic statements.",
        typicalQuestionForms: [
          "MCQ: classify a portion of fund balance as nonspendable, restricted, committed, assigned, or unassigned.",
          "MCQ: identify what belongs in RSI (MD&A, budgetary comparison, pension schedules) vs the basic statements/notes.",
          "MCQ: identify the three sections of the ACFR and where MD&A sits relative to the basic statements.",
        ],
        mustKnow: [
          "GASB 54 fund-balance hierarchy (most to least constrained): NONSPENDABLE (not in spendable form — inventory, prepaids, permanent-fund principal), RESTRICTED (external/constitutional/enabling-legislation constraints), COMMITTED (highest-level governing-body formal action), ASSIGNED (intended use by authorized body/official), and UNASSIGNED (residual; only the General Fund carries a positive unassigned balance).",
          "MD&A is required supplementary information (RSI) that precedes the basic financial statements; other RSI (budgetary comparison schedules, pension/OPEB schedules of contributions and net-liability trends) follows the notes.",
          "Budgetary comparison schedules (original budget, final budget, actual — often plus a variance) are typically presented as RSI for the General Fund and major special revenue funds with a legally adopted annual budget.",
          "The ACFR has three sections: INTRODUCTORY (transmittal letter, unaudited), FINANCIAL (auditor's report, MD&A, basic statements, notes, RSI, combining statements), and STATISTICAL (multi-year trend, unaudited).",
        ],
        scoringActions: [
          "Classify fund balance top-down through the five tiers and remember only the General Fund reports a positive unassigned balance.",
          "Separate RSI (MD&A, budgetary comparisons, pension schedules) from the basic statements and notes.",
          "Map any report element to the correct ACFR section (introductory / financial / statistical).",
        ],
      },
    ],
    scoringBlueprint: {
      scoreTarget:
        "BAR governmental (State & local, advanced) rewards clean execution of the fund-to-government-wide conversion and correct classification calls. Bank the measurement-focus, fund-balance (GASB 54), and reporting-package MCQs as near-automatic points, then earn the TBS marks by driving each reconciliation item by item with the right sign and reason. Target full marks on the two reconciliations — they are the highest-value, most predictable governmental tasks.",
      timeBudget:
        "~1.25 min per MCQ. On a reconciliation or dual-entry TBS, spend the first 2–3 minutes stating which measurement focus/basis applies and listing the mismatch items (capital assets, long-term debt, unavailable revenue, accruals, internal service funds) before entering numbers, so each adjustment is deliberate rather than guessed.",
      answerSequence: [
        "State the model: which measurement focus/basis applies to the statement being prepared (current financial resources + modified accrual for governmental funds; economic resources + full accrual government-wide).",
        "For each transaction or line, give both views where they differ (fund expenditure/OFS vs capitalized asset/liability) and, on modified accrual, test measurable AND available.",
        "Build the reconciliation item by item: add capital assets and unavailable revenue; subtract long-term liabilities and bond proceeds; swap outlay for depreciation; add back principal repayments; fold in internal service funds — each with the correct sign.",
        "Finish with classification and placement: fund-balance tier (GASB 54), component-unit presentation (blend vs discrete), and the correct report location (basic statement / note / RSI / ACFR section).",
      ],
      qualityChecks: [
        "Did I state the measurement focus/basis before recording, and give BOTH the fund and government-wide effect for capital/debt items?",
        "On modified accrual, did I test measurable AND available and defer the unavailable revenue (adding it back government-wide)?",
        "Did every reconciliation item have the correct sign and a reason tied to the measurement mismatch, including the internal service fund fold-in?",
        "Did I establish financial accountability before choosing blend vs discrete, and default to discrete when no blending criterion was met?",
        "Did I classify fund balance top-down through GASB 54 and place MD&A/budgetary/pension schedules correctly as RSI?",
      ],
    },
    studyNotes: [
      {
        id: "sn1",
        title: "The two models: measurement focus and basis of accounting",
        testPointIds: ["tp1"],
        explanation: [
          "Governmental accounting runs on two parallel models, and almost every BAR governmental question turns on knowing which one applies. Governmental funds — the General Fund, special revenue, capital projects, debt service, and permanent funds — use the current financial resources measurement focus with the modified accrual basis of accounting. 'Current financial resources' means the fund reports only what is spendable now: current assets and current liabilities. There are no capital assets and no long-term debt on a governmental fund balance sheet. Consequently, buying a fire truck is a capital-outlay EXPENDITURE (it consumes current resources), and issuing a bond is an OTHER FINANCING SOURCE (it provides current resources) rather than a liability. The operating statement is a statement of revenues, expenditures, and changes in fund balance.",
          "The government-wide statements — the statement of net position and the statement of activities — together with the proprietary funds (enterprise and internal service) and the fiduciary funds, use the economic resources measurement focus with the full accrual basis. Here the accounting looks like a business: capital assets are capitalized and depreciated, long-term debt is a liability, and expenses (not expenditures) are matched to the period they benefit. The whole point of the dual model is that the fund statements show near-term fiscal accountability (did we live within this year's resources?) while the government-wide statements show operational accountability (did the government's overall economic position improve or decline?).",
          "Modified accrual has its own revenue rule that BAR loves to test: revenue is recognized when it is both MEASURABLE and AVAILABLE. 'Available' means collectible within the current period or soon enough afterward to pay current-period liabilities — for property taxes the common bright line is collection within 60 days after year-end. Amounts that are measurable but not available are deferred (a deferred inflow of resources, 'unavailable revenue'), which is exactly why they reappear as a reconciling item to the government-wide statements, where full accrual recognizes them immediately. Expenditures under modified accrual are generally recognized when the related fund liability is incurred, with special rules for items like debt service (recorded when due) and inventory/prepaids.",
        ],
        keyRules: [
          "Governmental funds = current financial resources + modified accrual: no capital assets, no long-term debt; capital purchases are expenditures, debt proceeds are other financing sources.",
          "Government-wide + proprietary + fiduciary = economic resources + full accrual: capitalize and depreciate assets, report long-term liabilities, recognize expenses.",
          "Modified accrual revenue: recognize when measurable AND available (commonly within 60 days for property taxes); defer the unavailable portion.",
          "Fund categories → basis: governmental (modified accrual); proprietary and fiduciary (full accrual).",
        ],
        formulas: [
          "Governmental fund operating result = revenues − expenditures + other financing sources − other financing uses = net change in fund balance.",
          "Available (property tax) = collected in period + collected within ~60 days after year-end; remainder → deferred inflow (unavailable revenue).",
        ],
      },
      {
        id: "sn2",
        title: "Converting the funds to the government-wide statements",
        testPointIds: ["tp2", "tp1"],
        explanation: [
          "The signature BAR governmental skill is converting the governmental funds into the governmental activities column of the government-wide statements. There are two reconciliations, and each reconciling item is simply one side of the modified-accrual/full-accrual mismatch. The first reconciles total governmental fund BALANCE to the net position of governmental activities: you ADD capital assets net of accumulated depreciation (they exist government-wide but not in the funds); you SUBTRACT long-term liabilities that the funds do not carry — bonds payable, the net pension liability, net OPEB liability, and compensated absences; you adjust for deferred outflows and inflows; and you ADD the net position of internal service funds that predominantly serve governmental departments, because those proprietary funds are folded into governmental activities.",
          "One item trips up candidates every time: unavailable revenue. Under modified accrual, property taxes (and similar) that are measurable but not collected within the availability window are recorded as a deferred inflow and kept out of fund revenue. Full accrual recognizes them now, so in the reconciliation you ADD that unavailable/deferred revenue back to arrive at net position (and to change in net position on the operating reconciliation). The direction is the opposite of intuition for many candidates precisely because the funds understate revenue relative to full accrual.",
          "The second reconciliation bridges the net change in fund balances to the change in net position. The mechanical swaps are: replace capital OUTLAY (a fund expenditure) with DEPRECIATION expense — you remove the outlay and subtract depreciation instead; remove bond PROCEEDS (an other financing source that inflated the fund result but is not revenue); ADD BACK principal REPAYMENTS (an expenditure in the funds that government-wide only reduces a liability, so it does not belong in the operating result); and adjust for accrued items that do not use current financial resources — accrued interest, the change in compensated absences, and pension/OPEB expense in excess of contributions. Get the sign and the reason right for each and the reconciliation is worth close to full marks because it is so predictable.",
        ],
        keyRules: [
          "Fund balance → net position: + capital assets (net), − long-term liabilities (bonds, net pension/OPEB, compensated absences), ± deferred items, + internal service fund net position, + unavailable revenue.",
          "Net change in fund balances → change in net position: − capital outlay + (− depreciation); − bond proceeds; + principal repayments; ± accruals (interest, compensated absences, pension/OPEB).",
          "Internal service funds (proprietary) are folded into governmental activities in the government-wide statements.",
          "Unavailable revenue deferred in the funds is recognized government-wide, so it is added in both reconciliations.",
        ],
        formulas: [
          "Net position of governmental activities = total governmental fund balances + capital assets (net) − long-term liabilities ± deferred outflows/inflows + internal service fund net position + unavailable revenue.",
          "Change in net position = net change in fund balances + (capital outlay − depreciation) − bond proceeds + principal repayments − net accrual adjustments (interest, compensated absences, pension/OPEB).",
        ],
        workedProblem: {
          scenario:
            "Oakvale's total governmental fund balance at year-end is $4,200,000. Additional facts: capital assets used in governmental activities cost $18,000,000 with accumulated depreciation of $7,000,000; general obligation bonds payable are $9,500,000; accrued interest on those bonds not due until next year is $150,000; the net pension liability is $2,300,000 with related deferred outflows of $400,000 and deferred inflows of $250,000; compensated absences payable total $600,000; property taxes of $300,000 were levied and measurable but not collected within the availability period (recorded as a deferred inflow/unavailable revenue in the funds); and an internal service fund that primarily serves governmental departments has net position of $500,000. Compute the net position of governmental activities.",
          steps: [
            "Start with total governmental fund balance: $4,200,000.",
            "Add capital assets net of accumulated depreciation: $18,000,000 − $7,000,000 = $11,000,000 → running total $15,200,000.",
            "Subtract long-term liabilities not reported in the funds: bonds $9,500,000 + accrued interest $150,000 + net pension liability $2,300,000 + compensated absences $600,000 = $12,550,000 → running total $2,650,000.",
            "Adjust for pension-related deferrals: add deferred outflows $400,000, subtract deferred inflows $250,000 (net +$150,000) → running total $2,800,000.",
            "Add unavailable property-tax revenue recognized under full accrual, $300,000, and add the internal service fund net position $500,000 → $2,800,000 + $300,000 + $500,000 = $3,600,000.",
          ],
          conclusion:
            "Net position of governmental activities is $3,600,000. Each adjustment is one side of the modified-accrual/full-accrual mismatch: capital assets, deferred outflows, unavailable revenue, and the internal service fund are additions; bonds, accrued interest, net pension liability, compensated absences, and deferred inflows are subtractions.",
          markingNotes: [
            "Award marks for adding capital assets net of depreciation and for subtracting each long-term liability (bonds, accrued interest, net pension liability, compensated absences).",
            "Award marks for the correct net pension deferral adjustment (+ outflows, − inflows) and for adding back the unavailable property-tax revenue.",
            "Full marks require folding in the internal service fund net position and reaching $3,600,000 with correct signs throughout.",
          ],
        },
      },
      {
        id: "sn3",
        title: "The reporting entity: component units, blending, and discrete presentation",
        testPointIds: ["tp3"],
        explanation: [
          "The financial reporting entity is the primary government plus the organizations for which it is financially accountable. A primary government is a state, a general-purpose local government, or a special-purpose government that is legally separate and fiscally independent. The first question is whether a legally separate organization is a component unit, and the test is financial accountability: the primary government appoints a voting majority of the organization's governing board AND either (a) can impose its will on the organization or (b) there is a financial benefit or burden relationship. Financial accountability can also arise from fiscal dependency (the organization cannot set its budget, levy taxes, or issue debt without primary-government approval) combined with a financial benefit or burden. An organization can also be included if excluding it would make the financial statements misleading.",
          "Once an organization is a component unit, the presentation question is blend versus discrete. Blending reports the component unit's funds as though they were funds of the primary government — commingled in the primary government's statements. Blending is required when any of these hold: the component's governing body is substantively the same as the primary government's AND there is a financial benefit/burden or management operational responsibility; the component provides services exclusively or almost exclusively to the primary government (for example, a building authority that exists only to finance the primary government's facilities); or the component's total debt is expected to be repaid entirely or almost entirely by the primary government.",
          "If no blending criterion is met, the component unit is presented DISCRETELY — in one or more separate columns to the right of the primary government's totals in the government-wide statements — so readers see it is legally separate and its balances are not mixed with the primary government's. Not every affiliated organization is a component unit: some are related organizations (the primary government appoints a voting majority but is not financially accountable), joint ventures (an ongoing financial interest or responsibility shared with other governments), or jointly governed organizations. These are not consolidated but may require note disclosure, and a joint venture with an equity interest is reported as an asset. On the exam, resolve accountability first, then presentation, then disclosure — in that order.",
        ],
        keyRules: [
          "Financial accountability = appoint voting majority of board AND (impose will OR financial benefit/burden); OR fiscal dependency + benefit/burden.",
          "Blend when: substantively the same governing body (+ benefit/burden or operational responsibility), OR serves the primary government almost exclusively, OR debt repaid almost entirely by the primary government.",
          "Discrete presentation (separate column) is the default for component units not meeting a blending criterion.",
          "Related organizations, joint ventures, and jointly governed organizations are not component units but may require disclosure (equity-interest joint ventures are reported as an asset).",
        ],
      },
      {
        id: "sn4",
        title: "Capital assets, the modified approach, debt, and GASB 68/75 liabilities",
        testPointIds: ["tp4", "tp1"],
        explanation: [
          "Capital assets and long-term debt are where the two models diverge most sharply, so BAR tests the dual entries directly. When a governmental fund buys equipment, the fund records a capital-outlay EXPENDITURE and no asset; government-wide, the same purchase capitalizes an asset that will be depreciated. When the government issues general obligation bonds, the debt service (or capital projects) fund records an OTHER FINANCING SOURCE for the proceeds and, later, a debt-service EXPENDITURE for principal repayment; government-wide, the bond is a liability and repayment reduces it, with any premium recorded as an other financing source in the fund but amortized government-wide. This is why capital outlay, bond proceeds, and principal repayment are all reconciling items — they hit the fund operating result but not the government-wide change in net position (or hit it differently).",
          "Infrastructure assets — roads, bridges, drainage systems — may use the MODIFIED APPROACH instead of depreciation. Under the modified approach a government does not depreciate eligible infrastructure networks or subsystems if it (1) manages the assets using an asset management system that keeps an up-to-date inventory, performs condition assessments and summarizes results using a measurement scale, and estimates the annual amount needed to maintain the assets at the disclosed condition level; and (2) documents that the assets are being preserved AT OR ABOVE that established and disclosed condition level. Maintenance and preservation costs are expensed as incurred rather than capitalized. If the government fails to maintain the condition or the documentation, it must revert to depreciating the infrastructure.",
          "Pensions and OPEB are a pure economic-resources story. Under GASB 68 (pensions) and GASB 75 (OPEB), the government reports the NET PENSION (or OPEB) LIABILITY — the difference between the total pension liability and the plan's fiduciary net position — along with related deferred outflows and inflows of resources and pension/OPEB EXPENSE in the government-wide statements. The governmental funds, by contrast, report only the current-resources view: an expenditure for the contributions actually made during the year. That mismatch (full-accrual pension expense and liability vs fund-level contribution expenditure) generates reconciling adjustments, and the net pension liability is one of the largest subtractions in the fund-balance-to-net-position reconciliation.",
        ],
        keyRules: [
          "Capital assets: fund records capital-outlay expenditure (no asset); government-wide capitalizes and depreciates — reconciliation adds the asset and swaps depreciation for outlay.",
          "GO debt: proceeds = other financing source and principal repayment = expenditure in the fund; government-wide the bond is a liability reduced by repayments; premiums amortized government-wide.",
          "Modified approach: no depreciation only if (1) asset management system with condition assessment and estimated maintenance, and (2) documented preservation at/above the disclosed condition level; maintenance is expensed.",
          "GASB 68/75: net pension/OPEB liability, deferred outflows/inflows, and expense are government-wide only; funds report the contribution expenditure.",
        ],
        formulas: [
          "Net pension liability = total pension liability − plan fiduciary net position (plan assets at fair value).",
          "Governmental fund entry (bond issue): Dr Cash / Cr Other financing source — bond proceeds (and Cr OFS — premium).",
          "Government-wide entry (bond issue): Dr Cash / Cr Bonds payable (and Cr Premium, amortized over the term).",
        ],
        workedProblem: {
          scenario:
            "During the year, Riverton (governmental activities) had these events: (1) purchased police vehicles for $500,000 cash; (2) issued $6,000,000 of general obligation bonds at par to build a fire station; (3) recorded depreciation of $900,000 on existing governmental capital assets; and (4) made a $400,000 principal payment and $180,000 interest payment on outstanding bonds (interest was previously unaccrued; $30,000 of interest is accrued at year-end and not yet due). Show how each event is recorded in the governmental funds versus the government-wide statements, and state the reconciling effect on the change in net position.",
          steps: [
            "Vehicles: governmental funds record a capital-outlay EXPENDITURE of $500,000 (no asset); government-wide capitalize a $500,000 asset. Reconciliation: add back the $500,000 outlay (remove the expenditure) — it is not an expense government-wide.",
            "Bond issuance: funds record $6,000,000 as an OTHER FINANCING SOURCE (increases fund balance); government-wide record a $6,000,000 bond liability (no revenue). Reconciliation: remove the $6,000,000 other financing source — it does not increase net position.",
            "Depreciation: not recorded in the funds at all; government-wide record $900,000 depreciation expense. Reconciliation: subtract $900,000 (it reduces change in net position but not fund balance).",
            "Principal payment: funds record a $400,000 debt-service EXPENDITURE; government-wide it only reduces the bond liability (no expense). Reconciliation: add back the $400,000 (remove the expenditure).",
            "Interest: funds record $180,000 expenditure when due (no accrual); government-wide record interest expense on the accrual basis = $180,000 paid + $30,000 accrued = $210,000. Reconciliation: subtract the additional $30,000 of accrued interest.",
          ],
          conclusion:
            "In the funds, the net effect on fund balance is +$6,000,000 (bond OFS) − $500,000 (vehicles) − $400,000 (principal) − $180,000 (interest) = +$4,920,000. Converting to change in net position: add back $500,000 outlay and $400,000 principal, remove the $6,000,000 bond proceeds, and subtract $900,000 depreciation and $30,000 additional accrued interest. Net government-wide effect from these items = $4,920,000 + $500,000 + $400,000 − $6,000,000 − $900,000 − $30,000 = −$1,110,000. The fund result looks strongly positive only because bond proceeds and the absence of depreciation flatter it; the economic-resources view shows a decline.",
          markingNotes: [
            "Award marks for the correct dual treatment of the vehicles (expenditure vs capitalized asset) and the bonds (other financing source vs liability).",
            "Award marks for subtracting depreciation and the incremental accrued interest, and for adding back principal repayment in the reconciliation.",
            "Full marks require both the +$4,920,000 fund result and the −$1,110,000 change-in-net-position effect with correct signs.",
          ],
        },
      },
      {
        id: "sn5",
        title: "Interfund activity and GASB 33 nonexchange revenue",
        testPointIds: ["tp5"],
        explanation: [
          "Interfund activity is classified along one axis — reciprocal versus nonreciprocal — and the classification drives the entries and whether the item is eliminated in the government-wide conversion. Reciprocal activity mirrors an exchange between two parties. Interfund LOANS are temporary borrowings recorded as an interfund receivable ('due from') in the lending fund and an interfund payable ('due to') in the borrowing fund, expected to be repaid; if repayment is not expected, the amount is reclassified as a transfer. Interfund SERVICES PROVIDED AND USED are quasi-external transactions — one fund sells goods or services to another at a price approximating external value (for example, the water enterprise fund billing the General Fund for water) — recorded as revenue in the seller fund and expenditure/expense in the buyer fund, just as if the counterparty were outside the government.",
          "Nonreciprocal activity is a one-way flow. Interfund TRANSFERS move resources without an equivalent return — recorded as an OTHER FINANCING USE (or 'transfer out') in the giving fund and an OTHER FINANCING SOURCE (or 'transfer in') in the receiving fund; a common example is the General Fund subsidizing a debt service fund. Interfund REIMBURSEMENTS repay a fund that initially recorded an expenditure or expense that properly belongs to another fund; the reimbursed fund reduces its expenditure and the paying fund records its own expenditure — the reimbursement is NOT revenue to the recipient. In the government-wide statements, interfund balances and transfers within the same activity column (all within governmental activities, or all within business-type activities) are eliminated to avoid double counting; only net internal balances between governmental and business-type activities survive as an internal balance.",
          "Nonexchange revenue — where the government gives or receives value without a direct equal exchange — is recognized under GASB 33 by category. DERIVED tax revenues (sales tax, income tax) are recognized when the underlying exchange transaction occurs (the sale or the earning of income), net of estimated refunds. IMPOSED nonexchange revenues (property taxes, fines, forfeitures) are recognized in the period for which levied (property taxes) or when the government has an enforceable claim, subject to time requirements; under modified accrual the availability criterion still applies for fund recognition. GOVERNMENT-MANDATED and VOLUNTARY nonexchange transactions (most grants and shared revenues) are recognized when all ELIGIBILITY requirements are met — including any time requirement, allowable-cost/reimbursement basis, and required characteristics of recipients. The exam's favorite distinction: a TIME requirement affects WHEN you recognize (it is an eligibility requirement), whereas a PURPOSE restriction does not delay recognition but instead classifies the resulting net position or fund balance as restricted.",
        ],
        keyRules: [
          "Reciprocal: interfund loans (due to/from, repaid) and interfund services provided and used (revenue/expenditure or expense, like an external transaction).",
          "Nonreciprocal: transfers (other financing use out / other financing source in) and reimbursements (reduce the reimbursed fund's expenditure; not revenue).",
          "Government-wide: eliminate interfund balances/transfers within the same activity; keep only net internal balances between governmental and business-type activities.",
          "GASB 33 timing — derived (when underlying exchange occurs), imposed (period levied/enforceable), mandated/voluntary (when all eligibility including time requirements met); purpose restriction affects classification, not timing.",
        ],
      },
      {
        id: "sn6",
        title: "Fund balance classification (GASB 54) and the external reporting package",
        testPointIds: ["tp6"],
        explanation: [
          "GASB 54 classifies governmental fund balance into a five-tier hierarchy ordered by how binding the constraint on spending is, and BAR expects you to place amounts correctly from the top down. NONSPENDABLE fund balance is amounts that cannot be spent because they are not in spendable form (inventories, prepaid items, the long-term portion of loans receivable) or are legally/contractually required to remain intact (the principal of a permanent fund). RESTRICTED fund balance is constrained by external parties (creditors, grantors, contributors), by law through constitutional provisions, or by enabling legislation. COMMITTED fund balance reflects constraints imposed by the government's OWN highest-level decision-making authority (e.g., the city council by ordinance) that require the same level of formal action to remove. ASSIGNED fund balance reflects the government's INTENT to use resources for a specific purpose, expressed by a body or official the government has authorized. UNASSIGNED is the residual — and only the General Fund normally reports a positive unassigned balance (other governmental funds can report a negative unassigned balance if expenditures exceed available resources).",
          "The external reporting package layers the basic statements, notes, and required supplementary information. The basic financial statements are the two government-wide statements (net position; activities), the fund statements for governmental, proprietary, and fiduciary funds (with the required reconciliations to the government-wide view), and the notes. Required supplementary information (RSI) sits outside the basic statements but is still required: management's discussion and analysis (MD&A) is RSI that PRECEDES the basic statements and gives an objective, easily readable analysis; other RSI FOLLOWS the notes and includes budgetary comparison schedules for the General Fund and major special revenue funds with legally adopted annual budgets (showing original budget, final budget, and actual), and the pension/OPEB schedules of changes in net liability and of contributions.",
          "The whole document is the annual comprehensive financial report (ACFR), which has three sections. The INTRODUCTORY section (transmittal letter, organization chart, list of officials) is unaudited. The FINANCIAL section is the heart of the report: the independent auditor's report, MD&A, the basic financial statements, the notes, the RSI, and combining and individual fund statements/schedules. The STATISTICAL section presents multi-year trend data (financial trends, revenue capacity, debt capacity, demographic and economic information, and operating information) and is also unaudited. A common exam trap is treating budgetary comparisons or pension schedules as basic statements — they are RSI — or forgetting that MD&A, although discussion, is required and comes before, not after, the statements.",
        ],
        keyRules: [
          "GASB 54 hierarchy (most→least constrained): nonspendable, restricted, committed, assigned, unassigned; only the General Fund reports a positive unassigned balance.",
          "Committed requires the highest-level authority's formal action (same action to rescind); assigned reflects intent by an authorized body/official.",
          "MD&A is RSI presented BEFORE the basic statements; budgetary comparison and pension/OPEB schedules are RSI presented AFTER the notes.",
          "ACFR sections: introductory (unaudited), financial (auditor's report, MD&A, basic statements, notes, RSI, combining statements), statistical (unaudited trends).",
        ],
      },
    ],
    examPractice: [
      {
        id: "ep1",
        testPointIds: ["tp2", "tp1", "tp4"],
        style: "Task-based simulation (reconciliation)",
        question:
          "Mapleton's governmental funds report a net change in fund balances of $1,300,000 for the year. During the year the funds recorded: capital-outlay expenditures of $2,400,000; debt-service principal payments of $700,000; and bond proceeds (other financing source) of $3,000,000. Government-wide records show depreciation expense of $1,050,000. Additionally, compensated absences payable increased by $120,000 and accrued interest payable increased by $40,000 (neither used current financial resources), and property-tax revenue deferred as unavailable decreased by $90,000 during the year. Reconcile the net change in fund balances to the change in net position of governmental activities, explaining the sign of each adjustment.",
        answerPlan: [
          "Start from net change in fund balances and adjust capital outlay vs depreciation.",
          "Remove bond proceeds; add back principal repayment.",
          "Subtract accruals that do not use current resources (compensated absences, interest).",
          "Adjust for the change in unavailable revenue and total to change in net position.",
        ],
        modelAnswer:
          "Begin with the net change in fund balances, $1,300,000. Capital outlay of $2,400,000 was an expenditure in the funds but is capitalized government-wide, so ADD it back; depreciation of $1,050,000 is a government-wide expense not recorded in the funds, so SUBTRACT it — the net capital adjustment is +$2,400,000 − $1,050,000 = +$1,350,000. Bond proceeds of $3,000,000 were an other financing source that increased fund balance but create a liability rather than revenue government-wide, so REMOVE (subtract) $3,000,000. The $700,000 principal payment was a debt-service expenditure in the funds but only reduces the liability government-wide, so ADD it back $700,000. Compensated absences increased by $120,000 and accrued interest by $40,000 — both are full-accrual expenses that did not use current financial resources, so SUBTRACT $120,000 and $40,000. Finally, the unavailable property-tax revenue deferred in the funds DECREASED by $90,000, meaning $90,000 previously deferred became recognized in the funds; because the government-wide statements already recognized it earlier, this year the funds 'caught up,' so the reconciling adjustment reduces the government-wide result by $90,000 (SUBTRACT $90,000). Change in net position = 1,300,000 + 1,350,000 − 3,000,000 + 700,000 − 120,000 − 40,000 − 90,000 = $100,000. The funds showed a $1.3M increase largely because bond proceeds are not offset by depreciation and long-term accruals; on the economic-resources basis the government's net position rose only $100,000.",
        markingGuide: [
          "1 mark: net capital adjustment — add capital outlay $2,400,000, subtract depreciation $1,050,000.",
          "1 mark: remove bond proceeds $3,000,000 and add back principal repayment $700,000.",
          "1 mark: subtract compensated absences $120,000 and accrued interest $40,000 as non-current-resource accruals.",
          "1 mark: correct treatment of the $90,000 decrease in unavailable revenue and arriving at change in net position of $100,000.",
        ],
      },
      {
        id: "ep2",
        testPointIds: ["tp3"],
        style: "Short constructed response (reporting entity)",
        question:
          "The City of Harborview (primary government) is evaluating three organizations. (A) The Harborview Building Authority is a legally separate entity whose sole purpose is to issue debt and construct facilities that it leases exclusively to the City; the City is expected to repay essentially all of the Authority's debt. (B) The Harborview Public Library is legally separate; the City Council appoints a voting majority of its board and provides the majority of its funding, and can significantly influence its programs. (C) The Regional Transit District is a separate government jointly governed by five municipalities, each appointing one board member; Harborview has no equity interest and no obligation for its debt. For each, state whether it is part of Harborview's reporting entity and, if so, how it is presented.",
        answerPlan: [
          "Apply financial accountability and blending criteria to (A).",
          "Apply financial accountability and blend-vs-discrete to (B).",
          "Determine (C) is not a component unit and identify its treatment.",
          "State presentation/disclosure for each.",
        ],
        modelAnswer:
          "(A) Harborview Building Authority — this is a component unit and must be BLENDED. It is legally separate and the City is financially accountable, but more decisively it meets blending criteria: it exists exclusively to serve the City (it leases its facilities only to the City) and its debt is expected to be repaid entirely or almost entirely by the City. Blended component units are reported as if they were funds of the primary government, so the Authority's activity is commingled in Harborview's statements (typically its debt appears with the City's governmental activities). (B) Harborview Public Library — this is a component unit that is DISCRETELY presented. Financial accountability exists because the City appoints a voting majority of the board AND can impose its will/there is a financial benefit-burden relationship (majority funding, program influence). However, no blending criterion is met — the board is not substantively the same as the Council, the Library serves the public rather than the City almost exclusively, and its debt is not the City's — so it is shown in a separate column to the right of the primary government's totals. (C) Regional Transit District — this is NOT a component unit of Harborview. Harborview appoints only one of five board members, has no equity interest, and no financial benefit/burden or debt obligation, so there is no financial accountability. It is a jointly governed organization; Harborview does not consolidate it and, absent an equity interest, reports only note disclosure of the relationship as applicable.",
        markingGuide: [
          "1 mark: (A) identified as a component unit and BLENDED, citing exclusive service to the City and/or debt repaid almost entirely by the City.",
          "1 mark: (B) identified as a component unit with financial accountability and DISCRETELY presented (no blending criterion met).",
          "1 mark: (C) identified as NOT a component unit (no financial accountability) and treated as a jointly governed organization with disclosure only.",
          "1 mark: correct presentation stated for each (blended in the statements / separate column / not consolidated).",
        ],
      },
      {
        id: "ep3",
        testPointIds: ["tp5", "tp1"],
        style: "Task-based simulation (interfund & nonexchange revenue)",
        question:
          "For each item, state the fund-level accounting and any government-wide elimination: (1) the General Fund lends $200,000 to the Capital Projects Fund, to be repaid in three years; (2) the water Enterprise Fund bills the General Fund $45,000 for water used at City Hall; (3) the General Fund transfers $300,000 to the Debt Service Fund to cover future principal; (4) the city levies $5,000,000 of property taxes for the current year, of which $4,700,000 is collected by year-end or within 60 days after and $300,000 is not expected until later; (5) the city receives a $250,000 expenditure-driven federal grant that reimburses allowable costs, of which $180,000 of allowable costs were incurred this year.",
        answerPlan: [
          "Classify (1)–(3) as reciprocal/nonreciprocal interfund activity with the correct accounts.",
          "Apply modified-accrual measurable-and-available to the property tax levy (4).",
          "Apply GASB 33 eligibility (expenditure-driven grant) to (5).",
          "Note government-wide eliminations where relevant.",
        ],
        modelAnswer:
          "(1) Interfund LOAN (reciprocal): the General Fund records a 'due from Capital Projects Fund' (interfund receivable) and the Capital Projects Fund records a 'due to General Fund' (interfund payable) for $200,000; because it is not spendable in the near term, the General Fund reports a corresponding nonspendable/committed fund balance for the long-term advance. It is not revenue or a transfer. Government-wide, this balance within governmental activities is eliminated. (2) Interfund SERVICES PROVIDED AND USED (reciprocal, quasi-external): the Enterprise Fund records $45,000 of operating revenue and the General Fund records a $45,000 expenditure, treated as if with an outside party. Because it is between business-type and governmental activities, it is generally NOT eliminated (only netted as an internal balance if unpaid). (3) Interfund TRANSFER (nonreciprocal): the General Fund records a $300,000 other financing use (transfer out) and the Debt Service Fund records a $300,000 other financing source (transfer in); government-wide, transfers within governmental activities are eliminated. (4) Property taxes are IMPOSED nonexchange revenue: measurable and, for $4,700,000, available (collected in the period or within 60 days), so recognize $4,700,000 as fund revenue; the $300,000 not available is deferred as an unavailable-revenue deferred inflow (it will be recognized government-wide now under full accrual). (5) The federal grant is a government-mandated/voluntary nonexchange transaction that is EXPENDITURE-DRIVEN (reimbursement type): eligibility is met only as allowable costs are incurred, so recognize revenue of $180,000 this year (matching allowable costs incurred) and defer the remaining $70,000 until the costs are incurred.",
        markingGuide: [
          "1 mark: (1) interfund loan (due to/from) and (3) transfer (OFU/OFS) classified correctly with government-wide elimination noted.",
          "1 mark: (2) classified as interfund services provided and used (revenue/expenditure), recognizing it is generally not eliminated across activity types.",
          "1 mark: (4) recognize $4,700,000 available property-tax revenue and defer $300,000 as unavailable.",
          "1 mark: (5) recognize $180,000 grant revenue based on allowable costs incurred (expenditure-driven eligibility) and defer $70,000.",
        ],
      },
      {
        id: "ep4",
        testPointIds: ["tp6", "tp4"],
        style: "MCQ set rationale (fund balance, modified approach & reporting package)",
        question:
          "Answer and justify each: (1) A permanent fund holds $1,000,000 of principal that must remain intact and $60,000 of spendable earnings restricted for cemetery upkeep — classify each amount under GASB 54. (2) A city wants to avoid depreciating its road network — what two conditions must it satisfy under the modified approach, and what happens if it fails to document condition? (3) Where do the budgetary comparison schedule and MD&A appear in the ACFR, and are they audited? (4) In which ACFR section does the statistical multi-year trend data appear, and is it audited?",
        answerPlan: [
          "Classify permanent-fund principal vs earnings under GASB 54.",
          "State the two modified-approach conditions and the consequence of failure.",
          "Place budgetary comparison and MD&A as RSI relative to the basic statements.",
          "Identify the statistical section and its audit status.",
        ],
        modelAnswer:
          "(1) The $1,000,000 principal is NONSPENDABLE fund balance because it is legally required to remain intact and cannot be spent; the $60,000 of spendable earnings is RESTRICTED fund balance because an external/enabling constraint limits it to cemetery upkeep. (Neither is committed, assigned, or unassigned — the constraint sources are 'cannot be spent' and 'externally restricted,' which sit above the government's own committed/assigned constraints.) (2) To use the modified approach and avoid depreciating the road network the city must (a) manage the eligible infrastructure using an asset management system that maintains an up-to-date inventory, performs periodic condition assessments on a measurement scale, and estimates the annual amount needed to maintain the assets at the disclosed condition level; and (b) document that the assets are being preserved AT OR ABOVE that established and disclosed condition level. Maintenance/preservation costs are expensed. If the city fails to document that condition is maintained, it loses the modified approach and must revert to depreciating the infrastructure. (3) Both the budgetary comparison schedule and MD&A are REQUIRED SUPPLEMENTARY INFORMATION (RSI), not basic financial statements. MD&A is RSI presented BEFORE the basic statements; the budgetary comparison schedule is RSI presented AFTER the notes. As RSI, they are subject to limited auditor procedures (inquiry and comparison) rather than the opinion-level audit applied to the basic statements. (4) The multi-year trend data appears in the STATISTICAL section of the ACFR, which is unaudited. Marks turn on placing nonspendable vs restricted correctly, stating both modified-approach conditions plus the reversion consequence, and correctly locating RSI and the unaudited statistical section.",
        markingGuide: [
          "1 mark: permanent-fund principal = nonspendable and restricted earnings = restricted under GASB 54.",
          "1 mark: both modified-approach conditions (asset management system + documented condition) and reversion to depreciation on failure.",
          "1 mark: MD&A (before statements) and budgetary comparison (after notes) identified as RSI, not basic statements.",
          "1 mark: statistical section identified for multi-year trend data and noted as unaudited.",
        ],
      },
    ],
  }),
};
