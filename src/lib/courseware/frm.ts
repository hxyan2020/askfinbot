import type { ModuleCourseware } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * FRM (Financial Risk Manager) courseware for Part I and Part II.
 *
 * Titles mirror the FRM part topic lists in `src/lib/exams.ts` exactly.
 *
 * Exam format notes:
 *  - Part I : computer-based test (CBT), 100 equally weighted multiple-choice
 *             questions in a single 4-hour session.
 *  - Part II: CBT, 80 equally weighted multiple-choice questions in a single
 *             4-hour session, more applied and scenario-oriented.
 */

const FRM_P1_FORMAT =
  "FRM Part I — computer-based test (CBT): 100 equally weighted multiple-choice questions in one 4-hour session. No penalty for wrong answers; approved calculator only. Emphasis on tools and foundational concepts.";
const FRM_P2_FORMAT =
  "FRM Part II — computer-based test (CBT): 80 equally weighted multiple-choice questions in one 4-hour session. More applied and integrative, with scenario and current-issues content; results are pass/fail with quartile feedback.";

export const FRM_COURSEWARE: ModuleCourseware[] = [
  // ===================================================================
  // PART I
  // ===================================================================
  courseware({
    moduleId: "frm-p1-m1",
    examId: "frm",
    levelId: "p1",
    title: "Foundations — Risk types, governance & GARP Code of Conduct",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Establishes the vocabulary of risk management: the major categories of financial and non-financial risk, the risk-management process, corporate governance of risk, and the GARP Code of Conduct that binds certified risk professionals.",
    whyItMatters:
      "Everything else in the FRM builds on a shared taxonomy of risk and an ethical foundation. Governance failures and ethics breaches sit behind most large loss events, so this module frames the entire syllabus.",
    learningOutcomes: [
      "Classify market, credit, liquidity, operational and business risks.",
      "Describe the risk-management process and its objectives.",
      "Explain the role of the board and risk committees in governance.",
      "Distinguish risk-taking that creates value from risk that destroys it.",
      "Apply the GARP Code of Conduct to professional situations.",
      "Explain how risk appetite and tolerance are set and cascaded.",
    ],
    syllabusAreas: [
      area("Risk taxonomy", [
        "Market, credit and liquidity risk",
        "Operational and business/strategic risk",
        "Idiosyncratic vs systematic risk",
      ], "Foundations ~20%"),
      area("Governance", [
        "Board and risk-committee roles",
        "Risk appetite and tolerance",
        "Three lines of defence",
      ]),
      area("Professional conduct", [
        "GARP Code of Conduct principles",
        "Conflicts of interest",
        "Consequences of ethics breaches",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m1-l1",
        "The risk taxonomy",
        45,
        [
          "Classify the major categories of risk from the loss driver in a vignette.",
          "Distinguish idiosyncratic (diversifiable) from systematic (non-diversifiable) risk.",
        ],
        [
          "Market risk = losses from moves in prices, rates, FX or volatilities.",
          "Credit risk = counterparty fails to pay or is downgraded (migration/spread).",
          "Liquidity splits into funding liquidity (can't raise cash) vs market/asset liquidity (can't sell without moving price).",
          "Operational risk = failed people/process/systems/external events; by GARP/Basel it EXCLUDES strategic and reputational risk.",
          "A single bond usually carries market + credit + liquidity risk at once — the exam asks which driver the vignette emphasises.",
        ],
        [
          "Rates rise 50bp on a fixed-rate corporate bond you hold — which risk moved first?",
          "A desk cannot roll overnight funding after a parent downgrade — funding liquidity or credit?",
        ],
        "A bank holds a 5-year fixed-rate corporate bond. Rates rise 50bp (market/interest-rate risk), the issuer is downgraded A→BBB (credit migration/spread risk), and the desk cannot sell within a day without a concession (market-liquidity risk). One position, three exposures — never answer from the asset label alone.",
        {
          body: [
            "Treat the taxonomy as a decision tree keyed on the CAUSE of loss. Prices/rates/vols moving against you is market risk; a counterparty failing to perform is credit risk; being unable to fund or to sell is liquidity risk; a broken process, rogue employee, system outage or external event is operational risk; losses from bad strategy or demand shifts are business/strategic risk.",
            "A single instrument usually carries several risks. The exam plants a bond or derivative and asks for the MOST or LEAST likely category — you must isolate the driver the scenario emphasises rather than naming the asset class.",
            "Systematic vs idiosyncratic is the hinge to later modules: diversification removes idiosyncratic risk but leaves systematic risk, which is why market risk carries a premium.",
          ],
          formulas: [
            "Market | Credit | Liquidity (funding vs asset) | Operational | Business/strategic",
            "Diversifiable = idiosyncratic; non-diversifiable = systematic",
          ],
        }
      ),
      lesson(
        "frm-p1-m1-l2",
        "The risk-management process",
        45,
        [
          "Describe identify → measure → monitor → manage/report as an exam sequence.",
          "Explain why the objective is aligning risk with strategy, not eliminating all risk.",
        ],
        [
          "Identify exposures and loss drivers before choosing a metric.",
          "Measure with a fit-for-purpose metric (sensitivity, VaR, stress, scorecard) — units matter.",
          "Monitor against limits and appetite; escalate breaches with remediation.",
          "Manage means retain, hedge, transfer or avoid — only uncompensated risk should be shed by default.",
          "Over-hedging destroys value by paying away expected return the firm is equipped to bear.",
        ],
        [
          "Why is 'minimise all risk' the wrong objective on FRM Part I?",
          "Order the process steps and say what fails if measurement precedes identification.",
        ],
        "An airline retains demand/business risk (its edge) but hedges jet-fuel price risk (incidental market risk). Risk management optimises the mix: retain compensated risk inside appetite; transfer uncompensated risk.",
        {
          body: [
            "The process is a loop, not a checklist: identify the exposure, measure it in the metric the limit uses, monitor against appetite/limits, then manage (retain/hedge/transfer/avoid) and report. Skipping identification produces beautiful but irrelevant numbers.",
            "FRM items punish the idea that 'good risk management = zero risk'. Firms are paid to bear risks where they have an edge; hedging those away sells expected return. The correct frame is uncompensated vs compensated risk relative to board-approved appetite.",
          ],
          formulas: ["identify → measure → monitor → manage/report", "Retain compensated risk; hedge/avoid uncompensated risk"],
        }
      ),
      lesson(
        "frm-p1-m1-l3",
        "Corporate governance of risk",
        45,
        [
          "Place board, line 1, line 2 and line 3 correctly for oversight vs ownership vs challenge vs assurance.",
          "Reject answers that put the board in an operational role or internal audit in a limit-setting role.",
        ],
        [
          "Board approves risk appetite and oversees the framework — it does not run day-to-day risk-taking.",
          "Line 1 = business units that OWN and manage risk.",
          "Line 2 = independent risk management and compliance that SET limits and CHALLENGE line 1.",
          "Line 3 = internal audit providing ASSURANCE to the audit committee that lines 1 and 2 work.",
          "Independence of lines 2 and 3 from revenue generation is the control that matters.",
        ],
        [
          "Which line does the independent risk function represent?",
          "Who approves firm-wide risk appetite?",
        ],
        "CRO challenges a desk's position size (line 2). Internal audit later tests whether the limit framework was followed (line 3). The desk that took the position remains line 1 owner. Mixing these roles is a classic distractor.",
        {
          body: [
            "Governance answers hinge on separation of duties. The board sets and approves appetite and oversees the framework but does not take positions. Line 1 owns risk day to day. Line 2 measures, limits and challenges. Line 3 assures and reports to the audit committee.",
            "If a vignette names 'internal audit setting VaR limits', it is wrong — that is a line-2 job. If it names the board 'booking hedges', it is wrong — that is operational.",
          ],
          formulas: ["Line 1 own → Line 2 challenge/limits → Line 3 assure", "Board: approve appetite & oversee framework"],
        }
      ),
      lesson(
        "frm-p1-m1-l4",
        "Risk appetite and tolerance",
        40,
        [
          "Define appetite vs tolerance vs limits and put them in cascade order.",
          "Explain what a limit breach requires (escalation and remediation, not silent override).",
        ],
        [
          "Risk appetite = aggregate risk the firm will accept in pursuit of strategy.",
          "Tolerances translate appetite into measurable ceilings (e.g. max drawdown, VaR, rating floor).",
          "Limits operationalise tolerances at desk/portfolio/product level.",
          "Breaches trigger escalation paths and remediation — they are not optional guidelines.",
          "Appetite authorises which compensated risks are worth taking; it is not a slogan.",
        ],
        [
          "Order appetite → tolerance → limits → escalation.",
          "A desk exceeds its VaR limit the day before bonus — what must happen?",
        ],
        "Board appetite: 'maintain single-A rating and keep 1-day 99% firm VaR under $50m'. Treasury tolerance: banking-book rate VaR ≤ $12m. Desk limit: rates book VaR ≤ $3m. A $3.4m print must escalate — trimming the reported VaR to stay under the limit violates both governance and the GARP Code.",
        {
          body: [
            "Memorise the cascade: appetite (board, aggregate, strategic) → tolerance (measurable ceilings) → limits (desk/portfolio caps) → escalation on breach. Exam items swap neighbouring terms; 'appetite' is never a desk VaR number.",
            "Limit breaches are governance events. The correct response is escalate and remediate, not quietly adjust the model output to fit. That pattern also feeds ethics items in the next lesson.",
          ],
          formulas: ["appetite → tolerance → limits → escalation"],
        }
      ),
      lesson(
        "frm-p1-m1-l5",
        "The GARP Code of Conduct",
        45,
        [
          "State the Code pillars and pick the action the Code REQUIRES under commercial pressure.",
          "Distinguish Code compliance from mere legal compliance — the Code can demand more.",
        ],
        [
          "Pillars: professional integrity & ethical conduct; conflicts of interest; confidentiality; fundamental responsibilities.",
          "Members must protect the integrity of the profession above personal or employer gain.",
          "Misrepresenting risk (e.g. understating VaR) is a violation — refuse, escalate, document.",
          "Confidentiality survives the end of an engagement.",
          "The most conservative defensible action is almost always the scoring answer.",
        ],
        [
          "Desk head asks you to trim reported VaR from $12.4m to $9.9m before a bonus review — what do you do?",
          "Does 'legal in this jurisdiction' automatically satisfy the Code?",
        ],
        "A desk head tells the risk analyst to trim one-day 99% VaR from $12.4m to $9.9m to stay under limit. Refuse the misstatement, escalate to CRO/compliance, document the request, and continue reporting $12.4m. 'Discuss and adjust' scores zero.",
        {
          body: [
            "Ethics items are pattern-matching once you internalise the pillars. The examiner constructs a conflict between commercial pressure and professional integrity; the correct answer refuses misrepresentation, discloses conflicts, and escalates through proper channels.",
            "Distinguish the Code from law and internal policy. Even where understating a risk metric is not illegal, misrepresenting risk breaches professional integrity. Confidentiality obligations persist beyond the engagement.",
          ],
          formulas: ["Refuse → escalate → document", "Code compliance ≥ legal compliance"],
        }
      ),
    ],
    frameworksAndFormulas: [
      "Risk process: identify → measure → monitor → manage/report.",
      "Three lines of defence: business → risk/compliance → internal audit.",
      "Risk appetite → risk tolerance → limits → escalation.",
    ],
    commonTraps: [
      "Assuming the goal of risk management is to minimise all risk.",
      "Confusing the second and third lines of defence.",
      "Treating governance as a compliance formality rather than substance.",
    ],
    examTechnique: [
      "Anchor answers in the correct risk category first.",
      "Recognise ethics questions and choose the response the Code requires.",
      "Watch for 'least/most likely' phrasing in governance questions.",
    ],
    practicePlan: [
      "Draw a one-page risk taxonomy and quiz yourself on examples.",
      "Review the GARP Code and work 15 ethics-style questions.",
      "Map the three lines of defence to real functions.",
    ],
    furtherReading: [
      "GARP FRM Part I — Foundations of Risk Management readings.",
      "GARP Code of Conduct.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m2",
    examId: "frm",
    levelId: "p1",
    title: "Foundations — Enterprise risk management & risk culture",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers enterprise risk management (ERM) frameworks, risk culture, the integration of risk across a firm, key risk-management case studies (e.g., large loss events), and the CAPM/portfolio foundations used throughout risk.",
    whyItMatters:
      "ERM connects siloed risks into a firm-wide view, and culture determines whether frameworks are actually followed. Classic case studies reveal how governance and culture failures translate into catastrophic losses.",
    learningOutcomes: [
      "Explain the objectives and components of an ERM framework.",
      "Describe the drivers and indicators of risk culture.",
      "Analyse historical financial disasters for root causes.",
      "Apply the CAPM and interpret systematic risk.",
      "Explain the benefits and challenges of integrating risk.",
      "Relate risk data and reporting to decision-making.",
    ],
    syllabusAreas: [
      area("ERM frameworks", [
        "Objectives and dimensions of ERM",
        "Risk aggregation and integration",
        "ERM benefits and challenges",
      ], "Foundations ~20%"),
      area("Risk culture", [
        "Drivers of risk culture",
        "Indicators and metrics",
        "Incentives and behaviour",
      ]),
      area("Foundations & case studies", [
        "CAPM and portfolio theory",
        "Financial disasters and lessons",
        "Risk data aggregation (BCBS 239)",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m2-l1",
        "Enterprise risk management frameworks",
        50,
        [
          "Describe ERM objectives and components.",
          "Explain risk aggregation across the firm.",
        ],
        [
          "ERM provides a holistic, firm-wide view of risk.",
          "Aggregation must account for diversification and concentration.",
          "ERM links risk appetite to strategy and capital.",
        ],
        [
          "How does ERM differ from siloed risk management?",
          "Why is diversification relevant to aggregation?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m2-l2",
        "Risk culture and incentives",
        45,
        [
          "Identify drivers and indicators of risk culture.",
          "Explain how incentives shape behaviour.",
        ],
        [
          "Culture is 'how risk is handled when no one is watching'.",
          "Misaligned incentives encourage excessive risk-taking.",
          "Tone from the top and accountability drive culture.",
        ],
        [
          "How do incentives affect risk-taking behaviour?",
          "What indicators reveal a weak risk culture?",
        ],
        "A trading desk paid on short-term P&L without risk-adjusted metrics is incentivised to take hidden tail risk—a cultural and incentive failure."
      ),
      lesson(
        "frm-p1-m2-l3",
        "CAPM and portfolio foundations",
        50,
        [
          "Apply the CAPM to estimate required return.",
          "Distinguish systematic from unsystematic risk.",
        ],
        [
          "CAPM prices only systematic (non-diversifiable) risk via beta.",
          "The security market line relates return to beta.",
          "Unsystematic risk is diversified away in large portfolios.",
        ],
        [
          "Why does CAPM ignore unsystematic risk?",
          "What does beta measure?",
        ],
        "A stock with beta 1.2, risk-free rate 3% and market premium 5% requires 3% + 1.2 × 5% = 9%."
      ),
      lesson(
        "frm-p1-m2-l4",
        "Financial disasters and lessons learned",
        45,
        [
          "Analyse the root causes of major loss events.",
          "Extract governance and culture lessons.",
        ],
        [
          "Leverage, concentration and liquidity mismatch recur in disasters.",
          "Model overreliance and weak controls amplify losses.",
          "Culture and governance failures underlie most events.",
        ],
        [
          "What common factors recur across financial disasters?",
          "How did liquidity mismatch contribute to failures?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m2-l5",
        "Risk data aggregation and reporting",
        40,
        [
          "Explain the principles of risk data aggregation (BCBS 239).",
          "Relate data quality to decision-making.",
        ],
        [
          "Accurate, timely, complete data underpins good risk decisions.",
          "BCBS 239 sets principles for aggregation and reporting.",
          "Poor data quality can hide building risks.",
        ],
        [
          "Why is data aggregation a risk-management concern?",
          "What does BCBS 239 require?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "CAPM: E(Ri) = rf + βi[E(Rm) − rf].",
      "ERM links appetite → strategy → capital → limits.",
      "BCBS 239 principles: accuracy, completeness, timeliness, adaptability.",
    ],
    commonTraps: [
      "Treating ERM as a sum of independent silo risks.",
      "Assuming strong frameworks guarantee good culture.",
      "Applying CAPM to price diversifiable risk.",
    ],
    examTechnique: [
      "Link disaster cases to specific root-cause categories.",
      "Use CAPM mechanically once inputs are identified.",
      "Recognise culture/governance answers among plausible distractors.",
    ],
    practicePlan: [
      "Summarise five classic disasters in one line of root cause each.",
      "Practise CAPM computations.",
      "Review the BCBS 239 principles.",
    ],
    furtherReading: [
      "GARP FRM Part I — Foundations of Risk Management readings.",
      "BCBS 239 — Principles for effective risk data aggregation.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m3",
    examId: "frm",
    levelId: "p1",
    title: "Quantitative — Probability, statistics & distributions",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Covers probability foundations, random variables, common discrete and continuous distributions, moments, and the statistical description of financial data used throughout risk measurement.",
    whyItMatters:
      "Risk is quantified with probability. A firm grasp of distributions and moments is prerequisite to VaR, credit modelling and every quantitative technique later in the exam.",
    learningOutcomes: [
      "Apply probability rules and conditional probability.",
      "Describe discrete and continuous random variables.",
      "Compute moments: mean, variance, skewness, kurtosis.",
      "Apply common distributions (normal, lognormal, binomial, Poisson, Student's t).",
      "Interpret covariance and correlation.",
      "Explain the properties of the normal distribution in finance.",
    ],
    syllabusAreas: [
      area("Probability foundations", [
        "Probability rules and Bayes' theorem",
        "Random variables and expectations",
        "Joint, marginal and conditional distributions",
      ], "Quant ~20%"),
      area("Distributions", [
        "Bernoulli, binomial, Poisson",
        "Normal, lognormal, Student's t",
        "Mixture and heavy-tailed distributions",
      ]),
      area("Moments & dependence", [
        "Mean, variance, skewness, kurtosis",
        "Covariance and correlation",
        "Standardisation and quantiles",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m3-l1",
        "Probability and Bayes' theorem",
        50,
        [
          "Apply probability rules and conditional probability.",
          "Update beliefs with Bayes' theorem.",
        ],
        [
          "Conditional probability P(A|B) = P(A∩B)/P(B).",
          "Bayes' theorem reverses conditional probabilities.",
          "Independence means P(A∩B) = P(A)P(B).",
        ],
        [
          "How does Bayes' theorem update a prior?",
          "What defines statistical independence?",
        ],
        "Given a 2% base default rate and a test flagging 90% of defaulters but 10% of non-defaulters, Bayes' theorem gives the probability of actual default given a flag."
      ),
      lesson(
        "frm-p1-m3-l2",
        "Random variables and moments",
        50,
        [
          "Compute expectation, variance and higher moments.",
          "Interpret skewness and kurtosis.",
        ],
        [
          "Variance measures dispersion; skewness measures asymmetry.",
          "Excess kurtosis indicates fat tails relative to normal.",
          "Financial returns typically exhibit negative skew and fat tails.",
        ],
        [
          "Why do fat tails matter for risk?",
          "What does negative skew imply for losses?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m3-l3",
        "Discrete distributions",
        45,
        [
          "Apply Bernoulli, binomial and Poisson distributions.",
          "Match distributions to modelling situations.",
        ],
        [
          "The binomial models the count of successes in n trials.",
          "The Poisson models rare-event counts (e.g., defaults, losses).",
          "Parameters determine the distribution's shape.",
        ],
        [
          "When is the Poisson distribution appropriate?",
          "How is the binomial mean computed?",
        ],
        "The number of operational-loss events per year is often modelled as Poisson with rate λ, so the expected count and variance both equal λ."
      ),
      lesson(
        "frm-p1-m3-l4",
        "Continuous distributions",
        50,
        [
          "Apply the normal, lognormal and Student's t distributions.",
          "Explain why the lognormal fits asset prices.",
        ],
        [
          "The normal is symmetric and fully described by mean and variance.",
          "Prices are lognormal because returns compound and prices stay positive.",
          "Student's t has fatter tails, useful for return modelling.",
        ],
        [
          "Why model prices as lognormal but returns as normal?",
          "When is the t distribution preferred?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m3-l5",
        "Covariance, correlation and standardisation",
        45,
        [
          "Compute covariance and correlation.",
          "Standardise a variable to a z-score.",
        ],
        [
          "Correlation is covariance scaled to [−1, 1].",
          "Standardisation expresses values in standard-deviation units.",
          "Correlation captures only linear dependence.",
        ],
        [
          "Why can zero correlation still hide dependence?",
          "How is a z-score interpreted?",
        ],
        "A loss 2.33 standard deviations below the mean corresponds to the 1% left-tail quantile of a normal distribution—the basis for a 99% VaR."
      ),
    ],
    frameworksAndFormulas: [
      "Bayes: P(A|B) = P(B|A)P(A)/P(B).",
      "Binomial mean = np, variance = np(1 − p).",
      "Poisson mean = variance = λ.",
      "Correlation ρ = Cov(X,Y)/(σXσY).",
    ],
    commonTraps: [
      "Confusing correlation (linear) with general dependence.",
      "Mixing up price (lognormal) and return (normal) assumptions.",
      "Forgetting excess kurtosis when assuming normality.",
    ],
    examTechnique: [
      "Identify the distribution the situation implies before computing.",
      "Use z-scores to translate confidence levels into quantiles.",
      "Check whether a question refers to price or return.",
    ],
    practicePlan: [
      "Work 20 probability and Bayes' problems.",
      "Memorise moments of the key distributions.",
      "Practise z-score/quantile conversions.",
    ],
    furtherReading: [
      "GARP FRM Part I — Quantitative Analysis readings.",
      "Miller, 'Mathematics and Statistics for Financial Risk Management'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m4",
    examId: "frm",
    levelId: "p1",
    title: "Quantitative — Regression, forecasting & simulation",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Covers linear regression (single and multiple), time-series analysis, forecasting, and Monte Carlo simulation, providing the modelling toolkit for risk estimation and stress analysis.",
    whyItMatters:
      "Regression and simulation are the workhorses of risk modelling—used to estimate factor exposures, forecast volatility and generate scenarios for VaR and stress testing.",
    learningOutcomes: [
      "Estimate and interpret linear regression models.",
      "Diagnose regression assumption violations.",
      "Model and forecast time series (AR, MA, ARMA).",
      "Estimate and forecast volatility (EWMA, GARCH).",
      "Design and interpret Monte Carlo simulations.",
      "Apply bootstrapping and resampling methods.",
    ],
    syllabusAreas: [
      area("Regression", [
        "Single and multiple regression",
        "Hypothesis tests and R-squared",
        "Assumption violations and remedies",
      ], "Quant ~20%"),
      area("Time series & volatility", [
        "Stationarity and AR/MA/ARMA models",
        "EWMA and GARCH volatility",
        "Forecasting and evaluation",
      ]),
      area("Simulation", [
        "Monte Carlo methods",
        "Variance reduction",
        "Bootstrapping",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m4-l1",
        "Linear regression estimation and inference",
        55,
        [
          "Estimate and interpret regression coefficients.",
          "Test significance and interpret R-squared.",
        ],
        [
          "OLS minimises the sum of squared residuals.",
          "The slope measures the effect of one variable holding others constant.",
          "R-squared is the proportion of variance explained.",
        ],
        [
          "How is a partial slope interpreted?",
          "What does a high but insignificant coefficient suggest?",
        ],
        "Regressing a portfolio's returns on the market gives a beta of 1.1 with a t-stat of 4.0, a statistically significant systematic exposure."
      ),
      lesson(
        "frm-p1-m4-l2",
        "Regression diagnostics",
        50,
        [
          "Detect heteroskedasticity, autocorrelation and multicollinearity.",
          "Apply appropriate corrections.",
        ],
        [
          "Heteroskedasticity biases standard errors.",
          "Autocorrelation inflates t-statistics.",
          "Multicollinearity inflates coefficient standard errors.",
        ],
        [
          "What does the Durbin-Watson statistic detect?",
          "How is heteroskedasticity remedied?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m4-l3",
        "Time-series models",
        50,
        [
          "Model series with AR, MA and ARMA processes.",
          "Test for stationarity.",
        ],
        [
          "Stationarity is required for stable AR/MA estimation.",
          "Autocorrelation functions identify model order.",
          "A unit root implies nonstationarity requiring differencing.",
        ],
        [
          "Why must a series be stationary before AR modelling?",
          "How is model order identified?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m4-l4",
        "Volatility forecasting: EWMA and GARCH",
        55,
        [
          "Estimate volatility with EWMA and GARCH(1,1).",
          "Explain volatility clustering and mean reversion.",
        ],
        [
          "EWMA weights recent observations more heavily.",
          "GARCH captures volatility clustering and long-run mean reversion.",
          "Persistence in GARCH is measured by α + β.",
        ],
        [
          "How does GARCH capture volatility clustering?",
          "What does α + β near 1 imply?",
        ],
        "In a GARCH(1,1) with α = 0.1 and β = 0.85, persistence is 0.95, so volatility shocks decay slowly and revert to a long-run level."
      ),
      lesson(
        "frm-p1-m4-l5",
        "Monte Carlo simulation and bootstrapping",
        50,
        [
          "Design a Monte Carlo simulation.",
          "Apply bootstrapping to estimate distributions.",
        ],
        [
          "Monte Carlo generates scenarios from assumed distributions.",
          "Variance-reduction techniques improve efficiency.",
          "Bootstrapping resamples historical data without distribution assumptions.",
        ],
        [
          "How does bootstrapping differ from parametric Monte Carlo?",
          "Why use variance-reduction techniques?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "OLS slope = Cov(X,Y)/Var(X).",
      "EWMA: σ²_t = λσ²_{t−1} + (1 − λ)r²_{t−1}.",
      "GARCH(1,1): σ²_t = ω + αr²_{t−1} + βσ²_{t−1}; persistence = α + β.",
      "Long-run GARCH variance = ω/(1 − α − β).",
    ],
    commonTraps: [
      "Ignoring nonstationarity before time-series modelling.",
      "Confusing EWMA (no mean reversion) with GARCH (mean-reverting).",
      "Treating simulation output as precise without enough runs.",
    ],
    examTechnique: [
      "Check stationarity first in time-series questions.",
      "Compute GARCH persistence and long-run variance directly.",
      "State the distributional assumption behind a simulation.",
    ],
    practicePlan: [
      "Interpret 10 regression outputs.",
      "Compute GARCH forecasts and long-run variance.",
      "Sketch a Monte Carlo VaR procedure.",
    ],
    furtherReading: [
      "GARP FRM Part I — Quantitative Analysis readings.",
      "Diebold, 'Elements of Forecasting'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m5",
    examId: "frm",
    levelId: "p1",
    title: "Quantitative — Hypothesis testing & estimation",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers sampling distributions, estimation, confidence intervals and hypothesis testing, including the errors, power and test statistics used to validate risk models and parameter estimates.",
    whyItMatters:
      "Risk parameters are estimated from finite samples with uncertainty. Hypothesis testing underpins model validation, backtesting and the statistical rigour expected of a risk professional.",
    learningOutcomes: [
      "Explain sampling distributions and the central limit theorem.",
      "Construct confidence intervals for means and variances.",
      "Formulate and test hypotheses with appropriate statistics.",
      "Interpret Type I and Type II errors and test power.",
      "Apply t-, chi-square and F-tests.",
      "Relate estimation uncertainty to risk-model reliability.",
    ],
    syllabusAreas: [
      area("Estimation", [
        "Point estimates and estimator properties",
        "Sampling distributions and the CLT",
        "Confidence intervals",
      ], "Quant ~20%"),
      area("Hypothesis testing", [
        "Null/alternative hypotheses and p-values",
        "Type I/II errors and power",
        "t-, chi-square and F-tests",
      ]),
      area("Applications", [
        "Testing means, variances and correlations",
        "Model validation context",
        "Multiple testing pitfalls",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m5-l1",
        "Sampling distributions and estimation",
        50,
        [
          "Explain the central limit theorem.",
          "Evaluate estimator bias and efficiency.",
        ],
        [
          "The CLT makes sample means approximately normal for large n.",
          "Good estimators are unbiased, efficient and consistent.",
          "Standard error shrinks with the square root of sample size.",
        ],
        [
          "Why does the CLT justify normal-based inference?",
          "What makes an estimator efficient?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m5-l2",
        "Confidence intervals",
        45,
        [
          "Construct confidence intervals for a mean.",
          "Interpret the confidence level correctly.",
        ],
        [
          "A 95% interval means 95% of such intervals contain the true parameter.",
          "Wider intervals reflect greater uncertainty.",
          "The t distribution is used when the variance is estimated.",
        ],
        [
          "What does a 95% confidence level actually mean?",
          "When is the t rather than z used?",
        ],
        "With a sample mean return of 8%, standard error 2% and large n, a 95% confidence interval is roughly 8% ± 1.96 × 2% = 4.1% to 11.9%."
      ),
      lesson(
        "frm-p1-m5-l3",
        "Hypothesis testing framework",
        50,
        [
          "Formulate null and alternative hypotheses.",
          "Interpret p-values and significance levels.",
        ],
        [
          "The p-value is the smallest level at which the null is rejected.",
          "Failing to reject is not the same as accepting the null.",
          "One- vs two-tailed tests use different critical values.",
        ],
        [
          "What does failing to reject the null mean?",
          "How do one- and two-tailed tests differ?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m5-l4",
        "Errors, power and test selection",
        45,
        [
          "Distinguish Type I and Type II errors.",
          "Select the appropriate test statistic.",
        ],
        [
          "Type I error rejects a true null; Type II fails to reject a false null.",
          "Power is 1 − P(Type II error).",
          "t-tests compare means; chi-square tests variances; F-tests compare variances.",
        ],
        [
          "How are Type I and Type II errors traded off?",
          "Which test compares two variances?",
        ],
        "Lowering the significance level from 5% to 1% reduces Type I error but raises Type II error and lowers power, all else equal."
      ),
      lesson(
        "frm-p1-m5-l5",
        "Testing in a risk-model context",
        40,
        [
          "Relate hypothesis testing to model validation.",
          "Recognise multiple-testing pitfalls.",
        ],
        [
          "Backtesting is a hypothesis test on model accuracy.",
          "Testing many hypotheses inflates false-positive risk.",
          "Estimation uncertainty limits model precision.",
        ],
        [
          "How is backtesting a hypothesis test?",
          "Why does multiple testing inflate false positives?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Standard error of mean = σ/√n.",
      "Confidence interval = estimate ± critical value × standard error.",
      "Test statistic (z) = (estimate − hypothesised)/standard error.",
      "Power = 1 − P(Type II error).",
    ],
    commonTraps: [
      "Interpreting failure to reject as proof of the null.",
      "Using z when the population variance is unknown (should use t).",
      "Ignoring the Type I/Type II trade-off when choosing significance.",
    ],
    examTechnique: [
      "Write out hypotheses explicitly before selecting a test.",
      "Match the test statistic to the parameter being tested.",
      "Check one- vs two-tailed before reading critical values.",
    ],
    practicePlan: [
      "Work 15 hypothesis-test problems across test types.",
      "Practise confidence-interval construction.",
      "Relate a backtest to its underlying hypothesis test.",
    ],
    furtherReading: [
      "GARP FRM Part I — Quantitative Analysis readings.",
      "Miller, 'Mathematics and Statistics for Financial Risk Management'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m6",
    examId: "frm",
    levelId: "p1",
    title: "Markets — Banks, insurers & fund structures",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Introduces the institutions of financial markets—commercial and investment banks, insurers, pension funds, mutual funds and hedge funds—their business models, balance-sheet risks and regulatory context.",
    whyItMatters:
      "Understanding how financial institutions make money and where their risks concentrate frames the market and credit risk that dominate the rest of the syllabus.",
    learningOutcomes: [
      "Describe the business models of banks and insurers.",
      "Analyse the risks on a bank's balance sheet.",
      "Explain insurance-company liabilities and risks.",
      "Compare mutual funds, pension funds and hedge funds.",
      "Describe the regulatory framework for financial institutions.",
      "Explain moral hazard and adverse selection in these businesses.",
    ],
    syllabusAreas: [
      area("Banks", [
        "Commercial vs investment banking",
        "Balance-sheet and off-balance-sheet risk",
        "Deposit insurance and moral hazard",
      ], "Markets ~30%"),
      area("Insurers & pensions", [
        "Life and P&C insurance liabilities",
        "Adverse selection and moral hazard",
        "Defined-benefit vs defined-contribution",
      ]),
      area("Funds", [
        "Mutual funds and ETFs",
        "Hedge-fund structures and fees",
        "Regulation and disclosure",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m6-l1",
        "Banking business models and risks",
        50,
        [
          "Distinguish commercial and investment banking.",
          "Identify balance-sheet and off-balance-sheet risks.",
        ],
        [
          "Banks earn from net interest margin and fees.",
          "Maturity transformation creates liquidity and rate risk.",
          "Off-balance-sheet items carry contingent exposure.",
        ],
        [
          "How does maturity transformation create risk?",
          "What are examples of off-balance-sheet exposure?",
        ],
        "A bank funding 10-year mortgages with overnight deposits earns a positive spread but bears interest-rate and funding-liquidity risk if short rates rise."
      ),
      lesson(
        "frm-p1-m6-l2",
        "Deposit insurance and moral hazard",
        40,
        [
          "Explain deposit insurance and its rationale.",
          "Analyse the moral hazard it creates.",
        ],
        [
          "Deposit insurance prevents runs but weakens depositor discipline.",
          "Moral hazard encourages banks to take more risk.",
          "Capital requirements counteract the incentive.",
        ],
        [
          "How does deposit insurance create moral hazard?",
          "What offsets that incentive?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m6-l3",
        "Insurance companies and pensions",
        50,
        [
          "Contrast life and P&C insurer liabilities.",
          "Compare DB and DC pension structures.",
        ],
        [
          "Life liabilities are long and predictable; P&C shorter and lumpier.",
          "Adverse selection and moral hazard affect underwriting.",
          "DB plans bear investment and longevity risk.",
        ],
        [
          "How do life and P&C liability profiles differ?",
          "How does adverse selection affect insurers?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m6-l4",
        "Mutual funds, ETFs and pension funds",
        40,
        [
          "Describe mutual-fund and ETF structures.",
          "Explain pension-fund investment objectives.",
        ],
        [
          "Mutual funds pool capital under a stated mandate.",
          "ETFs trade intraday with creation/redemption mechanics.",
          "Pension funds invest to meet long-horizon liabilities.",
        ],
        [
          "How does the ETF creation/redemption process work?",
          "What drives a pension fund's asset allocation?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m6-l5",
        "Hedge funds and their structures",
        45,
        [
          "Describe hedge-fund structures and fees.",
          "Explain hedge-fund strategies at a high level.",
        ],
        [
          "The '2 and 20' fee model aligns and rewards managers.",
          "Lock-ups and gates constrain investor liquidity.",
          "Strategies range from equity long-short to global macro.",
        ],
        [
          "What is the purpose of a high-water mark?",
          "Why do hedge funds use lock-ups?",
        ],
        "On a hedge fund earning 12% gross with 2 and 20 fees, management takes 2% and incentive 20% of the 10% net-of-management gain, materially reducing investor return."
      ),
    ],
    frameworksAndFormulas: [
      "Net interest margin = interest income − interest expense (per assets).",
      "Moral hazard rises with insurance/guarantees; capital requirements offset.",
      "Hedge-fund net return ≈ gross − management fee − incentive fee.",
    ],
    commonTraps: [
      "Confusing life and P&C insurer liability characteristics.",
      "Overlooking off-balance-sheet exposures for banks.",
      "Assuming ETFs and mutual funds have identical mechanics.",
    ],
    examTechnique: [
      "Tie each institution to its dominant risk exposure.",
      "Recognise moral-hazard/adverse-selection framing.",
      "Compute hedge-fund fees stepwise.",
    ],
    practicePlan: [
      "Summarise each institution's business model and key risk.",
      "Work through hedge-fund fee calculations.",
      "Contrast DB and DC pension risk-bearing.",
    ],
    furtherReading: [
      "GARP FRM Part I — Financial Markets and Products readings.",
      "Hull, 'Risk Management and Financial Institutions'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m7",
    examId: "frm",
    levelId: "p1",
    title: "Markets — Equities, FX, commodities & fixed income",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Surveys the major cash markets—equities, foreign exchange, commodities and fixed income—their instruments, conventions, pricing and the risks specific to each.",
    whyItMatters:
      "Risk managers must know the products they measure. Market conventions and pricing mechanics for each asset class underpin exposure measurement and hedging.",
    learningOutcomes: [
      "Describe equity instruments and market conventions.",
      "Explain FX quoting, spot and forward mechanics.",
      "Describe commodity markets and pricing dynamics.",
      "Explain fixed-income instruments and conventions.",
      "Identify the primary risks of each asset class.",
      "Relate market conventions to exposure measurement.",
    ],
    syllabusAreas: [
      area("Equities & FX", [
        "Equity instruments and dividends",
        "FX quoting and cross rates",
        "Spot vs forward FX",
      ], "Markets ~30%"),
      area("Commodities", [
        "Commodity market structure",
        "Contango and backwardation",
        "Storage and convenience yield",
      ]),
      area("Fixed income", [
        "Money-market and bond instruments",
        "Day-count and yield conventions",
        "Interest-rate risk basics",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m7-l1",
        "Equity markets and instruments",
        45,
        [
          "Describe common and preferred equity.",
          "Explain dividends, splits and corporate actions.",
        ],
        [
          "Equity holders have residual claims and voting rights.",
          "Dividends and buybacks return capital to shareholders.",
          "Corporate actions adjust share counts and prices.",
        ],
        [
          "How does a stock split affect price and share count?",
          "What distinguishes preferred from common equity?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m7-l2",
        "Foreign exchange markets",
        50,
        [
          "Quote and compute cross rates.",
          "Distinguish spot and forward FX.",
        ],
        [
          "FX quotes specify base and price currencies.",
          "Cross rates chain two quoted rates.",
          "Forwards reflect interest-rate differentials.",
        ],
        [
          "How is a cross rate computed from two quotes?",
          "What determines the forward FX rate?",
        ],
        "With USD/JPY 150 and EUR/USD 1.10, the EUR/JPY cross rate is 1.10 × 150 = 165."
      ),
      lesson(
        "frm-p1-m7-l3",
        "Commodity markets",
        45,
        [
          "Describe commodity market structure.",
          "Explain contango, backwardation and roll yield.",
        ],
        [
          "Storage costs and convenience yield shape the futures curve.",
          "Contango produces negative roll yield for long positions.",
          "Backwardation produces positive roll yield.",
        ],
        [
          "How does contango affect a long futures roll?",
          "What is convenience yield?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m7-l4",
        "Fixed-income instruments and conventions",
        50,
        [
          "Describe money-market and bond instruments.",
          "Apply day-count and yield conventions.",
        ],
        [
          "Day-count conventions affect accrued interest and yields.",
          "Discount instruments quote on a discount basis.",
          "Yields must be compared on a consistent convention.",
        ],
        [
          "Why must yields be adjusted to a common convention?",
          "How does day-count affect accrued interest?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m7-l5",
        "Risks across the asset classes",
        40,
        [
          "Identify the dominant risk of each asset class.",
          "Relate conventions to exposure measurement.",
        ],
        [
          "Equities carry price and dividend risk.",
          "FX carries currency and interest-differential risk.",
          "Fixed income carries interest-rate and credit risk.",
        ],
        [
          "What is the dominant risk in an FX position?",
          "How do conventions affect measured exposure?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Cross rate = quote1 × quote2 (chaining consistent currencies).",
      "Forward FX ≈ spot × (1 + r_price)/(1 + r_base).",
      "Commodity roll yield: positive in backwardation, negative in contango.",
    ],
    commonTraps: [
      "Reversing base/price currency in FX quotes.",
      "Ignoring day-count conventions when comparing yields.",
      "Confusing contango and backwardation.",
    ],
    examTechnique: [
      "Track base vs price currency throughout FX questions.",
      "State the day-count/convention assumed.",
      "Link each instrument to its primary risk.",
    ],
    practicePlan: [
      "Practise cross-rate and forward-FX computations.",
      "Draw contango/backwardation curves.",
      "Compare yields across day-count conventions.",
    ],
    furtherReading: [
      "GARP FRM Part I — Financial Markets and Products readings.",
      "Hull, 'Options, Futures, and Other Derivatives'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m8",
    examId: "frm",
    levelId: "p1",
    title: "Markets — Forwards, futures, swaps & options",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Covers derivative instruments—forwards, futures, swaps and options—their mechanics, no-arbitrage pricing, payoff profiles and use in hedging market risk.",
    whyItMatters:
      "Derivatives are the primary tools for transferring and hedging risk. Their pricing and payoff behaviour are core to both market-risk measurement and the valuation module.",
    learningOutcomes: [
      "Describe forward, futures, swap and option contracts.",
      "Price forwards and futures by no-arbitrage.",
      "Explain the mechanics of margining and settlement.",
      "Value interest-rate and currency swaps.",
      "Compute option payoffs and apply put-call parity.",
      "Construct basic hedges with derivatives.",
    ],
    syllabusAreas: [
      area("Forwards & futures", [
        "Cost-of-carry pricing",
        "Margining and mark-to-market",
        "Hedging with futures",
      ], "Markets ~30%"),
      area("Swaps", [
        "Interest-rate swap mechanics",
        "Currency and other swaps",
        "Swap valuation",
      ]),
      area("Options", [
        "Payoffs and moneyness",
        "Put-call parity",
        "Basic option strategies",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m8-l1",
        "Forwards and futures pricing",
        55,
        [
          "Price a forward using cost-of-carry.",
          "Explain futures margining and settlement.",
        ],
        [
          "Forward price compounds spot at the risk-free rate net of carry.",
          "Futures are marked to market daily against margin.",
          "No-arbitrage forces convergence at expiration.",
        ],
        [
          "How do carry costs and income affect the forward price?",
          "Why do futures require daily margining?",
        ],
        "A non-dividend stock at $100 with a 4% risk-free rate has a 1-year forward price of $104 by no-arbitrage cost-of-carry."
      ),
      lesson(
        "frm-p1-m8-l2",
        "Hedging with futures",
        50,
        [
          "Compute the minimum-variance hedge ratio.",
          "Explain basis risk.",
        ],
        [
          "The hedge ratio scales the futures position to the exposure.",
          "Basis risk arises when the hedge imperfectly matches the exposure.",
          "Cross-hedging uses a related but non-identical instrument.",
        ],
        [
          "What is the minimum-variance hedge ratio?",
          "Where does basis risk come from?",
        ],
        "Hedging a $10m equity position with index futures uses a hedge ratio of beta × (portfolio value/futures value) to neutralise systematic risk."
      ),
      lesson(
        "frm-p1-m8-l3",
        "Interest-rate and currency swaps",
        50,
        [
          "Describe swap mechanics.",
          "Value a swap as a portfolio of bonds.",
        ],
        [
          "A plain-vanilla swap exchanges fixed for floating payments.",
          "A payer swap equals long floating and short fixed bonds.",
          "The initial fixed rate makes the swap value zero.",
        ],
        [
          "How is a swap valued as bond positions?",
          "Why is a new swap worth zero at inception?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m8-l4",
        "Option payoffs and put-call parity",
        50,
        [
          "Compute call and put payoffs.",
          "Apply put-call parity.",
        ],
        [
          "Put-call parity: c + PV(X) = p + S.",
          "Long options have asymmetric, limited-loss payoffs.",
          "Parity violations imply arbitrage.",
        ],
        [
          "How is put-call parity used to build synthetics?",
          "What is the maximum loss on a long call?",
        ],
        "With S = 50, X = 50, r = 4%, T = 1 and c = 5, parity gives p = 5 + 48.08 − 50 = 3.08."
      ),
      lesson(
        "frm-p1-m8-l5",
        "Basic option strategies",
        45,
        [
          "Construct covered calls, protective puts and spreads.",
          "Analyse payoff and breakeven.",
        ],
        [
          "Covered calls generate income but cap upside.",
          "Protective puts insure against downside.",
          "Spreads limit both cost and payoff.",
        ],
        [
          "What is the breakeven of a protective put?",
          "How does a bull spread limit risk and reward?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Forward price F0 = S0(1 + r)^T − FV(income) + FV(cost).",
      "Minimum-variance hedge ratio = ρ × (σ_spot/σ_futures).",
      "Put-call parity: c0 + X/(1 + r)^T = p0 + S0.",
      "Swap fixed rate sets fixed-leg PV equal to floating-leg PV.",
    ],
    commonTraps: [
      "Omitting income/carry from forward pricing.",
      "Ignoring basis risk when hedging.",
      "Mixing up the payer vs receiver swap bond decomposition.",
    ],
    examTechnique: [
      "Write the cost-of-carry formula and adjust for carry.",
      "Decompose swaps into bond positions.",
      "Draw payoff diagrams for option strategies.",
    ],
    practicePlan: [
      "Price forwards with and without income.",
      "Compute hedge ratios and residual basis risk.",
      "Solve put-call parity for each unknown.",
    ],
    furtherReading: [
      "GARP FRM Part I — Financial Markets and Products readings.",
      "Hull, 'Options, Futures, and Other Derivatives'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m9",
    examId: "frm",
    levelId: "p1",
    title: "Markets — Mortgages, securitization & credit derivatives",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Covers mortgages and mortgage-backed securities, the securitisation process, tranching and structured products, and credit derivatives including credit default swaps.",
    whyItMatters:
      "Securitisation and credit derivatives were central to the global financial crisis. Understanding their cash-flow mechanics and risks is essential for both market and credit risk.",
    learningOutcomes: [
      "Describe mortgage cash flows and prepayment risk.",
      "Explain the securitisation process and its motivations.",
      "Analyse tranching and the waterfall of cash flows.",
      "Describe MBS, ABS and CDO structures.",
      "Explain credit default swaps and their uses.",
      "Assess the risks introduced by structured products.",
    ],
    syllabusAreas: [
      area("Mortgages & MBS", [
        "Mortgage cash flows and prepayment",
        "Pass-throughs and CMOs",
        "Prepayment and extension risk",
      ], "Markets ~30%"),
      area("Securitisation", [
        "The securitisation process",
        "Tranching and the waterfall",
        "ABS and CDO structures",
      ]),
      area("Credit derivatives", [
        "Single-name CDS",
        "Index and basket products",
        "Counterparty considerations",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m9-l1",
        "Mortgages and prepayment risk",
        50,
        [
          "Describe mortgage cash flows.",
          "Explain prepayment and extension risk.",
        ],
        [
          "Mortgages amortise principal and interest over time.",
          "Prepayments accelerate when rates fall.",
          "Extension risk arises when prepayments slow as rates rise.",
        ],
        [
          "Why does prepayment hurt MBS investors when rates fall?",
          "What is extension risk?",
        ],
        "When rates fall, homeowners refinance, returning principal to MBS holders who must reinvest at lower yields—negative convexity in action."
      ),
      lesson(
        "frm-p1-m9-l2",
        "The securitisation process",
        45,
        [
          "Explain the steps and motivations of securitisation.",
          "Describe the role of the special-purpose vehicle.",
        ],
        [
          "Securitisation pools assets and issues tradable securities.",
          "An SPV isolates the assets from the originator.",
          "Motivations include funding, capital relief and risk transfer.",
        ],
        [
          "Why is an SPV bankruptcy-remote?",
          "What motivates originators to securitise?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m9-l3",
        "Tranching and the cash-flow waterfall",
        50,
        [
          "Explain tranching and subordination.",
          "Trace cash flows through the waterfall.",
        ],
        [
          "Senior tranches are protected by subordinated tranches.",
          "Losses hit the equity tranche first.",
          "Credit enhancement raises senior-tranche ratings.",
        ],
        [
          "How does subordination protect senior tranches?",
          "Which tranche absorbs the first losses?",
        ],
        "In a structure with 80% senior, 15% mezzanine and 5% equity, the first 5% of pool losses wipe out equity before senior tranches are touched."
      ),
      lesson(
        "frm-p1-m9-l4",
        "ABS, CDOs and structured products",
        45,
        [
          "Describe ABS and CDO structures.",
          "Explain the risks of resecuritisation.",
        ],
        [
          "ABS securitise non-mortgage assets like auto loans.",
          "CDOs pool debt and tranche it by seniority.",
          "Resecuritisation (CDO-squared) concentrates correlation risk.",
        ],
        [
          "How does correlation affect tranche risk?",
          "Why is a CDO-squared especially risky?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m9-l5",
        "Credit default swaps",
        45,
        [
          "Describe single-name and index CDS.",
          "Explain CDS pricing and uses.",
        ],
        [
          "A CDS transfers credit risk for a periodic premium.",
          "The spread reflects the market price of default protection.",
          "CDS can hedge or take on credit exposure synthetically.",
        ],
        [
          "What does a widening CDS spread signal?",
          "How can CDS create synthetic credit exposure?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Senior tranche loss buffer = subordinated tranches below it.",
      "Prepayment models: CPR/SMM and PSA benchmark.",
      "CDS: protection buyer pays spread; seller pays on default.",
      "Negative convexity dominates MBS as rates fall.",
    ],
    commonTraps: [
      "Assuming all tranches share losses equally.",
      "Ignoring correlation's effect on tranche risk.",
      "Confusing prepayment (falling rates) with extension (rising rates) risk.",
    ],
    examTechnique: [
      "Trace losses through the waterfall from equity upward.",
      "Link rate direction to prepayment vs extension risk.",
      "Interpret CDS spreads as credit-risk signals.",
    ],
    practicePlan: [
      "Work a tranche-loss allocation example.",
      "Explain MBS negative convexity in one paragraph.",
      "Diagram a CDS payment structure.",
    ],
    furtherReading: [
      "GARP FRM Part I — Financial Markets and Products readings.",
      "Fabozzi, 'Bond Markets, Analysis, and Strategies'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m10",
    examId: "frm",
    levelId: "p1",
    title: "Valuation — Bond pricing, duration & convexity",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Covers bond pricing from spot and yield curves, yield measures, and interest-rate risk measured through duration, DV01 and convexity—the core toolkit for fixed-income risk.",
    whyItMatters:
      "Interest-rate risk is the most pervasive market risk. Duration and convexity translate rate moves into P&L, feeding directly into VaR and hedging decisions.",
    learningOutcomes: [
      "Price bonds from spot and forward rates.",
      "Compute yield measures and spreads.",
      "Compute Macaulay, modified and effective duration.",
      "Compute DV01 and use it for hedging.",
      "Estimate price changes with duration and convexity.",
      "Explain key-rate and portfolio duration.",
    ],
    syllabusAreas: [
      area("Pricing & yields", [
        "Spot, forward and par rates",
        "Yield measures and spreads",
        "Discount factors",
      ], "Valuation ~30%"),
      area("Duration & DV01", [
        "Macaulay, modified, effective duration",
        "DV01 and dollar duration",
        "Hedging with duration",
      ]),
      area("Convexity", [
        "Convexity and price-yield curvature",
        "Duration-convexity price estimate",
        "Key-rate duration",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m10-l1",
        "Bond pricing and yield measures",
        50,
        [
          "Price a bond from spot rates.",
          "Compute yield to maturity and spreads.",
        ],
        [
          "Each cash flow is discounted at its maturity-matched rate.",
          "YTM assumes reinvestment at the YTM.",
          "Spreads measure yield over a benchmark curve.",
        ],
        [
          "Why can pricing off a single YTM misvalue a bond?",
          "What reinvestment assumption underlies YTM?",
        ],
        "A 2-year 5% bond priced off 1-year spot 3% and 2-year spot 4% is worth 5/1.03 + 105/1.04² = $101.9."
      ),
      lesson(
        "frm-p1-m10-l2",
        "Macaulay and modified duration",
        50,
        [
          "Compute Macaulay and modified duration.",
          "Interpret duration as price sensitivity.",
        ],
        [
          "Macaulay duration is the weighted-average time to cash flows.",
          "Modified duration ≈ percentage price change per 1% yield move.",
          "Duration rises with maturity and falls with coupon.",
        ],
        [
          "How does coupon affect duration?",
          "What does modified duration estimate?",
        ],
        "A bond with modified duration 6 falls approximately 6% for a +1% yield change, before the convexity correction."
      ),
      lesson(
        "frm-p1-m10-l3",
        "DV01 and hedging",
        45,
        [
          "Compute DV01 (dollar value of a basis point).",
          "Hedge interest-rate risk with DV01.",
        ],
        [
          "DV01 is the price change for a one-basis-point yield move.",
          "Hedging equalises DV01 across the position and hedge.",
          "Dollar duration scales duration by price.",
        ],
        [
          "How is a DV01 hedge constructed?",
          "How does DV01 relate to dollar duration?",
        ],
        "To hedge a position with $10,000 DV01 using a bond with $50 DV01 per contract, sell 200 contracts to neutralise the exposure."
      ),
      lesson(
        "frm-p1-m10-l4",
        "Convexity and price estimation",
        50,
        [
          "Compute convexity.",
          "Estimate price change with duration and convexity.",
        ],
        [
          "Convexity corrects the linear duration estimate.",
          "Positive convexity benefits the holder.",
          "The correction matters most for large yield moves.",
        ],
        [
          "Why is convexity beneficial?",
          "When is the convexity adjustment material?",
        ],
        "A bond with modified duration 7 and convexity 90 facing a +1% move changes by −7 × 0.01 + 0.5 × 90 × 0.01² = −6.55%."
      ),
      lesson(
        "frm-p1-m10-l5",
        "Effective and key-rate duration",
        40,
        [
          "Compute effective duration for optioned bonds.",
          "Explain key-rate duration.",
        ],
        [
          "Effective duration uses shifted-curve repricing.",
          "Key-rate durations locate exposure along the curve.",
          "Portfolio duration is the value-weighted average.",
        ],
        [
          "When must effective duration be used?",
          "What does key-rate duration reveal?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Bond price = Σ CFt × discount factor_t.",
      "Modified duration = Macaulay duration/(1 + y/k).",
      "%ΔPrice ≈ −ModDur × Δy + 0.5 × Convexity × Δy².",
      "DV01 = ModDur × price × 0.0001.",
    ],
    commonTraps: [
      "Using modified duration for bonds with embedded options.",
      "Dropping the convexity term for large yield moves.",
      "Confusing dollar duration with modified duration.",
    ],
    examTechnique: [
      "Confirm compounding frequency before pricing.",
      "Include convexity for large moves.",
      "Set DV01 hedges by equalising dollar sensitivity.",
    ],
    practicePlan: [
      "Price bonds off a spot curve.",
      "Compute duration, DV01 and convexity for sample bonds.",
      "Build a DV01-neutral hedge.",
    ],
    furtherReading: [
      "GARP FRM Part I — Valuation and Risk Models readings.",
      "Tuckman & Serrat, 'Fixed Income Securities'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m11",
    examId: "frm",
    levelId: "p1",
    title: "Valuation — Option valuation & Greeks",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Covers option valuation via the binomial model and Black-Scholes-Merton, the interpretation and use of the Greeks, and delta hedging for managing option risk.",
    whyItMatters:
      "Options embed nonlinear risk that duration-style measures miss. The Greeks quantify these sensitivities and are essential for hedging derivative books.",
    learningOutcomes: [
      "Value options with the binomial model.",
      "Apply the Black-Scholes-Merton model.",
      "Interpret delta, gamma, vega, theta and rho.",
      "Construct and rebalance a delta hedge.",
      "Explain the effect of volatility and time on option value.",
      "Relate the Greeks to nonlinear risk.",
    ],
    syllabusAreas: [
      area("Valuation models", [
        "Binomial trees and risk-neutral valuation",
        "Black-Scholes-Merton",
        "American vs European options",
      ], "Valuation ~30%"),
      area("The Greeks", [
        "Delta and gamma",
        "Vega, theta and rho",
        "Greek behaviour across moneyness",
      ]),
      area("Hedging", [
        "Delta hedging and rebalancing",
        "Gamma and vega exposure",
        "Hedging costs",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m11-l1",
        "Binomial option valuation",
        50,
        [
          "Value options on a binomial tree.",
          "Apply risk-neutral probabilities.",
        ],
        [
          "Risk-neutral valuation discounts expected payoffs at the risk-free rate.",
          "Backward induction values each node.",
          "American options may be exercised early.",
        ],
        [
          "Why use risk-neutral probabilities?",
          "When is early exercise optimal?",
        ],
        "With up 1.2, down 0.8 and r = 4%, the risk-neutral probability is (1.04 − 0.8)/(1.2 − 0.8) = 0.6, used to value the option's expected payoff."
      ),
      lesson(
        "frm-p1-m11-l2",
        "Black-Scholes-Merton model",
        50,
        [
          "Apply BSM to European options.",
          "Explain the model's assumptions.",
        ],
        [
          "BSM assumes lognormal prices and constant volatility.",
          "Value rises with volatility and time.",
          "Dividends reduce call value and raise put value.",
        ],
        [
          "How does volatility affect option value?",
          "What are BSM's key assumptions?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m11-l3",
        "Delta and gamma",
        50,
        [
          "Interpret and compute delta and gamma.",
          "Explain their behaviour across moneyness.",
        ],
        [
          "Delta measures price sensitivity to the underlying.",
          "Gamma measures how delta changes.",
          "Gamma is largest at-the-money and near expiry.",
        ],
        [
          "Where is gamma largest?",
          "How does delta change for a call as the stock rises?",
        ],
        "A call with delta 0.5 gains about $0.50 per $1 rise in the underlying, but as the stock rises gamma pushes delta toward 1."
      ),
      lesson(
        "frm-p1-m11-l4",
        "Vega, theta and rho",
        45,
        [
          "Interpret vega, theta and rho.",
          "Relate them to volatility, time and rates.",
        ],
        [
          "Vega measures sensitivity to volatility.",
          "Theta measures time decay.",
          "Rho measures sensitivity to interest rates.",
        ],
        [
          "Why does long-option theta hurt the holder?",
          "Which Greek matters most for a volatility view?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m11-l5",
        "Delta hedging",
        45,
        [
          "Construct and rebalance a delta hedge.",
          "Explain the cost of dynamic hedging.",
        ],
        [
          "Delta hedging offsets first-order price risk.",
          "Rebalancing is needed as delta changes (gamma).",
          "Transaction costs and gaps make hedging imperfect.",
        ],
        [
          "Why must a delta hedge be rebalanced?",
          "How does gamma affect hedging cost?",
        ],
        "A trader short 100 calls with delta 0.5 buys 50 shares to hedge, then buys more as the stock rises—rebalancing that costs money in a rising, volatile market."
      ),
    ],
    frameworksAndFormulas: [
      "Risk-neutral prob π = [(1 + r) − d]/(u − d).",
      "BSM call = S·N(d1) − X·e^(−rT)·N(d2).",
      "Delta ≈ N(d1) for a call; gamma peaks at-the-money.",
      "Portfolio delta = Σ position deltas.",
    ],
    commonTraps: [
      "Assuming delta is constant (ignoring gamma).",
      "Forgetting to check early exercise for American options.",
      "Confusing vega (volatility) with theta (time).",
    ],
    examTechnique: [
      "Compute the risk-neutral probability first on trees.",
      "Reason about Greek signs qualitatively when values aren't given.",
      "Track how delta evolves when the underlying moves.",
    ],
    practicePlan: [
      "Value one- and two-period binomial options.",
      "Practise Greek-sign reasoning for combined books.",
      "Simulate a delta-hedge rebalancing sequence.",
    ],
    furtherReading: [
      "GARP FRM Part I — Valuation and Risk Models readings.",
      "Hull, 'Options, Futures, and Other Derivatives'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m12",
    examId: "frm",
    levelId: "p1",
    title: "Valuation — VaR, expected shortfall & risk aggregation",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Introduces value at risk (VaR) and expected shortfall (ES), their estimation methods, coherent risk measures, and the aggregation of risk across positions and portfolios.",
    whyItMatters:
      "VaR and ES are the headline risk metrics used for limits, capital and reporting. Understanding their assumptions and limitations is central to the FRM designation.",
    learningOutcomes: [
      "Define VaR and expected shortfall.",
      "Estimate VaR via parametric, historical and Monte Carlo methods.",
      "Explain coherent risk measures and subadditivity.",
      "Aggregate risk across positions.",
      "Explain the limitations of VaR.",
      "Scale VaR across confidence levels and horizons.",
    ],
    syllabusAreas: [
      area("VaR & ES", [
        "Definitions and interpretation",
        "Expected shortfall",
        "Coherent risk measures",
      ], "Valuation ~30%"),
      area("Estimation methods", [
        "Parametric (delta-normal)",
        "Historical simulation",
        "Monte Carlo simulation",
      ]),
      area("Aggregation & scaling", [
        "Diversification and correlation",
        "Time and confidence scaling",
        "Component and marginal VaR",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m12-l1",
        "Defining VaR and expected shortfall",
        50,
        [
          "Define VaR and ES precisely.",
          "Interpret VaR at a confidence level and horizon.",
        ],
        [
          "VaR is a loss threshold not exceeded with a given probability.",
          "ES is the average loss beyond the VaR threshold.",
          "VaR says nothing about the size of tail losses.",
        ],
        [
          "How does ES improve on VaR?",
          "What does a 99%/1-day VaR mean?",
        ],
        "A 99% 1-day VaR of $1m means there is a 1% chance of losing more than $1m in a day; ES tells you the average loss on those worst 1% of days."
      ),
      lesson(
        "frm-p1-m12-l2",
        "Parametric VaR",
        50,
        [
          "Compute delta-normal VaR.",
          "Explain its assumptions and weaknesses.",
        ],
        [
          "Parametric VaR assumes normal returns.",
          "VaR = z × σ × value for a given confidence level.",
          "It understates risk when returns have fat tails.",
        ],
        [
          "What z-score corresponds to 99% VaR?",
          "Why does parametric VaR understate tail risk?",
        ],
        "A $10m position with 2% daily volatility has a 99% 1-day parametric VaR of 2.33 × 2% × $10m = $466,000."
      ),
      lesson(
        "frm-p1-m12-l3",
        "Historical and Monte Carlo VaR",
        50,
        [
          "Estimate VaR via historical simulation.",
          "Estimate VaR via Monte Carlo.",
        ],
        [
          "Historical simulation uses the empirical return distribution.",
          "Monte Carlo generates scenarios from assumed processes.",
          "Each method trades off assumptions against data needs.",
        ],
        [
          "What assumption does historical simulation avoid?",
          "When is Monte Carlo preferred?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m12-l4",
        "Coherent risk measures and aggregation",
        45,
        [
          "Explain the coherence properties.",
          "Aggregate risk with correlation.",
        ],
        [
          "Coherent measures satisfy subadditivity; VaR can violate it.",
          "ES is coherent.",
          "Diversification reduces aggregate risk when correlations are below one.",
        ],
        [
          "Why can VaR violate subadditivity?",
          "How does correlation affect aggregate VaR?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m12-l5",
        "Scaling VaR across horizons and confidence",
        40,
        [
          "Scale VaR across time and confidence levels.",
          "Explain the square-root-of-time rule and its limits.",
        ],
        [
          "VaR scales with the square root of time under i.i.d. assumptions.",
          "Confidence scaling uses the ratio of z-scores.",
          "The square-root rule fails under autocorrelation.",
        ],
        [
          "How is 1-day VaR scaled to 10-day VaR?",
          "When does the square-root-of-time rule break down?",
        ],
        "A $466,000 1-day VaR scales to roughly $466,000 × √10 = $1.47m over 10 days under the i.i.d. assumption."
      ),
    ],
    frameworksAndFormulas: [
      "Parametric VaR = z × σ × value.",
      "ES = average loss beyond VaR (coherent).",
      "Time scaling: VaR_T = VaR_1 × √T (i.i.d.).",
      "Aggregate VaR reflects correlations across positions.",
    ],
    commonTraps: [
      "Treating VaR as a maximum possible loss.",
      "Assuming normality when returns are fat-tailed.",
      "Applying the square-root rule under autocorrelation.",
    ],
    examTechnique: [
      "Use the correct z-score for the confidence level.",
      "State the method's assumptions when computing VaR.",
      "Remember ES is coherent while VaR may not be.",
    ],
    practicePlan: [
      "Compute parametric VaR and ES for sample positions.",
      "Scale VaR across horizons and confidence levels.",
      "Compare the three estimation methods on assumptions.",
    ],
    furtherReading: [
      "GARP FRM Part I — Valuation and Risk Models readings.",
      "Jorion, 'Value at Risk'.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m13",
    examId: "frm",
    levelId: "p1",
    title: "Valuation — Mapping, backtesting & model risk",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers position mapping for VaR, backtesting VaR models, stress testing, and the sources and governance of model risk.",
    whyItMatters:
      "A risk model is only useful if it is validated. Mapping, backtesting and model-risk governance ensure that reported risk numbers can be trusted for capital and limits.",
    learningOutcomes: [
      "Map positions to risk factors for VaR.",
      "Backtest VaR models and interpret exceptions.",
      "Apply the Basel traffic-light backtesting framework.",
      "Design stress tests and scenario analysis.",
      "Identify sources of model risk.",
      "Explain model-risk governance and validation.",
    ],
    syllabusAreas: [
      area("Mapping", [
        "Cash-flow, duration and factor mapping",
        "Mapping options and nonlinear positions",
        "Aggregation of mapped exposures",
      ], "Valuation ~30%"),
      area("Backtesting & stress", [
        "Backtesting VaR and exceptions",
        "Basel traffic-light zones",
        "Stress testing and scenarios",
      ]),
      area("Model risk", [
        "Sources of model risk",
        "Validation and governance",
        "Model limitations",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m13-l1",
        "Mapping positions to risk factors",
        45,
        [
          "Map fixed-income and equity positions to risk factors.",
          "Map nonlinear positions approximately.",
        ],
        [
          "Mapping reduces many positions to a few risk factors.",
          "Cash-flow mapping assigns bond cash flows to standard vertices.",
          "Options are mapped using delta (and gamma) approximations.",
        ],
        [
          "Why map positions to a small set of risk factors?",
          "How are options mapped for VaR?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m13-l2",
        "Backtesting VaR",
        50,
        [
          "Backtest a VaR model against realised losses.",
          "Interpret the number of exceptions.",
        ],
        [
          "An exception occurs when the loss exceeds VaR.",
          "The expected number of exceptions equals (1 − confidence) × days.",
          "Too many exceptions signal an inaccurate model.",
        ],
        [
          "How many exceptions are expected for a 99% VaR over 250 days?",
          "What does a cluster of exceptions suggest?",
        ],
        "A 99% VaR over 250 trading days expects about 2.5 exceptions; observing 10 strongly suggests the model understates risk."
      ),
      lesson(
        "frm-p1-m13-l3",
        "The Basel traffic-light framework",
        40,
        [
          "Apply the Basel backtesting zones.",
          "Explain the capital-multiplier consequences.",
        ],
        [
          "Green, yellow and red zones classify exception counts.",
          "More exceptions raise the capital multiplier.",
          "The framework penalises unreliable models.",
        ],
        [
          "What triggers the red zone?",
          "How do exceptions affect required capital?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m13-l4",
        "Stress testing and scenario analysis",
        45,
        [
          "Design historical and hypothetical stress scenarios.",
          "Complement VaR with stress testing.",
        ],
        [
          "Stress tests probe losses beyond the VaR horizon.",
          "Scenarios can be historical, hypothetical or reverse.",
          "Stress testing captures tail and non-normal risks.",
        ],
        [
          "Why does stress testing complement VaR?",
          "What is reverse stress testing?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m13-l5",
        "Model risk and validation",
        40,
        [
          "Identify sources of model risk.",
          "Describe model-risk governance and validation.",
        ],
        [
          "Model risk arises from wrong assumptions, data or implementation.",
          "Independent validation challenges models.",
          "Governance assigns ownership and controls model use.",
        ],
        [
          "What are common sources of model risk?",
          "Why must validation be independent?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Expected exceptions = (1 − confidence) × number of days.",
      "Cash-flow mapping assigns flows to standard maturity vertices.",
      "Basel zones: green (accept), yellow (caution), red (reject).",
      "Model risk sources: assumptions, data, implementation, use.",
    ],
    commonTraps: [
      "Confusing the expected exception count with the confidence level.",
      "Treating stress testing as redundant with VaR.",
      "Ignoring the independence requirement in model validation.",
    ],
    examTechnique: [
      "Compute expected exceptions before judging a backtest.",
      "Map the exception count to the correct Basel zone.",
      "Frame model-risk answers around governance and validation.",
    ],
    practicePlan: [
      "Backtest a VaR series and count exceptions.",
      "Classify results into Basel zones.",
      "List model-risk sources for a sample model.",
    ],
    furtherReading: [
      "GARP FRM Part I — Valuation and Risk Models readings.",
      "Basel Committee — backtesting and model-risk guidance.",
    ],
  }),
  courseware({
    moduleId: "frm-p1-m14",
    examId: "frm",
    levelId: "p1",
    title: "Valuation — Credit exposure & counterparty risk basics",
    examFormat: FRM_P1_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Introduces credit risk fundamentals—default probability, loss given default, expected and unexpected loss—and the basics of counterparty credit risk in derivative transactions.",
    whyItMatters:
      "Credit exposure is a major loss driver and the gateway to Part II credit risk. Understanding expected loss and counterparty exposure grounds later CVA and portfolio-credit topics.",
    learningOutcomes: [
      "Define default probability, LGD, EAD and recovery.",
      "Compute expected and unexpected loss.",
      "Explain credit ratings and transition matrices.",
      "Describe counterparty credit exposure profiles.",
      "Explain netting and collateral mitigants.",
      "Introduce credit VaR concepts.",
    ],
    syllabusAreas: [
      area("Credit fundamentals", [
        "PD, LGD, EAD and recovery",
        "Expected and unexpected loss",
        "Ratings and transition matrices",
      ], "Valuation ~30%"),
      area("Counterparty risk", [
        "Current and potential future exposure",
        "Exposure profiles by product",
        "Netting and collateral",
      ]),
      area("Portfolio view", [
        "Credit VaR basics",
        "Default correlation",
        "Concentration risk",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p1-m14-l1",
        "Credit risk fundamentals",
        50,
        [
          "Define PD, LGD, EAD and recovery.",
          "Compute expected loss.",
        ],
        [
          "Expected loss = PD × LGD × EAD.",
          "Recovery rate = 1 − LGD.",
          "Unexpected loss reflects the volatility of losses.",
        ],
        [
          "How is expected loss computed?",
          "How do recovery and LGD relate?",
        ],
        "A $1m exposure with 2% PD and 40% LGD has expected loss = 0.02 × 0.40 × $1m = $8,000."
      ),
      lesson(
        "frm-p1-m14-l2",
        "Ratings and transition matrices",
        45,
        [
          "Interpret credit ratings.",
          "Use transition matrices to estimate migration.",
        ],
        [
          "Ratings summarise creditworthiness.",
          "Transition matrices give probabilities of rating migration.",
          "Downgrades raise spreads and can trigger losses.",
        ],
        [
          "What does a transition matrix show?",
          "How do downgrades affect value?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m14-l3",
        "Counterparty exposure profiles",
        50,
        [
          "Distinguish current and potential future exposure.",
          "Describe exposure profiles by product.",
        ],
        [
          "Current exposure is the mark-to-market if positive.",
          "Potential future exposure projects possible future values.",
          "Swaps and options have different exposure shapes over time.",
        ],
        [
          "How does current exposure differ from potential future exposure?",
          "Why do exposure profiles vary by product?",
        ],
        "An interest-rate swap's expected exposure rises then falls over its life as rate uncertainty grows but remaining cash flows shrink."
      ),
      lesson(
        "frm-p1-m14-l4",
        "Netting and collateral",
        45,
        [
          "Explain netting agreements.",
          "Describe collateral and margin as mitigants.",
        ],
        [
          "Netting offsets exposures across trades with a counterparty.",
          "Collateral reduces net exposure but adds operational risk.",
          "Thresholds and minimum transfer amounts govern collateral calls.",
        ],
        [
          "How does netting reduce counterparty exposure?",
          "What operational risks does collateral introduce?",
        ],
        undefined
      ),
      lesson(
        "frm-p1-m14-l5",
        "Introduction to credit VaR",
        40,
        [
          "Explain credit VaR at the portfolio level.",
          "Describe the role of default correlation.",
        ],
        [
          "Credit VaR measures unexpected credit loss at a confidence level.",
          "Default correlation drives portfolio credit risk.",
          "Concentration increases tail credit loss.",
        ],
        [
          "Why does default correlation matter for portfolio credit risk?",
          "How does concentration affect credit VaR?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Expected loss = PD × LGD × EAD.",
      "Recovery rate = 1 − LGD.",
      "Current exposure = max(mark-to-market, 0).",
      "Net exposure after netting ≤ sum of gross exposures.",
    ],
    commonTraps: [
      "Confusing expected loss with unexpected loss.",
      "Ignoring the time profile of counterparty exposure.",
      "Overlooking default correlation in portfolio credit risk.",
    ],
    examTechnique: [
      "Compute expected loss from PD, LGD and EAD directly.",
      "Distinguish current from potential future exposure.",
      "Note how netting and collateral reduce exposure.",
    ],
    practicePlan: [
      "Work expected-loss calculations.",
      "Sketch swap and option exposure profiles.",
      "Explain how netting changes aggregate exposure.",
    ],
    furtherReading: [
      "GARP FRM Part I — Valuation and Risk Models readings.",
      "Gregory, 'The xVA Challenge' (introductory chapters).",
    ],
  }),

  // ===================================================================
  // PART II
  // ===================================================================
  courseware({
    moduleId: "frm-p2-m1",
    examId: "frm",
    levelId: "p2",
    title: "Market Risk — VaR, ES & parametric/historical/Monte Carlo methods",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Deepens market-risk measurement: advanced VaR and expected shortfall estimation, parametric, historical and Monte Carlo approaches, and extreme-value theory for the tails.",
    whyItMatters:
      "Part II demands rigorous, applied market-risk measurement including tail modelling and the trade-offs among estimation methods that drive regulatory capital.",
    learningOutcomes: [
      "Estimate VaR and ES with all three methods, applied.",
      "Apply age- and volatility-weighted historical simulation.",
      "Apply extreme-value theory to the tails.",
      "Assess coherence and backtesting of ES.",
      "Model non-normal returns for risk.",
      "Compare methods for regulatory use.",
    ],
    syllabusAreas: [
      area("Estimation methods", [
        "Parametric and Cornish-Fisher",
        "Weighted historical simulation",
        "Monte Carlo and filtered simulation",
      ], "Market risk ~20–30%"),
      area("Tail modelling", [
        "Extreme-value theory (POT, block maxima)",
        "Generalised Pareto distribution",
        "Tail-risk estimation",
      ]),
      area("Evaluation", [
        "Backtesting VaR and ES",
        "Coherence properties",
        "Regulatory considerations (FRTB)",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m1-l1",
        "Advanced parametric and simulation VaR",
        55,
        [
          "Apply parametric VaR with non-normal adjustments.",
          "Implement filtered historical simulation.",
        ],
        [
          "Cornish-Fisher adjusts VaR for skew and kurtosis.",
          "Filtered historical simulation scales returns by current volatility.",
          "Each method balances assumptions against responsiveness.",
        ],
        [
          "How does the Cornish-Fisher expansion adjust VaR?",
          "What does filtered historical simulation improve?",
        ],
        "Filtered historical simulation rescales past returns by the ratio of current to historical volatility, making VaR responsive to recent market conditions."
      ),
      lesson(
        "frm-p2-m1-l2",
        "Weighted historical simulation",
        50,
        [
          "Apply age- and volatility-weighted historical simulation.",
          "Explain the benefits over equal weighting.",
        ],
        [
          "Age weighting gives recent observations more influence.",
          "Volatility weighting adjusts for changing regimes.",
          "Weighting reduces ghosting effects of old extreme events.",
        ],
        [
          "Why weight recent observations more heavily?",
          "What is the ghosting effect?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m1-l3",
        "Extreme-value theory",
        55,
        [
          "Apply peaks-over-threshold and block-maxima methods.",
          "Fit the generalised Pareto distribution to tails.",
        ],
        [
          "EVT models the tail rather than the whole distribution.",
          "The GPD describes exceedances over a high threshold.",
          "EVT improves extreme-quantile estimation.",
        ],
        [
          "Why model the tail separately with EVT?",
          "What distribution describes threshold exceedances?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m1-l4",
        "Expected shortfall estimation and coherence",
        45,
        [
          "Estimate ES under each method.",
          "Explain why ES is coherent.",
        ],
        [
          "ES averages losses beyond VaR.",
          "ES satisfies subadditivity; VaR need not.",
          "Basel FRTB moves capital to ES.",
        ],
        [
          "Why did regulators move from VaR to ES?",
          "What coherence property does VaR fail?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m1-l5",
        "Backtesting and method comparison",
        45,
        [
          "Backtest VaR and ES.",
          "Compare methods for regulatory use.",
        ],
        [
          "ES backtesting is harder than VaR backtesting.",
          "Method choice trades off responsiveness and stability.",
          "FRTB prescribes ES at a 97.5% level with liquidity horizons.",
        ],
        [
          "Why is ES harder to backtest than VaR?",
          "What does FRTB specify for market-risk capital?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "ES = E[loss | loss > VaR].",
      "Cornish-Fisher adjusts z for skew and kurtosis.",
      "Filtered HS: scaled return = historical return × (σ_now/σ_then).",
      "FRTB: ES at 97.5% with liquidity-horizon scaling.",
    ],
    commonTraps: [
      "Assuming normality when fitting tails (use EVT).",
      "Treating ES backtesting as identical to VaR backtesting.",
      "Ignoring liquidity horizons under FRTB.",
    ],
    examTechnique: [
      "State each method's assumptions and weaknesses.",
      "Use EVT framing for extreme-quantile questions.",
      "Recall FRTB uses ES at 97.5%.",
    ],
    practicePlan: [
      "Estimate VaR and ES under all three methods.",
      "Apply age/volatility weighting to a dataset.",
      "Summarise EVT and FRTB key points.",
    ],
    furtherReading: [
      "GARP FRM Part II — Market Risk readings.",
      "Dowd, 'Measuring Market Risk'.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m2",
    examId: "frm",
    levelId: "p2",
    title: "Market Risk — Volatility, correlation & nonlinear risk",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Covers volatility modelling (EWMA, GARCH), correlation and copulas, the volatility smile, and the measurement of nonlinear risk in options portfolios.",
    whyItMatters:
      "Volatility and correlation are the key inputs to risk models, and nonlinear (option) risk breaks linear approximations—both are heavily tested in Part II market risk.",
    learningOutcomes: [
      "Model volatility with EWMA and GARCH.",
      "Estimate and interpret correlation and copulas.",
      "Explain the volatility smile and its implications.",
      "Measure nonlinear risk with delta-gamma methods.",
      "Explain correlation breakdown in stress.",
      "Apply implied vs realised volatility concepts.",
    ],
    syllabusAreas: [
      area("Volatility", [
        "EWMA and GARCH models",
        "Implied vs realised volatility",
        "Volatility term structure and smile",
      ], "Market risk ~20–30%"),
      area("Correlation & copulas", [
        "Correlation estimation",
        "Copulas and dependence",
        "Correlation in stress",
      ]),
      area("Nonlinear risk", [
        "Delta-gamma VaR",
        "Full revaluation",
        "Option portfolio risk",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m2-l1",
        "Volatility modelling",
        55,
        [
          "Model volatility with EWMA and GARCH.",
          "Forecast and interpret persistence.",
        ],
        [
          "GARCH captures clustering and mean reversion.",
          "EWMA is a special case without mean reversion.",
          "Persistence α + β governs forecast decay.",
        ],
        [
          "How does GARCH differ from EWMA?",
          "What does high persistence imply for forecasts?",
        ],
        "A GARCH(1,1) with α = 0.08, β = 0.90 has persistence 0.98 and a long-run variance of ω/(1 − 0.98), so shocks decay very slowly."
      ),
      lesson(
        "frm-p2-m2-l2",
        "Implied volatility and the smile",
        50,
        [
          "Distinguish implied and realised volatility.",
          "Explain the volatility smile and skew.",
        ],
        [
          "Implied volatility is backed out from option prices.",
          "The smile reflects departures from lognormality.",
          "Equity index options typically show a skew.",
        ],
        [
          "Why does an equity index show a volatility skew?",
          "How does implied differ from realised volatility?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m2-l3",
        "Correlation and copulas",
        50,
        [
          "Estimate correlation and explain its limits.",
          "Use copulas to model dependence.",
        ],
        [
          "Linear correlation misses tail dependence.",
          "Copulas separate marginals from the dependence structure.",
          "The Gaussian copula understates joint tail risk.",
        ],
        [
          "Why can copulas capture dependence that correlation misses?",
          "What was the weakness of the Gaussian copula in the crisis?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m2-l4",
        "Correlation breakdown in stress",
        40,
        [
          "Explain how correlations change in stress.",
          "Assess the impact on diversification.",
        ],
        [
          "Correlations tend toward one in crises.",
          "Diversification benefits erode when most needed.",
          "Stress testing should assume correlation breakdown.",
        ],
        [
          "Why do correlations rise in a crisis?",
          "How does this affect portfolio risk?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m2-l5",
        "Nonlinear risk measurement",
        50,
        [
          "Apply delta-gamma VaR.",
          "Compare with full revaluation.",
        ],
        [
          "Delta-gamma approximates option P&L for moderate moves.",
          "Full revaluation reprices under each scenario.",
          "Gamma and vega capture nonlinearity and volatility risk.",
        ],
        [
          "When does delta-gamma break down?",
          "Why use full revaluation for large moves?",
        ],
        "For a large market move, a delta-only VaR understates an option book's risk; adding the gamma term captures the convexity of the payoff."
      ),
    ],
    frameworksAndFormulas: [
      "GARCH(1,1) persistence = α + β; long-run variance = ω/(1 − α − β).",
      "Delta-gamma P&L ≈ δΔS + 0.5γ(ΔS)².",
      "Copula: joint distribution = copula(marginals).",
      "Correlations → 1 in stress; diversification weakens.",
    ],
    commonTraps: [
      "Relying on linear correlation for tail dependence.",
      "Using delta-only VaR for large moves.",
      "Assuming diversification holds in a crisis.",
    ],
    examTechnique: [
      "Compute GARCH persistence and long-run variance.",
      "Add gamma when moves are large.",
      "Flag correlation breakdown in stress questions.",
    ],
    practicePlan: [
      "Forecast volatility with GARCH.",
      "Compute delta-gamma VaR for an option position.",
      "Explain copula tail dependence.",
    ],
    furtherReading: [
      "GARP FRM Part II — Market Risk readings.",
      "Meissner, 'Correlation Risk Modeling and Management'.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m3",
    examId: "frm",
    levelId: "p2",
    title: "Market Risk — Risk capital & model validation",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Covers market-risk regulatory capital (Basel, FRTB), the standardised and internal-models approaches, backtesting and P&L attribution, and the validation of market-risk models.",
    whyItMatters:
      "Regulatory capital shapes bank behaviour and is a core competency for risk professionals; FRTB is a major focus of the current syllabus.",
    learningOutcomes: [
      "Explain Basel market-risk capital frameworks.",
      "Describe the FRTB standardised and internal-models approaches.",
      "Apply backtesting and P&L attribution tests.",
      "Explain the treatment of non-modellable risk factors.",
      "Validate market-risk models.",
      "Relate capital to risk measurement choices.",
    ],
    syllabusAreas: [
      area("Regulatory frameworks", [
        "Basel market-risk capital",
        "FRTB standardised approach",
        "FRTB internal-models approach",
      ], "Market risk ~20–30%"),
      area("Model approval", [
        "Backtesting requirements",
        "P&L attribution test",
        "Non-modellable risk factors",
      ]),
      area("Validation", [
        "Independent validation",
        "Benchmarking",
        "Ongoing monitoring",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m3-l1",
        "Basel market-risk capital",
        50,
        [
          "Explain the evolution of Basel market-risk capital.",
          "Relate capital to VaR and ES.",
        ],
        [
          "Basel moved from VaR-based to ES-based capital.",
          "Capital multipliers penalise backtesting failures.",
          "Stressed measures capture adverse periods.",
        ],
        [
          "Why did Basel adopt stressed measures?",
          "How do backtesting failures affect capital?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m3-l2",
        "FRTB standardised approach",
        50,
        [
          "Describe the sensitivities-based method.",
          "Explain the default-risk and residual add-ons.",
        ],
        [
          "The standardised approach uses prescribed risk weights and sensitivities.",
          "Delta, vega and curvature charges are aggregated.",
          "A default-risk charge and residual add-on supplement.",
        ],
        [
          "What sensitivities drive the standardised charge?",
          "What does the curvature charge capture?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m3-l3",
        "FRTB internal-models approach",
        50,
        [
          "Describe the ES-based internal-models approach.",
          "Explain liquidity horizons and NMRFs.",
        ],
        [
          "The IMA uses ES at 97.5% with liquidity horizons.",
          "Non-modellable risk factors carry a separate charge.",
          "Desk-level approval depends on tests.",
        ],
        [
          "How do liquidity horizons affect the ES calculation?",
          "How are non-modellable risk factors treated?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m3-l4",
        "Backtesting and P&L attribution",
        45,
        [
          "Apply backtesting for model approval.",
          "Explain the P&L attribution test.",
        ],
        [
          "Backtesting compares VaR/ES to realised losses.",
          "P&L attribution compares risk-model P&L to actual P&L.",
          "Failing tests can revoke internal-model approval.",
        ],
        [
          "What does the P&L attribution test check?",
          "What happens if a desk fails the tests?",
        ],
        "A trading desk whose risk-model P&L diverges too much from front-office P&L fails the attribution test and reverts to the more punitive standardised approach."
      ),
      lesson(
        "frm-p2-m3-l5",
        "Model validation",
        40,
        [
          "Describe independent model validation.",
          "Explain benchmarking and monitoring.",
        ],
        [
          "Validation independently challenges model assumptions.",
          "Benchmarking compares against alternative models.",
          "Ongoing monitoring detects performance decay.",
        ],
        [
          "Why must validation be independent?",
          "What does benchmarking add to validation?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "FRTB IMA: ES at 97.5% with liquidity-horizon scaling.",
      "Standardised: delta + vega + curvature + default + residual charges.",
      "Capital multiplier increases with backtesting exceptions.",
      "P&L attribution compares risk-theoretical and actual P&L.",
    ],
    commonTraps: [
      "Confusing the standardised and internal-models approaches.",
      "Ignoring liquidity horizons in the ES calculation.",
      "Overlooking non-modellable risk factors.",
    ],
    examTechnique: [
      "Separate standardised (sensitivities) from IMA (ES) framing.",
      "Recall FRTB uses ES at 97.5%.",
      "Link test failures to capital consequences.",
    ],
    practicePlan: [
      "Summarise FRTB standardised vs IMA in a table.",
      "Explain the P&L attribution test in your own words.",
      "Review the treatment of NMRFs.",
    ],
    furtherReading: [
      "GARP FRM Part II — Market Risk readings.",
      "Basel Committee — Minimum capital requirements for market risk (FRTB).",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m4",
    examId: "frm",
    levelId: "p2",
    title: "Credit Risk — Default risk, ratings & credit scoring",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Covers default probability estimation, structural and reduced-form models, credit ratings and transition matrices, and credit-scoring approaches for individual and corporate borrowers.",
    whyItMatters:
      "Estimating default risk accurately is the foundation of credit pricing, provisioning and capital; the models here recur throughout the credit-risk section.",
    learningOutcomes: [
      "Estimate default probabilities from structural models.",
      "Apply reduced-form (hazard-rate) models.",
      "Interpret ratings and transition matrices.",
      "Build and evaluate credit-scoring models.",
      "Distinguish real-world and risk-neutral PDs.",
      "Explain recovery-rate modelling.",
    ],
    syllabusAreas: [
      area("Structural models", [
        "Merton model",
        "Distance to default",
        "KMV-type extensions",
      ], "Credit risk ~25%"),
      area("Reduced-form & ratings", [
        "Hazard-rate models",
        "Ratings and transition matrices",
        "Risk-neutral vs real-world PD",
      ]),
      area("Credit scoring", [
        "Scoring models and discriminants",
        "Model performance (ROC, KS)",
        "Recovery modelling",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m4-l1",
        "The Merton structural model",
        55,
        [
          "Apply the Merton model to estimate default risk.",
          "Compute distance to default.",
        ],
        [
          "Equity is a call option on the firm's assets.",
          "Default occurs when asset value falls below debt.",
          "Distance to default measures the buffer in volatility units.",
        ],
        [
          "Why is equity a call option on firm assets?",
          "What does distance to default measure?",
        ],
        "In the Merton model, a firm with assets $120m, debt $100m and 20% asset volatility has a distance to default reflecting how many standard deviations assets must fall to hit $100m."
      ),
      lesson(
        "frm-p2-m4-l2",
        "Reduced-form models",
        50,
        [
          "Apply hazard-rate models.",
          "Extract default intensity from spreads.",
        ],
        [
          "Reduced-form models treat default as a random arrival.",
          "The hazard rate is the instantaneous default intensity.",
          "Credit spreads imply risk-neutral default intensities.",
        ],
        [
          "How is default intensity extracted from spreads?",
          "How do structural and reduced-form models differ?",
        ],
        "A 200 bp spread with 40% recovery implies an approximate risk-neutral default intensity of spread/(1 − recovery) = 0.02/0.60 ≈ 3.3%."
      ),
      lesson(
        "frm-p2-m4-l3",
        "Ratings and transition matrices",
        45,
        [
          "Interpret ratings and transition matrices.",
          "Estimate cumulative default probabilities.",
        ],
        [
          "Transition matrices give rating-migration probabilities.",
          "Cumulative PDs build up over multiple periods.",
          "Ratings are through-the-cycle, not point-in-time.",
        ],
        [
          "How are multi-year default probabilities computed?",
          "What is the difference between point-in-time and through-the-cycle?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m4-l4",
        "Credit scoring and model performance",
        50,
        [
          "Build credit-scoring models.",
          "Evaluate discrimination with ROC and KS.",
        ],
        [
          "Scoring models rank borrowers by default likelihood.",
          "The ROC/AUC measures discriminatory power.",
          "The KS statistic measures separation of good and bad.",
        ],
        [
          "What does the AUC measure in a scoring model?",
          "How is the KS statistic interpreted?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m4-l5",
        "Risk-neutral PD and recovery",
        40,
        [
          "Distinguish risk-neutral and real-world PDs.",
          "Explain recovery-rate modelling.",
        ],
        [
          "Risk-neutral PDs embed a risk premium and exceed real-world PDs.",
          "Recovery depends on seniority and collateral.",
          "Recovery and PD may be correlated in downturns.",
        ],
        [
          "Why do risk-neutral PDs exceed real-world PDs?",
          "What drives recovery rates?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Merton: equity = call on assets with strike = debt.",
      "Distance to default = (asset value − default point)/(asset vol × asset value).",
      "Risk-neutral intensity ≈ spread/(1 − recovery).",
      "Expected loss = PD × LGD × EAD.",
    ],
    commonTraps: [
      "Confusing risk-neutral and real-world default probabilities.",
      "Ignoring PD-recovery correlation in downturns.",
      "Treating ratings as point-in-time measures.",
    ],
    examTechnique: [
      "Identify whether a PD is risk-neutral or real-world.",
      "Use the spread/(1 − recovery) approximation for intensity.",
      "Interpret ROC/KS for scoring-model quality.",
    ],
    practicePlan: [
      "Compute distance to default in the Merton model.",
      "Extract default intensity from a spread.",
      "Build cumulative PDs from a transition matrix.",
    ],
    furtherReading: [
      "GARP FRM Part II — Credit Risk readings.",
      "Malz, 'Financial Risk Management' (credit chapters).",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m5",
    examId: "frm",
    levelId: "p2",
    title: "Credit Risk — Credit VaR, portfolio credit risk & securitization",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 30,
    overview:
      "Covers portfolio credit risk, default correlation, credit VaR models (CreditMetrics, credit-portfolio approaches), and the credit risk of securitised and structured products.",
    whyItMatters:
      "Credit losses cluster in downturns due to correlation; measuring portfolio credit risk and structured-product risk is essential for capital and was central to the financial crisis.",
    learningOutcomes: [
      "Explain default correlation and its drivers.",
      "Compute portfolio credit risk and credit VaR.",
      "Apply the single-factor (Vasicek/ASRF) model.",
      "Analyse tranche risk in securitisations.",
      "Explain correlation's effect on tranches.",
      "Relate portfolio credit risk to capital.",
    ],
    syllabusAreas: [
      area("Portfolio credit risk", [
        "Default correlation",
        "Credit VaR and unexpected loss",
        "CreditMetrics-style models",
      ], "Credit risk ~25%"),
      area("Factor models", [
        "Single-factor (ASRF) model",
        "Asset correlation",
        "Basel IRB linkage",
      ]),
      area("Securitisation credit risk", [
        "Tranche loss and attachment points",
        "Correlation and tranche sensitivity",
        "Rating and structure",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m5-l1",
        "Default correlation and portfolio loss",
        55,
        [
          "Explain drivers of default correlation.",
          "Show how correlation shapes the loss distribution.",
        ],
        [
          "Correlated defaults fatten the tail of portfolio losses.",
          "Common factors (macro) drive correlation.",
          "Higher correlation raises unexpected loss.",
        ],
        [
          "How does correlation affect the portfolio loss distribution?",
          "What drives default correlation?",
        ],
        "Two loans each with 5% PD have a joint default probability well above 0.25% when correlated, fattening the tail relative to independence."
      ),
      lesson(
        "frm-p2-m5-l2",
        "Credit VaR",
        50,
        [
          "Compute credit VaR and unexpected loss.",
          "Distinguish expected and unexpected credit loss.",
        ],
        [
          "Credit VaR is an extreme quantile of the loss distribution.",
          "Expected loss is provisioned; unexpected loss needs capital.",
          "Concentration increases credit VaR.",
        ],
        [
          "Why is unexpected loss the basis for capital?",
          "How does concentration affect credit VaR?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m5-l3",
        "The single-factor (ASRF) model",
        50,
        [
          "Apply the asymptotic single-risk-factor model.",
          "Relate it to the Basel IRB formula.",
        ],
        [
          "The ASRF model underlies Basel IRB capital.",
          "A single systematic factor drives correlated defaults.",
          "Capital depends on PD, LGD and asset correlation.",
        ],
        [
          "How does the ASRF model link to Basel capital?",
          "What role does asset correlation play?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m5-l4",
        "Securitisation tranche risk",
        50,
        [
          "Analyse tranche losses and attachment points.",
          "Explain credit enhancement.",
        ],
        [
          "Losses hit tranches from the bottom of the capital structure.",
          "Attachment and detachment points define tranche loss ranges.",
          "Subordination and excess spread enhance senior tranches.",
        ],
        [
          "How do attachment points define tranche risk?",
          "What forms of credit enhancement exist?",
        ],
        "A mezzanine tranche with a 5% attachment and 15% detachment absorbs pool losses between 5% and 15%, taking its first loss only after equity is exhausted."
      ),
      lesson(
        "frm-p2-m5-l5",
        "Correlation and tranche sensitivity",
        45,
        [
          "Explain how correlation affects tranche values.",
          "Analyse the crisis-era mispricing of correlation.",
        ],
        [
          "Higher correlation helps equity but hurts senior tranches.",
          "Correlation is the key hidden risk in structured credit.",
          "Mispriced correlation contributed to crisis losses.",
        ],
        [
          "Why does rising correlation benefit the equity tranche?",
          "How did correlation mispricing contribute to the crisis?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Portfolio EL = Σ PDi × LGDi × EADi.",
      "Credit VaR = extreme quantile − expected loss.",
      "ASRF: capital depends on PD, LGD and asset correlation.",
      "Tranche loss range = [attachment, detachment].",
    ],
    commonTraps: [
      "Ignoring correlation's effect on the loss tail.",
      "Confusing expected (provisions) and unexpected (capital) loss.",
      "Assuming senior tranches are risk-free.",
    ],
    examTechnique: [
      "Reason about how correlation reshapes the loss distribution.",
      "Trace tranche losses from the equity upward.",
      "Link the ASRF model to Basel IRB.",
    ],
    practicePlan: [
      "Compute portfolio EL and reason about UL.",
      "Work a tranche-loss allocation.",
      "Explain correlation's tranche effect qualitatively.",
    ],
    furtherReading: [
      "GARP FRM Part II — Credit Risk readings.",
      "Schönbucher, 'Credit Derivatives Pricing Models'.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m6",
    examId: "frm",
    levelId: "p2",
    title: "Credit Risk — Counterparty risk, CVA & wrong-way risk",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 28,
    overview:
      "Covers counterparty credit risk in derivatives, exposure metrics, credit valuation adjustment (CVA) and the broader xVA family, collateral and netting, and wrong-way risk.",
    whyItMatters:
      "Counterparty risk and CVA became first-order concerns after the crisis; measuring and pricing them is now standard practice and a significant Part II topic.",
    learningOutcomes: [
      "Compute counterparty exposure metrics (EE, PFE, EPE).",
      "Explain and estimate CVA and DVA.",
      "Describe the xVA family of adjustments.",
      "Explain netting and collateral mitigation.",
      "Analyse wrong-way and right-way risk.",
      "Relate counterparty risk to capital.",
    ],
    syllabusAreas: [
      area("Exposure metrics", [
        "Expected exposure and PFE",
        "Expected positive exposure",
        "Exposure profiles",
      ], "Credit risk ~25%"),
      area("Valuation adjustments", [
        "CVA and DVA",
        "FVA, KVA and the xVA family",
        "CVA hedging",
      ]),
      area("Mitigation & wrong-way risk", [
        "Netting and collateral",
        "Wrong-way vs right-way risk",
        "Central clearing",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m6-l1",
        "Counterparty exposure metrics",
        55,
        [
          "Compute EE, EPE and PFE.",
          "Interpret exposure profiles.",
        ],
        [
          "Expected exposure averages positive future values.",
          "PFE is a high-quantile of future exposure.",
          "EPE is the time-averaged expected exposure.",
        ],
        [
          "How does PFE differ from expected exposure?",
          "Why does exposure vary over a swap's life?",
        ],
        "For an interest-rate swap, expected exposure typically peaks mid-life, balancing growing rate uncertainty against a shrinking remaining notional."
      ),
      lesson(
        "frm-p2-m6-l2",
        "Credit valuation adjustment (CVA)",
        55,
        [
          "Compute CVA conceptually.",
          "Explain DVA and its controversies.",
        ],
        [
          "CVA is the market value of counterparty credit risk.",
          "CVA ≈ Σ discounted EE × PD × LGD across time.",
          "DVA reflects one's own default risk and is controversial.",
        ],
        [
          "How is CVA computed from exposure and PD?",
          "Why is DVA controversial?",
        ],
        "CVA aggregates, over time buckets, expected exposure × marginal default probability × loss given default, discounted to today."
      ),
      lesson(
        "frm-p2-m6-l3",
        "The xVA family",
        45,
        [
          "Describe FVA, KVA and MVA.",
          "Explain how xVA affects pricing.",
        ],
        [
          "FVA reflects funding costs of uncollateralised trades.",
          "KVA reflects the cost of regulatory capital.",
          "xVA adjustments are additive to derivative prices.",
        ],
        [
          "What does FVA capture?",
          "Why does KVA enter derivative pricing?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m6-l4",
        "Netting, collateral and central clearing",
        45,
        [
          "Explain netting and collateral mitigation.",
          "Describe central clearing's effect on counterparty risk.",
        ],
        [
          "Netting reduces exposure to the net position.",
          "Collateral and margin further reduce exposure.",
          "Central counterparties mutualise and standardise risk.",
        ],
        [
          "How does central clearing change counterparty risk?",
          "How do initial and variation margin differ?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m6-l5",
        "Wrong-way risk",
        40,
        [
          "Distinguish wrong-way and right-way risk.",
          "Explain its effect on CVA.",
        ],
        [
          "Wrong-way risk arises when exposure rises as counterparty credit worsens.",
          "It increases CVA beyond the independence assumption.",
          "Right-way risk reduces effective exposure.",
        ],
        [
          "What is an example of wrong-way risk?",
          "How does wrong-way risk affect CVA?",
        ],
        "Buying credit protection on a bank from another bank in the same country is wrong-way risk: the protection is most needed exactly when the seller is also likely to fail."
      ),
    ],
    frameworksAndFormulas: [
      "CVA ≈ Σ discounted EE_t × marginal PD_t × LGD.",
      "EPE = time-average of expected exposure.",
      "Net exposure after netting ≤ gross exposure.",
      "Wrong-way risk: exposure positively correlated with counterparty PD.",
    ],
    commonTraps: [
      "Confusing PFE (quantile) with EE (average).",
      "Ignoring wrong-way risk when estimating CVA.",
      "Assuming collateral eliminates all counterparty risk.",
    ],
    examTechnique: [
      "Distinguish the exposure metrics precisely.",
      "Build CVA from exposure, PD and LGD components.",
      "Flag wrong-way risk when exposure and PD co-move.",
    ],
    practicePlan: [
      "Sketch exposure profiles for swaps and options.",
      "Outline a CVA calculation.",
      "List wrong-way risk examples.",
    ],
    furtherReading: [
      "GARP FRM Part II — Credit Risk readings.",
      "Gregory, 'The xVA Challenge'.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m7",
    examId: "frm",
    levelId: "p2",
    title: "Operational Risk — Risk taxonomy, loss data & capital",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 26,
    overview:
      "Covers the definition and taxonomy of operational risk, loss-data collection, frequency/severity modelling, the loss-distribution approach, and operational-risk capital frameworks.",
    whyItMatters:
      "Operational risk causes some of the largest single losses and is harder to model than market or credit risk; sound measurement and capital frameworks are essential.",
    learningOutcomes: [
      "Define operational risk and its event-type taxonomy.",
      "Collect and use internal/external loss data.",
      "Model loss frequency and severity.",
      "Apply the loss-distribution approach.",
      "Explain operational-risk capital (Basel SMA).",
      "Use scenario analysis and key risk indicators.",
    ],
    syllabusAreas: [
      area("Taxonomy & data", [
        "Operational-risk definition and event types",
        "Internal and external loss data",
        "Data quality and thresholds",
      ], "Operational risk ~25%"),
      area("Modelling", [
        "Frequency and severity distributions",
        "Loss-distribution approach",
        "Scenario analysis",
      ]),
      area("Capital & indicators", [
        "Basel Standardised Measurement Approach",
        "Key risk indicators",
        "RCSA",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m7-l1",
        "Operational-risk taxonomy",
        45,
        [
          "Define operational risk and event types.",
          "Classify losses by event type and business line.",
        ],
        [
          "Operational risk excludes strategic and reputational risk by definition.",
          "Basel defines seven event-type categories.",
          "Losses map to business lines and event types.",
        ],
        [
          "What is excluded from the operational-risk definition?",
          "What are the Basel event-type categories?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m7-l2",
        "Loss-data collection",
        45,
        [
          "Use internal and external loss data.",
          "Address data-quality and threshold issues.",
        ],
        [
          "Internal data reflects the firm's own experience.",
          "External data supplements rare-event tails.",
          "Collection thresholds bias frequency estimates.",
        ],
        [
          "Why supplement internal with external loss data?",
          "How do collection thresholds bias data?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m7-l3",
        "Frequency and severity modelling",
        50,
        [
          "Model frequency (Poisson) and severity (lognormal).",
          "Combine them into an aggregate loss distribution.",
        ],
        [
          "Frequency is often Poisson; severity often lognormal or heavy-tailed.",
          "Aggregate loss combines frequency and severity.",
          "The tail is dominated by low-frequency, high-severity events.",
        ],
        [
          "Why model frequency and severity separately?",
          "What dominates the operational-loss tail?",
        ],
        "With a Poisson frequency (λ = 5/year) and lognormal severity, the aggregate annual loss distribution is built by convolving the two—typically via Monte Carlo."
      ),
      lesson(
        "frm-p2-m7-l4",
        "The loss-distribution approach and capital",
        50,
        [
          "Apply the loss-distribution approach.",
          "Explain the Basel Standardised Measurement Approach.",
        ],
        [
          "The LDA derives capital from a modelled aggregate loss distribution.",
          "Basel replaced the AMA with the SMA.",
          "The SMA uses a business-indicator component and loss multiplier.",
        ],
        [
          "How does the LDA derive operational-risk capital?",
          "What drives the Basel SMA charge?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m7-l5",
        "Scenario analysis and key risk indicators",
        40,
        [
          "Use scenario analysis for tail events.",
          "Design key risk indicators and RCSA.",
        ],
        [
          "Scenario analysis captures events absent from data.",
          "Key risk indicators provide forward-looking signals.",
          "Risk-and-control self-assessment identifies control gaps.",
        ],
        [
          "Why complement loss data with scenario analysis?",
          "What is the purpose of an RCSA?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Aggregate loss = Σ (frequency × severity), via convolution/Monte Carlo.",
      "Frequency ~ Poisson(λ); severity ~ lognormal/heavy-tailed.",
      "Basel SMA: business indicator × marginal coefficients × internal-loss multiplier.",
      "Op-risk capital driven by low-frequency, high-severity tail.",
    ],
    commonTraps: [
      "Ignoring collection-threshold bias in loss data.",
      "Assuming thin tails for severity.",
      "Confusing the retired AMA with the current SMA.",
    ],
    examTechnique: [
      "Separate frequency and severity in modelling questions.",
      "Recall the SMA replaced the AMA.",
      "Emphasise the tail in operational-risk capital.",
    ],
    practicePlan: [
      "Outline an LDA Monte Carlo procedure.",
      "Classify sample losses by Basel event type.",
      "Design three key risk indicators.",
    ],
    furtherReading: [
      "GARP FRM Part II — Operational Risk and Resiliency readings.",
      "Basel Committee — operational-risk capital standards.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m8",
    examId: "frm",
    levelId: "p2",
    title: "Operational Risk — Resilience, cyber & conduct risk",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers operational resilience, business continuity, third-party and cyber risk, model risk in operations, and conduct and reputational risk within the operational-risk discipline.",
    whyItMatters:
      "Modern operational risk is dominated by cyber, third-party and conduct events; regulators now emphasise resilience—the ability to withstand and recover from disruption.",
    learningOutcomes: [
      "Explain operational resilience and its principles.",
      "Design business-continuity and disaster-recovery plans.",
      "Analyse cyber and information-security risk.",
      "Manage third-party and outsourcing risk.",
      "Explain conduct and reputational risk.",
      "Relate model risk to operational risk.",
    ],
    syllabusAreas: [
      area("Resilience & continuity", [
        "Operational resilience principles",
        "Business continuity and disaster recovery",
        "Important business services",
      ], "Operational risk ~25%"),
      area("Cyber & third-party", [
        "Cyber-risk taxonomy",
        "Information security controls",
        "Third-party and outsourcing risk",
      ]),
      area("Conduct & reputational", [
        "Conduct risk",
        "Reputational risk",
        "Culture linkage",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m8-l1",
        "Operational resilience",
        45,
        [
          "Explain operational resilience principles.",
          "Identify important business services and impact tolerances.",
        ],
        [
          "Resilience is the ability to absorb and recover from disruption.",
          "Firms map important business services and set impact tolerances.",
          "Regulators require testing against severe-but-plausible scenarios.",
        ],
        [
          "How does resilience differ from business continuity?",
          "What is an impact tolerance?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m8-l2",
        "Business continuity and disaster recovery",
        40,
        [
          "Design continuity and recovery plans.",
          "Explain recovery time and point objectives.",
        ],
        [
          "Business continuity keeps critical functions running.",
          "RTO and RPO set recovery targets.",
          "Plans must be tested regularly.",
        ],
        [
          "What do RTO and RPO measure?",
          "Why must continuity plans be tested?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m8-l3",
        "Cyber and information-security risk",
        50,
        [
          "Analyse cyber-risk categories.",
          "Describe information-security controls.",
        ],
        [
          "Cyber threats include data breach, ransomware and DDoS.",
          "Defence-in-depth layers preventive and detective controls.",
          "Cyber risk is systemic and interconnected.",
        ],
        [
          "Why is cyber risk considered systemic?",
          "What is defence-in-depth?",
        ],
        "A ransomware attack that encrypts a bank's core systems is both an availability and integrity event, testing the firm's resilience and recovery objectives."
      ),
      lesson(
        "frm-p2-m8-l4",
        "Third-party and outsourcing risk",
        45,
        [
          "Manage third-party and outsourcing risk.",
          "Explain concentration in critical providers.",
        ],
        [
          "Outsourcing transfers activity but not accountability.",
          "Concentration in cloud/critical vendors creates systemic risk.",
          "Due diligence and monitoring are ongoing obligations.",
        ],
        [
          "Why does outsourcing not transfer accountability?",
          "What risk arises from cloud concentration?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m8-l5",
        "Conduct and reputational risk",
        40,
        [
          "Explain conduct and reputational risk.",
          "Link them to culture and incentives.",
        ],
        [
          "Conduct risk arises from harmful behaviour toward clients/markets.",
          "Reputational damage can exceed direct losses.",
          "Culture and incentives shape conduct outcomes.",
        ],
        [
          "How can reputational loss exceed direct loss?",
          "How do incentives drive conduct risk?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Resilience: map services → set impact tolerances → test scenarios.",
      "RTO = target recovery time; RPO = tolerable data loss.",
      "Defence-in-depth layers preventive, detective and corrective controls.",
      "Outsourcing transfers activity, not accountability.",
    ],
    commonTraps: [
      "Equating resilience with traditional business continuity.",
      "Assuming outsourcing removes accountability.",
      "Underestimating reputational impact of conduct events.",
    ],
    examTechnique: [
      "Frame answers around impact tolerances and recovery objectives.",
      "Classify cyber events by confidentiality/integrity/availability.",
      "Link conduct risk to culture and incentives.",
    ],
    practicePlan: [
      "Map important business services and impact tolerances.",
      "Define RTO/RPO for a critical system.",
      "List third-party risk controls.",
    ],
    furtherReading: [
      "GARP FRM Part II — Operational Risk and Resiliency readings.",
      "Basel Committee — Principles for operational resilience.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m9",
    examId: "frm",
    levelId: "p2",
    title: "Liquidity & Treasury — Funding liquidity & LCR/NSFR concepts",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers funding-liquidity risk, liquidity metrics, the Basel LCR and NSFR, funds-transfer pricing, and the management of a bank's funding profile.",
    whyItMatters:
      "Funding-liquidity crises can destroy solvent institutions overnight; the LCR and NSFR are central regulatory tools and a key Part II liquidity topic.",
    learningOutcomes: [
      "Distinguish funding and market liquidity.",
      "Explain and compute the LCR and NSFR.",
      "Describe funds-transfer pricing.",
      "Analyse a bank's funding profile and gaps.",
      "Explain liquidity stress testing.",
      "Relate liquidity risk to solvency.",
    ],
    syllabusAreas: [
      area("Funding liquidity", [
        "Funding vs market liquidity",
        "Liquidity gaps and cash-flow modelling",
        "Contingency funding plans",
      ], "Liquidity ~15–20%"),
      area("Regulatory ratios", [
        "Liquidity Coverage Ratio",
        "Net Stable Funding Ratio",
        "High-quality liquid assets",
      ]),
      area("Management", [
        "Funds-transfer pricing",
        "Liquidity stress testing",
        "Diversification of funding",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m9-l1",
        "Funding vs market liquidity",
        45,
        [
          "Distinguish funding and market liquidity.",
          "Explain the interaction between them.",
        ],
        [
          "Funding liquidity is the ability to meet obligations as due.",
          "Market liquidity is the ability to sell without moving price.",
          "The two reinforce each other in a crisis (liquidity spiral).",
        ],
        [
          "How do funding and market liquidity interact in a crisis?",
          "What is a liquidity spiral?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m9-l2",
        "The Liquidity Coverage Ratio",
        50,
        [
          "Compute the LCR.",
          "Explain HQLA and stressed outflows.",
        ],
        [
          "LCR = HQLA / net cash outflows over 30 days ≥ 100%.",
          "HQLA are high-quality, liquid assets with haircuts.",
          "Outflows apply run-off rates to funding sources.",
        ],
        [
          "What does the LCR ensure?",
          "How are outflows estimated?",
        ],
        "A bank with $120 of HQLA and $100 of stressed 30-day net outflows has an LCR of 120%, meeting the ≥100% minimum."
      ),
      lesson(
        "frm-p2-m9-l3",
        "The Net Stable Funding Ratio",
        45,
        [
          "Compute the NSFR.",
          "Explain available and required stable funding.",
        ],
        [
          "NSFR = available stable funding / required stable funding ≥ 100%.",
          "It promotes longer-term, stable funding.",
          "Illiquid assets require more stable funding.",
        ],
        [
          "How does the NSFR differ from the LCR in horizon?",
          "What increases required stable funding?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m9-l4",
        "Funds-transfer pricing",
        45,
        [
          "Explain funds-transfer pricing.",
          "Allocate liquidity costs to business lines.",
        ],
        [
          "FTP charges business lines for liquidity use.",
          "It aligns incentives with the true cost of funding.",
          "Mispriced FTP encourages risky funding behaviour.",
        ],
        [
          "Why is funds-transfer pricing important for incentives?",
          "What happens if FTP ignores liquidity cost?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m9-l5",
        "Liquidity stress testing",
        40,
        [
          "Design liquidity stress tests.",
          "Explain contingency funding plans.",
        ],
        [
          "Stress tests project cash flows under adverse scenarios.",
          "Contingency funding plans specify actions and sources.",
          "Idiosyncratic and market-wide scenarios both matter.",
        ],
        [
          "What scenarios should liquidity stress tests include?",
          "What does a contingency funding plan specify?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "LCR = HQLA / net 30-day stressed outflows ≥ 100%.",
      "NSFR = available stable funding / required stable funding ≥ 100%.",
      "Liquidity gap = maturing assets − maturing liabilities per bucket.",
      "FTP charges business lines for liquidity consumed.",
    ],
    commonTraps: [
      "Confusing the LCR (30-day) with the NSFR (1-year) horizon.",
      "Treating funding and market liquidity as unrelated.",
      "Ignoring haircuts and run-off rates.",
    ],
    examTechnique: [
      "Recall the horizon and purpose of each ratio.",
      "Apply run-off rates to outflows carefully.",
      "Link FTP to incentive alignment.",
    ],
    practicePlan: [
      "Compute LCR and NSFR from sample balance sheets.",
      "Build a simple liquidity gap ladder.",
      "Outline a contingency funding plan.",
    ],
    furtherReading: [
      "GARP FRM Part II — Liquidity and Treasury Risk readings.",
      "Basel Committee — LCR and NSFR standards.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m10",
    examId: "frm",
    levelId: "p2",
    title: "Liquidity & Treasury — Asset liquidity & stress testing",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers market (asset) liquidity risk, liquidity-adjusted VaR, transaction-cost and bid-ask modelling, and enterprise-wide and liquidity stress testing.",
    whyItMatters:
      "Asset-liquidity risk determines how much a forced sale costs; incorporating it into risk measures and stress tests prevents underestimating losses in stressed markets.",
    learningOutcomes: [
      "Explain market (asset) liquidity risk.",
      "Compute liquidity-adjusted VaR.",
      "Model bid-ask spreads and market impact.",
      "Design enterprise-wide stress tests.",
      "Explain reverse stress testing.",
      "Integrate liquidity into risk measurement.",
    ],
    syllabusAreas: [
      area("Asset liquidity", [
        "Bid-ask spread and depth",
        "Market impact and endogenous liquidity",
        "Liquidity-adjusted VaR",
      ], "Liquidity ~15–20%"),
      area("Stress testing", [
        "Enterprise-wide stress testing",
        "Scenario design and severity",
        "Reverse stress testing",
      ]),
      area("Integration", [
        "Liquidity in risk aggregation",
        "Governance of stress testing",
        "Use in decision-making",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m10-l1",
        "Market liquidity risk",
        45,
        [
          "Describe dimensions of market liquidity.",
          "Distinguish exogenous and endogenous liquidity.",
        ],
        [
          "Liquidity has tightness, depth and resilience dimensions.",
          "Exogenous liquidity is market-wide; endogenous depends on position size.",
          "Large positions face endogenous liquidity costs.",
        ],
        [
          "How does endogenous liquidity differ from exogenous?",
          "What are the dimensions of market liquidity?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m10-l2",
        "Liquidity-adjusted VaR",
        50,
        [
          "Compute liquidity-adjusted VaR.",
          "Incorporate bid-ask spread cost.",
        ],
        [
          "LVaR adds a liquidity cost to standard VaR.",
          "The spread-based add-on uses half the bid-ask spread.",
          "Endogenous adjustments scale with position size.",
        ],
        [
          "How is the spread-based liquidity add-on computed?",
          "Why does position size matter for LVaR?",
        ],
        "LVaR = VaR + 0.5 × (spread) × position value, adding the cost of crossing the bid-ask to close the position."
      ),
      lesson(
        "frm-p2-m10-l3",
        "Market impact and transaction costs",
        45,
        [
          "Model market impact of trades.",
          "Explain optimal execution trade-offs.",
        ],
        [
          "Market impact rises with order size and urgency.",
          "Slow execution reduces impact but raises timing risk.",
          "Optimal execution balances the two.",
        ],
        [
          "How does urgency affect market impact?",
          "What trade-off defines optimal execution?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m10-l4",
        "Enterprise-wide stress testing",
        50,
        [
          "Design enterprise-wide stress tests.",
          "Choose severe-but-plausible scenarios.",
        ],
        [
          "Enterprise stress tests span market, credit and liquidity risk.",
          "Scenarios should be severe but plausible and coherent.",
          "Results inform capital and contingency planning.",
        ],
        [
          "What makes a good stress scenario?",
          "How do stress-test results feed decisions?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m10-l5",
        "Reverse stress testing and governance",
        40,
        [
          "Explain reverse stress testing.",
          "Describe governance of stress testing.",
        ],
        [
          "Reverse stress testing starts from failure and works backward.",
          "It identifies vulnerabilities standard tests may miss.",
          "Governance ensures results influence decisions.",
        ],
        [
          "How does reverse stress testing differ from standard stress testing?",
          "Why is governance essential to stress testing?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "LVaR = VaR + 0.5 × spread × position value (spread approach).",
      "Endogenous liquidity cost scales with position size.",
      "Optimal execution balances market impact against timing risk.",
      "Reverse stress test: start from failure → identify causes.",
    ],
    commonTraps: [
      "Ignoring liquidity cost in VaR for illiquid positions.",
      "Treating all liquidity as exogenous.",
      "Designing stress scenarios that are implausible or incoherent.",
    ],
    examTechnique: [
      "Add the spread-based liquidity term when asked for LVaR.",
      "Distinguish exogenous vs endogenous liquidity.",
      "Frame reverse stress testing as working backward from failure.",
    ],
    practicePlan: [
      "Compute LVaR with a spread add-on.",
      "Design one severe-but-plausible stress scenario.",
      "Explain reverse stress testing in one paragraph.",
    ],
    furtherReading: [
      "GARP FRM Part II — Liquidity and Treasury Risk readings.",
      "Dowd, 'Measuring Market Risk' (liquidity chapters).",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m11",
    examId: "frm",
    levelId: "p2",
    title: "Investment Risk — Hedge funds, private equity & risk budgeting",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 24,
    overview:
      "Covers risk management in investment portfolios: hedge-fund and private-equity risks, factor exposures, risk budgeting and the allocation of risk across strategies.",
    whyItMatters:
      "Investment risk management applies the FRM toolkit to portfolios, allocating a risk budget across strategies and monitoring the distinctive risks of alternatives.",
    learningOutcomes: [
      "Analyse hedge-fund and private-equity risks.",
      "Decompose portfolio risk into factor exposures.",
      "Apply risk budgeting across strategies.",
      "Explain risk parity and its critiques.",
      "Account for illiquidity and valuation biases.",
      "Monitor investment-portfolio risk.",
    ],
    syllabusAreas: [
      area("Alternative-investment risk", [
        "Hedge-fund strategy risks",
        "Private-equity and illiquidity risk",
        "Valuation and smoothing biases",
      ], "Investment risk ~15%"),
      area("Risk budgeting", [
        "Risk contribution and marginal risk",
        "Risk parity",
        "Factor risk allocation",
      ]),
      area("Monitoring", [
        "Style drift and exposure creep",
        "Performance attribution",
        "Risk reporting",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m11-l1",
        "Hedge-fund and private-equity risks",
        50,
        [
          "Analyse strategy-specific hedge-fund risks.",
          "Explain private-equity illiquidity and J-curve risk.",
        ],
        [
          "Hedge-fund returns can hide tail and leverage risk.",
          "Private equity carries illiquidity and vintage risk.",
          "Smoothed valuations understate volatility.",
        ],
        [
          "Why can hedge-fund volatility understate true risk?",
          "What risks are unique to private equity?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m11-l2",
        "Factor decomposition of portfolio risk",
        50,
        [
          "Decompose risk into factor exposures.",
          "Identify hidden common exposures.",
        ],
        [
          "Factor models reveal shared risk drivers.",
          "Apparent diversification can mask common exposures.",
          "Residual risk is the idiosyncratic remainder.",
        ],
        [
          "How can factor analysis reveal hidden risk concentration?",
          "What is residual risk?",
        ],
        "Several hedge funds may all load on an equity-market factor, so a portfolio that looks diversified by strategy is actually concentrated in one factor."
      ),
      lesson(
        "frm-p2-m11-l3",
        "Risk budgeting",
        50,
        [
          "Compute risk contributions.",
          "Allocate a risk budget across strategies.",
        ],
        [
          "Risk contribution = weight × marginal contribution to risk.",
          "Risk budgeting allocates risk, not just capital.",
          "Marginal risk depends on correlations.",
        ],
        [
          "How is a position's risk contribution computed?",
          "Why budget risk rather than capital?",
        ],
        "A 10% capital allocation to a volatile, correlated strategy may consume 30% of the portfolio's risk budget—risk budgeting makes this visible."
      ),
      lesson(
        "frm-p2-m11-l4",
        "Risk parity",
        40,
        [
          "Explain risk parity.",
          "Critique its assumptions and leverage use.",
        ],
        [
          "Risk parity equalises risk contributions across assets.",
          "It typically leverages low-volatility assets.",
          "Leverage and correlation shifts are key risks.",
        ],
        [
          "How does risk parity differ from equal weighting?",
          "What are the main critiques of risk parity?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m11-l5",
        "Monitoring investment risk",
        40,
        [
          "Detect style drift and exposure creep.",
          "Design risk reporting for portfolios.",
        ],
        [
          "Style drift changes a strategy's risk profile.",
          "Ongoing monitoring compares exposures to mandate.",
          "Clear reporting supports timely decisions.",
        ],
        [
          "What is style drift and why does it matter?",
          "What should investment risk reporting include?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Risk contribution_i = weight_i × marginal contribution to risk_i.",
      "Total risk = Σ risk contributions.",
      "Risk parity equalises risk contributions (often with leverage).",
      "Factor decomposition separates systematic from residual risk.",
    ],
    commonTraps: [
      "Assuming strategy diversification implies factor diversification.",
      "Treating smoothed alternative returns as true volatility.",
      "Ignoring leverage risk in risk parity.",
    ],
    examTechnique: [
      "Compute risk contributions, not just capital weights.",
      "Look for hidden common factor exposures.",
      "Adjust alternative statistics for smoothing.",
    ],
    practicePlan: [
      "Compute risk contributions for a two-strategy portfolio.",
      "Decompose a portfolio into factor exposures.",
      "Critique a risk-parity allocation.",
    ],
    furtherReading: [
      "GARP FRM Part II — Risk Management and Investment Management readings.",
      "Ang, 'Asset Management'.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m12",
    examId: "frm",
    levelId: "p2",
    title: "Investment Risk — Risk-adjusted performance & portfolio construction",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 22,
    overview:
      "Covers risk-adjusted performance measurement, performance attribution, portfolio construction under constraints, and the pitfalls of evaluating skill versus luck.",
    whyItMatters:
      "Allocators must evaluate managers and construct portfolios that deliver return per unit of risk; distinguishing skill from luck is central to sound investment decisions.",
    learningOutcomes: [
      "Compute risk-adjusted performance measures.",
      "Perform return attribution.",
      "Construct portfolios under constraints.",
      "Distinguish skill from luck statistically.",
      "Explain the limitations of performance measures.",
      "Apply the information ratio and its drivers.",
    ],
    syllabusAreas: [
      area("Performance measures", [
        "Sharpe, Treynor, information ratio, M²",
        "Alpha and factor-adjusted returns",
        "Measure selection",
      ], "Investment risk ~15%"),
      area("Attribution & construction", [
        "Return attribution",
        "Portfolio construction under constraints",
        "Transaction costs",
      ]),
      area("Skill vs luck", [
        "Statistical significance of alpha",
        "Data-mining and survivorship",
        "Persistence of performance",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m12-l1",
        "Risk-adjusted performance measures",
        50,
        [
          "Compute Sharpe, Treynor, information ratio and M².",
          "Select the appropriate measure.",
        ],
        [
          "Sharpe uses total risk; Treynor uses systematic risk.",
          "The information ratio uses active return and active risk.",
          "M² restates Sharpe in return units.",
        ],
        [
          "When is Treynor preferred over Sharpe?",
          "What does M² add over the Sharpe ratio?",
        ],
        "A portfolio with 10% return, 3% risk-free rate and 14% volatility has a Sharpe ratio of (10 − 3)/14 = 0.5."
      ),
      lesson(
        "frm-p2-m12-l2",
        "Return attribution",
        45,
        [
          "Decompose returns into allocation and selection.",
          "Interpret factor-based attribution.",
        ],
        [
          "Attribution isolates the sources of active return.",
          "Allocation, selection and interaction sum to active return.",
          "Factor attribution attributes return to factor exposures.",
        ],
        [
          "How are allocation and selection separated?",
          "What does factor attribution reveal?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m12-l3",
        "Portfolio construction under constraints",
        45,
        [
          "Construct portfolios under real-world constraints.",
          "Account for transaction costs and turnover.",
        ],
        [
          "Constraints (long-only, limits) reduce achievable efficiency.",
          "Transaction costs erode paper alpha.",
          "The transfer coefficient measures implementation efficiency.",
        ],
        [
          "How do constraints reduce the transfer coefficient?",
          "Why does turnover matter for net returns?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m12-l4",
        "Skill versus luck",
        45,
        [
          "Test the statistical significance of alpha.",
          "Account for data-mining and survivorship bias.",
        ],
        [
          "Short track records make alpha statistically uncertain.",
          "Data-mining inflates apparent skill.",
          "Survivorship bias overstates average performance.",
        ],
        [
          "Why is a short track record insufficient to prove skill?",
          "How does survivorship bias distort evaluation?",
        ],
        "A manager with a 2% annual alpha and 4% tracking error needs many years of data before the alpha is statistically distinguishable from luck."
      ),
      lesson(
        "frm-p2-m12-l5",
        "Limitations and the information ratio",
        40,
        [
          "Explain limitations of performance measures.",
          "Apply the information ratio and its drivers.",
        ],
        [
          "All measures depend on the chosen benchmark and period.",
          "The information ratio ≈ IC × √breadth.",
          "Non-normal returns can distort ratio-based measures.",
        ],
        [
          "What drives the information ratio?",
          "Why can non-normal returns mislead Sharpe-type measures?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Sharpe = (Rp − rf)/σp; Treynor = (Rp − rf)/βp.",
      "Information ratio = active return/active risk ≈ IC × √breadth.",
      "Active return ≈ allocation + selection + interaction.",
      "t-stat of alpha ≈ IR × √(years).",
    ],
    commonTraps: [
      "Using Sharpe when only systematic risk matters (Treynor).",
      "Inferring skill from a short track record.",
      "Ignoring survivorship and data-mining bias.",
    ],
    examTechnique: [
      "Match the measure to whole vs partial portfolios.",
      "Relate alpha significance to track-record length.",
      "Decompose attribution methodically.",
    ],
    practicePlan: [
      "Compute all four performance measures on one dataset.",
      "Estimate the years needed to prove a given alpha.",
      "Perform a two-sector attribution.",
    ],
    furtherReading: [
      "GARP FRM Part II — Risk Management and Investment Management readings.",
      "Grinold & Kahn, 'Active Portfolio Management'.",
    ],
  }),
  courseware({
    moduleId: "frm-p2-m13",
    examId: "frm",
    levelId: "p2",
    title: "Current Issues — Macro, regulation & market structure themes",
    examFormat: FRM_P2_FORMAT,
    estimatedStudyHours: 20,
    overview:
      "Covers the FRM 'Current Issues' readings: recent developments in macro-financial risk, regulation, market structure, technology (AI/ML, digital assets) and climate-related financial risk.",
    whyItMatters:
      "The current-issues section tests awareness of evolving risks and regulatory responses, ensuring certified professionals stay current with the frontier of risk management.",
    learningOutcomes: [
      "Summarise recent macro-financial risk developments.",
      "Explain current regulatory and market-structure changes.",
      "Assess the risk implications of AI and machine learning.",
      "Describe risks of digital assets and crypto markets.",
      "Explain climate-related financial risk.",
      "Relate current issues to the core FRM framework.",
    ],
    syllabusAreas: [
      area("Macro & regulation", [
        "Macro-financial stability themes",
        "Regulatory developments",
        "Market-structure evolution",
      ], "Current issues ~10%"),
      area("Technology", [
        "AI and machine learning in risk",
        "Model risk of AI",
        "Digital assets and crypto risk",
      ]),
      area("Climate risk", [
        "Physical and transition risk",
        "Climate scenario analysis",
        "Disclosure frameworks",
      ]),
    ],
    lessons: [
      lesson(
        "frm-p2-m13-l1",
        "Macro-financial and market-structure themes",
        45,
        [
          "Summarise recent macro-financial risks.",
          "Explain evolving market structure.",
        ],
        [
          "Rate regime shifts and leverage build-ups drive systemic risk.",
          "Non-bank financial intermediation is growing.",
          "Market structure affects liquidity and fragility.",
        ],
        [
          "Why does non-bank intermediation raise systemic concerns?",
          "How does market structure affect fragility?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m13-l2",
        "Regulatory developments",
        40,
        [
          "Describe recent regulatory changes.",
          "Relate them to the core frameworks.",
        ],
        [
          "Basel finalisation and FRTB reshape capital.",
          "Regulation responds to recent stress events.",
          "Cross-border coordination remains challenging.",
        ],
        [
          "How does recent regulation respond to past crises?",
          "Why is cross-border coordination difficult?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m13-l3",
        "AI and machine learning in risk",
        45,
        [
          "Assess the benefits and risks of AI/ML in risk.",
          "Explain model risk specific to AI.",
        ],
        [
          "AI/ML improve prediction but can be opaque.",
          "Explainability and bias are key concerns.",
          "AI model risk requires enhanced governance.",
        ],
        [
          "What model risks are specific to AI/ML?",
          "Why is explainability important for AI in risk?",
        ],
        "A machine-learning credit model may achieve high accuracy yet fail governance if its decisions cannot be explained to regulators or affected customers."
      ),
      lesson(
        "frm-p2-m13-l4",
        "Digital assets and crypto risk",
        40,
        [
          "Describe risks of digital assets.",
          "Explain stablecoin and DeFi risks.",
        ],
        [
          "Crypto assets carry extreme volatility and operational risk.",
          "Stablecoins face run and reserve risks.",
          "DeFi introduces smart-contract and governance risk.",
        ],
        [
          "What run risk do stablecoins face?",
          "What new risks does DeFi introduce?",
        ],
        undefined
      ),
      lesson(
        "frm-p2-m13-l5",
        "Climate-related financial risk",
        40,
        [
          "Distinguish physical and transition climate risk.",
          "Explain climate scenario analysis and disclosure.",
        ],
        [
          "Physical risk stems from climate events; transition risk from policy/tech shifts.",
          "Climate scenario analysis is long-horizon and uncertain.",
          "Disclosure frameworks (TCFD-style) standardise reporting.",
        ],
        [
          "How do physical and transition risks differ?",
          "Why is climate scenario analysis challenging?",
        ],
        undefined
      ),
    ],
    frameworksAndFormulas: [
      "Climate risk = physical risk + transition risk.",
      "AI governance: explainability, bias control, validation.",
      "Current issues connect to core market/credit/operational frameworks.",
    ],
    commonTraps: [
      "Treating current issues as disconnected from core theory.",
      "Confusing physical and transition climate risk.",
      "Assuming AI models need no special governance.",
    ],
    examTechnique: [
      "Connect each current issue to a core risk category.",
      "Recall the physical vs transition climate-risk split.",
      "Emphasise governance for AI and digital-asset questions.",
    ],
    practicePlan: [
      "Summarise each current-issues reading in three bullets.",
      "Link every theme to a core FRM concept.",
      "Review the latest GARP current-issues list before the exam.",
    ],
    furtherReading: [
      "GARP FRM Part II — Current Issues in Financial Markets readings (updated annually).",
      "Financial Stability Board and BIS thematic reports.",
    ],
  }),
];
