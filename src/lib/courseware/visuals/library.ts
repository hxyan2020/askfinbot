import type {
  CoursewareChartConfig,
  CoursewareDiagramSpec,
  CoursewareVisual,
} from "../types";

export type VisualLibraryEntry =
  | {
      id: string;
      kind: "chart";
      tags: string[];
      /** Words that strongly indicate this visual belongs on a lesson */
      keywords: string[];
      caption: string;
      build: (params?: Record<string, number | string>) => CoursewareChartConfig;
    }
  | {
      id: string;
      kind: "diagram";
      tags: string[];
      keywords: string[];
      caption: string;
      build: (params?: Record<string, number | string>) => CoursewareDiagramSpec;
    }
  | {
      id: string;
      kind: "formula-tex";
      tags: string[];
      keywords: string[];
      caption: string;
      latex: string;
    };

function num(params: Record<string, number | string> | undefined, key: string, fallback: number) {
  const v = params?.[key];
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function payoffPoints(strike: number, premium: number, kind: "call" | "put", long: boolean) {
  const spots = [
    strike - 40,
    strike - 20,
    strike,
    strike + 20,
    strike + 40,
    strike + 60,
  ];
  return spots.map((s) => {
    const intrinsic = kind === "call" ? Math.max(0, s - strike) : Math.max(0, strike - s);
    const signed = long ? intrinsic - premium : premium - intrinsic;
    return { x: s, y: Number(signed.toFixed(2)), label: `ST=${s}` };
  });
}

/** Shared educational visuals reused across qualifications. */
export const VISUAL_LIBRARY: VisualLibraryEntry[] = [
  {
    id: "payoff.long-call",
    kind: "chart",
    tags: ["options", "derivatives", "cfa", "frm", "sie", "caia"],
    keywords: ["call option", "long call", "option payoff", "options payoff", "calls and puts", "option payoffs"],
    caption: "Long call payoff: unlimited upside above strike; loss capped at the premium.",
    build: (params) => {
      const K = num(params, "strike", 100);
      const P = num(params, "premium", 5);
      return {
        type: "line",
        title: `Long call payoff (K=${K}, premium=${P})`,
        xLabel: "Spot at expiry (ST)",
        yLabel: "Profit / loss",
        series: [{ name: "Long call", points: payoffPoints(K, P, "call", true) }],
      };
    },
  },
  {
    id: "payoff.long-put",
    kind: "chart",
    tags: ["options", "derivatives"],
    keywords: ["put option", "long put", "protective put", "put payoff"],
    caption: "Long put payoff: gains as spot falls below strike; loss capped at the premium.",
    build: (params) => {
      const K = num(params, "strike", 100);
      const P = num(params, "premium", 5);
      return {
        type: "line",
        title: `Long put payoff (K=${K}, premium=${P})`,
        xLabel: "Spot at expiry (ST)",
        yLabel: "Profit / loss",
        series: [{ name: "Long put", points: payoffPoints(K, P, "put", true) }],
      };
    },
  },
  {
    id: "payoff.call-put-compare",
    kind: "chart",
    tags: ["options", "derivatives"],
    keywords: ["option", "call and put", "payoff diagram", "moneyness", "options overview"],
    caption: "Compare long call vs long put at the same strike and premium.",
    build: (params) => {
      const K = num(params, "strike", 100);
      const P = num(params, "premium", 5);
      return {
        type: "line",
        title: "Long call vs long put payoffs",
        xLabel: "Spot at expiry (ST)",
        yLabel: "Profit / loss",
        series: [
          { name: "Long call", points: payoffPoints(K, P, "call", true) },
          { name: "Long put", points: payoffPoints(K, P, "put", true) },
        ],
      };
    },
  },
  {
    id: "payoff.bull-call-spread",
    kind: "chart",
    tags: ["options", "strategies"],
    keywords: ["bull call", "call spread", "vertical spread", "option strategy", "spreads"],
    caption: "Bull call spread: long lower-K call, short higher-K call — capped upside, lower net premium.",
    build: () => {
      const spots = [80, 90, 100, 110, 120, 130];
      return {
        type: "line",
        title: "Bull call spread (long 100 / short 120)",
        xLabel: "Spot at expiry",
        yLabel: "Profit / loss",
        series: [
          {
            name: "Bull call spread",
            points: spots.map((s) => {
              const long = Math.max(0, s - 100) - 6;
              const short = 2 - Math.max(0, s - 120);
              return { x: s, y: Number((long + short).toFixed(2)) };
            }),
          },
        ],
      };
    },
  },
  {
    id: "parity.put-call",
    kind: "chart",
    tags: ["options", "parity"],
    keywords: ["put-call parity", "put call parity", "synthetic", "parity"],
    caption: "Put-call parity check: call − put should track forward value of stock minus PV(K).",
    build: () => ({
      type: "line",
      title: "Put-call parity illustration (European)",
      xLabel: "Spot S",
      yLabel: "Value",
      series: [
        {
          name: "C − P",
          points: [
            { x: 80, y: -16 },
            { x: 90, y: -7 },
            { x: 100, y: 2 },
            { x: 110, y: 11 },
            { x: 120, y: 20 },
          ],
        },
        {
          name: "S − PV(K)",
          points: [
            { x: 80, y: -16 },
            { x: 90, y: -7 },
            { x: 100, y: 2 },
            { x: 110, y: 11 },
            { x: 120, y: 20 },
          ],
        },
      ],
    }),
  },
  {
    id: "portfolio.sml",
    kind: "chart",
    tags: ["capm", "portfolio"],
    keywords: ["capm", "security market line", "sml", "beta", "expected return", "systematic risk"],
    caption: "Security Market Line: expected return rises linearly with beta under CAPM.",
    build: () => ({
      type: "line",
      title: "Security Market Line (CAPM)",
      xLabel: "Beta",
      yLabel: "Expected return (%)",
      series: [
        {
          name: "SML",
          points: [
            { x: 0, y: 3, label: "rf" },
            { x: 0.5, y: 5.5 },
            { x: 1, y: 8, label: "Market" },
            { x: 1.5, y: 10.5 },
            { x: 2, y: 13 },
          ],
        },
      ],
    }),
  },
  {
    id: "portfolio.efficient-frontier",
    kind: "chart",
    tags: ["portfolio", "mpt"],
    keywords: ["efficient frontier", "cml", "modern portfolio", "diversification", "mean variance", "risk return"],
    caption: "Efficient frontier and CML: risky portfolios on the curve; CML mixes rf with the market portfolio.",
    build: () => ({
      type: "scatter",
      title: "Efficient frontier and CML (illustrative)",
      xLabel: "Risk (σ %)",
      yLabel: "Expected return (%)",
      series: [
        {
          name: "Frontier",
          points: [
            { x: 8, y: 5 },
            { x: 10, y: 6.5 },
            { x: 12, y: 7.5 },
            { x: 15, y: 8.5 },
            { x: 20, y: 9.2 },
            { x: 25, y: 9.6 },
          ],
        },
        {
          name: "CML",
          points: [
            { x: 0, y: 3, label: "rf" },
            { x: 15, y: 8.5, label: "M" },
            { x: 25, y: 12 },
          ],
        },
      ],
    }),
  },
  {
    id: "fi.price-yield",
    kind: "chart",
    tags: ["fixed-income", "duration"],
    keywords: ["duration", "convexity", "price yield", "bond price", "interest rate risk", "modified duration"],
    caption: "Price–yield curve is convex: duration is the tangent; convexity adds curvature.",
    build: () => ({
      type: "line",
      title: "Bond price vs yield (convexity)",
      xLabel: "Yield (%)",
      yLabel: "Price",
      series: [
        {
          name: "Price",
          points: [
            { x: 2, y: 118 },
            { x: 3, y: 110 },
            { x: 4, y: 103 },
            { x: 5, y: 97 },
            { x: 6, y: 92 },
            { x: 7, y: 88 },
            { x: 8, y: 85 },
          ],
        },
        {
          name: "Duration tangent",
          points: [
            { x: 3, y: 112 },
            { x: 5, y: 97 },
            { x: 7, y: 82 },
          ],
        },
      ],
    }),
  },
  {
    id: "risk.var-distribution",
    kind: "chart",
    tags: ["var", "risk", "frm"],
    keywords: ["value at risk", "var", "expected shortfall", "es", "tail risk", "loss distribution"],
    caption: "VaR is a loss quantile; Expected Shortfall averages losses beyond VaR.",
    build: () => ({
      type: "bar",
      title: "Illustrative P&L distribution and 95% VaR",
      xLabel: "P&L bucket",
      yLabel: "Relative frequency",
      series: [
        {
          name: "Frequency",
          points: [
            { x: "-8", y: 2, label: "Tail" },
            { x: "-5", y: 5, label: "VaR region" },
            { x: "-2", y: 12 },
            { x: "0", y: 22 },
            { x: "2", y: 18 },
            { x: "5", y: 10 },
            { x: "8", y: 4 },
          ],
        },
      ],
    }),
  },
  {
    id: "greeks.delta-spot",
    kind: "chart",
    tags: ["greeks", "options", "bsm"],
    keywords: ["delta", "greeks", "black scholes", "bsm", "option valuation", "gamma"],
    caption: "Call delta rises from ~0 to ~1 as spot moves through the strike; gamma peaks near ATM.",
    build: () => ({
      type: "line",
      title: "Call delta vs spot (illustrative)",
      xLabel: "Spot",
      yLabel: "Delta",
      series: [
        {
          name: "Call delta",
          points: [
            { x: 70, y: 0.05 },
            { x: 85, y: 0.2 },
            { x: 100, y: 0.5 },
            { x: 115, y: 0.8 },
            { x: 130, y: 0.95 },
          ],
        },
      ],
    }),
  },
  {
    id: "mgmt.breakeven",
    kind: "chart",
    tags: ["cvp", "management-accounting", "acca", "cima"],
    keywords: ["break even", "breakeven", "cvp", "contribution", "margin of safety", "cost volume", "p/v", "profit volume"],
    caption: "Break-even: total revenue crosses total cost; contribution covers fixed costs first.",
    build: () => ({
      type: "line",
      title: "Cost–volume–profit (break-even)",
      xLabel: "Units",
      yLabel: "USD",
      series: [
        {
          name: "Total revenue",
          points: [
            { x: 0, y: 0 },
            { x: 200, y: 2000 },
            { x: 400, y: 4000 },
            { x: 600, y: 6000 },
          ],
        },
        {
          name: "Total cost",
          points: [
            { x: 0, y: 2000, label: "Fixed cost" },
            { x: 200, y: 3000 },
            { x: 400, y: 4000, label: "Break-even" },
            { x: 600, y: 5000 },
          ],
        },
      ],
    }),
  },
  {
    id: "hf.incentive-fee",
    kind: "chart",
    tags: ["hedge-fund", "caia", "fees"],
    keywords: ["incentive fee", "high water", "hurdle", "performance fee", "hedge fund fee", "waterfall fee"],
    caption: "Incentive fee is zero until NAV clears the effective hurdle / high-water mark, then rises with NAV.",
    build: () => ({
      type: "line",
      title: "Incentive fee vs NAV (HWM + hurdle)",
      xLabel: "NAV end (USD million)",
      yLabel: "Incentive fee (USD million)",
      series: [
        {
          name: "Incentive fee",
          points: [
            { x: 110, y: 0 },
            { x: 115, y: 0 },
            { x: 120, y: 0 },
            { x: 120.75, y: 0 },
            { x: 125, y: 0.85 },
            { x: 130, y: 1.85 },
            { x: 135, y: 2.85 },
          ],
        },
      ],
    }),
  },
  {
    id: "fx.triangular",
    kind: "chart",
    tags: ["fx", "arbitrage"],
    keywords: ["fx", "foreign exchange", "currency", "cross rate", "triangular"],
    caption: "Cross-rate consistency: quoted cross should match the rate implied by the two USD legs.",
    build: () => ({
      type: "bar",
      title: "Quoted vs implied EUR/GBP cross",
      xLabel: "Rate source",
      yLabel: "EUR per GBP",
      series: [
        {
          name: "Rate",
          points: [
            { x: "Quoted", y: 0.86 },
            { x: "Implied", y: 0.88 },
          ],
        },
      ],
    }),
  },
  {
    id: "credit.spread-pd",
    kind: "chart",
    tags: ["credit", "frm"],
    keywords: ["credit spread", "probability of default", "pd", "lgd", "expected loss", "credit risk"],
    caption: "Expected loss ≈ PD × LGD × EAD — spreads compensate for EL plus risk premia.",
    build: () => ({
      type: "line",
      title: "Illustrative credit spread vs PD",
      xLabel: "PD (%)",
      yLabel: "Spread (bp)",
      series: [
        {
          name: "Spread",
          points: [
            { x: 0.5, y: 40 },
            { x: 1, y: 75 },
            { x: 2, y: 140 },
            { x: 4, y: 260 },
            { x: 8, y: 480 },
          ],
        },
      ],
    }),
  },
  {
    id: "esg.risk-return",
    kind: "chart",
    tags: ["esg"],
    keywords: ["esg risk", "esg integration", "sustainability risk", "climate risk", "esg materiality", "transition risk"],
    caption: "ESG integration reframes risk–return: unmanaged ESG risks can shift expected loss and cost of capital.",
    build: () => ({
      type: "scatter",
      title: "Illustrative ESG risk vs expected return",
      xLabel: "ESG risk score (higher = more risk)",
      yLabel: "Expected return (%)",
      series: [
        {
          name: "Issuers",
          points: [
            { x: 2, y: 7 },
            { x: 4, y: 8 },
            { x: 6, y: 9.5 },
            { x: 8, y: 11 },
            { x: 9, y: 10 },
          ],
        },
      ],
    }),
  },
  {
    id: "tech.trend-support",
    kind: "chart",
    tags: ["cmt", "technical"],
    keywords: [
      "support and resistance",
      "support",
      "resistance",
      "trendline",
      "trendlines and channels",
      "chart pattern",
      "reversal patterns",
      "continuation patterns",
      "dow theory",
      "trend phases",
      "trend classification",
    ],
    caption: "Uptrend with higher lows: support along the rising line; break below warns of trend change.",
    build: () => ({
      type: "line",
      title: "Illustrative uptrend with support",
      xLabel: "Time",
      yLabel: "Price",
      series: [
        {
          name: "Price",
          points: [
            { x: "1", y: 100 },
            { x: "2", y: 108 },
            { x: "3", y: 105 },
            { x: "4", y: 114 },
            { x: "5", y: 111 },
            { x: "6", y: 122 },
          ],
        },
        {
          name: "Support",
          points: [
            { x: "1", y: 99 },
            { x: "3", y: 104 },
            { x: "5", y: 109 },
            { x: "6", y: 111.5 },
          ],
        },
      ],
    }),
  },
  {
    id: "tvm.pv-fv",
    kind: "chart",
    tags: ["tvm", "quant"],
    keywords: ["time value", "present value", "future value", "discount", "compounding", "npv"],
    caption: "Compounding grows FV with time; discounting shrinks PV — same cash flow, different dating.",
    build: () => ({
      type: "line",
      title: "Future value of 100 at 8%",
      xLabel: "Years",
      yLabel: "Value",
      series: [
        {
          name: "FV",
          points: [
            { x: 0, y: 100 },
            { x: 1, y: 108 },
            { x: 2, y: 116.6 },
            { x: 3, y: 126 },
            { x: 5, y: 146.9 },
            { x: 10, y: 215.9 },
          ],
        },
      ],
    }),
  },
  {
    id: "macro.phillips",
    kind: "chart",
    tags: ["macro", "economics"],
    keywords: ["inflation", "unemployment", "phillips", "macroeconomics", "monetary"],
    caption: "Short-run Phillips trade-off is illustrative only — expectations and supply shocks shift the curve.",
    build: () => ({
      type: "line",
      title: "Illustrative short-run Phillips curve",
      xLabel: "Unemployment (%)",
      yLabel: "Inflation (%)",
      series: [
        {
          name: "SRPC",
          points: [
            { x: 3, y: 6 },
            { x: 4, y: 4.5 },
            { x: 5, y: 3.5 },
            { x: 6, y: 2.8 },
            { x: 8, y: 2 },
          ],
        },
      ],
    }),
  },
  {
    id: "formula.capm",
    kind: "formula-tex",
    tags: ["capm"],
    keywords: ["capm", "beta", "security market line"],
    caption: "CAPM expected return.",
    latex: "E(R_i)=R_f+\\beta_i\\big(E(R_m)-R_f\\big)",
  },
  {
    id: "formula.duration",
    kind: "formula-tex",
    tags: ["duration"],
    keywords: ["modified duration", "duration", "convexity"],
    caption: "First-order price sensitivity to yield.",
    latex: "\\frac{\\Delta P}{P}\\approx -D_{\\bmod}\\,\\Delta y + \\tfrac{1}{2}C(\\Delta y)^2",
  },
  {
    id: "formula.var",
    kind: "formula-tex",
    tags: ["var"],
    keywords: ["value at risk", "var", "parametric var"],
    caption: "Parametric VaR (normal) sketch.",
    latex: "\\mathrm{VaR}_{\\alpha}=\\mu+\\sigma\\,z_{\\alpha}",
  },
  {
    id: "formula.bsm",
    kind: "formula-tex",
    tags: ["bsm", "options"],
    keywords: ["black scholes", "bsm", "option pricing"],
    caption: "Black–Scholes–Merton call (European).",
    latex: "C=S_0N(d_1)-Ke^{-rT}N(d_2)",
  },
  {
    id: "diagram.accounting-cycle",
    kind: "diagram",
    tags: ["accounting", "cpa", "acca"],
    keywords: ["accounting cycle", "double-entry", "journalise", "trial balance", "closing entries", "ledger accounts"],
    caption: "Accounting cycle from source documents through closing entries.",
    build: () => ({
      type: "cycle",
      title: "Accounting cycle",
      nodes: [
        { id: "a", label: "Transactions", detail: "Source documents", tone: "navy" },
        { id: "b", label: "Journalise", detail: "Debits & credits", tone: "gold" },
        { id: "c", label: "Post", detail: "Ledger accounts", tone: "slate" },
        { id: "d", label: "Trial balance", detail: "Check equality", tone: "slate" },
        { id: "e", label: "Adjust", detail: "Accruals/deferrals", tone: "gold" },
        { id: "f", label: "Statements", detail: "IS / BS / CF", tone: "green" },
        { id: "g", label: "Close", detail: "Temporary accounts", tone: "navy" },
      ],
      footnote: "Exams love adjustment and closing steps — know which accounts close.",
    }),
  },
  {
    id: "diagram.audit-process",
    kind: "diagram",
    tags: ["audit", "acca", "cpa"],
    keywords: ["audit process", "audit risk", "planning", "substantive", "opinion", "assurance"],
    caption: "High-level audit flow from acceptance to opinion.",
    build: () => ({
      type: "flowchart",
      title: "Audit engagement flow",
      nodes: [
        { id: "1", label: "Accept / continue", detail: "Ethics, independence, engagement letter", tone: "navy" },
        { id: "2", label: "Plan", detail: "Materiality, risk assessment, strategy", tone: "gold" },
        { id: "3", label: "Controls testing", detail: "Design & operating effectiveness", tone: "slate" },
        { id: "4", label: "Substantive procedures", detail: "TOD + analytical procedures", tone: "slate" },
        { id: "5", label: "Conclude & report", detail: "Opinion, KAMs / emphasis as needed", tone: "green" },
      ],
      footnote: "Risk assessment drives the nature, timing and extent of further procedures.",
    }),
  },
  {
    id: "diagram.lease-tree",
    kind: "diagram",
    tags: ["leases", "ifrs16", "cpa"],
    keywords: ["lease", "ifrs 16", "finance lease", "operating lease", "rou", "right of use"],
    caption: "Lease classification decision tree (lessee focus).",
    build: () => ({
      type: "tree",
      title: "Lease classification cues (lessee)",
      nodes: [
        { id: "root", label: "Does lease transfer control?", tone: "navy" },
        { id: "fin", label: "Finance / ROU", detail: "Interest + amortisation", tone: "green" },
        { id: "op", label: "Operating pattern", detail: "Single lease expense (US GAAP)", tone: "gold" },
        { id: "short", label: "Short-term / low value", detail: "Exemptions if elected", tone: "slate" },
      ],
      footnote: "IFRS 16 is mostly on-balance for lessees; US GAAP still splits expense patterns.",
    }),
  },
  {
    id: "diagram.securitization",
    kind: "diagram",
    tags: ["securitization", "frm", "caia"],
    keywords: ["securitization", "tranche", "waterfall", "abs", "mbs", "cdo", "senior", "mezzanine"],
    caption: "Tranche waterfall: equity absorbs first loss; seniors have cash-flow priority.",
    build: () => ({
      type: "waterfall",
      title: "Securitization tranche stack",
      nodes: [
        { id: "sen", label: "Senior", detail: "Priority CF", tone: "green" },
        { id: "mez", label: "Mezzanine", detail: "Mid risk", tone: "gold" },
        { id: "eq", label: "Equity", detail: "First loss", tone: "red" },
      ],
      weights: [60, 25, 15],
      footnote: "Losses hit equity first; remaining cash pays seniors before mezzanine/equity.",
    }),
  },
  {
    id: "diagram.risk-mgmt",
    kind: "diagram",
    tags: ["risk", "frm", "erm"],
    keywords: ["risk management", "erm", "risk process", "identify risk", "mitigate"],
    caption: "Enterprise risk management loop.",
    build: () => ({
      type: "cycle",
      title: "Risk management cycle",
      nodes: [
        { id: "i", label: "Identify", detail: "Risk universe", tone: "navy" },
        { id: "a", label: "Assess", detail: "Likelihood × impact", tone: "gold" },
        { id: "m", label: "Mitigate", detail: "Avoid / transfer / control", tone: "slate" },
        { id: "o", label: "Monitor", detail: "KRIs & limits", tone: "green" },
        { id: "r", label: "Report", detail: "Board / regulators", tone: "navy" },
      ],
    }),
  },
  {
    id: "diagram.portfolio-process",
    kind: "diagram",
    tags: ["portfolio", "cfp", "cfa"],
    keywords: ["portfolio management", "ips", "asset allocation", "rebalancing", "investment policy"],
    caption: "Portfolio management process from IPS to monitoring.",
    build: () => ({
      type: "steps",
      title: "Portfolio management process",
      nodes: [
        { id: "1", label: "IPS", detail: "Objectives", tone: "navy" },
        { id: "2", label: "Allocate", detail: "SAA / TAA", tone: "gold" },
        { id: "3", label: "Implement", detail: "Security select", tone: "slate" },
        { id: "4", label: "Monitor", detail: "Rebalance", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.aml",
    kind: "diagram",
    tags: ["aml", "sie", "compliance"],
    keywords: ["aml", "money laundering", "kyc", "sar", "bsa", "cdd"],
    caption: "AML control chain from customer due diligence to reporting.",
    build: () => ({
      type: "flowchart",
      title: "AML control flow",
      nodes: [
        { id: "1", label: "CDD / KYC", detail: "Identify & verify customer", tone: "navy" },
        { id: "2", label: "Monitor", detail: "Transactions vs profile", tone: "gold" },
        { id: "3", label: "Investigate", detail: "Alerts & red flags", tone: "slate" },
        { id: "4", label: "Report", detail: "SAR / STR as required", tone: "red" },
      ],
    }),
  },
  {
    id: "diagram.tax-planning",
    kind: "diagram",
    tags: ["tax", "cfp", "cpa"],
    keywords: ["tax planning", "taxable income", "deduction", "tax computation"],
    caption: "From gross income to tax payable — know each adjustment layer.",
    build: () => ({
      type: "flowchart",
      title: "Individual tax computation sketch",
      nodes: [
        { id: "1", label: "Gross income", tone: "navy" },
        { id: "2", label: "Adjustments", detail: "Above-the-line", tone: "slate" },
        { id: "3", label: "AGI", tone: "gold" },
        { id: "4", label: "Deductions", detail: "Standard / itemised", tone: "slate" },
        { id: "5", label: "Taxable income → tax", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.strategy-cascade",
    kind: "diagram",
    tags: ["strategy", "cima", "acca-sbl"],
    keywords: ["strategy", "mission", "objectives", "balanced scorecard", "csf", "kpi"],
    caption: "Strategy cascades from mission to measurable KPIs.",
    build: () => ({
      type: "steps",
      title: "Strategy cascade",
      nodes: [
        { id: "1", label: "Mission", tone: "navy" },
        { id: "2", label: "Objectives", tone: "gold" },
        { id: "3", label: "CSFs", tone: "slate" },
        { id: "4", label: "KPIs", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.ethics-framework",
    kind: "diagram",
    tags: ["ethics", "cfa", "acca"],
    keywords: ["ethics", "code of ethics", "standards", "fiduciary", "professional conduct"],
    caption: "Ethics decision path used across CFA / ACCA style vignettes.",
    build: () => ({
      type: "flowchart",
      title: "Ethics decision framework",
      nodes: [
        { id: "1", label: "Identify duties", detail: "Clients, employers, market", tone: "navy" },
        { id: "2", label: "Apply standards", detail: "Code / law / firm policy", tone: "gold" },
        { id: "3", label: "Evaluate options", detail: "Disclose / refuse / escalate", tone: "slate" },
        { id: "4", label: "Act & document", detail: "Defendable conclusion", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.cashflow-classes",
    kind: "diagram",
    tags: ["cashflow", "financial-reporting"],
    keywords: ["statement of cash flows", "cash flow statement", "operating investing financing", "cash flow classification"],
    caption: "Classify cash flows before computing free cash flow.",
    build: () => ({
      type: "tree",
      title: "Cash flow statement classes",
      nodes: [
        { id: "root", label: "Cash flow statement", tone: "navy" },
        { id: "o", label: "Operating", detail: "Core business", tone: "green" },
        { id: "i", label: "Investing", detail: "Capex / securities", tone: "gold" },
        { id: "f", label: "Financing", detail: "Debt / equity", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.hedge-types",
    kind: "diagram",
    tags: ["hedge", "derivatives", "accounting"],
    keywords: ["hedge accounting", "fair value hedge", "cash flow hedge", "net investment hedge"],
    caption: "Hedge accounting routes gains/losses differently by hedge type.",
    build: () => ({
      type: "tree",
      title: "Hedge accounting types",
      nodes: [
        { id: "root", label: "Qualifying hedge?", tone: "navy" },
        { id: "fv", label: "Fair value", detail: "P&L both sides", tone: "green" },
        { id: "cf", label: "Cash flow", detail: "OCI → recycle", tone: "gold" },
        { id: "ni", label: "Net investment", detail: "OCI (FX)", tone: "slate" },
      ],
    }),
  },
  {
    id: "fi.bond-ladder",
    kind: "chart",
    tags: ["fixed-income", "immunization", "cfa", "frm"],
    keywords: ["bond ladder", "laddering", "immunization", "cash flow matching", "liability matching", "duration matching"],
    caption: "Bond ladder: staggered maturities spread reinvestment risk; immunization aligns duration with liabilities.",
    build: () => ({
      type: "bar",
      title: "Illustrative bond ladder face amounts",
      xLabel: "Maturity year",
      yLabel: "Face (USD thousand)",
      series: [
        {
          name: "Par outstanding",
          points: [
            { x: "Y1", y: 100 },
            { x: "Y2", y: 100 },
            { x: "Y3", y: 100 },
            { x: "Y4", y: 100 },
            { x: "Y5", y: 100 },
          ],
        },
      ],
    }),
  },
  {
    id: "deriv.forward-futures-payoff",
    kind: "chart",
    tags: ["derivatives", "forwards", "futures", "cfa", "frm"],
    keywords: ["forward contract", "futures contract", "forward vs futures", "forward payoff", "futures payoff"],
    caption: "Long forward/futures payoff rises one-for-one with spot above the delivery price F0.",
    build: (params) => {
      const F = num(params, "forward", 100);
      const spots = [F - 30, F - 15, F, F + 15, F + 30];
      return {
        type: "line",
        title: `Long forward / futures payoff (F0=${F})`,
        xLabel: "Spot at settlement (ST)",
        yLabel: "Profit / loss",
        series: [
          {
            name: "Long forward",
            points: spots.map((s) => ({ x: s, y: Number((s - F).toFixed(2)) })),
          },
        ],
      };
    },
  },
  {
    id: "diagram.swap-net-payment",
    kind: "diagram",
    tags: ["swaps", "derivatives", "cfa", "frm"],
    keywords: ["interest rate swap", "swap net payment", "fixed vs floating", "plain vanilla swap", "net settlement"],
    caption: "Vanilla IRS: counterparties exchange fixed vs floating; only the net difference settles.",
    build: () => ({
      type: "flowchart",
      title: "Interest rate swap net payment",
      nodes: [
        { id: "1", label: "Fixing date", detail: "Observe floating index", tone: "navy" },
        { id: "2", label: "Compute legs", detail: "Fixed coupon vs floating", tone: "gold" },
        { id: "3", label: "Net amount", detail: "Difference only", tone: "slate" },
        { id: "4", label: "Settlement", detail: "Payer / receiver nets", tone: "green" },
      ],
      footnote: "Notional is typically not exchanged on a plain interest rate swap.",
    }),
  },
  {
    id: "diagram.repo-collateral",
    kind: "diagram",
    tags: ["repo", "fixed-income", "frm", "cfa"],
    keywords: ["repo", "repurchase agreement", "collateral", "reverse repo", "haircut", "securities financing"],
    caption: "Repo: cash vs collateral today; reverse the trade plus repo interest at maturity.",
    build: () => ({
      type: "flowchart",
      title: "Repo / collateral flow",
      nodes: [
        { id: "1", label: "t0: Cash out", detail: "Cash lender pays cash", tone: "navy" },
        { id: "2", label: "t0: Collateral in", detail: "Securities posted (haircut)", tone: "gold" },
        { id: "3", label: "Term", detail: "Margin / substitution", tone: "slate" },
        { id: "4", label: "t1: Unwind", detail: "Return securities + repo interest", tone: "green" },
      ],
      footnote: "Haircuts protect the cash lender against collateral price decline.",
    }),
  },
  {
    id: "diagram.basel-capital-stack",
    kind: "diagram",
    tags: ["basel", "capital", "frm", "banking"],
    keywords: ["basel capital", "tier 1 capital", "cet1", "tier 2", "capital stack", "regulatory capital", "pillar 1"],
    caption: "Basel capital stack: CET1 absorbs first loss; Tier 2 is lower-quality gone-concern capital.",
    build: () => ({
      type: "waterfall",
      title: "Basel regulatory capital stack",
      nodes: [
        { id: "cet1", label: "CET1", detail: "Common equity / retained", tone: "green" },
        { id: "at1", label: "AT1", detail: "Additional Tier 1", tone: "gold" },
        { id: "t2", label: "Tier 2", detail: "Subordinated / gone-concern", tone: "slate" },
      ],
      weights: [55, 20, 25],
      footnote: "Going-concern loss absorption concentrates in CET1 and AT1.",
    }),
  },
  {
    id: "risk.lcr-nsfr",
    kind: "chart",
    tags: ["liquidity", "basel", "frm", "banking"],
    keywords: ["liquidity coverage ratio", "lcr", "nsfr", "net stable funding", "hqla", "liquidity risk"],
    caption: "LCR covers short-term stress with HQLA; NSFR requires stable funding over a longer horizon.",
    build: () => ({
      type: "bar",
      title: "Illustrative LCR and NSFR components",
      xLabel: "Metric component",
      yLabel: "Relative size",
      series: [
        {
          name: "Amount",
          points: [
            { x: "HQLA", y: 120, label: "LCR num" },
            { x: "Net outflows", y: 100, label: "LCR den" },
            { x: "ASF", y: 110, label: "NSFR num" },
            { x: "RSF", y: 100, label: "NSFR den" },
          ],
        },
      ],
    }),
  },
  {
    id: "diagram.op-risk-events",
    kind: "diagram",
    tags: ["operational-risk", "frm", "basel"],
    keywords: ["operational risk", "op risk event types", "basel event types", "internal fraud", "business disruption"],
    caption: "Basel operational risk event-type taxonomy used in loss data and capital models.",
    build: () => ({
      type: "tree",
      title: "Operational risk event types",
      nodes: [
        { id: "root", label: "Operational risk events", tone: "navy" },
        { id: "if", label: "Internal fraud", detail: "Theft / unauthorised", tone: "red" },
        { id: "ef", label: "External fraud", detail: "Robbery / cyber", tone: "red" },
        { id: "epws", label: "Employment practices", detail: "Workplace safety", tone: "gold" },
        { id: "cpbp", label: "Clients / products", detail: "Mis-selling", tone: "gold" },
        { id: "dpa", label: "Damage to assets", detail: "Physical loss", tone: "slate" },
        { id: "bdsf", label: "Business disruption", detail: "Systems failure", tone: "slate" },
        { id: "edpm", label: "Execution / process", detail: "Failed delivery", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.adverse-selection-moral-hazard",
    kind: "diagram",
    tags: ["insurance", "information-asymmetry", "frm", "cfa"],
    keywords: ["adverse selection", "moral hazard", "asymmetric information", "insurance market failure", "screening"],
    caption: "Adverse selection is pre-contract hidden type; moral hazard is post-contract hidden action.",
    build: () => ({
      type: "steps",
      title: "Adverse selection vs moral hazard",
      nodes: [
        { id: "1", label: "Hidden type", detail: "High-risk buyers seek cover", tone: "navy" },
        { id: "2", label: "Adverse selection", detail: "Pool worsens → premiums rise", tone: "gold" },
        { id: "3", label: "Contract in force", detail: "Insured less careful", tone: "slate" },
        { id: "4", label: "Moral hazard", detail: "Claims / loss frequency up", tone: "red" },
      ],
      footnote: "Mitigants: underwriting, deductibles, coinsurance, experience rating.",
    }),
  },
  {
    id: "diagram.banking-nim-risks",
    kind: "diagram",
    tags: ["banking", "nim", "frm", "cfa"],
    keywords: ["net interest margin", "nim", "bank balance sheet", "interest rate risk banking", "asset liability"],
    caption: "Bank NIM sits between earning assets and funding costs; ALM risks sit around the balance sheet.",
    build: () => ({
      type: "flowchart",
      title: "Bank NIM and balance-sheet risks",
      nodes: [
        { id: "1", label: "Earning assets", detail: "Loans / securities yield", tone: "green" },
        { id: "2", label: "Funding costs", detail: "Deposits / wholesale", tone: "gold" },
        { id: "3", label: "NIM", detail: "Spread after volumes", tone: "navy" },
        { id: "4", label: "ALM risks", detail: "Rate, liquidity, credit", tone: "red" },
      ],
      footnote: "Duration gaps and deposit beta drive NII sensitivity when rates move.",
    }),
  },
  {
    id: "diagram.working-capital-cycle",
    kind: "diagram",
    tags: ["working-capital", "acca", "cima", "cpa"],
    keywords: ["working capital cycle", "cash conversion cycle", "inventory days", "receivables", "payables"],
    caption: "Working capital cycle: cash → inventory → receivables → cash, shortened by payables float.",
    build: () => ({
      type: "cycle",
      title: "Working capital / cash conversion cycle",
      nodes: [
        { id: "c", label: "Cash", detail: "Outlay", tone: "navy" },
        { id: "i", label: "Inventory", detail: "Days inventory", tone: "gold" },
        { id: "r", label: "Receivables", detail: "Days sales outstanding", tone: "slate" },
        { id: "p", label: "Payables offset", detail: "Days payable", tone: "green" },
      ],
      footnote: "CCC ≈ DIO + DSO − DPO.",
    }),
  },
  {
    id: "diagram.budgeting-process",
    kind: "diagram",
    tags: ["budgeting", "management-accounting", "acca", "cima"],
    keywords: ["budgeting process", "master budget", "budget preparation", "flexible budget", "budget control"],
    caption: "Budgeting cascade from objectives through functional budgets to control and feedback.",
    build: () => ({
      type: "steps",
      title: "Budgeting process",
      nodes: [
        { id: "1", label: "Objectives", detail: "Strategy & targets", tone: "navy" },
        { id: "2", label: "Sales budget", detail: "Demand forecast", tone: "gold" },
        { id: "3", label: "Functional budgets", detail: "Production / overhead", tone: "slate" },
        { id: "4", label: "Master budget", detail: "IS / BS / cash", tone: "green" },
        { id: "5", label: "Control", detail: "Variances & revise", tone: "navy" },
      ],
    }),
  },
  {
    id: "diagram.variance-analysis",
    kind: "diagram",
    tags: ["variances", "management-accounting", "acca", "cima"],
    keywords: ["variance analysis", "standard costing", "price variance", "efficiency variance", "flexible budget variance"],
    caption: "Variance analysis splits total difference into price/rate and quantity/efficiency effects.",
    build: () => ({
      type: "flowchart",
      title: "Variance analysis flow",
      nodes: [
        { id: "1", label: "Standard cost", detail: "Budgeted inputs", tone: "navy" },
        { id: "2", label: "Actual cost", detail: "Incurred", tone: "gold" },
        { id: "3", label: "Total variance", detail: "Actual − standard", tone: "slate" },
        { id: "4", label: "Price / rate", detail: "Input price effect", tone: "green" },
        { id: "5", label: "Usage / efficiency", detail: "Quantity effect", tone: "green" },
      ],
      footnote: "Always state adverse (A) or favourable (F) and investigate controllable causes.",
    }),
  },
  {
    id: "diagram.absorption-vs-marginal",
    kind: "diagram",
    tags: ["costing", "management-accounting", "acca", "cima"],
    keywords: ["absorption costing", "marginal costing", "variable costing", "absorption vs marginal", "fixed overhead absorption"],
    caption: "Absorption puts fixed production overhead into inventory; marginal expenses it in the period.",
    build: () => ({
      type: "tree",
      title: "Absorption vs marginal costing",
      nodes: [
        { id: "root", label: "Product cost method?", tone: "navy" },
        { id: "abs", label: "Absorption", detail: "Variable + fixed OH in stock", tone: "gold" },
        { id: "mar", label: "Marginal", detail: "Variable only; fixed to P&L", tone: "green" },
        { id: "diff", label: "Profit difference", detail: "Inventory change × FOAR", tone: "slate" },
      ],
      footnote: "When inventory rises, absorption profit is typically higher.",
    }),
  },
  {
    id: "diagram.ratio-pyramid",
    kind: "diagram",
    tags: ["ratios", "financial-analysis", "cfa", "acca", "cpa"],
    keywords: ["ratio analysis", "dupont pyramid", "roe decomposition", "profitability ratios", "financial ratios"],
    caption: "Ratio pyramid: ROE decomposes into margin, turnover, and leverage building blocks.",
    build: () => ({
      type: "tree",
      title: "Ratio analysis pyramid",
      nodes: [
        { id: "roe", label: "ROE", detail: "Net income / equity", tone: "navy" },
        { id: "pm", label: "Profit margin", detail: "NI / sales", tone: "green" },
        { id: "at", label: "Asset turnover", detail: "Sales / assets", tone: "gold" },
        { id: "em", label: "Equity multiplier", detail: "Assets / equity", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.ifrs15-five-step",
    kind: "diagram",
    tags: ["revenue", "ifrs15", "acca", "cpa", "cfa"],
    keywords: ["revenue recognition", "ifrs 15", "five step model", "performance obligation", "transaction price"],
    caption: "IFRS 15 five-step model from contract identification to recognising revenue.",
    build: () => ({
      type: "steps",
      title: "IFRS 15 five-step revenue model",
      nodes: [
        { id: "1", label: "Identify contract", detail: "Enforceable rights", tone: "navy" },
        { id: "2", label: "Performance obligations", detail: "Distinct goods/services", tone: "gold" },
        { id: "3", label: "Transaction price", detail: "Variable consideration", tone: "slate" },
        { id: "4", label: "Allocate price", detail: "Relative standalone", tone: "slate" },
        { id: "5", label: "Recognise revenue", detail: "As / when satisfied", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.impairment-cascade",
    kind: "diagram",
    tags: ["impairment", "ifrs", "acca", "cpa"],
    keywords: ["impairment", "ias 36", "recoverable amount", "value in use", "cash generating unit", "impairment loss"],
    caption: "Impairment cascade: indicators → recoverable amount → write-down allocation.",
    build: () => ({
      type: "flowchart",
      title: "Impairment testing cascade",
      nodes: [
        { id: "1", label: "Indicators?", detail: "Internal / external", tone: "navy" },
        { id: "2", label: "Recoverable amount", detail: "Max(VIU, FVLCTS)", tone: "gold" },
        { id: "3", label: "Compare to CA", detail: "Carrying amount", tone: "slate" },
        { id: "4", label: "Impairment loss", detail: "Allocate to CGU / goodwill", tone: "red" },
      ],
      footnote: "Goodwill impairment is not reversed under IFRS.",
    }),
  },
  {
    id: "diagram.consolidation-control",
    kind: "diagram",
    tags: ["consolidation", "ifrs10", "acca", "cpa", "cfa"],
    keywords: ["consolidation", "subsidiary", "equity method", "ifrs 10", "significant influence", "associate vs subsidiary", "control of an investee"],
    caption: "Control → consolidate; significant influence → equity method; otherwise typically FVTPL/FVOCI.",
    build: () => ({
      type: "tree",
      title: "Control vs associate accounting",
      nodes: [
        { id: "root", label: "Investor power / influence?", tone: "navy" },
        { id: "sub", label: "Control (subsidiary)", detail: "Full consolidation", tone: "green" },
        { id: "assoc", label: "Significant influence", detail: "Equity method", tone: "gold" },
        { id: "other", label: "No influence", detail: "Financial asset IFRS 9", tone: "slate" },
      ],
      footnote: "Presumption: >50% voting → control; 20–50% → significant influence (rebuttable).",
    }),
  },
  {
    id: "diagram.coso-components",
    kind: "diagram",
    tags: ["internal-control", "coso", "audit", "cpa", "acca"],
    keywords: ["coso", "internal controls framework", "control environment", "coso components", "control activities"],
    caption: "COSO five components form an integrated internal control system.",
    build: () => ({
      type: "steps",
      title: "COSO internal control components",
      nodes: [
        { id: "1", label: "Control environment", detail: "Tone at the top", tone: "navy" },
        { id: "2", label: "Risk assessment", detail: "Identify & analyse", tone: "gold" },
        { id: "3", label: "Control activities", detail: "Policies & procedures", tone: "slate" },
        { id: "4", label: "Information & communication", detail: "Relevant reporting", tone: "slate" },
        { id: "5", label: "Monitoring", detail: "Ongoing / separate eval", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.fraud-triangle",
    kind: "diagram",
    tags: ["fraud", "audit", "cpa", "acca"],
    keywords: ["fraud triangle", "pressure opportunity rationalization", "occupational fraud", "fraud risk factors"],
    caption: "Fraud triangle: pressure, opportunity, and rationalisation often coexist when fraud occurs.",
    build: () => ({
      type: "tree",
      title: "Fraud triangle",
      nodes: [
        { id: "root", label: "Fraud risk factors", tone: "navy" },
        { id: "p", label: "Pressure / incentive", detail: "Targets, debt, lifestyle", tone: "red" },
        { id: "o", label: "Opportunity", detail: "Weak controls / access", tone: "gold" },
        { id: "r", label: "Rationalisation", detail: "Attitude / excuse", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.ss-claiming",
    kind: "diagram",
    tags: ["retirement", "social-security", "cfp"],
    keywords: ["social security claiming", "retirement benefits", "full retirement age", "delayed retirement credits", "spousal benefits"],
    caption: "Social Security claiming: earlier reduces benefits; delaying past FRA earns credits up to age 70.",
    build: () => ({
      type: "steps",
      title: "Social Security claiming path",
      nodes: [
        { id: "1", label: "Earliest age 62", detail: "Permanently reduced", tone: "gold" },
        { id: "2", label: "Full retirement age", detail: "100% PIA", tone: "navy" },
        { id: "3", label: "Delay to 70", detail: "Delayed credits", tone: "green" },
        { id: "4", label: "Coordinate", detail: "Spousal / survivor", tone: "slate" },
      ],
      footnote: "Breakeven analysis depends on longevity, taxes, and other income sources.",
    }),
  },
  {
    id: "diagram.insurance-needs",
    kind: "diagram",
    tags: ["insurance", "risk-transfer", "cfp"],
    keywords: ["insurance needs analysis", "risk transfer", "human life value", "capital needs", "life insurance planning"],
    caption: "Insurance needs: identify risks, quantify gap, then transfer via appropriate policy design.",
    build: () => ({
      type: "flowchart",
      title: "Insurance needs and risk transfer",
      nodes: [
        { id: "1", label: "Identify risks", detail: "Death, disability, liability", tone: "navy" },
        { id: "2", label: "Quantify needs", detail: "HLV / capital needs", tone: "gold" },
        { id: "3", label: "Retain vs transfer", detail: "Deductible / self-insure", tone: "slate" },
        { id: "4", label: "Select cover", detail: "Amount, term, riders", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.estate-planning",
    kind: "diagram",
    tags: ["estate", "cfp", "wealth"],
    keywords: ["estate planning", "will probate", "trust", "beneficiary designation", "estate transfer"],
    caption: "Estate planning flow from goals through titling and documents to transfer at death.",
    build: () => ({
      type: "flowchart",
      title: "Estate planning flow",
      nodes: [
        { id: "1", label: "Goals & inventory", detail: "Heirs, liquidity, taxes", tone: "navy" },
        { id: "2", label: "Titling & beneficiaries", detail: "Non-probate paths", tone: "gold" },
        { id: "3", label: "Documents", detail: "Will, trusts, POA", tone: "slate" },
        { id: "4", label: "Transfer & settle", detail: "Probate / trust admin", tone: "green" },
      ],
    }),
  },
  {
    id: "alt.liquidity-spectrum",
    kind: "chart",
    tags: ["alternatives", "caia", "cfa", "liquidity"],
    keywords: ["liquidity spectrum", "alternative investments liquidity", "illiquidity premium", "private markets liquidity"],
    caption: "Alternatives span a liquidity spectrum from listed products to multi-year lockups.",
    build: () => ({
      type: "bar",
      title: "Illustrative liquidity (days to exit)",
      xLabel: "Asset class",
      yLabel: "Typical exit horizon (days)",
      series: [
        {
          name: "Days",
          points: [
            { x: "Listed equity", y: 1 },
            { x: "Liquid HF", y: 30 },
            { x: "REIT", y: 2 },
            { x: "PE fund", y: 2555 },
            { x: "Direct RE", y: 180 },
            { x: "Infra", y: 3650 },
          ],
        },
      ],
    }),
  },
  {
    id: "alt.pe-jcurve",
    kind: "chart",
    tags: ["private-equity", "caia", "cfa"],
    keywords: ["j curve", "private equity j-curve", "pe returns", "capital calls", "dpi tvpi"],
    caption: "PE J-curve: early fees and write-downs depress IRR; value realisation lifts later vintages.",
    build: () => ({
      type: "line",
      title: "Illustrative private equity J-curve (IRR %)",
      xLabel: "Years since first close",
      yLabel: "Cumulative IRR (%)",
      series: [
        {
          name: "IRR path",
          points: [
            { x: 0, y: 0 },
            { x: 1, y: -12 },
            { x: 2, y: -8 },
            { x: 3, y: -2 },
            { x: 5, y: 8 },
            { x: 7, y: 14 },
            { x: 10, y: 16 },
          ],
        },
      ],
    }),
  },
  {
    id: "alt.cap-rate-value",
    kind: "chart",
    tags: ["real-estate", "caia", "cfa"],
    keywords: ["cap rate", "capitalisation rate", "property value", "noi", "real estate valuation"],
    caption: "Holding NOI fixed, property value falls as cap rates rise (and vice versa).",
    build: () => ({
      type: "line",
      title: "Property value vs cap rate (NOI = 1m USD)",
      xLabel: "Cap rate (%)",
      yLabel: "Value (USD million)",
      series: [
        {
          name: "Value",
          points: [
            { x: 4, y: 25 },
            { x: 5, y: 20 },
            { x: 6, y: 16.7 },
            { x: 7, y: 14.3 },
            { x: 8, y: 12.5 },
            { x: 10, y: 10 },
          ],
        },
      ],
    }),
  },
  {
    id: "alt.contango-backwardation",
    kind: "chart",
    tags: ["commodities", "caia", "cfa", "cmt"],
    keywords: ["contango", "backwardation", "forward curve", "term structure commodities", "roll yield"],
    caption: "Contango: forwards above spot (negative roll if long nearby); backwardation is the reverse.",
    build: () => ({
      type: "line",
      title: "Commodity forward curves (illustrative)",
      xLabel: "Months to delivery",
      yLabel: "Futures price",
      series: [
        {
          name: "Contango",
          points: [
            { x: 0, y: 100, label: "Spot" },
            { x: 3, y: 103 },
            { x: 6, y: 106 },
            { x: 12, y: 110 },
          ],
        },
        {
          name: "Backwardation",
          points: [
            { x: 0, y: 100 },
            { x: 3, y: 97 },
            { x: 6, y: 94 },
            { x: 12, y: 90 },
          ],
        },
      ],
    }),
  },
  {
    id: "diagram.behavioral-bias-map",
    kind: "diagram",
    tags: ["behavioral", "cfa", "cfp"],
    keywords: ["behavioral bias", "cognitive bias", "emotional bias", "overconfidence", "loss aversion", "herding"],
    caption: "Behavioral bias map: cognitive errors vs emotional biases that distort investor decisions.",
    build: () => ({
      type: "tree",
      title: "Behavioral bias map",
      nodes: [
        { id: "root", label: "Behavioral biases", tone: "navy" },
        { id: "cog", label: "Cognitive", detail: "Belief / information", tone: "gold" },
        { id: "emo", label: "Emotional", detail: "Feelings-driven", tone: "red" },
        { id: "conf", label: "Overconfidence", detail: "Miscalibration", tone: "slate" },
        { id: "loss", label: "Loss aversion", detail: "Prospect theory", tone: "slate" },
        { id: "herd", label: "Herding", detail: "Social proof", tone: "green" },
      ],
    }),
  },
  {
    id: "factor.risk-premia",
    kind: "chart",
    tags: ["factors", "cfa", "portfolio"],
    keywords: ["factor investing", "risk premia", "value premium", "momentum factor", "size premium", "quality factor"],
    caption: "Illustrative long-run factor risk premia — magnitudes vary by sample and definition.",
    build: () => ({
      type: "bar",
      title: "Illustrative annualised factor premia (%)",
      xLabel: "Factor",
      yLabel: "Premium (%)",
      series: [
        {
          name: "Premium",
          points: [
            { x: "Market", y: 5.5 },
            { x: "Size", y: 1.8 },
            { x: "Value", y: 2.4 },
            { x: "Momentum", y: 3.1 },
            { x: "Quality", y: 2.0 },
            { x: "Low vol", y: 1.5 },
          ],
        },
      ],
    }),
  },
  {
    id: "esg.materiality-matrix",
    kind: "chart",
    tags: ["esg", "cfa-esg", "sustainability"],
    keywords: ["esg materiality", "materiality matrix", "double materiality", "sustainability issues", "stakeholder impact"],
    caption: "ESG materiality matrix: prioritise issues high on both business and stakeholder impact.",
    build: () => ({
      type: "scatter",
      title: "Illustrative ESG materiality matrix",
      xLabel: "Business impact (higher = more)",
      yLabel: "Stakeholder impact (higher = more)",
      series: [
        {
          name: "Issues",
          points: [
            { x: 2, y: 3, label: "Office paper" },
            { x: 4, y: 5, label: "D&I" },
            { x: 7, y: 8, label: "Climate" },
            { x: 8, y: 6, label: "Data privacy" },
            { x: 6, y: 7, label: "Supply chain" },
            { x: 3, y: 7, label: "Community" },
          ],
        },
      ],
    }),
  },
  {
    id: "tech.candlestick-anatomy",
    kind: "diagram",
    tags: ["cmt", "technical", "candlesticks"],
    keywords: [
      "candlestick",
      "candlestick patterns",
      "single-candle",
      "dual-candle",
      "triple-candle",
      "candle anatomy",
      "open high low close",
      "wick",
      "real body",
    ],
    caption: "Candlestick anatomy: body shows open–close; wicks show high–low extremes.",
    build: () => ({
      type: "steps",
      title: "Candlestick anatomy",
      nodes: [
        { id: "1", label: "Open", detail: "Session start price", tone: "navy" },
        { id: "2", label: "Close", detail: "Session end price", tone: "gold" },
        { id: "3", label: "Real body", detail: "Open–close range", tone: "slate" },
        { id: "4", label: "Upper wick", detail: "High − body top", tone: "green" },
        { id: "5", label: "Lower wick", detail: "Body bottom − low", tone: "green" },
      ],
      footnote: "Bullish body usually close > open; bearish is the reverse (colour conventions vary).",
    }),
  },
  {
    id: "tech.ma-crossover",
    kind: "chart",
    tags: ["cmt", "technical", "moving-average"],
    keywords: ["moving average crossover", "moving averages", "golden cross", "death cross", "trend following", "sma crossover", "macd"],
    caption: "MA crossover: short MA crossing above long MA is a classic bullish trend signal.",
    build: () => ({
      type: "line",
      title: "Price with short and long moving averages",
      xLabel: "Time",
      yLabel: "Price",
      series: [
        {
          name: "Price",
          points: [
            { x: "1", y: 100 },
            { x: "2", y: 102 },
            { x: "3", y: 101 },
            { x: "4", y: 105 },
            { x: "5", y: 108 },
            { x: "6", y: 112 },
            { x: "7", y: 110 },
            { x: "8", y: 115 },
          ],
        },
        {
          name: "Short MA",
          points: [
            { x: "1", y: 99 },
            { x: "2", y: 100.5 },
            { x: "3", y: 101 },
            { x: "4", y: 103 },
            { x: "5", y: 105.5 },
            { x: "6", y: 108 },
            { x: "7", y: 109.5 },
            { x: "8", y: 112 },
          ],
        },
        {
          name: "Long MA",
          points: [
            { x: "1", y: 100 },
            { x: "2", y: 100.2 },
            { x: "3", y: 100.4 },
            { x: "4", y: 101 },
            { x: "5", y: 102 },
            { x: "6", y: 103.5 },
            { x: "7", y: 105 },
            { x: "8", y: 107 },
          ],
        },
      ],
    }),
  },
  {
    id: "tech.rsi-zones",
    kind: "chart",
    tags: ["cmt", "technical", "momentum"],
    keywords: ["rsi", "relative strength index", "overbought", "oversold", "momentum oscillator"],
    caption: "RSI: readings above ~70 often labelled overbought; below ~30 oversold — context matters.",
    build: () => ({
      type: "line",
      title: "Illustrative RSI with overbought / oversold bands",
      xLabel: "Time",
      yLabel: "RSI",
      series: [
        {
          name: "RSI",
          points: [
            { x: "1", y: 45 },
            { x: "2", y: 55 },
            { x: "3", y: 68 },
            { x: "4", y: 74, label: "Overbought" },
            { x: "5", y: 60 },
            { x: "6", y: 40 },
            { x: "7", y: 28, label: "Oversold" },
            { x: "8", y: 42 },
          ],
        },
        {
          name: "OB 70",
          points: [
            { x: "1", y: 70 },
            { x: "8", y: 70 },
          ],
        },
        {
          name: "OS 30",
          points: [
            { x: "1", y: 30 },
            { x: "8", y: 30 },
          ],
        },
      ],
    }),
  },
  {
    id: "diagram.market-structure",
    kind: "diagram",
    tags: ["markets", "sie", "cfa"],
    keywords: ["primary market", "secondary market", "ipo vs secondary", "market structure primary"],
    caption: "Primary markets raise new capital; secondary markets provide liquidity among investors.",
    build: () => ({
      type: "tree",
      title: "Primary vs secondary markets",
      nodes: [
        { id: "root", label: "Capital markets", tone: "navy" },
        { id: "pri", label: "Primary", detail: "Issuer receives proceeds", tone: "green" },
        { id: "sec", label: "Secondary", detail: "Investor-to-investor", tone: "gold" },
        { id: "ipo", label: "IPO / follow-on", detail: "New issue", tone: "slate" },
        { id: "exch", label: "Exchange / OTC", detail: "Trading venues", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.brokerage-accounts",
    kind: "diagram",
    tags: ["brokerage", "sie", "retail"],
    keywords: ["brokerage account types", "cash account", "margin account", "joint account", "custodial account", "sie account"],
    caption: "Brokerage account types differ by ownership, credit, and suitability constraints.",
    build: () => ({
      type: "tree",
      title: "Brokerage account types",
      nodes: [
        { id: "root", label: "Brokerage accounts", tone: "navy" },
        { id: "cash", label: "Cash", detail: "No borrowed funds", tone: "green" },
        { id: "marg", label: "Margin", detail: "Borrow vs Reg T", tone: "gold" },
        { id: "joint", label: "Joint / TOD", detail: "Ownership forms", tone: "slate" },
        { id: "cust", label: "Custodial / IRA", detail: "Fiduciary wrappers", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.order-types",
    kind: "diagram",
    tags: ["orders", "sie", "trading", "cmt"],
    keywords: ["order types", "market order", "limit order", "stop order", "stop limit", "time in force"],
    caption: "Order types trade off certainty of execution vs certainty of price.",
    build: () => ({
      type: "tree",
      title: "Common equity order types",
      nodes: [
        { id: "root", label: "Order instructions", tone: "navy" },
        { id: "mkt", label: "Market", detail: "Immediate execution", tone: "green" },
        { id: "lmt", label: "Limit", detail: "Price ceiling / floor", tone: "gold" },
        { id: "stp", label: "Stop", detail: "Trigger → market", tone: "slate" },
        { id: "stl", label: "Stop-limit", detail: "Trigger → limit", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.margin-call-flow",
    kind: "diagram",
    tags: ["margin", "sie", "brokerage", "risk"],
    keywords: ["margin call", "maintenance margin", "margin requirement", "forced liquidation", "reg t"],
    caption: "Margin call flow: equity below maintenance → deposit or liquidation to restore requirement.",
    build: () => ({
      type: "flowchart",
      title: "Margin call flow",
      nodes: [
        { id: "1", label: "Long on margin", detail: "Loan + equity", tone: "navy" },
        { id: "2", label: "Price decline", detail: "Equity % falls", tone: "gold" },
        { id: "3", label: "Below maintenance", detail: "Broker issues call", tone: "red" },
        { id: "4", label: "Cure", detail: "Cash / securities in", tone: "slate" },
        { id: "5", label: "Or liquidate", detail: "Sell to restore", tone: "red" },
      ],
    }),
  },
  {
    id: "diagram.wacc-build",
    kind: "diagram",
    tags: ["wacc", "corporate-finance", "cfa", "acca"],
    keywords: ["wacc", "weighted average cost of capital", "cost of equity", "cost of debt", "capital structure"],
    caption: "WACC build: weight after-tax cost of debt and cost of equity by target capital structure.",
    build: () => ({
      type: "steps",
      title: "WACC build-up",
      nodes: [
        { id: "1", label: "Cost of equity", detail: "CAPM / DDM", tone: "navy" },
        { id: "2", label: "Cost of debt", detail: "YTM × (1 − tax)", tone: "gold" },
        { id: "3", label: "Weights", detail: "Target D / E", tone: "slate" },
        { id: "4", label: "WACC", detail: "we·re + wd·rd(1−t)", tone: "green" },
      ],
    }),
  },
  {
    id: "cf.npv-profile",
    kind: "chart",
    tags: ["capital-budgeting", "npv", "cfa", "acca", "cima"],
    keywords: ["npv profile", "capital budgeting", "irr crossover", "discount rate sensitivity", "project npv"],
    caption: "NPV profile: NPV falls as discount rate rises; IRR is where the profile crosses zero.",
    build: () => ({
      type: "line",
      title: "NPV profile vs discount rate",
      xLabel: "Discount rate (%)",
      yLabel: "NPV (USD thousand)",
      series: [
        {
          name: "Project NPV",
          points: [
            { x: 0, y: 80 },
            { x: 5, y: 45 },
            { x: 10, y: 18 },
            { x: 12, y: 8 },
            { x: 15, y: 0, label: "IRR" },
            { x: 20, y: -18 },
          ],
        },
      ],
    }),
  },
  {
    id: "cf.eps-indifference",
    kind: "chart",
    tags: ["leverage", "corporate-finance", "cfa", "acca"],
    keywords: ["eps indifference", "financial leverage", "operating leverage", "indifference point", "capital structure eps"],
    caption: "EPS indifference: plans cross at a critical EBIT where leverage neither helps nor hurts EPS.",
    build: () => ({
      type: "line",
      title: "EPS vs EBIT under two financing plans",
      xLabel: "EBIT (USD million)",
      yLabel: "EPS",
      series: [
        {
          name: "All-equity",
          points: [
            { x: 0, y: 0 },
            { x: 5, y: 0.5 },
            { x: 10, y: 1.0 },
            { x: 15, y: 1.5 },
            { x: 20, y: 2.0 },
          ],
        },
        {
          name: "Debt plan",
          points: [
            { x: 0, y: -0.4 },
            { x: 5, y: 0.3 },
            { x: 10, y: 1.0, label: "Indifference" },
            { x: 15, y: 1.7 },
            { x: 20, y: 2.4 },
          ],
        },
      ],
    }),
  },
  {
    id: "cf.ddm-growth",
    kind: "chart",
    tags: ["equity", "valuation", "cfa", "cfp"],
    keywords: ["dividend discount model", "gordon growth", "ddm", "dividend growth", "intrinsic value"],
    caption: "Gordon growth: higher perpetual growth raises value until g approaches the required return.",
    build: () => ({
      type: "line",
      title: "DDM value vs perpetual growth (r = 10%, D1 = 2)",
      xLabel: "Growth g (%)",
      yLabel: "Price (USD)",
      series: [
        {
          name: "P0 = D1 / (r − g)",
          points: [
            { x: 0, y: 20 },
            { x: 2, y: 25 },
            { x: 4, y: 33.3 },
            { x: 6, y: 50 },
            { x: 7, y: 66.7 },
            { x: 8, y: 100 },
          ],
        },
      ],
    }),
  },
  {
    id: "diagram.dupont-roe-bridge",
    kind: "diagram",
    tags: ["dupont", "roe", "cfa", "acca", "cpa"],
    keywords: ["dupont analysis", "roe bridge", "three step dupont", "five step dupont", "return on equity"],
    caption: "DuPont ROE bridge links operating margin, asset use, interest burden, tax, and leverage.",
    build: () => ({
      type: "steps",
      title: "DuPont ROE bridge",
      nodes: [
        { id: "1", label: "EBIT margin", detail: "Operating profitability", tone: "navy" },
        { id: "2", label: "Asset turnover", detail: "Sales / assets", tone: "gold" },
        { id: "3", label: "Interest burden", detail: "EBT / EBIT", tone: "slate" },
        { id: "4", label: "Tax burden", detail: "NI / EBT", tone: "slate" },
        { id: "5", label: "Leverage", detail: "Assets / equity → ROE", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.immunization-sketch",
    kind: "diagram",
    tags: ["immunization", "fixed-income", "cfa", "frm"],
    keywords: ["immunization strategy", "duration matching", "classical immunization", "rebalancing immunization"],
    caption: "Classical immunization: match duration and PV of assets to liabilities, then rebalance.",
    build: () => ({
      type: "steps",
      title: "Bond immunization sketch",
      nodes: [
        { id: "1", label: "Define liability", detail: "PV and timing", tone: "navy" },
        { id: "2", label: "Match duration", detail: "D_A = D_L", tone: "gold" },
        { id: "3", label: "Match PV", detail: "Asset PV ≥ liability", tone: "slate" },
        { id: "4", label: "Rebalance", detail: "As duration drifts", tone: "green" },
      ],
      footnote: "Convexity and non-parallel yield shifts can break a one-factor immunization.",
    }),
  },
  {
    id: "formula.wacc",
    kind: "formula-tex",
    tags: ["wacc", "corporate-finance"],
    keywords: ["wacc formula", "weighted average cost of capital"],
    caption: "Weighted average cost of capital.",
    latex: "\\mathrm{WACC}=w_e r_e+w_d r_d(1-t_c)",
  },
  {
    id: "formula.gordon",
    kind: "formula-tex",
    tags: ["ddm", "equity"],
    keywords: ["gordon growth model", "dividend discount formula"],
    caption: "Gordon growth (constant-growth DDM).",
    latex: "P_0=\\frac{D_1}{r-g}",
  },
  {
    id: "formula.cap-rate",
    kind: "formula-tex",
    tags: ["real-estate", "caia"],
    keywords: ["cap rate formula", "capitalisation rate", "noi value"],
    caption: "Direct capitalisation.",
    latex: "V=\\frac{\\mathrm{NOI}}{\\text{cap rate}}",
  },
  {
    id: "formula.dupont",
    kind: "formula-tex",
    tags: ["dupont", "roe"],
    keywords: ["dupont formula", "roe decomposition formula"],
    caption: "Three-step DuPont identity.",
    latex: "\\mathrm{ROE}=\\frac{\\mathrm{NI}}{\\mathrm{Sales}}\\times\\frac{\\mathrm{Sales}}{\\mathrm{Assets}}\\times\\frac{\\mathrm{Assets}}{\\mathrm{Equity}}",
  },
  {
    id: "formula.lcr",
    kind: "formula-tex",
    tags: ["liquidity", "basel", "frm"],
    keywords: ["lcr formula", "liquidity coverage ratio formula"],
    caption: "Liquidity coverage ratio.",
    latex: "\\mathrm{LCR}=\\frac{\\mathrm{HQLA}}{\\text{net cash outflows}_{30\\mathrm{d}}}",
  },
  {
    id: "diagram.esg-approaches",
    kind: "diagram",
    tags: ["esg"],
    keywords: [
      "responsible investment",
      "esg investing",
      "screening and thematic",
      "esg approaches",
      "negative screening",
      "thematic approaches",
      "spectrum of approaches",
      "drivers of esg",
    ],
    caption: "ESG approaches span exclusions, ESG integration, thematic, and impact — know where a product sits.",
    build: () => ({
      type: "steps",
      title: "Responsible investment spectrum",
      nodes: [
        { id: "1", label: "Exclude", detail: "Negative screens", tone: "slate" },
        { id: "2", label: "Integrate", detail: "ESG in valuation", tone: "navy" },
        { id: "3", label: "Thematic", detail: "Sustainability themes", tone: "gold" },
        { id: "4", label: "Impact", detail: "Measurable outcomes", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.esg-stewardship",
    kind: "diagram",
    tags: ["esg", "governance"],
    keywords: [
      "stewardship",
      "engagement and dialogue",
      "shareholder voting",
      "escalation",
      "board structure",
      "executive remuneration",
      "ownership structures",
    ],
    caption: "Stewardship: dialogue first, then escalate via voting, filing, or exit.",
    build: () => ({
      type: "flowchart",
      title: "Stewardship escalation ladder",
      nodes: [
        { id: "1", label: "Monitor", detail: "Holdings & controversies", tone: "navy" },
        { id: "2", label: "Engage", detail: "Private dialogue", tone: "gold" },
        { id: "3", label: "Vote / file", detail: "AGM & resolutions", tone: "slate" },
        { id: "4", label: "Escalate / exit", detail: "Coalition or sell", tone: "red" },
      ],
    }),
  },
  {
    id: "diagram.audit-evidence",
    kind: "diagram",
    tags: ["audit", "cpa", "acca"],
    keywords: [
      "audit evidence",
      "audit procedures",
      "tests of controls",
      "substantive procedures",
      "attribute sampling",
      "variables sampling",
      "tests of details",
    ],
    caption: "Further audit procedures follow risk: controls testing and/or substantive work.",
    build: () => ({
      type: "flowchart",
      title: "Audit evidence path",
      nodes: [
        { id: "1", label: "Assess risk", detail: "Assertion-level", tone: "navy" },
        { id: "2", label: "Controls tests", detail: "If reliance planned", tone: "gold" },
        { id: "3", label: "Substantive", detail: "TOD + analytics", tone: "slate" },
        { id: "4", label: "Evaluate", detail: "Misstatements & opinion", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.financial-statements",
    kind: "diagram",
    tags: ["financial-reporting", "cpa", "acca"],
    keywords: [
      "income statement",
      "balance sheet",
      "statement of financial position",
      "conceptual framework",
      "financial reporting standards",
      "earnings per share",
    ],
    caption: "Core statements articulate performance, position, and cash — know articulation links.",
    build: () => ({
      type: "tree",
      title: "Core financial statements",
      nodes: [
        { id: "root", label: "Financial report set", tone: "navy" },
        { id: "is", label: "Income / P&L", detail: "Performance", tone: "green" },
        { id: "bs", label: "Balance sheet", detail: "Position", tone: "gold" },
        { id: "cf", label: "Cash flows", detail: "Liquidity story", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.ipo-process",
    kind: "diagram",
    tags: ["sie", "markets"],
    keywords: [
      "ipo",
      "underwriting process",
      "registration",
      "private placements",
      "regulation d",
      "exempt securities",
      "offering process",
    ],
    caption: "Public offerings move from registration through underwriting to aftermarket trading.",
    build: () => ({
      type: "steps",
      title: "IPO / offering process",
      nodes: [
        { id: "1", label: "Register", detail: "Disclosure filing", tone: "navy" },
        { id: "2", label: "Underwrite", detail: "Syndicate & book", tone: "gold" },
        { id: "3", label: "Price / allocate", detail: "Offer price", tone: "slate" },
        { id: "4", label: "Aftermarket", detail: "Secondary trading", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.packaged-products",
    kind: "diagram",
    tags: ["sie", "funds"],
    keywords: [
      "mutual funds",
      "etfs",
      "investment company",
      "nav and forward pricing",
      "share classes",
      "variable annuities",
      "uits",
      "packaged products",
    ],
    caption: "Packaged products differ by structure, pricing, and fee drag — classify before recommending.",
    build: () => ({
      type: "tree",
      title: "Packaged product map",
      nodes: [
        { id: "root", label: "Investment company?", tone: "navy" },
        { id: "mf", label: "Open-end MF", detail: "NAV / forward price", tone: "green" },
        { id: "etf", label: "ETF", detail: "Exchange + create/redeem", tone: "gold" },
        { id: "uit", label: "UIT / variable", detail: "Fixed / insurance wrapper", tone: "slate" },
      ],
    }),
  },
  {
    id: "diagram.market-abuse",
    kind: "diagram",
    tags: ["sie", "compliance"],
    keywords: [
      "market manipulation",
      "insider trading",
      "prohibited activities",
      "fraud and misrepresentation",
      "prohibited sales practices",
    ],
    caption: "Market abuse and sales-practice violations are bright-line SIE traps — know examples.",
    build: () => ({
      type: "tree",
      title: "Prohibited conduct map",
      nodes: [
        { id: "root", label: "Prohibited?", tone: "navy" },
        { id: "man", label: "Manipulation", detail: "Paint the tape, etc.", tone: "red" },
        { id: "ins", label: "Insider trading", detail: "MNPI misuse", tone: "red" },
        { id: "sales", label: "Sales abuse", detail: "Churning / switching", tone: "gold" },
      ],
    }),
  },
  {
    id: "diagram.finra-framework",
    kind: "diagram",
    tags: ["sie", "regulation"],
    keywords: [
      "finra",
      "sec and its authority",
      "sro",
      "msrb",
      "sipc",
      "registration and qualification",
      "continuing education",
      "outside business activities",
    ],
    caption: "Regulatory stack: SEC → SROs (FINRA/MSRB) → firm supervision → associated person.",
    build: () => ({
      type: "flowchart",
      title: "US securities regulatory stack",
      nodes: [
        { id: "1", label: "SEC", detail: "Federal securities law", tone: "navy" },
        { id: "2", label: "SROs", detail: "FINRA / MSRB rules", tone: "gold" },
        { id: "3", label: "Member firm", detail: "Supervisory system", tone: "slate" },
        { id: "4", label: "Rep conduct", detail: "Registration & CE", tone: "green" },
      ],
    }),
  },
  {
    id: "diagram.ethics-cpa",
    kind: "diagram",
    tags: ["ethics", "cpa"],
    keywords: [
      "aicpa code",
      "independence",
      "covered members",
      "pcaob independence",
      "professional responsibilities",
      "conceptual framework threats",
    ],
    caption: "Independence threats → safeguards → accept or decline. Covered-member rules are examinable.",
    build: () => ({
      type: "flowchart",
      title: "Independence decision path",
      nodes: [
        { id: "1", label: "Identify threat", detail: "Familiarity, self-interest…", tone: "navy" },
        { id: "2", label: "Evaluate significance", detail: "Covered member?", tone: "gold" },
        { id: "3", label: "Apply safeguards", detail: "Firm / profession", tone: "slate" },
        { id: "4", label: "Accept or exit", detail: "Document conclusion", tone: "green" },
      ],
    }),
  },
  {
    id: "tech.volume-breadth",
    kind: "chart",
    tags: ["cmt", "technical"],
    keywords: [
      "volume and price",
      "volume indicators",
      "market breadth",
      "sentiment indicators",
      "breadth and sentiment",
      "confirmation and volume",
    ],
    caption: "Rising price with rising volume/breadth supports trend health; divergences warn.",
    build: () => ({
      type: "line",
      title: "Price vs volume confirmation (illustrative)",
      xLabel: "Time",
      yLabel: "Index",
      series: [
        {
          name: "Price",
          points: [
            { x: "1", y: 100 },
            { x: "2", y: 104 },
            { x: "3", y: 108 },
            { x: "4", y: 107 },
            { x: "5", y: 112 },
          ],
        },
        {
          name: "Volume index",
          points: [
            { x: "1", y: 80 },
            { x: "2", y: 90 },
            { x: "3", y: 95 },
            { x: "4", y: 70 },
            { x: "5", y: 100 },
          ],
        },
      ],
    }),
  },
  {
    id: "tech.behavioral",
    kind: "diagram",
    tags: ["cmt", "behavioral"],
    keywords: [
      "behavioral finance",
      "herding",
      "herding and trends",
      "cognitive bias",
      "sentiment",
    ],
    caption: "Behavioral biases help explain overreaction, herding, and failed pattern reliability.",
    build: () => ({
      type: "tree",
      title: "Behavioral biases technicians watch",
      nodes: [
        { id: "root", label: "Bias family", tone: "navy" },
        { id: "h", label: "Herding", detail: "Trend chasing", tone: "gold" },
        { id: "a", label: "Anchoring", detail: "Stuck on levels", tone: "slate" },
        { id: "o", label: "Overconfidence", detail: "Overtrade signals", tone: "red" },
      ],
    }),
  },
  {
    id: "diagram.budgeting-keywords",
    kind: "diagram",
    tags: ["budgeting", "management-accounting"],
    keywords: ["budgeting and forecasting", "budget process", "master budget", "cash budget", "forecasting"],
    caption: "Budgeting links strategy to resource plans and control via variances.",
    build: () => ({
      type: "steps",
      title: "Budgeting process",
      nodes: [
        { id: "1", label: "Objectives", tone: "navy" },
        { id: "2", label: "Sales budget", tone: "gold" },
        { id: "3", label: "Operating budgets", tone: "slate" },
        { id: "4", label: "Cash & master", tone: "green" },
      ],
    }),
  },
];

export const VISUAL_BY_ID = new Map(VISUAL_LIBRARY.map((entry) => [entry.id, entry]));

export function buildLibraryVisual(
  libraryId: string,
  opts?: {
    id?: string;
    caption?: string;
    params?: Record<string, number | string>;
  }
): CoursewareVisual | null {
  const entry = VISUAL_BY_ID.get(libraryId);
  if (!entry) return null;
  const id = opts?.id ?? `lib-${libraryId}`;
  const caption = opts?.caption ?? entry.caption;
  if (entry.kind === "chart") {
    return {
      kind: "concept-chart",
      id,
      caption,
      placement: "after-body",
      chart: entry.build(opts?.params),
    };
  }
  if (entry.kind === "diagram") {
    return {
      kind: "diagram",
      id,
      caption,
      placement: "after-body",
      diagram: entry.build(opts?.params),
    };
  }
  return {
    kind: "formula-tex",
    id,
    caption,
    placement: "after-formulas",
    latex: entry.latex,
    display: true,
  };
}
