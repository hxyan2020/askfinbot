export interface FinancialExam {
  id: string;
  name: string;
  fullName: string;
  description: string;
  topics: string[];
}

export const FINANCIAL_EXAMS: FinancialExam[] = [
  {
    id: "cfa",
    name: "CFA",
    fullName: "Chartered Financial Analyst",
    description: "Global investment management and portfolio analysis qualification.",
    topics: [
      "Ethics & Professional Standards",
      "Quantitative Methods",
      "Economics",
      "Financial Reporting & Analysis",
      "Corporate Finance",
      "Equity & Fixed Income",
      "Derivatives & Alternative Investments",
      "Portfolio Management",
    ],
  },
  {
    id: "frm",
    name: "FRM",
    fullName: "Financial Risk Manager",
    description: "Risk management certification covering market, credit, and operational risk.",
    topics: [
      "Foundations of Risk Management",
      "Quantitative Analysis",
      "Financial Markets & Products",
      "Valuation & Risk Models",
      "Market Risk Measurement",
      "Credit Risk",
      "Operational Risk",
      "Liquidity & Treasury Risk",
    ],
  },
  {
    id: "cpa",
    name: "CPA",
    fullName: "Certified Public Accountant",
    description: "Professional accounting credential covering audit, tax, and financial reporting.",
    topics: [
      "Auditing & Attestation",
      "Financial Accounting & Reporting",
      "Regulation & Business Law",
      "Taxation",
      "Ethics & Professional Responsibilities",
      "Internal Controls",
    ],
  },
  {
    id: "acca",
    name: "ACCA",
    fullName: "Association of Chartered Certified Accountants",
    description: "International accounting and finance qualification with broad business coverage.",
    topics: [
      "Financial Reporting",
      "Management Accounting",
      "Taxation",
      "Audit & Assurance",
      "Corporate & Business Law",
      "Performance Management",
      "Financial Management",
    ],
  },
  {
    id: "caia",
    name: "CAIA",
    fullName: "Chartered Alternative Investment Analyst",
    description: "Specialist credential for hedge funds, private equity, and alternative assets.",
    topics: [
      "Alternative Investment Structures",
      "Private Equity & Venture Capital",
      "Hedge Fund Strategies",
      "Real Assets",
      "Risk & Portfolio Management",
      "Due Diligence",
    ],
  },
  {
    id: "cfp",
    name: "CFP",
    fullName: "Certified Financial Planner",
    description: "Personal financial planning certification for wealth and retirement planning.",
    topics: [
      "Financial Planning Process",
      "Tax Planning",
      "Retirement & Estate Planning",
      "Investment Planning",
      "Risk Management & Insurance",
      "Ethics & Fiduciary Duty",
    ],
  },
  {
    id: "sie",
    name: "SIE",
    fullName: "Securities Industry Essentials",
    description: "Entry-level securities industry exam covering products, regulations, and practices.",
    topics: [
      "Securities Products",
      "Trading & Markets",
      "Regulatory Framework",
      "Customer Accounts",
      "Prohibited Activities",
    ],
  },
  {
    id: "cima",
    name: "CIMA",
    fullName: "Chartered Institute of Management Accountants",
    description: "Management accounting and strategic business leadership qualification.",
    topics: [
      "Management Accounting",
      "Strategic Management",
      "Financial Strategy",
      "Risk Management",
      "Performance Measurement",
    ],
  },
  {
    id: "cmt",
    name: "CMT",
    fullName: "Chartered Market Technician",
    description: "Technical analysis credential for market timing and chart-based investing.",
    topics: [
      "Chart Analysis",
      "Technical Indicators",
      "Market Interrelationships",
      "Behavioral Finance",
      "Risk Management",
    ],
  },
  {
    id: "cfa-esg",
    name: "CFA ESG",
    fullName: "CFA Certificate in ESG Investing",
    description: "ESG integration, climate risk, and sustainable investment analysis.",
    topics: [
      "ESG Analysis",
      "Climate Risk",
      "Sustainable Finance",
      "Stewardship & Engagement",
      "Regulatory Landscape",
    ],
  },
];

export function getExamById(id: string): FinancialExam | undefined {
  return FINANCIAL_EXAMS.find((exam) => exam.id === id);
}
