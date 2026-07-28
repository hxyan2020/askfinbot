import type { CoursewareBundle } from "./types";
import { area, courseware, lesson } from "./helpers";

/**
 * CFA Certificate in ESG Investing courseware for the single certificate exam.
 * Note: the exam id is "cfa-esg". Module ids follow `cfa-esg-full-m${i+1}` and
 * mirror exams.ts topic order for the "full" level.
 */
export const CFA_ESG_COURSEWARE: CoursewareBundle[] = [
  {
    examId: "cfa-esg",
    levelId: "full",
    modules: [
      courseware({
        moduleId: "cfa-esg-full-m1",
        examId: "cfa-esg",
        levelId: "full",
        title: "Introduction to ESG investing & responsible investment approaches",
        examFormat:
          "CFA Certificate in ESG Investing: computer-based exam of ~100 questions (mix of standalone items and item sets) in 2 hours 20 minutes; pass mark set by standard-setting. This module maps to the foundational chapters.",
        estimatedStudyHours: 22,
        overview:
          "This module introduces ESG investing: what environmental, social, and governance factors are, the history and drivers of responsible investment, and the spectrum of approaches from exclusion to impact investing.",
        whyItMatters:
          "This foundation defines the vocabulary and frameworks used throughout the certificate. Understanding the approaches and their differences is essential and frequently tested.",
        learningOutcomes: [
          "Define ESG and responsible investment.",
          "Explain the drivers behind the growth of ESG investing.",
          "Describe the spectrum of responsible-investment approaches.",
          "Distinguish exclusion, integration, thematic, and impact investing.",
          "Explain the difference between ESG integration and values-based investing.",
          "Describe the role of the investment chain in responsible investment.",
        ],
        syllabusAreas: [
          area(
            "ESG foundations",
            [
              "Definition of ESG and responsible investment",
              "History and drivers",
              "The investment chain",
            ],
            "35–40%"
          ),
          area(
            "Responsible-investment approaches",
            [
              "Screening (negative, positive, norms-based)",
              "ESG integration",
              "Thematic and impact investing",
            ],
            "40–45%"
          ),
          area(
            "Motivations and debates",
            [
              "Financial vs values motivations",
              "Fiduciary duty and ESG",
              "Criticisms and greenwashing",
            ],
            "20–25%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m1-l1",
            "Defining ESG and responsible investment",
            45,
            ["Define ESG", "Explain responsible investment"],
            [
              "ESG refers to environmental, social, and governance factors that can affect value and risk.",
              "Responsible investment incorporates ESG into decisions and stewardship.",
              "ESG is not inherently about ethics — it is about material factors.",
              "Terminology (SRI, ESG, sustainable) overlaps and evolves.",
            ],
            [
              "What do the three letters of ESG stand for?",
              "How does ESG integration differ from ethical investing?",
            ]
          ),
          lesson(
            "cfa-esg-full-m1-l2",
            "Drivers of ESG growth",
            45,
            ["Explain drivers", "Assess trends"],
            [
              "Drivers include regulation, client demand, risk awareness, and evidence of materiality.",
              "The PRI and global initiatives accelerated adoption.",
              "Climate and social issues raised urgency.",
              "Data availability improved ESG analysis.",
            ],
            [
              "What are the main drivers of ESG growth?",
              "How did initiatives like the PRI contribute?",
            ]
          ),
          lesson(
            "cfa-esg-full-m1-l3",
            "The spectrum of approaches",
            50,
            ["Describe approaches", "Place them on a spectrum"],
            [
              "Approaches range from screening to integration to impact.",
              "Screening excludes or includes based on criteria.",
              "Integration embeds ESG into financial analysis.",
              "Impact investing seeks measurable positive outcomes alongside return.",
            ],
            [
              "How does screening differ from integration?",
              "What defines impact investing?",
            ],
            "A fund that simply excludes tobacco uses negative screening; one that adjusts a company's valuation for its carbon-transition risk uses ESG integration — different points on the responsible-investment spectrum."
          ),
          lesson(
            "cfa-esg-full-m1-l4",
            "Screening and thematic approaches",
            40,
            ["Apply screening types", "Explain thematic"],
            [
              "Negative screening excludes; positive screening favours leaders (best-in-class); norms-based screens against standards.",
              "Thematic investing targets themes like clean energy.",
              "Each approach has strengths and limitations.",
              "Approaches can be combined.",
            ],
            [
              "What is best-in-class screening?",
              "What is norms-based screening?",
            ]
          ),
          lesson(
            "cfa-esg-full-m1-l5",
            "Motivations, fiduciary duty, and greenwashing",
            40,
            ["Distinguish motivations", "Recognise greenwashing"],
            [
              "Motivations can be financial (risk/return) or values-based.",
              "Fiduciary duty increasingly recognises material ESG risks.",
              "Greenwashing misrepresents ESG credentials.",
              "Clear definitions and evidence combat greenwashing.",
            ],
            [
              "How can ESG align with fiduciary duty?",
              "What is greenwashing?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "RI spectrum: screening → integration → thematic → impact.",
          "Screening types: negative, positive (best-in-class), norms-based.",
          "Motivations: financial materiality vs values alignment.",
          "Investment chain: asset owners → managers → companies.",
        ],
        commonTraps: [
          "Equating ESG integration with ethical exclusion.",
          "Confusing screening types.",
          "Assuming ESG conflicts with fiduciary duty.",
          "Overlooking greenwashing risk.",
        ],
        examTechnique: [
          "Match each scenario to the correct RI approach.",
          "Distinguish financial from values motivations.",
          "Recall precise definitions of screening types.",
        ],
        practicePlan: [
          "Week 1: ESG foundations and drivers.",
          "Week 2: approaches and screening types.",
          "Week 3: motivations, greenwashing, and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "PRI — Principles for Responsible Investment.",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m2",
        examId: "cfa-esg",
        levelId: "full",
        title: "The ESG market — investors, products & regulation landscape",
        examFormat:
          "Multiple-choice and item-set questions on ESG market participants, products, and regulation.",
        estimatedStudyHours: 20,
        overview:
          "This module surveys the ESG market: the participants (asset owners, managers, service providers), ESG products, market growth, and the evolving regulatory and disclosure landscape.",
        whyItMatters:
          "Understanding market structure and regulation frames how ESG investing operates in practice and where disclosure and standardisation are heading — key context for the exam and the profession.",
        learningOutcomes: [
          "Describe ESG market participants and their roles.",
          "Explain the growth and scale of the ESG market.",
          "Describe ESG products and indices.",
          "Explain the role of ESG ratings and data providers.",
          "Describe the regulatory and disclosure landscape.",
          "Explain the aims of key frameworks and standards.",
        ],
        syllabusAreas: [
          area(
            "Market participants",
            [
              "Asset owners and managers",
              "Service providers and data vendors",
              "The investment chain",
            ],
            "30–35%"
          ),
          area(
            "Products and ratings",
            [
              "ESG funds, indices, and bonds",
              "ESG ratings and their divergence",
              "Green/social/sustainability bonds",
            ],
            "35–40%"
          ),
          area(
            "Regulation and disclosure",
            [
              "Disclosure regimes (overview)",
              "Standards and frameworks (TCFD, etc.)",
              "Stewardship codes",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m2-l1",
            "Market participants",
            45,
            ["Describe participants", "Explain roles"],
            [
              "Asset owners set mandates; managers implement them.",
              "Service providers supply data, ratings, and research.",
              "Each link in the investment chain influences ESG outcomes.",
              "Alignment across the chain matters.",
            ],
            [
              "What is the role of an asset owner in ESG?",
              "How do service providers support ESG investing?",
            ]
          ),
          lesson(
            "cfa-esg-full-m2-l2",
            "ESG products and indices",
            50,
            ["Describe products", "Explain index construction"],
            [
              "ESG funds range from screened to integrated to thematic.",
              "ESG indices apply methodologies to weight or exclude constituents.",
              "Product labels vary and require scrutiny.",
              "Index choice affects ESG exposure.",
            ],
            [
              "How do ESG indices differ from conventional indices?",
              "Why scrutinise ESG product labels?",
            ]
          ),
          lesson(
            "cfa-esg-full-m2-l3",
            "ESG ratings and data",
            50,
            ["Explain ratings", "Assess divergence"],
            [
              "ESG ratings score companies on ESG performance.",
              "Ratings from different providers often diverge due to methodology.",
              "Divergence reflects differing definitions and weights.",
              "Users must understand rating methodologies.",
            ],
            [
              "Why do ESG ratings from different providers diverge?",
              "What should users understand about ratings?",
            ],
            "Two providers may rate the same company very differently because one weights carbon emissions heavily while another emphasises governance — so an ESG score must be read alongside its methodology."
          ),
          lesson(
            "cfa-esg-full-m2-l4",
            "Green, social, and sustainability bonds",
            40,
            ["Describe labelled bonds", "Explain principles"],
            [
              "Green bonds fund environmental projects; social bonds fund social outcomes.",
              "Sustainability bonds fund a mix; sustainability-linked bonds tie terms to targets.",
              "Principles (e.g. ICMA) guide labelling and reporting.",
              "Use-of-proceeds and reporting matter for credibility.",
            ],
            [
              "How does a sustainability-linked bond differ from a green bond?",
              "Why do use-of-proceeds and reporting matter?",
            ]
          ),
          lesson(
            "cfa-esg-full-m2-l5",
            "Regulation and disclosure",
            40,
            ["Describe regulation", "Explain frameworks"],
            [
              "Disclosure regimes increasingly require ESG information.",
              "Frameworks like TCFD standardise climate disclosure.",
              "Stewardship codes set engagement expectations.",
              "Regulation aims to reduce greenwashing and improve comparability.",
            ],
            [
              "What is the aim of the TCFD framework?",
              "What do stewardship codes address?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Investment chain: asset owners → managers → companies (with service providers).",
          "Labelled bonds: green, social, sustainability, sustainability-linked.",
          "Ratings divergence stems from methodology and weighting differences.",
          "Disclosure aims: comparability + anti-greenwashing.",
        ],
        commonTraps: [
          "Assuming ESG ratings are standardised and comparable.",
          "Confusing green with sustainability-linked bonds.",
          "Taking product labels at face value.",
          "Overlooking the role of stewardship codes.",
        ],
        examTechnique: [
          "Match each participant and product to its role.",
          "Explain ratings divergence via methodology.",
          "Distinguish labelled-bond types.",
        ],
        practicePlan: [
          "Week 1: participants and products.",
          "Week 2: ratings and labelled bonds.",
          "Week 3: regulation, disclosure, and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "TCFD recommendations; ICMA bond principles.",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m3",
        examId: "cfa-esg",
        levelId: "full",
        title: "Environmental factors — climate, natural capital & transition risk",
        examFormat:
          "Multiple-choice and item-set questions on environmental issues and their investment implications.",
        estimatedStudyHours: 22,
        overview:
          "This module covers environmental factors: climate change, natural capital, biodiversity, pollution, and resource use, and the physical and transition risks (and opportunities) they create for investments.",
        whyItMatters:
          "Environmental factors, especially climate, are among the most material and heavily tested ESG issues. Understanding physical and transition risk is central to ESG analysis.",
        learningOutcomes: [
          "Describe key environmental issues and megatrends.",
          "Explain climate change and greenhouse-gas concepts.",
          "Distinguish physical and transition climate risk.",
          "Explain natural capital and biodiversity.",
          "Analyse environmental risks and opportunities for companies.",
          "Explain scope 1, 2, and 3 emissions.",
        ],
        syllabusAreas: [
          area(
            "Climate change",
            [
              "Greenhouse gases and the carbon cycle",
              "Physical vs transition risk",
              "Scope 1, 2, 3 emissions",
            ],
            "40–45%"
          ),
          area(
            "Natural capital and resources",
            [
              "Biodiversity and ecosystems",
              "Water, land, and pollution",
              "Resource scarcity",
            ],
            "30–35%"
          ),
          area(
            "Investment implications",
            [
              "Environmental risks and opportunities",
              "Stranded assets",
              "Company analysis",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m3-l1",
            "Climate change fundamentals",
            50,
            ["Explain climate basics", "Describe GHGs"],
            [
              "Greenhouse gases trap heat and drive climate change.",
              "Carbon dioxide is the dominant anthropogenic GHG.",
              "Global agreements (e.g. Paris) set temperature goals.",
              "Climate change poses systemic investment risk.",
            ],
            [
              "What is the dominant anthropogenic greenhouse gas?",
              "Why is climate change a systemic risk?",
            ]
          ),
          lesson(
            "cfa-esg-full-m3-l2",
            "Physical and transition risk",
            55,
            ["Distinguish risk types", "Assess impacts"],
            [
              "Physical risk includes acute (storms) and chronic (sea-level rise) impacts.",
              "Transition risk arises from policy, technology, and market shifts to a low-carbon economy.",
              "Both create financial risk and opportunity.",
              "Stranded assets can result from transition.",
            ],
            [
              "What is the difference between physical and transition risk?",
              "What are stranded assets?",
            ],
            "A coal power plant faces transition risk: carbon policy and cheaper renewables could render it uneconomic before the end of its useful life, becoming a stranded asset."
          ),
          lesson(
            "cfa-esg-full-m3-l3",
            "Scope 1, 2, and 3 emissions",
            45,
            ["Classify emissions", "Explain measurement"],
            [
              "Scope 1: direct emissions from owned sources.",
              "Scope 2: indirect emissions from purchased energy.",
              "Scope 3: value-chain emissions (often the largest and hardest to measure).",
              "Emissions data quality varies, especially for Scope 3.",
            ],
            [
              "What are Scope 3 emissions?",
              "Why is Scope 3 data challenging?",
            ]
          ),
          lesson(
            "cfa-esg-full-m3-l4",
            "Natural capital and biodiversity",
            40,
            ["Explain natural capital", "Assess biodiversity risk"],
            [
              "Natural capital is the stock of natural resources providing benefits.",
              "Biodiversity loss threatens ecosystem services.",
              "Water, land, and pollution are key environmental issues.",
              "Nature-related risk is an emerging focus.",
            ],
            [
              "What is natural capital?",
              "Why does biodiversity loss matter to investors?",
            ]
          ),
          lesson(
            "cfa-esg-full-m3-l5",
            "Investment implications",
            40,
            ["Analyse implications", "Identify opportunities"],
            [
              "Environmental factors create both risks and opportunities.",
              "Carbon-intensive sectors face transition risk; solutions providers benefit.",
              "Analysis should assess materiality by sector.",
              "Environmental factors affect valuation and risk.",
            ],
            [
              "How can environmental factors create opportunities?",
              "Why assess environmental materiality by sector?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Climate risk: physical (acute/chronic) vs transition (policy/tech/market).",
          "Emissions: Scope 1 (direct) + Scope 2 (energy) + Scope 3 (value chain).",
          "Stranded assets = assets devalued by transition.",
          "Natural capital = stock of natural resources providing services.",
        ],
        commonTraps: [
          "Confusing physical and transition risk.",
          "Misclassifying Scope 1/2/3 emissions.",
          "Ignoring Scope 3 due to data difficulty.",
          "Overlooking environmental opportunities.",
        ],
        examTechnique: [
          "Classify the emission scope precisely.",
          "Distinguish physical from transition risk.",
          "Assess materiality by sector.",
        ],
        practicePlan: [
          "Week 1: climate fundamentals and risk types.",
          "Week 2: emissions and natural capital.",
          "Week 3: investment implications and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "GHG Protocol; TCFD climate risk categories.",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m4",
        examId: "cfa-esg",
        levelId: "full",
        title: "Social factors — human capital, rights & community impacts",
        examFormat:
          "Multiple-choice and item-set questions on social issues and their investment relevance.",
        estimatedStudyHours: 20,
        overview:
          "This module covers social factors: human capital, labour standards, human rights, diversity, product responsibility, and community and supply-chain impacts, and how they affect companies and investments.",
        whyItMatters:
          "Social factors affect operational risk, reputation, and long-term value. They are harder to quantify than environmental factors but materially important and tested.",
        learningOutcomes: [
          "Describe key social issues and their relevance.",
          "Explain human capital and labour-standard factors.",
          "Describe human-rights considerations in investment.",
          "Explain supply-chain and community impacts.",
          "Analyse social risks and opportunities for companies.",
          "Explain the challenges of measuring social factors.",
        ],
        syllabusAreas: [
          area(
            "Human capital and labour",
            [
              "Employee relations and health/safety",
              "Diversity and inclusion",
              "Human capital development",
            ],
            "35–40%"
          ),
          area(
            "Human rights and supply chains",
            [
              "Human rights and modern slavery",
              "Supply-chain standards",
              "Community relations",
            ],
            "30–35%"
          ),
          area(
            "Products and measurement",
            [
              "Product responsibility and safety",
              "Data privacy",
              "Measuring social factors",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m4-l1",
            "Human capital and labour standards",
            45,
            ["Explain human capital", "Assess labour factors"],
            [
              "Human capital includes skills, engagement, and health/safety.",
              "Poor labour practices create operational and reputational risk.",
              "Employee engagement links to productivity.",
              "Health and safety failures can be material.",
            ],
            [
              "Why is human capital material to company performance?",
              "How can poor labour practices create risk?",
            ]
          ),
          lesson(
            "cfa-esg-full-m4-l2",
            "Diversity and inclusion",
            40,
            ["Explain D&I", "Link to performance"],
            [
              "Diversity and inclusion can enhance decision-making and talent.",
              "Board and workforce diversity are common metrics.",
              "Inclusion affects retention and culture.",
              "D&I is increasingly disclosed and analysed.",
            ],
            [
              "How can diversity affect company performance?",
              "What D&I metrics are commonly used?",
            ]
          ),
          lesson(
            "cfa-esg-full-m4-l3",
            "Human rights and supply chains",
            50,
            ["Assess human-rights risk", "Analyse supply chains"],
            [
              "Human-rights issues include modern slavery and fair labour.",
              "Supply chains can hide significant social risk.",
              "Regulation increasingly requires supply-chain due diligence.",
              "Reputational and legal risks can be severe.",
            ],
            [
              "Why are supply chains a source of social risk?",
              "What is modern-slavery risk?",
            ],
            "An apparel company may score well on its own operations but face severe human-rights risk deep in its supply chain, where labour standards are hardest to monitor and enforce."
          ),
          lesson(
            "cfa-esg-full-m4-l4",
            "Product responsibility and privacy",
            40,
            ["Explain product responsibility", "Assess data privacy"],
            [
              "Product safety and quality affect liability and reputation.",
              "Data privacy is a growing social and regulatory issue.",
              "Misuse of data creates legal and reputational risk.",
              "Responsible products build trust.",
            ],
            [
              "Why is data privacy a social factor?",
              "How does product responsibility affect risk?",
            ]
          ),
          lesson(
            "cfa-esg-full-m4-l5",
            "Measuring social factors",
            35,
            ["Explain measurement challenges", "Analyse materiality"],
            [
              "Social factors are often qualitative and hard to quantify.",
              "Data gaps and comparability issues persist.",
              "Materiality varies by sector and context.",
              "Analysis combines data with judgement.",
            ],
            [
              "Why are social factors hard to measure?",
              "How does social materiality vary by sector?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Social factor map: human capital + human rights + community + products.",
          "Supply-chain risk often exceeds own-operations risk.",
          "Materiality varies by sector and geography.",
          "Measurement: qualitative data + judgement (data gaps common).",
        ],
        commonTraps: [
          "Underweighting social factors because they are hard to measure.",
          "Ignoring supply-chain social risk.",
          "Overlooking data privacy as a social issue.",
          "Applying one-size-fits-all materiality.",
        ],
        examTechnique: [
          "Assess social materiality by sector and context.",
          "Consider the full supply chain.",
          "Combine data with qualitative judgement.",
        ],
        practicePlan: [
          "Week 1: human capital and D&I.",
          "Week 2: human rights and supply chains.",
          "Week 3: products, measurement, and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "UN Guiding Principles on Business and Human Rights.",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m5",
        examId: "cfa-esg",
        levelId: "full",
        title: "Governance factors — boards, ownership & corporate behaviour",
        examFormat:
          "Multiple-choice and item-set questions on corporate governance and its investment relevance.",
        estimatedStudyHours: 20,
        overview:
          "This module covers governance factors: board structure, ownership, shareholder rights, executive remuneration, and corporate behaviour, and how governance quality affects risk and value.",
        whyItMatters:
          "Governance is often the most established and quantifiable ESG pillar, with a long track record of linking to performance and risk. It is central to ESG analysis and heavily tested.",
        learningOutcomes: [
          "Describe key corporate-governance factors.",
          "Explain board structure, independence, and effectiveness.",
          "Analyse ownership structures and shareholder rights.",
          "Explain executive remuneration and alignment.",
          "Describe governance codes and their aims.",
          "Analyse governance risks and their financial impact.",
        ],
        syllabusAreas: [
          area(
            "Board and management",
            [
              "Board structure and independence",
              "Committees and effectiveness",
              "Executive remuneration",
            ],
            "40–45%"
          ),
          area(
            "Ownership and rights",
            [
              "Ownership structures",
              "Shareholder rights and voting",
              "Minority protection",
            ],
            "30–35%"
          ),
          area(
            "Behaviour and codes",
            [
              "Business ethics and behaviour",
              "Governance codes",
              "Governance risk and value",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m5-l1",
            "Board structure and effectiveness",
            50,
            ["Analyse board structure", "Assess effectiveness"],
            [
              "Board independence and balance support effective oversight.",
              "Committees (audit, remuneration, nomination) strengthen governance.",
              "Separating chair and CEO improves accountability.",
              "Board diversity and skills matter.",
            ],
            [
              "Why is board independence important?",
              "What committees support good governance?",
            ]
          ),
          lesson(
            "cfa-esg-full-m5-l2",
            "Ownership structures",
            45,
            ["Analyse ownership", "Assess implications"],
            [
              "Ownership can be dispersed or concentrated.",
              "Dual-class shares can entrench control.",
              "Concentrated ownership affects minority-shareholder rights.",
              "Ownership shapes governance dynamics.",
            ],
            [
              "How do dual-class shares affect governance?",
              "Why does ownership structure matter to minority shareholders?",
            ]
          ),
          lesson(
            "cfa-esg-full-m5-l3",
            "Shareholder rights and voting",
            45,
            ["Explain shareholder rights", "Assess protections"],
            [
              "Voting rights let shareholders influence key decisions.",
              "Rights vary across jurisdictions and structures.",
              "Minority protections guard against expropriation.",
              "Weak rights raise governance risk.",
            ],
            [
              "What decisions do shareholder votes typically cover?",
              "Why do minority protections matter?",
            ]
          ),
          lesson(
            "cfa-esg-full-m5-l4",
            "Executive remuneration",
            40,
            ["Analyse remuneration", "Assess alignment"],
            [
              "Remuneration should align executives with long-term value.",
              "Poorly designed pay can incentivise short-termism or excessive risk.",
              "Pay structure and disclosure are governance signals.",
              "Say-on-pay gives shareholders a voice.",
            ],
            [
              "How can remuneration misalign incentives?",
              "What is 'say on pay'?",
            ],
            "A pay plan that rewards short-term share-price spikes can encourage excessive risk-taking; well-designed long-term incentives better align executives with sustainable value creation."
          ),
          lesson(
            "cfa-esg-full-m5-l5",
            "Corporate behaviour and codes",
            35,
            ["Assess behaviour", "Explain codes"],
            [
              "Business ethics, corruption, and tax behaviour are governance factors.",
              "Governance codes set principles and expectations.",
              "Governance failures can be financially severe.",
              "Strong governance reduces risk.",
            ],
            [
              "How do governance codes influence behaviour?",
              "Why can governance failures be financially severe?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Board quality: independence + committees + separation of roles + diversity.",
          "Ownership: dispersed vs concentrated; dual-class entrenchment.",
          "Remuneration alignment: long-term incentives over short-term spikes.",
          "Governance codes: principles for accountability and transparency.",
        ],
        commonTraps: [
          "Overlooking dual-class share risks.",
          "Assuming pay level equals pay alignment.",
          "Ignoring minority-shareholder protections.",
          "Treating governance as purely a checklist.",
        ],
        examTechnique: [
          "Assess board independence and structure first.",
          "Link ownership structure to shareholder-rights implications.",
          "Evaluate remuneration on alignment, not level.",
        ],
        practicePlan: [
          "Week 1: board structure and effectiveness.",
          "Week 2: ownership and shareholder rights.",
          "Week 3: remuneration, behaviour, and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "Corporate governance codes (e.g. UK, OECD principles).",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m6",
        examId: "cfa-esg",
        levelId: "full",
        title: "Engagement & stewardship — voting, dialogue & escalation",
        examFormat:
          "Multiple-choice and item-set questions on stewardship, engagement, and voting.",
        estimatedStudyHours: 18,
        overview:
          "This module covers stewardship and engagement: how investors use dialogue, voting, and escalation to influence company behaviour, and the frameworks and evidence behind active ownership.",
        whyItMatters:
          "Stewardship is how investors turn ESG analysis into real-world influence and value protection. It is a distinct, tested area and central to responsible investment.",
        learningOutcomes: [
          "Define stewardship and engagement.",
          "Explain the tools of active ownership: voting, dialogue, escalation.",
          "Describe collaborative engagement.",
          "Explain proxy voting and its process.",
          "Assess the effectiveness of engagement.",
          "Describe stewardship codes and reporting.",
        ],
        syllabusAreas: [
          area(
            "Stewardship foundations",
            [
              "Definition and rationale",
              "Stewardship codes",
              "Active vs passive ownership",
            ],
            "30–35%"
          ),
          area(
            "Engagement tools",
            [
              "Dialogue and engagement",
              "Escalation strategies",
              "Collaborative engagement",
            ],
            "35–40%"
          ),
          area(
            "Voting and effectiveness",
            [
              "Proxy voting process",
              "Voting policies",
              "Measuring engagement outcomes",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m6-l1",
            "Stewardship foundations",
            45,
            ["Define stewardship", "Explain rationale"],
            [
              "Stewardship is the responsible allocation and oversight of capital.",
              "It aims to protect and enhance long-term value.",
              "Stewardship codes set expectations for investors.",
              "Even passive owners can be active stewards.",
            ],
            [
              "What is stewardship?",
              "Can index investors exercise stewardship?",
            ]
          ),
          lesson(
            "cfa-esg-full-m6-l2",
            "Engagement and dialogue",
            50,
            ["Explain engagement", "Describe dialogue"],
            [
              "Engagement is dialogue with companies to influence ESG practices.",
              "It can address risks, disclosure, or strategy.",
              "Constructive engagement builds influence over time.",
              "Objectives should be clear and tracked.",
            ],
            [
              "What is the purpose of engagement?",
              "What makes engagement constructive?",
            ]
          ),
          lesson(
            "cfa-esg-full-m6-l3",
            "Escalation strategies",
            45,
            ["Describe escalation", "Apply escalation"],
            [
              "If dialogue fails, investors can escalate.",
              "Escalation includes public statements, voting against management, and shareholder resolutions.",
              "Divestment is a last resort.",
              "Escalation increases pressure progressively.",
            ],
            [
              "What escalation tools can investors use?",
              "When is divestment considered?",
            ],
            "After repeated unproductive dialogue on climate disclosure, an investor might escalate by voting against directors, co-filing a shareholder resolution, and finally divesting if concerns remain unaddressed."
          ),
          lesson(
            "cfa-esg-full-m6-l4",
            "Proxy voting",
            40,
            ["Explain voting", "Describe policies"],
            [
              "Proxy voting lets investors vote on company resolutions.",
              "Voting policies guide decisions consistently.",
              "Proxy advisers provide recommendations.",
              "Voting is a key stewardship tool.",
            ],
            [
              "What is proxy voting?",
              "What role do proxy advisers play?",
            ]
          ),
          lesson(
            "cfa-esg-full-m6-l5",
            "Collaboration and effectiveness",
            30,
            ["Explain collaboration", "Measure outcomes"],
            [
              "Collaborative engagement pools investor influence.",
              "Initiatives coordinate on shared objectives.",
              "Effectiveness is measured by outcomes, not just activity.",
              "Reporting demonstrates stewardship.",
            ],
            [
              "Why engage collaboratively?",
              "How is engagement effectiveness measured?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Active ownership tools: dialogue → voting → escalation → divestment.",
          "Escalation ladder: private dialogue → public → resolutions → divest.",
          "Collaboration pools influence across investors.",
          "Effectiveness = outcomes achieved, not activity volume.",
        ],
        commonTraps: [
          "Assuming passive investors cannot steward.",
          "Treating divestment as a first step.",
          "Measuring engagement by activity rather than outcomes.",
          "Overlooking collaborative engagement.",
        ],
        examTechnique: [
          "Order the escalation tools correctly.",
          "Distinguish engagement from screening.",
          "Focus on outcomes when assessing effectiveness.",
        ],
        practicePlan: [
          "Week 1: stewardship foundations.",
          "Week 2: engagement and escalation.",
          "Week 3: voting, collaboration, and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "Stewardship codes (e.g. UK Stewardship Code).",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m7",
        examId: "cfa-esg",
        levelId: "full",
        title: "ESG analysis, materiality, valuation & integration techniques",
        examFormat:
          "Multiple-choice and item-set questions applying ESG analysis and integration to securities.",
        estimatedStudyHours: 24,
        overview:
          "This module covers how ESG factors are analysed and integrated into investment decisions: assessing materiality, adjusting financial analysis and valuation, and integrating ESG across equity and fixed income.",
        whyItMatters:
          "Integration is the analytical core of the certificate: turning ESG information into better risk-adjusted decisions. It is heavily tested and central to practice.",
        learningOutcomes: [
          "Assess the financial materiality of ESG factors.",
          "Integrate ESG into financial statement and ratio analysis.",
          "Adjust valuation models for ESG factors.",
          "Integrate ESG into equity and fixed-income analysis.",
          "Explain qualitative and quantitative integration techniques.",
          "Avoid common integration pitfalls.",
        ],
        syllabusAreas: [
          area(
            "Materiality and analysis",
            [
              "Financial materiality and materiality maps",
              "ESG in financial analysis",
              "Qualitative vs quantitative integration",
            ],
            "35–40%"
          ),
          area(
            "Valuation integration",
            [
              "Adjusting cash flows and discount rates",
              "Scenario analysis",
              "ESG in multiples",
            ],
            "35–40%"
          ),
          area(
            "Asset-class integration",
            [
              "Equity integration",
              "Fixed-income integration",
              "Pitfalls",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m7-l1",
            "Materiality assessment",
            50,
            ["Assess materiality", "Use materiality maps"],
            [
              "Financial materiality means an ESG factor can affect value or risk.",
              "Materiality varies by sector (e.g. SASB-style maps).",
              "Focus analysis on material factors.",
              "Immaterial factors add noise, not value.",
            ],
            [
              "What does financial materiality mean?",
              "Why does materiality vary by sector?",
            ]
          ),
          lesson(
            "cfa-esg-full-m7-l2",
            "ESG in financial analysis",
            50,
            ["Integrate into analysis", "Adjust forecasts"],
            [
              "ESG factors can affect revenues, costs, and risk.",
              "Integrate ESG into financial-statement and ratio analysis.",
              "Adjust forecasts for material ESG effects.",
              "Qualitative and quantitative methods complement.",
            ],
            [
              "How can ESG factors affect a company's costs?",
              "How is ESG integrated into forecasts?",
            ]
          ),
          lesson(
            "cfa-esg-full-m7-l3",
            "Valuation integration",
            55,
            ["Adjust valuation", "Use scenarios"],
            [
              "ESG can be reflected in cash-flow forecasts, the discount rate, or terminal value.",
              "Scenario analysis captures uncertain ESG outcomes (e.g. carbon prices).",
              "Multiples can be adjusted for ESG quality.",
              "Transparency about adjustments is important.",
            ],
            [
              "Where in a DCF can ESG factors be reflected?",
              "Why use scenario analysis for ESG?",
            ],
            "To integrate transition risk, an analyst might reduce a carbon-intensive company's projected cash flows under a high-carbon-price scenario and raise its discount rate to reflect elevated risk."
          ),
          lesson(
            "cfa-esg-full-m7-l4",
            "Equity and fixed-income integration",
            40,
            ["Integrate in equity", "Integrate in fixed income"],
            [
              "Equity integration focuses on value and growth impacts.",
              "Fixed-income integration focuses on default risk and creditworthiness.",
              "ESG can affect credit spreads and ratings.",
              "Integration differs by asset class.",
            ],
            [
              "How does ESG integration differ for fixed income?",
              "How can ESG affect credit risk?",
            ]
          ),
          lesson(
            "cfa-esg-full-m7-l5",
            "Integration pitfalls",
            30,
            ["Avoid pitfalls", "Ensure rigour"],
            [
              "Avoid double-counting ESG risk.",
              "Do not confuse ESG scores with financial materiality.",
              "Beware data quality and comparability issues.",
              "Keep integration transparent and evidence-based.",
            ],
            [
              "Why avoid confusing ESG scores with materiality?",
              "What is a risk of double-counting ESG factors?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Materiality: factor affects value/risk; varies by sector.",
          "Valuation integration: adjust cash flows, discount rate, or terminal value.",
          "Scenario analysis for uncertain ESG outcomes.",
          "Fixed income: ESG → creditworthiness and spreads.",
        ],
        commonTraps: [
          "Treating ESG scores as financial materiality.",
          "Double-counting ESG risk in a model.",
          "Applying immaterial factors that add noise.",
          "Opaque, unjustified valuation adjustments.",
        ],
        examTechnique: [
          "Assess materiality before integrating.",
          "State where in the model ESG is reflected.",
          "Differentiate equity and fixed-income integration.",
        ],
        practicePlan: [
          "Week 1: materiality and financial analysis.",
          "Week 2: valuation integration and scenarios.",
          "Week 3: asset-class integration, pitfalls, and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "SASB materiality map (reference).",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m8",
        examId: "cfa-esg",
        levelId: "full",
        title: "ESG-integrated portfolio construction, screening & optimisation",
        examFormat:
          "Multiple-choice and item-set questions on ESG portfolio construction and optimisation.",
        estimatedStudyHours: 22,
        overview:
          "This module covers building ESG portfolios: applying screening, integration, tilts, and optimisation while managing risk, tracking error, and unintended exposures across asset classes.",
        whyItMatters:
          "Portfolio construction turns ESG analysis into investable portfolios. Balancing ESG objectives with risk and return is a core, tested competency.",
        learningOutcomes: [
          "Apply screening and integration in portfolio construction.",
          "Construct ESG tilts and best-in-class portfolios.",
          "Use optimisation to balance ESG and financial objectives.",
          "Manage tracking error and unintended exposures.",
          "Construct thematic and impact portfolios.",
          "Apply ESG across asset classes.",
        ],
        syllabusAreas: [
          area(
            "Construction approaches",
            [
              "Screening in portfolios",
              "Tilts and best-in-class",
              "Thematic and impact portfolios",
            ],
            "35–40%"
          ),
          area(
            "Optimisation and risk",
            [
              "ESG optimisation",
              "Tracking error and constraints",
              "Unintended exposures",
            ],
            "35–40%"
          ),
          area(
            "Asset classes",
            [
              "Equity portfolios",
              "Fixed-income portfolios",
              "Multi-asset considerations",
            ],
            "25–30%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m8-l1",
            "Screening in portfolios",
            45,
            ["Apply screening", "Assess impact on portfolio"],
            [
              "Screening removes or favours securities by ESG criteria.",
              "Exclusions can create sector and factor tilts.",
              "Best-in-class keeps exposure while favouring leaders.",
              "Screening affects diversification and tracking error.",
            ],
            [
              "How can exclusions create unintended tilts?",
              "How does best-in-class differ from exclusion in portfolio impact?",
            ]
          ),
          lesson(
            "cfa-esg-full-m8-l2",
            "Tilts and integration",
            50,
            ["Construct tilts", "Integrate ESG"],
            [
              "ESG tilts overweight higher-ESG securities.",
              "Integration blends ESG into the selection and weighting process.",
              "Tilts balance ESG objectives with risk.",
              "Construction should be deliberate and measured.",
            ],
            [
              "What is an ESG tilt?",
              "How does integration affect weighting?",
            ]
          ),
          lesson(
            "cfa-esg-full-m8-l3",
            "Optimisation",
            50,
            ["Use optimisation", "Balance objectives"],
            [
              "Optimisation maximises ESG or return subject to constraints.",
              "Constraints control tracking error and exposures.",
              "Trade-offs exist between ESG improvement and tracking error.",
              "Optimisation makes trade-offs explicit.",
            ],
            [
              "What does ESG optimisation balance?",
              "How do constraints control unintended exposures?",
            ],
            "An optimiser might maximise a portfolio's ESG score while constraining tracking error to 1% and sector weights to benchmark — improving ESG without drifting far from the benchmark's risk profile."
          ),
          lesson(
            "cfa-esg-full-m8-l4",
            "Managing risk and exposures",
            40,
            ["Manage tracking error", "Detect unintended exposures"],
            [
              "ESG choices can create factor, sector, or regional biases.",
              "Monitor and control unintended exposures.",
              "Tracking error measures deviation from benchmark.",
              "Risk management preserves objectives.",
            ],
            [
              "What unintended exposures can ESG construction create?",
              "What does tracking error measure?",
            ]
          ),
          lesson(
            "cfa-esg-full-m8-l5",
            "Asset-class construction",
            35,
            ["Construct across assets", "Apply thematic/impact"],
            [
              "Equity portfolios use scores, tilts, and optimisation.",
              "Fixed-income portfolios integrate ESG into credit and issuer selection.",
              "Thematic and impact portfolios target specific outcomes.",
              "Approaches adapt to each asset class.",
            ],
            [
              "How does ESG construction differ in fixed income?",
              "What distinguishes an impact portfolio?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Construction toolkit: screening + tilts + integration + optimisation.",
          "Optimisation: maximise ESG/return subject to risk constraints.",
          "Tracking error = deviation from benchmark returns.",
          "Watch unintended factor/sector/regional exposures.",
        ],
        commonTraps: [
          "Ignoring unintended tilts from exclusions.",
          "Maximising ESG without controlling tracking error.",
          "Overlooking diversification impacts of screening.",
          "Applying equity methods unchanged to fixed income.",
        ],
        examTechnique: [
          "Identify how each approach affects risk and exposures.",
          "Recognise the ESG-vs-tracking-error trade-off.",
          "Adapt construction to the asset class.",
        ],
        practicePlan: [
          "Week 1: screening and tilts.",
          "Week 2: optimisation and risk.",
          "Week 3: asset-class construction and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "Portfolio construction references.",
        ],
      }),
      courseware({
        moduleId: "cfa-esg-full-m9",
        examId: "cfa-esg",
        levelId: "full",
        title: "Investment mandates, portfolio analytics & client reporting",
        examFormat:
          "Multiple-choice and item-set questions on mandates, ESG analytics, and reporting.",
        estimatedStudyHours: 20,
        overview:
          "This final module covers translating ESG objectives into mandates, measuring and reporting ESG performance, and communicating with clients — including analytics, benchmarks, and avoiding greenwashing in reporting.",
        whyItMatters:
          "Mandates and reporting close the loop between client objectives and outcomes. Clear, honest ESG reporting is essential to trust, compliance, and combating greenwashing.",
        learningOutcomes: [
          "Translate ESG objectives into investment mandates.",
          "Define ESG-related investment guidelines and constraints.",
          "Apply ESG portfolio analytics and metrics.",
          "Select appropriate ESG benchmarks.",
          "Report ESG performance to clients transparently.",
          "Avoid greenwashing in reporting and marketing.",
        ],
        syllabusAreas: [
          area(
            "Mandates and guidelines",
            [
              "Translating objectives into mandates",
              "Guidelines and constraints",
              "ESG in the IPS",
            ],
            "35–40%"
          ),
          area(
            "Analytics and benchmarks",
            [
              "ESG portfolio metrics",
              "Benchmark selection",
              "Attribution",
            ],
            "30–35%"
          ),
          area(
            "Reporting",
            [
              "Client reporting and transparency",
              "Regulatory disclosure",
              "Avoiding greenwashing",
            ],
            "25–35%"
          ),
        ],
        lessons: [
          lesson(
            "cfa-esg-full-m9-l1",
            "Translating objectives into mandates",
            50,
            ["Define mandates", "Set guidelines"],
            [
              "Client ESG objectives must be translated into clear mandates.",
              "Guidelines specify approaches, exclusions, and constraints.",
              "The investment policy statement documents ESG objectives.",
              "Clarity prevents mismatched expectations.",
            ],
            [
              "How are ESG objectives translated into a mandate?",
              "What should ESG guidelines specify?",
            ]
          ),
          lesson(
            "cfa-esg-full-m9-l2",
            "ESG portfolio analytics",
            50,
            ["Apply ESG metrics", "Interpret analytics"],
            [
              "ESG metrics include portfolio ESG scores, carbon intensity, and exposure measures.",
              "Analytics quantify ESG characteristics and risks.",
              "Metrics have limitations and data caveats.",
              "Use multiple metrics for a full picture.",
            ],
            [
              "What ESG portfolio metrics are commonly used?",
              "Why use multiple ESG metrics?",
            ],
            "Reporting a portfolio's weighted-average carbon intensity alongside its ESG score gives a fuller picture than either alone — one captures climate exposure, the other broad ESG quality."
          ),
          lesson(
            "cfa-esg-full-m9-l3",
            "Benchmarks and attribution",
            45,
            ["Select benchmarks", "Attribute performance"],
            [
              "ESG benchmarks should match the mandate's approach.",
              "Attribution separates ESG and non-ESG effects.",
              "Inappropriate benchmarks mislead evaluation.",
              "Benchmarks anchor performance assessment.",
            ],
            [
              "Why must an ESG benchmark match the mandate?",
              "What does ESG attribution separate?",
            ]
          ),
          lesson(
            "cfa-esg-full-m9-l4",
            "Client reporting",
            40,
            ["Report transparently", "Meet disclosure needs"],
            [
              "Reports should clearly communicate ESG characteristics and outcomes.",
              "Transparency builds trust and meets regulation.",
              "Reporting covers both financial and ESG results.",
              "Consistency aids comparability.",
            ],
            [
              "What should ESG client reporting cover?",
              "Why is transparency important in reporting?",
            ]
          ),
          lesson(
            "cfa-esg-full-m9-l5",
            "Avoiding greenwashing",
            30,
            ["Recognise greenwashing", "Ensure integrity"],
            [
              "Greenwashing overstates or misrepresents ESG credentials.",
              "Claims must be accurate, substantiated, and consistent with practice.",
              "Regulation increasingly targets greenwashing.",
              "Integrity protects clients and reputation.",
            ],
            [
              "What is greenwashing in reporting?",
              "How can managers avoid greenwashing?",
            ]
          ),
        ],
        frameworksAndFormulas: [
          "Mandate flow: client objectives → guidelines/constraints → IPS.",
          "ESG metrics: portfolio ESG score, carbon intensity, exposures.",
          "Benchmark must match the mandate's ESG approach.",
          "Anti-greenwashing: accurate, substantiated, consistent claims.",
        ],
        commonTraps: [
          "Vague mandates that misalign expectations.",
          "Relying on a single ESG metric.",
          "Using benchmarks that do not match the mandate.",
          "Overstated or unsubstantiated ESG claims.",
        ],
        examTechnique: [
          "Trace client objectives through to mandate and reporting.",
          "Use multiple metrics and matched benchmarks.",
          "Flag greenwashing risks in reporting scenarios.",
        ],
        practicePlan: [
          "Week 1: mandates and guidelines.",
          "Week 2: analytics and benchmarks.",
          "Week 3: reporting, greenwashing, and practice questions.",
        ],
        furtherReading: [
          "CFA Institute — Certificate in ESG Investing curriculum.",
          "Regulatory anti-greenwashing guidance.",
        ],
      }),
    ],
  },
];
